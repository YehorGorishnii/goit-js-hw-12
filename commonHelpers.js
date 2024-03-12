import{a as v,i as g,S}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function f(t){return t.hits.map(({webformatURL:o,largeImageURL:a,tags:r,likes:e,views:s,comments:l,downloads:b})=>`<div class="gallery-item>
        <a class="gallery-link" href="${a}">
            <img 
            class="gallery-image" 
            src="${o}" 
            alt="${r}" 
            width="360px" height="260px"/>
        </a>
        <div class="gallery-info">
            <p class="gallery-info-item">
                <span class="gallery-info-span">Likes <span class="tag-span">${e}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Views <span class="tag-span">${s}</span>
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
    </div>`).join("")}document.querySelector(".loader");document.querySelector(".load-more");const $="42701806-8f4bc33de61eec272077c73af",q="https://pixabay.com/api/";async function m(t,o,a){const r=`${q}?key=${$}&q=${t}&image_type=photo&orientation=horizontal&savesearch=true&page=${a}&per_page=${o}`;try{const e=await v.get(r);if(e.data.hits.length===0){g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:2e3,position:"topRight"});return}return e.data}catch(e){console.error(`Error: ${e}`)}}const h=document.querySelector(".form"),y=document.querySelector(".gallery"),n=document.querySelector(".loader"),i=document.querySelector(".load-more");let F=new S(".gallery div ",{captionsData:"alt",captionDelay:250}),p,L,d;h.addEventListener("submit",w);async function w(t){t.preventDefault(),y.innerHTML=null;const o=t.currentTarget,a=o.elements.query.value.trim();if(a===""){g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:2e3,position:"topRight"}),u(n),c(i),setTimeout(()=>n.style.display="none",1e3);return}u(n),m(a,15,1).then(r=>{c(n),u(i),r&&r.totalHits?d=r.totalHits:(d=0,c(i)),L=a,p=1,y.innerHTML=f(r),o.reset(),F.refresh()}).catch(r=>{console.error("Error:",r)})}i.addEventListener("click",async()=>{p++,p*15<d?(u(n),m(L,15,p).then(t=>{c(n),y.insertAdjacentHTML("beforeend",f(t)),h.reset(),F.refresh(),E()}).catch(t=>{console.error("Error:",t)})):(c(i),g.show({title:"Info",timeout:2e3,color:"blue",position:"topRight",message:"We're sorry, but you've reached the end of search results."}))});function E(){const t=y.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}function u(t){return t.style.display="block"}function c(t){return t.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
