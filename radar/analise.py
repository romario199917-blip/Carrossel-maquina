import json,sys,statistics as st,collections
raw=open(sys.argv[1]).read()
d=json.loads(raw)
rows=d.get('data',d) if isinstance(d,dict) else d
if isinstance(d,dict): print('keys:',list(d.keys())[:8])
print('linhas:',len(rows)); print('exemplo campos:',list(rows[0].keys()))
by=collections.defaultdict(list)
for r in rows: by[r['account_name']].append(r)
dates=sorted(r['media_timestamp'] for r in rows if r.get('media_timestamp'))
print('periodo:',dates[0][:10],'a',dates[-1][:10])
out=[]
print('\nPERFIL | posts | tipos | mediana curtidas | mediana coment.')
for a,rs in sorted(by.items(),key=lambda x:-len(x[1])):
    likes=[float(r.get('media_like_count') or 0) for r in rs]
    com=[float(r.get('media_comments_count') or 0) for r in rs]
    tipos=collections.Counter(r.get('media_type') for r in rs)
    ml=st.median(likes); mc=st.median(com)
    semlike=sum(1 for l in likes if l==0)
    print(f"{a} | {len(rs)} | {dict(tipos)} | {ml:.0f} | {mc:.0f} | sem curtida visivel:{semlike}")
    for r in rs:
        l=float(r.get('media_like_count') or 0); c=float(r.get('media_comments_count') or 0)
        r['_rl']=l/ml if ml else 0; r['_rc']=c/mc if mc else 0
        out.append(r)
json.dump(out,open('/home/claude/radar/posts.json','w'),ensure_ascii=False)
