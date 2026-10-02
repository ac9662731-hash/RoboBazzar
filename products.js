export async function onRequestGet({ request }) {
  const out=[];
  try {
    for(let page=1; page<=18; page++) {
      const u=`https://makerbazar.in/products.json?limit=250&page=${page}`;
      const r=await fetch(u,{headers:{'User-Agent':'Mozilla/5.0 NexVoraLab Catalogue'}});
      if(!r.ok) throw new Error('MakerBazar request failed');
      const data=await r.json();
      const batch=(data.products||[]).filter(p=>p.available!==false).map(p=>({
        title:p.title||'',
        image:(p.images&&p.images[0]&&p.images[0].src)||'',
        description:clean(p.body_html||'').slice(0,500)
      }));
      out.push(...batch);
      if(!data.products || data.products.length<250) break;
    }
    const seen=new Set();const products=out.filter(x=>x.title&&!seen.has(x.title)&&(seen.add(x.title),true));
    return json({products,updatedAt:new Date().toISOString()});
  } catch(e) { return json({products:[],error:'Catalogue temporarily unavailable'},502); }
}
function clean(s){return s.replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim()}
function json(v,status=200){return new Response(JSON.stringify(v),{status,headers:{'content-type':'application/json;charset=UTF-8','cache-control':'public,max-age=300'}})}
