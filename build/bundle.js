var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function f(){return s(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function g(t,n){t.value=null==n?"":n}let h;function p(t){h=t}const $=[],y=[],b=[],_=[],v=Promise.resolve();let x=!1;function k(t){b.push(t)}let w=!1;const S=new Set;function E(){if(!w){w=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];p(n),L(n.$$)}for(p(null),$.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];S.has(n)||(S.add(n),n())}b.length=0}while($.length);for(;_.length;)_.pop()();x=!1,w=!1,S.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const O=new Set;function N(t,n){-1===t.$$.dirty[0]&&($.push(t),x||(x=!0,v.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(c,i,u,l,s,f,d=[-1]){const m=h;p(c);const g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let $=!1;if(g.ctx=u?u(c,i.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&s(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),$&&N(c,t)),n})):[],g.update(),$=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();i.intro&&((y=c.$$.fragment)&&y.i&&(O.delete(y),y.i(b))),function(t,e,c,i){const{fragment:u,on_mount:a,on_destroy:l,after_update:s}=t.$$;u&&u.m(e,c),i||k((()=>{const e=a.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(k)}(c,i.target,i.anchor,i.customElement),E()}var y,b;p(m)}function C(t,n,e){const o=t.slice();return o[12]=n[e],o}function M(t){let n,e,o,r,c,d,g,h,p,$,y,b,_=t[12].sendTime+"",v=t[12].from+"",x=t[12].msg+"";return{c(){n=l("div"),n.textContent="-------------------------------------------------",e=f(),o=l("div"),r=s("send time: "),c=s(_),d=f(),g=l("div"),h=s("from: "),p=s(v),$=f(),y=l("div"),b=s(x)},m(t,a){u(t,n,a),u(t,e,a),u(t,o,a),i(o,r),i(o,c),u(t,d,a),u(t,g,a),i(g,h),i(g,p),u(t,$,a),u(t,y,a),i(y,b)},p(t,n){2&n&&_!==(_=t[12].sendTime+"")&&m(c,_),2&n&&v!==(v=t[12].from+"")&&m(p,v),2&n&&x!==(x=t[12].msg+"")&&m(b,x)},d(t){t&&a(n),t&&a(e),t&&a(o),t&&a(d),t&&a(g),t&&a($),t&&a(y)}}}function j(n){let e,r,c,i,s,m,h,p,$=n[1],y=[];for(let t=0;t<$.length;t+=1)y[t]=M(C(n,$,t));return{c(){for(let t=0;t<y.length;t+=1)y[t].c();e=f(),r=l("input"),c=f(),i=l("button"),i.textContent="send message",s=f(),m=l("button"),m.textContent="clean log"},m(t,o){for(let n=0;n<y.length;n+=1)y[n].m(t,o);u(t,e,o),u(t,r,o),g(r,n[0]),u(t,c,o),u(t,i,o),u(t,s,o),u(t,m,o),h||(p=[d(r,"input",n[6]),d(i,"click",n[7]),d(m,"click",n[8])],h=!0)},p(t,[n]){if(2&n){let o;for($=t[1],o=0;o<$.length;o+=1){const r=C(t,$,o);y[o]?y[o].p(r,n):(y[o]=M(r),y[o].c(),y[o].m(e.parentNode,e))}for(;o<y.length;o+=1)y[o].d(1);y.length=$.length}1&n&&r.value!==t[0]&&g(r,t[0])},i:t,o:t,d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(y,t),t&&a(e),t&&a(r),t&&a(c),t&&a(i),t&&a(s),t&&a(m),h=!1,o(p)}}}function I(t,n,e){let o=()=>(new Date).toLocaleString();async function r(){var t;await(t=Math.floor(2e3*Math.random()),new Promise((n=>setTimeout(n,t)))),e(1,i=[...i,{msg:u[Math.floor(Math.random()*u.length)],sendTime:o(),from:"her"}]),a()}let c="",i=[],u=["嗯","哦"],a=()=>{localStorage.setItem("chatLog",JSON.stringify(i))},l=()=>{e(1,i=[]),localStorage.setItem("chatLog",JSON.stringify(i))};document.addEventListener("DOMContentLoaded",(function(){e(1,i=JSON.parse(localStorage.hasOwnProperty("chatLog")?localStorage.getItem("chatLog"):"[]"))}));return[c,i,o,r,a,l,function(){c=this.value,e(0,c)},()=>{e(1,i=[...i,{msg:c,sendTime:o(),from:"you"}]),e(0,c=""),a(),r()},()=>l()]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,I,j,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
