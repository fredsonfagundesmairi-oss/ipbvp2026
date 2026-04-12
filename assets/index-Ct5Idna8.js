(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const d of m.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(c){if(c.ep)return;c.ep=!0;const m=s(c);fetch(c.href,m)}})();var Fu={exports:{}},Ei={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function HS(){if(Op)return Ei;Op=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(r,c,m){var d=null;if(m!==void 0&&(d=""+m),c.key!==void 0&&(d=""+c.key),"key"in c){m={};for(var h in c)h!=="key"&&(m[h]=c[h])}else m=c;return c=m.ref,{$$typeof:n,type:r,key:d,ref:c!==void 0?c:null,props:m}}return Ei.Fragment=i,Ei.jsx=s,Ei.jsxs=s,Ei}var wp;function GS(){return wp||(wp=1,Fu.exports=HS()),Fu.exports}var x=GS(),Wu={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function QS(){if(Rp)return ce;Rp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function z(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,U={};function H(A,_,J){this.props=A,this.context=_,this.refs=U,this.updater=J||w}H.prototype.isReactComponent={},H.prototype.setState=function(A,_){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,_,"setState")},H.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function X(){}X.prototype=H.prototype;function Q(A,_,J){this.props=A,this.context=_,this.refs=U,this.updater=J||w}var Z=Q.prototype=new X;Z.constructor=Q,L(Z,H.prototype),Z.isPureReactComponent=!0;var Y=Array.isArray;function ie(){}var W={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function se(A,_,J){var F=J.ref;return{$$typeof:n,type:A,key:_,ref:F!==void 0?F:null,props:J}}function Ce(A,_){return se(A.type,_,A.props)}function _e(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function qe(A){var _={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(J){return _[J]})}var pt=/\/+/g;function ut(A,_){return typeof A=="object"&&A!==null&&A.key!=null?qe(""+A.key):_.toString(36)}function Qe(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ie,ie):(A.status="pending",A.then(function(_){A.status==="pending"&&(A.status="fulfilled",A.value=_)},function(_){A.status==="pending"&&(A.status="rejected",A.reason=_)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function R(A,_,J,F,oe){var le=typeof A;(le==="undefined"||le==="boolean")&&(A=null);var Se=!1;if(A===null)Se=!0;else switch(le){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(A.$$typeof){case n:case i:Se=!0;break;case y:return Se=A._init,R(Se(A._payload),_,J,F,oe)}}if(Se)return oe=oe(A),Se=F===""?"."+ut(A,0):F,Y(oe)?(J="",Se!=null&&(J=Se.replace(pt,"$&/")+"/"),R(oe,_,J,"",function(Da){return Da})):oe!=null&&(_e(oe)&&(oe=Ce(oe,J+(oe.key==null||A&&A.key===oe.key?"":(""+oe.key).replace(pt,"$&/")+"/")+Se)),_.push(oe)),1;Se=0;var Ie=F===""?".":F+":";if(Y(A))for(var he=0;he<A.length;he++)F=A[he],le=Ie+ut(F,he),Se+=R(F,_,J,le,oe);else if(he=z(A),typeof he=="function")for(A=he.call(A),he=0;!(F=A.next()).done;)F=F.value,le=Ie+ut(F,he++),Se+=R(F,_,J,le,oe);else if(le==="object"){if(typeof A.then=="function")return R(Qe(A),_,J,F,oe);throw _=String(A),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return Se}function G(A,_,J){if(A==null)return A;var F=[],oe=0;return R(A,F,"","",function(le){return _.call(J,le,oe++)}),F}function $(A){if(A._status===-1){var _=A._result;_=_(),_.then(function(J){(A._status===0||A._status===-1)&&(A._status=1,A._result=J)},function(J){(A._status===0||A._status===-1)&&(A._status=2,A._result=J)}),A._status===-1&&(A._status=0,A._result=_)}if(A._status===1)return A._result.default;throw A._result}var me=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},P={map:G,forEach:function(A,_,J){G(A,function(){_.apply(this,arguments)},J)},count:function(A){var _=0;return G(A,function(){_++}),_},toArray:function(A){return G(A,function(_){return _})||[]},only:function(A){if(!_e(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ce.Activity=b,ce.Children=P,ce.Component=H,ce.Fragment=s,ce.Profiler=c,ce.PureComponent=Q,ce.StrictMode=r,ce.Suspense=p,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,ce.__COMPILER_RUNTIME={__proto__:null,c:function(A){return W.H.useMemoCache(A)}},ce.cache=function(A){return function(){return A.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(A,_,J){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var F=L({},A.props),oe=A.key;if(_!=null)for(le in _.key!==void 0&&(oe=""+_.key),_)!B.call(_,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&_.ref===void 0||(F[le]=_[le]);var le=arguments.length-2;if(le===1)F.children=J;else if(1<le){for(var Se=Array(le),Ie=0;Ie<le;Ie++)Se[Ie]=arguments[Ie+2];F.children=Se}return se(A.type,oe,F)},ce.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:m,_context:A},A},ce.createElement=function(A,_,J){var F,oe={},le=null;if(_!=null)for(F in _.key!==void 0&&(le=""+_.key),_)B.call(_,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(oe[F]=_[F]);var Se=arguments.length-2;if(Se===1)oe.children=J;else if(1<Se){for(var Ie=Array(Se),he=0;he<Se;he++)Ie[he]=arguments[he+2];oe.children=Ie}if(A&&A.defaultProps)for(F in Se=A.defaultProps,Se)oe[F]===void 0&&(oe[F]=Se[F]);return se(A,le,oe)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(A){return{$$typeof:h,render:A}},ce.isValidElement=_e,ce.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:$}},ce.memo=function(A,_){return{$$typeof:g,type:A,compare:_===void 0?null:_}},ce.startTransition=function(A){var _=W.T,J={};W.T=J;try{var F=A(),oe=W.S;oe!==null&&oe(J,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ie,me)}catch(le){me(le)}finally{_!==null&&J.types!==null&&(_.types=J.types),W.T=_}},ce.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},ce.use=function(A){return W.H.use(A)},ce.useActionState=function(A,_,J){return W.H.useActionState(A,_,J)},ce.useCallback=function(A,_){return W.H.useCallback(A,_)},ce.useContext=function(A){return W.H.useContext(A)},ce.useDebugValue=function(){},ce.useDeferredValue=function(A,_){return W.H.useDeferredValue(A,_)},ce.useEffect=function(A,_){return W.H.useEffect(A,_)},ce.useEffectEvent=function(A){return W.H.useEffectEvent(A)},ce.useId=function(){return W.H.useId()},ce.useImperativeHandle=function(A,_,J){return W.H.useImperativeHandle(A,_,J)},ce.useInsertionEffect=function(A,_){return W.H.useInsertionEffect(A,_)},ce.useLayoutEffect=function(A,_){return W.H.useLayoutEffect(A,_)},ce.useMemo=function(A,_){return W.H.useMemo(A,_)},ce.useOptimistic=function(A,_){return W.H.useOptimistic(A,_)},ce.useReducer=function(A,_,J){return W.H.useReducer(A,_,J)},ce.useRef=function(A){return W.H.useRef(A)},ce.useState=function(A){return W.H.useState(A)},ce.useSyncExternalStore=function(A,_,J){return W.H.useSyncExternalStore(A,_,J)},ce.useTransition=function(){return W.H.useTransition()},ce.version="19.2.4",ce}var qp;function Jc(){return qp||(qp=1,Wu.exports=QS()),Wu.exports}var k=Jc(),$u={exports:{}},Ai={},Iu={exports:{}},ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function kS(){return jp||(jp=1,(function(n){function i(R,G){var $=R.length;R.push(G);e:for(;0<$;){var me=$-1>>>1,P=R[me];if(0<c(P,G))R[me]=G,R[$]=P,$=me;else break e}}function s(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var G=R[0],$=R.pop();if($!==G){R[0]=$;e:for(var me=0,P=R.length,A=P>>>1;me<A;){var _=2*(me+1)-1,J=R[_],F=_+1,oe=R[F];if(0>c(J,$))F<P&&0>c(oe,J)?(R[me]=oe,R[F]=$,me=F):(R[me]=J,R[_]=$,me=_);else if(F<P&&0>c(oe,$))R[me]=oe,R[F]=$,me=F;else break e}}return G}function c(R,G){var $=R.sortIndex-G.sortIndex;return $!==0?$:R.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var d=Date,h=d.now();n.unstable_now=function(){return d.now()-h}}var p=[],g=[],y=1,b=null,S=3,z=!1,w=!1,L=!1,U=!1,H=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function Z(R){for(var G=s(g);G!==null;){if(G.callback===null)r(g);else if(G.startTime<=R)r(g),G.sortIndex=G.expirationTime,i(p,G);else break;G=s(g)}}function Y(R){if(L=!1,Z(R),!w)if(s(p)!==null)w=!0,ie||(ie=!0,qe());else{var G=s(g);G!==null&&Qe(Y,G.startTime-R)}}var ie=!1,W=-1,B=5,se=-1;function Ce(){return U?!0:!(n.unstable_now()-se<B)}function _e(){if(U=!1,ie){var R=n.unstable_now();se=R;var G=!0;try{e:{w=!1,L&&(L=!1,X(W),W=-1),z=!0;var $=S;try{t:{for(Z(R),b=s(p);b!==null&&!(b.expirationTime>R&&Ce());){var me=b.callback;if(typeof me=="function"){b.callback=null,S=b.priorityLevel;var P=me(b.expirationTime<=R);if(R=n.unstable_now(),typeof P=="function"){b.callback=P,Z(R),G=!0;break t}b===s(p)&&r(p),Z(R)}else r(p);b=s(p)}if(b!==null)G=!0;else{var A=s(g);A!==null&&Qe(Y,A.startTime-R),G=!1}}break e}finally{b=null,S=$,z=!1}G=void 0}}finally{G?qe():ie=!1}}}var qe;if(typeof Q=="function")qe=function(){Q(_e)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,ut=pt.port2;pt.port1.onmessage=_e,qe=function(){ut.postMessage(null)}}else qe=function(){H(_e,0)};function Qe(R,G){W=H(function(){R(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(R){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var $=S;S=G;try{return R()}finally{S=$}},n.unstable_requestPaint=function(){U=!0},n.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var $=S;S=R;try{return G()}finally{S=$}},n.unstable_scheduleCallback=function(R,G,$){var me=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?me+$:me):$=me,R){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=$+P,R={id:y++,callback:G,priorityLevel:R,startTime:$,expirationTime:P,sortIndex:-1},$>me?(R.sortIndex=$,i(g,R),s(p)===null&&R===s(g)&&(L?(X(W),W=-1):L=!0,Qe(Y,$-me))):(R.sortIndex=P,i(p,R),w||z||(w=!0,ie||(ie=!0,qe()))),R},n.unstable_shouldYield=Ce,n.unstable_wrapCallback=function(R){var G=S;return function(){var $=S;S=G;try{return R.apply(this,arguments)}finally{S=$}}}})(ec)),ec}var Vp;function PS(){return Vp||(Vp=1,Iu.exports=kS()),Iu.exports}var tc={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function YS(){if(_p)return ct;_p=1;var n=Jc();function i(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function m(p,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:p,containerInfo:g,implementation:y}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ct.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return m(p,g,null,y)},ct.flushSync=function(p){var g=d.T,y=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=g,r.p=y,r.d.f()}},ct.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},ct.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},ct.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,z=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:z}):y==="script"&&r.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:z,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ct.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},ct.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=h(y,g.crossOrigin);r.d.L(p,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ct.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=h(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},ct.requestFormReset=function(p){r.d.r(p)},ct.unstable_batchedUpdates=function(p,g){return p(g)},ct.useFormState=function(p,g,y){return d.H.useFormState(p,g,y)},ct.useFormStatus=function(){return d.H.useHostTransitionStatus()},ct.version="19.2.4",ct}var Bp;function XS(){if(Bp)return tc.exports;Bp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),tc.exports=YS(),tc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function JS(){if(Lp)return Ai;Lp=1;var n=PS(),i=Jc(),s=XS();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(m(e)!==e)throw Error(r(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,o=t;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){a=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return p(l),e;if(u===o)return p(l),t;u=u.sibling}throw Error(r(188))}if(a.return!==o.return)a=l,o=u;else{for(var f=!1,v=l.child;v;){if(v===a){f=!0,a=l,o=u;break}if(v===o){f=!0,o=l,a=u;break}v=v.sibling}if(!f){for(v=u.child;v;){if(v===a){f=!0,a=u,o=l;break}if(v===o){f=!0,o=u,a=l;break}v=v.sibling}if(!f)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),_e=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var pt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case H:return"Profiler";case U:return"StrictMode";case Y:return"Suspense";case ie:return"SuspenseList";case se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case Q:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:ut(e.type)||"Memo";case B:t=e._payload,e=e._init;try{return ut(e(t))}catch{}}return null}var Qe=Array.isArray,R=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},me=[],P=-1;function A(e){return{current:e}}function _(e){0>P||(e.current=me[P],me[P]=null,P--)}function J(e,t){P++,me[P]=e.current,e.current=t}var F=A(null),oe=A(null),le=A(null),Se=A(null);function Ie(e,t){switch(J(le,t),J(oe,e),J(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ih(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ih(t),e=ep(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(F),J(F,e)}function he(){_(F),_(oe),_(le)}function Da(e){e.memoizedState!==null&&J(Se,e);var t=F.current,a=ep(t,e.type);t!==a&&(J(oe,e),J(F,a))}function sa(e){oe.current===e&&(_(F),_(oe)),Se.current===e&&(_(Se),bi._currentValue=$)}var za,jn;function qt(e){if(za===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);za=t&&t[1]||"",jn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+za+e+jn}var qr=!1;function jr(e,t){if(!e||qr)return"";qr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(O){var N=O}Reflect.construct(e,[],V)}else{try{V.call()}catch(O){N=O}e.call(V.prototype)}}else{try{throw Error()}catch(O){N=O}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(O){if(O&&N&&typeof O.stack=="string")return[O.stack,N.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),f=u[0],v=u[1];if(f&&v){var T=f.split(`
`),D=v.split(`
`);for(l=o=0;o<T.length&&!T[o].includes("DetermineComponentFrameRoot");)o++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(o===T.length||l===D.length)for(o=T.length-1,l=D.length-1;1<=o&&0<=l&&T[o]!==D[l];)l--;for(;1<=o&&0<=l;o--,l--)if(T[o]!==D[l]){if(o!==1||l!==1)do if(o--,l--,0>l||T[o]!==D[l]){var q=`
`+T[o].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=o&&0<=l);break}}}finally{qr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function v0(e,t){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return e.child!==t&&t!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return jr(e.type,!1);case 11:return jr(e.type.render,!1);case 1:return jr(e.type,!0);case 31:return qt("Activity");default:return""}}function Nd(e){try{var t="",a=null;do t+=v0(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Vr=Object.prototype.hasOwnProperty,_r=n.unstable_scheduleCallback,Br=n.unstable_cancelCallback,y0=n.unstable_shouldYield,b0=n.unstable_requestPaint,Et=n.unstable_now,S0=n.unstable_getCurrentPriorityLevel,Od=n.unstable_ImmediatePriority,wd=n.unstable_UserBlockingPriority,Pi=n.unstable_NormalPriority,x0=n.unstable_LowPriority,Rd=n.unstable_IdlePriority,T0=n.log,E0=n.unstable_setDisableYieldValue,wo=null,At=null;function Na(e){if(typeof T0=="function"&&E0(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(wo,e)}catch{}}var Ct=Math.clz32?Math.clz32:M0,A0=Math.log,C0=Math.LN2;function M0(e){return e>>>=0,e===0?32:31-(A0(e)/C0|0)|0}var Yi=256,Xi=262144,Ji=4194304;function un(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zi(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var v=o&134217727;return v!==0?(o=v&~u,o!==0?l=un(o):(f&=v,f!==0?l=un(f):a||(a=v&~e,a!==0&&(l=un(a))))):(v=o&~u,v!==0?l=un(v):f!==0?l=un(f):a||(a=o&~e,a!==0&&(l=un(a)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:l}function Ro(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function D0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qd(){var e=Ji;return Ji<<=1,(Ji&62914560)===0&&(Ji=4194304),e}function Lr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function qo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function z0(e,t,a,o,l,u){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var v=e.entanglements,T=e.expirationTimes,D=e.hiddenUpdates;for(a=f&~a;0<a;){var q=31-Ct(a),V=1<<q;v[q]=0,T[q]=-1;var N=D[q];if(N!==null)for(D[q]=null,q=0;q<N.length;q++){var O=N[q];O!==null&&(O.lane&=-536870913)}a&=~V}o!==0&&jd(e,o,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(f&~t))}function jd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Ct(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Vd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Ct(a),l=1<<o;l&t|e[o]&t&&(e[o]|=t),a&=~l}}function _d(e,t){var a=t&-t;return a=(a&42)!==0?1:Ur(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ur(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bd(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Ep(e.type))}function Ld(e,t){var a=G.p;try{return G.p=e,t()}finally{G.p=a}}var Oa=Math.random().toString(36).slice(2),nt="__reactFiber$"+Oa,gt="__reactProps$"+Oa,Vn="__reactContainer$"+Oa,Gr="__reactEvents$"+Oa,N0="__reactListeners$"+Oa,O0="__reactHandles$"+Oa,Ud="__reactResources$"+Oa,jo="__reactMarker$"+Oa;function Qr(e){delete e[nt],delete e[gt],delete e[Gr],delete e[N0],delete e[O0]}function _n(e){var t=e[nt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Vn]||a[nt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=rp(e);e!==null;){if(a=e[nt])return a;e=rp(e)}return t}e=a,a=e.parentNode}return null}function Bn(e){if(e=e[nt]||e[Vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Ln(e){var t=e[Ud];return t||(t=e[Ud]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[jo]=!0}var Hd=new Set,Gd={};function cn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(Gd[e]=t,e=0;e<t.length;e++)Hd.add(t[e])}var w0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qd={},kd={};function R0(e){return Vr.call(kd,e)?!0:Vr.call(Qd,e)?!1:w0.test(e)?kd[e]=!0:(Qd[e]=!0,!1)}function Ki(e,t,a){if(R0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Fi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ra(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function q0(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){if(!e._valueTracker){var t=Pd(e)?"checked":"value";e._valueTracker=q0(e,t,""+e[t])}}function Yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=Pd(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var j0=/[\n"\\]/g;function Vt(e){return e.replace(j0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pr(e,t,a,o,l,u,f,v){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Yr(e,f,jt(t)):a!=null?Yr(e,f,jt(a)):o!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+jt(v):e.removeAttribute("name")}function Xd(e,t,a,o,l,u,f,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){kr(e);return}a=a!=null?""+jt(a):"",t=t!=null?""+jt(t):a,v||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=v?e.checked:!!o,e.defaultChecked=!!o,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),kr(e)}function Yr(e,t,a){t==="number"&&Wi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Hn(e,t,a,o){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&o&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Jd(e,t,a){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+jt(a):""}function Zd(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(r(92));if(Qe(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=jt(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),kr(e)}function Gn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var V0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kd(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||V0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Fd(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var l in t)o=t[l],t.hasOwnProperty(l)&&a[l]!==o&&Kd(e,l,o)}else for(var u in t)t.hasOwnProperty(u)&&Kd(e,u,t[u])}function Xr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $i(e){return B0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var Jr=null;function Zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qn=null,kn=null;function Wd(e){var t=Bn(e);if(t&&(e=t.stateNode)){var a=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var l=o[gt]||null;if(!l)throw Error(r(90));Pr(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&Yd(o)}break e;case"textarea":Jd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Hn(e,!!a.multiple,t,!1)}}}var Kr=!1;function $d(e,t,a){if(Kr)return e(t,a);Kr=!0;try{var o=e(t);return o}finally{if(Kr=!1,(Qn!==null||kn!==null)&&(Us(),Qn&&(t=Qn,e=kn,kn=Qn=null,Wd(t),e)))for(t=0;t<e.length;t++)Wd(e[t])}}function _o(e,t){var a=e.stateNode;if(a===null)return null;var o=a[gt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fr=!1;if(ua)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){Fr=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{Fr=!1}var wa=null,Wr=null,Ii=null;function Id(){if(Ii)return Ii;var e,t=Wr,a=t.length,o,l="value"in wa?wa.value:wa.textContent,u=l.length;for(e=0;e<a&&t[e]===l[e];e++);var f=a-e;for(o=1;o<=f&&t[a-o]===l[u-o];o++);return Ii=l.slice(e,1<o?1-o:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function ef(){return!1}function vt(e){function t(a,o,l,u,f){this._reactName=a,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(a=e[v],this[v]=a?a(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ts:ef,this.isPropagationStopped=ef,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=vt(dn),Lo=b({},dn,{view:0,detail:0}),L0=vt(Lo),$r,Ir,Uo,ns=b({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?($r=e.screenX-Uo.screenX,Ir=e.screenY-Uo.screenY):Ir=$r=0,Uo=e),$r)},movementY:function(e){return"movementY"in e?e.movementY:Ir}}),tf=vt(ns),U0=b({},ns,{dataTransfer:0}),H0=vt(U0),G0=b({},Lo,{relatedTarget:0}),el=vt(G0),Q0=b({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),k0=vt(Q0),P0=b({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y0=vt(P0),X0=b({},dn,{data:0}),af=vt(X0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K0[e])?!!t[e]:!1}function tl(){return F0}var W0=b({},Lo,{key:function(e){if(e.key){var t=J0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$0=vt(W0),I0=b({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nf=vt(I0),eb=b({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),tb=vt(eb),ab=b({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),nb=vt(ab),ob=b({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ib=vt(ob),sb=b({},dn,{newState:0,oldState:0}),rb=vt(sb),lb=[9,13,27,32],al=ua&&"CompositionEvent"in window,Ho=null;ua&&"documentMode"in document&&(Ho=document.documentMode);var ub=ua&&"TextEvent"in window&&!Ho,of=ua&&(!al||Ho&&8<Ho&&11>=Ho),sf=" ",rf=!1;function lf(e,t){switch(e){case"keyup":return lb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function cb(e,t){switch(e){case"compositionend":return uf(t);case"keypress":return t.which!==32?null:(rf=!0,sf);case"textInput":return e=t.data,e===sf&&rf?null:e;default:return null}}function db(e,t){if(Pn)return e==="compositionend"||!al&&lf(e,t)?(e=Id(),Ii=Wr=wa=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return of&&t.locale!=="ko"?null:t.data;default:return null}}var fb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fb[e.type]:t==="textarea"}function df(e,t,a,o){Qn?kn?kn.push(o):kn=[o]:Qn=o,t=Xs(t,"onChange"),0<t.length&&(a=new as("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Go=null,Qo=null;function mb(e){Jh(e,0)}function os(e){var t=Vo(e);if(Yd(t))return e}function ff(e,t){if(e==="change")return t}var mf=!1;if(ua){var nl;if(ua){var ol="oninput"in document;if(!ol){var hf=document.createElement("div");hf.setAttribute("oninput","return;"),ol=typeof hf.oninput=="function"}nl=ol}else nl=!1;mf=nl&&(!document.documentMode||9<document.documentMode)}function pf(){Go&&(Go.detachEvent("onpropertychange",gf),Qo=Go=null)}function gf(e){if(e.propertyName==="value"&&os(Qo)){var t=[];df(t,Qo,e,Zr(e)),$d(mb,t)}}function hb(e,t,a){e==="focusin"?(pf(),Go=t,Qo=a,Go.attachEvent("onpropertychange",gf)):e==="focusout"&&pf()}function pb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return os(Qo)}function gb(e,t){if(e==="click")return os(t)}function vb(e,t){if(e==="input"||e==="change")return os(t)}function yb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:yb;function ko(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var l=a[o];if(!Vr.call(t,l)||!Mt(e[l],t[l]))return!1}return!0}function vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yf(e,t){var a=vf(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vf(a)}}function bf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wi(e.document)}return t}function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var bb=ua&&"documentMode"in document&&11>=document.documentMode,Yn=null,sl=null,Po=null,rl=!1;function xf(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rl||Yn==null||Yn!==Wi(o)||(o=Yn,"selectionStart"in o&&il(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Po&&ko(Po,o)||(Po=o,o=Xs(sl,"onSelect"),0<o.length&&(t=new as("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Yn)))}function fn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Xn={animationend:fn("Animation","AnimationEnd"),animationiteration:fn("Animation","AnimationIteration"),animationstart:fn("Animation","AnimationStart"),transitionrun:fn("Transition","TransitionRun"),transitionstart:fn("Transition","TransitionStart"),transitioncancel:fn("Transition","TransitionCancel"),transitionend:fn("Transition","TransitionEnd")},ll={},Tf={};ua&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function mn(e){if(ll[e])return ll[e];if(!Xn[e])return e;var t=Xn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Tf)return ll[e]=t[a];return e}var Ef=mn("animationend"),Af=mn("animationiteration"),Cf=mn("animationstart"),Sb=mn("transitionrun"),xb=mn("transitionstart"),Tb=mn("transitioncancel"),Mf=mn("transitionend"),Df=new Map,ul="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ul.push("scrollEnd");function Xt(e,t){Df.set(e,t),cn(t,[e])}var is=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],Jn=0,cl=0;function ss(){for(var e=Jn,t=cl=Jn=0;t<e;){var a=_t[t];_t[t++]=null;var o=_t[t];_t[t++]=null;var l=_t[t];_t[t++]=null;var u=_t[t];if(_t[t++]=null,o!==null&&l!==null){var f=o.pending;f===null?l.next=l:(l.next=f.next,f.next=l),o.pending=l}u!==0&&zf(a,l,u)}}function rs(e,t,a,o){_t[Jn++]=e,_t[Jn++]=t,_t[Jn++]=a,_t[Jn++]=o,cl|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function dl(e,t,a,o){return rs(e,t,a,o),ls(e)}function hn(e,t){return rs(e,null,null,t),ls(e)}function zf(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-Ct(a),e=u.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=a|536870912),u):null}function ls(e){if(50<fi)throw fi=0,Su=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zn={};function Eb(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,a,o){return new Eb(e,t,a,o)}function fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,t){var a=e.alternate;return a===null?(a=Dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Nf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function us(e,t,a,o,l,u){var f=0;if(o=e,typeof e=="function")fl(e)&&(f=1);else if(typeof e=="string")f=zS(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case se:return e=Dt(31,a,t,l),e.elementType=se,e.lanes=u,e;case L:return pn(a.children,l,u,t);case U:f=8,l|=24;break;case H:return e=Dt(12,a,t,l|2),e.elementType=H,e.lanes=u,e;case Y:return e=Dt(13,a,t,l),e.elementType=Y,e.lanes=u,e;case ie:return e=Dt(19,a,t,l),e.elementType=ie,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:f=10;break e;case X:f=9;break e;case Z:f=11;break e;case W:f=14;break e;case B:f=16,o=null;break e}f=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return t=Dt(f,a,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function pn(e,t,a,o){return e=Dt(7,e,o,t),e.lanes=a,e}function ml(e,t,a){return e=Dt(6,e,null,t),e.lanes=a,e}function Of(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function hl(e,t,a){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wf=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var a=wf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Nd(t)},wf.set(e,t),t)}return{value:e,source:t,stack:Nd(t)}}var Kn=[],Fn=0,cs=null,Yo=0,Lt=[],Ut=0,Ra=null,It=1,ea="";function da(e,t){Kn[Fn++]=Yo,Kn[Fn++]=cs,cs=e,Yo=t}function Rf(e,t,a){Lt[Ut++]=It,Lt[Ut++]=ea,Lt[Ut++]=Ra,Ra=e;var o=It;e=ea;var l=32-Ct(o)-1;o&=~(1<<l),a+=1;var u=32-Ct(t)+l;if(30<u){var f=l-l%5;u=(o&(1<<f)-1).toString(32),o>>=f,l-=f,It=1<<32-Ct(t)+l|a<<l|o,ea=u+e}else It=1<<u|a<<l|o,ea=e}function pl(e){e.return!==null&&(da(e,1),Rf(e,1,0))}function gl(e){for(;e===cs;)cs=Kn[--Fn],Kn[Fn]=null,Yo=Kn[--Fn],Kn[Fn]=null;for(;e===Ra;)Ra=Lt[--Ut],Lt[Ut]=null,ea=Lt[--Ut],Lt[Ut]=null,It=Lt[--Ut],Lt[Ut]=null}function qf(e,t){Lt[Ut++]=It,Lt[Ut++]=ea,Lt[Ut++]=Ra,It=t.id,ea=t.overflow,Ra=e}var ot=null,je=null,xe=!1,qa=null,Ht=!1,vl=Error(r(519));function ja(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(Bt(t,e)),vl}function jf(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[nt]=e,t[gt]=o,a){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(a=0;a<hi.length;a++)ve(hi[a],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),Xd(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),Zd(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Wh(t.textContent,a)?(o.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),o.onScroll!=null&&ve("scroll",t),o.onScrollEnd!=null&&ve("scrollend",t),o.onClick!=null&&(t.onclick=la),t=!0):t=!1,t||ja(e,!0)}function Vf(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:ot=ot.return}}function Wn(e){if(e!==ot)return!1;if(!xe)return Vf(e),xe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vu(e.type,e.memoizedProps)),a=!a),a&&je&&ja(e),Vf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=sp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=sp(e)}else t===27?(t=je,Za(e.type)?(e=Hu,Hu=null,je=e):je=t):je=ot?Qt(e.stateNode.nextSibling):null;return!0}function gn(){je=ot=null,xe=!1}function yl(){var e=qa;return e!==null&&(xt===null?xt=e:xt.push.apply(xt,e),qa=null),e}function Xo(e){qa===null?qa=[e]:qa.push(e)}var bl=A(null),vn=null,fa=null;function Va(e,t,a){J(bl,t._currentValue),t._currentValue=a}function ma(e){e._currentValue=bl.current,_(bl)}function Sl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function xl(e,t,a,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var f=l.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=l;for(var T=0;T<t.length;T++)if(v.context===t[T]){u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),Sl(u.return,a,e),o||(f=null);break e}u=v.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(r(341));f.lanes|=a,u=f.alternate,u!==null&&(u.lanes|=a),Sl(f,a,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function $n(e,t,a,o){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(r(387));if(f=f.memoizedProps,f!==null){var v=l.type;Mt(l.pendingProps.value,f.value)||(e!==null?e.push(v):e=[v])}}else if(l===Se.current){if(f=l.alternate,f===null)throw Error(r(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(bi):e=[bi])}l=l.return}e!==null&&xl(t,e,a,o),t.flags|=262144}function ds(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yn(e){vn=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return _f(vn,e)}function fs(e,t){return vn===null&&yn(e),_f(e,t)}function _f(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(r(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return a}var Ab=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Cb=n.unstable_scheduleCallback,Mb=n.unstable_NormalPriority,Ye={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tl(){return{controller:new Ab,data:new Map,refCount:0}}function Jo(e){e.refCount--,e.refCount===0&&Cb(Mb,function(){e.controller.abort()})}var Zo=null,El=0,In=0,eo=null;function Db(e,t){if(Zo===null){var a=Zo=[];El=0,In=Mu(),eo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return El++,t.then(Bf,Bf),t}function Bf(){if(--El===0&&Zo!==null){eo!==null&&(eo.status="fulfilled");var e=Zo;Zo=null,In=0,eo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zb(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),o}var Lf=R.S;R.S=function(e,t){xh=Et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Db(e,t),Lf!==null&&Lf(e,t)};var bn=A(null);function Al(){var e=bn.current;return e!==null?e:we.pooledCache}function ms(e,t){t===null?J(bn,bn.current):J(bn,t.pool)}function Uf(){var e=Al();return e===null?null:{parent:Ye._currentValue,pool:e}}var to=Error(r(460)),Cl=Error(r(474)),hs=Error(r(542)),ps={then:function(){}};function Hf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(la,la),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kf(e),e;default:if(typeof t.status=="string")t.then(la,la);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=o}},function(o){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kf(e),e}throw xn=t,to}}function Sn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xn=a,to):a}}var xn=null;function Qf(){if(xn===null)throw Error(r(459));var e=xn;return xn=null,e}function kf(e){if(e===to||e===hs)throw Error(r(483))}var ao=null,Ko=0;function gs(e){var t=Ko;return Ko+=1,ao===null&&(ao=[]),Gf(ao,e,t)}function Fo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vs(e,t){throw t.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Pf(e){function t(C,E){if(e){var M=C.deletions;M===null?(C.deletions=[E],C.flags|=16):M.push(E)}}function a(C,E){if(!e)return null;for(;E!==null;)t(C,E),E=E.sibling;return null}function o(C){for(var E=new Map;C!==null;)C.key!==null?E.set(C.key,C):E.set(C.index,C),C=C.sibling;return E}function l(C,E){return C=ca(C,E),C.index=0,C.sibling=null,C}function u(C,E,M){return C.index=M,e?(M=C.alternate,M!==null?(M=M.index,M<E?(C.flags|=67108866,E):M):(C.flags|=67108866,E)):(C.flags|=1048576,E)}function f(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function v(C,E,M,j){return E===null||E.tag!==6?(E=ml(M,C.mode,j),E.return=C,E):(E=l(E,M),E.return=C,E)}function T(C,E,M,j){var re=M.type;return re===L?q(C,E,M.props.children,j,M.key):E!==null&&(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===B&&Sn(re)===E.type)?(E=l(E,M.props),Fo(E,M),E.return=C,E):(E=us(M.type,M.key,M.props,null,C.mode,j),Fo(E,M),E.return=C,E)}function D(C,E,M,j){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=hl(M,C.mode,j),E.return=C,E):(E=l(E,M.children||[]),E.return=C,E)}function q(C,E,M,j,re){return E===null||E.tag!==7?(E=pn(M,C.mode,j,re),E.return=C,E):(E=l(E,M),E.return=C,E)}function V(C,E,M){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=ml(""+E,C.mode,M),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case z:return M=us(E.type,E.key,E.props,null,C.mode,M),Fo(M,E),M.return=C,M;case w:return E=hl(E,C.mode,M),E.return=C,E;case B:return E=Sn(E),V(C,E,M)}if(Qe(E)||qe(E))return E=pn(E,C.mode,M,null),E.return=C,E;if(typeof E.then=="function")return V(C,gs(E),M);if(E.$$typeof===Q)return V(C,fs(C,E),M);vs(C,E)}return null}function N(C,E,M,j){var re=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return re!==null?null:v(C,E,""+M,j);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case z:return M.key===re?T(C,E,M,j):null;case w:return M.key===re?D(C,E,M,j):null;case B:return M=Sn(M),N(C,E,M,j)}if(Qe(M)||qe(M))return re!==null?null:q(C,E,M,j,null);if(typeof M.then=="function")return N(C,E,gs(M),j);if(M.$$typeof===Q)return N(C,E,fs(C,M),j);vs(C,M)}return null}function O(C,E,M,j,re){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return C=C.get(M)||null,v(E,C,""+j,re);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case z:return C=C.get(j.key===null?M:j.key)||null,T(E,C,j,re);case w:return C=C.get(j.key===null?M:j.key)||null,D(E,C,j,re);case B:return j=Sn(j),O(C,E,M,j,re)}if(Qe(j)||qe(j))return C=C.get(M)||null,q(E,C,j,re,null);if(typeof j.then=="function")return O(C,E,M,gs(j),re);if(j.$$typeof===Q)return O(C,E,M,fs(E,j),re);vs(E,j)}return null}function I(C,E,M,j){for(var re=null,Te=null,ne=E,fe=E=0,be=null;ne!==null&&fe<M.length;fe++){ne.index>fe?(be=ne,ne=null):be=ne.sibling;var Ee=N(C,ne,M[fe],j);if(Ee===null){ne===null&&(ne=be);break}e&&ne&&Ee.alternate===null&&t(C,ne),E=u(Ee,E,fe),Te===null?re=Ee:Te.sibling=Ee,Te=Ee,ne=be}if(fe===M.length)return a(C,ne),xe&&da(C,fe),re;if(ne===null){for(;fe<M.length;fe++)ne=V(C,M[fe],j),ne!==null&&(E=u(ne,E,fe),Te===null?re=ne:Te.sibling=ne,Te=ne);return xe&&da(C,fe),re}for(ne=o(ne);fe<M.length;fe++)be=O(ne,C,fe,M[fe],j),be!==null&&(e&&be.alternate!==null&&ne.delete(be.key===null?fe:be.key),E=u(be,E,fe),Te===null?re=be:Te.sibling=be,Te=be);return e&&ne.forEach(function(Ia){return t(C,Ia)}),xe&&da(C,fe),re}function ue(C,E,M,j){if(M==null)throw Error(r(151));for(var re=null,Te=null,ne=E,fe=E=0,be=null,Ee=M.next();ne!==null&&!Ee.done;fe++,Ee=M.next()){ne.index>fe?(be=ne,ne=null):be=ne.sibling;var Ia=N(C,ne,Ee.value,j);if(Ia===null){ne===null&&(ne=be);break}e&&ne&&Ia.alternate===null&&t(C,ne),E=u(Ia,E,fe),Te===null?re=Ia:Te.sibling=Ia,Te=Ia,ne=be}if(Ee.done)return a(C,ne),xe&&da(C,fe),re;if(ne===null){for(;!Ee.done;fe++,Ee=M.next())Ee=V(C,Ee.value,j),Ee!==null&&(E=u(Ee,E,fe),Te===null?re=Ee:Te.sibling=Ee,Te=Ee);return xe&&da(C,fe),re}for(ne=o(ne);!Ee.done;fe++,Ee=M.next())Ee=O(ne,C,fe,Ee.value,j),Ee!==null&&(e&&Ee.alternate!==null&&ne.delete(Ee.key===null?fe:Ee.key),E=u(Ee,E,fe),Te===null?re=Ee:Te.sibling=Ee,Te=Ee);return e&&ne.forEach(function(US){return t(C,US)}),xe&&da(C,fe),re}function Oe(C,E,M,j){if(typeof M=="object"&&M!==null&&M.type===L&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case z:e:{for(var re=M.key;E!==null;){if(E.key===re){if(re=M.type,re===L){if(E.tag===7){a(C,E.sibling),j=l(E,M.props.children),j.return=C,C=j;break e}}else if(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===B&&Sn(re)===E.type){a(C,E.sibling),j=l(E,M.props),Fo(j,M),j.return=C,C=j;break e}a(C,E);break}else t(C,E);E=E.sibling}M.type===L?(j=pn(M.props.children,C.mode,j,M.key),j.return=C,C=j):(j=us(M.type,M.key,M.props,null,C.mode,j),Fo(j,M),j.return=C,C=j)}return f(C);case w:e:{for(re=M.key;E!==null;){if(E.key===re)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){a(C,E.sibling),j=l(E,M.children||[]),j.return=C,C=j;break e}else{a(C,E);break}else t(C,E);E=E.sibling}j=hl(M,C.mode,j),j.return=C,C=j}return f(C);case B:return M=Sn(M),Oe(C,E,M,j)}if(Qe(M))return I(C,E,M,j);if(qe(M)){if(re=qe(M),typeof re!="function")throw Error(r(150));return M=re.call(M),ue(C,E,M,j)}if(typeof M.then=="function")return Oe(C,E,gs(M),j);if(M.$$typeof===Q)return Oe(C,E,fs(C,M),j);vs(C,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,E!==null&&E.tag===6?(a(C,E.sibling),j=l(E,M),j.return=C,C=j):(a(C,E),j=ml(M,C.mode,j),j.return=C,C=j),f(C)):a(C,E)}return function(C,E,M,j){try{Ko=0;var re=Oe(C,E,M,j);return ao=null,re}catch(ne){if(ne===to||ne===hs)throw ne;var Te=Dt(29,ne,null,C.mode);return Te.lanes=j,Te.return=C,Te}finally{}}}var Tn=Pf(!0),Yf=Pf(!1),_a=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ae&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=ls(e),zf(e,null,a),t}return rs(e,o,t,a),ls(e)}function Wo(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Vd(e,a)}}function zl(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=f:u=u.next=f,a=a.next}while(a!==null);u===null?l=u=t:u=u.next=t}else l=u=t;a={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Nl=!1;function $o(){if(Nl){var e=eo;if(e!==null)throw e}}function Io(e,t,a,o){Nl=!1;var l=e.updateQueue;_a=!1;var u=l.firstBaseUpdate,f=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var T=v,D=T.next;T.next=null,f===null?u=D:f.next=D,f=T;var q=e.alternate;q!==null&&(q=q.updateQueue,v=q.lastBaseUpdate,v!==f&&(v===null?q.firstBaseUpdate=D:v.next=D,q.lastBaseUpdate=T))}if(u!==null){var V=l.baseState;f=0,q=D=T=null,v=u;do{var N=v.lane&-536870913,O=N!==v.lane;if(O?(ye&N)===N:(o&N)===N){N!==0&&N===In&&(Nl=!0),q!==null&&(q=q.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var I=e,ue=v;N=t;var Oe=a;switch(ue.tag){case 1:if(I=ue.payload,typeof I=="function"){V=I.call(Oe,V,N);break e}V=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=ue.payload,N=typeof I=="function"?I.call(Oe,V,N):I,N==null)break e;V=b({},V,N);break e;case 2:_a=!0}}N=v.callback,N!==null&&(e.flags|=64,O&&(e.flags|=8192),O=l.callbacks,O===null?l.callbacks=[N]:O.push(N))}else O={lane:N,tag:v.tag,payload:v.payload,callback:v.callback,next:null},q===null?(D=q=O,T=V):q=q.next=O,f|=N;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;O=v,v=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);q===null&&(T=V),l.baseState=T,l.firstBaseUpdate=D,l.lastBaseUpdate=q,u===null&&(l.shared.lanes=0),ka|=f,e.lanes=f,e.memoizedState=V}}function Xf(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Jf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Xf(a[e],t)}var no=A(null),ys=A(0);function Zf(e,t){e=Ta,J(ys,e),J(no,t),Ta=e|t.baseLanes}function Ol(){J(ys,Ta),J(no,no.current)}function wl(){Ta=ys.current,_(no),_(ys)}var zt=A(null),Gt=null;function Ua(e){var t=e.alternate;J(ke,ke.current&1),J(zt,e),Gt===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(Gt=e)}function Rl(e){J(ke,ke.current),J(zt,e),Gt===null&&(Gt=e)}function Kf(e){e.tag===22?(J(ke,ke.current),J(zt,e),Gt===null&&(Gt=e)):Ha()}function Ha(){J(ke,ke.current),J(zt,zt.current)}function Nt(e){_(zt),Gt===e&&(Gt=null),_(ke)}var ke=A(0);function bs(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lu(a)||Uu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,de=null,ze=null,Xe=null,Ss=!1,oo=!1,En=!1,xs=0,ei=0,io=null,Nb=0;function Ue(){throw Error(r(321))}function ql(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Mt(e[a],t[a]))return!1;return!0}function jl(e,t,a,o,l,u){return ha=u,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Rm:Kl,En=!1,u=a(o,l),En=!1,oo&&(u=Wf(t,a,o,l)),Ff(e),u}function Ff(e){R.H=ni;var t=ze!==null&&ze.next!==null;if(ha=0,Xe=ze=de=null,Ss=!1,ei=0,io=null,t)throw Error(r(300));e===null||Je||(e=e.dependencies,e!==null&&ds(e)&&(Je=!0))}function Wf(e,t,a,o){de=e;var l=0;do{if(oo&&(io=null),ei=0,oo=!1,25<=l)throw Error(r(301));if(l+=1,Xe=ze=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=qm,u=t(a,o)}while(oo);return u}function Ob(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ti(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(de.flags|=1024),t}function Vl(){var e=xs!==0;return xs=0,e}function _l(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Bl(e){if(Ss){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ss=!1}ha=0,Xe=ze=de=null,oo=!1,ei=xs=0,io=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?de.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Pe(){if(ze===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Xe===null?de.memoizedState:Xe.next;if(t!==null)Xe=t,ze=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Xe===null?de.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Ts(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ti(e){var t=ei;return ei+=1,io===null&&(io=[]),e=Gf(io,e,t),t=de,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Rm:Kl),e}function Es(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ti(e);if(e.$$typeof===Q)return it(e)}throw Error(r(438,String(e)))}function Ll(e){var t=null,a=de.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ts(),de.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=Ce;return t.index++,a}function pa(e,t){return typeof t=="function"?t(e):t}function As(e){var t=Pe();return Ul(t,ze,e)}function Ul(e,t,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var l=e.baseQueue,u=o.pending;if(u!==null){if(l!==null){var f=l.next;l.next=u.next,u.next=f}t.baseQueue=l=u,o.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var v=f=null,T=null,D=t,q=!1;do{var V=D.lane&-536870913;if(V!==D.lane?(ye&V)===V:(ha&V)===V){var N=D.revertLane;if(N===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),V===In&&(q=!0);else if((ha&N)===N){D=D.next,N===In&&(q=!0);continue}else V={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(v=T=V,f=u):T=T.next=V,de.lanes|=N,ka|=N;V=D.action,En&&a(u,V),u=D.hasEagerState?D.eagerState:a(u,V)}else N={lane:V,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(v=T=N,f=u):T=T.next=N,de.lanes|=V,ka|=V;D=D.next}while(D!==null&&D!==t);if(T===null?f=u:T.next=v,!Mt(u,e.memoizedState)&&(Je=!0,q&&(a=eo,a!==null)))throw a;e.memoizedState=u,e.baseState=f,e.baseQueue=T,o.lastRenderedState=u}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Hl(e){var t=Pe(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,l=a.pending,u=t.memoizedState;if(l!==null){a.pending=null;var f=l=l.next;do u=e(u,f.action),f=f.next;while(f!==l);Mt(u,t.memoizedState)||(Je=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function $f(e,t,a){var o=de,l=Pe(),u=xe;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=t();var f=!Mt((ze||l).memoizedState,a);if(f&&(l.memoizedState=a,Je=!0),l=l.queue,kl(tm.bind(null,o,l,e),[e]),l.getSnapshot!==t||f||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,so(9,{destroy:void 0},em.bind(null,o,l,a,t),null),we===null)throw Error(r(349));u||(ha&127)!==0||If(o,t,a)}return a}function If(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=de.updateQueue,t===null?(t=Ts(),de.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function em(e,t,a,o){t.value=a,t.getSnapshot=o,am(t)&&nm(e)}function tm(e,t,a){return a(function(){am(t)&&nm(e)})}function am(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Mt(e,a)}catch{return!0}}function nm(e){var t=hn(e,2);t!==null&&Tt(t,e,2)}function Gl(e){var t=ft();if(typeof e=="function"){var a=e;if(e=a(),En){Na(!0);try{a()}finally{Na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function om(e,t,a,o){return e.baseState=a,Ul(e,ze,typeof o=="function"?o:pa)}function wb(e,t,a,o,l){if(Ds(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};R.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,im(t,u)):(u.next=a.next,t.pending=a.next=u)}}function im(e,t){var a=t.action,o=t.payload,l=e.state;if(t.isTransition){var u=R.T,f={};R.T=f;try{var v=a(l,o),T=R.S;T!==null&&T(f,v),sm(e,t,v)}catch(D){Ql(e,t,D)}finally{u!==null&&f.types!==null&&(u.types=f.types),R.T=u}}else try{u=a(l,o),sm(e,t,u)}catch(D){Ql(e,t,D)}}function sm(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){rm(e,t,o)},function(o){return Ql(e,t,o)}):rm(e,t,a)}function rm(e,t,a){t.status="fulfilled",t.value=a,lm(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,im(e,a)))}function Ql(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,lm(t),t=t.next;while(t!==o)}e.action=null}function lm(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function um(e,t){return t}function cm(e,t){if(xe){var a=we.formState;if(a!==null){e:{var o=de;if(xe){if(je){t:{for(var l=je,u=Ht;l.nodeType!==8;){if(!u){l=null;break t}if(l=Qt(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){je=Qt(l.nextSibling),o=l.data==="F!";break e}}ja(o)}o=!1}o&&(t=a[0])}}return a=ft(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:t},a.queue=o,a=Nm.bind(null,de,o),o.dispatch=a,o=Gl(!1),u=Zl.bind(null,de,!1,o.queue),o=ft(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,a=wb.bind(null,de,l,u,a),l.dispatch=a,o.memoizedState=e,[t,a,!1]}function dm(e){var t=Pe();return fm(t,ze,e)}function fm(e,t,a){if(t=Ul(e,t,um)[0],e=As(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ti(t)}catch(f){throw f===to?hs:f}else o=t;t=Pe();var l=t.queue,u=l.dispatch;return a!==t.memoizedState&&(de.flags|=2048,so(9,{destroy:void 0},Rb.bind(null,l,a),null)),[o,u,e]}function Rb(e,t){e.action=t}function mm(e){var t=Pe(),a=ze;if(a!==null)return fm(t,a,e);Pe(),t=t.memoizedState,a=Pe();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function so(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=de.updateQueue,t===null&&(t=Ts(),de.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function hm(){return Pe().memoizedState}function Cs(e,t,a,o){var l=ft();de.flags|=e,l.memoizedState=so(1|t,{destroy:void 0},a,o===void 0?null:o)}function Ms(e,t,a,o){var l=Pe();o=o===void 0?null:o;var u=l.memoizedState.inst;ze!==null&&o!==null&&ql(o,ze.memoizedState.deps)?l.memoizedState=so(t,u,a,o):(de.flags|=e,l.memoizedState=so(1|t,u,a,o))}function pm(e,t){Cs(8390656,8,e,t)}function kl(e,t){Ms(2048,8,e,t)}function qb(e){de.flags|=4;var t=de.updateQueue;if(t===null)t=Ts(),de.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function gm(e){var t=Pe().memoizedState;return qb({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function vm(e,t){return Ms(4,2,e,t)}function ym(e,t){return Ms(4,4,e,t)}function bm(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sm(e,t,a){a=a!=null?a.concat([e]):null,Ms(4,4,bm.bind(null,t,e),a)}function Pl(){}function xm(e,t){var a=Pe();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&ql(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Tm(e,t){var a=Pe();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&ql(t,o[1]))return o[0];if(o=e(),En){Na(!0);try{e()}finally{Na(!1)}}return a.memoizedState=[o,t],o}function Yl(e,t,a){return a===void 0||(ha&1073741824)!==0&&(ye&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Eh(),de.lanes|=e,ka|=e,a)}function Em(e,t,a,o){return Mt(a,t)?a:no.current!==null?(e=Yl(e,a,o),Mt(e,t)||(Je=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(ye&261930)===0?(Je=!0,e.memoizedState=a):(e=Eh(),de.lanes|=e,ka|=e,t)}function Am(e,t,a,o,l){var u=G.p;G.p=u!==0&&8>u?u:8;var f=R.T,v={};R.T=v,Zl(e,!1,t,a);try{var T=l(),D=R.S;if(D!==null&&D(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var q=zb(T,o);ai(e,t,q,Rt(e))}else ai(e,t,o,Rt(e))}catch(V){ai(e,t,{then:function(){},status:"rejected",reason:V},Rt())}finally{G.p=u,f!==null&&v.types!==null&&(f.types=v.types),R.T=f}}function jb(){}function Xl(e,t,a,o){if(e.tag!==5)throw Error(r(476));var l=Cm(e).queue;Am(e,l,t,$,a===null?jb:function(){return Mm(e),a(o)})}function Cm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mm(e){var t=Cm(e);t.next===null&&(t=e.alternate.memoizedState),ai(e,t.next.queue,{},Rt())}function Jl(){return it(bi)}function Dm(){return Pe().memoizedState}function zm(){return Pe().memoizedState}function Vb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Rt();e=Ba(a);var o=La(t,e,a);o!==null&&(Tt(o,t,a),Wo(o,t,a)),t={cache:Tl()},e.payload=t;return}t=t.return}}function _b(e,t,a){var o=Rt();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ds(e)?Om(t,a):(a=dl(e,t,a,o),a!==null&&(Tt(a,e,o),wm(a,t,o)))}function Nm(e,t,a){var o=Rt();ai(e,t,a,o)}function ai(e,t,a,o){var l={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))Om(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,v=u(f,a);if(l.hasEagerState=!0,l.eagerState=v,Mt(v,f))return rs(e,t,l,0),we===null&&ss(),!1}catch{}finally{}if(a=dl(e,t,l,o),a!==null)return Tt(a,e,o),wm(a,t,o),!0}return!1}function Zl(e,t,a,o){if(o={lane:2,revertLane:Mu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(t)throw Error(r(479))}else t=dl(e,a,o,2),t!==null&&Tt(t,e,2)}function Ds(e){var t=e.alternate;return e===de||t!==null&&t===de}function Om(e,t){oo=Ss=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function wm(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Vd(e,a)}}var ni={readContext:it,use:Es,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};ni.useEffectEvent=Ue;var Rm={readContext:it,use:Es,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:pm,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Cs(4194308,4,bm.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Cs(4194308,4,e,t)},useInsertionEffect:function(e,t){Cs(4,2,e,t)},useMemo:function(e,t){var a=ft();t=t===void 0?null:t;var o=e();if(En){Na(!0);try{e()}finally{Na(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=ft();if(a!==void 0){var l=a(t);if(En){Na(!0);try{a(t)}finally{Na(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=_b.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=Gl(e);var t=e.queue,a=Nm.bind(null,de,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Pl,useDeferredValue:function(e,t){var a=ft();return Yl(a,e,t)},useTransition:function(){var e=Gl(!1);return e=Am.bind(null,de,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=de,l=ft();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),we===null)throw Error(r(349));(ye&127)!==0||If(o,t,a)}l.memoizedState=a;var u={value:a,getSnapshot:t};return l.queue=u,pm(tm.bind(null,o,u,e),[e]),o.flags|=2048,so(9,{destroy:void 0},em.bind(null,o,u,a,t),null),a},useId:function(){var e=ft(),t=we.identifierPrefix;if(xe){var a=ea,o=It;a=(o&~(1<<32-Ct(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=xs++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Nb++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Jl,useFormState:cm,useActionState:cm,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Zl.bind(null,de,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ll,useCacheRefresh:function(){return ft().memoizedState=Vb.bind(null,de)},useEffectEvent:function(e){var t=ft(),a={impl:e};return t.memoizedState=a,function(){if((Ae&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Kl={readContext:it,use:Es,useCallback:xm,useContext:it,useEffect:kl,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:ym,useMemo:Tm,useReducer:As,useRef:hm,useState:function(){return As(pa)},useDebugValue:Pl,useDeferredValue:function(e,t){var a=Pe();return Em(a,ze.memoizedState,e,t)},useTransition:function(){var e=As(pa)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:$f,useId:Dm,useHostTransitionStatus:Jl,useFormState:dm,useActionState:dm,useOptimistic:function(e,t){var a=Pe();return om(a,ze,e,t)},useMemoCache:Ll,useCacheRefresh:zm};Kl.useEffectEvent=gm;var qm={readContext:it,use:Es,useCallback:xm,useContext:it,useEffect:kl,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:ym,useMemo:Tm,useReducer:Hl,useRef:hm,useState:function(){return Hl(pa)},useDebugValue:Pl,useDeferredValue:function(e,t){var a=Pe();return ze===null?Yl(a,e,t):Em(a,ze.memoizedState,e,t)},useTransition:function(){var e=Hl(pa)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:$f,useId:Dm,useHostTransitionStatus:Jl,useFormState:mm,useActionState:mm,useOptimistic:function(e,t){var a=Pe();return ze!==null?om(a,ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ll,useCacheRefresh:zm};qm.useEffectEvent=gm;function Fl(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wl={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Rt(),l=Ba(o);l.payload=t,a!=null&&(l.callback=a),t=La(e,l,o),t!==null&&(Tt(t,e,o),Wo(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Rt(),l=Ba(o);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=La(e,l,o),t!==null&&(Tt(t,e,o),Wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Rt(),o=Ba(a);o.tag=2,t!=null&&(o.callback=t),t=La(e,o,a),t!==null&&(Tt(t,e,a),Wo(t,e,a))}};function jm(e,t,a,o,l,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,f):t.prototype&&t.prototype.isPureReactComponent?!ko(a,o)||!ko(l,u):!0}function Vm(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Wl.enqueueReplaceState(t,t.state,null)}function An(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function _m(e){is(e)}function Bm(e){console.error(e)}function Lm(e){is(e)}function zs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Um(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function $l(e,t,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){zs(e,t)},a}function Hm(e){return e=Ba(e),e.tag=3,e}function Gm(e,t,a,o){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;e.payload=function(){return l(u)},e.callback=function(){Um(t,a,o)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Um(t,a,o),typeof l!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var v=o.stack;this.componentDidCatch(o.value,{componentStack:v!==null?v:""})})}function Bb(e,t,a,o,l){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&$n(t,a,l,!0),a=zt.current,a!==null){switch(a.tag){case 31:case 13:return Gt===null?Hs():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=l,o===ps?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Eu(e,o,l)),!1;case 22:return a.flags|=65536,o===ps?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Eu(e,o,l)),!1}throw Error(r(435,a.tag))}return Eu(e,o,l),Hs(),!1}if(xe)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==vl&&(e=Error(r(422),{cause:o}),Xo(Bt(e,a)))):(o!==vl&&(t=Error(r(423),{cause:o}),Xo(Bt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=Bt(o,a),l=$l(e.stateNode,o,l),zl(e,l),He!==4&&(He=2)),!1;var u=Error(r(520),{cause:o});if(u=Bt(u,a),di===null?di=[u]:di.push(u),He!==4&&(He=2),t===null)return!0;o=Bt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=$l(a.stateNode,o,e),zl(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Pa===null||!Pa.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Hm(l),Gm(l,e,a,o),zl(a,l),!1}a=a.return}while(a!==null);return!1}var Il=Error(r(461)),Je=!1;function st(e,t,a,o){t.child=e===null?Yf(t,null,a,o):Tn(t,e.child,a,o)}function Qm(e,t,a,o,l){a=a.render;var u=t.ref;if("ref"in o){var f={};for(var v in o)v!=="ref"&&(f[v]=o[v])}else f=o;return yn(t),o=jl(e,t,a,f,u,l),v=Vl(),e!==null&&!Je?(_l(e,t,l),ga(e,t,l)):(xe&&v&&pl(t),t.flags|=1,st(e,t,o,l),t.child)}function km(e,t,a,o,l){if(e===null){var u=a.type;return typeof u=="function"&&!fl(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,Pm(e,t,u,o,l)):(e=us(a.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!ru(e,l)){var f=u.memoizedProps;if(a=a.compare,a=a!==null?a:ko,a(f,o)&&e.ref===t.ref)return ga(e,t,l)}return t.flags|=1,e=ca(u,o),e.ref=t.ref,e.return=t,t.child=e}function Pm(e,t,a,o,l){if(e!==null){var u=e.memoizedProps;if(ko(u,o)&&e.ref===t.ref)if(Je=!1,t.pendingProps=o=u,ru(e,l))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,ga(e,t,l)}return eu(e,t,a,o,l)}function Ym(e,t,a,o){var l=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~u}else o=0,t.child=null;return Xm(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ms(t,u!==null?u.cachePool:null),u!==null?Zf(t,u):Ol(),Kf(t);else return o=t.lanes=536870912,Xm(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(ms(t,u.cachePool),Zf(t,u),Ha(),t.memoizedState=null):(e!==null&&ms(t,null),Ol(),Ha());return st(e,t,l,a),t.child}function oi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Xm(e,t,a,o,l){var u=Al();return u=u===null?null:{parent:Ye._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&ms(t,null),Ol(),Kf(t),e!==null&&$n(e,t,o,!0),t.childLanes=l,null}function Ns(e,t){return t=ws({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Jm(e,t,a){return Tn(t,e.child,null,a),e=Ns(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function Lb(e,t,a){var o=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(o.mode==="hidden")return e=Ns(t,o),t.lanes=536870912,oi(null,e);if(Rl(t),(e=je)?(e=ip(e,Ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:It,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=Of(e),a.return=t,t.child=a,ot=t,je=null)):e=null,e===null)throw ja(t);return t.lanes=536870912,null}return Ns(t,o)}var u=e.memoizedState;if(u!==null){var f=u.dehydrated;if(Rl(t),l)if(t.flags&256)t.flags&=-257,t=Jm(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Je||$n(e,t,a,!1),l=(a&e.childLanes)!==0,Je||l){if(o=we,o!==null&&(f=_d(o,a),f!==0&&f!==u.retryLane))throw u.retryLane=f,hn(e,f),Tt(o,e,f),Il;Hs(),t=Jm(e,t,a)}else e=u.treeContext,je=Qt(f.nextSibling),ot=t,xe=!0,qa=null,Ht=!1,e!==null&&qf(t,e),t=Ns(t,o),t.flags|=4096;return t}return e=ca(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Os(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function eu(e,t,a,o,l){return yn(t),a=jl(e,t,a,o,void 0,l),o=Vl(),e!==null&&!Je?(_l(e,t,l),ga(e,t,l)):(xe&&o&&pl(t),t.flags|=1,st(e,t,a,l),t.child)}function Zm(e,t,a,o,l,u){return yn(t),t.updateQueue=null,a=Wf(t,o,a,l),Ff(e),o=Vl(),e!==null&&!Je?(_l(e,t,u),ga(e,t,u)):(xe&&o&&pl(t),t.flags|=1,st(e,t,a,u),t.child)}function Km(e,t,a,o,l){if(yn(t),t.stateNode===null){var u=Zn,f=a.contextType;typeof f=="object"&&f!==null&&(u=it(f)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Wl,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Ml(t),f=a.contextType,u.context=typeof f=="object"&&f!==null?it(f):Zn,u.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Fl(t,a,f,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Wl.enqueueReplaceState(u,u.state,null),Io(t,o,u,l),$o(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,T=An(a,v);u.props=T;var D=u.context,q=a.contextType;f=Zn,typeof q=="object"&&q!==null&&(f=it(q));var V=a.getDerivedStateFromProps;q=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,q||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||D!==f)&&Vm(t,u,o,f),_a=!1;var N=t.memoizedState;u.state=N,Io(t,o,u,l),$o(),D=t.memoizedState,v||N!==D||_a?(typeof V=="function"&&(Fl(t,a,V,o),D=t.memoizedState),(T=_a||jm(t,a,T,o,N,D,f))?(q||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=D),u.props=o,u.state=D,u.context=f,o=T):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Dl(e,t),f=t.memoizedProps,q=An(a,f),u.props=q,V=t.pendingProps,N=u.context,D=a.contextType,T=Zn,typeof D=="object"&&D!==null&&(T=it(D)),v=a.getDerivedStateFromProps,(D=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==V||N!==T)&&Vm(t,u,o,T),_a=!1,N=t.memoizedState,u.state=N,Io(t,o,u,l),$o();var O=t.memoizedState;f!==V||N!==O||_a||e!==null&&e.dependencies!==null&&ds(e.dependencies)?(typeof v=="function"&&(Fl(t,a,v,o),O=t.memoizedState),(q=_a||jm(t,a,q,o,N,O,T)||e!==null&&e.dependencies!==null&&ds(e.dependencies))?(D||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,O,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,O,T)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=O),u.props=o,u.state=O,u.context=T,o=q):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,Os(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=Tn(t,e.child,null,l),t.child=Tn(t,null,a,l)):st(e,t,a,l),t.memoizedState=u.state,e=t.child):e=ga(e,t,l),e}function Fm(e,t,a,o){return gn(),t.flags|=256,st(e,t,a,o),t.child}var tu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function au(e){return{baseLanes:e,cachePool:Uf()}}function nu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=wt),e}function Wm(e,t,a){var o=t.pendingProps,l=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(l?Ua(t):Ha(),(e=je)?(e=ip(e,Ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:It,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=Of(e),a.return=t,t.child=a,ot=t,je=null)):e=null,e===null)throw ja(t);return Uu(e)?t.lanes=32:t.lanes=536870912,null}var v=o.children;return o=o.fallback,l?(Ha(),l=t.mode,v=ws({mode:"hidden",children:v},l),o=pn(o,l,a,null),v.return=t,o.return=t,v.sibling=o,t.child=v,o=t.child,o.memoizedState=au(a),o.childLanes=nu(e,f,a),t.memoizedState=tu,oi(null,o)):(Ua(t),ou(t,v))}var T=e.memoizedState;if(T!==null&&(v=T.dehydrated,v!==null)){if(u)t.flags&256?(Ua(t),t.flags&=-257,t=iu(e,t,a)):t.memoizedState!==null?(Ha(),t.child=e.child,t.flags|=128,t=null):(Ha(),v=o.fallback,l=t.mode,o=ws({mode:"visible",children:o.children},l),v=pn(v,l,a,null),v.flags|=2,o.return=t,v.return=t,o.sibling=v,t.child=o,Tn(t,e.child,null,a),o=t.child,o.memoizedState=au(a),o.childLanes=nu(e,f,a),t.memoizedState=tu,t=oi(null,o));else if(Ua(t),Uu(v)){if(f=v.nextSibling&&v.nextSibling.dataset,f)var D=f.dgst;f=D,o=Error(r(419)),o.stack="",o.digest=f,Xo({value:o,source:null,stack:null}),t=iu(e,t,a)}else if(Je||$n(e,t,a,!1),f=(a&e.childLanes)!==0,Je||f){if(f=we,f!==null&&(o=_d(f,a),o!==0&&o!==T.retryLane))throw T.retryLane=o,hn(e,o),Tt(f,e,o),Il;Lu(v)||Hs(),t=iu(e,t,a)}else Lu(v)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,je=Qt(v.nextSibling),ot=t,xe=!0,qa=null,Ht=!1,e!==null&&qf(t,e),t=ou(t,o.children),t.flags|=4096);return t}return l?(Ha(),v=o.fallback,l=t.mode,T=e.child,D=T.sibling,o=ca(T,{mode:"hidden",children:o.children}),o.subtreeFlags=T.subtreeFlags&65011712,D!==null?v=ca(D,v):(v=pn(v,l,a,null),v.flags|=2),v.return=t,o.return=t,o.sibling=v,t.child=o,oi(null,o),o=t.child,v=e.child.memoizedState,v===null?v=au(a):(l=v.cachePool,l!==null?(T=Ye._currentValue,l=l.parent!==T?{parent:T,pool:T}:l):l=Uf(),v={baseLanes:v.baseLanes|a,cachePool:l}),o.memoizedState=v,o.childLanes=nu(e,f,a),t.memoizedState=tu,oi(e.child,o)):(Ua(t),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function ou(e,t){return t=ws({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ws(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function iu(e,t,a){return Tn(t,e.child,null,a),e=ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $m(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Sl(e.return,t,a)}function su(e,t,a,o,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:l,treeForkCount:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=l,f.treeForkCount=u)}function Im(e,t,a){var o=t.pendingProps,l=o.revealOrder,u=o.tail;o=o.children;var f=ke.current,v=(f&2)!==0;if(v?(f=f&1|2,t.flags|=128):f&=1,J(ke,f),st(e,t,o,a),o=xe?Yo:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,t);else if(e.tag===19)$m(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&bs(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),su(t,!1,l,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&bs(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}su(t,!0,a,null,u,o);break;case"together":su(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function ga(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ka|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($n(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=ca(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ru(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ds(e)))}function Ub(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),Va(t,Ye,e.memoizedState.cache),gn();break;case 27:case 5:Da(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:Va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Rl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wm(e,t,a):(Ua(t),e=ga(e,t,a),e!==null?e.sibling:null);Ua(t);break;case 19:var l=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||($n(e,t,a,!1),o=(a&t.childLanes)!==0),l){if(o)return Im(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(ke,ke.current),o)break;return null;case 22:return t.lanes=0,Ym(e,t,a,t.pendingProps);case 24:Va(t,Ye,e.memoizedState.cache)}return ga(e,t,a)}function eh(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!ru(e,a)&&(t.flags&128)===0)return Je=!1,Ub(e,t,a);Je=(e.flags&131072)!==0}else Je=!1,xe&&(t.flags&1048576)!==0&&Rf(t,Yo,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Sn(t.elementType),t.type=e,typeof e=="function")fl(e)?(o=An(e,o),t.tag=1,t=Km(null,t,e,o,a)):(t.tag=0,t=eu(null,t,e,o,a));else{if(e!=null){var l=e.$$typeof;if(l===Z){t.tag=11,t=Qm(null,t,e,o,a);break e}else if(l===W){t.tag=14,t=km(null,t,e,o,a);break e}}throw t=ut(e)||e,Error(r(306,t,""))}}return t;case 0:return eu(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,l=An(o,t.pendingProps),Km(e,t,o,l,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(r(387));o=t.pendingProps;var u=t.memoizedState;l=u.element,Dl(e,t),Io(t,o,null,a);var f=t.memoizedState;if(o=f.cache,Va(t,Ye,o),o!==u.cache&&xl(t,[Ye],a,!0),$o(),o=f.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Fm(e,t,o,a);break e}else if(o!==l){l=Bt(Error(r(424)),t),Xo(l),t=Fm(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=Qt(e.firstChild),ot=t,xe=!0,qa=null,Ht=!0,a=Yf(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gn(),o===l){t=ga(e,t,a);break e}st(e,t,o,a)}t=t.child}return t;case 26:return Os(e,t),e===null?(a=dp(t.type,null,t.pendingProps,null))?t.memoizedState=a:xe||(a=t.type,e=t.pendingProps,o=Js(le.current).createElement(a),o[nt]=t,o[gt]=e,rt(o,a,e),et(o),t.stateNode=o):t.memoizedState=dp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Da(t),e===null&&xe&&(o=t.stateNode=lp(t.type,t.pendingProps,le.current),ot=t,Ht=!0,l=je,Za(t.type)?(Hu=l,je=Qt(o.firstChild)):je=l),st(e,t,t.pendingProps.children,a),Os(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((l=o=je)&&(o=pS(o,t.type,t.pendingProps,Ht),o!==null?(t.stateNode=o,ot=t,je=Qt(o.firstChild),Ht=!1,l=!0):l=!1),l||ja(t)),Da(t),l=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,o=u.children,Vu(l,u)?o=null:f!==null&&Vu(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=jl(e,t,Ob,null,null,a),bi._currentValue=l),Os(e,t),st(e,t,o,a),t.child;case 6:return e===null&&xe&&((e=a=je)&&(a=gS(a,t.pendingProps,Ht),a!==null?(t.stateNode=a,ot=t,je=null,e=!0):e=!1),e||ja(t)),null;case 13:return Wm(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Tn(t,null,o,a):st(e,t,o,a),t.child;case 11:return Qm(e,t,t.type,t.pendingProps,a);case 7:return st(e,t,t.pendingProps,a),t.child;case 8:return st(e,t,t.pendingProps.children,a),t.child;case 12:return st(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Va(t,t.type,o.value),st(e,t,o.children,a),t.child;case 9:return l=t.type._context,o=t.pendingProps.children,yn(t),l=it(l),o=o(l),t.flags|=1,st(e,t,o,a),t.child;case 14:return km(e,t,t.type,t.pendingProps,a);case 15:return Pm(e,t,t.type,t.pendingProps,a);case 19:return Im(e,t,a);case 31:return Lb(e,t,a);case 22:return Ym(e,t,a,t.pendingProps);case 24:return yn(t),o=it(Ye),e===null?(l=Al(),l===null&&(l=we,u=Tl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),t.memoizedState={parent:o,cache:l},Ml(t),Va(t,Ye,l)):((e.lanes&a)!==0&&(Dl(e,t),Io(t,null,null,a),$o()),l=e.memoizedState,u=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Va(t,Ye,o)):(o=u.cache,Va(t,Ye,o),o!==l.cache&&xl(t,[Ye],a,!0))),st(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function va(e){e.flags|=4}function lu(e,t,a,o,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Dh())e.flags|=8192;else throw xn=ps,Cl}else e.flags&=-16777217}function th(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gp(t))if(Dh())e.flags|=8192;else throw xn=ps,Cl}function Rs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qd():536870912,e.lanes|=t,co|=t)}function ii(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function Hb(e,t,a){var o=t.pendingProps;switch(gl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),ma(Ye),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wn(t)?va(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yl())),Ve(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(va(t),u!==null?(Ve(t),th(t,u)):(Ve(t),lu(t,l,null,o,a))):u?u!==e.memoizedState?(va(t),Ve(t),th(t,u)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&va(t),Ve(t),lu(t,l,e,o,a)),null;case 27:if(sa(t),a=le.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&va(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return Ve(t),null}e=F.current,Wn(t)?jf(t):(e=lp(l,o,a),t.stateNode=e,va(t))}return Ve(t),null;case 5:if(sa(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&va(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return Ve(t),null}if(u=F.current,Wn(t))jf(t);else{var f=Js(le.current);switch(u){case 1:u=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=f.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?f.createElement("select",{is:o.is}):f.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?f.createElement(l,{is:o.is}):f.createElement(l)}}u[nt]=t,u[gt]=o;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)u.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=u;e:switch(rt(u,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&va(t)}}return Ve(t),lu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&va(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(r(166));if(e=le.current,Wn(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,l=ot,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}e[nt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Wh(e.nodeValue,a)),e||ja(t,!0)}else e=Js(e).createTextNode(o),e[nt]=t,t.stateNode=e}return Ve(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Wn(t),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[nt]=t}else gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else a=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Ve(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Wn(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[nt]=t}else gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),l=!1}else l=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Rs(t,t.updateQueue),Ve(t),null);case 4:return he(),e===null&&Ou(t.stateNode.containerInfo),Ve(t),null;case 10:return ma(t.type),Ve(t),null;case 19:if(_(ke),o=t.memoizedState,o===null)return Ve(t),null;if(l=(t.flags&128)!==0,u=o.rendering,u===null)if(l)ii(o,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=bs(e),u!==null){for(t.flags|=128,ii(o,!1),e=u.updateQueue,t.updateQueue=e,Rs(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Nf(a,e),a=a.sibling;return J(ke,ke.current&1|2),xe&&da(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Et()>Bs&&(t.flags|=128,l=!0,ii(o,!1),t.lanes=4194304)}else{if(!l)if(e=bs(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Rs(t,e),ii(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!xe)return Ve(t),null}else 2*Et()-o.renderingStartTime>Bs&&a!==536870912&&(t.flags|=128,l=!0,ii(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,a=ke.current,J(ke,l?a&1|2:a&1),xe&&da(t,o.treeForkCount),e):(Ve(t),null);case 22:case 23:return Nt(t),wl(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),a=t.updateQueue,a!==null&&Rs(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&_(bn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ma(Ye),Ve(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Gb(e,t){switch(gl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ma(Ye),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return sa(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(r(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(ke),null;case 4:return he(),null;case 10:return ma(t.type),null;case 22:case 23:return Nt(t),wl(),e!==null&&_(bn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ma(Ye),null;case 25:return null;default:return null}}function ah(e,t){switch(gl(t),t.tag){case 3:ma(Ye),he();break;case 26:case 27:case 5:sa(t);break;case 4:he();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:_(ke);break;case 10:ma(t.type);break;case 22:case 23:Nt(t),wl(),e!==null&&_(bn);break;case 24:ma(Ye)}}function si(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var l=o.next;a=l;do{if((a.tag&e)===e){o=void 0;var u=a.create,f=a.inst;o=u(),f.destroy=o}a=a.next}while(a!==l)}}catch(v){De(t,t.return,v)}}function Ga(e,t,a){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&e)===e){var f=o.inst,v=f.destroy;if(v!==void 0){f.destroy=void 0,l=t;var T=a,D=v;try{D()}catch(q){De(l,T,q)}}}o=o.next}while(o!==u)}}catch(q){De(t,t.return,q)}}function nh(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Jf(t,a)}catch(o){De(e,e.return,o)}}}function oh(e,t,a){a.props=An(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){De(e,t,o)}}function ri(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(l){De(e,t,l)}}function ta(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(l){De(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){De(e,t,l)}else a.current=null}function ih(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(l){De(e,e.return,l)}}function uu(e,t,a){try{var o=e.stateNode;uS(o,e.type,a,t),o[gt]=t}catch(l){De(e,e.return,l)}}function sh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function du(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=la));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(du(e,t,a),e=e.sibling;e!==null;)du(e,t,a),e=e.sibling}function qs(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(qs(e,t,a),e=e.sibling;e!==null;)qs(e,t,a),e=e.sibling}function rh(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);rt(t,o,a),t[nt]=e,t[gt]=a}catch(u){De(e,e.return,u)}}var ya=!1,Ze=!1,fu=!1,lh=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Qb(e,t){if(e=e.containerInfo,qu=er,e=Sf(e),il(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var f=0,v=-1,T=-1,D=0,q=0,V=e,N=null;t:for(;;){for(var O;V!==a||l!==0&&V.nodeType!==3||(v=f+l),V!==u||o!==0&&V.nodeType!==3||(T=f+o),V.nodeType===3&&(f+=V.nodeValue.length),(O=V.firstChild)!==null;)N=V,V=O;for(;;){if(V===e)break t;if(N===a&&++D===l&&(v=f),N===u&&++q===o&&(T=f),(O=V.nextSibling)!==null)break;V=N,N=V.parentNode}V=O}a=v===-1||T===-1?null:{start:v,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(ju={focusedElem:e,selectionRange:a},er=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,l=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var I=An(a.type,l);e=o.getSnapshotBeforeUpdate(I,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(ue){De(a,a.return,ue)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Bu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function uh(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),o&4&&si(5,a);break;case 1:if(Sa(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){De(a,a.return,f)}else{var l=An(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){De(a,a.return,f)}}o&64&&nh(a),o&512&&ri(a,a.return);break;case 3:if(Sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Jf(e,t)}catch(f){De(a,a.return,f)}}break;case 27:t===null&&o&4&&rh(a);case 26:case 5:Sa(e,a),t===null&&o&4&&ih(a),o&512&&ri(a,a.return);break;case 12:Sa(e,a);break;case 31:Sa(e,a),o&4&&fh(e,a);break;case 13:Sa(e,a),o&4&&mh(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Wb.bind(null,a),vS(e,a))));break;case 22:if(o=a.memoizedState!==null||ya,!o){t=t!==null&&t.memoizedState!==null||Ze,l=ya;var u=Ze;ya=o,(Ze=t)&&!u?xa(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),ya=l,Ze=u}break;case 30:break;default:Sa(e,a)}}function ch(e){var t=e.alternate;t!==null&&(e.alternate=null,ch(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,yt=!1;function ba(e,t,a){for(a=a.child;a!==null;)dh(e,t,a),a=a.sibling}function dh(e,t,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(wo,a)}catch{}switch(a.tag){case 26:Ze||ta(a,t),ba(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||ta(a,t);var o=Be,l=yt;Za(a.type)&&(Be=a.stateNode,yt=!1),ba(e,t,a),gi(a.stateNode),Be=o,yt=l;break;case 5:Ze||ta(a,t);case 6:if(o=Be,l=yt,Be=null,ba(e,t,a),Be=o,yt=l,Be!==null)if(yt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(u){De(a,t,u)}else try{Be.removeChild(a.stateNode)}catch(u){De(a,t,u)}break;case 18:Be!==null&&(yt?(e=Be,np(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bo(e)):np(Be,a.stateNode));break;case 4:o=Be,l=yt,Be=a.stateNode.containerInfo,yt=!0,ba(e,t,a),Be=o,yt=l;break;case 0:case 11:case 14:case 15:Ga(2,a,t),Ze||Ga(4,a,t),ba(e,t,a);break;case 1:Ze||(ta(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&oh(a,t,o)),ba(e,t,a);break;case 21:ba(e,t,a);break;case 22:Ze=(o=Ze)||a.memoizedState!==null,ba(e,t,a),Ze=o;break;default:ba(e,t,a)}}function fh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bo(e)}catch(a){De(t,t.return,a)}}}function mh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bo(e)}catch(a){De(t,t.return,a)}}function kb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new lh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new lh),t;default:throw Error(r(435,e.tag))}}function js(e,t){var a=kb(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var l=$b.bind(null,e,o);o.then(l,l)}})}function bt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var l=a[o],u=e,f=t,v=f;e:for(;v!==null;){switch(v.tag){case 27:if(Za(v.type)){Be=v.stateNode,yt=!1;break e}break;case 5:Be=v.stateNode,yt=!1;break e;case 3:case 4:Be=v.stateNode.containerInfo,yt=!0;break e}v=v.return}if(Be===null)throw Error(r(160));dh(u,f,l),Be=null,yt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hh(t,e),t=t.sibling}var Jt=null;function hh(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),St(e),o&4&&(Ga(3,e,e.return),si(3,e),Ga(5,e,e.return));break;case 1:bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),o&64&&ya&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var l=Jt;if(bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[jo]||u[nt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),rt(u,o,a),u[nt]=e,et(u),o=u;break e;case"link":var f=hp("link","href",l).get(o+(a.href||""));if(f){for(var v=0;v<f.length;v++)if(u=f[v],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(v,1);break t}}u=l.createElement(o),rt(u,o,a),l.head.appendChild(u);break;case"meta":if(f=hp("meta","content",l).get(o+(a.content||""))){for(v=0;v<f.length;v++)if(u=f[v],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(v,1);break t}}u=l.createElement(o),rt(u,o,a),l.head.appendChild(u);break;default:throw Error(r(468,o))}u[nt]=e,et(u),o=u}e.stateNode=o}else pp(l,e.type,e.stateNode);else e.stateNode=mp(l,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?pp(l,e.type,e.stateNode):mp(l,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uu(e,e.memoizedProps,a.memoizedProps)}break;case 27:bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),a!==null&&o&4&&uu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),e.flags&32){l=e.stateNode;try{Gn(l,"")}catch(I){De(e,e.return,I)}}o&4&&e.stateNode!=null&&(l=e.memoizedProps,uu(e,l,a!==null?a.memoizedProps:l)),o&1024&&(fu=!0);break;case 6:if(bt(t,e),St(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(I){De(e,e.return,I)}}break;case 3:if(Fs=null,l=Jt,Jt=Zs(t.containerInfo),bt(t,e),Jt=l,St(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(t.containerInfo)}catch(I){De(e,e.return,I)}fu&&(fu=!1,ph(e));break;case 4:o=Jt,Jt=Zs(e.stateNode.containerInfo),bt(t,e),St(e),Jt=o;break;case 12:bt(t,e),St(e);break;case 31:bt(t,e),St(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,js(e,o)));break;case 13:bt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_s=Et()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,js(e,o)));break;case 22:l=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,D=ya,q=Ze;if(ya=D||l,Ze=q||T,bt(t,e),Ze=q,ya=D,St(e),o&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||T||ya||Ze||Cn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){T=a=t;try{if(u=T.stateNode,l)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{v=T.stateNode;var V=T.memoizedProps.style,N=V!=null&&V.hasOwnProperty("display")?V.display:null;v.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(I){De(T,T.return,I)}}}else if(t.tag===6){if(a===null){T=t;try{T.stateNode.nodeValue=l?"":T.memoizedProps}catch(I){De(T,T.return,I)}}}else if(t.tag===18){if(a===null){T=t;try{var O=T.stateNode;l?op(O,!0):op(T.stateNode,!1)}catch(I){De(T,T.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,js(e,a))));break;case 19:bt(t,e),St(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,js(e,o)));break;case 30:break;case 21:break;default:bt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(sh(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var l=a.stateNode,u=cu(e);qs(e,u,l);break;case 5:var f=a.stateNode;a.flags&32&&(Gn(f,""),a.flags&=-33);var v=cu(e);qs(e,v,f);break;case 3:case 4:var T=a.stateNode.containerInfo,D=cu(e);du(e,D,T);break;default:throw Error(r(161))}}catch(q){De(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ph(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ph(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uh(e,t.alternate,t),t=t.sibling}function Cn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ga(4,t,t.return),Cn(t);break;case 1:ta(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&oh(t,t.return,a),Cn(t);break;case 27:gi(t.stateNode);case 26:case 5:ta(t,t.return),Cn(t);break;case 22:t.memoizedState===null&&Cn(t);break;case 30:Cn(t);break;default:Cn(t)}e=e.sibling}}function xa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,l=e,u=t,f=u.flags;switch(u.tag){case 0:case 11:case 15:xa(l,u,a),si(4,u);break;case 1:if(xa(l,u,a),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){De(o,o.return,D)}if(o=u,l=o.updateQueue,l!==null){var v=o.stateNode;try{var T=l.shared.hiddenCallbacks;if(T!==null)for(l.shared.hiddenCallbacks=null,l=0;l<T.length;l++)Xf(T[l],v)}catch(D){De(o,o.return,D)}}a&&f&64&&nh(u),ri(u,u.return);break;case 27:rh(u);case 26:case 5:xa(l,u,a),a&&o===null&&f&4&&ih(u),ri(u,u.return);break;case 12:xa(l,u,a);break;case 31:xa(l,u,a),a&&f&4&&fh(l,u);break;case 13:xa(l,u,a),a&&f&4&&mh(l,u);break;case 22:u.memoizedState===null&&xa(l,u,a),ri(u,u.return);break;case 30:break;default:xa(l,u,a)}t=t.sibling}}function mu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jo(a))}function hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e))}function Zt(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gh(e,t,a,o),t=t.sibling}function gh(e,t,a,o){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Zt(e,t,a,o),l&2048&&si(9,t);break;case 1:Zt(e,t,a,o);break;case 3:Zt(e,t,a,o),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e)));break;case 12:if(l&2048){Zt(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,f=u.id,v=u.onPostCommit;typeof v=="function"&&v(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){De(t,t.return,T)}}else Zt(e,t,a,o);break;case 31:Zt(e,t,a,o);break;case 13:Zt(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,f=t.alternate,t.memoizedState!==null?u._visibility&2?Zt(e,t,a,o):li(e,t):u._visibility&2?Zt(e,t,a,o):(u._visibility|=2,ro(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),l&2048&&mu(f,t);break;case 24:Zt(e,t,a,o),l&2048&&hu(t.alternate,t);break;default:Zt(e,t,a,o)}}function ro(e,t,a,o,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,f=t,v=a,T=o,D=f.flags;switch(f.tag){case 0:case 11:case 15:ro(u,f,v,T,l),si(8,f);break;case 23:break;case 22:var q=f.stateNode;f.memoizedState!==null?q._visibility&2?ro(u,f,v,T,l):li(u,f):(q._visibility|=2,ro(u,f,v,T,l)),l&&D&2048&&mu(f.alternate,f);break;case 24:ro(u,f,v,T,l),l&&D&2048&&hu(f.alternate,f);break;default:ro(u,f,v,T,l)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,l=o.flags;switch(o.tag){case 22:li(a,o),l&2048&&mu(o.alternate,o);break;case 24:li(a,o),l&2048&&hu(o.alternate,o);break;default:li(a,o)}t=t.sibling}}var ui=8192;function lo(e,t,a){if(e.subtreeFlags&ui)for(e=e.child;e!==null;)vh(e,t,a),e=e.sibling}function vh(e,t,a){switch(e.tag){case 26:lo(e,t,a),e.flags&ui&&e.memoizedState!==null&&NS(a,Jt,e.memoizedState,e.memoizedProps);break;case 5:lo(e,t,a);break;case 3:case 4:var o=Jt;Jt=Zs(e.stateNode.containerInfo),lo(e,t,a),Jt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ui,ui=16777216,lo(e,t,a),ui=o):lo(e,t,a));break;default:lo(e,t,a)}}function yh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];tt=o,Sh(o,e)}yh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bh(e),e=e.sibling}function bh(e){switch(e.tag){case 0:case 11:case 15:ci(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:ci(e);break;case 12:ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vs(e)):ci(e);break;default:ci(e)}}function Vs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];tt=o,Sh(o,e)}yh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ga(8,t,t.return),Vs(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Vs(t));break;default:Vs(t)}e=e.sibling}}function Sh(e,t){for(;tt!==null;){var a=tt;switch(a.tag){case 0:case 11:case 15:Ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Jo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,tt=o;else e:for(a=e;tt!==null;){o=tt;var l=o.sibling,u=o.return;if(ch(o),o===a){tt=null;break e}if(l!==null){l.return=u,tt=l;break e}tt=u}}}var Pb={getCacheForType:function(e){var t=it(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return it(Ye).controller.signal}},Yb=typeof WeakMap=="function"?WeakMap:Map,Ae=0,we=null,ge=null,ye=0,Me=0,Ot=null,Qa=!1,uo=!1,pu=!1,Ta=0,He=0,ka=0,Mn=0,gu=0,wt=0,co=0,di=null,xt=null,vu=!1,_s=0,xh=0,Bs=1/0,Ls=null,Pa=null,Fe=0,Ya=null,fo=null,Ea=0,yu=0,bu=null,Th=null,fi=0,Su=null;function Rt(){return(Ae&2)!==0&&ye!==0?ye&-ye:R.T!==null?Mu():Bd()}function Eh(){if(wt===0)if((ye&536870912)===0||xe){var e=Xi;Xi<<=1,(Xi&3932160)===0&&(Xi=262144),wt=e}else wt=536870912;return e=zt.current,e!==null&&(e.flags|=32),wt}function Tt(e,t,a){(e===we&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(mo(e,0),Xa(e,ye,wt,!1)),qo(e,a),((Ae&2)===0||e!==we)&&(e===we&&((Ae&2)===0&&(Mn|=a),He===4&&Xa(e,ye,wt,!1)),aa(e))}function Ah(e,t,a){if((Ae&6)!==0)throw Error(r(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ro(e,t),l=o?Zb(e,t):Tu(e,t,!0),u=o;do{if(l===0){uo&&!o&&Xa(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!Xb(a)){l=Tu(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var v=e;l=di;var T=v.current.memoizedState.isDehydrated;if(T&&(mo(v,f).flags|=256),f=Tu(v,f,!1),f!==2){if(pu&&!T){v.errorRecoveryDisabledLanes|=u,Mn|=u,l=4;break e}u=xt,xt=l,u!==null&&(xt===null?xt=u:xt.push.apply(xt,u))}l=f}if(u=!1,l!==2)continue}}if(l===1){mo(e,0),Xa(e,t,0,!0);break}e:{switch(o=e,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Xa(o,t,wt,!Qa);break e;case 2:xt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(l=_s+300-Et(),10<l)){if(Xa(o,t,wt,!Qa),Zi(o,0,!0)!==0)break e;Ea=t,o.timeoutHandle=tp(Ch.bind(null,o,a,xt,Ls,vu,t,wt,Mn,co,Qa,u,"Throttled",-0,0),l);break e}Ch(o,a,xt,Ls,vu,t,wt,Mn,co,Qa,u,null,-0,0)}}break}while(!0);aa(e)}function Ch(e,t,a,o,l,u,f,v,T,D,q,V,N,O){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},vh(t,u,V);var I=(u&62914560)===u?_s-Et():(u&4194048)===u?xh-Et():0;if(I=OS(V,I),I!==null){Ea=u,e.cancelPendingCommit=I(qh.bind(null,e,t,u,a,o,l,f,v,T,q,V,null,N,O)),Xa(e,u,f,!D);return}}qh(e,t,u,a,o,l,f,v,T)}function Xb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var l=a[o],u=l.getSnapshot;l=l.value;try{if(!Mt(u(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xa(e,t,a,o){t&=~gu,t&=~Mn,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var u=31-Ct(l),f=1<<u;o[u]=-1,l&=~f}a!==0&&jd(e,a,t)}function Us(){return(Ae&6)===0?(mi(0),!1):!0}function xu(){if(ge!==null){if(Me===0)var e=ge.return;else e=ge,fa=vn=null,Bl(e),ao=null,Ko=0,e=ge;for(;e!==null;)ah(e.alternate,e),e=e.return;ge=null}}function mo(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,fS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,xu(),we=e,ge=a=ca(e.current,null),ye=t,Me=0,Ot=null,Qa=!1,uo=Ro(e,t),pu=!1,co=wt=gu=Mn=ka=He=0,xt=di=null,vu=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var l=31-Ct(o),u=1<<l;t|=e[l],o&=~u}return Ta=t,ss(),a}function Mh(e,t){de=null,R.H=ni,t===to||t===hs?(t=Qf(),Me=3):t===Cl?(t=Qf(),Me=4):Me=t===Il?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ot=t,ge===null&&(He=1,zs(e,Bt(t,e.current)))}function Dh(){var e=zt.current;return e===null?!0:(ye&4194048)===ye?Gt===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Gt:!1}function zh(){var e=R.H;return R.H=ni,e===null?ni:e}function Nh(){var e=R.A;return R.A=Pb,e}function Hs(){He=4,Qa||(ye&4194048)!==ye&&zt.current!==null||(uo=!0),(ka&134217727)===0&&(Mn&134217727)===0||we===null||Xa(we,ye,wt,!1)}function Tu(e,t,a){var o=Ae;Ae|=2;var l=zh(),u=Nh();(we!==e||ye!==t)&&(Ls=null,mo(e,t)),t=!1;var f=He;e:do try{if(Me!==0&&ge!==null){var v=ge,T=Ot;switch(Me){case 8:xu(),f=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var D=Me;if(Me=0,Ot=null,ho(e,v,T,D),a&&uo){f=0;break e}break;default:D=Me,Me=0,Ot=null,ho(e,v,T,D)}}Jb(),f=He;break}catch(q){Mh(e,q)}while(!0);return t&&e.shellSuspendCounter++,fa=vn=null,Ae=o,R.H=l,R.A=u,ge===null&&(we=null,ye=0,ss()),f}function Jb(){for(;ge!==null;)Oh(ge)}function Zb(e,t){var a=Ae;Ae|=2;var o=zh(),l=Nh();we!==e||ye!==t?(Ls=null,Bs=Et()+500,mo(e,t)):uo=Ro(e,t);e:do try{if(Me!==0&&ge!==null){t=ge;var u=Ot;t:switch(Me){case 1:Me=0,Ot=null,ho(e,t,u,1);break;case 2:case 9:if(Hf(u)){Me=0,Ot=null,wh(t);break}t=function(){Me!==2&&Me!==9||we!==e||(Me=7),aa(e)},u.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:Hf(u)?(Me=0,Ot=null,wh(t)):(Me=0,Ot=null,ho(e,t,u,7));break;case 5:var f=null;switch(ge.tag){case 26:f=ge.memoizedState;case 5:case 27:var v=ge;if(f?gp(f):v.stateNode.complete){Me=0,Ot=null;var T=v.sibling;if(T!==null)ge=T;else{var D=v.return;D!==null?(ge=D,Gs(D)):ge=null}break t}}Me=0,Ot=null,ho(e,t,u,5);break;case 6:Me=0,Ot=null,ho(e,t,u,6);break;case 8:xu(),He=6;break e;default:throw Error(r(462))}}Kb();break}catch(q){Mh(e,q)}while(!0);return fa=vn=null,R.H=o,R.A=l,Ae=a,ge!==null?0:(we=null,ye=0,ss(),He)}function Kb(){for(;ge!==null&&!y0();)Oh(ge)}function Oh(e){var t=eh(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,t===null?Gs(e):ge=t}function wh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Zm(a,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=Zm(a,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Bl(t);default:ah(a,t),t=ge=Nf(t,Ta),t=eh(a,t,Ta)}e.memoizedProps=e.pendingProps,t===null?Gs(e):ge=t}function ho(e,t,a,o){fa=vn=null,Bl(t),ao=null,Ko=0;var l=t.return;try{if(Bb(e,l,t,a,ye)){He=1,zs(e,Bt(a,e.current)),ge=null;return}}catch(u){if(l!==null)throw ge=l,u;He=1,zs(e,Bt(a,e.current)),ge=null;return}t.flags&32768?(xe||o===1?e=!0:uo||(ye&536870912)!==0?e=!1:(Qa=e=!0,(o===2||o===9||o===3||o===6)&&(o=zt.current,o!==null&&o.tag===13&&(o.flags|=16384))),Rh(t,e)):Gs(t)}function Gs(e){var t=e;do{if((t.flags&32768)!==0){Rh(t,Qa);return}e=t.return;var a=Hb(t.alternate,t,Ta);if(a!==null){ge=a;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);He===0&&(He=5)}function Rh(e,t){do{var a=Gb(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);He=6,ge=null}function qh(e,t,a,o,l,u,f,v,T){e.cancelPendingCommit=null;do Qs();while(Fe!==0);if((Ae&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=cl,z0(e,a,u,f,v,T),e===we&&(ge=we=null,ye=0),fo=t,Ya=e,Ea=a,yu=u,bu=l,Th=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ib(Pi,function(){return Lh(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=R.T,R.T=null,l=G.p,G.p=2,f=Ae,Ae|=4;try{Qb(e,t,a)}finally{Ae=f,G.p=l,R.T=o}}Fe=1,jh(),Vh(),_h()}}function jh(){if(Fe===1){Fe=0;var e=Ya,t=fo,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var o=G.p;G.p=2;var l=Ae;Ae|=4;try{hh(t,e);var u=ju,f=Sf(e.containerInfo),v=u.focusedElem,T=u.selectionRange;if(f!==v&&v&&v.ownerDocument&&bf(v.ownerDocument.documentElement,v)){if(T!==null&&il(v)){var D=T.start,q=T.end;if(q===void 0&&(q=D),"selectionStart"in v)v.selectionStart=D,v.selectionEnd=Math.min(q,v.value.length);else{var V=v.ownerDocument||document,N=V&&V.defaultView||window;if(N.getSelection){var O=N.getSelection(),I=v.textContent.length,ue=Math.min(T.start,I),Oe=T.end===void 0?ue:Math.min(T.end,I);!O.extend&&ue>Oe&&(f=Oe,Oe=ue,ue=f);var C=yf(v,ue),E=yf(v,Oe);if(C&&E&&(O.rangeCount!==1||O.anchorNode!==C.node||O.anchorOffset!==C.offset||O.focusNode!==E.node||O.focusOffset!==E.offset)){var M=V.createRange();M.setStart(C.node,C.offset),O.removeAllRanges(),ue>Oe?(O.addRange(M),O.extend(E.node,E.offset)):(M.setEnd(E.node,E.offset),O.addRange(M))}}}}for(V=[],O=v;O=O.parentNode;)O.nodeType===1&&V.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<V.length;v++){var j=V[v];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}er=!!qu,ju=qu=null}finally{Ae=l,G.p=o,R.T=a}}e.current=t,Fe=2}}function Vh(){if(Fe===2){Fe=0;var e=Ya,t=fo,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var o=G.p;G.p=2;var l=Ae;Ae|=4;try{uh(e,t.alternate,t)}finally{Ae=l,G.p=o,R.T=a}}Fe=3}}function _h(){if(Fe===4||Fe===3){Fe=0,b0();var e=Ya,t=fo,a=Ea,o=Th;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,fo=Ya=null,Bh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Pa=null),Hr(a),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(wo,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=R.T,l=G.p,G.p=2,R.T=null;try{for(var u=e.onRecoverableError,f=0;f<o.length;f++){var v=o[f];u(v.value,{componentStack:v.stack})}}finally{R.T=t,G.p=l}}(Ea&3)!==0&&Qs(),aa(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Su?fi++:(fi=0,Su=e):fi=0,mi(0)}}function Bh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jo(t)))}function Qs(){return jh(),Vh(),_h(),Lh()}function Lh(){if(Fe!==5)return!1;var e=Ya,t=yu;yu=0;var a=Hr(Ea),o=R.T,l=G.p;try{G.p=32>a?32:a,R.T=null,a=bu,bu=null;var u=Ya,f=Ea;if(Fe=0,fo=Ya=null,Ea=0,(Ae&6)!==0)throw Error(r(331));var v=Ae;if(Ae|=4,bh(u.current),gh(u,u.current,f,a),Ae=v,mi(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(wo,u)}catch{}return!0}finally{G.p=l,R.T=o,Bh(e,t)}}function Uh(e,t,a){t=Bt(a,t),t=$l(e.stateNode,t,2),e=La(e,t,2),e!==null&&(qo(e,2),aa(e))}function De(e,t,a){if(e.tag===3)Uh(e,e,a);else for(;t!==null;){if(t.tag===3){Uh(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))){e=Bt(a,e),a=Hm(2),o=La(t,a,2),o!==null&&(Gm(a,o,t,e),qo(o,2),aa(o));break}}t=t.return}}function Eu(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Yb;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(a)||(pu=!0,l.add(a),e=Fb.bind(null,e,t,a),t.then(e,e))}function Fb(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,we===e&&(ye&a)===a&&(He===4||He===3&&(ye&62914560)===ye&&300>Et()-_s?(Ae&2)===0&&mo(e,0):gu|=a,co===ye&&(co=0)),aa(e)}function Hh(e,t){t===0&&(t=qd()),e=hn(e,t),e!==null&&(qo(e,t),aa(e))}function Wb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Hh(e,a)}function $b(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(t),Hh(e,a)}function Ib(e,t){return _r(e,t)}var ks=null,po=null,Au=!1,Ps=!1,Cu=!1,Ja=0;function aa(e){e!==po&&e.next===null&&(po===null?ks=po=e:po=po.next=e),Ps=!0,Au||(Au=!0,tS())}function mi(e,t){if(!Cu&&Ps){Cu=!0;do for(var a=!1,o=ks;o!==null;){if(e!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var f=o.suspendedLanes,v=o.pingedLanes;u=(1<<31-Ct(42|e)+1)-1,u&=l&~(f&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Ph(o,u))}else u=ye,u=Zi(o,o===we?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Ro(o,u)||(a=!0,Ph(o,u));o=o.next}while(a);Cu=!1}}function eS(){Gh()}function Gh(){Ps=Au=!1;var e=0;Ja!==0&&dS()&&(e=Ja);for(var t=Et(),a=null,o=ks;o!==null;){var l=o.next,u=Qh(o,t);u===0?(o.next=null,a===null?ks=l:a.next=l,l===null&&(po=a)):(a=o,(e!==0||(u&3)!==0)&&(Ps=!0)),o=l}Fe!==0&&Fe!==5||mi(e),Ja!==0&&(Ja=0)}function Qh(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var f=31-Ct(u),v=1<<f,T=l[f];T===-1?((v&a)===0||(v&o)!==0)&&(l[f]=D0(v,t)):T<=t&&(e.expiredLanes|=v),u&=~v}if(t=we,a=ye,a=Zi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Br(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ro(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Br(o),Hr(a)){case 2:case 8:a=wd;break;case 32:a=Pi;break;case 268435456:a=Rd;break;default:a=Pi}return o=kh.bind(null,e),a=_r(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Br(o),e.callbackPriority=2,e.callbackNode=null,2}function kh(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Qs()&&e.callbackNode!==a)return null;var o=ye;return o=Zi(e,e===we?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ah(e,o,t),Qh(e,Et()),e.callbackNode!=null&&e.callbackNode===a?kh.bind(null,e):null)}function Ph(e,t){if(Qs())return null;Ah(e,t,!0)}function tS(){mS(function(){(Ae&6)!==0?_r(Od,eS):Gh()})}function Mu(){if(Ja===0){var e=In;e===0&&(e=Yi,Yi<<=1,(Yi&261888)===0&&(Yi=256)),Ja=e}return Ja}function Yh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$i(""+e)}function Xh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function aS(e,t,a,o,l){if(t==="submit"&&a&&a.stateNode===l){var u=Yh((l[gt]||null).action),f=o.submitter;f&&(t=(t=f[gt]||null)?Yh(t.formAction):f.getAttribute("formAction"),t!==null&&(u=t,f=null));var v=new as("action","action",null,o,l);e.push({event:v,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var T=f?Xh(l,f):new FormData(l);Xl(a,{pending:!0,data:T,method:l.method,action:u},null,T)}}else typeof u=="function"&&(v.preventDefault(),T=f?Xh(l,f):new FormData(l),Xl(a,{pending:!0,data:T,method:l.method,action:u},u,T))},currentTarget:l}]})}}for(var Du=0;Du<ul.length;Du++){var zu=ul[Du],nS=zu.toLowerCase(),oS=zu[0].toUpperCase()+zu.slice(1);Xt(nS,"on"+oS)}Xt(Ef,"onAnimationEnd"),Xt(Af,"onAnimationIteration"),Xt(Cf,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Sb,"onTransitionRun"),Xt(xb,"onTransitionStart"),Xt(Tb,"onTransitionCancel"),Xt(Mf,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hi));function Jh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var f=o.length-1;0<=f;f--){var v=o[f],T=v.instance,D=v.currentTarget;if(v=v.listener,T!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=D;try{u(l)}catch(q){is(q)}l.currentTarget=null,u=T}else for(f=0;f<o.length;f++){if(v=o[f],T=v.instance,D=v.currentTarget,v=v.listener,T!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=D;try{u(l)}catch(q){is(q)}l.currentTarget=null,u=T}}}}function ve(e,t){var a=t[Gr];a===void 0&&(a=t[Gr]=new Set);var o=e+"__bubble";a.has(o)||(Zh(t,e,2,!1),a.add(o))}function Nu(e,t,a){var o=0;t&&(o|=4),Zh(a,e,o,t)}var Ys="_reactListening"+Math.random().toString(36).slice(2);function Ou(e){if(!e[Ys]){e[Ys]=!0,Hd.forEach(function(a){a!=="selectionchange"&&(iS.has(a)||Nu(a,!1,e),Nu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ys]||(t[Ys]=!0,Nu("selectionchange",!1,t))}}function Zh(e,t,a,o){switch(Ep(t)){case 2:var l=qS;break;case 8:l=jS;break;default:l=Yu}a=l.bind(null,t,a,e),l=void 0,!Fr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function wu(e,t,a,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var f=o.tag;if(f===3||f===4){var v=o.stateNode.containerInfo;if(v===l)break;if(f===4)for(f=o.return;f!==null;){var T=f.tag;if((T===3||T===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;v!==null;){if(f=_n(v),f===null)return;if(T=f.tag,T===5||T===6||T===26||T===27){o=u=f;continue e}v=v.parentNode}}o=o.return}$d(function(){var D=u,q=Zr(a),V=[];e:{var N=Df.get(e);if(N!==void 0){var O=as,I=e;switch(e){case"keypress":if(es(a)===0)break e;case"keydown":case"keyup":O=$0;break;case"focusin":I="focus",O=el;break;case"focusout":I="blur",O=el;break;case"beforeblur":case"afterblur":O=el;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=tb;break;case Ef:case Af:case Cf:O=k0;break;case Mf:O=nb;break;case"scroll":case"scrollend":O=L0;break;case"wheel":O=ib;break;case"copy":case"cut":case"paste":O=Y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=nf;break;case"toggle":case"beforetoggle":O=rb}var ue=(t&4)!==0,Oe=!ue&&(e==="scroll"||e==="scrollend"),C=ue?N!==null?N+"Capture":null:N;ue=[];for(var E=D,M;E!==null;){var j=E;if(M=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||M===null||C===null||(j=_o(E,C),j!=null&&ue.push(pi(E,j,M))),Oe)break;E=E.return}0<ue.length&&(N=new O(N,I,null,a,q),V.push({event:N,listeners:ue}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",N&&a!==Jr&&(I=a.relatedTarget||a.fromElement)&&(_n(I)||I[Vn]))break e;if((O||N)&&(N=q.window===q?q:(N=q.ownerDocument)?N.defaultView||N.parentWindow:window,O?(I=a.relatedTarget||a.toElement,O=D,I=I?_n(I):null,I!==null&&(Oe=m(I),ue=I.tag,I!==Oe||ue!==5&&ue!==27&&ue!==6)&&(I=null)):(O=null,I=D),O!==I)){if(ue=tf,j="onMouseLeave",C="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ue=nf,j="onPointerLeave",C="onPointerEnter",E="pointer"),Oe=O==null?N:Vo(O),M=I==null?N:Vo(I),N=new ue(j,E+"leave",O,a,q),N.target=Oe,N.relatedTarget=M,j=null,_n(q)===D&&(ue=new ue(C,E+"enter",I,a,q),ue.target=M,ue.relatedTarget=Oe,j=ue),Oe=j,O&&I)t:{for(ue=sS,C=O,E=I,M=0,j=C;j;j=ue(j))M++;j=0;for(var re=E;re;re=ue(re))j++;for(;0<M-j;)C=ue(C),M--;for(;0<j-M;)E=ue(E),j--;for(;M--;){if(C===E||E!==null&&C===E.alternate){ue=C;break t}C=ue(C),E=ue(E)}ue=null}else ue=null;O!==null&&Kh(V,N,O,ue,!1),I!==null&&Oe!==null&&Kh(V,Oe,I,ue,!0)}}e:{if(N=D?Vo(D):window,O=N.nodeName&&N.nodeName.toLowerCase(),O==="select"||O==="input"&&N.type==="file")var Te=ff;else if(cf(N))if(mf)Te=vb;else{Te=pb;var ne=hb}else O=N.nodeName,!O||O.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?D&&Xr(D.elementType)&&(Te=ff):Te=gb;if(Te&&(Te=Te(e,D))){df(V,Te,a,q);break e}ne&&ne(e,N,D),e==="focusout"&&D&&N.type==="number"&&D.memoizedProps.value!=null&&Yr(N,"number",N.value)}switch(ne=D?Vo(D):window,e){case"focusin":(cf(ne)||ne.contentEditable==="true")&&(Yn=ne,sl=D,Po=null);break;case"focusout":Po=sl=Yn=null;break;case"mousedown":rl=!0;break;case"contextmenu":case"mouseup":case"dragend":rl=!1,xf(V,a,q);break;case"selectionchange":if(bb)break;case"keydown":case"keyup":xf(V,a,q)}var fe;if(al)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Pn?lf(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(of&&a.locale!=="ko"&&(Pn||be!=="onCompositionStart"?be==="onCompositionEnd"&&Pn&&(fe=Id()):(wa=q,Wr="value"in wa?wa.value:wa.textContent,Pn=!0)),ne=Xs(D,be),0<ne.length&&(be=new af(be,e,null,a,q),V.push({event:be,listeners:ne}),fe?be.data=fe:(fe=uf(a),fe!==null&&(be.data=fe)))),(fe=ub?cb(e,a):db(e,a))&&(be=Xs(D,"onBeforeInput"),0<be.length&&(ne=new af("onBeforeInput","beforeinput",null,a,q),V.push({event:ne,listeners:be}),ne.data=fe)),aS(V,e,D,a,q)}Jh(V,t)})}function pi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Xs(e,t){for(var a=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=_o(e,a),l!=null&&o.unshift(pi(e,l,u)),l=_o(e,t),l!=null&&o.push(pi(e,l,u))),e.tag===3)return o;e=e.return}return[]}function sS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kh(e,t,a,o,l){for(var u=t._reactName,f=[];a!==null&&a!==o;){var v=a,T=v.alternate,D=v.stateNode;if(v=v.tag,T!==null&&T===o)break;v!==5&&v!==26&&v!==27||D===null||(T=D,l?(D=_o(a,u),D!=null&&f.unshift(pi(a,D,T))):l||(D=_o(a,u),D!=null&&f.push(pi(a,D,T)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var rS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function Fh(e){return(typeof e=="string"?e:""+e).replace(rS,`
`).replace(lS,"")}function Wh(e,t){return t=Fh(t),Fh(e)===t}function Ne(e,t,a,o,l,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Gn(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Gn(e,""+o);break;case"className":Fi(e,"class",o);break;case"tabIndex":Fi(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Fi(e,a,o);break;case"style":Fd(e,o,u);break;case"data":if(t!=="object"){Fi(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$i(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&Ne(e,t,"name",l.name,l,null),Ne(e,t,"formEncType",l.formEncType,l,null),Ne(e,t,"formMethod",l.formMethod,l,null),Ne(e,t,"formTarget",l.formTarget,l,null)):(Ne(e,t,"encType",l.encType,l,null),Ne(e,t,"method",l.method,l,null),Ne(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$i(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=la);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=$i(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ki(e,"popover",o);break;case"xlinkActuate":ra(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ra(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ra(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ra(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ra(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ra(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ra(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ra(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ra(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ki(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_0.get(a)||a,Ki(e,a,o))}}function Ru(e,t,a,o,l,u){switch(a){case"style":Fd(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Gn(e,o):(typeof o=="number"||typeof o=="bigint")&&Gn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),u=e[gt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,l);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ki(e,a,o)}}}function rt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var f=a[u];if(f!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ne(e,t,u,f,a,null)}}l&&Ne(e,t,"srcSet",a.srcSet,a,null),o&&Ne(e,t,"src",a.src,a,null);return;case"input":ve("invalid",e);var v=u=f=l=null,T=null,D=null;for(o in a)if(a.hasOwnProperty(o)){var q=a[o];if(q!=null)switch(o){case"name":l=q;break;case"type":f=q;break;case"checked":T=q;break;case"defaultChecked":D=q;break;case"value":u=q;break;case"defaultValue":v=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,t));break;default:Ne(e,t,o,q,a,null)}}Xd(e,u,v,T,D,f,l,!1);return;case"select":ve("invalid",e),o=f=u=null;for(l in a)if(a.hasOwnProperty(l)&&(v=a[l],v!=null))switch(l){case"value":u=v;break;case"defaultValue":f=v;break;case"multiple":o=v;default:Ne(e,t,l,v,a,null)}t=u,a=f,e.multiple=!!o,t!=null?Hn(e,!!o,t,!1):a!=null&&Hn(e,!!o,a,!0);return;case"textarea":ve("invalid",e),u=l=o=null;for(f in a)if(a.hasOwnProperty(f)&&(v=a[f],v!=null))switch(f){case"value":o=v;break;case"defaultValue":l=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(91));break;default:Ne(e,t,f,v,a,null)}Zd(e,o,l,u);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(o=a[T],o!=null))switch(T){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ne(e,t,T,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<hi.length;o++)ve(hi[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(o=a[D],o!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ne(e,t,D,o,a,null)}return;default:if(Xr(t)){for(q in a)a.hasOwnProperty(q)&&(o=a[q],o!==void 0&&Ru(e,t,q,o,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(o=a[v],o!=null&&Ne(e,t,v,o,a,null))}function uS(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,f=null,v=null,T=null,D=null,q=null;for(O in a){var V=a[O];if(a.hasOwnProperty(O)&&V!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":T=V;default:o.hasOwnProperty(O)||Ne(e,t,O,null,o,V)}}for(var N in o){var O=o[N];if(V=a[N],o.hasOwnProperty(N)&&(O!=null||V!=null))switch(N){case"type":u=O;break;case"name":l=O;break;case"checked":D=O;break;case"defaultChecked":q=O;break;case"value":f=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:O!==V&&Ne(e,t,N,O,o,V)}}Pr(e,f,v,T,D,q,u,l);return;case"select":O=f=v=N=null;for(u in a)if(T=a[u],a.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":O=T;default:o.hasOwnProperty(u)||Ne(e,t,u,null,o,T)}for(l in o)if(u=o[l],T=a[l],o.hasOwnProperty(l)&&(u!=null||T!=null))switch(l){case"value":N=u;break;case"defaultValue":v=u;break;case"multiple":f=u;default:u!==T&&Ne(e,t,l,u,o,T)}t=v,a=f,o=O,N!=null?Hn(e,!!a,N,!1):!!o!=!!a&&(t!=null?Hn(e,!!a,t,!0):Hn(e,!!a,a?[]:"",!1));return;case"textarea":O=N=null;for(v in a)if(l=a[v],a.hasOwnProperty(v)&&l!=null&&!o.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ne(e,t,v,null,o,l)}for(f in o)if(l=o[f],u=a[f],o.hasOwnProperty(f)&&(l!=null||u!=null))switch(f){case"value":N=l;break;case"defaultValue":O=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&Ne(e,t,f,l,o,u)}Jd(e,N,O);return;case"option":for(var I in a)if(N=a[I],a.hasOwnProperty(I)&&N!=null&&!o.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:Ne(e,t,I,null,o,N)}for(T in o)if(N=o[T],O=a[T],o.hasOwnProperty(T)&&N!==O&&(N!=null||O!=null))switch(T){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Ne(e,t,T,N,o,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in a)N=a[ue],a.hasOwnProperty(ue)&&N!=null&&!o.hasOwnProperty(ue)&&Ne(e,t,ue,null,o,N);for(D in o)if(N=o[D],O=a[D],o.hasOwnProperty(D)&&N!==O&&(N!=null||O!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,t));break;default:Ne(e,t,D,N,o,O)}return;default:if(Xr(t)){for(var Oe in a)N=a[Oe],a.hasOwnProperty(Oe)&&N!==void 0&&!o.hasOwnProperty(Oe)&&Ru(e,t,Oe,void 0,o,N);for(q in o)N=o[q],O=a[q],!o.hasOwnProperty(q)||N===O||N===void 0&&O===void 0||Ru(e,t,q,N,o,O);return}}for(var C in a)N=a[C],a.hasOwnProperty(C)&&N!=null&&!o.hasOwnProperty(C)&&Ne(e,t,C,null,o,N);for(V in o)N=o[V],O=a[V],!o.hasOwnProperty(V)||N===O||N==null&&O==null||Ne(e,t,V,N,o,O)}function $h(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var l=a[o],u=l.transferSize,f=l.initiatorType,v=l.duration;if(u&&v&&$h(f)){for(f=0,v=l.responseEnd,o+=1;o<a.length;o++){var T=a[o],D=T.startTime;if(D>v)break;var q=T.transferSize,V=T.initiatorType;q&&$h(V)&&(T=T.responseEnd,f+=q*(T<v?1:(v-D)/(T-D)))}if(--o,t+=8*(u+f)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qu=null,ju=null;function Js(e){return e.nodeType===9?e:e.ownerDocument}function Ih(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ep(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=null;function dS(){var e=window.event;return e&&e.type==="popstate"?e===_u?!1:(_u=e,!0):(_u=null,!1)}var tp=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,mS=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(e){return ap.resolve(null).then(e).catch(hS)}:tp;function hS(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function np(e,t){var a=t,o=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(l),bo(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")gi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,gi(a);for(var u=a.firstChild;u;){var f=u.nextSibling,v=u.nodeName;u[jo]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=f}}else a==="body"&&gi(e.ownerDocument.body);a=l}while(a);bo(t)}function op(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Bu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bu(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function pS(e,t,a,o){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[jo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function gS(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qt(e.nextSibling),e===null))return null;return e}function ip(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function Lu(e){return e.data==="$?"||e.data==="$~"}function Uu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vS(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hu=null;function sp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Qt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function rp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function lp(e,t,a){switch(t=Js(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function gi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qr(e)}var kt=new Map,up=new Set;function Zs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=G.d;G.d={f:yS,r:bS,D:SS,C:xS,L:TS,m:ES,X:CS,S:AS,M:MS};function yS(){var e=Aa.f(),t=Us();return e||t}function bS(e){var t=Bn(e);t!==null&&t.tag===5&&t.type==="form"?Mm(t):Aa.r(e)}var go=typeof document>"u"?null:document;function cp(e,t,a){var o=go;if(o&&typeof t=="string"&&t){var l=Vt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),up.has(l)||(up.add(l),e={rel:e,crossOrigin:a,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),rt(t,"link",e),et(t),o.head.appendChild(t)))}}function SS(e){Aa.D(e),cp("dns-prefetch",e,null)}function xS(e,t){Aa.C(e,t),cp("preconnect",e,t)}function TS(e,t,a){Aa.L(e,t,a);var o=go;if(o&&e&&t){var l='link[rel="preload"][as="'+Vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Vt(a.imageSizes)+'"]')):l+='[href="'+Vt(e)+'"]';var u=l;switch(t){case"style":u=vo(e);break;case"script":u=yo(e)}kt.has(u)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),kt.set(u,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(vi(u))||t==="script"&&o.querySelector(yi(u))||(t=o.createElement("link"),rt(t,"link",e),et(t),o.head.appendChild(t)))}}function ES(e,t){Aa.m(e,t);var a=go;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(e)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=yo(e)}if(!kt.has(u)&&(e=b({rel:"modulepreload",href:e},t),kt.set(u,e),a.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yi(u)))return}o=a.createElement("link"),rt(o,"link",e),et(o),a.head.appendChild(o)}}}function AS(e,t,a){Aa.S(e,t,a);var o=go;if(o&&e){var l=Ln(o).hoistableStyles,u=vo(e);t=t||"default";var f=l.get(u);if(!f){var v={loading:0,preload:null};if(f=o.querySelector(vi(u)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=kt.get(u))&&Gu(e,a);var T=f=o.createElement("link");et(T),rt(T,"link",e),T._p=new Promise(function(D,q){T.onload=D,T.onerror=q}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ks(f,t,o)}f={type:"stylesheet",instance:f,count:1,state:v},l.set(u,f)}}}function CS(e,t){Aa.X(e,t);var a=go;if(a&&e){var o=Ln(a).hoistableScripts,l=yo(e),u=o.get(l);u||(u=a.querySelector(yi(l)),u||(e=b({src:e,async:!0},t),(t=kt.get(l))&&Qu(e,t),u=a.createElement("script"),et(u),rt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function MS(e,t){Aa.M(e,t);var a=go;if(a&&e){var o=Ln(a).hoistableScripts,l=yo(e),u=o.get(l);u||(u=a.querySelector(yi(l)),u||(e=b({src:e,async:!0,type:"module"},t),(t=kt.get(l))&&Qu(e,t),u=a.createElement("script"),et(u),rt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function dp(e,t,a,o){var l=(l=le.current)?Zs(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=vo(a.href),a=Ln(l).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vo(a.href);var u=Ln(l).hoistableStyles,f=u.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,f),(u=l.querySelector(vi(e)))&&!u._p&&(f.instance=u,f.state.loading=5),kt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kt.set(e,a),u||DS(l,e,a,f.state))),t&&o===null)throw Error(r(528,""));return f}if(t&&o!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yo(a),a=Ln(l).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function vo(e){return'href="'+Vt(e)+'"'}function vi(e){return'link[rel="stylesheet"]['+e+"]"}function fp(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function DS(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),rt(t,"link",a),et(t),e.head.appendChild(t))}function yo(e){return'[src="'+Vt(e)+'"]'}function yi(e){return"script[async]"+e}function mp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return t.instance=o,et(o),o;var l=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),et(o),rt(o,"style",l),Ks(o,a.precedence,e),t.instance=o;case"stylesheet":l=vo(a.href);var u=e.querySelector(vi(l));if(u)return t.state.loading|=4,t.instance=u,et(u),u;o=fp(a),(l=kt.get(l))&&Gu(o,l),u=(e.ownerDocument||e).createElement("link"),et(u);var f=u;return f._p=new Promise(function(v,T){f.onload=v,f.onerror=T}),rt(u,"link",o),t.state.loading|=4,Ks(u,a.precedence,e),t.instance=u;case"script":return u=yo(a.src),(l=e.querySelector(yi(u)))?(t.instance=l,et(l),l):(o=a,(l=kt.get(u))&&(o=b({},a),Qu(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),et(l),rt(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Ks(o,a.precedence,e));return t.instance}function Ks(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,f=0;f<o.length;f++){var v=o[f];if(v.dataset.precedence===t)u=v;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Qu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fs=null;function hp(e,t,a){if(Fs===null){var o=new Map,l=Fs=new Map;l.set(a,o)}else l=Fs,o=l.get(a),o||(o=new Map,l.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[jo]||u[nt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(t)||"";f=e+f;var v=o.get(f);v?v.push(u):o.set(f,[u])}}return o}function pp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function zS(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function NS(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=vo(o.href),u=t.querySelector(vi(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ws.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,et(u);return}u=t.ownerDocument||t,o=fp(o),(l=kt.get(l))&&Gu(o,l),u=u.createElement("link"),et(u);var f=u;f._p=new Promise(function(v,T){f.onload=v,f.onerror=T}),rt(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ws.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var ku=0;function OS(e,t){return e.stylesheets&&e.count===0&&Is(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Is(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&ku===0&&(ku=62500*cS());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Is(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>ku?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function Ws(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Is(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $s=null;function Is(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$s=new Map,t.forEach(wS,e),$s=null,Ws.call(e))}function wS(e,t){if(!(t.state.loading&4)){var a=$s.get(e);if(a)var o=a.get(null);else{a=new Map,$s.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var f=l[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),o=f)}o&&a.set(null,o)}l=t.instance,f=l.getAttribute("data-precedence"),u=a.get(f)||o,u===o&&a.set(null,l),a.set(f,l),this.count++,o=Ws.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var bi={$$typeof:Q,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function RS(e,t,a,o,l,u,f,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.hiddenUpdates=Lr(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function vp(e,t,a,o,l,u,f,v,T,D,q,V){return e=new RS(e,t,a,f,T,D,q,V,v),t=1,u===!0&&(t|=24),u=Dt(3,null,null,t),e.current=u,u.stateNode=e,t=Tl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},Ml(u),e}function yp(e){return e?(e=Zn,e):Zn}function bp(e,t,a,o,l,u){l=yp(l),o.context===null?o.context=l:o.pendingContext=l,o=Ba(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=La(e,o,t),a!==null&&(Tt(a,e,t),Wo(a,e,t))}function Sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Pu(e,t){Sp(e,t),(e=e.alternate)&&Sp(e,t)}function xp(e){if(e.tag===13||e.tag===31){var t=hn(e,67108864);t!==null&&Tt(t,e,67108864),Pu(e,67108864)}}function Tp(e){if(e.tag===13||e.tag===31){var t=Rt();t=Ur(t);var a=hn(e,t);a!==null&&Tt(a,e,t),Pu(e,t)}}var er=!0;function qS(e,t,a,o){var l=R.T;R.T=null;var u=G.p;try{G.p=2,Yu(e,t,a,o)}finally{G.p=u,R.T=l}}function jS(e,t,a,o){var l=R.T;R.T=null;var u=G.p;try{G.p=8,Yu(e,t,a,o)}finally{G.p=u,R.T=l}}function Yu(e,t,a,o){if(er){var l=Xu(o);if(l===null)wu(e,t,o,tr,a),Ap(e,o);else if(_S(l,e,t,a,o))o.stopPropagation();else if(Ap(e,o),t&4&&-1<VS.indexOf(e)){for(;l!==null;){var u=Bn(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=un(u.pendingLanes);if(f!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;f;){var T=1<<31-Ct(f);v.entanglements[1]|=T,f&=~T}aa(u),(Ae&6)===0&&(Bs=Et()+500,mi(0))}}break;case 31:case 13:v=hn(u,2),v!==null&&Tt(v,u,2),Us(),Pu(u,2)}if(u=Xu(o),u===null&&wu(e,t,o,tr,a),u===l)break;l=u}l!==null&&o.stopPropagation()}else wu(e,t,o,null,a)}}function Xu(e){return e=Zr(e),Ju(e)}var tr=null;function Ju(e){if(tr=null,e=_n(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tr=e,null}function Ep(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(S0()){case Od:return 2;case wd:return 8;case Pi:case x0:return 32;case Rd:return 268435456;default:return 32}default:return 32}}var Zu=!1,Ka=null,Fa=null,Wa=null,Si=new Map,xi=new Map,$a=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ap(e,t){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function Ti(e,t,a,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Bn(t),t!==null&&xp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _S(e,t,a,o,l){switch(t){case"focusin":return Ka=Ti(Ka,e,t,a,o,l),!0;case"dragenter":return Fa=Ti(Fa,e,t,a,o,l),!0;case"mouseover":return Wa=Ti(Wa,e,t,a,o,l),!0;case"pointerover":var u=l.pointerId;return Si.set(u,Ti(Si.get(u)||null,e,t,a,o,l)),!0;case"gotpointercapture":return u=l.pointerId,xi.set(u,Ti(xi.get(u)||null,e,t,a,o,l)),!0}return!1}function Cp(e){var t=_n(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,Ld(e.priority,function(){Tp(a)});return}}else if(t===31){if(t=h(a),t!==null){e.blockedOn=t,Ld(e.priority,function(){Tp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xu(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Jr=o,a.target.dispatchEvent(o),Jr=null}else return t=Bn(a),t!==null&&xp(t),e.blockedOn=a,!1;t.shift()}return!0}function Mp(e,t,a){ar(e)&&a.delete(t)}function BS(){Zu=!1,Ka!==null&&ar(Ka)&&(Ka=null),Fa!==null&&ar(Fa)&&(Fa=null),Wa!==null&&ar(Wa)&&(Wa=null),Si.forEach(Mp),xi.forEach(Mp)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zu||(Zu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,BS)))}var or=null;function Dp(e){or!==e&&(or=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){or===e&&(or=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(Ju(o||a)===null)continue;break}var u=Bn(a);u!==null&&(e.splice(t,3),t-=3,Xl(u,{pending:!0,data:l,method:a.method,action:o},o,l))}}))}function bo(e){function t(T){return nr(T,e)}Ka!==null&&nr(Ka,e),Fa!==null&&nr(Fa,e),Wa!==null&&nr(Wa,e),Si.forEach(t),xi.forEach(t);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)Cp(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var l=a[o],u=a[o+1],f=l[gt]||null;if(typeof u=="function")f||Dp(a);else if(f){var v=null;if(u&&u.hasAttribute("formAction")){if(l=u,f=u[gt]||null)v=f.formAction;else if(Ju(l)!==null)continue}else v=f.action;typeof v=="function"?a[o+1]=v:(a.splice(o,3),o-=3),Dp(a)}}}function zp(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(f){return l=f})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ku(e){this._internalRoot=e}ir.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,o=Rt();bp(a,o,e,t,null,null)},ir.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bp(e.current,2,null,e,null,null),Us(),t[Vn]=null}};function ir(e){this._internalRoot=e}ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<$a.length&&t!==0&&t<$a[a].priority;a++);$a.splice(a,0,e),a===0&&Cp(e)}};var Np=i.version;if(Np!=="19.2.4")throw Error(r(527,Np,"19.2.4"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var LS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sr.isDisabled&&sr.supportsFiber)try{wo=sr.inject(LS),At=sr}catch{}}return Ai.createRoot=function(e,t){if(!c(e))throw Error(r(299));var a=!1,o="",l=_m,u=Bm,f=Lm;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=vp(e,1,!1,null,null,a,o,null,l,u,f,zp),e[Vn]=t.current,Ou(e),new Ku(t)},Ai.hydrateRoot=function(e,t,a){if(!c(e))throw Error(r(299));var o=!1,l="",u=_m,f=Bm,v=Lm,T=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),t=vp(e,1,!0,t,a??null,o,l,T,u,f,v,zp),t.context=yp(null),a=t.current,o=Rt(),o=Ur(o),l=Ba(o),l.callback=null,La(a,l,o),a=o,t.current.lanes=a,qo(t,a),aa(t),e[Vn]=t.current,Ou(e),new ir(t)},Ai.version="19.2.4",Ai}var Up;function ZS(){if(Up)return $u.exports;Up=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),$u.exports=JS(),$u.exports}var KS=ZS();const Zc=k.createContext({});function Kc(n){const i=k.useRef(null);return i.current===null&&(i.current=n()),i.current}const fv=typeof window<"u",mv=fv?k.useLayoutEffect:k.useEffect,Nr=k.createContext(null);function Fc(n,i){n.indexOf(i)===-1&&n.push(i)}function br(n,i){const s=n.indexOf(i);s>-1&&n.splice(s,1)}const ia=(n,i,s)=>s>i?i:s<n?n:s;let Wc=()=>{};const Ma={},hv=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function pv(n){return typeof n=="object"&&n!==null}const gv=n=>/^0[^.\s]+$/u.test(n);function vv(n){let i;return()=>(i===void 0&&(i=n()),i)}const Yt=n=>n,FS=(n,i)=>s=>i(n(s)),Ui=(...n)=>n.reduce(FS),ji=(n,i,s)=>{const r=i-n;return r===0?1:(s-n)/r};class $c{constructor(){this.subscriptions=[]}add(i){return Fc(this.subscriptions,i),()=>br(this.subscriptions,i)}notify(i,s,r){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,s,r);else for(let m=0;m<c;m++){const d=this.subscriptions[m];d&&d(i,s,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Wt=n=>n*1e3,Pt=n=>n/1e3;function yv(n,i){return i?n*(1e3/i):0}const bv=(n,i,s)=>(((1-3*s+3*i)*n+(3*s-6*i))*n+3*i)*n,WS=1e-7,$S=12;function IS(n,i,s,r,c){let m,d,h=0;do d=i+(s-i)/2,m=bv(d,r,c)-n,m>0?s=d:i=d;while(Math.abs(m)>WS&&++h<$S);return d}function Hi(n,i,s,r){if(n===i&&s===r)return Yt;const c=m=>IS(m,0,1,n,s);return m=>m===0||m===1?m:bv(c(m),i,r)}const Sv=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,xv=n=>i=>1-n(1-i),Tv=Hi(.33,1.53,.69,.99),Ic=xv(Tv),Ev=Sv(Ic),Av=n=>(n*=2)<1?.5*Ic(n):.5*(2-Math.pow(2,-10*(n-1))),ed=n=>1-Math.sin(Math.acos(n)),Cv=xv(ed),Mv=Sv(ed),e1=Hi(.42,0,1,1),t1=Hi(0,0,.58,1),Dv=Hi(.42,0,.58,1),a1=n=>Array.isArray(n)&&typeof n[0]!="number",zv=n=>Array.isArray(n)&&typeof n[0]=="number",n1={linear:Yt,easeIn:e1,easeInOut:Dv,easeOut:t1,circIn:ed,circInOut:Mv,circOut:Cv,backIn:Ic,backInOut:Ev,backOut:Tv,anticipate:Av},o1=n=>typeof n=="string",Hp=n=>{if(zv(n)){Wc(n.length===4);const[i,s,r,c]=n;return Hi(i,s,r,c)}else if(o1(n))return n1[n];return n},rr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function i1(n,i){let s=new Set,r=new Set,c=!1,m=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){d.has(y)&&(g.schedule(y),n()),y(h)}const g={schedule:(y,b=!1,S=!1)=>{const w=S&&c?s:r;return b&&d.add(y),w.has(y)||w.add(y),y},cancel:y=>{r.delete(y),d.delete(y)},process:y=>{if(h=y,c){m=!0;return}c=!0,[s,r]=[r,s],s.forEach(p),s.clear(),c=!1,m&&(m=!1,g.process(y))}};return g}const s1=40;function Nv(n,i){let s=!1,r=!0;const c={delta:0,timestamp:0,isProcessing:!1},m=()=>s=!0,d=rr.reduce((Q,Z)=>(Q[Z]=i1(m),Q),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:y,update:b,preRender:S,render:z,postRender:w}=d,L=()=>{const Q=Ma.useManualTiming?c.timestamp:performance.now();s=!1,Ma.useManualTiming||(c.delta=r?1e3/60:Math.max(Math.min(Q-c.timestamp,s1),1)),c.timestamp=Q,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),y.process(c),b.process(c),S.process(c),z.process(c),w.process(c),c.isProcessing=!1,s&&i&&(r=!1,n(L))},U=()=>{s=!0,r=!0,c.isProcessing||n(L)};return{schedule:rr.reduce((Q,Z)=>{const Y=d[Z];return Q[Z]=(ie,W=!1,B=!1)=>(s||U(),Y.schedule(ie,W,B)),Q},{}),cancel:Q=>{for(let Z=0;Z<rr.length;Z++)d[rr[Z]].cancel(Q)},state:c,steps:d}}const{schedule:Re,cancel:sn,state:lt,steps:ac}=Nv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yt,!0);let mr;function r1(){mr=void 0}const mt={now:()=>(mr===void 0&&mt.set(lt.isProcessing||Ma.useManualTiming?lt.timestamp:performance.now()),mr),set:n=>{mr=n,queueMicrotask(r1)}},Ov=n=>i=>typeof i=="string"&&i.startsWith(n),wv=Ov("--"),l1=Ov("var(--"),td=n=>l1(n)?u1.test(n.split("/*")[0].trim()):!1,u1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Gp(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const zo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Vi={...zo,transform:n=>ia(0,1,n)},lr={...zo,default:1},Oi=n=>Math.round(n*1e5)/1e5,ad=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function c1(n){return n==null}const d1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,nd=(n,i)=>s=>!!(typeof s=="string"&&d1.test(s)&&s.startsWith(n)||i&&!c1(s)&&Object.prototype.hasOwnProperty.call(s,i)),Rv=(n,i,s)=>r=>{if(typeof r!="string")return r;const[c,m,d,h]=r.match(ad);return{[n]:parseFloat(c),[i]:parseFloat(m),[s]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},f1=n=>ia(0,255,n),nc={...zo,transform:n=>Math.round(f1(n))},On={test:nd("rgb","red"),parse:Rv("red","green","blue"),transform:({red:n,green:i,blue:s,alpha:r=1})=>"rgba("+nc.transform(n)+", "+nc.transform(i)+", "+nc.transform(s)+", "+Oi(Vi.transform(r))+")"};function m1(n){let i="",s="",r="",c="";return n.length>5?(i=n.substring(1,3),s=n.substring(3,5),r=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),s=n.substring(2,3),r=n.substring(3,4),c=n.substring(4,5),i+=i,s+=s,r+=r,c+=c),{red:parseInt(i,16),green:parseInt(s,16),blue:parseInt(r,16),alpha:c?parseInt(c,16)/255:1}}const xc={test:nd("#"),parse:m1,transform:On.transform},Gi=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),an=Gi("deg"),oa=Gi("%"),te=Gi("px"),h1=Gi("vh"),p1=Gi("vw"),Qp={...oa,parse:n=>oa.parse(n)/100,transform:n=>oa.transform(n*100)},xo={test:nd("hsl","hue"),parse:Rv("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:s,alpha:r=1})=>"hsla("+Math.round(n)+", "+oa.transform(Oi(i))+", "+oa.transform(Oi(s))+", "+Oi(Vi.transform(r))+")"},Ke={test:n=>On.test(n)||xc.test(n)||xo.test(n),parse:n=>On.test(n)?On.parse(n):xo.test(n)?xo.parse(n):xc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?On.transform(n):xo.transform(n),getAnimatableNone:n=>{const i=Ke.parse(n);return i.alpha=0,Ke.transform(i)}},g1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function v1(n){var i,s;return isNaN(n)&&typeof n=="string"&&(((i=n.match(ad))==null?void 0:i.length)||0)+(((s=n.match(g1))==null?void 0:s.length)||0)>0}const qv="number",jv="color",y1="var",b1="var(",kp="${}",S1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _i(n){const i=n.toString(),s=[],r={color:[],number:[],var:[]},c=[];let m=0;const h=i.replace(S1,p=>(Ke.test(p)?(r.color.push(m),c.push(jv),s.push(Ke.parse(p))):p.startsWith(b1)?(r.var.push(m),c.push(y1),s.push(p)):(r.number.push(m),c.push(qv),s.push(parseFloat(p))),++m,kp)).split(kp);return{values:s,split:h,indexes:r,types:c}}function Vv(n){return _i(n).values}function _v(n){const{split:i,types:s}=_i(n),r=i.length;return c=>{let m="";for(let d=0;d<r;d++)if(m+=i[d],c[d]!==void 0){const h=s[d];h===qv?m+=Oi(c[d]):h===jv?m+=Ke.transform(c[d]):m+=c[d]}return m}}const x1=n=>typeof n=="number"?0:Ke.test(n)?Ke.getAnimatableNone(n):n;function T1(n){const i=Vv(n);return _v(n)(i.map(x1))}const $t={test:v1,parse:Vv,createTransformer:_v,getAnimatableNone:T1};function oc(n,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(i-n)*6*s:s<1/2?i:s<2/3?n+(i-n)*(2/3-s)*6:n}function E1({hue:n,saturation:i,lightness:s,alpha:r}){n/=360,i/=100,s/=100;let c=0,m=0,d=0;if(!i)c=m=d=s;else{const h=s<.5?s*(1+i):s+i-s*i,p=2*s-h;c=oc(p,h,n+1/3),m=oc(p,h,n),d=oc(p,h,n-1/3)}return{red:Math.round(c*255),green:Math.round(m*255),blue:Math.round(d*255),alpha:r}}function Sr(n,i){return s=>s>0?i:n}const Le=(n,i,s)=>n+(i-n)*s,ic=(n,i,s)=>{const r=n*n,c=s*(i*i-r)+r;return c<0?0:Math.sqrt(c)},A1=[xc,On,xo],C1=n=>A1.find(i=>i.test(n));function Pp(n){const i=C1(n);if(!i)return!1;let s=i.parse(n);return i===xo&&(s=E1(s)),s}const Yp=(n,i)=>{const s=Pp(n),r=Pp(i);if(!s||!r)return Sr(n,i);const c={...s};return m=>(c.red=ic(s.red,r.red,m),c.green=ic(s.green,r.green,m),c.blue=ic(s.blue,r.blue,m),c.alpha=Le(s.alpha,r.alpha,m),On.transform(c))},Tc=new Set(["none","hidden"]);function M1(n,i){return Tc.has(n)?s=>s<=0?n:i:s=>s>=1?i:n}function D1(n,i){return s=>Le(n,i,s)}function od(n){return typeof n=="number"?D1:typeof n=="string"?td(n)?Sr:Ke.test(n)?Yp:O1:Array.isArray(n)?Bv:typeof n=="object"?Ke.test(n)?Yp:z1:Sr}function Bv(n,i){const s=[...n],r=s.length,c=n.map((m,d)=>od(m)(m,i[d]));return m=>{for(let d=0;d<r;d++)s[d]=c[d](m);return s}}function z1(n,i){const s={...n,...i},r={};for(const c in s)n[c]!==void 0&&i[c]!==void 0&&(r[c]=od(n[c])(n[c],i[c]));return c=>{for(const m in r)s[m]=r[m](c);return s}}function N1(n,i){const s=[],r={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const m=i.types[c],d=n.indexes[m][r[m]],h=n.values[d]??0;s[c]=h,r[m]++}return s}const O1=(n,i)=>{const s=$t.createTransformer(i),r=_i(n),c=_i(i);return r.indexes.var.length===c.indexes.var.length&&r.indexes.color.length===c.indexes.color.length&&r.indexes.number.length>=c.indexes.number.length?Tc.has(n)&&!c.values.length||Tc.has(i)&&!r.values.length?M1(n,i):Ui(Bv(N1(r,c),c.values),s):Sr(n,i)};function Lv(n,i,s){return typeof n=="number"&&typeof i=="number"&&typeof s=="number"?Le(n,i,s):od(n)(n,i)}const w1=n=>{const i=({timestamp:s})=>n(s);return{start:(s=!0)=>Re.update(i,s),stop:()=>sn(i),now:()=>lt.isProcessing?lt.timestamp:mt.now()}},Uv=(n,i,s=10)=>{let r="";const c=Math.max(Math.round(i/s),2);for(let m=0;m<c;m++)r+=Math.round(n(m/(c-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},xr=2e4;function id(n){let i=0;const s=50;let r=n.next(i);for(;!r.done&&i<xr;)i+=s,r=n.next(i);return i>=xr?1/0:i}function R1(n,i=100,s){const r=s({...n,keyframes:[0,i]}),c=Math.min(id(r),xr);return{type:"keyframes",ease:m=>r.next(c*m).value/i,duration:Pt(c)}}const q1=5;function Hv(n,i,s){const r=Math.max(i-q1,0);return yv(s-n(r),i-r)}const Ge={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},sc=.001;function j1({duration:n=Ge.duration,bounce:i=Ge.bounce,velocity:s=Ge.velocity,mass:r=Ge.mass}){let c,m,d=1-i;d=ia(Ge.minDamping,Ge.maxDamping,d),n=ia(Ge.minDuration,Ge.maxDuration,Pt(n)),d<1?(c=g=>{const y=g*d,b=y*n,S=y-s,z=Ec(g,d),w=Math.exp(-b);return sc-S/z*w},m=g=>{const b=g*d*n,S=b*s+s,z=Math.pow(d,2)*Math.pow(g,2)*n,w=Math.exp(-b),L=Ec(Math.pow(g,2),d);return(-c(g)+sc>0?-1:1)*((S-z)*w)/L}):(c=g=>{const y=Math.exp(-g*n),b=(g-s)*n+1;return-sc+y*b},m=g=>{const y=Math.exp(-g*n),b=(s-g)*(n*n);return y*b});const h=5/n,p=_1(c,m,h);if(n=Wt(n),isNaN(p))return{stiffness:Ge.stiffness,damping:Ge.damping,duration:n};{const g=Math.pow(p,2)*r;return{stiffness:g,damping:d*2*Math.sqrt(r*g),duration:n}}}const V1=12;function _1(n,i,s){let r=s;for(let c=1;c<V1;c++)r=r-n(r)/i(r);return r}function Ec(n,i){return n*Math.sqrt(1-i*i)}const B1=["duration","bounce"],L1=["stiffness","damping","mass"];function Xp(n,i){return i.some(s=>n[s]!==void 0)}function U1(n){let i={velocity:Ge.velocity,stiffness:Ge.stiffness,damping:Ge.damping,mass:Ge.mass,isResolvedFromDuration:!1,...n};if(!Xp(n,L1)&&Xp(n,B1))if(i.velocity=0,n.visualDuration){const s=n.visualDuration,r=2*Math.PI/(s*1.2),c=r*r,m=2*ia(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:Ge.mass,stiffness:c,damping:m}}else{const s=j1({...n,velocity:0});i={...i,...s,mass:Ge.mass},i.isResolvedFromDuration=!0}return i}function Tr(n=Ge.visualDuration,i=Ge.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:r,restDelta:c}=s;const m=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],h={done:!1,value:m},{stiffness:p,damping:g,mass:y,duration:b,velocity:S,isResolvedFromDuration:z}=U1({...s,velocity:-Pt(s.velocity||0)}),w=S||0,L=g/(2*Math.sqrt(p*y)),U=d-m,H=Pt(Math.sqrt(p/y)),X=Math.abs(U)<5;r||(r=X?Ge.restSpeed.granular:Ge.restSpeed.default),c||(c=X?Ge.restDelta.granular:Ge.restDelta.default);let Q;if(L<1){const Y=Ec(H,L);Q=ie=>{const W=Math.exp(-L*H*ie);return d-W*((w+L*H*U)/Y*Math.sin(Y*ie)+U*Math.cos(Y*ie))}}else if(L===1)Q=Y=>d-Math.exp(-H*Y)*(U+(w+H*U)*Y);else{const Y=H*Math.sqrt(L*L-1);Q=ie=>{const W=Math.exp(-L*H*ie),B=Math.min(Y*ie,300);return d-W*((w+L*H*U)*Math.sinh(B)+Y*U*Math.cosh(B))/Y}}const Z={calculatedDuration:z&&b||null,next:Y=>{const ie=Q(Y);if(z)h.done=Y>=b;else{let W=Y===0?w:0;L<1&&(W=Y===0?Wt(w):Hv(Q,Y,ie));const B=Math.abs(W)<=r,se=Math.abs(d-ie)<=c;h.done=B&&se}return h.value=h.done?d:ie,h},toString:()=>{const Y=Math.min(id(Z),xr),ie=Uv(W=>Z.next(Y*W).value,Y,30);return Y+"ms "+ie},toTransition:()=>{}};return Z}Tr.applyToOptions=n=>{const i=R1(n,100,Tr);return n.ease=i.ease,n.duration=Wt(i.duration),n.type="keyframes",n};function Ac({keyframes:n,velocity:i=0,power:s=.8,timeConstant:r=325,bounceDamping:c=10,bounceStiffness:m=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:y}){const b=n[0],S={done:!1,value:b},z=B=>h!==void 0&&B<h||p!==void 0&&B>p,w=B=>h===void 0?p:p===void 0||Math.abs(h-B)<Math.abs(p-B)?h:p;let L=s*i;const U=b+L,H=d===void 0?U:d(U);H!==U&&(L=H-b);const X=B=>-L*Math.exp(-B/r),Q=B=>H+X(B),Z=B=>{const se=X(B),Ce=Q(B);S.done=Math.abs(se)<=g,S.value=S.done?H:Ce};let Y,ie;const W=B=>{z(S.value)&&(Y=B,ie=Tr({keyframes:[S.value,w(S.value)],velocity:Hv(Q,B,S.value),damping:c,stiffness:m,restDelta:g,restSpeed:y}))};return W(0),{calculatedDuration:null,next:B=>{let se=!1;return!ie&&Y===void 0&&(se=!0,Z(B),W(B)),Y!==void 0&&B>=Y?ie.next(B-Y):(!se&&Z(B),S)}}}function H1(n,i,s){const r=[],c=s||Ma.mix||Lv,m=n.length-1;for(let d=0;d<m;d++){let h=c(n[d],n[d+1]);if(i){const p=Array.isArray(i)?i[d]||Yt:i;h=Ui(p,h)}r.push(h)}return r}function G1(n,i,{clamp:s=!0,ease:r,mixer:c}={}){const m=n.length;if(Wc(m===i.length),m===1)return()=>i[0];if(m===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[m-1]&&(n=[...n].reverse(),i=[...i].reverse());const h=H1(i,r,c),p=h.length,g=y=>{if(d&&y<n[0])return i[0];let b=0;if(p>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const S=ji(n[b],n[b+1],y);return h[b](S)};return s?y=>g(ia(n[0],n[m-1],y)):g}function Q1(n,i){const s=n[n.length-1];for(let r=1;r<=i;r++){const c=ji(0,i,r);n.push(Le(s,1,c))}}function k1(n){const i=[0];return Q1(i,n.length-1),i}function P1(n,i){return n.map(s=>s*i)}function Y1(n,i){return n.map(()=>i||Dv).splice(0,n.length-1)}function wi({duration:n=300,keyframes:i,times:s,ease:r="easeInOut"}){const c=a1(r)?r.map(Hp):Hp(r),m={done:!1,value:i[0]},d=P1(s&&s.length===i.length?s:k1(i),n),h=G1(d,i,{ease:Array.isArray(c)?c:Y1(i,c)});return{calculatedDuration:n,next:p=>(m.value=h(p),m.done=p>=n,m)}}const X1=n=>n!==null;function sd(n,{repeat:i,repeatType:s="loop"},r,c=1){const m=n.filter(X1),h=c<0||i&&s!=="loop"&&i%2===1?0:m.length-1;return!h||r===void 0?m[h]:r}const J1={decay:Ac,inertia:Ac,tween:wi,keyframes:wi,spring:Tr};function Gv(n){typeof n.type=="string"&&(n.type=J1[n.type])}class rd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,s){return this.finished.then(i,s)}}const Z1=n=>n/100;class ld extends rd{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,c;const{motionValue:s}=this.options;s&&s.updatedAt!==mt.now()&&this.tick(mt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(r=this.options).onStop)==null||c.call(r))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Gv(i);const{type:s=wi,repeat:r=0,repeatDelay:c=0,repeatType:m,velocity:d=0}=i;let{keyframes:h}=i;const p=s||wi;p!==wi&&typeof h[0]!="number"&&(this.mixKeyframes=Ui(Z1,Lv(h[0],h[1])),h=[0,100]);const g=p({...i,keyframes:h});m==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=id(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(r+1)-c,this.generator=g}updateTime(i){const s=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(i,s=!1){const{generator:r,totalDuration:c,mixKeyframes:m,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return r.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:z,type:w,onUpdate:L,finalKeyframe:U}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),s?this.currentTime=i:this.updateTime(i);const H=this.currentTime-g*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?H<0:H>c;this.currentTime=Math.max(H,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let Q=this.currentTime,Z=r;if(b){const B=Math.min(this.currentTime,c)/h;let se=Math.floor(B),Ce=B%1;!Ce&&B>=1&&(Ce=1),Ce===1&&se--,se=Math.min(se,b+1),!!(se%2)&&(S==="reverse"?(Ce=1-Ce,z&&(Ce-=z/h)):S==="mirror"&&(Z=d)),Q=ia(0,1,Ce)*h}const Y=X?{done:!1,value:y[0]}:Z.next(Q);m&&(Y.value=m(Y.value));let{done:ie}=Y;!X&&p!==null&&(ie=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ie);return W&&w!==Ac&&(Y.value=sd(y,this.options,U,this.speed)),L&&L(Y.value),W&&this.finish(),Y}then(i,s){return this.finished.then(i,s)}get duration(){return Pt(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Pt(i)}get time(){return Pt(this.currentTime)}set time(i){var s;i=Wt(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),(s=this.driver)==null||s.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(mt.now());const s=this.playbackSpeed!==i;this.playbackSpeed=i,s&&(this.time=Pt(this.currentTime))}play(){var c,m;if(this.isStopped)return;const{driver:i=w1,startTime:s}=this.options;this.driver||(this.driver=i(d=>this.tick(d))),(m=(c=this.options).onPlay)==null||m.call(c);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=s??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(mt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,s;this.notifyFinished(),this.teardown(),this.state="finished",(s=(i=this.options).onComplete)==null||s.call(i)}cancel(){var i,s;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(s=(i=this.options).onCancel)==null||s.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var s;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(s=this.driver)==null||s.stop(),i.observe(this)}}function K1(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const wn=n=>n*180/Math.PI,Cc=n=>{const i=wn(Math.atan2(n[1],n[0]));return Mc(i)},F1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Cc,rotateZ:Cc,skewX:n=>wn(Math.atan(n[1])),skewY:n=>wn(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Mc=n=>(n=n%360,n<0&&(n+=360),n),Jp=Cc,Zp=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Kp=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),W1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Zp,scaleY:Kp,scale:n=>(Zp(n)+Kp(n))/2,rotateX:n=>Mc(wn(Math.atan2(n[6],n[5]))),rotateY:n=>Mc(wn(Math.atan2(-n[2],n[0]))),rotateZ:Jp,rotate:Jp,skewX:n=>wn(Math.atan(n[4])),skewY:n=>wn(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Dc(n){return n.includes("scale")?1:0}function zc(n,i){if(!n||n==="none")return Dc(i);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,c;if(s)r=W1,c=s;else{const h=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=F1,c=h}if(!c)return Dc(i);const m=r[i],d=c[1].split(",").map(I1);return typeof m=="function"?m(d):d[m]}const $1=(n,i)=>{const{transform:s="none"}=getComputedStyle(n);return zc(s,i)};function I1(n){return parseFloat(n.trim())}const No=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Oo=new Set(No),Fp=n=>n===zo||n===te,ex=new Set(["x","y","z"]),tx=No.filter(n=>!ex.has(n));function ax(n){const i=[];return tx.forEach(s=>{const r=n.getValue(s);r!==void 0&&(i.push([s,r.get()]),r.set(s.startsWith("scale")?1:0))}),i}const on={width:({x:n},{paddingLeft:i="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),height:({y:n},{paddingTop:i="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>zc(i,"x"),y:(n,{transform:i})=>zc(i,"y")};on.translateX=on.x;on.translateY=on.y;const Rn=new Set;let Nc=!1,Oc=!1,wc=!1;function Qv(){if(Oc){const n=Array.from(Rn).filter(r=>r.needsMeasurement),i=new Set(n.map(r=>r.element)),s=new Map;i.forEach(r=>{const c=ax(r);c.length&&(s.set(r,c),r.render())}),n.forEach(r=>r.measureInitialState()),i.forEach(r=>{r.render();const c=s.get(r);c&&c.forEach(([m,d])=>{var h;(h=r.getValue(m))==null||h.set(d)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Oc=!1,Nc=!1,Rn.forEach(n=>n.complete(wc)),Rn.clear()}function kv(){Rn.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Oc=!0)})}function nx(){wc=!0,kv(),Qv(),wc=!1}class ud{constructor(i,s,r,c,m,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=s,this.name=r,this.motionValue=c,this.element=m,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Rn.add(this),Nc||(Nc=!0,Re.read(kv),Re.resolveKeyframes(Qv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:s,element:r,motionValue:c}=this;if(i[0]===null){const m=c==null?void 0:c.get(),d=i[i.length-1];if(m!==void 0)i[0]=m;else if(r&&s){const h=r.readValue(s,d);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=d),c&&m===void 0&&c.set(i[0])}K1(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Rn.delete(this)}cancel(){this.state==="scheduled"&&(Rn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ox=n=>n.startsWith("--");function ix(n,i,s){ox(i)?n.style.setProperty(i,s):n.style[i]=s}const sx={};function Pv(n,i){const s=vv(n);return()=>sx[i]??s()}const rx=Pv(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Yv=Pv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ni=([n,i,s,r])=>`cubic-bezier(${n}, ${i}, ${s}, ${r})`,Wp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ni([0,.65,.55,1]),circOut:Ni([.55,0,1,.45]),backIn:Ni([.31,.01,.66,-.59]),backOut:Ni([.33,1.53,.69,.99])};function Xv(n,i){if(n)return typeof n=="function"?Yv()?Uv(n,i):"ease-out":zv(n)?Ni(n):Array.isArray(n)?n.map(s=>Xv(s,i)||Wp.easeOut):Wp[n]}function lx(n,i,s,{delay:r=0,duration:c=300,repeat:m=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const y={[i]:s};p&&(y.offset=p);const b=Xv(h,c);Array.isArray(b)&&(y.easing=b);const S={delay:r,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:m+1,direction:d==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),n.animate(y,S)}function Jv(n){return typeof n=="function"&&"applyToOptions"in n}function ux({type:n,...i}){return Jv(n)&&Yv()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class Zv extends rd{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:s,name:r,keyframes:c,pseudoElement:m,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=i;this.isPseudoElement=!!m,this.allowFlatten=d,this.options=i,Wc(typeof i.type!="string");const g=ux(i);this.animation=lx(s,r,c,g,m),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const y=sd(c,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(y):ix(s,r,y),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,s;(s=(i=this.animation).finish)==null||s.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var s,r,c;const i=(s=this.options)==null?void 0:s.element;!this.isPseudoElement&&(i!=null&&i.isConnected)&&((c=(r=this.animation).commitStyles)==null||c.call(r))}get duration(){var s,r;const i=((r=(s=this.animation.effect)==null?void 0:s.getComputedTiming)==null?void 0:r.call(s).duration)||0;return Pt(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Pt(i)}get time(){return Pt(Number(this.animation.currentTime)||0)}set time(i){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Wt(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,observe:s}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&rx()?(this.animation.timeline=i,Yt):s(this)}}const Kv={anticipate:Av,backInOut:Ev,circInOut:Mv};function cx(n){return n in Kv}function dx(n){typeof n.ease=="string"&&cx(n.ease)&&(n.ease=Kv[n.ease])}const rc=10;class fx extends Zv{constructor(i){dx(i),Gv(i),super(i),i.startTime!==void 0&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:s,onUpdate:r,onComplete:c,element:m,...d}=this.options;if(!s)return;if(i!==void 0){s.set(i);return}const h=new ld({...d,autoplay:!1}),p=Math.max(rc,mt.now()-this.startTime),g=ia(0,rc,p-rc);s.setWithVelocity(h.sample(Math.max(0,p-g)).value,h.sample(p).value,g),h.stop()}}const $p=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&($t.test(n)||n==="0")&&!n.startsWith("url("));function mx(n){const i=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==i)return!0}function hx(n,i,s,r){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const m=n[n.length-1],d=$p(c,i),h=$p(m,i);return!d||!h?!1:mx(n)||(s==="spring"||Jv(s))&&r}function Rc(n){n.duration=0,n.type="keyframes"}const px=new Set(["opacity","clipPath","filter","transform"]),gx=vv(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function vx(n){var y;const{motionValue:i,name:s,repeatDelay:r,repeatType:c,damping:m,type:d}=n;if(!(((y=i==null?void 0:i.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=i.owner.getProps();return gx()&&s&&px.has(s)&&(s!=="transform"||!g)&&!p&&!r&&c!=="mirror"&&m!==0&&d!=="inertia"}const yx=40;class bx extends rd{constructor({autoplay:i=!0,delay:s=0,type:r="keyframes",repeat:c=0,repeatDelay:m=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:y,...b}){var w;super(),this.stop=()=>{var L,U;this._animation&&(this._animation.stop(),(L=this.stopTimeline)==null||L.call(this)),(U=this.keyframeResolver)==null||U.cancel()},this.createdAt=mt.now();const S={autoplay:i,delay:s,type:r,repeat:c,repeatDelay:m,repeatType:d,name:p,motionValue:g,element:y,...b},z=(y==null?void 0:y.KeyframeResolver)||ud;this.keyframeResolver=new z(h,(L,U,H)=>this.onKeyframesResolved(L,U,S,!H),p,g,y),(w=this.keyframeResolver)==null||w.scheduleResolve()}onKeyframesResolved(i,s,r,c){var U,H;this.keyframeResolver=void 0;const{name:m,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:y}=r;this.resolvedAt=mt.now(),hx(i,m,d,h)||((Ma.instantAnimations||!p)&&(y==null||y(sd(i,r,s))),i[0]=i[i.length-1],Rc(r),r.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>yx?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...r,keyframes:i},z=!g&&vx(S),w=(H=(U=S.motionValue)==null?void 0:U.owner)==null?void 0:H.current,L=z?new fx({...S,element:w}):new ld(S);L.finished.then(()=>{this.notifyFinished()}).catch(Yt),this.pendingTimeline&&(this.stopTimeline=L.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=L}get finished(){return this._animation?this.animation.finished:this._finished}then(i,s){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),nx()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}function Fv(n,i,s,r=0,c=1){const m=Array.from(n).sort((g,y)=>g.sortNodePosition(y)).indexOf(i),d=n.size,h=(d-1)*r;return typeof s=="function"?s(m,d):c===1?m*r:h-m*r}const Sx=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function xx(n){const i=Sx.exec(n);if(!i)return[,];const[,s,r,c]=i;return[`--${s??r}`,c]}function Wv(n,i,s=1){const[r,c]=xx(n);if(!r)return;const m=window.getComputedStyle(i).getPropertyValue(r);if(m){const d=m.trim();return hv(d)?parseFloat(d):d}return td(c)?Wv(c,i,s+1):c}const Tx={type:"spring",stiffness:500,damping:25,restSpeed:10},Ex=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Ax={type:"keyframes",duration:.8},Cx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Mx=(n,{keyframes:i})=>i.length>2?Ax:Oo.has(n)?n.startsWith("scale")?Ex(i[1]):Tx:Cx,Dx=n=>n!==null;function zx(n,{repeat:i,repeatType:s="loop"},r){const c=n.filter(Dx),m=i&&s!=="loop"&&i%2===1?0:c.length-1;return c[m]}function $v(n,i){if(n!=null&&n.inherit&&i){const{inherit:s,...r}=n;return{...i,...r}}return n}function cd(n,i){const s=(n==null?void 0:n[i])??(n==null?void 0:n.default)??n;return s!==n?$v(s,n):s}function Nx({when:n,delay:i,delayChildren:s,staggerChildren:r,staggerDirection:c,repeat:m,repeatType:d,repeatDelay:h,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const dd=(n,i,s,r={},c,m)=>d=>{const h=cd(r,n)||{},p=h.delay||r.delay||0;let{elapsed:g=0}=r;g=g-Wt(p);const y={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:i.getVelocity(),...h,delay:-g,onUpdate:S=>{i.set(S),h.onUpdate&&h.onUpdate(S)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:n,motionValue:i,element:m?void 0:c};Nx(h)||Object.assign(y,Mx(n,y)),y.duration&&(y.duration=Wt(y.duration)),y.repeatDelay&&(y.repeatDelay=Wt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Rc(y),y.delay===0&&(b=!0)),(Ma.instantAnimations||Ma.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(b=!0,Rc(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,b&&!m&&i.get()!==void 0){const S=zx(y.keyframes,h);if(S!==void 0){Re.update(()=>{y.onUpdate(S),y.onComplete()});return}}return h.isSync?new ld(y):new bx(y)};function Ip(n){const i=[{},{}];return n==null||n.values.forEach((s,r)=>{i[0][r]=s.get(),i[1][r]=s.getVelocity()}),i}function fd(n,i,s,r){if(typeof i=="function"){const[c,m]=Ip(r);i=i(s!==void 0?s:n.custom,c,m)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,m]=Ip(r);i=i(s!==void 0?s:n.custom,c,m)}return i}function Mo(n,i,s){const r=n.getProps();return fd(r,i,s!==void 0?s:r.custom,n)}const Iv=new Set(["width","height","top","left","right","bottom",...No]),eg=30,Ox=n=>!isNaN(parseFloat(n));class wx{constructor(i,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var m;const c=mt.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((m=this.events.change)==null||m.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=s.owner}setCurrent(i){this.current=i,this.updatedAt=mt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=Ox(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,s){this.events[i]||(this.events[i]=new $c);const r=this.events[i].add(s);return i==="change"?()=>{r(),Re.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,s){this.passiveEffect=i,this.stopPassiveEffect=s}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,s,r){this.set(s),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-r}jump(i,s=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=mt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>eg)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,eg);return yv(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(i){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=i(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,s;(i=this.dependents)==null||i.clear(),(s=this.events.destroy)==null||s.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Do(n,i){return new wx(n,i)}const qc=n=>Array.isArray(n);function Rx(n,i,s){n.hasValue(i)?n.getValue(i).set(s):n.addValue(i,Do(s))}function qx(n){return qc(n)?n[n.length-1]||0:n}function jx(n,i){const s=Mo(n,i);let{transitionEnd:r={},transition:c={},...m}=s||{};m={...m,...r};for(const d in m){const h=qx(m[d]);Rx(n,d,h)}}const dt=n=>!!(n&&n.getVelocity);function Vx(n){return!!(dt(n)&&n.add)}function jc(n,i){const s=n.getValue("willChange");if(Vx(s))return s.add(i);if(!s&&Ma.WillChange){const r=new Ma.WillChange("auto");n.addValue("willChange",r),r.add(i)}}function md(n){return n.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const _x="framerAppearId",ey="data-"+md(_x);function ty(n){return n.props[ey]}function Bx({protectedKeys:n,needsAnimating:i},s){const r=n.hasOwnProperty(s)&&i[s]!==!0;return i[s]=!1,r}function ay(n,i,{delay:s=0,transitionOverride:r,type:c}={}){let{transition:m,transitionEnd:d,...h}=i;const p=n.getDefaultTransition();m=m?$v(m,p):p;const g=m==null?void 0:m.reduceMotion;r&&(m=r);const y=[],b=c&&n.animationState&&n.animationState.getState()[c];for(const S in h){const z=n.getValue(S,n.latestValues[S]??null),w=h[S];if(w===void 0||b&&Bx(b,S))continue;const L={delay:s,...cd(m||{},S)},U=z.get();if(U!==void 0&&!z.isAnimating&&!Array.isArray(w)&&w===U&&!L.velocity)continue;let H=!1;if(window.MotionHandoffAnimation){const Z=ty(n);if(Z){const Y=window.MotionHandoffAnimation(Z,S,Re);Y!==null&&(L.startTime=Y,H=!0)}}jc(n,S);const X=g??n.shouldReduceMotion;z.start(dd(S,z,w,X&&Iv.has(S)?{type:!1}:L,n,H));const Q=z.animation;Q&&y.push(Q)}if(d){const S=()=>Re.update(()=>{d&&jx(n,d)});y.length?Promise.all(y).then(S):S()}return y}function Vc(n,i,s={}){var p;const r=Mo(n,i,s.type==="exit"?(p=n.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=r||{};s.transitionOverride&&(c=s.transitionOverride);const m=r?()=>Promise.all(ay(n,r,s)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:S}=c;return Lx(n,i,g,y,b,S,s)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,y]=h==="beforeChildren"?[m,d]:[d,m];return g().then(()=>y())}else return Promise.all([m(),d(s.delay)])}function Lx(n,i,s=0,r=0,c=0,m=1,d){const h=[];for(const p of n.variantChildren)p.notify("AnimationStart",i),h.push(Vc(p,i,{...d,delay:s+(typeof r=="function"?0:r)+Fv(n.variantChildren,p,r,c,m)}).then(()=>p.notify("AnimationComplete",i)));return Promise.all(h)}function Ux(n,i,s={}){n.notify("AnimationStart",i);let r;if(Array.isArray(i)){const c=i.map(m=>Vc(n,m,s));r=Promise.all(c)}else if(typeof i=="string")r=Vc(n,i,s);else{const c=typeof i=="function"?Mo(n,i,s.custom):i;r=Promise.all(ay(n,c,s))}return r.then(()=>{n.notify("AnimationComplete",i)})}const Hx={test:n=>n==="auto",parse:n=>n},ny=n=>i=>i.test(n),oy=[zo,te,oa,an,p1,h1,Hx],tg=n=>oy.find(ny(n));function Gx(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||gv(n):!0}const Qx=new Set(["brightness","contrast","saturate","opacity"]);function kx(n){const[i,s]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[r]=s.match(ad)||[];if(!r)return n;const c=s.replace(r,"");let m=Qx.has(i)?1:0;return r!==s&&(m*=100),i+"("+m+c+")"}const Px=/\b([a-z-]*)\(.*?\)/gu,_c={...$t,getAnimatableNone:n=>{const i=n.match(Px);return i?i.map(kx).join(" "):n}},Bc={...$t,getAnimatableNone:n=>{const i=$t.parse(n);return $t.createTransformer(n)(i.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},ag={...zo,transform:Math.round},Yx={rotate:an,rotateX:an,rotateY:an,rotateZ:an,scale:lr,scaleX:lr,scaleY:lr,scaleZ:lr,skew:an,skewX:an,skewY:an,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:Vi,originX:Qp,originY:Qp,originZ:te},hd={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,top:te,right:te,bottom:te,left:te,inset:te,insetBlock:te,insetBlockStart:te,insetBlockEnd:te,insetInline:te,insetInlineStart:te,insetInlineEnd:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,paddingBlock:te,paddingBlockStart:te,paddingBlockEnd:te,paddingInline:te,paddingInlineStart:te,paddingInlineEnd:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,marginBlock:te,marginBlockStart:te,marginBlockEnd:te,marginInline:te,marginInlineStart:te,marginInlineEnd:te,fontSize:te,backgroundPositionX:te,backgroundPositionY:te,...Yx,zIndex:ag,fillOpacity:Vi,strokeOpacity:Vi,numOctaves:ag},Xx={...hd,color:Ke,backgroundColor:Ke,outlineColor:Ke,fill:Ke,stroke:Ke,borderColor:Ke,borderTopColor:Ke,borderRightColor:Ke,borderBottomColor:Ke,borderLeftColor:Ke,filter:_c,WebkitFilter:_c,mask:Bc,WebkitMask:Bc},iy=n=>Xx[n],Jx=new Set([_c,Bc]);function sy(n,i){let s=iy(n);return Jx.has(s)||(s=$t),s.getAnimatableNone?s.getAnimatableNone(i):void 0}const Zx=new Set(["auto","none","0"]);function Kx(n,i,s){let r=0,c;for(;r<n.length&&!c;){const m=n[r];typeof m=="string"&&!Zx.has(m)&&_i(m).values.length&&(c=n[r]),r++}if(c&&s)for(const m of i)n[m]=sy(s,c)}class Fx extends ud{constructor(i,s,r,c,m){super(i,s,r,c,m,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:s,name:r}=this;if(!s||!s.current)return;super.readKeyframes();for(let y=0;y<i.length;y++){let b=i[y];if(typeof b=="string"&&(b=b.trim(),td(b))){const S=Wv(b,s.current);S!==void 0&&(i[y]=S),y===i.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Iv.has(r)||i.length!==2)return;const[c,m]=i,d=tg(c),h=tg(m),p=Gp(c),g=Gp(m);if(p!==g&&on[r]){this.needsMeasurement=!0;return}if(d!==h)if(Fp(d)&&Fp(h))for(let y=0;y<i.length;y++){const b=i[y];typeof b=="string"&&(i[y]=parseFloat(b))}else on[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:s}=this,r=[];for(let c=0;c<i.length;c++)(i[c]===null||Gx(i[c]))&&r.push(c);r.length&&Kx(i,r,s)}measureInitialState(){const{element:i,unresolvedKeyframes:s,name:r}=this;if(!i||!i.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=on[r](i.measureViewportBox(),window.getComputedStyle(i.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&i.getValue(r,c).jump(c,!1)}measureEndState(){var h;const{element:i,name:s,unresolvedKeyframes:r}=this;if(!i||!i.current)return;const c=i.getValue(s);c&&c.jump(this.measuredOrigin,!1);const m=r.length-1,d=r[m];r[m]=on[s](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{i.getValue(p).set(g)}),this.resolveNoneKeyframes()}}const Wx=new Set(["opacity","clipPath","filter","transform"]);function ry(n,i,s){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const c=(s==null?void 0:s[n])??r.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n).filter(r=>r!=null)}const ly=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function Lc(n){return pv(n)&&"offsetHeight"in n}const{schedule:pd}=Nv(queueMicrotask,!1),Ft={x:!1,y:!1};function uy(){return Ft.x||Ft.y}function $x(n){return n==="x"||n==="y"?Ft[n]?null:(Ft[n]=!0,()=>{Ft[n]=!1}):Ft.x||Ft.y?null:(Ft.x=Ft.y=!0,()=>{Ft.x=Ft.y=!1})}function cy(n,i){const s=ry(n),r=new AbortController,c={passive:!0,...i,signal:r.signal};return[s,c,()=>r.abort()]}function Ix(n){return!(n.pointerType==="touch"||uy())}function eT(n,i,s={}){const[r,c,m]=cy(n,s);return r.forEach(d=>{let h=!1,p=!1,g;const y=()=>{d.removeEventListener("pointerleave",w)},b=U=>{g&&(g(U),g=void 0),y()},S=U=>{h=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),p&&(p=!1,b(U))},z=()=>{h=!0,window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",S,c)},w=U=>{if(U.pointerType!=="touch"){if(h){p=!0;return}b(U)}},L=U=>{if(!Ix(U))return;p=!1;const H=i(d,U);typeof H=="function"&&(g=H,d.addEventListener("pointerleave",w,c))};d.addEventListener("pointerenter",L,c),d.addEventListener("pointerdown",z,c)}),m}const dy=(n,i)=>i?n===i?!0:dy(n,i.parentElement):!1,gd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,tT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function aT(n){return tT.has(n.tagName)||n.isContentEditable===!0}const nT=new Set(["INPUT","SELECT","TEXTAREA"]);function oT(n){return nT.has(n.tagName)||n.isContentEditable===!0}const hr=new WeakSet;function ng(n){return i=>{i.key==="Enter"&&n(i)}}function lc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const iT=(n,i)=>{const s=n.currentTarget;if(!s)return;const r=ng(()=>{if(hr.has(s))return;lc(s,"down");const c=ng(()=>{lc(s,"up")}),m=()=>lc(s,"cancel");s.addEventListener("keyup",c,i),s.addEventListener("blur",m,i)});s.addEventListener("keydown",r,i),s.addEventListener("blur",()=>s.removeEventListener("keydown",r),i)};function og(n){return gd(n)&&!uy()}const ig=new WeakSet;function sT(n,i,s={}){const[r,c,m]=cy(n,s),d=h=>{const p=h.currentTarget;if(!og(h)||ig.has(h))return;hr.add(p),s.stopPropagation&&ig.add(h);const g=i(p,h),y=(z,w)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),hr.has(p)&&hr.delete(p),og(z)&&typeof g=="function"&&g(z,{success:w})},b=z=>{y(z,p===window||p===document||s.useGlobalTarget||dy(p,z.target))},S=z=>{y(z,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",S,c)};return r.forEach(h=>{(s.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),Lc(h)&&(h.addEventListener("focus",g=>iT(g,c)),!aT(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),m}function vd(n){return pv(n)&&"ownerSVGElement"in n}const pr=new WeakMap;let nn;const fy=(n,i,s)=>(r,c)=>c&&c[0]?c[0][n+"Size"]:vd(r)&&"getBBox"in r?r.getBBox()[i]:r[s],rT=fy("inline","width","offsetWidth"),lT=fy("block","height","offsetHeight");function uT({target:n,borderBoxSize:i}){var s;(s=pr.get(n))==null||s.forEach(r=>{r(n,{get width(){return rT(n,i)},get height(){return lT(n,i)}})})}function cT(n){n.forEach(uT)}function dT(){typeof ResizeObserver>"u"||(nn=new ResizeObserver(cT))}function fT(n,i){nn||dT();const s=ry(n);return s.forEach(r=>{let c=pr.get(r);c||(c=new Set,pr.set(r,c)),c.add(i),nn==null||nn.observe(r)}),()=>{s.forEach(r=>{const c=pr.get(r);c==null||c.delete(i),c!=null&&c.size||nn==null||nn.unobserve(r)})}}const gr=new Set;let To;function mT(){To=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};gr.forEach(i=>i(n))},window.addEventListener("resize",To)}function hT(n){return gr.add(n),To||mT(),()=>{gr.delete(n),!gr.size&&typeof To=="function"&&(window.removeEventListener("resize",To),To=void 0)}}function sg(n,i){return typeof n=="function"?hT(n):fT(n,i)}function pT(n){return vd(n)&&n.tagName==="svg"}const gT=[...oy,Ke,$t],vT=n=>gT.find(ny(n)),rg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Eo=()=>({x:rg(),y:rg()}),lg=()=>({min:0,max:0}),$e=()=>({x:lg(),y:lg()}),yT=new WeakMap;function Or(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Bi(n){return typeof n=="string"||Array.isArray(n)}const yd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bd=["initial",...yd];function wr(n){return Or(n.animate)||bd.some(i=>Bi(n[i]))}function my(n){return!!(wr(n)||n.variants)}function bT(n,i,s){for(const r in i){const c=i[r],m=s[r];if(dt(c))n.addValue(r,c);else if(dt(m))n.addValue(r,Do(c,{owner:n}));else if(m!==c)if(n.hasValue(r)){const d=n.getValue(r);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(r);n.addValue(r,Do(d!==void 0?d:c,{owner:n}))}}for(const r in s)i[r]===void 0&&n.removeValue(r);return i}const Uc={current:null},hy={current:!1},ST=typeof window<"u";function xT(){if(hy.current=!0,!!ST)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Uc.current=n.matches;n.addEventListener("change",i),i()}else Uc.current=!1}const ug=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Er={};function py(n){Er=n}function TT(){return Er}class ET{scrapeMotionValuesFromProps(i,s,r){return{}}constructor({parent:i,props:s,presenceContext:r,reducedMotionConfig:c,skipAnimations:m,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ud,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const z=mt.now();this.renderScheduledAt<z&&(this.renderScheduledAt=z,Re.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=s.initial?{...g}:{},this.renderState=y,this.parent=i,this.props=s,this.presenceContext=r,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=m,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=wr(s),this.isVariantNode=my(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...S}=this.scrapeMotionValuesFromProps(s,{},this);for(const z in S){const w=S[z];g[z]!==void 0&&dt(w)&&w.set(g[z])}}mount(i){var s,r;if(this.hasBeenMounted)for(const c in this.initialValues)(s=this.values.get(c))==null||s.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=i,yT.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,m)=>this.bindToMotionValue(m,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(hy.current||xT(),this.shouldReduceMotion=Uc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var i;this.projection&&this.projection.unmount(),sn(this.notifyUpdate),sn(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(i=this.parent)==null||i.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const r=this.features[s];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,s){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),s.accelerate&&Wx.has(i)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:y}=s.accelerate,b=new Zv({element:this.current,name:i,keyframes:h,times:p,ease:g,duration:Wt(y)}),S=d(b);this.valueSubscriptions.set(i,()=>{S(),b.cancel()});return}const r=Oo.has(i);r&&this.onBindTransform&&this.onBindTransform();const c=s.on("change",d=>{this.latestValues[i]=d,this.props.onUpdate&&Re.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,i,s)),this.valueSubscriptions.set(i,()=>{c(),m&&m(),s.owner&&s.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Er){const s=Er[i];if(!s)continue;const{isEnabled:r,Feature:c}=s;if(!this.features[i]&&c&&r(this.props)&&(this.features[i]=new c(this)),this.features[i]){const m=this.features[i];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,s){this.latestValues[i]=s}update(i,s){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let r=0;r<ug.length;r++){const c=ug[r];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const m="on"+c,d=i[m];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=bT(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(i),()=>s.variantChildren.delete(i)}addValue(i,s){const r=this.values.get(i);s!==r&&(r&&this.removeValue(i),this.bindToMotionValue(i,s),this.values.set(i,s),this.latestValues[i]=s.get())}removeValue(i){this.values.delete(i);const s=this.valueSubscriptions.get(i);s&&(s(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,s){if(this.props.values&&this.props.values[i])return this.props.values[i];let r=this.values.get(i);return r===void 0&&s!==void 0&&(r=Do(s===null?void 0:s,{owner:this}),this.addValue(i,r)),r}readValue(i,s){let r=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return r!=null&&(typeof r=="string"&&(hv(r)||gv(r))?r=parseFloat(r):!vT(r)&&$t.test(s)&&(r=sy(i,s)),this.setBaseTarget(i,dt(r)?r.get():r)),dt(r)?r.get():r}setBaseTarget(i,s){this.baseTarget[i]=s}getBaseTarget(i){var m;const{initial:s}=this.props;let r;if(typeof s=="string"||typeof s=="object"){const d=fd(this.props,s,(m=this.presenceContext)==null?void 0:m.custom);d&&(r=d[i])}if(s&&r!==void 0)return r;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!dt(c)?c:this.initialValues[i]!==void 0&&r===void 0?void 0:this.baseTarget[i]}on(i,s){return this.events[i]||(this.events[i]=new $c),this.events[i].add(s)}notify(i,...s){this.events[i]&&this.events[i].notify(...s)}scheduleRenderMicrotask(){pd.render(this.render)}}class gy extends ET{constructor(){super(...arguments),this.KeyframeResolver=Fx}sortInstanceNodePosition(i,s){return i.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(i,s){const r=i.style;return r?r[s]:void 0}removeValueFromRenderState(i,{vars:s,style:r}){delete s[i],delete r[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;dt(i)&&(this.childSubscription=i.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}class rn{constructor(i){this.isMounted=!1,this.node=i}update(){}}function vy({top:n,left:i,right:s,bottom:r}){return{x:{min:i,max:s},y:{min:n,max:r}}}function AT({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function CT(n,i){if(!i)return n;const s=i({x:n.left,y:n.top}),r=i({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:r.y,right:r.x}}function uc(n){return n===void 0||n===1}function Hc({scale:n,scaleX:i,scaleY:s}){return!uc(n)||!uc(i)||!uc(s)}function Nn(n){return Hc(n)||yy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function yy(n){return cg(n.x)||cg(n.y)}function cg(n){return n&&n!=="0%"}function Ar(n,i,s){const r=n-s,c=i*r;return s+c}function dg(n,i,s,r,c){return c!==void 0&&(n=Ar(n,c,r)),Ar(n,s,r)+i}function Gc(n,i=0,s=1,r,c){n.min=dg(n.min,i,s,r,c),n.max=dg(n.max,i,s,r,c)}function by(n,{x:i,y:s}){Gc(n.x,i.translate,i.scale,i.originPoint),Gc(n.y,s.translate,s.scale,s.originPoint)}const fg=.999999999999,mg=1.0000000000001;function MT(n,i,s,r=!1){const c=s.length;if(!c)return;i.x=i.y=1;let m,d;for(let h=0;h<c;h++){m=s[h],d=m.projectionDelta;const{visualElement:p}=m.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Co(n,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,by(n,d)),r&&Nn(m.latestValues)&&Co(n,m.latestValues))}i.x<mg&&i.x>fg&&(i.x=1),i.y<mg&&i.y>fg&&(i.y=1)}function Ao(n,i){n.min=n.min+i,n.max=n.max+i}function hg(n,i,s,r,c=.5){const m=Le(n.min,n.max,c);Gc(n,i,s,m,r)}function Co(n,i){hg(n.x,i.x,i.scaleX,i.scale,i.originX),hg(n.y,i.y,i.scaleY,i.scale,i.originY)}function Sy(n,i){return vy(CT(n.getBoundingClientRect(),i))}function DT(n,i,s){const r=Sy(n,s),{scroll:c}=i;return c&&(Ao(r.x,c.offset.x),Ao(r.y,c.offset.y)),r}const zT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},NT=No.length;function OT(n,i,s){let r="",c=!0;for(let m=0;m<NT;m++){const d=No[m],h=n[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||s){const g=ly(h,hd[d]);if(!p){c=!1;const y=zT[d]||d;r+=`${y}(${g}) `}s&&(i[d]=g)}}return r=r.trim(),s?r=s(i,c?"":r):c&&(r="none"),r}function Sd(n,i,s){const{style:r,vars:c,transformOrigin:m}=n;let d=!1,h=!1;for(const p in i){const g=i[p];if(Oo.has(p)){d=!0;continue}else if(wv(p)){c[p]=g;continue}else{const y=ly(g,hd[p]);p.startsWith("origin")?(h=!0,m[p]=y):r[p]=y}}if(i.transform||(d||s?r.transform=OT(i,n.transform,s):r.transform&&(r.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:y=0}=m;r.transformOrigin=`${p} ${g} ${y}`}}function xy(n,{style:i,vars:s},r,c){const m=n.style;let d;for(d in i)m[d]=i[d];c==null||c.applyProjectionStyles(m,r);for(d in s)m.setProperty(d,s[d])}function pg(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Ci={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(te.test(n))n=parseFloat(n);else return n;const s=pg(n,i.target.x),r=pg(n,i.target.y);return`${s}% ${r}%`}},wT={correct:(n,{treeScale:i,projectionDelta:s})=>{const r=n,c=$t.parse(n);if(c.length>5)return r;const m=$t.createTransformer(n),d=typeof c[0]!="number"?1:0,h=s.x.scale*i.x,p=s.y.scale*i.y;c[0+d]/=h,c[1+d]/=p;const g=Le(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),m(c)}},Qc={borderRadius:{...Ci,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ci,borderTopRightRadius:Ci,borderBottomLeftRadius:Ci,borderBottomRightRadius:Ci,boxShadow:wT};function Ty(n,{layout:i,layoutId:s}){return Oo.has(n)||n.startsWith("origin")||(i||s!==void 0)&&(!!Qc[n]||n==="opacity")}function xd(n,i,s){var d;const r=n.style,c=i==null?void 0:i.style,m={};if(!r)return m;for(const h in r)(dt(r[h])||c&&dt(c[h])||Ty(h,n)||((d=s==null?void 0:s.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(m[h]=r[h]);return m}function RT(n){return window.getComputedStyle(n)}class qT extends gy{constructor(){super(...arguments),this.type="html",this.renderInstance=xy}readValueFromInstance(i,s){var r;if(Oo.has(s))return(r=this.projection)!=null&&r.isProjecting?Dc(s):$1(i,s);{const c=RT(i),m=(wv(s)?c.getPropertyValue(s):c[s])||0;return typeof m=="string"?m.trim():m}}measureInstanceViewportBox(i,{transformPagePoint:s}){return Sy(i,s)}build(i,s,r){Sd(i,s,r.transformTemplate)}scrapeMotionValuesFromProps(i,s,r){return xd(i,s,r)}}const jT={offset:"stroke-dashoffset",array:"stroke-dasharray"},VT={offset:"strokeDashoffset",array:"strokeDasharray"};function _T(n,i,s=1,r=0,c=!0){n.pathLength=1;const m=c?jT:VT;n[m.offset]=`${-r}`,n[m.array]=`${i} ${s}`}const BT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Ey(n,{attrX:i,attrY:s,attrScale:r,pathLength:c,pathSpacing:m=1,pathOffset:d=0,...h},p,g,y){if(Sd(n,h,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:S}=n;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox);for(const z of BT)b[z]!==void 0&&(S[z]=b[z],delete b[z]);i!==void 0&&(b.x=i),s!==void 0&&(b.y=s),r!==void 0&&(b.scale=r),c!==void 0&&_T(b,c,m,d,!1)}const Ay=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Cy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function LT(n,i,s,r){xy(n,i,void 0,r);for(const c in i.attrs)n.setAttribute(Ay.has(c)?c:md(c),i.attrs[c])}function My(n,i,s){const r=xd(n,i,s);for(const c in n)if(dt(n[c])||dt(i[c])){const m=No.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;r[m]=n[c]}return r}class UT extends gy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$e}getBaseTargetFromProps(i,s){return i[s]}readValueFromInstance(i,s){if(Oo.has(s)){const r=iy(s);return r&&r.default||0}return s=Ay.has(s)?s:md(s),i.getAttribute(s)}scrapeMotionValuesFromProps(i,s,r){return My(i,s,r)}build(i,s,r){Ey(i,s,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(i,s,r,c){LT(i,s,r,c)}mount(i){this.isSVGTag=Cy(i.tagName),super.mount(i)}}const HT=bd.length;function Dy(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?Dy(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const i={};for(let s=0;s<HT;s++){const r=bd[s],c=n.props[r];(Bi(c)||c===!1)&&(i[r]=c)}return i}function zy(n,i){if(!Array.isArray(i))return!1;const s=i.length;if(s!==n.length)return!1;for(let r=0;r<s;r++)if(i[r]!==n[r])return!1;return!0}const GT=[...yd].reverse(),QT=yd.length;function kT(n){return i=>Promise.all(i.map(({animation:s,options:r})=>Ux(n,s,r)))}function PT(n){let i=kT(n),s=gg(),r=!0;const c=p=>(g,y)=>{var S;const b=Mo(n,y,p==="exit"?(S=n.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:z,transitionEnd:w,...L}=b;g={...g,...L,...w}}return g};function m(p){i=p(n)}function d(p){const{props:g}=n,y=Dy(n.parent)||{},b=[],S=new Set;let z={},w=1/0;for(let U=0;U<QT;U++){const H=GT[U],X=s[H],Q=g[H]!==void 0?g[H]:y[H],Z=Bi(Q),Y=H===p?X.isActive:null;Y===!1&&(w=U);let ie=Q===y[H]&&Q!==g[H]&&Z;if(ie&&r&&n.manuallyAnimateOnMount&&(ie=!1),X.protectedKeys={...z},!X.isActive&&Y===null||!Q&&!X.prevProp||Or(Q)||typeof Q=="boolean")continue;if(H==="exit"&&X.isActive&&Y!==!0){X.prevResolvedValues&&(z={...z,...X.prevResolvedValues});continue}const W=YT(X.prevProp,Q);let B=W||H===p&&X.isActive&&!ie&&Z||U>w&&Z,se=!1;const Ce=Array.isArray(Q)?Q:[Q];let _e=Ce.reduce(c(H),{});Y===!1&&(_e={});const{prevResolvedValues:qe={}}=X,pt={...qe,..._e},ut=G=>{B=!0,S.has(G)&&(se=!0,S.delete(G)),X.needsAnimating[G]=!0;const $=n.getValue(G);$&&($.liveStyle=!1)};for(const G in pt){const $=_e[G],me=qe[G];if(z.hasOwnProperty(G))continue;let P=!1;qc($)&&qc(me)?P=!zy($,me):P=$!==me,P?$!=null?ut(G):S.add(G):$!==void 0&&S.has(G)?ut(G):X.protectedKeys[G]=!0}X.prevProp=Q,X.prevResolvedValues=_e,X.isActive&&(z={...z,..._e}),r&&n.blockInitialAnimation&&(B=!1);const Qe=ie&&W;B&&(!Qe||se)&&b.push(...Ce.map(G=>{const $={type:H};if(typeof G=="string"&&r&&!Qe&&n.manuallyAnimateOnMount&&n.parent){const{parent:me}=n,P=Mo(me,G);if(me.enteringChildren&&P){const{delayChildren:A}=P.transition||{};$.delay=Fv(me.enteringChildren,n,A)}}return{animation:G,options:$}}))}if(S.size){const U={};if(typeof g.initial!="boolean"){const H=Mo(n,Array.isArray(g.initial)?g.initial[0]:g.initial);H&&H.transition&&(U.transition=H.transition)}S.forEach(H=>{const X=n.getBaseTarget(H),Q=n.getValue(H);Q&&(Q.liveStyle=!0),U[H]=X??null}),b.push({animation:U})}let L=!!b.length;return r&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(L=!1),r=!1,L?i(b):Promise.resolve()}function h(p,g){var b;if(s[p].isActive===g)return Promise.resolve();(b=n.variantChildren)==null||b.forEach(S=>{var z;return(z=S.animationState)==null?void 0:z.setActive(p,g)}),s[p].isActive=g;const y=d(p);for(const S in s)s[S].protectedKeys={};return y}return{animateChanges:d,setActive:h,setAnimateFunction:m,getState:()=>s,reset:()=>{s=gg()}}}function YT(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!zy(i,n):!1}function Dn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gg(){return{animate:Dn(!0),whileInView:Dn(),whileHover:Dn(),whileTap:Dn(),whileDrag:Dn(),whileFocus:Dn(),exit:Dn()}}function vg(n,i){n.min=i.min,n.max=i.max}function Kt(n,i){vg(n.x,i.x),vg(n.y,i.y)}function yg(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}const Ny=1e-4,XT=1-Ny,JT=1+Ny,Oy=.01,ZT=0-Oy,KT=0+Oy;function ht(n){return n.max-n.min}function FT(n,i,s){return Math.abs(n-i)<=s}function bg(n,i,s,r=.5){n.origin=r,n.originPoint=Le(i.min,i.max,n.origin),n.scale=ht(s)/ht(i),n.translate=Le(s.min,s.max,n.origin)-n.originPoint,(n.scale>=XT&&n.scale<=JT||isNaN(n.scale))&&(n.scale=1),(n.translate>=ZT&&n.translate<=KT||isNaN(n.translate))&&(n.translate=0)}function Ri(n,i,s,r){bg(n.x,i.x,s.x,r?r.originX:void 0),bg(n.y,i.y,s.y,r?r.originY:void 0)}function Sg(n,i,s){n.min=s.min+i.min,n.max=n.min+ht(i)}function WT(n,i,s){Sg(n.x,i.x,s.x),Sg(n.y,i.y,s.y)}function xg(n,i,s){n.min=i.min-s.min,n.max=n.min+ht(i)}function Cr(n,i,s){xg(n.x,i.x,s.x),xg(n.y,i.y,s.y)}function Tg(n,i,s,r,c){return n-=i,n=Ar(n,1/s,r),c!==void 0&&(n=Ar(n,1/c,r)),n}function $T(n,i=0,s=1,r=.5,c,m=n,d=n){if(oa.test(i)&&(i=parseFloat(i),i=Le(d.min,d.max,i/100)-d.min),typeof i!="number")return;let h=Le(m.min,m.max,r);n===m&&(h-=i),n.min=Tg(n.min,i,s,h,c),n.max=Tg(n.max,i,s,h,c)}function Eg(n,i,[s,r,c],m,d){$T(n,i[s],i[r],i[c],i.scale,m,d)}const IT=["x","scaleX","originX"],eE=["y","scaleY","originY"];function Ag(n,i,s,r){Eg(n.x,i,IT,s?s.x:void 0,r?r.x:void 0),Eg(n.y,i,eE,s?s.y:void 0,r?r.y:void 0)}function Cg(n){return n.translate===0&&n.scale===1}function wy(n){return Cg(n.x)&&Cg(n.y)}function Mg(n,i){return n.min===i.min&&n.max===i.max}function tE(n,i){return Mg(n.x,i.x)&&Mg(n.y,i.y)}function Dg(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Ry(n,i){return Dg(n.x,i.x)&&Dg(n.y,i.y)}function zg(n){return ht(n.x)/ht(n.y)}function Ng(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}function na(n){return[n("x"),n("y")]}function aE(n,i,s){let r="";const c=n.x.translate/i.x,m=n.y.translate/i.y,d=(s==null?void 0:s.z)||0;if((c||m||d)&&(r=`translate3d(${c}px, ${m}px, ${d}px) `),(i.x!==1||i.y!==1)&&(r+=`scale(${1/i.x}, ${1/i.y}) `),s){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:S,skewX:z,skewY:w}=s;g&&(r=`perspective(${g}px) ${r}`),y&&(r+=`rotate(${y}deg) `),b&&(r+=`rotateX(${b}deg) `),S&&(r+=`rotateY(${S}deg) `),z&&(r+=`skewX(${z}deg) `),w&&(r+=`skewY(${w}deg) `)}const h=n.x.scale*i.x,p=n.y.scale*i.y;return(h!==1||p!==1)&&(r+=`scale(${h}, ${p})`),r||"none"}const qy=["TopLeft","TopRight","BottomLeft","BottomRight"],nE=qy.length,Og=n=>typeof n=="string"?parseFloat(n):n,wg=n=>typeof n=="number"||te.test(n);function oE(n,i,s,r,c,m){c?(n.opacity=Le(0,s.opacity??1,iE(r)),n.opacityExit=Le(i.opacity??1,0,sE(r))):m&&(n.opacity=Le(i.opacity??1,s.opacity??1,r));for(let d=0;d<nE;d++){const h=`border${qy[d]}Radius`;let p=Rg(i,h),g=Rg(s,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||wg(p)===wg(g)?(n[h]=Math.max(Le(Og(p),Og(g),r),0),(oa.test(g)||oa.test(p))&&(n[h]+="%")):n[h]=g}(i.rotate||s.rotate)&&(n.rotate=Le(i.rotate||0,s.rotate||0,r))}function Rg(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const iE=jy(0,.5,Cv),sE=jy(.5,.95,Yt);function jy(n,i,s){return r=>r<n?0:r>i?1:s(ji(n,i,r))}function rE(n,i,s){const r=dt(n)?n:Do(n);return r.start(dd("",r,i,s)),r.animation}function Li(n,i,s,r={passive:!0}){return n.addEventListener(i,s,r),()=>n.removeEventListener(i,s)}const lE=(n,i)=>n.depth-i.depth;class uE{constructor(){this.children=[],this.isDirty=!1}add(i){Fc(this.children,i),this.isDirty=!0}remove(i){br(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(lE),this.isDirty=!1,this.children.forEach(i)}}function cE(n,i){const s=mt.now(),r=({timestamp:c})=>{const m=c-s;m>=i&&(sn(r),n(m-i))};return Re.setup(r,!0),()=>sn(r)}function vr(n){return dt(n)?n.get():n}class dE{constructor(){this.members=[]}add(i){Fc(this.members,i);for(let s=this.members.length-1;s>=0;s--){const r=this.members[s];if(r===i||r===this.lead||r===this.prevLead)continue;const c=r.instance;c&&c.isConnected===!1&&r.isPresent!==!1&&!r.snapshot&&br(this.members,r)}i.scheduleRender()}remove(i){if(br(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(i){const s=this.members.findIndex(c=>i===c);if(s===0)return!1;let r;for(let c=s;c>=0;c--){const m=this.members[c],d=m.instance;if(m.isPresent!==!1&&(!d||d.isConnected!==!1)){r=m;break}}return r?(this.promote(r),!0):!1}promote(i,s){const r=this.lead;if(i!==r&&(this.prevLead=r,this.lead=i,i.show(),r)){r.instance&&r.scheduleRender(),i.scheduleRender();const c=r.options.layoutDependency,m=i.options.layoutDependency;if(!(c!==void 0&&m!==void 0&&c===m)){const p=r.instance;p&&p.isConnected===!1&&!r.snapshot||(i.resumeFrom=r,s&&(i.resumeFrom.preserveOpacity=!0),r.snapshot&&(i.snapshot=r.snapshot,i.snapshot.latestValues=r.animationValues||r.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0))}const{crossfade:h}=i.options;h===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:s,resumingFrom:r}=i;s.onExitComplete&&s.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const yr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},cc=["","X","Y","Z"],fE=1e3;let mE=0;function dc(n,i,s,r){const{latestValues:c}=i;c[n]&&(s[n]=c[n],i.setStaticValue(n,0),r&&(r[n]=0))}function Vy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const s=ty(i);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:m}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",Re,!(c||m))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Vy(r)}function _y({attachResizeListener:n,defaultParent:i,measureScroll:s,checkIsScrollRoot:r,resetTransform:c}){return class{constructor(d={},h=i==null?void 0:i()){this.id=mE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(gE),this.nodes.forEach(SE),this.nodes.forEach(xE),this.nodes.forEach(vE)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new uE)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new $c),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=vd(d)&&!pT(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),n){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;Re.read(()=>{b=window.innerWidth}),n(d,()=>{const z=window.innerWidth;z!==b&&(b=z,this.root.updateBlockedByResize=!0,y&&y(),y=cE(S,250),yr.hasAnimatedSinceResize&&(yr.hasAnimatedSinceResize=!1,this.nodes.forEach(Vg)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:z})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||g.getDefaultTransition()||ME,{onLayoutAnimationStart:L,onLayoutAnimationComplete:U}=g.getProps(),H=!this.targetLayout||!Ry(this.targetLayout,z),X=!b&&S;if(this.options.layoutRoot||this.resumeFrom||X||b&&(H||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const Q={...cd(w,"layout"),onPlay:L,onComplete:U};(g.shouldReduceMotion||this.options.layoutRoot)&&(Q.delay=0,Q.type=!1),this.startAnimation(Q),this.setAnimationOrigin(y,X)}else b||Vg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=z})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),sn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(TE),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Vy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(qg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(jg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(bE),this.nodes.forEach(hE),this.nodes.forEach(pE)):this.nodes.forEach(jg),this.clearAllSnapshots();const h=mt.now();lt.delta=ia(0,1e3/60,h-lt.timestamp),lt.timestamp=h,lt.isProcessing=!0,ac.update.process(lt),ac.preRender.process(lt),ac.render.process(lt),lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,pd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yE),this.sharedNodes.forEach(EE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Re.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Re.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ht(this.snapshot.measuredBox.x)&&!ht(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=$e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=r(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!wy(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||Nn(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),DE(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return $e();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(zE))){const{scroll:y}=this.root;y&&(Ao(h.x,y.offset.x),Ao(h.y,y.offset.y))}return h}removeElementScroll(d){var p;const h=$e();if(Kt(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:b,options:S}=y;y!==this.root&&b&&S.layoutScroll&&(b.wasRoot&&Kt(h,d),Ao(h.x,b.offset.x),Ao(h.y,b.offset.y))}return h}applyTransform(d,h=!1){const p=$e();Kt(p,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Co(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Nn(y.latestValues)&&Co(p,y.latestValues)}return Nn(this.latestValues)&&Co(p,this.latestValues),p}removeTransform(d){const h=$e();Kt(h,d);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!Nn(g.latestValues))continue;Hc(g.latestValues)&&g.updateSnapshot();const y=$e(),b=g.measurePageBox();Kt(y,b),Ag(h,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Nn(this.latestValues)&&Ag(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var z;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(z=this.parent)!=null&&z.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=lt.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),WT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),by(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Hc(this.parent.latestValues)||yy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),Cr(this.relativeTargetOrigin,h,p),Kt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var w;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===lt.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Kt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;MT(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=$e());const{target:z}=d;if(!z){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yg(this.prevProjectionDelta.x,this.projectionDelta.x),yg(this.prevProjectionDelta.y,this.projectionDelta.y)),Ri(this.projectionDelta,this.layoutCorrected,z,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!Ng(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ng(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",z))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Eo(),this.projectionDelta=Eo(),this.projectionDeltaWithTransform=Eo()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},b=Eo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const S=$e(),z=p?p.source:void 0,w=this.layout?this.layout.source:void 0,L=z!==w,U=this.getStack(),H=!U||U.members.length<=1,X=!!(L&&!H&&this.options.crossfade===!0&&!this.path.some(CE));this.animationProgress=0;let Q;this.mixTargetDelta=Z=>{const Y=Z/1e3;_g(b.x,d.x,Y),_g(b.y,d.y,Y),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Cr(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),AE(this.relativeTarget,this.relativeTargetOrigin,S,Y),Q&&tE(this.relativeTarget,Q)&&(this.isProjectionDirty=!1),Q||(Q=$e()),Kt(Q,this.relativeTarget)),L&&(this.animationValues=y,oE(y,g,this.latestValues,Y,X,H)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(sn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Re.update(()=>{yr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Do(0)),this.motionValue.jump(0,!1),this.currentAnimation=rE(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:y}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&By(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||$e();const b=ht(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+b;const S=ht(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+S}Kt(h,p),Co(h,y),Ri(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new dE),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&dc("z",d,g,this.animationValues);for(let y=0;y<cc.length;y++)dc(`rotate${cc[y]}`,d,g,this.animationValues),dc(`skew${cc[y]}`,d,g,this.animationValues);d.render();for(const y in g)d.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vr(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vr(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Nn(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=aE(this.projectionDeltaWithTransform,this.treeScale,y);p&&(b=p(y,b)),d.transform=b;const{x:S,y:z}=this.projectionDelta;d.transformOrigin=`${S.origin*100}% ${z.origin*100}% 0`,g.animationValues?d.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const w in Qc){if(y[w]===void 0)continue;const{correct:L,applyTo:U,isCSSVariable:H}=Qc[w],X=b==="none"?y[w]:L(y[w],g);if(U){const Q=U.length;for(let Z=0;Z<Q;Z++)d[U[Z]]=X}else H?this.options.visualElement.renderState.vars[w]=X:d[w]=X}this.options.layoutId&&(d.pointerEvents=g===this?vr(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(qg),this.root.sharedNodes.clear()}}}function hE(n){n.updateLayout()}function pE(n){var s;const i=((s=n.resumeFrom)==null?void 0:s.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:c}=n.layout,{animationType:m}=n.options,d=i.source!==n.layout.source;m==="size"?na(b=>{const S=d?i.measuredBox[b]:i.layoutBox[b],z=ht(S);S.min=r[b].min,S.max=S.min+z}):By(m,i.layoutBox,r)&&na(b=>{const S=d?i.measuredBox[b]:i.layoutBox[b],z=ht(r[b]);S.max=S.min+z,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+z)});const h=Eo();Ri(h,r,i.layoutBox);const p=Eo();d?Ri(p,n.applyTransform(c,!0),i.measuredBox):Ri(p,r,i.layoutBox);const g=!wy(h);let y=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:S,layout:z}=b;if(S&&z){const w=$e();Cr(w,i.layoutBox,S.layoutBox);const L=$e();Cr(L,r,z.layoutBox),Ry(w,L)||(y=!0),b.options.layoutRoot&&(n.relativeTarget=L,n.relativeTargetOrigin=w,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:i,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function gE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function vE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function yE(n){n.clearSnapshot()}function qg(n){n.clearMeasurements()}function jg(n){n.isLayoutDirty=!1}function bE(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function Vg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function SE(n){n.resolveTargetDelta()}function xE(n){n.calcProjection()}function TE(n){n.resetSkewAndRotation()}function EE(n){n.removeLeadSnapshot()}function _g(n,i,s){n.translate=Le(i.translate,0,s),n.scale=Le(i.scale,1,s),n.origin=i.origin,n.originPoint=i.originPoint}function Bg(n,i,s,r){n.min=Le(i.min,s.min,r),n.max=Le(i.max,s.max,r)}function AE(n,i,s,r){Bg(n.x,i.x,s.x,r),Bg(n.y,i.y,s.y,r)}function CE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const ME={duration:.45,ease:[.4,0,.1,1]},Lg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Ug=Lg("applewebkit/")&&!Lg("chrome/")?Math.round:Yt;function Hg(n){n.min=Ug(n.min),n.max=Ug(n.max)}function DE(n){Hg(n.x),Hg(n.y)}function By(n,i,s){return n==="position"||n==="preserve-aspect"&&!FT(zg(i),zg(s),.2)}function zE(n){var i;return n!==n.root&&((i=n.scroll)==null?void 0:i.wasRoot)}const NE=_y({attachResizeListener:(n,i)=>Li(n,"resize",i),measureScroll:()=>{var n,i;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((i=document.body)==null?void 0:i.scrollTop)||0}},checkIsScrollRoot:()=>!0}),fc={current:void 0},Ly=_y({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!fc.current){const n=new NE({});n.mount(window),n.setOptions({layoutScroll:!0}),fc.current=n}return fc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Td=k.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Gg(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function OE(...n){return i=>{let s=!1;const r=n.map(c=>{const m=Gg(c,i);return!s&&typeof m=="function"&&(s=!0),m});if(s)return()=>{for(let c=0;c<r.length;c++){const m=r[c];typeof m=="function"?m():Gg(n[c],null)}}}}function wE(...n){return k.useCallback(OE(...n),n)}class RE extends k.Component{getSnapshotBeforeUpdate(i){const s=this.props.childRef.current;if(s&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=s.offsetParent,c=Lc(r)&&r.offsetWidth||0,m=Lc(r)&&r.offsetHeight||0,d=this.props.sizeRef.current;d.height=s.offsetHeight||0,d.width=s.offsetWidth||0,d.top=s.offsetTop,d.left=s.offsetLeft,d.right=c-d.width-d.left,d.bottom=m-d.height-d.top}return null}componentDidUpdate(){}render(){return this.props.children}}function qE({children:n,isPresent:i,anchorX:s,anchorY:r,root:c,pop:m}){var S;const d=k.useId(),h=k.useRef(null),p=k.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=k.useContext(Td),y=((S=n.props)==null?void 0:S.ref)??(n==null?void 0:n.ref),b=wE(h,y);return k.useInsertionEffect(()=>{const{width:z,height:w,top:L,left:U,right:H,bottom:X}=p.current;if(i||m===!1||!h.current||!z||!w)return;const Q=s==="left"?`left: ${U}`:`right: ${H}`,Z=r==="bottom"?`bottom: ${X}`:`top: ${L}`;h.current.dataset.motionPopId=d;const Y=document.createElement("style");g&&(Y.nonce=g);const ie=c??document.head;return ie.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${z}px !important;
            height: ${w}px !important;
            ${Q}px !important;
            ${Z}px !important;
          }
        `),()=>{ie.contains(Y)&&ie.removeChild(Y)}},[i]),x.jsx(RE,{isPresent:i,childRef:h,sizeRef:p,pop:m,children:m===!1?n:k.cloneElement(n,{ref:b})})}const jE=({children:n,initial:i,isPresent:s,onExitComplete:r,custom:c,presenceAffectsLayout:m,mode:d,anchorX:h,anchorY:p,root:g})=>{const y=Kc(VE),b=k.useId();let S=!0,z=k.useMemo(()=>(S=!1,{id:b,initial:i,isPresent:s,custom:c,onExitComplete:w=>{y.set(w,!0);for(const L of y.values())if(!L)return;r&&r()},register:w=>(y.set(w,!1),()=>y.delete(w))}),[s,y,r]);return m&&S&&(z={...z}),k.useMemo(()=>{y.forEach((w,L)=>y.set(L,!1))},[s]),k.useEffect(()=>{!s&&!y.size&&r&&r()},[s]),n=x.jsx(qE,{pop:d==="popLayout",isPresent:s,anchorX:h,anchorY:p,root:g,children:n}),x.jsx(Nr.Provider,{value:z,children:n})};function VE(){return new Map}function Uy(n=!0){const i=k.useContext(Nr);if(i===null)return[!0,null];const{isPresent:s,onExitComplete:r,register:c}=i,m=k.useId();k.useEffect(()=>{if(n)return c(m)},[n]);const d=k.useCallback(()=>n&&r&&r(m),[m,r,n]);return!s&&r?[!1,d]:[!0]}const ur=n=>n.key||"";function Qg(n){const i=[];return k.Children.forEach(n,s=>{k.isValidElement(s)&&i.push(s)}),i}const Ed=({children:n,custom:i,initial:s=!0,onExitComplete:r,presenceAffectsLayout:c=!0,mode:m="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[y,b]=Uy(d),S=k.useMemo(()=>Qg(n),[n]),z=d&&!y?[]:S.map(ur),w=k.useRef(!0),L=k.useRef(S),U=Kc(()=>new Map),H=k.useRef(new Set),[X,Q]=k.useState(S),[Z,Y]=k.useState(S);mv(()=>{w.current=!1,L.current=S;for(let B=0;B<Z.length;B++){const se=ur(Z[B]);z.includes(se)?(U.delete(se),H.current.delete(se)):U.get(se)!==!0&&U.set(se,!1)}},[Z,z.length,z.join("-")]);const ie=[];if(S!==X){let B=[...S];for(let se=0;se<Z.length;se++){const Ce=Z[se],_e=ur(Ce);z.includes(_e)||(B.splice(se,0,Ce),ie.push(Ce))}return m==="wait"&&ie.length&&(B=ie),Y(Qg(B)),Q(S),null}const{forceRender:W}=k.useContext(Zc);return x.jsx(x.Fragment,{children:Z.map(B=>{const se=ur(B),Ce=d&&!y?!1:S===Z||z.includes(se),_e=()=>{if(H.current.has(se))return;if(H.current.add(se),U.has(se))U.set(se,!0);else return;let qe=!0;U.forEach(pt=>{pt||(qe=!1)}),qe&&(W==null||W(),Y(L.current),d&&(b==null||b()),r&&r())};return x.jsx(jE,{isPresent:Ce,initial:!w.current||s?void 0:!1,custom:i,presenceAffectsLayout:c,mode:m,root:g,onExitComplete:Ce?void 0:_e,anchorX:h,anchorY:p,children:B},se)})})},Hy=k.createContext({strict:!1}),kg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Pg=!1;function _E(){if(Pg)return;const n={};for(const i in kg)n[i]={isEnabled:s=>kg[i].some(r=>!!s[r])};py(n),Pg=!0}function Gy(){return _E(),TT()}function BE(n){const i=Gy();for(const s in n)i[s]={...i[s],...n[s]};py(i)}const LE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Mr(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||LE.has(n)}let Qy=n=>!Mr(n);function UE(n){typeof n=="function"&&(Qy=i=>i.startsWith("on")?!Mr(i):n(i))}try{UE(require("@emotion/is-prop-valid").default)}catch{}function HE(n,i,s){const r={};for(const c in n)c==="values"&&typeof n.values=="object"||(Qy(c)||s===!0&&Mr(c)||!i&&!Mr(c)||n.draggable&&c.startsWith("onDrag"))&&(r[c]=n[c]);return r}const Rr=k.createContext({});function GE(n,i){if(wr(n)){const{initial:s,animate:r}=n;return{initial:s===!1||Bi(s)?s:void 0,animate:Bi(r)?r:void 0}}return n.inherit!==!1?i:{}}function QE(n){const{initial:i,animate:s}=GE(n,k.useContext(Rr));return k.useMemo(()=>({initial:i,animate:s}),[Yg(i),Yg(s)])}function Yg(n){return Array.isArray(n)?n.join(" "):n}const Ad=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ky(n,i,s){for(const r in i)!dt(i[r])&&!Ty(r,s)&&(n[r]=i[r])}function kE({transformTemplate:n},i){return k.useMemo(()=>{const s=Ad();return Sd(s,i,n),Object.assign({},s.vars,s.style)},[i])}function PE(n,i){const s=n.style||{},r={};return ky(r,s,n),Object.assign(r,kE(n,i)),r}function YE(n,i){const s={},r=PE(n,i);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=r,s}const Py=()=>({...Ad(),attrs:{}});function XE(n,i,s,r){const c=k.useMemo(()=>{const m=Py();return Ey(m,i,Cy(r),n.transformTemplate,n.style),{...m.attrs,style:{...m.style}}},[i]);if(n.style){const m={};ky(m,n.style,n),c.style={...m,...c.style}}return c}const JE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Cd(n){return typeof n!="string"||n.includes("-")?!1:!!(JE.indexOf(n)>-1||/[A-Z]/u.test(n))}function ZE(n,i,s,{latestValues:r},c,m=!1,d){const p=(d??Cd(n)?XE:YE)(i,r,c,n),g=HE(i,typeof n=="string",m),y=n!==k.Fragment?{...g,...p,ref:s}:{},{children:b}=i,S=k.useMemo(()=>dt(b)?b.get():b,[b]);return k.createElement(n,{...y,children:S})}function KE({scrapeMotionValuesFromProps:n,createRenderState:i},s,r,c){return{latestValues:FE(s,r,c,n),renderState:i()}}function FE(n,i,s,r){const c={},m=r(n,{});for(const S in m)c[S]=vr(m[S]);let{initial:d,animate:h}=n;const p=wr(n),g=my(n);i&&g&&!p&&n.inherit!==!1&&(d===void 0&&(d=i.initial),h===void 0&&(h=i.animate));let y=s?s.initial===!1:!1;y=y||d===!1;const b=y?h:d;if(b&&typeof b!="boolean"&&!Or(b)){const S=Array.isArray(b)?b:[b];for(let z=0;z<S.length;z++){const w=fd(n,S[z]);if(w){const{transitionEnd:L,transition:U,...H}=w;for(const X in H){let Q=H[X];if(Array.isArray(Q)){const Z=y?Q.length-1:0;Q=Q[Z]}Q!==null&&(c[X]=Q)}for(const X in L)c[X]=L[X]}}}return c}const Yy=n=>(i,s)=>{const r=k.useContext(Rr),c=k.useContext(Nr),m=()=>KE(n,i,r,c);return s?m():Kc(m)},WE=Yy({scrapeMotionValuesFromProps:xd,createRenderState:Ad}),$E=Yy({scrapeMotionValuesFromProps:My,createRenderState:Py}),IE=Symbol.for("motionComponentSymbol");function e2(n,i,s){const r=k.useRef(s);k.useInsertionEffect(()=>{r.current=s});const c=k.useRef(null);return k.useCallback(m=>{var h;m&&((h=n.onMount)==null||h.call(n,m)),i&&(m?i.mount(m):i.unmount());const d=r.current;if(typeof d=="function")if(m){const p=d(m);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(m);else d&&(d.current=m)},[i])}const Xy=k.createContext({});function So(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function t2(n,i,s,r,c,m){var Q,Z;const{visualElement:d}=k.useContext(Rr),h=k.useContext(Hy),p=k.useContext(Nr),g=k.useContext(Td),y=g.reducedMotion,b=g.skipAnimations,S=k.useRef(null),z=k.useRef(!1);r=r||h.renderer,!S.current&&r&&(S.current=r(n,{visualState:i,parent:d,props:s,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:y,skipAnimations:b,isSVG:m}),z.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const w=S.current,L=k.useContext(Xy);w&&!w.projection&&c&&(w.type==="html"||w.type==="svg")&&a2(S.current,s,c,L);const U=k.useRef(!1);k.useInsertionEffect(()=>{w&&U.current&&w.update(s,p)});const H=s[ey],X=k.useRef(!!H&&!((Q=window.MotionHandoffIsComplete)!=null&&Q.call(window,H))&&((Z=window.MotionHasOptimisedAnimation)==null?void 0:Z.call(window,H)));return mv(()=>{z.current=!0,w&&(U.current=!0,window.MotionIsMounted=!0,w.updateFeatures(),w.scheduleRenderMicrotask(),X.current&&w.animationState&&w.animationState.animateChanges())}),k.useEffect(()=>{w&&(!X.current&&w.animationState&&w.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{var Y;(Y=window.MotionHandoffMarkAsComplete)==null||Y.call(window,H)}),X.current=!1),w.enteringChildren=void 0)}),w}function a2(n,i,s,r){const{layoutId:c,layout:m,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutCrossfade:y}=i;n.projection=new s(n.latestValues,i["data-framer-portal-id"]?void 0:Jy(n.parent)),n.projection.setOptions({layoutId:c,layout:m,alwaysMeasureLayout:!!d||h&&So(h),visualElement:n,animationType:typeof m=="string"?m:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:p,layoutRoot:g})}function Jy(n){if(n)return n.options.allowProjection!==!1?n.projection:Jy(n.parent)}function mc(n,{forwardMotionProps:i=!1,type:s}={},r,c){r&&BE(r);const m=s?s==="svg":Cd(n),d=m?$E:WE;function h(g,y){let b;const S={...k.useContext(Td),...g,layoutId:n2(g)},{isStatic:z}=S,w=QE(g),L=d(g,z);if(!z&&fv){o2();const U=i2(S);b=U.MeasureLayout,w.visualElement=t2(n,L,S,c,U.ProjectionNode,m)}return x.jsxs(Rr.Provider,{value:w,children:[b&&w.visualElement?x.jsx(b,{visualElement:w.visualElement,...S}):null,ZE(n,g,e2(L,w.visualElement,y),L,z,i,m)]})}h.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const p=k.forwardRef(h);return p[IE]=n,p}function n2({layoutId:n}){const i=k.useContext(Zc).id;return i&&n!==void 0?i+"-"+n:n}function o2(n,i){k.useContext(Hy).strict}function i2(n){const i=Gy(),{drag:s,layout:r}=i;if(!s&&!r)return{};const c={...s,...r};return{MeasureLayout:s!=null&&s.isEnabled(n)||r!=null&&r.isEnabled(n)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function s2(n,i){if(typeof Proxy>"u")return mc;const s=new Map,r=(m,d)=>mc(m,d,n,i),c=(m,d)=>r(m,d);return new Proxy(c,{get:(m,d)=>d==="create"?r:(s.has(d)||s.set(d,mc(d,void 0,n,i)),s.get(d))})}const r2=(n,i)=>i.isSVG??Cd(n)?new UT(i):new qT(i,{allowProjection:n!==k.Fragment});class l2 extends rn{constructor(i){super(i),i.animationState||(i.animationState=PT(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Or(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:s}=this.node.prevProps||{};i!==s&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let u2=0;class c2 extends rn{constructor(){super(...arguments),this.id=u2++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:s}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===r)return;const c=this.node.animationState.setActive("exit",!i);s&&!i&&c.then(()=>{s(this.id)})}mount(){const{register:i,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const d2={animation:{Feature:l2},exit:{Feature:c2}};function Qi(n){return{point:{x:n.pageX,y:n.pageY}}}const f2=n=>i=>gd(i)&&n(i,Qi(i));function qi(n,i,s,r){return Li(n,i,f2(s),r)}const Zy=({current:n})=>n?n.ownerDocument.defaultView:null,Xg=(n,i)=>Math.abs(n-i);function m2(n,i){const s=Xg(n.x,i.x),r=Xg(n.y,i.y);return Math.sqrt(s**2+r**2)}const Jg=new Set(["auto","scroll"]);class Ky{constructor(i,s,{transformPagePoint:r,contextWindow:c=window,dragSnapToOrigin:m=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=z=>{this.handleScroll(z.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=pc(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,L=m2(z.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!L)return;const{point:U}=z,{timestamp:H}=lt;this.history.push({...U,timestamp:H});const{onStart:X,onMove:Q}=this.handlers;w||(X&&X(this.lastMoveEvent,z),this.startEvent=this.lastMoveEvent),Q&&Q(this.lastMoveEvent,z)},this.handlePointerMove=(z,w)=>{this.lastMoveEvent=z,this.lastMoveEventInfo=hc(w,this.transformPagePoint),Re.update(this.updatePoint,!0)},this.handlePointerUp=(z,w)=>{this.end();const{onEnd:L,onSessionEnd:U,resumeAnimation:H}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&H&&H(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const X=pc(z.type==="pointercancel"?this.lastMoveEventInfo:hc(w,this.transformPagePoint),this.history);this.startEvent&&L&&L(z,X),U&&U(z,X)},!gd(i))return;this.dragSnapToOrigin=m,this.handlers=s,this.transformPagePoint=r,this.distanceThreshold=d,this.contextWindow=c||window;const p=Qi(i),g=hc(p,this.transformPagePoint),{point:y}=g,{timestamp:b}=lt;this.history=[{...y,timestamp:b}];const{onSessionStart:S}=s;S&&S(i,pc(g,this.history)),this.removeListeners=Ui(qi(this.contextWindow,"pointermove",this.handlePointerMove),qi(this.contextWindow,"pointerup",this.handlePointerUp),qi(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(i){let s=i.parentElement;for(;s;){const r=getComputedStyle(s);(Jg.has(r.overflowX)||Jg.has(r.overflowY))&&this.scrollPositions.set(s,{x:s.scrollLeft,y:s.scrollTop}),s=s.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const s=this.scrollPositions.get(i);if(!s)return;const r=i===window,c=r?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},m={x:c.x-s.x,y:c.y-s.y};m.x===0&&m.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(i,c),Re.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),sn(this.updatePoint)}}function hc(n,i){return i?{point:i(n.point)}:n}function Zg(n,i){return{x:n.x-i.x,y:n.y-i.y}}function pc({point:n},i){return{point:n,delta:Zg(n,Fy(i)),offset:Zg(n,h2(i)),velocity:p2(i,.1)}}function h2(n){return n[0]}function Fy(n){return n[n.length-1]}function p2(n,i){if(n.length<2)return{x:0,y:0};let s=n.length-1,r=null;const c=Fy(n);for(;s>=0&&(r=n[s],!(c.timestamp-r.timestamp>Wt(i)));)s--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&c.timestamp-r.timestamp>Wt(i)*2&&(r=n[1]);const m=Pt(c.timestamp-r.timestamp);if(m===0)return{x:0,y:0};const d={x:(c.x-r.x)/m,y:(c.y-r.y)/m};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function g2(n,{min:i,max:s},r){return i!==void 0&&n<i?n=r?Le(i,n,r.min):Math.max(n,i):s!==void 0&&n>s&&(n=r?Le(s,n,r.max):Math.min(n,s)),n}function Kg(n,i,s){return{min:i!==void 0?n.min+i:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function v2(n,{top:i,left:s,bottom:r,right:c}){return{x:Kg(n.x,s,c),y:Kg(n.y,i,r)}}function Fg(n,i){let s=i.min-n.min,r=i.max-n.max;return i.max-i.min<n.max-n.min&&([s,r]=[r,s]),{min:s,max:r}}function y2(n,i){return{x:Fg(n.x,i.x),y:Fg(n.y,i.y)}}function b2(n,i){let s=.5;const r=ht(n),c=ht(i);return c>r?s=ji(i.min,i.max-r,n.min):r>c&&(s=ji(n.min,n.max-c,i.min)),ia(0,1,s)}function S2(n,i){const s={};return i.min!==void 0&&(s.min=i.min-n.min),i.max!==void 0&&(s.max=i.max-n.min),s}const kc=.35;function x2(n=kc){return n===!1?n=0:n===!0&&(n=kc),{x:Wg(n,"left","right"),y:Wg(n,"top","bottom")}}function Wg(n,i,s){return{min:$g(n,i),max:$g(n,s)}}function $g(n,i){return typeof n=="number"?n:n[i]||0}const T2=new WeakMap;class E2{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:s=!1,distanceThreshold:r}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const m=b=>{s&&this.snapToCursor(Qi(b).point),this.stopAnimation()},d=(b,S)=>{const{drag:z,dragPropagation:w,onDragStart:L}=this.getProps();if(z&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=$x(z),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),na(H=>{let X=this.getAxisMotionValue(H).get()||0;if(oa.test(X)){const{projection:Q}=this.visualElement;if(Q&&Q.layout){const Z=Q.layout.layoutBox[H];Z&&(X=ht(Z)*(parseFloat(X)/100))}}this.originPoint[H]=X}),L&&Re.update(()=>L(b,S),!1,!0),jc(this.visualElement,"transform");const{animationState:U}=this.visualElement;U&&U.setActive("whileDrag",!0)},h=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:z,dragDirectionLock:w,onDirectionLock:L,onDrag:U}=this.getProps();if(!z&&!this.openDragLock)return;const{offset:H}=S;if(w&&this.currentDirection===null){this.currentDirection=C2(H),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",S.point,H),this.updateAxis("y",S.point,H),this.visualElement.render(),U&&Re.update(()=>U(b,S),!1,!0)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new Ky(i,{onSessionStart:m,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:Zy(this.visualElement),element:this.visualElement.current})}stop(i,s){const r=i||this.latestPointerEvent,c=s||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!c||!r)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Re.postRender(()=>h(r,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:s}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,s,r){const{drag:c}=this.getProps();if(!r||!cr(i,c,this.currentDirection))return;const m=this.getAxisMotionValue(i);let d=this.originPoint[i]+r[i];this.constraints&&this.constraints[i]&&(d=g2(d,this.constraints[i],this.elastic[i])),m.set(d)}resolveConstraints(){var m;const{dragConstraints:i,dragElastic:s}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(m=this.visualElement.projection)==null?void 0:m.layout,c=this.constraints;i&&So(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&r?this.constraints=v2(r.layoutBox,i):this.constraints=!1,this.elastic=x2(s),c!==this.constraints&&!So(i)&&r&&this.constraints&&!this.hasMutatedConstraints&&na(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=S2(r.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:s}=this.getProps();if(!i||!So(i))return!1;const r=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const m=DT(r,c.root,this.visualElement.getTransformPagePoint());let d=y2(c.layout.layoutBox,m);if(s){const h=s(AT(d));this.hasMutatedConstraints=!!h,h&&(d=vy(h))}return d}startAnimation(i){const{drag:s,dragMomentum:r,dragElastic:c,dragTransition:m,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=na(y=>{if(!cr(y,s,this.currentDirection))return;let b=p&&p[y]||{};d&&(b={min:0,max:0});const S=c?200:1e6,z=c?40:1e7,w={type:"inertia",velocity:r?i[y]:0,bounceStiffness:S,bounceDamping:z,timeConstant:750,restDelta:1,restSpeed:10,...m,...b};return this.startAxisValueAnimation(y,w)});return Promise.all(g).then(h)}startAxisValueAnimation(i,s){const r=this.getAxisMotionValue(i);return jc(this.visualElement,i),r.start(dd(i,r,0,s,this.visualElement,!1))}stopAnimation(){na(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const s=`_drag${i.toUpperCase()}`,r=this.visualElement.getProps(),c=r[s];return c||this.visualElement.getValue(i,(r.initial?r.initial[i]:void 0)||0)}snapToCursor(i){na(s=>{const{drag:r}=this.getProps();if(!cr(s,r,this.currentDirection))return;const{projection:c}=this.visualElement,m=this.getAxisMotionValue(s);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[s],p=m.get()||0;m.set(i[s]-Le(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:s}=this.getProps(),{projection:r}=this.visualElement;if(!So(s)||!r||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};na(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=b2({min:p,max:p},this.constraints[d])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),na(d=>{if(!cr(d,i,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(Le(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;T2.set(this.visualElement,this);const i=this.visualElement.current,s=qi(i,"pointerdown",g=>{const{drag:y,dragListener:b=!0}=this.getProps(),S=g.target,z=S!==i&&oT(S);y&&b&&!z&&this.start(g)});let r;const c=()=>{const{dragConstraints:g}=this.getProps();So(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),r||(r=A2(i,g.current,()=>this.scalePositionWithinConstraints())))},{projection:m}=this.visualElement,d=m.addEventListener("measure",c);m&&!m.layout&&(m.root&&m.root.updateScroll(),m.updateLayout()),Re.read(c);const h=Li(window,"resize",()=>this.scalePositionWithinConstraints()),p=m.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(na(b=>{const S=this.getAxisMotionValue(b);S&&(this.originPoint[b]+=g[b].translate,S.set(S.get()+g[b].translate))}),this.visualElement.render())}));return()=>{h(),s(),d(),p&&p(),r&&r()}}getProps(){const i=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:r=!1,dragPropagation:c=!1,dragConstraints:m=!1,dragElastic:d=kc,dragMomentum:h=!0}=i;return{...i,drag:s,dragDirectionLock:r,dragPropagation:c,dragConstraints:m,dragElastic:d,dragMomentum:h}}}function Ig(n){let i=!0;return()=>{if(i){i=!1;return}n()}}function A2(n,i,s){const r=sg(n,Ig(s)),c=sg(i,Ig(s));return()=>{r(),c()}}function cr(n,i,s){return(i===!0||i===n)&&(s===null||s===n)}function C2(n,i=10){let s=null;return Math.abs(n.y)>i?s="y":Math.abs(n.x)>i&&(s="x"),s}class M2 extends rn{constructor(i){super(i),this.removeGroupControls=Yt,this.removeListeners=Yt,this.controls=new E2(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yt}update(){const{dragControls:i}=this.node.getProps(),{dragControls:s}=this.node.prevProps||{};i!==s&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const gc=n=>(i,s)=>{n&&Re.update(()=>n(i,s),!1,!0)};class D2 extends rn{constructor(){super(...arguments),this.removePointerDownListener=Yt}onPointerDown(i){this.session=new Ky(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:s,onPan:r,onPanEnd:c}=this.node.getProps();return{onSessionStart:gc(i),onStart:gc(s),onMove:gc(r),onEnd:(m,d)=>{delete this.session,c&&Re.postRender(()=>c(m,d))}}}mount(){this.removePointerDownListener=qi(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vc=!1;class z2 extends k.Component{componentDidMount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:r,layoutId:c}=this.props,{projection:m}=i;m&&(s.group&&s.group.add(m),r&&r.register&&c&&r.register(m),vc&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),yr.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:s,visualElement:r,drag:c,isPresent:m}=this.props,{projection:d}=r;return d&&(d.isPresent=m,i.layoutDependency!==s&&d.setOptions({...d.options,layoutDependency:s}),vc=!0,c||i.layoutDependency!==s||s===void 0||i.isPresent!==m?d.willUpdate():this.safeToRemove(),i.isPresent!==m&&(m?d.promote():d.relegate()||Re.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),pd.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:r}=this.props,{projection:c}=i;vc=!0,c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),r&&r.deregister&&r.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Wy(n){const[i,s]=Uy(),r=k.useContext(Zc);return x.jsx(z2,{...n,layoutGroup:r,switchLayoutGroup:k.useContext(Xy),isPresent:i,safeToRemove:s})}const N2={pan:{Feature:D2},drag:{Feature:M2,ProjectionNode:Ly,MeasureLayout:Wy}};function ev(n,i,s){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,m=r[c];m&&Re.postRender(()=>m(i,Qi(i)))}class O2 extends rn{mount(){const{current:i}=this.node;i&&(this.unmount=eT(i,(s,r)=>(ev(this.node,r,"Start"),c=>ev(this.node,c,"End"))))}unmount(){}}class w2 extends rn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ui(Li(this.node.current,"focus",()=>this.onFocus()),Li(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function tv(n,i,s){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),m=r[c];m&&Re.postRender(()=>m(i,Qi(i)))}class R2 extends rn{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:s,propagate:r}=this.node.props;this.unmount=sT(i,(c,m)=>(tv(this.node,m,"Start"),(d,{success:h})=>tv(this.node,d,h?"End":"Cancel")),{useGlobalTarget:s,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Pc=new WeakMap,yc=new WeakMap,q2=n=>{const i=Pc.get(n.target);i&&i(n)},j2=n=>{n.forEach(q2)};function V2({root:n,...i}){const s=n||document;yc.has(s)||yc.set(s,{});const r=yc.get(s),c=JSON.stringify(i);return r[c]||(r[c]=new IntersectionObserver(j2,{root:n,...i})),r[c]}function _2(n,i,s){const r=V2(i);return Pc.set(n,s),r.observe(n),()=>{Pc.delete(n),r.unobserve(n)}}const B2={some:0,all:1};class L2 extends rn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:s,margin:r,amount:c="some",once:m}=i,d={root:s?s.current:void 0,rootMargin:r,threshold:typeof c=="number"?c:B2[c]},h=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,m&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=g?y:b;S&&S(p)};return _2(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:s}=this.node;["amount","margin","root"].some(U2(i,s))&&this.startObserver()}unmount(){}}function U2({viewport:n={}},{viewport:i={}}={}){return s=>n[s]!==i[s]}const H2={inView:{Feature:L2},tap:{Feature:R2},focus:{Feature:w2},hover:{Feature:O2}},G2={layout:{ProjectionNode:Ly,MeasureLayout:Wy}},Q2={...d2,...H2,...N2,...G2},ki=s2(Q2,r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P2=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,r)=>r?r.toUpperCase():s.toLowerCase()),av=n=>{const i=P2(n);return i.charAt(0).toUpperCase()+i.slice(1)},$y=(...n)=>n.filter((i,s,r)=>!!i&&i.trim()!==""&&r.indexOf(i)===s).join(" ").trim(),Y2=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=k.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:c="",children:m,iconNode:d,...h},p)=>k.createElement("svg",{ref:p,...X2,width:i,height:i,stroke:n,strokeWidth:r?Number(s)*24/Number(i):s,className:$y("lucide",c),...!m&&!Y2(h)&&{"aria-hidden":"true"},...h},[...d.map(([g,y])=>k.createElement(g,y)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(n,i)=>{const s=k.forwardRef(({className:r,...c},m)=>k.createElement(J2,{ref:m,iconNode:i,className:$y(`lucide-${k2(av(n))}`,`lucide-${n}`,r),...c}));return s.displayName=av(n),s};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],K2=at("book",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],W2=at("cake",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Iy=at("calendar",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],eA=at("chevron-right",I2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Mi=at("download",tA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],nA=at("heart",aA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],iA=at("instagram",oA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],e0=at("library",sA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],lA=at("map-pin",rA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],cA=at("menu",uA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],fA=at("music-2",dA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],hA=at("music",mA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Yc=at("phone",pA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],vA=at("plus",gA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Md=at("search",yA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],SA=at("star",bA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],t0=at("x",xA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],EA=at("youtube",TA);function a0(n){var i,s,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(i=0;i<c;i++)n[i]&&(s=a0(n[i]))&&(r&&(r+=" "),r+=s)}else for(s in n)n[s]&&(r&&(r+=" "),r+=s);return r}function AA(){for(var n,i,s=0,r="",c=arguments.length;s<c;s++)(n=arguments[s])&&(i=a0(n))&&(r&&(r+=" "),r+=i);return r}const CA=(n,i)=>{const s=new Array(n.length+i.length);for(let r=0;r<n.length;r++)s[r]=n[r];for(let r=0;r<i.length;r++)s[n.length+r]=i[r];return s},MA=(n,i)=>({classGroupId:n,validator:i}),n0=(n=new Map,i=null,s)=>({nextPart:n,validators:i,classGroupId:s}),Dr="-",nv=[],DA="arbitrary..",zA=n=>{const i=OA(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return NA(d);const h=d.split(Dr),p=h[0]===""&&h.length>1?1:0;return o0(h,p,i)},getConflictingClassGroupIds:(d,h)=>{if(h){const p=r[d],g=s[d];return p?g?CA(g,p):p:g||nv}return s[d]||nv}}},o0=(n,i,s)=>{if(n.length-i===0)return s.classGroupId;const c=n[i],m=s.nextPart.get(c);if(m){const g=o0(n,i+1,m);if(g)return g}const d=s.validators;if(d===null)return;const h=i===0?n.join(Dr):n.slice(i).join(Dr),p=d.length;for(let g=0;g<p;g++){const y=d[g];if(y.validator(h))return y.classGroupId}},NA=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=n.slice(1,-1),s=i.indexOf(":"),r=i.slice(0,s);return r?DA+r:void 0})(),OA=n=>{const{theme:i,classGroups:s}=n;return wA(s,i)},wA=(n,i)=>{const s=n0();for(const r in n){const c=n[r];Dd(c,s,r,i)}return s},Dd=(n,i,s,r)=>{const c=n.length;for(let m=0;m<c;m++){const d=n[m];RA(d,i,s,r)}},RA=(n,i,s,r)=>{if(typeof n=="string"){qA(n,i,s);return}if(typeof n=="function"){jA(n,i,s,r);return}VA(n,i,s,r)},qA=(n,i,s)=>{const r=n===""?i:i0(i,n);r.classGroupId=s},jA=(n,i,s,r)=>{if(_A(n)){Dd(n(r),i,s,r);return}i.validators===null&&(i.validators=[]),i.validators.push(MA(s,n))},VA=(n,i,s,r)=>{const c=Object.entries(n),m=c.length;for(let d=0;d<m;d++){const[h,p]=c[d];Dd(p,i0(i,h),s,r)}},i0=(n,i)=>{let s=n;const r=i.split(Dr),c=r.length;for(let m=0;m<c;m++){const d=r[m];let h=s.nextPart.get(d);h||(h=n0(),s.nextPart.set(d,h)),s=h}return s},_A=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,BA=n=>{if(n<1)return{get:()=>{},set:()=>{}};let i=0,s=Object.create(null),r=Object.create(null);const c=(m,d)=>{s[m]=d,i++,i>n&&(i=0,r=s,s=Object.create(null))};return{get(m){let d=s[m];if(d!==void 0)return d;if((d=r[m])!==void 0)return c(m,d),d},set(m,d){m in s?s[m]=d:c(m,d)}}},Xc="!",ov=":",LA=[],iv=(n,i,s,r,c)=>({modifiers:n,hasImportantModifier:i,baseClassName:s,maybePostfixModifierPosition:r,isExternal:c}),UA=n=>{const{prefix:i,experimentalParseClassName:s}=n;let r=c=>{const m=[];let d=0,h=0,p=0,g;const y=c.length;for(let L=0;L<y;L++){const U=c[L];if(d===0&&h===0){if(U===ov){m.push(c.slice(p,L)),p=L+1;continue}if(U==="/"){g=L;continue}}U==="["?d++:U==="]"?d--:U==="("?h++:U===")"&&h--}const b=m.length===0?c:c.slice(p);let S=b,z=!1;b.endsWith(Xc)?(S=b.slice(0,-1),z=!0):b.startsWith(Xc)&&(S=b.slice(1),z=!0);const w=g&&g>p?g-p:void 0;return iv(m,z,S,w)};if(i){const c=i+ov,m=r;r=d=>d.startsWith(c)?m(d.slice(c.length)):iv(LA,!1,d,void 0,!0)}if(s){const c=r;r=m=>s({className:m,parseClassName:c})}return r},HA=n=>{const i=new Map;return n.orderSensitiveModifiers.forEach((s,r)=>{i.set(s,1e6+r)}),s=>{const r=[];let c=[];for(let m=0;m<s.length;m++){const d=s[m],h=d[0]==="[",p=i.has(d);h||p?(c.length>0&&(c.sort(),r.push(...c),c=[]),r.push(d)):c.push(d)}return c.length>0&&(c.sort(),r.push(...c)),r}},GA=n=>({cache:BA(n.cacheSize),parseClassName:UA(n),sortModifiers:HA(n),...zA(n)}),QA=/\s+/,kA=(n,i)=>{const{parseClassName:s,getClassGroupId:r,getConflictingClassGroupIds:c,sortModifiers:m}=i,d=[],h=n.trim().split(QA);let p="";for(let g=h.length-1;g>=0;g-=1){const y=h[g],{isExternal:b,modifiers:S,hasImportantModifier:z,baseClassName:w,maybePostfixModifierPosition:L}=s(y);if(b){p=y+(p.length>0?" "+p:p);continue}let U=!!L,H=r(U?w.substring(0,L):w);if(!H){if(!U){p=y+(p.length>0?" "+p:p);continue}if(H=r(w),!H){p=y+(p.length>0?" "+p:p);continue}U=!1}const X=S.length===0?"":S.length===1?S[0]:m(S).join(":"),Q=z?X+Xc:X,Z=Q+H;if(d.indexOf(Z)>-1)continue;d.push(Z);const Y=c(H,U);for(let ie=0;ie<Y.length;++ie){const W=Y[ie];d.push(Q+W)}p=y+(p.length>0?" "+p:p)}return p},PA=(...n)=>{let i=0,s,r,c="";for(;i<n.length;)(s=n[i++])&&(r=s0(s))&&(c&&(c+=" "),c+=r);return c},s0=n=>{if(typeof n=="string")return n;let i,s="";for(let r=0;r<n.length;r++)n[r]&&(i=s0(n[r]))&&(s&&(s+=" "),s+=i);return s},YA=(n,...i)=>{let s,r,c,m;const d=p=>{const g=i.reduce((y,b)=>b(y),n());return s=GA(g),r=s.cache.get,c=s.cache.set,m=h,h(p)},h=p=>{const g=r(p);if(g)return g;const y=kA(p,s);return c(p,y),y};return m=d,(...p)=>m(PA(...p))},XA=[],We=n=>{const i=s=>s[n]||XA;return i.isThemeGetter=!0,i},r0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,l0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,JA=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,ZA=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,KA=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,FA=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,WA=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$A=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,en=n=>JA.test(n),pe=n=>!!n&&!Number.isNaN(Number(n)),tn=n=>!!n&&Number.isInteger(Number(n)),bc=n=>n.endsWith("%")&&pe(n.slice(0,-1)),Ca=n=>ZA.test(n),u0=()=>!0,IA=n=>KA.test(n)&&!FA.test(n),zd=()=>!1,eC=n=>WA.test(n),tC=n=>$A.test(n),aC=n=>!ee(n)&&!ae(n),nC=n=>ln(n,f0,zd),ee=n=>r0.test(n),zn=n=>ln(n,m0,IA),sv=n=>ln(n,dC,pe),oC=n=>ln(n,p0,u0),iC=n=>ln(n,h0,zd),rv=n=>ln(n,c0,zd),sC=n=>ln(n,d0,tC),dr=n=>ln(n,g0,eC),ae=n=>l0.test(n),Di=n=>qn(n,m0),rC=n=>qn(n,h0),lv=n=>qn(n,c0),lC=n=>qn(n,f0),uC=n=>qn(n,d0),fr=n=>qn(n,g0,!0),cC=n=>qn(n,p0,!0),ln=(n,i,s)=>{const r=r0.exec(n);return r?r[1]?i(r[1]):s(r[2]):!1},qn=(n,i,s=!1)=>{const r=l0.exec(n);return r?r[1]?i(r[1]):s:!1},c0=n=>n==="position"||n==="percentage",d0=n=>n==="image"||n==="url",f0=n=>n==="length"||n==="size"||n==="bg-size",m0=n=>n==="length",dC=n=>n==="number",h0=n=>n==="family-name",p0=n=>n==="number"||n==="weight",g0=n=>n==="shadow",fC=()=>{const n=We("color"),i=We("font"),s=We("text"),r=We("font-weight"),c=We("tracking"),m=We("leading"),d=We("breakpoint"),h=We("container"),p=We("spacing"),g=We("radius"),y=We("shadow"),b=We("inset-shadow"),S=We("text-shadow"),z=We("drop-shadow"),w=We("blur"),L=We("perspective"),U=We("aspect"),H=We("ease"),X=We("animate"),Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Y=()=>[...Z(),ae,ee],ie=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto","contain","none"],B=()=>[ae,ee,p],se=()=>[en,"full","auto",...B()],Ce=()=>[tn,"none","subgrid",ae,ee],_e=()=>["auto",{span:["full",tn,ae,ee]},tn,ae,ee],qe=()=>[tn,"auto",ae,ee],pt=()=>["auto","min","max","fr",ae,ee],ut=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Qe=()=>["start","end","center","stretch","center-safe","end-safe"],R=()=>["auto",...B()],G=()=>[en,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...B()],$=()=>[en,"screen","full","dvw","lvw","svw","min","max","fit",...B()],me=()=>[en,"screen","full","lh","dvh","lvh","svh","min","max","fit",...B()],P=()=>[n,ae,ee],A=()=>[...Z(),lv,rv,{position:[ae,ee]}],_=()=>["no-repeat",{repeat:["","x","y","space","round"]}],J=()=>["auto","cover","contain",lC,nC,{size:[ae,ee]}],F=()=>[bc,Di,zn],oe=()=>["","none","full",g,ae,ee],le=()=>["",pe,Di,zn],Se=()=>["solid","dashed","dotted","double"],Ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],he=()=>[pe,bc,lv,rv],Da=()=>["","none",w,ae,ee],sa=()=>["none",pe,ae,ee],za=()=>["none",pe,ae,ee],jn=()=>[pe,ae,ee],qt=()=>[en,"full",...B()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ca],breakpoint:[Ca],color:[u0],container:[Ca],"drop-shadow":[Ca],ease:["in","out","in-out"],font:[aC],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ca],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ca],shadow:[Ca],spacing:["px",pe],text:[Ca],"text-shadow":[Ca],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",en,ee,ae,U]}],container:["container"],columns:[{columns:[pe,ee,ae,h]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Y()}],overflow:[{overflow:ie()}],"overflow-x":[{"overflow-x":ie()}],"overflow-y":[{"overflow-y":ie()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:se()}],"inset-x":[{"inset-x":se()}],"inset-y":[{"inset-y":se()}],start:[{"inset-s":se(),start:se()}],end:[{"inset-e":se(),end:se()}],"inset-bs":[{"inset-bs":se()}],"inset-be":[{"inset-be":se()}],top:[{top:se()}],right:[{right:se()}],bottom:[{bottom:se()}],left:[{left:se()}],visibility:["visible","invisible","collapse"],z:[{z:[tn,"auto",ae,ee]}],basis:[{basis:[en,"full","auto",h,...B()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[pe,en,"auto","initial","none",ee]}],grow:[{grow:["",pe,ae,ee]}],shrink:[{shrink:["",pe,ae,ee]}],order:[{order:[tn,"first","last","none",ae,ee]}],"grid-cols":[{"grid-cols":Ce()}],"col-start-end":[{col:_e()}],"col-start":[{"col-start":qe()}],"col-end":[{"col-end":qe()}],"grid-rows":[{"grid-rows":Ce()}],"row-start-end":[{row:_e()}],"row-start":[{"row-start":qe()}],"row-end":[{"row-end":qe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":pt()}],"auto-rows":[{"auto-rows":pt()}],gap:[{gap:B()}],"gap-x":[{"gap-x":B()}],"gap-y":[{"gap-y":B()}],"justify-content":[{justify:[...ut(),"normal"]}],"justify-items":[{"justify-items":[...Qe(),"normal"]}],"justify-self":[{"justify-self":["auto",...Qe()]}],"align-content":[{content:["normal",...ut()]}],"align-items":[{items:[...Qe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Qe(),{baseline:["","last"]}]}],"place-content":[{"place-content":ut()}],"place-items":[{"place-items":[...Qe(),"baseline"]}],"place-self":[{"place-self":["auto",...Qe()]}],p:[{p:B()}],px:[{px:B()}],py:[{py:B()}],ps:[{ps:B()}],pe:[{pe:B()}],pbs:[{pbs:B()}],pbe:[{pbe:B()}],pt:[{pt:B()}],pr:[{pr:B()}],pb:[{pb:B()}],pl:[{pl:B()}],m:[{m:R()}],mx:[{mx:R()}],my:[{my:R()}],ms:[{ms:R()}],me:[{me:R()}],mbs:[{mbs:R()}],mbe:[{mbe:R()}],mt:[{mt:R()}],mr:[{mr:R()}],mb:[{mb:R()}],ml:[{ml:R()}],"space-x":[{"space-x":B()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":B()}],"space-y-reverse":["space-y-reverse"],size:[{size:G()}],"inline-size":[{inline:["auto",...$()]}],"min-inline-size":[{"min-inline":["auto",...$()]}],"max-inline-size":[{"max-inline":["none",...$()]}],"block-size":[{block:["auto",...me()]}],"min-block-size":[{"min-block":["auto",...me()]}],"max-block-size":[{"max-block":["none",...me()]}],w:[{w:[h,"screen",...G()]}],"min-w":[{"min-w":[h,"screen","none",...G()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[d]},...G()]}],h:[{h:["screen","lh",...G()]}],"min-h":[{"min-h":["screen","lh","none",...G()]}],"max-h":[{"max-h":["screen","lh",...G()]}],"font-size":[{text:["base",s,Di,zn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,cC,oC]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",bc,ee]}],"font-family":[{font:[rC,iC,i]}],"font-features":[{"font-features":[ee]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,ae,ee]}],"line-clamp":[{"line-clamp":[pe,"none",ae,sv]}],leading:[{leading:[m,...B()]}],"list-image":[{"list-image":["none",ae,ee]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ae,ee]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:P()}],"text-color":[{text:P()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Se(),"wavy"]}],"text-decoration-thickness":[{decoration:[pe,"from-font","auto",ae,zn]}],"text-decoration-color":[{decoration:P()}],"underline-offset":[{"underline-offset":[pe,"auto",ae,ee]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ae,ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ae,ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:A()}],"bg-repeat":[{bg:_()}],"bg-size":[{bg:J()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},tn,ae,ee],radial:["",ae,ee],conic:[tn,ae,ee]},uC,sC]}],"bg-color":[{bg:P()}],"gradient-from-pos":[{from:F()}],"gradient-via-pos":[{via:F()}],"gradient-to-pos":[{to:F()}],"gradient-from":[{from:P()}],"gradient-via":[{via:P()}],"gradient-to":[{to:P()}],rounded:[{rounded:oe()}],"rounded-s":[{"rounded-s":oe()}],"rounded-e":[{"rounded-e":oe()}],"rounded-t":[{"rounded-t":oe()}],"rounded-r":[{"rounded-r":oe()}],"rounded-b":[{"rounded-b":oe()}],"rounded-l":[{"rounded-l":oe()}],"rounded-ss":[{"rounded-ss":oe()}],"rounded-se":[{"rounded-se":oe()}],"rounded-ee":[{"rounded-ee":oe()}],"rounded-es":[{"rounded-es":oe()}],"rounded-tl":[{"rounded-tl":oe()}],"rounded-tr":[{"rounded-tr":oe()}],"rounded-br":[{"rounded-br":oe()}],"rounded-bl":[{"rounded-bl":oe()}],"border-w":[{border:le()}],"border-w-x":[{"border-x":le()}],"border-w-y":[{"border-y":le()}],"border-w-s":[{"border-s":le()}],"border-w-e":[{"border-e":le()}],"border-w-bs":[{"border-bs":le()}],"border-w-be":[{"border-be":le()}],"border-w-t":[{"border-t":le()}],"border-w-r":[{"border-r":le()}],"border-w-b":[{"border-b":le()}],"border-w-l":[{"border-l":le()}],"divide-x":[{"divide-x":le()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":le()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Se(),"hidden","none"]}],"divide-style":[{divide:[...Se(),"hidden","none"]}],"border-color":[{border:P()}],"border-color-x":[{"border-x":P()}],"border-color-y":[{"border-y":P()}],"border-color-s":[{"border-s":P()}],"border-color-e":[{"border-e":P()}],"border-color-bs":[{"border-bs":P()}],"border-color-be":[{"border-be":P()}],"border-color-t":[{"border-t":P()}],"border-color-r":[{"border-r":P()}],"border-color-b":[{"border-b":P()}],"border-color-l":[{"border-l":P()}],"divide-color":[{divide:P()}],"outline-style":[{outline:[...Se(),"none","hidden"]}],"outline-offset":[{"outline-offset":[pe,ae,ee]}],"outline-w":[{outline:["",pe,Di,zn]}],"outline-color":[{outline:P()}],shadow:[{shadow:["","none",y,fr,dr]}],"shadow-color":[{shadow:P()}],"inset-shadow":[{"inset-shadow":["none",b,fr,dr]}],"inset-shadow-color":[{"inset-shadow":P()}],"ring-w":[{ring:le()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:P()}],"ring-offset-w":[{"ring-offset":[pe,zn]}],"ring-offset-color":[{"ring-offset":P()}],"inset-ring-w":[{"inset-ring":le()}],"inset-ring-color":[{"inset-ring":P()}],"text-shadow":[{"text-shadow":["none",S,fr,dr]}],"text-shadow-color":[{"text-shadow":P()}],opacity:[{opacity:[pe,ae,ee]}],"mix-blend":[{"mix-blend":[...Ie(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ie()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[pe]}],"mask-image-linear-from-pos":[{"mask-linear-from":he()}],"mask-image-linear-to-pos":[{"mask-linear-to":he()}],"mask-image-linear-from-color":[{"mask-linear-from":P()}],"mask-image-linear-to-color":[{"mask-linear-to":P()}],"mask-image-t-from-pos":[{"mask-t-from":he()}],"mask-image-t-to-pos":[{"mask-t-to":he()}],"mask-image-t-from-color":[{"mask-t-from":P()}],"mask-image-t-to-color":[{"mask-t-to":P()}],"mask-image-r-from-pos":[{"mask-r-from":he()}],"mask-image-r-to-pos":[{"mask-r-to":he()}],"mask-image-r-from-color":[{"mask-r-from":P()}],"mask-image-r-to-color":[{"mask-r-to":P()}],"mask-image-b-from-pos":[{"mask-b-from":he()}],"mask-image-b-to-pos":[{"mask-b-to":he()}],"mask-image-b-from-color":[{"mask-b-from":P()}],"mask-image-b-to-color":[{"mask-b-to":P()}],"mask-image-l-from-pos":[{"mask-l-from":he()}],"mask-image-l-to-pos":[{"mask-l-to":he()}],"mask-image-l-from-color":[{"mask-l-from":P()}],"mask-image-l-to-color":[{"mask-l-to":P()}],"mask-image-x-from-pos":[{"mask-x-from":he()}],"mask-image-x-to-pos":[{"mask-x-to":he()}],"mask-image-x-from-color":[{"mask-x-from":P()}],"mask-image-x-to-color":[{"mask-x-to":P()}],"mask-image-y-from-pos":[{"mask-y-from":he()}],"mask-image-y-to-pos":[{"mask-y-to":he()}],"mask-image-y-from-color":[{"mask-y-from":P()}],"mask-image-y-to-color":[{"mask-y-to":P()}],"mask-image-radial":[{"mask-radial":[ae,ee]}],"mask-image-radial-from-pos":[{"mask-radial-from":he()}],"mask-image-radial-to-pos":[{"mask-radial-to":he()}],"mask-image-radial-from-color":[{"mask-radial-from":P()}],"mask-image-radial-to-color":[{"mask-radial-to":P()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Z()}],"mask-image-conic-pos":[{"mask-conic":[pe]}],"mask-image-conic-from-pos":[{"mask-conic-from":he()}],"mask-image-conic-to-pos":[{"mask-conic-to":he()}],"mask-image-conic-from-color":[{"mask-conic-from":P()}],"mask-image-conic-to-color":[{"mask-conic-to":P()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:A()}],"mask-repeat":[{mask:_()}],"mask-size":[{mask:J()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ae,ee]}],filter:[{filter:["","none",ae,ee]}],blur:[{blur:Da()}],brightness:[{brightness:[pe,ae,ee]}],contrast:[{contrast:[pe,ae,ee]}],"drop-shadow":[{"drop-shadow":["","none",z,fr,dr]}],"drop-shadow-color":[{"drop-shadow":P()}],grayscale:[{grayscale:["",pe,ae,ee]}],"hue-rotate":[{"hue-rotate":[pe,ae,ee]}],invert:[{invert:["",pe,ae,ee]}],saturate:[{saturate:[pe,ae,ee]}],sepia:[{sepia:["",pe,ae,ee]}],"backdrop-filter":[{"backdrop-filter":["","none",ae,ee]}],"backdrop-blur":[{"backdrop-blur":Da()}],"backdrop-brightness":[{"backdrop-brightness":[pe,ae,ee]}],"backdrop-contrast":[{"backdrop-contrast":[pe,ae,ee]}],"backdrop-grayscale":[{"backdrop-grayscale":["",pe,ae,ee]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[pe,ae,ee]}],"backdrop-invert":[{"backdrop-invert":["",pe,ae,ee]}],"backdrop-opacity":[{"backdrop-opacity":[pe,ae,ee]}],"backdrop-saturate":[{"backdrop-saturate":[pe,ae,ee]}],"backdrop-sepia":[{"backdrop-sepia":["",pe,ae,ee]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":B()}],"border-spacing-x":[{"border-spacing-x":B()}],"border-spacing-y":[{"border-spacing-y":B()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ae,ee]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[pe,"initial",ae,ee]}],ease:[{ease:["linear","initial",H,ae,ee]}],delay:[{delay:[pe,ae,ee]}],animate:[{animate:["none",X,ae,ee]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[L,ae,ee]}],"perspective-origin":[{"perspective-origin":Y()}],rotate:[{rotate:sa()}],"rotate-x":[{"rotate-x":sa()}],"rotate-y":[{"rotate-y":sa()}],"rotate-z":[{"rotate-z":sa()}],scale:[{scale:za()}],"scale-x":[{"scale-x":za()}],"scale-y":[{"scale-y":za()}],"scale-z":[{"scale-z":za()}],"scale-3d":["scale-3d"],skew:[{skew:jn()}],"skew-x":[{"skew-x":jn()}],"skew-y":[{"skew-y":jn()}],transform:[{transform:[ae,ee,"","none","gpu","cpu"]}],"transform-origin":[{origin:Y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:qt()}],"translate-x":[{"translate-x":qt()}],"translate-y":[{"translate-y":qt()}],"translate-z":[{"translate-z":qt()}],"translate-none":["translate-none"],accent:[{accent:P()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:P()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ae,ee]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mbs":[{"scroll-mbs":B()}],"scroll-mbe":[{"scroll-mbe":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pbs":[{"scroll-pbs":B()}],"scroll-pbe":[{"scroll-pbe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ae,ee]}],fill:[{fill:["none",...P()]}],"stroke-w":[{stroke:[pe,Di,zn,sv]}],stroke:[{stroke:["none",...P()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},mC=YA(fC);function zr(...n){return mC(AA(n))}const zi={pastor:{name:"Pastor Fredson Fagundes",phone:"74999829797"},elders:[{name:"Pb. Adevaldo Marques",phone:"7499795490",image:null},{name:"Pb. Elique Rios Filho",phone:"7499910068",image:null}],deacons:[{name:"Diácono Adonel Oliveira",phone:"7499076770",image:null},{name:"Diácono Antonio Rios",phone:"7499946901",image:null},{name:"Diácono Antonio Jacinto Filho",phone:"7499867018",image:null}],societies:[{name:"UPH - Pb. José dos Santos",phone:"7498119515",image:null},{name:"SAF - Osmária",phone:"7498132159",image:null}]},uv=[{month:0,day:1,name:"Suelivânia Santos da Silva Sena"},{month:0,day:7,name:"Ozileia da Silva Cunha Ferreira"},{month:0,day:12,name:"Euflorsina da Cunha Oliveira"},{month:0,day:20,name:"Bernadet"},{month:0,day:25,name:"Sidelcina da Cunha Oliveira"},{month:0,day:27,name:"Thayz Mota Cunha Franco"},{month:1,day:2,name:"Evanuzia"},{month:1,day:7,name:"Maria Betina Cunha Franco"},{month:1,day:10,name:"Pr. Fredson Fagundes Cerqueira"},{month:1,day:22,name:"Ir. Dete Rios"},{month:1,day:27,name:"Marilene Gonçalves da Silva"},{month:2,day:8,name:"Levi Rios Alves Fagundes"},{month:2,day:16,name:"Lucineide Oliveira Nascimento"},{month:2,day:18,name:"Jucielle"},{month:2,day:21,name:"Vitor Manoel da Cunha Ferreira"},{month:2,day:21,name:"Antônio Ferreira da Silva"},{month:2,day:26,name:"Osmária Sousa Rios"},{month:2,day:26,name:"Imarcélia"},{month:2,day:28,name:"Leonildio Ferreira dos Santos"},{month:2,day:31,name:"Irandir da Silva Rios"},{month:2,day:31,name:"Élida Suzart"},{month:2,day:3,name:"Nalva de Antoniel"},{month:2,day:23,name:"Patrícia Lopes rios cunha"},{month:3,day:7,name:"Pedro Leonel da Cunha Ferreira"},{month:3,day:13,name:"Berenice Maria da Silva Lopes"},{month:3,day:25,name:"Elique Rios Filho"},{month:4,day:10,name:"Elisa Silva Sena"},{month:4,day:25,name:"Meire da Silva Almeida Evangelista"},{month:4,day:28,name:"Edelice"},{month:5,day:5,name:"Milton Pereira Rios"},{month:5,day:6,name:"Adevaldo Marques Rios"},{month:5,day:13,name:"Joelma Cristina Rios Lima Pinho"},{month:5,day:14,name:"Alzerita Santos de Souza"},{month:5,day:17,name:"Anderson Hangel Souza Franco"},{month:5,day:21,name:"Débora Rios Ribeiro"},{month:6,day:1,name:"Maria Cecília Cunha Franco"},{month:6,day:2,name:"Daniel Oliveira Santos"},{month:6,day:4,name:"Diana Rios Alves Fagundes"},{month:6,day:8,name:"Zack Samuel Barbosa Silva"},{month:6,day:19,name:"Ridair Cunha"},{month:6,day:20,name:"Ticiana"},{month:6,day:27,name:"Elizânia Gonçalves da Silva Rios"},{month:7,day:4,name:"Uriel da Silva Cunha"},{month:7,day:20,name:"Izabel Rios Oliveira"},{month:8,day:1,name:"Jucirene Lopes da Silva Cunha"},{month:8,day:2,name:"Luana Lima Mendes Oliveira"},{month:8,day:12,name:"Jucineide Rios Oliveira"},{month:8,day:12,name:"Otoniel da Silva Cunha"},{month:8,day:13,name:"Antonio Rios"},{month:8,day:17,name:"Carlito Oliveira Cunha"},{month:8,day:24,name:"Fabiana de Carvalho Barbosa"},{month:8,day:25,name:"Adonel Oliveira"},{month:8,day:25,name:"Roberio Araújo Evangelista"},{month:8,day:30,name:"Jonatas Rios Guilherme"},{month:9,day:18,name:"Yasmim Barbosa Silva"},{month:9,day:25,name:"Zailde Rios Santos"},{month:9,day:26,name:"João Rodrigues de Souza (Nequinha)"},{month:9,day:29,name:"Maria Luzinete Barbosa Cerqueira"},{month:10,day:24,name:"Oseas da Silva Cunha"},{month:10,day:5,name:"Izabela Mota de Souza Cunha"},{month:10,day:9,name:"Joseane da Silva Souza"},{month:10,day:9,name:"Paulo Sérgio Vieira dos Santos"},{month:10,day:12,name:"José dos Santos Oliveira"},{month:11,day:2,name:"Arnóbio Lopes da Silva"},{month:11,day:8,name:"Adeílda Gomes de Oliveira"},{month:11,day:8,name:"Heloísa Barbosa Silva"},{month:11,day:13,name:"Antônio Jacinto Filho"},{month:11,day:14,name:"Ozuel da Silva Cunha"},{month:11,day:17,name:"Zenilda Maria da Silva Cunha"},{month:11,day:31,name:"Matheus Almeida Evangelista"}],cv=[{month:1,name:"Fevereiro",theme:"CHAMADOS AO ARREPENDIMENTO E COMUNHÃO",verse:"(Is 55:6) Buscai o SENHOR enquanto se pode achar, invocai-o enquanto está perto.",events:["01/02 (domingo): Reunião do Conselho com SAF e UPH","07/02 (sábado): Pregação no ponto – Nova Esperança","13–17/02: Retiro espiritual (Carnaval)","17/02 (terça): Reunião do Conselho","22/02 (domingo): Santa Ceia","25/02 (quarta): Santa Ceia no lar"]},{month:2,name:"Março",theme:"BUSCANDO A SANTIDADE",verse:"(1Pe 1.16) Porque escrito está: Sede santos, porque eu sou santo.",events:["Terças: Curso de formação após a Reunião de Oração","Quintas: Reunião de Doutrina: Pilares da Fé Reformada","Domingos: EBD, 10h - Carta aos Coríntios; Culto, 19h30 - Buscando a Santidade","07/03 (Sábado): Caminhada da Mulher (saída às 17h da porta da igreja, parada na casa de Meire para lanche e palestra)","14/03 (Sábado): Projeto Mão na Massa – Ourolândia","21/03 (Sábado): Nova Esperança","15/03 (Domingo): Culto e Santa Ceia - 19h30","23/03 (Segunda-feira): Reunião do Conselho e Reunião de Liderança - Casa do Pb. Elique Filho","25/03 (Quarta): Santa Ceia no Lar - Casa da Irmã Dalva","30/03 (Segunda-feira): 18h–20h Churrasco, Proza e Viola"]},{month:3,name:"Abril",theme:"A cruz e a redenção em Cristo",verse:"(Is 53:5) Mas ele foi traspassado pelas nossas transgressões e moído pelas nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",events:["11/04 (sábado): Pregação no ponto – Nova Esperança","Curso de Formação - Terças, após reunião de oração","05/04 (domingo): Café da ressureição e Culto da Páscoa com Santa Ceia","15/04 (quarta): Santa Ceia no lar","25/04 (sábado): Aniversário da UPH – Pregador: Pr. Nivaldo Cortez","17/04 (sexta): Culto evangelístico – Casas Populares","21/04 (terça): Reunião do Conselho"]},{month:4,name:"Maio",theme:"Edificando a família sobre a Rocha",verse:"(Mt 7.24) Quem ouve minhas palavras e as pratica é tão sábio como a pessoa que constrói sua casa sobre uma rocha firme.",events:["03/05 (Dom): Uma família firmada na Rocha - Miss. Franco (IPB Piritiba)","05/05 (Ter): Oração nos lares (Família de Arnóbio e Lene) - Resp: UPH","10/05 (Dom): Uma família ajustada pelos princípios de Deus - Pb. Robério Evangelista","12/05 (Ter): Oração nos lares (Família de Geanhy e Irandir) - Resp: SAF","16/05 (Sáb): Culto Evangelístico (Nova Esperança) - Liturgia: SAF | Palavra: UPH","17/05 (Dom): Uma família que vence as tempestades - Miss. Abérico Macêdo (IPB Serrolândia)","19/05 (Ter): Oração nos lares (Família de Débora) - Resp: SAF","24/05 (Dom): Uma família que vence as tempestades - Pb. Gilson Rios (IPB Mairi)","26/05 (Ter): Oração nos lares (Fam. Ozuel, Juce, Uriel, Ciele, Luciano e Saulo)","31/05 (Dom): DIA DA FAMÍLIA IPVP - 10h EBD Especial (Faz. Pb. Elique Filho) | 19h Culto - Pr. Pedro (IPB Pintadas)"]},{month:5,name:"Junho",theme:"A família no centro do propósito de Deus",verse:"(Js 24:15) Eu e a minha casa serviremos ao SENHOR.",events:["06/06 (sábado): Pregação no ponto – Nova Esperança","14/06 (domingo): Santa Ceia","15/06 (segunda): Reunião de Liderança (Casa de Adevaldo)","17/06 (quarta): Santa Ceia no lar","20/06 (sábado): Jantar de Casais – Sítio de Bernadet","16/06 (terça): Reunião do Conselho"]},{month:6,name:"Julho",theme:"Confiança no Senhor",verse:"(Sl 27:1) O SENHOR é a minha luz e a minha salvação; de quem terei medo?",events:["04/07 (sábado): Pregação no ponto – Nova Esperança","12/07 (domingo): Santa Ceia","15/07 (quarta): Santa Ceia no lar","17/07 (sexta): Culto evangelístico","21/07 (terça): Reunião do Conselho"]},{month:7,name:"Agosto",theme:"Obedecendo ao Senhor na missão",verse:"(Jn 3:1) E veio a palavra do Senhor segunda vez a Jonas, dizendo: Levanta-te, e vai à grande cidade de Nínive.",events:["01 e 02/08 (domingo): Viagem - IPVP","08/08 (sábado): Pregação no ponto – Nova Esperança","09/08 (domingo): Santa Ceia","12/08 (quarta): Santa Ceia no lar","18/08 (terça): Reunião do Conselho","30/08 (domingo): Dia Missionário – Pastor convidado","28/08 (sexta): Culto evangelístico – Praça do cemitério"]},{month:8,name:"Setembro",theme:"Ele vem",verse:"(Ap 22:12) E eis que venho sem demora, e comigo está o galardão.",events:["05/09 (sábado): Pregação no ponto – Nova Esperança","13/09 (domingo): Santa Ceia","14/09 (segunda): Reunião de Liderança (Casa de Antonio Rios)","16/09 (quarta): Santa Ceia no lar","25/09 (sexta): Culto evangelístico – Alto da Nação","15/09 (terça): Reunião do Conselho","Dia da Bíblia (domingo)"]},{month:9,name:"Outubro",theme:"Reformando sempre",verse:"(Ef 2:8) Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus;",events:["03/10 (sábado): Pregação no ponto – Nova Esperança","04/10 (domingo): Reunião do Conselho com SAF e UPH","11/10 (domingo): Santa Ceia","Aniversário da SAF – Pastor convidado","14/10 (quarta): Santa Ceia no lar","31/10 (sexta): DIA DO EVANGÉLICO – PRAÇA PRINCIPAL"]},{month:10,name:"Novembro",theme:"Gratidão e fidelidade ao Senhor",verse:"(1Sm 7:12) Até aqui nos ajudou o SENHOR.",events:["02/11: Café teológico com o tema: 'E depois da morte...?'","07/11 (sábado): Pregação no ponto – Nova Esperança","12 e 13/11: Cultos evangelísticos na Praça da Nação e na Praça da Preguiça","14–15/11: 31 anos da IPVP – Pastor convidado e Santa Ceia","17/11 (terça): Reunião do Conselho","18/11 (quarta): Santa Ceia no lar","21–30/11: Ausência pastoral (curso em São Paulo)"]},{month:11,name:"Dezembro",theme:"O Cristo encarnado e a esperança eterna",verse:"(Jo 1:14) E o Verbo se fez carne e habitou entre nós.",events:["06/12 (domingo): Santa Ceia","07/12 (segunda): Reunião de Liderança (Casa pastoral)","09/12 (quarta): Santa Ceia no lar","11/12 (sexta): Culto evangelístico","15/12 (terça): Reunião do Conselho","20/12 (domingo) Manhã - Assembleia Geral Ordinária","Cultos de Natal e Encerramento do Ano"]}],hC=[{month:4,announcements:[{text:"Programação Especial: Mês da Família",image:"/programacao-maio.jpg",isWeekly:!1}]}],dv=[{title:"A Bênção (Gabriel Guedes)",lyrics:`Que o Senhor te abençoe
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
Me prostro pra Te adorar, Te alegrar`}],K={primary:"#163328",gold:"#D4B36D",bgLight:"#F0F5F3"},pC=["Gênesis","Êxodo","Levítico","Números","Deuteronômio","Josué","Juízes","Rute","1Samuel","2Samuel","1Reis","2Reis","1Crônicas","2Crônicas","Esdras","Neemias","Ester","Jó","Salmos","Provérbios","Eclesiastes","Cânticos","Isaías","Jeremias","Lamentações","Ezequiel","Daniel","Oseias","Joel","Amós","Obadias","Jonas","Miqueias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias","Mateus","Marcos","Lucas","João","Atos","Romanos","1Coríntios","2Coríntios","Gálatas","Efésios","Filipenses","Colossenses","1Tessalonicenses","2Tessalonicenses","1Timóteo","2Timóteo","Tito","Filemom","Hebreus","Tiago","1Pedro","2Pedro","1João","2João","3João","Judas","Apocalipse"],Sc=n=>["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][n],gC=({size:n=24,className:i=""})=>x.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:i,children:x.jsx("path",{d:"M12 2v20M8 8h8"})}),vC=()=>{const[n,i]=k.useState(!1),[s,r]=k.useState(!1);k.useEffect(()=>{const m=()=>i(window.scrollY>50);return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const c=[{name:"Agenda",href:"#agenda"},{name:"Músicas",href:"#lyrics-search"},{name:"Liderança",href:"#leadership"},{name:"Bíblia",href:"#bible-quick"},{name:"Dízimos",href:"#giving"}];return x.jsxs("nav",{className:zr("fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",n?"bg-white shadow-lg py-3":"bg-white/90 backdrop-blur-sm border-b border-slate-100"),children:[x.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[x.jsxs("div",{className:"flex flex-col",children:[x.jsx("span",{className:"font-serif text-3xl font-bold leading-none",style:{color:K.primary},children:"IPVP"}),x.jsx("span",{className:"text-[9px] uppercase font-bold text-slate-500",children:"Várzea do Poço-BA"})]}),x.jsx("div",{className:"hidden xl:flex gap-6 text-xs font-bold uppercase tracking-widest",children:c.map((m,d)=>x.jsx("a",{href:m.href,className:"hover:text-amber-600 transition-colors",style:{color:K.primary},children:m.name},d))}),x.jsx("a",{href:"#contact",className:"hidden md:block px-5 py-2.5 text-white rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform",style:{backgroundColor:K.gold},children:"CONTATO"}),x.jsx("button",{className:"xl:hidden p-2",style:{color:K.primary},onClick:()=>r(!s),children:s?x.jsx(t0,{size:24}):x.jsx(cA,{size:24})})]}),x.jsx(Ed,{children:s&&x.jsx(ki.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 xl:hidden",children:c.map(m=>x.jsx("a",{href:m.href,onClick:()=>r(!1),className:"text-lg font-serif border-b pb-2 font-bold",style:{color:K.primary},children:m.name},m.name))})})]})},yC=()=>x.jsxs("section",{id:"home",className:"relative min-h-[60vh] flex items-center justify-center pt-20",children:[x.jsxs("div",{className:"absolute inset-0 z-0",children:[x.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:"url('/fundo-igreja.jpg')"}}),x.jsx("div",{className:"absolute inset-0 bg-white/40"}),x.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"})]}),x.jsxs("div",{className:"relative z-10 text-center px-6",children:[x.jsx(ki.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-[100px] md:text-[140px] font-serif font-bold mb-0 leading-none",style:{color:K.primary},children:"IPVP"}),x.jsx("p",{className:"text-lg md:text-2xl font-bold uppercase tracking-[0.3em]",style:{color:K.primary},children:"Várzea do Poço-BA"})]})]}),bC=()=>{const[n,i]=k.useState(""),[s,r]=k.useState(null),c=Array.isArray(dv)?dv:[],m=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),d=n.length>2?c.filter(h=>`${h.title} ${h.lyrics}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(m)):[];return x.jsx("section",{id:"lyrics-search",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:x.jsxs("div",{className:"max-w-4xl mx-auto",children:[x.jsxs("div",{className:"text-center mb-10",children:[x.jsx(fA,{size:48,style:{color:K.gold},className:"mx-auto mb-4"}),x.jsx("h2",{className:"text-4xl font-serif font-bold",style:{color:K.primary},children:"Louvores IPVP"}),x.jsx("p",{className:"text-slate-600 text-lg mt-2 font-medium",children:"Busque por título ou trecho da música."})]}),s?x.jsxs(ki.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white rounded-[2rem] p-6 md:p-12 shadow-2xl border-t-8",style:{borderColor:K.gold},children:[x.jsxs("div",{className:"flex justify-between items-start mb-10 border-b-2 border-slate-100 pb-6",children:[x.jsx("h3",{className:"text-3xl md:text-5xl font-serif font-bold leading-tight",style:{color:K.primary},children:s.title}),x.jsx("button",{onClick:()=>{r(null),i("")},className:"p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 transition-colors ml-4 shrink-0",children:x.jsx(t0,{size:28})})]}),x.jsx("pre",{className:"whitespace-pre-wrap font-sans text-2xl md:text-4xl leading-[1.8] text-slate-900 font-semibold tracking-wide",children:s.lyrics}),x.jsx("div",{className:"mt-12 text-center",children:x.jsx("button",{onClick:()=>{r(null),i("")},className:"px-8 py-4 rounded-full bg-slate-100 text-slate-600 font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all shadow-sm",children:"Voltar para busca"})})]}):x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"relative mb-8",children:[x.jsx(Md,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-400",size:24}),x.jsx("input",{type:"text",placeholder:"Ex: 'Que o Senhor te abençoe'...",value:n,onChange:h=>i(h.target.value),className:"w-full pl-14 pr-6 py-5 rounded-2xl border-2 outline-none font-bold text-xl text-slate-800 shadow-sm",style:{borderColor:n?K.gold:"#e2e8f0"}})]}),d.length>0&&x.jsx("div",{className:"bg-white rounded-3xl shadow-xl border-2 border-slate-100 overflow-hidden mb-8",children:d.map((h,p)=>x.jsxs("button",{onClick:()=>r(h),className:"w-full text-left px-8 py-5 hover:bg-slate-50 border-b-2 border-slate-50 last:border-0 font-extrabold text-xl text-slate-800 transition-colors flex items-center justify-between",children:[h.title,x.jsx(eA,{size:20,className:"text-slate-400"})]},p))}),n.length>2&&d.length===0&&x.jsx("p",{className:"text-center text-slate-400 italic",children:"Nenhum louvor encontrado com esse trecho."})]})]})})},SC=()=>{const[n,i]=k.useState({book:"João",cap:"3",ver:"16"}),s=r=>{r.preventDefault();const c=`https://www.bibliaonline.com.br/nvi/${n.book.toLowerCase()}/${n.cap}/${n.ver}`;window.open(c,"_blank")};return x.jsx("section",{id:"bible-quick",className:"py-12 px-6 bg-white",children:x.jsxs("div",{className:"max-w-4xl mx-auto bg-slate-50 rounded-[2rem] p-8 shadow-xl border-t-4",style:{borderColor:K.gold},children:[x.jsxs("div",{className:"flex items-center gap-3 mb-6 justify-center md:justify-start",children:[x.jsx(K2,{className:"text-amber-600",size:32}),x.jsx("h2",{className:"text-2xl font-serif font-bold",style:{color:K.primary},children:"Acesso Rápido às Escrituras"})]}),x.jsxs("form",{onSubmit:s,className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[x.jsxs("div",{className:"md:col-span-2",children:[x.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Livro"}),x.jsx("select",{value:n.book,onChange:r=>i({...n,book:r.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none",children:pC.map(r=>x.jsx("option",{value:r,children:r},r))})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Capítulo"}),x.jsx("input",{type:"number",value:n.cap,onChange:r=>i({...n,cap:r.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none"})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Versículo"}),x.jsx("input",{type:"number",value:n.ver,onChange:r=>i({...n,ver:r.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none"})]}),x.jsxs("button",{type:"submit",className:"md:col-span-4 py-4 rounded-xl text-white font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform",style:{backgroundColor:K.primary},children:[x.jsx(Md,{size:20})," LER NA BÍBLIA ONLINE"]})]})]})})},xC=()=>{const[n,i]=k.useState(new Date().getMonth()),s=k.useMemo(()=>cv.find(r=>r.month===n),[n]);return x.jsx("section",{id:"agenda",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:x.jsxs("div",{className:"max-w-5xl mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-slate-200",children:[x.jsx("h2",{className:"text-3xl font-serif text-center mb-8 font-bold",style:{color:K.primary},children:"Calendário Oficial 2026"}),x.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-10",children:cv.map(r=>x.jsx("button",{onClick:()=>i(r.month),className:zr("px-5 py-2.5 rounded-full text-xs font-bold border-2 transition-all",n===r.month?"text-white shadow-md":"bg-white text-slate-800 border-slate-200"),style:n===r.month?{backgroundColor:K.primary,borderColor:K.primary}:{},children:r.name},r.month))}),x.jsx(Ed,{mode:"wait",children:s&&x.jsxs(ki.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center",children:[x.jsxs("div",{className:"mb-8 border-b-2 border-slate-200 pb-6",children:[x.jsx("p",{className:"font-extrabold text-base uppercase mb-2",style:{color:K.gold},children:s.theme}),x.jsxs("p",{className:"italic text-slate-800 font-serif font-bold text-lg max-w-2xl mx-auto",children:['"',s.verse,'"']})]}),x.jsx("div",{className:"grid md:grid-cols-2 gap-4 text-left",children:s.events.map((r,c)=>x.jsxs("div",{className:"flex items-start gap-3 p-5 bg-slate-50 rounded-xl border-l-4 shadow-sm",style:{borderColor:K.gold},children:[x.jsx(Iy,{size:20,style:{color:K.primary},className:"shrink-0 mt-0.5"}),x.jsx("p",{className:"text-slate-900 font-bold",children:r})]},c))})]},n)})]})})},TC=()=>{const n=hC.flatMap(i=>i.announcements);return x.jsx("section",{id:"avisos",className:"py-16 px-6 bg-white",children:x.jsxs("div",{className:"max-w-6xl mx-auto",children:[x.jsx("div",{className:"text-center mb-12",children:x.jsx("h2",{className:"text-4xl font-serif font-bold",style:{color:K.primary},children:"Avisos da Igreja"})}),x.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:n.map((i,s)=>x.jsxs("div",{className:"bg-slate-50 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-100 flex flex-col",children:[i.image&&x.jsx("div",{className:"w-full bg-white flex justify-center items-center",children:x.jsx("img",{src:i.image,alt:"Aviso",className:"w-full h-auto object-contain max-h-[500px]"})}),x.jsxs("div",{className:"p-8 flex items-start gap-4",children:[x.jsx(SA,{size:28,style:{color:K.gold},className:"shrink-0 mt-1"}),x.jsx("p",{className:"text-xl font-serif italic font-extrabold text-slate-900",children:i.text})]})]},s))})]})})},EC=()=>x.jsx("section",{id:"leadership",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:x.jsxs("div",{className:"max-w-7xl mx-auto",children:[x.jsx("h2",{className:"text-4xl font-serif text-center mb-12 font-bold",style:{color:K.primary},children:"Nossa Liderança"}),x.jsxs("div",{className:"mb-16",children:[x.jsx("h3",{className:"text-2xl font-bold uppercase tracking-widest text-center mb-8",style:{color:K.gold},children:"Conselho"}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[x.jsxs("div",{className:"bg-white rounded-3xl p-8 text-center border-2 border-slate-100 shadow-xl",children:[x.jsx("div",{className:"aspect-square w-48 mx-auto rounded-full overflow-hidden mb-6 border-4",style:{borderColor:K.gold},children:x.jsx("img",{src:"/foto-pastor.jpg",className:"w-full h-full object-cover",onError:n=>n.currentTarget.src="https://via.placeholder.com/200?text=Pastor"})}),x.jsx("h4",{className:"text-2xl font-bold font-serif mb-1",style:{color:K.primary},children:zi.pastor.name}),x.jsx("p",{className:"text-sm uppercase text-slate-500 mb-6 font-extrabold tracking-widest",children:"Pastor Titular"}),x.jsxs("a",{href:`https://wa.me/55${zi.pastor.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm font-bold py-3 px-8 rounded-full text-white shadow-md hover:scale-105 transition-transform",style:{backgroundColor:K.gold},children:[x.jsx(Yc,{size:16})," WhatsApp"]})]}),zi.elders.map((n,i)=>x.jsxs("div",{className:"bg-white rounded-3xl p-8 text-center border-2 border-slate-100 shadow-xl",children:[x.jsx("div",{className:"aspect-square w-48 mx-auto rounded-full overflow-hidden mb-6 border-4",style:{borderColor:K.primary},children:x.jsx("img",{src:n.name.includes("Adevaldo")?"/foto-adevaldo.jpg":"/foto-elique.jpg",className:"w-full h-full object-cover",onError:s=>s.currentTarget.src="https://via.placeholder.com/200?text=Presbítero"})}),x.jsx("h4",{className:"text-2xl font-bold font-serif mb-1",style:{color:K.primary},children:n.name}),x.jsx("p",{className:"text-sm uppercase text-slate-500 mb-6 font-extrabold tracking-widest",children:"Presbítero"}),x.jsxs("a",{href:`https://wa.me/55${n.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm font-bold py-3 px-8 rounded-full text-white shadow-md hover:scale-105 transition-transform",style:{backgroundColor:K.primary},children:[x.jsx(Yc,{size:16})," WhatsApp"]})]},i))]})]}),x.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[x.jsxs("div",{children:[x.jsx("h3",{className:"text-2xl font-serif mb-6 border-b-2 pb-2 font-bold",style:{color:K.primary,borderColor:K.gold},children:"Junta Diaconal"}),x.jsx("div",{className:"space-y-3",children:zi.deacons.map((n,i)=>x.jsx("div",{className:"p-4 bg-white rounded-xl font-bold text-lg border-l-8 shadow-sm text-slate-900",style:{borderColor:K.gold},children:n.name},i))})]}),x.jsxs("div",{children:[x.jsx("h3",{className:"text-2xl font-serif mb-6 border-b-2 pb-2 font-bold",style:{color:K.primary,borderColor:K.gold},children:"Sociedades Internas"}),x.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:zi.societies.map((n,i)=>x.jsx("div",{className:"p-4 rounded-xl text-white text-sm font-bold text-center shadow-md",style:{backgroundColor:K.primary},children:n.name},i))})]})]})]})}),AC=()=>x.jsx("section",{id:"resources",className:"py-16 px-6 bg-white",children:x.jsxs("div",{className:"max-w-7xl mx-auto",children:[x.jsxs("div",{className:"text-center mb-10",children:[x.jsx("h2",{className:"text-4xl font-serif mb-4 font-bold",style:{color:K.primary},children:"Crescimento Espiritual e Documentos"}),x.jsxs("div",{className:"flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-12 mt-8",children:[x.jsxs("a",{href:"/estatuto_ipvp_2026.pdf",download:"estatuto_ipvp_2026.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#334155"},children:[x.jsx(Mi,{size:16})," Estatuto IPVP 2026"]}),x.jsxs("a",{href:"/guia_trabalho_saf.pdf",download:!0,className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#be123c"},children:[x.jsx(Mi,{size:16})," Guia de Trabalho SAF"]}),x.jsxs("a",{href:"/guia_trabalho_uph.pdf",download:!0,className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#1d4ed8"},children:[x.jsx(Mi,{size:16})," Guia de Trabalho UPH"]}),x.jsxs("a",{href:"/manual_unificado.pdf",download:"manual_unificado.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:K.gold},children:[x.jsx(Mi,{size:16})," Manual Unificado"]}),x.jsxs("a",{href:"/manual_presbiteriano_2025.pdf",download:"manual_presbiteriano_2025.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:K.primary},children:[x.jsx(Mi,{size:16})," Manual da IPB"]})]})]}),x.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[x.jsxs("a",{href:"https://www.bible.com/pt/reading-plans",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[x.jsx(Iy,{size:40,style:{color:K.gold},className:"mb-4"}),x.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Planos de Leitura"}),x.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Leitura bíblica diária organizada."})]}),x.jsxs("a",{href:"https://ipcuiaba.com.br/noticias/118538/hinario-novo-cantico",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[x.jsx(hA,{size:40,style:{color:K.gold},className:"mb-4"}),x.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Novo Cântico"}),x.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Letras e partituras do hinário oficial."})]}),x.jsxs("a",{href:"https://drive.google.com/drive/folders/1NlippJmh36vxHQRFnPI8ivxSUfCHPP5D",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[x.jsx(e0,{size:40,style:{color:K.gold},className:"mb-4"}),x.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Estudos Bíblicos"}),x.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Material ministrado em nossa igreja."})]})]})]})}),CC=()=>{const[n,i]=k.useState(""),[s,r]=k.useState(""),c=new Date().getMonth(),m=k.useMemo(()=>uv.filter(h=>h.name.toLowerCase().includes(n.toLowerCase())&&(s===""||h.month===Number(s))).sort((h,p)=>h.month-p.month||h.day-p.day),[n,s]),d=k.useMemo(()=>uv.filter(h=>h.month===c).sort((h,p)=>h.day-p.day),[c]);return x.jsx("section",{id:"birthdays",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:x.jsxs("div",{className:"max-w-5xl mx-auto",children:[x.jsxs("h2",{className:"text-4xl font-serif text-center mb-10 font-bold",style:{color:K.primary},children:["Aniversariantes de ",Sc(c)]}),x.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:d.map((h,p)=>x.jsxs("div",{className:"px-6 py-3 bg-white rounded-xl border-2 shadow-md flex items-center gap-3",style:{borderColor:K.gold},children:[x.jsx("span",{className:"font-black text-2xl",style:{color:K.primary},children:h.day}),x.jsx("span",{className:"font-extrabold text-slate-900 text-lg",children:h.name})]},p))}),x.jsxs("div",{className:"bg-white p-6 rounded-3xl border-2 shadow-md flex flex-col md:flex-row gap-4 mb-10",style:{borderColor:K.primary+"30"},children:[x.jsxs("div",{className:"flex-1 relative",children:[x.jsx(Md,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-500",size:24}),x.jsx("input",{type:"text",placeholder:"Buscar irmão pelo nome...",value:n,onChange:h=>i(h.target.value),className:"w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-slate-200 outline-none text-slate-900 font-bold text-lg focus:border-amber-500"})]}),x.jsxs("select",{value:s,onChange:h=>r(h.target.value),className:"px-6 py-4 rounded-2xl border-2 border-slate-200 outline-none bg-white text-slate-900 font-bold text-lg",children:[x.jsx("option",{value:"",children:"Todos os Meses"}),Array.from({length:12}).map((h,p)=>x.jsx("option",{value:p,children:Sc(p)},p))]})]}),x.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",children:m.slice(0,9).map((h,p)=>x.jsxs("div",{className:"bg-white p-5 rounded-2xl border-l-8 shadow-md flex items-center justify-between",style:{borderColor:K.primary},children:[x.jsxs("div",{children:[x.jsx("h4",{className:"font-extrabold text-lg text-slate-900",children:h.name}),x.jsxs("p",{className:"text-xs font-black uppercase mt-1 tracking-widest",style:{color:K.gold},children:[h.day," de ",Sc(h.month)]})]}),x.jsx(W2,{size:24,style:{color:K.primary},className:"opacity-80"})]},p))}),x.jsx("div",{className:"bg-white p-4 rounded-[2rem] shadow-2xl border-4",style:{borderColor:K.gold},children:x.jsx("img",{src:"/niverabril2026.jpg",className:"w-full h-auto rounded-2xl",onError:h=>h.currentTarget.style.display="none"})})]})})},MC=()=>x.jsx("section",{className:"py-16 px-6 bg-white",children:x.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[x.jsx("h2",{className:"text-4xl font-serif mb-8 font-bold",style:{color:K.primary},children:"Curso: Preparando-se para servir"}),x.jsx("div",{className:"relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 mb-8",children:x.jsx("iframe",{className:"w-full h-full",src:"https://www.youtube.com/embed/yAu3BtPWi4s",title:"Curso",frameBorder:"0",allowFullScreen:!0})})]})}),DC=()=>x.jsx("section",{id:"giving",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:x.jsxs("div",{className:"max-w-4xl mx-auto text-center rounded-[3rem] p-12 text-white shadow-2xl border-4 border-white",style:{backgroundColor:K.primary},children:[x.jsx(nA,{size:48,className:"mx-auto mb-6",style:{color:K.gold}}),x.jsx("h2",{className:"text-4xl font-serif mb-6 font-bold",children:"Dízimos e Ofertas"}),x.jsx("div",{className:"bg-white/10 p-6 rounded-2xl border border-white/20 inline-block font-mono text-2xl font-bold tracking-widest mb-6",children:"PIX: 03.507.028/0001-08"}),x.jsx("p",{className:"text-base font-extrabold uppercase tracking-widest",style:{color:K.gold},children:"Banco SICOOB | Ag: 3289 | CC: 118524"})]})}),zC=()=>{const[n,i]=k.useState({name:"",contact:"",message:""}),s=r=>{r.preventDefault();const c=`*Site*%0ANome: ${n.name}%0AContato: ${n.contact}%0A*Msg:* ${n.message}`;window.open(`https://wa.me/5574999829797?text=${c}`,"_blank")};return x.jsx("section",{id:"contact",className:"py-16 px-6 bg-white",children:x.jsxs("div",{className:"max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center",children:[x.jsxs("div",{children:[x.jsx("h2",{className:"text-4xl font-serif mb-8 font-bold",style:{color:K.primary},children:"Fale Conosco"}),x.jsxs("form",{onSubmit:s,className:"space-y-5 bg-slate-50 p-10 rounded-[2rem] shadow-xl border border-slate-200",children:[x.jsx("input",{type:"text",required:!0,placeholder:"Seu Nome",className:"w-full p-5 rounded-xl border-2 outline-none font-bold text-slate-800 focus:border-amber-500",value:n.name,onChange:r=>i({...n,name:r.target.value})}),x.jsx("input",{type:"text",required:!0,placeholder:"Seu Telefone",className:"w-full p-5 rounded-xl border-2 outline-none font-bold text-slate-800 focus:border-amber-500",value:n.contact,onChange:r=>i({...n,contact:r.target.value})}),x.jsx("textarea",{required:!0,rows:4,placeholder:"Sua Mensagem...",className:"w-full p-5 rounded-xl border-2 resize-none outline-none font-bold text-slate-800 focus:border-amber-500",value:n.message,onChange:r=>i({...n,message:r.target.value})}),x.jsx("button",{type:"submit",className:"w-full py-5 text-white rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-transform",style:{backgroundColor:K.primary},children:"Enviar via WhatsApp"})]})]}),x.jsxs("div",{className:"rounded-[2rem] h-[500px] text-white p-10 flex flex-col items-center justify-center shadow-2xl border-4 border-slate-100",style:{backgroundColor:K.primary},children:[x.jsx(lA,{size:56,className:"mb-6",style:{color:K.gold}}),x.jsx("h3",{className:"text-4xl font-serif mb-4 font-bold",children:"Localização"}),x.jsx("p",{className:"text-white/80 mb-10 max-w-xs text-center text-lg font-medium",children:"R. Durval Gama, 17, Várzea do Poço - BA."}),x.jsx("a",{href:"https://www.google.com/maps/search/?api=1&query=R.+Durval+Gama,+17,+Várzea+do+Poço+-+BA,+44715-000",target:"_blank",rel:"noreferrer",className:"px-10 py-4 bg-white rounded-full font-bold shadow-xl text-lg hover:scale-105 transition-transform",style:{color:K.primary},children:"Ver no Mapa"})]})]})})},NC=()=>{const[n,i]=k.useState(!1),s=[{icon:x.jsx(EA,{size:24}),href:"https://www.youtube.com/@IPBVARZEADOPOCO",color:"bg-red-600"},{icon:x.jsx(iA,{size:24}),href:"https://www.instagram.com/ipvarzeapoco",color:"bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"},{icon:x.jsx(Yc,{size:24}),href:"https://wa.me/5574999829797",color:"bg-green-500"},{icon:x.jsx(e0,{size:24}),href:"https://script.google.com/macros/s/AKfycbxltiBSW-TkOr3pmPwANW_g4Futtu_MqIX2nwk3lYr6-Ak2Ic5QmGnPTR5AV3F74aR7/exec",color:"bg-slate-700"}];return x.jsxs("div",{className:"fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4",children:[x.jsx(Ed,{children:n&&s.map((r,c)=>x.jsx(ki.a,{href:r.href,target:"_blank",rel:"noreferrer",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:zr("w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform",r.color),children:r.icon},c))}),x.jsx("button",{onClick:()=>i(!n),className:"w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:scale-105",style:{backgroundColor:n?"#333":K.gold},children:x.jsx(vA,{size:36,className:zr(n&&"rotate-45")})})]})};function OC(){return x.jsxs("div",{className:"min-h-screen bg-white font-sans text-slate-800",children:[x.jsx(vC,{}),x.jsx(yC,{}),x.jsx(SC,{}),x.jsx(bC,{}),x.jsx(xC,{}),x.jsx(TC,{}),x.jsx(EC,{}),x.jsx(AC,{}),x.jsx(CC,{}),x.jsx(MC,{}),x.jsx(DC,{}),x.jsx(zC,{}),x.jsxs("footer",{className:"py-12 text-center bg-slate-50 border-t-2 border-slate-200",children:[x.jsx(gC,{size:40,className:"mx-auto mb-4",style:{color:K.gold}}),x.jsx("p",{className:"font-serif font-bold text-2xl mb-1",style:{color:K.primary},children:"IP Várzea do Poço"}),x.jsx("p",{className:"text-sm font-medium text-slate-500",children:"© 2026 - Fidelidade à Palavra de Deus."})]}),x.jsx(NC,{})]})}KS.createRoot(document.getElementById("root")).render(x.jsx(k.StrictMode,{children:x.jsx(OC,{})}));
