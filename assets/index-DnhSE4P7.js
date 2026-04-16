(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const d of m.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(c){if(c.ep)return;c.ep=!0;const m=r(c);fetch(c.href,m)}})();var Fu={exports:{}},Ei={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function LS(){if(zp)return Ei;zp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(s,c,m){var d=null;if(m!==void 0&&(d=""+m),c.key!==void 0&&(d=""+c.key),"key"in c){m={};for(var h in c)h!=="key"&&(m[h]=c[h])}else m=c;return c=m.ref,{$$typeof:n,type:s,key:d,ref:c!==void 0?c:null,props:m}}return Ei.Fragment=i,Ei.jsx=r,Ei.jsxs=r,Ei}var Np;function US(){return Np||(Np=1,Fu.exports=LS()),Fu.exports}var x=US(),Wu={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function HS(){if(qp)return ce;qp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function z(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,U={};function H(A,_,J){this.props=A,this.context=_,this.refs=U,this.updater=J||O}H.prototype.isReactComponent={},H.prototype.setState=function(A,_){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,_,"setState")},H.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function X(){}X.prototype=H.prototype;function G(A,_,J){this.props=A,this.context=_,this.refs=U,this.updater=J||O}var Z=G.prototype=new X;Z.constructor=G,L(Z,H.prototype),Z.isPureReactComponent=!0;var Y=Array.isArray;function ie(){}var F={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function se(A,_,J){var K=J.ref;return{$$typeof:n,type:A,key:_,ref:K!==void 0?K:null,props:J}}function Ce(A,_){return se(A.type,_,A.props)}function _e(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function je(A){var _={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(J){return _[J]})}var pt=/\/+/g;function ut(A,_){return typeof A=="object"&&A!==null&&A.key!=null?je(""+A.key):_.toString(36)}function Ge(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ie,ie):(A.status="pending",A.then(function(_){A.status==="pending"&&(A.status="fulfilled",A.value=_)},function(_){A.status==="pending"&&(A.status="rejected",A.reason=_)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function R(A,_,J,K,oe){var le=typeof A;(le==="undefined"||le==="boolean")&&(A=null);var Se=!1;if(A===null)Se=!0;else switch(le){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(A.$$typeof){case n:case i:Se=!0;break;case y:return Se=A._init,R(Se(A._payload),_,J,K,oe)}}if(Se)return oe=oe(A),Se=K===""?"."+ut(A,0):K,Y(oe)?(J="",Se!=null&&(J=Se.replace(pt,"$&/")+"/"),R(oe,_,J,"",function(Da){return Da})):oe!=null&&(_e(oe)&&(oe=Ce(oe,J+(oe.key==null||A&&A.key===oe.key?"":(""+oe.key).replace(pt,"$&/")+"/")+Se)),_.push(oe)),1;Se=0;var Ie=K===""?".":K+":";if(Y(A))for(var he=0;he<A.length;he++)K=A[he],le=Ie+ut(K,he),Se+=R(K,_,J,le,oe);else if(he=z(A),typeof he=="function")for(A=he.call(A),he=0;!(K=A.next()).done;)K=K.value,le=Ie+ut(K,he++),Se+=R(K,_,J,le,oe);else if(le==="object"){if(typeof A.then=="function")return R(Ge(A),_,J,K,oe);throw _=String(A),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return Se}function Q(A,_,J){if(A==null)return A;var K=[],oe=0;return R(A,K,"","",function(le){return _.call(J,le,oe++)}),K}function W(A){if(A._status===-1){var _=A._result;_=_(),_.then(function(J){(A._status===0||A._status===-1)&&(A._status=1,A._result=J)},function(J){(A._status===0||A._status===-1)&&(A._status=2,A._result=J)}),A._status===-1&&(A._status=0,A._result=_)}if(A._status===1)return A._result.default;throw A._result}var me=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},P={map:Q,forEach:function(A,_,J){Q(A,function(){_.apply(this,arguments)},J)},count:function(A){var _=0;return Q(A,function(){_++}),_},toArray:function(A){return Q(A,function(_){return _})||[]},only:function(A){if(!_e(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ce.Activity=b,ce.Children=P,ce.Component=H,ce.Fragment=r,ce.Profiler=c,ce.PureComponent=G,ce.StrictMode=s,ce.Suspense=p,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ce.__COMPILER_RUNTIME={__proto__:null,c:function(A){return F.H.useMemoCache(A)}},ce.cache=function(A){return function(){return A.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(A,_,J){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var K=L({},A.props),oe=A.key;if(_!=null)for(le in _.key!==void 0&&(oe=""+_.key),_)!B.call(_,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&_.ref===void 0||(K[le]=_[le]);var le=arguments.length-2;if(le===1)K.children=J;else if(1<le){for(var Se=Array(le),Ie=0;Ie<le;Ie++)Se[Ie]=arguments[Ie+2];K.children=Se}return se(A.type,oe,K)},ce.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:m,_context:A},A},ce.createElement=function(A,_,J){var K,oe={},le=null;if(_!=null)for(K in _.key!==void 0&&(le=""+_.key),_)B.call(_,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(oe[K]=_[K]);var Se=arguments.length-2;if(Se===1)oe.children=J;else if(1<Se){for(var Ie=Array(Se),he=0;he<Se;he++)Ie[he]=arguments[he+2];oe.children=Ie}if(A&&A.defaultProps)for(K in Se=A.defaultProps,Se)oe[K]===void 0&&(oe[K]=Se[K]);return se(A,le,oe)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(A){return{$$typeof:h,render:A}},ce.isValidElement=_e,ce.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:W}},ce.memo=function(A,_){return{$$typeof:g,type:A,compare:_===void 0?null:_}},ce.startTransition=function(A){var _=F.T,J={};F.T=J;try{var K=A(),oe=F.S;oe!==null&&oe(J,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(ie,me)}catch(le){me(le)}finally{_!==null&&J.types!==null&&(_.types=J.types),F.T=_}},ce.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ce.use=function(A){return F.H.use(A)},ce.useActionState=function(A,_,J){return F.H.useActionState(A,_,J)},ce.useCallback=function(A,_){return F.H.useCallback(A,_)},ce.useContext=function(A){return F.H.useContext(A)},ce.useDebugValue=function(){},ce.useDeferredValue=function(A,_){return F.H.useDeferredValue(A,_)},ce.useEffect=function(A,_){return F.H.useEffect(A,_)},ce.useEffectEvent=function(A){return F.H.useEffectEvent(A)},ce.useId=function(){return F.H.useId()},ce.useImperativeHandle=function(A,_,J){return F.H.useImperativeHandle(A,_,J)},ce.useInsertionEffect=function(A,_){return F.H.useInsertionEffect(A,_)},ce.useLayoutEffect=function(A,_){return F.H.useLayoutEffect(A,_)},ce.useMemo=function(A,_){return F.H.useMemo(A,_)},ce.useOptimistic=function(A,_){return F.H.useOptimistic(A,_)},ce.useReducer=function(A,_,J){return F.H.useReducer(A,_,J)},ce.useRef=function(A){return F.H.useRef(A)},ce.useState=function(A){return F.H.useState(A)},ce.useSyncExternalStore=function(A,_,J){return F.H.useSyncExternalStore(A,_,J)},ce.useTransition=function(){return F.H.useTransition()},ce.version="19.2.4",ce}var Op;function Xc(){return Op||(Op=1,Wu.exports=HS()),Wu.exports}var k=Xc(),$u={exports:{}},Ai={},Iu={exports:{}},ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function QS(){return Rp||(Rp=1,(function(n){function i(R,Q){var W=R.length;R.push(Q);e:for(;0<W;){var me=W-1>>>1,P=R[me];if(0<c(P,Q))R[me]=Q,R[W]=P,W=me;else break e}}function r(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var Q=R[0],W=R.pop();if(W!==Q){R[0]=W;e:for(var me=0,P=R.length,A=P>>>1;me<A;){var _=2*(me+1)-1,J=R[_],K=_+1,oe=R[K];if(0>c(J,W))K<P&&0>c(oe,J)?(R[me]=oe,R[K]=W,me=K):(R[me]=J,R[_]=W,me=_);else if(K<P&&0>c(oe,W))R[me]=oe,R[K]=W,me=K;else break e}}return Q}function c(R,Q){var W=R.sortIndex-Q.sortIndex;return W!==0?W:R.id-Q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var d=Date,h=d.now();n.unstable_now=function(){return d.now()-h}}var p=[],g=[],y=1,b=null,S=3,z=!1,O=!1,L=!1,U=!1,H=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function Z(R){for(var Q=r(g);Q!==null;){if(Q.callback===null)s(g);else if(Q.startTime<=R)s(g),Q.sortIndex=Q.expirationTime,i(p,Q);else break;Q=r(g)}}function Y(R){if(L=!1,Z(R),!O)if(r(p)!==null)O=!0,ie||(ie=!0,je());else{var Q=r(g);Q!==null&&Ge(Y,Q.startTime-R)}}var ie=!1,F=-1,B=5,se=-1;function Ce(){return U?!0:!(n.unstable_now()-se<B)}function _e(){if(U=!1,ie){var R=n.unstable_now();se=R;var Q=!0;try{e:{O=!1,L&&(L=!1,X(F),F=-1),z=!0;var W=S;try{t:{for(Z(R),b=r(p);b!==null&&!(b.expirationTime>R&&Ce());){var me=b.callback;if(typeof me=="function"){b.callback=null,S=b.priorityLevel;var P=me(b.expirationTime<=R);if(R=n.unstable_now(),typeof P=="function"){b.callback=P,Z(R),Q=!0;break t}b===r(p)&&s(p),Z(R)}else s(p);b=r(p)}if(b!==null)Q=!0;else{var A=r(g);A!==null&&Ge(Y,A.startTime-R),Q=!1}}break e}finally{b=null,S=W,z=!1}Q=void 0}}finally{Q?je():ie=!1}}}var je;if(typeof G=="function")je=function(){G(_e)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,ut=pt.port2;pt.port1.onmessage=_e,je=function(){ut.postMessage(null)}}else je=function(){H(_e,0)};function Ge(R,Q){F=H(function(){R(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(R){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var W=S;S=Q;try{return R()}finally{S=W}},n.unstable_requestPaint=function(){U=!0},n.unstable_runWithPriority=function(R,Q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=S;S=R;try{return Q()}finally{S=W}},n.unstable_scheduleCallback=function(R,Q,W){var me=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?me+W:me):W=me,R){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=W+P,R={id:y++,callback:Q,priorityLevel:R,startTime:W,expirationTime:P,sortIndex:-1},W>me?(R.sortIndex=W,i(g,R),r(p)===null&&R===r(g)&&(L?(X(F),F=-1):L=!0,Ge(Y,W-me))):(R.sortIndex=P,i(p,R),O||z||(O=!0,ie||(ie=!0,je()))),R},n.unstable_shouldYield=Ce,n.unstable_wrapCallback=function(R){var Q=S;return function(){var W=S;S=Q;try{return R.apply(this,arguments)}finally{S=W}}}})(ec)),ec}var jp;function GS(){return jp||(jp=1,Iu.exports=QS()),Iu.exports}var tc={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function PS(){if(wp)return ct;wp=1;var n=Xc();function i(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function m(p,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:p,containerInfo:g,implementation:y}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ct.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return m(p,g,null,y)},ct.flushSync=function(p){var g=d.T,y=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=g,s.p=y,s.d.f()}},ct.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},ct.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},ct.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,z=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:z}):y==="script"&&s.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:z,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ct.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},ct.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ct.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=h(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},ct.requestFormReset=function(p){s.d.r(p)},ct.unstable_batchedUpdates=function(p,g){return p(g)},ct.useFormState=function(p,g,y){return d.H.useFormState(p,g,y)},ct.useFormStatus=function(){return d.H.useHostTransitionStatus()},ct.version="19.2.4",ct}var Vp;function kS(){if(Vp)return tc.exports;Vp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),tc.exports=PS(),tc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function YS(){if(_p)return Ai;_p=1;var n=GS(),i=Xc(),r=kS();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(m(e)!==e)throw Error(s(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,o=t;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){a=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return p(l),e;if(u===o)return p(l),t;u=u.sibling}throw Error(s(188))}if(a.return!==o.return)a=l,o=u;else{for(var f=!1,v=l.child;v;){if(v===a){f=!0,a=l,o=u;break}if(v===o){f=!0,o=l,a=u;break}v=v.sibling}if(!f){for(v=u.child;v;){if(v===a){f=!0,a=u,o=l;break}if(v===o){f=!0,o=u,a=l;break}v=v.sibling}if(!f)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),G=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),_e=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var pt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case H:return"Profiler";case U:return"StrictMode";case Y:return"Suspense";case ie:return"SuspenseList";case se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case G:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:ut(e.type)||"Memo";case B:t=e._payload,e=e._init;try{return ut(e(t))}catch{}}return null}var Ge=Array.isArray,R=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},me=[],P=-1;function A(e){return{current:e}}function _(e){0>P||(e.current=me[P],me[P]=null,P--)}function J(e,t){P++,me[P]=e.current,e.current=t}var K=A(null),oe=A(null),le=A(null),Se=A(null);function Ie(e,t){switch(J(le,t),J(oe,e),J(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wh(t),e=$h(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(K),J(K,e)}function he(){_(K),_(oe),_(le)}function Da(e){e.memoizedState!==null&&J(Se,e);var t=K.current,a=$h(t,e.type);t!==a&&(J(oe,e),J(K,a))}function sa(e){oe.current===e&&(_(K),_(oe)),Se.current===e&&(_(Se),bi._currentValue=W)}var za,wn;function jt(e){if(za===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);za=t&&t[1]||"",wn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+za+e+wn}var jr=!1;function wr(e,t){if(!e||jr)return"";jr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(q){var N=q}Reflect.construct(e,[],V)}else{try{V.call()}catch(q){N=q}e.call(V.prototype)}}else{try{throw Error()}catch(q){N=q}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(q){if(q&&N&&typeof q.stack=="string")return[q.stack,N.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),f=u[0],v=u[1];if(f&&v){var T=f.split(`
`),D=v.split(`
`);for(l=o=0;o<T.length&&!T[o].includes("DetermineComponentFrameRoot");)o++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(o===T.length||l===D.length)for(o=T.length-1,l=D.length-1;1<=o&&0<=l&&T[o]!==D[l];)l--;for(;1<=o&&0<=l;o--,l--)if(T[o]!==D[l]){if(o!==1||l!==1)do if(o--,l--,0>l||T[o]!==D[l]){var j=`
`+T[o].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=o&&0<=l);break}}}finally{jr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function p0(e,t){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return e.child!==t&&t!==null?jt("Suspense Fallback"):jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return wr(e.type,!1);case 11:return wr(e.type.render,!1);case 1:return wr(e.type,!0);case 31:return jt("Activity");default:return""}}function Dd(e){try{var t="",a=null;do t+=p0(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Vr=Object.prototype.hasOwnProperty,_r=n.unstable_scheduleCallback,Br=n.unstable_cancelCallback,g0=n.unstable_shouldYield,v0=n.unstable_requestPaint,Et=n.unstable_now,y0=n.unstable_getCurrentPriorityLevel,zd=n.unstable_ImmediatePriority,Nd=n.unstable_UserBlockingPriority,ki=n.unstable_NormalPriority,b0=n.unstable_LowPriority,qd=n.unstable_IdlePriority,S0=n.log,T0=n.unstable_setDisableYieldValue,Oo=null,At=null;function Na(e){if(typeof S0=="function"&&T0(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Oo,e)}catch{}}var Ct=Math.clz32?Math.clz32:A0,x0=Math.log,E0=Math.LN2;function A0(e){return e>>>=0,e===0?32:31-(x0(e)/E0|0)|0}var Yi=256,Xi=262144,Ji=4194304;function un(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zi(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var v=o&134217727;return v!==0?(o=v&~u,o!==0?l=un(o):(f&=v,f!==0?l=un(f):a||(a=v&~e,a!==0&&(l=un(a))))):(v=o&~u,v!==0?l=un(v):f!==0?l=un(f):a||(a=o&~e,a!==0&&(l=un(a)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:l}function Ro(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function C0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(){var e=Ji;return Ji<<=1,(Ji&62914560)===0&&(Ji=4194304),e}function Lr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function jo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function M0(e,t,a,o,l,u){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var v=e.entanglements,T=e.expirationTimes,D=e.hiddenUpdates;for(a=f&~a;0<a;){var j=31-Ct(a),V=1<<j;v[j]=0,T[j]=-1;var N=D[j];if(N!==null)for(D[j]=null,j=0;j<N.length;j++){var q=N[j];q!==null&&(q.lane&=-536870913)}a&=~V}o!==0&&Rd(e,o,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(f&~t))}function Rd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Ct(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function jd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Ct(a),l=1<<o;l&t|e[o]&t&&(e[o]|=t),a&=~l}}function wd(e,t){var a=t&-t;return a=(a&42)!==0?1:Ur(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ur(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vd(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Tp(e.type))}function _d(e,t){var a=Q.p;try{return Q.p=e,t()}finally{Q.p=a}}var qa=Math.random().toString(36).slice(2),at="__reactFiber$"+qa,gt="__reactProps$"+qa,Vn="__reactContainer$"+qa,Qr="__reactEvents$"+qa,D0="__reactListeners$"+qa,z0="__reactHandles$"+qa,Bd="__reactResources$"+qa,wo="__reactMarker$"+qa;function Gr(e){delete e[at],delete e[gt],delete e[Qr],delete e[D0],delete e[z0]}function _n(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Vn]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ip(e);e!==null;){if(a=e[at])return a;e=ip(e)}return t}e=a,a=e.parentNode}return null}function Bn(e){if(e=e[at]||e[Vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ln(e){var t=e[Bd];return t||(t=e[Bd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[wo]=!0}var Ld=new Set,Ud={};function cn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(Ud[e]=t,e=0;e<t.length;e++)Ld.add(t[e])}var N0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hd={},Qd={};function q0(e){return Vr.call(Qd,e)?!0:Vr.call(Hd,e)?!1:N0.test(e)?Qd[e]=!0:(Hd[e]=!0,!1)}function Ki(e,t,a){if(q0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Fi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ra(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O0(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){if(!e._valueTracker){var t=Gd(e)?"checked":"value";e._valueTracker=O0(e,t,""+e[t])}}function Pd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=Gd(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var R0=/[\n"\\]/g;function Vt(e){return e.replace(R0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function kr(e,t,a,o,l,u,f,v){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Yr(e,f,wt(t)):a!=null?Yr(e,f,wt(a)):o!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+wt(v):e.removeAttribute("name")}function kd(e,t,a,o,l,u,f,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Pr(e);return}a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,v||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=v?e.checked:!!o,e.defaultChecked=!!o,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Pr(e)}function Yr(e,t,a){t==="number"&&Wi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Hn(e,t,a,o){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&o&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Yd(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function Xd(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(s(92));if(Ge(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Pr(e)}function Qn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var j0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jd(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||j0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Zd(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var l in t)o=t[l],t.hasOwnProperty(l)&&a[l]!==o&&Jd(e,l,o)}else for(var u in t)t.hasOwnProperty(u)&&Jd(e,u,t[u])}function Xr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),V0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $i(e){return V0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var Jr=null;function Zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gn=null,Pn=null;function Kd(e){var t=Bn(e);if(t&&(e=t.stateNode)){var a=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(kr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var l=o[gt]||null;if(!l)throw Error(s(90));kr(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&Pd(o)}break e;case"textarea":Yd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Hn(e,!!a.multiple,t,!1)}}}var Kr=!1;function Fd(e,t,a){if(Kr)return e(t,a);Kr=!0;try{var o=e(t);return o}finally{if(Kr=!1,(Gn!==null||Pn!==null)&&(Us(),Gn&&(t=Gn,e=Pn,Pn=Gn=null,Kd(t),e)))for(t=0;t<e.length;t++)Kd(e[t])}}function _o(e,t){var a=e.stateNode;if(a===null)return null;var o=a[gt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fr=!1;if(ua)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){Fr=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{Fr=!1}var Oa=null,Wr=null,Ii=null;function Wd(){if(Ii)return Ii;var e,t=Wr,a=t.length,o,l="value"in Oa?Oa.value:Oa.textContent,u=l.length;for(e=0;e<a&&t[e]===l[e];e++);var f=a-e;for(o=1;o<=f&&t[a-o]===l[u-o];o++);return Ii=l.slice(e,1<o?1-o:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function $d(){return!1}function vt(e){function t(a,o,l,u,f){this._reactName=a,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(a=e[v],this[v]=a?a(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ts:$d,this.isPropagationStopped=$d,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=vt(dn),Lo=b({},dn,{view:0,detail:0}),_0=vt(Lo),$r,Ir,Uo,ns=b({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?($r=e.screenX-Uo.screenX,Ir=e.screenY-Uo.screenY):Ir=$r=0,Uo=e),$r)},movementY:function(e){return"movementY"in e?e.movementY:Ir}}),Id=vt(ns),B0=b({},ns,{dataTransfer:0}),L0=vt(B0),U0=b({},Lo,{relatedTarget:0}),el=vt(U0),H0=b({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=vt(H0),G0=b({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P0=vt(G0),k0=b({},dn,{data:0}),ef=vt(k0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=J0[e])?!!t[e]:!1}function tl(){return Z0}var K0=b({},Lo,{key:function(e){if(e.key){var t=Y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),F0=vt(K0),W0=b({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tf=vt(W0),$0=b({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),I0=vt($0),eb=b({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tb=vt(eb),ab=b({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nb=vt(ab),ob=b({},dn,{newState:0,oldState:0}),ib=vt(ob),sb=[9,13,27,32],al=ua&&"CompositionEvent"in window,Ho=null;ua&&"documentMode"in document&&(Ho=document.documentMode);var rb=ua&&"TextEvent"in window&&!Ho,af=ua&&(!al||Ho&&8<Ho&&11>=Ho),nf=" ",of=!1;function sf(e,t){switch(e){case"keyup":return sb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function lb(e,t){switch(e){case"compositionend":return rf(t);case"keypress":return t.which!==32?null:(of=!0,nf);case"textInput":return e=t.data,e===nf&&of?null:e;default:return null}}function ub(e,t){if(kn)return e==="compositionend"||!al&&sf(e,t)?(e=Wd(),Ii=Wr=Oa=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return af&&t.locale!=="ko"?null:t.data;default:return null}}var cb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cb[e.type]:t==="textarea"}function uf(e,t,a,o){Gn?Pn?Pn.push(o):Pn=[o]:Gn=o,t=Xs(t,"onChange"),0<t.length&&(a=new as("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Qo=null,Go=null;function db(e){Yh(e,0)}function os(e){var t=Vo(e);if(Pd(t))return e}function cf(e,t){if(e==="change")return t}var df=!1;if(ua){var nl;if(ua){var ol="oninput"in document;if(!ol){var ff=document.createElement("div");ff.setAttribute("oninput","return;"),ol=typeof ff.oninput=="function"}nl=ol}else nl=!1;df=nl&&(!document.documentMode||9<document.documentMode)}function mf(){Qo&&(Qo.detachEvent("onpropertychange",hf),Go=Qo=null)}function hf(e){if(e.propertyName==="value"&&os(Go)){var t=[];uf(t,Go,e,Zr(e)),Fd(db,t)}}function fb(e,t,a){e==="focusin"?(mf(),Qo=t,Go=a,Qo.attachEvent("onpropertychange",hf)):e==="focusout"&&mf()}function mb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return os(Go)}function hb(e,t){if(e==="click")return os(t)}function pb(e,t){if(e==="input"||e==="change")return os(t)}function gb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:gb;function Po(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var l=a[o];if(!Vr.call(t,l)||!Mt(e[l],t[l]))return!1}return!0}function pf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gf(e,t){var a=pf(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pf(a)}}function vf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wi(e.document)}return t}function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var vb=ua&&"documentMode"in document&&11>=document.documentMode,Yn=null,sl=null,ko=null,rl=!1;function bf(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rl||Yn==null||Yn!==Wi(o)||(o=Yn,"selectionStart"in o&&il(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ko&&Po(ko,o)||(ko=o,o=Xs(sl,"onSelect"),0<o.length&&(t=new as("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Yn)))}function fn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Xn={animationend:fn("Animation","AnimationEnd"),animationiteration:fn("Animation","AnimationIteration"),animationstart:fn("Animation","AnimationStart"),transitionrun:fn("Transition","TransitionRun"),transitionstart:fn("Transition","TransitionStart"),transitioncancel:fn("Transition","TransitionCancel"),transitionend:fn("Transition","TransitionEnd")},ll={},Sf={};ua&&(Sf=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function mn(e){if(ll[e])return ll[e];if(!Xn[e])return e;var t=Xn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Sf)return ll[e]=t[a];return e}var Tf=mn("animationend"),xf=mn("animationiteration"),Ef=mn("animationstart"),yb=mn("transitionrun"),bb=mn("transitionstart"),Sb=mn("transitioncancel"),Af=mn("transitionend"),Cf=new Map,ul="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ul.push("scrollEnd");function Xt(e,t){Cf.set(e,t),cn(t,[e])}var is=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],Jn=0,cl=0;function ss(){for(var e=Jn,t=cl=Jn=0;t<e;){var a=_t[t];_t[t++]=null;var o=_t[t];_t[t++]=null;var l=_t[t];_t[t++]=null;var u=_t[t];if(_t[t++]=null,o!==null&&l!==null){var f=o.pending;f===null?l.next=l:(l.next=f.next,f.next=l),o.pending=l}u!==0&&Mf(a,l,u)}}function rs(e,t,a,o){_t[Jn++]=e,_t[Jn++]=t,_t[Jn++]=a,_t[Jn++]=o,cl|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function dl(e,t,a,o){return rs(e,t,a,o),ls(e)}function hn(e,t){return rs(e,null,null,t),ls(e)}function Mf(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-Ct(a),e=u.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=a|536870912),u):null}function ls(e){if(50<fi)throw fi=0,Su=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zn={};function Tb(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,a,o){return new Tb(e,t,a,o)}function fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,t){var a=e.alternate;return a===null?(a=Dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Df(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function us(e,t,a,o,l,u){var f=0;if(o=e,typeof e=="function")fl(e)&&(f=1);else if(typeof e=="string")f=MS(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case se:return e=Dt(31,a,t,l),e.elementType=se,e.lanes=u,e;case L:return pn(a.children,l,u,t);case U:f=8,l|=24;break;case H:return e=Dt(12,a,t,l|2),e.elementType=H,e.lanes=u,e;case Y:return e=Dt(13,a,t,l),e.elementType=Y,e.lanes=u,e;case ie:return e=Dt(19,a,t,l),e.elementType=ie,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:f=10;break e;case X:f=9;break e;case Z:f=11;break e;case F:f=14;break e;case B:f=16,o=null;break e}f=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return t=Dt(f,a,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function pn(e,t,a,o){return e=Dt(7,e,o,t),e.lanes=a,e}function ml(e,t,a){return e=Dt(6,e,null,t),e.lanes=a,e}function zf(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function hl(e,t,a){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nf=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var a=Nf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Dd(t)},Nf.set(e,t),t)}return{value:e,source:t,stack:Dd(t)}}var Kn=[],Fn=0,cs=null,Yo=0,Lt=[],Ut=0,Ra=null,It=1,ea="";function da(e,t){Kn[Fn++]=Yo,Kn[Fn++]=cs,cs=e,Yo=t}function qf(e,t,a){Lt[Ut++]=It,Lt[Ut++]=ea,Lt[Ut++]=Ra,Ra=e;var o=It;e=ea;var l=32-Ct(o)-1;o&=~(1<<l),a+=1;var u=32-Ct(t)+l;if(30<u){var f=l-l%5;u=(o&(1<<f)-1).toString(32),o>>=f,l-=f,It=1<<32-Ct(t)+l|a<<l|o,ea=u+e}else It=1<<u|a<<l|o,ea=e}function pl(e){e.return!==null&&(da(e,1),qf(e,1,0))}function gl(e){for(;e===cs;)cs=Kn[--Fn],Kn[Fn]=null,Yo=Kn[--Fn],Kn[Fn]=null;for(;e===Ra;)Ra=Lt[--Ut],Lt[Ut]=null,ea=Lt[--Ut],Lt[Ut]=null,It=Lt[--Ut],Lt[Ut]=null}function Of(e,t){Lt[Ut++]=It,Lt[Ut++]=ea,Lt[Ut++]=Ra,It=t.id,ea=t.overflow,Ra=e}var nt=null,we=null,Te=!1,ja=null,Ht=!1,vl=Error(s(519));function wa(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(Bt(t,e)),vl}function Rf(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[at]=e,t[gt]=o,a){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(a=0;a<hi.length;a++)ve(hi[a],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),kd(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),Xd(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Kh(t.textContent,a)?(o.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),o.onScroll!=null&&ve("scroll",t),o.onScrollEnd!=null&&ve("scrollend",t),o.onClick!=null&&(t.onclick=la),t=!0):t=!1,t||wa(e,!0)}function jf(e){for(nt=e.return;nt;)switch(nt.tag){case 5:case 31:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:nt=nt.return}}function Wn(e){if(e!==nt)return!1;if(!Te)return jf(e),Te=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vu(e.type,e.memoizedProps)),a=!a),a&&we&&wa(e),jf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));we=op(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));we=op(e)}else t===27?(t=we,Za(e.type)?(e=Hu,Hu=null,we=e):we=t):we=nt?Gt(e.stateNode.nextSibling):null;return!0}function gn(){we=nt=null,Te=!1}function yl(){var e=ja;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),ja=null),e}function Xo(e){ja===null?ja=[e]:ja.push(e)}var bl=A(null),vn=null,fa=null;function Va(e,t,a){J(bl,t._currentValue),t._currentValue=a}function ma(e){e._currentValue=bl.current,_(bl)}function Sl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Tl(e,t,a,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var f=l.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=l;for(var T=0;T<t.length;T++)if(v.context===t[T]){u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),Sl(u.return,a,e),o||(f=null);break e}u=v.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(s(341));f.lanes|=a,u=f.alternate,u!==null&&(u.lanes|=a),Sl(f,a,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function $n(e,t,a,o){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var v=l.type;Mt(l.pendingProps.value,f.value)||(e!==null?e.push(v):e=[v])}}else if(l===Se.current){if(f=l.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(bi):e=[bi])}l=l.return}e!==null&&Tl(t,e,a,o),t.flags|=262144}function ds(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yn(e){vn=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return wf(vn,e)}function fs(e,t){return vn===null&&yn(e),wf(e,t)}function wf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(s(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return a}var xb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Eb=n.unstable_scheduleCallback,Ab=n.unstable_NormalPriority,Ye={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xl(){return{controller:new xb,data:new Map,refCount:0}}function Jo(e){e.refCount--,e.refCount===0&&Eb(Ab,function(){e.controller.abort()})}var Zo=null,El=0,In=0,eo=null;function Cb(e,t){if(Zo===null){var a=Zo=[];El=0,In=Mu(),eo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return El++,t.then(Vf,Vf),t}function Vf(){if(--El===0&&Zo!==null){eo!==null&&(eo.status="fulfilled");var e=Zo;Zo=null,In=0,eo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Mb(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),o}var _f=R.S;R.S=function(e,t){bh=Et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cb(e,t),_f!==null&&_f(e,t)};var bn=A(null);function Al(){var e=bn.current;return e!==null?e:Oe.pooledCache}function ms(e,t){t===null?J(bn,bn.current):J(bn,t.pool)}function Bf(){var e=Al();return e===null?null:{parent:Ye._currentValue,pool:e}}var to=Error(s(460)),Cl=Error(s(474)),hs=Error(s(542)),ps={then:function(){}};function Lf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Uf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(la,la),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qf(e),e;default:if(typeof t.status=="string")t.then(la,la);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=o}},function(o){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qf(e),e}throw Tn=t,to}}function Sn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Tn=a,to):a}}var Tn=null;function Hf(){if(Tn===null)throw Error(s(459));var e=Tn;return Tn=null,e}function Qf(e){if(e===to||e===hs)throw Error(s(483))}var ao=null,Ko=0;function gs(e){var t=Ko;return Ko+=1,ao===null&&(ao=[]),Uf(ao,e,t)}function Fo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vs(e,t){throw t.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gf(e){function t(C,E){if(e){var M=C.deletions;M===null?(C.deletions=[E],C.flags|=16):M.push(E)}}function a(C,E){if(!e)return null;for(;E!==null;)t(C,E),E=E.sibling;return null}function o(C){for(var E=new Map;C!==null;)C.key!==null?E.set(C.key,C):E.set(C.index,C),C=C.sibling;return E}function l(C,E){return C=ca(C,E),C.index=0,C.sibling=null,C}function u(C,E,M){return C.index=M,e?(M=C.alternate,M!==null?(M=M.index,M<E?(C.flags|=67108866,E):M):(C.flags|=67108866,E)):(C.flags|=1048576,E)}function f(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function v(C,E,M,w){return E===null||E.tag!==6?(E=ml(M,C.mode,w),E.return=C,E):(E=l(E,M),E.return=C,E)}function T(C,E,M,w){var re=M.type;return re===L?j(C,E,M.props.children,w,M.key):E!==null&&(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===B&&Sn(re)===E.type)?(E=l(E,M.props),Fo(E,M),E.return=C,E):(E=us(M.type,M.key,M.props,null,C.mode,w),Fo(E,M),E.return=C,E)}function D(C,E,M,w){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=hl(M,C.mode,w),E.return=C,E):(E=l(E,M.children||[]),E.return=C,E)}function j(C,E,M,w,re){return E===null||E.tag!==7?(E=pn(M,C.mode,w,re),E.return=C,E):(E=l(E,M),E.return=C,E)}function V(C,E,M){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=ml(""+E,C.mode,M),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case z:return M=us(E.type,E.key,E.props,null,C.mode,M),Fo(M,E),M.return=C,M;case O:return E=hl(E,C.mode,M),E.return=C,E;case B:return E=Sn(E),V(C,E,M)}if(Ge(E)||je(E))return E=pn(E,C.mode,M,null),E.return=C,E;if(typeof E.then=="function")return V(C,gs(E),M);if(E.$$typeof===G)return V(C,fs(C,E),M);vs(C,E)}return null}function N(C,E,M,w){var re=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return re!==null?null:v(C,E,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case z:return M.key===re?T(C,E,M,w):null;case O:return M.key===re?D(C,E,M,w):null;case B:return M=Sn(M),N(C,E,M,w)}if(Ge(M)||je(M))return re!==null?null:j(C,E,M,w,null);if(typeof M.then=="function")return N(C,E,gs(M),w);if(M.$$typeof===G)return N(C,E,fs(C,M),w);vs(C,M)}return null}function q(C,E,M,w,re){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return C=C.get(M)||null,v(E,C,""+w,re);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case z:return C=C.get(w.key===null?M:w.key)||null,T(E,C,w,re);case O:return C=C.get(w.key===null?M:w.key)||null,D(E,C,w,re);case B:return w=Sn(w),q(C,E,M,w,re)}if(Ge(w)||je(w))return C=C.get(M)||null,j(E,C,w,re,null);if(typeof w.then=="function")return q(C,E,M,gs(w),re);if(w.$$typeof===G)return q(C,E,M,fs(E,w),re);vs(E,w)}return null}function $(C,E,M,w){for(var re=null,xe=null,ne=E,fe=E=0,be=null;ne!==null&&fe<M.length;fe++){ne.index>fe?(be=ne,ne=null):be=ne.sibling;var Ee=N(C,ne,M[fe],w);if(Ee===null){ne===null&&(ne=be);break}e&&ne&&Ee.alternate===null&&t(C,ne),E=u(Ee,E,fe),xe===null?re=Ee:xe.sibling=Ee,xe=Ee,ne=be}if(fe===M.length)return a(C,ne),Te&&da(C,fe),re;if(ne===null){for(;fe<M.length;fe++)ne=V(C,M[fe],w),ne!==null&&(E=u(ne,E,fe),xe===null?re=ne:xe.sibling=ne,xe=ne);return Te&&da(C,fe),re}for(ne=o(ne);fe<M.length;fe++)be=q(ne,C,fe,M[fe],w),be!==null&&(e&&be.alternate!==null&&ne.delete(be.key===null?fe:be.key),E=u(be,E,fe),xe===null?re=be:xe.sibling=be,xe=be);return e&&ne.forEach(function(Ia){return t(C,Ia)}),Te&&da(C,fe),re}function ue(C,E,M,w){if(M==null)throw Error(s(151));for(var re=null,xe=null,ne=E,fe=E=0,be=null,Ee=M.next();ne!==null&&!Ee.done;fe++,Ee=M.next()){ne.index>fe?(be=ne,ne=null):be=ne.sibling;var Ia=N(C,ne,Ee.value,w);if(Ia===null){ne===null&&(ne=be);break}e&&ne&&Ia.alternate===null&&t(C,ne),E=u(Ia,E,fe),xe===null?re=Ia:xe.sibling=Ia,xe=Ia,ne=be}if(Ee.done)return a(C,ne),Te&&da(C,fe),re;if(ne===null){for(;!Ee.done;fe++,Ee=M.next())Ee=V(C,Ee.value,w),Ee!==null&&(E=u(Ee,E,fe),xe===null?re=Ee:xe.sibling=Ee,xe=Ee);return Te&&da(C,fe),re}for(ne=o(ne);!Ee.done;fe++,Ee=M.next())Ee=q(ne,C,fe,Ee.value,w),Ee!==null&&(e&&Ee.alternate!==null&&ne.delete(Ee.key===null?fe:Ee.key),E=u(Ee,E,fe),xe===null?re=Ee:xe.sibling=Ee,xe=Ee);return e&&ne.forEach(function(BS){return t(C,BS)}),Te&&da(C,fe),re}function qe(C,E,M,w){if(typeof M=="object"&&M!==null&&M.type===L&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case z:e:{for(var re=M.key;E!==null;){if(E.key===re){if(re=M.type,re===L){if(E.tag===7){a(C,E.sibling),w=l(E,M.props.children),w.return=C,C=w;break e}}else if(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===B&&Sn(re)===E.type){a(C,E.sibling),w=l(E,M.props),Fo(w,M),w.return=C,C=w;break e}a(C,E);break}else t(C,E);E=E.sibling}M.type===L?(w=pn(M.props.children,C.mode,w,M.key),w.return=C,C=w):(w=us(M.type,M.key,M.props,null,C.mode,w),Fo(w,M),w.return=C,C=w)}return f(C);case O:e:{for(re=M.key;E!==null;){if(E.key===re)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){a(C,E.sibling),w=l(E,M.children||[]),w.return=C,C=w;break e}else{a(C,E);break}else t(C,E);E=E.sibling}w=hl(M,C.mode,w),w.return=C,C=w}return f(C);case B:return M=Sn(M),qe(C,E,M,w)}if(Ge(M))return $(C,E,M,w);if(je(M)){if(re=je(M),typeof re!="function")throw Error(s(150));return M=re.call(M),ue(C,E,M,w)}if(typeof M.then=="function")return qe(C,E,gs(M),w);if(M.$$typeof===G)return qe(C,E,fs(C,M),w);vs(C,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,E!==null&&E.tag===6?(a(C,E.sibling),w=l(E,M),w.return=C,C=w):(a(C,E),w=ml(M,C.mode,w),w.return=C,C=w),f(C)):a(C,E)}return function(C,E,M,w){try{Ko=0;var re=qe(C,E,M,w);return ao=null,re}catch(ne){if(ne===to||ne===hs)throw ne;var xe=Dt(29,ne,null,C.mode);return xe.lanes=w,xe.return=C,xe}finally{}}}var xn=Gf(!0),Pf=Gf(!1),_a=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ae&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=ls(e),Mf(e,null,a),t}return rs(e,o,t,a),ls(e)}function Wo(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,jd(e,a)}}function zl(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=f:u=u.next=f,a=a.next}while(a!==null);u===null?l=u=t:u=u.next=t}else l=u=t;a={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Nl=!1;function $o(){if(Nl){var e=eo;if(e!==null)throw e}}function Io(e,t,a,o){Nl=!1;var l=e.updateQueue;_a=!1;var u=l.firstBaseUpdate,f=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var T=v,D=T.next;T.next=null,f===null?u=D:f.next=D,f=T;var j=e.alternate;j!==null&&(j=j.updateQueue,v=j.lastBaseUpdate,v!==f&&(v===null?j.firstBaseUpdate=D:v.next=D,j.lastBaseUpdate=T))}if(u!==null){var V=l.baseState;f=0,j=D=T=null,v=u;do{var N=v.lane&-536870913,q=N!==v.lane;if(q?(ye&N)===N:(o&N)===N){N!==0&&N===In&&(Nl=!0),j!==null&&(j=j.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var $=e,ue=v;N=t;var qe=a;switch(ue.tag){case 1:if($=ue.payload,typeof $=="function"){V=$.call(qe,V,N);break e}V=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=ue.payload,N=typeof $=="function"?$.call(qe,V,N):$,N==null)break e;V=b({},V,N);break e;case 2:_a=!0}}N=v.callback,N!==null&&(e.flags|=64,q&&(e.flags|=8192),q=l.callbacks,q===null?l.callbacks=[N]:q.push(N))}else q={lane:N,tag:v.tag,payload:v.payload,callback:v.callback,next:null},j===null?(D=j=q,T=V):j=j.next=q,f|=N;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;q=v,v=q.next,q.next=null,l.lastBaseUpdate=q,l.shared.pending=null}}while(!0);j===null&&(T=V),l.baseState=T,l.firstBaseUpdate=D,l.lastBaseUpdate=j,u===null&&(l.shared.lanes=0),Pa|=f,e.lanes=f,e.memoizedState=V}}function kf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Yf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)kf(a[e],t)}var no=A(null),ys=A(0);function Xf(e,t){e=xa,J(ys,e),J(no,t),xa=e|t.baseLanes}function ql(){J(ys,xa),J(no,no.current)}function Ol(){xa=ys.current,_(no),_(ys)}var zt=A(null),Qt=null;function Ua(e){var t=e.alternate;J(Pe,Pe.current&1),J(zt,e),Qt===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(Qt=e)}function Rl(e){J(Pe,Pe.current),J(zt,e),Qt===null&&(Qt=e)}function Jf(e){e.tag===22?(J(Pe,Pe.current),J(zt,e),Qt===null&&(Qt=e)):Ha()}function Ha(){J(Pe,Pe.current),J(zt,zt.current)}function Nt(e){_(zt),Qt===e&&(Qt=null),_(Pe)}var Pe=A(0);function bs(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lu(a)||Uu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,de=null,ze=null,Xe=null,Ss=!1,oo=!1,En=!1,Ts=0,ei=0,io=null,Db=0;function Ue(){throw Error(s(321))}function jl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Mt(e[a],t[a]))return!1;return!0}function wl(e,t,a,o,l,u){return ha=u,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?qm:Kl,En=!1,u=a(o,l),En=!1,oo&&(u=Kf(t,a,o,l)),Zf(e),u}function Zf(e){R.H=ni;var t=ze!==null&&ze.next!==null;if(ha=0,Xe=ze=de=null,Ss=!1,ei=0,io=null,t)throw Error(s(300));e===null||Je||(e=e.dependencies,e!==null&&ds(e)&&(Je=!0))}function Kf(e,t,a,o){de=e;var l=0;do{if(oo&&(io=null),ei=0,oo=!1,25<=l)throw Error(s(301));if(l+=1,Xe=ze=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=Om,u=t(a,o)}while(oo);return u}function zb(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ti(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(de.flags|=1024),t}function Vl(){var e=Ts!==0;return Ts=0,e}function _l(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Bl(e){if(Ss){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ss=!1}ha=0,Xe=ze=de=null,oo=!1,ei=Ts=0,io=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?de.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function ke(){if(ze===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Xe===null?de.memoizedState:Xe.next;if(t!==null)Xe=t,ze=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Xe===null?de.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function xs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ti(e){var t=ei;return ei+=1,io===null&&(io=[]),e=Uf(io,e,t),t=de,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?qm:Kl),e}function Es(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ti(e);if(e.$$typeof===G)return ot(e)}throw Error(s(438,String(e)))}function Ll(e){var t=null,a=de.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=xs(),de.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=Ce;return t.index++,a}function pa(e,t){return typeof t=="function"?t(e):t}function As(e){var t=ke();return Ul(t,ze,e)}function Ul(e,t,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var l=e.baseQueue,u=o.pending;if(u!==null){if(l!==null){var f=l.next;l.next=u.next,u.next=f}t.baseQueue=l=u,o.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var v=f=null,T=null,D=t,j=!1;do{var V=D.lane&-536870913;if(V!==D.lane?(ye&V)===V:(ha&V)===V){var N=D.revertLane;if(N===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),V===In&&(j=!0);else if((ha&N)===N){D=D.next,N===In&&(j=!0);continue}else V={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(v=T=V,f=u):T=T.next=V,de.lanes|=N,Pa|=N;V=D.action,En&&a(u,V),u=D.hasEagerState?D.eagerState:a(u,V)}else N={lane:V,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(v=T=N,f=u):T=T.next=N,de.lanes|=V,Pa|=V;D=D.next}while(D!==null&&D!==t);if(T===null?f=u:T.next=v,!Mt(u,e.memoizedState)&&(Je=!0,j&&(a=eo,a!==null)))throw a;e.memoizedState=u,e.baseState=f,e.baseQueue=T,o.lastRenderedState=u}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Hl(e){var t=ke(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,l=a.pending,u=t.memoizedState;if(l!==null){a.pending=null;var f=l=l.next;do u=e(u,f.action),f=f.next;while(f!==l);Mt(u,t.memoizedState)||(Je=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function Ff(e,t,a){var o=de,l=ke(),u=Te;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=t();var f=!Mt((ze||l).memoizedState,a);if(f&&(l.memoizedState=a,Je=!0),l=l.queue,Pl(If.bind(null,o,l,e),[e]),l.getSnapshot!==t||f||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,so(9,{destroy:void 0},$f.bind(null,o,l,a,t),null),Oe===null)throw Error(s(349));u||(ha&127)!==0||Wf(o,t,a)}return a}function Wf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=de.updateQueue,t===null?(t=xs(),de.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function $f(e,t,a,o){t.value=a,t.getSnapshot=o,em(t)&&tm(e)}function If(e,t,a){return a(function(){em(t)&&tm(e)})}function em(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Mt(e,a)}catch{return!0}}function tm(e){var t=hn(e,2);t!==null&&xt(t,e,2)}function Ql(e){var t=ft();if(typeof e=="function"){var a=e;if(e=a(),En){Na(!0);try{a()}finally{Na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function am(e,t,a,o){return e.baseState=a,Ul(e,ze,typeof o=="function"?o:pa)}function Nb(e,t,a,o,l){if(Ds(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};R.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,nm(t,u)):(u.next=a.next,t.pending=a.next=u)}}function nm(e,t){var a=t.action,o=t.payload,l=e.state;if(t.isTransition){var u=R.T,f={};R.T=f;try{var v=a(l,o),T=R.S;T!==null&&T(f,v),om(e,t,v)}catch(D){Gl(e,t,D)}finally{u!==null&&f.types!==null&&(u.types=f.types),R.T=u}}else try{u=a(l,o),om(e,t,u)}catch(D){Gl(e,t,D)}}function om(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){im(e,t,o)},function(o){return Gl(e,t,o)}):im(e,t,a)}function im(e,t,a){t.status="fulfilled",t.value=a,sm(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,nm(e,a)))}function Gl(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,sm(t),t=t.next;while(t!==o)}e.action=null}function sm(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rm(e,t){return t}function lm(e,t){if(Te){var a=Oe.formState;if(a!==null){e:{var o=de;if(Te){if(we){t:{for(var l=we,u=Ht;l.nodeType!==8;){if(!u){l=null;break t}if(l=Gt(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){we=Gt(l.nextSibling),o=l.data==="F!";break e}}wa(o)}o=!1}o&&(t=a[0])}}return a=ft(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rm,lastRenderedState:t},a.queue=o,a=Dm.bind(null,de,o),o.dispatch=a,o=Ql(!1),u=Zl.bind(null,de,!1,o.queue),o=ft(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,a=Nb.bind(null,de,l,u,a),l.dispatch=a,o.memoizedState=e,[t,a,!1]}function um(e){var t=ke();return cm(t,ze,e)}function cm(e,t,a){if(t=Ul(e,t,rm)[0],e=As(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ti(t)}catch(f){throw f===to?hs:f}else o=t;t=ke();var l=t.queue,u=l.dispatch;return a!==t.memoizedState&&(de.flags|=2048,so(9,{destroy:void 0},qb.bind(null,l,a),null)),[o,u,e]}function qb(e,t){e.action=t}function dm(e){var t=ke(),a=ze;if(a!==null)return cm(t,a,e);ke(),t=t.memoizedState,a=ke();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function so(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=de.updateQueue,t===null&&(t=xs(),de.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function fm(){return ke().memoizedState}function Cs(e,t,a,o){var l=ft();de.flags|=e,l.memoizedState=so(1|t,{destroy:void 0},a,o===void 0?null:o)}function Ms(e,t,a,o){var l=ke();o=o===void 0?null:o;var u=l.memoizedState.inst;ze!==null&&o!==null&&jl(o,ze.memoizedState.deps)?l.memoizedState=so(t,u,a,o):(de.flags|=e,l.memoizedState=so(1|t,u,a,o))}function mm(e,t){Cs(8390656,8,e,t)}function Pl(e,t){Ms(2048,8,e,t)}function Ob(e){de.flags|=4;var t=de.updateQueue;if(t===null)t=xs(),de.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function hm(e){var t=ke().memoizedState;return Ob({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function pm(e,t){return Ms(4,2,e,t)}function gm(e,t){return Ms(4,4,e,t)}function vm(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ym(e,t,a){a=a!=null?a.concat([e]):null,Ms(4,4,vm.bind(null,t,e),a)}function kl(){}function bm(e,t){var a=ke();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&jl(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Sm(e,t){var a=ke();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&jl(t,o[1]))return o[0];if(o=e(),En){Na(!0);try{e()}finally{Na(!1)}}return a.memoizedState=[o,t],o}function Yl(e,t,a){return a===void 0||(ha&1073741824)!==0&&(ye&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Th(),de.lanes|=e,Pa|=e,a)}function Tm(e,t,a,o){return Mt(a,t)?a:no.current!==null?(e=Yl(e,a,o),Mt(e,t)||(Je=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(ye&261930)===0?(Je=!0,e.memoizedState=a):(e=Th(),de.lanes|=e,Pa|=e,t)}function xm(e,t,a,o,l){var u=Q.p;Q.p=u!==0&&8>u?u:8;var f=R.T,v={};R.T=v,Zl(e,!1,t,a);try{var T=l(),D=R.S;if(D!==null&&D(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var j=Mb(T,o);ai(e,t,j,Rt(e))}else ai(e,t,o,Rt(e))}catch(V){ai(e,t,{then:function(){},status:"rejected",reason:V},Rt())}finally{Q.p=u,f!==null&&v.types!==null&&(f.types=v.types),R.T=f}}function Rb(){}function Xl(e,t,a,o){if(e.tag!==5)throw Error(s(476));var l=Em(e).queue;xm(e,l,t,W,a===null?Rb:function(){return Am(e),a(o)})}function Em(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Am(e){var t=Em(e);t.next===null&&(t=e.alternate.memoizedState),ai(e,t.next.queue,{},Rt())}function Jl(){return ot(bi)}function Cm(){return ke().memoizedState}function Mm(){return ke().memoizedState}function jb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Rt();e=Ba(a);var o=La(t,e,a);o!==null&&(xt(o,t,a),Wo(o,t,a)),t={cache:xl()},e.payload=t;return}t=t.return}}function wb(e,t,a){var o=Rt();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ds(e)?zm(t,a):(a=dl(e,t,a,o),a!==null&&(xt(a,e,o),Nm(a,t,o)))}function Dm(e,t,a){var o=Rt();ai(e,t,a,o)}function ai(e,t,a,o){var l={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))zm(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,v=u(f,a);if(l.hasEagerState=!0,l.eagerState=v,Mt(v,f))return rs(e,t,l,0),Oe===null&&ss(),!1}catch{}finally{}if(a=dl(e,t,l,o),a!==null)return xt(a,e,o),Nm(a,t,o),!0}return!1}function Zl(e,t,a,o){if(o={lane:2,revertLane:Mu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(t)throw Error(s(479))}else t=dl(e,a,o,2),t!==null&&xt(t,e,2)}function Ds(e){var t=e.alternate;return e===de||t!==null&&t===de}function zm(e,t){oo=Ss=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Nm(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,jd(e,a)}}var ni={readContext:ot,use:Es,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};ni.useEffectEvent=Ue;var qm={readContext:ot,use:Es,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:mm,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Cs(4194308,4,vm.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Cs(4194308,4,e,t)},useInsertionEffect:function(e,t){Cs(4,2,e,t)},useMemo:function(e,t){var a=ft();t=t===void 0?null:t;var o=e();if(En){Na(!0);try{e()}finally{Na(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=ft();if(a!==void 0){var l=a(t);if(En){Na(!0);try{a(t)}finally{Na(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=wb.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=Ql(e);var t=e.queue,a=Dm.bind(null,de,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:kl,useDeferredValue:function(e,t){var a=ft();return Yl(a,e,t)},useTransition:function(){var e=Ql(!1);return e=xm.bind(null,de,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=de,l=ft();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Oe===null)throw Error(s(349));(ye&127)!==0||Wf(o,t,a)}l.memoizedState=a;var u={value:a,getSnapshot:t};return l.queue=u,mm(If.bind(null,o,u,e),[e]),o.flags|=2048,so(9,{destroy:void 0},$f.bind(null,o,u,a,t),null),a},useId:function(){var e=ft(),t=Oe.identifierPrefix;if(Te){var a=ea,o=It;a=(o&~(1<<32-Ct(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ts++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Db++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Jl,useFormState:lm,useActionState:lm,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Zl.bind(null,de,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ll,useCacheRefresh:function(){return ft().memoizedState=jb.bind(null,de)},useEffectEvent:function(e){var t=ft(),a={impl:e};return t.memoizedState=a,function(){if((Ae&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Kl={readContext:ot,use:Es,useCallback:bm,useContext:ot,useEffect:Pl,useImperativeHandle:ym,useInsertionEffect:pm,useLayoutEffect:gm,useMemo:Sm,useReducer:As,useRef:fm,useState:function(){return As(pa)},useDebugValue:kl,useDeferredValue:function(e,t){var a=ke();return Tm(a,ze.memoizedState,e,t)},useTransition:function(){var e=As(pa)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:Ff,useId:Cm,useHostTransitionStatus:Jl,useFormState:um,useActionState:um,useOptimistic:function(e,t){var a=ke();return am(a,ze,e,t)},useMemoCache:Ll,useCacheRefresh:Mm};Kl.useEffectEvent=hm;var Om={readContext:ot,use:Es,useCallback:bm,useContext:ot,useEffect:Pl,useImperativeHandle:ym,useInsertionEffect:pm,useLayoutEffect:gm,useMemo:Sm,useReducer:Hl,useRef:fm,useState:function(){return Hl(pa)},useDebugValue:kl,useDeferredValue:function(e,t){var a=ke();return ze===null?Yl(a,e,t):Tm(a,ze.memoizedState,e,t)},useTransition:function(){var e=Hl(pa)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:Ff,useId:Cm,useHostTransitionStatus:Jl,useFormState:dm,useActionState:dm,useOptimistic:function(e,t){var a=ke();return ze!==null?am(a,ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ll,useCacheRefresh:Mm};Om.useEffectEvent=hm;function Fl(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wl={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Rt(),l=Ba(o);l.payload=t,a!=null&&(l.callback=a),t=La(e,l,o),t!==null&&(xt(t,e,o),Wo(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Rt(),l=Ba(o);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=La(e,l,o),t!==null&&(xt(t,e,o),Wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Rt(),o=Ba(a);o.tag=2,t!=null&&(o.callback=t),t=La(e,o,a),t!==null&&(xt(t,e,a),Wo(t,e,a))}};function Rm(e,t,a,o,l,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,f):t.prototype&&t.prototype.isPureReactComponent?!Po(a,o)||!Po(l,u):!0}function jm(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Wl.enqueueReplaceState(t,t.state,null)}function An(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function wm(e){is(e)}function Vm(e){console.error(e)}function _m(e){is(e)}function zs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Bm(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function $l(e,t,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){zs(e,t)},a}function Lm(e){return e=Ba(e),e.tag=3,e}function Um(e,t,a,o){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;e.payload=function(){return l(u)},e.callback=function(){Bm(t,a,o)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Bm(t,a,o),typeof l!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var v=o.stack;this.componentDidCatch(o.value,{componentStack:v!==null?v:""})})}function Vb(e,t,a,o,l){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&$n(t,a,l,!0),a=zt.current,a!==null){switch(a.tag){case 31:case 13:return Qt===null?Hs():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=l,o===ps?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Eu(e,o,l)),!1;case 22:return a.flags|=65536,o===ps?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Eu(e,o,l)),!1}throw Error(s(435,a.tag))}return Eu(e,o,l),Hs(),!1}if(Te)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==vl&&(e=Error(s(422),{cause:o}),Xo(Bt(e,a)))):(o!==vl&&(t=Error(s(423),{cause:o}),Xo(Bt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=Bt(o,a),l=$l(e.stateNode,o,l),zl(e,l),He!==4&&(He=2)),!1;var u=Error(s(520),{cause:o});if(u=Bt(u,a),di===null?di=[u]:di.push(u),He!==4&&(He=2),t===null)return!0;o=Bt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=$l(a.stateNode,o,e),zl(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ka===null||!ka.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Lm(l),Um(l,e,a,o),zl(a,l),!1}a=a.return}while(a!==null);return!1}var Il=Error(s(461)),Je=!1;function it(e,t,a,o){t.child=e===null?Pf(t,null,a,o):xn(t,e.child,a,o)}function Hm(e,t,a,o,l){a=a.render;var u=t.ref;if("ref"in o){var f={};for(var v in o)v!=="ref"&&(f[v]=o[v])}else f=o;return yn(t),o=wl(e,t,a,f,u,l),v=Vl(),e!==null&&!Je?(_l(e,t,l),ga(e,t,l)):(Te&&v&&pl(t),t.flags|=1,it(e,t,o,l),t.child)}function Qm(e,t,a,o,l){if(e===null){var u=a.type;return typeof u=="function"&&!fl(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,Gm(e,t,u,o,l)):(e=us(a.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!ru(e,l)){var f=u.memoizedProps;if(a=a.compare,a=a!==null?a:Po,a(f,o)&&e.ref===t.ref)return ga(e,t,l)}return t.flags|=1,e=ca(u,o),e.ref=t.ref,e.return=t,t.child=e}function Gm(e,t,a,o,l){if(e!==null){var u=e.memoizedProps;if(Po(u,o)&&e.ref===t.ref)if(Je=!1,t.pendingProps=o=u,ru(e,l))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,ga(e,t,l)}return eu(e,t,a,o,l)}function Pm(e,t,a,o){var l=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~u}else o=0,t.child=null;return km(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ms(t,u!==null?u.cachePool:null),u!==null?Xf(t,u):ql(),Jf(t);else return o=t.lanes=536870912,km(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(ms(t,u.cachePool),Xf(t,u),Ha(),t.memoizedState=null):(e!==null&&ms(t,null),ql(),Ha());return it(e,t,l,a),t.child}function oi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function km(e,t,a,o,l){var u=Al();return u=u===null?null:{parent:Ye._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&ms(t,null),ql(),Jf(t),e!==null&&$n(e,t,o,!0),t.childLanes=l,null}function Ns(e,t){return t=Os({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ym(e,t,a){return xn(t,e.child,null,a),e=Ns(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function _b(e,t,a){var o=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Ns(t,o),t.lanes=536870912,oi(null,e);if(Rl(t),(e=we)?(e=np(e,Ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:It,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=zf(e),a.return=t,t.child=a,nt=t,we=null)):e=null,e===null)throw wa(t);return t.lanes=536870912,null}return Ns(t,o)}var u=e.memoizedState;if(u!==null){var f=u.dehydrated;if(Rl(t),l)if(t.flags&256)t.flags&=-257,t=Ym(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Je||$n(e,t,a,!1),l=(a&e.childLanes)!==0,Je||l){if(o=Oe,o!==null&&(f=wd(o,a),f!==0&&f!==u.retryLane))throw u.retryLane=f,hn(e,f),xt(o,e,f),Il;Hs(),t=Ym(e,t,a)}else e=u.treeContext,we=Gt(f.nextSibling),nt=t,Te=!0,ja=null,Ht=!1,e!==null&&Of(t,e),t=Ns(t,o),t.flags|=4096;return t}return e=ca(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qs(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function eu(e,t,a,o,l){return yn(t),a=wl(e,t,a,o,void 0,l),o=Vl(),e!==null&&!Je?(_l(e,t,l),ga(e,t,l)):(Te&&o&&pl(t),t.flags|=1,it(e,t,a,l),t.child)}function Xm(e,t,a,o,l,u){return yn(t),t.updateQueue=null,a=Kf(t,o,a,l),Zf(e),o=Vl(),e!==null&&!Je?(_l(e,t,u),ga(e,t,u)):(Te&&o&&pl(t),t.flags|=1,it(e,t,a,u),t.child)}function Jm(e,t,a,o,l){if(yn(t),t.stateNode===null){var u=Zn,f=a.contextType;typeof f=="object"&&f!==null&&(u=ot(f)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Wl,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Ml(t),f=a.contextType,u.context=typeof f=="object"&&f!==null?ot(f):Zn,u.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Fl(t,a,f,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Wl.enqueueReplaceState(u,u.state,null),Io(t,o,u,l),$o(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,T=An(a,v);u.props=T;var D=u.context,j=a.contextType;f=Zn,typeof j=="object"&&j!==null&&(f=ot(j));var V=a.getDerivedStateFromProps;j=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,j||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||D!==f)&&jm(t,u,o,f),_a=!1;var N=t.memoizedState;u.state=N,Io(t,o,u,l),$o(),D=t.memoizedState,v||N!==D||_a?(typeof V=="function"&&(Fl(t,a,V,o),D=t.memoizedState),(T=_a||Rm(t,a,T,o,N,D,f))?(j||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=D),u.props=o,u.state=D,u.context=f,o=T):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Dl(e,t),f=t.memoizedProps,j=An(a,f),u.props=j,V=t.pendingProps,N=u.context,D=a.contextType,T=Zn,typeof D=="object"&&D!==null&&(T=ot(D)),v=a.getDerivedStateFromProps,(D=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==V||N!==T)&&jm(t,u,o,T),_a=!1,N=t.memoizedState,u.state=N,Io(t,o,u,l),$o();var q=t.memoizedState;f!==V||N!==q||_a||e!==null&&e.dependencies!==null&&ds(e.dependencies)?(typeof v=="function"&&(Fl(t,a,v,o),q=t.memoizedState),(j=_a||Rm(t,a,j,o,N,q,T)||e!==null&&e.dependencies!==null&&ds(e.dependencies))?(D||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,q,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,q,T)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=q),u.props=o,u.state=q,u.context=T,o=j):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,qs(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=xn(t,e.child,null,l),t.child=xn(t,null,a,l)):it(e,t,a,l),t.memoizedState=u.state,e=t.child):e=ga(e,t,l),e}function Zm(e,t,a,o){return gn(),t.flags|=256,it(e,t,a,o),t.child}var tu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function au(e){return{baseLanes:e,cachePool:Bf()}}function nu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ot),e}function Km(e,t,a){var o=t.pendingProps,l=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(l?Ua(t):Ha(),(e=we)?(e=np(e,Ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:It,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=zf(e),a.return=t,t.child=a,nt=t,we=null)):e=null,e===null)throw wa(t);return Uu(e)?t.lanes=32:t.lanes=536870912,null}var v=o.children;return o=o.fallback,l?(Ha(),l=t.mode,v=Os({mode:"hidden",children:v},l),o=pn(o,l,a,null),v.return=t,o.return=t,v.sibling=o,t.child=v,o=t.child,o.memoizedState=au(a),o.childLanes=nu(e,f,a),t.memoizedState=tu,oi(null,o)):(Ua(t),ou(t,v))}var T=e.memoizedState;if(T!==null&&(v=T.dehydrated,v!==null)){if(u)t.flags&256?(Ua(t),t.flags&=-257,t=iu(e,t,a)):t.memoizedState!==null?(Ha(),t.child=e.child,t.flags|=128,t=null):(Ha(),v=o.fallback,l=t.mode,o=Os({mode:"visible",children:o.children},l),v=pn(v,l,a,null),v.flags|=2,o.return=t,v.return=t,o.sibling=v,t.child=o,xn(t,e.child,null,a),o=t.child,o.memoizedState=au(a),o.childLanes=nu(e,f,a),t.memoizedState=tu,t=oi(null,o));else if(Ua(t),Uu(v)){if(f=v.nextSibling&&v.nextSibling.dataset,f)var D=f.dgst;f=D,o=Error(s(419)),o.stack="",o.digest=f,Xo({value:o,source:null,stack:null}),t=iu(e,t,a)}else if(Je||$n(e,t,a,!1),f=(a&e.childLanes)!==0,Je||f){if(f=Oe,f!==null&&(o=wd(f,a),o!==0&&o!==T.retryLane))throw T.retryLane=o,hn(e,o),xt(f,e,o),Il;Lu(v)||Hs(),t=iu(e,t,a)}else Lu(v)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,we=Gt(v.nextSibling),nt=t,Te=!0,ja=null,Ht=!1,e!==null&&Of(t,e),t=ou(t,o.children),t.flags|=4096);return t}return l?(Ha(),v=o.fallback,l=t.mode,T=e.child,D=T.sibling,o=ca(T,{mode:"hidden",children:o.children}),o.subtreeFlags=T.subtreeFlags&65011712,D!==null?v=ca(D,v):(v=pn(v,l,a,null),v.flags|=2),v.return=t,o.return=t,o.sibling=v,t.child=o,oi(null,o),o=t.child,v=e.child.memoizedState,v===null?v=au(a):(l=v.cachePool,l!==null?(T=Ye._currentValue,l=l.parent!==T?{parent:T,pool:T}:l):l=Bf(),v={baseLanes:v.baseLanes|a,cachePool:l}),o.memoizedState=v,o.childLanes=nu(e,f,a),t.memoizedState=tu,oi(e.child,o)):(Ua(t),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function ou(e,t){return t=Os({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Os(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function iu(e,t,a){return xn(t,e.child,null,a),e=ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fm(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Sl(e.return,t,a)}function su(e,t,a,o,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:l,treeForkCount:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=l,f.treeForkCount=u)}function Wm(e,t,a){var o=t.pendingProps,l=o.revealOrder,u=o.tail;o=o.children;var f=Pe.current,v=(f&2)!==0;if(v?(f=f&1|2,t.flags|=128):f&=1,J(Pe,f),it(e,t,o,a),o=Te?Yo:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fm(e,a,t);else if(e.tag===19)Fm(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&bs(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),su(t,!1,l,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&bs(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}su(t,!0,a,null,u,o);break;case"together":su(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function ga(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Pa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($n(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=ca(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ru(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ds(e)))}function Bb(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),Va(t,Ye,e.memoizedState.cache),gn();break;case 27:case 5:Da(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:Va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Rl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Km(e,t,a):(Ua(t),e=ga(e,t,a),e!==null?e.sibling:null);Ua(t);break;case 19:var l=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||($n(e,t,a,!1),o=(a&t.childLanes)!==0),l){if(o)return Wm(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(Pe,Pe.current),o)break;return null;case 22:return t.lanes=0,Pm(e,t,a,t.pendingProps);case 24:Va(t,Ye,e.memoizedState.cache)}return ga(e,t,a)}function $m(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!ru(e,a)&&(t.flags&128)===0)return Je=!1,Bb(e,t,a);Je=(e.flags&131072)!==0}else Je=!1,Te&&(t.flags&1048576)!==0&&qf(t,Yo,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Sn(t.elementType),t.type=e,typeof e=="function")fl(e)?(o=An(e,o),t.tag=1,t=Jm(null,t,e,o,a)):(t.tag=0,t=eu(null,t,e,o,a));else{if(e!=null){var l=e.$$typeof;if(l===Z){t.tag=11,t=Hm(null,t,e,o,a);break e}else if(l===F){t.tag=14,t=Qm(null,t,e,o,a);break e}}throw t=ut(e)||e,Error(s(306,t,""))}}return t;case 0:return eu(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,l=An(o,t.pendingProps),Jm(e,t,o,l,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(s(387));o=t.pendingProps;var u=t.memoizedState;l=u.element,Dl(e,t),Io(t,o,null,a);var f=t.memoizedState;if(o=f.cache,Va(t,Ye,o),o!==u.cache&&Tl(t,[Ye],a,!0),$o(),o=f.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Zm(e,t,o,a);break e}else if(o!==l){l=Bt(Error(s(424)),t),Xo(l),t=Zm(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=Gt(e.firstChild),nt=t,Te=!0,ja=null,Ht=!0,a=Pf(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gn(),o===l){t=ga(e,t,a);break e}it(e,t,o,a)}t=t.child}return t;case 26:return qs(e,t),e===null?(a=up(t.type,null,t.pendingProps,null))?t.memoizedState=a:Te||(a=t.type,e=t.pendingProps,o=Js(le.current).createElement(a),o[at]=t,o[gt]=e,st(o,a,e),et(o),t.stateNode=o):t.memoizedState=up(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Da(t),e===null&&Te&&(o=t.stateNode=sp(t.type,t.pendingProps,le.current),nt=t,Ht=!0,l=we,Za(t.type)?(Hu=l,we=Gt(o.firstChild)):we=l),it(e,t,t.pendingProps.children,a),qs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Te&&((l=o=we)&&(o=mS(o,t.type,t.pendingProps,Ht),o!==null?(t.stateNode=o,nt=t,we=Gt(o.firstChild),Ht=!1,l=!0):l=!1),l||wa(t)),Da(t),l=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,o=u.children,Vu(l,u)?o=null:f!==null&&Vu(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=wl(e,t,zb,null,null,a),bi._currentValue=l),qs(e,t),it(e,t,o,a),t.child;case 6:return e===null&&Te&&((e=a=we)&&(a=hS(a,t.pendingProps,Ht),a!==null?(t.stateNode=a,nt=t,we=null,e=!0):e=!1),e||wa(t)),null;case 13:return Km(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=xn(t,null,o,a):it(e,t,o,a),t.child;case 11:return Hm(e,t,t.type,t.pendingProps,a);case 7:return it(e,t,t.pendingProps,a),t.child;case 8:return it(e,t,t.pendingProps.children,a),t.child;case 12:return it(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Va(t,t.type,o.value),it(e,t,o.children,a),t.child;case 9:return l=t.type._context,o=t.pendingProps.children,yn(t),l=ot(l),o=o(l),t.flags|=1,it(e,t,o,a),t.child;case 14:return Qm(e,t,t.type,t.pendingProps,a);case 15:return Gm(e,t,t.type,t.pendingProps,a);case 19:return Wm(e,t,a);case 31:return _b(e,t,a);case 22:return Pm(e,t,a,t.pendingProps);case 24:return yn(t),o=ot(Ye),e===null?(l=Al(),l===null&&(l=Oe,u=xl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),t.memoizedState={parent:o,cache:l},Ml(t),Va(t,Ye,l)):((e.lanes&a)!==0&&(Dl(e,t),Io(t,null,null,a),$o()),l=e.memoizedState,u=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Va(t,Ye,o)):(o=u.cache,Va(t,Ye,o),o!==l.cache&&Tl(t,[Ye],a,!0))),it(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function va(e){e.flags|=4}function lu(e,t,a,o,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Ch())e.flags|=8192;else throw Tn=ps,Cl}else e.flags&=-16777217}function Im(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hp(t))if(Ch())e.flags|=8192;else throw Tn=ps,Cl}function Rs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Od():536870912,e.lanes|=t,co|=t)}function ii(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function Lb(e,t,a){var o=t.pendingProps;switch(gl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),ma(Ye),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wn(t)?va(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yl())),Ve(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(va(t),u!==null?(Ve(t),Im(t,u)):(Ve(t),lu(t,l,null,o,a))):u?u!==e.memoizedState?(va(t),Ve(t),Im(t,u)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&va(t),Ve(t),lu(t,l,e,o,a)),null;case 27:if(sa(t),a=le.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&va(t);else{if(!o){if(t.stateNode===null)throw Error(s(166));return Ve(t),null}e=K.current,Wn(t)?Rf(t):(e=sp(l,o,a),t.stateNode=e,va(t))}return Ve(t),null;case 5:if(sa(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&va(t);else{if(!o){if(t.stateNode===null)throw Error(s(166));return Ve(t),null}if(u=K.current,Wn(t))Rf(t);else{var f=Js(le.current);switch(u){case 1:u=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=f.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?f.createElement("select",{is:o.is}):f.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?f.createElement(l,{is:o.is}):f.createElement(l)}}u[at]=t,u[gt]=o;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)u.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=u;e:switch(st(u,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&va(t)}}return Ve(t),lu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&va(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(s(166));if(e=le.current,Wn(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,l=nt,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Kh(e.nodeValue,a)),e||wa(t,!0)}else e=Js(e).createTextNode(o),e[at]=t,t.stateNode=e}return Ve(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Wn(t),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[at]=t}else gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else a=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ve(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Wn(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[at]=t}else gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),l=!1}else l=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Rs(t,t.updateQueue),Ve(t),null);case 4:return he(),e===null&&qu(t.stateNode.containerInfo),Ve(t),null;case 10:return ma(t.type),Ve(t),null;case 19:if(_(Pe),o=t.memoizedState,o===null)return Ve(t),null;if(l=(t.flags&128)!==0,u=o.rendering,u===null)if(l)ii(o,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=bs(e),u!==null){for(t.flags|=128,ii(o,!1),e=u.updateQueue,t.updateQueue=e,Rs(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Df(a,e),a=a.sibling;return J(Pe,Pe.current&1|2),Te&&da(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Et()>Bs&&(t.flags|=128,l=!0,ii(o,!1),t.lanes=4194304)}else{if(!l)if(e=bs(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Rs(t,e),ii(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Te)return Ve(t),null}else 2*Et()-o.renderingStartTime>Bs&&a!==536870912&&(t.flags|=128,l=!0,ii(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,a=Pe.current,J(Pe,l?a&1|2:a&1),Te&&da(t,o.treeForkCount),e):(Ve(t),null);case 22:case 23:return Nt(t),Ol(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),a=t.updateQueue,a!==null&&Rs(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&_(bn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ma(Ye),Ve(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Ub(e,t){switch(gl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ma(Ye),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return sa(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(s(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Pe),null;case 4:return he(),null;case 10:return ma(t.type),null;case 22:case 23:return Nt(t),Ol(),e!==null&&_(bn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ma(Ye),null;case 25:return null;default:return null}}function eh(e,t){switch(gl(t),t.tag){case 3:ma(Ye),he();break;case 26:case 27:case 5:sa(t);break;case 4:he();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:_(Pe);break;case 10:ma(t.type);break;case 22:case 23:Nt(t),Ol(),e!==null&&_(bn);break;case 24:ma(Ye)}}function si(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var l=o.next;a=l;do{if((a.tag&e)===e){o=void 0;var u=a.create,f=a.inst;o=u(),f.destroy=o}a=a.next}while(a!==l)}}catch(v){De(t,t.return,v)}}function Qa(e,t,a){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&e)===e){var f=o.inst,v=f.destroy;if(v!==void 0){f.destroy=void 0,l=t;var T=a,D=v;try{D()}catch(j){De(l,T,j)}}}o=o.next}while(o!==u)}}catch(j){De(t,t.return,j)}}function th(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Yf(t,a)}catch(o){De(e,e.return,o)}}}function ah(e,t,a){a.props=An(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){De(e,t,o)}}function ri(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(l){De(e,t,l)}}function ta(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(l){De(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){De(e,t,l)}else a.current=null}function nh(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(l){De(e,e.return,l)}}function uu(e,t,a){try{var o=e.stateNode;rS(o,e.type,a,t),o[gt]=t}catch(l){De(e,e.return,l)}}function oh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function du(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=la));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(du(e,t,a),e=e.sibling;e!==null;)du(e,t,a),e=e.sibling}function js(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(js(e,t,a),e=e.sibling;e!==null;)js(e,t,a),e=e.sibling}function ih(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);st(t,o,a),t[at]=e,t[gt]=a}catch(u){De(e,e.return,u)}}var ya=!1,Ze=!1,fu=!1,sh=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Hb(e,t){if(e=e.containerInfo,ju=er,e=yf(e),il(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var f=0,v=-1,T=-1,D=0,j=0,V=e,N=null;t:for(;;){for(var q;V!==a||l!==0&&V.nodeType!==3||(v=f+l),V!==u||o!==0&&V.nodeType!==3||(T=f+o),V.nodeType===3&&(f+=V.nodeValue.length),(q=V.firstChild)!==null;)N=V,V=q;for(;;){if(V===e)break t;if(N===a&&++D===l&&(v=f),N===u&&++j===o&&(T=f),(q=V.nextSibling)!==null)break;V=N,N=V.parentNode}V=q}a=v===-1||T===-1?null:{start:v,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(wu={focusedElem:e,selectionRange:a},er=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,l=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var $=An(a.type,l);e=o.getSnapshotBeforeUpdate($,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(ue){De(a,a.return,ue)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Bu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function rh(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),o&4&&si(5,a);break;case 1:if(Sa(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){De(a,a.return,f)}else{var l=An(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){De(a,a.return,f)}}o&64&&th(a),o&512&&ri(a,a.return);break;case 3:if(Sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Yf(e,t)}catch(f){De(a,a.return,f)}}break;case 27:t===null&&o&4&&ih(a);case 26:case 5:Sa(e,a),t===null&&o&4&&nh(a),o&512&&ri(a,a.return);break;case 12:Sa(e,a);break;case 31:Sa(e,a),o&4&&ch(e,a);break;case 13:Sa(e,a),o&4&&dh(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Kb.bind(null,a),pS(e,a))));break;case 22:if(o=a.memoizedState!==null||ya,!o){t=t!==null&&t.memoizedState!==null||Ze,l=ya;var u=Ze;ya=o,(Ze=t)&&!u?Ta(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),ya=l,Ze=u}break;case 30:break;default:Sa(e,a)}}function lh(e){var t=e.alternate;t!==null&&(e.alternate=null,lh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,yt=!1;function ba(e,t,a){for(a=a.child;a!==null;)uh(e,t,a),a=a.sibling}function uh(e,t,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Oo,a)}catch{}switch(a.tag){case 26:Ze||ta(a,t),ba(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||ta(a,t);var o=Be,l=yt;Za(a.type)&&(Be=a.stateNode,yt=!1),ba(e,t,a),gi(a.stateNode),Be=o,yt=l;break;case 5:Ze||ta(a,t);case 6:if(o=Be,l=yt,Be=null,ba(e,t,a),Be=o,yt=l,Be!==null)if(yt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(u){De(a,t,u)}else try{Be.removeChild(a.stateNode)}catch(u){De(a,t,u)}break;case 18:Be!==null&&(yt?(e=Be,tp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bo(e)):tp(Be,a.stateNode));break;case 4:o=Be,l=yt,Be=a.stateNode.containerInfo,yt=!0,ba(e,t,a),Be=o,yt=l;break;case 0:case 11:case 14:case 15:Qa(2,a,t),Ze||Qa(4,a,t),ba(e,t,a);break;case 1:Ze||(ta(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ah(a,t,o)),ba(e,t,a);break;case 21:ba(e,t,a);break;case 22:Ze=(o=Ze)||a.memoizedState!==null,ba(e,t,a),Ze=o;break;default:ba(e,t,a)}}function ch(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bo(e)}catch(a){De(t,t.return,a)}}}function dh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bo(e)}catch(a){De(t,t.return,a)}}function Qb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sh),t;default:throw Error(s(435,e.tag))}}function ws(e,t){var a=Qb(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var l=Fb.bind(null,e,o);o.then(l,l)}})}function bt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var l=a[o],u=e,f=t,v=f;e:for(;v!==null;){switch(v.tag){case 27:if(Za(v.type)){Be=v.stateNode,yt=!1;break e}break;case 5:Be=v.stateNode,yt=!1;break e;case 3:case 4:Be=v.stateNode.containerInfo,yt=!0;break e}v=v.return}if(Be===null)throw Error(s(160));uh(u,f,l),Be=null,yt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)fh(t,e),t=t.sibling}var Jt=null;function fh(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),St(e),o&4&&(Qa(3,e,e.return),si(3,e),Qa(5,e,e.return));break;case 1:bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),o&64&&ya&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var l=Jt;if(bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[wo]||u[at]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),st(u,o,a),u[at]=e,et(u),o=u;break e;case"link":var f=fp("link","href",l).get(o+(a.href||""));if(f){for(var v=0;v<f.length;v++)if(u=f[v],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(v,1);break t}}u=l.createElement(o),st(u,o,a),l.head.appendChild(u);break;case"meta":if(f=fp("meta","content",l).get(o+(a.content||""))){for(v=0;v<f.length;v++)if(u=f[v],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(v,1);break t}}u=l.createElement(o),st(u,o,a),l.head.appendChild(u);break;default:throw Error(s(468,o))}u[at]=e,et(u),o=u}e.stateNode=o}else mp(l,e.type,e.stateNode);else e.stateNode=dp(l,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?mp(l,e.type,e.stateNode):dp(l,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uu(e,e.memoizedProps,a.memoizedProps)}break;case 27:bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),a!==null&&o&4&&uu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),e.flags&32){l=e.stateNode;try{Qn(l,"")}catch($){De(e,e.return,$)}}o&4&&e.stateNode!=null&&(l=e.memoizedProps,uu(e,l,a!==null?a.memoizedProps:l)),o&1024&&(fu=!0);break;case 6:if(bt(t,e),St(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch($){De(e,e.return,$)}}break;case 3:if(Fs=null,l=Jt,Jt=Zs(t.containerInfo),bt(t,e),Jt=l,St(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(t.containerInfo)}catch($){De(e,e.return,$)}fu&&(fu=!1,mh(e));break;case 4:o=Jt,Jt=Zs(e.stateNode.containerInfo),bt(t,e),St(e),Jt=o;break;case 12:bt(t,e),St(e);break;case 31:bt(t,e),St(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ws(e,o)));break;case 13:bt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_s=Et()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ws(e,o)));break;case 22:l=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,D=ya,j=Ze;if(ya=D||l,Ze=j||T,bt(t,e),Ze=j,ya=D,St(e),o&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||T||ya||Ze||Cn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){T=a=t;try{if(u=T.stateNode,l)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{v=T.stateNode;var V=T.memoizedProps.style,N=V!=null&&V.hasOwnProperty("display")?V.display:null;v.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch($){De(T,T.return,$)}}}else if(t.tag===6){if(a===null){T=t;try{T.stateNode.nodeValue=l?"":T.memoizedProps}catch($){De(T,T.return,$)}}}else if(t.tag===18){if(a===null){T=t;try{var q=T.stateNode;l?ap(q,!0):ap(T.stateNode,!1)}catch($){De(T,T.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ws(e,a))));break;case 19:bt(t,e),St(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ws(e,o)));break;case 30:break;case 21:break;default:bt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(oh(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,u=cu(e);js(e,u,l);break;case 5:var f=a.stateNode;a.flags&32&&(Qn(f,""),a.flags&=-33);var v=cu(e);js(e,v,f);break;case 3:case 4:var T=a.stateNode.containerInfo,D=cu(e);du(e,D,T);break;default:throw Error(s(161))}}catch(j){De(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;mh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)rh(e,t.alternate,t),t=t.sibling}function Cn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qa(4,t,t.return),Cn(t);break;case 1:ta(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ah(t,t.return,a),Cn(t);break;case 27:gi(t.stateNode);case 26:case 5:ta(t,t.return),Cn(t);break;case 22:t.memoizedState===null&&Cn(t);break;case 30:Cn(t);break;default:Cn(t)}e=e.sibling}}function Ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,l=e,u=t,f=u.flags;switch(u.tag){case 0:case 11:case 15:Ta(l,u,a),si(4,u);break;case 1:if(Ta(l,u,a),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){De(o,o.return,D)}if(o=u,l=o.updateQueue,l!==null){var v=o.stateNode;try{var T=l.shared.hiddenCallbacks;if(T!==null)for(l.shared.hiddenCallbacks=null,l=0;l<T.length;l++)kf(T[l],v)}catch(D){De(o,o.return,D)}}a&&f&64&&th(u),ri(u,u.return);break;case 27:ih(u);case 26:case 5:Ta(l,u,a),a&&o===null&&f&4&&nh(u),ri(u,u.return);break;case 12:Ta(l,u,a);break;case 31:Ta(l,u,a),a&&f&4&&ch(l,u);break;case 13:Ta(l,u,a),a&&f&4&&dh(l,u);break;case 22:u.memoizedState===null&&Ta(l,u,a),ri(u,u.return);break;case 30:break;default:Ta(l,u,a)}t=t.sibling}}function mu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jo(a))}function hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e))}function Zt(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hh(e,t,a,o),t=t.sibling}function hh(e,t,a,o){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Zt(e,t,a,o),l&2048&&si(9,t);break;case 1:Zt(e,t,a,o);break;case 3:Zt(e,t,a,o),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e)));break;case 12:if(l&2048){Zt(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,f=u.id,v=u.onPostCommit;typeof v=="function"&&v(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){De(t,t.return,T)}}else Zt(e,t,a,o);break;case 31:Zt(e,t,a,o);break;case 13:Zt(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,f=t.alternate,t.memoizedState!==null?u._visibility&2?Zt(e,t,a,o):li(e,t):u._visibility&2?Zt(e,t,a,o):(u._visibility|=2,ro(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),l&2048&&mu(f,t);break;case 24:Zt(e,t,a,o),l&2048&&hu(t.alternate,t);break;default:Zt(e,t,a,o)}}function ro(e,t,a,o,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,f=t,v=a,T=o,D=f.flags;switch(f.tag){case 0:case 11:case 15:ro(u,f,v,T,l),si(8,f);break;case 23:break;case 22:var j=f.stateNode;f.memoizedState!==null?j._visibility&2?ro(u,f,v,T,l):li(u,f):(j._visibility|=2,ro(u,f,v,T,l)),l&&D&2048&&mu(f.alternate,f);break;case 24:ro(u,f,v,T,l),l&&D&2048&&hu(f.alternate,f);break;default:ro(u,f,v,T,l)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,l=o.flags;switch(o.tag){case 22:li(a,o),l&2048&&mu(o.alternate,o);break;case 24:li(a,o),l&2048&&hu(o.alternate,o);break;default:li(a,o)}t=t.sibling}}var ui=8192;function lo(e,t,a){if(e.subtreeFlags&ui)for(e=e.child;e!==null;)ph(e,t,a),e=e.sibling}function ph(e,t,a){switch(e.tag){case 26:lo(e,t,a),e.flags&ui&&e.memoizedState!==null&&DS(a,Jt,e.memoizedState,e.memoizedProps);break;case 5:lo(e,t,a);break;case 3:case 4:var o=Jt;Jt=Zs(e.stateNode.containerInfo),lo(e,t,a),Jt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ui,ui=16777216,lo(e,t,a),ui=o):lo(e,t,a));break;default:lo(e,t,a)}}function gh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];tt=o,yh(o,e)}gh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vh(e),e=e.sibling}function vh(e){switch(e.tag){case 0:case 11:case 15:ci(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:ci(e);break;case 12:ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vs(e)):ci(e);break;default:ci(e)}}function Vs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];tt=o,yh(o,e)}gh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qa(8,t,t.return),Vs(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Vs(t));break;default:Vs(t)}e=e.sibling}}function yh(e,t){for(;tt!==null;){var a=tt;switch(a.tag){case 0:case 11:case 15:Qa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Jo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,tt=o;else e:for(a=e;tt!==null;){o=tt;var l=o.sibling,u=o.return;if(lh(o),o===a){tt=null;break e}if(l!==null){l.return=u,tt=l;break e}tt=u}}}var Gb={getCacheForType:function(e){var t=ot(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ot(Ye).controller.signal}},Pb=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Oe=null,ge=null,ye=0,Me=0,qt=null,Ga=!1,uo=!1,pu=!1,xa=0,He=0,Pa=0,Mn=0,gu=0,Ot=0,co=0,di=null,Tt=null,vu=!1,_s=0,bh=0,Bs=1/0,Ls=null,ka=null,Fe=0,Ya=null,fo=null,Ea=0,yu=0,bu=null,Sh=null,fi=0,Su=null;function Rt(){return(Ae&2)!==0&&ye!==0?ye&-ye:R.T!==null?Mu():Vd()}function Th(){if(Ot===0)if((ye&536870912)===0||Te){var e=Xi;Xi<<=1,(Xi&3932160)===0&&(Xi=262144),Ot=e}else Ot=536870912;return e=zt.current,e!==null&&(e.flags|=32),Ot}function xt(e,t,a){(e===Oe&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(mo(e,0),Xa(e,ye,Ot,!1)),jo(e,a),((Ae&2)===0||e!==Oe)&&(e===Oe&&((Ae&2)===0&&(Mn|=a),He===4&&Xa(e,ye,Ot,!1)),aa(e))}function xh(e,t,a){if((Ae&6)!==0)throw Error(s(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ro(e,t),l=o?Xb(e,t):xu(e,t,!0),u=o;do{if(l===0){uo&&!o&&Xa(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!kb(a)){l=xu(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var v=e;l=di;var T=v.current.memoizedState.isDehydrated;if(T&&(mo(v,f).flags|=256),f=xu(v,f,!1),f!==2){if(pu&&!T){v.errorRecoveryDisabledLanes|=u,Mn|=u,l=4;break e}u=Tt,Tt=l,u!==null&&(Tt===null?Tt=u:Tt.push.apply(Tt,u))}l=f}if(u=!1,l!==2)continue}}if(l===1){mo(e,0),Xa(e,t,0,!0);break}e:{switch(o=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Xa(o,t,Ot,!Ga);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=_s+300-Et(),10<l)){if(Xa(o,t,Ot,!Ga),Zi(o,0,!0)!==0)break e;Ea=t,o.timeoutHandle=Ih(Eh.bind(null,o,a,Tt,Ls,vu,t,Ot,Mn,co,Ga,u,"Throttled",-0,0),l);break e}Eh(o,a,Tt,Ls,vu,t,Ot,Mn,co,Ga,u,null,-0,0)}}break}while(!0);aa(e)}function Eh(e,t,a,o,l,u,f,v,T,D,j,V,N,q){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},ph(t,u,V);var $=(u&62914560)===u?_s-Et():(u&4194048)===u?bh-Et():0;if($=zS(V,$),$!==null){Ea=u,e.cancelPendingCommit=$(Oh.bind(null,e,t,u,a,o,l,f,v,T,j,V,null,N,q)),Xa(e,u,f,!D);return}}Oh(e,t,u,a,o,l,f,v,T)}function kb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var l=a[o],u=l.getSnapshot;l=l.value;try{if(!Mt(u(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xa(e,t,a,o){t&=~gu,t&=~Mn,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var u=31-Ct(l),f=1<<u;o[u]=-1,l&=~f}a!==0&&Rd(e,a,t)}function Us(){return(Ae&6)===0?(mi(0),!1):!0}function Tu(){if(ge!==null){if(Me===0)var e=ge.return;else e=ge,fa=vn=null,Bl(e),ao=null,Ko=0,e=ge;for(;e!==null;)eh(e.alternate,e),e=e.return;ge=null}}function mo(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,Tu(),Oe=e,ge=a=ca(e.current,null),ye=t,Me=0,qt=null,Ga=!1,uo=Ro(e,t),pu=!1,co=Ot=gu=Mn=Pa=He=0,Tt=di=null,vu=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var l=31-Ct(o),u=1<<l;t|=e[l],o&=~u}return xa=t,ss(),a}function Ah(e,t){de=null,R.H=ni,t===to||t===hs?(t=Hf(),Me=3):t===Cl?(t=Hf(),Me=4):Me=t===Il?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qt=t,ge===null&&(He=1,zs(e,Bt(t,e.current)))}function Ch(){var e=zt.current;return e===null?!0:(ye&4194048)===ye?Qt===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Qt:!1}function Mh(){var e=R.H;return R.H=ni,e===null?ni:e}function Dh(){var e=R.A;return R.A=Gb,e}function Hs(){He=4,Ga||(ye&4194048)!==ye&&zt.current!==null||(uo=!0),(Pa&134217727)===0&&(Mn&134217727)===0||Oe===null||Xa(Oe,ye,Ot,!1)}function xu(e,t,a){var o=Ae;Ae|=2;var l=Mh(),u=Dh();(Oe!==e||ye!==t)&&(Ls=null,mo(e,t)),t=!1;var f=He;e:do try{if(Me!==0&&ge!==null){var v=ge,T=qt;switch(Me){case 8:Tu(),f=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var D=Me;if(Me=0,qt=null,ho(e,v,T,D),a&&uo){f=0;break e}break;default:D=Me,Me=0,qt=null,ho(e,v,T,D)}}Yb(),f=He;break}catch(j){Ah(e,j)}while(!0);return t&&e.shellSuspendCounter++,fa=vn=null,Ae=o,R.H=l,R.A=u,ge===null&&(Oe=null,ye=0,ss()),f}function Yb(){for(;ge!==null;)zh(ge)}function Xb(e,t){var a=Ae;Ae|=2;var o=Mh(),l=Dh();Oe!==e||ye!==t?(Ls=null,Bs=Et()+500,mo(e,t)):uo=Ro(e,t);e:do try{if(Me!==0&&ge!==null){t=ge;var u=qt;t:switch(Me){case 1:Me=0,qt=null,ho(e,t,u,1);break;case 2:case 9:if(Lf(u)){Me=0,qt=null,Nh(t);break}t=function(){Me!==2&&Me!==9||Oe!==e||(Me=7),aa(e)},u.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:Lf(u)?(Me=0,qt=null,Nh(t)):(Me=0,qt=null,ho(e,t,u,7));break;case 5:var f=null;switch(ge.tag){case 26:f=ge.memoizedState;case 5:case 27:var v=ge;if(f?hp(f):v.stateNode.complete){Me=0,qt=null;var T=v.sibling;if(T!==null)ge=T;else{var D=v.return;D!==null?(ge=D,Qs(D)):ge=null}break t}}Me=0,qt=null,ho(e,t,u,5);break;case 6:Me=0,qt=null,ho(e,t,u,6);break;case 8:Tu(),He=6;break e;default:throw Error(s(462))}}Jb();break}catch(j){Ah(e,j)}while(!0);return fa=vn=null,R.H=o,R.A=l,Ae=a,ge!==null?0:(Oe=null,ye=0,ss(),He)}function Jb(){for(;ge!==null&&!g0();)zh(ge)}function zh(e){var t=$m(e.alternate,e,xa);e.memoizedProps=e.pendingProps,t===null?Qs(e):ge=t}function Nh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Xm(a,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=Xm(a,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Bl(t);default:eh(a,t),t=ge=Df(t,xa),t=$m(a,t,xa)}e.memoizedProps=e.pendingProps,t===null?Qs(e):ge=t}function ho(e,t,a,o){fa=vn=null,Bl(t),ao=null,Ko=0;var l=t.return;try{if(Vb(e,l,t,a,ye)){He=1,zs(e,Bt(a,e.current)),ge=null;return}}catch(u){if(l!==null)throw ge=l,u;He=1,zs(e,Bt(a,e.current)),ge=null;return}t.flags&32768?(Te||o===1?e=!0:uo||(ye&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=zt.current,o!==null&&o.tag===13&&(o.flags|=16384))),qh(t,e)):Qs(t)}function Qs(e){var t=e;do{if((t.flags&32768)!==0){qh(t,Ga);return}e=t.return;var a=Lb(t.alternate,t,xa);if(a!==null){ge=a;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);He===0&&(He=5)}function qh(e,t){do{var a=Ub(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);He=6,ge=null}function Oh(e,t,a,o,l,u,f,v,T){e.cancelPendingCommit=null;do Gs();while(Fe!==0);if((Ae&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=cl,M0(e,a,u,f,v,T),e===Oe&&(ge=Oe=null,ye=0),fo=t,Ya=e,Ea=a,yu=u,bu=l,Sh=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wb(ki,function(){return _h(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=R.T,R.T=null,l=Q.p,Q.p=2,f=Ae,Ae|=4;try{Hb(e,t,a)}finally{Ae=f,Q.p=l,R.T=o}}Fe=1,Rh(),jh(),wh()}}function Rh(){if(Fe===1){Fe=0;var e=Ya,t=fo,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var o=Q.p;Q.p=2;var l=Ae;Ae|=4;try{fh(t,e);var u=wu,f=yf(e.containerInfo),v=u.focusedElem,T=u.selectionRange;if(f!==v&&v&&v.ownerDocument&&vf(v.ownerDocument.documentElement,v)){if(T!==null&&il(v)){var D=T.start,j=T.end;if(j===void 0&&(j=D),"selectionStart"in v)v.selectionStart=D,v.selectionEnd=Math.min(j,v.value.length);else{var V=v.ownerDocument||document,N=V&&V.defaultView||window;if(N.getSelection){var q=N.getSelection(),$=v.textContent.length,ue=Math.min(T.start,$),qe=T.end===void 0?ue:Math.min(T.end,$);!q.extend&&ue>qe&&(f=qe,qe=ue,ue=f);var C=gf(v,ue),E=gf(v,qe);if(C&&E&&(q.rangeCount!==1||q.anchorNode!==C.node||q.anchorOffset!==C.offset||q.focusNode!==E.node||q.focusOffset!==E.offset)){var M=V.createRange();M.setStart(C.node,C.offset),q.removeAllRanges(),ue>qe?(q.addRange(M),q.extend(E.node,E.offset)):(M.setEnd(E.node,E.offset),q.addRange(M))}}}}for(V=[],q=v;q=q.parentNode;)q.nodeType===1&&V.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<V.length;v++){var w=V[v];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}er=!!ju,wu=ju=null}finally{Ae=l,Q.p=o,R.T=a}}e.current=t,Fe=2}}function jh(){if(Fe===2){Fe=0;var e=Ya,t=fo,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var o=Q.p;Q.p=2;var l=Ae;Ae|=4;try{rh(e,t.alternate,t)}finally{Ae=l,Q.p=o,R.T=a}}Fe=3}}function wh(){if(Fe===4||Fe===3){Fe=0,v0();var e=Ya,t=fo,a=Ea,o=Sh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,fo=Ya=null,Vh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ka=null),Hr(a),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Oo,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=R.T,l=Q.p,Q.p=2,R.T=null;try{for(var u=e.onRecoverableError,f=0;f<o.length;f++){var v=o[f];u(v.value,{componentStack:v.stack})}}finally{R.T=t,Q.p=l}}(Ea&3)!==0&&Gs(),aa(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Su?fi++:(fi=0,Su=e):fi=0,mi(0)}}function Vh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jo(t)))}function Gs(){return Rh(),jh(),wh(),_h()}function _h(){if(Fe!==5)return!1;var e=Ya,t=yu;yu=0;var a=Hr(Ea),o=R.T,l=Q.p;try{Q.p=32>a?32:a,R.T=null,a=bu,bu=null;var u=Ya,f=Ea;if(Fe=0,fo=Ya=null,Ea=0,(Ae&6)!==0)throw Error(s(331));var v=Ae;if(Ae|=4,vh(u.current),hh(u,u.current,f,a),Ae=v,mi(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Oo,u)}catch{}return!0}finally{Q.p=l,R.T=o,Vh(e,t)}}function Bh(e,t,a){t=Bt(a,t),t=$l(e.stateNode,t,2),e=La(e,t,2),e!==null&&(jo(e,2),aa(e))}function De(e,t,a){if(e.tag===3)Bh(e,e,a);else for(;t!==null;){if(t.tag===3){Bh(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=Bt(a,e),a=Lm(2),o=La(t,a,2),o!==null&&(Um(a,o,t,e),jo(o,2),aa(o));break}}t=t.return}}function Eu(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Pb;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(a)||(pu=!0,l.add(a),e=Zb.bind(null,e,t,a),t.then(e,e))}function Zb(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Oe===e&&(ye&a)===a&&(He===4||He===3&&(ye&62914560)===ye&&300>Et()-_s?(Ae&2)===0&&mo(e,0):gu|=a,co===ye&&(co=0)),aa(e)}function Lh(e,t){t===0&&(t=Od()),e=hn(e,t),e!==null&&(jo(e,t),aa(e))}function Kb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Lh(e,a)}function Fb(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(t),Lh(e,a)}function Wb(e,t){return _r(e,t)}var Ps=null,po=null,Au=!1,ks=!1,Cu=!1,Ja=0;function aa(e){e!==po&&e.next===null&&(po===null?Ps=po=e:po=po.next=e),ks=!0,Au||(Au=!0,Ib())}function mi(e,t){if(!Cu&&ks){Cu=!0;do for(var a=!1,o=Ps;o!==null;){if(e!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var f=o.suspendedLanes,v=o.pingedLanes;u=(1<<31-Ct(42|e)+1)-1,u&=l&~(f&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Gh(o,u))}else u=ye,u=Zi(o,o===Oe?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Ro(o,u)||(a=!0,Gh(o,u));o=o.next}while(a);Cu=!1}}function $b(){Uh()}function Uh(){ks=Au=!1;var e=0;Ja!==0&&uS()&&(e=Ja);for(var t=Et(),a=null,o=Ps;o!==null;){var l=o.next,u=Hh(o,t);u===0?(o.next=null,a===null?Ps=l:a.next=l,l===null&&(po=a)):(a=o,(e!==0||(u&3)!==0)&&(ks=!0)),o=l}Fe!==0&&Fe!==5||mi(e),Ja!==0&&(Ja=0)}function Hh(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var f=31-Ct(u),v=1<<f,T=l[f];T===-1?((v&a)===0||(v&o)!==0)&&(l[f]=C0(v,t)):T<=t&&(e.expiredLanes|=v),u&=~v}if(t=Oe,a=ye,a=Zi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Br(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ro(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Br(o),Hr(a)){case 2:case 8:a=Nd;break;case 32:a=ki;break;case 268435456:a=qd;break;default:a=ki}return o=Qh.bind(null,e),a=_r(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Br(o),e.callbackPriority=2,e.callbackNode=null,2}function Qh(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gs()&&e.callbackNode!==a)return null;var o=ye;return o=Zi(e,e===Oe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(xh(e,o,t),Hh(e,Et()),e.callbackNode!=null&&e.callbackNode===a?Qh.bind(null,e):null)}function Gh(e,t){if(Gs())return null;xh(e,t,!0)}function Ib(){dS(function(){(Ae&6)!==0?_r(zd,$b):Uh()})}function Mu(){if(Ja===0){var e=In;e===0&&(e=Yi,Yi<<=1,(Yi&261888)===0&&(Yi=256)),Ja=e}return Ja}function Ph(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$i(""+e)}function kh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function eS(e,t,a,o,l){if(t==="submit"&&a&&a.stateNode===l){var u=Ph((l[gt]||null).action),f=o.submitter;f&&(t=(t=f[gt]||null)?Ph(t.formAction):f.getAttribute("formAction"),t!==null&&(u=t,f=null));var v=new as("action","action",null,o,l);e.push({event:v,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var T=f?kh(l,f):new FormData(l);Xl(a,{pending:!0,data:T,method:l.method,action:u},null,T)}}else typeof u=="function"&&(v.preventDefault(),T=f?kh(l,f):new FormData(l),Xl(a,{pending:!0,data:T,method:l.method,action:u},u,T))},currentTarget:l}]})}}for(var Du=0;Du<ul.length;Du++){var zu=ul[Du],tS=zu.toLowerCase(),aS=zu[0].toUpperCase()+zu.slice(1);Xt(tS,"on"+aS)}Xt(Tf,"onAnimationEnd"),Xt(xf,"onAnimationIteration"),Xt(Ef,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(yb,"onTransitionRun"),Xt(bb,"onTransitionStart"),Xt(Sb,"onTransitionCancel"),Xt(Af,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hi));function Yh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var f=o.length-1;0<=f;f--){var v=o[f],T=v.instance,D=v.currentTarget;if(v=v.listener,T!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=D;try{u(l)}catch(j){is(j)}l.currentTarget=null,u=T}else for(f=0;f<o.length;f++){if(v=o[f],T=v.instance,D=v.currentTarget,v=v.listener,T!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=D;try{u(l)}catch(j){is(j)}l.currentTarget=null,u=T}}}}function ve(e,t){var a=t[Qr];a===void 0&&(a=t[Qr]=new Set);var o=e+"__bubble";a.has(o)||(Xh(t,e,2,!1),a.add(o))}function Nu(e,t,a){var o=0;t&&(o|=4),Xh(a,e,o,t)}var Ys="_reactListening"+Math.random().toString(36).slice(2);function qu(e){if(!e[Ys]){e[Ys]=!0,Ld.forEach(function(a){a!=="selectionchange"&&(nS.has(a)||Nu(a,!1,e),Nu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ys]||(t[Ys]=!0,Nu("selectionchange",!1,t))}}function Xh(e,t,a,o){switch(Tp(t)){case 2:var l=OS;break;case 8:l=RS;break;default:l=Yu}a=l.bind(null,t,a,e),l=void 0,!Fr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Ou(e,t,a,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var f=o.tag;if(f===3||f===4){var v=o.stateNode.containerInfo;if(v===l)break;if(f===4)for(f=o.return;f!==null;){var T=f.tag;if((T===3||T===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;v!==null;){if(f=_n(v),f===null)return;if(T=f.tag,T===5||T===6||T===26||T===27){o=u=f;continue e}v=v.parentNode}}o=o.return}Fd(function(){var D=u,j=Zr(a),V=[];e:{var N=Cf.get(e);if(N!==void 0){var q=as,$=e;switch(e){case"keypress":if(es(a)===0)break e;case"keydown":case"keyup":q=F0;break;case"focusin":$="focus",q=el;break;case"focusout":$="blur",q=el;break;case"beforeblur":case"afterblur":q=el;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=I0;break;case Tf:case xf:case Ef:q=Q0;break;case Af:q=tb;break;case"scroll":case"scrollend":q=_0;break;case"wheel":q=nb;break;case"copy":case"cut":case"paste":q=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=tf;break;case"toggle":case"beforetoggle":q=ib}var ue=(t&4)!==0,qe=!ue&&(e==="scroll"||e==="scrollend"),C=ue?N!==null?N+"Capture":null:N;ue=[];for(var E=D,M;E!==null;){var w=E;if(M=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||M===null||C===null||(w=_o(E,C),w!=null&&ue.push(pi(E,w,M))),qe)break;E=E.return}0<ue.length&&(N=new q(N,$,null,a,j),V.push({event:N,listeners:ue}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",N&&a!==Jr&&($=a.relatedTarget||a.fromElement)&&(_n($)||$[Vn]))break e;if((q||N)&&(N=j.window===j?j:(N=j.ownerDocument)?N.defaultView||N.parentWindow:window,q?($=a.relatedTarget||a.toElement,q=D,$=$?_n($):null,$!==null&&(qe=m($),ue=$.tag,$!==qe||ue!==5&&ue!==27&&ue!==6)&&($=null)):(q=null,$=D),q!==$)){if(ue=Id,w="onMouseLeave",C="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ue=tf,w="onPointerLeave",C="onPointerEnter",E="pointer"),qe=q==null?N:Vo(q),M=$==null?N:Vo($),N=new ue(w,E+"leave",q,a,j),N.target=qe,N.relatedTarget=M,w=null,_n(j)===D&&(ue=new ue(C,E+"enter",$,a,j),ue.target=M,ue.relatedTarget=qe,w=ue),qe=w,q&&$)t:{for(ue=oS,C=q,E=$,M=0,w=C;w;w=ue(w))M++;w=0;for(var re=E;re;re=ue(re))w++;for(;0<M-w;)C=ue(C),M--;for(;0<w-M;)E=ue(E),w--;for(;M--;){if(C===E||E!==null&&C===E.alternate){ue=C;break t}C=ue(C),E=ue(E)}ue=null}else ue=null;q!==null&&Jh(V,N,q,ue,!1),$!==null&&qe!==null&&Jh(V,qe,$,ue,!0)}}e:{if(N=D?Vo(D):window,q=N.nodeName&&N.nodeName.toLowerCase(),q==="select"||q==="input"&&N.type==="file")var xe=cf;else if(lf(N))if(df)xe=pb;else{xe=mb;var ne=fb}else q=N.nodeName,!q||q.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?D&&Xr(D.elementType)&&(xe=cf):xe=hb;if(xe&&(xe=xe(e,D))){uf(V,xe,a,j);break e}ne&&ne(e,N,D),e==="focusout"&&D&&N.type==="number"&&D.memoizedProps.value!=null&&Yr(N,"number",N.value)}switch(ne=D?Vo(D):window,e){case"focusin":(lf(ne)||ne.contentEditable==="true")&&(Yn=ne,sl=D,ko=null);break;case"focusout":ko=sl=Yn=null;break;case"mousedown":rl=!0;break;case"contextmenu":case"mouseup":case"dragend":rl=!1,bf(V,a,j);break;case"selectionchange":if(vb)break;case"keydown":case"keyup":bf(V,a,j)}var fe;if(al)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else kn?sf(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(af&&a.locale!=="ko"&&(kn||be!=="onCompositionStart"?be==="onCompositionEnd"&&kn&&(fe=Wd()):(Oa=j,Wr="value"in Oa?Oa.value:Oa.textContent,kn=!0)),ne=Xs(D,be),0<ne.length&&(be=new ef(be,e,null,a,j),V.push({event:be,listeners:ne}),fe?be.data=fe:(fe=rf(a),fe!==null&&(be.data=fe)))),(fe=rb?lb(e,a):ub(e,a))&&(be=Xs(D,"onBeforeInput"),0<be.length&&(ne=new ef("onBeforeInput","beforeinput",null,a,j),V.push({event:ne,listeners:be}),ne.data=fe)),eS(V,e,D,a,j)}Yh(V,t)})}function pi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Xs(e,t){for(var a=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=_o(e,a),l!=null&&o.unshift(pi(e,l,u)),l=_o(e,t),l!=null&&o.push(pi(e,l,u))),e.tag===3)return o;e=e.return}return[]}function oS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jh(e,t,a,o,l){for(var u=t._reactName,f=[];a!==null&&a!==o;){var v=a,T=v.alternate,D=v.stateNode;if(v=v.tag,T!==null&&T===o)break;v!==5&&v!==26&&v!==27||D===null||(T=D,l?(D=_o(a,u),D!=null&&f.unshift(pi(a,D,T))):l||(D=_o(a,u),D!=null&&f.push(pi(a,D,T)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var iS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function Zh(e){return(typeof e=="string"?e:""+e).replace(iS,`
`).replace(sS,"")}function Kh(e,t){return t=Zh(t),Zh(e)===t}function Ne(e,t,a,o,l,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Qn(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Qn(e,""+o);break;case"className":Fi(e,"class",o);break;case"tabIndex":Fi(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Fi(e,a,o);break;case"style":Zd(e,o,u);break;case"data":if(t!=="object"){Fi(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$i(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&Ne(e,t,"name",l.name,l,null),Ne(e,t,"formEncType",l.formEncType,l,null),Ne(e,t,"formMethod",l.formMethod,l,null),Ne(e,t,"formTarget",l.formTarget,l,null)):(Ne(e,t,"encType",l.encType,l,null),Ne(e,t,"method",l.method,l,null),Ne(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$i(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=la);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=$i(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ki(e,"popover",o);break;case"xlinkActuate":ra(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ra(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ra(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ra(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ra(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ra(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ra(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ra(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ra(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ki(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,Ki(e,a,o))}}function Ru(e,t,a,o,l,u){switch(a){case"style":Zd(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Qn(e,o):(typeof o=="number"||typeof o=="bigint")&&Qn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ud.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),u=e[gt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,l);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ki(e,a,o)}}}function st(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var f=a[u];if(f!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ne(e,t,u,f,a,null)}}l&&Ne(e,t,"srcSet",a.srcSet,a,null),o&&Ne(e,t,"src",a.src,a,null);return;case"input":ve("invalid",e);var v=u=f=l=null,T=null,D=null;for(o in a)if(a.hasOwnProperty(o)){var j=a[o];if(j!=null)switch(o){case"name":l=j;break;case"type":f=j;break;case"checked":T=j;break;case"defaultChecked":D=j;break;case"value":u=j;break;case"defaultValue":v=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,t));break;default:Ne(e,t,o,j,a,null)}}kd(e,u,v,T,D,f,l,!1);return;case"select":ve("invalid",e),o=f=u=null;for(l in a)if(a.hasOwnProperty(l)&&(v=a[l],v!=null))switch(l){case"value":u=v;break;case"defaultValue":f=v;break;case"multiple":o=v;default:Ne(e,t,l,v,a,null)}t=u,a=f,e.multiple=!!o,t!=null?Hn(e,!!o,t,!1):a!=null&&Hn(e,!!o,a,!0);return;case"textarea":ve("invalid",e),u=l=o=null;for(f in a)if(a.hasOwnProperty(f)&&(v=a[f],v!=null))switch(f){case"value":o=v;break;case"defaultValue":l=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(91));break;default:Ne(e,t,f,v,a,null)}Xd(e,o,l,u);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(o=a[T],o!=null))switch(T){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ne(e,t,T,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<hi.length;o++)ve(hi[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(o=a[D],o!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ne(e,t,D,o,a,null)}return;default:if(Xr(t)){for(j in a)a.hasOwnProperty(j)&&(o=a[j],o!==void 0&&Ru(e,t,j,o,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(o=a[v],o!=null&&Ne(e,t,v,o,a,null))}function rS(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,f=null,v=null,T=null,D=null,j=null;for(q in a){var V=a[q];if(a.hasOwnProperty(q)&&V!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":T=V;default:o.hasOwnProperty(q)||Ne(e,t,q,null,o,V)}}for(var N in o){var q=o[N];if(V=a[N],o.hasOwnProperty(N)&&(q!=null||V!=null))switch(N){case"type":u=q;break;case"name":l=q;break;case"checked":D=q;break;case"defaultChecked":j=q;break;case"value":f=q;break;case"defaultValue":v=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,t));break;default:q!==V&&Ne(e,t,N,q,o,V)}}kr(e,f,v,T,D,j,u,l);return;case"select":q=f=v=N=null;for(u in a)if(T=a[u],a.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":q=T;default:o.hasOwnProperty(u)||Ne(e,t,u,null,o,T)}for(l in o)if(u=o[l],T=a[l],o.hasOwnProperty(l)&&(u!=null||T!=null))switch(l){case"value":N=u;break;case"defaultValue":v=u;break;case"multiple":f=u;default:u!==T&&Ne(e,t,l,u,o,T)}t=v,a=f,o=q,N!=null?Hn(e,!!a,N,!1):!!o!=!!a&&(t!=null?Hn(e,!!a,t,!0):Hn(e,!!a,a?[]:"",!1));return;case"textarea":q=N=null;for(v in a)if(l=a[v],a.hasOwnProperty(v)&&l!=null&&!o.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ne(e,t,v,null,o,l)}for(f in o)if(l=o[f],u=a[f],o.hasOwnProperty(f)&&(l!=null||u!=null))switch(f){case"value":N=l;break;case"defaultValue":q=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Ne(e,t,f,l,o,u)}Yd(e,N,q);return;case"option":for(var $ in a)if(N=a[$],a.hasOwnProperty($)&&N!=null&&!o.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:Ne(e,t,$,null,o,N)}for(T in o)if(N=o[T],q=a[T],o.hasOwnProperty(T)&&N!==q&&(N!=null||q!=null))switch(T){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Ne(e,t,T,N,o,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in a)N=a[ue],a.hasOwnProperty(ue)&&N!=null&&!o.hasOwnProperty(ue)&&Ne(e,t,ue,null,o,N);for(D in o)if(N=o[D],q=a[D],o.hasOwnProperty(D)&&N!==q&&(N!=null||q!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:Ne(e,t,D,N,o,q)}return;default:if(Xr(t)){for(var qe in a)N=a[qe],a.hasOwnProperty(qe)&&N!==void 0&&!o.hasOwnProperty(qe)&&Ru(e,t,qe,void 0,o,N);for(j in o)N=o[j],q=a[j],!o.hasOwnProperty(j)||N===q||N===void 0&&q===void 0||Ru(e,t,j,N,o,q);return}}for(var C in a)N=a[C],a.hasOwnProperty(C)&&N!=null&&!o.hasOwnProperty(C)&&Ne(e,t,C,null,o,N);for(V in o)N=o[V],q=a[V],!o.hasOwnProperty(V)||N===q||N==null&&q==null||Ne(e,t,V,N,o,q)}function Fh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var l=a[o],u=l.transferSize,f=l.initiatorType,v=l.duration;if(u&&v&&Fh(f)){for(f=0,v=l.responseEnd,o+=1;o<a.length;o++){var T=a[o],D=T.startTime;if(D>v)break;var j=T.transferSize,V=T.initiatorType;j&&Fh(V)&&(T=T.responseEnd,f+=j*(T<v?1:(v-D)/(T-D)))}if(--o,t+=8*(u+f)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ju=null,wu=null;function Js(e){return e.nodeType===9?e:e.ownerDocument}function Wh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $h(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=null;function uS(){var e=window.event;return e&&e.type==="popstate"?e===_u?!1:(_u=e,!0):(_u=null,!1)}var Ih=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(e){return ep.resolve(null).then(e).catch(fS)}:Ih;function fS(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function tp(e,t){var a=t,o=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(l),bo(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")gi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,gi(a);for(var u=a.firstChild;u;){var f=u.nextSibling,v=u.nodeName;u[wo]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=f}}else a==="body"&&gi(e.ownerDocument.body);a=l}while(a);bo(t)}function ap(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Bu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bu(a),Gr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mS(e,t,a,o){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function hS(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Gt(e.nextSibling),e===null))return null;return e}function np(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function Lu(e){return e.data==="$?"||e.data==="$~"}function Uu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function pS(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hu=null;function op(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Gt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function ip(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function sp(e,t,a){switch(t=Js(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function gi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gr(e)}var Pt=new Map,rp=new Set;function Zs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=Q.d;Q.d={f:gS,r:vS,D:yS,C:bS,L:SS,m:TS,X:ES,S:xS,M:AS};function gS(){var e=Aa.f(),t=Us();return e||t}function vS(e){var t=Bn(e);t!==null&&t.tag===5&&t.type==="form"?Am(t):Aa.r(e)}var go=typeof document>"u"?null:document;function lp(e,t,a){var o=go;if(o&&typeof t=="string"&&t){var l=Vt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),rp.has(l)||(rp.add(l),e={rel:e,crossOrigin:a,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),st(t,"link",e),et(t),o.head.appendChild(t)))}}function yS(e){Aa.D(e),lp("dns-prefetch",e,null)}function bS(e,t){Aa.C(e,t),lp("preconnect",e,t)}function SS(e,t,a){Aa.L(e,t,a);var o=go;if(o&&e&&t){var l='link[rel="preload"][as="'+Vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Vt(a.imageSizes)+'"]')):l+='[href="'+Vt(e)+'"]';var u=l;switch(t){case"style":u=vo(e);break;case"script":u=yo(e)}Pt.has(u)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Pt.set(u,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(vi(u))||t==="script"&&o.querySelector(yi(u))||(t=o.createElement("link"),st(t,"link",e),et(t),o.head.appendChild(t)))}}function TS(e,t){Aa.m(e,t);var a=go;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(e)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=yo(e)}if(!Pt.has(u)&&(e=b({rel:"modulepreload",href:e},t),Pt.set(u,e),a.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yi(u)))return}o=a.createElement("link"),st(o,"link",e),et(o),a.head.appendChild(o)}}}function xS(e,t,a){Aa.S(e,t,a);var o=go;if(o&&e){var l=Ln(o).hoistableStyles,u=vo(e);t=t||"default";var f=l.get(u);if(!f){var v={loading:0,preload:null};if(f=o.querySelector(vi(u)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Pt.get(u))&&Qu(e,a);var T=f=o.createElement("link");et(T),st(T,"link",e),T._p=new Promise(function(D,j){T.onload=D,T.onerror=j}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ks(f,t,o)}f={type:"stylesheet",instance:f,count:1,state:v},l.set(u,f)}}}function ES(e,t){Aa.X(e,t);var a=go;if(a&&e){var o=Ln(a).hoistableScripts,l=yo(e),u=o.get(l);u||(u=a.querySelector(yi(l)),u||(e=b({src:e,async:!0},t),(t=Pt.get(l))&&Gu(e,t),u=a.createElement("script"),et(u),st(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function AS(e,t){Aa.M(e,t);var a=go;if(a&&e){var o=Ln(a).hoistableScripts,l=yo(e),u=o.get(l);u||(u=a.querySelector(yi(l)),u||(e=b({src:e,async:!0,type:"module"},t),(t=Pt.get(l))&&Gu(e,t),u=a.createElement("script"),et(u),st(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function up(e,t,a,o){var l=(l=le.current)?Zs(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=vo(a.href),a=Ln(l).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vo(a.href);var u=Ln(l).hoistableStyles,f=u.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,f),(u=l.querySelector(vi(e)))&&!u._p&&(f.instance=u,f.state.loading=5),Pt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Pt.set(e,a),u||CS(l,e,a,f.state))),t&&o===null)throw Error(s(528,""));return f}if(t&&o!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yo(a),a=Ln(l).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function vo(e){return'href="'+Vt(e)+'"'}function vi(e){return'link[rel="stylesheet"]['+e+"]"}function cp(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function CS(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),st(t,"link",a),et(t),e.head.appendChild(t))}function yo(e){return'[src="'+Vt(e)+'"]'}function yi(e){return"script[async]"+e}function dp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return t.instance=o,et(o),o;var l=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),et(o),st(o,"style",l),Ks(o,a.precedence,e),t.instance=o;case"stylesheet":l=vo(a.href);var u=e.querySelector(vi(l));if(u)return t.state.loading|=4,t.instance=u,et(u),u;o=cp(a),(l=Pt.get(l))&&Qu(o,l),u=(e.ownerDocument||e).createElement("link"),et(u);var f=u;return f._p=new Promise(function(v,T){f.onload=v,f.onerror=T}),st(u,"link",o),t.state.loading|=4,Ks(u,a.precedence,e),t.instance=u;case"script":return u=yo(a.src),(l=e.querySelector(yi(u)))?(t.instance=l,et(l),l):(o=a,(l=Pt.get(u))&&(o=b({},a),Gu(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),et(l),st(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Ks(o,a.precedence,e));return t.instance}function Ks(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,f=0;f<o.length;f++){var v=o[f];if(v.dataset.precedence===t)u=v;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Qu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fs=null;function fp(e,t,a){if(Fs===null){var o=new Map,l=Fs=new Map;l.set(a,o)}else l=Fs,o=l.get(a),o||(o=new Map,l.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[wo]||u[at]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(t)||"";f=e+f;var v=o.get(f);v?v.push(u):o.set(f,[u])}}return o}function mp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function MS(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function DS(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=vo(o.href),u=t.querySelector(vi(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ws.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,et(u);return}u=t.ownerDocument||t,o=cp(o),(l=Pt.get(l))&&Qu(o,l),u=u.createElement("link"),et(u);var f=u;f._p=new Promise(function(v,T){f.onload=v,f.onerror=T}),st(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ws.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Pu=0;function zS(e,t){return e.stylesheets&&e.count===0&&Is(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Is(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Pu===0&&(Pu=62500*lS());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Is(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Pu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function Ws(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Is(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $s=null;function Is(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$s=new Map,t.forEach(NS,e),$s=null,Ws.call(e))}function NS(e,t){if(!(t.state.loading&4)){var a=$s.get(e);if(a)var o=a.get(null);else{a=new Map,$s.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var f=l[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),o=f)}o&&a.set(null,o)}l=t.instance,f=l.getAttribute("data-precedence"),u=a.get(f)||o,u===o&&a.set(null,l),a.set(f,l),this.count++,o=Ws.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var bi={$$typeof:G,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function qS(e,t,a,o,l,u,f,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.hiddenUpdates=Lr(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function pp(e,t,a,o,l,u,f,v,T,D,j,V){return e=new qS(e,t,a,f,T,D,j,V,v),t=1,u===!0&&(t|=24),u=Dt(3,null,null,t),e.current=u,u.stateNode=e,t=xl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},Ml(u),e}function gp(e){return e?(e=Zn,e):Zn}function vp(e,t,a,o,l,u){l=gp(l),o.context===null?o.context=l:o.pendingContext=l,o=Ba(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=La(e,o,t),a!==null&&(xt(a,e,t),Wo(a,e,t))}function yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ku(e,t){yp(e,t),(e=e.alternate)&&yp(e,t)}function bp(e){if(e.tag===13||e.tag===31){var t=hn(e,67108864);t!==null&&xt(t,e,67108864),ku(e,67108864)}}function Sp(e){if(e.tag===13||e.tag===31){var t=Rt();t=Ur(t);var a=hn(e,t);a!==null&&xt(a,e,t),ku(e,t)}}var er=!0;function OS(e,t,a,o){var l=R.T;R.T=null;var u=Q.p;try{Q.p=2,Yu(e,t,a,o)}finally{Q.p=u,R.T=l}}function RS(e,t,a,o){var l=R.T;R.T=null;var u=Q.p;try{Q.p=8,Yu(e,t,a,o)}finally{Q.p=u,R.T=l}}function Yu(e,t,a,o){if(er){var l=Xu(o);if(l===null)Ou(e,t,o,tr,a),xp(e,o);else if(wS(l,e,t,a,o))o.stopPropagation();else if(xp(e,o),t&4&&-1<jS.indexOf(e)){for(;l!==null;){var u=Bn(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=un(u.pendingLanes);if(f!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;f;){var T=1<<31-Ct(f);v.entanglements[1]|=T,f&=~T}aa(u),(Ae&6)===0&&(Bs=Et()+500,mi(0))}}break;case 31:case 13:v=hn(u,2),v!==null&&xt(v,u,2),Us(),ku(u,2)}if(u=Xu(o),u===null&&Ou(e,t,o,tr,a),u===l)break;l=u}l!==null&&o.stopPropagation()}else Ou(e,t,o,null,a)}}function Xu(e){return e=Zr(e),Ju(e)}var tr=null;function Ju(e){if(tr=null,e=_n(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tr=e,null}function Tp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(y0()){case zd:return 2;case Nd:return 8;case ki:case b0:return 32;case qd:return 268435456;default:return 32}default:return 32}}var Zu=!1,Ka=null,Fa=null,Wa=null,Si=new Map,Ti=new Map,$a=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xp(e,t){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function xi(e,t,a,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Bn(t),t!==null&&bp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function wS(e,t,a,o,l){switch(t){case"focusin":return Ka=xi(Ka,e,t,a,o,l),!0;case"dragenter":return Fa=xi(Fa,e,t,a,o,l),!0;case"mouseover":return Wa=xi(Wa,e,t,a,o,l),!0;case"pointerover":var u=l.pointerId;return Si.set(u,xi(Si.get(u)||null,e,t,a,o,l)),!0;case"gotpointercapture":return u=l.pointerId,Ti.set(u,xi(Ti.get(u)||null,e,t,a,o,l)),!0}return!1}function Ep(e){var t=_n(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,_d(e.priority,function(){Sp(a)});return}}else if(t===31){if(t=h(a),t!==null){e.blockedOn=t,_d(e.priority,function(){Sp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xu(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Jr=o,a.target.dispatchEvent(o),Jr=null}else return t=Bn(a),t!==null&&bp(t),e.blockedOn=a,!1;t.shift()}return!0}function Ap(e,t,a){ar(e)&&a.delete(t)}function VS(){Zu=!1,Ka!==null&&ar(Ka)&&(Ka=null),Fa!==null&&ar(Fa)&&(Fa=null),Wa!==null&&ar(Wa)&&(Wa=null),Si.forEach(Ap),Ti.forEach(Ap)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zu||(Zu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,VS)))}var or=null;function Cp(e){or!==e&&(or=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){or===e&&(or=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(Ju(o||a)===null)continue;break}var u=Bn(a);u!==null&&(e.splice(t,3),t-=3,Xl(u,{pending:!0,data:l,method:a.method,action:o},o,l))}}))}function bo(e){function t(T){return nr(T,e)}Ka!==null&&nr(Ka,e),Fa!==null&&nr(Fa,e),Wa!==null&&nr(Wa,e),Si.forEach(t),Ti.forEach(t);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)Ep(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var l=a[o],u=a[o+1],f=l[gt]||null;if(typeof u=="function")f||Cp(a);else if(f){var v=null;if(u&&u.hasAttribute("formAction")){if(l=u,f=u[gt]||null)v=f.formAction;else if(Ju(l)!==null)continue}else v=f.action;typeof v=="function"?a[o+1]=v:(a.splice(o,3),o-=3),Cp(a)}}}function Mp(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(f){return l=f})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ku(e){this._internalRoot=e}ir.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,o=Rt();vp(a,o,e,t,null,null)},ir.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vp(e.current,2,null,e,null,null),Us(),t[Vn]=null}};function ir(e){this._internalRoot=e}ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<$a.length&&t!==0&&t<$a[a].priority;a++);$a.splice(a,0,e),a===0&&Ep(e)}};var Dp=i.version;if(Dp!=="19.2.4")throw Error(s(527,Dp,"19.2.4"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var _S={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sr.isDisabled&&sr.supportsFiber)try{Oo=sr.inject(_S),At=sr}catch{}}return Ai.createRoot=function(e,t){if(!c(e))throw Error(s(299));var a=!1,o="",l=wm,u=Vm,f=_m;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=pp(e,1,!1,null,null,a,o,null,l,u,f,Mp),e[Vn]=t.current,qu(e),new Ku(t)},Ai.hydrateRoot=function(e,t,a){if(!c(e))throw Error(s(299));var o=!1,l="",u=wm,f=Vm,v=_m,T=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),t=pp(e,1,!0,t,a??null,o,l,T,u,f,v,Mp),t.context=gp(null),a=t.current,o=Rt(),o=Ur(o),l=Ba(o),l.callback=null,La(a,l,o),a=o,t.current.lanes=a,jo(t,a),aa(t),e[Vn]=t.current,qu(e),new ir(t)},Ai.version="19.2.4",Ai}var Bp;function XS(){if(Bp)return $u.exports;Bp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),$u.exports=YS(),$u.exports}var JS=XS();const Jc=k.createContext({});function Zc(n){const i=k.useRef(null);return i.current===null&&(i.current=n()),i.current}const uv=typeof window<"u",cv=uv?k.useLayoutEffect:k.useEffect,Nr=k.createContext(null);function Kc(n,i){n.indexOf(i)===-1&&n.push(i)}function br(n,i){const r=n.indexOf(i);r>-1&&n.splice(r,1)}const ia=(n,i,r)=>r>i?i:r<n?n:r;let Fc=()=>{};const Ma={},dv=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function fv(n){return typeof n=="object"&&n!==null}const mv=n=>/^0[^.\s]+$/u.test(n);function hv(n){let i;return()=>(i===void 0&&(i=n()),i)}const Yt=n=>n,ZS=(n,i)=>r=>i(n(r)),Ui=(...n)=>n.reduce(ZS),wi=(n,i,r)=>{const s=i-n;return s===0?1:(r-n)/s};class Wc{constructor(){this.subscriptions=[]}add(i){return Kc(this.subscriptions,i),()=>br(this.subscriptions,i)}notify(i,r,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,r,s);else for(let m=0;m<c;m++){const d=this.subscriptions[m];d&&d(i,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Wt=n=>n*1e3,kt=n=>n/1e3;function pv(n,i){return i?n*(1e3/i):0}const gv=(n,i,r)=>(((1-3*r+3*i)*n+(3*r-6*i))*n+3*i)*n,KS=1e-7,FS=12;function WS(n,i,r,s,c){let m,d,h=0;do d=i+(r-i)/2,m=gv(d,s,c)-n,m>0?r=d:i=d;while(Math.abs(m)>KS&&++h<FS);return d}function Hi(n,i,r,s){if(n===i&&r===s)return Yt;const c=m=>WS(m,0,1,n,r);return m=>m===0||m===1?m:gv(c(m),i,s)}const vv=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,yv=n=>i=>1-n(1-i),bv=Hi(.33,1.53,.69,.99),$c=yv(bv),Sv=vv($c),Tv=n=>(n*=2)<1?.5*$c(n):.5*(2-Math.pow(2,-10*(n-1))),Ic=n=>1-Math.sin(Math.acos(n)),xv=yv(Ic),Ev=vv(Ic),$S=Hi(.42,0,1,1),IS=Hi(0,0,.58,1),Av=Hi(.42,0,.58,1),e1=n=>Array.isArray(n)&&typeof n[0]!="number",Cv=n=>Array.isArray(n)&&typeof n[0]=="number",t1={linear:Yt,easeIn:$S,easeInOut:Av,easeOut:IS,circIn:Ic,circInOut:Ev,circOut:xv,backIn:$c,backInOut:Sv,backOut:bv,anticipate:Tv},a1=n=>typeof n=="string",Lp=n=>{if(Cv(n)){Fc(n.length===4);const[i,r,s,c]=n;return Hi(i,r,s,c)}else if(a1(n))return t1[n];return n},rr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function n1(n,i){let r=new Set,s=new Set,c=!1,m=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){d.has(y)&&(g.schedule(y),n()),y(h)}const g={schedule:(y,b=!1,S=!1)=>{const O=S&&c?r:s;return b&&d.add(y),O.has(y)||O.add(y),y},cancel:y=>{s.delete(y),d.delete(y)},process:y=>{if(h=y,c){m=!0;return}c=!0,[r,s]=[s,r],r.forEach(p),r.clear(),c=!1,m&&(m=!1,g.process(y))}};return g}const o1=40;function Mv(n,i){let r=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},m=()=>r=!0,d=rr.reduce((G,Z)=>(G[Z]=n1(m),G),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:y,update:b,preRender:S,render:z,postRender:O}=d,L=()=>{const G=Ma.useManualTiming?c.timestamp:performance.now();r=!1,Ma.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(G-c.timestamp,o1),1)),c.timestamp=G,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),y.process(c),b.process(c),S.process(c),z.process(c),O.process(c),c.isProcessing=!1,r&&i&&(s=!1,n(L))},U=()=>{r=!0,s=!0,c.isProcessing||n(L)};return{schedule:rr.reduce((G,Z)=>{const Y=d[Z];return G[Z]=(ie,F=!1,B=!1)=>(r||U(),Y.schedule(ie,F,B)),G},{}),cancel:G=>{for(let Z=0;Z<rr.length;Z++)d[rr[Z]].cancel(G)},state:c,steps:d}}const{schedule:Re,cancel:sn,state:rt,steps:ac}=Mv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yt,!0);let mr;function i1(){mr=void 0}const mt={now:()=>(mr===void 0&&mt.set(rt.isProcessing||Ma.useManualTiming?rt.timestamp:performance.now()),mr),set:n=>{mr=n,queueMicrotask(i1)}},Dv=n=>i=>typeof i=="string"&&i.startsWith(n),zv=Dv("--"),s1=Dv("var(--"),ed=n=>s1(n)?r1.test(n.split("/*")[0].trim()):!1,r1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Up(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const zo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Vi={...zo,transform:n=>ia(0,1,n)},lr={...zo,default:1},qi=n=>Math.round(n*1e5)/1e5,td=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function l1(n){return n==null}const u1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ad=(n,i)=>r=>!!(typeof r=="string"&&u1.test(r)&&r.startsWith(n)||i&&!l1(r)&&Object.prototype.hasOwnProperty.call(r,i)),Nv=(n,i,r)=>s=>{if(typeof s!="string")return s;const[c,m,d,h]=s.match(td);return{[n]:parseFloat(c),[i]:parseFloat(m),[r]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},c1=n=>ia(0,255,n),nc={...zo,transform:n=>Math.round(c1(n))},qn={test:ad("rgb","red"),parse:Nv("red","green","blue"),transform:({red:n,green:i,blue:r,alpha:s=1})=>"rgba("+nc.transform(n)+", "+nc.transform(i)+", "+nc.transform(r)+", "+qi(Vi.transform(s))+")"};function d1(n){let i="",r="",s="",c="";return n.length>5?(i=n.substring(1,3),r=n.substring(3,5),s=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),r=n.substring(2,3),s=n.substring(3,4),c=n.substring(4,5),i+=i,r+=r,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const Sc={test:ad("#"),parse:d1,transform:qn.transform},Qi=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),an=Qi("deg"),oa=Qi("%"),ee=Qi("px"),f1=Qi("vh"),m1=Qi("vw"),Hp={...oa,parse:n=>oa.parse(n)/100,transform:n=>oa.transform(n*100)},To={test:ad("hsl","hue"),parse:Nv("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:r,alpha:s=1})=>"hsla("+Math.round(n)+", "+oa.transform(qi(i))+", "+oa.transform(qi(r))+", "+qi(Vi.transform(s))+")"},Ke={test:n=>qn.test(n)||Sc.test(n)||To.test(n),parse:n=>qn.test(n)?qn.parse(n):To.test(n)?To.parse(n):Sc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?qn.transform(n):To.transform(n),getAnimatableNone:n=>{const i=Ke.parse(n);return i.alpha=0,Ke.transform(i)}},h1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function p1(n){var i,r;return isNaN(n)&&typeof n=="string"&&(((i=n.match(td))==null?void 0:i.length)||0)+(((r=n.match(h1))==null?void 0:r.length)||0)>0}const qv="number",Ov="color",g1="var",v1="var(",Qp="${}",y1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _i(n){const i=n.toString(),r=[],s={color:[],number:[],var:[]},c=[];let m=0;const h=i.replace(y1,p=>(Ke.test(p)?(s.color.push(m),c.push(Ov),r.push(Ke.parse(p))):p.startsWith(v1)?(s.var.push(m),c.push(g1),r.push(p)):(s.number.push(m),c.push(qv),r.push(parseFloat(p))),++m,Qp)).split(Qp);return{values:r,split:h,indexes:s,types:c}}function Rv(n){return _i(n).values}function jv(n){const{split:i,types:r}=_i(n),s=i.length;return c=>{let m="";for(let d=0;d<s;d++)if(m+=i[d],c[d]!==void 0){const h=r[d];h===qv?m+=qi(c[d]):h===Ov?m+=Ke.transform(c[d]):m+=c[d]}return m}}const b1=n=>typeof n=="number"?0:Ke.test(n)?Ke.getAnimatableNone(n):n;function S1(n){const i=Rv(n);return jv(n)(i.map(b1))}const $t={test:p1,parse:Rv,createTransformer:jv,getAnimatableNone:S1};function oc(n,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(i-n)*6*r:r<1/2?i:r<2/3?n+(i-n)*(2/3-r)*6:n}function T1({hue:n,saturation:i,lightness:r,alpha:s}){n/=360,i/=100,r/=100;let c=0,m=0,d=0;if(!i)c=m=d=r;else{const h=r<.5?r*(1+i):r+i-r*i,p=2*r-h;c=oc(p,h,n+1/3),m=oc(p,h,n),d=oc(p,h,n-1/3)}return{red:Math.round(c*255),green:Math.round(m*255),blue:Math.round(d*255),alpha:s}}function Sr(n,i){return r=>r>0?i:n}const Le=(n,i,r)=>n+(i-n)*r,ic=(n,i,r)=>{const s=n*n,c=r*(i*i-s)+s;return c<0?0:Math.sqrt(c)},x1=[Sc,qn,To],E1=n=>x1.find(i=>i.test(n));function Gp(n){const i=E1(n);if(!i)return!1;let r=i.parse(n);return i===To&&(r=T1(r)),r}const Pp=(n,i)=>{const r=Gp(n),s=Gp(i);if(!r||!s)return Sr(n,i);const c={...r};return m=>(c.red=ic(r.red,s.red,m),c.green=ic(r.green,s.green,m),c.blue=ic(r.blue,s.blue,m),c.alpha=Le(r.alpha,s.alpha,m),qn.transform(c))},Tc=new Set(["none","hidden"]);function A1(n,i){return Tc.has(n)?r=>r<=0?n:i:r=>r>=1?i:n}function C1(n,i){return r=>Le(n,i,r)}function nd(n){return typeof n=="number"?C1:typeof n=="string"?ed(n)?Sr:Ke.test(n)?Pp:z1:Array.isArray(n)?wv:typeof n=="object"?Ke.test(n)?Pp:M1:Sr}function wv(n,i){const r=[...n],s=r.length,c=n.map((m,d)=>nd(m)(m,i[d]));return m=>{for(let d=0;d<s;d++)r[d]=c[d](m);return r}}function M1(n,i){const r={...n,...i},s={};for(const c in r)n[c]!==void 0&&i[c]!==void 0&&(s[c]=nd(n[c])(n[c],i[c]));return c=>{for(const m in s)r[m]=s[m](c);return r}}function D1(n,i){const r=[],s={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const m=i.types[c],d=n.indexes[m][s[m]],h=n.values[d]??0;r[c]=h,s[m]++}return r}const z1=(n,i)=>{const r=$t.createTransformer(i),s=_i(n),c=_i(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?Tc.has(n)&&!c.values.length||Tc.has(i)&&!s.values.length?A1(n,i):Ui(wv(D1(s,c),c.values),r):Sr(n,i)};function Vv(n,i,r){return typeof n=="number"&&typeof i=="number"&&typeof r=="number"?Le(n,i,r):nd(n)(n,i)}const N1=n=>{const i=({timestamp:r})=>n(r);return{start:(r=!0)=>Re.update(i,r),stop:()=>sn(i),now:()=>rt.isProcessing?rt.timestamp:mt.now()}},_v=(n,i,r=10)=>{let s="";const c=Math.max(Math.round(i/r),2);for(let m=0;m<c;m++)s+=Math.round(n(m/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Tr=2e4;function od(n){let i=0;const r=50;let s=n.next(i);for(;!s.done&&i<Tr;)i+=r,s=n.next(i);return i>=Tr?1/0:i}function q1(n,i=100,r){const s=r({...n,keyframes:[0,i]}),c=Math.min(od(s),Tr);return{type:"keyframes",ease:m=>s.next(c*m).value/i,duration:kt(c)}}const O1=5;function Bv(n,i,r){const s=Math.max(i-O1,0);return pv(r-n(s),i-s)}const Qe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},sc=.001;function R1({duration:n=Qe.duration,bounce:i=Qe.bounce,velocity:r=Qe.velocity,mass:s=Qe.mass}){let c,m,d=1-i;d=ia(Qe.minDamping,Qe.maxDamping,d),n=ia(Qe.minDuration,Qe.maxDuration,kt(n)),d<1?(c=g=>{const y=g*d,b=y*n,S=y-r,z=xc(g,d),O=Math.exp(-b);return sc-S/z*O},m=g=>{const b=g*d*n,S=b*r+r,z=Math.pow(d,2)*Math.pow(g,2)*n,O=Math.exp(-b),L=xc(Math.pow(g,2),d);return(-c(g)+sc>0?-1:1)*((S-z)*O)/L}):(c=g=>{const y=Math.exp(-g*n),b=(g-r)*n+1;return-sc+y*b},m=g=>{const y=Math.exp(-g*n),b=(r-g)*(n*n);return y*b});const h=5/n,p=w1(c,m,h);if(n=Wt(n),isNaN(p))return{stiffness:Qe.stiffness,damping:Qe.damping,duration:n};{const g=Math.pow(p,2)*s;return{stiffness:g,damping:d*2*Math.sqrt(s*g),duration:n}}}const j1=12;function w1(n,i,r){let s=r;for(let c=1;c<j1;c++)s=s-n(s)/i(s);return s}function xc(n,i){return n*Math.sqrt(1-i*i)}const V1=["duration","bounce"],_1=["stiffness","damping","mass"];function kp(n,i){return i.some(r=>n[r]!==void 0)}function B1(n){let i={velocity:Qe.velocity,stiffness:Qe.stiffness,damping:Qe.damping,mass:Qe.mass,isResolvedFromDuration:!1,...n};if(!kp(n,_1)&&kp(n,V1))if(i.velocity=0,n.visualDuration){const r=n.visualDuration,s=2*Math.PI/(r*1.2),c=s*s,m=2*ia(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:Qe.mass,stiffness:c,damping:m}}else{const r=R1({...n,velocity:0});i={...i,...r,mass:Qe.mass},i.isResolvedFromDuration=!0}return i}function xr(n=Qe.visualDuration,i=Qe.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:s,restDelta:c}=r;const m=r.keyframes[0],d=r.keyframes[r.keyframes.length-1],h={done:!1,value:m},{stiffness:p,damping:g,mass:y,duration:b,velocity:S,isResolvedFromDuration:z}=B1({...r,velocity:-kt(r.velocity||0)}),O=S||0,L=g/(2*Math.sqrt(p*y)),U=d-m,H=kt(Math.sqrt(p/y)),X=Math.abs(U)<5;s||(s=X?Qe.restSpeed.granular:Qe.restSpeed.default),c||(c=X?Qe.restDelta.granular:Qe.restDelta.default);let G;if(L<1){const Y=xc(H,L);G=ie=>{const F=Math.exp(-L*H*ie);return d-F*((O+L*H*U)/Y*Math.sin(Y*ie)+U*Math.cos(Y*ie))}}else if(L===1)G=Y=>d-Math.exp(-H*Y)*(U+(O+H*U)*Y);else{const Y=H*Math.sqrt(L*L-1);G=ie=>{const F=Math.exp(-L*H*ie),B=Math.min(Y*ie,300);return d-F*((O+L*H*U)*Math.sinh(B)+Y*U*Math.cosh(B))/Y}}const Z={calculatedDuration:z&&b||null,next:Y=>{const ie=G(Y);if(z)h.done=Y>=b;else{let F=Y===0?O:0;L<1&&(F=Y===0?Wt(O):Bv(G,Y,ie));const B=Math.abs(F)<=s,se=Math.abs(d-ie)<=c;h.done=B&&se}return h.value=h.done?d:ie,h},toString:()=>{const Y=Math.min(od(Z),Tr),ie=_v(F=>Z.next(Y*F).value,Y,30);return Y+"ms "+ie},toTransition:()=>{}};return Z}xr.applyToOptions=n=>{const i=q1(n,100,xr);return n.ease=i.ease,n.duration=Wt(i.duration),n.type="keyframes",n};function Ec({keyframes:n,velocity:i=0,power:r=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:m=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:y}){const b=n[0],S={done:!1,value:b},z=B=>h!==void 0&&B<h||p!==void 0&&B>p,O=B=>h===void 0?p:p===void 0||Math.abs(h-B)<Math.abs(p-B)?h:p;let L=r*i;const U=b+L,H=d===void 0?U:d(U);H!==U&&(L=H-b);const X=B=>-L*Math.exp(-B/s),G=B=>H+X(B),Z=B=>{const se=X(B),Ce=G(B);S.done=Math.abs(se)<=g,S.value=S.done?H:Ce};let Y,ie;const F=B=>{z(S.value)&&(Y=B,ie=xr({keyframes:[S.value,O(S.value)],velocity:Bv(G,B,S.value),damping:c,stiffness:m,restDelta:g,restSpeed:y}))};return F(0),{calculatedDuration:null,next:B=>{let se=!1;return!ie&&Y===void 0&&(se=!0,Z(B),F(B)),Y!==void 0&&B>=Y?ie.next(B-Y):(!se&&Z(B),S)}}}function L1(n,i,r){const s=[],c=r||Ma.mix||Vv,m=n.length-1;for(let d=0;d<m;d++){let h=c(n[d],n[d+1]);if(i){const p=Array.isArray(i)?i[d]||Yt:i;h=Ui(p,h)}s.push(h)}return s}function U1(n,i,{clamp:r=!0,ease:s,mixer:c}={}){const m=n.length;if(Fc(m===i.length),m===1)return()=>i[0];if(m===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[m-1]&&(n=[...n].reverse(),i=[...i].reverse());const h=L1(i,s,c),p=h.length,g=y=>{if(d&&y<n[0])return i[0];let b=0;if(p>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const S=wi(n[b],n[b+1],y);return h[b](S)};return r?y=>g(ia(n[0],n[m-1],y)):g}function H1(n,i){const r=n[n.length-1];for(let s=1;s<=i;s++){const c=wi(0,i,s);n.push(Le(r,1,c))}}function Q1(n){const i=[0];return H1(i,n.length-1),i}function G1(n,i){return n.map(r=>r*i)}function P1(n,i){return n.map(()=>i||Av).splice(0,n.length-1)}function Oi({duration:n=300,keyframes:i,times:r,ease:s="easeInOut"}){const c=e1(s)?s.map(Lp):Lp(s),m={done:!1,value:i[0]},d=G1(r&&r.length===i.length?r:Q1(i),n),h=U1(d,i,{ease:Array.isArray(c)?c:P1(i,c)});return{calculatedDuration:n,next:p=>(m.value=h(p),m.done=p>=n,m)}}const k1=n=>n!==null;function id(n,{repeat:i,repeatType:r="loop"},s,c=1){const m=n.filter(k1),h=c<0||i&&r!=="loop"&&i%2===1?0:m.length-1;return!h||s===void 0?m[h]:s}const Y1={decay:Ec,inertia:Ec,tween:Oi,keyframes:Oi,spring:xr};function Lv(n){typeof n.type=="string"&&(n.type=Y1[n.type])}class sd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,r){return this.finished.then(i,r)}}const X1=n=>n/100;class rd extends sd{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var s,c;const{motionValue:r}=this.options;r&&r.updatedAt!==mt.now()&&this.tick(mt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(s=this.options).onStop)==null||c.call(s))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Lv(i);const{type:r=Oi,repeat:s=0,repeatDelay:c=0,repeatType:m,velocity:d=0}=i;let{keyframes:h}=i;const p=r||Oi;p!==Oi&&typeof h[0]!="number"&&(this.mixKeyframes=Ui(X1,Vv(h[0],h[1])),h=[0,100]);const g=p({...i,keyframes:h});m==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=od(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=g}updateTime(i){const r=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(i,r=!1){const{generator:s,totalDuration:c,mixKeyframes:m,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:z,type:O,onUpdate:L,finalKeyframe:U}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),r?this.currentTime=i:this.updateTime(i);const H=this.currentTime-g*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?H<0:H>c;this.currentTime=Math.max(H,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let G=this.currentTime,Z=s;if(b){const B=Math.min(this.currentTime,c)/h;let se=Math.floor(B),Ce=B%1;!Ce&&B>=1&&(Ce=1),Ce===1&&se--,se=Math.min(se,b+1),!!(se%2)&&(S==="reverse"?(Ce=1-Ce,z&&(Ce-=z/h)):S==="mirror"&&(Z=d)),G=ia(0,1,Ce)*h}const Y=X?{done:!1,value:y[0]}:Z.next(G);m&&(Y.value=m(Y.value));let{done:ie}=Y;!X&&p!==null&&(ie=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ie);return F&&O!==Ec&&(Y.value=id(y,this.options,U,this.speed)),L&&L(Y.value),F&&this.finish(),Y}then(i,r){return this.finished.then(i,r)}get duration(){return kt(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+kt(i)}get time(){return kt(this.currentTime)}set time(i){var r;i=Wt(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),(r=this.driver)==null||r.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(mt.now());const r=this.playbackSpeed!==i;this.playbackSpeed=i,r&&(this.time=kt(this.currentTime))}play(){var c,m;if(this.isStopped)return;const{driver:i=N1,startTime:r}=this.options;this.driver||(this.driver=i(d=>this.tick(d))),(m=(c=this.options).onPlay)==null||m.call(c);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=r??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(mt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,r;this.notifyFinished(),this.teardown(),this.state="finished",(r=(i=this.options).onComplete)==null||r.call(i)}cancel(){var i,r;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(r=(i=this.options).onCancel)==null||r.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var r;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(r=this.driver)==null||r.stop(),i.observe(this)}}function J1(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const On=n=>n*180/Math.PI,Ac=n=>{const i=On(Math.atan2(n[1],n[0]));return Cc(i)},Z1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Ac,rotateZ:Ac,skewX:n=>On(Math.atan(n[1])),skewY:n=>On(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Cc=n=>(n=n%360,n<0&&(n+=360),n),Yp=Ac,Xp=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Jp=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),K1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Xp,scaleY:Jp,scale:n=>(Xp(n)+Jp(n))/2,rotateX:n=>Cc(On(Math.atan2(n[6],n[5]))),rotateY:n=>Cc(On(Math.atan2(-n[2],n[0]))),rotateZ:Yp,rotate:Yp,skewX:n=>On(Math.atan(n[4])),skewY:n=>On(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Mc(n){return n.includes("scale")?1:0}function Dc(n,i){if(!n||n==="none")return Mc(i);const r=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(r)s=K1,c=r;else{const h=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=Z1,c=h}if(!c)return Mc(i);const m=s[i],d=c[1].split(",").map(W1);return typeof m=="function"?m(d):d[m]}const F1=(n,i)=>{const{transform:r="none"}=getComputedStyle(n);return Dc(r,i)};function W1(n){return parseFloat(n.trim())}const No=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qo=new Set(No),Zp=n=>n===zo||n===ee,$1=new Set(["x","y","z"]),I1=No.filter(n=>!$1.has(n));function eT(n){const i=[];return I1.forEach(r=>{const s=n.getValue(r);s!==void 0&&(i.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),i}const on={width:({x:n},{paddingLeft:i="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(i)-parseFloat(r),height:({y:n},{paddingTop:i="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(i)-parseFloat(r),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Dc(i,"x"),y:(n,{transform:i})=>Dc(i,"y")};on.translateX=on.x;on.translateY=on.y;const Rn=new Set;let zc=!1,Nc=!1,qc=!1;function Uv(){if(Nc){const n=Array.from(Rn).filter(s=>s.needsMeasurement),i=new Set(n.map(s=>s.element)),r=new Map;i.forEach(s=>{const c=eT(s);c.length&&(r.set(s,c),s.render())}),n.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=r.get(s);c&&c.forEach(([m,d])=>{var h;(h=s.getValue(m))==null||h.set(d)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Nc=!1,zc=!1,Rn.forEach(n=>n.complete(qc)),Rn.clear()}function Hv(){Rn.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Nc=!0)})}function tT(){qc=!0,Hv(),Uv(),qc=!1}class ld{constructor(i,r,s,c,m,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=s,this.motionValue=c,this.element=m,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Rn.add(this),zc||(zc=!0,Re.read(Hv),Re.resolveKeyframes(Uv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:s,motionValue:c}=this;if(i[0]===null){const m=c==null?void 0:c.get(),d=i[i.length-1];if(m!==void 0)i[0]=m;else if(s&&r){const h=s.readValue(r,d);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=d),c&&m===void 0&&c.set(i[0])}J1(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Rn.delete(this)}cancel(){this.state==="scheduled"&&(Rn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const aT=n=>n.startsWith("--");function nT(n,i,r){aT(i)?n.style.setProperty(i,r):n.style[i]=r}const oT={};function Qv(n,i){const r=hv(n);return()=>oT[i]??r()}const iT=Qv(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Gv=Qv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ni=([n,i,r,s])=>`cubic-bezier(${n}, ${i}, ${r}, ${s})`,Kp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ni([0,.65,.55,1]),circOut:Ni([.55,0,1,.45]),backIn:Ni([.31,.01,.66,-.59]),backOut:Ni([.33,1.53,.69,.99])};function Pv(n,i){if(n)return typeof n=="function"?Gv()?_v(n,i):"ease-out":Cv(n)?Ni(n):Array.isArray(n)?n.map(r=>Pv(r,i)||Kp.easeOut):Kp[n]}function sT(n,i,r,{delay:s=0,duration:c=300,repeat:m=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const y={[i]:r};p&&(y.offset=p);const b=Pv(h,c);Array.isArray(b)&&(y.easing=b);const S={delay:s,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:m+1,direction:d==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),n.animate(y,S)}function kv(n){return typeof n=="function"&&"applyToOptions"in n}function rT({type:n,...i}){return kv(n)&&Gv()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class Yv extends sd{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:r,name:s,keyframes:c,pseudoElement:m,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=i;this.isPseudoElement=!!m,this.allowFlatten=d,this.options=i,Fc(typeof i.type!="string");const g=rT(i);this.animation=sT(r,s,c,g,m),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const y=id(c,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(y):nT(r,s,y),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,r;(r=(i=this.animation).finish)==null||r.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var r,s,c;const i=(r=this.options)==null?void 0:r.element;!this.isPseudoElement&&(i!=null&&i.isConnected)&&((c=(s=this.animation).commitStyles)==null||c.call(s))}get duration(){var r,s;const i=((s=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:s.call(r).duration)||0;return kt(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+kt(i)}get time(){return kt(Number(this.animation.currentTime)||0)}set time(i){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Wt(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&iT()?(this.animation.timeline=i,Yt):r(this)}}const Xv={anticipate:Tv,backInOut:Sv,circInOut:Ev};function lT(n){return n in Xv}function uT(n){typeof n.ease=="string"&&lT(n.ease)&&(n.ease=Xv[n.ease])}const rc=10;class cT extends Yv{constructor(i){uT(i),Lv(i),super(i),i.startTime!==void 0&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:r,onUpdate:s,onComplete:c,element:m,...d}=this.options;if(!r)return;if(i!==void 0){r.set(i);return}const h=new rd({...d,autoplay:!1}),p=Math.max(rc,mt.now()-this.startTime),g=ia(0,rc,p-rc);r.setWithVelocity(h.sample(Math.max(0,p-g)).value,h.sample(p).value,g),h.stop()}}const Fp=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&($t.test(n)||n==="0")&&!n.startsWith("url("));function dT(n){const i=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==i)return!0}function fT(n,i,r,s){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const m=n[n.length-1],d=Fp(c,i),h=Fp(m,i);return!d||!h?!1:dT(n)||(r==="spring"||kv(r))&&s}function Oc(n){n.duration=0,n.type="keyframes"}const mT=new Set(["opacity","clipPath","filter","transform"]),hT=hv(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function pT(n){var y;const{motionValue:i,name:r,repeatDelay:s,repeatType:c,damping:m,type:d}=n;if(!(((y=i==null?void 0:i.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=i.owner.getProps();return hT()&&r&&mT.has(r)&&(r!=="transform"||!g)&&!p&&!s&&c!=="mirror"&&m!==0&&d!=="inertia"}const gT=40;class vT extends sd{constructor({autoplay:i=!0,delay:r=0,type:s="keyframes",repeat:c=0,repeatDelay:m=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:y,...b}){var O;super(),this.stop=()=>{var L,U;this._animation&&(this._animation.stop(),(L=this.stopTimeline)==null||L.call(this)),(U=this.keyframeResolver)==null||U.cancel()},this.createdAt=mt.now();const S={autoplay:i,delay:r,type:s,repeat:c,repeatDelay:m,repeatType:d,name:p,motionValue:g,element:y,...b},z=(y==null?void 0:y.KeyframeResolver)||ld;this.keyframeResolver=new z(h,(L,U,H)=>this.onKeyframesResolved(L,U,S,!H),p,g,y),(O=this.keyframeResolver)==null||O.scheduleResolve()}onKeyframesResolved(i,r,s,c){var U,H;this.keyframeResolver=void 0;const{name:m,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:y}=s;this.resolvedAt=mt.now(),fT(i,m,d,h)||((Ma.instantAnimations||!p)&&(y==null||y(id(i,s,r))),i[0]=i[i.length-1],Oc(s),s.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>gT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...s,keyframes:i},z=!g&&pT(S),O=(H=(U=S.motionValue)==null?void 0:U.owner)==null?void 0:H.current,L=z?new cT({...S,element:O}):new rd(S);L.finished.then(()=>{this.notifyFinished()}).catch(Yt),this.pendingTimeline&&(this.stopTimeline=L.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=L}get finished(){return this._animation?this.animation.finished:this._finished}then(i,r){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),tT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}function Jv(n,i,r,s=0,c=1){const m=Array.from(n).sort((g,y)=>g.sortNodePosition(y)).indexOf(i),d=n.size,h=(d-1)*s;return typeof r=="function"?r(m,d):c===1?m*s:h-m*s}const yT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function bT(n){const i=yT.exec(n);if(!i)return[,];const[,r,s,c]=i;return[`--${r??s}`,c]}function Zv(n,i,r=1){const[s,c]=bT(n);if(!s)return;const m=window.getComputedStyle(i).getPropertyValue(s);if(m){const d=m.trim();return dv(d)?parseFloat(d):d}return ed(c)?Zv(c,i,r+1):c}const ST={type:"spring",stiffness:500,damping:25,restSpeed:10},TT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),xT={type:"keyframes",duration:.8},ET={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},AT=(n,{keyframes:i})=>i.length>2?xT:qo.has(n)?n.startsWith("scale")?TT(i[1]):ST:ET,CT=n=>n!==null;function MT(n,{repeat:i,repeatType:r="loop"},s){const c=n.filter(CT),m=i&&r!=="loop"&&i%2===1?0:c.length-1;return c[m]}function Kv(n,i){if(n!=null&&n.inherit&&i){const{inherit:r,...s}=n;return{...i,...s}}return n}function ud(n,i){const r=(n==null?void 0:n[i])??(n==null?void 0:n.default)??n;return r!==n?Kv(r,n):r}function DT({when:n,delay:i,delayChildren:r,staggerChildren:s,staggerDirection:c,repeat:m,repeatType:d,repeatDelay:h,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const cd=(n,i,r,s={},c,m)=>d=>{const h=ud(s,n)||{},p=h.delay||s.delay||0;let{elapsed:g=0}=s;g=g-Wt(p);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...h,delay:-g,onUpdate:S=>{i.set(S),h.onUpdate&&h.onUpdate(S)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:n,motionValue:i,element:m?void 0:c};DT(h)||Object.assign(y,AT(n,y)),y.duration&&(y.duration=Wt(y.duration)),y.repeatDelay&&(y.repeatDelay=Wt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Oc(y),y.delay===0&&(b=!0)),(Ma.instantAnimations||Ma.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(b=!0,Oc(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,b&&!m&&i.get()!==void 0){const S=MT(y.keyframes,h);if(S!==void 0){Re.update(()=>{y.onUpdate(S),y.onComplete()});return}}return h.isSync?new rd(y):new vT(y)};function Wp(n){const i=[{},{}];return n==null||n.values.forEach((r,s)=>{i[0][s]=r.get(),i[1][s]=r.getVelocity()}),i}function dd(n,i,r,s){if(typeof i=="function"){const[c,m]=Wp(s);i=i(r!==void 0?r:n.custom,c,m)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,m]=Wp(s);i=i(r!==void 0?r:n.custom,c,m)}return i}function Mo(n,i,r){const s=n.getProps();return dd(s,i,r!==void 0?r:s.custom,n)}const Fv=new Set(["width","height","top","left","right","bottom",...No]),$p=30,zT=n=>!isNaN(parseFloat(n));class NT{constructor(i,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var m;const c=mt.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((m=this.events.change)==null||m.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=mt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=zT(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new Wc);const s=this.events[i].add(r);return i==="change"?()=>{s(),Re.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=mt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>$p)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,$p);return pv(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,r;(i=this.dependents)==null||i.clear(),(r=this.events.destroy)==null||r.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Do(n,i){return new NT(n,i)}const Rc=n=>Array.isArray(n);function qT(n,i,r){n.hasValue(i)?n.getValue(i).set(r):n.addValue(i,Do(r))}function OT(n){return Rc(n)?n[n.length-1]||0:n}function RT(n,i){const r=Mo(n,i);let{transitionEnd:s={},transition:c={},...m}=r||{};m={...m,...s};for(const d in m){const h=OT(m[d]);qT(n,d,h)}}const dt=n=>!!(n&&n.getVelocity);function jT(n){return!!(dt(n)&&n.add)}function jc(n,i){const r=n.getValue("willChange");if(jT(r))return r.add(i);if(!r&&Ma.WillChange){const s=new Ma.WillChange("auto");n.addValue("willChange",s),s.add(i)}}function fd(n){return n.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const wT="framerAppearId",Wv="data-"+fd(wT);function $v(n){return n.props[Wv]}function VT({protectedKeys:n,needsAnimating:i},r){const s=n.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,s}function Iv(n,i,{delay:r=0,transitionOverride:s,type:c}={}){let{transition:m,transitionEnd:d,...h}=i;const p=n.getDefaultTransition();m=m?Kv(m,p):p;const g=m==null?void 0:m.reduceMotion;s&&(m=s);const y=[],b=c&&n.animationState&&n.animationState.getState()[c];for(const S in h){const z=n.getValue(S,n.latestValues[S]??null),O=h[S];if(O===void 0||b&&VT(b,S))continue;const L={delay:r,...ud(m||{},S)},U=z.get();if(U!==void 0&&!z.isAnimating&&!Array.isArray(O)&&O===U&&!L.velocity)continue;let H=!1;if(window.MotionHandoffAnimation){const Z=$v(n);if(Z){const Y=window.MotionHandoffAnimation(Z,S,Re);Y!==null&&(L.startTime=Y,H=!0)}}jc(n,S);const X=g??n.shouldReduceMotion;z.start(cd(S,z,O,X&&Fv.has(S)?{type:!1}:L,n,H));const G=z.animation;G&&y.push(G)}if(d){const S=()=>Re.update(()=>{d&&RT(n,d)});y.length?Promise.all(y).then(S):S()}return y}function wc(n,i,r={}){var p;const s=Mo(n,i,r.type==="exit"?(p=n.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(c=r.transitionOverride);const m=s?()=>Promise.all(Iv(n,s,r)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:S}=c;return _T(n,i,g,y,b,S,r)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,y]=h==="beforeChildren"?[m,d]:[d,m];return g().then(()=>y())}else return Promise.all([m(),d(r.delay)])}function _T(n,i,r=0,s=0,c=0,m=1,d){const h=[];for(const p of n.variantChildren)p.notify("AnimationStart",i),h.push(wc(p,i,{...d,delay:r+(typeof s=="function"?0:s)+Jv(n.variantChildren,p,s,c,m)}).then(()=>p.notify("AnimationComplete",i)));return Promise.all(h)}function BT(n,i,r={}){n.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(m=>wc(n,m,r));s=Promise.all(c)}else if(typeof i=="string")s=wc(n,i,r);else{const c=typeof i=="function"?Mo(n,i,r.custom):i;s=Promise.all(Iv(n,c,r))}return s.then(()=>{n.notify("AnimationComplete",i)})}const LT={test:n=>n==="auto",parse:n=>n},ey=n=>i=>i.test(n),ty=[zo,ee,oa,an,m1,f1,LT],Ip=n=>ty.find(ey(n));function UT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||mv(n):!0}const HT=new Set(["brightness","contrast","saturate","opacity"]);function QT(n){const[i,r]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[s]=r.match(td)||[];if(!s)return n;const c=r.replace(s,"");let m=HT.has(i)?1:0;return s!==r&&(m*=100),i+"("+m+c+")"}const GT=/\b([a-z-]*)\(.*?\)/gu,Vc={...$t,getAnimatableNone:n=>{const i=n.match(GT);return i?i.map(QT).join(" "):n}},_c={...$t,getAnimatableNone:n=>{const i=$t.parse(n);return $t.createTransformer(n)(i.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},eg={...zo,transform:Math.round},PT={rotate:an,rotateX:an,rotateY:an,rotateZ:an,scale:lr,scaleX:lr,scaleY:lr,scaleZ:lr,skew:an,skewX:an,skewY:an,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Vi,originX:Hp,originY:Hp,originZ:ee},md={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,inset:ee,insetBlock:ee,insetBlockStart:ee,insetBlockEnd:ee,insetInline:ee,insetInlineStart:ee,insetInlineEnd:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,paddingBlock:ee,paddingBlockStart:ee,paddingBlockEnd:ee,paddingInline:ee,paddingInlineStart:ee,paddingInlineEnd:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,marginBlock:ee,marginBlockStart:ee,marginBlockEnd:ee,marginInline:ee,marginInlineStart:ee,marginInlineEnd:ee,fontSize:ee,backgroundPositionX:ee,backgroundPositionY:ee,...PT,zIndex:eg,fillOpacity:Vi,strokeOpacity:Vi,numOctaves:eg},kT={...md,color:Ke,backgroundColor:Ke,outlineColor:Ke,fill:Ke,stroke:Ke,borderColor:Ke,borderTopColor:Ke,borderRightColor:Ke,borderBottomColor:Ke,borderLeftColor:Ke,filter:Vc,WebkitFilter:Vc,mask:_c,WebkitMask:_c},ay=n=>kT[n],YT=new Set([Vc,_c]);function ny(n,i){let r=ay(n);return YT.has(r)||(r=$t),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const XT=new Set(["auto","none","0"]);function JT(n,i,r){let s=0,c;for(;s<n.length&&!c;){const m=n[s];typeof m=="string"&&!XT.has(m)&&_i(m).values.length&&(c=n[s]),s++}if(c&&r)for(const m of i)n[m]=ny(r,c)}class ZT extends ld{constructor(i,r,s,c,m){super(i,r,s,c,m,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let y=0;y<i.length;y++){let b=i[y];if(typeof b=="string"&&(b=b.trim(),ed(b))){const S=Zv(b,r.current);S!==void 0&&(i[y]=S),y===i.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Fv.has(s)||i.length!==2)return;const[c,m]=i,d=Ip(c),h=Ip(m),p=Up(c),g=Up(m);if(p!==g&&on[s]){this.needsMeasurement=!0;return}if(d!==h)if(Zp(d)&&Zp(h))for(let y=0;y<i.length;y++){const b=i[y];typeof b=="string"&&(i[y]=parseFloat(b))}else on[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,s=[];for(let c=0;c<i.length;c++)(i[c]===null||UT(i[c]))&&s.push(c);s.length&&JT(i,s,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=on[s](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){var h;const{element:i,name:r,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const c=i.getValue(r);c&&c.jump(this.measuredOrigin,!1);const m=s.length-1,d=s[m];s[m]=on[r](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{i.getValue(p).set(g)}),this.resolveNoneKeyframes()}}const KT=new Set(["opacity","clipPath","filter","transform"]);function oy(n,i,r){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let s=document;const c=(r==null?void 0:r[n])??s.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n).filter(s=>s!=null)}const iy=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function Bc(n){return fv(n)&&"offsetHeight"in n}const{schedule:hd}=Mv(queueMicrotask,!1),Ft={x:!1,y:!1};function sy(){return Ft.x||Ft.y}function FT(n){return n==="x"||n==="y"?Ft[n]?null:(Ft[n]=!0,()=>{Ft[n]=!1}):Ft.x||Ft.y?null:(Ft.x=Ft.y=!0,()=>{Ft.x=Ft.y=!1})}function ry(n,i){const r=oy(n),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[r,c,()=>s.abort()]}function WT(n){return!(n.pointerType==="touch"||sy())}function $T(n,i,r={}){const[s,c,m]=ry(n,r);return s.forEach(d=>{let h=!1,p=!1,g;const y=()=>{d.removeEventListener("pointerleave",O)},b=U=>{g&&(g(U),g=void 0),y()},S=U=>{h=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),p&&(p=!1,b(U))},z=()=>{h=!0,window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",S,c)},O=U=>{if(U.pointerType!=="touch"){if(h){p=!0;return}b(U)}},L=U=>{if(!WT(U))return;p=!1;const H=i(d,U);typeof H=="function"&&(g=H,d.addEventListener("pointerleave",O,c))};d.addEventListener("pointerenter",L,c),d.addEventListener("pointerdown",z,c)}),m}const ly=(n,i)=>i?n===i?!0:ly(n,i.parentElement):!1,pd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,IT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ex(n){return IT.has(n.tagName)||n.isContentEditable===!0}const tx=new Set(["INPUT","SELECT","TEXTAREA"]);function ax(n){return tx.has(n.tagName)||n.isContentEditable===!0}const hr=new WeakSet;function tg(n){return i=>{i.key==="Enter"&&n(i)}}function lc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const nx=(n,i)=>{const r=n.currentTarget;if(!r)return;const s=tg(()=>{if(hr.has(r))return;lc(r,"down");const c=tg(()=>{lc(r,"up")}),m=()=>lc(r,"cancel");r.addEventListener("keyup",c,i),r.addEventListener("blur",m,i)});r.addEventListener("keydown",s,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),i)};function ag(n){return pd(n)&&!sy()}const ng=new WeakSet;function ox(n,i,r={}){const[s,c,m]=ry(n,r),d=h=>{const p=h.currentTarget;if(!ag(h)||ng.has(h))return;hr.add(p),r.stopPropagation&&ng.add(h);const g=i(p,h),y=(z,O)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),hr.has(p)&&hr.delete(p),ag(z)&&typeof g=="function"&&g(z,{success:O})},b=z=>{y(z,p===window||p===document||r.useGlobalTarget||ly(p,z.target))},S=z=>{y(z,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",S,c)};return s.forEach(h=>{(r.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),Bc(h)&&(h.addEventListener("focus",g=>nx(g,c)),!ex(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),m}function gd(n){return fv(n)&&"ownerSVGElement"in n}const pr=new WeakMap;let nn;const uy=(n,i,r)=>(s,c)=>c&&c[0]?c[0][n+"Size"]:gd(s)&&"getBBox"in s?s.getBBox()[i]:s[r],ix=uy("inline","width","offsetWidth"),sx=uy("block","height","offsetHeight");function rx({target:n,borderBoxSize:i}){var r;(r=pr.get(n))==null||r.forEach(s=>{s(n,{get width(){return ix(n,i)},get height(){return sx(n,i)}})})}function lx(n){n.forEach(rx)}function ux(){typeof ResizeObserver>"u"||(nn=new ResizeObserver(lx))}function cx(n,i){nn||ux();const r=oy(n);return r.forEach(s=>{let c=pr.get(s);c||(c=new Set,pr.set(s,c)),c.add(i),nn==null||nn.observe(s)}),()=>{r.forEach(s=>{const c=pr.get(s);c==null||c.delete(i),c!=null&&c.size||nn==null||nn.unobserve(s)})}}const gr=new Set;let xo;function dx(){xo=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};gr.forEach(i=>i(n))},window.addEventListener("resize",xo)}function fx(n){return gr.add(n),xo||dx(),()=>{gr.delete(n),!gr.size&&typeof xo=="function"&&(window.removeEventListener("resize",xo),xo=void 0)}}function og(n,i){return typeof n=="function"?fx(n):cx(n,i)}function mx(n){return gd(n)&&n.tagName==="svg"}const hx=[...ty,Ke,$t],px=n=>hx.find(ey(n)),ig=()=>({translate:0,scale:1,origin:0,originPoint:0}),Eo=()=>({x:ig(),y:ig()}),sg=()=>({min:0,max:0}),$e=()=>({x:sg(),y:sg()}),gx=new WeakMap;function qr(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Bi(n){return typeof n=="string"||Array.isArray(n)}const vd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],yd=["initial",...vd];function Or(n){return qr(n.animate)||yd.some(i=>Bi(n[i]))}function cy(n){return!!(Or(n)||n.variants)}function vx(n,i,r){for(const s in i){const c=i[s],m=r[s];if(dt(c))n.addValue(s,c);else if(dt(m))n.addValue(s,Do(c,{owner:n}));else if(m!==c)if(n.hasValue(s)){const d=n.getValue(s);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(s);n.addValue(s,Do(d!==void 0?d:c,{owner:n}))}}for(const s in r)i[s]===void 0&&n.removeValue(s);return i}const Lc={current:null},dy={current:!1},yx=typeof window<"u";function bx(){if(dy.current=!0,!!yx)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Lc.current=n.matches;n.addEventListener("change",i),i()}else Lc.current=!1}const rg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Er={};function fy(n){Er=n}function Sx(){return Er}class Tx{scrapeMotionValuesFromProps(i,r,s){return{}}constructor({parent:i,props:r,presenceContext:s,reducedMotionConfig:c,skipAnimations:m,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ld,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const z=mt.now();this.renderScheduledAt<z&&(this.renderScheduledAt=z,Re.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=r.initial?{...g}:{},this.renderState=y,this.parent=i,this.props=r,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=m,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Or(r),this.isVariantNode=cy(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...S}=this.scrapeMotionValuesFromProps(r,{},this);for(const z in S){const O=S[z];g[z]!==void 0&&dt(O)&&O.set(g[z])}}mount(i){var r,s;if(this.hasBeenMounted)for(const c in this.initialValues)(r=this.values.get(c))==null||r.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=i,gx.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,m)=>this.bindToMotionValue(m,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(dy.current||bx(),this.shouldReduceMotion=Lc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var i;this.projection&&this.projection.unmount(),sn(this.notifyUpdate),sn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(i=this.parent)==null||i.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const s=this.features[r];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,r){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),r.accelerate&&KT.has(i)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:y}=r.accelerate,b=new Yv({element:this.current,name:i,keyframes:h,times:p,ease:g,duration:Wt(y)}),S=d(b);this.valueSubscriptions.set(i,()=>{S(),b.cancel()});return}const s=qo.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=r.on("change",d=>{this.latestValues[i]=d,this.props.onUpdate&&Re.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{c(),m&&m(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Er){const r=Er[i];if(!r)continue;const{isEnabled:s,Feature:c}=r;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const m=this.features[i];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<rg.length;s++){const c=rg[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const m="on"+c,d=i[m];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=vx(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const s=this.values.get(i);r!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&r!==void 0&&(s=Do(r===null?void 0:r,{owner:this}),this.addValue(i,s)),s}readValue(i,r){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(dv(s)||mv(s))?s=parseFloat(s):!px(s)&&$t.test(r)&&(s=ny(i,r)),this.setBaseTarget(i,dt(s)?s.get():s)),dt(s)?s.get():s}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){var m;const{initial:r}=this.props;let s;if(typeof r=="string"||typeof r=="object"){const d=dd(this.props,r,(m=this.presenceContext)==null?void 0:m.custom);d&&(s=d[i])}if(r&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!dt(c)?c:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new Wc),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}scheduleRenderMicrotask(){hd.render(this.render)}}class my extends Tx{constructor(){super(...arguments),this.KeyframeResolver=ZT}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){const s=i.style;return s?s[r]:void 0}removeValueFromRenderState(i,{vars:r,style:s}){delete r[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;dt(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}class rn{constructor(i){this.isMounted=!1,this.node=i}update(){}}function hy({top:n,left:i,right:r,bottom:s}){return{x:{min:i,max:r},y:{min:n,max:s}}}function xx({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function Ex(n,i){if(!i)return n;const r=i({x:n.left,y:n.top}),s=i({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function uc(n){return n===void 0||n===1}function Uc({scale:n,scaleX:i,scaleY:r}){return!uc(n)||!uc(i)||!uc(r)}function Nn(n){return Uc(n)||py(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function py(n){return lg(n.x)||lg(n.y)}function lg(n){return n&&n!=="0%"}function Ar(n,i,r){const s=n-r,c=i*s;return r+c}function ug(n,i,r,s,c){return c!==void 0&&(n=Ar(n,c,s)),Ar(n,r,s)+i}function Hc(n,i=0,r=1,s,c){n.min=ug(n.min,i,r,s,c),n.max=ug(n.max,i,r,s,c)}function gy(n,{x:i,y:r}){Hc(n.x,i.translate,i.scale,i.originPoint),Hc(n.y,r.translate,r.scale,r.originPoint)}const cg=.999999999999,dg=1.0000000000001;function Ax(n,i,r,s=!1){const c=r.length;if(!c)return;i.x=i.y=1;let m,d;for(let h=0;h<c;h++){m=r[h],d=m.projectionDelta;const{visualElement:p}=m.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Co(n,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,gy(n,d)),s&&Nn(m.latestValues)&&Co(n,m.latestValues))}i.x<dg&&i.x>cg&&(i.x=1),i.y<dg&&i.y>cg&&(i.y=1)}function Ao(n,i){n.min=n.min+i,n.max=n.max+i}function fg(n,i,r,s,c=.5){const m=Le(n.min,n.max,c);Hc(n,i,r,m,s)}function Co(n,i){fg(n.x,i.x,i.scaleX,i.scale,i.originX),fg(n.y,i.y,i.scaleY,i.scale,i.originY)}function vy(n,i){return hy(Ex(n.getBoundingClientRect(),i))}function Cx(n,i,r){const s=vy(n,r),{scroll:c}=i;return c&&(Ao(s.x,c.offset.x),Ao(s.y,c.offset.y)),s}const Mx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Dx=No.length;function zx(n,i,r){let s="",c=!0;for(let m=0;m<Dx;m++){const d=No[m],h=n[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||r){const g=iy(h,md[d]);if(!p){c=!1;const y=Mx[d]||d;s+=`${y}(${g}) `}r&&(i[d]=g)}}return s=s.trim(),r?s=r(i,c?"":s):c&&(s="none"),s}function bd(n,i,r){const{style:s,vars:c,transformOrigin:m}=n;let d=!1,h=!1;for(const p in i){const g=i[p];if(qo.has(p)){d=!0;continue}else if(zv(p)){c[p]=g;continue}else{const y=iy(g,md[p]);p.startsWith("origin")?(h=!0,m[p]=y):s[p]=y}}if(i.transform||(d||r?s.transform=zx(i,n.transform,r):s.transform&&(s.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:y=0}=m;s.transformOrigin=`${p} ${g} ${y}`}}function yy(n,{style:i,vars:r},s,c){const m=n.style;let d;for(d in i)m[d]=i[d];c==null||c.applyProjectionStyles(m,s);for(d in r)m.setProperty(d,r[d])}function mg(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Ci={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(ee.test(n))n=parseFloat(n);else return n;const r=mg(n,i.target.x),s=mg(n,i.target.y);return`${r}% ${s}%`}},Nx={correct:(n,{treeScale:i,projectionDelta:r})=>{const s=n,c=$t.parse(n);if(c.length>5)return s;const m=$t.createTransformer(n),d=typeof c[0]!="number"?1:0,h=r.x.scale*i.x,p=r.y.scale*i.y;c[0+d]/=h,c[1+d]/=p;const g=Le(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),m(c)}},Qc={borderRadius:{...Ci,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ci,borderTopRightRadius:Ci,borderBottomLeftRadius:Ci,borderBottomRightRadius:Ci,boxShadow:Nx};function by(n,{layout:i,layoutId:r}){return qo.has(n)||n.startsWith("origin")||(i||r!==void 0)&&(!!Qc[n]||n==="opacity")}function Sd(n,i,r){var d;const s=n.style,c=i==null?void 0:i.style,m={};if(!s)return m;for(const h in s)(dt(s[h])||c&&dt(c[h])||by(h,n)||((d=r==null?void 0:r.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(m[h]=s[h]);return m}function qx(n){return window.getComputedStyle(n)}class Ox extends my{constructor(){super(...arguments),this.type="html",this.renderInstance=yy}readValueFromInstance(i,r){var s;if(qo.has(r))return(s=this.projection)!=null&&s.isProjecting?Mc(r):F1(i,r);{const c=qx(i),m=(zv(r)?c.getPropertyValue(r):c[r])||0;return typeof m=="string"?m.trim():m}}measureInstanceViewportBox(i,{transformPagePoint:r}){return vy(i,r)}build(i,r,s){bd(i,r,s.transformTemplate)}scrapeMotionValuesFromProps(i,r,s){return Sd(i,r,s)}}const Rx={offset:"stroke-dashoffset",array:"stroke-dasharray"},jx={offset:"strokeDashoffset",array:"strokeDasharray"};function wx(n,i,r=1,s=0,c=!0){n.pathLength=1;const m=c?Rx:jx;n[m.offset]=`${-s}`,n[m.array]=`${i} ${r}`}const Vx=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Sy(n,{attrX:i,attrY:r,attrScale:s,pathLength:c,pathSpacing:m=1,pathOffset:d=0,...h},p,g,y){if(bd(n,h,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:S}=n;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox);for(const z of Vx)b[z]!==void 0&&(S[z]=b[z],delete b[z]);i!==void 0&&(b.x=i),r!==void 0&&(b.y=r),s!==void 0&&(b.scale=s),c!==void 0&&wx(b,c,m,d,!1)}const Ty=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),xy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function _x(n,i,r,s){yy(n,i,void 0,s);for(const c in i.attrs)n.setAttribute(Ty.has(c)?c:fd(c),i.attrs[c])}function Ey(n,i,r){const s=Sd(n,i,r);for(const c in n)if(dt(n[c])||dt(i[c])){const m=No.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[m]=n[c]}return s}class Bx extends my{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$e}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(qo.has(r)){const s=ay(r);return s&&s.default||0}return r=Ty.has(r)?r:fd(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,s){return Ey(i,r,s)}build(i,r,s){Sy(i,r,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,r,s,c){_x(i,r,s,c)}mount(i){this.isSVGTag=xy(i.tagName),super.mount(i)}}const Lx=yd.length;function Ay(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?Ay(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const i={};for(let r=0;r<Lx;r++){const s=yd[r],c=n.props[s];(Bi(c)||c===!1)&&(i[s]=c)}return i}function Cy(n,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==n.length)return!1;for(let s=0;s<r;s++)if(i[s]!==n[s])return!1;return!0}const Ux=[...vd].reverse(),Hx=vd.length;function Qx(n){return i=>Promise.all(i.map(({animation:r,options:s})=>BT(n,r,s)))}function Gx(n){let i=Qx(n),r=hg(),s=!0;const c=p=>(g,y)=>{var S;const b=Mo(n,y,p==="exit"?(S=n.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:z,transitionEnd:O,...L}=b;g={...g,...L,...O}}return g};function m(p){i=p(n)}function d(p){const{props:g}=n,y=Ay(n.parent)||{},b=[],S=new Set;let z={},O=1/0;for(let U=0;U<Hx;U++){const H=Ux[U],X=r[H],G=g[H]!==void 0?g[H]:y[H],Z=Bi(G),Y=H===p?X.isActive:null;Y===!1&&(O=U);let ie=G===y[H]&&G!==g[H]&&Z;if(ie&&s&&n.manuallyAnimateOnMount&&(ie=!1),X.protectedKeys={...z},!X.isActive&&Y===null||!G&&!X.prevProp||qr(G)||typeof G=="boolean")continue;if(H==="exit"&&X.isActive&&Y!==!0){X.prevResolvedValues&&(z={...z,...X.prevResolvedValues});continue}const F=Px(X.prevProp,G);let B=F||H===p&&X.isActive&&!ie&&Z||U>O&&Z,se=!1;const Ce=Array.isArray(G)?G:[G];let _e=Ce.reduce(c(H),{});Y===!1&&(_e={});const{prevResolvedValues:je={}}=X,pt={...je,..._e},ut=Q=>{B=!0,S.has(Q)&&(se=!0,S.delete(Q)),X.needsAnimating[Q]=!0;const W=n.getValue(Q);W&&(W.liveStyle=!1)};for(const Q in pt){const W=_e[Q],me=je[Q];if(z.hasOwnProperty(Q))continue;let P=!1;Rc(W)&&Rc(me)?P=!Cy(W,me):P=W!==me,P?W!=null?ut(Q):S.add(Q):W!==void 0&&S.has(Q)?ut(Q):X.protectedKeys[Q]=!0}X.prevProp=G,X.prevResolvedValues=_e,X.isActive&&(z={...z,..._e}),s&&n.blockInitialAnimation&&(B=!1);const Ge=ie&&F;B&&(!Ge||se)&&b.push(...Ce.map(Q=>{const W={type:H};if(typeof Q=="string"&&s&&!Ge&&n.manuallyAnimateOnMount&&n.parent){const{parent:me}=n,P=Mo(me,Q);if(me.enteringChildren&&P){const{delayChildren:A}=P.transition||{};W.delay=Jv(me.enteringChildren,n,A)}}return{animation:Q,options:W}}))}if(S.size){const U={};if(typeof g.initial!="boolean"){const H=Mo(n,Array.isArray(g.initial)?g.initial[0]:g.initial);H&&H.transition&&(U.transition=H.transition)}S.forEach(H=>{const X=n.getBaseTarget(H),G=n.getValue(H);G&&(G.liveStyle=!0),U[H]=X??null}),b.push({animation:U})}let L=!!b.length;return s&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(L=!1),s=!1,L?i(b):Promise.resolve()}function h(p,g){var b;if(r[p].isActive===g)return Promise.resolve();(b=n.variantChildren)==null||b.forEach(S=>{var z;return(z=S.animationState)==null?void 0:z.setActive(p,g)}),r[p].isActive=g;const y=d(p);for(const S in r)r[S].protectedKeys={};return y}return{animateChanges:d,setActive:h,setAnimateFunction:m,getState:()=>r,reset:()=>{r=hg()}}}function Px(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!Cy(i,n):!1}function Dn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hg(){return{animate:Dn(!0),whileInView:Dn(),whileHover:Dn(),whileTap:Dn(),whileDrag:Dn(),whileFocus:Dn(),exit:Dn()}}function pg(n,i){n.min=i.min,n.max=i.max}function Kt(n,i){pg(n.x,i.x),pg(n.y,i.y)}function gg(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}const My=1e-4,kx=1-My,Yx=1+My,Dy=.01,Xx=0-Dy,Jx=0+Dy;function ht(n){return n.max-n.min}function Zx(n,i,r){return Math.abs(n-i)<=r}function vg(n,i,r,s=.5){n.origin=s,n.originPoint=Le(i.min,i.max,n.origin),n.scale=ht(r)/ht(i),n.translate=Le(r.min,r.max,n.origin)-n.originPoint,(n.scale>=kx&&n.scale<=Yx||isNaN(n.scale))&&(n.scale=1),(n.translate>=Xx&&n.translate<=Jx||isNaN(n.translate))&&(n.translate=0)}function Ri(n,i,r,s){vg(n.x,i.x,r.x,s?s.originX:void 0),vg(n.y,i.y,r.y,s?s.originY:void 0)}function yg(n,i,r){n.min=r.min+i.min,n.max=n.min+ht(i)}function Kx(n,i,r){yg(n.x,i.x,r.x),yg(n.y,i.y,r.y)}function bg(n,i,r){n.min=i.min-r.min,n.max=n.min+ht(i)}function Cr(n,i,r){bg(n.x,i.x,r.x),bg(n.y,i.y,r.y)}function Sg(n,i,r,s,c){return n-=i,n=Ar(n,1/r,s),c!==void 0&&(n=Ar(n,1/c,s)),n}function Fx(n,i=0,r=1,s=.5,c,m=n,d=n){if(oa.test(i)&&(i=parseFloat(i),i=Le(d.min,d.max,i/100)-d.min),typeof i!="number")return;let h=Le(m.min,m.max,s);n===m&&(h-=i),n.min=Sg(n.min,i,r,h,c),n.max=Sg(n.max,i,r,h,c)}function Tg(n,i,[r,s,c],m,d){Fx(n,i[r],i[s],i[c],i.scale,m,d)}const Wx=["x","scaleX","originX"],$x=["y","scaleY","originY"];function xg(n,i,r,s){Tg(n.x,i,Wx,r?r.x:void 0,s?s.x:void 0),Tg(n.y,i,$x,r?r.y:void 0,s?s.y:void 0)}function Eg(n){return n.translate===0&&n.scale===1}function zy(n){return Eg(n.x)&&Eg(n.y)}function Ag(n,i){return n.min===i.min&&n.max===i.max}function Ix(n,i){return Ag(n.x,i.x)&&Ag(n.y,i.y)}function Cg(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Ny(n,i){return Cg(n.x,i.x)&&Cg(n.y,i.y)}function Mg(n){return ht(n.x)/ht(n.y)}function Dg(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}function na(n){return[n("x"),n("y")]}function eE(n,i,r){let s="";const c=n.x.translate/i.x,m=n.y.translate/i.y,d=(r==null?void 0:r.z)||0;if((c||m||d)&&(s=`translate3d(${c}px, ${m}px, ${d}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:S,skewX:z,skewY:O}=r;g&&(s=`perspective(${g}px) ${s}`),y&&(s+=`rotate(${y}deg) `),b&&(s+=`rotateX(${b}deg) `),S&&(s+=`rotateY(${S}deg) `),z&&(s+=`skewX(${z}deg) `),O&&(s+=`skewY(${O}deg) `)}const h=n.x.scale*i.x,p=n.y.scale*i.y;return(h!==1||p!==1)&&(s+=`scale(${h}, ${p})`),s||"none"}const qy=["TopLeft","TopRight","BottomLeft","BottomRight"],tE=qy.length,zg=n=>typeof n=="string"?parseFloat(n):n,Ng=n=>typeof n=="number"||ee.test(n);function aE(n,i,r,s,c,m){c?(n.opacity=Le(0,r.opacity??1,nE(s)),n.opacityExit=Le(i.opacity??1,0,oE(s))):m&&(n.opacity=Le(i.opacity??1,r.opacity??1,s));for(let d=0;d<tE;d++){const h=`border${qy[d]}Radius`;let p=qg(i,h),g=qg(r,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||Ng(p)===Ng(g)?(n[h]=Math.max(Le(zg(p),zg(g),s),0),(oa.test(g)||oa.test(p))&&(n[h]+="%")):n[h]=g}(i.rotate||r.rotate)&&(n.rotate=Le(i.rotate||0,r.rotate||0,s))}function qg(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const nE=Oy(0,.5,xv),oE=Oy(.5,.95,Yt);function Oy(n,i,r){return s=>s<n?0:s>i?1:r(wi(n,i,s))}function iE(n,i,r){const s=dt(n)?n:Do(n);return s.start(cd("",s,i,r)),s.animation}function Li(n,i,r,s={passive:!0}){return n.addEventListener(i,r,s),()=>n.removeEventListener(i,r)}const sE=(n,i)=>n.depth-i.depth;class rE{constructor(){this.children=[],this.isDirty=!1}add(i){Kc(this.children,i),this.isDirty=!0}remove(i){br(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(sE),this.isDirty=!1,this.children.forEach(i)}}function lE(n,i){const r=mt.now(),s=({timestamp:c})=>{const m=c-r;m>=i&&(sn(s),n(m-i))};return Re.setup(s,!0),()=>sn(s)}function vr(n){return dt(n)?n.get():n}class uE{constructor(){this.members=[]}add(i){Kc(this.members,i);for(let r=this.members.length-1;r>=0;r--){const s=this.members[r];if(s===i||s===this.lead||s===this.prevLead)continue;const c=s.instance;c&&c.isConnected===!1&&s.isPresent!==!1&&!s.snapshot&&br(this.members,s)}i.scheduleRender()}remove(i){if(br(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){const r=this.members.findIndex(c=>i===c);if(r===0)return!1;let s;for(let c=r;c>=0;c--){const m=this.members[c],d=m.instance;if(m.isPresent!==!1&&(!d||d.isConnected!==!1)){s=m;break}}return s?(this.promote(s),!0):!1}promote(i,r){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender();const c=s.options.layoutDependency,m=i.options.layoutDependency;if(!(c!==void 0&&m!==void 0&&c===m)){const p=s.instance;p&&p.isConnected===!1&&!s.snapshot||(i.resumeFrom=s,r&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0))}const{crossfade:h}=i.options;h===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:r,resumingFrom:s}=i;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const yr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},cc=["","X","Y","Z"],cE=1e3;let dE=0;function dc(n,i,r,s){const{latestValues:c}=i;c[n]&&(r[n]=c[n],i.setStaticValue(n,0),s&&(s[n]=0))}function Ry(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const r=$v(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:m}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",Re,!(c||m))}const{parent:s}=n;s&&!s.hasCheckedOptimisedAppear&&Ry(s)}function jy({attachResizeListener:n,defaultParent:i,measureScroll:r,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(d={},h=i==null?void 0:i()){this.id=dE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(hE),this.nodes.forEach(yE),this.nodes.forEach(bE),this.nodes.forEach(pE)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new rE)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Wc),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=gd(d)&&!mx(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),n){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;Re.read(()=>{b=window.innerWidth}),n(d,()=>{const z=window.innerWidth;z!==b&&(b=z,this.root.updateBlockedByResize=!0,y&&y(),y=lE(S,250),yr.hasAnimatedSinceResize&&(yr.hasAnimatedSinceResize=!1,this.nodes.forEach(jg)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:z})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const O=this.options.transition||g.getDefaultTransition()||AE,{onLayoutAnimationStart:L,onLayoutAnimationComplete:U}=g.getProps(),H=!this.targetLayout||!Ny(this.targetLayout,z),X=!b&&S;if(this.options.layoutRoot||this.resumeFrom||X||b&&(H||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const G={...ud(O,"layout"),onPlay:L,onComplete:U};(g.shouldReduceMotion||this.options.layoutRoot)&&(G.delay=0,G.type=!1),this.startAnimation(G),this.setAnimationOrigin(y,X)}else b||jg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=z})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),sn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(SE),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ry(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Og);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Rg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(vE),this.nodes.forEach(fE),this.nodes.forEach(mE)):this.nodes.forEach(Rg),this.clearAllSnapshots();const h=mt.now();rt.delta=ia(0,1e3/60,h-rt.timestamp),rt.timestamp=h,rt.isProcessing=!0,ac.update.process(rt),ac.preRender.process(rt),ac.render.process(rt),rt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,hd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(gE),this.sharedNodes.forEach(TE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Re.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Re.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ht(this.snapshot.measuredBox.x)&&!ht(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=$e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!zy(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||Nn(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),CE(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return $e();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(ME))){const{scroll:y}=this.root;y&&(Ao(h.x,y.offset.x),Ao(h.y,y.offset.y))}return h}removeElementScroll(d){var p;const h=$e();if(Kt(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:b,options:S}=y;y!==this.root&&b&&S.layoutScroll&&(b.wasRoot&&Kt(h,d),Ao(h.x,b.offset.x),Ao(h.y,b.offset.y))}return h}applyTransform(d,h=!1){const p=$e();Kt(p,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Co(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Nn(y.latestValues)&&Co(p,y.latestValues)}return Nn(this.latestValues)&&Co(p,this.latestValues),p}removeTransform(d){const h=$e();Kt(h,d);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!Nn(g.latestValues))continue;Uc(g.latestValues)&&g.updateSnapshot();const y=$e(),b=g.measurePageBox();Kt(y,b),xg(h,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Nn(this.latestValues)&&xg(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==rt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var z;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(z=this.parent)!=null&&z.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=rt.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Kx(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),gy(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Uc(this.parent.latestValues)||py(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),Cr(this.relativeTargetOrigin,h,p),Kt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var O;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(O=this.parent)!=null&&O.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===rt.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Kt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;Ax(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=$e());const{target:z}=d;if(!z){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(gg(this.prevProjectionDelta.x,this.projectionDelta.x),gg(this.prevProjectionDelta.y,this.projectionDelta.y)),Ri(this.projectionDelta,this.layoutCorrected,z,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!Dg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Dg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",z))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Eo(),this.projectionDelta=Eo(),this.projectionDeltaWithTransform=Eo()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},b=Eo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const S=$e(),z=p?p.source:void 0,O=this.layout?this.layout.source:void 0,L=z!==O,U=this.getStack(),H=!U||U.members.length<=1,X=!!(L&&!H&&this.options.crossfade===!0&&!this.path.some(EE));this.animationProgress=0;let G;this.mixTargetDelta=Z=>{const Y=Z/1e3;wg(b.x,d.x,Y),wg(b.y,d.y,Y),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Cr(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),xE(this.relativeTarget,this.relativeTargetOrigin,S,Y),G&&Ix(this.relativeTarget,G)&&(this.isProjectionDirty=!1),G||(G=$e()),Kt(G,this.relativeTarget)),L&&(this.animationValues=y,aE(y,g,this.latestValues,Y,X,H)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(sn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Re.update(()=>{yr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Do(0)),this.motionValue.jump(0,!1),this.currentAnimation=iE(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(cE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:y}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&wy(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||$e();const b=ht(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+b;const S=ht(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+S}Kt(h,p),Co(h,y),Ri(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new uE),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&dc("z",d,g,this.animationValues);for(let y=0;y<cc.length;y++)dc(`rotate${cc[y]}`,d,g,this.animationValues),dc(`skew${cc[y]}`,d,g,this.animationValues);d.render();for(const y in g)d.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vr(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vr(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Nn(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=eE(this.projectionDeltaWithTransform,this.treeScale,y);p&&(b=p(y,b)),d.transform=b;const{x:S,y:z}=this.projectionDelta;d.transformOrigin=`${S.origin*100}% ${z.origin*100}% 0`,g.animationValues?d.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const O in Qc){if(y[O]===void 0)continue;const{correct:L,applyTo:U,isCSSVariable:H}=Qc[O],X=b==="none"?y[O]:L(y[O],g);if(U){const G=U.length;for(let Z=0;Z<G;Z++)d[U[Z]]=X}else H?this.options.visualElement.renderState.vars[O]=X:d[O]=X}this.options.layoutId&&(d.pointerEvents=g===this?vr(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Og),this.root.sharedNodes.clear()}}}function fE(n){n.updateLayout()}function mE(n){var r;const i=((r=n.resumeFrom)==null?void 0:r.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:c}=n.layout,{animationType:m}=n.options,d=i.source!==n.layout.source;m==="size"?na(b=>{const S=d?i.measuredBox[b]:i.layoutBox[b],z=ht(S);S.min=s[b].min,S.max=S.min+z}):wy(m,i.layoutBox,s)&&na(b=>{const S=d?i.measuredBox[b]:i.layoutBox[b],z=ht(s[b]);S.max=S.min+z,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+z)});const h=Eo();Ri(h,s,i.layoutBox);const p=Eo();d?Ri(p,n.applyTransform(c,!0),i.measuredBox):Ri(p,s,i.layoutBox);const g=!zy(h);let y=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:S,layout:z}=b;if(S&&z){const O=$e();Cr(O,i.layoutBox,S.layoutBox);const L=$e();Cr(L,s,z.layoutBox),Ny(O,L)||(y=!0),b.options.layoutRoot&&(n.relativeTarget=L,n.relativeTargetOrigin=O,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:i,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function hE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function pE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function gE(n){n.clearSnapshot()}function Og(n){n.clearMeasurements()}function Rg(n){n.isLayoutDirty=!1}function vE(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function jg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function yE(n){n.resolveTargetDelta()}function bE(n){n.calcProjection()}function SE(n){n.resetSkewAndRotation()}function TE(n){n.removeLeadSnapshot()}function wg(n,i,r){n.translate=Le(i.translate,0,r),n.scale=Le(i.scale,1,r),n.origin=i.origin,n.originPoint=i.originPoint}function Vg(n,i,r,s){n.min=Le(i.min,r.min,s),n.max=Le(i.max,r.max,s)}function xE(n,i,r,s){Vg(n.x,i.x,r.x,s),Vg(n.y,i.y,r.y,s)}function EE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const AE={duration:.45,ease:[.4,0,.1,1]},_g=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Bg=_g("applewebkit/")&&!_g("chrome/")?Math.round:Yt;function Lg(n){n.min=Bg(n.min),n.max=Bg(n.max)}function CE(n){Lg(n.x),Lg(n.y)}function wy(n,i,r){return n==="position"||n==="preserve-aspect"&&!Zx(Mg(i),Mg(r),.2)}function ME(n){var i;return n!==n.root&&((i=n.scroll)==null?void 0:i.wasRoot)}const DE=jy({attachResizeListener:(n,i)=>Li(n,"resize",i),measureScroll:()=>{var n,i;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((i=document.body)==null?void 0:i.scrollTop)||0}},checkIsScrollRoot:()=>!0}),fc={current:void 0},Vy=jy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!fc.current){const n=new DE({});n.mount(window),n.setOptions({layoutScroll:!0}),fc.current=n}return fc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Td=k.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Ug(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function zE(...n){return i=>{let r=!1;const s=n.map(c=>{const m=Ug(c,i);return!r&&typeof m=="function"&&(r=!0),m});if(r)return()=>{for(let c=0;c<s.length;c++){const m=s[c];typeof m=="function"?m():Ug(n[c],null)}}}}function NE(...n){return k.useCallback(zE(...n),n)}class qE extends k.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=r.offsetParent,c=Bc(s)&&s.offsetWidth||0,m=Bc(s)&&s.offsetHeight||0,d=this.props.sizeRef.current;d.height=r.offsetHeight||0,d.width=r.offsetWidth||0,d.top=r.offsetTop,d.left=r.offsetLeft,d.right=c-d.width-d.left,d.bottom=m-d.height-d.top}return null}componentDidUpdate(){}render(){return this.props.children}}function OE({children:n,isPresent:i,anchorX:r,anchorY:s,root:c,pop:m}){var S;const d=k.useId(),h=k.useRef(null),p=k.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=k.useContext(Td),y=((S=n.props)==null?void 0:S.ref)??(n==null?void 0:n.ref),b=NE(h,y);return k.useInsertionEffect(()=>{const{width:z,height:O,top:L,left:U,right:H,bottom:X}=p.current;if(i||m===!1||!h.current||!z||!O)return;const G=r==="left"?`left: ${U}`:`right: ${H}`,Z=s==="bottom"?`bottom: ${X}`:`top: ${L}`;h.current.dataset.motionPopId=d;const Y=document.createElement("style");g&&(Y.nonce=g);const ie=c??document.head;return ie.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${z}px !important;
            height: ${O}px !important;
            ${G}px !important;
            ${Z}px !important;
          }
        `),()=>{ie.contains(Y)&&ie.removeChild(Y)}},[i]),x.jsx(qE,{isPresent:i,childRef:h,sizeRef:p,pop:m,children:m===!1?n:k.cloneElement(n,{ref:b})})}const RE=({children:n,initial:i,isPresent:r,onExitComplete:s,custom:c,presenceAffectsLayout:m,mode:d,anchorX:h,anchorY:p,root:g})=>{const y=Zc(jE),b=k.useId();let S=!0,z=k.useMemo(()=>(S=!1,{id:b,initial:i,isPresent:r,custom:c,onExitComplete:O=>{y.set(O,!0);for(const L of y.values())if(!L)return;s&&s()},register:O=>(y.set(O,!1),()=>y.delete(O))}),[r,y,s]);return m&&S&&(z={...z}),k.useMemo(()=>{y.forEach((O,L)=>y.set(L,!1))},[r]),k.useEffect(()=>{!r&&!y.size&&s&&s()},[r]),n=x.jsx(OE,{pop:d==="popLayout",isPresent:r,anchorX:h,anchorY:p,root:g,children:n}),x.jsx(Nr.Provider,{value:z,children:n})};function jE(){return new Map}function _y(n=!0){const i=k.useContext(Nr);if(i===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:c}=i,m=k.useId();k.useEffect(()=>{if(n)return c(m)},[n]);const d=k.useCallback(()=>n&&s&&s(m),[m,s,n]);return!r&&s?[!1,d]:[!0]}const ur=n=>n.key||"";function Hg(n){const i=[];return k.Children.forEach(n,r=>{k.isValidElement(r)&&i.push(r)}),i}const xd=({children:n,custom:i,initial:r=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:m="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[y,b]=_y(d),S=k.useMemo(()=>Hg(n),[n]),z=d&&!y?[]:S.map(ur),O=k.useRef(!0),L=k.useRef(S),U=Zc(()=>new Map),H=k.useRef(new Set),[X,G]=k.useState(S),[Z,Y]=k.useState(S);cv(()=>{O.current=!1,L.current=S;for(let B=0;B<Z.length;B++){const se=ur(Z[B]);z.includes(se)?(U.delete(se),H.current.delete(se)):U.get(se)!==!0&&U.set(se,!1)}},[Z,z.length,z.join("-")]);const ie=[];if(S!==X){let B=[...S];for(let se=0;se<Z.length;se++){const Ce=Z[se],_e=ur(Ce);z.includes(_e)||(B.splice(se,0,Ce),ie.push(Ce))}return m==="wait"&&ie.length&&(B=ie),Y(Hg(B)),G(S),null}const{forceRender:F}=k.useContext(Jc);return x.jsx(x.Fragment,{children:Z.map(B=>{const se=ur(B),Ce=d&&!y?!1:S===Z||z.includes(se),_e=()=>{if(H.current.has(se))return;if(H.current.add(se),U.has(se))U.set(se,!0);else return;let je=!0;U.forEach(pt=>{pt||(je=!1)}),je&&(F==null||F(),Y(L.current),d&&(b==null||b()),s&&s())};return x.jsx(RE,{isPresent:Ce,initial:!O.current||r?void 0:!1,custom:i,presenceAffectsLayout:c,mode:m,root:g,onExitComplete:Ce?void 0:_e,anchorX:h,anchorY:p,children:B},se)})})},By=k.createContext({strict:!1}),Qg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Gg=!1;function wE(){if(Gg)return;const n={};for(const i in Qg)n[i]={isEnabled:r=>Qg[i].some(s=>!!r[s])};fy(n),Gg=!0}function Ly(){return wE(),Sx()}function VE(n){const i=Ly();for(const r in n)i[r]={...i[r],...n[r]};fy(i)}const _E=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Mr(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||_E.has(n)}let Uy=n=>!Mr(n);function BE(n){typeof n=="function"&&(Uy=i=>i.startsWith("on")?!Mr(i):n(i))}try{BE(require("@emotion/is-prop-valid").default)}catch{}function LE(n,i,r){const s={};for(const c in n)c==="values"&&typeof n.values=="object"||(Uy(c)||r===!0&&Mr(c)||!i&&!Mr(c)||n.draggable&&c.startsWith("onDrag"))&&(s[c]=n[c]);return s}const Rr=k.createContext({});function UE(n,i){if(Or(n)){const{initial:r,animate:s}=n;return{initial:r===!1||Bi(r)?r:void 0,animate:Bi(s)?s:void 0}}return n.inherit!==!1?i:{}}function HE(n){const{initial:i,animate:r}=UE(n,k.useContext(Rr));return k.useMemo(()=>({initial:i,animate:r}),[Pg(i),Pg(r)])}function Pg(n){return Array.isArray(n)?n.join(" "):n}const Ed=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Hy(n,i,r){for(const s in i)!dt(i[s])&&!by(s,r)&&(n[s]=i[s])}function QE({transformTemplate:n},i){return k.useMemo(()=>{const r=Ed();return bd(r,i,n),Object.assign({},r.vars,r.style)},[i])}function GE(n,i){const r=n.style||{},s={};return Hy(s,r,n),Object.assign(s,QE(n,i)),s}function PE(n,i){const r={},s=GE(n,i);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=s,r}const Qy=()=>({...Ed(),attrs:{}});function kE(n,i,r,s){const c=k.useMemo(()=>{const m=Qy();return Sy(m,i,xy(s),n.transformTemplate,n.style),{...m.attrs,style:{...m.style}}},[i]);if(n.style){const m={};Hy(m,n.style,n),c.style={...m,...c.style}}return c}const YE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ad(n){return typeof n!="string"||n.includes("-")?!1:!!(YE.indexOf(n)>-1||/[A-Z]/u.test(n))}function XE(n,i,r,{latestValues:s},c,m=!1,d){const p=(d??Ad(n)?kE:PE)(i,s,c,n),g=LE(i,typeof n=="string",m),y=n!==k.Fragment?{...g,...p,ref:r}:{},{children:b}=i,S=k.useMemo(()=>dt(b)?b.get():b,[b]);return k.createElement(n,{...y,children:S})}function JE({scrapeMotionValuesFromProps:n,createRenderState:i},r,s,c){return{latestValues:ZE(r,s,c,n),renderState:i()}}function ZE(n,i,r,s){const c={},m=s(n,{});for(const S in m)c[S]=vr(m[S]);let{initial:d,animate:h}=n;const p=Or(n),g=cy(n);i&&g&&!p&&n.inherit!==!1&&(d===void 0&&(d=i.initial),h===void 0&&(h=i.animate));let y=r?r.initial===!1:!1;y=y||d===!1;const b=y?h:d;if(b&&typeof b!="boolean"&&!qr(b)){const S=Array.isArray(b)?b:[b];for(let z=0;z<S.length;z++){const O=dd(n,S[z]);if(O){const{transitionEnd:L,transition:U,...H}=O;for(const X in H){let G=H[X];if(Array.isArray(G)){const Z=y?G.length-1:0;G=G[Z]}G!==null&&(c[X]=G)}for(const X in L)c[X]=L[X]}}}return c}const Gy=n=>(i,r)=>{const s=k.useContext(Rr),c=k.useContext(Nr),m=()=>JE(n,i,s,c);return r?m():Zc(m)},KE=Gy({scrapeMotionValuesFromProps:Sd,createRenderState:Ed}),FE=Gy({scrapeMotionValuesFromProps:Ey,createRenderState:Qy}),WE=Symbol.for("motionComponentSymbol");function $E(n,i,r){const s=k.useRef(r);k.useInsertionEffect(()=>{s.current=r});const c=k.useRef(null);return k.useCallback(m=>{var h;m&&((h=n.onMount)==null||h.call(n,m)),i&&(m?i.mount(m):i.unmount());const d=s.current;if(typeof d=="function")if(m){const p=d(m);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(m);else d&&(d.current=m)},[i])}const Py=k.createContext({});function So(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function IE(n,i,r,s,c,m){var G,Z;const{visualElement:d}=k.useContext(Rr),h=k.useContext(By),p=k.useContext(Nr),g=k.useContext(Td),y=g.reducedMotion,b=g.skipAnimations,S=k.useRef(null),z=k.useRef(!1);s=s||h.renderer,!S.current&&s&&(S.current=s(n,{visualState:i,parent:d,props:r,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:y,skipAnimations:b,isSVG:m}),z.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const O=S.current,L=k.useContext(Py);O&&!O.projection&&c&&(O.type==="html"||O.type==="svg")&&e2(S.current,r,c,L);const U=k.useRef(!1);k.useInsertionEffect(()=>{O&&U.current&&O.update(r,p)});const H=r[Wv],X=k.useRef(!!H&&!((G=window.MotionHandoffIsComplete)!=null&&G.call(window,H))&&((Z=window.MotionHasOptimisedAnimation)==null?void 0:Z.call(window,H)));return cv(()=>{z.current=!0,O&&(U.current=!0,window.MotionIsMounted=!0,O.updateFeatures(),O.scheduleRenderMicrotask(),X.current&&O.animationState&&O.animationState.animateChanges())}),k.useEffect(()=>{O&&(!X.current&&O.animationState&&O.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{var Y;(Y=window.MotionHandoffMarkAsComplete)==null||Y.call(window,H)}),X.current=!1),O.enteringChildren=void 0)}),O}function e2(n,i,r,s){const{layoutId:c,layout:m,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutCrossfade:y}=i;n.projection=new r(n.latestValues,i["data-framer-portal-id"]?void 0:ky(n.parent)),n.projection.setOptions({layoutId:c,layout:m,alwaysMeasureLayout:!!d||h&&So(h),visualElement:n,animationType:typeof m=="string"?m:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:p,layoutRoot:g})}function ky(n){if(n)return n.options.allowProjection!==!1?n.projection:ky(n.parent)}function mc(n,{forwardMotionProps:i=!1,type:r}={},s,c){s&&VE(s);const m=r?r==="svg":Ad(n),d=m?FE:KE;function h(g,y){let b;const S={...k.useContext(Td),...g,layoutId:t2(g)},{isStatic:z}=S,O=HE(g),L=d(g,z);if(!z&&uv){a2();const U=n2(S);b=U.MeasureLayout,O.visualElement=IE(n,L,S,c,U.ProjectionNode,m)}return x.jsxs(Rr.Provider,{value:O,children:[b&&O.visualElement?x.jsx(b,{visualElement:O.visualElement,...S}):null,XE(n,g,$E(L,O.visualElement,y),L,z,i,m)]})}h.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const p=k.forwardRef(h);return p[WE]=n,p}function t2({layoutId:n}){const i=k.useContext(Jc).id;return i&&n!==void 0?i+"-"+n:n}function a2(n,i){k.useContext(By).strict}function n2(n){const i=Ly(),{drag:r,layout:s}=i;if(!r&&!s)return{};const c={...r,...s};return{MeasureLayout:r!=null&&r.isEnabled(n)||s!=null&&s.isEnabled(n)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function o2(n,i){if(typeof Proxy>"u")return mc;const r=new Map,s=(m,d)=>mc(m,d,n,i),c=(m,d)=>s(m,d);return new Proxy(c,{get:(m,d)=>d==="create"?s:(r.has(d)||r.set(d,mc(d,void 0,n,i)),r.get(d))})}const i2=(n,i)=>i.isSVG??Ad(n)?new Bx(i):new Ox(i,{allowProjection:n!==k.Fragment});class s2 extends rn{constructor(i){super(i),i.animationState||(i.animationState=Gx(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();qr(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let r2=0;class l2 extends rn{constructor(){super(...arguments),this.id=r2++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);r&&!i&&c.then(()=>{r(this.id)})}mount(){const{register:i,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const u2={animation:{Feature:s2},exit:{Feature:l2}};function Gi(n){return{point:{x:n.pageX,y:n.pageY}}}const c2=n=>i=>pd(i)&&n(i,Gi(i));function ji(n,i,r,s){return Li(n,i,c2(r),s)}const Yy=({current:n})=>n?n.ownerDocument.defaultView:null,kg=(n,i)=>Math.abs(n-i);function d2(n,i){const r=kg(n.x,i.x),s=kg(n.y,i.y);return Math.sqrt(r**2+s**2)}const Yg=new Set(["auto","scroll"]);class Xy{constructor(i,r,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:m=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=z=>{this.handleScroll(z.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=pc(this.lastMoveEventInfo,this.history),O=this.startEvent!==null,L=d2(z.offset,{x:0,y:0})>=this.distanceThreshold;if(!O&&!L)return;const{point:U}=z,{timestamp:H}=rt;this.history.push({...U,timestamp:H});const{onStart:X,onMove:G}=this.handlers;O||(X&&X(this.lastMoveEvent,z),this.startEvent=this.lastMoveEvent),G&&G(this.lastMoveEvent,z)},this.handlePointerMove=(z,O)=>{this.lastMoveEvent=z,this.lastMoveEventInfo=hc(O,this.transformPagePoint),Re.update(this.updatePoint,!0)},this.handlePointerUp=(z,O)=>{this.end();const{onEnd:L,onSessionEnd:U,resumeAnimation:H}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&H&&H(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const X=pc(z.type==="pointercancel"?this.lastMoveEventInfo:hc(O,this.transformPagePoint),this.history);this.startEvent&&L&&L(z,X),U&&U(z,X)},!pd(i))return;this.dragSnapToOrigin=m,this.handlers=r,this.transformPagePoint=s,this.distanceThreshold=d,this.contextWindow=c||window;const p=Gi(i),g=hc(p,this.transformPagePoint),{point:y}=g,{timestamp:b}=rt;this.history=[{...y,timestamp:b}];const{onSessionStart:S}=r;S&&S(i,pc(g,this.history)),this.removeListeners=Ui(ji(this.contextWindow,"pointermove",this.handlePointerMove),ji(this.contextWindow,"pointerup",this.handlePointerUp),ji(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(i){let r=i.parentElement;for(;r;){const s=getComputedStyle(r);(Yg.has(s.overflowX)||Yg.has(s.overflowY))&&this.scrollPositions.set(r,{x:r.scrollLeft,y:r.scrollTop}),r=r.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const r=this.scrollPositions.get(i);if(!r)return;const s=i===window,c=s?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},m={x:c.x-r.x,y:c.y-r.y};m.x===0&&m.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(i,c),Re.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),sn(this.updatePoint)}}function hc(n,i){return i?{point:i(n.point)}:n}function Xg(n,i){return{x:n.x-i.x,y:n.y-i.y}}function pc({point:n},i){return{point:n,delta:Xg(n,Jy(i)),offset:Xg(n,f2(i)),velocity:m2(i,.1)}}function f2(n){return n[0]}function Jy(n){return n[n.length-1]}function m2(n,i){if(n.length<2)return{x:0,y:0};let r=n.length-1,s=null;const c=Jy(n);for(;r>=0&&(s=n[r],!(c.timestamp-s.timestamp>Wt(i)));)r--;if(!s)return{x:0,y:0};s===n[0]&&n.length>2&&c.timestamp-s.timestamp>Wt(i)*2&&(s=n[1]);const m=kt(c.timestamp-s.timestamp);if(m===0)return{x:0,y:0};const d={x:(c.x-s.x)/m,y:(c.y-s.y)/m};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function h2(n,{min:i,max:r},s){return i!==void 0&&n<i?n=s?Le(i,n,s.min):Math.max(n,i):r!==void 0&&n>r&&(n=s?Le(r,n,s.max):Math.min(n,r)),n}function Jg(n,i,r){return{min:i!==void 0?n.min+i:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function p2(n,{top:i,left:r,bottom:s,right:c}){return{x:Jg(n.x,r,c),y:Jg(n.y,i,s)}}function Zg(n,i){let r=i.min-n.min,s=i.max-n.max;return i.max-i.min<n.max-n.min&&([r,s]=[s,r]),{min:r,max:s}}function g2(n,i){return{x:Zg(n.x,i.x),y:Zg(n.y,i.y)}}function v2(n,i){let r=.5;const s=ht(n),c=ht(i);return c>s?r=wi(i.min,i.max-s,n.min):s>c&&(r=wi(n.min,n.max-c,i.min)),ia(0,1,r)}function y2(n,i){const r={};return i.min!==void 0&&(r.min=i.min-n.min),i.max!==void 0&&(r.max=i.max-n.min),r}const Gc=.35;function b2(n=Gc){return n===!1?n=0:n===!0&&(n=Gc),{x:Kg(n,"left","right"),y:Kg(n,"top","bottom")}}function Kg(n,i,r){return{min:Fg(n,i),max:Fg(n,r)}}function Fg(n,i){return typeof n=="number"?n:n[i]||0}const S2=new WeakMap;class T2{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:r=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const m=b=>{r&&this.snapToCursor(Gi(b).point),this.stopAnimation()},d=(b,S)=>{const{drag:z,dragPropagation:O,onDragStart:L}=this.getProps();if(z&&!O&&(this.openDragLock&&this.openDragLock(),this.openDragLock=FT(z),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),na(H=>{let X=this.getAxisMotionValue(H).get()||0;if(oa.test(X)){const{projection:G}=this.visualElement;if(G&&G.layout){const Z=G.layout.layoutBox[H];Z&&(X=ht(Z)*(parseFloat(X)/100))}}this.originPoint[H]=X}),L&&Re.update(()=>L(b,S),!1,!0),jc(this.visualElement,"transform");const{animationState:U}=this.visualElement;U&&U.setActive("whileDrag",!0)},h=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:z,dragDirectionLock:O,onDirectionLock:L,onDrag:U}=this.getProps();if(!z&&!this.openDragLock)return;const{offset:H}=S;if(O&&this.currentDirection===null){this.currentDirection=E2(H),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",S.point,H),this.updateAxis("y",S.point,H),this.visualElement.render(),U&&Re.update(()=>U(b,S),!1,!0)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new Xy(i,{onSessionStart:m,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:Yy(this.visualElement),element:this.visualElement.current})}stop(i,r){const s=i||this.latestPointerEvent,c=r||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!c||!s)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Re.postRender(()=>h(s,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,r,s){const{drag:c}=this.getProps();if(!s||!cr(i,c,this.currentDirection))return;const m=this.getAxisMotionValue(i);let d=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(d=h2(d,this.constraints[i],this.elastic[i])),m.set(d)}resolveConstraints(){var m;const{dragConstraints:i,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(m=this.visualElement.projection)==null?void 0:m.layout,c=this.constraints;i&&So(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=p2(s.layoutBox,i):this.constraints=!1,this.elastic=b2(r),c!==this.constraints&&!So(i)&&s&&this.constraints&&!this.hasMutatedConstraints&&na(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=y2(s.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!So(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const m=Cx(s,c.root,this.visualElement.getTransformPagePoint());let d=g2(c.layout.layoutBox,m);if(r){const h=r(xx(d));this.hasMutatedConstraints=!!h,h&&(d=hy(h))}return d}startAnimation(i){const{drag:r,dragMomentum:s,dragElastic:c,dragTransition:m,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=na(y=>{if(!cr(y,r,this.currentDirection))return;let b=p&&p[y]||{};d&&(b={min:0,max:0});const S=c?200:1e6,z=c?40:1e7,O={type:"inertia",velocity:s?i[y]:0,bounceStiffness:S,bounceDamping:z,timeConstant:750,restDelta:1,restSpeed:10,...m,...b};return this.startAxisValueAnimation(y,O)});return Promise.all(g).then(h)}startAxisValueAnimation(i,r){const s=this.getAxisMotionValue(i);return jc(this.visualElement,i),s.start(cd(i,s,0,r,this.visualElement,!1))}stopAnimation(){na(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[r];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){na(r=>{const{drag:s}=this.getProps();if(!cr(r,s,this.currentDirection))return;const{projection:c}=this.visualElement,m=this.getAxisMotionValue(r);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[r],p=m.get()||0;m.set(i[r]-Le(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!So(r)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};na(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=v2({min:p,max:p},this.constraints[d])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),na(d=>{if(!cr(d,i,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(Le(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;S2.set(this.visualElement,this);const i=this.visualElement.current,r=ji(i,"pointerdown",g=>{const{drag:y,dragListener:b=!0}=this.getProps(),S=g.target,z=S!==i&&ax(S);y&&b&&!z&&this.start(g)});let s;const c=()=>{const{dragConstraints:g}=this.getProps();So(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),s||(s=x2(i,g.current,()=>this.scalePositionWithinConstraints())))},{projection:m}=this.visualElement,d=m.addEventListener("measure",c);m&&!m.layout&&(m.root&&m.root.updateScroll(),m.updateLayout()),Re.read(c);const h=Li(window,"resize",()=>this.scalePositionWithinConstraints()),p=m.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(na(b=>{const S=this.getAxisMotionValue(b);S&&(this.originPoint[b]+=g[b].translate,S.set(S.get()+g[b].translate))}),this.visualElement.render())}));return()=>{h(),r(),d(),p&&p(),s&&s()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:m=!1,dragElastic:d=Gc,dragMomentum:h=!0}=i;return{...i,drag:r,dragDirectionLock:s,dragPropagation:c,dragConstraints:m,dragElastic:d,dragMomentum:h}}}function Wg(n){let i=!0;return()=>{if(i){i=!1;return}n()}}function x2(n,i,r){const s=og(n,Wg(r)),c=og(i,Wg(r));return()=>{s(),c()}}function cr(n,i,r){return(i===!0||i===n)&&(r===null||r===n)}function E2(n,i=10){let r=null;return Math.abs(n.y)>i?r="y":Math.abs(n.x)>i&&(r="x"),r}class A2 extends rn{constructor(i){super(i),this.removeGroupControls=Yt,this.removeListeners=Yt,this.controls=new T2(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yt}update(){const{dragControls:i}=this.node.getProps(),{dragControls:r}=this.node.prevProps||{};i!==r&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const gc=n=>(i,r)=>{n&&Re.update(()=>n(i,r),!1,!0)};class C2 extends rn{constructor(){super(...arguments),this.removePointerDownListener=Yt}onPointerDown(i){this.session=new Xy(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Yy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:gc(i),onStart:gc(r),onMove:gc(s),onEnd:(m,d)=>{delete this.session,c&&Re.postRender(()=>c(m,d))}}}mount(){this.removePointerDownListener=ji(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vc=!1;class M2 extends k.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s,layoutId:c}=this.props,{projection:m}=i;m&&(r.group&&r.group.add(m),s&&s.register&&c&&s.register(m),vc&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),yr.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:s,drag:c,isPresent:m}=this.props,{projection:d}=s;return d&&(d.isPresent=m,i.layoutDependency!==r&&d.setOptions({...d.options,layoutDependency:r}),vc=!0,c||i.layoutDependency!==r||r===void 0||i.isPresent!==m?d.willUpdate():this.safeToRemove(),i.isPresent!==m&&(m?d.promote():d.relegate()||Re.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),hd.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:c}=i;vc=!0,c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Zy(n){const[i,r]=_y(),s=k.useContext(Jc);return x.jsx(M2,{...n,layoutGroup:s,switchLayoutGroup:k.useContext(Py),isPresent:i,safeToRemove:r})}const D2={pan:{Feature:C2},drag:{Feature:A2,ProjectionNode:Vy,MeasureLayout:Zy}};function $g(n,i,r){const{props:s}=n;n.animationState&&s.whileHover&&n.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,m=s[c];m&&Re.postRender(()=>m(i,Gi(i)))}class z2 extends rn{mount(){const{current:i}=this.node;i&&(this.unmount=$T(i,(r,s)=>($g(this.node,s,"Start"),c=>$g(this.node,c,"End"))))}unmount(){}}class N2 extends rn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ui(Li(this.node.current,"focus",()=>this.onFocus()),Li(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ig(n,i,r){const{props:s}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&s.whileTap&&n.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),m=s[c];m&&Re.postRender(()=>m(i,Gi(i)))}class q2 extends rn{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:r,propagate:s}=this.node.props;this.unmount=ox(i,(c,m)=>(Ig(this.node,m,"Start"),(d,{success:h})=>Ig(this.node,d,h?"End":"Cancel")),{useGlobalTarget:r,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const Pc=new WeakMap,yc=new WeakMap,O2=n=>{const i=Pc.get(n.target);i&&i(n)},R2=n=>{n.forEach(O2)};function j2({root:n,...i}){const r=n||document;yc.has(r)||yc.set(r,{});const s=yc.get(r),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(R2,{root:n,...i})),s[c]}function w2(n,i,r){const s=j2(i);return Pc.set(n,r),s.observe(n),()=>{Pc.delete(n),s.unobserve(n)}}const V2={some:0,all:1};class _2 extends rn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:r,margin:s,amount:c="some",once:m}=i,d={root:r?r.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:V2[c]},h=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,m&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=g?y:b;S&&S(p)};return w2(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(B2(i,r))&&this.startObserver()}unmount(){}}function B2({viewport:n={}},{viewport:i={}}={}){return r=>n[r]!==i[r]}const L2={inView:{Feature:_2},tap:{Feature:q2},focus:{Feature:N2},hover:{Feature:z2}},U2={layout:{ProjectionNode:Vy,MeasureLayout:Zy}},H2={...u2,...L2,...D2,...U2},Pi=o2(H2,i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),G2=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,r,s)=>s?s.toUpperCase():r.toLowerCase()),ev=n=>{const i=G2(n);return i.charAt(0).toUpperCase()+i.slice(1)},Ky=(...n)=>n.filter((i,r,s)=>!!i&&i.trim()!==""&&s.indexOf(i)===r).join(" ").trim(),P2=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=k.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:c="",children:m,iconNode:d,...h},p)=>k.createElement("svg",{ref:p,...k2,width:i,height:i,stroke:n,strokeWidth:s?Number(r)*24/Number(i):r,className:Ky("lucide",c),...!m&&!P2(h)&&{"aria-hidden":"true"},...h},[...d.map(([g,y])=>k.createElement(g,y)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=(n,i)=>{const r=k.forwardRef(({className:s,...c},m)=>k.createElement(Y2,{ref:m,iconNode:i,className:Ky(`lucide-${Q2(ev(n))}`,`lucide-${n}`,s),...c}));return r.displayName=ev(n),r};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],J2=lt("book",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Fy=lt("calendar",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],F2=lt("chevron-right",K2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Mi=lt("download",W2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],I2=lt("heart",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],tA=lt("instagram",eA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],Wy=lt("library",aA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],oA=lt("map-pin",nA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],sA=lt("menu",iA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],lA=lt("music-2",rA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],cA=lt("music",uA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],kc=lt("phone",dA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],mA=lt("plus",fA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],$y=lt("search",hA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],gA=lt("star",pA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Iy=lt("x",vA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],bA=lt("youtube",yA);function e0(n){var i,r,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(i=0;i<c;i++)n[i]&&(r=e0(n[i]))&&(s&&(s+=" "),s+=r)}else for(r in n)n[r]&&(s&&(s+=" "),s+=r);return s}function SA(){for(var n,i,r=0,s="",c=arguments.length;r<c;r++)(n=arguments[r])&&(i=e0(n))&&(s&&(s+=" "),s+=i);return s}const TA=(n,i)=>{const r=new Array(n.length+i.length);for(let s=0;s<n.length;s++)r[s]=n[s];for(let s=0;s<i.length;s++)r[n.length+s]=i[s];return r},xA=(n,i)=>({classGroupId:n,validator:i}),t0=(n=new Map,i=null,r)=>({nextPart:n,validators:i,classGroupId:r}),Dr="-",tv=[],EA="arbitrary..",AA=n=>{const i=MA(n),{conflictingClassGroups:r,conflictingClassGroupModifiers:s}=n;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return CA(d);const h=d.split(Dr),p=h[0]===""&&h.length>1?1:0;return a0(h,p,i)},getConflictingClassGroupIds:(d,h)=>{if(h){const p=s[d],g=r[d];return p?g?TA(g,p):p:g||tv}return r[d]||tv}}},a0=(n,i,r)=>{if(n.length-i===0)return r.classGroupId;const c=n[i],m=r.nextPart.get(c);if(m){const g=a0(n,i+1,m);if(g)return g}const d=r.validators;if(d===null)return;const h=i===0?n.join(Dr):n.slice(i).join(Dr),p=d.length;for(let g=0;g<p;g++){const y=d[g];if(y.validator(h))return y.classGroupId}},CA=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=n.slice(1,-1),r=i.indexOf(":"),s=i.slice(0,r);return s?EA+s:void 0})(),MA=n=>{const{theme:i,classGroups:r}=n;return DA(r,i)},DA=(n,i)=>{const r=t0();for(const s in n){const c=n[s];Cd(c,r,s,i)}return r},Cd=(n,i,r,s)=>{const c=n.length;for(let m=0;m<c;m++){const d=n[m];zA(d,i,r,s)}},zA=(n,i,r,s)=>{if(typeof n=="string"){NA(n,i,r);return}if(typeof n=="function"){qA(n,i,r,s);return}OA(n,i,r,s)},NA=(n,i,r)=>{const s=n===""?i:n0(i,n);s.classGroupId=r},qA=(n,i,r,s)=>{if(RA(n)){Cd(n(s),i,r,s);return}i.validators===null&&(i.validators=[]),i.validators.push(xA(r,n))},OA=(n,i,r,s)=>{const c=Object.entries(n),m=c.length;for(let d=0;d<m;d++){const[h,p]=c[d];Cd(p,n0(i,h),r,s)}},n0=(n,i)=>{let r=n;const s=i.split(Dr),c=s.length;for(let m=0;m<c;m++){const d=s[m];let h=r.nextPart.get(d);h||(h=t0(),r.nextPart.set(d,h)),r=h}return r},RA=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,jA=n=>{if(n<1)return{get:()=>{},set:()=>{}};let i=0,r=Object.create(null),s=Object.create(null);const c=(m,d)=>{r[m]=d,i++,i>n&&(i=0,s=r,r=Object.create(null))};return{get(m){let d=r[m];if(d!==void 0)return d;if((d=s[m])!==void 0)return c(m,d),d},set(m,d){m in r?r[m]=d:c(m,d)}}},Yc="!",av=":",wA=[],nv=(n,i,r,s,c)=>({modifiers:n,hasImportantModifier:i,baseClassName:r,maybePostfixModifierPosition:s,isExternal:c}),VA=n=>{const{prefix:i,experimentalParseClassName:r}=n;let s=c=>{const m=[];let d=0,h=0,p=0,g;const y=c.length;for(let L=0;L<y;L++){const U=c[L];if(d===0&&h===0){if(U===av){m.push(c.slice(p,L)),p=L+1;continue}if(U==="/"){g=L;continue}}U==="["?d++:U==="]"?d--:U==="("?h++:U===")"&&h--}const b=m.length===0?c:c.slice(p);let S=b,z=!1;b.endsWith(Yc)?(S=b.slice(0,-1),z=!0):b.startsWith(Yc)&&(S=b.slice(1),z=!0);const O=g&&g>p?g-p:void 0;return nv(m,z,S,O)};if(i){const c=i+av,m=s;s=d=>d.startsWith(c)?m(d.slice(c.length)):nv(wA,!1,d,void 0,!0)}if(r){const c=s;s=m=>r({className:m,parseClassName:c})}return s},_A=n=>{const i=new Map;return n.orderSensitiveModifiers.forEach((r,s)=>{i.set(r,1e6+s)}),r=>{const s=[];let c=[];for(let m=0;m<r.length;m++){const d=r[m],h=d[0]==="[",p=i.has(d);h||p?(c.length>0&&(c.sort(),s.push(...c),c=[]),s.push(d)):c.push(d)}return c.length>0&&(c.sort(),s.push(...c)),s}},BA=n=>({cache:jA(n.cacheSize),parseClassName:VA(n),sortModifiers:_A(n),...AA(n)}),LA=/\s+/,UA=(n,i)=>{const{parseClassName:r,getClassGroupId:s,getConflictingClassGroupIds:c,sortModifiers:m}=i,d=[],h=n.trim().split(LA);let p="";for(let g=h.length-1;g>=0;g-=1){const y=h[g],{isExternal:b,modifiers:S,hasImportantModifier:z,baseClassName:O,maybePostfixModifierPosition:L}=r(y);if(b){p=y+(p.length>0?" "+p:p);continue}let U=!!L,H=s(U?O.substring(0,L):O);if(!H){if(!U){p=y+(p.length>0?" "+p:p);continue}if(H=s(O),!H){p=y+(p.length>0?" "+p:p);continue}U=!1}const X=S.length===0?"":S.length===1?S[0]:m(S).join(":"),G=z?X+Yc:X,Z=G+H;if(d.indexOf(Z)>-1)continue;d.push(Z);const Y=c(H,U);for(let ie=0;ie<Y.length;++ie){const F=Y[ie];d.push(G+F)}p=y+(p.length>0?" "+p:p)}return p},HA=(...n)=>{let i=0,r,s,c="";for(;i<n.length;)(r=n[i++])&&(s=o0(r))&&(c&&(c+=" "),c+=s);return c},o0=n=>{if(typeof n=="string")return n;let i,r="";for(let s=0;s<n.length;s++)n[s]&&(i=o0(n[s]))&&(r&&(r+=" "),r+=i);return r},QA=(n,...i)=>{let r,s,c,m;const d=p=>{const g=i.reduce((y,b)=>b(y),n());return r=BA(g),s=r.cache.get,c=r.cache.set,m=h,h(p)},h=p=>{const g=s(p);if(g)return g;const y=UA(p,r);return c(p,y),y};return m=d,(...p)=>m(HA(...p))},GA=[],We=n=>{const i=r=>r[n]||GA;return i.isThemeGetter=!0,i},i0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,s0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,PA=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,kA=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,YA=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,XA=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,JA=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ZA=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,en=n=>PA.test(n),pe=n=>!!n&&!Number.isNaN(Number(n)),tn=n=>!!n&&Number.isInteger(Number(n)),bc=n=>n.endsWith("%")&&pe(n.slice(0,-1)),Ca=n=>kA.test(n),r0=()=>!0,KA=n=>YA.test(n)&&!XA.test(n),Md=()=>!1,FA=n=>JA.test(n),WA=n=>ZA.test(n),$A=n=>!I(n)&&!te(n),IA=n=>ln(n,c0,Md),I=n=>i0.test(n),zn=n=>ln(n,d0,KA),ov=n=>ln(n,rC,pe),eC=n=>ln(n,m0,r0),tC=n=>ln(n,f0,Md),iv=n=>ln(n,l0,Md),aC=n=>ln(n,u0,WA),dr=n=>ln(n,h0,FA),te=n=>s0.test(n),Di=n=>jn(n,d0),nC=n=>jn(n,f0),sv=n=>jn(n,l0),oC=n=>jn(n,c0),iC=n=>jn(n,u0),fr=n=>jn(n,h0,!0),sC=n=>jn(n,m0,!0),ln=(n,i,r)=>{const s=i0.exec(n);return s?s[1]?i(s[1]):r(s[2]):!1},jn=(n,i,r=!1)=>{const s=s0.exec(n);return s?s[1]?i(s[1]):r:!1},l0=n=>n==="position"||n==="percentage",u0=n=>n==="image"||n==="url",c0=n=>n==="length"||n==="size"||n==="bg-size",d0=n=>n==="length",rC=n=>n==="number",f0=n=>n==="family-name",m0=n=>n==="number"||n==="weight",h0=n=>n==="shadow",lC=()=>{const n=We("color"),i=We("font"),r=We("text"),s=We("font-weight"),c=We("tracking"),m=We("leading"),d=We("breakpoint"),h=We("container"),p=We("spacing"),g=We("radius"),y=We("shadow"),b=We("inset-shadow"),S=We("text-shadow"),z=We("drop-shadow"),O=We("blur"),L=We("perspective"),U=We("aspect"),H=We("ease"),X=We("animate"),G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Y=()=>[...Z(),te,I],ie=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],B=()=>[te,I,p],se=()=>[en,"full","auto",...B()],Ce=()=>[tn,"none","subgrid",te,I],_e=()=>["auto",{span:["full",tn,te,I]},tn,te,I],je=()=>[tn,"auto",te,I],pt=()=>["auto","min","max","fr",te,I],ut=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ge=()=>["start","end","center","stretch","center-safe","end-safe"],R=()=>["auto",...B()],Q=()=>[en,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...B()],W=()=>[en,"screen","full","dvw","lvw","svw","min","max","fit",...B()],me=()=>[en,"screen","full","lh","dvh","lvh","svh","min","max","fit",...B()],P=()=>[n,te,I],A=()=>[...Z(),sv,iv,{position:[te,I]}],_=()=>["no-repeat",{repeat:["","x","y","space","round"]}],J=()=>["auto","cover","contain",oC,IA,{size:[te,I]}],K=()=>[bc,Di,zn],oe=()=>["","none","full",g,te,I],le=()=>["",pe,Di,zn],Se=()=>["solid","dashed","dotted","double"],Ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],he=()=>[pe,bc,sv,iv],Da=()=>["","none",O,te,I],sa=()=>["none",pe,te,I],za=()=>["none",pe,te,I],wn=()=>[pe,te,I],jt=()=>[en,"full",...B()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ca],breakpoint:[Ca],color:[r0],container:[Ca],"drop-shadow":[Ca],ease:["in","out","in-out"],font:[$A],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ca],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ca],shadow:[Ca],spacing:["px",pe],text:[Ca],"text-shadow":[Ca],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",en,I,te,U]}],container:["container"],columns:[{columns:[pe,I,te,h]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Y()}],overflow:[{overflow:ie()}],"overflow-x":[{"overflow-x":ie()}],"overflow-y":[{"overflow-y":ie()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:se()}],"inset-x":[{"inset-x":se()}],"inset-y":[{"inset-y":se()}],start:[{"inset-s":se(),start:se()}],end:[{"inset-e":se(),end:se()}],"inset-bs":[{"inset-bs":se()}],"inset-be":[{"inset-be":se()}],top:[{top:se()}],right:[{right:se()}],bottom:[{bottom:se()}],left:[{left:se()}],visibility:["visible","invisible","collapse"],z:[{z:[tn,"auto",te,I]}],basis:[{basis:[en,"full","auto",h,...B()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[pe,en,"auto","initial","none",I]}],grow:[{grow:["",pe,te,I]}],shrink:[{shrink:["",pe,te,I]}],order:[{order:[tn,"first","last","none",te,I]}],"grid-cols":[{"grid-cols":Ce()}],"col-start-end":[{col:_e()}],"col-start":[{"col-start":je()}],"col-end":[{"col-end":je()}],"grid-rows":[{"grid-rows":Ce()}],"row-start-end":[{row:_e()}],"row-start":[{"row-start":je()}],"row-end":[{"row-end":je()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":pt()}],"auto-rows":[{"auto-rows":pt()}],gap:[{gap:B()}],"gap-x":[{"gap-x":B()}],"gap-y":[{"gap-y":B()}],"justify-content":[{justify:[...ut(),"normal"]}],"justify-items":[{"justify-items":[...Ge(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ge()]}],"align-content":[{content:["normal",...ut()]}],"align-items":[{items:[...Ge(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ge(),{baseline:["","last"]}]}],"place-content":[{"place-content":ut()}],"place-items":[{"place-items":[...Ge(),"baseline"]}],"place-self":[{"place-self":["auto",...Ge()]}],p:[{p:B()}],px:[{px:B()}],py:[{py:B()}],ps:[{ps:B()}],pe:[{pe:B()}],pbs:[{pbs:B()}],pbe:[{pbe:B()}],pt:[{pt:B()}],pr:[{pr:B()}],pb:[{pb:B()}],pl:[{pl:B()}],m:[{m:R()}],mx:[{mx:R()}],my:[{my:R()}],ms:[{ms:R()}],me:[{me:R()}],mbs:[{mbs:R()}],mbe:[{mbe:R()}],mt:[{mt:R()}],mr:[{mr:R()}],mb:[{mb:R()}],ml:[{ml:R()}],"space-x":[{"space-x":B()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":B()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],"inline-size":[{inline:["auto",...W()]}],"min-inline-size":[{"min-inline":["auto",...W()]}],"max-inline-size":[{"max-inline":["none",...W()]}],"block-size":[{block:["auto",...me()]}],"min-block-size":[{"min-block":["auto",...me()]}],"max-block-size":[{"max-block":["none",...me()]}],w:[{w:[h,"screen",...Q()]}],"min-w":[{"min-w":[h,"screen","none",...Q()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[d]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",r,Di,zn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,sC,eC]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",bc,I]}],"font-family":[{font:[nC,tC,i]}],"font-features":[{"font-features":[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,te,I]}],"line-clamp":[{"line-clamp":[pe,"none",te,ov]}],leading:[{leading:[m,...B()]}],"list-image":[{"list-image":["none",te,I]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",te,I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:P()}],"text-color":[{text:P()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Se(),"wavy"]}],"text-decoration-thickness":[{decoration:[pe,"from-font","auto",te,zn]}],"text-decoration-color":[{decoration:P()}],"underline-offset":[{"underline-offset":[pe,"auto",te,I]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te,I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te,I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:A()}],"bg-repeat":[{bg:_()}],"bg-size":[{bg:J()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},tn,te,I],radial:["",te,I],conic:[tn,te,I]},iC,aC]}],"bg-color":[{bg:P()}],"gradient-from-pos":[{from:K()}],"gradient-via-pos":[{via:K()}],"gradient-to-pos":[{to:K()}],"gradient-from":[{from:P()}],"gradient-via":[{via:P()}],"gradient-to":[{to:P()}],rounded:[{rounded:oe()}],"rounded-s":[{"rounded-s":oe()}],"rounded-e":[{"rounded-e":oe()}],"rounded-t":[{"rounded-t":oe()}],"rounded-r":[{"rounded-r":oe()}],"rounded-b":[{"rounded-b":oe()}],"rounded-l":[{"rounded-l":oe()}],"rounded-ss":[{"rounded-ss":oe()}],"rounded-se":[{"rounded-se":oe()}],"rounded-ee":[{"rounded-ee":oe()}],"rounded-es":[{"rounded-es":oe()}],"rounded-tl":[{"rounded-tl":oe()}],"rounded-tr":[{"rounded-tr":oe()}],"rounded-br":[{"rounded-br":oe()}],"rounded-bl":[{"rounded-bl":oe()}],"border-w":[{border:le()}],"border-w-x":[{"border-x":le()}],"border-w-y":[{"border-y":le()}],"border-w-s":[{"border-s":le()}],"border-w-e":[{"border-e":le()}],"border-w-bs":[{"border-bs":le()}],"border-w-be":[{"border-be":le()}],"border-w-t":[{"border-t":le()}],"border-w-r":[{"border-r":le()}],"border-w-b":[{"border-b":le()}],"border-w-l":[{"border-l":le()}],"divide-x":[{"divide-x":le()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":le()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Se(),"hidden","none"]}],"divide-style":[{divide:[...Se(),"hidden","none"]}],"border-color":[{border:P()}],"border-color-x":[{"border-x":P()}],"border-color-y":[{"border-y":P()}],"border-color-s":[{"border-s":P()}],"border-color-e":[{"border-e":P()}],"border-color-bs":[{"border-bs":P()}],"border-color-be":[{"border-be":P()}],"border-color-t":[{"border-t":P()}],"border-color-r":[{"border-r":P()}],"border-color-b":[{"border-b":P()}],"border-color-l":[{"border-l":P()}],"divide-color":[{divide:P()}],"outline-style":[{outline:[...Se(),"none","hidden"]}],"outline-offset":[{"outline-offset":[pe,te,I]}],"outline-w":[{outline:["",pe,Di,zn]}],"outline-color":[{outline:P()}],shadow:[{shadow:["","none",y,fr,dr]}],"shadow-color":[{shadow:P()}],"inset-shadow":[{"inset-shadow":["none",b,fr,dr]}],"inset-shadow-color":[{"inset-shadow":P()}],"ring-w":[{ring:le()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:P()}],"ring-offset-w":[{"ring-offset":[pe,zn]}],"ring-offset-color":[{"ring-offset":P()}],"inset-ring-w":[{"inset-ring":le()}],"inset-ring-color":[{"inset-ring":P()}],"text-shadow":[{"text-shadow":["none",S,fr,dr]}],"text-shadow-color":[{"text-shadow":P()}],opacity:[{opacity:[pe,te,I]}],"mix-blend":[{"mix-blend":[...Ie(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ie()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[pe]}],"mask-image-linear-from-pos":[{"mask-linear-from":he()}],"mask-image-linear-to-pos":[{"mask-linear-to":he()}],"mask-image-linear-from-color":[{"mask-linear-from":P()}],"mask-image-linear-to-color":[{"mask-linear-to":P()}],"mask-image-t-from-pos":[{"mask-t-from":he()}],"mask-image-t-to-pos":[{"mask-t-to":he()}],"mask-image-t-from-color":[{"mask-t-from":P()}],"mask-image-t-to-color":[{"mask-t-to":P()}],"mask-image-r-from-pos":[{"mask-r-from":he()}],"mask-image-r-to-pos":[{"mask-r-to":he()}],"mask-image-r-from-color":[{"mask-r-from":P()}],"mask-image-r-to-color":[{"mask-r-to":P()}],"mask-image-b-from-pos":[{"mask-b-from":he()}],"mask-image-b-to-pos":[{"mask-b-to":he()}],"mask-image-b-from-color":[{"mask-b-from":P()}],"mask-image-b-to-color":[{"mask-b-to":P()}],"mask-image-l-from-pos":[{"mask-l-from":he()}],"mask-image-l-to-pos":[{"mask-l-to":he()}],"mask-image-l-from-color":[{"mask-l-from":P()}],"mask-image-l-to-color":[{"mask-l-to":P()}],"mask-image-x-from-pos":[{"mask-x-from":he()}],"mask-image-x-to-pos":[{"mask-x-to":he()}],"mask-image-x-from-color":[{"mask-x-from":P()}],"mask-image-x-to-color":[{"mask-x-to":P()}],"mask-image-y-from-pos":[{"mask-y-from":he()}],"mask-image-y-to-pos":[{"mask-y-to":he()}],"mask-image-y-from-color":[{"mask-y-from":P()}],"mask-image-y-to-color":[{"mask-y-to":P()}],"mask-image-radial":[{"mask-radial":[te,I]}],"mask-image-radial-from-pos":[{"mask-radial-from":he()}],"mask-image-radial-to-pos":[{"mask-radial-to":he()}],"mask-image-radial-from-color":[{"mask-radial-from":P()}],"mask-image-radial-to-color":[{"mask-radial-to":P()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Z()}],"mask-image-conic-pos":[{"mask-conic":[pe]}],"mask-image-conic-from-pos":[{"mask-conic-from":he()}],"mask-image-conic-to-pos":[{"mask-conic-to":he()}],"mask-image-conic-from-color":[{"mask-conic-from":P()}],"mask-image-conic-to-color":[{"mask-conic-to":P()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:A()}],"mask-repeat":[{mask:_()}],"mask-size":[{mask:J()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",te,I]}],filter:[{filter:["","none",te,I]}],blur:[{blur:Da()}],brightness:[{brightness:[pe,te,I]}],contrast:[{contrast:[pe,te,I]}],"drop-shadow":[{"drop-shadow":["","none",z,fr,dr]}],"drop-shadow-color":[{"drop-shadow":P()}],grayscale:[{grayscale:["",pe,te,I]}],"hue-rotate":[{"hue-rotate":[pe,te,I]}],invert:[{invert:["",pe,te,I]}],saturate:[{saturate:[pe,te,I]}],sepia:[{sepia:["",pe,te,I]}],"backdrop-filter":[{"backdrop-filter":["","none",te,I]}],"backdrop-blur":[{"backdrop-blur":Da()}],"backdrop-brightness":[{"backdrop-brightness":[pe,te,I]}],"backdrop-contrast":[{"backdrop-contrast":[pe,te,I]}],"backdrop-grayscale":[{"backdrop-grayscale":["",pe,te,I]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[pe,te,I]}],"backdrop-invert":[{"backdrop-invert":["",pe,te,I]}],"backdrop-opacity":[{"backdrop-opacity":[pe,te,I]}],"backdrop-saturate":[{"backdrop-saturate":[pe,te,I]}],"backdrop-sepia":[{"backdrop-sepia":["",pe,te,I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":B()}],"border-spacing-x":[{"border-spacing-x":B()}],"border-spacing-y":[{"border-spacing-y":B()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",te,I]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[pe,"initial",te,I]}],ease:[{ease:["linear","initial",H,te,I]}],delay:[{delay:[pe,te,I]}],animate:[{animate:["none",X,te,I]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[L,te,I]}],"perspective-origin":[{"perspective-origin":Y()}],rotate:[{rotate:sa()}],"rotate-x":[{"rotate-x":sa()}],"rotate-y":[{"rotate-y":sa()}],"rotate-z":[{"rotate-z":sa()}],scale:[{scale:za()}],"scale-x":[{"scale-x":za()}],"scale-y":[{"scale-y":za()}],"scale-z":[{"scale-z":za()}],"scale-3d":["scale-3d"],skew:[{skew:wn()}],"skew-x":[{"skew-x":wn()}],"skew-y":[{"skew-y":wn()}],transform:[{transform:[te,I,"","none","gpu","cpu"]}],"transform-origin":[{origin:Y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:jt()}],"translate-x":[{"translate-x":jt()}],"translate-y":[{"translate-y":jt()}],"translate-z":[{"translate-z":jt()}],"translate-none":["translate-none"],accent:[{accent:P()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:P()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te,I]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mbs":[{"scroll-mbs":B()}],"scroll-mbe":[{"scroll-mbe":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pbs":[{"scroll-pbs":B()}],"scroll-pbe":[{"scroll-pbe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te,I]}],fill:[{fill:["none",...P()]}],"stroke-w":[{stroke:[pe,Di,zn,ov]}],stroke:[{stroke:["none",...P()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},uC=QA(lC);function zr(...n){return uC(SA(n))}const zi={pastor:{name:"Pastor Fredson Fagundes",phone:"74999829797"},elders:[{name:"Pb. Adevaldo Marques",phone:"7499795490",image:null},{name:"Pb. Elique Rios Filho",phone:"7499910068",image:null}],deacons:[{name:"Diácono Adonel Oliveira",phone:"7499076770",image:null},{name:"Diácono Antonio Rios",phone:"7499946901",image:null},{name:"Diácono Antonio Jacinto Filho",phone:"7499867018",image:null}],societies:[{name:"UPH - Pb. José dos Santos",phone:"7498119515",image:null},{name:"SAF - Osmária",phone:"7498132159",image:null}]},cC=[{month:0,day:1,name:"Suelivânia Santos da Silva Sena"},{month:0,day:7,name:"Ozileia da Silva Cunha Ferreira"},{month:0,day:12,name:"Euflorsina da Cunha Oliveira"},{month:0,day:20,name:"Bernadet"},{month:0,day:25,name:"Sidelcina da Cunha Oliveira"},{month:0,day:27,name:"Thayz Mota Cunha Franco"},{month:1,day:2,name:"Evanuzia"},{month:1,day:7,name:"Maria Betina Cunha Franco"},{month:1,day:10,name:"Pr. Fredson Fagundes Cerqueira"},{month:1,day:22,name:"Ir. Dete Rios"},{month:1,day:27,name:"Marilene Gonçalves da Silva"},{month:2,day:8,name:"Levi Rios Alves Fagundes"},{month:2,day:16,name:"Lucineide Oliveira Nascimento"},{month:2,day:18,name:"Jucielle"},{month:2,day:21,name:"Vitor Manoel da Cunha Ferreira"},{month:2,day:21,name:"Antônio Ferreira da Silva"},{month:2,day:26,name:"Osmária Sousa Rios"},{month:2,day:26,name:"Imarcélia"},{month:2,day:28,name:"Leonildio Ferreira dos Santos"},{month:2,day:31,name:"Irandir da Silva Rios"},{month:2,day:31,name:"Élida Suzart"},{month:2,day:3,name:"Nalva de Antoniel"},{month:2,day:23,name:"Patrícia Lopes rios cunha"},{month:3,day:7,name:"Pedro Leonel da Cunha Ferreira"},{month:3,day:13,name:"Berenice Maria da Silva Lopes"},{month:3,day:24,name:"Saullo Jacó Santos Cunha"},{month:3,day:25,name:"Elique Rios Filho"},{month:4,day:10,name:"Elisa Silva Sena"},{month:4,day:25,name:"Meire da Silva Almeida Evangelista"},{month:4,day:28,name:"Edelice"},{month:5,day:5,name:"Milton Pereira Rios"},{month:5,day:6,name:"Adevaldo Marques Rios"},{month:5,day:13,name:"Joelma Cristina Rios Lima Pinho"},{month:5,day:14,name:"Alzerita Santos de Souza"},{month:5,day:17,name:"Anderson Hangel Souza Franco"},{month:5,day:21,name:"Débora Rios Ribeiro"},{month:6,day:1,name:"Maria Cecília Cunha Franco"},{month:6,day:2,name:"Daniel Oliveira Santos"},{month:6,day:4,name:"Diana Rios Alves Fagundes"},{month:6,day:8,name:"Zack Samuel Barbosa Silva"},{month:6,day:19,name:"Ridair Cunha"},{month:6,day:20,name:"Welida Ticiana"},{month:6,day:27,name:"Elizânia Gonçalves da Silva Rios"},{month:7,day:4,name:"Uriel da Silva Cunha"},{month:7,day:20,name:"Izabel Rios Oliveira"},{month:8,day:1,name:"Jucirene Lopes da Silva Cunha"},{month:8,day:2,name:"Luana Lima Mendes Oliveira"},{month:8,day:12,name:"Jucineide Rios Oliveira"},{month:8,day:12,name:"Otoniel da Silva Cunha"},{month:8,day:13,name:"Antonio Rios"},{month:8,day:17,name:"Carlito Oliveira Cunha"},{month:8,day:24,name:"Fabiana de Carvalho Barbosa"},{month:8,day:25,name:"Adonel Oliveira"},{month:8,day:25,name:"Roberio Araújo Evangelista"},{month:8,day:30,name:"Jonatas Rios Guilherme"},{month:9,day:18,name:"Yasmim Barbosa Silva"},{month:9,day:25,name:"Zailde Rios Santos"},{month:9,day:26,name:"João Rodrigues de Souza (Nequinha)"},{month:9,day:29,name:"Maria Luzinete Barbosa Cerqueira"},{month:10,day:24,name:"Oseas da Silva Cunha"},{month:10,day:5,name:"Izabela Mota de Souza Cunha"},{month:10,day:9,name:"Joseane da Silva Souza"},{month:10,day:9,name:"Paulo Sérgio Vieira dos Santos"},{month:10,day:12,name:"José dos Santos Oliveira"},{month:10,day:12,name:"Liz Rios Alves Fagundes"},{month:11,day:2,name:"Arnóbio Lopes da Silva"},{month:11,day:8,name:"Adeílda Gomes de Oliveira"},{month:11,day:8,name:"Heloísa Barbosa Silva"},{month:11,day:13,name:"Antônio Jacinto Filho"},{month:11,day:14,name:"Ozuel da Silva Cunha"},{month:11,day:17,name:"Zenilda Maria da Silva Cunha"},{month:11,day:31,name:"Matheus Almeida Evangelista"}],rv=[{month:1,name:"Fevereiro",theme:"CHAMADOS AO ARREPENDIMENTO E COMUNHÃO",verse:"(Is 55:6) Buscai o SENHOR enquanto se pode achar, invocai-o enquanto está perto.",events:["01/02 (domingo): Reunião do Conselho com SAF e UPH","07/02 (sábado): Pregação no ponto – Nova Esperança","13–17/02: Retiro espiritual (Carnaval)","17/02 (terça): Reunião do Conselho","22/02 (domingo): Santa Ceia","25/02 (quarta): Santa Ceia no lar"]},{month:2,name:"Março",theme:"BUSCANDO A SANTIDADE",verse:"(1Pe 1.16) Porque escrito está: Sede santos, porque eu sou santo.",events:["Terças: Curso de formação após a Reunião de Oração","Quintas: Reunião de Doutrina: Pilares da Fé Reformada","Domingos: EBD, 10h - Carta aos Coríntios; Culto, 19h30 - Buscando a Santidade","07/03 (Sábado): Caminhada da Mulher (saída às 17h da porta da igreja, parada na casa de Meire para lanche e palestra)","14/03 (Sábado): Projeto Mão na Massa – Ourolândia","21/03 (Sábado): Nova Esperança","15/03 (Domingo): Culto e Santa Ceia - 19h30","23/03 (Segunda-feira): Reunião do Conselho e Reunião de Liderança - Casa do Pb. Elique Filho","25/03 (Quarta): Santa Ceia no Lar - Casa da Irmã Dalva","30/03 (Segunda-feira): 18h–20h Churrasco, Proza e Viola"]},{month:3,name:"Abril",theme:"A cruz e a redenção em Cristo",verse:"(Is 53:5) Mas ele foi traspassado pelas nossas transgressões e moído pelas nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",events:["11/04 (sábado): Pregação no ponto – Nova Esperança","Curso de Formação - Terças, após reunião de oração","05/04 (domingo): Café da ressureição e Culto da Páscoa com Santa Ceia","15/04 (quarta): Santa Ceia no lar","21/04 (terça): Reunião do Conselho","25/04 (sábado): Aniversário da UPH – Pregador: Pr. Nivaldo Cortes"]},{month:4,name:"Maio",theme:"Edificando a família sobre a Rocha",verse:"(Mt 7.24) Quem ouve minhas palavras e as pratica é tão sábio como a pessoa que constrói sua casa sobre uma rocha firme.",events:["03/05 (Dom): Uma família firmada na Rocha - Miss. Franco (IPB Piritiba)","05/05 (Ter): Oração nos lares (Família de Arnóbio e Lene) - Resp: UPH","10/05 (Dom): Uma família ajustada pelos princípios de Deus - Pb. Robério Evangelista","12/05 (Ter): Oração nos lares (Família de Geanhy e Irandir) - Resp: SAF","16/05 (Sáb): Culto Evangelístico (Nova Esperança) - Liturgia: SAF | Palavra: UPH","17/05 (Dom): Uma família que vence as tempestades - Miss. Abérico Macêdo (IPB Serrolândia)","19/05 (Ter): Oração nos lares (Família de Débora) - Resp: SAF","24/05 (Dom): Uma família que vence as tempestades - Pb. Gilson Rios (IPB Mairi)","26/05 (Ter): Oração nos lares (Fam. Ozuel, Juce, Uriel, Ciele, Luciano e Saulo)","31/05 (Dom): DIA DA FAMÍLIA IPVP - 10h EBD Especial | 19h Culto - Pr. Pedro (IPB Pintadas)"]},{month:5,name:"Junho",theme:"A família no centro do propósito de Deus",verse:"(Js 24:15) Eu e a minha casa serviremos ao SENHOR.",events:["06/06 (sábado): Reunião na casa do Pb. Adevaldo","12/07 (sexta): Culto evangelístico - Casas Populares","13/06 (sábado): Pregação no ponto – Nova Esperança","14/06 (domingo): Santa Ceia","16/06 (terça): Reunião do Conselho - após reunião de oração","17/06 (quarta): Santa Ceia no lar","20/06 (sábado): Jantar de Casais"]},{month:6,name:"Julho",theme:"Confiança no Senhor",verse:"(Sl 27:1) O SENHOR é a minha luz e a minha salvação; de quem terei medo?",events:["04/07 (sábado): Pregação no ponto – Nova Esperança","07/09 (Terça a Quinta): Reuniões de Consagração","12/07 (domingo - 08h): Entrega do Jejum da Consagração","12/07 (domingo - 19h30): Santa Ceia","15/07 (quarta): Santa Ceia no lar","17/07 (sexta): Culto evangelístico","18/07 (sábado): Churrasco, Proza e Viola - UPH de Serrolândia","21/07 (terça): Reunião do Conselho","30/07 (Sexta): Viagem do Retiro IPVP-2026"]},{month:7,name:"Agosto",theme:"Obedecendo ao Senhor na missão",verse:"(Jn 3:1) E veio a palavra do Senhor segunda vez a Jonas, dizendo: Levanta-te, e vai à grande cidade de Nínive.",events:["01 e 02/08 (domingo): Viagem - IPVP","08/08 (sábado): Pregação no ponto – Nova Esperança","09/08 (domingo): Santa Ceia","12/08 (quarta): Santa Ceia no lar","18/08 (terça): Reunião do Conselho","30/08 (domingo): Dia Missionário","28/08 (sexta): Culto evangelístico – Praça do cemitério"]},{month:8,name:"Setembro",theme:"Ele vem",verse:"(Ap 22:12) E eis que venho sem demora, e comigo está o galardão.",events:["05/09 (sábado): Pregação no ponto – Nova Esperança","13/09 (domingo): Santa Ceia","14/09 (segunda): Reunião de Liderança (Casa de Antonio Rios)","16/09 (quarta): Santa Ceia no lar","25/09 (sexta): Culto evangelístico – Alto da Nação","15/09 (terça): Reunião do Conselho","Dia da Bíblia (domingo)"]},{month:9,name:"Outubro",theme:"Reformando sempre",verse:"(Ef 2:8) Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus;",events:["03/10 (sábado): Pregação no ponto – Nova Esperança","04/10 (domingo): Reunião do Conselho com SAF e UPH","11/10 (domingo): Santa Ceia","Aniversário da SAF – Pastor convidado","14/10 (quarta): Santa Ceia no lar","31/10 (sexta): DIA DO EVANGÉLICO – PRAÇA PRINCIPAL"]},{month:10,name:"Novembro",theme:"Gratidão e fidelidade ao Senhor",verse:"(1Sm 7:12) Até aqui nos ajudou o SENHOR.",events:["02/11: Café teológico com o tema: 'E depois da morte...?'","07/11 (sábado): Pregação no ponto – Nova Esperança","12 e 13/11: Cultos evangelísticos na Praça da Nação e na Praça da Preguiça","14–15/11: 31 anos da IPVP – Pastor convidado e Santa Ceia","17/11 (terça): Reunião do Conselho","18/11 (quarta): Santa Ceia no lar","21–30/11: Ausência pastoral (curso em São Paulo)"]},{month:11,name:"Dezembro",theme:"O Cristo encarnado e a esperança eterna",verse:"(Jo 1:14) E o Verbo se fez carne e habitou entre nós.",events:["06/12 (domingo): Santa Ceia","07/12 (segunda): Reunião de Liderança (Casa pastoral)","09/12 (quarta): Santa Ceia no lar","11/12 (sexta): Culto evangelístico","15/12 (terça): Reunião do Conselho","20/12 (domingo) Manhã - Assembleia Geral Ordinária","Cultos de Natal e Encerramento do Ano"]}],dC=[{month:3,announcements:[{text:"Do Perdão ao Triunfo: As sete declarações de Cristo na Cruz.",image:"/aspalavrasdejesus_abril.jpg",isWeekly:!1},{text:"Celebração: UPH 27 Anos",image:"/uph27anos_abril.jpg",isWeekly:!1}]},{month:4,announcements:[{text:"Mês da Família: Edificando a família sobre a Rocha.",image:"/maio_mesdafamilia_2026.jpg",isWeekly:!1}]}],lv=[{title:"A Bênção (Gabriel Guedes)",lyrics:`Que o Senhor te abençoe
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
Escudo para os que n'Ele creem`}],ae={primary:"#163328",gold:"#D4B36D",bgLight:"#F0F5F3"},fC=["Gênesis","Êxodo","Levítico","Números","Deuteronômio","Josué","Juízes","Rute","1Samuel","2Samuel","1Reis","2Reis","1Crônicas","2Crônicas","Esdras","Neemias","Ester","Jó","Salmos","Provérbios","Eclesiastes","Cânticos","Isaías","Jeremias","Lamentações","Ezequiel","Daniel","Oseias","Joel","Amós","Obadias","Jonas","Miqueias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias","Mateus","Marcos","Lucas","João","Atos","Romanos","1Coríntios","2Coríntios","Gálatas","Efésios","Filipenses","Colossenses","1Tessalonicenses","2Tessalonicenses","1Timóteo","2Timóteo","Tito","Filemom","Hebreus","Tiago","1Pedro","2Pedro","1João","2João","3João","Judas","Apocalipse"],mC=n=>["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][n],hC=({size:n=24,className:i=""})=>x.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:i,children:x.jsx("path",{d:"M12 2v20M8 8h8"})}),pC=()=>{const[n,i]=k.useState(!1),[r,s]=k.useState(!1);k.useEffect(()=>{const m=()=>i(window.scrollY>50);return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const c=[{name:"Agenda",href:"#agenda"},{name:"Músicas",href:"#lyrics-search"},{name:"Liderança",href:"#leadership"},{name:"Bíblia",href:"#bible-quick"},{name:"Dízimos",href:"#giving"}];return x.jsxs("nav",{className:zr("fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",n?"bg-white shadow-lg py-3":"bg-white/90 backdrop-blur-sm border-b border-slate-100"),children:[x.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[x.jsxs("div",{className:"flex flex-col",children:[x.jsx("span",{className:"font-serif text-3xl font-bold leading-none",style:{color:ae.primary},children:"IPVP"}),x.jsx("span",{className:"text-[9px] uppercase font-bold text-slate-500",children:"Várzea do Poço-BA"})]}),x.jsx("div",{className:"hidden xl:flex gap-6 text-xs font-bold uppercase tracking-widest",children:c.map((m,d)=>x.jsx("a",{href:m.href,className:"hover:text-amber-600 transition-colors",style:{color:ae.primary},children:m.name},d))}),x.jsx("a",{href:"#contact",className:"hidden md:block px-5 py-2.5 text-white rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform",style:{backgroundColor:ae.gold},children:"CONTATO"}),x.jsx("button",{className:"xl:hidden p-2",style:{color:ae.primary},onClick:()=>s(!r),children:r?x.jsx(Iy,{size:24}):x.jsx(sA,{size:24})})]}),x.jsx(xd,{children:r&&x.jsx(Pi.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 xl:hidden",children:c.map(m=>x.jsx("a",{href:m.href,onClick:()=>s(!1),className:"text-lg font-serif border-b pb-2 font-bold",style:{color:ae.primary},children:m.name},m.name))})})]})},gC=()=>x.jsxs("section",{id:"home",className:"relative min-h-[60vh] flex items-center justify-center pt-20",children:[x.jsxs("div",{className:"absolute inset-0 z-0",children:[x.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:"url('/fundo-igreja.jpg')"}}),x.jsx("div",{className:"absolute inset-0 bg-white/40"}),x.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"})]}),x.jsxs("div",{className:"relative z-10 text-center px-6",children:[x.jsx(Pi.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-[100px] md:text-[140px] font-serif font-bold mb-0 leading-none",style:{color:ae.primary},children:"IPVP"}),x.jsx("p",{className:"text-lg md:text-2xl font-bold uppercase tracking-[0.3em]",style:{color:ae.primary},children:"Várzea do Poço-BA"})]})]}),vC=()=>{const[n,i]=k.useState(""),[r,s]=k.useState(null),c=Array.isArray(lv)?lv:[],m=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),d=n.length>2?c.filter(h=>`${h.title} ${h.lyrics}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(m)):[];return x.jsx("section",{id:"lyrics-search",className:"py-16 px-6",style:{backgroundColor:ae.bgLight},children:x.jsxs("div",{className:"max-w-4xl mx-auto",children:[x.jsxs("div",{className:"text-center mb-10",children:[x.jsx(lA,{size:48,style:{color:ae.gold},className:"mx-auto mb-4"}),x.jsx("h2",{className:"text-4xl font-serif font-bold",style:{color:ae.primary},children:"Louvores IPVP"}),x.jsx("p",{className:"text-slate-600 text-lg mt-2 font-medium",children:"Busque por título ou trecho da música."})]}),r?x.jsxs(Pi.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white rounded-[2rem] p-6 md:p-12 shadow-2xl border-t-8",style:{borderColor:ae.gold},children:[x.jsxs("div",{className:"flex justify-between items-start mb-10 border-b-2 border-slate-100 pb-6",children:[x.jsx("h3",{className:"text-3xl md:text-5xl font-serif font-bold leading-tight",style:{color:ae.primary},children:r.title}),x.jsx("button",{onClick:()=>{s(null),i("")},className:"p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 transition-colors ml-4 shrink-0",children:x.jsx(Iy,{size:28})})]}),x.jsx("pre",{className:"whitespace-pre-wrap font-sans text-2xl md:text-4xl leading-[1.8] text-slate-900 font-semibold tracking-wide",children:r.lyrics}),x.jsx("div",{className:"mt-12 text-center",children:x.jsx("button",{onClick:()=>{s(null),i("")},className:"px-8 py-4 rounded-full bg-slate-100 text-slate-600 font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all shadow-sm",children:"Voltar para busca"})})]}):x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"relative mb-8",children:[x.jsx($y,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-400",size:24}),x.jsx("input",{type:"text",placeholder:"Ex: 'Que o Senhor te abençoe'...",value:n,onChange:h=>i(h.target.value),className:"w-full pl-14 pr-6 py-5 rounded-2xl border-2 outline-none font-bold text-xl text-slate-800 shadow-sm",style:{borderColor:n?ae.gold:"#e2e8f0"}})]}),d.length>0&&x.jsx("div",{className:"bg-white rounded-3xl shadow-xl border-2 border-slate-100 overflow-hidden mb-8",children:d.map((h,p)=>x.jsxs("button",{onClick:()=>s(h),className:"w-full text-left px-8 py-5 hover:bg-slate-50 border-b-2 border-slate-50 last:border-0 font-extrabold text-xl text-slate-800 transition-colors flex items-center justify-between",children:[h.title,x.jsx(F2,{size:20,className:"text-slate-400"})]},p))}),n.length>2&&d.length===0&&x.jsx("p",{className:"text-center text-slate-400 italic",children:"Nenhum louvor encontrado com esse trecho."})]})]})})},yC=()=>{const[n,i]=k.useState({book:"João",cap:"3",ver:"16"}),r=s=>{s.preventDefault();const c=`https://www.bibliaonline.com.br/nvi/${n.book.toLowerCase()}/${n.cap}/${n.ver}`;window.open(c,"_blank")};return x.jsx("section",{id:"bible-quick",className:"py-12 px-6 bg-white",children:x.jsxs("div",{className:"max-w-4xl mx-auto bg-slate-50 rounded-[2rem] p-8 shadow-xl border-t-4",style:{borderColor:ae.gold},children:[x.jsxs("div",{className:"flex items-center gap-3 mb-6 justify-center md:justify-start",children:[x.jsx(J2,{className:"text-amber-600",size:32}),x.jsx("h2",{className:"text-2xl font-serif font-bold",style:{color:ae.primary},children:"Acesso Rápido às Escrituras"})]}),x.jsxs("form",{onSubmit:r,className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[x.jsxs("div",{className:"md:col-span-2",children:[x.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Livro"}),x.jsx("select",{value:n.book,onChange:s=>i({...n,book:s.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none",children:fC.map(s=>x.jsx("option",{value:s,children:s},s))})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Capítulo"}),x.jsx("input",{type:"number",value:n.cap,onChange:s=>i({...n,cap:s.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none"})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Versículo"}),x.jsx("input",{type:"number",value:n.ver,onChange:s=>i({...n,ver:s.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none"})]}),x.jsxs("button",{type:"submit",className:"md:col-span-4 py-4 rounded-xl text-white font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform",style:{backgroundColor:ae.primary},children:[x.jsx($y,{size:20})," LER NA BÍBLIA ONLINE"]})]})]})})},bC=()=>{const[n,i]=k.useState(new Date().getMonth()),r=k.useMemo(()=>rv.find(s=>s.month===n),[n]);return x.jsx("section",{id:"agenda",className:"py-16 px-6",style:{backgroundColor:ae.bgLight},children:x.jsxs("div",{className:"max-w-5xl mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-slate-200",children:[x.jsx("h2",{className:"text-3xl font-serif text-center mb-8 font-bold",style:{color:ae.primary},children:"Calendário Oficial 2026"}),x.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-10",children:rv.map(s=>x.jsx("button",{onClick:()=>i(s.month),className:zr("px-5 py-2.5 rounded-full text-xs font-bold border-2 transition-all",n===s.month?"text-white shadow-md":"bg-white text-slate-800 border-slate-200"),style:n===s.month?{backgroundColor:ae.primary,borderColor:ae.primary}:{},children:s.name},s.month))}),x.jsx(xd,{mode:"wait",children:r&&x.jsxs(Pi.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center",children:[x.jsxs("div",{className:"mb-8 border-b-2 border-slate-200 pb-6",children:[x.jsx("p",{className:"font-extrabold text-base uppercase mb-2",style:{color:ae.gold},children:r.theme}),x.jsxs("p",{className:"italic text-slate-800 font-serif font-bold text-lg max-w-2xl mx-auto",children:['"',r.verse,'"']})]}),x.jsx("div",{className:"grid md:grid-cols-2 gap-4 text-left",children:r.events.map((s,c)=>x.jsxs("div",{className:"flex items-start gap-3 p-5 bg-slate-50 rounded-xl border-l-4 shadow-sm",style:{borderColor:ae.gold},children:[x.jsx(Fy,{size:20,style:{color:ae.primary},className:"shrink-0 mt-0.5"}),x.jsx("p",{className:"text-slate-900 font-bold",children:s})]},c))})]},n)})]})})},SC=()=>{const n=dC.flatMap(i=>i.announcements);return x.jsx("section",{id:"avisos",className:"py-16 px-6 bg-white",children:x.jsxs("div",{className:"max-w-6xl mx-auto",children:[x.jsx("div",{className:"text-center mb-12",children:x.jsx("h2",{className:"text-4xl font-serif font-bold",style:{color:ae.primary},children:"Avisos da Igreja"})}),x.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:n.map((i,r)=>x.jsxs("div",{className:"bg-slate-50 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-100 flex flex-col",children:[i.image&&x.jsx("div",{className:"w-full bg-white flex justify-center items-center",children:x.jsx("img",{src:i.image,alt:"Aviso",className:"w-full h-auto object-contain max-h-[500px]"})}),x.jsxs("div",{className:"p-8 flex items-start gap-4",children:[x.jsx(gA,{size:28,style:{color:ae.gold},className:"shrink-0 mt-1"}),x.jsx("p",{className:"text-xl font-serif italic font-extrabold text-slate-900",children:i.text})]})]},r))})]})})},TC=()=>x.jsx("section",{id:"leadership",className:"py-16 px-6",style:{backgroundColor:ae.bgLight},children:x.jsxs("div",{className:"max-w-7xl mx-auto",children:[x.jsx("h2",{className:"text-4xl font-serif text-center mb-12 font-bold",style:{color:ae.primary},children:"Nossa Liderança"}),x.jsxs("div",{className:"mb-16",children:[x.jsx("h3",{className:"text-2xl font-bold uppercase tracking-widest text-center mb-8",style:{color:ae.gold},children:"Conselho"}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[x.jsxs("div",{className:"bg-white rounded-3xl p-8 text-center border-2 border-slate-100 shadow-xl",children:[x.jsx("div",{className:"aspect-square w-48 mx-auto rounded-full overflow-hidden mb-6 border-4",style:{borderColor:ae.gold},children:x.jsx("img",{src:"/foto-pastor.jpg",className:"w-full h-full object-cover",onError:n=>n.currentTarget.src="https://via.placeholder.com/200?text=Pastor"})}),x.jsx("h4",{className:"text-2xl font-bold font-serif mb-1",style:{color:ae.primary},children:zi.pastor.name}),x.jsx("p",{className:"text-sm uppercase text-slate-500 mb-6 font-extrabold tracking-widest",children:"Pastor Titular"}),x.jsxs("a",{href:`https://wa.me/55${zi.pastor.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm font-bold py-3 px-8 rounded-full text-white shadow-md hover:scale-105 transition-transform",style:{backgroundColor:ae.gold},children:[x.jsx(kc,{size:16})," WhatsApp"]})]}),zi.elders.map((n,i)=>x.jsxs("div",{className:"bg-white rounded-3xl p-8 text-center border-2 border-slate-100 shadow-xl",children:[x.jsx("div",{className:"aspect-square w-48 mx-auto rounded-full overflow-hidden mb-6 border-4",style:{borderColor:ae.primary},children:x.jsx("img",{src:n.name.includes("Adevaldo")?"/foto-adevaldo.jpg":"/foto-elique.jpg",className:"w-full h-full object-cover",onError:r=>r.currentTarget.src="https://via.placeholder.com/200?text=Presbítero"})}),x.jsx("h4",{className:"text-2xl font-bold font-serif mb-1",style:{color:ae.primary},children:n.name}),x.jsx("p",{className:"text-sm uppercase text-slate-500 mb-6 font-extrabold tracking-widest",children:"Presbítero"}),x.jsxs("a",{href:`https://wa.me/55${n.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm font-bold py-3 px-8 rounded-full text-white shadow-md hover:scale-105 transition-transform",style:{backgroundColor:ae.primary},children:[x.jsx(kc,{size:16})," WhatsApp"]})]},i))]})]}),x.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[x.jsxs("div",{children:[x.jsx("h3",{className:"text-2xl font-serif mb-6 border-b-2 pb-2 font-bold",style:{color:ae.primary,borderColor:ae.gold},children:"Junta Diaconal"}),x.jsx("div",{className:"space-y-3",children:zi.deacons.map((n,i)=>x.jsx("div",{className:"p-4 bg-white rounded-xl font-bold text-lg border-l-8 shadow-sm text-slate-900",style:{borderColor:ae.gold},children:n.name},i))})]}),x.jsxs("div",{children:[x.jsx("h3",{className:"text-2xl font-serif mb-6 border-b-2 pb-2 font-bold",style:{color:ae.primary,borderColor:ae.gold},children:"Sociedades Internas"}),x.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:zi.societies.map((n,i)=>x.jsx("div",{className:"p-4 rounded-xl text-white text-sm font-bold text-center shadow-md",style:{backgroundColor:ae.primary},children:n.name},i))})]})]})]})}),xC=()=>x.jsx("section",{id:"resources",className:"py-16 px-6 bg-white",children:x.jsxs("div",{className:"max-w-7xl mx-auto",children:[x.jsxs("div",{className:"text-center mb-10",children:[x.jsx("h2",{className:"text-4xl font-serif mb-4 font-bold",style:{color:ae.primary},children:"Crescimento Espiritual e Documentos"}),x.jsxs("div",{className:"flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-12 mt-8",children:[x.jsxs("a",{href:"/estatuto_ipvp_2026.pdf",download:"estatuto_ipvp_2026.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#334155"},children:[x.jsx(Mi,{size:16})," Estatuto IPVP 2026"]}),x.jsxs("a",{href:"/guia_trabalho_saf.pdf",download:!0,className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#be123c"},children:[x.jsx(Mi,{size:16})," Guia de Trabalho SAF"]}),x.jsxs("a",{href:"/guia_trabalho_uph.pdf",download:!0,className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#1d4ed8"},children:[x.jsx(Mi,{size:16})," Guia de Trabalho UPH"]}),x.jsxs("a",{href:"/manual_unificado.pdf",download:"manual_unificado.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:ae.gold},children:[x.jsx(Mi,{size:16})," Manual Unificado"]}),x.jsxs("a",{href:"/manual_presbiteriano_2025.pdf",download:"manual_presbiteriano_2025.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:ae.primary},children:[x.jsx(Mi,{size:16})," Manual da IPB"]})]})]}),x.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[x.jsxs("a",{href:"https://www.bible.com/pt/reading-plans",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[x.jsx(Fy,{size:40,style:{color:ae.gold},className:"mb-4"}),x.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Planos de Leitura"}),x.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Leitura bíblica diária organizada."})]}),x.jsxs("a",{href:"https://ipcuiaba.com.br/noticias/118538/hinario-novo-cantico",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[x.jsx(cA,{size:40,style:{color:ae.gold},className:"mb-4"}),x.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Novo Cântico"}),x.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Letras e partituras do hinário oficial."})]}),x.jsxs("a",{href:"https://drive.google.com/drive/folders/1NlippJmh36vxHQRFnPI8ivxSUfCHPP5D",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[x.jsx(Wy,{size:40,style:{color:ae.gold},className:"mb-4"}),x.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Estudos Bíblicos"}),x.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Material ministrado em nossa igreja."})]})]})]})}),EC=()=>{const n=new Date().getMonth(),i=k.useMemo(()=>cC.filter(s=>s.month===n).sort((s,c)=>s.day-c.day),[n]);let r="";return n===3?r="/niverabril2026.jpg":n===4&&(r="/nivermaio26.jpg"),x.jsx("section",{id:"birthdays",className:"py-20 px-6",style:{backgroundColor:ae.bgLight},children:x.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[x.jsxs("h2",{className:"text-4xl font-serif font-bold mb-12",style:{color:ae.primary},children:["Aniversariantes de ",mC(n)]}),x.jsx("div",{className:"flex flex-wrap justify-center gap-6 mb-16",children:i.map((s,c)=>x.jsxs("div",{className:"px-8 py-4 bg-white rounded-2xl shadow-md border-2 flex items-center gap-4",style:{borderColor:ae.gold},children:[x.jsx("span",{className:"font-serif text-3xl font-bold",style:{color:ae.primary},children:s.day}),x.jsx("span",{className:"font-bold text-slate-800 text-lg",children:s.name})]},c))}),r&&x.jsx("img",{src:r,className:"w-full rounded-[2.5rem] shadow-2xl border-8 border-white",onError:s=>s.currentTarget.style.display="none"})]})})},AC=()=>x.jsx("section",{className:"py-16 px-6 bg-white",children:x.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[x.jsx("h2",{className:"text-4xl font-serif mb-8 font-bold",style:{color:ae.primary},children:"Curso: Preparando-se para servir"}),x.jsx("div",{className:"relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 mb-8",children:x.jsx("iframe",{className:"w-full h-full",src:"https://www.youtube.com/embed/yAu3BtPWi4s",title:"Curso",frameBorder:"0",allowFullScreen:!0})})]})}),CC=()=>x.jsx("section",{id:"giving",className:"py-16 px-6",style:{backgroundColor:ae.bgLight},children:x.jsxs("div",{className:"max-w-4xl mx-auto text-center rounded-[3rem] p-12 text-white shadow-2xl border-4 border-white",style:{backgroundColor:ae.primary},children:[x.jsx(I2,{size:48,className:"mx-auto mb-6",style:{color:ae.gold}}),x.jsx("h2",{className:"text-4xl font-serif mb-6 font-bold",children:"Dízimos e Ofertas"}),x.jsx("div",{className:"bg-white/10 p-6 rounded-2xl border border-white/20 inline-block font-mono text-2xl font-bold tracking-widest mb-6",children:"PIX: 03.507.028/0001-08"}),x.jsx("p",{className:"text-base font-extrabold uppercase tracking-widest",style:{color:ae.gold},children:"Banco SICOOB | Ag: 3289 | CC: 118524"})]})}),MC=()=>{const[n,i]=k.useState({name:"",contact:"",message:""}),r=s=>{s.preventDefault();const c=`*Site*%0ANome: ${n.name}%0AContato: ${n.contact}%0A*Msg:* ${n.message}`;window.open(`https://wa.me/5574999829797?text=${c}`,"_blank")};return x.jsx("section",{id:"contact",className:"py-16 px-6 bg-white",children:x.jsxs("div",{className:"max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center",children:[x.jsxs("div",{children:[x.jsx("h2",{className:"text-4xl font-serif mb-8 font-bold",style:{color:ae.primary},children:"Fale Conosco"}),x.jsxs("form",{onSubmit:r,className:"space-y-5 bg-slate-50 p-10 rounded-[2rem] shadow-xl border border-slate-200",children:[x.jsx("input",{type:"text",required:!0,placeholder:"Seu Nome",className:"w-full p-5 rounded-xl border-2 outline-none font-bold text-slate-800 focus:border-amber-500",value:n.name,onChange:s=>i({...n,name:s.target.value})}),x.jsx("input",{type:"text",required:!0,placeholder:"Seu Telefone",className:"w-full p-5 rounded-xl border-2 outline-none font-bold text-slate-800 focus:border-amber-500",value:n.contact,onChange:s=>i({...n,contact:s.target.value})}),x.jsx("textarea",{required:!0,rows:4,placeholder:"Sua Mensagem...",className:"w-full p-5 rounded-xl border-2 resize-none outline-none font-bold text-slate-800 focus:border-amber-500",value:n.message,onChange:s=>i({...n,message:s.target.value})}),x.jsx("button",{type:"submit",className:"w-full py-5 text-white rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-transform",style:{backgroundColor:ae.primary},children:"Enviar via WhatsApp"})]})]}),x.jsxs("div",{className:"rounded-[2rem] h-[500px] text-white p-10 flex flex-col items-center justify-center shadow-2xl border-4 border-slate-100",style:{backgroundColor:ae.primary},children:[x.jsx(oA,{size:56,className:"mb-6",style:{color:ae.gold}}),x.jsx("h3",{className:"text-4xl font-serif mb-4 font-bold",children:"Localização"}),x.jsx("p",{className:"text-white/80 mb-10 max-w-xs text-center text-lg font-medium",children:"R. Durval Gama, 17, Várzea do Poço - BA."}),x.jsx("a",{href:"https://www.google.com/maps/search/?api=1&query=R.+Durval+Gama,+17,+Várzea+do+Poço+-+BA,+44715-000",target:"_blank",rel:"noreferrer",className:"px-10 py-4 bg-white rounded-full font-bold shadow-xl text-lg hover:scale-105 transition-transform",style:{color:ae.primary},children:"Ver no Mapa"})]})]})})},DC=()=>{const[n,i]=k.useState(!1),r=[{icon:x.jsx(bA,{size:24}),href:"https://www.youtube.com/@IPBVARZEADOPOCO",color:"bg-red-600"},{icon:x.jsx(tA,{size:24}),href:"https://www.instagram.com/ipvarzeapoco",color:"bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"},{icon:x.jsx(kc,{size:24}),href:"https://wa.me/5574999829797",color:"bg-green-500"},{icon:x.jsx(Wy,{size:24}),href:"https://script.google.com/macros/s/AKfycbxltiBSW-TkOr3pmPwANW_g4Futtu_MqIX2nwk3lYr6-Ak2Ic5QmGnPTR5AV3F74aR7/exec",color:"bg-slate-700"}];return x.jsxs("div",{className:"fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4",children:[x.jsx(xd,{children:n&&r.map((s,c)=>x.jsx(Pi.a,{href:s.href,target:"_blank",rel:"noreferrer",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:zr("w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform",s.color),children:s.icon},c))}),x.jsx("button",{onClick:()=>i(!n),className:"w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:scale-105",style:{backgroundColor:n?"#333":ae.gold},children:x.jsx(mA,{size:36,className:zr(n&&"rotate-45")})})]})};function zC(){return x.jsxs("div",{className:"min-h-screen bg-white font-sans text-slate-800",children:[x.jsx(pC,{}),x.jsx(gC,{}),x.jsx(yC,{}),x.jsx(vC,{}),x.jsx(bC,{}),x.jsx(SC,{}),x.jsx(TC,{}),x.jsx(xC,{}),x.jsx(EC,{}),x.jsx(AC,{}),x.jsx(CC,{}),x.jsx(MC,{}),x.jsxs("footer",{className:"py-12 text-center bg-slate-50 border-t-2 border-slate-200",children:[x.jsx(hC,{size:40,className:"mx-auto mb-4",style:{color:ae.gold}}),x.jsx("p",{className:"font-serif font-bold text-2xl mb-1",style:{color:ae.primary},children:"IP Várzea do Poço"}),x.jsx("p",{className:"text-sm font-medium text-slate-500",children:"© 2026 - Fidelidade à Palavra de Deus."})]}),x.jsx(DC,{})]})}JS.createRoot(document.getElementById("root")).render(x.jsx(k.StrictMode,{children:x.jsx(zC,{})}));
