!function(t,e){"use strict";t.behaviors.engagement_popup={idAttribute:"data-engagement-popup",engagementPopup:function(t){const i={id:t.getAttribute(this.idAttribute),scrollDepth:parseInt(t.getAttribute("data-scroll-depth")),timeOnPage:1e3*parseInt(t.getAttribute("data-time-on-page")),cookieExpiry:parseInt(t.getAttribute("data-cookie-expiry"))},n=`engagement-popup-${i.id}`;let o=e.get(n);if(o)return;const c=t.querySelector(".close"),s=t.querySelector("form"),a=function(){t.classList.remove("active"),e.set(n,"closed",{expires:i.cookieExpiry}),o=!0},r=function(e){return function(){o||t.classList.contains("active")||e.apply(this,arguments)}};c&&c.addEventListener("click",(function(){a()})),s&&s.addEventListener("submit",a),document.addEventListener("scroll",r((function(){const e=document.body,n=document.documentElement,o=Math.max(e.scrollHeight,e.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight),c=i.scrollDepth;document.documentElement.scrollTop/(o-window.innerHeight)*100>c&&t.classList.add("active")}))),setTimeout(r((function(){t.classList.add("active")})),i.timeOnPage)},attach:function(t,e){t.hasAttribute(this.idAttribute)?this.engagementPopup(t):t.querySelectorAll(`[${this.idAttribute}]`).forEach(this.engagementPopup)}}}(Drupal,Cookies);
//# sourceMappingURL=engagement-popup.js.map