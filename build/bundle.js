var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function c(t,e,n){t.$$.on_destroy.push(s(e,n))}function u(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function l(t,e,n,o,i,r,s){const c=function(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}(e,o,i,r);if(c){const i=u(e,n,o,s);t.p(i,c)}}function d(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let x;function b(t){x=t}function k(){if(!x)throw new Error("Function called outside component initialization");return x}function v(t,e){k().$$.context.set(t,e)}function N(t){return k().$$.context.get(t)}const S=[],C=[],I=[],_=[],F=Promise.resolve();let M=!1;function E(t){I.push(t)}let H=!1;const W=new Set;function T(){if(!H){H=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];b(e),P(e.$$)}for(b(null),S.length=0;C.length;)C.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];W.has(e)||(W.add(e),e())}I.length=0}while(S.length);for(;_.length;)_.pop()();M=!1,H=!1,W.clear()}}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const A=new Set;let B;function R(){B={r:0,c:[],p:B}}function z(){B.r||o(B.c),B=B.p}function O(t,e){t&&t.i&&(A.delete(t),t.i(e))}function V(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),B.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function D(t){t&&t.c()}function j(t,n,r){const{fragment:s,on_mount:c,on_destroy:u,after_update:l}=t.$$;s&&s.m(n,r),E((()=>{const n=c.map(e).filter(i);u?u.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(E)}function q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(S.push(t),M||(M=!0,F.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,i,r,s,c,u,l=[-1]){const d=x;b(e);const a=i.props||{},f=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=r?r(e,a,((t,n,...o)=>{const i=o.length?o[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),p&&L(e,t)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();i.intro&&O(e.$$.fragment),j(e,i.target,i.anchor),T()}b(d)}class K{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const U=["focus","blur","fullscreenchange","fullscreenerror","scroll","cut","copy","paste","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","pointerlockchange","pointerlockerror","select","wheel","drag","dragend","dragenter","dragstart","dragleave","dragover","drop","touchcancel","touchend","touchmove","touchstart","pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture"];function X(e){let n,o,r,s,c,d,f,m,g;const y=e[11].default,x=function(t,e,n,o){if(t){const i=u(t,e,n,o);return t[0](i)}}(y,e,e[10],null);return{c(){n=p("canvas"),d=$(),x&&x.c(),w(n,"style",o="width: "+e[1]+"px; height: "+e[2]+"px;"+(e[3]?` ${e[3]}`:"")),w(n,"width",r=e[1]*e[0]),w(n,"height",s=e[2]*e[0]),w(n,"class","svelte-o3oskp")},m(o,r){var s;a(o,n,r),e[12](n),a(o,d,r),x&&x.m(o,r),f=!0,m||(s=c=e[5].call(null,n),g=s&&i(s.destroy)?s.destroy:t,m=!0)},p(t,[e]){(!f||14&e&&o!==(o="width: "+t[1]+"px; height: "+t[2]+"px;"+(t[3]?` ${t[3]}`:"")))&&w(n,"style",o),(!f||3&e&&r!==(r=t[1]*t[0]))&&w(n,"width",r),(!f||5&e&&s!==(s=t[2]*t[0]))&&w(n,"height",s),x&&x.p&&1024&e&&l(x,y,t,t[10],e,null,null)},i(t){f||(O(x,t),f=!0)},o(t){V(x,t),f=!1},d(t){t&&h(n),e[12](null),t&&h(d),x&&x.d(t),m=!1,g()}}}const Y={};function J(t,e,n){let{$$slots:o={},$$scope:i}=e;const r=function(){const t=x;return e=>{const n=U.map((n=>g(e,n,(e=>function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)))));return{destroy:()=>n.forEach((t=>t()))}}}();let s,c,u=!0,l=!0,d=!0,a=[],h=[],f=[],{width:p=640}=e,{height:m=640}=e,{pixelRatio:$}=e,{style:w=null}=e,{autoclear:y=!0}=e;const b=()=>u=!0,N=()=>d=!0,S=()=>{if(l&&(c.scale($,$),l=!1),d&&(f=h.map(((t,e)=>{const n=t.priority();return t.rank=n||e-h.length,t})).sort(((t,e)=>t.rank-e.rank)),d=!1),0!==a.length){for(let t of a)t({context:c,width:p,height:m}),a.splice(a.indexOf(t),1);u=!0}if(u){y&&c.clearRect(0,0,p,m);for(let{render:t}of f)t({context:c,width:p,height:m});u=!1}window.requestAnimationFrame(S)};var I;return v(Y,{register:({setup:t,renderer:e})=>{var n;t&&a.push(t),h.push(e),n=()=>{h.splice(h.indexOf(e),1),N(),b()},k().$$.on_destroy.push(n)},redraw:b,priorityChange:N}),void 0===$&&($="undefined"==typeof window?2:window.devicePixelRatio),I=()=>{c=s.getContext("2d"),S()},k().$$.on_mount.push(I),t.$$set=t=>{"width"in t&&n(1,p=t.width),"height"in t&&n(2,m=t.height),"pixelRatio"in t&&n(0,$=t.pixelRatio),"style"in t&&n(3,w=t.style),"autoclear"in t&&n(6,y=t.autoclear),"$$scope"in t&&n(10,i=t.$$scope)},t.$$.update=()=>{71&t.$$.dirty&&(l=!0,b())},[$,p,m,w,s,r,y,()=>s,()=>c,b,i,o,function(t){C[t?"unshift":"push"]((()=>{s=t,n(4,s)}))}]}class Q extends K{constructor(t){super(),G(this,t,J,X,r,{width:1,height:2,pixelRatio:0,style:3,autoclear:6,getCanvas:7,getContext:8,redraw:9})}get getCanvas(){return this.$$.ctx[7]}get getContext(){return this.$$.ctx[8]}get redraw(){return this.$$.ctx[9]}}function Z(t,e,n){const{register:o,redraw:i,priorityChange:r}=N(Y);let{setup:s}=e,{render:c=(()=>{})}=e,{priority:u}=e;if("function"!=typeof s&&void 0!==s)throw new Error("setup must be a function");if("function"!=typeof c)throw new Error("render must be a function");if(u&&(!Number.isInteger(u)||u<=0))throw new Error("priority must be a positive integer");return o({setup:s,renderer:{render:c,priority:()=>u}}),t.$$set=t=>{"setup"in t&&n(0,s=t.setup),"render"in t&&n(1,c=t.render),"priority"in t&&n(2,u=t.priority)},t.$$.update=()=>{4&t.$$.dirty&&r(),6&t.$$.dirty&&i()},[s,c,u]}class tt extends K{constructor(t){super(),G(this,t,Z,null,r,{setup:0,render:1,priority:2})}}const et=[];function nt(e,n=t){let o;const i=[];function s(t){if(r(e,t)&&(e=t,o)){const t=!et.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(r,c=t){const u=[r,c];return i.push(u),1===i.length&&(o=n(s)||t),r(e),()=>{const t=i.indexOf(u);-1!==t&&i.splice(t,1),0===i.length&&(o(),o=null)}}}}let ot;const it=Date.now();var rt=function(t,e){return{subscribe:nt(t,e).subscribe}}(Date.now()-it,"undefined"==typeof window?function(){}:function t(e){return e(Date.now()-it),ot=window.requestAnimationFrame((()=>t(e))),()=>window.cancelAnimationFrame(ot)});function st(t){let e,n;return e=new tt({props:{render:t[2],priority:(t[0]||t[1])&&1}}),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,[n]){const o={};4&n&&(o.render=t[2]),3&n&&(o.priority=(t[0]||t[1])&&1),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function ct(t,e,n){let{selected:o=!1}=e,{picked:i=!1}=e,{row:r}=e,{column:s}=e,{width:c}=e,{height:u}=e,{background:l}=e;const d=N("game"),a=d.fieldNodeCollection.getFieldNodeIndex(r,s);let h,f;return t.$$set=t=>{"selected"in t&&n(0,o=t.selected),"picked"in t&&n(1,i=t.picked),"row"in t&&n(3,r=t.row),"column"in t&&n(4,s=t.column),"width"in t&&n(5,c=t.width),"height"in t&&n(6,u=t.height),"background"in t&&n(7,l=t.background)},t.$$.update=()=>{507&t.$$.dirty&&n(2,f=({context:t})=>{const e=s*c,f=r*u;n(8,h=d.fieldNodeCollection.getFieldNodeByIndex(a)),l.complete?t.drawImage(l,e,f,c,u):l.addEventListener("load",(()=>{t.drawImage(l,e,f,c,u)})),t.strokeStyle=o||i?"#f00":"#000",t.strokeRect(e,f,c,u),h.getTower()&&(t.strokeStyle="#000",t.beginPath(),t.arc(e+c/2,f+c/2,c/4,0,2*Math.PI),t.stroke())})},[o,i,f,r,s,c,u,l,h]}class ut extends K{constructor(t){super(),G(this,t,ct,st,r,{selected:0,picked:1,row:3,column:4,width:5,height:6,background:7})}}function lt(t){let e,n;return e=new tt({props:{render:t[1],priority:parseInt(t[0],10)}}),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.render=t[1]),1&n&&(o.priority=parseInt(t[0],10)),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function dt(t,e,n){let o,{dx:i}=e,{dy:r}=e,{radius:s}=e,{color:c}=e,{priority:u}=e;return t.$$set=t=>{"dx"in t&&n(2,i=t.dx),"dy"in t&&n(3,r=t.dy),"radius"in t&&n(4,s=t.radius),"color"in t&&n(5,c=t.color),"priority"in t&&n(0,u=t.priority)},t.$$.update=()=>{60&t.$$.dirty&&n(1,o=({context:t})=>{t.fillStyle=c,t.beginPath(),t.arc(i,r,s,0,2*Math.PI),t.fill()})},[u,o,i,r,s,c]}class at extends K{constructor(t){super(),G(this,t,dt,lt,r,{dx:2,dy:3,radius:4,color:5,priority:0})}}function ht(t){let e,n;return e=new at({props:{dx:t[2],dy:t[3],color:t[1],radius:t[0]/2.5,priority:"10"}}),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.color=t[1]),1&n&&(o.radius=t[0]/2.5),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function ft(t,e,n){let{column:o}=e,{row:i}=e,{nodeWidth:r}=e,{nodeHeight:s}=e,{color:c="#f00"}=e;o=parseInt(o,10),i=parseInt(i,10);const u=(o+.5)*r,l=(i+.5)*s;return t.$$set=t=>{"column"in t&&n(4,o=t.column),"row"in t&&n(5,i=t.row),"nodeWidth"in t&&n(6,r=t.nodeWidth),"nodeHeight"in t&&n(0,s=t.nodeHeight),"color"in t&&n(1,c=t.color)},[s,c,u,l,o,i,r]}class pt extends K{constructor(t){super(),G(this,t,ft,ht,r,{column:4,row:5,nodeWidth:6,nodeHeight:0,color:1})}}function mt(t){let e,n;return e=new tt({props:{render:t[0],priority:5}}),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.render=t[0]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function $t(t,e,n){const o=N("game"),i=o.nodeWidth,r=o.nodeHeight;let s;return n(0,s=({context:t})=>{t.strokeStyle="#0f0",t.beginPath(),t.moveTo((o.minionSource.column+.5)*i,(o.minionSource.row+.5)*r);for(let e=0;e<o.path.length;e++)t.lineTo((o.path[e].column+.5)*i,(o.path[e].row+.5)*i);t.stroke()}),[s]}class gt extends K{constructor(t){super(),G(this,t,$t,mt,r,{})}}function wt(t){let e,n;return e=new at({props:{dx:t[2],dy:t[3],color:t[1],radius:t[0]/2.5,priority:"10"}}),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.color=t[1]),1&n&&(o.radius=t[0]/2.5),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function yt(t,e,n){let{column:o}=e,{row:i}=e,{nodeWidth:r}=e,{nodeHeight:s}=e,{color:c="#00f"}=e;o=parseInt(o,10),i=parseInt(i,10);const u=(o+.5)*r,l=(i+.5)*s;return t.$$set=t=>{"column"in t&&n(4,o=t.column),"row"in t&&n(5,i=t.row),"nodeWidth"in t&&n(6,r=t.nodeWidth),"nodeHeight"in t&&n(0,s=t.nodeHeight),"color"in t&&n(1,c=t.color)},[s,c,u,l,o,i,r]}class xt extends K{constructor(t){super(),G(this,t,yt,wt,r,{column:4,row:5,nodeWidth:6,nodeHeight:0,color:1})}}function bt(t){let e,n;return e=new at({props:{dx:t[0],dy:t[1],color:"#ff0",radius:"2",priority:"30"}}),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.dx=t[0]),2&n&&(o.dy=t[1]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function kt(t,e,n){let{minion:o}=e,i=20,r=20;return t.$$set=t=>{"minion"in t&&n(2,o=t.minion)},t.$$.update=()=>{4&t.$$.dirty&&n(0,i=o.position.dx),4&t.$$.dirty&&n(1,r=o.position.dy)},[i,r,o]}class vt extends K{constructor(t){super(),G(this,t,kt,bt,r,{minion:2})}}function Nt(t,e,n){const o=t.slice();return o[3]=e[n],o}function St(t){let e,n;return e=new vt({props:{minion:t[3]}}),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.minion=t[3]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Ct(t){let e,n,o=t[0],i=[];for(let e=0;e<o.length;e+=1)i[e]=St(Nt(t,o,e));const r=t=>V(i[t],1,1,(()=>{i[t]=null}));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=m("")},m(t,o){for(let e=0;e<i.length;e+=1)i[e].m(t,o);a(t,e,o),n=!0},p(t,[n]){if(1&n){let s;for(o=t[0],s=0;s<o.length;s+=1){const r=Nt(t,o,s);i[s]?(i[s].p(r,n),O(i[s],1)):(i[s]=St(r),i[s].c(),O(i[s],1),i[s].m(e.parentNode,e))}for(R(),s=o.length;s<i.length;s+=1)r(s);z()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)O(i[t]);n=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)V(i[t]);n=!1},d(t){f(i,t),t&&h(e)}}}function It(t,e,n){let o;const i=N("game"),r=i.minionCollection.minions;return c(t,r,(t=>n(0,o=t))),rt.subscribe((()=>{i.minionCollection.update()})),[o,r]}class _t extends K{constructor(t){super(),G(this,t,It,Ct,r,{})}}function Ft(t){let e,n;return e=new tt({props:{render:t[1],priority:parseInt(t[0],10)}}),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.render=t[1]),1&n&&(o.priority=parseInt(t[0],10)),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Mt(t,e,n){let o,{color:i="hsl(0, 0%, 100%)"}=e,{align:r="center"}=e,{baseline:s="middle"}=e,{text:c=""}=e,{dx:u=0}=e,{dy:l=0}=e,{priority:d=5}=e,{fontSize:a=16}=e,{fontFamily:h='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica'}=e;return t.$$set=t=>{"color"in t&&n(2,i=t.color),"align"in t&&n(3,r=t.align),"baseline"in t&&n(4,s=t.baseline),"text"in t&&n(5,c=t.text),"dx"in t&&n(6,u=t.dx),"dy"in t&&n(7,l=t.dy),"priority"in t&&n(0,d=t.priority),"fontSize"in t&&n(8,a=t.fontSize),"fontFamily"in t&&n(9,h=t.fontFamily)},t.$$.update=()=>{1020&t.$$.dirty&&n(1,o=({context:t})=>{c&&(t.fillStyle=i,t.font=`${a}px ${h}`,t.textAlign=r,t.textBaseline=s,t.fillText(c,u,l))})},[d,o,i,r,s,c,u,l,a,h]}class Et extends K{constructor(t){super(),G(this,t,Mt,Ft,r,{color:2,align:3,baseline:4,text:5,dx:6,dy:7,priority:0,fontSize:8,fontFamily:9})}}function Ht(t){let e,n;return e=new Et({props:{text:t[0],fontSize:"12",fontFamily:"Courier New",align:"left",baseline:"top",dy:20,dx:20}}),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.text=t[0]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Wt(t,e,n){let o;c(t,rt,(t=>n(1,o=t)));let i="",r=0,s=o;return t.$$.update=()=>{2&t.$$.dirty&&n(0,i=o&&function(){let t=o;r++,t>=s+1e3&&(n(0,i=`${(1e3*r/(t-s)).toFixed(1)} FPS`),s=t,r=0);return i}())},[i,o]}class Tt extends K{constructor(t){super(),G(this,t,Wt,Ht,r,{})}}const Pt=nt({activeMenu:"none",pickedNode:{row:null,column:null},nodeCollection:null});Pt.updateValue=(t,e)=>{Pt.update((n=>(n[t]=e,n)))};class At{constructor(t,e){this.row=t,this.column=e,this._tower=nt()}setTower(t){this._tower.set(t)}getTower(){return function(t){let e;return s(t,(t=>e=t))(),e}(this._tower)}}class Bt{constructor(t,e){this.rows=t,this.columns=e,this.fieldNodes=[],this._createFieldNodes()}getFieldNode(t,e){const n=this.getFieldNodeIndex(t,e);return n<0||n>=this.columns*this.rows?null:this.getFieldNodeByIndex(n)}getFieldNodeByIndex(t){return this.fieldNodes[t]}getFieldNodeIndex(t,e){return t*this.columns+e}getFieldNodes(){return this.fieldNodes}_createFieldNodes(){for(let t=0;t<this.columns;t++)for(let e=0;e<this.rows;e++)this.fieldNodes.push(new At(t,e))}}function Rt(t,e,n){const o=t.slice();return o[12]=e[n].row,o[13]=e[n].column,o[15]=n,o}function zt(t){let e,n;return e=new ut({props:{width:t[4],height:t[5],row:t[12],column:t[13],selected:t[0].row===t[12]&&t[0].column===t[13],picked:t[1].row===t[12]&&t[1].column===t[13],background:t[2]}}),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.selected=t[0].row===t[12]&&t[0].column===t[13]),2&n&&(o.picked=t[1].row===t[12]&&t[1].column===t[13]),4&n&&(o.background=t[2]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Ot(t){let e,n,o,i,r,s,c,u,l,d,p,m=t[3].fieldNodeCollection.getFieldNodes(),g=[];for(let e=0;e<m.length;e+=1)g[e]=zt(Rt(t,m,e));const w=t=>V(g[t],1,1,(()=>{g[t]=null}));return n=new pt({props:{row:t[3].minionSource.row,column:t[3].minionSource.column,nodeWidth:t[4],nodeHeight:t[5]}}),i=new xt({props:{row:t[3].minionSink.row,column:t[3].minionSink.column,nodeWidth:t[4],nodeHeight:t[5]}}),s=new _t({}),u=new gt({}),d=new Tt({}),{c(){for(let t=0;t<g.length;t+=1)g[t].c();e=$(),D(n.$$.fragment),o=$(),D(i.$$.fragment),r=$(),D(s.$$.fragment),c=$(),D(u.$$.fragment),l=$(),D(d.$$.fragment)},m(t,h){for(let e=0;e<g.length;e+=1)g[e].m(t,h);a(t,e,h),j(n,t,h),a(t,o,h),j(i,t,h),a(t,r,h),j(s,t,h),a(t,c,h),j(u,t,h),a(t,l,h),j(d,t,h),p=!0},p(t,n){if(63&n){let o;for(m=t[3].fieldNodeCollection.getFieldNodes(),o=0;o<m.length;o+=1){const i=Rt(t,m,o);g[o]?(g[o].p(i,n),O(g[o],1)):(g[o]=zt(i),g[o].c(),O(g[o],1),g[o].m(e.parentNode,e))}for(R(),o=m.length;o<g.length;o+=1)w(o);z()}},i(t){if(!p){for(let t=0;t<m.length;t+=1)O(g[t]);O(n.$$.fragment,t),O(i.$$.fragment,t),O(s.$$.fragment,t),O(u.$$.fragment,t),O(d.$$.fragment,t),p=!0}},o(t){g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)V(g[t]);V(n.$$.fragment,t),V(i.$$.fragment,t),V(s.$$.fragment,t),V(u.$$.fragment,t),V(d.$$.fragment,t),p=!1},d(t){f(g,t),t&&h(e),q(n,t),t&&h(o),q(i,t),t&&h(r),q(s,t),t&&h(c),q(u,t),t&&h(l),q(d,t)}}}function Vt(t){let e,n;return e=new Q({props:{width:t[6],height:t[7],$$slots:{default:[Ot]},$$scope:{ctx:t}}}),e.$on("mousemove",t[8]),e.$on("mouseout",t[9]),e.$on("mousedown",t[10]),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,[n]){const o={};65543&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Dt(t,e,n){const o=N("game"),i=o.nodeWidth,r=o.nodeHeight,s=o.columns*i,c=o.rows*r;let u={row:null,column:null},l=u;Pt.subscribe((t=>{t.pickedNode?(l.row!==t.pickedNode.row&&n(1,l.row=t.pickedNode.row,l),l.column!==t.pickedNode.column&&n(1,l.column=t.pickedNode.column,l)):n(1,l.row=n(1,l.column=null,l),l)}));const d=new Image;d.src="gfx/field.png";return[u,l,d,o,i,r,s,c,({clientX:t,clientY:e})=>{n(0,u.row=Math.min(parseInt(parseInt(e/r,10)-.5,10),o.rows-1),u),n(0,u.column=Math.min(parseInt(parseInt(t/i,10)+.5,10),o.columns-1),u)},()=>n(0,u.row=n(0,u.column=null,u),u),()=>{n(1,l=u),Pt.update((t=>(t.activeMenu="build",t.pickedNode.row=l.row,t.pickedNode.column=l.column,t)))}]}class jt extends K{constructor(t){super(),G(this,t,Dt,Vt,r,{})}}function qt(e){let n,o,i,r,s,c,u,l,f;return{c(){n=p("p"),o=m("Build Menu for "),i=m(e[0]),r=$(),s=m(e[1]),c=$(),u=p("button"),u.textContent="Create Tower"},m(t,h){a(t,n,h),d(n,o),d(n,i),d(n,r),d(n,s),d(n,c),d(n,u),l||(f=g(u,"mousedown",e[2]),l=!0)},p(t,[e]){1&e&&y(i,t[0]),2&e&&y(s,t[1])},i:t,o:t,d(t){t&&h(n),l=!1,f()}}}function Lt(t,e,n){let{row:o}=e,{column:i}=e;const r=N("game");return t.$$set=t=>{"row"in t&&n(0,o=t.row),"column"in t&&n(1,i=t.column)},[o,i,function(){r.buildTower(o,i)}]}class Gt extends K{constructor(t){super(),G(this,t,Lt,qt,r,{row:0,column:1})}}function Kt(e){let n,o,i,r;return{c(){n=m("Kein Menü\n        "),o=p("button"),o.textContent="Minion erstellen"},m(t,s){a(t,n,s),a(t,o,s),i||(r=g(o,"mousedown",e[3]),i=!0)},p:t,i:t,o:t,d(t){t&&h(n),t&&h(o),i=!1,r()}}}function Ut(t){let e,n;return e=new Gt({props:{row:t[1].row,column:t[1].column}}),{c(){D(e.$$.fragment)},m(t,o){j(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.row=t[1].row),2&n&&(o.column=t[1].column),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Xt(e){let n,o,i;return{c(){n=p("span"),n.textContent="✕",w(n,"class","close-menu svelte-33y398")},m(t,r){a(t,n,r),o||(i=g(n,"click",e[2]),o=!0)},p:t,d(t){t&&h(n),o=!1,i()}}}function Yt(t){let e,n,o,i,r;const s=[Ut,Kt],c=[];function u(t,e){return"build"===t[0]?0:1}n=u(t),o=c[n]=s[n](t);let l="none"!==t[0]&&Xt(t);return{c(){e=p("div"),o.c(),i=$(),l&&l.c(),w(e,"class","menu svelte-33y398")},m(t,o){a(t,e,o),c[n].m(e,null),d(e,i),l&&l.m(e,null),r=!0},p(t,[r]){let d=n;n=u(t),n===d?c[n].p(t,r):(R(),V(c[d],1,1,(()=>{c[d]=null})),z(),o=c[n],o?o.p(t,r):(o=c[n]=s[n](t),o.c()),O(o,1),o.m(e,i)),"none"!==t[0]?l?l.p(t,r):(l=Xt(t),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(t){r||(O(o),r=!0)},o(t){V(o),r=!1},d(t){t&&h(e),c[n].d(),l&&l.d()}}}function Jt(t,e,n){let o="none",i=null;const r=N("game");Pt.subscribe((t=>{t.activeMenu!==o&&n(0,o=t.activeMenu),n(1,i=t.pickedNode)}));return[o,i,function(){Pt.update((function(t){return t.activeMenu="none",t.pickedNode.row=null,t.pickedNode.column=null,t}))},function(){r.minionCollection.createMinion("test")}]}class Qt extends K{constructor(t){super(),G(this,t,Jt,Yt,r,{})}}function Zt(e){let n,o,i,r;return{c(){n=p("header"),o=p("span"),i=m("Current Minions in Game "),r=m(e[0]),w(n,"class","svelte-d343e9")},m(t,e){a(t,n,e),d(n,o),d(o,i),d(o,r)},p(t,[e]){1&e&&y(r,t[0])},i:t,o:t,d(t){t&&h(n)}}}function te(t,e,n){let o;const i=N("game").minionCollection.minions;c(t,i,(t=>n(2,o=t)));let r=0;return t.$$.update=()=>{4&t.$$.dirty&&n(0,r=o.length)},[r,i,o]}class ee extends K{constructor(t){super(),G(this,t,te,Zt,r,{})}}class ne{constructor(t){this.dx=t.dx,this.dy=t.dy}rescale(t){return this.dx*=t,this.dy*=t,this}add(t){return this.dx+=t.dx,this.dy+=t.dy,this}shift(t){return t instanceof ne?this.add(t):(this.dx+=t,this.dy+=t),this}clone(){return new ne(this)}}var oe=40,ie=40;class re{constructor(t){const e=t=>parseInt(Math.random()*t,10);this.waypointIdx=0,this.shift=new ne({dx:e(oe),dy:e(ie)}),this.path=[...t.map((t=>t.clone().shift(this.shift)))],this.position=this.path.shift(),this.waypoint=this.path.shift()}update(){const t=this.velocity;this.path.length>0&&(t.dx>0&&this.position.dx>=this.waypoint.dx||t.dx<0&&this.position.dx<=this.waypoint.dx||t.dy>0&&this.position.dy>=this.waypoint.dy||t.dy<0&&this.position.dy<=this.waypoint.dy||0==t.dx&&0==t.dy)&&(this.waypoint=this.path.shift()),this.position.add(t)}get velocity(){const t=new ne({dx:0,dy:0});return this.position.dx<this.waypoint.dx?t.dx=this.baseVelocity:this.position.dx<this.waypoint.dx&&(t.dx=-this.baseVelocity),this.position.dy<this.waypoint.dy?t.dy=this.baseVelocity:this.position.dy<this.waypoint.dy&&(t.dy=-this.baseVelocity),t.dx*=oe/10,t.dy*=oe/10,t}get baseVelocity(){return 1}}class se{constructor(t,e){this.minionSource=t,this.minionSink=e,this.minions=nt([]),this.path=null}createMinion(t){const e=this.path;this.minions.update((function(t){return t.push(new re(e)),t}))}update(){this.path;this.minions.update((function(t){return t.forEach((t=>{t.update()})),t}))}}class ce{constructor(t,e,n,o){this.nodeWidth=oe,this.nodeHeight=ie,this.rows=t,this.columns=e,this.fieldNodeCollection=new Bt(this.rows,this.columns),this.minionSource=n,this.minionSink=o,this.minionCollection=new se(this.minionSource,this.minionSink),this.occupiedNodes=Array(t);for(let n=0;n<t;n++)this.occupiedNodes[n]=Array(e).fill(!1);this.computePath()}buildTower(t,e,n="test"){const o=this.fieldNodeCollection.getFieldNode(t,e);o&&(this.occupiedNodes[t][e]||(o.setTower(n),this.occupiedNodes[t][e]=!0,this.computePath()))}computePath(){const t={...this.minionSource},e={...this.minionSink};let n=t;const o=[{...this.minionSource}];let i=0;for(;n.row!==e.row&&n.column!==e.column&&i<1e3;){let t=null,r=null,s=null;for(let o=0;o<4;o++){const i=this.getStep(n,o);s=this.getDistance(i,e),this.occupiedNodes[i.row][i.column]||t&&!(s<t)||(r={...i},t=s)}if(!r)throw`Cannot find path at step {row = ${n.row}, column = ${n.column}}`;o.push({...r}),n=r,i+=1}o.push({...this.minionSink}),this.path=o,this.minionCollection.path=o.map((t=>new ne({dx:t.column*this.nodeWidth,dy:t.row*this.nodeHeight})))}getDistance(t,e){return Math.sqrt(Math.abs(t.row-e.row)**2+Math.abs(t.column-e.column)**2)}getStep(t,e){if(0===e)return{row:t.row+1,column:t.column};if(1===e)return{row:t.row,column:t.column+1};if(2===e)return{row:t.row-1,column:t.column};if(3===e)return{row:t.row,column:t.column-1};throw`Cannot find step for direction ${e}`}}function ue(e){let n,o,i,r,s,c,u;return o=new ee({}),r=new jt({}),c=new Qt({}),{c(){n=p("main"),D(o.$$.fragment),i=$(),D(r.$$.fragment),s=$(),D(c.$$.fragment)},m(t,e){a(t,n,e),j(o,n,null),d(n,i),j(r,n,null),d(n,s),j(c,n,null),u=!0},p:t,i(t){u||(O(o.$$.fragment,t),O(r.$$.fragment,t),O(c.$$.fragment,t),u=!0)},o(t){V(o.$$.fragment,t),V(r.$$.fragment,t),V(c.$$.fragment,t),u=!1},d(t){t&&h(n),q(o),q(r),q(c)}}}function le(t){return v("game",new ce(20,20,{row:4,column:3},{row:13,column:17})),[]}return new class extends K{constructor(t){super(),G(this,t,le,ue,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
