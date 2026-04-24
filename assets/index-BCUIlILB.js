(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();var Ku={exports:{}},Ei={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function _S(){if(zp)return Ei;zp=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:d,ref:c!==void 0?c:null,props:f}}return Ei.Fragment=i,Ei.jsx=r,Ei.jsxs=r,Ei}var qp;function LS(){return qp||(qp=1,Ku.exports=_S()),Ku.exports}var b=LS(),Fu={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function US(){if(jp)return ue;jp=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),x=Symbol.iterator;function N(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,U={};function P(A,_,Z){this.props=A,this.context=_,this.refs=U,this.updater=Z||q}P.prototype.isReactComponent={},P.prototype.setState=function(A,_){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,_,"setState")},P.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function X(){}X.prototype=P.prototype;function G(A,_,Z){this.props=A,this.context=_,this.refs=U,this.updater=Z||q}var H=G.prototype=new X;H.constructor=G,V(H,P.prototype),H.isPureReactComponent=!0;var Y=Array.isArray;function oe(){}var F={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function ie(A,_,Z){var K=Z.ref;return{$$typeof:o,type:A,key:_,ref:K!==void 0?K:null,props:Z}}function Ae(A,_){return ie(A.type,_,A.props)}function Ve(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function Oe(A){var _={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Z){return _[Z]})}var ht=/\/+/g;function lt(A,_){return typeof A=="object"&&A!==null&&A.key!=null?Oe(""+A.key):_.toString(36)}function Pe(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(oe,oe):(A.status="pending",A.then(function(_){A.status==="pending"&&(A.status="fulfilled",A.value=_)},function(_){A.status==="pending"&&(A.status="rejected",A.reason=_)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function O(A,_,Z,K,ne){var re=typeof A;(re==="undefined"||re==="boolean")&&(A=null);var be=!1;if(A===null)be=!0;else switch(re){case"bigint":case"string":case"number":be=!0;break;case"object":switch(A.$$typeof){case o:case i:be=!0;break;case y:return be=A._init,O(be(A._payload),_,Z,K,ne)}}if(be)return ne=ne(A),be=K===""?"."+lt(A,0):K,Y(ne)?(Z="",be!=null&&(Z=be.replace(ht,"$&/")+"/"),O(ne,_,Z,"",function(Ca){return Ca})):ne!=null&&(Ve(ne)&&(ne=Ae(ne,Z+(ne.key==null||A&&A.key===ne.key?"":(""+ne.key).replace(ht,"$&/")+"/")+be)),_.push(ne)),1;be=0;var $e=K===""?".":K+":";if(Y(A))for(var fe=0;fe<A.length;fe++)K=A[fe],re=$e+lt(K,fe),be+=O(K,_,Z,re,ne);else if(fe=N(A),typeof fe=="function")for(A=fe.call(A),fe=0;!(K=A.next()).done;)K=K.value,re=$e+lt(K,fe++),be+=O(K,_,Z,re,ne);else if(re==="object"){if(typeof A.then=="function")return O(Pe(A),_,Z,K,ne);throw _=String(A),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return be}function Q(A,_,Z){if(A==null)return A;var K=[],ne=0;return O(A,K,"","",function(re){return _.call(Z,re,ne++)}),K}function W(A){if(A._status===-1){var _=A._result;_=_(),_.then(function(Z){(A._status===0||A._status===-1)&&(A._status=1,A._result=Z)},function(Z){(A._status===0||A._status===-1)&&(A._status=2,A._result=Z)}),A._status===-1&&(A._status=0,A._result=_)}if(A._status===1)return A._result.default;throw A._result}var me=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},J={map:Q,forEach:function(A,_,Z){Q(A,function(){_.apply(this,arguments)},Z)},count:function(A){var _=0;return Q(A,function(){_++}),_},toArray:function(A){return Q(A,function(_){return _})||[]},only:function(A){if(!Ve(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ue.Activity=S,ue.Children=J,ue.Component=P,ue.Fragment=r,ue.Profiler=c,ue.PureComponent=G,ue.StrictMode=s,ue.Suspense=p,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ue.__COMPILER_RUNTIME={__proto__:null,c:function(A){return F.H.useMemoCache(A)}},ue.cache=function(A){return function(){return A.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(A,_,Z){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var K=V({},A.props),ne=A.key;if(_!=null)for(re in _.key!==void 0&&(ne=""+_.key),_)!L.call(_,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&_.ref===void 0||(K[re]=_[re]);var re=arguments.length-2;if(re===1)K.children=Z;else if(1<re){for(var be=Array(re),$e=0;$e<re;$e++)be[$e]=arguments[$e+2];K.children=be}return ie(A.type,ne,K)},ue.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},ue.createElement=function(A,_,Z){var K,ne={},re=null;if(_!=null)for(K in _.key!==void 0&&(re=""+_.key),_)L.call(_,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ne[K]=_[K]);var be=arguments.length-2;if(be===1)ne.children=Z;else if(1<be){for(var $e=Array(be),fe=0;fe<be;fe++)$e[fe]=arguments[fe+2];ne.children=$e}if(A&&A.defaultProps)for(K in be=A.defaultProps,be)ne[K]===void 0&&(ne[K]=be[K]);return ie(A,re,ne)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(A){return{$$typeof:h,render:A}},ue.isValidElement=Ve,ue.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:W}},ue.memo=function(A,_){return{$$typeof:g,type:A,compare:_===void 0?null:_}},ue.startTransition=function(A){var _=F.T,Z={};F.T=Z;try{var K=A(),ne=F.S;ne!==null&&ne(Z,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(oe,me)}catch(re){me(re)}finally{_!==null&&Z.types!==null&&(_.types=Z.types),F.T=_}},ue.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ue.use=function(A){return F.H.use(A)},ue.useActionState=function(A,_,Z){return F.H.useActionState(A,_,Z)},ue.useCallback=function(A,_){return F.H.useCallback(A,_)},ue.useContext=function(A){return F.H.useContext(A)},ue.useDebugValue=function(){},ue.useDeferredValue=function(A,_){return F.H.useDeferredValue(A,_)},ue.useEffect=function(A,_){return F.H.useEffect(A,_)},ue.useEffectEvent=function(A){return F.H.useEffectEvent(A)},ue.useId=function(){return F.H.useId()},ue.useImperativeHandle=function(A,_,Z){return F.H.useImperativeHandle(A,_,Z)},ue.useInsertionEffect=function(A,_){return F.H.useInsertionEffect(A,_)},ue.useLayoutEffect=function(A,_){return F.H.useLayoutEffect(A,_)},ue.useMemo=function(A,_){return F.H.useMemo(A,_)},ue.useOptimistic=function(A,_){return F.H.useOptimistic(A,_)},ue.useReducer=function(A,_,Z){return F.H.useReducer(A,_,Z)},ue.useRef=function(A){return F.H.useRef(A)},ue.useState=function(A){return F.H.useState(A)},ue.useSyncExternalStore=function(A,_,Z){return F.H.useSyncExternalStore(A,_,Z)},ue.useTransition=function(){return F.H.useTransition()},ue.version="19.2.4",ue}var Op;function Xc(){return Op||(Op=1,Fu.exports=US()),Fu.exports}var k=Xc(),Wu={exports:{}},Ai={},$u={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function HS(){return wp||(wp=1,(function(o){function i(O,Q){var W=O.length;O.push(Q);e:for(;0<W;){var me=W-1>>>1,J=O[me];if(0<c(J,Q))O[me]=Q,O[W]=J,W=me;else break e}}function r(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Q=O[0],W=O.pop();if(W!==Q){O[0]=W;e:for(var me=0,J=O.length,A=J>>>1;me<A;){var _=2*(me+1)-1,Z=O[_],K=_+1,ne=O[K];if(0>c(Z,W))K<J&&0>c(ne,Z)?(O[me]=ne,O[K]=W,me=K):(O[me]=Z,O[_]=W,me=_);else if(K<J&&0>c(ne,W))O[me]=ne,O[K]=W,me=K;else break e}}return Q}function c(O,Q){var W=O.sortIndex-Q.sortIndex;return W!==0?W:O.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],g=[],y=1,S=null,x=3,N=!1,q=!1,V=!1,U=!1,P=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function H(O){for(var Q=r(g);Q!==null;){if(Q.callback===null)s(g);else if(Q.startTime<=O)s(g),Q.sortIndex=Q.expirationTime,i(p,Q);else break;Q=r(g)}}function Y(O){if(V=!1,H(O),!q)if(r(p)!==null)q=!0,oe||(oe=!0,Oe());else{var Q=r(g);Q!==null&&Pe(Y,Q.startTime-O)}}var oe=!1,F=-1,L=5,ie=-1;function Ae(){return U?!0:!(o.unstable_now()-ie<L)}function Ve(){if(U=!1,oe){var O=o.unstable_now();ie=O;var Q=!0;try{e:{q=!1,V&&(V=!1,X(F),F=-1),N=!0;var W=x;try{t:{for(H(O),S=r(p);S!==null&&!(S.expirationTime>O&&Ae());){var me=S.callback;if(typeof me=="function"){S.callback=null,x=S.priorityLevel;var J=me(S.expirationTime<=O);if(O=o.unstable_now(),typeof J=="function"){S.callback=J,H(O),Q=!0;break t}S===r(p)&&s(p),H(O)}else s(p);S=r(p)}if(S!==null)Q=!0;else{var A=r(g);A!==null&&Pe(Y,A.startTime-O),Q=!1}}break e}finally{S=null,x=W,N=!1}Q=void 0}}finally{Q?Oe():oe=!1}}}var Oe;if(typeof G=="function")Oe=function(){G(Ve)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,lt=ht.port2;ht.port1.onmessage=Ve,Oe=function(){lt.postMessage(null)}}else Oe=function(){P(Ve,0)};function Pe(O,Q){F=P(function(){O(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(O){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var W=x;x=Q;try{return O()}finally{x=W}},o.unstable_requestPaint=function(){U=!0},o.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=x;x=O;try{return Q()}finally{x=W}},o.unstable_scheduleCallback=function(O,Q,W){var me=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?me+W:me):W=me,O){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=W+J,O={id:y++,callback:Q,priorityLevel:O,startTime:W,expirationTime:J,sortIndex:-1},W>me?(O.sortIndex=W,i(g,O),r(p)===null&&O===r(g)&&(V?(X(F),F=-1):V=!0,Pe(Y,W-me))):(O.sortIndex=J,i(p,O),q||N||(q=!0,oe||(oe=!0,Oe()))),O},o.unstable_shouldYield=Ae,o.unstable_wrapCallback=function(O){var Q=x;return function(){var W=x;x=Q;try{return O.apply(this,arguments)}finally{x=W}}}})(Iu)),Iu}var Rp;function PS(){return Rp||(Rp=1,$u.exports=HS()),$u.exports}var ec={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function GS(){if(Vp)return ut;Vp=1;var o=Xc();function i(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(p,g,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:S==null?null:""+S,children:p,containerInfo:g,implementation:y}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ut.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return f(p,g,null,y)},ut.flushSync=function(p){var g=d.T,y=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=g,s.p=y,s.d.f()}},ut.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},ut.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},ut.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,S=h(y,g.crossOrigin),x=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:N}):y==="script"&&s.d.X(p,{crossOrigin:S,integrity:x,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ut.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},ut.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,S=h(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ut.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=h(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},ut.requestFormReset=function(p){s.d.r(p)},ut.unstable_batchedUpdates=function(p,g){return p(g)},ut.useFormState=function(p,g,y){return d.H.useFormState(p,g,y)},ut.useFormStatus=function(){return d.H.useHostTransitionStatus()},ut.version="19.2.4",ut}var Bp;function QS(){if(Bp)return ec.exports;Bp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),ec.exports=GS(),ec.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function kS(){if(_p)return Ai;_p=1;var o=PS(),i=Xc(),r=QS();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(f(e)!==e)throw Error(s(188))}function g(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return p(l),e;if(u===n)return p(l),t;u=u.sibling}throw Error(s(188))}if(a.return!==n.return)a=l,n=u;else{for(var m=!1,v=l.child;v;){if(v===a){m=!0,a=l,n=u;break}if(v===n){m=!0,n=l,a=u;break}v=v.sibling}if(!m){for(v=u.child;v;){if(v===a){m=!0,a=u,n=l;break}if(v===n){m=!0,n=u,a=l;break}v=v.sibling}if(!m)throw Error(s(189))}}if(a.alternate!==n)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,x=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),G=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),Ae=Symbol.for("react.memo_cache_sentinel"),Ve=Symbol.iterator;function Oe(e){return e===null||typeof e!="object"?null:(e=Ve&&e[Ve]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case P:return"Profiler";case U:return"StrictMode";case Y:return"Suspense";case oe:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case G:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case H:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:lt(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return lt(e(t))}catch{}}return null}var Pe=Array.isArray,O=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},me=[],J=-1;function A(e){return{current:e}}function _(e){0>J||(e.current=me[J],me[J]=null,J--)}function Z(e,t){J++,me[J]=e.current,e.current=t}var K=A(null),ne=A(null),re=A(null),be=A(null);function $e(e,t){switch(Z(re,t),Z(ne,e),Z(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$h(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=$h(t),e=Ih(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(K),Z(K,e)}function fe(){_(K),_(ne),_(re)}function Ca(e){e.memoizedState!==null&&Z(be,e);var t=K.current,a=Ih(t,e.type);t!==a&&(Z(ne,e),Z(K,a))}function ia(e){ne.current===e&&(_(K),_(ne)),be.current===e&&(_(be),bi._currentValue=W)}var Ma,Ro;function Ot(e){if(Ma===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ma=t&&t[1]||"",Ro=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ma+e+Ro}var Or=!1;function wr(e,t){if(!e||Or)return"";Or=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(j){var z=j}Reflect.construct(e,[],B)}else{try{B.call()}catch(j){z=j}e.call(B.prototype)}}else{try{throw Error()}catch(j){z=j}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),m=u[0],v=u[1];if(m&&v){var T=m.split(`
`),M=v.split(`
`);for(l=n=0;n<T.length&&!T[n].includes("DetermineComponentFrameRoot");)n++;for(;l<M.length&&!M[l].includes("DetermineComponentFrameRoot");)l++;if(n===T.length||l===M.length)for(n=T.length-1,l=M.length-1;1<=n&&0<=l&&T[n]!==M[l];)l--;for(;1<=n&&0<=l;n--,l--)if(T[n]!==M[l]){if(n!==1||l!==1)do if(n--,l--,0>l||T[n]!==M[l]){var w=`
`+T[n].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=n&&0<=l);break}}}finally{Or=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ot(a):""}function h0(e,t){switch(e.tag){case 26:case 27:case 5:return Ot(e.type);case 16:return Ot("Lazy");case 13:return e.child!==t&&t!==null?Ot("Suspense Fallback"):Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 15:return wr(e.type,!1);case 11:return wr(e.type.render,!1);case 1:return wr(e.type,!0);case 31:return Ot("Activity");default:return""}}function Nd(e){try{var t="",a=null;do t+=h0(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Rr=Object.prototype.hasOwnProperty,Vr=o.unstable_scheduleCallback,Br=o.unstable_cancelCallback,p0=o.unstable_shouldYield,g0=o.unstable_requestPaint,Tt=o.unstable_now,v0=o.unstable_getCurrentPriorityLevel,zd=o.unstable_ImmediatePriority,qd=o.unstable_UserBlockingPriority,Gi=o.unstable_NormalPriority,y0=o.unstable_LowPriority,jd=o.unstable_IdlePriority,b0=o.log,S0=o.unstable_setDisableYieldValue,jn=null,Et=null;function Na(e){if(typeof b0=="function"&&S0(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(jn,e)}catch{}}var At=Math.clz32?Math.clz32:E0,x0=Math.log,T0=Math.LN2;function E0(e){return e>>>=0,e===0?32:31-(x0(e)/T0|0)|0}var Qi=256,ki=262144,Yi=4194304;function ro(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ji(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=n&134217727;return v!==0?(n=v&~u,n!==0?l=ro(n):(m&=v,m!==0?l=ro(m):a||(a=v&~e,a!==0&&(l=ro(a))))):(v=n&~u,v!==0?l=ro(v):m!==0?l=ro(m):a||(a=n&~e,a!==0&&(l=ro(a)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:l}function On(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function A0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(){var e=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),e}function _r(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function wn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function D0(e,t,a,n,l,u){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var v=e.entanglements,T=e.expirationTimes,M=e.hiddenUpdates;for(a=m&~a;0<a;){var w=31-At(a),B=1<<w;v[w]=0,T[w]=-1;var z=M[w];if(z!==null)for(M[w]=null,w=0;w<z.length;w++){var j=z[w];j!==null&&(j.lane&=-536870913)}a&=~B}n!==0&&wd(e,n,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function wd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-At(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Rd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-At(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function Vd(e,t){var a=t&-t;return a=(a&42)!==0?1:Lr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Lr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bd(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Tp(e.type))}function _d(e,t){var a=Q.p;try{return Q.p=e,t()}finally{Q.p=a}}var za=Math.random().toString(36).slice(2),at="__reactFiber$"+za,pt="__reactProps$"+za,Vo="__reactContainer$"+za,Hr="__reactEvents$"+za,C0="__reactListeners$"+za,M0="__reactHandles$"+za,Ld="__reactResources$"+za,Rn="__reactMarker$"+za;function Pr(e){delete e[at],delete e[pt],delete e[Hr],delete e[C0],delete e[M0]}function Bo(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Vo]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=sp(e);e!==null;){if(a=e[at])return a;e=sp(e)}return t}e=a,a=e.parentNode}return null}function _o(e){if(e=e[at]||e[Vo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Lo(e){var t=e[Ld];return t||(t=e[Ld]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[Rn]=!0}var Ud=new Set,Hd={};function lo(e,t){Uo(e,t),Uo(e+"Capture",t)}function Uo(e,t){for(Hd[e]=t,e=0;e<t.length;e++)Ud.add(t[e])}var N0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pd={},Gd={};function z0(e){return Rr.call(Gd,e)?!0:Rr.call(Pd,e)?!1:N0.test(e)?Gd[e]=!0:(Pd[e]=!0,!1)}function Xi(e,t,a){if(z0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function sa(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function q0(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){a=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){if(!e._valueTracker){var t=Qd(e)?"checked":"value";e._valueTracker=q0(e,t,""+e[t])}}function kd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Qd(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var j0=/[\n"\\]/g;function Rt(e){return e.replace(j0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Qr(e,t,a,n,l,u,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?kr(e,m,wt(t)):a!=null?kr(e,m,wt(a)):n!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+wt(v):e.removeAttribute("name")}function Yd(e,t,a,n,l,u,m,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Gr(e);return}a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,v||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=v?e.checked:!!n,e.defaultChecked=!!n,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Gr(e)}function kr(e,t,a){t==="number"&&Ki(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ho(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Jd(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function Xd(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(s(92));if(Pe(n)){if(1<n.length)throw Error(s(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Gr(e)}function Po(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var O0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zd(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||O0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Kd(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Zd(e,l,n)}else for(var u in t)t.hasOwnProperty(u)&&Zd(e,u,t[u])}function Yr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fi(e){return R0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ra(){}var Jr=null;function Xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Go=null,Qo=null;function Fd(e){var t=_o(e);if(t&&(e=t.stateNode)){var a=e[pt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Qr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[pt]||null;if(!l)throw Error(s(90));Qr(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&kd(n)}break e;case"textarea":Jd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ho(e,!!a.multiple,t,!1)}}}var Zr=!1;function Wd(e,t,a){if(Zr)return e(t,a);Zr=!0;try{var n=e(t);return n}finally{if(Zr=!1,(Go!==null||Qo!==null)&&(_s(),Go&&(t=Go,e=Qo,Qo=Go=null,Fd(t),e)))for(t=0;t<e.length;t++)Fd(e[t])}}function Bn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[pt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kr=!1;if(la)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Kr=!1}var qa=null,Fr=null,Wi=null;function $d(){if(Wi)return Wi;var e,t=Fr,a=t.length,n,l="value"in qa?qa.value:qa.textContent,u=l.length;for(e=0;e<a&&t[e]===l[e];e++);var m=a-e;for(n=1;n<=m&&t[a-n]===l[u-n];n++);return Wi=l.slice(e,1<n?1-n:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function Id(){return!1}function gt(e){function t(a,n,l,u,m){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(a=e[v],this[v]=a?a(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ii:Id,this.isPropagationStopped=Id,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=gt(uo),Ln=S({},uo,{view:0,detail:0}),V0=gt(Ln),Wr,$r,Un,ts=S({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:el,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(Wr=e.screenX-Un.screenX,$r=e.screenY-Un.screenY):$r=Wr=0,Un=e),Wr)},movementY:function(e){return"movementY"in e?e.movementY:$r}}),em=gt(ts),B0=S({},ts,{dataTransfer:0}),_0=gt(B0),L0=S({},Ln,{relatedTarget:0}),Ir=gt(L0),U0=S({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=gt(U0),P0=S({},uo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G0=gt(P0),Q0=S({},uo,{data:0}),tm=gt(Q0),k0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=J0[e])?!!t[e]:!1}function el(){return X0}var Z0=S({},Ln,{key:function(e){if(e.key){var t=k0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:el,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K0=gt(Z0),F0=S({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),am=gt(F0),W0=S({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:el}),$0=gt(W0),I0=S({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),eb=gt(I0),tb=S({},ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ab=gt(tb),ob=S({},uo,{newState:0,oldState:0}),nb=gt(ob),ib=[9,13,27,32],tl=la&&"CompositionEvent"in window,Hn=null;la&&"documentMode"in document&&(Hn=document.documentMode);var sb=la&&"TextEvent"in window&&!Hn,om=la&&(!tl||Hn&&8<Hn&&11>=Hn),nm=" ",im=!1;function sm(e,t){switch(e){case"keyup":return ib.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ko=!1;function rb(e,t){switch(e){case"compositionend":return rm(t);case"keypress":return t.which!==32?null:(im=!0,nm);case"textInput":return e=t.data,e===nm&&im?null:e;default:return null}}function lb(e,t){if(ko)return e==="compositionend"||!tl&&sm(e,t)?(e=$d(),Wi=Fr=qa=null,ko=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return om&&t.locale!=="ko"?null:t.data;default:return null}}var ub={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ub[e.type]:t==="textarea"}function um(e,t,a,n){Go?Qo?Qo.push(n):Qo=[n]:Go=n,t=ks(t,"onChange"),0<t.length&&(a=new es("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Pn=null,Gn=null;function cb(e){Jh(e,0)}function as(e){var t=Vn(e);if(kd(t))return e}function cm(e,t){if(e==="change")return t}var dm=!1;if(la){var al;if(la){var ol="oninput"in document;if(!ol){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),ol=typeof mm.oninput=="function"}al=ol}else al=!1;dm=al&&(!document.documentMode||9<document.documentMode)}function fm(){Pn&&(Pn.detachEvent("onpropertychange",hm),Gn=Pn=null)}function hm(e){if(e.propertyName==="value"&&as(Gn)){var t=[];um(t,Gn,e,Xr(e)),Wd(cb,t)}}function db(e,t,a){e==="focusin"?(fm(),Pn=t,Gn=a,Pn.attachEvent("onpropertychange",hm)):e==="focusout"&&fm()}function mb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return as(Gn)}function fb(e,t){if(e==="click")return as(t)}function hb(e,t){if(e==="input"||e==="change")return as(t)}function pb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:pb;function Qn(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Rr.call(t,l)||!Dt(e[l],t[l]))return!1}return!0}function pm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gm(e,t){var a=pm(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pm(a)}}function vm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ym(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ki(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ki(e.document)}return t}function nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gb=la&&"documentMode"in document&&11>=document.documentMode,Yo=null,il=null,kn=null,sl=!1;function bm(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sl||Yo==null||Yo!==Ki(n)||(n=Yo,"selectionStart"in n&&nl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kn&&Qn(kn,n)||(kn=n,n=ks(il,"onSelect"),0<n.length&&(t=new es("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Yo)))}function co(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Jo={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionrun:co("Transition","TransitionRun"),transitionstart:co("Transition","TransitionStart"),transitioncancel:co("Transition","TransitionCancel"),transitionend:co("Transition","TransitionEnd")},rl={},Sm={};la&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete Jo.animationend.animation,delete Jo.animationiteration.animation,delete Jo.animationstart.animation),"TransitionEvent"in window||delete Jo.transitionend.transition);function mo(e){if(rl[e])return rl[e];if(!Jo[e])return e;var t=Jo[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Sm)return rl[e]=t[a];return e}var xm=mo("animationend"),Tm=mo("animationiteration"),Em=mo("animationstart"),vb=mo("transitionrun"),yb=mo("transitionstart"),bb=mo("transitioncancel"),Am=mo("transitionend"),Dm=new Map,ll="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ll.push("scrollEnd");function Yt(e,t){Dm.set(e,t),lo(t,[e])}var os=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],Xo=0,ul=0;function ns(){for(var e=Xo,t=ul=Xo=0;t<e;){var a=Vt[t];Vt[t++]=null;var n=Vt[t];Vt[t++]=null;var l=Vt[t];Vt[t++]=null;var u=Vt[t];if(Vt[t++]=null,n!==null&&l!==null){var m=n.pending;m===null?l.next=l:(l.next=m.next,m.next=l),n.pending=l}u!==0&&Cm(a,l,u)}}function is(e,t,a,n){Vt[Xo++]=e,Vt[Xo++]=t,Vt[Xo++]=a,Vt[Xo++]=n,ul|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function cl(e,t,a,n){return is(e,t,a,n),ss(e)}function fo(e,t){return is(e,null,null,t),ss(e)}function Cm(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,n=u.alternate,n!==null&&(n.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-At(a),e=u.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),u):null}function ss(e){if(50<mi)throw mi=0,bu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zo={};function Sb(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,a,n){return new Sb(e,t,a,n)}function dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,t){var a=e.alternate;return a===null?(a=Ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mm(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rs(e,t,a,n,l,u){var m=0;if(n=e,typeof e=="function")dl(e)&&(m=1);else if(typeof e=="string")m=DS(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Ct(31,a,t,l),e.elementType=ie,e.lanes=u,e;case V:return ho(a.children,l,u,t);case U:m=8,l|=24;break;case P:return e=Ct(12,a,t,l|2),e.elementType=P,e.lanes=u,e;case Y:return e=Ct(13,a,t,l),e.elementType=Y,e.lanes=u,e;case oe:return e=Ct(19,a,t,l),e.elementType=oe,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:m=10;break e;case X:m=9;break e;case H:m=11;break e;case F:m=14;break e;case L:m=16,n=null;break e}m=29,a=Error(s(130,e===null?"null":typeof e,"")),n=null}return t=Ct(m,a,t,l),t.elementType=e,t.type=n,t.lanes=u,t}function ho(e,t,a,n){return e=Ct(7,e,n,t),e.lanes=a,e}function ml(e,t,a){return e=Ct(6,e,null,t),e.lanes=a,e}function Nm(e){var t=Ct(18,null,null,0);return t.stateNode=e,t}function fl(e,t,a){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zm=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var a=zm.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Nd(t)},zm.set(e,t),t)}return{value:e,source:t,stack:Nd(t)}}var Ko=[],Fo=0,ls=null,Yn=0,_t=[],Lt=0,ja=null,$t=1,It="";function ca(e,t){Ko[Fo++]=Yn,Ko[Fo++]=ls,ls=e,Yn=t}function qm(e,t,a){_t[Lt++]=$t,_t[Lt++]=It,_t[Lt++]=ja,ja=e;var n=$t;e=It;var l=32-At(n)-1;n&=~(1<<l),a+=1;var u=32-At(t)+l;if(30<u){var m=l-l%5;u=(n&(1<<m)-1).toString(32),n>>=m,l-=m,$t=1<<32-At(t)+l|a<<l|n,It=u+e}else $t=1<<u|a<<l|n,It=e}function hl(e){e.return!==null&&(ca(e,1),qm(e,1,0))}function pl(e){for(;e===ls;)ls=Ko[--Fo],Ko[Fo]=null,Yn=Ko[--Fo],Ko[Fo]=null;for(;e===ja;)ja=_t[--Lt],_t[Lt]=null,It=_t[--Lt],_t[Lt]=null,$t=_t[--Lt],_t[Lt]=null}function jm(e,t){_t[Lt++]=$t,_t[Lt++]=It,_t[Lt++]=ja,$t=t.id,It=t.overflow,ja=e}var ot=null,we=null,Se=!1,Oa=null,Ut=!1,gl=Error(s(519));function wa(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jn(Bt(t,e)),gl}function Om(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[at]=e,t[pt]=n,a){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(a=0;a<hi.length;a++)ge(hi[a],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),Yd(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),Xd(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Fh(t.textContent,a)?(n.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),n.onScroll!=null&&ge("scroll",t),n.onScrollEnd!=null&&ge("scrollend",t),n.onClick!=null&&(t.onclick=ra),t=!0):t=!1,t||wa(e,!0)}function wm(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:ot=ot.return}}function Wo(e){if(e!==ot)return!1;if(!Se)return wm(e),Se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ru(e.type,e.memoizedProps)),a=!a),a&&we&&wa(e),wm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));we=ip(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));we=ip(e)}else t===27?(t=we,Xa(e.type)?(e=Uu,Uu=null,we=e):we=t):we=ot?Pt(e.stateNode.nextSibling):null;return!0}function po(){we=ot=null,Se=!1}function vl(){var e=Oa;return e!==null&&(St===null?St=e:St.push.apply(St,e),Oa=null),e}function Jn(e){Oa===null?Oa=[e]:Oa.push(e)}var yl=A(null),go=null,da=null;function Ra(e,t,a){Z(yl,t._currentValue),t._currentValue=a}function ma(e){e._currentValue=yl.current,_(yl)}function bl(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Sl(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var m=l.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=l;for(var T=0;T<t.length;T++)if(v.context===t[T]){u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),bl(u.return,a,e),n||(m=null);break e}u=v.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=a,u=m.alternate,u!==null&&(u.lanes|=a),bl(m,a,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function $o(e,t,a,n){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var v=l.type;Dt(l.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(l===be.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(bi):e=[bi])}l=l.return}e!==null&&Sl(t,e,a,n),t.flags|=262144}function us(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vo(e){go=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return Rm(go,e)}function cs(e,t){return go===null&&vo(e),Rm(e,t)}function Rm(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},da===null){if(e===null)throw Error(s(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return a}var xb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Tb=o.unstable_scheduleCallback,Eb=o.unstable_NormalPriority,ke={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xl(){return{controller:new xb,data:new Map,refCount:0}}function Xn(e){e.refCount--,e.refCount===0&&Tb(Eb,function(){e.controller.abort()})}var Zn=null,Tl=0,Io=0,en=null;function Ab(e,t){if(Zn===null){var a=Zn=[];Tl=0,Io=Du(),en={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Tl++,t.then(Vm,Vm),t}function Vm(){if(--Tl===0&&Zn!==null){en!==null&&(en.status="fulfilled");var e=Zn;Zn=null,Io=0,en=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Db(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Bm=O.S;O.S=function(e,t){Sh=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ab(e,t),Bm!==null&&Bm(e,t)};var yo=A(null);function El(){var e=yo.current;return e!==null?e:qe.pooledCache}function ds(e,t){t===null?Z(yo,yo.current):Z(yo,t.pool)}function _m(){var e=El();return e===null?null:{parent:ke._currentValue,pool:e}}var tn=Error(s(460)),Al=Error(s(474)),ms=Error(s(542)),fs={then:function(){}};function Lm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Um(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ra,ra),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pm(e),e;default:if(typeof t.status=="string")t.then(ra,ra);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pm(e),e}throw So=t,tn}}function bo(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(So=a,tn):a}}var So=null;function Hm(){if(So===null)throw Error(s(459));var e=So;return So=null,e}function Pm(e){if(e===tn||e===ms)throw Error(s(483))}var an=null,Kn=0;function hs(e){var t=Kn;return Kn+=1,an===null&&(an=[]),Um(an,e,t)}function Fn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ps(e,t){throw t.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gm(e){function t(D,E){if(e){var C=D.deletions;C===null?(D.deletions=[E],D.flags|=16):C.push(E)}}function a(D,E){if(!e)return null;for(;E!==null;)t(D,E),E=E.sibling;return null}function n(D){for(var E=new Map;D!==null;)D.key!==null?E.set(D.key,D):E.set(D.index,D),D=D.sibling;return E}function l(D,E){return D=ua(D,E),D.index=0,D.sibling=null,D}function u(D,E,C){return D.index=C,e?(C=D.alternate,C!==null?(C=C.index,C<E?(D.flags|=67108866,E):C):(D.flags|=67108866,E)):(D.flags|=1048576,E)}function m(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function v(D,E,C,R){return E===null||E.tag!==6?(E=ml(C,D.mode,R),E.return=D,E):(E=l(E,C),E.return=D,E)}function T(D,E,C,R){var se=C.type;return se===V?w(D,E,C.props.children,R,C.key):E!==null&&(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===L&&bo(se)===E.type)?(E=l(E,C.props),Fn(E,C),E.return=D,E):(E=rs(C.type,C.key,C.props,null,D.mode,R),Fn(E,C),E.return=D,E)}function M(D,E,C,R){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=fl(C,D.mode,R),E.return=D,E):(E=l(E,C.children||[]),E.return=D,E)}function w(D,E,C,R,se){return E===null||E.tag!==7?(E=ho(C,D.mode,R,se),E.return=D,E):(E=l(E,C),E.return=D,E)}function B(D,E,C){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=ml(""+E,D.mode,C),E.return=D,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case N:return C=rs(E.type,E.key,E.props,null,D.mode,C),Fn(C,E),C.return=D,C;case q:return E=fl(E,D.mode,C),E.return=D,E;case L:return E=bo(E),B(D,E,C)}if(Pe(E)||Oe(E))return E=ho(E,D.mode,C,null),E.return=D,E;if(typeof E.then=="function")return B(D,hs(E),C);if(E.$$typeof===G)return B(D,cs(D,E),C);ps(D,E)}return null}function z(D,E,C,R){var se=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return se!==null?null:v(D,E,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case N:return C.key===se?T(D,E,C,R):null;case q:return C.key===se?M(D,E,C,R):null;case L:return C=bo(C),z(D,E,C,R)}if(Pe(C)||Oe(C))return se!==null?null:w(D,E,C,R,null);if(typeof C.then=="function")return z(D,E,hs(C),R);if(C.$$typeof===G)return z(D,E,cs(D,C),R);ps(D,C)}return null}function j(D,E,C,R,se){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return D=D.get(C)||null,v(E,D,""+R,se);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case N:return D=D.get(R.key===null?C:R.key)||null,T(E,D,R,se);case q:return D=D.get(R.key===null?C:R.key)||null,M(E,D,R,se);case L:return R=bo(R),j(D,E,C,R,se)}if(Pe(R)||Oe(R))return D=D.get(C)||null,w(E,D,R,se,null);if(typeof R.then=="function")return j(D,E,C,hs(R),se);if(R.$$typeof===G)return j(D,E,C,cs(E,R),se);ps(E,R)}return null}function $(D,E,C,R){for(var se=null,xe=null,ae=E,de=E=0,ye=null;ae!==null&&de<C.length;de++){ae.index>de?(ye=ae,ae=null):ye=ae.sibling;var Te=z(D,ae,C[de],R);if(Te===null){ae===null&&(ae=ye);break}e&&ae&&Te.alternate===null&&t(D,ae),E=u(Te,E,de),xe===null?se=Te:xe.sibling=Te,xe=Te,ae=ye}if(de===C.length)return a(D,ae),Se&&ca(D,de),se;if(ae===null){for(;de<C.length;de++)ae=B(D,C[de],R),ae!==null&&(E=u(ae,E,de),xe===null?se=ae:xe.sibling=ae,xe=ae);return Se&&ca(D,de),se}for(ae=n(ae);de<C.length;de++)ye=j(ae,D,de,C[de],R),ye!==null&&(e&&ye.alternate!==null&&ae.delete(ye.key===null?de:ye.key),E=u(ye,E,de),xe===null?se=ye:xe.sibling=ye,xe=ye);return e&&ae.forEach(function($a){return t(D,$a)}),Se&&ca(D,de),se}function le(D,E,C,R){if(C==null)throw Error(s(151));for(var se=null,xe=null,ae=E,de=E=0,ye=null,Te=C.next();ae!==null&&!Te.done;de++,Te=C.next()){ae.index>de?(ye=ae,ae=null):ye=ae.sibling;var $a=z(D,ae,Te.value,R);if($a===null){ae===null&&(ae=ye);break}e&&ae&&$a.alternate===null&&t(D,ae),E=u($a,E,de),xe===null?se=$a:xe.sibling=$a,xe=$a,ae=ye}if(Te.done)return a(D,ae),Se&&ca(D,de),se;if(ae===null){for(;!Te.done;de++,Te=C.next())Te=B(D,Te.value,R),Te!==null&&(E=u(Te,E,de),xe===null?se=Te:xe.sibling=Te,xe=Te);return Se&&ca(D,de),se}for(ae=n(ae);!Te.done;de++,Te=C.next())Te=j(ae,D,de,Te.value,R),Te!==null&&(e&&Te.alternate!==null&&ae.delete(Te.key===null?de:Te.key),E=u(Te,E,de),xe===null?se=Te:xe.sibling=Te,xe=Te);return e&&ae.forEach(function(BS){return t(D,BS)}),Se&&ca(D,de),se}function ze(D,E,C,R){if(typeof C=="object"&&C!==null&&C.type===V&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case N:e:{for(var se=C.key;E!==null;){if(E.key===se){if(se=C.type,se===V){if(E.tag===7){a(D,E.sibling),R=l(E,C.props.children),R.return=D,D=R;break e}}else if(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===L&&bo(se)===E.type){a(D,E.sibling),R=l(E,C.props),Fn(R,C),R.return=D,D=R;break e}a(D,E);break}else t(D,E);E=E.sibling}C.type===V?(R=ho(C.props.children,D.mode,R,C.key),R.return=D,D=R):(R=rs(C.type,C.key,C.props,null,D.mode,R),Fn(R,C),R.return=D,D=R)}return m(D);case q:e:{for(se=C.key;E!==null;){if(E.key===se)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){a(D,E.sibling),R=l(E,C.children||[]),R.return=D,D=R;break e}else{a(D,E);break}else t(D,E);E=E.sibling}R=fl(C,D.mode,R),R.return=D,D=R}return m(D);case L:return C=bo(C),ze(D,E,C,R)}if(Pe(C))return $(D,E,C,R);if(Oe(C)){if(se=Oe(C),typeof se!="function")throw Error(s(150));return C=se.call(C),le(D,E,C,R)}if(typeof C.then=="function")return ze(D,E,hs(C),R);if(C.$$typeof===G)return ze(D,E,cs(D,C),R);ps(D,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,E!==null&&E.tag===6?(a(D,E.sibling),R=l(E,C),R.return=D,D=R):(a(D,E),R=ml(C,D.mode,R),R.return=D,D=R),m(D)):a(D,E)}return function(D,E,C,R){try{Kn=0;var se=ze(D,E,C,R);return an=null,se}catch(ae){if(ae===tn||ae===ms)throw ae;var xe=Ct(29,ae,null,D.mode);return xe.lanes=R,xe.return=D,xe}finally{}}}var xo=Gm(!0),Qm=Gm(!1),Va=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ee&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=ss(e),Cm(e,null,a),t}return is(e,n,t,a),ss(e)}function Wn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Rd(e,a)}}function Ml(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=m:u=u.next=m,a=a.next}while(a!==null);u===null?l=u=t:u=u.next=t}else l=u=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Nl=!1;function $n(){if(Nl){var e=en;if(e!==null)throw e}}function In(e,t,a,n){Nl=!1;var l=e.updateQueue;Va=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var T=v,M=T.next;T.next=null,m===null?u=M:m.next=M,m=T;var w=e.alternate;w!==null&&(w=w.updateQueue,v=w.lastBaseUpdate,v!==m&&(v===null?w.firstBaseUpdate=M:v.next=M,w.lastBaseUpdate=T))}if(u!==null){var B=l.baseState;m=0,w=M=T=null,v=u;do{var z=v.lane&-536870913,j=z!==v.lane;if(j?(ve&z)===z:(n&z)===z){z!==0&&z===Io&&(Nl=!0),w!==null&&(w=w.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var $=e,le=v;z=t;var ze=a;switch(le.tag){case 1:if($=le.payload,typeof $=="function"){B=$.call(ze,B,z);break e}B=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=le.payload,z=typeof $=="function"?$.call(ze,B,z):$,z==null)break e;B=S({},B,z);break e;case 2:Va=!0}}z=v.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=l.callbacks,j===null?l.callbacks=[z]:j.push(z))}else j={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},w===null?(M=w=j,T=B):w=w.next=j,m|=z;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;j=v,v=j.next,j.next=null,l.lastBaseUpdate=j,l.shared.pending=null}}while(!0);w===null&&(T=B),l.baseState=T,l.firstBaseUpdate=M,l.lastBaseUpdate=w,u===null&&(l.shared.lanes=0),Ga|=m,e.lanes=m,e.memoizedState=B}}function km(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Ym(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)km(a[e],t)}var on=A(null),gs=A(0);function Jm(e,t){e=xa,Z(gs,e),Z(on,t),xa=e|t.baseLanes}function zl(){Z(gs,xa),Z(on,on.current)}function ql(){xa=gs.current,_(on),_(gs)}var Mt=A(null),Ht=null;function La(e){var t=e.alternate;Z(Ge,Ge.current&1),Z(Mt,e),Ht===null&&(t===null||on.current!==null||t.memoizedState!==null)&&(Ht=e)}function jl(e){Z(Ge,Ge.current),Z(Mt,e),Ht===null&&(Ht=e)}function Xm(e){e.tag===22?(Z(Ge,Ge.current),Z(Mt,e),Ht===null&&(Ht=e)):Ua()}function Ua(){Z(Ge,Ge.current),Z(Mt,Mt.current)}function Nt(e){_(Mt),Ht===e&&(Ht=null),_(Ge)}var Ge=A(0);function vs(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_u(a)||Lu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fa=0,ce=null,Me=null,Ye=null,ys=!1,nn=!1,To=!1,bs=0,ei=0,sn=null,Cb=0;function Le(){throw Error(s(321))}function Ol(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Dt(e[a],t[a]))return!1;return!0}function wl(e,t,a,n,l,u){return fa=u,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?jf:Zl,To=!1,u=a(n,l),To=!1,nn&&(u=Km(t,a,n,l)),Zm(e),u}function Zm(e){O.H=oi;var t=Me!==null&&Me.next!==null;if(fa=0,Ye=Me=ce=null,ys=!1,ei=0,sn=null,t)throw Error(s(300));e===null||Je||(e=e.dependencies,e!==null&&us(e)&&(Je=!0))}function Km(e,t,a,n){ce=e;var l=0;do{if(nn&&(sn=null),ei=0,nn=!1,25<=l)throw Error(s(301));if(l+=1,Ye=Me=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}O.H=Of,u=t(a,n)}while(nn);return u}function Mb(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?ti(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(ce.flags|=1024),t}function Rl(){var e=bs!==0;return bs=0,e}function Vl(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Bl(e){if(ys){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ys=!1}fa=0,Ye=Me=ce=null,nn=!1,ei=bs=0,sn=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ce.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Qe(){if(Me===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ye===null?ce.memoizedState:Ye.next;if(t!==null)Ye=t,Me=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ye===null?ce.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ti(e){var t=ei;return ei+=1,sn===null&&(sn=[]),e=Um(sn,e,t),t=ce,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?jf:Zl),e}function xs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ti(e);if(e.$$typeof===G)return nt(e)}throw Error(s(438,String(e)))}function _l(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ce.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ss(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ae;return t.index++,a}function ha(e,t){return typeof t=="function"?t(e):t}function Ts(e){var t=Qe();return Ll(t,Me,e)}function Ll(e,t,a){var n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var l=e.baseQueue,u=n.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}t.baseQueue=l=u,n.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var v=m=null,T=null,M=t,w=!1;do{var B=M.lane&-536870913;if(B!==M.lane?(ve&B)===B:(fa&B)===B){var z=M.revertLane;if(z===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),B===Io&&(w=!0);else if((fa&z)===z){M=M.next,z===Io&&(w=!0);continue}else B={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},T===null?(v=T=B,m=u):T=T.next=B,ce.lanes|=z,Ga|=z;B=M.action,To&&a(u,B),u=M.hasEagerState?M.eagerState:a(u,B)}else z={lane:B,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},T===null?(v=T=z,m=u):T=T.next=z,ce.lanes|=B,Ga|=B;M=M.next}while(M!==null&&M!==t);if(T===null?m=u:T.next=v,!Dt(u,e.memoizedState)&&(Je=!0,w&&(a=en,a!==null)))throw a;e.memoizedState=u,e.baseState=m,e.baseQueue=T,n.lastRenderedState=u}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ul(e){var t=Qe(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,u=t.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);Dt(u,t.memoizedState)||(Je=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,n]}function Fm(e,t,a){var n=ce,l=Qe(),u=Se;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=t();var m=!Dt((Me||l).memoizedState,a);if(m&&(l.memoizedState=a,Je=!0),l=l.queue,Gl(Im.bind(null,n,l,e),[e]),l.getSnapshot!==t||m||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,rn(9,{destroy:void 0},$m.bind(null,n,l,a,t),null),qe===null)throw Error(s(349));u||(fa&127)!==0||Wm(n,t,a)}return a}function Wm(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=Ss(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function $m(e,t,a,n){t.value=a,t.getSnapshot=n,ef(t)&&tf(e)}function Im(e,t,a){return a(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Dt(e,a)}catch{return!0}}function tf(e){var t=fo(e,2);t!==null&&xt(t,e,2)}function Hl(e){var t=dt();if(typeof e=="function"){var a=e;if(e=a(),To){Na(!0);try{a()}finally{Na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},t}function af(e,t,a,n){return e.baseState=a,Ll(e,Me,typeof n=="function"?n:ha)}function Nb(e,t,a,n,l){if(Ds(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};O.T!==null?a(!0):u.isTransition=!1,n(u),a=t.pending,a===null?(u.next=t.pending=u,of(t,u)):(u.next=a.next,t.pending=a.next=u)}}function of(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var u=O.T,m={};O.T=m;try{var v=a(l,n),T=O.S;T!==null&&T(m,v),nf(e,t,v)}catch(M){Pl(e,t,M)}finally{u!==null&&m.types!==null&&(u.types=m.types),O.T=u}}else try{u=a(l,n),nf(e,t,u)}catch(M){Pl(e,t,M)}}function nf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){sf(e,t,n)},function(n){return Pl(e,t,n)}):sf(e,t,a)}function sf(e,t,a){t.status="fulfilled",t.value=a,rf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,of(e,a)))}function Pl(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,rf(t),t=t.next;while(t!==n)}e.action=null}function rf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lf(e,t){return t}function uf(e,t){if(Se){var a=qe.formState;if(a!==null){e:{var n=ce;if(Se){if(we){t:{for(var l=we,u=Ut;l.nodeType!==8;){if(!u){l=null;break t}if(l=Pt(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){we=Pt(l.nextSibling),n=l.data==="F!";break e}}wa(n)}n=!1}n&&(t=a[0])}}return a=dt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lf,lastRenderedState:t},a.queue=n,a=Nf.bind(null,ce,n),n.dispatch=a,n=Hl(!1),u=Xl.bind(null,ce,!1,n.queue),n=dt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Nb.bind(null,ce,l,u,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function cf(e){var t=Qe();return df(t,Me,e)}function df(e,t,a){if(t=Ll(e,t,lf)[0],e=Ts(ha)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ti(t)}catch(m){throw m===tn?ms:m}else n=t;t=Qe();var l=t.queue,u=l.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,rn(9,{destroy:void 0},zb.bind(null,l,a),null)),[n,u,e]}function zb(e,t){e.action=t}function mf(e){var t=Qe(),a=Me;if(a!==null)return df(t,a,e);Qe(),t=t.memoizedState,a=Qe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function rn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Ss(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function ff(){return Qe().memoizedState}function Es(e,t,a,n){var l=dt();ce.flags|=e,l.memoizedState=rn(1|t,{destroy:void 0},a,n===void 0?null:n)}function As(e,t,a,n){var l=Qe();n=n===void 0?null:n;var u=l.memoizedState.inst;Me!==null&&n!==null&&Ol(n,Me.memoizedState.deps)?l.memoizedState=rn(t,u,a,n):(ce.flags|=e,l.memoizedState=rn(1|t,u,a,n))}function hf(e,t){Es(8390656,8,e,t)}function Gl(e,t){As(2048,8,e,t)}function qb(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Ss(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function pf(e){var t=Qe().memoizedState;return qb({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function gf(e,t){return As(4,2,e,t)}function vf(e,t){return As(4,4,e,t)}function yf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bf(e,t,a){a=a!=null?a.concat([e]):null,As(4,4,yf.bind(null,t,e),a)}function Ql(){}function Sf(e,t){var a=Qe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Ol(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function xf(e,t){var a=Qe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Ol(t,n[1]))return n[0];if(n=e(),To){Na(!0);try{e()}finally{Na(!1)}}return a.memoizedState=[n,t],n}function kl(e,t,a){return a===void 0||(fa&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Th(),ce.lanes|=e,Ga|=e,a)}function Tf(e,t,a,n){return Dt(a,t)?a:on.current!==null?(e=kl(e,a,n),Dt(e,t)||(Je=!0),e):(fa&42)===0||(fa&1073741824)!==0&&(ve&261930)===0?(Je=!0,e.memoizedState=a):(e=Th(),ce.lanes|=e,Ga|=e,t)}function Ef(e,t,a,n,l){var u=Q.p;Q.p=u!==0&&8>u?u:8;var m=O.T,v={};O.T=v,Xl(e,!1,t,a);try{var T=l(),M=O.S;if(M!==null&&M(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var w=Db(T,n);ai(e,t,w,jt(e))}else ai(e,t,n,jt(e))}catch(B){ai(e,t,{then:function(){},status:"rejected",reason:B},jt())}finally{Q.p=u,m!==null&&v.types!==null&&(m.types=v.types),O.T=m}}function jb(){}function Yl(e,t,a,n){if(e.tag!==5)throw Error(s(476));var l=Af(e).queue;Ef(e,l,t,W,a===null?jb:function(){return Df(e),a(n)})}function Af(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Df(e){var t=Af(e);t.next===null&&(t=e.alternate.memoizedState),ai(e,t.next.queue,{},jt())}function Jl(){return nt(bi)}function Cf(){return Qe().memoizedState}function Mf(){return Qe().memoizedState}function Ob(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=jt();e=Ba(a);var n=_a(t,e,a);n!==null&&(xt(n,t,a),Wn(n,t,a)),t={cache:xl()},e.payload=t;return}t=t.return}}function wb(e,t,a){var n=jt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ds(e)?zf(t,a):(a=cl(e,t,a,n),a!==null&&(xt(a,e,n),qf(a,t,n)))}function Nf(e,t,a){var n=jt();ai(e,t,a,n)}function ai(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))zf(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,v=u(m,a);if(l.hasEagerState=!0,l.eagerState=v,Dt(v,m))return is(e,t,l,0),qe===null&&ns(),!1}catch{}finally{}if(a=cl(e,t,l,n),a!==null)return xt(a,e,n),qf(a,t,n),!0}return!1}function Xl(e,t,a,n){if(n={lane:2,revertLane:Du(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(t)throw Error(s(479))}else t=cl(e,a,n,2),t!==null&&xt(t,e,2)}function Ds(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function zf(e,t){nn=ys=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function qf(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Rd(e,a)}}var oi={readContext:nt,use:xs,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};oi.useEffectEvent=Le;var jf={readContext:nt,use:xs,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:hf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Es(4194308,4,yf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Es(4194308,4,e,t)},useInsertionEffect:function(e,t){Es(4,2,e,t)},useMemo:function(e,t){var a=dt();t=t===void 0?null:t;var n=e();if(To){Na(!0);try{e()}finally{Na(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=dt();if(a!==void 0){var l=a(t);if(To){Na(!0);try{a(t)}finally{Na(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=wb.bind(null,ce,e),[n.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=Hl(e);var t=e.queue,a=Nf.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ql,useDeferredValue:function(e,t){var a=dt();return kl(a,e,t)},useTransition:function(){var e=Hl(!1);return e=Ef.bind(null,ce,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ce,l=dt();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),qe===null)throw Error(s(349));(ve&127)!==0||Wm(n,t,a)}l.memoizedState=a;var u={value:a,getSnapshot:t};return l.queue=u,hf(Im.bind(null,n,u,e),[e]),n.flags|=2048,rn(9,{destroy:void 0},$m.bind(null,n,u,a,t),null),a},useId:function(){var e=dt(),t=qe.identifierPrefix;if(Se){var a=It,n=$t;a=(n&~(1<<32-At(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=bs++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Cb++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Jl,useFormState:uf,useActionState:uf,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Xl.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:_l,useCacheRefresh:function(){return dt().memoizedState=Ob.bind(null,ce)},useEffectEvent:function(e){var t=dt(),a={impl:e};return t.memoizedState=a,function(){if((Ee&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zl={readContext:nt,use:xs,useCallback:Sf,useContext:nt,useEffect:Gl,useImperativeHandle:bf,useInsertionEffect:gf,useLayoutEffect:vf,useMemo:xf,useReducer:Ts,useRef:ff,useState:function(){return Ts(ha)},useDebugValue:Ql,useDeferredValue:function(e,t){var a=Qe();return Tf(a,Me.memoizedState,e,t)},useTransition:function(){var e=Ts(ha)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:Fm,useId:Cf,useHostTransitionStatus:Jl,useFormState:cf,useActionState:cf,useOptimistic:function(e,t){var a=Qe();return af(a,Me,e,t)},useMemoCache:_l,useCacheRefresh:Mf};Zl.useEffectEvent=pf;var Of={readContext:nt,use:xs,useCallback:Sf,useContext:nt,useEffect:Gl,useImperativeHandle:bf,useInsertionEffect:gf,useLayoutEffect:vf,useMemo:xf,useReducer:Ul,useRef:ff,useState:function(){return Ul(ha)},useDebugValue:Ql,useDeferredValue:function(e,t){var a=Qe();return Me===null?kl(a,e,t):Tf(a,Me.memoizedState,e,t)},useTransition:function(){var e=Ul(ha)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:Fm,useId:Cf,useHostTransitionStatus:Jl,useFormState:mf,useActionState:mf,useOptimistic:function(e,t){var a=Qe();return Me!==null?af(a,Me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_l,useCacheRefresh:Mf};Of.useEffectEvent=pf;function Kl(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:S({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Fl={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=jt(),l=Ba(n);l.payload=t,a!=null&&(l.callback=a),t=_a(e,l,n),t!==null&&(xt(t,e,n),Wn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=jt(),l=Ba(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=_a(e,l,n),t!==null&&(xt(t,e,n),Wn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=jt(),n=Ba(a);n.tag=2,t!=null&&(n.callback=t),t=_a(e,n,a),t!==null&&(xt(t,e,a),Wn(t,e,a))}};function wf(e,t,a,n,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,m):t.prototype&&t.prototype.isPureReactComponent?!Qn(a,n)||!Qn(l,u):!0}function Rf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Fl.enqueueReplaceState(t,t.state,null)}function Eo(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=S({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Vf(e){os(e)}function Bf(e){console.error(e)}function _f(e){os(e)}function Cs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Lf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Wl(e,t,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Cs(e,t)},a}function Uf(e){return e=Ba(e),e.tag=3,e}function Hf(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;e.payload=function(){return l(u)},e.callback=function(){Lf(t,a,n)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Lf(t,a,n),typeof l!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})})}function Rb(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&$o(t,a,l,!0),a=Mt.current,a!==null){switch(a.tag){case 31:case 13:return Ht===null?Ls():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===fs?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Tu(e,n,l)),!1;case 22:return a.flags|=65536,n===fs?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Tu(e,n,l)),!1}throw Error(s(435,a.tag))}return Tu(e,n,l),Ls(),!1}if(Se)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==gl&&(e=Error(s(422),{cause:n}),Jn(Bt(e,a)))):(n!==gl&&(t=Error(s(423),{cause:n}),Jn(Bt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Bt(n,a),l=Wl(e.stateNode,n,l),Ml(e,l),Ue!==4&&(Ue=2)),!1;var u=Error(s(520),{cause:n});if(u=Bt(u,a),di===null?di=[u]:di.push(u),Ue!==4&&(Ue=2),t===null)return!0;n=Bt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Wl(a.stateNode,n,e),Ml(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Qa===null||!Qa.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Uf(l),Hf(l,e,a,n),Ml(a,l),!1}a=a.return}while(a!==null);return!1}var $l=Error(s(461)),Je=!1;function it(e,t,a,n){t.child=e===null?Qm(t,null,a,n):xo(t,e.child,a,n)}function Pf(e,t,a,n,l){a=a.render;var u=t.ref;if("ref"in n){var m={};for(var v in n)v!=="ref"&&(m[v]=n[v])}else m=n;return vo(t),n=wl(e,t,a,m,u,l),v=Rl(),e!==null&&!Je?(Vl(e,t,l),pa(e,t,l)):(Se&&v&&hl(t),t.flags|=1,it(e,t,n,l),t.child)}function Gf(e,t,a,n,l){if(e===null){var u=a.type;return typeof u=="function"&&!dl(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,Qf(e,t,u,n,l)):(e=rs(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!su(e,l)){var m=u.memoizedProps;if(a=a.compare,a=a!==null?a:Qn,a(m,n)&&e.ref===t.ref)return pa(e,t,l)}return t.flags|=1,e=ua(u,n),e.ref=t.ref,e.return=t,t.child=e}function Qf(e,t,a,n,l){if(e!==null){var u=e.memoizedProps;if(Qn(u,n)&&e.ref===t.ref)if(Je=!1,t.pendingProps=n=u,su(e,l))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,pa(e,t,l)}return Il(e,t,a,n,l)}function kf(e,t,a,n){var l=n.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~u}else n=0,t.child=null;return Yf(e,t,u,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ds(t,u!==null?u.cachePool:null),u!==null?Jm(t,u):zl(),Xm(t);else return n=t.lanes=536870912,Yf(e,t,u!==null?u.baseLanes|a:a,a,n)}else u!==null?(ds(t,u.cachePool),Jm(t,u),Ua(),t.memoizedState=null):(e!==null&&ds(t,null),zl(),Ua());return it(e,t,l,a),t.child}function ni(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Yf(e,t,a,n,l){var u=El();return u=u===null?null:{parent:ke._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&ds(t,null),zl(),Xm(t),e!==null&&$o(e,t,n,!0),t.childLanes=l,null}function Ms(e,t){return t=zs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Jf(e,t,a){return xo(t,e.child,null,a),e=Ms(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function Vb(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(n.mode==="hidden")return e=Ms(t,n),t.lanes=536870912,ni(null,e);if(jl(t),(e=we)?(e=np(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Nm(e),a.return=t,t.child=a,ot=t,we=null)):e=null,e===null)throw wa(t);return t.lanes=536870912,null}return Ms(t,n)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(jl(t),l)if(t.flags&256)t.flags&=-257,t=Jf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Je||$o(e,t,a,!1),l=(a&e.childLanes)!==0,Je||l){if(n=qe,n!==null&&(m=Vd(n,a),m!==0&&m!==u.retryLane))throw u.retryLane=m,fo(e,m),xt(n,e,m),$l;Ls(),t=Jf(e,t,a)}else e=u.treeContext,we=Pt(m.nextSibling),ot=t,Se=!0,Oa=null,Ut=!1,e!==null&&jm(t,e),t=Ms(t,n),t.flags|=4096;return t}return e=ua(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ns(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Il(e,t,a,n,l){return vo(t),a=wl(e,t,a,n,void 0,l),n=Rl(),e!==null&&!Je?(Vl(e,t,l),pa(e,t,l)):(Se&&n&&hl(t),t.flags|=1,it(e,t,a,l),t.child)}function Xf(e,t,a,n,l,u){return vo(t),t.updateQueue=null,a=Km(t,n,a,l),Zm(e),n=Rl(),e!==null&&!Je?(Vl(e,t,u),pa(e,t,u)):(Se&&n&&hl(t),t.flags|=1,it(e,t,a,u),t.child)}function Zf(e,t,a,n,l){if(vo(t),t.stateNode===null){var u=Zo,m=a.contextType;typeof m=="object"&&m!==null&&(u=nt(m)),u=new a(n,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Fl,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=n,u.state=t.memoizedState,u.refs={},Dl(t),m=a.contextType,u.context=typeof m=="object"&&m!==null?nt(m):Zo,u.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Kl(t,a,m,n),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Fl.enqueueReplaceState(u,u.state,null),In(t,n,u,l),$n(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,T=Eo(a,v);u.props=T;var M=u.context,w=a.contextType;m=Zo,typeof w=="object"&&w!==null&&(m=nt(w));var B=a.getDerivedStateFromProps;w=typeof B=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,w||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||M!==m)&&Rf(t,u,n,m),Va=!1;var z=t.memoizedState;u.state=z,In(t,n,u,l),$n(),M=t.memoizedState,v||z!==M||Va?(typeof B=="function"&&(Kl(t,a,B,n),M=t.memoizedState),(T=Va||wf(t,a,T,n,z,M,m))?(w||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=M),u.props=n,u.state=M,u.context=m,n=T):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,Cl(e,t),m=t.memoizedProps,w=Eo(a,m),u.props=w,B=t.pendingProps,z=u.context,M=a.contextType,T=Zo,typeof M=="object"&&M!==null&&(T=nt(M)),v=a.getDerivedStateFromProps,(M=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==B||z!==T)&&Rf(t,u,n,T),Va=!1,z=t.memoizedState,u.state=z,In(t,n,u,l),$n();var j=t.memoizedState;m!==B||z!==j||Va||e!==null&&e.dependencies!==null&&us(e.dependencies)?(typeof v=="function"&&(Kl(t,a,v,n),j=t.memoizedState),(w=Va||wf(t,a,w,n,z,j,T)||e!==null&&e.dependencies!==null&&us(e.dependencies))?(M||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,j,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,j,T)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=j),u.props=n,u.state=j,u.context=T,n=w):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),n=!1)}return u=n,Ns(e,t),n=(t.flags&128)!==0,u||n?(u=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&n?(t.child=xo(t,e.child,null,l),t.child=xo(t,null,a,l)):it(e,t,a,l),t.memoizedState=u.state,e=t.child):e=pa(e,t,l),e}function Kf(e,t,a,n){return po(),t.flags|=256,it(e,t,a,n),t.child}var eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tu(e){return{baseLanes:e,cachePool:_m()}}function au(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=qt),e}function Ff(e,t,a){var n=t.pendingProps,l=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(l?La(t):Ua(),(e=we)?(e=np(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Nm(e),a.return=t,t.child=a,ot=t,we=null)):e=null,e===null)throw wa(t);return Lu(e)?t.lanes=32:t.lanes=536870912,null}var v=n.children;return n=n.fallback,l?(Ua(),l=t.mode,v=zs({mode:"hidden",children:v},l),n=ho(n,l,a,null),v.return=t,n.return=t,v.sibling=n,t.child=v,n=t.child,n.memoizedState=tu(a),n.childLanes=au(e,m,a),t.memoizedState=eu,ni(null,n)):(La(t),ou(t,v))}var T=e.memoizedState;if(T!==null&&(v=T.dehydrated,v!==null)){if(u)t.flags&256?(La(t),t.flags&=-257,t=nu(e,t,a)):t.memoizedState!==null?(Ua(),t.child=e.child,t.flags|=128,t=null):(Ua(),v=n.fallback,l=t.mode,n=zs({mode:"visible",children:n.children},l),v=ho(v,l,a,null),v.flags|=2,n.return=t,v.return=t,n.sibling=v,t.child=n,xo(t,e.child,null,a),n=t.child,n.memoizedState=tu(a),n.childLanes=au(e,m,a),t.memoizedState=eu,t=ni(null,n));else if(La(t),Lu(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var M=m.dgst;m=M,n=Error(s(419)),n.stack="",n.digest=m,Jn({value:n,source:null,stack:null}),t=nu(e,t,a)}else if(Je||$o(e,t,a,!1),m=(a&e.childLanes)!==0,Je||m){if(m=qe,m!==null&&(n=Vd(m,a),n!==0&&n!==T.retryLane))throw T.retryLane=n,fo(e,n),xt(m,e,n),$l;_u(v)||Ls(),t=nu(e,t,a)}else _u(v)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,we=Pt(v.nextSibling),ot=t,Se=!0,Oa=null,Ut=!1,e!==null&&jm(t,e),t=ou(t,n.children),t.flags|=4096);return t}return l?(Ua(),v=n.fallback,l=t.mode,T=e.child,M=T.sibling,n=ua(T,{mode:"hidden",children:n.children}),n.subtreeFlags=T.subtreeFlags&65011712,M!==null?v=ua(M,v):(v=ho(v,l,a,null),v.flags|=2),v.return=t,n.return=t,n.sibling=v,t.child=n,ni(null,n),n=t.child,v=e.child.memoizedState,v===null?v=tu(a):(l=v.cachePool,l!==null?(T=ke._currentValue,l=l.parent!==T?{parent:T,pool:T}:l):l=_m(),v={baseLanes:v.baseLanes|a,cachePool:l}),n.memoizedState=v,n.childLanes=au(e,m,a),t.memoizedState=eu,ni(e.child,n)):(La(t),a=e.child,e=a.sibling,a=ua(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function ou(e,t){return t=zs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zs(e,t){return e=Ct(22,e,null,t),e.lanes=0,e}function nu(e,t,a){return xo(t,e.child,null,a),e=ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),bl(e.return,t,a)}function iu(e,t,a,n,l,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=n,m.tail=a,m.tailMode=l,m.treeForkCount=u)}function $f(e,t,a){var n=t.pendingProps,l=n.revealOrder,u=n.tail;n=n.children;var m=Ge.current,v=(m&2)!==0;if(v?(m=m&1|2,t.flags|=128):m&=1,Z(Ge,m),it(e,t,n,a),n=Se?Yn:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wf(e,a,t);else if(e.tag===19)Wf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&vs(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),iu(t,!1,l,a,u,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&vs(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}iu(t,!0,a,null,u,n);break;case"together":iu(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function pa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ga|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($o(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=ua(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ua(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function su(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&us(e)))}function Bb(e,t,a){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),Ra(t,ke,e.memoizedState.cache),po();break;case 27:case 5:Ca(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:Ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,jl(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(La(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ff(e,t,a):(La(t),e=pa(e,t,a),e!==null?e.sibling:null);La(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||($o(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return $f(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(Ge,Ge.current),n)break;return null;case 22:return t.lanes=0,kf(e,t,a,t.pendingProps);case 24:Ra(t,ke,e.memoizedState.cache)}return pa(e,t,a)}function If(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!su(e,a)&&(t.flags&128)===0)return Je=!1,Bb(e,t,a);Je=(e.flags&131072)!==0}else Je=!1,Se&&(t.flags&1048576)!==0&&qm(t,Yn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=bo(t.elementType),t.type=e,typeof e=="function")dl(e)?(n=Eo(e,n),t.tag=1,t=Zf(null,t,e,n,a)):(t.tag=0,t=Il(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===H){t.tag=11,t=Pf(null,t,e,n,a);break e}else if(l===F){t.tag=14,t=Gf(null,t,e,n,a);break e}}throw t=lt(e)||e,Error(s(306,t,""))}}return t;case 0:return Il(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Eo(n,t.pendingProps),Zf(e,t,n,l,a);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(s(387));n=t.pendingProps;var u=t.memoizedState;l=u.element,Cl(e,t),In(t,n,null,a);var m=t.memoizedState;if(n=m.cache,Ra(t,ke,n),n!==u.cache&&Sl(t,[ke],a,!0),$n(),n=m.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Kf(e,t,n,a);break e}else if(n!==l){l=Bt(Error(s(424)),t),Jn(l),t=Kf(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=Pt(e.firstChild),ot=t,Se=!0,Oa=null,Ut=!0,a=Qm(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(po(),n===l){t=pa(e,t,a);break e}it(e,t,n,a)}t=t.child}return t;case 26:return Ns(e,t),e===null?(a=cp(t.type,null,t.pendingProps,null))?t.memoizedState=a:Se||(a=t.type,e=t.pendingProps,n=Ys(re.current).createElement(a),n[at]=t,n[pt]=e,st(n,a,e),Ie(n),t.stateNode=n):t.memoizedState=cp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ca(t),e===null&&Se&&(n=t.stateNode=rp(t.type,t.pendingProps,re.current),ot=t,Ut=!0,l=we,Xa(t.type)?(Uu=l,we=Pt(n.firstChild)):we=l),it(e,t,t.pendingProps.children,a),Ns(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((l=n=we)&&(n=mS(n,t.type,t.pendingProps,Ut),n!==null?(t.stateNode=n,ot=t,we=Pt(n.firstChild),Ut=!1,l=!0):l=!1),l||wa(t)),Ca(t),l=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,n=u.children,Ru(l,u)?n=null:m!==null&&Ru(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=wl(e,t,Mb,null,null,a),bi._currentValue=l),Ns(e,t),it(e,t,n,a),t.child;case 6:return e===null&&Se&&((e=a=we)&&(a=fS(a,t.pendingProps,Ut),a!==null?(t.stateNode=a,ot=t,we=null,e=!0):e=!1),e||wa(t)),null;case 13:return Ff(e,t,a);case 4:return $e(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=xo(t,null,n,a):it(e,t,n,a),t.child;case 11:return Pf(e,t,t.type,t.pendingProps,a);case 7:return it(e,t,t.pendingProps,a),t.child;case 8:return it(e,t,t.pendingProps.children,a),t.child;case 12:return it(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ra(t,t.type,n.value),it(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,vo(t),l=nt(l),n=n(l),t.flags|=1,it(e,t,n,a),t.child;case 14:return Gf(e,t,t.type,t.pendingProps,a);case 15:return Qf(e,t,t.type,t.pendingProps,a);case 19:return $f(e,t,a);case 31:return Vb(e,t,a);case 22:return kf(e,t,a,t.pendingProps);case 24:return vo(t),n=nt(ke),e===null?(l=El(),l===null&&(l=qe,u=xl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),t.memoizedState={parent:n,cache:l},Dl(t),Ra(t,ke,l)):((e.lanes&a)!==0&&(Cl(e,t),In(t,null,null,a),$n()),l=e.memoizedState,u=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ra(t,ke,n)):(n=u.cache,Ra(t,ke,n),n!==l.cache&&Sl(t,[ke],a,!0))),it(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function ga(e){e.flags|=4}function ru(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Ch())e.flags|=8192;else throw So=fs,Al}else e.flags&=-16777217}function eh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pp(t))if(Ch())e.flags|=8192;else throw So=fs,Al}function qs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Od():536870912,e.lanes|=t,dn|=t)}function ii(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function _b(e,t,a){var n=t.pendingProps;switch(pl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ma(ke),fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wo(t)?ga(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vl())),Re(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(ga(t),u!==null?(Re(t),eh(t,u)):(Re(t),ru(t,l,null,n,a))):u?u!==e.memoizedState?(ga(t),Re(t),eh(t,u)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ga(t),Re(t),ru(t,l,e,n,a)),null;case 27:if(ia(t),a=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ga(t);else{if(!n){if(t.stateNode===null)throw Error(s(166));return Re(t),null}e=K.current,Wo(t)?Om(t):(e=rp(l,n,a),t.stateNode=e,ga(t))}return Re(t),null;case 5:if(ia(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ga(t);else{if(!n){if(t.stateNode===null)throw Error(s(166));return Re(t),null}if(u=K.current,Wo(t))Om(t);else{var m=Ys(re.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?m.createElement("select",{is:n.is}):m.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?m.createElement(l,{is:n.is}):m.createElement(l)}}u[at]=t,u[pt]=n;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=u;e:switch(st(u,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ga(t)}}return Re(t),ru(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ga(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(s(166));if(e=re.current,Wo(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=ot,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Fh(e.nodeValue,a)),e||wa(t,!0)}else e=Ys(e).createTextNode(n),e[at]=t,t.stateNode=e}return Re(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Wo(t),a!==null){if(e===null){if(!n)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[at]=t}else po(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else a=vl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Re(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Wo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[at]=t}else po(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),l=!1}else l=vl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),qs(t,t.updateQueue),Re(t),null);case 4:return fe(),e===null&&zu(t.stateNode.containerInfo),Re(t),null;case 10:return ma(t.type),Re(t),null;case 19:if(_(Ge),n=t.memoizedState,n===null)return Re(t),null;if(l=(t.flags&128)!==0,u=n.rendering,u===null)if(l)ii(n,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=vs(e),u!==null){for(t.flags|=128,ii(n,!1),e=u.updateQueue,t.updateQueue=e,qs(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Mm(a,e),a=a.sibling;return Z(Ge,Ge.current&1|2),Se&&ca(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Tt()>Vs&&(t.flags|=128,l=!0,ii(n,!1),t.lanes=4194304)}else{if(!l)if(e=vs(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,qs(t,e),ii(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!Se)return Re(t),null}else 2*Tt()-n.renderingStartTime>Vs&&a!==536870912&&(t.flags|=128,l=!0,ii(n,!1),t.lanes=4194304);n.isBackwards?(u.sibling=t.child,t.child=u):(e=n.last,e!==null?e.sibling=u:t.child=u,n.last=u)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Tt(),e.sibling=null,a=Ge.current,Z(Ge,l?a&1|2:a&1),Se&&ca(t,n.treeForkCount),e):(Re(t),null);case 22:case 23:return Nt(t),ql(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),a=t.updateQueue,a!==null&&qs(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&_(yo),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ma(ke),Re(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Lb(e,t){switch(pl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ma(ke),fe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ia(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(s(340));po()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));po()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Ge),null;case 4:return fe(),null;case 10:return ma(t.type),null;case 22:case 23:return Nt(t),ql(),e!==null&&_(yo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ma(ke),null;case 25:return null;default:return null}}function th(e,t){switch(pl(t),t.tag){case 3:ma(ke),fe();break;case 26:case 27:case 5:ia(t);break;case 4:fe();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:_(Ge);break;case 10:ma(t.type);break;case 22:case 23:Nt(t),ql(),e!==null&&_(yo);break;case 24:ma(ke)}}function si(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var u=a.create,m=a.inst;n=u(),m.destroy=n}a=a.next}while(a!==l)}}catch(v){Ce(t,t.return,v)}}function Ha(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var u=l.next;n=u;do{if((n.tag&e)===e){var m=n.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,l=t;var T=a,M=v;try{M()}catch(w){Ce(l,T,w)}}}n=n.next}while(n!==u)}}catch(w){Ce(t,t.return,w)}}function ah(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ym(t,a)}catch(n){Ce(e,e.return,n)}}}function oh(e,t,a){a.props=Eo(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ce(e,t,n)}}function ri(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){Ce(e,t,l)}}function ea(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){Ce(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ce(e,t,l)}else a.current=null}function nh(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){Ce(e,e.return,l)}}function lu(e,t,a){try{var n=e.stateNode;sS(n,e.type,a,t),n[pt]=t}catch(l){Ce(e,e.return,l)}}function ih(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ih(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cu(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ra));else if(n!==4&&(n===27&&Xa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(cu(e,t,a),e=e.sibling;e!==null;)cu(e,t,a),e=e.sibling}function js(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(js(e,t,a),e=e.sibling;e!==null;)js(e,t,a),e=e.sibling}function sh(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);st(t,n,a),t[at]=e,t[pt]=a}catch(u){Ce(e,e.return,u)}}var va=!1,Xe=!1,du=!1,rh=typeof WeakSet=="function"?WeakSet:Set,et=null;function Ub(e,t){if(e=e.containerInfo,Ou=$s,e=ym(e),nl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var m=0,v=-1,T=-1,M=0,w=0,B=e,z=null;t:for(;;){for(var j;B!==a||l!==0&&B.nodeType!==3||(v=m+l),B!==u||n!==0&&B.nodeType!==3||(T=m+n),B.nodeType===3&&(m+=B.nodeValue.length),(j=B.firstChild)!==null;)z=B,B=j;for(;;){if(B===e)break t;if(z===a&&++M===l&&(v=m),z===u&&++w===n&&(T=m),(j=B.nextSibling)!==null)break;B=z,z=B.parentNode}B=j}a=v===-1||T===-1?null:{start:v,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(wu={focusedElem:e,selectionRange:a},$s=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,l=u.memoizedProps,u=u.memoizedState,n=a.stateNode;try{var $=Eo(a.type,l);e=n.getSnapshotBeforeUpdate($,u),n.__reactInternalSnapshotBeforeUpdate=e}catch(le){Ce(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Bu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function lh(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),n&4&&si(5,a);break;case 1:if(ba(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){Ce(a,a.return,m)}else{var l=Eo(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ce(a,a.return,m)}}n&64&&ah(a),n&512&&ri(a,a.return);break;case 3:if(ba(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ym(e,t)}catch(m){Ce(a,a.return,m)}}break;case 27:t===null&&n&4&&sh(a);case 26:case 5:ba(e,a),t===null&&n&4&&nh(a),n&512&&ri(a,a.return);break;case 12:ba(e,a);break;case 31:ba(e,a),n&4&&dh(e,a);break;case 13:ba(e,a),n&4&&mh(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Zb.bind(null,a),hS(e,a))));break;case 22:if(n=a.memoizedState!==null||va,!n){t=t!==null&&t.memoizedState!==null||Xe,l=va;var u=Xe;va=n,(Xe=t)&&!u?Sa(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),va=l,Xe=u}break;case 30:break;default:ba(e,a)}}function uh(e){var t=e.alternate;t!==null&&(e.alternate=null,uh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,vt=!1;function ya(e,t,a){for(a=a.child;a!==null;)ch(e,t,a),a=a.sibling}function ch(e,t,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(jn,a)}catch{}switch(a.tag){case 26:Xe||ea(a,t),ya(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||ea(a,t);var n=Be,l=vt;Xa(a.type)&&(Be=a.stateNode,vt=!1),ya(e,t,a),gi(a.stateNode),Be=n,vt=l;break;case 5:Xe||ea(a,t);case 6:if(n=Be,l=vt,Be=null,ya(e,t,a),Be=n,vt=l,Be!==null)if(vt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(u){Ce(a,t,u)}else try{Be.removeChild(a.stateNode)}catch(u){Ce(a,t,u)}break;case 18:Be!==null&&(vt?(e=Be,ap(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bn(e)):ap(Be,a.stateNode));break;case 4:n=Be,l=vt,Be=a.stateNode.containerInfo,vt=!0,ya(e,t,a),Be=n,vt=l;break;case 0:case 11:case 14:case 15:Ha(2,a,t),Xe||Ha(4,a,t),ya(e,t,a);break;case 1:Xe||(ea(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&oh(a,t,n)),ya(e,t,a);break;case 21:ya(e,t,a);break;case 22:Xe=(n=Xe)||a.memoizedState!==null,ya(e,t,a),Xe=n;break;default:ya(e,t,a)}}function dh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bn(e)}catch(a){Ce(t,t.return,a)}}}function mh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bn(e)}catch(a){Ce(t,t.return,a)}}function Hb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rh),t;default:throw Error(s(435,e.tag))}}function Os(e,t){var a=Hb(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=Kb.bind(null,e,n);n.then(l,l)}})}function yt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],u=e,m=t,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(Xa(v.type)){Be=v.stateNode,vt=!1;break e}break;case 5:Be=v.stateNode,vt=!1;break e;case 3:case 4:Be=v.stateNode.containerInfo,vt=!0;break e}v=v.return}if(Be===null)throw Error(s(160));ch(u,m,l),Be=null,vt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)fh(t,e),t=t.sibling}var Jt=null;function fh(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(t,e),bt(e),n&4&&(Ha(3,e,e.return),si(3,e),Ha(5,e,e.return));break;case 1:yt(t,e),bt(e),n&512&&(Xe||a===null||ea(a,a.return)),n&64&&va&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Jt;if(yt(t,e),bt(e),n&512&&(Xe||a===null||ea(a,a.return)),n&4){var u=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":u=l.getElementsByTagName("title")[0],(!u||u[Rn]||u[at]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(n),l.head.insertBefore(u,l.querySelector("head > title"))),st(u,n,a),u[at]=e,Ie(u),n=u;break e;case"link":var m=fp("link","href",l).get(n+(a.href||""));if(m){for(var v=0;v<m.length;v++)if(u=m[v],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(v,1);break t}}u=l.createElement(n),st(u,n,a),l.head.appendChild(u);break;case"meta":if(m=fp("meta","content",l).get(n+(a.content||""))){for(v=0;v<m.length;v++)if(u=m[v],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(v,1);break t}}u=l.createElement(n),st(u,n,a),l.head.appendChild(u);break;default:throw Error(s(468,n))}u[at]=e,Ie(u),n=u}e.stateNode=n}else hp(l,e.type,e.stateNode);else e.stateNode=mp(l,n,e.memoizedProps);else u!==n?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,n===null?hp(l,e.type,e.stateNode):mp(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&lu(e,e.memoizedProps,a.memoizedProps)}break;case 27:yt(t,e),bt(e),n&512&&(Xe||a===null||ea(a,a.return)),a!==null&&n&4&&lu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(yt(t,e),bt(e),n&512&&(Xe||a===null||ea(a,a.return)),e.flags&32){l=e.stateNode;try{Po(l,"")}catch($){Ce(e,e.return,$)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,lu(e,l,a!==null?a.memoizedProps:l)),n&1024&&(du=!0);break;case 6:if(yt(t,e),bt(e),n&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch($){Ce(e,e.return,$)}}break;case 3:if(Zs=null,l=Jt,Jt=Js(t.containerInfo),yt(t,e),Jt=l,bt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch($){Ce(e,e.return,$)}du&&(du=!1,hh(e));break;case 4:n=Jt,Jt=Js(e.stateNode.containerInfo),yt(t,e),bt(e),Jt=n;break;case 12:yt(t,e),bt(e);break;case 31:yt(t,e),bt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Os(e,n)));break;case 13:yt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rs=Tt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Os(e,n)));break;case 22:l=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,M=va,w=Xe;if(va=M||l,Xe=w||T,yt(t,e),Xe=w,va=M,bt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||T||va||Xe||Ao(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){T=a=t;try{if(u=T.stateNode,l)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=T.stateNode;var B=T.memoizedProps.style,z=B!=null&&B.hasOwnProperty("display")?B.display:null;v.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch($){Ce(T,T.return,$)}}}else if(t.tag===6){if(a===null){T=t;try{T.stateNode.nodeValue=l?"":T.memoizedProps}catch($){Ce(T,T.return,$)}}}else if(t.tag===18){if(a===null){T=t;try{var j=T.stateNode;l?op(j,!0):op(T.stateNode,!1)}catch($){Ce(T,T.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Os(e,a))));break;case 19:yt(t,e),bt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Os(e,n)));break;case 30:break;case 21:break;default:yt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(ih(n)){a=n;break}n=n.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,u=uu(e);js(e,u,l);break;case 5:var m=a.stateNode;a.flags&32&&(Po(m,""),a.flags&=-33);var v=uu(e);js(e,v,m);break;case 3:case 4:var T=a.stateNode.containerInfo,M=uu(e);cu(e,M,T);break;default:throw Error(s(161))}}catch(w){Ce(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)lh(e,t.alternate,t),t=t.sibling}function Ao(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ha(4,t,t.return),Ao(t);break;case 1:ea(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&oh(t,t.return,a),Ao(t);break;case 27:gi(t.stateNode);case 26:case 5:ea(t,t.return),Ao(t);break;case 22:t.memoizedState===null&&Ao(t);break;case 30:Ao(t);break;default:Ao(t)}e=e.sibling}}function Sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:Sa(l,u,a),si(4,u);break;case 1:if(Sa(l,u,a),n=u,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(M){Ce(n,n.return,M)}if(n=u,l=n.updateQueue,l!==null){var v=n.stateNode;try{var T=l.shared.hiddenCallbacks;if(T!==null)for(l.shared.hiddenCallbacks=null,l=0;l<T.length;l++)km(T[l],v)}catch(M){Ce(n,n.return,M)}}a&&m&64&&ah(u),ri(u,u.return);break;case 27:sh(u);case 26:case 5:Sa(l,u,a),a&&n===null&&m&4&&nh(u),ri(u,u.return);break;case 12:Sa(l,u,a);break;case 31:Sa(l,u,a),a&&m&4&&dh(l,u);break;case 13:Sa(l,u,a),a&&m&4&&mh(l,u);break;case 22:u.memoizedState===null&&Sa(l,u,a),ri(u,u.return);break;case 30:break;default:Sa(l,u,a)}t=t.sibling}}function mu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xn(a))}function fu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xn(e))}function Xt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ph(e,t,a,n),t=t.sibling}function ph(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,a,n),l&2048&&si(9,t);break;case 1:Xt(e,t,a,n);break;case 3:Xt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xn(e)));break;case 12:if(l&2048){Xt(e,t,a,n),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,v=u.onPostCommit;typeof v=="function"&&v(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Ce(t,t.return,T)}}else Xt(e,t,a,n);break;case 31:Xt(e,t,a,n);break;case 13:Xt(e,t,a,n);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?Xt(e,t,a,n):li(e,t):u._visibility&2?Xt(e,t,a,n):(u._visibility|=2,ln(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&mu(m,t);break;case 24:Xt(e,t,a,n),l&2048&&fu(t.alternate,t);break;default:Xt(e,t,a,n)}}function ln(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,m=t,v=a,T=n,M=m.flags;switch(m.tag){case 0:case 11:case 15:ln(u,m,v,T,l),si(8,m);break;case 23:break;case 22:var w=m.stateNode;m.memoizedState!==null?w._visibility&2?ln(u,m,v,T,l):li(u,m):(w._visibility|=2,ln(u,m,v,T,l)),l&&M&2048&&mu(m.alternate,m);break;case 24:ln(u,m,v,T,l),l&&M&2048&&fu(m.alternate,m);break;default:ln(u,m,v,T,l)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:li(a,n),l&2048&&mu(n.alternate,n);break;case 24:li(a,n),l&2048&&fu(n.alternate,n);break;default:li(a,n)}t=t.sibling}}var ui=8192;function un(e,t,a){if(e.subtreeFlags&ui)for(e=e.child;e!==null;)gh(e,t,a),e=e.sibling}function gh(e,t,a){switch(e.tag){case 26:un(e,t,a),e.flags&ui&&e.memoizedState!==null&&CS(a,Jt,e.memoizedState,e.memoizedProps);break;case 5:un(e,t,a);break;case 3:case 4:var n=Jt;Jt=Js(e.stateNode.containerInfo),un(e,t,a),Jt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ui,ui=16777216,un(e,t,a),ui=n):un(e,t,a));break;default:un(e,t,a)}}function vh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];et=n,bh(n,e)}vh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yh(e),e=e.sibling}function yh(e){switch(e.tag){case 0:case 11:case 15:ci(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:ci(e);break;case 12:ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ws(e)):ci(e);break;default:ci(e)}}function ws(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];et=n,bh(n,e)}vh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ha(8,t,t.return),ws(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ws(t));break;default:ws(t)}e=e.sibling}}function bh(e,t){for(;et!==null;){var a=et;switch(a.tag){case 0:case 11:case 15:Ha(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Xn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,et=n;else e:for(a=e;et!==null;){n=et;var l=n.sibling,u=n.return;if(uh(n),n===a){et=null;break e}if(l!==null){l.return=u,et=l;break e}et=u}}}var Pb={getCacheForType:function(e){var t=nt(ke),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return nt(ke).controller.signal}},Gb=typeof WeakMap=="function"?WeakMap:Map,Ee=0,qe=null,pe=null,ve=0,De=0,zt=null,Pa=!1,cn=!1,hu=!1,xa=0,Ue=0,Ga=0,Do=0,pu=0,qt=0,dn=0,di=null,St=null,gu=!1,Rs=0,Sh=0,Vs=1/0,Bs=null,Qa=null,Ke=0,ka=null,mn=null,Ta=0,vu=0,yu=null,xh=null,mi=0,bu=null;function jt(){return(Ee&2)!==0&&ve!==0?ve&-ve:O.T!==null?Du():Bd()}function Th(){if(qt===0)if((ve&536870912)===0||Se){var e=ki;ki<<=1,(ki&3932160)===0&&(ki=262144),qt=e}else qt=536870912;return e=Mt.current,e!==null&&(e.flags|=32),qt}function xt(e,t,a){(e===qe&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(fn(e,0),Ya(e,ve,qt,!1)),wn(e,a),((Ee&2)===0||e!==qe)&&(e===qe&&((Ee&2)===0&&(Do|=a),Ue===4&&Ya(e,ve,qt,!1)),ta(e))}function Eh(e,t,a){if((Ee&6)!==0)throw Error(s(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||On(e,t),l=n?Yb(e,t):xu(e,t,!0),u=n;do{if(l===0){cn&&!n&&Ya(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!Qb(a)){l=xu(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var v=e;l=di;var T=v.current.memoizedState.isDehydrated;if(T&&(fn(v,m).flags|=256),m=xu(v,m,!1),m!==2){if(hu&&!T){v.errorRecoveryDisabledLanes|=u,Do|=u,l=4;break e}u=St,St=l,u!==null&&(St===null?St=u:St.push.apply(St,u))}l=m}if(u=!1,l!==2)continue}}if(l===1){fn(e,0),Ya(e,t,0,!0);break}e:{switch(n=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Ya(n,t,qt,!Pa);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Rs+300-Tt(),10<l)){if(Ya(n,t,qt,!Pa),Ji(n,0,!0)!==0)break e;Ta=t,n.timeoutHandle=ep(Ah.bind(null,n,a,St,Bs,gu,t,qt,Do,dn,Pa,u,"Throttled",-0,0),l);break e}Ah(n,a,St,Bs,gu,t,qt,Do,dn,Pa,u,null,-0,0)}}break}while(!0);ta(e)}function Ah(e,t,a,n,l,u,m,v,T,M,w,B,z,j){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},gh(t,u,B);var $=(u&62914560)===u?Rs-Tt():(u&4194048)===u?Sh-Tt():0;if($=MS(B,$),$!==null){Ta=u,e.cancelPendingCommit=$(Oh.bind(null,e,t,u,a,n,l,m,v,T,w,B,null,z,j)),Ya(e,u,m,!M);return}}Oh(e,t,u,a,n,l,m,v,T)}function Qb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],u=l.getSnapshot;l=l.value;try{if(!Dt(u(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ya(e,t,a,n){t&=~pu,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var u=31-At(l),m=1<<u;n[u]=-1,l&=~m}a!==0&&wd(e,a,t)}function _s(){return(Ee&6)===0?(fi(0),!1):!0}function Su(){if(pe!==null){if(De===0)var e=pe.return;else e=pe,da=go=null,Bl(e),an=null,Kn=0,e=pe;for(;e!==null;)th(e.alternate,e),e=e.return;pe=null}}function fn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,uS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ta=0,Su(),qe=e,pe=a=ua(e.current,null),ve=t,De=0,zt=null,Pa=!1,cn=On(e,t),hu=!1,dn=qt=pu=Do=Ga=Ue=0,St=di=null,gu=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-At(n),u=1<<l;t|=e[l],n&=~u}return xa=t,ns(),a}function Dh(e,t){ce=null,O.H=oi,t===tn||t===ms?(t=Hm(),De=3):t===Al?(t=Hm(),De=4):De=t===$l?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zt=t,pe===null&&(Ue=1,Cs(e,Bt(t,e.current)))}function Ch(){var e=Mt.current;return e===null?!0:(ve&4194048)===ve?Ht===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Ht:!1}function Mh(){var e=O.H;return O.H=oi,e===null?oi:e}function Nh(){var e=O.A;return O.A=Pb,e}function Ls(){Ue=4,Pa||(ve&4194048)!==ve&&Mt.current!==null||(cn=!0),(Ga&134217727)===0&&(Do&134217727)===0||qe===null||Ya(qe,ve,qt,!1)}function xu(e,t,a){var n=Ee;Ee|=2;var l=Mh(),u=Nh();(qe!==e||ve!==t)&&(Bs=null,fn(e,t)),t=!1;var m=Ue;e:do try{if(De!==0&&pe!==null){var v=pe,T=zt;switch(De){case 8:Su(),m=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var M=De;if(De=0,zt=null,hn(e,v,T,M),a&&cn){m=0;break e}break;default:M=De,De=0,zt=null,hn(e,v,T,M)}}kb(),m=Ue;break}catch(w){Dh(e,w)}while(!0);return t&&e.shellSuspendCounter++,da=go=null,Ee=n,O.H=l,O.A=u,pe===null&&(qe=null,ve=0,ns()),m}function kb(){for(;pe!==null;)zh(pe)}function Yb(e,t){var a=Ee;Ee|=2;var n=Mh(),l=Nh();qe!==e||ve!==t?(Bs=null,Vs=Tt()+500,fn(e,t)):cn=On(e,t);e:do try{if(De!==0&&pe!==null){t=pe;var u=zt;t:switch(De){case 1:De=0,zt=null,hn(e,t,u,1);break;case 2:case 9:if(Lm(u)){De=0,zt=null,qh(t);break}t=function(){De!==2&&De!==9||qe!==e||(De=7),ta(e)},u.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:Lm(u)?(De=0,zt=null,qh(t)):(De=0,zt=null,hn(e,t,u,7));break;case 5:var m=null;switch(pe.tag){case 26:m=pe.memoizedState;case 5:case 27:var v=pe;if(m?pp(m):v.stateNode.complete){De=0,zt=null;var T=v.sibling;if(T!==null)pe=T;else{var M=v.return;M!==null?(pe=M,Us(M)):pe=null}break t}}De=0,zt=null,hn(e,t,u,5);break;case 6:De=0,zt=null,hn(e,t,u,6);break;case 8:Su(),Ue=6;break e;default:throw Error(s(462))}}Jb();break}catch(w){Dh(e,w)}while(!0);return da=go=null,O.H=n,O.A=l,Ee=a,pe!==null?0:(qe=null,ve=0,ns(),Ue)}function Jb(){for(;pe!==null&&!p0();)zh(pe)}function zh(e){var t=If(e.alternate,e,xa);e.memoizedProps=e.pendingProps,t===null?Us(e):pe=t}function qh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Xf(a,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=Xf(a,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:Bl(t);default:th(a,t),t=pe=Mm(t,xa),t=If(a,t,xa)}e.memoizedProps=e.pendingProps,t===null?Us(e):pe=t}function hn(e,t,a,n){da=go=null,Bl(t),an=null,Kn=0;var l=t.return;try{if(Rb(e,l,t,a,ve)){Ue=1,Cs(e,Bt(a,e.current)),pe=null;return}}catch(u){if(l!==null)throw pe=l,u;Ue=1,Cs(e,Bt(a,e.current)),pe=null;return}t.flags&32768?(Se||n===1?e=!0:cn||(ve&536870912)!==0?e=!1:(Pa=e=!0,(n===2||n===9||n===3||n===6)&&(n=Mt.current,n!==null&&n.tag===13&&(n.flags|=16384))),jh(t,e)):Us(t)}function Us(e){var t=e;do{if((t.flags&32768)!==0){jh(t,Pa);return}e=t.return;var a=_b(t.alternate,t,xa);if(a!==null){pe=a;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);Ue===0&&(Ue=5)}function jh(e,t){do{var a=Lb(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Ue=6,pe=null}function Oh(e,t,a,n,l,u,m,v,T){e.cancelPendingCommit=null;do Hs();while(Ke!==0);if((Ee&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=ul,D0(e,a,u,m,v,T),e===qe&&(pe=qe=null,ve=0),mn=t,ka=e,Ta=a,vu=u,yu=l,xh=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fb(Gi,function(){return _h(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null,l=Q.p,Q.p=2,m=Ee,Ee|=4;try{Ub(e,t,a)}finally{Ee=m,Q.p=l,O.T=n}}Ke=1,wh(),Rh(),Vh()}}function wh(){if(Ke===1){Ke=0;var e=ka,t=mn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var n=Q.p;Q.p=2;var l=Ee;Ee|=4;try{fh(t,e);var u=wu,m=ym(e.containerInfo),v=u.focusedElem,T=u.selectionRange;if(m!==v&&v&&v.ownerDocument&&vm(v.ownerDocument.documentElement,v)){if(T!==null&&nl(v)){var M=T.start,w=T.end;if(w===void 0&&(w=M),"selectionStart"in v)v.selectionStart=M,v.selectionEnd=Math.min(w,v.value.length);else{var B=v.ownerDocument||document,z=B&&B.defaultView||window;if(z.getSelection){var j=z.getSelection(),$=v.textContent.length,le=Math.min(T.start,$),ze=T.end===void 0?le:Math.min(T.end,$);!j.extend&&le>ze&&(m=ze,ze=le,le=m);var D=gm(v,le),E=gm(v,ze);if(D&&E&&(j.rangeCount!==1||j.anchorNode!==D.node||j.anchorOffset!==D.offset||j.focusNode!==E.node||j.focusOffset!==E.offset)){var C=B.createRange();C.setStart(D.node,D.offset),j.removeAllRanges(),le>ze?(j.addRange(C),j.extend(E.node,E.offset)):(C.setEnd(E.node,E.offset),j.addRange(C))}}}}for(B=[],j=v;j=j.parentNode;)j.nodeType===1&&B.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<B.length;v++){var R=B[v];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}$s=!!Ou,wu=Ou=null}finally{Ee=l,Q.p=n,O.T=a}}e.current=t,Ke=2}}function Rh(){if(Ke===2){Ke=0;var e=ka,t=mn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var n=Q.p;Q.p=2;var l=Ee;Ee|=4;try{lh(e,t.alternate,t)}finally{Ee=l,Q.p=n,O.T=a}}Ke=3}}function Vh(){if(Ke===4||Ke===3){Ke=0,g0();var e=ka,t=mn,a=Ta,n=xh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,mn=ka=null,Bh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Qa=null),Ur(a),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(jn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=O.T,l=Q.p,Q.p=2,O.T=null;try{for(var u=e.onRecoverableError,m=0;m<n.length;m++){var v=n[m];u(v.value,{componentStack:v.stack})}}finally{O.T=t,Q.p=l}}(Ta&3)!==0&&Hs(),ta(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===bu?mi++:(mi=0,bu=e):mi=0,fi(0)}}function Bh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xn(t)))}function Hs(){return wh(),Rh(),Vh(),_h()}function _h(){if(Ke!==5)return!1;var e=ka,t=vu;vu=0;var a=Ur(Ta),n=O.T,l=Q.p;try{Q.p=32>a?32:a,O.T=null,a=yu,yu=null;var u=ka,m=Ta;if(Ke=0,mn=ka=null,Ta=0,(Ee&6)!==0)throw Error(s(331));var v=Ee;if(Ee|=4,yh(u.current),ph(u,u.current,m,a),Ee=v,fi(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(jn,u)}catch{}return!0}finally{Q.p=l,O.T=n,Bh(e,t)}}function Lh(e,t,a){t=Bt(a,t),t=Wl(e.stateNode,t,2),e=_a(e,t,2),e!==null&&(wn(e,2),ta(e))}function Ce(e,t,a){if(e.tag===3)Lh(e,e,a);else for(;t!==null;){if(t.tag===3){Lh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Qa===null||!Qa.has(n))){e=Bt(a,e),a=Uf(2),n=_a(t,a,2),n!==null&&(Hf(a,n,t,e),wn(n,2),ta(n));break}}t=t.return}}function Tu(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Gb;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(hu=!0,l.add(a),e=Xb.bind(null,e,t,a),t.then(e,e))}function Xb(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ve&a)===a&&(Ue===4||Ue===3&&(ve&62914560)===ve&&300>Tt()-Rs?(Ee&2)===0&&fn(e,0):pu|=a,dn===ve&&(dn=0)),ta(e)}function Uh(e,t){t===0&&(t=Od()),e=fo(e,t),e!==null&&(wn(e,t),ta(e))}function Zb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Uh(e,a)}function Kb(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(t),Uh(e,a)}function Fb(e,t){return Vr(e,t)}var Ps=null,pn=null,Eu=!1,Gs=!1,Au=!1,Ja=0;function ta(e){e!==pn&&e.next===null&&(pn===null?Ps=pn=e:pn=pn.next=e),Gs=!0,Eu||(Eu=!0,$b())}function fi(e,t){if(!Au&&Gs){Au=!0;do for(var a=!1,n=Ps;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var u=0;else{var m=n.suspendedLanes,v=n.pingedLanes;u=(1<<31-At(42|e)+1)-1,u&=l&~(m&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Qh(n,u))}else u=ve,u=Ji(n,n===qe?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||On(n,u)||(a=!0,Qh(n,u));n=n.next}while(a);Au=!1}}function Wb(){Hh()}function Hh(){Gs=Eu=!1;var e=0;Ja!==0&&lS()&&(e=Ja);for(var t=Tt(),a=null,n=Ps;n!==null;){var l=n.next,u=Ph(n,t);u===0?(n.next=null,a===null?Ps=l:a.next=l,l===null&&(pn=a)):(a=n,(e!==0||(u&3)!==0)&&(Gs=!0)),n=l}Ke!==0&&Ke!==5||fi(e),Ja!==0&&(Ja=0)}function Ph(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-At(u),v=1<<m,T=l[m];T===-1?((v&a)===0||(v&n)!==0)&&(l[m]=A0(v,t)):T<=t&&(e.expiredLanes|=v),u&=~v}if(t=qe,a=ve,a=Ji(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Br(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||On(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Br(n),Ur(a)){case 2:case 8:a=qd;break;case 32:a=Gi;break;case 268435456:a=jd;break;default:a=Gi}return n=Gh.bind(null,e),a=Vr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Br(n),e.callbackPriority=2,e.callbackNode=null,2}function Gh(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hs()&&e.callbackNode!==a)return null;var n=ve;return n=Ji(e,e===qe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Eh(e,n,t),Ph(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?Gh.bind(null,e):null)}function Qh(e,t){if(Hs())return null;Eh(e,t,!0)}function $b(){cS(function(){(Ee&6)!==0?Vr(zd,Wb):Hh()})}function Du(){if(Ja===0){var e=Io;e===0&&(e=Qi,Qi<<=1,(Qi&261888)===0&&(Qi=256)),Ja=e}return Ja}function kh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fi(""+e)}function Yh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Ib(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var u=kh((l[pt]||null).action),m=n.submitter;m&&(t=(t=m[pt]||null)?kh(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var v=new es("action","action",null,n,l);e.push({event:v,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ja!==0){var T=m?Yh(l,m):new FormData(l);Yl(a,{pending:!0,data:T,method:l.method,action:u},null,T)}}else typeof u=="function"&&(v.preventDefault(),T=m?Yh(l,m):new FormData(l),Yl(a,{pending:!0,data:T,method:l.method,action:u},u,T))},currentTarget:l}]})}}for(var Cu=0;Cu<ll.length;Cu++){var Mu=ll[Cu],eS=Mu.toLowerCase(),tS=Mu[0].toUpperCase()+Mu.slice(1);Yt(eS,"on"+tS)}Yt(xm,"onAnimationEnd"),Yt(Tm,"onAnimationIteration"),Yt(Em,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(vb,"onTransitionRun"),Yt(yb,"onTransitionStart"),Yt(bb,"onTransitionCancel"),Yt(Am,"onTransitionEnd"),Uo("onMouseEnter",["mouseout","mouseover"]),Uo("onMouseLeave",["mouseout","mouseover"]),Uo("onPointerEnter",["pointerout","pointerover"]),Uo("onPointerLeave",["pointerout","pointerover"]),lo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),lo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),lo("onBeforeInput",["compositionend","keypress","textInput","paste"]),lo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),lo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),lo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hi));function Jh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var u=void 0;if(t)for(var m=n.length-1;0<=m;m--){var v=n[m],T=v.instance,M=v.currentTarget;if(v=v.listener,T!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=M;try{u(l)}catch(w){os(w)}l.currentTarget=null,u=T}else for(m=0;m<n.length;m++){if(v=n[m],T=v.instance,M=v.currentTarget,v=v.listener,T!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=M;try{u(l)}catch(w){os(w)}l.currentTarget=null,u=T}}}}function ge(e,t){var a=t[Hr];a===void 0&&(a=t[Hr]=new Set);var n=e+"__bubble";a.has(n)||(Xh(t,e,2,!1),a.add(n))}function Nu(e,t,a){var n=0;t&&(n|=4),Xh(a,e,n,t)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function zu(e){if(!e[Qs]){e[Qs]=!0,Ud.forEach(function(a){a!=="selectionchange"&&(aS.has(a)||Nu(a,!1,e),Nu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qs]||(t[Qs]=!0,Nu("selectionchange",!1,t))}}function Xh(e,t,a,n){switch(Tp(t)){case 2:var l=qS;break;case 8:l=jS;break;default:l=ku}a=l.bind(null,t,a,e),l=void 0,!Kr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function qu(e,t,a,n,l){var u=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var m=n.tag;if(m===3||m===4){var v=n.stateNode.containerInfo;if(v===l)break;if(m===4)for(m=n.return;m!==null;){var T=m.tag;if((T===3||T===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;v!==null;){if(m=Bo(v),m===null)return;if(T=m.tag,T===5||T===6||T===26||T===27){n=u=m;continue e}v=v.parentNode}}n=n.return}Wd(function(){var M=u,w=Xr(a),B=[];e:{var z=Dm.get(e);if(z!==void 0){var j=es,$=e;switch(e){case"keypress":if($i(a)===0)break e;case"keydown":case"keyup":j=K0;break;case"focusin":$="focus",j=Ir;break;case"focusout":$="blur",j=Ir;break;case"beforeblur":case"afterblur":j=Ir;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=_0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=$0;break;case xm:case Tm:case Em:j=H0;break;case Am:j=eb;break;case"scroll":case"scrollend":j=V0;break;case"wheel":j=ab;break;case"copy":case"cut":case"paste":j=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=am;break;case"toggle":case"beforetoggle":j=nb}var le=(t&4)!==0,ze=!le&&(e==="scroll"||e==="scrollend"),D=le?z!==null?z+"Capture":null:z;le=[];for(var E=M,C;E!==null;){var R=E;if(C=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||C===null||D===null||(R=Bn(E,D),R!=null&&le.push(pi(E,R,C))),ze)break;E=E.return}0<le.length&&(z=new j(z,$,null,a,w),B.push({event:z,listeners:le}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&a!==Jr&&($=a.relatedTarget||a.fromElement)&&(Bo($)||$[Vo]))break e;if((j||z)&&(z=w.window===w?w:(z=w.ownerDocument)?z.defaultView||z.parentWindow:window,j?($=a.relatedTarget||a.toElement,j=M,$=$?Bo($):null,$!==null&&(ze=f($),le=$.tag,$!==ze||le!==5&&le!==27&&le!==6)&&($=null)):(j=null,$=M),j!==$)){if(le=em,R="onMouseLeave",D="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(le=am,R="onPointerLeave",D="onPointerEnter",E="pointer"),ze=j==null?z:Vn(j),C=$==null?z:Vn($),z=new le(R,E+"leave",j,a,w),z.target=ze,z.relatedTarget=C,R=null,Bo(w)===M&&(le=new le(D,E+"enter",$,a,w),le.target=C,le.relatedTarget=ze,R=le),ze=R,j&&$)t:{for(le=oS,D=j,E=$,C=0,R=D;R;R=le(R))C++;R=0;for(var se=E;se;se=le(se))R++;for(;0<C-R;)D=le(D),C--;for(;0<R-C;)E=le(E),R--;for(;C--;){if(D===E||E!==null&&D===E.alternate){le=D;break t}D=le(D),E=le(E)}le=null}else le=null;j!==null&&Zh(B,z,j,le,!1),$!==null&&ze!==null&&Zh(B,ze,$,le,!0)}}e:{if(z=M?Vn(M):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var xe=cm;else if(lm(z))if(dm)xe=hb;else{xe=mb;var ae=db}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?M&&Yr(M.elementType)&&(xe=cm):xe=fb;if(xe&&(xe=xe(e,M))){um(B,xe,a,w);break e}ae&&ae(e,z,M),e==="focusout"&&M&&z.type==="number"&&M.memoizedProps.value!=null&&kr(z,"number",z.value)}switch(ae=M?Vn(M):window,e){case"focusin":(lm(ae)||ae.contentEditable==="true")&&(Yo=ae,il=M,kn=null);break;case"focusout":kn=il=Yo=null;break;case"mousedown":sl=!0;break;case"contextmenu":case"mouseup":case"dragend":sl=!1,bm(B,a,w);break;case"selectionchange":if(gb)break;case"keydown":case"keyup":bm(B,a,w)}var de;if(tl)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else ko?sm(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(om&&a.locale!=="ko"&&(ko||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&ko&&(de=$d()):(qa=w,Fr="value"in qa?qa.value:qa.textContent,ko=!0)),ae=ks(M,ye),0<ae.length&&(ye=new tm(ye,e,null,a,w),B.push({event:ye,listeners:ae}),de?ye.data=de:(de=rm(a),de!==null&&(ye.data=de)))),(de=sb?rb(e,a):lb(e,a))&&(ye=ks(M,"onBeforeInput"),0<ye.length&&(ae=new tm("onBeforeInput","beforeinput",null,a,w),B.push({event:ae,listeners:ye}),ae.data=de)),Ib(B,e,M,a,w)}Jh(B,t)})}function pi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ks(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Bn(e,a),l!=null&&n.unshift(pi(e,l,u)),l=Bn(e,t),l!=null&&n.push(pi(e,l,u))),e.tag===3)return n;e=e.return}return[]}function oS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zh(e,t,a,n,l){for(var u=t._reactName,m=[];a!==null&&a!==n;){var v=a,T=v.alternate,M=v.stateNode;if(v=v.tag,T!==null&&T===n)break;v!==5&&v!==26&&v!==27||M===null||(T=M,l?(M=Bn(a,u),M!=null&&m.unshift(pi(a,M,T))):l||(M=Bn(a,u),M!=null&&m.push(pi(a,M,T)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var nS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function Kh(e){return(typeof e=="string"?e:""+e).replace(nS,`
`).replace(iS,"")}function Fh(e,t){return t=Kh(t),Kh(e)===t}function Ne(e,t,a,n,l,u){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Po(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Po(e,""+n);break;case"className":Zi(e,"class",n);break;case"tabIndex":Zi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Zi(e,a,n);break;case"style":Kd(e,n,u);break;case"data":if(t!=="object"){Zi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Fi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&Ne(e,t,"name",l.name,l,null),Ne(e,t,"formEncType",l.formEncType,l,null),Ne(e,t,"formMethod",l.formMethod,l,null),Ne(e,t,"formTarget",l.formTarget,l,null)):(Ne(e,t,"encType",l.encType,l,null),Ne(e,t,"method",l.method,l,null),Ne(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Fi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=ra);break;case"onScroll":n!=null&&ge("scroll",e);break;case"onScrollEnd":n!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Fi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Xi(e,"popover",n);break;case"xlinkActuate":sa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":sa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":sa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":sa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":sa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":sa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":sa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":sa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":sa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Xi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,Xi(e,a,n))}}function ju(e,t,a,n,l,u){switch(a){case"style":Kd(e,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Po(e,n):(typeof n=="number"||typeof n=="bigint")&&Po(e,""+n);break;case"onScroll":n!=null&&ge("scroll",e);break;case"onScrollEnd":n!=null&&ge("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),u=e[pt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof n=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Xi(e,a,n)}}}function st(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var n=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var m=a[u];if(m!=null)switch(u){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ne(e,t,u,m,a,null)}}l&&Ne(e,t,"srcSet",a.srcSet,a,null),n&&Ne(e,t,"src",a.src,a,null);return;case"input":ge("invalid",e);var v=u=m=l=null,T=null,M=null;for(n in a)if(a.hasOwnProperty(n)){var w=a[n];if(w!=null)switch(n){case"name":l=w;break;case"type":m=w;break;case"checked":T=w;break;case"defaultChecked":M=w;break;case"value":u=w;break;case"defaultValue":v=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,t));break;default:Ne(e,t,n,w,a,null)}}Yd(e,u,v,T,M,m,l,!1);return;case"select":ge("invalid",e),n=m=u=null;for(l in a)if(a.hasOwnProperty(l)&&(v=a[l],v!=null))switch(l){case"value":u=v;break;case"defaultValue":m=v;break;case"multiple":n=v;default:Ne(e,t,l,v,a,null)}t=u,a=m,e.multiple=!!n,t!=null?Ho(e,!!n,t,!1):a!=null&&Ho(e,!!n,a,!0);return;case"textarea":ge("invalid",e),u=l=n=null;for(m in a)if(a.hasOwnProperty(m)&&(v=a[m],v!=null))switch(m){case"value":n=v;break;case"defaultValue":l=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(91));break;default:Ne(e,t,m,v,a,null)}Xd(e,n,l,u);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(n=a[T],n!=null))switch(T){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ne(e,t,T,n,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(n=0;n<hi.length;n++)ge(hi[n],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(n=a[M],n!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ne(e,t,M,n,a,null)}return;default:if(Yr(t)){for(w in a)a.hasOwnProperty(w)&&(n=a[w],n!==void 0&&ju(e,t,w,n,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(n=a[v],n!=null&&Ne(e,t,v,n,a,null))}function sS(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,m=null,v=null,T=null,M=null,w=null;for(j in a){var B=a[j];if(a.hasOwnProperty(j)&&B!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":T=B;default:n.hasOwnProperty(j)||Ne(e,t,j,null,n,B)}}for(var z in n){var j=n[z];if(B=a[z],n.hasOwnProperty(z)&&(j!=null||B!=null))switch(z){case"type":u=j;break;case"name":l=j;break;case"checked":M=j;break;case"defaultChecked":w=j;break;case"value":m=j;break;case"defaultValue":v=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,t));break;default:j!==B&&Ne(e,t,z,j,n,B)}}Qr(e,m,v,T,M,w,u,l);return;case"select":j=m=v=z=null;for(u in a)if(T=a[u],a.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":j=T;default:n.hasOwnProperty(u)||Ne(e,t,u,null,n,T)}for(l in n)if(u=n[l],T=a[l],n.hasOwnProperty(l)&&(u!=null||T!=null))switch(l){case"value":z=u;break;case"defaultValue":v=u;break;case"multiple":m=u;default:u!==T&&Ne(e,t,l,u,n,T)}t=v,a=m,n=j,z!=null?Ho(e,!!a,z,!1):!!n!=!!a&&(t!=null?Ho(e,!!a,t,!0):Ho(e,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(v in a)if(l=a[v],a.hasOwnProperty(v)&&l!=null&&!n.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ne(e,t,v,null,n,l)}for(m in n)if(l=n[m],u=a[m],n.hasOwnProperty(m)&&(l!=null||u!=null))switch(m){case"value":z=l;break;case"defaultValue":j=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Ne(e,t,m,l,n,u)}Jd(e,z,j);return;case"option":for(var $ in a)if(z=a[$],a.hasOwnProperty($)&&z!=null&&!n.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:Ne(e,t,$,null,n,z)}for(T in n)if(z=n[T],j=a[T],n.hasOwnProperty(T)&&z!==j&&(z!=null||j!=null))switch(T){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ne(e,t,T,z,n,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)z=a[le],a.hasOwnProperty(le)&&z!=null&&!n.hasOwnProperty(le)&&Ne(e,t,le,null,n,z);for(M in n)if(z=n[M],j=a[M],n.hasOwnProperty(M)&&z!==j&&(z!=null||j!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,t));break;default:Ne(e,t,M,z,n,j)}return;default:if(Yr(t)){for(var ze in a)z=a[ze],a.hasOwnProperty(ze)&&z!==void 0&&!n.hasOwnProperty(ze)&&ju(e,t,ze,void 0,n,z);for(w in n)z=n[w],j=a[w],!n.hasOwnProperty(w)||z===j||z===void 0&&j===void 0||ju(e,t,w,z,n,j);return}}for(var D in a)z=a[D],a.hasOwnProperty(D)&&z!=null&&!n.hasOwnProperty(D)&&Ne(e,t,D,null,n,z);for(B in n)z=n[B],j=a[B],!n.hasOwnProperty(B)||z===j||z==null&&j==null||Ne(e,t,B,z,n,j)}function Wh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],u=l.transferSize,m=l.initiatorType,v=l.duration;if(u&&v&&Wh(m)){for(m=0,v=l.responseEnd,n+=1;n<a.length;n++){var T=a[n],M=T.startTime;if(M>v)break;var w=T.transferSize,B=T.initiatorType;w&&Wh(B)&&(T=T.responseEnd,m+=w*(T<v?1:(v-M)/(T-M)))}if(--n,t+=8*(u+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ou=null,wu=null;function Ys(e){return e.nodeType===9?e:e.ownerDocument}function $h(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ih(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ru(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vu=null;function lS(){var e=window.event;return e&&e.type==="popstate"?e===Vu?!1:(Vu=e,!0):(Vu=null,!1)}var ep=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(e){return tp.resolve(null).then(e).catch(dS)}:ep;function dS(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function ap(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),bn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")gi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,gi(a);for(var u=a.firstChild;u;){var m=u.nextSibling,v=u.nodeName;u[Rn]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=m}}else a==="body"&&gi(e.ownerDocument.body);a=l}while(a);bn(t)}function op(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Bu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bu(a),Pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mS(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Rn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function fS(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pt(e.nextSibling),e===null))return null;return e}function np(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function _u(e){return e.data==="$?"||e.data==="$~"}function Lu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hS(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Uu=null;function ip(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Pt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function rp(e,t,a){switch(t=Ys(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function gi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pr(e)}var Gt=new Map,lp=new Set;function Js(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=Q.d;Q.d={f:pS,r:gS,D:vS,C:yS,L:bS,m:SS,X:TS,S:xS,M:ES};function pS(){var e=Ea.f(),t=_s();return e||t}function gS(e){var t=_o(e);t!==null&&t.tag===5&&t.type==="form"?Df(t):Ea.r(e)}var gn=typeof document>"u"?null:document;function up(e,t,a){var n=gn;if(n&&typeof t=="string"&&t){var l=Rt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),lp.has(l)||(lp.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),st(t,"link",e),Ie(t),n.head.appendChild(t)))}}function vS(e){Ea.D(e),up("dns-prefetch",e,null)}function yS(e,t){Ea.C(e,t),up("preconnect",e,t)}function bS(e,t,a){Ea.L(e,t,a);var n=gn;if(n&&e&&t){var l='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Rt(a.imageSizes)+'"]')):l+='[href="'+Rt(e)+'"]';var u=l;switch(t){case"style":u=vn(e);break;case"script":u=yn(e)}Gt.has(u)||(e=S({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Gt.set(u,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(vi(u))||t==="script"&&n.querySelector(yi(u))||(t=n.createElement("link"),st(t,"link",e),Ie(t),n.head.appendChild(t)))}}function SS(e,t){Ea.m(e,t);var a=gn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Rt(n)+'"][href="'+Rt(e)+'"]',u=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=yn(e)}if(!Gt.has(u)&&(e=S({rel:"modulepreload",href:e},t),Gt.set(u,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yi(u)))return}n=a.createElement("link"),st(n,"link",e),Ie(n),a.head.appendChild(n)}}}function xS(e,t,a){Ea.S(e,t,a);var n=gn;if(n&&e){var l=Lo(n).hoistableStyles,u=vn(e);t=t||"default";var m=l.get(u);if(!m){var v={loading:0,preload:null};if(m=n.querySelector(vi(u)))v.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Gt.get(u))&&Hu(e,a);var T=m=n.createElement("link");Ie(T),st(T,"link",e),T._p=new Promise(function(M,w){T.onload=M,T.onerror=w}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Xs(m,t,n)}m={type:"stylesheet",instance:m,count:1,state:v},l.set(u,m)}}}function TS(e,t){Ea.X(e,t);var a=gn;if(a&&e){var n=Lo(a).hoistableScripts,l=yn(e),u=n.get(l);u||(u=a.querySelector(yi(l)),u||(e=S({src:e,async:!0},t),(t=Gt.get(l))&&Pu(e,t),u=a.createElement("script"),Ie(u),st(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(l,u))}}function ES(e,t){Ea.M(e,t);var a=gn;if(a&&e){var n=Lo(a).hoistableScripts,l=yn(e),u=n.get(l);u||(u=a.querySelector(yi(l)),u||(e=S({src:e,async:!0,type:"module"},t),(t=Gt.get(l))&&Pu(e,t),u=a.createElement("script"),Ie(u),st(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(l,u))}}function cp(e,t,a,n){var l=(l=re.current)?Js(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=vn(a.href),a=Lo(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vn(a.href);var u=Lo(l).hoistableStyles,m=u.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=l.querySelector(vi(e)))&&!u._p&&(m.instance=u,m.state.loading=5),Gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gt.set(e,a),u||AS(l,e,a,m.state))),t&&n===null)throw Error(s(528,""));return m}if(t&&n!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yn(a),a=Lo(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function vn(e){return'href="'+Rt(e)+'"'}function vi(e){return'link[rel="stylesheet"]['+e+"]"}function dp(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function AS(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),st(t,"link",a),Ie(t),e.head.appendChild(t))}function yn(e){return'[src="'+Rt(e)+'"]'}function yi(e){return"script[async]"+e}function mp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Rt(a.href)+'"]');if(n)return t.instance=n,Ie(n),n;var l=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ie(n),st(n,"style",l),Xs(n,a.precedence,e),t.instance=n;case"stylesheet":l=vn(a.href);var u=e.querySelector(vi(l));if(u)return t.state.loading|=4,t.instance=u,Ie(u),u;n=dp(a),(l=Gt.get(l))&&Hu(n,l),u=(e.ownerDocument||e).createElement("link"),Ie(u);var m=u;return m._p=new Promise(function(v,T){m.onload=v,m.onerror=T}),st(u,"link",n),t.state.loading|=4,Xs(u,a.precedence,e),t.instance=u;case"script":return u=yn(a.src),(l=e.querySelector(yi(u)))?(t.instance=l,Ie(l),l):(n=a,(l=Gt.get(u))&&(n=S({},a),Pu(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),st(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Xs(n,a.precedence,e));return t.instance}function Xs(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,u=l,m=0;m<n.length;m++){var v=n[m];if(v.dataset.precedence===t)u=v;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Hu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zs=null;function fp(e,t,a){if(Zs===null){var n=new Map,l=Zs=new Map;l.set(a,n)}else l=Zs,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Rn]||u[at]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var v=n.get(m);v?v.push(u):n.set(m,[u])}}return n}function hp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function DS(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function CS(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=vn(n.href),u=t.querySelector(vi(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ks.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,Ie(u);return}u=t.ownerDocument||t,n=dp(n),(l=Gt.get(l))&&Hu(n,l),u=u.createElement("link"),Ie(u);var m=u;m._p=new Promise(function(v,T){m.onload=v,m.onerror=T}),st(u,"link",n),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ks.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Gu=0;function MS(e,t){return e.stylesheets&&e.count===0&&Ws(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Gu===0&&(Gu=62500*rS());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Gu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Ks(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ws(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fs=null;function Ws(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fs=new Map,t.forEach(NS,e),Fs=null,Ks.call(e))}function NS(e,t){if(!(t.state.loading&4)){var a=Fs.get(e);if(a)var n=a.get(null);else{a=new Map,Fs.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var m=l[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),n=m)}n&&a.set(null,n)}l=t.instance,m=l.getAttribute("data-precedence"),u=a.get(m)||n,u===n&&a.set(null,l),a.set(m,l),this.count++,n=Ks.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var bi={$$typeof:G,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function zS(e,t,a,n,l,u,m,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_r(0),this.hiddenUpdates=_r(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function gp(e,t,a,n,l,u,m,v,T,M,w,B){return e=new zS(e,t,a,m,T,M,w,B,v),t=1,u===!0&&(t|=24),u=Ct(3,null,null,t),e.current=u,u.stateNode=e,t=xl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:n,isDehydrated:a,cache:t},Dl(u),e}function vp(e){return e?(e=Zo,e):Zo}function yp(e,t,a,n,l,u){l=vp(l),n.context===null?n.context=l:n.pendingContext=l,n=Ba(t),n.payload={element:a},u=u===void 0?null:u,u!==null&&(n.callback=u),a=_a(e,n,t),a!==null&&(xt(a,e,t),Wn(a,e,t))}function bp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Qu(e,t){bp(e,t),(e=e.alternate)&&bp(e,t)}function Sp(e){if(e.tag===13||e.tag===31){var t=fo(e,67108864);t!==null&&xt(t,e,67108864),Qu(e,67108864)}}function xp(e){if(e.tag===13||e.tag===31){var t=jt();t=Lr(t);var a=fo(e,t);a!==null&&xt(a,e,t),Qu(e,t)}}var $s=!0;function qS(e,t,a,n){var l=O.T;O.T=null;var u=Q.p;try{Q.p=2,ku(e,t,a,n)}finally{Q.p=u,O.T=l}}function jS(e,t,a,n){var l=O.T;O.T=null;var u=Q.p;try{Q.p=8,ku(e,t,a,n)}finally{Q.p=u,O.T=l}}function ku(e,t,a,n){if($s){var l=Yu(n);if(l===null)qu(e,t,n,Is,a),Ep(e,n);else if(wS(l,e,t,a,n))n.stopPropagation();else if(Ep(e,n),t&4&&-1<OS.indexOf(e)){for(;l!==null;){var u=_o(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=ro(u.pendingLanes);if(m!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var T=1<<31-At(m);v.entanglements[1]|=T,m&=~T}ta(u),(Ee&6)===0&&(Vs=Tt()+500,fi(0))}}break;case 31:case 13:v=fo(u,2),v!==null&&xt(v,u,2),_s(),Qu(u,2)}if(u=Yu(n),u===null&&qu(e,t,n,Is,a),u===l)break;l=u}l!==null&&n.stopPropagation()}else qu(e,t,n,null,a)}}function Yu(e){return e=Xr(e),Ju(e)}var Is=null;function Ju(e){if(Is=null,e=Bo(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Is=e,null}function Tp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(v0()){case zd:return 2;case qd:return 8;case Gi:case y0:return 32;case jd:return 268435456;default:return 32}default:return 32}}var Xu=!1,Za=null,Ka=null,Fa=null,Si=new Map,xi=new Map,Wa=[],OS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ep(e,t){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function Ti(e,t,a,n,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:u,targetContainers:[l]},t!==null&&(t=_o(t),t!==null&&Sp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function wS(e,t,a,n,l){switch(t){case"focusin":return Za=Ti(Za,e,t,a,n,l),!0;case"dragenter":return Ka=Ti(Ka,e,t,a,n,l),!0;case"mouseover":return Fa=Ti(Fa,e,t,a,n,l),!0;case"pointerover":var u=l.pointerId;return Si.set(u,Ti(Si.get(u)||null,e,t,a,n,l)),!0;case"gotpointercapture":return u=l.pointerId,xi.set(u,Ti(xi.get(u)||null,e,t,a,n,l)),!0}return!1}function Ap(e){var t=Bo(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,_d(e.priority,function(){xp(a)});return}}else if(t===31){if(t=h(a),t!==null){e.blockedOn=t,_d(e.priority,function(){xp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Yu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Jr=n,a.target.dispatchEvent(n),Jr=null}else return t=_o(a),t!==null&&Sp(t),e.blockedOn=a,!1;t.shift()}return!0}function Dp(e,t,a){er(e)&&a.delete(t)}function RS(){Xu=!1,Za!==null&&er(Za)&&(Za=null),Ka!==null&&er(Ka)&&(Ka=null),Fa!==null&&er(Fa)&&(Fa=null),Si.forEach(Dp),xi.forEach(Dp)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xu||(Xu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,RS)))}var ar=null;function Cp(e){ar!==e&&(ar=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ar===e&&(ar=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Ju(n||a)===null)continue;break}var u=_o(a);u!==null&&(e.splice(t,3),t-=3,Yl(u,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function bn(e){function t(T){return tr(T,e)}Za!==null&&tr(Za,e),Ka!==null&&tr(Ka,e),Fa!==null&&tr(Fa,e),Si.forEach(t),xi.forEach(t);for(var a=0;a<Wa.length;a++){var n=Wa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Ap(a),a.blockedOn===null&&Wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],u=a[n+1],m=l[pt]||null;if(typeof u=="function")m||Cp(a);else if(m){var v=null;if(u&&u.hasAttribute("formAction")){if(l=u,m=u[pt]||null)v=m.formAction;else if(Ju(l)!==null)continue}else v=m.action;typeof v=="function"?a[n+1]=v:(a.splice(n,3),n-=3),Cp(a)}}}function Mp(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Zu(e){this._internalRoot=e}or.prototype.render=Zu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,n=jt();yp(a,n,e,t,null,null)},or.prototype.unmount=Zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yp(e.current,2,null,e,null,null),_s(),t[Vo]=null}};function or(e){this._internalRoot=e}or.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Wa.length&&t!==0&&t<Wa[a].priority;a++);Wa.splice(a,0,e),a===0&&Ap(e)}};var Np=i.version;if(Np!=="19.2.4")throw Error(s(527,Np,"19.2.4"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var VS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nr.isDisabled&&nr.supportsFiber)try{jn=nr.inject(VS),Et=nr}catch{}}return Ai.createRoot=function(e,t){if(!c(e))throw Error(s(299));var a=!1,n="",l=Vf,u=Bf,m=_f;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=gp(e,1,!1,null,null,a,n,null,l,u,m,Mp),e[Vo]=t.current,zu(e),new Zu(t)},Ai.hydrateRoot=function(e,t,a){if(!c(e))throw Error(s(299));var n=!1,l="",u=Vf,m=Bf,v=_f,T=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),t=gp(e,1,!0,t,a??null,n,l,T,u,m,v,Mp),t.context=vp(null),a=t.current,n=jt(),n=Lr(n),l=Ba(n),l.callback=null,_a(a,l,n),a=n,t.current.lanes=a,wn(t,a),ta(t),e[Vo]=t.current,zu(e),new or(t)},Ai.version="19.2.4",Ai}var Lp;function YS(){if(Lp)return Wu.exports;Lp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Wu.exports=kS(),Wu.exports}var JS=YS();const Zc=k.createContext({});function Kc(o){const i=k.useRef(null);return i.current===null&&(i.current=o()),i.current}const cv=typeof window<"u",dv=cv?k.useLayoutEffect:k.useEffect,Mr=k.createContext(null);function Fc(o,i){o.indexOf(i)===-1&&o.push(i)}function vr(o,i){const r=o.indexOf(i);r>-1&&o.splice(r,1)}const na=(o,i,r)=>r>i?i:r<o?o:r;let Wc=()=>{};const Da={},mv=o=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(o);function fv(o){return typeof o=="object"&&o!==null}const hv=o=>/^0[^.\s]+$/u.test(o);function pv(o){let i;return()=>(i===void 0&&(i=o()),i)}const kt=o=>o,XS=(o,i)=>r=>i(o(r)),Li=(...o)=>o.reduce(XS),wi=(o,i,r)=>{const s=i-o;return s===0?1:(r-o)/s};class $c{constructor(){this.subscriptions=[]}add(i){return Fc(this.subscriptions,i),()=>vr(this.subscriptions,i)}notify(i,r,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,r,s);else for(let f=0;f<c;f++){const d=this.subscriptions[f];d&&d(i,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ft=o=>o*1e3,Qt=o=>o/1e3;function gv(o,i){return i?o*(1e3/i):0}const vv=(o,i,r)=>(((1-3*r+3*i)*o+(3*r-6*i))*o+3*i)*o,ZS=1e-7,KS=12;function FS(o,i,r,s,c){let f,d,h=0;do d=i+(r-i)/2,f=vv(d,s,c)-o,f>0?r=d:i=d;while(Math.abs(f)>ZS&&++h<KS);return d}function Ui(o,i,r,s){if(o===i&&r===s)return kt;const c=f=>FS(f,0,1,o,r);return f=>f===0||f===1?f:vv(c(f),i,s)}const yv=o=>i=>i<=.5?o(2*i)/2:(2-o(2*(1-i)))/2,bv=o=>i=>1-o(1-i),Sv=Ui(.33,1.53,.69,.99),Ic=bv(Sv),xv=yv(Ic),Tv=o=>(o*=2)<1?.5*Ic(o):.5*(2-Math.pow(2,-10*(o-1))),ed=o=>1-Math.sin(Math.acos(o)),Ev=bv(ed),Av=yv(ed),WS=Ui(.42,0,1,1),$S=Ui(0,0,.58,1),Dv=Ui(.42,0,.58,1),IS=o=>Array.isArray(o)&&typeof o[0]!="number",Cv=o=>Array.isArray(o)&&typeof o[0]=="number",e1={linear:kt,easeIn:WS,easeInOut:Dv,easeOut:$S,circIn:ed,circInOut:Av,circOut:Ev,backIn:Ic,backInOut:xv,backOut:Sv,anticipate:Tv},t1=o=>typeof o=="string",Up=o=>{if(Cv(o)){Wc(o.length===4);const[i,r,s,c]=o;return Ui(i,r,s,c)}else if(t1(o))return e1[o];return o},ir=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function a1(o,i){let r=new Set,s=new Set,c=!1,f=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){d.has(y)&&(g.schedule(y),o()),y(h)}const g={schedule:(y,S=!1,x=!1)=>{const q=x&&c?r:s;return S&&d.add(y),q.has(y)||q.add(y),y},cancel:y=>{s.delete(y),d.delete(y)},process:y=>{if(h=y,c){f=!0;return}c=!0,[r,s]=[s,r],r.forEach(p),r.clear(),c=!1,f&&(f=!1,g.process(y))}};return g}const o1=40;function Mv(o,i){let r=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>r=!0,d=ir.reduce((G,H)=>(G[H]=a1(f),G),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:y,update:S,preRender:x,render:N,postRender:q}=d,V=()=>{const G=Da.useManualTiming?c.timestamp:performance.now();r=!1,Da.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(G-c.timestamp,o1),1)),c.timestamp=G,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),y.process(c),S.process(c),x.process(c),N.process(c),q.process(c),c.isProcessing=!1,r&&i&&(s=!1,o(V))},U=()=>{r=!0,s=!0,c.isProcessing||o(V)};return{schedule:ir.reduce((G,H)=>{const Y=d[H];return G[H]=(oe,F=!1,L=!1)=>(r||U(),Y.schedule(oe,F,L)),G},{}),cancel:G=>{for(let H=0;H<ir.length;H++)d[ir[H]].cancel(G)},state:c,steps:d}}const{schedule:je,cancel:no,state:rt,steps:tc}=Mv(typeof requestAnimationFrame<"u"?requestAnimationFrame:kt,!0);let dr;function n1(){dr=void 0}const mt={now:()=>(dr===void 0&&mt.set(rt.isProcessing||Da.useManualTiming?rt.timestamp:performance.now()),dr),set:o=>{dr=o,queueMicrotask(n1)}},Nv=o=>i=>typeof i=="string"&&i.startsWith(o),zv=Nv("--"),i1=Nv("var(--"),td=o=>i1(o)?s1.test(o.split("/*")[0].trim()):!1,s1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Hp(o){return typeof o!="string"?!1:o.split("/*")[0].includes("var(--")}const Nn={test:o=>typeof o=="number",parse:parseFloat,transform:o=>o},Ri={...Nn,transform:o=>na(0,1,o)},sr={...Nn,default:1},zi=o=>Math.round(o*1e5)/1e5,ad=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function r1(o){return o==null}const l1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,od=(o,i)=>r=>!!(typeof r=="string"&&l1.test(r)&&r.startsWith(o)||i&&!r1(r)&&Object.prototype.hasOwnProperty.call(r,i)),qv=(o,i,r)=>s=>{if(typeof s!="string")return s;const[c,f,d,h]=s.match(ad);return{[o]:parseFloat(c),[i]:parseFloat(f),[r]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},u1=o=>na(0,255,o),ac={...Nn,transform:o=>Math.round(u1(o))},zo={test:od("rgb","red"),parse:qv("red","green","blue"),transform:({red:o,green:i,blue:r,alpha:s=1})=>"rgba("+ac.transform(o)+", "+ac.transform(i)+", "+ac.transform(r)+", "+zi(Ri.transform(s))+")"};function c1(o){let i="",r="",s="",c="";return o.length>5?(i=o.substring(1,3),r=o.substring(3,5),s=o.substring(5,7),c=o.substring(7,9)):(i=o.substring(1,2),r=o.substring(2,3),s=o.substring(3,4),c=o.substring(4,5),i+=i,r+=r,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const Sc={test:od("#"),parse:c1,transform:zo.transform},Hi=o=>({test:i=>typeof i=="string"&&i.endsWith(o)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${o}`}),to=Hi("deg"),oa=Hi("%"),ee=Hi("px"),d1=Hi("vh"),m1=Hi("vw"),Pp={...oa,parse:o=>oa.parse(o)/100,transform:o=>oa.transform(o*100)},xn={test:od("hsl","hue"),parse:qv("hue","saturation","lightness"),transform:({hue:o,saturation:i,lightness:r,alpha:s=1})=>"hsla("+Math.round(o)+", "+oa.transform(zi(i))+", "+oa.transform(zi(r))+", "+zi(Ri.transform(s))+")"},Ze={test:o=>zo.test(o)||Sc.test(o)||xn.test(o),parse:o=>zo.test(o)?zo.parse(o):xn.test(o)?xn.parse(o):Sc.parse(o),transform:o=>typeof o=="string"?o:o.hasOwnProperty("red")?zo.transform(o):xn.transform(o),getAnimatableNone:o=>{const i=Ze.parse(o);return i.alpha=0,Ze.transform(i)}},f1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function h1(o){var i,r;return isNaN(o)&&typeof o=="string"&&(((i=o.match(ad))==null?void 0:i.length)||0)+(((r=o.match(f1))==null?void 0:r.length)||0)>0}const jv="number",Ov="color",p1="var",g1="var(",Gp="${}",v1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Vi(o){const i=o.toString(),r=[],s={color:[],number:[],var:[]},c=[];let f=0;const h=i.replace(v1,p=>(Ze.test(p)?(s.color.push(f),c.push(Ov),r.push(Ze.parse(p))):p.startsWith(g1)?(s.var.push(f),c.push(p1),r.push(p)):(s.number.push(f),c.push(jv),r.push(parseFloat(p))),++f,Gp)).split(Gp);return{values:r,split:h,indexes:s,types:c}}function wv(o){return Vi(o).values}function Rv(o){const{split:i,types:r}=Vi(o),s=i.length;return c=>{let f="";for(let d=0;d<s;d++)if(f+=i[d],c[d]!==void 0){const h=r[d];h===jv?f+=zi(c[d]):h===Ov?f+=Ze.transform(c[d]):f+=c[d]}return f}}const y1=o=>typeof o=="number"?0:Ze.test(o)?Ze.getAnimatableNone(o):o;function b1(o){const i=wv(o);return Rv(o)(i.map(y1))}const Wt={test:h1,parse:wv,createTransformer:Rv,getAnimatableNone:b1};function oc(o,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?o+(i-o)*6*r:r<1/2?i:r<2/3?o+(i-o)*(2/3-r)*6:o}function S1({hue:o,saturation:i,lightness:r,alpha:s}){o/=360,i/=100,r/=100;let c=0,f=0,d=0;if(!i)c=f=d=r;else{const h=r<.5?r*(1+i):r+i-r*i,p=2*r-h;c=oc(p,h,o+1/3),f=oc(p,h,o),d=oc(p,h,o-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:s}}function yr(o,i){return r=>r>0?i:o}const _e=(o,i,r)=>o+(i-o)*r,nc=(o,i,r)=>{const s=o*o,c=r*(i*i-s)+s;return c<0?0:Math.sqrt(c)},x1=[Sc,zo,xn],T1=o=>x1.find(i=>i.test(o));function Qp(o){const i=T1(o);if(!i)return!1;let r=i.parse(o);return i===xn&&(r=S1(r)),r}const kp=(o,i)=>{const r=Qp(o),s=Qp(i);if(!r||!s)return yr(o,i);const c={...r};return f=>(c.red=nc(r.red,s.red,f),c.green=nc(r.green,s.green,f),c.blue=nc(r.blue,s.blue,f),c.alpha=_e(r.alpha,s.alpha,f),zo.transform(c))},xc=new Set(["none","hidden"]);function E1(o,i){return xc.has(o)?r=>r<=0?o:i:r=>r>=1?i:o}function A1(o,i){return r=>_e(o,i,r)}function nd(o){return typeof o=="number"?A1:typeof o=="string"?td(o)?yr:Ze.test(o)?kp:M1:Array.isArray(o)?Vv:typeof o=="object"?Ze.test(o)?kp:D1:yr}function Vv(o,i){const r=[...o],s=r.length,c=o.map((f,d)=>nd(f)(f,i[d]));return f=>{for(let d=0;d<s;d++)r[d]=c[d](f);return r}}function D1(o,i){const r={...o,...i},s={};for(const c in r)o[c]!==void 0&&i[c]!==void 0&&(s[c]=nd(o[c])(o[c],i[c]));return c=>{for(const f in s)r[f]=s[f](c);return r}}function C1(o,i){const r=[],s={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const f=i.types[c],d=o.indexes[f][s[f]],h=o.values[d]??0;r[c]=h,s[f]++}return r}const M1=(o,i)=>{const r=Wt.createTransformer(i),s=Vi(o),c=Vi(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?xc.has(o)&&!c.values.length||xc.has(i)&&!s.values.length?E1(o,i):Li(Vv(C1(s,c),c.values),r):yr(o,i)};function Bv(o,i,r){return typeof o=="number"&&typeof i=="number"&&typeof r=="number"?_e(o,i,r):nd(o)(o,i)}const N1=o=>{const i=({timestamp:r})=>o(r);return{start:(r=!0)=>je.update(i,r),stop:()=>no(i),now:()=>rt.isProcessing?rt.timestamp:mt.now()}},_v=(o,i,r=10)=>{let s="";const c=Math.max(Math.round(i/r),2);for(let f=0;f<c;f++)s+=Math.round(o(f/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},br=2e4;function id(o){let i=0;const r=50;let s=o.next(i);for(;!s.done&&i<br;)i+=r,s=o.next(i);return i>=br?1/0:i}function z1(o,i=100,r){const s=r({...o,keyframes:[0,i]}),c=Math.min(id(s),br);return{type:"keyframes",ease:f=>s.next(c*f).value/i,duration:Qt(c)}}const q1=5;function Lv(o,i,r){const s=Math.max(i-q1,0);return gv(r-o(s),i-s)}const He={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ic=.001;function j1({duration:o=He.duration,bounce:i=He.bounce,velocity:r=He.velocity,mass:s=He.mass}){let c,f,d=1-i;d=na(He.minDamping,He.maxDamping,d),o=na(He.minDuration,He.maxDuration,Qt(o)),d<1?(c=g=>{const y=g*d,S=y*o,x=y-r,N=Tc(g,d),q=Math.exp(-S);return ic-x/N*q},f=g=>{const S=g*d*o,x=S*r+r,N=Math.pow(d,2)*Math.pow(g,2)*o,q=Math.exp(-S),V=Tc(Math.pow(g,2),d);return(-c(g)+ic>0?-1:1)*((x-N)*q)/V}):(c=g=>{const y=Math.exp(-g*o),S=(g-r)*o+1;return-ic+y*S},f=g=>{const y=Math.exp(-g*o),S=(r-g)*(o*o);return y*S});const h=5/o,p=w1(c,f,h);if(o=Ft(o),isNaN(p))return{stiffness:He.stiffness,damping:He.damping,duration:o};{const g=Math.pow(p,2)*s;return{stiffness:g,damping:d*2*Math.sqrt(s*g),duration:o}}}const O1=12;function w1(o,i,r){let s=r;for(let c=1;c<O1;c++)s=s-o(s)/i(s);return s}function Tc(o,i){return o*Math.sqrt(1-i*i)}const R1=["duration","bounce"],V1=["stiffness","damping","mass"];function Yp(o,i){return i.some(r=>o[r]!==void 0)}function B1(o){let i={velocity:He.velocity,stiffness:He.stiffness,damping:He.damping,mass:He.mass,isResolvedFromDuration:!1,...o};if(!Yp(o,V1)&&Yp(o,R1))if(i.velocity=0,o.visualDuration){const r=o.visualDuration,s=2*Math.PI/(r*1.2),c=s*s,f=2*na(.05,1,1-(o.bounce||0))*Math.sqrt(c);i={...i,mass:He.mass,stiffness:c,damping:f}}else{const r=j1({...o,velocity:0});i={...i,...r,mass:He.mass},i.isResolvedFromDuration=!0}return i}function Sr(o=He.visualDuration,i=He.bounce){const r=typeof o!="object"?{visualDuration:o,keyframes:[0,1],bounce:i}:o;let{restSpeed:s,restDelta:c}=r;const f=r.keyframes[0],d=r.keyframes[r.keyframes.length-1],h={done:!1,value:f},{stiffness:p,damping:g,mass:y,duration:S,velocity:x,isResolvedFromDuration:N}=B1({...r,velocity:-Qt(r.velocity||0)}),q=x||0,V=g/(2*Math.sqrt(p*y)),U=d-f,P=Qt(Math.sqrt(p/y)),X=Math.abs(U)<5;s||(s=X?He.restSpeed.granular:He.restSpeed.default),c||(c=X?He.restDelta.granular:He.restDelta.default);let G;if(V<1){const Y=Tc(P,V);G=oe=>{const F=Math.exp(-V*P*oe);return d-F*((q+V*P*U)/Y*Math.sin(Y*oe)+U*Math.cos(Y*oe))}}else if(V===1)G=Y=>d-Math.exp(-P*Y)*(U+(q+P*U)*Y);else{const Y=P*Math.sqrt(V*V-1);G=oe=>{const F=Math.exp(-V*P*oe),L=Math.min(Y*oe,300);return d-F*((q+V*P*U)*Math.sinh(L)+Y*U*Math.cosh(L))/Y}}const H={calculatedDuration:N&&S||null,next:Y=>{const oe=G(Y);if(N)h.done=Y>=S;else{let F=Y===0?q:0;V<1&&(F=Y===0?Ft(q):Lv(G,Y,oe));const L=Math.abs(F)<=s,ie=Math.abs(d-oe)<=c;h.done=L&&ie}return h.value=h.done?d:oe,h},toString:()=>{const Y=Math.min(id(H),br),oe=_v(F=>H.next(Y*F).value,Y,30);return Y+"ms "+oe},toTransition:()=>{}};return H}Sr.applyToOptions=o=>{const i=z1(o,100,Sr);return o.ease=i.ease,o.duration=Ft(i.duration),o.type="keyframes",o};function Ec({keyframes:o,velocity:i=0,power:r=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:y}){const S=o[0],x={done:!1,value:S},N=L=>h!==void 0&&L<h||p!==void 0&&L>p,q=L=>h===void 0?p:p===void 0||Math.abs(h-L)<Math.abs(p-L)?h:p;let V=r*i;const U=S+V,P=d===void 0?U:d(U);P!==U&&(V=P-S);const X=L=>-V*Math.exp(-L/s),G=L=>P+X(L),H=L=>{const ie=X(L),Ae=G(L);x.done=Math.abs(ie)<=g,x.value=x.done?P:Ae};let Y,oe;const F=L=>{N(x.value)&&(Y=L,oe=Sr({keyframes:[x.value,q(x.value)],velocity:Lv(G,L,x.value),damping:c,stiffness:f,restDelta:g,restSpeed:y}))};return F(0),{calculatedDuration:null,next:L=>{let ie=!1;return!oe&&Y===void 0&&(ie=!0,H(L),F(L)),Y!==void 0&&L>=Y?oe.next(L-Y):(!ie&&H(L),x)}}}function _1(o,i,r){const s=[],c=r||Da.mix||Bv,f=o.length-1;for(let d=0;d<f;d++){let h=c(o[d],o[d+1]);if(i){const p=Array.isArray(i)?i[d]||kt:i;h=Li(p,h)}s.push(h)}return s}function L1(o,i,{clamp:r=!0,ease:s,mixer:c}={}){const f=o.length;if(Wc(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=o[0]===o[1];o[0]>o[f-1]&&(o=[...o].reverse(),i=[...i].reverse());const h=_1(i,s,c),p=h.length,g=y=>{if(d&&y<o[0])return i[0];let S=0;if(p>1)for(;S<o.length-2&&!(y<o[S+1]);S++);const x=wi(o[S],o[S+1],y);return h[S](x)};return r?y=>g(na(o[0],o[f-1],y)):g}function U1(o,i){const r=o[o.length-1];for(let s=1;s<=i;s++){const c=wi(0,i,s);o.push(_e(r,1,c))}}function H1(o){const i=[0];return U1(i,o.length-1),i}function P1(o,i){return o.map(r=>r*i)}function G1(o,i){return o.map(()=>i||Dv).splice(0,o.length-1)}function qi({duration:o=300,keyframes:i,times:r,ease:s="easeInOut"}){const c=IS(s)?s.map(Up):Up(s),f={done:!1,value:i[0]},d=P1(r&&r.length===i.length?r:H1(i),o),h=L1(d,i,{ease:Array.isArray(c)?c:G1(i,c)});return{calculatedDuration:o,next:p=>(f.value=h(p),f.done=p>=o,f)}}const Q1=o=>o!==null;function sd(o,{repeat:i,repeatType:r="loop"},s,c=1){const f=o.filter(Q1),h=c<0||i&&r!=="loop"&&i%2===1?0:f.length-1;return!h||s===void 0?f[h]:s}const k1={decay:Ec,inertia:Ec,tween:qi,keyframes:qi,spring:Sr};function Uv(o){typeof o.type=="string"&&(o.type=k1[o.type])}class rd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,r){return this.finished.then(i,r)}}const Y1=o=>o/100;class ld extends rd{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var s,c;const{motionValue:r}=this.options;r&&r.updatedAt!==mt.now()&&this.tick(mt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(s=this.options).onStop)==null||c.call(s))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Uv(i);const{type:r=qi,repeat:s=0,repeatDelay:c=0,repeatType:f,velocity:d=0}=i;let{keyframes:h}=i;const p=r||qi;p!==qi&&typeof h[0]!="number"&&(this.mixKeyframes=Li(Y1,Bv(h[0],h[1])),h=[0,100]);const g=p({...i,keyframes:h});f==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=id(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=g}updateTime(i){const r=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(i,r=!1){const{generator:s,totalDuration:c,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:g=0,keyframes:y,repeat:S,repeatType:x,repeatDelay:N,type:q,onUpdate:V,finalKeyframe:U}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),r?this.currentTime=i:this.updateTime(i);const P=this.currentTime-g*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?P<0:P>c;this.currentTime=Math.max(P,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let G=this.currentTime,H=s;if(S){const L=Math.min(this.currentTime,c)/h;let ie=Math.floor(L),Ae=L%1;!Ae&&L>=1&&(Ae=1),Ae===1&&ie--,ie=Math.min(ie,S+1),!!(ie%2)&&(x==="reverse"?(Ae=1-Ae,N&&(Ae-=N/h)):x==="mirror"&&(H=d)),G=na(0,1,Ae)*h}const Y=X?{done:!1,value:y[0]}:H.next(G);f&&(Y.value=f(Y.value));let{done:oe}=Y;!X&&p!==null&&(oe=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&oe);return F&&q!==Ec&&(Y.value=sd(y,this.options,U,this.speed)),V&&V(Y.value),F&&this.finish(),Y}then(i,r){return this.finished.then(i,r)}get duration(){return Qt(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Qt(i)}get time(){return Qt(this.currentTime)}set time(i){var r;i=Ft(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),(r=this.driver)==null||r.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(mt.now());const r=this.playbackSpeed!==i;this.playbackSpeed=i,r&&(this.time=Qt(this.currentTime))}play(){var c,f;if(this.isStopped)return;const{driver:i=N1,startTime:r}=this.options;this.driver||(this.driver=i(d=>this.tick(d))),(f=(c=this.options).onPlay)==null||f.call(c);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=r??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(mt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,r;this.notifyFinished(),this.teardown(),this.state="finished",(r=(i=this.options).onComplete)==null||r.call(i)}cancel(){var i,r;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(r=(i=this.options).onCancel)==null||r.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var r;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(r=this.driver)==null||r.stop(),i.observe(this)}}function J1(o){for(let i=1;i<o.length;i++)o[i]??(o[i]=o[i-1])}const qo=o=>o*180/Math.PI,Ac=o=>{const i=qo(Math.atan2(o[1],o[0]));return Dc(i)},X1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:o=>(Math.abs(o[0])+Math.abs(o[3]))/2,rotate:Ac,rotateZ:Ac,skewX:o=>qo(Math.atan(o[1])),skewY:o=>qo(Math.atan(o[2])),skew:o=>(Math.abs(o[1])+Math.abs(o[2]))/2},Dc=o=>(o=o%360,o<0&&(o+=360),o),Jp=Ac,Xp=o=>Math.sqrt(o[0]*o[0]+o[1]*o[1]),Zp=o=>Math.sqrt(o[4]*o[4]+o[5]*o[5]),Z1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Xp,scaleY:Zp,scale:o=>(Xp(o)+Zp(o))/2,rotateX:o=>Dc(qo(Math.atan2(o[6],o[5]))),rotateY:o=>Dc(qo(Math.atan2(-o[2],o[0]))),rotateZ:Jp,rotate:Jp,skewX:o=>qo(Math.atan(o[4])),skewY:o=>qo(Math.atan(o[1])),skew:o=>(Math.abs(o[1])+Math.abs(o[4]))/2};function Cc(o){return o.includes("scale")?1:0}function Mc(o,i){if(!o||o==="none")return Cc(i);const r=o.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(r)s=Z1,c=r;else{const h=o.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=X1,c=h}if(!c)return Cc(i);const f=s[i],d=c[1].split(",").map(F1);return typeof f=="function"?f(d):d[f]}const K1=(o,i)=>{const{transform:r="none"}=getComputedStyle(o);return Mc(r,i)};function F1(o){return parseFloat(o.trim())}const zn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qn=new Set(zn),Kp=o=>o===Nn||o===ee,W1=new Set(["x","y","z"]),$1=zn.filter(o=>!W1.has(o));function I1(o){const i=[];return $1.forEach(r=>{const s=o.getValue(r);s!==void 0&&(i.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),i}const oo={width:({x:o},{paddingLeft:i="0",paddingRight:r="0"})=>o.max-o.min-parseFloat(i)-parseFloat(r),height:({y:o},{paddingTop:i="0",paddingBottom:r="0"})=>o.max-o.min-parseFloat(i)-parseFloat(r),top:(o,{top:i})=>parseFloat(i),left:(o,{left:i})=>parseFloat(i),bottom:({y:o},{top:i})=>parseFloat(i)+(o.max-o.min),right:({x:o},{left:i})=>parseFloat(i)+(o.max-o.min),x:(o,{transform:i})=>Mc(i,"x"),y:(o,{transform:i})=>Mc(i,"y")};oo.translateX=oo.x;oo.translateY=oo.y;const jo=new Set;let Nc=!1,zc=!1,qc=!1;function Hv(){if(zc){const o=Array.from(jo).filter(s=>s.needsMeasurement),i=new Set(o.map(s=>s.element)),r=new Map;i.forEach(s=>{const c=I1(s);c.length&&(r.set(s,c),s.render())}),o.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=r.get(s);c&&c.forEach(([f,d])=>{var h;(h=s.getValue(f))==null||h.set(d)})}),o.forEach(s=>s.measureEndState()),o.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}zc=!1,Nc=!1,jo.forEach(o=>o.complete(qc)),jo.clear()}function Pv(){jo.forEach(o=>{o.readKeyframes(),o.needsMeasurement&&(zc=!0)})}function ex(){qc=!0,Pv(),Hv(),qc=!1}class ud{constructor(i,r,s,c,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=s,this.motionValue=c,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(jo.add(this),Nc||(Nc=!0,je.read(Pv),je.resolveKeyframes(Hv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:s,motionValue:c}=this;if(i[0]===null){const f=c==null?void 0:c.get(),d=i[i.length-1];if(f!==void 0)i[0]=f;else if(s&&r){const h=s.readValue(r,d);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=d),c&&f===void 0&&c.set(i[0])}J1(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),jo.delete(this)}cancel(){this.state==="scheduled"&&(jo.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const tx=o=>o.startsWith("--");function ax(o,i,r){tx(i)?o.style.setProperty(i,r):o.style[i]=r}const ox={};function Gv(o,i){const r=pv(o);return()=>ox[i]??r()}const nx=Gv(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Qv=Gv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ni=([o,i,r,s])=>`cubic-bezier(${o}, ${i}, ${r}, ${s})`,Fp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ni([0,.65,.55,1]),circOut:Ni([.55,0,1,.45]),backIn:Ni([.31,.01,.66,-.59]),backOut:Ni([.33,1.53,.69,.99])};function kv(o,i){if(o)return typeof o=="function"?Qv()?_v(o,i):"ease-out":Cv(o)?Ni(o):Array.isArray(o)?o.map(r=>kv(r,i)||Fp.easeOut):Fp[o]}function ix(o,i,r,{delay:s=0,duration:c=300,repeat:f=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const y={[i]:r};p&&(y.offset=p);const S=kv(h,c);Array.isArray(S)&&(y.easing=S);const x={delay:s,duration:c,easing:Array.isArray(S)?"linear":S,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return g&&(x.pseudoElement=g),o.animate(y,x)}function Yv(o){return typeof o=="function"&&"applyToOptions"in o}function sx({type:o,...i}){return Yv(o)&&Qv()?o.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class Jv extends rd{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:r,name:s,keyframes:c,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=i;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=i,Wc(typeof i.type!="string");const g=sx(i);this.animation=ix(r,s,c,g,f),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const y=sd(c,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(y):ax(r,s,y),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,r;(r=(i=this.animation).finish)==null||r.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var r,s,c;const i=(r=this.options)==null?void 0:r.element;!this.isPseudoElement&&(i!=null&&i.isConnected)&&((c=(s=this.animation).commitStyles)==null||c.call(s))}get duration(){var r,s;const i=((s=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:s.call(r).duration)||0;return Qt(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Qt(i)}get time(){return Qt(Number(this.animation.currentTime)||0)}set time(i){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ft(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&nx()?(this.animation.timeline=i,kt):r(this)}}const Xv={anticipate:Tv,backInOut:xv,circInOut:Av};function rx(o){return o in Xv}function lx(o){typeof o.ease=="string"&&rx(o.ease)&&(o.ease=Xv[o.ease])}const sc=10;class ux extends Jv{constructor(i){lx(i),Uv(i),super(i),i.startTime!==void 0&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:r,onUpdate:s,onComplete:c,element:f,...d}=this.options;if(!r)return;if(i!==void 0){r.set(i);return}const h=new ld({...d,autoplay:!1}),p=Math.max(sc,mt.now()-this.startTime),g=na(0,sc,p-sc);r.setWithVelocity(h.sample(Math.max(0,p-g)).value,h.sample(p).value,g),h.stop()}}const Wp=(o,i)=>i==="zIndex"?!1:!!(typeof o=="number"||Array.isArray(o)||typeof o=="string"&&(Wt.test(o)||o==="0")&&!o.startsWith("url("));function cx(o){const i=o[0];if(o.length===1)return!0;for(let r=0;r<o.length;r++)if(o[r]!==i)return!0}function dx(o,i,r,s){const c=o[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const f=o[o.length-1],d=Wp(c,i),h=Wp(f,i);return!d||!h?!1:cx(o)||(r==="spring"||Yv(r))&&s}function jc(o){o.duration=0,o.type="keyframes"}const mx=new Set(["opacity","clipPath","filter","transform"]),fx=pv(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function hx(o){var y;const{motionValue:i,name:r,repeatDelay:s,repeatType:c,damping:f,type:d}=o;if(!(((y=i==null?void 0:i.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=i.owner.getProps();return fx()&&r&&mx.has(r)&&(r!=="transform"||!g)&&!p&&!s&&c!=="mirror"&&f!==0&&d!=="inertia"}const px=40;class gx extends rd{constructor({autoplay:i=!0,delay:r=0,type:s="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:y,...S}){var q;super(),this.stop=()=>{var V,U;this._animation&&(this._animation.stop(),(V=this.stopTimeline)==null||V.call(this)),(U=this.keyframeResolver)==null||U.cancel()},this.createdAt=mt.now();const x={autoplay:i,delay:r,type:s,repeat:c,repeatDelay:f,repeatType:d,name:p,motionValue:g,element:y,...S},N=(y==null?void 0:y.KeyframeResolver)||ud;this.keyframeResolver=new N(h,(V,U,P)=>this.onKeyframesResolved(V,U,x,!P),p,g,y),(q=this.keyframeResolver)==null||q.scheduleResolve()}onKeyframesResolved(i,r,s,c){var U,P;this.keyframeResolver=void 0;const{name:f,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:y}=s;this.resolvedAt=mt.now(),dx(i,f,d,h)||((Da.instantAnimations||!p)&&(y==null||y(sd(i,s,r))),i[0]=i[i.length-1],jc(s),s.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>px?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...s,keyframes:i},N=!g&&hx(x),q=(P=(U=x.motionValue)==null?void 0:U.owner)==null?void 0:P.current,V=N?new ux({...x,element:q}):new ld(x);V.finished.then(()=>{this.notifyFinished()}).catch(kt),this.pendingTimeline&&(this.stopTimeline=V.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=V}get finished(){return this._animation?this.animation.finished:this._finished}then(i,r){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),ex()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}function Zv(o,i,r,s=0,c=1){const f=Array.from(o).sort((g,y)=>g.sortNodePosition(y)).indexOf(i),d=o.size,h=(d-1)*s;return typeof r=="function"?r(f,d):c===1?f*s:h-f*s}const vx=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yx(o){const i=vx.exec(o);if(!i)return[,];const[,r,s,c]=i;return[`--${r??s}`,c]}function Kv(o,i,r=1){const[s,c]=yx(o);if(!s)return;const f=window.getComputedStyle(i).getPropertyValue(s);if(f){const d=f.trim();return mv(d)?parseFloat(d):d}return td(c)?Kv(c,i,r+1):c}const bx={type:"spring",stiffness:500,damping:25,restSpeed:10},Sx=o=>({type:"spring",stiffness:550,damping:o===0?2*Math.sqrt(550):30,restSpeed:10}),xx={type:"keyframes",duration:.8},Tx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ex=(o,{keyframes:i})=>i.length>2?xx:qn.has(o)?o.startsWith("scale")?Sx(i[1]):bx:Tx,Ax=o=>o!==null;function Dx(o,{repeat:i,repeatType:r="loop"},s){const c=o.filter(Ax),f=i&&r!=="loop"&&i%2===1?0:c.length-1;return c[f]}function Fv(o,i){if(o!=null&&o.inherit&&i){const{inherit:r,...s}=o;return{...i,...s}}return o}function cd(o,i){const r=(o==null?void 0:o[i])??(o==null?void 0:o.default)??o;return r!==o?Fv(r,o):r}function Cx({when:o,delay:i,delayChildren:r,staggerChildren:s,staggerDirection:c,repeat:f,repeatType:d,repeatDelay:h,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const dd=(o,i,r,s={},c,f)=>d=>{const h=cd(s,o)||{},p=h.delay||s.delay||0;let{elapsed:g=0}=s;g=g-Ft(p);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...h,delay:-g,onUpdate:x=>{i.set(x),h.onUpdate&&h.onUpdate(x)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:o,motionValue:i,element:f?void 0:c};Cx(h)||Object.assign(y,Ex(o,y)),y.duration&&(y.duration=Ft(y.duration)),y.repeatDelay&&(y.repeatDelay=Ft(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let S=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(jc(y),y.delay===0&&(S=!0)),(Da.instantAnimations||Da.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(S=!0,jc(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,S&&!f&&i.get()!==void 0){const x=Dx(y.keyframes,h);if(x!==void 0){je.update(()=>{y.onUpdate(x),y.onComplete()});return}}return h.isSync?new ld(y):new gx(y)};function $p(o){const i=[{},{}];return o==null||o.values.forEach((r,s)=>{i[0][s]=r.get(),i[1][s]=r.getVelocity()}),i}function md(o,i,r,s){if(typeof i=="function"){const[c,f]=$p(s);i=i(r!==void 0?r:o.custom,c,f)}if(typeof i=="string"&&(i=o.variants&&o.variants[i]),typeof i=="function"){const[c,f]=$p(s);i=i(r!==void 0?r:o.custom,c,f)}return i}function Cn(o,i,r){const s=o.getProps();return md(s,i,r!==void 0?r:s.custom,o)}const Wv=new Set(["width","height","top","left","right","bottom",...zn]),Ip=30,Mx=o=>!isNaN(parseFloat(o));class Nx{constructor(i,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var f;const c=mt.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=mt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=Mx(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new $c);const s=this.events[i].add(r);return i==="change"?()=>{s(),je.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=mt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Ip)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,Ip);return gv(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,r;(i=this.dependents)==null||i.clear(),(r=this.events.destroy)==null||r.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Mn(o,i){return new Nx(o,i)}const Oc=o=>Array.isArray(o);function zx(o,i,r){o.hasValue(i)?o.getValue(i).set(r):o.addValue(i,Mn(r))}function qx(o){return Oc(o)?o[o.length-1]||0:o}function jx(o,i){const r=Cn(o,i);let{transitionEnd:s={},transition:c={},...f}=r||{};f={...f,...s};for(const d in f){const h=qx(f[d]);zx(o,d,h)}}const ct=o=>!!(o&&o.getVelocity);function Ox(o){return!!(ct(o)&&o.add)}function wc(o,i){const r=o.getValue("willChange");if(Ox(r))return r.add(i);if(!r&&Da.WillChange){const s=new Da.WillChange("auto");o.addValue("willChange",s),s.add(i)}}function fd(o){return o.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const wx="framerAppearId",$v="data-"+fd(wx);function Iv(o){return o.props[$v]}function Rx({protectedKeys:o,needsAnimating:i},r){const s=o.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,s}function ey(o,i,{delay:r=0,transitionOverride:s,type:c}={}){let{transition:f,transitionEnd:d,...h}=i;const p=o.getDefaultTransition();f=f?Fv(f,p):p;const g=f==null?void 0:f.reduceMotion;s&&(f=s);const y=[],S=c&&o.animationState&&o.animationState.getState()[c];for(const x in h){const N=o.getValue(x,o.latestValues[x]??null),q=h[x];if(q===void 0||S&&Rx(S,x))continue;const V={delay:r,...cd(f||{},x)},U=N.get();if(U!==void 0&&!N.isAnimating&&!Array.isArray(q)&&q===U&&!V.velocity)continue;let P=!1;if(window.MotionHandoffAnimation){const H=Iv(o);if(H){const Y=window.MotionHandoffAnimation(H,x,je);Y!==null&&(V.startTime=Y,P=!0)}}wc(o,x);const X=g??o.shouldReduceMotion;N.start(dd(x,N,q,X&&Wv.has(x)?{type:!1}:V,o,P));const G=N.animation;G&&y.push(G)}if(d){const x=()=>je.update(()=>{d&&jx(o,d)});y.length?Promise.all(y).then(x):x()}return y}function Rc(o,i,r={}){var p;const s=Cn(o,i,r.type==="exit"?(p=o.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=o.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(c=r.transitionOverride);const f=s?()=>Promise.all(ey(o,s,r)):()=>Promise.resolve(),d=o.variantChildren&&o.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:S,staggerDirection:x}=c;return Vx(o,i,g,y,S,x,r)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,y]=h==="beforeChildren"?[f,d]:[d,f];return g().then(()=>y())}else return Promise.all([f(),d(r.delay)])}function Vx(o,i,r=0,s=0,c=0,f=1,d){const h=[];for(const p of o.variantChildren)p.notify("AnimationStart",i),h.push(Rc(p,i,{...d,delay:r+(typeof s=="function"?0:s)+Zv(o.variantChildren,p,s,c,f)}).then(()=>p.notify("AnimationComplete",i)));return Promise.all(h)}function Bx(o,i,r={}){o.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(f=>Rc(o,f,r));s=Promise.all(c)}else if(typeof i=="string")s=Rc(o,i,r);else{const c=typeof i=="function"?Cn(o,i,r.custom):i;s=Promise.all(ey(o,c,r))}return s.then(()=>{o.notify("AnimationComplete",i)})}const _x={test:o=>o==="auto",parse:o=>o},ty=o=>i=>i.test(o),ay=[Nn,ee,oa,to,m1,d1,_x],eg=o=>ay.find(ty(o));function Lx(o){return typeof o=="number"?o===0:o!==null?o==="none"||o==="0"||hv(o):!0}const Ux=new Set(["brightness","contrast","saturate","opacity"]);function Hx(o){const[i,r]=o.slice(0,-1).split("(");if(i==="drop-shadow")return o;const[s]=r.match(ad)||[];if(!s)return o;const c=r.replace(s,"");let f=Ux.has(i)?1:0;return s!==r&&(f*=100),i+"("+f+c+")"}const Px=/\b([a-z-]*)\(.*?\)/gu,Vc={...Wt,getAnimatableNone:o=>{const i=o.match(Px);return i?i.map(Hx).join(" "):o}},Bc={...Wt,getAnimatableNone:o=>{const i=Wt.parse(o);return Wt.createTransformer(o)(i.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},tg={...Nn,transform:Math.round},Gx={rotate:to,rotateX:to,rotateY:to,rotateZ:to,scale:sr,scaleX:sr,scaleY:sr,scaleZ:sr,skew:to,skewX:to,skewY:to,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Ri,originX:Pp,originY:Pp,originZ:ee},hd={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,inset:ee,insetBlock:ee,insetBlockStart:ee,insetBlockEnd:ee,insetInline:ee,insetInlineStart:ee,insetInlineEnd:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,paddingBlock:ee,paddingBlockStart:ee,paddingBlockEnd:ee,paddingInline:ee,paddingInlineStart:ee,paddingInlineEnd:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,marginBlock:ee,marginBlockStart:ee,marginBlockEnd:ee,marginInline:ee,marginInlineStart:ee,marginInlineEnd:ee,fontSize:ee,backgroundPositionX:ee,backgroundPositionY:ee,...Gx,zIndex:tg,fillOpacity:Ri,strokeOpacity:Ri,numOctaves:tg},Qx={...hd,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:Vc,WebkitFilter:Vc,mask:Bc,WebkitMask:Bc},oy=o=>Qx[o],kx=new Set([Vc,Bc]);function ny(o,i){let r=oy(o);return kx.has(r)||(r=Wt),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const Yx=new Set(["auto","none","0"]);function Jx(o,i,r){let s=0,c;for(;s<o.length&&!c;){const f=o[s];typeof f=="string"&&!Yx.has(f)&&Vi(f).values.length&&(c=o[s]),s++}if(c&&r)for(const f of i)o[f]=ny(r,c)}class Xx extends ud{constructor(i,r,s,c,f){super(i,r,s,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let y=0;y<i.length;y++){let S=i[y];if(typeof S=="string"&&(S=S.trim(),td(S))){const x=Kv(S,r.current);x!==void 0&&(i[y]=x),y===i.length-1&&(this.finalKeyframe=S)}}if(this.resolveNoneKeyframes(),!Wv.has(s)||i.length!==2)return;const[c,f]=i,d=eg(c),h=eg(f),p=Hp(c),g=Hp(f);if(p!==g&&oo[s]){this.needsMeasurement=!0;return}if(d!==h)if(Kp(d)&&Kp(h))for(let y=0;y<i.length;y++){const S=i[y];typeof S=="string"&&(i[y]=parseFloat(S))}else oo[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,s=[];for(let c=0;c<i.length;c++)(i[c]===null||Lx(i[c]))&&s.push(c);s.length&&Jx(i,s,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=oo[s](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){var h;const{element:i,name:r,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const c=i.getValue(r);c&&c.jump(this.measuredOrigin,!1);const f=s.length-1,d=s[f];s[f]=oo[r](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{i.getValue(p).set(g)}),this.resolveNoneKeyframes()}}const Zx=new Set(["opacity","clipPath","filter","transform"]);function iy(o,i,r){if(o==null)return[];if(o instanceof EventTarget)return[o];if(typeof o=="string"){let s=document;const c=(r==null?void 0:r[o])??s.querySelectorAll(o);return c?Array.from(c):[]}return Array.from(o).filter(s=>s!=null)}const sy=(o,i)=>i&&typeof o=="number"?i.transform(o):o;function _c(o){return fv(o)&&"offsetHeight"in o}const{schedule:pd}=Mv(queueMicrotask,!1),Kt={x:!1,y:!1};function ry(){return Kt.x||Kt.y}function Kx(o){return o==="x"||o==="y"?Kt[o]?null:(Kt[o]=!0,()=>{Kt[o]=!1}):Kt.x||Kt.y?null:(Kt.x=Kt.y=!0,()=>{Kt.x=Kt.y=!1})}function ly(o,i){const r=iy(o),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[r,c,()=>s.abort()]}function Fx(o){return!(o.pointerType==="touch"||ry())}function Wx(o,i,r={}){const[s,c,f]=ly(o,r);return s.forEach(d=>{let h=!1,p=!1,g;const y=()=>{d.removeEventListener("pointerleave",q)},S=U=>{g&&(g(U),g=void 0),y()},x=U=>{h=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),p&&(p=!1,S(U))},N=()=>{h=!0,window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",x,c)},q=U=>{if(U.pointerType!=="touch"){if(h){p=!0;return}S(U)}},V=U=>{if(!Fx(U))return;p=!1;const P=i(d,U);typeof P=="function"&&(g=P,d.addEventListener("pointerleave",q,c))};d.addEventListener("pointerenter",V,c),d.addEventListener("pointerdown",N,c)}),f}const uy=(o,i)=>i?o===i?!0:uy(o,i.parentElement):!1,gd=o=>o.pointerType==="mouse"?typeof o.button!="number"||o.button<=0:o.isPrimary!==!1,$x=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Ix(o){return $x.has(o.tagName)||o.isContentEditable===!0}const eT=new Set(["INPUT","SELECT","TEXTAREA"]);function tT(o){return eT.has(o.tagName)||o.isContentEditable===!0}const mr=new WeakSet;function ag(o){return i=>{i.key==="Enter"&&o(i)}}function rc(o,i){o.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const aT=(o,i)=>{const r=o.currentTarget;if(!r)return;const s=ag(()=>{if(mr.has(r))return;rc(r,"down");const c=ag(()=>{rc(r,"up")}),f=()=>rc(r,"cancel");r.addEventListener("keyup",c,i),r.addEventListener("blur",f,i)});r.addEventListener("keydown",s,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),i)};function og(o){return gd(o)&&!ry()}const ng=new WeakSet;function oT(o,i,r={}){const[s,c,f]=ly(o,r),d=h=>{const p=h.currentTarget;if(!og(h)||ng.has(h))return;mr.add(p),r.stopPropagation&&ng.add(h);const g=i(p,h),y=(N,q)=>{window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",x),mr.has(p)&&mr.delete(p),og(N)&&typeof g=="function"&&g(N,{success:q})},S=N=>{y(N,p===window||p===document||r.useGlobalTarget||uy(p,N.target))},x=N=>{y(N,!1)};window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",x,c)};return s.forEach(h=>{(r.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_c(h)&&(h.addEventListener("focus",g=>aT(g,c)),!Ix(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),f}function vd(o){return fv(o)&&"ownerSVGElement"in o}const fr=new WeakMap;let ao;const cy=(o,i,r)=>(s,c)=>c&&c[0]?c[0][o+"Size"]:vd(s)&&"getBBox"in s?s.getBBox()[i]:s[r],nT=cy("inline","width","offsetWidth"),iT=cy("block","height","offsetHeight");function sT({target:o,borderBoxSize:i}){var r;(r=fr.get(o))==null||r.forEach(s=>{s(o,{get width(){return nT(o,i)},get height(){return iT(o,i)}})})}function rT(o){o.forEach(sT)}function lT(){typeof ResizeObserver>"u"||(ao=new ResizeObserver(rT))}function uT(o,i){ao||lT();const r=iy(o);return r.forEach(s=>{let c=fr.get(s);c||(c=new Set,fr.set(s,c)),c.add(i),ao==null||ao.observe(s)}),()=>{r.forEach(s=>{const c=fr.get(s);c==null||c.delete(i),c!=null&&c.size||ao==null||ao.unobserve(s)})}}const hr=new Set;let Tn;function cT(){Tn=()=>{const o={get width(){return window.innerWidth},get height(){return window.innerHeight}};hr.forEach(i=>i(o))},window.addEventListener("resize",Tn)}function dT(o){return hr.add(o),Tn||cT(),()=>{hr.delete(o),!hr.size&&typeof Tn=="function"&&(window.removeEventListener("resize",Tn),Tn=void 0)}}function ig(o,i){return typeof o=="function"?dT(o):uT(o,i)}function mT(o){return vd(o)&&o.tagName==="svg"}const fT=[...ay,Ze,Wt],hT=o=>fT.find(ty(o)),sg=()=>({translate:0,scale:1,origin:0,originPoint:0}),En=()=>({x:sg(),y:sg()}),rg=()=>({min:0,max:0}),We=()=>({x:rg(),y:rg()}),pT=new WeakMap;function Nr(o){return o!==null&&typeof o=="object"&&typeof o.start=="function"}function Bi(o){return typeof o=="string"||Array.isArray(o)}const yd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bd=["initial",...yd];function zr(o){return Nr(o.animate)||bd.some(i=>Bi(o[i]))}function dy(o){return!!(zr(o)||o.variants)}function gT(o,i,r){for(const s in i){const c=i[s],f=r[s];if(ct(c))o.addValue(s,c);else if(ct(f))o.addValue(s,Mn(c,{owner:o}));else if(f!==c)if(o.hasValue(s)){const d=o.getValue(s);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=o.getStaticValue(s);o.addValue(s,Mn(d!==void 0?d:c,{owner:o}))}}for(const s in r)i[s]===void 0&&o.removeValue(s);return i}const Lc={current:null},my={current:!1},vT=typeof window<"u";function yT(){if(my.current=!0,!!vT)if(window.matchMedia){const o=window.matchMedia("(prefers-reduced-motion)"),i=()=>Lc.current=o.matches;o.addEventListener("change",i),i()}else Lc.current=!1}const lg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let xr={};function fy(o){xr=o}function bT(){return xr}class ST{scrapeMotionValuesFromProps(i,r,s){return{}}constructor({parent:i,props:r,presenceContext:s,reducedMotionConfig:c,skipAnimations:f,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ud,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const N=mt.now();this.renderScheduledAt<N&&(this.renderScheduledAt=N,je.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=r.initial?{...g}:{},this.renderState=y,this.parent=i,this.props=r,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=f,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=zr(r),this.isVariantNode=dy(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:S,...x}=this.scrapeMotionValuesFromProps(r,{},this);for(const N in x){const q=x[N];g[N]!==void 0&&ct(q)&&q.set(g[N])}}mount(i){var r,s;if(this.hasBeenMounted)for(const c in this.initialValues)(r=this.values.get(c))==null||r.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=i,pT.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,f)=>this.bindToMotionValue(f,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(my.current||yT(),this.shouldReduceMotion=Lc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var i;this.projection&&this.projection.unmount(),no(this.notifyUpdate),no(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(i=this.parent)==null||i.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const s=this.features[r];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,r){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),r.accelerate&&Zx.has(i)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:y}=r.accelerate,S=new Jv({element:this.current,name:i,keyframes:h,times:p,ease:g,duration:Ft(y)}),x=d(S);this.valueSubscriptions.set(i,()=>{x(),S.cancel()});return}const s=qn.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=r.on("change",d=>{this.latestValues[i]=d,this.props.onUpdate&&je.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{c(),f&&f(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in xr){const r=xr[i];if(!r)continue;const{isEnabled:s,Feature:c}=r;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):We()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<lg.length;s++){const c=lg[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,d=i[f];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=gT(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const s=this.values.get(i);r!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&r!==void 0&&(s=Mn(r===null?void 0:r,{owner:this}),this.addValue(i,s)),s}readValue(i,r){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(mv(s)||hv(s))?s=parseFloat(s):!hT(s)&&Wt.test(r)&&(s=ny(i,r)),this.setBaseTarget(i,ct(s)?s.get():s)),ct(s)?s.get():s}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){var f;const{initial:r}=this.props;let s;if(typeof r=="string"||typeof r=="object"){const d=md(this.props,r,(f=this.presenceContext)==null?void 0:f.custom);d&&(s=d[i])}if(r&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!ct(c)?c:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new $c),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}scheduleRenderMicrotask(){pd.render(this.render)}}class hy extends ST{constructor(){super(...arguments),this.KeyframeResolver=Xx}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){const s=i.style;return s?s[r]:void 0}removeValueFromRenderState(i,{vars:r,style:s}){delete r[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;ct(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}class io{constructor(i){this.isMounted=!1,this.node=i}update(){}}function py({top:o,left:i,right:r,bottom:s}){return{x:{min:i,max:r},y:{min:o,max:s}}}function xT({x:o,y:i}){return{top:i.min,right:o.max,bottom:i.max,left:o.min}}function TT(o,i){if(!i)return o;const r=i({x:o.left,y:o.top}),s=i({x:o.right,y:o.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function lc(o){return o===void 0||o===1}function Uc({scale:o,scaleX:i,scaleY:r}){return!lc(o)||!lc(i)||!lc(r)}function No(o){return Uc(o)||gy(o)||o.z||o.rotate||o.rotateX||o.rotateY||o.skewX||o.skewY}function gy(o){return ug(o.x)||ug(o.y)}function ug(o){return o&&o!=="0%"}function Tr(o,i,r){const s=o-r,c=i*s;return r+c}function cg(o,i,r,s,c){return c!==void 0&&(o=Tr(o,c,s)),Tr(o,r,s)+i}function Hc(o,i=0,r=1,s,c){o.min=cg(o.min,i,r,s,c),o.max=cg(o.max,i,r,s,c)}function vy(o,{x:i,y:r}){Hc(o.x,i.translate,i.scale,i.originPoint),Hc(o.y,r.translate,r.scale,r.originPoint)}const dg=.999999999999,mg=1.0000000000001;function ET(o,i,r,s=!1){const c=r.length;if(!c)return;i.x=i.y=1;let f,d;for(let h=0;h<c;h++){f=r[h],d=f.projectionDelta;const{visualElement:p}=f.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Dn(o,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,vy(o,d)),s&&No(f.latestValues)&&Dn(o,f.latestValues))}i.x<mg&&i.x>dg&&(i.x=1),i.y<mg&&i.y>dg&&(i.y=1)}function An(o,i){o.min=o.min+i,o.max=o.max+i}function fg(o,i,r,s,c=.5){const f=_e(o.min,o.max,c);Hc(o,i,r,f,s)}function Dn(o,i){fg(o.x,i.x,i.scaleX,i.scale,i.originX),fg(o.y,i.y,i.scaleY,i.scale,i.originY)}function yy(o,i){return py(TT(o.getBoundingClientRect(),i))}function AT(o,i,r){const s=yy(o,r),{scroll:c}=i;return c&&(An(s.x,c.offset.x),An(s.y,c.offset.y)),s}const DT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},CT=zn.length;function MT(o,i,r){let s="",c=!0;for(let f=0;f<CT;f++){const d=zn[f],h=o[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||r){const g=sy(h,hd[d]);if(!p){c=!1;const y=DT[d]||d;s+=`${y}(${g}) `}r&&(i[d]=g)}}return s=s.trim(),r?s=r(i,c?"":s):c&&(s="none"),s}function Sd(o,i,r){const{style:s,vars:c,transformOrigin:f}=o;let d=!1,h=!1;for(const p in i){const g=i[p];if(qn.has(p)){d=!0;continue}else if(zv(p)){c[p]=g;continue}else{const y=sy(g,hd[p]);p.startsWith("origin")?(h=!0,f[p]=y):s[p]=y}}if(i.transform||(d||r?s.transform=MT(i,o.transform,r):s.transform&&(s.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:y=0}=f;s.transformOrigin=`${p} ${g} ${y}`}}function by(o,{style:i,vars:r},s,c){const f=o.style;let d;for(d in i)f[d]=i[d];c==null||c.applyProjectionStyles(f,s);for(d in r)f.setProperty(d,r[d])}function hg(o,i){return i.max===i.min?0:o/(i.max-i.min)*100}const Di={correct:(o,i)=>{if(!i.target)return o;if(typeof o=="string")if(ee.test(o))o=parseFloat(o);else return o;const r=hg(o,i.target.x),s=hg(o,i.target.y);return`${r}% ${s}%`}},NT={correct:(o,{treeScale:i,projectionDelta:r})=>{const s=o,c=Wt.parse(o);if(c.length>5)return s;const f=Wt.createTransformer(o),d=typeof c[0]!="number"?1:0,h=r.x.scale*i.x,p=r.y.scale*i.y;c[0+d]/=h,c[1+d]/=p;const g=_e(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),f(c)}},Pc={borderRadius:{...Di,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Di,borderTopRightRadius:Di,borderBottomLeftRadius:Di,borderBottomRightRadius:Di,boxShadow:NT};function Sy(o,{layout:i,layoutId:r}){return qn.has(o)||o.startsWith("origin")||(i||r!==void 0)&&(!!Pc[o]||o==="opacity")}function xd(o,i,r){var d;const s=o.style,c=i==null?void 0:i.style,f={};if(!s)return f;for(const h in s)(ct(s[h])||c&&ct(c[h])||Sy(h,o)||((d=r==null?void 0:r.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(f[h]=s[h]);return f}function zT(o){return window.getComputedStyle(o)}class qT extends hy{constructor(){super(...arguments),this.type="html",this.renderInstance=by}readValueFromInstance(i,r){var s;if(qn.has(r))return(s=this.projection)!=null&&s.isProjecting?Cc(r):K1(i,r);{const c=zT(i),f=(zv(r)?c.getPropertyValue(r):c[r])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(i,{transformPagePoint:r}){return yy(i,r)}build(i,r,s){Sd(i,r,s.transformTemplate)}scrapeMotionValuesFromProps(i,r,s){return xd(i,r,s)}}const jT={offset:"stroke-dashoffset",array:"stroke-dasharray"},OT={offset:"strokeDashoffset",array:"strokeDasharray"};function wT(o,i,r=1,s=0,c=!0){o.pathLength=1;const f=c?jT:OT;o[f.offset]=`${-s}`,o[f.array]=`${i} ${r}`}const RT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function xy(o,{attrX:i,attrY:r,attrScale:s,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...h},p,g,y){if(Sd(o,h,g),p){o.style.viewBox&&(o.attrs.viewBox=o.style.viewBox);return}o.attrs=o.style,o.style={};const{attrs:S,style:x}=o;S.transform&&(x.transform=S.transform,delete S.transform),(x.transform||S.transformOrigin)&&(x.transformOrigin=S.transformOrigin??"50% 50%",delete S.transformOrigin),x.transform&&(x.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete S.transformBox);for(const N of RT)S[N]!==void 0&&(x[N]=S[N],delete S[N]);i!==void 0&&(S.x=i),r!==void 0&&(S.y=r),s!==void 0&&(S.scale=s),c!==void 0&&wT(S,c,f,d,!1)}const Ty=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Ey=o=>typeof o=="string"&&o.toLowerCase()==="svg";function VT(o,i,r,s){by(o,i,void 0,s);for(const c in i.attrs)o.setAttribute(Ty.has(c)?c:fd(c),i.attrs[c])}function Ay(o,i,r){const s=xd(o,i,r);for(const c in o)if(ct(o[c])||ct(i[c])){const f=zn.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[f]=o[c]}return s}class BT extends hy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=We}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(qn.has(r)){const s=oy(r);return s&&s.default||0}return r=Ty.has(r)?r:fd(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,s){return Ay(i,r,s)}build(i,r,s){xy(i,r,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,r,s,c){VT(i,r,s,c)}mount(i){this.isSVGTag=Ey(i.tagName),super.mount(i)}}const _T=bd.length;function Dy(o){if(!o)return;if(!o.isControllingVariants){const r=o.parent?Dy(o.parent)||{}:{};return o.props.initial!==void 0&&(r.initial=o.props.initial),r}const i={};for(let r=0;r<_T;r++){const s=bd[r],c=o.props[s];(Bi(c)||c===!1)&&(i[s]=c)}return i}function Cy(o,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==o.length)return!1;for(let s=0;s<r;s++)if(i[s]!==o[s])return!1;return!0}const LT=[...yd].reverse(),UT=yd.length;function HT(o){return i=>Promise.all(i.map(({animation:r,options:s})=>Bx(o,r,s)))}function PT(o){let i=HT(o),r=pg(),s=!0;const c=p=>(g,y)=>{var x;const S=Cn(o,y,p==="exit"?(x=o.presenceContext)==null?void 0:x.custom:void 0);if(S){const{transition:N,transitionEnd:q,...V}=S;g={...g,...V,...q}}return g};function f(p){i=p(o)}function d(p){const{props:g}=o,y=Dy(o.parent)||{},S=[],x=new Set;let N={},q=1/0;for(let U=0;U<UT;U++){const P=LT[U],X=r[P],G=g[P]!==void 0?g[P]:y[P],H=Bi(G),Y=P===p?X.isActive:null;Y===!1&&(q=U);let oe=G===y[P]&&G!==g[P]&&H;if(oe&&s&&o.manuallyAnimateOnMount&&(oe=!1),X.protectedKeys={...N},!X.isActive&&Y===null||!G&&!X.prevProp||Nr(G)||typeof G=="boolean")continue;if(P==="exit"&&X.isActive&&Y!==!0){X.prevResolvedValues&&(N={...N,...X.prevResolvedValues});continue}const F=GT(X.prevProp,G);let L=F||P===p&&X.isActive&&!oe&&H||U>q&&H,ie=!1;const Ae=Array.isArray(G)?G:[G];let Ve=Ae.reduce(c(P),{});Y===!1&&(Ve={});const{prevResolvedValues:Oe={}}=X,ht={...Oe,...Ve},lt=Q=>{L=!0,x.has(Q)&&(ie=!0,x.delete(Q)),X.needsAnimating[Q]=!0;const W=o.getValue(Q);W&&(W.liveStyle=!1)};for(const Q in ht){const W=Ve[Q],me=Oe[Q];if(N.hasOwnProperty(Q))continue;let J=!1;Oc(W)&&Oc(me)?J=!Cy(W,me):J=W!==me,J?W!=null?lt(Q):x.add(Q):W!==void 0&&x.has(Q)?lt(Q):X.protectedKeys[Q]=!0}X.prevProp=G,X.prevResolvedValues=Ve,X.isActive&&(N={...N,...Ve}),s&&o.blockInitialAnimation&&(L=!1);const Pe=oe&&F;L&&(!Pe||ie)&&S.push(...Ae.map(Q=>{const W={type:P};if(typeof Q=="string"&&s&&!Pe&&o.manuallyAnimateOnMount&&o.parent){const{parent:me}=o,J=Cn(me,Q);if(me.enteringChildren&&J){const{delayChildren:A}=J.transition||{};W.delay=Zv(me.enteringChildren,o,A)}}return{animation:Q,options:W}}))}if(x.size){const U={};if(typeof g.initial!="boolean"){const P=Cn(o,Array.isArray(g.initial)?g.initial[0]:g.initial);P&&P.transition&&(U.transition=P.transition)}x.forEach(P=>{const X=o.getBaseTarget(P),G=o.getValue(P);G&&(G.liveStyle=!0),U[P]=X??null}),S.push({animation:U})}let V=!!S.length;return s&&(g.initial===!1||g.initial===g.animate)&&!o.manuallyAnimateOnMount&&(V=!1),s=!1,V?i(S):Promise.resolve()}function h(p,g){var S;if(r[p].isActive===g)return Promise.resolve();(S=o.variantChildren)==null||S.forEach(x=>{var N;return(N=x.animationState)==null?void 0:N.setActive(p,g)}),r[p].isActive=g;const y=d(p);for(const x in r)r[x].protectedKeys={};return y}return{animateChanges:d,setActive:h,setAnimateFunction:f,getState:()=>r,reset:()=>{r=pg()}}}function GT(o,i){return typeof i=="string"?i!==o:Array.isArray(i)?!Cy(i,o):!1}function Co(o=!1){return{isActive:o,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function pg(){return{animate:Co(!0),whileInView:Co(),whileHover:Co(),whileTap:Co(),whileDrag:Co(),whileFocus:Co(),exit:Co()}}function gg(o,i){o.min=i.min,o.max=i.max}function Zt(o,i){gg(o.x,i.x),gg(o.y,i.y)}function vg(o,i){o.translate=i.translate,o.scale=i.scale,o.originPoint=i.originPoint,o.origin=i.origin}const My=1e-4,QT=1-My,kT=1+My,Ny=.01,YT=0-Ny,JT=0+Ny;function ft(o){return o.max-o.min}function XT(o,i,r){return Math.abs(o-i)<=r}function yg(o,i,r,s=.5){o.origin=s,o.originPoint=_e(i.min,i.max,o.origin),o.scale=ft(r)/ft(i),o.translate=_e(r.min,r.max,o.origin)-o.originPoint,(o.scale>=QT&&o.scale<=kT||isNaN(o.scale))&&(o.scale=1),(o.translate>=YT&&o.translate<=JT||isNaN(o.translate))&&(o.translate=0)}function ji(o,i,r,s){yg(o.x,i.x,r.x,s?s.originX:void 0),yg(o.y,i.y,r.y,s?s.originY:void 0)}function bg(o,i,r){o.min=r.min+i.min,o.max=o.min+ft(i)}function ZT(o,i,r){bg(o.x,i.x,r.x),bg(o.y,i.y,r.y)}function Sg(o,i,r){o.min=i.min-r.min,o.max=o.min+ft(i)}function Er(o,i,r){Sg(o.x,i.x,r.x),Sg(o.y,i.y,r.y)}function xg(o,i,r,s,c){return o-=i,o=Tr(o,1/r,s),c!==void 0&&(o=Tr(o,1/c,s)),o}function KT(o,i=0,r=1,s=.5,c,f=o,d=o){if(oa.test(i)&&(i=parseFloat(i),i=_e(d.min,d.max,i/100)-d.min),typeof i!="number")return;let h=_e(f.min,f.max,s);o===f&&(h-=i),o.min=xg(o.min,i,r,h,c),o.max=xg(o.max,i,r,h,c)}function Tg(o,i,[r,s,c],f,d){KT(o,i[r],i[s],i[c],i.scale,f,d)}const FT=["x","scaleX","originX"],WT=["y","scaleY","originY"];function Eg(o,i,r,s){Tg(o.x,i,FT,r?r.x:void 0,s?s.x:void 0),Tg(o.y,i,WT,r?r.y:void 0,s?s.y:void 0)}function Ag(o){return o.translate===0&&o.scale===1}function zy(o){return Ag(o.x)&&Ag(o.y)}function Dg(o,i){return o.min===i.min&&o.max===i.max}function $T(o,i){return Dg(o.x,i.x)&&Dg(o.y,i.y)}function Cg(o,i){return Math.round(o.min)===Math.round(i.min)&&Math.round(o.max)===Math.round(i.max)}function qy(o,i){return Cg(o.x,i.x)&&Cg(o.y,i.y)}function Mg(o){return ft(o.x)/ft(o.y)}function Ng(o,i){return o.translate===i.translate&&o.scale===i.scale&&o.originPoint===i.originPoint}function aa(o){return[o("x"),o("y")]}function IT(o,i,r){let s="";const c=o.x.translate/i.x,f=o.y.translate/i.y,d=(r==null?void 0:r.z)||0;if((c||f||d)&&(s=`translate3d(${c}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:g,rotate:y,rotateX:S,rotateY:x,skewX:N,skewY:q}=r;g&&(s=`perspective(${g}px) ${s}`),y&&(s+=`rotate(${y}deg) `),S&&(s+=`rotateX(${S}deg) `),x&&(s+=`rotateY(${x}deg) `),N&&(s+=`skewX(${N}deg) `),q&&(s+=`skewY(${q}deg) `)}const h=o.x.scale*i.x,p=o.y.scale*i.y;return(h!==1||p!==1)&&(s+=`scale(${h}, ${p})`),s||"none"}const jy=["TopLeft","TopRight","BottomLeft","BottomRight"],eE=jy.length,zg=o=>typeof o=="string"?parseFloat(o):o,qg=o=>typeof o=="number"||ee.test(o);function tE(o,i,r,s,c,f){c?(o.opacity=_e(0,r.opacity??1,aE(s)),o.opacityExit=_e(i.opacity??1,0,oE(s))):f&&(o.opacity=_e(i.opacity??1,r.opacity??1,s));for(let d=0;d<eE;d++){const h=`border${jy[d]}Radius`;let p=jg(i,h),g=jg(r,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||qg(p)===qg(g)?(o[h]=Math.max(_e(zg(p),zg(g),s),0),(oa.test(g)||oa.test(p))&&(o[h]+="%")):o[h]=g}(i.rotate||r.rotate)&&(o.rotate=_e(i.rotate||0,r.rotate||0,s))}function jg(o,i){return o[i]!==void 0?o[i]:o.borderRadius}const aE=Oy(0,.5,Ev),oE=Oy(.5,.95,kt);function Oy(o,i,r){return s=>s<o?0:s>i?1:r(wi(o,i,s))}function nE(o,i,r){const s=ct(o)?o:Mn(o);return s.start(dd("",s,i,r)),s.animation}function _i(o,i,r,s={passive:!0}){return o.addEventListener(i,r,s),()=>o.removeEventListener(i,r)}const iE=(o,i)=>o.depth-i.depth;class sE{constructor(){this.children=[],this.isDirty=!1}add(i){Fc(this.children,i),this.isDirty=!0}remove(i){vr(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(iE),this.isDirty=!1,this.children.forEach(i)}}function rE(o,i){const r=mt.now(),s=({timestamp:c})=>{const f=c-r;f>=i&&(no(s),o(f-i))};return je.setup(s,!0),()=>no(s)}function pr(o){return ct(o)?o.get():o}class lE{constructor(){this.members=[]}add(i){Fc(this.members,i);for(let r=this.members.length-1;r>=0;r--){const s=this.members[r];if(s===i||s===this.lead||s===this.prevLead)continue;const c=s.instance;c&&c.isConnected===!1&&s.isPresent!==!1&&!s.snapshot&&vr(this.members,s)}i.scheduleRender()}remove(i){if(vr(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){const r=this.members.findIndex(c=>i===c);if(r===0)return!1;let s;for(let c=r;c>=0;c--){const f=this.members[c],d=f.instance;if(f.isPresent!==!1&&(!d||d.isConnected!==!1)){s=f;break}}return s?(this.promote(s),!0):!1}promote(i,r){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender();const c=s.options.layoutDependency,f=i.options.layoutDependency;if(!(c!==void 0&&f!==void 0&&c===f)){const p=s.instance;p&&p.isConnected===!1&&!s.snapshot||(i.resumeFrom=s,r&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0))}const{crossfade:h}=i.options;h===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:r,resumingFrom:s}=i;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const gr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},uc=["","X","Y","Z"],uE=1e3;let cE=0;function cc(o,i,r,s){const{latestValues:c}=i;c[o]&&(r[o]=c[o],i.setStaticValue(o,0),s&&(s[o]=0))}function wy(o){if(o.hasCheckedOptimisedAppear=!0,o.root===o)return;const{visualElement:i}=o.options;if(!i)return;const r=Iv(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:f}=o.options;window.MotionCancelOptimisedAnimation(r,"transform",je,!(c||f))}const{parent:s}=o;s&&!s.hasCheckedOptimisedAppear&&wy(s)}function Ry({attachResizeListener:o,defaultParent:i,measureScroll:r,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(d={},h=i==null?void 0:i()){this.id=cE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(fE),this.nodes.forEach(vE),this.nodes.forEach(yE),this.nodes.forEach(hE)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new sE)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new $c),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=vd(d)&&!mT(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),o){let y,S=0;const x=()=>this.root.updateBlockedByResize=!1;je.read(()=>{S=window.innerWidth}),o(d,()=>{const N=window.innerWidth;N!==S&&(S=N,this.root.updateBlockedByResize=!0,y&&y(),y=rE(x,250),gr.hasAnimatedSinceResize&&(gr.hasAnimatedSinceResize=!1,this.nodes.forEach(Rg)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:S,hasRelativeLayoutChanged:x,layout:N})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const q=this.options.transition||g.getDefaultTransition()||EE,{onLayoutAnimationStart:V,onLayoutAnimationComplete:U}=g.getProps(),P=!this.targetLayout||!qy(this.targetLayout,N),X=!S&&x;if(this.options.layoutRoot||this.resumeFrom||X||S&&(P||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const G={...cd(q,"layout"),onPlay:V,onComplete:U};(g.shouldReduceMotion||this.options.layoutRoot)&&(G.delay=0,G.type=!1),this.startAnimation(G),this.setAnimationOrigin(y,X)}else S||Rg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=N})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),no(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bE),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const S=this.path[y];S.shouldResetTransform=!0,S.updateScroll("snapshot"),S.options.layoutRoot&&S.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Og);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(wg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(gE),this.nodes.forEach(dE),this.nodes.forEach(mE)):this.nodes.forEach(wg),this.clearAllSnapshots();const h=mt.now();rt.delta=na(0,1e3/60,h-rt.timestamp),rt.timestamp=h,rt.isProcessing=!0,tc.update.process(rt),tc.preRender.process(rt),tc.render.process(rt),rt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,pd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(pE),this.sharedNodes.forEach(SE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ft(this.snapshot.measuredBox.x)&&!ft(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=We(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!zy(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||No(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),AE(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return We();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(DE))){const{scroll:y}=this.root;y&&(An(h.x,y.offset.x),An(h.y,y.offset.y))}return h}removeElementScroll(d){var p;const h=We();if(Zt(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:S,options:x}=y;y!==this.root&&S&&x.layoutScroll&&(S.wasRoot&&Zt(h,d),An(h.x,S.offset.x),An(h.y,S.offset.y))}return h}applyTransform(d,h=!1){const p=We();Zt(p,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Dn(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),No(y.latestValues)&&Dn(p,y.latestValues)}return No(this.latestValues)&&Dn(p,this.latestValues),p}removeTransform(d){const h=We();Zt(h,d);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!No(g.latestValues))continue;Uc(g.latestValues)&&g.updateSnapshot();const y=We(),S=g.measurePageBox();Zt(y,S),Eg(h,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return No(this.latestValues)&&Eg(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==rt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var N;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(N=this.parent)!=null&&N.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:S}=this.options;if(!this.layout||!(y||S))return;this.resolvedRelativeTargetAt=rt.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=We(),this.targetWithTransforms=We()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ZT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Zt(this.target,this.layout.layoutBox),vy(this.target,this.targetDelta)):Zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Uc(this.parent.latestValues)||gy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),Er(this.relativeTargetOrigin,h,p),Zt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var q;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(q=this.parent)!=null&&q.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===rt.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Zt(this.layoutCorrected,this.layout.layoutBox);const S=this.treeScale.x,x=this.treeScale.y;ET(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=We());const{target:N}=d;if(!N){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(vg(this.prevProjectionDelta.x,this.projectionDelta.x),vg(this.prevProjectionDelta.y,this.projectionDelta.y)),ji(this.projectionDelta,this.layoutCorrected,N,this.latestValues),(this.treeScale.x!==S||this.treeScale.y!==x||!Ng(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ng(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",N))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=En(),this.projectionDelta=En(),this.projectionDeltaWithTransform=En()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},S=En();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const x=We(),N=p?p.source:void 0,q=this.layout?this.layout.source:void 0,V=N!==q,U=this.getStack(),P=!U||U.members.length<=1,X=!!(V&&!P&&this.options.crossfade===!0&&!this.path.some(TE));this.animationProgress=0;let G;this.mixTargetDelta=H=>{const Y=H/1e3;Vg(S.x,d.x,Y),Vg(S.y,d.y,Y),this.setTargetDelta(S),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Er(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),xE(this.relativeTarget,this.relativeTargetOrigin,x,Y),G&&$T(this.relativeTarget,G)&&(this.isProjectionDirty=!1),G||(G=We()),Zt(G,this.relativeTarget)),V&&(this.animationValues=y,tE(y,g,this.latestValues,Y,X,P)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(no(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=je.update(()=>{gr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Mn(0)),this.motionValue.jump(0,!1),this.currentAnimation=nE(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(uE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:y}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&Vy(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||We();const S=ft(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+S;const x=ft(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+x}Zt(h,p),Dn(h,y),ji(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new lE),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&cc("z",d,g,this.animationValues);for(let y=0;y<uc.length;y++)cc(`rotate${uc[y]}`,d,g,this.animationValues),cc(`skew${uc[y]}`,d,g,this.animationValues);d.render();for(const y in g)d.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=pr(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=pr(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!No(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let S=IT(this.projectionDeltaWithTransform,this.treeScale,y);p&&(S=p(y,S)),d.transform=S;const{x,y:N}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${N.origin*100}% 0`,g.animationValues?d.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const q in Pc){if(y[q]===void 0)continue;const{correct:V,applyTo:U,isCSSVariable:P}=Pc[q],X=S==="none"?y[q]:V(y[q],g);if(U){const G=U.length;for(let H=0;H<G;H++)d[U[H]]=X}else P?this.options.visualElement.renderState.vars[q]=X:d[q]=X}this.options.layoutId&&(d.pointerEvents=g===this?pr(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Og),this.root.sharedNodes.clear()}}}function dE(o){o.updateLayout()}function mE(o){var r;const i=((r=o.resumeFrom)==null?void 0:r.snapshot)||o.snapshot;if(o.isLead()&&o.layout&&i&&o.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:c}=o.layout,{animationType:f}=o.options,d=i.source!==o.layout.source;f==="size"?aa(S=>{const x=d?i.measuredBox[S]:i.layoutBox[S],N=ft(x);x.min=s[S].min,x.max=x.min+N}):Vy(f,i.layoutBox,s)&&aa(S=>{const x=d?i.measuredBox[S]:i.layoutBox[S],N=ft(s[S]);x.max=x.min+N,o.relativeTarget&&!o.currentAnimation&&(o.isProjectionDirty=!0,o.relativeTarget[S].max=o.relativeTarget[S].min+N)});const h=En();ji(h,s,i.layoutBox);const p=En();d?ji(p,o.applyTransform(c,!0),i.measuredBox):ji(p,s,i.layoutBox);const g=!zy(h);let y=!1;if(!o.resumeFrom){const S=o.getClosestProjectingParent();if(S&&!S.resumeFrom){const{snapshot:x,layout:N}=S;if(x&&N){const q=We();Er(q,i.layoutBox,x.layoutBox);const V=We();Er(V,s,N.layoutBox),qy(q,V)||(y=!0),S.options.layoutRoot&&(o.relativeTarget=V,o.relativeTargetOrigin=q,o.relativeParent=S)}}}o.notifyListeners("didUpdate",{layout:s,snapshot:i,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(o.isLead()){const{onExitComplete:s}=o.options;s&&s()}o.options.transition=void 0}function fE(o){o.parent&&(o.isProjecting()||(o.isProjectionDirty=o.parent.isProjectionDirty),o.isSharedProjectionDirty||(o.isSharedProjectionDirty=!!(o.isProjectionDirty||o.parent.isProjectionDirty||o.parent.isSharedProjectionDirty)),o.isTransformDirty||(o.isTransformDirty=o.parent.isTransformDirty))}function hE(o){o.isProjectionDirty=o.isSharedProjectionDirty=o.isTransformDirty=!1}function pE(o){o.clearSnapshot()}function Og(o){o.clearMeasurements()}function wg(o){o.isLayoutDirty=!1}function gE(o){const{visualElement:i}=o.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),o.resetTransform()}function Rg(o){o.finishAnimation(),o.targetDelta=o.relativeTarget=o.target=void 0,o.isProjectionDirty=!0}function vE(o){o.resolveTargetDelta()}function yE(o){o.calcProjection()}function bE(o){o.resetSkewAndRotation()}function SE(o){o.removeLeadSnapshot()}function Vg(o,i,r){o.translate=_e(i.translate,0,r),o.scale=_e(i.scale,1,r),o.origin=i.origin,o.originPoint=i.originPoint}function Bg(o,i,r,s){o.min=_e(i.min,r.min,s),o.max=_e(i.max,r.max,s)}function xE(o,i,r,s){Bg(o.x,i.x,r.x,s),Bg(o.y,i.y,r.y,s)}function TE(o){return o.animationValues&&o.animationValues.opacityExit!==void 0}const EE={duration:.45,ease:[.4,0,.1,1]},_g=o=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(o),Lg=_g("applewebkit/")&&!_g("chrome/")?Math.round:kt;function Ug(o){o.min=Lg(o.min),o.max=Lg(o.max)}function AE(o){Ug(o.x),Ug(o.y)}function Vy(o,i,r){return o==="position"||o==="preserve-aspect"&&!XT(Mg(i),Mg(r),.2)}function DE(o){var i;return o!==o.root&&((i=o.scroll)==null?void 0:i.wasRoot)}const CE=Ry({attachResizeListener:(o,i)=>_i(o,"resize",i),measureScroll:()=>{var o,i;return{x:document.documentElement.scrollLeft||((o=document.body)==null?void 0:o.scrollLeft)||0,y:document.documentElement.scrollTop||((i=document.body)==null?void 0:i.scrollTop)||0}},checkIsScrollRoot:()=>!0}),dc={current:void 0},By=Ry({measureScroll:o=>({x:o.scrollLeft,y:o.scrollTop}),defaultParent:()=>{if(!dc.current){const o=new CE({});o.mount(window),o.setOptions({layoutScroll:!0}),dc.current=o}return dc.current},resetTransform:(o,i)=>{o.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:o=>window.getComputedStyle(o).position==="fixed"}),Td=k.createContext({transformPagePoint:o=>o,isStatic:!1,reducedMotion:"never"});function Hg(o,i){if(typeof o=="function")return o(i);o!=null&&(o.current=i)}function ME(...o){return i=>{let r=!1;const s=o.map(c=>{const f=Hg(c,i);return!r&&typeof f=="function"&&(r=!0),f});if(r)return()=>{for(let c=0;c<s.length;c++){const f=s[c];typeof f=="function"?f():Hg(o[c],null)}}}}function NE(...o){return k.useCallback(ME(...o),o)}class zE extends k.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=r.offsetParent,c=_c(s)&&s.offsetWidth||0,f=_c(s)&&s.offsetHeight||0,d=this.props.sizeRef.current;d.height=r.offsetHeight||0,d.width=r.offsetWidth||0,d.top=r.offsetTop,d.left=r.offsetLeft,d.right=c-d.width-d.left,d.bottom=f-d.height-d.top}return null}componentDidUpdate(){}render(){return this.props.children}}function qE({children:o,isPresent:i,anchorX:r,anchorY:s,root:c,pop:f}){var x;const d=k.useId(),h=k.useRef(null),p=k.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=k.useContext(Td),y=((x=o.props)==null?void 0:x.ref)??(o==null?void 0:o.ref),S=NE(h,y);return k.useInsertionEffect(()=>{const{width:N,height:q,top:V,left:U,right:P,bottom:X}=p.current;if(i||f===!1||!h.current||!N||!q)return;const G=r==="left"?`left: ${U}`:`right: ${P}`,H=s==="bottom"?`bottom: ${X}`:`top: ${V}`;h.current.dataset.motionPopId=d;const Y=document.createElement("style");g&&(Y.nonce=g);const oe=c??document.head;return oe.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${N}px !important;
            height: ${q}px !important;
            ${G}px !important;
            ${H}px !important;
          }
        `),()=>{oe.contains(Y)&&oe.removeChild(Y)}},[i]),b.jsx(zE,{isPresent:i,childRef:h,sizeRef:p,pop:f,children:f===!1?o:k.cloneElement(o,{ref:S})})}const jE=({children:o,initial:i,isPresent:r,onExitComplete:s,custom:c,presenceAffectsLayout:f,mode:d,anchorX:h,anchorY:p,root:g})=>{const y=Kc(OE),S=k.useId();let x=!0,N=k.useMemo(()=>(x=!1,{id:S,initial:i,isPresent:r,custom:c,onExitComplete:q=>{y.set(q,!0);for(const V of y.values())if(!V)return;s&&s()},register:q=>(y.set(q,!1),()=>y.delete(q))}),[r,y,s]);return f&&x&&(N={...N}),k.useMemo(()=>{y.forEach((q,V)=>y.set(V,!1))},[r]),k.useEffect(()=>{!r&&!y.size&&s&&s()},[r]),o=b.jsx(qE,{pop:d==="popLayout",isPresent:r,anchorX:h,anchorY:p,root:g,children:o}),b.jsx(Mr.Provider,{value:N,children:o})};function OE(){return new Map}function _y(o=!0){const i=k.useContext(Mr);if(i===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:c}=i,f=k.useId();k.useEffect(()=>{if(o)return c(f)},[o]);const d=k.useCallback(()=>o&&s&&s(f),[f,s,o]);return!r&&s?[!1,d]:[!0]}const rr=o=>o.key||"";function Pg(o){const i=[];return k.Children.forEach(o,r=>{k.isValidElement(r)&&i.push(r)}),i}const qr=({children:o,custom:i,initial:r=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:f="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[y,S]=_y(d),x=k.useMemo(()=>Pg(o),[o]),N=d&&!y?[]:x.map(rr),q=k.useRef(!0),V=k.useRef(x),U=Kc(()=>new Map),P=k.useRef(new Set),[X,G]=k.useState(x),[H,Y]=k.useState(x);dv(()=>{q.current=!1,V.current=x;for(let L=0;L<H.length;L++){const ie=rr(H[L]);N.includes(ie)?(U.delete(ie),P.current.delete(ie)):U.get(ie)!==!0&&U.set(ie,!1)}},[H,N.length,N.join("-")]);const oe=[];if(x!==X){let L=[...x];for(let ie=0;ie<H.length;ie++){const Ae=H[ie],Ve=rr(Ae);N.includes(Ve)||(L.splice(ie,0,Ae),oe.push(Ae))}return f==="wait"&&oe.length&&(L=oe),Y(Pg(L)),G(x),null}const{forceRender:F}=k.useContext(Zc);return b.jsx(b.Fragment,{children:H.map(L=>{const ie=rr(L),Ae=d&&!y?!1:x===H||N.includes(ie),Ve=()=>{if(P.current.has(ie))return;if(P.current.add(ie),U.has(ie))U.set(ie,!0);else return;let Oe=!0;U.forEach(ht=>{ht||(Oe=!1)}),Oe&&(F==null||F(),Y(V.current),d&&(S==null||S()),s&&s())};return b.jsx(jE,{isPresent:Ae,initial:!q.current||r?void 0:!1,custom:i,presenceAffectsLayout:c,mode:f,root:g,onExitComplete:Ae?void 0:Ve,anchorX:h,anchorY:p,children:L},ie)})})},Ly=k.createContext({strict:!1}),Gg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Qg=!1;function wE(){if(Qg)return;const o={};for(const i in Gg)o[i]={isEnabled:r=>Gg[i].some(s=>!!r[s])};fy(o),Qg=!0}function Uy(){return wE(),bT()}function RE(o){const i=Uy();for(const r in o)i[r]={...i[r],...o[r]};fy(i)}const VE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ar(o){return o.startsWith("while")||o.startsWith("drag")&&o!=="draggable"||o.startsWith("layout")||o.startsWith("onTap")||o.startsWith("onPan")||o.startsWith("onLayout")||VE.has(o)}let Hy=o=>!Ar(o);function BE(o){typeof o=="function"&&(Hy=i=>i.startsWith("on")?!Ar(i):o(i))}try{BE(require("@emotion/is-prop-valid").default)}catch{}function _E(o,i,r){const s={};for(const c in o)c==="values"&&typeof o.values=="object"||(Hy(c)||r===!0&&Ar(c)||!i&&!Ar(c)||o.draggable&&c.startsWith("onDrag"))&&(s[c]=o[c]);return s}const jr=k.createContext({});function LE(o,i){if(zr(o)){const{initial:r,animate:s}=o;return{initial:r===!1||Bi(r)?r:void 0,animate:Bi(s)?s:void 0}}return o.inherit!==!1?i:{}}function UE(o){const{initial:i,animate:r}=LE(o,k.useContext(jr));return k.useMemo(()=>({initial:i,animate:r}),[kg(i),kg(r)])}function kg(o){return Array.isArray(o)?o.join(" "):o}const Ed=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Py(o,i,r){for(const s in i)!ct(i[s])&&!Sy(s,r)&&(o[s]=i[s])}function HE({transformTemplate:o},i){return k.useMemo(()=>{const r=Ed();return Sd(r,i,o),Object.assign({},r.vars,r.style)},[i])}function PE(o,i){const r=o.style||{},s={};return Py(s,r,o),Object.assign(s,HE(o,i)),s}function GE(o,i){const r={},s=PE(o,i);return o.drag&&o.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=o.drag===!0?"none":`pan-${o.drag==="x"?"y":"x"}`),o.tabIndex===void 0&&(o.onTap||o.onTapStart||o.whileTap)&&(r.tabIndex=0),r.style=s,r}const Gy=()=>({...Ed(),attrs:{}});function QE(o,i,r,s){const c=k.useMemo(()=>{const f=Gy();return xy(f,i,Ey(s),o.transformTemplate,o.style),{...f.attrs,style:{...f.style}}},[i]);if(o.style){const f={};Py(f,o.style,o),c.style={...f,...c.style}}return c}const kE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ad(o){return typeof o!="string"||o.includes("-")?!1:!!(kE.indexOf(o)>-1||/[A-Z]/u.test(o))}function YE(o,i,r,{latestValues:s},c,f=!1,d){const p=(d??Ad(o)?QE:GE)(i,s,c,o),g=_E(i,typeof o=="string",f),y=o!==k.Fragment?{...g,...p,ref:r}:{},{children:S}=i,x=k.useMemo(()=>ct(S)?S.get():S,[S]);return k.createElement(o,{...y,children:x})}function JE({scrapeMotionValuesFromProps:o,createRenderState:i},r,s,c){return{latestValues:XE(r,s,c,o),renderState:i()}}function XE(o,i,r,s){const c={},f=s(o,{});for(const x in f)c[x]=pr(f[x]);let{initial:d,animate:h}=o;const p=zr(o),g=dy(o);i&&g&&!p&&o.inherit!==!1&&(d===void 0&&(d=i.initial),h===void 0&&(h=i.animate));let y=r?r.initial===!1:!1;y=y||d===!1;const S=y?h:d;if(S&&typeof S!="boolean"&&!Nr(S)){const x=Array.isArray(S)?S:[S];for(let N=0;N<x.length;N++){const q=md(o,x[N]);if(q){const{transitionEnd:V,transition:U,...P}=q;for(const X in P){let G=P[X];if(Array.isArray(G)){const H=y?G.length-1:0;G=G[H]}G!==null&&(c[X]=G)}for(const X in V)c[X]=V[X]}}}return c}const Qy=o=>(i,r)=>{const s=k.useContext(jr),c=k.useContext(Mr),f=()=>JE(o,i,s,c);return r?f():Kc(f)},ZE=Qy({scrapeMotionValuesFromProps:xd,createRenderState:Ed}),KE=Qy({scrapeMotionValuesFromProps:Ay,createRenderState:Gy}),FE=Symbol.for("motionComponentSymbol");function WE(o,i,r){const s=k.useRef(r);k.useInsertionEffect(()=>{s.current=r});const c=k.useRef(null);return k.useCallback(f=>{var h;f&&((h=o.onMount)==null||h.call(o,f)),i&&(f?i.mount(f):i.unmount());const d=s.current;if(typeof d=="function")if(f){const p=d(f);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(f);else d&&(d.current=f)},[i])}const ky=k.createContext({});function Sn(o){return o&&typeof o=="object"&&Object.prototype.hasOwnProperty.call(o,"current")}function $E(o,i,r,s,c,f){var G,H;const{visualElement:d}=k.useContext(jr),h=k.useContext(Ly),p=k.useContext(Mr),g=k.useContext(Td),y=g.reducedMotion,S=g.skipAnimations,x=k.useRef(null),N=k.useRef(!1);s=s||h.renderer,!x.current&&s&&(x.current=s(o,{visualState:i,parent:d,props:r,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:y,skipAnimations:S,isSVG:f}),N.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const q=x.current,V=k.useContext(ky);q&&!q.projection&&c&&(q.type==="html"||q.type==="svg")&&IE(x.current,r,c,V);const U=k.useRef(!1);k.useInsertionEffect(()=>{q&&U.current&&q.update(r,p)});const P=r[$v],X=k.useRef(!!P&&!((G=window.MotionHandoffIsComplete)!=null&&G.call(window,P))&&((H=window.MotionHasOptimisedAnimation)==null?void 0:H.call(window,P)));return dv(()=>{N.current=!0,q&&(U.current=!0,window.MotionIsMounted=!0,q.updateFeatures(),q.scheduleRenderMicrotask(),X.current&&q.animationState&&q.animationState.animateChanges())}),k.useEffect(()=>{q&&(!X.current&&q.animationState&&q.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{var Y;(Y=window.MotionHandoffMarkAsComplete)==null||Y.call(window,P)}),X.current=!1),q.enteringChildren=void 0)}),q}function IE(o,i,r,s){const{layoutId:c,layout:f,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutCrossfade:y}=i;o.projection=new r(o.latestValues,i["data-framer-portal-id"]?void 0:Yy(o.parent)),o.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!d||h&&Sn(h),visualElement:o,animationType:typeof f=="string"?f:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:p,layoutRoot:g})}function Yy(o){if(o)return o.options.allowProjection!==!1?o.projection:Yy(o.parent)}function mc(o,{forwardMotionProps:i=!1,type:r}={},s,c){s&&RE(s);const f=r?r==="svg":Ad(o),d=f?KE:ZE;function h(g,y){let S;const x={...k.useContext(Td),...g,layoutId:e2(g)},{isStatic:N}=x,q=UE(g),V=d(g,N);if(!N&&cv){t2();const U=a2(x);S=U.MeasureLayout,q.visualElement=$E(o,V,x,c,U.ProjectionNode,f)}return b.jsxs(jr.Provider,{value:q,children:[S&&q.visualElement?b.jsx(S,{visualElement:q.visualElement,...x}):null,YE(o,g,WE(V,q.visualElement,y),V,N,i,f)]})}h.displayName=`motion.${typeof o=="string"?o:`create(${o.displayName??o.name??""})`}`;const p=k.forwardRef(h);return p[FE]=o,p}function e2({layoutId:o}){const i=k.useContext(Zc).id;return i&&o!==void 0?i+"-"+o:o}function t2(o,i){k.useContext(Ly).strict}function a2(o){const i=Uy(),{drag:r,layout:s}=i;if(!r&&!s)return{};const c={...r,...s};return{MeasureLayout:r!=null&&r.isEnabled(o)||s!=null&&s.isEnabled(o)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function o2(o,i){if(typeof Proxy>"u")return mc;const r=new Map,s=(f,d)=>mc(f,d,o,i),c=(f,d)=>s(f,d);return new Proxy(c,{get:(f,d)=>d==="create"?s:(r.has(d)||r.set(d,mc(d,void 0,o,i)),r.get(d))})}const n2=(o,i)=>i.isSVG??Ad(o)?new BT(i):new qT(i,{allowProjection:o!==k.Fragment});class i2 extends io{constructor(i){super(i),i.animationState||(i.animationState=PT(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Nr(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let s2=0;class r2 extends io{constructor(){super(...arguments),this.id=s2++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);r&&!i&&c.then(()=>{r(this.id)})}mount(){const{register:i,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const l2={animation:{Feature:i2},exit:{Feature:r2}};function Pi(o){return{point:{x:o.pageX,y:o.pageY}}}const u2=o=>i=>gd(i)&&o(i,Pi(i));function Oi(o,i,r,s){return _i(o,i,u2(r),s)}const Jy=({current:o})=>o?o.ownerDocument.defaultView:null,Yg=(o,i)=>Math.abs(o-i);function c2(o,i){const r=Yg(o.x,i.x),s=Yg(o.y,i.y);return Math.sqrt(r**2+s**2)}const Jg=new Set(["auto","scroll"]);class Xy{constructor(i,r,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=N=>{this.handleScroll(N.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=hc(this.lastMoveEventInfo,this.history),q=this.startEvent!==null,V=c2(N.offset,{x:0,y:0})>=this.distanceThreshold;if(!q&&!V)return;const{point:U}=N,{timestamp:P}=rt;this.history.push({...U,timestamp:P});const{onStart:X,onMove:G}=this.handlers;q||(X&&X(this.lastMoveEvent,N),this.startEvent=this.lastMoveEvent),G&&G(this.lastMoveEvent,N)},this.handlePointerMove=(N,q)=>{this.lastMoveEvent=N,this.lastMoveEventInfo=fc(q,this.transformPagePoint),je.update(this.updatePoint,!0)},this.handlePointerUp=(N,q)=>{this.end();const{onEnd:V,onSessionEnd:U,resumeAnimation:P}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&P&&P(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const X=hc(N.type==="pointercancel"?this.lastMoveEventInfo:fc(q,this.transformPagePoint),this.history);this.startEvent&&V&&V(N,X),U&&U(N,X)},!gd(i))return;this.dragSnapToOrigin=f,this.handlers=r,this.transformPagePoint=s,this.distanceThreshold=d,this.contextWindow=c||window;const p=Pi(i),g=fc(p,this.transformPagePoint),{point:y}=g,{timestamp:S}=rt;this.history=[{...y,timestamp:S}];const{onSessionStart:x}=r;x&&x(i,hc(g,this.history)),this.removeListeners=Li(Oi(this.contextWindow,"pointermove",this.handlePointerMove),Oi(this.contextWindow,"pointerup",this.handlePointerUp),Oi(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(i){let r=i.parentElement;for(;r;){const s=getComputedStyle(r);(Jg.has(s.overflowX)||Jg.has(s.overflowY))&&this.scrollPositions.set(r,{x:r.scrollLeft,y:r.scrollTop}),r=r.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const r=this.scrollPositions.get(i);if(!r)return;const s=i===window,c=s?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},f={x:c.x-r.x,y:c.y-r.y};f.x===0&&f.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(i,c),je.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),no(this.updatePoint)}}function fc(o,i){return i?{point:i(o.point)}:o}function Xg(o,i){return{x:o.x-i.x,y:o.y-i.y}}function hc({point:o},i){return{point:o,delta:Xg(o,Zy(i)),offset:Xg(o,d2(i)),velocity:m2(i,.1)}}function d2(o){return o[0]}function Zy(o){return o[o.length-1]}function m2(o,i){if(o.length<2)return{x:0,y:0};let r=o.length-1,s=null;const c=Zy(o);for(;r>=0&&(s=o[r],!(c.timestamp-s.timestamp>Ft(i)));)r--;if(!s)return{x:0,y:0};s===o[0]&&o.length>2&&c.timestamp-s.timestamp>Ft(i)*2&&(s=o[1]);const f=Qt(c.timestamp-s.timestamp);if(f===0)return{x:0,y:0};const d={x:(c.x-s.x)/f,y:(c.y-s.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function f2(o,{min:i,max:r},s){return i!==void 0&&o<i?o=s?_e(i,o,s.min):Math.max(o,i):r!==void 0&&o>r&&(o=s?_e(r,o,s.max):Math.min(o,r)),o}function Zg(o,i,r){return{min:i!==void 0?o.min+i:void 0,max:r!==void 0?o.max+r-(o.max-o.min):void 0}}function h2(o,{top:i,left:r,bottom:s,right:c}){return{x:Zg(o.x,r,c),y:Zg(o.y,i,s)}}function Kg(o,i){let r=i.min-o.min,s=i.max-o.max;return i.max-i.min<o.max-o.min&&([r,s]=[s,r]),{min:r,max:s}}function p2(o,i){return{x:Kg(o.x,i.x),y:Kg(o.y,i.y)}}function g2(o,i){let r=.5;const s=ft(o),c=ft(i);return c>s?r=wi(i.min,i.max-s,o.min):s>c&&(r=wi(o.min,o.max-c,i.min)),na(0,1,r)}function v2(o,i){const r={};return i.min!==void 0&&(r.min=i.min-o.min),i.max!==void 0&&(r.max=i.max-o.min),r}const Gc=.35;function y2(o=Gc){return o===!1?o=0:o===!0&&(o=Gc),{x:Fg(o,"left","right"),y:Fg(o,"top","bottom")}}function Fg(o,i,r){return{min:Wg(o,i),max:Wg(o,r)}}function Wg(o,i){return typeof o=="number"?o:o[i]||0}const b2=new WeakMap;class S2{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=We(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:r=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=S=>{r&&this.snapToCursor(Pi(S).point),this.stopAnimation()},d=(S,x)=>{const{drag:N,dragPropagation:q,onDragStart:V}=this.getProps();if(N&&!q&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Kx(N),!this.openDragLock))return;this.latestPointerEvent=S,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),aa(P=>{let X=this.getAxisMotionValue(P).get()||0;if(oa.test(X)){const{projection:G}=this.visualElement;if(G&&G.layout){const H=G.layout.layoutBox[P];H&&(X=ft(H)*(parseFloat(X)/100))}}this.originPoint[P]=X}),V&&je.update(()=>V(S,x),!1,!0),wc(this.visualElement,"transform");const{animationState:U}=this.visualElement;U&&U.setActive("whileDrag",!0)},h=(S,x)=>{this.latestPointerEvent=S,this.latestPanInfo=x;const{dragPropagation:N,dragDirectionLock:q,onDirectionLock:V,onDrag:U}=this.getProps();if(!N&&!this.openDragLock)return;const{offset:P}=x;if(q&&this.currentDirection===null){this.currentDirection=T2(P),this.currentDirection!==null&&V&&V(this.currentDirection);return}this.updateAxis("x",x.point,P),this.updateAxis("y",x.point,P),this.visualElement.render(),U&&je.update(()=>U(S,x),!1,!0)},p=(S,x)=>{this.latestPointerEvent=S,this.latestPanInfo=x,this.stop(S,x),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:S}=this.getProps();(S||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new Xy(i,{onSessionStart:f,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:Jy(this.visualElement),element:this.visualElement.current})}stop(i,r){const s=i||this.latestPointerEvent,c=r||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!s)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&je.postRender(()=>h(s,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,r,s){const{drag:c}=this.getProps();if(!s||!lr(i,c,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(d=f2(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){var f;const{dragConstraints:i,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(f=this.visualElement.projection)==null?void 0:f.layout,c=this.constraints;i&&Sn(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=h2(s.layoutBox,i):this.constraints=!1,this.elastic=y2(r),c!==this.constraints&&!Sn(i)&&s&&this.constraints&&!this.hasMutatedConstraints&&aa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=v2(s.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!Sn(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const f=AT(s,c.root,this.visualElement.getTransformPagePoint());let d=p2(c.layout.layoutBox,f);if(r){const h=r(xT(d));this.hasMutatedConstraints=!!h,h&&(d=py(h))}return d}startAnimation(i){const{drag:r,dragMomentum:s,dragElastic:c,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=aa(y=>{if(!lr(y,r,this.currentDirection))return;let S=p&&p[y]||{};d&&(S={min:0,max:0});const x=c?200:1e6,N=c?40:1e7,q={type:"inertia",velocity:s?i[y]:0,bounceStiffness:x,bounceDamping:N,timeConstant:750,restDelta:1,restSpeed:10,...f,...S};return this.startAxisValueAnimation(y,q)});return Promise.all(g).then(h)}startAxisValueAnimation(i,r){const s=this.getAxisMotionValue(i);return wc(this.visualElement,i),s.start(dd(i,s,0,r,this.visualElement,!1))}stopAnimation(){aa(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[r];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){aa(r=>{const{drag:s}=this.getProps();if(!lr(r,s,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(r);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[r],p=f.get()||0;f.set(i[r]-_e(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!Sn(r)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};aa(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=g2({min:p,max:p},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),aa(d=>{if(!lr(d,i,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(_e(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;b2.set(this.visualElement,this);const i=this.visualElement.current,r=Oi(i,"pointerdown",g=>{const{drag:y,dragListener:S=!0}=this.getProps(),x=g.target,N=x!==i&&tT(x);y&&S&&!N&&this.start(g)});let s;const c=()=>{const{dragConstraints:g}=this.getProps();Sn(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),s||(s=x2(i,g.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,d=f.addEventListener("measure",c);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),je.read(c);const h=_i(window,"resize",()=>this.scalePositionWithinConstraints()),p=f.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(aa(S=>{const x=this.getAxisMotionValue(S);x&&(this.originPoint[S]+=g[S].translate,x.set(x.get()+g[S].translate))}),this.visualElement.render())}));return()=>{h(),r(),d(),p&&p(),s&&s()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:d=Gc,dragMomentum:h=!0}=i;return{...i,drag:r,dragDirectionLock:s,dragPropagation:c,dragConstraints:f,dragElastic:d,dragMomentum:h}}}function $g(o){let i=!0;return()=>{if(i){i=!1;return}o()}}function x2(o,i,r){const s=ig(o,$g(r)),c=ig(i,$g(r));return()=>{s(),c()}}function lr(o,i,r){return(i===!0||i===o)&&(r===null||r===o)}function T2(o,i=10){let r=null;return Math.abs(o.y)>i?r="y":Math.abs(o.x)>i&&(r="x"),r}class E2 extends io{constructor(i){super(i),this.removeGroupControls=kt,this.removeListeners=kt,this.controls=new S2(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||kt}update(){const{dragControls:i}=this.node.getProps(),{dragControls:r}=this.node.prevProps||{};i!==r&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const pc=o=>(i,r)=>{o&&je.update(()=>o(i,r),!1,!0)};class A2 extends io{constructor(){super(...arguments),this.removePointerDownListener=kt}onPointerDown(i){this.session=new Xy(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Jy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:pc(i),onStart:pc(r),onMove:pc(s),onEnd:(f,d)=>{delete this.session,c&&je.postRender(()=>c(f,d))}}}mount(){this.removePointerDownListener=Oi(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let gc=!1;class D2 extends k.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s,layoutId:c}=this.props,{projection:f}=i;f&&(r.group&&r.group.add(f),s&&s.register&&c&&s.register(f),gc&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),gr.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:s,drag:c,isPresent:f}=this.props,{projection:d}=s;return d&&(d.isPresent=f,i.layoutDependency!==r&&d.setOptions({...d.options,layoutDependency:r}),gc=!0,c||i.layoutDependency!==r||r===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||je.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),pd.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:c}=i;gc=!0,c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Ky(o){const[i,r]=_y(),s=k.useContext(Zc);return b.jsx(D2,{...o,layoutGroup:s,switchLayoutGroup:k.useContext(ky),isPresent:i,safeToRemove:r})}const C2={pan:{Feature:A2},drag:{Feature:E2,ProjectionNode:By,MeasureLayout:Ky}};function Ig(o,i,r){const{props:s}=o;o.animationState&&s.whileHover&&o.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,f=s[c];f&&je.postRender(()=>f(i,Pi(i)))}class M2 extends io{mount(){const{current:i}=this.node;i&&(this.unmount=Wx(i,(r,s)=>(Ig(this.node,s,"Start"),c=>Ig(this.node,c,"End"))))}unmount(){}}class N2 extends io{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Li(_i(this.node.current,"focus",()=>this.onFocus()),_i(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ev(o,i,r){const{props:s}=o;if(o.current instanceof HTMLButtonElement&&o.current.disabled)return;o.animationState&&s.whileTap&&o.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),f=s[c];f&&je.postRender(()=>f(i,Pi(i)))}class z2 extends io{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:r,propagate:s}=this.node.props;this.unmount=oT(i,(c,f)=>(ev(this.node,f,"Start"),(d,{success:h})=>ev(this.node,d,h?"End":"Cancel")),{useGlobalTarget:r,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const Qc=new WeakMap,vc=new WeakMap,q2=o=>{const i=Qc.get(o.target);i&&i(o)},j2=o=>{o.forEach(q2)};function O2({root:o,...i}){const r=o||document;vc.has(r)||vc.set(r,{});const s=vc.get(r),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(j2,{root:o,...i})),s[c]}function w2(o,i,r){const s=O2(i);return Qc.set(o,r),s.observe(o),()=>{Qc.delete(o),s.unobserve(o)}}const R2={some:0,all:1};class V2 extends io{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:r,margin:s,amount:c="some",once:f}=i,d={root:r?r.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:R2[c]},h=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,f&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:S}=this.node.getProps(),x=g?y:S;x&&x(p)};return w2(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(B2(i,r))&&this.startObserver()}unmount(){}}function B2({viewport:o={}},{viewport:i={}}={}){return r=>o[r]!==i[r]}const _2={inView:{Feature:V2},tap:{Feature:z2},focus:{Feature:N2},hover:{Feature:M2}},L2={layout:{ProjectionNode:By,MeasureLayout:Ky}},U2={...l2,..._2,...C2,...L2},Oo=o2(U2,n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P2=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,r,s)=>s?s.toUpperCase():r.toLowerCase()),tv=o=>{const i=P2(o);return i.charAt(0).toUpperCase()+i.slice(1)},Fy=(...o)=>o.filter((i,r,s)=>!!i&&i.trim()!==""&&s.indexOf(i)===r).join(" ").trim(),G2=o=>{for(const i in o)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=k.forwardRef(({color:o="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:c="",children:f,iconNode:d,...h},p)=>k.createElement("svg",{ref:p,...Q2,width:i,height:i,stroke:o,strokeWidth:s?Number(r)*24/Number(i):r,className:Fy("lucide",c),...!f&&!G2(h)&&{"aria-hidden":"true"},...h},[...d.map(([g,y])=>k.createElement(g,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(o,i)=>{const r=k.forwardRef(({className:s,...c},f)=>k.createElement(k2,{ref:f,iconNode:i,className:Fy(`lucide-${H2(tv(o))}`,`lucide-${o}`,s),...c}));return r.displayName=tv(o),r};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],J2=tt("book-open",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Z2=tt("calendar",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],F2=tt("chevron-right",K2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ci=tt("download",W2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],I2=tt("heart",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],tA=tt("instagram",eA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],oA=tt("map-pin",aA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],iA=tt("menu",nA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],kc=tt("phone",sA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Wy=tt("plus",rA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],uA=tt("printer",lA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],$y=tt("search",cA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Yc=tt("shield-check",dA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],fA=tt("square-pen",mA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],pA=tt("star",hA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],vA=tt("trash-2",gA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Dd=tt("x",yA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],SA=tt("youtube",bA);function Iy(o){var i,r,s="";if(typeof o=="string"||typeof o=="number")s+=o;else if(typeof o=="object")if(Array.isArray(o)){var c=o.length;for(i=0;i<c;i++)o[i]&&(r=Iy(o[i]))&&(s&&(s+=" "),s+=r)}else for(r in o)o[r]&&(s&&(s+=" "),s+=r);return s}function xA(){for(var o,i,r=0,s="",c=arguments.length;r<c;r++)(o=arguments[r])&&(i=Iy(o))&&(s&&(s+=" "),s+=i);return s}const TA=(o,i)=>{const r=new Array(o.length+i.length);for(let s=0;s<o.length;s++)r[s]=o[s];for(let s=0;s<i.length;s++)r[o.length+s]=i[s];return r},EA=(o,i)=>({classGroupId:o,validator:i}),e0=(o=new Map,i=null,r)=>({nextPart:o,validators:i,classGroupId:r}),Dr="-",av=[],AA="arbitrary..",DA=o=>{const i=MA(o),{conflictingClassGroups:r,conflictingClassGroupModifiers:s}=o;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return CA(d);const h=d.split(Dr),p=h[0]===""&&h.length>1?1:0;return t0(h,p,i)},getConflictingClassGroupIds:(d,h)=>{if(h){const p=s[d],g=r[d];return p?g?TA(g,p):p:g||av}return r[d]||av}}},t0=(o,i,r)=>{if(o.length-i===0)return r.classGroupId;const c=o[i],f=r.nextPart.get(c);if(f){const g=t0(o,i+1,f);if(g)return g}const d=r.validators;if(d===null)return;const h=i===0?o.join(Dr):o.slice(i).join(Dr),p=d.length;for(let g=0;g<p;g++){const y=d[g];if(y.validator(h))return y.classGroupId}},CA=o=>o.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=o.slice(1,-1),r=i.indexOf(":"),s=i.slice(0,r);return s?AA+s:void 0})(),MA=o=>{const{theme:i,classGroups:r}=o;return NA(r,i)},NA=(o,i)=>{const r=e0();for(const s in o){const c=o[s];Cd(c,r,s,i)}return r},Cd=(o,i,r,s)=>{const c=o.length;for(let f=0;f<c;f++){const d=o[f];zA(d,i,r,s)}},zA=(o,i,r,s)=>{if(typeof o=="string"){qA(o,i,r);return}if(typeof o=="function"){jA(o,i,r,s);return}OA(o,i,r,s)},qA=(o,i,r)=>{const s=o===""?i:a0(i,o);s.classGroupId=r},jA=(o,i,r,s)=>{if(wA(o)){Cd(o(s),i,r,s);return}i.validators===null&&(i.validators=[]),i.validators.push(EA(r,o))},OA=(o,i,r,s)=>{const c=Object.entries(o),f=c.length;for(let d=0;d<f;d++){const[h,p]=c[d];Cd(p,a0(i,h),r,s)}},a0=(o,i)=>{let r=o;const s=i.split(Dr),c=s.length;for(let f=0;f<c;f++){const d=s[f];let h=r.nextPart.get(d);h||(h=e0(),r.nextPart.set(d,h)),r=h}return r},wA=o=>"isThemeGetter"in o&&o.isThemeGetter===!0,RA=o=>{if(o<1)return{get:()=>{},set:()=>{}};let i=0,r=Object.create(null),s=Object.create(null);const c=(f,d)=>{r[f]=d,i++,i>o&&(i=0,s=r,r=Object.create(null))};return{get(f){let d=r[f];if(d!==void 0)return d;if((d=s[f])!==void 0)return c(f,d),d},set(f,d){f in r?r[f]=d:c(f,d)}}},Jc="!",ov=":",VA=[],nv=(o,i,r,s,c)=>({modifiers:o,hasImportantModifier:i,baseClassName:r,maybePostfixModifierPosition:s,isExternal:c}),BA=o=>{const{prefix:i,experimentalParseClassName:r}=o;let s=c=>{const f=[];let d=0,h=0,p=0,g;const y=c.length;for(let V=0;V<y;V++){const U=c[V];if(d===0&&h===0){if(U===ov){f.push(c.slice(p,V)),p=V+1;continue}if(U==="/"){g=V;continue}}U==="["?d++:U==="]"?d--:U==="("?h++:U===")"&&h--}const S=f.length===0?c:c.slice(p);let x=S,N=!1;S.endsWith(Jc)?(x=S.slice(0,-1),N=!0):S.startsWith(Jc)&&(x=S.slice(1),N=!0);const q=g&&g>p?g-p:void 0;return nv(f,N,x,q)};if(i){const c=i+ov,f=s;s=d=>d.startsWith(c)?f(d.slice(c.length)):nv(VA,!1,d,void 0,!0)}if(r){const c=s;s=f=>r({className:f,parseClassName:c})}return s},_A=o=>{const i=new Map;return o.orderSensitiveModifiers.forEach((r,s)=>{i.set(r,1e6+s)}),r=>{const s=[];let c=[];for(let f=0;f<r.length;f++){const d=r[f],h=d[0]==="[",p=i.has(d);h||p?(c.length>0&&(c.sort(),s.push(...c),c=[]),s.push(d)):c.push(d)}return c.length>0&&(c.sort(),s.push(...c)),s}},LA=o=>({cache:RA(o.cacheSize),parseClassName:BA(o),sortModifiers:_A(o),...DA(o)}),UA=/\s+/,HA=(o,i)=>{const{parseClassName:r,getClassGroupId:s,getConflictingClassGroupIds:c,sortModifiers:f}=i,d=[],h=o.trim().split(UA);let p="";for(let g=h.length-1;g>=0;g-=1){const y=h[g],{isExternal:S,modifiers:x,hasImportantModifier:N,baseClassName:q,maybePostfixModifierPosition:V}=r(y);if(S){p=y+(p.length>0?" "+p:p);continue}let U=!!V,P=s(U?q.substring(0,V):q);if(!P){if(!U){p=y+(p.length>0?" "+p:p);continue}if(P=s(q),!P){p=y+(p.length>0?" "+p:p);continue}U=!1}const X=x.length===0?"":x.length===1?x[0]:f(x).join(":"),G=N?X+Jc:X,H=G+P;if(d.indexOf(H)>-1)continue;d.push(H);const Y=c(P,U);for(let oe=0;oe<Y.length;++oe){const F=Y[oe];d.push(G+F)}p=y+(p.length>0?" "+p:p)}return p},PA=(...o)=>{let i=0,r,s,c="";for(;i<o.length;)(r=o[i++])&&(s=o0(r))&&(c&&(c+=" "),c+=s);return c},o0=o=>{if(typeof o=="string")return o;let i,r="";for(let s=0;s<o.length;s++)o[s]&&(i=o0(o[s]))&&(r&&(r+=" "),r+=i);return r},GA=(o,...i)=>{let r,s,c,f;const d=p=>{const g=i.reduce((y,S)=>S(y),o());return r=LA(g),s=r.cache.get,c=r.cache.set,f=h,h(p)},h=p=>{const g=s(p);if(g)return g;const y=HA(p,r);return c(p,y),y};return f=d,(...p)=>f(PA(...p))},QA=[],Fe=o=>{const i=r=>r[o]||QA;return i.isThemeGetter=!0,i},n0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,i0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,kA=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,YA=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,JA=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,XA=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,ZA=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,KA=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ia=o=>kA.test(o),he=o=>!!o&&!Number.isNaN(Number(o)),eo=o=>!!o&&Number.isInteger(Number(o)),yc=o=>o.endsWith("%")&&he(o.slice(0,-1)),Aa=o=>YA.test(o),s0=()=>!0,FA=o=>JA.test(o)&&!XA.test(o),Md=()=>!1,WA=o=>ZA.test(o),$A=o=>KA.test(o),IA=o=>!I(o)&&!te(o),eD=o=>so(o,u0,Md),I=o=>n0.test(o),Mo=o=>so(o,c0,FA),iv=o=>so(o,lD,he),tD=o=>so(o,m0,s0),aD=o=>so(o,d0,Md),sv=o=>so(o,r0,Md),oD=o=>so(o,l0,$A),ur=o=>so(o,f0,WA),te=o=>i0.test(o),Mi=o=>wo(o,c0),nD=o=>wo(o,d0),rv=o=>wo(o,r0),iD=o=>wo(o,u0),sD=o=>wo(o,l0),cr=o=>wo(o,f0,!0),rD=o=>wo(o,m0,!0),so=(o,i,r)=>{const s=n0.exec(o);return s?s[1]?i(s[1]):r(s[2]):!1},wo=(o,i,r=!1)=>{const s=i0.exec(o);return s?s[1]?i(s[1]):r:!1},r0=o=>o==="position"||o==="percentage",l0=o=>o==="image"||o==="url",u0=o=>o==="length"||o==="size"||o==="bg-size",c0=o=>o==="length",lD=o=>o==="number",d0=o=>o==="family-name",m0=o=>o==="number"||o==="weight",f0=o=>o==="shadow",uD=()=>{const o=Fe("color"),i=Fe("font"),r=Fe("text"),s=Fe("font-weight"),c=Fe("tracking"),f=Fe("leading"),d=Fe("breakpoint"),h=Fe("container"),p=Fe("spacing"),g=Fe("radius"),y=Fe("shadow"),S=Fe("inset-shadow"),x=Fe("text-shadow"),N=Fe("drop-shadow"),q=Fe("blur"),V=Fe("perspective"),U=Fe("aspect"),P=Fe("ease"),X=Fe("animate"),G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Y=()=>[...H(),te,I],oe=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],L=()=>[te,I,p],ie=()=>[Ia,"full","auto",...L()],Ae=()=>[eo,"none","subgrid",te,I],Ve=()=>["auto",{span:["full",eo,te,I]},eo,te,I],Oe=()=>[eo,"auto",te,I],ht=()=>["auto","min","max","fr",te,I],lt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Pe=()=>["start","end","center","stretch","center-safe","end-safe"],O=()=>["auto",...L()],Q=()=>[Ia,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...L()],W=()=>[Ia,"screen","full","dvw","lvw","svw","min","max","fit",...L()],me=()=>[Ia,"screen","full","lh","dvh","lvh","svh","min","max","fit",...L()],J=()=>[o,te,I],A=()=>[...H(),rv,sv,{position:[te,I]}],_=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Z=()=>["auto","cover","contain",iD,eD,{size:[te,I]}],K=()=>[yc,Mi,Mo],ne=()=>["","none","full",g,te,I],re=()=>["",he,Mi,Mo],be=()=>["solid","dashed","dotted","double"],$e=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],fe=()=>[he,yc,rv,sv],Ca=()=>["","none",q,te,I],ia=()=>["none",he,te,I],Ma=()=>["none",he,te,I],Ro=()=>[he,te,I],Ot=()=>[Ia,"full",...L()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Aa],breakpoint:[Aa],color:[s0],container:[Aa],"drop-shadow":[Aa],ease:["in","out","in-out"],font:[IA],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Aa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Aa],shadow:[Aa],spacing:["px",he],text:[Aa],"text-shadow":[Aa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ia,I,te,U]}],container:["container"],columns:[{columns:[he,I,te,h]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Y()}],overflow:[{overflow:oe()}],"overflow-x":[{"overflow-x":oe()}],"overflow-y":[{"overflow-y":oe()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ie()}],"inset-x":[{"inset-x":ie()}],"inset-y":[{"inset-y":ie()}],start:[{"inset-s":ie(),start:ie()}],end:[{"inset-e":ie(),end:ie()}],"inset-bs":[{"inset-bs":ie()}],"inset-be":[{"inset-be":ie()}],top:[{top:ie()}],right:[{right:ie()}],bottom:[{bottom:ie()}],left:[{left:ie()}],visibility:["visible","invisible","collapse"],z:[{z:[eo,"auto",te,I]}],basis:[{basis:[Ia,"full","auto",h,...L()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[he,Ia,"auto","initial","none",I]}],grow:[{grow:["",he,te,I]}],shrink:[{shrink:["",he,te,I]}],order:[{order:[eo,"first","last","none",te,I]}],"grid-cols":[{"grid-cols":Ae()}],"col-start-end":[{col:Ve()}],"col-start":[{"col-start":Oe()}],"col-end":[{"col-end":Oe()}],"grid-rows":[{"grid-rows":Ae()}],"row-start-end":[{row:Ve()}],"row-start":[{"row-start":Oe()}],"row-end":[{"row-end":Oe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ht()}],"auto-rows":[{"auto-rows":ht()}],gap:[{gap:L()}],"gap-x":[{"gap-x":L()}],"gap-y":[{"gap-y":L()}],"justify-content":[{justify:[...lt(),"normal"]}],"justify-items":[{"justify-items":[...Pe(),"normal"]}],"justify-self":[{"justify-self":["auto",...Pe()]}],"align-content":[{content:["normal",...lt()]}],"align-items":[{items:[...Pe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Pe(),{baseline:["","last"]}]}],"place-content":[{"place-content":lt()}],"place-items":[{"place-items":[...Pe(),"baseline"]}],"place-self":[{"place-self":["auto",...Pe()]}],p:[{p:L()}],px:[{px:L()}],py:[{py:L()}],ps:[{ps:L()}],pe:[{pe:L()}],pbs:[{pbs:L()}],pbe:[{pbe:L()}],pt:[{pt:L()}],pr:[{pr:L()}],pb:[{pb:L()}],pl:[{pl:L()}],m:[{m:O()}],mx:[{mx:O()}],my:[{my:O()}],ms:[{ms:O()}],me:[{me:O()}],mbs:[{mbs:O()}],mbe:[{mbe:O()}],mt:[{mt:O()}],mr:[{mr:O()}],mb:[{mb:O()}],ml:[{ml:O()}],"space-x":[{"space-x":L()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":L()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],"inline-size":[{inline:["auto",...W()]}],"min-inline-size":[{"min-inline":["auto",...W()]}],"max-inline-size":[{"max-inline":["none",...W()]}],"block-size":[{block:["auto",...me()]}],"min-block-size":[{"min-block":["auto",...me()]}],"max-block-size":[{"max-block":["none",...me()]}],w:[{w:[h,"screen",...Q()]}],"min-w":[{"min-w":[h,"screen","none",...Q()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[d]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",r,Mi,Mo]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,rD,tD]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",yc,I]}],"font-family":[{font:[nD,aD,i]}],"font-features":[{"font-features":[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,te,I]}],"line-clamp":[{"line-clamp":[he,"none",te,iv]}],leading:[{leading:[f,...L()]}],"list-image":[{"list-image":["none",te,I]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",te,I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:J()}],"text-color":[{text:J()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...be(),"wavy"]}],"text-decoration-thickness":[{decoration:[he,"from-font","auto",te,Mo]}],"text-decoration-color":[{decoration:J()}],"underline-offset":[{"underline-offset":[he,"auto",te,I]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te,I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te,I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:A()}],"bg-repeat":[{bg:_()}],"bg-size":[{bg:Z()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},eo,te,I],radial:["",te,I],conic:[eo,te,I]},sD,oD]}],"bg-color":[{bg:J()}],"gradient-from-pos":[{from:K()}],"gradient-via-pos":[{via:K()}],"gradient-to-pos":[{to:K()}],"gradient-from":[{from:J()}],"gradient-via":[{via:J()}],"gradient-to":[{to:J()}],rounded:[{rounded:ne()}],"rounded-s":[{"rounded-s":ne()}],"rounded-e":[{"rounded-e":ne()}],"rounded-t":[{"rounded-t":ne()}],"rounded-r":[{"rounded-r":ne()}],"rounded-b":[{"rounded-b":ne()}],"rounded-l":[{"rounded-l":ne()}],"rounded-ss":[{"rounded-ss":ne()}],"rounded-se":[{"rounded-se":ne()}],"rounded-ee":[{"rounded-ee":ne()}],"rounded-es":[{"rounded-es":ne()}],"rounded-tl":[{"rounded-tl":ne()}],"rounded-tr":[{"rounded-tr":ne()}],"rounded-br":[{"rounded-br":ne()}],"rounded-bl":[{"rounded-bl":ne()}],"border-w":[{border:re()}],"border-w-x":[{"border-x":re()}],"border-w-y":[{"border-y":re()}],"border-w-s":[{"border-s":re()}],"border-w-e":[{"border-e":re()}],"border-w-bs":[{"border-bs":re()}],"border-w-be":[{"border-be":re()}],"border-w-t":[{"border-t":re()}],"border-w-r":[{"border-r":re()}],"border-w-b":[{"border-b":re()}],"border-w-l":[{"border-l":re()}],"divide-x":[{"divide-x":re()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":re()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...be(),"hidden","none"]}],"divide-style":[{divide:[...be(),"hidden","none"]}],"border-color":[{border:J()}],"border-color-x":[{"border-x":J()}],"border-color-y":[{"border-y":J()}],"border-color-s":[{"border-s":J()}],"border-color-e":[{"border-e":J()}],"border-color-bs":[{"border-bs":J()}],"border-color-be":[{"border-be":J()}],"border-color-t":[{"border-t":J()}],"border-color-r":[{"border-r":J()}],"border-color-b":[{"border-b":J()}],"border-color-l":[{"border-l":J()}],"divide-color":[{divide:J()}],"outline-style":[{outline:[...be(),"none","hidden"]}],"outline-offset":[{"outline-offset":[he,te,I]}],"outline-w":[{outline:["",he,Mi,Mo]}],"outline-color":[{outline:J()}],shadow:[{shadow:["","none",y,cr,ur]}],"shadow-color":[{shadow:J()}],"inset-shadow":[{"inset-shadow":["none",S,cr,ur]}],"inset-shadow-color":[{"inset-shadow":J()}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:J()}],"ring-offset-w":[{"ring-offset":[he,Mo]}],"ring-offset-color":[{"ring-offset":J()}],"inset-ring-w":[{"inset-ring":re()}],"inset-ring-color":[{"inset-ring":J()}],"text-shadow":[{"text-shadow":["none",x,cr,ur]}],"text-shadow-color":[{"text-shadow":J()}],opacity:[{opacity:[he,te,I]}],"mix-blend":[{"mix-blend":[...$e(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":$e()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[he]}],"mask-image-linear-from-pos":[{"mask-linear-from":fe()}],"mask-image-linear-to-pos":[{"mask-linear-to":fe()}],"mask-image-linear-from-color":[{"mask-linear-from":J()}],"mask-image-linear-to-color":[{"mask-linear-to":J()}],"mask-image-t-from-pos":[{"mask-t-from":fe()}],"mask-image-t-to-pos":[{"mask-t-to":fe()}],"mask-image-t-from-color":[{"mask-t-from":J()}],"mask-image-t-to-color":[{"mask-t-to":J()}],"mask-image-r-from-pos":[{"mask-r-from":fe()}],"mask-image-r-to-pos":[{"mask-r-to":fe()}],"mask-image-r-from-color":[{"mask-r-from":J()}],"mask-image-r-to-color":[{"mask-r-to":J()}],"mask-image-b-from-pos":[{"mask-b-from":fe()}],"mask-image-b-to-pos":[{"mask-b-to":fe()}],"mask-image-b-from-color":[{"mask-b-from":J()}],"mask-image-b-to-color":[{"mask-b-to":J()}],"mask-image-l-from-pos":[{"mask-l-from":fe()}],"mask-image-l-to-pos":[{"mask-l-to":fe()}],"mask-image-l-from-color":[{"mask-l-from":J()}],"mask-image-l-to-color":[{"mask-l-to":J()}],"mask-image-x-from-pos":[{"mask-x-from":fe()}],"mask-image-x-to-pos":[{"mask-x-to":fe()}],"mask-image-x-from-color":[{"mask-x-from":J()}],"mask-image-x-to-color":[{"mask-x-to":J()}],"mask-image-y-from-pos":[{"mask-y-from":fe()}],"mask-image-y-to-pos":[{"mask-y-to":fe()}],"mask-image-y-from-color":[{"mask-y-from":J()}],"mask-image-y-to-color":[{"mask-y-to":J()}],"mask-image-radial":[{"mask-radial":[te,I]}],"mask-image-radial-from-pos":[{"mask-radial-from":fe()}],"mask-image-radial-to-pos":[{"mask-radial-to":fe()}],"mask-image-radial-from-color":[{"mask-radial-from":J()}],"mask-image-radial-to-color":[{"mask-radial-to":J()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":H()}],"mask-image-conic-pos":[{"mask-conic":[he]}],"mask-image-conic-from-pos":[{"mask-conic-from":fe()}],"mask-image-conic-to-pos":[{"mask-conic-to":fe()}],"mask-image-conic-from-color":[{"mask-conic-from":J()}],"mask-image-conic-to-color":[{"mask-conic-to":J()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:A()}],"mask-repeat":[{mask:_()}],"mask-size":[{mask:Z()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",te,I]}],filter:[{filter:["","none",te,I]}],blur:[{blur:Ca()}],brightness:[{brightness:[he,te,I]}],contrast:[{contrast:[he,te,I]}],"drop-shadow":[{"drop-shadow":["","none",N,cr,ur]}],"drop-shadow-color":[{"drop-shadow":J()}],grayscale:[{grayscale:["",he,te,I]}],"hue-rotate":[{"hue-rotate":[he,te,I]}],invert:[{invert:["",he,te,I]}],saturate:[{saturate:[he,te,I]}],sepia:[{sepia:["",he,te,I]}],"backdrop-filter":[{"backdrop-filter":["","none",te,I]}],"backdrop-blur":[{"backdrop-blur":Ca()}],"backdrop-brightness":[{"backdrop-brightness":[he,te,I]}],"backdrop-contrast":[{"backdrop-contrast":[he,te,I]}],"backdrop-grayscale":[{"backdrop-grayscale":["",he,te,I]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[he,te,I]}],"backdrop-invert":[{"backdrop-invert":["",he,te,I]}],"backdrop-opacity":[{"backdrop-opacity":[he,te,I]}],"backdrop-saturate":[{"backdrop-saturate":[he,te,I]}],"backdrop-sepia":[{"backdrop-sepia":["",he,te,I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":L()}],"border-spacing-x":[{"border-spacing-x":L()}],"border-spacing-y":[{"border-spacing-y":L()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",te,I]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[he,"initial",te,I]}],ease:[{ease:["linear","initial",P,te,I]}],delay:[{delay:[he,te,I]}],animate:[{animate:["none",X,te,I]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[V,te,I]}],"perspective-origin":[{"perspective-origin":Y()}],rotate:[{rotate:ia()}],"rotate-x":[{"rotate-x":ia()}],"rotate-y":[{"rotate-y":ia()}],"rotate-z":[{"rotate-z":ia()}],scale:[{scale:Ma()}],"scale-x":[{"scale-x":Ma()}],"scale-y":[{"scale-y":Ma()}],"scale-z":[{"scale-z":Ma()}],"scale-3d":["scale-3d"],skew:[{skew:Ro()}],"skew-x":[{"skew-x":Ro()}],"skew-y":[{"skew-y":Ro()}],transform:[{transform:[te,I,"","none","gpu","cpu"]}],"transform-origin":[{origin:Y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ot()}],"translate-x":[{"translate-x":Ot()}],"translate-y":[{"translate-y":Ot()}],"translate-z":[{"translate-z":Ot()}],"translate-none":["translate-none"],accent:[{accent:J()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:J()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te,I]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mbs":[{"scroll-mbs":L()}],"scroll-mbe":[{"scroll-mbe":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pbs":[{"scroll-pbs":L()}],"scroll-pbe":[{"scroll-pbe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te,I]}],fill:[{fill:["none",...J()]}],"stroke-w":[{stroke:[he,Mi,Mo,iv]}],stroke:[{stroke:["none",...J()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},cD=GA(uD);function Cr(...o){return cD(xA(o))}const bc={pastor:{name:"Pastor Fredson Fagundes",phone:"74999829797"},elders:[{name:"Pb. Adevaldo Marques",phone:"7499795490",image:null},{name:"Pb. Elique Rios Filho",phone:"7499910068",image:null}]},dD=[{month:0,day:1,name:"Suelivânia Santos da Silva Sena"},{month:0,day:7,name:"Ozileia da Silva Cunha Ferreira"},{month:0,day:12,name:"Euflorsina da Cunha Oliveira"},{month:0,day:20,name:"Bernadet"},{month:0,day:25,name:"Sidelcina da Cunha Oliveira"},{month:0,day:27,name:"Thayz Mota Cunha Franco"},{month:1,day:2,name:"Evanuzia"},{month:1,day:7,name:"Maria Betina Cunha Franco"},{month:1,day:10,name:"Arthur Oliveira Silva"},{month:1,day:10,name:"Pr. Fredson Fagundes Cerqueira"},{month:1,day:22,name:"Ir. Dete Rios"},{month:1,day:27,name:"Marilene Gonçalves da Silva"},{month:2,day:3,name:"Nalva de Antoniel"},{month:2,day:8,name:"Levi Rios Alves Fagundes"},{month:2,day:16,name:"Lucineide Oliveira Nascimento"},{month:2,day:18,name:"Jucielle"},{month:2,day:21,name:"Antônio Ferreira da Silva"},{month:2,day:21,name:"Vitor Manoel da Cunha Ferreira"},{month:2,day:23,name:"Patrícia Lopes rios cunha"},{month:2,day:26,name:"Imarcélia"},{month:2,day:26,name:"Osmária Sousa Rios"},{month:2,day:28,name:"Leonildio Ferreira dos Santos"},{month:2,day:31,name:"Élida Suzart"},{month:2,day:31,name:"Irandir da Silva Rios"},{month:3,day:7,name:"Pedro Leonel da Cunha Ferreira"},{month:3,day:13,name:"Berenice Maria da Silva Lopes"},{month:3,day:24,name:"Saullo Jacó Santos Cunha"},{month:3,day:25,name:"Elique Rios Filho"},{month:3,day:27,name:"Elinalda"},{month:4,day:10,name:"Elisa Silva Sena"},{month:4,day:25,name:"Meire da Silva Almeida Evangelista"},{month:4,day:28,name:"Edelice"},{month:5,day:5,name:"Milton Pereira Rios"},{month:5,day:6,name:"Adevaldo Marques Rios"},{month:5,day:13,name:"Joelma Cristina Rios Lima Pinho"},{month:5,day:14,name:"Alzerita Santos de Souza"},{month:5,day:17,name:"Anderson Hangel Souza Franco"},{month:5,day:21,name:"Débora Rios Ribeiro"},{month:5,day:23,name:"Juniclesio Paixao da Silva Santos"},{month:6,day:1,name:"Maria Cecília Cunha Franco"},{month:6,day:2,name:"Daniel Oliveira Santos"},{month:6,day:4,name:"Diana Rios Alves Fagundes"},{month:6,day:8,name:"Zack Samuel Barbosa Silva"},{month:6,day:19,name:"Ridair Cunha"},{month:6,day:20,name:"Welida Ticiana"},{month:6,day:27,name:"Elizânia Gonçalves da Silva Rios"},{month:7,day:4,name:"Uriel da Silva Cunha"},{month:7,day:20,name:"Izabel Rios Oliveira"},{month:8,day:1,name:"Jucirene Lopes da Silva Cunha"},{month:8,day:2,name:"Luana Lima Mendes Oliveira"},{month:8,day:12,name:"Jucineide Rios Oliveira"},{month:8,day:12,name:"Otoniel da Silva Cunha"},{month:8,day:13,name:"Antonio Rios"},{month:8,day:17,name:"Carlito Oliveira Cunha"},{month:8,day:24,name:"Fabiana de Carvalho Barbosa"},{month:8,day:25,name:"Adonel Oliveira"},{month:8,day:25,name:"Roberio Araújo Evangelista"},{month:8,day:30,name:"Jonatas Rios Guilherme"},{month:9,day:7,name:"Evangelina de Oliveira Santos"},{month:9,day:18,name:"Yasmim Barbosa Silva"},{month:9,day:25,name:"Zailde Rios Santos"},{month:9,day:26,name:"João Rodrigues de Souza (Nequinha)"},{month:9,day:29,name:"Maria Luzinete Barbosa Cerqueira"},{month:10,day:3,name:"Josiane Oliveira Santos Silva"},{month:10,day:5,name:"Izabela Mota de Souza Cunha"},{month:10,day:9,name:"Joseane da Silva Souza"},{month:10,day:9,name:"Paulo Sérgio Vieira dos Santos"},{month:10,day:12,name:"José dos Santos Oliveira"},{month:10,day:12,name:"Liz Rios Alves Fagundes"},{month:10,day:24,name:"Oseas da Silva Cunha"},{month:11,day:2,name:"Arnóbio Lopes da Silva"},{month:11,day:8,name:"Adeílda Gomes de Oliveira"},{month:11,day:8,name:"Heloísa Barbosa Silva"},{month:11,day:13,name:"Antônio Jacinto Filho"},{month:11,day:14,name:"Ozuel da Silva Cunha"},{month:11,day:17,name:"Zenilda Maria da Silva Cunha"},{month:11,day:24,name:"Edivaldo Emídio Santos"},{month:11,day:31,name:"Matheus Almeida Evangelista"}],lv=[{month:1,name:"Fevereiro",theme:"CHAMADOS AO ARREPENDIMENTO E COMUNHÃO",verse:"(Is 55:6) Buscai o SENHOR enquanto se pode achar, invocai-o enquanto está perto.",events:["01/02 (domingo): Reunião do Conselho com SAF e UPH","07/02 (sábado): Pregação no ponto – Nova Esperança","13–17/02: Retiro espiritual (Carnaval)","17/02 (terça): Reunião do Conselho","22/02 (domingo): Santa Ceia","25/02 (quarta): Santa Ceia no lar"]},{month:2,name:"Março",theme:"BUSCANDO A SANTIDADE",verse:"(1Pe 1.16) Porque escrito está: Sede santos, porque eu sou santo.",events:["Terças: Curso de formação após a Reunião de Oração","Quintas: Reunião de Doutrina: Pilares da Fé Reformada","Domingos: EBD, 10h - Carta aos Coríntios; Culto, 19h30 - Buscando a Santidade","07/03 (Sábado): Caminhada da Mulher (saída às 17h da porta da igreja, parada na casa de Meire para lanche e palestra)","14/03 (Sábado): Projeto Mão na Massa – Ourolândia","21/03 (Sábado): Nova Esperança","15/03 (Domingo): Culto e Santa Ceia - 19h30","23/03 (Segunda-feira): Reunião do Conselho e Reunião de Liderança - Casa do Pb. Elique Filho","25/03 (Quarta): Santa Ceia no Lar - Casa da Irmã Dalva","30/03 (Segunda-feira): 18h–20h Churrasco, Proza e Viola"]},{month:3,name:"Abril",theme:"A cruz e a redenção em Cristo",verse:"(Is 53:5) Mas ele foi traspassado pelas nossas transgressões e moído pelas nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",events:["11/04 (sábado): Pregação no ponto – Nova Esperança","Curso de Formação - Terças, após reunião de oração","05/04 (domingo): Café da ressureição e Culto da Páscoa com Santa Ceia","15/04 (quarta): Santa Ceia no lar","21/04 (terça): Reunião do Conselho","25/04 (sábado): Aniversário da UPH – Pregador: Pr. Nivaldo Cortes"]},{month:4,name:"Maio",theme:"Edificando a família sobre a Rocha",verse:"(Mt 7.24) Quem ouve minhas palavras e as pratica é tão sábio como a pessoa que constrói sua casa sobre uma rocha firme.",events:["03/05 (Dom): Uma família firmada na Rocha - Miss. Franco (IPB Piritiba)","05/05 (Ter): Oração nos lares (Família de Arnóbio e Lene) - Resp: UPH","10/05 (Dom): Uma família ajustada pelos princípios de Deus - Pb. Robério Evangelista","12/05 (Ter): Oração nos lares (Família de Geanhy e Irandir) - Resp: SAF","16/05 (Sáb): Culto Evangelístico (Nova Esperança) - Liturgia: SAF | Palavra: UPH","17/05 (Dom): Uma família que vence as tempestades - Miss. Abérico Macêdo (IPB Serrolândia)","19/05 (Ter): Oração nos lares (Família de Débora) - Resp: SAF","24/05 (Dom): Uma família que vence as tempestades - Pb. Gilson Rios (IPB Mairi)","26/05 (Ter): Oração nos lares (Fam. Ozuel, Juce, Uriel, Ciele, Luciano e Saulo)","31/05 (Dom): DIA DA FAMÍLIA IPVP - 10h EBD Especial | 19h Culto - Pr. Pedro (IPB Pintadas)"]},{month:5,name:"Junho",theme:"A família no centro do propósito de Deus",verse:"(Js 24:15) Eu e a minha casa serviremos ao SENHOR.",events:["06/06 (sábado): Reunião na casa do Pb. Adevaldo","12/07 (sexta): Culto evangelístico - Casas Populares","13/06 (sábado): Pregação no ponto – Nova Esperança","14/06 (domingo): Santa Ceia","16/06 (terça): Reunião do Conselho - após reunião de oração","17/06 (quarta): Santa Ceia no lar","20/06 (sábado): Jantar de Casais"]},{month:6,name:"Julho",theme:"Confiança no Senhor",verse:"(Sl 27:1) O SENHOR é a minha luz e a minha salvação; de quem terei medo?",events:["04/07 (sábado): Pregação no ponto – Nova Esperança","07/09 (Terça a Quinta): Reuniões de Consagração","12/07 (domingo - 08h): Entrega do Jejum da Consagração","12/07 (domingo - 19h30): Santa Ceia","15/07 (quarta): Santa Ceia no lar","17/07 (sexta): Culto evangelístico","18/07 (sábado): Churrasco, Proza e Viola - UPH de Serrolândia","21/07 (terça): Reunião do Conselho","30/07 (Sexta): Viagem do Retiro IPVP-2026"]},{month:7,name:"Agosto",theme:"Obedecendo ao Senhor na missão",verse:"(Jn 3:1) E veio a palavra do Senhor segunda vez a Jonas, dizendo: Levanta-te, e vai à grande cidade de Nínive.",events:["01 e 02/08 (domingo): Viagem - IPVP","08/08 (sábado): Pregação no ponto – Nova Esperança","09/08 (domingo): Santa Ceia","12/08 (quarta): Santa Ceia no lar","18/08 (terça): Reunião do Conselho","30/08 (domingo): Dia Missionário","28/08 (sexta): Culto evangelístico – Praça do cemitério"]},{month:8,name:"Setembro",theme:"Ele vem",verse:"(Ap 22:12) E eis que venho sem demora, e comigo está o galardão.",events:["05/09 (sábado): Pregação no ponto – Nova Esperança","13/09 (domingo): Santa Ceia","14/09 (segunda): Reunião de Liderança (Casa de Antonio Rios)","16/09 (quarta): Santa Ceia no lar","25/09 (sexta): Culto evangelístico – Alto da Nação","15/09 (terça): Reunião do Conselho","Dia da Bíblia (domingo)"]},{month:9,name:"Outubro",theme:"Reformando sempre",verse:"(Ef 2:8) Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus;",events:["03/10 (sábado): Pregação no ponto – Nova Esperança","04/10 (domingo): Reunião do Conselho com SAF e UPH","11/10 (domingo): Santa Ceia","Aniversário da SAF – Pastor convidado","14/10 (quarta): Santa Ceia no lar","31/10 (sexta): DIA DO EVANGÉLICO – PRAÇA PRINCIPAL"]},{month:10,name:"Novembro",theme:"Gratidão e fidelidade ao Senhor",verse:"(1Sm 7:12) Até aqui nos ajudou o SENHOR.",events:["02/11: Café teológico com o tema: 'E depois da morte...?'","07/11 (sábado): Pregação no ponto – Nova Esperança","12 e 13/11: Cultos evangelísticos na Praça da Nação e na Praça da Preguiça","14–15/11: 31 anos da IPVP – Pastor convidado e Santa Ceia","17/11 (terça): Reunião do Conselho","18/11 (quarta): Santa Ceia no lar","21–30/11: Ausência pastoral (curso em São Paulo)"]},{month:11,name:"Dezembro",theme:"O Cristo encarnado e a esperança eterna",verse:"(Jo 1:14) E o Verbo se fez carne e habitou entre nós.",events:["06/12 (domingo): Santa Ceia","07/12 (segunda): Reunião de Liderança (Casa pastoral)","09/12 (quarta): Santa Ceia no lar","11/12 (sexta): Culto evangelístico","15/12 (terça): Reunião do Conselho","20/12 (domingo) Manhã - Assembleia Geral Ordinária","Cultos de Natal e Encerramento do Ano"]}],mD=[{month:3,announcements:[{text:"Do Perdão ao Triunfo: As sete declarações de Cristo na Cruz.",image:"/aspalavrasdejesus_abril.jpg",isWeekly:!1},{text:"Celebração: UPH 27 Anos",image:"/uph27anos_abril.jpg",isWeekly:!1}]},{month:4,announcements:[{text:"Mês da Família: Edificando a família sobre a Rocha.",image:"/maio_mesdafamilia_2026.jpg",isWeekly:!1}]}],uv=[{title:"A Bênção (Gabriel Guedes)",lyrics:`Que o Senhor te abençoe
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
Escudo para os que n'Ele creem`}],fD={gold:"#D4B36D"},hD=["Gênesis","Êxodo","Levítico","Números","Deuteronômio","Josué","Juízes","Rute","1Samuel","2Samuel","1Reis","2Reis","1Crônicas","2Crônicas","Esdras","Neemias","Ester","Jó","Salmos","Provérbios","Eclesiastes","Cânticos","Isaías","Jeremias","Lamentações","Ezequiel","Daniel","Oseias","Joel","Amós","Obadias","Jonas","Miqueias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias","Mateus","Marcos","Lucas","João","Atos","Romanos","1Coríntios","2Coríntios","Gálatas","Efésios","Filipenses","Colossenses","1Tessalonicenses","2Tessalonicenses","1Timóteo","2Timóteo","Tito","Filemom","Hebreus","Tiago","1Pedro","2Pedro","1João","2João","3João","Judas","Apocalipse"],pD=o=>["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][o],gD=[{id:1,nome:"Adeílda Gomes de Oliveira",celular:"74 99963-6488",status:"Comungante",oficio:"Não oficial"},{id:2,nome:"Adevaldo Marques Rios",celular:"74 9979-5490",status:"Comungante",oficio:"Presbítero"},{id:3,nome:"Adonel Oliveira",celular:"Não informado",status:"Comungante",oficio:"Diácono"},{id:4,nome:"Agnaldo de Sá",celular:"Não informado",status:"Não Comungante",oficio:"Não oficial"},{id:5,nome:"Alzerita Santos de Souza",celular:"74 99956-6871",status:"Comungante",oficio:"Não oficial"},{id:6,nome:"Anderson Hangel Souza Franco",celular:"74 9927-1727",status:"Comungante",oficio:"Não oficial"},{id:7,nome:"Antônio jacinto Filho Do Nascimento",celular:"74 99986-7018",status:"Comungante",oficio:"Diácono"},{id:8,nome:"Antonio ferreira da silva",celular:"74 99964-6651",status:"Comungante",oficio:"Não oficial"},{id:9,nome:"Antonio Rios dos Santos",celular:"Não informado",status:"Comungante",oficio:"Diácono"},{id:10,nome:"Arnobio Lopes da Silva",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:11,nome:"Benigno Senhorinho de Jesus",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:12,nome:"Berenalva Souza Rios Nascimento",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:13,nome:"Bereni Lopes Rios",celular:"74 99908-1604",status:"Comungante",oficio:"Não oficial"},{id:14,nome:"Berenice Maria da Silva Lopes",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:15,nome:"Bernadet Araújo da Silva",celular:"74 9946-2612",status:"Comungante",oficio:"Não oficial"},{id:16,nome:"Carlito Oliveira Cunha",celular:"74 99911-354X",status:"Comungante",oficio:"Presbítero em disponibilidade"},{id:17,nome:"Dalva Cerqueira Silva Matos",celular:"74 99919-8603",status:"Comungante",oficio:"Não oficial"},{id:18,nome:"Daniel Oliveira Santos",celular:"Não informado",status:"Não Comungante",oficio:"Não oficial"},{id:19,nome:"Debura Rios Ribeiro",celular:"74 99946-4400",status:"Comungante",oficio:"Não oficial"},{id:20,nome:"Diana Rios Alves Fagundes",celular:"74 99967-9797",status:"Comungante",oficio:"Não oficial"},{id:21,nome:"Edelice Lopes da Silva",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:22,nome:"Edivaldo Emídio Santos",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:23,nome:"Elida Suzart Lima",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:24,nome:"Elique Rios Filho",celular:"74 99991-0068",status:"Comungante",oficio:"Presbítero"},{id:25,nome:"Elisa Silva Silva Sena",celular:"74 99949-8421",status:"Não Comungante",oficio:"Não oficial"},{id:26,nome:"Elizania Gonçalves da Silva rios",celular:"74 99979-5490",status:"Comungante",oficio:"Não oficial"},{id:27,nome:"Eritom Marques Rios",celular:"Não informado",status:"Não Comungante",oficio:"Não oficial"},{id:28,nome:"Euflorsina da Cunha Oliveira",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:29,nome:"Evangelina de Oliveira Santos",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:30,nome:"Evanuzia Santos dos Reis",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:31,nome:"Fabiana de Carvalho Barbosa",celular:"74 98144-4303",status:"Comungante",oficio:"Não oficial"},{id:32,nome:"Gehanne de Matos Rios",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:33,nome:"Gildete Souza Rios",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:34,nome:"Guilherina Barbosa Costa",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:35,nome:"HELOISA BARBOSA DA SILVA",celular:"Não informado",status:"Não Comungante",oficio:"Não oficial"},{id:36,nome:"Iara Silva Sena",celular:"74 99997-4632",status:"Não Membro",oficio:"Não oficial"},{id:37,nome:"Imarcélia Lima Rios",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:38,nome:"Irada Rios de Abreu",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:39,nome:"Iradi Maria de Matos Rios",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:40,nome:"Irandir da Silva Rios",celular:"74 99913-9959",status:"Comungante",oficio:"Não oficial"},{id:41,nome:"Ivoneide Sousa Rios Oliveira",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:42,nome:"Izabel Rios Oliveira",celular:"74 99819-0934",status:"Comungante",oficio:"Não oficial"},{id:43,nome:"Izabela Mota de Souza Cunha",celular:"74 9999-7747",status:"Comungante",oficio:"Não oficial"},{id:44,nome:"Joelma Cristina Rios Lima Pinho",celular:"74 99958-5052",status:"Comungante",oficio:"Não oficial"},{id:45,nome:"Jonatas Rios Guilherme",celular:"74 99955-1293",status:"Comungante",oficio:"Não oficial"},{id:46,nome:"José Carlos Brasileiro Sena",celular:"74 99924-4119",status:"Não Membro",oficio:"Não oficial"},{id:47,nome:"José de Oliveira Cunha",celular:"Não informado",status:"Comungante",oficio:"Presbítero em disponibilidade"},{id:48,nome:"José dos Santos Oliveira",celular:"(74) 99811-9515",status:"Comungante",oficio:"Não oficial"},{id:49,nome:"Joseane da Silva Souza",celular:"74 99964-2376",status:"Comungante",oficio:"Não oficial"},{id:50,nome:"Jucielle da Silva Cunha Santos",celular:"(74) 99915-6401",status:"Comungante",oficio:"Não oficial"},{id:51,nome:"Jucineide Rios Oliveira",celular:"74 99808-7226",status:"Comungante",oficio:"Não oficial"},{id:52,nome:"Jucirene Lopes da Silva cunha",celular:"74 9967-5053",status:"Comungante",oficio:"Não oficial"},{id:53,nome:"Leonildio Ferreira dos Santos",celular:"74 99970-1358",status:"Comungante",oficio:"Não oficial"},{id:54,nome:"LEVI RIOS ALVES FAGUNDES",celular:"74 99867-3305",status:"Comungante",oficio:"Não oficial"},{id:55,nome:"Luana Lima Mendes Oliveira",celular:"74 99985-9324",status:"Comungante",oficio:"Não oficial"},{id:56,nome:"Lucineide Oliveira Nascimento",celular:"74 99954-4521",status:"Comungante",oficio:"Não oficial"},{id:57,nome:"Maria Betina Cunha Franco",celular:"Não informado",status:"Não Comungante",oficio:"Não oficial"},{id:58,nome:"Maria Cecília Cunha Franco",celular:"Não informado",status:"Não Comungante",oficio:"Não oficial"},{id:59,nome:"Marilene Gonçalves da Silva",celular:"74 99964-1431",status:"Comungante",oficio:"Não oficial"},{id:60,nome:"Matheus Almeida Evangelista",celular:"(74) 99942-9016",status:"Não Comungante",oficio:"Não oficial"},{id:61,nome:"Meire da Silva Almeida Evangelista",celular:"74 9930-3935",status:"Comungante",oficio:"Não oficial"},{id:62,nome:"Milton Pereira Rios",celular:"74 99919-4112",status:"Comungante",oficio:"Não oficial"},{id:63,nome:"Naudja Sousa Rios Theodoro",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:64,nome:"Oseas da Silva Cunha",celular:"74 99914-9304",status:"Comungante",oficio:"Não oficial"},{id:65,nome:"Osmária Sousa Rios",celular:"74 9813-2159",status:"Comungante",oficio:"Não oficial"},{id:66,nome:"Otoniel DA Silva Cunha",celular:"74 99819-2191",status:"Comungante",oficio:"Não oficial"},{id:67,nome:"Otoniel de Souza Rios",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:68,nome:"Ozenilde Sousa Rios",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:69,nome:"Ozileia da silva Cunha Ferreira",celular:"74 99980-2611",status:"Comungante",oficio:"Não oficial"},{id:70,nome:"Ozuel da Silva cunha",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:71,nome:"Patrícia Lopes Rios Cunha",celular:"74 9817-1902",status:"Comungante",oficio:"Não oficial"},{id:72,nome:"Paulo Sérgio Vieira dos Santos",celular:"Não informado",status:"Comungante",oficio:"Não oficial"},{id:73,nome:"Pedro Leonel da Cunha Ferreira",celular:"Não informado",status:"Não Comungante",oficio:"Não oficial"},{id:74,nome:"Ridair da Cunha Santos",celular:"74 99970-1358",status:"Comungante",oficio:"Não oficial"},{id:75,nome:"Roberio Araújo Evangelista",celular:"(74) 99942-9016",status:"Comungante",oficio:"Presbítero em disponibilidade"},{id:76,nome:"Sidelcina da Cunha Oliveira",celular:"74 99901-4329",status:"Comungante",oficio:"Não oficial"},{id:77,nome:"Suelivania Santos da Silva Sena",celular:"74 99976-3212",status:"Comungante",oficio:"Não oficial"},{id:78,nome:"Thayz Mota Cunha Franco",celular:"74 99938-6757",status:"Comungante",oficio:"Não oficial"},{id:79,nome:"Uriel da Silva cunha",celular:"74 9937-3626",status:"Comungante",oficio:"Não oficial"},{id:80,nome:"Vitor Manoel da Cunha Ferreira",celular:"Não informado",status:"Não Comungante",oficio:"Não oficial"},{id:81,nome:"Wélida Ticiana almeida Araújo Rios",celular:"74 99964-2782",status:"Comungante",oficio:"Não oficial"},{id:82,nome:"YASMIM BARBOSA SILVA",celular:"Não informado",status:"Não Comungante",oficio:"Não oficial"},{id:83,nome:"ZACK SAMUEL BARBOSA SILVA",celular:"Não informado",status:"Não Comungante",oficio:"Não oficial"},{id:84,nome:"Zailde Rios Santos",celular:"74 99980-8547",status:"Comungante",oficio:"Não oficial"},{id:85,nome:"Zenilda Maria da Silva Cunha",celular:"Não informado",status:"Comungante",oficio:"Não oficial"}],vD=()=>{const[o,i]=k.useState(""),[r,s]=k.useState(!1),[c,f]=k.useState(()=>{const H=localStorage.getItem("ipvp_membros_v3");return H?JSON.parse(H):gD}),[d,h]=k.useState("Todos"),[p,g]=k.useState(""),[y,S]=k.useState(!1),[x,N]=k.useState(null),[q,V]=k.useState({nome:"",celular:"",status:"Comungante",oficio:"Não oficial"});k.useEffect(()=>{localStorage.setItem("ipvp_membros_v3",JSON.stringify(c))},[c]);const U=(H=null)=>{H?(N(H),V(H)):(N(null),V({nome:"",celular:"",status:"Comungante",oficio:"Não oficial"})),S(!0)},P=()=>{if(!q.nome)return alert("O nome é obrigatório!");f(x?c.map(H=>H.id===x.id?{...q,id:H.id}:H):[...c,{...q,id:Date.now()}]),S(!1)},X=H=>{window.confirm("Tem certeza que deseja excluir este irmão(ã)?")&&f(c.filter(Y=>Y.id!==H))};if(!r)return b.jsxs("div",{className:"text-center py-24 bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-xl mx-auto mt-10",children:[b.jsx(Yc,{size:64,className:"mx-auto mb-6 text-[#D4B36D]"}),b.jsx("h2",{className:"text-3xl font-serif font-bold text-slate-900 mb-2",children:"Acesso Restrito"}),b.jsx("p",{className:"text-slate-500 mb-10 uppercase tracking-widest text-sm",children:"Apenas Liderança IPVP"}),b.jsx("input",{type:"password",placeholder:"Digite a Senha",className:"border-2 border-slate-200 p-4 rounded-xl outline-none focus:border-[#D4B36D] mr-2 text-center text-lg font-bold w-64",value:o,onChange:H=>i(H.target.value)}),b.jsx("button",{onClick:()=>{o==="2933"?s(!0):alert("Senha incorreta!")},className:"bg-[#0f172a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#D4B36D] transition-colors mt-4 md:mt-0",children:"Entrar"})]});const G=c.filter(H=>{const Y=H.nome.toLowerCase().includes(p.toLowerCase()),oe=d==="Todos"||H.status===d;return Y&&oe});return b.jsxs(b.Fragment,{children:[b.jsx("style",{children:`
          @media print {
            body * { visibility: hidden; }
            #area-impressao, #area-impressao * { visibility: visible; }
            #area-impressao { position: absolute; left: 0; top: 0; width: 100%; }
            .nao-imprime { display: none !important; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ddd !important; padding: 8px !important; color: black !important; }
            th { background-color: #f1f1f1 !important; -webkit-print-color-adjust: exact; }
          }
        `}),b.jsxs("div",{id:"area-impressao",className:"py-10 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-10 mt-10 animate-in fade-in zoom-in duration-500 min-h-[80vh] relative",children:[b.jsxs("div",{className:"hidden print:block mb-8 text-center",children:[b.jsx("h1",{className:"text-3xl font-serif font-bold text-black uppercase",children:"Igreja Presbiteriana em Várzea do Poço"}),b.jsxs("h2",{className:"text-xl text-black mt-2 font-bold",children:["Relatório de Membros (",d,")"]}),b.jsxs("p",{className:"text-black mt-1",children:["Total listado: ",G.length," membros"]})]}),b.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8 border-b border-slate-100 pb-6 gap-4 nao-imprime",children:[b.jsx("h2",{className:"text-3xl font-serif font-bold text-[#163328]",children:"Rol de Membros"}),b.jsxs("div",{className:"flex gap-2",children:[b.jsxs("button",{onClick:()=>window.print(),className:"bg-[#D4B36D] text-slate-900 px-6 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2 shadow-lg",children:[b.jsx(uA,{size:18})," Imprimir"]}),b.jsxs("button",{onClick:()=>U(),className:"bg-[#163328] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-800 flex items-center gap-2 shadow-lg",children:[b.jsx(Wy,{size:18})," Cadastrar"]})]})]}),b.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-8 nao-imprime",children:[b.jsxs("div",{className:"relative flex-1",children:[b.jsx($y,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-[#D4B36D]",size:20}),b.jsx("input",{type:"text",placeholder:"Buscar irmão por nome...",className:"w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl outline-none focus:border-[#D4B36D] font-medium text-slate-700 bg-slate-50 focus:bg-white transition-colors",value:p,onChange:H=>g(H.target.value)})]}),b.jsxs("select",{className:"border-2 border-slate-200 px-6 py-3 rounded-xl outline-none focus:border-[#D4B36D] font-bold text-slate-700 bg-slate-50 uppercase tracking-widest text-xs cursor-pointer",value:d,onChange:H=>h(H.target.value),children:[b.jsx("option",{value:"Todos",children:"Todos"}),b.jsx("option",{value:"Comungante",children:"Comungantes"}),b.jsx("option",{value:"Não Comungante",children:"Não Comungantes"})]})]}),b.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-200 shadow-sm",children:b.jsxs("table",{className:"w-full text-left border-collapse",children:[b.jsx("thead",{children:b.jsxs("tr",{className:"bg-[#0f172a] text-white uppercase tracking-widest text-[10px] md:text-xs",children:[b.jsx("th",{className:"p-4 md:p-5 font-bold",children:"Nome do Membro"}),b.jsx("th",{className:"p-4 md:p-5 font-bold",children:"Celular"}),b.jsx("th",{className:"p-4 md:p-5 font-bold",children:"Status"}),b.jsx("th",{className:"p-4 md:p-5 font-bold",children:"Ofício"}),b.jsx("th",{className:"p-4 md:p-5 font-bold text-right nao-imprime",children:"Ações"})]})}),b.jsx("tbody",{children:G.map(H=>b.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50 transition-colors",children:[b.jsx("td",{className:"p-4 md:p-5 font-bold text-slate-800",children:H.nome}),b.jsx("td",{className:"p-4 md:p-5 text-slate-600 font-medium",children:H.celular}),b.jsx("td",{className:"p-4 md:p-5 font-bold",children:b.jsx("span",{className:H.status==="Comungante"?"text-green-700":"text-amber-600",children:H.status})}),b.jsx("td",{className:"p-4 md:p-5 text-slate-600 font-medium",children:H.oficio}),b.jsxs("td",{className:"p-4 md:p-5 text-right nao-imprime",children:[b.jsx("button",{onClick:()=>U(H),className:"text-slate-400 hover:text-blue-600 p-2",children:b.jsx(fA,{size:18})}),b.jsx("button",{onClick:()=>X(H.id),className:"text-slate-400 hover:text-red-600 p-2",children:b.jsx(vA,{size:18})})]})]},H.id))})]})}),b.jsxs("div",{className:"mt-4 text-slate-500 font-bold uppercase tracking-widest text-xs text-right nao-imprime",children:["Total listado: ",G.length," membros"]}),b.jsx(qr,{children:y&&b.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 nao-imprime",children:b.jsxs(Oo.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"bg-white rounded-[2rem] p-8 w-full max-w-lg shadow-2xl relative",children:[b.jsx("button",{onClick:()=>S(!1),className:"absolute top-6 right-6 text-slate-400 hover:text-red-500",children:b.jsx(Dd,{size:24})}),b.jsx("h3",{className:"text-2xl font-serif font-bold text-[#163328] mb-6",children:x?"Atualizar Membro":"Novo Membro"}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("div",{children:[b.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1",children:"Nome Completo"}),b.jsx("input",{type:"text",className:"w-full p-4 border-2 border-slate-200 rounded-xl outline-none focus:border-[#D4B36D] font-bold text-slate-800",value:q.nome,onChange:H=>V({...q,nome:H.target.value})})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1",children:"Celular"}),b.jsx("input",{type:"text",placeholder:"(74) 99999-9999",className:"w-full p-4 border-2 border-slate-200 rounded-xl outline-none focus:border-[#D4B36D] font-bold text-slate-800",value:q.celular,onChange:H=>V({...q,celular:H.target.value})})]}),b.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[b.jsxs("div",{children:[b.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1",children:"Status"}),b.jsxs("select",{className:"w-full p-4 border-2 border-slate-200 rounded-xl outline-none focus:border-[#D4B36D] font-bold text-slate-800",value:q.status,onChange:H=>V({...q,status:H.target.value}),children:[b.jsx("option",{children:"Comungante"}),b.jsx("option",{children:"Não Comungante"}),b.jsx("option",{children:"Não Membro"}),b.jsx("option",{children:"Em Disciplina"})]})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1",children:"Ofício"}),b.jsxs("select",{className:"w-full p-4 border-2 border-slate-200 rounded-xl outline-none focus:border-[#D4B36D] font-bold text-slate-800",value:q.oficio,onChange:H=>V({...q,oficio:H.target.value}),children:[b.jsx("option",{children:"Não oficial"}),b.jsx("option",{children:"Diácono"}),b.jsx("option",{children:"Presbítero"}),b.jsx("option",{children:"Presbítero em disponibilidade"})]})]})]})]}),b.jsxs("div",{className:"mt-8 flex gap-4",children:[b.jsx("button",{onClick:()=>S(!1),className:"flex-1 py-4 rounded-xl font-bold uppercase tracking-widest bg-slate-100 text-slate-600 hover:bg-slate-200",children:"Cancelar"}),b.jsx("button",{onClick:P,className:"flex-1 py-4 rounded-xl font-bold uppercase tracking-widest bg-[#163328] text-white hover:bg-[#D4B36D] hover:text-slate-900 transition-colors",children:"Salvar"})]})]})})})]})]})},yD=()=>b.jsxs("section",{id:"home",className:"relative h-screen flex items-center justify-center overflow-hidden",children:[b.jsxs("div",{className:"absolute inset-0 z-0",children:[b.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-fixed transform scale-105",style:{backgroundImage:"url('/fundo-igreja.jpg')"}}),b.jsx("div",{className:"absolute inset-0 bg-black/60"}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"})]}),b.jsxs("div",{className:"relative z-10 text-center px-6 mt-16 w-full flex flex-col items-center",children:[b.jsx(Oo.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"text-8xl md:text-[140px] font-serif font-bold text-white tracking-tighter mb-4",children:"IPVP"}),b.jsx(Oo.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},className:"text-sm md:text-xl font-bold uppercase tracking-[0.3em] text-[#D4B36D] mb-6",children:"Igreja Presbiteriana em Várzea do Poço - BA"}),b.jsx(Oo.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.9},className:"text-4xl md:text-6xl text-white mt-4",style:{fontFamily:'"Great Vibes", "Brush Script MT", cursive'},children:"Vivendo Um Novo Tempo"})]})]}),bD=()=>{const o=mD.flatMap(i=>i.announcements);return b.jsx("section",{id:"avisos",className:"py-24 px-6 bg-[#0f172a]",children:b.jsxs("div",{className:"max-w-6xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-16",children:[b.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-white",children:"Avisos da Igreja"}),b.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),b.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:o.map((i,r)=>b.jsxs("div",{className:"group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all",children:[i.image&&b.jsx("div",{className:"w-full bg-black/50 overflow-hidden",children:b.jsx("img",{src:i.image,alt:"Aviso",className:"w-full h-[400px] object-contain group-hover:scale-105 transition-transform duration-700"})}),b.jsxs("div",{className:"p-8 flex items-start gap-4",children:[b.jsx(pA,{size:24,className:"text-[#D4B36D] shrink-0 mt-1"}),b.jsx("p",{className:"text-lg font-serif italic text-white/90",children:i.text})]})]},r))})]})})},SD=()=>{const o=new Date().getMonth(),i=k.useMemo(()=>dD.filter(s=>s.month===o).sort((s,c)=>s.day-c.day),[o]);let r="";return o===3?r="/niverabril2026.jpg":o===4?r="/nivermaio2026.jpg":o===5&&(r="/niverjunho2026.jpg"),b.jsx("section",{id:"birthdays",className:"py-24 px-6 bg-white",children:b.jsxs("div",{className:"max-w-6xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-16",children:[b.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900",children:"Aniversariantes"}),b.jsxs("p",{className:"text-xl text-slate-500 uppercase tracking-widest mt-4",children:["Mês de ",pD(o)]}),b.jsx("div",{className:"w-16 h-1 bg-[#163328] mx-auto mt-6"})]}),r&&b.jsx("div",{className:"mb-16 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 max-w-4xl mx-auto",children:b.jsx("img",{src:r,className:"w-full h-auto hover:scale-105 transition-transform duration-700",onError:s=>s.currentTarget.style.display="none"})}),b.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:i.map((s,c)=>b.jsxs("div",{className:"px-6 py-4 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-[#163328] hover:text-white transition-colors group",children:[b.jsx("span",{className:"font-serif text-3xl font-bold text-[#D4B36D] mb-2",children:s.day}),b.jsx("span",{className:"font-bold text-slate-800 group-hover:text-white transition-colors",children:s.name})]},c))})]})})},xD=()=>{const[o,i]=k.useState(new Date().getMonth()),r=k.useMemo(()=>lv.find(s=>s.month===o),[o]);return b.jsx("section",{id:"agenda",className:"py-24 px-6 bg-slate-50",children:b.jsxs("div",{className:"max-w-5xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-16",children:[b.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900",children:"Agenda 2026"}),b.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),b.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-12",children:lv.map(s=>b.jsx("button",{onClick:()=>i(s.month),className:Cr("px-6 py-3 rounded-full text-xs font-bold transition-all uppercase tracking-widest",o===s.month?"bg-[#163328] text-white shadow-lg":"bg-white text-slate-500 hover:bg-slate-200"),children:s.name},s.month))}),b.jsx(qr,{mode:"wait",children:r&&b.jsxs(Oo.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"bg-white p-10 md:p-16 rounded-[2rem] shadow-xl border border-slate-100",children:[b.jsxs("div",{className:"text-center mb-10 border-b border-slate-100 pb-10",children:[b.jsx("p",{className:"font-bold text-sm uppercase tracking-[0.2em] text-[#D4B36D] mb-4",children:r.theme}),b.jsxs("p",{className:"text-2xl font-serif italic text-slate-800",children:['"',r.verse,'"']})]}),b.jsx("div",{className:"space-y-4 max-w-3xl mx-auto",children:r.events.map((s,c)=>b.jsxs("div",{className:"flex items-center gap-6 p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100",children:[b.jsx(Z2,{size:24,className:"text-[#163328]"}),b.jsx("p",{className:"text-slate-700 font-medium text-lg",children:s})]},c))})]},o)})]})})},TD=()=>b.jsx("section",{id:"leadership",className:"py-24 px-6 bg-white",children:b.jsxs("div",{className:"max-w-6xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-16",children:[b.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900",children:"Nossa Liderança"}),b.jsx("div",{className:"w-16 h-1 bg-[#163328] mx-auto mt-6"})]}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10 mb-20",children:[b.jsxs("div",{className:"group text-center",children:[b.jsxs("div",{className:"w-64 h-64 mx-auto rounded-full overflow-hidden mb-6 shadow-2xl relative",children:[b.jsx("img",{src:"/foto-pastor.jpg",className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",onError:o=>o.currentTarget.src="https://via.placeholder.com/300?text=Pastor"}),b.jsx("div",{className:"absolute inset-0 border-4 border-[#D4B36D] rounded-full z-10"})]}),b.jsx("h4",{className:"text-3xl font-serif font-bold text-slate-900 mb-2",children:bc.pastor.name}),b.jsx("p",{className:"text-sm uppercase tracking-widest text-[#D4B36D] font-bold mb-6",children:"Pastor Titular"}),b.jsxs("a",{href:`https://wa.me/55${bc.pastor.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest py-3 px-8 rounded-full bg-slate-900 text-white hover:bg-[#D4B36D] transition-colors",children:[b.jsx(kc,{size:14})," Falar"]})]}),bc.elders.map((o,i)=>b.jsxs("div",{className:"group text-center",children:[b.jsxs("div",{className:"w-64 h-64 mx-auto rounded-full overflow-hidden mb-6 shadow-2xl relative",children:[b.jsx("img",{src:o.name.includes("Adevaldo")?"/foto-adevaldo.jpg":"/foto-elique.jpg",className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",onError:r=>r.currentTarget.src="https://via.placeholder.com/300?text=Presbítero"}),b.jsx("div",{className:"absolute inset-0 border-4 border-[#163328] rounded-full z-10"})]}),b.jsx("h4",{className:"text-3xl font-serif font-bold text-slate-900 mb-2",children:o.name}),b.jsx("p",{className:"text-sm uppercase tracking-widest text-slate-500 font-bold mb-6",children:"Presbítero"}),b.jsxs("a",{href:`https://wa.me/55${o.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest py-3 px-8 rounded-full bg-slate-100 text-slate-900 hover:bg-[#163328] hover:text-white transition-colors",children:[b.jsx(kc,{size:14})," Falar"]})]},i))]})]})}),ED=()=>b.jsx("section",{id:"resources",className:"py-24 px-6 bg-[#0f172a] text-white",children:b.jsxs("div",{className:"max-w-6xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-16",children:[b.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold",children:"Crescimento Espiritual"}),b.jsx("p",{className:"text-slate-400 mt-4 uppercase tracking-widest",children:"Documentos & Manuais"}),b.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),b.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-16",children:[b.jsxs("a",{href:"/estatuto_ipvp_2026.pdf",download:!0,className:"flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all",children:[b.jsx(Ci,{size:18,className:"text-[#D4B36D]"})," Estatuto 2026"]}),b.jsxs("a",{href:"/guia_trabalho_saf.pdf",download:!0,className:"flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all",children:[b.jsx(Ci,{size:18,className:"text-[#D4B36D]"})," Guia SAF"]}),b.jsxs("a",{href:"/guia_trabalho_uph.pdf",download:!0,className:"flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all",children:[b.jsx(Ci,{size:18,className:"text-[#D4B36D]"})," Guia UPH"]}),b.jsxs("a",{href:"/manual_unificado.pdf",download:!0,className:"flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm backdrop-blur-sm transition-all",children:[b.jsx(Ci,{size:18,className:"text-[#D4B36D]"})," Manual Unificado"]}),b.jsxs("a",{href:"/manual_presbiteriano_2025.pdf",download:!0,className:"flex items-center gap-3 px-6 py-4 bg-[#D4B36D] text-slate-900 rounded-xl font-bold text-sm transition-all shadow-lg",children:[b.jsx(Ci,{size:18})," Manual IPB"]})]})]})}),AD=()=>{const[o,i]=k.useState({book:"João",cap:"3",ver:"16"}),r=s=>{s.preventDefault(),window.open(`https://www.bibliaonline.com.br/nvi/${o.book.toLowerCase()}/${o.cap}/${o.ver}`,"_blank")};return b.jsx("section",{id:"bible",className:"py-24 px-6 bg-slate-50",children:b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-12",children:[b.jsx(J2,{size:48,className:"mx-auto mb-6 text-[#163328]"}),b.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900",children:"Bíblia Sagrada"}),b.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),b.jsxs("form",{onSubmit:r,className:"bg-white p-8 rounded-[2rem] shadow-2xl flex flex-col md:flex-row gap-4 border border-slate-100",children:[b.jsx("select",{value:o.book,onChange:s=>i({...o,book:s.target.value}),className:"flex-1 p-4 rounded-xl border border-slate-200 outline-none text-lg font-medium text-slate-700",children:hD.map(s=>b.jsx("option",{value:s,children:s},s))}),b.jsx("input",{type:"number",placeholder:"Cap",value:o.cap,onChange:s=>i({...o,cap:s.target.value}),className:"w-full md:w-24 p-4 rounded-xl border border-slate-200 outline-none text-lg font-medium text-center"}),b.jsx("input",{type:"number",placeholder:"Ver",value:o.ver,onChange:s=>i({...o,ver:s.target.value}),className:"w-full md:w-24 p-4 rounded-xl border border-slate-200 outline-none text-lg font-medium text-center"}),b.jsx("button",{type:"submit",className:"px-8 py-4 bg-[#163328] text-white rounded-xl font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors",children:"Ler"})]})]})})},DD=()=>{const[o,i]=k.useState(""),[r,s]=k.useState(null),c=Array.isArray(uv)?uv:[],f=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),d=o.length>2?c.filter(h=>`${h.title} ${h.lyrics}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(f)):[];return b.jsx("section",{id:"lyrics",className:"py-24 px-6 bg-white",children:b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-16",children:[b.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900",children:"Louvores"}),b.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),r?b.jsxs("div",{className:"bg-slate-50 p-10 md:p-16 rounded-[3rem]",children:[b.jsxs("div",{className:"flex justify-between items-start mb-10 border-b border-slate-200 pb-8",children:[b.jsx("h3",{className:"text-4xl font-serif font-bold text-[#163328]",children:r.title}),b.jsx("button",{onClick:()=>{s(null),i("")},className:"p-4 bg-white rounded-full text-slate-500 shadow-sm hover:text-red-500",children:b.jsx(Dd,{size:24})})]}),b.jsx("pre",{className:"whitespace-pre-wrap font-sans text-xl md:text-2xl leading-relaxed text-slate-700 font-medium",children:r.lyrics})]}):b.jsxs("div",{children:[b.jsxs("div",{className:"relative mb-10 shadow-2xl rounded-2xl",children:[b.jsx($y,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-400",size:28}),b.jsx("input",{type:"text",placeholder:"Digite um trecho ou título...",value:o,onChange:h=>i(h.target.value),className:"w-full pl-20 pr-6 py-6 rounded-2xl border-none outline-none font-serif text-2xl text-slate-800 bg-slate-50 focus:bg-white transition-colors"})]}),d.length>0&&b.jsx("div",{className:"space-y-4",children:d.map((h,p)=>b.jsxs("button",{onClick:()=>s(h),className:"w-full text-left p-6 rounded-2xl border border-slate-100 hover:border-[#D4B36D] hover:shadow-lg transition-all flex items-center justify-between group bg-white",children:[b.jsx("span",{className:"font-serif text-xl font-bold text-slate-800 group-hover:text-[#163328]",children:h.title}),b.jsx(F2,{className:"text-slate-300 group-hover:text-[#D4B36D]"})]},p))})]})]})})},CD=()=>b.jsx("section",{id:"curso",className:"py-24 px-6 bg-[#0f172a]",children:b.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[b.jsxs("div",{className:"text-center mb-16",children:[b.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-white",children:"Preparando-se para Servir"}),b.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mx-auto mt-6"})]}),b.jsx("div",{className:"relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10",children:b.jsx("iframe",{className:"w-full h-full",src:"https://www.youtube.com/embed/yAu3BtPWi4s",title:"Curso",frameBorder:"0",allowFullScreen:!0})})]})}),MD=()=>b.jsx("section",{id:"giving",className:"py-24 px-6 bg-slate-50",children:b.jsxs("div",{className:"max-w-4xl mx-auto text-center bg-white rounded-[3rem] p-16 shadow-2xl border border-slate-100 relative overflow-hidden",children:[b.jsx("div",{className:"absolute top-0 left-0 w-full h-2 bg-[#D4B36D]"}),b.jsx(I2,{size:56,className:"mx-auto mb-8 text-[#163328]"}),b.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8",children:"Dízimos e Ofertas"}),b.jsx("div",{className:"bg-[#0f172a] text-white py-6 px-10 rounded-2xl inline-block font-mono text-2xl md:text-3xl font-bold tracking-widest mb-8 shadow-xl",children:"PIX: 03.507.028/0001-08"}),b.jsx("p",{className:"text-lg font-bold uppercase tracking-[0.2em] text-[#D4B36D]",children:"Banco SICOOB | Ag: 3289 | CC: 118524"})]})}),ND=()=>{const[o,i]=k.useState({name:"",contact:"",message:""}),r=s=>{s.preventDefault();const c=`*Site*%0ANome: ${o.name}%0AContato: ${o.contact}%0A*Msg:* ${o.message}`;window.open(`https://wa.me/5574999829797?text=${c}`,"_blank")};return b.jsx("section",{id:"contact",className:"py-24 px-6 bg-white",children:b.jsxs("div",{className:"max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center",children:[b.jsxs("div",{children:[b.jsx("h2",{className:"text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6",children:"Fale Conosco"}),b.jsx("div",{className:"w-16 h-1 bg-[#D4B36D] mb-12"}),b.jsxs("form",{onSubmit:r,className:"space-y-6",children:[b.jsx("input",{type:"text",required:!0,placeholder:"Seu Nome",className:"w-full p-6 bg-slate-50 rounded-2xl border-none outline-none font-medium text-slate-800 focus:ring-2 focus:ring-[#D4B36D]",value:o.name,onChange:s=>i({...o,name:s.target.value})}),b.jsx("input",{type:"text",required:!0,placeholder:"Seu Telefone",className:"w-full p-6 bg-slate-50 rounded-2xl border-none outline-none font-medium text-slate-800 focus:ring-2 focus:ring-[#D4B36D]",value:o.contact,onChange:s=>i({...o,contact:s.target.value})}),b.jsx("textarea",{required:!0,rows:5,placeholder:"Sua Mensagem...",className:"w-full p-6 bg-slate-50 rounded-2xl border-none resize-none outline-none font-medium text-slate-800 focus:ring-2 focus:ring-[#D4B36D]",value:o.message,onChange:s=>i({...o,message:s.target.value})}),b.jsx("button",{type:"submit",className:"w-full py-6 bg-[#0f172a] text-white rounded-2xl font-bold text-lg tracking-widest uppercase hover:bg-[#163328] transition-colors",children:"Enviar WhatsApp"})]})]}),b.jsxs("div",{className:"rounded-[3rem] h-full min-h-[500px] text-white p-12 flex flex-col items-center justify-center relative overflow-hidden",children:[b.jsx("div",{className:"absolute inset-0 bg-[#163328]"}),b.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at center, white 1px, transparent 1px)",backgroundSize:"20px 20px"}}),b.jsxs("div",{className:"relative z-10 text-center",children:[b.jsx(oA,{size:64,className:"mx-auto mb-8 text-[#D4B36D]"}),b.jsx("h3",{className:"text-4xl font-serif mb-6 font-bold",children:"Localização"}),b.jsxs("p",{className:"text-white/80 mb-12 text-xl font-medium",children:["R. Durval Gama, 17",b.jsx("br",{}),"Várzea do Poço - BA"]}),b.jsx("a",{href:"https://www.google.com/maps/search/?api=1&query=R.+Durval+Gama,+17,+Várzea+do+Poço+-+BA,+44715-000",target:"_blank",rel:"noreferrer",className:"px-12 py-5 bg-[#D4B36D] text-slate-900 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl",children:"Abrir Mapa"})]})]})]})})},zD=()=>{const[o,i]=k.useState(!1),r=[{icon:b.jsx(SA,{size:24}),href:"https://www.youtube.com/@IPBVARZEADOPOCO",color:"bg-red-600"},{icon:b.jsx(tA,{size:24}),href:"https://www.instagram.com/ipvarzeapoco",color:"bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"},{icon:b.jsx(kc,{size:24}),href:"https://wa.me/5574999829797",color:"bg-green-500"}];return b.jsxs("div",{className:"fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4",children:[b.jsx(qr,{children:o&&r.map((s,c)=>b.jsx(Oo.a,{href:s.href,target:"_blank",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:Cr("w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white",s.color),children:s.icon},c))}),b.jsx("button",{onClick:()=>i(!o),className:"w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all",style:{backgroundColor:o?"#0f172a":fD.gold},children:b.jsx(Wy,{size:36,className:Cr(o&&"rotate-45")})})]})};function qD(){const[o,i]=k.useState("home"),[r,s]=k.useState(!1),[c,f]=k.useState(!1);k.useEffect(()=>{window.scrollTo(0,0)},[o]),k.useEffect(()=>{const h=()=>s(window.scrollY>50);return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const d=[{name:"Avisos",href:"#avisos"},{name:"Agenda",href:"#agenda"},{name:"Bíblia",href:"#bible"},{name:"Louvores",href:"#lyrics"},{name:"Dízimos",href:"#giving"}];return b.jsxs("div",{className:"min-h-screen font-sans selection:bg-[#D4B36D] selection:text-[#0f172a]",children:[b.jsxs("nav",{className:Cr("fixed top-0 left-0 right-0 z-50 transition-all duration-500",r?"bg-[#0f172a]/95 backdrop-blur-md py-4 shadow-2xl":"bg-transparent py-8"),children:[b.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex items-center justify-between",children:[b.jsxs("div",{className:"flex flex-col cursor-pointer",onClick:()=>i("home"),children:[b.jsx("span",{className:"font-serif text-3xl font-bold leading-none text-white",children:"IPVP"}),b.jsx("span",{className:"text-[9px] uppercase font-bold tracking-widest text-[#D4B36D]",children:"Várzea do Poço"})]}),o==="home"&&b.jsx("div",{className:"hidden lg:flex items-center gap-8",children:d.map((h,p)=>b.jsx("a",{href:h.href,className:"text-white/80 hover:text-[#D4B36D] text-xs font-bold uppercase tracking-[0.2em] transition-colors",children:h.name},p))}),b.jsxs("div",{className:"hidden lg:flex items-center gap-4",children:[o==="home"&&b.jsx("a",{href:"#contact",className:"px-6 py-2.5 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all",children:"Contato"}),b.jsx("button",{onClick:()=>i(o==="home"?"membros":"home"),className:"px-6 py-2.5 rounded-full bg-[#D4B36D] text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2",children:o==="home"?b.jsxs(b.Fragment,{children:[b.jsx(Yc,{size:16})," Membresia"]}):"← Voltar ao Portal"})]}),b.jsx("button",{className:"lg:hidden text-white",onClick:()=>f(!c),children:c?b.jsx(Dd,{size:28}):b.jsx(iA,{size:28})})]}),b.jsx(qr,{children:c&&b.jsxs(Oo.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"absolute top-full left-0 right-0 bg-[#0f172a] shadow-2xl p-6 flex flex-col gap-6 lg:hidden border-t border-white/10",children:[o==="home"&&d.map(h=>b.jsx("a",{href:h.href,onClick:()=>f(!1),className:"text-xl font-serif text-white/80 hover:text-[#D4B36D] border-b border-white/10 pb-4",children:h.name},h.name)),b.jsx("button",{onClick:()=>{i(o==="home"?"membros":"home"),f(!1)},className:"w-full px-6 py-4 rounded-xl bg-[#D4B36D] text-slate-900 font-bold uppercase tracking-widest flex justify-center items-center gap-2",children:o==="home"?"Acesso Membresia":"Voltar ao Portal"})]})})]}),b.jsx("main",{children:o==="home"?b.jsxs("div",{className:"bg-white",children:[b.jsx(yD,{}),b.jsx(bD,{}),b.jsx(SD,{}),b.jsx(xD,{}),b.jsx(TD,{}),b.jsx(ED,{}),b.jsx(AD,{}),b.jsx(DD,{}),b.jsx(CD,{}),b.jsx(MD,{}),b.jsx(ND,{})]}):b.jsx("div",{className:"bg-slate-50 pt-32 pb-24 px-6 min-h-screen",children:b.jsx("div",{className:"max-w-7xl mx-auto",children:b.jsx(vD,{})})})}),b.jsxs("footer",{className:"py-16 text-center bg-[#0f172a] text-white",children:[b.jsx(Yc,{size:48,className:"mx-auto mb-6 text-[#D4B36D]"}),b.jsx("p",{className:"font-serif font-bold text-3xl mb-2",children:"Igreja Presbiteriana de Várzea do Poço"}),b.jsx("p",{className:"text-xs font-semibold text-white/40 tracking-[0.2em] uppercase mb-8",children:"Fidelidade à Palavra de Deus e Compromisso com a Verdade"}),b.jsx("div",{className:"h-1 w-16 bg-[#D4B36D] mx-auto rounded-full"})]}),b.jsx(zD,{})]})}JS.createRoot(document.getElementById("root")).render(b.jsx(k.StrictMode,{children:b.jsx(qD,{})}));
