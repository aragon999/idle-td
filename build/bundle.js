var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function s(t,e,n){t.$$.on_destroy.push(c(e,n))}function u(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function l(t,e,n,o,r,i,c){const s=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,i);if(s){const r=u(e,n,o,c);t.p(r,s)}}function d(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let x;function b(t){x=t}function k(){if(!x)throw new Error("Function called outside component initialization");return x}function N(t,e){k().$$.context.set(t,e)}function v(t){return k().$$.context.get(t)}const S=[],C=[],I=[],_=[],F=Promise.resolve();let M=!1;function E(t){I.push(t)}let H=!1;const W=new Set;function T(){if(!H){H=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];b(e),P(e.$$)}for(b(null),S.length=0;C.length;)C.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];W.has(e)||(W.add(e),e())}I.length=0}while(S.length);for(;_.length;)_.pop()();M=!1,H=!1,W.clear()}}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const A=new Set;let B;function R(){B={r:0,c:[],p:B}}function z(){B.r||o(B.c),B=B.p}function O(t,e){t&&t.i&&(A.delete(t),t.i(e))}function D(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),B.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function j(t){t&&t.c()}function q(t,n,i){const{fragment:c,on_mount:s,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,i),E((()=>{const n=s.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(E)}function L(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(S.push(t),M||(M=!0,F.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,r,i,c,s,u,l=[-1]){const d=x;b(e);const a=r.props||{},h=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let p=!1;if(h.ctx=i?i(e,a,((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&V(e,t)),n})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();r.intro&&O(e.$$.fragment),q(e,r.target,r.anchor),T()}b(d)}class U{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const X=["focus","blur","fullscreenchange","fullscreenerror","scroll","cut","copy","paste","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","pointerlockchange","pointerlockerror","select","wheel","drag","dragend","dragenter","dragstart","dragleave","dragover","drop","touchcancel","touchend","touchmove","touchstart","pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture"];function Y(e){let n,o,i,c,s,d,h,m,g;const y=e[11].default,x=function(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}(y,e,e[10],null);return{c(){n=p("canvas"),d=$(),x&&x.c(),w(n,"style",o="width: "+e[1]+"px; height: "+e[2]+"px;"+(e[3]?` ${e[3]}`:"")),w(n,"width",i=e[1]*e[0]),w(n,"height",c=e[2]*e[0]),w(n,"class","svelte-o3oskp")},m(o,i){var c;a(o,n,i),e[12](n),a(o,d,i),x&&x.m(o,i),h=!0,m||(c=s=e[5].call(null,n),g=c&&r(c.destroy)?c.destroy:t,m=!0)},p(t,[e]){(!h||14&e&&o!==(o="width: "+t[1]+"px; height: "+t[2]+"px;"+(t[3]?` ${t[3]}`:"")))&&w(n,"style",o),(!h||3&e&&i!==(i=t[1]*t[0]))&&w(n,"width",i),(!h||5&e&&c!==(c=t[2]*t[0]))&&w(n,"height",c),x&&x.p&&1024&e&&l(x,y,t,t[10],e,null,null)},i(t){h||(O(x,t),h=!0)},o(t){D(x,t),h=!1},d(t){t&&f(n),e[12](null),t&&f(d),x&&x.d(t),m=!1,g()}}}const G={};function J(t,e,n){let{$$slots:o={},$$scope:r}=e;const i=function(){const t=x;return e=>{const n=X.map((n=>g(e,n,(e=>function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)))));return{destroy:()=>n.forEach((t=>t()))}}}();let c,s,u=!0,l=!0,d=!0,a=[],f=[],h=[],{width:p=640}=e,{height:m=640}=e,{pixelRatio:$}=e,{style:w=null}=e,{autoclear:y=!0}=e;const b=()=>u=!0,v=()=>d=!0,S=()=>{if(l&&(s.scale($,$),l=!1),d&&(h=f.map(((t,e)=>{const n=t.priority();return t.rank=n||e-f.length,t})).sort(((t,e)=>t.rank-e.rank)),d=!1),0!==a.length){for(let t of a)t({context:s,width:p,height:m}),a.splice(a.indexOf(t),1);u=!0}if(u){y&&s.clearRect(0,0,p,m);for(let{render:t}of h)t({context:s,width:p,height:m});u=!1}window.requestAnimationFrame(S)};var I;return N(G,{register:({setup:t,renderer:e})=>{var n;t&&a.push(t),f.push(e),n=()=>{f.splice(f.indexOf(e),1),v(),b()},k().$$.on_destroy.push(n)},redraw:b,priorityChange:v}),void 0===$&&($="undefined"==typeof window?2:window.devicePixelRatio),I=()=>{s=c.getContext("2d"),S()},k().$$.on_mount.push(I),t.$$set=t=>{"width"in t&&n(1,p=t.width),"height"in t&&n(2,m=t.height),"pixelRatio"in t&&n(0,$=t.pixelRatio),"style"in t&&n(3,w=t.style),"autoclear"in t&&n(6,y=t.autoclear),"$$scope"in t&&n(10,r=t.$$scope)},t.$$.update=()=>{71&t.$$.dirty&&(l=!0,b())},[$,p,m,w,c,i,y,()=>c,()=>s,b,r,o,function(t){C[t?"unshift":"push"]((()=>{c=t,n(4,c)}))}]}class Q extends U{constructor(t){super(),K(this,t,J,Y,i,{width:1,height:2,pixelRatio:0,style:3,autoclear:6,getCanvas:7,getContext:8,redraw:9})}get getCanvas(){return this.$$.ctx[7]}get getContext(){return this.$$.ctx[8]}get redraw(){return this.$$.ctx[9]}}function Z(t,e,n){const{register:o,redraw:r,priorityChange:i}=v(G);let{setup:c}=e,{render:s=(()=>{})}=e,{priority:u}=e;if("function"!=typeof c&&void 0!==c)throw new Error("setup must be a function");if("function"!=typeof s)throw new Error("render must be a function");if(u&&(!Number.isInteger(u)||u<=0))throw new Error("priority must be a positive integer");return o({setup:c,renderer:{render:s,priority:()=>u}}),t.$$set=t=>{"setup"in t&&n(0,c=t.setup),"render"in t&&n(1,s=t.render),"priority"in t&&n(2,u=t.priority)},t.$$.update=()=>{4&t.$$.dirty&&i(),6&t.$$.dirty&&r()},[c,s,u]}class tt extends U{constructor(t){super(),K(this,t,Z,null,i,{setup:0,render:1,priority:2})}}const et=[];function nt(e,n=t){let o;const r=[];function c(t){if(i(e,t)&&(e=t,o)){const t=!et.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(i,s=t){const u=[i,s];return r.push(u),1===r.length&&(o=n(c)||t),i(e),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}let ot;const rt=Date.now();var it=function(t,e){return{subscribe:nt(t,e).subscribe}}(Date.now()-rt,"undefined"==typeof window?function(){}:function t(e){return e(Date.now()-rt),ot=window.requestAnimationFrame((()=>t(e))),()=>window.cancelAnimationFrame(ot)});function ct(t){let e,n;return e=new tt({props:{render:t[2],priority:(t[0]||t[1])&&1}}),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,[n]){const o={};4&n&&(o.render=t[2]),3&n&&(o.priority=(t[0]||t[1])&&1),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function st(t,e,n){let{selected:o=!1}=e,{picked:r=!1}=e,{row:i}=e,{column:c}=e,{width:s}=e,{height:u}=e,{background:l}=e;const d=v("game"),a=d.fieldNodeCollection.getFieldNodeIndex(i,c);let f,h;return t.$$set=t=>{"selected"in t&&n(0,o=t.selected),"picked"in t&&n(1,r=t.picked),"row"in t&&n(3,i=t.row),"column"in t&&n(4,c=t.column),"width"in t&&n(5,s=t.width),"height"in t&&n(6,u=t.height),"background"in t&&n(7,l=t.background)},t.$$.update=()=>{507&t.$$.dirty&&n(2,h=({context:t})=>{const e=c*s,h=i*u;n(8,f=d.fieldNodeCollection.getFieldNodeByIndex(a)),l.complete?t.drawImage(l,e,h,s,u):l.addEventListener("load",(()=>{t.drawImage(l,e,h,s,u)})),t.strokeStyle=o||r?"#f00":"#000",t.strokeRect(e,h,s,u),f.getTower()&&(t.strokeStyle="#000",t.beginPath(),t.arc(e+s/2,h+s/2,s/4,0,2*Math.PI),t.stroke())})},[o,r,h,i,c,s,u,l,f]}class ut extends U{constructor(t){super(),K(this,t,st,ct,i,{selected:0,picked:1,row:3,column:4,width:5,height:6,background:7})}}function lt(t){let e,n;return e=new tt({props:{render:t[1],priority:parseInt(t[0],10)}}),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.render=t[1]),1&n&&(o.priority=parseInt(t[0],10)),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function dt(t,e,n){let o,{dx:r}=e,{dy:i}=e,{radius:c}=e,{color:s}=e,{priority:u}=e;return t.$$set=t=>{"dx"in t&&n(2,r=t.dx),"dy"in t&&n(3,i=t.dy),"radius"in t&&n(4,c=t.radius),"color"in t&&n(5,s=t.color),"priority"in t&&n(0,u=t.priority)},t.$$.update=()=>{60&t.$$.dirty&&n(1,o=({context:t})=>{t.fillStyle=s,t.beginPath(),t.arc(r,i,c,0,2*Math.PI),t.fill()})},[u,o,r,i,c,s]}class at extends U{constructor(t){super(),K(this,t,dt,lt,i,{dx:2,dy:3,radius:4,color:5,priority:0})}}function ft(t){let e,n;return e=new at({props:{dx:t[2],dy:t[3],color:t[1],radius:t[0]/2.5,priority:"10"}}),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.color=t[1]),1&n&&(o.radius=t[0]/2.5),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function ht(t,e,n){let{column:o}=e,{row:r}=e,{nodeWidth:i}=e,{nodeHeight:c}=e,{color:s="#f00"}=e;o=parseInt(o,10),r=parseInt(r,10);const u=(o+.5)*i,l=(r+.5)*c;return t.$$set=t=>{"column"in t&&n(4,o=t.column),"row"in t&&n(5,r=t.row),"nodeWidth"in t&&n(6,i=t.nodeWidth),"nodeHeight"in t&&n(0,c=t.nodeHeight),"color"in t&&n(1,s=t.color)},[c,s,u,l,o,r,i]}class pt extends U{constructor(t){super(),K(this,t,ht,ft,i,{column:4,row:5,nodeWidth:6,nodeHeight:0,color:1})}}function mt(t){let e,n;return e=new tt({props:{render:t[0],priority:5}}),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.render=t[0]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function $t(t,e,n){const o=v("game");let r;return n(0,r=({context:t})=>{t.strokeStyle="#0f0",t.beginPath(),t.moveTo(20*(o.minionSource.column+.5),20*(o.minionSource.row+.5));for(let e=0;e<o.path.length;e++)t.lineTo(20*(o.path[e].column+.5),20*(o.path[e].row+.5));t.stroke()}),[r]}class gt extends U{constructor(t){super(),K(this,t,$t,mt,i,{})}}function wt(t){let e,n;return e=new at({props:{dx:t[2],dy:t[3],color:t[1],radius:t[0]/2.5,priority:"10"}}),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.color=t[1]),1&n&&(o.radius=t[0]/2.5),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function yt(t,e,n){let{column:o}=e,{row:r}=e,{nodeWidth:i}=e,{nodeHeight:c}=e,{color:s="#00f"}=e;o=parseInt(o,10),r=parseInt(r,10);const u=(o+.5)*i,l=(r+.5)*c;return t.$$set=t=>{"column"in t&&n(4,o=t.column),"row"in t&&n(5,r=t.row),"nodeWidth"in t&&n(6,i=t.nodeWidth),"nodeHeight"in t&&n(0,c=t.nodeHeight),"color"in t&&n(1,s=t.color)},[c,s,u,l,o,r,i]}class xt extends U{constructor(t){super(),K(this,t,yt,wt,i,{column:4,row:5,nodeWidth:6,nodeHeight:0,color:1})}}function bt(t){let e,n;return e=new at({props:{dx:t[0],dy:t[1],color:"#ff0",radius:"2",priority:"30"}}),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.dx=t[0]),2&n&&(o.dy=t[1]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function kt(t,e,n){let{minion:o}=e,r=20,i=20;return t.$$set=t=>{"minion"in t&&n(2,o=t.minion)},t.$$.update=()=>{4&t.$$.dirty&&n(0,r=o.position.dx),4&t.$$.dirty&&n(1,i=o.position.dy)},[r,i,o]}class Nt extends U{constructor(t){super(),K(this,t,kt,bt,i,{minion:2})}}function vt(t,e,n){const o=t.slice();return o[3]=e[n],o}function St(t){let e,n;return e=new Nt({props:{minion:t[3]}}),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.minion=t[3]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function Ct(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=St(vt(t,o,e));const i=t=>D(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=m("")},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);a(t,e,o),n=!0},p(t,[n]){if(1&n){let c;for(o=t[0],c=0;c<o.length;c+=1){const i=vt(t,o,c);r[c]?(r[c].p(i,n),O(r[c],1)):(r[c]=St(i),r[c].c(),O(r[c],1),r[c].m(e.parentNode,e))}for(R(),c=o.length;c<r.length;c+=1)i(c);z()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)O(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)D(r[t]);n=!1},d(t){h(r,t),t&&f(e)}}}function It(t,e,n){let o;const r=v("game"),i=r.minionCollection.minions;return s(t,i,(t=>n(0,o=t))),it.subscribe((()=>{r.minionCollection.update()})),[o,i]}class _t extends U{constructor(t){super(),K(this,t,It,Ct,i,{})}}function Ft(t){let e,n;return e=new tt({props:{render:t[1],priority:parseInt(t[0],10)}}),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.render=t[1]),1&n&&(o.priority=parseInt(t[0],10)),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function Mt(t,e,n){let o,{color:r="hsl(0, 0%, 100%)"}=e,{align:i="center"}=e,{baseline:c="middle"}=e,{text:s=""}=e,{dx:u=0}=e,{dy:l=0}=e,{priority:d=5}=e,{fontSize:a=16}=e,{fontFamily:f='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica'}=e;return t.$$set=t=>{"color"in t&&n(2,r=t.color),"align"in t&&n(3,i=t.align),"baseline"in t&&n(4,c=t.baseline),"text"in t&&n(5,s=t.text),"dx"in t&&n(6,u=t.dx),"dy"in t&&n(7,l=t.dy),"priority"in t&&n(0,d=t.priority),"fontSize"in t&&n(8,a=t.fontSize),"fontFamily"in t&&n(9,f=t.fontFamily)},t.$$.update=()=>{1020&t.$$.dirty&&n(1,o=({context:t})=>{s&&(t.fillStyle=r,t.font=`${a}px ${f}`,t.textAlign=i,t.textBaseline=c,t.fillText(s,u,l))})},[d,o,r,i,c,s,u,l,a,f]}class Et extends U{constructor(t){super(),K(this,t,Mt,Ft,i,{color:2,align:3,baseline:4,text:5,dx:6,dy:7,priority:0,fontSize:8,fontFamily:9})}}function Ht(t){let e,n;return e=new Et({props:{text:t[0],fontSize:"12",fontFamily:"Courier New",align:"left",baseline:"top",dy:20,dx:20}}),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.text=t[0]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function Wt(t,e,n){let o;s(t,it,(t=>n(1,o=t)));let r="",i=0,c=o;return t.$$.update=()=>{2&t.$$.dirty&&n(0,r=o&&function(){let t=o;i++,t>=c+1e3&&(n(0,r=`${(1e3*i/(t-c)).toFixed(1)} FPS`),c=t,i=0);return r}())},[r,o]}class Tt extends U{constructor(t){super(),K(this,t,Wt,Ht,i,{})}}const Pt=nt({activeMenu:"none",pickedNode:{row:null,column:null},nodeCollection:null});Pt.updateValue=(t,e)=>{Pt.update((n=>(n[t]=e,n)))};class At{constructor(t,e){this.row=t,this.column=e,this._tower=nt()}setTower(t){this._tower.set(t)}getTower(){return function(t){let e;return c(t,(t=>e=t))(),e}(this._tower)}}class Bt{constructor(t,e){this.rows=t,this.columns=e,this.fieldNodes=[],this._createFieldNodes()}getFieldNode(t,e){const n=this.getFieldNodeIndex(t,e);return n<0||n>=this.columns*this.rows?null:this.getFieldNodeByIndex(n)}getFieldNodeByIndex(t){return this.fieldNodes[t]}getFieldNodeIndex(t,e){return t*this.columns+e}getFieldNodes(){return this.fieldNodes}_createFieldNodes(){for(let t=0;t<this.columns;t++)for(let e=0;e<this.rows;e++)this.fieldNodes.push(new At(t,e))}}function Rt(t,e,n){const o=t.slice();return o[12]=e[n].row,o[13]=e[n].column,o[15]=n,o}function zt(t){let e,n;return e=new ut({props:{width:t[4],height:t[5],row:t[12],column:t[13],selected:t[0].row===t[12]&&t[0].column===t[13],picked:t[1].row===t[12]&&t[1].column===t[13],background:t[2]}}),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.selected=t[0].row===t[12]&&t[0].column===t[13]),2&n&&(o.picked=t[1].row===t[12]&&t[1].column===t[13]),4&n&&(o.background=t[2]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function Ot(t){let e,n,o,r,i,c,s,u,l,d,p,m=t[3].fieldNodeCollection.getFieldNodes(),g=[];for(let e=0;e<m.length;e+=1)g[e]=zt(Rt(t,m,e));const w=t=>D(g[t],1,1,(()=>{g[t]=null}));return n=new pt({props:{row:t[3].minionSource.row,column:t[3].minionSource.column,nodeWidth:t[4],nodeHeight:t[5]}}),r=new xt({props:{row:t[3].minionSink.row,column:t[3].minionSink.column,nodeWidth:t[4],nodeHeight:t[5]}}),c=new _t({}),u=new gt({}),d=new Tt({}),{c(){for(let t=0;t<g.length;t+=1)g[t].c();e=$(),j(n.$$.fragment),o=$(),j(r.$$.fragment),i=$(),j(c.$$.fragment),s=$(),j(u.$$.fragment),l=$(),j(d.$$.fragment)},m(t,f){for(let e=0;e<g.length;e+=1)g[e].m(t,f);a(t,e,f),q(n,t,f),a(t,o,f),q(r,t,f),a(t,i,f),q(c,t,f),a(t,s,f),q(u,t,f),a(t,l,f),q(d,t,f),p=!0},p(t,n){if(63&n){let o;for(m=t[3].fieldNodeCollection.getFieldNodes(),o=0;o<m.length;o+=1){const r=Rt(t,m,o);g[o]?(g[o].p(r,n),O(g[o],1)):(g[o]=zt(r),g[o].c(),O(g[o],1),g[o].m(e.parentNode,e))}for(R(),o=m.length;o<g.length;o+=1)w(o);z()}},i(t){if(!p){for(let t=0;t<m.length;t+=1)O(g[t]);O(n.$$.fragment,t),O(r.$$.fragment,t),O(c.$$.fragment,t),O(u.$$.fragment,t),O(d.$$.fragment,t),p=!0}},o(t){g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)D(g[t]);D(n.$$.fragment,t),D(r.$$.fragment,t),D(c.$$.fragment,t),D(u.$$.fragment,t),D(d.$$.fragment,t),p=!1},d(t){h(g,t),t&&f(e),L(n,t),t&&f(o),L(r,t),t&&f(i),L(c,t),t&&f(s),L(u,t),t&&f(l),L(d,t)}}}function Dt(t){let e,n;return e=new Q({props:{width:t[6],height:t[7],$$slots:{default:[Ot]},$$scope:{ctx:t}}}),e.$on("mousemove",t[8]),e.$on("mouseout",t[9]),e.$on("mousedown",t[10]),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,[n]){const o={};65543&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function jt(t,e,n){const o=v("game"),r=o.nodeWidth,i=o.nodeHeight,c=o.columns*r,s=o.rows*i;let u={row:null,column:null},l=u;Pt.subscribe((t=>{t.pickedNode?(l.row!==t.pickedNode.row&&n(1,l.row=t.pickedNode.row,l),l.column!==t.pickedNode.column&&n(1,l.column=t.pickedNode.column,l)):n(1,l.row=n(1,l.column=null,l),l)}));const d=new Image;d.src="gfx/field.png";return[u,l,d,o,r,i,c,s,({clientX:t,clientY:e})=>{n(0,u.row=Math.min(parseInt(e/i,10),o.rows-1),u),n(0,u.column=Math.min(parseInt(t/r,10),o.columns-1),u)},()=>n(0,u.row=n(0,u.column=null,u),u),()=>{n(1,l=u),Pt.update((t=>(t.activeMenu="build",t.pickedNode.row=l.row,t.pickedNode.column=l.column,t)))}]}class qt extends U{constructor(t){super(),K(this,t,jt,Dt,i,{})}}function Lt(e){let n,o,r,i,c,s,u,l,h;return{c(){n=p("p"),o=m("Build Menu for "),r=m(e[0]),i=$(),c=m(e[1]),s=$(),u=p("button"),u.textContent="Create Tower"},m(t,f){a(t,n,f),d(n,o),d(n,r),d(n,i),d(n,c),d(n,s),d(n,u),l||(h=g(u,"mousedown",e[2]),l=!0)},p(t,[e]){1&e&&y(r,t[0]),2&e&&y(c,t[1])},i:t,o:t,d(t){t&&f(n),l=!1,h()}}}function Vt(t,e,n){let{row:o}=e,{column:r}=e;const i=v("game");return t.$$set=t=>{"row"in t&&n(0,o=t.row),"column"in t&&n(1,r=t.column)},[o,r,function(){i.buildTower(o,r)}]}class Kt extends U{constructor(t){super(),K(this,t,Vt,Lt,i,{row:0,column:1})}}function Ut(e){let n,o,r,i;return{c(){n=m("Kein Menü\n        "),o=p("button"),o.textContent="Minion erstellen"},m(t,c){a(t,n,c),a(t,o,c),r||(i=g(o,"mousedown",e[3]),r=!0)},p:t,i:t,o:t,d(t){t&&f(n),t&&f(o),r=!1,i()}}}function Xt(t){let e,n;return e=new Kt({props:{row:t[1].row,column:t[1].column}}),{c(){j(e.$$.fragment)},m(t,o){q(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.row=t[1].row),2&n&&(o.column=t[1].column),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function Yt(e){let n,o,r;return{c(){n=p("span"),n.textContent="✕",w(n,"class","close-menu svelte-33y398")},m(t,i){a(t,n,i),o||(r=g(n,"click",e[2]),o=!0)},p:t,d(t){t&&f(n),o=!1,r()}}}function Gt(t){let e,n,o,r,i;const c=[Xt,Ut],s=[];function u(t,e){return"build"===t[0]?0:1}n=u(t),o=s[n]=c[n](t);let l="none"!==t[0]&&Yt(t);return{c(){e=p("div"),o.c(),r=$(),l&&l.c(),w(e,"class","menu svelte-33y398")},m(t,o){a(t,e,o),s[n].m(e,null),d(e,r),l&&l.m(e,null),i=!0},p(t,[i]){let d=n;n=u(t),n===d?s[n].p(t,i):(R(),D(s[d],1,1,(()=>{s[d]=null})),z(),o=s[n],o?o.p(t,i):(o=s[n]=c[n](t),o.c()),O(o,1),o.m(e,r)),"none"!==t[0]?l?l.p(t,i):(l=Yt(t),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(t){i||(O(o),i=!0)},o(t){D(o),i=!1},d(t){t&&f(e),s[n].d(),l&&l.d()}}}function Jt(t,e,n){let o="none",r=null;const i=v("game");Pt.subscribe((t=>{t.activeMenu!==o&&n(0,o=t.activeMenu),n(1,r=t.pickedNode)}));return[o,r,function(){Pt.update((function(t){return t.activeMenu="none",t.pickedNode.row=null,t.pickedNode.column=null,t}))},function(){i.minionCollection.createMinion("test")}]}class Qt extends U{constructor(t){super(),K(this,t,Jt,Gt,i,{})}}class Zt{constructor(t){this.dx=t.dx,this.dy=t.dy}rescale(t){return this.dx*=t,this.dy*=t,this}add(t){return this.dx+=t.dx,this.dy+=t.dy,this}shift(t){return this.dx+=t,this.dy+=t,this}clone(){return new Zt(this)}}class te{constructor(t){this.velocity=1,this.waypointIdx=0,this.shift=parseInt(20*Math.random(),10),this.path=[...t.map((t=>t.clone().shift(this.shift)))],this.position=this.path[0].clone()}update(){const t=this.path[this.waypointIdx]||this.path[this.path.length-1],e=new Zt({dx:0,dy:0});this.position.dx<t.dx?e.dx=1:this.position.dx<t.dx&&(e.dx=-1),this.position.dy<t.dy?e.dy=1:this.position.dy<t.dy&&(e.dy=-1),this.position.add(e),(e.dx>0&&this.position.dx>=t.dx||e.dx<0&&this.position.dx<=t.dx||e.dy>0&&this.position.dy>=t.dy||e.dy<0&&this.position.dy<=t.dy||0==e.dx&&0==e.dy)&&(this.waypointIdx+=1)}getVelocity(){return 1}}class ee{constructor(t,e){this.minionSource=t,this.minionSink=e,this.minions=nt([]),this.path=null}createMinion(t){const e=this.path;this.minions.update((function(t){return t.push(new te(e)),t}))}update(){this.path;this.minions.update((function(t){return t.forEach((t=>{t.update()})),t}))}}class ne{constructor(t,e,n,o){this.nodeWidth=20,this.nodeHeight=20,this.rows=t,this.columns=e,this.fieldNodeCollection=new Bt(this.rows,this.columns),this.minionSource=n,this.minionSink=o,this.minionCollection=new ee(this.minionSource,this.minionSink),this.occupiedNodes=Array(t);for(let n=0;n<t;n++)this.occupiedNodes[n]=Array(e).fill(!1);this.computePath()}buildTower(t,e,n="test"){const o=this.fieldNodeCollection.getFieldNode(t,e);o&&(this.occupiedNodes[t][e]||(o.setTower(n),this.occupiedNodes[t][e]=!0,this.computePath()))}computePath(){const t={...this.minionSource},e={...this.minionSink};let n=t;const o=[{...this.minionSource}];let r=0;for(;n.row!==e.row&&n.column!==e.column&&r<1e3;){let t=null,i=null,c=null;for(let o=0;o<4;o++){const r=this.getStep(n,o);c=this.getDistance(r,e),this.occupiedNodes[r.row][r.column]||t&&!(c<t)||(i={...r},t=c)}if(!i)throw`Cannot find path at step {row = ${n.row}, column = ${n.column}}`;o.push({...i}),n=i,r+=1}o.push({...this.minionSink}),this.path=o,this.minionCollection.path=o.map((t=>new Zt({dx:t.column*this.nodeWidth,dy:t.row*this.nodeHeight})))}getDistance(t,e){return Math.sqrt(Math.abs(t.row-e.row)**2+Math.abs(t.column-e.column)**2)}getStep(t,e){if(0===e)return{row:t.row+1,column:t.column};if(1===e)return{row:t.row,column:t.column+1};if(2===e)return{row:t.row-1,column:t.column};if(3===e)return{row:t.row,column:t.column-1};throw`Cannot find step for direction ${e}`}}function oe(e){let n,o,r,i,c;return o=new qt({}),i=new Qt({}),{c(){n=p("main"),j(o.$$.fragment),r=$(),j(i.$$.fragment)},m(t,e){a(t,n,e),q(o,n,null),d(n,r),q(i,n,null),c=!0},p:t,i(t){c||(O(o.$$.fragment,t),O(i.$$.fragment,t),c=!0)},o(t){D(o.$$.fragment,t),D(i.$$.fragment,t),c=!1},d(t){t&&f(n),L(o),L(i)}}}function re(t){return N("game",new ne(20,20,{row:4,column:3},{row:13,column:17})),[]}return new class extends U{constructor(t){super(),K(this,t,re,oe,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
