(this["webpackJsonptiktok-clone"]=this["webpackJsonptiktok-clone"]||[]).push([[0],{21:function(t,e,a){},34:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var i=a(2),d=a(0),r=a(10),l=a.n(r),o=(a(34),a(20)),c=a.n(o),n=a(23),u=a(9),h=(a(21),a(56)),s=a(26),j=a.n(s),v=a(25),b=a.n(v);var O=function(t){var e=t.source,a=t.title,r=t.author,l=Object(d.useState)(!1),o=Object(u.a)(l,2),c=o[0],n=o[1],s=Object(d.useState)(!1),v=Object(u.a)(s,2),O=v[0],f=v[1],p=Object(d.useState)(),x=Object(u.a)(p,2),k=x[0],_=x[1],m=Object(d.useRef)(null),y=Object(d.useRef)(null),g=(Object(d.useRef)(!1),Object(d.useRef)(""));return Object(i.jsxs)("div",{id:"video-container",children:[Object(i.jsx)("img",{ref:g,id:"play-btn",src:"./play.png",alt:"play"}),Object(i.jsx)("img",{id:"logo",src:"./logo.png",alt:"logo"}),Object(i.jsxs)("div",{id:"author-title",children:[Object(i.jsxs)("p",{id:"title",children:[a,"..."]}),Object(i.jsxs)("p",{id:"author",children:["@",r]})]}),Object(i.jsxs)("div",{id:"ld",children:[Object(i.jsx)(h.a,{id:"icons",onClick:function(){!1===O?(f(!0),_(1)):(f(!1),_(""))},children:O?Object(i.jsx)(b.a,{style:{fontSize:"40px"}}):Object(i.jsx)(j.a,{style:{fontSize:"40px"}})}),Object(i.jsx)("span",{id:"like-count",children:k})]}),Object(i.jsx)("video",{ref:m,onClick:function(){c?(m.current.pause(),y.current.pause(),n(!1),g.current.style.display="block"):(m.current.play(),y.current.play(),n(!0),g.current.style.display="none")},src:e&&e,type:"video/mp4"}),Object(i.jsx)("audio",{ref:y,src:e.slice(0,37)+"audio.mp4"})]})};var f=function(){var t=Object(d.useState)({video1:"",video2:"",video3:"",video4:"",video5:"",video6:"",video7:"",video8:"",video9:"",video10:"",video11:"",video12:""}),e=Object(u.a)(t,2),a=e[0],r=e[1],l=Object(d.useState)({title1:"",title2:"",title3:"",title4:"",title5:"",title6:"",title7:"",title8:"",title9:"",title10:"",title11:"",title12:""}),o=Object(u.a)(l,2),h=o[0],s=o[1],j=Object(d.useState)({author1:"",author2:"",author3:"",author4:"",author5:"",author6:"",author7:"",author8:"",author9:"",author10:"",author11:"",author12:""}),v=Object(u.a)(j,2),b=v[0],f=v[1];return Object(d.useEffect)((function(){function t(){return(t=Object(n.a)(c.a.mark((function t(){var e,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.reddit.com/r/WatchPeopleDieInside/.json");case 3:return e=t.sent,t.next=6,e.json();case 6:a=t.sent,r({video1:a.data.children[2].data.media.reddit_video.fallback_url,video2:a.data.children[3].data.media.reddit_video.fallback_url,video3:a.data.children[4].data.media.reddit_video.fallback_url,video4:a.data.children[5].data.media.reddit_video.fallback_url,video5:a.data.children[6].data.media.reddit_video.fallback_url,video6:a.data.children[7].data.media.reddit_video.fallback_url,video7:a.data.children[8].data.media.reddit_video.fallback_url,video8:a.data.children[9].data.media.reddit_video.fallback_url,video9:a.data.children[10].data.media.reddit_video.fallback_url,video10:a.data.children[11].data.media.reddit_video.fallback_url,video11:a.data.children[12].data.media.reddit_video.fallback_url}),f({author1:a.data.children[2].data.author,author2:a.data.children[3].data.author,author3:a.data.children[4].data.author,author4:a.data.children[5].data.author,author5:a.data.children[6].data.author,author6:a.data.children[7].data.author,author7:a.data.children[8].data.author,author8:a.data.children[9].data.author,author9:a.data.children[10].data.author,author10:a.data.children[11].data.author,author11:a.data.children[12].data.author,author12:a.data.children[12].data.author}),s({title1:a.data.children[2].data.title,title2:a.data.children[3].data.title,title3:a.data.children[4].data.title,title4:a.data.children[5].data.title,title5:a.data.children[6].data.title,title6:a.data.children[7].data.title,title7:a.data.children[8].data.title,title8:a.data.children[9].data.title,title9:a.data.children[10].data.title,title10:a.data.children[11].data.title,title11:a.data.children[12].data.title,title12:a.data.children[13].data.title}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()})),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{id:"video-scroll",children:[Object(i.jsx)(O,{source:a.video1,title:h.title1,author:b.author1}),Object(i.jsx)(O,{source:a.video2,title:h.title2,author:b.author2}),Object(i.jsx)(O,{source:a.video5,title:h.title5,author:b.author5}),Object(i.jsx)(O,{source:a.video6,title:h.title6,author:b.author6}),Object(i.jsx)(O,{source:a.video7,title:h.title7,author:b.author7}),Object(i.jsx)(O,{source:a.video8,title:h.title8,author:b.author8}),Object(i.jsx)(O,{source:a.video9,title:h.title9,author:b.author9}),Object(i.jsx)(O,{source:a.video10,title:h.title10,author:b.author10}),Object(i.jsx)(O,{source:a.video11,title:h.title11,author:b.author11})]})})},p=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(e){var a=e.getCLS,i=e.getFID,d=e.getFCP,r=e.getLCP,l=e.getTTFB;a(t),i(t),d(t),r(t),l(t)}))};l.a.render(Object(i.jsx)(f,{}),document.getElementById("root")),p()}},[[41,1,2]]]);
//# sourceMappingURL=main.566a5045.chunk.js.map