let ART=null;const B=window.WIKI_BASE||"";
async function load(){if(!ART)ART=await (await fetch(B+"data/articles.json")).json();return ART}
const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
async function find(q){q=norm(q);return (await load()).filter(a=>norm(a.title+" "+a.summary+" "+a.categories.join(" ")).includes(q))}
async function wikiRandom(){const a=await load();location.href=B+a[Math.floor(Math.random()*a.length)].url;return false}
document.addEventListener("DOMContentLoaded",async()=>{const i=document.getElementById("searchInput"),s=document.getElementById("suggest");
i.addEventListener("input",async()=>{if(!i.value.trim()){s.innerHTML="";return}const r=(await find(i.value)).slice(0,8);s.innerHTML=r.map(a=>`<a href="${B+a.url}">${a.title}</a>`).join("")});
const R=document.getElementById("results");if(R){const q=new URLSearchParams(location.search).get("q")||"";document.getElementById("q2").value=q;
if(q){const r=await find(q);R.innerHTML=`<p>Resultados para «${q.replace(/</g,"&lt;")}»: ${r.length}</p><ul class="mw-search-results">`+r.map(a=>`<li><a href="${B+a.url}">${a.title}</a><div>${a.summary}</div><small>${a.categories.join(" · ")}</small></li>`).join("")+"</ul>"}}});