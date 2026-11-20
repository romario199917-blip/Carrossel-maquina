let seed=7;const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
function palm(bx,by,h,lean,col='#150A26',n=13){
 const cx=bx+lean,cy=by-h,L=h*.4;let p='';const w=h*.013;
 p+=`<path d="M${bx-w*1.6},${by} C${bx+lean*.1-w},${by-h*.4} ${bx+lean*.6-w*.8},${by-h*.8} ${cx-w*.6},${cy} L${cx+w*.6},${cy} C${bx+lean*.6+w*.8},${by-h*.8} ${bx+lean*.1+w},${by-h*.4} ${bx+w*1.6},${by}Z" fill="${col}"/>`;
 p+=`<circle cx="${cx-w*1.3}" cy="${cy+w*1.6}" r="${w*1.15}" fill="${col}"/><circle cx="${cx+w*1.2}" cy="${cy+w*1.9}" r="${w*1.1}" fill="${col}"/><circle cx="${cx}" cy="${cy+w*.4}" r="${w*1.6}" fill="${col}"/>`;
 for(let k=0;k<n;k++){
  const a=(-192+k*(204/(n-1))+(rnd()-.5)*12)*Math.PI/180,len=L*(.8+rnd()*.4),ca=Math.cos(a),sa=Math.sin(a);
  const up=-sa,dr=(.16+rnd()*.3)*(1.25-.6*up);const P=[[cx,cy],[cx+len*.45*ca,cy+len*.55*sa-len*.06],[cx+len*.9*ca,cy+len*.8*sa+len*dr*.25],[cx+len*1.08*ca,cy+len*.7*sa+len*dr]];
  const B=t=>{const u=1-t;return [0,1].map(i=>u*u*u*P[0][i]+3*u*u*t*P[1][i]+3*u*t*t*P[2][i]+t*t*t*P[3][i])};
  const D=t=>{const u=1-t;return [0,1].map(i=>3*u*u*(P[1][i]-P[0][i])+6*u*t*(P[2][i]-P[1][i])+3*t*t*(P[3][i]-P[2][i]))};
  p+=`<path d="M${P[0]} C${P[1]} ${P[2]} ${P[3]}" fill="none" stroke="${col}" stroke-width="${h*.009}" stroke-linecap="round"/>`;
  const bw=len*.016;
  for(let t=.07;t<=.99;t+=.03){const [x,y]=B(t);let [tx,ty]=D(t);const m=Math.hypot(tx,ty)||1;tx/=m;ty/=m;
   const sh=Math.pow(Math.sin(Math.PI*Math.pow(t,.75)),.6)*(1-.35*t)+.08, ll=len*.36*sh*(.85+rnd()*.3);
   // folíolo de baixo: pende
   let dx=.45*tx,dy=.45*ty+1;let dm=Math.hypot(dx,dy);dx/=dm;dy/=dm;
   p+=`<path d="M${(x-tx*bw).toFixed(1)},${(y-ty*bw).toFixed(1)} L${(x+tx*bw).toFixed(1)},${(y+ty*bw).toFixed(1)} L${(x+dx*ll).toFixed(1)},${(y+dy*ll).toFixed(1)}Z" fill="${col}"/>`;
   // folíolo de cima: curto, pra fora
   let nx=ty,ny=-tx; if(ny>0){nx=-nx;ny=-ny}
   let ux=.9*tx+.55*nx,uy=.9*ty+.55*ny+.25;dm=Math.hypot(ux,uy);ux/=dm;uy/=dm;const l2=ll*.5;
   p+=`<path d="M${(x-tx*bw).toFixed(1)},${(y-ty*bw).toFixed(1)} L${(x+tx*bw).toFixed(1)},${(y+ty*bw).toFixed(1)} L${(x+ux*l2).toFixed(1)},${(y+uy*l2).toFixed(1)}Z" fill="${col}"/>`;}}
 return p}
