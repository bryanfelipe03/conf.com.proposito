/* ===== CONFIGURAÇÃO ===== */
const CFG={DB:'',PIN:'1234',WA:'5518936191848'};   // DB: URL do Firebase Realtime Database (vazio = modo demonstração, só neste aparelho)
const DEF={fatias:10},KN={fatias:'Fatias'};         // estoque inicial (fatias = 10)
const CATS=['Fatias','Brownies','Bolos'];
const ITEMS=[ // p: preço (null = valor a combinar) | k: grupo de estoque
{id:'f1',c:0,n:'Fatia de bolo',d:'Delícia em cada fatia! Conte o sabor nas observações.',p:20,k:'fatias',i:'images/fatia.jpg'},
{id:'b1',c:1,n:'Brownie',d:'Barra de chocolate com creme e morangos.',p:null,k:'',i:'images/brownie.jpg'},
{id:'o1',c:2,n:'Naked de morango',d:'Chocolate, creme e morangos, com laço vermelho.',p:null,k:'',i:'images/morango_laco.jpg'},
{id:'o2',c:2,n:'Bolo Ferrero',d:'Chocolate com bombons dourados no topo.',p:null,k:'',i:'images/ferrero.jpg'},
{id:'o3',c:2,n:'Bolo de brigadeiro',d:'Camadas de chocolate, granulado e laço azul.',p:null,k:'',i:'images/brigadeiro.jpg'},
{id:'o4',c:2,n:'Chocolate com morangos',d:'Ganache cremosa e morangos frescos.',p:null,k:'',i:'images/morango_flor.jpg'},
{id:'o5',c:2,n:'Bolo de frutas',d:'Morangos, mirtilos e limão, com laço rosa.',p:null,k:'',i:'images/rosa_limao.jpg'},
{id:'o6',c:2,n:'Bolo de coco',d:'Brigadeiro branco e coco, com laço preto.',p:null,k:'',i:'images/raffaello.jpg'}];
/* ===== BANCO ===== */
const db={
 async get(p){if(CFG.DB){const r=await fetch(`${CFG.DB}/${p}.json`);return r.json()}
  if(p==='orders'){const o={};try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k.startsWith('cp_orders/'))o[k.slice(10)]=JSON.parse(localStorage.getItem(k))}}catch(e){}return o}
  try{const v=localStorage.getItem('cp_'+p);return v?JSON.parse(v):null}catch(e){return null}},
 async set(p,v){if(CFG.DB){await fetch(`${CFG.DB}/${p}.json`,{method:'PUT',body:JSON.stringify(v)});return}
  try{localStorage.setItem('cp_'+p,JSON.stringify(v))}catch(e){}}};
/* ===== ESTADO ===== */
const $=s=>document.querySelector(s),I=id=>ITEMS.find(x=>x.id===id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const money=v=>v==null?'A combinar':'R$ '+v.toFixed(2).replace('.',',');
let ST={...DEF},OR={},cart=[],M={},ADM=false;
const used=k=>Object.values(OR).filter(o=>o&&o.st==='confirmado').reduce((s,o)=>s+(o.it||[]).filter(x=>x.k===k).reduce((a,x)=>a+x.q,0),0);
const left=k=>k&&ST[k]!=null?Math.max(0,ST[k]-used(k)):Infinity;
const flash=t=>{const e=$('#ts');e.textContent=t;e.classList.add('on');clearTimeout(flash.t);flash.t=setTimeout(()=>e.classList.remove('on'),2800)};
const show=id=>$('#'+id).classList.add('on'),hide=()=>document.querySelectorAll('.ov').forEach(o=>o.classList.remove('on'));
function tot(){let s=0,t=false;cart.forEach(c=>{const p=I(c.id).p;p==null?t=true:s+=p*c.q});return !s&&t?'A combinar':money(s)+(t?' + itens a combinar':'')}
/* ===== PÁGINAS ===== */
const FX=[['Feita à mão pela confeitaria','Reserva confirmada após aprovação do pedido','Retirada ou entrega combinada'],['Feito à mão pela confeitaria','Retirada ou entrega combinada'],['Feito sob encomenda, do seu jeito','Escolha sabor e cor do laço nas observações','Retirada ou entrega combinada']];
const my=()=>{try{return JSON.parse(localStorage.getItem('cp_my')||'[]')}catch(e){return[]}};
const addMy=c=>{try{localStorage.setItem('cp_my',JSON.stringify([c,...my().filter(x=>x!==c)].slice(0,30)))}catch(e){}};
let cur='',curId='',io;
const badge=()=>{const n=cart.reduce((s,c)=>s+c.q,0),b=$('#cn');b.hidden=!n;b.textContent=n};
const card=x=>{const l=left(x.k),off=l<1;return `<a class="it${off?' off':''}" href="#/produto/${x.id}" aria-label="${x.n}${off?' (indisponível)':''}"><div class="tx"><h3>${x.n}</h3><p>${x.d}</p><div class="pr">${money(x.p)}</div>${!off&&l<=3?`<div class="low">Restam ${l}</div>`:''}</div><div class="im"><img src="${x.i}" alt="" loading="lazy">${off?'<span class="tag">Indisponível</span>':''}</div></a>`};
function home(){$('#pg').innerHTML=`<div class="cover"></div><div class="wrap"><div class="hd"><img class="lg" src="images/logo.jpg" alt="Logo da Confeitaria de Propósito"><h1>Confeitaria de Propósito</h1><p>Feitos com amor, servidos com sabor!</p><div class="ch"><span class="ok">● Pedidos abertos</span><span>📍 Junqueirópolis</span><a href="https://wa.me/${CFG.WA}">💬 18 93619-1848</a><a href="https://instagram.com/conf.eitariadeproposito">📷 Instagram</a></div></div></div><nav class="tabs" aria-label="Categorias">${CATS.map((c,i)=>`<button data-a="tab" data-i="${i}">${c}</button>`).join('')}</nav><main class="wrap" id="menu"></main>`;drawMenu()}
function drawMenu(){const m=$('#menu');if(!m)return;m.innerHTML=CATS.map((c,i)=>`<section id="c${i}"><h2 class="cat">${c}</h2><div class="items">${ITEMS.filter(x=>x.c===i).map(card).join('')}</div></section>`).join('');
 if(io)io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.i===e.target.id.slice(1)))}),{rootMargin:'-30% 0px -60% 0px'});document.querySelectorAll('section[id^=c]').forEach(s=>io.observe(s))}
function prod(id,soft){const it=I(id);if(!it){cur='';return home()}curId=id;if(!soft)M={id,q:1,o:''};
 const l=left(it.k),off=l<1;M.q=Math.max(1,Math.min(M.q,Math.min(l,20)));
 $('#pg').innerHTML=`<div class="wrap"><button class="back" data-a="back">← Voltar</button><div class="pp"><div class="ph"><img src="${it.i}" alt="${it.n}">${off?'<span class="tag tg">Indisponível</span>':''}</div><div><span class="chip">${CATS[it.c]}</span> ${it.k?(off?'<span class="chip bad">Indisponível</span>':`<span class="chip ok">Restam ${l}</span>`):'<span class="chip">Sob encomenda</span>'}<h1>${it.n}</h1><p class="mu">${it.d}</p><div class="big">${it.p==null?'Valor a combinar':money(it.p)}</div><ul class="fx">${FX[it.c].map(t=>`<li>✔ ${t}</li>`).join('')}</ul>${off?`<div class="pbox"><b>Todas as unidades foram reservadas.</b><p class="mu sm">Volte em breve ou veja outros produtos.</p><a class="btn w" href="#/">Ver outros produtos</a></div>`:`<div class="pbox"><label>Observações<textarea id="po" rows="2" placeholder="Ex.: sabor, cor do laço, data">${esc(M.o)}</textarea></label><div class="row sticky-buy"><div class="st"><button data-a="q-" aria-label="Menos">−</button><b>${M.q}</b><button data-a="q+" aria-label="Mais">+</button></div><button class="btn" data-a="add">Adicionar ${it.p!=null?money(it.p*M.q):'à sacola'}</button></div><a class="btn w g" target="_blank" rel="noopener" href="https://wa.me/${CFG.WA}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre: '+it.n)}">Tirar dúvidas no WhatsApp</a></div>`}</div></div><h2 class="sec">Você também pode gostar</h2><div class="items">${ITEMS.filter(x=>x.id!==id).slice(0,3).map(card).join('')}</div></div>`}
function cartPg(){$('#pg').innerHTML=`<div class="wrap"><button class="back" data-a="back">← Continuar comprando</button><h1 class="sec" style="margin-top:0">Sua sacola</h1><div class="cl"><div id="cl"></div><aside class="pbox sum" id="sm"><h3 style="margin:0;font:600 1.1rem var(--fd)">Finalizar pedido</h3><div class="ar"><b>Total</b><b id="ct"></b></div><label>Seu nome<input id="nm" autocomplete="name"></label><label>Como vai receber?<select id="ce"><option>Retirada<option>Entrega</select></label><label id="cal" hidden>Endereço de entrega<input id="ca" autocomplete="street-address"></label><label>Pagamento<select id="cpg"><option>Pix<option>Dinheiro<option>Cartão</select></label><button class="btn w" data-a="send">Enviar pedido</button><p class="mu sm">As unidades só são reservadas quando a confeitaria confirmar o pedido. A taxa de entrega é combinada pelo WhatsApp.</p></aside></div></div>`;$('#ce').onchange=()=>$('#cal').hidden=$('#ce').value!=='Entrega';drawCL()}
function drawCL(){const l=$('#cl');if(!l)return;
 l.innerHTML=cart.length?cart.map((c,i)=>{const it=I(c.id);return `<div class="ln"><img src="${it.i}" alt=""><div><b>${it.n}</b>${c.o?`<div class="sm mu">${esc(c.o)}</div>`:''}<div class="sm pr">${money(it.p==null?null:it.p*c.q)}</div></div><div class="st"><button data-a="c-" data-i="${i}" aria-label="Menos">−</button><b>${c.q}</b><button data-a="c+" data-i="${i}" aria-label="Mais">+</button></div></div>`}).join(''):'<div class="empty">🛍️<br>Sua sacola está vazia.<br><br><a class="btn" href="#/">Ver cardápio</a></div>';
 $('#sm').hidden=!cart.length;$('#ct').textContent=tot();badge()}
async function send(){
 const nome=$('#nm').value.trim(),ent=$('#ce').value,end=$('#ca').value.trim();
 if(!nome)return flash('Informe seu nome.');if(ent==='Entrega'&&!end)return flash('Informe o endereço.');
 await load();let bad=false;
 cart=cart.filter(c=>{const l=left(I(c.id).k);if(c.q>l){bad=true;c.q=l}return c.q>0});
 if(bad){drawCL();return flash('Algumas unidades acabaram. Revise a sacola.')}
 const code=Math.random().toString(36).slice(2,6).toUpperCase(),tt=tot();
 await db.set('orders/'+code,{ts:Date.now(),st:'pendente',tt,it:cart.map(c=>({k:I(c.id).k||'',n:I(c.id).n,q:c.q}))});addMy(code);
 const msg=[`*Pedido #${code}*`,...cart.map(c=>`${c.q}x ${I(c.id).n}${c.o?' ('+c.o+')':''}`),`Total: ${tt}`,`Nome: ${nome}`,`${ent}${ent==='Entrega'?': '+end:''}`,`Pagamento: ${$('#cpg').value}`].join('\n');
 cart=[];cur='done';badge();
 $('#pg').innerHTML=`<div class="wrap empty"><div style="font-size:2.4rem">✅</div><h2 class="sec">Pedido #${code} registrado!</h2><p>Falta só um passo: envie o pedido para a confeitaria pelo WhatsApp. Ele será confirmado por lá.</p><a class="btn" target="_blank" rel="noopener" href="https://wa.me/${CFG.WA}?text=${encodeURIComponent(msg)}">Enviar pelo WhatsApp</a><p><a href="#/pedidos">Acompanhar meus pedidos</a></p></div>`}
const STEPS=['Enviado','Confirmado','Concluído'],MSG={pendente:'Aguardando confirmação da confeitaria.',confirmado:'Pedido confirmado! Suas unidades estão reservadas.',arquivado:'Pedido concluído.',cancelado:'Este pedido foi cancelado.'};
function oc(code){const o=OR[code];if(!o)return `<div class="pbox"><b>#${esc(code)}</b><p class="mu sm">Pedido não encontrado. Confira o código.</p></div>`;
 const ix={pendente:0,confirmado:1,arquivado:2}[o.st];
 return `<div class="pbox"><div class="ar" style="border:0;padding:0"><b>#${esc(code)}</b><span class="sm mu">${new Date(o.ts).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'})}</span></div>${ix==null?'<span class="chip bad">Cancelado</span>':`<div class="stp">${STEPS.map((s,i)=>`<span class="${i<=ix?'on':''}">${s}</span>`).join('')}</div>`}<div class="sm">${(o.it||[]).map(x=>esc(x.q+'× '+x.n)).join(', ')}${o.tt?' · '+esc(o.tt):''}</div><div class="sm mu">${MSG[o.st]||''}</div></div>`}
function ordPg(){const l=my();$('#pg').innerHTML=`<div class="wrap"><h1 class="sec" style="margin-top:20px">Meus pedidos</h1><p class="mu sm">Acompanhe o status dos pedidos feitos neste aparelho ou busque pelo código.</p><div class="row"><input id="fc" placeholder="Código do pedido (ex.: A1B2)" aria-label="Código do pedido"><button class="btn" data-a="find" style="flex:0 0 auto">Buscar</button></div>${l.length?l.map(oc).join(''):'<div class="empty">🧾<br>Você ainda não fez pedidos.<br><br><a class="btn" href="#/">Ver cardápio</a></div>'}</div>`}
function render(){const out=Object.keys(ST).filter(k=>left(k)<1).map(k=>KN[k]||k);
 $('#al').hidden=!out.length;$('#al').textContent=`⚠️ ${out.join(', ')} indisponível no momento: todas as unidades já foram reservadas.`;badge();
 if(cur==='')drawMenu();else if(cur==='produto')prod(curId,true);else if(cur==='sacola')drawCL();else if(cur==='pedidos'&&!document.querySelector('#pg input:focus'))ordPg()}
async function load(){try{ST=(await db.get('stock'))||{...DEF};OR=(await db.get('orders'))||{}}catch(e){}render();if(ADM&&!document.querySelector('#am input:focus'))drawA()}
function route(){const h=location.hash;if(h==='#admin'){openA();return}hide();const m=h.match(/^#\/(\w*)\/?([\w-]*)/)||[];cur=['','produto','sacola','pedidos'].includes(m[1]||'')?(m[1]||''):'';
 ({'':home,produto:()=>prod(m[2]),sacola:cartPg,pedidos:ordPg})[cur]();scrollTo(0,0);load()}
/* ===== ADMIN ===== */
function openA(){ADM=false;$('#am .sh').innerHTML=`<button class="x" data-a="x" aria-label="Fechar">✕</button><h2>Área da loja</h2><label>Senha<input id="pin" type="password" inputmode="numeric" autocomplete="off"></label><button class="btn w" data-a="pin">Entrar</button>`;show('am')}
function drawA(){const ks=Object.keys(ST),os=Object.entries(OR).filter(([,o])=>o&&['pendente','confirmado'].includes(o.st)).sort((a,b)=>b[1].ts-a[1].ts).slice(0,40);
 $('#am .sh').innerHTML=`<button class="x" data-a="x" aria-label="Fechar">✕</button><h2>Área da loja</h2><h3>Estoque</h3>${ks.map(k=>`<div class="ar"><div><b>${esc(KN[k]||k)}</b><div class="sm mu">Confirmados: ${used(k)} · Restam: ${left(k)}</div></div><div><input class="ni" type="number" min="0" id="s_${k}" value="${ST[k]}" aria-label="Total"> <button class="btn s" data-a="sv" data-k="${k}">Salvar</button></div></div>`).join('')}<button class="btn s g" data-a="rs" style="margin-top:10px">Nova rodada (arquivar confirmados)</button><h3>Pedidos</h3>${os.length?os.map(([id,o])=>`<div class="ar"><div><b>#${esc(id)}</b> <span class="b ${o.st==='confirmado'?'c':''}">${o.st}</span><div class="sm">${(o.it||[]).map(x=>esc(x.q+'× '+x.n)).join(', ')}</div><div class="sm mu">${new Date(o.ts).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'})}</div></div><div>${o.st==='pendente'?`<button class="btn s" data-a="cf" data-id="${esc(id)}">Confirmar</button> <button class="btn s g" data-a="cx" data-id="${esc(id)}">Cancelar</button>`:`<button class="btn s g" data-a="cu" data-id="${esc(id)}">Desfazer</button>`}</div></div>`).join(''):'<p class="mu">Nenhum pedido no momento.</p>'}`}
async function setSt(id,st){await load();const o=OR[id];if(!o)return;
 if(st==='confirmado'&&(o.it||[]).some(x=>x.k&&x.q>left(x.k)))return flash('Não há unidades suficientes para confirmar.');
 o.st=st;await db.set('orders/'+id,o);OR[id]=o;render();drawA();flash(st==='confirmado'?'Pedido confirmado.':'Pedido atualizado.')}
/* ===== EVENTOS ===== */
document.addEventListener('click',async e=>{
 if(e.target.classList.contains('ov'))return hide();
 const t=e.target.closest('[data-a]');if(!t)return;const a=t.dataset.a,d=t.dataset;
 if(a==='x')hide();else if(a==='adm'){e.preventDefault();openA()}
 else if(a==='tab'){const s=document.getElementById('c'+d.i);if(s)s.scrollIntoView({behavior:'smooth'})}
 else if(a==='back'){history.length>1?history.back():location.hash='#/'}
 else if(a==='q+'){M.q=Math.min(M.q+1,Math.min(left(I(M.id).k),20));prod(M.id,true)}
 else if(a==='q-'){M.q=Math.max(1,M.q-1);prod(M.id,true)}
 else if(a==='add'){const it=I(M.id),o=(M.o||'').trim(),ex=cart.find(c=>c.id===M.id&&c.o===o),mx=Math.min(left(it.k),20);
  if(ex)ex.q=Math.min(ex.q+M.q,mx);else cart.push({id:M.id,q:M.q,o});badge();flash('Adicionado à sacola.')}
 else if(a==='c+'){const c=cart[d.i];if(c&&c.q<left(I(c.id).k))c.q++;else flash('Limite de unidades disponíveis.');drawCL()}
 else if(a==='c-'){const c=cart[d.i];if(c&&--c.q<1)cart.splice(d.i,1);drawCL()}
 else if(a==='send')send();
 else if(a==='find'){const c=$('#fc').value.trim().toUpperCase();if(c){addMy(c);ordPg()}}
 else if(a==='pin'){if($('#pin').value===CFG.PIN){ADM=true;await load();drawA()}else flash('Senha incorreta.')}
 else if(a==='cf')setSt(d.id,'confirmado');else if(a==='cx')setSt(d.id,'cancelado');else if(a==='cu')setSt(d.id,'pendente');
 else if(a==='sv'){ST[d.k]=Math.max(0,+$('#s_'+d.k).value||0);await db.set('stock',ST);render();drawA();flash('Estoque salvo.')}
 else if(a==='rs'){for(const[id,o]of Object.entries(OR))if(o&&o.st==='confirmado'){o.st='arquivado';await db.set('orders/'+id,o)}await load();flash('Nova rodada iniciada.')}
});
document.addEventListener('input',e=>{if(e.target.id==='po')M.o=e.target.value});
document.addEventListener('keydown',e=>{if(e.key==='Escape')hide();if(e.key==='Enter'&&e.target.id==='fc')$('[data-a=find]').click()});
window.addEventListener('hashchange',route);
$('#y').textContent=new Date().getFullYear();
route();setInterval(load,15000);
