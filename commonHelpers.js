import{a as F,i as y,S as L}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function u(o){return o.hits.map(({webformatURL:t,largeImageURL:a,tags:s,likes:e,views:r,comments:l,downloads:b})=>`<div class="gallery-item>
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
                <span class="gallery-info-span">Comments <span class="tag-span">${l}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Downloads <span class="tag-span">${b}</span>
                </span>    
            </p>
        </div>
    </div>`).join("")}const v="42701806-8f4bc33de61eec272077c73af",$="https://pixabay.com/api/";document.querySelector(".loader");const S=document.querySelector(".load-more");async function d(o,t,a){const s=`${$}?key=${v}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true&page=${a}&per_page=${t}`;try{const e=await F.get(s);return e.data.hits.length===0&&(S.style.display="none",y.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:2e3,position:"topRight"})),e.data}catch(e){console.error(`Error: ${e}`)}}const g=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),p=document.querySelector(".load-more");let m=new L(".gallery div ",{captionsData:"alt",captionDelay:250}),i,f,h;g.addEventListener("submit",q);async function q(o){o.preventDefault(),n.style.display="block",c.innerHTML=null;const t=o.currentTarget,a=t.elements.query.value.trim();if(a===""){y.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:2e3,position:"topRight"}),setTimeout(()=>n.style.display="none",1e3);return}n.style.display="none",p.style.display="block",d(a,15,1).then(s=>{h=s.totalHits,f=a,i=1,c.innerHTML=u(s),t.reset(),m.refresh()}).catch(s=>{console.error("Error:",s)})}p.addEventListener("click",o=>{i++,n.style.display="block",i*15<h?d(f,15,i).then(t=>{c.insertAdjacentHTML("beforeend",u(t)),g.reset(),m.refresh(),w(),n.style.display="none"}).catch(t=>{console.error("Error:",t)}):(n.style.display="none",p.style.display="none",y.show({title:"Info",timeout:2e3,color:"blue",position:"topRight",message:"We're sorry, but you've reached the end of search results."}))});function w(){const o=c.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
