(this["webpackJsonptiktok-clone"]=this["webpackJsonptiktok-clone"]||[]).push([[0],{24:function(e,t,n){},37:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(0),s=n(13),i=n.n(s),a=(n(37),n(23)),u=n.n(a),o=n(26),l=n(10),d=(n(24),n(63)),j=n(29),b=n.n(j),p=n(28),f=n.n(p);var O=function(e){var t=e.source,n=Object(r.useState)(!1),s=Object(l.a)(n,2),i=(s[0],s[1],Object(r.useState)(!1)),a=Object(l.a)(i,2),u=a[0],o=a[1],j=Object(r.useState)(),p=Object(l.a)(j,2),O=p[0],h=p[1],v=Object(r.useRef)(null),x=Object(r.useRef)(null),g=Object(r.useRef)(!1),m=Object(r.useRef)(),y=(Object(r.useRef)(null),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",n=Object(r.useState)(!1),c=Object(l.a)(n,2),s=c[0],i=c[1];return Object(r.useEffect)((function(){var n=new IntersectionObserver((function(e){var t=Object(l.a)(e,1)[0];i(t.isIntersecting)}),{rootMargin:t});return e.current&&n.observe(e.current),function(){n.unobserve(e.current)}}),[]),s}(m,"100px"));return Object(r.useEffect)((function(){!0===y?(v.current.play(),x.current.play(),v.current.currentTime=0,x.current.currentTime=0,g.current.style.display="none"):(v.current.pause(),x.current.pause(),v.current.currentTime=0,x.current.currentTime=0)})),console.log(t.substring(0,32)+"DASH_480.mp4?source=fallback"),Object(c.jsxs)("div",{id:"video-container",ref:m,children:[Object(c.jsx)("img",{ref:g,id:"play-btn",src:"./play.png",alt:"play"}),Object(c.jsx)("h1",{id:"logo",children:" F"}),Object(c.jsxs)("div",{id:"ld",children:[Object(c.jsx)(d.a,{id:"icons",onClick:function(){!1===u?(o(!0),h(1)):(o(!1),h(""),console.log(u))},children:u?Object(c.jsx)(f.a,{style:{fontSize:"40px"}}):Object(c.jsx)(b.a,{style:{fontSize:"40px"}})}),Object(c.jsx)("span",{id:"like-count",children:O})]}),t?Object(c.jsx)("video",{ref:v,onClick:function(){!1===v.current.paused&&!1===x.current.paused?(v.current.pause(),x.current.pause(),g.current.style.display="block"):(v.current.play(),x.current.play(),g.current.style.display="none")},width:"450",height:"900",src:t.substring(0,32)+"DASH_480.mp4?source=fallback",type:"video/mp4",preload:"none"}):Object(c.jsx)("div",{children:"Loading..."}),t?Object(c.jsx)("audio",{ref:x,children:Object(c.jsx)("source",{preload:"none",src:t&&t.slice(0,37)+"audio.mp4"})}):console.log("audio element is loading")]})},h=n(62),v=n(61);n(44);h.a.use([v.a]);var x=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)([{video:[],author:[],title:[]}]),a=Object(l.a)(i,2),d=a[0],j=a[1];return Object(r.useEffect)((function(){new h.a(".swiper-container",{loop:!0,spaceBetween:830,direction:"vertical",slidesPerView:1,speed:100,preloadImages:!0,observer:!0,observeParents:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0})}),[]),Object(r.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t,n,c,r,i,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com/r/tiktokcringe/.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=[],r=[],i=[],a=n.data.children;try{for(o=5;o<a.length;o++)null!==a[o].data.media&&c.push(a[o].data.media),r.push(a[o].data.author),i.push(a[o].data.title);j([{video:c,author:r,title:i}]),s(!0)}catch(u){console.log(u)}case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{id:"video-scroll",children:d.map((function(e){var t=e.video,r=e.author,s=e.title;return Object(c.jsx)("div",{className:"swiper-container",children:Object(c.jsx)("div",{className:"swiper-wrapper",children:t.map((function(e,t){return Object(c.jsxs)("div",{className:"swiper-slide",children:[n?Object(c.jsx)(O,{className:"lazy",source:e.reddit_video.fallback_url}):Object(c.jsx)("p",{children:"Loading..."}),Object(c.jsxs)("p",{id:"author",children:["@",r[t]]}),Object(c.jsxs)("p",{id:"title",children:[s[t].length<50?s[t]:s[t].substring(0,50)+"..."," "]})]})}))})})}))})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(c.jsx)(x,{}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.3cc5cb6a.chunk.js.map