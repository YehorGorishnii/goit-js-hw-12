import{a as S,i as F,S as $}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function y(t){return t.hits.map(({webformatURL:r,largeImageURL:n,tags:o,likes:e,views:s,comments:c,downloads:v})=>`<div class="gallery-item>
        <a class="gallery-link" href="${n}">
            <img 
            class="gallery-image" 
            src="${r}" 
            alt="${o}" 
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
                <span class="gallery-info-span">Comments <span class="tag-span">${c}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Downloads <span class="tag-span">${v}</span>
                </span>    
            </p>
        </div>
    </div>`).join("")}document.querySelector(".loader");document.querySelector(".load-more");const q="42701806-8f4bc33de61eec272077c73af",w="https://pixabay.com/api/";async function f(t,r,n){const o=`${w}?key=${q}&q=${t}&image_type=photo&orientation=horizontal&savesearch=true&page=${n}&per_page=${r}`;try{const e=await S.get(o);if(e.data.hits.length===0){F.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:2e3,position:"topRight"});return}return e.data}catch(e){console.error(`Error: ${e}`)}}const m=document.querySelector(".form"),d=document.querySelector(".gallery"),a=document.querySelector(".loader"),p=document.querySelector(".load-more");let h=new $(".gallery div ",{captionsData:"alt",captionDelay:250}),l,L,u;m.addEventListener("submit",E);async function E(t){t.preventDefault(),d.innerHTML=null;const r=t.currentTarget,n=r.elements.query.value.trim();if(n===""){F.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:2e3,position:"topRight"}),g(a),i(p),setTimeout(()=>a.style.display="none",1e3);return}g(a),f(n,15,1).then(o=>{i(a),g(p),o&&o.totalHits?(u=o.totalHits,console.log(u)):(u=0,i(p)),L=n,l=1,d.innerHTML=y(o),r.reset(),h.refresh()}).catch(o=>{console.error("Error:",o)})}p.addEventListener("click",async()=>{if(l++,l*15<u)g(a),f(L,15,l).then(t=>{i(a),d.insertAdjacentHTML("beforeend",y(t)),m.reset(),h.refresh(),b()}).catch(t=>{console.error("Error:",t)});else{const t=u-l*15;console.log(t),f(L,15+t,l).then(r=>{i(a),d.insertAdjacentHTML("beforeend",y(r)),m.reset(),h.refresh(),b()}).catch(r=>{console.error("Error:",r)}),i(p),F.show({title:"Info",timeout:2e3,color:"blue",position:"topRight",message:"We're sorry, but you've reached the end of search results."})}});function b(){const t=d.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}function g(t){return t.style.display="block"}function i(t){return t.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
