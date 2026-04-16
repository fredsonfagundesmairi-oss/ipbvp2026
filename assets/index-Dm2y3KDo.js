(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=s(c);fetch(c.href,f)}})();var Fu={exports:{}},Ei={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function HS(){if(qp)return Ei;qp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(r,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var p in c)p!=="key"&&(f[p]=c[p])}else f=c;return c=f.ref,{$$typeof:n,type:r,key:d,ref:c!==void 0?c:null,props:f}}return Ei.Fragment=i,Ei.jsx=s,Ei.jsxs=s,Ei}var Op;function QS(){return Op||(Op=1,Fu.exports=HS()),Fu.exports}var T=QS(),Wu={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function GS(){if(jp)return ce;jp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function z(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,U={};function H(A,_,J){this.props=A,this.context=_,this.refs=U,this.updater=J||O}H.prototype.isReactComponent={},H.prototype.setState=function(A,_){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,_,"setState")},H.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function X(){}X.prototype=H.prototype;function G(A,_,J){this.props=A,this.context=_,this.refs=U,this.updater=J||O}var Z=G.prototype=new X;Z.constructor=G,L(Z,H.prototype),Z.isPureReactComponent=!0;var Y=Array.isArray;function ie(){}var W={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function se(A,_,J){var F=J.ref;return{$$typeof:n,type:A,key:_,ref:F!==void 0?F:null,props:J}}function Ce(A,_){return se(A.type,_,A.props)}function _e(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function Re(A){var _={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(J){return _[J]})}var pt=/\/+/g;function ut(A,_){return typeof A=="object"&&A!==null&&A.key!=null?Re(""+A.key):_.toString(36)}function Ge(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ie,ie):(A.status="pending",A.then(function(_){A.status==="pending"&&(A.status="fulfilled",A.value=_)},function(_){A.status==="pending"&&(A.status="rejected",A.reason=_)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function j(A,_,J,F,oe){var le=typeof A;(le==="undefined"||le==="boolean")&&(A=null);var Se=!1;if(A===null)Se=!0;else switch(le){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(A.$$typeof){case n:case i:Se=!0;break;case y:return Se=A._init,j(Se(A._payload),_,J,F,oe)}}if(Se)return oe=oe(A),Se=F===""?"."+ut(A,0):F,Y(oe)?(J="",Se!=null&&(J=Se.replace(pt,"$&/")+"/"),j(oe,_,J,"",function(Da){return Da})):oe!=null&&(_e(oe)&&(oe=Ce(oe,J+(oe.key==null||A&&A.key===oe.key?"":(""+oe.key).replace(pt,"$&/")+"/")+Se)),_.push(oe)),1;Se=0;var Ie=F===""?".":F+":";if(Y(A))for(var he=0;he<A.length;he++)F=A[he],le=Ie+ut(F,he),Se+=j(F,_,J,le,oe);else if(he=z(A),typeof he=="function")for(A=he.call(A),he=0;!(F=A.next()).done;)F=F.value,le=Ie+ut(F,he++),Se+=j(F,_,J,le,oe);else if(le==="object"){if(typeof A.then=="function")return j(Ge(A),_,J,F,oe);throw _=String(A),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return Se}function Q(A,_,J){if(A==null)return A;var F=[],oe=0;return j(A,F,"","",function(le){return _.call(J,le,oe++)}),F}function $(A){if(A._status===-1){var _=A._result;_=_(),_.then(function(J){(A._status===0||A._status===-1)&&(A._status=1,A._result=J)},function(J){(A._status===0||A._status===-1)&&(A._status=2,A._result=J)}),A._status===-1&&(A._status=0,A._result=_)}if(A._status===1)return A._result.default;throw A._result}var fe=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},k={map:Q,forEach:function(A,_,J){Q(A,function(){_.apply(this,arguments)},J)},count:function(A){var _=0;return Q(A,function(){_++}),_},toArray:function(A){return Q(A,function(_){return _})||[]},only:function(A){if(!_e(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ce.Activity=b,ce.Children=k,ce.Component=H,ce.Fragment=s,ce.Profiler=c,ce.PureComponent=G,ce.StrictMode=r,ce.Suspense=h,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,ce.__COMPILER_RUNTIME={__proto__:null,c:function(A){return W.H.useMemoCache(A)}},ce.cache=function(A){return function(){return A.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(A,_,J){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var F=L({},A.props),oe=A.key;if(_!=null)for(le in _.key!==void 0&&(oe=""+_.key),_)!B.call(_,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&_.ref===void 0||(F[le]=_[le]);var le=arguments.length-2;if(le===1)F.children=J;else if(1<le){for(var Se=Array(le),Ie=0;Ie<le;Ie++)Se[Ie]=arguments[Ie+2];F.children=Se}return se(A.type,oe,F)},ce.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},ce.createElement=function(A,_,J){var F,oe={},le=null;if(_!=null)for(F in _.key!==void 0&&(le=""+_.key),_)B.call(_,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(oe[F]=_[F]);var Se=arguments.length-2;if(Se===1)oe.children=J;else if(1<Se){for(var Ie=Array(Se),he=0;he<Se;he++)Ie[he]=arguments[he+2];oe.children=Ie}if(A&&A.defaultProps)for(F in Se=A.defaultProps,Se)oe[F]===void 0&&(oe[F]=Se[F]);return se(A,le,oe)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(A){return{$$typeof:p,render:A}},ce.isValidElement=_e,ce.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:$}},ce.memo=function(A,_){return{$$typeof:g,type:A,compare:_===void 0?null:_}},ce.startTransition=function(A){var _=W.T,J={};W.T=J;try{var F=A(),oe=W.S;oe!==null&&oe(J,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ie,fe)}catch(le){fe(le)}finally{_!==null&&J.types!==null&&(_.types=J.types),W.T=_}},ce.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},ce.use=function(A){return W.H.use(A)},ce.useActionState=function(A,_,J){return W.H.useActionState(A,_,J)},ce.useCallback=function(A,_){return W.H.useCallback(A,_)},ce.useContext=function(A){return W.H.useContext(A)},ce.useDebugValue=function(){},ce.useDeferredValue=function(A,_){return W.H.useDeferredValue(A,_)},ce.useEffect=function(A,_){return W.H.useEffect(A,_)},ce.useEffectEvent=function(A){return W.H.useEffectEvent(A)},ce.useId=function(){return W.H.useId()},ce.useImperativeHandle=function(A,_,J){return W.H.useImperativeHandle(A,_,J)},ce.useInsertionEffect=function(A,_){return W.H.useInsertionEffect(A,_)},ce.useLayoutEffect=function(A,_){return W.H.useLayoutEffect(A,_)},ce.useMemo=function(A,_){return W.H.useMemo(A,_)},ce.useOptimistic=function(A,_){return W.H.useOptimistic(A,_)},ce.useReducer=function(A,_,J){return W.H.useReducer(A,_,J)},ce.useRef=function(A){return W.H.useRef(A)},ce.useState=function(A){return W.H.useState(A)},ce.useSyncExternalStore=function(A,_,J){return W.H.useSyncExternalStore(A,_,J)},ce.useTransition=function(){return W.H.useTransition()},ce.version="19.2.4",ce}var Rp;function Jc(){return Rp||(Rp=1,Wu.exports=GS()),Wu.exports}var P=Jc(),$u={exports:{}},Ai={},Iu={exports:{}},ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function PS(){return wp||(wp=1,(function(n){function i(j,Q){var $=j.length;j.push(Q);e:for(;0<$;){var fe=$-1>>>1,k=j[fe];if(0<c(k,Q))j[fe]=Q,j[$]=k,$=fe;else break e}}function s(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var Q=j[0],$=j.pop();if($!==Q){j[0]=$;e:for(var fe=0,k=j.length,A=k>>>1;fe<A;){var _=2*(fe+1)-1,J=j[_],F=_+1,oe=j[F];if(0>c(J,$))F<k&&0>c(oe,J)?(j[fe]=oe,j[F]=$,fe=F):(j[fe]=J,j[_]=$,fe=_);else if(F<k&&0>c(oe,$))j[fe]=oe,j[F]=$,fe=F;else break e}}return Q}function c(j,Q){var $=j.sortIndex-Q.sortIndex;return $!==0?$:j.id-Q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var h=[],g=[],y=1,b=null,S=3,z=!1,O=!1,L=!1,U=!1,H=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function Z(j){for(var Q=s(g);Q!==null;){if(Q.callback===null)r(g);else if(Q.startTime<=j)r(g),Q.sortIndex=Q.expirationTime,i(h,Q);else break;Q=s(g)}}function Y(j){if(L=!1,Z(j),!O)if(s(h)!==null)O=!0,ie||(ie=!0,Re());else{var Q=s(g);Q!==null&&Ge(Y,Q.startTime-j)}}var ie=!1,W=-1,B=5,se=-1;function Ce(){return U?!0:!(n.unstable_now()-se<B)}function _e(){if(U=!1,ie){var j=n.unstable_now();se=j;var Q=!0;try{e:{O=!1,L&&(L=!1,X(W),W=-1),z=!0;var $=S;try{t:{for(Z(j),b=s(h);b!==null&&!(b.expirationTime>j&&Ce());){var fe=b.callback;if(typeof fe=="function"){b.callback=null,S=b.priorityLevel;var k=fe(b.expirationTime<=j);if(j=n.unstable_now(),typeof k=="function"){b.callback=k,Z(j),Q=!0;break t}b===s(h)&&r(h),Z(j)}else r(h);b=s(h)}if(b!==null)Q=!0;else{var A=s(g);A!==null&&Ge(Y,A.startTime-j),Q=!1}}break e}finally{b=null,S=$,z=!1}Q=void 0}}finally{Q?Re():ie=!1}}}var Re;if(typeof G=="function")Re=function(){G(_e)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,ut=pt.port2;pt.port1.onmessage=_e,Re=function(){ut.postMessage(null)}}else Re=function(){H(_e,0)};function Ge(j,Q){W=H(function(){j(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(j){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var $=S;S=Q;try{return j()}finally{S=$}},n.unstable_requestPaint=function(){U=!0},n.unstable_runWithPriority=function(j,Q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var $=S;S=j;try{return Q()}finally{S=$}},n.unstable_scheduleCallback=function(j,Q,$){var fe=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?fe+$:fe):$=fe,j){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=$+k,j={id:y++,callback:Q,priorityLevel:j,startTime:$,expirationTime:k,sortIndex:-1},$>fe?(j.sortIndex=$,i(g,j),s(h)===null&&j===s(g)&&(L?(X(W),W=-1):L=!0,Ge(Y,$-fe))):(j.sortIndex=k,i(h,j),O||z||(O=!0,ie||(ie=!0,Re()))),j},n.unstable_shouldYield=Ce,n.unstable_wrapCallback=function(j){var Q=S;return function(){var $=S;S=Q;try{return j.apply(this,arguments)}finally{S=$}}}})(ec)),ec}var Vp;function kS(){return Vp||(Vp=1,Iu.exports=PS()),Iu.exports}var tc={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function YS(){if(_p)return ct;_p=1;var n=Jc();function i(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(h,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:h,containerInfo:g,implementation:y}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ct.createPortal=function(h,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return f(h,g,null,y)},ct.flushSync=function(h){var g=d.T,y=r.p;try{if(d.T=null,r.p=2,h)return h()}finally{d.T=g,r.p=y,r.d.f()}},ct.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(h,g))},ct.prefetchDNS=function(h){typeof h=="string"&&r.d.D(h)},ct.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var y=g.as,b=p(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,z=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:z}):y==="script"&&r.d.X(h,{crossOrigin:b,integrity:S,fetchPriority:z,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ct.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=p(g.as,g.crossOrigin);r.d.M(h,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(h)},ct.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=p(y,g.crossOrigin);r.d.L(h,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ct.preloadModule=function(h,g){if(typeof h=="string")if(g){var y=p(g.as,g.crossOrigin);r.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(h)},ct.requestFormReset=function(h){r.d.r(h)},ct.unstable_batchedUpdates=function(h,g){return h(g)},ct.useFormState=function(h,g,y){return d.H.useFormState(h,g,y)},ct.useFormStatus=function(){return d.H.useHostTransitionStatus()},ct.version="19.2.4",ct}var Bp;function XS(){if(Bp)return tc.exports;Bp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),tc.exports=YS(),tc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function JS(){if(Lp)return Ai;Lp=1;var n=kS(),i=Jc(),s=XS();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(f(e)!==e)throw Error(r(188))}function g(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,o=t;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){a=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return h(l),e;if(u===o)return h(l),t;u=u.sibling}throw Error(r(188))}if(a.return!==o.return)a=l,o=u;else{for(var m=!1,v=l.child;v;){if(v===a){m=!0,a=l,o=u;break}if(v===o){m=!0,o=l,a=u;break}v=v.sibling}if(!m){for(v=u.child;v;){if(v===a){m=!0,a=u,o=l;break}if(v===o){m=!0,o=u,a=l;break}v=v.sibling}if(!m)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),G=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),_e=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var pt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case H:return"Profiler";case U:return"StrictMode";case Y:return"Suspense";case ie:return"SuspenseList";case se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case G:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:ut(e.type)||"Memo";case B:t=e._payload,e=e._init;try{return ut(e(t))}catch{}}return null}var Ge=Array.isArray,j=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},fe=[],k=-1;function A(e){return{current:e}}function _(e){0>k||(e.current=fe[k],fe[k]=null,k--)}function J(e,t){k++,fe[k]=e.current,e.current=t}var F=A(null),oe=A(null),le=A(null),Se=A(null);function Ie(e,t){switch(J(le,t),J(oe,e),J(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ih(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ih(t),e=ep(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(F),J(F,e)}function he(){_(F),_(oe),_(le)}function Da(e){e.memoizedState!==null&&J(Se,e);var t=F.current,a=ep(t,e.type);t!==a&&(J(oe,e),J(F,a))}function sa(e){oe.current===e&&(_(F),_(oe)),Se.current===e&&(_(Se),bi._currentValue=$)}var za,wn;function Rt(e){if(za===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);za=t&&t[1]||"",wn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+za+e+wn}var Rr=!1;function wr(e,t){if(!e||Rr)return"";Rr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(q){var N=q}Reflect.construct(e,[],V)}else{try{V.call()}catch(q){N=q}e.call(V.prototype)}}else{try{throw Error()}catch(q){N=q}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(q){if(q&&N&&typeof q.stack=="string")return[q.stack,N.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),m=u[0],v=u[1];if(m&&v){var x=m.split(`
`),D=v.split(`
`);for(l=o=0;o<x.length&&!x[o].includes("DetermineComponentFrameRoot");)o++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(o===x.length||l===D.length)for(o=x.length-1,l=D.length-1;1<=o&&0<=l&&x[o]!==D[l];)l--;for(;1<=o&&0<=l;o--,l--)if(x[o]!==D[l]){if(o!==1||l!==1)do if(o--,l--,0>l||x[o]!==D[l]){var R=`
`+x[o].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=o&&0<=l);break}}}finally{Rr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Rt(a):""}function v0(e,t){switch(e.tag){case 26:case 27:case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return e.child!==t&&t!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return wr(e.type,!1);case 11:return wr(e.type.render,!1);case 1:return wr(e.type,!0);case 31:return Rt("Activity");default:return""}}function Nd(e){try{var t="",a=null;do t+=v0(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Vr=Object.prototype.hasOwnProperty,_r=n.unstable_scheduleCallback,Br=n.unstable_cancelCallback,y0=n.unstable_shouldYield,b0=n.unstable_requestPaint,Et=n.unstable_now,S0=n.unstable_getCurrentPriorityLevel,qd=n.unstable_ImmediatePriority,Od=n.unstable_UserBlockingPriority,ki=n.unstable_NormalPriority,T0=n.unstable_LowPriority,jd=n.unstable_IdlePriority,x0=n.log,E0=n.unstable_setDisableYieldValue,Oo=null,At=null;function Na(e){if(typeof x0=="function"&&E0(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Oo,e)}catch{}}var Ct=Math.clz32?Math.clz32:M0,A0=Math.log,C0=Math.LN2;function M0(e){return e>>>=0,e===0?32:31-(A0(e)/C0|0)|0}var Yi=256,Xi=262144,Ji=4194304;function un(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zi(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=o&134217727;return v!==0?(o=v&~u,o!==0?l=un(o):(m&=v,m!==0?l=un(m):a||(a=v&~e,a!==0&&(l=un(a))))):(v=o&~u,v!==0?l=un(v):m!==0?l=un(m):a||(a=o&~e,a!==0&&(l=un(a)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:l}function jo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function D0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(){var e=Ji;return Ji<<=1,(Ji&62914560)===0&&(Ji=4194304),e}function Lr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ro(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function z0(e,t,a,o,l,u){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var v=e.entanglements,x=e.expirationTimes,D=e.hiddenUpdates;for(a=m&~a;0<a;){var R=31-Ct(a),V=1<<R;v[R]=0,x[R]=-1;var N=D[R];if(N!==null)for(D[R]=null,R=0;R<N.length;R++){var q=N[R];q!==null&&(q.lane&=-536870913)}a&=~V}o!==0&&wd(e,o,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function wd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Ct(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Vd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Ct(a),l=1<<o;l&t|e[o]&t&&(e[o]|=t),a&=~l}}function _d(e,t){var a=t&-t;return a=(a&42)!==0?1:Ur(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ur(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bd(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Ep(e.type))}function Ld(e,t){var a=Q.p;try{return Q.p=e,t()}finally{Q.p=a}}var qa=Math.random().toString(36).slice(2),nt="__reactFiber$"+qa,gt="__reactProps$"+qa,Vn="__reactContainer$"+qa,Qr="__reactEvents$"+qa,N0="__reactListeners$"+qa,q0="__reactHandles$"+qa,Ud="__reactResources$"+qa,wo="__reactMarker$"+qa;function Gr(e){delete e[nt],delete e[gt],delete e[Qr],delete e[N0],delete e[q0]}function _n(e){var t=e[nt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Vn]||a[nt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=rp(e);e!==null;){if(a=e[nt])return a;e=rp(e)}return t}e=a,a=e.parentNode}return null}function Bn(e){if(e=e[nt]||e[Vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Ln(e){var t=e[Ud];return t||(t=e[Ud]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[wo]=!0}var Hd=new Set,Qd={};function cn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(Qd[e]=t,e=0;e<t.length;e++)Hd.add(t[e])}var O0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gd={},Pd={};function j0(e){return Vr.call(Pd,e)?!0:Vr.call(Gd,e)?!1:O0.test(e)?Pd[e]=!0:(Gd[e]=!0,!1)}function Ki(e,t,a){if(j0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Fi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ra(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R0(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){a=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){if(!e._valueTracker){var t=kd(e)?"checked":"value";e._valueTracker=R0(e,t,""+e[t])}}function Yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=kd(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var w0=/[\n"\\]/g;function Vt(e){return e.replace(w0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function kr(e,t,a,o,l,u,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Yr(e,m,wt(t)):a!=null?Yr(e,m,wt(a)):o!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+wt(v):e.removeAttribute("name")}function Xd(e,t,a,o,l,u,m,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Pr(e);return}a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,v||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=v?e.checked:!!o,e.defaultChecked=!!o,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Pr(e)}function Yr(e,t,a){t==="number"&&Wi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Hn(e,t,a,o){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&o&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Jd(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function Zd(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(r(92));if(Ge(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Pr(e)}function Qn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var V0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kd(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||V0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Fd(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var l in t)o=t[l],t.hasOwnProperty(l)&&a[l]!==o&&Kd(e,l,o)}else for(var u in t)t.hasOwnProperty(u)&&Kd(e,u,t[u])}function Xr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $i(e){return B0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var Jr=null;function Zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gn=null,Pn=null;function Wd(e){var t=Bn(e);if(t&&(e=t.stateNode)){var a=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(kr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var l=o[gt]||null;if(!l)throw Error(r(90));kr(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&Yd(o)}break e;case"textarea":Jd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Hn(e,!!a.multiple,t,!1)}}}var Kr=!1;function $d(e,t,a){if(Kr)return e(t,a);Kr=!0;try{var o=e(t);return o}finally{if(Kr=!1,(Gn!==null||Pn!==null)&&(Us(),Gn&&(t=Gn,e=Pn,Pn=Gn=null,Wd(t),e)))for(t=0;t<e.length;t++)Wd(e[t])}}function _o(e,t){var a=e.stateNode;if(a===null)return null;var o=a[gt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fr=!1;if(ua)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){Fr=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{Fr=!1}var Oa=null,Wr=null,Ii=null;function Id(){if(Ii)return Ii;var e,t=Wr,a=t.length,o,l="value"in Oa?Oa.value:Oa.textContent,u=l.length;for(e=0;e<a&&t[e]===l[e];e++);var m=a-e;for(o=1;o<=m&&t[a-o]===l[u-o];o++);return Ii=l.slice(e,1<o?1-o:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function em(){return!1}function vt(e){function t(a,o,l,u,m){this._reactName=a,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(a=e[v],this[v]=a?a(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ts:em,this.isPropagationStopped=em,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=vt(dn),Lo=b({},dn,{view:0,detail:0}),L0=vt(Lo),$r,Ir,Uo,ns=b({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?($r=e.screenX-Uo.screenX,Ir=e.screenY-Uo.screenY):Ir=$r=0,Uo=e),$r)},movementY:function(e){return"movementY"in e?e.movementY:Ir}}),tm=vt(ns),U0=b({},ns,{dataTransfer:0}),H0=vt(U0),Q0=b({},Lo,{relatedTarget:0}),el=vt(Q0),G0=b({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),P0=vt(G0),k0=b({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y0=vt(k0),X0=b({},dn,{data:0}),am=vt(X0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K0[e])?!!t[e]:!1}function tl(){return F0}var W0=b({},Lo,{key:function(e){if(e.key){var t=J0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$0=vt(W0),I0=b({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=vt(I0),eb=b({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),tb=vt(eb),ab=b({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),nb=vt(ab),ob=b({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ib=vt(ob),sb=b({},dn,{newState:0,oldState:0}),rb=vt(sb),lb=[9,13,27,32],al=ua&&"CompositionEvent"in window,Ho=null;ua&&"documentMode"in document&&(Ho=document.documentMode);var ub=ua&&"TextEvent"in window&&!Ho,om=ua&&(!al||Ho&&8<Ho&&11>=Ho),im=" ",sm=!1;function rm(e,t){switch(e){case"keyup":return lb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function cb(e,t){switch(e){case"compositionend":return lm(t);case"keypress":return t.which!==32?null:(sm=!0,im);case"textInput":return e=t.data,e===im&&sm?null:e;default:return null}}function db(e,t){if(kn)return e==="compositionend"||!al&&rm(e,t)?(e=Id(),Ii=Wr=Oa=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return om&&t.locale!=="ko"?null:t.data;default:return null}}var mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mb[e.type]:t==="textarea"}function cm(e,t,a,o){Gn?Pn?Pn.push(o):Pn=[o]:Gn=o,t=Xs(t,"onChange"),0<t.length&&(a=new as("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Qo=null,Go=null;function fb(e){Jh(e,0)}function os(e){var t=Vo(e);if(Yd(t))return e}function dm(e,t){if(e==="change")return t}var mm=!1;if(ua){var nl;if(ua){var ol="oninput"in document;if(!ol){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),ol=typeof fm.oninput=="function"}nl=ol}else nl=!1;mm=nl&&(!document.documentMode||9<document.documentMode)}function hm(){Qo&&(Qo.detachEvent("onpropertychange",pm),Go=Qo=null)}function pm(e){if(e.propertyName==="value"&&os(Go)){var t=[];cm(t,Go,e,Zr(e)),$d(fb,t)}}function hb(e,t,a){e==="focusin"?(hm(),Qo=t,Go=a,Qo.attachEvent("onpropertychange",pm)):e==="focusout"&&hm()}function pb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return os(Go)}function gb(e,t){if(e==="click")return os(t)}function vb(e,t){if(e==="input"||e==="change")return os(t)}function yb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:yb;function Po(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var l=a[o];if(!Vr.call(t,l)||!Mt(e[l],t[l]))return!1}return!0}function gm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vm(e,t){var a=gm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gm(a)}}function ym(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ym(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wi(e.document)}return t}function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var bb=ua&&"documentMode"in document&&11>=document.documentMode,Yn=null,sl=null,ko=null,rl=!1;function Sm(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rl||Yn==null||Yn!==Wi(o)||(o=Yn,"selectionStart"in o&&il(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ko&&Po(ko,o)||(ko=o,o=Xs(sl,"onSelect"),0<o.length&&(t=new as("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Yn)))}function mn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Xn={animationend:mn("Animation","AnimationEnd"),animationiteration:mn("Animation","AnimationIteration"),animationstart:mn("Animation","AnimationStart"),transitionrun:mn("Transition","TransitionRun"),transitionstart:mn("Transition","TransitionStart"),transitioncancel:mn("Transition","TransitionCancel"),transitionend:mn("Transition","TransitionEnd")},ll={},Tm={};ua&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function fn(e){if(ll[e])return ll[e];if(!Xn[e])return e;var t=Xn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Tm)return ll[e]=t[a];return e}var xm=fn("animationend"),Em=fn("animationiteration"),Am=fn("animationstart"),Sb=fn("transitionrun"),Tb=fn("transitionstart"),xb=fn("transitioncancel"),Cm=fn("transitionend"),Mm=new Map,ul="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ul.push("scrollEnd");function Xt(e,t){Mm.set(e,t),cn(t,[e])}var is=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],Jn=0,cl=0;function ss(){for(var e=Jn,t=cl=Jn=0;t<e;){var a=_t[t];_t[t++]=null;var o=_t[t];_t[t++]=null;var l=_t[t];_t[t++]=null;var u=_t[t];if(_t[t++]=null,o!==null&&l!==null){var m=o.pending;m===null?l.next=l:(l.next=m.next,m.next=l),o.pending=l}u!==0&&Dm(a,l,u)}}function rs(e,t,a,o){_t[Jn++]=e,_t[Jn++]=t,_t[Jn++]=a,_t[Jn++]=o,cl|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function dl(e,t,a,o){return rs(e,t,a,o),ls(e)}function hn(e,t){return rs(e,null,null,t),ls(e)}function Dm(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-Ct(a),e=u.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=a|536870912),u):null}function ls(e){if(50<mi)throw mi=0,Su=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zn={};function Eb(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,a,o){return new Eb(e,t,a,o)}function ml(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,t){var a=e.alternate;return a===null?(a=Dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zm(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function us(e,t,a,o,l,u){var m=0;if(o=e,typeof e=="function")ml(e)&&(m=1);else if(typeof e=="string")m=zS(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case se:return e=Dt(31,a,t,l),e.elementType=se,e.lanes=u,e;case L:return pn(a.children,l,u,t);case U:m=8,l|=24;break;case H:return e=Dt(12,a,t,l|2),e.elementType=H,e.lanes=u,e;case Y:return e=Dt(13,a,t,l),e.elementType=Y,e.lanes=u,e;case ie:return e=Dt(19,a,t,l),e.elementType=ie,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:m=10;break e;case X:m=9;break e;case Z:m=11;break e;case W:m=14;break e;case B:m=16,o=null;break e}m=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return t=Dt(m,a,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function pn(e,t,a,o){return e=Dt(7,e,o,t),e.lanes=a,e}function fl(e,t,a){return e=Dt(6,e,null,t),e.lanes=a,e}function Nm(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function hl(e,t,a){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qm=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var a=qm.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Nd(t)},qm.set(e,t),t)}return{value:e,source:t,stack:Nd(t)}}var Kn=[],Fn=0,cs=null,Yo=0,Lt=[],Ut=0,ja=null,It=1,ea="";function da(e,t){Kn[Fn++]=Yo,Kn[Fn++]=cs,cs=e,Yo=t}function Om(e,t,a){Lt[Ut++]=It,Lt[Ut++]=ea,Lt[Ut++]=ja,ja=e;var o=It;e=ea;var l=32-Ct(o)-1;o&=~(1<<l),a+=1;var u=32-Ct(t)+l;if(30<u){var m=l-l%5;u=(o&(1<<m)-1).toString(32),o>>=m,l-=m,It=1<<32-Ct(t)+l|a<<l|o,ea=u+e}else It=1<<u|a<<l|o,ea=e}function pl(e){e.return!==null&&(da(e,1),Om(e,1,0))}function gl(e){for(;e===cs;)cs=Kn[--Fn],Kn[Fn]=null,Yo=Kn[--Fn],Kn[Fn]=null;for(;e===ja;)ja=Lt[--Ut],Lt[Ut]=null,ea=Lt[--Ut],Lt[Ut]=null,It=Lt[--Ut],Lt[Ut]=null}function jm(e,t){Lt[Ut++]=It,Lt[Ut++]=ea,Lt[Ut++]=ja,It=t.id,ea=t.overflow,ja=e}var ot=null,we=null,Te=!1,Ra=null,Ht=!1,vl=Error(r(519));function wa(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(Bt(t,e)),vl}function Rm(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[nt]=e,t[gt]=o,a){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(a=0;a<hi.length;a++)ve(hi[a],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),Xd(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),Zd(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Wh(t.textContent,a)?(o.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),o.onScroll!=null&&ve("scroll",t),o.onScrollEnd!=null&&ve("scrollend",t),o.onClick!=null&&(t.onclick=la),t=!0):t=!1,t||wa(e,!0)}function wm(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:ot=ot.return}}function Wn(e){if(e!==ot)return!1;if(!Te)return wm(e),Te=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vu(e.type,e.memoizedProps)),a=!a),a&&we&&wa(e),wm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));we=sp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));we=sp(e)}else t===27?(t=we,Za(e.type)?(e=Hu,Hu=null,we=e):we=t):we=ot?Gt(e.stateNode.nextSibling):null;return!0}function gn(){we=ot=null,Te=!1}function yl(){var e=Ra;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),Ra=null),e}function Xo(e){Ra===null?Ra=[e]:Ra.push(e)}var bl=A(null),vn=null,ma=null;function Va(e,t,a){J(bl,t._currentValue),t._currentValue=a}function fa(e){e._currentValue=bl.current,_(bl)}function Sl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Tl(e,t,a,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var m=l.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=l;for(var x=0;x<t.length;x++)if(v.context===t[x]){u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),Sl(u.return,a,e),o||(m=null);break e}u=v.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(r(341));m.lanes|=a,u=m.alternate,u!==null&&(u.lanes|=a),Sl(m,a,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function $n(e,t,a,o){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(r(387));if(m=m.memoizedProps,m!==null){var v=l.type;Mt(l.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(l===Se.current){if(m=l.alternate,m===null)throw Error(r(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(bi):e=[bi])}l=l.return}e!==null&&Tl(t,e,a,o),t.flags|=262144}function ds(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yn(e){vn=e,ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return Vm(vn,e)}function ms(e,t){return vn===null&&yn(e),Vm(e,t)}function Vm(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ma===null){if(e===null)throw Error(r(308));ma=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ma=ma.next=t;return a}var Ab=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Cb=n.unstable_scheduleCallback,Mb=n.unstable_NormalPriority,Ye={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xl(){return{controller:new Ab,data:new Map,refCount:0}}function Jo(e){e.refCount--,e.refCount===0&&Cb(Mb,function(){e.controller.abort()})}var Zo=null,El=0,In=0,eo=null;function Db(e,t){if(Zo===null){var a=Zo=[];El=0,In=Mu(),eo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return El++,t.then(_m,_m),t}function _m(){if(--El===0&&Zo!==null){eo!==null&&(eo.status="fulfilled");var e=Zo;Zo=null,In=0,eo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zb(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),o}var Bm=j.S;j.S=function(e,t){Th=Et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Db(e,t),Bm!==null&&Bm(e,t)};var bn=A(null);function Al(){var e=bn.current;return e!==null?e:Oe.pooledCache}function fs(e,t){t===null?J(bn,bn.current):J(bn,t.pool)}function Lm(){var e=Al();return e===null?null:{parent:Ye._currentValue,pool:e}}var to=Error(r(460)),Cl=Error(r(474)),hs=Error(r(542)),ps={then:function(){}};function Um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hm(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(la,la),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gm(e),e;default:if(typeof t.status=="string")t.then(la,la);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=o}},function(o){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gm(e),e}throw Tn=t,to}}function Sn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Tn=a,to):a}}var Tn=null;function Qm(){if(Tn===null)throw Error(r(459));var e=Tn;return Tn=null,e}function Gm(e){if(e===to||e===hs)throw Error(r(483))}var ao=null,Ko=0;function gs(e){var t=Ko;return Ko+=1,ao===null&&(ao=[]),Hm(ao,e,t)}function Fo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vs(e,t){throw t.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Pm(e){function t(C,E){if(e){var M=C.deletions;M===null?(C.deletions=[E],C.flags|=16):M.push(E)}}function a(C,E){if(!e)return null;for(;E!==null;)t(C,E),E=E.sibling;return null}function o(C){for(var E=new Map;C!==null;)C.key!==null?E.set(C.key,C):E.set(C.index,C),C=C.sibling;return E}function l(C,E){return C=ca(C,E),C.index=0,C.sibling=null,C}function u(C,E,M){return C.index=M,e?(M=C.alternate,M!==null?(M=M.index,M<E?(C.flags|=67108866,E):M):(C.flags|=67108866,E)):(C.flags|=1048576,E)}function m(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function v(C,E,M,w){return E===null||E.tag!==6?(E=fl(M,C.mode,w),E.return=C,E):(E=l(E,M),E.return=C,E)}function x(C,E,M,w){var re=M.type;return re===L?R(C,E,M.props.children,w,M.key):E!==null&&(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===B&&Sn(re)===E.type)?(E=l(E,M.props),Fo(E,M),E.return=C,E):(E=us(M.type,M.key,M.props,null,C.mode,w),Fo(E,M),E.return=C,E)}function D(C,E,M,w){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=hl(M,C.mode,w),E.return=C,E):(E=l(E,M.children||[]),E.return=C,E)}function R(C,E,M,w,re){return E===null||E.tag!==7?(E=pn(M,C.mode,w,re),E.return=C,E):(E=l(E,M),E.return=C,E)}function V(C,E,M){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=fl(""+E,C.mode,M),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case z:return M=us(E.type,E.key,E.props,null,C.mode,M),Fo(M,E),M.return=C,M;case O:return E=hl(E,C.mode,M),E.return=C,E;case B:return E=Sn(E),V(C,E,M)}if(Ge(E)||Re(E))return E=pn(E,C.mode,M,null),E.return=C,E;if(typeof E.then=="function")return V(C,gs(E),M);if(E.$$typeof===G)return V(C,ms(C,E),M);vs(C,E)}return null}function N(C,E,M,w){var re=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return re!==null?null:v(C,E,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case z:return M.key===re?x(C,E,M,w):null;case O:return M.key===re?D(C,E,M,w):null;case B:return M=Sn(M),N(C,E,M,w)}if(Ge(M)||Re(M))return re!==null?null:R(C,E,M,w,null);if(typeof M.then=="function")return N(C,E,gs(M),w);if(M.$$typeof===G)return N(C,E,ms(C,M),w);vs(C,M)}return null}function q(C,E,M,w,re){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return C=C.get(M)||null,v(E,C,""+w,re);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case z:return C=C.get(w.key===null?M:w.key)||null,x(E,C,w,re);case O:return C=C.get(w.key===null?M:w.key)||null,D(E,C,w,re);case B:return w=Sn(w),q(C,E,M,w,re)}if(Ge(w)||Re(w))return C=C.get(M)||null,R(E,C,w,re,null);if(typeof w.then=="function")return q(C,E,M,gs(w),re);if(w.$$typeof===G)return q(C,E,M,ms(E,w),re);vs(E,w)}return null}function I(C,E,M,w){for(var re=null,xe=null,ne=E,me=E=0,be=null;ne!==null&&me<M.length;me++){ne.index>me?(be=ne,ne=null):be=ne.sibling;var Ee=N(C,ne,M[me],w);if(Ee===null){ne===null&&(ne=be);break}e&&ne&&Ee.alternate===null&&t(C,ne),E=u(Ee,E,me),xe===null?re=Ee:xe.sibling=Ee,xe=Ee,ne=be}if(me===M.length)return a(C,ne),Te&&da(C,me),re;if(ne===null){for(;me<M.length;me++)ne=V(C,M[me],w),ne!==null&&(E=u(ne,E,me),xe===null?re=ne:xe.sibling=ne,xe=ne);return Te&&da(C,me),re}for(ne=o(ne);me<M.length;me++)be=q(ne,C,me,M[me],w),be!==null&&(e&&be.alternate!==null&&ne.delete(be.key===null?me:be.key),E=u(be,E,me),xe===null?re=be:xe.sibling=be,xe=be);return e&&ne.forEach(function(Ia){return t(C,Ia)}),Te&&da(C,me),re}function ue(C,E,M,w){if(M==null)throw Error(r(151));for(var re=null,xe=null,ne=E,me=E=0,be=null,Ee=M.next();ne!==null&&!Ee.done;me++,Ee=M.next()){ne.index>me?(be=ne,ne=null):be=ne.sibling;var Ia=N(C,ne,Ee.value,w);if(Ia===null){ne===null&&(ne=be);break}e&&ne&&Ia.alternate===null&&t(C,ne),E=u(Ia,E,me),xe===null?re=Ia:xe.sibling=Ia,xe=Ia,ne=be}if(Ee.done)return a(C,ne),Te&&da(C,me),re;if(ne===null){for(;!Ee.done;me++,Ee=M.next())Ee=V(C,Ee.value,w),Ee!==null&&(E=u(Ee,E,me),xe===null?re=Ee:xe.sibling=Ee,xe=Ee);return Te&&da(C,me),re}for(ne=o(ne);!Ee.done;me++,Ee=M.next())Ee=q(ne,C,me,Ee.value,w),Ee!==null&&(e&&Ee.alternate!==null&&ne.delete(Ee.key===null?me:Ee.key),E=u(Ee,E,me),xe===null?re=Ee:xe.sibling=Ee,xe=Ee);return e&&ne.forEach(function(US){return t(C,US)}),Te&&da(C,me),re}function qe(C,E,M,w){if(typeof M=="object"&&M!==null&&M.type===L&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case z:e:{for(var re=M.key;E!==null;){if(E.key===re){if(re=M.type,re===L){if(E.tag===7){a(C,E.sibling),w=l(E,M.props.children),w.return=C,C=w;break e}}else if(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===B&&Sn(re)===E.type){a(C,E.sibling),w=l(E,M.props),Fo(w,M),w.return=C,C=w;break e}a(C,E);break}else t(C,E);E=E.sibling}M.type===L?(w=pn(M.props.children,C.mode,w,M.key),w.return=C,C=w):(w=us(M.type,M.key,M.props,null,C.mode,w),Fo(w,M),w.return=C,C=w)}return m(C);case O:e:{for(re=M.key;E!==null;){if(E.key===re)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){a(C,E.sibling),w=l(E,M.children||[]),w.return=C,C=w;break e}else{a(C,E);break}else t(C,E);E=E.sibling}w=hl(M,C.mode,w),w.return=C,C=w}return m(C);case B:return M=Sn(M),qe(C,E,M,w)}if(Ge(M))return I(C,E,M,w);if(Re(M)){if(re=Re(M),typeof re!="function")throw Error(r(150));return M=re.call(M),ue(C,E,M,w)}if(typeof M.then=="function")return qe(C,E,gs(M),w);if(M.$$typeof===G)return qe(C,E,ms(C,M),w);vs(C,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,E!==null&&E.tag===6?(a(C,E.sibling),w=l(E,M),w.return=C,C=w):(a(C,E),w=fl(M,C.mode,w),w.return=C,C=w),m(C)):a(C,E)}return function(C,E,M,w){try{Ko=0;var re=qe(C,E,M,w);return ao=null,re}catch(ne){if(ne===to||ne===hs)throw ne;var xe=Dt(29,ne,null,C.mode);return xe.lanes=w,xe.return=C,xe}finally{}}}var xn=Pm(!0),km=Pm(!1),_a=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ae&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=ls(e),Dm(e,null,a),t}return rs(e,o,t,a),ls(e)}function Wo(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Vd(e,a)}}function zl(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=m:u=u.next=m,a=a.next}while(a!==null);u===null?l=u=t:u=u.next=t}else l=u=t;a={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Nl=!1;function $o(){if(Nl){var e=eo;if(e!==null)throw e}}function Io(e,t,a,o){Nl=!1;var l=e.updateQueue;_a=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var x=v,D=x.next;x.next=null,m===null?u=D:m.next=D,m=x;var R=e.alternate;R!==null&&(R=R.updateQueue,v=R.lastBaseUpdate,v!==m&&(v===null?R.firstBaseUpdate=D:v.next=D,R.lastBaseUpdate=x))}if(u!==null){var V=l.baseState;m=0,R=D=x=null,v=u;do{var N=v.lane&-536870913,q=N!==v.lane;if(q?(ye&N)===N:(o&N)===N){N!==0&&N===In&&(Nl=!0),R!==null&&(R=R.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var I=e,ue=v;N=t;var qe=a;switch(ue.tag){case 1:if(I=ue.payload,typeof I=="function"){V=I.call(qe,V,N);break e}V=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=ue.payload,N=typeof I=="function"?I.call(qe,V,N):I,N==null)break e;V=b({},V,N);break e;case 2:_a=!0}}N=v.callback,N!==null&&(e.flags|=64,q&&(e.flags|=8192),q=l.callbacks,q===null?l.callbacks=[N]:q.push(N))}else q={lane:N,tag:v.tag,payload:v.payload,callback:v.callback,next:null},R===null?(D=R=q,x=V):R=R.next=q,m|=N;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;q=v,v=q.next,q.next=null,l.lastBaseUpdate=q,l.shared.pending=null}}while(!0);R===null&&(x=V),l.baseState=x,l.firstBaseUpdate=D,l.lastBaseUpdate=R,u===null&&(l.shared.lanes=0),Pa|=m,e.lanes=m,e.memoizedState=V}}function Ym(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Xm(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ym(a[e],t)}var no=A(null),ys=A(0);function Jm(e,t){e=xa,J(ys,e),J(no,t),xa=e|t.baseLanes}function ql(){J(ys,xa),J(no,no.current)}function Ol(){xa=ys.current,_(no),_(ys)}var zt=A(null),Qt=null;function Ua(e){var t=e.alternate;J(Pe,Pe.current&1),J(zt,e),Qt===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(Qt=e)}function jl(e){J(Pe,Pe.current),J(zt,e),Qt===null&&(Qt=e)}function Zm(e){e.tag===22?(J(Pe,Pe.current),J(zt,e),Qt===null&&(Qt=e)):Ha()}function Ha(){J(Pe,Pe.current),J(zt,zt.current)}function Nt(e){_(zt),Qt===e&&(Qt=null),_(Pe)}var Pe=A(0);function bs(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lu(a)||Uu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,de=null,ze=null,Xe=null,Ss=!1,oo=!1,En=!1,Ts=0,ei=0,io=null,Nb=0;function Ue(){throw Error(r(321))}function Rl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Mt(e[a],t[a]))return!1;return!0}function wl(e,t,a,o,l,u){return ha=u,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?jf:Kl,En=!1,u=a(o,l),En=!1,oo&&(u=Fm(t,a,o,l)),Km(e),u}function Km(e){j.H=ni;var t=ze!==null&&ze.next!==null;if(ha=0,Xe=ze=de=null,Ss=!1,ei=0,io=null,t)throw Error(r(300));e===null||Je||(e=e.dependencies,e!==null&&ds(e)&&(Je=!0))}function Fm(e,t,a,o){de=e;var l=0;do{if(oo&&(io=null),ei=0,oo=!1,25<=l)throw Error(r(301));if(l+=1,Xe=ze=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}j.H=Rf,u=t(a,o)}while(oo);return u}function qb(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?ti(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(de.flags|=1024),t}function Vl(){var e=Ts!==0;return Ts=0,e}function _l(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Bl(e){if(Ss){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ss=!1}ha=0,Xe=ze=de=null,oo=!1,ei=Ts=0,io=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?de.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function ke(){if(ze===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Xe===null?de.memoizedState:Xe.next;if(t!==null)Xe=t,ze=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Xe===null?de.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function xs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ti(e){var t=ei;return ei+=1,io===null&&(io=[]),e=Hm(io,e,t),t=de,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?jf:Kl),e}function Es(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ti(e);if(e.$$typeof===G)return it(e)}throw Error(r(438,String(e)))}function Ll(e){var t=null,a=de.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=xs(),de.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=Ce;return t.index++,a}function pa(e,t){return typeof t=="function"?t(e):t}function As(e){var t=ke();return Ul(t,ze,e)}function Ul(e,t,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var l=e.baseQueue,u=o.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}t.baseQueue=l=u,o.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var v=m=null,x=null,D=t,R=!1;do{var V=D.lane&-536870913;if(V!==D.lane?(ye&V)===V:(ha&V)===V){var N=D.revertLane;if(N===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),V===In&&(R=!0);else if((ha&N)===N){D=D.next,N===In&&(R=!0);continue}else V={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},x===null?(v=x=V,m=u):x=x.next=V,de.lanes|=N,Pa|=N;V=D.action,En&&a(u,V),u=D.hasEagerState?D.eagerState:a(u,V)}else N={lane:V,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},x===null?(v=x=N,m=u):x=x.next=N,de.lanes|=V,Pa|=V;D=D.next}while(D!==null&&D!==t);if(x===null?m=u:x.next=v,!Mt(u,e.memoizedState)&&(Je=!0,R&&(a=eo,a!==null)))throw a;e.memoizedState=u,e.baseState=m,e.baseQueue=x,o.lastRenderedState=u}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Hl(e){var t=ke(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,l=a.pending,u=t.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);Mt(u,t.memoizedState)||(Je=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function Wm(e,t,a){var o=de,l=ke(),u=Te;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=t();var m=!Mt((ze||l).memoizedState,a);if(m&&(l.memoizedState=a,Je=!0),l=l.queue,Pl(ef.bind(null,o,l,e),[e]),l.getSnapshot!==t||m||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,so(9,{destroy:void 0},Im.bind(null,o,l,a,t),null),Oe===null)throw Error(r(349));u||(ha&127)!==0||$m(o,t,a)}return a}function $m(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=de.updateQueue,t===null?(t=xs(),de.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Im(e,t,a,o){t.value=a,t.getSnapshot=o,tf(t)&&af(e)}function ef(e,t,a){return a(function(){tf(t)&&af(e)})}function tf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Mt(e,a)}catch{return!0}}function af(e){var t=hn(e,2);t!==null&&xt(t,e,2)}function Ql(e){var t=mt();if(typeof e=="function"){var a=e;if(e=a(),En){Na(!0);try{a()}finally{Na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function nf(e,t,a,o){return e.baseState=a,Ul(e,ze,typeof o=="function"?o:pa)}function Ob(e,t,a,o,l){if(Ds(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};j.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,of(t,u)):(u.next=a.next,t.pending=a.next=u)}}function of(e,t){var a=t.action,o=t.payload,l=e.state;if(t.isTransition){var u=j.T,m={};j.T=m;try{var v=a(l,o),x=j.S;x!==null&&x(m,v),sf(e,t,v)}catch(D){Gl(e,t,D)}finally{u!==null&&m.types!==null&&(u.types=m.types),j.T=u}}else try{u=a(l,o),sf(e,t,u)}catch(D){Gl(e,t,D)}}function sf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){rf(e,t,o)},function(o){return Gl(e,t,o)}):rf(e,t,a)}function rf(e,t,a){t.status="fulfilled",t.value=a,lf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,of(e,a)))}function Gl(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,lf(t),t=t.next;while(t!==o)}e.action=null}function lf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uf(e,t){return t}function cf(e,t){if(Te){var a=Oe.formState;if(a!==null){e:{var o=de;if(Te){if(we){t:{for(var l=we,u=Ht;l.nodeType!==8;){if(!u){l=null;break t}if(l=Gt(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){we=Gt(l.nextSibling),o=l.data==="F!";break e}}wa(o)}o=!1}o&&(t=a[0])}}return a=mt(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uf,lastRenderedState:t},a.queue=o,a=Nf.bind(null,de,o),o.dispatch=a,o=Ql(!1),u=Zl.bind(null,de,!1,o.queue),o=mt(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,a=Ob.bind(null,de,l,u,a),l.dispatch=a,o.memoizedState=e,[t,a,!1]}function df(e){var t=ke();return mf(t,ze,e)}function mf(e,t,a){if(t=Ul(e,t,uf)[0],e=As(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ti(t)}catch(m){throw m===to?hs:m}else o=t;t=ke();var l=t.queue,u=l.dispatch;return a!==t.memoizedState&&(de.flags|=2048,so(9,{destroy:void 0},jb.bind(null,l,a),null)),[o,u,e]}function jb(e,t){e.action=t}function ff(e){var t=ke(),a=ze;if(a!==null)return mf(t,a,e);ke(),t=t.memoizedState,a=ke();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function so(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=de.updateQueue,t===null&&(t=xs(),de.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function hf(){return ke().memoizedState}function Cs(e,t,a,o){var l=mt();de.flags|=e,l.memoizedState=so(1|t,{destroy:void 0},a,o===void 0?null:o)}function Ms(e,t,a,o){var l=ke();o=o===void 0?null:o;var u=l.memoizedState.inst;ze!==null&&o!==null&&Rl(o,ze.memoizedState.deps)?l.memoizedState=so(t,u,a,o):(de.flags|=e,l.memoizedState=so(1|t,u,a,o))}function pf(e,t){Cs(8390656,8,e,t)}function Pl(e,t){Ms(2048,8,e,t)}function Rb(e){de.flags|=4;var t=de.updateQueue;if(t===null)t=xs(),de.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function gf(e){var t=ke().memoizedState;return Rb({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function vf(e,t){return Ms(4,2,e,t)}function yf(e,t){return Ms(4,4,e,t)}function bf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sf(e,t,a){a=a!=null?a.concat([e]):null,Ms(4,4,bf.bind(null,t,e),a)}function kl(){}function Tf(e,t){var a=ke();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Rl(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function xf(e,t){var a=ke();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Rl(t,o[1]))return o[0];if(o=e(),En){Na(!0);try{e()}finally{Na(!1)}}return a.memoizedState=[o,t],o}function Yl(e,t,a){return a===void 0||(ha&1073741824)!==0&&(ye&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Eh(),de.lanes|=e,Pa|=e,a)}function Ef(e,t,a,o){return Mt(a,t)?a:no.current!==null?(e=Yl(e,a,o),Mt(e,t)||(Je=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(ye&261930)===0?(Je=!0,e.memoizedState=a):(e=Eh(),de.lanes|=e,Pa|=e,t)}function Af(e,t,a,o,l){var u=Q.p;Q.p=u!==0&&8>u?u:8;var m=j.T,v={};j.T=v,Zl(e,!1,t,a);try{var x=l(),D=j.S;if(D!==null&&D(v,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var R=zb(x,o);ai(e,t,R,jt(e))}else ai(e,t,o,jt(e))}catch(V){ai(e,t,{then:function(){},status:"rejected",reason:V},jt())}finally{Q.p=u,m!==null&&v.types!==null&&(m.types=v.types),j.T=m}}function wb(){}function Xl(e,t,a,o){if(e.tag!==5)throw Error(r(476));var l=Cf(e).queue;Af(e,l,t,$,a===null?wb:function(){return Mf(e),a(o)})}function Cf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mf(e){var t=Cf(e);t.next===null&&(t=e.alternate.memoizedState),ai(e,t.next.queue,{},jt())}function Jl(){return it(bi)}function Df(){return ke().memoizedState}function zf(){return ke().memoizedState}function Vb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=jt();e=Ba(a);var o=La(t,e,a);o!==null&&(xt(o,t,a),Wo(o,t,a)),t={cache:xl()},e.payload=t;return}t=t.return}}function _b(e,t,a){var o=jt();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ds(e)?qf(t,a):(a=dl(e,t,a,o),a!==null&&(xt(a,e,o),Of(a,t,o)))}function Nf(e,t,a){var o=jt();ai(e,t,a,o)}function ai(e,t,a,o){var l={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))qf(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,v=u(m,a);if(l.hasEagerState=!0,l.eagerState=v,Mt(v,m))return rs(e,t,l,0),Oe===null&&ss(),!1}catch{}finally{}if(a=dl(e,t,l,o),a!==null)return xt(a,e,o),Of(a,t,o),!0}return!1}function Zl(e,t,a,o){if(o={lane:2,revertLane:Mu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(t)throw Error(r(479))}else t=dl(e,a,o,2),t!==null&&xt(t,e,2)}function Ds(e){var t=e.alternate;return e===de||t!==null&&t===de}function qf(e,t){oo=Ss=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Of(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Vd(e,a)}}var ni={readContext:it,use:Es,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};ni.useEffectEvent=Ue;var jf={readContext:it,use:Es,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:pf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Cs(4194308,4,bf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Cs(4194308,4,e,t)},useInsertionEffect:function(e,t){Cs(4,2,e,t)},useMemo:function(e,t){var a=mt();t=t===void 0?null:t;var o=e();if(En){Na(!0);try{e()}finally{Na(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=mt();if(a!==void 0){var l=a(t);if(En){Na(!0);try{a(t)}finally{Na(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=_b.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ql(e);var t=e.queue,a=Nf.bind(null,de,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:kl,useDeferredValue:function(e,t){var a=mt();return Yl(a,e,t)},useTransition:function(){var e=Ql(!1);return e=Af.bind(null,de,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=de,l=mt();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),Oe===null)throw Error(r(349));(ye&127)!==0||$m(o,t,a)}l.memoizedState=a;var u={value:a,getSnapshot:t};return l.queue=u,pf(ef.bind(null,o,u,e),[e]),o.flags|=2048,so(9,{destroy:void 0},Im.bind(null,o,u,a,t),null),a},useId:function(){var e=mt(),t=Oe.identifierPrefix;if(Te){var a=ea,o=It;a=(o&~(1<<32-Ct(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ts++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Nb++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Jl,useFormState:cf,useActionState:cf,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Zl.bind(null,de,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ll,useCacheRefresh:function(){return mt().memoizedState=Vb.bind(null,de)},useEffectEvent:function(e){var t=mt(),a={impl:e};return t.memoizedState=a,function(){if((Ae&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Kl={readContext:it,use:Es,useCallback:Tf,useContext:it,useEffect:Pl,useImperativeHandle:Sf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:xf,useReducer:As,useRef:hf,useState:function(){return As(pa)},useDebugValue:kl,useDeferredValue:function(e,t){var a=ke();return Ef(a,ze.memoizedState,e,t)},useTransition:function(){var e=As(pa)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:Wm,useId:Df,useHostTransitionStatus:Jl,useFormState:df,useActionState:df,useOptimistic:function(e,t){var a=ke();return nf(a,ze,e,t)},useMemoCache:Ll,useCacheRefresh:zf};Kl.useEffectEvent=gf;var Rf={readContext:it,use:Es,useCallback:Tf,useContext:it,useEffect:Pl,useImperativeHandle:Sf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:xf,useReducer:Hl,useRef:hf,useState:function(){return Hl(pa)},useDebugValue:kl,useDeferredValue:function(e,t){var a=ke();return ze===null?Yl(a,e,t):Ef(a,ze.memoizedState,e,t)},useTransition:function(){var e=Hl(pa)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:Wm,useId:Df,useHostTransitionStatus:Jl,useFormState:ff,useActionState:ff,useOptimistic:function(e,t){var a=ke();return ze!==null?nf(a,ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ll,useCacheRefresh:zf};Rf.useEffectEvent=gf;function Fl(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wl={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=jt(),l=Ba(o);l.payload=t,a!=null&&(l.callback=a),t=La(e,l,o),t!==null&&(xt(t,e,o),Wo(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=jt(),l=Ba(o);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=La(e,l,o),t!==null&&(xt(t,e,o),Wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=jt(),o=Ba(a);o.tag=2,t!=null&&(o.callback=t),t=La(e,o,a),t!==null&&(xt(t,e,a),Wo(t,e,a))}};function wf(e,t,a,o,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,m):t.prototype&&t.prototype.isPureReactComponent?!Po(a,o)||!Po(l,u):!0}function Vf(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Wl.enqueueReplaceState(t,t.state,null)}function An(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function _f(e){is(e)}function Bf(e){console.error(e)}function Lf(e){is(e)}function zs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Uf(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function $l(e,t,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){zs(e,t)},a}function Hf(e){return e=Ba(e),e.tag=3,e}function Qf(e,t,a,o){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;e.payload=function(){return l(u)},e.callback=function(){Uf(t,a,o)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Uf(t,a,o),typeof l!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var v=o.stack;this.componentDidCatch(o.value,{componentStack:v!==null?v:""})})}function Bb(e,t,a,o,l){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&$n(t,a,l,!0),a=zt.current,a!==null){switch(a.tag){case 31:case 13:return Qt===null?Hs():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=l,o===ps?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Eu(e,o,l)),!1;case 22:return a.flags|=65536,o===ps?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Eu(e,o,l)),!1}throw Error(r(435,a.tag))}return Eu(e,o,l),Hs(),!1}if(Te)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==vl&&(e=Error(r(422),{cause:o}),Xo(Bt(e,a)))):(o!==vl&&(t=Error(r(423),{cause:o}),Xo(Bt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=Bt(o,a),l=$l(e.stateNode,o,l),zl(e,l),He!==4&&(He=2)),!1;var u=Error(r(520),{cause:o});if(u=Bt(u,a),di===null?di=[u]:di.push(u),He!==4&&(He=2),t===null)return!0;o=Bt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=$l(a.stateNode,o,e),zl(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ka===null||!ka.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Hf(l),Qf(l,e,a,o),zl(a,l),!1}a=a.return}while(a!==null);return!1}var Il=Error(r(461)),Je=!1;function st(e,t,a,o){t.child=e===null?km(t,null,a,o):xn(t,e.child,a,o)}function Gf(e,t,a,o,l){a=a.render;var u=t.ref;if("ref"in o){var m={};for(var v in o)v!=="ref"&&(m[v]=o[v])}else m=o;return yn(t),o=wl(e,t,a,m,u,l),v=Vl(),e!==null&&!Je?(_l(e,t,l),ga(e,t,l)):(Te&&v&&pl(t),t.flags|=1,st(e,t,o,l),t.child)}function Pf(e,t,a,o,l){if(e===null){var u=a.type;return typeof u=="function"&&!ml(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,kf(e,t,u,o,l)):(e=us(a.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!ru(e,l)){var m=u.memoizedProps;if(a=a.compare,a=a!==null?a:Po,a(m,o)&&e.ref===t.ref)return ga(e,t,l)}return t.flags|=1,e=ca(u,o),e.ref=t.ref,e.return=t,t.child=e}function kf(e,t,a,o,l){if(e!==null){var u=e.memoizedProps;if(Po(u,o)&&e.ref===t.ref)if(Je=!1,t.pendingProps=o=u,ru(e,l))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,ga(e,t,l)}return eu(e,t,a,o,l)}function Yf(e,t,a,o){var l=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~u}else o=0,t.child=null;return Xf(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fs(t,u!==null?u.cachePool:null),u!==null?Jm(t,u):ql(),Zm(t);else return o=t.lanes=536870912,Xf(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(fs(t,u.cachePool),Jm(t,u),Ha(),t.memoizedState=null):(e!==null&&fs(t,null),ql(),Ha());return st(e,t,l,a),t.child}function oi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Xf(e,t,a,o,l){var u=Al();return u=u===null?null:{parent:Ye._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&fs(t,null),ql(),Zm(t),e!==null&&$n(e,t,o,!0),t.childLanes=l,null}function Ns(e,t){return t=Os({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Jf(e,t,a){return xn(t,e.child,null,a),e=Ns(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function Lb(e,t,a){var o=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Ns(t,o),t.lanes=536870912,oi(null,e);if(jl(t),(e=we)?(e=ip(e,Ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:It,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=Nm(e),a.return=t,t.child=a,ot=t,we=null)):e=null,e===null)throw wa(t);return t.lanes=536870912,null}return Ns(t,o)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(jl(t),l)if(t.flags&256)t.flags&=-257,t=Jf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Je||$n(e,t,a,!1),l=(a&e.childLanes)!==0,Je||l){if(o=Oe,o!==null&&(m=_d(o,a),m!==0&&m!==u.retryLane))throw u.retryLane=m,hn(e,m),xt(o,e,m),Il;Hs(),t=Jf(e,t,a)}else e=u.treeContext,we=Gt(m.nextSibling),ot=t,Te=!0,Ra=null,Ht=!1,e!==null&&jm(t,e),t=Ns(t,o),t.flags|=4096;return t}return e=ca(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qs(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function eu(e,t,a,o,l){return yn(t),a=wl(e,t,a,o,void 0,l),o=Vl(),e!==null&&!Je?(_l(e,t,l),ga(e,t,l)):(Te&&o&&pl(t),t.flags|=1,st(e,t,a,l),t.child)}function Zf(e,t,a,o,l,u){return yn(t),t.updateQueue=null,a=Fm(t,o,a,l),Km(e),o=Vl(),e!==null&&!Je?(_l(e,t,u),ga(e,t,u)):(Te&&o&&pl(t),t.flags|=1,st(e,t,a,u),t.child)}function Kf(e,t,a,o,l){if(yn(t),t.stateNode===null){var u=Zn,m=a.contextType;typeof m=="object"&&m!==null&&(u=it(m)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Wl,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Ml(t),m=a.contextType,u.context=typeof m=="object"&&m!==null?it(m):Zn,u.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Fl(t,a,m,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Wl.enqueueReplaceState(u,u.state,null),Io(t,o,u,l),$o(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,x=An(a,v);u.props=x;var D=u.context,R=a.contextType;m=Zn,typeof R=="object"&&R!==null&&(m=it(R));var V=a.getDerivedStateFromProps;R=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,R||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||D!==m)&&Vf(t,u,o,m),_a=!1;var N=t.memoizedState;u.state=N,Io(t,o,u,l),$o(),D=t.memoizedState,v||N!==D||_a?(typeof V=="function"&&(Fl(t,a,V,o),D=t.memoizedState),(x=_a||wf(t,a,x,o,N,D,m))?(R||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=D),u.props=o,u.state=D,u.context=m,o=x):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Dl(e,t),m=t.memoizedProps,R=An(a,m),u.props=R,V=t.pendingProps,N=u.context,D=a.contextType,x=Zn,typeof D=="object"&&D!==null&&(x=it(D)),v=a.getDerivedStateFromProps,(D=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==V||N!==x)&&Vf(t,u,o,x),_a=!1,N=t.memoizedState,u.state=N,Io(t,o,u,l),$o();var q=t.memoizedState;m!==V||N!==q||_a||e!==null&&e.dependencies!==null&&ds(e.dependencies)?(typeof v=="function"&&(Fl(t,a,v,o),q=t.memoizedState),(R=_a||wf(t,a,R,o,N,q,x)||e!==null&&e.dependencies!==null&&ds(e.dependencies))?(D||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,q,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,q,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=q),u.props=o,u.state=q,u.context=x,o=R):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,qs(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=xn(t,e.child,null,l),t.child=xn(t,null,a,l)):st(e,t,a,l),t.memoizedState=u.state,e=t.child):e=ga(e,t,l),e}function Ff(e,t,a,o){return gn(),t.flags|=256,st(e,t,a,o),t.child}var tu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function au(e){return{baseLanes:e,cachePool:Lm()}}function nu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ot),e}function Wf(e,t,a){var o=t.pendingProps,l=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(l?Ua(t):Ha(),(e=we)?(e=ip(e,Ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:It,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=Nm(e),a.return=t,t.child=a,ot=t,we=null)):e=null,e===null)throw wa(t);return Uu(e)?t.lanes=32:t.lanes=536870912,null}var v=o.children;return o=o.fallback,l?(Ha(),l=t.mode,v=Os({mode:"hidden",children:v},l),o=pn(o,l,a,null),v.return=t,o.return=t,v.sibling=o,t.child=v,o=t.child,o.memoizedState=au(a),o.childLanes=nu(e,m,a),t.memoizedState=tu,oi(null,o)):(Ua(t),ou(t,v))}var x=e.memoizedState;if(x!==null&&(v=x.dehydrated,v!==null)){if(u)t.flags&256?(Ua(t),t.flags&=-257,t=iu(e,t,a)):t.memoizedState!==null?(Ha(),t.child=e.child,t.flags|=128,t=null):(Ha(),v=o.fallback,l=t.mode,o=Os({mode:"visible",children:o.children},l),v=pn(v,l,a,null),v.flags|=2,o.return=t,v.return=t,o.sibling=v,t.child=o,xn(t,e.child,null,a),o=t.child,o.memoizedState=au(a),o.childLanes=nu(e,m,a),t.memoizedState=tu,t=oi(null,o));else if(Ua(t),Uu(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var D=m.dgst;m=D,o=Error(r(419)),o.stack="",o.digest=m,Xo({value:o,source:null,stack:null}),t=iu(e,t,a)}else if(Je||$n(e,t,a,!1),m=(a&e.childLanes)!==0,Je||m){if(m=Oe,m!==null&&(o=_d(m,a),o!==0&&o!==x.retryLane))throw x.retryLane=o,hn(e,o),xt(m,e,o),Il;Lu(v)||Hs(),t=iu(e,t,a)}else Lu(v)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,we=Gt(v.nextSibling),ot=t,Te=!0,Ra=null,Ht=!1,e!==null&&jm(t,e),t=ou(t,o.children),t.flags|=4096);return t}return l?(Ha(),v=o.fallback,l=t.mode,x=e.child,D=x.sibling,o=ca(x,{mode:"hidden",children:o.children}),o.subtreeFlags=x.subtreeFlags&65011712,D!==null?v=ca(D,v):(v=pn(v,l,a,null),v.flags|=2),v.return=t,o.return=t,o.sibling=v,t.child=o,oi(null,o),o=t.child,v=e.child.memoizedState,v===null?v=au(a):(l=v.cachePool,l!==null?(x=Ye._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=Lm(),v={baseLanes:v.baseLanes|a,cachePool:l}),o.memoizedState=v,o.childLanes=nu(e,m,a),t.memoizedState=tu,oi(e.child,o)):(Ua(t),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function ou(e,t){return t=Os({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Os(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function iu(e,t,a){return xn(t,e.child,null,a),e=ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Sl(e.return,t,a)}function su(e,t,a,o,l,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:l,treeForkCount:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=a,m.tailMode=l,m.treeForkCount=u)}function If(e,t,a){var o=t.pendingProps,l=o.revealOrder,u=o.tail;o=o.children;var m=Pe.current,v=(m&2)!==0;if(v?(m=m&1|2,t.flags|=128):m&=1,J(Pe,m),st(e,t,o,a),o=Te?Yo:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$f(e,a,t);else if(e.tag===19)$f(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&bs(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),su(t,!1,l,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&bs(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}su(t,!0,a,null,u,o);break;case"together":su(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function ga(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Pa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($n(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=ca(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ru(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ds(e)))}function Ub(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),Va(t,Ye,e.memoizedState.cache),gn();break;case 27:case 5:Da(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:Va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,jl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wf(e,t,a):(Ua(t),e=ga(e,t,a),e!==null?e.sibling:null);Ua(t);break;case 19:var l=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||($n(e,t,a,!1),o=(a&t.childLanes)!==0),l){if(o)return If(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(Pe,Pe.current),o)break;return null;case 22:return t.lanes=0,Yf(e,t,a,t.pendingProps);case 24:Va(t,Ye,e.memoizedState.cache)}return ga(e,t,a)}function eh(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!ru(e,a)&&(t.flags&128)===0)return Je=!1,Ub(e,t,a);Je=(e.flags&131072)!==0}else Je=!1,Te&&(t.flags&1048576)!==0&&Om(t,Yo,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Sn(t.elementType),t.type=e,typeof e=="function")ml(e)?(o=An(e,o),t.tag=1,t=Kf(null,t,e,o,a)):(t.tag=0,t=eu(null,t,e,o,a));else{if(e!=null){var l=e.$$typeof;if(l===Z){t.tag=11,t=Gf(null,t,e,o,a);break e}else if(l===W){t.tag=14,t=Pf(null,t,e,o,a);break e}}throw t=ut(e)||e,Error(r(306,t,""))}}return t;case 0:return eu(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,l=An(o,t.pendingProps),Kf(e,t,o,l,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(r(387));o=t.pendingProps;var u=t.memoizedState;l=u.element,Dl(e,t),Io(t,o,null,a);var m=t.memoizedState;if(o=m.cache,Va(t,Ye,o),o!==u.cache&&Tl(t,[Ye],a,!0),$o(),o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Ff(e,t,o,a);break e}else if(o!==l){l=Bt(Error(r(424)),t),Xo(l),t=Ff(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=Gt(e.firstChild),ot=t,Te=!0,Ra=null,Ht=!0,a=km(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gn(),o===l){t=ga(e,t,a);break e}st(e,t,o,a)}t=t.child}return t;case 26:return qs(e,t),e===null?(a=dp(t.type,null,t.pendingProps,null))?t.memoizedState=a:Te||(a=t.type,e=t.pendingProps,o=Js(le.current).createElement(a),o[nt]=t,o[gt]=e,rt(o,a,e),et(o),t.stateNode=o):t.memoizedState=dp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Da(t),e===null&&Te&&(o=t.stateNode=lp(t.type,t.pendingProps,le.current),ot=t,Ht=!0,l=we,Za(t.type)?(Hu=l,we=Gt(o.firstChild)):we=l),st(e,t,t.pendingProps.children,a),qs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Te&&((l=o=we)&&(o=pS(o,t.type,t.pendingProps,Ht),o!==null?(t.stateNode=o,ot=t,we=Gt(o.firstChild),Ht=!1,l=!0):l=!1),l||wa(t)),Da(t),l=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,o=u.children,Vu(l,u)?o=null:m!==null&&Vu(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=wl(e,t,qb,null,null,a),bi._currentValue=l),qs(e,t),st(e,t,o,a),t.child;case 6:return e===null&&Te&&((e=a=we)&&(a=gS(a,t.pendingProps,Ht),a!==null?(t.stateNode=a,ot=t,we=null,e=!0):e=!1),e||wa(t)),null;case 13:return Wf(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=xn(t,null,o,a):st(e,t,o,a),t.child;case 11:return Gf(e,t,t.type,t.pendingProps,a);case 7:return st(e,t,t.pendingProps,a),t.child;case 8:return st(e,t,t.pendingProps.children,a),t.child;case 12:return st(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Va(t,t.type,o.value),st(e,t,o.children,a),t.child;case 9:return l=t.type._context,o=t.pendingProps.children,yn(t),l=it(l),o=o(l),t.flags|=1,st(e,t,o,a),t.child;case 14:return Pf(e,t,t.type,t.pendingProps,a);case 15:return kf(e,t,t.type,t.pendingProps,a);case 19:return If(e,t,a);case 31:return Lb(e,t,a);case 22:return Yf(e,t,a,t.pendingProps);case 24:return yn(t),o=it(Ye),e===null?(l=Al(),l===null&&(l=Oe,u=xl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),t.memoizedState={parent:o,cache:l},Ml(t),Va(t,Ye,l)):((e.lanes&a)!==0&&(Dl(e,t),Io(t,null,null,a),$o()),l=e.memoizedState,u=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Va(t,Ye,o)):(o=u.cache,Va(t,Ye,o),o!==l.cache&&Tl(t,[Ye],a,!0))),st(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function va(e){e.flags|=4}function lu(e,t,a,o,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Dh())e.flags|=8192;else throw Tn=ps,Cl}else e.flags&=-16777217}function th(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gp(t))if(Dh())e.flags|=8192;else throw Tn=ps,Cl}function js(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Rd():536870912,e.lanes|=t,co|=t)}function ii(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function Hb(e,t,a){var o=t.pendingProps;switch(gl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),fa(Ye),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wn(t)?va(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yl())),Ve(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(va(t),u!==null?(Ve(t),th(t,u)):(Ve(t),lu(t,l,null,o,a))):u?u!==e.memoizedState?(va(t),Ve(t),th(t,u)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&va(t),Ve(t),lu(t,l,e,o,a)),null;case 27:if(sa(t),a=le.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&va(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return Ve(t),null}e=F.current,Wn(t)?Rm(t):(e=lp(l,o,a),t.stateNode=e,va(t))}return Ve(t),null;case 5:if(sa(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&va(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return Ve(t),null}if(u=F.current,Wn(t))Rm(t);else{var m=Js(le.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?m.createElement("select",{is:o.is}):m.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?m.createElement(l,{is:o.is}):m.createElement(l)}}u[nt]=t,u[gt]=o;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=u;e:switch(rt(u,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&va(t)}}return Ve(t),lu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&va(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(r(166));if(e=le.current,Wn(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,l=ot,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}e[nt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Wh(e.nodeValue,a)),e||wa(t,!0)}else e=Js(e).createTextNode(o),e[nt]=t,t.stateNode=e}return Ve(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Wn(t),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[nt]=t}else gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else a=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Ve(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Wn(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[nt]=t}else gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),l=!1}else l=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),js(t,t.updateQueue),Ve(t),null);case 4:return he(),e===null&&qu(t.stateNode.containerInfo),Ve(t),null;case 10:return fa(t.type),Ve(t),null;case 19:if(_(Pe),o=t.memoizedState,o===null)return Ve(t),null;if(l=(t.flags&128)!==0,u=o.rendering,u===null)if(l)ii(o,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=bs(e),u!==null){for(t.flags|=128,ii(o,!1),e=u.updateQueue,t.updateQueue=e,js(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)zm(a,e),a=a.sibling;return J(Pe,Pe.current&1|2),Te&&da(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Et()>Bs&&(t.flags|=128,l=!0,ii(o,!1),t.lanes=4194304)}else{if(!l)if(e=bs(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,js(t,e),ii(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Te)return Ve(t),null}else 2*Et()-o.renderingStartTime>Bs&&a!==536870912&&(t.flags|=128,l=!0,ii(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,a=Pe.current,J(Pe,l?a&1|2:a&1),Te&&da(t,o.treeForkCount),e):(Ve(t),null);case 22:case 23:return Nt(t),Ol(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),a=t.updateQueue,a!==null&&js(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&_(bn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),fa(Ye),Ve(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Qb(e,t){switch(gl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fa(Ye),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return sa(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(r(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Pe),null;case 4:return he(),null;case 10:return fa(t.type),null;case 22:case 23:return Nt(t),Ol(),e!==null&&_(bn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fa(Ye),null;case 25:return null;default:return null}}function ah(e,t){switch(gl(t),t.tag){case 3:fa(Ye),he();break;case 26:case 27:case 5:sa(t);break;case 4:he();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:_(Pe);break;case 10:fa(t.type);break;case 22:case 23:Nt(t),Ol(),e!==null&&_(bn);break;case 24:fa(Ye)}}function si(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var l=o.next;a=l;do{if((a.tag&e)===e){o=void 0;var u=a.create,m=a.inst;o=u(),m.destroy=o}a=a.next}while(a!==l)}}catch(v){De(t,t.return,v)}}function Qa(e,t,a){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&e)===e){var m=o.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,l=t;var x=a,D=v;try{D()}catch(R){De(l,x,R)}}}o=o.next}while(o!==u)}}catch(R){De(t,t.return,R)}}function nh(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Xm(t,a)}catch(o){De(e,e.return,o)}}}function oh(e,t,a){a.props=An(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){De(e,t,o)}}function ri(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(l){De(e,t,l)}}function ta(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(l){De(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){De(e,t,l)}else a.current=null}function ih(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(l){De(e,e.return,l)}}function uu(e,t,a){try{var o=e.stateNode;uS(o,e.type,a,t),o[gt]=t}catch(l){De(e,e.return,l)}}function sh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function du(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=la));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(du(e,t,a),e=e.sibling;e!==null;)du(e,t,a),e=e.sibling}function Rs(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Rs(e,t,a),e=e.sibling;e!==null;)Rs(e,t,a),e=e.sibling}function rh(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);rt(t,o,a),t[nt]=e,t[gt]=a}catch(u){De(e,e.return,u)}}var ya=!1,Ze=!1,mu=!1,lh=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Gb(e,t){if(e=e.containerInfo,Ru=er,e=bm(e),il(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var m=0,v=-1,x=-1,D=0,R=0,V=e,N=null;t:for(;;){for(var q;V!==a||l!==0&&V.nodeType!==3||(v=m+l),V!==u||o!==0&&V.nodeType!==3||(x=m+o),V.nodeType===3&&(m+=V.nodeValue.length),(q=V.firstChild)!==null;)N=V,V=q;for(;;){if(V===e)break t;if(N===a&&++D===l&&(v=m),N===u&&++R===o&&(x=m),(q=V.nextSibling)!==null)break;V=N,N=V.parentNode}V=q}a=v===-1||x===-1?null:{start:v,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(wu={focusedElem:e,selectionRange:a},er=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,l=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var I=An(a.type,l);e=o.getSnapshotBeforeUpdate(I,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(ue){De(a,a.return,ue)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Bu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function uh(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),o&4&&si(5,a);break;case 1:if(Sa(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){De(a,a.return,m)}else{var l=An(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){De(a,a.return,m)}}o&64&&nh(a),o&512&&ri(a,a.return);break;case 3:if(Sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Xm(e,t)}catch(m){De(a,a.return,m)}}break;case 27:t===null&&o&4&&rh(a);case 26:case 5:Sa(e,a),t===null&&o&4&&ih(a),o&512&&ri(a,a.return);break;case 12:Sa(e,a);break;case 31:Sa(e,a),o&4&&mh(e,a);break;case 13:Sa(e,a),o&4&&fh(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Wb.bind(null,a),vS(e,a))));break;case 22:if(o=a.memoizedState!==null||ya,!o){t=t!==null&&t.memoizedState!==null||Ze,l=ya;var u=Ze;ya=o,(Ze=t)&&!u?Ta(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),ya=l,Ze=u}break;case 30:break;default:Sa(e,a)}}function ch(e){var t=e.alternate;t!==null&&(e.alternate=null,ch(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,yt=!1;function ba(e,t,a){for(a=a.child;a!==null;)dh(e,t,a),a=a.sibling}function dh(e,t,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Oo,a)}catch{}switch(a.tag){case 26:Ze||ta(a,t),ba(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||ta(a,t);var o=Be,l=yt;Za(a.type)&&(Be=a.stateNode,yt=!1),ba(e,t,a),gi(a.stateNode),Be=o,yt=l;break;case 5:Ze||ta(a,t);case 6:if(o=Be,l=yt,Be=null,ba(e,t,a),Be=o,yt=l,Be!==null)if(yt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(u){De(a,t,u)}else try{Be.removeChild(a.stateNode)}catch(u){De(a,t,u)}break;case 18:Be!==null&&(yt?(e=Be,np(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bo(e)):np(Be,a.stateNode));break;case 4:o=Be,l=yt,Be=a.stateNode.containerInfo,yt=!0,ba(e,t,a),Be=o,yt=l;break;case 0:case 11:case 14:case 15:Qa(2,a,t),Ze||Qa(4,a,t),ba(e,t,a);break;case 1:Ze||(ta(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&oh(a,t,o)),ba(e,t,a);break;case 21:ba(e,t,a);break;case 22:Ze=(o=Ze)||a.memoizedState!==null,ba(e,t,a),Ze=o;break;default:ba(e,t,a)}}function mh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bo(e)}catch(a){De(t,t.return,a)}}}function fh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bo(e)}catch(a){De(t,t.return,a)}}function Pb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new lh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new lh),t;default:throw Error(r(435,e.tag))}}function ws(e,t){var a=Pb(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var l=$b.bind(null,e,o);o.then(l,l)}})}function bt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var l=a[o],u=e,m=t,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(Za(v.type)){Be=v.stateNode,yt=!1;break e}break;case 5:Be=v.stateNode,yt=!1;break e;case 3:case 4:Be=v.stateNode.containerInfo,yt=!0;break e}v=v.return}if(Be===null)throw Error(r(160));dh(u,m,l),Be=null,yt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hh(t,e),t=t.sibling}var Jt=null;function hh(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),St(e),o&4&&(Qa(3,e,e.return),si(3,e),Qa(5,e,e.return));break;case 1:bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),o&64&&ya&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var l=Jt;if(bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[wo]||u[nt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),rt(u,o,a),u[nt]=e,et(u),o=u;break e;case"link":var m=hp("link","href",l).get(o+(a.href||""));if(m){for(var v=0;v<m.length;v++)if(u=m[v],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(v,1);break t}}u=l.createElement(o),rt(u,o,a),l.head.appendChild(u);break;case"meta":if(m=hp("meta","content",l).get(o+(a.content||""))){for(v=0;v<m.length;v++)if(u=m[v],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(v,1);break t}}u=l.createElement(o),rt(u,o,a),l.head.appendChild(u);break;default:throw Error(r(468,o))}u[nt]=e,et(u),o=u}e.stateNode=o}else pp(l,e.type,e.stateNode);else e.stateNode=fp(l,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?pp(l,e.type,e.stateNode):fp(l,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uu(e,e.memoizedProps,a.memoizedProps)}break;case 27:bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),a!==null&&o&4&&uu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(bt(t,e),St(e),o&512&&(Ze||a===null||ta(a,a.return)),e.flags&32){l=e.stateNode;try{Qn(l,"")}catch(I){De(e,e.return,I)}}o&4&&e.stateNode!=null&&(l=e.memoizedProps,uu(e,l,a!==null?a.memoizedProps:l)),o&1024&&(mu=!0);break;case 6:if(bt(t,e),St(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(I){De(e,e.return,I)}}break;case 3:if(Fs=null,l=Jt,Jt=Zs(t.containerInfo),bt(t,e),Jt=l,St(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(t.containerInfo)}catch(I){De(e,e.return,I)}mu&&(mu=!1,ph(e));break;case 4:o=Jt,Jt=Zs(e.stateNode.containerInfo),bt(t,e),St(e),Jt=o;break;case 12:bt(t,e),St(e);break;case 31:bt(t,e),St(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ws(e,o)));break;case 13:bt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_s=Et()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ws(e,o)));break;case 22:l=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,D=ya,R=Ze;if(ya=D||l,Ze=R||x,bt(t,e),Ze=R,ya=D,St(e),o&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||x||ya||Ze||Cn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(u=x.stateNode,l)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=x.stateNode;var V=x.memoizedProps.style,N=V!=null&&V.hasOwnProperty("display")?V.display:null;v.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(I){De(x,x.return,I)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(I){De(x,x.return,I)}}}else if(t.tag===18){if(a===null){x=t;try{var q=x.stateNode;l?op(q,!0):op(x.stateNode,!1)}catch(I){De(x,x.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ws(e,a))));break;case 19:bt(t,e),St(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ws(e,o)));break;case 30:break;case 21:break;default:bt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(sh(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var l=a.stateNode,u=cu(e);Rs(e,u,l);break;case 5:var m=a.stateNode;a.flags&32&&(Qn(m,""),a.flags&=-33);var v=cu(e);Rs(e,v,m);break;case 3:case 4:var x=a.stateNode.containerInfo,D=cu(e);du(e,D,x);break;default:throw Error(r(161))}}catch(R){De(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ph(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ph(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uh(e,t.alternate,t),t=t.sibling}function Cn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qa(4,t,t.return),Cn(t);break;case 1:ta(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&oh(t,t.return,a),Cn(t);break;case 27:gi(t.stateNode);case 26:case 5:ta(t,t.return),Cn(t);break;case 22:t.memoizedState===null&&Cn(t);break;case 30:Cn(t);break;default:Cn(t)}e=e.sibling}}function Ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,l=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:Ta(l,u,a),si(4,u);break;case 1:if(Ta(l,u,a),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){De(o,o.return,D)}if(o=u,l=o.updateQueue,l!==null){var v=o.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)Ym(x[l],v)}catch(D){De(o,o.return,D)}}a&&m&64&&nh(u),ri(u,u.return);break;case 27:rh(u);case 26:case 5:Ta(l,u,a),a&&o===null&&m&4&&ih(u),ri(u,u.return);break;case 12:Ta(l,u,a);break;case 31:Ta(l,u,a),a&&m&4&&mh(l,u);break;case 13:Ta(l,u,a),a&&m&4&&fh(l,u);break;case 22:u.memoizedState===null&&Ta(l,u,a),ri(u,u.return);break;case 30:break;default:Ta(l,u,a)}t=t.sibling}}function fu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jo(a))}function hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e))}function Zt(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gh(e,t,a,o),t=t.sibling}function gh(e,t,a,o){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Zt(e,t,a,o),l&2048&&si(9,t);break;case 1:Zt(e,t,a,o);break;case 3:Zt(e,t,a,o),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e)));break;case 12:if(l&2048){Zt(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,v=u.onPostCommit;typeof v=="function"&&v(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){De(t,t.return,x)}}else Zt(e,t,a,o);break;case 31:Zt(e,t,a,o);break;case 13:Zt(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?Zt(e,t,a,o):li(e,t):u._visibility&2?Zt(e,t,a,o):(u._visibility|=2,ro(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),l&2048&&fu(m,t);break;case 24:Zt(e,t,a,o),l&2048&&hu(t.alternate,t);break;default:Zt(e,t,a,o)}}function ro(e,t,a,o,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,m=t,v=a,x=o,D=m.flags;switch(m.tag){case 0:case 11:case 15:ro(u,m,v,x,l),si(8,m);break;case 23:break;case 22:var R=m.stateNode;m.memoizedState!==null?R._visibility&2?ro(u,m,v,x,l):li(u,m):(R._visibility|=2,ro(u,m,v,x,l)),l&&D&2048&&fu(m.alternate,m);break;case 24:ro(u,m,v,x,l),l&&D&2048&&hu(m.alternate,m);break;default:ro(u,m,v,x,l)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,l=o.flags;switch(o.tag){case 22:li(a,o),l&2048&&fu(o.alternate,o);break;case 24:li(a,o),l&2048&&hu(o.alternate,o);break;default:li(a,o)}t=t.sibling}}var ui=8192;function lo(e,t,a){if(e.subtreeFlags&ui)for(e=e.child;e!==null;)vh(e,t,a),e=e.sibling}function vh(e,t,a){switch(e.tag){case 26:lo(e,t,a),e.flags&ui&&e.memoizedState!==null&&NS(a,Jt,e.memoizedState,e.memoizedProps);break;case 5:lo(e,t,a);break;case 3:case 4:var o=Jt;Jt=Zs(e.stateNode.containerInfo),lo(e,t,a),Jt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ui,ui=16777216,lo(e,t,a),ui=o):lo(e,t,a));break;default:lo(e,t,a)}}function yh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];tt=o,Sh(o,e)}yh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bh(e),e=e.sibling}function bh(e){switch(e.tag){case 0:case 11:case 15:ci(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:ci(e);break;case 12:ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vs(e)):ci(e);break;default:ci(e)}}function Vs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];tt=o,Sh(o,e)}yh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qa(8,t,t.return),Vs(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Vs(t));break;default:Vs(t)}e=e.sibling}}function Sh(e,t){for(;tt!==null;){var a=tt;switch(a.tag){case 0:case 11:case 15:Qa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Jo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,tt=o;else e:for(a=e;tt!==null;){o=tt;var l=o.sibling,u=o.return;if(ch(o),o===a){tt=null;break e}if(l!==null){l.return=u,tt=l;break e}tt=u}}}var kb={getCacheForType:function(e){var t=it(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return it(Ye).controller.signal}},Yb=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Oe=null,ge=null,ye=0,Me=0,qt=null,Ga=!1,uo=!1,pu=!1,xa=0,He=0,Pa=0,Mn=0,gu=0,Ot=0,co=0,di=null,Tt=null,vu=!1,_s=0,Th=0,Bs=1/0,Ls=null,ka=null,Fe=0,Ya=null,mo=null,Ea=0,yu=0,bu=null,xh=null,mi=0,Su=null;function jt(){return(Ae&2)!==0&&ye!==0?ye&-ye:j.T!==null?Mu():Bd()}function Eh(){if(Ot===0)if((ye&536870912)===0||Te){var e=Xi;Xi<<=1,(Xi&3932160)===0&&(Xi=262144),Ot=e}else Ot=536870912;return e=zt.current,e!==null&&(e.flags|=32),Ot}function xt(e,t,a){(e===Oe&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(fo(e,0),Xa(e,ye,Ot,!1)),Ro(e,a),((Ae&2)===0||e!==Oe)&&(e===Oe&&((Ae&2)===0&&(Mn|=a),He===4&&Xa(e,ye,Ot,!1)),aa(e))}function Ah(e,t,a){if((Ae&6)!==0)throw Error(r(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||jo(e,t),l=o?Zb(e,t):xu(e,t,!0),u=o;do{if(l===0){uo&&!o&&Xa(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!Xb(a)){l=xu(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var v=e;l=di;var x=v.current.memoizedState.isDehydrated;if(x&&(fo(v,m).flags|=256),m=xu(v,m,!1),m!==2){if(pu&&!x){v.errorRecoveryDisabledLanes|=u,Mn|=u,l=4;break e}u=Tt,Tt=l,u!==null&&(Tt===null?Tt=u:Tt.push.apply(Tt,u))}l=m}if(u=!1,l!==2)continue}}if(l===1){fo(e,0),Xa(e,t,0,!0);break}e:{switch(o=e,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Xa(o,t,Ot,!Ga);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(l=_s+300-Et(),10<l)){if(Xa(o,t,Ot,!Ga),Zi(o,0,!0)!==0)break e;Ea=t,o.timeoutHandle=tp(Ch.bind(null,o,a,Tt,Ls,vu,t,Ot,Mn,co,Ga,u,"Throttled",-0,0),l);break e}Ch(o,a,Tt,Ls,vu,t,Ot,Mn,co,Ga,u,null,-0,0)}}break}while(!0);aa(e)}function Ch(e,t,a,o,l,u,m,v,x,D,R,V,N,q){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},vh(t,u,V);var I=(u&62914560)===u?_s-Et():(u&4194048)===u?Th-Et():0;if(I=qS(V,I),I!==null){Ea=u,e.cancelPendingCommit=I(Rh.bind(null,e,t,u,a,o,l,m,v,x,R,V,null,N,q)),Xa(e,u,m,!D);return}}Rh(e,t,u,a,o,l,m,v,x)}function Xb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var l=a[o],u=l.getSnapshot;l=l.value;try{if(!Mt(u(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xa(e,t,a,o){t&=~gu,t&=~Mn,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var u=31-Ct(l),m=1<<u;o[u]=-1,l&=~m}a!==0&&wd(e,a,t)}function Us(){return(Ae&6)===0?(fi(0),!1):!0}function Tu(){if(ge!==null){if(Me===0)var e=ge.return;else e=ge,ma=vn=null,Bl(e),ao=null,Ko=0,e=ge;for(;e!==null;)ah(e.alternate,e),e=e.return;ge=null}}function fo(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,mS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,Tu(),Oe=e,ge=a=ca(e.current,null),ye=t,Me=0,qt=null,Ga=!1,uo=jo(e,t),pu=!1,co=Ot=gu=Mn=Pa=He=0,Tt=di=null,vu=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var l=31-Ct(o),u=1<<l;t|=e[l],o&=~u}return xa=t,ss(),a}function Mh(e,t){de=null,j.H=ni,t===to||t===hs?(t=Qm(),Me=3):t===Cl?(t=Qm(),Me=4):Me=t===Il?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qt=t,ge===null&&(He=1,zs(e,Bt(t,e.current)))}function Dh(){var e=zt.current;return e===null?!0:(ye&4194048)===ye?Qt===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Qt:!1}function zh(){var e=j.H;return j.H=ni,e===null?ni:e}function Nh(){var e=j.A;return j.A=kb,e}function Hs(){He=4,Ga||(ye&4194048)!==ye&&zt.current!==null||(uo=!0),(Pa&134217727)===0&&(Mn&134217727)===0||Oe===null||Xa(Oe,ye,Ot,!1)}function xu(e,t,a){var o=Ae;Ae|=2;var l=zh(),u=Nh();(Oe!==e||ye!==t)&&(Ls=null,fo(e,t)),t=!1;var m=He;e:do try{if(Me!==0&&ge!==null){var v=ge,x=qt;switch(Me){case 8:Tu(),m=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var D=Me;if(Me=0,qt=null,ho(e,v,x,D),a&&uo){m=0;break e}break;default:D=Me,Me=0,qt=null,ho(e,v,x,D)}}Jb(),m=He;break}catch(R){Mh(e,R)}while(!0);return t&&e.shellSuspendCounter++,ma=vn=null,Ae=o,j.H=l,j.A=u,ge===null&&(Oe=null,ye=0,ss()),m}function Jb(){for(;ge!==null;)qh(ge)}function Zb(e,t){var a=Ae;Ae|=2;var o=zh(),l=Nh();Oe!==e||ye!==t?(Ls=null,Bs=Et()+500,fo(e,t)):uo=jo(e,t);e:do try{if(Me!==0&&ge!==null){t=ge;var u=qt;t:switch(Me){case 1:Me=0,qt=null,ho(e,t,u,1);break;case 2:case 9:if(Um(u)){Me=0,qt=null,Oh(t);break}t=function(){Me!==2&&Me!==9||Oe!==e||(Me=7),aa(e)},u.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:Um(u)?(Me=0,qt=null,Oh(t)):(Me=0,qt=null,ho(e,t,u,7));break;case 5:var m=null;switch(ge.tag){case 26:m=ge.memoizedState;case 5:case 27:var v=ge;if(m?gp(m):v.stateNode.complete){Me=0,qt=null;var x=v.sibling;if(x!==null)ge=x;else{var D=v.return;D!==null?(ge=D,Qs(D)):ge=null}break t}}Me=0,qt=null,ho(e,t,u,5);break;case 6:Me=0,qt=null,ho(e,t,u,6);break;case 8:Tu(),He=6;break e;default:throw Error(r(462))}}Kb();break}catch(R){Mh(e,R)}while(!0);return ma=vn=null,j.H=o,j.A=l,Ae=a,ge!==null?0:(Oe=null,ye=0,ss(),He)}function Kb(){for(;ge!==null&&!y0();)qh(ge)}function qh(e){var t=eh(e.alternate,e,xa);e.memoizedProps=e.pendingProps,t===null?Qs(e):ge=t}function Oh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Zf(a,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=Zf(a,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Bl(t);default:ah(a,t),t=ge=zm(t,xa),t=eh(a,t,xa)}e.memoizedProps=e.pendingProps,t===null?Qs(e):ge=t}function ho(e,t,a,o){ma=vn=null,Bl(t),ao=null,Ko=0;var l=t.return;try{if(Bb(e,l,t,a,ye)){He=1,zs(e,Bt(a,e.current)),ge=null;return}}catch(u){if(l!==null)throw ge=l,u;He=1,zs(e,Bt(a,e.current)),ge=null;return}t.flags&32768?(Te||o===1?e=!0:uo||(ye&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=zt.current,o!==null&&o.tag===13&&(o.flags|=16384))),jh(t,e)):Qs(t)}function Qs(e){var t=e;do{if((t.flags&32768)!==0){jh(t,Ga);return}e=t.return;var a=Hb(t.alternate,t,xa);if(a!==null){ge=a;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);He===0&&(He=5)}function jh(e,t){do{var a=Qb(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);He=6,ge=null}function Rh(e,t,a,o,l,u,m,v,x){e.cancelPendingCommit=null;do Gs();while(Fe!==0);if((Ae&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=cl,z0(e,a,u,m,v,x),e===Oe&&(ge=Oe=null,ye=0),mo=t,Ya=e,Ea=a,yu=u,bu=l,xh=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ib(ki,function(){return Lh(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=j.T,j.T=null,l=Q.p,Q.p=2,m=Ae,Ae|=4;try{Gb(e,t,a)}finally{Ae=m,Q.p=l,j.T=o}}Fe=1,wh(),Vh(),_h()}}function wh(){if(Fe===1){Fe=0;var e=Ya,t=mo,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var o=Q.p;Q.p=2;var l=Ae;Ae|=4;try{hh(t,e);var u=wu,m=bm(e.containerInfo),v=u.focusedElem,x=u.selectionRange;if(m!==v&&v&&v.ownerDocument&&ym(v.ownerDocument.documentElement,v)){if(x!==null&&il(v)){var D=x.start,R=x.end;if(R===void 0&&(R=D),"selectionStart"in v)v.selectionStart=D,v.selectionEnd=Math.min(R,v.value.length);else{var V=v.ownerDocument||document,N=V&&V.defaultView||window;if(N.getSelection){var q=N.getSelection(),I=v.textContent.length,ue=Math.min(x.start,I),qe=x.end===void 0?ue:Math.min(x.end,I);!q.extend&&ue>qe&&(m=qe,qe=ue,ue=m);var C=vm(v,ue),E=vm(v,qe);if(C&&E&&(q.rangeCount!==1||q.anchorNode!==C.node||q.anchorOffset!==C.offset||q.focusNode!==E.node||q.focusOffset!==E.offset)){var M=V.createRange();M.setStart(C.node,C.offset),q.removeAllRanges(),ue>qe?(q.addRange(M),q.extend(E.node,E.offset)):(M.setEnd(E.node,E.offset),q.addRange(M))}}}}for(V=[],q=v;q=q.parentNode;)q.nodeType===1&&V.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<V.length;v++){var w=V[v];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}er=!!Ru,wu=Ru=null}finally{Ae=l,Q.p=o,j.T=a}}e.current=t,Fe=2}}function Vh(){if(Fe===2){Fe=0;var e=Ya,t=mo,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var o=Q.p;Q.p=2;var l=Ae;Ae|=4;try{uh(e,t.alternate,t)}finally{Ae=l,Q.p=o,j.T=a}}Fe=3}}function _h(){if(Fe===4||Fe===3){Fe=0,b0();var e=Ya,t=mo,a=Ea,o=xh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,mo=Ya=null,Bh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ka=null),Hr(a),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Oo,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=j.T,l=Q.p,Q.p=2,j.T=null;try{for(var u=e.onRecoverableError,m=0;m<o.length;m++){var v=o[m];u(v.value,{componentStack:v.stack})}}finally{j.T=t,Q.p=l}}(Ea&3)!==0&&Gs(),aa(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Su?mi++:(mi=0,Su=e):mi=0,fi(0)}}function Bh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jo(t)))}function Gs(){return wh(),Vh(),_h(),Lh()}function Lh(){if(Fe!==5)return!1;var e=Ya,t=yu;yu=0;var a=Hr(Ea),o=j.T,l=Q.p;try{Q.p=32>a?32:a,j.T=null,a=bu,bu=null;var u=Ya,m=Ea;if(Fe=0,mo=Ya=null,Ea=0,(Ae&6)!==0)throw Error(r(331));var v=Ae;if(Ae|=4,bh(u.current),gh(u,u.current,m,a),Ae=v,fi(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Oo,u)}catch{}return!0}finally{Q.p=l,j.T=o,Bh(e,t)}}function Uh(e,t,a){t=Bt(a,t),t=$l(e.stateNode,t,2),e=La(e,t,2),e!==null&&(Ro(e,2),aa(e))}function De(e,t,a){if(e.tag===3)Uh(e,e,a);else for(;t!==null;){if(t.tag===3){Uh(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=Bt(a,e),a=Hf(2),o=La(t,a,2),o!==null&&(Qf(a,o,t,e),Ro(o,2),aa(o));break}}t=t.return}}function Eu(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Yb;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(a)||(pu=!0,l.add(a),e=Fb.bind(null,e,t,a),t.then(e,e))}function Fb(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Oe===e&&(ye&a)===a&&(He===4||He===3&&(ye&62914560)===ye&&300>Et()-_s?(Ae&2)===0&&fo(e,0):gu|=a,co===ye&&(co=0)),aa(e)}function Hh(e,t){t===0&&(t=Rd()),e=hn(e,t),e!==null&&(Ro(e,t),aa(e))}function Wb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Hh(e,a)}function $b(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(t),Hh(e,a)}function Ib(e,t){return _r(e,t)}var Ps=null,po=null,Au=!1,ks=!1,Cu=!1,Ja=0;function aa(e){e!==po&&e.next===null&&(po===null?Ps=po=e:po=po.next=e),ks=!0,Au||(Au=!0,tS())}function fi(e,t){if(!Cu&&ks){Cu=!0;do for(var a=!1,o=Ps;o!==null;){if(e!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var m=o.suspendedLanes,v=o.pingedLanes;u=(1<<31-Ct(42|e)+1)-1,u&=l&~(m&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,kh(o,u))}else u=ye,u=Zi(o,o===Oe?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||jo(o,u)||(a=!0,kh(o,u));o=o.next}while(a);Cu=!1}}function eS(){Qh()}function Qh(){ks=Au=!1;var e=0;Ja!==0&&dS()&&(e=Ja);for(var t=Et(),a=null,o=Ps;o!==null;){var l=o.next,u=Gh(o,t);u===0?(o.next=null,a===null?Ps=l:a.next=l,l===null&&(po=a)):(a=o,(e!==0||(u&3)!==0)&&(ks=!0)),o=l}Fe!==0&&Fe!==5||fi(e),Ja!==0&&(Ja=0)}function Gh(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-Ct(u),v=1<<m,x=l[m];x===-1?((v&a)===0||(v&o)!==0)&&(l[m]=D0(v,t)):x<=t&&(e.expiredLanes|=v),u&=~v}if(t=Oe,a=ye,a=Zi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Br(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||jo(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Br(o),Hr(a)){case 2:case 8:a=Od;break;case 32:a=ki;break;case 268435456:a=jd;break;default:a=ki}return o=Ph.bind(null,e),a=_r(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Br(o),e.callbackPriority=2,e.callbackNode=null,2}function Ph(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gs()&&e.callbackNode!==a)return null;var o=ye;return o=Zi(e,e===Oe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ah(e,o,t),Gh(e,Et()),e.callbackNode!=null&&e.callbackNode===a?Ph.bind(null,e):null)}function kh(e,t){if(Gs())return null;Ah(e,t,!0)}function tS(){fS(function(){(Ae&6)!==0?_r(qd,eS):Qh()})}function Mu(){if(Ja===0){var e=In;e===0&&(e=Yi,Yi<<=1,(Yi&261888)===0&&(Yi=256)),Ja=e}return Ja}function Yh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$i(""+e)}function Xh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function aS(e,t,a,o,l){if(t==="submit"&&a&&a.stateNode===l){var u=Yh((l[gt]||null).action),m=o.submitter;m&&(t=(t=m[gt]||null)?Yh(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var v=new as("action","action",null,o,l);e.push({event:v,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var x=m?Xh(l,m):new FormData(l);Xl(a,{pending:!0,data:x,method:l.method,action:u},null,x)}}else typeof u=="function"&&(v.preventDefault(),x=m?Xh(l,m):new FormData(l),Xl(a,{pending:!0,data:x,method:l.method,action:u},u,x))},currentTarget:l}]})}}for(var Du=0;Du<ul.length;Du++){var zu=ul[Du],nS=zu.toLowerCase(),oS=zu[0].toUpperCase()+zu.slice(1);Xt(nS,"on"+oS)}Xt(xm,"onAnimationEnd"),Xt(Em,"onAnimationIteration"),Xt(Am,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Sb,"onTransitionRun"),Xt(Tb,"onTransitionStart"),Xt(xb,"onTransitionCancel"),Xt(Cm,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hi));function Jh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var m=o.length-1;0<=m;m--){var v=o[m],x=v.instance,D=v.currentTarget;if(v=v.listener,x!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=D;try{u(l)}catch(R){is(R)}l.currentTarget=null,u=x}else for(m=0;m<o.length;m++){if(v=o[m],x=v.instance,D=v.currentTarget,v=v.listener,x!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=D;try{u(l)}catch(R){is(R)}l.currentTarget=null,u=x}}}}function ve(e,t){var a=t[Qr];a===void 0&&(a=t[Qr]=new Set);var o=e+"__bubble";a.has(o)||(Zh(t,e,2,!1),a.add(o))}function Nu(e,t,a){var o=0;t&&(o|=4),Zh(a,e,o,t)}var Ys="_reactListening"+Math.random().toString(36).slice(2);function qu(e){if(!e[Ys]){e[Ys]=!0,Hd.forEach(function(a){a!=="selectionchange"&&(iS.has(a)||Nu(a,!1,e),Nu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ys]||(t[Ys]=!0,Nu("selectionchange",!1,t))}}function Zh(e,t,a,o){switch(Ep(t)){case 2:var l=RS;break;case 8:l=wS;break;default:l=Yu}a=l.bind(null,t,a,e),l=void 0,!Fr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Ou(e,t,a,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var v=o.stateNode.containerInfo;if(v===l)break;if(m===4)for(m=o.return;m!==null;){var x=m.tag;if((x===3||x===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;v!==null;){if(m=_n(v),m===null)return;if(x=m.tag,x===5||x===6||x===26||x===27){o=u=m;continue e}v=v.parentNode}}o=o.return}$d(function(){var D=u,R=Zr(a),V=[];e:{var N=Mm.get(e);if(N!==void 0){var q=as,I=e;switch(e){case"keypress":if(es(a)===0)break e;case"keydown":case"keyup":q=$0;break;case"focusin":I="focus",q=el;break;case"focusout":I="blur",q=el;break;case"beforeblur":case"afterblur":q=el;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=tb;break;case xm:case Em:case Am:q=P0;break;case Cm:q=nb;break;case"scroll":case"scrollend":q=L0;break;case"wheel":q=ib;break;case"copy":case"cut":case"paste":q=Y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=nm;break;case"toggle":case"beforetoggle":q=rb}var ue=(t&4)!==0,qe=!ue&&(e==="scroll"||e==="scrollend"),C=ue?N!==null?N+"Capture":null:N;ue=[];for(var E=D,M;E!==null;){var w=E;if(M=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||M===null||C===null||(w=_o(E,C),w!=null&&ue.push(pi(E,w,M))),qe)break;E=E.return}0<ue.length&&(N=new q(N,I,null,a,R),V.push({event:N,listeners:ue}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",N&&a!==Jr&&(I=a.relatedTarget||a.fromElement)&&(_n(I)||I[Vn]))break e;if((q||N)&&(N=R.window===R?R:(N=R.ownerDocument)?N.defaultView||N.parentWindow:window,q?(I=a.relatedTarget||a.toElement,q=D,I=I?_n(I):null,I!==null&&(qe=f(I),ue=I.tag,I!==qe||ue!==5&&ue!==27&&ue!==6)&&(I=null)):(q=null,I=D),q!==I)){if(ue=tm,w="onMouseLeave",C="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ue=nm,w="onPointerLeave",C="onPointerEnter",E="pointer"),qe=q==null?N:Vo(q),M=I==null?N:Vo(I),N=new ue(w,E+"leave",q,a,R),N.target=qe,N.relatedTarget=M,w=null,_n(R)===D&&(ue=new ue(C,E+"enter",I,a,R),ue.target=M,ue.relatedTarget=qe,w=ue),qe=w,q&&I)t:{for(ue=sS,C=q,E=I,M=0,w=C;w;w=ue(w))M++;w=0;for(var re=E;re;re=ue(re))w++;for(;0<M-w;)C=ue(C),M--;for(;0<w-M;)E=ue(E),w--;for(;M--;){if(C===E||E!==null&&C===E.alternate){ue=C;break t}C=ue(C),E=ue(E)}ue=null}else ue=null;q!==null&&Kh(V,N,q,ue,!1),I!==null&&qe!==null&&Kh(V,qe,I,ue,!0)}}e:{if(N=D?Vo(D):window,q=N.nodeName&&N.nodeName.toLowerCase(),q==="select"||q==="input"&&N.type==="file")var xe=dm;else if(um(N))if(mm)xe=vb;else{xe=pb;var ne=hb}else q=N.nodeName,!q||q.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?D&&Xr(D.elementType)&&(xe=dm):xe=gb;if(xe&&(xe=xe(e,D))){cm(V,xe,a,R);break e}ne&&ne(e,N,D),e==="focusout"&&D&&N.type==="number"&&D.memoizedProps.value!=null&&Yr(N,"number",N.value)}switch(ne=D?Vo(D):window,e){case"focusin":(um(ne)||ne.contentEditable==="true")&&(Yn=ne,sl=D,ko=null);break;case"focusout":ko=sl=Yn=null;break;case"mousedown":rl=!0;break;case"contextmenu":case"mouseup":case"dragend":rl=!1,Sm(V,a,R);break;case"selectionchange":if(bb)break;case"keydown":case"keyup":Sm(V,a,R)}var me;if(al)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else kn?rm(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(om&&a.locale!=="ko"&&(kn||be!=="onCompositionStart"?be==="onCompositionEnd"&&kn&&(me=Id()):(Oa=R,Wr="value"in Oa?Oa.value:Oa.textContent,kn=!0)),ne=Xs(D,be),0<ne.length&&(be=new am(be,e,null,a,R),V.push({event:be,listeners:ne}),me?be.data=me:(me=lm(a),me!==null&&(be.data=me)))),(me=ub?cb(e,a):db(e,a))&&(be=Xs(D,"onBeforeInput"),0<be.length&&(ne=new am("onBeforeInput","beforeinput",null,a,R),V.push({event:ne,listeners:be}),ne.data=me)),aS(V,e,D,a,R)}Jh(V,t)})}function pi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Xs(e,t){for(var a=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=_o(e,a),l!=null&&o.unshift(pi(e,l,u)),l=_o(e,t),l!=null&&o.push(pi(e,l,u))),e.tag===3)return o;e=e.return}return[]}function sS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kh(e,t,a,o,l){for(var u=t._reactName,m=[];a!==null&&a!==o;){var v=a,x=v.alternate,D=v.stateNode;if(v=v.tag,x!==null&&x===o)break;v!==5&&v!==26&&v!==27||D===null||(x=D,l?(D=_o(a,u),D!=null&&m.unshift(pi(a,D,x))):l||(D=_o(a,u),D!=null&&m.push(pi(a,D,x)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var rS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function Fh(e){return(typeof e=="string"?e:""+e).replace(rS,`
`).replace(lS,"")}function Wh(e,t){return t=Fh(t),Fh(e)===t}function Ne(e,t,a,o,l,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Qn(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Qn(e,""+o);break;case"className":Fi(e,"class",o);break;case"tabIndex":Fi(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Fi(e,a,o);break;case"style":Fd(e,o,u);break;case"data":if(t!=="object"){Fi(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$i(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&Ne(e,t,"name",l.name,l,null),Ne(e,t,"formEncType",l.formEncType,l,null),Ne(e,t,"formMethod",l.formMethod,l,null),Ne(e,t,"formTarget",l.formTarget,l,null)):(Ne(e,t,"encType",l.encType,l,null),Ne(e,t,"method",l.method,l,null),Ne(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$i(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=la);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=$i(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ki(e,"popover",o);break;case"xlinkActuate":ra(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ra(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ra(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ra(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ra(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ra(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ra(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ra(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ra(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ki(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_0.get(a)||a,Ki(e,a,o))}}function ju(e,t,a,o,l,u){switch(a){case"style":Fd(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Qn(e,o):(typeof o=="number"||typeof o=="bigint")&&Qn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),u=e[gt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,l);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ki(e,a,o)}}}function rt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var m=a[u];if(m!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ne(e,t,u,m,a,null)}}l&&Ne(e,t,"srcSet",a.srcSet,a,null),o&&Ne(e,t,"src",a.src,a,null);return;case"input":ve("invalid",e);var v=u=m=l=null,x=null,D=null;for(o in a)if(a.hasOwnProperty(o)){var R=a[o];if(R!=null)switch(o){case"name":l=R;break;case"type":m=R;break;case"checked":x=R;break;case"defaultChecked":D=R;break;case"value":u=R;break;case"defaultValue":v=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:Ne(e,t,o,R,a,null)}}Xd(e,u,v,x,D,m,l,!1);return;case"select":ve("invalid",e),o=m=u=null;for(l in a)if(a.hasOwnProperty(l)&&(v=a[l],v!=null))switch(l){case"value":u=v;break;case"defaultValue":m=v;break;case"multiple":o=v;default:Ne(e,t,l,v,a,null)}t=u,a=m,e.multiple=!!o,t!=null?Hn(e,!!o,t,!1):a!=null&&Hn(e,!!o,a,!0);return;case"textarea":ve("invalid",e),u=l=o=null;for(m in a)if(a.hasOwnProperty(m)&&(v=a[m],v!=null))switch(m){case"value":o=v;break;case"defaultValue":l=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(91));break;default:Ne(e,t,m,v,a,null)}Zd(e,o,l,u);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(o=a[x],o!=null))switch(x){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ne(e,t,x,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<hi.length;o++)ve(hi[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(o=a[D],o!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ne(e,t,D,o,a,null)}return;default:if(Xr(t)){for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!==void 0&&ju(e,t,R,o,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(o=a[v],o!=null&&Ne(e,t,v,o,a,null))}function uS(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,m=null,v=null,x=null,D=null,R=null;for(q in a){var V=a[q];if(a.hasOwnProperty(q)&&V!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":x=V;default:o.hasOwnProperty(q)||Ne(e,t,q,null,o,V)}}for(var N in o){var q=o[N];if(V=a[N],o.hasOwnProperty(N)&&(q!=null||V!=null))switch(N){case"type":u=q;break;case"name":l=q;break;case"checked":D=q;break;case"defaultChecked":R=q;break;case"value":m=q;break;case"defaultValue":v=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,t));break;default:q!==V&&Ne(e,t,N,q,o,V)}}kr(e,m,v,x,D,R,u,l);return;case"select":q=m=v=N=null;for(u in a)if(x=a[u],a.hasOwnProperty(u)&&x!=null)switch(u){case"value":break;case"multiple":q=x;default:o.hasOwnProperty(u)||Ne(e,t,u,null,o,x)}for(l in o)if(u=o[l],x=a[l],o.hasOwnProperty(l)&&(u!=null||x!=null))switch(l){case"value":N=u;break;case"defaultValue":v=u;break;case"multiple":m=u;default:u!==x&&Ne(e,t,l,u,o,x)}t=v,a=m,o=q,N!=null?Hn(e,!!a,N,!1):!!o!=!!a&&(t!=null?Hn(e,!!a,t,!0):Hn(e,!!a,a?[]:"",!1));return;case"textarea":q=N=null;for(v in a)if(l=a[v],a.hasOwnProperty(v)&&l!=null&&!o.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ne(e,t,v,null,o,l)}for(m in o)if(l=o[m],u=a[m],o.hasOwnProperty(m)&&(l!=null||u!=null))switch(m){case"value":N=l;break;case"defaultValue":q=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&Ne(e,t,m,l,o,u)}Jd(e,N,q);return;case"option":for(var I in a)if(N=a[I],a.hasOwnProperty(I)&&N!=null&&!o.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:Ne(e,t,I,null,o,N)}for(x in o)if(N=o[x],q=a[x],o.hasOwnProperty(x)&&N!==q&&(N!=null||q!=null))switch(x){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Ne(e,t,x,N,o,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in a)N=a[ue],a.hasOwnProperty(ue)&&N!=null&&!o.hasOwnProperty(ue)&&Ne(e,t,ue,null,o,N);for(D in o)if(N=o[D],q=a[D],o.hasOwnProperty(D)&&N!==q&&(N!=null||q!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,t));break;default:Ne(e,t,D,N,o,q)}return;default:if(Xr(t)){for(var qe in a)N=a[qe],a.hasOwnProperty(qe)&&N!==void 0&&!o.hasOwnProperty(qe)&&ju(e,t,qe,void 0,o,N);for(R in o)N=o[R],q=a[R],!o.hasOwnProperty(R)||N===q||N===void 0&&q===void 0||ju(e,t,R,N,o,q);return}}for(var C in a)N=a[C],a.hasOwnProperty(C)&&N!=null&&!o.hasOwnProperty(C)&&Ne(e,t,C,null,o,N);for(V in o)N=o[V],q=a[V],!o.hasOwnProperty(V)||N===q||N==null&&q==null||Ne(e,t,V,N,o,q)}function $h(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var l=a[o],u=l.transferSize,m=l.initiatorType,v=l.duration;if(u&&v&&$h(m)){for(m=0,v=l.responseEnd,o+=1;o<a.length;o++){var x=a[o],D=x.startTime;if(D>v)break;var R=x.transferSize,V=x.initiatorType;R&&$h(V)&&(x=x.responseEnd,m+=R*(x<v?1:(v-D)/(x-D)))}if(--o,t+=8*(u+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ru=null,wu=null;function Js(e){return e.nodeType===9?e:e.ownerDocument}function Ih(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ep(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=null;function dS(){var e=window.event;return e&&e.type==="popstate"?e===_u?!1:(_u=e,!0):(_u=null,!1)}var tp=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,fS=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(e){return ap.resolve(null).then(e).catch(hS)}:tp;function hS(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function np(e,t){var a=t,o=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(l),bo(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")gi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,gi(a);for(var u=a.firstChild;u;){var m=u.nextSibling,v=u.nodeName;u[wo]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=m}}else a==="body"&&gi(e.ownerDocument.body);a=l}while(a);bo(t)}function op(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Bu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bu(a),Gr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function pS(e,t,a,o){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function gS(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Gt(e.nextSibling),e===null))return null;return e}function ip(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function Lu(e){return e.data==="$?"||e.data==="$~"}function Uu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vS(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hu=null;function sp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Gt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function rp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function lp(e,t,a){switch(t=Js(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function gi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gr(e)}var Pt=new Map,up=new Set;function Zs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=Q.d;Q.d={f:yS,r:bS,D:SS,C:TS,L:xS,m:ES,X:CS,S:AS,M:MS};function yS(){var e=Aa.f(),t=Us();return e||t}function bS(e){var t=Bn(e);t!==null&&t.tag===5&&t.type==="form"?Mf(t):Aa.r(e)}var go=typeof document>"u"?null:document;function cp(e,t,a){var o=go;if(o&&typeof t=="string"&&t){var l=Vt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),up.has(l)||(up.add(l),e={rel:e,crossOrigin:a,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),rt(t,"link",e),et(t),o.head.appendChild(t)))}}function SS(e){Aa.D(e),cp("dns-prefetch",e,null)}function TS(e,t){Aa.C(e,t),cp("preconnect",e,t)}function xS(e,t,a){Aa.L(e,t,a);var o=go;if(o&&e&&t){var l='link[rel="preload"][as="'+Vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Vt(a.imageSizes)+'"]')):l+='[href="'+Vt(e)+'"]';var u=l;switch(t){case"style":u=vo(e);break;case"script":u=yo(e)}Pt.has(u)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Pt.set(u,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(vi(u))||t==="script"&&o.querySelector(yi(u))||(t=o.createElement("link"),rt(t,"link",e),et(t),o.head.appendChild(t)))}}function ES(e,t){Aa.m(e,t);var a=go;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(e)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=yo(e)}if(!Pt.has(u)&&(e=b({rel:"modulepreload",href:e},t),Pt.set(u,e),a.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yi(u)))return}o=a.createElement("link"),rt(o,"link",e),et(o),a.head.appendChild(o)}}}function AS(e,t,a){Aa.S(e,t,a);var o=go;if(o&&e){var l=Ln(o).hoistableStyles,u=vo(e);t=t||"default";var m=l.get(u);if(!m){var v={loading:0,preload:null};if(m=o.querySelector(vi(u)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Pt.get(u))&&Qu(e,a);var x=m=o.createElement("link");et(x),rt(x,"link",e),x._p=new Promise(function(D,R){x.onload=D,x.onerror=R}),x.addEventListener("load",function(){v.loading|=1}),x.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ks(m,t,o)}m={type:"stylesheet",instance:m,count:1,state:v},l.set(u,m)}}}function CS(e,t){Aa.X(e,t);var a=go;if(a&&e){var o=Ln(a).hoistableScripts,l=yo(e),u=o.get(l);u||(u=a.querySelector(yi(l)),u||(e=b({src:e,async:!0},t),(t=Pt.get(l))&&Gu(e,t),u=a.createElement("script"),et(u),rt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function MS(e,t){Aa.M(e,t);var a=go;if(a&&e){var o=Ln(a).hoistableScripts,l=yo(e),u=o.get(l);u||(u=a.querySelector(yi(l)),u||(e=b({src:e,async:!0,type:"module"},t),(t=Pt.get(l))&&Gu(e,t),u=a.createElement("script"),et(u),rt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function dp(e,t,a,o){var l=(l=le.current)?Zs(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=vo(a.href),a=Ln(l).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vo(a.href);var u=Ln(l).hoistableStyles,m=u.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=l.querySelector(vi(e)))&&!u._p&&(m.instance=u,m.state.loading=5),Pt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Pt.set(e,a),u||DS(l,e,a,m.state))),t&&o===null)throw Error(r(528,""));return m}if(t&&o!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yo(a),a=Ln(l).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function vo(e){return'href="'+Vt(e)+'"'}function vi(e){return'link[rel="stylesheet"]['+e+"]"}function mp(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function DS(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),rt(t,"link",a),et(t),e.head.appendChild(t))}function yo(e){return'[src="'+Vt(e)+'"]'}function yi(e){return"script[async]"+e}function fp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return t.instance=o,et(o),o;var l=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),et(o),rt(o,"style",l),Ks(o,a.precedence,e),t.instance=o;case"stylesheet":l=vo(a.href);var u=e.querySelector(vi(l));if(u)return t.state.loading|=4,t.instance=u,et(u),u;o=mp(a),(l=Pt.get(l))&&Qu(o,l),u=(e.ownerDocument||e).createElement("link"),et(u);var m=u;return m._p=new Promise(function(v,x){m.onload=v,m.onerror=x}),rt(u,"link",o),t.state.loading|=4,Ks(u,a.precedence,e),t.instance=u;case"script":return u=yo(a.src),(l=e.querySelector(yi(u)))?(t.instance=l,et(l),l):(o=a,(l=Pt.get(u))&&(o=b({},a),Gu(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),et(l),rt(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Ks(o,a.precedence,e));return t.instance}function Ks(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,m=0;m<o.length;m++){var v=o[m];if(v.dataset.precedence===t)u=v;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Qu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fs=null;function hp(e,t,a){if(Fs===null){var o=new Map,l=Fs=new Map;l.set(a,o)}else l=Fs,o=l.get(a),o||(o=new Map,l.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[wo]||u[nt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var v=o.get(m);v?v.push(u):o.set(m,[u])}}return o}function pp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function zS(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function NS(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=vo(o.href),u=t.querySelector(vi(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ws.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,et(u);return}u=t.ownerDocument||t,o=mp(o),(l=Pt.get(l))&&Qu(o,l),u=u.createElement("link"),et(u);var m=u;m._p=new Promise(function(v,x){m.onload=v,m.onerror=x}),rt(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ws.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Pu=0;function qS(e,t){return e.stylesheets&&e.count===0&&Is(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Is(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Pu===0&&(Pu=62500*cS());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Is(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Pu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function Ws(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Is(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $s=null;function Is(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$s=new Map,t.forEach(OS,e),$s=null,Ws.call(e))}function OS(e,t){if(!(t.state.loading&4)){var a=$s.get(e);if(a)var o=a.get(null);else{a=new Map,$s.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var m=l[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),o=m)}o&&a.set(null,o)}l=t.instance,m=l.getAttribute("data-precedence"),u=a.get(m)||o,u===o&&a.set(null,l),a.set(m,l),this.count++,o=Ws.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var bi={$$typeof:G,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function jS(e,t,a,o,l,u,m,v,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.hiddenUpdates=Lr(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function vp(e,t,a,o,l,u,m,v,x,D,R,V){return e=new jS(e,t,a,m,x,D,R,V,v),t=1,u===!0&&(t|=24),u=Dt(3,null,null,t),e.current=u,u.stateNode=e,t=xl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},Ml(u),e}function yp(e){return e?(e=Zn,e):Zn}function bp(e,t,a,o,l,u){l=yp(l),o.context===null?o.context=l:o.pendingContext=l,o=Ba(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=La(e,o,t),a!==null&&(xt(a,e,t),Wo(a,e,t))}function Sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ku(e,t){Sp(e,t),(e=e.alternate)&&Sp(e,t)}function Tp(e){if(e.tag===13||e.tag===31){var t=hn(e,67108864);t!==null&&xt(t,e,67108864),ku(e,67108864)}}function xp(e){if(e.tag===13||e.tag===31){var t=jt();t=Ur(t);var a=hn(e,t);a!==null&&xt(a,e,t),ku(e,t)}}var er=!0;function RS(e,t,a,o){var l=j.T;j.T=null;var u=Q.p;try{Q.p=2,Yu(e,t,a,o)}finally{Q.p=u,j.T=l}}function wS(e,t,a,o){var l=j.T;j.T=null;var u=Q.p;try{Q.p=8,Yu(e,t,a,o)}finally{Q.p=u,j.T=l}}function Yu(e,t,a,o){if(er){var l=Xu(o);if(l===null)Ou(e,t,o,tr,a),Ap(e,o);else if(_S(l,e,t,a,o))o.stopPropagation();else if(Ap(e,o),t&4&&-1<VS.indexOf(e)){for(;l!==null;){var u=Bn(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=un(u.pendingLanes);if(m!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var x=1<<31-Ct(m);v.entanglements[1]|=x,m&=~x}aa(u),(Ae&6)===0&&(Bs=Et()+500,fi(0))}}break;case 31:case 13:v=hn(u,2),v!==null&&xt(v,u,2),Us(),ku(u,2)}if(u=Xu(o),u===null&&Ou(e,t,o,tr,a),u===l)break;l=u}l!==null&&o.stopPropagation()}else Ou(e,t,o,null,a)}}function Xu(e){return e=Zr(e),Ju(e)}var tr=null;function Ju(e){if(tr=null,e=_n(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=p(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tr=e,null}function Ep(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(S0()){case qd:return 2;case Od:return 8;case ki:case T0:return 32;case jd:return 268435456;default:return 32}default:return 32}}var Zu=!1,Ka=null,Fa=null,Wa=null,Si=new Map,Ti=new Map,$a=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ap(e,t){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function xi(e,t,a,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Bn(t),t!==null&&Tp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _S(e,t,a,o,l){switch(t){case"focusin":return Ka=xi(Ka,e,t,a,o,l),!0;case"dragenter":return Fa=xi(Fa,e,t,a,o,l),!0;case"mouseover":return Wa=xi(Wa,e,t,a,o,l),!0;case"pointerover":var u=l.pointerId;return Si.set(u,xi(Si.get(u)||null,e,t,a,o,l)),!0;case"gotpointercapture":return u=l.pointerId,Ti.set(u,xi(Ti.get(u)||null,e,t,a,o,l)),!0}return!1}function Cp(e){var t=_n(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,Ld(e.priority,function(){xp(a)});return}}else if(t===31){if(t=p(a),t!==null){e.blockedOn=t,Ld(e.priority,function(){xp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xu(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Jr=o,a.target.dispatchEvent(o),Jr=null}else return t=Bn(a),t!==null&&Tp(t),e.blockedOn=a,!1;t.shift()}return!0}function Mp(e,t,a){ar(e)&&a.delete(t)}function BS(){Zu=!1,Ka!==null&&ar(Ka)&&(Ka=null),Fa!==null&&ar(Fa)&&(Fa=null),Wa!==null&&ar(Wa)&&(Wa=null),Si.forEach(Mp),Ti.forEach(Mp)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zu||(Zu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,BS)))}var or=null;function Dp(e){or!==e&&(or=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){or===e&&(or=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(Ju(o||a)===null)continue;break}var u=Bn(a);u!==null&&(e.splice(t,3),t-=3,Xl(u,{pending:!0,data:l,method:a.method,action:o},o,l))}}))}function bo(e){function t(x){return nr(x,e)}Ka!==null&&nr(Ka,e),Fa!==null&&nr(Fa,e),Wa!==null&&nr(Wa,e),Si.forEach(t),Ti.forEach(t);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)Cp(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var l=a[o],u=a[o+1],m=l[gt]||null;if(typeof u=="function")m||Dp(a);else if(m){var v=null;if(u&&u.hasAttribute("formAction")){if(l=u,m=u[gt]||null)v=m.formAction;else if(Ju(l)!==null)continue}else v=m.action;typeof v=="function"?a[o+1]=v:(a.splice(o,3),o-=3),Dp(a)}}}function zp(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ku(e){this._internalRoot=e}ir.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,o=jt();bp(a,o,e,t,null,null)},ir.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bp(e.current,2,null,e,null,null),Us(),t[Vn]=null}};function ir(e){this._internalRoot=e}ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<$a.length&&t!==0&&t<$a[a].priority;a++);$a.splice(a,0,e),a===0&&Cp(e)}};var Np=i.version;if(Np!=="19.2.4")throw Error(r(527,Np,"19.2.4"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var LS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sr.isDisabled&&sr.supportsFiber)try{Oo=sr.inject(LS),At=sr}catch{}}return Ai.createRoot=function(e,t){if(!c(e))throw Error(r(299));var a=!1,o="",l=_f,u=Bf,m=Lf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=vp(e,1,!1,null,null,a,o,null,l,u,m,zp),e[Vn]=t.current,qu(e),new Ku(t)},Ai.hydrateRoot=function(e,t,a){if(!c(e))throw Error(r(299));var o=!1,l="",u=_f,m=Bf,v=Lf,x=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=vp(e,1,!0,t,a??null,o,l,x,u,m,v,zp),t.context=yp(null),a=t.current,o=jt(),o=Ur(o),l=Ba(o),l.callback=null,La(a,l,o),a=o,t.current.lanes=a,Ro(t,a),aa(t),e[Vn]=t.current,qu(e),new ir(t)},Ai.version="19.2.4",Ai}var Up;function ZS(){if(Up)return $u.exports;Up=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),$u.exports=JS(),$u.exports}var KS=ZS();const Zc=P.createContext({});function Kc(n){const i=P.useRef(null);return i.current===null&&(i.current=n()),i.current}const mv=typeof window<"u",fv=mv?P.useLayoutEffect:P.useEffect,Nr=P.createContext(null);function Fc(n,i){n.indexOf(i)===-1&&n.push(i)}function br(n,i){const s=n.indexOf(i);s>-1&&n.splice(s,1)}const ia=(n,i,s)=>s>i?i:s<n?n:s;let Wc=()=>{};const Ma={},hv=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function pv(n){return typeof n=="object"&&n!==null}const gv=n=>/^0[^.\s]+$/u.test(n);function vv(n){let i;return()=>(i===void 0&&(i=n()),i)}const Yt=n=>n,FS=(n,i)=>s=>i(n(s)),Ui=(...n)=>n.reduce(FS),wi=(n,i,s)=>{const r=i-n;return r===0?1:(s-n)/r};class $c{constructor(){this.subscriptions=[]}add(i){return Fc(this.subscriptions,i),()=>br(this.subscriptions,i)}notify(i,s,r){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,s,r);else for(let f=0;f<c;f++){const d=this.subscriptions[f];d&&d(i,s,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Wt=n=>n*1e3,kt=n=>n/1e3;function yv(n,i){return i?n*(1e3/i):0}const bv=(n,i,s)=>(((1-3*s+3*i)*n+(3*s-6*i))*n+3*i)*n,WS=1e-7,$S=12;function IS(n,i,s,r,c){let f,d,p=0;do d=i+(s-i)/2,f=bv(d,r,c)-n,f>0?s=d:i=d;while(Math.abs(f)>WS&&++p<$S);return d}function Hi(n,i,s,r){if(n===i&&s===r)return Yt;const c=f=>IS(f,0,1,n,s);return f=>f===0||f===1?f:bv(c(f),i,r)}const Sv=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,Tv=n=>i=>1-n(1-i),xv=Hi(.33,1.53,.69,.99),Ic=Tv(xv),Ev=Sv(Ic),Av=n=>(n*=2)<1?.5*Ic(n):.5*(2-Math.pow(2,-10*(n-1))),ed=n=>1-Math.sin(Math.acos(n)),Cv=Tv(ed),Mv=Sv(ed),e1=Hi(.42,0,1,1),t1=Hi(0,0,.58,1),Dv=Hi(.42,0,.58,1),a1=n=>Array.isArray(n)&&typeof n[0]!="number",zv=n=>Array.isArray(n)&&typeof n[0]=="number",n1={linear:Yt,easeIn:e1,easeInOut:Dv,easeOut:t1,circIn:ed,circInOut:Mv,circOut:Cv,backIn:Ic,backInOut:Ev,backOut:xv,anticipate:Av},o1=n=>typeof n=="string",Hp=n=>{if(zv(n)){Wc(n.length===4);const[i,s,r,c]=n;return Hi(i,s,r,c)}else if(o1(n))return n1[n];return n},rr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function i1(n,i){let s=new Set,r=new Set,c=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(y){d.has(y)&&(g.schedule(y),n()),y(p)}const g={schedule:(y,b=!1,S=!1)=>{const O=S&&c?s:r;return b&&d.add(y),O.has(y)||O.add(y),y},cancel:y=>{r.delete(y),d.delete(y)},process:y=>{if(p=y,c){f=!0;return}c=!0,[s,r]=[r,s],s.forEach(h),s.clear(),c=!1,f&&(f=!1,g.process(y))}};return g}const s1=40;function Nv(n,i){let s=!1,r=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>s=!0,d=rr.reduce((G,Z)=>(G[Z]=i1(f),G),{}),{setup:p,read:h,resolveKeyframes:g,preUpdate:y,update:b,preRender:S,render:z,postRender:O}=d,L=()=>{const G=Ma.useManualTiming?c.timestamp:performance.now();s=!1,Ma.useManualTiming||(c.delta=r?1e3/60:Math.max(Math.min(G-c.timestamp,s1),1)),c.timestamp=G,c.isProcessing=!0,p.process(c),h.process(c),g.process(c),y.process(c),b.process(c),S.process(c),z.process(c),O.process(c),c.isProcessing=!1,s&&i&&(r=!1,n(L))},U=()=>{s=!0,r=!0,c.isProcessing||n(L)};return{schedule:rr.reduce((G,Z)=>{const Y=d[Z];return G[Z]=(ie,W=!1,B=!1)=>(s||U(),Y.schedule(ie,W,B)),G},{}),cancel:G=>{for(let Z=0;Z<rr.length;Z++)d[rr[Z]].cancel(G)},state:c,steps:d}}const{schedule:je,cancel:sn,state:lt,steps:ac}=Nv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yt,!0);let fr;function r1(){fr=void 0}const ft={now:()=>(fr===void 0&&ft.set(lt.isProcessing||Ma.useManualTiming?lt.timestamp:performance.now()),fr),set:n=>{fr=n,queueMicrotask(r1)}},qv=n=>i=>typeof i=="string"&&i.startsWith(n),Ov=qv("--"),l1=qv("var(--"),td=n=>l1(n)?u1.test(n.split("/*")[0].trim()):!1,u1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Qp(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const zo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Vi={...zo,transform:n=>ia(0,1,n)},lr={...zo,default:1},qi=n=>Math.round(n*1e5)/1e5,ad=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function c1(n){return n==null}const d1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,nd=(n,i)=>s=>!!(typeof s=="string"&&d1.test(s)&&s.startsWith(n)||i&&!c1(s)&&Object.prototype.hasOwnProperty.call(s,i)),jv=(n,i,s)=>r=>{if(typeof r!="string")return r;const[c,f,d,p]=r.match(ad);return{[n]:parseFloat(c),[i]:parseFloat(f),[s]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},m1=n=>ia(0,255,n),nc={...zo,transform:n=>Math.round(m1(n))},qn={test:nd("rgb","red"),parse:jv("red","green","blue"),transform:({red:n,green:i,blue:s,alpha:r=1})=>"rgba("+nc.transform(n)+", "+nc.transform(i)+", "+nc.transform(s)+", "+qi(Vi.transform(r))+")"};function f1(n){let i="",s="",r="",c="";return n.length>5?(i=n.substring(1,3),s=n.substring(3,5),r=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),s=n.substring(2,3),r=n.substring(3,4),c=n.substring(4,5),i+=i,s+=s,r+=r,c+=c),{red:parseInt(i,16),green:parseInt(s,16),blue:parseInt(r,16),alpha:c?parseInt(c,16)/255:1}}const Tc={test:nd("#"),parse:f1,transform:qn.transform},Qi=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),an=Qi("deg"),oa=Qi("%"),te=Qi("px"),h1=Qi("vh"),p1=Qi("vw"),Gp={...oa,parse:n=>oa.parse(n)/100,transform:n=>oa.transform(n*100)},To={test:nd("hsl","hue"),parse:jv("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:s,alpha:r=1})=>"hsla("+Math.round(n)+", "+oa.transform(qi(i))+", "+oa.transform(qi(s))+", "+qi(Vi.transform(r))+")"},Ke={test:n=>qn.test(n)||Tc.test(n)||To.test(n),parse:n=>qn.test(n)?qn.parse(n):To.test(n)?To.parse(n):Tc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?qn.transform(n):To.transform(n),getAnimatableNone:n=>{const i=Ke.parse(n);return i.alpha=0,Ke.transform(i)}},g1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function v1(n){var i,s;return isNaN(n)&&typeof n=="string"&&(((i=n.match(ad))==null?void 0:i.length)||0)+(((s=n.match(g1))==null?void 0:s.length)||0)>0}const Rv="number",wv="color",y1="var",b1="var(",Pp="${}",S1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _i(n){const i=n.toString(),s=[],r={color:[],number:[],var:[]},c=[];let f=0;const p=i.replace(S1,h=>(Ke.test(h)?(r.color.push(f),c.push(wv),s.push(Ke.parse(h))):h.startsWith(b1)?(r.var.push(f),c.push(y1),s.push(h)):(r.number.push(f),c.push(Rv),s.push(parseFloat(h))),++f,Pp)).split(Pp);return{values:s,split:p,indexes:r,types:c}}function Vv(n){return _i(n).values}function _v(n){const{split:i,types:s}=_i(n),r=i.length;return c=>{let f="";for(let d=0;d<r;d++)if(f+=i[d],c[d]!==void 0){const p=s[d];p===Rv?f+=qi(c[d]):p===wv?f+=Ke.transform(c[d]):f+=c[d]}return f}}const T1=n=>typeof n=="number"?0:Ke.test(n)?Ke.getAnimatableNone(n):n;function x1(n){const i=Vv(n);return _v(n)(i.map(T1))}const $t={test:v1,parse:Vv,createTransformer:_v,getAnimatableNone:x1};function oc(n,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(i-n)*6*s:s<1/2?i:s<2/3?n+(i-n)*(2/3-s)*6:n}function E1({hue:n,saturation:i,lightness:s,alpha:r}){n/=360,i/=100,s/=100;let c=0,f=0,d=0;if(!i)c=f=d=s;else{const p=s<.5?s*(1+i):s+i-s*i,h=2*s-p;c=oc(h,p,n+1/3),f=oc(h,p,n),d=oc(h,p,n-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:r}}function Sr(n,i){return s=>s>0?i:n}const Le=(n,i,s)=>n+(i-n)*s,ic=(n,i,s)=>{const r=n*n,c=s*(i*i-r)+r;return c<0?0:Math.sqrt(c)},A1=[Tc,qn,To],C1=n=>A1.find(i=>i.test(n));function kp(n){const i=C1(n);if(!i)return!1;let s=i.parse(n);return i===To&&(s=E1(s)),s}const Yp=(n,i)=>{const s=kp(n),r=kp(i);if(!s||!r)return Sr(n,i);const c={...s};return f=>(c.red=ic(s.red,r.red,f),c.green=ic(s.green,r.green,f),c.blue=ic(s.blue,r.blue,f),c.alpha=Le(s.alpha,r.alpha,f),qn.transform(c))},xc=new Set(["none","hidden"]);function M1(n,i){return xc.has(n)?s=>s<=0?n:i:s=>s>=1?i:n}function D1(n,i){return s=>Le(n,i,s)}function od(n){return typeof n=="number"?D1:typeof n=="string"?td(n)?Sr:Ke.test(n)?Yp:q1:Array.isArray(n)?Bv:typeof n=="object"?Ke.test(n)?Yp:z1:Sr}function Bv(n,i){const s=[...n],r=s.length,c=n.map((f,d)=>od(f)(f,i[d]));return f=>{for(let d=0;d<r;d++)s[d]=c[d](f);return s}}function z1(n,i){const s={...n,...i},r={};for(const c in s)n[c]!==void 0&&i[c]!==void 0&&(r[c]=od(n[c])(n[c],i[c]));return c=>{for(const f in r)s[f]=r[f](c);return s}}function N1(n,i){const s=[],r={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const f=i.types[c],d=n.indexes[f][r[f]],p=n.values[d]??0;s[c]=p,r[f]++}return s}const q1=(n,i)=>{const s=$t.createTransformer(i),r=_i(n),c=_i(i);return r.indexes.var.length===c.indexes.var.length&&r.indexes.color.length===c.indexes.color.length&&r.indexes.number.length>=c.indexes.number.length?xc.has(n)&&!c.values.length||xc.has(i)&&!r.values.length?M1(n,i):Ui(Bv(N1(r,c),c.values),s):Sr(n,i)};function Lv(n,i,s){return typeof n=="number"&&typeof i=="number"&&typeof s=="number"?Le(n,i,s):od(n)(n,i)}const O1=n=>{const i=({timestamp:s})=>n(s);return{start:(s=!0)=>je.update(i,s),stop:()=>sn(i),now:()=>lt.isProcessing?lt.timestamp:ft.now()}},Uv=(n,i,s=10)=>{let r="";const c=Math.max(Math.round(i/s),2);for(let f=0;f<c;f++)r+=Math.round(n(f/(c-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Tr=2e4;function id(n){let i=0;const s=50;let r=n.next(i);for(;!r.done&&i<Tr;)i+=s,r=n.next(i);return i>=Tr?1/0:i}function j1(n,i=100,s){const r=s({...n,keyframes:[0,i]}),c=Math.min(id(r),Tr);return{type:"keyframes",ease:f=>r.next(c*f).value/i,duration:kt(c)}}const R1=5;function Hv(n,i,s){const r=Math.max(i-R1,0);return yv(s-n(r),i-r)}const Qe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},sc=.001;function w1({duration:n=Qe.duration,bounce:i=Qe.bounce,velocity:s=Qe.velocity,mass:r=Qe.mass}){let c,f,d=1-i;d=ia(Qe.minDamping,Qe.maxDamping,d),n=ia(Qe.minDuration,Qe.maxDuration,kt(n)),d<1?(c=g=>{const y=g*d,b=y*n,S=y-s,z=Ec(g,d),O=Math.exp(-b);return sc-S/z*O},f=g=>{const b=g*d*n,S=b*s+s,z=Math.pow(d,2)*Math.pow(g,2)*n,O=Math.exp(-b),L=Ec(Math.pow(g,2),d);return(-c(g)+sc>0?-1:1)*((S-z)*O)/L}):(c=g=>{const y=Math.exp(-g*n),b=(g-s)*n+1;return-sc+y*b},f=g=>{const y=Math.exp(-g*n),b=(s-g)*(n*n);return y*b});const p=5/n,h=_1(c,f,p);if(n=Wt(n),isNaN(h))return{stiffness:Qe.stiffness,damping:Qe.damping,duration:n};{const g=Math.pow(h,2)*r;return{stiffness:g,damping:d*2*Math.sqrt(r*g),duration:n}}}const V1=12;function _1(n,i,s){let r=s;for(let c=1;c<V1;c++)r=r-n(r)/i(r);return r}function Ec(n,i){return n*Math.sqrt(1-i*i)}const B1=["duration","bounce"],L1=["stiffness","damping","mass"];function Xp(n,i){return i.some(s=>n[s]!==void 0)}function U1(n){let i={velocity:Qe.velocity,stiffness:Qe.stiffness,damping:Qe.damping,mass:Qe.mass,isResolvedFromDuration:!1,...n};if(!Xp(n,L1)&&Xp(n,B1))if(i.velocity=0,n.visualDuration){const s=n.visualDuration,r=2*Math.PI/(s*1.2),c=r*r,f=2*ia(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:Qe.mass,stiffness:c,damping:f}}else{const s=w1({...n,velocity:0});i={...i,...s,mass:Qe.mass},i.isResolvedFromDuration=!0}return i}function xr(n=Qe.visualDuration,i=Qe.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:r,restDelta:c}=s;const f=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],p={done:!1,value:f},{stiffness:h,damping:g,mass:y,duration:b,velocity:S,isResolvedFromDuration:z}=U1({...s,velocity:-kt(s.velocity||0)}),O=S||0,L=g/(2*Math.sqrt(h*y)),U=d-f,H=kt(Math.sqrt(h/y)),X=Math.abs(U)<5;r||(r=X?Qe.restSpeed.granular:Qe.restSpeed.default),c||(c=X?Qe.restDelta.granular:Qe.restDelta.default);let G;if(L<1){const Y=Ec(H,L);G=ie=>{const W=Math.exp(-L*H*ie);return d-W*((O+L*H*U)/Y*Math.sin(Y*ie)+U*Math.cos(Y*ie))}}else if(L===1)G=Y=>d-Math.exp(-H*Y)*(U+(O+H*U)*Y);else{const Y=H*Math.sqrt(L*L-1);G=ie=>{const W=Math.exp(-L*H*ie),B=Math.min(Y*ie,300);return d-W*((O+L*H*U)*Math.sinh(B)+Y*U*Math.cosh(B))/Y}}const Z={calculatedDuration:z&&b||null,next:Y=>{const ie=G(Y);if(z)p.done=Y>=b;else{let W=Y===0?O:0;L<1&&(W=Y===0?Wt(O):Hv(G,Y,ie));const B=Math.abs(W)<=r,se=Math.abs(d-ie)<=c;p.done=B&&se}return p.value=p.done?d:ie,p},toString:()=>{const Y=Math.min(id(Z),Tr),ie=Uv(W=>Z.next(Y*W).value,Y,30);return Y+"ms "+ie},toTransition:()=>{}};return Z}xr.applyToOptions=n=>{const i=j1(n,100,xr);return n.ease=i.ease,n.duration=Wt(i.duration),n.type="keyframes",n};function Ac({keyframes:n,velocity:i=0,power:s=.8,timeConstant:r=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:h,restDelta:g=.5,restSpeed:y}){const b=n[0],S={done:!1,value:b},z=B=>p!==void 0&&B<p||h!==void 0&&B>h,O=B=>p===void 0?h:h===void 0||Math.abs(p-B)<Math.abs(h-B)?p:h;let L=s*i;const U=b+L,H=d===void 0?U:d(U);H!==U&&(L=H-b);const X=B=>-L*Math.exp(-B/r),G=B=>H+X(B),Z=B=>{const se=X(B),Ce=G(B);S.done=Math.abs(se)<=g,S.value=S.done?H:Ce};let Y,ie;const W=B=>{z(S.value)&&(Y=B,ie=xr({keyframes:[S.value,O(S.value)],velocity:Hv(G,B,S.value),damping:c,stiffness:f,restDelta:g,restSpeed:y}))};return W(0),{calculatedDuration:null,next:B=>{let se=!1;return!ie&&Y===void 0&&(se=!0,Z(B),W(B)),Y!==void 0&&B>=Y?ie.next(B-Y):(!se&&Z(B),S)}}}function H1(n,i,s){const r=[],c=s||Ma.mix||Lv,f=n.length-1;for(let d=0;d<f;d++){let p=c(n[d],n[d+1]);if(i){const h=Array.isArray(i)?i[d]||Yt:i;p=Ui(h,p)}r.push(p)}return r}function Q1(n,i,{clamp:s=!0,ease:r,mixer:c}={}){const f=n.length;if(Wc(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const p=H1(i,r,c),h=p.length,g=y=>{if(d&&y<n[0])return i[0];let b=0;if(h>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const S=wi(n[b],n[b+1],y);return p[b](S)};return s?y=>g(ia(n[0],n[f-1],y)):g}function G1(n,i){const s=n[n.length-1];for(let r=1;r<=i;r++){const c=wi(0,i,r);n.push(Le(s,1,c))}}function P1(n){const i=[0];return G1(i,n.length-1),i}function k1(n,i){return n.map(s=>s*i)}function Y1(n,i){return n.map(()=>i||Dv).splice(0,n.length-1)}function Oi({duration:n=300,keyframes:i,times:s,ease:r="easeInOut"}){const c=a1(r)?r.map(Hp):Hp(r),f={done:!1,value:i[0]},d=k1(s&&s.length===i.length?s:P1(i),n),p=Q1(d,i,{ease:Array.isArray(c)?c:Y1(i,c)});return{calculatedDuration:n,next:h=>(f.value=p(h),f.done=h>=n,f)}}const X1=n=>n!==null;function sd(n,{repeat:i,repeatType:s="loop"},r,c=1){const f=n.filter(X1),p=c<0||i&&s!=="loop"&&i%2===1?0:f.length-1;return!p||r===void 0?f[p]:r}const J1={decay:Ac,inertia:Ac,tween:Oi,keyframes:Oi,spring:xr};function Qv(n){typeof n.type=="string"&&(n.type=J1[n.type])}class rd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,s){return this.finished.then(i,s)}}const Z1=n=>n/100;class ld extends rd{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,c;const{motionValue:s}=this.options;s&&s.updatedAt!==ft.now()&&this.tick(ft.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(r=this.options).onStop)==null||c.call(r))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Qv(i);const{type:s=Oi,repeat:r=0,repeatDelay:c=0,repeatType:f,velocity:d=0}=i;let{keyframes:p}=i;const h=s||Oi;h!==Oi&&typeof p[0]!="number"&&(this.mixKeyframes=Ui(Z1,Lv(p[0],p[1])),p=[0,100]);const g=h({...i,keyframes:p});f==="mirror"&&(this.mirroredGenerator=h({...i,keyframes:[...p].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=id(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(r+1)-c,this.generator=g}updateTime(i){const s=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(i,s=!1){const{generator:r,totalDuration:c,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:z,type:O,onUpdate:L,finalKeyframe:U}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),s?this.currentTime=i:this.updateTime(i);const H=this.currentTime-g*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?H<0:H>c;this.currentTime=Math.max(H,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let G=this.currentTime,Z=r;if(b){const B=Math.min(this.currentTime,c)/p;let se=Math.floor(B),Ce=B%1;!Ce&&B>=1&&(Ce=1),Ce===1&&se--,se=Math.min(se,b+1),!!(se%2)&&(S==="reverse"?(Ce=1-Ce,z&&(Ce-=z/p)):S==="mirror"&&(Z=d)),G=ia(0,1,Ce)*p}const Y=X?{done:!1,value:y[0]}:Z.next(G);f&&(Y.value=f(Y.value));let{done:ie}=Y;!X&&h!==null&&(ie=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ie);return W&&O!==Ac&&(Y.value=sd(y,this.options,U,this.speed)),L&&L(Y.value),W&&this.finish(),Y}then(i,s){return this.finished.then(i,s)}get duration(){return kt(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+kt(i)}get time(){return kt(this.currentTime)}set time(i){var s;i=Wt(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),(s=this.driver)==null||s.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(ft.now());const s=this.playbackSpeed!==i;this.playbackSpeed=i,s&&(this.time=kt(this.currentTime))}play(){var c,f;if(this.isStopped)return;const{driver:i=O1,startTime:s}=this.options;this.driver||(this.driver=i(d=>this.tick(d))),(f=(c=this.options).onPlay)==null||f.call(c);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=s??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ft.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,s;this.notifyFinished(),this.teardown(),this.state="finished",(s=(i=this.options).onComplete)==null||s.call(i)}cancel(){var i,s;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(s=(i=this.options).onCancel)==null||s.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var s;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(s=this.driver)==null||s.stop(),i.observe(this)}}function K1(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const On=n=>n*180/Math.PI,Cc=n=>{const i=On(Math.atan2(n[1],n[0]));return Mc(i)},F1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Cc,rotateZ:Cc,skewX:n=>On(Math.atan(n[1])),skewY:n=>On(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Mc=n=>(n=n%360,n<0&&(n+=360),n),Jp=Cc,Zp=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Kp=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),W1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Zp,scaleY:Kp,scale:n=>(Zp(n)+Kp(n))/2,rotateX:n=>Mc(On(Math.atan2(n[6],n[5]))),rotateY:n=>Mc(On(Math.atan2(-n[2],n[0]))),rotateZ:Jp,rotate:Jp,skewX:n=>On(Math.atan(n[4])),skewY:n=>On(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Dc(n){return n.includes("scale")?1:0}function zc(n,i){if(!n||n==="none")return Dc(i);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,c;if(s)r=W1,c=s;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=F1,c=p}if(!c)return Dc(i);const f=r[i],d=c[1].split(",").map(I1);return typeof f=="function"?f(d):d[f]}const $1=(n,i)=>{const{transform:s="none"}=getComputedStyle(n);return zc(s,i)};function I1(n){return parseFloat(n.trim())}const No=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qo=new Set(No),Fp=n=>n===zo||n===te,eT=new Set(["x","y","z"]),tT=No.filter(n=>!eT.has(n));function aT(n){const i=[];return tT.forEach(s=>{const r=n.getValue(s);r!==void 0&&(i.push([s,r.get()]),r.set(s.startsWith("scale")?1:0))}),i}const on={width:({x:n},{paddingLeft:i="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),height:({y:n},{paddingTop:i="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>zc(i,"x"),y:(n,{transform:i})=>zc(i,"y")};on.translateX=on.x;on.translateY=on.y;const jn=new Set;let Nc=!1,qc=!1,Oc=!1;function Gv(){if(qc){const n=Array.from(jn).filter(r=>r.needsMeasurement),i=new Set(n.map(r=>r.element)),s=new Map;i.forEach(r=>{const c=aT(r);c.length&&(s.set(r,c),r.render())}),n.forEach(r=>r.measureInitialState()),i.forEach(r=>{r.render();const c=s.get(r);c&&c.forEach(([f,d])=>{var p;(p=r.getValue(f))==null||p.set(d)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}qc=!1,Nc=!1,jn.forEach(n=>n.complete(Oc)),jn.clear()}function Pv(){jn.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(qc=!0)})}function nT(){Oc=!0,Pv(),Gv(),Oc=!1}class ud{constructor(i,s,r,c,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=s,this.name=r,this.motionValue=c,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(jn.add(this),Nc||(Nc=!0,je.read(Pv),je.resolveKeyframes(Gv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:s,element:r,motionValue:c}=this;if(i[0]===null){const f=c==null?void 0:c.get(),d=i[i.length-1];if(f!==void 0)i[0]=f;else if(r&&s){const p=r.readValue(s,d);p!=null&&(i[0]=p)}i[0]===void 0&&(i[0]=d),c&&f===void 0&&c.set(i[0])}K1(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),jn.delete(this)}cancel(){this.state==="scheduled"&&(jn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const oT=n=>n.startsWith("--");function iT(n,i,s){oT(i)?n.style.setProperty(i,s):n.style[i]=s}const sT={};function kv(n,i){const s=vv(n);return()=>sT[i]??s()}const rT=kv(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Yv=kv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ni=([n,i,s,r])=>`cubic-bezier(${n}, ${i}, ${s}, ${r})`,Wp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ni([0,.65,.55,1]),circOut:Ni([.55,0,1,.45]),backIn:Ni([.31,.01,.66,-.59]),backOut:Ni([.33,1.53,.69,.99])};function Xv(n,i){if(n)return typeof n=="function"?Yv()?Uv(n,i):"ease-out":zv(n)?Ni(n):Array.isArray(n)?n.map(s=>Xv(s,i)||Wp.easeOut):Wp[n]}function lT(n,i,s,{delay:r=0,duration:c=300,repeat:f=0,repeatType:d="loop",ease:p="easeOut",times:h}={},g=void 0){const y={[i]:s};h&&(y.offset=h);const b=Xv(p,c);Array.isArray(b)&&(y.easing=b);const S={delay:r,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),n.animate(y,S)}function Jv(n){return typeof n=="function"&&"applyToOptions"in n}function uT({type:n,...i}){return Jv(n)&&Yv()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class Zv extends rd{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:s,name:r,keyframes:c,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:p,onComplete:h}=i;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=i,Wc(typeof i.type!="string");const g=uT(i);this.animation=lT(s,r,c,g,f),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const y=sd(c,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):iT(s,r,y),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,s;(s=(i=this.animation).finish)==null||s.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var s,r,c;const i=(s=this.options)==null?void 0:s.element;!this.isPseudoElement&&(i!=null&&i.isConnected)&&((c=(r=this.animation).commitStyles)==null||c.call(r))}get duration(){var s,r;const i=((r=(s=this.animation.effect)==null?void 0:s.getComputedTiming)==null?void 0:r.call(s).duration)||0;return kt(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+kt(i)}get time(){return kt(Number(this.animation.currentTime)||0)}set time(i){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Wt(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,observe:s}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&rT()?(this.animation.timeline=i,Yt):s(this)}}const Kv={anticipate:Av,backInOut:Ev,circInOut:Mv};function cT(n){return n in Kv}function dT(n){typeof n.ease=="string"&&cT(n.ease)&&(n.ease=Kv[n.ease])}const rc=10;class mT extends Zv{constructor(i){dT(i),Qv(i),super(i),i.startTime!==void 0&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:s,onUpdate:r,onComplete:c,element:f,...d}=this.options;if(!s)return;if(i!==void 0){s.set(i);return}const p=new ld({...d,autoplay:!1}),h=Math.max(rc,ft.now()-this.startTime),g=ia(0,rc,h-rc);s.setWithVelocity(p.sample(Math.max(0,h-g)).value,p.sample(h).value,g),p.stop()}}const $p=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&($t.test(n)||n==="0")&&!n.startsWith("url("));function fT(n){const i=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==i)return!0}function hT(n,i,s,r){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=$p(c,i),p=$p(f,i);return!d||!p?!1:fT(n)||(s==="spring"||Jv(s))&&r}function jc(n){n.duration=0,n.type="keyframes"}const pT=new Set(["opacity","clipPath","filter","transform"]),gT=vv(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function vT(n){var y;const{motionValue:i,name:s,repeatDelay:r,repeatType:c,damping:f,type:d}=n;if(!(((y=i==null?void 0:i.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:g}=i.owner.getProps();return gT()&&s&&pT.has(s)&&(s!=="transform"||!g)&&!h&&!r&&c!=="mirror"&&f!==0&&d!=="inertia"}const yT=40;class bT extends rd{constructor({autoplay:i=!0,delay:s=0,type:r="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:d="loop",keyframes:p,name:h,motionValue:g,element:y,...b}){var O;super(),this.stop=()=>{var L,U;this._animation&&(this._animation.stop(),(L=this.stopTimeline)==null||L.call(this)),(U=this.keyframeResolver)==null||U.cancel()},this.createdAt=ft.now();const S={autoplay:i,delay:s,type:r,repeat:c,repeatDelay:f,repeatType:d,name:h,motionValue:g,element:y,...b},z=(y==null?void 0:y.KeyframeResolver)||ud;this.keyframeResolver=new z(p,(L,U,H)=>this.onKeyframesResolved(L,U,S,!H),h,g,y),(O=this.keyframeResolver)==null||O.scheduleResolve()}onKeyframesResolved(i,s,r,c){var U,H;this.keyframeResolver=void 0;const{name:f,type:d,velocity:p,delay:h,isHandoff:g,onUpdate:y}=r;this.resolvedAt=ft.now(),hT(i,f,d,p)||((Ma.instantAnimations||!h)&&(y==null||y(sd(i,r,s))),i[0]=i[i.length-1],jc(r),r.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>yT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...r,keyframes:i},z=!g&&vT(S),O=(H=(U=S.motionValue)==null?void 0:U.owner)==null?void 0:H.current,L=z?new mT({...S,element:O}):new ld(S);L.finished.then(()=>{this.notifyFinished()}).catch(Yt),this.pendingTimeline&&(this.stopTimeline=L.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=L}get finished(){return this._animation?this.animation.finished:this._finished}then(i,s){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),nT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}function Fv(n,i,s,r=0,c=1){const f=Array.from(n).sort((g,y)=>g.sortNodePosition(y)).indexOf(i),d=n.size,p=(d-1)*r;return typeof s=="function"?s(f,d):c===1?f*r:p-f*r}const ST=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TT(n){const i=ST.exec(n);if(!i)return[,];const[,s,r,c]=i;return[`--${s??r}`,c]}function Wv(n,i,s=1){const[r,c]=TT(n);if(!r)return;const f=window.getComputedStyle(i).getPropertyValue(r);if(f){const d=f.trim();return hv(d)?parseFloat(d):d}return td(c)?Wv(c,i,s+1):c}const xT={type:"spring",stiffness:500,damping:25,restSpeed:10},ET=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),AT={type:"keyframes",duration:.8},CT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},MT=(n,{keyframes:i})=>i.length>2?AT:qo.has(n)?n.startsWith("scale")?ET(i[1]):xT:CT,DT=n=>n!==null;function zT(n,{repeat:i,repeatType:s="loop"},r){const c=n.filter(DT),f=i&&s!=="loop"&&i%2===1?0:c.length-1;return c[f]}function $v(n,i){if(n!=null&&n.inherit&&i){const{inherit:s,...r}=n;return{...i,...r}}return n}function cd(n,i){const s=(n==null?void 0:n[i])??(n==null?void 0:n.default)??n;return s!==n?$v(s,n):s}function NT({when:n,delay:i,delayChildren:s,staggerChildren:r,staggerDirection:c,repeat:f,repeatType:d,repeatDelay:p,from:h,elapsed:g,...y}){return!!Object.keys(y).length}const dd=(n,i,s,r={},c,f)=>d=>{const p=cd(r,n)||{},h=p.delay||r.delay||0;let{elapsed:g=0}=r;g=g-Wt(h);const y={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-g,onUpdate:S=>{i.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:n,motionValue:i,element:f?void 0:c};NT(p)||Object.assign(y,MT(n,y)),y.duration&&(y.duration=Wt(y.duration)),y.repeatDelay&&(y.repeatDelay=Wt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(jc(y),y.delay===0&&(b=!0)),(Ma.instantAnimations||Ma.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(b=!0,jc(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,b&&!f&&i.get()!==void 0){const S=zT(y.keyframes,p);if(S!==void 0){je.update(()=>{y.onUpdate(S),y.onComplete()});return}}return p.isSync?new ld(y):new bT(y)};function Ip(n){const i=[{},{}];return n==null||n.values.forEach((s,r)=>{i[0][r]=s.get(),i[1][r]=s.getVelocity()}),i}function md(n,i,s,r){if(typeof i=="function"){const[c,f]=Ip(r);i=i(s!==void 0?s:n.custom,c,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,f]=Ip(r);i=i(s!==void 0?s:n.custom,c,f)}return i}function Mo(n,i,s){const r=n.getProps();return md(r,i,s!==void 0?s:r.custom,n)}const Iv=new Set(["width","height","top","left","right","bottom",...No]),eg=30,qT=n=>!isNaN(parseFloat(n));class OT{constructor(i,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var f;const c=ft.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=s.owner}setCurrent(i){this.current=i,this.updatedAt=ft.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=qT(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,s){this.events[i]||(this.events[i]=new $c);const r=this.events[i].add(s);return i==="change"?()=>{r(),je.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,s){this.passiveEffect=i,this.stopPassiveEffect=s}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,s,r){this.set(s),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-r}jump(i,s=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>eg)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,eg);return yv(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(i){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=i(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,s;(i=this.dependents)==null||i.clear(),(s=this.events.destroy)==null||s.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Do(n,i){return new OT(n,i)}const Rc=n=>Array.isArray(n);function jT(n,i,s){n.hasValue(i)?n.getValue(i).set(s):n.addValue(i,Do(s))}function RT(n){return Rc(n)?n[n.length-1]||0:n}function wT(n,i){const s=Mo(n,i);let{transitionEnd:r={},transition:c={},...f}=s||{};f={...f,...r};for(const d in f){const p=RT(f[d]);jT(n,d,p)}}const dt=n=>!!(n&&n.getVelocity);function VT(n){return!!(dt(n)&&n.add)}function wc(n,i){const s=n.getValue("willChange");if(VT(s))return s.add(i);if(!s&&Ma.WillChange){const r=new Ma.WillChange("auto");n.addValue("willChange",r),r.add(i)}}function fd(n){return n.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const _T="framerAppearId",ey="data-"+fd(_T);function ty(n){return n.props[ey]}function BT({protectedKeys:n,needsAnimating:i},s){const r=n.hasOwnProperty(s)&&i[s]!==!0;return i[s]=!1,r}function ay(n,i,{delay:s=0,transitionOverride:r,type:c}={}){let{transition:f,transitionEnd:d,...p}=i;const h=n.getDefaultTransition();f=f?$v(f,h):h;const g=f==null?void 0:f.reduceMotion;r&&(f=r);const y=[],b=c&&n.animationState&&n.animationState.getState()[c];for(const S in p){const z=n.getValue(S,n.latestValues[S]??null),O=p[S];if(O===void 0||b&&BT(b,S))continue;const L={delay:s,...cd(f||{},S)},U=z.get();if(U!==void 0&&!z.isAnimating&&!Array.isArray(O)&&O===U&&!L.velocity)continue;let H=!1;if(window.MotionHandoffAnimation){const Z=ty(n);if(Z){const Y=window.MotionHandoffAnimation(Z,S,je);Y!==null&&(L.startTime=Y,H=!0)}}wc(n,S);const X=g??n.shouldReduceMotion;z.start(dd(S,z,O,X&&Iv.has(S)?{type:!1}:L,n,H));const G=z.animation;G&&y.push(G)}if(d){const S=()=>je.update(()=>{d&&wT(n,d)});y.length?Promise.all(y).then(S):S()}return y}function Vc(n,i,s={}){var h;const r=Mo(n,i,s.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=r||{};s.transitionOverride&&(c=s.transitionOverride);const f=r?()=>Promise.all(ay(n,r,s)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:S}=c;return LT(n,i,g,y,b,S,s)}:()=>Promise.resolve(),{when:p}=c;if(p){const[g,y]=p==="beforeChildren"?[f,d]:[d,f];return g().then(()=>y())}else return Promise.all([f(),d(s.delay)])}function LT(n,i,s=0,r=0,c=0,f=1,d){const p=[];for(const h of n.variantChildren)h.notify("AnimationStart",i),p.push(Vc(h,i,{...d,delay:s+(typeof r=="function"?0:r)+Fv(n.variantChildren,h,r,c,f)}).then(()=>h.notify("AnimationComplete",i)));return Promise.all(p)}function UT(n,i,s={}){n.notify("AnimationStart",i);let r;if(Array.isArray(i)){const c=i.map(f=>Vc(n,f,s));r=Promise.all(c)}else if(typeof i=="string")r=Vc(n,i,s);else{const c=typeof i=="function"?Mo(n,i,s.custom):i;r=Promise.all(ay(n,c,s))}return r.then(()=>{n.notify("AnimationComplete",i)})}const HT={test:n=>n==="auto",parse:n=>n},ny=n=>i=>i.test(n),oy=[zo,te,oa,an,p1,h1,HT],tg=n=>oy.find(ny(n));function QT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||gv(n):!0}const GT=new Set(["brightness","contrast","saturate","opacity"]);function PT(n){const[i,s]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[r]=s.match(ad)||[];if(!r)return n;const c=s.replace(r,"");let f=GT.has(i)?1:0;return r!==s&&(f*=100),i+"("+f+c+")"}const kT=/\b([a-z-]*)\(.*?\)/gu,_c={...$t,getAnimatableNone:n=>{const i=n.match(kT);return i?i.map(PT).join(" "):n}},Bc={...$t,getAnimatableNone:n=>{const i=$t.parse(n);return $t.createTransformer(n)(i.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},ag={...zo,transform:Math.round},YT={rotate:an,rotateX:an,rotateY:an,rotateZ:an,scale:lr,scaleX:lr,scaleY:lr,scaleZ:lr,skew:an,skewX:an,skewY:an,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:Vi,originX:Gp,originY:Gp,originZ:te},hd={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,top:te,right:te,bottom:te,left:te,inset:te,insetBlock:te,insetBlockStart:te,insetBlockEnd:te,insetInline:te,insetInlineStart:te,insetInlineEnd:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,paddingBlock:te,paddingBlockStart:te,paddingBlockEnd:te,paddingInline:te,paddingInlineStart:te,paddingInlineEnd:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,marginBlock:te,marginBlockStart:te,marginBlockEnd:te,marginInline:te,marginInlineStart:te,marginInlineEnd:te,fontSize:te,backgroundPositionX:te,backgroundPositionY:te,...YT,zIndex:ag,fillOpacity:Vi,strokeOpacity:Vi,numOctaves:ag},XT={...hd,color:Ke,backgroundColor:Ke,outlineColor:Ke,fill:Ke,stroke:Ke,borderColor:Ke,borderTopColor:Ke,borderRightColor:Ke,borderBottomColor:Ke,borderLeftColor:Ke,filter:_c,WebkitFilter:_c,mask:Bc,WebkitMask:Bc},iy=n=>XT[n],JT=new Set([_c,Bc]);function sy(n,i){let s=iy(n);return JT.has(s)||(s=$t),s.getAnimatableNone?s.getAnimatableNone(i):void 0}const ZT=new Set(["auto","none","0"]);function KT(n,i,s){let r=0,c;for(;r<n.length&&!c;){const f=n[r];typeof f=="string"&&!ZT.has(f)&&_i(f).values.length&&(c=n[r]),r++}if(c&&s)for(const f of i)n[f]=sy(s,c)}class FT extends ud{constructor(i,s,r,c,f){super(i,s,r,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:s,name:r}=this;if(!s||!s.current)return;super.readKeyframes();for(let y=0;y<i.length;y++){let b=i[y];if(typeof b=="string"&&(b=b.trim(),td(b))){const S=Wv(b,s.current);S!==void 0&&(i[y]=S),y===i.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Iv.has(r)||i.length!==2)return;const[c,f]=i,d=tg(c),p=tg(f),h=Qp(c),g=Qp(f);if(h!==g&&on[r]){this.needsMeasurement=!0;return}if(d!==p)if(Fp(d)&&Fp(p))for(let y=0;y<i.length;y++){const b=i[y];typeof b=="string"&&(i[y]=parseFloat(b))}else on[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:s}=this,r=[];for(let c=0;c<i.length;c++)(i[c]===null||QT(i[c]))&&r.push(c);r.length&&KT(i,r,s)}measureInitialState(){const{element:i,unresolvedKeyframes:s,name:r}=this;if(!i||!i.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=on[r](i.measureViewportBox(),window.getComputedStyle(i.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&i.getValue(r,c).jump(c,!1)}measureEndState(){var p;const{element:i,name:s,unresolvedKeyframes:r}=this;if(!i||!i.current)return;const c=i.getValue(s);c&&c.jump(this.measuredOrigin,!1);const f=r.length-1,d=r[f];r[f]=on[s](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([h,g])=>{i.getValue(h).set(g)}),this.resolveNoneKeyframes()}}const WT=new Set(["opacity","clipPath","filter","transform"]);function ry(n,i,s){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const c=(s==null?void 0:s[n])??r.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n).filter(r=>r!=null)}const ly=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function Lc(n){return pv(n)&&"offsetHeight"in n}const{schedule:pd}=Nv(queueMicrotask,!1),Ft={x:!1,y:!1};function uy(){return Ft.x||Ft.y}function $T(n){return n==="x"||n==="y"?Ft[n]?null:(Ft[n]=!0,()=>{Ft[n]=!1}):Ft.x||Ft.y?null:(Ft.x=Ft.y=!0,()=>{Ft.x=Ft.y=!1})}function cy(n,i){const s=ry(n),r=new AbortController,c={passive:!0,...i,signal:r.signal};return[s,c,()=>r.abort()]}function IT(n){return!(n.pointerType==="touch"||uy())}function ex(n,i,s={}){const[r,c,f]=cy(n,s);return r.forEach(d=>{let p=!1,h=!1,g;const y=()=>{d.removeEventListener("pointerleave",O)},b=U=>{g&&(g(U),g=void 0),y()},S=U=>{p=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),h&&(h=!1,b(U))},z=()=>{p=!0,window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",S,c)},O=U=>{if(U.pointerType!=="touch"){if(p){h=!0;return}b(U)}},L=U=>{if(!IT(U))return;h=!1;const H=i(d,U);typeof H=="function"&&(g=H,d.addEventListener("pointerleave",O,c))};d.addEventListener("pointerenter",L,c),d.addEventListener("pointerdown",z,c)}),f}const dy=(n,i)=>i?n===i?!0:dy(n,i.parentElement):!1,gd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,tx=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ax(n){return tx.has(n.tagName)||n.isContentEditable===!0}const nx=new Set(["INPUT","SELECT","TEXTAREA"]);function ox(n){return nx.has(n.tagName)||n.isContentEditable===!0}const hr=new WeakSet;function ng(n){return i=>{i.key==="Enter"&&n(i)}}function lc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const ix=(n,i)=>{const s=n.currentTarget;if(!s)return;const r=ng(()=>{if(hr.has(s))return;lc(s,"down");const c=ng(()=>{lc(s,"up")}),f=()=>lc(s,"cancel");s.addEventListener("keyup",c,i),s.addEventListener("blur",f,i)});s.addEventListener("keydown",r,i),s.addEventListener("blur",()=>s.removeEventListener("keydown",r),i)};function og(n){return gd(n)&&!uy()}const ig=new WeakSet;function sx(n,i,s={}){const[r,c,f]=cy(n,s),d=p=>{const h=p.currentTarget;if(!og(p)||ig.has(p))return;hr.add(h),s.stopPropagation&&ig.add(p);const g=i(h,p),y=(z,O)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),hr.has(h)&&hr.delete(h),og(z)&&typeof g=="function"&&g(z,{success:O})},b=z=>{y(z,h===window||h===document||s.useGlobalTarget||dy(h,z.target))},S=z=>{y(z,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",S,c)};return r.forEach(p=>{(s.useGlobalTarget?window:p).addEventListener("pointerdown",d,c),Lc(p)&&(p.addEventListener("focus",g=>ix(g,c)),!ax(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),f}function vd(n){return pv(n)&&"ownerSVGElement"in n}const pr=new WeakMap;let nn;const my=(n,i,s)=>(r,c)=>c&&c[0]?c[0][n+"Size"]:vd(r)&&"getBBox"in r?r.getBBox()[i]:r[s],rx=my("inline","width","offsetWidth"),lx=my("block","height","offsetHeight");function ux({target:n,borderBoxSize:i}){var s;(s=pr.get(n))==null||s.forEach(r=>{r(n,{get width(){return rx(n,i)},get height(){return lx(n,i)}})})}function cx(n){n.forEach(ux)}function dx(){typeof ResizeObserver>"u"||(nn=new ResizeObserver(cx))}function mx(n,i){nn||dx();const s=ry(n);return s.forEach(r=>{let c=pr.get(r);c||(c=new Set,pr.set(r,c)),c.add(i),nn==null||nn.observe(r)}),()=>{s.forEach(r=>{const c=pr.get(r);c==null||c.delete(i),c!=null&&c.size||nn==null||nn.unobserve(r)})}}const gr=new Set;let xo;function fx(){xo=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};gr.forEach(i=>i(n))},window.addEventListener("resize",xo)}function hx(n){return gr.add(n),xo||fx(),()=>{gr.delete(n),!gr.size&&typeof xo=="function"&&(window.removeEventListener("resize",xo),xo=void 0)}}function sg(n,i){return typeof n=="function"?hx(n):mx(n,i)}function px(n){return vd(n)&&n.tagName==="svg"}const gx=[...oy,Ke,$t],vx=n=>gx.find(ny(n)),rg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Eo=()=>({x:rg(),y:rg()}),lg=()=>({min:0,max:0}),$e=()=>({x:lg(),y:lg()}),yx=new WeakMap;function qr(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Bi(n){return typeof n=="string"||Array.isArray(n)}const yd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bd=["initial",...yd];function Or(n){return qr(n.animate)||bd.some(i=>Bi(n[i]))}function fy(n){return!!(Or(n)||n.variants)}function bx(n,i,s){for(const r in i){const c=i[r],f=s[r];if(dt(c))n.addValue(r,c);else if(dt(f))n.addValue(r,Do(c,{owner:n}));else if(f!==c)if(n.hasValue(r)){const d=n.getValue(r);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(r);n.addValue(r,Do(d!==void 0?d:c,{owner:n}))}}for(const r in s)i[r]===void 0&&n.removeValue(r);return i}const Uc={current:null},hy={current:!1},Sx=typeof window<"u";function Tx(){if(hy.current=!0,!!Sx)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Uc.current=n.matches;n.addEventListener("change",i),i()}else Uc.current=!1}const ug=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Er={};function py(n){Er=n}function xx(){return Er}class Ex{scrapeMotionValuesFromProps(i,s,r){return{}}constructor({parent:i,props:s,presenceContext:r,reducedMotionConfig:c,skipAnimations:f,blockInitialAnimation:d,visualState:p},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ud,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const z=ft.now();this.renderScheduledAt<z&&(this.renderScheduledAt=z,je.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=p;this.latestValues=g,this.baseTarget={...g},this.initialValues=s.initial?{...g}:{},this.renderState=y,this.parent=i,this.props=s,this.presenceContext=r,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=f,this.options=h,this.blockInitialAnimation=!!d,this.isControllingVariants=Or(s),this.isVariantNode=fy(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...S}=this.scrapeMotionValuesFromProps(s,{},this);for(const z in S){const O=S[z];g[z]!==void 0&&dt(O)&&O.set(g[z])}}mount(i){var s,r;if(this.hasBeenMounted)for(const c in this.initialValues)(s=this.values.get(c))==null||s.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=i,yx.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,f)=>this.bindToMotionValue(f,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(hy.current||Tx(),this.shouldReduceMotion=Uc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var i;this.projection&&this.projection.unmount(),sn(this.notifyUpdate),sn(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(i=this.parent)==null||i.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const r=this.features[s];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,s){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),s.accelerate&&WT.has(i)&&this.current instanceof HTMLElement){const{factory:d,keyframes:p,times:h,ease:g,duration:y}=s.accelerate,b=new Zv({element:this.current,name:i,keyframes:p,times:h,ease:g,duration:Wt(y)}),S=d(b);this.valueSubscriptions.set(i,()=>{S(),b.cancel()});return}const r=qo.has(i);r&&this.onBindTransform&&this.onBindTransform();const c=s.on("change",d=>{this.latestValues[i]=d,this.props.onUpdate&&je.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,s)),this.valueSubscriptions.set(i,()=>{c(),f&&f(),s.owner&&s.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Er){const s=Er[i];if(!s)continue;const{isEnabled:r,Feature:c}=s;if(!this.features[i]&&c&&r(this.props)&&(this.features[i]=new c(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,s){this.latestValues[i]=s}update(i,s){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let r=0;r<ug.length;r++){const c=ug[r];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,d=i[f];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=bx(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(i),()=>s.variantChildren.delete(i)}addValue(i,s){const r=this.values.get(i);s!==r&&(r&&this.removeValue(i),this.bindToMotionValue(i,s),this.values.set(i,s),this.latestValues[i]=s.get())}removeValue(i){this.values.delete(i);const s=this.valueSubscriptions.get(i);s&&(s(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,s){if(this.props.values&&this.props.values[i])return this.props.values[i];let r=this.values.get(i);return r===void 0&&s!==void 0&&(r=Do(s===null?void 0:s,{owner:this}),this.addValue(i,r)),r}readValue(i,s){let r=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return r!=null&&(typeof r=="string"&&(hv(r)||gv(r))?r=parseFloat(r):!vx(r)&&$t.test(s)&&(r=sy(i,s)),this.setBaseTarget(i,dt(r)?r.get():r)),dt(r)?r.get():r}setBaseTarget(i,s){this.baseTarget[i]=s}getBaseTarget(i){var f;const{initial:s}=this.props;let r;if(typeof s=="string"||typeof s=="object"){const d=md(this.props,s,(f=this.presenceContext)==null?void 0:f.custom);d&&(r=d[i])}if(s&&r!==void 0)return r;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!dt(c)?c:this.initialValues[i]!==void 0&&r===void 0?void 0:this.baseTarget[i]}on(i,s){return this.events[i]||(this.events[i]=new $c),this.events[i].add(s)}notify(i,...s){this.events[i]&&this.events[i].notify(...s)}scheduleRenderMicrotask(){pd.render(this.render)}}class gy extends Ex{constructor(){super(...arguments),this.KeyframeResolver=FT}sortInstanceNodePosition(i,s){return i.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(i,s){const r=i.style;return r?r[s]:void 0}removeValueFromRenderState(i,{vars:s,style:r}){delete s[i],delete r[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;dt(i)&&(this.childSubscription=i.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}class rn{constructor(i){this.isMounted=!1,this.node=i}update(){}}function vy({top:n,left:i,right:s,bottom:r}){return{x:{min:i,max:s},y:{min:n,max:r}}}function Ax({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function Cx(n,i){if(!i)return n;const s=i({x:n.left,y:n.top}),r=i({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:r.y,right:r.x}}function uc(n){return n===void 0||n===1}function Hc({scale:n,scaleX:i,scaleY:s}){return!uc(n)||!uc(i)||!uc(s)}function Nn(n){return Hc(n)||yy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function yy(n){return cg(n.x)||cg(n.y)}function cg(n){return n&&n!=="0%"}function Ar(n,i,s){const r=n-s,c=i*r;return s+c}function dg(n,i,s,r,c){return c!==void 0&&(n=Ar(n,c,r)),Ar(n,s,r)+i}function Qc(n,i=0,s=1,r,c){n.min=dg(n.min,i,s,r,c),n.max=dg(n.max,i,s,r,c)}function by(n,{x:i,y:s}){Qc(n.x,i.translate,i.scale,i.originPoint),Qc(n.y,s.translate,s.scale,s.originPoint)}const mg=.999999999999,fg=1.0000000000001;function Mx(n,i,s,r=!1){const c=s.length;if(!c)return;i.x=i.y=1;let f,d;for(let p=0;p<c;p++){f=s[p],d=f.projectionDelta;const{visualElement:h}=f.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Co(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,by(n,d)),r&&Nn(f.latestValues)&&Co(n,f.latestValues))}i.x<fg&&i.x>mg&&(i.x=1),i.y<fg&&i.y>mg&&(i.y=1)}function Ao(n,i){n.min=n.min+i,n.max=n.max+i}function hg(n,i,s,r,c=.5){const f=Le(n.min,n.max,c);Qc(n,i,s,f,r)}function Co(n,i){hg(n.x,i.x,i.scaleX,i.scale,i.originX),hg(n.y,i.y,i.scaleY,i.scale,i.originY)}function Sy(n,i){return vy(Cx(n.getBoundingClientRect(),i))}function Dx(n,i,s){const r=Sy(n,s),{scroll:c}=i;return c&&(Ao(r.x,c.offset.x),Ao(r.y,c.offset.y)),r}const zx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Nx=No.length;function qx(n,i,s){let r="",c=!0;for(let f=0;f<Nx;f++){const d=No[f],p=n[d];if(p===void 0)continue;let h=!0;if(typeof p=="number")h=p===(d.startsWith("scale")?1:0);else{const g=parseFloat(p);h=d.startsWith("scale")?g===1:g===0}if(!h||s){const g=ly(p,hd[d]);if(!h){c=!1;const y=zx[d]||d;r+=`${y}(${g}) `}s&&(i[d]=g)}}return r=r.trim(),s?r=s(i,c?"":r):c&&(r="none"),r}function Sd(n,i,s){const{style:r,vars:c,transformOrigin:f}=n;let d=!1,p=!1;for(const h in i){const g=i[h];if(qo.has(h)){d=!0;continue}else if(Ov(h)){c[h]=g;continue}else{const y=ly(g,hd[h]);h.startsWith("origin")?(p=!0,f[h]=y):r[h]=y}}if(i.transform||(d||s?r.transform=qx(i,n.transform,s):r.transform&&(r.transform="none")),p){const{originX:h="50%",originY:g="50%",originZ:y=0}=f;r.transformOrigin=`${h} ${g} ${y}`}}function Ty(n,{style:i,vars:s},r,c){const f=n.style;let d;for(d in i)f[d]=i[d];c==null||c.applyProjectionStyles(f,r);for(d in s)f.setProperty(d,s[d])}function pg(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Ci={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(te.test(n))n=parseFloat(n);else return n;const s=pg(n,i.target.x),r=pg(n,i.target.y);return`${s}% ${r}%`}},Ox={correct:(n,{treeScale:i,projectionDelta:s})=>{const r=n,c=$t.parse(n);if(c.length>5)return r;const f=$t.createTransformer(n),d=typeof c[0]!="number"?1:0,p=s.x.scale*i.x,h=s.y.scale*i.y;c[0+d]/=p,c[1+d]/=h;const g=Le(p,h,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),f(c)}},Gc={borderRadius:{...Ci,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ci,borderTopRightRadius:Ci,borderBottomLeftRadius:Ci,borderBottomRightRadius:Ci,boxShadow:Ox};function xy(n,{layout:i,layoutId:s}){return qo.has(n)||n.startsWith("origin")||(i||s!==void 0)&&(!!Gc[n]||n==="opacity")}function Td(n,i,s){var d;const r=n.style,c=i==null?void 0:i.style,f={};if(!r)return f;for(const p in r)(dt(r[p])||c&&dt(c[p])||xy(p,n)||((d=s==null?void 0:s.getValue(p))==null?void 0:d.liveStyle)!==void 0)&&(f[p]=r[p]);return f}function jx(n){return window.getComputedStyle(n)}class Rx extends gy{constructor(){super(...arguments),this.type="html",this.renderInstance=Ty}readValueFromInstance(i,s){var r;if(qo.has(s))return(r=this.projection)!=null&&r.isProjecting?Dc(s):$1(i,s);{const c=jx(i),f=(Ov(s)?c.getPropertyValue(s):c[s])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(i,{transformPagePoint:s}){return Sy(i,s)}build(i,s,r){Sd(i,s,r.transformTemplate)}scrapeMotionValuesFromProps(i,s,r){return Td(i,s,r)}}const wx={offset:"stroke-dashoffset",array:"stroke-dasharray"},Vx={offset:"strokeDashoffset",array:"strokeDasharray"};function _x(n,i,s=1,r=0,c=!0){n.pathLength=1;const f=c?wx:Vx;n[f.offset]=`${-r}`,n[f.array]=`${i} ${s}`}const Bx=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Ey(n,{attrX:i,attrY:s,attrScale:r,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...p},h,g,y){if(Sd(n,p,g),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:S}=n;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox);for(const z of Bx)b[z]!==void 0&&(S[z]=b[z],delete b[z]);i!==void 0&&(b.x=i),s!==void 0&&(b.y=s),r!==void 0&&(b.scale=r),c!==void 0&&_x(b,c,f,d,!1)}const Ay=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Cy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Lx(n,i,s,r){Ty(n,i,void 0,r);for(const c in i.attrs)n.setAttribute(Ay.has(c)?c:fd(c),i.attrs[c])}function My(n,i,s){const r=Td(n,i,s);for(const c in n)if(dt(n[c])||dt(i[c])){const f=No.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;r[f]=n[c]}return r}class Ux extends gy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$e}getBaseTargetFromProps(i,s){return i[s]}readValueFromInstance(i,s){if(qo.has(s)){const r=iy(s);return r&&r.default||0}return s=Ay.has(s)?s:fd(s),i.getAttribute(s)}scrapeMotionValuesFromProps(i,s,r){return My(i,s,r)}build(i,s,r){Ey(i,s,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(i,s,r,c){Lx(i,s,r,c)}mount(i){this.isSVGTag=Cy(i.tagName),super.mount(i)}}const Hx=bd.length;function Dy(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?Dy(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const i={};for(let s=0;s<Hx;s++){const r=bd[s],c=n.props[r];(Bi(c)||c===!1)&&(i[r]=c)}return i}function zy(n,i){if(!Array.isArray(i))return!1;const s=i.length;if(s!==n.length)return!1;for(let r=0;r<s;r++)if(i[r]!==n[r])return!1;return!0}const Qx=[...yd].reverse(),Gx=yd.length;function Px(n){return i=>Promise.all(i.map(({animation:s,options:r})=>UT(n,s,r)))}function kx(n){let i=Px(n),s=gg(),r=!0;const c=h=>(g,y)=>{var S;const b=Mo(n,y,h==="exit"?(S=n.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:z,transitionEnd:O,...L}=b;g={...g,...L,...O}}return g};function f(h){i=h(n)}function d(h){const{props:g}=n,y=Dy(n.parent)||{},b=[],S=new Set;let z={},O=1/0;for(let U=0;U<Gx;U++){const H=Qx[U],X=s[H],G=g[H]!==void 0?g[H]:y[H],Z=Bi(G),Y=H===h?X.isActive:null;Y===!1&&(O=U);let ie=G===y[H]&&G!==g[H]&&Z;if(ie&&r&&n.manuallyAnimateOnMount&&(ie=!1),X.protectedKeys={...z},!X.isActive&&Y===null||!G&&!X.prevProp||qr(G)||typeof G=="boolean")continue;if(H==="exit"&&X.isActive&&Y!==!0){X.prevResolvedValues&&(z={...z,...X.prevResolvedValues});continue}const W=Yx(X.prevProp,G);let B=W||H===h&&X.isActive&&!ie&&Z||U>O&&Z,se=!1;const Ce=Array.isArray(G)?G:[G];let _e=Ce.reduce(c(H),{});Y===!1&&(_e={});const{prevResolvedValues:Re={}}=X,pt={...Re,..._e},ut=Q=>{B=!0,S.has(Q)&&(se=!0,S.delete(Q)),X.needsAnimating[Q]=!0;const $=n.getValue(Q);$&&($.liveStyle=!1)};for(const Q in pt){const $=_e[Q],fe=Re[Q];if(z.hasOwnProperty(Q))continue;let k=!1;Rc($)&&Rc(fe)?k=!zy($,fe):k=$!==fe,k?$!=null?ut(Q):S.add(Q):$!==void 0&&S.has(Q)?ut(Q):X.protectedKeys[Q]=!0}X.prevProp=G,X.prevResolvedValues=_e,X.isActive&&(z={...z,..._e}),r&&n.blockInitialAnimation&&(B=!1);const Ge=ie&&W;B&&(!Ge||se)&&b.push(...Ce.map(Q=>{const $={type:H};if(typeof Q=="string"&&r&&!Ge&&n.manuallyAnimateOnMount&&n.parent){const{parent:fe}=n,k=Mo(fe,Q);if(fe.enteringChildren&&k){const{delayChildren:A}=k.transition||{};$.delay=Fv(fe.enteringChildren,n,A)}}return{animation:Q,options:$}}))}if(S.size){const U={};if(typeof g.initial!="boolean"){const H=Mo(n,Array.isArray(g.initial)?g.initial[0]:g.initial);H&&H.transition&&(U.transition=H.transition)}S.forEach(H=>{const X=n.getBaseTarget(H),G=n.getValue(H);G&&(G.liveStyle=!0),U[H]=X??null}),b.push({animation:U})}let L=!!b.length;return r&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(L=!1),r=!1,L?i(b):Promise.resolve()}function p(h,g){var b;if(s[h].isActive===g)return Promise.resolve();(b=n.variantChildren)==null||b.forEach(S=>{var z;return(z=S.animationState)==null?void 0:z.setActive(h,g)}),s[h].isActive=g;const y=d(h);for(const S in s)s[S].protectedKeys={};return y}return{animateChanges:d,setActive:p,setAnimateFunction:f,getState:()=>s,reset:()=>{s=gg()}}}function Yx(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!zy(i,n):!1}function Dn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gg(){return{animate:Dn(!0),whileInView:Dn(),whileHover:Dn(),whileTap:Dn(),whileDrag:Dn(),whileFocus:Dn(),exit:Dn()}}function vg(n,i){n.min=i.min,n.max=i.max}function Kt(n,i){vg(n.x,i.x),vg(n.y,i.y)}function yg(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}const Ny=1e-4,Xx=1-Ny,Jx=1+Ny,qy=.01,Zx=0-qy,Kx=0+qy;function ht(n){return n.max-n.min}function Fx(n,i,s){return Math.abs(n-i)<=s}function bg(n,i,s,r=.5){n.origin=r,n.originPoint=Le(i.min,i.max,n.origin),n.scale=ht(s)/ht(i),n.translate=Le(s.min,s.max,n.origin)-n.originPoint,(n.scale>=Xx&&n.scale<=Jx||isNaN(n.scale))&&(n.scale=1),(n.translate>=Zx&&n.translate<=Kx||isNaN(n.translate))&&(n.translate=0)}function ji(n,i,s,r){bg(n.x,i.x,s.x,r?r.originX:void 0),bg(n.y,i.y,s.y,r?r.originY:void 0)}function Sg(n,i,s){n.min=s.min+i.min,n.max=n.min+ht(i)}function Wx(n,i,s){Sg(n.x,i.x,s.x),Sg(n.y,i.y,s.y)}function Tg(n,i,s){n.min=i.min-s.min,n.max=n.min+ht(i)}function Cr(n,i,s){Tg(n.x,i.x,s.x),Tg(n.y,i.y,s.y)}function xg(n,i,s,r,c){return n-=i,n=Ar(n,1/s,r),c!==void 0&&(n=Ar(n,1/c,r)),n}function $x(n,i=0,s=1,r=.5,c,f=n,d=n){if(oa.test(i)&&(i=parseFloat(i),i=Le(d.min,d.max,i/100)-d.min),typeof i!="number")return;let p=Le(f.min,f.max,r);n===f&&(p-=i),n.min=xg(n.min,i,s,p,c),n.max=xg(n.max,i,s,p,c)}function Eg(n,i,[s,r,c],f,d){$x(n,i[s],i[r],i[c],i.scale,f,d)}const Ix=["x","scaleX","originX"],eE=["y","scaleY","originY"];function Ag(n,i,s,r){Eg(n.x,i,Ix,s?s.x:void 0,r?r.x:void 0),Eg(n.y,i,eE,s?s.y:void 0,r?r.y:void 0)}function Cg(n){return n.translate===0&&n.scale===1}function Oy(n){return Cg(n.x)&&Cg(n.y)}function Mg(n,i){return n.min===i.min&&n.max===i.max}function tE(n,i){return Mg(n.x,i.x)&&Mg(n.y,i.y)}function Dg(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function jy(n,i){return Dg(n.x,i.x)&&Dg(n.y,i.y)}function zg(n){return ht(n.x)/ht(n.y)}function Ng(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}function na(n){return[n("x"),n("y")]}function aE(n,i,s){let r="";const c=n.x.translate/i.x,f=n.y.translate/i.y,d=(s==null?void 0:s.z)||0;if((c||f||d)&&(r=`translate3d(${c}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(r+=`scale(${1/i.x}, ${1/i.y}) `),s){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:S,skewX:z,skewY:O}=s;g&&(r=`perspective(${g}px) ${r}`),y&&(r+=`rotate(${y}deg) `),b&&(r+=`rotateX(${b}deg) `),S&&(r+=`rotateY(${S}deg) `),z&&(r+=`skewX(${z}deg) `),O&&(r+=`skewY(${O}deg) `)}const p=n.x.scale*i.x,h=n.y.scale*i.y;return(p!==1||h!==1)&&(r+=`scale(${p}, ${h})`),r||"none"}const Ry=["TopLeft","TopRight","BottomLeft","BottomRight"],nE=Ry.length,qg=n=>typeof n=="string"?parseFloat(n):n,Og=n=>typeof n=="number"||te.test(n);function oE(n,i,s,r,c,f){c?(n.opacity=Le(0,s.opacity??1,iE(r)),n.opacityExit=Le(i.opacity??1,0,sE(r))):f&&(n.opacity=Le(i.opacity??1,s.opacity??1,r));for(let d=0;d<nE;d++){const p=`border${Ry[d]}Radius`;let h=jg(i,p),g=jg(s,p);if(h===void 0&&g===void 0)continue;h||(h=0),g||(g=0),h===0||g===0||Og(h)===Og(g)?(n[p]=Math.max(Le(qg(h),qg(g),r),0),(oa.test(g)||oa.test(h))&&(n[p]+="%")):n[p]=g}(i.rotate||s.rotate)&&(n.rotate=Le(i.rotate||0,s.rotate||0,r))}function jg(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const iE=wy(0,.5,Cv),sE=wy(.5,.95,Yt);function wy(n,i,s){return r=>r<n?0:r>i?1:s(wi(n,i,r))}function rE(n,i,s){const r=dt(n)?n:Do(n);return r.start(dd("",r,i,s)),r.animation}function Li(n,i,s,r={passive:!0}){return n.addEventListener(i,s,r),()=>n.removeEventListener(i,s)}const lE=(n,i)=>n.depth-i.depth;class uE{constructor(){this.children=[],this.isDirty=!1}add(i){Fc(this.children,i),this.isDirty=!0}remove(i){br(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(lE),this.isDirty=!1,this.children.forEach(i)}}function cE(n,i){const s=ft.now(),r=({timestamp:c})=>{const f=c-s;f>=i&&(sn(r),n(f-i))};return je.setup(r,!0),()=>sn(r)}function vr(n){return dt(n)?n.get():n}class dE{constructor(){this.members=[]}add(i){Fc(this.members,i);for(let s=this.members.length-1;s>=0;s--){const r=this.members[s];if(r===i||r===this.lead||r===this.prevLead)continue;const c=r.instance;c&&c.isConnected===!1&&r.isPresent!==!1&&!r.snapshot&&br(this.members,r)}i.scheduleRender()}remove(i){if(br(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(i){const s=this.members.findIndex(c=>i===c);if(s===0)return!1;let r;for(let c=s;c>=0;c--){const f=this.members[c],d=f.instance;if(f.isPresent!==!1&&(!d||d.isConnected!==!1)){r=f;break}}return r?(this.promote(r),!0):!1}promote(i,s){const r=this.lead;if(i!==r&&(this.prevLead=r,this.lead=i,i.show(),r)){r.instance&&r.scheduleRender(),i.scheduleRender();const c=r.options.layoutDependency,f=i.options.layoutDependency;if(!(c!==void 0&&f!==void 0&&c===f)){const h=r.instance;h&&h.isConnected===!1&&!r.snapshot||(i.resumeFrom=r,s&&(i.resumeFrom.preserveOpacity=!0),r.snapshot&&(i.snapshot=r.snapshot,i.snapshot.latestValues=r.animationValues||r.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0))}const{crossfade:p}=i.options;p===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:s,resumingFrom:r}=i;s.onExitComplete&&s.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const yr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},cc=["","X","Y","Z"],mE=1e3;let fE=0;function dc(n,i,s,r){const{latestValues:c}=i;c[n]&&(s[n]=c[n],i.setStaticValue(n,0),r&&(r[n]=0))}function Vy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const s=ty(i);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",je,!(c||f))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Vy(r)}function _y({attachResizeListener:n,defaultParent:i,measureScroll:s,checkIsScrollRoot:r,resetTransform:c}){return class{constructor(d={},p=i==null?void 0:i()){this.id=fE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(gE),this.nodes.forEach(SE),this.nodes.forEach(TE),this.nodes.forEach(vE)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new uE)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new $c),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const h=this.eventHandlers.get(d);h&&h.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=vd(d)&&!px(d),this.instance=d;const{layoutId:p,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),n){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;je.read(()=>{b=window.innerWidth}),n(d,()=>{const z=window.innerWidth;z!==b&&(b=z,this.root.updateBlockedByResize=!0,y&&y(),y=cE(S,250),yr.hasAnimatedSinceResize&&(yr.hasAnimatedSinceResize=!1,this.nodes.forEach(Vg)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||h)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:z})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const O=this.options.transition||g.getDefaultTransition()||ME,{onLayoutAnimationStart:L,onLayoutAnimationComplete:U}=g.getProps(),H=!this.targetLayout||!jy(this.targetLayout,z),X=!b&&S;if(this.options.layoutRoot||this.resumeFrom||X||b&&(H||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const G={...cd(O,"layout"),onPlay:L,onComplete:U};(g.shouldReduceMotion||this.options.layoutRoot)&&(G.delay=0,G.type=!1),this.startAnimation(G),this.setAnimationOrigin(y,X)}else b||Vg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=z})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),sn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xE),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Vy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Rg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(wg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(bE),this.nodes.forEach(hE),this.nodes.forEach(pE)):this.nodes.forEach(wg),this.clearAllSnapshots();const p=ft.now();lt.delta=ia(0,1e3/60,p-lt.timestamp),lt.timestamp=p,lt.isProcessing=!0,ac.update.process(lt),ac.preRender.process(lt),ac.render.process(lt),lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,pd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yE),this.sharedNodes.forEach(EE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ht(this.snapshot.measuredBox.x)&&!ht(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=$e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Oy(this.projectionDelta),h=this.getTransformTemplate(),g=h?h(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;d&&this.instance&&(p||Nn(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return d&&(h=this.removeTransform(h)),DE(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return $e();const p=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(zE))){const{scroll:y}=this.root;y&&(Ao(p.x,y.offset.x),Ao(p.y,y.offset.y))}return p}removeElementScroll(d){var h;const p=$e();if(Kt(p,d),(h=this.scroll)!=null&&h.wasRoot)return p;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:b,options:S}=y;y!==this.root&&b&&S.layoutScroll&&(b.wasRoot&&Kt(p,d),Ao(p.x,b.offset.x),Ao(p.y,b.offset.y))}return p}applyTransform(d,p=!1){const h=$e();Kt(h,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Co(h,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Nn(y.latestValues)&&Co(h,y.latestValues)}return Nn(this.latestValues)&&Co(h,this.latestValues),h}removeTransform(d){const p=$e();Kt(p,d);for(let h=0;h<this.path.length;h++){const g=this.path[h];if(!g.instance||!Nn(g.latestValues))continue;Hc(g.latestValues)&&g.updateSnapshot();const y=$e(),b=g.measurePageBox();Kt(y,b),Ag(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Nn(this.latestValues)&&Ag(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var z;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(d||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(z=this.parent)!=null&&z.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=lt.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Wx(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),by(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Hc(this.parent.latestValues)||yy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,p,h){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),Cr(this.relativeTargetOrigin,p,h),Kt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var O;const d=this.getLead(),p=!!this.resumingFrom||this!==d;let h=!0;if((this.isProjectionDirty||(O=this.parent)!=null&&O.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===lt.timestamp&&(h=!1),h)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Kt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;Mx(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=$e());const{target:z}=d;if(!z){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yg(this.prevProjectionDelta.x,this.projectionDelta.x),yg(this.prevProjectionDelta.y,this.projectionDelta.y)),ji(this.projectionDelta,this.layoutCorrected,z,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!Ng(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ng(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",z))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Eo(),this.projectionDelta=Eo(),this.projectionDeltaWithTransform=Eo()}setAnimationOrigin(d,p=!1){const h=this.snapshot,g=h?h.latestValues:{},y={...this.latestValues},b=Eo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const S=$e(),z=h?h.source:void 0,O=this.layout?this.layout.source:void 0,L=z!==O,U=this.getStack(),H=!U||U.members.length<=1,X=!!(L&&!H&&this.options.crossfade===!0&&!this.path.some(CE));this.animationProgress=0;let G;this.mixTargetDelta=Z=>{const Y=Z/1e3;_g(b.x,d.x,Y),_g(b.y,d.y,Y),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Cr(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),AE(this.relativeTarget,this.relativeTargetOrigin,S,Y),G&&tE(this.relativeTarget,G)&&(this.isProjectionDirty=!1),G||(G=$e()),Kt(G,this.relativeTarget)),L&&(this.animationValues=y,oE(y,g,this.latestValues,Y,X,H)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var p,h,g;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(g=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||g.stop(),this.pendingAnimation&&(sn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=je.update(()=>{yr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Do(0)),this.motionValue.jump(0,!1),this.currentAnimation=rE(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(mE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:h,layout:g,latestValues:y}=d;if(!(!p||!h||!g)){if(this!==d&&this.layout&&g&&By(this.options.animationType,this.layout.layoutBox,g.layoutBox)){h=this.target||$e();const b=ht(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+b;const S=ht(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+S}Kt(p,h),Co(p,y),ji(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new dE),this.sharedNodes.get(d).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var p;const{layoutId:d}=this.options;return d?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:d}=this.options;return d?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:h}={}){const g=this.getStack();g&&g.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const g={};h.z&&dc("z",d,g,this.animationValues);for(let y=0;y<cc.length;y++)dc(`rotate${cc[y]}`,d,g,this.animationValues),dc(`skew${cc[y]}`,d,g,this.animationValues);d.render();for(const y in g)d.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vr(p==null?void 0:p.pointerEvents)||"",d.transform=h?h(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vr(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!Nn(this.latestValues)&&(d.transform=h?h({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=aE(this.projectionDeltaWithTransform,this.treeScale,y);h&&(b=h(y,b)),d.transform=b;const{x:S,y:z}=this.projectionDelta;d.transformOrigin=`${S.origin*100}% ${z.origin*100}% 0`,g.animationValues?d.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const O in Gc){if(y[O]===void 0)continue;const{correct:L,applyTo:U,isCSSVariable:H}=Gc[O],X=b==="none"?y[O]:L(y[O],g);if(U){const G=U.length;for(let Z=0;Z<G;Z++)d[U[Z]]=X}else H?this.options.visualElement.renderState.vars[O]=X:d[O]=X}this.options.layoutId&&(d.pointerEvents=g===this?vr(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var p;return(p=d.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(Rg),this.root.sharedNodes.clear()}}}function hE(n){n.updateLayout()}function pE(n){var s;const i=((s=n.resumeFrom)==null?void 0:s.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:c}=n.layout,{animationType:f}=n.options,d=i.source!==n.layout.source;f==="size"?na(b=>{const S=d?i.measuredBox[b]:i.layoutBox[b],z=ht(S);S.min=r[b].min,S.max=S.min+z}):By(f,i.layoutBox,r)&&na(b=>{const S=d?i.measuredBox[b]:i.layoutBox[b],z=ht(r[b]);S.max=S.min+z,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+z)});const p=Eo();ji(p,r,i.layoutBox);const h=Eo();d?ji(h,n.applyTransform(c,!0),i.measuredBox):ji(h,r,i.layoutBox);const g=!Oy(p);let y=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:S,layout:z}=b;if(S&&z){const O=$e();Cr(O,i.layoutBox,S.layoutBox);const L=$e();Cr(L,r,z.layoutBox),jy(O,L)||(y=!0),b.options.layoutRoot&&(n.relativeTarget=L,n.relativeTargetOrigin=O,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:i,delta:h,layoutDelta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function gE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function vE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function yE(n){n.clearSnapshot()}function Rg(n){n.clearMeasurements()}function wg(n){n.isLayoutDirty=!1}function bE(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function Vg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function SE(n){n.resolveTargetDelta()}function TE(n){n.calcProjection()}function xE(n){n.resetSkewAndRotation()}function EE(n){n.removeLeadSnapshot()}function _g(n,i,s){n.translate=Le(i.translate,0,s),n.scale=Le(i.scale,1,s),n.origin=i.origin,n.originPoint=i.originPoint}function Bg(n,i,s,r){n.min=Le(i.min,s.min,r),n.max=Le(i.max,s.max,r)}function AE(n,i,s,r){Bg(n.x,i.x,s.x,r),Bg(n.y,i.y,s.y,r)}function CE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const ME={duration:.45,ease:[.4,0,.1,1]},Lg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Ug=Lg("applewebkit/")&&!Lg("chrome/")?Math.round:Yt;function Hg(n){n.min=Ug(n.min),n.max=Ug(n.max)}function DE(n){Hg(n.x),Hg(n.y)}function By(n,i,s){return n==="position"||n==="preserve-aspect"&&!Fx(zg(i),zg(s),.2)}function zE(n){var i;return n!==n.root&&((i=n.scroll)==null?void 0:i.wasRoot)}const NE=_y({attachResizeListener:(n,i)=>Li(n,"resize",i),measureScroll:()=>{var n,i;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((i=document.body)==null?void 0:i.scrollTop)||0}},checkIsScrollRoot:()=>!0}),mc={current:void 0},Ly=_y({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!mc.current){const n=new NE({});n.mount(window),n.setOptions({layoutScroll:!0}),mc.current=n}return mc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),xd=P.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Qg(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function qE(...n){return i=>{let s=!1;const r=n.map(c=>{const f=Qg(c,i);return!s&&typeof f=="function"&&(s=!0),f});if(s)return()=>{for(let c=0;c<r.length;c++){const f=r[c];typeof f=="function"?f():Qg(n[c],null)}}}}function OE(...n){return P.useCallback(qE(...n),n)}class jE extends P.Component{getSnapshotBeforeUpdate(i){const s=this.props.childRef.current;if(s&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=s.offsetParent,c=Lc(r)&&r.offsetWidth||0,f=Lc(r)&&r.offsetHeight||0,d=this.props.sizeRef.current;d.height=s.offsetHeight||0,d.width=s.offsetWidth||0,d.top=s.offsetTop,d.left=s.offsetLeft,d.right=c-d.width-d.left,d.bottom=f-d.height-d.top}return null}componentDidUpdate(){}render(){return this.props.children}}function RE({children:n,isPresent:i,anchorX:s,anchorY:r,root:c,pop:f}){var S;const d=P.useId(),p=P.useRef(null),h=P.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=P.useContext(xd),y=((S=n.props)==null?void 0:S.ref)??(n==null?void 0:n.ref),b=OE(p,y);return P.useInsertionEffect(()=>{const{width:z,height:O,top:L,left:U,right:H,bottom:X}=h.current;if(i||f===!1||!p.current||!z||!O)return;const G=s==="left"?`left: ${U}`:`right: ${H}`,Z=r==="bottom"?`bottom: ${X}`:`top: ${L}`;p.current.dataset.motionPopId=d;const Y=document.createElement("style");g&&(Y.nonce=g);const ie=c??document.head;return ie.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${z}px !important;
            height: ${O}px !important;
            ${G}px !important;
            ${Z}px !important;
          }
        `),()=>{ie.contains(Y)&&ie.removeChild(Y)}},[i]),T.jsx(jE,{isPresent:i,childRef:p,sizeRef:h,pop:f,children:f===!1?n:P.cloneElement(n,{ref:b})})}const wE=({children:n,initial:i,isPresent:s,onExitComplete:r,custom:c,presenceAffectsLayout:f,mode:d,anchorX:p,anchorY:h,root:g})=>{const y=Kc(VE),b=P.useId();let S=!0,z=P.useMemo(()=>(S=!1,{id:b,initial:i,isPresent:s,custom:c,onExitComplete:O=>{y.set(O,!0);for(const L of y.values())if(!L)return;r&&r()},register:O=>(y.set(O,!1),()=>y.delete(O))}),[s,y,r]);return f&&S&&(z={...z}),P.useMemo(()=>{y.forEach((O,L)=>y.set(L,!1))},[s]),P.useEffect(()=>{!s&&!y.size&&r&&r()},[s]),n=T.jsx(RE,{pop:d==="popLayout",isPresent:s,anchorX:p,anchorY:h,root:g,children:n}),T.jsx(Nr.Provider,{value:z,children:n})};function VE(){return new Map}function Uy(n=!0){const i=P.useContext(Nr);if(i===null)return[!0,null];const{isPresent:s,onExitComplete:r,register:c}=i,f=P.useId();P.useEffect(()=>{if(n)return c(f)},[n]);const d=P.useCallback(()=>n&&r&&r(f),[f,r,n]);return!s&&r?[!1,d]:[!0]}const ur=n=>n.key||"";function Gg(n){const i=[];return P.Children.forEach(n,s=>{P.isValidElement(s)&&i.push(s)}),i}const Ed=({children:n,custom:i,initial:s=!0,onExitComplete:r,presenceAffectsLayout:c=!0,mode:f="sync",propagate:d=!1,anchorX:p="left",anchorY:h="top",root:g})=>{const[y,b]=Uy(d),S=P.useMemo(()=>Gg(n),[n]),z=d&&!y?[]:S.map(ur),O=P.useRef(!0),L=P.useRef(S),U=Kc(()=>new Map),H=P.useRef(new Set),[X,G]=P.useState(S),[Z,Y]=P.useState(S);fv(()=>{O.current=!1,L.current=S;for(let B=0;B<Z.length;B++){const se=ur(Z[B]);z.includes(se)?(U.delete(se),H.current.delete(se)):U.get(se)!==!0&&U.set(se,!1)}},[Z,z.length,z.join("-")]);const ie=[];if(S!==X){let B=[...S];for(let se=0;se<Z.length;se++){const Ce=Z[se],_e=ur(Ce);z.includes(_e)||(B.splice(se,0,Ce),ie.push(Ce))}return f==="wait"&&ie.length&&(B=ie),Y(Gg(B)),G(S),null}const{forceRender:W}=P.useContext(Zc);return T.jsx(T.Fragment,{children:Z.map(B=>{const se=ur(B),Ce=d&&!y?!1:S===Z||z.includes(se),_e=()=>{if(H.current.has(se))return;if(H.current.add(se),U.has(se))U.set(se,!0);else return;let Re=!0;U.forEach(pt=>{pt||(Re=!1)}),Re&&(W==null||W(),Y(L.current),d&&(b==null||b()),r&&r())};return T.jsx(wE,{isPresent:Ce,initial:!O.current||s?void 0:!1,custom:i,presenceAffectsLayout:c,mode:f,root:g,onExitComplete:Ce?void 0:_e,anchorX:p,anchorY:h,children:B},se)})})},Hy=P.createContext({strict:!1}),Pg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let kg=!1;function _E(){if(kg)return;const n={};for(const i in Pg)n[i]={isEnabled:s=>Pg[i].some(r=>!!s[r])};py(n),kg=!0}function Qy(){return _E(),xx()}function BE(n){const i=Qy();for(const s in n)i[s]={...i[s],...n[s]};py(i)}const LE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Mr(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||LE.has(n)}let Gy=n=>!Mr(n);function UE(n){typeof n=="function"&&(Gy=i=>i.startsWith("on")?!Mr(i):n(i))}try{UE(require("@emotion/is-prop-valid").default)}catch{}function HE(n,i,s){const r={};for(const c in n)c==="values"&&typeof n.values=="object"||(Gy(c)||s===!0&&Mr(c)||!i&&!Mr(c)||n.draggable&&c.startsWith("onDrag"))&&(r[c]=n[c]);return r}const jr=P.createContext({});function QE(n,i){if(Or(n)){const{initial:s,animate:r}=n;return{initial:s===!1||Bi(s)?s:void 0,animate:Bi(r)?r:void 0}}return n.inherit!==!1?i:{}}function GE(n){const{initial:i,animate:s}=QE(n,P.useContext(jr));return P.useMemo(()=>({initial:i,animate:s}),[Yg(i),Yg(s)])}function Yg(n){return Array.isArray(n)?n.join(" "):n}const Ad=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Py(n,i,s){for(const r in i)!dt(i[r])&&!xy(r,s)&&(n[r]=i[r])}function PE({transformTemplate:n},i){return P.useMemo(()=>{const s=Ad();return Sd(s,i,n),Object.assign({},s.vars,s.style)},[i])}function kE(n,i){const s=n.style||{},r={};return Py(r,s,n),Object.assign(r,PE(n,i)),r}function YE(n,i){const s={},r=kE(n,i);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=r,s}const ky=()=>({...Ad(),attrs:{}});function XE(n,i,s,r){const c=P.useMemo(()=>{const f=ky();return Ey(f,i,Cy(r),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};Py(f,n.style,n),c.style={...f,...c.style}}return c}const JE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Cd(n){return typeof n!="string"||n.includes("-")?!1:!!(JE.indexOf(n)>-1||/[A-Z]/u.test(n))}function ZE(n,i,s,{latestValues:r},c,f=!1,d){const h=(d??Cd(n)?XE:YE)(i,r,c,n),g=HE(i,typeof n=="string",f),y=n!==P.Fragment?{...g,...h,ref:s}:{},{children:b}=i,S=P.useMemo(()=>dt(b)?b.get():b,[b]);return P.createElement(n,{...y,children:S})}function KE({scrapeMotionValuesFromProps:n,createRenderState:i},s,r,c){return{latestValues:FE(s,r,c,n),renderState:i()}}function FE(n,i,s,r){const c={},f=r(n,{});for(const S in f)c[S]=vr(f[S]);let{initial:d,animate:p}=n;const h=Or(n),g=fy(n);i&&g&&!h&&n.inherit!==!1&&(d===void 0&&(d=i.initial),p===void 0&&(p=i.animate));let y=s?s.initial===!1:!1;y=y||d===!1;const b=y?p:d;if(b&&typeof b!="boolean"&&!qr(b)){const S=Array.isArray(b)?b:[b];for(let z=0;z<S.length;z++){const O=md(n,S[z]);if(O){const{transitionEnd:L,transition:U,...H}=O;for(const X in H){let G=H[X];if(Array.isArray(G)){const Z=y?G.length-1:0;G=G[Z]}G!==null&&(c[X]=G)}for(const X in L)c[X]=L[X]}}}return c}const Yy=n=>(i,s)=>{const r=P.useContext(jr),c=P.useContext(Nr),f=()=>KE(n,i,r,c);return s?f():Kc(f)},WE=Yy({scrapeMotionValuesFromProps:Td,createRenderState:Ad}),$E=Yy({scrapeMotionValuesFromProps:My,createRenderState:ky}),IE=Symbol.for("motionComponentSymbol");function e2(n,i,s){const r=P.useRef(s);P.useInsertionEffect(()=>{r.current=s});const c=P.useRef(null);return P.useCallback(f=>{var p;f&&((p=n.onMount)==null||p.call(n,f)),i&&(f?i.mount(f):i.unmount());const d=r.current;if(typeof d=="function")if(f){const h=d(f);typeof h=="function"&&(c.current=h)}else c.current?(c.current(),c.current=null):d(f);else d&&(d.current=f)},[i])}const Xy=P.createContext({});function So(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function t2(n,i,s,r,c,f){var G,Z;const{visualElement:d}=P.useContext(jr),p=P.useContext(Hy),h=P.useContext(Nr),g=P.useContext(xd),y=g.reducedMotion,b=g.skipAnimations,S=P.useRef(null),z=P.useRef(!1);r=r||p.renderer,!S.current&&r&&(S.current=r(n,{visualState:i,parent:d,props:s,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:y,skipAnimations:b,isSVG:f}),z.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const O=S.current,L=P.useContext(Xy);O&&!O.projection&&c&&(O.type==="html"||O.type==="svg")&&a2(S.current,s,c,L);const U=P.useRef(!1);P.useInsertionEffect(()=>{O&&U.current&&O.update(s,h)});const H=s[ey],X=P.useRef(!!H&&!((G=window.MotionHandoffIsComplete)!=null&&G.call(window,H))&&((Z=window.MotionHasOptimisedAnimation)==null?void 0:Z.call(window,H)));return fv(()=>{z.current=!0,O&&(U.current=!0,window.MotionIsMounted=!0,O.updateFeatures(),O.scheduleRenderMicrotask(),X.current&&O.animationState&&O.animationState.animateChanges())}),P.useEffect(()=>{O&&(!X.current&&O.animationState&&O.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{var Y;(Y=window.MotionHandoffMarkAsComplete)==null||Y.call(window,H)}),X.current=!1),O.enteringChildren=void 0)}),O}function a2(n,i,s,r){const{layoutId:c,layout:f,drag:d,dragConstraints:p,layoutScroll:h,layoutRoot:g,layoutCrossfade:y}=i;n.projection=new s(n.latestValues,i["data-framer-portal-id"]?void 0:Jy(n.parent)),n.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!d||p&&So(p),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:h,layoutRoot:g})}function Jy(n){if(n)return n.options.allowProjection!==!1?n.projection:Jy(n.parent)}function fc(n,{forwardMotionProps:i=!1,type:s}={},r,c){r&&BE(r);const f=s?s==="svg":Cd(n),d=f?$E:WE;function p(g,y){let b;const S={...P.useContext(xd),...g,layoutId:n2(g)},{isStatic:z}=S,O=GE(g),L=d(g,z);if(!z&&mv){o2();const U=i2(S);b=U.MeasureLayout,O.visualElement=t2(n,L,S,c,U.ProjectionNode,f)}return T.jsxs(jr.Provider,{value:O,children:[b&&O.visualElement?T.jsx(b,{visualElement:O.visualElement,...S}):null,ZE(n,g,e2(L,O.visualElement,y),L,z,i,f)]})}p.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const h=P.forwardRef(p);return h[IE]=n,h}function n2({layoutId:n}){const i=P.useContext(Zc).id;return i&&n!==void 0?i+"-"+n:n}function o2(n,i){P.useContext(Hy).strict}function i2(n){const i=Qy(),{drag:s,layout:r}=i;if(!s&&!r)return{};const c={...s,...r};return{MeasureLayout:s!=null&&s.isEnabled(n)||r!=null&&r.isEnabled(n)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function s2(n,i){if(typeof Proxy>"u")return fc;const s=new Map,r=(f,d)=>fc(f,d,n,i),c=(f,d)=>r(f,d);return new Proxy(c,{get:(f,d)=>d==="create"?r:(s.has(d)||s.set(d,fc(d,void 0,n,i)),s.get(d))})}const r2=(n,i)=>i.isSVG??Cd(n)?new Ux(i):new Rx(i,{allowProjection:n!==P.Fragment});class l2 extends rn{constructor(i){super(i),i.animationState||(i.animationState=kx(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();qr(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:s}=this.node.prevProps||{};i!==s&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let u2=0;class c2 extends rn{constructor(){super(...arguments),this.id=u2++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:s}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===r)return;const c=this.node.animationState.setActive("exit",!i);s&&!i&&c.then(()=>{s(this.id)})}mount(){const{register:i,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const d2={animation:{Feature:l2},exit:{Feature:c2}};function Gi(n){return{point:{x:n.pageX,y:n.pageY}}}const m2=n=>i=>gd(i)&&n(i,Gi(i));function Ri(n,i,s,r){return Li(n,i,m2(s),r)}const Zy=({current:n})=>n?n.ownerDocument.defaultView:null,Xg=(n,i)=>Math.abs(n-i);function f2(n,i){const s=Xg(n.x,i.x),r=Xg(n.y,i.y);return Math.sqrt(s**2+r**2)}const Jg=new Set(["auto","scroll"]);class Ky{constructor(i,s,{transformPagePoint:r,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=z=>{this.handleScroll(z.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=pc(this.lastMoveEventInfo,this.history),O=this.startEvent!==null,L=f2(z.offset,{x:0,y:0})>=this.distanceThreshold;if(!O&&!L)return;const{point:U}=z,{timestamp:H}=lt;this.history.push({...U,timestamp:H});const{onStart:X,onMove:G}=this.handlers;O||(X&&X(this.lastMoveEvent,z),this.startEvent=this.lastMoveEvent),G&&G(this.lastMoveEvent,z)},this.handlePointerMove=(z,O)=>{this.lastMoveEvent=z,this.lastMoveEventInfo=hc(O,this.transformPagePoint),je.update(this.updatePoint,!0)},this.handlePointerUp=(z,O)=>{this.end();const{onEnd:L,onSessionEnd:U,resumeAnimation:H}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&H&&H(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const X=pc(z.type==="pointercancel"?this.lastMoveEventInfo:hc(O,this.transformPagePoint),this.history);this.startEvent&&L&&L(z,X),U&&U(z,X)},!gd(i))return;this.dragSnapToOrigin=f,this.handlers=s,this.transformPagePoint=r,this.distanceThreshold=d,this.contextWindow=c||window;const h=Gi(i),g=hc(h,this.transformPagePoint),{point:y}=g,{timestamp:b}=lt;this.history=[{...y,timestamp:b}];const{onSessionStart:S}=s;S&&S(i,pc(g,this.history)),this.removeListeners=Ui(Ri(this.contextWindow,"pointermove",this.handlePointerMove),Ri(this.contextWindow,"pointerup",this.handlePointerUp),Ri(this.contextWindow,"pointercancel",this.handlePointerUp)),p&&this.startScrollTracking(p)}startScrollTracking(i){let s=i.parentElement;for(;s;){const r=getComputedStyle(s);(Jg.has(r.overflowX)||Jg.has(r.overflowY))&&this.scrollPositions.set(s,{x:s.scrollLeft,y:s.scrollTop}),s=s.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const s=this.scrollPositions.get(i);if(!s)return;const r=i===window,c=r?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},f={x:c.x-s.x,y:c.y-s.y};f.x===0&&f.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(i,c),je.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),sn(this.updatePoint)}}function hc(n,i){return i?{point:i(n.point)}:n}function Zg(n,i){return{x:n.x-i.x,y:n.y-i.y}}function pc({point:n},i){return{point:n,delta:Zg(n,Fy(i)),offset:Zg(n,h2(i)),velocity:p2(i,.1)}}function h2(n){return n[0]}function Fy(n){return n[n.length-1]}function p2(n,i){if(n.length<2)return{x:0,y:0};let s=n.length-1,r=null;const c=Fy(n);for(;s>=0&&(r=n[s],!(c.timestamp-r.timestamp>Wt(i)));)s--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&c.timestamp-r.timestamp>Wt(i)*2&&(r=n[1]);const f=kt(c.timestamp-r.timestamp);if(f===0)return{x:0,y:0};const d={x:(c.x-r.x)/f,y:(c.y-r.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function g2(n,{min:i,max:s},r){return i!==void 0&&n<i?n=r?Le(i,n,r.min):Math.max(n,i):s!==void 0&&n>s&&(n=r?Le(s,n,r.max):Math.min(n,s)),n}function Kg(n,i,s){return{min:i!==void 0?n.min+i:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function v2(n,{top:i,left:s,bottom:r,right:c}){return{x:Kg(n.x,s,c),y:Kg(n.y,i,r)}}function Fg(n,i){let s=i.min-n.min,r=i.max-n.max;return i.max-i.min<n.max-n.min&&([s,r]=[r,s]),{min:s,max:r}}function y2(n,i){return{x:Fg(n.x,i.x),y:Fg(n.y,i.y)}}function b2(n,i){let s=.5;const r=ht(n),c=ht(i);return c>r?s=wi(i.min,i.max-r,n.min):r>c&&(s=wi(n.min,n.max-c,i.min)),ia(0,1,s)}function S2(n,i){const s={};return i.min!==void 0&&(s.min=i.min-n.min),i.max!==void 0&&(s.max=i.max-n.min),s}const Pc=.35;function T2(n=Pc){return n===!1?n=0:n===!0&&(n=Pc),{x:Wg(n,"left","right"),y:Wg(n,"top","bottom")}}function Wg(n,i,s){return{min:$g(n,i),max:$g(n,s)}}function $g(n,i){return typeof n=="number"?n:n[i]||0}const x2=new WeakMap;class E2{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:s=!1,distanceThreshold:r}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=b=>{s&&this.snapToCursor(Gi(b).point),this.stopAnimation()},d=(b,S)=>{const{drag:z,dragPropagation:O,onDragStart:L}=this.getProps();if(z&&!O&&(this.openDragLock&&this.openDragLock(),this.openDragLock=$T(z),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),na(H=>{let X=this.getAxisMotionValue(H).get()||0;if(oa.test(X)){const{projection:G}=this.visualElement;if(G&&G.layout){const Z=G.layout.layoutBox[H];Z&&(X=ht(Z)*(parseFloat(X)/100))}}this.originPoint[H]=X}),L&&je.update(()=>L(b,S),!1,!0),wc(this.visualElement,"transform");const{animationState:U}=this.visualElement;U&&U.setActive("whileDrag",!0)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:z,dragDirectionLock:O,onDirectionLock:L,onDrag:U}=this.getProps();if(!z&&!this.openDragLock)return;const{offset:H}=S;if(O&&this.currentDirection===null){this.currentDirection=C2(H),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",S.point,H),this.updateAxis("y",S.point,H),this.visualElement.render(),U&&je.update(()=>U(b,S),!1,!0)},h=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new Ky(i,{onSessionStart:f,onStart:d,onMove:p,onSessionEnd:h,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:Zy(this.visualElement),element:this.visualElement.current})}stop(i,s){const r=i||this.latestPointerEvent,c=s||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!r)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&je.postRender(()=>p(r,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:s}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,s,r){const{drag:c}=this.getProps();if(!r||!cr(i,c,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+r[i];this.constraints&&this.constraints[i]&&(d=g2(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){var f;const{dragConstraints:i,dragElastic:s}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(f=this.visualElement.projection)==null?void 0:f.layout,c=this.constraints;i&&So(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&r?this.constraints=v2(r.layoutBox,i):this.constraints=!1,this.elastic=T2(s),c!==this.constraints&&!So(i)&&r&&this.constraints&&!this.hasMutatedConstraints&&na(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=S2(r.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:s}=this.getProps();if(!i||!So(i))return!1;const r=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const f=Dx(r,c.root,this.visualElement.getTransformPagePoint());let d=y2(c.layout.layoutBox,f);if(s){const p=s(Ax(d));this.hasMutatedConstraints=!!p,p&&(d=vy(p))}return d}startAnimation(i){const{drag:s,dragMomentum:r,dragElastic:c,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},g=na(y=>{if(!cr(y,s,this.currentDirection))return;let b=h&&h[y]||{};d&&(b={min:0,max:0});const S=c?200:1e6,z=c?40:1e7,O={type:"inertia",velocity:r?i[y]:0,bounceStiffness:S,bounceDamping:z,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(y,O)});return Promise.all(g).then(p)}startAxisValueAnimation(i,s){const r=this.getAxisMotionValue(i);return wc(this.visualElement,i),r.start(dd(i,r,0,s,this.visualElement,!1))}stopAnimation(){na(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const s=`_drag${i.toUpperCase()}`,r=this.visualElement.getProps(),c=r[s];return c||this.visualElement.getValue(i,(r.initial?r.initial[i]:void 0)||0)}snapToCursor(i){na(s=>{const{drag:r}=this.getProps();if(!cr(s,r,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(s);if(c&&c.layout){const{min:d,max:p}=c.layout.layoutBox[s],h=f.get()||0;f.set(i[s]-Le(d,p,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:s}=this.getProps(),{projection:r}=this.visualElement;if(!So(s)||!r||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};na(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const h=p.get();c[d]=b2({min:h,max:h},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),na(d=>{if(!cr(d,i,null))return;const p=this.getAxisMotionValue(d),{min:h,max:g}=this.constraints[d];p.set(Le(h,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;x2.set(this.visualElement,this);const i=this.visualElement.current,s=Ri(i,"pointerdown",g=>{const{drag:y,dragListener:b=!0}=this.getProps(),S=g.target,z=S!==i&&ox(S);y&&b&&!z&&this.start(g)});let r;const c=()=>{const{dragConstraints:g}=this.getProps();So(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),r||(r=A2(i,g.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,d=f.addEventListener("measure",c);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),je.read(c);const p=Li(window,"resize",()=>this.scalePositionWithinConstraints()),h=f.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(na(b=>{const S=this.getAxisMotionValue(b);S&&(this.originPoint[b]+=g[b].translate,S.set(S.get()+g[b].translate))}),this.visualElement.render())}));return()=>{p(),s(),d(),h&&h(),r&&r()}}getProps(){const i=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:r=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:d=Pc,dragMomentum:p=!0}=i;return{...i,drag:s,dragDirectionLock:r,dragPropagation:c,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function Ig(n){let i=!0;return()=>{if(i){i=!1;return}n()}}function A2(n,i,s){const r=sg(n,Ig(s)),c=sg(i,Ig(s));return()=>{r(),c()}}function cr(n,i,s){return(i===!0||i===n)&&(s===null||s===n)}function C2(n,i=10){let s=null;return Math.abs(n.y)>i?s="y":Math.abs(n.x)>i&&(s="x"),s}class M2 extends rn{constructor(i){super(i),this.removeGroupControls=Yt,this.removeListeners=Yt,this.controls=new E2(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yt}update(){const{dragControls:i}=this.node.getProps(),{dragControls:s}=this.node.prevProps||{};i!==s&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const gc=n=>(i,s)=>{n&&je.update(()=>n(i,s),!1,!0)};class D2 extends rn{constructor(){super(...arguments),this.removePointerDownListener=Yt}onPointerDown(i){this.session=new Ky(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:s,onPan:r,onPanEnd:c}=this.node.getProps();return{onSessionStart:gc(i),onStart:gc(s),onMove:gc(r),onEnd:(f,d)=>{delete this.session,c&&je.postRender(()=>c(f,d))}}}mount(){this.removePointerDownListener=Ri(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vc=!1;class z2 extends P.Component{componentDidMount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:r,layoutId:c}=this.props,{projection:f}=i;f&&(s.group&&s.group.add(f),r&&r.register&&c&&r.register(f),vc&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),yr.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:s,visualElement:r,drag:c,isPresent:f}=this.props,{projection:d}=r;return d&&(d.isPresent=f,i.layoutDependency!==s&&d.setOptions({...d.options,layoutDependency:s}),vc=!0,c||i.layoutDependency!==s||s===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||je.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),pd.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:r}=this.props,{projection:c}=i;vc=!0,c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),r&&r.deregister&&r.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Wy(n){const[i,s]=Uy(),r=P.useContext(Zc);return T.jsx(z2,{...n,layoutGroup:r,switchLayoutGroup:P.useContext(Xy),isPresent:i,safeToRemove:s})}const N2={pan:{Feature:D2},drag:{Feature:M2,ProjectionNode:Ly,MeasureLayout:Wy}};function ev(n,i,s){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,f=r[c];f&&je.postRender(()=>f(i,Gi(i)))}class q2 extends rn{mount(){const{current:i}=this.node;i&&(this.unmount=ex(i,(s,r)=>(ev(this.node,r,"Start"),c=>ev(this.node,c,"End"))))}unmount(){}}class O2 extends rn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ui(Li(this.node.current,"focus",()=>this.onFocus()),Li(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function tv(n,i,s){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),f=r[c];f&&je.postRender(()=>f(i,Gi(i)))}class j2 extends rn{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:s,propagate:r}=this.node.props;this.unmount=sx(i,(c,f)=>(tv(this.node,f,"Start"),(d,{success:p})=>tv(this.node,d,p?"End":"Cancel")),{useGlobalTarget:s,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const kc=new WeakMap,yc=new WeakMap,R2=n=>{const i=kc.get(n.target);i&&i(n)},w2=n=>{n.forEach(R2)};function V2({root:n,...i}){const s=n||document;yc.has(s)||yc.set(s,{});const r=yc.get(s),c=JSON.stringify(i);return r[c]||(r[c]=new IntersectionObserver(w2,{root:n,...i})),r[c]}function _2(n,i,s){const r=V2(i);return kc.set(n,s),r.observe(n),()=>{kc.delete(n),r.unobserve(n)}}const B2={some:0,all:1};class L2 extends rn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:s,margin:r,amount:c="some",once:f}=i,d={root:s?s.current:void 0,rootMargin:r,threshold:typeof c=="number"?c:B2[c]},p=h=>{const{isIntersecting:g}=h;if(this.isInView===g||(this.isInView=g,f&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=g?y:b;S&&S(h)};return _2(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:s}=this.node;["amount","margin","root"].some(U2(i,s))&&this.startObserver()}unmount(){}}function U2({viewport:n={}},{viewport:i={}}={}){return s=>n[s]!==i[s]}const H2={inView:{Feature:L2},tap:{Feature:j2},focus:{Feature:O2},hover:{Feature:q2}},Q2={layout:{ProjectionNode:Ly,MeasureLayout:Wy}},G2={...d2,...H2,...N2,...Q2},Pi=s2(G2,r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k2=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,r)=>r?r.toUpperCase():s.toLowerCase()),av=n=>{const i=k2(n);return i.charAt(0).toUpperCase()+i.slice(1)},$y=(...n)=>n.filter((i,s,r)=>!!i&&i.trim()!==""&&r.indexOf(i)===s).join(" ").trim(),Y2=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=P.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:c="",children:f,iconNode:d,...p},h)=>P.createElement("svg",{ref:h,...X2,width:i,height:i,stroke:n,strokeWidth:r?Number(s)*24/Number(i):s,className:$y("lucide",c),...!f&&!Y2(p)&&{"aria-hidden":"true"},...p},[...d.map(([g,y])=>P.createElement(g,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(n,i)=>{const s=P.forwardRef(({className:r,...c},f)=>P.createElement(J2,{ref:f,iconNode:i,className:$y(`lucide-${P2(av(n))}`,`lucide-${n}`,r),...c}));return s.displayName=av(n),s};/**
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
 */const dA=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],mA=at("music-2",dA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],hA=at("music",fA);/**
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
 */const TA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],t0=at("x",TA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],EA=at("youtube",xA);function a0(n){var i,s,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(i=0;i<c;i++)n[i]&&(s=a0(n[i]))&&(r&&(r+=" "),r+=s)}else for(s in n)n[s]&&(r&&(r+=" "),r+=s);return r}function AA(){for(var n,i,s=0,r="",c=arguments.length;s<c;s++)(n=arguments[s])&&(i=a0(n))&&(r&&(r+=" "),r+=i);return r}const CA=(n,i)=>{const s=new Array(n.length+i.length);for(let r=0;r<n.length;r++)s[r]=n[r];for(let r=0;r<i.length;r++)s[n.length+r]=i[r];return s},MA=(n,i)=>({classGroupId:n,validator:i}),n0=(n=new Map,i=null,s)=>({nextPart:n,validators:i,classGroupId:s}),Dr="-",nv=[],DA="arbitrary..",zA=n=>{const i=qA(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return NA(d);const p=d.split(Dr),h=p[0]===""&&p.length>1?1:0;return o0(p,h,i)},getConflictingClassGroupIds:(d,p)=>{if(p){const h=r[d],g=s[d];return h?g?CA(g,h):h:g||nv}return s[d]||nv}}},o0=(n,i,s)=>{if(n.length-i===0)return s.classGroupId;const c=n[i],f=s.nextPart.get(c);if(f){const g=o0(n,i+1,f);if(g)return g}const d=s.validators;if(d===null)return;const p=i===0?n.join(Dr):n.slice(i).join(Dr),h=d.length;for(let g=0;g<h;g++){const y=d[g];if(y.validator(p))return y.classGroupId}},NA=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=n.slice(1,-1),s=i.indexOf(":"),r=i.slice(0,s);return r?DA+r:void 0})(),qA=n=>{const{theme:i,classGroups:s}=n;return OA(s,i)},OA=(n,i)=>{const s=n0();for(const r in n){const c=n[r];Dd(c,s,r,i)}return s},Dd=(n,i,s,r)=>{const c=n.length;for(let f=0;f<c;f++){const d=n[f];jA(d,i,s,r)}},jA=(n,i,s,r)=>{if(typeof n=="string"){RA(n,i,s);return}if(typeof n=="function"){wA(n,i,s,r);return}VA(n,i,s,r)},RA=(n,i,s)=>{const r=n===""?i:i0(i,n);r.classGroupId=s},wA=(n,i,s,r)=>{if(_A(n)){Dd(n(r),i,s,r);return}i.validators===null&&(i.validators=[]),i.validators.push(MA(s,n))},VA=(n,i,s,r)=>{const c=Object.entries(n),f=c.length;for(let d=0;d<f;d++){const[p,h]=c[d];Dd(h,i0(i,p),s,r)}},i0=(n,i)=>{let s=n;const r=i.split(Dr),c=r.length;for(let f=0;f<c;f++){const d=r[f];let p=s.nextPart.get(d);p||(p=n0(),s.nextPart.set(d,p)),s=p}return s},_A=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,BA=n=>{if(n<1)return{get:()=>{},set:()=>{}};let i=0,s=Object.create(null),r=Object.create(null);const c=(f,d)=>{s[f]=d,i++,i>n&&(i=0,r=s,s=Object.create(null))};return{get(f){let d=s[f];if(d!==void 0)return d;if((d=r[f])!==void 0)return c(f,d),d},set(f,d){f in s?s[f]=d:c(f,d)}}},Xc="!",ov=":",LA=[],iv=(n,i,s,r,c)=>({modifiers:n,hasImportantModifier:i,baseClassName:s,maybePostfixModifierPosition:r,isExternal:c}),UA=n=>{const{prefix:i,experimentalParseClassName:s}=n;let r=c=>{const f=[];let d=0,p=0,h=0,g;const y=c.length;for(let L=0;L<y;L++){const U=c[L];if(d===0&&p===0){if(U===ov){f.push(c.slice(h,L)),h=L+1;continue}if(U==="/"){g=L;continue}}U==="["?d++:U==="]"?d--:U==="("?p++:U===")"&&p--}const b=f.length===0?c:c.slice(h);let S=b,z=!1;b.endsWith(Xc)?(S=b.slice(0,-1),z=!0):b.startsWith(Xc)&&(S=b.slice(1),z=!0);const O=g&&g>h?g-h:void 0;return iv(f,z,S,O)};if(i){const c=i+ov,f=r;r=d=>d.startsWith(c)?f(d.slice(c.length)):iv(LA,!1,d,void 0,!0)}if(s){const c=r;r=f=>s({className:f,parseClassName:c})}return r},HA=n=>{const i=new Map;return n.orderSensitiveModifiers.forEach((s,r)=>{i.set(s,1e6+r)}),s=>{const r=[];let c=[];for(let f=0;f<s.length;f++){const d=s[f],p=d[0]==="[",h=i.has(d);p||h?(c.length>0&&(c.sort(),r.push(...c),c=[]),r.push(d)):c.push(d)}return c.length>0&&(c.sort(),r.push(...c)),r}},QA=n=>({cache:BA(n.cacheSize),parseClassName:UA(n),sortModifiers:HA(n),...zA(n)}),GA=/\s+/,PA=(n,i)=>{const{parseClassName:s,getClassGroupId:r,getConflictingClassGroupIds:c,sortModifiers:f}=i,d=[],p=n.trim().split(GA);let h="";for(let g=p.length-1;g>=0;g-=1){const y=p[g],{isExternal:b,modifiers:S,hasImportantModifier:z,baseClassName:O,maybePostfixModifierPosition:L}=s(y);if(b){h=y+(h.length>0?" "+h:h);continue}let U=!!L,H=r(U?O.substring(0,L):O);if(!H){if(!U){h=y+(h.length>0?" "+h:h);continue}if(H=r(O),!H){h=y+(h.length>0?" "+h:h);continue}U=!1}const X=S.length===0?"":S.length===1?S[0]:f(S).join(":"),G=z?X+Xc:X,Z=G+H;if(d.indexOf(Z)>-1)continue;d.push(Z);const Y=c(H,U);for(let ie=0;ie<Y.length;++ie){const W=Y[ie];d.push(G+W)}h=y+(h.length>0?" "+h:h)}return h},kA=(...n)=>{let i=0,s,r,c="";for(;i<n.length;)(s=n[i++])&&(r=s0(s))&&(c&&(c+=" "),c+=r);return c},s0=n=>{if(typeof n=="string")return n;let i,s="";for(let r=0;r<n.length;r++)n[r]&&(i=s0(n[r]))&&(s&&(s+=" "),s+=i);return s},YA=(n,...i)=>{let s,r,c,f;const d=h=>{const g=i.reduce((y,b)=>b(y),n());return s=QA(g),r=s.cache.get,c=s.cache.set,f=p,p(h)},p=h=>{const g=r(h);if(g)return g;const y=PA(h,s);return c(h,y),y};return f=d,(...h)=>f(kA(...h))},XA=[],We=n=>{const i=s=>s[n]||XA;return i.isThemeGetter=!0,i},r0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,l0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,JA=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,ZA=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,KA=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,FA=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,WA=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$A=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,en=n=>JA.test(n),pe=n=>!!n&&!Number.isNaN(Number(n)),tn=n=>!!n&&Number.isInteger(Number(n)),bc=n=>n.endsWith("%")&&pe(n.slice(0,-1)),Ca=n=>ZA.test(n),u0=()=>!0,IA=n=>KA.test(n)&&!FA.test(n),zd=()=>!1,eC=n=>WA.test(n),tC=n=>$A.test(n),aC=n=>!ee(n)&&!ae(n),nC=n=>ln(n,m0,zd),ee=n=>r0.test(n),zn=n=>ln(n,f0,IA),sv=n=>ln(n,dC,pe),oC=n=>ln(n,p0,u0),iC=n=>ln(n,h0,zd),rv=n=>ln(n,c0,zd),sC=n=>ln(n,d0,tC),dr=n=>ln(n,g0,eC),ae=n=>l0.test(n),Di=n=>Rn(n,f0),rC=n=>Rn(n,h0),lv=n=>Rn(n,c0),lC=n=>Rn(n,m0),uC=n=>Rn(n,d0),mr=n=>Rn(n,g0,!0),cC=n=>Rn(n,p0,!0),ln=(n,i,s)=>{const r=r0.exec(n);return r?r[1]?i(r[1]):s(r[2]):!1},Rn=(n,i,s=!1)=>{const r=l0.exec(n);return r?r[1]?i(r[1]):s:!1},c0=n=>n==="position"||n==="percentage",d0=n=>n==="image"||n==="url",m0=n=>n==="length"||n==="size"||n==="bg-size",f0=n=>n==="length",dC=n=>n==="number",h0=n=>n==="family-name",p0=n=>n==="number"||n==="weight",g0=n=>n==="shadow",mC=()=>{const n=We("color"),i=We("font"),s=We("text"),r=We("font-weight"),c=We("tracking"),f=We("leading"),d=We("breakpoint"),p=We("container"),h=We("spacing"),g=We("radius"),y=We("shadow"),b=We("inset-shadow"),S=We("text-shadow"),z=We("drop-shadow"),O=We("blur"),L=We("perspective"),U=We("aspect"),H=We("ease"),X=We("animate"),G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Y=()=>[...Z(),ae,ee],ie=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto","contain","none"],B=()=>[ae,ee,h],se=()=>[en,"full","auto",...B()],Ce=()=>[tn,"none","subgrid",ae,ee],_e=()=>["auto",{span:["full",tn,ae,ee]},tn,ae,ee],Re=()=>[tn,"auto",ae,ee],pt=()=>["auto","min","max","fr",ae,ee],ut=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ge=()=>["start","end","center","stretch","center-safe","end-safe"],j=()=>["auto",...B()],Q=()=>[en,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...B()],$=()=>[en,"screen","full","dvw","lvw","svw","min","max","fit",...B()],fe=()=>[en,"screen","full","lh","dvh","lvh","svh","min","max","fit",...B()],k=()=>[n,ae,ee],A=()=>[...Z(),lv,rv,{position:[ae,ee]}],_=()=>["no-repeat",{repeat:["","x","y","space","round"]}],J=()=>["auto","cover","contain",lC,nC,{size:[ae,ee]}],F=()=>[bc,Di,zn],oe=()=>["","none","full",g,ae,ee],le=()=>["",pe,Di,zn],Se=()=>["solid","dashed","dotted","double"],Ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],he=()=>[pe,bc,lv,rv],Da=()=>["","none",O,ae,ee],sa=()=>["none",pe,ae,ee],za=()=>["none",pe,ae,ee],wn=()=>[pe,ae,ee],Rt=()=>[en,"full",...B()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ca],breakpoint:[Ca],color:[u0],container:[Ca],"drop-shadow":[Ca],ease:["in","out","in-out"],font:[aC],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ca],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ca],shadow:[Ca],spacing:["px",pe],text:[Ca],"text-shadow":[Ca],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",en,ee,ae,U]}],container:["container"],columns:[{columns:[pe,ee,ae,p]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Y()}],overflow:[{overflow:ie()}],"overflow-x":[{"overflow-x":ie()}],"overflow-y":[{"overflow-y":ie()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:se()}],"inset-x":[{"inset-x":se()}],"inset-y":[{"inset-y":se()}],start:[{"inset-s":se(),start:se()}],end:[{"inset-e":se(),end:se()}],"inset-bs":[{"inset-bs":se()}],"inset-be":[{"inset-be":se()}],top:[{top:se()}],right:[{right:se()}],bottom:[{bottom:se()}],left:[{left:se()}],visibility:["visible","invisible","collapse"],z:[{z:[tn,"auto",ae,ee]}],basis:[{basis:[en,"full","auto",p,...B()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[pe,en,"auto","initial","none",ee]}],grow:[{grow:["",pe,ae,ee]}],shrink:[{shrink:["",pe,ae,ee]}],order:[{order:[tn,"first","last","none",ae,ee]}],"grid-cols":[{"grid-cols":Ce()}],"col-start-end":[{col:_e()}],"col-start":[{"col-start":Re()}],"col-end":[{"col-end":Re()}],"grid-rows":[{"grid-rows":Ce()}],"row-start-end":[{row:_e()}],"row-start":[{"row-start":Re()}],"row-end":[{"row-end":Re()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":pt()}],"auto-rows":[{"auto-rows":pt()}],gap:[{gap:B()}],"gap-x":[{"gap-x":B()}],"gap-y":[{"gap-y":B()}],"justify-content":[{justify:[...ut(),"normal"]}],"justify-items":[{"justify-items":[...Ge(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ge()]}],"align-content":[{content:["normal",...ut()]}],"align-items":[{items:[...Ge(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ge(),{baseline:["","last"]}]}],"place-content":[{"place-content":ut()}],"place-items":[{"place-items":[...Ge(),"baseline"]}],"place-self":[{"place-self":["auto",...Ge()]}],p:[{p:B()}],px:[{px:B()}],py:[{py:B()}],ps:[{ps:B()}],pe:[{pe:B()}],pbs:[{pbs:B()}],pbe:[{pbe:B()}],pt:[{pt:B()}],pr:[{pr:B()}],pb:[{pb:B()}],pl:[{pl:B()}],m:[{m:j()}],mx:[{mx:j()}],my:[{my:j()}],ms:[{ms:j()}],me:[{me:j()}],mbs:[{mbs:j()}],mbe:[{mbe:j()}],mt:[{mt:j()}],mr:[{mr:j()}],mb:[{mb:j()}],ml:[{ml:j()}],"space-x":[{"space-x":B()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":B()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],"inline-size":[{inline:["auto",...$()]}],"min-inline-size":[{"min-inline":["auto",...$()]}],"max-inline-size":[{"max-inline":["none",...$()]}],"block-size":[{block:["auto",...fe()]}],"min-block-size":[{"min-block":["auto",...fe()]}],"max-block-size":[{"max-block":["none",...fe()]}],w:[{w:[p,"screen",...Q()]}],"min-w":[{"min-w":[p,"screen","none",...Q()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[d]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",s,Di,zn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,cC,oC]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",bc,ee]}],"font-family":[{font:[rC,iC,i]}],"font-features":[{"font-features":[ee]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,ae,ee]}],"line-clamp":[{"line-clamp":[pe,"none",ae,sv]}],leading:[{leading:[f,...B()]}],"list-image":[{"list-image":["none",ae,ee]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ae,ee]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Se(),"wavy"]}],"text-decoration-thickness":[{decoration:[pe,"from-font","auto",ae,zn]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[pe,"auto",ae,ee]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ae,ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ae,ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:A()}],"bg-repeat":[{bg:_()}],"bg-size":[{bg:J()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},tn,ae,ee],radial:["",ae,ee],conic:[tn,ae,ee]},uC,sC]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:F()}],"gradient-via-pos":[{via:F()}],"gradient-to-pos":[{to:F()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:oe()}],"rounded-s":[{"rounded-s":oe()}],"rounded-e":[{"rounded-e":oe()}],"rounded-t":[{"rounded-t":oe()}],"rounded-r":[{"rounded-r":oe()}],"rounded-b":[{"rounded-b":oe()}],"rounded-l":[{"rounded-l":oe()}],"rounded-ss":[{"rounded-ss":oe()}],"rounded-se":[{"rounded-se":oe()}],"rounded-ee":[{"rounded-ee":oe()}],"rounded-es":[{"rounded-es":oe()}],"rounded-tl":[{"rounded-tl":oe()}],"rounded-tr":[{"rounded-tr":oe()}],"rounded-br":[{"rounded-br":oe()}],"rounded-bl":[{"rounded-bl":oe()}],"border-w":[{border:le()}],"border-w-x":[{"border-x":le()}],"border-w-y":[{"border-y":le()}],"border-w-s":[{"border-s":le()}],"border-w-e":[{"border-e":le()}],"border-w-bs":[{"border-bs":le()}],"border-w-be":[{"border-be":le()}],"border-w-t":[{"border-t":le()}],"border-w-r":[{"border-r":le()}],"border-w-b":[{"border-b":le()}],"border-w-l":[{"border-l":le()}],"divide-x":[{"divide-x":le()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":le()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Se(),"hidden","none"]}],"divide-style":[{divide:[...Se(),"hidden","none"]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-bs":[{"border-bs":k()}],"border-color-be":[{"border-be":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...Se(),"none","hidden"]}],"outline-offset":[{"outline-offset":[pe,ae,ee]}],"outline-w":[{outline:["",pe,Di,zn]}],"outline-color":[{outline:k()}],shadow:[{shadow:["","none",y,mr,dr]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":["none",b,mr,dr]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:le()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[pe,zn]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":le()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":["none",S,mr,dr]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[pe,ae,ee]}],"mix-blend":[{"mix-blend":[...Ie(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ie()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[pe]}],"mask-image-linear-from-pos":[{"mask-linear-from":he()}],"mask-image-linear-to-pos":[{"mask-linear-to":he()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":he()}],"mask-image-t-to-pos":[{"mask-t-to":he()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":he()}],"mask-image-r-to-pos":[{"mask-r-to":he()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":he()}],"mask-image-b-to-pos":[{"mask-b-to":he()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":he()}],"mask-image-l-to-pos":[{"mask-l-to":he()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":he()}],"mask-image-x-to-pos":[{"mask-x-to":he()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":he()}],"mask-image-y-to-pos":[{"mask-y-to":he()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[ae,ee]}],"mask-image-radial-from-pos":[{"mask-radial-from":he()}],"mask-image-radial-to-pos":[{"mask-radial-to":he()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Z()}],"mask-image-conic-pos":[{"mask-conic":[pe]}],"mask-image-conic-from-pos":[{"mask-conic-from":he()}],"mask-image-conic-to-pos":[{"mask-conic-to":he()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:A()}],"mask-repeat":[{mask:_()}],"mask-size":[{mask:J()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ae,ee]}],filter:[{filter:["","none",ae,ee]}],blur:[{blur:Da()}],brightness:[{brightness:[pe,ae,ee]}],contrast:[{contrast:[pe,ae,ee]}],"drop-shadow":[{"drop-shadow":["","none",z,mr,dr]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:["",pe,ae,ee]}],"hue-rotate":[{"hue-rotate":[pe,ae,ee]}],invert:[{invert:["",pe,ae,ee]}],saturate:[{saturate:[pe,ae,ee]}],sepia:[{sepia:["",pe,ae,ee]}],"backdrop-filter":[{"backdrop-filter":["","none",ae,ee]}],"backdrop-blur":[{"backdrop-blur":Da()}],"backdrop-brightness":[{"backdrop-brightness":[pe,ae,ee]}],"backdrop-contrast":[{"backdrop-contrast":[pe,ae,ee]}],"backdrop-grayscale":[{"backdrop-grayscale":["",pe,ae,ee]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[pe,ae,ee]}],"backdrop-invert":[{"backdrop-invert":["",pe,ae,ee]}],"backdrop-opacity":[{"backdrop-opacity":[pe,ae,ee]}],"backdrop-saturate":[{"backdrop-saturate":[pe,ae,ee]}],"backdrop-sepia":[{"backdrop-sepia":["",pe,ae,ee]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":B()}],"border-spacing-x":[{"border-spacing-x":B()}],"border-spacing-y":[{"border-spacing-y":B()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ae,ee]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[pe,"initial",ae,ee]}],ease:[{ease:["linear","initial",H,ae,ee]}],delay:[{delay:[pe,ae,ee]}],animate:[{animate:["none",X,ae,ee]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[L,ae,ee]}],"perspective-origin":[{"perspective-origin":Y()}],rotate:[{rotate:sa()}],"rotate-x":[{"rotate-x":sa()}],"rotate-y":[{"rotate-y":sa()}],"rotate-z":[{"rotate-z":sa()}],scale:[{scale:za()}],"scale-x":[{"scale-x":za()}],"scale-y":[{"scale-y":za()}],"scale-z":[{"scale-z":za()}],"scale-3d":["scale-3d"],skew:[{skew:wn()}],"skew-x":[{"skew-x":wn()}],"skew-y":[{"skew-y":wn()}],transform:[{transform:[ae,ee,"","none","gpu","cpu"]}],"transform-origin":[{origin:Y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Rt()}],"translate-x":[{"translate-x":Rt()}],"translate-y":[{"translate-y":Rt()}],"translate-z":[{"translate-z":Rt()}],"translate-none":["translate-none"],accent:[{accent:k()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ae,ee]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mbs":[{"scroll-mbs":B()}],"scroll-mbe":[{"scroll-mbe":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pbs":[{"scroll-pbs":B()}],"scroll-pbe":[{"scroll-pbe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ae,ee]}],fill:[{fill:["none",...k()]}],"stroke-w":[{stroke:[pe,Di,zn,sv]}],stroke:[{stroke:["none",...k()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},fC=YA(mC);function zr(...n){return fC(AA(n))}const zi={pastor:{name:"Pastor Fredson Fagundes",phone:"74999829797"},elders:[{name:"Pb. Adevaldo Marques",phone:"7499795490",image:null},{name:"Pb. Elique Rios Filho",phone:"7499910068",image:null}],deacons:[{name:"Diácono Adonel Oliveira",phone:"7499076770",image:null},{name:"Diácono Antonio Rios",phone:"7499946901",image:null},{name:"Diácono Antonio Jacinto Filho",phone:"7499867018",image:null}],societies:[{name:"UPH - Pb. José dos Santos",phone:"7498119515",image:null},{name:"SAF - Osmária",phone:"7498132159",image:null}]},uv=[{month:0,day:1,name:"Suelivânia Santos da Silva Sena"},{month:0,day:7,name:"Ozileia da Silva Cunha Ferreira"},{month:0,day:12,name:"Euflorsina da Cunha Oliveira"},{month:0,day:20,name:"Bernadet"},{month:0,day:25,name:"Sidelcina da Cunha Oliveira"},{month:0,day:27,name:"Thayz Mota Cunha Franco"},{month:1,day:2,name:"Evanuzia"},{month:1,day:7,name:"Maria Betina Cunha Franco"},{month:1,day:10,name:"Arthur Oliveira Silva"},{month:1,day:10,name:"Pr. Fredson Fagundes Cerqueira"},{month:1,day:22,name:"Ir. Dete Rios"},{month:1,day:27,name:"Marilene Gonçalves da Silva"},{month:2,day:3,name:"Nalva de Antoniel"},{month:2,day:8,name:"Levi Rios Alves Fagundes"},{month:2,day:16,name:"Lucineide Oliveira Nascimento"},{month:2,day:18,name:"Jucielle"},{month:2,day:21,name:"Antônio Ferreira da Silva"},{month:2,day:21,name:"Vitor Manoel da Cunha Ferreira"},{month:2,day:23,name:"Patrícia Lopes rios cunha"},{month:2,day:26,name:"Imarcélia"},{month:2,day:26,name:"Osmária Sousa Rios"},{month:2,day:28,name:"Leonildio Ferreira dos Santos"},{month:2,day:31,name:"Élida Suzart"},{month:2,day:31,name:"Irandir da Silva Rios"},{month:3,day:7,name:"Pedro Leonel da Cunha Ferreira"},{month:3,day:13,name:"Berenice Maria da Silva Lopes"},{month:3,day:24,name:"Saullo Jacó Santos Cunha"},{month:3,day:25,name:"Elique Rios Filho"},{month:4,day:10,name:"Elisa Silva Sena"},{month:4,day:25,name:"Meire da Silva Almeida Evangelista"},{month:4,day:28,name:"Edelice"},{month:5,day:5,name:"Milton Pereira Rios"},{month:5,day:6,name:"Adevaldo Marques Rios"},{month:5,day:13,name:"Joelma Cristina Rios Lima Pinho"},{month:5,day:14,name:"Alzerita Santos de Souza"},{month:5,day:17,name:"Anderson Hangel Souza Franco"},{month:5,day:21,name:"Débora Rios Ribeiro"},{month:5,day:23,name:"Juniclesio Paixao da Silva Santos"},{month:6,day:1,name:"Maria Cecília Cunha Franco"},{month:6,day:2,name:"Daniel Oliveira Santos"},{month:6,day:4,name:"Diana Rios Alves Fagundes"},{month:6,day:8,name:"Zack Samuel Barbosa Silva"},{month:6,day:19,name:"Ridair Cunha"},{month:6,day:20,name:"Welida Ticiana"},{month:6,day:27,name:"Elizânia Gonçalves da Silva Rios"},{month:7,day:4,name:"Uriel da Silva Cunha"},{month:7,day:20,name:"Izabel Rios Oliveira"},{month:8,day:1,name:"Jucirene Lopes da Silva Cunha"},{month:8,day:2,name:"Luana Lima Mendes Oliveira"},{month:8,day:12,name:"Jucineide Rios Oliveira"},{month:8,day:12,name:"Otoniel da Silva Cunha"},{month:8,day:13,name:"Antonio Rios"},{month:8,day:17,name:"Carlito Oliveira Cunha"},{month:8,day:24,name:"Fabiana de Carvalho Barbosa"},{month:8,day:25,name:"Adonel Oliveira"},{month:8,day:25,name:"Roberio Araújo Evangelista"},{month:8,day:30,name:"Jonatas Rios Guilherme"},{month:9,day:7,name:"Evangelina de Oliveira Santos"},{month:9,day:18,name:"Yasmim Barbosa Silva"},{month:9,day:25,name:"Zailde Rios Santos"},{month:9,day:26,name:"João Rodrigues de Souza (Nequinha)"},{month:9,day:29,name:"Maria Luzinete Barbosa Cerqueira"},{month:10,day:3,name:"Josiane Oliveira Santos Silva"},{month:10,day:5,name:"Izabela Mota de Souza Cunha"},{month:10,day:9,name:"Joseane da Silva Souza"},{month:10,day:9,name:"Paulo Sérgio Vieira dos Santos"},{month:10,day:12,name:"José dos Santos Oliveira"},{month:10,day:12,name:"Liz Rios Alves Fagundes"},{month:10,day:24,name:"Oseas da Silva Cunha"},{month:11,day:2,name:"Arnóbio Lopes da Silva"},{month:11,day:8,name:"Adeílda Gomes de Oliveira"},{month:11,day:8,name:"Heloísa Barbosa Silva"},{month:11,day:13,name:"Antônio Jacinto Filho"},{month:11,day:14,name:"Ozuel da Silva Cunha"},{month:11,day:17,name:"Zenilda Maria da Silva Cunha"},{month:11,day:24,name:"Edivaldo Emídio Santos"},{month:11,day:31,name:"Matheus Almeida Evangelista"}],cv=[{month:1,name:"Fevereiro",theme:"CHAMADOS AO ARREPENDIMENTO E COMUNHÃO",verse:"(Is 55:6) Buscai o SENHOR enquanto se pode achar, invocai-o enquanto está perto.",events:["01/02 (domingo): Reunião do Conselho com SAF e UPH","07/02 (sábado): Pregação no ponto – Nova Esperança","13–17/02: Retiro espiritual (Carnaval)","17/02 (terça): Reunião do Conselho","22/02 (domingo): Santa Ceia","25/02 (quarta): Santa Ceia no lar"]},{month:2,name:"Março",theme:"BUSCANDO A SANTIDADE",verse:"(1Pe 1.16) Porque escrito está: Sede santos, porque eu sou santo.",events:["Terças: Curso de formação após a Reunião de Oração","Quintas: Reunião de Doutrina: Pilares da Fé Reformada","Domingos: EBD, 10h - Carta aos Coríntios; Culto, 19h30 - Buscando a Santidade","07/03 (Sábado): Caminhada da Mulher (saída às 17h da porta da igreja, parada na casa de Meire para lanche e palestra)","14/03 (Sábado): Projeto Mão na Massa – Ourolândia","21/03 (Sábado): Nova Esperança","15/03 (Domingo): Culto e Santa Ceia - 19h30","23/03 (Segunda-feira): Reunião do Conselho e Reunião de Liderança - Casa do Pb. Elique Filho","25/03 (Quarta): Santa Ceia no Lar - Casa da Irmã Dalva","30/03 (Segunda-feira): 18h–20h Churrasco, Proza e Viola"]},{month:3,name:"Abril",theme:"A cruz e a redenção em Cristo",verse:"(Is 53:5) Mas ele foi traspassado pelas nossas transgressões e moído pelas nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",events:["11/04 (sábado): Pregação no ponto – Nova Esperança","Curso de Formação - Terças, após reunião de oração","05/04 (domingo): Café da ressureição e Culto da Páscoa com Santa Ceia","15/04 (quarta): Santa Ceia no lar","21/04 (terça): Reunião do Conselho","25/04 (sábado): Aniversário da UPH – Pregador: Pr. Nivaldo Cortes"]},{month:4,name:"Maio",theme:"Edificando a família sobre a Rocha",verse:"(Mt 7.24) Quem ouve minhas palavras e as pratica é tão sábio como a pessoa que constrói sua casa sobre uma rocha firme.",events:["03/05 (Dom): Uma família firmada na Rocha - Miss. Franco (IPB Piritiba)","05/05 (Ter): Oração nos lares (Família de Arnóbio e Lene) - Resp: UPH","10/05 (Dom): Uma família ajustada pelos princípios de Deus - Pb. Robério Evangelista","12/05 (Ter): Oração nos lares (Família de Geanhy e Irandir) - Resp: SAF","16/05 (Sáb): Culto Evangelístico (Nova Esperança) - Liturgia: SAF | Palavra: UPH","17/05 (Dom): Uma família que vence as tempestades - Miss. Abérico Macêdo (IPB Serrolândia)","19/05 (Ter): Oração nos lares (Família de Débora) - Resp: SAF","24/05 (Dom): Uma família que vence as tempestades - Pb. Gilson Rios (IPB Mairi)","26/05 (Ter): Oração nos lares (Fam. Ozuel, Juce, Uriel, Ciele, Luciano e Saulo)","31/05 (Dom): DIA DA FAMÍLIA IPVP - 10h EBD Especial | 19h Culto - Pr. Pedro (IPB Pintadas)"]},{month:5,name:"Junho",theme:"A família no centro do propósito de Deus",verse:"(Js 24:15) Eu e a minha casa serviremos ao SENHOR.",events:["06/06 (sábado): Reunião na casa do Pb. Adevaldo","12/07 (sexta): Culto evangelístico - Casas Populares","13/06 (sábado): Pregação no ponto – Nova Esperança","14/06 (domingo): Santa Ceia","16/06 (terça): Reunião do Conselho - após reunião de oração","17/06 (quarta): Santa Ceia no lar","20/06 (sábado): Jantar de Casais"]},{month:6,name:"Julho",theme:"Confiança no Senhor",verse:"(Sl 27:1) O SENHOR é a minha luz e a minha salvação; de quem terei medo?",events:["04/07 (sábado): Pregação no ponto – Nova Esperança","07/09 (Terça a Quinta): Reuniões de Consagração","12/07 (domingo - 08h): Entrega do Jejum da Consagração","12/07 (domingo - 19h30): Santa Ceia","15/07 (quarta): Santa Ceia no lar","17/07 (sexta): Culto evangelístico","18/07 (sábado): Churrasco, Proza e Viola - UPH de Serrolândia","21/07 (terça): Reunião do Conselho","30/07 (Sexta): Viagem do Retiro IPVP-2026"]},{month:7,name:"Agosto",theme:"Obedecendo ao Senhor na missão",verse:"(Jn 3:1) E veio a palavra do Senhor segunda vez a Jonas, dizendo: Levanta-te, e vai à grande cidade de Nínive.",events:["01 e 02/08 (domingo): Viagem - IPVP","08/08 (sábado): Pregação no ponto – Nova Esperança","09/08 (domingo): Santa Ceia","12/08 (quarta): Santa Ceia no lar","18/08 (terça): Reunião do Conselho","30/08 (domingo): Dia Missionário","28/08 (sexta): Culto evangelístico – Praça do cemitério"]},{month:8,name:"Setembro",theme:"Ele vem",verse:"(Ap 22:12) E eis que venho sem demora, e comigo está o galardão.",events:["05/09 (sábado): Pregação no ponto – Nova Esperança","13/09 (domingo): Santa Ceia","14/09 (segunda): Reunião de Liderança (Casa de Antonio Rios)","16/09 (quarta): Santa Ceia no lar","25/09 (sexta): Culto evangelístico – Alto da Nação","15/09 (terça): Reunião do Conselho","Dia da Bíblia (domingo)"]},{month:9,name:"Outubro",theme:"Reformando sempre",verse:"(Ef 2:8) Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus;",events:["03/10 (sábado): Pregação no ponto – Nova Esperança","04/10 (domingo): Reunião do Conselho com SAF e UPH","11/10 (domingo): Santa Ceia","Aniversário da SAF – Pastor convidado","14/10 (quarta): Santa Ceia no lar","31/10 (sexta): DIA DO EVANGÉLICO – PRAÇA PRINCIPAL"]},{month:10,name:"Novembro",theme:"Gratidão e fidelidade ao Senhor",verse:"(1Sm 7:12) Até aqui nos ajudou o SENHOR.",events:["02/11: Café teológico com o tema: 'E depois da morte...?'","07/11 (sábado): Pregação no ponto – Nova Esperança","12 e 13/11: Cultos evangelísticos na Praça da Nação e na Praça da Preguiça","14–15/11: 31 anos da IPVP – Pastor convidado e Santa Ceia","17/11 (terça): Reunião do Conselho","18/11 (quarta): Santa Ceia no lar","21–30/11: Ausência pastoral (curso em São Paulo)"]},{month:11,name:"Dezembro",theme:"O Cristo encarnado e a esperança eterna",verse:"(Jo 1:14) E o Verbo se fez carne e habitou entre nós.",events:["06/12 (domingo): Santa Ceia","07/12 (segunda): Reunião de Liderança (Casa pastoral)","09/12 (quarta): Santa Ceia no lar","11/12 (sexta): Culto evangelístico","15/12 (terça): Reunião do Conselho","20/12 (domingo) Manhã - Assembleia Geral Ordinária","Cultos de Natal e Encerramento do Ano"]}],hC=[{month:3,announcements:[{text:"Do Perdão ao Triunfo: As sete declarações de Cristo na Cruz.",image:"/aspalavrasdejesus_abril.jpg",isWeekly:!1},{text:"Celebração: UPH 27 Anos",image:"/uph27anos_abril.jpg",isWeekly:!1}]},{month:4,announcements:[{text:"Mês da Família: Edificando a família sobre a Rocha.",image:"/maio_mesdafamilia_2026.jpg",isWeekly:!1}]}],dv=[{title:"A Bênção (Gabriel Guedes)",lyrics:`Que o Senhor te abençoe
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
Escudo para os que n'Ele creem`}],K={primary:"#163328",gold:"#D4B36D",bgLight:"#F0F5F3"},pC=["Gênesis","Êxodo","Levítico","Números","Deuteronômio","Josué","Juízes","Rute","1Samuel","2Samuel","1Reis","2Reis","1Crônicas","2Crônicas","Esdras","Neemias","Ester","Jó","Salmos","Provérbios","Eclesiastes","Cânticos","Isaías","Jeremias","Lamentações","Ezequiel","Daniel","Oseias","Joel","Amós","Obadias","Jonas","Miqueias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias","Mateus","Marcos","Lucas","João","Atos","Romanos","1Coríntios","2Coríntios","Gálatas","Efésios","Filipenses","Colossenses","1Tessalonicenses","2Tessalonicenses","1Timóteo","2Timóteo","Tito","Filemom","Hebreus","Tiago","1Pedro","2Pedro","1João","2João","3João","Judas","Apocalipse"],Sc=n=>["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][n],gC=({size:n=24,className:i=""})=>T.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:i,children:T.jsx("path",{d:"M12 2v20M8 8h8"})}),vC=()=>{const[n,i]=P.useState(!1),[s,r]=P.useState(!1);P.useEffect(()=>{const f=()=>i(window.scrollY>50);return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const c=[{name:"Agenda",href:"#agenda"},{name:"Músicas",href:"#lyrics-search"},{name:"Liderança",href:"#leadership"},{name:"Bíblia",href:"#bible-quick"},{name:"Dízimos",href:"#giving"}];return T.jsxs("nav",{className:zr("fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",n?"bg-white shadow-lg py-3":"bg-white/90 backdrop-blur-sm border-b border-slate-100"),children:[T.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[T.jsxs("div",{className:"flex flex-col",children:[T.jsx("span",{className:"font-serif text-3xl font-bold leading-none",style:{color:K.primary},children:"IPVP"}),T.jsx("span",{className:"text-[9px] uppercase font-bold text-slate-500",children:"Várzea do Poço-BA"})]}),T.jsx("div",{className:"hidden xl:flex gap-6 text-xs font-bold uppercase tracking-widest",children:c.map((f,d)=>T.jsx("a",{href:f.href,className:"hover:text-amber-600 transition-colors",style:{color:K.primary},children:f.name},d))}),T.jsx("a",{href:"#contact",className:"hidden md:block px-5 py-2.5 text-white rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform",style:{backgroundColor:K.gold},children:"CONTATO"}),T.jsx("button",{className:"xl:hidden p-2",style:{color:K.primary},onClick:()=>r(!s),children:s?T.jsx(t0,{size:24}):T.jsx(cA,{size:24})})]}),T.jsx(Ed,{children:s&&T.jsx(Pi.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 xl:hidden",children:c.map(f=>T.jsx("a",{href:f.href,onClick:()=>r(!1),className:"text-lg font-serif border-b pb-2 font-bold",style:{color:K.primary},children:f.name},f.name))})})]})},yC=()=>T.jsxs("section",{id:"home",className:"relative min-h-[60vh] flex items-center justify-center pt-20",children:[T.jsxs("div",{className:"absolute inset-0 z-0",children:[T.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:"url('/fundo-igreja.jpg')"}}),T.jsx("div",{className:"absolute inset-0 bg-white/40"}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"})]}),T.jsxs("div",{className:"relative z-10 text-center px-6",children:[T.jsx(Pi.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-[100px] md:text-[140px] font-serif font-bold mb-0 leading-none",style:{color:K.primary},children:"IPVP"}),T.jsx("p",{className:"text-lg md:text-2xl font-bold uppercase tracking-[0.3em]",style:{color:K.primary},children:"Várzea do Poço-BA"})]})]}),bC=()=>{const[n,i]=P.useState(""),[s,r]=P.useState(null),c=Array.isArray(dv)?dv:[],f=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),d=n.length>2?c.filter(p=>`${p.title} ${p.lyrics}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(f)):[];return T.jsx("section",{id:"lyrics-search",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:T.jsxs("div",{className:"max-w-4xl mx-auto",children:[T.jsxs("div",{className:"text-center mb-10",children:[T.jsx(mA,{size:48,style:{color:K.gold},className:"mx-auto mb-4"}),T.jsx("h2",{className:"text-4xl font-serif font-bold",style:{color:K.primary},children:"Louvores IPVP"}),T.jsx("p",{className:"text-slate-600 text-lg mt-2 font-medium",children:"Busque por título ou trecho da música."})]}),s?T.jsxs(Pi.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white rounded-[2rem] p-6 md:p-12 shadow-2xl border-t-8",style:{borderColor:K.gold},children:[T.jsxs("div",{className:"flex justify-between items-start mb-10 border-b-2 border-slate-100 pb-6",children:[T.jsx("h3",{className:"text-3xl md:text-5xl font-serif font-bold leading-tight",style:{color:K.primary},children:s.title}),T.jsx("button",{onClick:()=>{r(null),i("")},className:"p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 transition-colors ml-4 shrink-0",children:T.jsx(t0,{size:28})})]}),T.jsx("pre",{className:"whitespace-pre-wrap font-sans text-2xl md:text-4xl leading-[1.8] text-slate-900 font-semibold tracking-wide",children:s.lyrics}),T.jsx("div",{className:"mt-12 text-center",children:T.jsx("button",{onClick:()=>{r(null),i("")},className:"px-8 py-4 rounded-full bg-slate-100 text-slate-600 font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all shadow-sm",children:"Voltar para busca"})})]}):T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"relative mb-8",children:[T.jsx(Md,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-400",size:24}),T.jsx("input",{type:"text",placeholder:"Ex: 'Que o Senhor te abençoe'...",value:n,onChange:p=>i(p.target.value),className:"w-full pl-14 pr-6 py-5 rounded-2xl border-2 outline-none font-bold text-xl text-slate-800 shadow-sm",style:{borderColor:n?K.gold:"#e2e8f0"}})]}),d.length>0&&T.jsx("div",{className:"bg-white rounded-3xl shadow-xl border-2 border-slate-100 overflow-hidden mb-8",children:d.map((p,h)=>T.jsxs("button",{onClick:()=>r(p),className:"w-full text-left px-8 py-5 hover:bg-slate-50 border-b-2 border-slate-50 last:border-0 font-extrabold text-xl text-slate-800 transition-colors flex items-center justify-between",children:[p.title,T.jsx(eA,{size:20,className:"text-slate-400"})]},h))}),n.length>2&&d.length===0&&T.jsx("p",{className:"text-center text-slate-400 italic",children:"Nenhum louvor encontrado com esse trecho."})]})]})})},SC=()=>{const[n,i]=P.useState({book:"João",cap:"3",ver:"16"}),s=r=>{r.preventDefault();const c=`https://www.bibliaonline.com.br/nvi/${n.book.toLowerCase()}/${n.cap}/${n.ver}`;window.open(c,"_blank")};return T.jsx("section",{id:"bible-quick",className:"py-12 px-6 bg-white",children:T.jsxs("div",{className:"max-w-4xl mx-auto bg-slate-50 rounded-[2rem] p-8 shadow-xl border-t-4",style:{borderColor:K.gold},children:[T.jsxs("div",{className:"flex items-center gap-3 mb-6 justify-center md:justify-start",children:[T.jsx(K2,{className:"text-amber-600",size:32}),T.jsx("h2",{className:"text-2xl font-serif font-bold",style:{color:K.primary},children:"Acesso Rápido às Escrituras"})]}),T.jsxs("form",{onSubmit:s,className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[T.jsxs("div",{className:"md:col-span-2",children:[T.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Livro"}),T.jsx("select",{value:n.book,onChange:r=>i({...n,book:r.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none",children:pC.map(r=>T.jsx("option",{value:r,children:r},r))})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Capítulo"}),T.jsx("input",{type:"number",value:n.cap,onChange:r=>i({...n,cap:r.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none"})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Versículo"}),T.jsx("input",{type:"number",value:n.ver,onChange:r=>i({...n,ver:r.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none"})]}),T.jsxs("button",{type:"submit",className:"md:col-span-4 py-4 rounded-xl text-white font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform",style:{backgroundColor:K.primary},children:[T.jsx(Md,{size:20})," LER NA BÍBLIA ONLINE"]})]})]})})},TC=()=>{const[n,i]=P.useState(new Date().getMonth()),s=P.useMemo(()=>cv.find(r=>r.month===n),[n]);return T.jsx("section",{id:"agenda",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:T.jsxs("div",{className:"max-w-5xl mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-slate-200",children:[T.jsx("h2",{className:"text-3xl font-serif text-center mb-8 font-bold",style:{color:K.primary},children:"Calendário Oficial 2026"}),T.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-10",children:cv.map(r=>T.jsx("button",{onClick:()=>i(r.month),className:zr("px-5 py-2.5 rounded-full text-xs font-bold border-2 transition-all",n===r.month?"text-white shadow-md":"bg-white text-slate-800 border-slate-200"),style:n===r.month?{backgroundColor:K.primary,borderColor:K.primary}:{},children:r.name},r.month))}),T.jsx(Ed,{mode:"wait",children:s&&T.jsxs(Pi.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center",children:[T.jsxs("div",{className:"mb-8 border-b-2 border-slate-200 pb-6",children:[T.jsx("p",{className:"font-extrabold text-base uppercase mb-2",style:{color:K.gold},children:s.theme}),T.jsxs("p",{className:"italic text-slate-800 font-serif font-bold text-lg max-w-2xl mx-auto",children:['"',s.verse,'"']})]}),T.jsx("div",{className:"grid md:grid-cols-2 gap-4 text-left",children:s.events.map((r,c)=>T.jsxs("div",{className:"flex items-start gap-3 p-5 bg-slate-50 rounded-xl border-l-4 shadow-sm",style:{borderColor:K.gold},children:[T.jsx(Iy,{size:20,style:{color:K.primary},className:"shrink-0 mt-0.5"}),T.jsx("p",{className:"text-slate-900 font-bold",children:r})]},c))})]},n)})]})})},xC=()=>{const n=hC.flatMap(i=>i.announcements);return T.jsx("section",{id:"avisos",className:"py-16 px-6 bg-white",children:T.jsxs("div",{className:"max-w-6xl mx-auto",children:[T.jsx("div",{className:"text-center mb-12",children:T.jsx("h2",{className:"text-4xl font-serif font-bold",style:{color:K.primary},children:"Avisos da Igreja"})}),T.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:n.map((i,s)=>T.jsxs("div",{className:"bg-slate-50 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-100 flex flex-col",children:[i.image&&T.jsx("div",{className:"w-full bg-white flex justify-center items-center",children:T.jsx("img",{src:i.image,alt:"Aviso",className:"w-full h-auto object-contain max-h-[500px]"})}),T.jsxs("div",{className:"p-8 flex items-start gap-4",children:[T.jsx(SA,{size:28,style:{color:K.gold},className:"shrink-0 mt-1"}),T.jsx("p",{className:"text-xl font-serif italic font-extrabold text-slate-900",children:i.text})]})]},s))})]})})},EC=()=>T.jsx("section",{id:"leadership",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:T.jsxs("div",{className:"max-w-7xl mx-auto",children:[T.jsx("h2",{className:"text-4xl font-serif text-center mb-12 font-bold",style:{color:K.primary},children:"Nossa Liderança"}),T.jsxs("div",{className:"mb-16",children:[T.jsx("h3",{className:"text-2xl font-bold uppercase tracking-widest text-center mb-8",style:{color:K.gold},children:"Conselho"}),T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[T.jsxs("div",{className:"bg-white rounded-3xl p-8 text-center border-2 border-slate-100 shadow-xl",children:[T.jsx("div",{className:"aspect-square w-48 mx-auto rounded-full overflow-hidden mb-6 border-4",style:{borderColor:K.gold},children:T.jsx("img",{src:"/foto-pastor.jpg",className:"w-full h-full object-cover",onError:n=>n.currentTarget.src="https://via.placeholder.com/200?text=Pastor"})}),T.jsx("h4",{className:"text-2xl font-bold font-serif mb-1",style:{color:K.primary},children:zi.pastor.name}),T.jsx("p",{className:"text-sm uppercase text-slate-500 mb-6 font-extrabold tracking-widest",children:"Pastor Titular"}),T.jsxs("a",{href:`https://wa.me/55${zi.pastor.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm font-bold py-3 px-8 rounded-full text-white shadow-md hover:scale-105 transition-transform",style:{backgroundColor:K.gold},children:[T.jsx(Yc,{size:16})," WhatsApp"]})]}),zi.elders.map((n,i)=>T.jsxs("div",{className:"bg-white rounded-3xl p-8 text-center border-2 border-slate-100 shadow-xl",children:[T.jsx("div",{className:"aspect-square w-48 mx-auto rounded-full overflow-hidden mb-6 border-4",style:{borderColor:K.primary},children:T.jsx("img",{src:n.name.includes("Adevaldo")?"/foto-adevaldo.jpg":"/foto-elique.jpg",className:"w-full h-full object-cover",onError:s=>s.currentTarget.src="https://via.placeholder.com/200?text=Presbítero"})}),T.jsx("h4",{className:"text-2xl font-bold font-serif mb-1",style:{color:K.primary},children:n.name}),T.jsx("p",{className:"text-sm uppercase text-slate-500 mb-6 font-extrabold tracking-widest",children:"Presbítero"}),T.jsxs("a",{href:`https://wa.me/55${n.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm font-bold py-3 px-8 rounded-full text-white shadow-md hover:scale-105 transition-transform",style:{backgroundColor:K.primary},children:[T.jsx(Yc,{size:16})," WhatsApp"]})]},i))]})]}),T.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-serif mb-6 border-b-2 pb-2 font-bold",style:{color:K.primary,borderColor:K.gold},children:"Junta Diaconal"}),T.jsx("div",{className:"space-y-3",children:zi.deacons.map((n,i)=>T.jsx("div",{className:"p-4 bg-white rounded-xl font-bold text-lg border-l-8 shadow-sm text-slate-900",style:{borderColor:K.gold},children:n.name},i))})]}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-serif mb-6 border-b-2 pb-2 font-bold",style:{color:K.primary,borderColor:K.gold},children:"Sociedades Internas"}),T.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:zi.societies.map((n,i)=>T.jsx("div",{className:"p-4 rounded-xl text-white text-sm font-bold text-center shadow-md",style:{backgroundColor:K.primary},children:n.name},i))})]})]})]})}),AC=()=>T.jsx("section",{id:"resources",className:"py-16 px-6 bg-white",children:T.jsxs("div",{className:"max-w-7xl mx-auto",children:[T.jsxs("div",{className:"text-center mb-10",children:[T.jsx("h2",{className:"text-4xl font-serif mb-4 font-bold",style:{color:K.primary},children:"Crescimento Espiritual e Documentos"}),T.jsxs("div",{className:"flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-12 mt-8",children:[T.jsxs("a",{href:"/estatuto_ipvp_2026.pdf",download:"estatuto_ipvp_2026.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#334155"},children:[T.jsx(Mi,{size:16})," Estatuto IPVP 2026"]}),T.jsxs("a",{href:"/guia_trabalho_saf.pdf",download:!0,className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#be123c"},children:[T.jsx(Mi,{size:16})," Guia de Trabalho SAF"]}),T.jsxs("a",{href:"/guia_trabalho_uph.pdf",download:!0,className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#1d4ed8"},children:[T.jsx(Mi,{size:16})," Guia de Trabalho UPH"]}),T.jsxs("a",{href:"/manual_unificado.pdf",download:"manual_unificado.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:K.gold},children:[T.jsx(Mi,{size:16})," Manual Unificado"]}),T.jsxs("a",{href:"/manual_presbiteriano_2025.pdf",download:"manual_presbiteriano_2025.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:K.primary},children:[T.jsx(Mi,{size:16})," Manual da IPB"]})]})]}),T.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[T.jsxs("a",{href:"https://www.bible.com/pt/reading-plans",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[T.jsx(Iy,{size:40,style:{color:K.gold},className:"mb-4"}),T.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Planos de Leitura"}),T.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Leitura bíblica diária organizada."})]}),T.jsxs("a",{href:"https://ipcuiaba.com.br/noticias/118538/hinario-novo-cantico",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[T.jsx(hA,{size:40,style:{color:K.gold},className:"mb-4"}),T.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Novo Cântico"}),T.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Letras e partituras do hinário oficial."})]}),T.jsxs("a",{href:"https://drive.google.com/drive/folders/1NlippJmh36vxHQRFnPI8ivxSUfCHPP5D",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[T.jsx(e0,{size:40,style:{color:K.gold},className:"mb-4"}),T.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Estudos Bíblicos"}),T.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Material ministrado em nossa igreja."})]})]})]})}),CC=()=>{const[n,i]=P.useState(""),[s,r]=P.useState(""),c=new Date().getMonth(),f=P.useMemo(()=>uv.filter(h=>h.name.toLowerCase().includes(n.toLowerCase())&&(s===""||h.month===Number(s))).sort((h,g)=>h.month-g.month||h.day-g.day),[n,s]),d=P.useMemo(()=>uv.filter(h=>h.month===c).sort((h,g)=>h.day-g.day),[c]);let p="";return c===3?p="/niverabril2026.jpg":c===4?p="/nivermaio2026.jpg":c===5&&(p="/niverjunho2026.jpg"),T.jsx("section",{id:"birthdays",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:T.jsxs("div",{className:"max-w-5xl mx-auto",children:[T.jsxs("h2",{className:"text-4xl font-serif text-center mb-10 font-bold",style:{color:K.primary},children:["Aniversariantes de ",Sc(c)]}),T.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:d.map((h,g)=>T.jsxs("div",{className:"px-6 py-3 bg-white rounded-xl border-2 shadow-md flex items-center gap-3",style:{borderColor:K.gold},children:[T.jsx("span",{className:"font-black text-2xl",style:{color:K.primary},children:h.day}),T.jsx("span",{className:"font-extrabold text-slate-900 text-lg",children:h.name})]},g))}),T.jsxs("div",{className:"bg-white p-6 rounded-3xl border-2 shadow-md flex flex-col md:flex-row gap-4 mb-10",style:{borderColor:K.primary+"30"},children:[T.jsxs("div",{className:"flex-1 relative",children:[T.jsx(Md,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-500",size:24}),T.jsx("input",{type:"text",placeholder:"Buscar irmão pelo nome...",value:n,onChange:h=>i(h.target.value),className:"w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-slate-200 outline-none text-slate-900 font-bold text-lg focus:border-amber-500"})]}),T.jsxs("select",{value:s,onChange:h=>r(h.target.value),className:"px-6 py-4 rounded-2xl border-2 border-slate-200 outline-none bg-white text-slate-900 font-bold text-lg",children:[T.jsx("option",{value:"",children:"Todos os Meses"}),Array.from({length:12}).map((h,g)=>T.jsx("option",{value:g,children:Sc(g)},g))]})]}),T.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",children:f.slice(0,9).map((h,g)=>T.jsxs("div",{className:"bg-white p-5 rounded-2xl border-l-8 shadow-md flex items-center justify-between",style:{borderColor:K.primary},children:[T.jsxs("div",{children:[T.jsx("h4",{className:"font-extrabold text-lg text-slate-900",children:h.name}),T.jsxs("p",{className:"text-xs font-black uppercase mt-1 tracking-widest",style:{color:K.gold},children:[h.day," de ",Sc(h.month)]})]}),T.jsx(W2,{size:24,style:{color:K.primary},className:"opacity-80"})]},g))}),p&&T.jsx("div",{className:"bg-white p-4 rounded-[2rem] shadow-2xl border-4",style:{borderColor:K.gold},children:T.jsx("img",{src:p,className:"w-full h-auto rounded-2xl",onError:h=>h.currentTarget.style.display="none"})})]})})},MC=()=>T.jsx("section",{className:"py-16 px-6 bg-white",children:T.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[T.jsx("h2",{className:"text-4xl font-serif mb-8 font-bold",style:{color:K.primary},children:"Curso: Preparando-se para servir"}),T.jsx("div",{className:"relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 mb-8",children:T.jsx("iframe",{className:"w-full h-full",src:"https://www.youtube.com/embed/yAu3BtPWi4s",title:"Curso",frameBorder:"0",allowFullScreen:!0})})]})}),DC=()=>T.jsx("section",{id:"giving",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:T.jsxs("div",{className:"max-w-4xl mx-auto text-center rounded-[3rem] p-12 text-white shadow-2xl border-4 border-white",style:{backgroundColor:K.primary},children:[T.jsx(nA,{size:48,className:"mx-auto mb-6",style:{color:K.gold}}),T.jsx("h2",{className:"text-4xl font-serif mb-6 font-bold",children:"Dízimos e Ofertas"}),T.jsx("div",{className:"bg-white/10 p-6 rounded-2xl border border-white/20 inline-block font-mono text-2xl font-bold tracking-widest mb-6",children:"PIX: 03.507.028/0001-08"}),T.jsx("p",{className:"text-base font-extrabold uppercase tracking-widest",style:{color:K.gold},children:"Banco SICOOB | Ag: 3289 | CC: 118524"})]})}),zC=()=>{const[n,i]=P.useState({name:"",contact:"",message:""}),s=r=>{r.preventDefault();const c=`*Site*%0ANome: ${n.name}%0AContato: ${n.contact}%0A*Msg:* ${n.message}`;window.open(`https://wa.me/5574999829797?text=${c}`,"_blank")};return T.jsx("section",{id:"contact",className:"py-16 px-6 bg-white",children:T.jsxs("div",{className:"max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center",children:[T.jsxs("div",{children:[T.jsx("h2",{className:"text-4xl font-serif mb-8 font-bold",style:{color:K.primary},children:"Fale Conosco"}),T.jsxs("form",{onSubmit:s,className:"space-y-5 bg-slate-50 p-10 rounded-[2rem] shadow-xl border border-slate-200",children:[T.jsx("input",{type:"text",required:!0,placeholder:"Seu Nome",className:"w-full p-5 rounded-xl border-2 outline-none font-bold text-slate-800 focus:border-amber-500",value:n.name,onChange:r=>i({...n,name:r.target.value})}),T.jsx("input",{type:"text",required:!0,placeholder:"Seu Telefone",className:"w-full p-5 rounded-xl border-2 outline-none font-bold text-slate-800 focus:border-amber-500",value:n.contact,onChange:r=>i({...n,contact:r.target.value})}),T.jsx("textarea",{required:!0,rows:4,placeholder:"Sua Mensagem...",className:"w-full p-5 rounded-xl border-2 resize-none outline-none font-bold text-slate-800 focus:border-amber-500",value:n.message,onChange:r=>i({...n,message:r.target.value})}),T.jsx("button",{type:"submit",className:"w-full py-5 text-white rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-transform",style:{backgroundColor:K.primary},children:"Enviar via WhatsApp"})]})]}),T.jsxs("div",{className:"rounded-[2rem] h-[500px] text-white p-10 flex flex-col items-center justify-center shadow-2xl border-4 border-slate-100",style:{backgroundColor:K.primary},children:[T.jsx(lA,{size:56,className:"mb-6",style:{color:K.gold}}),T.jsx("h3",{className:"text-4xl font-serif mb-4 font-bold",children:"Localização"}),T.jsx("p",{className:"text-white/80 mb-10 max-w-xs text-center text-lg font-medium",children:"R. Durval Gama, 17, Várzea do Poço - BA."}),T.jsx("a",{href:"https://www.google.com/maps/search/?api=1&query=R.+Durval+Gama,+17,+Várzea+do+Poço+-+BA,+44715-000",target:"_blank",rel:"noreferrer",className:"px-10 py-4 bg-white rounded-full font-bold shadow-xl text-lg hover:scale-105 transition-transform",style:{color:K.primary},children:"Ver no Mapa"})]})]})})},NC=()=>{const[n,i]=P.useState(!1),s=[{icon:T.jsx(EA,{size:24}),href:"https://www.youtube.com/@IPBVARZEADOPOCO",color:"bg-red-600"},{icon:T.jsx(iA,{size:24}),href:"https://www.instagram.com/ipvarzeapoco",color:"bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"},{icon:T.jsx(Yc,{size:24}),href:"https://wa.me/5574999829797",color:"bg-green-500"},{icon:T.jsx(e0,{size:24}),href:"https://script.google.com/macros/s/AKfycbxltiBSW-TkOr3pmPwANW_g4Futtu_MqIX2nwk3lYr6-Ak2Ic5QmGnPTR5AV3F74aR7/exec",color:"bg-slate-700"}];return T.jsxs("div",{className:"fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4",children:[T.jsx(Ed,{children:n&&s.map((r,c)=>T.jsx(Pi.a,{href:r.href,target:"_blank",rel:"noreferrer",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:zr("w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform",r.color),children:r.icon},c))}),T.jsx("button",{onClick:()=>i(!n),className:"w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:scale-105",style:{backgroundColor:n?"#333":K.gold},children:T.jsx(vA,{size:36,className:zr(n&&"rotate-45")})})]})};function qC(){return T.jsxs("div",{className:"min-h-screen bg-white font-sans text-slate-800",children:[T.jsx(vC,{}),T.jsx(yC,{}),T.jsx(SC,{}),T.jsx(bC,{}),T.jsx(TC,{}),T.jsx(xC,{}),T.jsx(EC,{}),T.jsx(AC,{}),T.jsx(CC,{}),T.jsx(MC,{}),T.jsx(DC,{}),T.jsx(zC,{}),T.jsxs("footer",{className:"py-12 text-center bg-slate-50 border-t-2 border-slate-200",children:[T.jsx(gC,{size:40,className:"mx-auto mb-4",style:{color:K.gold}}),T.jsx("p",{className:"font-serif font-bold text-2xl mb-1",style:{color:K.primary},children:"IP Várzea do Poço"}),T.jsx("p",{className:"text-sm font-medium text-slate-500",children:"© 2026 - Fidelidade à Palavra de Deus."})]}),T.jsx(NC,{})]})}KS.createRoot(document.getElementById("root")).render(T.jsx(P.StrictMode,{children:T.jsx(qC,{})}));
