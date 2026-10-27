const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const W='https://wa.me/5518936191848?text=';
const P=[['Naked de morango','Chocolate, creme e morangos, com laço vermelho','images/morango_laco.jpg'],
['Bolo Ferrero','Chocolate com bombons dourados no topo','images/ferrero.jpg'],
['Bolo de brigadeiro','Camadas de chocolate, granulado e laço azul','images/brigadeiro.jpg'],
['Chocolate com morangos','Ganache cremosa e morangos frescos','images/morango_flor.jpg']];
$('#prods').innerHTML=P.map(p=>`<article class="p"><div class="pi"><img src="${p[2]}" alt="${p[0]}" loading="lazy"></div><div class="pb"><h3>${p[0]}</h3><p>${p[1]}</p><div class="price">Sob encomenda</div><a class="btn" data-wa="Olá! Quero encomendar: ${p[0]}">Pedir no WhatsApp</a></div></article>`).join('');
$$('[data-wa]').forEach(a=>a.href=W+encodeURIComponent(a.dataset.wa));
$('#burger').onclick=()=>{const o=$('#nav').classList.toggle('open');$('#burger').setAttribute('aria-expanded',o)};
$$('nav a').forEach(a=>a.onclick=()=>{$('#nav').classList.remove('open');$('#burger').setAttribute('aria-expanded','false')});
$('#theme').onclick=()=>{const d=document.documentElement;d.dataset.theme=getComputedStyle(d).colorScheme==='dark'?'light':'dark'};
const S=$$('.slide'),D=$('#dots');let c=0,tm,x0;
S.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(i+1));b.onclick=()=>go(i);D.append(b)});
function go(i){c=(i+S.length)%S.length;S.forEach((s,k)=>s.classList.toggle('on',k===c));[...D.children].forEach((b,k)=>b.classList.toggle('on',k===c));clearInterval(tm);tm=setInterval(()=>go(c+1),5500)}
$('#pv').onclick=()=>go(c-1);$('#nx').onclick=()=>go(c+1);go(0);
const H=$('.hero');H.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
H.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)go(c+(d<0?1:-1))});
$('#y').textContent=new Date().getFullYear();
