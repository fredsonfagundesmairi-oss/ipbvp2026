(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(c){if(c.ep)return;c.ep=!0;const m=s(c);fetch(c.href,m)}})();var Xu={exports:{}},Ei={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function zS(){if(Ep)return Ei;Ep=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(r,c,m){var f=null;if(m!==void 0&&(f=""+m),c.key!==void 0&&(f=""+c.key),"key"in c){m={};for(var h in c)h!=="key"&&(m[h]=c[h])}else m=c;return c=m.ref,{$$typeof:n,type:r,key:f,ref:c!==void 0?c:null,props:m}}return Ei.Fragment=i,Ei.jsx=s,Ei.jsxs=s,Ei}var xp;function OS(){return xp||(xp=1,Xu.exports=zS()),Xu.exports}var Q=OS(),ku={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function qS(){if(Ap)return ue;Ap=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function C(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,B={};function L(x,j,Z){this.props=x,this.context=j,this.refs=B,this.updater=Z||q}L.prototype.isReactComponent={},L.prototype.setState=function(x,j){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,j,"setState")},L.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function k(){}k.prototype=L.prototype;function G(x,j,Z){this.props=x,this.context=j,this.refs=B,this.updater=Z||q}var J=G.prototype=new k;J.constructor=G,_(J,L.prototype),J.isPureReactComponent=!0;var P=Array.isArray;function oe(){}var F={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function ie(x,j,Z){var K=Z.ref;return{$$typeof:n,type:x,key:j,ref:K!==void 0?K:null,props:Z}}function Ae(x,j){return ie(x.type,j,x.props)}function je(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function Ne(x){var j={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Z){return j[Z]})}var mt=/\/+/g;function rt(x,j){return typeof x=="object"&&x!==null&&x.key!=null?Ne(""+x.key):j.toString(36)}function Ge(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(oe,oe):(x.status="pending",x.then(function(j){x.status==="pending"&&(x.status="fulfilled",x.value=j)},function(j){x.status==="pending"&&(x.status="rejected",x.reason=j)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function R(x,j,Z,K,ne){var re=typeof x;(re==="undefined"||re==="boolean")&&(x=null);var be=!1;if(x===null)be=!0;else switch(re){case"bigint":case"string":case"number":be=!0;break;case"object":switch(x.$$typeof){case n:case i:be=!0;break;case y:return be=x._init,R(be(x._payload),j,Z,K,ne)}}if(be)return ne=ne(x),be=K===""?"."+rt(x,0):K,P(ne)?(Z="",be!=null&&(Z=be.replace(mt,"$&/")+"/"),R(ne,j,Z,"",function(Da){return Da})):ne!=null&&(je(ne)&&(ne=Ae(ne,Z+(ne.key==null||x&&x.key===ne.key?"":(""+ne.key).replace(mt,"$&/")+"/")+be)),j.push(ne)),1;be=0;var $e=K===""?".":K+":";if(P(x))for(var me=0;me<x.length;me++)K=x[me],re=$e+rt(K,me),be+=R(K,j,Z,re,ne);else if(me=C(x),typeof me=="function")for(x=me.call(x),me=0;!(K=x.next()).done;)K=K.value,re=$e+rt(K,me++),be+=R(K,j,Z,re,ne);else if(re==="object"){if(typeof x.then=="function")return R(Ge(x),j,Z,K,ne);throw j=String(x),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return be}function H(x,j,Z){if(x==null)return x;var K=[],ne=0;return R(x,K,"","",function(re){return j.call(Z,re,ne++)}),K}function W(x){if(x._status===-1){var j=x._result;j=j(),j.then(function(Z){(x._status===0||x._status===-1)&&(x._status=1,x._result=Z)},function(Z){(x._status===0||x._status===-1)&&(x._status=2,x._result=Z)}),x._status===-1&&(x._status=0,x._result=j)}if(x._status===1)return x._result.default;throw x._result}var de=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},Y={map:H,forEach:function(x,j,Z){H(x,function(){j.apply(this,arguments)},Z)},count:function(x){var j=0;return H(x,function(){j++}),j},toArray:function(x){return H(x,function(j){return j})||[]},only:function(x){if(!je(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ue.Activity=b,ue.Children=Y,ue.Component=L,ue.Fragment=s,ue.Profiler=c,ue.PureComponent=G,ue.StrictMode=r,ue.Suspense=p,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ue.__COMPILER_RUNTIME={__proto__:null,c:function(x){return F.H.useMemoCache(x)}},ue.cache=function(x){return function(){return x.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(x,j,Z){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var K=_({},x.props),ne=x.key;if(j!=null)for(re in j.key!==void 0&&(ne=""+j.key),j)!U.call(j,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&j.ref===void 0||(K[re]=j[re]);var re=arguments.length-2;if(re===1)K.children=Z;else if(1<re){for(var be=Array(re),$e=0;$e<re;$e++)be[$e]=arguments[$e+2];K.children=be}return ie(x.type,ne,K)},ue.createContext=function(x){return x={$$typeof:f,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:m,_context:x},x},ue.createElement=function(x,j,Z){var K,ne={},re=null;if(j!=null)for(K in j.key!==void 0&&(re=""+j.key),j)U.call(j,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ne[K]=j[K]);var be=arguments.length-2;if(be===1)ne.children=Z;else if(1<be){for(var $e=Array(be),me=0;me<be;me++)$e[me]=arguments[me+2];ne.children=$e}if(x&&x.defaultProps)for(K in be=x.defaultProps,be)ne[K]===void 0&&(ne[K]=be[K]);return ie(x,re,ne)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(x){return{$$typeof:h,render:x}},ue.isValidElement=je,ue.lazy=function(x){return{$$typeof:y,_payload:{_status:-1,_result:x},_init:W}},ue.memo=function(x,j){return{$$typeof:g,type:x,compare:j===void 0?null:j}},ue.startTransition=function(x){var j=F.T,Z={};F.T=Z;try{var K=x(),ne=F.S;ne!==null&&ne(Z,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(oe,de)}catch(re){de(re)}finally{j!==null&&Z.types!==null&&(j.types=Z.types),F.T=j}},ue.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ue.use=function(x){return F.H.use(x)},ue.useActionState=function(x,j,Z){return F.H.useActionState(x,j,Z)},ue.useCallback=function(x,j){return F.H.useCallback(x,j)},ue.useContext=function(x){return F.H.useContext(x)},ue.useDebugValue=function(){},ue.useDeferredValue=function(x,j){return F.H.useDeferredValue(x,j)},ue.useEffect=function(x,j){return F.H.useEffect(x,j)},ue.useEffectEvent=function(x){return F.H.useEffectEvent(x)},ue.useId=function(){return F.H.useId()},ue.useImperativeHandle=function(x,j,Z){return F.H.useImperativeHandle(x,j,Z)},ue.useInsertionEffect=function(x,j){return F.H.useInsertionEffect(x,j)},ue.useLayoutEffect=function(x,j){return F.H.useLayoutEffect(x,j)},ue.useMemo=function(x,j){return F.H.useMemo(x,j)},ue.useOptimistic=function(x,j){return F.H.useOptimistic(x,j)},ue.useReducer=function(x,j,Z){return F.H.useReducer(x,j,Z)},ue.useRef=function(x){return F.H.useRef(x)},ue.useState=function(x){return F.H.useState(x)},ue.useSyncExternalStore=function(x,j,Z){return F.H.useSyncExternalStore(x,j,Z)},ue.useTransition=function(){return F.H.useTransition()},ue.version="19.2.4",ue}var Dp;function Gc(){return Dp||(Dp=1,ku.exports=qS()),ku.exports}var X=Gc(),Zu={exports:{}},xi={},Ju={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function RS(){return Mp||(Mp=1,(function(n){function i(R,H){var W=R.length;R.push(H);e:for(;0<W;){var de=W-1>>>1,Y=R[de];if(0<c(Y,H))R[de]=H,R[W]=Y,W=de;else break e}}function s(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var H=R[0],W=R.pop();if(W!==H){R[0]=W;e:for(var de=0,Y=R.length,x=Y>>>1;de<x;){var j=2*(de+1)-1,Z=R[j],K=j+1,ne=R[K];if(0>c(Z,W))K<Y&&0>c(ne,Z)?(R[de]=ne,R[K]=W,de=K):(R[de]=Z,R[j]=W,de=j);else if(K<Y&&0>c(ne,W))R[de]=ne,R[K]=W,de=K;else break e}}return H}function c(R,H){var W=R.sortIndex-H.sortIndex;return W!==0?W:R.id-H.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var p=[],g=[],y=1,b=null,S=3,C=!1,q=!1,_=!1,B=!1,L=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function J(R){for(var H=s(g);H!==null;){if(H.callback===null)r(g);else if(H.startTime<=R)r(g),H.sortIndex=H.expirationTime,i(p,H);else break;H=s(g)}}function P(R){if(_=!1,J(R),!q)if(s(p)!==null)q=!0,oe||(oe=!0,Ne());else{var H=s(g);H!==null&&Ge(P,H.startTime-R)}}var oe=!1,F=-1,U=5,ie=-1;function Ae(){return B?!0:!(n.unstable_now()-ie<U)}function je(){if(B=!1,oe){var R=n.unstable_now();ie=R;var H=!0;try{e:{q=!1,_&&(_=!1,k(F),F=-1),C=!0;var W=S;try{t:{for(J(R),b=s(p);b!==null&&!(b.expirationTime>R&&Ae());){var de=b.callback;if(typeof de=="function"){b.callback=null,S=b.priorityLevel;var Y=de(b.expirationTime<=R);if(R=n.unstable_now(),typeof Y=="function"){b.callback=Y,J(R),H=!0;break t}b===s(p)&&r(p),J(R)}else r(p);b=s(p)}if(b!==null)H=!0;else{var x=s(g);x!==null&&Ge(P,x.startTime-R),H=!1}}break e}finally{b=null,S=W,C=!1}H=void 0}}finally{H?Ne():oe=!1}}}var Ne;if(typeof G=="function")Ne=function(){G(je)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,rt=mt.port2;mt.port1.onmessage=je,Ne=function(){rt.postMessage(null)}}else Ne=function(){L(je,0)};function Ge(R,H){F=L(function(){R(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(R){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var W=S;S=H;try{return R()}finally{S=W}},n.unstable_requestPaint=function(){B=!0},n.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=S;S=R;try{return H()}finally{S=W}},n.unstable_scheduleCallback=function(R,H,W){var de=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?de+W:de):W=de,R){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=W+Y,R={id:y++,callback:H,priorityLevel:R,startTime:W,expirationTime:Y,sortIndex:-1},W>de?(R.sortIndex=W,i(g,R),s(p)===null&&R===s(g)&&(_?(k(F),F=-1):_=!0,Ge(P,W-de))):(R.sortIndex=Y,i(p,R),q||C||(q=!0,oe||(oe=!0,Ne()))),R},n.unstable_shouldYield=Ae,n.unstable_wrapCallback=function(R){var H=S;return function(){var W=S;S=H;try{return R.apply(this,arguments)}finally{S=W}}}})(Ku)),Ku}var Cp;function NS(){return Cp||(Cp=1,Ju.exports=RS()),Ju.exports}var Fu={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function VS(){if(zp)return lt;zp=1;var n=Gc();function i(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function m(p,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:p,containerInfo:g,implementation:y}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,lt.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return m(p,g,null,y)},lt.flushSync=function(p){var g=f.T,y=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=g,r.p=y,r.d.f()}},lt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},lt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},lt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:C}):y==="script"&&r.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},lt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},lt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin);r.d.L(p,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},lt.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=h(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},lt.requestFormReset=function(p){r.d.r(p)},lt.unstable_batchedUpdates=function(p,g){return p(g)},lt.useFormState=function(p,g,y){return f.H.useFormState(p,g,y)},lt.useFormStatus=function(){return f.H.useHostTransitionStatus()},lt.version="19.2.4",lt}var Op;function wS(){if(Op)return Fu.exports;Op=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Fu.exports=VS(),Fu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function jS(){if(qp)return xi;qp=1;var n=NS(),i=Gc(),s=wS();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(m(e)!==e)throw Error(r(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,o=t;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){a=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return p(l),e;if(u===o)return p(l),t;u=u.sibling}throw Error(r(188))}if(a.return!==o.return)a=l,o=u;else{for(var d=!1,v=l.child;v;){if(v===a){d=!0,a=l,o=u;break}if(v===o){d=!0,o=l,a=u;break}v=v.sibling}if(!d){for(v=u.child;v;){if(v===a){d=!0,a=u,o=l;break}if(v===o){d=!0,o=u,a=l;break}v=v.sibling}if(!d)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),G=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),Ae=Symbol.for("react.memo_cache_sentinel"),je=Symbol.iterator;function Ne(e){return e===null||typeof e!="object"?null:(e=je&&e[je]||e["@@iterator"],typeof e=="function"?e:null)}var mt=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case L:return"Profiler";case B:return"StrictMode";case P:return"Suspense";case oe:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case G:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:rt(e.type)||"Memo";case U:t=e._payload,e=e._init;try{return rt(e(t))}catch{}}return null}var Ge=Array.isArray,R=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},de=[],Y=-1;function x(e){return{current:e}}function j(e){0>Y||(e.current=de[Y],de[Y]=null,Y--)}function Z(e,t){Y++,de[Y]=e.current,e.current=t}var K=x(null),ne=x(null),re=x(null),be=x(null);function $e(e,t){switch(Z(re,t),Z(ne,e),Z(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Xh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Xh(t),e=kh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(K),Z(K,e)}function me(){j(K),j(ne),j(re)}function Da(e){e.memoizedState!==null&&Z(be,e);var t=K.current,a=kh(t,e.type);t!==a&&(Z(ne,e),Z(K,a))}function oa(e){ne.current===e&&(j(K),j(ne)),be.current===e&&(j(be),yi._currentValue=W)}var Ma,Nn;function Rt(e){if(Ma===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ma=t&&t[1]||"",Nn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ma+e+Nn}var zr=!1;function Or(e,t){if(!e||zr)return"";zr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(O){var z=O}Reflect.construct(e,[],w)}else{try{w.call()}catch(O){z=O}e.call(w.prototype)}}else{try{throw Error()}catch(O){z=O}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(O){if(O&&z&&typeof O.stack=="string")return[O.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),d=u[0],v=u[1];if(d&&v){var T=d.split(`
`),M=v.split(`
`);for(l=o=0;o<T.length&&!T[o].includes("DetermineComponentFrameRoot");)o++;for(;l<M.length&&!M[l].includes("DetermineComponentFrameRoot");)l++;if(o===T.length||l===M.length)for(o=T.length-1,l=M.length-1;1<=o&&0<=l&&T[o]!==M[l];)l--;for(;1<=o&&0<=l;o--,l--)if(T[o]!==M[l]){if(o!==1||l!==1)do if(o--,l--,0>l||T[o]!==M[l]){var N=`
`+T[o].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=o&&0<=l);break}}}finally{zr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Rt(a):""}function i0(e,t){switch(e.tag){case 26:case 27:case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return e.child!==t&&t!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return Or(e.type,!1);case 11:return Or(e.type.render,!1);case 1:return Or(e.type,!0);case 31:return Rt("Activity");default:return""}}function Ef(e){try{var t="",a=null;do t+=i0(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qr=Object.prototype.hasOwnProperty,Rr=n.unstable_scheduleCallback,Nr=n.unstable_cancelCallback,s0=n.unstable_shouldYield,r0=n.unstable_requestPaint,Tt=n.unstable_now,l0=n.unstable_getCurrentPriorityLevel,xf=n.unstable_ImmediatePriority,Af=n.unstable_UserBlockingPriority,Hi=n.unstable_NormalPriority,u0=n.unstable_LowPriority,Df=n.unstable_IdlePriority,c0=n.log,f0=n.unstable_setDisableYieldValue,qo=null,Et=null;function Ca(e){if(typeof c0=="function"&&f0(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(qo,e)}catch{}}var xt=Math.clz32?Math.clz32:h0,d0=Math.log,m0=Math.LN2;function h0(e){return e>>>=0,e===0?32:31-(d0(e)/m0|0)|0}var Gi=256,Qi=262144,Yi=4194304;function rn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pi(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var v=o&134217727;return v!==0?(o=v&~u,o!==0?l=rn(o):(d&=v,d!==0?l=rn(d):a||(a=v&~e,a!==0&&(l=rn(a))))):(v=o&~u,v!==0?l=rn(v):d!==0?l=rn(d):a||(a=o&~e,a!==0&&(l=rn(a)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:l}function Ro(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function p0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mf(){var e=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),e}function Vr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function No(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function g0(e,t,a,o,l,u){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var v=e.entanglements,T=e.expirationTimes,M=e.hiddenUpdates;for(a=d&~a;0<a;){var N=31-xt(a),w=1<<N;v[N]=0,T[N]=-1;var z=M[N];if(z!==null)for(M[N]=null,N=0;N<z.length;N++){var O=z[N];O!==null&&(O.lane&=-536870913)}a&=~w}o!==0&&Cf(e,o,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(d&~t))}function Cf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-xt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function zf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-xt(a),l=1<<o;l&t|e[o]&t&&(e[o]|=t),a&=~l}}function Of(e,t){var a=t&-t;return a=(a&42)!==0?1:wr(a),(a&(e.suspendedLanes|t))!==0?0:a}function wr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qf(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:pp(e.type))}function Rf(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var za=Math.random().toString(36).slice(2),tt="__reactFiber$"+za,ht="__reactProps$"+za,Vn="__reactContainer$"+za,Ur="__reactEvents$"+za,v0="__reactListeners$"+za,y0="__reactHandles$"+za,Nf="__reactResources$"+za,Vo="__reactMarker$"+za;function _r(e){delete e[tt],delete e[ht],delete e[Ur],delete e[v0],delete e[y0]}function wn(e){var t=e[tt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Vn]||a[tt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ih(e);e!==null;){if(a=e[tt])return a;e=Ih(e)}return t}e=a,a=e.parentNode}return null}function jn(e){if(e=e[tt]||e[Vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Un(e){var t=e[Nf];return t||(t=e[Nf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[Vo]=!0}var Vf=new Set,wf={};function ln(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(wf[e]=t,e=0;e<t.length;e++)Vf.add(t[e])}var b0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jf={},Uf={};function S0(e){return qr.call(Uf,e)?!0:qr.call(jf,e)?!1:b0.test(e)?Uf[e]=!0:(jf[e]=!0,!1)}function Xi(e,t,a){if(S0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ki(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ia(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T0(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){a=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){if(!e._valueTracker){var t=_f(e)?"checked":"value";e._valueTracker=T0(e,t,""+e[t])}}function Bf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=_f(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var E0=/[\n"\\]/g;function Vt(e){return e.replace(E0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lr(e,t,a,o,l,u,d,v){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Hr(e,d,Nt(t)):a!=null?Hr(e,d,Nt(a)):o!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Nt(v):e.removeAttribute("name")}function Lf(e,t,a,o,l,u,d,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Br(e);return}a=a!=null?""+Nt(a):"",t=t!=null?""+Nt(t):a,v||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=v?e.checked:!!o,e.defaultChecked=!!o,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Br(e)}function Hr(e,t,a){t==="number"&&Zi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Bn(e,t,a,o){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Nt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Hf(e,t,a){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Nt(a):""}function Gf(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(r(92));if(Ge(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Nt(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Br(e)}function Ln(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var x0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qf(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||x0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Yf(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var l in t)o=t[l],t.hasOwnProperty(l)&&a[l]!==o&&Qf(e,l,o)}else for(var u in t)t.hasOwnProperty(u)&&Qf(e,u,t[u])}function Gr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ji(e){return D0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var Qr=null;function Yr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hn=null,Gn=null;function Pf(e){var t=jn(e);if(t&&(e=t.stateNode)){var a=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(Lr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var l=o[ht]||null;if(!l)throw Error(r(90));Lr(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&Bf(o)}break e;case"textarea":Hf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Bn(e,!!a.multiple,t,!1)}}}var Pr=!1;function Xf(e,t,a){if(Pr)return e(t,a);Pr=!0;try{var o=e(t);return o}finally{if(Pr=!1,(Hn!==null||Gn!==null)&&(js(),Hn&&(t=Hn,e=Gn,Gn=Hn=null,Pf(t),e)))for(t=0;t<e.length;t++)Pf(e[t])}}function jo(e,t){var a=e.stateNode;if(a===null)return null;var o=a[ht]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xr=!1;if(ra)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Xr=!1}var Oa=null,kr=null,Ki=null;function kf(){if(Ki)return Ki;var e,t=kr,a=t.length,o,l="value"in Oa?Oa.value:Oa.textContent,u=l.length;for(e=0;e<a&&t[e]===l[e];e++);var d=a-e;for(o=1;o<=d&&t[a-o]===l[u-o];o++);return Ki=l.slice(e,1<o?1-o:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function Zf(){return!1}function pt(e){function t(a,o,l,u,d){this._reactName=a,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(a=e[v],this[v]=a?a(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Wi:Zf,this.isPropagationStopped=Zf,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=pt(un),_o=b({},un,{view:0,detail:0}),M0=pt(_o),Zr,Jr,Bo,Ii=b({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bo&&(Bo&&e.type==="mousemove"?(Zr=e.screenX-Bo.screenX,Jr=e.screenY-Bo.screenY):Jr=Zr=0,Bo=e),Zr)},movementY:function(e){return"movementY"in e?e.movementY:Jr}}),Jf=pt(Ii),C0=b({},Ii,{dataTransfer:0}),z0=pt(C0),O0=b({},_o,{relatedTarget:0}),Kr=pt(O0),q0=b({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),R0=pt(q0),N0=b({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V0=pt(N0),w0=b({},un,{data:0}),Kf=pt(w0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_0[e])?!!t[e]:!1}function Fr(){return B0}var L0=b({},_o,{key:function(e){if(e.key){var t=j0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fr,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),H0=pt(L0),G0=b({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=pt(G0),Q0=b({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fr}),Y0=pt(Q0),P0=b({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=pt(P0),k0=b({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=pt(k0),J0=b({},un,{newState:0,oldState:0}),K0=pt(J0),F0=[9,13,27,32],Wr=ra&&"CompositionEvent"in window,Lo=null;ra&&"documentMode"in document&&(Lo=document.documentMode);var W0=ra&&"TextEvent"in window&&!Lo,Wf=ra&&(!Wr||Lo&&8<Lo&&11>=Lo),$f=" ",If=!1;function ed(e,t){switch(e){case"keyup":return F0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function td(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function $0(e,t){switch(e){case"compositionend":return td(t);case"keypress":return t.which!==32?null:(If=!0,$f);case"textInput":return e=t.data,e===$f&&If?null:e;default:return null}}function I0(e,t){if(Qn)return e==="compositionend"||!Wr&&ed(e,t)?(e=kf(),Ki=kr=Oa=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wf&&t.locale!=="ko"?null:t.data;default:return null}}var eb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!eb[e.type]:t==="textarea"}function nd(e,t,a,o){Hn?Gn?Gn.push(o):Gn=[o]:Hn=o,t=Qs(t,"onChange"),0<t.length&&(a=new $i("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Ho=null,Go=null;function tb(e){Lh(e,0)}function es(e){var t=wo(e);if(Bf(t))return e}function od(e,t){if(e==="change")return t}var id=!1;if(ra){var $r;if(ra){var Ir="oninput"in document;if(!Ir){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),Ir=typeof sd.oninput=="function"}$r=Ir}else $r=!1;id=$r&&(!document.documentMode||9<document.documentMode)}function rd(){Ho&&(Ho.detachEvent("onpropertychange",ld),Go=Ho=null)}function ld(e){if(e.propertyName==="value"&&es(Go)){var t=[];nd(t,Go,e,Yr(e)),Xf(tb,t)}}function ab(e,t,a){e==="focusin"?(rd(),Ho=t,Go=a,Ho.attachEvent("onpropertychange",ld)):e==="focusout"&&rd()}function nb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return es(Go)}function ob(e,t){if(e==="click")return es(t)}function ib(e,t){if(e==="input"||e==="change")return es(t)}function sb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:sb;function Qo(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var l=a[o];if(!qr.call(t,l)||!At(e[l],t[l]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,t){var a=ud(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ud(a)}}function fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zi(e.document)}return t}function el(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var rb=ra&&"documentMode"in document&&11>=document.documentMode,Yn=null,tl=null,Yo=null,al=!1;function md(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;al||Yn==null||Yn!==Zi(o)||(o=Yn,"selectionStart"in o&&el(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Yo&&Qo(Yo,o)||(Yo=o,o=Qs(tl,"onSelect"),0<o.length&&(t=new $i("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Yn)))}function cn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Pn={animationend:cn("Animation","AnimationEnd"),animationiteration:cn("Animation","AnimationIteration"),animationstart:cn("Animation","AnimationStart"),transitionrun:cn("Transition","TransitionRun"),transitionstart:cn("Transition","TransitionStart"),transitioncancel:cn("Transition","TransitionCancel"),transitionend:cn("Transition","TransitionEnd")},nl={},hd={};ra&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function fn(e){if(nl[e])return nl[e];if(!Pn[e])return e;var t=Pn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in hd)return nl[e]=t[a];return e}var pd=fn("animationend"),gd=fn("animationiteration"),vd=fn("animationstart"),lb=fn("transitionrun"),ub=fn("transitionstart"),cb=fn("transitioncancel"),yd=fn("transitionend"),bd=new Map,ol="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ol.push("scrollEnd");function Pt(e,t){bd.set(e,t),ln(t,[e])}var ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],Xn=0,il=0;function as(){for(var e=Xn,t=il=Xn=0;t<e;){var a=wt[t];wt[t++]=null;var o=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var u=wt[t];if(wt[t++]=null,o!==null&&l!==null){var d=o.pending;d===null?l.next=l:(l.next=d.next,d.next=l),o.pending=l}u!==0&&Sd(a,l,u)}}function ns(e,t,a,o){wt[Xn++]=e,wt[Xn++]=t,wt[Xn++]=a,wt[Xn++]=o,il|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function sl(e,t,a,o){return ns(e,t,a,o),os(e)}function dn(e,t){return ns(e,null,null,t),os(e)}function Sd(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-xt(a),e=u.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=a|536870912),u):null}function os(e){if(50<fi)throw fi=0,pu=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var kn={};function fb(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,a,o){return new fb(e,t,a,o)}function rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function la(e,t){var a=e.alternate;return a===null?(a=Dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Td(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function is(e,t,a,o,l,u){var d=0;if(o=e,typeof e=="function")rl(e)&&(d=1);else if(typeof e=="string")d=gS(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Dt(31,a,t,l),e.elementType=ie,e.lanes=u,e;case _:return mn(a.children,l,u,t);case B:d=8,l|=24;break;case L:return e=Dt(12,a,t,l|2),e.elementType=L,e.lanes=u,e;case P:return e=Dt(13,a,t,l),e.elementType=P,e.lanes=u,e;case oe:return e=Dt(19,a,t,l),e.elementType=oe,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:d=10;break e;case k:d=9;break e;case J:d=11;break e;case F:d=14;break e;case U:d=16,o=null;break e}d=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return t=Dt(d,a,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function mn(e,t,a,o){return e=Dt(7,e,o,t),e.lanes=a,e}function ll(e,t,a){return e=Dt(6,e,null,t),e.lanes=a,e}function Ed(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function ul(e,t,a){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xd=new WeakMap;function jt(e,t){if(typeof e=="object"&&e!==null){var a=xd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ef(t)},xd.set(e,t),t)}return{value:e,source:t,stack:Ef(t)}}var Zn=[],Jn=0,ss=null,Po=0,Ut=[],_t=0,qa=null,Wt=1,$t="";function ua(e,t){Zn[Jn++]=Po,Zn[Jn++]=ss,ss=e,Po=t}function Ad(e,t,a){Ut[_t++]=Wt,Ut[_t++]=$t,Ut[_t++]=qa,qa=e;var o=Wt;e=$t;var l=32-xt(o)-1;o&=~(1<<l),a+=1;var u=32-xt(t)+l;if(30<u){var d=l-l%5;u=(o&(1<<d)-1).toString(32),o>>=d,l-=d,Wt=1<<32-xt(t)+l|a<<l|o,$t=u+e}else Wt=1<<u|a<<l|o,$t=e}function cl(e){e.return!==null&&(ua(e,1),Ad(e,1,0))}function fl(e){for(;e===ss;)ss=Zn[--Jn],Zn[Jn]=null,Po=Zn[--Jn],Zn[Jn]=null;for(;e===qa;)qa=Ut[--_t],Ut[_t]=null,$t=Ut[--_t],Ut[_t]=null,Wt=Ut[--_t],Ut[_t]=null}function Dd(e,t){Ut[_t++]=Wt,Ut[_t++]=$t,Ut[_t++]=qa,Wt=t.id,$t=t.overflow,qa=e}var at=null,Ve=null,Se=!1,Ra=null,Bt=!1,dl=Error(r(519));function Na(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(jt(t,e)),dl}function Md(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[tt]=e,t[ht]=o,a){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(a=0;a<mi.length;a++)ge(mi[a],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),Lf(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),Gf(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Yh(t.textContent,a)?(o.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),o.onScroll!=null&&ge("scroll",t),o.onScrollEnd!=null&&ge("scrollend",t),o.onClick!=null&&(t.onclick=sa),t=!0):t=!1,t||Na(e,!0)}function Cd(e){for(at=e.return;at;)switch(at.tag){case 5:case 31:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:at=at.return}}function Kn(e){if(e!==at)return!1;if(!Se)return Cd(e),Se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||qu(e.type,e.memoizedProps)),a=!a),a&&Ve&&Na(e),Cd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ve=$h(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ve=$h(e)}else t===27?(t=Ve,ka(e.type)?(e=ju,ju=null,Ve=e):Ve=t):Ve=at?Ht(e.stateNode.nextSibling):null;return!0}function hn(){Ve=at=null,Se=!1}function ml(){var e=Ra;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),Ra=null),e}function Xo(e){Ra===null?Ra=[e]:Ra.push(e)}var hl=x(null),pn=null,ca=null;function Va(e,t,a){Z(hl,t._currentValue),t._currentValue=a}function fa(e){e._currentValue=hl.current,j(hl)}function pl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function gl(e,t,a,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var d=l.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=l;for(var T=0;T<t.length;T++)if(v.context===t[T]){u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),pl(u.return,a,e),o||(d=null);break e}u=v.next}}else if(l.tag===18){if(d=l.return,d===null)throw Error(r(341));d.lanes|=a,u=d.alternate,u!==null&&(u.lanes|=a),pl(d,a,e),d=null}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===e){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}}function Fn(e,t,a,o){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var d=l.alternate;if(d===null)throw Error(r(387));if(d=d.memoizedProps,d!==null){var v=l.type;At(l.pendingProps.value,d.value)||(e!==null?e.push(v):e=[v])}}else if(l===be.current){if(d=l.alternate,d===null)throw Error(r(387));d.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(yi):e=[yi])}l=l.return}e!==null&&gl(t,e,a,o),t.flags|=262144}function rs(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gn(e){pn=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return zd(pn,e)}function ls(e,t){return pn===null&&gn(e),zd(e,t)}function zd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ca===null){if(e===null)throw Error(r(308));ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ca=ca.next=t;return a}var db=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},mb=n.unstable_scheduleCallback,hb=n.unstable_NormalPriority,Pe={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vl(){return{controller:new db,data:new Map,refCount:0}}function ko(e){e.refCount--,e.refCount===0&&mb(hb,function(){e.controller.abort()})}var Zo=null,yl=0,Wn=0,$n=null;function pb(e,t){if(Zo===null){var a=Zo=[];yl=0,Wn=Tu(),$n={status:"pending",value:void 0,then:function(o){a.push(o)}}}return yl++,t.then(Od,Od),t}function Od(){if(--yl===0&&Zo!==null){$n!==null&&($n.status="fulfilled");var e=Zo;Zo=null,Wn=0,$n=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gb(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),o}var qd=R.S;R.S=function(e,t){mh=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&pb(e,t),qd!==null&&qd(e,t)};var vn=x(null);function bl(){var e=vn.current;return e!==null?e:qe.pooledCache}function us(e,t){t===null?Z(vn,vn.current):Z(vn,t.pool)}function Rd(){var e=bl();return e===null?null:{parent:Pe._currentValue,pool:e}}var In=Error(r(460)),Sl=Error(r(474)),cs=Error(r(542)),fs={then:function(){}};function Nd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(sa,sa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jd(e),e;default:if(typeof t.status=="string")t.then(sa,sa);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=o}},function(o){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jd(e),e}throw bn=t,In}}function yn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(bn=a,In):a}}var bn=null;function wd(){if(bn===null)throw Error(r(459));var e=bn;return bn=null,e}function jd(e){if(e===In||e===cs)throw Error(r(483))}var eo=null,Jo=0;function ds(e){var t=Jo;return Jo+=1,eo===null&&(eo=[]),Vd(eo,e,t)}function Ko(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ms(e,t){throw t.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ud(e){function t(A,E){if(e){var D=A.deletions;D===null?(A.deletions=[E],A.flags|=16):D.push(E)}}function a(A,E){if(!e)return null;for(;E!==null;)t(A,E),E=E.sibling;return null}function o(A){for(var E=new Map;A!==null;)A.key!==null?E.set(A.key,A):E.set(A.index,A),A=A.sibling;return E}function l(A,E){return A=la(A,E),A.index=0,A.sibling=null,A}function u(A,E,D){return A.index=D,e?(D=A.alternate,D!==null?(D=D.index,D<E?(A.flags|=67108866,E):D):(A.flags|=67108866,E)):(A.flags|=1048576,E)}function d(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function v(A,E,D,V){return E===null||E.tag!==6?(E=ll(D,A.mode,V),E.return=A,E):(E=l(E,D),E.return=A,E)}function T(A,E,D,V){var se=D.type;return se===_?N(A,E,D.props.children,V,D.key):E!==null&&(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===U&&yn(se)===E.type)?(E=l(E,D.props),Ko(E,D),E.return=A,E):(E=is(D.type,D.key,D.props,null,A.mode,V),Ko(E,D),E.return=A,E)}function M(A,E,D,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==D.containerInfo||E.stateNode.implementation!==D.implementation?(E=ul(D,A.mode,V),E.return=A,E):(E=l(E,D.children||[]),E.return=A,E)}function N(A,E,D,V,se){return E===null||E.tag!==7?(E=mn(D,A.mode,V,se),E.return=A,E):(E=l(E,D),E.return=A,E)}function w(A,E,D){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=ll(""+E,A.mode,D),E.return=A,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case C:return D=is(E.type,E.key,E.props,null,A.mode,D),Ko(D,E),D.return=A,D;case q:return E=ul(E,A.mode,D),E.return=A,E;case U:return E=yn(E),w(A,E,D)}if(Ge(E)||Ne(E))return E=mn(E,A.mode,D,null),E.return=A,E;if(typeof E.then=="function")return w(A,ds(E),D);if(E.$$typeof===G)return w(A,ls(A,E),D);ms(A,E)}return null}function z(A,E,D,V){var se=E!==null?E.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return se!==null?null:v(A,E,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case C:return D.key===se?T(A,E,D,V):null;case q:return D.key===se?M(A,E,D,V):null;case U:return D=yn(D),z(A,E,D,V)}if(Ge(D)||Ne(D))return se!==null?null:N(A,E,D,V,null);if(typeof D.then=="function")return z(A,E,ds(D),V);if(D.$$typeof===G)return z(A,E,ls(A,D),V);ms(A,D)}return null}function O(A,E,D,V,se){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return A=A.get(D)||null,v(E,A,""+V,se);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case C:return A=A.get(V.key===null?D:V.key)||null,T(E,A,V,se);case q:return A=A.get(V.key===null?D:V.key)||null,M(E,A,V,se);case U:return V=yn(V),O(A,E,D,V,se)}if(Ge(V)||Ne(V))return A=A.get(D)||null,N(E,A,V,se,null);if(typeof V.then=="function")return O(A,E,D,ds(V),se);if(V.$$typeof===G)return O(A,E,D,ls(E,V),se);ms(E,V)}return null}function $(A,E,D,V){for(var se=null,Te=null,ae=E,fe=E=0,ye=null;ae!==null&&fe<D.length;fe++){ae.index>fe?(ye=ae,ae=null):ye=ae.sibling;var Ee=z(A,ae,D[fe],V);if(Ee===null){ae===null&&(ae=ye);break}e&&ae&&Ee.alternate===null&&t(A,ae),E=u(Ee,E,fe),Te===null?se=Ee:Te.sibling=Ee,Te=Ee,ae=ye}if(fe===D.length)return a(A,ae),Se&&ua(A,fe),se;if(ae===null){for(;fe<D.length;fe++)ae=w(A,D[fe],V),ae!==null&&(E=u(ae,E,fe),Te===null?se=ae:Te.sibling=ae,Te=ae);return Se&&ua(A,fe),se}for(ae=o(ae);fe<D.length;fe++)ye=O(ae,A,fe,D[fe],V),ye!==null&&(e&&ye.alternate!==null&&ae.delete(ye.key===null?fe:ye.key),E=u(ye,E,fe),Te===null?se=ye:Te.sibling=ye,Te=ye);return e&&ae.forEach(function(Wa){return t(A,Wa)}),Se&&ua(A,fe),se}function le(A,E,D,V){if(D==null)throw Error(r(151));for(var se=null,Te=null,ae=E,fe=E=0,ye=null,Ee=D.next();ae!==null&&!Ee.done;fe++,Ee=D.next()){ae.index>fe?(ye=ae,ae=null):ye=ae.sibling;var Wa=z(A,ae,Ee.value,V);if(Wa===null){ae===null&&(ae=ye);break}e&&ae&&Wa.alternate===null&&t(A,ae),E=u(Wa,E,fe),Te===null?se=Wa:Te.sibling=Wa,Te=Wa,ae=ye}if(Ee.done)return a(A,ae),Se&&ua(A,fe),se;if(ae===null){for(;!Ee.done;fe++,Ee=D.next())Ee=w(A,Ee.value,V),Ee!==null&&(E=u(Ee,E,fe),Te===null?se=Ee:Te.sibling=Ee,Te=Ee);return Se&&ua(A,fe),se}for(ae=o(ae);!Ee.done;fe++,Ee=D.next())Ee=O(ae,A,fe,Ee.value,V),Ee!==null&&(e&&Ee.alternate!==null&&ae.delete(Ee.key===null?fe:Ee.key),E=u(Ee,E,fe),Te===null?se=Ee:Te.sibling=Ee,Te=Ee);return e&&ae.forEach(function(CS){return t(A,CS)}),Se&&ua(A,fe),se}function Oe(A,E,D,V){if(typeof D=="object"&&D!==null&&D.type===_&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case C:e:{for(var se=D.key;E!==null;){if(E.key===se){if(se=D.type,se===_){if(E.tag===7){a(A,E.sibling),V=l(E,D.props.children),V.return=A,A=V;break e}}else if(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===U&&yn(se)===E.type){a(A,E.sibling),V=l(E,D.props),Ko(V,D),V.return=A,A=V;break e}a(A,E);break}else t(A,E);E=E.sibling}D.type===_?(V=mn(D.props.children,A.mode,V,D.key),V.return=A,A=V):(V=is(D.type,D.key,D.props,null,A.mode,V),Ko(V,D),V.return=A,A=V)}return d(A);case q:e:{for(se=D.key;E!==null;){if(E.key===se)if(E.tag===4&&E.stateNode.containerInfo===D.containerInfo&&E.stateNode.implementation===D.implementation){a(A,E.sibling),V=l(E,D.children||[]),V.return=A,A=V;break e}else{a(A,E);break}else t(A,E);E=E.sibling}V=ul(D,A.mode,V),V.return=A,A=V}return d(A);case U:return D=yn(D),Oe(A,E,D,V)}if(Ge(D))return $(A,E,D,V);if(Ne(D)){if(se=Ne(D),typeof se!="function")throw Error(r(150));return D=se.call(D),le(A,E,D,V)}if(typeof D.then=="function")return Oe(A,E,ds(D),V);if(D.$$typeof===G)return Oe(A,E,ls(A,D),V);ms(A,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,E!==null&&E.tag===6?(a(A,E.sibling),V=l(E,D),V.return=A,A=V):(a(A,E),V=ll(D,A.mode,V),V.return=A,A=V),d(A)):a(A,E)}return function(A,E,D,V){try{Jo=0;var se=Oe(A,E,D,V);return eo=null,se}catch(ae){if(ae===In||ae===cs)throw ae;var Te=Dt(29,ae,null,A.mode);return Te.lanes=V,Te.return=A,Te}finally{}}}var Sn=Ud(!0),_d=Ud(!1),wa=!1;function Tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function El(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(xe&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=os(e),Sd(e,null,a),t}return ns(e,o,t,a),os(e)}function Fo(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,zf(e,a)}}function xl(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=d:u=u.next=d,a=a.next}while(a!==null);u===null?l=u=t:u=u.next=t}else l=u=t;a={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Al=!1;function Wo(){if(Al){var e=$n;if(e!==null)throw e}}function $o(e,t,a,o){Al=!1;var l=e.updateQueue;wa=!1;var u=l.firstBaseUpdate,d=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var T=v,M=T.next;T.next=null,d===null?u=M:d.next=M,d=T;var N=e.alternate;N!==null&&(N=N.updateQueue,v=N.lastBaseUpdate,v!==d&&(v===null?N.firstBaseUpdate=M:v.next=M,N.lastBaseUpdate=T))}if(u!==null){var w=l.baseState;d=0,N=M=T=null,v=u;do{var z=v.lane&-536870913,O=z!==v.lane;if(O?(ve&z)===z:(o&z)===z){z!==0&&z===Wn&&(Al=!0),N!==null&&(N=N.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var $=e,le=v;z=t;var Oe=a;switch(le.tag){case 1:if($=le.payload,typeof $=="function"){w=$.call(Oe,w,z);break e}w=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=le.payload,z=typeof $=="function"?$.call(Oe,w,z):$,z==null)break e;w=b({},w,z);break e;case 2:wa=!0}}z=v.callback,z!==null&&(e.flags|=64,O&&(e.flags|=8192),O=l.callbacks,O===null?l.callbacks=[z]:O.push(z))}else O={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},N===null?(M=N=O,T=w):N=N.next=O,d|=z;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;O=v,v=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);N===null&&(T=w),l.baseState=T,l.firstBaseUpdate=M,l.lastBaseUpdate=N,u===null&&(l.shared.lanes=0),Ga|=d,e.lanes=d,e.memoizedState=w}}function Bd(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Ld(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Bd(a[e],t)}var to=x(null),hs=x(0);function Hd(e,t){e=Sa,Z(hs,e),Z(to,t),Sa=e|t.baseLanes}function Dl(){Z(hs,Sa),Z(to,to.current)}function Ml(){Sa=hs.current,j(to),j(hs)}var Mt=x(null),Lt=null;function _a(e){var t=e.alternate;Z(Qe,Qe.current&1),Z(Mt,e),Lt===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(Lt=e)}function Cl(e){Z(Qe,Qe.current),Z(Mt,e),Lt===null&&(Lt=e)}function Gd(e){e.tag===22?(Z(Qe,Qe.current),Z(Mt,e),Lt===null&&(Lt=e)):Ba()}function Ba(){Z(Qe,Qe.current),Z(Mt,Mt.current)}function Ct(e){j(Mt),Lt===e&&(Lt=null),j(Qe)}var Qe=x(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vu(a)||wu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=0,ce=null,Ce=null,Xe=null,gs=!1,ao=!1,Tn=!1,vs=0,Io=0,no=null,vb=0;function Be(){throw Error(r(321))}function zl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!At(e[a],t[a]))return!1;return!0}function Ol(e,t,a,o,l,u){return da=u,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Am:Pl,Tn=!1,u=a(o,l),Tn=!1,ao&&(u=Yd(t,a,o,l)),Qd(e),u}function Qd(e){R.H=ai;var t=Ce!==null&&Ce.next!==null;if(da=0,Xe=Ce=ce=null,gs=!1,Io=0,no=null,t)throw Error(r(300));e===null||ke||(e=e.dependencies,e!==null&&rs(e)&&(ke=!0))}function Yd(e,t,a,o){ce=e;var l=0;do{if(ao&&(no=null),Io=0,ao=!1,25<=l)throw Error(r(301));if(l+=1,Xe=Ce=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=Dm,u=t(a,o)}while(ao);return u}function yb(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ei(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(ce.flags|=1024),t}function ql(){var e=vs!==0;return vs=0,e}function Rl(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Nl(e){if(gs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gs=!1}da=0,Xe=Ce=ce=null,ao=!1,Io=vs=0,no=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ce.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ye(){if(Ce===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Xe===null?ce.memoizedState:Xe.next;if(t!==null)Xe=t,Ce=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Xe===null?ce.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function ys(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ei(e){var t=Io;return Io+=1,no===null&&(no=[]),e=Vd(no,e,t),t=ce,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Am:Pl),e}function bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ei(e);if(e.$$typeof===G)return nt(e)}throw Error(r(438,String(e)))}function Vl(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ys(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=Ae;return t.index++,a}function ma(e,t){return typeof t=="function"?t(e):t}function Ss(e){var t=Ye();return wl(t,Ce,e)}function wl(e,t,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var l=e.baseQueue,u=o.pending;if(u!==null){if(l!==null){var d=l.next;l.next=u.next,u.next=d}t.baseQueue=l=u,o.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var v=d=null,T=null,M=t,N=!1;do{var w=M.lane&-536870913;if(w!==M.lane?(ve&w)===w:(da&w)===w){var z=M.revertLane;if(z===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),w===Wn&&(N=!0);else if((da&z)===z){M=M.next,z===Wn&&(N=!0);continue}else w={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},T===null?(v=T=w,d=u):T=T.next=w,ce.lanes|=z,Ga|=z;w=M.action,Tn&&a(u,w),u=M.hasEagerState?M.eagerState:a(u,w)}else z={lane:w,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},T===null?(v=T=z,d=u):T=T.next=z,ce.lanes|=w,Ga|=w;M=M.next}while(M!==null&&M!==t);if(T===null?d=u:T.next=v,!At(u,e.memoizedState)&&(ke=!0,N&&(a=$n,a!==null)))throw a;e.memoizedState=u,e.baseState=d,e.baseQueue=T,o.lastRenderedState=u}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function jl(e){var t=Ye(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,l=a.pending,u=t.memoizedState;if(l!==null){a.pending=null;var d=l=l.next;do u=e(u,d.action),d=d.next;while(d!==l);At(u,t.memoizedState)||(ke=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function Pd(e,t,a){var o=ce,l=Ye(),u=Se;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=t();var d=!At((Ce||l).memoizedState,a);if(d&&(l.memoizedState=a,ke=!0),l=l.queue,Bl(Zd.bind(null,o,l,e),[e]),l.getSnapshot!==t||d||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,oo(9,{destroy:void 0},kd.bind(null,o,l,a,t),null),qe===null)throw Error(r(349));u||(da&127)!==0||Xd(o,t,a)}return a}function Xd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=ys(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function kd(e,t,a,o){t.value=a,t.getSnapshot=o,Jd(t)&&Kd(e)}function Zd(e,t,a){return a(function(){Jd(t)&&Kd(e)})}function Jd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!At(e,a)}catch{return!0}}function Kd(e){var t=dn(e,2);t!==null&&St(t,e,2)}function Ul(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),Tn){Ca(!0);try{a()}finally{Ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},t}function Fd(e,t,a,o){return e.baseState=a,wl(e,Ce,typeof o=="function"?o:ma)}function bb(e,t,a,o,l){if(xs(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};R.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,Wd(t,u)):(u.next=a.next,t.pending=a.next=u)}}function Wd(e,t){var a=t.action,o=t.payload,l=e.state;if(t.isTransition){var u=R.T,d={};R.T=d;try{var v=a(l,o),T=R.S;T!==null&&T(d,v),$d(e,t,v)}catch(M){_l(e,t,M)}finally{u!==null&&d.types!==null&&(u.types=d.types),R.T=u}}else try{u=a(l,o),$d(e,t,u)}catch(M){_l(e,t,M)}}function $d(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Id(e,t,o)},function(o){return _l(e,t,o)}):Id(e,t,a)}function Id(e,t,a){t.status="fulfilled",t.value=a,em(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Wd(e,a)))}function _l(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,em(t),t=t.next;while(t!==o)}e.action=null}function em(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function tm(e,t){return t}function am(e,t){if(Se){var a=qe.formState;if(a!==null){e:{var o=ce;if(Se){if(Ve){t:{for(var l=Ve,u=Bt;l.nodeType!==8;){if(!u){l=null;break t}if(l=Ht(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Ve=Ht(l.nextSibling),o=l.data==="F!";break e}}Na(o)}o=!1}o&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tm,lastRenderedState:t},a.queue=o,a=Tm.bind(null,ce,o),o.dispatch=a,o=Ul(!1),u=Yl.bind(null,ce,!1,o.queue),o=ct(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,a=bb.bind(null,ce,l,u,a),l.dispatch=a,o.memoizedState=e,[t,a,!1]}function nm(e){var t=Ye();return om(t,Ce,e)}function om(e,t,a){if(t=wl(e,t,tm)[0],e=Ss(ma)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ei(t)}catch(d){throw d===In?cs:d}else o=t;t=Ye();var l=t.queue,u=l.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,oo(9,{destroy:void 0},Sb.bind(null,l,a),null)),[o,u,e]}function Sb(e,t){e.action=t}function im(e){var t=Ye(),a=Ce;if(a!==null)return om(t,a,e);Ye(),t=t.memoizedState,a=Ye();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function oo(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=ce.updateQueue,t===null&&(t=ys(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function sm(){return Ye().memoizedState}function Ts(e,t,a,o){var l=ct();ce.flags|=e,l.memoizedState=oo(1|t,{destroy:void 0},a,o===void 0?null:o)}function Es(e,t,a,o){var l=Ye();o=o===void 0?null:o;var u=l.memoizedState.inst;Ce!==null&&o!==null&&zl(o,Ce.memoizedState.deps)?l.memoizedState=oo(t,u,a,o):(ce.flags|=e,l.memoizedState=oo(1|t,u,a,o))}function rm(e,t){Ts(8390656,8,e,t)}function Bl(e,t){Es(2048,8,e,t)}function Tb(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=ys(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function lm(e){var t=Ye().memoizedState;return Tb({ref:t,nextImpl:e}),function(){if((xe&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function um(e,t){return Es(4,2,e,t)}function cm(e,t){return Es(4,4,e,t)}function fm(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dm(e,t,a){a=a!=null?a.concat([e]):null,Es(4,4,fm.bind(null,t,e),a)}function Ll(){}function mm(e,t){var a=Ye();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&zl(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function hm(e,t){var a=Ye();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&zl(t,o[1]))return o[0];if(o=e(),Tn){Ca(!0);try{e()}finally{Ca(!1)}}return a.memoizedState=[o,t],o}function Hl(e,t,a){return a===void 0||(da&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ph(),ce.lanes|=e,Ga|=e,a)}function pm(e,t,a,o){return At(a,t)?a:to.current!==null?(e=Hl(e,a,o),At(e,t)||(ke=!0),e):(da&42)===0||(da&1073741824)!==0&&(ve&261930)===0?(ke=!0,e.memoizedState=a):(e=ph(),ce.lanes|=e,Ga|=e,t)}function gm(e,t,a,o,l){var u=H.p;H.p=u!==0&&8>u?u:8;var d=R.T,v={};R.T=v,Yl(e,!1,t,a);try{var T=l(),M=R.S;if(M!==null&&M(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var N=gb(T,o);ti(e,t,N,qt(e))}else ti(e,t,o,qt(e))}catch(w){ti(e,t,{then:function(){},status:"rejected",reason:w},qt())}finally{H.p=u,d!==null&&v.types!==null&&(d.types=v.types),R.T=d}}function Eb(){}function Gl(e,t,a,o){if(e.tag!==5)throw Error(r(476));var l=vm(e).queue;gm(e,l,t,W,a===null?Eb:function(){return ym(e),a(o)})}function vm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ym(e){var t=vm(e);t.next===null&&(t=e.alternate.memoizedState),ti(e,t.next.queue,{},qt())}function Ql(){return nt(yi)}function bm(){return Ye().memoizedState}function Sm(){return Ye().memoizedState}function xb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=qt();e=ja(a);var o=Ua(t,e,a);o!==null&&(St(o,t,a),Fo(o,t,a)),t={cache:vl()},e.payload=t;return}t=t.return}}function Ab(e,t,a){var o=qt();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xs(e)?Em(t,a):(a=sl(e,t,a,o),a!==null&&(St(a,e,o),xm(a,t,o)))}function Tm(e,t,a){var o=qt();ti(e,t,a,o)}function ti(e,t,a,o){var l={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(xs(e))Em(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,v=u(d,a);if(l.hasEagerState=!0,l.eagerState=v,At(v,d))return ns(e,t,l,0),qe===null&&as(),!1}catch{}finally{}if(a=sl(e,t,l,o),a!==null)return St(a,e,o),xm(a,t,o),!0}return!1}function Yl(e,t,a,o){if(o={lane:2,revertLane:Tu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},xs(e)){if(t)throw Error(r(479))}else t=sl(e,a,o,2),t!==null&&St(t,e,2)}function xs(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Em(e,t){ao=gs=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function xm(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,zf(e,a)}}var ai={readContext:nt,use:bs,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be};ai.useEffectEvent=Be;var Am={readContext:nt,use:bs,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:rm,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ts(4194308,4,fm.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ts(4194308,4,e,t)},useInsertionEffect:function(e,t){Ts(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var o=e();if(Tn){Ca(!0);try{e()}finally{Ca(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=ct();if(a!==void 0){var l=a(t);if(Tn){Ca(!0);try{a(t)}finally{Ca(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=Ab.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Ul(e);var t=e.queue,a=Tm.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ll,useDeferredValue:function(e,t){var a=ct();return Hl(a,e,t)},useTransition:function(){var e=Ul(!1);return e=gm.bind(null,ce,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=ce,l=ct();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),qe===null)throw Error(r(349));(ve&127)!==0||Xd(o,t,a)}l.memoizedState=a;var u={value:a,getSnapshot:t};return l.queue=u,rm(Zd.bind(null,o,u,e),[e]),o.flags|=2048,oo(9,{destroy:void 0},kd.bind(null,o,u,a,t),null),a},useId:function(){var e=ct(),t=qe.identifierPrefix;if(Se){var a=$t,o=Wt;a=(o&~(1<<32-xt(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=vs++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=vb++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ql,useFormState:am,useActionState:am,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Yl.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vl,useCacheRefresh:function(){return ct().memoizedState=xb.bind(null,ce)},useEffectEvent:function(e){var t=ct(),a={impl:e};return t.memoizedState=a,function(){if((xe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Pl={readContext:nt,use:bs,useCallback:mm,useContext:nt,useEffect:Bl,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:hm,useReducer:Ss,useRef:sm,useState:function(){return Ss(ma)},useDebugValue:Ll,useDeferredValue:function(e,t){var a=Ye();return pm(a,Ce.memoizedState,e,t)},useTransition:function(){var e=Ss(ma)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:Pd,useId:bm,useHostTransitionStatus:Ql,useFormState:nm,useActionState:nm,useOptimistic:function(e,t){var a=Ye();return Fd(a,Ce,e,t)},useMemoCache:Vl,useCacheRefresh:Sm};Pl.useEffectEvent=lm;var Dm={readContext:nt,use:bs,useCallback:mm,useContext:nt,useEffect:Bl,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:hm,useReducer:jl,useRef:sm,useState:function(){return jl(ma)},useDebugValue:Ll,useDeferredValue:function(e,t){var a=Ye();return Ce===null?Hl(a,e,t):pm(a,Ce.memoizedState,e,t)},useTransition:function(){var e=jl(ma)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:Pd,useId:bm,useHostTransitionStatus:Ql,useFormState:im,useActionState:im,useOptimistic:function(e,t){var a=Ye();return Ce!==null?Fd(a,Ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vl,useCacheRefresh:Sm};Dm.useEffectEvent=lm;function Xl(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var kl={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=qt(),l=ja(o);l.payload=t,a!=null&&(l.callback=a),t=Ua(e,l,o),t!==null&&(St(t,e,o),Fo(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=qt(),l=ja(o);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ua(e,l,o),t!==null&&(St(t,e,o),Fo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=qt(),o=ja(a);o.tag=2,t!=null&&(o.callback=t),t=Ua(e,o,a),t!==null&&(St(t,e,a),Fo(t,e,a))}};function Mm(e,t,a,o,l,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,d):t.prototype&&t.prototype.isPureReactComponent?!Qo(a,o)||!Qo(l,u):!0}function Cm(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function En(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function zm(e){ts(e)}function Om(e){console.error(e)}function qm(e){ts(e)}function As(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Rm(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Zl(e,t,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){As(e,t)},a}function Nm(e){return e=ja(e),e.tag=3,e}function Vm(e,t,a,o){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;e.payload=function(){return l(u)},e.callback=function(){Rm(t,a,o)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Rm(t,a,o),typeof l!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var v=o.stack;this.componentDidCatch(o.value,{componentStack:v!==null?v:""})})}function Db(e,t,a,o,l){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Fn(t,a,l,!0),a=Mt.current,a!==null){switch(a.tag){case 31:case 13:return Lt===null?Us():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=l,o===fs?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),yu(e,o,l)),!1;case 22:return a.flags|=65536,o===fs?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),yu(e,o,l)),!1}throw Error(r(435,a.tag))}return yu(e,o,l),Us(),!1}if(Se)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==dl&&(e=Error(r(422),{cause:o}),Xo(jt(e,a)))):(o!==dl&&(t=Error(r(423),{cause:o}),Xo(jt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=jt(o,a),l=Zl(e.stateNode,o,l),xl(e,l),Le!==4&&(Le=2)),!1;var u=Error(r(520),{cause:o});if(u=jt(u,a),ci===null?ci=[u]:ci.push(u),Le!==4&&(Le=2),t===null)return!0;o=jt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Zl(a.stateNode,o,e),xl(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Qa===null||!Qa.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Nm(l),Vm(l,e,a,o),xl(a,l),!1}a=a.return}while(a!==null);return!1}var Jl=Error(r(461)),ke=!1;function ot(e,t,a,o){t.child=e===null?_d(t,null,a,o):Sn(t,e.child,a,o)}function wm(e,t,a,o,l){a=a.render;var u=t.ref;if("ref"in o){var d={};for(var v in o)v!=="ref"&&(d[v]=o[v])}else d=o;return gn(t),o=Ol(e,t,a,d,u,l),v=ql(),e!==null&&!ke?(Rl(e,t,l),ha(e,t,l)):(Se&&v&&cl(t),t.flags|=1,ot(e,t,o,l),t.child)}function jm(e,t,a,o,l){if(e===null){var u=a.type;return typeof u=="function"&&!rl(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,Um(e,t,u,o,l)):(e=is(a.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!au(e,l)){var d=u.memoizedProps;if(a=a.compare,a=a!==null?a:Qo,a(d,o)&&e.ref===t.ref)return ha(e,t,l)}return t.flags|=1,e=la(u,o),e.ref=t.ref,e.return=t,t.child=e}function Um(e,t,a,o,l){if(e!==null){var u=e.memoizedProps;if(Qo(u,o)&&e.ref===t.ref)if(ke=!1,t.pendingProps=o=u,au(e,l))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,ha(e,t,l)}return Kl(e,t,a,o,l)}function _m(e,t,a,o){var l=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~u}else o=0,t.child=null;return Bm(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&us(t,u!==null?u.cachePool:null),u!==null?Hd(t,u):Dl(),Gd(t);else return o=t.lanes=536870912,Bm(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(us(t,u.cachePool),Hd(t,u),Ba(),t.memoizedState=null):(e!==null&&us(t,null),Dl(),Ba());return ot(e,t,l,a),t.child}function ni(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bm(e,t,a,o,l){var u=bl();return u=u===null?null:{parent:Pe._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&us(t,null),Dl(),Gd(t),e!==null&&Fn(e,t,o,!0),t.childLanes=l,null}function Ds(e,t){return t=Cs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lm(e,t,a){return Sn(t,e.child,null,a),e=Ds(t,t.pendingProps),e.flags|=2,Ct(t),t.memoizedState=null,e}function Mb(e,t,a){var o=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=Ds(t,o),t.lanes=536870912,ni(null,e);if(Cl(t),(e=Ve)?(e=Wh(e,Bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Wt,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},a=Ed(e),a.return=t,t.child=a,at=t,Ve=null)):e=null,e===null)throw Na(t);return t.lanes=536870912,null}return Ds(t,o)}var u=e.memoizedState;if(u!==null){var d=u.dehydrated;if(Cl(t),l)if(t.flags&256)t.flags&=-257,t=Lm(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(ke||Fn(e,t,a,!1),l=(a&e.childLanes)!==0,ke||l){if(o=qe,o!==null&&(d=Of(o,a),d!==0&&d!==u.retryLane))throw u.retryLane=d,dn(e,d),St(o,e,d),Jl;Us(),t=Lm(e,t,a)}else e=u.treeContext,Ve=Ht(d.nextSibling),at=t,Se=!0,Ra=null,Bt=!1,e!==null&&Dd(t,e),t=Ds(t,o),t.flags|=4096;return t}return e=la(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ms(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Kl(e,t,a,o,l){return gn(t),a=Ol(e,t,a,o,void 0,l),o=ql(),e!==null&&!ke?(Rl(e,t,l),ha(e,t,l)):(Se&&o&&cl(t),t.flags|=1,ot(e,t,a,l),t.child)}function Hm(e,t,a,o,l,u){return gn(t),t.updateQueue=null,a=Yd(t,o,a,l),Qd(e),o=ql(),e!==null&&!ke?(Rl(e,t,u),ha(e,t,u)):(Se&&o&&cl(t),t.flags|=1,ot(e,t,a,u),t.child)}function Gm(e,t,a,o,l){if(gn(t),t.stateNode===null){var u=kn,d=a.contextType;typeof d=="object"&&d!==null&&(u=nt(d)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=kl,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Tl(t),d=a.contextType,u.context=typeof d=="object"&&d!==null?nt(d):kn,u.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Xl(t,a,d,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&kl.enqueueReplaceState(u,u.state,null),$o(t,o,u,l),Wo(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,T=En(a,v);u.props=T;var M=u.context,N=a.contextType;d=kn,typeof N=="object"&&N!==null&&(d=nt(N));var w=a.getDerivedStateFromProps;N=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||M!==d)&&Cm(t,u,o,d),wa=!1;var z=t.memoizedState;u.state=z,$o(t,o,u,l),Wo(),M=t.memoizedState,v||z!==M||wa?(typeof w=="function"&&(Xl(t,a,w,o),M=t.memoizedState),(T=wa||Mm(t,a,T,o,z,M,d))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=M),u.props=o,u.state=M,u.context=d,o=T):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,El(e,t),d=t.memoizedProps,N=En(a,d),u.props=N,w=t.pendingProps,z=u.context,M=a.contextType,T=kn,typeof M=="object"&&M!==null&&(T=nt(M)),v=a.getDerivedStateFromProps,(M=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==w||z!==T)&&Cm(t,u,o,T),wa=!1,z=t.memoizedState,u.state=z,$o(t,o,u,l),Wo();var O=t.memoizedState;d!==w||z!==O||wa||e!==null&&e.dependencies!==null&&rs(e.dependencies)?(typeof v=="function"&&(Xl(t,a,v,o),O=t.memoizedState),(N=wa||Mm(t,a,N,o,z,O,T)||e!==null&&e.dependencies!==null&&rs(e.dependencies))?(M||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,O,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,O,T)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=O),u.props=o,u.state=O,u.context=T,o=N):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,Ms(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=Sn(t,e.child,null,l),t.child=Sn(t,null,a,l)):ot(e,t,a,l),t.memoizedState=u.state,e=t.child):e=ha(e,t,l),e}function Qm(e,t,a,o){return hn(),t.flags|=256,ot(e,t,a,o),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wl(e){return{baseLanes:e,cachePool:Rd()}}function $l(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ot),e}function Ym(e,t,a){var o=t.pendingProps,l=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),d&&(l=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(l?_a(t):Ba(),(e=Ve)?(e=Wh(e,Bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Wt,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},a=Ed(e),a.return=t,t.child=a,at=t,Ve=null)):e=null,e===null)throw Na(t);return wu(e)?t.lanes=32:t.lanes=536870912,null}var v=o.children;return o=o.fallback,l?(Ba(),l=t.mode,v=Cs({mode:"hidden",children:v},l),o=mn(o,l,a,null),v.return=t,o.return=t,v.sibling=o,t.child=v,o=t.child,o.memoizedState=Wl(a),o.childLanes=$l(e,d,a),t.memoizedState=Fl,ni(null,o)):(_a(t),Il(t,v))}var T=e.memoizedState;if(T!==null&&(v=T.dehydrated,v!==null)){if(u)t.flags&256?(_a(t),t.flags&=-257,t=eu(e,t,a)):t.memoizedState!==null?(Ba(),t.child=e.child,t.flags|=128,t=null):(Ba(),v=o.fallback,l=t.mode,o=Cs({mode:"visible",children:o.children},l),v=mn(v,l,a,null),v.flags|=2,o.return=t,v.return=t,o.sibling=v,t.child=o,Sn(t,e.child,null,a),o=t.child,o.memoizedState=Wl(a),o.childLanes=$l(e,d,a),t.memoizedState=Fl,t=ni(null,o));else if(_a(t),wu(v)){if(d=v.nextSibling&&v.nextSibling.dataset,d)var M=d.dgst;d=M,o=Error(r(419)),o.stack="",o.digest=d,Xo({value:o,source:null,stack:null}),t=eu(e,t,a)}else if(ke||Fn(e,t,a,!1),d=(a&e.childLanes)!==0,ke||d){if(d=qe,d!==null&&(o=Of(d,a),o!==0&&o!==T.retryLane))throw T.retryLane=o,dn(e,o),St(d,e,o),Jl;Vu(v)||Us(),t=eu(e,t,a)}else Vu(v)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Ve=Ht(v.nextSibling),at=t,Se=!0,Ra=null,Bt=!1,e!==null&&Dd(t,e),t=Il(t,o.children),t.flags|=4096);return t}return l?(Ba(),v=o.fallback,l=t.mode,T=e.child,M=T.sibling,o=la(T,{mode:"hidden",children:o.children}),o.subtreeFlags=T.subtreeFlags&65011712,M!==null?v=la(M,v):(v=mn(v,l,a,null),v.flags|=2),v.return=t,o.return=t,o.sibling=v,t.child=o,ni(null,o),o=t.child,v=e.child.memoizedState,v===null?v=Wl(a):(l=v.cachePool,l!==null?(T=Pe._currentValue,l=l.parent!==T?{parent:T,pool:T}:l):l=Rd(),v={baseLanes:v.baseLanes|a,cachePool:l}),o.memoizedState=v,o.childLanes=$l(e,d,a),t.memoizedState=Fl,ni(e.child,o)):(_a(t),a=e.child,e=a.sibling,a=la(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function Il(e,t){return t=Cs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Cs(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function eu(e,t,a){return Sn(t,e.child,null,a),e=Il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pm(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),pl(e.return,t,a)}function tu(e,t,a,o,l,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:l,treeForkCount:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=l,d.treeForkCount=u)}function Xm(e,t,a){var o=t.pendingProps,l=o.revealOrder,u=o.tail;o=o.children;var d=Qe.current,v=(d&2)!==0;if(v?(d=d&1|2,t.flags|=128):d&=1,Z(Qe,d),ot(e,t,o,a),o=Se?Po:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,a,t);else if(e.tag===19)Pm(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&ps(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),tu(t,!1,l,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ps(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}tu(t,!0,a,null,u,o);break;case"together":tu(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function ha(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ga|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Fn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=la(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=la(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function au(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rs(e)))}function Cb(e,t,a){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),Va(t,Pe,e.memoizedState.cache),hn();break;case 27:case 5:Da(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:Va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Cl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(_a(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ym(e,t,a):(_a(t),e=ha(e,t,a),e!==null?e.sibling:null);_a(t);break;case 19:var l=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Fn(e,t,a,!1),o=(a&t.childLanes)!==0),l){if(o)return Xm(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(Qe,Qe.current),o)break;return null;case 22:return t.lanes=0,_m(e,t,a,t.pendingProps);case 24:Va(t,Pe,e.memoizedState.cache)}return ha(e,t,a)}function km(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!au(e,a)&&(t.flags&128)===0)return ke=!1,Cb(e,t,a);ke=(e.flags&131072)!==0}else ke=!1,Se&&(t.flags&1048576)!==0&&Ad(t,Po,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=yn(t.elementType),t.type=e,typeof e=="function")rl(e)?(o=En(e,o),t.tag=1,t=Gm(null,t,e,o,a)):(t.tag=0,t=Kl(null,t,e,o,a));else{if(e!=null){var l=e.$$typeof;if(l===J){t.tag=11,t=wm(null,t,e,o,a);break e}else if(l===F){t.tag=14,t=jm(null,t,e,o,a);break e}}throw t=rt(e)||e,Error(r(306,t,""))}}return t;case 0:return Kl(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,l=En(o,t.pendingProps),Gm(e,t,o,l,a);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(r(387));o=t.pendingProps;var u=t.memoizedState;l=u.element,El(e,t),$o(t,o,null,a);var d=t.memoizedState;if(o=d.cache,Va(t,Pe,o),o!==u.cache&&gl(t,[Pe],a,!0),Wo(),o=d.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Qm(e,t,o,a);break e}else if(o!==l){l=jt(Error(r(424)),t),Xo(l),t=Qm(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ve=Ht(e.firstChild),at=t,Se=!0,Ra=null,Bt=!0,a=_d(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(hn(),o===l){t=ha(e,t,a);break e}ot(e,t,o,a)}t=t.child}return t;case 26:return Ms(e,t),e===null?(a=np(t.type,null,t.pendingProps,null))?t.memoizedState=a:Se||(a=t.type,e=t.pendingProps,o=Ys(re.current).createElement(a),o[tt]=t,o[ht]=e,it(o,a,e),Ie(o),t.stateNode=o):t.memoizedState=np(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Da(t),e===null&&Se&&(o=t.stateNode=ep(t.type,t.pendingProps,re.current),at=t,Bt=!0,l=Ve,ka(t.type)?(ju=l,Ve=Ht(o.firstChild)):Ve=l),ot(e,t,t.pendingProps.children,a),Ms(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((l=o=Ve)&&(o=nS(o,t.type,t.pendingProps,Bt),o!==null?(t.stateNode=o,at=t,Ve=Ht(o.firstChild),Bt=!1,l=!0):l=!1),l||Na(t)),Da(t),l=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,o=u.children,qu(l,u)?o=null:d!==null&&qu(l,d)&&(t.flags|=32),t.memoizedState!==null&&(l=Ol(e,t,yb,null,null,a),yi._currentValue=l),Ms(e,t),ot(e,t,o,a),t.child;case 6:return e===null&&Se&&((e=a=Ve)&&(a=oS(a,t.pendingProps,Bt),a!==null?(t.stateNode=a,at=t,Ve=null,e=!0):e=!1),e||Na(t)),null;case 13:return Ym(e,t,a);case 4:return $e(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Sn(t,null,o,a):ot(e,t,o,a),t.child;case 11:return wm(e,t,t.type,t.pendingProps,a);case 7:return ot(e,t,t.pendingProps,a),t.child;case 8:return ot(e,t,t.pendingProps.children,a),t.child;case 12:return ot(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Va(t,t.type,o.value),ot(e,t,o.children,a),t.child;case 9:return l=t.type._context,o=t.pendingProps.children,gn(t),l=nt(l),o=o(l),t.flags|=1,ot(e,t,o,a),t.child;case 14:return jm(e,t,t.type,t.pendingProps,a);case 15:return Um(e,t,t.type,t.pendingProps,a);case 19:return Xm(e,t,a);case 31:return Mb(e,t,a);case 22:return _m(e,t,a,t.pendingProps);case 24:return gn(t),o=nt(Pe),e===null?(l=bl(),l===null&&(l=qe,u=vl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),t.memoizedState={parent:o,cache:l},Tl(t),Va(t,Pe,l)):((e.lanes&a)!==0&&(El(e,t),$o(t,null,null,a),Wo()),l=e.memoizedState,u=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Va(t,Pe,o)):(o=u.cache,Va(t,Pe,o),o!==l.cache&&gl(t,[Pe],a,!0))),ot(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function pa(e){e.flags|=4}function nu(e,t,a,o,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(bh())e.flags|=8192;else throw bn=fs,Sl}else e.flags&=-16777217}function Zm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lp(t))if(bh())e.flags|=8192;else throw bn=fs,Sl}function zs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Mf():536870912,e.lanes|=t,lo|=t)}function oi(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function zb(e,t,a){var o=t.pendingProps;switch(fl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),fa(Pe),me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Kn(t)?pa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ml())),we(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(pa(t),u!==null?(we(t),Zm(t,u)):(we(t),nu(t,l,null,o,a))):u?u!==e.memoizedState?(pa(t),we(t),Zm(t,u)):(we(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&pa(t),we(t),nu(t,l,e,o,a)),null;case 27:if(oa(t),a=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&pa(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return we(t),null}e=K.current,Kn(t)?Md(t):(e=ep(l,o,a),t.stateNode=e,pa(t))}return we(t),null;case 5:if(oa(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&pa(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return we(t),null}if(u=K.current,Kn(t))Md(t);else{var d=Ys(re.current);switch(u){case 1:u=d.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=d.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=d.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?d.createElement("select",{is:o.is}):d.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?d.createElement(l,{is:o.is}):d.createElement(l)}}u[tt]=t,u[ht]=o;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)u.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=u;e:switch(it(u,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&pa(t)}}return we(t),nu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&pa(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(r(166));if(e=re.current,Kn(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,l=at,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}e[tt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Yh(e.nodeValue,a)),e||Na(t,!0)}else e=Ys(e).createTextNode(o),e[tt]=t,t.stateNode=e}return we(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Kn(t),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[tt]=t}else hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),e=!1}else a=ml(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ct(t),t):(Ct(t),null);if((t.flags&128)!==0)throw Error(r(558))}return we(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Kn(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[tt]=t}else hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),l=!1}else l=ml(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ct(t),t):(Ct(t),null)}return Ct(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),zs(t,t.updateQueue),we(t),null);case 4:return me(),e===null&&Du(t.stateNode.containerInfo),we(t),null;case 10:return fa(t.type),we(t),null;case 19:if(j(Qe),o=t.memoizedState,o===null)return we(t),null;if(l=(t.flags&128)!==0,u=o.rendering,u===null)if(l)oi(o,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ps(e),u!==null){for(t.flags|=128,oi(o,!1),e=u.updateQueue,t.updateQueue=e,zs(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Td(a,e),a=a.sibling;return Z(Qe,Qe.current&1|2),Se&&ua(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Tt()>Vs&&(t.flags|=128,l=!0,oi(o,!1),t.lanes=4194304)}else{if(!l)if(e=ps(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,zs(t,e),oi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Se)return we(t),null}else 2*Tt()-o.renderingStartTime>Vs&&a!==536870912&&(t.flags|=128,l=!0,oi(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Tt(),e.sibling=null,a=Qe.current,Z(Qe,l?a&1|2:a&1),Se&&ua(t,o.treeForkCount),e):(we(t),null);case 22:case 23:return Ct(t),Ml(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),a=t.updateQueue,a!==null&&zs(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&j(vn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),fa(Pe),we(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Ob(e,t){switch(fl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fa(Pe),me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return oa(t),null;case 31:if(t.memoizedState!==null){if(Ct(t),t.alternate===null)throw Error(r(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(Qe),null;case 4:return me(),null;case 10:return fa(t.type),null;case 22:case 23:return Ct(t),Ml(),e!==null&&j(vn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fa(Pe),null;case 25:return null;default:return null}}function Jm(e,t){switch(fl(t),t.tag){case 3:fa(Pe),me();break;case 26:case 27:case 5:oa(t);break;case 4:me();break;case 31:t.memoizedState!==null&&Ct(t);break;case 13:Ct(t);break;case 19:j(Qe);break;case 10:fa(t.type);break;case 22:case 23:Ct(t),Ml(),e!==null&&j(vn);break;case 24:fa(Pe)}}function ii(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var l=o.next;a=l;do{if((a.tag&e)===e){o=void 0;var u=a.create,d=a.inst;o=u(),d.destroy=o}a=a.next}while(a!==l)}}catch(v){Me(t,t.return,v)}}function La(e,t,a){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&e)===e){var d=o.inst,v=d.destroy;if(v!==void 0){d.destroy=void 0,l=t;var T=a,M=v;try{M()}catch(N){Me(l,T,N)}}}o=o.next}while(o!==u)}}catch(N){Me(t,t.return,N)}}function Km(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ld(t,a)}catch(o){Me(e,e.return,o)}}}function Fm(e,t,a){a.props=En(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Me(e,t,o)}}function si(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(l){Me(e,t,l)}}function It(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(l){Me(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Me(e,t,l)}else a.current=null}function Wm(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(l){Me(e,e.return,l)}}function ou(e,t,a){try{var o=e.stateNode;Wb(o,e.type,a,t),o[ht]=t}catch(l){Me(e,e.return,l)}}function $m(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function su(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=sa));else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(su(e,t,a),e=e.sibling;e!==null;)su(e,t,a),e=e.sibling}function Os(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Os(e,t,a),e=e.sibling;e!==null;)Os(e,t,a),e=e.sibling}function Im(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);it(t,o,a),t[tt]=e,t[ht]=a}catch(u){Me(e,e.return,u)}}var ga=!1,Ze=!1,ru=!1,eh=typeof WeakSet=="function"?WeakSet:Set,et=null;function qb(e,t){if(e=e.containerInfo,zu=Fs,e=dd(e),el(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var d=0,v=-1,T=-1,M=0,N=0,w=e,z=null;t:for(;;){for(var O;w!==a||l!==0&&w.nodeType!==3||(v=d+l),w!==u||o!==0&&w.nodeType!==3||(T=d+o),w.nodeType===3&&(d+=w.nodeValue.length),(O=w.firstChild)!==null;)z=w,w=O;for(;;){if(w===e)break t;if(z===a&&++M===l&&(v=d),z===u&&++N===o&&(T=d),(O=w.nextSibling)!==null)break;w=z,z=w.parentNode}w=O}a=v===-1||T===-1?null:{start:v,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ou={focusedElem:e,selectionRange:a},Fs=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,l=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var $=En(a.type,l);e=o.getSnapshotBeforeUpdate($,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(le){Me(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Nu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function th(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),o&4&&ii(5,a);break;case 1:if(ya(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Me(a,a.return,d)}else{var l=En(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Me(a,a.return,d)}}o&64&&Km(a),o&512&&si(a,a.return);break;case 3:if(ya(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ld(e,t)}catch(d){Me(a,a.return,d)}}break;case 27:t===null&&o&4&&Im(a);case 26:case 5:ya(e,a),t===null&&o&4&&Wm(a),o&512&&si(a,a.return);break;case 12:ya(e,a);break;case 31:ya(e,a),o&4&&oh(e,a);break;case 13:ya(e,a),o&4&&ih(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Lb.bind(null,a),iS(e,a))));break;case 22:if(o=a.memoizedState!==null||ga,!o){t=t!==null&&t.memoizedState!==null||Ze,l=ga;var u=Ze;ga=o,(Ze=t)&&!u?ba(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),ga=l,Ze=u}break;case 30:break;default:ya(e,a)}}function ah(e){var t=e.alternate;t!==null&&(e.alternate=null,ah(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_r(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,gt=!1;function va(e,t,a){for(a=a.child;a!==null;)nh(e,t,a),a=a.sibling}function nh(e,t,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(qo,a)}catch{}switch(a.tag){case 26:Ze||It(a,t),va(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||It(a,t);var o=Ue,l=gt;ka(a.type)&&(Ue=a.stateNode,gt=!1),va(e,t,a),pi(a.stateNode),Ue=o,gt=l;break;case 5:Ze||It(a,t);case 6:if(o=Ue,l=gt,Ue=null,va(e,t,a),Ue=o,gt=l,Ue!==null)if(gt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode)}catch(u){Me(a,t,u)}else try{Ue.removeChild(a.stateNode)}catch(u){Me(a,t,u)}break;case 18:Ue!==null&&(gt?(e=Ue,Kh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vo(e)):Kh(Ue,a.stateNode));break;case 4:o=Ue,l=gt,Ue=a.stateNode.containerInfo,gt=!0,va(e,t,a),Ue=o,gt=l;break;case 0:case 11:case 14:case 15:La(2,a,t),Ze||La(4,a,t),va(e,t,a);break;case 1:Ze||(It(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Fm(a,t,o)),va(e,t,a);break;case 21:va(e,t,a);break;case 22:Ze=(o=Ze)||a.memoizedState!==null,va(e,t,a),Ze=o;break;default:va(e,t,a)}}function oh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vo(e)}catch(a){Me(t,t.return,a)}}}function ih(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vo(e)}catch(a){Me(t,t.return,a)}}function Rb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new eh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new eh),t;default:throw Error(r(435,e.tag))}}function qs(e,t){var a=Rb(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var l=Hb.bind(null,e,o);o.then(l,l)}})}function vt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var l=a[o],u=e,d=t,v=d;e:for(;v!==null;){switch(v.tag){case 27:if(ka(v.type)){Ue=v.stateNode,gt=!1;break e}break;case 5:Ue=v.stateNode,gt=!1;break e;case 3:case 4:Ue=v.stateNode.containerInfo,gt=!0;break e}v=v.return}if(Ue===null)throw Error(r(160));nh(u,d,l),Ue=null,gt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sh(t,e),t=t.sibling}var Xt=null;function sh(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),yt(e),o&4&&(La(3,e,e.return),ii(3,e),La(5,e,e.return));break;case 1:vt(t,e),yt(e),o&512&&(Ze||a===null||It(a,a.return)),o&64&&ga&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var l=Xt;if(vt(t,e),yt(e),o&512&&(Ze||a===null||It(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[Vo]||u[tt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),it(u,o,a),u[tt]=e,Ie(u),o=u;break e;case"link":var d=sp("link","href",l).get(o+(a.href||""));if(d){for(var v=0;v<d.length;v++)if(u=d[v],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(v,1);break t}}u=l.createElement(o),it(u,o,a),l.head.appendChild(u);break;case"meta":if(d=sp("meta","content",l).get(o+(a.content||""))){for(v=0;v<d.length;v++)if(u=d[v],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(v,1);break t}}u=l.createElement(o),it(u,o,a),l.head.appendChild(u);break;default:throw Error(r(468,o))}u[tt]=e,Ie(u),o=u}e.stateNode=o}else rp(l,e.type,e.stateNode);else e.stateNode=ip(l,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?rp(l,e.type,e.stateNode):ip(l,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ou(e,e.memoizedProps,a.memoizedProps)}break;case 27:vt(t,e),yt(e),o&512&&(Ze||a===null||It(a,a.return)),a!==null&&o&4&&ou(e,e.memoizedProps,a.memoizedProps);break;case 5:if(vt(t,e),yt(e),o&512&&(Ze||a===null||It(a,a.return)),e.flags&32){l=e.stateNode;try{Ln(l,"")}catch($){Me(e,e.return,$)}}o&4&&e.stateNode!=null&&(l=e.memoizedProps,ou(e,l,a!==null?a.memoizedProps:l)),o&1024&&(ru=!0);break;case 6:if(vt(t,e),yt(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch($){Me(e,e.return,$)}}break;case 3:if(ks=null,l=Xt,Xt=Ps(t.containerInfo),vt(t,e),Xt=l,yt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch($){Me(e,e.return,$)}ru&&(ru=!1,rh(e));break;case 4:o=Xt,Xt=Ps(e.stateNode.containerInfo),vt(t,e),yt(e),Xt=o;break;case 12:vt(t,e),yt(e);break;case 31:vt(t,e),yt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qs(e,o)));break;case 13:vt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ns=Tt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qs(e,o)));break;case 22:l=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,M=ga,N=Ze;if(ga=M||l,Ze=N||T,vt(t,e),Ze=N,ga=M,yt(e),o&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||T||ga||Ze||xn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){T=a=t;try{if(u=T.stateNode,l)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=T.stateNode;var w=T.memoizedProps.style,z=w!=null&&w.hasOwnProperty("display")?w.display:null;v.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch($){Me(T,T.return,$)}}}else if(t.tag===6){if(a===null){T=t;try{T.stateNode.nodeValue=l?"":T.memoizedProps}catch($){Me(T,T.return,$)}}}else if(t.tag===18){if(a===null){T=t;try{var O=T.stateNode;l?Fh(O,!0):Fh(T.stateNode,!1)}catch($){Me(T,T.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,qs(e,a))));break;case 19:vt(t,e),yt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qs(e,o)));break;case 30:break;case 21:break;default:vt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if($m(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var l=a.stateNode,u=iu(e);Os(e,u,l);break;case 5:var d=a.stateNode;a.flags&32&&(Ln(d,""),a.flags&=-33);var v=iu(e);Os(e,v,d);break;case 3:case 4:var T=a.stateNode.containerInfo,M=iu(e);su(e,M,T);break;default:throw Error(r(161))}}catch(N){Me(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ya(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)th(e,t.alternate,t),t=t.sibling}function xn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:La(4,t,t.return),xn(t);break;case 1:It(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Fm(t,t.return,a),xn(t);break;case 27:pi(t.stateNode);case 26:case 5:It(t,t.return),xn(t);break;case 22:t.memoizedState===null&&xn(t);break;case 30:xn(t);break;default:xn(t)}e=e.sibling}}function ba(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,l=e,u=t,d=u.flags;switch(u.tag){case 0:case 11:case 15:ba(l,u,a),ii(4,u);break;case 1:if(ba(l,u,a),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(M){Me(o,o.return,M)}if(o=u,l=o.updateQueue,l!==null){var v=o.stateNode;try{var T=l.shared.hiddenCallbacks;if(T!==null)for(l.shared.hiddenCallbacks=null,l=0;l<T.length;l++)Bd(T[l],v)}catch(M){Me(o,o.return,M)}}a&&d&64&&Km(u),si(u,u.return);break;case 27:Im(u);case 26:case 5:ba(l,u,a),a&&o===null&&d&4&&Wm(u),si(u,u.return);break;case 12:ba(l,u,a);break;case 31:ba(l,u,a),a&&d&4&&oh(l,u);break;case 13:ba(l,u,a),a&&d&4&&ih(l,u);break;case 22:u.memoizedState===null&&ba(l,u,a),si(u,u.return);break;case 30:break;default:ba(l,u,a)}t=t.sibling}}function lu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ko(a))}function uu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ko(e))}function kt(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)lh(e,t,a,o),t=t.sibling}function lh(e,t,a,o){var l=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,a,o),l&2048&&ii(9,t);break;case 1:kt(e,t,a,o);break;case 3:kt(e,t,a,o),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ko(e)));break;case 12:if(l&2048){kt(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,d=u.id,v=u.onPostCommit;typeof v=="function"&&v(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Me(t,t.return,T)}}else kt(e,t,a,o);break;case 31:kt(e,t,a,o);break;case 13:kt(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,d=t.alternate,t.memoizedState!==null?u._visibility&2?kt(e,t,a,o):ri(e,t):u._visibility&2?kt(e,t,a,o):(u._visibility|=2,io(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),l&2048&&lu(d,t);break;case 24:kt(e,t,a,o),l&2048&&uu(t.alternate,t);break;default:kt(e,t,a,o)}}function io(e,t,a,o,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,d=t,v=a,T=o,M=d.flags;switch(d.tag){case 0:case 11:case 15:io(u,d,v,T,l),ii(8,d);break;case 23:break;case 22:var N=d.stateNode;d.memoizedState!==null?N._visibility&2?io(u,d,v,T,l):ri(u,d):(N._visibility|=2,io(u,d,v,T,l)),l&&M&2048&&lu(d.alternate,d);break;case 24:io(u,d,v,T,l),l&&M&2048&&uu(d.alternate,d);break;default:io(u,d,v,T,l)}t=t.sibling}}function ri(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,l=o.flags;switch(o.tag){case 22:ri(a,o),l&2048&&lu(o.alternate,o);break;case 24:ri(a,o),l&2048&&uu(o.alternate,o);break;default:ri(a,o)}t=t.sibling}}var li=8192;function so(e,t,a){if(e.subtreeFlags&li)for(e=e.child;e!==null;)uh(e,t,a),e=e.sibling}function uh(e,t,a){switch(e.tag){case 26:so(e,t,a),e.flags&li&&e.memoizedState!==null&&vS(a,Xt,e.memoizedState,e.memoizedProps);break;case 5:so(e,t,a);break;case 3:case 4:var o=Xt;Xt=Ps(e.stateNode.containerInfo),so(e,t,a),Xt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=li,li=16777216,so(e,t,a),li=o):so(e,t,a));break;default:so(e,t,a)}}function ch(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];et=o,dh(o,e)}ch(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fh(e),e=e.sibling}function fh(e){switch(e.tag){case 0:case 11:case 15:ui(e),e.flags&2048&&La(9,e,e.return);break;case 3:ui(e);break;case 12:ui(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rs(e)):ui(e);break;default:ui(e)}}function Rs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];et=o,dh(o,e)}ch(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:La(8,t,t.return),Rs(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Rs(t));break;default:Rs(t)}e=e.sibling}}function dh(e,t){for(;et!==null;){var a=et;switch(a.tag){case 0:case 11:case 15:La(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ko(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,et=o;else e:for(a=e;et!==null;){o=et;var l=o.sibling,u=o.return;if(ah(o),o===a){et=null;break e}if(l!==null){l.return=u,et=l;break e}et=u}}}var Nb={getCacheForType:function(e){var t=nt(Pe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return nt(Pe).controller.signal}},Vb=typeof WeakMap=="function"?WeakMap:Map,xe=0,qe=null,pe=null,ve=0,De=0,zt=null,Ha=!1,ro=!1,cu=!1,Sa=0,Le=0,Ga=0,An=0,fu=0,Ot=0,lo=0,ci=null,bt=null,du=!1,Ns=0,mh=0,Vs=1/0,ws=null,Qa=null,Ke=0,Ya=null,uo=null,Ta=0,mu=0,hu=null,hh=null,fi=0,pu=null;function qt(){return(xe&2)!==0&&ve!==0?ve&-ve:R.T!==null?Tu():qf()}function ph(){if(Ot===0)if((ve&536870912)===0||Se){var e=Qi;Qi<<=1,(Qi&3932160)===0&&(Qi=262144),Ot=e}else Ot=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Ot}function St(e,t,a){(e===qe&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(co(e,0),Pa(e,ve,Ot,!1)),No(e,a),((xe&2)===0||e!==qe)&&(e===qe&&((xe&2)===0&&(An|=a),Le===4&&Pa(e,ve,Ot,!1)),ea(e))}function gh(e,t,a){if((xe&6)!==0)throw Error(r(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ro(e,t),l=o?Ub(e,t):vu(e,t,!0),u=o;do{if(l===0){ro&&!o&&Pa(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!wb(a)){l=vu(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var v=e;l=ci;var T=v.current.memoizedState.isDehydrated;if(T&&(co(v,d).flags|=256),d=vu(v,d,!1),d!==2){if(cu&&!T){v.errorRecoveryDisabledLanes|=u,An|=u,l=4;break e}u=bt,bt=l,u!==null&&(bt===null?bt=u:bt.push.apply(bt,u))}l=d}if(u=!1,l!==2)continue}}if(l===1){co(e,0),Pa(e,t,0,!0);break}e:{switch(o=e,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Pa(o,t,Ot,!Ha);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(l=Ns+300-Tt(),10<l)){if(Pa(o,t,Ot,!Ha),Pi(o,0,!0)!==0)break e;Ta=t,o.timeoutHandle=Zh(vh.bind(null,o,a,bt,ws,du,t,Ot,An,lo,Ha,u,"Throttled",-0,0),l);break e}vh(o,a,bt,ws,du,t,Ot,An,lo,Ha,u,null,-0,0)}}break}while(!0);ea(e)}function vh(e,t,a,o,l,u,d,v,T,M,N,w,z,O){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},uh(t,u,w);var $=(u&62914560)===u?Ns-Tt():(u&4194048)===u?mh-Tt():0;if($=yS(w,$),$!==null){Ta=u,e.cancelPendingCommit=$(Dh.bind(null,e,t,u,a,o,l,d,v,T,N,w,null,z,O)),Pa(e,u,d,!M);return}}Dh(e,t,u,a,o,l,d,v,T)}function wb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var l=a[o],u=l.getSnapshot;l=l.value;try{if(!At(u(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pa(e,t,a,o){t&=~fu,t&=~An,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var u=31-xt(l),d=1<<u;o[u]=-1,l&=~d}a!==0&&Cf(e,a,t)}function js(){return(xe&6)===0?(di(0),!1):!0}function gu(){if(pe!==null){if(De===0)var e=pe.return;else e=pe,ca=pn=null,Nl(e),eo=null,Jo=0,e=pe;for(;e!==null;)Jm(e.alternate,e),e=e.return;pe=null}}function co(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,eS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ta=0,gu(),qe=e,pe=a=la(e.current,null),ve=t,De=0,zt=null,Ha=!1,ro=Ro(e,t),cu=!1,lo=Ot=fu=An=Ga=Le=0,bt=ci=null,du=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var l=31-xt(o),u=1<<l;t|=e[l],o&=~u}return Sa=t,as(),a}function yh(e,t){ce=null,R.H=ai,t===In||t===cs?(t=wd(),De=3):t===Sl?(t=wd(),De=4):De=t===Jl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zt=t,pe===null&&(Le=1,As(e,jt(t,e.current)))}function bh(){var e=Mt.current;return e===null?!0:(ve&4194048)===ve?Lt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Lt:!1}function Sh(){var e=R.H;return R.H=ai,e===null?ai:e}function Th(){var e=R.A;return R.A=Nb,e}function Us(){Le=4,Ha||(ve&4194048)!==ve&&Mt.current!==null||(ro=!0),(Ga&134217727)===0&&(An&134217727)===0||qe===null||Pa(qe,ve,Ot,!1)}function vu(e,t,a){var o=xe;xe|=2;var l=Sh(),u=Th();(qe!==e||ve!==t)&&(ws=null,co(e,t)),t=!1;var d=Le;e:do try{if(De!==0&&pe!==null){var v=pe,T=zt;switch(De){case 8:gu(),d=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var M=De;if(De=0,zt=null,fo(e,v,T,M),a&&ro){d=0;break e}break;default:M=De,De=0,zt=null,fo(e,v,T,M)}}jb(),d=Le;break}catch(N){yh(e,N)}while(!0);return t&&e.shellSuspendCounter++,ca=pn=null,xe=o,R.H=l,R.A=u,pe===null&&(qe=null,ve=0,as()),d}function jb(){for(;pe!==null;)Eh(pe)}function Ub(e,t){var a=xe;xe|=2;var o=Sh(),l=Th();qe!==e||ve!==t?(ws=null,Vs=Tt()+500,co(e,t)):ro=Ro(e,t);e:do try{if(De!==0&&pe!==null){t=pe;var u=zt;t:switch(De){case 1:De=0,zt=null,fo(e,t,u,1);break;case 2:case 9:if(Nd(u)){De=0,zt=null,xh(t);break}t=function(){De!==2&&De!==9||qe!==e||(De=7),ea(e)},u.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:Nd(u)?(De=0,zt=null,xh(t)):(De=0,zt=null,fo(e,t,u,7));break;case 5:var d=null;switch(pe.tag){case 26:d=pe.memoizedState;case 5:case 27:var v=pe;if(d?lp(d):v.stateNode.complete){De=0,zt=null;var T=v.sibling;if(T!==null)pe=T;else{var M=v.return;M!==null?(pe=M,_s(M)):pe=null}break t}}De=0,zt=null,fo(e,t,u,5);break;case 6:De=0,zt=null,fo(e,t,u,6);break;case 8:gu(),Le=6;break e;default:throw Error(r(462))}}_b();break}catch(N){yh(e,N)}while(!0);return ca=pn=null,R.H=o,R.A=l,xe=a,pe!==null?0:(qe=null,ve=0,as(),Le)}function _b(){for(;pe!==null&&!s0();)Eh(pe)}function Eh(e){var t=km(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,t===null?_s(e):pe=t}function xh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Hm(a,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=Hm(a,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:Nl(t);default:Jm(a,t),t=pe=Td(t,Sa),t=km(a,t,Sa)}e.memoizedProps=e.pendingProps,t===null?_s(e):pe=t}function fo(e,t,a,o){ca=pn=null,Nl(t),eo=null,Jo=0;var l=t.return;try{if(Db(e,l,t,a,ve)){Le=1,As(e,jt(a,e.current)),pe=null;return}}catch(u){if(l!==null)throw pe=l,u;Le=1,As(e,jt(a,e.current)),pe=null;return}t.flags&32768?(Se||o===1?e=!0:ro||(ve&536870912)!==0?e=!1:(Ha=e=!0,(o===2||o===9||o===3||o===6)&&(o=Mt.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ah(t,e)):_s(t)}function _s(e){var t=e;do{if((t.flags&32768)!==0){Ah(t,Ha);return}e=t.return;var a=zb(t.alternate,t,Sa);if(a!==null){pe=a;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);Le===0&&(Le=5)}function Ah(e,t){do{var a=Ob(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Le=6,pe=null}function Dh(e,t,a,o,l,u,d,v,T){e.cancelPendingCommit=null;do Bs();while(Ke!==0);if((xe&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=il,g0(e,a,u,d,v,T),e===qe&&(pe=qe=null,ve=0),uo=t,Ya=e,Ta=a,mu=u,hu=l,hh=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gb(Hi,function(){return qh(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=R.T,R.T=null,l=H.p,H.p=2,d=xe,xe|=4;try{qb(e,t,a)}finally{xe=d,H.p=l,R.T=o}}Ke=1,Mh(),Ch(),zh()}}function Mh(){if(Ke===1){Ke=0;var e=Ya,t=uo,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var o=H.p;H.p=2;var l=xe;xe|=4;try{sh(t,e);var u=Ou,d=dd(e.containerInfo),v=u.focusedElem,T=u.selectionRange;if(d!==v&&v&&v.ownerDocument&&fd(v.ownerDocument.documentElement,v)){if(T!==null&&el(v)){var M=T.start,N=T.end;if(N===void 0&&(N=M),"selectionStart"in v)v.selectionStart=M,v.selectionEnd=Math.min(N,v.value.length);else{var w=v.ownerDocument||document,z=w&&w.defaultView||window;if(z.getSelection){var O=z.getSelection(),$=v.textContent.length,le=Math.min(T.start,$),Oe=T.end===void 0?le:Math.min(T.end,$);!O.extend&&le>Oe&&(d=Oe,Oe=le,le=d);var A=cd(v,le),E=cd(v,Oe);if(A&&E&&(O.rangeCount!==1||O.anchorNode!==A.node||O.anchorOffset!==A.offset||O.focusNode!==E.node||O.focusOffset!==E.offset)){var D=w.createRange();D.setStart(A.node,A.offset),O.removeAllRanges(),le>Oe?(O.addRange(D),O.extend(E.node,E.offset)):(D.setEnd(E.node,E.offset),O.addRange(D))}}}}for(w=[],O=v;O=O.parentNode;)O.nodeType===1&&w.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<w.length;v++){var V=w[v];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Fs=!!zu,Ou=zu=null}finally{xe=l,H.p=o,R.T=a}}e.current=t,Ke=2}}function Ch(){if(Ke===2){Ke=0;var e=Ya,t=uo,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var o=H.p;H.p=2;var l=xe;xe|=4;try{th(e,t.alternate,t)}finally{xe=l,H.p=o,R.T=a}}Ke=3}}function zh(){if(Ke===4||Ke===3){Ke=0,r0();var e=Ya,t=uo,a=Ta,o=hh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,uo=Ya=null,Oh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Qa=null),jr(a),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(qo,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=R.T,l=H.p,H.p=2,R.T=null;try{for(var u=e.onRecoverableError,d=0;d<o.length;d++){var v=o[d];u(v.value,{componentStack:v.stack})}}finally{R.T=t,H.p=l}}(Ta&3)!==0&&Bs(),ea(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===pu?fi++:(fi=0,pu=e):fi=0,di(0)}}function Oh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ko(t)))}function Bs(){return Mh(),Ch(),zh(),qh()}function qh(){if(Ke!==5)return!1;var e=Ya,t=mu;mu=0;var a=jr(Ta),o=R.T,l=H.p;try{H.p=32>a?32:a,R.T=null,a=hu,hu=null;var u=Ya,d=Ta;if(Ke=0,uo=Ya=null,Ta=0,(xe&6)!==0)throw Error(r(331));var v=xe;if(xe|=4,fh(u.current),lh(u,u.current,d,a),xe=v,di(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(qo,u)}catch{}return!0}finally{H.p=l,R.T=o,Oh(e,t)}}function Rh(e,t,a){t=jt(a,t),t=Zl(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&(No(e,2),ea(e))}function Me(e,t,a){if(e.tag===3)Rh(e,e,a);else for(;t!==null;){if(t.tag===3){Rh(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qa===null||!Qa.has(o))){e=jt(a,e),a=Nm(2),o=Ua(t,a,2),o!==null&&(Vm(a,o,t,e),No(o,2),ea(o));break}}t=t.return}}function yu(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Vb;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(a)||(cu=!0,l.add(a),e=Bb.bind(null,e,t,a),t.then(e,e))}function Bb(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ve&a)===a&&(Le===4||Le===3&&(ve&62914560)===ve&&300>Tt()-Ns?(xe&2)===0&&co(e,0):fu|=a,lo===ve&&(lo=0)),ea(e)}function Nh(e,t){t===0&&(t=Mf()),e=dn(e,t),e!==null&&(No(e,t),ea(e))}function Lb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Nh(e,a)}function Hb(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(t),Nh(e,a)}function Gb(e,t){return Rr(e,t)}var Ls=null,mo=null,bu=!1,Hs=!1,Su=!1,Xa=0;function ea(e){e!==mo&&e.next===null&&(mo===null?Ls=mo=e:mo=mo.next=e),Hs=!0,bu||(bu=!0,Yb())}function di(e,t){if(!Su&&Hs){Su=!0;do for(var a=!1,o=Ls;o!==null;){if(e!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var d=o.suspendedLanes,v=o.pingedLanes;u=(1<<31-xt(42|e)+1)-1,u&=l&~(d&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Uh(o,u))}else u=ve,u=Pi(o,o===qe?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Ro(o,u)||(a=!0,Uh(o,u));o=o.next}while(a);Su=!1}}function Qb(){Vh()}function Vh(){Hs=bu=!1;var e=0;Xa!==0&&Ib()&&(e=Xa);for(var t=Tt(),a=null,o=Ls;o!==null;){var l=o.next,u=wh(o,t);u===0?(o.next=null,a===null?Ls=l:a.next=l,l===null&&(mo=a)):(a=o,(e!==0||(u&3)!==0)&&(Hs=!0)),o=l}Ke!==0&&Ke!==5||di(e),Xa!==0&&(Xa=0)}function wh(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var d=31-xt(u),v=1<<d,T=l[d];T===-1?((v&a)===0||(v&o)!==0)&&(l[d]=p0(v,t)):T<=t&&(e.expiredLanes|=v),u&=~v}if(t=qe,a=ve,a=Pi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Nr(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ro(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Nr(o),jr(a)){case 2:case 8:a=Af;break;case 32:a=Hi;break;case 268435456:a=Df;break;default:a=Hi}return o=jh.bind(null,e),a=Rr(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Nr(o),e.callbackPriority=2,e.callbackNode=null,2}function jh(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bs()&&e.callbackNode!==a)return null;var o=ve;return o=Pi(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(gh(e,o,t),wh(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?jh.bind(null,e):null)}function Uh(e,t){if(Bs())return null;gh(e,t,!0)}function Yb(){tS(function(){(xe&6)!==0?Rr(xf,Qb):Vh()})}function Tu(){if(Xa===0){var e=Wn;e===0&&(e=Gi,Gi<<=1,(Gi&261888)===0&&(Gi=256)),Xa=e}return Xa}function _h(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ji(""+e)}function Bh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Pb(e,t,a,o,l){if(t==="submit"&&a&&a.stateNode===l){var u=_h((l[ht]||null).action),d=o.submitter;d&&(t=(t=d[ht]||null)?_h(t.formAction):d.getAttribute("formAction"),t!==null&&(u=t,d=null));var v=new $i("action","action",null,o,l);e.push({event:v,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var T=d?Bh(l,d):new FormData(l);Gl(a,{pending:!0,data:T,method:l.method,action:u},null,T)}}else typeof u=="function"&&(v.preventDefault(),T=d?Bh(l,d):new FormData(l),Gl(a,{pending:!0,data:T,method:l.method,action:u},u,T))},currentTarget:l}]})}}for(var Eu=0;Eu<ol.length;Eu++){var xu=ol[Eu],Xb=xu.toLowerCase(),kb=xu[0].toUpperCase()+xu.slice(1);Pt(Xb,"on"+kb)}Pt(pd,"onAnimationEnd"),Pt(gd,"onAnimationIteration"),Pt(vd,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(lb,"onTransitionRun"),Pt(ub,"onTransitionStart"),Pt(cb,"onTransitionCancel"),Pt(yd,"onTransitionEnd"),_n("onMouseEnter",["mouseout","mouseover"]),_n("onMouseLeave",["mouseout","mouseover"]),_n("onPointerEnter",["pointerout","pointerover"]),_n("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mi));function Lh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var d=o.length-1;0<=d;d--){var v=o[d],T=v.instance,M=v.currentTarget;if(v=v.listener,T!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=M;try{u(l)}catch(N){ts(N)}l.currentTarget=null,u=T}else for(d=0;d<o.length;d++){if(v=o[d],T=v.instance,M=v.currentTarget,v=v.listener,T!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=M;try{u(l)}catch(N){ts(N)}l.currentTarget=null,u=T}}}}function ge(e,t){var a=t[Ur];a===void 0&&(a=t[Ur]=new Set);var o=e+"__bubble";a.has(o)||(Hh(t,e,2,!1),a.add(o))}function Au(e,t,a){var o=0;t&&(o|=4),Hh(a,e,o,t)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function Du(e){if(!e[Gs]){e[Gs]=!0,Vf.forEach(function(a){a!=="selectionchange"&&(Zb.has(a)||Au(a,!1,e),Au(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gs]||(t[Gs]=!0,Au("selectionchange",!1,t))}}function Hh(e,t,a,o){switch(pp(t)){case 2:var l=TS;break;case 8:l=ES;break;default:l=Hu}a=l.bind(null,t,a,e),l=void 0,!Xr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Mu(e,t,a,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var v=o.stateNode.containerInfo;if(v===l)break;if(d===4)for(d=o.return;d!==null;){var T=d.tag;if((T===3||T===4)&&d.stateNode.containerInfo===l)return;d=d.return}for(;v!==null;){if(d=wn(v),d===null)return;if(T=d.tag,T===5||T===6||T===26||T===27){o=u=d;continue e}v=v.parentNode}}o=o.return}Xf(function(){var M=u,N=Yr(a),w=[];e:{var z=bd.get(e);if(z!==void 0){var O=$i,$=e;switch(e){case"keypress":if(Fi(a)===0)break e;case"keydown":case"keyup":O=H0;break;case"focusin":$="focus",O=Kr;break;case"focusout":$="blur",O=Kr;break;case"beforeblur":case"afterblur":O=Kr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Y0;break;case pd:case gd:case vd:O=R0;break;case yd:O=X0;break;case"scroll":case"scrollend":O=M0;break;case"wheel":O=Z0;break;case"copy":case"cut":case"paste":O=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Ff;break;case"toggle":case"beforetoggle":O=K0}var le=(t&4)!==0,Oe=!le&&(e==="scroll"||e==="scrollend"),A=le?z!==null?z+"Capture":null:z;le=[];for(var E=M,D;E!==null;){var V=E;if(D=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||D===null||A===null||(V=jo(E,A),V!=null&&le.push(hi(E,V,D))),Oe)break;E=E.return}0<le.length&&(z=new O(z,$,null,a,N),w.push({event:z,listeners:le}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",z&&a!==Qr&&($=a.relatedTarget||a.fromElement)&&(wn($)||$[Vn]))break e;if((O||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,O?($=a.relatedTarget||a.toElement,O=M,$=$?wn($):null,$!==null&&(Oe=m($),le=$.tag,$!==Oe||le!==5&&le!==27&&le!==6)&&($=null)):(O=null,$=M),O!==$)){if(le=Jf,V="onMouseLeave",A="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(le=Ff,V="onPointerLeave",A="onPointerEnter",E="pointer"),Oe=O==null?z:wo(O),D=$==null?z:wo($),z=new le(V,E+"leave",O,a,N),z.target=Oe,z.relatedTarget=D,V=null,wn(N)===M&&(le=new le(A,E+"enter",$,a,N),le.target=D,le.relatedTarget=Oe,V=le),Oe=V,O&&$)t:{for(le=Jb,A=O,E=$,D=0,V=A;V;V=le(V))D++;V=0;for(var se=E;se;se=le(se))V++;for(;0<D-V;)A=le(A),D--;for(;0<V-D;)E=le(E),V--;for(;D--;){if(A===E||E!==null&&A===E.alternate){le=A;break t}A=le(A),E=le(E)}le=null}else le=null;O!==null&&Gh(w,z,O,le,!1),$!==null&&Oe!==null&&Gh(w,Oe,$,le,!0)}}e:{if(z=M?wo(M):window,O=z.nodeName&&z.nodeName.toLowerCase(),O==="select"||O==="input"&&z.type==="file")var Te=od;else if(ad(z))if(id)Te=ib;else{Te=nb;var ae=ab}else O=z.nodeName,!O||O.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?M&&Gr(M.elementType)&&(Te=od):Te=ob;if(Te&&(Te=Te(e,M))){nd(w,Te,a,N);break e}ae&&ae(e,z,M),e==="focusout"&&M&&z.type==="number"&&M.memoizedProps.value!=null&&Hr(z,"number",z.value)}switch(ae=M?wo(M):window,e){case"focusin":(ad(ae)||ae.contentEditable==="true")&&(Yn=ae,tl=M,Yo=null);break;case"focusout":Yo=tl=Yn=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,md(w,a,N);break;case"selectionchange":if(rb)break;case"keydown":case"keyup":md(w,a,N)}var fe;if(Wr)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Qn?ed(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Wf&&a.locale!=="ko"&&(Qn||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Qn&&(fe=kf()):(Oa=N,kr="value"in Oa?Oa.value:Oa.textContent,Qn=!0)),ae=Qs(M,ye),0<ae.length&&(ye=new Kf(ye,e,null,a,N),w.push({event:ye,listeners:ae}),fe?ye.data=fe:(fe=td(a),fe!==null&&(ye.data=fe)))),(fe=W0?$0(e,a):I0(e,a))&&(ye=Qs(M,"onBeforeInput"),0<ye.length&&(ae=new Kf("onBeforeInput","beforeinput",null,a,N),w.push({event:ae,listeners:ye}),ae.data=fe)),Pb(w,e,M,a,N)}Lh(w,t)})}function hi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Qs(e,t){for(var a=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=jo(e,a),l!=null&&o.unshift(hi(e,l,u)),l=jo(e,t),l!=null&&o.push(hi(e,l,u))),e.tag===3)return o;e=e.return}return[]}function Jb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gh(e,t,a,o,l){for(var u=t._reactName,d=[];a!==null&&a!==o;){var v=a,T=v.alternate,M=v.stateNode;if(v=v.tag,T!==null&&T===o)break;v!==5&&v!==26&&v!==27||M===null||(T=M,l?(M=jo(a,u),M!=null&&d.unshift(hi(a,M,T))):l||(M=jo(a,u),M!=null&&d.push(hi(a,M,T)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var Kb=/\r\n?/g,Fb=/\u0000|\uFFFD/g;function Qh(e){return(typeof e=="string"?e:""+e).replace(Kb,`
`).replace(Fb,"")}function Yh(e,t){return t=Qh(t),Qh(e)===t}function ze(e,t,a,o,l,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Ln(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Ln(e,""+o);break;case"className":ki(e,"class",o);break;case"tabIndex":ki(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ki(e,a,o);break;case"style":Yf(e,o,u);break;case"data":if(t!=="object"){ki(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ji(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&ze(e,t,"name",l.name,l,null),ze(e,t,"formEncType",l.formEncType,l,null),ze(e,t,"formMethod",l.formMethod,l,null),ze(e,t,"formTarget",l.formTarget,l,null)):(ze(e,t,"encType",l.encType,l,null),ze(e,t,"method",l.method,l,null),ze(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ji(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=sa);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ji(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Xi(e,"popover",o);break;case"xlinkActuate":ia(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ia(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ia(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ia(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ia(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ia(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ia(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ia(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ia(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xi(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=A0.get(a)||a,Xi(e,a,o))}}function Cu(e,t,a,o,l,u){switch(a){case"style":Yf(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ln(e,o):(typeof o=="number"||typeof o=="bigint")&&Ln(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),u=e[ht]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,l);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Xi(e,a,o)}}}function it(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var d=a[u];if(d!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,u,d,a,null)}}l&&ze(e,t,"srcSet",a.srcSet,a,null),o&&ze(e,t,"src",a.src,a,null);return;case"input":ge("invalid",e);var v=u=d=l=null,T=null,M=null;for(o in a)if(a.hasOwnProperty(o)){var N=a[o];if(N!=null)switch(o){case"name":l=N;break;case"type":d=N;break;case"checked":T=N;break;case"defaultChecked":M=N;break;case"value":u=N;break;case"defaultValue":v=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,t));break;default:ze(e,t,o,N,a,null)}}Lf(e,u,v,T,M,d,l,!1);return;case"select":ge("invalid",e),o=d=u=null;for(l in a)if(a.hasOwnProperty(l)&&(v=a[l],v!=null))switch(l){case"value":u=v;break;case"defaultValue":d=v;break;case"multiple":o=v;default:ze(e,t,l,v,a,null)}t=u,a=d,e.multiple=!!o,t!=null?Bn(e,!!o,t,!1):a!=null&&Bn(e,!!o,a,!0);return;case"textarea":ge("invalid",e),u=l=o=null;for(d in a)if(a.hasOwnProperty(d)&&(v=a[d],v!=null))switch(d){case"value":o=v;break;case"defaultValue":l=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(91));break;default:ze(e,t,d,v,a,null)}Gf(e,o,l,u);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(o=a[T],o!=null))switch(T){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,t,T,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<mi.length;o++)ge(mi[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(o=a[M],o!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,M,o,a,null)}return;default:if(Gr(t)){for(N in a)a.hasOwnProperty(N)&&(o=a[N],o!==void 0&&Cu(e,t,N,o,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(o=a[v],o!=null&&ze(e,t,v,o,a,null))}function Wb(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,d=null,v=null,T=null,M=null,N=null;for(O in a){var w=a[O];if(a.hasOwnProperty(O)&&w!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":T=w;default:o.hasOwnProperty(O)||ze(e,t,O,null,o,w)}}for(var z in o){var O=o[z];if(w=a[z],o.hasOwnProperty(z)&&(O!=null||w!=null))switch(z){case"type":u=O;break;case"name":l=O;break;case"checked":M=O;break;case"defaultChecked":N=O;break;case"value":d=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:O!==w&&ze(e,t,z,O,o,w)}}Lr(e,d,v,T,M,N,u,l);return;case"select":O=d=v=z=null;for(u in a)if(T=a[u],a.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":O=T;default:o.hasOwnProperty(u)||ze(e,t,u,null,o,T)}for(l in o)if(u=o[l],T=a[l],o.hasOwnProperty(l)&&(u!=null||T!=null))switch(l){case"value":z=u;break;case"defaultValue":v=u;break;case"multiple":d=u;default:u!==T&&ze(e,t,l,u,o,T)}t=v,a=d,o=O,z!=null?Bn(e,!!a,z,!1):!!o!=!!a&&(t!=null?Bn(e,!!a,t,!0):Bn(e,!!a,a?[]:"",!1));return;case"textarea":O=z=null;for(v in a)if(l=a[v],a.hasOwnProperty(v)&&l!=null&&!o.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:ze(e,t,v,null,o,l)}for(d in o)if(l=o[d],u=a[d],o.hasOwnProperty(d)&&(l!=null||u!=null))switch(d){case"value":z=l;break;case"defaultValue":O=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&ze(e,t,d,l,o,u)}Hf(e,z,O);return;case"option":for(var $ in a)if(z=a[$],a.hasOwnProperty($)&&z!=null&&!o.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:ze(e,t,$,null,o,z)}for(T in o)if(z=o[T],O=a[T],o.hasOwnProperty(T)&&z!==O&&(z!=null||O!=null))switch(T){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:ze(e,t,T,z,o,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)z=a[le],a.hasOwnProperty(le)&&z!=null&&!o.hasOwnProperty(le)&&ze(e,t,le,null,o,z);for(M in o)if(z=o[M],O=a[M],o.hasOwnProperty(M)&&z!==O&&(z!=null||O!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,t));break;default:ze(e,t,M,z,o,O)}return;default:if(Gr(t)){for(var Oe in a)z=a[Oe],a.hasOwnProperty(Oe)&&z!==void 0&&!o.hasOwnProperty(Oe)&&Cu(e,t,Oe,void 0,o,z);for(N in o)z=o[N],O=a[N],!o.hasOwnProperty(N)||z===O||z===void 0&&O===void 0||Cu(e,t,N,z,o,O);return}}for(var A in a)z=a[A],a.hasOwnProperty(A)&&z!=null&&!o.hasOwnProperty(A)&&ze(e,t,A,null,o,z);for(w in o)z=o[w],O=a[w],!o.hasOwnProperty(w)||z===O||z==null&&O==null||ze(e,t,w,z,o,O)}function Ph(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $b(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var l=a[o],u=l.transferSize,d=l.initiatorType,v=l.duration;if(u&&v&&Ph(d)){for(d=0,v=l.responseEnd,o+=1;o<a.length;o++){var T=a[o],M=T.startTime;if(M>v)break;var N=T.transferSize,w=T.initiatorType;N&&Ph(w)&&(T=T.responseEnd,d+=N*(T<v?1:(v-M)/(T-M)))}if(--o,t+=8*(u+d)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zu=null,Ou=null;function Ys(e){return e.nodeType===9?e:e.ownerDocument}function Xh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ru=null;function Ib(){var e=window.event;return e&&e.type==="popstate"?e===Ru?!1:(Ru=e,!0):(Ru=null,!1)}var Zh=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(e){return Jh.resolve(null).then(e).catch(aS)}:Zh;function aS(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function Kh(e,t){var a=t,o=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(l),vo(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")pi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pi(a);for(var u=a.firstChild;u;){var d=u.nextSibling,v=u.nodeName;u[Vo]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=d}}else a==="body"&&pi(e.ownerDocument.body);a=l}while(a);vo(t)}function Fh(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Nu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nu(a),_r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function nS(e,t,a,o){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Vo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function oS(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ht(e.nextSibling),e===null))return null;return e}function Wh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ht(e.nextSibling),e===null))return null;return e}function Vu(e){return e.data==="$?"||e.data==="$~"}function wu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iS(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ju=null;function $h(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ih(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function ep(e,t,a){switch(t=Ys(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function pi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_r(e)}var Gt=new Map,tp=new Set;function Ps(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=H.d;H.d={f:sS,r:rS,D:lS,C:uS,L:cS,m:fS,X:mS,S:dS,M:hS};function sS(){var e=Ea.f(),t=js();return e||t}function rS(e){var t=jn(e);t!==null&&t.tag===5&&t.type==="form"?ym(t):Ea.r(e)}var ho=typeof document>"u"?null:document;function ap(e,t,a){var o=ho;if(o&&typeof t=="string"&&t){var l=Vt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),tp.has(l)||(tp.add(l),e={rel:e,crossOrigin:a,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),it(t,"link",e),Ie(t),o.head.appendChild(t)))}}function lS(e){Ea.D(e),ap("dns-prefetch",e,null)}function uS(e,t){Ea.C(e,t),ap("preconnect",e,t)}function cS(e,t,a){Ea.L(e,t,a);var o=ho;if(o&&e&&t){var l='link[rel="preload"][as="'+Vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Vt(a.imageSizes)+'"]')):l+='[href="'+Vt(e)+'"]';var u=l;switch(t){case"style":u=po(e);break;case"script":u=go(e)}Gt.has(u)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Gt.set(u,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(gi(u))||t==="script"&&o.querySelector(vi(u))||(t=o.createElement("link"),it(t,"link",e),Ie(t),o.head.appendChild(t)))}}function fS(e,t){Ea.m(e,t);var a=ho;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(e)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=go(e)}if(!Gt.has(u)&&(e=b({rel:"modulepreload",href:e},t),Gt.set(u,e),a.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vi(u)))return}o=a.createElement("link"),it(o,"link",e),Ie(o),a.head.appendChild(o)}}}function dS(e,t,a){Ea.S(e,t,a);var o=ho;if(o&&e){var l=Un(o).hoistableStyles,u=po(e);t=t||"default";var d=l.get(u);if(!d){var v={loading:0,preload:null};if(d=o.querySelector(gi(u)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Gt.get(u))&&Uu(e,a);var T=d=o.createElement("link");Ie(T),it(T,"link",e),T._p=new Promise(function(M,N){T.onload=M,T.onerror=N}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Xs(d,t,o)}d={type:"stylesheet",instance:d,count:1,state:v},l.set(u,d)}}}function mS(e,t){Ea.X(e,t);var a=ho;if(a&&e){var o=Un(a).hoistableScripts,l=go(e),u=o.get(l);u||(u=a.querySelector(vi(l)),u||(e=b({src:e,async:!0},t),(t=Gt.get(l))&&_u(e,t),u=a.createElement("script"),Ie(u),it(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function hS(e,t){Ea.M(e,t);var a=ho;if(a&&e){var o=Un(a).hoistableScripts,l=go(e),u=o.get(l);u||(u=a.querySelector(vi(l)),u||(e=b({src:e,async:!0,type:"module"},t),(t=Gt.get(l))&&_u(e,t),u=a.createElement("script"),Ie(u),it(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function np(e,t,a,o){var l=(l=re.current)?Ps(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=po(a.href),a=Un(l).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=po(a.href);var u=Un(l).hoistableStyles,d=u.get(e);if(d||(l=l.ownerDocument||l,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=l.querySelector(gi(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gt.set(e,a),u||pS(l,e,a,d.state))),t&&o===null)throw Error(r(528,""));return d}if(t&&o!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=go(a),a=Un(l).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function po(e){return'href="'+Vt(e)+'"'}function gi(e){return'link[rel="stylesheet"]['+e+"]"}function op(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function pS(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),it(t,"link",a),Ie(t),e.head.appendChild(t))}function go(e){return'[src="'+Vt(e)+'"]'}function vi(e){return"script[async]"+e}function ip(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return t.instance=o,Ie(o),o;var l=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ie(o),it(o,"style",l),Xs(o,a.precedence,e),t.instance=o;case"stylesheet":l=po(a.href);var u=e.querySelector(gi(l));if(u)return t.state.loading|=4,t.instance=u,Ie(u),u;o=op(a),(l=Gt.get(l))&&Uu(o,l),u=(e.ownerDocument||e).createElement("link"),Ie(u);var d=u;return d._p=new Promise(function(v,T){d.onload=v,d.onerror=T}),it(u,"link",o),t.state.loading|=4,Xs(u,a.precedence,e),t.instance=u;case"script":return u=go(a.src),(l=e.querySelector(vi(u)))?(t.instance=l,Ie(l),l):(o=a,(l=Gt.get(u))&&(o=b({},a),_u(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),it(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Xs(o,a.precedence,e));return t.instance}function Xs(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,d=0;d<o.length;d++){var v=o[d];if(v.dataset.precedence===t)u=v;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function _u(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ks=null;function sp(e,t,a){if(ks===null){var o=new Map,l=ks=new Map;l.set(a,o)}else l=ks,o=l.get(a),o||(o=new Map,l.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Vo]||u[tt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(t)||"";d=e+d;var v=o.get(d);v?v.push(u):o.set(d,[u])}}return o}function rp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function gS(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function lp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vS(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=po(o.href),u=t.querySelector(gi(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,Ie(u);return}u=t.ownerDocument||t,o=op(o),(l=Gt.get(l))&&Uu(o,l),u=u.createElement("link"),Ie(u);var d=u;d._p=new Promise(function(v,T){d.onload=v,d.onerror=T}),it(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Bu=0;function yS(e,t){return e.stylesheets&&e.count===0&&Ks(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ks(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Bu===0&&(Bu=62500*$b());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ks(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Bu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function Zs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ks(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Js=null;function Ks(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Js=new Map,t.forEach(bS,e),Js=null,Zs.call(e))}function bS(e,t){if(!(t.state.loading&4)){var a=Js.get(e);if(a)var o=a.get(null);else{a=new Map,Js.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var d=l[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),o=d)}o&&a.set(null,o)}l=t.instance,d=l.getAttribute("data-precedence"),u=a.get(d)||o,u===o&&a.set(null,l),a.set(d,l),this.count++,o=Zs.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var yi={$$typeof:G,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function SS(e,t,a,o,l,u,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.hiddenUpdates=Vr(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function up(e,t,a,o,l,u,d,v,T,M,N,w){return e=new SS(e,t,a,d,T,M,N,w,v),t=1,u===!0&&(t|=24),u=Dt(3,null,null,t),e.current=u,u.stateNode=e,t=vl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},Tl(u),e}function cp(e){return e?(e=kn,e):kn}function fp(e,t,a,o,l,u){l=cp(l),o.context===null?o.context=l:o.pendingContext=l,o=ja(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=Ua(e,o,t),a!==null&&(St(a,e,t),Fo(a,e,t))}function dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Lu(e,t){dp(e,t),(e=e.alternate)&&dp(e,t)}function mp(e){if(e.tag===13||e.tag===31){var t=dn(e,67108864);t!==null&&St(t,e,67108864),Lu(e,67108864)}}function hp(e){if(e.tag===13||e.tag===31){var t=qt();t=wr(t);var a=dn(e,t);a!==null&&St(a,e,t),Lu(e,t)}}var Fs=!0;function TS(e,t,a,o){var l=R.T;R.T=null;var u=H.p;try{H.p=2,Hu(e,t,a,o)}finally{H.p=u,R.T=l}}function ES(e,t,a,o){var l=R.T;R.T=null;var u=H.p;try{H.p=8,Hu(e,t,a,o)}finally{H.p=u,R.T=l}}function Hu(e,t,a,o){if(Fs){var l=Gu(o);if(l===null)Mu(e,t,o,Ws,a),gp(e,o);else if(AS(l,e,t,a,o))o.stopPropagation();else if(gp(e,o),t&4&&-1<xS.indexOf(e)){for(;l!==null;){var u=jn(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=rn(u.pendingLanes);if(d!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;d;){var T=1<<31-xt(d);v.entanglements[1]|=T,d&=~T}ea(u),(xe&6)===0&&(Vs=Tt()+500,di(0))}}break;case 31:case 13:v=dn(u,2),v!==null&&St(v,u,2),js(),Lu(u,2)}if(u=Gu(o),u===null&&Mu(e,t,o,Ws,a),u===l)break;l=u}l!==null&&o.stopPropagation()}else Mu(e,t,o,null,a)}}function Gu(e){return e=Yr(e),Qu(e)}var Ws=null;function Qu(e){if(Ws=null,e=wn(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=f(t),e!==null)return e;e=null}else if(a===31){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ws=e,null}function pp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(l0()){case xf:return 2;case Af:return 8;case Hi:case u0:return 32;case Df:return 268435456;default:return 32}default:return 32}}var Yu=!1,Za=null,Ja=null,Ka=null,bi=new Map,Si=new Map,Fa=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gp(e,t){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Ti(e,t,a,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=jn(t),t!==null&&mp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function AS(e,t,a,o,l){switch(t){case"focusin":return Za=Ti(Za,e,t,a,o,l),!0;case"dragenter":return Ja=Ti(Ja,e,t,a,o,l),!0;case"mouseover":return Ka=Ti(Ka,e,t,a,o,l),!0;case"pointerover":var u=l.pointerId;return bi.set(u,Ti(bi.get(u)||null,e,t,a,o,l)),!0;case"gotpointercapture":return u=l.pointerId,Si.set(u,Ti(Si.get(u)||null,e,t,a,o,l)),!0}return!1}function vp(e){var t=wn(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=f(a),t!==null){e.blockedOn=t,Rf(e.priority,function(){hp(a)});return}}else if(t===31){if(t=h(a),t!==null){e.blockedOn=t,Rf(e.priority,function(){hp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Gu(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Qr=o,a.target.dispatchEvent(o),Qr=null}else return t=jn(a),t!==null&&mp(t),e.blockedOn=a,!1;t.shift()}return!0}function yp(e,t,a){$s(e)&&a.delete(t)}function DS(){Yu=!1,Za!==null&&$s(Za)&&(Za=null),Ja!==null&&$s(Ja)&&(Ja=null),Ka!==null&&$s(Ka)&&(Ka=null),bi.forEach(yp),Si.forEach(yp)}function Is(e,t){e.blockedOn===t&&(e.blockedOn=null,Yu||(Yu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,DS)))}var er=null;function bp(e){er!==e&&(er=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){er===e&&(er=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(Qu(o||a)===null)continue;break}var u=jn(a);u!==null&&(e.splice(t,3),t-=3,Gl(u,{pending:!0,data:l,method:a.method,action:o},o,l))}}))}function vo(e){function t(T){return Is(T,e)}Za!==null&&Is(Za,e),Ja!==null&&Is(Ja,e),Ka!==null&&Is(Ka,e),bi.forEach(t),Si.forEach(t);for(var a=0;a<Fa.length;a++){var o=Fa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)vp(a),a.blockedOn===null&&Fa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var l=a[o],u=a[o+1],d=l[ht]||null;if(typeof u=="function")d||bp(a);else if(d){var v=null;if(u&&u.hasAttribute("formAction")){if(l=u,d=u[ht]||null)v=d.formAction;else if(Qu(l)!==null)continue}else v=d.action;typeof v=="function"?a[o+1]=v:(a.splice(o,3),o-=3),bp(a)}}}function Sp(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(d){return l=d})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Pu(e){this._internalRoot=e}tr.prototype.render=Pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,o=qt();fp(a,o,e,t,null,null)},tr.prototype.unmount=Pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fp(e.current,2,null,e,null,null),js(),t[Vn]=null}};function tr(e){this._internalRoot=e}tr.prototype.unstable_scheduleHydration=function(e){if(e){var t=qf();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Fa.length&&t!==0&&t<Fa[a].priority;a++);Fa.splice(a,0,e),a===0&&vp(e)}};var Tp=i.version;if(Tp!=="19.2.4")throw Error(r(527,Tp,"19.2.4"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var MS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ar.isDisabled&&ar.supportsFiber)try{qo=ar.inject(MS),Et=ar}catch{}}return xi.createRoot=function(e,t){if(!c(e))throw Error(r(299));var a=!1,o="",l=zm,u=Om,d=qm;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=up(e,1,!1,null,null,a,o,null,l,u,d,Sp),e[Vn]=t.current,Du(e),new Pu(t)},xi.hydrateRoot=function(e,t,a){if(!c(e))throw Error(r(299));var o=!1,l="",u=zm,d=Om,v=qm,T=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),t=up(e,1,!0,t,a??null,o,l,T,u,d,v,Sp),t.context=cp(null),a=t.current,o=qt(),o=wr(o),l=ja(o),l.callback=null,Ua(a,l,o),a=o,t.current.lanes=a,No(t,a),ea(t),e[Vn]=t.current,Du(e),new tr(t)},xi.version="19.2.4",xi}var Rp;function US(){if(Rp)return Zu.exports;Rp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Zu.exports=jS(),Zu.exports}var _S=US();const Qc=X.createContext({});function Yc(n){const i=X.useRef(null);return i.current===null&&(i.current=n()),i.current}const av=typeof window<"u",nv=av?X.useLayoutEffect:X.useEffect,Ar=X.createContext(null);function Pc(n,i){n.indexOf(i)===-1&&n.push(i)}function pr(n,i){const s=n.indexOf(i);s>-1&&n.splice(s,1)}const na=(n,i,s)=>s>i?i:s<n?n:s;let Xc=()=>{};const Aa={},ov=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function iv(n){return typeof n=="object"&&n!==null}const sv=n=>/^0[^.\s]+$/u.test(n);function rv(n){let i;return()=>(i===void 0&&(i=n()),i)}const Yt=n=>n,BS=(n,i)=>s=>i(n(s)),Ui=(...n)=>n.reduce(BS),Ri=(n,i,s)=>{const r=i-n;return r===0?1:(s-n)/r};class kc{constructor(){this.subscriptions=[]}add(i){return Pc(this.subscriptions,i),()=>pr(this.subscriptions,i)}notify(i,s,r){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,s,r);else for(let m=0;m<c;m++){const f=this.subscriptions[m];f&&f(i,s,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Kt=n=>n*1e3,Qt=n=>n/1e3;function lv(n,i){return i?n*(1e3/i):0}const uv=(n,i,s)=>(((1-3*s+3*i)*n+(3*s-6*i))*n+3*i)*n,LS=1e-7,HS=12;function GS(n,i,s,r,c){let m,f,h=0;do f=i+(s-i)/2,m=uv(f,r,c)-n,m>0?s=f:i=f;while(Math.abs(m)>LS&&++h<HS);return f}function _i(n,i,s,r){if(n===i&&s===r)return Yt;const c=m=>GS(m,0,1,n,s);return m=>m===0||m===1?m:uv(c(m),i,r)}const cv=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,fv=n=>i=>1-n(1-i),dv=_i(.33,1.53,.69,.99),Zc=fv(dv),mv=cv(Zc),hv=n=>(n*=2)<1?.5*Zc(n):.5*(2-Math.pow(2,-10*(n-1))),Jc=n=>1-Math.sin(Math.acos(n)),pv=fv(Jc),gv=cv(Jc),QS=_i(.42,0,1,1),YS=_i(0,0,.58,1),vv=_i(.42,0,.58,1),PS=n=>Array.isArray(n)&&typeof n[0]!="number",yv=n=>Array.isArray(n)&&typeof n[0]=="number",XS={linear:Yt,easeIn:QS,easeInOut:vv,easeOut:YS,circIn:Jc,circInOut:gv,circOut:pv,backIn:Zc,backInOut:mv,backOut:dv,anticipate:hv},kS=n=>typeof n=="string",Np=n=>{if(yv(n)){Xc(n.length===4);const[i,s,r,c]=n;return _i(i,s,r,c)}else if(kS(n))return XS[n];return n},nr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ZS(n,i){let s=new Set,r=new Set,c=!1,m=!1;const f=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){f.has(y)&&(g.schedule(y),n()),y(h)}const g={schedule:(y,b=!1,S=!1)=>{const q=S&&c?s:r;return b&&f.add(y),q.has(y)||q.add(y),y},cancel:y=>{r.delete(y),f.delete(y)},process:y=>{if(h=y,c){m=!0;return}c=!0,[s,r]=[r,s],s.forEach(p),s.clear(),c=!1,m&&(m=!1,g.process(y))}};return g}const JS=40;function bv(n,i){let s=!1,r=!0;const c={delta:0,timestamp:0,isProcessing:!1},m=()=>s=!0,f=nr.reduce((G,J)=>(G[J]=ZS(m),G),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:y,update:b,preRender:S,render:C,postRender:q}=f,_=()=>{const G=Aa.useManualTiming?c.timestamp:performance.now();s=!1,Aa.useManualTiming||(c.delta=r?1e3/60:Math.max(Math.min(G-c.timestamp,JS),1)),c.timestamp=G,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),y.process(c),b.process(c),S.process(c),C.process(c),q.process(c),c.isProcessing=!1,s&&i&&(r=!1,n(_))},B=()=>{s=!0,r=!0,c.isProcessing||n(_)};return{schedule:nr.reduce((G,J)=>{const P=f[J];return G[J]=(oe,F=!1,U=!1)=>(s||B(),P.schedule(oe,F,U)),G},{}),cancel:G=>{for(let J=0;J<nr.length;J++)f[nr[J]].cancel(G)},state:c,steps:f}}const{schedule:Re,cancel:nn,state:st,steps:Wu}=bv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yt,!0);let ur;function KS(){ur=void 0}const ft={now:()=>(ur===void 0&&ft.set(st.isProcessing||Aa.useManualTiming?st.timestamp:performance.now()),ur),set:n=>{ur=n,queueMicrotask(KS)}},Sv=n=>i=>typeof i=="string"&&i.startsWith(n),Tv=Sv("--"),FS=Sv("var(--"),Kc=n=>FS(n)?WS.test(n.split("/*")[0].trim()):!1,WS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Vp(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Mo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ni={...Mo,transform:n=>na(0,1,n)},or={...Mo,default:1},Ci=n=>Math.round(n*1e5)/1e5,Fc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function $S(n){return n==null}const IS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wc=(n,i)=>s=>!!(typeof s=="string"&&IS.test(s)&&s.startsWith(n)||i&&!$S(s)&&Object.prototype.hasOwnProperty.call(s,i)),Ev=(n,i,s)=>r=>{if(typeof r!="string")return r;const[c,m,f,h]=r.match(Fc);return{[n]:parseFloat(c),[i]:parseFloat(m),[s]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},eT=n=>na(0,255,n),$u={...Mo,transform:n=>Math.round(eT(n))},zn={test:Wc("rgb","red"),parse:Ev("red","green","blue"),transform:({red:n,green:i,blue:s,alpha:r=1})=>"rgba("+$u.transform(n)+", "+$u.transform(i)+", "+$u.transform(s)+", "+Ci(Ni.transform(r))+")"};function tT(n){let i="",s="",r="",c="";return n.length>5?(i=n.substring(1,3),s=n.substring(3,5),r=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),s=n.substring(2,3),r=n.substring(3,4),c=n.substring(4,5),i+=i,s+=s,r+=r,c+=c),{red:parseInt(i,16),green:parseInt(s,16),blue:parseInt(r,16),alpha:c?parseInt(c,16)/255:1}}const pc={test:Wc("#"),parse:tT,transform:zn.transform},Bi=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),en=Bi("deg"),aa=Bi("%"),ee=Bi("px"),aT=Bi("vh"),nT=Bi("vw"),wp={...aa,parse:n=>aa.parse(n)/100,transform:n=>aa.transform(n*100)},bo={test:Wc("hsl","hue"),parse:Ev("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:s,alpha:r=1})=>"hsla("+Math.round(n)+", "+aa.transform(Ci(i))+", "+aa.transform(Ci(s))+", "+Ci(Ni.transform(r))+")"},Je={test:n=>zn.test(n)||pc.test(n)||bo.test(n),parse:n=>zn.test(n)?zn.parse(n):bo.test(n)?bo.parse(n):pc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?zn.transform(n):bo.transform(n),getAnimatableNone:n=>{const i=Je.parse(n);return i.alpha=0,Je.transform(i)}},oT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function iT(n){var i,s;return isNaN(n)&&typeof n=="string"&&(((i=n.match(Fc))==null?void 0:i.length)||0)+(((s=n.match(oT))==null?void 0:s.length)||0)>0}const xv="number",Av="color",sT="var",rT="var(",jp="${}",lT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Vi(n){const i=n.toString(),s=[],r={color:[],number:[],var:[]},c=[];let m=0;const h=i.replace(lT,p=>(Je.test(p)?(r.color.push(m),c.push(Av),s.push(Je.parse(p))):p.startsWith(rT)?(r.var.push(m),c.push(sT),s.push(p)):(r.number.push(m),c.push(xv),s.push(parseFloat(p))),++m,jp)).split(jp);return{values:s,split:h,indexes:r,types:c}}function Dv(n){return Vi(n).values}function Mv(n){const{split:i,types:s}=Vi(n),r=i.length;return c=>{let m="";for(let f=0;f<r;f++)if(m+=i[f],c[f]!==void 0){const h=s[f];h===xv?m+=Ci(c[f]):h===Av?m+=Je.transform(c[f]):m+=c[f]}return m}}const uT=n=>typeof n=="number"?0:Je.test(n)?Je.getAnimatableNone(n):n;function cT(n){const i=Dv(n);return Mv(n)(i.map(uT))}const Ft={test:iT,parse:Dv,createTransformer:Mv,getAnimatableNone:cT};function Iu(n,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(i-n)*6*s:s<1/2?i:s<2/3?n+(i-n)*(2/3-s)*6:n}function fT({hue:n,saturation:i,lightness:s,alpha:r}){n/=360,i/=100,s/=100;let c=0,m=0,f=0;if(!i)c=m=f=s;else{const h=s<.5?s*(1+i):s+i-s*i,p=2*s-h;c=Iu(p,h,n+1/3),m=Iu(p,h,n),f=Iu(p,h,n-1/3)}return{red:Math.round(c*255),green:Math.round(m*255),blue:Math.round(f*255),alpha:r}}function gr(n,i){return s=>s>0?i:n}const _e=(n,i,s)=>n+(i-n)*s,ec=(n,i,s)=>{const r=n*n,c=s*(i*i-r)+r;return c<0?0:Math.sqrt(c)},dT=[pc,zn,bo],mT=n=>dT.find(i=>i.test(n));function Up(n){const i=mT(n);if(!i)return!1;let s=i.parse(n);return i===bo&&(s=fT(s)),s}const _p=(n,i)=>{const s=Up(n),r=Up(i);if(!s||!r)return gr(n,i);const c={...s};return m=>(c.red=ec(s.red,r.red,m),c.green=ec(s.green,r.green,m),c.blue=ec(s.blue,r.blue,m),c.alpha=_e(s.alpha,r.alpha,m),zn.transform(c))},gc=new Set(["none","hidden"]);function hT(n,i){return gc.has(n)?s=>s<=0?n:i:s=>s>=1?i:n}function pT(n,i){return s=>_e(n,i,s)}function $c(n){return typeof n=="number"?pT:typeof n=="string"?Kc(n)?gr:Je.test(n)?_p:yT:Array.isArray(n)?Cv:typeof n=="object"?Je.test(n)?_p:gT:gr}function Cv(n,i){const s=[...n],r=s.length,c=n.map((m,f)=>$c(m)(m,i[f]));return m=>{for(let f=0;f<r;f++)s[f]=c[f](m);return s}}function gT(n,i){const s={...n,...i},r={};for(const c in s)n[c]!==void 0&&i[c]!==void 0&&(r[c]=$c(n[c])(n[c],i[c]));return c=>{for(const m in r)s[m]=r[m](c);return s}}function vT(n,i){const s=[],r={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const m=i.types[c],f=n.indexes[m][r[m]],h=n.values[f]??0;s[c]=h,r[m]++}return s}const yT=(n,i)=>{const s=Ft.createTransformer(i),r=Vi(n),c=Vi(i);return r.indexes.var.length===c.indexes.var.length&&r.indexes.color.length===c.indexes.color.length&&r.indexes.number.length>=c.indexes.number.length?gc.has(n)&&!c.values.length||gc.has(i)&&!r.values.length?hT(n,i):Ui(Cv(vT(r,c),c.values),s):gr(n,i)};function zv(n,i,s){return typeof n=="number"&&typeof i=="number"&&typeof s=="number"?_e(n,i,s):$c(n)(n,i)}const bT=n=>{const i=({timestamp:s})=>n(s);return{start:(s=!0)=>Re.update(i,s),stop:()=>nn(i),now:()=>st.isProcessing?st.timestamp:ft.now()}},Ov=(n,i,s=10)=>{let r="";const c=Math.max(Math.round(i/s),2);for(let m=0;m<c;m++)r+=Math.round(n(m/(c-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},vr=2e4;function Ic(n){let i=0;const s=50;let r=n.next(i);for(;!r.done&&i<vr;)i+=s,r=n.next(i);return i>=vr?1/0:i}function ST(n,i=100,s){const r=s({...n,keyframes:[0,i]}),c=Math.min(Ic(r),vr);return{type:"keyframes",ease:m=>r.next(c*m).value/i,duration:Qt(c)}}const TT=5;function qv(n,i,s){const r=Math.max(i-TT,0);return lv(s-n(r),i-r)}const He={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},tc=.001;function ET({duration:n=He.duration,bounce:i=He.bounce,velocity:s=He.velocity,mass:r=He.mass}){let c,m,f=1-i;f=na(He.minDamping,He.maxDamping,f),n=na(He.minDuration,He.maxDuration,Qt(n)),f<1?(c=g=>{const y=g*f,b=y*n,S=y-s,C=vc(g,f),q=Math.exp(-b);return tc-S/C*q},m=g=>{const b=g*f*n,S=b*s+s,C=Math.pow(f,2)*Math.pow(g,2)*n,q=Math.exp(-b),_=vc(Math.pow(g,2),f);return(-c(g)+tc>0?-1:1)*((S-C)*q)/_}):(c=g=>{const y=Math.exp(-g*n),b=(g-s)*n+1;return-tc+y*b},m=g=>{const y=Math.exp(-g*n),b=(s-g)*(n*n);return y*b});const h=5/n,p=AT(c,m,h);if(n=Kt(n),isNaN(p))return{stiffness:He.stiffness,damping:He.damping,duration:n};{const g=Math.pow(p,2)*r;return{stiffness:g,damping:f*2*Math.sqrt(r*g),duration:n}}}const xT=12;function AT(n,i,s){let r=s;for(let c=1;c<xT;c++)r=r-n(r)/i(r);return r}function vc(n,i){return n*Math.sqrt(1-i*i)}const DT=["duration","bounce"],MT=["stiffness","damping","mass"];function Bp(n,i){return i.some(s=>n[s]!==void 0)}function CT(n){let i={velocity:He.velocity,stiffness:He.stiffness,damping:He.damping,mass:He.mass,isResolvedFromDuration:!1,...n};if(!Bp(n,MT)&&Bp(n,DT))if(i.velocity=0,n.visualDuration){const s=n.visualDuration,r=2*Math.PI/(s*1.2),c=r*r,m=2*na(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:He.mass,stiffness:c,damping:m}}else{const s=ET({...n,velocity:0});i={...i,...s,mass:He.mass},i.isResolvedFromDuration=!0}return i}function yr(n=He.visualDuration,i=He.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:r,restDelta:c}=s;const m=s.keyframes[0],f=s.keyframes[s.keyframes.length-1],h={done:!1,value:m},{stiffness:p,damping:g,mass:y,duration:b,velocity:S,isResolvedFromDuration:C}=CT({...s,velocity:-Qt(s.velocity||0)}),q=S||0,_=g/(2*Math.sqrt(p*y)),B=f-m,L=Qt(Math.sqrt(p/y)),k=Math.abs(B)<5;r||(r=k?He.restSpeed.granular:He.restSpeed.default),c||(c=k?He.restDelta.granular:He.restDelta.default);let G;if(_<1){const P=vc(L,_);G=oe=>{const F=Math.exp(-_*L*oe);return f-F*((q+_*L*B)/P*Math.sin(P*oe)+B*Math.cos(P*oe))}}else if(_===1)G=P=>f-Math.exp(-L*P)*(B+(q+L*B)*P);else{const P=L*Math.sqrt(_*_-1);G=oe=>{const F=Math.exp(-_*L*oe),U=Math.min(P*oe,300);return f-F*((q+_*L*B)*Math.sinh(U)+P*B*Math.cosh(U))/P}}const J={calculatedDuration:C&&b||null,next:P=>{const oe=G(P);if(C)h.done=P>=b;else{let F=P===0?q:0;_<1&&(F=P===0?Kt(q):qv(G,P,oe));const U=Math.abs(F)<=r,ie=Math.abs(f-oe)<=c;h.done=U&&ie}return h.value=h.done?f:oe,h},toString:()=>{const P=Math.min(Ic(J),vr),oe=Ov(F=>J.next(P*F).value,P,30);return P+"ms "+oe},toTransition:()=>{}};return J}yr.applyToOptions=n=>{const i=ST(n,100,yr);return n.ease=i.ease,n.duration=Kt(i.duration),n.type="keyframes",n};function yc({keyframes:n,velocity:i=0,power:s=.8,timeConstant:r=325,bounceDamping:c=10,bounceStiffness:m=500,modifyTarget:f,min:h,max:p,restDelta:g=.5,restSpeed:y}){const b=n[0],S={done:!1,value:b},C=U=>h!==void 0&&U<h||p!==void 0&&U>p,q=U=>h===void 0?p:p===void 0||Math.abs(h-U)<Math.abs(p-U)?h:p;let _=s*i;const B=b+_,L=f===void 0?B:f(B);L!==B&&(_=L-b);const k=U=>-_*Math.exp(-U/r),G=U=>L+k(U),J=U=>{const ie=k(U),Ae=G(U);S.done=Math.abs(ie)<=g,S.value=S.done?L:Ae};let P,oe;const F=U=>{C(S.value)&&(P=U,oe=yr({keyframes:[S.value,q(S.value)],velocity:qv(G,U,S.value),damping:c,stiffness:m,restDelta:g,restSpeed:y}))};return F(0),{calculatedDuration:null,next:U=>{let ie=!1;return!oe&&P===void 0&&(ie=!0,J(U),F(U)),P!==void 0&&U>=P?oe.next(U-P):(!ie&&J(U),S)}}}function zT(n,i,s){const r=[],c=s||Aa.mix||zv,m=n.length-1;for(let f=0;f<m;f++){let h=c(n[f],n[f+1]);if(i){const p=Array.isArray(i)?i[f]||Yt:i;h=Ui(p,h)}r.push(h)}return r}function OT(n,i,{clamp:s=!0,ease:r,mixer:c}={}){const m=n.length;if(Xc(m===i.length),m===1)return()=>i[0];if(m===2&&i[0]===i[1])return()=>i[1];const f=n[0]===n[1];n[0]>n[m-1]&&(n=[...n].reverse(),i=[...i].reverse());const h=zT(i,r,c),p=h.length,g=y=>{if(f&&y<n[0])return i[0];let b=0;if(p>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const S=Ri(n[b],n[b+1],y);return h[b](S)};return s?y=>g(na(n[0],n[m-1],y)):g}function qT(n,i){const s=n[n.length-1];for(let r=1;r<=i;r++){const c=Ri(0,i,r);n.push(_e(s,1,c))}}function RT(n){const i=[0];return qT(i,n.length-1),i}function NT(n,i){return n.map(s=>s*i)}function VT(n,i){return n.map(()=>i||vv).splice(0,n.length-1)}function zi({duration:n=300,keyframes:i,times:s,ease:r="easeInOut"}){const c=PS(r)?r.map(Np):Np(r),m={done:!1,value:i[0]},f=NT(s&&s.length===i.length?s:RT(i),n),h=OT(f,i,{ease:Array.isArray(c)?c:VT(i,c)});return{calculatedDuration:n,next:p=>(m.value=h(p),m.done=p>=n,m)}}const wT=n=>n!==null;function ef(n,{repeat:i,repeatType:s="loop"},r,c=1){const m=n.filter(wT),h=c<0||i&&s!=="loop"&&i%2===1?0:m.length-1;return!h||r===void 0?m[h]:r}const jT={decay:yc,inertia:yc,tween:zi,keyframes:zi,spring:yr};function Rv(n){typeof n.type=="string"&&(n.type=jT[n.type])}class tf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,s){return this.finished.then(i,s)}}const UT=n=>n/100;class af extends tf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,c;const{motionValue:s}=this.options;s&&s.updatedAt!==ft.now()&&this.tick(ft.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(r=this.options).onStop)==null||c.call(r))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Rv(i);const{type:s=zi,repeat:r=0,repeatDelay:c=0,repeatType:m,velocity:f=0}=i;let{keyframes:h}=i;const p=s||zi;p!==zi&&typeof h[0]!="number"&&(this.mixKeyframes=Ui(UT,zv(h[0],h[1])),h=[0,100]);const g=p({...i,keyframes:h});m==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...h].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=Ic(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(r+1)-c,this.generator=g}updateTime(i){const s=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(i,s=!1){const{generator:r,totalDuration:c,mixKeyframes:m,mirroredGenerator:f,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return r.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:C,type:q,onUpdate:_,finalKeyframe:B}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),s?this.currentTime=i:this.updateTime(i);const L=this.currentTime-g*(this.playbackSpeed>=0?1:-1),k=this.playbackSpeed>=0?L<0:L>c;this.currentTime=Math.max(L,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let G=this.currentTime,J=r;if(b){const U=Math.min(this.currentTime,c)/h;let ie=Math.floor(U),Ae=U%1;!Ae&&U>=1&&(Ae=1),Ae===1&&ie--,ie=Math.min(ie,b+1),!!(ie%2)&&(S==="reverse"?(Ae=1-Ae,C&&(Ae-=C/h)):S==="mirror"&&(J=f)),G=na(0,1,Ae)*h}const P=k?{done:!1,value:y[0]}:J.next(G);m&&(P.value=m(P.value));let{done:oe}=P;!k&&p!==null&&(oe=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&oe);return F&&q!==yc&&(P.value=ef(y,this.options,B,this.speed)),_&&_(P.value),F&&this.finish(),P}then(i,s){return this.finished.then(i,s)}get duration(){return Qt(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Qt(i)}get time(){return Qt(this.currentTime)}set time(i){var s;i=Kt(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),(s=this.driver)==null||s.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(ft.now());const s=this.playbackSpeed!==i;this.playbackSpeed=i,s&&(this.time=Qt(this.currentTime))}play(){var c,m;if(this.isStopped)return;const{driver:i=bT,startTime:s}=this.options;this.driver||(this.driver=i(f=>this.tick(f))),(m=(c=this.options).onPlay)==null||m.call(c);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=s??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ft.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,s;this.notifyFinished(),this.teardown(),this.state="finished",(s=(i=this.options).onComplete)==null||s.call(i)}cancel(){var i,s;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(s=(i=this.options).onCancel)==null||s.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var s;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(s=this.driver)==null||s.stop(),i.observe(this)}}function _T(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const On=n=>n*180/Math.PI,bc=n=>{const i=On(Math.atan2(n[1],n[0]));return Sc(i)},BT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:bc,rotateZ:bc,skewX:n=>On(Math.atan(n[1])),skewY:n=>On(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Sc=n=>(n=n%360,n<0&&(n+=360),n),Lp=bc,Hp=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Gp=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),LT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Hp,scaleY:Gp,scale:n=>(Hp(n)+Gp(n))/2,rotateX:n=>Sc(On(Math.atan2(n[6],n[5]))),rotateY:n=>Sc(On(Math.atan2(-n[2],n[0]))),rotateZ:Lp,rotate:Lp,skewX:n=>On(Math.atan(n[4])),skewY:n=>On(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Tc(n){return n.includes("scale")?1:0}function Ec(n,i){if(!n||n==="none")return Tc(i);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,c;if(s)r=LT,c=s;else{const h=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=BT,c=h}if(!c)return Tc(i);const m=r[i],f=c[1].split(",").map(GT);return typeof m=="function"?m(f):f[m]}const HT=(n,i)=>{const{transform:s="none"}=getComputedStyle(n);return Ec(s,i)};function GT(n){return parseFloat(n.trim())}const Co=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zo=new Set(Co),Qp=n=>n===Mo||n===ee,QT=new Set(["x","y","z"]),YT=Co.filter(n=>!QT.has(n));function PT(n){const i=[];return YT.forEach(s=>{const r=n.getValue(s);r!==void 0&&(i.push([s,r.get()]),r.set(s.startsWith("scale")?1:0))}),i}const an={width:({x:n},{paddingLeft:i="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),height:({y:n},{paddingTop:i="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Ec(i,"x"),y:(n,{transform:i})=>Ec(i,"y")};an.translateX=an.x;an.translateY=an.y;const qn=new Set;let xc=!1,Ac=!1,Dc=!1;function Nv(){if(Ac){const n=Array.from(qn).filter(r=>r.needsMeasurement),i=new Set(n.map(r=>r.element)),s=new Map;i.forEach(r=>{const c=PT(r);c.length&&(s.set(r,c),r.render())}),n.forEach(r=>r.measureInitialState()),i.forEach(r=>{r.render();const c=s.get(r);c&&c.forEach(([m,f])=>{var h;(h=r.getValue(m))==null||h.set(f)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ac=!1,xc=!1,qn.forEach(n=>n.complete(Dc)),qn.clear()}function Vv(){qn.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Ac=!0)})}function XT(){Dc=!0,Vv(),Nv(),Dc=!1}class nf{constructor(i,s,r,c,m,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=s,this.name=r,this.motionValue=c,this.element=m,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(qn.add(this),xc||(xc=!0,Re.read(Vv),Re.resolveKeyframes(Nv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:s,element:r,motionValue:c}=this;if(i[0]===null){const m=c==null?void 0:c.get(),f=i[i.length-1];if(m!==void 0)i[0]=m;else if(r&&s){const h=r.readValue(s,f);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=f),c&&m===void 0&&c.set(i[0])}_T(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),qn.delete(this)}cancel(){this.state==="scheduled"&&(qn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const kT=n=>n.startsWith("--");function ZT(n,i,s){kT(i)?n.style.setProperty(i,s):n.style[i]=s}const JT={};function wv(n,i){const s=rv(n);return()=>JT[i]??s()}const KT=wv(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),jv=wv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Mi=([n,i,s,r])=>`cubic-bezier(${n}, ${i}, ${s}, ${r})`,Yp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Mi([0,.65,.55,1]),circOut:Mi([.55,0,1,.45]),backIn:Mi([.31,.01,.66,-.59]),backOut:Mi([.33,1.53,.69,.99])};function Uv(n,i){if(n)return typeof n=="function"?jv()?Ov(n,i):"ease-out":yv(n)?Mi(n):Array.isArray(n)?n.map(s=>Uv(s,i)||Yp.easeOut):Yp[n]}function FT(n,i,s,{delay:r=0,duration:c=300,repeat:m=0,repeatType:f="loop",ease:h="easeOut",times:p}={},g=void 0){const y={[i]:s};p&&(y.offset=p);const b=Uv(h,c);Array.isArray(b)&&(y.easing=b);const S={delay:r,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:m+1,direction:f==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),n.animate(y,S)}function _v(n){return typeof n=="function"&&"applyToOptions"in n}function WT({type:n,...i}){return _v(n)&&jv()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class Bv extends tf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:s,name:r,keyframes:c,pseudoElement:m,allowFlatten:f=!1,finalKeyframe:h,onComplete:p}=i;this.isPseudoElement=!!m,this.allowFlatten=f,this.options=i,Xc(typeof i.type!="string");const g=WT(i);this.animation=FT(s,r,c,g,m),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const y=ef(c,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(y):ZT(s,r,y),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,s;(s=(i=this.animation).finish)==null||s.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var s,r,c;const i=(s=this.options)==null?void 0:s.element;!this.isPseudoElement&&(i!=null&&i.isConnected)&&((c=(r=this.animation).commitStyles)==null||c.call(r))}get duration(){var s,r;const i=((r=(s=this.animation.effect)==null?void 0:s.getComputedTiming)==null?void 0:r.call(s).duration)||0;return Qt(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Qt(i)}get time(){return Qt(Number(this.animation.currentTime)||0)}set time(i){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Kt(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,observe:s}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&KT()?(this.animation.timeline=i,Yt):s(this)}}const Lv={anticipate:hv,backInOut:mv,circInOut:gv};function $T(n){return n in Lv}function IT(n){typeof n.ease=="string"&&$T(n.ease)&&(n.ease=Lv[n.ease])}const ac=10;class e1 extends Bv{constructor(i){IT(i),Rv(i),super(i),i.startTime!==void 0&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:s,onUpdate:r,onComplete:c,element:m,...f}=this.options;if(!s)return;if(i!==void 0){s.set(i);return}const h=new af({...f,autoplay:!1}),p=Math.max(ac,ft.now()-this.startTime),g=na(0,ac,p-ac);s.setWithVelocity(h.sample(Math.max(0,p-g)).value,h.sample(p).value,g),h.stop()}}const Pp=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ft.test(n)||n==="0")&&!n.startsWith("url("));function t1(n){const i=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==i)return!0}function a1(n,i,s,r){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const m=n[n.length-1],f=Pp(c,i),h=Pp(m,i);return!f||!h?!1:t1(n)||(s==="spring"||_v(s))&&r}function Mc(n){n.duration=0,n.type="keyframes"}const n1=new Set(["opacity","clipPath","filter","transform"]),o1=rv(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function i1(n){var y;const{motionValue:i,name:s,repeatDelay:r,repeatType:c,damping:m,type:f}=n;if(!(((y=i==null?void 0:i.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=i.owner.getProps();return o1()&&s&&n1.has(s)&&(s!=="transform"||!g)&&!p&&!r&&c!=="mirror"&&m!==0&&f!=="inertia"}const s1=40;class r1 extends tf{constructor({autoplay:i=!0,delay:s=0,type:r="keyframes",repeat:c=0,repeatDelay:m=0,repeatType:f="loop",keyframes:h,name:p,motionValue:g,element:y,...b}){var q;super(),this.stop=()=>{var _,B;this._animation&&(this._animation.stop(),(_=this.stopTimeline)==null||_.call(this)),(B=this.keyframeResolver)==null||B.cancel()},this.createdAt=ft.now();const S={autoplay:i,delay:s,type:r,repeat:c,repeatDelay:m,repeatType:f,name:p,motionValue:g,element:y,...b},C=(y==null?void 0:y.KeyframeResolver)||nf;this.keyframeResolver=new C(h,(_,B,L)=>this.onKeyframesResolved(_,B,S,!L),p,g,y),(q=this.keyframeResolver)==null||q.scheduleResolve()}onKeyframesResolved(i,s,r,c){var B,L;this.keyframeResolver=void 0;const{name:m,type:f,velocity:h,delay:p,isHandoff:g,onUpdate:y}=r;this.resolvedAt=ft.now(),a1(i,m,f,h)||((Aa.instantAnimations||!p)&&(y==null||y(ef(i,r,s))),i[0]=i[i.length-1],Mc(r),r.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>s1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...r,keyframes:i},C=!g&&i1(S),q=(L=(B=S.motionValue)==null?void 0:B.owner)==null?void 0:L.current,_=C?new e1({...S,element:q}):new af(S);_.finished.then(()=>{this.notifyFinished()}).catch(Yt),this.pendingTimeline&&(this.stopTimeline=_.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=_}get finished(){return this._animation?this.animation.finished:this._finished}then(i,s){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),XT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}function Hv(n,i,s,r=0,c=1){const m=Array.from(n).sort((g,y)=>g.sortNodePosition(y)).indexOf(i),f=n.size,h=(f-1)*r;return typeof s=="function"?s(m,f):c===1?m*r:h-m*r}const l1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function u1(n){const i=l1.exec(n);if(!i)return[,];const[,s,r,c]=i;return[`--${s??r}`,c]}function Gv(n,i,s=1){const[r,c]=u1(n);if(!r)return;const m=window.getComputedStyle(i).getPropertyValue(r);if(m){const f=m.trim();return ov(f)?parseFloat(f):f}return Kc(c)?Gv(c,i,s+1):c}const c1={type:"spring",stiffness:500,damping:25,restSpeed:10},f1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),d1={type:"keyframes",duration:.8},m1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},h1=(n,{keyframes:i})=>i.length>2?d1:zo.has(n)?n.startsWith("scale")?f1(i[1]):c1:m1,p1=n=>n!==null;function g1(n,{repeat:i,repeatType:s="loop"},r){const c=n.filter(p1),m=i&&s!=="loop"&&i%2===1?0:c.length-1;return c[m]}function Qv(n,i){if(n!=null&&n.inherit&&i){const{inherit:s,...r}=n;return{...i,...r}}return n}function of(n,i){const s=(n==null?void 0:n[i])??(n==null?void 0:n.default)??n;return s!==n?Qv(s,n):s}function v1({when:n,delay:i,delayChildren:s,staggerChildren:r,staggerDirection:c,repeat:m,repeatType:f,repeatDelay:h,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const sf=(n,i,s,r={},c,m)=>f=>{const h=of(r,n)||{},p=h.delay||r.delay||0;let{elapsed:g=0}=r;g=g-Kt(p);const y={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:i.getVelocity(),...h,delay:-g,onUpdate:S=>{i.set(S),h.onUpdate&&h.onUpdate(S)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:n,motionValue:i,element:m?void 0:c};v1(h)||Object.assign(y,h1(n,y)),y.duration&&(y.duration=Kt(y.duration)),y.repeatDelay&&(y.repeatDelay=Kt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Mc(y),y.delay===0&&(b=!0)),(Aa.instantAnimations||Aa.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(b=!0,Mc(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,b&&!m&&i.get()!==void 0){const S=g1(y.keyframes,h);if(S!==void 0){Re.update(()=>{y.onUpdate(S),y.onComplete()});return}}return h.isSync?new af(y):new r1(y)};function Xp(n){const i=[{},{}];return n==null||n.values.forEach((s,r)=>{i[0][r]=s.get(),i[1][r]=s.getVelocity()}),i}function rf(n,i,s,r){if(typeof i=="function"){const[c,m]=Xp(r);i=i(s!==void 0?s:n.custom,c,m)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,m]=Xp(r);i=i(s!==void 0?s:n.custom,c,m)}return i}function Ao(n,i,s){const r=n.getProps();return rf(r,i,s!==void 0?s:r.custom,n)}const Yv=new Set(["width","height","top","left","right","bottom",...Co]),kp=30,y1=n=>!isNaN(parseFloat(n));class b1{constructor(i,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var m;const c=ft.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((m=this.events.change)==null||m.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=s.owner}setCurrent(i){this.current=i,this.updatedAt=ft.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=y1(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,s){this.events[i]||(this.events[i]=new kc);const r=this.events[i].add(s);return i==="change"?()=>{r(),Re.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,s){this.passiveEffect=i,this.stopPassiveEffect=s}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,s,r){this.set(s),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-r}jump(i,s=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>kp)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,kp);return lv(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(i){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=i(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,s;(i=this.dependents)==null||i.clear(),(s=this.events.destroy)==null||s.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Do(n,i){return new b1(n,i)}const Cc=n=>Array.isArray(n);function S1(n,i,s){n.hasValue(i)?n.getValue(i).set(s):n.addValue(i,Do(s))}function T1(n){return Cc(n)?n[n.length-1]||0:n}function E1(n,i){const s=Ao(n,i);let{transitionEnd:r={},transition:c={},...m}=s||{};m={...m,...r};for(const f in m){const h=T1(m[f]);S1(n,f,h)}}const ut=n=>!!(n&&n.getVelocity);function x1(n){return!!(ut(n)&&n.add)}function zc(n,i){const s=n.getValue("willChange");if(x1(s))return s.add(i);if(!s&&Aa.WillChange){const r=new Aa.WillChange("auto");n.addValue("willChange",r),r.add(i)}}function lf(n){return n.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const A1="framerAppearId",Pv="data-"+lf(A1);function Xv(n){return n.props[Pv]}function D1({protectedKeys:n,needsAnimating:i},s){const r=n.hasOwnProperty(s)&&i[s]!==!0;return i[s]=!1,r}function kv(n,i,{delay:s=0,transitionOverride:r,type:c}={}){let{transition:m,transitionEnd:f,...h}=i;const p=n.getDefaultTransition();m=m?Qv(m,p):p;const g=m==null?void 0:m.reduceMotion;r&&(m=r);const y=[],b=c&&n.animationState&&n.animationState.getState()[c];for(const S in h){const C=n.getValue(S,n.latestValues[S]??null),q=h[S];if(q===void 0||b&&D1(b,S))continue;const _={delay:s,...of(m||{},S)},B=C.get();if(B!==void 0&&!C.isAnimating&&!Array.isArray(q)&&q===B&&!_.velocity)continue;let L=!1;if(window.MotionHandoffAnimation){const J=Xv(n);if(J){const P=window.MotionHandoffAnimation(J,S,Re);P!==null&&(_.startTime=P,L=!0)}}zc(n,S);const k=g??n.shouldReduceMotion;C.start(sf(S,C,q,k&&Yv.has(S)?{type:!1}:_,n,L));const G=C.animation;G&&y.push(G)}if(f){const S=()=>Re.update(()=>{f&&E1(n,f)});y.length?Promise.all(y).then(S):S()}return y}function Oc(n,i,s={}){var p;const r=Ao(n,i,s.type==="exit"?(p=n.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=r||{};s.transitionOverride&&(c=s.transitionOverride);const m=r?()=>Promise.all(kv(n,r,s)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:S}=c;return M1(n,i,g,y,b,S,s)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,y]=h==="beforeChildren"?[m,f]:[f,m];return g().then(()=>y())}else return Promise.all([m(),f(s.delay)])}function M1(n,i,s=0,r=0,c=0,m=1,f){const h=[];for(const p of n.variantChildren)p.notify("AnimationStart",i),h.push(Oc(p,i,{...f,delay:s+(typeof r=="function"?0:r)+Hv(n.variantChildren,p,r,c,m)}).then(()=>p.notify("AnimationComplete",i)));return Promise.all(h)}function C1(n,i,s={}){n.notify("AnimationStart",i);let r;if(Array.isArray(i)){const c=i.map(m=>Oc(n,m,s));r=Promise.all(c)}else if(typeof i=="string")r=Oc(n,i,s);else{const c=typeof i=="function"?Ao(n,i,s.custom):i;r=Promise.all(kv(n,c,s))}return r.then(()=>{n.notify("AnimationComplete",i)})}const z1={test:n=>n==="auto",parse:n=>n},Zv=n=>i=>i.test(n),Jv=[Mo,ee,aa,en,nT,aT,z1],Zp=n=>Jv.find(Zv(n));function O1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||sv(n):!0}const q1=new Set(["brightness","contrast","saturate","opacity"]);function R1(n){const[i,s]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[r]=s.match(Fc)||[];if(!r)return n;const c=s.replace(r,"");let m=q1.has(i)?1:0;return r!==s&&(m*=100),i+"("+m+c+")"}const N1=/\b([a-z-]*)\(.*?\)/gu,qc={...Ft,getAnimatableNone:n=>{const i=n.match(N1);return i?i.map(R1).join(" "):n}},Rc={...Ft,getAnimatableNone:n=>{const i=Ft.parse(n);return Ft.createTransformer(n)(i.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Jp={...Mo,transform:Math.round},V1={rotate:en,rotateX:en,rotateY:en,rotateZ:en,scale:or,scaleX:or,scaleY:or,scaleZ:or,skew:en,skewX:en,skewY:en,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Ni,originX:wp,originY:wp,originZ:ee},uf={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,inset:ee,insetBlock:ee,insetBlockStart:ee,insetBlockEnd:ee,insetInline:ee,insetInlineStart:ee,insetInlineEnd:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,paddingBlock:ee,paddingBlockStart:ee,paddingBlockEnd:ee,paddingInline:ee,paddingInlineStart:ee,paddingInlineEnd:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,marginBlock:ee,marginBlockStart:ee,marginBlockEnd:ee,marginInline:ee,marginInlineStart:ee,marginInlineEnd:ee,fontSize:ee,backgroundPositionX:ee,backgroundPositionY:ee,...V1,zIndex:Jp,fillOpacity:Ni,strokeOpacity:Ni,numOctaves:Jp},w1={...uf,color:Je,backgroundColor:Je,outlineColor:Je,fill:Je,stroke:Je,borderColor:Je,borderTopColor:Je,borderRightColor:Je,borderBottomColor:Je,borderLeftColor:Je,filter:qc,WebkitFilter:qc,mask:Rc,WebkitMask:Rc},Kv=n=>w1[n],j1=new Set([qc,Rc]);function Fv(n,i){let s=Kv(n);return j1.has(s)||(s=Ft),s.getAnimatableNone?s.getAnimatableNone(i):void 0}const U1=new Set(["auto","none","0"]);function _1(n,i,s){let r=0,c;for(;r<n.length&&!c;){const m=n[r];typeof m=="string"&&!U1.has(m)&&Vi(m).values.length&&(c=n[r]),r++}if(c&&s)for(const m of i)n[m]=Fv(s,c)}class B1 extends nf{constructor(i,s,r,c,m){super(i,s,r,c,m,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:s,name:r}=this;if(!s||!s.current)return;super.readKeyframes();for(let y=0;y<i.length;y++){let b=i[y];if(typeof b=="string"&&(b=b.trim(),Kc(b))){const S=Gv(b,s.current);S!==void 0&&(i[y]=S),y===i.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Yv.has(r)||i.length!==2)return;const[c,m]=i,f=Zp(c),h=Zp(m),p=Vp(c),g=Vp(m);if(p!==g&&an[r]){this.needsMeasurement=!0;return}if(f!==h)if(Qp(f)&&Qp(h))for(let y=0;y<i.length;y++){const b=i[y];typeof b=="string"&&(i[y]=parseFloat(b))}else an[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:s}=this,r=[];for(let c=0;c<i.length;c++)(i[c]===null||O1(i[c]))&&r.push(c);r.length&&_1(i,r,s)}measureInitialState(){const{element:i,unresolvedKeyframes:s,name:r}=this;if(!i||!i.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=an[r](i.measureViewportBox(),window.getComputedStyle(i.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&i.getValue(r,c).jump(c,!1)}measureEndState(){var h;const{element:i,name:s,unresolvedKeyframes:r}=this;if(!i||!i.current)return;const c=i.getValue(s);c&&c.jump(this.measuredOrigin,!1);const m=r.length-1,f=r[m];r[m]=an[s](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{i.getValue(p).set(g)}),this.resolveNoneKeyframes()}}const L1=new Set(["opacity","clipPath","filter","transform"]);function Wv(n,i,s){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const c=(s==null?void 0:s[n])??r.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n).filter(r=>r!=null)}const $v=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function Nc(n){return iv(n)&&"offsetHeight"in n}const{schedule:cf}=bv(queueMicrotask,!1),Jt={x:!1,y:!1};function Iv(){return Jt.x||Jt.y}function H1(n){return n==="x"||n==="y"?Jt[n]?null:(Jt[n]=!0,()=>{Jt[n]=!1}):Jt.x||Jt.y?null:(Jt.x=Jt.y=!0,()=>{Jt.x=Jt.y=!1})}function ey(n,i){const s=Wv(n),r=new AbortController,c={passive:!0,...i,signal:r.signal};return[s,c,()=>r.abort()]}function G1(n){return!(n.pointerType==="touch"||Iv())}function Q1(n,i,s={}){const[r,c,m]=ey(n,s);return r.forEach(f=>{let h=!1,p=!1,g;const y=()=>{f.removeEventListener("pointerleave",q)},b=B=>{g&&(g(B),g=void 0),y()},S=B=>{h=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),p&&(p=!1,b(B))},C=()=>{h=!0,window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",S,c)},q=B=>{if(B.pointerType!=="touch"){if(h){p=!0;return}b(B)}},_=B=>{if(!G1(B))return;p=!1;const L=i(f,B);typeof L=="function"&&(g=L,f.addEventListener("pointerleave",q,c))};f.addEventListener("pointerenter",_,c),f.addEventListener("pointerdown",C,c)}),m}const ty=(n,i)=>i?n===i?!0:ty(n,i.parentElement):!1,ff=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,Y1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function P1(n){return Y1.has(n.tagName)||n.isContentEditable===!0}const X1=new Set(["INPUT","SELECT","TEXTAREA"]);function k1(n){return X1.has(n.tagName)||n.isContentEditable===!0}const cr=new WeakSet;function Kp(n){return i=>{i.key==="Enter"&&n(i)}}function nc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const Z1=(n,i)=>{const s=n.currentTarget;if(!s)return;const r=Kp(()=>{if(cr.has(s))return;nc(s,"down");const c=Kp(()=>{nc(s,"up")}),m=()=>nc(s,"cancel");s.addEventListener("keyup",c,i),s.addEventListener("blur",m,i)});s.addEventListener("keydown",r,i),s.addEventListener("blur",()=>s.removeEventListener("keydown",r),i)};function Fp(n){return ff(n)&&!Iv()}const Wp=new WeakSet;function J1(n,i,s={}){const[r,c,m]=ey(n,s),f=h=>{const p=h.currentTarget;if(!Fp(h)||Wp.has(h))return;cr.add(p),s.stopPropagation&&Wp.add(h);const g=i(p,h),y=(C,q)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),cr.has(p)&&cr.delete(p),Fp(C)&&typeof g=="function"&&g(C,{success:q})},b=C=>{y(C,p===window||p===document||s.useGlobalTarget||ty(p,C.target))},S=C=>{y(C,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",S,c)};return r.forEach(h=>{(s.useGlobalTarget?window:h).addEventListener("pointerdown",f,c),Nc(h)&&(h.addEventListener("focus",g=>Z1(g,c)),!P1(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),m}function df(n){return iv(n)&&"ownerSVGElement"in n}const fr=new WeakMap;let tn;const ay=(n,i,s)=>(r,c)=>c&&c[0]?c[0][n+"Size"]:df(r)&&"getBBox"in r?r.getBBox()[i]:r[s],K1=ay("inline","width","offsetWidth"),F1=ay("block","height","offsetHeight");function W1({target:n,borderBoxSize:i}){var s;(s=fr.get(n))==null||s.forEach(r=>{r(n,{get width(){return K1(n,i)},get height(){return F1(n,i)}})})}function $1(n){n.forEach(W1)}function I1(){typeof ResizeObserver>"u"||(tn=new ResizeObserver($1))}function eE(n,i){tn||I1();const s=Wv(n);return s.forEach(r=>{let c=fr.get(r);c||(c=new Set,fr.set(r,c)),c.add(i),tn==null||tn.observe(r)}),()=>{s.forEach(r=>{const c=fr.get(r);c==null||c.delete(i),c!=null&&c.size||tn==null||tn.unobserve(r)})}}const dr=new Set;let So;function tE(){So=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};dr.forEach(i=>i(n))},window.addEventListener("resize",So)}function aE(n){return dr.add(n),So||tE(),()=>{dr.delete(n),!dr.size&&typeof So=="function"&&(window.removeEventListener("resize",So),So=void 0)}}function $p(n,i){return typeof n=="function"?aE(n):eE(n,i)}function nE(n){return df(n)&&n.tagName==="svg"}const oE=[...Jv,Je,Ft],iE=n=>oE.find(Zv(n)),Ip=()=>({translate:0,scale:1,origin:0,originPoint:0}),To=()=>({x:Ip(),y:Ip()}),eg=()=>({min:0,max:0}),We=()=>({x:eg(),y:eg()}),sE=new WeakMap;function Dr(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function wi(n){return typeof n=="string"||Array.isArray(n)}const mf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],hf=["initial",...mf];function Mr(n){return Dr(n.animate)||hf.some(i=>wi(n[i]))}function ny(n){return!!(Mr(n)||n.variants)}function rE(n,i,s){for(const r in i){const c=i[r],m=s[r];if(ut(c))n.addValue(r,c);else if(ut(m))n.addValue(r,Do(c,{owner:n}));else if(m!==c)if(n.hasValue(r)){const f=n.getValue(r);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=n.getStaticValue(r);n.addValue(r,Do(f!==void 0?f:c,{owner:n}))}}for(const r in s)i[r]===void 0&&n.removeValue(r);return i}const Vc={current:null},oy={current:!1},lE=typeof window<"u";function uE(){if(oy.current=!0,!!lE)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Vc.current=n.matches;n.addEventListener("change",i),i()}else Vc.current=!1}const tg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let br={};function iy(n){br=n}function cE(){return br}class fE{scrapeMotionValuesFromProps(i,s,r){return{}}constructor({parent:i,props:s,presenceContext:r,reducedMotionConfig:c,skipAnimations:m,blockInitialAnimation:f,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=nf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=ft.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,Re.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=s.initial?{...g}:{},this.renderState=y,this.parent=i,this.props=s,this.presenceContext=r,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=m,this.options=p,this.blockInitialAnimation=!!f,this.isControllingVariants=Mr(s),this.isVariantNode=ny(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...S}=this.scrapeMotionValuesFromProps(s,{},this);for(const C in S){const q=S[C];g[C]!==void 0&&ut(q)&&q.set(g[C])}}mount(i){var s,r;if(this.hasBeenMounted)for(const c in this.initialValues)(s=this.values.get(c))==null||s.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=i,sE.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,m)=>this.bindToMotionValue(m,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(oy.current||uE(),this.shouldReduceMotion=Vc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var i;this.projection&&this.projection.unmount(),nn(this.notifyUpdate),nn(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(i=this.parent)==null||i.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const r=this.features[s];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,s){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),s.accelerate&&L1.has(i)&&this.current instanceof HTMLElement){const{factory:f,keyframes:h,times:p,ease:g,duration:y}=s.accelerate,b=new Bv({element:this.current,name:i,keyframes:h,times:p,ease:g,duration:Kt(y)}),S=f(b);this.valueSubscriptions.set(i,()=>{S(),b.cancel()});return}const r=zo.has(i);r&&this.onBindTransform&&this.onBindTransform();const c=s.on("change",f=>{this.latestValues[i]=f,this.props.onUpdate&&Re.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,i,s)),this.valueSubscriptions.set(i,()=>{c(),m&&m(),s.owner&&s.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in br){const s=br[i];if(!s)continue;const{isEnabled:r,Feature:c}=s;if(!this.features[i]&&c&&r(this.props)&&(this.features[i]=new c(this)),this.features[i]){const m=this.features[i];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):We()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,s){this.latestValues[i]=s}update(i,s){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let r=0;r<tg.length;r++){const c=tg[r];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const m="on"+c,f=i[m];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=rE(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(i),()=>s.variantChildren.delete(i)}addValue(i,s){const r=this.values.get(i);s!==r&&(r&&this.removeValue(i),this.bindToMotionValue(i,s),this.values.set(i,s),this.latestValues[i]=s.get())}removeValue(i){this.values.delete(i);const s=this.valueSubscriptions.get(i);s&&(s(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,s){if(this.props.values&&this.props.values[i])return this.props.values[i];let r=this.values.get(i);return r===void 0&&s!==void 0&&(r=Do(s===null?void 0:s,{owner:this}),this.addValue(i,r)),r}readValue(i,s){let r=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return r!=null&&(typeof r=="string"&&(ov(r)||sv(r))?r=parseFloat(r):!iE(r)&&Ft.test(s)&&(r=Fv(i,s)),this.setBaseTarget(i,ut(r)?r.get():r)),ut(r)?r.get():r}setBaseTarget(i,s){this.baseTarget[i]=s}getBaseTarget(i){var m;const{initial:s}=this.props;let r;if(typeof s=="string"||typeof s=="object"){const f=rf(this.props,s,(m=this.presenceContext)==null?void 0:m.custom);f&&(r=f[i])}if(s&&r!==void 0)return r;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!ut(c)?c:this.initialValues[i]!==void 0&&r===void 0?void 0:this.baseTarget[i]}on(i,s){return this.events[i]||(this.events[i]=new kc),this.events[i].add(s)}notify(i,...s){this.events[i]&&this.events[i].notify(...s)}scheduleRenderMicrotask(){cf.render(this.render)}}class sy extends fE{constructor(){super(...arguments),this.KeyframeResolver=B1}sortInstanceNodePosition(i,s){return i.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(i,s){const r=i.style;return r?r[s]:void 0}removeValueFromRenderState(i,{vars:s,style:r}){delete s[i],delete r[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;ut(i)&&(this.childSubscription=i.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}class on{constructor(i){this.isMounted=!1,this.node=i}update(){}}function ry({top:n,left:i,right:s,bottom:r}){return{x:{min:i,max:s},y:{min:n,max:r}}}function dE({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function mE(n,i){if(!i)return n;const s=i({x:n.left,y:n.top}),r=i({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:r.y,right:r.x}}function oc(n){return n===void 0||n===1}function wc({scale:n,scaleX:i,scaleY:s}){return!oc(n)||!oc(i)||!oc(s)}function Cn(n){return wc(n)||ly(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function ly(n){return ag(n.x)||ag(n.y)}function ag(n){return n&&n!=="0%"}function Sr(n,i,s){const r=n-s,c=i*r;return s+c}function ng(n,i,s,r,c){return c!==void 0&&(n=Sr(n,c,r)),Sr(n,s,r)+i}function jc(n,i=0,s=1,r,c){n.min=ng(n.min,i,s,r,c),n.max=ng(n.max,i,s,r,c)}function uy(n,{x:i,y:s}){jc(n.x,i.translate,i.scale,i.originPoint),jc(n.y,s.translate,s.scale,s.originPoint)}const og=.999999999999,ig=1.0000000000001;function hE(n,i,s,r=!1){const c=s.length;if(!c)return;i.x=i.y=1;let m,f;for(let h=0;h<c;h++){m=s[h],f=m.projectionDelta;const{visualElement:p}=m.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&m.options.layoutScroll&&m.scroll&&m!==m.root&&xo(n,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,uy(n,f)),r&&Cn(m.latestValues)&&xo(n,m.latestValues))}i.x<ig&&i.x>og&&(i.x=1),i.y<ig&&i.y>og&&(i.y=1)}function Eo(n,i){n.min=n.min+i,n.max=n.max+i}function sg(n,i,s,r,c=.5){const m=_e(n.min,n.max,c);jc(n,i,s,m,r)}function xo(n,i){sg(n.x,i.x,i.scaleX,i.scale,i.originX),sg(n.y,i.y,i.scaleY,i.scale,i.originY)}function cy(n,i){return ry(mE(n.getBoundingClientRect(),i))}function pE(n,i,s){const r=cy(n,s),{scroll:c}=i;return c&&(Eo(r.x,c.offset.x),Eo(r.y,c.offset.y)),r}const gE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vE=Co.length;function yE(n,i,s){let r="",c=!0;for(let m=0;m<vE;m++){const f=Co[m],h=n[f];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(f.startsWith("scale")?1:0);else{const g=parseFloat(h);p=f.startsWith("scale")?g===1:g===0}if(!p||s){const g=$v(h,uf[f]);if(!p){c=!1;const y=gE[f]||f;r+=`${y}(${g}) `}s&&(i[f]=g)}}return r=r.trim(),s?r=s(i,c?"":r):c&&(r="none"),r}function pf(n,i,s){const{style:r,vars:c,transformOrigin:m}=n;let f=!1,h=!1;for(const p in i){const g=i[p];if(zo.has(p)){f=!0;continue}else if(Tv(p)){c[p]=g;continue}else{const y=$v(g,uf[p]);p.startsWith("origin")?(h=!0,m[p]=y):r[p]=y}}if(i.transform||(f||s?r.transform=yE(i,n.transform,s):r.transform&&(r.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:y=0}=m;r.transformOrigin=`${p} ${g} ${y}`}}function fy(n,{style:i,vars:s},r,c){const m=n.style;let f;for(f in i)m[f]=i[f];c==null||c.applyProjectionStyles(m,r);for(f in s)m.setProperty(f,s[f])}function rg(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Ai={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(ee.test(n))n=parseFloat(n);else return n;const s=rg(n,i.target.x),r=rg(n,i.target.y);return`${s}% ${r}%`}},bE={correct:(n,{treeScale:i,projectionDelta:s})=>{const r=n,c=Ft.parse(n);if(c.length>5)return r;const m=Ft.createTransformer(n),f=typeof c[0]!="number"?1:0,h=s.x.scale*i.x,p=s.y.scale*i.y;c[0+f]/=h,c[1+f]/=p;const g=_e(h,p,.5);return typeof c[2+f]=="number"&&(c[2+f]/=g),typeof c[3+f]=="number"&&(c[3+f]/=g),m(c)}},Uc={borderRadius:{...Ai,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ai,borderTopRightRadius:Ai,borderBottomLeftRadius:Ai,borderBottomRightRadius:Ai,boxShadow:bE};function dy(n,{layout:i,layoutId:s}){return zo.has(n)||n.startsWith("origin")||(i||s!==void 0)&&(!!Uc[n]||n==="opacity")}function gf(n,i,s){var f;const r=n.style,c=i==null?void 0:i.style,m={};if(!r)return m;for(const h in r)(ut(r[h])||c&&ut(c[h])||dy(h,n)||((f=s==null?void 0:s.getValue(h))==null?void 0:f.liveStyle)!==void 0)&&(m[h]=r[h]);return m}function SE(n){return window.getComputedStyle(n)}class TE extends sy{constructor(){super(...arguments),this.type="html",this.renderInstance=fy}readValueFromInstance(i,s){var r;if(zo.has(s))return(r=this.projection)!=null&&r.isProjecting?Tc(s):HT(i,s);{const c=SE(i),m=(Tv(s)?c.getPropertyValue(s):c[s])||0;return typeof m=="string"?m.trim():m}}measureInstanceViewportBox(i,{transformPagePoint:s}){return cy(i,s)}build(i,s,r){pf(i,s,r.transformTemplate)}scrapeMotionValuesFromProps(i,s,r){return gf(i,s,r)}}const EE={offset:"stroke-dashoffset",array:"stroke-dasharray"},xE={offset:"strokeDashoffset",array:"strokeDasharray"};function AE(n,i,s=1,r=0,c=!0){n.pathLength=1;const m=c?EE:xE;n[m.offset]=`${-r}`,n[m.array]=`${i} ${s}`}const DE=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function my(n,{attrX:i,attrY:s,attrScale:r,pathLength:c,pathSpacing:m=1,pathOffset:f=0,...h},p,g,y){if(pf(n,h,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:S}=n;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox);for(const C of DE)b[C]!==void 0&&(S[C]=b[C],delete b[C]);i!==void 0&&(b.x=i),s!==void 0&&(b.y=s),r!==void 0&&(b.scale=r),c!==void 0&&AE(b,c,m,f,!1)}const hy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),py=n=>typeof n=="string"&&n.toLowerCase()==="svg";function ME(n,i,s,r){fy(n,i,void 0,r);for(const c in i.attrs)n.setAttribute(hy.has(c)?c:lf(c),i.attrs[c])}function gy(n,i,s){const r=gf(n,i,s);for(const c in n)if(ut(n[c])||ut(i[c])){const m=Co.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;r[m]=n[c]}return r}class CE extends sy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=We}getBaseTargetFromProps(i,s){return i[s]}readValueFromInstance(i,s){if(zo.has(s)){const r=Kv(s);return r&&r.default||0}return s=hy.has(s)?s:lf(s),i.getAttribute(s)}scrapeMotionValuesFromProps(i,s,r){return gy(i,s,r)}build(i,s,r){my(i,s,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(i,s,r,c){ME(i,s,r,c)}mount(i){this.isSVGTag=py(i.tagName),super.mount(i)}}const zE=hf.length;function vy(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?vy(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const i={};for(let s=0;s<zE;s++){const r=hf[s],c=n.props[r];(wi(c)||c===!1)&&(i[r]=c)}return i}function yy(n,i){if(!Array.isArray(i))return!1;const s=i.length;if(s!==n.length)return!1;for(let r=0;r<s;r++)if(i[r]!==n[r])return!1;return!0}const OE=[...mf].reverse(),qE=mf.length;function RE(n){return i=>Promise.all(i.map(({animation:s,options:r})=>C1(n,s,r)))}function NE(n){let i=RE(n),s=lg(),r=!0;const c=p=>(g,y)=>{var S;const b=Ao(n,y,p==="exit"?(S=n.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:C,transitionEnd:q,..._}=b;g={...g,..._,...q}}return g};function m(p){i=p(n)}function f(p){const{props:g}=n,y=vy(n.parent)||{},b=[],S=new Set;let C={},q=1/0;for(let B=0;B<qE;B++){const L=OE[B],k=s[L],G=g[L]!==void 0?g[L]:y[L],J=wi(G),P=L===p?k.isActive:null;P===!1&&(q=B);let oe=G===y[L]&&G!==g[L]&&J;if(oe&&r&&n.manuallyAnimateOnMount&&(oe=!1),k.protectedKeys={...C},!k.isActive&&P===null||!G&&!k.prevProp||Dr(G)||typeof G=="boolean")continue;if(L==="exit"&&k.isActive&&P!==!0){k.prevResolvedValues&&(C={...C,...k.prevResolvedValues});continue}const F=VE(k.prevProp,G);let U=F||L===p&&k.isActive&&!oe&&J||B>q&&J,ie=!1;const Ae=Array.isArray(G)?G:[G];let je=Ae.reduce(c(L),{});P===!1&&(je={});const{prevResolvedValues:Ne={}}=k,mt={...Ne,...je},rt=H=>{U=!0,S.has(H)&&(ie=!0,S.delete(H)),k.needsAnimating[H]=!0;const W=n.getValue(H);W&&(W.liveStyle=!1)};for(const H in mt){const W=je[H],de=Ne[H];if(C.hasOwnProperty(H))continue;let Y=!1;Cc(W)&&Cc(de)?Y=!yy(W,de):Y=W!==de,Y?W!=null?rt(H):S.add(H):W!==void 0&&S.has(H)?rt(H):k.protectedKeys[H]=!0}k.prevProp=G,k.prevResolvedValues=je,k.isActive&&(C={...C,...je}),r&&n.blockInitialAnimation&&(U=!1);const Ge=oe&&F;U&&(!Ge||ie)&&b.push(...Ae.map(H=>{const W={type:L};if(typeof H=="string"&&r&&!Ge&&n.manuallyAnimateOnMount&&n.parent){const{parent:de}=n,Y=Ao(de,H);if(de.enteringChildren&&Y){const{delayChildren:x}=Y.transition||{};W.delay=Hv(de.enteringChildren,n,x)}}return{animation:H,options:W}}))}if(S.size){const B={};if(typeof g.initial!="boolean"){const L=Ao(n,Array.isArray(g.initial)?g.initial[0]:g.initial);L&&L.transition&&(B.transition=L.transition)}S.forEach(L=>{const k=n.getBaseTarget(L),G=n.getValue(L);G&&(G.liveStyle=!0),B[L]=k??null}),b.push({animation:B})}let _=!!b.length;return r&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(_=!1),r=!1,_?i(b):Promise.resolve()}function h(p,g){var b;if(s[p].isActive===g)return Promise.resolve();(b=n.variantChildren)==null||b.forEach(S=>{var C;return(C=S.animationState)==null?void 0:C.setActive(p,g)}),s[p].isActive=g;const y=f(p);for(const S in s)s[S].protectedKeys={};return y}return{animateChanges:f,setActive:h,setAnimateFunction:m,getState:()=>s,reset:()=>{s=lg()}}}function VE(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!yy(i,n):!1}function Dn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lg(){return{animate:Dn(!0),whileInView:Dn(),whileHover:Dn(),whileTap:Dn(),whileDrag:Dn(),whileFocus:Dn(),exit:Dn()}}function ug(n,i){n.min=i.min,n.max=i.max}function Zt(n,i){ug(n.x,i.x),ug(n.y,i.y)}function cg(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}const by=1e-4,wE=1-by,jE=1+by,Sy=.01,UE=0-Sy,_E=0+Sy;function dt(n){return n.max-n.min}function BE(n,i,s){return Math.abs(n-i)<=s}function fg(n,i,s,r=.5){n.origin=r,n.originPoint=_e(i.min,i.max,n.origin),n.scale=dt(s)/dt(i),n.translate=_e(s.min,s.max,n.origin)-n.originPoint,(n.scale>=wE&&n.scale<=jE||isNaN(n.scale))&&(n.scale=1),(n.translate>=UE&&n.translate<=_E||isNaN(n.translate))&&(n.translate=0)}function Oi(n,i,s,r){fg(n.x,i.x,s.x,r?r.originX:void 0),fg(n.y,i.y,s.y,r?r.originY:void 0)}function dg(n,i,s){n.min=s.min+i.min,n.max=n.min+dt(i)}function LE(n,i,s){dg(n.x,i.x,s.x),dg(n.y,i.y,s.y)}function mg(n,i,s){n.min=i.min-s.min,n.max=n.min+dt(i)}function Tr(n,i,s){mg(n.x,i.x,s.x),mg(n.y,i.y,s.y)}function hg(n,i,s,r,c){return n-=i,n=Sr(n,1/s,r),c!==void 0&&(n=Sr(n,1/c,r)),n}function HE(n,i=0,s=1,r=.5,c,m=n,f=n){if(aa.test(i)&&(i=parseFloat(i),i=_e(f.min,f.max,i/100)-f.min),typeof i!="number")return;let h=_e(m.min,m.max,r);n===m&&(h-=i),n.min=hg(n.min,i,s,h,c),n.max=hg(n.max,i,s,h,c)}function pg(n,i,[s,r,c],m,f){HE(n,i[s],i[r],i[c],i.scale,m,f)}const GE=["x","scaleX","originX"],QE=["y","scaleY","originY"];function gg(n,i,s,r){pg(n.x,i,GE,s?s.x:void 0,r?r.x:void 0),pg(n.y,i,QE,s?s.y:void 0,r?r.y:void 0)}function vg(n){return n.translate===0&&n.scale===1}function Ty(n){return vg(n.x)&&vg(n.y)}function yg(n,i){return n.min===i.min&&n.max===i.max}function YE(n,i){return yg(n.x,i.x)&&yg(n.y,i.y)}function bg(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Ey(n,i){return bg(n.x,i.x)&&bg(n.y,i.y)}function Sg(n){return dt(n.x)/dt(n.y)}function Tg(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}function ta(n){return[n("x"),n("y")]}function PE(n,i,s){let r="";const c=n.x.translate/i.x,m=n.y.translate/i.y,f=(s==null?void 0:s.z)||0;if((c||m||f)&&(r=`translate3d(${c}px, ${m}px, ${f}px) `),(i.x!==1||i.y!==1)&&(r+=`scale(${1/i.x}, ${1/i.y}) `),s){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:S,skewX:C,skewY:q}=s;g&&(r=`perspective(${g}px) ${r}`),y&&(r+=`rotate(${y}deg) `),b&&(r+=`rotateX(${b}deg) `),S&&(r+=`rotateY(${S}deg) `),C&&(r+=`skewX(${C}deg) `),q&&(r+=`skewY(${q}deg) `)}const h=n.x.scale*i.x,p=n.y.scale*i.y;return(h!==1||p!==1)&&(r+=`scale(${h}, ${p})`),r||"none"}const xy=["TopLeft","TopRight","BottomLeft","BottomRight"],XE=xy.length,Eg=n=>typeof n=="string"?parseFloat(n):n,xg=n=>typeof n=="number"||ee.test(n);function kE(n,i,s,r,c,m){c?(n.opacity=_e(0,s.opacity??1,ZE(r)),n.opacityExit=_e(i.opacity??1,0,JE(r))):m&&(n.opacity=_e(i.opacity??1,s.opacity??1,r));for(let f=0;f<XE;f++){const h=`border${xy[f]}Radius`;let p=Ag(i,h),g=Ag(s,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||xg(p)===xg(g)?(n[h]=Math.max(_e(Eg(p),Eg(g),r),0),(aa.test(g)||aa.test(p))&&(n[h]+="%")):n[h]=g}(i.rotate||s.rotate)&&(n.rotate=_e(i.rotate||0,s.rotate||0,r))}function Ag(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const ZE=Ay(0,.5,pv),JE=Ay(.5,.95,Yt);function Ay(n,i,s){return r=>r<n?0:r>i?1:s(Ri(n,i,r))}function KE(n,i,s){const r=ut(n)?n:Do(n);return r.start(sf("",r,i,s)),r.animation}function ji(n,i,s,r={passive:!0}){return n.addEventListener(i,s,r),()=>n.removeEventListener(i,s)}const FE=(n,i)=>n.depth-i.depth;class WE{constructor(){this.children=[],this.isDirty=!1}add(i){Pc(this.children,i),this.isDirty=!0}remove(i){pr(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(FE),this.isDirty=!1,this.children.forEach(i)}}function $E(n,i){const s=ft.now(),r=({timestamp:c})=>{const m=c-s;m>=i&&(nn(r),n(m-i))};return Re.setup(r,!0),()=>nn(r)}function mr(n){return ut(n)?n.get():n}class IE{constructor(){this.members=[]}add(i){Pc(this.members,i);for(let s=this.members.length-1;s>=0;s--){const r=this.members[s];if(r===i||r===this.lead||r===this.prevLead)continue;const c=r.instance;c&&c.isConnected===!1&&r.isPresent!==!1&&!r.snapshot&&pr(this.members,r)}i.scheduleRender()}remove(i){if(pr(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(i){const s=this.members.findIndex(c=>i===c);if(s===0)return!1;let r;for(let c=s;c>=0;c--){const m=this.members[c],f=m.instance;if(m.isPresent!==!1&&(!f||f.isConnected!==!1)){r=m;break}}return r?(this.promote(r),!0):!1}promote(i,s){const r=this.lead;if(i!==r&&(this.prevLead=r,this.lead=i,i.show(),r)){r.instance&&r.scheduleRender(),i.scheduleRender();const c=r.options.layoutDependency,m=i.options.layoutDependency;if(!(c!==void 0&&m!==void 0&&c===m)){const p=r.instance;p&&p.isConnected===!1&&!r.snapshot||(i.resumeFrom=r,s&&(i.resumeFrom.preserveOpacity=!0),r.snapshot&&(i.snapshot=r.snapshot,i.snapshot.latestValues=r.animationValues||r.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0))}const{crossfade:h}=i.options;h===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:s,resumingFrom:r}=i;s.onExitComplete&&s.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const hr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ic=["","X","Y","Z"],ex=1e3;let tx=0;function sc(n,i,s,r){const{latestValues:c}=i;c[n]&&(s[n]=c[n],i.setStaticValue(n,0),r&&(r[n]=0))}function Dy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const s=Xv(i);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:m}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",Re,!(c||m))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Dy(r)}function My({attachResizeListener:n,defaultParent:i,measureScroll:s,checkIsScrollRoot:r,resetTransform:c}){return class{constructor(f={},h=i==null?void 0:i()){this.id=tx++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(ox),this.nodes.forEach(lx),this.nodes.forEach(ux),this.nodes.forEach(ix)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new WE)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new kc),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const p=this.eventHandlers.get(f);p&&p.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=df(f)&&!nE(f),this.instance=f;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),n){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;Re.read(()=>{b=window.innerWidth}),n(f,()=>{const C=window.innerWidth;C!==b&&(b=C,this.root.updateBlockedByResize=!0,y&&y(),y=$E(S,250),hr.hasAnimatedSinceResize&&(hr.hasAnimatedSinceResize=!1,this.nodes.forEach(Cg)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const q=this.options.transition||g.getDefaultTransition()||hx,{onLayoutAnimationStart:_,onLayoutAnimationComplete:B}=g.getProps(),L=!this.targetLayout||!Ey(this.targetLayout,C),k=!b&&S;if(this.options.layoutRoot||this.resumeFrom||k||b&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const G={...of(q,"layout"),onPlay:_,onComplete:B};(g.shouldReduceMotion||this.options.layoutRoot)&&(G.delay=0,G.type=!1),this.startAnimation(G),this.setAnimationOrigin(y,k)}else b||Cg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),nn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(cx),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Dy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Dg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Mg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(rx),this.nodes.forEach(ax),this.nodes.forEach(nx)):this.nodes.forEach(Mg),this.clearAllSnapshots();const h=ft.now();st.delta=na(0,1e3/60,h-st.timestamp),st.timestamp=h,st.isProcessing=!0,Wu.update.process(st),Wu.preRender.process(st),Wu.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,cf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(sx),this.sharedNodes.forEach(fx)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Re.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Re.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!dt(this.snapshot.measuredBox.x)&&!dt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=We(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h&&this.instance){const p=r(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!Ty(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;f&&this.instance&&(h||Cn(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return f&&(p=this.removeTransform(p)),px(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:f}=this.options;if(!f)return We();const h=f.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(gx))){const{scroll:y}=this.root;y&&(Eo(h.x,y.offset.x),Eo(h.y,y.offset.y))}return h}removeElementScroll(f){var p;const h=We();if(Zt(h,f),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:b,options:S}=y;y!==this.root&&b&&S.layoutScroll&&(b.wasRoot&&Zt(h,f),Eo(h.x,b.offset.x),Eo(h.y,b.offset.y))}return h}applyTransform(f,h=!1){const p=We();Zt(p,f);for(let g=0;g<this.path.length;g++){const y=this.path[g];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&xo(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Cn(y.latestValues)&&xo(p,y.latestValues)}return Cn(this.latestValues)&&xo(p,this.latestValues),p}removeTransform(f){const h=We();Zt(h,f);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!Cn(g.latestValues))continue;wc(g.latestValues)&&g.updateSnapshot();const y=We(),b=g.measurePageBox();Zt(y,b),gg(h,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Cn(this.latestValues)&&gg(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var C;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=st.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=We(),this.targetWithTransforms=We()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),LE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Zt(this.target,this.layout.layoutBox),uy(this.target,this.targetDelta)):Zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||wc(this.parent.latestValues)||ly(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(f,h,p){this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),Tr(this.relativeTargetOrigin,h,p),Zt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var q;const f=this.getLead(),h=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||(q=this.parent)!=null&&q.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===st.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Zt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;hE(this.layoutCorrected,this.treeScale,this.path,h),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=We());const{target:C}=f;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(cg(this.prevProjectionDelta.x,this.projectionDelta.x),cg(this.prevProjectionDelta.y,this.projectionDelta.y)),Oi(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!Tg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Tg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=To(),this.projectionDelta=To(),this.projectionDeltaWithTransform=To()}setAnimationOrigin(f,h=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},b=To();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const S=We(),C=p?p.source:void 0,q=this.layout?this.layout.source:void 0,_=C!==q,B=this.getStack(),L=!B||B.members.length<=1,k=!!(_&&!L&&this.options.crossfade===!0&&!this.path.some(mx));this.animationProgress=0;let G;this.mixTargetDelta=J=>{const P=J/1e3;zg(b.x,f.x,P),zg(b.y,f.y,P),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Tr(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),dx(this.relativeTarget,this.relativeTargetOrigin,S,P),G&&YE(this.relativeTarget,G)&&(this.isProjectionDirty=!1),G||(G=We()),Zt(G,this.relativeTarget)),_&&(this.animationValues=y,kE(y,g,this.latestValues,P,k,L)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(nn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Re.update(()=>{hr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Do(0)),this.motionValue.jump(0,!1),this.currentAnimation=KE(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),f.onUpdate&&f.onUpdate(y)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ex),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:y}=f;if(!(!h||!p||!g)){if(this!==f&&this.layout&&g&&Cy(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||We();const b=dt(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+b;const S=dt(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+S}Zt(h,p),xo(h,y),Oi(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new IE),this.sharedNodes.get(f).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var h;const{layoutId:f}=this.options;return f?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:f}=this.options;return f?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&sc("z",f,g,this.animationValues);for(let y=0;y<ic.length;y++)sc(`rotate${ic[y]}`,f,g,this.animationValues),sc(`skew${ic[y]}`,f,g,this.animationValues);f.render();for(const y in g)f.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);f.scheduleRender()}applyProjectionStyles(f,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=mr(h==null?void 0:h.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=mr(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Cn(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=PE(this.projectionDeltaWithTransform,this.treeScale,y);p&&(b=p(y,b)),f.transform=b;const{x:S,y:C}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${C.origin*100}% 0`,g.animationValues?f.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const q in Uc){if(y[q]===void 0)continue;const{correct:_,applyTo:B,isCSSVariable:L}=Uc[q],k=b==="none"?y[q]:_(y[q],g);if(B){const G=B.length;for(let J=0;J<G;J++)f[B[J]]=k}else L?this.options.visualElement.renderState.vars[q]=k:f[q]=k}this.options.layoutId&&(f.pointerEvents=g===this?mr(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var h;return(h=f.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Dg),this.root.sharedNodes.clear()}}}function ax(n){n.updateLayout()}function nx(n){var s;const i=((s=n.resumeFrom)==null?void 0:s.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:c}=n.layout,{animationType:m}=n.options,f=i.source!==n.layout.source;m==="size"?ta(b=>{const S=f?i.measuredBox[b]:i.layoutBox[b],C=dt(S);S.min=r[b].min,S.max=S.min+C}):Cy(m,i.layoutBox,r)&&ta(b=>{const S=f?i.measuredBox[b]:i.layoutBox[b],C=dt(r[b]);S.max=S.min+C,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+C)});const h=To();Oi(h,r,i.layoutBox);const p=To();f?Oi(p,n.applyTransform(c,!0),i.measuredBox):Oi(p,r,i.layoutBox);const g=!Ty(h);let y=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:S,layout:C}=b;if(S&&C){const q=We();Tr(q,i.layoutBox,S.layoutBox);const _=We();Tr(_,r,C.layoutBox),Ey(q,_)||(y=!0),b.options.layoutRoot&&(n.relativeTarget=_,n.relativeTargetOrigin=q,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:i,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function ox(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function ix(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function sx(n){n.clearSnapshot()}function Dg(n){n.clearMeasurements()}function Mg(n){n.isLayoutDirty=!1}function rx(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function Cg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function lx(n){n.resolveTargetDelta()}function ux(n){n.calcProjection()}function cx(n){n.resetSkewAndRotation()}function fx(n){n.removeLeadSnapshot()}function zg(n,i,s){n.translate=_e(i.translate,0,s),n.scale=_e(i.scale,1,s),n.origin=i.origin,n.originPoint=i.originPoint}function Og(n,i,s,r){n.min=_e(i.min,s.min,r),n.max=_e(i.max,s.max,r)}function dx(n,i,s,r){Og(n.x,i.x,s.x,r),Og(n.y,i.y,s.y,r)}function mx(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const hx={duration:.45,ease:[.4,0,.1,1]},qg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Rg=qg("applewebkit/")&&!qg("chrome/")?Math.round:Yt;function Ng(n){n.min=Rg(n.min),n.max=Rg(n.max)}function px(n){Ng(n.x),Ng(n.y)}function Cy(n,i,s){return n==="position"||n==="preserve-aspect"&&!BE(Sg(i),Sg(s),.2)}function gx(n){var i;return n!==n.root&&((i=n.scroll)==null?void 0:i.wasRoot)}const vx=My({attachResizeListener:(n,i)=>ji(n,"resize",i),measureScroll:()=>{var n,i;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((i=document.body)==null?void 0:i.scrollTop)||0}},checkIsScrollRoot:()=>!0}),rc={current:void 0},zy=My({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!rc.current){const n=new vx({});n.mount(window),n.setOptions({layoutScroll:!0}),rc.current=n}return rc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),vf=X.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Vg(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function yx(...n){return i=>{let s=!1;const r=n.map(c=>{const m=Vg(c,i);return!s&&typeof m=="function"&&(s=!0),m});if(s)return()=>{for(let c=0;c<r.length;c++){const m=r[c];typeof m=="function"?m():Vg(n[c],null)}}}}function bx(...n){return X.useCallback(yx(...n),n)}class Sx extends X.Component{getSnapshotBeforeUpdate(i){const s=this.props.childRef.current;if(s&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=s.offsetParent,c=Nc(r)&&r.offsetWidth||0,m=Nc(r)&&r.offsetHeight||0,f=this.props.sizeRef.current;f.height=s.offsetHeight||0,f.width=s.offsetWidth||0,f.top=s.offsetTop,f.left=s.offsetLeft,f.right=c-f.width-f.left,f.bottom=m-f.height-f.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Tx({children:n,isPresent:i,anchorX:s,anchorY:r,root:c,pop:m}){var S;const f=X.useId(),h=X.useRef(null),p=X.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=X.useContext(vf),y=((S=n.props)==null?void 0:S.ref)??(n==null?void 0:n.ref),b=bx(h,y);return X.useInsertionEffect(()=>{const{width:C,height:q,top:_,left:B,right:L,bottom:k}=p.current;if(i||m===!1||!h.current||!C||!q)return;const G=s==="left"?`left: ${B}`:`right: ${L}`,J=r==="bottom"?`bottom: ${k}`:`top: ${_}`;h.current.dataset.motionPopId=f;const P=document.createElement("style");g&&(P.nonce=g);const oe=c??document.head;return oe.appendChild(P),P.sheet&&P.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${C}px !important;
            height: ${q}px !important;
            ${G}px !important;
            ${J}px !important;
          }
        `),()=>{oe.contains(P)&&oe.removeChild(P)}},[i]),Q.jsx(Sx,{isPresent:i,childRef:h,sizeRef:p,pop:m,children:m===!1?n:X.cloneElement(n,{ref:b})})}const Ex=({children:n,initial:i,isPresent:s,onExitComplete:r,custom:c,presenceAffectsLayout:m,mode:f,anchorX:h,anchorY:p,root:g})=>{const y=Yc(xx),b=X.useId();let S=!0,C=X.useMemo(()=>(S=!1,{id:b,initial:i,isPresent:s,custom:c,onExitComplete:q=>{y.set(q,!0);for(const _ of y.values())if(!_)return;r&&r()},register:q=>(y.set(q,!1),()=>y.delete(q))}),[s,y,r]);return m&&S&&(C={...C}),X.useMemo(()=>{y.forEach((q,_)=>y.set(_,!1))},[s]),X.useEffect(()=>{!s&&!y.size&&r&&r()},[s]),n=Q.jsx(Tx,{pop:f==="popLayout",isPresent:s,anchorX:h,anchorY:p,root:g,children:n}),Q.jsx(Ar.Provider,{value:C,children:n})};function xx(){return new Map}function Oy(n=!0){const i=X.useContext(Ar);if(i===null)return[!0,null];const{isPresent:s,onExitComplete:r,register:c}=i,m=X.useId();X.useEffect(()=>{if(n)return c(m)},[n]);const f=X.useCallback(()=>n&&r&&r(m),[m,r,n]);return!s&&r?[!1,f]:[!0]}const ir=n=>n.key||"";function wg(n){const i=[];return X.Children.forEach(n,s=>{X.isValidElement(s)&&i.push(s)}),i}const Ax=({children:n,custom:i,initial:s=!0,onExitComplete:r,presenceAffectsLayout:c=!0,mode:m="sync",propagate:f=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[y,b]=Oy(f),S=X.useMemo(()=>wg(n),[n]),C=f&&!y?[]:S.map(ir),q=X.useRef(!0),_=X.useRef(S),B=Yc(()=>new Map),L=X.useRef(new Set),[k,G]=X.useState(S),[J,P]=X.useState(S);nv(()=>{q.current=!1,_.current=S;for(let U=0;U<J.length;U++){const ie=ir(J[U]);C.includes(ie)?(B.delete(ie),L.current.delete(ie)):B.get(ie)!==!0&&B.set(ie,!1)}},[J,C.length,C.join("-")]);const oe=[];if(S!==k){let U=[...S];for(let ie=0;ie<J.length;ie++){const Ae=J[ie],je=ir(Ae);C.includes(je)||(U.splice(ie,0,Ae),oe.push(Ae))}return m==="wait"&&oe.length&&(U=oe),P(wg(U)),G(S),null}const{forceRender:F}=X.useContext(Qc);return Q.jsx(Q.Fragment,{children:J.map(U=>{const ie=ir(U),Ae=f&&!y?!1:S===J||C.includes(ie),je=()=>{if(L.current.has(ie))return;if(L.current.add(ie),B.has(ie))B.set(ie,!0);else return;let Ne=!0;B.forEach(mt=>{mt||(Ne=!1)}),Ne&&(F==null||F(),P(_.current),f&&(b==null||b()),r&&r())};return Q.jsx(Ex,{isPresent:Ae,initial:!q.current||s?void 0:!1,custom:i,presenceAffectsLayout:c,mode:m,root:g,onExitComplete:Ae?void 0:je,anchorX:h,anchorY:p,children:U},ie)})})},qy=X.createContext({strict:!1}),jg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Ug=!1;function Dx(){if(Ug)return;const n={};for(const i in jg)n[i]={isEnabled:s=>jg[i].some(r=>!!s[r])};iy(n),Ug=!0}function Ry(){return Dx(),cE()}function Mx(n){const i=Ry();for(const s in n)i[s]={...i[s],...n[s]};iy(i)}const Cx=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Er(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Cx.has(n)}let Ny=n=>!Er(n);function zx(n){typeof n=="function"&&(Ny=i=>i.startsWith("on")?!Er(i):n(i))}try{zx(require("@emotion/is-prop-valid").default)}catch{}function Ox(n,i,s){const r={};for(const c in n)c==="values"&&typeof n.values=="object"||(Ny(c)||s===!0&&Er(c)||!i&&!Er(c)||n.draggable&&c.startsWith("onDrag"))&&(r[c]=n[c]);return r}const Cr=X.createContext({});function qx(n,i){if(Mr(n)){const{initial:s,animate:r}=n;return{initial:s===!1||wi(s)?s:void 0,animate:wi(r)?r:void 0}}return n.inherit!==!1?i:{}}function Rx(n){const{initial:i,animate:s}=qx(n,X.useContext(Cr));return X.useMemo(()=>({initial:i,animate:s}),[_g(i),_g(s)])}function _g(n){return Array.isArray(n)?n.join(" "):n}const yf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Vy(n,i,s){for(const r in i)!ut(i[r])&&!dy(r,s)&&(n[r]=i[r])}function Nx({transformTemplate:n},i){return X.useMemo(()=>{const s=yf();return pf(s,i,n),Object.assign({},s.vars,s.style)},[i])}function Vx(n,i){const s=n.style||{},r={};return Vy(r,s,n),Object.assign(r,Nx(n,i)),r}function wx(n,i){const s={},r=Vx(n,i);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=r,s}const wy=()=>({...yf(),attrs:{}});function jx(n,i,s,r){const c=X.useMemo(()=>{const m=wy();return my(m,i,py(r),n.transformTemplate,n.style),{...m.attrs,style:{...m.style}}},[i]);if(n.style){const m={};Vy(m,n.style,n),c.style={...m,...c.style}}return c}const Ux=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function bf(n){return typeof n!="string"||n.includes("-")?!1:!!(Ux.indexOf(n)>-1||/[A-Z]/u.test(n))}function _x(n,i,s,{latestValues:r},c,m=!1,f){const p=(f??bf(n)?jx:wx)(i,r,c,n),g=Ox(i,typeof n=="string",m),y=n!==X.Fragment?{...g,...p,ref:s}:{},{children:b}=i,S=X.useMemo(()=>ut(b)?b.get():b,[b]);return X.createElement(n,{...y,children:S})}function Bx({scrapeMotionValuesFromProps:n,createRenderState:i},s,r,c){return{latestValues:Lx(s,r,c,n),renderState:i()}}function Lx(n,i,s,r){const c={},m=r(n,{});for(const S in m)c[S]=mr(m[S]);let{initial:f,animate:h}=n;const p=Mr(n),g=ny(n);i&&g&&!p&&n.inherit!==!1&&(f===void 0&&(f=i.initial),h===void 0&&(h=i.animate));let y=s?s.initial===!1:!1;y=y||f===!1;const b=y?h:f;if(b&&typeof b!="boolean"&&!Dr(b)){const S=Array.isArray(b)?b:[b];for(let C=0;C<S.length;C++){const q=rf(n,S[C]);if(q){const{transitionEnd:_,transition:B,...L}=q;for(const k in L){let G=L[k];if(Array.isArray(G)){const J=y?G.length-1:0;G=G[J]}G!==null&&(c[k]=G)}for(const k in _)c[k]=_[k]}}}return c}const jy=n=>(i,s)=>{const r=X.useContext(Cr),c=X.useContext(Ar),m=()=>Bx(n,i,r,c);return s?m():Yc(m)},Hx=jy({scrapeMotionValuesFromProps:gf,createRenderState:yf}),Gx=jy({scrapeMotionValuesFromProps:gy,createRenderState:wy}),Qx=Symbol.for("motionComponentSymbol");function Yx(n,i,s){const r=X.useRef(s);X.useInsertionEffect(()=>{r.current=s});const c=X.useRef(null);return X.useCallback(m=>{var h;m&&((h=n.onMount)==null||h.call(n,m)),i&&(m?i.mount(m):i.unmount());const f=r.current;if(typeof f=="function")if(m){const p=f(m);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):f(m);else f&&(f.current=m)},[i])}const Uy=X.createContext({});function yo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Px(n,i,s,r,c,m){var G,J;const{visualElement:f}=X.useContext(Cr),h=X.useContext(qy),p=X.useContext(Ar),g=X.useContext(vf),y=g.reducedMotion,b=g.skipAnimations,S=X.useRef(null),C=X.useRef(!1);r=r||h.renderer,!S.current&&r&&(S.current=r(n,{visualState:i,parent:f,props:s,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:y,skipAnimations:b,isSVG:m}),C.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const q=S.current,_=X.useContext(Uy);q&&!q.projection&&c&&(q.type==="html"||q.type==="svg")&&Xx(S.current,s,c,_);const B=X.useRef(!1);X.useInsertionEffect(()=>{q&&B.current&&q.update(s,p)});const L=s[Pv],k=X.useRef(!!L&&!((G=window.MotionHandoffIsComplete)!=null&&G.call(window,L))&&((J=window.MotionHasOptimisedAnimation)==null?void 0:J.call(window,L)));return nv(()=>{C.current=!0,q&&(B.current=!0,window.MotionIsMounted=!0,q.updateFeatures(),q.scheduleRenderMicrotask(),k.current&&q.animationState&&q.animationState.animateChanges())}),X.useEffect(()=>{q&&(!k.current&&q.animationState&&q.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var P;(P=window.MotionHandoffMarkAsComplete)==null||P.call(window,L)}),k.current=!1),q.enteringChildren=void 0)}),q}function Xx(n,i,s,r){const{layoutId:c,layout:m,drag:f,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutCrossfade:y}=i;n.projection=new s(n.latestValues,i["data-framer-portal-id"]?void 0:_y(n.parent)),n.projection.setOptions({layoutId:c,layout:m,alwaysMeasureLayout:!!f||h&&yo(h),visualElement:n,animationType:typeof m=="string"?m:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:p,layoutRoot:g})}function _y(n){if(n)return n.options.allowProjection!==!1?n.projection:_y(n.parent)}function lc(n,{forwardMotionProps:i=!1,type:s}={},r,c){r&&Mx(r);const m=s?s==="svg":bf(n),f=m?Gx:Hx;function h(g,y){let b;const S={...X.useContext(vf),...g,layoutId:kx(g)},{isStatic:C}=S,q=Rx(g),_=f(g,C);if(!C&&av){Zx();const B=Jx(S);b=B.MeasureLayout,q.visualElement=Px(n,_,S,c,B.ProjectionNode,m)}return Q.jsxs(Cr.Provider,{value:q,children:[b&&q.visualElement?Q.jsx(b,{visualElement:q.visualElement,...S}):null,_x(n,g,Yx(_,q.visualElement,y),_,C,i,m)]})}h.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const p=X.forwardRef(h);return p[Qx]=n,p}function kx({layoutId:n}){const i=X.useContext(Qc).id;return i&&n!==void 0?i+"-"+n:n}function Zx(n,i){X.useContext(qy).strict}function Jx(n){const i=Ry(),{drag:s,layout:r}=i;if(!s&&!r)return{};const c={...s,...r};return{MeasureLayout:s!=null&&s.isEnabled(n)||r!=null&&r.isEnabled(n)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Kx(n,i){if(typeof Proxy>"u")return lc;const s=new Map,r=(m,f)=>lc(m,f,n,i),c=(m,f)=>r(m,f);return new Proxy(c,{get:(m,f)=>f==="create"?r:(s.has(f)||s.set(f,lc(f,void 0,n,i)),s.get(f))})}const Fx=(n,i)=>i.isSVG??bf(n)?new CE(i):new TE(i,{allowProjection:n!==X.Fragment});class Wx extends on{constructor(i){super(i),i.animationState||(i.animationState=NE(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Dr(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:s}=this.node.prevProps||{};i!==s&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let $x=0;class Ix extends on{constructor(){super(...arguments),this.id=$x++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:s}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===r)return;const c=this.node.animationState.setActive("exit",!i);s&&!i&&c.then(()=>{s(this.id)})}mount(){const{register:i,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const eA={animation:{Feature:Wx},exit:{Feature:Ix}};function Li(n){return{point:{x:n.pageX,y:n.pageY}}}const tA=n=>i=>ff(i)&&n(i,Li(i));function qi(n,i,s,r){return ji(n,i,tA(s),r)}const By=({current:n})=>n?n.ownerDocument.defaultView:null,Bg=(n,i)=>Math.abs(n-i);function aA(n,i){const s=Bg(n.x,i.x),r=Bg(n.y,i.y);return Math.sqrt(s**2+r**2)}const Lg=new Set(["auto","scroll"]);class Ly{constructor(i,s,{transformPagePoint:r,contextWindow:c=window,dragSnapToOrigin:m=!1,distanceThreshold:f=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=C=>{this.handleScroll(C.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=cc(this.lastMoveEventInfo,this.history),q=this.startEvent!==null,_=aA(C.offset,{x:0,y:0})>=this.distanceThreshold;if(!q&&!_)return;const{point:B}=C,{timestamp:L}=st;this.history.push({...B,timestamp:L});const{onStart:k,onMove:G}=this.handlers;q||(k&&k(this.lastMoveEvent,C),this.startEvent=this.lastMoveEvent),G&&G(this.lastMoveEvent,C)},this.handlePointerMove=(C,q)=>{this.lastMoveEvent=C,this.lastMoveEventInfo=uc(q,this.transformPagePoint),Re.update(this.updatePoint,!0)},this.handlePointerUp=(C,q)=>{this.end();const{onEnd:_,onSessionEnd:B,resumeAnimation:L}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&L&&L(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=cc(C.type==="pointercancel"?this.lastMoveEventInfo:uc(q,this.transformPagePoint),this.history);this.startEvent&&_&&_(C,k),B&&B(C,k)},!ff(i))return;this.dragSnapToOrigin=m,this.handlers=s,this.transformPagePoint=r,this.distanceThreshold=f,this.contextWindow=c||window;const p=Li(i),g=uc(p,this.transformPagePoint),{point:y}=g,{timestamp:b}=st;this.history=[{...y,timestamp:b}];const{onSessionStart:S}=s;S&&S(i,cc(g,this.history)),this.removeListeners=Ui(qi(this.contextWindow,"pointermove",this.handlePointerMove),qi(this.contextWindow,"pointerup",this.handlePointerUp),qi(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(i){let s=i.parentElement;for(;s;){const r=getComputedStyle(s);(Lg.has(r.overflowX)||Lg.has(r.overflowY))&&this.scrollPositions.set(s,{x:s.scrollLeft,y:s.scrollTop}),s=s.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const s=this.scrollPositions.get(i);if(!s)return;const r=i===window,c=r?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},m={x:c.x-s.x,y:c.y-s.y};m.x===0&&m.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(i,c),Re.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),nn(this.updatePoint)}}function uc(n,i){return i?{point:i(n.point)}:n}function Hg(n,i){return{x:n.x-i.x,y:n.y-i.y}}function cc({point:n},i){return{point:n,delta:Hg(n,Hy(i)),offset:Hg(n,nA(i)),velocity:oA(i,.1)}}function nA(n){return n[0]}function Hy(n){return n[n.length-1]}function oA(n,i){if(n.length<2)return{x:0,y:0};let s=n.length-1,r=null;const c=Hy(n);for(;s>=0&&(r=n[s],!(c.timestamp-r.timestamp>Kt(i)));)s--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&c.timestamp-r.timestamp>Kt(i)*2&&(r=n[1]);const m=Qt(c.timestamp-r.timestamp);if(m===0)return{x:0,y:0};const f={x:(c.x-r.x)/m,y:(c.y-r.y)/m};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function iA(n,{min:i,max:s},r){return i!==void 0&&n<i?n=r?_e(i,n,r.min):Math.max(n,i):s!==void 0&&n>s&&(n=r?_e(s,n,r.max):Math.min(n,s)),n}function Gg(n,i,s){return{min:i!==void 0?n.min+i:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function sA(n,{top:i,left:s,bottom:r,right:c}){return{x:Gg(n.x,s,c),y:Gg(n.y,i,r)}}function Qg(n,i){let s=i.min-n.min,r=i.max-n.max;return i.max-i.min<n.max-n.min&&([s,r]=[r,s]),{min:s,max:r}}function rA(n,i){return{x:Qg(n.x,i.x),y:Qg(n.y,i.y)}}function lA(n,i){let s=.5;const r=dt(n),c=dt(i);return c>r?s=Ri(i.min,i.max-r,n.min):r>c&&(s=Ri(n.min,n.max-c,i.min)),na(0,1,s)}function uA(n,i){const s={};return i.min!==void 0&&(s.min=i.min-n.min),i.max!==void 0&&(s.max=i.max-n.min),s}const _c=.35;function cA(n=_c){return n===!1?n=0:n===!0&&(n=_c),{x:Yg(n,"left","right"),y:Yg(n,"top","bottom")}}function Yg(n,i,s){return{min:Pg(n,i),max:Pg(n,s)}}function Pg(n,i){return typeof n=="number"?n:n[i]||0}const fA=new WeakMap;class dA{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=We(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:s=!1,distanceThreshold:r}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const m=b=>{s&&this.snapToCursor(Li(b).point),this.stopAnimation()},f=(b,S)=>{const{drag:C,dragPropagation:q,onDragStart:_}=this.getProps();if(C&&!q&&(this.openDragLock&&this.openDragLock(),this.openDragLock=H1(C),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ta(L=>{let k=this.getAxisMotionValue(L).get()||0;if(aa.test(k)){const{projection:G}=this.visualElement;if(G&&G.layout){const J=G.layout.layoutBox[L];J&&(k=dt(J)*(parseFloat(k)/100))}}this.originPoint[L]=k}),_&&Re.update(()=>_(b,S),!1,!0),zc(this.visualElement,"transform");const{animationState:B}=this.visualElement;B&&B.setActive("whileDrag",!0)},h=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:C,dragDirectionLock:q,onDirectionLock:_,onDrag:B}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:L}=S;if(q&&this.currentDirection===null){this.currentDirection=hA(L),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",S.point,L),this.updateAxis("y",S.point,L),this.visualElement.render(),B&&Re.update(()=>B(b,S),!1,!0)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new Ly(i,{onSessionStart:m,onStart:f,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:By(this.visualElement),element:this.visualElement.current})}stop(i,s){const r=i||this.latestPointerEvent,c=s||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!c||!r)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:h}=this.getProps();h&&Re.postRender(()=>h(r,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:s}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,s,r){const{drag:c}=this.getProps();if(!r||!sr(i,c,this.currentDirection))return;const m=this.getAxisMotionValue(i);let f=this.originPoint[i]+r[i];this.constraints&&this.constraints[i]&&(f=iA(f,this.constraints[i],this.elastic[i])),m.set(f)}resolveConstraints(){var m;const{dragConstraints:i,dragElastic:s}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(m=this.visualElement.projection)==null?void 0:m.layout,c=this.constraints;i&&yo(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&r?this.constraints=sA(r.layoutBox,i):this.constraints=!1,this.elastic=cA(s),c!==this.constraints&&!yo(i)&&r&&this.constraints&&!this.hasMutatedConstraints&&ta(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=uA(r.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:s}=this.getProps();if(!i||!yo(i))return!1;const r=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const m=pE(r,c.root,this.visualElement.getTransformPagePoint());let f=rA(c.layout.layoutBox,m);if(s){const h=s(dE(f));this.hasMutatedConstraints=!!h,h&&(f=ry(h))}return f}startAnimation(i){const{drag:s,dragMomentum:r,dragElastic:c,dragTransition:m,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=ta(y=>{if(!sr(y,s,this.currentDirection))return;let b=p&&p[y]||{};f&&(b={min:0,max:0});const S=c?200:1e6,C=c?40:1e7,q={type:"inertia",velocity:r?i[y]:0,bounceStiffness:S,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...m,...b};return this.startAxisValueAnimation(y,q)});return Promise.all(g).then(h)}startAxisValueAnimation(i,s){const r=this.getAxisMotionValue(i);return zc(this.visualElement,i),r.start(sf(i,r,0,s,this.visualElement,!1))}stopAnimation(){ta(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const s=`_drag${i.toUpperCase()}`,r=this.visualElement.getProps(),c=r[s];return c||this.visualElement.getValue(i,(r.initial?r.initial[i]:void 0)||0)}snapToCursor(i){ta(s=>{const{drag:r}=this.getProps();if(!sr(s,r,this.currentDirection))return;const{projection:c}=this.visualElement,m=this.getAxisMotionValue(s);if(c&&c.layout){const{min:f,max:h}=c.layout.layoutBox[s],p=m.get()||0;m.set(i[s]-_e(f,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:s}=this.getProps(),{projection:r}=this.visualElement;if(!yo(s)||!r||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};ta(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const p=h.get();c[f]=lA({min:p,max:p},this.constraints[f])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),ta(f=>{if(!sr(f,i,null))return;const h=this.getAxisMotionValue(f),{min:p,max:g}=this.constraints[f];h.set(_e(p,g,c[f]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;fA.set(this.visualElement,this);const i=this.visualElement.current,s=qi(i,"pointerdown",g=>{const{drag:y,dragListener:b=!0}=this.getProps(),S=g.target,C=S!==i&&k1(S);y&&b&&!C&&this.start(g)});let r;const c=()=>{const{dragConstraints:g}=this.getProps();yo(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),r||(r=mA(i,g.current,()=>this.scalePositionWithinConstraints())))},{projection:m}=this.visualElement,f=m.addEventListener("measure",c);m&&!m.layout&&(m.root&&m.root.updateScroll(),m.updateLayout()),Re.read(c);const h=ji(window,"resize",()=>this.scalePositionWithinConstraints()),p=m.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(ta(b=>{const S=this.getAxisMotionValue(b);S&&(this.originPoint[b]+=g[b].translate,S.set(S.get()+g[b].translate))}),this.visualElement.render())}));return()=>{h(),s(),f(),p&&p(),r&&r()}}getProps(){const i=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:r=!1,dragPropagation:c=!1,dragConstraints:m=!1,dragElastic:f=_c,dragMomentum:h=!0}=i;return{...i,drag:s,dragDirectionLock:r,dragPropagation:c,dragConstraints:m,dragElastic:f,dragMomentum:h}}}function Xg(n){let i=!0;return()=>{if(i){i=!1;return}n()}}function mA(n,i,s){const r=$p(n,Xg(s)),c=$p(i,Xg(s));return()=>{r(),c()}}function sr(n,i,s){return(i===!0||i===n)&&(s===null||s===n)}function hA(n,i=10){let s=null;return Math.abs(n.y)>i?s="y":Math.abs(n.x)>i&&(s="x"),s}class pA extends on{constructor(i){super(i),this.removeGroupControls=Yt,this.removeListeners=Yt,this.controls=new dA(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yt}update(){const{dragControls:i}=this.node.getProps(),{dragControls:s}=this.node.prevProps||{};i!==s&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const fc=n=>(i,s)=>{n&&Re.update(()=>n(i,s),!1,!0)};class gA extends on{constructor(){super(...arguments),this.removePointerDownListener=Yt}onPointerDown(i){this.session=new Ly(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:By(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:s,onPan:r,onPanEnd:c}=this.node.getProps();return{onSessionStart:fc(i),onStart:fc(s),onMove:fc(r),onEnd:(m,f)=>{delete this.session,c&&Re.postRender(()=>c(m,f))}}}mount(){this.removePointerDownListener=qi(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let dc=!1;class vA extends X.Component{componentDidMount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:r,layoutId:c}=this.props,{projection:m}=i;m&&(s.group&&s.group.add(m),r&&r.register&&c&&r.register(m),dc&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),hr.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:s,visualElement:r,drag:c,isPresent:m}=this.props,{projection:f}=r;return f&&(f.isPresent=m,i.layoutDependency!==s&&f.setOptions({...f.options,layoutDependency:s}),dc=!0,c||i.layoutDependency!==s||s===void 0||i.isPresent!==m?f.willUpdate():this.safeToRemove(),i.isPresent!==m&&(m?f.promote():f.relegate()||Re.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),cf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:r}=this.props,{projection:c}=i;dc=!0,c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),r&&r.deregister&&r.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Gy(n){const[i,s]=Oy(),r=X.useContext(Qc);return Q.jsx(vA,{...n,layoutGroup:r,switchLayoutGroup:X.useContext(Uy),isPresent:i,safeToRemove:s})}const yA={pan:{Feature:gA},drag:{Feature:pA,ProjectionNode:zy,MeasureLayout:Gy}};function kg(n,i,s){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,m=r[c];m&&Re.postRender(()=>m(i,Li(i)))}class bA extends on{mount(){const{current:i}=this.node;i&&(this.unmount=Q1(i,(s,r)=>(kg(this.node,r,"Start"),c=>kg(this.node,c,"End"))))}unmount(){}}class SA extends on{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ui(ji(this.node.current,"focus",()=>this.onFocus()),ji(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Zg(n,i,s){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),m=r[c];m&&Re.postRender(()=>m(i,Li(i)))}class TA extends on{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:s,propagate:r}=this.node.props;this.unmount=J1(i,(c,m)=>(Zg(this.node,m,"Start"),(f,{success:h})=>Zg(this.node,f,h?"End":"Cancel")),{useGlobalTarget:s,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Bc=new WeakMap,mc=new WeakMap,EA=n=>{const i=Bc.get(n.target);i&&i(n)},xA=n=>{n.forEach(EA)};function AA({root:n,...i}){const s=n||document;mc.has(s)||mc.set(s,{});const r=mc.get(s),c=JSON.stringify(i);return r[c]||(r[c]=new IntersectionObserver(xA,{root:n,...i})),r[c]}function DA(n,i,s){const r=AA(i);return Bc.set(n,s),r.observe(n),()=>{Bc.delete(n),r.unobserve(n)}}const MA={some:0,all:1};class CA extends on{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:s,margin:r,amount:c="some",once:m}=i,f={root:s?s.current:void 0,rootMargin:r,threshold:typeof c=="number"?c:MA[c]},h=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,m&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=g?y:b;S&&S(p)};return DA(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:s}=this.node;["amount","margin","root"].some(zA(i,s))&&this.startObserver()}unmount(){}}function zA({viewport:n={}},{viewport:i={}}={}){return s=>n[s]!==i[s]}const OA={inView:{Feature:CA},tap:{Feature:TA},focus:{Feature:SA},hover:{Feature:bA}},qA={layout:{ProjectionNode:zy,MeasureLayout:Gy}},RA={...eA,...OA,...yA,...qA},Lc=Kx(RA,Fx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),VA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,r)=>r?r.toUpperCase():s.toLowerCase()),Jg=n=>{const i=VA(n);return i.charAt(0).toUpperCase()+i.slice(1)},Qy=(...n)=>n.filter((i,s,r)=>!!i&&i.trim()!==""&&r.indexOf(i)===s).join(" ").trim(),wA=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=X.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:c="",children:m,iconNode:f,...h},p)=>X.createElement("svg",{ref:p,...jA,width:i,height:i,stroke:n,strokeWidth:r?Number(s)*24/Number(i):s,className:Qy("lucide",c),...!m&&!wA(h)&&{"aria-hidden":"true"},...h},[...f.map(([g,y])=>X.createElement(g,y)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=(n,i)=>{const s=X.forwardRef(({className:r,...c},m)=>X.createElement(UA,{ref:m,iconNode:i,className:Qy(`lucide-${NA(Jg(n))}`,`lucide-${n}`,r),...c}));return s.displayName=Jg(n),s};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],BA=Oo("chevron-right",_A);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],HA=Oo("menu",LA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],QA=Oo("music-2",GA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],PA=Oo("music",YA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],kA=Oo("search",XA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],JA=Oo("x",ZA);function Yy(n){var i,s,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(i=0;i<c;i++)n[i]&&(s=Yy(n[i]))&&(r&&(r+=" "),r+=s)}else for(s in n)n[s]&&(r&&(r+=" "),r+=s);return r}function KA(){for(var n,i,s=0,r="",c=arguments.length;s<c;s++)(n=arguments[s])&&(i=Yy(n))&&(r&&(r+=" "),r+=i);return r}const FA=(n,i)=>{const s=new Array(n.length+i.length);for(let r=0;r<n.length;r++)s[r]=n[r];for(let r=0;r<i.length;r++)s[n.length+r]=i[r];return s},WA=(n,i)=>({classGroupId:n,validator:i}),Py=(n=new Map,i=null,s)=>({nextPart:n,validators:i,classGroupId:s}),xr="-",Kg=[],$A="arbitrary..",IA=n=>{const i=tD(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return eD(f);const h=f.split(xr),p=h[0]===""&&h.length>1?1:0;return Xy(h,p,i)},getConflictingClassGroupIds:(f,h)=>{if(h){const p=r[f],g=s[f];return p?g?FA(g,p):p:g||Kg}return s[f]||Kg}}},Xy=(n,i,s)=>{if(n.length-i===0)return s.classGroupId;const c=n[i],m=s.nextPart.get(c);if(m){const g=Xy(n,i+1,m);if(g)return g}const f=s.validators;if(f===null)return;const h=i===0?n.join(xr):n.slice(i).join(xr),p=f.length;for(let g=0;g<p;g++){const y=f[g];if(y.validator(h))return y.classGroupId}},eD=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=n.slice(1,-1),s=i.indexOf(":"),r=i.slice(0,s);return r?$A+r:void 0})(),tD=n=>{const{theme:i,classGroups:s}=n;return aD(s,i)},aD=(n,i)=>{const s=Py();for(const r in n){const c=n[r];Sf(c,s,r,i)}return s},Sf=(n,i,s,r)=>{const c=n.length;for(let m=0;m<c;m++){const f=n[m];nD(f,i,s,r)}},nD=(n,i,s,r)=>{if(typeof n=="string"){oD(n,i,s);return}if(typeof n=="function"){iD(n,i,s,r);return}sD(n,i,s,r)},oD=(n,i,s)=>{const r=n===""?i:ky(i,n);r.classGroupId=s},iD=(n,i,s,r)=>{if(rD(n)){Sf(n(r),i,s,r);return}i.validators===null&&(i.validators=[]),i.validators.push(WA(s,n))},sD=(n,i,s,r)=>{const c=Object.entries(n),m=c.length;for(let f=0;f<m;f++){const[h,p]=c[f];Sf(p,ky(i,h),s,r)}},ky=(n,i)=>{let s=n;const r=i.split(xr),c=r.length;for(let m=0;m<c;m++){const f=r[m];let h=s.nextPart.get(f);h||(h=Py(),s.nextPart.set(f,h)),s=h}return s},rD=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,lD=n=>{if(n<1)return{get:()=>{},set:()=>{}};let i=0,s=Object.create(null),r=Object.create(null);const c=(m,f)=>{s[m]=f,i++,i>n&&(i=0,r=s,s=Object.create(null))};return{get(m){let f=s[m];if(f!==void 0)return f;if((f=r[m])!==void 0)return c(m,f),f},set(m,f){m in s?s[m]=f:c(m,f)}}},Hc="!",Fg=":",uD=[],Wg=(n,i,s,r,c)=>({modifiers:n,hasImportantModifier:i,baseClassName:s,maybePostfixModifierPosition:r,isExternal:c}),cD=n=>{const{prefix:i,experimentalParseClassName:s}=n;let r=c=>{const m=[];let f=0,h=0,p=0,g;const y=c.length;for(let _=0;_<y;_++){const B=c[_];if(f===0&&h===0){if(B===Fg){m.push(c.slice(p,_)),p=_+1;continue}if(B==="/"){g=_;continue}}B==="["?f++:B==="]"?f--:B==="("?h++:B===")"&&h--}const b=m.length===0?c:c.slice(p);let S=b,C=!1;b.endsWith(Hc)?(S=b.slice(0,-1),C=!0):b.startsWith(Hc)&&(S=b.slice(1),C=!0);const q=g&&g>p?g-p:void 0;return Wg(m,C,S,q)};if(i){const c=i+Fg,m=r;r=f=>f.startsWith(c)?m(f.slice(c.length)):Wg(uD,!1,f,void 0,!0)}if(s){const c=r;r=m=>s({className:m,parseClassName:c})}return r},fD=n=>{const i=new Map;return n.orderSensitiveModifiers.forEach((s,r)=>{i.set(s,1e6+r)}),s=>{const r=[];let c=[];for(let m=0;m<s.length;m++){const f=s[m],h=f[0]==="[",p=i.has(f);h||p?(c.length>0&&(c.sort(),r.push(...c),c=[]),r.push(f)):c.push(f)}return c.length>0&&(c.sort(),r.push(...c)),r}},dD=n=>({cache:lD(n.cacheSize),parseClassName:cD(n),sortModifiers:fD(n),...IA(n)}),mD=/\s+/,hD=(n,i)=>{const{parseClassName:s,getClassGroupId:r,getConflictingClassGroupIds:c,sortModifiers:m}=i,f=[],h=n.trim().split(mD);let p="";for(let g=h.length-1;g>=0;g-=1){const y=h[g],{isExternal:b,modifiers:S,hasImportantModifier:C,baseClassName:q,maybePostfixModifierPosition:_}=s(y);if(b){p=y+(p.length>0?" "+p:p);continue}let B=!!_,L=r(B?q.substring(0,_):q);if(!L){if(!B){p=y+(p.length>0?" "+p:p);continue}if(L=r(q),!L){p=y+(p.length>0?" "+p:p);continue}B=!1}const k=S.length===0?"":S.length===1?S[0]:m(S).join(":"),G=C?k+Hc:k,J=G+L;if(f.indexOf(J)>-1)continue;f.push(J);const P=c(L,B);for(let oe=0;oe<P.length;++oe){const F=P[oe];f.push(G+F)}p=y+(p.length>0?" "+p:p)}return p},pD=(...n)=>{let i=0,s,r,c="";for(;i<n.length;)(s=n[i++])&&(r=Zy(s))&&(c&&(c+=" "),c+=r);return c},Zy=n=>{if(typeof n=="string")return n;let i,s="";for(let r=0;r<n.length;r++)n[r]&&(i=Zy(n[r]))&&(s&&(s+=" "),s+=i);return s},gD=(n,...i)=>{let s,r,c,m;const f=p=>{const g=i.reduce((y,b)=>b(y),n());return s=dD(g),r=s.cache.get,c=s.cache.set,m=h,h(p)},h=p=>{const g=r(p);if(g)return g;const y=hD(p,s);return c(p,y),y};return m=f,(...p)=>m(pD(...p))},vD=[],Fe=n=>{const i=s=>s[n]||vD;return i.isThemeGetter=!0,i},Jy=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ky=/^\((?:(\w[\w-]*):)?(.+)\)$/i,yD=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,bD=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,SD=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,TD=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,ED=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xD=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$a=n=>yD.test(n),he=n=>!!n&&!Number.isNaN(Number(n)),Ia=n=>!!n&&Number.isInteger(Number(n)),hc=n=>n.endsWith("%")&&he(n.slice(0,-1)),xa=n=>bD.test(n),Fy=()=>!0,AD=n=>SD.test(n)&&!TD.test(n),Tf=()=>!1,DD=n=>ED.test(n),MD=n=>xD.test(n),CD=n=>!I(n)&&!te(n),zD=n=>sn(n,Iy,Tf),I=n=>Jy.test(n),Mn=n=>sn(n,e0,AD),$g=n=>sn(n,UD,he),OD=n=>sn(n,a0,Fy),qD=n=>sn(n,t0,Tf),Ig=n=>sn(n,Wy,Tf),RD=n=>sn(n,$y,MD),rr=n=>sn(n,n0,DD),te=n=>Ky.test(n),Di=n=>Rn(n,e0),ND=n=>Rn(n,t0),ev=n=>Rn(n,Wy),VD=n=>Rn(n,Iy),wD=n=>Rn(n,$y),lr=n=>Rn(n,n0,!0),jD=n=>Rn(n,a0,!0),sn=(n,i,s)=>{const r=Jy.exec(n);return r?r[1]?i(r[1]):s(r[2]):!1},Rn=(n,i,s=!1)=>{const r=Ky.exec(n);return r?r[1]?i(r[1]):s:!1},Wy=n=>n==="position"||n==="percentage",$y=n=>n==="image"||n==="url",Iy=n=>n==="length"||n==="size"||n==="bg-size",e0=n=>n==="length",UD=n=>n==="number",t0=n=>n==="family-name",a0=n=>n==="number"||n==="weight",n0=n=>n==="shadow",_D=()=>{const n=Fe("color"),i=Fe("font"),s=Fe("text"),r=Fe("font-weight"),c=Fe("tracking"),m=Fe("leading"),f=Fe("breakpoint"),h=Fe("container"),p=Fe("spacing"),g=Fe("radius"),y=Fe("shadow"),b=Fe("inset-shadow"),S=Fe("text-shadow"),C=Fe("drop-shadow"),q=Fe("blur"),_=Fe("perspective"),B=Fe("aspect"),L=Fe("ease"),k=Fe("animate"),G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],J=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],P=()=>[...J(),te,I],oe=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],U=()=>[te,I,p],ie=()=>[$a,"full","auto",...U()],Ae=()=>[Ia,"none","subgrid",te,I],je=()=>["auto",{span:["full",Ia,te,I]},Ia,te,I],Ne=()=>[Ia,"auto",te,I],mt=()=>["auto","min","max","fr",te,I],rt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ge=()=>["start","end","center","stretch","center-safe","end-safe"],R=()=>["auto",...U()],H=()=>[$a,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...U()],W=()=>[$a,"screen","full","dvw","lvw","svw","min","max","fit",...U()],de=()=>[$a,"screen","full","lh","dvh","lvh","svh","min","max","fit",...U()],Y=()=>[n,te,I],x=()=>[...J(),ev,Ig,{position:[te,I]}],j=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Z=()=>["auto","cover","contain",VD,zD,{size:[te,I]}],K=()=>[hc,Di,Mn],ne=()=>["","none","full",g,te,I],re=()=>["",he,Di,Mn],be=()=>["solid","dashed","dotted","double"],$e=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],me=()=>[he,hc,ev,Ig],Da=()=>["","none",q,te,I],oa=()=>["none",he,te,I],Ma=()=>["none",he,te,I],Nn=()=>[he,te,I],Rt=()=>[$a,"full",...U()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[xa],breakpoint:[xa],color:[Fy],container:[xa],"drop-shadow":[xa],ease:["in","out","in-out"],font:[CD],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[xa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[xa],shadow:[xa],spacing:["px",he],text:[xa],"text-shadow":[xa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",$a,I,te,B]}],container:["container"],columns:[{columns:[he,I,te,h]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:P()}],overflow:[{overflow:oe()}],"overflow-x":[{"overflow-x":oe()}],"overflow-y":[{"overflow-y":oe()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ie()}],"inset-x":[{"inset-x":ie()}],"inset-y":[{"inset-y":ie()}],start:[{"inset-s":ie(),start:ie()}],end:[{"inset-e":ie(),end:ie()}],"inset-bs":[{"inset-bs":ie()}],"inset-be":[{"inset-be":ie()}],top:[{top:ie()}],right:[{right:ie()}],bottom:[{bottom:ie()}],left:[{left:ie()}],visibility:["visible","invisible","collapse"],z:[{z:[Ia,"auto",te,I]}],basis:[{basis:[$a,"full","auto",h,...U()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[he,$a,"auto","initial","none",I]}],grow:[{grow:["",he,te,I]}],shrink:[{shrink:["",he,te,I]}],order:[{order:[Ia,"first","last","none",te,I]}],"grid-cols":[{"grid-cols":Ae()}],"col-start-end":[{col:je()}],"col-start":[{"col-start":Ne()}],"col-end":[{"col-end":Ne()}],"grid-rows":[{"grid-rows":Ae()}],"row-start-end":[{row:je()}],"row-start":[{"row-start":Ne()}],"row-end":[{"row-end":Ne()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":mt()}],"auto-rows":[{"auto-rows":mt()}],gap:[{gap:U()}],"gap-x":[{"gap-x":U()}],"gap-y":[{"gap-y":U()}],"justify-content":[{justify:[...rt(),"normal"]}],"justify-items":[{"justify-items":[...Ge(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ge()]}],"align-content":[{content:["normal",...rt()]}],"align-items":[{items:[...Ge(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ge(),{baseline:["","last"]}]}],"place-content":[{"place-content":rt()}],"place-items":[{"place-items":[...Ge(),"baseline"]}],"place-self":[{"place-self":["auto",...Ge()]}],p:[{p:U()}],px:[{px:U()}],py:[{py:U()}],ps:[{ps:U()}],pe:[{pe:U()}],pbs:[{pbs:U()}],pbe:[{pbe:U()}],pt:[{pt:U()}],pr:[{pr:U()}],pb:[{pb:U()}],pl:[{pl:U()}],m:[{m:R()}],mx:[{mx:R()}],my:[{my:R()}],ms:[{ms:R()}],me:[{me:R()}],mbs:[{mbs:R()}],mbe:[{mbe:R()}],mt:[{mt:R()}],mr:[{mr:R()}],mb:[{mb:R()}],ml:[{ml:R()}],"space-x":[{"space-x":U()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":U()}],"space-y-reverse":["space-y-reverse"],size:[{size:H()}],"inline-size":[{inline:["auto",...W()]}],"min-inline-size":[{"min-inline":["auto",...W()]}],"max-inline-size":[{"max-inline":["none",...W()]}],"block-size":[{block:["auto",...de()]}],"min-block-size":[{"min-block":["auto",...de()]}],"max-block-size":[{"max-block":["none",...de()]}],w:[{w:[h,"screen",...H()]}],"min-w":[{"min-w":[h,"screen","none",...H()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[f]},...H()]}],h:[{h:["screen","lh",...H()]}],"min-h":[{"min-h":["screen","lh","none",...H()]}],"max-h":[{"max-h":["screen","lh",...H()]}],"font-size":[{text:["base",s,Di,Mn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,jD,OD]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",hc,I]}],"font-family":[{font:[ND,qD,i]}],"font-features":[{"font-features":[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,te,I]}],"line-clamp":[{"line-clamp":[he,"none",te,$g]}],leading:[{leading:[m,...U()]}],"list-image":[{"list-image":["none",te,I]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",te,I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:Y()}],"text-color":[{text:Y()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...be(),"wavy"]}],"text-decoration-thickness":[{decoration:[he,"from-font","auto",te,Mn]}],"text-decoration-color":[{decoration:Y()}],"underline-offset":[{"underline-offset":[he,"auto",te,I]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te,I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te,I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:x()}],"bg-repeat":[{bg:j()}],"bg-size":[{bg:Z()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ia,te,I],radial:["",te,I],conic:[Ia,te,I]},wD,RD]}],"bg-color":[{bg:Y()}],"gradient-from-pos":[{from:K()}],"gradient-via-pos":[{via:K()}],"gradient-to-pos":[{to:K()}],"gradient-from":[{from:Y()}],"gradient-via":[{via:Y()}],"gradient-to":[{to:Y()}],rounded:[{rounded:ne()}],"rounded-s":[{"rounded-s":ne()}],"rounded-e":[{"rounded-e":ne()}],"rounded-t":[{"rounded-t":ne()}],"rounded-r":[{"rounded-r":ne()}],"rounded-b":[{"rounded-b":ne()}],"rounded-l":[{"rounded-l":ne()}],"rounded-ss":[{"rounded-ss":ne()}],"rounded-se":[{"rounded-se":ne()}],"rounded-ee":[{"rounded-ee":ne()}],"rounded-es":[{"rounded-es":ne()}],"rounded-tl":[{"rounded-tl":ne()}],"rounded-tr":[{"rounded-tr":ne()}],"rounded-br":[{"rounded-br":ne()}],"rounded-bl":[{"rounded-bl":ne()}],"border-w":[{border:re()}],"border-w-x":[{"border-x":re()}],"border-w-y":[{"border-y":re()}],"border-w-s":[{"border-s":re()}],"border-w-e":[{"border-e":re()}],"border-w-bs":[{"border-bs":re()}],"border-w-be":[{"border-be":re()}],"border-w-t":[{"border-t":re()}],"border-w-r":[{"border-r":re()}],"border-w-b":[{"border-b":re()}],"border-w-l":[{"border-l":re()}],"divide-x":[{"divide-x":re()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":re()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...be(),"hidden","none"]}],"divide-style":[{divide:[...be(),"hidden","none"]}],"border-color":[{border:Y()}],"border-color-x":[{"border-x":Y()}],"border-color-y":[{"border-y":Y()}],"border-color-s":[{"border-s":Y()}],"border-color-e":[{"border-e":Y()}],"border-color-bs":[{"border-bs":Y()}],"border-color-be":[{"border-be":Y()}],"border-color-t":[{"border-t":Y()}],"border-color-r":[{"border-r":Y()}],"border-color-b":[{"border-b":Y()}],"border-color-l":[{"border-l":Y()}],"divide-color":[{divide:Y()}],"outline-style":[{outline:[...be(),"none","hidden"]}],"outline-offset":[{"outline-offset":[he,te,I]}],"outline-w":[{outline:["",he,Di,Mn]}],"outline-color":[{outline:Y()}],shadow:[{shadow:["","none",y,lr,rr]}],"shadow-color":[{shadow:Y()}],"inset-shadow":[{"inset-shadow":["none",b,lr,rr]}],"inset-shadow-color":[{"inset-shadow":Y()}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:Y()}],"ring-offset-w":[{"ring-offset":[he,Mn]}],"ring-offset-color":[{"ring-offset":Y()}],"inset-ring-w":[{"inset-ring":re()}],"inset-ring-color":[{"inset-ring":Y()}],"text-shadow":[{"text-shadow":["none",S,lr,rr]}],"text-shadow-color":[{"text-shadow":Y()}],opacity:[{opacity:[he,te,I]}],"mix-blend":[{"mix-blend":[...$e(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":$e()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[he]}],"mask-image-linear-from-pos":[{"mask-linear-from":me()}],"mask-image-linear-to-pos":[{"mask-linear-to":me()}],"mask-image-linear-from-color":[{"mask-linear-from":Y()}],"mask-image-linear-to-color":[{"mask-linear-to":Y()}],"mask-image-t-from-pos":[{"mask-t-from":me()}],"mask-image-t-to-pos":[{"mask-t-to":me()}],"mask-image-t-from-color":[{"mask-t-from":Y()}],"mask-image-t-to-color":[{"mask-t-to":Y()}],"mask-image-r-from-pos":[{"mask-r-from":me()}],"mask-image-r-to-pos":[{"mask-r-to":me()}],"mask-image-r-from-color":[{"mask-r-from":Y()}],"mask-image-r-to-color":[{"mask-r-to":Y()}],"mask-image-b-from-pos":[{"mask-b-from":me()}],"mask-image-b-to-pos":[{"mask-b-to":me()}],"mask-image-b-from-color":[{"mask-b-from":Y()}],"mask-image-b-to-color":[{"mask-b-to":Y()}],"mask-image-l-from-pos":[{"mask-l-from":me()}],"mask-image-l-to-pos":[{"mask-l-to":me()}],"mask-image-l-from-color":[{"mask-l-from":Y()}],"mask-image-l-to-color":[{"mask-l-to":Y()}],"mask-image-x-from-pos":[{"mask-x-from":me()}],"mask-image-x-to-pos":[{"mask-x-to":me()}],"mask-image-x-from-color":[{"mask-x-from":Y()}],"mask-image-x-to-color":[{"mask-x-to":Y()}],"mask-image-y-from-pos":[{"mask-y-from":me()}],"mask-image-y-to-pos":[{"mask-y-to":me()}],"mask-image-y-from-color":[{"mask-y-from":Y()}],"mask-image-y-to-color":[{"mask-y-to":Y()}],"mask-image-radial":[{"mask-radial":[te,I]}],"mask-image-radial-from-pos":[{"mask-radial-from":me()}],"mask-image-radial-to-pos":[{"mask-radial-to":me()}],"mask-image-radial-from-color":[{"mask-radial-from":Y()}],"mask-image-radial-to-color":[{"mask-radial-to":Y()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":J()}],"mask-image-conic-pos":[{"mask-conic":[he]}],"mask-image-conic-from-pos":[{"mask-conic-from":me()}],"mask-image-conic-to-pos":[{"mask-conic-to":me()}],"mask-image-conic-from-color":[{"mask-conic-from":Y()}],"mask-image-conic-to-color":[{"mask-conic-to":Y()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:x()}],"mask-repeat":[{mask:j()}],"mask-size":[{mask:Z()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",te,I]}],filter:[{filter:["","none",te,I]}],blur:[{blur:Da()}],brightness:[{brightness:[he,te,I]}],contrast:[{contrast:[he,te,I]}],"drop-shadow":[{"drop-shadow":["","none",C,lr,rr]}],"drop-shadow-color":[{"drop-shadow":Y()}],grayscale:[{grayscale:["",he,te,I]}],"hue-rotate":[{"hue-rotate":[he,te,I]}],invert:[{invert:["",he,te,I]}],saturate:[{saturate:[he,te,I]}],sepia:[{sepia:["",he,te,I]}],"backdrop-filter":[{"backdrop-filter":["","none",te,I]}],"backdrop-blur":[{"backdrop-blur":Da()}],"backdrop-brightness":[{"backdrop-brightness":[he,te,I]}],"backdrop-contrast":[{"backdrop-contrast":[he,te,I]}],"backdrop-grayscale":[{"backdrop-grayscale":["",he,te,I]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[he,te,I]}],"backdrop-invert":[{"backdrop-invert":["",he,te,I]}],"backdrop-opacity":[{"backdrop-opacity":[he,te,I]}],"backdrop-saturate":[{"backdrop-saturate":[he,te,I]}],"backdrop-sepia":[{"backdrop-sepia":["",he,te,I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":U()}],"border-spacing-x":[{"border-spacing-x":U()}],"border-spacing-y":[{"border-spacing-y":U()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",te,I]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[he,"initial",te,I]}],ease:[{ease:["linear","initial",L,te,I]}],delay:[{delay:[he,te,I]}],animate:[{animate:["none",k,te,I]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[_,te,I]}],"perspective-origin":[{"perspective-origin":P()}],rotate:[{rotate:oa()}],"rotate-x":[{"rotate-x":oa()}],"rotate-y":[{"rotate-y":oa()}],"rotate-z":[{"rotate-z":oa()}],scale:[{scale:Ma()}],"scale-x":[{"scale-x":Ma()}],"scale-y":[{"scale-y":Ma()}],"scale-z":[{"scale-z":Ma()}],"scale-3d":["scale-3d"],skew:[{skew:Nn()}],"skew-x":[{"skew-x":Nn()}],"skew-y":[{"skew-y":Nn()}],transform:[{transform:[te,I,"","none","gpu","cpu"]}],"transform-origin":[{origin:P()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Rt()}],"translate-x":[{"translate-x":Rt()}],"translate-y":[{"translate-y":Rt()}],"translate-z":[{"translate-z":Rt()}],"translate-none":["translate-none"],accent:[{accent:Y()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:Y()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te,I]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mbs":[{"scroll-mbs":U()}],"scroll-mbe":[{"scroll-mbe":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pbs":[{"scroll-pbs":U()}],"scroll-pbe":[{"scroll-pbe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te,I]}],fill:[{fill:["none",...Y()]}],"stroke-w":[{stroke:[he,Di,Mn,$g]}],stroke:[{stroke:["none",...Y()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},BD=gD(_D);function LD(...n){return BD(KA(n))}const HD={pastor:{name:"Pastor Fredson Fagundes"}},GD=[{month:1,name:"Fevereiro",theme:"CHAMADOS AO ARREPENDIMENTO E COMUNHÃO",verse:"(Is 55:6) Buscai o SENHOR enquanto se pode achar, invocai-o enquanto está perto.",events:["01/02 (domingo): Reunião do Conselho com SAF e UPH","07/02 (sábado): Pregação no ponto – Nova Esperança","13–17/02: Retiro espiritual (Carnaval)","17/02 (terça): Reunião do Conselho","22/02 (domingo): Santa Ceia","25/02 (quarta): Santa Ceia no lar"]},{month:2,name:"Março",theme:"BUSCANDO A SANTIDADE",verse:"(1Pe 1.16) Porque escrito está: Sede santos, porque eu sou santo.",events:["Terças: Curso de formação após a Reunião de Oração","Quintas: Reunião de Doutrina: Pilares da Fé Reformada","Domingos: EBD, 10h - Carta aos Coríntios; Culto, 19h30 - Buscando a Santidade","07/03 (Sábado): Caminhada da Mulher (saída às 17h da porta da igreja, parada na casa de Meire para lanche e palestra)","14/03 (Sábado): Projeto Mão na Massa – Ourolândia","21/03 (Sábado): Nova Esperança","15/03 (Domingo): Culto e Santa Ceia - 19h30","23/03 (Segunda-feira): Reunião do Conselho e Reunião de Liderança - Casa do Pb. Elique Filho","25/03 (Quarta): Santa Ceia no Lar - Casa da Irmã Dalva","30/03 (Segunda-feira): 18h–20h Churrasco, Proza e Viola"]},{month:3,name:"Abril",theme:"A cruz e a redenção em Cristo",verse:"(Is 53:5) Mas ele foi traspassado pelas nossas transgressões e moído pelas nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",events:["11/04 (sábado): Pregação no ponto – Nova Esperança","Curso de Formação - Terças, após reunião de oração","05/04 (domingo): Café da ressureição e Culto da Páscoa com Santa Ceia","15/04 (quarta): Santa Ceia no lar","25/04 (sábado): Aniversário da UPH – Pregador: Pr. Nivaldo Cortez","17/04 (sexta): Culto evangelístico – Casas Populares","21/04 (terça): Reunião do Conselho"]},{month:4,name:"Maio",theme:"Edificando a família sobre a Rocha",verse:"(Mt 7.24) Quem ouve minhas palavras e as pratica é tão sábio como a pessoa que constrói sua casa sobre uma rocha firme.",events:["03/05 (Dom): Uma família firmada na Rocha - Miss. Franco (IPB Piritiba)","05/05 (Ter): Oração nos lares (Família de Arnóbio e Lene) - Resp: UPH","10/05 (Dom): Uma família ajustada pelos princípios de Deus - Pb. Robério Evangelista","12/05 (Ter): Oração nos lares (Família de Geanhy e Irandir) - Resp: SAF","16/05 (Sáb): Culto Evangelístico (Nova Esperança) - Liturgia: SAF | Palavra: UPH","17/05 (Dom): Uma família que vence as tempestades - Miss. Abérico Macêdo (IPB Serrolândia)","19/05 (Ter): Oração nos lares (Família de Débora) - Resp: SAF","24/05 (Dom): Uma família que vence as tempestades - Pb. Gilson Rios (IPB Mairi)","26/05 (Ter): Oração nos lares (Fam. Ozuel, Juce, Uriel, Ciele, Luciano e Saulo)","31/05 (Dom): DIA DA FAMÍLIA IPVP - 10h EBD Especial (Faz. Pb. Elique Filho) | 19h Culto - Pr. Pedro (IPB Pintadas)"]},{month:5,name:"Junho",theme:"A família no centro do propósito de Deus",verse:"(Js 24:15) Eu e a minha casa serviremos ao SENHOR.",events:["06/06 (sábado): Pregação no ponto – Nova Esperança","14/06 (domingo): Santa Ceia","15/06 (segunda): Reunião de Liderança (Casa de Adevaldo)","17/06 (quarta): Santa Ceia no lar","20/06 (sábado): Jantar de Casais – Sítio de Bernadet","16/06 (terça): Reunião do Conselho"]},{month:6,name:"Julho",theme:"Confiança no Senhor",verse:"(Sl 27:1) O SENHOR é a minha luz e a minha salvação; de quem terei medo?",events:["04/07 (sábado): Pregação no ponto – Nova Esperança","12/07 (domingo): Santa Ceia","15/07 (quarta): Santa Ceia no lar","17/07 (sexta): Culto evangelístico","21/07 (terça): Reunião do Conselho"]},{month:7,name:"Agosto",theme:"Obedecendo ao Senhor na missão",verse:"(Jn 3:1) E veio a palavra do Senhor segunda vez a Jonas, dizendo: Levanta-te, e vai à grande cidade de Nínive.",events:["01 e 02/08 (domingo): Viagem - IPVP","08/08 (sábado): Pregação no ponto – Nova Esperança","09/08 (domingo): Santa Ceia","12/08 (quarta): Santa Ceia no lar","18/08 (terça): Reunião do Conselho","30/08 (domingo): Dia Missionário – Pastor convidado","28/08 (sexta): Culto evangelístico – Praça do cemitério"]},{month:8,name:"Setembro",theme:"Ele vem",verse:"(Ap 22:12) E eis que venho sem demora, e comigo está o galardão.",events:["05/09 (sábado): Pregação no ponto – Nova Esperança","13/09 (domingo): Santa Ceia","14/09 (segunda): Reunião de Liderança (Casa de Antonio Rios)","16/09 (quarta): Santa Ceia no lar","25/09 (sexta): Culto evangelístico – Alto da Nação","15/09 (terça): Reunião do Conselho","Dia da Bíblia (domingo)"]},{month:9,name:"Outubro",theme:"Reformando sempre",verse:"(Ef 2:8) Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus;",events:["03/10 (sábado): Pregação no ponto – Nova Esperança","04/10 (domingo): Reunião do Conselho com SAF e UPH","11/10 (domingo): Santa Ceia","Aniversário da SAF – Pastor convidado","14/10 (quarta): Santa Ceia no lar","31/10 (sexta): DIA DO EVANGÉLICO – PRAÇA PRINCIPAL"]},{month:10,name:"Novembro",theme:"Gratidão e fidelidade ao Senhor",verse:"(1Sm 7:12) Até aqui nos ajudou o SENHOR.",events:["02/11: Café teológico com o tema: 'E depois da morte...?'","07/11 (sábado): Pregação no ponto – Nova Esperança","12 e 13/11: Cultos evangelísticos na Praça da Nação e na Praça da Preguiça","14–15/11: 31 anos da IPVP – Pastor convidado e Santa Ceia","17/11 (terça): Reunião do Conselho","18/11 (quarta): Santa Ceia no lar","21–30/11: Ausência pastoral (curso em São Paulo)"]},{month:11,name:"Dezembro",theme:"O Cristo encarnado e a esperança eterna",verse:"(Jo 1:14) E o Verbo se fez carne e habitou entre nós.",events:["06/12 (domingo): Santa Ceia","07/12 (segunda): Reunião de Liderança (Casa pastoral)","09/12 (quarta): Santa Ceia no lar","11/12 (sexta): Culto evangelístico","15/12 (terça): Reunião do Conselho","20/12 (domingo) Manhã - Assembleia Geral Ordinária","Cultos de Natal e Encerramento do Ano"]}],tv=[{title:"A Bênção (Gabriel Guedes)",lyrics:`Que o Senhor te abençoe
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
Incomparáveis são Tuas promessas pra mim, oh`},{title:"Adorador Por Excelência (Nani Azevedo)",lyrics:`Quero dar o melhor de mim
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
Me prostro pra Te adorar, Te alegrar`}],QD=n=>["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][n],o0=({size:n=24,className:i=""})=>Q.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:i,children:Q.jsx("path",{d:"M12 2v20M8 8h8"})}),YD=({onAdminClick:n,isAdmin:i,onLogout:s})=>{const[r,c]=X.useState(!1),[m,f]=X.useState(!1);X.useEffect(()=>{const p=()=>c(window.scrollY>50);return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const h=[{name:"INÍCIO",href:"#home"},{name:"Músicas",href:"#lyrics-search"},{name:"Agenda",href:"#monthly-agenda"},{name:"Liderança",href:"#leadership"},{name:"Dízimos",href:"#giving"}];return Q.jsxs("nav",{className:LD("fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",r?"bg-slate-900 shadow-lg py-3":"bg-transparent"),children:[Q.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[Q.jsxs("div",{className:"flex items-center gap-3",children:[Q.jsx("div",{className:"w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900 shadow-lg",children:Q.jsx(o0,{size:24})}),Q.jsxs("div",{className:"flex flex-col text-white",children:[Q.jsx("span",{className:"font-serif text-lg leading-none",children:"Igreja Presbiteriana"}),Q.jsx("span",{className:"text-[9px] uppercase tracking-[0.2em] font-bold text-amber-500",children:"Várzea do Poço"})]})]}),Q.jsxs("div",{className:"hidden xl:flex items-center gap-6",children:[h.map(p=>Q.jsx("a",{href:p.href,className:"text-xs font-bold uppercase text-white/90 hover:text-amber-500",children:p.name},p.name)),i?Q.jsx("button",{onClick:s,className:"px-4 py-2 bg-red-600 text-white rounded-full text-[10px] font-bold",children:"Sair"}):Q.jsx("button",{onClick:n,className:"text-xs font-bold uppercase text-white/40 hover:text-white",children:"Admin"})]}),Q.jsx("button",{className:"xl:hidden text-white",onClick:()=>f(!m),children:m?Q.jsx(JA,{size:24}):Q.jsx(HA,{size:24})})]}),Q.jsx(Ax,{children:m&&Q.jsx(Lc.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 xl:hidden",children:h.map(p=>Q.jsx("a",{href:p.href,onClick:()=>f(!1),className:"text-lg font-serif text-slate-900 border-b pb-2",children:p.name},p.name))})})]})},PD=()=>{const[n,i]=X.useState(""),[s,r]=X.useState(null),c=Array.isArray(tv)?tv:[],m=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),f=n.length>2?c.filter(h=>`${h.title} ${h.lyrics}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(m)):[];return Q.jsx("section",{id:"lyrics-search",className:"py-16 px-6 bg-white border-y-8 border-slate-900",children:Q.jsxs("div",{className:"max-w-4xl mx-auto",children:[Q.jsxs("div",{className:"text-center mb-10",children:[Q.jsx(QA,{size:50,className:"mx-auto mb-4 text-slate-900"}),Q.jsx("h2",{className:"text-4xl md:text-5xl font-black uppercase text-slate-900",children:"Louvores IPVP"}),Q.jsx("p",{className:"text-lg font-bold bg-amber-500 text-slate-900 inline-block px-4 py-1 mt-2 tracking-tighter",children:"ALTO CONTRASTE"})]}),s?Q.jsx("div",{className:"fixed inset-0 z-[200] bg-white p-6 md:p-12 overflow-y-auto",children:Q.jsxs("div",{className:"max-w-4xl mx-auto",children:[Q.jsxs("div",{className:"flex justify-between items-center mb-8 border-b-8 border-slate-900 pb-4",children:[Q.jsx("h3",{className:"text-3xl md:text-6xl font-black text-slate-900 uppercase",children:s.title}),Q.jsx("button",{onClick:()=>{r(null),i("")},className:"p-4 bg-red-600 text-white border-4 border-slate-900 font-black text-xl uppercase",children:"Fechar"})]}),Q.jsx("pre",{className:"whitespace-pre-wrap font-sans text-2xl md:text-5xl leading-[1.3] text-slate-950 font-black tracking-tight",children:s.lyrics}),Q.jsx("button",{onClick:()=>{r(null),i("")},className:"mt-12 w-full py-6 bg-slate-900 text-white font-black text-2xl border-4 border-slate-900 uppercase",children:"Voltar"})]})}):Q.jsxs("div",{className:"space-y-6",children:[Q.jsxs("div",{className:"relative",children:[Q.jsx(kA,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-400",size:28}),Q.jsx("input",{type:"text",placeholder:"BUSCAR POR TÍTULO OU LETRA...",value:n,onChange:h=>i(h.target.value),className:"w-full pl-14 pr-6 py-6 border-4 border-slate-900 outline-none focus:ring-8 focus:ring-amber-500/20 font-black text-xl uppercase"})]}),f.length>0&&Q.jsx("div",{className:"grid gap-2",children:f.map((h,p)=>Q.jsxs("button",{onClick:()=>r(h),className:"w-full text-left px-6 py-4 border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all font-black text-lg flex justify-between items-center group",children:[h.title," ",Q.jsx(BA,{})]},p))})]})]})})},XD=()=>Q.jsxs("section",{id:"home",className:"relative min-h-[85vh] w-full overflow-hidden flex items-center justify-center bg-slate-900",children:[Q.jsxs("div",{className:"absolute inset-0 z-0",children:[Q.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-white"}),Q.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-30",style:{backgroundImage:"url('/fundo-igreja.jpg')"}})]}),Q.jsxs("div",{className:"relative z-10 text-center px-6 max-w-4xl py-12",children:[Q.jsx(Lc.span,{initial:{opacity:0},animate:{opacity:1},className:"text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block",children:"Bem-vindo à"}),Q.jsxs(Lc.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-5xl md:text-8xl text-white font-serif mb-6 leading-[0.9]",children:["Igreja Presbiteriana ",Q.jsx("br",{}),Q.jsx("span",{className:"italic text-amber-500/90",children:"de Várzea do Poço"})]}),Q.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mt-10",children:[Q.jsxs("a",{href:"#lyrics-search",className:"w-full sm:w-auto px-10 py-5 bg-amber-600 text-white rounded-full font-black text-sm uppercase shadow-lg flex items-center justify-center gap-2",children:[Q.jsx(PA,{size:20})," LOUVORES"]}),Q.jsx("a",{href:"#monthly-agenda",className:"w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-sm uppercase",children:"AGENDA"})]})]})]});function kD(){const[n,i]=X.useState(!1),[s,r]=X.useState(!1),[c,m]=X.useState(GD||[]),f=new Date().getMonth(),h=c.find(p=>p.month===f);return Q.jsxs("div",{className:"min-h-screen bg-white font-sans",children:[Q.jsx(YD,{onAdminClick:()=>r(!0),isAdmin:n,onLogout:()=>i(!1)}),s&&Q.jsx("div",{className:"fixed inset-0 z-[300] flex items-center justify-center bg-slate-950/90 p-6",children:Q.jsxs("div",{className:"bg-white p-10 rounded-[2.5rem] border-4 border-amber-500 w-full max-w-md text-center",children:[Q.jsx("h3",{className:"text-2xl font-black mb-6",children:"ADMINISTRAÇÃO"}),Q.jsx("input",{type:"password",placeholder:"SENHA",className:"w-full p-4 border-4 border-slate-900 text-center font-black text-xl mb-4",onKeyDown:p=>{p.key==="Enter"&&p.currentTarget.value==="2933"&&(i(!0),r(!1))}}),Q.jsx("button",{onClick:()=>r(!1),className:"text-slate-400 font-bold uppercase text-xs",children:"Sair"})]})}),Q.jsxs("main",{children:[Q.jsx(XD,{}),Q.jsx(PD,{}),Q.jsx("section",{id:"monthly-agenda",className:"py-16 px-6 bg-slate-50 text-center",children:Q.jsxs("div",{className:"max-w-5xl mx-auto",children:[Q.jsxs("h2",{className:"text-4xl font-serif font-bold text-slate-900 mb-10",children:["Programação de ",QD(f)]}),Q.jsxs("div",{className:"bg-white p-8 rounded-[3rem] border-4 border-amber-500 shadow-2xl mb-12",children:[Q.jsx("img",{src:"/programacao-maio.jpg",className:"w-full rounded-2xl shadow-lg mb-8",onError:p=>p.currentTarget.style.display="none"}),Q.jsx("div",{className:"grid md:grid-cols-2 gap-4 text-left",children:h==null?void 0:h.events.map((p,g)=>Q.jsx("div",{className:"p-4 bg-slate-50 rounded-xl border-l-4 border-amber-500 font-bold text-slate-800",children:p},g))})]})]})}),Q.jsxs("section",{id:"leadership",className:"py-16 px-6 bg-slate-900 text-white text-center",children:[Q.jsx("h2",{className:"text-3xl font-serif mb-12 text-amber-500 uppercase tracking-widest",children:"Nossa Liderança"}),Q.jsxs("p",{className:"text-2xl font-bold",children:[HD.pastor.name," - Pastor Titular"]})]}),Q.jsxs("section",{id:"giving",className:"py-16 px-6 bg-amber-500 text-slate-900 text-center",children:[Q.jsx("h2",{className:"text-4xl font-black uppercase mb-4",children:"Dízimos e Ofertas"}),Q.jsx("p",{className:"text-2xl font-mono font-black",children:"PIX: 03.507.028/0001-08"})]})]}),Q.jsxs("footer",{className:"bg-slate-950 text-white py-12 text-center",children:[Q.jsx(o0,{size:40,className:"mx-auto mb-4 text-amber-500"}),Q.jsx("p",{className:"font-serif font-bold text-xl uppercase",children:"IP Várzea do Poço"})]})]})}_S.createRoot(document.getElementById("root")).render(Q.jsx(X.StrictMode,{children:Q.jsx(kD,{})}));
