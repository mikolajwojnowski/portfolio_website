(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function F1(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Vf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function H1(){if(V0)return Mo;V0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=e,Mo.jsx=i,Mo.jsxs=i,Mo}var k0;function G1(){return k0||(k0=1,Vf.exports=H1()),Vf.exports}var Lt=G1(),kf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function V1(){if(X0)return re;X0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function v(L,$,St){this.props=L,this.context=$,this.refs=R,this.updater=St||M}v.prototype.isReactComponent={},v.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=v.prototype;function B(L,$,St){this.props=L,this.context=$,this.refs=R,this.updater=St||M}var U=B.prototype=new _;U.constructor=B,b(U,v.prototype),U.isPureReactComponent=!0;var N=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function F(L,$,St,yt,K,dt){return St=dt.ref,{$$typeof:o,type:L,key:$,ref:St!==void 0?St:null,props:dt}}function et(L,$){return F(L.type,$,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function C(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(St){return $[St]})}var V=/\/+/g;function ct(L,$){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):$.toString(36)}function it(){}function gt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(it,it):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ut(L,$,St,yt,K){var dt=typeof L;(dt==="undefined"||dt==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(dt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case o:case e:xt=!0;break;case g:return xt=L._init,ut(xt(L._payload),$,St,yt,K)}}if(xt)return K=K(L),xt=yt===""?"."+ct(L,0):yt,N(K)?(St="",xt!=null&&(St=xt.replace(V,"$&/")+"/"),ut(K,$,St,"",function(Kt){return Kt})):K!=null&&(D(K)&&(K=et(K,St+(K.key==null||L&&L.key===K.key?"":(""+K.key).replace(V,"$&/")+"/")+xt)),$.push(K)),1;xt=0;var Rt=yt===""?".":yt+":";if(N(L))for(var Ot=0;Ot<L.length;Ot++)yt=L[Ot],dt=Rt+ct(yt,Ot),xt+=ut(yt,$,St,dt,K);else if(Ot=S(L),typeof Ot=="function")for(L=Ot.call(L),Ot=0;!(yt=L.next()).done;)yt=yt.value,dt=Rt+ct(yt,Ot++),xt+=ut(yt,$,St,dt,K);else if(dt==="object"){if(typeof L.then=="function")return ut(gt(L),$,St,yt,K);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return xt}function z(L,$,St){if(L==null)return L;var yt=[],K=0;return ut(L,yt,"","",function(dt){return $.call(St,dt,K++)}),yt}function W(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(St){(L._status===0||L._status===-1)&&(L._status=1,L._result=St)},function(St){(L._status===0||L._status===-1)&&(L._status=2,L._result=St)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var j=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Et(){}return re.Children={map:z,forEach:function(L,$,St){z(L,function(){$.apply(this,arguments)},St)},count:function(L){var $=0;return z(L,function(){$++}),$},toArray:function(L){return z(L,function($){return $})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=B,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return Z.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cloneElement=function(L,$,St){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var yt=b({},L.props),K=L.key,dt=void 0;if($!=null)for(xt in $.ref!==void 0&&(dt=void 0),$.key!==void 0&&(K=""+$.key),$)!H.call($,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&$.ref===void 0||(yt[xt]=$[xt]);var xt=arguments.length-2;if(xt===1)yt.children=St;else if(1<xt){for(var Rt=Array(xt),Ot=0;Ot<xt;Ot++)Rt[Ot]=arguments[Ot+2];yt.children=Rt}return F(L.type,K,void 0,void 0,dt,yt)},re.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},re.createElement=function(L,$,St){var yt,K={},dt=null;if($!=null)for(yt in $.key!==void 0&&(dt=""+$.key),$)H.call($,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(K[yt]=$[yt]);var xt=arguments.length-2;if(xt===1)K.children=St;else if(1<xt){for(var Rt=Array(xt),Ot=0;Ot<xt;Ot++)Rt[Ot]=arguments[Ot+2];K.children=Rt}if(L&&L.defaultProps)for(yt in xt=L.defaultProps,xt)K[yt]===void 0&&(K[yt]=xt[yt]);return F(L,dt,void 0,void 0,null,K)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:d,render:L}},re.isValidElement=D,re.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:W}},re.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},re.startTransition=function(L){var $=Z.T,St={};Z.T=St;try{var yt=L(),K=Z.S;K!==null&&K(St,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Et,j)}catch(dt){j(dt)}finally{Z.T=$}},re.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},re.use=function(L){return Z.H.use(L)},re.useActionState=function(L,$,St){return Z.H.useActionState(L,$,St)},re.useCallback=function(L,$){return Z.H.useCallback(L,$)},re.useContext=function(L){return Z.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,$){return Z.H.useDeferredValue(L,$)},re.useEffect=function(L,$,St){var yt=Z.H;if(typeof St=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(L,$)},re.useId=function(){return Z.H.useId()},re.useImperativeHandle=function(L,$,St){return Z.H.useImperativeHandle(L,$,St)},re.useInsertionEffect=function(L,$){return Z.H.useInsertionEffect(L,$)},re.useLayoutEffect=function(L,$){return Z.H.useLayoutEffect(L,$)},re.useMemo=function(L,$){return Z.H.useMemo(L,$)},re.useOptimistic=function(L,$){return Z.H.useOptimistic(L,$)},re.useReducer=function(L,$,St){return Z.H.useReducer(L,$,St)},re.useRef=function(L){return Z.H.useRef(L)},re.useState=function(L){return Z.H.useState(L)},re.useSyncExternalStore=function(L,$,St){return Z.H.useSyncExternalStore(L,$,St)},re.useTransition=function(){return Z.H.useTransition()},re.version="19.1.0",re}var W0;function ad(){return W0||(W0=1,kf.exports=V1()),kf.exports}var Un=ad();const dr=F1(Un);var Xf={exports:{}},Eo={},Wf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function k1(){return q0||(q0=1,function(o){function e(z,W){var j=z.length;z.push(W);t:for(;0<j;){var Et=j-1>>>1,L=z[Et];if(0<l(L,W))z[Et]=W,z[j]=L,j=Et;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var W=z[0],j=z.pop();if(j!==W){z[0]=j;t:for(var Et=0,L=z.length,$=L>>>1;Et<$;){var St=2*(Et+1)-1,yt=z[St],K=St+1,dt=z[K];if(0>l(yt,j))K<L&&0>l(dt,yt)?(z[Et]=dt,z[K]=j,Et=K):(z[Et]=yt,z[St]=j,Et=St);else if(K<L&&0>l(dt,j))z[Et]=dt,z[K]=j,Et=K;else break t}}return W}function l(z,W){var j=z.sortIndex-W.sortIndex;return j!==0?j:z.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,y=null,S=3,M=!1,b=!1,R=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=z)r(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=i(p)}}function Z(z){if(R=!1,N(z),!b)if(i(m)!==null)b=!0,H||(H=!0,ct());else{var W=i(p);W!==null&&ut(Z,W.startTime-z)}}var H=!1,F=-1,et=5,D=-1;function C(){return v?!0:!(o.unstable_now()-D<et)}function V(){if(v=!1,H){var z=o.unstable_now();D=z;var W=!0;try{t:{b=!1,R&&(R=!1,B(F),F=-1),M=!0;var j=S;try{e:{for(N(z),y=i(m);y!==null&&!(y.expirationTime>z&&C());){var Et=y.callback;if(typeof Et=="function"){y.callback=null,S=y.priorityLevel;var L=Et(y.expirationTime<=z);if(z=o.unstable_now(),typeof L=="function"){y.callback=L,N(z),W=!0;break e}y===i(m)&&r(m),N(z)}else r(m);y=i(m)}if(y!==null)W=!0;else{var $=i(p);$!==null&&ut(Z,$.startTime-z),W=!1}}break t}finally{y=null,S=j,M=!1}W=void 0}}finally{W?ct():H=!1}}}var ct;if(typeof U=="function")ct=function(){U(V)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,gt=it.port2;it.port1.onmessage=V,ct=function(){gt.postMessage(null)}}else ct=function(){_(V,0)};function ut(z,W){F=_(function(){z(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):et=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var j=S;S=W;try{return z()}finally{S=j}},o.unstable_requestPaint=function(){v=!0},o.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=S;S=z;try{return W()}finally{S=j}},o.unstable_scheduleCallback=function(z,W,j){var Et=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Et+j:Et):j=Et,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=j+L,z={id:g++,callback:W,priorityLevel:z,startTime:j,expirationTime:L,sortIndex:-1},j>Et?(z.sortIndex=j,e(p,z),i(m)===null&&z===i(p)&&(R?(B(F),F=-1):R=!0,ut(Z,j-Et))):(z.sortIndex=L,e(m,z),b||M||(b=!0,H||(H=!0,ct()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var W=S;return function(){var j=S;S=W;try{return z.apply(this,arguments)}finally{S=j}}}}(qf)),qf}var Y0;function X1(){return Y0||(Y0=1,Wf.exports=k1()),Wf.exports}var Yf={exports:{}},vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function W1(){if(j0)return vn;j0=1;var o=ad();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,vn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},vn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},vn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},vn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},vn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,y=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:y,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},vn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},vn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},vn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},vn.requestFormReset=function(m){r.d.r(m)},vn.unstable_batchedUpdates=function(m,p){return m(p)},vn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},vn.useFormStatus=function(){return h.H.useHostTransitionStatus()},vn.version="19.1.0",vn}var Z0;function q1(){if(Z0)return Yf.exports;Z0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Yf.exports=W1(),Yf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function Y1(){if(K0)return Eo;K0=1;var o=X1(),e=ad(),i=q1();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,T=c.child;T;){if(T===a){x=!0,a=c,s=f;break}if(T===s){x=!0,s=c,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,s=c;break}if(T===s){x=!0,s=f,a=c;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case v:return"Profiler";case R:return"StrictMode";case Z:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case et:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var ut=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Et=[],L=-1;function $(t){return{current:t}}function St(t){0>L||(t.current=Et[L],Et[L]=null,L--)}function yt(t,n){L++,Et[L]=t.current,t.current=n}var K=$(null),dt=$(null),xt=$(null),Rt=$(null);function Ot(t,n){switch(yt(xt,n),yt(dt,t),yt(K,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?g0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=g0(n),t=_0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}St(K),yt(K,t)}function Kt(){St(K),St(dt),St(xt)}function ae(t){t.memoizedState!==null&&yt(Rt,t);var n=K.current,a=_0(n,t.type);n!==a&&(yt(dt,t),yt(K,a))}function Ae(t){dt.current===t&&(St(K),St(dt)),Rt.current===t&&(St(Rt),_o._currentValue=j)}var I=Object.prototype.hasOwnProperty,Oe=o.unstable_scheduleCallback,ge=o.unstable_cancelCallback,ye=o.unstable_shouldYield,Vt=o.unstable_requestPaint,ue=o.unstable_now,$t=o.unstable_getCurrentPriorityLevel,ee=o.unstable_ImmediatePriority,O=o.unstable_UserBlockingPriority,E=o.unstable_NormalPriority,w=o.unstable_LowPriority,Q=o.unstable_IdlePriority,lt=o.log,ft=o.unstable_setDisableYieldValue,wt=null,Mt=null;function Dt(t){if(typeof lt=="function"&&ft(t),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(wt,t)}catch{}}var Ht=Math.clz32?Math.clz32:pe,Tt=Math.log,zt=Math.LN2;function pe(t){return t>>>=0,t===0?32:31-(Tt(t)/zt|0)|0}var jt=256,Pt=4194304;function Wt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ie(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Wt(s):(x&=T,x!==0?c=Wt(x):a||(a=T&~t,a!==0&&(c=Wt(a))))):(T=s&~f,T!==0?c=Wt(T):x!==0?c=Wt(x):a||(a=s&~t,a!==0&&(c=Wt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Re(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function X(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function At(){var t=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),t}function mt(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function vt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ct(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qt(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,tt=t.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-Ht(a),_t=1<<ht;T[ht]=0,P[ht]=-1;var nt=tt[ht];if(nt!==null)for(tt[ht]=null,ht=0;ht<nt.length;ht++){var rt=nt[ht];rt!==null&&(rt.lane&=-536870913)}a&=~_t}s!==0&&me(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function me(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ht(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function ke(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ht(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function je(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _e(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Yn(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:z0(t.type))}function jn(t,n){var a=W.p;try{return W.p=t,n()}finally{W.p=a}}var ri=Math.random().toString(36).slice(2),He="__reactFiber$"+ri,cn="__reactProps$"+ri,Ti="__reactContainer$"+ri,gr="__reactEvents$"+ri,_r="__reactListeners$"+ri,Fo="__reactHandles$"+ri,Ba="__reactResources$"+ri,$i="__reactMarker$"+ri;function vr(t){delete t[He],delete t[cn],delete t[gr],delete t[_r],delete t[Fo]}function ta(t){var n=t[He];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ti]||a[He]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=y0(t);t!==null;){if(a=t[He])return a;t=y0(t)}return n}t=a,a=t.parentNode}return null}function ea(t){if(t=t[He]||t[Ti]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ia(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function A(t){var n=t[Ba];return n||(n=t[Ba]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(t){t[$i]=!0}var at=new Set,st={};function Y(t,n){bt(t,n),bt(t+"Capture",n)}function bt(t,n){for(st[t]=n,t=0;t<n.length;t++)at.add(n[t])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Ft={};function Jt(t){return I.call(Ft,t)?!0:I.call(Bt,t)?!1:Nt.test(t)?Ft[t]=!0:(Bt[t]=!0,!1)}function qt(t,n,a){if(Jt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function se(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Pe,Be;function Qe(t){if(Pe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Pe=n&&n[1]||"",Be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pe+t+Be}var ve=!1;function Gt(t,n){if(!t||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(rt){var nt=rt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(rt){nt=rt}t.call(_t.prototype)}}else{try{throw Error()}catch(rt){nt=rt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(rt){if(rt&&nt&&typeof rt.stack=="string")return[rt.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var P=x.split(`
`),tt=T.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===tt.length)for(s=P.length-1,c=tt.length-1;1<=s&&0<=c&&P[s]!==tt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==tt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==tt[c]){var ht=`
`+P[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=c);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Qe(a):""}function nn(t){switch(t.tag){case 26:case 27:case 5:return Qe(t.type);case 16:return Qe("Lazy");case 13:return Qe("Suspense");case 19:return Qe("SuspenseList");case 0:case 15:return Gt(t.type,!1);case 11:return Gt(t.type.render,!1);case 1:return Gt(t.type,!0);case 31:return Qe("Activity");default:return""}}function Se(t){try{var n="";do n+=nn(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bi(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function yn(t){var n=bi(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function na(t){t._valueTracker||(t._valueTracker=yn(t))}function Xe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=bi(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Cs=/[\n"\\]/g;function Ie(t){return t.replace(Cs,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fa(t,n,a,s,c,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ge(n)):t.value!==""+Ge(n)&&(t.value=""+Ge(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?xr(t,x,Ge(n)):a!=null?xr(t,x,Ge(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Ge(T):t.removeAttribute("name")}function Ho(t,n,a,s,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Ge(a):"",n=n!=null?""+Ge(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function xr(t,n,a){n==="number"&&Bn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Sr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Ge(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function pd(t,n,a){if(n!=null&&(n=""+Ge(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ge(a):""}function md(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Ge(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function yr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var z_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||z_.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function _d(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&gd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&gd(t,f,n[f])}function Hc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var B_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return I_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Gc=null;function Vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mr=null,Er=null;function vd(t){var n=ea(t);if(n&&(t=n.stateNode)){var a=t[cn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Fa(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[cn]||null;if(!c)throw Error(r(90));Fa(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Xe(s)}break t;case"textarea":pd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Sr(t,!!a.multiple,n,!1)}}}var kc=!1;function xd(t,n,a){if(kc)return t(n,a);kc=!0;try{var s=t(n);return s}finally{if(kc=!1,(Mr!==null||Er!==null)&&(Al(),Mr&&(n=Mr,t=Er,Er=Mr=null,vd(n),t)))for(n=0;n<t.length;n++)vd(t[n])}}function ws(t,n){var a=t.stateNode;if(a===null)return null;var s=a[cn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(Ai)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{Xc=!1}var ia=null,Wc=null,Vo=null;function Sd(){if(Vo)return Vo;var t,n=Wc,a=n.length,s,c="value"in ia?ia.value:ia.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function yd(){return!1}function An(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:yd,this.isPropagationStopped=yd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=An(Ha),Us=g({},Ha,{view:0,detail:0}),F_=An(Us),qc,Yc,Ls,qo=g({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ls&&(Ls&&t.type==="mousemove"?(qc=t.screenX-Ls.screenX,Yc=t.screenY-Ls.screenY):Yc=qc=0,Ls=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),Md=An(qo),H_=g({},qo,{dataTransfer:0}),G_=An(H_),V_=g({},Us,{relatedTarget:0}),jc=An(V_),k_=g({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),X_=An(k_),W_=g({},Ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q_=An(W_),Y_=g({},Ha,{data:0}),Ed=An(Y_),j_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=K_[t])?!!n[t]:!1}function Zc(){return Q_}var J_=g({},Us,{key:function(t){if(t.key){var n=j_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$_=An(J_),tv=g({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=An(tv),ev=g({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),nv=An(ev),iv=g({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),av=An(iv),rv=g({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sv=An(rv),ov=g({},Ha,{newState:0,oldState:0}),lv=An(ov),cv=[9,13,27,32],Kc=Ai&&"CompositionEvent"in window,Ns=null;Ai&&"documentMode"in document&&(Ns=document.documentMode);var uv=Ai&&"TextEvent"in window&&!Ns,bd=Ai&&(!Kc||Ns&&8<Ns&&11>=Ns),Ad=" ",Rd=!1;function Cd(t,n){switch(t){case"keyup":return cv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function fv(t,n){switch(t){case"compositionend":return wd(n);case"keypress":return n.which!==32?null:(Rd=!0,Ad);case"textInput":return t=n.data,t===Ad&&Rd?null:t;default:return null}}function hv(t,n){if(Tr)return t==="compositionend"||!Kc&&Cd(t,n)?(t=Sd(),Vo=Wc=ia=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bd&&n.locale!=="ko"?null:n.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!dv[t.type]:n==="textarea"}function Ud(t,n,a,s){Mr?Er?Er.push(s):Er=[s]:Mr=s,n=Ll(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Os=null,Ps=null;function pv(t){f0(t,0)}function Yo(t){var n=Ia(t);if(Xe(n))return t}function Ld(t,n){if(t==="change")return n}var Nd=!1;if(Ai){var Qc;if(Ai){var Jc="oninput"in document;if(!Jc){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),Jc=typeof Od.oninput=="function"}Qc=Jc}else Qc=!1;Nd=Qc&&(!document.documentMode||9<document.documentMode)}function Pd(){Os&&(Os.detachEvent("onpropertychange",zd),Ps=Os=null)}function zd(t){if(t.propertyName==="value"&&Yo(Ps)){var n=[];Ud(n,Ps,t,Vc(t)),xd(pv,n)}}function mv(t,n,a){t==="focusin"?(Pd(),Os=n,Ps=a,Os.attachEvent("onpropertychange",zd)):t==="focusout"&&Pd()}function gv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Ps)}function _v(t,n){if(t==="click")return Yo(n)}function vv(t,n){if(t==="input"||t==="change")return Yo(n)}function xv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var In=typeof Object.is=="function"?Object.is:xv;function zs(t,n){if(In(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!I.call(n,c)||!In(t[c],n[c]))return!1}return!0}function Bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,n){var a=Bd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bd(a)}}function Fd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Hd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Bn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Bn(t.document)}return n}function $c(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Sv=Ai&&"documentMode"in document&&11>=document.documentMode,br=null,tu=null,Bs=null,eu=!1;function Gd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||br==null||br!==Bn(s)||(s=br,"selectionStart"in s&&$c(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Bs&&zs(Bs,s)||(Bs=s,s=Ll(tu,"onSelect"),0<s.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=br)))}function Ga(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ar={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},nu={},Vd={};Ai&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Va(t){if(nu[t])return nu[t];if(!Ar[t])return t;var n=Ar[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vd)return nu[t]=n[a];return t}var kd=Va("animationend"),Xd=Va("animationiteration"),Wd=Va("animationstart"),yv=Va("transitionrun"),Mv=Va("transitionstart"),Ev=Va("transitioncancel"),qd=Va("transitionend"),Yd=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function si(t,n){Yd.set(t,n),Y(n,[t])}var jd=new WeakMap;function Zn(t,n){if(typeof t=="object"&&t!==null){var a=jd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Se(n)},jd.set(t,n),n)}return{value:t,source:n,stack:Se(n)}}var Kn=[],Rr=0,au=0;function jo(){for(var t=Rr,n=au=Rr=0;n<t;){var a=Kn[n];Kn[n++]=null;var s=Kn[n];Kn[n++]=null;var c=Kn[n];Kn[n++]=null;var f=Kn[n];if(Kn[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&Zd(a,c,f)}}function Zo(t,n,a,s){Kn[Rr++]=t,Kn[Rr++]=n,Kn[Rr++]=a,Kn[Rr++]=s,au|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function ru(t,n,a,s){return Zo(t,n,a,s),Ko(t)}function Cr(t,n){return Zo(t,null,null,n),Ko(t)}function Zd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ht(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Ko(t){if(50<lo)throw lo=0,hf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var wr={};function Tv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,n,a,s){return new Tv(t,n,a,s)}function su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ri(t,n){var a=t.alternate;return a===null?(a=Fn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Kd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Qo(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")su(t)&&(x=1);else if(typeof t=="string")x=A1(t,a,K.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Fn(31,a,n,c),t.elementType=D,t.lanes=f,t;case b:return ka(a.children,c,f,n);case R:x=8,c|=24;break;case v:return t=Fn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case Z:return t=Fn(13,a,n,c),t.elementType=Z,t.lanes=f,t;case H:return t=Fn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case U:x=10;break t;case B:x=9;break t;case N:x=11;break t;case F:x=14;break t;case et:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Fn(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ka(t,n,a,s){return t=Fn(7,t,s,n),t.lanes=a,t}function ou(t,n,a){return t=Fn(6,t,null,n),t.lanes=a,t}function lu(t,n,a){return n=Fn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dr=[],Ur=0,Jo=null,$o=0,Qn=[],Jn=0,Xa=null,Ci=1,wi="";function Wa(t,n){Dr[Ur++]=$o,Dr[Ur++]=Jo,Jo=t,$o=n}function Qd(t,n,a){Qn[Jn++]=Ci,Qn[Jn++]=wi,Qn[Jn++]=Xa,Xa=t;var s=Ci;t=wi;var c=32-Ht(s)-1;s&=~(1<<c),a+=1;var f=32-Ht(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ci=1<<32-Ht(n)+c|a<<c|s,wi=f+t}else Ci=1<<f|a<<c|s,wi=t}function cu(t){t.return!==null&&(Wa(t,1),Qd(t,1,0))}function uu(t){for(;t===Jo;)Jo=Dr[--Ur],Dr[Ur]=null,$o=Dr[--Ur],Dr[Ur]=null;for(;t===Xa;)Xa=Qn[--Jn],Qn[Jn]=null,wi=Qn[--Jn],Qn[Jn]=null,Ci=Qn[--Jn],Qn[Jn]=null}var Mn=null,qe=null,Ee=!1,qa=null,mi=!1,fu=Error(r(519));function Ya(t){var n=Error(r(418,""));throw Hs(Zn(n,t)),fu}function Jd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[He]=t,n[cn]=s,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<uo.length;a++)de(uo[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Ho(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),na(n);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),md(n,s.value,s.defaultValue,s.children),na(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||m0(n.textContent,a)?(s.popover!=null&&(de("beforetoggle",n),de("toggle",n)),s.onScroll!=null&&de("scroll",n),s.onScrollEnd!=null&&de("scrollend",n),s.onClick!=null&&(n.onclick=Nl),n=!0):n=!1,n||Ya(t)}function $d(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Mn=Mn.return}}function Is(t){if(t!==Mn)return!1;if(!Ee)return $d(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Cf(t.type,t.memoizedProps)),a=!a),a&&qe&&Ya(t),$d(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){qe=li(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}qe=null}}else n===27?(n=qe,xa(t.type)?(t=Lf,Lf=null,qe=t):qe=n):qe=Mn?li(t.stateNode.nextSibling):null;return!0}function Fs(){qe=Mn=null,Ee=!1}function tp(){var t=qa;return t!==null&&(wn===null?wn=t:wn.push.apply(wn,t),qa=null),t}function Hs(t){qa===null?qa=[t]:qa.push(t)}var hu=$(null),ja=null,Di=null;function aa(t,n,a){yt(hu,n._currentValue),n._currentValue=a}function Ui(t){t._currentValue=hu.current,St(hu)}function du(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function pu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),du(f.return,a,t),s||(x=null);break t}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),du(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Gs(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=c.type;In(c.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(c===Rt.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(_o):t=[_o])}c=c.return}t!==null&&pu(n,t,a,s),n.flags|=262144}function tl(t){for(t=t.firstContext;t!==null;){if(!In(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Za(t){ja=t,Di=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function _n(t){return ep(ja,t)}function el(t,n){return ja===null&&Za(t),ep(t,n)}function ep(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Di===null){if(t===null)throw Error(r(308));Di=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Di=Di.next=n;return a}var bv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Av=o.unstable_scheduleCallback,Rv=o.unstable_NormalPriority,an={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new bv,data:new Map,refCount:0}}function Vs(t){t.refCount--,t.refCount===0&&Av(Rv,function(){t.controller.abort()})}var ks=null,gu=0,Lr=0,Nr=null;function Cv(t,n){if(ks===null){var a=ks=[];gu=0,Lr=xf(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return gu++,n.then(np,np),n}function np(){if(--gu===0&&ks!==null){Nr!==null&&(Nr.status="fulfilled");var t=ks;ks=null,Lr=0,Nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function wv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var ip=z.S;z.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Cv(t,n),ip!==null&&ip(t,n)};var Ka=$(null);function _u(){var t=Ka.current;return t!==null?t:ze.pooledCache}function nl(t,n){n===null?yt(Ka,Ka.current):yt(Ka,n.pool)}function ap(){var t=_u();return t===null?null:{parent:an._currentValue,pool:t}}var Xs=Error(r(460)),rp=Error(r(474)),il=Error(r(542)),vu={then:function(){}};function sp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function al(){}function op(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(al,al),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cp(t),t;default:if(typeof n.status=="string")n.then(al,al);else{if(t=ze,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cp(t),t}throw Ws=n,Xs}}var Ws=null;function lp(){if(Ws===null)throw Error(r(459));var t=Ws;return Ws=null,t}function cp(t){if(t===Xs||t===il)throw Error(r(483))}var ra=!1;function xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function oa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Ko(t),Zd(t,null,a),n}return Zo(t,s,n,a),Ko(t)}function qs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ke(t,a)}}function yu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mu=!1;function Ys(){if(Mu){var t=Nr;if(t!==null)throw t}}function js(t,n,a,s){Mu=!1;var c=t.updateQueue;ra=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,tt=P.next;P.next=null,x===null?f=tt:x.next=tt,x=P;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==x&&(T===null?ht.firstBaseUpdate=tt:T.next=tt,ht.lastBaseUpdate=P))}if(f!==null){var _t=c.baseState;x=0,ht=tt=P=null,T=f;do{var nt=T.lane&-536870913,rt=nt!==T.lane;if(rt?(xe&nt)===nt:(s&nt)===nt){nt!==0&&nt===Lr&&(Mu=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var te=t,Yt=T;nt=n;var Le=a;switch(Yt.tag){case 1:if(te=Yt.payload,typeof te=="function"){_t=te.call(Le,_t,nt);break t}_t=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Yt.payload,nt=typeof te=="function"?te.call(Le,_t,nt):te,nt==null)break t;_t=g({},_t,nt);break t;case 2:ra=!0}}nt=T.callback,nt!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[nt]:rt.push(nt))}else rt={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(tt=ht=rt,P=_t):ht=ht.next=rt,x|=nt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ht===null&&(P=_t),c.baseState=P,c.firstBaseUpdate=tt,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),ma|=x,t.lanes=x,t.memoizedState=_t}}function up(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function fp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)up(a[t],n)}var Or=$(null),rl=$(0);function hp(t,n){t=Ii,yt(rl,t),yt(Or,n),Ii=t|n.baseLanes}function Eu(){yt(rl,Ii),yt(Or,Or.current)}function Tu(){Ii=rl.current,St(Or),St(rl)}var la=0,ce=null,De=null,Je=null,sl=!1,Pr=!1,Qa=!1,ol=0,Zs=0,zr=null,Dv=0;function Ze(){throw Error(r(321))}function bu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!In(t[a],n[a]))return!1;return!0}function Au(t,n,a,s,c,f){return la=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Zp:Kp,Qa=!1,f=a(s,c),Qa=!1,Pr&&(f=pp(n,a,s,c)),dp(t),f}function dp(t){z.H=dl;var n=De!==null&&De.next!==null;if(la=0,Je=De=ce=null,sl=!1,Zs=0,zr=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&tl(t)&&(un=!0))}function pp(t,n,a,s){ce=t;var c=0;do{if(Pr&&(zr=null),Zs=0,Pr=!1,25<=c)throw Error(r(301));if(c+=1,Je=De=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Bv,f=n(a,s)}while(Pr);return f}function Uv(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Ks(n):n,t=t.useState()[0],(De!==null?De.memoizedState:null)!==t&&(ce.flags|=1024),n}function Ru(){var t=ol!==0;return ol=0,t}function Cu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function wu(t){if(sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}sl=!1}la=0,Je=De=ce=null,Pr=!1,Zs=ol=0,zr=null}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ce.memoizedState=Je=t:Je=Je.next=t,Je}function $e(){if(De===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var n=Je===null?ce.memoizedState:Je.next;if(n!==null)Je=n,De=t;else{if(t===null)throw ce.alternate===null?Error(r(467)):Error(r(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Je===null?ce.memoizedState=Je=t:Je=Je.next=t}return Je}function Du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ks(t){var n=Zs;return Zs+=1,zr===null&&(zr=[]),t=op(zr,t,n),n=ce,(Je===null?n.memoizedState:Je.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Zp:Kp),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ks(t);if(t.$$typeof===U)return _n(t)}throw Error(r(438,String(t)))}function Uu(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ce.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Du(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Li(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=$e();return Lu(n,De,t)}function Lu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=x=null,P=null,tt=n,ht=!1;do{var _t=tt.lane&-536870913;if(_t!==tt.lane?(xe&_t)===_t:(la&_t)===_t){var nt=tt.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),_t===Lr&&(ht=!0);else if((la&nt)===nt){tt=tt.next,nt===Lr&&(ht=!0);continue}else _t={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},P===null?(T=P=_t,x=f):P=P.next=_t,ce.lanes|=nt,ma|=nt;_t=tt.action,Qa&&a(f,_t),f=tt.hasEagerState?tt.eagerState:a(f,_t)}else nt={lane:_t,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},P===null?(T=P=nt,x=f):P=P.next=nt,ce.lanes|=_t,ma|=_t;tt=tt.next}while(tt!==null&&tt!==n);if(P===null?x=f:P.next=T,!In(f,t.memoizedState)&&(un=!0,ht&&(a=Nr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Nu(t){var n=$e(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);In(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function mp(t,n,a){var s=ce,c=$e(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!In((De||c).memoizedState,a);x&&(c.memoizedState=a,un=!0),c=c.queue;var T=vp.bind(null,s,c,t);if(Qs(2048,8,T,[t]),c.getSnapshot!==n||x||Je!==null&&Je.memoizedState.tag&1){if(s.flags|=2048,Br(9,ul(),_p.bind(null,s,c,a,n),null),ze===null)throw Error(r(349));f||(la&124)!==0||gp(s,n,a)}return a}function gp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Du(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function _p(t,n,a,s){n.value=a,n.getSnapshot=s,xp(n)&&Sp(t)}function vp(t,n,a){return a(function(){xp(n)&&Sp(t)})}function xp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!In(t,a)}catch{return!0}}function Sp(t){var n=Cr(t,2);n!==null&&Xn(n,t,2)}function Ou(t){var n=Rn();if(typeof t=="function"){var a=t;if(t=a(),Qa){Dt(!0);try{a()}finally{Dt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:t},n}function yp(t,n,a,s){return t.baseState=a,Lu(t,De,typeof s=="function"?s:Li)}function Lv(t,n,a,s,c){if(hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Mp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Mp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var T=a(c,s),P=z.S;P!==null&&P(x,T),Ep(t,n,T)}catch(tt){Pu(t,n,tt)}finally{z.T=f}}else try{f=a(c,s),Ep(t,n,f)}catch(tt){Pu(t,n,tt)}}function Ep(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Tp(t,n,s)},function(s){return Pu(t,n,s)}):Tp(t,n,a)}function Tp(t,n,a){n.status="fulfilled",n.value=a,bp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Mp(t,a)))}function Pu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,bp(n),n=n.next;while(n!==s)}t.action=null}function bp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ap(t,n){return n}function Rp(t,n){if(Ee){var a=ze.formState;if(a!==null){t:{var s=ce;if(Ee){if(qe){e:{for(var c=qe,f=mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qe=li(c.nextSibling),s=c.data==="F!";break t}}Ya(s)}s=!1}s&&(n=a[0])}}return a=Rn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ap,lastRenderedState:n},a.queue=s,a=qp.bind(null,ce,s),s.dispatch=a,s=Ou(!1),f=Hu.bind(null,ce,!1,s.queue),s=Rn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Lv.bind(null,ce,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Cp(t){var n=$e();return wp(n,De,t)}function wp(t,n,a){if(n=Lu(t,n,Ap)[0],t=cl(Li)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ks(n)}catch(x){throw x===Xs?il:x}else s=n;n=$e();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Br(9,ul(),Nv.bind(null,c,a),null)),[s,f,t]}function Nv(t,n){t.action=n}function Dp(t){var n=$e(),a=De;if(a!==null)return wp(n,a,t);$e(),n=n.memoizedState,a=$e();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Br(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Du(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ul(){return{destroy:void 0,resource:void 0}}function Up(){return $e().memoizedState}function fl(t,n,a,s){var c=Rn();s=s===void 0?null:s,ce.flags|=t,c.memoizedState=Br(1|n,ul(),a,s)}function Qs(t,n,a,s){var c=$e();s=s===void 0?null:s;var f=c.memoizedState.inst;De!==null&&s!==null&&bu(s,De.memoizedState.deps)?c.memoizedState=Br(n,f,a,s):(ce.flags|=t,c.memoizedState=Br(1|n,f,a,s))}function Lp(t,n){fl(8390656,8,t,n)}function Np(t,n){Qs(2048,8,t,n)}function Op(t,n){return Qs(4,2,t,n)}function Pp(t,n){return Qs(4,4,t,n)}function zp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Bp(t,n,a){a=a!=null?a.concat([t]):null,Qs(4,4,zp.bind(null,n,t),a)}function zu(){}function Ip(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&bu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Fp(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&bu(n,s[1]))return s[0];if(s=t(),Qa){Dt(!0);try{t()}finally{Dt(!1)}}return a.memoizedState=[s,n],s}function Bu(t,n,a){return a===void 0||(la&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Vm(),ce.lanes|=t,ma|=t,a)}function Hp(t,n,a,s){return In(a,n)?a:Or.current!==null?(t=Bu(t,a,s),In(t,n)||(un=!0),t):(la&42)===0?(un=!0,t.memoizedState=a):(t=Vm(),ce.lanes|=t,ma|=t,n)}function Gp(t,n,a,s,c){var f=W.p;W.p=f!==0&&8>f?f:8;var x=z.T,T={};z.T=T,Hu(t,!1,n,a);try{var P=c(),tt=z.S;if(tt!==null&&tt(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ht=wv(P,s);Js(t,n,ht,kn(t))}else Js(t,n,s,kn(t))}catch(_t){Js(t,n,{then:function(){},status:"rejected",reason:_t},kn())}finally{W.p=f,z.T=x}}function Ov(){}function Iu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Vp(t).queue;Gp(t,c,n,j,a===null?Ov:function(){return kp(t),a(s)})}function Vp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function kp(t){var n=Vp(t).next.queue;Js(t,n,{},kn())}function Fu(){return _n(_o)}function Xp(){return $e().memoizedState}function Wp(){return $e().memoizedState}function Pv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=kn();t=sa(a);var s=oa(n,t,a);s!==null&&(Xn(s,n,a),qs(s,n,a)),n={cache:mu()},t.payload=n;return}n=n.return}}function zv(t,n,a){var s=kn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)?Yp(n,a):(a=ru(t,n,a,s),a!==null&&(Xn(a,t,s),jp(a,n,s)))}function qp(t,n,a){var s=kn();Js(t,n,a,s)}function Js(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(t))Yp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(c.hasEagerState=!0,c.eagerState=T,In(T,x))return Zo(t,n,c,0),ze===null&&jo(),!1}catch{}finally{}if(a=ru(t,n,c,s),a!==null)return Xn(a,t,s),jp(a,n,s),!0}return!1}function Hu(t,n,a,s){if(s={lane:2,revertLane:xf(),action:s,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(r(479))}else n=ru(t,a,s,2),n!==null&&Xn(n,t,2)}function hl(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function Yp(t,n){Pr=sl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function jp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ke(t,a)}}var dl={readContext:_n,use:ll,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze},Zp={readContext:_n,use:ll,useCallback:function(t,n){return Rn().memoizedState=[t,n===void 0?null:n],t},useContext:_n,useEffect:Lp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,fl(4194308,4,zp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return fl(4194308,4,t,n)},useInsertionEffect:function(t,n){fl(4,2,t,n)},useMemo:function(t,n){var a=Rn();n=n===void 0?null:n;var s=t();if(Qa){Dt(!0);try{t()}finally{Dt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Rn();if(a!==void 0){var c=a(n);if(Qa){Dt(!0);try{a(n)}finally{Dt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=zv.bind(null,ce,t),[s.memoizedState,t]},useRef:function(t){var n=Rn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ou(t);var n=t.queue,a=qp.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(t,n){var a=Rn();return Bu(a,t,n)},useTransition:function(){var t=Ou(!1);return t=Gp.bind(null,ce,t.queue,!0,!1),Rn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ce,c=Rn();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ze===null)throw Error(r(349));(xe&124)!==0||gp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Lp(vp.bind(null,s,f,t),[t]),s.flags|=2048,Br(9,ul(),_p.bind(null,s,f,a,n),null),a},useId:function(){var t=Rn(),n=ze.identifierPrefix;if(Ee){var a=wi,s=Ci;a=(s&~(1<<32-Ht(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Dv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Fu,useFormState:Rp,useActionState:Rp,useOptimistic:function(t){var n=Rn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hu.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:Uu,useCacheRefresh:function(){return Rn().memoizedState=Pv.bind(null,ce)}},Kp={readContext:_n,use:ll,useCallback:Ip,useContext:_n,useEffect:Np,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:Pp,useMemo:Fp,useReducer:cl,useRef:Up,useState:function(){return cl(Li)},useDebugValue:zu,useDeferredValue:function(t,n){var a=$e();return Hp(a,De.memoizedState,t,n)},useTransition:function(){var t=cl(Li)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:Ks(t),n]},useSyncExternalStore:mp,useId:Xp,useHostTransitionStatus:Fu,useFormState:Cp,useActionState:Cp,useOptimistic:function(t,n){var a=$e();return yp(a,De,t,n)},useMemoCache:Uu,useCacheRefresh:Wp},Bv={readContext:_n,use:ll,useCallback:Ip,useContext:_n,useEffect:Np,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:Pp,useMemo:Fp,useReducer:Nu,useRef:Up,useState:function(){return Nu(Li)},useDebugValue:zu,useDeferredValue:function(t,n){var a=$e();return De===null?Bu(a,t,n):Hp(a,De.memoizedState,t,n)},useTransition:function(){var t=Nu(Li)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:Ks(t),n]},useSyncExternalStore:mp,useId:Xp,useHostTransitionStatus:Fu,useFormState:Dp,useActionState:Dp,useOptimistic:function(t,n){var a=$e();return De!==null?yp(a,De,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Uu,useCacheRefresh:Wp},Ir=null,$s=0;function pl(t){var n=$s;return $s+=1,Ir===null&&(Ir=[]),op(Ir,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ml(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qp(t){var n=t._init;return n(t._payload)}function Jp(t){function n(q,G){if(t){var J=q.deletions;J===null?(q.deletions=[G],q.flags|=16):J.push(G)}}function a(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function s(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function c(q,G){return q=Ri(q,G),q.index=0,q.sibling=null,q}function f(q,G,J){return q.index=J,t?(J=q.alternate,J!==null?(J=J.index,J<G?(q.flags|=67108866,G):J):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function x(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function T(q,G,J,pt){return G===null||G.tag!==6?(G=ou(J,q.mode,pt),G.return=q,G):(G=c(G,J),G.return=q,G)}function P(q,G,J,pt){var It=J.type;return It===b?ht(q,G,J.props.children,pt,J.key):G!==null&&(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===et&&Qp(It)===G.type)?(G=c(G,J.props),to(G,J),G.return=q,G):(G=Qo(J.type,J.key,J.props,null,q.mode,pt),to(G,J),G.return=q,G)}function tt(q,G,J,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=lu(J,q.mode,pt),G.return=q,G):(G=c(G,J.children||[]),G.return=q,G)}function ht(q,G,J,pt,It){return G===null||G.tag!==7?(G=ka(J,q.mode,pt,It),G.return=q,G):(G=c(G,J),G.return=q,G)}function _t(q,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=ou(""+G,q.mode,J),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return J=Qo(G.type,G.key,G.props,null,q.mode,J),to(J,G),J.return=q,J;case M:return G=lu(G,q.mode,J),G.return=q,G;case et:var pt=G._init;return G=pt(G._payload),_t(q,G,J)}if(ut(G)||ct(G))return G=ka(G,q.mode,J,null),G.return=q,G;if(typeof G.then=="function")return _t(q,pl(G),J);if(G.$$typeof===U)return _t(q,el(q,G),J);ml(q,G)}return null}function nt(q,G,J,pt){var It=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return It!==null?null:T(q,G,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return J.key===It?P(q,G,J,pt):null;case M:return J.key===It?tt(q,G,J,pt):null;case et:return It=J._init,J=It(J._payload),nt(q,G,J,pt)}if(ut(J)||ct(J))return It!==null?null:ht(q,G,J,pt,null);if(typeof J.then=="function")return nt(q,G,pl(J),pt);if(J.$$typeof===U)return nt(q,G,el(q,J),pt);ml(q,J)}return null}function rt(q,G,J,pt,It){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(J)||null,T(G,q,""+pt,It);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return q=q.get(pt.key===null?J:pt.key)||null,P(G,q,pt,It);case M:return q=q.get(pt.key===null?J:pt.key)||null,tt(G,q,pt,It);case et:var fe=pt._init;return pt=fe(pt._payload),rt(q,G,J,pt,It)}if(ut(pt)||ct(pt))return q=q.get(J)||null,ht(G,q,pt,It,null);if(typeof pt.then=="function")return rt(q,G,J,pl(pt),It);if(pt.$$typeof===U)return rt(q,G,J,el(G,pt),It);ml(G,pt)}return null}function te(q,G,J,pt){for(var It=null,fe=null,kt=G,Zt=G=0,hn=null;kt!==null&&Zt<J.length;Zt++){kt.index>Zt?(hn=kt,kt=null):hn=kt.sibling;var Me=nt(q,kt,J[Zt],pt);if(Me===null){kt===null&&(kt=hn);break}t&&kt&&Me.alternate===null&&n(q,kt),G=f(Me,G,Zt),fe===null?It=Me:fe.sibling=Me,fe=Me,kt=hn}if(Zt===J.length)return a(q,kt),Ee&&Wa(q,Zt),It;if(kt===null){for(;Zt<J.length;Zt++)kt=_t(q,J[Zt],pt),kt!==null&&(G=f(kt,G,Zt),fe===null?It=kt:fe.sibling=kt,fe=kt);return Ee&&Wa(q,Zt),It}for(kt=s(kt);Zt<J.length;Zt++)hn=rt(kt,q,Zt,J[Zt],pt),hn!==null&&(t&&hn.alternate!==null&&kt.delete(hn.key===null?Zt:hn.key),G=f(hn,G,Zt),fe===null?It=hn:fe.sibling=hn,fe=hn);return t&&kt.forEach(function(Ta){return n(q,Ta)}),Ee&&Wa(q,Zt),It}function Yt(q,G,J,pt){if(J==null)throw Error(r(151));for(var It=null,fe=null,kt=G,Zt=G=0,hn=null,Me=J.next();kt!==null&&!Me.done;Zt++,Me=J.next()){kt.index>Zt?(hn=kt,kt=null):hn=kt.sibling;var Ta=nt(q,kt,Me.value,pt);if(Ta===null){kt===null&&(kt=hn);break}t&&kt&&Ta.alternate===null&&n(q,kt),G=f(Ta,G,Zt),fe===null?It=Ta:fe.sibling=Ta,fe=Ta,kt=hn}if(Me.done)return a(q,kt),Ee&&Wa(q,Zt),It;if(kt===null){for(;!Me.done;Zt++,Me=J.next())Me=_t(q,Me.value,pt),Me!==null&&(G=f(Me,G,Zt),fe===null?It=Me:fe.sibling=Me,fe=Me);return Ee&&Wa(q,Zt),It}for(kt=s(kt);!Me.done;Zt++,Me=J.next())Me=rt(kt,q,Zt,Me.value,pt),Me!==null&&(t&&Me.alternate!==null&&kt.delete(Me.key===null?Zt:Me.key),G=f(Me,G,Zt),fe===null?It=Me:fe.sibling=Me,fe=Me);return t&&kt.forEach(function(I1){return n(q,I1)}),Ee&&Wa(q,Zt),It}function Le(q,G,J,pt){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case S:t:{for(var It=J.key;G!==null;){if(G.key===It){if(It=J.type,It===b){if(G.tag===7){a(q,G.sibling),pt=c(G,J.props.children),pt.return=q,q=pt;break t}}else if(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===et&&Qp(It)===G.type){a(q,G.sibling),pt=c(G,J.props),to(pt,J),pt.return=q,q=pt;break t}a(q,G);break}else n(q,G);G=G.sibling}J.type===b?(pt=ka(J.props.children,q.mode,pt,J.key),pt.return=q,q=pt):(pt=Qo(J.type,J.key,J.props,null,q.mode,pt),to(pt,J),pt.return=q,q=pt)}return x(q);case M:t:{for(It=J.key;G!==null;){if(G.key===It)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(q,G.sibling),pt=c(G,J.children||[]),pt.return=q,q=pt;break t}else{a(q,G);break}else n(q,G);G=G.sibling}pt=lu(J,q.mode,pt),pt.return=q,q=pt}return x(q);case et:return It=J._init,J=It(J._payload),Le(q,G,J,pt)}if(ut(J))return te(q,G,J,pt);if(ct(J)){if(It=ct(J),typeof It!="function")throw Error(r(150));return J=It.call(J),Yt(q,G,J,pt)}if(typeof J.then=="function")return Le(q,G,pl(J),pt);if(J.$$typeof===U)return Le(q,G,el(q,J),pt);ml(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(q,G.sibling),pt=c(G,J),pt.return=q,q=pt):(a(q,G),pt=ou(J,q.mode,pt),pt.return=q,q=pt),x(q)):a(q,G)}return function(q,G,J,pt){try{$s=0;var It=Le(q,G,J,pt);return Ir=null,It}catch(kt){if(kt===Xs||kt===il)throw kt;var fe=Fn(29,kt,null,q.mode);return fe.lanes=pt,fe.return=q,fe}finally{}}}var Fr=Jp(!0),$p=Jp(!1),$n=$(null),gi=null;function ca(t){var n=t.alternate;yt(rn,rn.current&1),yt($n,t),gi===null&&(n===null||Or.current!==null||n.memoizedState!==null)&&(gi=t)}function tm(t){if(t.tag===22){if(yt(rn,rn.current),yt($n,t),gi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(gi=t)}}else ua()}function ua(){yt(rn,rn.current),yt($n,$n.current)}function Ni(t){St($n),gi===t&&(gi=null),St(rn)}var rn=$(0);function gl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Uf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Gu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Vu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=kn(),c=sa(s);c.payload=n,a!=null&&(c.callback=a),n=oa(t,c,s),n!==null&&(Xn(n,t,s),qs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=kn(),c=sa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=oa(t,c,s),n!==null&&(Xn(n,t,s),qs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=kn(),s=sa(a);s.tag=2,n!=null&&(s.callback=n),n=oa(t,s,a),n!==null&&(Xn(n,t,a),qs(n,t,a))}};function em(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!zs(a,s)||!zs(c,f):!0}function nm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Vu.enqueueReplaceState(n,n.state,null)}function Ja(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var _l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function im(t){_l(t)}function am(t){console.error(t)}function rm(t){_l(t)}function vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function sm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ku(t,n,a){return a=sa(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(t,n)},a}function om(t){return t=sa(t),t.tag=3,t}function lm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){sm(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){sm(n,a,s),typeof c!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Iv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Gs(n,a,c,!0),a=$n.current,a!==null){switch(a.tag){case 13:return gi===null?pf():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===vu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),gf(t,s,c)),!1;case 22:return a.flags|=65536,s===vu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),gf(t,s,c)),!1}throw Error(r(435,a.tag))}return gf(t,s,c),pf(),!1}if(Ee)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==fu&&(t=Error(r(422),{cause:s}),Hs(Zn(t,a)))):(s!==fu&&(n=Error(r(423),{cause:s}),Hs(Zn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Zn(s,a),c=ku(t.stateNode,s,c),yu(t,c),Ye!==4&&(Ye=2)),!1;var f=Error(r(520),{cause:s});if(f=Zn(f,a),oo===null?oo=[f]:oo.push(f),Ye!==4&&(Ye=2),n===null)return!0;s=Zn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=ku(a.stateNode,s,t),yu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ga===null||!ga.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=om(c),lm(c,t,a,s),yu(a,c),!1}a=a.return}while(a!==null);return!1}var cm=Error(r(461)),un=!1;function pn(t,n,a,s){n.child=t===null?$p(n,null,a,s):Fr(n,t.child,a,s)}function um(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var T in s)T!=="ref"&&(x[T]=s[T])}else x=s;return Za(n),s=Au(t,n,a,x,f,c),T=Ru(),t!==null&&!un?(Cu(t,n,c),Oi(t,n,c)):(Ee&&T&&cu(n),n.flags|=1,pn(t,n,s,c),n.child)}function fm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,hm(t,n,f,s,c)):(t=Qo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Qu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:zs,a(x,s)&&t.ref===n.ref)return Oi(t,n,c)}return n.flags|=1,t=Ri(f,s),t.ref=n.ref,t.return=n,n.child=t}function hm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(zs(f,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=f,Qu(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Oi(t,n,c)}return Xu(t,n,a,s,c)}function dm(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return pm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&nl(n,f!==null?f.cachePool:null),f!==null?hp(n,f):Eu(),tm(n);else return n.lanes=n.childLanes=536870912,pm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(nl(n,f.cachePool),hp(n,f),ua(),n.memoizedState=null):(t!==null&&nl(n,null),Eu(),ua());return pn(t,n,c,a),n.child}function pm(t,n,a,s){var c=_u();return c=c===null?null:{parent:an._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&nl(n,null),Eu(),tm(n),t!==null&&Gs(t,n,s,!0),null}function xl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Xu(t,n,a,s,c){return Za(n),a=Au(t,n,a,s,void 0,c),s=Ru(),t!==null&&!un?(Cu(t,n,c),Oi(t,n,c)):(Ee&&s&&cu(n),n.flags|=1,pn(t,n,a,c),n.child)}function mm(t,n,a,s,c,f){return Za(n),n.updateQueue=null,a=pp(n,s,a,c),dp(t),s=Ru(),t!==null&&!un?(Cu(t,n,f),Oi(t,n,f)):(Ee&&s&&cu(n),n.flags|=1,pn(t,n,a,f),n.child)}function gm(t,n,a,s,c){if(Za(n),n.stateNode===null){var f=wr,x=a.contextType;typeof x=="object"&&x!==null&&(f=_n(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Vu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},xu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?_n(x):wr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Gu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Vu.enqueueReplaceState(f,f.state,null),js(n,s,f,c),Ys(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=Ja(a,T);f.props=P;var tt=f.context,ht=a.contextType;x=wr,typeof ht=="object"&&ht!==null&&(x=_n(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==x)&&nm(n,f,s,x),ra=!1;var nt=n.memoizedState;f.state=nt,js(n,s,f,c),Ys(),tt=n.memoizedState,T||nt!==tt||ra?(typeof _t=="function"&&(Gu(n,a,_t,s),tt=n.memoizedState),(P=ra||em(n,a,P,s,nt,tt,x))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=tt),f.props=s,f.state=tt,f.context=x,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Su(t,n),x=n.memoizedProps,ht=Ja(a,x),f.props=ht,_t=n.pendingProps,nt=f.context,tt=a.contextType,P=wr,typeof tt=="object"&&tt!==null&&(P=_n(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==_t||nt!==P)&&nm(n,f,s,P),ra=!1,nt=n.memoizedState,f.state=nt,js(n,s,f,c),Ys();var rt=n.memoizedState;x!==_t||nt!==rt||ra||t!==null&&t.dependencies!==null&&tl(t.dependencies)?(typeof T=="function"&&(Gu(n,a,T,s),rt=n.memoizedState),(ht=ra||em(n,a,ht,s,nt,rt,P)||t!==null&&t.dependencies!==null&&tl(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=P,s=ht):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,xl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Fr(n,t.child,null,c),n.child=Fr(n,null,a,c)):pn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Oi(t,n,c),t}function _m(t,n,a,s){return Fs(),n.flags|=256,pn(t,n,a,s),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(t){return{baseLanes:t,cachePool:ap()}}function Yu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function vm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(c?ca(n):ua(),Ee){var T=qe,P;if(P=T){t:{for(P=T,T=mi;P.nodeType!==8;){if(!T){T=null;break t}if(P=li(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:Xa!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},P=Fn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Mn=n,qe=null,P=!0):P=!1}P||Ya(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Uf(T)?n.lanes=32:n.lanes=536870912,null;Ni(n)}return T=s.children,s=s.fallback,c?(ua(),c=n.mode,T=Sl({mode:"hidden",children:T},c),s=ka(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=qu(a),c.childLanes=Yu(t,x,a),n.memoizedState=Wu,s):(ca(n),ju(n,T))}if(P=t.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(ca(n),n.flags&=-257,n=Zu(t,n,a)):n.memoizedState!==null?(ua(),n.child=t.child,n.flags|=128,n=null):(ua(),c=s.fallback,T=n.mode,s=Sl({mode:"visible",children:s.children},T),c=ka(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Fr(n,t.child,null,a),s=n.child,s.memoizedState=qu(a),s.childLanes=Yu(t,x,a),n.memoizedState=Wu,n=c);else if(ca(n),Uf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var tt=x.dgst;x=tt,s=Error(r(419)),s.stack="",s.digest=x,Hs({value:s,source:null,stack:null}),n=Zu(t,n,a)}else if(un||Gs(t,n,a,!1),x=(a&t.childLanes)!==0,un||x){if(x=ze,x!==null&&(s=a&-a,s=(s&42)!==0?1:je(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==P.retryLane))throw P.retryLane=s,Cr(t,s),Xn(x,t,s),cm;T.data==="$?"||pf(),n=Zu(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,qe=li(T.nextSibling),Mn=n,Ee=!0,qa=null,mi=!1,t!==null&&(Qn[Jn++]=Ci,Qn[Jn++]=wi,Qn[Jn++]=Xa,Ci=t.id,wi=t.overflow,Xa=n),n=ju(n,s.children),n.flags|=4096);return n}return c?(ua(),c=s.fallback,T=n.mode,P=t.child,tt=P.sibling,s=Ri(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,tt!==null?c=Ri(tt,c):(c=ka(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=t.child.memoizedState,T===null?T=qu(a):(P=T.cachePool,P!==null?(tt=an._currentValue,P=P.parent!==tt?{parent:tt,pool:tt}:P):P=ap(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=Yu(t,x,a),n.memoizedState=Wu,s):(ca(n),a=t.child,t=a.sibling,a=Ri(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function ju(t,n){return n=Sl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Sl(t,n){return t=Fn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Zu(t,n,a){return Fr(n,t.child,null,a),t=ju(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function xm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),du(t.return,n,a)}function Ku(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Sm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(pn(t,n,s.children,a),s=rn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,a,n);else if(t.tag===19)xm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(yt(rn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&gl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ku(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&gl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ku(n,!0,a,null,f);break;case"together":Ku(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Oi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Gs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ri(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ri(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Qu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tl(t)))}function Fv(t,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),aa(n,an,t.memoizedState.cache),Fs();break;case 27:case 5:ae(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:aa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?vm(t,n,a):(ca(n),t=Oi(t,n,a),t!==null?t.sibling:null);ca(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Gs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Sm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(rn,rn.current),s)break;return null;case 22:case 23:return n.lanes=0,dm(t,n,a);case 24:aa(n,an,t.memoizedState.cache)}return Oi(t,n,a)}function ym(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Qu(t,a)&&(n.flags&128)===0)return un=!1,Fv(t,n,a);un=(t.flags&131072)!==0}else un=!1,Ee&&(n.flags&1048576)!==0&&Qd(n,$o,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")su(s)?(t=Ja(s,t),n.tag=1,n=gm(null,n,s,t,a)):(n.tag=0,n=Xu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===N){n.tag=11,n=um(null,n,s,t,a);break t}else if(c===F){n.tag=14,n=fm(null,n,s,t,a);break t}}throw n=gt(s)||s,Error(r(306,n,""))}}return n;case 0:return Xu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ja(s,n.pendingProps),gm(t,n,s,c,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Su(t,n),js(n,s,null,a);var x=n.memoizedState;if(s=x.cache,aa(n,an,s),s!==f.cache&&pu(n,[an],a,!0),Ys(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=_m(t,n,s,a);break t}else if(s!==c){c=Zn(Error(r(424)),n),Hs(c),n=_m(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qe=li(t.firstChild),Mn=n,Ee=!0,qa=null,mi=!0,a=$p(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Fs(),s===c){n=Oi(t,n,a);break t}pn(t,n,s,a)}n=n.child}return n;case 26:return xl(t,n),t===null?(a=b0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,s=Ol(xt.current).createElement(a),s[He]=n,s[cn]=t,gn(s,a,t),k(s),n.stateNode=s):n.memoizedState=b0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ae(n),t===null&&Ee&&(s=n.stateNode=M0(n.type,n.pendingProps,xt.current),Mn=n,mi=!0,c=qe,xa(n.type)?(Lf=c,qe=li(s.firstChild)):qe=c),pn(t,n,n.pendingProps.children,a),xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((c=s=qe)&&(s=d1(s,n.type,n.pendingProps,mi),s!==null?(n.stateNode=s,Mn=n,qe=li(s.firstChild),mi=!1,c=!0):c=!1),c||Ya(n)),ae(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,Cf(c,f)?s=null:x!==null&&Cf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Au(t,n,Uv,null,null,a),_o._currentValue=c),xl(t,n),pn(t,n,s,a),n.child;case 6:return t===null&&Ee&&((t=a=qe)&&(a=p1(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Mn=n,qe=null,t=!0):t=!1),t||Ya(n)),null;case 13:return vm(t,n,a);case 4:return Ot(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Fr(n,null,s,a):pn(t,n,s,a),n.child;case 11:return um(t,n,n.type,n.pendingProps,a);case 7:return pn(t,n,n.pendingProps,a),n.child;case 8:return pn(t,n,n.pendingProps.children,a),n.child;case 12:return pn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,aa(n,n.type,s.value),pn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Za(n),c=_n(c),s=s(c),n.flags|=1,pn(t,n,s,a),n.child;case 14:return fm(t,n,n.type,n.pendingProps,a);case 15:return hm(t,n,n.type,n.pendingProps,a);case 19:return Sm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=Sl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ri(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return dm(t,n,a);case 24:return Za(n),s=_n(an),t===null?(c=_u(),c===null&&(c=ze,f=mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},xu(n),aa(n,an,c)):((t.lanes&a)!==0&&(Su(t,n),js(n,null,null,a),Ys()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),aa(n,an,s)):(s=f.cache,aa(n,an,s),s!==c.cache&&pu(n,[an],a,!0))),pn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Pi(t){t.flags|=4}function Mm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!D0(n)){if(n=$n.current,n!==null&&((xe&4194048)===xe?gi!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==gi))throw Ws=vu,rp;t.flags|=8192}}function yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?mt():536870912,t.lanes|=n,kr|=n)}function eo(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Hv(t,n,a){var s=n.pendingProps;switch(uu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ui(an),Kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Is(n)?Pi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tp())),We(n),null;case 26:return a=n.memoizedState,t===null?(Pi(n),a!==null?(We(n),Mm(n,a)):(We(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Pi(n),We(n),Mm(n,a)):(We(n),n.flags&=-16777217):(t.memoizedProps!==s&&Pi(n),We(n),n.flags&=-16777217),null;case 27:Ae(n),a=xt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}t=K.current,Is(n)?Jd(n):(t=M0(c,s,a),n.stateNode=t,Pi(n))}return We(n),null;case 5:if(Ae(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(t=K.current,Is(n))Jd(n);else{switch(c=Ol(xt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[He]=n,t[cn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(gn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Pi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Pi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=xt.current,Is(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Mn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[He]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||m0(t.nodeValue,a)),t||Ya(n)}else t=Ol(t).createTextNode(s),t[He]=n,n.stateNode=t}return We(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Is(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[He]=n}else Fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=tp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Ni(n),n):(Ni(n),null)}if(Ni(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),We(n),null;case 4:return Kt(),t===null&&Ef(n.stateNode.containerInfo),We(n),null;case 10:return Ui(n.type),We(n),null;case 19:if(St(rn),c=n.memoizedState,c===null)return We(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)eo(c,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=gl(t),f!==null){for(n.flags|=128,eo(c,!1),t=f.updateQueue,n.updateQueue=t,yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Kd(a,t),a=a.sibling;return yt(rn,rn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ue()>Tl&&(n.flags|=128,s=!0,eo(c,!1),n.lanes=4194304)}else{if(!s)if(t=gl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,yl(n,t),eo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ee)return We(n),null}else 2*ue()-c.renderingStartTime>Tl&&a!==536870912&&(n.flags|=128,s=!0,eo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ue(),n.sibling=null,t=rn.current,yt(rn,s?t&1|2:t&1),n):(We(n),null);case 22:case 23:return Ni(n),Tu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&St(Ka),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ui(an),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Gv(t,n){switch(uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ui(an),Kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ae(n),null;case 13:if(Ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Fs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return St(rn),null;case 4:return Kt(),null;case 10:return Ui(n.type),null;case 22:case 23:return Ni(n),Tu(),t!==null&&St(Ka),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ui(an),null;case 25:return null;default:return null}}function Em(t,n){switch(uu(n),n.tag){case 3:Ui(an),Kt();break;case 26:case 27:case 5:Ae(n);break;case 4:Kt();break;case 13:Ni(n);break;case 19:St(rn);break;case 10:Ui(n.type);break;case 22:case 23:Ni(n),Tu(),t!==null&&St(Ka);break;case 24:Ui(an)}}function no(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(T){Ne(n,n.return,T)}}function fa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var P=a,tt=T;try{tt()}catch(ht){Ne(c,P,ht)}}}s=s.next}while(s!==f)}}catch(ht){Ne(n,n.return,ht)}}function Tm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{fp(n,a)}catch(s){Ne(t,t.return,s)}}}function bm(t,n,a){a.props=Ja(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ne(t,n,s)}}function io(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ne(t,n,c)}}function _i(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ne(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ne(t,n,c)}else a.current=null}function Am(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ne(t,t.return,c)}}function Ju(t,n,a){try{var s=t.stateNode;l1(s,t.type,a,n),s[cn]=n}catch(c){Ne(t,t.return,c)}}function Rm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xa(t.type)||t.tag===4}function $u(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Rm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Nl));else if(s!==4&&(s===27&&xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(tf(t,n,a),t=t.sibling;t!==null;)tf(t,n,a),t=t.sibling}function Ml(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ml(t,n,a),t=t.sibling;t!==null;)Ml(t,n,a),t=t.sibling}function Cm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);gn(n,s,a),n[He]=t,n[cn]=a}catch(f){Ne(t,t.return,f)}}var zi=!1,Ke=!1,ef=!1,wm=typeof WeakSet=="function"?WeakSet:Set,fn=null;function Vv(t,n){if(t=t.containerInfo,Af=Hl,t=Hd(t),$c(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,P=-1,tt=0,ht=0,_t=t,nt=null;e:for(;;){for(var rt;_t!==a||c!==0&&_t.nodeType!==3||(T=x+c),_t!==f||s!==0&&_t.nodeType!==3||(P=x+s),_t.nodeType===3&&(x+=_t.nodeValue.length),(rt=_t.firstChild)!==null;)nt=_t,_t=rt;for(;;){if(_t===t)break e;if(nt===a&&++tt===c&&(T=x),nt===f&&++ht===s&&(P=x),(rt=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=rt}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:t,selectionRange:a},Hl=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var te=Ja(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(te,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Yt){Ne(a,a.return,Yt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Df(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Df(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}}function Dm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),s&4&&no(5,a);break;case 1:if(ha(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Ne(a,a.return,x)}else{var c=Ja(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ne(a,a.return,x)}}s&64&&Tm(a),s&512&&io(a,a.return);break;case 3:if(ha(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fp(t,n)}catch(x){Ne(a,a.return,x)}}break;case 27:n===null&&s&4&&Cm(a);case 26:case 5:ha(t,a),n===null&&s&4&&Am(a),s&512&&io(a,a.return);break;case 12:ha(t,a);break;case 13:ha(t,a),s&4&&Nm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Qv.bind(null,a),m1(t,a))));break;case 22:if(s=a.memoizedState!==null||zi,!s){n=n!==null&&n.memoizedState!==null||Ke,c=zi;var f=Ke;zi=s,(Ke=n)&&!f?da(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),zi=c,Ke=f}break;case 30:break;default:ha(t,a)}}function Um(t){var n=t.alternate;n!==null&&(t.alternate=null,Um(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&vr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ve=null,Cn=!1;function Bi(t,n,a){for(a=a.child;a!==null;)Lm(t,n,a),a=a.sibling}function Lm(t,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(wt,a)}catch{}switch(a.tag){case 26:Ke||_i(a,n),Bi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||_i(a,n);var s=Ve,c=Cn;xa(a.type)&&(Ve=a.stateNode,Cn=!1),Bi(t,n,a),ho(a.stateNode),Ve=s,Cn=c;break;case 5:Ke||_i(a,n);case 6:if(s=Ve,c=Cn,Ve=null,Bi(t,n,a),Ve=s,Cn=c,Ve!==null)if(Cn)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(f){Ne(a,n,f)}else try{Ve.removeChild(a.stateNode)}catch(f){Ne(a,n,f)}break;case 18:Ve!==null&&(Cn?(t=Ve,S0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),yo(t)):S0(Ve,a.stateNode));break;case 4:s=Ve,c=Cn,Ve=a.stateNode.containerInfo,Cn=!0,Bi(t,n,a),Ve=s,Cn=c;break;case 0:case 11:case 14:case 15:Ke||fa(2,a,n),Ke||fa(4,a,n),Bi(t,n,a);break;case 1:Ke||(_i(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&bm(a,n,s)),Bi(t,n,a);break;case 21:Bi(t,n,a);break;case 22:Ke=(s=Ke)||a.memoizedState!==null,Bi(t,n,a),Ke=s;break;default:Bi(t,n,a)}}function Nm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yo(t)}catch(a){Ne(n,n.return,a)}}function kv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new wm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new wm),n;default:throw Error(r(435,t.tag))}}function nf(t,n){var a=kv(t);n.forEach(function(s){var c=Jv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(xa(T.type)){Ve=T.stateNode,Cn=!1;break t}break;case 5:Ve=T.stateNode,Cn=!1;break t;case 3:case 4:Ve=T.stateNode.containerInfo,Cn=!0;break t}T=T.return}if(Ve===null)throw Error(r(160));Lm(f,x,c),Ve=null,Cn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Om(n,t),n=n.sibling}var oi=null;function Om(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),s&4&&(fa(3,t,t.return),no(3,t),fa(5,t,t.return));break;case 1:Hn(n,t),Gn(t),s&512&&(Ke||a===null||_i(a,a.return)),s&64&&zi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=oi;if(Hn(n,t),Gn(t),s&512&&(Ke||a===null||_i(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[$i]||f[He]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),gn(f,s,a),f[He]=t,k(f),s=f;break t;case"link":var x=C0("link","href",c).get(s+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=c.createElement(s),gn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=C0("meta","content",c).get(s+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=c.createElement(s),gn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[He]=t,k(f),s=f}t.stateNode=s}else w0(c,t.type,t.stateNode);else t.stateNode=R0(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?w0(c,t.type,t.stateNode):R0(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Ju(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),s&512&&(Ke||a===null||_i(a,a.return)),a!==null&&s&4&&Ju(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),s&512&&(Ke||a===null||_i(a,a.return)),t.flags&32){c=t.stateNode;try{yr(c,"")}catch(rt){Ne(t,t.return,rt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Ju(t,c,a!==null?a.memoizedProps:c)),s&1024&&(ef=!0);break;case 6:if(Hn(n,t),Gn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(rt){Ne(t,t.return,rt)}}break;case 3:if(Bl=null,c=oi,oi=Pl(n.containerInfo),Hn(n,t),oi=c,Gn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{yo(n.containerInfo)}catch(rt){Ne(t,t.return,rt)}ef&&(ef=!1,Pm(t));break;case 4:s=oi,oi=Pl(t.stateNode.containerInfo),Hn(n,t),Gn(t),oi=s;break;case 12:Hn(n,t),Gn(t);break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(cf=ue()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,nf(t,s)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,tt=zi,ht=Ke;if(zi=tt||c,Ke=ht||P,Hn(n,t),Ke=ht,zi=tt,Gn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||zi||Ke||$a(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=P.stateNode;var _t=P.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(rt){Ne(P,P.return,rt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(rt){Ne(P,P.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,nf(t,a))));break;case 19:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,nf(t,s)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Rm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=$u(t);Ml(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(yr(x,""),a.flags&=-33);var T=$u(t);Ml(t,T,x);break;case 3:case 4:var P=a.stateNode.containerInfo,tt=$u(t);tf(t,tt,P);break;default:throw Error(r(161))}}catch(ht){Ne(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Pm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Pm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Dm(t,n.alternate,n),n=n.sibling}function $a(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:fa(4,n,n.return),$a(n);break;case 1:_i(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&bm(n,n.return,a),$a(n);break;case 27:ho(n.stateNode);case 26:case 5:_i(n,n.return),$a(n);break;case 22:n.memoizedState===null&&$a(n);break;case 30:$a(n);break;default:$a(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:da(c,f,a),no(4,f);break;case 1:if(da(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Ne(s,s.return,tt)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)up(P[c],T)}catch(tt){Ne(s,s.return,tt)}}a&&x&64&&Tm(f),io(f,f.return);break;case 27:Cm(f);case 26:case 5:da(c,f,a),a&&s===null&&x&4&&Am(f),io(f,f.return);break;case 12:da(c,f,a);break;case 13:da(c,f,a),a&&x&4&&Nm(c,f);break;case 22:f.memoizedState===null&&da(c,f,a),io(f,f.return);break;case 30:break;default:da(c,f,a)}n=n.sibling}}function af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Vs(a))}function rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vs(t))}function vi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zm(t,n,a,s),n=n.sibling}function zm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),c&2048&&no(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vs(t)));break;case 12:if(c&2048){vi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Ne(n,n.return,P)}}else vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,s):ao(t,n):f._visibility&2?vi(t,n,a,s):(f._visibility|=2,Hr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&af(x,n);break;case 24:vi(t,n,a,s),c&2048&&rf(n.alternate,n);break;default:vi(t,n,a,s)}}function Hr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,T=a,P=s,tt=x.flags;switch(x.tag){case 0:case 11:case 15:Hr(f,x,T,P,c),no(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?Hr(f,x,T,P,c):ao(f,x):(ht._visibility|=2,Hr(f,x,T,P,c)),c&&tt&2048&&af(x.alternate,x);break;case 24:Hr(f,x,T,P,c),c&&tt&2048&&rf(x.alternate,x);break;default:Hr(f,x,T,P,c)}n=n.sibling}}function ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:ao(a,s),c&2048&&af(s.alternate,s);break;case 24:ao(a,s),c&2048&&rf(s.alternate,s);break;default:ao(a,s)}n=n.sibling}}var ro=8192;function Gr(t){if(t.subtreeFlags&ro)for(t=t.child;t!==null;)Bm(t),t=t.sibling}function Bm(t){switch(t.tag){case 26:Gr(t),t.flags&ro&&t.memoizedState!==null&&C1(oi,t.memoizedState,t.memoizedProps);break;case 5:Gr(t);break;case 3:case 4:var n=oi;oi=Pl(t.stateNode.containerInfo),Gr(t),oi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=ro,ro=16777216,Gr(t),ro=n):Gr(t));break;default:Gr(t)}}function Im(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function so(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,Hm(s,t)}Im(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fm(t),t=t.sibling}function Fm(t){switch(t.tag){case 0:case 11:case 15:so(t),t.flags&2048&&fa(9,t,t.return);break;case 3:so(t);break;case 12:so(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,El(t)):so(t);break;default:so(t)}}function El(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,Hm(s,t)}Im(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:fa(8,n,n.return),El(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,El(n));break;default:El(n)}t=t.sibling}}function Hm(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Vs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,fn=s;else t:for(a=t;fn!==null;){s=fn;var c=s.sibling,f=s.return;if(Um(s),s===a){fn=null;break t}if(c!==null){c.return=f,fn=c;break t}fn=f}}}var Xv={getCacheForType:function(t){var n=_n(an),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Wv=typeof WeakMap=="function"?WeakMap:Map,Ce=0,ze=null,he=null,xe=0,we=0,Vn=null,pa=!1,Vr=!1,sf=!1,Ii=0,Ye=0,ma=0,tr=0,of=0,ti=0,kr=0,oo=null,wn=null,lf=!1,cf=0,Tl=1/0,bl=null,ga=null,mn=0,_a=null,Xr=null,Wr=0,uf=0,ff=null,Gm=null,lo=0,hf=null;function kn(){if((Ce&2)!==0&&xe!==0)return xe&-xe;if(z.T!==null){var t=Lr;return t!==0?t:xf()}return Yn()}function Vm(){ti===0&&(ti=(xe&536870912)===0||Ee?At():536870912);var t=$n.current;return t!==null&&(t.flags|=32),ti}function Xn(t,n,a){(t===ze&&(we===2||we===9)||t.cancelPendingCommit!==null)&&(qr(t,0),va(t,xe,ti,!1)),Ct(t,a),((Ce&2)===0||t!==ze)&&(t===ze&&((Ce&2)===0&&(tr|=a),Ye===4&&va(t,xe,ti,!1)),xi(t))}function km(t,n,a){if((Ce&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Re(t,n),c=s?jv(t,n):mf(t,n,!0),f=s;do{if(c===0){Vr&&!s&&va(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!qv(a)){c=mf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;c=oo;var P=T.current.memoizedState.isDehydrated;if(P&&(qr(T,x).flags|=256),x=mf(T,x,!1),x!==2){if(sf&&!P){T.errorRecoveryDisabledLanes|=f,tr|=f,c=4;break t}f=wn,wn=c,f!==null&&(wn===null?wn=f:wn.push.apply(wn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){qr(t,0),va(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:va(s,n,ti,!pa);break t;case 2:wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=cf+300-ue(),10<c)){if(va(s,n,ti,!pa),ie(s,0,!0)!==0)break t;s.timeoutHandle=v0(Xm.bind(null,s,a,wn,bl,lf,n,ti,tr,kr,pa,f,2,-0,0),c);break t}Xm(s,a,wn,bl,lf,n,ti,tr,kr,pa,f,0,-0,0)}}break}while(!0);xi(t)}function Xm(t,n,a,s,c,f,x,T,P,tt,ht,_t,nt,rt){if(t.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(go={stylesheets:null,count:0,unsuspend:R1},Bm(n),_t=w1(),_t!==null)){t.cancelPendingCommit=_t(Qm.bind(null,t,n,f,a,s,c,x,T,P,ht,1,nt,rt)),va(t,f,x,!tt);return}Qm(t,n,f,a,s,c,x,T,P)}function qv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!In(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function va(t,n,a,s){n&=~of,n&=~tr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Ht(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&me(t,a,n)}function Al(){return(Ce&6)===0?(co(0),!1):!0}function df(){if(he!==null){if(we===0)var t=he.return;else t=he,Di=ja=null,wu(t),Ir=null,$s=0,t=he;for(;t!==null;)Em(t.alternate,t),t=t.return;he=null}}function qr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,u1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),df(),ze=t,he=a=Ri(t.current,null),xe=n,we=0,Vn=null,pa=!1,Vr=Re(t,n),sf=!1,kr=ti=of=tr=ma=Ye=0,wn=oo=null,lf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Ht(s),f=1<<c;n|=t[c],s&=~f}return Ii=n,jo(),a}function Wm(t,n){ce=null,z.H=dl,n===Xs||n===il?(n=lp(),we=3):n===rp?(n=lp(),we=4):we=n===cm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vn=n,he===null&&(Ye=1,vl(t,Zn(n,t.current)))}function qm(){var t=z.H;return z.H=dl,t===null?dl:t}function Ym(){var t=z.A;return z.A=Xv,t}function pf(){Ye=4,pa||(xe&4194048)!==xe&&$n.current!==null||(Vr=!0),(ma&134217727)===0&&(tr&134217727)===0||ze===null||va(ze,xe,ti,!1)}function mf(t,n,a){var s=Ce;Ce|=2;var c=qm(),f=Ym();(ze!==t||xe!==n)&&(bl=null,qr(t,n)),n=!1;var x=Ye;t:do try{if(we!==0&&he!==null){var T=he,P=Vn;switch(we){case 8:df(),x=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var tt=we;if(we=0,Vn=null,Yr(t,T,P,tt),a&&Vr){x=0;break t}break;default:tt=we,we=0,Vn=null,Yr(t,T,P,tt)}}Yv(),x=Ye;break}catch(ht){Wm(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Di=ja=null,Ce=s,z.H=c,z.A=f,he===null&&(ze=null,xe=0,jo()),x}function Yv(){for(;he!==null;)jm(he)}function jv(t,n){var a=Ce;Ce|=2;var s=qm(),c=Ym();ze!==t||xe!==n?(bl=null,Tl=ue()+500,qr(t,n)):Vr=Re(t,n);t:do try{if(we!==0&&he!==null){n=he;var f=Vn;e:switch(we){case 1:we=0,Vn=null,Yr(t,n,f,1);break;case 2:case 9:if(sp(f)){we=0,Vn=null,Zm(n);break}n=function(){we!==2&&we!==9||ze!==t||(we=7),xi(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:sp(f)?(we=0,Vn=null,Zm(n)):(we=0,Vn=null,Yr(t,n,f,7));break;case 5:var x=null;switch(he.tag){case 26:x=he.memoizedState;case 5:case 27:var T=he;if(!x||D0(x)){we=0,Vn=null;var P=T.sibling;if(P!==null)he=P;else{var tt=T.return;tt!==null?(he=tt,Rl(tt)):he=null}break e}}we=0,Vn=null,Yr(t,n,f,5);break;case 6:we=0,Vn=null,Yr(t,n,f,6);break;case 8:df(),Ye=6;break t;default:throw Error(r(462))}}Zv();break}catch(ht){Wm(t,ht)}while(!0);return Di=ja=null,z.H=s,z.A=c,Ce=a,he!==null?0:(ze=null,xe=0,jo(),Ye)}function Zv(){for(;he!==null&&!ye();)jm(he)}function jm(t){var n=ym(t.alternate,t,Ii);t.memoizedProps=t.pendingProps,n===null?Rl(t):he=n}function Zm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=mm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=mm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:wu(n);default:Em(a,n),n=he=Kd(n,Ii),n=ym(a,n,Ii)}t.memoizedProps=t.pendingProps,n===null?Rl(t):he=n}function Yr(t,n,a,s){Di=ja=null,wu(n),Ir=null,$s=0;var c=n.return;try{if(Iv(t,c,n,a,xe)){Ye=1,vl(t,Zn(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;Ye=1,vl(t,Zn(a,t.current)),he=null;return}n.flags&32768?(Ee||s===1?t=!0:Vr||(xe&536870912)!==0?t=!1:(pa=t=!0,(s===2||s===9||s===3||s===6)&&(s=$n.current,s!==null&&s.tag===13&&(s.flags|=16384))),Km(n,t)):Rl(n)}function Rl(t){var n=t;do{if((n.flags&32768)!==0){Km(n,pa);return}t=n.return;var a=Hv(n.alternate,n,Ii);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Ye===0&&(Ye=5)}function Km(t,n){do{var a=Gv(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Ye=6,he=null}function Qm(t,n,a,s,c,f,x,T,P){t.cancelPendingCommit=null;do Cl();while(mn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=au,Qt(t,a,f,x,T,P),t===ze&&(he=ze=null,xe=0),Xr=n,_a=t,Wr=a,uf=f,ff=c,Gm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$v(E,function(){return n0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=W.p,W.p=2,x=Ce,Ce|=4;try{Vv(t,n,a)}finally{Ce=x,W.p=c,z.T=s}}mn=1,Jm(),$m(),t0()}}function Jm(){if(mn===1){mn=0;var t=_a,n=Xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=W.p;W.p=2;var c=Ce;Ce|=4;try{Om(n,t);var f=Rf,x=Hd(t.containerInfo),T=f.focusedElem,P=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Fd(T.ownerDocument.documentElement,T)){if(P!==null&&$c(T)){var tt=P.start,ht=P.end;if(ht===void 0&&(ht=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(ht,T.value.length);else{var _t=T.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var rt=nt.getSelection(),te=T.textContent.length,Yt=Math.min(P.start,te),Le=P.end===void 0?Yt:Math.min(P.end,te);!rt.extend&&Yt>Le&&(x=Le,Le=Yt,Yt=x);var q=Id(T,Yt),G=Id(T,Le);if(q&&G&&(rt.rangeCount!==1||rt.anchorNode!==q.node||rt.anchorOffset!==q.offset||rt.focusNode!==G.node||rt.focusOffset!==G.offset)){var J=_t.createRange();J.setStart(q.node,q.offset),rt.removeAllRanges(),Yt>Le?(rt.addRange(J),rt.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),rt.addRange(J))}}}}for(_t=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&_t.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var pt=_t[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Hl=!!Af,Rf=Af=null}finally{Ce=c,W.p=s,z.T=a}}t.current=n,mn=2}}function $m(){if(mn===2){mn=0;var t=_a,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=W.p;W.p=2;var c=Ce;Ce|=4;try{Dm(t,n.alternate,n)}finally{Ce=c,W.p=s,z.T=a}}mn=3}}function t0(){if(mn===4||mn===3){mn=0,Vt();var t=_a,n=Xr,a=Wr,s=Gm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,Xr=_a=null,e0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ga=null),_e(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=W.p,W.p=2,z.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var T=s[x];f(T.value,{componentStack:T.stack})}}finally{z.T=n,W.p=c}}(Wr&3)!==0&&Cl(),xi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===hf?lo++:(lo=0,hf=t):lo=0,co(0)}}function e0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Vs(n)))}function Cl(t){return Jm(),$m(),t0(),n0()}function n0(){if(mn!==5)return!1;var t=_a,n=uf;uf=0;var a=_e(Wr),s=z.T,c=W.p;try{W.p=32>a?32:a,z.T=null,a=ff,ff=null;var f=_a,x=Wr;if(mn=0,Xr=_a=null,Wr=0,(Ce&6)!==0)throw Error(r(331));var T=Ce;if(Ce|=4,Fm(f.current),zm(f,f.current,x,a),Ce=T,co(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(wt,f)}catch{}return!0}finally{W.p=c,z.T=s,e0(t,n)}}function i0(t,n,a){n=Zn(a,n),n=ku(t.stateNode,n,2),t=oa(t,n,2),t!==null&&(Ct(t,2),xi(t))}function Ne(t,n,a){if(t.tag===3)i0(t,t,a);else for(;n!==null;){if(n.tag===3){i0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ga===null||!ga.has(s))){t=Zn(a,t),a=om(2),s=oa(n,a,2),s!==null&&(lm(a,s,n,t),Ct(s,2),xi(s));break}}n=n.return}}function gf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Wv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(sf=!0,c.add(a),t=Kv.bind(null,t,n,a),n.then(t,t))}function Kv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ze===t&&(xe&a)===a&&(Ye===4||Ye===3&&(xe&62914560)===xe&&300>ue()-cf?(Ce&2)===0&&qr(t,0):of|=a,kr===xe&&(kr=0)),xi(t)}function a0(t,n){n===0&&(n=mt()),t=Cr(t,n),t!==null&&(Ct(t,n),xi(t))}function Qv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),a0(t,a)}function Jv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),a0(t,a)}function $v(t,n){return Oe(t,n)}var wl=null,jr=null,_f=!1,Dl=!1,vf=!1,er=0;function xi(t){t!==jr&&t.next===null&&(jr===null?wl=jr=t:jr=jr.next=t),Dl=!0,_f||(_f=!0,e1())}function co(t,n){if(!vf&&Dl){vf=!0;do for(var a=!1,s=wl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Ht(42|t)+1)-1,f&=c&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,l0(s,f))}else f=xe,f=ie(s,s===ze?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Re(s,f)||(a=!0,l0(s,f));s=s.next}while(a);vf=!1}}function t1(){r0()}function r0(){Dl=_f=!1;var t=0;er!==0&&(c1()&&(t=er),er=0);for(var n=ue(),a=null,s=wl;s!==null;){var c=s.next,f=s0(s,n);f===0?(s.next=null,a===null?wl=c:a.next=c,c===null&&(jr=a)):(a=s,(t!==0||(f&3)!==0)&&(Dl=!0)),s=c}co(t)}function s0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Ht(f),T=1<<x,P=c[x];P===-1?((T&a)===0||(T&s)!==0)&&(c[x]=X(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=ze,a=xe,a=ie(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ge(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Re(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ge(s),_e(a)){case 2:case 8:a=O;break;case 32:a=E;break;case 268435456:a=Q;break;default:a=E}return s=o0.bind(null,t),a=Oe(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ge(s),t.callbackPriority=2,t.callbackNode=null,2}function o0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cl()&&t.callbackNode!==a)return null;var s=xe;return s=ie(t,t===ze?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(km(t,s,n),s0(t,ue()),t.callbackNode!=null&&t.callbackNode===a?o0.bind(null,t):null)}function l0(t,n){if(Cl())return null;km(t,n,!0)}function e1(){f1(function(){(Ce&6)!==0?Oe(ee,t1):r0()})}function xf(){return er===0&&(er=At()),er}function c0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function u0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function n1(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=c0((c[cn]||null).action),x=s.submitter;x&&(n=(n=x[cn]||null)?c0(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Wo("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(er!==0){var P=x?u0(c,x):new FormData(c);Iu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=x?u0(c,x):new FormData(c),Iu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Sf=0;Sf<iu.length;Sf++){var yf=iu[Sf],i1=yf.toLowerCase(),a1=yf[0].toUpperCase()+yf.slice(1);si(i1,"on"+a1)}si(kd,"onAnimationEnd"),si(Xd,"onAnimationIteration"),si(Wd,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(yv,"onTransitionRun"),si(Mv,"onTransitionStart"),si(Ev,"onTransitionCancel"),si(qd,"onTransitionEnd"),bt("onMouseEnter",["mouseout","mouseover"]),bt("onMouseLeave",["mouseout","mouseover"]),bt("onPointerEnter",["pointerout","pointerover"]),bt("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uo));function f0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var T=s[x],P=T.instance,tt=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(ht){_l(ht)}c.currentTarget=null,f=P}else for(x=0;x<s.length;x++){if(T=s[x],P=T.instance,tt=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(ht){_l(ht)}c.currentTarget=null,f=P}}}}function de(t,n){var a=n[gr];a===void 0&&(a=n[gr]=new Set);var s=t+"__bubble";a.has(s)||(h0(n,t,2,!1),a.add(s))}function Mf(t,n,a){var s=0;n&&(s|=4),h0(a,t,s,n)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function Ef(t){if(!t[Ul]){t[Ul]=!0,at.forEach(function(a){a!=="selectionchange"&&(r1.has(a)||Mf(a,!1,t),Mf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ul]||(n[Ul]=!0,Mf("selectionchange",!1,n))}}function h0(t,n,a,s){switch(z0(n)){case 2:var c=L1;break;case 8:c=N1;break;default:c=Bf}a=c.bind(null,n,a,t),c=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Tf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var T=s.stateNode.containerInfo;if(T===c)break;if(x===4)for(x=s.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;T!==null;){if(x=ta(T),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){s=f=x;continue t}T=T.parentNode}}s=s.return}xd(function(){var tt=f,ht=Vc(a),_t=[];t:{var nt=Yd.get(t);if(nt!==void 0){var rt=Wo,te=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":rt=$_;break;case"focusin":te="focus",rt=jc;break;case"focusout":te="blur",rt=jc;break;case"beforeblur":case"afterblur":rt=jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=G_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=nv;break;case kd:case Xd:case Wd:rt=X_;break;case qd:rt=av;break;case"scroll":case"scrollend":rt=F_;break;case"wheel":rt=sv;break;case"copy":case"cut":case"paste":rt=q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Td;break;case"toggle":case"beforetoggle":rt=lv}var Yt=(n&4)!==0,Le=!Yt&&(t==="scroll"||t==="scrollend"),q=Yt?nt!==null?nt+"Capture":null:nt;Yt=[];for(var G=tt,J;G!==null;){var pt=G;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||q===null||(pt=ws(G,q),pt!=null&&Yt.push(fo(G,pt,J))),Le)break;G=G.return}0<Yt.length&&(nt=new rt(nt,te,null,a,ht),_t.push({event:nt,listeners:Yt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",nt&&a!==Gc&&(te=a.relatedTarget||a.fromElement)&&(ta(te)||te[Ti]))break t;if((rt||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,rt?(te=a.relatedTarget||a.toElement,rt=tt,te=te?ta(te):null,te!==null&&(Le=u(te),Yt=te.tag,te!==Le||Yt!==5&&Yt!==27&&Yt!==6)&&(te=null)):(rt=null,te=tt),rt!==te)){if(Yt=Md,pt="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=Td,pt="onPointerLeave",q="onPointerEnter",G="pointer"),Le=rt==null?nt:Ia(rt),J=te==null?nt:Ia(te),nt=new Yt(pt,G+"leave",rt,a,ht),nt.target=Le,nt.relatedTarget=J,pt=null,ta(ht)===tt&&(Yt=new Yt(q,G+"enter",te,a,ht),Yt.target=J,Yt.relatedTarget=Le,pt=Yt),Le=pt,rt&&te)e:{for(Yt=rt,q=te,G=0,J=Yt;J;J=Zr(J))G++;for(J=0,pt=q;pt;pt=Zr(pt))J++;for(;0<G-J;)Yt=Zr(Yt),G--;for(;0<J-G;)q=Zr(q),J--;for(;G--;){if(Yt===q||q!==null&&Yt===q.alternate)break e;Yt=Zr(Yt),q=Zr(q)}Yt=null}else Yt=null;rt!==null&&d0(_t,nt,rt,Yt,!1),te!==null&&Le!==null&&d0(_t,Le,te,Yt,!0)}}t:{if(nt=tt?Ia(tt):window,rt=nt.nodeName&&nt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&nt.type==="file")var It=Ld;else if(Dd(nt))if(Nd)It=vv;else{It=gv;var fe=mv}else rt=nt.nodeName,!rt||rt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&Hc(tt.elementType)&&(It=Ld):It=_v;if(It&&(It=It(t,tt))){Ud(_t,It,a,ht);break t}fe&&fe(t,nt,tt),t==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&xr(nt,"number",nt.value)}switch(fe=tt?Ia(tt):window,t){case"focusin":(Dd(fe)||fe.contentEditable==="true")&&(br=fe,tu=tt,Bs=null);break;case"focusout":Bs=tu=br=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Gd(_t,a,ht);break;case"selectionchange":if(Sv)break;case"keydown":case"keyup":Gd(_t,a,ht)}var kt;if(Kc)t:{switch(t){case"compositionstart":var Zt="onCompositionStart";break t;case"compositionend":Zt="onCompositionEnd";break t;case"compositionupdate":Zt="onCompositionUpdate";break t}Zt=void 0}else Tr?Cd(t,a)&&(Zt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Zt="onCompositionStart");Zt&&(bd&&a.locale!=="ko"&&(Tr||Zt!=="onCompositionStart"?Zt==="onCompositionEnd"&&Tr&&(kt=Sd()):(ia=ht,Wc="value"in ia?ia.value:ia.textContent,Tr=!0)),fe=Ll(tt,Zt),0<fe.length&&(Zt=new Ed(Zt,t,null,a,ht),_t.push({event:Zt,listeners:fe}),kt?Zt.data=kt:(kt=wd(a),kt!==null&&(Zt.data=kt)))),(kt=uv?fv(t,a):hv(t,a))&&(Zt=Ll(tt,"onBeforeInput"),0<Zt.length&&(fe=new Ed("onBeforeInput","beforeinput",null,a,ht),_t.push({event:fe,listeners:Zt}),fe.data=kt)),n1(_t,t,tt,a,ht)}f0(_t,n)})}function fo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ll(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=ws(t,a),c!=null&&s.unshift(fo(t,c,f)),c=ws(t,n),c!=null&&s.push(fo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function d0(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var T=a,P=T.alternate,tt=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||tt===null||(P=tt,c?(tt=ws(a,f),tt!=null&&x.unshift(fo(a,tt,P))):c||(tt=ws(a,f),tt!=null&&x.push(fo(a,tt,P)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var s1=/\r\n?/g,o1=/\u0000|\uFFFD/g;function p0(t){return(typeof t=="string"?t:""+t).replace(s1,`
`).replace(o1,"")}function m0(t,n){return n=p0(n),p0(t)===n}function Nl(){}function Ue(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||yr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&yr(t,""+s);break;case"className":Xt(t,"class",s);break;case"tabIndex":Xt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(t,a,s);break;case"style":_d(t,s,f);break;case"data":if(n!=="object"){Xt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ue(t,n,"name",c.name,c,null),Ue(t,n,"formEncType",c.formEncType,c,null),Ue(t,n,"formMethod",c.formMethod,c,null),Ue(t,n,"formTarget",c.formTarget,c,null)):(Ue(t,n,"encType",c.encType,c,null),Ue(t,n,"method",c.method,c,null),Ue(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Nl);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":de("beforetoggle",t),de("toggle",t),qt(t,"popover",s);break;case"xlinkActuate":se(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":se(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":se(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":se(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":se(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":se(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":se(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":se(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":se(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":qt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=B_.get(a)||a,qt(t,a,s))}}function bf(t,n,a,s,c,f){switch(a){case"style":_d(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?yr(t,s):(typeof s=="number"||typeof s=="bigint")&&yr(t,""+s);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Nl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[cn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):qt(t,a,s)}}}function gn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,f,x,a,null)}}c&&Ue(t,n,"srcSet",a.srcSet,a,null),s&&Ue(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var T=f=x=c=null,P=null,tt=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":c=ht;break;case"type":x=ht;break;case"checked":P=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Ue(t,n,s,ht,a,null)}}Ho(t,f,T,P,tt,x,c,!1),na(t);return;case"select":de("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":s=T;default:Ue(t,n,c,T,a,null)}n=f,a=x,t.multiple=!!s,n!=null?Sr(t,!!s,n,!1):a!=null&&Sr(t,!!s,a,!0);return;case"textarea":de("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ue(t,n,x,T,a,null)}md(t,s,c,f),na(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ue(t,n,P,s,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(s=0;s<uo.length;s++)de(uo[s],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(s=a[tt],s!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,tt,s,a,null)}return;default:if(Hc(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&bf(t,n,ht,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ue(t,n,T,s,a,null))}function l1(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,P=null,tt=null,ht=null;for(rt in a){var _t=a[rt];if(a.hasOwnProperty(rt)&&_t!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":P=_t;default:s.hasOwnProperty(rt)||Ue(t,n,rt,null,s,_t)}}for(var nt in s){var rt=s[nt];if(_t=a[nt],s.hasOwnProperty(nt)&&(rt!=null||_t!=null))switch(nt){case"type":f=rt;break;case"name":c=rt;break;case"checked":tt=rt;break;case"defaultChecked":ht=rt;break;case"value":x=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==_t&&Ue(t,n,nt,rt,s,_t)}}Fa(t,x,T,P,tt,ht,f,c);return;case"select":rt=x=T=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":rt=P;default:s.hasOwnProperty(f)||Ue(t,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==P&&Ue(t,n,c,f,s,P)}n=T,a=x,s=rt,nt!=null?Sr(t,!!a,nt,!1):!!s!=!!a&&(n!=null?Sr(t,!!a,n,!0):Sr(t,!!a,a?[]:"",!1));return;case"textarea":rt=nt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ue(t,n,T,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":nt=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ue(t,n,x,c,s,f)}pd(t,nt,rt);return;case"option":for(var te in a)if(nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!s.hasOwnProperty(te))switch(te){case"selected":t.selected=!1;break;default:Ue(t,n,te,null,s,nt)}for(P in s)if(nt=s[P],rt=a[P],s.hasOwnProperty(P)&&nt!==rt&&(nt!=null||rt!=null))switch(P){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ue(t,n,P,nt,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)nt=a[Yt],a.hasOwnProperty(Yt)&&nt!=null&&!s.hasOwnProperty(Yt)&&Ue(t,n,Yt,null,s,nt);for(tt in s)if(nt=s[tt],rt=a[tt],s.hasOwnProperty(tt)&&nt!==rt&&(nt!=null||rt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ue(t,n,tt,nt,s,rt)}return;default:if(Hc(n)){for(var Le in a)nt=a[Le],a.hasOwnProperty(Le)&&nt!==void 0&&!s.hasOwnProperty(Le)&&bf(t,n,Le,void 0,s,nt);for(ht in s)nt=s[ht],rt=a[ht],!s.hasOwnProperty(ht)||nt===rt||nt===void 0&&rt===void 0||bf(t,n,ht,nt,s,rt);return}}for(var q in a)nt=a[q],a.hasOwnProperty(q)&&nt!=null&&!s.hasOwnProperty(q)&&Ue(t,n,q,null,s,nt);for(_t in s)nt=s[_t],rt=a[_t],!s.hasOwnProperty(_t)||nt===rt||nt==null&&rt==null||Ue(t,n,_t,nt,s,rt)}var Af=null,Rf=null;function Ol(t){return t.nodeType===9?t:t.ownerDocument}function g0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Cf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function c1(){var t=window.event;return t&&t.type==="popstate"?t===wf?!1:(wf=t,!0):(wf=null,!1)}var v0=typeof setTimeout=="function"?setTimeout:void 0,u1=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,f1=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(t){return x0.resolve(null).then(t).catch(h1)}:v0;function h1(t){setTimeout(function(){throw t})}function xa(t){return t==="head"}function S0(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var x=t.ownerDocument;if(a&1&&ho(x.documentElement),a&2&&ho(x.body),a&4)for(a=x.head,ho(a),x=a.firstChild;x;){var T=x.nextSibling,P=x.nodeName;x[$i]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=T}}if(c===0){t.removeChild(f),yo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);yo(n)}function Df(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Df(a),vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function d1(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[$i])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function p1(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function Uf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function m1(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Lf=null;function y0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function M0(t,n,a){switch(n=Ol(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ho(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);vr(t)}var ei=new Map,E0=new Set;function Pl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Fi=W.d;W.d={f:g1,r:_1,D:v1,C:x1,L:S1,m:y1,X:E1,S:M1,M:T1};function g1(){var t=Fi.f(),n=Al();return t||n}function _1(t){var n=ea(t);n!==null&&n.tag===5&&n.type==="form"?kp(n):Fi.r(t)}var Kr=typeof document>"u"?null:document;function T0(t,n,a){var s=Kr;if(s&&typeof n=="string"&&n){var c=Ie(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),E0.has(c)||(E0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),gn(n,"link",t),k(n),s.head.appendChild(n)))}}function v1(t){Fi.D(t),T0("dns-prefetch",t,null)}function x1(t,n){Fi.C(t,n),T0("preconnect",t,n)}function S1(t,n,a){Fi.L(t,n,a);var s=Kr;if(s&&t&&n){var c='link[rel="preload"][as="'+Ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ie(a.imageSizes)+'"]')):c+='[href="'+Ie(t)+'"]';var f=c;switch(n){case"style":f=Qr(t);break;case"script":f=Jr(t)}ei.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ei.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(po(f))||n==="script"&&s.querySelector(mo(f))||(n=s.createElement("link"),gn(n,"link",t),k(n),s.head.appendChild(n)))}}function y1(t,n){Fi.m(t,n);var a=Kr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ie(s)+'"][href="'+Ie(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Jr(t)}if(!ei.has(f)&&(t=g({rel:"modulepreload",href:t},n),ei.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mo(f)))return}s=a.createElement("link"),gn(s,"link",t),k(s),a.head.appendChild(s)}}}function M1(t,n,a){Fi.S(t,n,a);var s=Kr;if(s&&t){var c=A(s).hoistableStyles,f=Qr(t);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=s.querySelector(po(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ei.get(f))&&Nf(t,a);var P=x=s.createElement("link");k(P),gn(P,"link",t),P._p=new Promise(function(tt,ht){P.onload=tt,P.onerror=ht}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,zl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function E1(t,n){Fi.X(t,n);var a=Kr;if(a&&t){var s=A(a).hoistableScripts,c=Jr(t),f=s.get(c);f||(f=a.querySelector(mo(c)),f||(t=g({src:t,async:!0},n),(n=ei.get(c))&&Of(t,n),f=a.createElement("script"),k(f),gn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function T1(t,n){Fi.M(t,n);var a=Kr;if(a&&t){var s=A(a).hoistableScripts,c=Jr(t),f=s.get(c);f||(f=a.querySelector(mo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ei.get(c))&&Of(t,n),f=a.createElement("script"),k(f),gn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function b0(t,n,a,s){var c=(c=xt.current)?Pl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=A(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Qr(a.href);var f=A(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(po(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ei.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(t,a),f||b1(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Jr(a),a=A(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Qr(t){return'href="'+Ie(t)+'"'}function po(t){return'link[rel="stylesheet"]['+t+"]"}function A0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function b1(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),gn(n,"link",a),k(n),t.head.appendChild(n))}function Jr(t){return'[src="'+Ie(t)+'"]'}function mo(t){return"script[async]"+t}function R0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ie(a.href)+'"]');if(s)return n.instance=s,k(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),k(s),gn(s,"style",c),zl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Qr(a.href);var f=t.querySelector(po(c));if(f)return n.state.loading|=4,n.instance=f,k(f),f;s=A0(a),(c=ei.get(c))&&Nf(s,c),f=(t.ownerDocument||t).createElement("link"),k(f);var x=f;return x._p=new Promise(function(T,P){x.onload=T,x.onerror=P}),gn(f,"link",s),n.state.loading|=4,zl(f,a.precedence,t),n.instance=f;case"script":return f=Jr(a.src),(c=t.querySelector(mo(f)))?(n.instance=c,k(c),c):(s=a,(c=ei.get(f))&&(s=g({},a),Of(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),k(c),gn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,zl(s,a.precedence,t));return n.instance}function zl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var T=s[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Nf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Bl=null;function C0(t,n,a){if(Bl===null){var s=new Map,c=Bl=new Map;c.set(a,s)}else c=Bl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[$i]||f[He]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=s.get(x);T?T.push(f):s.set(x,[f])}}return s}function w0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function A1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function D0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var go=null;function R1(){}function C1(t,n,a){if(go===null)throw Error(r(475));var s=go;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Qr(a.href),f=t.querySelector(po(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Il.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,k(f);return}f=t.ownerDocument||t,a=A0(a),(c=ei.get(c))&&Nf(a,c),f=f.createElement("link"),k(f);var x=f;x._p=new Promise(function(T,P){x.onload=T,x.onerror=P}),gn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Il.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function w1(){if(go===null)throw Error(r(475));var t=go;return t.stylesheets&&t.count===0&&Pf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Pf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Il(){if(this.count--,this.count===0){if(this.stylesheets)Pf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fl=null;function Pf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fl=new Map,n.forEach(D1,t),Fl=null,Il.call(t))}function D1(t,n){if(!(n.state.loading&4)){var a=Fl.get(t);if(a)var s=a.get(null);else{a=new Map,Fl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Il.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var _o={$$typeof:U,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function U1(t,n,a,s,c,f,x,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vt(0),this.hiddenUpdates=vt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function U0(t,n,a,s,c,f,x,T,P,tt,ht,_t){return t=new U1(t,n,a,x,T,P,tt,_t),n=1,f===!0&&(n|=24),f=Fn(3,null,null,n),t.current=f,f.stateNode=t,n=mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},xu(f),t}function L0(t){return t?(t=wr,t):wr}function N0(t,n,a,s,c,f){c=L0(c),s.context===null?s.context=c:s.pendingContext=c,s=sa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=oa(t,s,n),a!==null&&(Xn(a,t,n),qs(a,t,n))}function O0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function zf(t,n){O0(t,n),(t=t.alternate)&&O0(t,n)}function P0(t){if(t.tag===13){var n=Cr(t,67108864);n!==null&&Xn(n,t,67108864),zf(t,67108864)}}var Hl=!0;function L1(t,n,a,s){var c=z.T;z.T=null;var f=W.p;try{W.p=2,Bf(t,n,a,s)}finally{W.p=f,z.T=c}}function N1(t,n,a,s){var c=z.T;z.T=null;var f=W.p;try{W.p=8,Bf(t,n,a,s)}finally{W.p=f,z.T=c}}function Bf(t,n,a,s){if(Hl){var c=If(s);if(c===null)Tf(t,n,s,Gl,a),B0(t,s);else if(P1(c,t,n,a,s))s.stopPropagation();else if(B0(t,s),n&4&&-1<O1.indexOf(t)){for(;c!==null;){var f=ea(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Wt(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var P=1<<31-Ht(x);T.entanglements[1]|=P,x&=~P}xi(f),(Ce&6)===0&&(Tl=ue()+500,co(0))}}break;case 13:T=Cr(f,2),T!==null&&Xn(T,f,2),Al(),zf(f,2)}if(f=If(s),f===null&&Tf(t,n,s,Gl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Tf(t,n,s,null,a)}}function If(t){return t=Vc(t),Ff(t)}var Gl=null;function Ff(t){if(Gl=null,t=ta(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gl=t,null}function z0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($t()){case ee:return 2;case O:return 8;case E:case w:return 32;case Q:return 268435456;default:return 32}default:return 32}}var Hf=!1,Sa=null,ya=null,Ma=null,vo=new Map,xo=new Map,Ea=[],O1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B0(t,n){switch(t){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function So(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ea(n),n!==null&&P0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function P1(t,n,a,s,c){switch(n){case"focusin":return Sa=So(Sa,t,n,a,s,c),!0;case"dragenter":return ya=So(ya,t,n,a,s,c),!0;case"mouseover":return Ma=So(Ma,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return vo.set(f,So(vo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,xo.set(f,So(xo.get(f)||null,t,n,a,s,c)),!0}return!1}function I0(t){var n=ta(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,jn(t.priority,function(){if(a.tag===13){var s=kn();s=je(s);var c=Cr(a,s);c!==null&&Xn(c,a,s),zf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=If(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Gc=s,a.target.dispatchEvent(s),Gc=null}else return n=ea(a),n!==null&&P0(n),t.blockedOn=a,!1;n.shift()}return!0}function F0(t,n,a){Vl(t)&&a.delete(n)}function z1(){Hf=!1,Sa!==null&&Vl(Sa)&&(Sa=null),ya!==null&&Vl(ya)&&(ya=null),Ma!==null&&Vl(Ma)&&(Ma=null),vo.forEach(F0),xo.forEach(F0)}function kl(t,n){t.blockedOn===n&&(t.blockedOn=null,Hf||(Hf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,z1)))}var Xl=null;function H0(t){Xl!==t&&(Xl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xl===t&&(Xl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Ff(s||a)===null)continue;break}var f=ea(a);f!==null&&(t.splice(n,3),n-=3,Iu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function yo(t){function n(P){return kl(P,t)}Sa!==null&&kl(Sa,t),ya!==null&&kl(ya,t),Ma!==null&&kl(Ma,t),vo.forEach(n),xo.forEach(n);for(var a=0;a<Ea.length;a++){var s=Ea[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)I0(a),a.blockedOn===null&&Ea.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[cn]||null;if(typeof f=="function")x||H0(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[cn]||null)T=x.formAction;else if(Ff(c)!==null)continue}else T=x.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),H0(a)}}}function Gf(t){this._internalRoot=t}Wl.prototype.render=Gf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=kn();N0(a,s,t,n,null,null)},Wl.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;N0(t.current,2,null,t,null,null),Al(),n[Ti]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Yn();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ea.length&&n!==0&&n<Ea[a].priority;a++);Ea.splice(a,0,t),a===0&&I0(t)}};var G0=e.version;if(G0!=="19.1.0")throw Error(r(527,G0,"19.1.0"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var B1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{wt=ql.inject(B1),Mt=ql}catch{}}return Eo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=im,f=am,x=rm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=U0(t,1,!1,null,null,a,s,c,f,x,T,null),t[Ti]=n.current,Ef(t),new Gf(n)},Eo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=im,x=am,T=rm,P=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=U0(t,1,!0,n,a??null,s,c,f,x,T,P,tt),n.context=L0(null),a=n.current,s=kn(),s=je(s),c=sa(s),c.callback=null,oa(a,c,s),a=s,n.current.lanes=a,Ct(n,a),xi(n),t[Ti]=n.current,Ef(t),new Wl(n)},Eo.version="19.1.0",Eo}var Q0;function j1(){if(Q0)return Xf.exports;Q0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xf.exports=Y1(),Xf.exports}var Z1=j1();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="167",K1=0,J0=1,Q1=2,e_=1,J1=2,Wi=3,Oa=0,On=1,qi=2,La=0,_s=1,Eh=2,$0=3,tg=4,$1=5,ur=100,tx=101,ex=102,nx=103,ix=104,ax=200,rx=201,sx=202,ox=203,Th=204,bh=205,lx=206,cx=207,ux=208,fx=209,hx=210,dx=211,px=212,mx=213,gx=214,_x=0,vx=1,xx=2,bc=3,Sx=4,yx=5,Mx=6,Ex=7,n_=0,Tx=1,bx=2,Na=0,Ax=1,Rx=2,Cx=3,wx=4,Dx=5,Ux=6,Lx=7,i_=300,Ss=301,ys=302,Ah=303,Rh=304,zc=306,Ch=1e3,di=1001,wh=1002,Nn=1003,Nx=1004,Yl=1005,Tn=1006,jf=1007,hr=1008,Zi=1009,a_=1010,r_=1011,No=1012,sd=1013,mr=1014,Ei=1015,bs=1016,od=1017,ld=1018,Ms=1020,s_=35902,o_=1021,l_=1022,ii=1023,c_=1024,u_=1025,vs=1026,Es=1027,f_=1028,cd=1029,h_=1030,ud=1031,fd=1033,xc=33776,Sc=33777,yc=33778,Mc=33779,Dh=35840,Uh=35841,Lh=35842,Nh=35843,Oh=36196,Ph=37492,zh=37496,Bh=37808,Ih=37809,Fh=37810,Hh=37811,Gh=37812,Vh=37813,kh=37814,Xh=37815,Wh=37816,qh=37817,Yh=37818,jh=37819,Zh=37820,Kh=37821,Ec=36492,Qh=36494,Jh=36495,d_=36283,$h=36284,td=36285,ed=36286,Ox=3200,Px=3201,zx=0,Bx=1,Ua="",Si="srgb",za="srgb-linear",hd="display-p3",Bc="display-p3-linear",Ac="linear",Fe="srgb",Rc="rec709",Cc="p3",$r=7680,eg=519,Ix=512,Fx=513,Hx=514,p_=515,Gx=516,Vx=517,kx=518,Xx=519,ng=35044,ig="300 es",Yi=2e3,wc=2001;class As{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,nd=180/Math.PI;function Oo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[o&255]+xn[o>>8&255]+xn[o>>16&255]+xn[o>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[i&63|128]+xn[i>>8&255]+"-"+xn[i>>16&255]+xn[i>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function Ln(o,e,i){return Math.max(e,Math.min(i,o))}function Wx(o,e){return(o%e+e)%e}function Kf(o,e,i){return(1-i)*o+i*e}function To(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Dn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ne{constructor(e=0,i=0){ne.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(e,i,r,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],y=r[7],S=r[2],M=r[5],b=r[8],R=l[0],v=l[3],_=l[6],B=l[1],U=l[4],N=l[7],Z=l[2],H=l[5],F=l[8];return u[0]=h*R+d*B+m*Z,u[3]=h*v+d*U+m*H,u[6]=h*_+d*N+m*F,u[1]=p*R+g*B+y*Z,u[4]=p*v+g*U+y*H,u[7]=p*_+g*N+y*F,u[2]=S*R+M*B+b*Z,u[5]=S*v+M*U+b*H,u[8]=S*_+M*N+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],y=g*h-d*p,S=d*m-g*u,M=p*u-h*m,b=i*y+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=y*R,e[1]=(l*p-g*r)*R,e[2]=(d*r-l*h)*R,e[3]=S*R,e[4]=(g*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Qf.makeScale(e,i)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new le;function m_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qx(){const o=Dc("canvas");return o.style.display="block",o}const ag={};function Lo(o){o in ag||(ag[o]=!0,console.warn(o))}function Yx(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const rg=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sg=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[za]:{transfer:Ac,primaries:Rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[Si]:{transfer:Fe,primaries:Rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Bc]:{transfer:Ac,primaries:Cc,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(sg),fromReference:o=>o.applyMatrix3(rg)},[hd]:{transfer:Fe,primaries:Cc,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(sg),fromReference:o=>o.applyMatrix3(rg).convertLinearToSRGB()}},jx=new Set([za,Bc]),be={enabled:!0,_workingColorSpace:za,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!jx.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=bo[e].toReference,l=bo[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return bo[o].primaries},getTransfer:function(o){return o===Ua?Ac:bo[o].transfer},getLuminanceCoefficients:function(o,e=this._workingColorSpace){return o.fromArray(bo[e].luminanceCoefficients)}};function xs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Jf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ts;class Zx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ts===void 0&&(ts=Dc("canvas")),ts.width=e.width,ts.height=e.height;const r=ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ts}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Dc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=xs(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xs(i[r]/255)*255):i[r]=xs(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kx=0;class g_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push($f(l[h].image)):u.push($f(l[h]))}else u=$f(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function $f(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Zx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qx=0;class bn extends As{constructor(e=bn.DEFAULT_IMAGE,i=bn.DEFAULT_MAPPING,r=di,l=di,u=Tn,h=hr,d=ii,m=Zi,p=bn.DEFAULT_ANISOTROPY,g=Ua){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Oo(),this.name="",this.source=new g_(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=i_;bn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],y=m[8],S=m[1],M=m[5],b=m[9],R=m[2],v=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(y-R)<.01&&Math.abs(b-v)<.01){if(Math.abs(g+S)<.1&&Math.abs(y+R)<.1&&Math.abs(b+v)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,N=(M+1)/2,Z=(_+1)/2,H=(g+S)/4,F=(y+R)/4,et=(b+v)/4;return U>N&&U>Z?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=H/r,u=F/r):N>Z?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=H/l,u=et/l):Z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(Z),r=F/u,l=et/u),this.set(r,l,u,i),this}let B=Math.sqrt((v-b)*(v-b)+(y-R)*(y-R)+(S-g)*(S-g));return Math.abs(B)<.001&&(B=1),this.x=(v-b)/B,this.y=(y-R)/B,this.z=(S-g)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jx extends As{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new bn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new g_(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pa extends Jx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class __ extends bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $x extends bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],y=r[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=y;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(y!==R||m!==S||p!==M||g!==b){let v=1-d;const _=m*S+p*M+g*b+y*R,B=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const Z=Math.sqrt(U),H=Math.atan2(Z,_*B);v=Math.sin(v*H)/Z,d=Math.sin(d*H)/Z}const N=d*B;if(m=m*v+S*N,p=p*v+M*N,g=g*v+b*N,y=y*v+R*N,v===1-d){const Z=1/Math.sqrt(m*m+p*p+g*g+y*y);m*=Z,p*=Z,g*=Z,y*=Z}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],y=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+g*y+m*M-p*S,e[i+1]=m*b+g*S+p*y-d*M,e[i+2]=p*b+g*M+d*S-m*y,e[i+3]=g*b-d*y-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),y=d(u/2),S=m(r/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*g*y+p*M*b,this._y=p*M*y-S*g*b,this._z=p*g*b+S*M*y,this._w=p*g*y-S*M*b;break;case"YXZ":this._x=S*g*y+p*M*b,this._y=p*M*y-S*g*b,this._z=p*g*b-S*M*y,this._w=p*g*y+S*M*b;break;case"ZXY":this._x=S*g*y-p*M*b,this._y=p*M*y+S*g*b,this._z=p*g*b+S*M*y,this._w=p*g*y-S*M*b;break;case"ZYX":this._x=S*g*y-p*M*b,this._y=p*M*y+S*g*b,this._z=p*g*b-S*M*y,this._w=p*g*y+S*M*b;break;case"YZX":this._x=S*g*y+p*M*b,this._y=p*M*y+S*g*b,this._z=p*g*b-S*M*y,this._w=p*g*y-S*M*b;break;case"XZY":this._x=S*g*y-p*M*b,this._y=p*M*y-S*g*b,this._z=p*g*b+S*M*y,this._w=p*g*y+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],y=i[10],S=r+d+y;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>y){const M=2*Math.sqrt(1+r-d-y);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>y){const M=2*Math.sqrt(1+d-r-y);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+y-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),y=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*y+this._w*S,this._x=r*y+this._x*S,this._y=l*y+this._y*S,this._z=u*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(og.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(og.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),y=2*(u*r-h*i);return this.x=i+m*p+h*y-d*g,this.y=r+m*g+d*p-u*y,this.z=l+m*y+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const th=new ot,og=new Po;class zo{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ci):ci.fromBufferAttribute(u,h),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jl.copy(r.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Zl.subVectors(this.max,Ao),es.subVectors(e.a,Ao),ns.subVectors(e.b,Ao),is.subVectors(e.c,Ao),ba.subVectors(ns,es),Aa.subVectors(is,ns),nr.subVectors(es,is);let i=[0,-ba.z,ba.y,0,-Aa.z,Aa.y,0,-nr.z,nr.y,ba.z,0,-ba.x,Aa.z,0,-Aa.x,nr.z,0,-nr.x,-ba.y,ba.x,0,-Aa.y,Aa.x,0,-nr.y,nr.x,0];return!eh(i,es,ns,is,Zl)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,es,ns,is,Zl))?!1:(Kl.crossVectors(ba,Aa),i=[Kl.x,Kl.y,Kl.z],eh(i,es,ns,is,Zl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],ci=new ot,jl=new zo,es=new ot,ns=new ot,is=new ot,ba=new ot,Aa=new ot,nr=new ot,Ao=new ot,Zl=new ot,Kl=new ot,ir=new ot;function eh(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){ir.fromArray(o,u);const d=l.x*Math.abs(ir.x)+l.y*Math.abs(ir.y)+l.z*Math.abs(ir.z),m=e.dot(ir),p=i.dot(ir),g=r.dot(ir);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const tS=new zo,Ro=new ot,nh=new ot;class Ic{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):tS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(nh)),this.expandByPoint(Ro.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new ot,ih=new ot,Ql=new ot,Ra=new ot,ah=new ot,Jl=new ot,rh=new ot;class v_{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Gi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,i),Gi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ih.copy(e).add(i).multiplyScalar(.5),Ql.copy(i).sub(e).normalize(),Ra.copy(this.origin).sub(ih);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Ql),d=Ra.dot(this.direction),m=-Ra.dot(Ql),p=Ra.lengthSq(),g=Math.abs(1-h*h);let y,S,M,b;if(g>0)if(y=h*m-d,S=h*d-m,b=u*g,y>=0)if(S>=-b)if(S<=b){const R=1/g;y*=R,S*=R,M=y*(y+h*S+2*d)+S*(h*y+S+2*m)+p}else S=u,y=Math.max(0,-(h*S+d)),M=-y*y+S*(S+2*m)+p;else S=-u,y=Math.max(0,-(h*S+d)),M=-y*y+S*(S+2*m)+p;else S<=-b?(y=Math.max(0,-(-h*u+d)),S=y>0?-u:Math.min(Math.max(-u,-m),u),M=-y*y+S*(S+2*m)+p):S<=b?(y=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(y=Math.max(0,-(h*u+d)),S=y>0?u:Math.min(Math.max(-u,-m),u),M=-y*y+S*(S+2*m)+p);else S=h>0?-u:u,y=Math.max(0,-(h*S+d)),M=-y*y+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(ih).addScaledVector(Ql,S),M}intersectSphere(e,i){Gi.subVectors(e.center,this.origin);const r=Gi.dot(this.direction),l=Gi.dot(Gi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),y>=0?(d=(e.min.z-S.z)*y,m=(e.max.z-S.z)*y):(d=(e.max.z-S.z)*y,m=(e.min.z-S.z)*y),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,i,r,l,u){ah.subVectors(i,e),Jl.subVectors(r,e),rh.crossVectors(ah,Jl);let h=this.direction.dot(rh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ra.subVectors(this.origin,e);const m=d*this.direction.dot(Jl.crossVectors(Ra,Jl));if(m<0)return null;const p=d*this.direction.dot(ah.cross(Ra));if(p<0||m+p>h)return null;const g=-d*Ra.dot(rh);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,u,h,d,m,p,g,y,S,M,b,R,v){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,y,S,M,b,R,v)}set(e,i,r,l,u,h,d,m,p,g,y,S,M,b,R,v){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=y,_[14]=S,_[3]=M,_[7]=b,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/as.setFromMatrixColumn(e,0).length(),u=1/as.setFromMatrixColumn(e,1).length(),h=1/as.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const S=h*g,M=h*y,b=d*g,R=d*y;i[0]=m*g,i[4]=-m*y,i[8]=p,i[1]=M+b*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*g,M=m*y,b=p*g,R=p*y;i[0]=S+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*y,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=R+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*g,M=m*y,b=p*g,R=p*y;i[0]=S-R*d,i[4]=-h*y,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*g,M=h*y,b=d*g,R=d*y;i[0]=m*g,i[4]=b*p-M,i[8]=S*p+R,i[1]=m*y,i[5]=R*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=R-S*y,i[8]=b*y+M,i[1]=y,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*y+b,i[10]=S-R*y}else if(e.order==="XZY"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=-y,i[8]=p*g,i[1]=S*y+R,i[5]=h*g,i[9]=M*y-b,i[2]=b*y-M,i[6]=d*g,i[10]=R*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eS,e,nS)}lookAt(e,i,r){const l=this.elements;return Wn.subVectors(e,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ca.crossVectors(r,Wn),Ca.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ca.crossVectors(r,Wn)),Ca.normalize(),$l.crossVectors(Wn,Ca),l[0]=Ca.x,l[4]=$l.x,l[8]=Wn.x,l[1]=Ca.y,l[5]=$l.y,l[9]=Wn.y,l[2]=Ca.z,l[6]=$l.z,l[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],y=r[5],S=r[9],M=r[13],b=r[2],R=r[6],v=r[10],_=r[14],B=r[3],U=r[7],N=r[11],Z=r[15],H=l[0],F=l[4],et=l[8],D=l[12],C=l[1],V=l[5],ct=l[9],it=l[13],gt=l[2],ut=l[6],z=l[10],W=l[14],j=l[3],Et=l[7],L=l[11],$=l[15];return u[0]=h*H+d*C+m*gt+p*j,u[4]=h*F+d*V+m*ut+p*Et,u[8]=h*et+d*ct+m*z+p*L,u[12]=h*D+d*it+m*W+p*$,u[1]=g*H+y*C+S*gt+M*j,u[5]=g*F+y*V+S*ut+M*Et,u[9]=g*et+y*ct+S*z+M*L,u[13]=g*D+y*it+S*W+M*$,u[2]=b*H+R*C+v*gt+_*j,u[6]=b*F+R*V+v*ut+_*Et,u[10]=b*et+R*ct+v*z+_*L,u[14]=b*D+R*it+v*W+_*$,u[3]=B*H+U*C+N*gt+Z*j,u[7]=B*F+U*V+N*ut+Z*Et,u[11]=B*et+U*ct+N*z+Z*L,u[15]=B*D+U*it+N*W+Z*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],y=e[6],S=e[10],M=e[14],b=e[3],R=e[7],v=e[11],_=e[15];return b*(+u*m*y-l*p*y-u*d*S+r*p*S+l*d*M-r*m*M)+R*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*g-u*m*g)+v*(+i*p*y-i*d*M-u*h*y+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*y+i*d*S+l*h*y-r*h*S+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],y=e[9],S=e[10],M=e[11],b=e[12],R=e[13],v=e[14],_=e[15],B=y*v*p-R*S*p+R*m*M-d*v*M-y*m*_+d*S*_,U=b*S*p-g*v*p-b*m*M+h*v*M+g*m*_-h*S*_,N=g*R*p-b*y*p+b*d*M-h*R*M-g*d*_+h*y*_,Z=b*y*m-g*R*m-b*d*S+h*R*S+g*d*v-h*y*v,H=i*B+r*U+l*N+u*Z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return e[0]=B*F,e[1]=(R*S*u-y*v*u-R*l*M+r*v*M+y*l*_-r*S*_)*F,e[2]=(d*v*u-R*m*u+R*l*p-r*v*p-d*l*_+r*m*_)*F,e[3]=(y*m*u-d*S*u-y*l*p+r*S*p+d*l*M-r*m*M)*F,e[4]=U*F,e[5]=(g*v*u-b*S*u+b*l*M-i*v*M-g*l*_+i*S*_)*F,e[6]=(b*m*u-h*v*u-b*l*p+i*v*p+h*l*_-i*m*_)*F,e[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*M+i*m*M)*F,e[8]=N*F,e[9]=(b*y*u-g*R*u-b*r*M+i*R*M+g*r*_-i*y*_)*F,e[10]=(h*R*u-b*d*u+b*r*p-i*R*p-h*r*_+i*d*_)*F,e[11]=(g*d*u-h*y*u-g*r*p+i*y*p+h*r*M-i*d*M)*F,e[12]=Z*F,e[13]=(g*R*l-b*y*l+b*r*S-i*R*S-g*r*v+i*y*v)*F,e[14]=(b*d*l-h*R*l-b*r*m+i*R*m+h*r*v-i*d*v)*F,e[15]=(h*y*l-g*d*l+g*r*m-i*y*m-h*r*S+i*d*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,y=d+d,S=u*p,M=u*g,b=u*y,R=h*g,v=h*y,_=d*y,B=m*p,U=m*g,N=m*y,Z=r.x,H=r.y,F=r.z;return l[0]=(1-(R+_))*Z,l[1]=(M+N)*Z,l[2]=(b-U)*Z,l[3]=0,l[4]=(M-N)*H,l[5]=(1-(S+_))*H,l[6]=(v+B)*H,l[7]=0,l[8]=(b+U)*F,l[9]=(v-B)*F,l[10]=(1-(S+R))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=as.set(l[0],l[1],l[2]).length();const h=as.set(l[4],l[5],l[6]).length(),d=as.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],ui.copy(this);const p=1/u,g=1/h,y=1/d;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=y,ui.elements[9]*=y,ui.elements[10]*=y,i.setFromRotationMatrix(ui),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Yi){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),y=(i+e)/(i-e),S=(r+l)/(r-l);let M,b;if(d===Yi)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===wc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Yi){const m=this.elements,p=1/(i-e),g=1/(r-l),y=1/(h-u),S=(i+e)*p,M=(r+l)*g;let b,R;if(d===Yi)b=(h+u)*y,R=-2*y;else if(d===wc)b=u*y,R=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const as=new ot,ui=new en,eS=new ot(0,0,0),nS=new ot(1,1,1),Ca=new ot,$l=new ot,Wn=new ot,lg=new en,cg=new Po;class Ki{constructor(e=0,i=0,r=0,l=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],y=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ln(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ln(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return cg.setFromEuler(this),this.setFromQuaternion(cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class x_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iS=0;const ug=new ot,rs=new Po,Vi=new en,tc=new ot,Co=new ot,aS=new ot,rS=new Po,fg=new ot(1,0,0),hg=new ot(0,1,0),dg=new ot(0,0,1),pg={type:"added"},sS={type:"removed"},ss={type:"childadded",child:null},sh={type:"childremoved",child:null};class Pn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new ot,i=new Ki,r=new Po,l=new ot(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new le}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return rs.setFromAxisAngle(e,i),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,i){return rs.setFromAxisAngle(e,i),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(fg,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(dg,e)}translateOnAxis(e,i){return ug.copy(e).applyQuaternion(this.quaternion),this.position.add(ug.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(fg,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?tc.copy(e):tc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Co,tc,this.up):Vi.lookAt(tc,Co,this.up),this.quaternion.setFromRotationMatrix(Vi),l&&(Vi.extractRotation(l.matrixWorld),rs.setFromRotationMatrix(Vi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pg),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(sS),sh.child=e,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pg),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,aS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,rS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const y=m[p];u(e.shapes,y)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),y=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Pn.DEFAULT_UP=new ot(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new ot,ki=new ot,oh=new ot,Xi=new ot,os=new ot,ls=new ot,mg=new ot,lh=new ot,ch=new ot,uh=new ot;class Mi{constructor(e=new ot,i=new ot,r=new ot){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),fi.subVectors(e,i),l.cross(fi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){fi.subVectors(l,i),ki.subVectors(r,i),oh.subVectors(e,i);const h=fi.dot(fi),d=fi.dot(ki),m=fi.dot(oh),p=ki.dot(ki),g=ki.dot(oh),y=h*p-d*d;if(y===0)return u.set(0,0,0),null;const S=1/y,M=(p*m-d*g)*S,b=(h*g-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,Xi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Xi.x),m.addScaledVector(h,Xi.y),m.addScaledVector(d,Xi.z),m)}static isFrontFacing(e,i,r,l){return fi.subVectors(r,i),ki.subVectors(e,i),fi.cross(ki).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),fi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;os.subVectors(l,r),ls.subVectors(u,r),lh.subVectors(e,r);const m=os.dot(lh),p=ls.dot(lh);if(m<=0&&p<=0)return i.copy(r);ch.subVectors(e,l);const g=os.dot(ch),y=ls.dot(ch);if(g>=0&&y<=g)return i.copy(l);const S=m*y-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(os,h);uh.subVectors(e,u);const M=os.dot(uh),b=ls.dot(uh);if(b>=0&&M<=b)return i.copy(u);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(ls,d);const v=g*b-M*y;if(v<=0&&y-g>=0&&M-b>=0)return mg.subVectors(u,l),d=(y-g)/(y-g+(M-b)),i.copy(l).addScaledVector(mg,d);const _=1/(v+R+S);return h=R*_,d=S*_,i.copy(r).addScaledVector(os,h).addScaledVector(ls,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wa={h:0,s:0,l:0},ec={h:0,s:0,l:0};function fh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=Wx(e,1),i=Ln(i,0,1),r=Ln(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=fh(h,u,e+1/3),this.g=fh(h,u,e),this.b=fh(h,u,e-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(e,i=Si){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const r=S_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=Jf(e.r),this.g=Jf(e.g),this.b=Jf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return be.fromWorkingColorSpace(Sn.copy(this),e),Math.round(Ln(Sn.r*255,0,255))*65536+Math.round(Ln(Sn.g*255,0,255))*256+Math.round(Ln(Sn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.fromWorkingColorSpace(Sn.copy(this),i);const r=Sn.r,l=Sn.g,u=Sn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const y=h-d;switch(p=g<=.5?y/(h+d):y/(2-h-d),h){case r:m=(l-u)/y+(l<u?6:0);break;case l:m=(u-r)/y+2;break;case u:m=(r-l)/y+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=be.workingColorSpace){return be.fromWorkingColorSpace(Sn.copy(this),i),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Si){be.fromWorkingColorSpace(Sn.copy(this),e);const i=Sn.r,r=Sn.g,l=Sn.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(wa),this.setHSL(wa.h+e,wa.s+i,wa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(wa),e.getHSL(ec);const r=Kf(wa.h,ec.h,i),l=Kf(wa.s,ec.s,i),u=Kf(wa.l,ec.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Te;Te.NAMES=S_;let oS=0;class Bo extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=_s,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=bh,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=bc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(r.blending=this.blending),this.side!==Oa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Th&&(r.blendSrc=this.blendSrc),this.blendDst!==bh&&(r.blendDst=this.blendDst),this.blendEquation!==ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class y_ extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=n_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new ot,nc=new ne;class pi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=ng,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Lo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)nc.fromBufferAttribute(this,i),nc.applyMatrix3(e),this.setXY(i,nc.x,nc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix4(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyNormalMatrix(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.transformDirection(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Dn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(e,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(e,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(e,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array),l=Dn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array),l=Dn(l,this.array),u=Dn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ng&&(e.usage=this.usage),e}}class M_ extends pi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class E_ extends pi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ji extends pi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let lS=0;const ni=new en,hh=new Pn,cs=new ot,qn=new zo,wo=new zo,dn=new ot;class Ji extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m_(e)?E_:M_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,i,r){return ni.makeTranslation(e,i,r),this.applyMatrix4(ni),this}scale(e,i,r){return ni.makeScale(e,i,r),this.applyMatrix4(ni),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new ji(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];qn.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];wo.setFromBufferAttribute(d),this.morphTargetsRelative?(dn.addVectors(qn.min,wo.min),qn.expandByPoint(dn),dn.addVectors(qn.max,wo.max),qn.expandByPoint(dn)):(qn.expandByPoint(wo.min),qn.expandByPoint(wo.max))}qn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)dn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(dn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)dn.fromBufferAttribute(d,p),m&&(cs.fromBufferAttribute(e,p),dn.add(cs)),l=Math.max(l,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let et=0;et<r.count;et++)d[et]=new ot,m[et]=new ot;const p=new ot,g=new ot,y=new ot,S=new ne,M=new ne,b=new ne,R=new ot,v=new ot;function _(et,D,C){p.fromBufferAttribute(r,et),g.fromBufferAttribute(r,D),y.fromBufferAttribute(r,C),S.fromBufferAttribute(u,et),M.fromBufferAttribute(u,D),b.fromBufferAttribute(u,C),g.sub(p),y.sub(p),M.sub(S),b.sub(S);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(y,-M.y).multiplyScalar(V),v.copy(y).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(V),d[et].add(R),d[D].add(R),d[C].add(R),m[et].add(v),m[D].add(v),m[C].add(v))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let et=0,D=B.length;et<D;++et){const C=B[et],V=C.start,ct=C.count;for(let it=V,gt=V+ct;it<gt;it+=3)_(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const U=new ot,N=new ot,Z=new ot,H=new ot;function F(et){Z.fromBufferAttribute(l,et),H.copy(Z);const D=d[et];U.copy(D),U.sub(Z.multiplyScalar(Z.dot(D))).normalize(),N.crossVectors(H,D);const V=N.dot(m[et])<0?-1:1;h.setXYZW(et,U.x,U.y,U.z,V)}for(let et=0,D=B.length;et<D;++et){const C=B[et],V=C.start,ct=C.count;for(let it=V,gt=V+ct;it<gt;it+=3)F(e.getX(it+0)),F(e.getX(it+1)),F(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new pi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new ot,u=new ot,h=new ot,d=new ot,m=new ot,p=new ot,g=new ot,y=new ot;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),R=e.getX(S+1),v=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,v),g.subVectors(h,u),y.subVectors(l,u),g.cross(y),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,v),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),y.subVectors(l,u),g.cross(y),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)dn.fromBufferAttribute(e,i),dn.normalize(),e.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,y=d.normalized,S=new p.constructor(m.length*g);let M=0,b=0;for(let R=0,v=m.length;R<v;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let _=0;_<g;_++)S[b++]=p[M++]}return new pi(S,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ji,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,y=p.length;g<y;g++){const S=p[g],M=e(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let y=0,S=p.length;y<S;y++){const M=p[y];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],y=u[p];for(let S=0,M=y.length;S<M;S++)g.push(y[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const y=h[p];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gg=new en,ar=new v_,ic=new Ic,_g=new ot,us=new ot,fs=new ot,hs=new ot,dh=new ot,ac=new ot,rc=new ne,sc=new ne,oc=new ne,vg=new ot,xg=new ot,Sg=new ot,lc=new ot,cc=new ot;class ai extends Pn{constructor(e=new Ji,i=new y_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){ac.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],y=u[m];g!==0&&(dh.fromBufferAttribute(y,e),h?ac.addScaledVector(dh,g):ac.addScaledVector(dh.sub(i),g))}i.add(ac)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ic.copy(r.boundingSphere),ic.applyMatrix4(u),ar.copy(e.ray).recast(e.near),!(ic.containsPoint(ar.origin)===!1&&(ar.intersectSphere(ic,_g)===null||ar.origin.distanceToSquared(_g)>(e.far-e.near)**2))&&(gg.copy(u).invert(),ar.copy(e.ray).applyMatrix4(gg),!(r.boundingBox!==null&&ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ar)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const v=S[b],_=h[v.materialIndex],B=Math.max(v.start,M.start),U=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let N=B,Z=U;N<Z;N+=3){const H=d.getX(N),F=d.getX(N+1),et=d.getX(N+2);l=uc(this,_,e,r,p,g,y,H,F,et),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let v=b,_=R;v<_;v+=3){const B=d.getX(v),U=d.getX(v+1),N=d.getX(v+2);l=uc(this,h,e,r,p,g,y,B,U,N),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const v=S[b],_=h[v.materialIndex],B=Math.max(v.start,M.start),U=Math.min(m.count,Math.min(v.start+v.count,M.start+M.count));for(let N=B,Z=U;N<Z;N+=3){const H=N,F=N+1,et=N+2;l=uc(this,_,e,r,p,g,y,H,F,et),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let v=b,_=R;v<_;v+=3){const B=v,U=v+1,N=v+2;l=uc(this,h,e,r,p,g,y,B,U,N),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function cS(o,e,i,r,l,u,h,d){let m;if(e.side===On?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Oa,d),m===null)return null;cc.copy(d),cc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(cc);return p<i.near||p>i.far?null:{distance:p,point:cc.clone(),object:o}}function uc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,us),o.getVertexPosition(m,fs),o.getVertexPosition(p,hs);const g=cS(o,e,i,r,us,fs,hs,lc);if(g){l&&(rc.fromBufferAttribute(l,d),sc.fromBufferAttribute(l,m),oc.fromBufferAttribute(l,p),g.uv=Mi.getInterpolation(lc,us,fs,hs,rc,sc,oc,new ne)),u&&(rc.fromBufferAttribute(u,d),sc.fromBufferAttribute(u,m),oc.fromBufferAttribute(u,p),g.uv1=Mi.getInterpolation(lc,us,fs,hs,rc,sc,oc,new ne)),h&&(vg.fromBufferAttribute(h,d),xg.fromBufferAttribute(h,m),Sg.fromBufferAttribute(h,p),g.normal=Mi.getInterpolation(lc,us,fs,hs,vg,xg,Sg,new ot),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new ot,materialIndex:0};Mi.getNormal(us,fs,hs,y.normal),g.face=y}return g}class Io extends Ji{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],y=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ji(p,3)),this.setAttribute("normal",new ji(g,3)),this.setAttribute("uv",new ji(y,2));function b(R,v,_,B,U,N,Z,H,F,et,D){const C=N/F,V=Z/et,ct=N/2,it=Z/2,gt=H/2,ut=F+1,z=et+1;let W=0,j=0;const Et=new ot;for(let L=0;L<z;L++){const $=L*V-it;for(let St=0;St<ut;St++){const yt=St*C-ct;Et[R]=yt*B,Et[v]=$*U,Et[_]=gt,p.push(Et.x,Et.y,Et.z),Et[R]=0,Et[v]=0,Et[_]=H>0?1:-1,g.push(Et.x,Et.y,Et.z),y.push(St/F),y.push(1-L/et),W+=1}}for(let L=0;L<et;L++)for(let $=0;$<F;$++){const St=S+$+ut*L,yt=S+$+ut*(L+1),K=S+($+1)+ut*(L+1),dt=S+($+1)+ut*L;m.push(St,yt,dt),m.push(yt,K,dt),j+=6}d.addGroup(M,j,D),M+=j,S+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function En(o){const e={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)e[l]=r[l]}return e}function uS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function T_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const fS={clone:Ts,merge:En};var hS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hS,this.fragmentShader=dS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=uS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Uc extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Yi}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Da=new ot,yg=new ne,Mg=new ne;class hi extends Uc{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Da.x,Da.y).multiplyScalar(-e/Da.z),Da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Da.x,Da.y).multiplyScalar(-e/Da.z)}getViewSize(e,i){return this.getViewBounds(e,yg,Mg),i.subVectors(Mg,yg)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Zf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ds=-90,ps=1;class pS extends Pn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(ds,ps,e,i);l.layers=this.layers,this.add(l);const u=new hi(ds,ps,e,i);u.layers=this.layers,this.add(u);const h=new hi(ds,ps,e,i);h.layers=this.layers,this.add(h);const d=new hi(ds,ps,e,i);d.layers=this.layers,this.add(d);const m=new hi(ds,ps,e,i);m.layers=this.layers,this.add(m);const p=new hi(ds,ps,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(y,S,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class b_ extends bn{constructor(e,i,r,l,u,h,d,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:Ss,super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mS extends Pa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new b_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Tn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Io(5,5,5),u=new Qi({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:La});u.uniforms.tEquirect.value=i;const h=new ai(l,u),d=i.minFilter;return i.minFilter===hr&&(i.minFilter=Tn),new pS(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}const ph=new ot,gS=new ot,_S=new le;class lr{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ph.subVectors(r,i).cross(gS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(ph),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||_S.getNormalMatrix(e),l=this.coplanarPoint(ph).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Ic,fc=new ot;class A_{constructor(e=new lr,i=new lr,r=new lr,l=new lr,u=new lr,h=new lr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Yi){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],y=l[6],S=l[7],M=l[8],b=l[9],R=l[10],v=l[11],_=l[12],B=l[13],U=l[14],N=l[15];if(r[0].setComponents(m-u,S-p,v-M,N-_).normalize(),r[1].setComponents(m+u,S+p,v+M,N+_).normalize(),r[2].setComponents(m+h,S+g,v+b,N+B).normalize(),r[3].setComponents(m-h,S-g,v-b,N-B).normalize(),r[4].setComponents(m-d,S-y,v-R,N-U).normalize(),i===Yi)r[5].setComponents(m+d,S+y,v+R,N+U).normalize();else if(i===wc)r[5].setComponents(d,y,R,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(fc.x=l.normal.x>0?e.max.x:e.min.x,fc.y=l.normal.y>0?e.max.y:e.min.y,fc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function R_(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function vS(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,y=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,m,p){const g=m.array,y=m._updateRange,S=m.updateRanges;if(o.bindBuffer(p,d),y.count===-1&&S.length===0&&o.bufferSubData(p,0,g),S.length!==0){for(let M=0,b=S.length;M<b;M++){const R=S[M];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}y.count!==-1&&(o.bufferSubData(p,y.offset*g.BYTES_PER_ELEMENT,g,y.offset,y.count),y.count=-1),m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}class pr extends Ji{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,y=e/d,S=i/m,M=[],b=[],R=[],v=[];for(let _=0;_<g;_++){const B=_*S-h;for(let U=0;U<p;U++){const N=U*y-u;b.push(N,-B,0),R.push(0,0,1),v.push(U/d),v.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const U=B+p*_,N=B+p*(_+1),Z=B+1+p*(_+1),H=B+1+p*_;M.push(U,N,H),M.push(N,Z,H)}this.setIndex(M),this.setAttribute("position",new ji(b,3)),this.setAttribute("normal",new ji(R,3)),this.setAttribute("uv",new ji(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.widthSegments,e.heightSegments)}}var xS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ES=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,CS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,US=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,VS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZS="gl_FragColor = linearToOutputTexel( gl_FragColor );",KS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$S=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,j2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,by=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ay=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ry=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Py=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,By=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ky=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:xS,alphahash_pars_fragment:SS,alphamap_fragment:yS,alphamap_pars_fragment:MS,alphatest_fragment:ES,alphatest_pars_fragment:TS,aomap_fragment:bS,aomap_pars_fragment:AS,batching_pars_vertex:RS,batching_vertex:CS,begin_vertex:wS,beginnormal_vertex:DS,bsdfs:US,iridescence_fragment:LS,bumpmap_pars_fragment:NS,clipping_planes_fragment:OS,clipping_planes_pars_fragment:PS,clipping_planes_pars_vertex:zS,clipping_planes_vertex:BS,color_fragment:IS,color_pars_fragment:FS,color_pars_vertex:HS,color_vertex:GS,common:VS,cube_uv_reflection_fragment:kS,defaultnormal_vertex:XS,displacementmap_pars_vertex:WS,displacementmap_vertex:qS,emissivemap_fragment:YS,emissivemap_pars_fragment:jS,colorspace_fragment:ZS,colorspace_pars_fragment:KS,envmap_fragment:QS,envmap_common_pars_fragment:JS,envmap_pars_fragment:$S,envmap_pars_vertex:t2,envmap_physical_pars_fragment:f2,envmap_vertex:e2,fog_vertex:n2,fog_pars_vertex:i2,fog_fragment:a2,fog_pars_fragment:r2,gradientmap_pars_fragment:s2,lightmap_pars_fragment:o2,lights_lambert_fragment:l2,lights_lambert_pars_fragment:c2,lights_pars_begin:u2,lights_toon_fragment:h2,lights_toon_pars_fragment:d2,lights_phong_fragment:p2,lights_phong_pars_fragment:m2,lights_physical_fragment:g2,lights_physical_pars_fragment:_2,lights_fragment_begin:v2,lights_fragment_maps:x2,lights_fragment_end:S2,logdepthbuf_fragment:y2,logdepthbuf_pars_fragment:M2,logdepthbuf_pars_vertex:E2,logdepthbuf_vertex:T2,map_fragment:b2,map_pars_fragment:A2,map_particle_fragment:R2,map_particle_pars_fragment:C2,metalnessmap_fragment:w2,metalnessmap_pars_fragment:D2,morphinstance_vertex:U2,morphcolor_vertex:L2,morphnormal_vertex:N2,morphtarget_pars_vertex:O2,morphtarget_vertex:P2,normal_fragment_begin:z2,normal_fragment_maps:B2,normal_pars_fragment:I2,normal_pars_vertex:F2,normal_vertex:H2,normalmap_pars_fragment:G2,clearcoat_normal_fragment_begin:V2,clearcoat_normal_fragment_maps:k2,clearcoat_pars_fragment:X2,iridescence_pars_fragment:W2,opaque_fragment:q2,packing:Y2,premultiplied_alpha_fragment:j2,project_vertex:Z2,dithering_fragment:K2,dithering_pars_fragment:Q2,roughnessmap_fragment:J2,roughnessmap_pars_fragment:$2,shadowmap_pars_fragment:ty,shadowmap_pars_vertex:ey,shadowmap_vertex:ny,shadowmask_pars_fragment:iy,skinbase_vertex:ay,skinning_pars_vertex:ry,skinning_vertex:sy,skinnormal_vertex:oy,specularmap_fragment:ly,specularmap_pars_fragment:cy,tonemapping_fragment:uy,tonemapping_pars_fragment:fy,transmission_fragment:hy,transmission_pars_fragment:dy,uv_pars_fragment:py,uv_pars_vertex:my,uv_vertex:gy,worldpos_vertex:_y,background_vert:vy,background_frag:xy,backgroundCube_vert:Sy,backgroundCube_frag:yy,cube_vert:My,cube_frag:Ey,depth_vert:Ty,depth_frag:by,distanceRGBA_vert:Ay,distanceRGBA_frag:Ry,equirect_vert:Cy,equirect_frag:wy,linedashed_vert:Dy,linedashed_frag:Uy,meshbasic_vert:Ly,meshbasic_frag:Ny,meshlambert_vert:Oy,meshlambert_frag:Py,meshmatcap_vert:zy,meshmatcap_frag:By,meshnormal_vert:Iy,meshnormal_frag:Fy,meshphong_vert:Hy,meshphong_frag:Gy,meshphysical_vert:Vy,meshphysical_frag:ky,meshtoon_vert:Xy,meshtoon_frag:Wy,points_vert:qy,points_frag:Yy,shadow_vert:jy,shadow_frag:Zy,sprite_vert:Ky,sprite_frag:Qy},Ut={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},yi={basic:{uniforms:En([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:En([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:En([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:En([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:En([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:En([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:En([Ut.points,Ut.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:En([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:En([Ut.common,Ut.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:En([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:En([Ut.sprite,Ut.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:En([Ut.common,Ut.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:En([Ut.lights,Ut.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};yi.physical={uniforms:En([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const hc={r:0,b:0,g:0},sr=new Ki,Jy=new en;function $y(o,e,i,r,l,u,h){const d=new Te(0);let m=u===!0?0:1,p,g,y=null,S=0,M=null;function b(B){let U=B.isScene===!0?B.background:null;return U&&U.isTexture&&(U=(B.backgroundBlurriness>0?i:e).get(U)),U}function R(B){let U=!1;const N=b(B);N===null?_(d,m):N&&N.isColor&&(_(N,1),U=!0);const Z=o.xr.getEnvironmentBlendMode();Z==="additive"?r.buffers.color.setClear(0,0,0,1,h):Z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function v(B,U){const N=b(U);N&&(N.isCubeTexture||N.mapping===zc)?(g===void 0&&(g=new ai(new Io(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Ts(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(Z,H,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),sr.copy(U.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(sr)),g.material.toneMapped=be.getTransfer(N.colorSpace)!==Fe,(y!==N||S!==N.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,y=N,S=N.version,M=o.toneMapping),g.layers.enableAll(),B.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new ai(new pr(2,2),new Qi({name:"BackgroundMaterial",uniforms:Ts(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=be.getTransfer(N.colorSpace)!==Fe,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(y!==N||S!==N.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,y=N,S=N.version,M=o.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function _(B,U){B.getRGB(hc,T_(o)),r.buffers.color.setClear(hc.r,hc.g,hc.b,U,h)}return{getClearColor:function(){return d},setClearColor:function(B,U=1){d.set(B),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(B){m=B,_(d,m)},render:R,addToRenderList:v}}function tM(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(C,V,ct,it,gt){let ut=!1;const z=y(it,ct,V);u!==z&&(u=z,p(u.object)),ut=M(C,it,ct,gt),ut&&b(C,it,ct,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,N(C,V,ct,it),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function y(C,V,ct){const it=ct.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let ut=gt[V.id];ut===void 0&&(ut={},gt[V.id]=ut);let z=ut[it];return z===void 0&&(z=S(m()),ut[it]=z),z}function S(C){const V=[],ct=[],it=[];for(let gt=0;gt<i;gt++)V[gt]=0,ct[gt]=0,it[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ct,attributeDivisors:it,object:C,attributes:{},index:null}}function M(C,V,ct,it){const gt=u.attributes,ut=V.attributes;let z=0;const W=ct.getAttributes();for(const j in W)if(W[j].location>=0){const L=gt[j];let $=ut[j];if($===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),L===void 0||L.attribute!==$||$&&L.data!==$.data)return!0;z++}return u.attributesNum!==z||u.index!==it}function b(C,V,ct,it){const gt={},ut=V.attributes;let z=0;const W=ct.getAttributes();for(const j in W)if(W[j].location>=0){let L=ut[j];L===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const $={};$.attribute=L,L&&L.data&&($.data=L.data),gt[j]=$,z++}u.attributes=gt,u.attributesNum=z,u.index=it}function R(){const C=u.newAttributes;for(let V=0,ct=C.length;V<ct;V++)C[V]=0}function v(C){_(C,0)}function _(C,V){const ct=u.newAttributes,it=u.enabledAttributes,gt=u.attributeDivisors;ct[C]=1,it[C]===0&&(o.enableVertexAttribArray(C),it[C]=1),gt[C]!==V&&(o.vertexAttribDivisor(C,V),gt[C]=V)}function B(){const C=u.newAttributes,V=u.enabledAttributes;for(let ct=0,it=V.length;ct<it;ct++)V[ct]!==C[ct]&&(o.disableVertexAttribArray(ct),V[ct]=0)}function U(C,V,ct,it,gt,ut,z){z===!0?o.vertexAttribIPointer(C,V,ct,gt,ut):o.vertexAttribPointer(C,V,ct,it,gt,ut)}function N(C,V,ct,it){R();const gt=it.attributes,ut=ct.getAttributes(),z=V.defaultAttributeValues;for(const W in ut){const j=ut[W];if(j.location>=0){let Et=gt[W];if(Et===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor)),Et!==void 0){const L=Et.normalized,$=Et.itemSize,St=e.get(Et);if(St===void 0)continue;const yt=St.buffer,K=St.type,dt=St.bytesPerElement,xt=K===o.INT||K===o.UNSIGNED_INT||Et.gpuType===sd;if(Et.isInterleavedBufferAttribute){const Rt=Et.data,Ot=Rt.stride,Kt=Et.offset;if(Rt.isInstancedInterleavedBuffer){for(let ae=0;ae<j.locationSize;ae++)_(j.location+ae,Rt.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let ae=0;ae<j.locationSize;ae++)v(j.location+ae);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ae=0;ae<j.locationSize;ae++)U(j.location+ae,$/j.locationSize,K,L,Ot*dt,(Kt+$/j.locationSize*ae)*dt,xt)}else{if(Et.isInstancedBufferAttribute){for(let Rt=0;Rt<j.locationSize;Rt++)_(j.location+Rt,Et.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Rt=0;Rt<j.locationSize;Rt++)v(j.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Rt=0;Rt<j.locationSize;Rt++)U(j.location+Rt,$/j.locationSize,K,L,$*dt,$/j.locationSize*Rt*dt,xt)}}else if(z!==void 0){const L=z[W];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(j.location,L);break;case 3:o.vertexAttrib3fv(j.location,L);break;case 4:o.vertexAttrib4fv(j.location,L);break;default:o.vertexAttrib1fv(j.location,L)}}}}B()}function Z(){et();for(const C in r){const V=r[C];for(const ct in V){const it=V[ct];for(const gt in it)g(it[gt].object),delete it[gt];delete V[ct]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const ct in V){const it=V[ct];for(const gt in it)g(it[gt].object),delete it[gt];delete V[ct]}delete r[C.id]}function F(C){for(const V in r){const ct=r[V];if(ct[C.id]===void 0)continue;const it=ct[C.id];for(const gt in it)g(it[gt].object),delete it[gt];delete ct[C.id]}}function et(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:et,resetDefaultState:D,dispose:Z,releaseStatesOfGeometry:H,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:v,disableUnusedAttributes:B}}function eM(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,y){y!==0&&(o.drawArraysInstanced(r,p,g,y),i.update(g,r,y))}function d(p,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,y);let M=0;for(let b=0;b<y;b++)M+=g[b];i.update(M,r,1)}function m(p,g,y,S){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,y);let b=0;for(let R=0;R<y;R++)b+=g[R];for(let R=0;R<S.length;R++)i.update(b,r,S[R])}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function nM(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==ii&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const F=H===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==Zi&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Ei&&!F)}function m(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const y=i.logarithmicDepthBuffer===!0,S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),R=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),_=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,Z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:y,maxTextures:S,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:R,maxAttributes:v,maxVertexUniforms:_,maxVaryings:B,maxFragmentUniforms:U,vertexTextures:N,maxSamples:Z}}function iM(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new lr,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const M=y.length!==0||S||r!==0||l;return l=S,r=y.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,S){i=g(y,S,0)},this.setState=function(y,S,M){const b=y.clippingPlanes,R=y.clipIntersection,v=y.clipShadows,_=o.get(y);if(!l||b===null||b.length===0||u&&!v)u?g(null):p();else{const B=u?0:r,U=B*4;let N=_.clippingState||null;m.value=N,N=g(b,S,U,M);for(let Z=0;Z!==U;++Z)N[Z]=i[Z];_.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,S,M,b){const R=y!==null?y.length:0;let v=null;if(R!==0){if(v=m.value,b!==!0||v===null){const _=M+R*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(v===null||v.length<_)&&(v=new Float32Array(_));for(let U=0,N=M;U!==R;++U,N+=4)h.copy(y[U]).applyMatrix4(B,d),h.normal.toArray(v,N),v[N+3]=h.constant}m.value=v,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}function aM(o){let e=new WeakMap;function i(h,d){return d===Ah?h.mapping=Ss:d===Rh&&(h.mapping=ys),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ah||d===Rh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new mS(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class rM extends Uc{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const gs=4,Eg=[.125,.215,.35,.446,.526,.582],fr=20,mh=new rM,Tg=new Te;let gh=null,_h=0,vh=0,xh=!1;const cr=(1+Math.sqrt(5))/2,ms=1/cr,bg=[new ot(-cr,ms,0),new ot(cr,ms,0),new ot(-ms,0,cr),new ot(ms,0,cr),new ot(0,cr,-ms),new ot(0,cr,ms),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)];class Ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,_h,vh),this._renderer.xr.enabled=xh,e.scissorTest=!1,dc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ss||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:bs,format:ii,colorSpace:za,depthBuffer:!1},l=Rg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rg(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sM(u)),this._blurMaterial=oM(u,e,i)}return l}_compileMaterial(e){const i=new ai(this._lodPlanes[0],e);this._renderer.compile(i,mh)}_sceneToCubeUV(e,i,r,l){const d=new hi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(Tg),g.toneMapping=Na,g.autoClear=!1;const M=new y_({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),b=new ai(new Io,M);let R=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,R=!0):(M.color.copy(Tg),R=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):B===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const U=this._cubeSize;dc(l,B*U,_>2?U:0,U,U),g.setRenderTarget(l),R&&g.render(b,d),g.render(e,d)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=S,g.autoClear=y,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ss||e.mapping===ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ai(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;dc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,mh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=bg[(l-u-1)%bg.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new ai(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*fr-1),R=u/b,v=isFinite(u)?1+Math.floor(g*R):fr;v>fr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${fr}`);const _=[];let B=0;for(let F=0;F<fr;++F){const et=F/R,D=Math.exp(-et*et/2);_.push(D),F===0?B+=D:F<v&&(B+=2*D)}for(let F=0;F<_.length;F++)_[F]=_[F]/B;S.envMap.value=e.texture,S.samples.value=v,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=b,S.mipInt.value=U-r;const N=this._sizeLods[l],Z=3*N*(l>U-gs?l-U+gs:0),H=4*(this._cubeSize-N);dc(i,Z,H,3*N,2*N),m.setRenderTarget(i),m.render(y,mh)}}function sM(o){const e=[],i=[],r=[];let l=o;const u=o-gs+1+Eg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-gs?m=Eg[h-o+gs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,y=1+p,S=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,b=6,R=3,v=2,_=1,B=new Float32Array(R*b*M),U=new Float32Array(v*b*M),N=new Float32Array(_*b*M);for(let H=0;H<M;H++){const F=H%3*2/3-1,et=H>2?0:-1,D=[F,et,0,F+2/3,et,0,F+2/3,et+1,0,F,et,0,F+2/3,et+1,0,F,et+1,0];B.set(D,R*b*H),U.set(S,v*b*H);const C=[H,H,H,H,H,H];N.set(C,_*b*H)}const Z=new Ji;Z.setAttribute("position",new pi(B,R)),Z.setAttribute("uv",new pi(U,v)),Z.setAttribute("faceIndex",new pi(N,_)),e.push(Z),l>gs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Rg(o,e,i){const r=new Pa(o,e,i);return r.texture.mapping=zc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function dc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function oM(o,e,i){const r=new Float32Array(fr),l=new ot(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Cg(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function wg(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lM(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ah||m===Rh,g=m===Ss||m===ys;if(p||g){let y=e.get(d);const S=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Ag(o)),y=p?i.fromEquirectangular(d,y):i.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Ag(o)),y=p?i.fromEquirectangular(d):i.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function cM(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Lo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function uM(o,e,i,r){const l={},u=new WeakMap;function h(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const R=S.morphAttributes[b];for(let v=0,_=R.length;v<_;v++)e.remove(R[v])}S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(y,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(y){const S=y.attributes;for(const b in S)e.update(S[b],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const b in M){const R=M[b];for(let v=0,_=R.length;v<_;v++)e.update(R[v],o.ARRAY_BUFFER)}}function p(y){const S=[],M=y.index,b=y.attributes.position;let R=0;if(M!==null){const B=M.array;R=M.version;for(let U=0,N=B.length;U<N;U+=3){const Z=B[U+0],H=B[U+1],F=B[U+2];S.push(Z,H,H,F,F,Z)}}else if(b!==void 0){const B=b.array;R=b.version;for(let U=0,N=B.length/3-1;U<N;U+=3){const Z=U+0,H=U+1,F=U+2;S.push(Z,H,H,F,F,Z)}}else return;const v=new(m_(S)?E_:M_)(S,1);v.version=R;const _=u.get(y);_&&e.remove(_),u.set(y,v)}function g(y){const S=u.get(y);if(S){const M=y.index;M!==null&&S.version<M.version&&p(y)}else p(y);return u.get(y)}return{get:d,update:m,getWireframeAttribute:g}}function fM(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*h),i.update(M,r,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(r,M,u,S*h,b),i.update(M,r,b))}function g(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,b);let v=0;for(let _=0;_<b;_++)v+=M[_];i.update(v,r,1)}function y(S,M,b,R){if(b===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],R[_]);else{v.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,R,0,b);let _=0;for(let B=0;B<b;B++)_+=M[B];for(let B=0;B<R.length;B++)i.update(_,r,R[B])}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function hM(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function dM(o,e,i){const r=new WeakMap,l=new sn;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==y){let C=function(){et.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let N=0;b===!0&&(N=1),R===!0&&(N=2),v===!0&&(N=3);let Z=d.attributes.position.count*N,H=1;Z>e.maxTextureSize&&(H=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const F=new Float32Array(Z*H*4*y),et=new __(F,Z,H,y);et.type=Ei,et.needsUpdate=!0;const D=N*4;for(let V=0;V<y;V++){const ct=_[V],it=B[V],gt=U[V],ut=Z*H*4*V;for(let z=0;z<ct.count;z++){const W=z*D;b===!0&&(l.fromBufferAttribute(ct,z),F[ut+W+0]=l.x,F[ut+W+1]=l.y,F[ut+W+2]=l.z,F[ut+W+3]=0),R===!0&&(l.fromBufferAttribute(it,z),F[ut+W+4]=l.x,F[ut+W+5]=l.y,F[ut+W+6]=l.z,F[ut+W+7]=0),v===!0&&(l.fromBufferAttribute(gt,z),F[ut+W+8]=l.x,F[ut+W+9]=l.y,F[ut+W+10]=l.z,F[ut+W+11]=gt.itemSize===4?l.w:1)}}S={count:y,texture:et,size:new ne(Z,H)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let v=0;v<p.length;v++)b+=p[v];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function pM(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,y=e.get(m,g);if(l.get(y)!==p&&(e.update(y),l.set(y,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return y}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}class C_ extends bn{constructor(e,i,r,l,u,h,d,m,p,g=vs){if(g!==vs&&g!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===vs&&(r=mr),r===void 0&&g===Es&&(r=Ms),super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Nn,this.minFilter=m!==void 0?m:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const w_=new bn,Dg=new C_(1,1),D_=new __,U_=new $x,L_=new b_,Ug=[],Lg=[],Ng=new Float32Array(16),Og=new Float32Array(9),Pg=new Float32Array(4);function Rs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=Ug[l];if(u===void 0&&(u=new Float32Array(l),Ug[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function on(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function ln(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Fc(o,e){let i=Lg[e];i===void 0&&(i=new Int32Array(e),Lg[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function mM(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function gM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2fv(this.addr,e),ln(i,e)}}function _M(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(on(i,e))return;o.uniform3fv(this.addr,e),ln(i,e)}}function vM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4fv(this.addr,e),ln(i,e)}}function xM(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;Pg.set(r),o.uniformMatrix2fv(this.addr,!1,Pg),ln(i,r)}}function SM(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;Og.set(r),o.uniformMatrix3fv(this.addr,!1,Og),ln(i,r)}}function yM(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;Ng.set(r),o.uniformMatrix4fv(this.addr,!1,Ng),ln(i,r)}}function MM(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function EM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2iv(this.addr,e),ln(i,e)}}function TM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3iv(this.addr,e),ln(i,e)}}function bM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4iv(this.addr,e),ln(i,e)}}function AM(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function RM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2uiv(this.addr,e),ln(i,e)}}function CM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3uiv(this.addr,e),ln(i,e)}}function wM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4uiv(this.addr,e),ln(i,e)}}function DM(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Dg.compareFunction=p_,u=Dg):u=w_,i.setTexture2D(e||u,l)}function UM(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||U_,l)}function LM(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||L_,l)}function NM(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||D_,l)}function OM(o){switch(o){case 5126:return mM;case 35664:return gM;case 35665:return _M;case 35666:return vM;case 35674:return xM;case 35675:return SM;case 35676:return yM;case 5124:case 35670:return MM;case 35667:case 35671:return EM;case 35668:case 35672:return TM;case 35669:case 35673:return bM;case 5125:return AM;case 36294:return RM;case 36295:return CM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return UM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return NM}}function PM(o,e){o.uniform1fv(this.addr,e)}function zM(o,e){const i=Rs(e,this.size,2);o.uniform2fv(this.addr,i)}function BM(o,e){const i=Rs(e,this.size,3);o.uniform3fv(this.addr,i)}function IM(o,e){const i=Rs(e,this.size,4);o.uniform4fv(this.addr,i)}function FM(o,e){const i=Rs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function HM(o,e){const i=Rs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function GM(o,e){const i=Rs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function VM(o,e){o.uniform1iv(this.addr,e)}function kM(o,e){o.uniform2iv(this.addr,e)}function XM(o,e){o.uniform3iv(this.addr,e)}function WM(o,e){o.uniform4iv(this.addr,e)}function qM(o,e){o.uniform1uiv(this.addr,e)}function YM(o,e){o.uniform2uiv(this.addr,e)}function jM(o,e){o.uniform3uiv(this.addr,e)}function ZM(o,e){o.uniform4uiv(this.addr,e)}function KM(o,e,i){const r=this.cache,l=e.length,u=Fc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||w_,u[h])}function QM(o,e,i){const r=this.cache,l=e.length,u=Fc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||U_,u[h])}function JM(o,e,i){const r=this.cache,l=e.length,u=Fc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||L_,u[h])}function $M(o,e,i){const r=this.cache,l=e.length,u=Fc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||D_,u[h])}function tE(o){switch(o){case 5126:return PM;case 35664:return zM;case 35665:return BM;case 35666:return IM;case 35674:return FM;case 35675:return HM;case 35676:return GM;case 5124:case 35670:return VM;case 35667:case 35671:return kM;case 35668:case 35672:return XM;case 35669:case 35673:return WM;case 5125:return qM;case 36294:return YM;case 36295:return jM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return $M}}class eE{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=OM(i.type)}}class nE{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tE(i.type)}}class iE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Sh=/(\w+)(\])?(\[|\.)?/g;function zg(o,e){o.seq.push(e),o.map[e.id]=e}function aE(o,e,i){const r=o.name,l=r.length;for(Sh.lastIndex=0;;){const u=Sh.exec(r),h=Sh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){zg(i,p===void 0?new eE(d,o,e):new nE(d,o,e));break}else{let y=i.map[d];y===void 0&&(y=new iE(d),zg(i,y)),i=y}}}class Tc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);aE(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Bg(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const rE=37297;let sE=0;function oE(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function lE(o){const e=be.getPrimaries(be.workingColorSpace),i=be.getPrimaries(o);let r;switch(e===i?r="":e===Cc&&i===Rc?r="LinearDisplayP3ToLinearSRGB":e===Rc&&i===Cc&&(r="LinearSRGBToLinearDisplayP3"),o){case za:case Bc:return[r,"LinearTransferOETF"];case Si:case hd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function Ig(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+oE(o.getShaderSource(e),h)}else return l}function cE(o,e){const i=lE(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function uE(o,e){let i;switch(e){case Ax:i="Linear";break;case Rx:i="Reinhard";break;case Cx:i="OptimizedCineon";break;case wx:i="ACESFilmic";break;case Ux:i="AgX";break;case Lx:i="Neutral";break;case Dx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pc=new ot;function fE(){be.getLuminanceCoefficients(pc);const o=pc.x.toFixed(4),e=pc.y.toFixed(4),i=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function dE(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function pE(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Uo(o){return o!==""}function Fg(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(o){return o.replace(mE,_E)}const gE=new Map;function _E(o,e){let i=oe[e];if(i===void 0){const r=gE.get(e);if(r!==void 0)i=oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return id(i)}const vE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gg(o){return o.replace(vE,xE)}function xE(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Vg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===J1?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function yE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ss:case ys:e="ENVMAP_TYPE_CUBE";break;case zc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ME(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function EE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case n_:e="ENVMAP_BLENDING_MULTIPLY";break;case Tx:e="ENVMAP_BLENDING_MIX";break;case bx:e="ENVMAP_BLENDING_ADD";break}return e}function TE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function bE(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=SE(i),p=yE(i),g=ME(i),y=EE(i),S=TE(i),M=hE(i),b=dE(u),R=l.createProgram();let v,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Uo).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Uo).join(`
`),_.length>0&&(_+=`
`)):(v=[Vg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),_=[Vg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Na?"#define TONE_MAPPING":"",i.toneMapping!==Na?oe.tonemapping_pars_fragment:"",i.toneMapping!==Na?uE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,cE("linearToOutputTexel",i.outputColorSpace),fE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),h=id(h),h=Fg(h,i),h=Hg(h,i),d=id(d),d=Fg(d,i),d=Hg(d,i),h=Gg(h),d=Gg(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",i.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=B+v+h,N=B+_+d,Z=Bg(l,l.VERTEX_SHADER,U),H=Bg(l,l.FRAGMENT_SHADER,N);l.attachShader(R,Z),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(V){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(R).trim(),it=l.getShaderInfoLog(Z).trim(),gt=l.getShaderInfoLog(H).trim();let ut=!0,z=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,Z,H);else{const W=Ig(l,Z,"vertex"),j=Ig(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ct+`
`+W+`
`+j)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(it===""||gt==="")&&(z=!1);z&&(V.diagnostics={runnable:ut,programLog:ct,vertexShader:{log:it,prefix:v},fragmentShader:{log:gt,prefix:_}})}l.deleteShader(Z),l.deleteShader(H),et=new Tc(l,R),D=pE(l,R)}let et;this.getUniforms=function(){return et===void 0&&F(this),et};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,rE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=sE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Z,this.fragmentShader=H,this}let AE=0;class RE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new CE(e),i.set(e,r)),r}}class CE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function wE(o,e,i,r,l,u,h){const d=new x_,m=new RE,p=new Set,g=[],y=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function v(D,C,V,ct,it){const gt=ct.fog,ut=it.geometry,z=D.isMeshStandardMaterial?ct.environment:null,W=(D.isMeshStandardMaterial?i:e).get(D.envMap||z),j=W&&W.mapping===zc?W.image.height:null,Et=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const L=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,$=L!==void 0?L.length:0;let St=0;ut.morphAttributes.position!==void 0&&(St=1),ut.morphAttributes.normal!==void 0&&(St=2),ut.morphAttributes.color!==void 0&&(St=3);let yt,K,dt,xt;if(Et){const _e=yi[Et];yt=_e.vertexShader,K=_e.fragmentShader}else yt=D.vertexShader,K=D.fragmentShader,m.update(D),dt=m.getVertexShaderID(D),xt=m.getFragmentShaderID(D);const Rt=o.getRenderTarget(),Ot=it.isInstancedMesh===!0,Kt=it.isBatchedMesh===!0,ae=!!D.map,Ae=!!D.matcap,I=!!W,Oe=!!D.aoMap,ge=!!D.lightMap,ye=!!D.bumpMap,Vt=!!D.normalMap,ue=!!D.displacementMap,$t=!!D.emissiveMap,ee=!!D.metalnessMap,O=!!D.roughnessMap,E=D.anisotropy>0,w=D.clearcoat>0,Q=D.dispersion>0,lt=D.iridescence>0,ft=D.sheen>0,wt=D.transmission>0,Mt=E&&!!D.anisotropyMap,Dt=w&&!!D.clearcoatMap,Ht=w&&!!D.clearcoatNormalMap,Tt=w&&!!D.clearcoatRoughnessMap,zt=lt&&!!D.iridescenceMap,pe=lt&&!!D.iridescenceThicknessMap,jt=ft&&!!D.sheenColorMap,Pt=ft&&!!D.sheenRoughnessMap,Wt=!!D.specularMap,ie=!!D.specularColorMap,Re=!!D.specularIntensityMap,X=wt&&!!D.transmissionMap,At=wt&&!!D.thicknessMap,mt=!!D.gradientMap,vt=!!D.alphaMap,Ct=D.alphaTest>0,Qt=!!D.alphaHash,me=!!D.extensions;let ke=Na;D.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ke=o.toneMapping);const je={shaderID:Et,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:K,defines:D.defines,customVertexShaderID:dt,customFragmentShaderID:xt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Kt,batchingColor:Kt&&it._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&it.instanceColor!==null,instancingMorph:Ot&&it.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:za,alphaToCoverage:!!D.alphaToCoverage,map:ae,matcap:Ae,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:j,aoMap:Oe,lightMap:ge,bumpMap:ye,normalMap:Vt,displacementMap:S&&ue,emissiveMap:$t,normalMapObjectSpace:Vt&&D.normalMapType===Bx,normalMapTangentSpace:Vt&&D.normalMapType===zx,metalnessMap:ee,roughnessMap:O,anisotropy:E,anisotropyMap:Mt,clearcoat:w,clearcoatMap:Dt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:Tt,dispersion:Q,iridescence:lt,iridescenceMap:zt,iridescenceThicknessMap:pe,sheen:ft,sheenColorMap:jt,sheenRoughnessMap:Pt,specularMap:Wt,specularColorMap:ie,specularIntensityMap:Re,transmission:wt,transmissionMap:X,thicknessMap:At,gradientMap:mt,opaque:D.transparent===!1&&D.blending===_s&&D.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ct,alphaHash:Qt,combine:D.combine,mapUv:ae&&R(D.map.channel),aoMapUv:Oe&&R(D.aoMap.channel),lightMapUv:ge&&R(D.lightMap.channel),bumpMapUv:ye&&R(D.bumpMap.channel),normalMapUv:Vt&&R(D.normalMap.channel),displacementMapUv:ue&&R(D.displacementMap.channel),emissiveMapUv:$t&&R(D.emissiveMap.channel),metalnessMapUv:ee&&R(D.metalnessMap.channel),roughnessMapUv:O&&R(D.roughnessMap.channel),anisotropyMapUv:Mt&&R(D.anisotropyMap.channel),clearcoatMapUv:Dt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&R(D.sheenRoughnessMap.channel),specularMapUv:Wt&&R(D.specularMap.channel),specularColorMapUv:ie&&R(D.specularColorMap.channel),specularIntensityMapUv:Re&&R(D.specularIntensityMap.channel),transmissionMapUv:X&&R(D.transmissionMap.channel),thicknessMapUv:At&&R(D.thicknessMap.channel),alphaMapUv:vt&&R(D.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Vt||E),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ut.attributes.uv&&(ae||vt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:it.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:St,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ke,decodeVideoTexture:ae&&D.map.isVideoTexture===!0&&be.getTransfer(D.map.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===qi,flipSided:D.side===On,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:me&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&D.extensions.multiDraw===!0||Kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return je.vertexUv1s=p.has(1),je.vertexUv2s=p.has(2),je.vertexUv3s=p.has(3),p.clear(),je}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(B(C,D),U(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function B(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.skinning&&d.enable(4),C.morphTargets&&d.enable(5),C.morphNormals&&d.enable(6),C.morphColors&&d.enable(7),C.premultipliedAlpha&&d.enable(8),C.shadowMapEnabled&&d.enable(9),C.doubleSided&&d.enable(10),C.flipSided&&d.enable(11),C.useDepthPacking&&d.enable(12),C.dithering&&d.enable(13),C.transmission&&d.enable(14),C.sheen&&d.enable(15),C.opaque&&d.enable(16),C.pointsUvs&&d.enable(17),C.decodeVideoTexture&&d.enable(18),C.alphaToCoverage&&d.enable(19),D.push(d.mask)}function N(D){const C=b[D.type];let V;if(C){const ct=yi[C];V=fS.clone(ct.uniforms)}else V=D.uniforms;return V}function Z(D,C){let V;for(let ct=0,it=g.length;ct<it;ct++){const gt=g[ct];if(gt.cacheKey===C){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new bE(o,C,D,u),g.push(V)),V}function H(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function F(D){m.remove(D)}function et(){m.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:N,acquireProgram:Z,releaseProgram:H,releaseShaderCache:F,programs:g,dispose:et}}function DE(){let o=new WeakMap;function e(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function UE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function kg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Xg(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(y,S,M,b,R,v){let _=o[e];return _===void 0?(_={id:y.id,object:y,geometry:S,material:M,groupOrder:b,renderOrder:y.renderOrder,z:R,group:v},o[e]=_):(_.id=y.id,_.object=y,_.geometry=S,_.material=M,_.groupOrder=b,_.renderOrder=y.renderOrder,_.z=R,_.group=v),e++,_}function d(y,S,M,b,R,v){const _=h(y,S,M,b,R,v);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(y,S,M,b,R,v){const _=h(y,S,M,b,R,v);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(y,S){i.length>1&&i.sort(y||UE),r.length>1&&r.sort(S||kg),l.length>1&&l.sort(S||kg)}function g(){for(let y=e,S=o.length;y<S;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function LE(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new Xg,o.set(r,[h])):l>=u.length?(h=new Xg,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function NE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ot,color:new Te};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[e.id]=i,i}}}function OE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let PE=0;function zE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function BE(o){const e=new NE,i=OE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ot);const l=new ot,u=new en,h=new en;function d(p){let g=0,y=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,R=0,v=0,_=0,B=0,U=0,N=0,Z=0,H=0,F=0;p.sort(zE);for(let D=0,C=p.length;D<C;D++){const V=p[D],ct=V.color,it=V.intensity,gt=V.distance,ut=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ct.r*it,y+=ct.g*it,S+=ct.b*it;else if(V.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(V.sh.coefficients[z],it);F++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,j=i.get(V);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=ut,r.directionalShadowMatrix[M]=V.shadow.matrix,B++}r.directional[M]=z,M++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(ct).multiplyScalar(it),z.distance=gt,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,r.spot[R]=z;const W=V.shadow;if(V.map&&(r.spotLightMap[Z]=V.map,Z++,W.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[R]=W.matrix,V.castShadow){const j=i.get(V);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.spotShadow[R]=j,r.spotShadowMap[R]=ut,N++}R++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(ct).multiplyScalar(it),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),r.rectArea[v]=z,v++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const W=V.shadow,j=i.get(V);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,r.pointShadow[b]=j,r.pointShadowMap[b]=ut,r.pointShadowMatrix[b]=V.shadow.matrix,U++}r.point[b]=z,b++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(it),z.groundColor.copy(V.groundColor).multiplyScalar(it),r.hemi[_]=z,_++}}v>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=S;const et=r.hash;(et.directionalLength!==M||et.pointLength!==b||et.spotLength!==R||et.rectAreaLength!==v||et.hemiLength!==_||et.numDirectionalShadows!==B||et.numPointShadows!==U||et.numSpotShadows!==N||et.numSpotMaps!==Z||et.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=v,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=N+Z-H,r.spotLightMap.length=Z,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=F,et.directionalLength=M,et.pointLength=b,et.spotLength=R,et.rectAreaLength=v,et.hemiLength=_,et.numDirectionalShadows=B,et.numPointShadows=U,et.numSpotShadows=N,et.numSpotMaps=Z,et.numLightProbes=F,r.version=PE++)}function m(p,g){let y=0,S=0,M=0,b=0,R=0;const v=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const U=p[_];if(U.isDirectionalLight){const N=r.directional[y];N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(v),y++}else if(U.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(v),M++}else if(U.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(v),h.identity(),u.copy(U.matrixWorld),u.premultiply(v),h.extractRotation(u),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),b++}else if(U.isPointLight){const N=r.point[S];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(v),S++}else if(U.isHemisphereLight){const N=r.hemi[R];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(v),R++}}}return{setup:d,setupView:m,state:r}}function Wg(o){const e=new BE(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function IE(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new Wg(o),e.set(l,[d])):u>=h.length?(d=new Wg(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}class FE extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HE extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kE(o,e,i){let r=new A_;const l=new ne,u=new ne,h=new sn,d=new FE({depthPacking:Px}),m=new HE,p={},g=i.maxTextureSize,y={[Oa]:On,[On]:Oa,[qi]:qi},S=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:GE,fragmentShader:VE}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ji;b.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ai(b,S),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e_;let _=this.type;this.render=function(H,F,et){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(La),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const it=_!==Wi&&this.type===Wi,gt=_===Wi&&this.type!==Wi;for(let ut=0,z=H.length;ut<z;ut++){const W=H[ut],j=W.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Et=j.getFrameExtents();if(l.multiply(Et),u.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Et.x),l.x=u.x*Et.x,j.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Et.y),l.y=u.y*Et.y,j.mapSize.y=u.y)),j.map===null||it===!0||gt===!0){const $=this.type!==Wi?{minFilter:Nn,magFilter:Nn}:{};j.map!==null&&j.map.dispose(),j.map=new Pa(l.x,l.y,$),j.map.texture.name=W.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const L=j.getViewportCount();for(let $=0;$<L;$++){const St=j.getViewport($);h.set(u.x*St.x,u.y*St.y,u.x*St.z,u.y*St.w),ct.viewport(h),j.updateMatrices(W,$),r=j.getFrustum(),N(F,et,j.camera,W,this.type)}j.isPointLightShadow!==!0&&this.type===Wi&&B(j,et),j.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(D,C,V)};function B(H,F){const et=e.update(R);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Pa(l.x,l.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(F,null,et,S,R,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(F,null,et,M,R,null)}function U(H,F,et,D){let C=null;const V=et.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)C=V;else if(C=et.isPointLight===!0?m:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ct=C.uuid,it=F.uuid;let gt=p[ct];gt===void 0&&(gt={},p[ct]=gt);let ut=gt[it];ut===void 0&&(ut=C.clone(),gt[it]=ut,F.addEventListener("dispose",Z)),C=ut}if(C.visible=F.visible,C.wireframe=F.wireframe,D===Wi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:y[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,et.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ct=o.properties.get(C);ct.light=et}return C}function N(H,F,et,D,C){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===Wi)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,H.matrixWorld);const it=e.update(H),gt=H.material;if(Array.isArray(gt)){const ut=it.groups;for(let z=0,W=ut.length;z<W;z++){const j=ut[z],Et=gt[j.materialIndex];if(Et&&Et.visible){const L=U(H,Et,D,C);H.onBeforeShadow(o,H,F,et,it,L,j),o.renderBufferDirect(et,null,it,L,H,j),H.onAfterShadow(o,H,F,et,it,L,j)}}}else if(gt.visible){const ut=U(H,gt,D,C);H.onBeforeShadow(o,H,F,et,it,ut,null),o.renderBufferDirect(et,null,it,ut,H,null),H.onAfterShadow(o,H,F,et,it,ut,null)}}const ct=H.children;for(let it=0,gt=ct.length;it<gt;it++)N(ct[it],F,et,D,C)}function Z(H){H.target.removeEventListener("dispose",Z);for(const et in p){const D=p[et],C=H.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function XE(o){function e(){let X=!1;const At=new sn;let mt=null;const vt=new sn(0,0,0,0);return{setMask:function(Ct){mt!==Ct&&!X&&(o.colorMask(Ct,Ct,Ct,Ct),mt=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,Qt,me,ke,je){je===!0&&(Ct*=ke,Qt*=ke,me*=ke),At.set(Ct,Qt,me,ke),vt.equals(At)===!1&&(o.clearColor(Ct,Qt,me,ke),vt.copy(At))},reset:function(){X=!1,mt=null,vt.set(-1,0,0,0)}}}function i(){let X=!1,At=null,mt=null,vt=null;return{setTest:function(Ct){Ct?xt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(Ct){At!==Ct&&!X&&(o.depthMask(Ct),At=Ct)},setFunc:function(Ct){if(mt!==Ct){switch(Ct){case _x:o.depthFunc(o.NEVER);break;case vx:o.depthFunc(o.ALWAYS);break;case xx:o.depthFunc(o.LESS);break;case bc:o.depthFunc(o.LEQUAL);break;case Sx:o.depthFunc(o.EQUAL);break;case yx:o.depthFunc(o.GEQUAL);break;case Mx:o.depthFunc(o.GREATER);break;case Ex:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}mt=Ct}},setLocked:function(Ct){X=Ct},setClear:function(Ct){vt!==Ct&&(o.clearDepth(Ct),vt=Ct)},reset:function(){X=!1,At=null,mt=null,vt=null}}}function r(){let X=!1,At=null,mt=null,vt=null,Ct=null,Qt=null,me=null,ke=null,je=null;return{setTest:function(_e){X||(_e?xt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(_e){At!==_e&&!X&&(o.stencilMask(_e),At=_e)},setFunc:function(_e,Yn,jn){(mt!==_e||vt!==Yn||Ct!==jn)&&(o.stencilFunc(_e,Yn,jn),mt=_e,vt=Yn,Ct=jn)},setOp:function(_e,Yn,jn){(Qt!==_e||me!==Yn||ke!==jn)&&(o.stencilOp(_e,Yn,jn),Qt=_e,me=Yn,ke=jn)},setLocked:function(_e){X=_e},setClear:function(_e){je!==_e&&(o.clearStencil(_e),je=_e)},reset:function(){X=!1,At=null,mt=null,vt=null,Ct=null,Qt=null,me=null,ke=null,je=null}}}const l=new e,u=new i,h=new r,d=new WeakMap,m=new WeakMap;let p={},g={},y=new WeakMap,S=[],M=null,b=!1,R=null,v=null,_=null,B=null,U=null,N=null,Z=null,H=new Te(0,0,0),F=0,et=!1,D=null,C=null,V=null,ct=null,it=null;const gt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ut=!1,z=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),ut=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ut=z>=2);let j=null,Et={};const L=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),St=new sn().fromArray(L),yt=new sn().fromArray($);function K(X,At,mt,vt){const Ct=new Uint8Array(4),Qt=o.createTexture();o.bindTexture(X,Qt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let me=0;me<mt;me++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,vt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(At+me,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Qt}const dt={};dt[o.TEXTURE_2D]=K(o.TEXTURE_2D,o.TEXTURE_2D,1),dt[o.TEXTURE_CUBE_MAP]=K(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[o.TEXTURE_2D_ARRAY]=K(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),dt[o.TEXTURE_3D]=K(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),xt(o.DEPTH_TEST),u.setFunc(bc),ye(!1),Vt(J0),xt(o.CULL_FACE),Oe(La);function xt(X){p[X]!==!0&&(o.enable(X),p[X]=!0)}function Rt(X){p[X]!==!1&&(o.disable(X),p[X]=!1)}function Ot(X,At){return g[X]!==At?(o.bindFramebuffer(X,At),g[X]=At,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=At),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Kt(X,At){let mt=S,vt=!1;if(X){mt=y.get(At),mt===void 0&&(mt=[],y.set(At,mt));const Ct=X.textures;if(mt.length!==Ct.length||mt[0]!==o.COLOR_ATTACHMENT0){for(let Qt=0,me=Ct.length;Qt<me;Qt++)mt[Qt]=o.COLOR_ATTACHMENT0+Qt;mt.length=Ct.length,vt=!0}}else mt[0]!==o.BACK&&(mt[0]=o.BACK,vt=!0);vt&&o.drawBuffers(mt)}function ae(X){return M!==X?(o.useProgram(X),M=X,!0):!1}const Ae={[ur]:o.FUNC_ADD,[tx]:o.FUNC_SUBTRACT,[ex]:o.FUNC_REVERSE_SUBTRACT};Ae[nx]=o.MIN,Ae[ix]=o.MAX;const I={[ax]:o.ZERO,[rx]:o.ONE,[sx]:o.SRC_COLOR,[Th]:o.SRC_ALPHA,[hx]:o.SRC_ALPHA_SATURATE,[ux]:o.DST_COLOR,[lx]:o.DST_ALPHA,[ox]:o.ONE_MINUS_SRC_COLOR,[bh]:o.ONE_MINUS_SRC_ALPHA,[fx]:o.ONE_MINUS_DST_COLOR,[cx]:o.ONE_MINUS_DST_ALPHA,[dx]:o.CONSTANT_COLOR,[px]:o.ONE_MINUS_CONSTANT_COLOR,[mx]:o.CONSTANT_ALPHA,[gx]:o.ONE_MINUS_CONSTANT_ALPHA};function Oe(X,At,mt,vt,Ct,Qt,me,ke,je,_e){if(X===La){b===!0&&(Rt(o.BLEND),b=!1);return}if(b===!1&&(xt(o.BLEND),b=!0),X!==$1){if(X!==R||_e!==et){if((v!==ur||U!==ur)&&(o.blendEquation(o.FUNC_ADD),v=ur,U=ur),_e)switch(X){case _s:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Eh:o.blendFunc(o.ONE,o.ONE);break;case $0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case tg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case _s:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Eh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case $0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case tg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}_=null,B=null,N=null,Z=null,H.set(0,0,0),F=0,R=X,et=_e}return}Ct=Ct||At,Qt=Qt||mt,me=me||vt,(At!==v||Ct!==U)&&(o.blendEquationSeparate(Ae[At],Ae[Ct]),v=At,U=Ct),(mt!==_||vt!==B||Qt!==N||me!==Z)&&(o.blendFuncSeparate(I[mt],I[vt],I[Qt],I[me]),_=mt,B=vt,N=Qt,Z=me),(ke.equals(H)===!1||je!==F)&&(o.blendColor(ke.r,ke.g,ke.b,je),H.copy(ke),F=je),R=X,et=!1}function ge(X,At){X.side===qi?Rt(o.CULL_FACE):xt(o.CULL_FACE);let mt=X.side===On;At&&(mt=!mt),ye(mt),X.blending===_s&&X.transparent===!1?Oe(La):Oe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const vt=X.stencilWrite;h.setTest(vt),vt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),$t(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ye(X){D!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),D=X)}function Vt(X){X!==K1?(xt(o.CULL_FACE),X!==C&&(X===J0?o.cullFace(o.BACK):X===Q1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),C=X}function ue(X){X!==V&&(ut&&o.lineWidth(X),V=X)}function $t(X,At,mt){X?(xt(o.POLYGON_OFFSET_FILL),(ct!==At||it!==mt)&&(o.polygonOffset(At,mt),ct=At,it=mt)):Rt(o.POLYGON_OFFSET_FILL)}function ee(X){X?xt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function O(X){X===void 0&&(X=o.TEXTURE0+gt-1),j!==X&&(o.activeTexture(X),j=X)}function E(X,At,mt){mt===void 0&&(j===null?mt=o.TEXTURE0+gt-1:mt=j);let vt=Et[mt];vt===void 0&&(vt={type:void 0,texture:void 0},Et[mt]=vt),(vt.type!==X||vt.texture!==At)&&(j!==mt&&(o.activeTexture(mt),j=mt),o.bindTexture(X,At||dt[X]),vt.type=X,vt.texture=At)}function w(){const X=Et[j];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Q(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function lt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(X){St.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Pt(X){yt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),yt.copy(X))}function Wt(X,At){let mt=m.get(At);mt===void 0&&(mt=new WeakMap,m.set(At,mt));let vt=mt.get(X);vt===void 0&&(vt=o.getUniformBlockIndex(At,X.name),mt.set(X,vt))}function ie(X,At){const vt=m.get(At).get(X);d.get(At)!==vt&&(o.uniformBlockBinding(At,vt,X.__bindingPointIndex),d.set(At,vt))}function Re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},j=null,Et={},g={},y=new WeakMap,S=[],M=null,b=!1,R=null,v=null,_=null,B=null,U=null,N=null,Z=null,H=new Te(0,0,0),F=0,et=!1,D=null,C=null,V=null,ct=null,it=null,St.set(0,0,o.canvas.width,o.canvas.height),yt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:xt,disable:Rt,bindFramebuffer:Ot,drawBuffers:Kt,useProgram:ae,setBlending:Oe,setMaterial:ge,setFlipSided:ye,setCullFace:Vt,setLineWidth:ue,setPolygonOffset:$t,setScissorTest:ee,activeTexture:O,bindTexture:E,unbindTexture:w,compressedTexImage2D:Q,compressedTexImage3D:lt,texImage2D:zt,texImage3D:pe,updateUBOMapping:Wt,uniformBlockBinding:ie,texStorage2D:Ht,texStorage3D:Tt,texSubImage2D:ft,texSubImage3D:wt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Dt,scissor:jt,viewport:Pt,reset:Re}}function qg(o,e,i,r){const l=WE(r);switch(i){case o_:return o*e;case c_:return o*e;case u_:return o*e*2;case f_:return o*e/l.components*l.byteLength;case cd:return o*e/l.components*l.byteLength;case h_:return o*e*2/l.components*l.byteLength;case ud:return o*e*2/l.components*l.byteLength;case l_:return o*e*3/l.components*l.byteLength;case ii:return o*e*4/l.components*l.byteLength;case fd:return o*e*4/l.components*l.byteLength;case xc:case Sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Nh:return Math.max(o,16)*Math.max(e,8)/4;case Dh:case Lh:return Math.max(o,8)*Math.max(e,8)/2;case Oh:case Ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ec:case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case d_:case $h:return Math.ceil(o/4)*Math.ceil(e/4)*8;case td:case ed:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function WE(o){switch(o){case Zi:case a_:return{byteLength:1,components:1};case No:case r_:case bs:return{byteLength:2,components:1};case od:case ld:return{byteLength:2,components:4};case mr:case sd:case Ei:return{byteLength:4,components:1};case s_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function qE(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ne,g=new WeakMap;let y;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return M?new OffscreenCanvas(O,E):Dc("canvas")}function R(O,E,w){let Q=1;const lt=ee(O);if((lt.width>w||lt.height>w)&&(Q=w/Math.max(lt.width,lt.height)),Q<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ft=Math.floor(Q*lt.width),wt=Math.floor(Q*lt.height);y===void 0&&(y=b(ft,wt));const Mt=E?b(ft,wt):y;return Mt.width=ft,Mt.height=wt,Mt.getContext("2d").drawImage(O,0,0,ft,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+ft+"x"+wt+")."),Mt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),O;return O}function v(O){return O.generateMipmaps&&O.minFilter!==Nn&&O.minFilter!==Tn}function _(O){o.generateMipmap(O)}function B(O,E,w,Q,lt=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ft=E;if(E===o.RED&&(w===o.FLOAT&&(ft=o.R32F),w===o.HALF_FLOAT&&(ft=o.R16F),w===o.UNSIGNED_BYTE&&(ft=o.R8)),E===o.RED_INTEGER&&(w===o.UNSIGNED_BYTE&&(ft=o.R8UI),w===o.UNSIGNED_SHORT&&(ft=o.R16UI),w===o.UNSIGNED_INT&&(ft=o.R32UI),w===o.BYTE&&(ft=o.R8I),w===o.SHORT&&(ft=o.R16I),w===o.INT&&(ft=o.R32I)),E===o.RG&&(w===o.FLOAT&&(ft=o.RG32F),w===o.HALF_FLOAT&&(ft=o.RG16F),w===o.UNSIGNED_BYTE&&(ft=o.RG8)),E===o.RG_INTEGER&&(w===o.UNSIGNED_BYTE&&(ft=o.RG8UI),w===o.UNSIGNED_SHORT&&(ft=o.RG16UI),w===o.UNSIGNED_INT&&(ft=o.RG32UI),w===o.BYTE&&(ft=o.RG8I),w===o.SHORT&&(ft=o.RG16I),w===o.INT&&(ft=o.RG32I)),E===o.RGB&&w===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),E===o.RGBA){const wt=lt?Ac:be.getTransfer(Q);w===o.FLOAT&&(ft=o.RGBA32F),w===o.HALF_FLOAT&&(ft=o.RGBA16F),w===o.UNSIGNED_BYTE&&(ft=wt===Fe?o.SRGB8_ALPHA8:o.RGBA8),w===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),w===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function U(O,E){let w;return O?E===null||E===mr||E===Ms?w=o.DEPTH24_STENCIL8:E===Ei?w=o.DEPTH32F_STENCIL8:E===No&&(w=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===mr||E===Ms?w=o.DEPTH_COMPONENT24:E===Ei?w=o.DEPTH_COMPONENT32F:E===No&&(w=o.DEPTH_COMPONENT16),w}function N(O,E){return v(O)===!0||O.isFramebufferTexture&&O.minFilter!==Nn&&O.minFilter!==Tn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function Z(O){const E=O.target;E.removeEventListener("dispose",Z),F(E),E.isVideoTexture&&g.delete(E)}function H(O){const E=O.target;E.removeEventListener("dispose",H),D(E)}function F(O){const E=r.get(O);if(E.__webglInit===void 0)return;const w=O.source,Q=S.get(w);if(Q){const lt=Q[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&et(O),Object.keys(Q).length===0&&S.delete(w)}r.remove(O)}function et(O){const E=r.get(O);o.deleteTexture(E.__webglTexture);const w=O.source,Q=S.get(w);delete Q[E.__cacheKey],h.memory.textures--}function D(O){const E=r.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let lt=0;lt<E.__webglFramebuffer[Q].length;lt++)o.deleteFramebuffer(E.__webglFramebuffer[Q][lt]);else o.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)o.deleteFramebuffer(E.__webglFramebuffer[Q]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const w=O.textures;for(let Q=0,lt=w.length;Q<lt;Q++){const ft=r.get(w[Q]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(w[Q])}r.remove(O)}let C=0;function V(){C=0}function ct(){const O=C;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),C+=1,O}function it(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function gt(O,E){const w=r.get(O);if(O.isVideoTexture&&ue(O),O.isRenderTargetTexture===!1&&O.version>0&&w.__version!==O.version){const Q=O.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(w,O,E);return}}i.bindTexture(o.TEXTURE_2D,w.__webglTexture,o.TEXTURE0+E)}function ut(O,E){const w=r.get(O);if(O.version>0&&w.__version!==O.version){yt(w,O,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,w.__webglTexture,o.TEXTURE0+E)}function z(O,E){const w=r.get(O);if(O.version>0&&w.__version!==O.version){yt(w,O,E);return}i.bindTexture(o.TEXTURE_3D,w.__webglTexture,o.TEXTURE0+E)}function W(O,E){const w=r.get(O);if(O.version>0&&w.__version!==O.version){K(w,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+E)}const j={[Ch]:o.REPEAT,[di]:o.CLAMP_TO_EDGE,[wh]:o.MIRRORED_REPEAT},Et={[Nn]:o.NEAREST,[Nx]:o.NEAREST_MIPMAP_NEAREST,[Yl]:o.NEAREST_MIPMAP_LINEAR,[Tn]:o.LINEAR,[jf]:o.LINEAR_MIPMAP_NEAREST,[hr]:o.LINEAR_MIPMAP_LINEAR},L={[Ix]:o.NEVER,[Xx]:o.ALWAYS,[Fx]:o.LESS,[p_]:o.LEQUAL,[Hx]:o.EQUAL,[kx]:o.GEQUAL,[Gx]:o.GREATER,[Vx]:o.NOTEQUAL};function $(O,E){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Tn||E.magFilter===jf||E.magFilter===Yl||E.magFilter===hr||E.minFilter===Tn||E.minFilter===jf||E.minFilter===Yl||E.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,j[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,j[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,j[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Et[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==Yl&&E.minFilter!==hr||E.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const w=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(O,E){let w=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",Z));const Q=E.source;let lt=S.get(Q);lt===void 0&&(lt={},S.set(Q,lt));const ft=it(E);if(ft!==O.__cacheKey){lt[ft]===void 0&&(lt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,w=!0),lt[ft].usedTimes++;const wt=lt[O.__cacheKey];wt!==void 0&&(lt[O.__cacheKey].usedTimes--,wt.usedTimes===0&&et(E)),O.__cacheKey=ft,O.__webglTexture=lt[ft].texture}return w}function yt(O,E,w){let Q=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=o.TEXTURE_3D);const lt=St(O,E),ft=E.source;i.bindTexture(Q,O.__webglTexture,o.TEXTURE0+w);const wt=r.get(ft);if(ft.version!==wt.__version||lt===!0){i.activeTexture(o.TEXTURE0+w);const Mt=be.getPrimaries(be.workingColorSpace),Dt=E.colorSpace===Ua?null:be.getPrimaries(E.colorSpace),Ht=E.colorSpace===Ua||Mt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Tt=R(E.image,!1,l.maxTextureSize);Tt=$t(E,Tt);const zt=u.convert(E.format,E.colorSpace),pe=u.convert(E.type);let jt=B(E.internalFormat,zt,pe,E.colorSpace,E.isVideoTexture);$(Q,E);let Pt;const Wt=E.mipmaps,ie=E.isVideoTexture!==!0,Re=wt.__version===void 0||lt===!0,X=ft.dataReady,At=N(E,Tt);if(E.isDepthTexture)jt=U(E.format===Es,E.type),Re&&(ie?i.texStorage2D(o.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,zt,pe,null));else if(E.isDataTexture)if(Wt.length>0){ie&&Re&&i.texStorage2D(o.TEXTURE_2D,At,jt,Wt[0].width,Wt[0].height);for(let mt=0,vt=Wt.length;mt<vt;mt++)Pt=Wt[mt],ie?X&&i.texSubImage2D(o.TEXTURE_2D,mt,0,0,Pt.width,Pt.height,zt,pe,Pt.data):i.texImage2D(o.TEXTURE_2D,mt,jt,Pt.width,Pt.height,0,zt,pe,Pt.data);E.generateMipmaps=!1}else ie?(Re&&i.texStorage2D(o.TEXTURE_2D,At,jt,Tt.width,Tt.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,zt,pe,Tt.data)):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,zt,pe,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&Re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,jt,Wt[0].width,Wt[0].height,Tt.depth);for(let mt=0,vt=Wt.length;mt<vt;mt++)if(Pt=Wt[mt],E.format!==ii)if(zt!==null)if(ie){if(X)if(E.layerUpdates.size>0){const Ct=qg(Pt.width,Pt.height,E.format,E.type);for(const Qt of E.layerUpdates){const me=Pt.data.subarray(Qt*Ct/Pt.data.BYTES_PER_ELEMENT,(Qt+1)*Ct/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,Qt,Pt.width,Pt.height,1,zt,me,0,0)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,0,Pt.width,Pt.height,Tt.depth,zt,Pt.data,0,0)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,mt,jt,Pt.width,Pt.height,Tt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,0,Pt.width,Pt.height,Tt.depth,zt,pe,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,mt,jt,Pt.width,Pt.height,Tt.depth,0,zt,pe,Pt.data)}else{ie&&Re&&i.texStorage2D(o.TEXTURE_2D,At,jt,Wt[0].width,Wt[0].height);for(let mt=0,vt=Wt.length;mt<vt;mt++)Pt=Wt[mt],E.format!==ii?zt!==null?ie?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,mt,0,0,Pt.width,Pt.height,zt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,mt,jt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?X&&i.texSubImage2D(o.TEXTURE_2D,mt,0,0,Pt.width,Pt.height,zt,pe,Pt.data):i.texImage2D(o.TEXTURE_2D,mt,jt,Pt.width,Pt.height,0,zt,pe,Pt.data)}else if(E.isDataArrayTexture)if(ie){if(Re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,jt,Tt.width,Tt.height,Tt.depth),X)if(E.layerUpdates.size>0){const mt=qg(Tt.width,Tt.height,E.format,E.type);for(const vt of E.layerUpdates){const Ct=Tt.data.subarray(vt*mt/Tt.data.BYTES_PER_ELEMENT,(vt+1)*mt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Tt.width,Tt.height,1,zt,pe,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,zt,pe,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,zt,pe,Tt.data);else if(E.isData3DTexture)ie?(Re&&i.texStorage3D(o.TEXTURE_3D,At,jt,Tt.width,Tt.height,Tt.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,zt,pe,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,zt,pe,Tt.data);else if(E.isFramebufferTexture){if(Re)if(ie)i.texStorage2D(o.TEXTURE_2D,At,jt,Tt.width,Tt.height);else{let mt=Tt.width,vt=Tt.height;for(let Ct=0;Ct<At;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,jt,mt,vt,0,zt,pe,null),mt>>=1,vt>>=1}}else if(Wt.length>0){if(ie&&Re){const mt=ee(Wt[0]);i.texStorage2D(o.TEXTURE_2D,At,jt,mt.width,mt.height)}for(let mt=0,vt=Wt.length;mt<vt;mt++)Pt=Wt[mt],ie?X&&i.texSubImage2D(o.TEXTURE_2D,mt,0,0,zt,pe,Pt):i.texImage2D(o.TEXTURE_2D,mt,jt,zt,pe,Pt);E.generateMipmaps=!1}else if(ie){if(Re){const mt=ee(Tt);i.texStorage2D(o.TEXTURE_2D,At,jt,mt.width,mt.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,pe,Tt)}else i.texImage2D(o.TEXTURE_2D,0,jt,zt,pe,Tt);v(E)&&_(Q),wt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function K(O,E,w){if(E.image.length!==6)return;const Q=St(O,E),lt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+w);const ft=r.get(lt);if(lt.version!==ft.__version||Q===!0){i.activeTexture(o.TEXTURE0+w);const wt=be.getPrimaries(be.workingColorSpace),Mt=E.colorSpace===Ua?null:be.getPrimaries(E.colorSpace),Dt=E.colorSpace===Ua||wt===Mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Ht=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let vt=0;vt<6;vt++)!Ht&&!Tt?zt[vt]=R(E.image[vt],!0,l.maxCubemapSize):zt[vt]=Tt?E.image[vt].image:E.image[vt],zt[vt]=$t(E,zt[vt]);const pe=zt[0],jt=u.convert(E.format,E.colorSpace),Pt=u.convert(E.type),Wt=B(E.internalFormat,jt,Pt,E.colorSpace),ie=E.isVideoTexture!==!0,Re=ft.__version===void 0||Q===!0,X=lt.dataReady;let At=N(E,pe);$(o.TEXTURE_CUBE_MAP,E);let mt;if(Ht){ie&&Re&&i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Wt,pe.width,pe.height);for(let vt=0;vt<6;vt++){mt=zt[vt].mipmaps;for(let Ct=0;Ct<mt.length;Ct++){const Qt=mt[Ct];E.format!==ii?jt!==null?ie?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Qt.width,Qt.height,jt,Qt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Wt,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Qt.width,Qt.height,jt,Pt,Qt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Wt,Qt.width,Qt.height,0,jt,Pt,Qt.data)}}}else{if(mt=E.mipmaps,ie&&Re){mt.length>0&&At++;const vt=ee(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Wt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Tt){ie?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,zt[vt].width,zt[vt].height,jt,Pt,zt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Wt,zt[vt].width,zt[vt].height,0,jt,Pt,zt[vt].data);for(let Ct=0;Ct<mt.length;Ct++){const me=mt[Ct].image[vt].image;ie?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,me.width,me.height,jt,Pt,me.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Wt,me.width,me.height,0,jt,Pt,me.data)}}else{ie?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,jt,Pt,zt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Wt,jt,Pt,zt[vt]);for(let Ct=0;Ct<mt.length;Ct++){const Qt=mt[Ct];ie?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,jt,Pt,Qt.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Wt,jt,Pt,Qt.image[vt])}}}v(E)&&_(o.TEXTURE_CUBE_MAP),ft.__version=lt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function dt(O,E,w,Q,lt,ft){const wt=u.convert(w.format,w.colorSpace),Mt=u.convert(w.type),Dt=B(w.internalFormat,wt,Mt,w.colorSpace);if(!r.get(E).__hasExternalTextures){const Tt=Math.max(1,E.width>>ft),zt=Math.max(1,E.height>>ft);lt===o.TEXTURE_3D||lt===o.TEXTURE_2D_ARRAY?i.texImage3D(lt,ft,Dt,Tt,zt,E.depth,0,wt,Mt,null):i.texImage2D(lt,ft,Dt,Tt,zt,0,wt,Mt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Q,lt,r.get(w).__webglTexture,0,ye(E)):(lt===o.TEXTURE_2D||lt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Q,lt,r.get(w).__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function xt(O,E,w){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const Q=E.depthTexture,lt=Q&&Q.isDepthTexture?Q.type:null,ft=U(E.stencilBuffer,lt),wt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=ye(E);Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Mt,ft,E.width,E.height):w?o.renderbufferStorageMultisample(o.RENDERBUFFER,Mt,ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,wt,o.RENDERBUFFER,O)}else{const Q=E.textures;for(let lt=0;lt<Q.length;lt++){const ft=Q[lt],wt=u.convert(ft.format,ft.colorSpace),Mt=u.convert(ft.type),Dt=B(ft.internalFormat,wt,Mt,ft.colorSpace),Ht=ye(E);w&&Vt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,Dt,E.width,E.height):Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ht,Dt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Dt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),gt(E.depthTexture,0);const Q=r.get(E.depthTexture).__webglTexture,lt=ye(E);if(E.depthTexture.format===vs)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Q,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Es)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Q,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ot(O){const E=r.get(O),w=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,O)}else if(w){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=o.createRenderbuffer(),xt(E.__webglDepthbuffer[Q],O,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),xt(E.__webglDepthbuffer,O,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(O,E,w){const Q=r.get(O);E!==void 0&&dt(Q.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),w!==void 0&&Ot(O)}function ae(O){const E=O.texture,w=r.get(O),Q=r.get(E);O.addEventListener("dispose",H);const lt=O.textures,ft=O.isWebGLCubeRenderTarget===!0,wt=lt.length>1;if(wt||(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=E.version,h.memory.textures++),ft){w.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(E.mipmaps&&E.mipmaps.length>0){w.__webglFramebuffer[Mt]=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)w.__webglFramebuffer[Mt][Dt]=o.createFramebuffer()}else w.__webglFramebuffer[Mt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){w.__webglFramebuffer=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)w.__webglFramebuffer[Mt]=o.createFramebuffer()}else w.__webglFramebuffer=o.createFramebuffer();if(wt)for(let Mt=0,Dt=lt.length;Mt<Dt;Mt++){const Ht=r.get(lt[Mt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Vt(O)===!1){w.__webglMultisampledFramebuffer=o.createFramebuffer(),w.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let Mt=0;Mt<lt.length;Mt++){const Dt=lt[Mt];w.__webglColorRenderbuffer[Mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,w.__webglColorRenderbuffer[Mt]);const Ht=u.convert(Dt.format,Dt.colorSpace),Tt=u.convert(Dt.type),zt=B(Dt.internalFormat,Ht,Tt,Dt.colorSpace,O.isXRRenderTarget===!0),pe=ye(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,zt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Mt,o.RENDERBUFFER,w.__webglColorRenderbuffer[Mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(w.__webglDepthRenderbuffer=o.createRenderbuffer(),xt(w.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture),$(o.TEXTURE_CUBE_MAP,E);for(let Mt=0;Mt<6;Mt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Dt=0;Dt<E.mipmaps.length;Dt++)dt(w.__webglFramebuffer[Mt][Dt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Dt);else dt(w.__webglFramebuffer[Mt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);v(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(wt){for(let Mt=0,Dt=lt.length;Mt<Dt;Mt++){const Ht=lt[Mt],Tt=r.get(Ht);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),$(o.TEXTURE_2D,Ht),dt(w.__webglFramebuffer,O,Ht,o.COLOR_ATTACHMENT0+Mt,o.TEXTURE_2D,0),v(Ht)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Mt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Mt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,Q.__webglTexture),$(Mt,E),E.mipmaps&&E.mipmaps.length>0)for(let Dt=0;Dt<E.mipmaps.length;Dt++)dt(w.__webglFramebuffer[Dt],O,E,o.COLOR_ATTACHMENT0,Mt,Dt);else dt(w.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,Mt,0);v(E)&&_(Mt),i.unbindTexture()}O.depthBuffer&&Ot(O)}function Ae(O){const E=O.textures;for(let w=0,Q=E.length;w<Q;w++){const lt=E[w];if(v(lt)){const ft=O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,wt=r.get(lt).__webglTexture;i.bindTexture(ft,wt),_(ft),i.unbindTexture()}}}const I=[],Oe=[];function ge(O){if(O.samples>0){if(Vt(O)===!1){const E=O.textures,w=O.width,Q=O.height;let lt=o.COLOR_BUFFER_BIT;const ft=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=r.get(O),Mt=E.length>1;if(Mt)for(let Dt=0;Dt<E.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Dt=0;Dt<E.length;Dt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(lt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(lt|=o.STENCIL_BUFFER_BIT)),Mt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,wt.__webglColorRenderbuffer[Dt]);const Ht=r.get(E[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ht,0)}o.blitFramebuffer(0,0,w,Q,0,0,w,Q,lt,o.NEAREST),m===!0&&(I.length=0,Oe.length=0,I.push(o.COLOR_ATTACHMENT0+Dt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(I.push(ft),Oe.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Mt)for(let Dt=0;Dt<E.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,wt.__webglColorRenderbuffer[Dt]);const Ht=r.get(E[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,Ht,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ye(O){return Math.min(l.maxSamples,O.samples)}function Vt(O){const E=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ue(O){const E=h.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function $t(O,E){const w=O.colorSpace,Q=O.format,lt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||w!==za&&w!==Ua&&(be.getTransfer(w)===Fe?(Q!==ii||lt!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),E}function ee(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=V,this.setTexture2D=gt,this.setTexture2DArray=ut,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=Kt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Vt}function YE(o,e){function i(r,l=Ua){let u;const h=be.getTransfer(l);if(r===Zi)return o.UNSIGNED_BYTE;if(r===od)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return o.UNSIGNED_SHORT_5_5_5_1;if(r===s_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===a_)return o.BYTE;if(r===r_)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===sd)return o.INT;if(r===mr)return o.UNSIGNED_INT;if(r===Ei)return o.FLOAT;if(r===bs)return o.HALF_FLOAT;if(r===o_)return o.ALPHA;if(r===l_)return o.RGB;if(r===ii)return o.RGBA;if(r===c_)return o.LUMINANCE;if(r===u_)return o.LUMINANCE_ALPHA;if(r===vs)return o.DEPTH_COMPONENT;if(r===Es)return o.DEPTH_STENCIL;if(r===f_)return o.RED;if(r===cd)return o.RED_INTEGER;if(r===h_)return o.RG;if(r===ud)return o.RG_INTEGER;if(r===fd)return o.RGBA_INTEGER;if(r===xc||r===Sc||r===yc||r===Mc)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===xc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===xc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Dh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oh||r===Ph||r===zh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Oh||r===Ph)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===zh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Bh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ih)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ec||r===Qh||r===Jh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Ec)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===d_||r===$h||r===td||r===ed)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ec)return u.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===td)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ed)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ms?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class jE extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mc extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZE={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const v=i.getJointPose(R,r),_=this._getHandJoint(p,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],S=g.position.distanceTo(y.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ZE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new mc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new bn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Qi({vertexShader:KE,fragmentShader:QE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ai(new pr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $E extends As{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,y=null,S=null,M=null,b=null;const R=new JE,v=i.getContextAttributes();let _=null,B=null;const U=[],N=[],Z=new ne;let H=null;const F=new hi;F.layers.enable(1),F.viewport=new sn;const et=new hi;et.layers.enable(2),et.viewport=new sn;const D=[F,et],C=new jE;C.layers.enable(1),C.layers.enable(2);let V=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let dt=U[K];return dt===void 0&&(dt=new yh,U[K]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(K){let dt=U[K];return dt===void 0&&(dt=new yh,U[K]=dt),dt.getGripSpace()},this.getHand=function(K){let dt=U[K];return dt===void 0&&(dt=new yh,U[K]=dt),dt.getHandSpace()};function it(K){const dt=N.indexOf(K.inputSource);if(dt===-1)return;const xt=U[dt];xt!==void 0&&(xt.update(K.inputSource,K.frame,p||h),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function gt(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ut);for(let K=0;K<U.length;K++){const dt=N[K];dt!==null&&(N[K]=null,U[K].disconnect(dt))}V=null,ct=null,R.reset(),e.setRenderTarget(_),M=null,S=null,y=null,l=null,B=null,yt.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(Z.width,Z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ut),v.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(Z),l.renderState.layers===void 0){const dt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,dt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Pa(M.framebufferWidth,M.framebufferHeight,{format:ii,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let dt=null,xt=null,Rt=null;v.depth&&(Rt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,dt=v.stencil?Es:vs,xt=v.stencil?Ms:mr);const Ot={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:u};y=new XRWebGLBinding(l,i),S=y.createProjectionLayer(Ot),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),B=new Pa(S.textureWidth,S.textureHeight,{format:ii,type:Zi,depthTexture:new C_(S.textureWidth,S.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ut(K){for(let dt=0;dt<K.removed.length;dt++){const xt=K.removed[dt],Rt=N.indexOf(xt);Rt>=0&&(N[Rt]=null,U[Rt].disconnect(xt))}for(let dt=0;dt<K.added.length;dt++){const xt=K.added[dt];let Rt=N.indexOf(xt);if(Rt===-1){for(let Kt=0;Kt<U.length;Kt++)if(Kt>=N.length){N.push(xt),Rt=Kt;break}else if(N[Kt]===null){N[Kt]=xt,Rt=Kt;break}if(Rt===-1)break}const Ot=U[Rt];Ot&&Ot.connect(xt)}}const z=new ot,W=new ot;function j(K,dt,xt){z.setFromMatrixPosition(dt.matrixWorld),W.setFromMatrixPosition(xt.matrixWorld);const Rt=z.distanceTo(W),Ot=dt.projectionMatrix.elements,Kt=xt.projectionMatrix.elements,ae=Ot[14]/(Ot[10]-1),Ae=Ot[14]/(Ot[10]+1),I=(Ot[9]+1)/Ot[5],Oe=(Ot[9]-1)/Ot[5],ge=(Ot[8]-1)/Ot[0],ye=(Kt[8]+1)/Kt[0],Vt=ae*ge,ue=ae*ye,$t=Rt/(-ge+ye),ee=$t*-ge;dt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ee),K.translateZ($t),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const O=ae+$t,E=Ae+$t,w=Vt-ee,Q=ue+(Rt-ee),lt=I*Ae/E*O,ft=Oe*Ae/E*O;K.projectionMatrix.makePerspective(w,Q,lt,ft,O,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function Et(K,dt){dt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(dt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;R.texture!==null&&(K.near=R.depthNear,K.far=R.depthFar),C.near=et.near=F.near=K.near,C.far=et.far=F.far=K.far,(V!==C.near||ct!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ct=C.far,F.near=V,F.far=ct,et.near=V,et.far=ct,F.updateProjectionMatrix(),et.updateProjectionMatrix(),K.updateProjectionMatrix());const dt=K.parent,xt=C.cameras;Et(C,dt);for(let Rt=0;Rt<xt.length;Rt++)Et(xt[Rt],dt);xt.length===2?j(C,F,et):C.projectionMatrix.copy(F.projectionMatrix),L(K,C,dt)};function L(K,dt,xt){xt===null?K.matrix.copy(dt.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(dt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=nd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(K){m=K,S!==null&&(S.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let $=null;function St(K,dt){if(g=dt.getViewerPose(p||h),b=dt,g!==null){const xt=g.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let Rt=!1;xt.length!==C.cameras.length&&(C.cameras.length=0,Rt=!0);for(let Kt=0;Kt<xt.length;Kt++){const ae=xt[Kt];let Ae=null;if(M!==null)Ae=M.getViewport(ae);else{const Oe=y.getViewSubImage(S,ae);Ae=Oe.viewport,Kt===0&&(e.setRenderTargetTextures(B,Oe.colorTexture,S.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(B))}let I=D[Kt];I===void 0&&(I=new hi,I.layers.enable(Kt),I.viewport=new sn,D[Kt]=I),I.matrix.fromArray(ae.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ae.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Kt===0&&(C.matrix.copy(I.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Rt===!0&&C.cameras.push(I)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Kt=y.getDepthInformation(xt[0]);Kt&&Kt.isValid&&Kt.texture&&R.init(e,Kt,l.renderState)}}for(let xt=0;xt<U.length;xt++){const Rt=N[xt],Ot=U[xt];Rt!==null&&Ot!==void 0&&Ot.update(Rt,dt,p||h)}$&&$(K,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),b=null}const yt=new R_;yt.setAnimationLoop(St),this.setAnimationLoop=function(K){$=K},this.dispose=function(){}}}const or=new Ki,t3=new en;function e3(o,e){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,T_(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,B,U,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),y(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),S(v,_),_.isMeshPhysicalMaterial&&M(v,_,N)):_.isMeshMatcapMaterial?(u(v,_),b(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),R(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(h(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?m(v,_,B,U):_.isSpriteMaterial?p(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===On&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===On&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const B=e.get(_),U=B.envMap,N=B.envMapRotation;U&&(v.envMap.value=U,or.copy(N),or.x*=-1,or.y*=-1,or.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),v.envMapRotation.value.setFromMatrix4(t3.makeRotationFromEuler(or)),v.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function m(v,_,B,U){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*B,v.scale.value=U*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function p(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function S(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,B){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===On&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=B.texture,v.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function b(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const B=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(B.matrixWorld),v.nearDistance.value=B.shadow.camera.near,v.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function n3(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,U){const N=U.program;r.uniformBlockBinding(B,N)}function p(B,U){let N=l[B.id];N===void 0&&(b(B),N=g(B),l[B.id]=N,B.addEventListener("dispose",v));const Z=U.program;r.updateUBOMapping(B,Z);const H=e.render.frame;u[B.id]!==H&&(S(B),u[B.id]=H)}function g(B){const U=y();B.__bindingPointIndex=U;const N=o.createBuffer(),Z=B.__size,H=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,Z,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,N),N}function y(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const U=l[B.id],N=B.uniforms,Z=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let H=0,F=N.length;H<F;H++){const et=Array.isArray(N[H])?N[H]:[N[H]];for(let D=0,C=et.length;D<C;D++){const V=et[D];if(M(V,H,D,Z)===!0){const ct=V.__offset,it=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let ut=0;ut<it.length;ut++){const z=it[ut],W=R(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,ct+gt,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,gt),gt+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,U,N,Z){const H=B.value,F=U+"_"+N;if(Z[F]===void 0)return typeof H=="number"||typeof H=="boolean"?Z[F]=H:Z[F]=H.clone(),!0;{const et=Z[F];if(typeof H=="number"||typeof H=="boolean"){if(et!==H)return Z[F]=H,!0}else if(et.equals(H)===!1)return et.copy(H),!0}return!1}function b(B){const U=B.uniforms;let N=0;const Z=16;for(let F=0,et=U.length;F<et;F++){const D=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,V=D.length;C<V;C++){const ct=D[C],it=Array.isArray(ct.value)?ct.value:[ct.value];for(let gt=0,ut=it.length;gt<ut;gt++){const z=it[gt],W=R(z),j=N%Z,Et=j%W.boundary,L=j+Et;N+=Et,L!==0&&Z-L<W.storage&&(N+=Z-L),ct.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=N,N+=W.storage}}}const H=N%Z;return H>0&&(N+=Z-H),B.__size=N,B.__cache={},this}function R(B){const U={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(U.boundary=4,U.storage=4):B.isVector2?(U.boundary=8,U.storage=8):B.isVector3||B.isColor?(U.boundary=16,U.storage=12):B.isVector4?(U.boundary=16,U.storage=16):B.isMatrix3?(U.boundary=48,U.storage=48):B.isMatrix4?(U.boundary=64,U.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),U}function v(B){const U=B.target;U.removeEventListener("dispose",v);const N=h.indexOf(U.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class i3{constructor(e={}){const{canvas:i=qx(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const M=new Uint32Array(4),b=new Int32Array(4);let R=null,v=null;const _=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Si,this.toneMapping=Na,this.toneMappingExposure=1;const U=this;let N=!1,Z=0,H=0,F=null,et=-1,D=null;const C=new sn,V=new sn;let ct=null;const it=new Te(0);let gt=0,ut=i.width,z=i.height,W=1,j=null,Et=null;const L=new sn(0,0,ut,z),$=new sn(0,0,ut,z);let St=!1;const yt=new A_;let K=!1,dt=!1;const xt=new en,Rt=new ot,Ot=new sn,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Ae(){return F===null?W:1}let I=r;function Oe(A,k){return i.getContext(A,k)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rd}`),i.addEventListener("webglcontextlost",mt,!1),i.addEventListener("webglcontextrestored",vt,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),I===null){const k="webgl2";if(I=Oe(k,A),I===null)throw Oe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,ye,Vt,ue,$t,ee,O,E,w,Q,lt,ft,wt,Mt,Dt,Ht,Tt,zt,pe,jt,Pt,Wt,ie,Re;function X(){ge=new cM(I),ge.init(),Wt=new YE(I,ge),ye=new nM(I,ge,e,Wt),Vt=new XE(I),ue=new hM(I),$t=new DE,ee=new qE(I,ge,Vt,$t,ye,Wt,ue),O=new aM(U),E=new lM(U),w=new vS(I),ie=new tM(I,w),Q=new uM(I,w,ue,ie),lt=new pM(I,Q,w,ue),pe=new dM(I,ye,ee),Ht=new iM($t),ft=new wE(U,O,E,ge,ye,ie,Ht),wt=new e3(U,$t),Mt=new LE,Dt=new IE(ge),zt=new $y(U,O,E,Vt,lt,S,m),Tt=new kE(U,lt,ye),Re=new n3(I,ue,ye,Vt),jt=new eM(I,ge,ue),Pt=new fM(I,ge,ue),ue.programs=ft.programs,U.capabilities=ye,U.extensions=ge,U.properties=$t,U.renderLists=Mt,U.shadowMap=Tt,U.state=Vt,U.info=ue}X();const At=new $E(U,I);this.xr=At,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(ut,z,!1))},this.getSize=function(A){return A.set(ut,z)},this.setSize=function(A,k,at=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ut=A,z=k,i.width=Math.floor(A*W),i.height=Math.floor(k*W),at===!0&&(i.style.width=A+"px",i.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ut*W,z*W).floor()},this.setDrawingBufferSize=function(A,k,at){ut=A,z=k,W=at,i.width=Math.floor(A*at),i.height=Math.floor(k*at),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,k,at,st){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,k,at,st),Vt.viewport(C.copy(L).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy($)},this.setScissor=function(A,k,at,st){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,k,at,st),Vt.scissor(V.copy($).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Vt.setScissorTest(St=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){Et=A},this.getClearColor=function(A){return A.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(A=!0,k=!0,at=!0){let st=0;if(A){let Y=!1;if(F!==null){const bt=F.texture.format;Y=bt===fd||bt===ud||bt===cd}if(Y){const bt=F.texture.type,Nt=bt===Zi||bt===mr||bt===No||bt===Ms||bt===od||bt===ld,Bt=zt.getClearColor(),Ft=zt.getClearAlpha(),Jt=Bt.r,qt=Bt.g,Xt=Bt.b;Nt?(M[0]=Jt,M[1]=qt,M[2]=Xt,M[3]=Ft,I.clearBufferuiv(I.COLOR,0,M)):(b[0]=Jt,b[1]=qt,b[2]=Xt,b[3]=Ft,I.clearBufferiv(I.COLOR,0,b))}else st|=I.COLOR_BUFFER_BIT}k&&(st|=I.DEPTH_BUFFER_BIT),at&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",mt,!1),i.removeEventListener("webglcontextrestored",vt,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),Mt.dispose(),Dt.dispose(),$t.dispose(),O.dispose(),E.dispose(),lt.dispose(),ie.dispose(),Re.dispose(),ft.dispose(),At.dispose(),At.removeEventListener("sessionstart",jn),At.removeEventListener("sessionend",ri),He.stop()};function mt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const A=ue.autoReset,k=Tt.enabled,at=Tt.autoUpdate,st=Tt.needsUpdate,Y=Tt.type;X(),ue.autoReset=A,Tt.enabled=k,Tt.autoUpdate=at,Tt.needsUpdate=st,Tt.type=Y}function Ct(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qt(A){const k=A.target;k.removeEventListener("dispose",Qt),me(k)}function me(A){ke(A),$t.remove(A)}function ke(A){const k=$t.get(A).programs;k!==void 0&&(k.forEach(function(at){ft.releaseProgram(at)}),A.isShaderMaterial&&ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,at,st,Y,bt){k===null&&(k=Kt);const Nt=Y.isMesh&&Y.matrixWorld.determinant()<0,Bt=ta(A,k,at,st,Y);Vt.setMaterial(st,Nt);let Ft=at.index,Jt=1;if(st.wireframe===!0){if(Ft=Q.getWireframeAttribute(at),Ft===void 0)return;Jt=2}const qt=at.drawRange,Xt=at.attributes.position;let se=qt.start*Jt,Pe=(qt.start+qt.count)*Jt;bt!==null&&(se=Math.max(se,bt.start*Jt),Pe=Math.min(Pe,(bt.start+bt.count)*Jt)),Ft!==null?(se=Math.max(se,0),Pe=Math.min(Pe,Ft.count)):Xt!=null&&(se=Math.max(se,0),Pe=Math.min(Pe,Xt.count));const Be=Pe-se;if(Be<0||Be===1/0)return;ie.setup(Y,st,Bt,at,Ft);let Qe,ve=jt;if(Ft!==null&&(Qe=w.get(Ft),ve=Pt,ve.setIndex(Qe)),Y.isMesh)st.wireframe===!0?(Vt.setLineWidth(st.wireframeLinewidth*Ae()),ve.setMode(I.LINES)):ve.setMode(I.TRIANGLES);else if(Y.isLine){let Gt=st.linewidth;Gt===void 0&&(Gt=1),Vt.setLineWidth(Gt*Ae()),Y.isLineSegments?ve.setMode(I.LINES):Y.isLineLoop?ve.setMode(I.LINE_LOOP):ve.setMode(I.LINE_STRIP)}else Y.isPoints?ve.setMode(I.POINTS):Y.isSprite&&ve.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ve.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))ve.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Gt=Y._multiDrawStarts,nn=Y._multiDrawCounts,Se=Y._multiDrawCount,Ge=Ft?w.get(Ft).bytesPerElement:1,bi=$t.get(st).currentProgram.getUniforms();for(let yn=0;yn<Se;yn++)bi.setValue(I,"_gl_DrawID",yn),ve.render(Gt[yn]/Ge,nn[yn])}else if(Y.isInstancedMesh)ve.renderInstances(se,Be,Y.count);else if(at.isInstancedBufferGeometry){const Gt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,nn=Math.min(at.instanceCount,Gt);ve.renderInstances(se,Be,nn)}else ve.render(se,Be)};function je(A,k,at){A.transparent===!0&&A.side===qi&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,Ba(A,k,at),A.side=Oa,A.needsUpdate=!0,Ba(A,k,at),A.side=qi):Ba(A,k,at)}this.compile=function(A,k,at=null){at===null&&(at=A),v=Dt.get(at),v.init(k),B.push(v),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),A!==at&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const st=new Set;return A.traverse(function(Y){const bt=Y.material;if(bt)if(Array.isArray(bt))for(let Nt=0;Nt<bt.length;Nt++){const Bt=bt[Nt];je(Bt,at,Y),st.add(Bt)}else je(bt,at,Y),st.add(bt)}),B.pop(),v=null,st},this.compileAsync=function(A,k,at=null){const st=this.compile(A,k,at);return new Promise(Y=>{function bt(){if(st.forEach(function(Nt){$t.get(Nt).currentProgram.isReady()&&st.delete(Nt)}),st.size===0){Y(A);return}setTimeout(bt,10)}ge.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let _e=null;function Yn(A){_e&&_e(A)}function jn(){He.stop()}function ri(){He.start()}const He=new R_;He.setAnimationLoop(Yn),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(A){_e=A,At.setAnimationLoop(A),A===null?He.stop():He.start()},At.addEventListener("sessionstart",jn),At.addEventListener("sessionend",ri),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(k),k=At.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,k,F),v=Dt.get(A,B.length),v.init(k),B.push(v),xt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),yt.setFromProjectionMatrix(xt),dt=this.localClippingEnabled,K=Ht.init(this.clippingPlanes,dt),R=Mt.get(A,_.length),R.init(),_.push(R),At.enabled===!0&&At.isPresenting===!0){const bt=U.xr.getDepthSensingMesh();bt!==null&&cn(bt,k,-1/0,U.sortObjects)}cn(A,k,0,U.sortObjects),R.finish(),U.sortObjects===!0&&R.sort(j,Et),ae=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,ae&&zt.addToRenderList(R,A),this.info.render.frame++,K===!0&&Ht.beginShadows();const at=v.state.shadowsArray;Tt.render(at,A,k),K===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=R.opaque,Y=R.transmissive;if(v.setupLights(),k.isArrayCamera){const bt=k.cameras;if(Y.length>0)for(let Nt=0,Bt=bt.length;Nt<Bt;Nt++){const Ft=bt[Nt];gr(st,Y,A,Ft)}ae&&zt.render(A);for(let Nt=0,Bt=bt.length;Nt<Bt;Nt++){const Ft=bt[Nt];Ti(R,A,Ft,Ft.viewport)}}else Y.length>0&&gr(st,Y,A,k),ae&&zt.render(A),Ti(R,A,k);F!==null&&(ee.updateMultisampleRenderTarget(F),ee.updateRenderTargetMipmap(F)),A.isScene===!0&&A.onAfterRender(U,A,k),ie.resetDefaultState(),et=-1,D=null,B.pop(),B.length>0?(v=B[B.length-1],K===!0&&Ht.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function cn(A,k,at,st){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||yt.intersectsSprite(A)){st&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xt);const Nt=lt.update(A),Bt=A.material;Bt.visible&&R.push(A,Nt,Bt,at,Ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||yt.intersectsObject(A))){const Nt=lt.update(A),Bt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Ot.copy(Nt.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4(xt)),Array.isArray(Bt)){const Ft=Nt.groups;for(let Jt=0,qt=Ft.length;Jt<qt;Jt++){const Xt=Ft[Jt],se=Bt[Xt.materialIndex];se&&se.visible&&R.push(A,Nt,se,at,Ot.z,Xt)}}else Bt.visible&&R.push(A,Nt,Bt,at,Ot.z,null)}}const bt=A.children;for(let Nt=0,Bt=bt.length;Nt<Bt;Nt++)cn(bt[Nt],k,at,st)}function Ti(A,k,at,st){const Y=A.opaque,bt=A.transmissive,Nt=A.transparent;v.setupLightsView(at),K===!0&&Ht.setGlobalState(U.clippingPlanes,at),st&&Vt.viewport(C.copy(st)),Y.length>0&&_r(Y,k,at),bt.length>0&&_r(bt,k,at),Nt.length>0&&_r(Nt,k,at),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function gr(A,k,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[st.id]===void 0&&(v.state.transmissionRenderTarget[st.id]=new Pa(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?bs:Zi,minFilter:hr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const bt=v.state.transmissionRenderTarget[st.id],Nt=st.viewport||C;bt.setSize(Nt.z,Nt.w);const Bt=U.getRenderTarget();U.setRenderTarget(bt),U.getClearColor(it),gt=U.getClearAlpha(),gt<1&&U.setClearColor(16777215,.5),U.clear(),ae&&zt.render(at);const Ft=U.toneMapping;U.toneMapping=Na;const Jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),v.setupLightsView(st),K===!0&&Ht.setGlobalState(U.clippingPlanes,st),_r(A,at,st),ee.updateMultisampleRenderTarget(bt),ee.updateRenderTargetMipmap(bt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Xt=0,se=k.length;Xt<se;Xt++){const Pe=k[Xt],Be=Pe.object,Qe=Pe.geometry,ve=Pe.material,Gt=Pe.group;if(ve.side===qi&&Be.layers.test(st.layers)){const nn=ve.side;ve.side=On,ve.needsUpdate=!0,Fo(Be,at,st,Qe,ve,Gt),ve.side=nn,ve.needsUpdate=!0,qt=!0}}qt===!0&&(ee.updateMultisampleRenderTarget(bt),ee.updateRenderTargetMipmap(bt))}U.setRenderTarget(Bt),U.setClearColor(it,gt),Jt!==void 0&&(st.viewport=Jt),U.toneMapping=Ft}function _r(A,k,at){const st=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,bt=A.length;Y<bt;Y++){const Nt=A[Y],Bt=Nt.object,Ft=Nt.geometry,Jt=st===null?Nt.material:st,qt=Nt.group;Bt.layers.test(at.layers)&&Fo(Bt,k,at,Ft,Jt,qt)}}function Fo(A,k,at,st,Y,bt){A.onBeforeRender(U,k,at,st,Y,bt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.transparent===!0&&Y.side===qi&&Y.forceSinglePass===!1?(Y.side=On,Y.needsUpdate=!0,U.renderBufferDirect(at,k,st,Y,A,bt),Y.side=Oa,Y.needsUpdate=!0,U.renderBufferDirect(at,k,st,Y,A,bt),Y.side=qi):U.renderBufferDirect(at,k,st,Y,A,bt),A.onAfterRender(U,k,at,st,Y,bt)}function Ba(A,k,at){k.isScene!==!0&&(k=Kt);const st=$t.get(A),Y=v.state.lights,bt=v.state.shadowsArray,Nt=Y.state.version,Bt=ft.getParameters(A,Y.state,bt,k,at),Ft=ft.getProgramCacheKey(Bt);let Jt=st.programs;st.environment=A.isMeshStandardMaterial?k.environment:null,st.fog=k.fog,st.envMap=(A.isMeshStandardMaterial?E:O).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",Qt),Jt=new Map,st.programs=Jt);let qt=Jt.get(Ft);if(qt!==void 0){if(st.currentProgram===qt&&st.lightsStateVersion===Nt)return vr(A,Bt),qt}else Bt.uniforms=ft.getUniforms(A),A.onBeforeCompile(Bt,U),qt=ft.acquireProgram(Bt,Ft),Jt.set(Ft,qt),st.uniforms=Bt.uniforms;const Xt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=Ht.uniform),vr(A,Bt),st.needsLights=Ia(A),st.lightsStateVersion=Nt,st.needsLights&&(Xt.ambientLightColor.value=Y.state.ambient,Xt.lightProbe.value=Y.state.probe,Xt.directionalLights.value=Y.state.directional,Xt.directionalLightShadows.value=Y.state.directionalShadow,Xt.spotLights.value=Y.state.spot,Xt.spotLightShadows.value=Y.state.spotShadow,Xt.rectAreaLights.value=Y.state.rectArea,Xt.ltc_1.value=Y.state.rectAreaLTC1,Xt.ltc_2.value=Y.state.rectAreaLTC2,Xt.pointLights.value=Y.state.point,Xt.pointLightShadows.value=Y.state.pointShadow,Xt.hemisphereLights.value=Y.state.hemi,Xt.directionalShadowMap.value=Y.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xt.spotShadowMap.value=Y.state.spotShadowMap,Xt.spotLightMatrix.value=Y.state.spotLightMatrix,Xt.spotLightMap.value=Y.state.spotLightMap,Xt.pointShadowMap.value=Y.state.pointShadowMap,Xt.pointShadowMatrix.value=Y.state.pointShadowMatrix),st.currentProgram=qt,st.uniformsList=null,qt}function $i(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Tc.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function vr(A,k){const at=$t.get(A);at.outputColorSpace=k.outputColorSpace,at.batching=k.batching,at.batchingColor=k.batchingColor,at.instancing=k.instancing,at.instancingColor=k.instancingColor,at.instancingMorph=k.instancingMorph,at.skinning=k.skinning,at.morphTargets=k.morphTargets,at.morphNormals=k.morphNormals,at.morphColors=k.morphColors,at.morphTargetsCount=k.morphTargetsCount,at.numClippingPlanes=k.numClippingPlanes,at.numIntersection=k.numClipIntersection,at.vertexAlphas=k.vertexAlphas,at.vertexTangents=k.vertexTangents,at.toneMapping=k.toneMapping}function ta(A,k,at,st,Y){k.isScene!==!0&&(k=Kt),ee.resetTextureUnits();const bt=k.fog,Nt=st.isMeshStandardMaterial?k.environment:null,Bt=F===null?U.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:za,Ft=(st.isMeshStandardMaterial?E:O).get(st.envMap||Nt),Jt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,qt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Xt=!!at.morphAttributes.position,se=!!at.morphAttributes.normal,Pe=!!at.morphAttributes.color;let Be=Na;st.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Be=U.toneMapping);const Qe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ve=Qe!==void 0?Qe.length:0,Gt=$t.get(st),nn=v.state.lights;if(K===!0&&(dt===!0||A!==D)){const Ie=A===D&&st.id===et;Ht.setState(st,A,Ie)}let Se=!1;st.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==nn.state.version||Gt.outputColorSpace!==Bt||Y.isBatchedMesh&&Gt.batching===!1||!Y.isBatchedMesh&&Gt.batching===!0||Y.isBatchedMesh&&Gt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Gt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Gt.instancing===!1||!Y.isInstancedMesh&&Gt.instancing===!0||Y.isSkinnedMesh&&Gt.skinning===!1||!Y.isSkinnedMesh&&Gt.skinning===!0||Y.isInstancedMesh&&Gt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Gt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Gt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Gt.instancingMorph===!1&&Y.morphTexture!==null||Gt.envMap!==Ft||st.fog===!0&&Gt.fog!==bt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Ht.numPlanes||Gt.numIntersection!==Ht.numIntersection)||Gt.vertexAlphas!==Jt||Gt.vertexTangents!==qt||Gt.morphTargets!==Xt||Gt.morphNormals!==se||Gt.morphColors!==Pe||Gt.toneMapping!==Be||Gt.morphTargetsCount!==ve)&&(Se=!0):(Se=!0,Gt.__version=st.version);let Ge=Gt.currentProgram;Se===!0&&(Ge=Ba(st,k,Y));let bi=!1,yn=!1,na=!1;const Xe=Ge.getUniforms(),Bn=Gt.uniforms;if(Vt.useProgram(Ge.program)&&(bi=!0,yn=!0,na=!0),st.id!==et&&(et=st.id,yn=!0),bi||D!==A){Xe.setValue(I,"projectionMatrix",A.projectionMatrix),Xe.setValue(I,"viewMatrix",A.matrixWorldInverse);const Ie=Xe.map.cameraPosition;Ie!==void 0&&Ie.setValue(I,Rt.setFromMatrixPosition(A.matrixWorld)),ye.logarithmicDepthBuffer&&Xe.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Xe.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,yn=!0,na=!0)}if(Y.isSkinnedMesh){Xe.setOptional(I,Y,"bindMatrix"),Xe.setOptional(I,Y,"bindMatrixInverse");const Ie=Y.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Xe.setValue(I,"boneTexture",Ie.boneTexture,ee))}Y.isBatchedMesh&&(Xe.setOptional(I,Y,"batchingTexture"),Xe.setValue(I,"batchingTexture",Y._matricesTexture,ee),Xe.setOptional(I,Y,"batchingIdTexture"),Xe.setValue(I,"batchingIdTexture",Y._indirectTexture,ee),Xe.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Xe.setValue(I,"batchingColorTexture",Y._colorsTexture,ee));const Cs=at.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&pe.update(Y,at,Ge),(yn||Gt.receiveShadow!==Y.receiveShadow)&&(Gt.receiveShadow=Y.receiveShadow,Xe.setValue(I,"receiveShadow",Y.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Bn.envMap.value=Ft,Bn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&k.environment!==null&&(Bn.envMapIntensity.value=k.environmentIntensity),yn&&(Xe.setValue(I,"toneMappingExposure",U.toneMappingExposure),Gt.needsLights&&ea(Bn,na),bt&&st.fog===!0&&wt.refreshFogUniforms(Bn,bt),wt.refreshMaterialUniforms(Bn,st,W,z,v.state.transmissionRenderTarget[A.id]),Tc.upload(I,$i(Gt),Bn,ee)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Tc.upload(I,$i(Gt),Bn,ee),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Xe.setValue(I,"center",Y.center),Xe.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Xe.setValue(I,"normalMatrix",Y.normalMatrix),Xe.setValue(I,"modelMatrix",Y.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Ie=st.uniformsGroups;for(let Fa=0,Ho=Ie.length;Fa<Ho;Fa++){const xr=Ie[Fa];Re.update(xr,Ge),Re.bind(xr,Ge)}}return Ge}function ea(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Ia(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,k,at){$t.get(A.texture).__webglTexture=k,$t.get(A.depthTexture).__webglTexture=at;const st=$t.get(A);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=at===void 0,st.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const at=$t.get(A);at.__webglFramebuffer=k,at.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,at=0){F=A,Z=k,H=at;let st=!0,Y=null,bt=!1,Nt=!1;if(A){const Ft=$t.get(A);Ft.__useDefaultFramebuffer!==void 0?(Vt.bindFramebuffer(I.FRAMEBUFFER,null),st=!1):Ft.__webglFramebuffer===void 0?ee.setupRenderTarget(A):Ft.__hasExternalTextures&&ee.rebindTextures(A,$t.get(A.texture).__webglTexture,$t.get(A.depthTexture).__webglTexture);const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Nt=!0);const qt=$t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qt[k])?Y=qt[k][at]:Y=qt[k],bt=!0):A.samples>0&&ee.useMultisampledRTT(A)===!1?Y=$t.get(A).__webglMultisampledFramebuffer:Array.isArray(qt)?Y=qt[at]:Y=qt,C.copy(A.viewport),V.copy(A.scissor),ct=A.scissorTest}else C.copy(L).multiplyScalar(W).floor(),V.copy($).multiplyScalar(W).floor(),ct=St;if(Vt.bindFramebuffer(I.FRAMEBUFFER,Y)&&st&&Vt.drawBuffers(A,Y),Vt.viewport(C),Vt.scissor(V),Vt.setScissorTest(ct),bt){const Ft=$t.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ft.__webglTexture,at)}else if(Nt){const Ft=$t.get(A.texture),Jt=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.__webglTexture,at||0,Jt)}et=-1},this.readRenderTargetPixels=function(A,k,at,st,Y,bt,Nt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=$t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt){Vt.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const Ft=A.texture,Jt=Ft.format,qt=Ft.type;if(!ye.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-st&&at>=0&&at<=A.height-Y&&I.readPixels(k,at,st,Y,Wt.convert(Jt),Wt.convert(qt),bt)}finally{const Ft=F!==null?$t.get(F).__webglFramebuffer:null;Vt.bindFramebuffer(I.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(A,k,at,st,Y,bt,Nt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=$t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt){Vt.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const Ft=A.texture,Jt=Ft.format,qt=Ft.type;if(!ye.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-st&&at>=0&&at<=A.height-Y){const Xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),I.readPixels(k,at,st,Y,Wt.convert(Jt),Wt.convert(qt),0),I.flush();const se=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await Yx(I,se,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt)}finally{I.deleteBuffer(Xt),I.deleteSync(se)}return bt}}finally{const Ft=F!==null?$t.get(F).__webglFramebuffer:null;Vt.bindFramebuffer(I.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(A,k=null,at=0){A.isTexture!==!0&&(Lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const st=Math.pow(2,-at),Y=Math.floor(A.image.width*st),bt=Math.floor(A.image.height*st),Nt=k!==null?k.x:0,Bt=k!==null?k.y:0;ee.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,at,0,0,Nt,Bt,Y,bt),Vt.unbindTexture()},this.copyTextureToTexture=function(A,k,at=null,st=null,Y=0){A.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,A=arguments[1],k=arguments[2],Y=arguments[3]||0,at=null);let bt,Nt,Bt,Ft,Jt,qt;at!==null?(bt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,Bt=at.min.x,Ft=at.min.y):(bt=A.image.width,Nt=A.image.height,Bt=0,Ft=0),st!==null?(Jt=st.x,qt=st.y):(Jt=0,qt=0);const Xt=Wt.convert(k.format),se=Wt.convert(k.type);ee.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Pe=I.getParameter(I.UNPACK_ROW_LENGTH),Be=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qe=I.getParameter(I.UNPACK_SKIP_PIXELS),ve=I.getParameter(I.UNPACK_SKIP_ROWS),Gt=I.getParameter(I.UNPACK_SKIP_IMAGES),nn=A.isCompressedTexture?A.mipmaps[Y]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,nn.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nn.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ft),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Y,Jt,qt,bt,Nt,Xt,se,nn.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Y,Jt,qt,nn.width,nn.height,Xt,nn.data):I.texSubImage2D(I.TEXTURE_2D,Y,Jt,qt,bt,Nt,Xt,se,nn),I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Be),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qe),I.pixelStorei(I.UNPACK_SKIP_ROWS,ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gt),Y===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Vt.unbindTexture()},this.copyTextureToTexture3D=function(A,k,at=null,st=null,Y=0){A.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,st=arguments[1]||null,A=arguments[2],k=arguments[3],Y=arguments[4]||0);let bt,Nt,Bt,Ft,Jt,qt,Xt,se,Pe;const Be=A.isCompressedTexture?A.mipmaps[Y]:A.image;at!==null?(bt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,Bt=at.max.z-at.min.z,Ft=at.min.x,Jt=at.min.y,qt=at.min.z):(bt=Be.width,Nt=Be.height,Bt=Be.depth,Ft=0,Jt=0,qt=0),st!==null?(Xt=st.x,se=st.y,Pe=st.z):(Xt=0,se=0,Pe=0);const Qe=Wt.convert(k.format),ve=Wt.convert(k.type);let Gt;if(k.isData3DTexture)ee.setTexture3D(k,0),Gt=I.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)ee.setTexture2DArray(k,0),Gt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const nn=I.getParameter(I.UNPACK_ROW_LENGTH),Se=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ge=I.getParameter(I.UNPACK_SKIP_PIXELS),bi=I.getParameter(I.UNPACK_SKIP_ROWS),yn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ft),I.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Gt,Y,Xt,se,Pe,bt,Nt,Bt,Qe,ve,Be.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Gt,Y,Xt,se,Pe,bt,Nt,Bt,Qe,Be.data):I.texSubImage3D(Gt,Y,Xt,se,Pe,bt,Nt,Bt,Qe,ve,Be),I.pixelStorei(I.UNPACK_ROW_LENGTH,nn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Se),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,bi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,yn),Y===0&&k.generateMipmaps&&I.generateMipmap(Gt),Vt.unbindTexture()},this.initRenderTarget=function(A){$t.get(A).__webglFramebuffer===void 0&&ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),Vt.unbindTexture()},this.resetState=function(){Z=0,H=0,F=null,Vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===hd?"display-p3":"srgb",i.unpackColorSpace=be.workingColorSpace===Bc?"display-p3":"srgb"}}class Yg extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class a3 extends bn{constructor(e=null,i=1,r=1,l,u,h,d,m,p=Nn,g=Nn,y,S){super(null,h,d,m,p,g,l,u,y,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class r3 extends Bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new ot,Nc=new ot,jg=new en,Do=new v_,gc=new Ic,Mh=new ot,Zg=new ot;class s3 extends Pn{constructor(e=new Ji,i=new r3){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Lc.fromBufferAttribute(i,l-1),Nc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Lc.distanceTo(Nc);e.setAttribute("lineDistance",new ji(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(l),gc.radius+=u,e.ray.intersectsSphere(gc)===!1)return;jg.copy(l).invert(),Do.copy(e.ray).applyMatrix4(jg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,S=r.attributes.position;if(g!==null){const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let R=M,v=b-1;R<v;R+=p){const _=g.getX(R),B=g.getX(R+1),U=_c(this,e,Do,m,_,B);U&&i.push(U)}if(this.isLineLoop){const R=g.getX(b-1),v=g.getX(M),_=_c(this,e,Do,m,R,v);_&&i.push(_)}}else{const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let R=M,v=b-1;R<v;R+=p){const _=_c(this,e,Do,m,R,R+1);_&&i.push(_)}if(this.isLineLoop){const R=_c(this,e,Do,m,b-1,M);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function _c(o,e,i,r,l,u){const h=o.geometry.attributes.position;if(Lc.fromBufferAttribute(h,l),Nc.fromBufferAttribute(h,u),i.distanceSqToSegment(Lc,Nc,Mh,Zg)>r)return;Mh.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(Mh);if(!(m<e.near||m>e.far))return{distance:m,point:Zg.clone().applyMatrix4(o.matrixWorld),index:l,face:null,faceIndex:null,object:o}}const Kg=new ot,Qg=new ot;class o3 extends s3{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)Kg.fromBufferAttribute(i,l),Qg.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Kg.distanceTo(Qg);e.setAttribute("lineDistance",new ji(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vc extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class l3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=Jg();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Jg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);function c3({mouseForce:o=20,cursorSize:e=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:u=32,dt:h=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:g=["#5227FF","#FF9FFC","#B19EEF"],style:y={},className:S="",autoDemo:M=!0,autoSpeed:b=.5,autoIntensity:R=2.2,takeoverDuration:v=.25,autoResumeDelay:_=1e3,autoRampDuration:B=.6}){const U=Un.useRef(null),N=Un.useRef(null),Z=Un.useRef(null),H=Un.useRef(null),F=Un.useRef(!0),et=Un.useRef(null);return Un.useEffect(()=>{if(!U.current)return;function D(E){let w;Array.isArray(E)&&E.length>0?E.length===1?w=[E[0],E[0]]:w=E:w=["#ffffff","#ffffff"];const Q=w.length,lt=new Uint8Array(Q*4);for(let wt=0;wt<Q;wt++){const Mt=new Te(w[wt]);lt[wt*4+0]=Math.round(Mt.r*255),lt[wt*4+1]=Math.round(Mt.g*255),lt[wt*4+2]=Math.round(Mt.b*255),lt[wt*4+3]=255}const ft=new a3(lt,Q,1,ii);return ft.magFilter=Tn,ft.minFilter=Tn,ft.wrapS=di,ft.wrapT=di,ft.generateMipmaps=!1,ft.needsUpdate=!0,ft}const C=D(g),V=new sn(0,0,0,0);class ct{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(w){this.container=w,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new i3({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Te(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new l3,this.clock.start()}resize(){if(!this.container)return;const w=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(w.width)),this.height=Math.max(1,Math.floor(w.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const it=new ct;class gt{constructor(){this.mouseMoved=!1,this.coords=new ne,this.coords_old=new ne,this.diff=new ne,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ne,this.takeoverTo=new ne,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(w){this.container=w,this.docTarget=w.ownerDocument||null;const Q=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);Q&&(this.listenerTarget=Q,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(w,Q){if(!this.container)return!1;const lt=this.container.getBoundingClientRect();return lt.width===0||lt.height===0?!1:w>=lt.left&&w<=lt.right&&Q>=lt.top&&Q<=lt.bottom}updateHoverState(w,Q){return this.isHoverInside=this.isPointInside(w,Q),this.isHoverInside}setCoords(w,Q){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const lt=this.container.getBoundingClientRect();if(lt.width===0||lt.height===0)return;const ft=(w-lt.left)/lt.width,wt=(Q-lt.top)/lt.height;this.coords.set(ft*2-1,-(wt*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(w,Q){this.coords.set(w,Q),this.mouseMoved=!0}onDocumentMouseMove(w){if(this.updateHoverState(w.clientX,w.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const Q=this.container.getBoundingClientRect();if(Q.width===0||Q.height===0)return;const lt=(w.clientX-Q.left)/Q.width,ft=(w.clientY-Q.top)/Q.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(lt*2-1,-(ft*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(w.clientX,w.clientY),this.hasUserControl=!0}}onDocumentTouchStart(w){if(w.touches.length!==1)return;const Q=w.touches[0];this.updateHoverState(Q.clientX,Q.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Q.clientX,Q.clientY),this.hasUserControl=!0)}onDocumentTouchMove(w){if(w.touches.length!==1)return;const Q=w.touches[0];this.updateHoverState(Q.clientX,Q.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Q.clientX,Q.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const w=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(w>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const Q=w*w*(3-2*w);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,Q)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const ut=new gt;class z{constructor(w,Q,lt){this.mouse=w,this.manager=Q,this.enabled=lt.enabled,this.speed=lt.speed,this.resumeDelay=lt.resumeDelay||3e3,this.rampDurationMs=(lt.rampDuration||0)*1e3,this.active=!1,this.current=new ne(0,0),this.target=new ne,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ne,this.pickNewTarget()}pickNewTarget(){const w=Math.random;this.target.set((w()*2-1)*(1-this.margin),(w()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const w=performance.now();if(w-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=w,this.activationTime=w),!this.active)return;this.mouse.isAutoActive=!0;let lt=(w-this.lastTime)/1e3;this.lastTime=w,lt>.2&&(lt=.016);const ft=this._tmpDir.subVectors(this.target,this.current),wt=ft.length();if(wt<.01){this.pickNewTarget();return}ft.normalize();let Mt=1;if(this.rampDurationMs>0){const Tt=Math.min(1,(w-this.activationTime)/this.rampDurationMs);Mt=Tt*Tt*(3-2*Tt)}const Dt=this.speed*lt*Mt,Ht=Math.min(Dt,wt);this.current.addScaledVector(ft,Ht),this.mouse.setNormalized(this.current.x,this.current.y)}}const W=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,j=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Et=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,L=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,$=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,St=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,yt=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,K=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,dt=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,xt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Rt{constructor(w){var Q;this.props=w||{},this.uniforms=(Q=this.props.material)==null?void 0:Q.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Yg,this.camera=new Uc,this.uniforms&&(this.material=new vc(this.props.material),this.geometry=new pr(2,2),this.plane=new ai(this.geometry,this.material),this.scene.add(this.plane))}update(){it.renderer.setRenderTarget(this.props.output||null),it.renderer.render(this.scene,this.camera),it.renderer.setRenderTarget(null)}}class Ot extends Rt{constructor(w){super({material:{vertexShader:W,fragmentShader:L,uniforms:{boundarySpace:{value:w.cellScale},px:{value:w.cellScale},fboSize:{value:w.fboSize},velocity:{value:w.src.texture},dt:{value:w.dt},isBFECC:{value:!0}}},output:w.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const w=new Ji,Q=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);w.setAttribute("position",new pi(Q,3));const lt=new vc({vertexShader:j,fragmentShader:L,uniforms:this.uniforms});this.line=new o3(w,lt),this.scene.add(this.line)}update({dt:w,isBounce:Q,BFECC:lt}){this.uniforms.dt.value=w,this.line.visible=Q,this.uniforms.isBFECC.value=lt,super.update()}}class Kt extends Rt{constructor(w){super({output:w.dst}),this.init(w)}init(w){super.init();const Q=new pr(1,1),lt=new vc({vertexShader:Et,fragmentShader:yt,blending:Eh,depthWrite:!1,uniforms:{px:{value:w.cellScale},force:{value:new ne(0,0)},center:{value:new ne(0,0)},scale:{value:new ne(w.cursor_size,w.cursor_size)}}});this.mouse=new ai(Q,lt),this.scene.add(this.mouse)}update(w){const Q=ut.diff.x/2*w.mouse_force,lt=ut.diff.y/2*w.mouse_force,ft=w.cursor_size*w.cellScale.x,wt=w.cursor_size*w.cellScale.y,Mt=Math.min(Math.max(ut.coords.x,-1+ft+w.cellScale.x*2),1-ft-w.cellScale.x*2),Dt=Math.min(Math.max(ut.coords.y,-1+wt+w.cellScale.y*2),1-wt-w.cellScale.y*2),Ht=this.mouse.material.uniforms;Ht.force.value.set(Q,lt),Ht.center.value.set(Mt,Dt),Ht.scale.value.set(w.cursor_size,w.cursor_size),super.update()}}class ae extends Rt{constructor(w){super({material:{vertexShader:W,fragmentShader:xt,uniforms:{boundarySpace:{value:w.boundarySpace},velocity:{value:w.src.texture},velocity_new:{value:w.dst_.texture},v:{value:w.viscous},px:{value:w.cellScale},dt:{value:w.dt}}},output:w.dst,output0:w.dst_,output1:w.dst}),this.init()}update({viscous:w,iterations:Q,dt:lt}){let ft,wt;this.uniforms.v.value=w;for(let Mt=0;Mt<Q;Mt++)Mt%2===0?(ft=this.props.output0,wt=this.props.output1):(ft=this.props.output1,wt=this.props.output0),this.uniforms.velocity_new.value=ft.texture,this.props.output=wt,this.uniforms.dt.value=lt,super.update();return wt}}class Ae extends Rt{constructor(w){super({material:{vertexShader:W,fragmentShader:St,uniforms:{boundarySpace:{value:w.boundarySpace},velocity:{value:w.src.texture},px:{value:w.cellScale},dt:{value:w.dt}}},output:w.dst}),this.init()}update({vel:w}){this.uniforms.velocity.value=w.texture,super.update()}}class I extends Rt{constructor(w){super({material:{vertexShader:W,fragmentShader:K,uniforms:{boundarySpace:{value:w.boundarySpace},pressure:{value:w.dst_.texture},divergence:{value:w.src.texture},px:{value:w.cellScale}}},output:w.dst,output0:w.dst_,output1:w.dst}),this.init()}update({iterations:w}){let Q,lt;for(let ft=0;ft<w;ft++)ft%2===0?(Q=this.props.output0,lt=this.props.output1):(Q=this.props.output1,lt=this.props.output0),this.uniforms.pressure.value=Q.texture,this.props.output=lt,super.update();return lt}}class Oe extends Rt{constructor(w){super({material:{vertexShader:W,fragmentShader:dt,uniforms:{boundarySpace:{value:w.boundarySpace},pressure:{value:w.src_p.texture},velocity:{value:w.src_v.texture},px:{value:w.cellScale},dt:{value:w.dt}}},output:w.dst}),this.init()}update({vel:w,pressure:Q}){this.uniforms.velocity.value=w.texture,this.uniforms.pressure.value=Q.texture,super.update()}}class ge{constructor(w){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...w},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ne,this.cellScale=new ne,this.boundarySpace=new ne,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?bs:Ei}createAllFBO(){const Q={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Tn,magFilter:Tn,wrapS:di,wrapT:di};for(let lt in this.fbos)this.fbos[lt]=new Pa(this.fboSize.x,this.fboSize.y,Q)}createShaderPass(){this.advection=new Ot({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Kt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ae({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Ae({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new I({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Oe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const w=Math.max(1,Math.round(this.options.resolution*it.width)),Q=Math.max(1,Math.round(this.options.resolution*it.height)),lt=1/w,ft=1/Q;this.cellScale.set(lt,ft),this.fboSize.set(w,Q)}resize(){this.calcSize();for(let w in this.fbos)this.fbos[w].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let w=this.fbos.vel_1;this.options.isViscous&&(w=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:w});const Q=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:w,pressure:Q})}}class ye{constructor(){this.init()}init(){this.simulation=new ge,this.scene=new Yg,this.camera=new Uc,this.output=new ai(new pr(2,2),new vc({vertexShader:W,fragmentShader:$,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ne},palette:{value:C},bgColor:{value:V}}})),this.scene.add(this.output)}addScene(w){this.scene.add(w)}resize(){this.simulation.resize()}render(){it.renderer.setRenderTarget(null),it.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Vt{constructor(w){this.props=w,it.init(w.$wrapper),ut.init(w.$wrapper),ut.autoIntensity=w.autoIntensity,ut.takeoverDuration=w.takeoverDuration,this.lastUserInteraction=performance.now(),ut.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new z(ut,this,{enabled:w.autoDemo,speed:w.autoSpeed,resumeDelay:w.autoResumeDelay,rampDuration:w.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():F.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(it.renderer.domElement),this.output=new ye}resize(){it.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),ut.update(),it.update(),this.output.update()}loop(){this.running&&(this.render(),H.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,H.current&&(cancelAnimationFrame(H.current),H.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),ut.dispose(),it.renderer){const w=it.renderer.domElement;w&&w.parentNode&&w.parentNode.removeChild(w),it.renderer.dispose()}}catch{}}}const ue=U.current;ue.style.position=ue.style.position||"relative",ue.style.overflow=ue.style.overflow||"hidden";const $t=new Vt({$wrapper:ue,autoDemo:M,autoSpeed:b,autoIntensity:R,takeoverDuration:v,autoResumeDelay:_,autoRampDuration:B});N.current=$t,(()=>{var Q;if(!N.current)return;const E=(Q=N.current.output)==null?void 0:Q.simulation;if(!E)return;const w=E.options.resolution;Object.assign(E.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),m!==w&&E.resize()})(),$t.start();const O=new ResizeObserver(()=>{N.current&&(et.current&&cancelAnimationFrame(et.current),et.current=requestAnimationFrame(()=>{N.current&&N.current.resize()}))});return O.observe(ue),Z.current=O,()=>{if(H.current&&cancelAnimationFrame(H.current),Z.current)try{Z.current.disconnect()}catch{}N.current&&N.current.dispose(),N.current=null}},[d,e,h,p,i,u,l,o,m,r,g,M,b,R,v,_,B]),Un.useEffect(()=>{var ct;const D=N.current;if(!D)return;const C=(ct=D.output)==null?void 0:ct.simulation;if(!C)return;const V=C.options.resolution;Object.assign(C.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),D.autoDriver&&(D.autoDriver.enabled=M,D.autoDriver.speed=b,D.autoDriver.resumeDelay=_,D.autoDriver.rampDurationMs=B*1e3,D.autoDriver.mouse&&(D.autoDriver.mouse.autoIntensity=R,D.autoDriver.mouse.takeoverDuration=v)),m!==V&&C.resize()},[o,e,i,r,l,u,h,d,m,p,M,b,R,v,_,B]),Lt.jsx("div",{ref:U,className:`liquid-ether-container ${S||""}`,style:y})}const u3=()=>Lt.jsx("nav",{className:"navbar","aria-label":"Main navigation",children:Lt.jsxs("ul",{children:[Lt.jsx("a",{href:"#home",children:Lt.jsx("li",{children:"Home"})}),Lt.jsx("a",{href:"#about",children:Lt.jsx("li",{children:"About"})}),Lt.jsx("a",{href:"#tech",children:Lt.jsx("li",{children:"Tech"})}),Lt.jsx("a",{href:"#projects",children:Lt.jsx("li",{children:"Projects"})})]})});var N_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$g=dr.createContext&&dr.createContext(N_),f3=["attr","size","title"];function h3(o,e){if(o==null)return{};var i=d3(o,e),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(o);for(l=0;l<u.length;l++)r=u[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(i[r]=o[r])}return i}function d3(o,e){if(o==null)return{};var i={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){if(e.indexOf(r)>=0)continue;i[r]=o[r]}return i}function Oc(){return Oc=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(o[r]=i[r])}return o},Oc.apply(this,arguments)}function t_(o,e){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),i.push.apply(i,r)}return i}function Pc(o){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?t_(Object(i),!0).forEach(function(r){p3(o,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):t_(Object(i)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(i,r))})}return o}function p3(o,e,i){return e=m3(e),e in o?Object.defineProperty(o,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[e]=i,o}function m3(o){var e=g3(o,"string");return typeof e=="symbol"?e:e+""}function g3(o,e){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function O_(o){return o&&o.map((e,i)=>dr.createElement(e.tag,Pc({key:i},e.attr),O_(e.child)))}function zn(o){return e=>dr.createElement(_3,Oc({attr:Pc({},o.attr)},e),O_(o.child))}function _3(o){var e=i=>{var{attr:r,size:l,title:u}=o,h=h3(o,f3),d=l||i.size||"1em",m;return i.className&&(m=i.className),o.className&&(m=(m?m+" ":"")+o.className),dr.createElement("svg",Oc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:Pc(Pc({color:o.color||i.color},i.style),o.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&dr.createElement("title",null,u),o.children)};return $g!==void 0?dr.createElement($g.Consumer,null,i=>e(i)):e(N_)}function v3(o){return zn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(o)}function x3(o){return zn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"},child:[]}]})(o)}function P_(o){return zn({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function S3(o){return zn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(o)}function y3(o){return zn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(o)}function M3(o){return zn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(o)}function E3(o){return zn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(o)}function T3(o){return zn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(o)}function b3(o){return zn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(o)}function A3(o){return zn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.8 13.154a.299.299 0 0 0-.101-.024.407.407 0 0 0-.202.048c-.06.028-.092.08-.127.136-.087.128-.15.268-.226.4-.107.187-.246.351-.38.515-.135.156-.286.291-.424.44-.028.027-.072.043-.107.027-.028-.016-.036-.056-.032-.088.04-.38.075-.763.123-1.138.02-.172.043-.336.063-.512.028-.247.056-.487.087-.735l.234-1.824c.02-.128.032-.372-.135-.52a.446.446 0 0 0-.233-.116.46.46 0 0 0-.254.06c-.226.16-.297.504-.365.76-.142.603-.178 1.241-.471 1.804a1.772 1.772 0 0 1-.202.316.668.668 0 0 1-.186.18.332.332 0 0 1-.246.051.365.365 0 0 1-.238-.207.871.87 0 0 1-.063-.324 4.499 4.499 0 0 1 .24-1.585c.045-.132.089-.252.104-.383.028-.156.028-.38-.114-.516-.131-.128-.337-.18-.504-.128-.194.056-.31.244-.372.392-.198.463-.25.95-.317 1.446-.044.327-.127.64-.293.926a2.717 2.717 0 0 1-.603.72c-.118.087-.222.123-.328.107a.376.376 0 0 1-.278-.208.875.875 0 0 1-.095-.315 3.361 3.36 0 0 1-.036-.616c.004-.223 0-.44.044-.658.075-.39.678-1.937.808-2.345.135-.407.262-.823.353-1.246.08-.38.123-.767.11-1.15-.007-.277-.07-.576-.288-.736a.611.61 0 0 0-.603-.048.968.968 0 0 0-.455.428 2.53 2.53 0 0 0-.226.59 12.01 12.01 0 0 0-.266 1.29c-.071.429-.138.848-.206 1.268-.06.355-.206 1.614-.261 1.88-.06.272-.175.54-.301.787-.131.268-.258.536-.408.791a.694.694 0 0 1-.175.224c-.08.06-.182.088-.27.048-.102-.048-.146-.176-.166-.292-.075-.435-.012-.875.072-1.302.083-.431.44-2.4.519-2.851.099-.532.24-1.05.285-1.59.028-.388.09-.88-.202-1.187-.115-.136-.31-.16-.44-.136-.174.036-.31.176-.388.296-.1.128-.186.28-.258.467-.115.284-.186.615-.261.91l-.032.129c-.083.383-.143.77-.186 1.162a16.95 16.948 0 0 0-.06.632c-.008.1-.016.203-.027.307 0 .08.007.168-.028.244a.304.304 0 0 1-.052.068c-.08.072-.202.06-.31.056-.557-.016-1.045.3-1.35.755-.18.252-.281.542-.39.834-.01.048-.034.1-.054.152-.051.143-.13.327-.222.511a3.037 3.037 0 0 1-.317.46 3.285 3.285 0 0 1-.384.41 1.123 1.123 0 0 1-.515.26c-.174.04-.384-.043-.543-.203a.916.916 0 0 1-.206-.54c-.004-.055-.004-.115.028-.163.05-.068.146-.072.23-.076a1.623 1.623 0 0 0 1.375-1.015c.138-.34.178-.698.122-1.046a1.193 1.193 0 0 0-.19-.48.9.9 0 0 0-.396-.323c-.293-.14-.658-.127-1.01.004-.575.232-.951.74-1.134 1.562l-.02.088c-.114.487-.23 1-.582 1.354-.127.12-.261.163-.368.143-.044-.004-.08-.04-.103-.075-.096-.16.003-.532.15-1a4.1 4.1 0 0 0 .1-.366.925.925 0 0 0-.108-.495.783.783 0 0 0-.372-.324c-.143-.064-.31-.06-.468-.06h-.047c-.044 0-.103 0-.151-.012a.215.215 0 0 1-.147-.127.485.485 0 0 1 .016-.232c.004-.02.012-.048.016-.072a.368.368 0 0 0-.162-.412.509.509 0 0 0-.468-.036.768.768 0 0 0-.364.348.769.769 0 0 0-.103.48c.04.13.07.32.043.475-.055.28-.222.51-.384.74-.04.05-.072.106-.107.16a4.96 4.96 0 0 1-.706.825c-.372.335-.804.575-1.232.67-.745.165-1.506-.06-1.91-.734-.222-.38-.32-.827-.348-1.266a5.425 5.425 0 0 1 .424-2.516c.328-.76.816-1.52 1.715-1.614.353-.04.753.083.912.4.115.23.075.506 0 .75-.072.244-.175.49-.18.75-.003.26.124.54.37.616.238.072.495-.08.634-.29.138-.21.186-.46.245-.704a6.282 6.281 0 0 1 .662-1.634c.139-.236.297-.488.254-.76a.543.543 0 0 0-.373-.415.543.543 0 0 0-.535.144c-.134.148-.206.371-.387.43-.17.06-.35-.055-.507-.134-.6-.32-1.336-.312-1.963-.048-.634.25-1.146.735-1.526 1.294C.462 8.53.098 9.508.022 10.48c-.027.34-.031.695 0 1.038.036.46.1.854.214 1.206.139.423.317.79.547 1.094.266.34.587.6.94.747.372.148.784.22 1.192.208a3.172 3.172 0 0 0 1.177-.283 4.29 4.29 0 0 0 1.026-.68c.309-.26.594-.559.84-.89.162-.224.309-.46.44-.708a4.83 4.83 0 0 0 .178-.383c.044-.104.087-.215.202-.26.056-.043.15-.02.202.013.064.04.115.075.135.135.048.116.02.232-.004.332v.012c-.028.1-.055.203-.091.303-.14.424-.238.811-.16 1.195.045.207.128.387.25.527a.84.84 0 0 0 .504.264c.246.04.51-.028.725-.132.143-.068.278-.156.397-.26.06-.06.122-.12.174-.184.044-.06.087-.147.178-.143a.15.15 0 0 1 .107.064c.028.031.04.071.06.115.23.52.776.84 1.335.84h.07c.27 0 .556-.093.79-.22.27-.14.48-.348.7-.552.02-.016.045-.04.073-.044.035-.008.07.012.099.044a.26.26 0 0 1 .047.1c.135.34.46.6.824.66a1.1 1.1 0 0 0 .99-.356c.056-.06.104-.128.167-.176.064-.044.15-.076.222-.044.107.04.135.164.182.268.107.235.357.371.615.375.289 0 .554-.148.764-.34.195-.183.353-.399.516-.61a.328.328 0 0 1 .106-.096c.04-.024.096-.028.13 0 .033.024.045.06.06.091.163.4.587.652 1.01.648.417-.004.809-.224 1.103-.516.095-.092.194-.2.32-.21.14-.017.207.114.254.22.072.142.115.238.25.338.158.116.36.152.547.1.17-.04.34-.156.47-.316.072-.088.112-.204.19-.284.092-.087.132.028.136.1.016.116.016.236.008.352-.016.236-.052.471-.08.703-.011.068-.02.136-.063.188-.06.068-.166.08-.253.064a2.898 2.898 0 0 0-.321-.028l-.14-.016c-.201-.012-.4-.036-.61-.044h-.185c-.404 0-.733.048-1.03.16-.48.187-.852.57-1.003 1.018a1.305 1.305 0 0 0-.052.64c.04.203.13.403.282.587.265.315.68.515 1.149.543.408.02.852-.064 1.292-.26.848-.367 1.482-1.094 1.696-1.95 0-.02.01-.039.023-.043.298-.104.57-.248.813-.428.245-.187.467-.399.65-.643.09-.12.174-.243.253-.37.07-.125.13-.257.202-.38a.906.906 0 0 0 .13-.316.411.411 0 0 0-.05-.328.257.257 0 0 0-.135-.124m-13.68-1.63c.017-.071.045-.14.06-.206a1.9 1.9 0 0 1 .262-.504c.04-.048.08-.1.135-.136a.246.246 0 0 1 .186-.048c.107.02.183.128.202.236.032.18-.04.396-.114.555a1.097 1.097 0 0 1-.31.415c-.06.044-.114.088-.178.116-.028.008-.063.028-.115.028h-.016c-.055 0-.114-.028-.126-.088a.827.827 0 0 1 .015-.367m4.308-.184c-.004.072-.024.148-.028.223a4.91 4.91 0 0 0 0 .779c.012.152.047.3-.016.444a1.069 1.069 0 0 1-.567.643.555.555 0 0 1-.245.056c-.02 0-.04-.004-.06-.004-.12 0-.214-.092-.265-.18a.871.87 0 0 1-.1-.272 2.129 2.129 0 0 1 .072-1.122c.08-.22.202-.435.38-.594a.874.874 0 0 1 .563-.24.31.31 0 0 1 .206.064c.04.044.06.104.056.164a.05.05 0 0 1 .004.04m6.43 4.653c-.015.044-.06.104-.08.14-.042.08-.102.163-.161.235a2.562 2.562 0 0 1-.317.304c-.238.18-.503.311-.777.387a2.025 2.025 0 0 1-.487.072h-.04a.795.795 0 0 1-.515-.18.433.433 0 0 1-.158-.25.537.537 0 0 1 .047-.305.776.776 0 0 1 .38-.383c.326-.16.682-.176 1.019-.16.139.004.265.012.4.02.107.004.218.012.325.024.056 0 .115.004.17.012.044.004.092-.004.135.008.06.004.068.036.06.076"},child:[]}]})(o)}function R3(o){return zn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.224 0a3.14 3.14 0 00-3.14 3.127 3.1 3.1 0 001.079 2.36 11.811 11.811 0 00-2.037 6.639C.126 18.68 5.458 24 12 24c6.542 0 11.874-5.32 11.874-11.874a11.69 11.69 0 00-2.025-6.614 3.136 3.136 0 001.09-2.373A3.132 3.132 0 0019.8.012a3.118 3.118 0 00-2.636 1.438A11.792 11.792 0 0012.012.264c-1.845 0-3.595.419-5.152 1.174A3.133 3.133 0 004.224 0zM12 1.198c1.713 0 3.331.396 4.78 1.102a10.995 10.995 0 014.29 3.715 10.89 10.89 0 011.882 6.135c.011 6.039-4.901 10.951-10.94 10.951-6.04 0-10.951-4.912-10.951-10.951 0-2.277.694-4.386 1.88-6.135A11.08 11.08 0 017.232 2.3 10.773 10.773 0 0112 1.198zM7.367 6.345c-.853.012-1.743.292-2.28.653-1.031.682-2.29 2.156-2.085 4.181.191 2.025 1.785 3.283 2.612 3.283.826 0 1.234-.42 1.485-1.45.252-1.018 1.115-2.192 2.217-3.45s-.024-2.469-.024-2.469c-.393-.513-1.052-.727-1.755-.747a3.952 3.952 0 00-.17-.001zm9.233.007l-.17.001c-.702.02-1.358.233-1.746.752 0 0-1.126 1.21-.024 2.469 1.114 1.258 1.965 2.432 2.217 3.45.251 1.019.659 1.438 1.485 1.45.827 0 2.409-1.258 2.612-3.283.204-2.025-1.054-3.51-2.084-4.182-.544-.36-1.437-.643-2.29-.657zm-8.962 2c.348 0 .624.275.624.623-.012.335-.288.623-.624.623a.619.619 0 01-.623-.623c0-.348.276-.624.623-.624zm8.891 0c.348 0 .623.275.623.623-.012.335-.287.623-.623.623a.619.619 0 01-.623-.623c0-.348.288-.624.623-.624zm-4.541 4.025c-.527 0-2.06.096-2.06.587 0 .887 1.88 1.522 2.06 1.474.18.048 2.06-.587 2.06-1.474 0-.49-1.52-.587-2.06-.587zM9.076 15.17c0 1.414 1.294 2.564 2.912 2.564 1.618 0 2.924-1.15 2.924-2.564z"},child:[]}]})(o)}function C3(o){return zn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.315 4.876L6.3048 2.8517l-4.401 2.1965 4.1186 2.0683zm1.8381.9277l4.2045 2.1223-4.3622 2.1906-4.125-2.0718zm5.6153-2.9213l4.3193 2.1658-3.863 1.9402-4.2131-2.1252zm-1.859-.9329L12.021 0 8.1742 1.9193l4.0068 2.0208zm-3.0401 16.7443V24l4.7107-2.3507-.0053-5.3085zm4.7037-4.2057l-.0052-5.2528-4.6985 2.3356v5.2546zm5.6553-.9845v5.327l-4.0178 2.0052-.0029-5.3028zm0-1.8626V6.4214l-4.0253 2.001.0034 5.2633zM11.2062 11.571L8.0333 9.9756v6.895s-3.8804-8.2564-4.2399-8.998c-.0463-.0957-.2371-.2007-.2858-.2262C2.8118 7.2812.773 6.2485.773 6.2485V18.43l2.8204 1.5076v-6.3674s3.8392 7.3775 3.878 7.458c.0389.0807.4245.8582.8362 1.1314.5485.363 2.8992 1.7766 2.8992 1.7766z"},child:[]}]})(o)}const w3=({text:o,speed:e,deleteSpeed:i,loop:r})=>{const[l,u]=Un.useState(""),[h,d]=Un.useState(0),[m,p]=Un.useState(!1);return Un.useEffect(()=>{const g=setInterval(()=>{m?(u(l.slice(0,-1)),d(h-1)):h<o.length&&(u(l+o[h]),d(h+1)),h===o.length&&p(!0),h===0&&m&&(p(!1),r&&(d(0),u("")))},m?i:e);return()=>clearInterval(g)},[h,o,e,i,m,r,l]),Lt.jsx("span",{className:"typewriter-text",children:l})},D3=()=>Lt.jsxs("section",{id:"home",className:"tiles-grid",children:[Lt.jsxs("div",{className:"div1",children:[Lt.jsx("div",{className:"avatar",children:Lt.jsx("img",{src:"/me.png",alt:"avatar-pic"})}),Lt.jsxs("h1",{children:["Hi, I'm Mikolaj ",Lt.jsx("br",{}),Lt.jsx(w3,{text:"Software Developer. Engineer.",speed:150,deleteSpeed:150,loop:!0})]})]}),Lt.jsx("a",{href:"https://github.com/mikolajwojnowski",className:"logo-div-github",target:"_blank",rel:"noopener    noreferrer",children:Lt.jsx(P_,{size:50,style:{color:"#fff"}})}),Lt.jsx("a",{href:"https://www.linkedin.com/in/mikolajwojnowski/",className:"logo-div-linkedin",target:"_blank",rel:"noopener noreferrer",children:Lt.jsx(E3,{size:50,style:{color:"#fff"}})}),Lt.jsx("a",{href:"https://www.credly.com/users/mikolaj-wojnowski",className:"logo-div-credly",target:"_blank",rel:"noopener noreferrer",children:Lt.jsx(A3,{size:65,style:{color:"#fff"}})})]});function U3(o){return zn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"},child:[]}]})(o)}const L3=()=>Lt.jsx("section",{id:"about",className:"section-card about-section",children:Lt.jsxs("div",{className:"about-me",children:[Lt.jsx("h1",{className:"section-heading",children:"About Me"}),Lt.jsx("p",{className:"about-copy",children:"I'm a 24-year-old Computer Science student with a passion for technology and programming"})]})});function N3(o){return zn({attr:{version:"1.1",viewBox:"0 0 34 32"},child:[{tag:"path",attr:{d:"M26.588 15.625c0.53 0.138 1.059 0.276 1.751 0.456-0.34-0.655-0.596-1.212-0.911-1.732-0.195-0.321-0.159-0.526 0.088-0.793 0.461-0.498 0.883-1.032 1.321-1.551-0.021-0.043-0.043-0.086-0.064-0.129-0.539 0.139-1.092 0.238-1.613 0.428-0.549 0.2-0.894 0.125-1.147-0.447-0.201-0.453-0.511-0.858-0.866-1.434-0.134 0.7-0.281 1.246-0.333 1.8-0.053 0.575-0.279 0.891-0.871 1.011-0.557 0.113-1.091 0.34-1.801 0.57 0.696 0.299 1.252 0.537 1.882 0.808-0.381 0.249-0.704 0.468-1.036 0.67-0.085 0.052-0.225 0.104-0.299 0.069-0.616-0.287-1.269-0.527-1.818-0.914-0.519-0.366-0.387-1.031 0.229-1.282 0.731-0.297 1.489-0.533 2.247-0.752 0.349-0.101 0.496-0.272 0.541-0.628 0.075-0.587 0.197-1.169 0.313-1.751 0.038-0.192 0.093-0.388 0.181-0.561 0.351-0.692 0.939-0.741 1.378-0.103 0.326 0.474 0.637 0.964 0.897 1.476 0.215 0.422 0.466 0.5 0.905 0.357 0.665-0.218 1.345-0.409 2.033-0.526 0.293-0.050 0.622 0.115 0.935 0.183-0.084 0.312-0.089 0.682-0.267 0.924-0.468 0.637-1.001 1.228-1.53 1.818-0.223 0.249-0.273 0.449-0.091 0.755 0.33 0.556 0.654 1.125 0.891 1.724 0.11 0.279 0.129 0.728-0.027 0.939-0.156 0.21-0.6 0.332-0.888 0.291-0.581-0.083-1.2-0.209-1.69-0.504-0.276-0.166-0.327-0.705-0.48-1.077 0.047-0.031 0.094-0.063 0.141-0.095z"},child:[]},{tag:"path",attr:{d:"M9.035 21.264c-0.090 0.62-0.175 1.205-0.265 1.826-0.365 0-0.714 0-1.125 0 0.116-0.934 0.226-1.837 0.341-2.739 0.059-0.464 0.118-0.927 0.191-1.389 0.218-1.363 1.353-2.462 2.666-2.591 1.975-0.193 3.242 1.545 2.458 3.372-0.728 1.697-2.448 2.328-4.268 1.521zM12.317 18.829c0.007-0.748-0.537-1.299-1.286-1.3-0.903-0.002-1.698 0.789-1.695 1.687 0.003 0.734 0.566 1.281 1.318 1.278 0.869-0.003 1.654-0.79 1.663-1.666z"},child:[]},{tag:"path",attr:{d:"M3.315 20.211c0.404-0.216 0.782-0.418 1.19-0.636 0.116 0.19 0.206 0.362 0.319 0.517 0.322 0.441 0.833 0.495 1.276 0.145 0.41-0.324 0.435-0.637 0.043-1.109-0.333-0.401-0.69-0.784-1.050-1.163-0.546-0.576-0.857-1.229-0.527-2.008 0.357-0.844 1.022-1.325 1.946-1.422 0.879-0.092 1.478 0.32 1.938 1.097-0.363 0.277-0.727 0.553-1.089 0.829-0.183-0.195-0.319-0.467-0.507-0.511-0.294-0.068-0.685-0.082-0.925 0.063-0.354 0.215-0.133 0.533 0.085 0.772 0.339 0.373 0.67 0.756 1.030 1.107 0.608 0.594 0.869 1.288 0.596 2.107-0.296 0.888-0.926 1.453-1.847 1.642-1.306 0.268-2.062-0.168-2.48-1.431z"},child:[]},{tag:"path",attr:{d:"M18.955 21.507c-0.427 0-0.764 0-1.161 0 0.101-0.776 0.215-1.518 0.289-2.264 0.061-0.617-0.037-1.204-0.621-1.565-0.473-0.292-1.215-0.185-1.716 0.242-0.499 0.425-0.76 0.959-0.582 1.631 0.227 0.857 1.151 1.195 2.008 0.739 0.155-0.083 0.301-0.183 0.499-0.306-0.036 0.249-0.067 0.444-0.092 0.638-0.11 0.857-0.253 0.991-1.1 1.030-1.831 0.086-2.97-1.392-2.425-3.145 0.419-1.346 1.737-2.244 3.149-2.144 1.179 0.084 2.113 1.035 2.065 2.217-0.039 0.967-0.201 1.928-0.313 2.926z"},child:[]},{tag:"path",attr:{d:"M24.070 17.694c0.738-0.808 1.364-1.494 2.012-2.204 0.284 0.732 0.358 1.349-0.332 1.86-0.311 0.23-0.545 0.564-0.828 0.866 0.778 1.094 1.536 2.162 2.364 3.326-0.525 0-0.964 0.027-1.396-0.016-0.137-0.013-0.285-0.191-0.378-0.327-0.504-0.74-0.992-1.491-1.58-2.381-0.112 0.782-0.256 1.407-0.277 2.036-0.018 0.574-0.242 0.766-0.781 0.681-0.172-0.027-0.35-0.018-0.586-0.029 0.144-1.142 0.28-2.244 0.423-3.345 0.085-0.66 0.217-1.317 0.259-1.979 0.027-0.431 0.191-0.7 0.559-0.896 0.281-0.15 0.542-0.338 0.909-0.571-0.124 1.011-0.237 1.927-0.366 2.978z"},child:[]},{tag:"path",attr:{d:"M22.251 17.65c-0.212 0-0.355 0.008-0.496-0.001-0.422-0.027-0.627 0.177-0.678 0.588-0.114 0.909-0.28 1.814-0.349 2.726-0.036 0.477-0.198 0.641-0.653 0.575-0.173-0.025-0.352-0.004-0.602-0.004 0.11-0.886 0.21-1.717 0.316-2.547 0.043-0.339 0.090-0.677 0.148-1.013 0.172-1.008 0.748-1.489 1.777-1.493 0.18-0.001 0.36 0.004 0.539 0.011 0.032 0.001 0.064 0.028 0.128 0.057-0.040 0.341-0.081 0.691-0.129 1.102z"},child:[]},{tag:"path",attr:{d:"M12.317 18.829c-0.009 0.876-0.794 1.663-1.663 1.666-0.751 0.003-1.315-0.544-1.318-1.278-0.003-0.898 0.791-1.689 1.695-1.687 0.748 0.001 1.293 0.552 1.286 1.3z"},child:[]}]})(o)}const O3=[{name:"Python",icon:Lt.jsx(T3,{className:"tech-icon","aria-hidden":"true"}),color:"#6da8d6"},{name:"HTML",icon:Lt.jsx(S3,{className:"tech-icon","aria-hidden":"true"}),color:"#e86d3f"},{name:"CSS",icon:Lt.jsx(v3,{className:"tech-icon","aria-hidden":"true"}),color:"#4c9be8"},{name:"JavaScript",icon:Lt.jsx(M3,{className:"tech-icon","aria-hidden":"true"}),color:"#f0d457"},{name:"Java",icon:Lt.jsx(y3,{className:"tech-icon","aria-hidden":"true"}),color:"#e27d43"},{name:"Docker",icon:Lt.jsx(x3,{className:"tech-icon","aria-hidden":"true"}),color:"#0f1ef3"},{name:"React",icon:Lt.jsx(b3,{className:"tech-icon","aria-hidden":"true"}),color:"#3e80c7"},{name:"PySpark",icon:Lt.jsx(N3,{className:"tech-icon","aria-hidden":"true"}),color:"#e7e7d7"},{name:"NumPy",icon:Lt.jsx(C3,{className:"tech-icon","aria-hidden":"true"}),color:"#0d7f91"},{name:"Pandas",icon:Lt.jsx(R3,{className:"tech-icon","aria-hidden":"true"}),color:"#ffffff"}],P3=()=>Lt.jsxs("section",{id:"tech",className:"section-card tech-section",children:[Lt.jsx("h1",{className:"section-heading",children:"Tech Stack"}),Lt.jsx("div",{className:"tech-grid",children:O3.map(({name:o,icon:e,color:i})=>Lt.jsxs("div",{className:"tech-item",style:{"--accent-color":i},children:[e,Lt.jsx("span",{children:o})]},o))})]}),z3=[{title:"Tic Tac Toe",description:"A Python implementation of the Tic Tac Toe game, featuring an AI opponent that uses the Minimax algorithm.",stack:["Python","Pygame"],link:"https://github.com/mikolajwojnowski/TicTacToe"},{title:"Image Classifier",description:'This project utilizes machine learning to classify images of animal faces using Python and the PyTorch library. The model is trained on the "Animal Faces" dataset from Kaggle',stack:["Python","PyTorch"],link:"https://github.com/mikolajwojnowski/image_classification"},{title:"Movie Catalog Web Application",status:"In Development",description:"This web application mimics the operation of a simplified movie catalog, similar to FilmAffinity. The application provides a platform where users can view movie details, rate movies, add comments, and receive recommendations.",stack:["PHP","HTML","JavaScript","CSS","MySQL","MATLAB"],link:"https://github.com/mikolajwojnowski/movies.git"}],B3=()=>Lt.jsxs("section",{id:"projects",className:"section-card projects-section",children:[Lt.jsx("h1",{className:"section-heading",children:"Projects"}),Lt.jsx("div",{className:"projects-grid",children:z3.map((o,e)=>Lt.jsxs("article",{className:"project-card",children:[Lt.jsxs("div",{children:[Lt.jsxs("div",{className:"project-title-row",children:[Lt.jsx("h2",{children:o.title}),o.status&&Lt.jsx("span",{className:"project-status",children:o.status})]}),Lt.jsx("p",{children:o.description})]}),Lt.jsx("div",{className:"project-stack","aria-label":`${o.title} technologies`,children:o.stack.map(i=>Lt.jsx("span",{children:i},i))}),Lt.jsxs("a",{className:"project-link",href:o.link,target:"_blank",rel:"noopener noreferrer",children:[Lt.jsx(P_,{"aria-hidden":"true"}),Lt.jsx("span",{children:"View on GitHub"}),Lt.jsx(U3,{className:"project-link-arrow","aria-hidden":"true"})]})]},`${o.title}-${e}`))})]}),I3=()=>{const o=new Date().getFullYear();return Lt.jsx("footer",{className:"site-footer","aria-label":"Footer",children:Lt.jsx("div",{className:"footer-content",children:Lt.jsx("div",{className:"footer-brand",children:Lt.jsxs("p",{className:"footer-meta",children:["© ",o," Mikolaj Wojnowski"]})})})})};function F3(){return Lt.jsxs(Lt.Fragment,{children:[Lt.jsx("div",{className:"background-layer","aria-hidden":"true",children:Lt.jsx(c3,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!0,autoDemo:!0,autoSpeed:.3,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:1e3,autoRampDuration:1})}),Lt.jsx(u3,{}),Lt.jsx(D3,{}),Lt.jsx(L3,{}),Lt.jsx(P3,{}),Lt.jsx(B3,{}),Lt.jsx(I3,{})]})}Z1.createRoot(document.getElementById("root")).render(Lt.jsx(Un.StrictMode,{children:Lt.jsx(F3,{})}));
