(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(c){if(c.ep)return;c.ep=!0;const m=s(c);fetch(c.href,m)}})();var ku={exports:{}},Ei={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function OS(){if(Ep)return Ei;Ep=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(r,c,m){var f=null;if(m!==void 0&&(f=""+m),c.key!==void 0&&(f=""+c.key),"key"in c){m={};for(var h in c)h!=="key"&&(m[h]=c[h])}else m=c;return c=m.ref,{$$typeof:n,type:r,key:f,ref:c!==void 0?c:null,props:m}}return Ei.Fragment=i,Ei.jsx=s,Ei.jsxs=s,Ei}var xp;function RS(){return xp||(xp=1,ku.exports=OS()),ku.exports}var G=RS(),Xu={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function qS(){if(Ap)return ue;Ap=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function C(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,B={};function L(x,j,Z){this.props=x,this.context=j,this.refs=B,this.updater=Z||R}L.prototype.isReactComponent={},L.prototype.setState=function(x,j){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,j,"setState")},L.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function X(){}X.prototype=L.prototype;function Q(x,j,Z){this.props=x,this.context=j,this.refs=B,this.updater=Z||R}var J=Q.prototype=new X;J.constructor=Q,U(J,L.prototype),J.isPureReactComponent=!0;var P=Array.isArray;function oe(){}var F={H:null,A:null,T:null,S:null},_=Object.prototype.hasOwnProperty;function ie(x,j,Z){var K=Z.ref;return{$$typeof:n,type:x,key:j,ref:K!==void 0?K:null,props:Z}}function Ae(x,j){return ie(x.type,j,x.props)}function je(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function Ne(x){var j={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Z){return j[Z]})}var mt=/\/+/g;function rt(x,j){return typeof x=="object"&&x!==null&&x.key!=null?Ne(""+x.key):j.toString(36)}function Ge(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(oe,oe):(x.status="pending",x.then(function(j){x.status==="pending"&&(x.status="fulfilled",x.value=j)},function(j){x.status==="pending"&&(x.status="rejected",x.reason=j)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function q(x,j,Z,K,ne){var re=typeof x;(re==="undefined"||re==="boolean")&&(x=null);var be=!1;if(x===null)be=!0;else switch(re){case"bigint":case"string":case"number":be=!0;break;case"object":switch(x.$$typeof){case n:case i:be=!0;break;case y:return be=x._init,q(be(x._payload),j,Z,K,ne)}}if(be)return ne=ne(x),be=K===""?"."+rt(x,0):K,P(ne)?(Z="",be!=null&&(Z=be.replace(mt,"$&/")+"/"),q(ne,j,Z,"",function(Ma){return Ma})):ne!=null&&(je(ne)&&(ne=Ae(ne,Z+(ne.key==null||x&&x.key===ne.key?"":(""+ne.key).replace(mt,"$&/")+"/")+be)),j.push(ne)),1;be=0;var $e=K===""?".":K+":";if(P(x))for(var me=0;me<x.length;me++)K=x[me],re=$e+rt(K,me),be+=q(K,j,Z,re,ne);else if(me=C(x),typeof me=="function")for(x=me.call(x),me=0;!(K=x.next()).done;)K=K.value,re=$e+rt(K,me++),be+=q(K,j,Z,re,ne);else if(re==="object"){if(typeof x.then=="function")return q(Ge(x),j,Z,K,ne);throw j=String(x),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return be}function H(x,j,Z){if(x==null)return x;var K=[],ne=0;return q(x,K,"","",function(re){return j.call(Z,re,ne++)}),K}function W(x){if(x._status===-1){var j=x._result;j=j(),j.then(function(Z){(x._status===0||x._status===-1)&&(x._status=1,x._result=Z)},function(Z){(x._status===0||x._status===-1)&&(x._status=2,x._result=Z)}),x._status===-1&&(x._status=0,x._result=j)}if(x._status===1)return x._result.default;throw x._result}var de=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},Y={map:H,forEach:function(x,j,Z){H(x,function(){j.apply(this,arguments)},Z)},count:function(x){var j=0;return H(x,function(){j++}),j},toArray:function(x){return H(x,function(j){return j})||[]},only:function(x){if(!je(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ue.Activity=b,ue.Children=Y,ue.Component=L,ue.Fragment=s,ue.Profiler=c,ue.PureComponent=Q,ue.StrictMode=r,ue.Suspense=p,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ue.__COMPILER_RUNTIME={__proto__:null,c:function(x){return F.H.useMemoCache(x)}},ue.cache=function(x){return function(){return x.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(x,j,Z){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var K=U({},x.props),ne=x.key;if(j!=null)for(re in j.key!==void 0&&(ne=""+j.key),j)!_.call(j,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&j.ref===void 0||(K[re]=j[re]);var re=arguments.length-2;if(re===1)K.children=Z;else if(1<re){for(var be=Array(re),$e=0;$e<re;$e++)be[$e]=arguments[$e+2];K.children=be}return ie(x.type,ne,K)},ue.createContext=function(x){return x={$$typeof:f,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:m,_context:x},x},ue.createElement=function(x,j,Z){var K,ne={},re=null;if(j!=null)for(K in j.key!==void 0&&(re=""+j.key),j)_.call(j,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ne[K]=j[K]);var be=arguments.length-2;if(be===1)ne.children=Z;else if(1<be){for(var $e=Array(be),me=0;me<be;me++)$e[me]=arguments[me+2];ne.children=$e}if(x&&x.defaultProps)for(K in be=x.defaultProps,be)ne[K]===void 0&&(ne[K]=be[K]);return ie(x,re,ne)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(x){return{$$typeof:h,render:x}},ue.isValidElement=je,ue.lazy=function(x){return{$$typeof:y,_payload:{_status:-1,_result:x},_init:W}},ue.memo=function(x,j){return{$$typeof:g,type:x,compare:j===void 0?null:j}},ue.startTransition=function(x){var j=F.T,Z={};F.T=Z;try{var K=x(),ne=F.S;ne!==null&&ne(Z,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(oe,de)}catch(re){de(re)}finally{j!==null&&Z.types!==null&&(j.types=Z.types),F.T=j}},ue.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ue.use=function(x){return F.H.use(x)},ue.useActionState=function(x,j,Z){return F.H.useActionState(x,j,Z)},ue.useCallback=function(x,j){return F.H.useCallback(x,j)},ue.useContext=function(x){return F.H.useContext(x)},ue.useDebugValue=function(){},ue.useDeferredValue=function(x,j){return F.H.useDeferredValue(x,j)},ue.useEffect=function(x,j){return F.H.useEffect(x,j)},ue.useEffectEvent=function(x){return F.H.useEffectEvent(x)},ue.useId=function(){return F.H.useId()},ue.useImperativeHandle=function(x,j,Z){return F.H.useImperativeHandle(x,j,Z)},ue.useInsertionEffect=function(x,j){return F.H.useInsertionEffect(x,j)},ue.useLayoutEffect=function(x,j){return F.H.useLayoutEffect(x,j)},ue.useMemo=function(x,j){return F.H.useMemo(x,j)},ue.useOptimistic=function(x,j){return F.H.useOptimistic(x,j)},ue.useReducer=function(x,j,Z){return F.H.useReducer(x,j,Z)},ue.useRef=function(x){return F.H.useRef(x)},ue.useState=function(x){return F.H.useState(x)},ue.useSyncExternalStore=function(x,j,Z){return F.H.useSyncExternalStore(x,j,Z)},ue.useTransition=function(){return F.H.useTransition()},ue.version="19.2.4",ue}var Dp;function Gc(){return Dp||(Dp=1,Xu.exports=qS()),Xu.exports}var k=Gc(),Zu={exports:{}},xi={},Ju={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function NS(){return Mp||(Mp=1,(function(n){function i(q,H){var W=q.length;q.push(H);e:for(;0<W;){var de=W-1>>>1,Y=q[de];if(0<c(Y,H))q[de]=H,q[W]=Y,W=de;else break e}}function s(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var H=q[0],W=q.pop();if(W!==H){q[0]=W;e:for(var de=0,Y=q.length,x=Y>>>1;de<x;){var j=2*(de+1)-1,Z=q[j],K=j+1,ne=q[K];if(0>c(Z,W))K<Y&&0>c(ne,Z)?(q[de]=ne,q[K]=W,de=K):(q[de]=Z,q[j]=W,de=j);else if(K<Y&&0>c(ne,W))q[de]=ne,q[K]=W,de=K;else break e}}return H}function c(q,H){var W=q.sortIndex-H.sortIndex;return W!==0?W:q.id-H.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var p=[],g=[],y=1,b=null,S=3,C=!1,R=!1,U=!1,B=!1,L=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function J(q){for(var H=s(g);H!==null;){if(H.callback===null)r(g);else if(H.startTime<=q)r(g),H.sortIndex=H.expirationTime,i(p,H);else break;H=s(g)}}function P(q){if(U=!1,J(q),!R)if(s(p)!==null)R=!0,oe||(oe=!0,Ne());else{var H=s(g);H!==null&&Ge(P,H.startTime-q)}}var oe=!1,F=-1,_=5,ie=-1;function Ae(){return B?!0:!(n.unstable_now()-ie<_)}function je(){if(B=!1,oe){var q=n.unstable_now();ie=q;var H=!0;try{e:{R=!1,U&&(U=!1,X(F),F=-1),C=!0;var W=S;try{t:{for(J(q),b=s(p);b!==null&&!(b.expirationTime>q&&Ae());){var de=b.callback;if(typeof de=="function"){b.callback=null,S=b.priorityLevel;var Y=de(b.expirationTime<=q);if(q=n.unstable_now(),typeof Y=="function"){b.callback=Y,J(q),H=!0;break t}b===s(p)&&r(p),J(q)}else r(p);b=s(p)}if(b!==null)H=!0;else{var x=s(g);x!==null&&Ge(P,x.startTime-q),H=!1}}break e}finally{b=null,S=W,C=!1}H=void 0}}finally{H?Ne():oe=!1}}}var Ne;if(typeof Q=="function")Ne=function(){Q(je)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,rt=mt.port2;mt.port1.onmessage=je,Ne=function(){rt.postMessage(null)}}else Ne=function(){L(je,0)};function Ge(q,H){F=L(function(){q(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(q){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var W=S;S=H;try{return q()}finally{S=W}},n.unstable_requestPaint=function(){B=!0},n.unstable_runWithPriority=function(q,H){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var W=S;S=q;try{return H()}finally{S=W}},n.unstable_scheduleCallback=function(q,H,W){var de=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?de+W:de):W=de,q){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=W+Y,q={id:y++,callback:H,priorityLevel:q,startTime:W,expirationTime:Y,sortIndex:-1},W>de?(q.sortIndex=W,i(g,q),s(p)===null&&q===s(g)&&(U?(X(F),F=-1):U=!0,Ge(P,W-de))):(q.sortIndex=Y,i(p,q),R||C||(R=!0,oe||(oe=!0,Ne()))),q},n.unstable_shouldYield=Ae,n.unstable_wrapCallback=function(q){var H=S;return function(){var W=S;S=H;try{return q.apply(this,arguments)}finally{S=W}}}})(Ku)),Ku}var Cp;function VS(){return Cp||(Cp=1,Ju.exports=NS()),Ju.exports}var Fu={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function wS(){if(zp)return lt;zp=1;var n=Gc();function i(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function m(p,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:p,containerInfo:g,implementation:y}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,lt.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return m(p,g,null,y)},lt.flushSync=function(p){var g=f.T,y=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=g,r.p=y,r.d.f()}},lt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},lt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},lt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:C}):y==="script"&&r.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},lt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},lt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin);r.d.L(p,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},lt.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=h(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},lt.requestFormReset=function(p){r.d.r(p)},lt.unstable_batchedUpdates=function(p,g){return p(g)},lt.useFormState=function(p,g,y){return f.H.useFormState(p,g,y)},lt.useFormStatus=function(){return f.H.useHostTransitionStatus()},lt.version="19.2.4",lt}var Op;function jS(){if(Op)return Fu.exports;Op=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Fu.exports=wS(),Fu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function _S(){if(Rp)return xi;Rp=1;var n=VS(),i=Gc(),s=jS();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(m(e)!==e)throw Error(r(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,o=t;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){a=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return p(l),e;if(u===o)return p(l),t;u=u.sibling}throw Error(r(188))}if(a.return!==o.return)a=l,o=u;else{for(var d=!1,v=l.child;v;){if(v===a){d=!0,a=l,o=u;break}if(v===o){d=!0,o=l,a=u;break}v=v.sibling}if(!d){for(v=u.child;v;){if(v===a){d=!0,a=u,o=l;break}if(v===o){d=!0,o=u,a=l;break}v=v.sibling}if(!d)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),Ae=Symbol.for("react.memo_cache_sentinel"),je=Symbol.iterator;function Ne(e){return e===null||typeof e!="object"?null:(e=je&&e[je]||e["@@iterator"],typeof e=="function"?e:null)}var mt=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case L:return"Profiler";case B:return"StrictMode";case P:return"Suspense";case oe:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case Q:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:rt(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return rt(e(t))}catch{}}return null}var Ge=Array.isArray,q=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},de=[],Y=-1;function x(e){return{current:e}}function j(e){0>Y||(e.current=de[Y],de[Y]=null,Y--)}function Z(e,t){Y++,de[Y]=e.current,e.current=t}var K=x(null),ne=x(null),re=x(null),be=x(null);function $e(e,t){switch(Z(re,t),Z(ne,e),Z(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?kh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=kh(t),e=Xh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(K),Z(K,e)}function me(){j(K),j(ne),j(re)}function Ma(e){e.memoizedState!==null&&Z(be,e);var t=K.current,a=Xh(t,e.type);t!==a&&(Z(ne,e),Z(K,a))}function ia(e){ne.current===e&&(j(K),j(ne)),be.current===e&&(j(be),yi._currentValue=W)}var Ca,Vn;function qt(e){if(Ca===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ca=t&&t[1]||"",Vn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ca+e+Vn}var zr=!1;function Or(e,t){if(!e||zr)return"";zr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(O){var z=O}Reflect.construct(e,[],w)}else{try{w.call()}catch(O){z=O}e.call(w.prototype)}}else{try{throw Error()}catch(O){z=O}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(O){if(O&&z&&typeof O.stack=="string")return[O.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),d=u[0],v=u[1];if(d&&v){var T=d.split(`
`),M=v.split(`
`);for(l=o=0;o<T.length&&!T[o].includes("DetermineComponentFrameRoot");)o++;for(;l<M.length&&!M[l].includes("DetermineComponentFrameRoot");)l++;if(o===T.length||l===M.length)for(o=T.length-1,l=M.length-1;1<=o&&0<=l&&T[o]!==M[l];)l--;for(;1<=o&&0<=l;o--,l--)if(T[o]!==M[l]){if(o!==1||l!==1)do if(o--,l--,0>l||T[o]!==M[l]){var N=`
`+T[o].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=o&&0<=l);break}}}finally{zr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function s0(e,t){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return e.child!==t&&t!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Or(e.type,!1);case 11:return Or(e.type.render,!1);case 1:return Or(e.type,!0);case 31:return qt("Activity");default:return""}}function Ef(e){try{var t="",a=null;do t+=s0(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Rr=Object.prototype.hasOwnProperty,qr=n.unstable_scheduleCallback,Nr=n.unstable_cancelCallback,r0=n.unstable_shouldYield,l0=n.unstable_requestPaint,Tt=n.unstable_now,u0=n.unstable_getCurrentPriorityLevel,xf=n.unstable_ImmediatePriority,Af=n.unstable_UserBlockingPriority,Hi=n.unstable_NormalPriority,c0=n.unstable_LowPriority,Df=n.unstable_IdlePriority,f0=n.log,d0=n.unstable_setDisableYieldValue,Ro=null,Et=null;function za(e){if(typeof f0=="function"&&d0(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Ro,e)}catch{}}var xt=Math.clz32?Math.clz32:p0,m0=Math.log,h0=Math.LN2;function p0(e){return e>>>=0,e===0?32:31-(m0(e)/h0|0)|0}var Gi=256,Qi=262144,Yi=4194304;function ln(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pi(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var v=o&134217727;return v!==0?(o=v&~u,o!==0?l=ln(o):(d&=v,d!==0?l=ln(d):a||(a=v&~e,a!==0&&(l=ln(a))))):(v=o&~u,v!==0?l=ln(v):d!==0?l=ln(d):a||(a=o&~e,a!==0&&(l=ln(a)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:l}function qo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function g0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mf(){var e=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),e}function Vr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function No(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function v0(e,t,a,o,l,u){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var v=e.entanglements,T=e.expirationTimes,M=e.hiddenUpdates;for(a=d&~a;0<a;){var N=31-xt(a),w=1<<N;v[N]=0,T[N]=-1;var z=M[N];if(z!==null)for(M[N]=null,N=0;N<z.length;N++){var O=z[N];O!==null&&(O.lane&=-536870913)}a&=~w}o!==0&&Cf(e,o,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(d&~t))}function Cf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-xt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function zf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-xt(a),l=1<<o;l&t|e[o]&t&&(e[o]|=t),a&=~l}}function Of(e,t){var a=t&-t;return a=(a&42)!==0?1:wr(a),(a&(e.suspendedLanes|t))!==0?0:a}function wr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rf(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:pp(e.type))}function qf(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var Oa=Math.random().toString(36).slice(2),tt="__reactFiber$"+Oa,ht="__reactProps$"+Oa,wn="__reactContainer$"+Oa,_r="__reactEvents$"+Oa,y0="__reactListeners$"+Oa,b0="__reactHandles$"+Oa,Nf="__reactResources$"+Oa,Vo="__reactMarker$"+Oa;function Ur(e){delete e[tt],delete e[ht],delete e[_r],delete e[y0],delete e[b0]}function jn(e){var t=e[tt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[wn]||a[tt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ih(e);e!==null;){if(a=e[tt])return a;e=Ih(e)}return t}e=a,a=e.parentNode}return null}function _n(e){if(e=e[tt]||e[wn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Un(e){var t=e[Nf];return t||(t=e[Nf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[Vo]=!0}var Vf=new Set,wf={};function un(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(wf[e]=t,e=0;e<t.length;e++)Vf.add(t[e])}var S0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jf={},_f={};function T0(e){return Rr.call(_f,e)?!0:Rr.call(jf,e)?!1:S0.test(e)?_f[e]=!0:(jf[e]=!0,!1)}function ki(e,t,a){if(T0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Xi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function sa(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E0(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){a=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){if(!e._valueTracker){var t=Uf(e)?"checked":"value";e._valueTracker=E0(e,t,""+e[t])}}function Bf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=Uf(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var x0=/[\n"\\]/g;function Vt(e){return e.replace(x0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lr(e,t,a,o,l,u,d,v){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Hr(e,d,Nt(t)):a!=null?Hr(e,d,Nt(a)):o!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Nt(v):e.removeAttribute("name")}function Lf(e,t,a,o,l,u,d,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Br(e);return}a=a!=null?""+Nt(a):"",t=t!=null?""+Nt(t):a,v||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=v?e.checked:!!o,e.defaultChecked=!!o,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Br(e)}function Hr(e,t,a){t==="number"&&Zi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ln(e,t,a,o){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Nt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Hf(e,t,a){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Nt(a):""}function Gf(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(r(92));if(Ge(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Nt(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Br(e)}function Hn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var A0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qf(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||A0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Yf(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var l in t)o=t[l],t.hasOwnProperty(l)&&a[l]!==o&&Qf(e,l,o)}else for(var u in t)t.hasOwnProperty(u)&&Qf(e,u,t[u])}function Gr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),M0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ji(e){return M0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ra(){}var Qr=null;function Yr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gn=null,Qn=null;function Pf(e){var t=_n(e);if(t&&(e=t.stateNode)){var a=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(Lr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var l=o[ht]||null;if(!l)throw Error(r(90));Lr(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&Bf(o)}break e;case"textarea":Hf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ln(e,!!a.multiple,t,!1)}}}var Pr=!1;function kf(e,t,a){if(Pr)return e(t,a);Pr=!0;try{var o=e(t);return o}finally{if(Pr=!1,(Gn!==null||Qn!==null)&&(js(),Gn&&(t=Gn,e=Qn,Qn=Gn=null,Pf(t),e)))for(t=0;t<e.length;t++)Pf(e[t])}}function jo(e,t){var a=e.stateNode;if(a===null)return null;var o=a[ht]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kr=!1;if(la)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){kr=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{kr=!1}var Ra=null,Xr=null,Ki=null;function Xf(){if(Ki)return Ki;var e,t=Xr,a=t.length,o,l="value"in Ra?Ra.value:Ra.textContent,u=l.length;for(e=0;e<a&&t[e]===l[e];e++);var d=a-e;for(o=1;o<=d&&t[a-o]===l[u-o];o++);return Ki=l.slice(e,1<o?1-o:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function Zf(){return!1}function pt(e){function t(a,o,l,u,d){this._reactName=a,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(a=e[v],this[v]=a?a(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Wi:Zf,this.isPropagationStopped=Zf,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=pt(cn),Uo=b({},cn,{view:0,detail:0}),C0=pt(Uo),Zr,Jr,Bo,Ii=b({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bo&&(Bo&&e.type==="mousemove"?(Zr=e.screenX-Bo.screenX,Jr=e.screenY-Bo.screenY):Jr=Zr=0,Bo=e),Zr)},movementY:function(e){return"movementY"in e?e.movementY:Jr}}),Jf=pt(Ii),z0=b({},Ii,{dataTransfer:0}),O0=pt(z0),R0=b({},Uo,{relatedTarget:0}),Kr=pt(R0),q0=b({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=pt(q0),V0=b({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w0=pt(V0),j0=b({},cn,{data:0}),Kf=pt(j0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B0[e])?!!t[e]:!1}function Fr(){return L0}var H0=b({},Uo,{key:function(e){if(e.key){var t=_0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fr,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G0=pt(H0),Q0=b({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=pt(Q0),Y0=b({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fr}),P0=pt(Y0),k0=b({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=pt(k0),Z0=b({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=pt(Z0),K0=b({},cn,{newState:0,oldState:0}),F0=pt(K0),W0=[9,13,27,32],Wr=la&&"CompositionEvent"in window,Lo=null;la&&"documentMode"in document&&(Lo=document.documentMode);var $0=la&&"TextEvent"in window&&!Lo,Wf=la&&(!Wr||Lo&&8<Lo&&11>=Lo),$f=" ",If=!1;function ed(e,t){switch(e){case"keyup":return W0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function td(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function I0(e,t){switch(e){case"compositionend":return td(t);case"keypress":return t.which!==32?null:(If=!0,$f);case"textInput":return e=t.data,e===$f&&If?null:e;default:return null}}function eb(e,t){if(Yn)return e==="compositionend"||!Wr&&ed(e,t)?(e=Xf(),Ki=Xr=Ra=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wf&&t.locale!=="ko"?null:t.data;default:return null}}var tb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tb[e.type]:t==="textarea"}function nd(e,t,a,o){Gn?Qn?Qn.push(o):Qn=[o]:Gn=o,t=Qs(t,"onChange"),0<t.length&&(a=new $i("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Ho=null,Go=null;function ab(e){Lh(e,0)}function es(e){var t=wo(e);if(Bf(t))return e}function od(e,t){if(e==="change")return t}var id=!1;if(la){var $r;if(la){var Ir="oninput"in document;if(!Ir){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),Ir=typeof sd.oninput=="function"}$r=Ir}else $r=!1;id=$r&&(!document.documentMode||9<document.documentMode)}function rd(){Ho&&(Ho.detachEvent("onpropertychange",ld),Go=Ho=null)}function ld(e){if(e.propertyName==="value"&&es(Go)){var t=[];nd(t,Go,e,Yr(e)),kf(ab,t)}}function nb(e,t,a){e==="focusin"?(rd(),Ho=t,Go=a,Ho.attachEvent("onpropertychange",ld)):e==="focusout"&&rd()}function ob(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return es(Go)}function ib(e,t){if(e==="click")return es(t)}function sb(e,t){if(e==="input"||e==="change")return es(t)}function rb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:rb;function Qo(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var l=a[o];if(!Rr.call(t,l)||!At(e[l],t[l]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,t){var a=ud(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ud(a)}}function fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zi(e.document)}return t}function el(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var lb=la&&"documentMode"in document&&11>=document.documentMode,Pn=null,tl=null,Yo=null,al=!1;function md(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;al||Pn==null||Pn!==Zi(o)||(o=Pn,"selectionStart"in o&&el(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Yo&&Qo(Yo,o)||(Yo=o,o=Qs(tl,"onSelect"),0<o.length&&(t=new $i("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Pn)))}function fn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var kn={animationend:fn("Animation","AnimationEnd"),animationiteration:fn("Animation","AnimationIteration"),animationstart:fn("Animation","AnimationStart"),transitionrun:fn("Transition","TransitionRun"),transitionstart:fn("Transition","TransitionStart"),transitioncancel:fn("Transition","TransitionCancel"),transitionend:fn("Transition","TransitionEnd")},nl={},hd={};la&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function dn(e){if(nl[e])return nl[e];if(!kn[e])return e;var t=kn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in hd)return nl[e]=t[a];return e}var pd=dn("animationend"),gd=dn("animationiteration"),vd=dn("animationstart"),ub=dn("transitionrun"),cb=dn("transitionstart"),fb=dn("transitioncancel"),yd=dn("transitionend"),bd=new Map,ol="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ol.push("scrollEnd");function Pt(e,t){bd.set(e,t),un(t,[e])}var ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],Xn=0,il=0;function as(){for(var e=Xn,t=il=Xn=0;t<e;){var a=wt[t];wt[t++]=null;var o=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var u=wt[t];if(wt[t++]=null,o!==null&&l!==null){var d=o.pending;d===null?l.next=l:(l.next=d.next,d.next=l),o.pending=l}u!==0&&Sd(a,l,u)}}function ns(e,t,a,o){wt[Xn++]=e,wt[Xn++]=t,wt[Xn++]=a,wt[Xn++]=o,il|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function sl(e,t,a,o){return ns(e,t,a,o),os(e)}function mn(e,t){return ns(e,null,null,t),os(e)}function Sd(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-xt(a),e=u.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=a|536870912),u):null}function os(e){if(50<fi)throw fi=0,pu=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zn={};function db(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,a,o){return new db(e,t,a,o)}function rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,t){var a=e.alternate;return a===null?(a=Dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Td(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function is(e,t,a,o,l,u){var d=0;if(o=e,typeof e=="function")rl(e)&&(d=1);else if(typeof e=="string")d=vS(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Dt(31,a,t,l),e.elementType=ie,e.lanes=u,e;case U:return hn(a.children,l,u,t);case B:d=8,l|=24;break;case L:return e=Dt(12,a,t,l|2),e.elementType=L,e.lanes=u,e;case P:return e=Dt(13,a,t,l),e.elementType=P,e.lanes=u,e;case oe:return e=Dt(19,a,t,l),e.elementType=oe,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:d=10;break e;case X:d=9;break e;case J:d=11;break e;case F:d=14;break e;case _:d=16,o=null;break e}d=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return t=Dt(d,a,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function hn(e,t,a,o){return e=Dt(7,e,o,t),e.lanes=a,e}function ll(e,t,a){return e=Dt(6,e,null,t),e.lanes=a,e}function Ed(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function ul(e,t,a){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xd=new WeakMap;function jt(e,t){if(typeof e=="object"&&e!==null){var a=xd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ef(t)},xd.set(e,t),t)}return{value:e,source:t,stack:Ef(t)}}var Jn=[],Kn=0,ss=null,Po=0,_t=[],Ut=0,qa=null,$t=1,It="";function ca(e,t){Jn[Kn++]=Po,Jn[Kn++]=ss,ss=e,Po=t}function Ad(e,t,a){_t[Ut++]=$t,_t[Ut++]=It,_t[Ut++]=qa,qa=e;var o=$t;e=It;var l=32-xt(o)-1;o&=~(1<<l),a+=1;var u=32-xt(t)+l;if(30<u){var d=l-l%5;u=(o&(1<<d)-1).toString(32),o>>=d,l-=d,$t=1<<32-xt(t)+l|a<<l|o,It=u+e}else $t=1<<u|a<<l|o,It=e}function cl(e){e.return!==null&&(ca(e,1),Ad(e,1,0))}function fl(e){for(;e===ss;)ss=Jn[--Kn],Jn[Kn]=null,Po=Jn[--Kn],Jn[Kn]=null;for(;e===qa;)qa=_t[--Ut],_t[Ut]=null,It=_t[--Ut],_t[Ut]=null,$t=_t[--Ut],_t[Ut]=null}function Dd(e,t){_t[Ut++]=$t,_t[Ut++]=It,_t[Ut++]=qa,$t=t.id,It=t.overflow,qa=e}var at=null,Ve=null,Se=!1,Na=null,Bt=!1,dl=Error(r(519));function Va(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ko(jt(t,e)),dl}function Md(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[tt]=e,t[ht]=o,a){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(a=0;a<mi.length;a++)ge(mi[a],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),Lf(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),Gf(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Yh(t.textContent,a)?(o.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),o.onScroll!=null&&ge("scroll",t),o.onScrollEnd!=null&&ge("scrollend",t),o.onClick!=null&&(t.onclick=ra),t=!0):t=!1,t||Va(e,!0)}function Cd(e){for(at=e.return;at;)switch(at.tag){case 5:case 31:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:at=at.return}}function Fn(e){if(e!==at)return!1;if(!Se)return Cd(e),Se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ru(e.type,e.memoizedProps)),a=!a),a&&Ve&&Va(e),Cd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ve=$h(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ve=$h(e)}else t===27?(t=Ve,Za(e.type)?(e=ju,ju=null,Ve=e):Ve=t):Ve=at?Ht(e.stateNode.nextSibling):null;return!0}function pn(){Ve=at=null,Se=!1}function ml(){var e=Na;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),Na=null),e}function ko(e){Na===null?Na=[e]:Na.push(e)}var hl=x(null),gn=null,fa=null;function wa(e,t,a){Z(hl,t._currentValue),t._currentValue=a}function da(e){e._currentValue=hl.current,j(hl)}function pl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function gl(e,t,a,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var d=l.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=l;for(var T=0;T<t.length;T++)if(v.context===t[T]){u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),pl(u.return,a,e),o||(d=null);break e}u=v.next}}else if(l.tag===18){if(d=l.return,d===null)throw Error(r(341));d.lanes|=a,u=d.alternate,u!==null&&(u.lanes|=a),pl(d,a,e),d=null}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===e){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}}function Wn(e,t,a,o){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var d=l.alternate;if(d===null)throw Error(r(387));if(d=d.memoizedProps,d!==null){var v=l.type;At(l.pendingProps.value,d.value)||(e!==null?e.push(v):e=[v])}}else if(l===be.current){if(d=l.alternate,d===null)throw Error(r(387));d.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(yi):e=[yi])}l=l.return}e!==null&&gl(t,e,a,o),t.flags|=262144}function rs(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vn(e){gn=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return zd(gn,e)}function ls(e,t){return gn===null&&vn(e),zd(e,t)}function zd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(r(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return a}var mb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},hb=n.unstable_scheduleCallback,pb=n.unstable_NormalPriority,Pe={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vl(){return{controller:new mb,data:new Map,refCount:0}}function Xo(e){e.refCount--,e.refCount===0&&hb(pb,function(){e.controller.abort()})}var Zo=null,yl=0,$n=0,In=null;function gb(e,t){if(Zo===null){var a=Zo=[];yl=0,$n=Tu(),In={status:"pending",value:void 0,then:function(o){a.push(o)}}}return yl++,t.then(Od,Od),t}function Od(){if(--yl===0&&Zo!==null){In!==null&&(In.status="fulfilled");var e=Zo;Zo=null,$n=0,In=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vb(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),o}var Rd=q.S;q.S=function(e,t){mh=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&gb(e,t),Rd!==null&&Rd(e,t)};var yn=x(null);function bl(){var e=yn.current;return e!==null?e:Re.pooledCache}function us(e,t){t===null?Z(yn,yn.current):Z(yn,t.pool)}function qd(){var e=bl();return e===null?null:{parent:Pe._currentValue,pool:e}}var eo=Error(r(460)),Sl=Error(r(474)),cs=Error(r(542)),fs={then:function(){}};function Nd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ra,ra),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jd(e),e;default:if(typeof t.status=="string")t.then(ra,ra);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=o}},function(o){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jd(e),e}throw Sn=t,eo}}function bn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Sn=a,eo):a}}var Sn=null;function wd(){if(Sn===null)throw Error(r(459));var e=Sn;return Sn=null,e}function jd(e){if(e===eo||e===cs)throw Error(r(483))}var to=null,Jo=0;function ds(e){var t=Jo;return Jo+=1,to===null&&(to=[]),Vd(to,e,t)}function Ko(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ms(e,t){throw t.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _d(e){function t(A,E){if(e){var D=A.deletions;D===null?(A.deletions=[E],A.flags|=16):D.push(E)}}function a(A,E){if(!e)return null;for(;E!==null;)t(A,E),E=E.sibling;return null}function o(A){for(var E=new Map;A!==null;)A.key!==null?E.set(A.key,A):E.set(A.index,A),A=A.sibling;return E}function l(A,E){return A=ua(A,E),A.index=0,A.sibling=null,A}function u(A,E,D){return A.index=D,e?(D=A.alternate,D!==null?(D=D.index,D<E?(A.flags|=67108866,E):D):(A.flags|=67108866,E)):(A.flags|=1048576,E)}function d(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function v(A,E,D,V){return E===null||E.tag!==6?(E=ll(D,A.mode,V),E.return=A,E):(E=l(E,D),E.return=A,E)}function T(A,E,D,V){var se=D.type;return se===U?N(A,E,D.props.children,V,D.key):E!==null&&(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&bn(se)===E.type)?(E=l(E,D.props),Ko(E,D),E.return=A,E):(E=is(D.type,D.key,D.props,null,A.mode,V),Ko(E,D),E.return=A,E)}function M(A,E,D,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==D.containerInfo||E.stateNode.implementation!==D.implementation?(E=ul(D,A.mode,V),E.return=A,E):(E=l(E,D.children||[]),E.return=A,E)}function N(A,E,D,V,se){return E===null||E.tag!==7?(E=hn(D,A.mode,V,se),E.return=A,E):(E=l(E,D),E.return=A,E)}function w(A,E,D){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=ll(""+E,A.mode,D),E.return=A,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case C:return D=is(E.type,E.key,E.props,null,A.mode,D),Ko(D,E),D.return=A,D;case R:return E=ul(E,A.mode,D),E.return=A,E;case _:return E=bn(E),w(A,E,D)}if(Ge(E)||Ne(E))return E=hn(E,A.mode,D,null),E.return=A,E;if(typeof E.then=="function")return w(A,ds(E),D);if(E.$$typeof===Q)return w(A,ls(A,E),D);ms(A,E)}return null}function z(A,E,D,V){var se=E!==null?E.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return se!==null?null:v(A,E,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case C:return D.key===se?T(A,E,D,V):null;case R:return D.key===se?M(A,E,D,V):null;case _:return D=bn(D),z(A,E,D,V)}if(Ge(D)||Ne(D))return se!==null?null:N(A,E,D,V,null);if(typeof D.then=="function")return z(A,E,ds(D),V);if(D.$$typeof===Q)return z(A,E,ls(A,D),V);ms(A,D)}return null}function O(A,E,D,V,se){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return A=A.get(D)||null,v(E,A,""+V,se);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case C:return A=A.get(V.key===null?D:V.key)||null,T(E,A,V,se);case R:return A=A.get(V.key===null?D:V.key)||null,M(E,A,V,se);case _:return V=bn(V),O(A,E,D,V,se)}if(Ge(V)||Ne(V))return A=A.get(D)||null,N(E,A,V,se,null);if(typeof V.then=="function")return O(A,E,D,ds(V),se);if(V.$$typeof===Q)return O(A,E,D,ls(E,V),se);ms(E,V)}return null}function $(A,E,D,V){for(var se=null,Te=null,ae=E,fe=E=0,ye=null;ae!==null&&fe<D.length;fe++){ae.index>fe?(ye=ae,ae=null):ye=ae.sibling;var Ee=z(A,ae,D[fe],V);if(Ee===null){ae===null&&(ae=ye);break}e&&ae&&Ee.alternate===null&&t(A,ae),E=u(Ee,E,fe),Te===null?se=Ee:Te.sibling=Ee,Te=Ee,ae=ye}if(fe===D.length)return a(A,ae),Se&&ca(A,fe),se;if(ae===null){for(;fe<D.length;fe++)ae=w(A,D[fe],V),ae!==null&&(E=u(ae,E,fe),Te===null?se=ae:Te.sibling=ae,Te=ae);return Se&&ca(A,fe),se}for(ae=o(ae);fe<D.length;fe++)ye=O(ae,A,fe,D[fe],V),ye!==null&&(e&&ye.alternate!==null&&ae.delete(ye.key===null?fe:ye.key),E=u(ye,E,fe),Te===null?se=ye:Te.sibling=ye,Te=ye);return e&&ae.forEach(function($a){return t(A,$a)}),Se&&ca(A,fe),se}function le(A,E,D,V){if(D==null)throw Error(r(151));for(var se=null,Te=null,ae=E,fe=E=0,ye=null,Ee=D.next();ae!==null&&!Ee.done;fe++,Ee=D.next()){ae.index>fe?(ye=ae,ae=null):ye=ae.sibling;var $a=z(A,ae,Ee.value,V);if($a===null){ae===null&&(ae=ye);break}e&&ae&&$a.alternate===null&&t(A,ae),E=u($a,E,fe),Te===null?se=$a:Te.sibling=$a,Te=$a,ae=ye}if(Ee.done)return a(A,ae),Se&&ca(A,fe),se;if(ae===null){for(;!Ee.done;fe++,Ee=D.next())Ee=w(A,Ee.value,V),Ee!==null&&(E=u(Ee,E,fe),Te===null?se=Ee:Te.sibling=Ee,Te=Ee);return Se&&ca(A,fe),se}for(ae=o(ae);!Ee.done;fe++,Ee=D.next())Ee=O(ae,A,fe,Ee.value,V),Ee!==null&&(e&&Ee.alternate!==null&&ae.delete(Ee.key===null?fe:Ee.key),E=u(Ee,E,fe),Te===null?se=Ee:Te.sibling=Ee,Te=Ee);return e&&ae.forEach(function(zS){return t(A,zS)}),Se&&ca(A,fe),se}function Oe(A,E,D,V){if(typeof D=="object"&&D!==null&&D.type===U&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case C:e:{for(var se=D.key;E!==null;){if(E.key===se){if(se=D.type,se===U){if(E.tag===7){a(A,E.sibling),V=l(E,D.props.children),V.return=A,A=V;break e}}else if(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&bn(se)===E.type){a(A,E.sibling),V=l(E,D.props),Ko(V,D),V.return=A,A=V;break e}a(A,E);break}else t(A,E);E=E.sibling}D.type===U?(V=hn(D.props.children,A.mode,V,D.key),V.return=A,A=V):(V=is(D.type,D.key,D.props,null,A.mode,V),Ko(V,D),V.return=A,A=V)}return d(A);case R:e:{for(se=D.key;E!==null;){if(E.key===se)if(E.tag===4&&E.stateNode.containerInfo===D.containerInfo&&E.stateNode.implementation===D.implementation){a(A,E.sibling),V=l(E,D.children||[]),V.return=A,A=V;break e}else{a(A,E);break}else t(A,E);E=E.sibling}V=ul(D,A.mode,V),V.return=A,A=V}return d(A);case _:return D=bn(D),Oe(A,E,D,V)}if(Ge(D))return $(A,E,D,V);if(Ne(D)){if(se=Ne(D),typeof se!="function")throw Error(r(150));return D=se.call(D),le(A,E,D,V)}if(typeof D.then=="function")return Oe(A,E,ds(D),V);if(D.$$typeof===Q)return Oe(A,E,ls(A,D),V);ms(A,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,E!==null&&E.tag===6?(a(A,E.sibling),V=l(E,D),V.return=A,A=V):(a(A,E),V=ll(D,A.mode,V),V.return=A,A=V),d(A)):a(A,E)}return function(A,E,D,V){try{Jo=0;var se=Oe(A,E,D,V);return to=null,se}catch(ae){if(ae===eo||ae===cs)throw ae;var Te=Dt(29,ae,null,A.mode);return Te.lanes=V,Te.return=A,Te}finally{}}}var Tn=_d(!0),Ud=_d(!1),ja=!1;function Tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function El(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(xe&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=os(e),Sd(e,null,a),t}return ns(e,o,t,a),os(e)}function Fo(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,zf(e,a)}}function xl(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=d:u=u.next=d,a=a.next}while(a!==null);u===null?l=u=t:u=u.next=t}else l=u=t;a={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Al=!1;function Wo(){if(Al){var e=In;if(e!==null)throw e}}function $o(e,t,a,o){Al=!1;var l=e.updateQueue;ja=!1;var u=l.firstBaseUpdate,d=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var T=v,M=T.next;T.next=null,d===null?u=M:d.next=M,d=T;var N=e.alternate;N!==null&&(N=N.updateQueue,v=N.lastBaseUpdate,v!==d&&(v===null?N.firstBaseUpdate=M:v.next=M,N.lastBaseUpdate=T))}if(u!==null){var w=l.baseState;d=0,N=M=T=null,v=u;do{var z=v.lane&-536870913,O=z!==v.lane;if(O?(ve&z)===z:(o&z)===z){z!==0&&z===$n&&(Al=!0),N!==null&&(N=N.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var $=e,le=v;z=t;var Oe=a;switch(le.tag){case 1:if($=le.payload,typeof $=="function"){w=$.call(Oe,w,z);break e}w=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=le.payload,z=typeof $=="function"?$.call(Oe,w,z):$,z==null)break e;w=b({},w,z);break e;case 2:ja=!0}}z=v.callback,z!==null&&(e.flags|=64,O&&(e.flags|=8192),O=l.callbacks,O===null?l.callbacks=[z]:O.push(z))}else O={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},N===null?(M=N=O,T=w):N=N.next=O,d|=z;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;O=v,v=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);N===null&&(T=w),l.baseState=T,l.firstBaseUpdate=M,l.lastBaseUpdate=N,u===null&&(l.shared.lanes=0),Qa|=d,e.lanes=d,e.memoizedState=w}}function Bd(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Ld(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Bd(a[e],t)}var ao=x(null),hs=x(0);function Hd(e,t){e=Ta,Z(hs,e),Z(ao,t),Ta=e|t.baseLanes}function Dl(){Z(hs,Ta),Z(ao,ao.current)}function Ml(){Ta=hs.current,j(ao),j(hs)}var Mt=x(null),Lt=null;function Ba(e){var t=e.alternate;Z(Qe,Qe.current&1),Z(Mt,e),Lt===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(Lt=e)}function Cl(e){Z(Qe,Qe.current),Z(Mt,e),Lt===null&&(Lt=e)}function Gd(e){e.tag===22?(Z(Qe,Qe.current),Z(Mt,e),Lt===null&&(Lt=e)):La()}function La(){Z(Qe,Qe.current),Z(Mt,Mt.current)}function Ct(e){j(Mt),Lt===e&&(Lt=null),j(Qe)}var Qe=x(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vu(a)||wu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=0,ce=null,Ce=null,ke=null,gs=!1,no=!1,En=!1,vs=0,Io=0,oo=null,yb=0;function Be(){throw Error(r(321))}function zl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!At(e[a],t[a]))return!1;return!0}function Ol(e,t,a,o,l,u){return ma=u,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,q.H=e===null||e.memoizedState===null?Am:Pl,En=!1,u=a(o,l),En=!1,no&&(u=Yd(t,a,o,l)),Qd(e),u}function Qd(e){q.H=ai;var t=Ce!==null&&Ce.next!==null;if(ma=0,ke=Ce=ce=null,gs=!1,Io=0,oo=null,t)throw Error(r(300));e===null||Xe||(e=e.dependencies,e!==null&&rs(e)&&(Xe=!0))}function Yd(e,t,a,o){ce=e;var l=0;do{if(no&&(oo=null),Io=0,no=!1,25<=l)throw Error(r(301));if(l+=1,ke=Ce=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}q.H=Dm,u=t(a,o)}while(no);return u}function bb(){var e=q.H,t=e.useState()[0];return t=typeof t.then=="function"?ei(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(ce.flags|=1024),t}function Rl(){var e=vs!==0;return vs=0,e}function ql(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Nl(e){if(gs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gs=!1}ma=0,ke=Ce=ce=null,no=!1,Io=vs=0,oo=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ce.memoizedState=ke=e:ke=ke.next=e,ke}function Ye(){if(Ce===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=ke===null?ce.memoizedState:ke.next;if(t!==null)ke=t,Ce=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},ke===null?ce.memoizedState=ke=e:ke=ke.next=e}return ke}function ys(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ei(e){var t=Io;return Io+=1,oo===null&&(oo=[]),e=Vd(oo,e,t),t=ce,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,q.H=t===null||t.memoizedState===null?Am:Pl),e}function bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ei(e);if(e.$$typeof===Q)return nt(e)}throw Error(r(438,String(e)))}function Vl(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ys(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=Ae;return t.index++,a}function ha(e,t){return typeof t=="function"?t(e):t}function Ss(e){var t=Ye();return wl(t,Ce,e)}function wl(e,t,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var l=e.baseQueue,u=o.pending;if(u!==null){if(l!==null){var d=l.next;l.next=u.next,u.next=d}t.baseQueue=l=u,o.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var v=d=null,T=null,M=t,N=!1;do{var w=M.lane&-536870913;if(w!==M.lane?(ve&w)===w:(ma&w)===w){var z=M.revertLane;if(z===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),w===$n&&(N=!0);else if((ma&z)===z){M=M.next,z===$n&&(N=!0);continue}else w={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},T===null?(v=T=w,d=u):T=T.next=w,ce.lanes|=z,Qa|=z;w=M.action,En&&a(u,w),u=M.hasEagerState?M.eagerState:a(u,w)}else z={lane:w,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},T===null?(v=T=z,d=u):T=T.next=z,ce.lanes|=w,Qa|=w;M=M.next}while(M!==null&&M!==t);if(T===null?d=u:T.next=v,!At(u,e.memoizedState)&&(Xe=!0,N&&(a=In,a!==null)))throw a;e.memoizedState=u,e.baseState=d,e.baseQueue=T,o.lastRenderedState=u}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function jl(e){var t=Ye(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,l=a.pending,u=t.memoizedState;if(l!==null){a.pending=null;var d=l=l.next;do u=e(u,d.action),d=d.next;while(d!==l);At(u,t.memoizedState)||(Xe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function Pd(e,t,a){var o=ce,l=Ye(),u=Se;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=t();var d=!At((Ce||l).memoizedState,a);if(d&&(l.memoizedState=a,Xe=!0),l=l.queue,Bl(Zd.bind(null,o,l,e),[e]),l.getSnapshot!==t||d||ke!==null&&ke.memoizedState.tag&1){if(o.flags|=2048,io(9,{destroy:void 0},Xd.bind(null,o,l,a,t),null),Re===null)throw Error(r(349));u||(ma&127)!==0||kd(o,t,a)}return a}function kd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=ys(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Xd(e,t,a,o){t.value=a,t.getSnapshot=o,Jd(t)&&Kd(e)}function Zd(e,t,a){return a(function(){Jd(t)&&Kd(e)})}function Jd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!At(e,a)}catch{return!0}}function Kd(e){var t=mn(e,2);t!==null&&St(t,e,2)}function _l(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),En){za(!0);try{a()}finally{za(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},t}function Fd(e,t,a,o){return e.baseState=a,wl(e,Ce,typeof o=="function"?o:ha)}function Sb(e,t,a,o,l){if(xs(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};q.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,Wd(t,u)):(u.next=a.next,t.pending=a.next=u)}}function Wd(e,t){var a=t.action,o=t.payload,l=e.state;if(t.isTransition){var u=q.T,d={};q.T=d;try{var v=a(l,o),T=q.S;T!==null&&T(d,v),$d(e,t,v)}catch(M){Ul(e,t,M)}finally{u!==null&&d.types!==null&&(u.types=d.types),q.T=u}}else try{u=a(l,o),$d(e,t,u)}catch(M){Ul(e,t,M)}}function $d(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Id(e,t,o)},function(o){return Ul(e,t,o)}):Id(e,t,a)}function Id(e,t,a){t.status="fulfilled",t.value=a,em(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Wd(e,a)))}function Ul(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,em(t),t=t.next;while(t!==o)}e.action=null}function em(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function tm(e,t){return t}function am(e,t){if(Se){var a=Re.formState;if(a!==null){e:{var o=ce;if(Se){if(Ve){t:{for(var l=Ve,u=Bt;l.nodeType!==8;){if(!u){l=null;break t}if(l=Ht(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Ve=Ht(l.nextSibling),o=l.data==="F!";break e}}Va(o)}o=!1}o&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tm,lastRenderedState:t},a.queue=o,a=Tm.bind(null,ce,o),o.dispatch=a,o=_l(!1),u=Yl.bind(null,ce,!1,o.queue),o=ct(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,a=Sb.bind(null,ce,l,u,a),l.dispatch=a,o.memoizedState=e,[t,a,!1]}function nm(e){var t=Ye();return om(t,Ce,e)}function om(e,t,a){if(t=wl(e,t,tm)[0],e=Ss(ha)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ei(t)}catch(d){throw d===eo?cs:d}else o=t;t=Ye();var l=t.queue,u=l.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,io(9,{destroy:void 0},Tb.bind(null,l,a),null)),[o,u,e]}function Tb(e,t){e.action=t}function im(e){var t=Ye(),a=Ce;if(a!==null)return om(t,a,e);Ye(),t=t.memoizedState,a=Ye();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function io(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=ce.updateQueue,t===null&&(t=ys(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function sm(){return Ye().memoizedState}function Ts(e,t,a,o){var l=ct();ce.flags|=e,l.memoizedState=io(1|t,{destroy:void 0},a,o===void 0?null:o)}function Es(e,t,a,o){var l=Ye();o=o===void 0?null:o;var u=l.memoizedState.inst;Ce!==null&&o!==null&&zl(o,Ce.memoizedState.deps)?l.memoizedState=io(t,u,a,o):(ce.flags|=e,l.memoizedState=io(1|t,u,a,o))}function rm(e,t){Ts(8390656,8,e,t)}function Bl(e,t){Es(2048,8,e,t)}function Eb(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=ys(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function lm(e){var t=Ye().memoizedState;return Eb({ref:t,nextImpl:e}),function(){if((xe&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function um(e,t){return Es(4,2,e,t)}function cm(e,t){return Es(4,4,e,t)}function fm(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dm(e,t,a){a=a!=null?a.concat([e]):null,Es(4,4,fm.bind(null,t,e),a)}function Ll(){}function mm(e,t){var a=Ye();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&zl(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function hm(e,t){var a=Ye();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&zl(t,o[1]))return o[0];if(o=e(),En){za(!0);try{e()}finally{za(!1)}}return a.memoizedState=[o,t],o}function Hl(e,t,a){return a===void 0||(ma&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ph(),ce.lanes|=e,Qa|=e,a)}function pm(e,t,a,o){return At(a,t)?a:ao.current!==null?(e=Hl(e,a,o),At(e,t)||(Xe=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(ve&261930)===0?(Xe=!0,e.memoizedState=a):(e=ph(),ce.lanes|=e,Qa|=e,t)}function gm(e,t,a,o,l){var u=H.p;H.p=u!==0&&8>u?u:8;var d=q.T,v={};q.T=v,Yl(e,!1,t,a);try{var T=l(),M=q.S;if(M!==null&&M(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var N=vb(T,o);ti(e,t,N,Rt(e))}else ti(e,t,o,Rt(e))}catch(w){ti(e,t,{then:function(){},status:"rejected",reason:w},Rt())}finally{H.p=u,d!==null&&v.types!==null&&(d.types=v.types),q.T=d}}function xb(){}function Gl(e,t,a,o){if(e.tag!==5)throw Error(r(476));var l=vm(e).queue;gm(e,l,t,W,a===null?xb:function(){return ym(e),a(o)})}function vm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ym(e){var t=vm(e);t.next===null&&(t=e.alternate.memoizedState),ti(e,t.next.queue,{},Rt())}function Ql(){return nt(yi)}function bm(){return Ye().memoizedState}function Sm(){return Ye().memoizedState}function Ab(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Rt();e=_a(a);var o=Ua(t,e,a);o!==null&&(St(o,t,a),Fo(o,t,a)),t={cache:vl()},e.payload=t;return}t=t.return}}function Db(e,t,a){var o=Rt();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xs(e)?Em(t,a):(a=sl(e,t,a,o),a!==null&&(St(a,e,o),xm(a,t,o)))}function Tm(e,t,a){var o=Rt();ti(e,t,a,o)}function ti(e,t,a,o){var l={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(xs(e))Em(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,v=u(d,a);if(l.hasEagerState=!0,l.eagerState=v,At(v,d))return ns(e,t,l,0),Re===null&&as(),!1}catch{}finally{}if(a=sl(e,t,l,o),a!==null)return St(a,e,o),xm(a,t,o),!0}return!1}function Yl(e,t,a,o){if(o={lane:2,revertLane:Tu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},xs(e)){if(t)throw Error(r(479))}else t=sl(e,a,o,2),t!==null&&St(t,e,2)}function xs(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Em(e,t){no=gs=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function xm(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,zf(e,a)}}var ai={readContext:nt,use:bs,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be};ai.useEffectEvent=Be;var Am={readContext:nt,use:bs,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:rm,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ts(4194308,4,fm.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ts(4194308,4,e,t)},useInsertionEffect:function(e,t){Ts(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var o=e();if(En){za(!0);try{e()}finally{za(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=ct();if(a!==void 0){var l=a(t);if(En){za(!0);try{a(t)}finally{za(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=Db.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=_l(e);var t=e.queue,a=Tm.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ll,useDeferredValue:function(e,t){var a=ct();return Hl(a,e,t)},useTransition:function(){var e=_l(!1);return e=gm.bind(null,ce,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=ce,l=ct();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),Re===null)throw Error(r(349));(ve&127)!==0||kd(o,t,a)}l.memoizedState=a;var u={value:a,getSnapshot:t};return l.queue=u,rm(Zd.bind(null,o,u,e),[e]),o.flags|=2048,io(9,{destroy:void 0},Xd.bind(null,o,u,a,t),null),a},useId:function(){var e=ct(),t=Re.identifierPrefix;if(Se){var a=It,o=$t;a=(o&~(1<<32-xt(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=vs++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=yb++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ql,useFormState:am,useActionState:am,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Yl.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vl,useCacheRefresh:function(){return ct().memoizedState=Ab.bind(null,ce)},useEffectEvent:function(e){var t=ct(),a={impl:e};return t.memoizedState=a,function(){if((xe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Pl={readContext:nt,use:bs,useCallback:mm,useContext:nt,useEffect:Bl,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:hm,useReducer:Ss,useRef:sm,useState:function(){return Ss(ha)},useDebugValue:Ll,useDeferredValue:function(e,t){var a=Ye();return pm(a,Ce.memoizedState,e,t)},useTransition:function(){var e=Ss(ha)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:Pd,useId:bm,useHostTransitionStatus:Ql,useFormState:nm,useActionState:nm,useOptimistic:function(e,t){var a=Ye();return Fd(a,Ce,e,t)},useMemoCache:Vl,useCacheRefresh:Sm};Pl.useEffectEvent=lm;var Dm={readContext:nt,use:bs,useCallback:mm,useContext:nt,useEffect:Bl,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:hm,useReducer:jl,useRef:sm,useState:function(){return jl(ha)},useDebugValue:Ll,useDeferredValue:function(e,t){var a=Ye();return Ce===null?Hl(a,e,t):pm(a,Ce.memoizedState,e,t)},useTransition:function(){var e=jl(ha)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:Pd,useId:bm,useHostTransitionStatus:Ql,useFormState:im,useActionState:im,useOptimistic:function(e,t){var a=Ye();return Ce!==null?Fd(a,Ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vl,useCacheRefresh:Sm};Dm.useEffectEvent=lm;function kl(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Xl={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Rt(),l=_a(o);l.payload=t,a!=null&&(l.callback=a),t=Ua(e,l,o),t!==null&&(St(t,e,o),Fo(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Rt(),l=_a(o);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ua(e,l,o),t!==null&&(St(t,e,o),Fo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Rt(),o=_a(a);o.tag=2,t!=null&&(o.callback=t),t=Ua(e,o,a),t!==null&&(St(t,e,a),Fo(t,e,a))}};function Mm(e,t,a,o,l,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,d):t.prototype&&t.prototype.isPureReactComponent?!Qo(a,o)||!Qo(l,u):!0}function Cm(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Xl.enqueueReplaceState(t,t.state,null)}function xn(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function zm(e){ts(e)}function Om(e){console.error(e)}function Rm(e){ts(e)}function As(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function qm(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Zl(e,t,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){As(e,t)},a}function Nm(e){return e=_a(e),e.tag=3,e}function Vm(e,t,a,o){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;e.payload=function(){return l(u)},e.callback=function(){qm(t,a,o)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){qm(t,a,o),typeof l!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var v=o.stack;this.componentDidCatch(o.value,{componentStack:v!==null?v:""})})}function Mb(e,t,a,o,l){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Wn(t,a,l,!0),a=Mt.current,a!==null){switch(a.tag){case 31:case 13:return Lt===null?_s():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=l,o===fs?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),yu(e,o,l)),!1;case 22:return a.flags|=65536,o===fs?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),yu(e,o,l)),!1}throw Error(r(435,a.tag))}return yu(e,o,l),_s(),!1}if(Se)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==dl&&(e=Error(r(422),{cause:o}),ko(jt(e,a)))):(o!==dl&&(t=Error(r(423),{cause:o}),ko(jt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=jt(o,a),l=Zl(e.stateNode,o,l),xl(e,l),Le!==4&&(Le=2)),!1;var u=Error(r(520),{cause:o});if(u=jt(u,a),ci===null?ci=[u]:ci.push(u),Le!==4&&(Le=2),t===null)return!0;o=jt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Zl(a.stateNode,o,e),xl(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ya===null||!Ya.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Nm(l),Vm(l,e,a,o),xl(a,l),!1}a=a.return}while(a!==null);return!1}var Jl=Error(r(461)),Xe=!1;function ot(e,t,a,o){t.child=e===null?Ud(t,null,a,o):Tn(t,e.child,a,o)}function wm(e,t,a,o,l){a=a.render;var u=t.ref;if("ref"in o){var d={};for(var v in o)v!=="ref"&&(d[v]=o[v])}else d=o;return vn(t),o=Ol(e,t,a,d,u,l),v=Rl(),e!==null&&!Xe?(ql(e,t,l),pa(e,t,l)):(Se&&v&&cl(t),t.flags|=1,ot(e,t,o,l),t.child)}function jm(e,t,a,o,l){if(e===null){var u=a.type;return typeof u=="function"&&!rl(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,_m(e,t,u,o,l)):(e=is(a.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!au(e,l)){var d=u.memoizedProps;if(a=a.compare,a=a!==null?a:Qo,a(d,o)&&e.ref===t.ref)return pa(e,t,l)}return t.flags|=1,e=ua(u,o),e.ref=t.ref,e.return=t,t.child=e}function _m(e,t,a,o,l){if(e!==null){var u=e.memoizedProps;if(Qo(u,o)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=o=u,au(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,pa(e,t,l)}return Kl(e,t,a,o,l)}function Um(e,t,a,o){var l=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~u}else o=0,t.child=null;return Bm(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&us(t,u!==null?u.cachePool:null),u!==null?Hd(t,u):Dl(),Gd(t);else return o=t.lanes=536870912,Bm(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(us(t,u.cachePool),Hd(t,u),La(),t.memoizedState=null):(e!==null&&us(t,null),Dl(),La());return ot(e,t,l,a),t.child}function ni(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bm(e,t,a,o,l){var u=bl();return u=u===null?null:{parent:Pe._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&us(t,null),Dl(),Gd(t),e!==null&&Wn(e,t,o,!0),t.childLanes=l,null}function Ds(e,t){return t=Cs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lm(e,t,a){return Tn(t,e.child,null,a),e=Ds(t,t.pendingProps),e.flags|=2,Ct(t),t.memoizedState=null,e}function Cb(e,t,a){var o=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=Ds(t,o),t.lanes=536870912,ni(null,e);if(Cl(t),(e=Ve)?(e=Wh(e,Bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Ed(e),a.return=t,t.child=a,at=t,Ve=null)):e=null,e===null)throw Va(t);return t.lanes=536870912,null}return Ds(t,o)}var u=e.memoizedState;if(u!==null){var d=u.dehydrated;if(Cl(t),l)if(t.flags&256)t.flags&=-257,t=Lm(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Xe||Wn(e,t,a,!1),l=(a&e.childLanes)!==0,Xe||l){if(o=Re,o!==null&&(d=Of(o,a),d!==0&&d!==u.retryLane))throw u.retryLane=d,mn(e,d),St(o,e,d),Jl;_s(),t=Lm(e,t,a)}else e=u.treeContext,Ve=Ht(d.nextSibling),at=t,Se=!0,Na=null,Bt=!1,e!==null&&Dd(t,e),t=Ds(t,o),t.flags|=4096;return t}return e=ua(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ms(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Kl(e,t,a,o,l){return vn(t),a=Ol(e,t,a,o,void 0,l),o=Rl(),e!==null&&!Xe?(ql(e,t,l),pa(e,t,l)):(Se&&o&&cl(t),t.flags|=1,ot(e,t,a,l),t.child)}function Hm(e,t,a,o,l,u){return vn(t),t.updateQueue=null,a=Yd(t,o,a,l),Qd(e),o=Rl(),e!==null&&!Xe?(ql(e,t,u),pa(e,t,u)):(Se&&o&&cl(t),t.flags|=1,ot(e,t,a,u),t.child)}function Gm(e,t,a,o,l){if(vn(t),t.stateNode===null){var u=Zn,d=a.contextType;typeof d=="object"&&d!==null&&(u=nt(d)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Xl,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Tl(t),d=a.contextType,u.context=typeof d=="object"&&d!==null?nt(d):Zn,u.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(kl(t,a,d,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&Xl.enqueueReplaceState(u,u.state,null),$o(t,o,u,l),Wo(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,T=xn(a,v);u.props=T;var M=u.context,N=a.contextType;d=Zn,typeof N=="object"&&N!==null&&(d=nt(N));var w=a.getDerivedStateFromProps;N=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||M!==d)&&Cm(t,u,o,d),ja=!1;var z=t.memoizedState;u.state=z,$o(t,o,u,l),Wo(),M=t.memoizedState,v||z!==M||ja?(typeof w=="function"&&(kl(t,a,w,o),M=t.memoizedState),(T=ja||Mm(t,a,T,o,z,M,d))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=M),u.props=o,u.state=M,u.context=d,o=T):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,El(e,t),d=t.memoizedProps,N=xn(a,d),u.props=N,w=t.pendingProps,z=u.context,M=a.contextType,T=Zn,typeof M=="object"&&M!==null&&(T=nt(M)),v=a.getDerivedStateFromProps,(M=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==w||z!==T)&&Cm(t,u,o,T),ja=!1,z=t.memoizedState,u.state=z,$o(t,o,u,l),Wo();var O=t.memoizedState;d!==w||z!==O||ja||e!==null&&e.dependencies!==null&&rs(e.dependencies)?(typeof v=="function"&&(kl(t,a,v,o),O=t.memoizedState),(N=ja||Mm(t,a,N,o,z,O,T)||e!==null&&e.dependencies!==null&&rs(e.dependencies))?(M||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,O,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,O,T)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=O),u.props=o,u.state=O,u.context=T,o=N):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,Ms(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=Tn(t,e.child,null,l),t.child=Tn(t,null,a,l)):ot(e,t,a,l),t.memoizedState=u.state,e=t.child):e=pa(e,t,l),e}function Qm(e,t,a,o){return pn(),t.flags|=256,ot(e,t,a,o),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wl(e){return{baseLanes:e,cachePool:qd()}}function $l(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ot),e}function Ym(e,t,a){var o=t.pendingProps,l=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),d&&(l=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(l?Ba(t):La(),(e=Ve)?(e=Wh(e,Bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Ed(e),a.return=t,t.child=a,at=t,Ve=null)):e=null,e===null)throw Va(t);return wu(e)?t.lanes=32:t.lanes=536870912,null}var v=o.children;return o=o.fallback,l?(La(),l=t.mode,v=Cs({mode:"hidden",children:v},l),o=hn(o,l,a,null),v.return=t,o.return=t,v.sibling=o,t.child=v,o=t.child,o.memoizedState=Wl(a),o.childLanes=$l(e,d,a),t.memoizedState=Fl,ni(null,o)):(Ba(t),Il(t,v))}var T=e.memoizedState;if(T!==null&&(v=T.dehydrated,v!==null)){if(u)t.flags&256?(Ba(t),t.flags&=-257,t=eu(e,t,a)):t.memoizedState!==null?(La(),t.child=e.child,t.flags|=128,t=null):(La(),v=o.fallback,l=t.mode,o=Cs({mode:"visible",children:o.children},l),v=hn(v,l,a,null),v.flags|=2,o.return=t,v.return=t,o.sibling=v,t.child=o,Tn(t,e.child,null,a),o=t.child,o.memoizedState=Wl(a),o.childLanes=$l(e,d,a),t.memoizedState=Fl,t=ni(null,o));else if(Ba(t),wu(v)){if(d=v.nextSibling&&v.nextSibling.dataset,d)var M=d.dgst;d=M,o=Error(r(419)),o.stack="",o.digest=d,ko({value:o,source:null,stack:null}),t=eu(e,t,a)}else if(Xe||Wn(e,t,a,!1),d=(a&e.childLanes)!==0,Xe||d){if(d=Re,d!==null&&(o=Of(d,a),o!==0&&o!==T.retryLane))throw T.retryLane=o,mn(e,o),St(d,e,o),Jl;Vu(v)||_s(),t=eu(e,t,a)}else Vu(v)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Ve=Ht(v.nextSibling),at=t,Se=!0,Na=null,Bt=!1,e!==null&&Dd(t,e),t=Il(t,o.children),t.flags|=4096);return t}return l?(La(),v=o.fallback,l=t.mode,T=e.child,M=T.sibling,o=ua(T,{mode:"hidden",children:o.children}),o.subtreeFlags=T.subtreeFlags&65011712,M!==null?v=ua(M,v):(v=hn(v,l,a,null),v.flags|=2),v.return=t,o.return=t,o.sibling=v,t.child=o,ni(null,o),o=t.child,v=e.child.memoizedState,v===null?v=Wl(a):(l=v.cachePool,l!==null?(T=Pe._currentValue,l=l.parent!==T?{parent:T,pool:T}:l):l=qd(),v={baseLanes:v.baseLanes|a,cachePool:l}),o.memoizedState=v,o.childLanes=$l(e,d,a),t.memoizedState=Fl,ni(e.child,o)):(Ba(t),a=e.child,e=a.sibling,a=ua(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function Il(e,t){return t=Cs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Cs(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function eu(e,t,a){return Tn(t,e.child,null,a),e=Il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pm(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),pl(e.return,t,a)}function tu(e,t,a,o,l,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:l,treeForkCount:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=l,d.treeForkCount=u)}function km(e,t,a){var o=t.pendingProps,l=o.revealOrder,u=o.tail;o=o.children;var d=Qe.current,v=(d&2)!==0;if(v?(d=d&1|2,t.flags|=128):d&=1,Z(Qe,d),ot(e,t,o,a),o=Se?Po:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,a,t);else if(e.tag===19)Pm(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&ps(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),tu(t,!1,l,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ps(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}tu(t,!0,a,null,u,o);break;case"together":tu(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function pa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Wn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=ua(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ua(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function au(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rs(e)))}function zb(e,t,a){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),wa(t,Pe,e.memoizedState.cache),pn();break;case 27:case 5:Ma(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Cl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ym(e,t,a):(Ba(t),e=pa(e,t,a),e!==null?e.sibling:null);Ba(t);break;case 19:var l=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Wn(e,t,a,!1),o=(a&t.childLanes)!==0),l){if(o)return km(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(Qe,Qe.current),o)break;return null;case 22:return t.lanes=0,Um(e,t,a,t.pendingProps);case 24:wa(t,Pe,e.memoizedState.cache)}return pa(e,t,a)}function Xm(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!au(e,a)&&(t.flags&128)===0)return Xe=!1,zb(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,Se&&(t.flags&1048576)!==0&&Ad(t,Po,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=bn(t.elementType),t.type=e,typeof e=="function")rl(e)?(o=xn(e,o),t.tag=1,t=Gm(null,t,e,o,a)):(t.tag=0,t=Kl(null,t,e,o,a));else{if(e!=null){var l=e.$$typeof;if(l===J){t.tag=11,t=wm(null,t,e,o,a);break e}else if(l===F){t.tag=14,t=jm(null,t,e,o,a);break e}}throw t=rt(e)||e,Error(r(306,t,""))}}return t;case 0:return Kl(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,l=xn(o,t.pendingProps),Gm(e,t,o,l,a);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(r(387));o=t.pendingProps;var u=t.memoizedState;l=u.element,El(e,t),$o(t,o,null,a);var d=t.memoizedState;if(o=d.cache,wa(t,Pe,o),o!==u.cache&&gl(t,[Pe],a,!0),Wo(),o=d.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Qm(e,t,o,a);break e}else if(o!==l){l=jt(Error(r(424)),t),ko(l),t=Qm(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ve=Ht(e.firstChild),at=t,Se=!0,Na=null,Bt=!0,a=Ud(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(pn(),o===l){t=pa(e,t,a);break e}ot(e,t,o,a)}t=t.child}return t;case 26:return Ms(e,t),e===null?(a=np(t.type,null,t.pendingProps,null))?t.memoizedState=a:Se||(a=t.type,e=t.pendingProps,o=Ys(re.current).createElement(a),o[tt]=t,o[ht]=e,it(o,a,e),Ie(o),t.stateNode=o):t.memoizedState=np(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ma(t),e===null&&Se&&(o=t.stateNode=ep(t.type,t.pendingProps,re.current),at=t,Bt=!0,l=Ve,Za(t.type)?(ju=l,Ve=Ht(o.firstChild)):Ve=l),ot(e,t,t.pendingProps.children,a),Ms(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((l=o=Ve)&&(o=oS(o,t.type,t.pendingProps,Bt),o!==null?(t.stateNode=o,at=t,Ve=Ht(o.firstChild),Bt=!1,l=!0):l=!1),l||Va(t)),Ma(t),l=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,o=u.children,Ru(l,u)?o=null:d!==null&&Ru(l,d)&&(t.flags|=32),t.memoizedState!==null&&(l=Ol(e,t,bb,null,null,a),yi._currentValue=l),Ms(e,t),ot(e,t,o,a),t.child;case 6:return e===null&&Se&&((e=a=Ve)&&(a=iS(a,t.pendingProps,Bt),a!==null?(t.stateNode=a,at=t,Ve=null,e=!0):e=!1),e||Va(t)),null;case 13:return Ym(e,t,a);case 4:return $e(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Tn(t,null,o,a):ot(e,t,o,a),t.child;case 11:return wm(e,t,t.type,t.pendingProps,a);case 7:return ot(e,t,t.pendingProps,a),t.child;case 8:return ot(e,t,t.pendingProps.children,a),t.child;case 12:return ot(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,wa(t,t.type,o.value),ot(e,t,o.children,a),t.child;case 9:return l=t.type._context,o=t.pendingProps.children,vn(t),l=nt(l),o=o(l),t.flags|=1,ot(e,t,o,a),t.child;case 14:return jm(e,t,t.type,t.pendingProps,a);case 15:return _m(e,t,t.type,t.pendingProps,a);case 19:return km(e,t,a);case 31:return Cb(e,t,a);case 22:return Um(e,t,a,t.pendingProps);case 24:return vn(t),o=nt(Pe),e===null?(l=bl(),l===null&&(l=Re,u=vl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),t.memoizedState={parent:o,cache:l},Tl(t),wa(t,Pe,l)):((e.lanes&a)!==0&&(El(e,t),$o(t,null,null,a),Wo()),l=e.memoizedState,u=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),wa(t,Pe,o)):(o=u.cache,wa(t,Pe,o),o!==l.cache&&gl(t,[Pe],a,!0))),ot(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function ga(e){e.flags|=4}function nu(e,t,a,o,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(bh())e.flags|=8192;else throw Sn=fs,Sl}else e.flags&=-16777217}function Zm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lp(t))if(bh())e.flags|=8192;else throw Sn=fs,Sl}function zs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Mf():536870912,e.lanes|=t,uo|=t)}function oi(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function Ob(e,t,a){var o=t.pendingProps;switch(fl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),da(Pe),me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fn(t)?ga(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ml())),we(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(ga(t),u!==null?(we(t),Zm(t,u)):(we(t),nu(t,l,null,o,a))):u?u!==e.memoizedState?(ga(t),we(t),Zm(t,u)):(we(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&ga(t),we(t),nu(t,l,e,o,a)),null;case 27:if(ia(t),a=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ga(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return we(t),null}e=K.current,Fn(t)?Md(t):(e=ep(l,o,a),t.stateNode=e,ga(t))}return we(t),null;case 5:if(ia(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ga(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return we(t),null}if(u=K.current,Fn(t))Md(t);else{var d=Ys(re.current);switch(u){case 1:u=d.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=d.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=d.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?d.createElement("select",{is:o.is}):d.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?d.createElement(l,{is:o.is}):d.createElement(l)}}u[tt]=t,u[ht]=o;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)u.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=u;e:switch(it(u,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ga(t)}}return we(t),nu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&ga(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(r(166));if(e=re.current,Fn(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,l=at,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}e[tt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Yh(e.nodeValue,a)),e||Va(t,!0)}else e=Ys(e).createTextNode(o),e[tt]=t,t.stateNode=e}return we(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Fn(t),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[tt]=t}else pn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),e=!1}else a=ml(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ct(t),t):(Ct(t),null);if((t.flags&128)!==0)throw Error(r(558))}return we(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Fn(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[tt]=t}else pn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),l=!1}else l=ml(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ct(t),t):(Ct(t),null)}return Ct(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),zs(t,t.updateQueue),we(t),null);case 4:return me(),e===null&&Du(t.stateNode.containerInfo),we(t),null;case 10:return da(t.type),we(t),null;case 19:if(j(Qe),o=t.memoizedState,o===null)return we(t),null;if(l=(t.flags&128)!==0,u=o.rendering,u===null)if(l)oi(o,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ps(e),u!==null){for(t.flags|=128,oi(o,!1),e=u.updateQueue,t.updateQueue=e,zs(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Td(a,e),a=a.sibling;return Z(Qe,Qe.current&1|2),Se&&ca(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Tt()>Vs&&(t.flags|=128,l=!0,oi(o,!1),t.lanes=4194304)}else{if(!l)if(e=ps(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,zs(t,e),oi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Se)return we(t),null}else 2*Tt()-o.renderingStartTime>Vs&&a!==536870912&&(t.flags|=128,l=!0,oi(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Tt(),e.sibling=null,a=Qe.current,Z(Qe,l?a&1|2:a&1),Se&&ca(t,o.treeForkCount),e):(we(t),null);case 22:case 23:return Ct(t),Ml(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),a=t.updateQueue,a!==null&&zs(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&j(yn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),da(Pe),we(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Rb(e,t){switch(fl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return da(Pe),me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ia(t),null;case 31:if(t.memoizedState!==null){if(Ct(t),t.alternate===null)throw Error(r(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(Qe),null;case 4:return me(),null;case 10:return da(t.type),null;case 22:case 23:return Ct(t),Ml(),e!==null&&j(yn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return da(Pe),null;case 25:return null;default:return null}}function Jm(e,t){switch(fl(t),t.tag){case 3:da(Pe),me();break;case 26:case 27:case 5:ia(t);break;case 4:me();break;case 31:t.memoizedState!==null&&Ct(t);break;case 13:Ct(t);break;case 19:j(Qe);break;case 10:da(t.type);break;case 22:case 23:Ct(t),Ml(),e!==null&&j(yn);break;case 24:da(Pe)}}function ii(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var l=o.next;a=l;do{if((a.tag&e)===e){o=void 0;var u=a.create,d=a.inst;o=u(),d.destroy=o}a=a.next}while(a!==l)}}catch(v){Me(t,t.return,v)}}function Ha(e,t,a){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&e)===e){var d=o.inst,v=d.destroy;if(v!==void 0){d.destroy=void 0,l=t;var T=a,M=v;try{M()}catch(N){Me(l,T,N)}}}o=o.next}while(o!==u)}}catch(N){Me(t,t.return,N)}}function Km(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ld(t,a)}catch(o){Me(e,e.return,o)}}}function Fm(e,t,a){a.props=xn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Me(e,t,o)}}function si(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(l){Me(e,t,l)}}function ea(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(l){Me(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Me(e,t,l)}else a.current=null}function Wm(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(l){Me(e,e.return,l)}}function ou(e,t,a){try{var o=e.stateNode;$b(o,e.type,a,t),o[ht]=t}catch(l){Me(e,e.return,l)}}function $m(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function su(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ra));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(su(e,t,a),e=e.sibling;e!==null;)su(e,t,a),e=e.sibling}function Os(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Os(e,t,a),e=e.sibling;e!==null;)Os(e,t,a),e=e.sibling}function Im(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);it(t,o,a),t[tt]=e,t[ht]=a}catch(u){Me(e,e.return,u)}}var va=!1,Ze=!1,ru=!1,eh=typeof WeakSet=="function"?WeakSet:Set,et=null;function qb(e,t){if(e=e.containerInfo,zu=Fs,e=dd(e),el(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var d=0,v=-1,T=-1,M=0,N=0,w=e,z=null;t:for(;;){for(var O;w!==a||l!==0&&w.nodeType!==3||(v=d+l),w!==u||o!==0&&w.nodeType!==3||(T=d+o),w.nodeType===3&&(d+=w.nodeValue.length),(O=w.firstChild)!==null;)z=w,w=O;for(;;){if(w===e)break t;if(z===a&&++M===l&&(v=d),z===u&&++N===o&&(T=d),(O=w.nextSibling)!==null)break;w=z,z=w.parentNode}w=O}a=v===-1||T===-1?null:{start:v,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ou={focusedElem:e,selectionRange:a},Fs=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,l=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var $=xn(a.type,l);e=o.getSnapshotBeforeUpdate($,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(le){Me(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Nu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function th(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),o&4&&ii(5,a);break;case 1:if(ba(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Me(a,a.return,d)}else{var l=xn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Me(a,a.return,d)}}o&64&&Km(a),o&512&&si(a,a.return);break;case 3:if(ba(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ld(e,t)}catch(d){Me(a,a.return,d)}}break;case 27:t===null&&o&4&&Im(a);case 26:case 5:ba(e,a),t===null&&o&4&&Wm(a),o&512&&si(a,a.return);break;case 12:ba(e,a);break;case 31:ba(e,a),o&4&&oh(e,a);break;case 13:ba(e,a),o&4&&ih(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Hb.bind(null,a),sS(e,a))));break;case 22:if(o=a.memoizedState!==null||va,!o){t=t!==null&&t.memoizedState!==null||Ze,l=va;var u=Ze;va=o,(Ze=t)&&!u?Sa(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),va=l,Ze=u}break;case 30:break;default:ba(e,a)}}function ah(e){var t=e.alternate;t!==null&&(e.alternate=null,ah(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ur(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,gt=!1;function ya(e,t,a){for(a=a.child;a!==null;)nh(e,t,a),a=a.sibling}function nh(e,t,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ro,a)}catch{}switch(a.tag){case 26:Ze||ea(a,t),ya(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||ea(a,t);var o=_e,l=gt;Za(a.type)&&(_e=a.stateNode,gt=!1),ya(e,t,a),pi(a.stateNode),_e=o,gt=l;break;case 5:Ze||ea(a,t);case 6:if(o=_e,l=gt,_e=null,ya(e,t,a),_e=o,gt=l,_e!==null)if(gt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(a.stateNode)}catch(u){Me(a,t,u)}else try{_e.removeChild(a.stateNode)}catch(u){Me(a,t,u)}break;case 18:_e!==null&&(gt?(e=_e,Kh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yo(e)):Kh(_e,a.stateNode));break;case 4:o=_e,l=gt,_e=a.stateNode.containerInfo,gt=!0,ya(e,t,a),_e=o,gt=l;break;case 0:case 11:case 14:case 15:Ha(2,a,t),Ze||Ha(4,a,t),ya(e,t,a);break;case 1:Ze||(ea(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Fm(a,t,o)),ya(e,t,a);break;case 21:ya(e,t,a);break;case 22:Ze=(o=Ze)||a.memoizedState!==null,ya(e,t,a),Ze=o;break;default:ya(e,t,a)}}function oh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yo(e)}catch(a){Me(t,t.return,a)}}}function ih(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yo(e)}catch(a){Me(t,t.return,a)}}function Nb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new eh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new eh),t;default:throw Error(r(435,e.tag))}}function Rs(e,t){var a=Nb(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var l=Gb.bind(null,e,o);o.then(l,l)}})}function vt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var l=a[o],u=e,d=t,v=d;e:for(;v!==null;){switch(v.tag){case 27:if(Za(v.type)){_e=v.stateNode,gt=!1;break e}break;case 5:_e=v.stateNode,gt=!1;break e;case 3:case 4:_e=v.stateNode.containerInfo,gt=!0;break e}v=v.return}if(_e===null)throw Error(r(160));nh(u,d,l),_e=null,gt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sh(t,e),t=t.sibling}var kt=null;function sh(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),yt(e),o&4&&(Ha(3,e,e.return),ii(3,e),Ha(5,e,e.return));break;case 1:vt(t,e),yt(e),o&512&&(Ze||a===null||ea(a,a.return)),o&64&&va&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var l=kt;if(vt(t,e),yt(e),o&512&&(Ze||a===null||ea(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[Vo]||u[tt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),it(u,o,a),u[tt]=e,Ie(u),o=u;break e;case"link":var d=sp("link","href",l).get(o+(a.href||""));if(d){for(var v=0;v<d.length;v++)if(u=d[v],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(v,1);break t}}u=l.createElement(o),it(u,o,a),l.head.appendChild(u);break;case"meta":if(d=sp("meta","content",l).get(o+(a.content||""))){for(v=0;v<d.length;v++)if(u=d[v],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(v,1);break t}}u=l.createElement(o),it(u,o,a),l.head.appendChild(u);break;default:throw Error(r(468,o))}u[tt]=e,Ie(u),o=u}e.stateNode=o}else rp(l,e.type,e.stateNode);else e.stateNode=ip(l,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?rp(l,e.type,e.stateNode):ip(l,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ou(e,e.memoizedProps,a.memoizedProps)}break;case 27:vt(t,e),yt(e),o&512&&(Ze||a===null||ea(a,a.return)),a!==null&&o&4&&ou(e,e.memoizedProps,a.memoizedProps);break;case 5:if(vt(t,e),yt(e),o&512&&(Ze||a===null||ea(a,a.return)),e.flags&32){l=e.stateNode;try{Hn(l,"")}catch($){Me(e,e.return,$)}}o&4&&e.stateNode!=null&&(l=e.memoizedProps,ou(e,l,a!==null?a.memoizedProps:l)),o&1024&&(ru=!0);break;case 6:if(vt(t,e),yt(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch($){Me(e,e.return,$)}}break;case 3:if(Xs=null,l=kt,kt=Ps(t.containerInfo),vt(t,e),kt=l,yt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch($){Me(e,e.return,$)}ru&&(ru=!1,rh(e));break;case 4:o=kt,kt=Ps(e.stateNode.containerInfo),vt(t,e),yt(e),kt=o;break;case 12:vt(t,e),yt(e);break;case 31:vt(t,e),yt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rs(e,o)));break;case 13:vt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ns=Tt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rs(e,o)));break;case 22:l=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,M=va,N=Ze;if(va=M||l,Ze=N||T,vt(t,e),Ze=N,va=M,yt(e),o&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||T||va||Ze||An(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){T=a=t;try{if(u=T.stateNode,l)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=T.stateNode;var w=T.memoizedProps.style,z=w!=null&&w.hasOwnProperty("display")?w.display:null;v.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch($){Me(T,T.return,$)}}}else if(t.tag===6){if(a===null){T=t;try{T.stateNode.nodeValue=l?"":T.memoizedProps}catch($){Me(T,T.return,$)}}}else if(t.tag===18){if(a===null){T=t;try{var O=T.stateNode;l?Fh(O,!0):Fh(T.stateNode,!1)}catch($){Me(T,T.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Rs(e,a))));break;case 19:vt(t,e),yt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rs(e,o)));break;case 30:break;case 21:break;default:vt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if($m(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var l=a.stateNode,u=iu(e);Os(e,u,l);break;case 5:var d=a.stateNode;a.flags&32&&(Hn(d,""),a.flags&=-33);var v=iu(e);Os(e,v,d);break;case 3:case 4:var T=a.stateNode.containerInfo,M=iu(e);su(e,M,T);break;default:throw Error(r(161))}}catch(N){Me(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)th(e,t.alternate,t),t=t.sibling}function An(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ha(4,t,t.return),An(t);break;case 1:ea(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Fm(t,t.return,a),An(t);break;case 27:pi(t.stateNode);case 26:case 5:ea(t,t.return),An(t);break;case 22:t.memoizedState===null&&An(t);break;case 30:An(t);break;default:An(t)}e=e.sibling}}function Sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,l=e,u=t,d=u.flags;switch(u.tag){case 0:case 11:case 15:Sa(l,u,a),ii(4,u);break;case 1:if(Sa(l,u,a),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(M){Me(o,o.return,M)}if(o=u,l=o.updateQueue,l!==null){var v=o.stateNode;try{var T=l.shared.hiddenCallbacks;if(T!==null)for(l.shared.hiddenCallbacks=null,l=0;l<T.length;l++)Bd(T[l],v)}catch(M){Me(o,o.return,M)}}a&&d&64&&Km(u),si(u,u.return);break;case 27:Im(u);case 26:case 5:Sa(l,u,a),a&&o===null&&d&4&&Wm(u),si(u,u.return);break;case 12:Sa(l,u,a);break;case 31:Sa(l,u,a),a&&d&4&&oh(l,u);break;case 13:Sa(l,u,a),a&&d&4&&ih(l,u);break;case 22:u.memoizedState===null&&Sa(l,u,a),si(u,u.return);break;case 30:break;default:Sa(l,u,a)}t=t.sibling}}function lu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xo(a))}function uu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xo(e))}function Xt(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)lh(e,t,a,o),t=t.sibling}function lh(e,t,a,o){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,a,o),l&2048&&ii(9,t);break;case 1:Xt(e,t,a,o);break;case 3:Xt(e,t,a,o),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xo(e)));break;case 12:if(l&2048){Xt(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,d=u.id,v=u.onPostCommit;typeof v=="function"&&v(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Me(t,t.return,T)}}else Xt(e,t,a,o);break;case 31:Xt(e,t,a,o);break;case 13:Xt(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,d=t.alternate,t.memoizedState!==null?u._visibility&2?Xt(e,t,a,o):ri(e,t):u._visibility&2?Xt(e,t,a,o):(u._visibility|=2,so(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),l&2048&&lu(d,t);break;case 24:Xt(e,t,a,o),l&2048&&uu(t.alternate,t);break;default:Xt(e,t,a,o)}}function so(e,t,a,o,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,d=t,v=a,T=o,M=d.flags;switch(d.tag){case 0:case 11:case 15:so(u,d,v,T,l),ii(8,d);break;case 23:break;case 22:var N=d.stateNode;d.memoizedState!==null?N._visibility&2?so(u,d,v,T,l):ri(u,d):(N._visibility|=2,so(u,d,v,T,l)),l&&M&2048&&lu(d.alternate,d);break;case 24:so(u,d,v,T,l),l&&M&2048&&uu(d.alternate,d);break;default:so(u,d,v,T,l)}t=t.sibling}}function ri(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,l=o.flags;switch(o.tag){case 22:ri(a,o),l&2048&&lu(o.alternate,o);break;case 24:ri(a,o),l&2048&&uu(o.alternate,o);break;default:ri(a,o)}t=t.sibling}}var li=8192;function ro(e,t,a){if(e.subtreeFlags&li)for(e=e.child;e!==null;)uh(e,t,a),e=e.sibling}function uh(e,t,a){switch(e.tag){case 26:ro(e,t,a),e.flags&li&&e.memoizedState!==null&&yS(a,kt,e.memoizedState,e.memoizedProps);break;case 5:ro(e,t,a);break;case 3:case 4:var o=kt;kt=Ps(e.stateNode.containerInfo),ro(e,t,a),kt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=li,li=16777216,ro(e,t,a),li=o):ro(e,t,a));break;default:ro(e,t,a)}}function ch(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];et=o,dh(o,e)}ch(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fh(e),e=e.sibling}function fh(e){switch(e.tag){case 0:case 11:case 15:ui(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:ui(e);break;case 12:ui(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qs(e)):ui(e);break;default:ui(e)}}function qs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];et=o,dh(o,e)}ch(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ha(8,t,t.return),qs(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,qs(t));break;default:qs(t)}e=e.sibling}}function dh(e,t){for(;et!==null;){var a=et;switch(a.tag){case 0:case 11:case 15:Ha(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Xo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,et=o;else e:for(a=e;et!==null;){o=et;var l=o.sibling,u=o.return;if(ah(o),o===a){et=null;break e}if(l!==null){l.return=u,et=l;break e}et=u}}}var Vb={getCacheForType:function(e){var t=nt(Pe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return nt(Pe).controller.signal}},wb=typeof WeakMap=="function"?WeakMap:Map,xe=0,Re=null,pe=null,ve=0,De=0,zt=null,Ga=!1,lo=!1,cu=!1,Ta=0,Le=0,Qa=0,Dn=0,fu=0,Ot=0,uo=0,ci=null,bt=null,du=!1,Ns=0,mh=0,Vs=1/0,ws=null,Ya=null,Ke=0,Pa=null,co=null,Ea=0,mu=0,hu=null,hh=null,fi=0,pu=null;function Rt(){return(xe&2)!==0&&ve!==0?ve&-ve:q.T!==null?Tu():Rf()}function ph(){if(Ot===0)if((ve&536870912)===0||Se){var e=Qi;Qi<<=1,(Qi&3932160)===0&&(Qi=262144),Ot=e}else Ot=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Ot}function St(e,t,a){(e===Re&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(fo(e,0),ka(e,ve,Ot,!1)),No(e,a),((xe&2)===0||e!==Re)&&(e===Re&&((xe&2)===0&&(Dn|=a),Le===4&&ka(e,ve,Ot,!1)),ta(e))}function gh(e,t,a){if((xe&6)!==0)throw Error(r(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||qo(e,t),l=o?Ub(e,t):vu(e,t,!0),u=o;do{if(l===0){lo&&!o&&ka(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!jb(a)){l=vu(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var v=e;l=ci;var T=v.current.memoizedState.isDehydrated;if(T&&(fo(v,d).flags|=256),d=vu(v,d,!1),d!==2){if(cu&&!T){v.errorRecoveryDisabledLanes|=u,Dn|=u,l=4;break e}u=bt,bt=l,u!==null&&(bt===null?bt=u:bt.push.apply(bt,u))}l=d}if(u=!1,l!==2)continue}}if(l===1){fo(e,0),ka(e,t,0,!0);break}e:{switch(o=e,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:ka(o,t,Ot,!Ga);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(l=Ns+300-Tt(),10<l)){if(ka(o,t,Ot,!Ga),Pi(o,0,!0)!==0)break e;Ea=t,o.timeoutHandle=Zh(vh.bind(null,o,a,bt,ws,du,t,Ot,Dn,uo,Ga,u,"Throttled",-0,0),l);break e}vh(o,a,bt,ws,du,t,Ot,Dn,uo,Ga,u,null,-0,0)}}break}while(!0);ta(e)}function vh(e,t,a,o,l,u,d,v,T,M,N,w,z,O){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},uh(t,u,w);var $=(u&62914560)===u?Ns-Tt():(u&4194048)===u?mh-Tt():0;if($=bS(w,$),$!==null){Ea=u,e.cancelPendingCommit=$(Dh.bind(null,e,t,u,a,o,l,d,v,T,N,w,null,z,O)),ka(e,u,d,!M);return}}Dh(e,t,u,a,o,l,d,v,T)}function jb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var l=a[o],u=l.getSnapshot;l=l.value;try{if(!At(u(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t,a,o){t&=~fu,t&=~Dn,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var u=31-xt(l),d=1<<u;o[u]=-1,l&=~d}a!==0&&Cf(e,a,t)}function js(){return(xe&6)===0?(di(0),!1):!0}function gu(){if(pe!==null){if(De===0)var e=pe.return;else e=pe,fa=gn=null,Nl(e),to=null,Jo=0,e=pe;for(;e!==null;)Jm(e.alternate,e),e=e.return;pe=null}}function fo(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,tS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,gu(),Re=e,pe=a=ua(e.current,null),ve=t,De=0,zt=null,Ga=!1,lo=qo(e,t),cu=!1,uo=Ot=fu=Dn=Qa=Le=0,bt=ci=null,du=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var l=31-xt(o),u=1<<l;t|=e[l],o&=~u}return Ta=t,as(),a}function yh(e,t){ce=null,q.H=ai,t===eo||t===cs?(t=wd(),De=3):t===Sl?(t=wd(),De=4):De=t===Jl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zt=t,pe===null&&(Le=1,As(e,jt(t,e.current)))}function bh(){var e=Mt.current;return e===null?!0:(ve&4194048)===ve?Lt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Lt:!1}function Sh(){var e=q.H;return q.H=ai,e===null?ai:e}function Th(){var e=q.A;return q.A=Vb,e}function _s(){Le=4,Ga||(ve&4194048)!==ve&&Mt.current!==null||(lo=!0),(Qa&134217727)===0&&(Dn&134217727)===0||Re===null||ka(Re,ve,Ot,!1)}function vu(e,t,a){var o=xe;xe|=2;var l=Sh(),u=Th();(Re!==e||ve!==t)&&(ws=null,fo(e,t)),t=!1;var d=Le;e:do try{if(De!==0&&pe!==null){var v=pe,T=zt;switch(De){case 8:gu(),d=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var M=De;if(De=0,zt=null,mo(e,v,T,M),a&&lo){d=0;break e}break;default:M=De,De=0,zt=null,mo(e,v,T,M)}}_b(),d=Le;break}catch(N){yh(e,N)}while(!0);return t&&e.shellSuspendCounter++,fa=gn=null,xe=o,q.H=l,q.A=u,pe===null&&(Re=null,ve=0,as()),d}function _b(){for(;pe!==null;)Eh(pe)}function Ub(e,t){var a=xe;xe|=2;var o=Sh(),l=Th();Re!==e||ve!==t?(ws=null,Vs=Tt()+500,fo(e,t)):lo=qo(e,t);e:do try{if(De!==0&&pe!==null){t=pe;var u=zt;t:switch(De){case 1:De=0,zt=null,mo(e,t,u,1);break;case 2:case 9:if(Nd(u)){De=0,zt=null,xh(t);break}t=function(){De!==2&&De!==9||Re!==e||(De=7),ta(e)},u.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:Nd(u)?(De=0,zt=null,xh(t)):(De=0,zt=null,mo(e,t,u,7));break;case 5:var d=null;switch(pe.tag){case 26:d=pe.memoizedState;case 5:case 27:var v=pe;if(d?lp(d):v.stateNode.complete){De=0,zt=null;var T=v.sibling;if(T!==null)pe=T;else{var M=v.return;M!==null?(pe=M,Us(M)):pe=null}break t}}De=0,zt=null,mo(e,t,u,5);break;case 6:De=0,zt=null,mo(e,t,u,6);break;case 8:gu(),Le=6;break e;default:throw Error(r(462))}}Bb();break}catch(N){yh(e,N)}while(!0);return fa=gn=null,q.H=o,q.A=l,xe=a,pe!==null?0:(Re=null,ve=0,as(),Le)}function Bb(){for(;pe!==null&&!r0();)Eh(pe)}function Eh(e){var t=Xm(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,t===null?Us(e):pe=t}function xh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Hm(a,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=Hm(a,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:Nl(t);default:Jm(a,t),t=pe=Td(t,Ta),t=Xm(a,t,Ta)}e.memoizedProps=e.pendingProps,t===null?Us(e):pe=t}function mo(e,t,a,o){fa=gn=null,Nl(t),to=null,Jo=0;var l=t.return;try{if(Mb(e,l,t,a,ve)){Le=1,As(e,jt(a,e.current)),pe=null;return}}catch(u){if(l!==null)throw pe=l,u;Le=1,As(e,jt(a,e.current)),pe=null;return}t.flags&32768?(Se||o===1?e=!0:lo||(ve&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=Mt.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ah(t,e)):Us(t)}function Us(e){var t=e;do{if((t.flags&32768)!==0){Ah(t,Ga);return}e=t.return;var a=Ob(t.alternate,t,Ta);if(a!==null){pe=a;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);Le===0&&(Le=5)}function Ah(e,t){do{var a=Rb(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Le=6,pe=null}function Dh(e,t,a,o,l,u,d,v,T){e.cancelPendingCommit=null;do Bs();while(Ke!==0);if((xe&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=il,v0(e,a,u,d,v,T),e===Re&&(pe=Re=null,ve=0),co=t,Pa=e,Ea=a,mu=u,hu=l,hh=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qb(Hi,function(){return Rh(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=q.T,q.T=null,l=H.p,H.p=2,d=xe,xe|=4;try{qb(e,t,a)}finally{xe=d,H.p=l,q.T=o}}Ke=1,Mh(),Ch(),zh()}}function Mh(){if(Ke===1){Ke=0;var e=Pa,t=co,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var o=H.p;H.p=2;var l=xe;xe|=4;try{sh(t,e);var u=Ou,d=dd(e.containerInfo),v=u.focusedElem,T=u.selectionRange;if(d!==v&&v&&v.ownerDocument&&fd(v.ownerDocument.documentElement,v)){if(T!==null&&el(v)){var M=T.start,N=T.end;if(N===void 0&&(N=M),"selectionStart"in v)v.selectionStart=M,v.selectionEnd=Math.min(N,v.value.length);else{var w=v.ownerDocument||document,z=w&&w.defaultView||window;if(z.getSelection){var O=z.getSelection(),$=v.textContent.length,le=Math.min(T.start,$),Oe=T.end===void 0?le:Math.min(T.end,$);!O.extend&&le>Oe&&(d=Oe,Oe=le,le=d);var A=cd(v,le),E=cd(v,Oe);if(A&&E&&(O.rangeCount!==1||O.anchorNode!==A.node||O.anchorOffset!==A.offset||O.focusNode!==E.node||O.focusOffset!==E.offset)){var D=w.createRange();D.setStart(A.node,A.offset),O.removeAllRanges(),le>Oe?(O.addRange(D),O.extend(E.node,E.offset)):(D.setEnd(E.node,E.offset),O.addRange(D))}}}}for(w=[],O=v;O=O.parentNode;)O.nodeType===1&&w.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<w.length;v++){var V=w[v];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Fs=!!zu,Ou=zu=null}finally{xe=l,H.p=o,q.T=a}}e.current=t,Ke=2}}function Ch(){if(Ke===2){Ke=0;var e=Pa,t=co,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=q.T,q.T=null;var o=H.p;H.p=2;var l=xe;xe|=4;try{th(e,t.alternate,t)}finally{xe=l,H.p=o,q.T=a}}Ke=3}}function zh(){if(Ke===4||Ke===3){Ke=0,l0();var e=Pa,t=co,a=Ea,o=hh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,co=Pa=null,Oh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ya=null),jr(a),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ro,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=q.T,l=H.p,H.p=2,q.T=null;try{for(var u=e.onRecoverableError,d=0;d<o.length;d++){var v=o[d];u(v.value,{componentStack:v.stack})}}finally{q.T=t,H.p=l}}(Ea&3)!==0&&Bs(),ta(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===pu?fi++:(fi=0,pu=e):fi=0,di(0)}}function Oh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xo(t)))}function Bs(){return Mh(),Ch(),zh(),Rh()}function Rh(){if(Ke!==5)return!1;var e=Pa,t=mu;mu=0;var a=jr(Ea),o=q.T,l=H.p;try{H.p=32>a?32:a,q.T=null,a=hu,hu=null;var u=Pa,d=Ea;if(Ke=0,co=Pa=null,Ea=0,(xe&6)!==0)throw Error(r(331));var v=xe;if(xe|=4,fh(u.current),lh(u,u.current,d,a),xe=v,di(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ro,u)}catch{}return!0}finally{H.p=l,q.T=o,Oh(e,t)}}function qh(e,t,a){t=jt(a,t),t=Zl(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&(No(e,2),ta(e))}function Me(e,t,a){if(e.tag===3)qh(e,e,a);else for(;t!==null;){if(t.tag===3){qh(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){e=jt(a,e),a=Nm(2),o=Ua(t,a,2),o!==null&&(Vm(a,o,t,e),No(o,2),ta(o));break}}t=t.return}}function yu(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new wb;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(a)||(cu=!0,l.add(a),e=Lb.bind(null,e,t,a),t.then(e,e))}function Lb(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Re===e&&(ve&a)===a&&(Le===4||Le===3&&(ve&62914560)===ve&&300>Tt()-Ns?(xe&2)===0&&fo(e,0):fu|=a,uo===ve&&(uo=0)),ta(e)}function Nh(e,t){t===0&&(t=Mf()),e=mn(e,t),e!==null&&(No(e,t),ta(e))}function Hb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Nh(e,a)}function Gb(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(t),Nh(e,a)}function Qb(e,t){return qr(e,t)}var Ls=null,ho=null,bu=!1,Hs=!1,Su=!1,Xa=0;function ta(e){e!==ho&&e.next===null&&(ho===null?Ls=ho=e:ho=ho.next=e),Hs=!0,bu||(bu=!0,Pb())}function di(e,t){if(!Su&&Hs){Su=!0;do for(var a=!1,o=Ls;o!==null;){if(e!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var d=o.suspendedLanes,v=o.pingedLanes;u=(1<<31-xt(42|e)+1)-1,u&=l&~(d&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,_h(o,u))}else u=ve,u=Pi(o,o===Re?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||qo(o,u)||(a=!0,_h(o,u));o=o.next}while(a);Su=!1}}function Yb(){Vh()}function Vh(){Hs=bu=!1;var e=0;Xa!==0&&eS()&&(e=Xa);for(var t=Tt(),a=null,o=Ls;o!==null;){var l=o.next,u=wh(o,t);u===0?(o.next=null,a===null?Ls=l:a.next=l,l===null&&(ho=a)):(a=o,(e!==0||(u&3)!==0)&&(Hs=!0)),o=l}Ke!==0&&Ke!==5||di(e),Xa!==0&&(Xa=0)}function wh(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var d=31-xt(u),v=1<<d,T=l[d];T===-1?((v&a)===0||(v&o)!==0)&&(l[d]=g0(v,t)):T<=t&&(e.expiredLanes|=v),u&=~v}if(t=Re,a=ve,a=Pi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Nr(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||qo(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Nr(o),jr(a)){case 2:case 8:a=Af;break;case 32:a=Hi;break;case 268435456:a=Df;break;default:a=Hi}return o=jh.bind(null,e),a=qr(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Nr(o),e.callbackPriority=2,e.callbackNode=null,2}function jh(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bs()&&e.callbackNode!==a)return null;var o=ve;return o=Pi(e,e===Re?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(gh(e,o,t),wh(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?jh.bind(null,e):null)}function _h(e,t){if(Bs())return null;gh(e,t,!0)}function Pb(){aS(function(){(xe&6)!==0?qr(xf,Yb):Vh()})}function Tu(){if(Xa===0){var e=$n;e===0&&(e=Gi,Gi<<=1,(Gi&261888)===0&&(Gi=256)),Xa=e}return Xa}function Uh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ji(""+e)}function Bh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function kb(e,t,a,o,l){if(t==="submit"&&a&&a.stateNode===l){var u=Uh((l[ht]||null).action),d=o.submitter;d&&(t=(t=d[ht]||null)?Uh(t.formAction):d.getAttribute("formAction"),t!==null&&(u=t,d=null));var v=new $i("action","action",null,o,l);e.push({event:v,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var T=d?Bh(l,d):new FormData(l);Gl(a,{pending:!0,data:T,method:l.method,action:u},null,T)}}else typeof u=="function"&&(v.preventDefault(),T=d?Bh(l,d):new FormData(l),Gl(a,{pending:!0,data:T,method:l.method,action:u},u,T))},currentTarget:l}]})}}for(var Eu=0;Eu<ol.length;Eu++){var xu=ol[Eu],Xb=xu.toLowerCase(),Zb=xu[0].toUpperCase()+xu.slice(1);Pt(Xb,"on"+Zb)}Pt(pd,"onAnimationEnd"),Pt(gd,"onAnimationIteration"),Pt(vd,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(ub,"onTransitionRun"),Pt(cb,"onTransitionStart"),Pt(fb,"onTransitionCancel"),Pt(yd,"onTransitionEnd"),Bn("onMouseEnter",["mouseout","mouseover"]),Bn("onMouseLeave",["mouseout","mouseover"]),Bn("onPointerEnter",["pointerout","pointerover"]),Bn("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mi));function Lh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var d=o.length-1;0<=d;d--){var v=o[d],T=v.instance,M=v.currentTarget;if(v=v.listener,T!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=M;try{u(l)}catch(N){ts(N)}l.currentTarget=null,u=T}else for(d=0;d<o.length;d++){if(v=o[d],T=v.instance,M=v.currentTarget,v=v.listener,T!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=M;try{u(l)}catch(N){ts(N)}l.currentTarget=null,u=T}}}}function ge(e,t){var a=t[_r];a===void 0&&(a=t[_r]=new Set);var o=e+"__bubble";a.has(o)||(Hh(t,e,2,!1),a.add(o))}function Au(e,t,a){var o=0;t&&(o|=4),Hh(a,e,o,t)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function Du(e){if(!e[Gs]){e[Gs]=!0,Vf.forEach(function(a){a!=="selectionchange"&&(Jb.has(a)||Au(a,!1,e),Au(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gs]||(t[Gs]=!0,Au("selectionchange",!1,t))}}function Hh(e,t,a,o){switch(pp(t)){case 2:var l=ES;break;case 8:l=xS;break;default:l=Hu}a=l.bind(null,t,a,e),l=void 0,!kr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Mu(e,t,a,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var v=o.stateNode.containerInfo;if(v===l)break;if(d===4)for(d=o.return;d!==null;){var T=d.tag;if((T===3||T===4)&&d.stateNode.containerInfo===l)return;d=d.return}for(;v!==null;){if(d=jn(v),d===null)return;if(T=d.tag,T===5||T===6||T===26||T===27){o=u=d;continue e}v=v.parentNode}}o=o.return}kf(function(){var M=u,N=Yr(a),w=[];e:{var z=bd.get(e);if(z!==void 0){var O=$i,$=e;switch(e){case"keypress":if(Fi(a)===0)break e;case"keydown":case"keyup":O=G0;break;case"focusin":$="focus",O=Kr;break;case"focusout":$="blur",O=Kr;break;case"beforeblur":case"afterblur":O=Kr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=P0;break;case pd:case gd:case vd:O=N0;break;case yd:O=X0;break;case"scroll":case"scrollend":O=C0;break;case"wheel":O=J0;break;case"copy":case"cut":case"paste":O=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Ff;break;case"toggle":case"beforetoggle":O=F0}var le=(t&4)!==0,Oe=!le&&(e==="scroll"||e==="scrollend"),A=le?z!==null?z+"Capture":null:z;le=[];for(var E=M,D;E!==null;){var V=E;if(D=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||D===null||A===null||(V=jo(E,A),V!=null&&le.push(hi(E,V,D))),Oe)break;E=E.return}0<le.length&&(z=new O(z,$,null,a,N),w.push({event:z,listeners:le}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",z&&a!==Qr&&($=a.relatedTarget||a.fromElement)&&(jn($)||$[wn]))break e;if((O||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,O?($=a.relatedTarget||a.toElement,O=M,$=$?jn($):null,$!==null&&(Oe=m($),le=$.tag,$!==Oe||le!==5&&le!==27&&le!==6)&&($=null)):(O=null,$=M),O!==$)){if(le=Jf,V="onMouseLeave",A="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(le=Ff,V="onPointerLeave",A="onPointerEnter",E="pointer"),Oe=O==null?z:wo(O),D=$==null?z:wo($),z=new le(V,E+"leave",O,a,N),z.target=Oe,z.relatedTarget=D,V=null,jn(N)===M&&(le=new le(A,E+"enter",$,a,N),le.target=D,le.relatedTarget=Oe,V=le),Oe=V,O&&$)t:{for(le=Kb,A=O,E=$,D=0,V=A;V;V=le(V))D++;V=0;for(var se=E;se;se=le(se))V++;for(;0<D-V;)A=le(A),D--;for(;0<V-D;)E=le(E),V--;for(;D--;){if(A===E||E!==null&&A===E.alternate){le=A;break t}A=le(A),E=le(E)}le=null}else le=null;O!==null&&Gh(w,z,O,le,!1),$!==null&&Oe!==null&&Gh(w,Oe,$,le,!0)}}e:{if(z=M?wo(M):window,O=z.nodeName&&z.nodeName.toLowerCase(),O==="select"||O==="input"&&z.type==="file")var Te=od;else if(ad(z))if(id)Te=sb;else{Te=ob;var ae=nb}else O=z.nodeName,!O||O.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?M&&Gr(M.elementType)&&(Te=od):Te=ib;if(Te&&(Te=Te(e,M))){nd(w,Te,a,N);break e}ae&&ae(e,z,M),e==="focusout"&&M&&z.type==="number"&&M.memoizedProps.value!=null&&Hr(z,"number",z.value)}switch(ae=M?wo(M):window,e){case"focusin":(ad(ae)||ae.contentEditable==="true")&&(Pn=ae,tl=M,Yo=null);break;case"focusout":Yo=tl=Pn=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,md(w,a,N);break;case"selectionchange":if(lb)break;case"keydown":case"keyup":md(w,a,N)}var fe;if(Wr)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Yn?ed(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Wf&&a.locale!=="ko"&&(Yn||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Yn&&(fe=Xf()):(Ra=N,Xr="value"in Ra?Ra.value:Ra.textContent,Yn=!0)),ae=Qs(M,ye),0<ae.length&&(ye=new Kf(ye,e,null,a,N),w.push({event:ye,listeners:ae}),fe?ye.data=fe:(fe=td(a),fe!==null&&(ye.data=fe)))),(fe=$0?I0(e,a):eb(e,a))&&(ye=Qs(M,"onBeforeInput"),0<ye.length&&(ae=new Kf("onBeforeInput","beforeinput",null,a,N),w.push({event:ae,listeners:ye}),ae.data=fe)),kb(w,e,M,a,N)}Lh(w,t)})}function hi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Qs(e,t){for(var a=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=jo(e,a),l!=null&&o.unshift(hi(e,l,u)),l=jo(e,t),l!=null&&o.push(hi(e,l,u))),e.tag===3)return o;e=e.return}return[]}function Kb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gh(e,t,a,o,l){for(var u=t._reactName,d=[];a!==null&&a!==o;){var v=a,T=v.alternate,M=v.stateNode;if(v=v.tag,T!==null&&T===o)break;v!==5&&v!==26&&v!==27||M===null||(T=M,l?(M=jo(a,u),M!=null&&d.unshift(hi(a,M,T))):l||(M=jo(a,u),M!=null&&d.push(hi(a,M,T)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var Fb=/\r\n?/g,Wb=/\u0000|\uFFFD/g;function Qh(e){return(typeof e=="string"?e:""+e).replace(Fb,`
`).replace(Wb,"")}function Yh(e,t){return t=Qh(t),Qh(e)===t}function ze(e,t,a,o,l,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Hn(e,""+o);break;case"className":Xi(e,"class",o);break;case"tabIndex":Xi(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xi(e,a,o);break;case"style":Yf(e,o,u);break;case"data":if(t!=="object"){Xi(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ji(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&ze(e,t,"name",l.name,l,null),ze(e,t,"formEncType",l.formEncType,l,null),ze(e,t,"formMethod",l.formMethod,l,null),ze(e,t,"formTarget",l.formTarget,l,null)):(ze(e,t,"encType",l.encType,l,null),ze(e,t,"method",l.method,l,null),ze(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ji(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ra);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ji(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),ki(e,"popover",o);break;case"xlinkActuate":sa(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":sa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":sa(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":sa(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":sa(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":sa(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":sa(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":sa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":sa(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ki(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=D0.get(a)||a,ki(e,a,o))}}function Cu(e,t,a,o,l,u){switch(a){case"style":Yf(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),u=e[ht]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,l);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ki(e,a,o)}}}function it(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var d=a[u];if(d!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,u,d,a,null)}}l&&ze(e,t,"srcSet",a.srcSet,a,null),o&&ze(e,t,"src",a.src,a,null);return;case"input":ge("invalid",e);var v=u=d=l=null,T=null,M=null;for(o in a)if(a.hasOwnProperty(o)){var N=a[o];if(N!=null)switch(o){case"name":l=N;break;case"type":d=N;break;case"checked":T=N;break;case"defaultChecked":M=N;break;case"value":u=N;break;case"defaultValue":v=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,t));break;default:ze(e,t,o,N,a,null)}}Lf(e,u,v,T,M,d,l,!1);return;case"select":ge("invalid",e),o=d=u=null;for(l in a)if(a.hasOwnProperty(l)&&(v=a[l],v!=null))switch(l){case"value":u=v;break;case"defaultValue":d=v;break;case"multiple":o=v;default:ze(e,t,l,v,a,null)}t=u,a=d,e.multiple=!!o,t!=null?Ln(e,!!o,t,!1):a!=null&&Ln(e,!!o,a,!0);return;case"textarea":ge("invalid",e),u=l=o=null;for(d in a)if(a.hasOwnProperty(d)&&(v=a[d],v!=null))switch(d){case"value":o=v;break;case"defaultValue":l=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(91));break;default:ze(e,t,d,v,a,null)}Gf(e,o,l,u);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(o=a[T],o!=null))switch(T){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,t,T,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<mi.length;o++)ge(mi[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(o=a[M],o!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,M,o,a,null)}return;default:if(Gr(t)){for(N in a)a.hasOwnProperty(N)&&(o=a[N],o!==void 0&&Cu(e,t,N,o,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(o=a[v],o!=null&&ze(e,t,v,o,a,null))}function $b(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,d=null,v=null,T=null,M=null,N=null;for(O in a){var w=a[O];if(a.hasOwnProperty(O)&&w!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":T=w;default:o.hasOwnProperty(O)||ze(e,t,O,null,o,w)}}for(var z in o){var O=o[z];if(w=a[z],o.hasOwnProperty(z)&&(O!=null||w!=null))switch(z){case"type":u=O;break;case"name":l=O;break;case"checked":M=O;break;case"defaultChecked":N=O;break;case"value":d=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:O!==w&&ze(e,t,z,O,o,w)}}Lr(e,d,v,T,M,N,u,l);return;case"select":O=d=v=z=null;for(u in a)if(T=a[u],a.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":O=T;default:o.hasOwnProperty(u)||ze(e,t,u,null,o,T)}for(l in o)if(u=o[l],T=a[l],o.hasOwnProperty(l)&&(u!=null||T!=null))switch(l){case"value":z=u;break;case"defaultValue":v=u;break;case"multiple":d=u;default:u!==T&&ze(e,t,l,u,o,T)}t=v,a=d,o=O,z!=null?Ln(e,!!a,z,!1):!!o!=!!a&&(t!=null?Ln(e,!!a,t,!0):Ln(e,!!a,a?[]:"",!1));return;case"textarea":O=z=null;for(v in a)if(l=a[v],a.hasOwnProperty(v)&&l!=null&&!o.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:ze(e,t,v,null,o,l)}for(d in o)if(l=o[d],u=a[d],o.hasOwnProperty(d)&&(l!=null||u!=null))switch(d){case"value":z=l;break;case"defaultValue":O=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&ze(e,t,d,l,o,u)}Hf(e,z,O);return;case"option":for(var $ in a)if(z=a[$],a.hasOwnProperty($)&&z!=null&&!o.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:ze(e,t,$,null,o,z)}for(T in o)if(z=o[T],O=a[T],o.hasOwnProperty(T)&&z!==O&&(z!=null||O!=null))switch(T){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:ze(e,t,T,z,o,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)z=a[le],a.hasOwnProperty(le)&&z!=null&&!o.hasOwnProperty(le)&&ze(e,t,le,null,o,z);for(M in o)if(z=o[M],O=a[M],o.hasOwnProperty(M)&&z!==O&&(z!=null||O!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,t));break;default:ze(e,t,M,z,o,O)}return;default:if(Gr(t)){for(var Oe in a)z=a[Oe],a.hasOwnProperty(Oe)&&z!==void 0&&!o.hasOwnProperty(Oe)&&Cu(e,t,Oe,void 0,o,z);for(N in o)z=o[N],O=a[N],!o.hasOwnProperty(N)||z===O||z===void 0&&O===void 0||Cu(e,t,N,z,o,O);return}}for(var A in a)z=a[A],a.hasOwnProperty(A)&&z!=null&&!o.hasOwnProperty(A)&&ze(e,t,A,null,o,z);for(w in o)z=o[w],O=a[w],!o.hasOwnProperty(w)||z===O||z==null&&O==null||ze(e,t,w,z,o,O)}function Ph(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ib(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var l=a[o],u=l.transferSize,d=l.initiatorType,v=l.duration;if(u&&v&&Ph(d)){for(d=0,v=l.responseEnd,o+=1;o<a.length;o++){var T=a[o],M=T.startTime;if(M>v)break;var N=T.transferSize,w=T.initiatorType;N&&Ph(w)&&(T=T.responseEnd,d+=N*(T<v?1:(v-M)/(T-M)))}if(--o,t+=8*(u+d)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zu=null,Ou=null;function Ys(e){return e.nodeType===9?e:e.ownerDocument}function kh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ru(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qu=null;function eS(){var e=window.event;return e&&e.type==="popstate"?e===qu?!1:(qu=e,!0):(qu=null,!1)}var Zh=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(e){return Jh.resolve(null).then(e).catch(nS)}:Zh;function nS(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function Kh(e,t){var a=t,o=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(l),yo(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")pi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pi(a);for(var u=a.firstChild;u;){var d=u.nextSibling,v=u.nodeName;u[Vo]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=d}}else a==="body"&&pi(e.ownerDocument.body);a=l}while(a);yo(t)}function Fh(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Nu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nu(a),Ur(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function oS(e,t,a,o){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Vo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function iS(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ht(e.nextSibling),e===null))return null;return e}function Wh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ht(e.nextSibling),e===null))return null;return e}function Vu(e){return e.data==="$?"||e.data==="$~"}function wu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sS(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ju=null;function $h(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ih(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function ep(e,t,a){switch(t=Ys(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function pi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ur(e)}var Gt=new Map,tp=new Set;function Ps(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=H.d;H.d={f:rS,r:lS,D:uS,C:cS,L:fS,m:dS,X:hS,S:mS,M:pS};function rS(){var e=xa.f(),t=js();return e||t}function lS(e){var t=_n(e);t!==null&&t.tag===5&&t.type==="form"?ym(t):xa.r(e)}var po=typeof document>"u"?null:document;function ap(e,t,a){var o=po;if(o&&typeof t=="string"&&t){var l=Vt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),tp.has(l)||(tp.add(l),e={rel:e,crossOrigin:a,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),it(t,"link",e),Ie(t),o.head.appendChild(t)))}}function uS(e){xa.D(e),ap("dns-prefetch",e,null)}function cS(e,t){xa.C(e,t),ap("preconnect",e,t)}function fS(e,t,a){xa.L(e,t,a);var o=po;if(o&&e&&t){var l='link[rel="preload"][as="'+Vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Vt(a.imageSizes)+'"]')):l+='[href="'+Vt(e)+'"]';var u=l;switch(t){case"style":u=go(e);break;case"script":u=vo(e)}Gt.has(u)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Gt.set(u,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(gi(u))||t==="script"&&o.querySelector(vi(u))||(t=o.createElement("link"),it(t,"link",e),Ie(t),o.head.appendChild(t)))}}function dS(e,t){xa.m(e,t);var a=po;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(e)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=vo(e)}if(!Gt.has(u)&&(e=b({rel:"modulepreload",href:e},t),Gt.set(u,e),a.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vi(u)))return}o=a.createElement("link"),it(o,"link",e),Ie(o),a.head.appendChild(o)}}}function mS(e,t,a){xa.S(e,t,a);var o=po;if(o&&e){var l=Un(o).hoistableStyles,u=go(e);t=t||"default";var d=l.get(u);if(!d){var v={loading:0,preload:null};if(d=o.querySelector(gi(u)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Gt.get(u))&&_u(e,a);var T=d=o.createElement("link");Ie(T),it(T,"link",e),T._p=new Promise(function(M,N){T.onload=M,T.onerror=N}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,ks(d,t,o)}d={type:"stylesheet",instance:d,count:1,state:v},l.set(u,d)}}}function hS(e,t){xa.X(e,t);var a=po;if(a&&e){var o=Un(a).hoistableScripts,l=vo(e),u=o.get(l);u||(u=a.querySelector(vi(l)),u||(e=b({src:e,async:!0},t),(t=Gt.get(l))&&Uu(e,t),u=a.createElement("script"),Ie(u),it(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function pS(e,t){xa.M(e,t);var a=po;if(a&&e){var o=Un(a).hoistableScripts,l=vo(e),u=o.get(l);u||(u=a.querySelector(vi(l)),u||(e=b({src:e,async:!0,type:"module"},t),(t=Gt.get(l))&&Uu(e,t),u=a.createElement("script"),Ie(u),it(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function np(e,t,a,o){var l=(l=re.current)?Ps(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=go(a.href),a=Un(l).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=go(a.href);var u=Un(l).hoistableStyles,d=u.get(e);if(d||(l=l.ownerDocument||l,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=l.querySelector(gi(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gt.set(e,a),u||gS(l,e,a,d.state))),t&&o===null)throw Error(r(528,""));return d}if(t&&o!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=vo(a),a=Un(l).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function go(e){return'href="'+Vt(e)+'"'}function gi(e){return'link[rel="stylesheet"]['+e+"]"}function op(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function gS(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),it(t,"link",a),Ie(t),e.head.appendChild(t))}function vo(e){return'[src="'+Vt(e)+'"]'}function vi(e){return"script[async]"+e}function ip(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return t.instance=o,Ie(o),o;var l=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ie(o),it(o,"style",l),ks(o,a.precedence,e),t.instance=o;case"stylesheet":l=go(a.href);var u=e.querySelector(gi(l));if(u)return t.state.loading|=4,t.instance=u,Ie(u),u;o=op(a),(l=Gt.get(l))&&_u(o,l),u=(e.ownerDocument||e).createElement("link"),Ie(u);var d=u;return d._p=new Promise(function(v,T){d.onload=v,d.onerror=T}),it(u,"link",o),t.state.loading|=4,ks(u,a.precedence,e),t.instance=u;case"script":return u=vo(a.src),(l=e.querySelector(vi(u)))?(t.instance=l,Ie(l),l):(o=a,(l=Gt.get(u))&&(o=b({},a),Uu(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),it(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,ks(o,a.precedence,e));return t.instance}function ks(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,d=0;d<o.length;d++){var v=o[d];if(v.dataset.precedence===t)u=v;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function _u(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xs=null;function sp(e,t,a){if(Xs===null){var o=new Map,l=Xs=new Map;l.set(a,o)}else l=Xs,o=l.get(a),o||(o=new Map,l.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Vo]||u[tt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(t)||"";d=e+d;var v=o.get(d);v?v.push(u):o.set(d,[u])}}return o}function rp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function vS(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function lp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yS(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=go(o.href),u=t.querySelector(gi(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,Ie(u);return}u=t.ownerDocument||t,o=op(o),(l=Gt.get(l))&&_u(o,l),u=u.createElement("link"),Ie(u);var d=u;d._p=new Promise(function(v,T){d.onload=v,d.onerror=T}),it(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Bu=0;function bS(e,t){return e.stylesheets&&e.count===0&&Ks(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ks(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Bu===0&&(Bu=62500*Ib());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ks(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Bu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function Zs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ks(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Js=null;function Ks(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Js=new Map,t.forEach(SS,e),Js=null,Zs.call(e))}function SS(e,t){if(!(t.state.loading&4)){var a=Js.get(e);if(a)var o=a.get(null);else{a=new Map,Js.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var d=l[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),o=d)}o&&a.set(null,o)}l=t.instance,d=l.getAttribute("data-precedence"),u=a.get(d)||o,u===o&&a.set(null,l),a.set(d,l),this.count++,o=Zs.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var yi={$$typeof:Q,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function TS(e,t,a,o,l,u,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.hiddenUpdates=Vr(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function up(e,t,a,o,l,u,d,v,T,M,N,w){return e=new TS(e,t,a,d,T,M,N,w,v),t=1,u===!0&&(t|=24),u=Dt(3,null,null,t),e.current=u,u.stateNode=e,t=vl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},Tl(u),e}function cp(e){return e?(e=Zn,e):Zn}function fp(e,t,a,o,l,u){l=cp(l),o.context===null?o.context=l:o.pendingContext=l,o=_a(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=Ua(e,o,t),a!==null&&(St(a,e,t),Fo(a,e,t))}function dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Lu(e,t){dp(e,t),(e=e.alternate)&&dp(e,t)}function mp(e){if(e.tag===13||e.tag===31){var t=mn(e,67108864);t!==null&&St(t,e,67108864),Lu(e,67108864)}}function hp(e){if(e.tag===13||e.tag===31){var t=Rt();t=wr(t);var a=mn(e,t);a!==null&&St(a,e,t),Lu(e,t)}}var Fs=!0;function ES(e,t,a,o){var l=q.T;q.T=null;var u=H.p;try{H.p=2,Hu(e,t,a,o)}finally{H.p=u,q.T=l}}function xS(e,t,a,o){var l=q.T;q.T=null;var u=H.p;try{H.p=8,Hu(e,t,a,o)}finally{H.p=u,q.T=l}}function Hu(e,t,a,o){if(Fs){var l=Gu(o);if(l===null)Mu(e,t,o,Ws,a),gp(e,o);else if(DS(l,e,t,a,o))o.stopPropagation();else if(gp(e,o),t&4&&-1<AS.indexOf(e)){for(;l!==null;){var u=_n(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=ln(u.pendingLanes);if(d!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;d;){var T=1<<31-xt(d);v.entanglements[1]|=T,d&=~T}ta(u),(xe&6)===0&&(Vs=Tt()+500,di(0))}}break;case 31:case 13:v=mn(u,2),v!==null&&St(v,u,2),js(),Lu(u,2)}if(u=Gu(o),u===null&&Mu(e,t,o,Ws,a),u===l)break;l=u}l!==null&&o.stopPropagation()}else Mu(e,t,o,null,a)}}function Gu(e){return e=Yr(e),Qu(e)}var Ws=null;function Qu(e){if(Ws=null,e=jn(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=f(t),e!==null)return e;e=null}else if(a===31){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ws=e,null}function pp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(u0()){case xf:return 2;case Af:return 8;case Hi:case c0:return 32;case Df:return 268435456;default:return 32}default:return 32}}var Yu=!1,Ja=null,Ka=null,Fa=null,bi=new Map,Si=new Map,Wa=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gp(e,t){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Ti(e,t,a,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=_n(t),t!==null&&mp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function DS(e,t,a,o,l){switch(t){case"focusin":return Ja=Ti(Ja,e,t,a,o,l),!0;case"dragenter":return Ka=Ti(Ka,e,t,a,o,l),!0;case"mouseover":return Fa=Ti(Fa,e,t,a,o,l),!0;case"pointerover":var u=l.pointerId;return bi.set(u,Ti(bi.get(u)||null,e,t,a,o,l)),!0;case"gotpointercapture":return u=l.pointerId,Si.set(u,Ti(Si.get(u)||null,e,t,a,o,l)),!0}return!1}function vp(e){var t=jn(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=f(a),t!==null){e.blockedOn=t,qf(e.priority,function(){hp(a)});return}}else if(t===31){if(t=h(a),t!==null){e.blockedOn=t,qf(e.priority,function(){hp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Gu(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Qr=o,a.target.dispatchEvent(o),Qr=null}else return t=_n(a),t!==null&&mp(t),e.blockedOn=a,!1;t.shift()}return!0}function yp(e,t,a){$s(e)&&a.delete(t)}function MS(){Yu=!1,Ja!==null&&$s(Ja)&&(Ja=null),Ka!==null&&$s(Ka)&&(Ka=null),Fa!==null&&$s(Fa)&&(Fa=null),bi.forEach(yp),Si.forEach(yp)}function Is(e,t){e.blockedOn===t&&(e.blockedOn=null,Yu||(Yu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,MS)))}var er=null;function bp(e){er!==e&&(er=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){er===e&&(er=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(Qu(o||a)===null)continue;break}var u=_n(a);u!==null&&(e.splice(t,3),t-=3,Gl(u,{pending:!0,data:l,method:a.method,action:o},o,l))}}))}function yo(e){function t(T){return Is(T,e)}Ja!==null&&Is(Ja,e),Ka!==null&&Is(Ka,e),Fa!==null&&Is(Fa,e),bi.forEach(t),Si.forEach(t);for(var a=0;a<Wa.length;a++){var o=Wa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)vp(a),a.blockedOn===null&&Wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var l=a[o],u=a[o+1],d=l[ht]||null;if(typeof u=="function")d||bp(a);else if(d){var v=null;if(u&&u.hasAttribute("formAction")){if(l=u,d=u[ht]||null)v=d.formAction;else if(Qu(l)!==null)continue}else v=d.action;typeof v=="function"?a[o+1]=v:(a.splice(o,3),o-=3),bp(a)}}}function Sp(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(d){return l=d})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Pu(e){this._internalRoot=e}tr.prototype.render=Pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,o=Rt();fp(a,o,e,t,null,null)},tr.prototype.unmount=Pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fp(e.current,2,null,e,null,null),js(),t[wn]=null}};function tr(e){this._internalRoot=e}tr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rf();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Wa.length&&t!==0&&t<Wa[a].priority;a++);Wa.splice(a,0,e),a===0&&vp(e)}};var Tp=i.version;if(Tp!=="19.2.4")throw Error(r(527,Tp,"19.2.4"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var CS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ar.isDisabled&&ar.supportsFiber)try{Ro=ar.inject(CS),Et=ar}catch{}}return xi.createRoot=function(e,t){if(!c(e))throw Error(r(299));var a=!1,o="",l=zm,u=Om,d=Rm;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=up(e,1,!1,null,null,a,o,null,l,u,d,Sp),e[wn]=t.current,Du(e),new Pu(t)},xi.hydrateRoot=function(e,t,a){if(!c(e))throw Error(r(299));var o=!1,l="",u=zm,d=Om,v=Rm,T=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),t=up(e,1,!0,t,a??null,o,l,T,u,d,v,Sp),t.context=cp(null),a=t.current,o=Rt(),o=wr(o),l=_a(o),l.callback=null,Ua(a,l,o),a=o,t.current.lanes=a,No(t,a),ta(t),e[wn]=t.current,Du(e),new tr(t)},xi.version="19.2.4",xi}var qp;function US(){if(qp)return Zu.exports;qp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Zu.exports=_S(),Zu.exports}var BS=US();const Qc=k.createContext({});function Yc(n){const i=k.useRef(null);return i.current===null&&(i.current=n()),i.current}const av=typeof window<"u",nv=av?k.useLayoutEffect:k.useEffect,Ar=k.createContext(null);function Pc(n,i){n.indexOf(i)===-1&&n.push(i)}function pr(n,i){const s=n.indexOf(i);s>-1&&n.splice(s,1)}const oa=(n,i,s)=>s>i?i:s<n?n:s;let kc=()=>{};const Da={},ov=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function iv(n){return typeof n=="object"&&n!==null}const sv=n=>/^0[^.\s]+$/u.test(n);function rv(n){let i;return()=>(i===void 0&&(i=n()),i)}const Yt=n=>n,LS=(n,i)=>s=>i(n(s)),_i=(...n)=>n.reduce(LS),qi=(n,i,s)=>{const r=i-n;return r===0?1:(s-n)/r};class Xc{constructor(){this.subscriptions=[]}add(i){return Pc(this.subscriptions,i),()=>pr(this.subscriptions,i)}notify(i,s,r){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,s,r);else for(let m=0;m<c;m++){const f=this.subscriptions[m];f&&f(i,s,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Kt=n=>n*1e3,Qt=n=>n/1e3;function lv(n,i){return i?n*(1e3/i):0}const uv=(n,i,s)=>(((1-3*s+3*i)*n+(3*s-6*i))*n+3*i)*n,HS=1e-7,GS=12;function QS(n,i,s,r,c){let m,f,h=0;do f=i+(s-i)/2,m=uv(f,r,c)-n,m>0?s=f:i=f;while(Math.abs(m)>HS&&++h<GS);return f}function Ui(n,i,s,r){if(n===i&&s===r)return Yt;const c=m=>QS(m,0,1,n,s);return m=>m===0||m===1?m:uv(c(m),i,r)}const cv=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,fv=n=>i=>1-n(1-i),dv=Ui(.33,1.53,.69,.99),Zc=fv(dv),mv=cv(Zc),hv=n=>(n*=2)<1?.5*Zc(n):.5*(2-Math.pow(2,-10*(n-1))),Jc=n=>1-Math.sin(Math.acos(n)),pv=fv(Jc),gv=cv(Jc),YS=Ui(.42,0,1,1),PS=Ui(0,0,.58,1),vv=Ui(.42,0,.58,1),kS=n=>Array.isArray(n)&&typeof n[0]!="number",yv=n=>Array.isArray(n)&&typeof n[0]=="number",XS={linear:Yt,easeIn:YS,easeInOut:vv,easeOut:PS,circIn:Jc,circInOut:gv,circOut:pv,backIn:Zc,backInOut:mv,backOut:dv,anticipate:hv},ZS=n=>typeof n=="string",Np=n=>{if(yv(n)){kc(n.length===4);const[i,s,r,c]=n;return Ui(i,s,r,c)}else if(ZS(n))return XS[n];return n},nr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function JS(n,i){let s=new Set,r=new Set,c=!1,m=!1;const f=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){f.has(y)&&(g.schedule(y),n()),y(h)}const g={schedule:(y,b=!1,S=!1)=>{const R=S&&c?s:r;return b&&f.add(y),R.has(y)||R.add(y),y},cancel:y=>{r.delete(y),f.delete(y)},process:y=>{if(h=y,c){m=!0;return}c=!0,[s,r]=[r,s],s.forEach(p),s.clear(),c=!1,m&&(m=!1,g.process(y))}};return g}const KS=40;function bv(n,i){let s=!1,r=!0;const c={delta:0,timestamp:0,isProcessing:!1},m=()=>s=!0,f=nr.reduce((Q,J)=>(Q[J]=JS(m),Q),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:y,update:b,preRender:S,render:C,postRender:R}=f,U=()=>{const Q=Da.useManualTiming?c.timestamp:performance.now();s=!1,Da.useManualTiming||(c.delta=r?1e3/60:Math.max(Math.min(Q-c.timestamp,KS),1)),c.timestamp=Q,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),y.process(c),b.process(c),S.process(c),C.process(c),R.process(c),c.isProcessing=!1,s&&i&&(r=!1,n(U))},B=()=>{s=!0,r=!0,c.isProcessing||n(U)};return{schedule:nr.reduce((Q,J)=>{const P=f[J];return Q[J]=(oe,F=!1,_=!1)=>(s||B(),P.schedule(oe,F,_)),Q},{}),cancel:Q=>{for(let J=0;J<nr.length;J++)f[nr[J]].cancel(Q)},state:c,steps:f}}const{schedule:qe,cancel:on,state:st,steps:Wu}=bv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yt,!0);let ur;function FS(){ur=void 0}const ft={now:()=>(ur===void 0&&ft.set(st.isProcessing||Da.useManualTiming?st.timestamp:performance.now()),ur),set:n=>{ur=n,queueMicrotask(FS)}},Sv=n=>i=>typeof i=="string"&&i.startsWith(n),Tv=Sv("--"),WS=Sv("var(--"),Kc=n=>WS(n)?$S.test(n.split("/*")[0].trim()):!1,$S=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Vp(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Co={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ni={...Co,transform:n=>oa(0,1,n)},or={...Co,default:1},Ci=n=>Math.round(n*1e5)/1e5,Fc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function IS(n){return n==null}const eT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wc=(n,i)=>s=>!!(typeof s=="string"&&eT.test(s)&&s.startsWith(n)||i&&!IS(s)&&Object.prototype.hasOwnProperty.call(s,i)),Ev=(n,i,s)=>r=>{if(typeof r!="string")return r;const[c,m,f,h]=r.match(Fc);return{[n]:parseFloat(c),[i]:parseFloat(m),[s]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},tT=n=>oa(0,255,n),$u={...Co,transform:n=>Math.round(tT(n))},On={test:Wc("rgb","red"),parse:Ev("red","green","blue"),transform:({red:n,green:i,blue:s,alpha:r=1})=>"rgba("+$u.transform(n)+", "+$u.transform(i)+", "+$u.transform(s)+", "+Ci(Ni.transform(r))+")"};function aT(n){let i="",s="",r="",c="";return n.length>5?(i=n.substring(1,3),s=n.substring(3,5),r=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),s=n.substring(2,3),r=n.substring(3,4),c=n.substring(4,5),i+=i,s+=s,r+=r,c+=c),{red:parseInt(i,16),green:parseInt(s,16),blue:parseInt(r,16),alpha:c?parseInt(c,16)/255:1}}const pc={test:Wc("#"),parse:aT,transform:On.transform},Bi=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),tn=Bi("deg"),na=Bi("%"),ee=Bi("px"),nT=Bi("vh"),oT=Bi("vw"),wp={...na,parse:n=>na.parse(n)/100,transform:n=>na.transform(n*100)},So={test:Wc("hsl","hue"),parse:Ev("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:s,alpha:r=1})=>"hsla("+Math.round(n)+", "+na.transform(Ci(i))+", "+na.transform(Ci(s))+", "+Ci(Ni.transform(r))+")"},Je={test:n=>On.test(n)||pc.test(n)||So.test(n),parse:n=>On.test(n)?On.parse(n):So.test(n)?So.parse(n):pc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?On.transform(n):So.transform(n),getAnimatableNone:n=>{const i=Je.parse(n);return i.alpha=0,Je.transform(i)}},iT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function sT(n){var i,s;return isNaN(n)&&typeof n=="string"&&(((i=n.match(Fc))==null?void 0:i.length)||0)+(((s=n.match(iT))==null?void 0:s.length)||0)>0}const xv="number",Av="color",rT="var",lT="var(",jp="${}",uT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Vi(n){const i=n.toString(),s=[],r={color:[],number:[],var:[]},c=[];let m=0;const h=i.replace(uT,p=>(Je.test(p)?(r.color.push(m),c.push(Av),s.push(Je.parse(p))):p.startsWith(lT)?(r.var.push(m),c.push(rT),s.push(p)):(r.number.push(m),c.push(xv),s.push(parseFloat(p))),++m,jp)).split(jp);return{values:s,split:h,indexes:r,types:c}}function Dv(n){return Vi(n).values}function Mv(n){const{split:i,types:s}=Vi(n),r=i.length;return c=>{let m="";for(let f=0;f<r;f++)if(m+=i[f],c[f]!==void 0){const h=s[f];h===xv?m+=Ci(c[f]):h===Av?m+=Je.transform(c[f]):m+=c[f]}return m}}const cT=n=>typeof n=="number"?0:Je.test(n)?Je.getAnimatableNone(n):n;function fT(n){const i=Dv(n);return Mv(n)(i.map(cT))}const Ft={test:sT,parse:Dv,createTransformer:Mv,getAnimatableNone:fT};function Iu(n,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(i-n)*6*s:s<1/2?i:s<2/3?n+(i-n)*(2/3-s)*6:n}function dT({hue:n,saturation:i,lightness:s,alpha:r}){n/=360,i/=100,s/=100;let c=0,m=0,f=0;if(!i)c=m=f=s;else{const h=s<.5?s*(1+i):s+i-s*i,p=2*s-h;c=Iu(p,h,n+1/3),m=Iu(p,h,n),f=Iu(p,h,n-1/3)}return{red:Math.round(c*255),green:Math.round(m*255),blue:Math.round(f*255),alpha:r}}function gr(n,i){return s=>s>0?i:n}const Ue=(n,i,s)=>n+(i-n)*s,ec=(n,i,s)=>{const r=n*n,c=s*(i*i-r)+r;return c<0?0:Math.sqrt(c)},mT=[pc,On,So],hT=n=>mT.find(i=>i.test(n));function _p(n){const i=hT(n);if(!i)return!1;let s=i.parse(n);return i===So&&(s=dT(s)),s}const Up=(n,i)=>{const s=_p(n),r=_p(i);if(!s||!r)return gr(n,i);const c={...s};return m=>(c.red=ec(s.red,r.red,m),c.green=ec(s.green,r.green,m),c.blue=ec(s.blue,r.blue,m),c.alpha=Ue(s.alpha,r.alpha,m),On.transform(c))},gc=new Set(["none","hidden"]);function pT(n,i){return gc.has(n)?s=>s<=0?n:i:s=>s>=1?i:n}function gT(n,i){return s=>Ue(n,i,s)}function $c(n){return typeof n=="number"?gT:typeof n=="string"?Kc(n)?gr:Je.test(n)?Up:bT:Array.isArray(n)?Cv:typeof n=="object"?Je.test(n)?Up:vT:gr}function Cv(n,i){const s=[...n],r=s.length,c=n.map((m,f)=>$c(m)(m,i[f]));return m=>{for(let f=0;f<r;f++)s[f]=c[f](m);return s}}function vT(n,i){const s={...n,...i},r={};for(const c in s)n[c]!==void 0&&i[c]!==void 0&&(r[c]=$c(n[c])(n[c],i[c]));return c=>{for(const m in r)s[m]=r[m](c);return s}}function yT(n,i){const s=[],r={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const m=i.types[c],f=n.indexes[m][r[m]],h=n.values[f]??0;s[c]=h,r[m]++}return s}const bT=(n,i)=>{const s=Ft.createTransformer(i),r=Vi(n),c=Vi(i);return r.indexes.var.length===c.indexes.var.length&&r.indexes.color.length===c.indexes.color.length&&r.indexes.number.length>=c.indexes.number.length?gc.has(n)&&!c.values.length||gc.has(i)&&!r.values.length?pT(n,i):_i(Cv(yT(r,c),c.values),s):gr(n,i)};function zv(n,i,s){return typeof n=="number"&&typeof i=="number"&&typeof s=="number"?Ue(n,i,s):$c(n)(n,i)}const ST=n=>{const i=({timestamp:s})=>n(s);return{start:(s=!0)=>qe.update(i,s),stop:()=>on(i),now:()=>st.isProcessing?st.timestamp:ft.now()}},Ov=(n,i,s=10)=>{let r="";const c=Math.max(Math.round(i/s),2);for(let m=0;m<c;m++)r+=Math.round(n(m/(c-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},vr=2e4;function Ic(n){let i=0;const s=50;let r=n.next(i);for(;!r.done&&i<vr;)i+=s,r=n.next(i);return i>=vr?1/0:i}function TT(n,i=100,s){const r=s({...n,keyframes:[0,i]}),c=Math.min(Ic(r),vr);return{type:"keyframes",ease:m=>r.next(c*m).value/i,duration:Qt(c)}}const ET=5;function Rv(n,i,s){const r=Math.max(i-ET,0);return lv(s-n(r),i-r)}const He={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},tc=.001;function xT({duration:n=He.duration,bounce:i=He.bounce,velocity:s=He.velocity,mass:r=He.mass}){let c,m,f=1-i;f=oa(He.minDamping,He.maxDamping,f),n=oa(He.minDuration,He.maxDuration,Qt(n)),f<1?(c=g=>{const y=g*f,b=y*n,S=y-s,C=vc(g,f),R=Math.exp(-b);return tc-S/C*R},m=g=>{const b=g*f*n,S=b*s+s,C=Math.pow(f,2)*Math.pow(g,2)*n,R=Math.exp(-b),U=vc(Math.pow(g,2),f);return(-c(g)+tc>0?-1:1)*((S-C)*R)/U}):(c=g=>{const y=Math.exp(-g*n),b=(g-s)*n+1;return-tc+y*b},m=g=>{const y=Math.exp(-g*n),b=(s-g)*(n*n);return y*b});const h=5/n,p=DT(c,m,h);if(n=Kt(n),isNaN(p))return{stiffness:He.stiffness,damping:He.damping,duration:n};{const g=Math.pow(p,2)*r;return{stiffness:g,damping:f*2*Math.sqrt(r*g),duration:n}}}const AT=12;function DT(n,i,s){let r=s;for(let c=1;c<AT;c++)r=r-n(r)/i(r);return r}function vc(n,i){return n*Math.sqrt(1-i*i)}const MT=["duration","bounce"],CT=["stiffness","damping","mass"];function Bp(n,i){return i.some(s=>n[s]!==void 0)}function zT(n){let i={velocity:He.velocity,stiffness:He.stiffness,damping:He.damping,mass:He.mass,isResolvedFromDuration:!1,...n};if(!Bp(n,CT)&&Bp(n,MT))if(i.velocity=0,n.visualDuration){const s=n.visualDuration,r=2*Math.PI/(s*1.2),c=r*r,m=2*oa(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:He.mass,stiffness:c,damping:m}}else{const s=xT({...n,velocity:0});i={...i,...s,mass:He.mass},i.isResolvedFromDuration=!0}return i}function yr(n=He.visualDuration,i=He.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:r,restDelta:c}=s;const m=s.keyframes[0],f=s.keyframes[s.keyframes.length-1],h={done:!1,value:m},{stiffness:p,damping:g,mass:y,duration:b,velocity:S,isResolvedFromDuration:C}=zT({...s,velocity:-Qt(s.velocity||0)}),R=S||0,U=g/(2*Math.sqrt(p*y)),B=f-m,L=Qt(Math.sqrt(p/y)),X=Math.abs(B)<5;r||(r=X?He.restSpeed.granular:He.restSpeed.default),c||(c=X?He.restDelta.granular:He.restDelta.default);let Q;if(U<1){const P=vc(L,U);Q=oe=>{const F=Math.exp(-U*L*oe);return f-F*((R+U*L*B)/P*Math.sin(P*oe)+B*Math.cos(P*oe))}}else if(U===1)Q=P=>f-Math.exp(-L*P)*(B+(R+L*B)*P);else{const P=L*Math.sqrt(U*U-1);Q=oe=>{const F=Math.exp(-U*L*oe),_=Math.min(P*oe,300);return f-F*((R+U*L*B)*Math.sinh(_)+P*B*Math.cosh(_))/P}}const J={calculatedDuration:C&&b||null,next:P=>{const oe=Q(P);if(C)h.done=P>=b;else{let F=P===0?R:0;U<1&&(F=P===0?Kt(R):Rv(Q,P,oe));const _=Math.abs(F)<=r,ie=Math.abs(f-oe)<=c;h.done=_&&ie}return h.value=h.done?f:oe,h},toString:()=>{const P=Math.min(Ic(J),vr),oe=Ov(F=>J.next(P*F).value,P,30);return P+"ms "+oe},toTransition:()=>{}};return J}yr.applyToOptions=n=>{const i=TT(n,100,yr);return n.ease=i.ease,n.duration=Kt(i.duration),n.type="keyframes",n};function yc({keyframes:n,velocity:i=0,power:s=.8,timeConstant:r=325,bounceDamping:c=10,bounceStiffness:m=500,modifyTarget:f,min:h,max:p,restDelta:g=.5,restSpeed:y}){const b=n[0],S={done:!1,value:b},C=_=>h!==void 0&&_<h||p!==void 0&&_>p,R=_=>h===void 0?p:p===void 0||Math.abs(h-_)<Math.abs(p-_)?h:p;let U=s*i;const B=b+U,L=f===void 0?B:f(B);L!==B&&(U=L-b);const X=_=>-U*Math.exp(-_/r),Q=_=>L+X(_),J=_=>{const ie=X(_),Ae=Q(_);S.done=Math.abs(ie)<=g,S.value=S.done?L:Ae};let P,oe;const F=_=>{C(S.value)&&(P=_,oe=yr({keyframes:[S.value,R(S.value)],velocity:Rv(Q,_,S.value),damping:c,stiffness:m,restDelta:g,restSpeed:y}))};return F(0),{calculatedDuration:null,next:_=>{let ie=!1;return!oe&&P===void 0&&(ie=!0,J(_),F(_)),P!==void 0&&_>=P?oe.next(_-P):(!ie&&J(_),S)}}}function OT(n,i,s){const r=[],c=s||Da.mix||zv,m=n.length-1;for(let f=0;f<m;f++){let h=c(n[f],n[f+1]);if(i){const p=Array.isArray(i)?i[f]||Yt:i;h=_i(p,h)}r.push(h)}return r}function RT(n,i,{clamp:s=!0,ease:r,mixer:c}={}){const m=n.length;if(kc(m===i.length),m===1)return()=>i[0];if(m===2&&i[0]===i[1])return()=>i[1];const f=n[0]===n[1];n[0]>n[m-1]&&(n=[...n].reverse(),i=[...i].reverse());const h=OT(i,r,c),p=h.length,g=y=>{if(f&&y<n[0])return i[0];let b=0;if(p>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const S=qi(n[b],n[b+1],y);return h[b](S)};return s?y=>g(oa(n[0],n[m-1],y)):g}function qT(n,i){const s=n[n.length-1];for(let r=1;r<=i;r++){const c=qi(0,i,r);n.push(Ue(s,1,c))}}function NT(n){const i=[0];return qT(i,n.length-1),i}function VT(n,i){return n.map(s=>s*i)}function wT(n,i){return n.map(()=>i||vv).splice(0,n.length-1)}function zi({duration:n=300,keyframes:i,times:s,ease:r="easeInOut"}){const c=kS(r)?r.map(Np):Np(r),m={done:!1,value:i[0]},f=VT(s&&s.length===i.length?s:NT(i),n),h=RT(f,i,{ease:Array.isArray(c)?c:wT(i,c)});return{calculatedDuration:n,next:p=>(m.value=h(p),m.done=p>=n,m)}}const jT=n=>n!==null;function ef(n,{repeat:i,repeatType:s="loop"},r,c=1){const m=n.filter(jT),h=c<0||i&&s!=="loop"&&i%2===1?0:m.length-1;return!h||r===void 0?m[h]:r}const _T={decay:yc,inertia:yc,tween:zi,keyframes:zi,spring:yr};function qv(n){typeof n.type=="string"&&(n.type=_T[n.type])}class tf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,s){return this.finished.then(i,s)}}const UT=n=>n/100;class af extends tf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,c;const{motionValue:s}=this.options;s&&s.updatedAt!==ft.now()&&this.tick(ft.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(r=this.options).onStop)==null||c.call(r))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;qv(i);const{type:s=zi,repeat:r=0,repeatDelay:c=0,repeatType:m,velocity:f=0}=i;let{keyframes:h}=i;const p=s||zi;p!==zi&&typeof h[0]!="number"&&(this.mixKeyframes=_i(UT,zv(h[0],h[1])),h=[0,100]);const g=p({...i,keyframes:h});m==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...h].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=Ic(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(r+1)-c,this.generator=g}updateTime(i){const s=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(i,s=!1){const{generator:r,totalDuration:c,mixKeyframes:m,mirroredGenerator:f,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return r.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:C,type:R,onUpdate:U,finalKeyframe:B}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),s?this.currentTime=i:this.updateTime(i);const L=this.currentTime-g*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?L<0:L>c;this.currentTime=Math.max(L,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let Q=this.currentTime,J=r;if(b){const _=Math.min(this.currentTime,c)/h;let ie=Math.floor(_),Ae=_%1;!Ae&&_>=1&&(Ae=1),Ae===1&&ie--,ie=Math.min(ie,b+1),!!(ie%2)&&(S==="reverse"?(Ae=1-Ae,C&&(Ae-=C/h)):S==="mirror"&&(J=f)),Q=oa(0,1,Ae)*h}const P=X?{done:!1,value:y[0]}:J.next(Q);m&&(P.value=m(P.value));let{done:oe}=P;!X&&p!==null&&(oe=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&oe);return F&&R!==yc&&(P.value=ef(y,this.options,B,this.speed)),U&&U(P.value),F&&this.finish(),P}then(i,s){return this.finished.then(i,s)}get duration(){return Qt(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Qt(i)}get time(){return Qt(this.currentTime)}set time(i){var s;i=Kt(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),(s=this.driver)==null||s.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(ft.now());const s=this.playbackSpeed!==i;this.playbackSpeed=i,s&&(this.time=Qt(this.currentTime))}play(){var c,m;if(this.isStopped)return;const{driver:i=ST,startTime:s}=this.options;this.driver||(this.driver=i(f=>this.tick(f))),(m=(c=this.options).onPlay)==null||m.call(c);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=s??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ft.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,s;this.notifyFinished(),this.teardown(),this.state="finished",(s=(i=this.options).onComplete)==null||s.call(i)}cancel(){var i,s;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(s=(i=this.options).onCancel)==null||s.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var s;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(s=this.driver)==null||s.stop(),i.observe(this)}}function BT(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const Rn=n=>n*180/Math.PI,bc=n=>{const i=Rn(Math.atan2(n[1],n[0]));return Sc(i)},LT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:bc,rotateZ:bc,skewX:n=>Rn(Math.atan(n[1])),skewY:n=>Rn(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Sc=n=>(n=n%360,n<0&&(n+=360),n),Lp=bc,Hp=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Gp=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),HT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Hp,scaleY:Gp,scale:n=>(Hp(n)+Gp(n))/2,rotateX:n=>Sc(Rn(Math.atan2(n[6],n[5]))),rotateY:n=>Sc(Rn(Math.atan2(-n[2],n[0]))),rotateZ:Lp,rotate:Lp,skewX:n=>Rn(Math.atan(n[4])),skewY:n=>Rn(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Tc(n){return n.includes("scale")?1:0}function Ec(n,i){if(!n||n==="none")return Tc(i);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,c;if(s)r=HT,c=s;else{const h=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=LT,c=h}if(!c)return Tc(i);const m=r[i],f=c[1].split(",").map(QT);return typeof m=="function"?m(f):f[m]}const GT=(n,i)=>{const{transform:s="none"}=getComputedStyle(n);return Ec(s,i)};function QT(n){return parseFloat(n.trim())}const zo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Oo=new Set(zo),Qp=n=>n===Co||n===ee,YT=new Set(["x","y","z"]),PT=zo.filter(n=>!YT.has(n));function kT(n){const i=[];return PT.forEach(s=>{const r=n.getValue(s);r!==void 0&&(i.push([s,r.get()]),r.set(s.startsWith("scale")?1:0))}),i}const nn={width:({x:n},{paddingLeft:i="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),height:({y:n},{paddingTop:i="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Ec(i,"x"),y:(n,{transform:i})=>Ec(i,"y")};nn.translateX=nn.x;nn.translateY=nn.y;const qn=new Set;let xc=!1,Ac=!1,Dc=!1;function Nv(){if(Ac){const n=Array.from(qn).filter(r=>r.needsMeasurement),i=new Set(n.map(r=>r.element)),s=new Map;i.forEach(r=>{const c=kT(r);c.length&&(s.set(r,c),r.render())}),n.forEach(r=>r.measureInitialState()),i.forEach(r=>{r.render();const c=s.get(r);c&&c.forEach(([m,f])=>{var h;(h=r.getValue(m))==null||h.set(f)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ac=!1,xc=!1,qn.forEach(n=>n.complete(Dc)),qn.clear()}function Vv(){qn.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Ac=!0)})}function XT(){Dc=!0,Vv(),Nv(),Dc=!1}class nf{constructor(i,s,r,c,m,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=s,this.name=r,this.motionValue=c,this.element=m,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(qn.add(this),xc||(xc=!0,qe.read(Vv),qe.resolveKeyframes(Nv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:s,element:r,motionValue:c}=this;if(i[0]===null){const m=c==null?void 0:c.get(),f=i[i.length-1];if(m!==void 0)i[0]=m;else if(r&&s){const h=r.readValue(s,f);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=f),c&&m===void 0&&c.set(i[0])}BT(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),qn.delete(this)}cancel(){this.state==="scheduled"&&(qn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ZT=n=>n.startsWith("--");function JT(n,i,s){ZT(i)?n.style.setProperty(i,s):n.style[i]=s}const KT={};function wv(n,i){const s=rv(n);return()=>KT[i]??s()}const FT=wv(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),jv=wv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Mi=([n,i,s,r])=>`cubic-bezier(${n}, ${i}, ${s}, ${r})`,Yp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Mi([0,.65,.55,1]),circOut:Mi([.55,0,1,.45]),backIn:Mi([.31,.01,.66,-.59]),backOut:Mi([.33,1.53,.69,.99])};function _v(n,i){if(n)return typeof n=="function"?jv()?Ov(n,i):"ease-out":yv(n)?Mi(n):Array.isArray(n)?n.map(s=>_v(s,i)||Yp.easeOut):Yp[n]}function WT(n,i,s,{delay:r=0,duration:c=300,repeat:m=0,repeatType:f="loop",ease:h="easeOut",times:p}={},g=void 0){const y={[i]:s};p&&(y.offset=p);const b=_v(h,c);Array.isArray(b)&&(y.easing=b);const S={delay:r,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:m+1,direction:f==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),n.animate(y,S)}function Uv(n){return typeof n=="function"&&"applyToOptions"in n}function $T({type:n,...i}){return Uv(n)&&jv()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class Bv extends tf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:s,name:r,keyframes:c,pseudoElement:m,allowFlatten:f=!1,finalKeyframe:h,onComplete:p}=i;this.isPseudoElement=!!m,this.allowFlatten=f,this.options=i,kc(typeof i.type!="string");const g=$T(i);this.animation=WT(s,r,c,g,m),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const y=ef(c,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(y):JT(s,r,y),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,s;(s=(i=this.animation).finish)==null||s.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var s,r,c;const i=(s=this.options)==null?void 0:s.element;!this.isPseudoElement&&(i!=null&&i.isConnected)&&((c=(r=this.animation).commitStyles)==null||c.call(r))}get duration(){var s,r;const i=((r=(s=this.animation.effect)==null?void 0:s.getComputedTiming)==null?void 0:r.call(s).duration)||0;return Qt(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Qt(i)}get time(){return Qt(Number(this.animation.currentTime)||0)}set time(i){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Kt(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,observe:s}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&FT()?(this.animation.timeline=i,Yt):s(this)}}const Lv={anticipate:hv,backInOut:mv,circInOut:gv};function IT(n){return n in Lv}function e1(n){typeof n.ease=="string"&&IT(n.ease)&&(n.ease=Lv[n.ease])}const ac=10;class t1 extends Bv{constructor(i){e1(i),qv(i),super(i),i.startTime!==void 0&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:s,onUpdate:r,onComplete:c,element:m,...f}=this.options;if(!s)return;if(i!==void 0){s.set(i);return}const h=new af({...f,autoplay:!1}),p=Math.max(ac,ft.now()-this.startTime),g=oa(0,ac,p-ac);s.setWithVelocity(h.sample(Math.max(0,p-g)).value,h.sample(p).value,g),h.stop()}}const Pp=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ft.test(n)||n==="0")&&!n.startsWith("url("));function a1(n){const i=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==i)return!0}function n1(n,i,s,r){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const m=n[n.length-1],f=Pp(c,i),h=Pp(m,i);return!f||!h?!1:a1(n)||(s==="spring"||Uv(s))&&r}function Mc(n){n.duration=0,n.type="keyframes"}const o1=new Set(["opacity","clipPath","filter","transform"]),i1=rv(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function s1(n){var y;const{motionValue:i,name:s,repeatDelay:r,repeatType:c,damping:m,type:f}=n;if(!(((y=i==null?void 0:i.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=i.owner.getProps();return i1()&&s&&o1.has(s)&&(s!=="transform"||!g)&&!p&&!r&&c!=="mirror"&&m!==0&&f!=="inertia"}const r1=40;class l1 extends tf{constructor({autoplay:i=!0,delay:s=0,type:r="keyframes",repeat:c=0,repeatDelay:m=0,repeatType:f="loop",keyframes:h,name:p,motionValue:g,element:y,...b}){var R;super(),this.stop=()=>{var U,B;this._animation&&(this._animation.stop(),(U=this.stopTimeline)==null||U.call(this)),(B=this.keyframeResolver)==null||B.cancel()},this.createdAt=ft.now();const S={autoplay:i,delay:s,type:r,repeat:c,repeatDelay:m,repeatType:f,name:p,motionValue:g,element:y,...b},C=(y==null?void 0:y.KeyframeResolver)||nf;this.keyframeResolver=new C(h,(U,B,L)=>this.onKeyframesResolved(U,B,S,!L),p,g,y),(R=this.keyframeResolver)==null||R.scheduleResolve()}onKeyframesResolved(i,s,r,c){var B,L;this.keyframeResolver=void 0;const{name:m,type:f,velocity:h,delay:p,isHandoff:g,onUpdate:y}=r;this.resolvedAt=ft.now(),n1(i,m,f,h)||((Da.instantAnimations||!p)&&(y==null||y(ef(i,r,s))),i[0]=i[i.length-1],Mc(r),r.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>r1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...r,keyframes:i},C=!g&&s1(S),R=(L=(B=S.motionValue)==null?void 0:B.owner)==null?void 0:L.current,U=C?new t1({...S,element:R}):new af(S);U.finished.then(()=>{this.notifyFinished()}).catch(Yt),this.pendingTimeline&&(this.stopTimeline=U.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=U}get finished(){return this._animation?this.animation.finished:this._finished}then(i,s){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),XT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}function Hv(n,i,s,r=0,c=1){const m=Array.from(n).sort((g,y)=>g.sortNodePosition(y)).indexOf(i),f=n.size,h=(f-1)*r;return typeof s=="function"?s(m,f):c===1?m*r:h-m*r}const u1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function c1(n){const i=u1.exec(n);if(!i)return[,];const[,s,r,c]=i;return[`--${s??r}`,c]}function Gv(n,i,s=1){const[r,c]=c1(n);if(!r)return;const m=window.getComputedStyle(i).getPropertyValue(r);if(m){const f=m.trim();return ov(f)?parseFloat(f):f}return Kc(c)?Gv(c,i,s+1):c}const f1={type:"spring",stiffness:500,damping:25,restSpeed:10},d1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),m1={type:"keyframes",duration:.8},h1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},p1=(n,{keyframes:i})=>i.length>2?m1:Oo.has(n)?n.startsWith("scale")?d1(i[1]):f1:h1,g1=n=>n!==null;function v1(n,{repeat:i,repeatType:s="loop"},r){const c=n.filter(g1),m=i&&s!=="loop"&&i%2===1?0:c.length-1;return c[m]}function Qv(n,i){if(n!=null&&n.inherit&&i){const{inherit:s,...r}=n;return{...i,...r}}return n}function of(n,i){const s=(n==null?void 0:n[i])??(n==null?void 0:n.default)??n;return s!==n?Qv(s,n):s}function y1({when:n,delay:i,delayChildren:s,staggerChildren:r,staggerDirection:c,repeat:m,repeatType:f,repeatDelay:h,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const sf=(n,i,s,r={},c,m)=>f=>{const h=of(r,n)||{},p=h.delay||r.delay||0;let{elapsed:g=0}=r;g=g-Kt(p);const y={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:i.getVelocity(),...h,delay:-g,onUpdate:S=>{i.set(S),h.onUpdate&&h.onUpdate(S)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:n,motionValue:i,element:m?void 0:c};y1(h)||Object.assign(y,p1(n,y)),y.duration&&(y.duration=Kt(y.duration)),y.repeatDelay&&(y.repeatDelay=Kt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Mc(y),y.delay===0&&(b=!0)),(Da.instantAnimations||Da.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(b=!0,Mc(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,b&&!m&&i.get()!==void 0){const S=v1(y.keyframes,h);if(S!==void 0){qe.update(()=>{y.onUpdate(S),y.onComplete()});return}}return h.isSync?new af(y):new l1(y)};function kp(n){const i=[{},{}];return n==null||n.values.forEach((s,r)=>{i[0][r]=s.get(),i[1][r]=s.getVelocity()}),i}function rf(n,i,s,r){if(typeof i=="function"){const[c,m]=kp(r);i=i(s!==void 0?s:n.custom,c,m)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,m]=kp(r);i=i(s!==void 0?s:n.custom,c,m)}return i}function Do(n,i,s){const r=n.getProps();return rf(r,i,s!==void 0?s:r.custom,n)}const Yv=new Set(["width","height","top","left","right","bottom",...zo]),Xp=30,b1=n=>!isNaN(parseFloat(n));class S1{constructor(i,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var m;const c=ft.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((m=this.events.change)==null||m.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=s.owner}setCurrent(i){this.current=i,this.updatedAt=ft.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=b1(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,s){this.events[i]||(this.events[i]=new Xc);const r=this.events[i].add(s);return i==="change"?()=>{r(),qe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,s){this.passiveEffect=i,this.stopPassiveEffect=s}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,s,r){this.set(s),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-r}jump(i,s=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Xp)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,Xp);return lv(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(i){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=i(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,s;(i=this.dependents)==null||i.clear(),(s=this.events.destroy)==null||s.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Mo(n,i){return new S1(n,i)}const Cc=n=>Array.isArray(n);function T1(n,i,s){n.hasValue(i)?n.getValue(i).set(s):n.addValue(i,Mo(s))}function E1(n){return Cc(n)?n[n.length-1]||0:n}function x1(n,i){const s=Do(n,i);let{transitionEnd:r={},transition:c={},...m}=s||{};m={...m,...r};for(const f in m){const h=E1(m[f]);T1(n,f,h)}}const ut=n=>!!(n&&n.getVelocity);function A1(n){return!!(ut(n)&&n.add)}function zc(n,i){const s=n.getValue("willChange");if(A1(s))return s.add(i);if(!s&&Da.WillChange){const r=new Da.WillChange("auto");n.addValue("willChange",r),r.add(i)}}function lf(n){return n.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const D1="framerAppearId",Pv="data-"+lf(D1);function kv(n){return n.props[Pv]}function M1({protectedKeys:n,needsAnimating:i},s){const r=n.hasOwnProperty(s)&&i[s]!==!0;return i[s]=!1,r}function Xv(n,i,{delay:s=0,transitionOverride:r,type:c}={}){let{transition:m,transitionEnd:f,...h}=i;const p=n.getDefaultTransition();m=m?Qv(m,p):p;const g=m==null?void 0:m.reduceMotion;r&&(m=r);const y=[],b=c&&n.animationState&&n.animationState.getState()[c];for(const S in h){const C=n.getValue(S,n.latestValues[S]??null),R=h[S];if(R===void 0||b&&M1(b,S))continue;const U={delay:s,...of(m||{},S)},B=C.get();if(B!==void 0&&!C.isAnimating&&!Array.isArray(R)&&R===B&&!U.velocity)continue;let L=!1;if(window.MotionHandoffAnimation){const J=kv(n);if(J){const P=window.MotionHandoffAnimation(J,S,qe);P!==null&&(U.startTime=P,L=!0)}}zc(n,S);const X=g??n.shouldReduceMotion;C.start(sf(S,C,R,X&&Yv.has(S)?{type:!1}:U,n,L));const Q=C.animation;Q&&y.push(Q)}if(f){const S=()=>qe.update(()=>{f&&x1(n,f)});y.length?Promise.all(y).then(S):S()}return y}function Oc(n,i,s={}){var p;const r=Do(n,i,s.type==="exit"?(p=n.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=r||{};s.transitionOverride&&(c=s.transitionOverride);const m=r?()=>Promise.all(Xv(n,r,s)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:S}=c;return C1(n,i,g,y,b,S,s)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,y]=h==="beforeChildren"?[m,f]:[f,m];return g().then(()=>y())}else return Promise.all([m(),f(s.delay)])}function C1(n,i,s=0,r=0,c=0,m=1,f){const h=[];for(const p of n.variantChildren)p.notify("AnimationStart",i),h.push(Oc(p,i,{...f,delay:s+(typeof r=="function"?0:r)+Hv(n.variantChildren,p,r,c,m)}).then(()=>p.notify("AnimationComplete",i)));return Promise.all(h)}function z1(n,i,s={}){n.notify("AnimationStart",i);let r;if(Array.isArray(i)){const c=i.map(m=>Oc(n,m,s));r=Promise.all(c)}else if(typeof i=="string")r=Oc(n,i,s);else{const c=typeof i=="function"?Do(n,i,s.custom):i;r=Promise.all(Xv(n,c,s))}return r.then(()=>{n.notify("AnimationComplete",i)})}const O1={test:n=>n==="auto",parse:n=>n},Zv=n=>i=>i.test(n),Jv=[Co,ee,na,tn,oT,nT,O1],Zp=n=>Jv.find(Zv(n));function R1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||sv(n):!0}const q1=new Set(["brightness","contrast","saturate","opacity"]);function N1(n){const[i,s]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[r]=s.match(Fc)||[];if(!r)return n;const c=s.replace(r,"");let m=q1.has(i)?1:0;return r!==s&&(m*=100),i+"("+m+c+")"}const V1=/\b([a-z-]*)\(.*?\)/gu,Rc={...Ft,getAnimatableNone:n=>{const i=n.match(V1);return i?i.map(N1).join(" "):n}},qc={...Ft,getAnimatableNone:n=>{const i=Ft.parse(n);return Ft.createTransformer(n)(i.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Jp={...Co,transform:Math.round},w1={rotate:tn,rotateX:tn,rotateY:tn,rotateZ:tn,scale:or,scaleX:or,scaleY:or,scaleZ:or,skew:tn,skewX:tn,skewY:tn,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Ni,originX:wp,originY:wp,originZ:ee},uf={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,inset:ee,insetBlock:ee,insetBlockStart:ee,insetBlockEnd:ee,insetInline:ee,insetInlineStart:ee,insetInlineEnd:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,paddingBlock:ee,paddingBlockStart:ee,paddingBlockEnd:ee,paddingInline:ee,paddingInlineStart:ee,paddingInlineEnd:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,marginBlock:ee,marginBlockStart:ee,marginBlockEnd:ee,marginInline:ee,marginInlineStart:ee,marginInlineEnd:ee,fontSize:ee,backgroundPositionX:ee,backgroundPositionY:ee,...w1,zIndex:Jp,fillOpacity:Ni,strokeOpacity:Ni,numOctaves:Jp},j1={...uf,color:Je,backgroundColor:Je,outlineColor:Je,fill:Je,stroke:Je,borderColor:Je,borderTopColor:Je,borderRightColor:Je,borderBottomColor:Je,borderLeftColor:Je,filter:Rc,WebkitFilter:Rc,mask:qc,WebkitMask:qc},Kv=n=>j1[n],_1=new Set([Rc,qc]);function Fv(n,i){let s=Kv(n);return _1.has(s)||(s=Ft),s.getAnimatableNone?s.getAnimatableNone(i):void 0}const U1=new Set(["auto","none","0"]);function B1(n,i,s){let r=0,c;for(;r<n.length&&!c;){const m=n[r];typeof m=="string"&&!U1.has(m)&&Vi(m).values.length&&(c=n[r]),r++}if(c&&s)for(const m of i)n[m]=Fv(s,c)}class L1 extends nf{constructor(i,s,r,c,m){super(i,s,r,c,m,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:s,name:r}=this;if(!s||!s.current)return;super.readKeyframes();for(let y=0;y<i.length;y++){let b=i[y];if(typeof b=="string"&&(b=b.trim(),Kc(b))){const S=Gv(b,s.current);S!==void 0&&(i[y]=S),y===i.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Yv.has(r)||i.length!==2)return;const[c,m]=i,f=Zp(c),h=Zp(m),p=Vp(c),g=Vp(m);if(p!==g&&nn[r]){this.needsMeasurement=!0;return}if(f!==h)if(Qp(f)&&Qp(h))for(let y=0;y<i.length;y++){const b=i[y];typeof b=="string"&&(i[y]=parseFloat(b))}else nn[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:s}=this,r=[];for(let c=0;c<i.length;c++)(i[c]===null||R1(i[c]))&&r.push(c);r.length&&B1(i,r,s)}measureInitialState(){const{element:i,unresolvedKeyframes:s,name:r}=this;if(!i||!i.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=nn[r](i.measureViewportBox(),window.getComputedStyle(i.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&i.getValue(r,c).jump(c,!1)}measureEndState(){var h;const{element:i,name:s,unresolvedKeyframes:r}=this;if(!i||!i.current)return;const c=i.getValue(s);c&&c.jump(this.measuredOrigin,!1);const m=r.length-1,f=r[m];r[m]=nn[s](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{i.getValue(p).set(g)}),this.resolveNoneKeyframes()}}const H1=new Set(["opacity","clipPath","filter","transform"]);function Wv(n,i,s){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const c=(s==null?void 0:s[n])??r.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n).filter(r=>r!=null)}const $v=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function Nc(n){return iv(n)&&"offsetHeight"in n}const{schedule:cf}=bv(queueMicrotask,!1),Jt={x:!1,y:!1};function Iv(){return Jt.x||Jt.y}function G1(n){return n==="x"||n==="y"?Jt[n]?null:(Jt[n]=!0,()=>{Jt[n]=!1}):Jt.x||Jt.y?null:(Jt.x=Jt.y=!0,()=>{Jt.x=Jt.y=!1})}function ey(n,i){const s=Wv(n),r=new AbortController,c={passive:!0,...i,signal:r.signal};return[s,c,()=>r.abort()]}function Q1(n){return!(n.pointerType==="touch"||Iv())}function Y1(n,i,s={}){const[r,c,m]=ey(n,s);return r.forEach(f=>{let h=!1,p=!1,g;const y=()=>{f.removeEventListener("pointerleave",R)},b=B=>{g&&(g(B),g=void 0),y()},S=B=>{h=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),p&&(p=!1,b(B))},C=()=>{h=!0,window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",S,c)},R=B=>{if(B.pointerType!=="touch"){if(h){p=!0;return}b(B)}},U=B=>{if(!Q1(B))return;p=!1;const L=i(f,B);typeof L=="function"&&(g=L,f.addEventListener("pointerleave",R,c))};f.addEventListener("pointerenter",U,c),f.addEventListener("pointerdown",C,c)}),m}const ty=(n,i)=>i?n===i?!0:ty(n,i.parentElement):!1,ff=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,P1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function k1(n){return P1.has(n.tagName)||n.isContentEditable===!0}const X1=new Set(["INPUT","SELECT","TEXTAREA"]);function Z1(n){return X1.has(n.tagName)||n.isContentEditable===!0}const cr=new WeakSet;function Kp(n){return i=>{i.key==="Enter"&&n(i)}}function nc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const J1=(n,i)=>{const s=n.currentTarget;if(!s)return;const r=Kp(()=>{if(cr.has(s))return;nc(s,"down");const c=Kp(()=>{nc(s,"up")}),m=()=>nc(s,"cancel");s.addEventListener("keyup",c,i),s.addEventListener("blur",m,i)});s.addEventListener("keydown",r,i),s.addEventListener("blur",()=>s.removeEventListener("keydown",r),i)};function Fp(n){return ff(n)&&!Iv()}const Wp=new WeakSet;function K1(n,i,s={}){const[r,c,m]=ey(n,s),f=h=>{const p=h.currentTarget;if(!Fp(h)||Wp.has(h))return;cr.add(p),s.stopPropagation&&Wp.add(h);const g=i(p,h),y=(C,R)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),cr.has(p)&&cr.delete(p),Fp(C)&&typeof g=="function"&&g(C,{success:R})},b=C=>{y(C,p===window||p===document||s.useGlobalTarget||ty(p,C.target))},S=C=>{y(C,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",S,c)};return r.forEach(h=>{(s.useGlobalTarget?window:h).addEventListener("pointerdown",f,c),Nc(h)&&(h.addEventListener("focus",g=>J1(g,c)),!k1(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),m}function df(n){return iv(n)&&"ownerSVGElement"in n}const fr=new WeakMap;let an;const ay=(n,i,s)=>(r,c)=>c&&c[0]?c[0][n+"Size"]:df(r)&&"getBBox"in r?r.getBBox()[i]:r[s],F1=ay("inline","width","offsetWidth"),W1=ay("block","height","offsetHeight");function $1({target:n,borderBoxSize:i}){var s;(s=fr.get(n))==null||s.forEach(r=>{r(n,{get width(){return F1(n,i)},get height(){return W1(n,i)}})})}function I1(n){n.forEach($1)}function eE(){typeof ResizeObserver>"u"||(an=new ResizeObserver(I1))}function tE(n,i){an||eE();const s=Wv(n);return s.forEach(r=>{let c=fr.get(r);c||(c=new Set,fr.set(r,c)),c.add(i),an==null||an.observe(r)}),()=>{s.forEach(r=>{const c=fr.get(r);c==null||c.delete(i),c!=null&&c.size||an==null||an.unobserve(r)})}}const dr=new Set;let To;function aE(){To=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};dr.forEach(i=>i(n))},window.addEventListener("resize",To)}function nE(n){return dr.add(n),To||aE(),()=>{dr.delete(n),!dr.size&&typeof To=="function"&&(window.removeEventListener("resize",To),To=void 0)}}function $p(n,i){return typeof n=="function"?nE(n):tE(n,i)}function oE(n){return df(n)&&n.tagName==="svg"}const iE=[...Jv,Je,Ft],sE=n=>iE.find(Zv(n)),Ip=()=>({translate:0,scale:1,origin:0,originPoint:0}),Eo=()=>({x:Ip(),y:Ip()}),eg=()=>({min:0,max:0}),We=()=>({x:eg(),y:eg()}),rE=new WeakMap;function Dr(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function wi(n){return typeof n=="string"||Array.isArray(n)}const mf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],hf=["initial",...mf];function Mr(n){return Dr(n.animate)||hf.some(i=>wi(n[i]))}function ny(n){return!!(Mr(n)||n.variants)}function lE(n,i,s){for(const r in i){const c=i[r],m=s[r];if(ut(c))n.addValue(r,c);else if(ut(m))n.addValue(r,Mo(c,{owner:n}));else if(m!==c)if(n.hasValue(r)){const f=n.getValue(r);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=n.getStaticValue(r);n.addValue(r,Mo(f!==void 0?f:c,{owner:n}))}}for(const r in s)i[r]===void 0&&n.removeValue(r);return i}const Vc={current:null},oy={current:!1},uE=typeof window<"u";function cE(){if(oy.current=!0,!!uE)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Vc.current=n.matches;n.addEventListener("change",i),i()}else Vc.current=!1}const tg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let br={};function iy(n){br=n}function fE(){return br}class dE{scrapeMotionValuesFromProps(i,s,r){return{}}constructor({parent:i,props:s,presenceContext:r,reducedMotionConfig:c,skipAnimations:m,blockInitialAnimation:f,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=nf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=ft.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,qe.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=s.initial?{...g}:{},this.renderState=y,this.parent=i,this.props=s,this.presenceContext=r,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=m,this.options=p,this.blockInitialAnimation=!!f,this.isControllingVariants=Mr(s),this.isVariantNode=ny(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...S}=this.scrapeMotionValuesFromProps(s,{},this);for(const C in S){const R=S[C];g[C]!==void 0&&ut(R)&&R.set(g[C])}}mount(i){var s,r;if(this.hasBeenMounted)for(const c in this.initialValues)(s=this.values.get(c))==null||s.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=i,rE.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,m)=>this.bindToMotionValue(m,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(oy.current||cE(),this.shouldReduceMotion=Vc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var i;this.projection&&this.projection.unmount(),on(this.notifyUpdate),on(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(i=this.parent)==null||i.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const r=this.features[s];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,s){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),s.accelerate&&H1.has(i)&&this.current instanceof HTMLElement){const{factory:f,keyframes:h,times:p,ease:g,duration:y}=s.accelerate,b=new Bv({element:this.current,name:i,keyframes:h,times:p,ease:g,duration:Kt(y)}),S=f(b);this.valueSubscriptions.set(i,()=>{S(),b.cancel()});return}const r=Oo.has(i);r&&this.onBindTransform&&this.onBindTransform();const c=s.on("change",f=>{this.latestValues[i]=f,this.props.onUpdate&&qe.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,i,s)),this.valueSubscriptions.set(i,()=>{c(),m&&m(),s.owner&&s.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in br){const s=br[i];if(!s)continue;const{isEnabled:r,Feature:c}=s;if(!this.features[i]&&c&&r(this.props)&&(this.features[i]=new c(this)),this.features[i]){const m=this.features[i];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):We()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,s){this.latestValues[i]=s}update(i,s){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let r=0;r<tg.length;r++){const c=tg[r];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const m="on"+c,f=i[m];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=lE(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(i),()=>s.variantChildren.delete(i)}addValue(i,s){const r=this.values.get(i);s!==r&&(r&&this.removeValue(i),this.bindToMotionValue(i,s),this.values.set(i,s),this.latestValues[i]=s.get())}removeValue(i){this.values.delete(i);const s=this.valueSubscriptions.get(i);s&&(s(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,s){if(this.props.values&&this.props.values[i])return this.props.values[i];let r=this.values.get(i);return r===void 0&&s!==void 0&&(r=Mo(s===null?void 0:s,{owner:this}),this.addValue(i,r)),r}readValue(i,s){let r=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return r!=null&&(typeof r=="string"&&(ov(r)||sv(r))?r=parseFloat(r):!sE(r)&&Ft.test(s)&&(r=Fv(i,s)),this.setBaseTarget(i,ut(r)?r.get():r)),ut(r)?r.get():r}setBaseTarget(i,s){this.baseTarget[i]=s}getBaseTarget(i){var m;const{initial:s}=this.props;let r;if(typeof s=="string"||typeof s=="object"){const f=rf(this.props,s,(m=this.presenceContext)==null?void 0:m.custom);f&&(r=f[i])}if(s&&r!==void 0)return r;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!ut(c)?c:this.initialValues[i]!==void 0&&r===void 0?void 0:this.baseTarget[i]}on(i,s){return this.events[i]||(this.events[i]=new Xc),this.events[i].add(s)}notify(i,...s){this.events[i]&&this.events[i].notify(...s)}scheduleRenderMicrotask(){cf.render(this.render)}}class sy extends dE{constructor(){super(...arguments),this.KeyframeResolver=L1}sortInstanceNodePosition(i,s){return i.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(i,s){const r=i.style;return r?r[s]:void 0}removeValueFromRenderState(i,{vars:s,style:r}){delete s[i],delete r[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;ut(i)&&(this.childSubscription=i.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}class sn{constructor(i){this.isMounted=!1,this.node=i}update(){}}function ry({top:n,left:i,right:s,bottom:r}){return{x:{min:i,max:s},y:{min:n,max:r}}}function mE({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function hE(n,i){if(!i)return n;const s=i({x:n.left,y:n.top}),r=i({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:r.y,right:r.x}}function oc(n){return n===void 0||n===1}function wc({scale:n,scaleX:i,scaleY:s}){return!oc(n)||!oc(i)||!oc(s)}function zn(n){return wc(n)||ly(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function ly(n){return ag(n.x)||ag(n.y)}function ag(n){return n&&n!=="0%"}function Sr(n,i,s){const r=n-s,c=i*r;return s+c}function ng(n,i,s,r,c){return c!==void 0&&(n=Sr(n,c,r)),Sr(n,s,r)+i}function jc(n,i=0,s=1,r,c){n.min=ng(n.min,i,s,r,c),n.max=ng(n.max,i,s,r,c)}function uy(n,{x:i,y:s}){jc(n.x,i.translate,i.scale,i.originPoint),jc(n.y,s.translate,s.scale,s.originPoint)}const og=.999999999999,ig=1.0000000000001;function pE(n,i,s,r=!1){const c=s.length;if(!c)return;i.x=i.y=1;let m,f;for(let h=0;h<c;h++){m=s[h],f=m.projectionDelta;const{visualElement:p}=m.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Ao(n,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,uy(n,f)),r&&zn(m.latestValues)&&Ao(n,m.latestValues))}i.x<ig&&i.x>og&&(i.x=1),i.y<ig&&i.y>og&&(i.y=1)}function xo(n,i){n.min=n.min+i,n.max=n.max+i}function sg(n,i,s,r,c=.5){const m=Ue(n.min,n.max,c);jc(n,i,s,m,r)}function Ao(n,i){sg(n.x,i.x,i.scaleX,i.scale,i.originX),sg(n.y,i.y,i.scaleY,i.scale,i.originY)}function cy(n,i){return ry(hE(n.getBoundingClientRect(),i))}function gE(n,i,s){const r=cy(n,s),{scroll:c}=i;return c&&(xo(r.x,c.offset.x),xo(r.y,c.offset.y)),r}const vE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},yE=zo.length;function bE(n,i,s){let r="",c=!0;for(let m=0;m<yE;m++){const f=zo[m],h=n[f];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(f.startsWith("scale")?1:0);else{const g=parseFloat(h);p=f.startsWith("scale")?g===1:g===0}if(!p||s){const g=$v(h,uf[f]);if(!p){c=!1;const y=vE[f]||f;r+=`${y}(${g}) `}s&&(i[f]=g)}}return r=r.trim(),s?r=s(i,c?"":r):c&&(r="none"),r}function pf(n,i,s){const{style:r,vars:c,transformOrigin:m}=n;let f=!1,h=!1;for(const p in i){const g=i[p];if(Oo.has(p)){f=!0;continue}else if(Tv(p)){c[p]=g;continue}else{const y=$v(g,uf[p]);p.startsWith("origin")?(h=!0,m[p]=y):r[p]=y}}if(i.transform||(f||s?r.transform=bE(i,n.transform,s):r.transform&&(r.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:y=0}=m;r.transformOrigin=`${p} ${g} ${y}`}}function fy(n,{style:i,vars:s},r,c){const m=n.style;let f;for(f in i)m[f]=i[f];c==null||c.applyProjectionStyles(m,r);for(f in s)m.setProperty(f,s[f])}function rg(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Ai={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(ee.test(n))n=parseFloat(n);else return n;const s=rg(n,i.target.x),r=rg(n,i.target.y);return`${s}% ${r}%`}},SE={correct:(n,{treeScale:i,projectionDelta:s})=>{const r=n,c=Ft.parse(n);if(c.length>5)return r;const m=Ft.createTransformer(n),f=typeof c[0]!="number"?1:0,h=s.x.scale*i.x,p=s.y.scale*i.y;c[0+f]/=h,c[1+f]/=p;const g=Ue(h,p,.5);return typeof c[2+f]=="number"&&(c[2+f]/=g),typeof c[3+f]=="number"&&(c[3+f]/=g),m(c)}},_c={borderRadius:{...Ai,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ai,borderTopRightRadius:Ai,borderBottomLeftRadius:Ai,borderBottomRightRadius:Ai,boxShadow:SE};function dy(n,{layout:i,layoutId:s}){return Oo.has(n)||n.startsWith("origin")||(i||s!==void 0)&&(!!_c[n]||n==="opacity")}function gf(n,i,s){var f;const r=n.style,c=i==null?void 0:i.style,m={};if(!r)return m;for(const h in r)(ut(r[h])||c&&ut(c[h])||dy(h,n)||((f=s==null?void 0:s.getValue(h))==null?void 0:f.liveStyle)!==void 0)&&(m[h]=r[h]);return m}function TE(n){return window.getComputedStyle(n)}class EE extends sy{constructor(){super(...arguments),this.type="html",this.renderInstance=fy}readValueFromInstance(i,s){var r;if(Oo.has(s))return(r=this.projection)!=null&&r.isProjecting?Tc(s):GT(i,s);{const c=TE(i),m=(Tv(s)?c.getPropertyValue(s):c[s])||0;return typeof m=="string"?m.trim():m}}measureInstanceViewportBox(i,{transformPagePoint:s}){return cy(i,s)}build(i,s,r){pf(i,s,r.transformTemplate)}scrapeMotionValuesFromProps(i,s,r){return gf(i,s,r)}}const xE={offset:"stroke-dashoffset",array:"stroke-dasharray"},AE={offset:"strokeDashoffset",array:"strokeDasharray"};function DE(n,i,s=1,r=0,c=!0){n.pathLength=1;const m=c?xE:AE;n[m.offset]=`${-r}`,n[m.array]=`${i} ${s}`}const ME=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function my(n,{attrX:i,attrY:s,attrScale:r,pathLength:c,pathSpacing:m=1,pathOffset:f=0,...h},p,g,y){if(pf(n,h,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:S}=n;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox);for(const C of ME)b[C]!==void 0&&(S[C]=b[C],delete b[C]);i!==void 0&&(b.x=i),s!==void 0&&(b.y=s),r!==void 0&&(b.scale=r),c!==void 0&&DE(b,c,m,f,!1)}const hy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),py=n=>typeof n=="string"&&n.toLowerCase()==="svg";function CE(n,i,s,r){fy(n,i,void 0,r);for(const c in i.attrs)n.setAttribute(hy.has(c)?c:lf(c),i.attrs[c])}function gy(n,i,s){const r=gf(n,i,s);for(const c in n)if(ut(n[c])||ut(i[c])){const m=zo.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;r[m]=n[c]}return r}class zE extends sy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=We}getBaseTargetFromProps(i,s){return i[s]}readValueFromInstance(i,s){if(Oo.has(s)){const r=Kv(s);return r&&r.default||0}return s=hy.has(s)?s:lf(s),i.getAttribute(s)}scrapeMotionValuesFromProps(i,s,r){return gy(i,s,r)}build(i,s,r){my(i,s,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(i,s,r,c){CE(i,s,r,c)}mount(i){this.isSVGTag=py(i.tagName),super.mount(i)}}const OE=hf.length;function vy(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?vy(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const i={};for(let s=0;s<OE;s++){const r=hf[s],c=n.props[r];(wi(c)||c===!1)&&(i[r]=c)}return i}function yy(n,i){if(!Array.isArray(i))return!1;const s=i.length;if(s!==n.length)return!1;for(let r=0;r<s;r++)if(i[r]!==n[r])return!1;return!0}const RE=[...mf].reverse(),qE=mf.length;function NE(n){return i=>Promise.all(i.map(({animation:s,options:r})=>z1(n,s,r)))}function VE(n){let i=NE(n),s=lg(),r=!0;const c=p=>(g,y)=>{var S;const b=Do(n,y,p==="exit"?(S=n.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:C,transitionEnd:R,...U}=b;g={...g,...U,...R}}return g};function m(p){i=p(n)}function f(p){const{props:g}=n,y=vy(n.parent)||{},b=[],S=new Set;let C={},R=1/0;for(let B=0;B<qE;B++){const L=RE[B],X=s[L],Q=g[L]!==void 0?g[L]:y[L],J=wi(Q),P=L===p?X.isActive:null;P===!1&&(R=B);let oe=Q===y[L]&&Q!==g[L]&&J;if(oe&&r&&n.manuallyAnimateOnMount&&(oe=!1),X.protectedKeys={...C},!X.isActive&&P===null||!Q&&!X.prevProp||Dr(Q)||typeof Q=="boolean")continue;if(L==="exit"&&X.isActive&&P!==!0){X.prevResolvedValues&&(C={...C,...X.prevResolvedValues});continue}const F=wE(X.prevProp,Q);let _=F||L===p&&X.isActive&&!oe&&J||B>R&&J,ie=!1;const Ae=Array.isArray(Q)?Q:[Q];let je=Ae.reduce(c(L),{});P===!1&&(je={});const{prevResolvedValues:Ne={}}=X,mt={...Ne,...je},rt=H=>{_=!0,S.has(H)&&(ie=!0,S.delete(H)),X.needsAnimating[H]=!0;const W=n.getValue(H);W&&(W.liveStyle=!1)};for(const H in mt){const W=je[H],de=Ne[H];if(C.hasOwnProperty(H))continue;let Y=!1;Cc(W)&&Cc(de)?Y=!yy(W,de):Y=W!==de,Y?W!=null?rt(H):S.add(H):W!==void 0&&S.has(H)?rt(H):X.protectedKeys[H]=!0}X.prevProp=Q,X.prevResolvedValues=je,X.isActive&&(C={...C,...je}),r&&n.blockInitialAnimation&&(_=!1);const Ge=oe&&F;_&&(!Ge||ie)&&b.push(...Ae.map(H=>{const W={type:L};if(typeof H=="string"&&r&&!Ge&&n.manuallyAnimateOnMount&&n.parent){const{parent:de}=n,Y=Do(de,H);if(de.enteringChildren&&Y){const{delayChildren:x}=Y.transition||{};W.delay=Hv(de.enteringChildren,n,x)}}return{animation:H,options:W}}))}if(S.size){const B={};if(typeof g.initial!="boolean"){const L=Do(n,Array.isArray(g.initial)?g.initial[0]:g.initial);L&&L.transition&&(B.transition=L.transition)}S.forEach(L=>{const X=n.getBaseTarget(L),Q=n.getValue(L);Q&&(Q.liveStyle=!0),B[L]=X??null}),b.push({animation:B})}let U=!!b.length;return r&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(U=!1),r=!1,U?i(b):Promise.resolve()}function h(p,g){var b;if(s[p].isActive===g)return Promise.resolve();(b=n.variantChildren)==null||b.forEach(S=>{var C;return(C=S.animationState)==null?void 0:C.setActive(p,g)}),s[p].isActive=g;const y=f(p);for(const S in s)s[S].protectedKeys={};return y}return{animateChanges:f,setActive:h,setAnimateFunction:m,getState:()=>s,reset:()=>{s=lg()}}}function wE(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!yy(i,n):!1}function Mn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lg(){return{animate:Mn(!0),whileInView:Mn(),whileHover:Mn(),whileTap:Mn(),whileDrag:Mn(),whileFocus:Mn(),exit:Mn()}}function ug(n,i){n.min=i.min,n.max=i.max}function Zt(n,i){ug(n.x,i.x),ug(n.y,i.y)}function cg(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}const by=1e-4,jE=1-by,_E=1+by,Sy=.01,UE=0-Sy,BE=0+Sy;function dt(n){return n.max-n.min}function LE(n,i,s){return Math.abs(n-i)<=s}function fg(n,i,s,r=.5){n.origin=r,n.originPoint=Ue(i.min,i.max,n.origin),n.scale=dt(s)/dt(i),n.translate=Ue(s.min,s.max,n.origin)-n.originPoint,(n.scale>=jE&&n.scale<=_E||isNaN(n.scale))&&(n.scale=1),(n.translate>=UE&&n.translate<=BE||isNaN(n.translate))&&(n.translate=0)}function Oi(n,i,s,r){fg(n.x,i.x,s.x,r?r.originX:void 0),fg(n.y,i.y,s.y,r?r.originY:void 0)}function dg(n,i,s){n.min=s.min+i.min,n.max=n.min+dt(i)}function HE(n,i,s){dg(n.x,i.x,s.x),dg(n.y,i.y,s.y)}function mg(n,i,s){n.min=i.min-s.min,n.max=n.min+dt(i)}function Tr(n,i,s){mg(n.x,i.x,s.x),mg(n.y,i.y,s.y)}function hg(n,i,s,r,c){return n-=i,n=Sr(n,1/s,r),c!==void 0&&(n=Sr(n,1/c,r)),n}function GE(n,i=0,s=1,r=.5,c,m=n,f=n){if(na.test(i)&&(i=parseFloat(i),i=Ue(f.min,f.max,i/100)-f.min),typeof i!="number")return;let h=Ue(m.min,m.max,r);n===m&&(h-=i),n.min=hg(n.min,i,s,h,c),n.max=hg(n.max,i,s,h,c)}function pg(n,i,[s,r,c],m,f){GE(n,i[s],i[r],i[c],i.scale,m,f)}const QE=["x","scaleX","originX"],YE=["y","scaleY","originY"];function gg(n,i,s,r){pg(n.x,i,QE,s?s.x:void 0,r?r.x:void 0),pg(n.y,i,YE,s?s.y:void 0,r?r.y:void 0)}function vg(n){return n.translate===0&&n.scale===1}function Ty(n){return vg(n.x)&&vg(n.y)}function yg(n,i){return n.min===i.min&&n.max===i.max}function PE(n,i){return yg(n.x,i.x)&&yg(n.y,i.y)}function bg(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Ey(n,i){return bg(n.x,i.x)&&bg(n.y,i.y)}function Sg(n){return dt(n.x)/dt(n.y)}function Tg(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}function aa(n){return[n("x"),n("y")]}function kE(n,i,s){let r="";const c=n.x.translate/i.x,m=n.y.translate/i.y,f=(s==null?void 0:s.z)||0;if((c||m||f)&&(r=`translate3d(${c}px, ${m}px, ${f}px) `),(i.x!==1||i.y!==1)&&(r+=`scale(${1/i.x}, ${1/i.y}) `),s){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:S,skewX:C,skewY:R}=s;g&&(r=`perspective(${g}px) ${r}`),y&&(r+=`rotate(${y}deg) `),b&&(r+=`rotateX(${b}deg) `),S&&(r+=`rotateY(${S}deg) `),C&&(r+=`skewX(${C}deg) `),R&&(r+=`skewY(${R}deg) `)}const h=n.x.scale*i.x,p=n.y.scale*i.y;return(h!==1||p!==1)&&(r+=`scale(${h}, ${p})`),r||"none"}const xy=["TopLeft","TopRight","BottomLeft","BottomRight"],XE=xy.length,Eg=n=>typeof n=="string"?parseFloat(n):n,xg=n=>typeof n=="number"||ee.test(n);function ZE(n,i,s,r,c,m){c?(n.opacity=Ue(0,s.opacity??1,JE(r)),n.opacityExit=Ue(i.opacity??1,0,KE(r))):m&&(n.opacity=Ue(i.opacity??1,s.opacity??1,r));for(let f=0;f<XE;f++){const h=`border${xy[f]}Radius`;let p=Ag(i,h),g=Ag(s,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||xg(p)===xg(g)?(n[h]=Math.max(Ue(Eg(p),Eg(g),r),0),(na.test(g)||na.test(p))&&(n[h]+="%")):n[h]=g}(i.rotate||s.rotate)&&(n.rotate=Ue(i.rotate||0,s.rotate||0,r))}function Ag(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const JE=Ay(0,.5,pv),KE=Ay(.5,.95,Yt);function Ay(n,i,s){return r=>r<n?0:r>i?1:s(qi(n,i,r))}function FE(n,i,s){const r=ut(n)?n:Mo(n);return r.start(sf("",r,i,s)),r.animation}function ji(n,i,s,r={passive:!0}){return n.addEventListener(i,s,r),()=>n.removeEventListener(i,s)}const WE=(n,i)=>n.depth-i.depth;class $E{constructor(){this.children=[],this.isDirty=!1}add(i){Pc(this.children,i),this.isDirty=!0}remove(i){pr(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(WE),this.isDirty=!1,this.children.forEach(i)}}function IE(n,i){const s=ft.now(),r=({timestamp:c})=>{const m=c-s;m>=i&&(on(r),n(m-i))};return qe.setup(r,!0),()=>on(r)}function mr(n){return ut(n)?n.get():n}class ex{constructor(){this.members=[]}add(i){Pc(this.members,i);for(let s=this.members.length-1;s>=0;s--){const r=this.members[s];if(r===i||r===this.lead||r===this.prevLead)continue;const c=r.instance;c&&c.isConnected===!1&&r.isPresent!==!1&&!r.snapshot&&pr(this.members,r)}i.scheduleRender()}remove(i){if(pr(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(i){const s=this.members.findIndex(c=>i===c);if(s===0)return!1;let r;for(let c=s;c>=0;c--){const m=this.members[c],f=m.instance;if(m.isPresent!==!1&&(!f||f.isConnected!==!1)){r=m;break}}return r?(this.promote(r),!0):!1}promote(i,s){const r=this.lead;if(i!==r&&(this.prevLead=r,this.lead=i,i.show(),r)){r.instance&&r.scheduleRender(),i.scheduleRender();const c=r.options.layoutDependency,m=i.options.layoutDependency;if(!(c!==void 0&&m!==void 0&&c===m)){const p=r.instance;p&&p.isConnected===!1&&!r.snapshot||(i.resumeFrom=r,s&&(i.resumeFrom.preserveOpacity=!0),r.snapshot&&(i.snapshot=r.snapshot,i.snapshot.latestValues=r.animationValues||r.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0))}const{crossfade:h}=i.options;h===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:s,resumingFrom:r}=i;s.onExitComplete&&s.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const hr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ic=["","X","Y","Z"],tx=1e3;let ax=0;function sc(n,i,s,r){const{latestValues:c}=i;c[n]&&(s[n]=c[n],i.setStaticValue(n,0),r&&(r[n]=0))}function Dy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const s=kv(i);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:m}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",qe,!(c||m))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Dy(r)}function My({attachResizeListener:n,defaultParent:i,measureScroll:s,checkIsScrollRoot:r,resetTransform:c}){return class{constructor(f={},h=i==null?void 0:i()){this.id=ax++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(ix),this.nodes.forEach(ux),this.nodes.forEach(cx),this.nodes.forEach(sx)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new $E)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Xc),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const p=this.eventHandlers.get(f);p&&p.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=df(f)&&!oE(f),this.instance=f;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),n){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;qe.read(()=>{b=window.innerWidth}),n(f,()=>{const C=window.innerWidth;C!==b&&(b=C,this.root.updateBlockedByResize=!0,y&&y(),y=IE(S,250),hr.hasAnimatedSinceResize&&(hr.hasAnimatedSinceResize=!1,this.nodes.forEach(Cg)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const R=this.options.transition||g.getDefaultTransition()||px,{onLayoutAnimationStart:U,onLayoutAnimationComplete:B}=g.getProps(),L=!this.targetLayout||!Ey(this.targetLayout,C),X=!b&&S;if(this.options.layoutRoot||this.resumeFrom||X||b&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const Q={...of(R,"layout"),onPlay:U,onComplete:B};(g.shouldReduceMotion||this.options.layoutRoot)&&(Q.delay=0,Q.type=!1),this.startAnimation(Q),this.setAnimationOrigin(y,X)}else b||Cg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),on(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(fx),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Dy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Dg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Mg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(lx),this.nodes.forEach(nx),this.nodes.forEach(ox)):this.nodes.forEach(Mg),this.clearAllSnapshots();const h=ft.now();st.delta=oa(0,1e3/60,h-st.timestamp),st.timestamp=h,st.isProcessing=!0,Wu.update.process(st),Wu.preRender.process(st),Wu.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,cf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(rx),this.sharedNodes.forEach(dx)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!dt(this.snapshot.measuredBox.x)&&!dt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=We(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h&&this.instance){const p=r(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!Ty(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;f&&this.instance&&(h||zn(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return f&&(p=this.removeTransform(p)),gx(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:f}=this.options;if(!f)return We();const h=f.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(vx))){const{scroll:y}=this.root;y&&(xo(h.x,y.offset.x),xo(h.y,y.offset.y))}return h}removeElementScroll(f){var p;const h=We();if(Zt(h,f),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:b,options:S}=y;y!==this.root&&b&&S.layoutScroll&&(b.wasRoot&&Zt(h,f),xo(h.x,b.offset.x),xo(h.y,b.offset.y))}return h}applyTransform(f,h=!1){const p=We();Zt(p,f);for(let g=0;g<this.path.length;g++){const y=this.path[g];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ao(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),zn(y.latestValues)&&Ao(p,y.latestValues)}return zn(this.latestValues)&&Ao(p,this.latestValues),p}removeTransform(f){const h=We();Zt(h,f);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!zn(g.latestValues))continue;wc(g.latestValues)&&g.updateSnapshot();const y=We(),b=g.measurePageBox();Zt(y,b),gg(h,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return zn(this.latestValues)&&gg(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var C;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=st.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=We(),this.targetWithTransforms=We()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),HE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Zt(this.target,this.layout.layoutBox),uy(this.target,this.targetDelta)):Zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||wc(this.parent.latestValues)||ly(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(f,h,p){this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),Tr(this.relativeTargetOrigin,h,p),Zt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var R;const f=this.getLead(),h=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||(R=this.parent)!=null&&R.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===st.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Zt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;pE(this.layoutCorrected,this.treeScale,this.path,h),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=We());const{target:C}=f;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(cg(this.prevProjectionDelta.x,this.projectionDelta.x),cg(this.prevProjectionDelta.y,this.projectionDelta.y)),Oi(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!Tg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Tg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Eo(),this.projectionDelta=Eo(),this.projectionDeltaWithTransform=Eo()}setAnimationOrigin(f,h=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},b=Eo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const S=We(),C=p?p.source:void 0,R=this.layout?this.layout.source:void 0,U=C!==R,B=this.getStack(),L=!B||B.members.length<=1,X=!!(U&&!L&&this.options.crossfade===!0&&!this.path.some(hx));this.animationProgress=0;let Q;this.mixTargetDelta=J=>{const P=J/1e3;zg(b.x,f.x,P),zg(b.y,f.y,P),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Tr(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),mx(this.relativeTarget,this.relativeTargetOrigin,S,P),Q&&PE(this.relativeTarget,Q)&&(this.isProjectionDirty=!1),Q||(Q=We()),Zt(Q,this.relativeTarget)),U&&(this.animationValues=y,ZE(y,g,this.latestValues,P,X,L)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(on(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qe.update(()=>{hr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Mo(0)),this.motionValue.jump(0,!1),this.currentAnimation=FE(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),f.onUpdate&&f.onUpdate(y)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(tx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:y}=f;if(!(!h||!p||!g)){if(this!==f&&this.layout&&g&&Cy(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||We();const b=dt(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+b;const S=dt(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+S}Zt(h,p),Ao(h,y),Oi(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new ex),this.sharedNodes.get(f).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var h;const{layoutId:f}=this.options;return f?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:f}=this.options;return f?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&sc("z",f,g,this.animationValues);for(let y=0;y<ic.length;y++)sc(`rotate${ic[y]}`,f,g,this.animationValues),sc(`skew${ic[y]}`,f,g,this.animationValues);f.render();for(const y in g)f.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);f.scheduleRender()}applyProjectionStyles(f,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=mr(h==null?void 0:h.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=mr(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!zn(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=kE(this.projectionDeltaWithTransform,this.treeScale,y);p&&(b=p(y,b)),f.transform=b;const{x:S,y:C}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${C.origin*100}% 0`,g.animationValues?f.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const R in _c){if(y[R]===void 0)continue;const{correct:U,applyTo:B,isCSSVariable:L}=_c[R],X=b==="none"?y[R]:U(y[R],g);if(B){const Q=B.length;for(let J=0;J<Q;J++)f[B[J]]=X}else L?this.options.visualElement.renderState.vars[R]=X:f[R]=X}this.options.layoutId&&(f.pointerEvents=g===this?mr(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var h;return(h=f.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Dg),this.root.sharedNodes.clear()}}}function nx(n){n.updateLayout()}function ox(n){var s;const i=((s=n.resumeFrom)==null?void 0:s.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:c}=n.layout,{animationType:m}=n.options,f=i.source!==n.layout.source;m==="size"?aa(b=>{const S=f?i.measuredBox[b]:i.layoutBox[b],C=dt(S);S.min=r[b].min,S.max=S.min+C}):Cy(m,i.layoutBox,r)&&aa(b=>{const S=f?i.measuredBox[b]:i.layoutBox[b],C=dt(r[b]);S.max=S.min+C,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+C)});const h=Eo();Oi(h,r,i.layoutBox);const p=Eo();f?Oi(p,n.applyTransform(c,!0),i.measuredBox):Oi(p,r,i.layoutBox);const g=!Ty(h);let y=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:S,layout:C}=b;if(S&&C){const R=We();Tr(R,i.layoutBox,S.layoutBox);const U=We();Tr(U,r,C.layoutBox),Ey(R,U)||(y=!0),b.options.layoutRoot&&(n.relativeTarget=U,n.relativeTargetOrigin=R,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:i,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function ix(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function sx(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function rx(n){n.clearSnapshot()}function Dg(n){n.clearMeasurements()}function Mg(n){n.isLayoutDirty=!1}function lx(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function Cg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function ux(n){n.resolveTargetDelta()}function cx(n){n.calcProjection()}function fx(n){n.resetSkewAndRotation()}function dx(n){n.removeLeadSnapshot()}function zg(n,i,s){n.translate=Ue(i.translate,0,s),n.scale=Ue(i.scale,1,s),n.origin=i.origin,n.originPoint=i.originPoint}function Og(n,i,s,r){n.min=Ue(i.min,s.min,r),n.max=Ue(i.max,s.max,r)}function mx(n,i,s,r){Og(n.x,i.x,s.x,r),Og(n.y,i.y,s.y,r)}function hx(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const px={duration:.45,ease:[.4,0,.1,1]},Rg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),qg=Rg("applewebkit/")&&!Rg("chrome/")?Math.round:Yt;function Ng(n){n.min=qg(n.min),n.max=qg(n.max)}function gx(n){Ng(n.x),Ng(n.y)}function Cy(n,i,s){return n==="position"||n==="preserve-aspect"&&!LE(Sg(i),Sg(s),.2)}function vx(n){var i;return n!==n.root&&((i=n.scroll)==null?void 0:i.wasRoot)}const yx=My({attachResizeListener:(n,i)=>ji(n,"resize",i),measureScroll:()=>{var n,i;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((i=document.body)==null?void 0:i.scrollTop)||0}},checkIsScrollRoot:()=>!0}),rc={current:void 0},zy=My({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!rc.current){const n=new yx({});n.mount(window),n.setOptions({layoutScroll:!0}),rc.current=n}return rc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),vf=k.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Vg(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function bx(...n){return i=>{let s=!1;const r=n.map(c=>{const m=Vg(c,i);return!s&&typeof m=="function"&&(s=!0),m});if(s)return()=>{for(let c=0;c<r.length;c++){const m=r[c];typeof m=="function"?m():Vg(n[c],null)}}}}function Sx(...n){return k.useCallback(bx(...n),n)}class Tx extends k.Component{getSnapshotBeforeUpdate(i){const s=this.props.childRef.current;if(s&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=s.offsetParent,c=Nc(r)&&r.offsetWidth||0,m=Nc(r)&&r.offsetHeight||0,f=this.props.sizeRef.current;f.height=s.offsetHeight||0,f.width=s.offsetWidth||0,f.top=s.offsetTop,f.left=s.offsetLeft,f.right=c-f.width-f.left,f.bottom=m-f.height-f.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Ex({children:n,isPresent:i,anchorX:s,anchorY:r,root:c,pop:m}){var S;const f=k.useId(),h=k.useRef(null),p=k.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=k.useContext(vf),y=((S=n.props)==null?void 0:S.ref)??(n==null?void 0:n.ref),b=Sx(h,y);return k.useInsertionEffect(()=>{const{width:C,height:R,top:U,left:B,right:L,bottom:X}=p.current;if(i||m===!1||!h.current||!C||!R)return;const Q=s==="left"?`left: ${B}`:`right: ${L}`,J=r==="bottom"?`bottom: ${X}`:`top: ${U}`;h.current.dataset.motionPopId=f;const P=document.createElement("style");g&&(P.nonce=g);const oe=c??document.head;return oe.appendChild(P),P.sheet&&P.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${C}px !important;
            height: ${R}px !important;
            ${Q}px !important;
            ${J}px !important;
          }
        `),()=>{oe.contains(P)&&oe.removeChild(P)}},[i]),G.jsx(Tx,{isPresent:i,childRef:h,sizeRef:p,pop:m,children:m===!1?n:k.cloneElement(n,{ref:b})})}const xx=({children:n,initial:i,isPresent:s,onExitComplete:r,custom:c,presenceAffectsLayout:m,mode:f,anchorX:h,anchorY:p,root:g})=>{const y=Yc(Ax),b=k.useId();let S=!0,C=k.useMemo(()=>(S=!1,{id:b,initial:i,isPresent:s,custom:c,onExitComplete:R=>{y.set(R,!0);for(const U of y.values())if(!U)return;r&&r()},register:R=>(y.set(R,!1),()=>y.delete(R))}),[s,y,r]);return m&&S&&(C={...C}),k.useMemo(()=>{y.forEach((R,U)=>y.set(U,!1))},[s]),k.useEffect(()=>{!s&&!y.size&&r&&r()},[s]),n=G.jsx(Ex,{pop:f==="popLayout",isPresent:s,anchorX:h,anchorY:p,root:g,children:n}),G.jsx(Ar.Provider,{value:C,children:n})};function Ax(){return new Map}function Oy(n=!0){const i=k.useContext(Ar);if(i===null)return[!0,null];const{isPresent:s,onExitComplete:r,register:c}=i,m=k.useId();k.useEffect(()=>{if(n)return c(m)},[n]);const f=k.useCallback(()=>n&&r&&r(m),[m,r,n]);return!s&&r?[!1,f]:[!0]}const ir=n=>n.key||"";function wg(n){const i=[];return k.Children.forEach(n,s=>{k.isValidElement(s)&&i.push(s)}),i}const Dx=({children:n,custom:i,initial:s=!0,onExitComplete:r,presenceAffectsLayout:c=!0,mode:m="sync",propagate:f=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[y,b]=Oy(f),S=k.useMemo(()=>wg(n),[n]),C=f&&!y?[]:S.map(ir),R=k.useRef(!0),U=k.useRef(S),B=Yc(()=>new Map),L=k.useRef(new Set),[X,Q]=k.useState(S),[J,P]=k.useState(S);nv(()=>{R.current=!1,U.current=S;for(let _=0;_<J.length;_++){const ie=ir(J[_]);C.includes(ie)?(B.delete(ie),L.current.delete(ie)):B.get(ie)!==!0&&B.set(ie,!1)}},[J,C.length,C.join("-")]);const oe=[];if(S!==X){let _=[...S];for(let ie=0;ie<J.length;ie++){const Ae=J[ie],je=ir(Ae);C.includes(je)||(_.splice(ie,0,Ae),oe.push(Ae))}return m==="wait"&&oe.length&&(_=oe),P(wg(_)),Q(S),null}const{forceRender:F}=k.useContext(Qc);return G.jsx(G.Fragment,{children:J.map(_=>{const ie=ir(_),Ae=f&&!y?!1:S===J||C.includes(ie),je=()=>{if(L.current.has(ie))return;if(L.current.add(ie),B.has(ie))B.set(ie,!0);else return;let Ne=!0;B.forEach(mt=>{mt||(Ne=!1)}),Ne&&(F==null||F(),P(U.current),f&&(b==null||b()),r&&r())};return G.jsx(xx,{isPresent:Ae,initial:!R.current||s?void 0:!1,custom:i,presenceAffectsLayout:c,mode:m,root:g,onExitComplete:Ae?void 0:je,anchorX:h,anchorY:p,children:_},ie)})})},Ry=k.createContext({strict:!1}),jg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let _g=!1;function Mx(){if(_g)return;const n={};for(const i in jg)n[i]={isEnabled:s=>jg[i].some(r=>!!s[r])};iy(n),_g=!0}function qy(){return Mx(),fE()}function Cx(n){const i=qy();for(const s in n)i[s]={...i[s],...n[s]};iy(i)}const zx=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Er(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||zx.has(n)}let Ny=n=>!Er(n);function Ox(n){typeof n=="function"&&(Ny=i=>i.startsWith("on")?!Er(i):n(i))}try{Ox(require("@emotion/is-prop-valid").default)}catch{}function Rx(n,i,s){const r={};for(const c in n)c==="values"&&typeof n.values=="object"||(Ny(c)||s===!0&&Er(c)||!i&&!Er(c)||n.draggable&&c.startsWith("onDrag"))&&(r[c]=n[c]);return r}const Cr=k.createContext({});function qx(n,i){if(Mr(n)){const{initial:s,animate:r}=n;return{initial:s===!1||wi(s)?s:void 0,animate:wi(r)?r:void 0}}return n.inherit!==!1?i:{}}function Nx(n){const{initial:i,animate:s}=qx(n,k.useContext(Cr));return k.useMemo(()=>({initial:i,animate:s}),[Ug(i),Ug(s)])}function Ug(n){return Array.isArray(n)?n.join(" "):n}const yf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Vy(n,i,s){for(const r in i)!ut(i[r])&&!dy(r,s)&&(n[r]=i[r])}function Vx({transformTemplate:n},i){return k.useMemo(()=>{const s=yf();return pf(s,i,n),Object.assign({},s.vars,s.style)},[i])}function wx(n,i){const s=n.style||{},r={};return Vy(r,s,n),Object.assign(r,Vx(n,i)),r}function jx(n,i){const s={},r=wx(n,i);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=r,s}const wy=()=>({...yf(),attrs:{}});function _x(n,i,s,r){const c=k.useMemo(()=>{const m=wy();return my(m,i,py(r),n.transformTemplate,n.style),{...m.attrs,style:{...m.style}}},[i]);if(n.style){const m={};Vy(m,n.style,n),c.style={...m,...c.style}}return c}const Ux=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function bf(n){return typeof n!="string"||n.includes("-")?!1:!!(Ux.indexOf(n)>-1||/[A-Z]/u.test(n))}function Bx(n,i,s,{latestValues:r},c,m=!1,f){const p=(f??bf(n)?_x:jx)(i,r,c,n),g=Rx(i,typeof n=="string",m),y=n!==k.Fragment?{...g,...p,ref:s}:{},{children:b}=i,S=k.useMemo(()=>ut(b)?b.get():b,[b]);return k.createElement(n,{...y,children:S})}function Lx({scrapeMotionValuesFromProps:n,createRenderState:i},s,r,c){return{latestValues:Hx(s,r,c,n),renderState:i()}}function Hx(n,i,s,r){const c={},m=r(n,{});for(const S in m)c[S]=mr(m[S]);let{initial:f,animate:h}=n;const p=Mr(n),g=ny(n);i&&g&&!p&&n.inherit!==!1&&(f===void 0&&(f=i.initial),h===void 0&&(h=i.animate));let y=s?s.initial===!1:!1;y=y||f===!1;const b=y?h:f;if(b&&typeof b!="boolean"&&!Dr(b)){const S=Array.isArray(b)?b:[b];for(let C=0;C<S.length;C++){const R=rf(n,S[C]);if(R){const{transitionEnd:U,transition:B,...L}=R;for(const X in L){let Q=L[X];if(Array.isArray(Q)){const J=y?Q.length-1:0;Q=Q[J]}Q!==null&&(c[X]=Q)}for(const X in U)c[X]=U[X]}}}return c}const jy=n=>(i,s)=>{const r=k.useContext(Cr),c=k.useContext(Ar),m=()=>Lx(n,i,r,c);return s?m():Yc(m)},Gx=jy({scrapeMotionValuesFromProps:gf,createRenderState:yf}),Qx=jy({scrapeMotionValuesFromProps:gy,createRenderState:wy}),Yx=Symbol.for("motionComponentSymbol");function Px(n,i,s){const r=k.useRef(s);k.useInsertionEffect(()=>{r.current=s});const c=k.useRef(null);return k.useCallback(m=>{var h;m&&((h=n.onMount)==null||h.call(n,m)),i&&(m?i.mount(m):i.unmount());const f=r.current;if(typeof f=="function")if(m){const p=f(m);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):f(m);else f&&(f.current=m)},[i])}const _y=k.createContext({});function bo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function kx(n,i,s,r,c,m){var Q,J;const{visualElement:f}=k.useContext(Cr),h=k.useContext(Ry),p=k.useContext(Ar),g=k.useContext(vf),y=g.reducedMotion,b=g.skipAnimations,S=k.useRef(null),C=k.useRef(!1);r=r||h.renderer,!S.current&&r&&(S.current=r(n,{visualState:i,parent:f,props:s,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:y,skipAnimations:b,isSVG:m}),C.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const R=S.current,U=k.useContext(_y);R&&!R.projection&&c&&(R.type==="html"||R.type==="svg")&&Xx(S.current,s,c,U);const B=k.useRef(!1);k.useInsertionEffect(()=>{R&&B.current&&R.update(s,p)});const L=s[Pv],X=k.useRef(!!L&&!((Q=window.MotionHandoffIsComplete)!=null&&Q.call(window,L))&&((J=window.MotionHasOptimisedAnimation)==null?void 0:J.call(window,L)));return nv(()=>{C.current=!0,R&&(B.current=!0,window.MotionIsMounted=!0,R.updateFeatures(),R.scheduleRenderMicrotask(),X.current&&R.animationState&&R.animationState.animateChanges())}),k.useEffect(()=>{R&&(!X.current&&R.animationState&&R.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{var P;(P=window.MotionHandoffMarkAsComplete)==null||P.call(window,L)}),X.current=!1),R.enteringChildren=void 0)}),R}function Xx(n,i,s,r){const{layoutId:c,layout:m,drag:f,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutCrossfade:y}=i;n.projection=new s(n.latestValues,i["data-framer-portal-id"]?void 0:Uy(n.parent)),n.projection.setOptions({layoutId:c,layout:m,alwaysMeasureLayout:!!f||h&&bo(h),visualElement:n,animationType:typeof m=="string"?m:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:p,layoutRoot:g})}function Uy(n){if(n)return n.options.allowProjection!==!1?n.projection:Uy(n.parent)}function lc(n,{forwardMotionProps:i=!1,type:s}={},r,c){r&&Cx(r);const m=s?s==="svg":bf(n),f=m?Qx:Gx;function h(g,y){let b;const S={...k.useContext(vf),...g,layoutId:Zx(g)},{isStatic:C}=S,R=Nx(g),U=f(g,C);if(!C&&av){Jx();const B=Kx(S);b=B.MeasureLayout,R.visualElement=kx(n,U,S,c,B.ProjectionNode,m)}return G.jsxs(Cr.Provider,{value:R,children:[b&&R.visualElement?G.jsx(b,{visualElement:R.visualElement,...S}):null,Bx(n,g,Px(U,R.visualElement,y),U,C,i,m)]})}h.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const p=k.forwardRef(h);return p[Yx]=n,p}function Zx({layoutId:n}){const i=k.useContext(Qc).id;return i&&n!==void 0?i+"-"+n:n}function Jx(n,i){k.useContext(Ry).strict}function Kx(n){const i=qy(),{drag:s,layout:r}=i;if(!s&&!r)return{};const c={...s,...r};return{MeasureLayout:s!=null&&s.isEnabled(n)||r!=null&&r.isEnabled(n)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Fx(n,i){if(typeof Proxy>"u")return lc;const s=new Map,r=(m,f)=>lc(m,f,n,i),c=(m,f)=>r(m,f);return new Proxy(c,{get:(m,f)=>f==="create"?r:(s.has(f)||s.set(f,lc(f,void 0,n,i)),s.get(f))})}const Wx=(n,i)=>i.isSVG??bf(n)?new zE(i):new EE(i,{allowProjection:n!==k.Fragment});class $x extends sn{constructor(i){super(i),i.animationState||(i.animationState=VE(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Dr(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:s}=this.node.prevProps||{};i!==s&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let Ix=0;class eA extends sn{constructor(){super(...arguments),this.id=Ix++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:s}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===r)return;const c=this.node.animationState.setActive("exit",!i);s&&!i&&c.then(()=>{s(this.id)})}mount(){const{register:i,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const tA={animation:{Feature:$x},exit:{Feature:eA}};function Li(n){return{point:{x:n.pageX,y:n.pageY}}}const aA=n=>i=>ff(i)&&n(i,Li(i));function Ri(n,i,s,r){return ji(n,i,aA(s),r)}const By=({current:n})=>n?n.ownerDocument.defaultView:null,Bg=(n,i)=>Math.abs(n-i);function nA(n,i){const s=Bg(n.x,i.x),r=Bg(n.y,i.y);return Math.sqrt(s**2+r**2)}const Lg=new Set(["auto","scroll"]);class Ly{constructor(i,s,{transformPagePoint:r,contextWindow:c=window,dragSnapToOrigin:m=!1,distanceThreshold:f=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=C=>{this.handleScroll(C.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=cc(this.lastMoveEventInfo,this.history),R=this.startEvent!==null,U=nA(C.offset,{x:0,y:0})>=this.distanceThreshold;if(!R&&!U)return;const{point:B}=C,{timestamp:L}=st;this.history.push({...B,timestamp:L});const{onStart:X,onMove:Q}=this.handlers;R||(X&&X(this.lastMoveEvent,C),this.startEvent=this.lastMoveEvent),Q&&Q(this.lastMoveEvent,C)},this.handlePointerMove=(C,R)=>{this.lastMoveEvent=C,this.lastMoveEventInfo=uc(R,this.transformPagePoint),qe.update(this.updatePoint,!0)},this.handlePointerUp=(C,R)=>{this.end();const{onEnd:U,onSessionEnd:B,resumeAnimation:L}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&L&&L(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const X=cc(C.type==="pointercancel"?this.lastMoveEventInfo:uc(R,this.transformPagePoint),this.history);this.startEvent&&U&&U(C,X),B&&B(C,X)},!ff(i))return;this.dragSnapToOrigin=m,this.handlers=s,this.transformPagePoint=r,this.distanceThreshold=f,this.contextWindow=c||window;const p=Li(i),g=uc(p,this.transformPagePoint),{point:y}=g,{timestamp:b}=st;this.history=[{...y,timestamp:b}];const{onSessionStart:S}=s;S&&S(i,cc(g,this.history)),this.removeListeners=_i(Ri(this.contextWindow,"pointermove",this.handlePointerMove),Ri(this.contextWindow,"pointerup",this.handlePointerUp),Ri(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(i){let s=i.parentElement;for(;s;){const r=getComputedStyle(s);(Lg.has(r.overflowX)||Lg.has(r.overflowY))&&this.scrollPositions.set(s,{x:s.scrollLeft,y:s.scrollTop}),s=s.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const s=this.scrollPositions.get(i);if(!s)return;const r=i===window,c=r?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},m={x:c.x-s.x,y:c.y-s.y};m.x===0&&m.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(i,c),qe.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),on(this.updatePoint)}}function uc(n,i){return i?{point:i(n.point)}:n}function Hg(n,i){return{x:n.x-i.x,y:n.y-i.y}}function cc({point:n},i){return{point:n,delta:Hg(n,Hy(i)),offset:Hg(n,oA(i)),velocity:iA(i,.1)}}function oA(n){return n[0]}function Hy(n){return n[n.length-1]}function iA(n,i){if(n.length<2)return{x:0,y:0};let s=n.length-1,r=null;const c=Hy(n);for(;s>=0&&(r=n[s],!(c.timestamp-r.timestamp>Kt(i)));)s--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&c.timestamp-r.timestamp>Kt(i)*2&&(r=n[1]);const m=Qt(c.timestamp-r.timestamp);if(m===0)return{x:0,y:0};const f={x:(c.x-r.x)/m,y:(c.y-r.y)/m};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function sA(n,{min:i,max:s},r){return i!==void 0&&n<i?n=r?Ue(i,n,r.min):Math.max(n,i):s!==void 0&&n>s&&(n=r?Ue(s,n,r.max):Math.min(n,s)),n}function Gg(n,i,s){return{min:i!==void 0?n.min+i:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function rA(n,{top:i,left:s,bottom:r,right:c}){return{x:Gg(n.x,s,c),y:Gg(n.y,i,r)}}function Qg(n,i){let s=i.min-n.min,r=i.max-n.max;return i.max-i.min<n.max-n.min&&([s,r]=[r,s]),{min:s,max:r}}function lA(n,i){return{x:Qg(n.x,i.x),y:Qg(n.y,i.y)}}function uA(n,i){let s=.5;const r=dt(n),c=dt(i);return c>r?s=qi(i.min,i.max-r,n.min):r>c&&(s=qi(n.min,n.max-c,i.min)),oa(0,1,s)}function cA(n,i){const s={};return i.min!==void 0&&(s.min=i.min-n.min),i.max!==void 0&&(s.max=i.max-n.min),s}const Uc=.35;function fA(n=Uc){return n===!1?n=0:n===!0&&(n=Uc),{x:Yg(n,"left","right"),y:Yg(n,"top","bottom")}}function Yg(n,i,s){return{min:Pg(n,i),max:Pg(n,s)}}function Pg(n,i){return typeof n=="number"?n:n[i]||0}const dA=new WeakMap;class mA{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=We(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:s=!1,distanceThreshold:r}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const m=b=>{s&&this.snapToCursor(Li(b).point),this.stopAnimation()},f=(b,S)=>{const{drag:C,dragPropagation:R,onDragStart:U}=this.getProps();if(C&&!R&&(this.openDragLock&&this.openDragLock(),this.openDragLock=G1(C),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),aa(L=>{let X=this.getAxisMotionValue(L).get()||0;if(na.test(X)){const{projection:Q}=this.visualElement;if(Q&&Q.layout){const J=Q.layout.layoutBox[L];J&&(X=dt(J)*(parseFloat(X)/100))}}this.originPoint[L]=X}),U&&qe.update(()=>U(b,S),!1,!0),zc(this.visualElement,"transform");const{animationState:B}=this.visualElement;B&&B.setActive("whileDrag",!0)},h=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:C,dragDirectionLock:R,onDirectionLock:U,onDrag:B}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:L}=S;if(R&&this.currentDirection===null){this.currentDirection=pA(L),this.currentDirection!==null&&U&&U(this.currentDirection);return}this.updateAxis("x",S.point,L),this.updateAxis("y",S.point,L),this.visualElement.render(),B&&qe.update(()=>B(b,S),!1,!0)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new Ly(i,{onSessionStart:m,onStart:f,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:By(this.visualElement),element:this.visualElement.current})}stop(i,s){const r=i||this.latestPointerEvent,c=s||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!c||!r)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:h}=this.getProps();h&&qe.postRender(()=>h(r,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:s}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,s,r){const{drag:c}=this.getProps();if(!r||!sr(i,c,this.currentDirection))return;const m=this.getAxisMotionValue(i);let f=this.originPoint[i]+r[i];this.constraints&&this.constraints[i]&&(f=sA(f,this.constraints[i],this.elastic[i])),m.set(f)}resolveConstraints(){var m;const{dragConstraints:i,dragElastic:s}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(m=this.visualElement.projection)==null?void 0:m.layout,c=this.constraints;i&&bo(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&r?this.constraints=rA(r.layoutBox,i):this.constraints=!1,this.elastic=fA(s),c!==this.constraints&&!bo(i)&&r&&this.constraints&&!this.hasMutatedConstraints&&aa(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=cA(r.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:s}=this.getProps();if(!i||!bo(i))return!1;const r=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const m=gE(r,c.root,this.visualElement.getTransformPagePoint());let f=lA(c.layout.layoutBox,m);if(s){const h=s(mE(f));this.hasMutatedConstraints=!!h,h&&(f=ry(h))}return f}startAnimation(i){const{drag:s,dragMomentum:r,dragElastic:c,dragTransition:m,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=aa(y=>{if(!sr(y,s,this.currentDirection))return;let b=p&&p[y]||{};f&&(b={min:0,max:0});const S=c?200:1e6,C=c?40:1e7,R={type:"inertia",velocity:r?i[y]:0,bounceStiffness:S,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...m,...b};return this.startAxisValueAnimation(y,R)});return Promise.all(g).then(h)}startAxisValueAnimation(i,s){const r=this.getAxisMotionValue(i);return zc(this.visualElement,i),r.start(sf(i,r,0,s,this.visualElement,!1))}stopAnimation(){aa(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const s=`_drag${i.toUpperCase()}`,r=this.visualElement.getProps(),c=r[s];return c||this.visualElement.getValue(i,(r.initial?r.initial[i]:void 0)||0)}snapToCursor(i){aa(s=>{const{drag:r}=this.getProps();if(!sr(s,r,this.currentDirection))return;const{projection:c}=this.visualElement,m=this.getAxisMotionValue(s);if(c&&c.layout){const{min:f,max:h}=c.layout.layoutBox[s],p=m.get()||0;m.set(i[s]-Ue(f,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:s}=this.getProps(),{projection:r}=this.visualElement;if(!bo(s)||!r||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};aa(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const p=h.get();c[f]=uA({min:p,max:p},this.constraints[f])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),aa(f=>{if(!sr(f,i,null))return;const h=this.getAxisMotionValue(f),{min:p,max:g}=this.constraints[f];h.set(Ue(p,g,c[f]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;dA.set(this.visualElement,this);const i=this.visualElement.current,s=Ri(i,"pointerdown",g=>{const{drag:y,dragListener:b=!0}=this.getProps(),S=g.target,C=S!==i&&Z1(S);y&&b&&!C&&this.start(g)});let r;const c=()=>{const{dragConstraints:g}=this.getProps();bo(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),r||(r=hA(i,g.current,()=>this.scalePositionWithinConstraints())))},{projection:m}=this.visualElement,f=m.addEventListener("measure",c);m&&!m.layout&&(m.root&&m.root.updateScroll(),m.updateLayout()),qe.read(c);const h=ji(window,"resize",()=>this.scalePositionWithinConstraints()),p=m.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(aa(b=>{const S=this.getAxisMotionValue(b);S&&(this.originPoint[b]+=g[b].translate,S.set(S.get()+g[b].translate))}),this.visualElement.render())}));return()=>{h(),s(),f(),p&&p(),r&&r()}}getProps(){const i=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:r=!1,dragPropagation:c=!1,dragConstraints:m=!1,dragElastic:f=Uc,dragMomentum:h=!0}=i;return{...i,drag:s,dragDirectionLock:r,dragPropagation:c,dragConstraints:m,dragElastic:f,dragMomentum:h}}}function kg(n){let i=!0;return()=>{if(i){i=!1;return}n()}}function hA(n,i,s){const r=$p(n,kg(s)),c=$p(i,kg(s));return()=>{r(),c()}}function sr(n,i,s){return(i===!0||i===n)&&(s===null||s===n)}function pA(n,i=10){let s=null;return Math.abs(n.y)>i?s="y":Math.abs(n.x)>i&&(s="x"),s}class gA extends sn{constructor(i){super(i),this.removeGroupControls=Yt,this.removeListeners=Yt,this.controls=new mA(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yt}update(){const{dragControls:i}=this.node.getProps(),{dragControls:s}=this.node.prevProps||{};i!==s&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const fc=n=>(i,s)=>{n&&qe.update(()=>n(i,s),!1,!0)};class vA extends sn{constructor(){super(...arguments),this.removePointerDownListener=Yt}onPointerDown(i){this.session=new Ly(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:By(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:s,onPan:r,onPanEnd:c}=this.node.getProps();return{onSessionStart:fc(i),onStart:fc(s),onMove:fc(r),onEnd:(m,f)=>{delete this.session,c&&qe.postRender(()=>c(m,f))}}}mount(){this.removePointerDownListener=Ri(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let dc=!1;class yA extends k.Component{componentDidMount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:r,layoutId:c}=this.props,{projection:m}=i;m&&(s.group&&s.group.add(m),r&&r.register&&c&&r.register(m),dc&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),hr.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:s,visualElement:r,drag:c,isPresent:m}=this.props,{projection:f}=r;return f&&(f.isPresent=m,i.layoutDependency!==s&&f.setOptions({...f.options,layoutDependency:s}),dc=!0,c||i.layoutDependency!==s||s===void 0||i.isPresent!==m?f.willUpdate():this.safeToRemove(),i.isPresent!==m&&(m?f.promote():f.relegate()||qe.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),cf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:r}=this.props,{projection:c}=i;dc=!0,c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),r&&r.deregister&&r.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Gy(n){const[i,s]=Oy(),r=k.useContext(Qc);return G.jsx(yA,{...n,layoutGroup:r,switchLayoutGroup:k.useContext(_y),isPresent:i,safeToRemove:s})}const bA={pan:{Feature:vA},drag:{Feature:gA,ProjectionNode:zy,MeasureLayout:Gy}};function Xg(n,i,s){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,m=r[c];m&&qe.postRender(()=>m(i,Li(i)))}class SA extends sn{mount(){const{current:i}=this.node;i&&(this.unmount=Y1(i,(s,r)=>(Xg(this.node,r,"Start"),c=>Xg(this.node,c,"End"))))}unmount(){}}class TA extends sn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=_i(ji(this.node.current,"focus",()=>this.onFocus()),ji(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Zg(n,i,s){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),m=r[c];m&&qe.postRender(()=>m(i,Li(i)))}class EA extends sn{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:s,propagate:r}=this.node.props;this.unmount=K1(i,(c,m)=>(Zg(this.node,m,"Start"),(f,{success:h})=>Zg(this.node,f,h?"End":"Cancel")),{useGlobalTarget:s,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Bc=new WeakMap,mc=new WeakMap,xA=n=>{const i=Bc.get(n.target);i&&i(n)},AA=n=>{n.forEach(xA)};function DA({root:n,...i}){const s=n||document;mc.has(s)||mc.set(s,{});const r=mc.get(s),c=JSON.stringify(i);return r[c]||(r[c]=new IntersectionObserver(AA,{root:n,...i})),r[c]}function MA(n,i,s){const r=DA(i);return Bc.set(n,s),r.observe(n),()=>{Bc.delete(n),r.unobserve(n)}}const CA={some:0,all:1};class zA extends sn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:s,margin:r,amount:c="some",once:m}=i,f={root:s?s.current:void 0,rootMargin:r,threshold:typeof c=="number"?c:CA[c]},h=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,m&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=g?y:b;S&&S(p)};return MA(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:s}=this.node;["amount","margin","root"].some(OA(i,s))&&this.startObserver()}unmount(){}}function OA({viewport:n={}},{viewport:i={}}={}){return s=>n[s]!==i[s]}const RA={inView:{Feature:zA},tap:{Feature:EA},focus:{Feature:TA},hover:{Feature:SA}},qA={layout:{ProjectionNode:zy,MeasureLayout:Gy}},NA={...tA,...RA,...bA,...qA},Lc=Fx(NA,Wx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,r)=>r?r.toUpperCase():s.toLowerCase()),Jg=n=>{const i=wA(n);return i.charAt(0).toUpperCase()+i.slice(1)},Qy=(...n)=>n.filter((i,s,r)=>!!i&&i.trim()!==""&&r.indexOf(i)===s).join(" ").trim(),jA=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=k.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:c="",children:m,iconNode:f,...h},p)=>k.createElement("svg",{ref:p,..._A,width:i,height:i,stroke:n,strokeWidth:r?Number(s)*24/Number(i):s,className:Qy("lucide",c),...!m&&!jA(h)&&{"aria-hidden":"true"},...h},[...f.map(([g,y])=>k.createElement(g,y)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=(n,i)=>{const s=k.forwardRef(({className:r,...c},m)=>k.createElement(UA,{ref:m,iconNode:i,className:Qy(`lucide-${VA(Jg(n))}`,`lucide-${n}`,r),...c}));return s.displayName=Jg(n),s};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],LA=Wt("chevron-right",BA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],GA=Wt("instagram",HA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],YA=Wt("menu",QA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],kA=Wt("music-2",PA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],ZA=Wt("music",XA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],KA=Wt("phone",JA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],WA=Wt("plus",FA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],IA=Wt("search",$A);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],t2=Wt("shield-check",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],n2=Wt("x",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],i2=Wt("youtube",o2);function Yy(n){var i,s,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(i=0;i<c;i++)n[i]&&(s=Yy(n[i]))&&(r&&(r+=" "),r+=s)}else for(s in n)n[s]&&(r&&(r+=" "),r+=s);return r}function s2(){for(var n,i,s=0,r="",c=arguments.length;s<c;s++)(n=arguments[s])&&(i=Yy(n))&&(r&&(r+=" "),r+=i);return r}const r2=(n,i)=>{const s=new Array(n.length+i.length);for(let r=0;r<n.length;r++)s[r]=n[r];for(let r=0;r<i.length;r++)s[n.length+r]=i[r];return s},l2=(n,i)=>({classGroupId:n,validator:i}),Py=(n=new Map,i=null,s)=>({nextPart:n,validators:i,classGroupId:s}),xr="-",Kg=[],u2="arbitrary..",c2=n=>{const i=d2(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return f2(f);const h=f.split(xr),p=h[0]===""&&h.length>1?1:0;return ky(h,p,i)},getConflictingClassGroupIds:(f,h)=>{if(h){const p=r[f],g=s[f];return p?g?r2(g,p):p:g||Kg}return s[f]||Kg}}},ky=(n,i,s)=>{if(n.length-i===0)return s.classGroupId;const c=n[i],m=s.nextPart.get(c);if(m){const g=ky(n,i+1,m);if(g)return g}const f=s.validators;if(f===null)return;const h=i===0?n.join(xr):n.slice(i).join(xr),p=f.length;for(let g=0;g<p;g++){const y=f[g];if(y.validator(h))return y.classGroupId}},f2=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=n.slice(1,-1),s=i.indexOf(":"),r=i.slice(0,s);return r?u2+r:void 0})(),d2=n=>{const{theme:i,classGroups:s}=n;return m2(s,i)},m2=(n,i)=>{const s=Py();for(const r in n){const c=n[r];Sf(c,s,r,i)}return s},Sf=(n,i,s,r)=>{const c=n.length;for(let m=0;m<c;m++){const f=n[m];h2(f,i,s,r)}},h2=(n,i,s,r)=>{if(typeof n=="string"){p2(n,i,s);return}if(typeof n=="function"){g2(n,i,s,r);return}v2(n,i,s,r)},p2=(n,i,s)=>{const r=n===""?i:Xy(i,n);r.classGroupId=s},g2=(n,i,s,r)=>{if(y2(n)){Sf(n(r),i,s,r);return}i.validators===null&&(i.validators=[]),i.validators.push(l2(s,n))},v2=(n,i,s,r)=>{const c=Object.entries(n),m=c.length;for(let f=0;f<m;f++){const[h,p]=c[f];Sf(p,Xy(i,h),s,r)}},Xy=(n,i)=>{let s=n;const r=i.split(xr),c=r.length;for(let m=0;m<c;m++){const f=r[m];let h=s.nextPart.get(f);h||(h=Py(),s.nextPart.set(f,h)),s=h}return s},y2=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,b2=n=>{if(n<1)return{get:()=>{},set:()=>{}};let i=0,s=Object.create(null),r=Object.create(null);const c=(m,f)=>{s[m]=f,i++,i>n&&(i=0,r=s,s=Object.create(null))};return{get(m){let f=s[m];if(f!==void 0)return f;if((f=r[m])!==void 0)return c(m,f),f},set(m,f){m in s?s[m]=f:c(m,f)}}},Hc="!",Fg=":",S2=[],Wg=(n,i,s,r,c)=>({modifiers:n,hasImportantModifier:i,baseClassName:s,maybePostfixModifierPosition:r,isExternal:c}),T2=n=>{const{prefix:i,experimentalParseClassName:s}=n;let r=c=>{const m=[];let f=0,h=0,p=0,g;const y=c.length;for(let U=0;U<y;U++){const B=c[U];if(f===0&&h===0){if(B===Fg){m.push(c.slice(p,U)),p=U+1;continue}if(B==="/"){g=U;continue}}B==="["?f++:B==="]"?f--:B==="("?h++:B===")"&&h--}const b=m.length===0?c:c.slice(p);let S=b,C=!1;b.endsWith(Hc)?(S=b.slice(0,-1),C=!0):b.startsWith(Hc)&&(S=b.slice(1),C=!0);const R=g&&g>p?g-p:void 0;return Wg(m,C,S,R)};if(i){const c=i+Fg,m=r;r=f=>f.startsWith(c)?m(f.slice(c.length)):Wg(S2,!1,f,void 0,!0)}if(s){const c=r;r=m=>s({className:m,parseClassName:c})}return r},E2=n=>{const i=new Map;return n.orderSensitiveModifiers.forEach((s,r)=>{i.set(s,1e6+r)}),s=>{const r=[];let c=[];for(let m=0;m<s.length;m++){const f=s[m],h=f[0]==="[",p=i.has(f);h||p?(c.length>0&&(c.sort(),r.push(...c),c=[]),r.push(f)):c.push(f)}return c.length>0&&(c.sort(),r.push(...c)),r}},x2=n=>({cache:b2(n.cacheSize),parseClassName:T2(n),sortModifiers:E2(n),...c2(n)}),A2=/\s+/,D2=(n,i)=>{const{parseClassName:s,getClassGroupId:r,getConflictingClassGroupIds:c,sortModifiers:m}=i,f=[],h=n.trim().split(A2);let p="";for(let g=h.length-1;g>=0;g-=1){const y=h[g],{isExternal:b,modifiers:S,hasImportantModifier:C,baseClassName:R,maybePostfixModifierPosition:U}=s(y);if(b){p=y+(p.length>0?" "+p:p);continue}let B=!!U,L=r(B?R.substring(0,U):R);if(!L){if(!B){p=y+(p.length>0?" "+p:p);continue}if(L=r(R),!L){p=y+(p.length>0?" "+p:p);continue}B=!1}const X=S.length===0?"":S.length===1?S[0]:m(S).join(":"),Q=C?X+Hc:X,J=Q+L;if(f.indexOf(J)>-1)continue;f.push(J);const P=c(L,B);for(let oe=0;oe<P.length;++oe){const F=P[oe];f.push(Q+F)}p=y+(p.length>0?" "+p:p)}return p},M2=(...n)=>{let i=0,s,r,c="";for(;i<n.length;)(s=n[i++])&&(r=Zy(s))&&(c&&(c+=" "),c+=r);return c},Zy=n=>{if(typeof n=="string")return n;let i,s="";for(let r=0;r<n.length;r++)n[r]&&(i=Zy(n[r]))&&(s&&(s+=" "),s+=i);return s},C2=(n,...i)=>{let s,r,c,m;const f=p=>{const g=i.reduce((y,b)=>b(y),n());return s=x2(g),r=s.cache.get,c=s.cache.set,m=h,h(p)},h=p=>{const g=r(p);if(g)return g;const y=D2(p,s);return c(p,y),y};return m=f,(...p)=>m(M2(...p))},z2=[],Fe=n=>{const i=s=>s[n]||z2;return i.isThemeGetter=!0,i},Jy=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ky=/^\((?:(\w[\w-]*):)?(.+)\)$/i,O2=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,R2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,q2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,N2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,V2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,w2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ia=n=>O2.test(n),he=n=>!!n&&!Number.isNaN(Number(n)),en=n=>!!n&&Number.isInteger(Number(n)),hc=n=>n.endsWith("%")&&he(n.slice(0,-1)),Aa=n=>R2.test(n),Fy=()=>!0,j2=n=>q2.test(n)&&!N2.test(n),Tf=()=>!1,_2=n=>V2.test(n),U2=n=>w2.test(n),B2=n=>!I(n)&&!te(n),L2=n=>rn(n,Iy,Tf),I=n=>Jy.test(n),Cn=n=>rn(n,e0,j2),$g=n=>rn(n,Z2,he),H2=n=>rn(n,a0,Fy),G2=n=>rn(n,t0,Tf),Ig=n=>rn(n,Wy,Tf),Q2=n=>rn(n,$y,U2),rr=n=>rn(n,n0,_2),te=n=>Ky.test(n),Di=n=>Nn(n,e0),Y2=n=>Nn(n,t0),ev=n=>Nn(n,Wy),P2=n=>Nn(n,Iy),k2=n=>Nn(n,$y),lr=n=>Nn(n,n0,!0),X2=n=>Nn(n,a0,!0),rn=(n,i,s)=>{const r=Jy.exec(n);return r?r[1]?i(r[1]):s(r[2]):!1},Nn=(n,i,s=!1)=>{const r=Ky.exec(n);return r?r[1]?i(r[1]):s:!1},Wy=n=>n==="position"||n==="percentage",$y=n=>n==="image"||n==="url",Iy=n=>n==="length"||n==="size"||n==="bg-size",e0=n=>n==="length",Z2=n=>n==="number",t0=n=>n==="family-name",a0=n=>n==="number"||n==="weight",n0=n=>n==="shadow",J2=()=>{const n=Fe("color"),i=Fe("font"),s=Fe("text"),r=Fe("font-weight"),c=Fe("tracking"),m=Fe("leading"),f=Fe("breakpoint"),h=Fe("container"),p=Fe("spacing"),g=Fe("radius"),y=Fe("shadow"),b=Fe("inset-shadow"),S=Fe("text-shadow"),C=Fe("drop-shadow"),R=Fe("blur"),U=Fe("perspective"),B=Fe("aspect"),L=Fe("ease"),X=Fe("animate"),Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],J=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],P=()=>[...J(),te,I],oe=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],_=()=>[te,I,p],ie=()=>[Ia,"full","auto",..._()],Ae=()=>[en,"none","subgrid",te,I],je=()=>["auto",{span:["full",en,te,I]},en,te,I],Ne=()=>[en,"auto",te,I],mt=()=>["auto","min","max","fr",te,I],rt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ge=()=>["start","end","center","stretch","center-safe","end-safe"],q=()=>["auto",..._()],H=()=>[Ia,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",..._()],W=()=>[Ia,"screen","full","dvw","lvw","svw","min","max","fit",..._()],de=()=>[Ia,"screen","full","lh","dvh","lvh","svh","min","max","fit",..._()],Y=()=>[n,te,I],x=()=>[...J(),ev,Ig,{position:[te,I]}],j=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Z=()=>["auto","cover","contain",P2,L2,{size:[te,I]}],K=()=>[hc,Di,Cn],ne=()=>["","none","full",g,te,I],re=()=>["",he,Di,Cn],be=()=>["solid","dashed","dotted","double"],$e=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],me=()=>[he,hc,ev,Ig],Ma=()=>["","none",R,te,I],ia=()=>["none",he,te,I],Ca=()=>["none",he,te,I],Vn=()=>[he,te,I],qt=()=>[Ia,"full",..._()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Aa],breakpoint:[Aa],color:[Fy],container:[Aa],"drop-shadow":[Aa],ease:["in","out","in-out"],font:[B2],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Aa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Aa],shadow:[Aa],spacing:["px",he],text:[Aa],"text-shadow":[Aa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ia,I,te,B]}],container:["container"],columns:[{columns:[he,I,te,h]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:P()}],overflow:[{overflow:oe()}],"overflow-x":[{"overflow-x":oe()}],"overflow-y":[{"overflow-y":oe()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ie()}],"inset-x":[{"inset-x":ie()}],"inset-y":[{"inset-y":ie()}],start:[{"inset-s":ie(),start:ie()}],end:[{"inset-e":ie(),end:ie()}],"inset-bs":[{"inset-bs":ie()}],"inset-be":[{"inset-be":ie()}],top:[{top:ie()}],right:[{right:ie()}],bottom:[{bottom:ie()}],left:[{left:ie()}],visibility:["visible","invisible","collapse"],z:[{z:[en,"auto",te,I]}],basis:[{basis:[Ia,"full","auto",h,..._()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[he,Ia,"auto","initial","none",I]}],grow:[{grow:["",he,te,I]}],shrink:[{shrink:["",he,te,I]}],order:[{order:[en,"first","last","none",te,I]}],"grid-cols":[{"grid-cols":Ae()}],"col-start-end":[{col:je()}],"col-start":[{"col-start":Ne()}],"col-end":[{"col-end":Ne()}],"grid-rows":[{"grid-rows":Ae()}],"row-start-end":[{row:je()}],"row-start":[{"row-start":Ne()}],"row-end":[{"row-end":Ne()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":mt()}],"auto-rows":[{"auto-rows":mt()}],gap:[{gap:_()}],"gap-x":[{"gap-x":_()}],"gap-y":[{"gap-y":_()}],"justify-content":[{justify:[...rt(),"normal"]}],"justify-items":[{"justify-items":[...Ge(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ge()]}],"align-content":[{content:["normal",...rt()]}],"align-items":[{items:[...Ge(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ge(),{baseline:["","last"]}]}],"place-content":[{"place-content":rt()}],"place-items":[{"place-items":[...Ge(),"baseline"]}],"place-self":[{"place-self":["auto",...Ge()]}],p:[{p:_()}],px:[{px:_()}],py:[{py:_()}],ps:[{ps:_()}],pe:[{pe:_()}],pbs:[{pbs:_()}],pbe:[{pbe:_()}],pt:[{pt:_()}],pr:[{pr:_()}],pb:[{pb:_()}],pl:[{pl:_()}],m:[{m:q()}],mx:[{mx:q()}],my:[{my:q()}],ms:[{ms:q()}],me:[{me:q()}],mbs:[{mbs:q()}],mbe:[{mbe:q()}],mt:[{mt:q()}],mr:[{mr:q()}],mb:[{mb:q()}],ml:[{ml:q()}],"space-x":[{"space-x":_()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":_()}],"space-y-reverse":["space-y-reverse"],size:[{size:H()}],"inline-size":[{inline:["auto",...W()]}],"min-inline-size":[{"min-inline":["auto",...W()]}],"max-inline-size":[{"max-inline":["none",...W()]}],"block-size":[{block:["auto",...de()]}],"min-block-size":[{"min-block":["auto",...de()]}],"max-block-size":[{"max-block":["none",...de()]}],w:[{w:[h,"screen",...H()]}],"min-w":[{"min-w":[h,"screen","none",...H()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[f]},...H()]}],h:[{h:["screen","lh",...H()]}],"min-h":[{"min-h":["screen","lh","none",...H()]}],"max-h":[{"max-h":["screen","lh",...H()]}],"font-size":[{text:["base",s,Di,Cn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,X2,H2]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",hc,I]}],"font-family":[{font:[Y2,G2,i]}],"font-features":[{"font-features":[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,te,I]}],"line-clamp":[{"line-clamp":[he,"none",te,$g]}],leading:[{leading:[m,..._()]}],"list-image":[{"list-image":["none",te,I]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",te,I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:Y()}],"text-color":[{text:Y()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...be(),"wavy"]}],"text-decoration-thickness":[{decoration:[he,"from-font","auto",te,Cn]}],"text-decoration-color":[{decoration:Y()}],"underline-offset":[{"underline-offset":[he,"auto",te,I]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te,I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te,I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:x()}],"bg-repeat":[{bg:j()}],"bg-size":[{bg:Z()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},en,te,I],radial:["",te,I],conic:[en,te,I]},k2,Q2]}],"bg-color":[{bg:Y()}],"gradient-from-pos":[{from:K()}],"gradient-via-pos":[{via:K()}],"gradient-to-pos":[{to:K()}],"gradient-from":[{from:Y()}],"gradient-via":[{via:Y()}],"gradient-to":[{to:Y()}],rounded:[{rounded:ne()}],"rounded-s":[{"rounded-s":ne()}],"rounded-e":[{"rounded-e":ne()}],"rounded-t":[{"rounded-t":ne()}],"rounded-r":[{"rounded-r":ne()}],"rounded-b":[{"rounded-b":ne()}],"rounded-l":[{"rounded-l":ne()}],"rounded-ss":[{"rounded-ss":ne()}],"rounded-se":[{"rounded-se":ne()}],"rounded-ee":[{"rounded-ee":ne()}],"rounded-es":[{"rounded-es":ne()}],"rounded-tl":[{"rounded-tl":ne()}],"rounded-tr":[{"rounded-tr":ne()}],"rounded-br":[{"rounded-br":ne()}],"rounded-bl":[{"rounded-bl":ne()}],"border-w":[{border:re()}],"border-w-x":[{"border-x":re()}],"border-w-y":[{"border-y":re()}],"border-w-s":[{"border-s":re()}],"border-w-e":[{"border-e":re()}],"border-w-bs":[{"border-bs":re()}],"border-w-be":[{"border-be":re()}],"border-w-t":[{"border-t":re()}],"border-w-r":[{"border-r":re()}],"border-w-b":[{"border-b":re()}],"border-w-l":[{"border-l":re()}],"divide-x":[{"divide-x":re()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":re()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...be(),"hidden","none"]}],"divide-style":[{divide:[...be(),"hidden","none"]}],"border-color":[{border:Y()}],"border-color-x":[{"border-x":Y()}],"border-color-y":[{"border-y":Y()}],"border-color-s":[{"border-s":Y()}],"border-color-e":[{"border-e":Y()}],"border-color-bs":[{"border-bs":Y()}],"border-color-be":[{"border-be":Y()}],"border-color-t":[{"border-t":Y()}],"border-color-r":[{"border-r":Y()}],"border-color-b":[{"border-b":Y()}],"border-color-l":[{"border-l":Y()}],"divide-color":[{divide:Y()}],"outline-style":[{outline:[...be(),"none","hidden"]}],"outline-offset":[{"outline-offset":[he,te,I]}],"outline-w":[{outline:["",he,Di,Cn]}],"outline-color":[{outline:Y()}],shadow:[{shadow:["","none",y,lr,rr]}],"shadow-color":[{shadow:Y()}],"inset-shadow":[{"inset-shadow":["none",b,lr,rr]}],"inset-shadow-color":[{"inset-shadow":Y()}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:Y()}],"ring-offset-w":[{"ring-offset":[he,Cn]}],"ring-offset-color":[{"ring-offset":Y()}],"inset-ring-w":[{"inset-ring":re()}],"inset-ring-color":[{"inset-ring":Y()}],"text-shadow":[{"text-shadow":["none",S,lr,rr]}],"text-shadow-color":[{"text-shadow":Y()}],opacity:[{opacity:[he,te,I]}],"mix-blend":[{"mix-blend":[...$e(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":$e()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[he]}],"mask-image-linear-from-pos":[{"mask-linear-from":me()}],"mask-image-linear-to-pos":[{"mask-linear-to":me()}],"mask-image-linear-from-color":[{"mask-linear-from":Y()}],"mask-image-linear-to-color":[{"mask-linear-to":Y()}],"mask-image-t-from-pos":[{"mask-t-from":me()}],"mask-image-t-to-pos":[{"mask-t-to":me()}],"mask-image-t-from-color":[{"mask-t-from":Y()}],"mask-image-t-to-color":[{"mask-t-to":Y()}],"mask-image-r-from-pos":[{"mask-r-from":me()}],"mask-image-r-to-pos":[{"mask-r-to":me()}],"mask-image-r-from-color":[{"mask-r-from":Y()}],"mask-image-r-to-color":[{"mask-r-to":Y()}],"mask-image-b-from-pos":[{"mask-b-from":me()}],"mask-image-b-to-pos":[{"mask-b-to":me()}],"mask-image-b-from-color":[{"mask-b-from":Y()}],"mask-image-b-to-color":[{"mask-b-to":Y()}],"mask-image-l-from-pos":[{"mask-l-from":me()}],"mask-image-l-to-pos":[{"mask-l-to":me()}],"mask-image-l-from-color":[{"mask-l-from":Y()}],"mask-image-l-to-color":[{"mask-l-to":Y()}],"mask-image-x-from-pos":[{"mask-x-from":me()}],"mask-image-x-to-pos":[{"mask-x-to":me()}],"mask-image-x-from-color":[{"mask-x-from":Y()}],"mask-image-x-to-color":[{"mask-x-to":Y()}],"mask-image-y-from-pos":[{"mask-y-from":me()}],"mask-image-y-to-pos":[{"mask-y-to":me()}],"mask-image-y-from-color":[{"mask-y-from":Y()}],"mask-image-y-to-color":[{"mask-y-to":Y()}],"mask-image-radial":[{"mask-radial":[te,I]}],"mask-image-radial-from-pos":[{"mask-radial-from":me()}],"mask-image-radial-to-pos":[{"mask-radial-to":me()}],"mask-image-radial-from-color":[{"mask-radial-from":Y()}],"mask-image-radial-to-color":[{"mask-radial-to":Y()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":J()}],"mask-image-conic-pos":[{"mask-conic":[he]}],"mask-image-conic-from-pos":[{"mask-conic-from":me()}],"mask-image-conic-to-pos":[{"mask-conic-to":me()}],"mask-image-conic-from-color":[{"mask-conic-from":Y()}],"mask-image-conic-to-color":[{"mask-conic-to":Y()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:x()}],"mask-repeat":[{mask:j()}],"mask-size":[{mask:Z()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",te,I]}],filter:[{filter:["","none",te,I]}],blur:[{blur:Ma()}],brightness:[{brightness:[he,te,I]}],contrast:[{contrast:[he,te,I]}],"drop-shadow":[{"drop-shadow":["","none",C,lr,rr]}],"drop-shadow-color":[{"drop-shadow":Y()}],grayscale:[{grayscale:["",he,te,I]}],"hue-rotate":[{"hue-rotate":[he,te,I]}],invert:[{invert:["",he,te,I]}],saturate:[{saturate:[he,te,I]}],sepia:[{sepia:["",he,te,I]}],"backdrop-filter":[{"backdrop-filter":["","none",te,I]}],"backdrop-blur":[{"backdrop-blur":Ma()}],"backdrop-brightness":[{"backdrop-brightness":[he,te,I]}],"backdrop-contrast":[{"backdrop-contrast":[he,te,I]}],"backdrop-grayscale":[{"backdrop-grayscale":["",he,te,I]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[he,te,I]}],"backdrop-invert":[{"backdrop-invert":["",he,te,I]}],"backdrop-opacity":[{"backdrop-opacity":[he,te,I]}],"backdrop-saturate":[{"backdrop-saturate":[he,te,I]}],"backdrop-sepia":[{"backdrop-sepia":["",he,te,I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":_()}],"border-spacing-x":[{"border-spacing-x":_()}],"border-spacing-y":[{"border-spacing-y":_()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",te,I]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[he,"initial",te,I]}],ease:[{ease:["linear","initial",L,te,I]}],delay:[{delay:[he,te,I]}],animate:[{animate:["none",X,te,I]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[U,te,I]}],"perspective-origin":[{"perspective-origin":P()}],rotate:[{rotate:ia()}],"rotate-x":[{"rotate-x":ia()}],"rotate-y":[{"rotate-y":ia()}],"rotate-z":[{"rotate-z":ia()}],scale:[{scale:Ca()}],"scale-x":[{"scale-x":Ca()}],"scale-y":[{"scale-y":Ca()}],"scale-z":[{"scale-z":Ca()}],"scale-3d":["scale-3d"],skew:[{skew:Vn()}],"skew-x":[{"skew-x":Vn()}],"skew-y":[{"skew-y":Vn()}],transform:[{transform:[te,I,"","none","gpu","cpu"]}],"transform-origin":[{origin:P()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:qt()}],"translate-x":[{"translate-x":qt()}],"translate-y":[{"translate-y":qt()}],"translate-z":[{"translate-z":qt()}],"translate-none":["translate-none"],accent:[{accent:Y()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:Y()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te,I]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mbs":[{"scroll-mbs":_()}],"scroll-mbe":[{"scroll-mbe":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pbs":[{"scroll-pbs":_()}],"scroll-pbe":[{"scroll-pbe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te,I]}],fill:[{fill:["none",...Y()]}],"stroke-w":[{stroke:[he,Di,Cn,$g]}],stroke:[{stroke:["none",...Y()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},K2=C2(J2);function o0(...n){return K2(s2(n))}const F2=[{month:1,name:"Fevereiro",theme:"CHAMADOS AO ARREPENDIMENTO E COMUNHÃO",verse:"(Is 55:6) Buscai o SENHOR enquanto se pode achar, invocai-o enquanto está perto.",events:["01/02 (domingo): Reunião do Conselho com SAF e UPH","07/02 (sábado): Pregação no ponto – Nova Esperança","13–17/02: Retiro espiritual (Carnaval)","17/02 (terça): Reunião do Conselho","22/02 (domingo): Santa Ceia","25/02 (quarta): Santa Ceia no lar"]},{month:2,name:"Março",theme:"BUSCANDO A SANTIDADE",verse:"(1Pe 1.16) Porque escrito está: Sede santos, porque eu sou santo.",events:["Terças: Curso de formação após a Reunião de Oração","Quintas: Reunião de Doutrina: Pilares da Fé Reformada","Domingos: EBD, 10h - Carta aos Coríntios; Culto, 19h30 - Buscando a Santidade","07/03 (Sábado): Caminhada da Mulher (saída às 17h da porta da igreja, parada na casa de Meire para lanche e palestra)","14/03 (Sábado): Projeto Mão na Massa – Ourolândia","21/03 (Sábado): Nova Esperança","15/03 (Domingo): Culto e Santa Ceia - 19h30","23/03 (Segunda-feira): Reunião do Conselho e Reunião de Liderança - Casa do Pb. Elique Filho","25/03 (Quarta): Santa Ceia no Lar - Casa da Irmã Dalva","30/03 (Segunda-feira): 18h–20h Churrasco, Proza e Viola"]},{month:3,name:"Abril",theme:"A cruz e a redenção em Cristo",verse:"(Is 53:5) Mas ele foi traspassado pelas nossas transgressões e moído pelas nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",events:["11/04 (sábado): Pregação no ponto – Nova Esperança","Curso de Formação - Terças, após reunião de oração","05/04 (domingo): Café da ressureição e Culto da Páscoa com Santa Ceia","15/04 (quarta): Santa Ceia no lar","25/04 (sábado): Aniversário da UPH – Pregador: Pr. Nivaldo Cortez","17/04 (sexta): Culto evangelístico – Casas Populares","21/04 (terça): Reunião do Conselho"]},{month:4,name:"Maio",theme:"Edificando a família sobre a Rocha",verse:"(Mt 7.24) Quem ouve minhas palavras e as pratica é tão sábio como a pessoa que constrói sua casa sobre uma rocha firme.",events:["03/05 (Dom): Uma família firmada na Rocha - Miss. Franco (IPB Piritiba)","05/05 (Ter): Oração nos lares (Família de Arnóbio e Lene) - Resp: UPH","10/05 (Dom): Uma família ajustada pelos princípios de Deus - Pb. Robério Evangelista","12/05 (Ter): Oração nos lares (Família de Geanhy e Irandir) - Resp: SAF","16/05 (Sáb): Culto Evangelístico (Nova Esperança) - Liturgia: SAF | Palavra: UPH","17/05 (Dom): Uma família que vence as tempestades - Miss. Abérico Macêdo (IPB Serrolândia)","19/05 (Ter): Oração nos lares (Família de Débora) - Resp: SAF","24/05 (Dom): Uma família que vence as tempestades - Pb. Gilson Rios (IPB Mairi)","26/05 (Ter): Oração nos lares (Fam. Ozuel, Juce, Uriel, Ciele, Luciano e Saulo)","31/05 (Dom): DIA DA FAMÍLIA IPVP - 10h EBD Especial (Faz. Pb. Elique Filho) | 19h Culto - Pr. Pedro (IPB Pintadas)"]},{month:5,name:"Junho",theme:"A família no centro do propósito de Deus",verse:"(Js 24:15) Eu e a minha casa serviremos ao SENHOR.",events:["06/06 (sábado): Pregação no ponto – Nova Esperança","14/06 (domingo): Santa Ceia","15/06 (segunda): Reunião de Liderança (Casa de Adevaldo)","17/06 (quarta): Santa Ceia no lar","20/06 (sábado): Jantar de Casais – Sítio de Bernadet","16/06 (terça): Reunião do Conselho"]},{month:6,name:"Julho",theme:"Confiança no Senhor",verse:"(Sl 27:1) O SENHOR é a minha luz e a minha salvação; de quem terei medo?",events:["04/07 (sábado): Pregação no ponto – Nova Esperança","12/07 (domingo): Santa Ceia","15/07 (quarta): Santa Ceia no lar","17/07 (sexta): Culto evangelístico","21/07 (terça): Reunião do Conselho"]},{month:7,name:"Agosto",theme:"Obedecendo ao Senhor na missão",verse:"(Jn 3:1) E veio a palavra do Senhor segunda vez a Jonas, dizendo: Levanta-te, e vai à grande cidade de Nínive.",events:["01 e 02/08 (domingo): Viagem - IPVP","08/08 (sábado): Pregação no ponto – Nova Esperança","09/08 (domingo): Santa Ceia","12/08 (quarta): Santa Ceia no lar","18/08 (terça): Reunião do Conselho","30/08 (domingo): Dia Missionário – Pastor convidado","28/08 (sexta): Culto evangelístico – Praça do cemitério"]},{month:8,name:"Setembro",theme:"Ele vem",verse:"(Ap 22:12) E eis que venho sem demora, e comigo está o galardão.",events:["05/09 (sábado): Pregação no ponto – Nova Esperança","13/09 (domingo): Santa Ceia","14/09 (segunda): Reunião de Liderança (Casa de Antonio Rios)","16/09 (quarta): Santa Ceia no lar","25/09 (sexta): Culto evangelístico – Alto da Nação","15/09 (terça): Reunião do Conselho","Dia da Bíblia (domingo)"]},{month:9,name:"Outubro",theme:"Reformando sempre",verse:"(Ef 2:8) Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus;",events:["03/10 (sábado): Pregação no ponto – Nova Esperança","04/10 (domingo): Reunião do Conselho com SAF e UPH","11/10 (domingo): Santa Ceia","Aniversário da SAF – Pastor convidado","14/10 (quarta): Santa Ceia no lar","31/10 (sexta): DIA DO EVANGÉLICO – PRAÇA PRINCIPAL"]},{month:10,name:"Novembro",theme:"Gratidão e fidelidade ao Senhor",verse:"(1Sm 7:12) Até aqui nos ajudou o SENHOR.",events:["02/11: Café teológico com o tema: 'E depois da morte...?'","07/11 (sábado): Pregação no ponto – Nova Esperança","12 e 13/11: Cultos evangelísticos na Praça da Nação e na Praça da Preguiça","14–15/11: 31 anos da IPVP – Pastor convidado e Santa Ceia","17/11 (terça): Reunião do Conselho","18/11 (quarta): Santa Ceia no lar","21–30/11: Ausência pastoral (curso em São Paulo)"]},{month:11,name:"Dezembro",theme:"O Cristo encarnado e a esperança eterna",verse:"(Jo 1:14) E o Verbo se fez carne e habitou entre nós.",events:["06/12 (domingo): Santa Ceia","07/12 (segunda): Reunião de Liderança (Casa pastoral)","09/12 (quarta): Santa Ceia no lar","11/12 (sexta): Culto evangelístico","15/12 (terça): Reunião do Conselho","20/12 (domingo) Manhã - Assembleia Geral Ordinária","Cultos de Natal e Encerramento do Ano"]}],tv=[{title:"A Bênção (Gabriel Guedes)",lyrics:`Que o Senhor te abençoe
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
Me prostro pra Te adorar, Te alegrar`}],i0=({size:n=24,className:i=""})=>G.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:i,children:G.jsx("path",{d:"M12 2v20M8 8h8"})}),W2=({onAdminClick:n,isAdmin:i,onLogout:s})=>{const[r,c]=k.useState(!1),[m,f]=k.useState(!1);k.useEffect(()=>{const p=()=>c(window.scrollY>50);return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const h=[{name:"INÍCIO",href:"#home"},{name:"Músicas",href:"#lyrics-search"},{name:"Agenda",href:"#monthly-agenda"},{name:"Liderança",href:"#leadership"},{name:"Dízimos",href:"#giving"}];return G.jsx("nav",{className:o0("fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",r?"bg-slate-900/95 backdrop-blur-md shadow-lg py-3":"bg-transparent"),children:G.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[G.jsxs("div",{className:"flex items-center gap-3",children:[G.jsx("div",{className:"w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900 shadow-lg",children:G.jsx(i0,{size:24})}),G.jsxs("div",{className:"flex flex-col",children:[G.jsx("span",{className:"font-serif text-lg leading-none text-white",children:"Igreja Presbiteriana"}),G.jsx("span",{className:"text-[9px] uppercase tracking-[0.2em] font-bold text-amber-500",children:"Várzea do Poço"})]})]}),G.jsxs("div",{className:"hidden xl:flex items-center gap-6",children:[h.map(p=>G.jsx("a",{href:p.href,className:"text-xs font-bold uppercase text-white/90 hover:text-amber-500 transition-colors",children:p.name},p.name)),i?G.jsx("button",{onClick:s,className:"px-4 py-2 bg-red-600 text-white rounded-full text-[10px] font-bold uppercase shadow-md",children:"Sair Admin"}):G.jsx("button",{onClick:n,className:"text-xs font-bold uppercase text-white/40 hover:text-white transition-colors",children:"Admin"})]}),G.jsx("button",{className:"xl:hidden text-white",onClick:()=>f(!m),children:m?G.jsx(n2,{size:24}):G.jsx(YA,{size:24})})]})})},$2=()=>{const[n,i]=k.useState(""),[s,r]=k.useState(null),c=Array.isArray(tv)?tv:[],m=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),f=n.length>2?c.filter(h=>`${h.title} ${h.lyrics}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(m)):[];return G.jsx("section",{id:"lyrics-search",className:"py-16 px-6 bg-white border-y-8 border-slate-900",children:G.jsxs("div",{className:"max-w-4xl mx-auto",children:[G.jsxs("div",{className:"text-center mb-10",children:[G.jsx(kA,{size:50,className:"mx-auto mb-4 text-slate-900"}),G.jsx("h2",{className:"text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tighter",children:"Louvores IPVP"}),G.jsx("p",{className:"text-lg font-bold bg-amber-500 text-slate-900 inline-block px-4 py-1 mt-2",children:"ALTO CONTRASTE PARA O CELULAR"})]}),s?G.jsx(Lc.div,{initial:{opacity:0},animate:{opacity:1},className:"fixed inset-0 z-[200] bg-white p-6 md:p-12 overflow-y-auto",children:G.jsxs("div",{className:"max-w-4xl mx-auto",children:[G.jsxs("div",{className:"flex justify-between items-center mb-8 border-b-8 border-slate-900 pb-4",children:[G.jsx("h3",{className:"text-3xl md:text-6xl font-black text-slate-900 uppercase leading-none",children:s.title}),G.jsx("button",{onClick:()=>{r(null),i("")},className:"p-4 bg-red-600 text-white border-4 border-slate-900 font-black text-xl",children:"X FECHAR"})]}),G.jsx("pre",{className:"whitespace-pre-wrap font-sans text-2xl md:text-5xl leading-[1.3] text-slate-950 font-black tracking-tight",children:s.lyrics}),G.jsx("button",{onClick:()=>{r(null),i("")},className:"mt-12 w-full py-6 bg-slate-900 text-white font-black text-2xl border-4 border-slate-900",children:"VOLTAR À BUSCA"})]})}):G.jsxs("div",{className:"space-y-6",children:[G.jsxs("div",{className:"relative",children:[G.jsx(IA,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-400",size:28}),G.jsx("input",{type:"text",placeholder:"NOME DA MÚSICA OU PARTE DA LETRA...",value:n,onChange:h=>i(h.target.value),className:"w-full pl-14 pr-6 py-6 border-4 border-slate-900 outline-none focus:ring-8 focus:ring-amber-500/20 font-black text-xl md:text-2xl uppercase"})]}),f.length>0&&G.jsx("div",{className:"grid gap-2",children:f.map((h,p)=>G.jsxs("button",{onClick:()=>r(h),className:"w-full text-left px-6 py-4 border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all font-black text-lg flex justify-between items-center group",children:[h.title," ",G.jsx(LA,{})]},p))})]})]})})},I2=()=>G.jsxs("section",{id:"home",className:"relative min-h-[85vh] w-full overflow-hidden flex items-center justify-center bg-slate-900",children:[G.jsxs("div",{className:"absolute inset-0 z-0",children:[G.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-white"}),G.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-30",style:{backgroundImage:"url('/fundo-igreja.jpg')"}})]}),G.jsxs("div",{className:"relative z-10 text-center px-6 max-w-4xl py-12",children:[G.jsx(Lc.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block",children:"Bem-vindo à"}),G.jsxs(Lc.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-5xl md:text-8xl text-white font-serif mb-6 leading-[0.9]",children:["Igreja Presbiteriana ",G.jsx("br",{}),G.jsx("span",{className:"italic",children:"de Várzea do Poço"})]}),G.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mt-10",children:[G.jsxs("a",{href:"#lyrics-search",className:"w-full sm:w-auto px-10 py-5 bg-amber-600 text-white rounded-full font-black text-sm uppercase shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2",children:[G.jsx(ZA,{size:20})," BUSCAR LOUVORES"]}),G.jsx("a",{href:"#monthly-agenda",className:"w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-bold text-sm uppercase hover:bg-white/20 transition-all",children:"AGENDA DE MAIO"})]})]})]}),eD=()=>G.jsx("section",{className:"py-16 px-6 bg-slate-50",children:G.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[G.jsx("h2",{className:"text-4xl font-serif text-slate-900 mb-10 font-bold",children:"Mês da Família - Maio"}),G.jsxs("div",{className:"bg-white p-8 rounded-[3rem] border-4 border-amber-500 shadow-2xl",children:[G.jsx("img",{src:"/programacao-maio.jpg",className:"w-full rounded-2xl shadow-lg mb-8",onError:n=>n.currentTarget.style.display="none"}),G.jsx("p",{className:"text-2xl font-black text-slate-900 uppercase tracking-tighter",children:"Edificando a família sobre a Rocha"})]})]})});function tD(){const[n,i]=k.useState(!1),[s,r]=k.useState(!1),[c,m]=k.useState(F2);return G.jsxs("div",{className:"min-h-screen bg-white font-sans selection:bg-amber-500/30",children:[G.jsx(W2,{onAdminClick:()=>r(!0),isAdmin:n,onLogout:()=>i(!1)}),G.jsx(Dx,{children:s&&G.jsx("div",{className:"fixed inset-0 z-[300] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md",children:G.jsxs("div",{className:"bg-white p-10 rounded-[2.5rem] border-4 border-amber-500 w-full max-w-md text-center",children:[G.jsx(t2,{size:50,className:"mx-auto mb-4 text-slate-900"}),G.jsx("h3",{className:"text-2xl font-black text-slate-900 mb-6",children:"ACESSO RESTRITO"}),G.jsx("input",{type:"password",placeholder:"SENHA",className:"w-full p-4 border-4 border-slate-900 text-center font-black text-xl mb-4",onKeyDown:f=>{f.key==="Enter"&&f.currentTarget.value==="2933"&&(i(!0),r(!1))}}),G.jsx("button",{onClick:()=>r(!1),className:"text-slate-400 font-bold uppercase text-xs",children:"Cancelar"})]})})}),G.jsxs("main",{children:[G.jsx(I2,{}),G.jsx($2,{}),G.jsx(eD,{}),G.jsx("div",{id:"monthly-agenda",className:"py-10"}),G.jsx(YouTubeCourse,{}),G.jsx(Giving,{})]}),G.jsxs("footer",{className:"bg-slate-950 text-white py-16 text-center border-t-8 border-amber-600",children:[G.jsx(i0,{size:50,className:"mx-auto mb-4 text-amber-500"}),G.jsx("h4",{className:"text-3xl font-serif font-bold",children:"IP Várzea do Poço"}),G.jsx("p",{className:"opacity-40 text-xs uppercase tracking-[0.4em] mt-2",children:"© 2026 - Fidelidade à Palavra de Deus"})]}),G.jsx(aD,{})]})}const aD=()=>{const[n,i]=k.useState(!1);return G.jsxs("div",{className:"fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4",children:[n&&G.jsxs("div",{className:"flex flex-col gap-3",children:[G.jsx("a",{href:"https://www.instagram.com/ipvarzeapoco",target:"_blank",className:"w-12 h-12 bg-pink-600 text-white rounded-full shadow-lg flex items-center justify-center",children:G.jsx(GA,{size:20})}),G.jsx("a",{href:"https://www.youtube.com/@IPBVARZEADOPOCO",target:"_blank",className:"w-12 h-12 bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center",children:G.jsx(i2,{size:20})}),G.jsx("a",{href:"https://wa.me/5574999829797",target:"_blank",className:"w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center",children:G.jsx(KA,{size:20})})]}),G.jsx("button",{onClick:()=>i(!n),className:o0("w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all",n?"bg-slate-800 rotate-45":"bg-amber-500"),children:G.jsx(WA,{size:32,className:"text-white"})})]})};BS.createRoot(document.getElementById("root")).render(G.jsx(k.StrictMode,{children:G.jsx(tD,{})}));
