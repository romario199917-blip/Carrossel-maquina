import json,collections,statistics as st
rows=json.load(open('/home/claude/radar/posts.json'))
by=collections.defaultdict(list)
for r in rows:
    if r.get('media_type')=='CAROUSEL_ALBUM': by[r['account_name']].append(r)
print('CARROSSEIS: destaque por comentarios vs mediana do proprio perfil (so carrosseis)\n')
allc=[]
for a,rs in by.items():
    com=[float(r.get('media_comments_count') or 0) for r in rs]; lk=[float(r.get('media_like_count') or 0) for r in rs]
    mc=st.median(com) or 1; ml=st.median([x for x in lk if x>0] or [0]) or 0
    for r in rs:
        c=float(r.get('media_comments_count') or 0); l=float(r.get('media_like_count') or 0)
        r['xc']=c/mc; r['xl']=(l/ml if ml and l else 0); r['mc']=mc; allc.append(r)
    print(f"{a}: {len(rs)} carrosseis | mediana coment {mc:.0f} | mediana curtidas visiveis {ml:.0f}")
print()
top=sorted(allc,key=lambda r:-max(r['xc'],r['xl']))
seen=collections.Counter(); n=0
for r in top:
    if seen[r['account_name']]>=4: continue
    if float(r.get('media_comments_count') or 0)<15 and float(r.get('media_like_count') or 0)<300: continue
    seen[r['account_name']]+=1; n+=1
    cap=(r.get('media_caption') or '').replace('\n',' ')[:170]
    print(f"[{r['account_name']}] {r['media_timestamp'][:10]} coment {float(r['media_comments_count'] or 0):.0f} ({r['xc']:.1f}x) curt {float(r['media_like_count'] or 0):.0f} ({r['xl']:.1f}x)\n   {cap}\n")
    if n>=26: break
