var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function c(t,e,n){t.$$.on_destroy.push(s(e,n))}function l(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function u(t,e,n,o,r,i,s){const c=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,i);if(c){const r=l(e,n,o,s);t.p(r,c)}}function d(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function g(){return m("")}function w(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let b;function k(t){b=t}function v(){if(!b)throw new Error("Function called outside component initialization");return b}function N(t,e){v().$$.context.set(t,e)}function S(t){return v().$$.context.get(t)}const C=[],I=[],_=[],M=[],F=Promise.resolve();let P=!1;function E(t){_.push(t)}let H=!1;const W=new Set;function A(){if(!H){H=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];k(e),R(e.$$)}for(k(null),C.length=0;I.length;)I.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];W.has(e)||(W.add(e),e())}_.length=0}while(C.length);for(;M.length;)M.pop()();P=!1,H=!1,W.clear()}}function R(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const T=new Set;let B;function j(){B={r:0,c:[],p:B}}function z(){B.r||o(B.c),B=B.p}function G(t,e){t&&t.i&&(T.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(T.has(t))return;T.add(t),B.c.push((()=>{T.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function V(t){t&&t.c()}function D(t,n,i){const{fragment:s,on_mount:c,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,i),E((()=>{const n=c.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(E)}function q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(C.push(t),P||(P=!0,F.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,r,i,s,c,l,u=[-1]){const d=b;k(e);const a=r.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=i?i(e,a,((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&L(e,t)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();r.intro&&G(e.$$.fragment),D(e,r.target,r.anchor),A()}k(d)}class U{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const X=["focus","blur","fullscreenchange","fullscreenerror","scroll","cut","copy","paste","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","pointerlockchange","pointerlockerror","select","wheel","drag","dragend","dragenter","dragstart","dragleave","dragover","drop","touchcancel","touchend","touchmove","touchstart","pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture"];function Y(e){let n,o,i,s,c,d,f,m,g;const w=e[11].default,x=function(t,e,n,o){if(t){const r=l(t,e,n,o);return t[0](r)}}(w,e,e[10],null);return{c(){n=p("canvas"),d=$(),x&&x.c(),y(n,"style",o="width: "+e[1]+"px; height: "+e[2]+"px;"+(e[3]?` ${e[3]}`:"")),y(n,"width",i=e[1]*e[0]),y(n,"height",s=e[2]*e[0]),y(n,"class","svelte-1ddo82f")},m(o,i){var s;a(o,n,i),e[12](n),a(o,d,i),x&&x.m(o,i),f=!0,m||(s=c=e[5].call(null,n),g=s&&r(s.destroy)?s.destroy:t,m=!0)},p(t,[e]){(!f||14&e&&o!==(o="width: "+t[1]+"px; height: "+t[2]+"px;"+(t[3]?` ${t[3]}`:"")))&&y(n,"style",o),(!f||3&e&&i!==(i=t[1]*t[0]))&&y(n,"width",i),(!f||5&e&&s!==(s=t[2]*t[0]))&&y(n,"height",s),x&&x.p&&1024&e&&u(x,w,t,t[10],e,null,null)},i(t){f||(G(x,t),f=!0)},o(t){O(x,t),f=!1},d(t){t&&h(n),e[12](null),t&&h(d),x&&x.d(t),m=!1,g()}}}const J={};function Q(t,e,n){let{$$slots:o={},$$scope:r}=e;const i=function(){const t=b;return e=>{const n=X.map((n=>w(e,n,(e=>function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)))));return{destroy:()=>n.forEach((t=>t()))}}}();let s,c,l=!0,u=!0,d=!0,a=[],h=[],f=[],{width:p=640}=e,{height:m=640}=e,{pixelRatio:$}=e,{style:g=null}=e,{autoclear:y=!0}=e;const x=()=>l=!0,k=()=>d=!0,S=()=>{if(u&&(c.scale($,$),u=!1),d&&(f=h.map(((t,e)=>{const n=t.priority();return t.rank=n||e-h.length,t})).sort(((t,e)=>t.rank-e.rank)),d=!1),0!==a.length){for(let t of a)t({context:c,width:p,height:m}),a.splice(a.indexOf(t),1);l=!0}if(l){y&&c.clearRect(0,0,p,m);for(let{render:t}of f)t({context:c,width:p,height:m});l=!1}window.requestAnimationFrame(S)};var C;return N(J,{register:({setup:t,renderer:e})=>{var n;t&&a.push(t),h.push(e),n=()=>{h.splice(h.indexOf(e),1),k(),x()},v().$$.on_destroy.push(n)},redraw:x,priorityChange:k}),void 0===$&&($="undefined"==typeof window?2:window.devicePixelRatio),C=()=>{c=s.getContext("2d"),S()},v().$$.on_mount.push(C),t.$$set=t=>{"width"in t&&n(1,p=t.width),"height"in t&&n(2,m=t.height),"pixelRatio"in t&&n(0,$=t.pixelRatio),"style"in t&&n(3,g=t.style),"autoclear"in t&&n(6,y=t.autoclear),"$$scope"in t&&n(10,r=t.$$scope)},t.$$.update=()=>{71&t.$$.dirty&&(u=!0,x())},[$,p,m,g,s,i,y,()=>s,()=>c,x,r,o,function(t){I[t?"unshift":"push"]((()=>{s=t,n(4,s)}))}]}class Z extends U{constructor(t){super(),K(this,t,Q,Y,i,{width:1,height:2,pixelRatio:0,style:3,autoclear:6,getCanvas:7,getContext:8,redraw:9})}get getCanvas(){return this.$$.ctx[7]}get getContext(){return this.$$.ctx[8]}get redraw(){return this.$$.ctx[9]}}function tt(t,e,n){const{register:o,redraw:r,priorityChange:i}=S(J);let{setup:s}=e,{render:c=(()=>{})}=e,{priority:l}=e;if("function"!=typeof s&&void 0!==s)throw new Error("setup must be a function");if("function"!=typeof c)throw new Error("render must be a function");if(l&&(!Number.isInteger(l)||l<=0))throw new Error("priority must be a positive integer");return o({setup:s,renderer:{render:c,priority:()=>l}}),t.$$set=t=>{"setup"in t&&n(0,s=t.setup),"render"in t&&n(1,c=t.render),"priority"in t&&n(2,l=t.priority)},t.$$.update=()=>{4&t.$$.dirty&&i(),6&t.$$.dirty&&r()},[s,c,l]}class et extends U{constructor(t){super(),K(this,t,tt,null,i,{setup:0,render:1,priority:2})}}const nt=[];function ot(e,n=t){let o;const r=[];function s(t){if(i(e,t)&&(e=t,o)){const t=!nt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const l=[i,c];return r.push(l),1===r.length&&(o=n(s)||t),i(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}let rt;const it=Date.now();var st=function(t,e){return{subscribe:ot(t,e).subscribe}}(Date.now()-it,"undefined"==typeof window?function(){}:function t(e){return e(Date.now()-it),rt=window.requestAnimationFrame((()=>t(e))),()=>window.cancelAnimationFrame(rt)});function ct(t){let e,n;return e=new et({props:{render:t[2],priority:(t[0]||t[1])&&1}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,[n]){const o={};4&n&&(o.render=t[2]),3&n&&(o.priority=(t[0]||t[1])&&1),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function lt(t,e,n){let o,{selected:r=!1}=e,{picked:i=!1}=e,{row:s}=e,{column:c}=e,{width:l}=e,{height:u}=e,{background:d}=e;return t.$$set=t=>{"selected"in t&&n(0,r=t.selected),"picked"in t&&n(1,i=t.picked),"row"in t&&n(3,s=t.row),"column"in t&&n(4,c=t.column),"width"in t&&n(5,l=t.width),"height"in t&&n(6,u=t.height),"background"in t&&n(7,d=t.background)},t.$$.update=()=>{251&t.$$.dirty&&n(2,o=({context:t})=>{const e=c*l,n=s*u;d.complete?t.drawImage(d,e,n,l,u):d.addEventListener("load",(()=>{t.drawImage(d,e,n,l,u)})),t.strokeStyle=r||i?"#f00":"#000",t.strokeRect(e,n,l,u)})},[r,i,o,s,c,l,u,d]}class ut extends U{constructor(t){super(),K(this,t,lt,ct,i,{selected:0,picked:1,row:3,column:4,width:5,height:6,background:7})}}function dt(t){let e,n;return e=new et({props:{render:t[1],priority:parseInt(t[0],10)}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.render=t[1]),1&n&&(o.priority=parseInt(t[0],10)),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function at(t,e,n){let o,{dx:r}=e,{dy:i}=e,{radius:s}=e,{color:c}=e,{priority:l}=e;return t.$$set=t=>{"dx"in t&&n(2,r=t.dx),"dy"in t&&n(3,i=t.dy),"radius"in t&&n(4,s=t.radius),"color"in t&&n(5,c=t.color),"priority"in t&&n(0,l=t.priority)},t.$$.update=()=>{60&t.$$.dirty&&n(1,o=({context:t})=>{t.fillStyle=c,t.beginPath(),t.arc(r,i,s,0,2*Math.PI),t.fill()})},[l,o,r,i,s,c]}class ht extends U{constructor(t){super(),K(this,t,at,dt,i,{dx:2,dy:3,radius:4,color:5,priority:0})}}function ft(t){let e,n;return e=new ht({props:{dx:t[2],dy:t[3],color:t[1],radius:t[0]/2.5,priority:"10"}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.color=t[1]),1&n&&(o.radius=t[0]/2.5),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function pt(t,e,n){let{column:o}=e,{row:r}=e,{nodeWidth:i}=e,{nodeHeight:s}=e,{color:c="#f00"}=e;o=parseInt(o,10),r=parseInt(r,10);const l=(o+.5)*i,u=(r+.5)*s;return t.$$set=t=>{"column"in t&&n(4,o=t.column),"row"in t&&n(5,r=t.row),"nodeWidth"in t&&n(6,i=t.nodeWidth),"nodeHeight"in t&&n(0,s=t.nodeHeight),"color"in t&&n(1,c=t.color)},[s,c,l,u,o,r,i]}class mt extends U{constructor(t){super(),K(this,t,pt,ft,i,{column:4,row:5,nodeWidth:6,nodeHeight:0,color:1})}}function $t(t){let e,n;return e=new et({props:{render:t[0],priority:5}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.render=t[0]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function gt(t,e,n){const o=S("game"),r=o.nodeWidth,i=o.nodeHeight;let s;return n(0,s=({context:t})=>{t.strokeStyle="#0f0",t.beginPath(),t.moveTo((o.minionSource.column+.5)*r,(o.minionSource.row+.5)*i);for(let e=0;e<o.path.length;e++)t.lineTo((o.path[e].column+.5)*r,(o.path[e].row+.5)*r);t.stroke()}),[s]}class wt extends U{constructor(t){super(),K(this,t,gt,$t,i,{})}}function yt(t){let e,n;return e=new ht({props:{dx:t[2],dy:t[3],color:t[1],radius:t[0]/2.5,priority:"10"}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.color=t[1]),1&n&&(o.radius=t[0]/2.5),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function xt(t,e,n){let{column:o}=e,{row:r}=e,{nodeWidth:i}=e,{nodeHeight:s}=e,{color:c="#00f"}=e;o=parseInt(o,10),r=parseInt(r,10);const l=(o+.5)*i,u=(r+.5)*s;return t.$$set=t=>{"column"in t&&n(4,o=t.column),"row"in t&&n(5,r=t.row),"nodeWidth"in t&&n(6,i=t.nodeWidth),"nodeHeight"in t&&n(0,s=t.nodeHeight),"color"in t&&n(1,c=t.color)},[s,c,l,u,o,r,i]}class bt extends U{constructor(t){super(),K(this,t,xt,yt,i,{column:4,row:5,nodeWidth:6,nodeHeight:0,color:1})}}function kt(t){let e,n;return e=new ht({props:{dx:t[0],dy:t[1],color:"#ff0",radius:"2",priority:"30"}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.dx=t[0]),2&n&&(o.dy=t[1]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function vt(t,e,n){let{minion:o}=e,r=20,i=20;return t.$$set=t=>{"minion"in t&&n(2,o=t.minion)},t.$$.update=()=>{4&t.$$.dirty&&n(0,r=o.position.dx),4&t.$$.dirty&&n(1,i=o.position.dy)},[r,i,o]}class Nt extends U{constructor(t){super(),K(this,t,vt,kt,i,{minion:2})}}function St(t,e,n){const o=t.slice();return o[3]=e[n],o}function Ct(t){let e,n;return e=new Nt({props:{minion:t[3]}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.minion=t[3]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function It(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=Ct(St(t,o,e));const i=t=>O(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=g()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);a(t,e,o),n=!0},p(t,[n]){if(1&n){let s;for(o=t[0],s=0;s<o.length;s+=1){const i=St(t,o,s);r[s]?(r[s].p(i,n),G(r[s],1)):(r[s]=Ct(i),r[s].c(),G(r[s],1),r[s].m(e.parentNode,e))}for(j(),s=o.length;s<r.length;s+=1)i(s);z()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)G(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)O(r[t]);n=!1},d(t){f(r,t),t&&h(e)}}}function _t(t,e,n){let o;const r=S("game"),i=r.minionCollection.minions;return c(t,i,(t=>n(0,o=t))),st.subscribe((()=>{r.minionCollection.update()})),[o,i]}class Mt extends U{constructor(t){super(),K(this,t,_t,It,i,{})}}function Ft(t){let e,n;return e=new et({props:{render:t[0].renderer,priority:30}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.render=t[0].renderer),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Pt(t,e,n){let{tower:o}=e;return t.$$set=t=>{"tower"in t&&n(0,o=t.tower)},[o]}class Et extends U{constructor(t){super(),K(this,t,Pt,Ft,i,{tower:0})}}function Ht(t,e,n){const o=t.slice();return o[3]=e[n],o}function Wt(t){let e,n;return e=new Et({props:{tower:t[3]}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.tower=t[3]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function At(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=Wt(Ht(t,o,e));const i=t=>O(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=g()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);a(t,e,o),n=!0},p(t,[n]){if(1&n){let s;for(o=t[0],s=0;s<o.length;s+=1){const i=Ht(t,o,s);r[s]?(r[s].p(i,n),G(r[s],1)):(r[s]=Wt(i),r[s].c(),G(r[s],1),r[s].m(e.parentNode,e))}for(j(),s=o.length;s<r.length;s+=1)i(s);z()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)G(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)O(r[t]);n=!1},d(t){f(r,t),t&&h(e)}}}function Rt(t,e,n){let o;const r=S("game"),i=r.towerCollection.towers;return c(t,i,(t=>n(0,o=t))),st.subscribe((()=>{r.towerCollection.update()})),[o,i]}class Tt extends U{constructor(t){super(),K(this,t,Rt,At,i,{})}}function Bt(t){let e,n;return e=new et({props:{render:t[1],priority:parseInt(t[0],10)}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.render=t[1]),1&n&&(o.priority=parseInt(t[0],10)),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function jt(t,e,n){let o,{color:r="hsl(0, 0%, 100%)"}=e,{align:i="center"}=e,{baseline:s="middle"}=e,{text:c=""}=e,{dx:l=0}=e,{dy:u=0}=e,{priority:d=5}=e,{fontSize:a=16}=e,{fontFamily:h='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica'}=e;return t.$$set=t=>{"color"in t&&n(2,r=t.color),"align"in t&&n(3,i=t.align),"baseline"in t&&n(4,s=t.baseline),"text"in t&&n(5,c=t.text),"dx"in t&&n(6,l=t.dx),"dy"in t&&n(7,u=t.dy),"priority"in t&&n(0,d=t.priority),"fontSize"in t&&n(8,a=t.fontSize),"fontFamily"in t&&n(9,h=t.fontFamily)},t.$$.update=()=>{1020&t.$$.dirty&&n(1,o=({context:t})=>{c&&(t.fillStyle=r,t.font=`${a}px ${h}`,t.textAlign=i,t.textBaseline=s,t.fillText(c,l,u))})},[d,o,r,i,s,c,l,u,a,h]}class zt extends U{constructor(t){super(),K(this,t,jt,Bt,i,{color:2,align:3,baseline:4,text:5,dx:6,dy:7,priority:0,fontSize:8,fontFamily:9})}}function Gt(t){let e,n;return e=new zt({props:{text:t[0],fontSize:"12",fontFamily:"Courier New",align:"left",baseline:"top",dy:20,dx:20}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.text=t[0]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Ot(t,e,n){let o;c(t,st,(t=>n(1,o=t)));let r="",i=0,s=o;return t.$$.update=()=>{2&t.$$.dirty&&n(0,r=o&&function(){let t=o;i++,t>=s+1e3&&(n(0,r=`${(1e3*i/(t-s)).toFixed(1)} FPS`),s=t,i=0);return r}())},[r,o]}class Vt extends U{constructor(t){super(),K(this,t,Ot,Gt,i,{})}}const Dt=ot({activeMenu:"none",pickedNode:{row:null,column:null},nodeCollection:null});function qt(t,e,n){const o=t.slice();return o[11]=e[n].row,o[12]=e[n].column,o[14]=n,o}function Lt(t){let e,n;return e=new ut({props:{width:t[4],height:t[5],row:t[11],column:t[12],selected:t[0].row===t[11]&&t[0].column===t[12],picked:t[1].row===t[11]&&t[1].column===t[12],background:t[2]}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.selected=t[0].row===t[11]&&t[0].column===t[12]),2&n&&(o.picked=t[1].row===t[11]&&t[1].column===t[12]),4&n&&(o.background=t[2]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Kt(t){let e,n,o,r,i,s,c,l,u,d,p,m,g,w=t[3].fieldNodeCollection.getFieldNodes(),y=[];for(let e=0;e<w.length;e+=1)y[e]=Lt(qt(t,w,e));const x=t=>O(y[t],1,1,(()=>{y[t]=null}));return n=new mt({props:{row:t[3].minionSource.row,column:t[3].minionSource.column,nodeWidth:t[4],nodeHeight:t[5]}}),r=new bt({props:{row:t[3].minionSink.row,column:t[3].minionSink.column,nodeWidth:t[4],nodeHeight:t[5]}}),s=new Tt({}),l=new Mt({}),d=new wt({}),m=new Vt({}),{c(){for(let t=0;t<y.length;t+=1)y[t].c();e=$(),V(n.$$.fragment),o=$(),V(r.$$.fragment),i=$(),V(s.$$.fragment),c=$(),V(l.$$.fragment),u=$(),V(d.$$.fragment),p=$(),V(m.$$.fragment)},m(t,h){for(let e=0;e<y.length;e+=1)y[e].m(t,h);a(t,e,h),D(n,t,h),a(t,o,h),D(r,t,h),a(t,i,h),D(s,t,h),a(t,c,h),D(l,t,h),a(t,u,h),D(d,t,h),a(t,p,h),D(m,t,h),g=!0},p(t,n){if(63&n){let o;for(w=t[3].fieldNodeCollection.getFieldNodes(),o=0;o<w.length;o+=1){const r=qt(t,w,o);y[o]?(y[o].p(r,n),G(y[o],1)):(y[o]=Lt(r),y[o].c(),G(y[o],1),y[o].m(e.parentNode,e))}for(j(),o=w.length;o<y.length;o+=1)x(o);z()}},i(t){if(!g){for(let t=0;t<w.length;t+=1)G(y[t]);G(n.$$.fragment,t),G(r.$$.fragment,t),G(s.$$.fragment,t),G(l.$$.fragment,t),G(d.$$.fragment,t),G(m.$$.fragment,t),g=!0}},o(t){y=y.filter(Boolean);for(let t=0;t<y.length;t+=1)O(y[t]);O(n.$$.fragment,t),O(r.$$.fragment,t),O(s.$$.fragment,t),O(l.$$.fragment,t),O(d.$$.fragment,t),O(m.$$.fragment,t),g=!1},d(t){f(y,t),t&&h(e),q(n,t),t&&h(o),q(r,t),t&&h(i),q(s,t),t&&h(c),q(l,t),t&&h(u),q(d,t),t&&h(p),q(m,t)}}}function Ut(t){let e,n;return e=new Z({props:{width:t[6],height:t[7],$$slots:{default:[Kt]},$$scope:{ctx:t}}}),e.$on("mousemove",t[8]),e.$on("mouseout",t[9]),e.$on("mousedown",t[10]),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,[n]){const o={};32775&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Xt(t,e,n){const o=S("game"),r=o.nodeWidth,i=o.nodeHeight,s=o.columns*r,c=o.rows*i;let l={row:null,column:null},u=l;Dt.subscribe((t=>{t.pickedNode?(u.row!==t.pickedNode.row&&n(1,u.row=t.pickedNode.row,u),u.column!==t.pickedNode.column&&n(1,u.column=t.pickedNode.column,u)):n(1,u.row=n(1,u.column=null,u),u)}));const d=new Image;d.src="gfx/field.png";return[l,u,d,o,r,i,s,c,({clientX:t,clientY:e})=>{n(0,l.row=Math.min(parseInt(parseInt(e/i,10)-.5,10),o.rows-1),l),n(0,l.column=Math.min(parseInt(parseInt(t/r,10)+.5,10),o.columns-1),l),o.setSelected({...l})},()=>n(0,l.row=n(0,l.column=null,l),l),()=>{n(1,u={...l}),o.setPicked({...u}),Dt.update((t=>(t.activeMenu="build",t.pickedNode.row=u.row,t.pickedNode.column=u.column,t)))}]}Dt.updateValue=(t,e)=>{Dt.update((n=>(n[t]=e,n)))};class Yt extends U{constructor(t){super(),K(this,t,Xt,Ut,i,{})}}function Jt(e){let n,o,r,i,s,c,l,u,f;return{c(){n=p("p"),o=m("Build Menu for "),r=m(e[0]),i=$(),s=m(e[1]),c=$(),l=p("button"),l.textContent="Create Tower (2)"},m(t,h){a(t,n,h),d(n,o),d(n,r),d(n,i),d(n,s),d(n,c),d(n,l),u||(f=w(l,"mousedown",e[2]),u=!0)},p(t,[e]){1&e&&x(r,t[0]),2&e&&x(s,t[1])},i:t,o:t,d(t){t&&h(n),u=!1,f()}}}function Qt(t,e,n){let{row:o}=e,{column:r}=e;const i=S("game");return t.$$set=t=>{"row"in t&&n(0,o=t.row),"column"in t&&n(1,r=t.column)},[o,r,function(){i.buildTower(o,r)}]}class Zt extends U{constructor(t){super(),K(this,t,Qt,Jt,i,{row:0,column:1})}}function te(e){let n;return{c(){n=m("Kein Menü")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function ee(t){let e,n;return e=new Zt({props:{row:t[1].row,column:t[1].column}}),{c(){V(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.row=t[1].row),2&n&&(o.column=t[1].column),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function ne(e){let n,o,r;return{c(){n=p("span"),n.textContent="✕",y(n,"class","close-menu svelte-p17hr8")},m(t,i){a(t,n,i),o||(r=w(n,"click",e[2]),o=!0)},p:t,d(t){t&&h(n),o=!1,r()}}}function oe(t){let e,n,o,r,i,s,c,l,u;const f=[ee,te],m=[];function g(t,e){return"build"===t[0]?0:1}n=g(t),o=m[n]=f[n](t);let x="none"!==t[0]&&ne(t);return{c(){e=p("div"),o.c(),r=$(),i=p("button"),i.textContent="Minion erstellen",s=$(),x&&x.c(),y(e,"class","menu svelte-p17hr8")},m(o,h){a(o,e,h),m[n].m(e,null),d(e,r),d(e,i),d(e,s),x&&x.m(e,null),c=!0,l||(u=w(i,"mousedown",t[3]),l=!0)},p(t,[i]){let s=n;n=g(t),n===s?m[n].p(t,i):(j(),O(m[s],1,1,(()=>{m[s]=null})),z(),o=m[n],o?o.p(t,i):(o=m[n]=f[n](t),o.c()),G(o,1),o.m(e,r)),"none"!==t[0]?x?x.p(t,i):(x=ne(t),x.c(),x.m(e,null)):x&&(x.d(1),x=null)},i(t){c||(G(o),c=!0)},o(t){O(o),c=!1},d(t){t&&h(e),m[n].d(),x&&x.d(),l=!1,u()}}}function re(t,e,n){let o="none",r=null;const i=S("game");return Dt.subscribe((t=>{t.activeMenu!==o&&n(0,o=t.activeMenu),n(1,r=t.pickedNode)})),[o,r,function(){Dt.update((function(t){return t.activeMenu="none",t.pickedNode.row=null,t.pickedNode.column=null,t}))},function(){i.minionCollection.createMinion("test")}]}class ie extends U{constructor(t){super(),K(this,t,re,oe,i,{})}}function se(e){let n,o,r,i,s,c,l,u;return{c(){n=p("header"),o=p("span"),r=m("Current Minions in Game "),i=m(e[0]),s=$(),c=p("span"),l=m("Current Gold "),u=m(e[1]),y(o,"class","svelte-1ayj57y"),y(c,"class","svelte-1ayj57y"),y(n,"class","svelte-1ayj57y")},m(t,e){a(t,n,e),d(n,o),d(o,r),d(o,i),d(n,s),d(n,c),d(c,l),d(c,u)},p(t,[e]){1&e&&x(i,t[0]),2&e&&x(u,t[1])},i:t,o:t,d(t){t&&h(n)}}}function ce(t,e,n){let o,r;const i=S("game"),s=i.minionCollection.minions;c(t,s,(t=>n(4,o=t)));const l=i.currentGold;c(t,l,(t=>n(1,r=t)));let u=0;return t.$$.update=()=>{16&t.$$.dirty&&n(0,u=o.length)},[u,r,s,l,o]}class le extends U{constructor(t){super(),K(this,t,ce,se,i,{})}}class ue{constructor(t,e){this.row=t,this.column=e}}class de{constructor(t,e){this.rows=t,this.columns=e,this.fieldNodes=[],this._createFieldNodes()}getFieldNode(t,e){const n=this.getFieldNodeIndex(t,e);return n<0||n>=this.columns*this.rows?null:this.getFieldNodeByIndex(n)}getFieldNodeByIndex(t){return this.fieldNodes[t]}getFieldNodeIndex(t,e){return t*this.columns+e}getFieldNodes(){return this.fieldNodes}_createFieldNodes(){for(let t=0;t<this.columns;t++)for(let e=0;e<this.rows;e++)this.fieldNodes.push(new ue(t,e))}}var ae=40,he=40,fe=300;class pe{constructor(t){this.position=t,this.level=0,this.selected=!1,this.picked=!1}update(){}get renderer(){const t=this.position;return({context:e})=>{e.strokeStyle="#000",e.beginPath(),e.arc(t.dx,t.dy,ae/4,0,2*Math.PI),e.stroke(),(this.selected||this.picked)&&(e.strokeStyle="#0ff",e.beginPath(),e.arc(t.dx,t.dy,this.range,0,2*Math.PI),e.stroke()),this.picked&&(e.fillStyle="rgba(0, 255, 255, 0.3)",e.beginPath(),e.arc(t.dx,t.dy,this.range,0,2*Math.PI),e.fill())}}get range(){return(this.level+1)*this.baseRange*ae}get baseRange(){return 5}}class me{constructor(t){this.dx=t.dx,this.dy=t.dy}rescale(t){return this.dx*=t,this.dy*=t,this}add(t){return this.dx+=t.dx,this.dy+=t.dy,this}shift(t){return t instanceof me?this.add(t):(this.dx+=t,this.dy+=t),this}clone(){return new me(this)}}class $e{constructor(){this.towers=ot([])}createTower(t,e,n){let o=new pe(new me({dx:(n+.5)*ae,dy:(e+.5)*he}));return this.towers.update((function(t){return t.push(o),t})),o}update(){this.towers.update((function(t){return t.forEach((t=>{t.update()})),t}))}}class ge{constructor(t){const e=t=>parseInt(Math.random()*t,10);this.waypointIdx=0,this.shift=new me({dx:e(ae),dy:e(he)}),this.path=[...t.map((t=>t.clone().shift(this.shift)))],this.position=this.path.shift(),this.waypoint=this.path.shift()}update(){const t=this.velocity;this.path.length>0&&(t.dx>0&&this.position.dx>=this.waypoint.dx||t.dx<0&&this.position.dx<=this.waypoint.dx||t.dy>0&&this.position.dy>=this.waypoint.dy||t.dy<0&&this.position.dy<=this.waypoint.dy||0==t.dx&&0==t.dy)&&(this.waypoint=this.path.shift()),this.position.add(t)}get velocity(){const t=new me({dx:0,dy:0});return this.position.dx<this.waypoint.dx?t.dx=this.baseVelocity:this.position.dx>this.waypoint.dx&&(t.dx=-this.baseVelocity),this.position.dy<this.waypoint.dy?t.dy=this.baseVelocity:this.position.dy>this.waypoint.dy&&(t.dy=-this.baseVelocity),t.dx*=ae/10,t.dy*=ae/10,t}get baseVelocity(){return 1}}class we{constructor(t,e){this.minionSource=t,this.minionSink=e,this.minions=ot([]),this.path=null}createMinion(t){const e=this.path;this.minions.update((function(t){return t.push(new ge(e)),t}))}update(){this.minions.update((function(t){return t.forEach((t=>{t.update()})),t}))}}class ye{constructor(t,e,n,o){this.nodeWidth=ae,this.nodeHeight=he,this.rows=t,this.columns=e,this.fieldNodeCollection=new de(this.rows,this.columns),this.towerCollection=new $e(this.rows,this.columns),this.minionSource=n,this.minionSink=o,this.minionCollection=new we(this.minionSource,this.minionSink),this.occupiedNodes=Array(t);for(let n=0;n<t;n++)this.occupiedNodes[n]=Array(e).fill(!1);this.currentGold=ot(fe),this.computePath(),this.selected={row:null,column:null},this.picked={row:null,column:null}}buildTower(t,e,n="test"){if(t<0||t>=this.rows||e<0||e>=this.columns)throw`row = ${t} and column = ${e} cannot be found`;if(this.occupiedNodes[t][e])return;if(function(t){let e;return s(t,(t=>e=t))(),e}(this.currentGold)-2<0)return;this.currentGold.update((t=>t-2));const o=this.towerCollection.createTower(n,t,e);this.occupiedNodes[t][e]=o,this.setPicked({row:t,column:e}),this.computePath()}computePath(){const t={...this.minionSource},e={...this.minionSink};let n=t;const o=[{...this.minionSource}];let r=0;for(;n.row!==e.row&&n.column!==e.column&&r<1e3;){let t=null,i=null,s=null;for(let o=0;o<4;o++){const r=this.getStep(n,o);s=this.getDistance(r,e),this.occupiedNodes[r.row][r.column]||t&&!(s<t)||(i={...r},t=s)}if(!i)throw`Cannot find path at step {row = ${n.row}, column = ${n.column}}`;o.push({...i}),n=i,r+=1}o.push({...this.minionSink}),this.path=o,this.minionCollection.path=o.map((t=>new me({dx:t.column*this.nodeWidth,dy:t.row*this.nodeHeight})))}getDistance(t,e){return Math.sqrt(Math.abs(t.row-e.row)**2+Math.abs(t.column-e.column)**2)}getStep(t,e){if(0===e)return{row:t.row+1,column:t.column};if(1===e)return{row:t.row,column:t.column+1};if(2===e)return{row:t.row-1,column:t.column};if(3===e)return{row:t.row,column:t.column-1};throw`Cannot find step for direction ${e}`}setSelected(t){this._updateNodeState(this.getNodeContent(this.selected.row,this.selected.column),this.getNodeContent(t.row,t.column),"selected")&&(this.selected=t)}setPicked(t){this._updateNodeState(this.getNodeContent(this.picked.row,this.picked.column),this.getNodeContent(t.row,t.column),"picked")&&(this.picked=t)}_updateNodeState(t,e,n){return!!(t!=e||t&&!1!==t[n]||e&&!0!==e[n])&&(t&&(t[n]=!1),e&&(e[n]=!0),!0)}getNodeContent(t,e){return null!==t&&null!==e&&this.occupiedNodes[t][e]}}function xe(e){let n,o,r,i,s,c,l;return o=new le({}),i=new Yt({}),c=new ie({}),{c(){n=p("main"),V(o.$$.fragment),r=$(),V(i.$$.fragment),s=$(),V(c.$$.fragment)},m(t,e){a(t,n,e),D(o,n,null),d(n,r),D(i,n,null),d(n,s),D(c,n,null),l=!0},p:t,i(t){l||(G(o.$$.fragment,t),G(i.$$.fragment,t),G(c.$$.fragment,t),l=!0)},o(t){O(o.$$.fragment,t),O(i.$$.fragment,t),O(c.$$.fragment,t),l=!1},d(t){t&&h(n),q(o),q(i),q(c)}}}function be(t){return N("game",new ye(20,20,{row:4,column:3},{row:13,column:17})),[]}return new class extends U{constructor(t){super(),K(this,t,be,xe,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
