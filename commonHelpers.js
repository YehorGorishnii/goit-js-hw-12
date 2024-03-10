import{a as F,i as p,S as L}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function y(o){return o.hits.map(({webformatURL:t,largeImageURL:a,tags:s,likes:e,views:r,comments:n,downloads:b})=>`<div class="gallery-item>
        <a class="gallery-link" href="${a}">
            <img 
            class="gallery-image" 
            src="${t}" 
            alt="${s}" 
            width="360px" height="260px"/>
        </a>
        <div class="gallery-info">
            <p class="gallery-info-item">
                <span class="gallery-info-span">Likes <span class="tag-span">${e}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Views <span class="tag-span">${r}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Comments <span class="tag-span">${n}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Downloads <span class="tag-span">${b}</span>
                </span>    
            </p>
        </div>
    </div>`).join("")}const v="42701806-8f4bc33de61eec272077c73af",$="https://pixabay.com/api/";document.querySelector(".loader");const S=document.querySelector(".load-more");async function u(o,t,a){const s=`${$}?key=${v}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true&page=${a}&per_page=${t}`;try{const e=await F.get(s);return e.data.hits.length===0&&(S.style.display="none",p.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:2e3,position:"topRight"})),e.data}catch(e){console.error(`Error: ${e}`)}}const d=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=document.querySelector(".load-more");let m=new L(".gallery div ",{captionsData:"alt",captionDelay:250}),i,f,h;d.addEventListener("submit",q);async function q(o){o.preventDefault(),l.style.display="block",c.innerHTML=null;const t=o.currentTarget,a=t.elements.query.value.trim();if(a===""){p.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:2e3,position:"topRight"}),setTimeout(()=>l.style.display="none",1e3);return}l.style.display="none",g.style.display="block",u(a,15,1).then(s=>{h=s.totalHits,f=a,i=1,c.innerHTML=y(s),t.reset(),m.refresh()}).catch(s=>{console.error("Error:",s)})}g.addEventListener("click",o=>{i++,l.style.display="block",i*15<h?u(f,15,i).then(t=>{c.insertAdjacentHTML("beforeend",y(t)),d.reset(),m.refresh(),w(),l.style.display="none"}).catch(t=>{console.error("Error:",t)}):p.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})});function w(){const o=c.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
