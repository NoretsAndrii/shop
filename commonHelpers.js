import{i as u}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function l(n){const o=new URLSearchParams({client_id:"xankM5JcWjNdU3aQm9SCaf_qfZApy4ZcN2-HgCA1cGs",query:n,orientation:"portrait",per_page:20});return fetch(`https://api.unsplash.com/search/photos/?${o}`).then(r=>{if(!r.ok)throw new Error("error");return r.json()}).then(r=>(console.log(r),r)).catch(r=>console.log("error"))}l("cat");const i=document.querySelector(".form"),a=document.querySelector(".gallary");i.addEventListener("submit",f);function f(n){n.preventDefault(),a.innerHTML="";const o=i.elements.searchQuery.value.trim();l(o).then(r=>{if(r.results.length===0)return u.error({message:"За вашим запитом нічого не знайдено",title:"Error",position:"topRight"});d(r.results)}),i.reset()}function d(n){const o=n.map(r=>`<li>
    <img src="${r.urls.small}" alt="${r.description}">
</li>`).join("");a.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
