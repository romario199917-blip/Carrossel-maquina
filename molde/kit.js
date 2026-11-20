// Kit do molde aprovado: CSS, cabeçalho, seta e modelos de slide.
// Uso: <script src="molde/kit.js"></script> e depois montar(lista de slides). Caminhos relativos à raiz do repositório.
(function(){
const css=`
@font-face{font-family:ISerif;src:url(node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2)}
@font-face{font-family:ISerif;font-style:italic;src:url(node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2)}
@font-face{font-family:Sans;src:url(node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2) format('woff2-variations');font-weight:100 1000}
@font-face{font-family:Pinyon;src:url(node_modules/@fontsource/pinyon-script/files/pinyon-script-latin-400-normal.woff2)}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#111;display:flex;flex-wrap:wrap;gap:40px;padding:40px;width:3440px}
.s{width:1080px;height:1350px;position:relative;overflow:hidden;font-family:Sans;-webkit-font-smoothing:antialiased;background:var(--bg);color:var(--fg)}
.s>*{position:absolute}
.creme{--bg:#EFE8DA;--fg:#2A1B12;--mut:#7A6A5B;--acc:#6B1F28;--soft:#A38563;--line:rgba(42,27,18,.28);--card:#E4DAC6}
.cafe{--bg:#2A1D15;--fg:#F4EDDF;--mut:#B9A894;--acc:#CDB38E;--soft:#CDB38E;--line:rgba(244,237,223,.38);--card:rgba(255,240,215,.06)}
.bordo{--bg:#3A1016;--fg:#F6EEE1;--mut:#CDB0A8;--acc:#D9BE9B;--soft:#D9BE9B;--line:rgba(246,238,225,.36);--card:rgba(255,235,220,.06)}
.musgo{--bg:#343A29;--fg:#F2EDDD;--mut:#BFC0A8;--acc:#DCD0A8;--soft:#DCD0A8;--line:rgba(242,237,221,.38);--card:rgba(255,250,225,.07)}
.bgimg{inset:0;width:100%;height:100%;object-fit:cover}
.light{inset:0;pointer-events:none}
.paper{inset:0;pointer-events:none;z-index:1;
 background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='360' height='360'><filter id='p' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='4' seed='7' stitchTiles='stitch'/><feDiffuseLighting lighting-color='white' surfaceScale='1.6'><feDistantLight azimuth='40' elevation='62'/></feDiffuseLighting></filter><rect width='100%' height='100%' filter='url(%23p)'/></svg>")}
.creme .paper{mix-blend-mode:multiply;opacity:.5}
.cafe .paper,.bordo .paper,.musgo .paper{mix-blend-mode:soft-light;opacity:.55}
.wm{font-family:ISerif;line-height:.8;color:var(--fg);opacity:.05;pointer-events:none;z-index:1;white-space:nowrap}
.z{z-index:3}
.deco{pointer-events:none;z-index:2}
.hd{left:84px;right:84px;top:76px;display:flex;align-items:center;justify-content:space-between;z-index:4}
.hd .me{display:flex;align-items:center;gap:20px}
.hd img{width:88px;height:88px;border-radius:50%;object-fit:cover;box-shadow:0 0 0 2px var(--bg),0 0 0 3.5px var(--soft),0 10px 22px rgba(0,0,0,.28)}
.hd .n{display:flex;align-items:center;gap:9px;font-weight:700;font-size:32px;letter-spacing:-.01em}
.hd .u{font-size:25px;color:var(--mut);margin-top:1px}
.hd svg{width:30px;height:30px}
.lab{font-size:23px;letter-spacing:.2em;text-transform:uppercase;font-weight:500;color:var(--mut)}
.lab b{font-weight:800;color:var(--fg)}
.go{width:92px;height:92px;border-radius:50%;border:1.5px solid var(--line);display:grid;place-items:center;color:var(--fg)}
.h{font-family:ISerif;font-weight:400;line-height:.9;letter-spacing:-.035em;white-space:nowrap}
.h i{color:var(--soft);letter-spacing:-.03em}
.scr{font-family:Pinyon;line-height:1;white-space:nowrap}
.p{font-size:36px;line-height:1.36;font-weight:400}
.p b{font-weight:700}
.rule{background:var(--line)}
.glass{background:var(--card);border:1.5px solid var(--line);border-radius:36px;box-shadow:0 40px 60px -24px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.10)}
.creme .glass{box-shadow:0 40px 60px -28px rgba(90,60,30,.35),inset 0 1px 0 rgba(255,255,255,.5)}
.pill{display:inline-block;border:1.5px solid var(--line);border-radius:999px;padding:11px 26px;font-size:22px;letter-spacing:.22em;text-transform:uppercase;font-weight:500;white-space:nowrap}
.sel{position:relative;display:inline-block;padding:0 .12em .04em;background:color-mix(in srgb,var(--soft) 22%,transparent);outline:1.5px solid var(--soft)}
.sel::before,.sel::after{content:"";position:absolute;width:13px;height:13px;background:var(--soft)}
.sel::before{left:-7px;top:-7px}.sel::after{right:-7px;bottom:-7px}
.sel b.c1,.sel b.c2{position:absolute;width:13px;height:13px;background:var(--soft)}
.sel b.c1{right:-7px;top:-7px}.sel b.c2{left:-7px;bottom:-7px}
.blur{position:relative;display:inline-block}
.blur::before{content:attr(data-t);position:absolute;left:0;top:0;filter:blur(9px);opacity:.75}
.blur span{-webkit-mask-image:linear-gradient(90deg,#000 0,#000 58%,transparent 92%);mask-image:linear-gradient(90deg,#000 0,#000 58%,transparent 92%)}
.flow{left:84px;right:84px;top:250px;z-index:3}
.flow *{position:static}
.flow .glass,.flow .sel,.flow .blur{position:relative}
.flow .sel b,.flow .ck{position:absolute}
.hud{display:flex;align-items:center;gap:22px}
.grad{background:linear-gradient(180deg,#FBF3E4 18%,#D9C3A0 72%,#A88A66);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 26px 30px rgba(0,0,0,.5))}
.creme .grad{background:linear-gradient(180deg,#6B1F28 5%,#8A4A32 60%,#A38563 100%);-webkit-background-clip:text;background-clip:text;filter:drop-shadow(0 18px 20px rgba(90,50,30,.22))}
.card2{background:#EFE8DA;color:#2A1B12;border-radius:36px;box-shadow:0 50px 70px -22px rgba(0,0,0,.6);--line:rgba(42,27,18,.28);--fg:#2A1B12;--mut:#7A6A5B;--soft:#A38563}
.cta{display:inline-flex;align-items:center;gap:18px;background:var(--fg);color:var(--bg);padding:26px 40px;border-radius:999px;font-size:30px;font-weight:700;box-shadow:0 22px 30px -12px rgba(0,0,0,.5);white-space:nowrap}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

const badge='<svg viewBox="0 0 24 24"><path fill="#1D9BF0" d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484z"/><path fill="#fff" d="M10.54 16.2 6.8 12.46l1.41-1.41 2.33 2.33 5.24-5.24 1.41 1.41z"/></svg>';
const hd=()=>`<div class="hd"><div class="me"><img src="marca/avatar.jpg"><div><div class="n">Romário Renan ${badge}</div><div class="u">@romariorenan.mkt</div></div></div></div>`;
const arrow='<svg width="40" height="16" viewBox="0 0 40 16"><path d="M1 8h36M30 2l7 6-7 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const go=`<div class="go z" style="right:84px;bottom:74px">${arrow}</div>`;
const sel=t=>`<span class="sel">${t}<b class="c1"></b><b class="c2"></b></span>`;
const blur=t=>`<span class="blur" data-t="${t}"><span>${t}</span></span>`;
const icon={
 envio:'<svg width="32" height="28" viewBox="0 0 34 30"><path d="M2 14 32 2 22 28l-6-10z M16 18 32 2" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/></svg>',
 salva:'<svg width="26" height="30" viewBox="0 0 26 30"><path d="M3 2h20v26l-10-8-10 8z" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/></svg>',
 comenta:'<svg width="32" height="30" viewBox="0 0 32 30"><path d="M3 3h26v18H14l-7 6v-6H3z" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/></svg>'};
// luz: pos = canto da luz clara ('15% 0%'); o canto oposto escurece
const luz=(tema,pos='15% 0%')=>{const [x,y]=pos.split(' ').map(parseFloat);const op=`${100-x}% ${100-y+5}%`;
 return tema==='creme'
 ?`<div class="light" style="background:radial-gradient(80% 60% at ${pos},rgba(255,255,255,.58),transparent 70%),radial-gradient(90% 60% at ${op},rgba(150,115,75,.22),transparent 70%)"></div><div class="paper"></div>`
 :`<div class="light" style="background:radial-gradient(70% 50% at ${pos},rgba(255,205,170,.20),transparent 70%),radial-gradient(110% 70% at ${op},rgba(0,0,0,.55),transparent 70%)"></div><div class="paper"></div>`};
const wm=(t,style)=>`<div class="wm" style="${style}">${t}</div>`;
const folha=(op=.6,flip=false)=>`<img class="bgimg" src="marca/luz-folhagem.jpg" style="mix-blend-mode:soft-light;opacity:${op};${flip?'transform:scaleX(-1)':''}">`;
const base=o=>`${o.fundo||''}${luz(o.tema,o.luz)}${o.extra||''}${hd()}`;
const lines=(ls,fs,cls='',st='')=>ls.map(l=>`<div class="h ${cls}" style="font-size:${fs}px;${st}">${l}</div>`).join('');

const M={
 // Capa A: tipográfica, centralizada
 capaA:o=>`<section class="s ${o.tema}" id="${o.id}">${base(o)}
  <div class="flow" style="top:250px;text-align:center">
   <span class="pill" style="${o.tema==='creme'?'':'background:rgba(0,0,0,.18)'}">${o.pill}</span>
   <div style="margin-top:46px">${lines(o.linhas,o.fs||124,'','line-height:.96')}</div>
   <div class="h grad" style="font-size:${o.fsG||380}px;letter-spacing:-.05em;line-height:1.12;margin-top:${o.mtG??-30}px;padding-bottom:.06em">${o.grande}</div>
  </div>
  <div class="z" style="left:84px;bottom:92px;display:flex;align-items:center;gap:24px"><div class="rule" style="width:80px;height:1.5px"></div>
   <div class="p" style="font-size:34px;color:var(--mut)">${o.sub}</div></div>${go}</section>`,
 // Capa B: título à esquerda, caixa de seleção e objeto da biblioteca
 capaB:o=>`<section class="s ${o.tema}" id="${o.id}">${base(o)}
  <div class="z" style="left:84px;top:256px"><span class="pill">${o.pill}</span></div>
  <div class="flow" style="top:350px">${lines(o.linhas,o.fs||176,'t','line-height:.94')}</div>
  <img class="z" src="${o.obj}" style="${o.objStyle}">
  <div class="z" style="left:84px;bottom:74px;display:flex;align-items:center;gap:26px"><div class="go" style="position:static">${arrow}</div><div class="p" style="font-size:34px;color:var(--mut)">${o.sub}</div></div></section>`,
 // Texto: rótulo, título grande, parágrafo e quadro de vidro
 texto:o=>`<section class="s ${o.tema} case" id="${o.id}">${base(o)}
  <div class="flow">
   <div class="hud">${o.lab?`<span class="lab"><b>${o.lab}</b></span>`:''}<span class="pill">${o.pill}</span></div>
   <div style="margin-top:44px">${lines(o.linhas,o.fs||216,'t')}</div>
   <div class="p" style="margin-top:44px;font-size:40px">${o.body}</div>
   ${o.box?`<div class="glass" style="padding:42px 46px 46px;margin-top:54px">${o.boxLab?`<div class="lab">${o.boxLab}</div>`:''}<div class="p" style="font-size:40px;${o.boxLab?'margin-top:14px':''}">${o.box}</div></div>`:''}
  </div>${go}</section>`,
 // Dado: número gigante e cartão de vidro
 dado:o=>`<section class="s ${o.tema}" id="${o.id}">${base(o)}
  <div class="z hud" style="left:84px;top:256px">${o.lab?`<span class="lab"><b>${o.lab}</b></span>`:''}<span class="pill">${o.pill}</span></div>
  <div class="z h grad" style="left:84px;top:${o.topN||322}px;font-size:${o.fsN||400}px;letter-spacing:-.06em">${o.num}</div>
  <div class="glass z" style="left:84px;right:84px;top:${o.topC||730}px;padding:42px 52px 44px">
   ${lines(o.linhas,o.fs||86)}
   <div class="p" style="margin-top:28px;font-size:36px;color:var(--mut)">${o.body}</div></div>${go}</section>`,
 // Comparação: dois cartões (vidro e creme)
 comp:o=>{const card=(c,claro)=>`<div class="lab">${c.lab}</div><div class="rule" style="height:1.5px;margin:24px 0 26px"></div>
   ${c.big?`<div class="h" style="font-size:${c.fsBig||124}px;${claro?'color:#6B1F28':''}">${c.big}</div>`:''}
   ${c.itens?c.itens.map((t,i)=>c.serif?`<div class="h" style="font-size:${c.fsI||76}px;line-height:1.3;letter-spacing:-.025em">${t}</div>`:`<div class="p" style="font-size:${c.fsI||35}px;line-height:1.25;padding:18px 0;${i?'border-top:1.5px solid var(--line)':''}">${t}</div>`).join(''):''}
   ${c.txt?`<div class="p" style="font-size:33px;margin-top:22px;line-height:1.32">${c.txt}</div>`:''}`;
  return `<section class="s ${o.tema}" id="${o.id}">${base(o)}
  <div class="flow" style="top:244px">${lines(o.linhas,o.fs||176)}</div>
  <div class="glass z" style="left:84px;top:${o.topC||650}px;width:440px;height:${o.hC||470}px;padding:42px 40px">${card(o.a)}</div>
  <div class="z card2" data-card style="left:556px;top:${(o.topC||650)-30}px;width:440px;height:${(o.hC||470)+60}px;padding:46px 40px">${card(o.b,true)}
   ${o.semCheck?'':`<div class="ck" style="position:absolute;right:-22px;top:-22px;width:76px;height:76px;border-radius:50%;background:var(--bgd,#343A29);border:1.5px solid #DCD0A8;display:grid;place-items:center"><svg width="34" height="26" viewBox="0 0 34 26"><path d="M3 13l9 9L31 3" fill="none" stroke="#DCD0A8" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`}</div>
  ${o.nota?`<div class="z p" style="left:84px;right:200px;top:${(o.topC||650)+(o.hC||470)+62}px;font-size:30px;color:var(--mut);line-height:1.3">${o.nota}</div>`:''}${go}</section>`},
 // Lista: cartão de vidro com itens numerados
 lista:o=>`<section class="s ${o.tema}" id="${o.id}">${base(o)}
  <div class="z hud" style="left:0;right:0;top:256px;justify-content:center"><span class="pill">${o.pill}</span></div>
  <div class="glass z" style="left:84px;right:84px;top:340px;padding:50px 58px 14px">
   ${lines(o.linhas,o.fs||112,'','text-align:center')}
   <div style="margin-top:36px;border-top:1.5px solid var(--line)">
   ${o.itens.map(([n,t],i,a)=>`<div style="display:flex;gap:30px;align-items:center;padding:${o.pad||20}px 6px;${i<a.length-1?'border-bottom:1.5px solid var(--line)':''}"><div class="h nofit" style="font-size:${o.fsNum||112}px;font-style:italic;color:var(--soft);min-width:${o.wNum||64}px;line-height:.8">${n}</div><div class="p" style="font-size:37px;line-height:1.3">${t}</div></div>`).join('')}
   </div></div>
  ${o.nota?`<div class="z p" style="left:84px;right:200px;bottom:84px;font-size:30px;color:var(--mut);line-height:1.3">${o.nota}</div>`:''}${go}</section>`,
 // Fechamento: sem seta
 fim:o=>`<section class="s ${o.tema}" id="${o.id}">${base(o)}
  ${o.obj?`<img class="z" src="${o.obj}" style="${o.objStyle}">`:''}
  <div class="flow" style="top:270px">
   ${lines(o.linhas,o.fs||206)}
   <div class="scr" style="font-size:${o.fsS||150}px;color:var(--acc);margin:24px 0 0 16px">${o.script}</div>
   <div style="display:flex;gap:32px;margin-top:70px"><div class="rule" style="width:2px;background:var(--soft)"></div><div class="p" style="width:${o.wBody||560}px;font-size:36px">${o.body}</div></div>
   <div style="margin-top:64px"><span class="cta">${icon[o.icone||'envio']}${o.cta}</span></div>
  </div></section>`
};

window.kit={sel,blur,wm,folha,luz,hd,go};
window.montar=slides=>{
 document.body.innerHTML=slides.map((o,i)=>M[o.m]({id:'s'+(i+1),...o})).join('\n');
 document.fonts.ready.then(()=>{
  const fitW=e=>{const s=e.closest('.s').getBoundingClientRect(); const c=e.closest('.glass,[data-card]');
   let L=s.left+84,R=s.right-84; if(c){const r=c.getBoundingClientRect(),cs=getComputedStyle(c);L=r.left+parseFloat(cs.paddingLeft);R=r.right-parseFloat(cs.paddingRight)}
   const g=document.createRange();g.selectNodeContents(e); let fs=parseFloat(getComputedStyle(e).fontSize);
   for(let i=0;i<120;i++){const q=g.getBoundingClientRect(); if(q.right<=R+1&&q.left>=L-1)break; fs-=3; e.style.fontSize=fs+'px';}};
  document.querySelectorAll('.h:not(.nofit),.scr').forEach(fitW);
  // títulos do mesmo bloco ficam do mesmo tamanho; depois ajusta a altura
  document.querySelectorAll('.s').forEach(s=>{const ts=[...s.querySelectorAll('.flow>div>.h.t,.flow>.h.t')]; if(!ts.length)return;
   let fs=Math.min(...ts.map(t=>parseFloat(getComputedStyle(t).fontSize))); ts.forEach(t=>t.style.fontSize=fs+'px');
   if(!s.classList.contains('case'))return; const top=s.getBoundingClientRect().top, fl=s.querySelector('.flow');
   for(let i=0;i<30 && fl.getBoundingClientRect().bottom-top>1150 && fs>110;i++){fs-=4;ts.forEach(t=>t.style.fontSize=fs+'px');}});
  window.fitDone=true;});
};
window.report=()=>[...document.querySelectorAll('.s')].map(s=>{const r=s.getBoundingClientRect();let bad=[];
 s.querySelectorAll('.h,.p,.scr,.pill,.glass,.flow,.cta,.card2').forEach(e=>{const q=e.getBoundingClientRect();
  if(q.right>r.right-60||q.left<r.left+60)bad.push('LARG '+e.textContent.trim().slice(0,16));
  if(q.bottom-r.top>1290)bad.push('FUNDO '+Math.round(q.bottom-r.top)+' '+e.textContent.trim().slice(0,16));
  if(q.bottom-r.top>1170&&q.right-r.left>880&&s.querySelector('.go.z'))bad.push('ALT '+Math.round(q.bottom-r.top)+' '+e.textContent.trim().slice(0,16));});
 s.querySelectorAll('.glass,.card2').forEach(c=>{const cb=c.getBoundingClientRect();c.querySelectorAll('.h,.p').forEach(e=>{if(e.getBoundingClientRect().bottom>cb.bottom-20)bad.push('VAZA '+e.textContent.trim().slice(0,16))})});
 return s.id+': '+(bad.join(' | ')||'ok')}).join('\n');
})();
