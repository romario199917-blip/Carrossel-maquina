import sys,os
from playwright.sync_api import sync_playwright
from PIL import Image
html,out=sys.argv[1],sys.argv[2]; sc=int(sys.argv[3]) if len(sys.argv)>3 else 3
os.makedirs(out,exist_ok=True)
with sync_playwright() as pw:
    b=pw.chromium.launch(); pg=b.new_page(viewport={'width':3500,'height':1500},device_scale_factor=sc)
    pg.goto('file://'+os.path.abspath(html)); pg.wait_for_function('window.fitDone===true'); pg.wait_for_timeout(1000)
    print(pg.evaluate("report()")); ids=pg.evaluate("[...document.querySelectorAll('.s')].map(s=>s.id)"); ims=[]
    for k,i in enumerate(ids,1):
        t=f'{out}/_t.png'; pg.locator('#'+i).screenshot(path=t)
        im=Image.open(t).convert('RGB').resize((1080,1350),Image.LANCZOS); os.remove(t); im.save(f'{out}/{k:02d}.jpg',quality=92,optimize=True); ims.append(im)
    b.close()
s=Image.new('RGB',(len(ims)*432,540))
for k,im in enumerate(ims): s.paste(im.resize((432,540)),(k*432,0))
s.save(f'{out}/contato.png')
