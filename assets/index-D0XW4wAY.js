(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();var Zu={exports:{}},Ei={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function _S(){if(zp)return Ei;zp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:n,type:s,key:d,ref:c!==void 0?c:null,props:f}}return Ei.Fragment=i,Ei.jsx=r,Ei.jsxs=r,Ei}var qp;function LS(){return qp||(qp=1,Zu.exports=_S()),Zu.exports}var S=LS(),Ku={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function US(){if(Np)return ue;Np=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),T=Symbol.iterator;function z(A){return A===null||typeof A!="object"?null:(A=T&&A[T]||A["@@iterator"],typeof A=="function"?A:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,U={};function H(A,B,J){this.props=A,this.context=B,this.refs=U,this.updater=J||O}H.prototype.isReactComponent={},H.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")},H.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function X(){}X.prototype=H.prototype;function Q(A,B,J){this.props=A,this.context=B,this.refs=U,this.updater=J||O}var Z=Q.prototype=new X;Z.constructor=Q,L(Z,H.prototype),Z.isPureReactComponent=!0;var Y=Array.isArray;function oe(){}var F={H:null,A:null,T:null,S:null},_=Object.prototype.hasOwnProperty;function ie(A,B,J){var K=J.ref;return{$$typeof:n,type:A,key:B,ref:K!==void 0?K:null,props:J}}function Ae(A,B){return ie(A.type,B,A.props)}function Ve(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function je(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(J){return B[J]})}var ht=/\/+/g;function rt(A,B){return typeof A=="object"&&A!==null&&A.key!=null?je(""+A.key):B.toString(36)}function Pe(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(oe,oe):(A.status="pending",A.then(function(B){A.status==="pending"&&(A.status="fulfilled",A.value=B)},function(B){A.status==="pending"&&(A.status="rejected",A.reason=B)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function j(A,B,J,K,ne){var re=typeof A;(re==="undefined"||re==="boolean")&&(A=null);var be=!1;if(A===null)be=!0;else switch(re){case"bigint":case"string":case"number":be=!0;break;case"object":switch(A.$$typeof){case n:case i:be=!0;break;case y:return be=A._init,j(be(A._payload),B,J,K,ne)}}if(be)return ne=ne(A),be=K===""?"."+rt(A,0):K,Y(ne)?(J="",be!=null&&(J=be.replace(ht,"$&/")+"/"),j(ne,B,J,"",function(Ma){return Ma})):ne!=null&&(Ve(ne)&&(ne=Ae(ne,J+(ne.key==null||A&&A.key===ne.key?"":(""+ne.key).replace(ht,"$&/")+"/")+be)),B.push(ne)),1;be=0;var $e=K===""?".":K+":";if(Y(A))for(var fe=0;fe<A.length;fe++)K=A[fe],re=$e+rt(K,fe),be+=j(K,B,J,re,ne);else if(fe=z(A),typeof fe=="function")for(A=fe.call(A),fe=0;!(K=A.next()).done;)K=K.value,re=$e+rt(K,fe++),be+=j(K,B,J,re,ne);else if(re==="object"){if(typeof A.then=="function")return j(Pe(A),B,J,K,ne);throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return be}function P(A,B,J){if(A==null)return A;var K=[],ne=0;return j(A,K,"","",function(re){return B.call(J,re,ne++)}),K}function W(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(J){(A._status===0||A._status===-1)&&(A._status=1,A._result=J)},function(J){(A._status===0||A._status===-1)&&(A._status=2,A._result=J)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var me=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},k={map:P,forEach:function(A,B,J){P(A,function(){B.apply(this,arguments)},J)},count:function(A){var B=0;return P(A,function(){B++}),B},toArray:function(A){return P(A,function(B){return B})||[]},only:function(A){if(!Ve(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ue.Activity=b,ue.Children=k,ue.Component=H,ue.Fragment=r,ue.Profiler=c,ue.PureComponent=Q,ue.StrictMode=s,ue.Suspense=p,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ue.__COMPILER_RUNTIME={__proto__:null,c:function(A){return F.H.useMemoCache(A)}},ue.cache=function(A){return function(){return A.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(A,B,J){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var K=L({},A.props),ne=A.key;if(B!=null)for(re in B.key!==void 0&&(ne=""+B.key),B)!_.call(B,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&B.ref===void 0||(K[re]=B[re]);var re=arguments.length-2;if(re===1)K.children=J;else if(1<re){for(var be=Array(re),$e=0;$e<re;$e++)be[$e]=arguments[$e+2];K.children=be}return ie(A.type,ne,K)},ue.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},ue.createElement=function(A,B,J){var K,ne={},re=null;if(B!=null)for(K in B.key!==void 0&&(re=""+B.key),B)_.call(B,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ne[K]=B[K]);var be=arguments.length-2;if(be===1)ne.children=J;else if(1<be){for(var $e=Array(be),fe=0;fe<be;fe++)$e[fe]=arguments[fe+2];ne.children=$e}if(A&&A.defaultProps)for(K in be=A.defaultProps,be)ne[K]===void 0&&(ne[K]=be[K]);return ie(A,re,ne)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(A){return{$$typeof:h,render:A}},ue.isValidElement=Ve,ue.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:W}},ue.memo=function(A,B){return{$$typeof:g,type:A,compare:B===void 0?null:B}},ue.startTransition=function(A){var B=F.T,J={};F.T=J;try{var K=A(),ne=F.S;ne!==null&&ne(J,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(oe,me)}catch(re){me(re)}finally{B!==null&&J.types!==null&&(B.types=J.types),F.T=B}},ue.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ue.use=function(A){return F.H.use(A)},ue.useActionState=function(A,B,J){return F.H.useActionState(A,B,J)},ue.useCallback=function(A,B){return F.H.useCallback(A,B)},ue.useContext=function(A){return F.H.useContext(A)},ue.useDebugValue=function(){},ue.useDeferredValue=function(A,B){return F.H.useDeferredValue(A,B)},ue.useEffect=function(A,B){return F.H.useEffect(A,B)},ue.useEffectEvent=function(A){return F.H.useEffectEvent(A)},ue.useId=function(){return F.H.useId()},ue.useImperativeHandle=function(A,B,J){return F.H.useImperativeHandle(A,B,J)},ue.useInsertionEffect=function(A,B){return F.H.useInsertionEffect(A,B)},ue.useLayoutEffect=function(A,B){return F.H.useLayoutEffect(A,B)},ue.useMemo=function(A,B){return F.H.useMemo(A,B)},ue.useOptimistic=function(A,B){return F.H.useOptimistic(A,B)},ue.useReducer=function(A,B,J){return F.H.useReducer(A,B,J)},ue.useRef=function(A){return F.H.useRef(A)},ue.useState=function(A){return F.H.useState(A)},ue.useSyncExternalStore=function(A,B,J){return F.H.useSyncExternalStore(A,B,J)},ue.useTransition=function(){return F.H.useTransition()},ue.version="19.2.4",ue}var Op;function Xc(){return Op||(Op=1,Ku.exports=US()),Ku.exports}var G=Xc(),Fu={exports:{}},Ai={},Wu={exports:{}},$u={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function HS(){return jp||(jp=1,(function(n){function i(j,P){var W=j.length;j.push(P);e:for(;0<W;){var me=W-1>>>1,k=j[me];if(0<c(k,P))j[me]=P,j[W]=k,W=me;else break e}}function r(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var P=j[0],W=j.pop();if(W!==P){j[0]=W;e:for(var me=0,k=j.length,A=k>>>1;me<A;){var B=2*(me+1)-1,J=j[B],K=B+1,ne=j[K];if(0>c(J,W))K<k&&0>c(ne,J)?(j[me]=ne,j[K]=W,me=K):(j[me]=J,j[B]=W,me=B);else if(K<k&&0>c(ne,W))j[me]=ne,j[K]=W,me=K;else break e}}return P}function c(j,P){var W=j.sortIndex-P.sortIndex;return W!==0?W:j.id-P.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();n.unstable_now=function(){return d.now()-h}}var p=[],g=[],y=1,b=null,T=3,z=!1,O=!1,L=!1,U=!1,H=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function Z(j){for(var P=r(g);P!==null;){if(P.callback===null)s(g);else if(P.startTime<=j)s(g),P.sortIndex=P.expirationTime,i(p,P);else break;P=r(g)}}function Y(j){if(L=!1,Z(j),!O)if(r(p)!==null)O=!0,oe||(oe=!0,je());else{var P=r(g);P!==null&&Pe(Y,P.startTime-j)}}var oe=!1,F=-1,_=5,ie=-1;function Ae(){return U?!0:!(n.unstable_now()-ie<_)}function Ve(){if(U=!1,oe){var j=n.unstable_now();ie=j;var P=!0;try{e:{O=!1,L&&(L=!1,X(F),F=-1),z=!0;var W=T;try{t:{for(Z(j),b=r(p);b!==null&&!(b.expirationTime>j&&Ae());){var me=b.callback;if(typeof me=="function"){b.callback=null,T=b.priorityLevel;var k=me(b.expirationTime<=j);if(j=n.unstable_now(),typeof k=="function"){b.callback=k,Z(j),P=!0;break t}b===r(p)&&s(p),Z(j)}else s(p);b=r(p)}if(b!==null)P=!0;else{var A=r(g);A!==null&&Pe(Y,A.startTime-j),P=!1}}break e}finally{b=null,T=W,z=!1}P=void 0}}finally{P?je():oe=!1}}}var je;if(typeof Q=="function")je=function(){Q(Ve)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,rt=ht.port2;ht.port1.onmessage=Ve,je=function(){rt.postMessage(null)}}else je=function(){H(Ve,0)};function Pe(j,P){F=H(function(){j(n.unstable_now())},P)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_next=function(j){switch(T){case 1:case 2:case 3:var P=3;break;default:P=T}var W=T;T=P;try{return j()}finally{T=W}},n.unstable_requestPaint=function(){U=!0},n.unstable_runWithPriority=function(j,P){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var W=T;T=j;try{return P()}finally{T=W}},n.unstable_scheduleCallback=function(j,P,W){var me=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?me+W:me):W=me,j){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=W+k,j={id:y++,callback:P,priorityLevel:j,startTime:W,expirationTime:k,sortIndex:-1},W>me?(j.sortIndex=W,i(g,j),r(p)===null&&j===r(g)&&(L?(X(F),F=-1):L=!0,Pe(Y,W-me))):(j.sortIndex=k,i(p,j),O||z||(O=!0,oe||(oe=!0,je()))),j},n.unstable_shouldYield=Ae,n.unstable_wrapCallback=function(j){var P=T;return function(){var W=T;T=P;try{return j.apply(this,arguments)}finally{T=W}}}})($u)),$u}var wp;function PS(){return wp||(wp=1,Wu.exports=HS()),Wu.exports}var Iu={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function QS(){if(Rp)return lt;Rp=1;var n=Xc();function i(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(p,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:p,containerInfo:g,implementation:y}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,lt.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return f(p,g,null,y)},lt.flushSync=function(p){var g=d.T,y=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=g,s.p=y,s.d.f()}},lt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},lt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},lt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,z=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:T,fetchPriority:z}):y==="script"&&s.d.X(p,{crossOrigin:b,integrity:T,fetchPriority:z,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},lt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},lt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},lt.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=h(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},lt.requestFormReset=function(p){s.d.r(p)},lt.unstable_batchedUpdates=function(p,g){return p(g)},lt.useFormState=function(p,g,y){return d.H.useFormState(p,g,y)},lt.useFormStatus=function(){return d.H.useHostTransitionStatus()},lt.version="19.2.4",lt}var Vp;function GS(){if(Vp)return Iu.exports;Vp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Iu.exports=QS(),Iu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function kS(){if(Bp)return Ai;Bp=1;var n=PS(),i=Xc(),r=GS();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(f(e)!==e)throw Error(s(188))}function g(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,o=t;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){a=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return p(l),e;if(u===o)return p(l),t;u=u.sibling}throw Error(s(188))}if(a.return!==o.return)a=l,o=u;else{for(var m=!1,v=l.child;v;){if(v===a){m=!0,a=l,o=u;break}if(v===o){m=!0,o=l,a=u;break}v=v.sibling}if(!m){for(v=u.child;v;){if(v===a){m=!0,a=u,o=l;break}if(v===o){m=!0,o=u,a=l;break}v=v.sibling}if(!m)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,T=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),Ae=Symbol.for("react.memo_cache_sentinel"),Ve=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=Ve&&e[Ve]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case H:return"Profiler";case U:return"StrictMode";case Y:return"Suspense";case oe:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case Q:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:rt(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return rt(e(t))}catch{}}return null}var Pe=Array.isArray,j=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},me=[],k=-1;function A(e){return{current:e}}function B(e){0>k||(e.current=me[k],me[k]=null,k--)}function J(e,t){k++,me[k]=e.current,e.current=t}var K=A(null),ne=A(null),re=A(null),be=A(null);function $e(e,t){switch(J(re,t),J(ne,e),J(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wh(t),e=$h(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(K),J(K,e)}function fe(){B(K),B(ne),B(re)}function Ma(e){e.memoizedState!==null&&J(be,e);var t=K.current,a=$h(t,e.type);t!==a&&(J(ne,e),J(K,a))}function ia(e){ne.current===e&&(B(K),B(ne)),be.current===e&&(B(be),bi._currentValue=W)}var Ca,wn;function jt(e){if(Ca===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ca=t&&t[1]||"",wn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ca+e+wn}var Or=!1;function jr(e,t){if(!e||Or)return"";Or=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(N){var q=N}Reflect.construct(e,[],V)}else{try{V.call()}catch(N){q=N}e.call(V.prototype)}}else{try{throw Error()}catch(N){q=N}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(N){if(N&&q&&typeof N.stack=="string")return[N.stack,q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),m=u[0],v=u[1];if(m&&v){var x=m.split(`
`),C=v.split(`
`);for(l=o=0;o<x.length&&!x[o].includes("DetermineComponentFrameRoot");)o++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(o===x.length||l===C.length)for(o=x.length-1,l=C.length-1;1<=o&&0<=l&&x[o]!==C[l];)l--;for(;1<=o&&0<=l;o--,l--)if(x[o]!==C[l]){if(o!==1||l!==1)do if(o--,l--,0>l||x[o]!==C[l]){var w=`
`+x[o].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=o&&0<=l);break}}}finally{Or=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function h0(e,t){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return e.child!==t&&t!==null?jt("Suspense Fallback"):jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return jr(e.type,!1);case 11:return jr(e.type.render,!1);case 1:return jr(e.type,!0);case 31:return jt("Activity");default:return""}}function Cd(e){try{var t="",a=null;do t+=h0(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var wr=Object.prototype.hasOwnProperty,Rr=n.unstable_scheduleCallback,Vr=n.unstable_cancelCallback,p0=n.unstable_shouldYield,g0=n.unstable_requestPaint,xt=n.unstable_now,v0=n.unstable_getCurrentPriorityLevel,zd=n.unstable_ImmediatePriority,qd=n.unstable_UserBlockingPriority,Qi=n.unstable_NormalPriority,y0=n.unstable_LowPriority,Nd=n.unstable_IdlePriority,b0=n.log,S0=n.unstable_setDisableYieldValue,Oo=null,Et=null;function za(e){if(typeof b0=="function"&&S0(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Oo,e)}catch{}}var At=Math.clz32?Math.clz32:E0,T0=Math.log,x0=Math.LN2;function E0(e){return e>>>=0,e===0?32:31-(T0(e)/x0|0)|0}var Gi=256,ki=262144,Yi=4194304;function ln(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xi(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=o&134217727;return v!==0?(o=v&~u,o!==0?l=ln(o):(m&=v,m!==0?l=ln(m):a||(a=v&~e,a!==0&&(l=ln(a))))):(v=o&~u,v!==0?l=ln(v):m!==0?l=ln(m):a||(a=o&~e,a!==0&&(l=ln(a)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:l}function jo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function A0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(){var e=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),e}function Br(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function wo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function D0(e,t,a,o,l,u){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var v=e.entanglements,x=e.expirationTimes,C=e.hiddenUpdates;for(a=m&~a;0<a;){var w=31-At(a),V=1<<w;v[w]=0,x[w]=-1;var q=C[w];if(q!==null)for(C[w]=null,w=0;w<q.length;w++){var N=q[w];N!==null&&(N.lane&=-536870913)}a&=~V}o!==0&&jd(e,o,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function jd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-At(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function wd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-At(a),l=1<<o;l&t|e[o]&t&&(e[o]|=t),a&=~l}}function Rd(e,t){var a=t&-t;return a=(a&42)!==0?1:_r(a),(a&(e.suspendedLanes|t))!==0?0:a}function _r(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Lr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vd(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Tp(e.type))}function Bd(e,t){var a=P.p;try{return P.p=e,t()}finally{P.p=a}}var qa=Math.random().toString(36).slice(2),tt="__reactFiber$"+qa,pt="__reactProps$"+qa,Rn="__reactContainer$"+qa,Ur="__reactEvents$"+qa,M0="__reactListeners$"+qa,C0="__reactHandles$"+qa,_d="__reactResources$"+qa,Ro="__reactMarker$"+qa;function Hr(e){delete e[tt],delete e[pt],delete e[Ur],delete e[M0],delete e[C0]}function Vn(e){var t=e[tt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Rn]||a[tt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ip(e);e!==null;){if(a=e[tt])return a;e=ip(e)}return t}e=a,a=e.parentNode}return null}function Bn(e){if(e=e[tt]||e[Rn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function _n(e){var t=e[_d];return t||(t=e[_d]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[Ro]=!0}var Ld=new Set,Ud={};function un(e,t){Ln(e,t),Ln(e+"Capture",t)}function Ln(e,t){for(Ud[e]=t,e=0;e<t.length;e++)Ld.add(t[e])}var z0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hd={},Pd={};function q0(e){return wr.call(Pd,e)?!0:wr.call(Hd,e)?!1:z0.test(e)?Pd[e]=!0:(Hd[e]=!0,!1)}function Ji(e,t,a){if(q0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function sa(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function N0(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){a=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){if(!e._valueTracker){var t=Qd(e)?"checked":"value";e._valueTracker=N0(e,t,""+e[t])}}function Gd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=Qd(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var O0=/[\n"\\]/g;function Rt(e){return e.replace(O0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Qr(e,t,a,o,l,u,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Gr(e,m,wt(t)):a!=null?Gr(e,m,wt(a)):o!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+wt(v):e.removeAttribute("name")}function kd(e,t,a,o,l,u,m,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Pr(e);return}a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,v||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=v?e.checked:!!o,e.defaultChecked=!!o,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Pr(e)}function Gr(e,t,a){t==="number"&&Ki(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Un(e,t,a,o){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&o&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Yd(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function Xd(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(s(92));if(Pe(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Pr(e)}function Hn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var j0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jd(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||j0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Zd(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var l in t)o=t[l],t.hasOwnProperty(l)&&a[l]!==o&&Jd(e,l,o)}else for(var u in t)t.hasOwnProperty(u)&&Jd(e,u,t[u])}function kr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fi(e){return R0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ra(){}var Yr=null;function Xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pn=null,Qn=null;function Kd(e){var t=Bn(e);if(t&&(e=t.stateNode)){var a=e[pt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Qr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var l=o[pt]||null;if(!l)throw Error(s(90));Qr(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&Gd(o)}break e;case"textarea":Yd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Un(e,!!a.multiple,t,!1)}}}var Jr=!1;function Fd(e,t,a){if(Jr)return e(t,a);Jr=!0;try{var o=e(t);return o}finally{if(Jr=!1,(Pn!==null||Qn!==null)&&(_s(),Pn&&(t=Pn,e=Qn,Qn=Pn=null,Kd(t),e)))for(t=0;t<e.length;t++)Kd(e[t])}}function Bo(e,t){var a=e.stateNode;if(a===null)return null;var o=a[pt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zr=!1;if(la)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Zr=!1}var Na=null,Kr=null,Wi=null;function Wd(){if(Wi)return Wi;var e,t=Kr,a=t.length,o,l="value"in Na?Na.value:Na.textContent,u=l.length;for(e=0;e<a&&t[e]===l[e];e++);var m=a-e;for(o=1;o<=m&&t[a-o]===l[u-o];o++);return Wi=l.slice(e,1<o?1-o:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function $d(){return!1}function gt(e){function t(a,o,l,u,m){this._reactName=a,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(a=e[v],this[v]=a?a(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ii:$d,this.isPropagationStopped=$d,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=gt(cn),Lo=b({},cn,{view:0,detail:0}),V0=gt(Lo),Fr,Wr,Uo,ts=b({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?(Fr=e.screenX-Uo.screenX,Wr=e.screenY-Uo.screenY):Wr=Fr=0,Uo=e),Fr)},movementY:function(e){return"movementY"in e?e.movementY:Wr}}),Id=gt(ts),B0=b({},ts,{dataTransfer:0}),_0=gt(B0),L0=b({},Lo,{relatedTarget:0}),$r=gt(L0),U0=b({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=gt(U0),P0=b({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Q0=gt(P0),G0=b({},cn,{data:0}),em=gt(G0),k0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X0[e])?!!t[e]:!1}function Ir(){return J0}var Z0=b({},Lo,{key:function(e){if(e.key){var t=k0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ir,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K0=gt(Z0),F0=b({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=gt(F0),W0=b({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ir}),$0=gt(W0),I0=b({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),eb=gt(I0),tb=b({},ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ab=gt(tb),nb=b({},cn,{newState:0,oldState:0}),ob=gt(nb),ib=[9,13,27,32],el=la&&"CompositionEvent"in window,Ho=null;la&&"documentMode"in document&&(Ho=document.documentMode);var sb=la&&"TextEvent"in window&&!Ho,am=la&&(!el||Ho&&8<Ho&&11>=Ho),nm=" ",om=!1;function im(e,t){switch(e){case"keyup":return ib.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function rb(e,t){switch(e){case"compositionend":return sm(t);case"keypress":return t.which!==32?null:(om=!0,nm);case"textInput":return e=t.data,e===nm&&om?null:e;default:return null}}function lb(e,t){if(Gn)return e==="compositionend"||!el&&im(e,t)?(e=Wd(),Wi=Kr=Na=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return am&&t.locale!=="ko"?null:t.data;default:return null}}var ub={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ub[e.type]:t==="textarea"}function lm(e,t,a,o){Pn?Qn?Qn.push(o):Qn=[o]:Pn=o,t=ks(t,"onChange"),0<t.length&&(a=new es("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Po=null,Qo=null;function cb(e){Yh(e,0)}function as(e){var t=Vo(e);if(Gd(t))return e}function um(e,t){if(e==="change")return t}var cm=!1;if(la){var tl;if(la){var al="oninput"in document;if(!al){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),al=typeof dm.oninput=="function"}tl=al}else tl=!1;cm=tl&&(!document.documentMode||9<document.documentMode)}function mm(){Po&&(Po.detachEvent("onpropertychange",fm),Qo=Po=null)}function fm(e){if(e.propertyName==="value"&&as(Qo)){var t=[];lm(t,Qo,e,Xr(e)),Fd(cb,t)}}function db(e,t,a){e==="focusin"?(mm(),Po=t,Qo=a,Po.attachEvent("onpropertychange",fm)):e==="focusout"&&mm()}function mb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return as(Qo)}function fb(e,t){if(e==="click")return as(t)}function hb(e,t){if(e==="input"||e==="change")return as(t)}function pb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:pb;function Go(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var l=a[o];if(!wr.call(t,l)||!Dt(e[l],t[l]))return!1}return!0}function hm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pm(e,t){var a=hm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hm(a)}}function gm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ki(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ki(e.document)}return t}function nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gb=la&&"documentMode"in document&&11>=document.documentMode,kn=null,ol=null,ko=null,il=!1;function ym(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;il||kn==null||kn!==Ki(o)||(o=kn,"selectionStart"in o&&nl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ko&&Go(ko,o)||(ko=o,o=ks(ol,"onSelect"),0<o.length&&(t=new es("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=kn)))}function dn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Yn={animationend:dn("Animation","AnimationEnd"),animationiteration:dn("Animation","AnimationIteration"),animationstart:dn("Animation","AnimationStart"),transitionrun:dn("Transition","TransitionRun"),transitionstart:dn("Transition","TransitionStart"),transitioncancel:dn("Transition","TransitionCancel"),transitionend:dn("Transition","TransitionEnd")},sl={},bm={};la&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function mn(e){if(sl[e])return sl[e];if(!Yn[e])return e;var t=Yn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in bm)return sl[e]=t[a];return e}var Sm=mn("animationend"),Tm=mn("animationiteration"),xm=mn("animationstart"),vb=mn("transitionrun"),yb=mn("transitionstart"),bb=mn("transitioncancel"),Em=mn("transitionend"),Am=new Map,rl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rl.push("scrollEnd");function Yt(e,t){Am.set(e,t),un(t,[e])}var ns=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],Xn=0,ll=0;function os(){for(var e=Xn,t=ll=Xn=0;t<e;){var a=Vt[t];Vt[t++]=null;var o=Vt[t];Vt[t++]=null;var l=Vt[t];Vt[t++]=null;var u=Vt[t];if(Vt[t++]=null,o!==null&&l!==null){var m=o.pending;m===null?l.next=l:(l.next=m.next,m.next=l),o.pending=l}u!==0&&Dm(a,l,u)}}function is(e,t,a,o){Vt[Xn++]=e,Vt[Xn++]=t,Vt[Xn++]=a,Vt[Xn++]=o,ll|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ul(e,t,a,o){return is(e,t,a,o),ss(e)}function fn(e,t){return is(e,null,null,t),ss(e)}function Dm(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-At(a),e=u.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=a|536870912),u):null}function ss(e){if(50<mi)throw mi=0,yu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Jn={};function Sb(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,a,o){return new Sb(e,t,a,o)}function cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,t){var a=e.alternate;return a===null?(a=Mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mm(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rs(e,t,a,o,l,u){var m=0;if(o=e,typeof e=="function")cl(e)&&(m=1);else if(typeof e=="string")m=DS(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Mt(31,a,t,l),e.elementType=ie,e.lanes=u,e;case L:return hn(a.children,l,u,t);case U:m=8,l|=24;break;case H:return e=Mt(12,a,t,l|2),e.elementType=H,e.lanes=u,e;case Y:return e=Mt(13,a,t,l),e.elementType=Y,e.lanes=u,e;case oe:return e=Mt(19,a,t,l),e.elementType=oe,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:m=10;break e;case X:m=9;break e;case Z:m=11;break e;case F:m=14;break e;case _:m=16,o=null;break e}m=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return t=Mt(m,a,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function hn(e,t,a,o){return e=Mt(7,e,o,t),e.lanes=a,e}function dl(e,t,a){return e=Mt(6,e,null,t),e.lanes=a,e}function Cm(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function ml(e,t,a){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zm=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var a=zm.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Cd(t)},zm.set(e,t),t)}return{value:e,source:t,stack:Cd(t)}}var Zn=[],Kn=0,ls=null,Yo=0,_t=[],Lt=0,Oa=null,$t=1,It="";function ca(e,t){Zn[Kn++]=Yo,Zn[Kn++]=ls,ls=e,Yo=t}function qm(e,t,a){_t[Lt++]=$t,_t[Lt++]=It,_t[Lt++]=Oa,Oa=e;var o=$t;e=It;var l=32-At(o)-1;o&=~(1<<l),a+=1;var u=32-At(t)+l;if(30<u){var m=l-l%5;u=(o&(1<<m)-1).toString(32),o>>=m,l-=m,$t=1<<32-At(t)+l|a<<l|o,It=u+e}else $t=1<<u|a<<l|o,It=e}function fl(e){e.return!==null&&(ca(e,1),qm(e,1,0))}function hl(e){for(;e===ls;)ls=Zn[--Kn],Zn[Kn]=null,Yo=Zn[--Kn],Zn[Kn]=null;for(;e===Oa;)Oa=_t[--Lt],_t[Lt]=null,It=_t[--Lt],_t[Lt]=null,$t=_t[--Lt],_t[Lt]=null}function Nm(e,t){_t[Lt++]=$t,_t[Lt++]=It,_t[Lt++]=Oa,$t=t.id,It=t.overflow,Oa=e}var at=null,we=null,Se=!1,ja=null,Ut=!1,pl=Error(s(519));function wa(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(Bt(t,e)),pl}function Om(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[tt]=e,t[pt]=o,a){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(a=0;a<hi.length;a++)ge(hi[a],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),kd(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),Xd(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Kh(t.textContent,a)?(o.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),o.onScroll!=null&&ge("scroll",t),o.onScrollEnd!=null&&ge("scrollend",t),o.onClick!=null&&(t.onclick=ra),t=!0):t=!1,t||wa(e,!0)}function jm(e){for(at=e.return;at;)switch(at.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:at=at.return}}function Fn(e){if(e!==at)return!1;if(!Se)return jm(e),Se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wu(e.type,e.memoizedProps)),a=!a),a&&we&&wa(e),jm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));we=op(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));we=op(e)}else t===27?(t=we,Ja(e.type)?(e=Lu,Lu=null,we=e):we=t):we=at?Pt(e.stateNode.nextSibling):null;return!0}function pn(){we=at=null,Se=!1}function gl(){var e=ja;return e!==null&&(St===null?St=e:St.push.apply(St,e),ja=null),e}function Xo(e){ja===null?ja=[e]:ja.push(e)}var vl=A(null),gn=null,da=null;function Ra(e,t,a){J(vl,t._currentValue),t._currentValue=a}function ma(e){e._currentValue=vl.current,B(vl)}function yl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function bl(e,t,a,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var m=l.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=l;for(var x=0;x<t.length;x++)if(v.context===t[x]){u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),yl(u.return,a,e),o||(m=null);break e}u=v.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=a,u=m.alternate,u!==null&&(u.lanes|=a),yl(m,a,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Wn(e,t,a,o){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var v=l.type;Dt(l.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(l===be.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(bi):e=[bi])}l=l.return}e!==null&&bl(t,e,a,o),t.flags|=262144}function us(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vn(e){gn=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return wm(gn,e)}function cs(e,t){return gn===null&&vn(e),wm(e,t)}function wm(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},da===null){if(e===null)throw Error(s(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return a}var Tb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},xb=n.unstable_scheduleCallback,Eb=n.unstable_NormalPriority,ke={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sl(){return{controller:new Tb,data:new Map,refCount:0}}function Jo(e){e.refCount--,e.refCount===0&&xb(Eb,function(){e.controller.abort()})}var Zo=null,Tl=0,$n=0,In=null;function Ab(e,t){if(Zo===null){var a=Zo=[];Tl=0,$n=Au(),In={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Tl++,t.then(Rm,Rm),t}function Rm(){if(--Tl===0&&Zo!==null){In!==null&&(In.status="fulfilled");var e=Zo;Zo=null,$n=0,In=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Db(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),o}var Vm=j.S;j.S=function(e,t){bh=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ab(e,t),Vm!==null&&Vm(e,t)};var yn=A(null);function xl(){var e=yn.current;return e!==null?e:Ne.pooledCache}function ds(e,t){t===null?J(yn,yn.current):J(yn,t.pool)}function Bm(){var e=xl();return e===null?null:{parent:ke._currentValue,pool:e}}var eo=Error(s(460)),El=Error(s(474)),ms=Error(s(542)),fs={then:function(){}};function _m(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lm(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ra,ra),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hm(e),e;default:if(typeof t.status=="string")t.then(ra,ra);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=o}},function(o){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hm(e),e}throw Sn=t,eo}}function bn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Sn=a,eo):a}}var Sn=null;function Um(){if(Sn===null)throw Error(s(459));var e=Sn;return Sn=null,e}function Hm(e){if(e===eo||e===ms)throw Error(s(483))}var to=null,Ko=0;function hs(e){var t=Ko;return Ko+=1,to===null&&(to=[]),Lm(to,e,t)}function Fo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ps(e,t){throw t.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Pm(e){function t(D,E){if(e){var M=D.deletions;M===null?(D.deletions=[E],D.flags|=16):M.push(E)}}function a(D,E){if(!e)return null;for(;E!==null;)t(D,E),E=E.sibling;return null}function o(D){for(var E=new Map;D!==null;)D.key!==null?E.set(D.key,D):E.set(D.index,D),D=D.sibling;return E}function l(D,E){return D=ua(D,E),D.index=0,D.sibling=null,D}function u(D,E,M){return D.index=M,e?(M=D.alternate,M!==null?(M=M.index,M<E?(D.flags|=67108866,E):M):(D.flags|=67108866,E)):(D.flags|=1048576,E)}function m(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function v(D,E,M,R){return E===null||E.tag!==6?(E=dl(M,D.mode,R),E.return=D,E):(E=l(E,M),E.return=D,E)}function x(D,E,M,R){var se=M.type;return se===L?w(D,E,M.props.children,R,M.key):E!==null&&(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&bn(se)===E.type)?(E=l(E,M.props),Fo(E,M),E.return=D,E):(E=rs(M.type,M.key,M.props,null,D.mode,R),Fo(E,M),E.return=D,E)}function C(D,E,M,R){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=ml(M,D.mode,R),E.return=D,E):(E=l(E,M.children||[]),E.return=D,E)}function w(D,E,M,R,se){return E===null||E.tag!==7?(E=hn(M,D.mode,R,se),E.return=D,E):(E=l(E,M),E.return=D,E)}function V(D,E,M){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=dl(""+E,D.mode,M),E.return=D,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case z:return M=rs(E.type,E.key,E.props,null,D.mode,M),Fo(M,E),M.return=D,M;case O:return E=ml(E,D.mode,M),E.return=D,E;case _:return E=bn(E),V(D,E,M)}if(Pe(E)||je(E))return E=hn(E,D.mode,M,null),E.return=D,E;if(typeof E.then=="function")return V(D,hs(E),M);if(E.$$typeof===Q)return V(D,cs(D,E),M);ps(D,E)}return null}function q(D,E,M,R){var se=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return se!==null?null:v(D,E,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case z:return M.key===se?x(D,E,M,R):null;case O:return M.key===se?C(D,E,M,R):null;case _:return M=bn(M),q(D,E,M,R)}if(Pe(M)||je(M))return se!==null?null:w(D,E,M,R,null);if(typeof M.then=="function")return q(D,E,hs(M),R);if(M.$$typeof===Q)return q(D,E,cs(D,M),R);ps(D,M)}return null}function N(D,E,M,R,se){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return D=D.get(M)||null,v(E,D,""+R,se);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case z:return D=D.get(R.key===null?M:R.key)||null,x(E,D,R,se);case O:return D=D.get(R.key===null?M:R.key)||null,C(E,D,R,se);case _:return R=bn(R),N(D,E,M,R,se)}if(Pe(R)||je(R))return D=D.get(M)||null,w(E,D,R,se,null);if(typeof R.then=="function")return N(D,E,M,hs(R),se);if(R.$$typeof===Q)return N(D,E,M,cs(E,R),se);ps(E,R)}return null}function $(D,E,M,R){for(var se=null,Te=null,ae=E,de=E=0,ye=null;ae!==null&&de<M.length;de++){ae.index>de?(ye=ae,ae=null):ye=ae.sibling;var xe=q(D,ae,M[de],R);if(xe===null){ae===null&&(ae=ye);break}e&&ae&&xe.alternate===null&&t(D,ae),E=u(xe,E,de),Te===null?se=xe:Te.sibling=xe,Te=xe,ae=ye}if(de===M.length)return a(D,ae),Se&&ca(D,de),se;if(ae===null){for(;de<M.length;de++)ae=V(D,M[de],R),ae!==null&&(E=u(ae,E,de),Te===null?se=ae:Te.sibling=ae,Te=ae);return Se&&ca(D,de),se}for(ae=o(ae);de<M.length;de++)ye=N(ae,D,de,M[de],R),ye!==null&&(e&&ye.alternate!==null&&ae.delete(ye.key===null?de:ye.key),E=u(ye,E,de),Te===null?se=ye:Te.sibling=ye,Te=ye);return e&&ae.forEach(function($a){return t(D,$a)}),Se&&ca(D,de),se}function le(D,E,M,R){if(M==null)throw Error(s(151));for(var se=null,Te=null,ae=E,de=E=0,ye=null,xe=M.next();ae!==null&&!xe.done;de++,xe=M.next()){ae.index>de?(ye=ae,ae=null):ye=ae.sibling;var $a=q(D,ae,xe.value,R);if($a===null){ae===null&&(ae=ye);break}e&&ae&&$a.alternate===null&&t(D,ae),E=u($a,E,de),Te===null?se=$a:Te.sibling=$a,Te=$a,ae=ye}if(xe.done)return a(D,ae),Se&&ca(D,de),se;if(ae===null){for(;!xe.done;de++,xe=M.next())xe=V(D,xe.value,R),xe!==null&&(E=u(xe,E,de),Te===null?se=xe:Te.sibling=xe,Te=xe);return Se&&ca(D,de),se}for(ae=o(ae);!xe.done;de++,xe=M.next())xe=N(ae,D,de,xe.value,R),xe!==null&&(e&&xe.alternate!==null&&ae.delete(xe.key===null?de:xe.key),E=u(xe,E,de),Te===null?se=xe:Te.sibling=xe,Te=xe);return e&&ae.forEach(function(BS){return t(D,BS)}),Se&&ca(D,de),se}function qe(D,E,M,R){if(typeof M=="object"&&M!==null&&M.type===L&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case z:e:{for(var se=M.key;E!==null;){if(E.key===se){if(se=M.type,se===L){if(E.tag===7){a(D,E.sibling),R=l(E,M.props.children),R.return=D,D=R;break e}}else if(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&bn(se)===E.type){a(D,E.sibling),R=l(E,M.props),Fo(R,M),R.return=D,D=R;break e}a(D,E);break}else t(D,E);E=E.sibling}M.type===L?(R=hn(M.props.children,D.mode,R,M.key),R.return=D,D=R):(R=rs(M.type,M.key,M.props,null,D.mode,R),Fo(R,M),R.return=D,D=R)}return m(D);case O:e:{for(se=M.key;E!==null;){if(E.key===se)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){a(D,E.sibling),R=l(E,M.children||[]),R.return=D,D=R;break e}else{a(D,E);break}else t(D,E);E=E.sibling}R=ml(M,D.mode,R),R.return=D,D=R}return m(D);case _:return M=bn(M),qe(D,E,M,R)}if(Pe(M))return $(D,E,M,R);if(je(M)){if(se=je(M),typeof se!="function")throw Error(s(150));return M=se.call(M),le(D,E,M,R)}if(typeof M.then=="function")return qe(D,E,hs(M),R);if(M.$$typeof===Q)return qe(D,E,cs(D,M),R);ps(D,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,E!==null&&E.tag===6?(a(D,E.sibling),R=l(E,M),R.return=D,D=R):(a(D,E),R=dl(M,D.mode,R),R.return=D,D=R),m(D)):a(D,E)}return function(D,E,M,R){try{Ko=0;var se=qe(D,E,M,R);return to=null,se}catch(ae){if(ae===eo||ae===ms)throw ae;var Te=Mt(29,ae,null,D.mode);return Te.lanes=R,Te.return=D,Te}finally{}}}var Tn=Pm(!0),Qm=Pm(!1),Va=!1;function Al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ee&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=ss(e),Dm(e,null,a),t}return is(e,o,t,a),ss(e)}function Wo(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,wd(e,a)}}function Ml(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=m:u=u.next=m,a=a.next}while(a!==null);u===null?l=u=t:u=u.next=t}else l=u=t;a={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Cl=!1;function $o(){if(Cl){var e=In;if(e!==null)throw e}}function Io(e,t,a,o){Cl=!1;var l=e.updateQueue;Va=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var x=v,C=x.next;x.next=null,m===null?u=C:m.next=C,m=x;var w=e.alternate;w!==null&&(w=w.updateQueue,v=w.lastBaseUpdate,v!==m&&(v===null?w.firstBaseUpdate=C:v.next=C,w.lastBaseUpdate=x))}if(u!==null){var V=l.baseState;m=0,w=C=x=null,v=u;do{var q=v.lane&-536870913,N=q!==v.lane;if(N?(ve&q)===q:(o&q)===q){q!==0&&q===$n&&(Cl=!0),w!==null&&(w=w.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var $=e,le=v;q=t;var qe=a;switch(le.tag){case 1:if($=le.payload,typeof $=="function"){V=$.call(qe,V,q);break e}V=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=le.payload,q=typeof $=="function"?$.call(qe,V,q):$,q==null)break e;V=b({},V,q);break e;case 2:Va=!0}}q=v.callback,q!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[q]:N.push(q))}else N={lane:q,tag:v.tag,payload:v.payload,callback:v.callback,next:null},w===null?(C=w=N,x=V):w=w.next=N,m|=q;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;N=v,v=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);w===null&&(x=V),l.baseState=x,l.firstBaseUpdate=C,l.lastBaseUpdate=w,u===null&&(l.shared.lanes=0),Qa|=m,e.lanes=m,e.memoizedState=V}}function Gm(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function km(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gm(a[e],t)}var ao=A(null),gs=A(0);function Ym(e,t){e=Ta,J(gs,e),J(ao,t),Ta=e|t.baseLanes}function zl(){J(gs,Ta),J(ao,ao.current)}function ql(){Ta=gs.current,B(ao),B(gs)}var Ct=A(null),Ht=null;function La(e){var t=e.alternate;J(Qe,Qe.current&1),J(Ct,e),Ht===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(Ht=e)}function Nl(e){J(Qe,Qe.current),J(Ct,e),Ht===null&&(Ht=e)}function Xm(e){e.tag===22?(J(Qe,Qe.current),J(Ct,e),Ht===null&&(Ht=e)):Ua()}function Ua(){J(Qe,Qe.current),J(Ct,Ct.current)}function zt(e){B(Ct),Ht===e&&(Ht=null),B(Qe)}var Qe=A(0);function vs(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bu(a)||_u(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fa=0,ce=null,Ce=null,Ye=null,ys=!1,no=!1,xn=!1,bs=0,ei=0,oo=null,Mb=0;function Le(){throw Error(s(321))}function Ol(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Dt(e[a],t[a]))return!1;return!0}function jl(e,t,a,o,l,u){return fa=u,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Nf:Jl,xn=!1,u=a(o,l),xn=!1,no&&(u=Zm(t,a,o,l)),Jm(e),u}function Jm(e){j.H=ni;var t=Ce!==null&&Ce.next!==null;if(fa=0,Ye=Ce=ce=null,ys=!1,ei=0,oo=null,t)throw Error(s(300));e===null||Xe||(e=e.dependencies,e!==null&&us(e)&&(Xe=!0))}function Zm(e,t,a,o){ce=e;var l=0;do{if(no&&(oo=null),ei=0,no=!1,25<=l)throw Error(s(301));if(l+=1,Ye=Ce=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}j.H=Of,u=t(a,o)}while(no);return u}function Cb(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?ti(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(ce.flags|=1024),t}function wl(){var e=bs!==0;return bs=0,e}function Rl(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Vl(e){if(ys){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ys=!1}fa=0,Ye=Ce=ce=null,no=!1,ei=bs=0,oo=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ce.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ge(){if(Ce===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Ye===null?ce.memoizedState:Ye.next;if(t!==null)Ye=t,Ce=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ye===null?ce.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ti(e){var t=ei;return ei+=1,oo===null&&(oo=[]),e=Lm(oo,e,t),t=ce,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Nf:Jl),e}function Ts(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ti(e);if(e.$$typeof===Q)return nt(e)}throw Error(s(438,String(e)))}function Bl(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ss(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=Ae;return t.index++,a}function ha(e,t){return typeof t=="function"?t(e):t}function xs(e){var t=Ge();return _l(t,Ce,e)}function _l(e,t,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var l=e.baseQueue,u=o.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}t.baseQueue=l=u,o.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var v=m=null,x=null,C=t,w=!1;do{var V=C.lane&-536870913;if(V!==C.lane?(ve&V)===V:(fa&V)===V){var q=C.revertLane;if(q===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),V===$n&&(w=!0);else if((fa&q)===q){C=C.next,q===$n&&(w=!0);continue}else V={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(v=x=V,m=u):x=x.next=V,ce.lanes|=q,Qa|=q;V=C.action,xn&&a(u,V),u=C.hasEagerState?C.eagerState:a(u,V)}else q={lane:V,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(v=x=q,m=u):x=x.next=q,ce.lanes|=V,Qa|=V;C=C.next}while(C!==null&&C!==t);if(x===null?m=u:x.next=v,!Dt(u,e.memoizedState)&&(Xe=!0,w&&(a=In,a!==null)))throw a;e.memoizedState=u,e.baseState=m,e.baseQueue=x,o.lastRenderedState=u}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ll(e){var t=Ge(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,l=a.pending,u=t.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);Dt(u,t.memoizedState)||(Xe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function Km(e,t,a){var o=ce,l=Ge(),u=Se;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=t();var m=!Dt((Ce||l).memoizedState,a);if(m&&(l.memoizedState=a,Xe=!0),l=l.queue,Pl($m.bind(null,o,l,e),[e]),l.getSnapshot!==t||m||Ye!==null&&Ye.memoizedState.tag&1){if(o.flags|=2048,io(9,{destroy:void 0},Wm.bind(null,o,l,a,t),null),Ne===null)throw Error(s(349));u||(fa&127)!==0||Fm(o,t,a)}return a}function Fm(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=Ss(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Wm(e,t,a,o){t.value=a,t.getSnapshot=o,Im(t)&&ef(e)}function $m(e,t,a){return a(function(){Im(t)&&ef(e)})}function Im(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Dt(e,a)}catch{return!0}}function ef(e){var t=fn(e,2);t!==null&&Tt(t,e,2)}function Ul(e){var t=dt();if(typeof e=="function"){var a=e;if(e=a(),xn){za(!0);try{a()}finally{za(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},t}function tf(e,t,a,o){return e.baseState=a,_l(e,Ce,typeof o=="function"?o:ha)}function zb(e,t,a,o,l){if(Ds(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};j.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,af(t,u)):(u.next=a.next,t.pending=a.next=u)}}function af(e,t){var a=t.action,o=t.payload,l=e.state;if(t.isTransition){var u=j.T,m={};j.T=m;try{var v=a(l,o),x=j.S;x!==null&&x(m,v),nf(e,t,v)}catch(C){Hl(e,t,C)}finally{u!==null&&m.types!==null&&(u.types=m.types),j.T=u}}else try{u=a(l,o),nf(e,t,u)}catch(C){Hl(e,t,C)}}function nf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){of(e,t,o)},function(o){return Hl(e,t,o)}):of(e,t,a)}function of(e,t,a){t.status="fulfilled",t.value=a,sf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,af(e,a)))}function Hl(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,sf(t),t=t.next;while(t!==o)}e.action=null}function sf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rf(e,t){return t}function lf(e,t){if(Se){var a=Ne.formState;if(a!==null){e:{var o=ce;if(Se){if(we){t:{for(var l=we,u=Ut;l.nodeType!==8;){if(!u){l=null;break t}if(l=Pt(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){we=Pt(l.nextSibling),o=l.data==="F!";break e}}wa(o)}o=!1}o&&(t=a[0])}}return a=dt(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rf,lastRenderedState:t},a.queue=o,a=Cf.bind(null,ce,o),o.dispatch=a,o=Ul(!1),u=Xl.bind(null,ce,!1,o.queue),o=dt(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,a=zb.bind(null,ce,l,u,a),l.dispatch=a,o.memoizedState=e,[t,a,!1]}function uf(e){var t=Ge();return cf(t,Ce,e)}function cf(e,t,a){if(t=_l(e,t,rf)[0],e=xs(ha)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ti(t)}catch(m){throw m===eo?ms:m}else o=t;t=Ge();var l=t.queue,u=l.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,io(9,{destroy:void 0},qb.bind(null,l,a),null)),[o,u,e]}function qb(e,t){e.action=t}function df(e){var t=Ge(),a=Ce;if(a!==null)return cf(t,a,e);Ge(),t=t.memoizedState,a=Ge();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function io(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Ss(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function mf(){return Ge().memoizedState}function Es(e,t,a,o){var l=dt();ce.flags|=e,l.memoizedState=io(1|t,{destroy:void 0},a,o===void 0?null:o)}function As(e,t,a,o){var l=Ge();o=o===void 0?null:o;var u=l.memoizedState.inst;Ce!==null&&o!==null&&Ol(o,Ce.memoizedState.deps)?l.memoizedState=io(t,u,a,o):(ce.flags|=e,l.memoizedState=io(1|t,u,a,o))}function ff(e,t){Es(8390656,8,e,t)}function Pl(e,t){As(2048,8,e,t)}function Nb(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Ss(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function hf(e){var t=Ge().memoizedState;return Nb({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function pf(e,t){return As(4,2,e,t)}function gf(e,t){return As(4,4,e,t)}function vf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yf(e,t,a){a=a!=null?a.concat([e]):null,As(4,4,vf.bind(null,t,e),a)}function Ql(){}function bf(e,t){var a=Ge();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Ol(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Sf(e,t){var a=Ge();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Ol(t,o[1]))return o[0];if(o=e(),xn){za(!0);try{e()}finally{za(!1)}}return a.memoizedState=[o,t],o}function Gl(e,t,a){return a===void 0||(fa&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Th(),ce.lanes|=e,Qa|=e,a)}function Tf(e,t,a,o){return Dt(a,t)?a:ao.current!==null?(e=Gl(e,a,o),Dt(e,t)||(Xe=!0),e):(fa&42)===0||(fa&1073741824)!==0&&(ve&261930)===0?(Xe=!0,e.memoizedState=a):(e=Th(),ce.lanes|=e,Qa|=e,t)}function xf(e,t,a,o,l){var u=P.p;P.p=u!==0&&8>u?u:8;var m=j.T,v={};j.T=v,Xl(e,!1,t,a);try{var x=l(),C=j.S;if(C!==null&&C(v,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var w=Db(x,o);ai(e,t,w,Ot(e))}else ai(e,t,o,Ot(e))}catch(V){ai(e,t,{then:function(){},status:"rejected",reason:V},Ot())}finally{P.p=u,m!==null&&v.types!==null&&(m.types=v.types),j.T=m}}function Ob(){}function kl(e,t,a,o){if(e.tag!==5)throw Error(s(476));var l=Ef(e).queue;xf(e,l,t,W,a===null?Ob:function(){return Af(e),a(o)})}function Ef(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Af(e){var t=Ef(e);t.next===null&&(t=e.alternate.memoizedState),ai(e,t.next.queue,{},Ot())}function Yl(){return nt(bi)}function Df(){return Ge().memoizedState}function Mf(){return Ge().memoizedState}function jb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ot();e=Ba(a);var o=_a(t,e,a);o!==null&&(Tt(o,t,a),Wo(o,t,a)),t={cache:Sl()},e.payload=t;return}t=t.return}}function wb(e,t,a){var o=Ot();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ds(e)?zf(t,a):(a=ul(e,t,a,o),a!==null&&(Tt(a,e,o),qf(a,t,o)))}function Cf(e,t,a){var o=Ot();ai(e,t,a,o)}function ai(e,t,a,o){var l={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))zf(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,v=u(m,a);if(l.hasEagerState=!0,l.eagerState=v,Dt(v,m))return is(e,t,l,0),Ne===null&&os(),!1}catch{}finally{}if(a=ul(e,t,l,o),a!==null)return Tt(a,e,o),qf(a,t,o),!0}return!1}function Xl(e,t,a,o){if(o={lane:2,revertLane:Au(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(t)throw Error(s(479))}else t=ul(e,a,o,2),t!==null&&Tt(t,e,2)}function Ds(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function zf(e,t){no=ys=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function qf(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,wd(e,a)}}var ni={readContext:nt,use:Ts,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};ni.useEffectEvent=Le;var Nf={readContext:nt,use:Ts,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:ff,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Es(4194308,4,vf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Es(4194308,4,e,t)},useInsertionEffect:function(e,t){Es(4,2,e,t)},useMemo:function(e,t){var a=dt();t=t===void 0?null:t;var o=e();if(xn){za(!0);try{e()}finally{za(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=dt();if(a!==void 0){var l=a(t);if(xn){za(!0);try{a(t)}finally{za(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=wb.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ul(e);var t=e.queue,a=Cf.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ql,useDeferredValue:function(e,t){var a=dt();return Gl(a,e,t)},useTransition:function(){var e=Ul(!1);return e=xf.bind(null,ce,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=ce,l=dt();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Ne===null)throw Error(s(349));(ve&127)!==0||Fm(o,t,a)}l.memoizedState=a;var u={value:a,getSnapshot:t};return l.queue=u,ff($m.bind(null,o,u,e),[e]),o.flags|=2048,io(9,{destroy:void 0},Wm.bind(null,o,u,a,t),null),a},useId:function(){var e=dt(),t=Ne.identifierPrefix;if(Se){var a=It,o=$t;a=(o&~(1<<32-At(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=bs++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Mb++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Yl,useFormState:lf,useActionState:lf,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Xl.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:Bl,useCacheRefresh:function(){return dt().memoizedState=jb.bind(null,ce)},useEffectEvent:function(e){var t=dt(),a={impl:e};return t.memoizedState=a,function(){if((Ee&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Jl={readContext:nt,use:Ts,useCallback:bf,useContext:nt,useEffect:Pl,useImperativeHandle:yf,useInsertionEffect:pf,useLayoutEffect:gf,useMemo:Sf,useReducer:xs,useRef:mf,useState:function(){return xs(ha)},useDebugValue:Ql,useDeferredValue:function(e,t){var a=Ge();return Tf(a,Ce.memoizedState,e,t)},useTransition:function(){var e=xs(ha)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:Km,useId:Df,useHostTransitionStatus:Yl,useFormState:uf,useActionState:uf,useOptimistic:function(e,t){var a=Ge();return tf(a,Ce,e,t)},useMemoCache:Bl,useCacheRefresh:Mf};Jl.useEffectEvent=hf;var Of={readContext:nt,use:Ts,useCallback:bf,useContext:nt,useEffect:Pl,useImperativeHandle:yf,useInsertionEffect:pf,useLayoutEffect:gf,useMemo:Sf,useReducer:Ll,useRef:mf,useState:function(){return Ll(ha)},useDebugValue:Ql,useDeferredValue:function(e,t){var a=Ge();return Ce===null?Gl(a,e,t):Tf(a,Ce.memoizedState,e,t)},useTransition:function(){var e=Ll(ha)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:Km,useId:Df,useHostTransitionStatus:Yl,useFormState:df,useActionState:df,useOptimistic:function(e,t){var a=Ge();return Ce!==null?tf(a,Ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bl,useCacheRefresh:Mf};Of.useEffectEvent=hf;function Zl(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Kl={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Ot(),l=Ba(o);l.payload=t,a!=null&&(l.callback=a),t=_a(e,l,o),t!==null&&(Tt(t,e,o),Wo(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Ot(),l=Ba(o);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=_a(e,l,o),t!==null&&(Tt(t,e,o),Wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ot(),o=Ba(a);o.tag=2,t!=null&&(o.callback=t),t=_a(e,o,a),t!==null&&(Tt(t,e,a),Wo(t,e,a))}};function jf(e,t,a,o,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,m):t.prototype&&t.prototype.isPureReactComponent?!Go(a,o)||!Go(l,u):!0}function wf(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Kl.enqueueReplaceState(t,t.state,null)}function En(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Rf(e){ns(e)}function Vf(e){console.error(e)}function Bf(e){ns(e)}function Ms(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function _f(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Fl(e,t,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Ms(e,t)},a}function Lf(e){return e=Ba(e),e.tag=3,e}function Uf(e,t,a,o){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;e.payload=function(){return l(u)},e.callback=function(){_f(t,a,o)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){_f(t,a,o),typeof l!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var v=o.stack;this.componentDidCatch(o.value,{componentStack:v!==null?v:""})})}function Rb(e,t,a,o,l){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Wn(t,a,l,!0),a=Ct.current,a!==null){switch(a.tag){case 31:case 13:return Ht===null?Ls():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=l,o===fs?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Tu(e,o,l)),!1;case 22:return a.flags|=65536,o===fs?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Tu(e,o,l)),!1}throw Error(s(435,a.tag))}return Tu(e,o,l),Ls(),!1}if(Se)return t=Ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==pl&&(e=Error(s(422),{cause:o}),Xo(Bt(e,a)))):(o!==pl&&(t=Error(s(423),{cause:o}),Xo(Bt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=Bt(o,a),l=Fl(e.stateNode,o,l),Ml(e,l),Ue!==4&&(Ue=2)),!1;var u=Error(s(520),{cause:o});if(u=Bt(u,a),di===null?di=[u]:di.push(u),Ue!==4&&(Ue=2),t===null)return!0;o=Bt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Fl(a.stateNode,o,e),Ml(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ga===null||!Ga.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Lf(l),Uf(l,e,a,o),Ml(a,l),!1}a=a.return}while(a!==null);return!1}var Wl=Error(s(461)),Xe=!1;function ot(e,t,a,o){t.child=e===null?Qm(t,null,a,o):Tn(t,e.child,a,o)}function Hf(e,t,a,o,l){a=a.render;var u=t.ref;if("ref"in o){var m={};for(var v in o)v!=="ref"&&(m[v]=o[v])}else m=o;return vn(t),o=jl(e,t,a,m,u,l),v=wl(),e!==null&&!Xe?(Rl(e,t,l),pa(e,t,l)):(Se&&v&&fl(t),t.flags|=1,ot(e,t,o,l),t.child)}function Pf(e,t,a,o,l){if(e===null){var u=a.type;return typeof u=="function"&&!cl(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,Qf(e,t,u,o,l)):(e=rs(a.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!iu(e,l)){var m=u.memoizedProps;if(a=a.compare,a=a!==null?a:Go,a(m,o)&&e.ref===t.ref)return pa(e,t,l)}return t.flags|=1,e=ua(u,o),e.ref=t.ref,e.return=t,t.child=e}function Qf(e,t,a,o,l){if(e!==null){var u=e.memoizedProps;if(Go(u,o)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=o=u,iu(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,pa(e,t,l)}return $l(e,t,a,o,l)}function Gf(e,t,a,o){var l=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~u}else o=0,t.child=null;return kf(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ds(t,u!==null?u.cachePool:null),u!==null?Ym(t,u):zl(),Xm(t);else return o=t.lanes=536870912,kf(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(ds(t,u.cachePool),Ym(t,u),Ua(),t.memoizedState=null):(e!==null&&ds(t,null),zl(),Ua());return ot(e,t,l,a),t.child}function oi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function kf(e,t,a,o,l){var u=xl();return u=u===null?null:{parent:ke._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&ds(t,null),zl(),Xm(t),e!==null&&Wn(e,t,o,!0),t.childLanes=l,null}function Cs(e,t){return t=qs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Yf(e,t,a){return Tn(t,e.child,null,a),e=Cs(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function Vb(e,t,a){var o=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=Cs(t,o),t.lanes=536870912,oi(null,e);if(Nl(t),(e=we)?(e=np(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Cm(e),a.return=t,t.child=a,at=t,we=null)):e=null,e===null)throw wa(t);return t.lanes=536870912,null}return Cs(t,o)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(Nl(t),l)if(t.flags&256)t.flags&=-257,t=Yf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Xe||Wn(e,t,a,!1),l=(a&e.childLanes)!==0,Xe||l){if(o=Ne,o!==null&&(m=Rd(o,a),m!==0&&m!==u.retryLane))throw u.retryLane=m,fn(e,m),Tt(o,e,m),Wl;Ls(),t=Yf(e,t,a)}else e=u.treeContext,we=Pt(m.nextSibling),at=t,Se=!0,ja=null,Ut=!1,e!==null&&Nm(t,e),t=Cs(t,o),t.flags|=4096;return t}return e=ua(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zs(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function $l(e,t,a,o,l){return vn(t),a=jl(e,t,a,o,void 0,l),o=wl(),e!==null&&!Xe?(Rl(e,t,l),pa(e,t,l)):(Se&&o&&fl(t),t.flags|=1,ot(e,t,a,l),t.child)}function Xf(e,t,a,o,l,u){return vn(t),t.updateQueue=null,a=Zm(t,o,a,l),Jm(e),o=wl(),e!==null&&!Xe?(Rl(e,t,u),pa(e,t,u)):(Se&&o&&fl(t),t.flags|=1,ot(e,t,a,u),t.child)}function Jf(e,t,a,o,l){if(vn(t),t.stateNode===null){var u=Jn,m=a.contextType;typeof m=="object"&&m!==null&&(u=nt(m)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Kl,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Al(t),m=a.contextType,u.context=typeof m=="object"&&m!==null?nt(m):Jn,u.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Zl(t,a,m,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Kl.enqueueReplaceState(u,u.state,null),Io(t,o,u,l),$o(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,x=En(a,v);u.props=x;var C=u.context,w=a.contextType;m=Jn,typeof w=="object"&&w!==null&&(m=nt(w));var V=a.getDerivedStateFromProps;w=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,w||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||C!==m)&&wf(t,u,o,m),Va=!1;var q=t.memoizedState;u.state=q,Io(t,o,u,l),$o(),C=t.memoizedState,v||q!==C||Va?(typeof V=="function"&&(Zl(t,a,V,o),C=t.memoizedState),(x=Va||jf(t,a,x,o,q,C,m))?(w||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=C),u.props=o,u.state=C,u.context=m,o=x):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Dl(e,t),m=t.memoizedProps,w=En(a,m),u.props=w,V=t.pendingProps,q=u.context,C=a.contextType,x=Jn,typeof C=="object"&&C!==null&&(x=nt(C)),v=a.getDerivedStateFromProps,(C=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==V||q!==x)&&wf(t,u,o,x),Va=!1,q=t.memoizedState,u.state=q,Io(t,o,u,l),$o();var N=t.memoizedState;m!==V||q!==N||Va||e!==null&&e.dependencies!==null&&us(e.dependencies)?(typeof v=="function"&&(Zl(t,a,v,o),N=t.memoizedState),(w=Va||jf(t,a,w,o,q,N,x)||e!==null&&e.dependencies!==null&&us(e.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,N,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,N,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=N),u.props=o,u.state=N,u.context=x,o=w):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,zs(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=Tn(t,e.child,null,l),t.child=Tn(t,null,a,l)):ot(e,t,a,l),t.memoizedState=u.state,e=t.child):e=pa(e,t,l),e}function Zf(e,t,a,o){return pn(),t.flags|=256,ot(e,t,a,o),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eu(e){return{baseLanes:e,cachePool:Bm()}}function tu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Nt),e}function Kf(e,t,a){var o=t.pendingProps,l=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(l?La(t):Ua(),(e=we)?(e=np(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Cm(e),a.return=t,t.child=a,at=t,we=null)):e=null,e===null)throw wa(t);return _u(e)?t.lanes=32:t.lanes=536870912,null}var v=o.children;return o=o.fallback,l?(Ua(),l=t.mode,v=qs({mode:"hidden",children:v},l),o=hn(o,l,a,null),v.return=t,o.return=t,v.sibling=o,t.child=v,o=t.child,o.memoizedState=eu(a),o.childLanes=tu(e,m,a),t.memoizedState=Il,oi(null,o)):(La(t),au(t,v))}var x=e.memoizedState;if(x!==null&&(v=x.dehydrated,v!==null)){if(u)t.flags&256?(La(t),t.flags&=-257,t=nu(e,t,a)):t.memoizedState!==null?(Ua(),t.child=e.child,t.flags|=128,t=null):(Ua(),v=o.fallback,l=t.mode,o=qs({mode:"visible",children:o.children},l),v=hn(v,l,a,null),v.flags|=2,o.return=t,v.return=t,o.sibling=v,t.child=o,Tn(t,e.child,null,a),o=t.child,o.memoizedState=eu(a),o.childLanes=tu(e,m,a),t.memoizedState=Il,t=oi(null,o));else if(La(t),_u(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var C=m.dgst;m=C,o=Error(s(419)),o.stack="",o.digest=m,Xo({value:o,source:null,stack:null}),t=nu(e,t,a)}else if(Xe||Wn(e,t,a,!1),m=(a&e.childLanes)!==0,Xe||m){if(m=Ne,m!==null&&(o=Rd(m,a),o!==0&&o!==x.retryLane))throw x.retryLane=o,fn(e,o),Tt(m,e,o),Wl;Bu(v)||Ls(),t=nu(e,t,a)}else Bu(v)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,we=Pt(v.nextSibling),at=t,Se=!0,ja=null,Ut=!1,e!==null&&Nm(t,e),t=au(t,o.children),t.flags|=4096);return t}return l?(Ua(),v=o.fallback,l=t.mode,x=e.child,C=x.sibling,o=ua(x,{mode:"hidden",children:o.children}),o.subtreeFlags=x.subtreeFlags&65011712,C!==null?v=ua(C,v):(v=hn(v,l,a,null),v.flags|=2),v.return=t,o.return=t,o.sibling=v,t.child=o,oi(null,o),o=t.child,v=e.child.memoizedState,v===null?v=eu(a):(l=v.cachePool,l!==null?(x=ke._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=Bm(),v={baseLanes:v.baseLanes|a,cachePool:l}),o.memoizedState=v,o.childLanes=tu(e,m,a),t.memoizedState=Il,oi(e.child,o)):(La(t),a=e.child,e=a.sibling,a=ua(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function au(e,t){return t=qs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function qs(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function nu(e,t,a){return Tn(t,e.child,null,a),e=au(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ff(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),yl(e.return,t,a)}function ou(e,t,a,o,l,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:l,treeForkCount:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=a,m.tailMode=l,m.treeForkCount=u)}function Wf(e,t,a){var o=t.pendingProps,l=o.revealOrder,u=o.tail;o=o.children;var m=Qe.current,v=(m&2)!==0;if(v?(m=m&1|2,t.flags|=128):m&=1,J(Qe,m),ot(e,t,o,a),o=Se?Yo:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ff(e,a,t);else if(e.tag===19)Ff(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&vs(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),ou(t,!1,l,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&vs(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}ou(t,!0,a,null,u,o);break;case"together":ou(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function pa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Wn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=ua(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ua(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function iu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&us(e)))}function Bb(e,t,a){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),Ra(t,ke,e.memoizedState.cache),pn();break;case 27:case 5:Ma(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:Ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Nl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(La(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Kf(e,t,a):(La(t),e=pa(e,t,a),e!==null?e.sibling:null);La(t);break;case 19:var l=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Wn(e,t,a,!1),o=(a&t.childLanes)!==0),l){if(o)return Wf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(Qe,Qe.current),o)break;return null;case 22:return t.lanes=0,Gf(e,t,a,t.pendingProps);case 24:Ra(t,ke,e.memoizedState.cache)}return pa(e,t,a)}function $f(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!iu(e,a)&&(t.flags&128)===0)return Xe=!1,Bb(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,Se&&(t.flags&1048576)!==0&&qm(t,Yo,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=bn(t.elementType),t.type=e,typeof e=="function")cl(e)?(o=En(e,o),t.tag=1,t=Jf(null,t,e,o,a)):(t.tag=0,t=$l(null,t,e,o,a));else{if(e!=null){var l=e.$$typeof;if(l===Z){t.tag=11,t=Hf(null,t,e,o,a);break e}else if(l===F){t.tag=14,t=Pf(null,t,e,o,a);break e}}throw t=rt(e)||e,Error(s(306,t,""))}}return t;case 0:return $l(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,l=En(o,t.pendingProps),Jf(e,t,o,l,a);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(s(387));o=t.pendingProps;var u=t.memoizedState;l=u.element,Dl(e,t),Io(t,o,null,a);var m=t.memoizedState;if(o=m.cache,Ra(t,ke,o),o!==u.cache&&bl(t,[ke],a,!0),$o(),o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Zf(e,t,o,a);break e}else if(o!==l){l=Bt(Error(s(424)),t),Xo(l),t=Zf(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=Pt(e.firstChild),at=t,Se=!0,ja=null,Ut=!0,a=Qm(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(pn(),o===l){t=pa(e,t,a);break e}ot(e,t,o,a)}t=t.child}return t;case 26:return zs(e,t),e===null?(a=up(t.type,null,t.pendingProps,null))?t.memoizedState=a:Se||(a=t.type,e=t.pendingProps,o=Ys(re.current).createElement(a),o[tt]=t,o[pt]=e,it(o,a,e),Ie(o),t.stateNode=o):t.memoizedState=up(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ma(t),e===null&&Se&&(o=t.stateNode=sp(t.type,t.pendingProps,re.current),at=t,Ut=!0,l=we,Ja(t.type)?(Lu=l,we=Pt(o.firstChild)):we=l),ot(e,t,t.pendingProps.children,a),zs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((l=o=we)&&(o=mS(o,t.type,t.pendingProps,Ut),o!==null?(t.stateNode=o,at=t,we=Pt(o.firstChild),Ut=!1,l=!0):l=!1),l||wa(t)),Ma(t),l=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,o=u.children,wu(l,u)?o=null:m!==null&&wu(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=jl(e,t,Cb,null,null,a),bi._currentValue=l),zs(e,t),ot(e,t,o,a),t.child;case 6:return e===null&&Se&&((e=a=we)&&(a=fS(a,t.pendingProps,Ut),a!==null?(t.stateNode=a,at=t,we=null,e=!0):e=!1),e||wa(t)),null;case 13:return Kf(e,t,a);case 4:return $e(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Tn(t,null,o,a):ot(e,t,o,a),t.child;case 11:return Hf(e,t,t.type,t.pendingProps,a);case 7:return ot(e,t,t.pendingProps,a),t.child;case 8:return ot(e,t,t.pendingProps.children,a),t.child;case 12:return ot(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Ra(t,t.type,o.value),ot(e,t,o.children,a),t.child;case 9:return l=t.type._context,o=t.pendingProps.children,vn(t),l=nt(l),o=o(l),t.flags|=1,ot(e,t,o,a),t.child;case 14:return Pf(e,t,t.type,t.pendingProps,a);case 15:return Qf(e,t,t.type,t.pendingProps,a);case 19:return Wf(e,t,a);case 31:return Vb(e,t,a);case 22:return Gf(e,t,a,t.pendingProps);case 24:return vn(t),o=nt(ke),e===null?(l=xl(),l===null&&(l=Ne,u=Sl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),t.memoizedState={parent:o,cache:l},Al(t),Ra(t,ke,l)):((e.lanes&a)!==0&&(Dl(e,t),Io(t,null,null,a),$o()),l=e.memoizedState,u=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ra(t,ke,o)):(o=u.cache,Ra(t,ke,o),o!==l.cache&&bl(t,[ke],a,!0))),ot(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function ga(e){e.flags|=4}function su(e,t,a,o,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Dh())e.flags|=8192;else throw Sn=fs,El}else e.flags&=-16777217}function If(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hp(t))if(Dh())e.flags|=8192;else throw Sn=fs,El}function Ns(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Od():536870912,e.lanes|=t,uo|=t)}function ii(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function _b(e,t,a){var o=t.pendingProps;switch(hl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),ma(ke),fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fn(t)?ga(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gl())),Re(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(ga(t),u!==null?(Re(t),If(t,u)):(Re(t),su(t,l,null,o,a))):u?u!==e.memoizedState?(ga(t),Re(t),If(t,u)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&ga(t),Re(t),su(t,l,e,o,a)),null;case 27:if(ia(t),a=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ga(t);else{if(!o){if(t.stateNode===null)throw Error(s(166));return Re(t),null}e=K.current,Fn(t)?Om(t):(e=sp(l,o,a),t.stateNode=e,ga(t))}return Re(t),null;case 5:if(ia(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ga(t);else{if(!o){if(t.stateNode===null)throw Error(s(166));return Re(t),null}if(u=K.current,Fn(t))Om(t);else{var m=Ys(re.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?m.createElement("select",{is:o.is}):m.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?m.createElement(l,{is:o.is}):m.createElement(l)}}u[tt]=t,u[pt]=o;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=u;e:switch(it(u,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ga(t)}}return Re(t),su(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&ga(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(s(166));if(e=re.current,Fn(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,l=at,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}e[tt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Kh(e.nodeValue,a)),e||wa(t,!0)}else e=Ys(e).createTextNode(o),e[tt]=t,t.stateNode=e}return Re(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Fn(t),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[tt]=t}else pn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else a=gl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Re(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Fn(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[tt]=t}else pn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),l=!1}else l=gl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ns(t,t.updateQueue),Re(t),null);case 4:return fe(),e===null&&zu(t.stateNode.containerInfo),Re(t),null;case 10:return ma(t.type),Re(t),null;case 19:if(B(Qe),o=t.memoizedState,o===null)return Re(t),null;if(l=(t.flags&128)!==0,u=o.rendering,u===null)if(l)ii(o,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=vs(e),u!==null){for(t.flags|=128,ii(o,!1),e=u.updateQueue,t.updateQueue=e,Ns(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Mm(a,e),a=a.sibling;return J(Qe,Qe.current&1|2),Se&&ca(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&xt()>Vs&&(t.flags|=128,l=!0,ii(o,!1),t.lanes=4194304)}else{if(!l)if(e=vs(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ns(t,e),ii(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Se)return Re(t),null}else 2*xt()-o.renderingStartTime>Vs&&a!==536870912&&(t.flags|=128,l=!0,ii(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=xt(),e.sibling=null,a=Qe.current,J(Qe,l?a&1|2:a&1),Se&&ca(t,o.treeForkCount),e):(Re(t),null);case 22:case 23:return zt(t),ql(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),a=t.updateQueue,a!==null&&Ns(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&B(yn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ma(ke),Re(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Lb(e,t){switch(hl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ma(ke),fe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ia(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(s(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Qe),null;case 4:return fe(),null;case 10:return ma(t.type),null;case 22:case 23:return zt(t),ql(),e!==null&&B(yn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ma(ke),null;case 25:return null;default:return null}}function eh(e,t){switch(hl(t),t.tag){case 3:ma(ke),fe();break;case 26:case 27:case 5:ia(t);break;case 4:fe();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:B(Qe);break;case 10:ma(t.type);break;case 22:case 23:zt(t),ql(),e!==null&&B(yn);break;case 24:ma(ke)}}function si(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var l=o.next;a=l;do{if((a.tag&e)===e){o=void 0;var u=a.create,m=a.inst;o=u(),m.destroy=o}a=a.next}while(a!==l)}}catch(v){Me(t,t.return,v)}}function Ha(e,t,a){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&e)===e){var m=o.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,l=t;var x=a,C=v;try{C()}catch(w){Me(l,x,w)}}}o=o.next}while(o!==u)}}catch(w){Me(t,t.return,w)}}function th(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{km(t,a)}catch(o){Me(e,e.return,o)}}}function ah(e,t,a){a.props=En(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Me(e,t,o)}}function ri(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(l){Me(e,t,l)}}function ea(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(l){Me(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Me(e,t,l)}else a.current=null}function nh(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(l){Me(e,e.return,l)}}function ru(e,t,a){try{var o=e.stateNode;sS(o,e.type,a,t),o[pt]=t}catch(l){Me(e,e.return,l)}}function oh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uu(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ra));else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(uu(e,t,a),e=e.sibling;e!==null;)uu(e,t,a),e=e.sibling}function Os(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Os(e,t,a),e=e.sibling;e!==null;)Os(e,t,a),e=e.sibling}function ih(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);it(t,o,a),t[tt]=e,t[pt]=a}catch(u){Me(e,e.return,u)}}var va=!1,Je=!1,cu=!1,sh=typeof WeakSet=="function"?WeakSet:Set,et=null;function Ub(e,t){if(e=e.containerInfo,Ou=$s,e=vm(e),nl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var m=0,v=-1,x=-1,C=0,w=0,V=e,q=null;t:for(;;){for(var N;V!==a||l!==0&&V.nodeType!==3||(v=m+l),V!==u||o!==0&&V.nodeType!==3||(x=m+o),V.nodeType===3&&(m+=V.nodeValue.length),(N=V.firstChild)!==null;)q=V,V=N;for(;;){if(V===e)break t;if(q===a&&++C===l&&(v=m),q===u&&++w===o&&(x=m),(N=V.nextSibling)!==null)break;V=q,q=V.parentNode}V=N}a=v===-1||x===-1?null:{start:v,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(ju={focusedElem:e,selectionRange:a},$s=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,l=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var $=En(a.type,l);e=o.getSnapshotBeforeUpdate($,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(le){Me(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function rh(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),o&4&&si(5,a);break;case 1:if(ba(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){Me(a,a.return,m)}else{var l=En(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Me(a,a.return,m)}}o&64&&th(a),o&512&&ri(a,a.return);break;case 3:if(ba(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{km(e,t)}catch(m){Me(a,a.return,m)}}break;case 27:t===null&&o&4&&ih(a);case 26:case 5:ba(e,a),t===null&&o&4&&nh(a),o&512&&ri(a,a.return);break;case 12:ba(e,a);break;case 31:ba(e,a),o&4&&ch(e,a);break;case 13:ba(e,a),o&4&&dh(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Zb.bind(null,a),hS(e,a))));break;case 22:if(o=a.memoizedState!==null||va,!o){t=t!==null&&t.memoizedState!==null||Je,l=va;var u=Je;va=o,(Je=t)&&!u?Sa(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),va=l,Je=u}break;case 30:break;default:ba(e,a)}}function lh(e){var t=e.alternate;t!==null&&(e.alternate=null,lh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Hr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,vt=!1;function ya(e,t,a){for(a=a.child;a!==null;)uh(e,t,a),a=a.sibling}function uh(e,t,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Oo,a)}catch{}switch(a.tag){case 26:Je||ea(a,t),ya(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||ea(a,t);var o=Be,l=vt;Ja(a.type)&&(Be=a.stateNode,vt=!1),ya(e,t,a),gi(a.stateNode),Be=o,vt=l;break;case 5:Je||ea(a,t);case 6:if(o=Be,l=vt,Be=null,ya(e,t,a),Be=o,vt=l,Be!==null)if(vt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(u){Me(a,t,u)}else try{Be.removeChild(a.stateNode)}catch(u){Me(a,t,u)}break;case 18:Be!==null&&(vt?(e=Be,tp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yo(e)):tp(Be,a.stateNode));break;case 4:o=Be,l=vt,Be=a.stateNode.containerInfo,vt=!0,ya(e,t,a),Be=o,vt=l;break;case 0:case 11:case 14:case 15:Ha(2,a,t),Je||Ha(4,a,t),ya(e,t,a);break;case 1:Je||(ea(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ah(a,t,o)),ya(e,t,a);break;case 21:ya(e,t,a);break;case 22:Je=(o=Je)||a.memoizedState!==null,ya(e,t,a),Je=o;break;default:ya(e,t,a)}}function ch(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yo(e)}catch(a){Me(t,t.return,a)}}}function dh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yo(e)}catch(a){Me(t,t.return,a)}}function Hb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sh),t;default:throw Error(s(435,e.tag))}}function js(e,t){var a=Hb(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var l=Kb.bind(null,e,o);o.then(l,l)}})}function yt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var l=a[o],u=e,m=t,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(Ja(v.type)){Be=v.stateNode,vt=!1;break e}break;case 5:Be=v.stateNode,vt=!1;break e;case 3:case 4:Be=v.stateNode.containerInfo,vt=!0;break e}v=v.return}if(Be===null)throw Error(s(160));uh(u,m,l),Be=null,vt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)mh(t,e),t=t.sibling}var Xt=null;function mh(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(t,e),bt(e),o&4&&(Ha(3,e,e.return),si(3,e),Ha(5,e,e.return));break;case 1:yt(t,e),bt(e),o&512&&(Je||a===null||ea(a,a.return)),o&64&&va&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var l=Xt;if(yt(t,e),bt(e),o&512&&(Je||a===null||ea(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[Ro]||u[tt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),it(u,o,a),u[tt]=e,Ie(u),o=u;break e;case"link":var m=mp("link","href",l).get(o+(a.href||""));if(m){for(var v=0;v<m.length;v++)if(u=m[v],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(v,1);break t}}u=l.createElement(o),it(u,o,a),l.head.appendChild(u);break;case"meta":if(m=mp("meta","content",l).get(o+(a.content||""))){for(v=0;v<m.length;v++)if(u=m[v],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(v,1);break t}}u=l.createElement(o),it(u,o,a),l.head.appendChild(u);break;default:throw Error(s(468,o))}u[tt]=e,Ie(u),o=u}e.stateNode=o}else fp(l,e.type,e.stateNode);else e.stateNode=dp(l,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?fp(l,e.type,e.stateNode):dp(l,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ru(e,e.memoizedProps,a.memoizedProps)}break;case 27:yt(t,e),bt(e),o&512&&(Je||a===null||ea(a,a.return)),a!==null&&o&4&&ru(e,e.memoizedProps,a.memoizedProps);break;case 5:if(yt(t,e),bt(e),o&512&&(Je||a===null||ea(a,a.return)),e.flags&32){l=e.stateNode;try{Hn(l,"")}catch($){Me(e,e.return,$)}}o&4&&e.stateNode!=null&&(l=e.memoizedProps,ru(e,l,a!==null?a.memoizedProps:l)),o&1024&&(cu=!0);break;case 6:if(yt(t,e),bt(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch($){Me(e,e.return,$)}}break;case 3:if(Zs=null,l=Xt,Xt=Xs(t.containerInfo),yt(t,e),Xt=l,bt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch($){Me(e,e.return,$)}cu&&(cu=!1,fh(e));break;case 4:o=Xt,Xt=Xs(e.stateNode.containerInfo),yt(t,e),bt(e),Xt=o;break;case 12:yt(t,e),bt(e);break;case 31:yt(t,e),bt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,js(e,o)));break;case 13:yt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rs=xt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,js(e,o)));break;case 22:l=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,C=va,w=Je;if(va=C||l,Je=w||x,yt(t,e),Je=w,va=C,bt(e),o&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||x||va||Je||An(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(u=x.stateNode,l)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=x.stateNode;var V=x.memoizedProps.style,q=V!=null&&V.hasOwnProperty("display")?V.display:null;v.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch($){Me(x,x.return,$)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch($){Me(x,x.return,$)}}}else if(t.tag===18){if(a===null){x=t;try{var N=x.stateNode;l?ap(N,!0):ap(x.stateNode,!1)}catch($){Me(x,x.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,js(e,a))));break;case 19:yt(t,e),bt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,js(e,o)));break;case 30:break;case 21:break;default:yt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(oh(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,u=lu(e);Os(e,u,l);break;case 5:var m=a.stateNode;a.flags&32&&(Hn(m,""),a.flags&=-33);var v=lu(e);Os(e,v,m);break;case 3:case 4:var x=a.stateNode.containerInfo,C=lu(e);uu(e,C,x);break;default:throw Error(s(161))}}catch(w){Me(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)rh(e,t.alternate,t),t=t.sibling}function An(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ha(4,t,t.return),An(t);break;case 1:ea(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ah(t,t.return,a),An(t);break;case 27:gi(t.stateNode);case 26:case 5:ea(t,t.return),An(t);break;case 22:t.memoizedState===null&&An(t);break;case 30:An(t);break;default:An(t)}e=e.sibling}}function Sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,l=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:Sa(l,u,a),si(4,u);break;case 1:if(Sa(l,u,a),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){Me(o,o.return,C)}if(o=u,l=o.updateQueue,l!==null){var v=o.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)Gm(x[l],v)}catch(C){Me(o,o.return,C)}}a&&m&64&&th(u),ri(u,u.return);break;case 27:ih(u);case 26:case 5:Sa(l,u,a),a&&o===null&&m&4&&nh(u),ri(u,u.return);break;case 12:Sa(l,u,a);break;case 31:Sa(l,u,a),a&&m&4&&ch(l,u);break;case 13:Sa(l,u,a),a&&m&4&&dh(l,u);break;case 22:u.memoizedState===null&&Sa(l,u,a),ri(u,u.return);break;case 30:break;default:Sa(l,u,a)}t=t.sibling}}function du(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jo(a))}function mu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e))}function Jt(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hh(e,t,a,o),t=t.sibling}function hh(e,t,a,o){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,a,o),l&2048&&si(9,t);break;case 1:Jt(e,t,a,o);break;case 3:Jt(e,t,a,o),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e)));break;case 12:if(l&2048){Jt(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,v=u.onPostCommit;typeof v=="function"&&v(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Me(t,t.return,x)}}else Jt(e,t,a,o);break;case 31:Jt(e,t,a,o);break;case 13:Jt(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?Jt(e,t,a,o):li(e,t):u._visibility&2?Jt(e,t,a,o):(u._visibility|=2,so(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),l&2048&&du(m,t);break;case 24:Jt(e,t,a,o),l&2048&&mu(t.alternate,t);break;default:Jt(e,t,a,o)}}function so(e,t,a,o,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,m=t,v=a,x=o,C=m.flags;switch(m.tag){case 0:case 11:case 15:so(u,m,v,x,l),si(8,m);break;case 23:break;case 22:var w=m.stateNode;m.memoizedState!==null?w._visibility&2?so(u,m,v,x,l):li(u,m):(w._visibility|=2,so(u,m,v,x,l)),l&&C&2048&&du(m.alternate,m);break;case 24:so(u,m,v,x,l),l&&C&2048&&mu(m.alternate,m);break;default:so(u,m,v,x,l)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,l=o.flags;switch(o.tag){case 22:li(a,o),l&2048&&du(o.alternate,o);break;case 24:li(a,o),l&2048&&mu(o.alternate,o);break;default:li(a,o)}t=t.sibling}}var ui=8192;function ro(e,t,a){if(e.subtreeFlags&ui)for(e=e.child;e!==null;)ph(e,t,a),e=e.sibling}function ph(e,t,a){switch(e.tag){case 26:ro(e,t,a),e.flags&ui&&e.memoizedState!==null&&MS(a,Xt,e.memoizedState,e.memoizedProps);break;case 5:ro(e,t,a);break;case 3:case 4:var o=Xt;Xt=Xs(e.stateNode.containerInfo),ro(e,t,a),Xt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ui,ui=16777216,ro(e,t,a),ui=o):ro(e,t,a));break;default:ro(e,t,a)}}function gh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];et=o,yh(o,e)}gh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vh(e),e=e.sibling}function vh(e){switch(e.tag){case 0:case 11:case 15:ci(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:ci(e);break;case 12:ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ws(e)):ci(e);break;default:ci(e)}}function ws(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];et=o,yh(o,e)}gh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ha(8,t,t.return),ws(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ws(t));break;default:ws(t)}e=e.sibling}}function yh(e,t){for(;et!==null;){var a=et;switch(a.tag){case 0:case 11:case 15:Ha(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Jo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,et=o;else e:for(a=e;et!==null;){o=et;var l=o.sibling,u=o.return;if(lh(o),o===a){et=null;break e}if(l!==null){l.return=u,et=l;break e}et=u}}}var Pb={getCacheForType:function(e){var t=nt(ke),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return nt(ke).controller.signal}},Qb=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Ne=null,pe=null,ve=0,De=0,qt=null,Pa=!1,lo=!1,fu=!1,Ta=0,Ue=0,Qa=0,Dn=0,hu=0,Nt=0,uo=0,di=null,St=null,pu=!1,Rs=0,bh=0,Vs=1/0,Bs=null,Ga=null,Ke=0,ka=null,co=null,xa=0,gu=0,vu=null,Sh=null,mi=0,yu=null;function Ot(){return(Ee&2)!==0&&ve!==0?ve&-ve:j.T!==null?Au():Vd()}function Th(){if(Nt===0)if((ve&536870912)===0||Se){var e=ki;ki<<=1,(ki&3932160)===0&&(ki=262144),Nt=e}else Nt=536870912;return e=Ct.current,e!==null&&(e.flags|=32),Nt}function Tt(e,t,a){(e===Ne&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(mo(e,0),Ya(e,ve,Nt,!1)),wo(e,a),((Ee&2)===0||e!==Ne)&&(e===Ne&&((Ee&2)===0&&(Dn|=a),Ue===4&&Ya(e,ve,Nt,!1)),ta(e))}function xh(e,t,a){if((Ee&6)!==0)throw Error(s(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||jo(e,t),l=o?Yb(e,t):Su(e,t,!0),u=o;do{if(l===0){lo&&!o&&Ya(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!Gb(a)){l=Su(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var v=e;l=di;var x=v.current.memoizedState.isDehydrated;if(x&&(mo(v,m).flags|=256),m=Su(v,m,!1),m!==2){if(fu&&!x){v.errorRecoveryDisabledLanes|=u,Dn|=u,l=4;break e}u=St,St=l,u!==null&&(St===null?St=u:St.push.apply(St,u))}l=m}if(u=!1,l!==2)continue}}if(l===1){mo(e,0),Ya(e,t,0,!0);break}e:{switch(o=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Ya(o,t,Nt,!Pa);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Rs+300-xt(),10<l)){if(Ya(o,t,Nt,!Pa),Xi(o,0,!0)!==0)break e;xa=t,o.timeoutHandle=Ih(Eh.bind(null,o,a,St,Bs,pu,t,Nt,Dn,uo,Pa,u,"Throttled",-0,0),l);break e}Eh(o,a,St,Bs,pu,t,Nt,Dn,uo,Pa,u,null,-0,0)}}break}while(!0);ta(e)}function Eh(e,t,a,o,l,u,m,v,x,C,w,V,q,N){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},ph(t,u,V);var $=(u&62914560)===u?Rs-xt():(u&4194048)===u?bh-xt():0;if($=CS(V,$),$!==null){xa=u,e.cancelPendingCommit=$(Oh.bind(null,e,t,u,a,o,l,m,v,x,w,V,null,q,N)),Ya(e,u,m,!C);return}}Oh(e,t,u,a,o,l,m,v,x)}function Gb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var l=a[o],u=l.getSnapshot;l=l.value;try{if(!Dt(u(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ya(e,t,a,o){t&=~hu,t&=~Dn,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var u=31-At(l),m=1<<u;o[u]=-1,l&=~m}a!==0&&jd(e,a,t)}function _s(){return(Ee&6)===0?(fi(0),!1):!0}function bu(){if(pe!==null){if(De===0)var e=pe.return;else e=pe,da=gn=null,Vl(e),to=null,Ko=0,e=pe;for(;e!==null;)eh(e.alternate,e),e=e.return;pe=null}}function mo(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,uS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xa=0,bu(),Ne=e,pe=a=ua(e.current,null),ve=t,De=0,qt=null,Pa=!1,lo=jo(e,t),fu=!1,uo=Nt=hu=Dn=Qa=Ue=0,St=di=null,pu=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var l=31-At(o),u=1<<l;t|=e[l],o&=~u}return Ta=t,os(),a}function Ah(e,t){ce=null,j.H=ni,t===eo||t===ms?(t=Um(),De=3):t===El?(t=Um(),De=4):De=t===Wl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qt=t,pe===null&&(Ue=1,Ms(e,Bt(t,e.current)))}function Dh(){var e=Ct.current;return e===null?!0:(ve&4194048)===ve?Ht===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Ht:!1}function Mh(){var e=j.H;return j.H=ni,e===null?ni:e}function Ch(){var e=j.A;return j.A=Pb,e}function Ls(){Ue=4,Pa||(ve&4194048)!==ve&&Ct.current!==null||(lo=!0),(Qa&134217727)===0&&(Dn&134217727)===0||Ne===null||Ya(Ne,ve,Nt,!1)}function Su(e,t,a){var o=Ee;Ee|=2;var l=Mh(),u=Ch();(Ne!==e||ve!==t)&&(Bs=null,mo(e,t)),t=!1;var m=Ue;e:do try{if(De!==0&&pe!==null){var v=pe,x=qt;switch(De){case 8:bu(),m=6;break e;case 3:case 2:case 9:case 6:Ct.current===null&&(t=!0);var C=De;if(De=0,qt=null,fo(e,v,x,C),a&&lo){m=0;break e}break;default:C=De,De=0,qt=null,fo(e,v,x,C)}}kb(),m=Ue;break}catch(w){Ah(e,w)}while(!0);return t&&e.shellSuspendCounter++,da=gn=null,Ee=o,j.H=l,j.A=u,pe===null&&(Ne=null,ve=0,os()),m}function kb(){for(;pe!==null;)zh(pe)}function Yb(e,t){var a=Ee;Ee|=2;var o=Mh(),l=Ch();Ne!==e||ve!==t?(Bs=null,Vs=xt()+500,mo(e,t)):lo=jo(e,t);e:do try{if(De!==0&&pe!==null){t=pe;var u=qt;t:switch(De){case 1:De=0,qt=null,fo(e,t,u,1);break;case 2:case 9:if(_m(u)){De=0,qt=null,qh(t);break}t=function(){De!==2&&De!==9||Ne!==e||(De=7),ta(e)},u.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:_m(u)?(De=0,qt=null,qh(t)):(De=0,qt=null,fo(e,t,u,7));break;case 5:var m=null;switch(pe.tag){case 26:m=pe.memoizedState;case 5:case 27:var v=pe;if(m?hp(m):v.stateNode.complete){De=0,qt=null;var x=v.sibling;if(x!==null)pe=x;else{var C=v.return;C!==null?(pe=C,Us(C)):pe=null}break t}}De=0,qt=null,fo(e,t,u,5);break;case 6:De=0,qt=null,fo(e,t,u,6);break;case 8:bu(),Ue=6;break e;default:throw Error(s(462))}}Xb();break}catch(w){Ah(e,w)}while(!0);return da=gn=null,j.H=o,j.A=l,Ee=a,pe!==null?0:(Ne=null,ve=0,os(),Ue)}function Xb(){for(;pe!==null&&!p0();)zh(pe)}function zh(e){var t=$f(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,t===null?Us(e):pe=t}function qh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Xf(a,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=Xf(a,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:Vl(t);default:eh(a,t),t=pe=Mm(t,Ta),t=$f(a,t,Ta)}e.memoizedProps=e.pendingProps,t===null?Us(e):pe=t}function fo(e,t,a,o){da=gn=null,Vl(t),to=null,Ko=0;var l=t.return;try{if(Rb(e,l,t,a,ve)){Ue=1,Ms(e,Bt(a,e.current)),pe=null;return}}catch(u){if(l!==null)throw pe=l,u;Ue=1,Ms(e,Bt(a,e.current)),pe=null;return}t.flags&32768?(Se||o===1?e=!0:lo||(ve&536870912)!==0?e=!1:(Pa=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ct.current,o!==null&&o.tag===13&&(o.flags|=16384))),Nh(t,e)):Us(t)}function Us(e){var t=e;do{if((t.flags&32768)!==0){Nh(t,Pa);return}e=t.return;var a=_b(t.alternate,t,Ta);if(a!==null){pe=a;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);Ue===0&&(Ue=5)}function Nh(e,t){do{var a=Lb(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Ue=6,pe=null}function Oh(e,t,a,o,l,u,m,v,x){e.cancelPendingCommit=null;do Hs();while(Ke!==0);if((Ee&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=ll,D0(e,a,u,m,v,x),e===Ne&&(pe=Ne=null,ve=0),co=t,ka=e,xa=a,gu=u,vu=l,Sh=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fb(Qi,function(){return Bh(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=j.T,j.T=null,l=P.p,P.p=2,m=Ee,Ee|=4;try{Ub(e,t,a)}finally{Ee=m,P.p=l,j.T=o}}Ke=1,jh(),wh(),Rh()}}function jh(){if(Ke===1){Ke=0;var e=ka,t=co,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var o=P.p;P.p=2;var l=Ee;Ee|=4;try{mh(t,e);var u=ju,m=vm(e.containerInfo),v=u.focusedElem,x=u.selectionRange;if(m!==v&&v&&v.ownerDocument&&gm(v.ownerDocument.documentElement,v)){if(x!==null&&nl(v)){var C=x.start,w=x.end;if(w===void 0&&(w=C),"selectionStart"in v)v.selectionStart=C,v.selectionEnd=Math.min(w,v.value.length);else{var V=v.ownerDocument||document,q=V&&V.defaultView||window;if(q.getSelection){var N=q.getSelection(),$=v.textContent.length,le=Math.min(x.start,$),qe=x.end===void 0?le:Math.min(x.end,$);!N.extend&&le>qe&&(m=qe,qe=le,le=m);var D=pm(v,le),E=pm(v,qe);if(D&&E&&(N.rangeCount!==1||N.anchorNode!==D.node||N.anchorOffset!==D.offset||N.focusNode!==E.node||N.focusOffset!==E.offset)){var M=V.createRange();M.setStart(D.node,D.offset),N.removeAllRanges(),le>qe?(N.addRange(M),N.extend(E.node,E.offset)):(M.setEnd(E.node,E.offset),N.addRange(M))}}}}for(V=[],N=v;N=N.parentNode;)N.nodeType===1&&V.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<V.length;v++){var R=V[v];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}$s=!!Ou,ju=Ou=null}finally{Ee=l,P.p=o,j.T=a}}e.current=t,Ke=2}}function wh(){if(Ke===2){Ke=0;var e=ka,t=co,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var o=P.p;P.p=2;var l=Ee;Ee|=4;try{rh(e,t.alternate,t)}finally{Ee=l,P.p=o,j.T=a}}Ke=3}}function Rh(){if(Ke===4||Ke===3){Ke=0,g0();var e=ka,t=co,a=xa,o=Sh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,co=ka=null,Vh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ga=null),Lr(a),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Oo,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=j.T,l=P.p,P.p=2,j.T=null;try{for(var u=e.onRecoverableError,m=0;m<o.length;m++){var v=o[m];u(v.value,{componentStack:v.stack})}}finally{j.T=t,P.p=l}}(xa&3)!==0&&Hs(),ta(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===yu?mi++:(mi=0,yu=e):mi=0,fi(0)}}function Vh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jo(t)))}function Hs(){return jh(),wh(),Rh(),Bh()}function Bh(){if(Ke!==5)return!1;var e=ka,t=gu;gu=0;var a=Lr(xa),o=j.T,l=P.p;try{P.p=32>a?32:a,j.T=null,a=vu,vu=null;var u=ka,m=xa;if(Ke=0,co=ka=null,xa=0,(Ee&6)!==0)throw Error(s(331));var v=Ee;if(Ee|=4,vh(u.current),hh(u,u.current,m,a),Ee=v,fi(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Oo,u)}catch{}return!0}finally{P.p=l,j.T=o,Vh(e,t)}}function _h(e,t,a){t=Bt(a,t),t=Fl(e.stateNode,t,2),e=_a(e,t,2),e!==null&&(wo(e,2),ta(e))}function Me(e,t,a){if(e.tag===3)_h(e,e,a);else for(;t!==null;){if(t.tag===3){_h(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){e=Bt(a,e),a=Lf(2),o=_a(t,a,2),o!==null&&(Uf(a,o,t,e),wo(o,2),ta(o));break}}t=t.return}}function Tu(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Qb;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(a)||(fu=!0,l.add(a),e=Jb.bind(null,e,t,a),t.then(e,e))}function Jb(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ne===e&&(ve&a)===a&&(Ue===4||Ue===3&&(ve&62914560)===ve&&300>xt()-Rs?(Ee&2)===0&&mo(e,0):hu|=a,uo===ve&&(uo=0)),ta(e)}function Lh(e,t){t===0&&(t=Od()),e=fn(e,t),e!==null&&(wo(e,t),ta(e))}function Zb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Lh(e,a)}function Kb(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(t),Lh(e,a)}function Fb(e,t){return Rr(e,t)}var Ps=null,ho=null,xu=!1,Qs=!1,Eu=!1,Xa=0;function ta(e){e!==ho&&e.next===null&&(ho===null?Ps=ho=e:ho=ho.next=e),Qs=!0,xu||(xu=!0,$b())}function fi(e,t){if(!Eu&&Qs){Eu=!0;do for(var a=!1,o=Ps;o!==null;){if(e!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var m=o.suspendedLanes,v=o.pingedLanes;u=(1<<31-At(42|e)+1)-1,u&=l&~(m&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Qh(o,u))}else u=ve,u=Xi(o,o===Ne?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||jo(o,u)||(a=!0,Qh(o,u));o=o.next}while(a);Eu=!1}}function Wb(){Uh()}function Uh(){Qs=xu=!1;var e=0;Xa!==0&&lS()&&(e=Xa);for(var t=xt(),a=null,o=Ps;o!==null;){var l=o.next,u=Hh(o,t);u===0?(o.next=null,a===null?Ps=l:a.next=l,l===null&&(ho=a)):(a=o,(e!==0||(u&3)!==0)&&(Qs=!0)),o=l}Ke!==0&&Ke!==5||fi(e),Xa!==0&&(Xa=0)}function Hh(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-At(u),v=1<<m,x=l[m];x===-1?((v&a)===0||(v&o)!==0)&&(l[m]=A0(v,t)):x<=t&&(e.expiredLanes|=v),u&=~v}if(t=Ne,a=ve,a=Xi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Vr(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||jo(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Vr(o),Lr(a)){case 2:case 8:a=qd;break;case 32:a=Qi;break;case 268435456:a=Nd;break;default:a=Qi}return o=Ph.bind(null,e),a=Rr(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Vr(o),e.callbackPriority=2,e.callbackNode=null,2}function Ph(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hs()&&e.callbackNode!==a)return null;var o=ve;return o=Xi(e,e===Ne?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(xh(e,o,t),Hh(e,xt()),e.callbackNode!=null&&e.callbackNode===a?Ph.bind(null,e):null)}function Qh(e,t){if(Hs())return null;xh(e,t,!0)}function $b(){cS(function(){(Ee&6)!==0?Rr(zd,Wb):Uh()})}function Au(){if(Xa===0){var e=$n;e===0&&(e=Gi,Gi<<=1,(Gi&261888)===0&&(Gi=256)),Xa=e}return Xa}function Gh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fi(""+e)}function kh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Ib(e,t,a,o,l){if(t==="submit"&&a&&a.stateNode===l){var u=Gh((l[pt]||null).action),m=o.submitter;m&&(t=(t=m[pt]||null)?Gh(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var v=new es("action","action",null,o,l);e.push({event:v,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var x=m?kh(l,m):new FormData(l);kl(a,{pending:!0,data:x,method:l.method,action:u},null,x)}}else typeof u=="function"&&(v.preventDefault(),x=m?kh(l,m):new FormData(l),kl(a,{pending:!0,data:x,method:l.method,action:u},u,x))},currentTarget:l}]})}}for(var Du=0;Du<rl.length;Du++){var Mu=rl[Du],eS=Mu.toLowerCase(),tS=Mu[0].toUpperCase()+Mu.slice(1);Yt(eS,"on"+tS)}Yt(Sm,"onAnimationEnd"),Yt(Tm,"onAnimationIteration"),Yt(xm,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(vb,"onTransitionRun"),Yt(yb,"onTransitionStart"),Yt(bb,"onTransitionCancel"),Yt(Em,"onTransitionEnd"),Ln("onMouseEnter",["mouseout","mouseover"]),Ln("onMouseLeave",["mouseout","mouseover"]),Ln("onPointerEnter",["pointerout","pointerover"]),Ln("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hi));function Yh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var m=o.length-1;0<=m;m--){var v=o[m],x=v.instance,C=v.currentTarget;if(v=v.listener,x!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=C;try{u(l)}catch(w){ns(w)}l.currentTarget=null,u=x}else for(m=0;m<o.length;m++){if(v=o[m],x=v.instance,C=v.currentTarget,v=v.listener,x!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=C;try{u(l)}catch(w){ns(w)}l.currentTarget=null,u=x}}}}function ge(e,t){var a=t[Ur];a===void 0&&(a=t[Ur]=new Set);var o=e+"__bubble";a.has(o)||(Xh(t,e,2,!1),a.add(o))}function Cu(e,t,a){var o=0;t&&(o|=4),Xh(a,e,o,t)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function zu(e){if(!e[Gs]){e[Gs]=!0,Ld.forEach(function(a){a!=="selectionchange"&&(aS.has(a)||Cu(a,!1,e),Cu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gs]||(t[Gs]=!0,Cu("selectionchange",!1,t))}}function Xh(e,t,a,o){switch(Tp(t)){case 2:var l=NS;break;case 8:l=OS;break;default:l=Gu}a=l.bind(null,t,a,e),l=void 0,!Zr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function qu(e,t,a,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var v=o.stateNode.containerInfo;if(v===l)break;if(m===4)for(m=o.return;m!==null;){var x=m.tag;if((x===3||x===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;v!==null;){if(m=Vn(v),m===null)return;if(x=m.tag,x===5||x===6||x===26||x===27){o=u=m;continue e}v=v.parentNode}}o=o.return}Fd(function(){var C=u,w=Xr(a),V=[];e:{var q=Am.get(e);if(q!==void 0){var N=es,$=e;switch(e){case"keypress":if($i(a)===0)break e;case"keydown":case"keyup":N=K0;break;case"focusin":$="focus",N=$r;break;case"focusout":$="blur",N=$r;break;case"beforeblur":case"afterblur":N=$r;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=_0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=$0;break;case Sm:case Tm:case xm:N=H0;break;case Em:N=eb;break;case"scroll":case"scrollend":N=V0;break;case"wheel":N=ab;break;case"copy":case"cut":case"paste":N=Q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=tm;break;case"toggle":case"beforetoggle":N=ob}var le=(t&4)!==0,qe=!le&&(e==="scroll"||e==="scrollend"),D=le?q!==null?q+"Capture":null:q;le=[];for(var E=C,M;E!==null;){var R=E;if(M=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||M===null||D===null||(R=Bo(E,D),R!=null&&le.push(pi(E,R,M))),qe)break;E=E.return}0<le.length&&(q=new N(q,$,null,a,w),V.push({event:q,listeners:le}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",q&&a!==Yr&&($=a.relatedTarget||a.fromElement)&&(Vn($)||$[Rn]))break e;if((N||q)&&(q=w.window===w?w:(q=w.ownerDocument)?q.defaultView||q.parentWindow:window,N?($=a.relatedTarget||a.toElement,N=C,$=$?Vn($):null,$!==null&&(qe=f($),le=$.tag,$!==qe||le!==5&&le!==27&&le!==6)&&($=null)):(N=null,$=C),N!==$)){if(le=Id,R="onMouseLeave",D="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(le=tm,R="onPointerLeave",D="onPointerEnter",E="pointer"),qe=N==null?q:Vo(N),M=$==null?q:Vo($),q=new le(R,E+"leave",N,a,w),q.target=qe,q.relatedTarget=M,R=null,Vn(w)===C&&(le=new le(D,E+"enter",$,a,w),le.target=M,le.relatedTarget=qe,R=le),qe=R,N&&$)t:{for(le=nS,D=N,E=$,M=0,R=D;R;R=le(R))M++;R=0;for(var se=E;se;se=le(se))R++;for(;0<M-R;)D=le(D),M--;for(;0<R-M;)E=le(E),R--;for(;M--;){if(D===E||E!==null&&D===E.alternate){le=D;break t}D=le(D),E=le(E)}le=null}else le=null;N!==null&&Jh(V,q,N,le,!1),$!==null&&qe!==null&&Jh(V,qe,$,le,!0)}}e:{if(q=C?Vo(C):window,N=q.nodeName&&q.nodeName.toLowerCase(),N==="select"||N==="input"&&q.type==="file")var Te=um;else if(rm(q))if(cm)Te=hb;else{Te=mb;var ae=db}else N=q.nodeName,!N||N.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?C&&kr(C.elementType)&&(Te=um):Te=fb;if(Te&&(Te=Te(e,C))){lm(V,Te,a,w);break e}ae&&ae(e,q,C),e==="focusout"&&C&&q.type==="number"&&C.memoizedProps.value!=null&&Gr(q,"number",q.value)}switch(ae=C?Vo(C):window,e){case"focusin":(rm(ae)||ae.contentEditable==="true")&&(kn=ae,ol=C,ko=null);break;case"focusout":ko=ol=kn=null;break;case"mousedown":il=!0;break;case"contextmenu":case"mouseup":case"dragend":il=!1,ym(V,a,w);break;case"selectionchange":if(gb)break;case"keydown":case"keyup":ym(V,a,w)}var de;if(el)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Gn?im(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(am&&a.locale!=="ko"&&(Gn||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Gn&&(de=Wd()):(Na=w,Kr="value"in Na?Na.value:Na.textContent,Gn=!0)),ae=ks(C,ye),0<ae.length&&(ye=new em(ye,e,null,a,w),V.push({event:ye,listeners:ae}),de?ye.data=de:(de=sm(a),de!==null&&(ye.data=de)))),(de=sb?rb(e,a):lb(e,a))&&(ye=ks(C,"onBeforeInput"),0<ye.length&&(ae=new em("onBeforeInput","beforeinput",null,a,w),V.push({event:ae,listeners:ye}),ae.data=de)),Ib(V,e,C,a,w)}Yh(V,t)})}function pi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ks(e,t){for(var a=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Bo(e,a),l!=null&&o.unshift(pi(e,l,u)),l=Bo(e,t),l!=null&&o.push(pi(e,l,u))),e.tag===3)return o;e=e.return}return[]}function nS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jh(e,t,a,o,l){for(var u=t._reactName,m=[];a!==null&&a!==o;){var v=a,x=v.alternate,C=v.stateNode;if(v=v.tag,x!==null&&x===o)break;v!==5&&v!==26&&v!==27||C===null||(x=C,l?(C=Bo(a,u),C!=null&&m.unshift(pi(a,C,x))):l||(C=Bo(a,u),C!=null&&m.push(pi(a,C,x)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var oS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function Zh(e){return(typeof e=="string"?e:""+e).replace(oS,`
`).replace(iS,"")}function Kh(e,t){return t=Zh(t),Zh(e)===t}function ze(e,t,a,o,l,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Hn(e,""+o);break;case"className":Zi(e,"class",o);break;case"tabIndex":Zi(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Zi(e,a,o);break;case"style":Zd(e,o,u);break;case"data":if(t!=="object"){Zi(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Fi(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&ze(e,t,"name",l.name,l,null),ze(e,t,"formEncType",l.formEncType,l,null),ze(e,t,"formMethod",l.formMethod,l,null),ze(e,t,"formTarget",l.formTarget,l,null)):(ze(e,t,"encType",l.encType,l,null),ze(e,t,"method",l.method,l,null),ze(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Fi(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ra);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Fi(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ji(e,"popover",o);break;case"xlinkActuate":sa(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":sa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":sa(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":sa(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":sa(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":sa(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":sa(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":sa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":sa(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ji(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,Ji(e,a,o))}}function Nu(e,t,a,o,l,u){switch(a){case"style":Zd(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ud.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),u=e[pt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,l);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ji(e,a,o)}}}function it(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var m=a[u];if(m!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ze(e,t,u,m,a,null)}}l&&ze(e,t,"srcSet",a.srcSet,a,null),o&&ze(e,t,"src",a.src,a,null);return;case"input":ge("invalid",e);var v=u=m=l=null,x=null,C=null;for(o in a)if(a.hasOwnProperty(o)){var w=a[o];if(w!=null)switch(o){case"name":l=w;break;case"type":m=w;break;case"checked":x=w;break;case"defaultChecked":C=w;break;case"value":u=w;break;case"defaultValue":v=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,t));break;default:ze(e,t,o,w,a,null)}}kd(e,u,v,x,C,m,l,!1);return;case"select":ge("invalid",e),o=m=u=null;for(l in a)if(a.hasOwnProperty(l)&&(v=a[l],v!=null))switch(l){case"value":u=v;break;case"defaultValue":m=v;break;case"multiple":o=v;default:ze(e,t,l,v,a,null)}t=u,a=m,e.multiple=!!o,t!=null?Un(e,!!o,t,!1):a!=null&&Un(e,!!o,a,!0);return;case"textarea":ge("invalid",e),u=l=o=null;for(m in a)if(a.hasOwnProperty(m)&&(v=a[m],v!=null))switch(m){case"value":o=v;break;case"defaultValue":l=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(91));break;default:ze(e,t,m,v,a,null)}Xd(e,o,l,u);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(o=a[x],o!=null))switch(x){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,t,x,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<hi.length;o++)ge(hi[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(o=a[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ze(e,t,C,o,a,null)}return;default:if(kr(t)){for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!==void 0&&Nu(e,t,w,o,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(o=a[v],o!=null&&ze(e,t,v,o,a,null))}function sS(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,m=null,v=null,x=null,C=null,w=null;for(N in a){var V=a[N];if(a.hasOwnProperty(N)&&V!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":x=V;default:o.hasOwnProperty(N)||ze(e,t,N,null,o,V)}}for(var q in o){var N=o[q];if(V=a[q],o.hasOwnProperty(q)&&(N!=null||V!=null))switch(q){case"type":u=N;break;case"name":l=N;break;case"checked":C=N;break;case"defaultChecked":w=N;break;case"value":m=N;break;case"defaultValue":v=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:N!==V&&ze(e,t,q,N,o,V)}}Qr(e,m,v,x,C,w,u,l);return;case"select":N=m=v=q=null;for(u in a)if(x=a[u],a.hasOwnProperty(u)&&x!=null)switch(u){case"value":break;case"multiple":N=x;default:o.hasOwnProperty(u)||ze(e,t,u,null,o,x)}for(l in o)if(u=o[l],x=a[l],o.hasOwnProperty(l)&&(u!=null||x!=null))switch(l){case"value":q=u;break;case"defaultValue":v=u;break;case"multiple":m=u;default:u!==x&&ze(e,t,l,u,o,x)}t=v,a=m,o=N,q!=null?Un(e,!!a,q,!1):!!o!=!!a&&(t!=null?Un(e,!!a,t,!0):Un(e,!!a,a?[]:"",!1));return;case"textarea":N=q=null;for(v in a)if(l=a[v],a.hasOwnProperty(v)&&l!=null&&!o.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:ze(e,t,v,null,o,l)}for(m in o)if(l=o[m],u=a[m],o.hasOwnProperty(m)&&(l!=null||u!=null))switch(m){case"value":q=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&ze(e,t,m,l,o,u)}Yd(e,q,N);return;case"option":for(var $ in a)if(q=a[$],a.hasOwnProperty($)&&q!=null&&!o.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:ze(e,t,$,null,o,q)}for(x in o)if(q=o[x],N=a[x],o.hasOwnProperty(x)&&q!==N&&(q!=null||N!=null))switch(x){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:ze(e,t,x,q,o,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)q=a[le],a.hasOwnProperty(le)&&q!=null&&!o.hasOwnProperty(le)&&ze(e,t,le,null,o,q);for(C in o)if(q=o[C],N=a[C],o.hasOwnProperty(C)&&q!==N&&(q!=null||N!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,t));break;default:ze(e,t,C,q,o,N)}return;default:if(kr(t)){for(var qe in a)q=a[qe],a.hasOwnProperty(qe)&&q!==void 0&&!o.hasOwnProperty(qe)&&Nu(e,t,qe,void 0,o,q);for(w in o)q=o[w],N=a[w],!o.hasOwnProperty(w)||q===N||q===void 0&&N===void 0||Nu(e,t,w,q,o,N);return}}for(var D in a)q=a[D],a.hasOwnProperty(D)&&q!=null&&!o.hasOwnProperty(D)&&ze(e,t,D,null,o,q);for(V in o)q=o[V],N=a[V],!o.hasOwnProperty(V)||q===N||q==null&&N==null||ze(e,t,V,q,o,N)}function Fh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var l=a[o],u=l.transferSize,m=l.initiatorType,v=l.duration;if(u&&v&&Fh(m)){for(m=0,v=l.responseEnd,o+=1;o<a.length;o++){var x=a[o],C=x.startTime;if(C>v)break;var w=x.transferSize,V=x.initiatorType;w&&Fh(V)&&(x=x.responseEnd,m+=w*(x<v?1:(v-C)/(x-C)))}if(--o,t+=8*(u+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ou=null,ju=null;function Ys(e){return e.nodeType===9?e:e.ownerDocument}function Wh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $h(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function wu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ru=null;function lS(){var e=window.event;return e&&e.type==="popstate"?e===Ru?!1:(Ru=e,!0):(Ru=null,!1)}var Ih=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(e){return ep.resolve(null).then(e).catch(dS)}:Ih;function dS(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function tp(e,t){var a=t,o=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(l),yo(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")gi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,gi(a);for(var u=a.firstChild;u;){var m=u.nextSibling,v=u.nodeName;u[Ro]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=m}}else a==="body"&&gi(e.ownerDocument.body);a=l}while(a);yo(t)}function ap(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Vu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vu(a),Hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mS(e,t,a,o){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ro])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function fS(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pt(e.nextSibling),e===null))return null;return e}function np(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function Bu(e){return e.data==="$?"||e.data==="$~"}function _u(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hS(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Lu=null;function op(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Pt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function ip(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function sp(e,t,a){switch(t=Ys(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function gi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Hr(e)}var Qt=new Map,rp=new Set;function Xs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=P.d;P.d={f:pS,r:gS,D:vS,C:yS,L:bS,m:SS,X:xS,S:TS,M:ES};function pS(){var e=Ea.f(),t=_s();return e||t}function gS(e){var t=Bn(e);t!==null&&t.tag===5&&t.type==="form"?Af(t):Ea.r(e)}var po=typeof document>"u"?null:document;function lp(e,t,a){var o=po;if(o&&typeof t=="string"&&t){var l=Rt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),rp.has(l)||(rp.add(l),e={rel:e,crossOrigin:a,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),it(t,"link",e),Ie(t),o.head.appendChild(t)))}}function vS(e){Ea.D(e),lp("dns-prefetch",e,null)}function yS(e,t){Ea.C(e,t),lp("preconnect",e,t)}function bS(e,t,a){Ea.L(e,t,a);var o=po;if(o&&e&&t){var l='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Rt(a.imageSizes)+'"]')):l+='[href="'+Rt(e)+'"]';var u=l;switch(t){case"style":u=go(e);break;case"script":u=vo(e)}Qt.has(u)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Qt.set(u,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(vi(u))||t==="script"&&o.querySelector(yi(u))||(t=o.createElement("link"),it(t,"link",e),Ie(t),o.head.appendChild(t)))}}function SS(e,t){Ea.m(e,t);var a=po;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Rt(o)+'"][href="'+Rt(e)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=vo(e)}if(!Qt.has(u)&&(e=b({rel:"modulepreload",href:e},t),Qt.set(u,e),a.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yi(u)))return}o=a.createElement("link"),it(o,"link",e),Ie(o),a.head.appendChild(o)}}}function TS(e,t,a){Ea.S(e,t,a);var o=po;if(o&&e){var l=_n(o).hoistableStyles,u=go(e);t=t||"default";var m=l.get(u);if(!m){var v={loading:0,preload:null};if(m=o.querySelector(vi(u)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Qt.get(u))&&Uu(e,a);var x=m=o.createElement("link");Ie(x),it(x,"link",e),x._p=new Promise(function(C,w){x.onload=C,x.onerror=w}),x.addEventListener("load",function(){v.loading|=1}),x.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Js(m,t,o)}m={type:"stylesheet",instance:m,count:1,state:v},l.set(u,m)}}}function xS(e,t){Ea.X(e,t);var a=po;if(a&&e){var o=_n(a).hoistableScripts,l=vo(e),u=o.get(l);u||(u=a.querySelector(yi(l)),u||(e=b({src:e,async:!0},t),(t=Qt.get(l))&&Hu(e,t),u=a.createElement("script"),Ie(u),it(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function ES(e,t){Ea.M(e,t);var a=po;if(a&&e){var o=_n(a).hoistableScripts,l=vo(e),u=o.get(l);u||(u=a.querySelector(yi(l)),u||(e=b({src:e,async:!0,type:"module"},t),(t=Qt.get(l))&&Hu(e,t),u=a.createElement("script"),Ie(u),it(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function up(e,t,a,o){var l=(l=re.current)?Xs(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=go(a.href),a=_n(l).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=go(a.href);var u=_n(l).hoistableStyles,m=u.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=l.querySelector(vi(e)))&&!u._p&&(m.instance=u,m.state.loading=5),Qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qt.set(e,a),u||AS(l,e,a,m.state))),t&&o===null)throw Error(s(528,""));return m}if(t&&o!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=vo(a),a=_n(l).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function go(e){return'href="'+Rt(e)+'"'}function vi(e){return'link[rel="stylesheet"]['+e+"]"}function cp(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function AS(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),it(t,"link",a),Ie(t),e.head.appendChild(t))}function vo(e){return'[src="'+Rt(e)+'"]'}function yi(e){return"script[async]"+e}function dp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Rt(a.href)+'"]');if(o)return t.instance=o,Ie(o),o;var l=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ie(o),it(o,"style",l),Js(o,a.precedence,e),t.instance=o;case"stylesheet":l=go(a.href);var u=e.querySelector(vi(l));if(u)return t.state.loading|=4,t.instance=u,Ie(u),u;o=cp(a),(l=Qt.get(l))&&Uu(o,l),u=(e.ownerDocument||e).createElement("link"),Ie(u);var m=u;return m._p=new Promise(function(v,x){m.onload=v,m.onerror=x}),it(u,"link",o),t.state.loading|=4,Js(u,a.precedence,e),t.instance=u;case"script":return u=vo(a.src),(l=e.querySelector(yi(u)))?(t.instance=l,Ie(l),l):(o=a,(l=Qt.get(u))&&(o=b({},a),Hu(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),it(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Js(o,a.precedence,e));return t.instance}function Js(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,m=0;m<o.length;m++){var v=o[m];if(v.dataset.precedence===t)u=v;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Hu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zs=null;function mp(e,t,a){if(Zs===null){var o=new Map,l=Zs=new Map;l.set(a,o)}else l=Zs,o=l.get(a),o||(o=new Map,l.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Ro]||u[tt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var v=o.get(m);v?v.push(u):o.set(m,[u])}}return o}function fp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function DS(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function MS(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=go(o.href),u=t.querySelector(vi(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ks.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,Ie(u);return}u=t.ownerDocument||t,o=cp(o),(l=Qt.get(l))&&Uu(o,l),u=u.createElement("link"),Ie(u);var m=u;m._p=new Promise(function(v,x){m.onload=v,m.onerror=x}),it(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ks.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Pu=0;function CS(e,t){return e.stylesheets&&e.count===0&&Ws(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Pu===0&&(Pu=62500*rS());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Pu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function Ks(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ws(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fs=null;function Ws(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fs=new Map,t.forEach(zS,e),Fs=null,Ks.call(e))}function zS(e,t){if(!(t.state.loading&4)){var a=Fs.get(e);if(a)var o=a.get(null);else{a=new Map,Fs.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var m=l[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),o=m)}o&&a.set(null,o)}l=t.instance,m=l.getAttribute("data-precedence"),u=a.get(m)||o,u===o&&a.set(null,l),a.set(m,l),this.count++,o=Ks.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var bi={$$typeof:Q,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function qS(e,t,a,o,l,u,m,v,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.hiddenUpdates=Br(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function pp(e,t,a,o,l,u,m,v,x,C,w,V){return e=new qS(e,t,a,m,x,C,w,V,v),t=1,u===!0&&(t|=24),u=Mt(3,null,null,t),e.current=u,u.stateNode=e,t=Sl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},Al(u),e}function gp(e){return e?(e=Jn,e):Jn}function vp(e,t,a,o,l,u){l=gp(l),o.context===null?o.context=l:o.pendingContext=l,o=Ba(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=_a(e,o,t),a!==null&&(Tt(a,e,t),Wo(a,e,t))}function yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Qu(e,t){yp(e,t),(e=e.alternate)&&yp(e,t)}function bp(e){if(e.tag===13||e.tag===31){var t=fn(e,67108864);t!==null&&Tt(t,e,67108864),Qu(e,67108864)}}function Sp(e){if(e.tag===13||e.tag===31){var t=Ot();t=_r(t);var a=fn(e,t);a!==null&&Tt(a,e,t),Qu(e,t)}}var $s=!0;function NS(e,t,a,o){var l=j.T;j.T=null;var u=P.p;try{P.p=2,Gu(e,t,a,o)}finally{P.p=u,j.T=l}}function OS(e,t,a,o){var l=j.T;j.T=null;var u=P.p;try{P.p=8,Gu(e,t,a,o)}finally{P.p=u,j.T=l}}function Gu(e,t,a,o){if($s){var l=ku(o);if(l===null)qu(e,t,o,Is,a),xp(e,o);else if(wS(l,e,t,a,o))o.stopPropagation();else if(xp(e,o),t&4&&-1<jS.indexOf(e)){for(;l!==null;){var u=Bn(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=ln(u.pendingLanes);if(m!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var x=1<<31-At(m);v.entanglements[1]|=x,m&=~x}ta(u),(Ee&6)===0&&(Vs=xt()+500,fi(0))}}break;case 31:case 13:v=fn(u,2),v!==null&&Tt(v,u,2),_s(),Qu(u,2)}if(u=ku(o),u===null&&qu(e,t,o,Is,a),u===l)break;l=u}l!==null&&o.stopPropagation()}else qu(e,t,o,null,a)}}function ku(e){return e=Xr(e),Yu(e)}var Is=null;function Yu(e){if(Is=null,e=Vn(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Is=e,null}function Tp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(v0()){case zd:return 2;case qd:return 8;case Qi:case y0:return 32;case Nd:return 268435456;default:return 32}default:return 32}}var Xu=!1,Za=null,Ka=null,Fa=null,Si=new Map,Ti=new Map,Wa=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xp(e,t){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function xi(e,t,a,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Bn(t),t!==null&&bp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function wS(e,t,a,o,l){switch(t){case"focusin":return Za=xi(Za,e,t,a,o,l),!0;case"dragenter":return Ka=xi(Ka,e,t,a,o,l),!0;case"mouseover":return Fa=xi(Fa,e,t,a,o,l),!0;case"pointerover":var u=l.pointerId;return Si.set(u,xi(Si.get(u)||null,e,t,a,o,l)),!0;case"gotpointercapture":return u=l.pointerId,Ti.set(u,xi(Ti.get(u)||null,e,t,a,o,l)),!0}return!1}function Ep(e){var t=Vn(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,Bd(e.priority,function(){Sp(a)});return}}else if(t===31){if(t=h(a),t!==null){e.blockedOn=t,Bd(e.priority,function(){Sp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ku(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Yr=o,a.target.dispatchEvent(o),Yr=null}else return t=Bn(a),t!==null&&bp(t),e.blockedOn=a,!1;t.shift()}return!0}function Ap(e,t,a){er(e)&&a.delete(t)}function RS(){Xu=!1,Za!==null&&er(Za)&&(Za=null),Ka!==null&&er(Ka)&&(Ka=null),Fa!==null&&er(Fa)&&(Fa=null),Si.forEach(Ap),Ti.forEach(Ap)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xu||(Xu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,RS)))}var ar=null;function Dp(e){ar!==e&&(ar=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){ar===e&&(ar=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(Yu(o||a)===null)continue;break}var u=Bn(a);u!==null&&(e.splice(t,3),t-=3,kl(u,{pending:!0,data:l,method:a.method,action:o},o,l))}}))}function yo(e){function t(x){return tr(x,e)}Za!==null&&tr(Za,e),Ka!==null&&tr(Ka,e),Fa!==null&&tr(Fa,e),Si.forEach(t),Ti.forEach(t);for(var a=0;a<Wa.length;a++){var o=Wa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Ep(a),a.blockedOn===null&&Wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var l=a[o],u=a[o+1],m=l[pt]||null;if(typeof u=="function")m||Dp(a);else if(m){var v=null;if(u&&u.hasAttribute("formAction")){if(l=u,m=u[pt]||null)v=m.formAction;else if(Yu(l)!==null)continue}else v=m.action;typeof v=="function"?a[o+1]=v:(a.splice(o,3),o-=3),Dp(a)}}}function Mp(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ju(e){this._internalRoot=e}nr.prototype.render=Ju.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,o=Ot();vp(a,o,e,t,null,null)},nr.prototype.unmount=Ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vp(e.current,2,null,e,null,null),_s(),t[Rn]=null}};function nr(e){this._internalRoot=e}nr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Wa.length&&t!==0&&t<Wa[a].priority;a++);Wa.splice(a,0,e),a===0&&Ep(e)}};var Cp=i.version;if(Cp!=="19.2.4")throw Error(s(527,Cp,"19.2.4"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var VS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!or.isDisabled&&or.supportsFiber)try{Oo=or.inject(VS),Et=or}catch{}}return Ai.createRoot=function(e,t){if(!c(e))throw Error(s(299));var a=!1,o="",l=Rf,u=Vf,m=Bf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=pp(e,1,!1,null,null,a,o,null,l,u,m,Mp),e[Rn]=t.current,zu(e),new Ju(t)},Ai.hydrateRoot=function(e,t,a){if(!c(e))throw Error(s(299));var o=!1,l="",u=Rf,m=Vf,v=Bf,x=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=pp(e,1,!0,t,a??null,o,l,x,u,m,v,Mp),t.context=gp(null),a=t.current,o=Ot(),o=_r(o),l=Ba(o),l.callback=null,_a(a,l,o),a=o,t.current.lanes=a,wo(t,a),ta(t),e[Rn]=t.current,zu(e),new nr(t)},Ai.version="19.2.4",Ai}var _p;function YS(){if(_p)return Fu.exports;_p=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Fu.exports=kS(),Fu.exports}var XS=YS();const Jc=G.createContext({});function Zc(n){const i=G.useRef(null);return i.current===null&&(i.current=n()),i.current}const uv=typeof window<"u",cv=uv?G.useLayoutEffect:G.useEffect,Cr=G.createContext(null);function Kc(n,i){n.indexOf(i)===-1&&n.push(i)}function vr(n,i){const r=n.indexOf(i);r>-1&&n.splice(r,1)}const oa=(n,i,r)=>r>i?i:r<n?n:r;let Fc=()=>{};const Da={},dv=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function mv(n){return typeof n=="object"&&n!==null}const fv=n=>/^0[^.\s]+$/u.test(n);function hv(n){let i;return()=>(i===void 0&&(i=n()),i)}const kt=n=>n,JS=(n,i)=>r=>i(n(r)),Li=(...n)=>n.reduce(JS),wi=(n,i,r)=>{const s=i-n;return s===0?1:(r-n)/s};class Wc{constructor(){this.subscriptions=[]}add(i){return Kc(this.subscriptions,i),()=>vr(this.subscriptions,i)}notify(i,r,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,r,s);else for(let f=0;f<c;f++){const d=this.subscriptions[f];d&&d(i,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ft=n=>n*1e3,Gt=n=>n/1e3;function pv(n,i){return i?n*(1e3/i):0}const gv=(n,i,r)=>(((1-3*r+3*i)*n+(3*r-6*i))*n+3*i)*n,ZS=1e-7,KS=12;function FS(n,i,r,s,c){let f,d,h=0;do d=i+(r-i)/2,f=gv(d,s,c)-n,f>0?r=d:i=d;while(Math.abs(f)>ZS&&++h<KS);return d}function Ui(n,i,r,s){if(n===i&&r===s)return kt;const c=f=>FS(f,0,1,n,r);return f=>f===0||f===1?f:gv(c(f),i,s)}const vv=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,yv=n=>i=>1-n(1-i),bv=Ui(.33,1.53,.69,.99),$c=yv(bv),Sv=vv($c),Tv=n=>(n*=2)<1?.5*$c(n):.5*(2-Math.pow(2,-10*(n-1))),Ic=n=>1-Math.sin(Math.acos(n)),xv=yv(Ic),Ev=vv(Ic),WS=Ui(.42,0,1,1),$S=Ui(0,0,.58,1),Av=Ui(.42,0,.58,1),IS=n=>Array.isArray(n)&&typeof n[0]!="number",Dv=n=>Array.isArray(n)&&typeof n[0]=="number",e1={linear:kt,easeIn:WS,easeInOut:Av,easeOut:$S,circIn:Ic,circInOut:Ev,circOut:xv,backIn:$c,backInOut:Sv,backOut:bv,anticipate:Tv},t1=n=>typeof n=="string",Lp=n=>{if(Dv(n)){Fc(n.length===4);const[i,r,s,c]=n;return Ui(i,r,s,c)}else if(t1(n))return e1[n];return n},ir=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function a1(n,i){let r=new Set,s=new Set,c=!1,f=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){d.has(y)&&(g.schedule(y),n()),y(h)}const g={schedule:(y,b=!1,T=!1)=>{const O=T&&c?r:s;return b&&d.add(y),O.has(y)||O.add(y),y},cancel:y=>{s.delete(y),d.delete(y)},process:y=>{if(h=y,c){f=!0;return}c=!0,[r,s]=[s,r],r.forEach(p),r.clear(),c=!1,f&&(f=!1,g.process(y))}};return g}const n1=40;function Mv(n,i){let r=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>r=!0,d=ir.reduce((Q,Z)=>(Q[Z]=a1(f),Q),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:y,update:b,preRender:T,render:z,postRender:O}=d,L=()=>{const Q=Da.useManualTiming?c.timestamp:performance.now();r=!1,Da.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(Q-c.timestamp,n1),1)),c.timestamp=Q,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),y.process(c),b.process(c),T.process(c),z.process(c),O.process(c),c.isProcessing=!1,r&&i&&(s=!1,n(L))},U=()=>{r=!0,s=!0,c.isProcessing||n(L)};return{schedule:ir.reduce((Q,Z)=>{const Y=d[Z];return Q[Z]=(oe,F=!1,_=!1)=>(r||U(),Y.schedule(oe,F,_)),Q},{}),cancel:Q=>{for(let Z=0;Z<ir.length;Z++)d[ir[Z]].cancel(Q)},state:c,steps:d}}const{schedule:Oe,cancel:on,state:st,steps:ec}=Mv(typeof requestAnimationFrame<"u"?requestAnimationFrame:kt,!0);let dr;function o1(){dr=void 0}const mt={now:()=>(dr===void 0&&mt.set(st.isProcessing||Da.useManualTiming?st.timestamp:performance.now()),dr),set:n=>{dr=n,queueMicrotask(o1)}},Cv=n=>i=>typeof i=="string"&&i.startsWith(n),zv=Cv("--"),i1=Cv("var(--"),ed=n=>i1(n)?s1.test(n.split("/*")[0].trim()):!1,s1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Up(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const zo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ri={...zo,transform:n=>oa(0,1,n)},sr={...zo,default:1},qi=n=>Math.round(n*1e5)/1e5,td=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function r1(n){return n==null}const l1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ad=(n,i)=>r=>!!(typeof r=="string"&&l1.test(r)&&r.startsWith(n)||i&&!r1(r)&&Object.prototype.hasOwnProperty.call(r,i)),qv=(n,i,r)=>s=>{if(typeof s!="string")return s;const[c,f,d,h]=s.match(td);return{[n]:parseFloat(c),[i]:parseFloat(f),[r]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},u1=n=>oa(0,255,n),tc={...zo,transform:n=>Math.round(u1(n))},qn={test:ad("rgb","red"),parse:qv("red","green","blue"),transform:({red:n,green:i,blue:r,alpha:s=1})=>"rgba("+tc.transform(n)+", "+tc.transform(i)+", "+tc.transform(r)+", "+qi(Ri.transform(s))+")"};function c1(n){let i="",r="",s="",c="";return n.length>5?(i=n.substring(1,3),r=n.substring(3,5),s=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),r=n.substring(2,3),s=n.substring(3,4),c=n.substring(4,5),i+=i,r+=r,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const bc={test:ad("#"),parse:c1,transform:qn.transform},Hi=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),tn=Hi("deg"),na=Hi("%"),ee=Hi("px"),d1=Hi("vh"),m1=Hi("vw"),Hp={...na,parse:n=>na.parse(n)/100,transform:n=>na.transform(n*100)},So={test:ad("hsl","hue"),parse:qv("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:r,alpha:s=1})=>"hsla("+Math.round(n)+", "+na.transform(qi(i))+", "+na.transform(qi(r))+", "+qi(Ri.transform(s))+")"},Ze={test:n=>qn.test(n)||bc.test(n)||So.test(n),parse:n=>qn.test(n)?qn.parse(n):So.test(n)?So.parse(n):bc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?qn.transform(n):So.transform(n),getAnimatableNone:n=>{const i=Ze.parse(n);return i.alpha=0,Ze.transform(i)}},f1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function h1(n){var i,r;return isNaN(n)&&typeof n=="string"&&(((i=n.match(td))==null?void 0:i.length)||0)+(((r=n.match(f1))==null?void 0:r.length)||0)>0}const Nv="number",Ov="color",p1="var",g1="var(",Pp="${}",v1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Vi(n){const i=n.toString(),r=[],s={color:[],number:[],var:[]},c=[];let f=0;const h=i.replace(v1,p=>(Ze.test(p)?(s.color.push(f),c.push(Ov),r.push(Ze.parse(p))):p.startsWith(g1)?(s.var.push(f),c.push(p1),r.push(p)):(s.number.push(f),c.push(Nv),r.push(parseFloat(p))),++f,Pp)).split(Pp);return{values:r,split:h,indexes:s,types:c}}function jv(n){return Vi(n).values}function wv(n){const{split:i,types:r}=Vi(n),s=i.length;return c=>{let f="";for(let d=0;d<s;d++)if(f+=i[d],c[d]!==void 0){const h=r[d];h===Nv?f+=qi(c[d]):h===Ov?f+=Ze.transform(c[d]):f+=c[d]}return f}}const y1=n=>typeof n=="number"?0:Ze.test(n)?Ze.getAnimatableNone(n):n;function b1(n){const i=jv(n);return wv(n)(i.map(y1))}const Wt={test:h1,parse:jv,createTransformer:wv,getAnimatableNone:b1};function ac(n,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(i-n)*6*r:r<1/2?i:r<2/3?n+(i-n)*(2/3-r)*6:n}function S1({hue:n,saturation:i,lightness:r,alpha:s}){n/=360,i/=100,r/=100;let c=0,f=0,d=0;if(!i)c=f=d=r;else{const h=r<.5?r*(1+i):r+i-r*i,p=2*r-h;c=ac(p,h,n+1/3),f=ac(p,h,n),d=ac(p,h,n-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:s}}function yr(n,i){return r=>r>0?i:n}const _e=(n,i,r)=>n+(i-n)*r,nc=(n,i,r)=>{const s=n*n,c=r*(i*i-s)+s;return c<0?0:Math.sqrt(c)},T1=[bc,qn,So],x1=n=>T1.find(i=>i.test(n));function Qp(n){const i=x1(n);if(!i)return!1;let r=i.parse(n);return i===So&&(r=S1(r)),r}const Gp=(n,i)=>{const r=Qp(n),s=Qp(i);if(!r||!s)return yr(n,i);const c={...r};return f=>(c.red=nc(r.red,s.red,f),c.green=nc(r.green,s.green,f),c.blue=nc(r.blue,s.blue,f),c.alpha=_e(r.alpha,s.alpha,f),qn.transform(c))},Sc=new Set(["none","hidden"]);function E1(n,i){return Sc.has(n)?r=>r<=0?n:i:r=>r>=1?i:n}function A1(n,i){return r=>_e(n,i,r)}function nd(n){return typeof n=="number"?A1:typeof n=="string"?ed(n)?yr:Ze.test(n)?Gp:C1:Array.isArray(n)?Rv:typeof n=="object"?Ze.test(n)?Gp:D1:yr}function Rv(n,i){const r=[...n],s=r.length,c=n.map((f,d)=>nd(f)(f,i[d]));return f=>{for(let d=0;d<s;d++)r[d]=c[d](f);return r}}function D1(n,i){const r={...n,...i},s={};for(const c in r)n[c]!==void 0&&i[c]!==void 0&&(s[c]=nd(n[c])(n[c],i[c]));return c=>{for(const f in s)r[f]=s[f](c);return r}}function M1(n,i){const r=[],s={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const f=i.types[c],d=n.indexes[f][s[f]],h=n.values[d]??0;r[c]=h,s[f]++}return r}const C1=(n,i)=>{const r=Wt.createTransformer(i),s=Vi(n),c=Vi(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?Sc.has(n)&&!c.values.length||Sc.has(i)&&!s.values.length?E1(n,i):Li(Rv(M1(s,c),c.values),r):yr(n,i)};function Vv(n,i,r){return typeof n=="number"&&typeof i=="number"&&typeof r=="number"?_e(n,i,r):nd(n)(n,i)}const z1=n=>{const i=({timestamp:r})=>n(r);return{start:(r=!0)=>Oe.update(i,r),stop:()=>on(i),now:()=>st.isProcessing?st.timestamp:mt.now()}},Bv=(n,i,r=10)=>{let s="";const c=Math.max(Math.round(i/r),2);for(let f=0;f<c;f++)s+=Math.round(n(f/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},br=2e4;function od(n){let i=0;const r=50;let s=n.next(i);for(;!s.done&&i<br;)i+=r,s=n.next(i);return i>=br?1/0:i}function q1(n,i=100,r){const s=r({...n,keyframes:[0,i]}),c=Math.min(od(s),br);return{type:"keyframes",ease:f=>s.next(c*f).value/i,duration:Gt(c)}}const N1=5;function _v(n,i,r){const s=Math.max(i-N1,0);return pv(r-n(s),i-s)}const He={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},oc=.001;function O1({duration:n=He.duration,bounce:i=He.bounce,velocity:r=He.velocity,mass:s=He.mass}){let c,f,d=1-i;d=oa(He.minDamping,He.maxDamping,d),n=oa(He.minDuration,He.maxDuration,Gt(n)),d<1?(c=g=>{const y=g*d,b=y*n,T=y-r,z=Tc(g,d),O=Math.exp(-b);return oc-T/z*O},f=g=>{const b=g*d*n,T=b*r+r,z=Math.pow(d,2)*Math.pow(g,2)*n,O=Math.exp(-b),L=Tc(Math.pow(g,2),d);return(-c(g)+oc>0?-1:1)*((T-z)*O)/L}):(c=g=>{const y=Math.exp(-g*n),b=(g-r)*n+1;return-oc+y*b},f=g=>{const y=Math.exp(-g*n),b=(r-g)*(n*n);return y*b});const h=5/n,p=w1(c,f,h);if(n=Ft(n),isNaN(p))return{stiffness:He.stiffness,damping:He.damping,duration:n};{const g=Math.pow(p,2)*s;return{stiffness:g,damping:d*2*Math.sqrt(s*g),duration:n}}}const j1=12;function w1(n,i,r){let s=r;for(let c=1;c<j1;c++)s=s-n(s)/i(s);return s}function Tc(n,i){return n*Math.sqrt(1-i*i)}const R1=["duration","bounce"],V1=["stiffness","damping","mass"];function kp(n,i){return i.some(r=>n[r]!==void 0)}function B1(n){let i={velocity:He.velocity,stiffness:He.stiffness,damping:He.damping,mass:He.mass,isResolvedFromDuration:!1,...n};if(!kp(n,V1)&&kp(n,R1))if(i.velocity=0,n.visualDuration){const r=n.visualDuration,s=2*Math.PI/(r*1.2),c=s*s,f=2*oa(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:He.mass,stiffness:c,damping:f}}else{const r=O1({...n,velocity:0});i={...i,...r,mass:He.mass},i.isResolvedFromDuration=!0}return i}function Sr(n=He.visualDuration,i=He.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:s,restDelta:c}=r;const f=r.keyframes[0],d=r.keyframes[r.keyframes.length-1],h={done:!1,value:f},{stiffness:p,damping:g,mass:y,duration:b,velocity:T,isResolvedFromDuration:z}=B1({...r,velocity:-Gt(r.velocity||0)}),O=T||0,L=g/(2*Math.sqrt(p*y)),U=d-f,H=Gt(Math.sqrt(p/y)),X=Math.abs(U)<5;s||(s=X?He.restSpeed.granular:He.restSpeed.default),c||(c=X?He.restDelta.granular:He.restDelta.default);let Q;if(L<1){const Y=Tc(H,L);Q=oe=>{const F=Math.exp(-L*H*oe);return d-F*((O+L*H*U)/Y*Math.sin(Y*oe)+U*Math.cos(Y*oe))}}else if(L===1)Q=Y=>d-Math.exp(-H*Y)*(U+(O+H*U)*Y);else{const Y=H*Math.sqrt(L*L-1);Q=oe=>{const F=Math.exp(-L*H*oe),_=Math.min(Y*oe,300);return d-F*((O+L*H*U)*Math.sinh(_)+Y*U*Math.cosh(_))/Y}}const Z={calculatedDuration:z&&b||null,next:Y=>{const oe=Q(Y);if(z)h.done=Y>=b;else{let F=Y===0?O:0;L<1&&(F=Y===0?Ft(O):_v(Q,Y,oe));const _=Math.abs(F)<=s,ie=Math.abs(d-oe)<=c;h.done=_&&ie}return h.value=h.done?d:oe,h},toString:()=>{const Y=Math.min(od(Z),br),oe=Bv(F=>Z.next(Y*F).value,Y,30);return Y+"ms "+oe},toTransition:()=>{}};return Z}Sr.applyToOptions=n=>{const i=q1(n,100,Sr);return n.ease=i.ease,n.duration=Ft(i.duration),n.type="keyframes",n};function xc({keyframes:n,velocity:i=0,power:r=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:y}){const b=n[0],T={done:!1,value:b},z=_=>h!==void 0&&_<h||p!==void 0&&_>p,O=_=>h===void 0?p:p===void 0||Math.abs(h-_)<Math.abs(p-_)?h:p;let L=r*i;const U=b+L,H=d===void 0?U:d(U);H!==U&&(L=H-b);const X=_=>-L*Math.exp(-_/s),Q=_=>H+X(_),Z=_=>{const ie=X(_),Ae=Q(_);T.done=Math.abs(ie)<=g,T.value=T.done?H:Ae};let Y,oe;const F=_=>{z(T.value)&&(Y=_,oe=Sr({keyframes:[T.value,O(T.value)],velocity:_v(Q,_,T.value),damping:c,stiffness:f,restDelta:g,restSpeed:y}))};return F(0),{calculatedDuration:null,next:_=>{let ie=!1;return!oe&&Y===void 0&&(ie=!0,Z(_),F(_)),Y!==void 0&&_>=Y?oe.next(_-Y):(!ie&&Z(_),T)}}}function _1(n,i,r){const s=[],c=r||Da.mix||Vv,f=n.length-1;for(let d=0;d<f;d++){let h=c(n[d],n[d+1]);if(i){const p=Array.isArray(i)?i[d]||kt:i;h=Li(p,h)}s.push(h)}return s}function L1(n,i,{clamp:r=!0,ease:s,mixer:c}={}){const f=n.length;if(Fc(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const h=_1(i,s,c),p=h.length,g=y=>{if(d&&y<n[0])return i[0];let b=0;if(p>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const T=wi(n[b],n[b+1],y);return h[b](T)};return r?y=>g(oa(n[0],n[f-1],y)):g}function U1(n,i){const r=n[n.length-1];for(let s=1;s<=i;s++){const c=wi(0,i,s);n.push(_e(r,1,c))}}function H1(n){const i=[0];return U1(i,n.length-1),i}function P1(n,i){return n.map(r=>r*i)}function Q1(n,i){return n.map(()=>i||Av).splice(0,n.length-1)}function Ni({duration:n=300,keyframes:i,times:r,ease:s="easeInOut"}){const c=IS(s)?s.map(Lp):Lp(s),f={done:!1,value:i[0]},d=P1(r&&r.length===i.length?r:H1(i),n),h=L1(d,i,{ease:Array.isArray(c)?c:Q1(i,c)});return{calculatedDuration:n,next:p=>(f.value=h(p),f.done=p>=n,f)}}const G1=n=>n!==null;function id(n,{repeat:i,repeatType:r="loop"},s,c=1){const f=n.filter(G1),h=c<0||i&&r!=="loop"&&i%2===1?0:f.length-1;return!h||s===void 0?f[h]:s}const k1={decay:xc,inertia:xc,tween:Ni,keyframes:Ni,spring:Sr};function Lv(n){typeof n.type=="string"&&(n.type=k1[n.type])}class sd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,r){return this.finished.then(i,r)}}const Y1=n=>n/100;class rd extends sd{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var s,c;const{motionValue:r}=this.options;r&&r.updatedAt!==mt.now()&&this.tick(mt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(s=this.options).onStop)==null||c.call(s))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Lv(i);const{type:r=Ni,repeat:s=0,repeatDelay:c=0,repeatType:f,velocity:d=0}=i;let{keyframes:h}=i;const p=r||Ni;p!==Ni&&typeof h[0]!="number"&&(this.mixKeyframes=Li(Y1,Vv(h[0],h[1])),h=[0,100]);const g=p({...i,keyframes:h});f==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=od(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=g}updateTime(i){const r=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(i,r=!1){const{generator:s,totalDuration:c,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:T,repeatDelay:z,type:O,onUpdate:L,finalKeyframe:U}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),r?this.currentTime=i:this.updateTime(i);const H=this.currentTime-g*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?H<0:H>c;this.currentTime=Math.max(H,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let Q=this.currentTime,Z=s;if(b){const _=Math.min(this.currentTime,c)/h;let ie=Math.floor(_),Ae=_%1;!Ae&&_>=1&&(Ae=1),Ae===1&&ie--,ie=Math.min(ie,b+1),!!(ie%2)&&(T==="reverse"?(Ae=1-Ae,z&&(Ae-=z/h)):T==="mirror"&&(Z=d)),Q=oa(0,1,Ae)*h}const Y=X?{done:!1,value:y[0]}:Z.next(Q);f&&(Y.value=f(Y.value));let{done:oe}=Y;!X&&p!==null&&(oe=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&oe);return F&&O!==xc&&(Y.value=id(y,this.options,U,this.speed)),L&&L(Y.value),F&&this.finish(),Y}then(i,r){return this.finished.then(i,r)}get duration(){return Gt(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Gt(i)}get time(){return Gt(this.currentTime)}set time(i){var r;i=Ft(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),(r=this.driver)==null||r.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(mt.now());const r=this.playbackSpeed!==i;this.playbackSpeed=i,r&&(this.time=Gt(this.currentTime))}play(){var c,f;if(this.isStopped)return;const{driver:i=z1,startTime:r}=this.options;this.driver||(this.driver=i(d=>this.tick(d))),(f=(c=this.options).onPlay)==null||f.call(c);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=r??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(mt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,r;this.notifyFinished(),this.teardown(),this.state="finished",(r=(i=this.options).onComplete)==null||r.call(i)}cancel(){var i,r;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(r=(i=this.options).onCancel)==null||r.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var r;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(r=this.driver)==null||r.stop(),i.observe(this)}}function X1(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const Nn=n=>n*180/Math.PI,Ec=n=>{const i=Nn(Math.atan2(n[1],n[0]));return Ac(i)},J1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Ec,rotateZ:Ec,skewX:n=>Nn(Math.atan(n[1])),skewY:n=>Nn(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Ac=n=>(n=n%360,n<0&&(n+=360),n),Yp=Ec,Xp=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Jp=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Z1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Xp,scaleY:Jp,scale:n=>(Xp(n)+Jp(n))/2,rotateX:n=>Ac(Nn(Math.atan2(n[6],n[5]))),rotateY:n=>Ac(Nn(Math.atan2(-n[2],n[0]))),rotateZ:Yp,rotate:Yp,skewX:n=>Nn(Math.atan(n[4])),skewY:n=>Nn(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Dc(n){return n.includes("scale")?1:0}function Mc(n,i){if(!n||n==="none")return Dc(i);const r=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(r)s=Z1,c=r;else{const h=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=J1,c=h}if(!c)return Dc(i);const f=s[i],d=c[1].split(",").map(F1);return typeof f=="function"?f(d):d[f]}const K1=(n,i)=>{const{transform:r="none"}=getComputedStyle(n);return Mc(r,i)};function F1(n){return parseFloat(n.trim())}const qo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],No=new Set(qo),Zp=n=>n===zo||n===ee,W1=new Set(["x","y","z"]),$1=qo.filter(n=>!W1.has(n));function I1(n){const i=[];return $1.forEach(r=>{const s=n.getValue(r);s!==void 0&&(i.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),i}const nn={width:({x:n},{paddingLeft:i="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(i)-parseFloat(r),height:({y:n},{paddingTop:i="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(i)-parseFloat(r),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Mc(i,"x"),y:(n,{transform:i})=>Mc(i,"y")};nn.translateX=nn.x;nn.translateY=nn.y;const On=new Set;let Cc=!1,zc=!1,qc=!1;function Uv(){if(zc){const n=Array.from(On).filter(s=>s.needsMeasurement),i=new Set(n.map(s=>s.element)),r=new Map;i.forEach(s=>{const c=I1(s);c.length&&(r.set(s,c),s.render())}),n.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=r.get(s);c&&c.forEach(([f,d])=>{var h;(h=s.getValue(f))==null||h.set(d)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}zc=!1,Cc=!1,On.forEach(n=>n.complete(qc)),On.clear()}function Hv(){On.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(zc=!0)})}function eT(){qc=!0,Hv(),Uv(),qc=!1}class ld{constructor(i,r,s,c,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=s,this.motionValue=c,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(On.add(this),Cc||(Cc=!0,Oe.read(Hv),Oe.resolveKeyframes(Uv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:s,motionValue:c}=this;if(i[0]===null){const f=c==null?void 0:c.get(),d=i[i.length-1];if(f!==void 0)i[0]=f;else if(s&&r){const h=s.readValue(r,d);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=d),c&&f===void 0&&c.set(i[0])}X1(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),On.delete(this)}cancel(){this.state==="scheduled"&&(On.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const tT=n=>n.startsWith("--");function aT(n,i,r){tT(i)?n.style.setProperty(i,r):n.style[i]=r}const nT={};function Pv(n,i){const r=hv(n);return()=>nT[i]??r()}const oT=Pv(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Qv=Pv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),zi=([n,i,r,s])=>`cubic-bezier(${n}, ${i}, ${r}, ${s})`,Kp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zi([0,.65,.55,1]),circOut:zi([.55,0,1,.45]),backIn:zi([.31,.01,.66,-.59]),backOut:zi([.33,1.53,.69,.99])};function Gv(n,i){if(n)return typeof n=="function"?Qv()?Bv(n,i):"ease-out":Dv(n)?zi(n):Array.isArray(n)?n.map(r=>Gv(r,i)||Kp.easeOut):Kp[n]}function iT(n,i,r,{delay:s=0,duration:c=300,repeat:f=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const y={[i]:r};p&&(y.offset=p);const b=Gv(h,c);Array.isArray(b)&&(y.easing=b);const T={delay:s,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return g&&(T.pseudoElement=g),n.animate(y,T)}function kv(n){return typeof n=="function"&&"applyToOptions"in n}function sT({type:n,...i}){return kv(n)&&Qv()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class Yv extends sd{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:r,name:s,keyframes:c,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=i;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=i,Fc(typeof i.type!="string");const g=sT(i);this.animation=iT(r,s,c,g,f),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const y=id(c,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(y):aT(r,s,y),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,r;(r=(i=this.animation).finish)==null||r.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var r,s,c;const i=(r=this.options)==null?void 0:r.element;!this.isPseudoElement&&(i!=null&&i.isConnected)&&((c=(s=this.animation).commitStyles)==null||c.call(s))}get duration(){var r,s;const i=((s=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:s.call(r).duration)||0;return Gt(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Gt(i)}get time(){return Gt(Number(this.animation.currentTime)||0)}set time(i){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ft(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&oT()?(this.animation.timeline=i,kt):r(this)}}const Xv={anticipate:Tv,backInOut:Sv,circInOut:Ev};function rT(n){return n in Xv}function lT(n){typeof n.ease=="string"&&rT(n.ease)&&(n.ease=Xv[n.ease])}const ic=10;class uT extends Yv{constructor(i){lT(i),Lv(i),super(i),i.startTime!==void 0&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:r,onUpdate:s,onComplete:c,element:f,...d}=this.options;if(!r)return;if(i!==void 0){r.set(i);return}const h=new rd({...d,autoplay:!1}),p=Math.max(ic,mt.now()-this.startTime),g=oa(0,ic,p-ic);r.setWithVelocity(h.sample(Math.max(0,p-g)).value,h.sample(p).value,g),h.stop()}}const Fp=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Wt.test(n)||n==="0")&&!n.startsWith("url("));function cT(n){const i=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==i)return!0}function dT(n,i,r,s){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=Fp(c,i),h=Fp(f,i);return!d||!h?!1:cT(n)||(r==="spring"||kv(r))&&s}function Nc(n){n.duration=0,n.type="keyframes"}const mT=new Set(["opacity","clipPath","filter","transform"]),fT=hv(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function hT(n){var y;const{motionValue:i,name:r,repeatDelay:s,repeatType:c,damping:f,type:d}=n;if(!(((y=i==null?void 0:i.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=i.owner.getProps();return fT()&&r&&mT.has(r)&&(r!=="transform"||!g)&&!p&&!s&&c!=="mirror"&&f!==0&&d!=="inertia"}const pT=40;class gT extends sd{constructor({autoplay:i=!0,delay:r=0,type:s="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:y,...b}){var O;super(),this.stop=()=>{var L,U;this._animation&&(this._animation.stop(),(L=this.stopTimeline)==null||L.call(this)),(U=this.keyframeResolver)==null||U.cancel()},this.createdAt=mt.now();const T={autoplay:i,delay:r,type:s,repeat:c,repeatDelay:f,repeatType:d,name:p,motionValue:g,element:y,...b},z=(y==null?void 0:y.KeyframeResolver)||ld;this.keyframeResolver=new z(h,(L,U,H)=>this.onKeyframesResolved(L,U,T,!H),p,g,y),(O=this.keyframeResolver)==null||O.scheduleResolve()}onKeyframesResolved(i,r,s,c){var U,H;this.keyframeResolver=void 0;const{name:f,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:y}=s;this.resolvedAt=mt.now(),dT(i,f,d,h)||((Da.instantAnimations||!p)&&(y==null||y(id(i,s,r))),i[0]=i[i.length-1],Nc(s),s.repeat=0);const T={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>pT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...s,keyframes:i},z=!g&&hT(T),O=(H=(U=T.motionValue)==null?void 0:U.owner)==null?void 0:H.current,L=z?new uT({...T,element:O}):new rd(T);L.finished.then(()=>{this.notifyFinished()}).catch(kt),this.pendingTimeline&&(this.stopTimeline=L.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=L}get finished(){return this._animation?this.animation.finished:this._finished}then(i,r){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),eT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}function Jv(n,i,r,s=0,c=1){const f=Array.from(n).sort((g,y)=>g.sortNodePosition(y)).indexOf(i),d=n.size,h=(d-1)*s;return typeof r=="function"?r(f,d):c===1?f*s:h-f*s}const vT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yT(n){const i=vT.exec(n);if(!i)return[,];const[,r,s,c]=i;return[`--${r??s}`,c]}function Zv(n,i,r=1){const[s,c]=yT(n);if(!s)return;const f=window.getComputedStyle(i).getPropertyValue(s);if(f){const d=f.trim();return dv(d)?parseFloat(d):d}return ed(c)?Zv(c,i,r+1):c}const bT={type:"spring",stiffness:500,damping:25,restSpeed:10},ST=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),TT={type:"keyframes",duration:.8},xT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ET=(n,{keyframes:i})=>i.length>2?TT:No.has(n)?n.startsWith("scale")?ST(i[1]):bT:xT,AT=n=>n!==null;function DT(n,{repeat:i,repeatType:r="loop"},s){const c=n.filter(AT),f=i&&r!=="loop"&&i%2===1?0:c.length-1;return c[f]}function Kv(n,i){if(n!=null&&n.inherit&&i){const{inherit:r,...s}=n;return{...i,...s}}return n}function ud(n,i){const r=(n==null?void 0:n[i])??(n==null?void 0:n.default)??n;return r!==n?Kv(r,n):r}function MT({when:n,delay:i,delayChildren:r,staggerChildren:s,staggerDirection:c,repeat:f,repeatType:d,repeatDelay:h,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const cd=(n,i,r,s={},c,f)=>d=>{const h=ud(s,n)||{},p=h.delay||s.delay||0;let{elapsed:g=0}=s;g=g-Ft(p);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...h,delay:-g,onUpdate:T=>{i.set(T),h.onUpdate&&h.onUpdate(T)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:n,motionValue:i,element:f?void 0:c};MT(h)||Object.assign(y,ET(n,y)),y.duration&&(y.duration=Ft(y.duration)),y.repeatDelay&&(y.repeatDelay=Ft(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Nc(y),y.delay===0&&(b=!0)),(Da.instantAnimations||Da.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(b=!0,Nc(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,b&&!f&&i.get()!==void 0){const T=DT(y.keyframes,h);if(T!==void 0){Oe.update(()=>{y.onUpdate(T),y.onComplete()});return}}return h.isSync?new rd(y):new gT(y)};function Wp(n){const i=[{},{}];return n==null||n.values.forEach((r,s)=>{i[0][s]=r.get(),i[1][s]=r.getVelocity()}),i}function dd(n,i,r,s){if(typeof i=="function"){const[c,f]=Wp(s);i=i(r!==void 0?r:n.custom,c,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,f]=Wp(s);i=i(r!==void 0?r:n.custom,c,f)}return i}function Do(n,i,r){const s=n.getProps();return dd(s,i,r!==void 0?r:s.custom,n)}const Fv=new Set(["width","height","top","left","right","bottom",...qo]),$p=30,CT=n=>!isNaN(parseFloat(n));class zT{constructor(i,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var f;const c=mt.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=mt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=CT(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new Wc);const s=this.events[i].add(r);return i==="change"?()=>{s(),Oe.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=mt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>$p)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,$p);return pv(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,r;(i=this.dependents)==null||i.clear(),(r=this.events.destroy)==null||r.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Co(n,i){return new zT(n,i)}const Oc=n=>Array.isArray(n);function qT(n,i,r){n.hasValue(i)?n.getValue(i).set(r):n.addValue(i,Co(r))}function NT(n){return Oc(n)?n[n.length-1]||0:n}function OT(n,i){const r=Do(n,i);let{transitionEnd:s={},transition:c={},...f}=r||{};f={...f,...s};for(const d in f){const h=NT(f[d]);qT(n,d,h)}}const ut=n=>!!(n&&n.getVelocity);function jT(n){return!!(ut(n)&&n.add)}function jc(n,i){const r=n.getValue("willChange");if(jT(r))return r.add(i);if(!r&&Da.WillChange){const s=new Da.WillChange("auto");n.addValue("willChange",s),s.add(i)}}function md(n){return n.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const wT="framerAppearId",Wv="data-"+md(wT);function $v(n){return n.props[Wv]}function RT({protectedKeys:n,needsAnimating:i},r){const s=n.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,s}function Iv(n,i,{delay:r=0,transitionOverride:s,type:c}={}){let{transition:f,transitionEnd:d,...h}=i;const p=n.getDefaultTransition();f=f?Kv(f,p):p;const g=f==null?void 0:f.reduceMotion;s&&(f=s);const y=[],b=c&&n.animationState&&n.animationState.getState()[c];for(const T in h){const z=n.getValue(T,n.latestValues[T]??null),O=h[T];if(O===void 0||b&&RT(b,T))continue;const L={delay:r,...ud(f||{},T)},U=z.get();if(U!==void 0&&!z.isAnimating&&!Array.isArray(O)&&O===U&&!L.velocity)continue;let H=!1;if(window.MotionHandoffAnimation){const Z=$v(n);if(Z){const Y=window.MotionHandoffAnimation(Z,T,Oe);Y!==null&&(L.startTime=Y,H=!0)}}jc(n,T);const X=g??n.shouldReduceMotion;z.start(cd(T,z,O,X&&Fv.has(T)?{type:!1}:L,n,H));const Q=z.animation;Q&&y.push(Q)}if(d){const T=()=>Oe.update(()=>{d&&OT(n,d)});y.length?Promise.all(y).then(T):T()}return y}function wc(n,i,r={}){var p;const s=Do(n,i,r.type==="exit"?(p=n.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(c=r.transitionOverride);const f=s?()=>Promise.all(Iv(n,s,r)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:T}=c;return VT(n,i,g,y,b,T,r)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,y]=h==="beforeChildren"?[f,d]:[d,f];return g().then(()=>y())}else return Promise.all([f(),d(r.delay)])}function VT(n,i,r=0,s=0,c=0,f=1,d){const h=[];for(const p of n.variantChildren)p.notify("AnimationStart",i),h.push(wc(p,i,{...d,delay:r+(typeof s=="function"?0:s)+Jv(n.variantChildren,p,s,c,f)}).then(()=>p.notify("AnimationComplete",i)));return Promise.all(h)}function BT(n,i,r={}){n.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(f=>wc(n,f,r));s=Promise.all(c)}else if(typeof i=="string")s=wc(n,i,r);else{const c=typeof i=="function"?Do(n,i,r.custom):i;s=Promise.all(Iv(n,c,r))}return s.then(()=>{n.notify("AnimationComplete",i)})}const _T={test:n=>n==="auto",parse:n=>n},ey=n=>i=>i.test(n),ty=[zo,ee,na,tn,m1,d1,_T],Ip=n=>ty.find(ey(n));function LT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||fv(n):!0}const UT=new Set(["brightness","contrast","saturate","opacity"]);function HT(n){const[i,r]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[s]=r.match(td)||[];if(!s)return n;const c=r.replace(s,"");let f=UT.has(i)?1:0;return s!==r&&(f*=100),i+"("+f+c+")"}const PT=/\b([a-z-]*)\(.*?\)/gu,Rc={...Wt,getAnimatableNone:n=>{const i=n.match(PT);return i?i.map(HT).join(" "):n}},Vc={...Wt,getAnimatableNone:n=>{const i=Wt.parse(n);return Wt.createTransformer(n)(i.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},eg={...zo,transform:Math.round},QT={rotate:tn,rotateX:tn,rotateY:tn,rotateZ:tn,scale:sr,scaleX:sr,scaleY:sr,scaleZ:sr,skew:tn,skewX:tn,skewY:tn,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Ri,originX:Hp,originY:Hp,originZ:ee},fd={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,inset:ee,insetBlock:ee,insetBlockStart:ee,insetBlockEnd:ee,insetInline:ee,insetInlineStart:ee,insetInlineEnd:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,paddingBlock:ee,paddingBlockStart:ee,paddingBlockEnd:ee,paddingInline:ee,paddingInlineStart:ee,paddingInlineEnd:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,marginBlock:ee,marginBlockStart:ee,marginBlockEnd:ee,marginInline:ee,marginInlineStart:ee,marginInlineEnd:ee,fontSize:ee,backgroundPositionX:ee,backgroundPositionY:ee,...QT,zIndex:eg,fillOpacity:Ri,strokeOpacity:Ri,numOctaves:eg},GT={...fd,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:Rc,WebkitFilter:Rc,mask:Vc,WebkitMask:Vc},ay=n=>GT[n],kT=new Set([Rc,Vc]);function ny(n,i){let r=ay(n);return kT.has(r)||(r=Wt),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const YT=new Set(["auto","none","0"]);function XT(n,i,r){let s=0,c;for(;s<n.length&&!c;){const f=n[s];typeof f=="string"&&!YT.has(f)&&Vi(f).values.length&&(c=n[s]),s++}if(c&&r)for(const f of i)n[f]=ny(r,c)}class JT extends ld{constructor(i,r,s,c,f){super(i,r,s,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let y=0;y<i.length;y++){let b=i[y];if(typeof b=="string"&&(b=b.trim(),ed(b))){const T=Zv(b,r.current);T!==void 0&&(i[y]=T),y===i.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Fv.has(s)||i.length!==2)return;const[c,f]=i,d=Ip(c),h=Ip(f),p=Up(c),g=Up(f);if(p!==g&&nn[s]){this.needsMeasurement=!0;return}if(d!==h)if(Zp(d)&&Zp(h))for(let y=0;y<i.length;y++){const b=i[y];typeof b=="string"&&(i[y]=parseFloat(b))}else nn[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,s=[];for(let c=0;c<i.length;c++)(i[c]===null||LT(i[c]))&&s.push(c);s.length&&XT(i,s,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=nn[s](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){var h;const{element:i,name:r,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const c=i.getValue(r);c&&c.jump(this.measuredOrigin,!1);const f=s.length-1,d=s[f];s[f]=nn[r](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{i.getValue(p).set(g)}),this.resolveNoneKeyframes()}}const ZT=new Set(["opacity","clipPath","filter","transform"]);function oy(n,i,r){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let s=document;const c=(r==null?void 0:r[n])??s.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n).filter(s=>s!=null)}const iy=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function Bc(n){return mv(n)&&"offsetHeight"in n}const{schedule:hd}=Mv(queueMicrotask,!1),Kt={x:!1,y:!1};function sy(){return Kt.x||Kt.y}function KT(n){return n==="x"||n==="y"?Kt[n]?null:(Kt[n]=!0,()=>{Kt[n]=!1}):Kt.x||Kt.y?null:(Kt.x=Kt.y=!0,()=>{Kt.x=Kt.y=!1})}function ry(n,i){const r=oy(n),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[r,c,()=>s.abort()]}function FT(n){return!(n.pointerType==="touch"||sy())}function WT(n,i,r={}){const[s,c,f]=ry(n,r);return s.forEach(d=>{let h=!1,p=!1,g;const y=()=>{d.removeEventListener("pointerleave",O)},b=U=>{g&&(g(U),g=void 0),y()},T=U=>{h=!1,window.removeEventListener("pointerup",T),window.removeEventListener("pointercancel",T),p&&(p=!1,b(U))},z=()=>{h=!0,window.addEventListener("pointerup",T,c),window.addEventListener("pointercancel",T,c)},O=U=>{if(U.pointerType!=="touch"){if(h){p=!0;return}b(U)}},L=U=>{if(!FT(U))return;p=!1;const H=i(d,U);typeof H=="function"&&(g=H,d.addEventListener("pointerleave",O,c))};d.addEventListener("pointerenter",L,c),d.addEventListener("pointerdown",z,c)}),f}const ly=(n,i)=>i?n===i?!0:ly(n,i.parentElement):!1,pd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,$T=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function IT(n){return $T.has(n.tagName)||n.isContentEditable===!0}const ex=new Set(["INPUT","SELECT","TEXTAREA"]);function tx(n){return ex.has(n.tagName)||n.isContentEditable===!0}const mr=new WeakSet;function tg(n){return i=>{i.key==="Enter"&&n(i)}}function sc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const ax=(n,i)=>{const r=n.currentTarget;if(!r)return;const s=tg(()=>{if(mr.has(r))return;sc(r,"down");const c=tg(()=>{sc(r,"up")}),f=()=>sc(r,"cancel");r.addEventListener("keyup",c,i),r.addEventListener("blur",f,i)});r.addEventListener("keydown",s,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),i)};function ag(n){return pd(n)&&!sy()}const ng=new WeakSet;function nx(n,i,r={}){const[s,c,f]=ry(n,r),d=h=>{const p=h.currentTarget;if(!ag(h)||ng.has(h))return;mr.add(p),r.stopPropagation&&ng.add(h);const g=i(p,h),y=(z,O)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",T),mr.has(p)&&mr.delete(p),ag(z)&&typeof g=="function"&&g(z,{success:O})},b=z=>{y(z,p===window||p===document||r.useGlobalTarget||ly(p,z.target))},T=z=>{y(z,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",T,c)};return s.forEach(h=>{(r.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),Bc(h)&&(h.addEventListener("focus",g=>ax(g,c)),!IT(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),f}function gd(n){return mv(n)&&"ownerSVGElement"in n}const fr=new WeakMap;let an;const uy=(n,i,r)=>(s,c)=>c&&c[0]?c[0][n+"Size"]:gd(s)&&"getBBox"in s?s.getBBox()[i]:s[r],ox=uy("inline","width","offsetWidth"),ix=uy("block","height","offsetHeight");function sx({target:n,borderBoxSize:i}){var r;(r=fr.get(n))==null||r.forEach(s=>{s(n,{get width(){return ox(n,i)},get height(){return ix(n,i)}})})}function rx(n){n.forEach(sx)}function lx(){typeof ResizeObserver>"u"||(an=new ResizeObserver(rx))}function ux(n,i){an||lx();const r=oy(n);return r.forEach(s=>{let c=fr.get(s);c||(c=new Set,fr.set(s,c)),c.add(i),an==null||an.observe(s)}),()=>{r.forEach(s=>{const c=fr.get(s);c==null||c.delete(i),c!=null&&c.size||an==null||an.unobserve(s)})}}const hr=new Set;let To;function cx(){To=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};hr.forEach(i=>i(n))},window.addEventListener("resize",To)}function dx(n){return hr.add(n),To||cx(),()=>{hr.delete(n),!hr.size&&typeof To=="function"&&(window.removeEventListener("resize",To),To=void 0)}}function og(n,i){return typeof n=="function"?dx(n):ux(n,i)}function mx(n){return gd(n)&&n.tagName==="svg"}const fx=[...ty,Ze,Wt],hx=n=>fx.find(ey(n)),ig=()=>({translate:0,scale:1,origin:0,originPoint:0}),xo=()=>({x:ig(),y:ig()}),sg=()=>({min:0,max:0}),We=()=>({x:sg(),y:sg()}),px=new WeakMap;function zr(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Bi(n){return typeof n=="string"||Array.isArray(n)}const vd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],yd=["initial",...vd];function qr(n){return zr(n.animate)||yd.some(i=>Bi(n[i]))}function cy(n){return!!(qr(n)||n.variants)}function gx(n,i,r){for(const s in i){const c=i[s],f=r[s];if(ut(c))n.addValue(s,c);else if(ut(f))n.addValue(s,Co(c,{owner:n}));else if(f!==c)if(n.hasValue(s)){const d=n.getValue(s);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(s);n.addValue(s,Co(d!==void 0?d:c,{owner:n}))}}for(const s in r)i[s]===void 0&&n.removeValue(s);return i}const _c={current:null},dy={current:!1},vx=typeof window<"u";function yx(){if(dy.current=!0,!!vx)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>_c.current=n.matches;n.addEventListener("change",i),i()}else _c.current=!1}const rg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Tr={};function my(n){Tr=n}function bx(){return Tr}class Sx{scrapeMotionValuesFromProps(i,r,s){return{}}constructor({parent:i,props:r,presenceContext:s,reducedMotionConfig:c,skipAnimations:f,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ld,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const z=mt.now();this.renderScheduledAt<z&&(this.renderScheduledAt=z,Oe.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=r.initial?{...g}:{},this.renderState=y,this.parent=i,this.props=r,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=f,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=qr(r),this.isVariantNode=cy(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...T}=this.scrapeMotionValuesFromProps(r,{},this);for(const z in T){const O=T[z];g[z]!==void 0&&ut(O)&&O.set(g[z])}}mount(i){var r,s;if(this.hasBeenMounted)for(const c in this.initialValues)(r=this.values.get(c))==null||r.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=i,px.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,f)=>this.bindToMotionValue(f,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(dy.current||yx(),this.shouldReduceMotion=_c.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var i;this.projection&&this.projection.unmount(),on(this.notifyUpdate),on(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(i=this.parent)==null||i.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const s=this.features[r];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,r){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),r.accelerate&&ZT.has(i)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:y}=r.accelerate,b=new Yv({element:this.current,name:i,keyframes:h,times:p,ease:g,duration:Ft(y)}),T=d(b);this.valueSubscriptions.set(i,()=>{T(),b.cancel()});return}const s=No.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=r.on("change",d=>{this.latestValues[i]=d,this.props.onUpdate&&Oe.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{c(),f&&f(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Tr){const r=Tr[i];if(!r)continue;const{isEnabled:s,Feature:c}=r;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):We()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<rg.length;s++){const c=rg[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,d=i[f];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=gx(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const s=this.values.get(i);r!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&r!==void 0&&(s=Co(r===null?void 0:r,{owner:this}),this.addValue(i,s)),s}readValue(i,r){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(dv(s)||fv(s))?s=parseFloat(s):!hx(s)&&Wt.test(r)&&(s=ny(i,r)),this.setBaseTarget(i,ut(s)?s.get():s)),ut(s)?s.get():s}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){var f;const{initial:r}=this.props;let s;if(typeof r=="string"||typeof r=="object"){const d=dd(this.props,r,(f=this.presenceContext)==null?void 0:f.custom);d&&(s=d[i])}if(r&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!ut(c)?c:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new Wc),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}scheduleRenderMicrotask(){hd.render(this.render)}}class fy extends Sx{constructor(){super(...arguments),this.KeyframeResolver=JT}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){const s=i.style;return s?s[r]:void 0}removeValueFromRenderState(i,{vars:r,style:s}){delete r[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;ut(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}class sn{constructor(i){this.isMounted=!1,this.node=i}update(){}}function hy({top:n,left:i,right:r,bottom:s}){return{x:{min:i,max:r},y:{min:n,max:s}}}function Tx({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function xx(n,i){if(!i)return n;const r=i({x:n.left,y:n.top}),s=i({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function rc(n){return n===void 0||n===1}function Lc({scale:n,scaleX:i,scaleY:r}){return!rc(n)||!rc(i)||!rc(r)}function zn(n){return Lc(n)||py(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function py(n){return lg(n.x)||lg(n.y)}function lg(n){return n&&n!=="0%"}function xr(n,i,r){const s=n-r,c=i*s;return r+c}function ug(n,i,r,s,c){return c!==void 0&&(n=xr(n,c,s)),xr(n,r,s)+i}function Uc(n,i=0,r=1,s,c){n.min=ug(n.min,i,r,s,c),n.max=ug(n.max,i,r,s,c)}function gy(n,{x:i,y:r}){Uc(n.x,i.translate,i.scale,i.originPoint),Uc(n.y,r.translate,r.scale,r.originPoint)}const cg=.999999999999,dg=1.0000000000001;function Ex(n,i,r,s=!1){const c=r.length;if(!c)return;i.x=i.y=1;let f,d;for(let h=0;h<c;h++){f=r[h],d=f.projectionDelta;const{visualElement:p}=f.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Ao(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,gy(n,d)),s&&zn(f.latestValues)&&Ao(n,f.latestValues))}i.x<dg&&i.x>cg&&(i.x=1),i.y<dg&&i.y>cg&&(i.y=1)}function Eo(n,i){n.min=n.min+i,n.max=n.max+i}function mg(n,i,r,s,c=.5){const f=_e(n.min,n.max,c);Uc(n,i,r,f,s)}function Ao(n,i){mg(n.x,i.x,i.scaleX,i.scale,i.originX),mg(n.y,i.y,i.scaleY,i.scale,i.originY)}function vy(n,i){return hy(xx(n.getBoundingClientRect(),i))}function Ax(n,i,r){const s=vy(n,r),{scroll:c}=i;return c&&(Eo(s.x,c.offset.x),Eo(s.y,c.offset.y)),s}const Dx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Mx=qo.length;function Cx(n,i,r){let s="",c=!0;for(let f=0;f<Mx;f++){const d=qo[f],h=n[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||r){const g=iy(h,fd[d]);if(!p){c=!1;const y=Dx[d]||d;s+=`${y}(${g}) `}r&&(i[d]=g)}}return s=s.trim(),r?s=r(i,c?"":s):c&&(s="none"),s}function bd(n,i,r){const{style:s,vars:c,transformOrigin:f}=n;let d=!1,h=!1;for(const p in i){const g=i[p];if(No.has(p)){d=!0;continue}else if(zv(p)){c[p]=g;continue}else{const y=iy(g,fd[p]);p.startsWith("origin")?(h=!0,f[p]=y):s[p]=y}}if(i.transform||(d||r?s.transform=Cx(i,n.transform,r):s.transform&&(s.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:y=0}=f;s.transformOrigin=`${p} ${g} ${y}`}}function yy(n,{style:i,vars:r},s,c){const f=n.style;let d;for(d in i)f[d]=i[d];c==null||c.applyProjectionStyles(f,s);for(d in r)f.setProperty(d,r[d])}function fg(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Di={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(ee.test(n))n=parseFloat(n);else return n;const r=fg(n,i.target.x),s=fg(n,i.target.y);return`${r}% ${s}%`}},zx={correct:(n,{treeScale:i,projectionDelta:r})=>{const s=n,c=Wt.parse(n);if(c.length>5)return s;const f=Wt.createTransformer(n),d=typeof c[0]!="number"?1:0,h=r.x.scale*i.x,p=r.y.scale*i.y;c[0+d]/=h,c[1+d]/=p;const g=_e(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),f(c)}},Hc={borderRadius:{...Di,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Di,borderTopRightRadius:Di,borderBottomLeftRadius:Di,borderBottomRightRadius:Di,boxShadow:zx};function by(n,{layout:i,layoutId:r}){return No.has(n)||n.startsWith("origin")||(i||r!==void 0)&&(!!Hc[n]||n==="opacity")}function Sd(n,i,r){var d;const s=n.style,c=i==null?void 0:i.style,f={};if(!s)return f;for(const h in s)(ut(s[h])||c&&ut(c[h])||by(h,n)||((d=r==null?void 0:r.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(f[h]=s[h]);return f}function qx(n){return window.getComputedStyle(n)}class Nx extends fy{constructor(){super(...arguments),this.type="html",this.renderInstance=yy}readValueFromInstance(i,r){var s;if(No.has(r))return(s=this.projection)!=null&&s.isProjecting?Dc(r):K1(i,r);{const c=qx(i),f=(zv(r)?c.getPropertyValue(r):c[r])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(i,{transformPagePoint:r}){return vy(i,r)}build(i,r,s){bd(i,r,s.transformTemplate)}scrapeMotionValuesFromProps(i,r,s){return Sd(i,r,s)}}const Ox={offset:"stroke-dashoffset",array:"stroke-dasharray"},jx={offset:"strokeDashoffset",array:"strokeDasharray"};function wx(n,i,r=1,s=0,c=!0){n.pathLength=1;const f=c?Ox:jx;n[f.offset]=`${-s}`,n[f.array]=`${i} ${r}`}const Rx=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Sy(n,{attrX:i,attrY:r,attrScale:s,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...h},p,g,y){if(bd(n,h,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:T}=n;b.transform&&(T.transform=b.transform,delete b.transform),(T.transform||b.transformOrigin)&&(T.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),T.transform&&(T.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox);for(const z of Rx)b[z]!==void 0&&(T[z]=b[z],delete b[z]);i!==void 0&&(b.x=i),r!==void 0&&(b.y=r),s!==void 0&&(b.scale=s),c!==void 0&&wx(b,c,f,d,!1)}const Ty=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),xy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Vx(n,i,r,s){yy(n,i,void 0,s);for(const c in i.attrs)n.setAttribute(Ty.has(c)?c:md(c),i.attrs[c])}function Ey(n,i,r){const s=Sd(n,i,r);for(const c in n)if(ut(n[c])||ut(i[c])){const f=qo.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[f]=n[c]}return s}class Bx extends fy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=We}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(No.has(r)){const s=ay(r);return s&&s.default||0}return r=Ty.has(r)?r:md(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,s){return Ey(i,r,s)}build(i,r,s){Sy(i,r,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,r,s,c){Vx(i,r,s,c)}mount(i){this.isSVGTag=xy(i.tagName),super.mount(i)}}const _x=yd.length;function Ay(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?Ay(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const i={};for(let r=0;r<_x;r++){const s=yd[r],c=n.props[s];(Bi(c)||c===!1)&&(i[s]=c)}return i}function Dy(n,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==n.length)return!1;for(let s=0;s<r;s++)if(i[s]!==n[s])return!1;return!0}const Lx=[...vd].reverse(),Ux=vd.length;function Hx(n){return i=>Promise.all(i.map(({animation:r,options:s})=>BT(n,r,s)))}function Px(n){let i=Hx(n),r=hg(),s=!0;const c=p=>(g,y)=>{var T;const b=Do(n,y,p==="exit"?(T=n.presenceContext)==null?void 0:T.custom:void 0);if(b){const{transition:z,transitionEnd:O,...L}=b;g={...g,...L,...O}}return g};function f(p){i=p(n)}function d(p){const{props:g}=n,y=Ay(n.parent)||{},b=[],T=new Set;let z={},O=1/0;for(let U=0;U<Ux;U++){const H=Lx[U],X=r[H],Q=g[H]!==void 0?g[H]:y[H],Z=Bi(Q),Y=H===p?X.isActive:null;Y===!1&&(O=U);let oe=Q===y[H]&&Q!==g[H]&&Z;if(oe&&s&&n.manuallyAnimateOnMount&&(oe=!1),X.protectedKeys={...z},!X.isActive&&Y===null||!Q&&!X.prevProp||zr(Q)||typeof Q=="boolean")continue;if(H==="exit"&&X.isActive&&Y!==!0){X.prevResolvedValues&&(z={...z,...X.prevResolvedValues});continue}const F=Qx(X.prevProp,Q);let _=F||H===p&&X.isActive&&!oe&&Z||U>O&&Z,ie=!1;const Ae=Array.isArray(Q)?Q:[Q];let Ve=Ae.reduce(c(H),{});Y===!1&&(Ve={});const{prevResolvedValues:je={}}=X,ht={...je,...Ve},rt=P=>{_=!0,T.has(P)&&(ie=!0,T.delete(P)),X.needsAnimating[P]=!0;const W=n.getValue(P);W&&(W.liveStyle=!1)};for(const P in ht){const W=Ve[P],me=je[P];if(z.hasOwnProperty(P))continue;let k=!1;Oc(W)&&Oc(me)?k=!Dy(W,me):k=W!==me,k?W!=null?rt(P):T.add(P):W!==void 0&&T.has(P)?rt(P):X.protectedKeys[P]=!0}X.prevProp=Q,X.prevResolvedValues=Ve,X.isActive&&(z={...z,...Ve}),s&&n.blockInitialAnimation&&(_=!1);const Pe=oe&&F;_&&(!Pe||ie)&&b.push(...Ae.map(P=>{const W={type:H};if(typeof P=="string"&&s&&!Pe&&n.manuallyAnimateOnMount&&n.parent){const{parent:me}=n,k=Do(me,P);if(me.enteringChildren&&k){const{delayChildren:A}=k.transition||{};W.delay=Jv(me.enteringChildren,n,A)}}return{animation:P,options:W}}))}if(T.size){const U={};if(typeof g.initial!="boolean"){const H=Do(n,Array.isArray(g.initial)?g.initial[0]:g.initial);H&&H.transition&&(U.transition=H.transition)}T.forEach(H=>{const X=n.getBaseTarget(H),Q=n.getValue(H);Q&&(Q.liveStyle=!0),U[H]=X??null}),b.push({animation:U})}let L=!!b.length;return s&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(L=!1),s=!1,L?i(b):Promise.resolve()}function h(p,g){var b;if(r[p].isActive===g)return Promise.resolve();(b=n.variantChildren)==null||b.forEach(T=>{var z;return(z=T.animationState)==null?void 0:z.setActive(p,g)}),r[p].isActive=g;const y=d(p);for(const T in r)r[T].protectedKeys={};return y}return{animateChanges:d,setActive:h,setAnimateFunction:f,getState:()=>r,reset:()=>{r=hg()}}}function Qx(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!Dy(i,n):!1}function Mn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hg(){return{animate:Mn(!0),whileInView:Mn(),whileHover:Mn(),whileTap:Mn(),whileDrag:Mn(),whileFocus:Mn(),exit:Mn()}}function pg(n,i){n.min=i.min,n.max=i.max}function Zt(n,i){pg(n.x,i.x),pg(n.y,i.y)}function gg(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}const My=1e-4,Gx=1-My,kx=1+My,Cy=.01,Yx=0-Cy,Xx=0+Cy;function ft(n){return n.max-n.min}function Jx(n,i,r){return Math.abs(n-i)<=r}function vg(n,i,r,s=.5){n.origin=s,n.originPoint=_e(i.min,i.max,n.origin),n.scale=ft(r)/ft(i),n.translate=_e(r.min,r.max,n.origin)-n.originPoint,(n.scale>=Gx&&n.scale<=kx||isNaN(n.scale))&&(n.scale=1),(n.translate>=Yx&&n.translate<=Xx||isNaN(n.translate))&&(n.translate=0)}function Oi(n,i,r,s){vg(n.x,i.x,r.x,s?s.originX:void 0),vg(n.y,i.y,r.y,s?s.originY:void 0)}function yg(n,i,r){n.min=r.min+i.min,n.max=n.min+ft(i)}function Zx(n,i,r){yg(n.x,i.x,r.x),yg(n.y,i.y,r.y)}function bg(n,i,r){n.min=i.min-r.min,n.max=n.min+ft(i)}function Er(n,i,r){bg(n.x,i.x,r.x),bg(n.y,i.y,r.y)}function Sg(n,i,r,s,c){return n-=i,n=xr(n,1/r,s),c!==void 0&&(n=xr(n,1/c,s)),n}function Kx(n,i=0,r=1,s=.5,c,f=n,d=n){if(na.test(i)&&(i=parseFloat(i),i=_e(d.min,d.max,i/100)-d.min),typeof i!="number")return;let h=_e(f.min,f.max,s);n===f&&(h-=i),n.min=Sg(n.min,i,r,h,c),n.max=Sg(n.max,i,r,h,c)}function Tg(n,i,[r,s,c],f,d){Kx(n,i[r],i[s],i[c],i.scale,f,d)}const Fx=["x","scaleX","originX"],Wx=["y","scaleY","originY"];function xg(n,i,r,s){Tg(n.x,i,Fx,r?r.x:void 0,s?s.x:void 0),Tg(n.y,i,Wx,r?r.y:void 0,s?s.y:void 0)}function Eg(n){return n.translate===0&&n.scale===1}function zy(n){return Eg(n.x)&&Eg(n.y)}function Ag(n,i){return n.min===i.min&&n.max===i.max}function $x(n,i){return Ag(n.x,i.x)&&Ag(n.y,i.y)}function Dg(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function qy(n,i){return Dg(n.x,i.x)&&Dg(n.y,i.y)}function Mg(n){return ft(n.x)/ft(n.y)}function Cg(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}function aa(n){return[n("x"),n("y")]}function Ix(n,i,r){let s="";const c=n.x.translate/i.x,f=n.y.translate/i.y,d=(r==null?void 0:r.z)||0;if((c||f||d)&&(s=`translate3d(${c}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:T,skewX:z,skewY:O}=r;g&&(s=`perspective(${g}px) ${s}`),y&&(s+=`rotate(${y}deg) `),b&&(s+=`rotateX(${b}deg) `),T&&(s+=`rotateY(${T}deg) `),z&&(s+=`skewX(${z}deg) `),O&&(s+=`skewY(${O}deg) `)}const h=n.x.scale*i.x,p=n.y.scale*i.y;return(h!==1||p!==1)&&(s+=`scale(${h}, ${p})`),s||"none"}const Ny=["TopLeft","TopRight","BottomLeft","BottomRight"],eE=Ny.length,zg=n=>typeof n=="string"?parseFloat(n):n,qg=n=>typeof n=="number"||ee.test(n);function tE(n,i,r,s,c,f){c?(n.opacity=_e(0,r.opacity??1,aE(s)),n.opacityExit=_e(i.opacity??1,0,nE(s))):f&&(n.opacity=_e(i.opacity??1,r.opacity??1,s));for(let d=0;d<eE;d++){const h=`border${Ny[d]}Radius`;let p=Ng(i,h),g=Ng(r,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||qg(p)===qg(g)?(n[h]=Math.max(_e(zg(p),zg(g),s),0),(na.test(g)||na.test(p))&&(n[h]+="%")):n[h]=g}(i.rotate||r.rotate)&&(n.rotate=_e(i.rotate||0,r.rotate||0,s))}function Ng(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const aE=Oy(0,.5,xv),nE=Oy(.5,.95,kt);function Oy(n,i,r){return s=>s<n?0:s>i?1:r(wi(n,i,s))}function oE(n,i,r){const s=ut(n)?n:Co(n);return s.start(cd("",s,i,r)),s.animation}function _i(n,i,r,s={passive:!0}){return n.addEventListener(i,r,s),()=>n.removeEventListener(i,r)}const iE=(n,i)=>n.depth-i.depth;class sE{constructor(){this.children=[],this.isDirty=!1}add(i){Kc(this.children,i),this.isDirty=!0}remove(i){vr(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(iE),this.isDirty=!1,this.children.forEach(i)}}function rE(n,i){const r=mt.now(),s=({timestamp:c})=>{const f=c-r;f>=i&&(on(s),n(f-i))};return Oe.setup(s,!0),()=>on(s)}function pr(n){return ut(n)?n.get():n}class lE{constructor(){this.members=[]}add(i){Kc(this.members,i);for(let r=this.members.length-1;r>=0;r--){const s=this.members[r];if(s===i||s===this.lead||s===this.prevLead)continue;const c=s.instance;c&&c.isConnected===!1&&s.isPresent!==!1&&!s.snapshot&&vr(this.members,s)}i.scheduleRender()}remove(i){if(vr(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){const r=this.members.findIndex(c=>i===c);if(r===0)return!1;let s;for(let c=r;c>=0;c--){const f=this.members[c],d=f.instance;if(f.isPresent!==!1&&(!d||d.isConnected!==!1)){s=f;break}}return s?(this.promote(s),!0):!1}promote(i,r){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender();const c=s.options.layoutDependency,f=i.options.layoutDependency;if(!(c!==void 0&&f!==void 0&&c===f)){const p=s.instance;p&&p.isConnected===!1&&!s.snapshot||(i.resumeFrom=s,r&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0))}const{crossfade:h}=i.options;h===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:r,resumingFrom:s}=i;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const gr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},lc=["","X","Y","Z"],uE=1e3;let cE=0;function uc(n,i,r,s){const{latestValues:c}=i;c[n]&&(r[n]=c[n],i.setStaticValue(n,0),s&&(s[n]=0))}function jy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const r=$v(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",Oe,!(c||f))}const{parent:s}=n;s&&!s.hasCheckedOptimisedAppear&&jy(s)}function wy({attachResizeListener:n,defaultParent:i,measureScroll:r,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(d={},h=i==null?void 0:i()){this.id=cE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(fE),this.nodes.forEach(vE),this.nodes.forEach(yE),this.nodes.forEach(hE)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new sE)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Wc),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=gd(d)&&!mx(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),n){let y,b=0;const T=()=>this.root.updateBlockedByResize=!1;Oe.read(()=>{b=window.innerWidth}),n(d,()=>{const z=window.innerWidth;z!==b&&(b=z,this.root.updateBlockedByResize=!0,y&&y(),y=rE(T,250),gr.hasAnimatedSinceResize&&(gr.hasAnimatedSinceResize=!1,this.nodes.forEach(wg)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:T,layout:z})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const O=this.options.transition||g.getDefaultTransition()||EE,{onLayoutAnimationStart:L,onLayoutAnimationComplete:U}=g.getProps(),H=!this.targetLayout||!qy(this.targetLayout,z),X=!b&&T;if(this.options.layoutRoot||this.resumeFrom||X||b&&(H||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const Q={...ud(O,"layout"),onPlay:L,onComplete:U};(g.shouldReduceMotion||this.options.layoutRoot)&&(Q.delay=0,Q.type=!1),this.startAnimation(Q),this.setAnimationOrigin(y,X)}else b||wg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=z})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),on(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bE),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&jy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Og);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(jg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(gE),this.nodes.forEach(dE),this.nodes.forEach(mE)):this.nodes.forEach(jg),this.clearAllSnapshots();const h=mt.now();st.delta=oa(0,1e3/60,h-st.timestamp),st.timestamp=h,st.isProcessing=!0,ec.update.process(st),ec.preRender.process(st),ec.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,hd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(pE),this.sharedNodes.forEach(SE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Oe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Oe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ft(this.snapshot.measuredBox.x)&&!ft(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=We(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!zy(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||zn(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),AE(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return We();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(DE))){const{scroll:y}=this.root;y&&(Eo(h.x,y.offset.x),Eo(h.y,y.offset.y))}return h}removeElementScroll(d){var p;const h=We();if(Zt(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:b,options:T}=y;y!==this.root&&b&&T.layoutScroll&&(b.wasRoot&&Zt(h,d),Eo(h.x,b.offset.x),Eo(h.y,b.offset.y))}return h}applyTransform(d,h=!1){const p=We();Zt(p,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ao(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),zn(y.latestValues)&&Ao(p,y.latestValues)}return zn(this.latestValues)&&Ao(p,this.latestValues),p}removeTransform(d){const h=We();Zt(h,d);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!zn(g.latestValues))continue;Lc(g.latestValues)&&g.updateSnapshot();const y=We(),b=g.measurePageBox();Zt(y,b),xg(h,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return zn(this.latestValues)&&xg(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var z;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(z=this.parent)!=null&&z.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=st.timestamp;const T=this.getClosestProjectingParent();T&&this.linkedParentVersion!==T.layoutVersion&&!T.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(T&&T.layout?this.createRelativeTarget(T,this.layout.layoutBox,T.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=We(),this.targetWithTransforms=We()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Zx(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Zt(this.target,this.layout.layoutBox),gy(this.target,this.targetDelta)):Zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,T&&!!T.resumingFrom==!!this.resumingFrom&&!T.options.layoutScroll&&T.target&&this.animationProgress!==1?this.createRelativeTarget(T,this.target,T.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Lc(this.parent.latestValues)||py(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),Er(this.relativeTargetOrigin,h,p),Zt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var O;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(O=this.parent)!=null&&O.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===st.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Zt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,T=this.treeScale.y;Ex(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=We());const{target:z}=d;if(!z){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(gg(this.prevProjectionDelta.x,this.projectionDelta.x),gg(this.prevProjectionDelta.y,this.projectionDelta.y)),Oi(this.projectionDelta,this.layoutCorrected,z,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==T||!Cg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Cg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",z))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xo(),this.projectionDelta=xo(),this.projectionDeltaWithTransform=xo()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},b=xo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const T=We(),z=p?p.source:void 0,O=this.layout?this.layout.source:void 0,L=z!==O,U=this.getStack(),H=!U||U.members.length<=1,X=!!(L&&!H&&this.options.crossfade===!0&&!this.path.some(xE));this.animationProgress=0;let Q;this.mixTargetDelta=Z=>{const Y=Z/1e3;Rg(b.x,d.x,Y),Rg(b.y,d.y,Y),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Er(T,this.layout.layoutBox,this.relativeParent.layout.layoutBox),TE(this.relativeTarget,this.relativeTargetOrigin,T,Y),Q&&$x(this.relativeTarget,Q)&&(this.isProjectionDirty=!1),Q||(Q=We()),Zt(Q,this.relativeTarget)),L&&(this.animationValues=y,tE(y,g,this.latestValues,Y,X,H)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(on(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Oe.update(()=>{gr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Co(0)),this.motionValue.jump(0,!1),this.currentAnimation=oE(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(uE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:y}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&Ry(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||We();const b=ft(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+b;const T=ft(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+T}Zt(h,p),Ao(h,y),Oi(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new lE),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&uc("z",d,g,this.animationValues);for(let y=0;y<lc.length;y++)uc(`rotate${lc[y]}`,d,g,this.animationValues),uc(`skew${lc[y]}`,d,g,this.animationValues);d.render();for(const y in g)d.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=pr(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=pr(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!zn(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=Ix(this.projectionDeltaWithTransform,this.treeScale,y);p&&(b=p(y,b)),d.transform=b;const{x:T,y:z}=this.projectionDelta;d.transformOrigin=`${T.origin*100}% ${z.origin*100}% 0`,g.animationValues?d.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const O in Hc){if(y[O]===void 0)continue;const{correct:L,applyTo:U,isCSSVariable:H}=Hc[O],X=b==="none"?y[O]:L(y[O],g);if(U){const Q=U.length;for(let Z=0;Z<Q;Z++)d[U[Z]]=X}else H?this.options.visualElement.renderState.vars[O]=X:d[O]=X}this.options.layoutId&&(d.pointerEvents=g===this?pr(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Og),this.root.sharedNodes.clear()}}}function dE(n){n.updateLayout()}function mE(n){var r;const i=((r=n.resumeFrom)==null?void 0:r.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:c}=n.layout,{animationType:f}=n.options,d=i.source!==n.layout.source;f==="size"?aa(b=>{const T=d?i.measuredBox[b]:i.layoutBox[b],z=ft(T);T.min=s[b].min,T.max=T.min+z}):Ry(f,i.layoutBox,s)&&aa(b=>{const T=d?i.measuredBox[b]:i.layoutBox[b],z=ft(s[b]);T.max=T.min+z,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+z)});const h=xo();Oi(h,s,i.layoutBox);const p=xo();d?Oi(p,n.applyTransform(c,!0),i.measuredBox):Oi(p,s,i.layoutBox);const g=!zy(h);let y=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:T,layout:z}=b;if(T&&z){const O=We();Er(O,i.layoutBox,T.layoutBox);const L=We();Er(L,s,z.layoutBox),qy(O,L)||(y=!0),b.options.layoutRoot&&(n.relativeTarget=L,n.relativeTargetOrigin=O,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:i,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function fE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function hE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function pE(n){n.clearSnapshot()}function Og(n){n.clearMeasurements()}function jg(n){n.isLayoutDirty=!1}function gE(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function wg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function vE(n){n.resolveTargetDelta()}function yE(n){n.calcProjection()}function bE(n){n.resetSkewAndRotation()}function SE(n){n.removeLeadSnapshot()}function Rg(n,i,r){n.translate=_e(i.translate,0,r),n.scale=_e(i.scale,1,r),n.origin=i.origin,n.originPoint=i.originPoint}function Vg(n,i,r,s){n.min=_e(i.min,r.min,s),n.max=_e(i.max,r.max,s)}function TE(n,i,r,s){Vg(n.x,i.x,r.x,s),Vg(n.y,i.y,r.y,s)}function xE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const EE={duration:.45,ease:[.4,0,.1,1]},Bg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),_g=Bg("applewebkit/")&&!Bg("chrome/")?Math.round:kt;function Lg(n){n.min=_g(n.min),n.max=_g(n.max)}function AE(n){Lg(n.x),Lg(n.y)}function Ry(n,i,r){return n==="position"||n==="preserve-aspect"&&!Jx(Mg(i),Mg(r),.2)}function DE(n){var i;return n!==n.root&&((i=n.scroll)==null?void 0:i.wasRoot)}const ME=wy({attachResizeListener:(n,i)=>_i(n,"resize",i),measureScroll:()=>{var n,i;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((i=document.body)==null?void 0:i.scrollTop)||0}},checkIsScrollRoot:()=>!0}),cc={current:void 0},Vy=wy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!cc.current){const n=new ME({});n.mount(window),n.setOptions({layoutScroll:!0}),cc.current=n}return cc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Td=G.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Ug(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function CE(...n){return i=>{let r=!1;const s=n.map(c=>{const f=Ug(c,i);return!r&&typeof f=="function"&&(r=!0),f});if(r)return()=>{for(let c=0;c<s.length;c++){const f=s[c];typeof f=="function"?f():Ug(n[c],null)}}}}function zE(...n){return G.useCallback(CE(...n),n)}class qE extends G.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=r.offsetParent,c=Bc(s)&&s.offsetWidth||0,f=Bc(s)&&s.offsetHeight||0,d=this.props.sizeRef.current;d.height=r.offsetHeight||0,d.width=r.offsetWidth||0,d.top=r.offsetTop,d.left=r.offsetLeft,d.right=c-d.width-d.left,d.bottom=f-d.height-d.top}return null}componentDidUpdate(){}render(){return this.props.children}}function NE({children:n,isPresent:i,anchorX:r,anchorY:s,root:c,pop:f}){var T;const d=G.useId(),h=G.useRef(null),p=G.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=G.useContext(Td),y=((T=n.props)==null?void 0:T.ref)??(n==null?void 0:n.ref),b=zE(h,y);return G.useInsertionEffect(()=>{const{width:z,height:O,top:L,left:U,right:H,bottom:X}=p.current;if(i||f===!1||!h.current||!z||!O)return;const Q=r==="left"?`left: ${U}`:`right: ${H}`,Z=s==="bottom"?`bottom: ${X}`:`top: ${L}`;h.current.dataset.motionPopId=d;const Y=document.createElement("style");g&&(Y.nonce=g);const oe=c??document.head;return oe.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${z}px !important;
            height: ${O}px !important;
            ${Q}px !important;
            ${Z}px !important;
          }
        `),()=>{oe.contains(Y)&&oe.removeChild(Y)}},[i]),S.jsx(qE,{isPresent:i,childRef:h,sizeRef:p,pop:f,children:f===!1?n:G.cloneElement(n,{ref:b})})}const OE=({children:n,initial:i,isPresent:r,onExitComplete:s,custom:c,presenceAffectsLayout:f,mode:d,anchorX:h,anchorY:p,root:g})=>{const y=Zc(jE),b=G.useId();let T=!0,z=G.useMemo(()=>(T=!1,{id:b,initial:i,isPresent:r,custom:c,onExitComplete:O=>{y.set(O,!0);for(const L of y.values())if(!L)return;s&&s()},register:O=>(y.set(O,!1),()=>y.delete(O))}),[r,y,s]);return f&&T&&(z={...z}),G.useMemo(()=>{y.forEach((O,L)=>y.set(L,!1))},[r]),G.useEffect(()=>{!r&&!y.size&&s&&s()},[r]),n=S.jsx(NE,{pop:d==="popLayout",isPresent:r,anchorX:h,anchorY:p,root:g,children:n}),S.jsx(Cr.Provider,{value:z,children:n})};function jE(){return new Map}function By(n=!0){const i=G.useContext(Cr);if(i===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:c}=i,f=G.useId();G.useEffect(()=>{if(n)return c(f)},[n]);const d=G.useCallback(()=>n&&s&&s(f),[f,s,n]);return!r&&s?[!1,d]:[!0]}const rr=n=>n.key||"";function Hg(n){const i=[];return G.Children.forEach(n,r=>{G.isValidElement(r)&&i.push(r)}),i}const xd=({children:n,custom:i,initial:r=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:f="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[y,b]=By(d),T=G.useMemo(()=>Hg(n),[n]),z=d&&!y?[]:T.map(rr),O=G.useRef(!0),L=G.useRef(T),U=Zc(()=>new Map),H=G.useRef(new Set),[X,Q]=G.useState(T),[Z,Y]=G.useState(T);cv(()=>{O.current=!1,L.current=T;for(let _=0;_<Z.length;_++){const ie=rr(Z[_]);z.includes(ie)?(U.delete(ie),H.current.delete(ie)):U.get(ie)!==!0&&U.set(ie,!1)}},[Z,z.length,z.join("-")]);const oe=[];if(T!==X){let _=[...T];for(let ie=0;ie<Z.length;ie++){const Ae=Z[ie],Ve=rr(Ae);z.includes(Ve)||(_.splice(ie,0,Ae),oe.push(Ae))}return f==="wait"&&oe.length&&(_=oe),Y(Hg(_)),Q(T),null}const{forceRender:F}=G.useContext(Jc);return S.jsx(S.Fragment,{children:Z.map(_=>{const ie=rr(_),Ae=d&&!y?!1:T===Z||z.includes(ie),Ve=()=>{if(H.current.has(ie))return;if(H.current.add(ie),U.has(ie))U.set(ie,!0);else return;let je=!0;U.forEach(ht=>{ht||(je=!1)}),je&&(F==null||F(),Y(L.current),d&&(b==null||b()),s&&s())};return S.jsx(OE,{isPresent:Ae,initial:!O.current||r?void 0:!1,custom:i,presenceAffectsLayout:c,mode:f,root:g,onExitComplete:Ae?void 0:Ve,anchorX:h,anchorY:p,children:_},ie)})})},_y=G.createContext({strict:!1}),Pg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Qg=!1;function wE(){if(Qg)return;const n={};for(const i in Pg)n[i]={isEnabled:r=>Pg[i].some(s=>!!r[s])};my(n),Qg=!0}function Ly(){return wE(),bx()}function RE(n){const i=Ly();for(const r in n)i[r]={...i[r],...n[r]};my(i)}const VE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ar(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||VE.has(n)}let Uy=n=>!Ar(n);function BE(n){typeof n=="function"&&(Uy=i=>i.startsWith("on")?!Ar(i):n(i))}try{BE(require("@emotion/is-prop-valid").default)}catch{}function _E(n,i,r){const s={};for(const c in n)c==="values"&&typeof n.values=="object"||(Uy(c)||r===!0&&Ar(c)||!i&&!Ar(c)||n.draggable&&c.startsWith("onDrag"))&&(s[c]=n[c]);return s}const Nr=G.createContext({});function LE(n,i){if(qr(n)){const{initial:r,animate:s}=n;return{initial:r===!1||Bi(r)?r:void 0,animate:Bi(s)?s:void 0}}return n.inherit!==!1?i:{}}function UE(n){const{initial:i,animate:r}=LE(n,G.useContext(Nr));return G.useMemo(()=>({initial:i,animate:r}),[Gg(i),Gg(r)])}function Gg(n){return Array.isArray(n)?n.join(" "):n}const Ed=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Hy(n,i,r){for(const s in i)!ut(i[s])&&!by(s,r)&&(n[s]=i[s])}function HE({transformTemplate:n},i){return G.useMemo(()=>{const r=Ed();return bd(r,i,n),Object.assign({},r.vars,r.style)},[i])}function PE(n,i){const r=n.style||{},s={};return Hy(s,r,n),Object.assign(s,HE(n,i)),s}function QE(n,i){const r={},s=PE(n,i);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=s,r}const Py=()=>({...Ed(),attrs:{}});function GE(n,i,r,s){const c=G.useMemo(()=>{const f=Py();return Sy(f,i,xy(s),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};Hy(f,n.style,n),c.style={...f,...c.style}}return c}const kE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ad(n){return typeof n!="string"||n.includes("-")?!1:!!(kE.indexOf(n)>-1||/[A-Z]/u.test(n))}function YE(n,i,r,{latestValues:s},c,f=!1,d){const p=(d??Ad(n)?GE:QE)(i,s,c,n),g=_E(i,typeof n=="string",f),y=n!==G.Fragment?{...g,...p,ref:r}:{},{children:b}=i,T=G.useMemo(()=>ut(b)?b.get():b,[b]);return G.createElement(n,{...y,children:T})}function XE({scrapeMotionValuesFromProps:n,createRenderState:i},r,s,c){return{latestValues:JE(r,s,c,n),renderState:i()}}function JE(n,i,r,s){const c={},f=s(n,{});for(const T in f)c[T]=pr(f[T]);let{initial:d,animate:h}=n;const p=qr(n),g=cy(n);i&&g&&!p&&n.inherit!==!1&&(d===void 0&&(d=i.initial),h===void 0&&(h=i.animate));let y=r?r.initial===!1:!1;y=y||d===!1;const b=y?h:d;if(b&&typeof b!="boolean"&&!zr(b)){const T=Array.isArray(b)?b:[b];for(let z=0;z<T.length;z++){const O=dd(n,T[z]);if(O){const{transitionEnd:L,transition:U,...H}=O;for(const X in H){let Q=H[X];if(Array.isArray(Q)){const Z=y?Q.length-1:0;Q=Q[Z]}Q!==null&&(c[X]=Q)}for(const X in L)c[X]=L[X]}}}return c}const Qy=n=>(i,r)=>{const s=G.useContext(Nr),c=G.useContext(Cr),f=()=>XE(n,i,s,c);return r?f():Zc(f)},ZE=Qy({scrapeMotionValuesFromProps:Sd,createRenderState:Ed}),KE=Qy({scrapeMotionValuesFromProps:Ey,createRenderState:Py}),FE=Symbol.for("motionComponentSymbol");function WE(n,i,r){const s=G.useRef(r);G.useInsertionEffect(()=>{s.current=r});const c=G.useRef(null);return G.useCallback(f=>{var h;f&&((h=n.onMount)==null||h.call(n,f)),i&&(f?i.mount(f):i.unmount());const d=s.current;if(typeof d=="function")if(f){const p=d(f);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(f);else d&&(d.current=f)},[i])}const Gy=G.createContext({});function bo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function $E(n,i,r,s,c,f){var Q,Z;const{visualElement:d}=G.useContext(Nr),h=G.useContext(_y),p=G.useContext(Cr),g=G.useContext(Td),y=g.reducedMotion,b=g.skipAnimations,T=G.useRef(null),z=G.useRef(!1);s=s||h.renderer,!T.current&&s&&(T.current=s(n,{visualState:i,parent:d,props:r,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:y,skipAnimations:b,isSVG:f}),z.current&&T.current&&(T.current.manuallyAnimateOnMount=!0));const O=T.current,L=G.useContext(Gy);O&&!O.projection&&c&&(O.type==="html"||O.type==="svg")&&IE(T.current,r,c,L);const U=G.useRef(!1);G.useInsertionEffect(()=>{O&&U.current&&O.update(r,p)});const H=r[Wv],X=G.useRef(!!H&&!((Q=window.MotionHandoffIsComplete)!=null&&Q.call(window,H))&&((Z=window.MotionHasOptimisedAnimation)==null?void 0:Z.call(window,H)));return cv(()=>{z.current=!0,O&&(U.current=!0,window.MotionIsMounted=!0,O.updateFeatures(),O.scheduleRenderMicrotask(),X.current&&O.animationState&&O.animationState.animateChanges())}),G.useEffect(()=>{O&&(!X.current&&O.animationState&&O.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{var Y;(Y=window.MotionHandoffMarkAsComplete)==null||Y.call(window,H)}),X.current=!1),O.enteringChildren=void 0)}),O}function IE(n,i,r,s){const{layoutId:c,layout:f,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutCrossfade:y}=i;n.projection=new r(n.latestValues,i["data-framer-portal-id"]?void 0:ky(n.parent)),n.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!d||h&&bo(h),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:p,layoutRoot:g})}function ky(n){if(n)return n.options.allowProjection!==!1?n.projection:ky(n.parent)}function dc(n,{forwardMotionProps:i=!1,type:r}={},s,c){s&&RE(s);const f=r?r==="svg":Ad(n),d=f?KE:ZE;function h(g,y){let b;const T={...G.useContext(Td),...g,layoutId:eA(g)},{isStatic:z}=T,O=UE(g),L=d(g,z);if(!z&&uv){tA();const U=aA(T);b=U.MeasureLayout,O.visualElement=$E(n,L,T,c,U.ProjectionNode,f)}return S.jsxs(Nr.Provider,{value:O,children:[b&&O.visualElement?S.jsx(b,{visualElement:O.visualElement,...T}):null,YE(n,g,WE(L,O.visualElement,y),L,z,i,f)]})}h.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const p=G.forwardRef(h);return p[FE]=n,p}function eA({layoutId:n}){const i=G.useContext(Jc).id;return i&&n!==void 0?i+"-"+n:n}function tA(n,i){G.useContext(_y).strict}function aA(n){const i=Ly(),{drag:r,layout:s}=i;if(!r&&!s)return{};const c={...r,...s};return{MeasureLayout:r!=null&&r.isEnabled(n)||s!=null&&s.isEnabled(n)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function nA(n,i){if(typeof Proxy>"u")return dc;const r=new Map,s=(f,d)=>dc(f,d,n,i),c=(f,d)=>s(f,d);return new Proxy(c,{get:(f,d)=>d==="create"?s:(r.has(d)||r.set(d,dc(d,void 0,n,i)),r.get(d))})}const oA=(n,i)=>i.isSVG??Ad(n)?new Bx(i):new Nx(i,{allowProjection:n!==G.Fragment});class iA extends sn{constructor(i){super(i),i.animationState||(i.animationState=Px(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();zr(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let sA=0;class rA extends sn{constructor(){super(...arguments),this.id=sA++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);r&&!i&&c.then(()=>{r(this.id)})}mount(){const{register:i,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const lA={animation:{Feature:iA},exit:{Feature:rA}};function Pi(n){return{point:{x:n.pageX,y:n.pageY}}}const uA=n=>i=>pd(i)&&n(i,Pi(i));function ji(n,i,r,s){return _i(n,i,uA(r),s)}const Yy=({current:n})=>n?n.ownerDocument.defaultView:null,kg=(n,i)=>Math.abs(n-i);function cA(n,i){const r=kg(n.x,i.x),s=kg(n.y,i.y);return Math.sqrt(r**2+s**2)}const Yg=new Set(["auto","scroll"]);class Xy{constructor(i,r,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=z=>{this.handleScroll(z.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=fc(this.lastMoveEventInfo,this.history),O=this.startEvent!==null,L=cA(z.offset,{x:0,y:0})>=this.distanceThreshold;if(!O&&!L)return;const{point:U}=z,{timestamp:H}=st;this.history.push({...U,timestamp:H});const{onStart:X,onMove:Q}=this.handlers;O||(X&&X(this.lastMoveEvent,z),this.startEvent=this.lastMoveEvent),Q&&Q(this.lastMoveEvent,z)},this.handlePointerMove=(z,O)=>{this.lastMoveEvent=z,this.lastMoveEventInfo=mc(O,this.transformPagePoint),Oe.update(this.updatePoint,!0)},this.handlePointerUp=(z,O)=>{this.end();const{onEnd:L,onSessionEnd:U,resumeAnimation:H}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&H&&H(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const X=fc(z.type==="pointercancel"?this.lastMoveEventInfo:mc(O,this.transformPagePoint),this.history);this.startEvent&&L&&L(z,X),U&&U(z,X)},!pd(i))return;this.dragSnapToOrigin=f,this.handlers=r,this.transformPagePoint=s,this.distanceThreshold=d,this.contextWindow=c||window;const p=Pi(i),g=mc(p,this.transformPagePoint),{point:y}=g,{timestamp:b}=st;this.history=[{...y,timestamp:b}];const{onSessionStart:T}=r;T&&T(i,fc(g,this.history)),this.removeListeners=Li(ji(this.contextWindow,"pointermove",this.handlePointerMove),ji(this.contextWindow,"pointerup",this.handlePointerUp),ji(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(i){let r=i.parentElement;for(;r;){const s=getComputedStyle(r);(Yg.has(s.overflowX)||Yg.has(s.overflowY))&&this.scrollPositions.set(r,{x:r.scrollLeft,y:r.scrollTop}),r=r.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const r=this.scrollPositions.get(i);if(!r)return;const s=i===window,c=s?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},f={x:c.x-r.x,y:c.y-r.y};f.x===0&&f.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(i,c),Oe.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),on(this.updatePoint)}}function mc(n,i){return i?{point:i(n.point)}:n}function Xg(n,i){return{x:n.x-i.x,y:n.y-i.y}}function fc({point:n},i){return{point:n,delta:Xg(n,Jy(i)),offset:Xg(n,dA(i)),velocity:mA(i,.1)}}function dA(n){return n[0]}function Jy(n){return n[n.length-1]}function mA(n,i){if(n.length<2)return{x:0,y:0};let r=n.length-1,s=null;const c=Jy(n);for(;r>=0&&(s=n[r],!(c.timestamp-s.timestamp>Ft(i)));)r--;if(!s)return{x:0,y:0};s===n[0]&&n.length>2&&c.timestamp-s.timestamp>Ft(i)*2&&(s=n[1]);const f=Gt(c.timestamp-s.timestamp);if(f===0)return{x:0,y:0};const d={x:(c.x-s.x)/f,y:(c.y-s.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function fA(n,{min:i,max:r},s){return i!==void 0&&n<i?n=s?_e(i,n,s.min):Math.max(n,i):r!==void 0&&n>r&&(n=s?_e(r,n,s.max):Math.min(n,r)),n}function Jg(n,i,r){return{min:i!==void 0?n.min+i:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function hA(n,{top:i,left:r,bottom:s,right:c}){return{x:Jg(n.x,r,c),y:Jg(n.y,i,s)}}function Zg(n,i){let r=i.min-n.min,s=i.max-n.max;return i.max-i.min<n.max-n.min&&([r,s]=[s,r]),{min:r,max:s}}function pA(n,i){return{x:Zg(n.x,i.x),y:Zg(n.y,i.y)}}function gA(n,i){let r=.5;const s=ft(n),c=ft(i);return c>s?r=wi(i.min,i.max-s,n.min):s>c&&(r=wi(n.min,n.max-c,i.min)),oa(0,1,r)}function vA(n,i){const r={};return i.min!==void 0&&(r.min=i.min-n.min),i.max!==void 0&&(r.max=i.max-n.min),r}const Pc=.35;function yA(n=Pc){return n===!1?n=0:n===!0&&(n=Pc),{x:Kg(n,"left","right"),y:Kg(n,"top","bottom")}}function Kg(n,i,r){return{min:Fg(n,i),max:Fg(n,r)}}function Fg(n,i){return typeof n=="number"?n:n[i]||0}const bA=new WeakMap;class SA{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=We(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:r=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=b=>{r&&this.snapToCursor(Pi(b).point),this.stopAnimation()},d=(b,T)=>{const{drag:z,dragPropagation:O,onDragStart:L}=this.getProps();if(z&&!O&&(this.openDragLock&&this.openDragLock(),this.openDragLock=KT(z),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=T,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),aa(H=>{let X=this.getAxisMotionValue(H).get()||0;if(na.test(X)){const{projection:Q}=this.visualElement;if(Q&&Q.layout){const Z=Q.layout.layoutBox[H];Z&&(X=ft(Z)*(parseFloat(X)/100))}}this.originPoint[H]=X}),L&&Oe.update(()=>L(b,T),!1,!0),jc(this.visualElement,"transform");const{animationState:U}=this.visualElement;U&&U.setActive("whileDrag",!0)},h=(b,T)=>{this.latestPointerEvent=b,this.latestPanInfo=T;const{dragPropagation:z,dragDirectionLock:O,onDirectionLock:L,onDrag:U}=this.getProps();if(!z&&!this.openDragLock)return;const{offset:H}=T;if(O&&this.currentDirection===null){this.currentDirection=xA(H),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",T.point,H),this.updateAxis("y",T.point,H),this.visualElement.render(),U&&Oe.update(()=>U(b,T),!1,!0)},p=(b,T)=>{this.latestPointerEvent=b,this.latestPanInfo=T,this.stop(b,T),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new Xy(i,{onSessionStart:f,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:Yy(this.visualElement),element:this.visualElement.current})}stop(i,r){const s=i||this.latestPointerEvent,c=r||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!s)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Oe.postRender(()=>h(s,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,r,s){const{drag:c}=this.getProps();if(!s||!lr(i,c,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(d=fA(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){var f;const{dragConstraints:i,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(f=this.visualElement.projection)==null?void 0:f.layout,c=this.constraints;i&&bo(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=hA(s.layoutBox,i):this.constraints=!1,this.elastic=yA(r),c!==this.constraints&&!bo(i)&&s&&this.constraints&&!this.hasMutatedConstraints&&aa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=vA(s.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!bo(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const f=Ax(s,c.root,this.visualElement.getTransformPagePoint());let d=pA(c.layout.layoutBox,f);if(r){const h=r(Tx(d));this.hasMutatedConstraints=!!h,h&&(d=hy(h))}return d}startAnimation(i){const{drag:r,dragMomentum:s,dragElastic:c,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=aa(y=>{if(!lr(y,r,this.currentDirection))return;let b=p&&p[y]||{};d&&(b={min:0,max:0});const T=c?200:1e6,z=c?40:1e7,O={type:"inertia",velocity:s?i[y]:0,bounceStiffness:T,bounceDamping:z,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(y,O)});return Promise.all(g).then(h)}startAxisValueAnimation(i,r){const s=this.getAxisMotionValue(i);return jc(this.visualElement,i),s.start(cd(i,s,0,r,this.visualElement,!1))}stopAnimation(){aa(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[r];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){aa(r=>{const{drag:s}=this.getProps();if(!lr(r,s,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(r);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[r],p=f.get()||0;f.set(i[r]-_e(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!bo(r)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};aa(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=gA({min:p,max:p},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),aa(d=>{if(!lr(d,i,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(_e(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;bA.set(this.visualElement,this);const i=this.visualElement.current,r=ji(i,"pointerdown",g=>{const{drag:y,dragListener:b=!0}=this.getProps(),T=g.target,z=T!==i&&tx(T);y&&b&&!z&&this.start(g)});let s;const c=()=>{const{dragConstraints:g}=this.getProps();bo(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),s||(s=TA(i,g.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,d=f.addEventListener("measure",c);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),Oe.read(c);const h=_i(window,"resize",()=>this.scalePositionWithinConstraints()),p=f.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(aa(b=>{const T=this.getAxisMotionValue(b);T&&(this.originPoint[b]+=g[b].translate,T.set(T.get()+g[b].translate))}),this.visualElement.render())}));return()=>{h(),r(),d(),p&&p(),s&&s()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:d=Pc,dragMomentum:h=!0}=i;return{...i,drag:r,dragDirectionLock:s,dragPropagation:c,dragConstraints:f,dragElastic:d,dragMomentum:h}}}function Wg(n){let i=!0;return()=>{if(i){i=!1;return}n()}}function TA(n,i,r){const s=og(n,Wg(r)),c=og(i,Wg(r));return()=>{s(),c()}}function lr(n,i,r){return(i===!0||i===n)&&(r===null||r===n)}function xA(n,i=10){let r=null;return Math.abs(n.y)>i?r="y":Math.abs(n.x)>i&&(r="x"),r}class EA extends sn{constructor(i){super(i),this.removeGroupControls=kt,this.removeListeners=kt,this.controls=new SA(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||kt}update(){const{dragControls:i}=this.node.getProps(),{dragControls:r}=this.node.prevProps||{};i!==r&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const hc=n=>(i,r)=>{n&&Oe.update(()=>n(i,r),!1,!0)};class AA extends sn{constructor(){super(...arguments),this.removePointerDownListener=kt}onPointerDown(i){this.session=new Xy(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Yy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:hc(i),onStart:hc(r),onMove:hc(s),onEnd:(f,d)=>{delete this.session,c&&Oe.postRender(()=>c(f,d))}}}mount(){this.removePointerDownListener=ji(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let pc=!1;class DA extends G.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s,layoutId:c}=this.props,{projection:f}=i;f&&(r.group&&r.group.add(f),s&&s.register&&c&&s.register(f),pc&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),gr.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:s,drag:c,isPresent:f}=this.props,{projection:d}=s;return d&&(d.isPresent=f,i.layoutDependency!==r&&d.setOptions({...d.options,layoutDependency:r}),pc=!0,c||i.layoutDependency!==r||r===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||Oe.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),hd.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:c}=i;pc=!0,c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Zy(n){const[i,r]=By(),s=G.useContext(Jc);return S.jsx(DA,{...n,layoutGroup:s,switchLayoutGroup:G.useContext(Gy),isPresent:i,safeToRemove:r})}const MA={pan:{Feature:AA},drag:{Feature:EA,ProjectionNode:Vy,MeasureLayout:Zy}};function $g(n,i,r){const{props:s}=n;n.animationState&&s.whileHover&&n.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,f=s[c];f&&Oe.postRender(()=>f(i,Pi(i)))}class CA extends sn{mount(){const{current:i}=this.node;i&&(this.unmount=WT(i,(r,s)=>($g(this.node,s,"Start"),c=>$g(this.node,c,"End"))))}unmount(){}}class zA extends sn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Li(_i(this.node.current,"focus",()=>this.onFocus()),_i(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ig(n,i,r){const{props:s}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&s.whileTap&&n.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),f=s[c];f&&Oe.postRender(()=>f(i,Pi(i)))}class qA extends sn{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:r,propagate:s}=this.node.props;this.unmount=nx(i,(c,f)=>(Ig(this.node,f,"Start"),(d,{success:h})=>Ig(this.node,d,h?"End":"Cancel")),{useGlobalTarget:r,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const Qc=new WeakMap,gc=new WeakMap,NA=n=>{const i=Qc.get(n.target);i&&i(n)},OA=n=>{n.forEach(NA)};function jA({root:n,...i}){const r=n||document;gc.has(r)||gc.set(r,{});const s=gc.get(r),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(OA,{root:n,...i})),s[c]}function wA(n,i,r){const s=jA(i);return Qc.set(n,r),s.observe(n),()=>{Qc.delete(n),s.unobserve(n)}}const RA={some:0,all:1};class VA extends sn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:r,margin:s,amount:c="some",once:f}=i,d={root:r?r.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:RA[c]},h=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,f&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),T=g?y:b;T&&T(p)};return wA(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(BA(i,r))&&this.startObserver()}unmount(){}}function BA({viewport:n={}},{viewport:i={}}={}){return r=>n[r]!==i[r]}const _A={inView:{Feature:VA},tap:{Feature:qA},focus:{Feature:zA},hover:{Feature:CA}},LA={layout:{ProjectionNode:Vy,MeasureLayout:Zy}},UA={...lA,..._A,...MA,...LA},Mo=nA(UA,oA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),PA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,r,s)=>s?s.toUpperCase():r.toLowerCase()),ev=n=>{const i=PA(n);return i.charAt(0).toUpperCase()+i.slice(1)},Ky=(...n)=>n.filter((i,r,s)=>!!i&&i.trim()!==""&&s.indexOf(i)===r).join(" ").trim(),QA=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var GA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=G.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:c="",children:f,iconNode:d,...h},p)=>G.createElement("svg",{ref:p,...GA,width:i,height:i,stroke:n,strokeWidth:s?Number(r)*24/Number(i):r,className:Ky("lucide",c),...!f&&!QA(h)&&{"aria-hidden":"true"},...h},[...d.map(([g,y])=>G.createElement(g,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(n,i)=>{const r=G.forwardRef(({className:s,...c},f)=>G.createElement(kA,{ref:f,iconNode:i,className:Ky(`lucide-${HA(ev(n))}`,`lucide-${n}`,s),...c}));return r.displayName=ev(n),r};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],XA=ct("book-open",YA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ZA=ct("calendar",JA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],FA=ct("chevron-right",KA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Mi=ct("download",WA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],IA=ct("heart",$A);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],t2=ct("instagram",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],n2=ct("map-pin",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],i2=ct("menu",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Gc=ct("phone",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Fy=ct("plus",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Wy=ct("search",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],kc=ct("shield-check",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],d2=ct("star",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],f2=ct("users",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$y=ct("x",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],g2=ct("youtube",p2);function Iy(n){var i,r,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(i=0;i<c;i++)n[i]&&(r=Iy(n[i]))&&(s&&(s+=" "),s+=r)}else for(r in n)n[r]&&(s&&(s+=" "),s+=r);return s}function v2(){for(var n,i,r=0,s="",c=arguments.length;r<c;r++)(n=arguments[r])&&(i=Iy(n))&&(s&&(s+=" "),s+=i);return s}const y2=(n,i)=>{const r=new Array(n.length+i.length);for(let s=0;s<n.length;s++)r[s]=n[s];for(let s=0;s<i.length;s++)r[n.length+s]=i[s];return r},b2=(n,i)=>({classGroupId:n,validator:i}),e0=(n=new Map,i=null,r)=>({nextPart:n,validators:i,classGroupId:r}),Dr="-",tv=[],S2="arbitrary..",T2=n=>{const i=E2(n),{conflictingClassGroups:r,conflictingClassGroupModifiers:s}=n;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return x2(d);const h=d.split(Dr),p=h[0]===""&&h.length>1?1:0;return t0(h,p,i)},getConflictingClassGroupIds:(d,h)=>{if(h){const p=s[d],g=r[d];return p?g?y2(g,p):p:g||tv}return r[d]||tv}}},t0=(n,i,r)=>{if(n.length-i===0)return r.classGroupId;const c=n[i],f=r.nextPart.get(c);if(f){const g=t0(n,i+1,f);if(g)return g}const d=r.validators;if(d===null)return;const h=i===0?n.join(Dr):n.slice(i).join(Dr),p=d.length;for(let g=0;g<p;g++){const y=d[g];if(y.validator(h))return y.classGroupId}},x2=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=n.slice(1,-1),r=i.indexOf(":"),s=i.slice(0,r);return s?S2+s:void 0})(),E2=n=>{const{theme:i,classGroups:r}=n;return A2(r,i)},A2=(n,i)=>{const r=e0();for(const s in n){const c=n[s];Dd(c,r,s,i)}return r},Dd=(n,i,r,s)=>{const c=n.length;for(let f=0;f<c;f++){const d=n[f];D2(d,i,r,s)}},D2=(n,i,r,s)=>{if(typeof n=="string"){M2(n,i,r);return}if(typeof n=="function"){C2(n,i,r,s);return}z2(n,i,r,s)},M2=(n,i,r)=>{const s=n===""?i:a0(i,n);s.classGroupId=r},C2=(n,i,r,s)=>{if(q2(n)){Dd(n(s),i,r,s);return}i.validators===null&&(i.validators=[]),i.validators.push(b2(r,n))},z2=(n,i,r,s)=>{const c=Object.entries(n),f=c.length;for(let d=0;d<f;d++){const[h,p]=c[d];Dd(p,a0(i,h),r,s)}},a0=(n,i)=>{let r=n;const s=i.split(Dr),c=s.length;for(let f=0;f<c;f++){const d=s[f];let h=r.nextPart.get(d);h||(h=e0(),r.nextPart.set(d,h)),r=h}return r},q2=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,N2=n=>{if(n<1)return{get:()=>{},set:()=>{}};let i=0,r=Object.create(null),s=Object.create(null);const c=(f,d)=>{r[f]=d,i++,i>n&&(i=0,s=r,r=Object.create(null))};return{get(f){let d=r[f];if(d!==void 0)return d;if((d=s[f])!==void 0)return c(f,d),d},set(f,d){f in r?r[f]=d:c(f,d)}}},Yc="!",av=":",O2=[],nv=(n,i,r,s,c)=>({modifiers:n,hasImportantModifier:i,baseClassName:r,maybePostfixModifierPosition:s,isExternal:c}),j2=n=>{const{prefix:i,experimentalParseClassName:r}=n;let s=c=>{const f=[];let d=0,h=0,p=0,g;const y=c.length;for(let L=0;L<y;L++){const U=c[L];if(d===0&&h===0){if(U===av){f.push(c.slice(p,L)),p=L+1;continue}if(U==="/"){g=L;continue}}U==="["?d++:U==="]"?d--:U==="("?h++:U===")"&&h--}const b=f.length===0?c:c.slice(p);let T=b,z=!1;b.endsWith(Yc)?(T=b.slice(0,-1),z=!0):b.startsWith(Yc)&&(T=b.slice(1),z=!0);const O=g&&g>p?g-p:void 0;return nv(f,z,T,O)};if(i){const c=i+av,f=s;s=d=>d.startsWith(c)?f(d.slice(c.length)):nv(O2,!1,d,void 0,!0)}if(r){const c=s;s=f=>r({className:f,parseClassName:c})}return s},w2=n=>{const i=new Map;return n.orderSensitiveModifiers.forEach((r,s)=>{i.set(r,1e6+s)}),r=>{const s=[];let c=[];for(let f=0;f<r.length;f++){const d=r[f],h=d[0]==="[",p=i.has(d);h||p?(c.length>0&&(c.sort(),s.push(...c),c=[]),s.push(d)):c.push(d)}return c.length>0&&(c.sort(),s.push(...c)),s}},R2=n=>({cache:N2(n.cacheSize),parseClassName:j2(n),sortModifiers:w2(n),...T2(n)}),V2=/\s+/,B2=(n,i)=>{const{parseClassName:r,getClassGroupId:s,getConflictingClassGroupIds:c,sortModifiers:f}=i,d=[],h=n.trim().split(V2);let p="";for(let g=h.length-1;g>=0;g-=1){const y=h[g],{isExternal:b,modifiers:T,hasImportantModifier:z,baseClassName:O,maybePostfixModifierPosition:L}=r(y);if(b){p=y+(p.length>0?" "+p:p);continue}let U=!!L,H=s(U?O.substring(0,L):O);if(!H){if(!U){p=y+(p.length>0?" "+p:p);continue}if(H=s(O),!H){p=y+(p.length>0?" "+p:p);continue}U=!1}const X=T.length===0?"":T.length===1?T[0]:f(T).join(":"),Q=z?X+Yc:X,Z=Q+H;if(d.indexOf(Z)>-1)continue;d.push(Z);const Y=c(H,U);for(let oe=0;oe<Y.length;++oe){const F=Y[oe];d.push(Q+F)}p=y+(p.length>0?" "+p:p)}return p},_2=(...n)=>{let i=0,r,s,c="";for(;i<n.length;)(r=n[i++])&&(s=n0(r))&&(c&&(c+=" "),c+=s);return c},n0=n=>{if(typeof n=="string")return n;let i,r="";for(let s=0;s<n.length;s++)n[s]&&(i=n0(n[s]))&&(r&&(r+=" "),r+=i);return r},L2=(n,...i)=>{let r,s,c,f;const d=p=>{const g=i.reduce((y,b)=>b(y),n());return r=R2(g),s=r.cache.get,c=r.cache.set,f=h,h(p)},h=p=>{const g=s(p);if(g)return g;const y=B2(p,r);return c(p,y),y};return f=d,(...p)=>f(_2(...p))},U2=[],Fe=n=>{const i=r=>r[n]||U2;return i.isThemeGetter=!0,i},o0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,i0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,H2=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,P2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Q2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,G2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,k2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Y2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ia=n=>H2.test(n),he=n=>!!n&&!Number.isNaN(Number(n)),en=n=>!!n&&Number.isInteger(Number(n)),vc=n=>n.endsWith("%")&&he(n.slice(0,-1)),Aa=n=>P2.test(n),s0=()=>!0,X2=n=>Q2.test(n)&&!G2.test(n),Md=()=>!1,J2=n=>k2.test(n),Z2=n=>Y2.test(n),K2=n=>!I(n)&&!te(n),F2=n=>rn(n,u0,Md),I=n=>o0.test(n),Cn=n=>rn(n,c0,X2),ov=n=>rn(n,oD,he),W2=n=>rn(n,m0,s0),$2=n=>rn(n,d0,Md),iv=n=>rn(n,r0,Md),I2=n=>rn(n,l0,Z2),ur=n=>rn(n,f0,J2),te=n=>i0.test(n),Ci=n=>jn(n,c0),eD=n=>jn(n,d0),sv=n=>jn(n,r0),tD=n=>jn(n,u0),aD=n=>jn(n,l0),cr=n=>jn(n,f0,!0),nD=n=>jn(n,m0,!0),rn=(n,i,r)=>{const s=o0.exec(n);return s?s[1]?i(s[1]):r(s[2]):!1},jn=(n,i,r=!1)=>{const s=i0.exec(n);return s?s[1]?i(s[1]):r:!1},r0=n=>n==="position"||n==="percentage",l0=n=>n==="image"||n==="url",u0=n=>n==="length"||n==="size"||n==="bg-size",c0=n=>n==="length",oD=n=>n==="number",d0=n=>n==="family-name",m0=n=>n==="number"||n==="weight",f0=n=>n==="shadow",iD=()=>{const n=Fe("color"),i=Fe("font"),r=Fe("text"),s=Fe("font-weight"),c=Fe("tracking"),f=Fe("leading"),d=Fe("breakpoint"),h=Fe("container"),p=Fe("spacing"),g=Fe("radius"),y=Fe("shadow"),b=Fe("inset-shadow"),T=Fe("text-shadow"),z=Fe("drop-shadow"),O=Fe("blur"),L=Fe("perspective"),U=Fe("aspect"),H=Fe("ease"),X=Fe("animate"),Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Y=()=>[...Z(),te,I],oe=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],_=()=>[te,I,p],ie=()=>[Ia,"full","auto",..._()],Ae=()=>[en,"none","subgrid",te,I],Ve=()=>["auto",{span:["full",en,te,I]},en,te,I],je=()=>[en,"auto",te,I],ht=()=>["auto","min","max","fr",te,I],rt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Pe=()=>["start","end","center","stretch","center-safe","end-safe"],j=()=>["auto",..._()],P=()=>[Ia,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",..._()],W=()=>[Ia,"screen","full","dvw","lvw","svw","min","max","fit",..._()],me=()=>[Ia,"screen","full","lh","dvh","lvh","svh","min","max","fit",..._()],k=()=>[n,te,I],A=()=>[...Z(),sv,iv,{position:[te,I]}],B=()=>["no-repeat",{repeat:["","x","y","space","round"]}],J=()=>["auto","cover","contain",tD,F2,{size:[te,I]}],K=()=>[vc,Ci,Cn],ne=()=>["","none","full",g,te,I],re=()=>["",he,Ci,Cn],be=()=>["solid","dashed","dotted","double"],$e=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],fe=()=>[he,vc,sv,iv],Ma=()=>["","none",O,te,I],ia=()=>["none",he,te,I],Ca=()=>["none",he,te,I],wn=()=>[he,te,I],jt=()=>[Ia,"full",..._()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Aa],breakpoint:[Aa],color:[s0],container:[Aa],"drop-shadow":[Aa],ease:["in","out","in-out"],font:[K2],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Aa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Aa],shadow:[Aa],spacing:["px",he],text:[Aa],"text-shadow":[Aa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ia,I,te,U]}],container:["container"],columns:[{columns:[he,I,te,h]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Y()}],overflow:[{overflow:oe()}],"overflow-x":[{"overflow-x":oe()}],"overflow-y":[{"overflow-y":oe()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ie()}],"inset-x":[{"inset-x":ie()}],"inset-y":[{"inset-y":ie()}],start:[{"inset-s":ie(),start:ie()}],end:[{"inset-e":ie(),end:ie()}],"inset-bs":[{"inset-bs":ie()}],"inset-be":[{"inset-be":ie()}],top:[{top:ie()}],right:[{right:ie()}],bottom:[{bottom:ie()}],left:[{left:ie()}],visibility:["visible","invisible","collapse"],z:[{z:[en,"auto",te,I]}],basis:[{basis:[Ia,"full","auto",h,..._()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[he,Ia,"auto","initial","none",I]}],grow:[{grow:["",he,te,I]}],shrink:[{shrink:["",he,te,I]}],order:[{order:[en,"first","last","none",te,I]}],"grid-cols":[{"grid-cols":Ae()}],"col-start-end":[{col:Ve()}],"col-start":[{"col-start":je()}],"col-end":[{"col-end":je()}],"grid-rows":[{"grid-rows":Ae()}],"row-start-end":[{row:Ve()}],"row-start":[{"row-start":je()}],"row-end":[{"row-end":je()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ht()}],"auto-rows":[{"auto-rows":ht()}],gap:[{gap:_()}],"gap-x":[{"gap-x":_()}],"gap-y":[{"gap-y":_()}],"justify-content":[{justify:[...rt(),"normal"]}],"justify-items":[{"justify-items":[...Pe(),"normal"]}],"justify-self":[{"justify-self":["auto",...Pe()]}],"align-content":[{content:["normal",...rt()]}],"align-items":[{items:[...Pe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Pe(),{baseline:["","last"]}]}],"place-content":[{"place-content":rt()}],"place-items":[{"place-items":[...Pe(),"baseline"]}],"place-self":[{"place-self":["auto",...Pe()]}],p:[{p:_()}],px:[{px:_()}],py:[{py:_()}],ps:[{ps:_()}],pe:[{pe:_()}],pbs:[{pbs:_()}],pbe:[{pbe:_()}],pt:[{pt:_()}],pr:[{pr:_()}],pb:[{pb:_()}],pl:[{pl:_()}],m:[{m:j()}],mx:[{mx:j()}],my:[{my:j()}],ms:[{ms:j()}],me:[{me:j()}],mbs:[{mbs:j()}],mbe:[{mbe:j()}],mt:[{mt:j()}],mr:[{mr:j()}],mb:[{mb:j()}],ml:[{ml:j()}],"space-x":[{"space-x":_()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":_()}],"space-y-reverse":["space-y-reverse"],size:[{size:P()}],"inline-size":[{inline:["auto",...W()]}],"min-inline-size":[{"min-inline":["auto",...W()]}],"max-inline-size":[{"max-inline":["none",...W()]}],"block-size":[{block:["auto",...me()]}],"min-block-size":[{"min-block":["auto",...me()]}],"max-block-size":[{"max-block":["none",...me()]}],w:[{w:[h,"screen",...P()]}],"min-w":[{"min-w":[h,"screen","none",...P()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[d]},...P()]}],h:[{h:["screen","lh",...P()]}],"min-h":[{"min-h":["screen","lh","none",...P()]}],"max-h":[{"max-h":["screen","lh",...P()]}],"font-size":[{text:["base",r,Ci,Cn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,nD,W2]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",vc,I]}],"font-family":[{font:[eD,$2,i]}],"font-features":[{"font-features":[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,te,I]}],"line-clamp":[{"line-clamp":[he,"none",te,ov]}],leading:[{leading:[f,..._()]}],"list-image":[{"list-image":["none",te,I]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",te,I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...be(),"wavy"]}],"text-decoration-thickness":[{decoration:[he,"from-font","auto",te,Cn]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[he,"auto",te,I]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te,I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te,I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:A()}],"bg-repeat":[{bg:B()}],"bg-size":[{bg:J()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},en,te,I],radial:["",te,I],conic:[en,te,I]},aD,I2]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:K()}],"gradient-via-pos":[{via:K()}],"gradient-to-pos":[{to:K()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:ne()}],"rounded-s":[{"rounded-s":ne()}],"rounded-e":[{"rounded-e":ne()}],"rounded-t":[{"rounded-t":ne()}],"rounded-r":[{"rounded-r":ne()}],"rounded-b":[{"rounded-b":ne()}],"rounded-l":[{"rounded-l":ne()}],"rounded-ss":[{"rounded-ss":ne()}],"rounded-se":[{"rounded-se":ne()}],"rounded-ee":[{"rounded-ee":ne()}],"rounded-es":[{"rounded-es":ne()}],"rounded-tl":[{"rounded-tl":ne()}],"rounded-tr":[{"rounded-tr":ne()}],"rounded-br":[{"rounded-br":ne()}],"rounded-bl":[{"rounded-bl":ne()}],"border-w":[{border:re()}],"border-w-x":[{"border-x":re()}],"border-w-y":[{"border-y":re()}],"border-w-s":[{"border-s":re()}],"border-w-e":[{"border-e":re()}],"border-w-bs":[{"border-bs":re()}],"border-w-be":[{"border-be":re()}],"border-w-t":[{"border-t":re()}],"border-w-r":[{"border-r":re()}],"border-w-b":[{"border-b":re()}],"border-w-l":[{"border-l":re()}],"divide-x":[{"divide-x":re()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":re()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...be(),"hidden","none"]}],"divide-style":[{divide:[...be(),"hidden","none"]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-bs":[{"border-bs":k()}],"border-color-be":[{"border-be":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...be(),"none","hidden"]}],"outline-offset":[{"outline-offset":[he,te,I]}],"outline-w":[{outline:["",he,Ci,Cn]}],"outline-color":[{outline:k()}],shadow:[{shadow:["","none",y,cr,ur]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":["none",b,cr,ur]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[he,Cn]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":re()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":["none",T,cr,ur]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[he,te,I]}],"mix-blend":[{"mix-blend":[...$e(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":$e()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[he]}],"mask-image-linear-from-pos":[{"mask-linear-from":fe()}],"mask-image-linear-to-pos":[{"mask-linear-to":fe()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":fe()}],"mask-image-t-to-pos":[{"mask-t-to":fe()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":fe()}],"mask-image-r-to-pos":[{"mask-r-to":fe()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":fe()}],"mask-image-b-to-pos":[{"mask-b-to":fe()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":fe()}],"mask-image-l-to-pos":[{"mask-l-to":fe()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":fe()}],"mask-image-x-to-pos":[{"mask-x-to":fe()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":fe()}],"mask-image-y-to-pos":[{"mask-y-to":fe()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[te,I]}],"mask-image-radial-from-pos":[{"mask-radial-from":fe()}],"mask-image-radial-to-pos":[{"mask-radial-to":fe()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Z()}],"mask-image-conic-pos":[{"mask-conic":[he]}],"mask-image-conic-from-pos":[{"mask-conic-from":fe()}],"mask-image-conic-to-pos":[{"mask-conic-to":fe()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:A()}],"mask-repeat":[{mask:B()}],"mask-size":[{mask:J()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",te,I]}],filter:[{filter:["","none",te,I]}],blur:[{blur:Ma()}],brightness:[{brightness:[he,te,I]}],contrast:[{contrast:[he,te,I]}],"drop-shadow":[{"drop-shadow":["","none",z,cr,ur]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:["",he,te,I]}],"hue-rotate":[{"hue-rotate":[he,te,I]}],invert:[{invert:["",he,te,I]}],saturate:[{saturate:[he,te,I]}],sepia:[{sepia:["",he,te,I]}],"backdrop-filter":[{"backdrop-filter":["","none",te,I]}],"backdrop-blur":[{"backdrop-blur":Ma()}],"backdrop-brightness":[{"backdrop-brightness":[he,te,I]}],"backdrop-contrast":[{"backdrop-contrast":[he,te,I]}],"backdrop-grayscale":[{"backdrop-grayscale":["",he,te,I]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[he,te,I]}],"backdrop-invert":[{"backdrop-invert":["",he,te,I]}],"backdrop-opacity":[{"backdrop-opacity":[he,te,I]}],"backdrop-saturate":[{"backdrop-saturate":[he,te,I]}],"backdrop-sepia":[{"backdrop-sepia":["",he,te,I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":_()}],"border-spacing-x":[{"border-spacing-x":_()}],"border-spacing-y":[{"border-spacing-y":_()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",te,I]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[he,"initial",te,I]}],ease:[{ease:["linear","initial",H,te,I]}],delay:[{delay:[he,te,I]}],animate:[{animate:["none",X,te,I]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[L,te,I]}],"perspective-origin":[{"perspective-origin":Y()}],rotate:[{rotate:ia()}],"rotate-x":[{"rotate-x":ia()}],"rotate-y":[{"rotate-y":ia()}],"rotate-z":[{"rotate-z":ia()}],scale:[{scale:Ca()}],"scale-x":[{"scale-x":Ca()}],"scale-y":[{"scale-y":Ca()}],"scale-z":[{"scale-z":Ca()}],"scale-3d":["scale-3d"],skew:[{skew:wn()}],"skew-x":[{"skew-x":wn()}],"skew-y":[{"skew-y":wn()}],transform:[{transform:[te,I,"","none","gpu","cpu"]}],"transform-origin":[{origin:Y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:jt()}],"translate-x":[{"translate-x":jt()}],"translate-y":[{"translate-y":jt()}],"translate-z":[{"translate-z":jt()}],"translate-none":["translate-none"],accent:[{accent:k()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te,I]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mbs":[{"scroll-mbs":_()}],"scroll-mbe":[{"scroll-mbe":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pbs":[{"scroll-pbs":_()}],"scroll-pbe":[{"scroll-pbe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te,I]}],fill:[{fill:["none",...k()]}],"stroke-w":[{stroke:[he,Ci,Cn,ov]}],stroke:[{stroke:["none",...k()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},sD=L2(iD);function Mr(...n){return sD(v2(n))}const yc={pastor:{name:"Pastor Fredson Fagundes",phone:"74999829797"},elders:[{name:"Pb. Adevaldo Marques",phone:"7499795490",image:null},{name:"Pb. Elique Rios Filho",phone:"7499910068",image:null}]},rD=[{month:0,day:1,name:"Suelivânia Santos da Silva Sena"},{month:0,day:7,name:"Ozileia da Silva Cunha Ferreira"},{month:0,day:12,name:"Euflorsina da Cunha Oliveira"},{month:0,day:20,name:"Bernadet"},{month:0,day:25,name:"Sidelcina da Cunha Oliveira"},{month:0,day:27,name:"Thayz Mota Cunha Franco"},{month:1,day:2,name:"Evanuzia"},{month:1,day:7,name:"Maria Betina Cunha Franco"},{month:1,day:10,name:"Arthur Oliveira Silva"},{month:1,day:10,name:"Pr. Fredson Fagundes Cerqueira"},{month:1,day:22,name:"Ir. Dete Rios"},{month:1,day:27,name:"Marilene Gonçalves da Silva"},{month:2,day:3,name:"Nalva de Antoniel"},{month:2,day:8,name:"Levi Rios Alves Fagundes"},{month:2,day:16,name:"Lucineide Oliveira Nascimento"},{month:2,day:18,name:"Jucielle"},{month:2,day:21,name:"Antônio Ferreira da Silva"},{month:2,day:21,name:"Vitor Manoel da Cunha Ferreira"},{month:2,day:23,name:"Patrícia Lopes rios cunha"},{month:2,day:26,name:"Imarcélia"},{month:2,day:26,name:"Osmária Sousa Rios"},{month:2,day:28,name:"Leonildio Ferreira dos Santos"},{month:2,day:31,name:"Élida Suzart"},{month:2,day:31,name:"Irandir da Silva Rios"},{month:3,day:7,name:"Pedro Leonel da Cunha Ferreira"},{month:3,day:13,name:"Berenice Maria da Silva Lopes"},{month:3,day:24,name:"Saullo Jacó Santos Cunha"},{month:3,day:25,name:"Elique Rios Filho"},{month:3,day:27,name:"Elinalda"},{month:4,day:10,name:"Elisa Silva Sena"},{month:4,day:25,name:"Meire da Silva Almeida Evangelista"},{month:4,day:28,name:"Edelice"},{month:5,day:5,name:"Milton Pereira Rios"},{month:5,day:6,name:"Adevaldo Marques Rios"},{month:5,day:13,name:"Joelma Cristina Rios Lima Pinho"},{month:5,day:14,name:"Alzerita Santos de Souza"},{month:5,day:17,name:"Anderson Hangel Souza Franco"},{month:5,day:21,name:"Débora Rios Ribeiro"},{month:5,day:23,name:"Juniclesio Paixao da Silva Santos"},{month:6,day:1,name:"Maria Cecília Cunha Franco"},{month:6,day:2,name:"Daniel Oliveira Santos"},{month:6,day:4,name:"Diana Rios Alves Fagundes"},{month:6,day:8,name:"Zack Samuel Barbosa Silva"},{month:6,day:19,name:"Ridair Cunha"},{month:6,day:20,name:"Welida Ticiana"},{month:6,day:27,name:"Elizânia Gonçalves da Silva Rios"},{month:7,day:4,name:"Uriel da Silva Cunha"},{month:7,day:20,name:"Izabel Rios Oliveira"},{month:8,day:1,name:"Jucirene Lopes da Silva Cunha"},{month:8,day:2,name:"Luana Lima Mendes Oliveira"},{month:8,day:12,name:"Jucineide Rios Oliveira"},{month:8,day:12,name:"Otoniel da Silva Cunha"},{month:8,day:13,name:"Antonio Rios"},{month:8,day:17,name:"Carlito Oliveira Cunha"},{month:8,day:24,name:"Fabiana de Carvalho Barbosa"},{month:8,day:25,name:"Adonel Oliveira"},{month:8,day:25,name:"Roberio Araújo Evangelista"},{month:8,day:30,name:"Jonatas Rios Guilherme"},{month:9,day:7,name:"Evangelina de Oliveira Santos"},{month:9,day:18,name:"Yasmim Barbosa Silva"},{month:9,day:25,name:"Zailde Rios Santos"},{month:9,day:26,name:"João Rodrigues de Souza (Nequinha)"},{month:9,day:29,name:"Maria Luzinete Barbosa Cerqueira"},{month:10,day:3,name:"Josiane Oliveira Santos Silva"},{month:10,day:5,name:"Izabela Mota de Souza Cunha"},{month:10,day:9,name:"Joseane da Silva Souza"},{month:10,day:9,name:"Paulo Sérgio Vieira dos Santos"},{month:10,day:12,name:"José dos Santos Oliveira"},{month:10,day:12,name:"Liz Rios Alves Fagundes"},{month:10,day:24,name:"Oseas da Silva Cunha"},{month:11,day:2,name:"Arnóbio Lopes da Silva"},{month:11,day:8,name:"Adeílda Gomes de Oliveira"},{month:11,day:8,name:"Heloísa Barbosa Silva"},{month:11,day:13,name:"Antônio Jacinto Filho"},{month:11,day:14,name:"Ozuel da Silva Cunha"},{month:11,day:17,name:"Zenilda Maria da Silva Cunha"},{month:11,day:24,name:"Edivaldo Emídio Santos"},{month:11,day:31,name:"Matheus Almeida Evangelista"}],rv=[{month:1,name:"Fevereiro",theme:"CHAMADOS AO ARREPENDIMENTO E COMUNHÃO",verse:"(Is 55:6) Buscai o SENHOR enquanto se pode achar, invocai-o enquanto está perto.",events:["01/02 (domingo): Reunião do Conselho com SAF e UPH","07/02 (sábado): Pregação no ponto – Nova Esperança","13–17/02: Retiro espiritual (Carnaval)","17/02 (terça): Reunião do Conselho","22/02 (domingo): Santa Ceia","25/02 (quarta): Santa Ceia no lar"]},{month:2,name:"Março",theme:"BUSCANDO A SANTIDADE",verse:"(1Pe 1.16) Porque escrito está: Sede santos, porque eu sou santo.",events:["Terças: Curso de formação após a Reunião de Oração","Quintas: Reunião de Doutrina: Pilares da Fé Reformada","Domingos: EBD, 10h - Carta aos Coríntios; Culto, 19h30 - Buscando a Santidade","07/03 (Sábado): Caminhada da Mulher (saída às 17h da porta da igreja, parada na casa de Meire para lanche e palestra)","14/03 (Sábado): Projeto Mão na Massa – Ourolândia","21/03 (Sábado): Nova Esperança","15/03 (Domingo): Culto e Santa Ceia - 19h30","23/03 (Segunda-feira): Reunião do Conselho e Reunião de Liderança - Casa do Pb. Elique Filho","25/03 (Quarta): Santa Ceia no Lar - Casa da Irmã Dalva","30/03 (Segunda-feira): 18h–20h Churrasco, Proza e Viola"]},{month:3,name:"Abril",theme:"A cruz e a redenção em Cristo",verse:"(Is 53:5) Mas ele foi traspassado pelas nossas transgressões e moído pelas nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",events:["11/04 (sábado): Pregação no ponto – Nova Esperança","Curso de Formação - Terças, após reunião de oração","05/04 (domingo): Café da ressureição e Culto da Páscoa com Santa Ceia","15/04 (quarta): Santa Ceia no lar","21/04 (terça): Reunião do Conselho","25/04 (sábado): Aniversário da UPH – Pregador: Pr. Nivaldo Cortes"]},{month:4,name:"Maio",theme:"Edificando a família sobre a Rocha",verse:"(Mt 7.24) Quem ouve minhas palavras e as pratica é tão sábio como a pessoa que constrói sua casa sobre uma rocha firme.",events:["03/05 (Dom): Uma família firmada na Rocha - Miss. Franco (IPB Piritiba)","05/05 (Ter): Oração nos lares (Família de Arnóbio e Lene) - Resp: UPH","10/05 (Dom): Uma família ajustada pelos princípios de Deus - Pb. Robério Evangelista","12/05 (Ter): Oração nos lares (Família de Geanhy e Irandir) - Resp: SAF","16/05 (Sáb): Culto Evangelístico (Nova Esperança) - Liturgia: SAF | Palavra: UPH","17/05 (Dom): Uma família que vence as tempestades - Miss. Abérico Macêdo (IPB Serrolândia)","19/05 (Ter): Oração nos lares (Família de Débora) - Resp: SAF","24/05 (Dom): Uma família que vence as tempestades - Pb. Gilson Rios (IPB Mairi)","26/05 (Ter): Oração nos lares (Fam. Ozuel, Juce, Uriel, Ciele, Luciano e Saulo)","31/05 (Dom): DIA DA FAMÍLIA IPVP - 10h EBD Especial | 19h Culto - Pr. Pedro (IPB Pintadas)"]},{month:5,name:"Junho",theme:"A família no centro do propósito de Deus",verse:"(Js 24:15) Eu e a minha casa serviremos ao SENHOR.",events:["06/06 (sábado): Reunião na casa do Pb. Adevaldo","12/07 (sexta): Culto evangelístico - Casas Populares","13/06 (sábado): Pregação no ponto – Nova Esperança","14/06 (domingo): Santa Ceia","16/06 (terça): Reunião do Conselho - após reunião de oração","17/06 (quarta): Santa Ceia no lar","20/06 (sábado): Jantar de Casais"]},{month:6,name:"Julho",theme:"Confiança no Senhor",verse:"(Sl 27:1) O SENHOR é a minha luz e a minha salvação; de quem terei medo?",events:["04/07 (sábado): Pregação no ponto – Nova Esperança","07/09 (Terça a Quinta): Reuniões de Consagração","12/07 (domingo - 08h): Entrega do Jejum da Consagração","12/07 (domingo - 19h30): Santa Ceia","15/07 (quarta): Santa Ceia no lar","17/07 (sexta): Culto evangelístico","18/07 (sábado): Churrasco, Proza e Viola - UPH de Serrolândia","21/07 (terça): Reunião do Conselho","30/07 (Sexta): Viagem do Retiro IPVP-2026"]},{month:7,name:"Agosto",theme:"Obedecendo ao Senhor na missão",verse:"(Jn 3:1) E veio a palavra do Senhor segunda vez a Jonas, dizendo: Levanta-te, e vai à grande cidade de Nínive.",events:["01 e 02/08 (domingo): Viagem - IPVP","08/08 (sábado): Pregação no ponto – Nova Esperança","09/08 (domingo): Santa Ceia","12/08 (quarta): Santa Ceia no lar","18/08 (terça): Reunião do Conselho","30/08 (domingo): Dia Missionário","28/08 (sexta): Culto evangelístico – Praça do cemitério"]},{month:8,name:"Setembro",theme:"Ele vem",verse:"(Ap 22:12) E eis que venho sem demora, e comigo está o galardão.",events:["05/09 (sábado): Pregação no ponto – Nova Esperança","13/09 (domingo): Santa Ceia","14/09 (segunda): Reunião de Liderança (Casa de Antonio Rios)","16/09 (quarta): Santa Ceia no lar","25/09 (sexta): Culto evangelístico – Alto da Nação","15/09 (terça): Reunião do Conselho","Dia da Bíblia (domingo)"]},{month:9,name:"Outubro",theme:"Reformando sempre",verse:"(Ef 2:8) Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus;",events:["03/10 (sábado): Pregação no ponto – Nova Esperança","04/10 (domingo): Reunião do Conselho com SAF e UPH","11/10 (domingo): Santa Ceia","Aniversário da SAF – Pastor convidado","14/10 (quarta): Santa Ceia no lar","31/10 (sexta): DIA DO EVANGÉLICO – PRAÇA PRINCIPAL"]},{month:10,name:"Novembro",theme:"Gratidão e fidelidade ao Senhor",verse:"(1Sm 7:12) Até aqui nos ajudou o SENHOR.",events:["02/11: Café teológico com o tema: 'E depois da morte...?'","07/11 (sábado): Pregação no ponto – Nova Esperança","12 e 13/11: Cultos evangelísticos na Praça da Nação e na Praça da Preguiça","14–15/11: 31 anos da IPVP – Pastor convidado e Santa Ceia","17/11 (terça): Reunião do Conselho","18/11 (quarta): Santa Ceia no lar","21–30/11: Ausência pastoral (curso em São Paulo)"]},{month:11,name:"Dezembro",theme:"O Cristo encarnado e a esperança eterna",verse:"(Jo 1:14) E o Verbo se fez carne e habitou entre nós.",events:["06/12 (domingo): Santa Ceia","07/12 (segunda): Reunião de Liderança (Casa pastoral)","09/12 (quarta): Santa Ceia no lar","11/12 (sexta): Culto evangelístico","15/12 (terça): Reunião do Conselho","20/12 (domingo) Manhã - Assembleia Geral Ordinária","Cultos de Natal e Encerramento do Ano"]}],lD=[{month:3,announcements:[{text:"Do Perdão ao Triunfo: As sete declarações de Cristo na Cruz.",image:"/aspalavrasdejesus_abril.jpg",isWeekly:!1},{text:"Celebração: UPH 27 Anos",image:"/uph27anos_abril.jpg",isWeekly:!1}]},{month:4,announcements:[{text:"Mês da Família: Edificando a família sobre a Rocha.",image:"/maio_mesdafamilia_2026.jpg",isWeekly:!1}]}],lv=[{title:"A Bênção (Gabriel Guedes)",lyrics:`Que o Senhor te abençoe
E faça brilhar Seu rosto em ti
Que conceda Sua graça
E te dê paz

Amém, amém, amém
Amém, amém, amém

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos dos teus filhos

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos dos teus filhos

Que a bênção se derrame
Até mil gerações
Tua família e teus filhos
E os filhos dos teus filhos

Sua presença te acompanhe
Por detrás e por diante
Do teu lado e em ti
É contigo, é por ti

E de dia, e de noite
Tua entrada e saída
Em teu riso, em teu choro
É contigo, é por ti

Amém, amém, amém
Amém, amém, amém`},{title:"A Colheita (Alda Célia)",lyrics:`Voz do que clama em meio ao deserto
Prepara o caminho do meu Salvador
Grita nas praças, nas ruas, nos campos
Prepara o caminho do meu Salvador

Toca a trombeta em Sião
Não despreze as feridas das Suas mãos

Este é o tempo de lançarmos a rede
Pregar a palavra, viver o evangelho
Este é o tempo de quebrantamento, a colheita chegou
A hora é chegada, o tempo é este, Ele vem

Ide, fazei discípulos de todas as nações, porque Ele vem`},{title:"A Ele a Glória",lyrics:`Porque Dele e por Ele
Para Ele são todas as coisas

A Ele a Glória
Pra sempre, amém

Quão profundas riquezas
O saber e o conhecer de Deus
Quão insondáveis
Seus juízos e os Seus caminhos`},{title:"Acalma o Meu Coração (Anderson Freire)",lyrics:`Não quero interromper o Teu silêncio, ó Pai
Mas é só orando que eu encontro paz
O vento da aflição quer apagar a chama
Da minha adoração

O mundo é um oceano, minha carne é um furacão
Minha vida é um barquinho buscando direção
Descansa em minha alma e acalma a tempestade
Que agita o meu coração

Acalma o meu coração
Acalma o meu coração
O vento está soprando
Mas é Te adorando que venço o mar da aflição

Acalma o meu coração
Acalma o meu coração
Só venço esse mundo se for em Tua presença
Acalma o meu coração

O barulho do mar vem pra me confundir
Ó Pai, não deixe as ondas minha fé diminuir
Perdoa se pensei que, em meio ao Teu silêncio
Não estivesse aqui

Viver na superfície sem poder respirar
É o mesmo que morrer por não Te adorar
És meu oxigênio, Senhor, sem Tua presença
Minha fé vai naufragar`},{title:"Aclame ao Senhor (Diante do Trono)",lyrics:`Meu Jesus, Salvador
Outro igual não há
Todos os dias quero louvar
As maravilhas de Teu amor

Consolo, abrigo
Força e refúgio é o Senhor
Com todo o meu ser
Com tudo o que sou
Sempre Te adorarei

Aclame ao Senhor, toda a terra e cantemos
Poder, majestade e louvores ao Rei
Montanhas se prostrem e rujam os mares
Ao som de Teu nome

Alegre Te louvo por Teus grandes feitos
Firmado estarei, sempre Te amarei
Incomparáveis são Tuas promessas pra mim, oh`},{title:"Nada Pode Calar Um Adorador",artist:"Eyshila",lyrics:`Adorador é tudo o que eu sou
Adorador, assim Deus me formou
E quem poderá calar a voz de um coração?

Se eu subir aos céus, eu sei que lá estás
Se eu mergulhar no mais profundo mar
Nunca poderei me ausentar do Teu olhar

Tu és o Deus que me sonda
Tu és o Deus que me vê
Não tenho todas as respostas
Mas de uma coisa sei
Por toda a minha vida Te adorarei

Adorar é o que sei
Adorar é o que sou
Nada pode calar um adorador
Não existem prisões
Que contenham a voz de quem Te adora, Senhor

Se eu vencer (Te adoro)
Se eu perder (Te adoro)
Se eu subir (Te adoro)
Se eu descer

Te adorar é o meu prazer
Minha força vem do Senhor
Nada pode calar um adorador`},{title:"Fiel a Mim",artist:"Eyshila",lyrics:`Sei que estás aqui, Senhor
Podes perceber quem sou
Podes ver se há em mim
Um verdadeiro adorador

A minha oferta eu ofereço a Ti, Deus meu
Pra reconhecer que nada tenho, tudo é Teu

Quero Te adorar ainda que a figueira não floresça
Quero me alegrar mesmo se o dinheiro me faltar
A vitória vem, mesmo que pareça que é o fim
Pois Tu és fiel, Senhor, fiel a mim

Tu és fiel, Senhor, eu sei que Tu és fiel
Tu és fiel, Senhor, eu sei que Tu és fiel
E ainda que eu não mereça, permaneces assim
Fiel, Senhor meu Deus, fiel a mim`},{title:"Deus Cuida de Mim",artist:"Kleber Lucas",lyrics:`Eu preciso aprender um pouco aqui
Preciso aprender um pouco ali
Eu preciso aprender mais de Deus
Porque Ele é quem cuida de mim

Se uma porta se fecha aqui
Outras portas se abrem ali
Eu preciso aprender mais de Deus
Porque Ele é quem cuida de mim
Deus cuida de mim

Deus cuida de mim
Na sombra das Suas asas
Deus cuida de mim
Eu amo a Sua casa

E não ando sozinho
Não estou sozinho, pois sei
Deus cuida de mim`},{title:"Pra Sempre",artist:"Fernandinho",lyrics:`O universo chora, o Sol se apagou
Ali estava morto o Salvador
Seu corpo lá na cruz, Seu sangue derramou
O peso do pecado Ele levou

Deus Pai o abandonou, cessou Seu respirar
Em trevas se encontrou o Filho
A guerra começou, a morte Ele enfrentou
Todo o poder das trevas vencido foi

A terra estremeceu, sepulcro se abriu
Nada vencerá Seu grande amor
Ó morte, onde estás? O Rei ressuscitou
Ele venceu pra sempre

Pra sempre exaltado é
Pra sempre adorado é
Pra sempre Ele vive
Ressuscitou, ressuscitou`},{title:"Nada Além do Sangue",artist:"Fernandinho",lyrics:`Teu sangue leva-me além, a todas as alturas
Onde ouço a Tua voz
Fala de Tua justiça pela minha vida
Jesus este é o Teu sangue

Tua cruz mostra Tua graça, fala do Amor do Pai
Que prepara para nós um caminho para Ele
Onde posso me achegar
Somente pelo sangue

Que nos lava dos pecados
Que nos traz restauração
Nada além do sangue
Nada além do sangue de Jesus

Que nos faz brancos como a neve
Aceitos como amigos de Deus
Nada além do sangue
Nada além do sangue de Jesus`},{title:"Todas As Coisas",artist:"Fernandinho",lyrics:`Eu sei que sempre estás comigo, Senhor
Também sei que nada acontece sem a Tua vontade
Mas preciso aprender a confiar em Ti
Mas preciso aprender a descansar em Ti
Tu és meu Senhor

Todas as coisas cooperam para o bem
Daqueles que Te amam
Todas as coisas cooperam para o bem
Daqueles que Te amam

Tudo entregarei, tudo entregarei
Sim, por Ti, Jesus, bendito, tudo deixarei`},{title:"Uma Nova História",artist:"Fernandinho",lyrics:`Sai de tua tenda, oh, filho Meu
E te mostrarei as estrelas do céu
Sai de tua tenda, oh, filho Meu
Te mostrarei a areia do mar

Será que podes contar?
Será que podes imaginar
Tudo aquilo que sonhei para ti, filho Meu?
Minha bênção será sobre ti

Uma nova história, Deus tem pra mim
Um novo tempo, Deus tem pra mim
E tudo aquilo que perdido foi
Ouvirei de sua boca, te abençoarei`},{title:"Grandes Coisas",artist:"Fernandinho",lyrics:`Tu és o Deus dessa terra
Tu és Rei desse povo
És o Senhor da nação

Tu és a luz desse mundo
Esperança para os perdidos
Tu és a paz pros cansados

Ninguém é como nosso Deus
Ninguém é como nosso Deus
Grandes coisas estão por vir
Grandes coisas vão acontecer nesse lugar`},{title:"Jesus, Filho de Deus",artist:"Fernandinho",lyrics:`Deixou os céus pra me encontrar
Aqui não é o Seu lugar
Um amor assim o mundo não conheceu
Naquela cruz se entregou
O Teu perdão me alcançou

No altar de adoração seja sempre exaltado
Jesus, Filho de Deus
Deixou a Sua glória, morreu em meu lugar
Jesus, Filho de Deus

Levou sobre Si pecado e dor
Venceu a morte e ressuscitou
Um amor assim o mundo não conheceu`},{title:"Ainda Que a Figueira",artist:"Fernandinho",lyrics:`Tu és a minha porção
Tu és a minha herança
Tu és o meu socorro
Nos dias de tribulação

Ainda que a figueira não floresça
Ainda que a videira não dê o seu fruto
Mesmo que não haja alimento nos campos
Eu me alegrarei em Ti

Eu sei que em Seus braços
Eu encontro salvação`},{title:"Portas Abertas",artist:"Grupo Logos",lyrics:`Ontem deixou sua casa e saiu pelo mundo
De coração lá no fundo eu não entendi
Tudo o que fiz, o que ele quis
Meus braços abertos ficaram e ainda estão assim

Mas nunca é tarde não! Sai da escuridão!
Há novo dia, nova manhã!
A mesma casa tem portas abertas
Pessoas certas, amigos e irmãos

Pai, eu sei que errei, mas vim para acertar
Permita-me de novo aqui ficar!`},{title:"Autor da Minha Fé",artist:"Grupo Logos",lyrics:`Oh, pai, eu, queria tanto ver!
O meu Senhor descer, vindo me encontrar!
Eu posso até imaginar a refulgente glória
Do Senhor Jesus!

Glória! Glória! Ao Autor da minha fé!
Glória! Glória! Ao Autor da minha fé!

E eis o consolo que envolve a minha vida
O meu Senhor Jesus!
Que foi morto sim, naquela cruz!
Voltará! Voltará, enfim!`},{title:"Situações",artist:"Grupo Logos",lyrics:`Situações nessa vida me fazem sentir
Que não sou forte a ponto de até resistir
Nestes terríveis momentos, os maus pensamentos me querem levar
A um extremo de vida que meu equilíbrio se deixa enganar

Pois eu sei que jamais eu provado serei
Além do que eu possa suportar
E se ainda, eu cair e pensar que é o fim
Jesus me ergue e segue junto a mim`},{title:"Mão No Arado",artist:"Grupo Logos",lyrics:`Quem tem posto a mão no arado
Não pode mais olhar pra trás!
Pois quem no arado põe a mão
Trabalho certo e perto, tem serviço e profissão

Lança a semente, espalha pelo chão
Planta em tua terra
Faz do teu trabalho tua guerra

Prega a palavra, ensina ao teu redor
Mostra em tua vida
Faz das boas novas tua lida`},{title:"Ao Sentir",artist:"Grupo Logos",lyrics:`Ao sentir o mundo ao meu redor
Nada vi que pudesse ser real
Eu percebi que todos buscam paz, porém em vão
Pois naquilo que procuram não há solução

Só em Jesus, a paz real eu pude encontrar
O Seu amor pude experimentar
Eu me entreguei a Cristo e a vida eterna vou gozar`},{title:"Calmo, Sereno e Tranquilo",artist:"Grupo Logos",lyrics:`Calmo, sereno e tranquilo
Sinto descanso neste viver
Isto devo a um amigo
E só por Ele eu pude obter

Ele é Jesus, meu amigo
Meu Senhor, o salvador
Só por Ele ganhei
A vida eterna com Deus, com Deus

Triste foi Sua história
Levado à cruz sem pecado algum
Só porque me amou
Morreu por mim e não hesitou`},{title:"É Ele",artist:"Drops INA",lyrics:`Estou preparando um caminho
Endireitando as veredas
E cada vez mais diminuindo
Porque importa que Ele cresça

E é Ele
Por Ele que eu estou gastando a minha vida
Perdendo tudo por amor e com alegria
Dono dos meus dias

E Ele virá
Soberano em poder, Ele virá
E o governo está Nele, vejam, Ele traz
Consigo a sua recompensa`},{title:"Tudo é Teu",artist:"Drops INA",lyrics:`Cristo, manso e humilde
Assentou-se à mesa
Filho de Deus se encarnou

E Ele partiu o pão
Ele serviu o vinho
Nos deu plena comunhão
E o véu se rasgou
Fez um vivo caminho

Tudo que eu tenho é Teu, Cristo
Tudo que eu sou é Teu, Filho
Minha casa, meu dinheiro
Meu destino por inteiro
Tudo é Teu`},{title:"Seja Engrandecido",artist:"Paulo César Baruk",lyrics:`Seja engrandecido
Oh Deus da minha vida
Tu és o Deus da minha salvação
És a minha rocha, a minha segurança
Meus lábios sempre te exaltarão

Aleluia te louvo
Pois sei que sobre todos és Senhor
Aleluia te louvo
Pois sei que sobre todos és Senhor`},{title:"Não Tenhas Sobre Ti",artist:"Paulo César Baruk",lyrics:`Não tenhas sobre ti
Um só cuidado qualquer que seja
Pois um, somente um
Seria muito para ti

É meu
Somente meu, todo o trabalho
E o teu trabalho é descansar em mim

Não temas quando enfim
Tiveres que tomar decisão
Entrega tudo a mim
Confia de todo o coração`},{title:"Tributo a Yehovah",artist:"Paulo César Baruk",lyrics:`Eu sou grato por tudo que tenho
O tesouro maior desse mundo
Me foi dado como herança eterna
Maior prova de um amor tão profundo

Louvarei ao Senhor em todo tempo
Seu louvor estará continuamente
Em meus lábios e também no coração
Jesus Cristo será sempre minha canção

Ye, Ye, Yehovah
Ye, Ye, Yehovah`},{title:"Maravilhosa Graça",artist:"Projeto Sola",lyrics:`Quem liberta do meu pecado
Seu amor é forte, insuperável
É o Rei da Glória, o grande Rei dos reis

Maravilhosa graça
Amor que não tem fim
Tomou o meu lugar
A minha cruz levou
E deu a sua vida
Para me libertar
Jesus eu canto
Pelo que fez por mim

Digno é o cordeiro de Deus
Digno é o rei que a morte venceu`},{title:"Colossenses 1",artist:"Projeto Sola",lyrics:`Ele é a imagem do Deus invisível
Ele é Senhor sobre a criação

Pois, Nele foram criadas
Todas as coisas nos céus e na terra
Sejam tronos, soberanias
Poderes ou autoridades

Ele é antes de tudo
E a todos sustenta pela Palavra
Pois, foi do agrado de Deus
Que em tudo Ele tenha
Supremacia`},{title:"É o Teu Povo",artist:"Ipalpha",lyrics:`É Teu Povo
Aqui presente
Todos numa só voz
Declarando
Que só Tu és grande

Exaltamos
Teu doce nome
Pelo Amor pela cruz
Por Teu filho Jesus

Pois é Santo
Sim és digno
De louvor
E de ser adorado`},{title:"Castelo Forte",artist:"Ipalpha",lyrics:`Castelo forte é o nosso Deus
Escudo e boa espada
Com Seu poder defende os Seus
A Sua Igreja amada

A nossa força nada faz
Estamos nós perdidos
Mas nosso Deus socorro traz
E somos protegidos

Defende-nos, Jesus
O que venceu na cruz
Senhor dos altos céus
Que, sendo o próprio Deus
Triunfa na batalha`},{title:"Ajuntamento",artist:"Ipalpha",lyrics:`Vem e sopra sobre nós Teu sopro
Reunidos neste ajuntamento
Honra e santifica este momento
Com a Tua igreja que é Teu povo

Tu és o Senhor de toda glória
Hoje e sempre como foste outrora
No correr da história
Revelando o Seu amor
Deus bendito Rei e Salvador`},{title:"Ao Pé da Cruz",artist:"Ipalpha",lyrics:`Quero estar ao pé da cruz
Que tão rica fonte!
Corre franca, salutar
De Sião no monte

Sim na cruz, sim na cruz
Sempre me glorio!
E por fim, descansarei
Salvo, além do rio

A tremer ao pé da cruz
Graça, amor achou-me
Matutina estrela ali
Raios seus mandou-me`},{title:"Firmeza Na Fé",artist:"Ipalpha",lyrics:`Somente ponho a minha fé
Na graça excelsa de Jesus
No sacrifício remidor
No sangue do bom Redentor

A minha fé e o meu amor
Estão firmados no Senhor

Se não lhe posso a face ver
É pela fé que vou viver
Em cada prova suportar
Eu hei de Nele confiar`},{title:"Nenhuma Condenação Há",artist:"Eli Soares",lyrics:`De todas as provas que eu já passei
É bem difícil, Senhor
A gente as vezes ouviu
Acusações do vil tentador

Nenhuma condenação há
Para quem está em Ti, Jesus
Cuja a vida coberta está
Pelo sangue que desceu na cruz

É ver que o passado ficou pra trás
Pois Cristo na cruz tudo já venceu
E saber que dele não lembra mais
Eu canto pra glória de Deus`},{title:"Adorador Por Excelência (Nani Azevedo)",lyrics:`Quero dar o melhor de mim
Quero oferecer sacrifício de louvor
Quero ser bem mais do que já sou
Um adorador por excelência me tornar

Eu não vou me importar
Com o que vai acontecer
Eu só quero Te exaltar
Tu és a razão do meu viver

Eu não posso me calar
Tenho adoração em meu DNA
Um adorador por excelência`},{title:"Adoramos o Cordeiro (Diante do Trono)",lyrics:`Adoramos o Cordeiro
Adoramos o Rei dos Reis 
Adoramos o Cordeiro
Adoramos o Rei

Com nossas mãos levantadas rendemos louvor
Com nossas mãos levantadas nos regozijamos
Com nossas mãos levantadas ao céu
Nós dizemos ao mundo que amamos o nosso Rei

Ôu,ôu,ôu nós amamos o nosso Rei

Adoramos o Cordeiro
Adoramos o Rei dos Reis 
Adoramos o Cordeiro
Adoramos o Rei`},{title:"Águas Purificadoras (Diante do Trono)",lyrics:`Existe um rio, Senhor
Que flui do Teu grande amor
Águas que correm do trono
Águas que curam, que limpam

Por onde o rio passar
Tudo vai transformar
Pois leva a vida do próprio Deus
E este rio está neste lugar
Quero beber do Teu rio, Senhor
Sacia a minha sede
Lava o meu interior
Eu quero fluir em Tuas águas
Eu quero beber da Tua fonte
Fonte de águas vivas

Tu és a fonte, Senhor`},{title:"Alfa e Ômega",lyrics:`Tu que estás assentado no trono
Sempre reinando, soberano
Anjos cantando, homens louvando
Deus reunido com seu povo

Ó, ó, Alfa, Ômega
Cristo, filho
Ó vem, ó vem, ó vem
Senhor Jesus

Ansioso espero a tua volta
O grande dia em que Tu virás
Então subiremos, contigo estaremos
Pra todo o sempre, aleluia

Maranata, Cristo
Filho, Mestre
Ó vem, ó vem, ó vem
Senhor Jesus

Ó, ó, Alfa, Ômega
Cristo, filho
Ó vem, ó vem, ó vem
Senhor Jesus`},{title:"Aliança",lyrics:`Como é precioso, irmão
Estar bem junto a Ti
E juntos, lado a lado
Andarmos com Jesus

E expressarmos o amor
Que um dia Ele nos deu
Pelo sangue no Calvário
Sua vida trouxe a nós

Aliança no Senhor
Eu tenho com você
Não existem mais barreiras em meu ser

Eu sou livre pra te amar
Pra te aceitar
E para te pedir
Perdoame, irmão

Eu sou um com você
No amor do nosso Pai
Somos um no amor de Jesus`},{title:"Aliança de Sangue",lyrics:`Somos um, o Teu sangue fez assim
Teu amor é bem maior que tudo em mim

Ao descer ao mundo sem a Sua glória
Me abraçou tão forte o meu Jesus

E ao voltar pro céu fez da nossa história
Aliança com preço de cruz
Comunhão de graça e de luz

És o Rei da glória
Teu trono não Te separou de mim
Teu sangue eternizou nossa história
Nossa aliança não tem fim

Nem a vida, nem a morte
Nos separam, somos um
Teu amor, Pai, me consome
Sou Teu, És meu`},{title:"Alto Preço (Asaph Borba)",lyrics:`Eu sei que foi pago um alto preço
Para que contigo eu fosse um, meu irmão
Quando Jesus derramou Sua vida
Ele pensava em ti
Ele pensava em mimPensava em nós

E nos via redimidos por Seu sangue
Lutando o bom combate do Senhor
Lado a lado trabalhando
Sua igreja edificando
E rompendo as barreiras pelo amor

E na força do Espírito Santo
Nós proclamamos aqui
Que pagaremos o preço de sermos
Um só coração no Senhor

E por mais que as trevas militem
E nos tentem separar
Com os nossos olhos em Cristo
Unidos iremos andar`},{title:"Ao Único",lyrics:`Ao único que é digno de receber
A honra e a glória, a força e o poder
Ao Rei eterno e imortal, invisível, mas real
A Ele ministramos o louvor

Coroado está, ó Rei Jesus
Coroado está, ó Rei Jesus
Adoramos o Teu nome
Nos rendemos aos Teus pés
Consagramos todo nosso ser a Ti`},{title:"Atos 2",lyrics:`Nós estamos aqui
Tão sedentos de Ti
Vem oh Deus, vem oh Deus
Enche este lugar
Meu desejo é sentir
Teu poder, Teu poder

Então vem me incendiar
Meu coração é Teu altar
Quero ouvir o som do céu
Tua Glória contemplar

Te damos honra
Te damos glória
Teu é o poder
Pra sempre, amém`},{title:"Bendito Serei",lyrics:`Se atentamente ouvir a Deus
E os mandamentos Seus obedecer
O Senhor, meu Deus, me exaltará
Sobre todas as nações onde eu passar

Eu não correrei atrás de bênçãos
Sei que elas vão me alcançar
Onde eu colocar a planta dos meus pés
Sei que a Sua bênção chegará

Bendito serei na terra
Bendito serei
Quando eu profetizar
Sei que a minha voz será a voz de Deus

Bendito serei no campo
Bendito serei
Por onde eu passar, 
onde eu tocar abençoado será
Quando eu obedecer a Sua voz`},{title:"Bom Estarmos Aqui (Corinhos Evangélicos)",lyrics:`Bom estarmos aqui louvando a Deus
Podendo exaltar Seu santo nome
Tempo para isso, tempo para louvarmos a Deus
Num só amor, num só espírito

Deus, venha nos abençoar
E que esta união nunca falte para nós`},{title:"Bondade de Deus",lyrics:`Te amo, Deus
Tua graça nunca falha
Todos os dias
Eu estou em Tuas mãos

Desde quando me levanto
Até eu me deitar
Eu cantarei da bondade de Deus

És fiel em todo tempo
Em todo tempo Tu és tão, tão bom
Com todo fôlego que tenho
Eu cantarei da bondade de Deus

Tua doce voz
Que me guia em meio ao fogo
Na escuridão
Tua presença me conforta

Sei que és meu Pai
Que amigo és
Eu vivo na bondade de Deus

Tua bondade me seguirá
Me seguirá, Senhor
Tua bondade me seguirá
Me seguirá, Senhor

Eu me rendo a Ti, te dou o meu ser
Entrego tudo a Ti
Tua bondade me seguirá
Me seguirá, Senhor`},{title:"Cantai Ao Senhor",lyrics:`Cantai ao Senhor
Um cântico novo
Cantai ao Senhor
Todas as terras

Cantai ao Senhor
Bendizei o Seu nome
Proclamai a Sua salvação

Anunciai entre as nações
As Suas obras
Entre todos os povos
As Suas maravilhas

Por que grande é o Senhor
E mui digno de ser louvado
Mais temível do que falsos deuses

Glória e majestade
Estão diante d'Ele
Força e formosura
No Seu santuário`},{title:"Casa de Bênção",lyrics:`Minha casa será uma casa de bênção
Minha casa será um pedaço do céu
Nela estarão reunidos adoradores
Que só exaltam ao Deus verdadeiro e fiel

Minha casa será reconhecida
Como um lugar de milagre e oração
Onde Jesus tem prazer em ficar
Onde o Espírito Santo habita
Onde há prosperidade, amor e vida

Faça do meu lar, Senhor
Um lugar de harmonia
Faça do meu coração
Tua casa todo dia
Esteja à vontade pra ficar
E nunca mais partir
Pois a casa que um dia Te recebeu
Nunca mais saberá viver sem Ti`},{title:"Clamo, Jesus",lyrics:`Jesus, quero declarar Teu nome
Sobre toda mente e coração
Pois sei que existe paz em Tua presença
Clamo Jesus

Jesus, quero declarar Teu nome
Quebrando os vícios desta geração
Declaro que há esperança e liberdade
Clamo Jesus

Teu nome é cura
É poderoso
Teu nome é vida
Destrói cadeias
Dissipa as trevas
Vem incendiar

Jesus, quero declarar Teu nome
Sobre toda alma em depressão
Ansiedade e medo saiam agora
Clamo Jesus

Declare pelas ruas o nome de Jesus
Sobre a escuridão Ele vai trazer a Sua luz
Sobre sua família clame o santo nome
Jesus`},{title:"Cem Ovelhas (Ozéias de Paula)",lyrics:`Eram cem ovelhas juntas no aprisco
Eram cem ovelhas que, amante, cuidou
Porém, numa tarde, ao contálas todas
Lhe faltava uma, lhe faltava uma e triste chorou

As noventa e nove deixou no aprisco
E pelas montanhas a buscála foi
A encontrou gemendo, tremendo de frio
Curou suas feridas, pôs logo em seus ombros e ao redil
voltou

Esta mesma história volta a repetirse
Pois muitas ovelhas perdidas estão
Mas ainda hoje, o Pastor amado
Chora tuas feridas, 
chora tuas feridas e quer te salvar`},{title:"Com Muito Louvor",lyrics:`Deus não rejeita oração, oração é alimento
Nunca vi um justo sem resposta ou ficar no sofrimento
Basta somente esperar o que Deus irá fazer
Quando Ele estende Suas mãos, é a hora de vencer

Então, louve
Simplesmente louve
Tá chorando, louve
Precisando, louve
Tá sofrendo, louve
Não importa, louve
Seu louvor invade o céu

Deus vai na frente abrindo o caminho
Quebrando as correntes, tirando os espinhos
Ordena aos anjos pra contigo lutar
Ele abre as portas pra ninguém mais fechar

Ele trabalha pra o que Nele confia
Caminha contigo de noite ou de dia
Erga suas mãos, sua bênção chegou
Comece a cantar com muito louvor

Com muito louvor, com muito louvor
Com muito louvor

A gente precisa entender o que Deus está falando
Quando Ele fica em silêncio é porque está trabalhando
Basta somente esperar o que Deus irá fazer
Quando Ele estende Suas mãos, é a hora de vencer`},{title:"Consagração",lyrics:`Ao Rei dos reis, consagro tudo o que sou
De gratos louvores, transborda o meu coração
A minha vida, eu entrego nas Tuas mãos, meu Senhor
Pra Te exaltar com todo meu amor

Eu Te louvarei conforme a Tua justiça
E cantarei louvores
Pois Tu és altíssimo

Celebrarei a Ti, ó Deus, com o meu viver
Cantarei e contarei as Tuas obras
Pois por Tuas mãos foram criados
Terra, céu e mar, e todo ser que neles há

Toda a terra celebra a Ti
Com cânticos de júbilo
Pois Tu és o Deus criador

A honra (a honra)
A glória (a glória)
A força (a força)
E o poder ao Rei Jesus`},{title:"Coração Igual ao Teu (Diante do Trono)",lyrics:`Se Tu olhares, Senhor, pra dentro de mim
Nada encontrarás de bom
Mas um desejo eu tenho de ser transformado
Preciso tanto do Teu perdão
Dáme um novo coração

Dáme um coração igual ao Teu, meu Mestre
Dáme um coração igual ao Teu
Coração disposto à obedecer
Cumprir todo o Teu querer
Dáme um coração igual ao Teu

Ensiname a amar o meu irmão
A olhar com Teus olhos
Perdoar com o Teu perdão

Encheme com Teu Espírito
Endireita os meus caminhos
Ó Deus, dáme um novo coração
Encheme com Teu Espírito
Endireita os meus caminhos
Ó Deus, dáme um novo coração`},{title:"Corpo e Família (Diante do Trono)",lyrics:`Recebi um novo coração do Pai
Coração regenerado, coração transformado
Coração que é inspirado por Jesus!
Como fruto deste novo coração
Eu declaro a paz de Cristo

Te abençoo, meu irmão
Preciosa é a nossa comunhão

Somos corpo, e assim bem ajustado
Totalmente ligados, unidos, vivendo em amor
Uma família sem qualquer falsidade
Vivendo a verdade, expressando a glória do Senhor!

Uma família, vivendo o compromisso
Do grande amor de Cristo
Eu preciso de ti, querido irmão`},{title:"De Coração Pra Coração (Shirley Carvalhaes)",lyrics:`Quero cantar milhões e milhões de vezes
Com os meus amigos e irmãos
Assim como os anjos cantam lá na glória
Eu dou louvor a Deus aqui na terra
De todo o meu coração

De coração pra coração
Porque o Senhor mudou a minha vida
De coração pra coração
Estou feliz só porque Te encontrei

Milagres acontecem em minha vida
Por isso é que eu não paro de cantar
Assim como os anjos cantam lá na glória
Eu dou louvor a Deus aqui na terra
De todo o meu coração`},{title:"Descansarei (Comunidade Evangélica de Maringá)",lyrics:`Cobreme com Tuas mãos
Com poder vem me esconder Senhor

Se o trovão e o mar se erguendo vêm
Sobre a tempestade eu voarei
Sobre as águas Tu também és Rei
Descansarei, pois sei que és Deus

Minha alma está segura em Ti
Sabe bem que em Cristo firme está`},{title:"Deus Cuida de Mim",lyrics:`Eu preciso aprender um pouco aqui
Preciso aprender um pouco ali
Eu preciso aprender mais de Deus
Porque Ele é quem cuida de mim

Se uma porta se fecha aqui
Outras portas se abrem ali
Eu preciso aprender mais de Deus
Porque Ele é quem cuida de mim
Deus cuida de mim

Deus cuida de mim
Na sombra das Suas asas
Deus cuida de mim
Eu amo a Sua casa

E não ando sozinho
Não estou sozinho, pois sei
Deus cuida de mim

Se na vida não tenho direção
É preciso tomar decisão
Eu sei que existe alguém que me ama
Ele quer me dar a mão

Se uma porta se fecha aqui
Outras portas se abrem ali
Eu preciso aprender mais de Deus
Porque Ele é quem cuida de mim
Deus cuida de mim, oh`},{title:"Deus De Promessas",lyrics:`Sei que os Teus olhos
Sempre atentos, permanecem em mim
E os Teus ouvidos
Estão sensíveis para ouvir meu clamor
Posso até chorar, mas a alegria vem de manhã
És Deus de perto e não de longe
Nunca mudastes, Tu és fiel

Deus de aliança, Deus de promessas
Deus que não é homem pra mentir
Tudo pode passar, tudo pode mudar
Mas Tua Palavra vai se cumprir

Posso enfrentar o que for, eu sei quem luta por mim
Seus planos não podem ser frustrados
Minha esperança está nas mãos do grande Eu Sou
Meus olhos vão ver o impossível acontecer`},{title:"Deus Do Impossível (Toque No Altar)",lyrics:`Quando tudo diz que não
Sua voz me encoraja a prosseguir
Quando tudo diz que não
Ou parece que o mar não vai se abrir

Eu sei que não estou só
E o que dizes sobre mim não pode se frustrar
Venha em meu favor
E cumpra em mim Teu querer

O Deus do impossível não desistiu de mim
Sua destra me sustenta e me faz prevalecer
O Deus do impossível não desistiu de mim
Sua destra me sustenta e me faz prevalecer

O Deus do impossível`},{title:"Deus É Deus (Delino Marçal)",lyrics:`Minha fé não está firmada
Nas coisas que podes fazer
Eu aprendi a Te adorar pelo que és

Dele vêm o sim e o amém
Somente Dele e mais ninguém
A Deus seja o louvor

Se Deus fizer, Ele é Deus
Se não fizer, Ele é Deus
Se a porta abrir, Ele é Deus
Mas se fechar, continua sendo Deus

Se a doença vier, Ele é Deus
Se curado eu for, Ele é Deus
Se tudo der certo, Ele é Deus
Mas se não der, continua sendo Deus

Não O adoro pelo que Ele faz
Eu O adoro pelo que Ele é
Haja o que houver
Sempre será Deus`},{title:"Porque Ele Vive",lyrics:`Deus enviou Seu Filho amado
Pra me salvar e perdoar
Na cruz morreu por meus pecados
Mas ressurgiu e vivo com o Pai está

Porque Ele vive, posso crer no amanhã
Porque Ele vive, temor não há
Mas eu bem sei, eu sei que a minha vida
Está nas mãos do meu Jesus, que vivo está

E quando, enfim, chegar a hora
Em que a morte enfrentarei
Sem medo, então, terei vitória
Verei na Glória, o meu Jesus que vivo está`},{title:"Diante da Cruz (Aline Barros)",lyrics:`Ó Deus, me sondas, conheces-me
Mesmo quando falho, eu sei, me amas
Estás presente a me cercar
Em todo tempo, eu sei, me amas
Eu sei, me amas

Prostro-me diante da cruz
Vejo o sangue de Jesus
Nunca houve amor assim
Sobre a morte já venceu
Sua glória o céu encheu
Nada irá me separar

Tu és meu guia, meu protetor
Tua mão me firma
Eu sei, me amas
Eu sei, me amas

O véu rasgou, o caminho abriu
Tudo consumado está
O véu rasgou, o caminho abriu
Tudo consumado está

E quando tudo se acabar
Estarei seguro
Pois sei, me amas
Pois sei, me amas`},{title:"Digno é o Senhor (Aline Barros)",lyrics:`Graças eu te dou, Pai
Pelo preço que pagou
Sacrifício de amor
Que me comprou
Ungido do Senhor
Pelos cravos em tuas mãos
Graças eu te dou, ó meu Senhor
Lavou minha mente e coração
Me deu perdão

Restaurou-me a comunhão

Digno é o Senhor
Sobre o trono está
Soberano, criador
Vou sempre te adorar

Elevo minhas mãos
Ao Cristo que venceu
Cordeiro de Deus morreu por mim
Mas ressuscitou
Digno é o Senhor`},{title:"Digno de Glória (Asaph Borba)",lyrics:`Digno de glória e honra
Levantamos nossas mãos
Pra Teu nome exaltar
Digno de glória e honra
Levantamos nossas mãos
Pra Teu nome exaltar

Porque grande és Tu
Maravilhas fazes Tu
Não há outro igual a Ti
Não há outro igual a Ti`},{title:"Divino Companheiro (Mara Lima)",lyrics:`Divino companheiro no caminho
Sua presença sinto logo ao transitar
Já dissipaste toda sombra
Já tenho luz, a luz bendita do amor

Fica, Senhor, já se faz tarde
Tens meu coração para pousar
Faz em mim morada permanente
Fica, Senhor, fica, Senhor, meu Salvador

A sombra da noite se aproxima
E nela o tentador vai chegar
Não, não me deixe só no caminho
Ajuda-me, ajuda-me até chegar`},{title:"Ele Continua Sendo Bom",lyrics:`Um dia a gente aprende a confiar
Em um Deus que faz milagres
Que ouve a nossa oração
Que se faz presente aqui

Um dia a gente aprende a dar
Um passo só de cada vez
Mas sem duvidar
Mas sem duvidar

Ele continua sendo bom
Ele continua sendo Deus
Ele continua sendo bom
Ele continua sendo Deus

Então chega o dia de viver
Tudo que se aprendeu
E a enxergar até
O que não se pode ver
Chega o dia de entender
Até ouvir um não de Deus
Mas sem duvidar
Mas sem duvidar

Ele continua sendo bom
Ele continua sendo Deus
Ele continua sendo bom
Ele continua sendo Deus`},{title:"Ele é Exaltado (Adhemar de Campos)",lyrics:`Ele é exaltado, 
o Rei é exaltado nos céus
Eu o louvarei
Ele é exaltado, pra sempre exaltado
Seu nome louvarei

Ele é o Senhor, 
Sua verdade vai sempre reinar
Terra e céus glorificam 
Seu santo nome
Ele é exaltado, 
o Rei é exaltado nos céus`},{title:"Em Adoração (Ana Paula Valadão)",lyrics:`Em adoração
Eu me rendo a Ti
Tu és como um rio
Rio de águas vivas

Flui dentro de mim
És manancial
Fonte inesgotável
Traz vida ao coração

Como o rei Davi
Quero Te louvar
Minha alma canta a Ti, Senhor
Em adoração
Digno és de louvor
Majestade Santa
Meu prazer é Te dizer
Te amo, ó, Senhor`},{title:"Em Espírito, Em verdade",lyrics:`Em espírito, em verdade, te adoramos, te adoramos
Em espírito, em verdade, te adoramos, te adoramos

Rei dos reis e senhor te entregamos nosso viver
Rei dos reis e senhor te entregamos nosso viver

Pra te adorar ó rei dos reis, foi que eu nasci ó rei
Jesus
Meu prazer é te louvar
Meu prazer é estar nos átrios do senhor
Meu prazer é viver na casa de Deus onde flui o amor`},{title:"Escape (Carol Braga)",lyrics:`O inimigo tenta laços e embaraços
Pra me envergonhar, mas não vai
Porque eu não estou sozinho nessa guerra
Está comigo o braço forte do Senhor

Aquele que acalma o vento
Aquele que aquieta o mar
Que tira a força do fogo
E faz o leão jejuar
O Deus que derruba as muralhas
Da estéril faz mãe de filhos
É o mesmo que brada do alto
Não temas, sou contigo

Deus já tem um caminho aberto pelas águas
Faz romper muitas fontes em meio ao deserto
Haverá nuvens que trazem chuvas de bênçãos
Ouça a voz, Deus te dá escape e livramento

O inimigo tenta laços e embaraços
Pra me envergonhar, mas não vai
Porque eu não estou sozinho nessa guerra
Está comigo o braço forte do Senhor

Aquele que acalma o vento
Aquele que aquieta o mar
Que tira a força do fogo
E faz o leão jejuar
O Deus que derruba as muralhas
Da estéril faz mãe de filhos
É o mesmo que brada do alto
Não temas, sou contigo

Deus já tem um caminho aberto pelas águas
Faz romper muitas fontes em meio ao deserto
Haverá nuvens que trazem chuvas de bênçãos
Ouça a voz, Deus te dá escape e livramento

Deus já tem um caminho aberto pelas águas
Faz romper muitas fontes em meio ao deserto
Haverá nuvens que trazem chuvas de bênçãos
Ouça a voz, Deus te dá escape e livramento`},{title:"O Escudo",lyrics:`Por toda a minha vida
Ó Senhor, Te louvarei
Pois meu fôlego é a Tua vida
E nunca me cansarei

Posso ouvir a Tua voz
É mais doce do que o mel
Que me tira desta cova
E me leva até o céu

Já vi fogo e terremotos
Vento forte que passou
Já vivi tantos perigos
Mas Tua voz me acalmou

Tu dás ordem às estrelas
E ao mar, os seus limites
Eu me sinto tão seguro
No teu colo, ó Altíssimo

Não há ferrolhos, nem portas
Que se fechem diante da Tua voz
Não há doenças, nem culpa
Que fiquem de pé diante de nós
E a tempestade se acalma
Na voz Daquele que tudo criou
Pois Tua palavra é pura
Escudo para os que n'Ele creem`},{title:"Espírito Santo",lyrics:`Espírito Santo, ore por mim
Leve pra Deus tudo aquilo que eu preciso
Espírito Santo, use as palavras
Que eu necessito usar, mas não consigo

Me ajude nas minhas fraquezas
Não sei como devo pedir
Espírito Santo
Vem interceder por mim

Todas as coisas cooperam pra o bem
Daqueles que amam a Ti
Espírito Santo
Vem orar por mim

Estou clamando, estou pedindo
Só Deus sabe a dor que estou sentindo
Meu coração está ferido
But o meu clamor está subindo`},{title:"Espírito, Enche a Minha Vida",lyrics:`Espírito, enche a minha vida
Espírito, enche a minha vida
Enche-me do Teu poder
Pois de Ti eu quero ser
Espírito, enche o meu ser

As minhas mãos eu quero levantar
E em louvor Te adorar
Meu coração eu quero derramar
Diante do Teu altar`},{title:"Estrela da Manhã",lyrics:`És a nossa Estrela da Manhã
Cordeiro Santo que nos trouxe a paz
Em Tuas mãos está todo o vencer
Resposta a todo aquele que clamar
A verdade é a Tua palavra que não pode mentir
Por isso, estamos aqui

Te louvamos, ó Senhor
Pelo Teu imenso amor
Manifesta o Teu perdão e poder
E assim vamos Te adorar para sempre
Pra sempre, ó meu Deus`},{title:"Eu Sei Que Não Estou Só",lyrics:`Senhor, por mais que eu fale
Que eu não tenho medo de caminhar
Sinto uma insegurança, pois sou ser humano
Com defeitos, imperfeito

Mas sei que os Teus olhos estão
Sobre mim, a me vigiar
Mas quero ouvir Tua voz me dizendo
Não temas (não temas), Sou contigo (Sou contigo)
Só confia em mim

Eu sei que não estou só
Pois sinto Tua presença em mim
Eu sei que não estou só
Posso até descansar, repousar em Teus braços`},{title:"Te Agradeço",lyrics:`Por tudo o que tens feito
Por tudo o que vais fazer
Por Tuas promessas e tudo o que És
Eu quero Te agradecer
Com todo o meu ser

Te agradeço, meu Senhor
(Te agradeço, meu Senhor)
Te agradeço, meu Senhor
(Te agradeço, meu Senhor)

Te agradeço por me libertar e salvar
Por ter morrido em meu lugar, Te agradeço
Jesus, Te agradeço
Eu Te agradeço
Te agradeço`},{title:"Família (Aline Barros)",lyrics:`Lá, lá, lá, lá, lá, lá, lá, lá
Lá, lá, lá, lá, lá, lá, lá, lá

Vem desfrutar do amor de Deus
Você e sua casa
Deixe Jesus, que é o Rei
Entrar em seu coração
Vida melhor Ele quer te dar
Restaurar seu lar
Paz e harmonia Ele quer trazer
Pra você
Pra você

Deus alcançou e modificou
Toda a minha casa
Ainda que venha a tempestade
Não nos abalará
Vida melhor Ele quer te dar
Restaurar seu lar
Paz e harmonia Ele quer trazer
Pra você

Paz e harmonia Ele quer trazer
Pra você`},{title:"Família (Regis Danese)",lyrics:`Te agradeço pela minha família
E por Tua presença no meu lar
Te agradeço pelo pão de cada dia
Que o Senhor nunca deixou faltar

Te agradeço pela nossa harmonia
Só em Ti, Senhor, podemos confiar
Já Te agradeço pelas Tuas maravilhas
E os milagres que ainda há de operar

A minha família é bênção do Senhor
Me ensina a tratar minha família com amor
Edifica minha casa para o Teu louvor
A minha família é um presente do Senhor`},{title:"Família Debaixo da Graça",lyrics:`Um presente precioso eu ganhei
Um projeto que nasceu no coração de Deus
Meu tesouro é meu lar
Onde a base é o amor
Onde sempre quero estar

Lá em casa posso ser quem realmente sou
Diferenças até poderão acontecer
Mas quando a mágoa tem razão
Prevalece o perdão
Para sempre, assim será

A minha família debaixo da graça
Guardada nas asas de quem a criou
Bem-aventurado eu sou por ter meu lar
Na presença do Senhor`},{title:"Faz Chover",lyrics:`Assim como a corça anseia por águas
Como terra seca precisa da chuva
Meu coração tem sede de Ti
Rei meu e Deus meu

Faz chover, Senhor Jesus
Derrama a chuva neste lugarVem com o Teu rio, Senhor Jesus
Inundar o meu coração

Faz chover`},{title:"Foi No Calvário (Denise)",lyrics:`Há momentos
Que as palavras não resolvem
Mas o gesto de Jesus
Demonstra amor por nós

Foi no calvário
Que Ele mesmo sem falar
Mostrou ao mundo inteiro
O que é o amar

Aqui no mundo
As desilusões são tantas
Mas existe uma esperança
É que ele vai voltar`},{title:"Getsêmani",lyrics:`No Getsêmani foi que meu Jesus orou
Se entregando ao Pai mais uma vez
Logo vieram pessoas para O levar
Para a maior das provações
Ele tanto amou, tudo suportou
Ele carregou a nossa cruz

Vê os cravos nas mãos
Seu corpo a sofrer
Naqueles momentos de dor
Ver o Mestre a chorar
E foi por você
Que Ele mostrou tanto amor

Os soldados cuspiam no seu rosto nu
Posso ouvir o clamor da multidão
E Jesus, a olhar aquele céu azul
Pede ao Pai que lhes dê o seu perdão
Ele tanto amou, tudo suportou
Ele carregou a nossa cruz

Ele tanto, tanto me amou (Ele tanto me
amou)
Ele tudo por mim suportou (por mim
suportou)
Ele carregou minha cruz`},{title:"Grande É o Senhor",lyrics:`Grande é o Senhor e mui digno de louvor
Na cidade do nosso Deus, Seu Santo monte
Alegria de toda terra, ô

Grande é o Senhor, em quem nós temos a
vitória
Que nos ajuda contra o inimigo
Por isso, diante Dele nos prostramos, ê

Queremos o Teu nome engrandecer
E agradecer-Te por Tua obra em nossa vida
Confiamos em Teu infinito amor
Pois só Tu és o Deus eterno
Sobre toda terra e céus, Jesus`},{title:"Grandes Coisas",lyrics:`Tu és o Deus dessa terra
Tu és Rei desse povo
És o Senhor da nação
Tu és

Tu és a luz desse mundo
Esperança para os perdidos
Tu és a paz pros cansados
Tu és

Ninguém é como nosso Deus

Grandes coisas estão por vir
Grandes coisas vão acontecer nesse lugar`},{title:"Isaías 53d (Projeto Sola)",lyrics:`Ele não tinha qualquer beleza
Ou majestade pra nos atrair
Nada havia em Sua aparência
Para o desejarmos

Mais rejeitado dentre os homens
Ainda assim carregou nossas dores
O Seu castigo nos traz paz
E a esperança não se esvai

A oferta pela culpa Ele ofereceu
Pra satisfazer o Criador, Ele morreu
Pra que a Sua luz em nós pudesse brilhar
O filho do amor se entregou em nosso lugar

És o cordeiro que pelos nossos pecados foi esmagado
Sem dizer uma só palavra, se entregou aos cravos
Derramou Sua vida até a morte provando a ira amarga
Pra nos dar Sua doce graça e nos fazer viver`},{title:"Jesus Em Tua Presença",lyrics:`Jesus, em Tua presença reunimo-nos aqui
Contemplamos Tua face e rendemo-nos a Ti
Pois um dia Tua morte trouxe vida a todos nós
E nos deu completo acesso ao coração do Pai

O véu que separava já não separa mais
A luz que outrora apagada agora brilha
E cada dia brilha mais

Só pra Te adorar
E fazer Teu nome grande
E Te dar o louvor que é devido
Estamos nós aqui`},{title:"Jesus Virá",lyrics:`Um dia lindo almejo eu encontrar
A eterna glória que prometida está
Gozo e alegria posso então eu sentir
Pois Jesus Cristo já está por vir

Jesus virá
Outra vez aqui Jesus virá
Jesus virá mais uma vez aqui
E todos juntos em um só louvor cantemos
Cantemos todos, Ele é o nosso Senhor

Ele veio ao mundo pra ser mártir da paz
Ele foi tentado e não pecou jamais
A Sua vida foi exemplo de amor
Cantemos juntos, Ele é o nosso Senhor`},{title:"Jesus, Filho de Deus",lyrics:`Deixou os céus pra me encontrar
Aqui não é o Seu lugar
Um amor assim o mundo não conheceu
Naquela cruz se entregou
O Teu perdão me alcançou
Um amor assim o mundo não conheceu

No altar de adoração seja sempre exaltado
Jesus, Filho de Deus
Deixou a Sua glória, morreu em meu lugar
Jesus, Filho de Deus
Tu és Jesus, Filho de Deus

Levou sobre Si pecado e dor
Venceu a morte e ressuscitou
Um amor assim o mundo não conheceu
Levou sobre Si pecado e dor
Venceu a morte e ressuscitou
Um amor assim o mundo não conheceu

Seja exaltado, engrandecido
Seu nome é Santo, poderoso é
E não há nada que apague o Seu amor

A cruz me libertou

Jesus, Filho de Deus

Tu és Jesus, Filho de Deus`},{title:"Jesus, o Plano Perfeito",lyrics:`Um plano pra salvar
Um pacto pra selar
Silêncio no Céu

Resgate e salvação
Encheu seu coração
Ele nem hesitou

No palco do amor
O autor anunciou
A vida e salvação

Tudo que ele fez foi obedecer
O plano que Deus escreveu

E quando a minha história
Parecia ter chegado ao fim
A sua Graça me alcançou

E quando tudo parecia
Estar perdido naquela cruz
O seu sangue me libertou

Jesus, o plano perfeito
Mistério da graça que me transformou
O Seu nome é Jesus, nome sobre todos
Veio pra salvar, Ele me salvou!`},{title:"Livre Acesso",lyrics:`Senhor, eu não sou nada diante do Teu poder
Nem merecedor do Teu imenso amor
Através do Teu filho, tenho livre acesso a Ti
Que me fez chegar aos Teus pés
Me humilhar diante de Ti

Deixa o Teu rio
Passar em minha vida
Vem curar minhas feridas
Sarar as minhas dores

Livra-me, ó Deus
Das cadeias que me prendem
Toca em minh'alma
Faz em mim o Teu querer, Senhor`},{title:"Manancial (Diante do Trono)",lyrics:`Senhor, estou aqui para Te adorar
Em Tua presença desejo estar
Eu sei que nada sou
Mas vim me humilhar
Preciso de Ti
Vem me restaurar

Eu quero ser
Como um jardim fechado
Regado e cuidado
Pelo Teu Espírito

Flua em mim
Como um manancial
Do meu interior
Com águas vivas
Restaura o meu ser
Para o Teu louvor

Eu te farei
Como um jardim fechado
Regado e cuidado
Pelo Meu Espírito
Eu fluirei
Como um manancial
Do teu interior
Com águas vivas
Te restaurarei
Para o Meu louvor`},{title:"Maranata",lyrics:`Tu és a minha luz
A minha salvação
E a Ti me renderei
Se ao teu lado estou
Seguro em tuas mãos
Eu nada temerei

Ô, ô, ô, Tu és Santo, ó Senhor
Ô, ô, ô, Tu és digno de louvor

Só em Ti confiarei
Eu nada temerei
Em frente eu irei
Pois eu sei que vivo estás!
E um dia voltarás
Do céu pra nos buscar
Para sempre reinarás, aleluia!

Vem Jesus, vem Jesus!
Maranata ora, vem Senhor Jesus!`},{title:"Maravilhoso É Estar Em Tua Presença",lyrics:`Quão formoso és, Rei do universo
Tua glória enche a Terra e enche os céus
Tua glória enche a Terra
Tua glória enche os céus
Tua glória enche minha vida, Senhor

Maravilhoso é estar em Tua presença
Maravilhoso é poder Te adorar
Maravilhoso é tocar nas Tuas vestes
Maravilhoso é Te contemplar, Senhor`},{title:"Me Derramar (Vineyard)",lyrics:`Eis-me aqui outra vez
Diante de Ti abro o meu coração
Meu clamor Tu escutas
E fazes cair as barreiras em mim

És fiel, Senhor, e dizes
Palavras de amor e esperança sem fim
Ao sentir Teu toque
Por Tua bondade, libertas meu ser no calor deste lugar

Eu venho me derramar, dizer que Te amo
Me derramar, dizer: Te preciso
Me derramar, dizer que sou grato
Me derramar, dizer que és formoso`},{title:"Meu Respirar (Vineyard)",lyrics:`Este é o meu respirar
Este é o meu respirar
Teu Santo Espírito
Vivendo em mim

E este é o meu pão
E este é o meu pão
Tua Vontade
Feita em mim

E eu, eu nada sou sem Ti
E eu, perdido estou sem Ti
Jesus`},{title:"Minh’alma Engradece Ao Senhor",lyrics:`Minh'alma engrandece ao Senhor
Meu espírito se alegra
Em Deus meu Salvador
Pois com poder tem feito grandes coisas
E com misericórdia
Demonstrado amor

Santo, Santo
Santo és Senhor
Santo, Santo
Santo és Senhor

Tem enchido nossas lâmpadas
Com o óleo do Espírito
Tem feito sua vide florescer`},{title:"Mover Do Espírito",lyrics:`Quero que valorize o que você tem
Você é um ser, você é alguém
Tão importante para Deus

Nada de ficar sofrendo angústia e dor
Nesse seu complexo interior
Dizendo, às vezes, que não é ninguém
Eu venho falar do valor que você tem
Eu venho falar do valor que você tem

Ele está em você, o Espírito Santo se move em você
Até com gemidos inexprimíveis, inexprimíveis
Daí você pode, então, perceber
Que pra Ele há algo importante em você
Por isso levante e cante, exalte ao Senhor

Você tem valor, o Espírito Santo se move em você
Você tem valor, o Espírito Santo se move em você`},{title:"Nada Além Do Sangue",lyrics:`Teu sangue
Leva-me além, a todas as alturas
Onde ouço a Tua voz
Fala de Tua justiça pela minha vida
Jesus este é o Teu sangue

Tua cruz
Mostra Tua graça, fala do Amor do Pai
Que prepara para nós um caminho para Ele
Onde posso me achegar
Somente pelo sangue

Que nos lava dos pecados
Que nos traz restauração
Nada além do sangue
Nada além do sangue de Jesus

Que nos faz brancos como a neve
Aceitos como amigos de Deus
Nada além do sangue
Nada além do sangue de Jesus
Alvo mais que a neve
Alvo mais que a neve
Sim, neste sangue lavado
Mais alvo que a neve serei`},{title:"Nada Temerei",lyrics:`Se o mar se agitar e tudo escurecer
E parecer que eu não vou sobreviver
Se o meu coração sentir que é o fim
Eu vou manter meus olhos firmes no Senhor

Circunstancias não alteram as promessas do Senhor
Tudo contribui para o meu bem
Céus e terra vão passar
Mas o meu Deus não falhará
Seu amor brilhará
E sempre cuidará de mim

Nada temerei
Eu sei que não estou sozinho
O todo-poderoso é o meu amigo
Sua voz acalma o mar
Faz milagre acontecer
Posso crer e descansar em Deus`},{title:"Não Há Deus Maior",lyrics:`Não há Deus maior
Não há Deus melhor
Não há Deus tão grande
Como nosso Deus

Criou o céu, criou a Terra
Criou o Sol e as estrelas
Tudo Ele fez, tudo criou
Tudo formou

Para o Seu louvor
Para o Seu louvor
Para o Seu, para o Seu
Para o Seu louvor`},{title:"Não Tenhas Sobre Ti (Baruk)",lyrics:`Não tenhas sobre ti
Um só cuidado qualquer que seja
Pois um, somente um
Seria muito para ti
É Meu, somente Meu
Todo o trabalho
E o teu trabalho
É descansar em Mim`},{title:"Nosso Deus É Soberano",lyrics:`Nosso Deus é soberano
Ele reina antes da fundação do mundo
A terra era sem forma e vazia e o espírito do nosso Deus se movia sobre as faces das águas
Foi Ele quem criou o céu dos céus, fez separação das águas da terra seca
Foi Ele quem criou os luminares, criou a natureza, formou o homem.
Glória a Deus por Suas maravilhas, pela sua grandeza, glória a Deus, nosso Deus.`},{title:"Novo dia",lyrics:`Pela graça estou sendo curado
Pouco a pouco sendo transformado
Perfeito não sou, contudo, sou grato
Tenho lutas, mas eu não desisto
Com coragem, sigo vencendo
Perfeito não sou, contudo, sou grato

Novo dia recebi
Pra Te amar, ó Deus
E me trouxe até aqui
Para testemunhar
O que posso dizer
Senão aleluia?

Sou grato, Cristo
Sou grato, Cristo
Sou grato, Cristo
Novo dia recebi, recebi

Quando a noite se aproximava
Quase sem esperança eu estava
Minha mão segurou, por isso sou grato
Quando no fogo eu fui lançado
El Shaddai, Você estava ao meu lado
Nunca me deixou, por isso sou grato

Novo dia recebi (aleluia)
Pra Te amar, ó Deus
E me trouxe até aqui
Para testemunhar
O que posso dizer (o que posso dizer)
(Senão aleluia) senão aleluia?

Sou grato, Cristo
Sou grato, Cristo (sou grato, Cristo)
Sou grato, Cristo
Novo dia recebi (recebi), recebi (oh, ah)
Recebi
Recebi

Meu Senhor, eu só quero adorá-Lo
Você é tudo, é tudo, é tudo para mim
Meu Senhor, eu só quero adorá-Lo
Você é tudo, é tudo, é tudo para mim, oh`},{title:"O Melhor Desta Terra",lyrics:`Ah, se meu povo me escutasse
E me servisse com integridade
Eu abriria as janelas do céu
E lhe daria o trigo mais fino

Ah, se meu povo que me adora
Me adorasse acima de tudo
Com o mel puro da rocha, o sustentaria

A palavra de Deus é fiel
E jamais ela volta vazia
Se eu honrar e bendizer
Ao meu Senhor obedecer
Eu comerei o melhor desta terra`},{title:"Obrigado Jesus",lyrics:`Pelo sol da manhã
Obrigado, Jesus
Pelo dia que nasce
Obrigado, Jesus
Pelo irmão que está do meu lado, obrigado
Obrigado, obrigado, Jesus

Obrigado, Jesus
Pelo amor que não morre
Pela nova aliança
Que foi feita na cruz
Pela fé e esperança
Pela vida eterna
Obrigado, obrigado, Jesus

Pelo ar que respiro
Obrigado, Jesus
Pelo pão que alimenta
Obrigado, Jesus
Pela chuva que cai sobre a terra
Obrigado, obrigado, Jesus`},{title:"Oferta Agradável a Ti",lyrics:`A Tua Palavra escondi
Guardada no meu coração
Pra eu não pecar contra Ti, Senhor
A Tua Palavra escondi

Minhas vestes no sangue lavei
E das Tuas águas bebi
Pra ser uma oferta agradável a Ti
Minha vida a Ti consagrei

Meus dons e talentos são pra Te servir
Meus dons preciosos são Teus
Não vejo razão na minha vida sem Ti
Tu és meu Senhor e meu Deus

Assim como o fogo refina o ouro
Vem Tua obra em mim completar
Até que o mundo possa ver
Tua glória em meu rosto brilhar`},{title:"Oh, Quão Lindo Este Nome É",lyrics:`No início, eras a palavra
Um com Deus, o Altíssimo
O mistério de Tua glória
Cristo, em Ti se revelou

Oh, quão lindo esse nome é
Oh, quão lindo esse nome é
O nome de Jesus, meu Rei
Oh, quão lindo esse nome é
Maior que tudo Ele é
Oh, quão lindo esse nome é
O nome de Jesus

Deixou o céu para buscar-nos
Veio pra nos resgatar
Amor maior que o meu pecado
Nada vai nos separar

Oh, quão maravilhoso é
Oh, quão maravilhoso é
O nome de Jesus, meu Rei
Oh, quão maravilhoso é
Maior que tudo Ele é
Oh, quão maravilhoso é
O nome de Jesus
Oh, quão maravilhoso é
O nome de Jesus

A morte venceste, o véu Tu rompeste
A tumba vazia agora está
O céu Te adora, proclama Tua glória
Pois ressuscitaste e vivo estás

És invencível, inigualável
Hoje e pra sempre reinarás
Teu é o reino, Tua é a glória
Acima de todo nome estás

Poderoso esse nome é
Poderoso esse nome é
O nome de Jesus, meu Rei
Poderoso esse nome é
Mais forte que tudo é
Poderoso esse nome é
O nome de Jesus`},{title:"O Rei Está Voltando",lyrics:`Os fiéis são trasladados, seu trabalho aqui findou
A carreira desses santos nesta vida já cessou
Do Senhor, os bons ceifeiros terminaram seu labor
A colheita completou-se, é a vinda do Senhor
O Rei está voltando, o Rei está voltando
A trombeta está soando para os santos trasladar
Sim, o Rei está voltando, o Rei está voltando
Aleluia, Ele vem nos buscar

Desta Terra estão subindo os remidos para o céu
Ao encontro do Deus Filho que aparece além do véu
E o templo está deserto, sua pregação cessou
É notícia em toda parte: Jesus Cristo já voltou

Os remidos vão subindo, é a festa celestial
Todo o céu está se abrindo num bem-vindo sem igual
Qual o som de muitas águas, nós ouvimos entoar
Aleluias ao Cordeiro, vamos indo para o lar`},{title:"Poderoso Deus",lyrics:`Ao que está assentado no trono
E ao Cordeiro seja o louvor
Ao que está assentado no trono
E ao Cordeiro seja o louvor

Seja a honra, seja a glória, ooh, seja o domínio
Pelos séculos dos séculos
Seja a honra, seja a glória, ooh, seja o domínio
Pelos séculos dos séculos, ooh, oh

Poderoso Deus, poderoso Deus
Poderoso Deus, minh'alma anseia por Ti`},{title:"Preciso De Ti (Diante do Trono)",lyrics:`Preciso de Ti
Preciso do Teu perdão
Preciso de Ti
Quebranta meu coração

Como a corça anseia por águas, assim tenho sede
Como terra seca, assim é minh'alma
Preciso de Ti

Distante de Ti, Senhor, não posso viver
Não vale a pena existir
Escuta o meu clamor
Mais que o ar que eu respiro
Preciso de Ti

Não posso esquecer
O que fizeste por mim (o que fizeste por mim)
Como alto é o céu
Tua misericórdia é sem fim 
Como um pai se compadece dos filhos, assim Tu me amas 
Afasta as minhas transgressões
Preciso de Ti 

E as lutas vêm tentando me afastar de Ti
Frieza, escuridão procuram me cegar
Mas eu não vou desistir
Ajuda-me, Senhor
Eu quero permanecer Contigo até o fim`},{title:"Primeiro Amor",lyrics:`Quero voltar ao início de tudo
Encontrar-me Contigo, Senhor
Quero rever meus conceitos, valores
Eu quero reconstruir
Vou regressar ao caminho
Volver às primeiras obras, Senhor

Eu me arrependo, Senhor
Me arrependo, Senhor
Me arrependo, Senhor

Eu quero voltar
Ao primeiro amor
Ao primeiro amor
Eu quero voltar a Deus`},{title:"Primeira Essência (Jardim Particular)",lyrics:`Estou no meu jardim
Tranquei a porta, abri meu coração
Reguei minhas raízes
Com minhas lágrimas, gotas de adoração

Senhor, não quero que os meus olhos
Percam o brilho do primeiro amor por Ti
Não quero que em mim se perca
O desejo de Te adorar

Vem, Senhor
E me resgata todos os dias só pra Te adorar
Quero ser Teu bom perfume
Primeira essência
Jardim particular

Te adoro...`},{title:"Quão Grande É O Meu Deus",lyrics:`Quão grande é o meu Deus
Cantarei quão grande é o meu Deus
E todos hão de ver
Quão grande é o meu Deus

Com esplendor de um rei
Em majestade e luz
Faz a terra se alegrar, faz a terra se alegrar
Ele é a própria luz
E as trevas vão fugir
Tremer com Sua voz, tremer com Sua voz

Quão grande é o meu Deus
Cantarei quão grande é o meu Deus
E todos hão de ver
Quão grande é o meu Deus

Por gerações Ele é
O tempo está em Tuas mãos
O começo e o fim, o começo e o fim
Deus triúno é
Filho, Espírito e Pai
Cordeiro e Leão, Cordeiro e Leão

Sobre todo nome é o Seu
Tu és digno do louvor
Eu cantarei
Quão grande é o meu Deus (é o meu Deus)`},{title:"Quebrantado (Vineyard)",lyrics:`Eu olho para a cruz
Para a cruz eu vou
Do seu sofrer, participar
Sua obra, vou cantar

Meu salvador
Na cruz, mostrou
O amor do pai
O justo Deus

Pela cruz, me chamou
Gentilmente, me atraiu
E eu, sem palavras, me aproximo
Quebrantado por seu amor

Imerecida vida
De graça recebi
Por sua cruz
Da morte me livrou

Trouxe-me à vida
Eu estava condenado
Mas agora, pela cruz
Eu fui reconciliado

Impressionante é o seu amor
Me redimiu e me mostrou o quanto é fiel
Impressionante é o seu amor
Me redimiu e me mostrou o quanto é fiel`},{title:"Quem É Esse? (Julliany Souza)",lyrics:`Eu me deparei com aquele mestre escrevendo
Com o dedo no chão, ouvindo os fariseus a lhes falar
Que a Lei de Moisés me condenava por meus erros
Mas nenhuma pedra Ele pegou pra me apedrejar

Eu só tinha os meus pecados pra lhe oferecer
Mas mesmo assim me amou
Mas mesmo assim me amou
Com uma frase: Atire a pedra quem nunca pecou
Ele me perdoou
Ele me perdoou
Sua irresistível graça me alcançou

Quem é esse?
Que era sem pecado e não me condenou
No lugar da morte, vida me ofertou
O Cordeiro que por mim se entregou
E os meus pecados levou

Eu só tinha os meus pecados pra lhe oferecer
Mas mesmo assim me amou
Mas mesmo assim me amou
Com uma frase: Atire a pedra quem nunca pecou
Ele me perdoou
Ele me perdoou
Sua irresistível graça me alcançou

Quem é esse?
Que era sem pecado e não me condenou
No lugar da morte, vida me ofertou
O Cordeiro que por mim se entregou
E os meus pecados levou
Quem é esse?
Que era sem pecado e não me condenou
No lugar da morte, vida me ofertou
O Cordeiro que por mim se entregou
E os meus pecados levou

Eu não Te troco por nada
Não há espaço pra mais nada
Todo vazio que havia em mim
Hoje é Sua morada
A minha alma buscava
E nada me completava
A Tua presença é o que faltava em mim
Minha vida foi transformada

Eu não Te troco por nada
Não há espaço pra mais nada
Todo vazio que havia em mim
Hoje é Sua morada
A minha alma buscava
E nada me completava
A Tua presença é o que faltava em mim
Minha vida foi transformada

Quem é esse?
Que era sem pecado e não me condenou
No lugar da morte, vida me ofertou
O Cordeiro que por mim se entregou
E os meus pecados levou
Quem é esse?
Que era sem pecado e não me condenou
No lugar da morte, vida me ofertou
O Cordeiro que por mim se entregou
E os meus pecados levou

Eu não Te troco por nada
Não há espaço pra mais nada
Todo vazio que havia em mim
Hoje é Sua morada
A minha alma buscava
E nada me completava
A Tua presença é o que faltava em mim
Minha vida foi transformada
Minha vida foi transformada

Eu só tinha os meus pecados pra lhe oferecer
Mas mesmo assim me amou
Mas mesmo assim me amou

Eu não Te troco por nada
Não há espaço pra mais nada
Todo vazio que havia em mim
Hoje é Sua morada
A minha alma buscava
E nada me completava
A Tua presença é o que faltava em mim
Minha vida foi transformada`},{title:"Lugar Secreto",lyrics:`Tu és tudo o que eu mais quero
O meu fôlego, Tu és
Em Teus braços, é o meu lugar
Estou aqui, estou aqui

Pai, eu amo Sua presença
Teu sorriso é vida em mim
Eu seguro em Suas mãos
Confio em Ti, confio em Ti

Quero ir mais fundo
Leva-me mais perto
Onde eu Te encontro
No lugar secreto
Aos Teus pés, me rendo
Pois a Tua glória quero ver

Tudo o que eu mais quero é Te ver
Me envolva com Tua glória e poder
Tua majestade é real
Tua voz ecoa em meu ser`},{title:"Quero Subir (Diante do Trono)",lyrics:`Quero subir ao monte santo de Sião
E entoar um novo cântico ao meu Deus
Mais que palavras, minha vida eu quero entregar
Purifica o meu coração para entrar em Tua presença
Contemplar Tua grandeza

Te adoro, Senhor
Em espírito e em verdade
Me prostro aos Teus pés na beleza da santidade
Te dou meu louvor, que seja um cheiro suave
E um som agradável a Ti, pois digno és`},{title:"Um Novo Dia",lyrics:`Pela graça estou sendo curado
Pouco a pouco sendo transformado
Perfeito não sou, contudo, sou grato
Tenho lutas, mas eu não desisto
Com coragem, sigo vencendo
Perfeito não sou, contudo, sou grato

Novo dia recebi
Pra Te amar, ó Deus
E me trouxe até aqui
Para testemunhar
O que posso dizer
Senão aleluia?

Sou grato, Cristo
Sou grato, Cristo
Sou grato, Cristo
Novo dia recebi, recebi

Quando a noite se aproximava
Quase sem esperança eu estava
Minha mão segurou, por isso sou grato
Quando no fogo eu fui lançado
El Shaddai, Você estava ao meu lado
Nunca me deixou, por isso sou grato

Novo dia recebi (aleluia)
Pra Te amar, ó Deus
E me trouxe até aqui
Para testemunhar
O que posso dizer (o que posso dizer)
(Senão aleluia) senão aleluia?

Sou grato, Cristo
Sou grato, Cristo (sou grato, Cristo)
Sou grato, Cristo
Novo dia recebi (recebi), recebi (oh, ah)
Recebi
Recebi

Meu Senhor, eu só quero adorá-Lo
Você é tudo, é tudo, é tudo para mim
Meu Senhor, eu só quero adorá-Lo
Você é tudo, é tudo, é tudo para mim, oh

Meu Senhor, eu só quero adorá-Lo (só quero adorá-Lo)
Você é tudo, é tudo, é tudo (pra mim, Senhor)
(Oh, meu senhor) meu Senhor (eu só quero Te adorar), eu só
quero adorá-Lo
Você é tudo, é tudo, é tudo para mim

Novo dia recebi (aleluia)
Pra Te amar, ó Deus (e me trouxe)
E me trouxe até aqui
Para testemunhar (oh)
O que posso dizer
Senão aleluia?

Sou grato, Cristo (sou grato)
Sou grato, Cristo (oh, eu sou grato)
Sou grato, Cristo
Novo dia recebi (recebi), recebi
Recebi
Recebi
Oh`},{title:"Reina Em Mim (Vineyard)",lyrics:`Sobre toda a Terra Tu És o Rei
Sobre as montanhas e o pôr do Sol
Uma coisa só meu desejo é
Vem reinar de novo em mim!

Sobre o meu pensar, tudo que eu falar
Faz-me refletir a beleza que há em Ti
Tu És para mim mais que tudo aqui
Vem reinar de novo em mim!

Reina em mim com Teu poder
Sobre a escuridão
Sobre os sonhos meus
Tu És o Senhor de tudo o que souVem reinar em mim, Senhor!

Sobre o meu pensar, tudo que eu falar
Faz-me refletir a beleza que há em Ti
Tu És para mim mais que tudo aqui
Vem reinar de novo em mim!

Reina em mim com Teu poder
Sobre a escuridão
Sobre os sonhos meus
Tu És o Senhor de tudo o que sou
Inimigo que me tenta...
Vem reinar em mim, Senhor!

Reina em mim com Teu poder
Sobre a escuridão
Sobre os sonhos meus
Tu És o Senhor de tudo o que sou
Vem reinar em mim, Senhor!
Vem reinar em mim, Senhor!
Vem reinar em mim, Senhor!`},{title:"Rendido Estou",lyrics:`Toma-me, rendido estou
Aos pés da cruz me encontrei
O que tenho Te entrego, oh Deus

Vem limpar as minhas mãos
Purificar meu coração
Que eu ande em tudo que Tu tens pra mim

Oh, oh, oh, oh
Eis me aqui, rendido estou
Oh, oh, oh, oh
Eu sou Teu, e Tu és meu, Jesus

Meus momentos e os dias meus
Meu respirar e meu viver
Que sejam todos, pra Ti, oh Deus

Oh, oh, oh, oh
Eis me aqui, rendido estou
Oh, oh, oh, oh
Eu sou Teu, e Tu és meu

Minha vida dou a Ti, Senhor
Rendido a Ti estou
E pra sempre cantarei
Faz em mim o Teu querer`},{title:"Renova-me (Aline Barros)",lyrics:`Renova-me, Senhor Jesus
Já não quero ser igual
Renova-me, Senhor Jesus
Põe em mim Teu coração

Porque muito do que há dentro de mim
Necessita ser mudado, Senhor
Porque tudo o que há dentro do meu coração
Necessita mais de Ti

Renova-me, Senhor Jesus`},{title:"Jesus É o Rei da Glória - Salmo 24 (Daniel Souza)",lyrics:`Todo poder Te foi dado no céu e na Terra
Todo poder Te foi dado
Deus, o Pai Te exaltou sobre todas as coisas
Deus, o Pai Te exaltou

Manifestado em carne, justificado em Espírito
Visto dos anjos pregado aos gentios
Crido no mundo e recebido na glória

Levantai oh portas as vossas cabeças
Levantai-vos oh entradas eternas
E entrará o Rei da glória
Quem é este Rei da glória?
O Senhor forte e poderoso
O Senhor poderoso na guerra

Levantai oh portas as vossas cabeças
Levantai-vos oh entradas eternas
E entrará o Rei da glória
Quem é este Rei da glória?
O Senhor dos exércitos, Ele é o Rei da glória

Jesus, Jesus
Ele é o Rei, Ele é o Rei
Ele é o Rei da glória`},{title:"Santo Pra Sempre",lyrics:`As muitas gerações rendidas em
louvor
Cantando ao Cordeiro uma canção
Os que em Ti se foram e os que hão de crer
Cantando ao Cordeiro uma canção

Teu nome é o mais alto
Teu nome é o maior
Teu nome é sobre todos
Os tronos e domínios, governos e poderes
Teu nome é sobre todos

E os anjos clamam: Santo
Toda criação: Santo
Exaltado és: Santo
Santo pra sempre

Quem foi perdoado e redimido foi
Cante ao Cordeiro uma canção
Aquele que é livre e leva o Seu nome
Cante ao Cordeiro uma canção
Cantaremos para sempre, amém

E os anjos clamam: Santo
Toda criação: Santo
Exaltado és: Santo
Santo pra sempre

O Teu povo canta: Santo
Sim, ao Rei dos reis: Santo
Tu sempre serás Santo
Santo pra sempre`},{title:"Seja Engrandecido",lyrics:`Seja engrandecido, óh Deus da minha vida,
Tú És o Deus da minha salvação,

És a minha Rocha, a minha segurança
Meus lábios sempre Te exaltarão 

Aleluia, Te louvo 
Pois sei que sobre todos És Senhor

Aleluia (aleluia),
aleluia, (aleluia),
Aleluia, louvemos ao Senhor`},{title:"Solta O Cabo Da Nau",lyrics:`Oh, por que duvidar sobre as ondas do mar
Quando Cristo caminho abriu?
Quando forçado és contra as ondas lutar
Seu amor a ti, quer revelar

Solta o cabo da nau
Toma os remos nas mãos
E navega com fé em Jesus
E então tu verás, que bonança se faz
Pois com Ele seguro serás

Trevas vêm te assustar
Tempestades no mar
Da montanha, o Mestre te vê
E na tribulação, Ele vem socorrer
Sua mão bem te pode suster

Quando pedes mais fé, Ele ouve, oh crê
Mesmo sendo em tribulação
Quando a mão de poder, o teu ego tirar
Sobre as ondas poderás andar`},{title:"Senhor Te Quero (Vineyard)",lyrics:`Eu te busco
Te procuro, oh, Deus
No silêncio tu estás

Eu te busco
Toda hora espero em ti
Revela-te a mim
Conhecer-te eu quero mais

Senhor, te quero
Quero ouvir tua voz
Senhor, te quero mais

Quero tocar-te
Tua face eu quero ver
Senhor, te quero mais

Prosseguindo
Para o alvo eu vou
A coroa conquistar

Vou lutando
Nada pode me impedir
Eu vou te seguir
Conhecer-te eu quero mais

Senhor, te quero
Quero ouvir tua voz
Senhor, te quero mais

Quero tocar-te
Tua face eu quero ver
Senhor, te quero mais

Prosseguindo
Para o alvo eu vou
A coroa conquistar

Vou lutando
Nada pode me impedir
Eu vou te seguir
Conhecer-te eu quero mais

Senhor, te quero
Quero ouvir tua voz
Senhor, te quero mais

Quero tocar-te
Tua face eu quero ver
Senhor, te quero mais

Senhor, te quero
Quero ouvir tua voz
Senhor, te quero mais

Quero tocar-te
Tua face eu quero ver
Senhor, te quero mais`},{title:"Sonda-me",lyrics:`Sonda-me, Senhor, e me conhece
Quebranta o meu coração
Transforma-me conforme a Tua palavra
E enche-me até que em mim se ache só a Ti

Então
Usa-me, Senhor
Usa-me

Como um farol que brilha à noite
Como ponte sobre as águas
Como abrigo no deserto
Como flecha que acerta o alvo
Eu quero ser usado da maneira que Te agrade
Em qualquer hora e em qualquer lugar
Eis aqui a minha vida, usa-me, Senhor
Usa-me

Sonda-me
Quebranta-me
Transforma-me
Enche-me
E usa-me`},{title:"Te Exaltamos",lyrics:`Te exaltamos, ó Cordeiro santo de Deus
E declaramos as Tuas maravilhas
Teu espírito se manifestará nesses dias
Trazendo vitória às nossas vidas

Quem intentará contra o braço forte do Senhor?
Quem impedirá o Seu agir?
Quem poderá nos resistir?
Se a palavra de vitória já foi liberada a nós`},{title:"Teu Reino",lyrics:`Os reinos se abalam
Os povos se curvam
As bocas se abrem
As mãos se levantam
Pra dizer que Tu és o Rei
Pra dizer que Tu és o Senhor

Teu Reino é sempre eterno
Firmado em misericórdia
Justiça e igualdade
Bondade e fidelidade
A Tua igreja Te adora
A Tua igreja Te adora`},{title:"Teu Santo Nome",lyrics:`Todo ser que vive louve o nome do Senhor
Toda criatura se derrame aos Seus pés
Ao som da Sua voz o universo se desfaz
Não há outro nome comparado ao grande Eu Sou

E mesmo sendo pó
Com tudo que há em mim
Confessarei
Que céus e terra passarão
Mas o Teu nome é eterno

Todo joelho dobrará
Ao ouvir Teu nome
Teu Santo nome
Todo ser confessará
Louvado seja o Teu nome
Teu Santo nome`},{title:"Todas As Coisas",lyrics:`Eu sei que sempre estás comigo, Senhor
Também sei que nada acontece sem a Tua vontade
Mas preciso aprender a confiar em Ti
Mas preciso aprender a descansar em Ti
Tu és meu Senhor

Todas as coisas cooperam para o bem
Daqueles que te amam`},{title:"Todavia Me Alegrarei",lyrics:`Eu tenho um Deus
Que não vai deixar
Essa luta me matar
O desespero me tomar

Por mais pressão
Que esteja a situação
O controle ainda está
Na palma de suas mãos

O choro dura uma noite, mas a alegria
Ela vem pela manhã
Eu creio, eu creio

O choro dura uma noite, mas a alegria
Ela vem pela manhã
Eu creio, eu creio

Ainda que a figueira não floresça
Que não haja fruto na vide
E o produto da oliveira minta

Todavia eu me alegrarei
Todavia eu me alegrarei
Todavia eu me alegrarei`},{title:"Tu És Soberano",lyrics:`Tu És soberano sobre a Terra
Sobre os céus Tu és Senhor absoluto
Tudo que existe e acontece
Tu o sabes muito bem
Tu és tremendo
E apesar dessa glória que tens
Tu te importas comigo também
E este amor tão grande
Elevame, amarrame a Ti`},{title:"Vem, Esta É a Hora",lyrics:`Vem, esta é a hora da adoração
Vem, dar a Ele teu coração
Vem, assim como estás para adorar
Vem, assim como estás diante do Pai
Vem

Toda língua confessará o Senhor
Todo joelho se dobrará
Mas aquele que a Ti escolher
O tesouro maior terá`},{title:"Venho Senhor, Minha Vida Oferecer",lyrics:`Venho, Senhor, minha vida oferecer
Como oferta de amor e sacrifício
Quero minha vida a Ti entregar
Como oferta viva em Teu altar

Pois pra Te adorar foi que eu nasci
Cumpre em mim o Teu querer
Faça o que está em Teu coração
E que a cada dia eu queira mais e mais
Estar ao Teu lado, Senhor`},{title:"Vim Para Adorar-te (Quatro Por Um)",lyrics:`Luz das nações
Que dissipa as trevas
Abre os meus olhos pra ver

Lindo tu és
Eu só quero adorar-Te
Dar os meus dias pra Ti

Vim para adorar-Te
Vim para prostrar-me
Vim para dizer-Te: És meu Deus

Totalmente amável
Totalmente digno
És maravilhoso para mim

Rei sobre todos, Tu és exaltado
Entronizado nos céus

Humildemente viestes a terra
Se entregou por amor

Não saberei quanto custou
Ver meus pecados lá na cruz`},{title:"Vinho E Pão",lyrics:`Na mesa, o pão
O vinho também
No peito, uma dor
Com aquilo que vem

De um lado, um sorriso
Do outro, traição
Ele abençoa
E parte o pão

E lava os pés
Daqueles fiéis
E mesmo o traidor
Recebe assim

Deu vinho e o pão
Ao invés de rancor
Lavou nossos pés
E enxugou com a dor

Naquele partir estava 
todo o meu ser
Partido por mim 
e pelo meu viver
No vinho, o amor, 
no sangue, o perdão
Em Seu meigo olhar, 
a minha salvação

Um hino cantou
Depois de cear
E era o louvor
Que vinha preparar

A maior canção
Cantada na cruz
Escrita na ceia
Pelo meu Jesus`},{title:"Vou Te Alegrar",lyrics:`Eu me rendo a Ti
Perante os homens, perante tudo
Quero que o universo seja a minha testemunha

Vou erguer, perante o Teu trono, minha adoração
E levar com ela toda minha gratidão

Senhor, és o motivo da minha alegria
Deus meu, és o caminho distante do mundo

Vou Te alegrar com o meu louvor
Eu quero Te tocar com o meu amor
Poder Te abraçar, sentir o Teu pulsar
Teu coração bater ao meu

Te amo, Te adoro
Me prostro pra Te adorar, Te alegrar`},{title:"Você Não Vai Parar (Samuel Messias)",lyrics:`Se tentaram matar os teus sonhos
Sufocando o teu coração
Se lançaram você numa cova
E ferido, perdeu a visão
Não desista, não pare de crer
Os sonhos de Deus jamais vão morrer
Não desista, não pare de lutar
Não pare de adorar

Levanta teus olhos e vê
Deus está restaurando o teu ser
E a tua história Ele vai mudar

Você não vai parar
A tua história não termina aqui
Não é o fim, Deus tem muito mais pra ti
Você não vai parar
Ainda há uma esperança
Confia em Deus, Ele é a tua segurança`},{title:"Tributo a Yehovah (Adhemar de Campos)",lyrics:`Eu sou grato por tudo que tenho
O tesouro maior deste mundo
Me foi dado como herança eterna
Maior prova de um amor tão profundo

Tenho vida, alegria e paz
Consolo em meu coração
E a certeza de que nunca estarei só

Eu louvo a Iehovah, Iehovah
O Deus que me salvou, Iehovah
A Ele toda glória, Iehovah
A Ele o meu louvor, Iehovah`},{title:"Amigo de Deus (Adhemar de Campos)",lyrics:`Não existe nada melhor
Do que ser amigo de Deus
Caminhar seguro na luz
Desfrutando do Seu amor

Ter a paz na tribulação
Viver com Cristo no coração
Compreender os caminhos de Deus
E ter sempre a Sua provisão

Quero ser amigo de Deus
Quero ser amigo de Deus
Pois na hora da angústia e da dor
Ele sempre será o meu Senhor`},{title:"Louvemos ao Senhor (Adhemar de Campos)",lyrics:`Louvemos ao Senhor
Louvemos ao Senhor
Adoremos no Seu santo monte
Nosso amado Pai
Seu nome é Santo

Louvemos ao Senhor
Pois Seu nome é Santo
Louvemos ao Senhor
Pois Seu nome é Santo

Magnifiquemos ao Senhor
Ao Rei que é digno de louvor
Excelso, supremo e mui digno de louvor
Hosana, Hosana, Hosana ao nosso Rei`},{title:"Vitorioso És (Gabriel Guedes)",lyrics:`As muralhas vão cair
E as cadeias vão quebrar
Pois eu sei que Tu és Deus
E tudo podes transformar

Vitorioso És, Jesus
Vitorioso És
Vitorioso És, Jesus
Vitorioso És

Teu nome é maior
Tua glória enche a Terra
Todo joelho se dobrará
Diante de Ti, Senhor`},{title:"Nada Mais (Gabriel Guedes)",lyrics:`Envolto em Tua presença
Aos Teus pés é onde eu quero estar
Em meio à Tua santidade
Aqui quero ficar

Não vim atrás de bênçãos
Jesus, não deves nada para mim
Mais do que Tu podes fazer
Só quero a Ti

Lamento por viver indiferente
Lamento por não cantar de coração
Leva-me ao primeiro amor
Abro o meu coração a Ti

Lamento por viver só pra mim mesmo
Lamento por não ver que És meu sustento
Leva-me ao primeiro amor
Abro o meu coração a Ti

Não vim atrás de bênçãos
Jesus, não deves nada para mim
Mais do que Tu podes fazer
Só quero a Ti

Só quero a Ti
Nada mais, nada mais
Nada além de Ti
Só quero a Ti
Nada mais, nada mais
Nada além de Ti

Só quero a Ti
Nada mais, nada mais
Nada além de Ti
Só quero a Ti
Nada mais, nada mais
Nada além de Ti

Só quero a Ti
Nada mais, nada mais
Nada além de Ti

Não vim atrás de bênçãos
Jesus, não deves nada para mim
Mais do que Tu podes fazer
Só quero a Ti

Só quero a Ti
Nada mais, nada mais
Nada além de Ti
Só quero a Ti
Nada mais, nada mais
Nada além de Ti`},{title:"Oceanos (Gabriel Guedes)",lyrics:`Tua voz me chama sobre as águas
Onde os meus pés podem falhar
E ali Te encontro no mistério
Em meio ao mar, confiarei

Ao Teu nome clamarei
E além das ondas olharei
Se o mar crescer
Somente em Ti descansarei
Pois eu sou Teu e Tu és meu

Tua graça abunda em meio às águas
Tua mão direita me guiará
Se os meus pés falharem, não temerei
Pois a Tua presença me guardará`},{title:"Me Ama (Diante do Trono)",lyrics:`Ele tem ciúmes de mim
O Seu amor é como um furacão
E eu me rendo ao peso da Sua glória
Quando de repente percebo
Quão maravilhoso Ele é
E o quanto Ele me quer

Oh, Ele nos ama
Oh, como Ele nos ama
Como Ele nos ama

Nós somos a porção Dele, e Ele é o nosso prêmio
Atraídos pela graça aos Seus olhos
Se a graça é um oceano, estamos afundando
Se o céu beija a terra como um beijo molhado
E o meu coração vira um peito apertado
Eu não tenho tempo pra manter os meus arrependimentos
Quando eu penso no Seu amor`},{title:"Preciso de Ti (Diante do Trono)",lyrics:`Preciso de Ti, preciso do Teu perdão
Preciso de Ti, quebranta meu coração
Como a corça anseia por águas
Assim suspira a minha alma
Espírito de Deus, oh vem me saciar

Preciso de Ti
Mais do que a própria vida
Preciso de Ti
Como o ar que eu respiro
Preciso de Ti
Mais que a tudo neste mundo
Preciso de Ti, Senhor`},{title:"Águas Purificadoras / O Cheiro das Águas (Diante do Trono)",lyrics:`Existe um rio, Senhor
Que flui do Teu grande amor
Águas que correm do trono
Águas que curam, que limpam

Por onde o rio passar
Tudo vai transformar
Pois leva a vida do próprio Deus
E este rio está neste lugar

Quero beber do Teu rio, Senhor
Sacia a minha sede, lava o meu interior
Eu quero fluir em Tuas águas
Eu quero beber da Tua fonte
Fonte de águas vivas
Tu és a fonte, Senhor

Há esperança para a árvore cortada
Novamente crescerá
Ao cheiro das águas brotará!`},{title:"Vem de Ti, Senhor (Diante do Trono)",lyrics:`Não tenhas sobre ti
Um só cuidado qualquer que seja
Pois um
Somente um, seria muito para ti

É Meu, somente Meu todo o trabalho
E o teu trabalho é descansar em Mim
É Meu, somente Meu todo o trabalho
E o teu trabalho é descansar em Mim

Não temas quando enfim
Tiveres que tomar decisão
Entrega tudo a Mim
Confia de todo o coração

Descansa em Mim
Descansa em Mim
O teu trabalho é descansar em Mim`},{title:"Quem É Esse? (Julliany Souza)",lyrics:`Eu me deparei com aquele mestre escrevendo
Com o dedo no chão, ouvindo os fariseus a lhes falar
Que a Lei de Moisés me condenava por meus erros
Mas nenhuma pedra Ele pegou pra me apedrejar

Eu só tinha os meus pecados pra lhe oferecer
Mas mesmo assim me amou
Mas mesmo assim me amou
Com uma frase: Atire a pedra quem nunca pecou
Ele me perdoou
Ele me perdoou
Sua irresistível graça me alcançou

Quem é esse?
Que era sem pecado e não me condenou
No lugar da morte, vida me ofertou
O Cordeiro que por mim se entregou
E os meus pecados levou

Eu só tinha os meus pecados pra lhe oferecer
Mas mesmo assim me amou
Mas mesmo assim me amou
Com uma frase: Atire a pedra quem nunca pecou
Ele me perdoou
Ele me perdoou
Sua irresistível graça me alcançou

Quem é esse?
Que era sem pecado e não me condenou
No lugar da morte, vida me ofertou
O Cordeiro que por mim se entregou
E os meus pecados levou
Quem é esse?
Que era sem pecado e não me condenou
No lugar da morte, vida me ofertou
O Cordeiro que por mim se entregou
E os meus pecados levou

Eu não Te troco por nada
Não há espaço pra mais nada
Todo vazio que havia em mim
Hoje é Sua morada
A minha alma buscava
E nada me completava
A Tua presença é o que faltava em mim
Minha vida foi transformada

Eu não Te troco por nada
Não há espaço pra mais nada
Todo vazio que havia em mim
Hoje é Sua morada
A minha alma buscava
E nada me completava
A Tua presença é o que faltava em mim
Minha vida foi transformada

Quem é esse?
Que era sem pecado e não me condenou
No lugar da morte, vida me ofertou
O Cordeiro que por mim se entregou
E os meus pecados levou
Quem é esse?
Que era sem pecado e não me condenou
No lugar da morte, vida me ofertou
O Cordeiro que por mim se entregou
E os meus pecados levou

Eu não Te troco por nada
Não há espaço pra mais nada
Todo vazio que havia em mim
Hoje é Sua morada
A minha alma buscava
E nada me completava
A Tua presença é o que faltava em mim
Minha vida foi transformada
Minha vida foi transformada

Eu só tinha os meus pecados pra lhe oferecer
Mas mesmo assim me amou
Mas mesmo assim me amou

Eu não Te troco por nada
Não há espaço pra mais nada
Todo vazio que havia em mim
Hoje é Sua morada
A minha alma buscava
E nada me completava
A Tua presença é o que faltava em mim
Minha vida foi transformada`},{title:"Lugar Secreto (Gabriela Rocha)",lyrics:`Tu és tudo que eu mais quero
O meu fôlego, Tu és
Em Teus braços, é o meu lugar
Estou aqui, estou aqui

Pai, eu amo Sua presença
Teu sorriso é vida em mim
Eu seguro em Suas mãos
Confio em Ti, confio em Ti

Quero ir mais fundo
Leva-me mais perto
Onde eu Te encontro
No lugar secreto
Aos Teus pés, me rendo
Pois a Tua glória quero ver`},{title:"Espírito, Enche a Minha Vida (Quatro por Um)",lyrics:`Espírito, enche a minha vida
Enche-me com Teu poder
Pois de Ti eu quero ser
Espírito, enche o meu ser

As minhas mãos eu quero levantar
E em louvor Te adorar
Meu coração eu quero derramar
Diante do Teu altar`},{title:"Deus Proverá (Gabriela Rocha / Eyshila)",lyrics:`Deus proverá, Deus proverá
Eu sei que proverá
Mesmo que a figueira não floresça
Mesmo que o fruto da vide minta
Eu confiarei em Ti

Eu sei que Deus proverá
Na minha vida proverá
A minha casa, a minha família
Eu entrego em Tuas mãos

Se a doença chegar, Ele proverá a cura
Se a dor me alcançar, Ele proverá o consolo
Eu não temerei, pois o Senhor está comigo
Ele é o meu pastor, e nada me faltará`},{title:"O Escudo (Voz da Verdade)",lyrics:`Por toda a minha vida, ó Senhor, Te louvarei
Pois meu fôlego é a Tua vida
E nunca me cansarei
Posso ouvir a Tua voz
É mais doce do que o mel
Que me tira desta cova
E me leva até o céu

Já vi fogo e terremotos
Vento forte que passou
Já vivi tantos perigos
Mas Tua voz me acalmou
Tu dás ordem às estrelas
E ao mar os seus limites
Eu me sinto tão seguro
No Teu colo, oh, Altíssimo

Não há ferrolhos, nem portas
Que se fechem diante da Tua voz
Não há doenças, nem culpa
Que fiquem de pé diante de nós
E a tempestade se acalma
Na voz D'aquele que tudo criou
Pois Sua palavra é pura
Escudo para os que n'Ele creem`}],uD={gold:"#D4B36D"},cD=["Gênesis","Êxodo","Levítico","Números","Deuteronômio","Josué","Juízes","Rute","1Samuel","2Samuel","1Reis","2Reis","1Crônicas","2Crônicas","Esdras","Neemias","Ester","Jó","Salmos","Provérbios","Eclesiastes","Cânticos","Isaías","Jeremias","Lamentações","Ezequiel","Daniel","Oseias","Joel","Amós","Obadias","Jonas","Miqueias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias","Mateus","Marcos","Lucas","João","Atos","Romanos","1Coríntios","2Coríntios","Gálatas","Efésios","Filipenses","Colossenses","1Tessalonicenses","2Tessalonicenses","1Timóteo","2Timóteo","Tito","Filemom","Hebreus","Tiago","1Pedro","2Pedro","1João","2João","3João","Judas","Apocalipse"],dD=n=>["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][n],mD=()=>{const[n,i]=G.useState(""),[r,s]=G.useState(!1),[c,f]=G.useState("Todos"),[d,h]=G.useState(""),p=[{id:1,nome:"Adeílda Gomes de Oliveira",celular:"74 99963-6488",status:"Comungante",oficio:"Não oficial"},{id:2,nome:"Adevaldo Marques Rios",celular:"74 99979-5490",status:"Comungante",oficio:"Presbítero"},{id:3,nome:"Adonel Oliveira",celular:"Não informado",status:"Comungante",oficio:"Diácono"},{id:4,nome:"Agnaldo de Sá",celular:"Não informado",status:"Não Comungante",oficio:"Não oficial"},{id:5,nome:"Alzerita Santos de Souza",celular:"74 99956-6871",status:"Comungante",oficio:"Não oficial"},{id:6,nome:"Anderson Hangel Souza Franco",celular:"74 9927-1727",status:"Comungante",oficio:"Não oficial"},{id:7,nome:"Carlito Oliveira Cunha",celular:"74 99911-354X",status:"Comungante",oficio:"Presbítero em disponibilidade"},{id:8,nome:"Diana Rios Alves Fagundes",celular:"74 99967-9797",status:"Comungante",oficio:"Não oficial"},{id:9,nome:"Levi Rios Alves Fagundes",celular:"74 99867-3305",status:"Comungante",oficio:"Não oficial"}];if(!r)return S.jsxs("div",{className:"text-center py-24 bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-xl mx-auto mt-10",children:[S.jsx(kc,{size:64,className:"mx-auto mb-6 text-[#D4B36D]"}),S.jsx("h2",{className:"text-3xl font-serif font-bold text-slate-900 mb-2",children:"Acesso Restrito"}),S.jsx("p",{className:"text-slate-500 mb-10 uppercase tracking-widest text-sm",children:"Apenas Liderança IPVP"}),S.jsx("input",{type:"password",placeholder:"Digite a Senha",className:"border-2 border-slate-200 p-4 rounded-xl outline-none focus:border-[#D4B36D] mr-2 text-center text-lg font-bold w-64",value:n,onChange:y=>i(y.target.value)}),S.jsx("button",{onClick:()=>{n==="2933"?s(!0):alert("Senha incorreta!")},className:"bg-[#0f172a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#D4B36D] transition-colors mt-4 md:mt-0",children:"Entrar"})]});const g=p.filter(y=>{const b=y.nome.toLowerCase().includes(d.toLowerCase()),T=c==="Todos"||y.status===c;return b&&T});return S.jsxs("div",{className:"py-10 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-10 mt-10 animate-in fade-in zoom-in duration-500",children:[S.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8 border-b border-slate-100 pb-6 gap-4",children:[S.jsx("h2",{className:"text-3xl font-serif font-bold text-[#163328]",children:"Rol de Membros"}),S.jsx("button",{onClick:()=>window.print(),className:"bg-[#D4B36D] text-slate-900 px-6 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2 shadow-lg",children:"🖨️ Imprimir Relatório"})]}),S.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-8",children:[S.jsxs("div",{className:"relative flex-1",children:[S.jsx(Wy,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:20}),S.jsx("input",{type:"text",placeholder:"Buscar irmão por nome...",className:"w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl outline-none focus:border-[#D4B36D] font-medium text-slate-700 bg-slate-50",value:d,onChange:y=>h(y.target.value)})]}),S.jsxs("select",{className:"border-2 border-slate-200 px-6 py-3 rounded-xl outline-none focus:border-[#D4B36D] font-bold text-slate-700 bg-slate-50 uppercase tracking-widest text-xs cursor-pointer",value:c,onChange:y=>f(y.target.value),children:[S.jsx("option",{value:"Todos",children:"Todos os Status"}),S.jsx("option",{value:"Comungante",children:"Comungantes"}),S.jsx("option",{value:"Não Comungante",children:"Não Comungantes"})]}),S.jsxs("button",{className:"bg-[#163328] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-800 text-xs flex items-center gap-2",children:[S.jsx(Fy,{size:16})," Cadastrar"]})]}),S.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-200 shadow-sm",children:S.jsxs("table",{className:"w-full text-left border-collapse",children:[S.jsx("thead",{children:S.jsxs("tr",{className:"bg-[#0f172a] text-white uppercase tracking-widest text-[10px]",children:[S.jsx("th",{className:"p-5 font-bold",children:"Nome do Membro"}),S.jsx("th",{className:"p-5 font-bold",children:"Celular"}),S.jsx("th",{className:"p-5 font-bold",children:"Status"}),S.jsx("th",{className:"p-5 font-bold",children:"Ofício"})]})}),S.jsx("tbody",{children:g.map(y=>S.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50 transition-colors",children:[S.jsx("td",{className:"p-5 font-bold text-slate-800",children:y.nome}),S.jsx("td",{className:"p-5 text-slate-600 font-medium",children:y.celular}),S.jsx("td",{className:"p-5",children:S.jsx("span",{className:`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${y.status==="Comungante"?"bg-green-100 text-green-800":"bg-amber-100 text-amber-800"}`,children:y.status})}),S.jsx("td",{className:"p-5 text-slate-600 font-medium",children:y.oficio})]},y.id))})]})}),g.length===0&&S.jsxs("div",{className:"text-center py-16",children:[S.jsx(f2,{size:48,className:"mx-auto text-slate-300 mb-4"}),S.jsx("p",{className:"text-slate-500 font-medium text-lg",children:"Nenhum irmão encontrado com essa busca."})]})]})},fD=()=>S.jsxs("section",{id:"home",className:"relative h-screen flex items-center justify-center overflow-hidden",children:[S.jsxs("div",{className:"absolute inset-0 z-0",children:[S.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-fixed transform scale-105",style:{backgroundImage:"url('/fundo-igreja.jpg')"}}),S.jsx("div",{className:"absolute inset-0 bg-black/60"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"})]}),S.jsxs("div",{className:"relative z-10 text-center px-6 mt-16 w-full flex flex-col items-center",children:[S.jsx(Mo.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"text-8xl md:text-[140px] font-serif font-bold text-white tracking-tighter mb-4",children:"IPVP"}),S.jsx(Mo.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},className:"text-sm md:text-xl font-bold uppercase tracking-[0.3em] text-[#D4B36D] mb-6",children:"Igreja Presbiteriana em Várzea do Poço - BA"}),S.jsx(Mo.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.9},className:"text-4xl md:text-6xl text-white mt-4",style:{fontFamily:'"Great Vibes", "Brush Script MT", cursive'},children:"Vivendo Um Novo Tempo"})]})]}),hD=()=>{const n=lD.flatMap(i=>i.announcements);return S.jsx("section",{id:"avisos",className:"py-24 px-6 bg-[#0f172a]",children:S.jsxs("div",{className:"max-w-6xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-16",children:[S.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-white",children:"Avisos da Igreja"}),S.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),S.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:n.map((i,r)=>S.jsxs("div",{className:"group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all",children:[i.image&&S.jsx("div",{className:"w-full bg-black/50 overflow-hidden",children:S.jsx("img",{src:i.image,alt:"Aviso",className:"w-full h-[400px] object-contain group-hover:scale-105 transition-transform duration-700"})}),S.jsxs("div",{className:"p-8 flex items-start gap-4",children:[S.jsx(d2,{size:24,className:"text-[#D4B36D] shrink-0 mt-1"}),S.jsx("p",{className:"text-lg font-serif italic text-white/90",children:i.text})]})]},r))})]})})},pD=()=>{const n=new Date().getMonth(),i=G.useMemo(()=>rD.filter(s=>s.month===n).sort((s,c)=>s.day-c.day),[n]);let r="";return n===3?r="/niverabril2026.jpeg":n===4?r="/nivermaio2026.jpg":n===5&&(r="/niverjunho2026.jpg"),S.jsx("section",{id:"birthdays",className:"py-24 px-6 bg-white",children:S.jsxs("div",{className:"max-w-6xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-16",children:[S.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900",children:"Aniversariantes"}),S.jsxs("p",{className:"text-xl text-slate-500 uppercase tracking-widest mt-4",children:["Mês de ",dD(n)]}),S.jsx("div",{className:"w-16 h-1 bg-[#163328] mx-auto mt-6"})]}),r&&S.jsx("div",{className:"mb-16 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 max-w-4xl mx-auto",children:S.jsx("img",{src:r,className:"w-full h-auto hover:scale-105 transition-transform duration-700",onError:s=>s.currentTarget.style.display="none"})}),S.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:i.map((s,c)=>S.jsxs("div",{className:"px-6 py-4 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-[#163328] hover:text-white transition-colors group",children:[S.jsx("span",{className:"font-serif text-3xl font-bold text-[#D4B36D] mb-2",children:s.day}),S.jsx("span",{className:"font-bold text-slate-800 group-hover:text-white transition-colors",children:s.name})]},c))})]})})},gD=()=>{const[n,i]=G.useState(new Date().getMonth()),r=G.useMemo(()=>rv.find(s=>s.month===n),[n]);return S.jsx("section",{id:"agenda",className:"py-24 px-6 bg-slate-50",children:S.jsxs("div",{className:"max-w-5xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-16",children:[S.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900",children:"Agenda 2026"}),S.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),S.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-12",children:rv.map(s=>S.jsx("button",{onClick:()=>i(s.month),className:Mr("px-6 py-3 rounded-full text-xs font-bold transition-all uppercase tracking-widest",n===s.month?"bg-[#163328] text-white shadow-lg":"bg-white text-slate-500 hover:bg-slate-200"),children:s.name},s.month))}),S.jsx(xd,{mode:"wait",children:r&&S.jsxs(Mo.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"bg-white p-10 md:p-16 rounded-[2rem] shadow-xl border border-slate-100",children:[S.jsxs("div",{className:"text-center mb-10 border-b border-slate-100 pb-10",children:[S.jsx("p",{className:"font-bold text-sm uppercase tracking-[0.2em] text-[#D4B36D] mb-4",children:r.theme}),S.jsxs("p",{className:"text-2xl font-serif italic text-slate-800",children:['"',r.verse,'"']})]}),S.jsx("div",{className:"space-y-4 max-w-3xl mx-auto",children:r.events.map((s,c)=>S.jsxs("div",{className:"flex items-center gap-6 p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100",children:[S.jsx(ZA,{size:24,className:"text-[#163328]"}),S.jsx("p",{className:"text-slate-700 font-medium text-lg",children:s})]},c))})]},n)})]})})},vD=()=>S.jsx("section",{id:"leadership",className:"py-24 px-6 bg-white",children:S.jsxs("div",{className:"max-w-6xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-16",children:[S.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900",children:"Nossa Liderança"}),S.jsx("div",{className:"w-16 h-1 bg-[#163328] mx-auto mt-6"})]}),S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10 mb-20",children:[S.jsxs("div",{className:"group text-center",children:[S.jsxs("div",{className:"w-64 h-64 mx-auto rounded-full overflow-hidden mb-6 shadow-2xl relative",children:[S.jsx("img",{src:"/foto-pastor.jpg",className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",onError:n=>n.currentTarget.src="https://via.placeholder.com/300?text=Pastor"}),S.jsx("div",{className:"absolute inset-0 border-4 border-[#D4B36D] rounded-full z-10"})]}),S.jsx("h4",{className:"text-3xl font-serif font-bold text-slate-900 mb-2",children:yc.pastor.name}),S.jsx("p",{className:"text-sm uppercase tracking-widest text-[#D4B36D] font-bold mb-6",children:"Pastor Titular"}),S.jsxs("a",{href:`https://wa.me/55${yc.pastor.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest py-3 px-8 rounded-full bg-slate-900 text-white hover:bg-[#D4B36D] transition-colors",children:[S.jsx(Gc,{size:14})," Falar"]})]}),yc.elders.map((n,i)=>S.jsxs("div",{className:"group text-center",children:[S.jsxs("div",{className:"w-64 h-64 mx-auto rounded-full overflow-hidden mb-6 shadow-2xl relative",children:[S.jsx("img",{src:n.name.includes("Adevaldo")?"/foto-adevaldo.jpg":"/foto-elique.jpg",className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",onError:r=>r.currentTarget.src="https://via.placeholder.com/300?text=Presbítero"}),S.jsx("div",{className:"absolute inset-0 border-4 border-[#163328] rounded-full z-10"})]}),S.jsx("h4",{className:"text-3xl font-serif font-bold text-slate-900 mb-2",children:n.name}),S.jsx("p",{className:"text-sm uppercase tracking-widest text-slate-500 font-bold mb-6",children:"Presbítero"}),S.jsxs("a",{href:`https://wa.me/55${n.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest py-3 px-8 rounded-full bg-slate-100 text-slate-900 hover:bg-[#163328] hover:text-white transition-colors",children:[S.jsx(Gc,{size:14})," Falar"]})]},i))]})]})}),yD=()=>S.jsx("section",{id:"resources",className:"py-24 px-6 bg-[#0f172a] text-white",children:S.jsxs("div",{className:"max-w-6xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-16",children:[S.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold",children:"Crescimento Espiritual"}),S.jsx("p",{className:"text-slate-400 mt-4 uppercase tracking-widest",children:"Documentos & Manuais"}),S.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),S.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-16",children:[S.jsxs("a",{href:"/estatuto_ipvp_2026.pdf",download:!0,className:"flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all",children:[S.jsx(Mi,{size:18,className:"text-[#D4B36D]"})," Estatuto 2026"]}),S.jsxs("a",{href:"/guia_trabalho_saf.pdf",download:!0,className:"flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all",children:[S.jsx(Mi,{size:18,className:"text-[#D4B36D]"})," Guia SAF"]}),S.jsxs("a",{href:"/guia_trabalho_uph.pdf",download:!0,className:"flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all",children:[S.jsx(Mi,{size:18,className:"text-[#D4B36D]"})," Guia UPH"]}),S.jsxs("a",{href:"/manual_unificado.pdf",download:!0,className:"flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all",children:[S.jsx(Mi,{size:18,className:"text-[#D4B36D]"})," Manual Unificado"]}),S.jsxs("a",{href:"/manual_presbiteriano_2025.pdf",download:!0,className:"flex items-center gap-3 px-6 py-4 bg-[#D4B36D] text-slate-900 rounded-xl font-bold text-sm transition-all shadow-lg",children:[S.jsx(Mi,{size:18})," Manual IPB"]})]})]})}),bD=()=>{const[n,i]=G.useState({book:"João",cap:"3",ver:"16"}),r=s=>{s.preventDefault(),window.open(`https://www.bibliaonline.com.br/nvi/${n.book.toLowerCase()}/${n.cap}/${n.ver}`,"_blank")};return S.jsx("section",{id:"bible",className:"py-24 px-6 bg-slate-50",children:S.jsxs("div",{className:"max-w-4xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-12",children:[S.jsx(XA,{size:48,className:"mx-auto mb-6 text-[#163328]"}),S.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900",children:"Bíblia Sagrada"}),S.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),S.jsxs("form",{onSubmit:r,className:"bg-white p-8 rounded-[2rem] shadow-2xl flex flex-col md:flex-row gap-4 border border-slate-100",children:[S.jsx("select",{value:n.book,onChange:s=>i({...n,book:s.target.value}),className:"flex-1 p-4 rounded-xl border border-slate-200 outline-none text-lg font-medium text-slate-700",children:cD.map(s=>S.jsx("option",{value:s,children:s},s))}),S.jsx("input",{type:"number",placeholder:"Cap",value:n.cap,onChange:s=>i({...n,cap:s.target.value}),className:"w-full md:w-24 p-4 rounded-xl border border-slate-200 outline-none text-lg font-medium text-center"}),S.jsx("input",{type:"number",placeholder:"Ver",value:n.ver,onChange:s=>i({...n,ver:s.target.value}),className:"w-full md:w-24 p-4 rounded-xl border border-slate-200 outline-none text-lg font-medium text-center"}),S.jsx("button",{type:"submit",className:"px-8 py-4 bg-[#163328] text-white rounded-xl font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors",children:"Ler"})]})]})})},SD=()=>{const[n,i]=G.useState(""),[r,s]=G.useState(null),c=Array.isArray(lv)?lv:[],f=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),d=n.length>2?c.filter(h=>`${h.title} ${h.lyrics}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(f)):[];return S.jsx("section",{id:"lyrics",className:"py-24 px-6 bg-white",children:S.jsxs("div",{className:"max-w-4xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-16",children:[S.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900",children:"Louvores"}),S.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),r?S.jsxs("div",{className:"bg-slate-50 p-10 md:p-16 rounded-[3rem]",children:[S.jsxs("div",{className:"flex justify-between items-start mb-10 border-b border-slate-200 pb-8",children:[S.jsx("h3",{className:"text-4xl font-serif font-bold text-[#163328]",children:r.title}),S.jsx("button",{onClick:()=>{s(null),i("")},className:"p-4 bg-white rounded-full text-slate-500 shadow-sm hover:text-red-500",children:S.jsx($y,{size:24})})]}),S.jsx("pre",{className:"whitespace-pre-wrap font-sans text-xl md:text-2xl leading-relaxed text-slate-700 font-medium",children:r.lyrics})]}):S.jsxs("div",{children:[S.jsxs("div",{className:"relative mb-10 shadow-2xl rounded-2xl",children:[S.jsx(Wy,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-400",size:28}),S.jsx("input",{type:"text",placeholder:"Digite um trecho ou título...",value:n,onChange:h=>i(h.target.value),className:"w-full pl-20 pr-6 py-6 rounded-2xl border-none outline-none font-serif text-2xl text-slate-800 bg-slate-50 focus:bg-white transition-colors"})]}),d.length>0&&S.jsx("div",{className:"space-y-4",children:d.map((h,p)=>S.jsxs("button",{onClick:()=>s(h),className:"w-full text-left p-6 rounded-2xl border border-slate-100 hover:border-[#D4B36D] hover:shadow-lg transition-all flex items-center justify-between group bg-white",children:[S.jsx("span",{className:"font-serif text-xl font-bold text-slate-800 group-hover:text-[#163328]",children:h.title}),S.jsx(FA,{className:"text-slate-300 group-hover:text-[#D4B36D]"})]},p))})]})]})})},TD=()=>S.jsx("section",{id:"curso",className:"py-24 px-6 bg-[#0f172a]",children:S.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[S.jsxs("div",{className:"text-center mb-16",children:[S.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-white",children:"Preparando-se para Servir"}),S.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),S.jsx("div",{className:"relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10",children:S.jsx("iframe",{className:"w-full h-full",src:"https://www.youtube.com/embed/yAu3BtPWi4s",title:"Curso",frameBorder:"0",allowFullScreen:!0})})]})}),xD=()=>S.jsx("section",{id:"giving",className:"py-24 px-6 bg-slate-50",children:S.jsxs("div",{className:"max-w-4xl mx-auto text-center bg-white rounded-[3rem] p-16 shadow-2xl border border-slate-100 relative overflow-hidden",children:[S.jsx("div",{className:"absolute top-0 left-0 w-full h-2 bg-[#D4B36D]"}),S.jsx(IA,{size:56,className:"mx-auto mb-8 text-[#163328]"}),S.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8",children:"Dízimos e Ofertas"}),S.jsx("div",{className:"bg-[#0f172a] text-white py-6 px-10 rounded-2xl inline-block font-mono text-2xl md:text-3xl font-bold tracking-widest mb-8 shadow-xl",children:"PIX: 03.507.028/0001-08"}),S.jsx("p",{className:"text-lg font-bold uppercase tracking-[0.2em] text-[#D4B36D]",children:"Banco SICOOB | Ag: 3289 | CC: 118524"})]})}),ED=()=>{const[n,i]=G.useState({name:"",contact:"",message:""}),r=s=>{s.preventDefault();const c=`*Site*%0ANome: ${n.name}%0AContato: ${n.contact}%0A*Msg:* ${n.message}`;window.open(`https://wa.me/5574999829797?text=${c}`,"_blank")};return S.jsx("section",{id:"contact",className:"py-24 px-6 bg-white",children:S.jsxs("div",{className:"max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6",children:"Fale Conosco"}),S.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mb-12"}),S.jsxs("form",{onSubmit:r,className:"space-y-6",children:[S.jsx("input",{type:"text",required:!0,placeholder:"Seu Nome",className:"w-full p-6 bg-slate-50 rounded-2xl border-none outline-none font-medium text-slate-800 focus:ring-2 focus:ring-[#D4B36D]",value:n.name,onChange:s=>i({...n,name:s.target.value})}),S.jsx("input",{type:"text",required:!0,placeholder:"Seu Telefone",className:"w-full p-6 bg-slate-50 rounded-2xl border-none outline-none font-medium text-slate-800 focus:ring-2 focus:ring-[#D4B36D]",value:n.contact,onChange:s=>i({...n,contact:s.target.value})}),S.jsx("textarea",{required:!0,rows:5,placeholder:"Sua Mensagem...",className:"w-full p-6 bg-slate-50 rounded-2xl border-none resize-none outline-none font-medium text-slate-800 focus:ring-2 focus:ring-[#D4B36D]",value:n.message,onChange:s=>i({...n,message:s.target.value})}),S.jsx("button",{type:"submit",className:"w-full py-6 bg-[#0f172a] text-white rounded-2xl font-bold text-lg tracking-widest uppercase hover:bg-[#163328] transition-colors",children:"Enviar WhatsApp"})]})]}),S.jsxs("div",{className:"rounded-[3rem] h-full min-h-[500px] text-white p-12 flex flex-col items-center justify-center relative overflow-hidden",children:[S.jsx("div",{className:"absolute inset-0 bg-[#163328]"}),S.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at center, white 1px, transparent 1px)",backgroundSize:"20px 20px"}}),S.jsxs("div",{className:"relative z-10 text-center",children:[S.jsx(n2,{size:64,className:"mx-auto mb-8 text-[#D4B36D]"}),S.jsx("h3",{className:"text-4xl font-serif mb-6 font-bold",children:"Localização"}),S.jsxs("p",{className:"text-white/80 mb-12 text-xl font-medium",children:["R. Durval Gama, 17",S.jsx("br",{}),"Várzea do Poço - BA"]}),S.jsx("a",{href:"https://www.google.com/maps/search/?api=1&query=R.+Durval+Gama,+17,+Várzea+do+Poço+-+BA,+44715-000",target:"_blank",rel:"noreferrer",className:"px-12 py-5 bg-[#D4B36D] text-slate-900 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl",children:"Abrir Mapa"})]})]})]})})},AD=()=>{const[n,i]=G.useState(!1),r=[{icon:S.jsx(g2,{size:24}),href:"https://www.youtube.com/@IPBVARZEADOPOCO",color:"bg-red-600"},{icon:S.jsx(t2,{size:24}),href:"https://www.instagram.com/ipvarzeapoco",color:"bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"},{icon:S.jsx(Gc,{size:24}),href:"https://wa.me/5574999829797",color:"bg-green-500"}];return S.jsxs("div",{className:"fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4",children:[S.jsx(xd,{children:n&&r.map((s,c)=>S.jsx(Mo.a,{href:s.href,target:"_blank",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:Mr("w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white",s.color),children:s.icon},c))}),S.jsx("button",{onClick:()=>i(!n),className:"w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all",style:{backgroundColor:n?"#0f172a":uD.gold},children:S.jsx(Fy,{size:36,className:Mr(n&&"rotate-45")})})]})};function DD(){const[n,i]=G.useState("home"),[r,s]=G.useState(!1),[c,f]=G.useState(!1);G.useEffect(()=>{window.scrollTo(0,0)},[n]),G.useEffect(()=>{const h=()=>s(window.scrollY>50);return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const d=[{name:"Avisos",href:"#avisos"},{name:"Agenda",href:"#agenda"},{name:"Bíblia",href:"#bible"},{name:"Louvores",href:"#lyrics"},{name:"Dízimos",href:"#giving"}];return S.jsxs("div",{className:"min-h-screen font-sans selection:bg-[#D4B36D] selection:text-[#0f172a]",children:[S.jsxs("nav",{className:Mr("fixed top-0 left-0 right-0 z-50 transition-all duration-500",r?"bg-[#0f172a]/95 backdrop-blur-md py-4 shadow-2xl":"bg-transparent py-8"),children:[S.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex items-center justify-between",children:[S.jsxs("div",{className:"flex flex-col cursor-pointer",onClick:()=>i("home"),children:[S.jsx("span",{className:"font-serif text-3xl font-bold leading-none text-white",children:"IPVP"}),S.jsx("span",{className:"text-[9px] uppercase font-bold tracking-widest text-[#D4B36D]",children:"Várzea do Poço"})]}),n==="home"&&S.jsx("div",{className:"hidden lg:flex items-center gap-8",children:d.map((h,p)=>S.jsx("a",{href:h.href,className:"text-white/80 hover:text-[#D4B36D] text-xs font-bold uppercase tracking-[0.2em] transition-colors",children:h.name},p))}),S.jsxs("div",{className:"hidden lg:flex items-center gap-4",children:[n==="home"&&S.jsx("a",{href:"#contact",className:"px-6 py-2.5 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all",children:"Contato"}),S.jsx("button",{onClick:()=>i(n==="home"?"membros":"home"),className:"px-6 py-2.5 rounded-full bg-[#D4B36D] text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2",children:n==="home"?S.jsxs(S.Fragment,{children:[S.jsx(kc,{size:16})," Membresia"]}):"← Voltar ao Portal"})]}),S.jsx("button",{className:"lg:hidden text-white",onClick:()=>f(!c),children:c?S.jsx($y,{size:28}):S.jsx(i2,{size:28})})]}),S.jsx(xd,{children:c&&S.jsxs(Mo.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"absolute top-full left-0 right-0 bg-[#0f172a] shadow-2xl p-6 flex flex-col gap-6 lg:hidden border-t border-white/10",children:[n==="home"&&d.map(h=>S.jsx("a",{href:h.href,onClick:()=>f(!1),className:"text-xl font-serif text-white/80 hover:text-[#D4B36D] border-b border-white/10 pb-4",children:h.name},h.name)),S.jsx("button",{onClick:()=>{i(n==="home"?"membros":"home"),f(!1)},className:"w-full px-6 py-4 rounded-xl bg-[#D4B36D] text-slate-900 font-bold uppercase tracking-widest flex justify-center items-center gap-2",children:n==="home"?"Acesso Membresia":"Voltar ao Portal"})]})})]}),S.jsx("main",{children:n==="home"?S.jsxs("div",{className:"bg-white",children:[S.jsx(fD,{}),S.jsx(hD,{}),S.jsx(pD,{}),S.jsx(gD,{}),S.jsx(vD,{}),S.jsx(yD,{}),S.jsx(bD,{}),S.jsx(SD,{}),S.jsx(TD,{}),S.jsx(xD,{}),S.jsx(ED,{})]}):S.jsx("div",{className:"bg-slate-50 pt-32 pb-24 px-6 min-h-screen",children:S.jsx("div",{className:"max-w-7xl mx-auto",children:S.jsx(mD,{})})})}),S.jsxs("footer",{className:"py-16 text-center bg-[#0f172a] text-white",children:[S.jsx(kc,{size:48,className:"mx-auto mb-6 text-[#D4B36D]"}),S.jsx("p",{className:"font-serif font-bold text-3xl mb-2",children:"Igreja Presbiteriana de Várzea do Poço"}),S.jsx("p",{className:"text-xs font-semibold text-white/40 tracking-[0.2em] uppercase mb-8",children:"Fidelidade à Palavra de Deus e Compromisso com a Verdade"}),S.jsx("div",{className:"h-1 w-16 bg-[#D4B36D] mx-auto rounded-full"})]}),S.jsx(AD,{})]})}XS.createRoot(document.getElementById("root")).render(S.jsx(G.StrictMode,{children:S.jsx(DD,{})}));
