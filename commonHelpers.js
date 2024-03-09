import{a as b,i as u,S as F}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function y(r){return r.hits.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:s,comments:n,downloads:L})=>`<div class="gallery-item>
        <a class="gallery-link" href="${o}">
            <img 
            class="gallery-image" 
            src="${t}" 
            alt="${a}" 
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
                <span class="gallery-info-span">Comments <span class="tag-span">${n}</span>
                </span>    
            </p>
            <p class="gallery-info-item">
                <span class="gallery-info-span">Downloads <span class="tag-span">${L}</span>
                </span>    
            </p>
        </div>
    </div>`).join("")}const v="42701806-8f4bc33de61eec272077c73af",$="https://pixabay.com/api/";document.querySelector(".loader");async function g(r,t,o){const a=`${$}?key=${v}&q=${r}&image_type=photo&orientation=horizontal&savesearch=true&page=${o}&per_page=${t}`;try{const e=await b.get(a);return e.data.hits.length===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:4e3,position:"topRight"}),e.data}catch(e){console.error(`Error: ${e}`)}}const d=document.querySelector(".form"),p=document.querySelector(".gallery"),l=document.querySelector(".loader"),i=document.querySelector(".load-more");let m=new F(".gallery div ",{captionsData:"alt",captionDelay:250}),c,f,h;d.addEventListener("submit",S);async function S(r){r.preventDefault(),p.innerHTML=null;const t=r.currentTarget,o=t.elements.query.value.trim();if(l.textContent="Loading images, please wait...",o===""){i.style.display="none",u.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",timeout:4e3,position:"topRight"}),setTimeout(()=>l.style.display="none",1e3);return}const a=setTimeout(()=>{g(o,15,1).then(e=>{l.style.display="none",i.style.display="block",h=e.totalHits,f=o,c=1,p.innerHTML=y(e),t.reset(),m.refresh(),clearTimeout(a)}).catch(e=>{console.error("Error:",e)})},1e3)}i.addEventListener("click",r=>{i.style.display="none",l.style.display="block",c++,c*15<h?setTimeout(()=>{g(f,15,c).then(t=>{p.innerHTML+=y(t),d.reset(),m.refresh(),q(),i.style.display="block",l.style.display="none"}).catch(t=>{console.error("Error:",t)})},1e3):u.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})});function q(){const r=p.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
