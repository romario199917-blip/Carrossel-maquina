import sys,os
from playwright.sync_api import sync_playwright
from PIL import Image
post=sys.argv[1]; scale=int(sys.argv[2]) if len(sys.argv)>2 else 3
R='/home/claude/rr/'; D=R+f'posts/{post}/'
html=open(R+'maquina.html').read().replace('POSTFILE',f'posts/{post}/post.js')
open(R+'_run.html','w').write(html)
with sync_playwright() as pw:
    b=pw.chromium.launch(); pg=b.new_page(viewport={'width':2400,'height':1500},device_scale_factor=scale)
    pg.goto('file://'+R+'_run.html'); pg.wait_for_function('window.fitDone===true'); pg.wait_for_timeout(700)
    print(pg.evaluate("report()"))
    ids=pg.evaluate("[...document.querySelectorAll('.s')].map(s=>s.id)")
    ims=[]
    for i in ids:
        p=D+f'_{i}.png'; pg.locator('#'+i).screenshot(path=p)
        im=Image.open(p).convert('RGB').resize((1080,1350),Image.LANCZOS); os.remove(p)
        im.save(D+f'{i[1:].zfill(2)}.jpg',quality=92,optimize=True); ims.append(im)
    b.close()
s=Image.new('RGB',(len(ims)*432,540))
for k,im in enumerate(ims): s.paste(im.resize((432,540)),(k*432,0))
s.save(D+'contato.png'); print(len(ims),'slides')
