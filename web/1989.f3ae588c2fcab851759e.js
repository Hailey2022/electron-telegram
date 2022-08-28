"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[1989],{70172:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(14050),o=r(33555),c=r(6137),s=r(83716),l=r(83158),i=r(2155),a=r(46752),d=r(32340),u=r(6202),v=r(31212),m=r(59107),f=r(3657),p=r(21747);const h=(0,a.y)("Avatar");h.media=h("media"),h.icon=h("icon");const g=(0,n.X$)((e=>{var t,r,g;let{className:Z,size:b="large",chat:I,user:w,photo:E,userStatus:P,text:y,isSavedMessages:A,noVideo:k,noLoop:C,lastSyncTime:T,observeIntersection:N,onClick:B}=e;const{loadFullUser:O}=(0,o.Sv)(),S=(0,n.sO)(null),U=(0,n.sO)(null),L=(0,f.Op)(S,N),R=w&&(0,l.NB)(w),D=w&&(0,l.pK)(w.id);let M,q;const x=null===(t=w||I)||void 0===t?void 0:t.hasVideoAvatar,F=(null==w||null===(r=w.fullInfo)||void 0===r?void 0:r.profilePhoto)||(null==I||null===(g=I.fullInfo)||void 0===g?void 0:g.profilePhoto),V=!k&&Boolean((null==w?void 0:w.isPremium)&&(null==F?void 0:F.isVideo)),z=L&&V,H="jumbo"===b;A||R||(V&&(q=(0,l.RT)(w,void 0,"video")),w?M=(0,l.RT)(w,H?"big":void 0):I?M=(0,l.RT)(I,H?"big":void 0):E&&(M=`photo${E.id}?size=m`)),(0,p.Z)(U,z),(0,n.d4)((()=>{const e=U.current;if(!e||!C)return;const t=()=>{e.currentTime=0};return e.addEventListener("ended",t),()=>e.removeEventListener("ended",t)}),[C]),(0,n.d4)((()=>{L&&!k&&w&&x&&!F&&O({userId:w.id})}),[x,F,O,w,k,L]);const j=(0,u.Z)(M,!1,c.IU.BlobUrl,T),J=(0,u.Z)(q,!1,c.IU.BlobUrl,T),$=Boolean(j||J),{transitionClassNames:K}=(0,v.Z)($,void 0,$,"slow"),X=(0,m.Z)();let _;const Y=w?(0,l.Js)(w):I?(0,l.U)(X,I):y;if(A)_=n.ZP.createElement("i",{className:(0,a.Z)(h.icon,"icon-avatar-saved-messages"),"aria-label":Y});else if(R)_=n.ZP.createElement("i",{className:(0,a.Z)(h.icon,"icon-avatar-deleted-account"),"aria-label":Y});else if(D)_=n.ZP.createElement("i",{className:(0,a.Z)(h.icon,"icon-reply-filled"),"aria-label":Y});else if($)_=n.ZP.createElement(n.ZP.Fragment,null,n.ZP.createElement("img",{src:j,className:(0,a.Z)(h.media,"avatar-media",K,J&&"poster"),alt:Y,decoding:"async"}),J&&n.ZP.createElement("video",{ref:U,src:J,className:(0,a.Z)(h.media,"avatar-media",K),muted:!0,autoPlay:!0,disablePictureInPicture:!0,loop:!C,playsInline:!0}));else if(w){const e=(0,l.Js)(w);_=e?(0,i.Xv)(e,2):void 0}else if(I){const e=(0,l.U)(X,I);_=e&&(0,i.Xv)(e,(0,l.YC)(I.id)?2:1)}else y&&(_=(0,i.Xv)(y,2));const W=!A&&w&&P&&(0,l.kM)(w,P),G=(0,a.Z)(`Avatar size-${b}`,Z,`color-bg-${(0,l.Rs)(w||I)}`,A&&"saved-messages",R&&"deleted-account",D&&"replies-bot-account",W&&"online",B&&"interactive",!A&&!j&&"no-photo"),Q=Boolean(A||j),ee=(0,n.I4)((e=>{B&&B(e,Q)}),[B,Q]),te=(w||I)&&(w||I).id;return n.ZP.createElement("div",{ref:S,className:G,onClick:ee,"data-test-sender-id":s.Cg?te:void 0,"aria-label":"string"==typeof _?Y:void 0},"string"==typeof _?(0,d.Z)(_,["jumbo"===b?"hq_emoji":"emoji"]):_)}))},21747:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(14050),o=r(69118),c=r(74753),s=r(45332),l=r(18674);function i(e,t){var r;const i=(0,n.sO)(null===(r=e.current)||void 0===r?void 0:r.paused),a=(0,n.sO)();a.current=t;const d=(0,n.I4)((()=>{e.current&&(i.current=!e.current.paused,i.current&&e.current.pause())}),[e]),u=(0,n.I4)((()=>{e.current&&i.current&&a.current&&document.body.contains(e.current)&&(0,c.Z)(e.current)}),[e]),v=(0,n.I4)((()=>{(0,o.T2)(u)}),[u]);(0,s.Z)(d,v),(0,l.ZP)(d,u)}},21273:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(91713),o=r(14050),c=r(69118),s=r(87675),l=r(77361),i=r(80036);const a=".ListItem",d=20,u=800,v=e=>{let{ref:t,className:r,items:v,itemSelector:m=a,preloadBackwards:f=d,sensitiveArea:p=u,withAbsolutePositioning:h,maxHeight:g,noScrollRestore:Z=!1,noScrollRestoreOnTop:b=!1,noFastList:I,cacheBuster:w,children:E,onLoadMore:P,onScroll:y,onKeyDown:A,onDragOver:k,onDragLeave:C}=e,T=(0,o.sO)(null);t&&(T=t);const N=(0,o.sO)({}),[B,O]=(0,o.Ye)((()=>P?[(0,c.Ds)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];P({direction:n.Uq.Backwards,noScroll:e})}),1e3,!0,!1),(0,c.Ds)((()=>{P({direction:n.Uq.Forwards})}),1e3,!0,!1)]:[]),[P,v]);(0,o.d4)((()=>{if(!B)return;if(f>0&&(!v||v.length<f))return void B(!0);const{scrollHeight:e,clientHeight:t}=T.current;t&&e<=t&&B()}),[v,B,f]),(0,o.bt)((()=>{const e=T.current,t=N.current;let r;if(t.listItemElements=e.querySelectorAll(m),t.currentAnchor&&Array.from(t.listItemElements).includes(t.currentAnchor)){const{scrollTop:n}=e;r=n+(t.currentAnchor.getBoundingClientRect().top-t.currentAnchorTop)}else{const e=t.listItemElements[0];e&&(t.currentAnchor=e,t.currentAnchorTop=e.getBoundingClientRect().top)}h||Z||b&&0===e.scrollTop||((0,s.Z)(e,r),t.isScrollTopJustUpdated=!0)}),[v,m,Z,b,w,h]);const S=(0,o.I4)((e=>{if(O&&B){const{isScrollTopJustUpdated:e,currentAnchor:t,currentAnchorTop:r}=N.current,n=N.current.listItemElements;if(e)return void(N.current.isScrollTopJustUpdated=!1);const o=n.length,c=T.current,{scrollTop:s,scrollHeight:l,offsetHeight:i}=c,a=s<=(o?n[0].offsetTop:0)+p,d=(o?n[o-1].offsetTop+n[o-1].offsetHeight:l)-(s+i)<=p;let u=!1;if(a){const e=n[0];if(e){const n=e.getBoundingClientRect().top,o=null!=t&&t.offsetParent&&t!==e?t.getBoundingClientRect().top:n;t&&void 0!==r&&o>r&&(N.current.currentAnchor=e,N.current.currentAnchorTop=n,u=!0,O())}}if(d){const e=n[o-1];if(e){const n=e.getBoundingClientRect().top,o=null!=t&&t.offsetParent&&t!==e?t.getBoundingClientRect().top:n;t&&void 0!==r&&o<r&&(N.current.currentAnchor=e,N.current.currentAnchorTop=n,u=!0,B())}}if(!u)if(null!=t&&t.offsetParent)N.current.currentAnchorTop=t.getBoundingClientRect().top;else{const e=n[0];e&&(N.current.currentAnchor=e,N.current.currentAnchorTop=e.getBoundingClientRect().top)}}y&&y(e)}),[B,O,y,p]);return o.ZP.createElement("div",{ref:T,className:r,onScroll:S,teactFastList:!I&&!h,onKeyDown:A,onDragOver:k,onDragLeave:C},h&&null!=v&&v.length?o.ZP.createElement("div",{teactFastList:!I,style:(0,i.Z)("position: relative",l.wZ&&`height: ${g}px`)},E):E)}},13103:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(14050),o=r(517),c=r(46752),s=r(18674),l=r(31212),i=r(274),a=r(59107),d=r(46590),u=r(231),v=r(62898);const m=e=>{let{dialogRef:t,title:r,className:m,isOpen:f,header:p,hasCloseButton:h,noBackdrop:g,children:Z,style:b,onClose:I,onCloseAnimationEnd:w,onEnter:E,shouldSkipHistoryAnimations:P}=e;const{shouldRender:y,transitionClassNames:A}=(0,l.Z)(f,w,P,void 0,P),k=(0,n.sO)(null);(0,n.d4)((()=>f?(0,o.Z)({onEsc:I,onEnter:E}):void 0),[f,I,E]),(0,n.d4)((()=>f&&k.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const r=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!r.length)return;const n=r.findIndex((e=>e.isSameNode(document.activeElement)));let o=0;n>=0&&(o=t.shiftKey?n>0?n-1:r.length-1:n<r.length-1?n+1:0),r[o].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(k.current):void 0),[f]),(0,d.Z)({isActive:f,onBack:I}),(0,i.Z)((e=>{let[t]=e;return document.body.classList.toggle("has-open-dialog",f),(f||!f&&void 0!==t)&&(0,s.YW)(200),()=>{document.body.classList.remove("has-open-dialog")}}),[f]);const C=(0,a.Z)();if(!y)return;const T=(0,c.Z)("Modal",m,A,g&&"transparent-backdrop");return n.ZP.createElement(v.Z,null,n.ZP.createElement("div",{ref:k,className:T,tabIndex:-1,role:"dialog"},n.ZP.createElement("div",{className:"modal-container"},n.ZP.createElement("div",{className:"modal-backdrop",onClick:I}),n.ZP.createElement("div",{className:"modal-dialog",ref:t},p||(r?n.ZP.createElement("div",{className:"modal-header"},h&&n.ZP.createElement(u.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:C("Close"),onClick:I},n.ZP.createElement("i",{className:"icon-close"})),n.ZP.createElement("div",{className:"modal-title"},r)):void 0),n.ZP.createElement("div",{className:"modal-content custom-scroll",style:b},Z)))))}},62898:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(14050),o=r(31664);const c=e=>{let{containerId:t,className:r,children:c}=e;const s=(0,n.sO)();return s.current||(s.current=document.createElement("div")),(0,n.bt)((()=>{const e=document.querySelector(t||"#portals");if(!e)return;const n=s.current;return r&&n.classList.add(r),e.appendChild(n),()=>{o.Z.render(void 0,n),e.removeChild(n)}}),[r,t]),o.Z.render(c,s.current)}},9211:(e,t,r)=>{r.d(t,{M:()=>c,P:()=>s});var n=r(86087),o=r(83716);function c(e,t){var r;const{appConfig:c}=e;if(!c)return o.pr[t][0];const s=(0,n.wV)(e),{limits:l}=c,i=null!==(r=l[t][s?1:0])&&void 0!==r?r:o.pr[t][s?1:0];return"dialogFilters"===t?i+1:i}function s(e,t){const{appConfig:r}=e;if(!r)return o.pr[t][1];const{limits:n}=r;return n[t][1]}},27407:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(14050),o=r(91713),c=r(60782),s=r(65326),l=r(87204);function i(e,t,r,n){const{length:c}=e,s=n?e.indexOf(n):0,l=t===o.Uq.Forwards?s:s+1||c,i=Math.max(0,l-r),a=l+r-1,d=e.slice(Math.max(0,i),a+1);let u,v;switch(t){case o.Uq.Forwards:u=l>0,v=i>=0;break;case o.Uq.Backwards:u=l<c,v=a<=c-1}return{newViewportIds:d,areSomeLocal:u,areAllLocal:v}}const a=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30;const d=(0,n.sO)(),u=(0,n.sO)((()=>{if(!t||d.current)return;const{newViewportIds:e}=i(t,o.Uq.Forwards,a,t[0]);return e})()),v=(0,s.Z)();r&&(d.current={});const m=(0,l.Z)(t),f=(0,l.Z)(r);if(!t||r||t===m&&r===f)t||(u.current=void 0);else{const{offsetId:e=t[0],direction:r=o.Uq.Forwards}=d.current||{},{newViewportIds:n}=i(t,r,a,e);u.current&&(0,c.et)(u.current,n)||(u.current=n)}const p=(0,n.I4)((r=>{let{direction:n,noScroll:s}=r;const l=u.current,m=l?n===o.Uq.Backwards?l[l.length-1]:l[0]:void 0;if(!t)return void(e&&e({offsetId:m}));s||(d.current={...d.current,direction:n,offsetId:m});const{newViewportIds:f,areSomeLocal:p,areAllLocal:h}=i(t,n,a,m);!p||l&&(0,c.et)(l,f)||(u.current=f,v()),!h&&e&&e({offsetId:m})}),[t,a,e,v]);return r?[t]:[u.current,p]}},3657:(e,t,r)=>{r.d(t,{Op:()=>i,S1:()=>s,_N:()=>l});var n=r(14050),o=r(69118),c=r(18674);function s(e,t){let{rootRef:r,throttleMs:s,debounceMs:l,shouldSkipFirst:i,margin:a,threshold:d,isDisabled:u}=e;const v=(0,n.sO)(),m=(0,n.sO)(),f=(0,n.sO)(0),p=(0,n.sO)();m.current=t;const h=(0,n.I4)((()=>{f.current++}),[]),g=(0,n.I4)((()=>{f.current&&(f.current--,!f.current&&p.current&&(p.current(),p.current=void 0))}),[]);return(0,c.ZP)(h,g),(0,n.d4)((()=>{if(!u)return()=>{v.current&&(v.current.observer.disconnect(),v.current.callbacks.clear(),v.current=void 0)}}),[u]),{observe:(0,n.I4)(((e,t)=>{v.current||function(){const e=new Map,t=new Map,n=()=>{const r=Array.from(t.values());r.forEach((t=>{const n=e.get(t.target);n&&n(t,r)})),m.current&&m.current(r),t.clear()},c=s?o.P2:l?o.Ds:void 0,u=c?c(n,s||l,!i):n,h=new IntersectionObserver((e=>{e.forEach((e=>{t.set(e.target,e)})),f.current?p.current=()=>{u()}:u()}),{root:r.current,rootMargin:a?`${a}px`:void 0,threshold:d});v.current={observer:h,callbacks:e}}();const n=v.current;return n.observer.observe(e),t&&n.callbacks.set(e,t),()=>{t&&n.callbacks.delete(e),n.observer.unobserve(e)}}),[u]),freeze:h,unfreeze:g}}function l(e,t,r){(0,n.d4)((()=>t?t(e.current,r):void 0),[])}function i(e,t,r){const[o,c]=(0,n.eJ)(!t);return l(e,t,(e=>{c(e.isIntersecting),r&&r(e)})),o}},62357:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(14050);const o=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const o=(0,n.sO)(e);(0,n.bt)((()=>{o.current=e}),[e]),(0,n.d4)((()=>{if(void 0===t)return;const e=setInterval((()=>o.current()),t);return r||o.current(),()=>clearInterval(e)}),[t,r])}},6202:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(14050),o=r(6137),c=r(40647),s=r(65326);const l=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.IU.BlobUrl,l=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;const a=e?c.UV(e):void 0,d=(0,s.Z)();return(0,n.d4)((()=>{if(!t&&e&&!a){const t=Date.now();c.he(e,r).then((()=>{const e=Date.now()-t;!i||e>=i?d():setTimeout(d,i-e)}))}}),[t,e,a,r,l,d,i]),a}},87675:(e,t,r)=>{r.d(t,{Z:()=>s,z:()=>c});var n=r(77361),o=r(82972);function c(e){e.style.display="none",(0,o.Z)(e),e.style.display=""}const s=(e,t)=>{n.cj&&(e.style.overflow="hidden"),void 0!==t&&(e.scrollTop=t),n.cj&&(e.style.overflow="")}},74753:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(83716);const o=e=>{e.play().catch((t=>{n.eM&&console.warn(t,e)}))}}}]);
//# sourceMappingURL=1989.f3ae588c2fcab851759e.js.map