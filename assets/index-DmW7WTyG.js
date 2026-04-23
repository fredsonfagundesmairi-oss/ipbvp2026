(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();var Fu={exports:{}},Es={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function HS(){if(Np)return Es;Np=1;var o=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function i(r,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var p in c)p!=="key"&&(f[p]=c[p])}else f=c;return c=f.ref,{$$typeof:o,type:r,key:d,ref:c!==void 0?c:null,props:f}}return Es.Fragment=s,Es.jsx=i,Es.jsxs=i,Es}var Op;function PS(){return Op||(Op=1,Fu.exports=HS()),Fu.exports}var T=PS(),Wu={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function QS(){if(jp)return ce;jp=1;var o=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function z(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,U={};function H(A,_,X){this.props=A,this.context=_,this.refs=U,this.updater=X||O}H.prototype.isReactComponent={},H.prototype.setState=function(A,_){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,_,"setState")},H.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function J(){}J.prototype=H.prototype;function Q(A,_,X){this.props=A,this.context=_,this.refs=U,this.updater=X||O}var Z=Q.prototype=new J;Z.constructor=Q,B(Z,H.prototype),Z.isPureReactComponent=!0;var Y=Array.isArray;function se(){}var W={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function ie(A,_,X){var F=X.ref;return{$$typeof:o,type:A,key:_,ref:F!==void 0?F:null,props:X}}function De(A,_){return ie(A.type,_,A.props)}function _e(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function Re(A){var _={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(X){return _[X]})}var pt=/\/+/g;function ut(A,_){return typeof A=="object"&&A!==null&&A.key!=null?Re(""+A.key):_.toString(36)}function Qe(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(se,se):(A.status="pending",A.then(function(_){A.status==="pending"&&(A.status="fulfilled",A.value=_)},function(_){A.status==="pending"&&(A.status="rejected",A.reason=_)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function j(A,_,X,F,ne){var le=typeof A;(le==="undefined"||le==="boolean")&&(A=null);var Se=!1;if(A===null)Se=!0;else switch(le){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(A.$$typeof){case o:case s:Se=!0;break;case y:return Se=A._init,j(Se(A._payload),_,X,F,ne)}}if(Se)return ne=ne(A),Se=F===""?"."+ut(A,0):F,Y(ne)?(X="",Se!=null&&(X=Se.replace(pt,"$&/")+"/"),j(ne,_,X,"",function(Ca){return Ca})):ne!=null&&(_e(ne)&&(ne=De(ne,X+(ne.key==null||A&&A.key===ne.key?"":(""+ne.key).replace(pt,"$&/")+"/")+Se)),_.push(ne)),1;Se=0;var Ie=F===""?".":F+":";if(Y(A))for(var he=0;he<A.length;he++)F=A[he],le=Ie+ut(F,he),Se+=j(F,_,X,le,ne);else if(he=z(A),typeof he=="function")for(A=he.call(A),he=0;!(F=A.next()).done;)F=F.value,le=Ie+ut(F,he++),Se+=j(F,_,X,le,ne);else if(le==="object"){if(typeof A.then=="function")return j(Qe(A),_,X,F,ne);throw _=String(A),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return Se}function P(A,_,X){if(A==null)return A;var F=[],ne=0;return j(A,F,"","",function(le){return _.call(X,le,ne++)}),F}function $(A){if(A._status===-1){var _=A._result;_=_(),_.then(function(X){(A._status===0||A._status===-1)&&(A._status=1,A._result=X)},function(X){(A._status===0||A._status===-1)&&(A._status=2,A._result=X)}),A._status===-1&&(A._status=0,A._result=_)}if(A._status===1)return A._result.default;throw A._result}var fe=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},k={map:P,forEach:function(A,_,X){P(A,function(){_.apply(this,arguments)},X)},count:function(A){var _=0;return P(A,function(){_++}),_},toArray:function(A){return P(A,function(_){return _})||[]},only:function(A){if(!_e(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ce.Activity=b,ce.Children=k,ce.Component=H,ce.Fragment=i,ce.Profiler=c,ce.PureComponent=Q,ce.StrictMode=r,ce.Suspense=h,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,ce.__COMPILER_RUNTIME={__proto__:null,c:function(A){return W.H.useMemoCache(A)}},ce.cache=function(A){return function(){return A.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(A,_,X){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var F=B({},A.props),ne=A.key;if(_!=null)for(le in _.key!==void 0&&(ne=""+_.key),_)!L.call(_,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&_.ref===void 0||(F[le]=_[le]);var le=arguments.length-2;if(le===1)F.children=X;else if(1<le){for(var Se=Array(le),Ie=0;Ie<le;Ie++)Se[Ie]=arguments[Ie+2];F.children=Se}return ie(A.type,ne,F)},ce.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},ce.createElement=function(A,_,X){var F,ne={},le=null;if(_!=null)for(F in _.key!==void 0&&(le=""+_.key),_)L.call(_,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ne[F]=_[F]);var Se=arguments.length-2;if(Se===1)ne.children=X;else if(1<Se){for(var Ie=Array(Se),he=0;he<Se;he++)Ie[he]=arguments[he+2];ne.children=Ie}if(A&&A.defaultProps)for(F in Se=A.defaultProps,Se)ne[F]===void 0&&(ne[F]=Se[F]);return ie(A,le,ne)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(A){return{$$typeof:p,render:A}},ce.isValidElement=_e,ce.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:$}},ce.memo=function(A,_){return{$$typeof:g,type:A,compare:_===void 0?null:_}},ce.startTransition=function(A){var _=W.T,X={};W.T=X;try{var F=A(),ne=W.S;ne!==null&&ne(X,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(se,fe)}catch(le){fe(le)}finally{_!==null&&X.types!==null&&(_.types=X.types),W.T=_}},ce.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},ce.use=function(A){return W.H.use(A)},ce.useActionState=function(A,_,X){return W.H.useActionState(A,_,X)},ce.useCallback=function(A,_){return W.H.useCallback(A,_)},ce.useContext=function(A){return W.H.useContext(A)},ce.useDebugValue=function(){},ce.useDeferredValue=function(A,_){return W.H.useDeferredValue(A,_)},ce.useEffect=function(A,_){return W.H.useEffect(A,_)},ce.useEffectEvent=function(A){return W.H.useEffectEvent(A)},ce.useId=function(){return W.H.useId()},ce.useImperativeHandle=function(A,_,X){return W.H.useImperativeHandle(A,_,X)},ce.useInsertionEffect=function(A,_){return W.H.useInsertionEffect(A,_)},ce.useLayoutEffect=function(A,_){return W.H.useLayoutEffect(A,_)},ce.useMemo=function(A,_){return W.H.useMemo(A,_)},ce.useOptimistic=function(A,_){return W.H.useOptimistic(A,_)},ce.useReducer=function(A,_,X){return W.H.useReducer(A,_,X)},ce.useRef=function(A){return W.H.useRef(A)},ce.useState=function(A){return W.H.useState(A)},ce.useSyncExternalStore=function(A,_,X){return W.H.useSyncExternalStore(A,_,X)},ce.useTransition=function(){return W.H.useTransition()},ce.version="19.2.4",ce}var Rp;function Xc(){return Rp||(Rp=1,Wu.exports=QS()),Wu.exports}var G=Xc(),$u={exports:{}},As={},Iu={exports:{}},ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function GS(){return wp||(wp=1,(function(o){function s(j,P){var $=j.length;j.push(P);e:for(;0<$;){var fe=$-1>>>1,k=j[fe];if(0<c(k,P))j[fe]=P,j[$]=k,$=fe;else break e}}function i(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var P=j[0],$=j.pop();if($!==P){j[0]=$;e:for(var fe=0,k=j.length,A=k>>>1;fe<A;){var _=2*(fe+1)-1,X=j[_],F=_+1,ne=j[F];if(0>c(X,$))F<k&&0>c(ne,X)?(j[fe]=ne,j[F]=$,fe=F):(j[fe]=X,j[_]=$,fe=_);else if(F<k&&0>c(ne,$))j[fe]=ne,j[F]=$,fe=F;else break e}}return P}function c(j,P){var $=j.sortIndex-P.sortIndex;return $!==0?$:j.id-P.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var h=[],g=[],y=1,b=null,S=3,z=!1,O=!1,B=!1,U=!1,H=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function Z(j){for(var P=i(g);P!==null;){if(P.callback===null)r(g);else if(P.startTime<=j)r(g),P.sortIndex=P.expirationTime,s(h,P);else break;P=i(g)}}function Y(j){if(B=!1,Z(j),!O)if(i(h)!==null)O=!0,se||(se=!0,Re());else{var P=i(g);P!==null&&Qe(Y,P.startTime-j)}}var se=!1,W=-1,L=5,ie=-1;function De(){return U?!0:!(o.unstable_now()-ie<L)}function _e(){if(U=!1,se){var j=o.unstable_now();ie=j;var P=!0;try{e:{O=!1,B&&(B=!1,J(W),W=-1),z=!0;var $=S;try{t:{for(Z(j),b=i(h);b!==null&&!(b.expirationTime>j&&De());){var fe=b.callback;if(typeof fe=="function"){b.callback=null,S=b.priorityLevel;var k=fe(b.expirationTime<=j);if(j=o.unstable_now(),typeof k=="function"){b.callback=k,Z(j),P=!0;break t}b===i(h)&&r(h),Z(j)}else r(h);b=i(h)}if(b!==null)P=!0;else{var A=i(g);A!==null&&Qe(Y,A.startTime-j),P=!1}}break e}finally{b=null,S=$,z=!1}P=void 0}}finally{P?Re():se=!1}}}var Re;if(typeof Q=="function")Re=function(){Q(_e)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,ut=pt.port2;pt.port1.onmessage=_e,Re=function(){ut.postMessage(null)}}else Re=function(){H(_e,0)};function Qe(j,P){W=H(function(){j(o.unstable_now())},P)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(j){switch(S){case 1:case 2:case 3:var P=3;break;default:P=S}var $=S;S=P;try{return j()}finally{S=$}},o.unstable_requestPaint=function(){U=!0},o.unstable_runWithPriority=function(j,P){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var $=S;S=j;try{return P()}finally{S=$}},o.unstable_scheduleCallback=function(j,P,$){var fe=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?fe+$:fe):$=fe,j){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=$+k,j={id:y++,callback:P,priorityLevel:j,startTime:$,expirationTime:k,sortIndex:-1},$>fe?(j.sortIndex=$,s(g,j),i(h)===null&&j===i(g)&&(B?(J(W),W=-1):B=!0,Qe(Y,$-fe))):(j.sortIndex=k,s(h,j),O||z||(O=!0,se||(se=!0,Re()))),j},o.unstable_shouldYield=De,o.unstable_wrapCallback=function(j){var P=S;return function(){var $=S;S=P;try{return j.apply(this,arguments)}finally{S=$}}}})(ec)),ec}var Vp;function kS(){return Vp||(Vp=1,Iu.exports=GS()),Iu.exports}var tc={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function YS(){if(_p)return ct;_p=1;var o=Xc();function s(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(s(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(h,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:h,containerInfo:g,implementation:y}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ct.createPortal=function(h,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return f(h,g,null,y)},ct.flushSync=function(h){var g=d.T,y=r.p;try{if(d.T=null,r.p=2,h)return h()}finally{d.T=g,r.p=y,r.d.f()}},ct.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(h,g))},ct.prefetchDNS=function(h){typeof h=="string"&&r.d.D(h)},ct.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var y=g.as,b=p(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,z=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:z}):y==="script"&&r.d.X(h,{crossOrigin:b,integrity:S,fetchPriority:z,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ct.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=p(g.as,g.crossOrigin);r.d.M(h,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(h)},ct.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=p(y,g.crossOrigin);r.d.L(h,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ct.preloadModule=function(h,g){if(typeof h=="string")if(g){var y=p(g.as,g.crossOrigin);r.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(h)},ct.requestFormReset=function(h){r.d.r(h)},ct.unstable_batchedUpdates=function(h,g){return h(g)},ct.useFormState=function(h,g,y){return d.H.useFormState(h,g,y)},ct.useFormStatus=function(){return d.H.useHostTransitionStatus()},ct.version="19.2.4",ct}var Lp;function JS(){if(Lp)return tc.exports;Lp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),tc.exports=YS(),tc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function XS(){if(Bp)return As;Bp=1;var o=kS(),s=Xc(),i=JS();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(f(e)!==e)throw Error(r(188))}function g(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return h(l),e;if(u===n)return h(l),t;u=u.sibling}throw Error(r(188))}if(a.return!==n.return)a=l,n=u;else{for(var m=!1,v=l.child;v;){if(v===a){m=!0,a=l,n=u;break}if(v===n){m=!0,n=l,a=u;break}v=v.sibling}if(!m){for(v=u.child;v;){if(v===a){m=!0,a=u,n=l;break}if(v===n){m=!0,n=u,a=l;break}v=v.sibling}if(!m)throw Error(r(189))}}if(a.alternate!==n)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),De=Symbol.for("react.memo_cache_sentinel"),_e=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var pt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case H:return"Profiler";case U:return"StrictMode";case Y:return"Suspense";case se:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case Q:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:ut(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return ut(e(t))}catch{}}return null}var Qe=Array.isArray,j=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},fe=[],k=-1;function A(e){return{current:e}}function _(e){0>k||(e.current=fe[k],fe[k]=null,k--)}function X(e,t){k++,fe[k]=e.current,e.current=t}var F=A(null),ne=A(null),le=A(null),Se=A(null);function Ie(e,t){switch(X(le,t),X(ne,e),X(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ih(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ih(t),e=ep(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(F),X(F,e)}function he(){_(F),_(ne),_(le)}function Ca(e){e.memoizedState!==null&&X(Se,e);var t=F.current,a=ep(t,e.type);t!==a&&(X(ne,e),X(F,a))}function ia(e){ne.current===e&&(_(F),_(ne)),Se.current===e&&(_(Se),bs._currentValue=$)}var za,wo;function Rt(e){if(za===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);za=t&&t[1]||"",wo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+za+e+wo}var Rr=!1;function wr(e,t){if(!e||Rr)return"";Rr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(N){var q=N}Reflect.construct(e,[],V)}else{try{V.call()}catch(N){q=N}e.call(V.prototype)}}else{try{throw Error()}catch(N){q=N}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(N){if(N&&q&&typeof N.stack=="string")return[N.stack,q.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),m=u[0],v=u[1];if(m&&v){var x=m.split(`
`),C=v.split(`
`);for(l=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(n===x.length||l===C.length)for(n=x.length-1,l=C.length-1;1<=n&&0<=l&&x[n]!==C[l];)l--;for(;1<=n&&0<=l;n--,l--)if(x[n]!==C[l]){if(n!==1||l!==1)do if(n--,l--,0>l||x[n]!==C[l]){var R=`
`+x[n].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=n&&0<=l);break}}}finally{Rr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Rt(a):""}function v0(e,t){switch(e.tag){case 26:case 27:case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return e.child!==t&&t!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return wr(e.type,!1);case 11:return wr(e.type.render,!1);case 1:return wr(e.type,!0);case 31:return Rt("Activity");default:return""}}function qd(e){try{var t="",a=null;do t+=v0(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Vr=Object.prototype.hasOwnProperty,_r=o.unstable_scheduleCallback,Lr=o.unstable_cancelCallback,y0=o.unstable_shouldYield,b0=o.unstable_requestPaint,Et=o.unstable_now,S0=o.unstable_getCurrentPriorityLevel,Nd=o.unstable_ImmediatePriority,Od=o.unstable_UserBlockingPriority,ks=o.unstable_NormalPriority,T0=o.unstable_LowPriority,jd=o.unstable_IdlePriority,x0=o.log,E0=o.unstable_setDisableYieldValue,On=null,At=null;function qa(e){if(typeof x0=="function"&&E0(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(On,e)}catch{}}var Dt=Math.clz32?Math.clz32:M0,A0=Math.log,D0=Math.LN2;function M0(e){return e>>>=0,e===0?32:31-(A0(e)/D0|0)|0}var Ys=256,Js=262144,Xs=4194304;function lo(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zs(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=n&134217727;return v!==0?(n=v&~u,n!==0?l=lo(n):(m&=v,m!==0?l=lo(m):a||(a=v&~e,a!==0&&(l=lo(a))))):(v=n&~u,v!==0?l=lo(v):m!==0?l=lo(m):a||(a=n&~e,a!==0&&(l=lo(a)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:l}function jn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function C0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(){var e=Xs;return Xs<<=1,(Xs&62914560)===0&&(Xs=4194304),e}function Br(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Rn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function z0(e,t,a,n,l,u){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var v=e.entanglements,x=e.expirationTimes,C=e.hiddenUpdates;for(a=m&~a;0<a;){var R=31-Dt(a),V=1<<R;v[R]=0,x[R]=-1;var q=C[R];if(q!==null)for(C[R]=null,R=0;R<q.length;R++){var N=q[R];N!==null&&(N.lane&=-536870913)}a&=~V}n!==0&&wd(e,n,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function wd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Dt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Vd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Dt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function _d(e,t){var a=t&-t;return a=(a&42)!==0?1:Ur(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ur(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ld(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Ep(e.type))}function Bd(e,t){var a=P.p;try{return P.p=e,t()}finally{P.p=a}}var Na=Math.random().toString(36).slice(2),ot="__reactFiber$"+Na,gt="__reactProps$"+Na,Vo="__reactContainer$"+Na,Pr="__reactEvents$"+Na,q0="__reactListeners$"+Na,N0="__reactHandles$"+Na,Ud="__reactResources$"+Na,wn="__reactMarker$"+Na;function Qr(e){delete e[ot],delete e[gt],delete e[Pr],delete e[q0],delete e[N0]}function _o(e){var t=e[ot];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Vo]||a[ot]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=rp(e);e!==null;){if(a=e[ot])return a;e=rp(e)}return t}e=a,a=e.parentNode}return null}function Lo(e){if(e=e[ot]||e[Vo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Bo(e){var t=e[Ud];return t||(t=e[Ud]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[wn]=!0}var Hd=new Set,Pd={};function uo(e,t){Uo(e,t),Uo(e+"Capture",t)}function Uo(e,t){for(Pd[e]=t,e=0;e<t.length;e++)Hd.add(t[e])}var O0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qd={},Gd={};function j0(e){return Vr.call(Gd,e)?!0:Vr.call(Qd,e)?!1:O0.test(e)?Gd[e]=!0:(Qd[e]=!0,!1)}function Ks(e,t,a){if(j0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Fs(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ra(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R0(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){a=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){if(!e._valueTracker){var t=kd(e)?"checked":"value";e._valueTracker=R0(e,t,""+e[t])}}function Yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=kd(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var w0=/[\n"\\]/g;function Vt(e){return e.replace(w0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function kr(e,t,a,n,l,u,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Yr(e,m,wt(t)):a!=null?Yr(e,m,wt(a)):n!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+wt(v):e.removeAttribute("name")}function Jd(e,t,a,n,l,u,m,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Gr(e);return}a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,v||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=v?e.checked:!!n,e.defaultChecked=!!n,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Gr(e)}function Yr(e,t,a){t==="number"&&Ws(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ho(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Xd(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function Zd(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(r(92));if(Qe(n)){if(1<n.length)throw Error(r(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Gr(e)}function Po(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var V0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kd(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||V0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Fd(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Kd(e,l,n)}else for(var u in t)t.hasOwnProperty(u)&&Kd(e,u,t[u])}function Jr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),L0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $s(e){return L0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var Xr=null;function Zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qo=null,Go=null;function Wd(e){var t=Lo(e);if(t&&(e=t.stateNode)){var a=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(kr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[gt]||null;if(!l)throw Error(r(90));kr(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Yd(n)}break e;case"textarea":Xd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ho(e,!!a.multiple,t,!1)}}}var Kr=!1;function $d(e,t,a){if(Kr)return e(t,a);Kr=!0;try{var n=e(t);return n}finally{if(Kr=!1,(Qo!==null||Go!==null)&&(Ui(),Qo&&(t=Qo,e=Go,Go=Qo=null,Wd(t),e)))for(t=0;t<e.length;t++)Wd(e[t])}}function _n(e,t){var a=e.stateNode;if(a===null)return null;var n=a[gt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fr=!1;if(ua)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Fr=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Fr=!1}var Oa=null,Wr=null,Is=null;function Id(){if(Is)return Is;var e,t=Wr,a=t.length,n,l="value"in Oa?Oa.value:Oa.textContent,u=l.length;for(e=0;e<a&&t[e]===l[e];e++);var m=a-e;for(n=1;n<=m&&t[a-n]===l[u-n];n++);return Is=l.slice(e,1<n?1-n:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function em(){return!1}function vt(e){function t(a,n,l,u,m){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(a=e[v],this[v]=a?a(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ti:em,this.isPropagationStopped=em,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ai=vt(co),Bn=b({},co,{view:0,detail:0}),B0=vt(Bn),$r,Ir,Un,oi=b({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?($r=e.screenX-Un.screenX,Ir=e.screenY-Un.screenY):Ir=$r=0,Un=e),$r)},movementY:function(e){return"movementY"in e?e.movementY:Ir}}),tm=vt(oi),U0=b({},oi,{dataTransfer:0}),H0=vt(U0),P0=b({},Bn,{relatedTarget:0}),el=vt(P0),Q0=b({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=vt(Q0),k0=b({},co,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y0=vt(k0),J0=b({},co,{data:0}),am=vt(J0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K0[e])?!!t[e]:!1}function tl(){return F0}var W0=b({},Bn,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$0=vt(W0),I0=b({},oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=vt(I0),eb=b({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),tb=vt(eb),ab=b({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),ob=vt(ab),nb=b({},oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sb=vt(nb),ib=b({},co,{newState:0,oldState:0}),rb=vt(ib),lb=[9,13,27,32],al=ua&&"CompositionEvent"in window,Hn=null;ua&&"documentMode"in document&&(Hn=document.documentMode);var ub=ua&&"TextEvent"in window&&!Hn,nm=ua&&(!al||Hn&&8<Hn&&11>=Hn),sm=" ",im=!1;function rm(e,t){switch(e){case"keyup":return lb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ko=!1;function cb(e,t){switch(e){case"compositionend":return lm(t);case"keypress":return t.which!==32?null:(im=!0,sm);case"textInput":return e=t.data,e===sm&&im?null:e;default:return null}}function db(e,t){if(ko)return e==="compositionend"||!al&&rm(e,t)?(e=Id(),Is=Wr=Oa=null,ko=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nm&&t.locale!=="ko"?null:t.data;default:return null}}var mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mb[e.type]:t==="textarea"}function cm(e,t,a,n){Qo?Go?Go.push(n):Go=[n]:Qo=n,t=Ji(t,"onChange"),0<t.length&&(a=new ai("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Pn=null,Qn=null;function fb(e){Xh(e,0)}function ni(e){var t=Vn(e);if(Yd(t))return e}function dm(e,t){if(e==="change")return t}var mm=!1;if(ua){var ol;if(ua){var nl="oninput"in document;if(!nl){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),nl=typeof fm.oninput=="function"}ol=nl}else ol=!1;mm=ol&&(!document.documentMode||9<document.documentMode)}function hm(){Pn&&(Pn.detachEvent("onpropertychange",pm),Qn=Pn=null)}function pm(e){if(e.propertyName==="value"&&ni(Qn)){var t=[];cm(t,Qn,e,Zr(e)),$d(fb,t)}}function hb(e,t,a){e==="focusin"?(hm(),Pn=t,Qn=a,Pn.attachEvent("onpropertychange",pm)):e==="focusout"&&hm()}function pb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(Qn)}function gb(e,t){if(e==="click")return ni(t)}function vb(e,t){if(e==="input"||e==="change")return ni(t)}function yb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:yb;function Gn(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Vr.call(t,l)||!Mt(e[l],t[l]))return!1}return!0}function gm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vm(e,t){var a=gm(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gm(a)}}function ym(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ym(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ws(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ws(e.document)}return t}function sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var bb=ua&&"documentMode"in document&&11>=document.documentMode,Yo=null,il=null,kn=null,rl=!1;function Sm(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rl||Yo==null||Yo!==Ws(n)||(n=Yo,"selectionStart"in n&&sl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kn&&Gn(kn,n)||(kn=n,n=Ji(il,"onSelect"),0<n.length&&(t=new ai("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Yo)))}function mo(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Jo={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionrun:mo("Transition","TransitionRun"),transitionstart:mo("Transition","TransitionStart"),transitioncancel:mo("Transition","TransitionCancel"),transitionend:mo("Transition","TransitionEnd")},ll={},Tm={};ua&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete Jo.animationend.animation,delete Jo.animationiteration.animation,delete Jo.animationstart.animation),"TransitionEvent"in window||delete Jo.transitionend.transition);function fo(e){if(ll[e])return ll[e];if(!Jo[e])return e;var t=Jo[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Tm)return ll[e]=t[a];return e}var xm=fo("animationend"),Em=fo("animationiteration"),Am=fo("animationstart"),Sb=fo("transitionrun"),Tb=fo("transitionstart"),xb=fo("transitioncancel"),Dm=fo("transitionend"),Mm=new Map,ul="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ul.push("scrollEnd");function Jt(e,t){Mm.set(e,t),uo(t,[e])}var si=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],Xo=0,cl=0;function ii(){for(var e=Xo,t=cl=Xo=0;t<e;){var a=_t[t];_t[t++]=null;var n=_t[t];_t[t++]=null;var l=_t[t];_t[t++]=null;var u=_t[t];if(_t[t++]=null,n!==null&&l!==null){var m=n.pending;m===null?l.next=l:(l.next=m.next,m.next=l),n.pending=l}u!==0&&Cm(a,l,u)}}function ri(e,t,a,n){_t[Xo++]=e,_t[Xo++]=t,_t[Xo++]=a,_t[Xo++]=n,cl|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function dl(e,t,a,n){return ri(e,t,a,n),li(e)}function ho(e,t){return ri(e,null,null,t),li(e)}function Cm(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,n=u.alternate,n!==null&&(n.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-Dt(a),e=u.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),u):null}function li(e){if(50<ms)throw ms=0,Su=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zo={};function Eb(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,a,n){return new Eb(e,t,a,n)}function ml(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,t){var a=e.alternate;return a===null?(a=Ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zm(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ui(e,t,a,n,l,u){var m=0;if(n=e,typeof e=="function")ml(e)&&(m=1);else if(typeof e=="string")m=zS(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Ct(31,a,t,l),e.elementType=ie,e.lanes=u,e;case B:return po(a.children,l,u,t);case U:m=8,l|=24;break;case H:return e=Ct(12,a,t,l|2),e.elementType=H,e.lanes=u,e;case Y:return e=Ct(13,a,t,l),e.elementType=Y,e.lanes=u,e;case se:return e=Ct(19,a,t,l),e.elementType=se,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:m=10;break e;case J:m=9;break e;case Z:m=11;break e;case W:m=14;break e;case L:m=16,n=null;break e}m=29,a=Error(r(130,e===null?"null":typeof e,"")),n=null}return t=Ct(m,a,t,l),t.elementType=e,t.type=n,t.lanes=u,t}function po(e,t,a,n){return e=Ct(7,e,n,t),e.lanes=a,e}function fl(e,t,a){return e=Ct(6,e,null,t),e.lanes=a,e}function qm(e){var t=Ct(18,null,null,0);return t.stateNode=e,t}function hl(e,t,a){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nm=new WeakMap;function Lt(e,t){if(typeof e=="object"&&e!==null){var a=Nm.get(e);return a!==void 0?a:(t={value:e,source:t,stack:qd(t)},Nm.set(e,t),t)}return{value:e,source:t,stack:qd(t)}}var Ko=[],Fo=0,ci=null,Yn=0,Bt=[],Ut=0,ja=null,It=1,ea="";function da(e,t){Ko[Fo++]=Yn,Ko[Fo++]=ci,ci=e,Yn=t}function Om(e,t,a){Bt[Ut++]=It,Bt[Ut++]=ea,Bt[Ut++]=ja,ja=e;var n=It;e=ea;var l=32-Dt(n)-1;n&=~(1<<l),a+=1;var u=32-Dt(t)+l;if(30<u){var m=l-l%5;u=(n&(1<<m)-1).toString(32),n>>=m,l-=m,It=1<<32-Dt(t)+l|a<<l|n,ea=u+e}else It=1<<u|a<<l|n,ea=e}function pl(e){e.return!==null&&(da(e,1),Om(e,1,0))}function gl(e){for(;e===ci;)ci=Ko[--Fo],Ko[Fo]=null,Yn=Ko[--Fo],Ko[Fo]=null;for(;e===ja;)ja=Bt[--Ut],Bt[Ut]=null,ea=Bt[--Ut],Bt[Ut]=null,It=Bt[--Ut],Bt[Ut]=null}function jm(e,t){Bt[Ut++]=It,Bt[Ut++]=ea,Bt[Ut++]=ja,It=t.id,ea=t.overflow,ja=e}var nt=null,we=null,Te=!1,Ra=null,Ht=!1,vl=Error(r(519));function wa(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jn(Lt(t,e)),vl}function Rm(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[ot]=e,t[gt]=n,a){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(a=0;a<hs.length;a++)ve(hs[a],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),Jd(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),Zd(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Wh(t.textContent,a)?(n.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),n.onScroll!=null&&ve("scroll",t),n.onScrollEnd!=null&&ve("scrollend",t),n.onClick!=null&&(t.onclick=la),t=!0):t=!1,t||wa(e,!0)}function wm(e){for(nt=e.return;nt;)switch(nt.tag){case 5:case 31:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:nt=nt.return}}function Wo(e){if(e!==nt)return!1;if(!Te)return wm(e),Te=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vu(e.type,e.memoizedProps)),a=!a),a&&we&&wa(e),wm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));we=ip(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));we=ip(e)}else t===27?(t=we,Za(e.type)?(e=Hu,Hu=null,we=e):we=t):we=nt?Qt(e.stateNode.nextSibling):null;return!0}function go(){we=nt=null,Te=!1}function yl(){var e=Ra;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),Ra=null),e}function Jn(e){Ra===null?Ra=[e]:Ra.push(e)}var bl=A(null),vo=null,ma=null;function Va(e,t,a){X(bl,t._currentValue),t._currentValue=a}function fa(e){e._currentValue=bl.current,_(bl)}function Sl(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Tl(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var m=l.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=l;for(var x=0;x<t.length;x++)if(v.context===t[x]){u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),Sl(u.return,a,e),n||(m=null);break e}u=v.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(r(341));m.lanes|=a,u=m.alternate,u!==null&&(u.lanes|=a),Sl(m,a,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function $o(e,t,a,n){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(r(387));if(m=m.memoizedProps,m!==null){var v=l.type;Mt(l.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(l===Se.current){if(m=l.alternate,m===null)throw Error(r(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(bs):e=[bs])}l=l.return}e!==null&&Tl(t,e,a,n),t.flags|=262144}function di(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yo(e){vo=e,ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return Vm(vo,e)}function mi(e,t){return vo===null&&yo(e),Vm(e,t)}function Vm(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ma===null){if(e===null)throw Error(r(308));ma=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ma=ma.next=t;return a}var Ab=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Db=o.unstable_scheduleCallback,Mb=o.unstable_NormalPriority,Ye={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xl(){return{controller:new Ab,data:new Map,refCount:0}}function Xn(e){e.refCount--,e.refCount===0&&Db(Mb,function(){e.controller.abort()})}var Zn=null,El=0,Io=0,en=null;function Cb(e,t){if(Zn===null){var a=Zn=[];El=0,Io=Mu(),en={status:"pending",value:void 0,then:function(n){a.push(n)}}}return El++,t.then(_m,_m),t}function _m(){if(--El===0&&Zn!==null){en!==null&&(en.status="fulfilled");var e=Zn;Zn=null,Io=0,en=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zb(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Lm=j.S;j.S=function(e,t){Th=Et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cb(e,t),Lm!==null&&Lm(e,t)};var bo=A(null);function Al(){var e=bo.current;return e!==null?e:Oe.pooledCache}function fi(e,t){t===null?X(bo,bo.current):X(bo,t.pool)}function Bm(){var e=Al();return e===null?null:{parent:Ye._currentValue,pool:e}}var tn=Error(r(460)),Dl=Error(r(474)),hi=Error(r(542)),pi={then:function(){}};function Um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hm(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(la,la),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qm(e),e;default:if(typeof t.status=="string")t.then(la,la);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qm(e),e}throw To=t,tn}}function So(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(To=a,tn):a}}var To=null;function Pm(){if(To===null)throw Error(r(459));var e=To;return To=null,e}function Qm(e){if(e===tn||e===hi)throw Error(r(483))}var an=null,Kn=0;function gi(e){var t=Kn;return Kn+=1,an===null&&(an=[]),Hm(an,e,t)}function Fn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vi(e,t){throw t.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gm(e){function t(D,E){if(e){var M=D.deletions;M===null?(D.deletions=[E],D.flags|=16):M.push(E)}}function a(D,E){if(!e)return null;for(;E!==null;)t(D,E),E=E.sibling;return null}function n(D){for(var E=new Map;D!==null;)D.key!==null?E.set(D.key,D):E.set(D.index,D),D=D.sibling;return E}function l(D,E){return D=ca(D,E),D.index=0,D.sibling=null,D}function u(D,E,M){return D.index=M,e?(M=D.alternate,M!==null?(M=M.index,M<E?(D.flags|=67108866,E):M):(D.flags|=67108866,E)):(D.flags|=1048576,E)}function m(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function v(D,E,M,w){return E===null||E.tag!==6?(E=fl(M,D.mode,w),E.return=D,E):(E=l(E,M),E.return=D,E)}function x(D,E,M,w){var re=M.type;return re===B?R(D,E,M.props.children,w,M.key):E!==null&&(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===L&&So(re)===E.type)?(E=l(E,M.props),Fn(E,M),E.return=D,E):(E=ui(M.type,M.key,M.props,null,D.mode,w),Fn(E,M),E.return=D,E)}function C(D,E,M,w){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=hl(M,D.mode,w),E.return=D,E):(E=l(E,M.children||[]),E.return=D,E)}function R(D,E,M,w,re){return E===null||E.tag!==7?(E=po(M,D.mode,w,re),E.return=D,E):(E=l(E,M),E.return=D,E)}function V(D,E,M){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=fl(""+E,D.mode,M),E.return=D,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case z:return M=ui(E.type,E.key,E.props,null,D.mode,M),Fn(M,E),M.return=D,M;case O:return E=hl(E,D.mode,M),E.return=D,E;case L:return E=So(E),V(D,E,M)}if(Qe(E)||Re(E))return E=po(E,D.mode,M,null),E.return=D,E;if(typeof E.then=="function")return V(D,gi(E),M);if(E.$$typeof===Q)return V(D,mi(D,E),M);vi(D,E)}return null}function q(D,E,M,w){var re=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return re!==null?null:v(D,E,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case z:return M.key===re?x(D,E,M,w):null;case O:return M.key===re?C(D,E,M,w):null;case L:return M=So(M),q(D,E,M,w)}if(Qe(M)||Re(M))return re!==null?null:R(D,E,M,w,null);if(typeof M.then=="function")return q(D,E,gi(M),w);if(M.$$typeof===Q)return q(D,E,mi(D,M),w);vi(D,M)}return null}function N(D,E,M,w,re){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return D=D.get(M)||null,v(E,D,""+w,re);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case z:return D=D.get(w.key===null?M:w.key)||null,x(E,D,w,re);case O:return D=D.get(w.key===null?M:w.key)||null,C(E,D,w,re);case L:return w=So(w),N(D,E,M,w,re)}if(Qe(w)||Re(w))return D=D.get(M)||null,R(E,D,w,re,null);if(typeof w.then=="function")return N(D,E,M,gi(w),re);if(w.$$typeof===Q)return N(D,E,M,mi(E,w),re);vi(E,w)}return null}function I(D,E,M,w){for(var re=null,xe=null,oe=E,me=E=0,be=null;oe!==null&&me<M.length;me++){oe.index>me?(be=oe,oe=null):be=oe.sibling;var Ee=q(D,oe,M[me],w);if(Ee===null){oe===null&&(oe=be);break}e&&oe&&Ee.alternate===null&&t(D,oe),E=u(Ee,E,me),xe===null?re=Ee:xe.sibling=Ee,xe=Ee,oe=be}if(me===M.length)return a(D,oe),Te&&da(D,me),re;if(oe===null){for(;me<M.length;me++)oe=V(D,M[me],w),oe!==null&&(E=u(oe,E,me),xe===null?re=oe:xe.sibling=oe,xe=oe);return Te&&da(D,me),re}for(oe=n(oe);me<M.length;me++)be=N(oe,D,me,M[me],w),be!==null&&(e&&be.alternate!==null&&oe.delete(be.key===null?me:be.key),E=u(be,E,me),xe===null?re=be:xe.sibling=be,xe=be);return e&&oe.forEach(function(Ia){return t(D,Ia)}),Te&&da(D,me),re}function ue(D,E,M,w){if(M==null)throw Error(r(151));for(var re=null,xe=null,oe=E,me=E=0,be=null,Ee=M.next();oe!==null&&!Ee.done;me++,Ee=M.next()){oe.index>me?(be=oe,oe=null):be=oe.sibling;var Ia=q(D,oe,Ee.value,w);if(Ia===null){oe===null&&(oe=be);break}e&&oe&&Ia.alternate===null&&t(D,oe),E=u(Ia,E,me),xe===null?re=Ia:xe.sibling=Ia,xe=Ia,oe=be}if(Ee.done)return a(D,oe),Te&&da(D,me),re;if(oe===null){for(;!Ee.done;me++,Ee=M.next())Ee=V(D,Ee.value,w),Ee!==null&&(E=u(Ee,E,me),xe===null?re=Ee:xe.sibling=Ee,xe=Ee);return Te&&da(D,me),re}for(oe=n(oe);!Ee.done;me++,Ee=M.next())Ee=N(oe,D,me,Ee.value,w),Ee!==null&&(e&&Ee.alternate!==null&&oe.delete(Ee.key===null?me:Ee.key),E=u(Ee,E,me),xe===null?re=Ee:xe.sibling=Ee,xe=Ee);return e&&oe.forEach(function(US){return t(D,US)}),Te&&da(D,me),re}function Ne(D,E,M,w){if(typeof M=="object"&&M!==null&&M.type===B&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case z:e:{for(var re=M.key;E!==null;){if(E.key===re){if(re=M.type,re===B){if(E.tag===7){a(D,E.sibling),w=l(E,M.props.children),w.return=D,D=w;break e}}else if(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===L&&So(re)===E.type){a(D,E.sibling),w=l(E,M.props),Fn(w,M),w.return=D,D=w;break e}a(D,E);break}else t(D,E);E=E.sibling}M.type===B?(w=po(M.props.children,D.mode,w,M.key),w.return=D,D=w):(w=ui(M.type,M.key,M.props,null,D.mode,w),Fn(w,M),w.return=D,D=w)}return m(D);case O:e:{for(re=M.key;E!==null;){if(E.key===re)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){a(D,E.sibling),w=l(E,M.children||[]),w.return=D,D=w;break e}else{a(D,E);break}else t(D,E);E=E.sibling}w=hl(M,D.mode,w),w.return=D,D=w}return m(D);case L:return M=So(M),Ne(D,E,M,w)}if(Qe(M))return I(D,E,M,w);if(Re(M)){if(re=Re(M),typeof re!="function")throw Error(r(150));return M=re.call(M),ue(D,E,M,w)}if(typeof M.then=="function")return Ne(D,E,gi(M),w);if(M.$$typeof===Q)return Ne(D,E,mi(D,M),w);vi(D,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,E!==null&&E.tag===6?(a(D,E.sibling),w=l(E,M),w.return=D,D=w):(a(D,E),w=fl(M,D.mode,w),w.return=D,D=w),m(D)):a(D,E)}return function(D,E,M,w){try{Kn=0;var re=Ne(D,E,M,w);return an=null,re}catch(oe){if(oe===tn||oe===hi)throw oe;var xe=Ct(29,oe,null,D.mode);return xe.lanes=w,xe.return=D,xe}finally{}}}var xo=Gm(!0),km=Gm(!1),_a=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ae&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=li(e),Cm(e,null,a),t}return ri(e,n,t,a),li(e)}function Wn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Vd(e,a)}}function zl(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=m:u=u.next=m,a=a.next}while(a!==null);u===null?l=u=t:u=u.next=t}else l=u=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ql=!1;function $n(){if(ql){var e=en;if(e!==null)throw e}}function In(e,t,a,n){ql=!1;var l=e.updateQueue;_a=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var x=v,C=x.next;x.next=null,m===null?u=C:m.next=C,m=x;var R=e.alternate;R!==null&&(R=R.updateQueue,v=R.lastBaseUpdate,v!==m&&(v===null?R.firstBaseUpdate=C:v.next=C,R.lastBaseUpdate=x))}if(u!==null){var V=l.baseState;m=0,R=C=x=null,v=u;do{var q=v.lane&-536870913,N=q!==v.lane;if(N?(ye&q)===q:(n&q)===q){q!==0&&q===Io&&(ql=!0),R!==null&&(R=R.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var I=e,ue=v;q=t;var Ne=a;switch(ue.tag){case 1:if(I=ue.payload,typeof I=="function"){V=I.call(Ne,V,q);break e}V=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=ue.payload,q=typeof I=="function"?I.call(Ne,V,q):I,q==null)break e;V=b({},V,q);break e;case 2:_a=!0}}q=v.callback,q!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[q]:N.push(q))}else N={lane:q,tag:v.tag,payload:v.payload,callback:v.callback,next:null},R===null?(C=R=N,x=V):R=R.next=N,m|=q;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;N=v,v=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);R===null&&(x=V),l.baseState=x,l.firstBaseUpdate=C,l.lastBaseUpdate=R,u===null&&(l.shared.lanes=0),Ga|=m,e.lanes=m,e.memoizedState=V}}function Ym(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Jm(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ym(a[e],t)}var on=A(null),yi=A(0);function Xm(e,t){e=xa,X(yi,e),X(on,t),xa=e|t.baseLanes}function Nl(){X(yi,xa),X(on,on.current)}function Ol(){xa=yi.current,_(on),_(yi)}var zt=A(null),Pt=null;function Ua(e){var t=e.alternate;X(Ge,Ge.current&1),X(zt,e),Pt===null&&(t===null||on.current!==null||t.memoizedState!==null)&&(Pt=e)}function jl(e){X(Ge,Ge.current),X(zt,e),Pt===null&&(Pt=e)}function Zm(e){e.tag===22?(X(Ge,Ge.current),X(zt,e),Pt===null&&(Pt=e)):Ha()}function Ha(){X(Ge,Ge.current),X(zt,zt.current)}function qt(e){_(zt),Pt===e&&(Pt=null),_(Ge)}var Ge=A(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bu(a)||Uu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,de=null,ze=null,Je=null,Si=!1,nn=!1,Eo=!1,Ti=0,es=0,sn=null,qb=0;function Ue(){throw Error(r(321))}function Rl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Mt(e[a],t[a]))return!1;return!0}function wl(e,t,a,n,l,u){return ha=u,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?jf:Kl,Eo=!1,u=a(n,l),Eo=!1,nn&&(u=Fm(t,a,n,l)),Km(e),u}function Km(e){j.H=os;var t=ze!==null&&ze.next!==null;if(ha=0,Je=ze=de=null,Si=!1,es=0,sn=null,t)throw Error(r(300));e===null||Xe||(e=e.dependencies,e!==null&&di(e)&&(Xe=!0))}function Fm(e,t,a,n){de=e;var l=0;do{if(nn&&(sn=null),es=0,nn=!1,25<=l)throw Error(r(301));if(l+=1,Je=ze=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}j.H=Rf,u=t(a,n)}while(nn);return u}function Nb(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?ts(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(de.flags|=1024),t}function Vl(){var e=Ti!==0;return Ti=0,e}function _l(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ll(e){if(Si){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Si=!1}ha=0,Je=ze=de=null,nn=!1,es=Ti=0,sn=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?de.memoizedState=Je=e:Je=Je.next=e,Je}function ke(){if(ze===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Je===null?de.memoizedState:Je.next;if(t!==null)Je=t,ze=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Je===null?de.memoizedState=Je=e:Je=Je.next=e}return Je}function xi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ts(e){var t=es;return es+=1,sn===null&&(sn=[]),e=Hm(sn,e,t),t=de,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?jf:Kl),e}function Ei(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ts(e);if(e.$$typeof===Q)return st(e)}throw Error(r(438,String(e)))}function Bl(e){var t=null,a=de.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=de.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=xi(),de.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=De;return t.index++,a}function pa(e,t){return typeof t=="function"?t(e):t}function Ai(e){var t=ke();return Ul(t,ze,e)}function Ul(e,t,a){var n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=a;var l=e.baseQueue,u=n.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}t.baseQueue=l=u,n.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var v=m=null,x=null,C=t,R=!1;do{var V=C.lane&-536870913;if(V!==C.lane?(ye&V)===V:(ha&V)===V){var q=C.revertLane;if(q===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),V===Io&&(R=!0);else if((ha&q)===q){C=C.next,q===Io&&(R=!0);continue}else V={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(v=x=V,m=u):x=x.next=V,de.lanes|=q,Ga|=q;V=C.action,Eo&&a(u,V),u=C.hasEagerState?C.eagerState:a(u,V)}else q={lane:V,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(v=x=q,m=u):x=x.next=q,de.lanes|=V,Ga|=V;C=C.next}while(C!==null&&C!==t);if(x===null?m=u:x.next=v,!Mt(u,e.memoizedState)&&(Xe=!0,R&&(a=en,a!==null)))throw a;e.memoizedState=u,e.baseState=m,e.baseQueue=x,n.lastRenderedState=u}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Hl(e){var t=ke(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,u=t.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);Mt(u,t.memoizedState)||(Xe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,n]}function Wm(e,t,a){var n=de,l=ke(),u=Te;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=t();var m=!Mt((ze||l).memoizedState,a);if(m&&(l.memoizedState=a,Xe=!0),l=l.queue,Gl(ef.bind(null,n,l,e),[e]),l.getSnapshot!==t||m||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,rn(9,{destroy:void 0},Im.bind(null,n,l,a,t),null),Oe===null)throw Error(r(349));u||(ha&127)!==0||$m(n,t,a)}return a}function $m(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=de.updateQueue,t===null?(t=xi(),de.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Im(e,t,a,n){t.value=a,t.getSnapshot=n,tf(t)&&af(e)}function ef(e,t,a){return a(function(){tf(t)&&af(e)})}function tf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Mt(e,a)}catch{return!0}}function af(e){var t=ho(e,2);t!==null&&xt(t,e,2)}function Pl(e){var t=mt();if(typeof e=="function"){var a=e;if(e=a(),Eo){qa(!0);try{a()}finally{qa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function of(e,t,a,n){return e.baseState=a,Ul(e,ze,typeof n=="function"?n:pa)}function Ob(e,t,a,n,l){if(Ci(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};j.T!==null?a(!0):u.isTransition=!1,n(u),a=t.pending,a===null?(u.next=t.pending=u,nf(t,u)):(u.next=a.next,t.pending=a.next=u)}}function nf(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var u=j.T,m={};j.T=m;try{var v=a(l,n),x=j.S;x!==null&&x(m,v),sf(e,t,v)}catch(C){Ql(e,t,C)}finally{u!==null&&m.types!==null&&(u.types=m.types),j.T=u}}else try{u=a(l,n),sf(e,t,u)}catch(C){Ql(e,t,C)}}function sf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){rf(e,t,n)},function(n){return Ql(e,t,n)}):rf(e,t,a)}function rf(e,t,a){t.status="fulfilled",t.value=a,lf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,nf(e,a)))}function Ql(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,lf(t),t=t.next;while(t!==n)}e.action=null}function lf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uf(e,t){return t}function cf(e,t){if(Te){var a=Oe.formState;if(a!==null){e:{var n=de;if(Te){if(we){t:{for(var l=we,u=Ht;l.nodeType!==8;){if(!u){l=null;break t}if(l=Qt(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){we=Qt(l.nextSibling),n=l.data==="F!";break e}}wa(n)}n=!1}n&&(t=a[0])}}return a=mt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uf,lastRenderedState:t},a.queue=n,a=qf.bind(null,de,n),n.dispatch=a,n=Pl(!1),u=Zl.bind(null,de,!1,n.queue),n=mt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Ob.bind(null,de,l,u,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function df(e){var t=ke();return mf(t,ze,e)}function mf(e,t,a){if(t=Ul(e,t,uf)[0],e=Ai(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ts(t)}catch(m){throw m===tn?hi:m}else n=t;t=ke();var l=t.queue,u=l.dispatch;return a!==t.memoizedState&&(de.flags|=2048,rn(9,{destroy:void 0},jb.bind(null,l,a),null)),[n,u,e]}function jb(e,t){e.action=t}function ff(e){var t=ke(),a=ze;if(a!==null)return mf(t,a,e);ke(),t=t.memoizedState,a=ke();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function rn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=de.updateQueue,t===null&&(t=xi(),de.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function hf(){return ke().memoizedState}function Di(e,t,a,n){var l=mt();de.flags|=e,l.memoizedState=rn(1|t,{destroy:void 0},a,n===void 0?null:n)}function Mi(e,t,a,n){var l=ke();n=n===void 0?null:n;var u=l.memoizedState.inst;ze!==null&&n!==null&&Rl(n,ze.memoizedState.deps)?l.memoizedState=rn(t,u,a,n):(de.flags|=e,l.memoizedState=rn(1|t,u,a,n))}function pf(e,t){Di(8390656,8,e,t)}function Gl(e,t){Mi(2048,8,e,t)}function Rb(e){de.flags|=4;var t=de.updateQueue;if(t===null)t=xi(),de.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function gf(e){var t=ke().memoizedState;return Rb({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function vf(e,t){return Mi(4,2,e,t)}function yf(e,t){return Mi(4,4,e,t)}function bf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sf(e,t,a){a=a!=null?a.concat([e]):null,Mi(4,4,bf.bind(null,t,e),a)}function kl(){}function Tf(e,t){var a=ke();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Rl(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function xf(e,t){var a=ke();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Rl(t,n[1]))return n[0];if(n=e(),Eo){qa(!0);try{e()}finally{qa(!1)}}return a.memoizedState=[n,t],n}function Yl(e,t,a){return a===void 0||(ha&1073741824)!==0&&(ye&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Eh(),de.lanes|=e,Ga|=e,a)}function Ef(e,t,a,n){return Mt(a,t)?a:on.current!==null?(e=Yl(e,a,n),Mt(e,t)||(Xe=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(ye&261930)===0?(Xe=!0,e.memoizedState=a):(e=Eh(),de.lanes|=e,Ga|=e,t)}function Af(e,t,a,n,l){var u=P.p;P.p=u!==0&&8>u?u:8;var m=j.T,v={};j.T=v,Zl(e,!1,t,a);try{var x=l(),C=j.S;if(C!==null&&C(v,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var R=zb(x,n);as(e,t,R,jt(e))}else as(e,t,n,jt(e))}catch(V){as(e,t,{then:function(){},status:"rejected",reason:V},jt())}finally{P.p=u,m!==null&&v.types!==null&&(m.types=v.types),j.T=m}}function wb(){}function Jl(e,t,a,n){if(e.tag!==5)throw Error(r(476));var l=Df(e).queue;Af(e,l,t,$,a===null?wb:function(){return Mf(e),a(n)})}function Df(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mf(e){var t=Df(e);t.next===null&&(t=e.alternate.memoizedState),as(e,t.next.queue,{},jt())}function Xl(){return st(bs)}function Cf(){return ke().memoizedState}function zf(){return ke().memoizedState}function Vb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=jt();e=La(a);var n=Ba(t,e,a);n!==null&&(xt(n,t,a),Wn(n,t,a)),t={cache:xl()},e.payload=t;return}t=t.return}}function _b(e,t,a){var n=jt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ci(e)?Nf(t,a):(a=dl(e,t,a,n),a!==null&&(xt(a,e,n),Of(a,t,n)))}function qf(e,t,a){var n=jt();as(e,t,a,n)}function as(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ci(e))Nf(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,v=u(m,a);if(l.hasEagerState=!0,l.eagerState=v,Mt(v,m))return ri(e,t,l,0),Oe===null&&ii(),!1}catch{}finally{}if(a=dl(e,t,l,n),a!==null)return xt(a,e,n),Of(a,t,n),!0}return!1}function Zl(e,t,a,n){if(n={lane:2,revertLane:Mu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ci(e)){if(t)throw Error(r(479))}else t=dl(e,a,n,2),t!==null&&xt(t,e,2)}function Ci(e){var t=e.alternate;return e===de||t!==null&&t===de}function Nf(e,t){nn=Si=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Of(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Vd(e,a)}}var os={readContext:st,use:Ei,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};os.useEffectEvent=Ue;var jf={readContext:st,use:Ei,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:pf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Di(4194308,4,bf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Di(4194308,4,e,t)},useInsertionEffect:function(e,t){Di(4,2,e,t)},useMemo:function(e,t){var a=mt();t=t===void 0?null:t;var n=e();if(Eo){qa(!0);try{e()}finally{qa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=mt();if(a!==void 0){var l=a(t);if(Eo){qa(!0);try{a(t)}finally{qa(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=_b.bind(null,de,e),[n.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=Pl(e);var t=e.queue,a=qf.bind(null,de,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:kl,useDeferredValue:function(e,t){var a=mt();return Yl(a,e,t)},useTransition:function(){var e=Pl(!1);return e=Af.bind(null,de,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=de,l=mt();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),Oe===null)throw Error(r(349));(ye&127)!==0||$m(n,t,a)}l.memoizedState=a;var u={value:a,getSnapshot:t};return l.queue=u,pf(ef.bind(null,n,u,e),[e]),n.flags|=2048,rn(9,{destroy:void 0},Im.bind(null,n,u,a,t),null),a},useId:function(){var e=mt(),t=Oe.identifierPrefix;if(Te){var a=ea,n=It;a=(n&~(1<<32-Dt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ti++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=qb++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Xl,useFormState:cf,useActionState:cf,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Zl.bind(null,de,!0,a),a.dispatch=t,[e,t]},useMemoCache:Bl,useCacheRefresh:function(){return mt().memoizedState=Vb.bind(null,de)},useEffectEvent:function(e){var t=mt(),a={impl:e};return t.memoizedState=a,function(){if((Ae&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Kl={readContext:st,use:Ei,useCallback:Tf,useContext:st,useEffect:Gl,useImperativeHandle:Sf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:xf,useReducer:Ai,useRef:hf,useState:function(){return Ai(pa)},useDebugValue:kl,useDeferredValue:function(e,t){var a=ke();return Ef(a,ze.memoizedState,e,t)},useTransition:function(){var e=Ai(pa)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:ts(e),t]},useSyncExternalStore:Wm,useId:Cf,useHostTransitionStatus:Xl,useFormState:df,useActionState:df,useOptimistic:function(e,t){var a=ke();return of(a,ze,e,t)},useMemoCache:Bl,useCacheRefresh:zf};Kl.useEffectEvent=gf;var Rf={readContext:st,use:Ei,useCallback:Tf,useContext:st,useEffect:Gl,useImperativeHandle:Sf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:xf,useReducer:Hl,useRef:hf,useState:function(){return Hl(pa)},useDebugValue:kl,useDeferredValue:function(e,t){var a=ke();return ze===null?Yl(a,e,t):Ef(a,ze.memoizedState,e,t)},useTransition:function(){var e=Hl(pa)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:ts(e),t]},useSyncExternalStore:Wm,useId:Cf,useHostTransitionStatus:Xl,useFormState:ff,useActionState:ff,useOptimistic:function(e,t){var a=ke();return ze!==null?of(a,ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bl,useCacheRefresh:zf};Rf.useEffectEvent=gf;function Fl(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wl={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=jt(),l=La(n);l.payload=t,a!=null&&(l.callback=a),t=Ba(e,l,n),t!==null&&(xt(t,e,n),Wn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=jt(),l=La(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ba(e,l,n),t!==null&&(xt(t,e,n),Wn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=jt(),n=La(a);n.tag=2,t!=null&&(n.callback=t),t=Ba(e,n,a),t!==null&&(xt(t,e,a),Wn(t,e,a))}};function wf(e,t,a,n,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,m):t.prototype&&t.prototype.isPureReactComponent?!Gn(a,n)||!Gn(l,u):!0}function Vf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Wl.enqueueReplaceState(t,t.state,null)}function Ao(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function _f(e){si(e)}function Lf(e){console.error(e)}function Bf(e){si(e)}function zi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Uf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function $l(e,t,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){zi(e,t)},a}function Hf(e){return e=La(e),e.tag=3,e}function Pf(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;e.payload=function(){return l(u)},e.callback=function(){Uf(t,a,n)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Uf(t,a,n),typeof l!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})})}function Lb(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&$o(t,a,l,!0),a=zt.current,a!==null){switch(a.tag){case 31:case 13:return Pt===null?Hi():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===pi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Eu(e,n,l)),!1;case 22:return a.flags|=65536,n===pi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Eu(e,n,l)),!1}throw Error(r(435,a.tag))}return Eu(e,n,l),Hi(),!1}if(Te)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==vl&&(e=Error(r(422),{cause:n}),Jn(Lt(e,a)))):(n!==vl&&(t=Error(r(423),{cause:n}),Jn(Lt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Lt(n,a),l=$l(e.stateNode,n,l),zl(e,l),He!==4&&(He=2)),!1;var u=Error(r(520),{cause:n});if(u=Lt(u,a),ds===null?ds=[u]:ds.push(u),He!==4&&(He=2),t===null)return!0;n=Lt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=$l(a.stateNode,n,e),zl(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ka===null||!ka.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Hf(l),Pf(l,e,a,n),zl(a,l),!1}a=a.return}while(a!==null);return!1}var Il=Error(r(461)),Xe=!1;function it(e,t,a,n){t.child=e===null?km(t,null,a,n):xo(t,e.child,a,n)}function Qf(e,t,a,n,l){a=a.render;var u=t.ref;if("ref"in n){var m={};for(var v in n)v!=="ref"&&(m[v]=n[v])}else m=n;return yo(t),n=wl(e,t,a,m,u,l),v=Vl(),e!==null&&!Xe?(_l(e,t,l),ga(e,t,l)):(Te&&v&&pl(t),t.flags|=1,it(e,t,n,l),t.child)}function Gf(e,t,a,n,l){if(e===null){var u=a.type;return typeof u=="function"&&!ml(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,kf(e,t,u,n,l)):(e=ui(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!ru(e,l)){var m=u.memoizedProps;if(a=a.compare,a=a!==null?a:Gn,a(m,n)&&e.ref===t.ref)return ga(e,t,l)}return t.flags|=1,e=ca(u,n),e.ref=t.ref,e.return=t,t.child=e}function kf(e,t,a,n,l){if(e!==null){var u=e.memoizedProps;if(Gn(u,n)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=n=u,ru(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,ga(e,t,l)}return eu(e,t,a,n,l)}function Yf(e,t,a,n){var l=n.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~u}else n=0,t.child=null;return Jf(e,t,u,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fi(t,u!==null?u.cachePool:null),u!==null?Xm(t,u):Nl(),Zm(t);else return n=t.lanes=536870912,Jf(e,t,u!==null?u.baseLanes|a:a,a,n)}else u!==null?(fi(t,u.cachePool),Xm(t,u),Ha(),t.memoizedState=null):(e!==null&&fi(t,null),Nl(),Ha());return it(e,t,l,a),t.child}function ns(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Jf(e,t,a,n,l){var u=Al();return u=u===null?null:{parent:Ye._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&fi(t,null),Nl(),Zm(t),e!==null&&$o(e,t,n,!0),t.childLanes=l,null}function qi(e,t){return t=Oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Xf(e,t,a){return xo(t,e.child,null,a),e=qi(t,t.pendingProps),e.flags|=2,qt(t),t.memoizedState=null,e}function Bb(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Te){if(n.mode==="hidden")return e=qi(t,n),t.lanes=536870912,ns(null,e);if(jl(t),(e=we)?(e=sp(e,Ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:It,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=qm(e),a.return=t,t.child=a,nt=t,we=null)):e=null,e===null)throw wa(t);return t.lanes=536870912,null}return qi(t,n)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(jl(t),l)if(t.flags&256)t.flags&=-257,t=Xf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Xe||$o(e,t,a,!1),l=(a&e.childLanes)!==0,Xe||l){if(n=Oe,n!==null&&(m=_d(n,a),m!==0&&m!==u.retryLane))throw u.retryLane=m,ho(e,m),xt(n,e,m),Il;Hi(),t=Xf(e,t,a)}else e=u.treeContext,we=Qt(m.nextSibling),nt=t,Te=!0,Ra=null,Ht=!1,e!==null&&jm(t,e),t=qi(t,n),t.flags|=4096;return t}return e=ca(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ni(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function eu(e,t,a,n,l){return yo(t),a=wl(e,t,a,n,void 0,l),n=Vl(),e!==null&&!Xe?(_l(e,t,l),ga(e,t,l)):(Te&&n&&pl(t),t.flags|=1,it(e,t,a,l),t.child)}function Zf(e,t,a,n,l,u){return yo(t),t.updateQueue=null,a=Fm(t,n,a,l),Km(e),n=Vl(),e!==null&&!Xe?(_l(e,t,u),ga(e,t,u)):(Te&&n&&pl(t),t.flags|=1,it(e,t,a,u),t.child)}function Kf(e,t,a,n,l){if(yo(t),t.stateNode===null){var u=Zo,m=a.contextType;typeof m=="object"&&m!==null&&(u=st(m)),u=new a(n,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Wl,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=n,u.state=t.memoizedState,u.refs={},Ml(t),m=a.contextType,u.context=typeof m=="object"&&m!==null?st(m):Zo,u.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Fl(t,a,m,n),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Wl.enqueueReplaceState(u,u.state,null),In(t,n,u,l),$n(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,x=Ao(a,v);u.props=x;var C=u.context,R=a.contextType;m=Zo,typeof R=="object"&&R!==null&&(m=st(R));var V=a.getDerivedStateFromProps;R=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,R||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||C!==m)&&Vf(t,u,n,m),_a=!1;var q=t.memoizedState;u.state=q,In(t,n,u,l),$n(),C=t.memoizedState,v||q!==C||_a?(typeof V=="function"&&(Fl(t,a,V,n),C=t.memoizedState),(x=_a||wf(t,a,x,n,q,C,m))?(R||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=C),u.props=n,u.state=C,u.context=m,n=x):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,Cl(e,t),m=t.memoizedProps,R=Ao(a,m),u.props=R,V=t.pendingProps,q=u.context,C=a.contextType,x=Zo,typeof C=="object"&&C!==null&&(x=st(C)),v=a.getDerivedStateFromProps,(C=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==V||q!==x)&&Vf(t,u,n,x),_a=!1,q=t.memoizedState,u.state=q,In(t,n,u,l),$n();var N=t.memoizedState;m!==V||q!==N||_a||e!==null&&e.dependencies!==null&&di(e.dependencies)?(typeof v=="function"&&(Fl(t,a,v,n),N=t.memoizedState),(R=_a||wf(t,a,R,n,q,N,x)||e!==null&&e.dependencies!==null&&di(e.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,N,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,N,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=N),u.props=n,u.state=N,u.context=x,n=R):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),n=!1)}return u=n,Ni(e,t),n=(t.flags&128)!==0,u||n?(u=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&n?(t.child=xo(t,e.child,null,l),t.child=xo(t,null,a,l)):it(e,t,a,l),t.memoizedState=u.state,e=t.child):e=ga(e,t,l),e}function Ff(e,t,a,n){return go(),t.flags|=256,it(e,t,a,n),t.child}var tu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function au(e){return{baseLanes:e,cachePool:Bm()}}function ou(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ot),e}function Wf(e,t,a){var n=t.pendingProps,l=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(l?Ua(t):Ha(),(e=we)?(e=sp(e,Ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:It,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=qm(e),a.return=t,t.child=a,nt=t,we=null)):e=null,e===null)throw wa(t);return Uu(e)?t.lanes=32:t.lanes=536870912,null}var v=n.children;return n=n.fallback,l?(Ha(),l=t.mode,v=Oi({mode:"hidden",children:v},l),n=po(n,l,a,null),v.return=t,n.return=t,v.sibling=n,t.child=v,n=t.child,n.memoizedState=au(a),n.childLanes=ou(e,m,a),t.memoizedState=tu,ns(null,n)):(Ua(t),nu(t,v))}var x=e.memoizedState;if(x!==null&&(v=x.dehydrated,v!==null)){if(u)t.flags&256?(Ua(t),t.flags&=-257,t=su(e,t,a)):t.memoizedState!==null?(Ha(),t.child=e.child,t.flags|=128,t=null):(Ha(),v=n.fallback,l=t.mode,n=Oi({mode:"visible",children:n.children},l),v=po(v,l,a,null),v.flags|=2,n.return=t,v.return=t,n.sibling=v,t.child=n,xo(t,e.child,null,a),n=t.child,n.memoizedState=au(a),n.childLanes=ou(e,m,a),t.memoizedState=tu,t=ns(null,n));else if(Ua(t),Uu(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var C=m.dgst;m=C,n=Error(r(419)),n.stack="",n.digest=m,Jn({value:n,source:null,stack:null}),t=su(e,t,a)}else if(Xe||$o(e,t,a,!1),m=(a&e.childLanes)!==0,Xe||m){if(m=Oe,m!==null&&(n=_d(m,a),n!==0&&n!==x.retryLane))throw x.retryLane=n,ho(e,n),xt(m,e,n),Il;Bu(v)||Hi(),t=su(e,t,a)}else Bu(v)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,we=Qt(v.nextSibling),nt=t,Te=!0,Ra=null,Ht=!1,e!==null&&jm(t,e),t=nu(t,n.children),t.flags|=4096);return t}return l?(Ha(),v=n.fallback,l=t.mode,x=e.child,C=x.sibling,n=ca(x,{mode:"hidden",children:n.children}),n.subtreeFlags=x.subtreeFlags&65011712,C!==null?v=ca(C,v):(v=po(v,l,a,null),v.flags|=2),v.return=t,n.return=t,n.sibling=v,t.child=n,ns(null,n),n=t.child,v=e.child.memoizedState,v===null?v=au(a):(l=v.cachePool,l!==null?(x=Ye._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=Bm(),v={baseLanes:v.baseLanes|a,cachePool:l}),n.memoizedState=v,n.childLanes=ou(e,m,a),t.memoizedState=tu,ns(e.child,n)):(Ua(t),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function nu(e,t){return t=Oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oi(e,t){return e=Ct(22,e,null,t),e.lanes=0,e}function su(e,t,a){return xo(t,e.child,null,a),e=nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Sl(e.return,t,a)}function iu(e,t,a,n,l,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=n,m.tail=a,m.tailMode=l,m.treeForkCount=u)}function If(e,t,a){var n=t.pendingProps,l=n.revealOrder,u=n.tail;n=n.children;var m=Ge.current,v=(m&2)!==0;if(v?(m=m&1|2,t.flags|=128):m&=1,X(Ge,m),it(e,t,n,a),n=Te?Yn:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$f(e,a,t);else if(e.tag===19)$f(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&bi(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),iu(t,!1,l,a,u,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&bi(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}iu(t,!0,a,null,u,n);break;case"together":iu(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function ga(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ga|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($o(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=ca(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ru(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&di(e)))}function Ub(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),Va(t,Ye,e.memoizedState.cache),go();break;case 27:case 5:Ca(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:Va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,jl(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wf(e,t,a):(Ua(t),e=ga(e,t,a),e!==null?e.sibling:null);Ua(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||($o(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return If(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(Ge,Ge.current),n)break;return null;case 22:return t.lanes=0,Yf(e,t,a,t.pendingProps);case 24:Va(t,Ye,e.memoizedState.cache)}return ga(e,t,a)}function eh(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!ru(e,a)&&(t.flags&128)===0)return Xe=!1,Ub(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,Te&&(t.flags&1048576)!==0&&Om(t,Yn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=So(t.elementType),t.type=e,typeof e=="function")ml(e)?(n=Ao(e,n),t.tag=1,t=Kf(null,t,e,n,a)):(t.tag=0,t=eu(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===Z){t.tag=11,t=Qf(null,t,e,n,a);break e}else if(l===W){t.tag=14,t=Gf(null,t,e,n,a);break e}}throw t=ut(e)||e,Error(r(306,t,""))}}return t;case 0:return eu(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Ao(n,t.pendingProps),Kf(e,t,n,l,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(r(387));n=t.pendingProps;var u=t.memoizedState;l=u.element,Cl(e,t),In(t,n,null,a);var m=t.memoizedState;if(n=m.cache,Va(t,Ye,n),n!==u.cache&&Tl(t,[Ye],a,!0),$n(),n=m.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Ff(e,t,n,a);break e}else if(n!==l){l=Lt(Error(r(424)),t),Jn(l),t=Ff(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=Qt(e.firstChild),nt=t,Te=!0,Ra=null,Ht=!0,a=km(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(go(),n===l){t=ga(e,t,a);break e}it(e,t,n,a)}t=t.child}return t;case 26:return Ni(e,t),e===null?(a=dp(t.type,null,t.pendingProps,null))?t.memoizedState=a:Te||(a=t.type,e=t.pendingProps,n=Xi(le.current).createElement(a),n[ot]=t,n[gt]=e,rt(n,a,e),et(n),t.stateNode=n):t.memoizedState=dp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ca(t),e===null&&Te&&(n=t.stateNode=lp(t.type,t.pendingProps,le.current),nt=t,Ht=!0,l=we,Za(t.type)?(Hu=l,we=Qt(n.firstChild)):we=l),it(e,t,t.pendingProps.children,a),Ni(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Te&&((l=n=we)&&(n=pS(n,t.type,t.pendingProps,Ht),n!==null?(t.stateNode=n,nt=t,we=Qt(n.firstChild),Ht=!1,l=!0):l=!1),l||wa(t)),Ca(t),l=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,n=u.children,Vu(l,u)?n=null:m!==null&&Vu(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=wl(e,t,Nb,null,null,a),bs._currentValue=l),Ni(e,t),it(e,t,n,a),t.child;case 6:return e===null&&Te&&((e=a=we)&&(a=gS(a,t.pendingProps,Ht),a!==null?(t.stateNode=a,nt=t,we=null,e=!0):e=!1),e||wa(t)),null;case 13:return Wf(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=xo(t,null,n,a):it(e,t,n,a),t.child;case 11:return Qf(e,t,t.type,t.pendingProps,a);case 7:return it(e,t,t.pendingProps,a),t.child;case 8:return it(e,t,t.pendingProps.children,a),t.child;case 12:return it(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Va(t,t.type,n.value),it(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,yo(t),l=st(l),n=n(l),t.flags|=1,it(e,t,n,a),t.child;case 14:return Gf(e,t,t.type,t.pendingProps,a);case 15:return kf(e,t,t.type,t.pendingProps,a);case 19:return If(e,t,a);case 31:return Bb(e,t,a);case 22:return Yf(e,t,a,t.pendingProps);case 24:return yo(t),n=st(Ye),e===null?(l=Al(),l===null&&(l=Oe,u=xl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),t.memoizedState={parent:n,cache:l},Ml(t),Va(t,Ye,l)):((e.lanes&a)!==0&&(Cl(e,t),In(t,null,null,a),$n()),l=e.memoizedState,u=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Va(t,Ye,n)):(n=u.cache,Va(t,Ye,n),n!==l.cache&&Tl(t,[Ye],a,!0))),it(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function va(e){e.flags|=4}function lu(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Ch())e.flags|=8192;else throw To=pi,Dl}else e.flags&=-16777217}function th(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gp(t))if(Ch())e.flags|=8192;else throw To=pi,Dl}function ji(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Rd():536870912,e.lanes|=t,dn|=t)}function ss(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Hb(e,t,a){var n=t.pendingProps;switch(gl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),fa(Ye),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wo(t)?va(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yl())),Ve(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(va(t),u!==null?(Ve(t),th(t,u)):(Ve(t),lu(t,l,null,n,a))):u?u!==e.memoizedState?(va(t),Ve(t),th(t,u)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&va(t),Ve(t),lu(t,l,e,n,a)),null;case 27:if(ia(t),a=le.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&va(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return Ve(t),null}e=F.current,Wo(t)?Rm(t):(e=lp(l,n,a),t.stateNode=e,va(t))}return Ve(t),null;case 5:if(ia(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&va(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return Ve(t),null}if(u=F.current,Wo(t))Rm(t);else{var m=Xi(le.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?m.createElement("select",{is:n.is}):m.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?m.createElement(l,{is:n.is}):m.createElement(l)}}u[ot]=t,u[gt]=n;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=u;e:switch(rt(u,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&va(t)}}return Ve(t),lu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&va(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(r(166));if(e=le.current,Wo(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=nt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[ot]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Wh(e.nodeValue,a)),e||wa(t,!0)}else e=Xi(e).createTextNode(n),e[ot]=t,t.stateNode=e}return Ve(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Wo(t),a!==null){if(e===null){if(!n)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ot]=t}else go(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else a=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(qt(t),t):(qt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Ve(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Wo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[ot]=t}else go(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),l=!1}else l=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(qt(t),t):(qt(t),null)}return qt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ji(t,t.updateQueue),Ve(t),null);case 4:return he(),e===null&&Nu(t.stateNode.containerInfo),Ve(t),null;case 10:return fa(t.type),Ve(t),null;case 19:if(_(Ge),n=t.memoizedState,n===null)return Ve(t),null;if(l=(t.flags&128)!==0,u=n.rendering,u===null)if(l)ss(n,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=bi(e),u!==null){for(t.flags|=128,ss(n,!1),e=u.updateQueue,t.updateQueue=e,ji(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)zm(a,e),a=a.sibling;return X(Ge,Ge.current&1|2),Te&&da(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Et()>Li&&(t.flags|=128,l=!0,ss(n,!1),t.lanes=4194304)}else{if(!l)if(e=bi(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ji(t,e),ss(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!Te)return Ve(t),null}else 2*Et()-n.renderingStartTime>Li&&a!==536870912&&(t.flags|=128,l=!0,ss(n,!1),t.lanes=4194304);n.isBackwards?(u.sibling=t.child,t.child=u):(e=n.last,e!==null?e.sibling=u:t.child=u,n.last=u)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Et(),e.sibling=null,a=Ge.current,X(Ge,l?a&1|2:a&1),Te&&da(t,n.treeForkCount),e):(Ve(t),null);case 22:case 23:return qt(t),Ol(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),a=t.updateQueue,a!==null&&ji(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&_(bo),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),fa(Ye),Ve(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Pb(e,t){switch(gl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fa(Ye),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ia(t),null;case 31:if(t.memoizedState!==null){if(qt(t),t.alternate===null)throw Error(r(340));go()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));go()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Ge),null;case 4:return he(),null;case 10:return fa(t.type),null;case 22:case 23:return qt(t),Ol(),e!==null&&_(bo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fa(Ye),null;case 25:return null;default:return null}}function ah(e,t){switch(gl(t),t.tag){case 3:fa(Ye),he();break;case 26:case 27:case 5:ia(t);break;case 4:he();break;case 31:t.memoizedState!==null&&qt(t);break;case 13:qt(t);break;case 19:_(Ge);break;case 10:fa(t.type);break;case 22:case 23:qt(t),Ol(),e!==null&&_(bo);break;case 24:fa(Ye)}}function is(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var u=a.create,m=a.inst;n=u(),m.destroy=n}a=a.next}while(a!==l)}}catch(v){Ce(t,t.return,v)}}function Pa(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var u=l.next;n=u;do{if((n.tag&e)===e){var m=n.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,l=t;var x=a,C=v;try{C()}catch(R){Ce(l,x,R)}}}n=n.next}while(n!==u)}}catch(R){Ce(t,t.return,R)}}function oh(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Jm(t,a)}catch(n){Ce(e,e.return,n)}}}function nh(e,t,a){a.props=Ao(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ce(e,t,n)}}function rs(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){Ce(e,t,l)}}function ta(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){Ce(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ce(e,t,l)}else a.current=null}function sh(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){Ce(e,e.return,l)}}function uu(e,t,a){try{var n=e.stateNode;uS(n,e.type,a,t),n[gt]=t}catch(l){Ce(e,e.return,l)}}function ih(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ih(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function du(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=la));else if(n!==4&&(n===27&&Za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(du(e,t,a),e=e.sibling;e!==null;)du(e,t,a),e=e.sibling}function Ri(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ri(e,t,a),e=e.sibling;e!==null;)Ri(e,t,a),e=e.sibling}function rh(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);rt(t,n,a),t[ot]=e,t[gt]=a}catch(u){Ce(e,e.return,u)}}var ya=!1,Ze=!1,mu=!1,lh=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Qb(e,t){if(e=e.containerInfo,Ru=er,e=bm(e),sl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var m=0,v=-1,x=-1,C=0,R=0,V=e,q=null;t:for(;;){for(var N;V!==a||l!==0&&V.nodeType!==3||(v=m+l),V!==u||n!==0&&V.nodeType!==3||(x=m+n),V.nodeType===3&&(m+=V.nodeValue.length),(N=V.firstChild)!==null;)q=V,V=N;for(;;){if(V===e)break t;if(q===a&&++C===l&&(v=m),q===u&&++R===n&&(x=m),(N=V.nextSibling)!==null)break;V=q,q=V.parentNode}V=N}a=v===-1||x===-1?null:{start:v,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(wu={focusedElem:e,selectionRange:a},er=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,l=u.memoizedProps,u=u.memoizedState,n=a.stateNode;try{var I=Ao(a.type,l);e=n.getSnapshotBeforeUpdate(I,u),n.__reactInternalSnapshotBeforeUpdate=e}catch(ue){Ce(a,a.return,ue)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Lu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function uh(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),n&4&&is(5,a);break;case 1:if(Sa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){Ce(a,a.return,m)}else{var l=Ao(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ce(a,a.return,m)}}n&64&&oh(a),n&512&&rs(a,a.return);break;case 3:if(Sa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Jm(e,t)}catch(m){Ce(a,a.return,m)}}break;case 27:t===null&&n&4&&rh(a);case 26:case 5:Sa(e,a),t===null&&n&4&&sh(a),n&512&&rs(a,a.return);break;case 12:Sa(e,a);break;case 31:Sa(e,a),n&4&&mh(e,a);break;case 13:Sa(e,a),n&4&&fh(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Wb.bind(null,a),vS(e,a))));break;case 22:if(n=a.memoizedState!==null||ya,!n){t=t!==null&&t.memoizedState!==null||Ze,l=ya;var u=Ze;ya=n,(Ze=t)&&!u?Ta(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),ya=l,Ze=u}break;case 30:break;default:Sa(e,a)}}function ch(e){var t=e.alternate;t!==null&&(e.alternate=null,ch(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,yt=!1;function ba(e,t,a){for(a=a.child;a!==null;)dh(e,t,a),a=a.sibling}function dh(e,t,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(On,a)}catch{}switch(a.tag){case 26:Ze||ta(a,t),ba(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||ta(a,t);var n=Le,l=yt;Za(a.type)&&(Le=a.stateNode,yt=!1),ba(e,t,a),gs(a.stateNode),Le=n,yt=l;break;case 5:Ze||ta(a,t);case 6:if(n=Le,l=yt,Le=null,ba(e,t,a),Le=n,yt=l,Le!==null)if(yt)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(a.stateNode)}catch(u){Ce(a,t,u)}else try{Le.removeChild(a.stateNode)}catch(u){Ce(a,t,u)}break;case 18:Le!==null&&(yt?(e=Le,op(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bn(e)):op(Le,a.stateNode));break;case 4:n=Le,l=yt,Le=a.stateNode.containerInfo,yt=!0,ba(e,t,a),Le=n,yt=l;break;case 0:case 11:case 14:case 15:Pa(2,a,t),Ze||Pa(4,a,t),ba(e,t,a);break;case 1:Ze||(ta(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&nh(a,t,n)),ba(e,t,a);break;case 21:ba(e,t,a);break;case 22:Ze=(n=Ze)||a.memoizedState!==null,ba(e,t,a),Ze=n;break;default:ba(e,t,a)}}function mh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bn(e)}catch(a){Ce(t,t.return,a)}}}function fh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bn(e)}catch(a){Ce(t,t.return,a)}}function Gb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new lh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new lh),t;default:throw Error(r(435,e.tag))}}function wi(e,t){var a=Gb(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=$b.bind(null,e,n);n.then(l,l)}})}function bt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],u=e,m=t,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(Za(v.type)){Le=v.stateNode,yt=!1;break e}break;case 5:Le=v.stateNode,yt=!1;break e;case 3:case 4:Le=v.stateNode.containerInfo,yt=!0;break e}v=v.return}if(Le===null)throw Error(r(160));dh(u,m,l),Le=null,yt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hh(t,e),t=t.sibling}var Xt=null;function hh(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),St(e),n&4&&(Pa(3,e,e.return),is(3,e),Pa(5,e,e.return));break;case 1:bt(t,e),St(e),n&512&&(Ze||a===null||ta(a,a.return)),n&64&&ya&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Xt;if(bt(t,e),St(e),n&512&&(Ze||a===null||ta(a,a.return)),n&4){var u=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":u=l.getElementsByTagName("title")[0],(!u||u[wn]||u[ot]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(n),l.head.insertBefore(u,l.querySelector("head > title"))),rt(u,n,a),u[ot]=e,et(u),n=u;break e;case"link":var m=hp("link","href",l).get(n+(a.href||""));if(m){for(var v=0;v<m.length;v++)if(u=m[v],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(v,1);break t}}u=l.createElement(n),rt(u,n,a),l.head.appendChild(u);break;case"meta":if(m=hp("meta","content",l).get(n+(a.content||""))){for(v=0;v<m.length;v++)if(u=m[v],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(v,1);break t}}u=l.createElement(n),rt(u,n,a),l.head.appendChild(u);break;default:throw Error(r(468,n))}u[ot]=e,et(u),n=u}e.stateNode=n}else pp(l,e.type,e.stateNode);else e.stateNode=fp(l,n,e.memoizedProps);else u!==n?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,n===null?pp(l,e.type,e.stateNode):fp(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&uu(e,e.memoizedProps,a.memoizedProps)}break;case 27:bt(t,e),St(e),n&512&&(Ze||a===null||ta(a,a.return)),a!==null&&n&4&&uu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(bt(t,e),St(e),n&512&&(Ze||a===null||ta(a,a.return)),e.flags&32){l=e.stateNode;try{Po(l,"")}catch(I){Ce(e,e.return,I)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,uu(e,l,a!==null?a.memoizedProps:l)),n&1024&&(mu=!0);break;case 6:if(bt(t,e),St(e),n&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(I){Ce(e,e.return,I)}}break;case 3:if(Fi=null,l=Xt,Xt=Zi(t.containerInfo),bt(t,e),Xt=l,St(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(I){Ce(e,e.return,I)}mu&&(mu=!1,ph(e));break;case 4:n=Xt,Xt=Zi(e.stateNode.containerInfo),bt(t,e),St(e),Xt=n;break;case 12:bt(t,e),St(e);break;case 31:bt(t,e),St(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wi(e,n)));break;case 13:bt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_i=Et()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wi(e,n)));break;case 22:l=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,C=ya,R=Ze;if(ya=C||l,Ze=R||x,bt(t,e),Ze=R,ya=C,St(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||x||ya||Ze||Do(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(u=x.stateNode,l)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=x.stateNode;var V=x.memoizedProps.style,q=V!=null&&V.hasOwnProperty("display")?V.display:null;v.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(I){Ce(x,x.return,I)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(I){Ce(x,x.return,I)}}}else if(t.tag===18){if(a===null){x=t;try{var N=x.stateNode;l?np(N,!0):np(x.stateNode,!1)}catch(I){Ce(x,x.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,wi(e,a))));break;case 19:bt(t,e),St(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wi(e,n)));break;case 30:break;case 21:break;default:bt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(ih(n)){a=n;break}n=n.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var l=a.stateNode,u=cu(e);Ri(e,u,l);break;case 5:var m=a.stateNode;a.flags&32&&(Po(m,""),a.flags&=-33);var v=cu(e);Ri(e,v,m);break;case 3:case 4:var x=a.stateNode.containerInfo,C=cu(e);du(e,C,x);break;default:throw Error(r(161))}}catch(R){Ce(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ph(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ph(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uh(e,t.alternate,t),t=t.sibling}function Do(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pa(4,t,t.return),Do(t);break;case 1:ta(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&nh(t,t.return,a),Do(t);break;case 27:gs(t.stateNode);case 26:case 5:ta(t,t.return),Do(t);break;case 22:t.memoizedState===null&&Do(t);break;case 30:Do(t);break;default:Do(t)}e=e.sibling}}function Ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:Ta(l,u,a),is(4,u);break;case 1:if(Ta(l,u,a),n=u,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){Ce(n,n.return,C)}if(n=u,l=n.updateQueue,l!==null){var v=n.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)Ym(x[l],v)}catch(C){Ce(n,n.return,C)}}a&&m&64&&oh(u),rs(u,u.return);break;case 27:rh(u);case 26:case 5:Ta(l,u,a),a&&n===null&&m&4&&sh(u),rs(u,u.return);break;case 12:Ta(l,u,a);break;case 31:Ta(l,u,a),a&&m&4&&mh(l,u);break;case 13:Ta(l,u,a),a&&m&4&&fh(l,u);break;case 22:u.memoizedState===null&&Ta(l,u,a),rs(u,u.return);break;case 30:break;default:Ta(l,u,a)}t=t.sibling}}function fu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xn(a))}function hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xn(e))}function Zt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gh(e,t,a,n),t=t.sibling}function gh(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Zt(e,t,a,n),l&2048&&is(9,t);break;case 1:Zt(e,t,a,n);break;case 3:Zt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xn(e)));break;case 12:if(l&2048){Zt(e,t,a,n),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,v=u.onPostCommit;typeof v=="function"&&v(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Ce(t,t.return,x)}}else Zt(e,t,a,n);break;case 31:Zt(e,t,a,n);break;case 13:Zt(e,t,a,n);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?Zt(e,t,a,n):ls(e,t):u._visibility&2?Zt(e,t,a,n):(u._visibility|=2,ln(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&fu(m,t);break;case 24:Zt(e,t,a,n),l&2048&&hu(t.alternate,t);break;default:Zt(e,t,a,n)}}function ln(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,m=t,v=a,x=n,C=m.flags;switch(m.tag){case 0:case 11:case 15:ln(u,m,v,x,l),is(8,m);break;case 23:break;case 22:var R=m.stateNode;m.memoizedState!==null?R._visibility&2?ln(u,m,v,x,l):ls(u,m):(R._visibility|=2,ln(u,m,v,x,l)),l&&C&2048&&fu(m.alternate,m);break;case 24:ln(u,m,v,x,l),l&&C&2048&&hu(m.alternate,m);break;default:ln(u,m,v,x,l)}t=t.sibling}}function ls(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:ls(a,n),l&2048&&fu(n.alternate,n);break;case 24:ls(a,n),l&2048&&hu(n.alternate,n);break;default:ls(a,n)}t=t.sibling}}var us=8192;function un(e,t,a){if(e.subtreeFlags&us)for(e=e.child;e!==null;)vh(e,t,a),e=e.sibling}function vh(e,t,a){switch(e.tag){case 26:un(e,t,a),e.flags&us&&e.memoizedState!==null&&qS(a,Xt,e.memoizedState,e.memoizedProps);break;case 5:un(e,t,a);break;case 3:case 4:var n=Xt;Xt=Zi(e.stateNode.containerInfo),un(e,t,a),Xt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=us,us=16777216,un(e,t,a),us=n):un(e,t,a));break;default:un(e,t,a)}}function yh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function cs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];tt=n,Sh(n,e)}yh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bh(e),e=e.sibling}function bh(e){switch(e.tag){case 0:case 11:case 15:cs(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:cs(e);break;case 12:cs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vi(e)):cs(e);break;default:cs(e)}}function Vi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];tt=n,Sh(n,e)}yh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pa(8,t,t.return),Vi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Vi(t));break;default:Vi(t)}e=e.sibling}}function Sh(e,t){for(;tt!==null;){var a=tt;switch(a.tag){case 0:case 11:case 15:Pa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Xn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,tt=n;else e:for(a=e;tt!==null;){n=tt;var l=n.sibling,u=n.return;if(ch(n),n===a){tt=null;break e}if(l!==null){l.return=u,tt=l;break e}tt=u}}}var kb={getCacheForType:function(e){var t=st(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return st(Ye).controller.signal}},Yb=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Oe=null,ge=null,ye=0,Me=0,Nt=null,Qa=!1,cn=!1,pu=!1,xa=0,He=0,Ga=0,Mo=0,gu=0,Ot=0,dn=0,ds=null,Tt=null,vu=!1,_i=0,Th=0,Li=1/0,Bi=null,ka=null,Fe=0,Ya=null,mn=null,Ea=0,yu=0,bu=null,xh=null,ms=0,Su=null;function jt(){return(Ae&2)!==0&&ye!==0?ye&-ye:j.T!==null?Mu():Ld()}function Eh(){if(Ot===0)if((ye&536870912)===0||Te){var e=Js;Js<<=1,(Js&3932160)===0&&(Js=262144),Ot=e}else Ot=536870912;return e=zt.current,e!==null&&(e.flags|=32),Ot}function xt(e,t,a){(e===Oe&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(fn(e,0),Ja(e,ye,Ot,!1)),Rn(e,a),((Ae&2)===0||e!==Oe)&&(e===Oe&&((Ae&2)===0&&(Mo|=a),He===4&&Ja(e,ye,Ot,!1)),aa(e))}function Ah(e,t,a){if((Ae&6)!==0)throw Error(r(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||jn(e,t),l=n?Zb(e,t):xu(e,t,!0),u=n;do{if(l===0){cn&&!n&&Ja(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!Jb(a)){l=xu(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var v=e;l=ds;var x=v.current.memoizedState.isDehydrated;if(x&&(fn(v,m).flags|=256),m=xu(v,m,!1),m!==2){if(pu&&!x){v.errorRecoveryDisabledLanes|=u,Mo|=u,l=4;break e}u=Tt,Tt=l,u!==null&&(Tt===null?Tt=u:Tt.push.apply(Tt,u))}l=m}if(u=!1,l!==2)continue}}if(l===1){fn(e,0),Ja(e,t,0,!0);break}e:{switch(n=e,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Ja(n,t,Ot,!Qa);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(l=_i+300-Et(),10<l)){if(Ja(n,t,Ot,!Qa),Zs(n,0,!0)!==0)break e;Ea=t,n.timeoutHandle=tp(Dh.bind(null,n,a,Tt,Bi,vu,t,Ot,Mo,dn,Qa,u,"Throttled",-0,0),l);break e}Dh(n,a,Tt,Bi,vu,t,Ot,Mo,dn,Qa,u,null,-0,0)}}break}while(!0);aa(e)}function Dh(e,t,a,n,l,u,m,v,x,C,R,V,q,N){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},vh(t,u,V);var I=(u&62914560)===u?_i-Et():(u&4194048)===u?Th-Et():0;if(I=NS(V,I),I!==null){Ea=u,e.cancelPendingCommit=I(Rh.bind(null,e,t,u,a,n,l,m,v,x,R,V,null,q,N)),Ja(e,u,m,!C);return}}Rh(e,t,u,a,n,l,m,v,x)}function Jb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],u=l.getSnapshot;l=l.value;try{if(!Mt(u(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ja(e,t,a,n){t&=~gu,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var u=31-Dt(l),m=1<<u;n[u]=-1,l&=~m}a!==0&&wd(e,a,t)}function Ui(){return(Ae&6)===0?(fs(0),!1):!0}function Tu(){if(ge!==null){if(Me===0)var e=ge.return;else e=ge,ma=vo=null,Ll(e),an=null,Kn=0,e=ge;for(;e!==null;)ah(e.alternate,e),e=e.return;ge=null}}function fn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,mS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,Tu(),Oe=e,ge=a=ca(e.current,null),ye=t,Me=0,Nt=null,Qa=!1,cn=jn(e,t),pu=!1,dn=Ot=gu=Mo=Ga=He=0,Tt=ds=null,vu=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-Dt(n),u=1<<l;t|=e[l],n&=~u}return xa=t,ii(),a}function Mh(e,t){de=null,j.H=os,t===tn||t===hi?(t=Pm(),Me=3):t===Dl?(t=Pm(),Me=4):Me=t===Il?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nt=t,ge===null&&(He=1,zi(e,Lt(t,e.current)))}function Ch(){var e=zt.current;return e===null?!0:(ye&4194048)===ye?Pt===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Pt:!1}function zh(){var e=j.H;return j.H=os,e===null?os:e}function qh(){var e=j.A;return j.A=kb,e}function Hi(){He=4,Qa||(ye&4194048)!==ye&&zt.current!==null||(cn=!0),(Ga&134217727)===0&&(Mo&134217727)===0||Oe===null||Ja(Oe,ye,Ot,!1)}function xu(e,t,a){var n=Ae;Ae|=2;var l=zh(),u=qh();(Oe!==e||ye!==t)&&(Bi=null,fn(e,t)),t=!1;var m=He;e:do try{if(Me!==0&&ge!==null){var v=ge,x=Nt;switch(Me){case 8:Tu(),m=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var C=Me;if(Me=0,Nt=null,hn(e,v,x,C),a&&cn){m=0;break e}break;default:C=Me,Me=0,Nt=null,hn(e,v,x,C)}}Xb(),m=He;break}catch(R){Mh(e,R)}while(!0);return t&&e.shellSuspendCounter++,ma=vo=null,Ae=n,j.H=l,j.A=u,ge===null&&(Oe=null,ye=0,ii()),m}function Xb(){for(;ge!==null;)Nh(ge)}function Zb(e,t){var a=Ae;Ae|=2;var n=zh(),l=qh();Oe!==e||ye!==t?(Bi=null,Li=Et()+500,fn(e,t)):cn=jn(e,t);e:do try{if(Me!==0&&ge!==null){t=ge;var u=Nt;t:switch(Me){case 1:Me=0,Nt=null,hn(e,t,u,1);break;case 2:case 9:if(Um(u)){Me=0,Nt=null,Oh(t);break}t=function(){Me!==2&&Me!==9||Oe!==e||(Me=7),aa(e)},u.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:Um(u)?(Me=0,Nt=null,Oh(t)):(Me=0,Nt=null,hn(e,t,u,7));break;case 5:var m=null;switch(ge.tag){case 26:m=ge.memoizedState;case 5:case 27:var v=ge;if(m?gp(m):v.stateNode.complete){Me=0,Nt=null;var x=v.sibling;if(x!==null)ge=x;else{var C=v.return;C!==null?(ge=C,Pi(C)):ge=null}break t}}Me=0,Nt=null,hn(e,t,u,5);break;case 6:Me=0,Nt=null,hn(e,t,u,6);break;case 8:Tu(),He=6;break e;default:throw Error(r(462))}}Kb();break}catch(R){Mh(e,R)}while(!0);return ma=vo=null,j.H=n,j.A=l,Ae=a,ge!==null?0:(Oe=null,ye=0,ii(),He)}function Kb(){for(;ge!==null&&!y0();)Nh(ge)}function Nh(e){var t=eh(e.alternate,e,xa);e.memoizedProps=e.pendingProps,t===null?Pi(e):ge=t}function Oh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Zf(a,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=Zf(a,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Ll(t);default:ah(a,t),t=ge=zm(t,xa),t=eh(a,t,xa)}e.memoizedProps=e.pendingProps,t===null?Pi(e):ge=t}function hn(e,t,a,n){ma=vo=null,Ll(t),an=null,Kn=0;var l=t.return;try{if(Lb(e,l,t,a,ye)){He=1,zi(e,Lt(a,e.current)),ge=null;return}}catch(u){if(l!==null)throw ge=l,u;He=1,zi(e,Lt(a,e.current)),ge=null;return}t.flags&32768?(Te||n===1?e=!0:cn||(ye&536870912)!==0?e=!1:(Qa=e=!0,(n===2||n===9||n===3||n===6)&&(n=zt.current,n!==null&&n.tag===13&&(n.flags|=16384))),jh(t,e)):Pi(t)}function Pi(e){var t=e;do{if((t.flags&32768)!==0){jh(t,Qa);return}e=t.return;var a=Hb(t.alternate,t,xa);if(a!==null){ge=a;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);He===0&&(He=5)}function jh(e,t){do{var a=Pb(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);He=6,ge=null}function Rh(e,t,a,n,l,u,m,v,x){e.cancelPendingCommit=null;do Qi();while(Fe!==0);if((Ae&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=cl,z0(e,a,u,m,v,x),e===Oe&&(ge=Oe=null,ye=0),mn=t,Ya=e,Ea=a,yu=u,bu=l,xh=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ib(ks,function(){return Bh(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=j.T,j.T=null,l=P.p,P.p=2,m=Ae,Ae|=4;try{Qb(e,t,a)}finally{Ae=m,P.p=l,j.T=n}}Fe=1,wh(),Vh(),_h()}}function wh(){if(Fe===1){Fe=0;var e=Ya,t=mn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var n=P.p;P.p=2;var l=Ae;Ae|=4;try{hh(t,e);var u=wu,m=bm(e.containerInfo),v=u.focusedElem,x=u.selectionRange;if(m!==v&&v&&v.ownerDocument&&ym(v.ownerDocument.documentElement,v)){if(x!==null&&sl(v)){var C=x.start,R=x.end;if(R===void 0&&(R=C),"selectionStart"in v)v.selectionStart=C,v.selectionEnd=Math.min(R,v.value.length);else{var V=v.ownerDocument||document,q=V&&V.defaultView||window;if(q.getSelection){var N=q.getSelection(),I=v.textContent.length,ue=Math.min(x.start,I),Ne=x.end===void 0?ue:Math.min(x.end,I);!N.extend&&ue>Ne&&(m=Ne,Ne=ue,ue=m);var D=vm(v,ue),E=vm(v,Ne);if(D&&E&&(N.rangeCount!==1||N.anchorNode!==D.node||N.anchorOffset!==D.offset||N.focusNode!==E.node||N.focusOffset!==E.offset)){var M=V.createRange();M.setStart(D.node,D.offset),N.removeAllRanges(),ue>Ne?(N.addRange(M),N.extend(E.node,E.offset)):(M.setEnd(E.node,E.offset),N.addRange(M))}}}}for(V=[],N=v;N=N.parentNode;)N.nodeType===1&&V.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<V.length;v++){var w=V[v];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}er=!!Ru,wu=Ru=null}finally{Ae=l,P.p=n,j.T=a}}e.current=t,Fe=2}}function Vh(){if(Fe===2){Fe=0;var e=Ya,t=mn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var n=P.p;P.p=2;var l=Ae;Ae|=4;try{uh(e,t.alternate,t)}finally{Ae=l,P.p=n,j.T=a}}Fe=3}}function _h(){if(Fe===4||Fe===3){Fe=0,b0();var e=Ya,t=mn,a=Ea,n=xh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,mn=Ya=null,Lh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ka=null),Hr(a),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=j.T,l=P.p,P.p=2,j.T=null;try{for(var u=e.onRecoverableError,m=0;m<n.length;m++){var v=n[m];u(v.value,{componentStack:v.stack})}}finally{j.T=t,P.p=l}}(Ea&3)!==0&&Qi(),aa(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Su?ms++:(ms=0,Su=e):ms=0,fs(0)}}function Lh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xn(t)))}function Qi(){return wh(),Vh(),_h(),Bh()}function Bh(){if(Fe!==5)return!1;var e=Ya,t=yu;yu=0;var a=Hr(Ea),n=j.T,l=P.p;try{P.p=32>a?32:a,j.T=null,a=bu,bu=null;var u=Ya,m=Ea;if(Fe=0,mn=Ya=null,Ea=0,(Ae&6)!==0)throw Error(r(331));var v=Ae;if(Ae|=4,bh(u.current),gh(u,u.current,m,a),Ae=v,fs(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(On,u)}catch{}return!0}finally{P.p=l,j.T=n,Lh(e,t)}}function Uh(e,t,a){t=Lt(a,t),t=$l(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Rn(e,2),aa(e))}function Ce(e,t,a){if(e.tag===3)Uh(e,e,a);else for(;t!==null;){if(t.tag===3){Uh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ka===null||!ka.has(n))){e=Lt(a,e),a=Hf(2),n=Ba(t,a,2),n!==null&&(Pf(a,n,t,e),Rn(n,2),aa(n));break}}t=t.return}}function Eu(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Yb;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(pu=!0,l.add(a),e=Fb.bind(null,e,t,a),t.then(e,e))}function Fb(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Oe===e&&(ye&a)===a&&(He===4||He===3&&(ye&62914560)===ye&&300>Et()-_i?(Ae&2)===0&&fn(e,0):gu|=a,dn===ye&&(dn=0)),aa(e)}function Hh(e,t){t===0&&(t=Rd()),e=ho(e,t),e!==null&&(Rn(e,t),aa(e))}function Wb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Hh(e,a)}function $b(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(t),Hh(e,a)}function Ib(e,t){return _r(e,t)}var Gi=null,pn=null,Au=!1,ki=!1,Du=!1,Xa=0;function aa(e){e!==pn&&e.next===null&&(pn===null?Gi=pn=e:pn=pn.next=e),ki=!0,Au||(Au=!0,tS())}function fs(e,t){if(!Du&&ki){Du=!0;do for(var a=!1,n=Gi;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var u=0;else{var m=n.suspendedLanes,v=n.pingedLanes;u=(1<<31-Dt(42|e)+1)-1,u&=l&~(m&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,kh(n,u))}else u=ye,u=Zs(n,n===Oe?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||jn(n,u)||(a=!0,kh(n,u));n=n.next}while(a);Du=!1}}function eS(){Ph()}function Ph(){ki=Au=!1;var e=0;Xa!==0&&dS()&&(e=Xa);for(var t=Et(),a=null,n=Gi;n!==null;){var l=n.next,u=Qh(n,t);u===0?(n.next=null,a===null?Gi=l:a.next=l,l===null&&(pn=a)):(a=n,(e!==0||(u&3)!==0)&&(ki=!0)),n=l}Fe!==0&&Fe!==5||fs(e),Xa!==0&&(Xa=0)}function Qh(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-Dt(u),v=1<<m,x=l[m];x===-1?((v&a)===0||(v&n)!==0)&&(l[m]=C0(v,t)):x<=t&&(e.expiredLanes|=v),u&=~v}if(t=Oe,a=ye,a=Zs(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Lr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||jn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Lr(n),Hr(a)){case 2:case 8:a=Od;break;case 32:a=ks;break;case 268435456:a=jd;break;default:a=ks}return n=Gh.bind(null,e),a=_r(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Lr(n),e.callbackPriority=2,e.callbackNode=null,2}function Gh(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Qi()&&e.callbackNode!==a)return null;var n=ye;return n=Zs(e,e===Oe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Ah(e,n,t),Qh(e,Et()),e.callbackNode!=null&&e.callbackNode===a?Gh.bind(null,e):null)}function kh(e,t){if(Qi())return null;Ah(e,t,!0)}function tS(){fS(function(){(Ae&6)!==0?_r(Nd,eS):Ph()})}function Mu(){if(Xa===0){var e=Io;e===0&&(e=Ys,Ys<<=1,(Ys&261888)===0&&(Ys=256)),Xa=e}return Xa}function Yh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$s(""+e)}function Jh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function aS(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var u=Yh((l[gt]||null).action),m=n.submitter;m&&(t=(t=m[gt]||null)?Yh(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var v=new ai("action","action",null,n,l);e.push({event:v,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Xa!==0){var x=m?Jh(l,m):new FormData(l);Jl(a,{pending:!0,data:x,method:l.method,action:u},null,x)}}else typeof u=="function"&&(v.preventDefault(),x=m?Jh(l,m):new FormData(l),Jl(a,{pending:!0,data:x,method:l.method,action:u},u,x))},currentTarget:l}]})}}for(var Cu=0;Cu<ul.length;Cu++){var zu=ul[Cu],oS=zu.toLowerCase(),nS=zu[0].toUpperCase()+zu.slice(1);Jt(oS,"on"+nS)}Jt(xm,"onAnimationEnd"),Jt(Em,"onAnimationIteration"),Jt(Am,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(Sb,"onTransitionRun"),Jt(Tb,"onTransitionStart"),Jt(xb,"onTransitionCancel"),Jt(Dm,"onTransitionEnd"),Uo("onMouseEnter",["mouseout","mouseover"]),Uo("onMouseLeave",["mouseout","mouseover"]),Uo("onPointerEnter",["pointerout","pointerover"]),Uo("onPointerLeave",["pointerout","pointerover"]),uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),uo("onBeforeInput",["compositionend","keypress","textInput","paste"]),uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hs));function Xh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var u=void 0;if(t)for(var m=n.length-1;0<=m;m--){var v=n[m],x=v.instance,C=v.currentTarget;if(v=v.listener,x!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=C;try{u(l)}catch(R){si(R)}l.currentTarget=null,u=x}else for(m=0;m<n.length;m++){if(v=n[m],x=v.instance,C=v.currentTarget,v=v.listener,x!==u&&l.isPropagationStopped())break e;u=v,l.currentTarget=C;try{u(l)}catch(R){si(R)}l.currentTarget=null,u=x}}}}function ve(e,t){var a=t[Pr];a===void 0&&(a=t[Pr]=new Set);var n=e+"__bubble";a.has(n)||(Zh(t,e,2,!1),a.add(n))}function qu(e,t,a){var n=0;t&&(n|=4),Zh(a,e,n,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function Nu(e){if(!e[Yi]){e[Yi]=!0,Hd.forEach(function(a){a!=="selectionchange"&&(sS.has(a)||qu(a,!1,e),qu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,qu("selectionchange",!1,t))}}function Zh(e,t,a,n){switch(Ep(t)){case 2:var l=RS;break;case 8:l=wS;break;default:l=Yu}a=l.bind(null,t,a,e),l=void 0,!Fr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Ou(e,t,a,n,l){var u=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var m=n.tag;if(m===3||m===4){var v=n.stateNode.containerInfo;if(v===l)break;if(m===4)for(m=n.return;m!==null;){var x=m.tag;if((x===3||x===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;v!==null;){if(m=_o(v),m===null)return;if(x=m.tag,x===5||x===6||x===26||x===27){n=u=m;continue e}v=v.parentNode}}n=n.return}$d(function(){var C=u,R=Zr(a),V=[];e:{var q=Mm.get(e);if(q!==void 0){var N=ai,I=e;switch(e){case"keypress":if(ei(a)===0)break e;case"keydown":case"keyup":N=$0;break;case"focusin":I="focus",N=el;break;case"focusout":I="blur",N=el;break;case"beforeblur":case"afterblur":N=el;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=tb;break;case xm:case Em:case Am:N=G0;break;case Dm:N=ob;break;case"scroll":case"scrollend":N=B0;break;case"wheel":N=sb;break;case"copy":case"cut":case"paste":N=Y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=om;break;case"toggle":case"beforetoggle":N=rb}var ue=(t&4)!==0,Ne=!ue&&(e==="scroll"||e==="scrollend"),D=ue?q!==null?q+"Capture":null:q;ue=[];for(var E=C,M;E!==null;){var w=E;if(M=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||M===null||D===null||(w=_n(E,D),w!=null&&ue.push(ps(E,w,M))),Ne)break;E=E.return}0<ue.length&&(q=new N(q,I,null,a,R),V.push({event:q,listeners:ue}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",q&&a!==Xr&&(I=a.relatedTarget||a.fromElement)&&(_o(I)||I[Vo]))break e;if((N||q)&&(q=R.window===R?R:(q=R.ownerDocument)?q.defaultView||q.parentWindow:window,N?(I=a.relatedTarget||a.toElement,N=C,I=I?_o(I):null,I!==null&&(Ne=f(I),ue=I.tag,I!==Ne||ue!==5&&ue!==27&&ue!==6)&&(I=null)):(N=null,I=C),N!==I)){if(ue=tm,w="onMouseLeave",D="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ue=om,w="onPointerLeave",D="onPointerEnter",E="pointer"),Ne=N==null?q:Vn(N),M=I==null?q:Vn(I),q=new ue(w,E+"leave",N,a,R),q.target=Ne,q.relatedTarget=M,w=null,_o(R)===C&&(ue=new ue(D,E+"enter",I,a,R),ue.target=M,ue.relatedTarget=Ne,w=ue),Ne=w,N&&I)t:{for(ue=iS,D=N,E=I,M=0,w=D;w;w=ue(w))M++;w=0;for(var re=E;re;re=ue(re))w++;for(;0<M-w;)D=ue(D),M--;for(;0<w-M;)E=ue(E),w--;for(;M--;){if(D===E||E!==null&&D===E.alternate){ue=D;break t}D=ue(D),E=ue(E)}ue=null}else ue=null;N!==null&&Kh(V,q,N,ue,!1),I!==null&&Ne!==null&&Kh(V,Ne,I,ue,!0)}}e:{if(q=C?Vn(C):window,N=q.nodeName&&q.nodeName.toLowerCase(),N==="select"||N==="input"&&q.type==="file")var xe=dm;else if(um(q))if(mm)xe=vb;else{xe=pb;var oe=hb}else N=q.nodeName,!N||N.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?C&&Jr(C.elementType)&&(xe=dm):xe=gb;if(xe&&(xe=xe(e,C))){cm(V,xe,a,R);break e}oe&&oe(e,q,C),e==="focusout"&&C&&q.type==="number"&&C.memoizedProps.value!=null&&Yr(q,"number",q.value)}switch(oe=C?Vn(C):window,e){case"focusin":(um(oe)||oe.contentEditable==="true")&&(Yo=oe,il=C,kn=null);break;case"focusout":kn=il=Yo=null;break;case"mousedown":rl=!0;break;case"contextmenu":case"mouseup":case"dragend":rl=!1,Sm(V,a,R);break;case"selectionchange":if(bb)break;case"keydown":case"keyup":Sm(V,a,R)}var me;if(al)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else ko?rm(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(nm&&a.locale!=="ko"&&(ko||be!=="onCompositionStart"?be==="onCompositionEnd"&&ko&&(me=Id()):(Oa=R,Wr="value"in Oa?Oa.value:Oa.textContent,ko=!0)),oe=Ji(C,be),0<oe.length&&(be=new am(be,e,null,a,R),V.push({event:be,listeners:oe}),me?be.data=me:(me=lm(a),me!==null&&(be.data=me)))),(me=ub?cb(e,a):db(e,a))&&(be=Ji(C,"onBeforeInput"),0<be.length&&(oe=new am("onBeforeInput","beforeinput",null,a,R),V.push({event:oe,listeners:be}),oe.data=me)),aS(V,e,C,a,R)}Xh(V,t)})}function ps(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ji(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=_n(e,a),l!=null&&n.unshift(ps(e,l,u)),l=_n(e,t),l!=null&&n.push(ps(e,l,u))),e.tag===3)return n;e=e.return}return[]}function iS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kh(e,t,a,n,l){for(var u=t._reactName,m=[];a!==null&&a!==n;){var v=a,x=v.alternate,C=v.stateNode;if(v=v.tag,x!==null&&x===n)break;v!==5&&v!==26&&v!==27||C===null||(x=C,l?(C=_n(a,u),C!=null&&m.unshift(ps(a,C,x))):l||(C=_n(a,u),C!=null&&m.push(ps(a,C,x)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var rS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function Fh(e){return(typeof e=="string"?e:""+e).replace(rS,`
`).replace(lS,"")}function Wh(e,t){return t=Fh(t),Fh(e)===t}function qe(e,t,a,n,l,u){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Po(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Po(e,""+n);break;case"className":Fs(e,"class",n);break;case"tabIndex":Fs(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Fs(e,a,n);break;case"style":Fd(e,n,u);break;case"data":if(t!=="object"){Fs(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=$s(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&qe(e,t,"name",l.name,l,null),qe(e,t,"formEncType",l.formEncType,l,null),qe(e,t,"formMethod",l.formMethod,l,null),qe(e,t,"formTarget",l.formTarget,l,null)):(qe(e,t,"encType",l.encType,l,null),qe(e,t,"method",l.method,l,null),qe(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=$s(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=la);break;case"onScroll":n!=null&&ve("scroll",e);break;case"onScrollEnd":n!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=$s(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ks(e,"popover",n);break;case"xlinkActuate":ra(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ra(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ra(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ra(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ra(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ra(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ra(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ra(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ra(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ks(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_0.get(a)||a,Ks(e,a,n))}}function ju(e,t,a,n,l,u){switch(a){case"style":Fd(e,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Po(e,n):(typeof n=="number"||typeof n=="bigint")&&Po(e,""+n);break;case"onScroll":n!=null&&ve("scroll",e);break;case"onScrollEnd":n!=null&&ve("scrollend",e);break;case"onClick":n!=null&&(e.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),u=e[gt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof n=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ks(e,a,n)}}}function rt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var n=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var m=a[u];if(m!=null)switch(u){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:qe(e,t,u,m,a,null)}}l&&qe(e,t,"srcSet",a.srcSet,a,null),n&&qe(e,t,"src",a.src,a,null);return;case"input":ve("invalid",e);var v=u=m=l=null,x=null,C=null;for(n in a)if(a.hasOwnProperty(n)){var R=a[n];if(R!=null)switch(n){case"name":l=R;break;case"type":m=R;break;case"checked":x=R;break;case"defaultChecked":C=R;break;case"value":u=R;break;case"defaultValue":v=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:qe(e,t,n,R,a,null)}}Jd(e,u,v,x,C,m,l,!1);return;case"select":ve("invalid",e),n=m=u=null;for(l in a)if(a.hasOwnProperty(l)&&(v=a[l],v!=null))switch(l){case"value":u=v;break;case"defaultValue":m=v;break;case"multiple":n=v;default:qe(e,t,l,v,a,null)}t=u,a=m,e.multiple=!!n,t!=null?Ho(e,!!n,t,!1):a!=null&&Ho(e,!!n,a,!0);return;case"textarea":ve("invalid",e),u=l=n=null;for(m in a)if(a.hasOwnProperty(m)&&(v=a[m],v!=null))switch(m){case"value":n=v;break;case"defaultValue":l=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(91));break;default:qe(e,t,m,v,a,null)}Zd(e,n,l,u);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(n=a[x],n!=null))switch(x){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:qe(e,t,x,n,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(n=0;n<hs.length;n++)ve(hs[n],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(n=a[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:qe(e,t,C,n,a,null)}return;default:if(Jr(t)){for(R in a)a.hasOwnProperty(R)&&(n=a[R],n!==void 0&&ju(e,t,R,n,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(n=a[v],n!=null&&qe(e,t,v,n,a,null))}function uS(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,m=null,v=null,x=null,C=null,R=null;for(N in a){var V=a[N];if(a.hasOwnProperty(N)&&V!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":x=V;default:n.hasOwnProperty(N)||qe(e,t,N,null,n,V)}}for(var q in n){var N=n[q];if(V=a[q],n.hasOwnProperty(q)&&(N!=null||V!=null))switch(q){case"type":u=N;break;case"name":l=N;break;case"checked":C=N;break;case"defaultChecked":R=N;break;case"value":m=N;break;case"defaultValue":v=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,t));break;default:N!==V&&qe(e,t,q,N,n,V)}}kr(e,m,v,x,C,R,u,l);return;case"select":N=m=v=q=null;for(u in a)if(x=a[u],a.hasOwnProperty(u)&&x!=null)switch(u){case"value":break;case"multiple":N=x;default:n.hasOwnProperty(u)||qe(e,t,u,null,n,x)}for(l in n)if(u=n[l],x=a[l],n.hasOwnProperty(l)&&(u!=null||x!=null))switch(l){case"value":q=u;break;case"defaultValue":v=u;break;case"multiple":m=u;default:u!==x&&qe(e,t,l,u,n,x)}t=v,a=m,n=N,q!=null?Ho(e,!!a,q,!1):!!n!=!!a&&(t!=null?Ho(e,!!a,t,!0):Ho(e,!!a,a?[]:"",!1));return;case"textarea":N=q=null;for(v in a)if(l=a[v],a.hasOwnProperty(v)&&l!=null&&!n.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:qe(e,t,v,null,n,l)}for(m in n)if(l=n[m],u=a[m],n.hasOwnProperty(m)&&(l!=null||u!=null))switch(m){case"value":q=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&qe(e,t,m,l,n,u)}Xd(e,q,N);return;case"option":for(var I in a)if(q=a[I],a.hasOwnProperty(I)&&q!=null&&!n.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:qe(e,t,I,null,n,q)}for(x in n)if(q=n[x],N=a[x],n.hasOwnProperty(x)&&q!==N&&(q!=null||N!=null))switch(x){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:qe(e,t,x,q,n,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in a)q=a[ue],a.hasOwnProperty(ue)&&q!=null&&!n.hasOwnProperty(ue)&&qe(e,t,ue,null,n,q);for(C in n)if(q=n[C],N=a[C],n.hasOwnProperty(C)&&q!==N&&(q!=null||N!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,t));break;default:qe(e,t,C,q,n,N)}return;default:if(Jr(t)){for(var Ne in a)q=a[Ne],a.hasOwnProperty(Ne)&&q!==void 0&&!n.hasOwnProperty(Ne)&&ju(e,t,Ne,void 0,n,q);for(R in n)q=n[R],N=a[R],!n.hasOwnProperty(R)||q===N||q===void 0&&N===void 0||ju(e,t,R,q,n,N);return}}for(var D in a)q=a[D],a.hasOwnProperty(D)&&q!=null&&!n.hasOwnProperty(D)&&qe(e,t,D,null,n,q);for(V in n)q=n[V],N=a[V],!n.hasOwnProperty(V)||q===N||q==null&&N==null||qe(e,t,V,q,n,N)}function $h(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],u=l.transferSize,m=l.initiatorType,v=l.duration;if(u&&v&&$h(m)){for(m=0,v=l.responseEnd,n+=1;n<a.length;n++){var x=a[n],C=x.startTime;if(C>v)break;var R=x.transferSize,V=x.initiatorType;R&&$h(V)&&(x=x.responseEnd,m+=R*(x<v?1:(v-C)/(x-C)))}if(--n,t+=8*(u+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ru=null,wu=null;function Xi(e){return e.nodeType===9?e:e.ownerDocument}function Ih(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ep(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=null;function dS(){var e=window.event;return e&&e.type==="popstate"?e===_u?!1:(_u=e,!0):(_u=null,!1)}var tp=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,fS=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(e){return ap.resolve(null).then(e).catch(hS)}:tp;function hS(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function op(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),bn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")gs(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,gs(a);for(var u=a.firstChild;u;){var m=u.nextSibling,v=u.nodeName;u[wn]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=m}}else a==="body"&&gs(e.ownerDocument.body);a=l}while(a);bn(t)}function np(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Lu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lu(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function pS(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[wn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function gS(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qt(e.nextSibling),e===null))return null;return e}function sp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function Bu(e){return e.data==="$?"||e.data==="$~"}function Uu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vS(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hu=null;function ip(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Qt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function rp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function lp(e,t,a){switch(t=Xi(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function gs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qr(e)}var Gt=new Map,up=new Set;function Zi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=P.d;P.d={f:yS,r:bS,D:SS,C:TS,L:xS,m:ES,X:DS,S:AS,M:MS};function yS(){var e=Aa.f(),t=Ui();return e||t}function bS(e){var t=Lo(e);t!==null&&t.tag===5&&t.type==="form"?Mf(t):Aa.r(e)}var gn=typeof document>"u"?null:document;function cp(e,t,a){var n=gn;if(n&&typeof t=="string"&&t){var l=Vt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),up.has(l)||(up.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),rt(t,"link",e),et(t),n.head.appendChild(t)))}}function SS(e){Aa.D(e),cp("dns-prefetch",e,null)}function TS(e,t){Aa.C(e,t),cp("preconnect",e,t)}function xS(e,t,a){Aa.L(e,t,a);var n=gn;if(n&&e&&t){var l='link[rel="preload"][as="'+Vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Vt(a.imageSizes)+'"]')):l+='[href="'+Vt(e)+'"]';var u=l;switch(t){case"style":u=vn(e);break;case"script":u=yn(e)}Gt.has(u)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Gt.set(u,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(vs(u))||t==="script"&&n.querySelector(ys(u))||(t=n.createElement("link"),rt(t,"link",e),et(t),n.head.appendChild(t)))}}function ES(e,t){Aa.m(e,t);var a=gn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Vt(n)+'"][href="'+Vt(e)+'"]',u=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=yn(e)}if(!Gt.has(u)&&(e=b({rel:"modulepreload",href:e},t),Gt.set(u,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ys(u)))return}n=a.createElement("link"),rt(n,"link",e),et(n),a.head.appendChild(n)}}}function AS(e,t,a){Aa.S(e,t,a);var n=gn;if(n&&e){var l=Bo(n).hoistableStyles,u=vn(e);t=t||"default";var m=l.get(u);if(!m){var v={loading:0,preload:null};if(m=n.querySelector(vs(u)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Gt.get(u))&&Pu(e,a);var x=m=n.createElement("link");et(x),rt(x,"link",e),x._p=new Promise(function(C,R){x.onload=C,x.onerror=R}),x.addEventListener("load",function(){v.loading|=1}),x.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ki(m,t,n)}m={type:"stylesheet",instance:m,count:1,state:v},l.set(u,m)}}}function DS(e,t){Aa.X(e,t);var a=gn;if(a&&e){var n=Bo(a).hoistableScripts,l=yn(e),u=n.get(l);u||(u=a.querySelector(ys(l)),u||(e=b({src:e,async:!0},t),(t=Gt.get(l))&&Qu(e,t),u=a.createElement("script"),et(u),rt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(l,u))}}function MS(e,t){Aa.M(e,t);var a=gn;if(a&&e){var n=Bo(a).hoistableScripts,l=yn(e),u=n.get(l);u||(u=a.querySelector(ys(l)),u||(e=b({src:e,async:!0,type:"module"},t),(t=Gt.get(l))&&Qu(e,t),u=a.createElement("script"),et(u),rt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(l,u))}}function dp(e,t,a,n){var l=(l=le.current)?Zi(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=vn(a.href),a=Bo(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vn(a.href);var u=Bo(l).hoistableStyles,m=u.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=l.querySelector(vs(e)))&&!u._p&&(m.instance=u,m.state.loading=5),Gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gt.set(e,a),u||CS(l,e,a,m.state))),t&&n===null)throw Error(r(528,""));return m}if(t&&n!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yn(a),a=Bo(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function vn(e){return'href="'+Vt(e)+'"'}function vs(e){return'link[rel="stylesheet"]['+e+"]"}function mp(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function CS(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),rt(t,"link",a),et(t),e.head.appendChild(t))}function yn(e){return'[src="'+Vt(e)+'"]'}function ys(e){return"script[async]"+e}function fp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(n)return t.instance=n,et(n),n;var l=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),et(n),rt(n,"style",l),Ki(n,a.precedence,e),t.instance=n;case"stylesheet":l=vn(a.href);var u=e.querySelector(vs(l));if(u)return t.state.loading|=4,t.instance=u,et(u),u;n=mp(a),(l=Gt.get(l))&&Pu(n,l),u=(e.ownerDocument||e).createElement("link"),et(u);var m=u;return m._p=new Promise(function(v,x){m.onload=v,m.onerror=x}),rt(u,"link",n),t.state.loading|=4,Ki(u,a.precedence,e),t.instance=u;case"script":return u=yn(a.src),(l=e.querySelector(ys(u)))?(t.instance=l,et(l),l):(n=a,(l=Gt.get(u))&&(n=b({},a),Qu(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),et(l),rt(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Ki(n,a.precedence,e));return t.instance}function Ki(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,u=l,m=0;m<n.length;m++){var v=n[m];if(v.dataset.precedence===t)u=v;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Qu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fi=null;function hp(e,t,a){if(Fi===null){var n=new Map,l=Fi=new Map;l.set(a,n)}else l=Fi,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[wn]||u[ot]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var v=n.get(m);v?v.push(u):n.set(m,[u])}}return n}function pp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function zS(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qS(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=vn(n.href),u=t.querySelector(vs(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,et(u);return}u=t.ownerDocument||t,n=mp(n),(l=Gt.get(l))&&Pu(n,l),u=u.createElement("link"),et(u);var m=u;m._p=new Promise(function(v,x){m.onload=v,m.onerror=x}),rt(u,"link",n),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Gu=0;function NS(e,t){return e.stylesheets&&e.count===0&&Ii(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ii(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Gu===0&&(Gu=62500*cS());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ii(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Gu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Wi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ii(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $i=null;function Ii(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$i=new Map,t.forEach(OS,e),$i=null,Wi.call(e))}function OS(e,t){if(!(t.state.loading&4)){var a=$i.get(e);if(a)var n=a.get(null);else{a=new Map,$i.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var m=l[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),n=m)}n&&a.set(null,n)}l=t.instance,m=l.getAttribute("data-precedence"),u=a.get(m)||n,u===n&&a.set(null,l),a.set(m,l),this.count++,n=Wi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var bs={$$typeof:Q,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function jS(e,t,a,n,l,u,m,v,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.hiddenUpdates=Br(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function vp(e,t,a,n,l,u,m,v,x,C,R,V){return e=new jS(e,t,a,m,x,C,R,V,v),t=1,u===!0&&(t|=24),u=Ct(3,null,null,t),e.current=u,u.stateNode=e,t=xl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:n,isDehydrated:a,cache:t},Ml(u),e}function yp(e){return e?(e=Zo,e):Zo}function bp(e,t,a,n,l,u){l=yp(l),n.context===null?n.context=l:n.pendingContext=l,n=La(t),n.payload={element:a},u=u===void 0?null:u,u!==null&&(n.callback=u),a=Ba(e,n,t),a!==null&&(xt(a,e,t),Wn(a,e,t))}function Sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ku(e,t){Sp(e,t),(e=e.alternate)&&Sp(e,t)}function Tp(e){if(e.tag===13||e.tag===31){var t=ho(e,67108864);t!==null&&xt(t,e,67108864),ku(e,67108864)}}function xp(e){if(e.tag===13||e.tag===31){var t=jt();t=Ur(t);var a=ho(e,t);a!==null&&xt(a,e,t),ku(e,t)}}var er=!0;function RS(e,t,a,n){var l=j.T;j.T=null;var u=P.p;try{P.p=2,Yu(e,t,a,n)}finally{P.p=u,j.T=l}}function wS(e,t,a,n){var l=j.T;j.T=null;var u=P.p;try{P.p=8,Yu(e,t,a,n)}finally{P.p=u,j.T=l}}function Yu(e,t,a,n){if(er){var l=Ju(n);if(l===null)Ou(e,t,n,tr,a),Ap(e,n);else if(_S(l,e,t,a,n))n.stopPropagation();else if(Ap(e,n),t&4&&-1<VS.indexOf(e)){for(;l!==null;){var u=Lo(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=lo(u.pendingLanes);if(m!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var x=1<<31-Dt(m);v.entanglements[1]|=x,m&=~x}aa(u),(Ae&6)===0&&(Li=Et()+500,fs(0))}}break;case 31:case 13:v=ho(u,2),v!==null&&xt(v,u,2),Ui(),ku(u,2)}if(u=Ju(n),u===null&&Ou(e,t,n,tr,a),u===l)break;l=u}l!==null&&n.stopPropagation()}else Ou(e,t,n,null,a)}}function Ju(e){return e=Zr(e),Xu(e)}var tr=null;function Xu(e){if(tr=null,e=_o(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=p(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tr=e,null}function Ep(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(S0()){case Nd:return 2;case Od:return 8;case ks:case T0:return 32;case jd:return 268435456;default:return 32}default:return 32}}var Zu=!1,Ka=null,Fa=null,Wa=null,Ss=new Map,Ts=new Map,$a=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ap(e,t){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Ss.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(t.pointerId)}}function xs(e,t,a,n,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Lo(t),t!==null&&Tp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _S(e,t,a,n,l){switch(t){case"focusin":return Ka=xs(Ka,e,t,a,n,l),!0;case"dragenter":return Fa=xs(Fa,e,t,a,n,l),!0;case"mouseover":return Wa=xs(Wa,e,t,a,n,l),!0;case"pointerover":var u=l.pointerId;return Ss.set(u,xs(Ss.get(u)||null,e,t,a,n,l)),!0;case"gotpointercapture":return u=l.pointerId,Ts.set(u,xs(Ts.get(u)||null,e,t,a,n,l)),!0}return!1}function Dp(e){var t=_o(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,Bd(e.priority,function(){xp(a)});return}}else if(t===31){if(t=p(a),t!==null){e.blockedOn=t,Bd(e.priority,function(){xp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ju(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Xr=n,a.target.dispatchEvent(n),Xr=null}else return t=Lo(a),t!==null&&Tp(t),e.blockedOn=a,!1;t.shift()}return!0}function Mp(e,t,a){ar(e)&&a.delete(t)}function LS(){Zu=!1,Ka!==null&&ar(Ka)&&(Ka=null),Fa!==null&&ar(Fa)&&(Fa=null),Wa!==null&&ar(Wa)&&(Wa=null),Ss.forEach(Mp),Ts.forEach(Mp)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Zu||(Zu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,LS)))}var nr=null;function Cp(e){nr!==e&&(nr=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nr===e&&(nr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Xu(n||a)===null)continue;break}var u=Lo(a);u!==null&&(e.splice(t,3),t-=3,Jl(u,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function bn(e){function t(x){return or(x,e)}Ka!==null&&or(Ka,e),Fa!==null&&or(Fa,e),Wa!==null&&or(Wa,e),Ss.forEach(t),Ts.forEach(t);for(var a=0;a<$a.length;a++){var n=$a[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)Dp(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],u=a[n+1],m=l[gt]||null;if(typeof u=="function")m||Cp(a);else if(m){var v=null;if(u&&u.hasAttribute("formAction")){if(l=u,m=u[gt]||null)v=m.formAction;else if(Xu(l)!==null)continue}else v=m.action;typeof v=="function"?a[n+1]=v:(a.splice(n,3),n-=3),Cp(a)}}}function zp(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ku(e){this._internalRoot=e}sr.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,n=jt();bp(a,n,e,t,null,null)},sr.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bp(e.current,2,null,e,null,null),Ui(),t[Vo]=null}};function sr(e){this._internalRoot=e}sr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ld();e={blockedOn:null,target:e,priority:t};for(var a=0;a<$a.length&&t!==0&&t<$a[a].priority;a++);$a.splice(a,0,e),a===0&&Dp(e)}};var qp=s.version;if(qp!=="19.2.4")throw Error(r(527,qp,"19.2.4"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var BS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ir.isDisabled&&ir.supportsFiber)try{On=ir.inject(BS),At=ir}catch{}}return As.createRoot=function(e,t){if(!c(e))throw Error(r(299));var a=!1,n="",l=_f,u=Lf,m=Bf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=vp(e,1,!1,null,null,a,n,null,l,u,m,zp),e[Vo]=t.current,Nu(e),new Ku(t)},As.hydrateRoot=function(e,t,a){if(!c(e))throw Error(r(299));var n=!1,l="",u=_f,m=Lf,v=Bf,x=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=vp(e,1,!0,t,a??null,n,l,x,u,m,v,zp),t.context=yp(null),a=t.current,n=jt(),n=Ur(n),l=La(n),l.callback=null,Ba(a,l,n),a=n,t.current.lanes=a,Rn(t,a),aa(t),e[Vo]=t.current,Nu(e),new sr(t)},As.version="19.2.4",As}var Up;function ZS(){if(Up)return $u.exports;Up=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),$u.exports=XS(),$u.exports}var KS=ZS();const Zc=G.createContext({});function Kc(o){const s=G.useRef(null);return s.current===null&&(s.current=o()),s.current}const mv=typeof window<"u",fv=mv?G.useLayoutEffect:G.useEffect,qr=G.createContext(null);function Fc(o,s){o.indexOf(s)===-1&&o.push(s)}function br(o,s){const i=o.indexOf(s);i>-1&&o.splice(i,1)}const sa=(o,s,i)=>i>s?s:i<o?o:i;let Wc=()=>{};const Ma={},hv=o=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(o);function pv(o){return typeof o=="object"&&o!==null}const gv=o=>/^0[^.\s]+$/u.test(o);function vv(o){let s;return()=>(s===void 0&&(s=o()),s)}const Yt=o=>o,FS=(o,s)=>i=>s(o(i)),Us=(...o)=>o.reduce(FS),ws=(o,s,i)=>{const r=s-o;return r===0?1:(i-o)/r};class $c{constructor(){this.subscriptions=[]}add(s){return Fc(this.subscriptions,s),()=>br(this.subscriptions,s)}notify(s,i,r){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](s,i,r);else for(let f=0;f<c;f++){const d=this.subscriptions[f];d&&d(s,i,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Wt=o=>o*1e3,kt=o=>o/1e3;function yv(o,s){return s?o*(1e3/s):0}const bv=(o,s,i)=>(((1-3*i+3*s)*o+(3*i-6*s))*o+3*s)*o,WS=1e-7,$S=12;function IS(o,s,i,r,c){let f,d,p=0;do d=s+(i-s)/2,f=bv(d,r,c)-o,f>0?i=d:s=d;while(Math.abs(f)>WS&&++p<$S);return d}function Hs(o,s,i,r){if(o===s&&i===r)return Yt;const c=f=>IS(f,0,1,o,i);return f=>f===0||f===1?f:bv(c(f),s,r)}const Sv=o=>s=>s<=.5?o(2*s)/2:(2-o(2*(1-s)))/2,Tv=o=>s=>1-o(1-s),xv=Hs(.33,1.53,.69,.99),Ic=Tv(xv),Ev=Sv(Ic),Av=o=>(o*=2)<1?.5*Ic(o):.5*(2-Math.pow(2,-10*(o-1))),ed=o=>1-Math.sin(Math.acos(o)),Dv=Tv(ed),Mv=Sv(ed),e1=Hs(.42,0,1,1),t1=Hs(0,0,.58,1),Cv=Hs(.42,0,.58,1),a1=o=>Array.isArray(o)&&typeof o[0]!="number",zv=o=>Array.isArray(o)&&typeof o[0]=="number",o1={linear:Yt,easeIn:e1,easeInOut:Cv,easeOut:t1,circIn:ed,circInOut:Mv,circOut:Dv,backIn:Ic,backInOut:Ev,backOut:xv,anticipate:Av},n1=o=>typeof o=="string",Hp=o=>{if(zv(o)){Wc(o.length===4);const[s,i,r,c]=o;return Hs(s,i,r,c)}else if(n1(o))return o1[o];return o},rr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function s1(o,s){let i=new Set,r=new Set,c=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(y){d.has(y)&&(g.schedule(y),o()),y(p)}const g={schedule:(y,b=!1,S=!1)=>{const O=S&&c?i:r;return b&&d.add(y),O.has(y)||O.add(y),y},cancel:y=>{r.delete(y),d.delete(y)},process:y=>{if(p=y,c){f=!0;return}c=!0,[i,r]=[r,i],i.forEach(h),i.clear(),c=!1,f&&(f=!1,g.process(y))}};return g}const i1=40;function qv(o,s){let i=!1,r=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>i=!0,d=rr.reduce((Q,Z)=>(Q[Z]=s1(f),Q),{}),{setup:p,read:h,resolveKeyframes:g,preUpdate:y,update:b,preRender:S,render:z,postRender:O}=d,B=()=>{const Q=Ma.useManualTiming?c.timestamp:performance.now();i=!1,Ma.useManualTiming||(c.delta=r?1e3/60:Math.max(Math.min(Q-c.timestamp,i1),1)),c.timestamp=Q,c.isProcessing=!0,p.process(c),h.process(c),g.process(c),y.process(c),b.process(c),S.process(c),z.process(c),O.process(c),c.isProcessing=!1,i&&s&&(r=!1,o(B))},U=()=>{i=!0,r=!0,c.isProcessing||o(B)};return{schedule:rr.reduce((Q,Z)=>{const Y=d[Z];return Q[Z]=(se,W=!1,L=!1)=>(i||U(),Y.schedule(se,W,L)),Q},{}),cancel:Q=>{for(let Z=0;Z<rr.length;Z++)d[rr[Z]].cancel(Q)},state:c,steps:d}}const{schedule:je,cancel:so,state:lt,steps:ac}=qv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yt,!0);let fr;function r1(){fr=void 0}const ft={now:()=>(fr===void 0&&ft.set(lt.isProcessing||Ma.useManualTiming?lt.timestamp:performance.now()),fr),set:o=>{fr=o,queueMicrotask(r1)}},Nv=o=>s=>typeof s=="string"&&s.startsWith(o),Ov=Nv("--"),l1=Nv("var(--"),td=o=>l1(o)?u1.test(o.split("/*")[0].trim()):!1,u1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Pp(o){return typeof o!="string"?!1:o.split("/*")[0].includes("var(--")}const zn={test:o=>typeof o=="number",parse:parseFloat,transform:o=>o},Vs={...zn,transform:o=>sa(0,1,o)},lr={...zn,default:1},Ns=o=>Math.round(o*1e5)/1e5,ad=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function c1(o){return o==null}const d1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,od=(o,s)=>i=>!!(typeof i=="string"&&d1.test(i)&&i.startsWith(o)||s&&!c1(i)&&Object.prototype.hasOwnProperty.call(i,s)),jv=(o,s,i)=>r=>{if(typeof r!="string")return r;const[c,f,d,p]=r.match(ad);return{[o]:parseFloat(c),[s]:parseFloat(f),[i]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},m1=o=>sa(0,255,o),oc={...zn,transform:o=>Math.round(m1(o))},No={test:od("rgb","red"),parse:jv("red","green","blue"),transform:({red:o,green:s,blue:i,alpha:r=1})=>"rgba("+oc.transform(o)+", "+oc.transform(s)+", "+oc.transform(i)+", "+Ns(Vs.transform(r))+")"};function f1(o){let s="",i="",r="",c="";return o.length>5?(s=o.substring(1,3),i=o.substring(3,5),r=o.substring(5,7),c=o.substring(7,9)):(s=o.substring(1,2),i=o.substring(2,3),r=o.substring(3,4),c=o.substring(4,5),s+=s,i+=i,r+=r,c+=c),{red:parseInt(s,16),green:parseInt(i,16),blue:parseInt(r,16),alpha:c?parseInt(c,16)/255:1}}const Tc={test:od("#"),parse:f1,transform:No.transform},Ps=o=>({test:s=>typeof s=="string"&&s.endsWith(o)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${o}`}),ao=Ps("deg"),na=Ps("%"),te=Ps("px"),h1=Ps("vh"),p1=Ps("vw"),Qp={...na,parse:o=>na.parse(o)/100,transform:o=>na.transform(o*100)},Tn={test:od("hsl","hue"),parse:jv("hue","saturation","lightness"),transform:({hue:o,saturation:s,lightness:i,alpha:r=1})=>"hsla("+Math.round(o)+", "+na.transform(Ns(s))+", "+na.transform(Ns(i))+", "+Ns(Vs.transform(r))+")"},Ke={test:o=>No.test(o)||Tc.test(o)||Tn.test(o),parse:o=>No.test(o)?No.parse(o):Tn.test(o)?Tn.parse(o):Tc.parse(o),transform:o=>typeof o=="string"?o:o.hasOwnProperty("red")?No.transform(o):Tn.transform(o),getAnimatableNone:o=>{const s=Ke.parse(o);return s.alpha=0,Ke.transform(s)}},g1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function v1(o){var s,i;return isNaN(o)&&typeof o=="string"&&(((s=o.match(ad))==null?void 0:s.length)||0)+(((i=o.match(g1))==null?void 0:i.length)||0)>0}const Rv="number",wv="color",y1="var",b1="var(",Gp="${}",S1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _s(o){const s=o.toString(),i=[],r={color:[],number:[],var:[]},c=[];let f=0;const p=s.replace(S1,h=>(Ke.test(h)?(r.color.push(f),c.push(wv),i.push(Ke.parse(h))):h.startsWith(b1)?(r.var.push(f),c.push(y1),i.push(h)):(r.number.push(f),c.push(Rv),i.push(parseFloat(h))),++f,Gp)).split(Gp);return{values:i,split:p,indexes:r,types:c}}function Vv(o){return _s(o).values}function _v(o){const{split:s,types:i}=_s(o),r=s.length;return c=>{let f="";for(let d=0;d<r;d++)if(f+=s[d],c[d]!==void 0){const p=i[d];p===Rv?f+=Ns(c[d]):p===wv?f+=Ke.transform(c[d]):f+=c[d]}return f}}const T1=o=>typeof o=="number"?0:Ke.test(o)?Ke.getAnimatableNone(o):o;function x1(o){const s=Vv(o);return _v(o)(s.map(T1))}const $t={test:v1,parse:Vv,createTransformer:_v,getAnimatableNone:x1};function nc(o,s,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(s-o)*6*i:i<1/2?s:i<2/3?o+(s-o)*(2/3-i)*6:o}function E1({hue:o,saturation:s,lightness:i,alpha:r}){o/=360,s/=100,i/=100;let c=0,f=0,d=0;if(!s)c=f=d=i;else{const p=i<.5?i*(1+s):i+s-i*s,h=2*i-p;c=nc(h,p,o+1/3),f=nc(h,p,o),d=nc(h,p,o-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:r}}function Sr(o,s){return i=>i>0?s:o}const Be=(o,s,i)=>o+(s-o)*i,sc=(o,s,i)=>{const r=o*o,c=i*(s*s-r)+r;return c<0?0:Math.sqrt(c)},A1=[Tc,No,Tn],D1=o=>A1.find(s=>s.test(o));function kp(o){const s=D1(o);if(!s)return!1;let i=s.parse(o);return s===Tn&&(i=E1(i)),i}const Yp=(o,s)=>{const i=kp(o),r=kp(s);if(!i||!r)return Sr(o,s);const c={...i};return f=>(c.red=sc(i.red,r.red,f),c.green=sc(i.green,r.green,f),c.blue=sc(i.blue,r.blue,f),c.alpha=Be(i.alpha,r.alpha,f),No.transform(c))},xc=new Set(["none","hidden"]);function M1(o,s){return xc.has(o)?i=>i<=0?o:s:i=>i>=1?s:o}function C1(o,s){return i=>Be(o,s,i)}function nd(o){return typeof o=="number"?C1:typeof o=="string"?td(o)?Sr:Ke.test(o)?Yp:N1:Array.isArray(o)?Lv:typeof o=="object"?Ke.test(o)?Yp:z1:Sr}function Lv(o,s){const i=[...o],r=i.length,c=o.map((f,d)=>nd(f)(f,s[d]));return f=>{for(let d=0;d<r;d++)i[d]=c[d](f);return i}}function z1(o,s){const i={...o,...s},r={};for(const c in i)o[c]!==void 0&&s[c]!==void 0&&(r[c]=nd(o[c])(o[c],s[c]));return c=>{for(const f in r)i[f]=r[f](c);return i}}function q1(o,s){const i=[],r={color:0,var:0,number:0};for(let c=0;c<s.values.length;c++){const f=s.types[c],d=o.indexes[f][r[f]],p=o.values[d]??0;i[c]=p,r[f]++}return i}const N1=(o,s)=>{const i=$t.createTransformer(s),r=_s(o),c=_s(s);return r.indexes.var.length===c.indexes.var.length&&r.indexes.color.length===c.indexes.color.length&&r.indexes.number.length>=c.indexes.number.length?xc.has(o)&&!c.values.length||xc.has(s)&&!r.values.length?M1(o,s):Us(Lv(q1(r,c),c.values),i):Sr(o,s)};function Bv(o,s,i){return typeof o=="number"&&typeof s=="number"&&typeof i=="number"?Be(o,s,i):nd(o)(o,s)}const O1=o=>{const s=({timestamp:i})=>o(i);return{start:(i=!0)=>je.update(s,i),stop:()=>so(s),now:()=>lt.isProcessing?lt.timestamp:ft.now()}},Uv=(o,s,i=10)=>{let r="";const c=Math.max(Math.round(s/i),2);for(let f=0;f<c;f++)r+=Math.round(o(f/(c-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Tr=2e4;function sd(o){let s=0;const i=50;let r=o.next(s);for(;!r.done&&s<Tr;)s+=i,r=o.next(s);return s>=Tr?1/0:s}function j1(o,s=100,i){const r=i({...o,keyframes:[0,s]}),c=Math.min(sd(r),Tr);return{type:"keyframes",ease:f=>r.next(c*f).value/s,duration:kt(c)}}const R1=5;function Hv(o,s,i){const r=Math.max(s-R1,0);return yv(i-o(r),s-r)}const Pe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ic=.001;function w1({duration:o=Pe.duration,bounce:s=Pe.bounce,velocity:i=Pe.velocity,mass:r=Pe.mass}){let c,f,d=1-s;d=sa(Pe.minDamping,Pe.maxDamping,d),o=sa(Pe.minDuration,Pe.maxDuration,kt(o)),d<1?(c=g=>{const y=g*d,b=y*o,S=y-i,z=Ec(g,d),O=Math.exp(-b);return ic-S/z*O},f=g=>{const b=g*d*o,S=b*i+i,z=Math.pow(d,2)*Math.pow(g,2)*o,O=Math.exp(-b),B=Ec(Math.pow(g,2),d);return(-c(g)+ic>0?-1:1)*((S-z)*O)/B}):(c=g=>{const y=Math.exp(-g*o),b=(g-i)*o+1;return-ic+y*b},f=g=>{const y=Math.exp(-g*o),b=(i-g)*(o*o);return y*b});const p=5/o,h=_1(c,f,p);if(o=Wt(o),isNaN(h))return{stiffness:Pe.stiffness,damping:Pe.damping,duration:o};{const g=Math.pow(h,2)*r;return{stiffness:g,damping:d*2*Math.sqrt(r*g),duration:o}}}const V1=12;function _1(o,s,i){let r=i;for(let c=1;c<V1;c++)r=r-o(r)/s(r);return r}function Ec(o,s){return o*Math.sqrt(1-s*s)}const L1=["duration","bounce"],B1=["stiffness","damping","mass"];function Jp(o,s){return s.some(i=>o[i]!==void 0)}function U1(o){let s={velocity:Pe.velocity,stiffness:Pe.stiffness,damping:Pe.damping,mass:Pe.mass,isResolvedFromDuration:!1,...o};if(!Jp(o,B1)&&Jp(o,L1))if(s.velocity=0,o.visualDuration){const i=o.visualDuration,r=2*Math.PI/(i*1.2),c=r*r,f=2*sa(.05,1,1-(o.bounce||0))*Math.sqrt(c);s={...s,mass:Pe.mass,stiffness:c,damping:f}}else{const i=w1({...o,velocity:0});s={...s,...i,mass:Pe.mass},s.isResolvedFromDuration=!0}return s}function xr(o=Pe.visualDuration,s=Pe.bounce){const i=typeof o!="object"?{visualDuration:o,keyframes:[0,1],bounce:s}:o;let{restSpeed:r,restDelta:c}=i;const f=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],p={done:!1,value:f},{stiffness:h,damping:g,mass:y,duration:b,velocity:S,isResolvedFromDuration:z}=U1({...i,velocity:-kt(i.velocity||0)}),O=S||0,B=g/(2*Math.sqrt(h*y)),U=d-f,H=kt(Math.sqrt(h/y)),J=Math.abs(U)<5;r||(r=J?Pe.restSpeed.granular:Pe.restSpeed.default),c||(c=J?Pe.restDelta.granular:Pe.restDelta.default);let Q;if(B<1){const Y=Ec(H,B);Q=se=>{const W=Math.exp(-B*H*se);return d-W*((O+B*H*U)/Y*Math.sin(Y*se)+U*Math.cos(Y*se))}}else if(B===1)Q=Y=>d-Math.exp(-H*Y)*(U+(O+H*U)*Y);else{const Y=H*Math.sqrt(B*B-1);Q=se=>{const W=Math.exp(-B*H*se),L=Math.min(Y*se,300);return d-W*((O+B*H*U)*Math.sinh(L)+Y*U*Math.cosh(L))/Y}}const Z={calculatedDuration:z&&b||null,next:Y=>{const se=Q(Y);if(z)p.done=Y>=b;else{let W=Y===0?O:0;B<1&&(W=Y===0?Wt(O):Hv(Q,Y,se));const L=Math.abs(W)<=r,ie=Math.abs(d-se)<=c;p.done=L&&ie}return p.value=p.done?d:se,p},toString:()=>{const Y=Math.min(sd(Z),Tr),se=Uv(W=>Z.next(Y*W).value,Y,30);return Y+"ms "+se},toTransition:()=>{}};return Z}xr.applyToOptions=o=>{const s=j1(o,100,xr);return o.ease=s.ease,o.duration=Wt(s.duration),o.type="keyframes",o};function Ac({keyframes:o,velocity:s=0,power:i=.8,timeConstant:r=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:h,restDelta:g=.5,restSpeed:y}){const b=o[0],S={done:!1,value:b},z=L=>p!==void 0&&L<p||h!==void 0&&L>h,O=L=>p===void 0?h:h===void 0||Math.abs(p-L)<Math.abs(h-L)?p:h;let B=i*s;const U=b+B,H=d===void 0?U:d(U);H!==U&&(B=H-b);const J=L=>-B*Math.exp(-L/r),Q=L=>H+J(L),Z=L=>{const ie=J(L),De=Q(L);S.done=Math.abs(ie)<=g,S.value=S.done?H:De};let Y,se;const W=L=>{z(S.value)&&(Y=L,se=xr({keyframes:[S.value,O(S.value)],velocity:Hv(Q,L,S.value),damping:c,stiffness:f,restDelta:g,restSpeed:y}))};return W(0),{calculatedDuration:null,next:L=>{let ie=!1;return!se&&Y===void 0&&(ie=!0,Z(L),W(L)),Y!==void 0&&L>=Y?se.next(L-Y):(!ie&&Z(L),S)}}}function H1(o,s,i){const r=[],c=i||Ma.mix||Bv,f=o.length-1;for(let d=0;d<f;d++){let p=c(o[d],o[d+1]);if(s){const h=Array.isArray(s)?s[d]||Yt:s;p=Us(h,p)}r.push(p)}return r}function P1(o,s,{clamp:i=!0,ease:r,mixer:c}={}){const f=o.length;if(Wc(f===s.length),f===1)return()=>s[0];if(f===2&&s[0]===s[1])return()=>s[1];const d=o[0]===o[1];o[0]>o[f-1]&&(o=[...o].reverse(),s=[...s].reverse());const p=H1(s,r,c),h=p.length,g=y=>{if(d&&y<o[0])return s[0];let b=0;if(h>1)for(;b<o.length-2&&!(y<o[b+1]);b++);const S=ws(o[b],o[b+1],y);return p[b](S)};return i?y=>g(sa(o[0],o[f-1],y)):g}function Q1(o,s){const i=o[o.length-1];for(let r=1;r<=s;r++){const c=ws(0,s,r);o.push(Be(i,1,c))}}function G1(o){const s=[0];return Q1(s,o.length-1),s}function k1(o,s){return o.map(i=>i*s)}function Y1(o,s){return o.map(()=>s||Cv).splice(0,o.length-1)}function Os({duration:o=300,keyframes:s,times:i,ease:r="easeInOut"}){const c=a1(r)?r.map(Hp):Hp(r),f={done:!1,value:s[0]},d=k1(i&&i.length===s.length?i:G1(s),o),p=P1(d,s,{ease:Array.isArray(c)?c:Y1(s,c)});return{calculatedDuration:o,next:h=>(f.value=p(h),f.done=h>=o,f)}}const J1=o=>o!==null;function id(o,{repeat:s,repeatType:i="loop"},r,c=1){const f=o.filter(J1),p=c<0||s&&i!=="loop"&&s%2===1?0:f.length-1;return!p||r===void 0?f[p]:r}const X1={decay:Ac,inertia:Ac,tween:Os,keyframes:Os,spring:xr};function Pv(o){typeof o.type=="string"&&(o.type=X1[o.type])}class rd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,i){return this.finished.then(s,i)}}const Z1=o=>o/100;class ld extends rd{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,c;const{motionValue:i}=this.options;i&&i.updatedAt!==ft.now()&&this.tick(ft.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(r=this.options).onStop)==null||c.call(r))},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;Pv(s);const{type:i=Os,repeat:r=0,repeatDelay:c=0,repeatType:f,velocity:d=0}=s;let{keyframes:p}=s;const h=i||Os;h!==Os&&typeof p[0]!="number"&&(this.mixKeyframes=Us(Z1,Bv(p[0],p[1])),p=[0,100]);const g=h({...s,keyframes:p});f==="mirror"&&(this.mirroredGenerator=h({...s,keyframes:[...p].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=sd(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(r+1)-c,this.generator=g}updateTime(s){const i=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(s,i=!1){const{generator:r,totalDuration:c,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:z,type:O,onUpdate:B,finalKeyframe:U}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-c/this.speed,this.startTime)),i?this.currentTime=s:this.updateTime(s);const H=this.currentTime-g*(this.playbackSpeed>=0?1:-1),J=this.playbackSpeed>=0?H<0:H>c;this.currentTime=Math.max(H,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let Q=this.currentTime,Z=r;if(b){const L=Math.min(this.currentTime,c)/p;let ie=Math.floor(L),De=L%1;!De&&L>=1&&(De=1),De===1&&ie--,ie=Math.min(ie,b+1),!!(ie%2)&&(S==="reverse"?(De=1-De,z&&(De-=z/p)):S==="mirror"&&(Z=d)),Q=sa(0,1,De)*p}const Y=J?{done:!1,value:y[0]}:Z.next(Q);f&&(Y.value=f(Y.value));let{done:se}=Y;!J&&h!==null&&(se=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&se);return W&&O!==Ac&&(Y.value=id(y,this.options,U,this.speed)),B&&B(Y.value),W&&this.finish(),Y}then(s,i){return this.finished.then(s,i)}get duration(){return kt(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+kt(s)}get time(){return kt(this.currentTime)}set time(s){var i;s=Wt(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(s){this.updateTime(ft.now());const i=this.playbackSpeed!==s;this.playbackSpeed=s,i&&(this.time=kt(this.currentTime))}play(){var c,f;if(this.isStopped)return;const{driver:s=O1,startTime:i}=this.options;this.driver||(this.driver=s(d=>this.tick(d))),(f=(c=this.options).onPlay)==null||f.call(c);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=i??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ft.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var s,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(s=this.options).onComplete)==null||i.call(s)}cancel(){var s,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(s=this.options).onCancel)==null||i.call(s)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),s.observe(this)}}function K1(o){for(let s=1;s<o.length;s++)o[s]??(o[s]=o[s-1])}const Oo=o=>o*180/Math.PI,Dc=o=>{const s=Oo(Math.atan2(o[1],o[0]));return Mc(s)},F1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:o=>(Math.abs(o[0])+Math.abs(o[3]))/2,rotate:Dc,rotateZ:Dc,skewX:o=>Oo(Math.atan(o[1])),skewY:o=>Oo(Math.atan(o[2])),skew:o=>(Math.abs(o[1])+Math.abs(o[2]))/2},Mc=o=>(o=o%360,o<0&&(o+=360),o),Xp=Dc,Zp=o=>Math.sqrt(o[0]*o[0]+o[1]*o[1]),Kp=o=>Math.sqrt(o[4]*o[4]+o[5]*o[5]),W1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Zp,scaleY:Kp,scale:o=>(Zp(o)+Kp(o))/2,rotateX:o=>Mc(Oo(Math.atan2(o[6],o[5]))),rotateY:o=>Mc(Oo(Math.atan2(-o[2],o[0]))),rotateZ:Xp,rotate:Xp,skewX:o=>Oo(Math.atan(o[4])),skewY:o=>Oo(Math.atan(o[1])),skew:o=>(Math.abs(o[1])+Math.abs(o[4]))/2};function Cc(o){return o.includes("scale")?1:0}function zc(o,s){if(!o||o==="none")return Cc(s);const i=o.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,c;if(i)r=W1,c=i;else{const p=o.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=F1,c=p}if(!c)return Cc(s);const f=r[s],d=c[1].split(",").map(I1);return typeof f=="function"?f(d):d[f]}const $1=(o,s)=>{const{transform:i="none"}=getComputedStyle(o);return zc(i,s)};function I1(o){return parseFloat(o.trim())}const qn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Nn=new Set(qn),Fp=o=>o===zn||o===te,eT=new Set(["x","y","z"]),tT=qn.filter(o=>!eT.has(o));function aT(o){const s=[];return tT.forEach(i=>{const r=o.getValue(i);r!==void 0&&(s.push([i,r.get()]),r.set(i.startsWith("scale")?1:0))}),s}const no={width:({x:o},{paddingLeft:s="0",paddingRight:i="0"})=>o.max-o.min-parseFloat(s)-parseFloat(i),height:({y:o},{paddingTop:s="0",paddingBottom:i="0"})=>o.max-o.min-parseFloat(s)-parseFloat(i),top:(o,{top:s})=>parseFloat(s),left:(o,{left:s})=>parseFloat(s),bottom:({y:o},{top:s})=>parseFloat(s)+(o.max-o.min),right:({x:o},{left:s})=>parseFloat(s)+(o.max-o.min),x:(o,{transform:s})=>zc(s,"x"),y:(o,{transform:s})=>zc(s,"y")};no.translateX=no.x;no.translateY=no.y;const jo=new Set;let qc=!1,Nc=!1,Oc=!1;function Qv(){if(Nc){const o=Array.from(jo).filter(r=>r.needsMeasurement),s=new Set(o.map(r=>r.element)),i=new Map;s.forEach(r=>{const c=aT(r);c.length&&(i.set(r,c),r.render())}),o.forEach(r=>r.measureInitialState()),s.forEach(r=>{r.render();const c=i.get(r);c&&c.forEach(([f,d])=>{var p;(p=r.getValue(f))==null||p.set(d)})}),o.forEach(r=>r.measureEndState()),o.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Nc=!1,qc=!1,jo.forEach(o=>o.complete(Oc)),jo.clear()}function Gv(){jo.forEach(o=>{o.readKeyframes(),o.needsMeasurement&&(Nc=!0)})}function oT(){Oc=!0,Gv(),Qv(),Oc=!1}class ud{constructor(s,i,r,c,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=i,this.name=r,this.motionValue=c,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(jo.add(this),qc||(qc=!0,je.read(Gv),je.resolveKeyframes(Qv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:i,element:r,motionValue:c}=this;if(s[0]===null){const f=c==null?void 0:c.get(),d=s[s.length-1];if(f!==void 0)s[0]=f;else if(r&&i){const p=r.readValue(i,d);p!=null&&(s[0]=p)}s[0]===void 0&&(s[0]=d),c&&f===void 0&&c.set(s[0])}K1(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),jo.delete(this)}cancel(){this.state==="scheduled"&&(jo.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const nT=o=>o.startsWith("--");function sT(o,s,i){nT(s)?o.style.setProperty(s,i):o.style[s]=i}const iT={};function kv(o,s){const i=vv(o);return()=>iT[s]??i()}const rT=kv(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Yv=kv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),qs=([o,s,i,r])=>`cubic-bezier(${o}, ${s}, ${i}, ${r})`,Wp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:qs([0,.65,.55,1]),circOut:qs([.55,0,1,.45]),backIn:qs([.31,.01,.66,-.59]),backOut:qs([.33,1.53,.69,.99])};function Jv(o,s){if(o)return typeof o=="function"?Yv()?Uv(o,s):"ease-out":zv(o)?qs(o):Array.isArray(o)?o.map(i=>Jv(i,s)||Wp.easeOut):Wp[o]}function lT(o,s,i,{delay:r=0,duration:c=300,repeat:f=0,repeatType:d="loop",ease:p="easeOut",times:h}={},g=void 0){const y={[s]:i};h&&(y.offset=h);const b=Jv(p,c);Array.isArray(b)&&(y.easing=b);const S={delay:r,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),o.animate(y,S)}function Xv(o){return typeof o=="function"&&"applyToOptions"in o}function uT({type:o,...s}){return Xv(o)&&Yv()?o.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class Zv extends rd{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!s)return;const{element:i,name:r,keyframes:c,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:p,onComplete:h}=s;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=s,Wc(typeof s.type!="string");const g=uT(s);this.animation=lT(i,r,c,g,f),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const y=id(c,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):sT(i,r,y),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var s,i;(i=(s=this.animation).finish)==null||i.call(s)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,r,c;const s=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(s!=null&&s.isConnected)&&((c=(r=this.animation).commitStyles)==null||c.call(r))}get duration(){var i,r;const s=((r=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:r.call(i).duration)||0;return kt(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+kt(s)}get time(){return kt(Number(this.animation.currentTime)||0)}set time(s){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Wt(s)}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(s){this.manualStartTime=this.animation.startTime=s}attachTimeline({timeline:s,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,s&&rT()?(this.animation.timeline=s,Yt):i(this)}}const Kv={anticipate:Av,backInOut:Ev,circInOut:Mv};function cT(o){return o in Kv}function dT(o){typeof o.ease=="string"&&cT(o.ease)&&(o.ease=Kv[o.ease])}const rc=10;class mT extends Zv{constructor(s){dT(s),Pv(s),super(s),s.startTime!==void 0&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:i,onUpdate:r,onComplete:c,element:f,...d}=this.options;if(!i)return;if(s!==void 0){i.set(s);return}const p=new ld({...d,autoplay:!1}),h=Math.max(rc,ft.now()-this.startTime),g=sa(0,rc,h-rc);i.setWithVelocity(p.sample(Math.max(0,h-g)).value,p.sample(h).value,g),p.stop()}}const $p=(o,s)=>s==="zIndex"?!1:!!(typeof o=="number"||Array.isArray(o)||typeof o=="string"&&($t.test(o)||o==="0")&&!o.startsWith("url("));function fT(o){const s=o[0];if(o.length===1)return!0;for(let i=0;i<o.length;i++)if(o[i]!==s)return!0}function hT(o,s,i,r){const c=o[0];if(c===null)return!1;if(s==="display"||s==="visibility")return!0;const f=o[o.length-1],d=$p(c,s),p=$p(f,s);return!d||!p?!1:fT(o)||(i==="spring"||Xv(i))&&r}function jc(o){o.duration=0,o.type="keyframes"}const pT=new Set(["opacity","clipPath","filter","transform"]),gT=vv(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function vT(o){var y;const{motionValue:s,name:i,repeatDelay:r,repeatType:c,damping:f,type:d}=o;if(!(((y=s==null?void 0:s.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:g}=s.owner.getProps();return gT()&&i&&pT.has(i)&&(i!=="transform"||!g)&&!h&&!r&&c!=="mirror"&&f!==0&&d!=="inertia"}const yT=40;class bT extends rd{constructor({autoplay:s=!0,delay:i=0,type:r="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:d="loop",keyframes:p,name:h,motionValue:g,element:y,...b}){var O;super(),this.stop=()=>{var B,U;this._animation&&(this._animation.stop(),(B=this.stopTimeline)==null||B.call(this)),(U=this.keyframeResolver)==null||U.cancel()},this.createdAt=ft.now();const S={autoplay:s,delay:i,type:r,repeat:c,repeatDelay:f,repeatType:d,name:h,motionValue:g,element:y,...b},z=(y==null?void 0:y.KeyframeResolver)||ud;this.keyframeResolver=new z(p,(B,U,H)=>this.onKeyframesResolved(B,U,S,!H),h,g,y),(O=this.keyframeResolver)==null||O.scheduleResolve()}onKeyframesResolved(s,i,r,c){var U,H;this.keyframeResolver=void 0;const{name:f,type:d,velocity:p,delay:h,isHandoff:g,onUpdate:y}=r;this.resolvedAt=ft.now(),hT(s,f,d,p)||((Ma.instantAnimations||!h)&&(y==null||y(id(s,r,i))),s[0]=s[s.length-1],jc(r),r.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>yT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...r,keyframes:s},z=!g&&vT(S),O=(H=(U=S.motionValue)==null?void 0:U.owner)==null?void 0:H.current,B=z?new mT({...S,element:O}):new ld(S);B.finished.then(()=>{this.notifyFinished()}).catch(Yt),this.pendingTimeline&&(this.stopTimeline=B.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=B}get finished(){return this._animation?this.animation.finished:this._finished}then(s,i){return this.finished.finally(s).then(()=>{})}get animation(){var s;return this._animation||((s=this.keyframeResolver)==null||s.resume(),oT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var s;this._animation&&this.animation.cancel(),(s=this.keyframeResolver)==null||s.cancel()}}function Fv(o,s,i,r=0,c=1){const f=Array.from(o).sort((g,y)=>g.sortNodePosition(y)).indexOf(s),d=o.size,p=(d-1)*r;return typeof i=="function"?i(f,d):c===1?f*r:p-f*r}const ST=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TT(o){const s=ST.exec(o);if(!s)return[,];const[,i,r,c]=s;return[`--${i??r}`,c]}function Wv(o,s,i=1){const[r,c]=TT(o);if(!r)return;const f=window.getComputedStyle(s).getPropertyValue(r);if(f){const d=f.trim();return hv(d)?parseFloat(d):d}return td(c)?Wv(c,s,i+1):c}const xT={type:"spring",stiffness:500,damping:25,restSpeed:10},ET=o=>({type:"spring",stiffness:550,damping:o===0?2*Math.sqrt(550):30,restSpeed:10}),AT={type:"keyframes",duration:.8},DT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},MT=(o,{keyframes:s})=>s.length>2?AT:Nn.has(o)?o.startsWith("scale")?ET(s[1]):xT:DT,CT=o=>o!==null;function zT(o,{repeat:s,repeatType:i="loop"},r){const c=o.filter(CT),f=s&&i!=="loop"&&s%2===1?0:c.length-1;return c[f]}function $v(o,s){if(o!=null&&o.inherit&&s){const{inherit:i,...r}=o;return{...s,...r}}return o}function cd(o,s){const i=(o==null?void 0:o[s])??(o==null?void 0:o.default)??o;return i!==o?$v(i,o):i}function qT({when:o,delay:s,delayChildren:i,staggerChildren:r,staggerDirection:c,repeat:f,repeatType:d,repeatDelay:p,from:h,elapsed:g,...y}){return!!Object.keys(y).length}const dd=(o,s,i,r={},c,f)=>d=>{const p=cd(r,o)||{},h=p.delay||r.delay||0;let{elapsed:g=0}=r;g=g-Wt(h);const y={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:s.getVelocity(),...p,delay:-g,onUpdate:S=>{s.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:o,motionValue:s,element:f?void 0:c};qT(p)||Object.assign(y,MT(o,y)),y.duration&&(y.duration=Wt(y.duration)),y.repeatDelay&&(y.repeatDelay=Wt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(jc(y),y.delay===0&&(b=!0)),(Ma.instantAnimations||Ma.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(b=!0,jc(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,b&&!f&&s.get()!==void 0){const S=zT(y.keyframes,p);if(S!==void 0){je.update(()=>{y.onUpdate(S),y.onComplete()});return}}return p.isSync?new ld(y):new bT(y)};function Ip(o){const s=[{},{}];return o==null||o.values.forEach((i,r)=>{s[0][r]=i.get(),s[1][r]=i.getVelocity()}),s}function md(o,s,i,r){if(typeof s=="function"){const[c,f]=Ip(r);s=s(i!==void 0?i:o.custom,c,f)}if(typeof s=="string"&&(s=o.variants&&o.variants[s]),typeof s=="function"){const[c,f]=Ip(r);s=s(i!==void 0?i:o.custom,c,f)}return s}function Mn(o,s,i){const r=o.getProps();return md(r,s,i!==void 0?i:r.custom,o)}const Iv=new Set(["width","height","top","left","right","bottom",...qn]),eg=30,NT=o=>!isNaN(parseFloat(o));class OT{constructor(s,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var f;const c=ft.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=i.owner}setCurrent(s){this.current=s,this.updatedAt=ft.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=NT(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,i){this.events[s]||(this.events[s]=new $c);const r=this.events[s].add(i);return s==="change"?()=>{r(),je.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,i){this.passiveEffect=s,this.stopPassiveEffect=i}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,i,r){this.set(i),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-r}jump(s,i=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var s;(s=this.events.change)==null||s.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>eg)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,eg);return yv(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(s){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=s(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var s,i;(s=this.dependents)==null||s.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Cn(o,s){return new OT(o,s)}const Rc=o=>Array.isArray(o);function jT(o,s,i){o.hasValue(s)?o.getValue(s).set(i):o.addValue(s,Cn(i))}function RT(o){return Rc(o)?o[o.length-1]||0:o}function wT(o,s){const i=Mn(o,s);let{transitionEnd:r={},transition:c={},...f}=i||{};f={...f,...r};for(const d in f){const p=RT(f[d]);jT(o,d,p)}}const dt=o=>!!(o&&o.getVelocity);function VT(o){return!!(dt(o)&&o.add)}function wc(o,s){const i=o.getValue("willChange");if(VT(i))return i.add(s);if(!i&&Ma.WillChange){const r=new Ma.WillChange("auto");o.addValue("willChange",r),r.add(s)}}function fd(o){return o.replace(/([A-Z])/g,s=>`-${s.toLowerCase()}`)}const _T="framerAppearId",ey="data-"+fd(_T);function ty(o){return o.props[ey]}function LT({protectedKeys:o,needsAnimating:s},i){const r=o.hasOwnProperty(i)&&s[i]!==!0;return s[i]=!1,r}function ay(o,s,{delay:i=0,transitionOverride:r,type:c}={}){let{transition:f,transitionEnd:d,...p}=s;const h=o.getDefaultTransition();f=f?$v(f,h):h;const g=f==null?void 0:f.reduceMotion;r&&(f=r);const y=[],b=c&&o.animationState&&o.animationState.getState()[c];for(const S in p){const z=o.getValue(S,o.latestValues[S]??null),O=p[S];if(O===void 0||b&&LT(b,S))continue;const B={delay:i,...cd(f||{},S)},U=z.get();if(U!==void 0&&!z.isAnimating&&!Array.isArray(O)&&O===U&&!B.velocity)continue;let H=!1;if(window.MotionHandoffAnimation){const Z=ty(o);if(Z){const Y=window.MotionHandoffAnimation(Z,S,je);Y!==null&&(B.startTime=Y,H=!0)}}wc(o,S);const J=g??o.shouldReduceMotion;z.start(dd(S,z,O,J&&Iv.has(S)?{type:!1}:B,o,H));const Q=z.animation;Q&&y.push(Q)}if(d){const S=()=>je.update(()=>{d&&wT(o,d)});y.length?Promise.all(y).then(S):S()}return y}function Vc(o,s,i={}){var h;const r=Mn(o,s,i.type==="exit"?(h=o.presenceContext)==null?void 0:h.custom:void 0);let{transition:c=o.getDefaultTransition()||{}}=r||{};i.transitionOverride&&(c=i.transitionOverride);const f=r?()=>Promise.all(ay(o,r,i)):()=>Promise.resolve(),d=o.variantChildren&&o.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:S}=c;return BT(o,s,g,y,b,S,i)}:()=>Promise.resolve(),{when:p}=c;if(p){const[g,y]=p==="beforeChildren"?[f,d]:[d,f];return g().then(()=>y())}else return Promise.all([f(),d(i.delay)])}function BT(o,s,i=0,r=0,c=0,f=1,d){const p=[];for(const h of o.variantChildren)h.notify("AnimationStart",s),p.push(Vc(h,s,{...d,delay:i+(typeof r=="function"?0:r)+Fv(o.variantChildren,h,r,c,f)}).then(()=>h.notify("AnimationComplete",s)));return Promise.all(p)}function UT(o,s,i={}){o.notify("AnimationStart",s);let r;if(Array.isArray(s)){const c=s.map(f=>Vc(o,f,i));r=Promise.all(c)}else if(typeof s=="string")r=Vc(o,s,i);else{const c=typeof s=="function"?Mn(o,s,i.custom):s;r=Promise.all(ay(o,c,i))}return r.then(()=>{o.notify("AnimationComplete",s)})}const HT={test:o=>o==="auto",parse:o=>o},oy=o=>s=>s.test(o),ny=[zn,te,na,ao,p1,h1,HT],tg=o=>ny.find(oy(o));function PT(o){return typeof o=="number"?o===0:o!==null?o==="none"||o==="0"||gv(o):!0}const QT=new Set(["brightness","contrast","saturate","opacity"]);function GT(o){const[s,i]=o.slice(0,-1).split("(");if(s==="drop-shadow")return o;const[r]=i.match(ad)||[];if(!r)return o;const c=i.replace(r,"");let f=QT.has(s)?1:0;return r!==i&&(f*=100),s+"("+f+c+")"}const kT=/\b([a-z-]*)\(.*?\)/gu,_c={...$t,getAnimatableNone:o=>{const s=o.match(kT);return s?s.map(GT).join(" "):o}},Lc={...$t,getAnimatableNone:o=>{const s=$t.parse(o);return $t.createTransformer(o)(s.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},ag={...zn,transform:Math.round},YT={rotate:ao,rotateX:ao,rotateY:ao,rotateZ:ao,scale:lr,scaleX:lr,scaleY:lr,scaleZ:lr,skew:ao,skewX:ao,skewY:ao,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:Vs,originX:Qp,originY:Qp,originZ:te},hd={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,top:te,right:te,bottom:te,left:te,inset:te,insetBlock:te,insetBlockStart:te,insetBlockEnd:te,insetInline:te,insetInlineStart:te,insetInlineEnd:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,paddingBlock:te,paddingBlockStart:te,paddingBlockEnd:te,paddingInline:te,paddingInlineStart:te,paddingInlineEnd:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,marginBlock:te,marginBlockStart:te,marginBlockEnd:te,marginInline:te,marginInlineStart:te,marginInlineEnd:te,fontSize:te,backgroundPositionX:te,backgroundPositionY:te,...YT,zIndex:ag,fillOpacity:Vs,strokeOpacity:Vs,numOctaves:ag},JT={...hd,color:Ke,backgroundColor:Ke,outlineColor:Ke,fill:Ke,stroke:Ke,borderColor:Ke,borderTopColor:Ke,borderRightColor:Ke,borderBottomColor:Ke,borderLeftColor:Ke,filter:_c,WebkitFilter:_c,mask:Lc,WebkitMask:Lc},sy=o=>JT[o],XT=new Set([_c,Lc]);function iy(o,s){let i=sy(o);return XT.has(i)||(i=$t),i.getAnimatableNone?i.getAnimatableNone(s):void 0}const ZT=new Set(["auto","none","0"]);function KT(o,s,i){let r=0,c;for(;r<o.length&&!c;){const f=o[r];typeof f=="string"&&!ZT.has(f)&&_s(f).values.length&&(c=o[r]),r++}if(c&&i)for(const f of s)o[f]=iy(i,c)}class FT extends ud{constructor(s,i,r,c,f){super(s,i,r,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:i,name:r}=this;if(!i||!i.current)return;super.readKeyframes();for(let y=0;y<s.length;y++){let b=s[y];if(typeof b=="string"&&(b=b.trim(),td(b))){const S=Wv(b,i.current);S!==void 0&&(s[y]=S),y===s.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Iv.has(r)||s.length!==2)return;const[c,f]=s,d=tg(c),p=tg(f),h=Pp(c),g=Pp(f);if(h!==g&&no[r]){this.needsMeasurement=!0;return}if(d!==p)if(Fp(d)&&Fp(p))for(let y=0;y<s.length;y++){const b=s[y];typeof b=="string"&&(s[y]=parseFloat(b))}else no[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:i}=this,r=[];for(let c=0;c<s.length;c++)(s[c]===null||PT(s[c]))&&r.push(c);r.length&&KT(s,r,i)}measureInitialState(){const{element:s,unresolvedKeyframes:i,name:r}=this;if(!s||!s.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=no[r](s.measureViewportBox(),window.getComputedStyle(s.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&s.getValue(r,c).jump(c,!1)}measureEndState(){var p;const{element:s,name:i,unresolvedKeyframes:r}=this;if(!s||!s.current)return;const c=s.getValue(i);c&&c.jump(this.measuredOrigin,!1);const f=r.length-1,d=r[f];r[f]=no[i](s.measureViewportBox(),window.getComputedStyle(s.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([h,g])=>{s.getValue(h).set(g)}),this.resolveNoneKeyframes()}}const WT=new Set(["opacity","clipPath","filter","transform"]);function ry(o,s,i){if(o==null)return[];if(o instanceof EventTarget)return[o];if(typeof o=="string"){let r=document;const c=(i==null?void 0:i[o])??r.querySelectorAll(o);return c?Array.from(c):[]}return Array.from(o).filter(r=>r!=null)}const ly=(o,s)=>s&&typeof o=="number"?s.transform(o):o;function Bc(o){return pv(o)&&"offsetHeight"in o}const{schedule:pd}=qv(queueMicrotask,!1),Ft={x:!1,y:!1};function uy(){return Ft.x||Ft.y}function $T(o){return o==="x"||o==="y"?Ft[o]?null:(Ft[o]=!0,()=>{Ft[o]=!1}):Ft.x||Ft.y?null:(Ft.x=Ft.y=!0,()=>{Ft.x=Ft.y=!1})}function cy(o,s){const i=ry(o),r=new AbortController,c={passive:!0,...s,signal:r.signal};return[i,c,()=>r.abort()]}function IT(o){return!(o.pointerType==="touch"||uy())}function ex(o,s,i={}){const[r,c,f]=cy(o,i);return r.forEach(d=>{let p=!1,h=!1,g;const y=()=>{d.removeEventListener("pointerleave",O)},b=U=>{g&&(g(U),g=void 0),y()},S=U=>{p=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),h&&(h=!1,b(U))},z=()=>{p=!0,window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",S,c)},O=U=>{if(U.pointerType!=="touch"){if(p){h=!0;return}b(U)}},B=U=>{if(!IT(U))return;h=!1;const H=s(d,U);typeof H=="function"&&(g=H,d.addEventListener("pointerleave",O,c))};d.addEventListener("pointerenter",B,c),d.addEventListener("pointerdown",z,c)}),f}const dy=(o,s)=>s?o===s?!0:dy(o,s.parentElement):!1,gd=o=>o.pointerType==="mouse"?typeof o.button!="number"||o.button<=0:o.isPrimary!==!1,tx=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ax(o){return tx.has(o.tagName)||o.isContentEditable===!0}const ox=new Set(["INPUT","SELECT","TEXTAREA"]);function nx(o){return ox.has(o.tagName)||o.isContentEditable===!0}const hr=new WeakSet;function og(o){return s=>{s.key==="Enter"&&o(s)}}function lc(o,s){o.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const sx=(o,s)=>{const i=o.currentTarget;if(!i)return;const r=og(()=>{if(hr.has(i))return;lc(i,"down");const c=og(()=>{lc(i,"up")}),f=()=>lc(i,"cancel");i.addEventListener("keyup",c,s),i.addEventListener("blur",f,s)});i.addEventListener("keydown",r,s),i.addEventListener("blur",()=>i.removeEventListener("keydown",r),s)};function ng(o){return gd(o)&&!uy()}const sg=new WeakSet;function ix(o,s,i={}){const[r,c,f]=cy(o,i),d=p=>{const h=p.currentTarget;if(!ng(p)||sg.has(p))return;hr.add(h),i.stopPropagation&&sg.add(p);const g=s(h,p),y=(z,O)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),hr.has(h)&&hr.delete(h),ng(z)&&typeof g=="function"&&g(z,{success:O})},b=z=>{y(z,h===window||h===document||i.useGlobalTarget||dy(h,z.target))},S=z=>{y(z,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",S,c)};return r.forEach(p=>{(i.useGlobalTarget?window:p).addEventListener("pointerdown",d,c),Bc(p)&&(p.addEventListener("focus",g=>sx(g,c)),!ax(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),f}function vd(o){return pv(o)&&"ownerSVGElement"in o}const pr=new WeakMap;let oo;const my=(o,s,i)=>(r,c)=>c&&c[0]?c[0][o+"Size"]:vd(r)&&"getBBox"in r?r.getBBox()[s]:r[i],rx=my("inline","width","offsetWidth"),lx=my("block","height","offsetHeight");function ux({target:o,borderBoxSize:s}){var i;(i=pr.get(o))==null||i.forEach(r=>{r(o,{get width(){return rx(o,s)},get height(){return lx(o,s)}})})}function cx(o){o.forEach(ux)}function dx(){typeof ResizeObserver>"u"||(oo=new ResizeObserver(cx))}function mx(o,s){oo||dx();const i=ry(o);return i.forEach(r=>{let c=pr.get(r);c||(c=new Set,pr.set(r,c)),c.add(s),oo==null||oo.observe(r)}),()=>{i.forEach(r=>{const c=pr.get(r);c==null||c.delete(s),c!=null&&c.size||oo==null||oo.unobserve(r)})}}const gr=new Set;let xn;function fx(){xn=()=>{const o={get width(){return window.innerWidth},get height(){return window.innerHeight}};gr.forEach(s=>s(o))},window.addEventListener("resize",xn)}function hx(o){return gr.add(o),xn||fx(),()=>{gr.delete(o),!gr.size&&typeof xn=="function"&&(window.removeEventListener("resize",xn),xn=void 0)}}function ig(o,s){return typeof o=="function"?hx(o):mx(o,s)}function px(o){return vd(o)&&o.tagName==="svg"}const gx=[...ny,Ke,$t],vx=o=>gx.find(oy(o)),rg=()=>({translate:0,scale:1,origin:0,originPoint:0}),En=()=>({x:rg(),y:rg()}),lg=()=>({min:0,max:0}),$e=()=>({x:lg(),y:lg()}),yx=new WeakMap;function Nr(o){return o!==null&&typeof o=="object"&&typeof o.start=="function"}function Ls(o){return typeof o=="string"||Array.isArray(o)}const yd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bd=["initial",...yd];function Or(o){return Nr(o.animate)||bd.some(s=>Ls(o[s]))}function fy(o){return!!(Or(o)||o.variants)}function bx(o,s,i){for(const r in s){const c=s[r],f=i[r];if(dt(c))o.addValue(r,c);else if(dt(f))o.addValue(r,Cn(c,{owner:o}));else if(f!==c)if(o.hasValue(r)){const d=o.getValue(r);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=o.getStaticValue(r);o.addValue(r,Cn(d!==void 0?d:c,{owner:o}))}}for(const r in i)s[r]===void 0&&o.removeValue(r);return s}const Uc={current:null},hy={current:!1},Sx=typeof window<"u";function Tx(){if(hy.current=!0,!!Sx)if(window.matchMedia){const o=window.matchMedia("(prefers-reduced-motion)"),s=()=>Uc.current=o.matches;o.addEventListener("change",s),s()}else Uc.current=!1}const ug=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Er={};function py(o){Er=o}function xx(){return Er}class Ex{scrapeMotionValuesFromProps(s,i,r){return{}}constructor({parent:s,props:i,presenceContext:r,reducedMotionConfig:c,skipAnimations:f,blockInitialAnimation:d,visualState:p},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ud,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const z=ft.now();this.renderScheduledAt<z&&(this.renderScheduledAt=z,je.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=p;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=y,this.parent=s,this.props=i,this.presenceContext=r,this.depth=s?s.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=f,this.options=h,this.blockInitialAnimation=!!d,this.isControllingVariants=Or(i),this.isVariantNode=fy(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:b,...S}=this.scrapeMotionValuesFromProps(i,{},this);for(const z in S){const O=S[z];g[z]!==void 0&&dt(O)&&O.set(g[z])}}mount(s){var i,r;if(this.hasBeenMounted)for(const c in this.initialValues)(i=this.values.get(c))==null||i.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=s,yx.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,f)=>this.bindToMotionValue(f,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(hy.current||Tx(),this.shouldReduceMotion=Uc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var s;this.projection&&this.projection.unmount(),so(this.notifyUpdate),so(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(s=this.parent)==null||s.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,i){if(this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)(),i.accelerate&&WT.has(s)&&this.current instanceof HTMLElement){const{factory:d,keyframes:p,times:h,ease:g,duration:y}=i.accelerate,b=new Zv({element:this.current,name:s,keyframes:p,times:h,ease:g,duration:Wt(y)}),S=d(b);this.valueSubscriptions.set(s,()=>{S(),b.cancel()});return}const r=Nn.has(s);r&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[s]=d,this.props.onUpdate&&je.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,s,i)),this.valueSubscriptions.set(s,()=>{c(),f&&f(),i.owner&&i.stop()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in Er){const i=Er[s];if(!i)continue;const{isEnabled:r,Feature:c}=i;if(!this.features[s]&&c&&r(this.props)&&(this.features[s]=new c(this)),this.features[s]){const f=this.features[s];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,i){this.latestValues[s]=i}update(s,i){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let r=0;r<ug.length;r++){const c=ug[r];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,d=s[f];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=bx(this,this.scrapeMotionValuesFromProps(s,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(s),()=>i.variantChildren.delete(s)}addValue(s,i){const r=this.values.get(s);i!==r&&(r&&this.removeValue(s),this.bindToMotionValue(s,i),this.values.set(s,i),this.latestValues[s]=i.get())}removeValue(s){this.values.delete(s);const i=this.valueSubscriptions.get(s);i&&(i(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,i){if(this.props.values&&this.props.values[s])return this.props.values[s];let r=this.values.get(s);return r===void 0&&i!==void 0&&(r=Cn(i===null?void 0:i,{owner:this}),this.addValue(s,r)),r}readValue(s,i){let r=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return r!=null&&(typeof r=="string"&&(hv(r)||gv(r))?r=parseFloat(r):!vx(r)&&$t.test(i)&&(r=iy(s,i)),this.setBaseTarget(s,dt(r)?r.get():r)),dt(r)?r.get():r}setBaseTarget(s,i){this.baseTarget[s]=i}getBaseTarget(s){var f;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const d=md(this.props,i,(f=this.presenceContext)==null?void 0:f.custom);d&&(r=d[s])}if(i&&r!==void 0)return r;const c=this.getBaseTargetFromProps(this.props,s);return c!==void 0&&!dt(c)?c:this.initialValues[s]!==void 0&&r===void 0?void 0:this.baseTarget[s]}on(s,i){return this.events[s]||(this.events[s]=new $c),this.events[s].add(i)}notify(s,...i){this.events[s]&&this.events[s].notify(...i)}scheduleRenderMicrotask(){pd.render(this.render)}}class gy extends Ex{constructor(){super(...arguments),this.KeyframeResolver=FT}sortInstanceNodePosition(s,i){return s.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(s,i){const r=s.style;return r?r[i]:void 0}removeValueFromRenderState(s,{vars:i,style:r}){delete i[s],delete r[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;dt(s)&&(this.childSubscription=s.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class io{constructor(s){this.isMounted=!1,this.node=s}update(){}}function vy({top:o,left:s,right:i,bottom:r}){return{x:{min:s,max:i},y:{min:o,max:r}}}function Ax({x:o,y:s}){return{top:s.min,right:o.max,bottom:s.max,left:o.min}}function Dx(o,s){if(!s)return o;const i=s({x:o.left,y:o.top}),r=s({x:o.right,y:o.bottom});return{top:i.y,left:i.x,bottom:r.y,right:r.x}}function uc(o){return o===void 0||o===1}function Hc({scale:o,scaleX:s,scaleY:i}){return!uc(o)||!uc(s)||!uc(i)}function qo(o){return Hc(o)||yy(o)||o.z||o.rotate||o.rotateX||o.rotateY||o.skewX||o.skewY}function yy(o){return cg(o.x)||cg(o.y)}function cg(o){return o&&o!=="0%"}function Ar(o,s,i){const r=o-i,c=s*r;return i+c}function dg(o,s,i,r,c){return c!==void 0&&(o=Ar(o,c,r)),Ar(o,i,r)+s}function Pc(o,s=0,i=1,r,c){o.min=dg(o.min,s,i,r,c),o.max=dg(o.max,s,i,r,c)}function by(o,{x:s,y:i}){Pc(o.x,s.translate,s.scale,s.originPoint),Pc(o.y,i.translate,i.scale,i.originPoint)}const mg=.999999999999,fg=1.0000000000001;function Mx(o,s,i,r=!1){const c=i.length;if(!c)return;s.x=s.y=1;let f,d;for(let p=0;p<c;p++){f=i[p],d=f.projectionDelta;const{visualElement:h}=f.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Dn(o,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(s.x*=d.x.scale,s.y*=d.y.scale,by(o,d)),r&&qo(f.latestValues)&&Dn(o,f.latestValues))}s.x<fg&&s.x>mg&&(s.x=1),s.y<fg&&s.y>mg&&(s.y=1)}function An(o,s){o.min=o.min+s,o.max=o.max+s}function hg(o,s,i,r,c=.5){const f=Be(o.min,o.max,c);Pc(o,s,i,f,r)}function Dn(o,s){hg(o.x,s.x,s.scaleX,s.scale,s.originX),hg(o.y,s.y,s.scaleY,s.scale,s.originY)}function Sy(o,s){return vy(Dx(o.getBoundingClientRect(),s))}function Cx(o,s,i){const r=Sy(o,i),{scroll:c}=s;return c&&(An(r.x,c.offset.x),An(r.y,c.offset.y)),r}const zx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},qx=qn.length;function Nx(o,s,i){let r="",c=!0;for(let f=0;f<qx;f++){const d=qn[f],p=o[d];if(p===void 0)continue;let h=!0;if(typeof p=="number")h=p===(d.startsWith("scale")?1:0);else{const g=parseFloat(p);h=d.startsWith("scale")?g===1:g===0}if(!h||i){const g=ly(p,hd[d]);if(!h){c=!1;const y=zx[d]||d;r+=`${y}(${g}) `}i&&(s[d]=g)}}return r=r.trim(),i?r=i(s,c?"":r):c&&(r="none"),r}function Sd(o,s,i){const{style:r,vars:c,transformOrigin:f}=o;let d=!1,p=!1;for(const h in s){const g=s[h];if(Nn.has(h)){d=!0;continue}else if(Ov(h)){c[h]=g;continue}else{const y=ly(g,hd[h]);h.startsWith("origin")?(p=!0,f[h]=y):r[h]=y}}if(s.transform||(d||i?r.transform=Nx(s,o.transform,i):r.transform&&(r.transform="none")),p){const{originX:h="50%",originY:g="50%",originZ:y=0}=f;r.transformOrigin=`${h} ${g} ${y}`}}function Ty(o,{style:s,vars:i},r,c){const f=o.style;let d;for(d in s)f[d]=s[d];c==null||c.applyProjectionStyles(f,r);for(d in i)f.setProperty(d,i[d])}function pg(o,s){return s.max===s.min?0:o/(s.max-s.min)*100}const Ds={correct:(o,s)=>{if(!s.target)return o;if(typeof o=="string")if(te.test(o))o=parseFloat(o);else return o;const i=pg(o,s.target.x),r=pg(o,s.target.y);return`${i}% ${r}%`}},Ox={correct:(o,{treeScale:s,projectionDelta:i})=>{const r=o,c=$t.parse(o);if(c.length>5)return r;const f=$t.createTransformer(o),d=typeof c[0]!="number"?1:0,p=i.x.scale*s.x,h=i.y.scale*s.y;c[0+d]/=p,c[1+d]/=h;const g=Be(p,h,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),f(c)}},Qc={borderRadius:{...Ds,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ds,borderTopRightRadius:Ds,borderBottomLeftRadius:Ds,borderBottomRightRadius:Ds,boxShadow:Ox};function xy(o,{layout:s,layoutId:i}){return Nn.has(o)||o.startsWith("origin")||(s||i!==void 0)&&(!!Qc[o]||o==="opacity")}function Td(o,s,i){var d;const r=o.style,c=s==null?void 0:s.style,f={};if(!r)return f;for(const p in r)(dt(r[p])||c&&dt(c[p])||xy(p,o)||((d=i==null?void 0:i.getValue(p))==null?void 0:d.liveStyle)!==void 0)&&(f[p]=r[p]);return f}function jx(o){return window.getComputedStyle(o)}class Rx extends gy{constructor(){super(...arguments),this.type="html",this.renderInstance=Ty}readValueFromInstance(s,i){var r;if(Nn.has(i))return(r=this.projection)!=null&&r.isProjecting?Cc(i):$1(s,i);{const c=jx(s),f=(Ov(i)?c.getPropertyValue(i):c[i])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(s,{transformPagePoint:i}){return Sy(s,i)}build(s,i,r){Sd(s,i,r.transformTemplate)}scrapeMotionValuesFromProps(s,i,r){return Td(s,i,r)}}const wx={offset:"stroke-dashoffset",array:"stroke-dasharray"},Vx={offset:"strokeDashoffset",array:"strokeDasharray"};function _x(o,s,i=1,r=0,c=!0){o.pathLength=1;const f=c?wx:Vx;o[f.offset]=`${-r}`,o[f.array]=`${s} ${i}`}const Lx=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Ey(o,{attrX:s,attrY:i,attrScale:r,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...p},h,g,y){if(Sd(o,p,g),h){o.style.viewBox&&(o.attrs.viewBox=o.style.viewBox);return}o.attrs=o.style,o.style={};const{attrs:b,style:S}=o;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox);for(const z of Lx)b[z]!==void 0&&(S[z]=b[z],delete b[z]);s!==void 0&&(b.x=s),i!==void 0&&(b.y=i),r!==void 0&&(b.scale=r),c!==void 0&&_x(b,c,f,d,!1)}const Ay=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Dy=o=>typeof o=="string"&&o.toLowerCase()==="svg";function Bx(o,s,i,r){Ty(o,s,void 0,r);for(const c in s.attrs)o.setAttribute(Ay.has(c)?c:fd(c),s.attrs[c])}function My(o,s,i){const r=Td(o,s,i);for(const c in o)if(dt(o[c])||dt(s[c])){const f=qn.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;r[f]=o[c]}return r}class Ux extends gy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$e}getBaseTargetFromProps(s,i){return s[i]}readValueFromInstance(s,i){if(Nn.has(i)){const r=sy(i);return r&&r.default||0}return i=Ay.has(i)?i:fd(i),s.getAttribute(i)}scrapeMotionValuesFromProps(s,i,r){return My(s,i,r)}build(s,i,r){Ey(s,i,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(s,i,r,c){Bx(s,i,r,c)}mount(s){this.isSVGTag=Dy(s.tagName),super.mount(s)}}const Hx=bd.length;function Cy(o){if(!o)return;if(!o.isControllingVariants){const i=o.parent?Cy(o.parent)||{}:{};return o.props.initial!==void 0&&(i.initial=o.props.initial),i}const s={};for(let i=0;i<Hx;i++){const r=bd[i],c=o.props[r];(Ls(c)||c===!1)&&(s[r]=c)}return s}function zy(o,s){if(!Array.isArray(s))return!1;const i=s.length;if(i!==o.length)return!1;for(let r=0;r<i;r++)if(s[r]!==o[r])return!1;return!0}const Px=[...yd].reverse(),Qx=yd.length;function Gx(o){return s=>Promise.all(s.map(({animation:i,options:r})=>UT(o,i,r)))}function kx(o){let s=Gx(o),i=gg(),r=!0;const c=h=>(g,y)=>{var S;const b=Mn(o,y,h==="exit"?(S=o.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:z,transitionEnd:O,...B}=b;g={...g,...B,...O}}return g};function f(h){s=h(o)}function d(h){const{props:g}=o,y=Cy(o.parent)||{},b=[],S=new Set;let z={},O=1/0;for(let U=0;U<Qx;U++){const H=Px[U],J=i[H],Q=g[H]!==void 0?g[H]:y[H],Z=Ls(Q),Y=H===h?J.isActive:null;Y===!1&&(O=U);let se=Q===y[H]&&Q!==g[H]&&Z;if(se&&r&&o.manuallyAnimateOnMount&&(se=!1),J.protectedKeys={...z},!J.isActive&&Y===null||!Q&&!J.prevProp||Nr(Q)||typeof Q=="boolean")continue;if(H==="exit"&&J.isActive&&Y!==!0){J.prevResolvedValues&&(z={...z,...J.prevResolvedValues});continue}const W=Yx(J.prevProp,Q);let L=W||H===h&&J.isActive&&!se&&Z||U>O&&Z,ie=!1;const De=Array.isArray(Q)?Q:[Q];let _e=De.reduce(c(H),{});Y===!1&&(_e={});const{prevResolvedValues:Re={}}=J,pt={...Re,..._e},ut=P=>{L=!0,S.has(P)&&(ie=!0,S.delete(P)),J.needsAnimating[P]=!0;const $=o.getValue(P);$&&($.liveStyle=!1)};for(const P in pt){const $=_e[P],fe=Re[P];if(z.hasOwnProperty(P))continue;let k=!1;Rc($)&&Rc(fe)?k=!zy($,fe):k=$!==fe,k?$!=null?ut(P):S.add(P):$!==void 0&&S.has(P)?ut(P):J.protectedKeys[P]=!0}J.prevProp=Q,J.prevResolvedValues=_e,J.isActive&&(z={...z,..._e}),r&&o.blockInitialAnimation&&(L=!1);const Qe=se&&W;L&&(!Qe||ie)&&b.push(...De.map(P=>{const $={type:H};if(typeof P=="string"&&r&&!Qe&&o.manuallyAnimateOnMount&&o.parent){const{parent:fe}=o,k=Mn(fe,P);if(fe.enteringChildren&&k){const{delayChildren:A}=k.transition||{};$.delay=Fv(fe.enteringChildren,o,A)}}return{animation:P,options:$}}))}if(S.size){const U={};if(typeof g.initial!="boolean"){const H=Mn(o,Array.isArray(g.initial)?g.initial[0]:g.initial);H&&H.transition&&(U.transition=H.transition)}S.forEach(H=>{const J=o.getBaseTarget(H),Q=o.getValue(H);Q&&(Q.liveStyle=!0),U[H]=J??null}),b.push({animation:U})}let B=!!b.length;return r&&(g.initial===!1||g.initial===g.animate)&&!o.manuallyAnimateOnMount&&(B=!1),r=!1,B?s(b):Promise.resolve()}function p(h,g){var b;if(i[h].isActive===g)return Promise.resolve();(b=o.variantChildren)==null||b.forEach(S=>{var z;return(z=S.animationState)==null?void 0:z.setActive(h,g)}),i[h].isActive=g;const y=d(h);for(const S in i)i[S].protectedKeys={};return y}return{animateChanges:d,setActive:p,setAnimateFunction:f,getState:()=>i,reset:()=>{i=gg()}}}function Yx(o,s){return typeof s=="string"?s!==o:Array.isArray(s)?!zy(s,o):!1}function Co(o=!1){return{isActive:o,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gg(){return{animate:Co(!0),whileInView:Co(),whileHover:Co(),whileTap:Co(),whileDrag:Co(),whileFocus:Co(),exit:Co()}}function vg(o,s){o.min=s.min,o.max=s.max}function Kt(o,s){vg(o.x,s.x),vg(o.y,s.y)}function yg(o,s){o.translate=s.translate,o.scale=s.scale,o.originPoint=s.originPoint,o.origin=s.origin}const qy=1e-4,Jx=1-qy,Xx=1+qy,Ny=.01,Zx=0-Ny,Kx=0+Ny;function ht(o){return o.max-o.min}function Fx(o,s,i){return Math.abs(o-s)<=i}function bg(o,s,i,r=.5){o.origin=r,o.originPoint=Be(s.min,s.max,o.origin),o.scale=ht(i)/ht(s),o.translate=Be(i.min,i.max,o.origin)-o.originPoint,(o.scale>=Jx&&o.scale<=Xx||isNaN(o.scale))&&(o.scale=1),(o.translate>=Zx&&o.translate<=Kx||isNaN(o.translate))&&(o.translate=0)}function js(o,s,i,r){bg(o.x,s.x,i.x,r?r.originX:void 0),bg(o.y,s.y,i.y,r?r.originY:void 0)}function Sg(o,s,i){o.min=i.min+s.min,o.max=o.min+ht(s)}function Wx(o,s,i){Sg(o.x,s.x,i.x),Sg(o.y,s.y,i.y)}function Tg(o,s,i){o.min=s.min-i.min,o.max=o.min+ht(s)}function Dr(o,s,i){Tg(o.x,s.x,i.x),Tg(o.y,s.y,i.y)}function xg(o,s,i,r,c){return o-=s,o=Ar(o,1/i,r),c!==void 0&&(o=Ar(o,1/c,r)),o}function $x(o,s=0,i=1,r=.5,c,f=o,d=o){if(na.test(s)&&(s=parseFloat(s),s=Be(d.min,d.max,s/100)-d.min),typeof s!="number")return;let p=Be(f.min,f.max,r);o===f&&(p-=s),o.min=xg(o.min,s,i,p,c),o.max=xg(o.max,s,i,p,c)}function Eg(o,s,[i,r,c],f,d){$x(o,s[i],s[r],s[c],s.scale,f,d)}const Ix=["x","scaleX","originX"],eE=["y","scaleY","originY"];function Ag(o,s,i,r){Eg(o.x,s,Ix,i?i.x:void 0,r?r.x:void 0),Eg(o.y,s,eE,i?i.y:void 0,r?r.y:void 0)}function Dg(o){return o.translate===0&&o.scale===1}function Oy(o){return Dg(o.x)&&Dg(o.y)}function Mg(o,s){return o.min===s.min&&o.max===s.max}function tE(o,s){return Mg(o.x,s.x)&&Mg(o.y,s.y)}function Cg(o,s){return Math.round(o.min)===Math.round(s.min)&&Math.round(o.max)===Math.round(s.max)}function jy(o,s){return Cg(o.x,s.x)&&Cg(o.y,s.y)}function zg(o){return ht(o.x)/ht(o.y)}function qg(o,s){return o.translate===s.translate&&o.scale===s.scale&&o.originPoint===s.originPoint}function oa(o){return[o("x"),o("y")]}function aE(o,s,i){let r="";const c=o.x.translate/s.x,f=o.y.translate/s.y,d=(i==null?void 0:i.z)||0;if((c||f||d)&&(r=`translate3d(${c}px, ${f}px, ${d}px) `),(s.x!==1||s.y!==1)&&(r+=`scale(${1/s.x}, ${1/s.y}) `),i){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:S,skewX:z,skewY:O}=i;g&&(r=`perspective(${g}px) ${r}`),y&&(r+=`rotate(${y}deg) `),b&&(r+=`rotateX(${b}deg) `),S&&(r+=`rotateY(${S}deg) `),z&&(r+=`skewX(${z}deg) `),O&&(r+=`skewY(${O}deg) `)}const p=o.x.scale*s.x,h=o.y.scale*s.y;return(p!==1||h!==1)&&(r+=`scale(${p}, ${h})`),r||"none"}const Ry=["TopLeft","TopRight","BottomLeft","BottomRight"],oE=Ry.length,Ng=o=>typeof o=="string"?parseFloat(o):o,Og=o=>typeof o=="number"||te.test(o);function nE(o,s,i,r,c,f){c?(o.opacity=Be(0,i.opacity??1,sE(r)),o.opacityExit=Be(s.opacity??1,0,iE(r))):f&&(o.opacity=Be(s.opacity??1,i.opacity??1,r));for(let d=0;d<oE;d++){const p=`border${Ry[d]}Radius`;let h=jg(s,p),g=jg(i,p);if(h===void 0&&g===void 0)continue;h||(h=0),g||(g=0),h===0||g===0||Og(h)===Og(g)?(o[p]=Math.max(Be(Ng(h),Ng(g),r),0),(na.test(g)||na.test(h))&&(o[p]+="%")):o[p]=g}(s.rotate||i.rotate)&&(o.rotate=Be(s.rotate||0,i.rotate||0,r))}function jg(o,s){return o[s]!==void 0?o[s]:o.borderRadius}const sE=wy(0,.5,Dv),iE=wy(.5,.95,Yt);function wy(o,s,i){return r=>r<o?0:r>s?1:i(ws(o,s,r))}function rE(o,s,i){const r=dt(o)?o:Cn(o);return r.start(dd("",r,s,i)),r.animation}function Bs(o,s,i,r={passive:!0}){return o.addEventListener(s,i,r),()=>o.removeEventListener(s,i)}const lE=(o,s)=>o.depth-s.depth;class uE{constructor(){this.children=[],this.isDirty=!1}add(s){Fc(this.children,s),this.isDirty=!0}remove(s){br(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(lE),this.isDirty=!1,this.children.forEach(s)}}function cE(o,s){const i=ft.now(),r=({timestamp:c})=>{const f=c-i;f>=s&&(so(r),o(f-s))};return je.setup(r,!0),()=>so(r)}function vr(o){return dt(o)?o.get():o}class dE{constructor(){this.members=[]}add(s){Fc(this.members,s);for(let i=this.members.length-1;i>=0;i--){const r=this.members[i];if(r===s||r===this.lead||r===this.prevLead)continue;const c=r.instance;c&&c.isConnected===!1&&r.isPresent!==!1&&!r.snapshot&&br(this.members,r)}s.scheduleRender()}remove(s){if(br(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(s){const i=this.members.findIndex(c=>s===c);if(i===0)return!1;let r;for(let c=i;c>=0;c--){const f=this.members[c],d=f.instance;if(f.isPresent!==!1&&(!d||d.isConnected!==!1)){r=f;break}}return r?(this.promote(r),!0):!1}promote(s,i){const r=this.lead;if(s!==r&&(this.prevLead=r,this.lead=s,s.show(),r)){r.instance&&r.scheduleRender(),s.scheduleRender();const c=r.options.layoutDependency,f=s.options.layoutDependency;if(!(c!==void 0&&f!==void 0&&c===f)){const h=r.instance;h&&h.isConnected===!1&&!r.snapshot||(s.resumeFrom=r,i&&(s.resumeFrom.preserveOpacity=!0),r.snapshot&&(s.snapshot=r.snapshot,s.snapshot.latestValues=r.animationValues||r.latestValues),s.root&&s.root.isUpdating&&(s.isLayoutDirty=!0))}const{crossfade:p}=s.options;p===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(s=>{const{options:i,resumingFrom:r}=s;i.onExitComplete&&i.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(s=>{s.instance&&s.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const yr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},cc=["","X","Y","Z"],mE=1e3;let fE=0;function dc(o,s,i,r){const{latestValues:c}=s;c[o]&&(i[o]=c[o],s.setStaticValue(o,0),r&&(r[o]=0))}function Vy(o){if(o.hasCheckedOptimisedAppear=!0,o.root===o)return;const{visualElement:s}=o.options;if(!s)return;const i=ty(s);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:f}=o.options;window.MotionCancelOptimisedAnimation(i,"transform",je,!(c||f))}const{parent:r}=o;r&&!r.hasCheckedOptimisedAppear&&Vy(r)}function _y({attachResizeListener:o,defaultParent:s,measureScroll:i,checkIsScrollRoot:r,resetTransform:c}){return class{constructor(d={},p=s==null?void 0:s()){this.id=fE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(gE),this.nodes.forEach(SE),this.nodes.forEach(TE),this.nodes.forEach(vE)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new uE)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new $c),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const h=this.eventHandlers.get(d);h&&h.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=vd(d)&&!px(d),this.instance=d;const{layoutId:p,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),o){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;je.read(()=>{b=window.innerWidth}),o(d,()=>{const z=window.innerWidth;z!==b&&(b=z,this.root.updateBlockedByResize=!0,y&&y(),y=cE(S,250),yr.hasAnimatedSinceResize&&(yr.hasAnimatedSinceResize=!1,this.nodes.forEach(Vg)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||h)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:z})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const O=this.options.transition||g.getDefaultTransition()||ME,{onLayoutAnimationStart:B,onLayoutAnimationComplete:U}=g.getProps(),H=!this.targetLayout||!jy(this.targetLayout,z),J=!b&&S;if(this.options.layoutRoot||this.resumeFrom||J||b&&(H||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const Q={...cd(O,"layout"),onPlay:B,onComplete:U};(g.shouldReduceMotion||this.options.layoutRoot)&&(Q.delay=0,Q.type=!1),this.startAnimation(Q),this.setAnimationOrigin(y,J)}else b||Vg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=z})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),so(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xE),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Vy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Rg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(wg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(bE),this.nodes.forEach(hE),this.nodes.forEach(pE)):this.nodes.forEach(wg),this.clearAllSnapshots();const p=ft.now();lt.delta=sa(0,1e3/60,p-lt.timestamp),lt.timestamp=p,lt.isProcessing=!0,ac.update.process(lt),ac.preRender.process(lt),ac.render.process(lt),lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,pd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yE),this.sharedNodes.forEach(EE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ht(this.snapshot.measuredBox.x)&&!ht(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=$e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Oy(this.projectionDelta),h=this.getTransformTemplate(),g=h?h(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;d&&this.instance&&(p||qo(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return d&&(h=this.removeTransform(h)),CE(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return $e();const p=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(zE))){const{scroll:y}=this.root;y&&(An(p.x,y.offset.x),An(p.y,y.offset.y))}return p}removeElementScroll(d){var h;const p=$e();if(Kt(p,d),(h=this.scroll)!=null&&h.wasRoot)return p;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:b,options:S}=y;y!==this.root&&b&&S.layoutScroll&&(b.wasRoot&&Kt(p,d),An(p.x,b.offset.x),An(p.y,b.offset.y))}return p}applyTransform(d,p=!1){const h=$e();Kt(h,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Dn(h,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),qo(y.latestValues)&&Dn(h,y.latestValues)}return qo(this.latestValues)&&Dn(h,this.latestValues),h}removeTransform(d){const p=$e();Kt(p,d);for(let h=0;h<this.path.length;h++){const g=this.path[h];if(!g.instance||!qo(g.latestValues))continue;Hc(g.latestValues)&&g.updateSnapshot();const y=$e(),b=g.measurePageBox();Kt(y,b),Ag(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return qo(this.latestValues)&&Ag(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var z;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(d||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(z=this.parent)!=null&&z.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=lt.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Wx(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),by(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Hc(this.parent.latestValues)||yy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,p,h){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),Dr(this.relativeTargetOrigin,p,h),Kt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var O;const d=this.getLead(),p=!!this.resumingFrom||this!==d;let h=!0;if((this.isProjectionDirty||(O=this.parent)!=null&&O.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===lt.timestamp&&(h=!1),h)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Kt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;Mx(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=$e());const{target:z}=d;if(!z){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yg(this.prevProjectionDelta.x,this.projectionDelta.x),yg(this.prevProjectionDelta.y,this.projectionDelta.y)),js(this.projectionDelta,this.layoutCorrected,z,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!qg(this.projectionDelta.x,this.prevProjectionDelta.x)||!qg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",z))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=En(),this.projectionDelta=En(),this.projectionDeltaWithTransform=En()}setAnimationOrigin(d,p=!1){const h=this.snapshot,g=h?h.latestValues:{},y={...this.latestValues},b=En();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const S=$e(),z=h?h.source:void 0,O=this.layout?this.layout.source:void 0,B=z!==O,U=this.getStack(),H=!U||U.members.length<=1,J=!!(B&&!H&&this.options.crossfade===!0&&!this.path.some(DE));this.animationProgress=0;let Q;this.mixTargetDelta=Z=>{const Y=Z/1e3;_g(b.x,d.x,Y),_g(b.y,d.y,Y),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Dr(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),AE(this.relativeTarget,this.relativeTargetOrigin,S,Y),Q&&tE(this.relativeTarget,Q)&&(this.isProjectionDirty=!1),Q||(Q=$e()),Kt(Q,this.relativeTarget)),B&&(this.animationValues=y,nE(y,g,this.latestValues,Y,J,H)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var p,h,g;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(g=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||g.stop(),this.pendingAnimation&&(so(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=je.update(()=>{yr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Cn(0)),this.motionValue.jump(0,!1),this.currentAnimation=rE(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(mE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:h,layout:g,latestValues:y}=d;if(!(!p||!h||!g)){if(this!==d&&this.layout&&g&&Ly(this.options.animationType,this.layout.layoutBox,g.layoutBox)){h=this.target||$e();const b=ht(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+b;const S=ht(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+S}Kt(p,h),Dn(p,y),js(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new dE),this.sharedNodes.get(d).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var p;const{layoutId:d}=this.options;return d?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:d}=this.options;return d?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:h}={}){const g=this.getStack();g&&g.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const g={};h.z&&dc("z",d,g,this.animationValues);for(let y=0;y<cc.length;y++)dc(`rotate${cc[y]}`,d,g,this.animationValues),dc(`skew${cc[y]}`,d,g,this.animationValues);d.render();for(const y in g)d.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vr(p==null?void 0:p.pointerEvents)||"",d.transform=h?h(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vr(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!qo(this.latestValues)&&(d.transform=h?h({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=aE(this.projectionDeltaWithTransform,this.treeScale,y);h&&(b=h(y,b)),d.transform=b;const{x:S,y:z}=this.projectionDelta;d.transformOrigin=`${S.origin*100}% ${z.origin*100}% 0`,g.animationValues?d.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const O in Qc){if(y[O]===void 0)continue;const{correct:B,applyTo:U,isCSSVariable:H}=Qc[O],J=b==="none"?y[O]:B(y[O],g);if(U){const Q=U.length;for(let Z=0;Z<Q;Z++)d[U[Z]]=J}else H?this.options.visualElement.renderState.vars[O]=J:d[O]=J}this.options.layoutId&&(d.pointerEvents=g===this?vr(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var p;return(p=d.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(Rg),this.root.sharedNodes.clear()}}}function hE(o){o.updateLayout()}function pE(o){var i;const s=((i=o.resumeFrom)==null?void 0:i.snapshot)||o.snapshot;if(o.isLead()&&o.layout&&s&&o.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:c}=o.layout,{animationType:f}=o.options,d=s.source!==o.layout.source;f==="size"?oa(b=>{const S=d?s.measuredBox[b]:s.layoutBox[b],z=ht(S);S.min=r[b].min,S.max=S.min+z}):Ly(f,s.layoutBox,r)&&oa(b=>{const S=d?s.measuredBox[b]:s.layoutBox[b],z=ht(r[b]);S.max=S.min+z,o.relativeTarget&&!o.currentAnimation&&(o.isProjectionDirty=!0,o.relativeTarget[b].max=o.relativeTarget[b].min+z)});const p=En();js(p,r,s.layoutBox);const h=En();d?js(h,o.applyTransform(c,!0),s.measuredBox):js(h,r,s.layoutBox);const g=!Oy(p);let y=!1;if(!o.resumeFrom){const b=o.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:S,layout:z}=b;if(S&&z){const O=$e();Dr(O,s.layoutBox,S.layoutBox);const B=$e();Dr(B,r,z.layoutBox),jy(O,B)||(y=!0),b.options.layoutRoot&&(o.relativeTarget=B,o.relativeTargetOrigin=O,o.relativeParent=b)}}}o.notifyListeners("didUpdate",{layout:r,snapshot:s,delta:h,layoutDelta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(o.isLead()){const{onExitComplete:r}=o.options;r&&r()}o.options.transition=void 0}function gE(o){o.parent&&(o.isProjecting()||(o.isProjectionDirty=o.parent.isProjectionDirty),o.isSharedProjectionDirty||(o.isSharedProjectionDirty=!!(o.isProjectionDirty||o.parent.isProjectionDirty||o.parent.isSharedProjectionDirty)),o.isTransformDirty||(o.isTransformDirty=o.parent.isTransformDirty))}function vE(o){o.isProjectionDirty=o.isSharedProjectionDirty=o.isTransformDirty=!1}function yE(o){o.clearSnapshot()}function Rg(o){o.clearMeasurements()}function wg(o){o.isLayoutDirty=!1}function bE(o){const{visualElement:s}=o.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),o.resetTransform()}function Vg(o){o.finishAnimation(),o.targetDelta=o.relativeTarget=o.target=void 0,o.isProjectionDirty=!0}function SE(o){o.resolveTargetDelta()}function TE(o){o.calcProjection()}function xE(o){o.resetSkewAndRotation()}function EE(o){o.removeLeadSnapshot()}function _g(o,s,i){o.translate=Be(s.translate,0,i),o.scale=Be(s.scale,1,i),o.origin=s.origin,o.originPoint=s.originPoint}function Lg(o,s,i,r){o.min=Be(s.min,i.min,r),o.max=Be(s.max,i.max,r)}function AE(o,s,i,r){Lg(o.x,s.x,i.x,r),Lg(o.y,s.y,i.y,r)}function DE(o){return o.animationValues&&o.animationValues.opacityExit!==void 0}const ME={duration:.45,ease:[.4,0,.1,1]},Bg=o=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(o),Ug=Bg("applewebkit/")&&!Bg("chrome/")?Math.round:Yt;function Hg(o){o.min=Ug(o.min),o.max=Ug(o.max)}function CE(o){Hg(o.x),Hg(o.y)}function Ly(o,s,i){return o==="position"||o==="preserve-aspect"&&!Fx(zg(s),zg(i),.2)}function zE(o){var s;return o!==o.root&&((s=o.scroll)==null?void 0:s.wasRoot)}const qE=_y({attachResizeListener:(o,s)=>Bs(o,"resize",s),measureScroll:()=>{var o,s;return{x:document.documentElement.scrollLeft||((o=document.body)==null?void 0:o.scrollLeft)||0,y:document.documentElement.scrollTop||((s=document.body)==null?void 0:s.scrollTop)||0}},checkIsScrollRoot:()=>!0}),mc={current:void 0},By=_y({measureScroll:o=>({x:o.scrollLeft,y:o.scrollTop}),defaultParent:()=>{if(!mc.current){const o=new qE({});o.mount(window),o.setOptions({layoutScroll:!0}),mc.current=o}return mc.current},resetTransform:(o,s)=>{o.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:o=>window.getComputedStyle(o).position==="fixed"}),xd=G.createContext({transformPagePoint:o=>o,isStatic:!1,reducedMotion:"never"});function Pg(o,s){if(typeof o=="function")return o(s);o!=null&&(o.current=s)}function NE(...o){return s=>{let i=!1;const r=o.map(c=>{const f=Pg(c,s);return!i&&typeof f=="function"&&(i=!0),f});if(i)return()=>{for(let c=0;c<r.length;c++){const f=r[c];typeof f=="function"?f():Pg(o[c],null)}}}}function OE(...o){return G.useCallback(NE(...o),o)}class jE extends G.Component{getSnapshotBeforeUpdate(s){const i=this.props.childRef.current;if(i&&s.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=i.offsetParent,c=Bc(r)&&r.offsetWidth||0,f=Bc(r)&&r.offsetHeight||0,d=this.props.sizeRef.current;d.height=i.offsetHeight||0,d.width=i.offsetWidth||0,d.top=i.offsetTop,d.left=i.offsetLeft,d.right=c-d.width-d.left,d.bottom=f-d.height-d.top}return null}componentDidUpdate(){}render(){return this.props.children}}function RE({children:o,isPresent:s,anchorX:i,anchorY:r,root:c,pop:f}){var S;const d=G.useId(),p=G.useRef(null),h=G.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=G.useContext(xd),y=((S=o.props)==null?void 0:S.ref)??(o==null?void 0:o.ref),b=OE(p,y);return G.useInsertionEffect(()=>{const{width:z,height:O,top:B,left:U,right:H,bottom:J}=h.current;if(s||f===!1||!p.current||!z||!O)return;const Q=i==="left"?`left: ${U}`:`right: ${H}`,Z=r==="bottom"?`bottom: ${J}`:`top: ${B}`;p.current.dataset.motionPopId=d;const Y=document.createElement("style");g&&(Y.nonce=g);const se=c??document.head;return se.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${z}px !important;
            height: ${O}px !important;
            ${Q}px !important;
            ${Z}px !important;
          }
        `),()=>{se.contains(Y)&&se.removeChild(Y)}},[s]),T.jsx(jE,{isPresent:s,childRef:p,sizeRef:h,pop:f,children:f===!1?o:G.cloneElement(o,{ref:b})})}const wE=({children:o,initial:s,isPresent:i,onExitComplete:r,custom:c,presenceAffectsLayout:f,mode:d,anchorX:p,anchorY:h,root:g})=>{const y=Kc(VE),b=G.useId();let S=!0,z=G.useMemo(()=>(S=!1,{id:b,initial:s,isPresent:i,custom:c,onExitComplete:O=>{y.set(O,!0);for(const B of y.values())if(!B)return;r&&r()},register:O=>(y.set(O,!1),()=>y.delete(O))}),[i,y,r]);return f&&S&&(z={...z}),G.useMemo(()=>{y.forEach((O,B)=>y.set(B,!1))},[i]),G.useEffect(()=>{!i&&!y.size&&r&&r()},[i]),o=T.jsx(RE,{pop:d==="popLayout",isPresent:i,anchorX:p,anchorY:h,root:g,children:o}),T.jsx(qr.Provider,{value:z,children:o})};function VE(){return new Map}function Uy(o=!0){const s=G.useContext(qr);if(s===null)return[!0,null];const{isPresent:i,onExitComplete:r,register:c}=s,f=G.useId();G.useEffect(()=>{if(o)return c(f)},[o]);const d=G.useCallback(()=>o&&r&&r(f),[f,r,o]);return!i&&r?[!1,d]:[!0]}const ur=o=>o.key||"";function Qg(o){const s=[];return G.Children.forEach(o,i=>{G.isValidElement(i)&&s.push(i)}),s}const Ed=({children:o,custom:s,initial:i=!0,onExitComplete:r,presenceAffectsLayout:c=!0,mode:f="sync",propagate:d=!1,anchorX:p="left",anchorY:h="top",root:g})=>{const[y,b]=Uy(d),S=G.useMemo(()=>Qg(o),[o]),z=d&&!y?[]:S.map(ur),O=G.useRef(!0),B=G.useRef(S),U=Kc(()=>new Map),H=G.useRef(new Set),[J,Q]=G.useState(S),[Z,Y]=G.useState(S);fv(()=>{O.current=!1,B.current=S;for(let L=0;L<Z.length;L++){const ie=ur(Z[L]);z.includes(ie)?(U.delete(ie),H.current.delete(ie)):U.get(ie)!==!0&&U.set(ie,!1)}},[Z,z.length,z.join("-")]);const se=[];if(S!==J){let L=[...S];for(let ie=0;ie<Z.length;ie++){const De=Z[ie],_e=ur(De);z.includes(_e)||(L.splice(ie,0,De),se.push(De))}return f==="wait"&&se.length&&(L=se),Y(Qg(L)),Q(S),null}const{forceRender:W}=G.useContext(Zc);return T.jsx(T.Fragment,{children:Z.map(L=>{const ie=ur(L),De=d&&!y?!1:S===Z||z.includes(ie),_e=()=>{if(H.current.has(ie))return;if(H.current.add(ie),U.has(ie))U.set(ie,!0);else return;let Re=!0;U.forEach(pt=>{pt||(Re=!1)}),Re&&(W==null||W(),Y(B.current),d&&(b==null||b()),r&&r())};return T.jsx(wE,{isPresent:De,initial:!O.current||i?void 0:!1,custom:s,presenceAffectsLayout:c,mode:f,root:g,onExitComplete:De?void 0:_e,anchorX:p,anchorY:h,children:L},ie)})})},Hy=G.createContext({strict:!1}),Gg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let kg=!1;function _E(){if(kg)return;const o={};for(const s in Gg)o[s]={isEnabled:i=>Gg[s].some(r=>!!i[r])};py(o),kg=!0}function Py(){return _E(),xx()}function LE(o){const s=Py();for(const i in o)s[i]={...s[i],...o[i]};py(s)}const BE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Mr(o){return o.startsWith("while")||o.startsWith("drag")&&o!=="draggable"||o.startsWith("layout")||o.startsWith("onTap")||o.startsWith("onPan")||o.startsWith("onLayout")||BE.has(o)}let Qy=o=>!Mr(o);function UE(o){typeof o=="function"&&(Qy=s=>s.startsWith("on")?!Mr(s):o(s))}try{UE(require("@emotion/is-prop-valid").default)}catch{}function HE(o,s,i){const r={};for(const c in o)c==="values"&&typeof o.values=="object"||(Qy(c)||i===!0&&Mr(c)||!s&&!Mr(c)||o.draggable&&c.startsWith("onDrag"))&&(r[c]=o[c]);return r}const jr=G.createContext({});function PE(o,s){if(Or(o)){const{initial:i,animate:r}=o;return{initial:i===!1||Ls(i)?i:void 0,animate:Ls(r)?r:void 0}}return o.inherit!==!1?s:{}}function QE(o){const{initial:s,animate:i}=PE(o,G.useContext(jr));return G.useMemo(()=>({initial:s,animate:i}),[Yg(s),Yg(i)])}function Yg(o){return Array.isArray(o)?o.join(" "):o}const Ad=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Gy(o,s,i){for(const r in s)!dt(s[r])&&!xy(r,i)&&(o[r]=s[r])}function GE({transformTemplate:o},s){return G.useMemo(()=>{const i=Ad();return Sd(i,s,o),Object.assign({},i.vars,i.style)},[s])}function kE(o,s){const i=o.style||{},r={};return Gy(r,i,o),Object.assign(r,GE(o,s)),r}function YE(o,s){const i={},r=kE(o,s);return o.drag&&o.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=o.drag===!0?"none":`pan-${o.drag==="x"?"y":"x"}`),o.tabIndex===void 0&&(o.onTap||o.onTapStart||o.whileTap)&&(i.tabIndex=0),i.style=r,i}const ky=()=>({...Ad(),attrs:{}});function JE(o,s,i,r){const c=G.useMemo(()=>{const f=ky();return Ey(f,s,Dy(r),o.transformTemplate,o.style),{...f.attrs,style:{...f.style}}},[s]);if(o.style){const f={};Gy(f,o.style,o),c.style={...f,...c.style}}return c}const XE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Dd(o){return typeof o!="string"||o.includes("-")?!1:!!(XE.indexOf(o)>-1||/[A-Z]/u.test(o))}function ZE(o,s,i,{latestValues:r},c,f=!1,d){const h=(d??Dd(o)?JE:YE)(s,r,c,o),g=HE(s,typeof o=="string",f),y=o!==G.Fragment?{...g,...h,ref:i}:{},{children:b}=s,S=G.useMemo(()=>dt(b)?b.get():b,[b]);return G.createElement(o,{...y,children:S})}function KE({scrapeMotionValuesFromProps:o,createRenderState:s},i,r,c){return{latestValues:FE(i,r,c,o),renderState:s()}}function FE(o,s,i,r){const c={},f=r(o,{});for(const S in f)c[S]=vr(f[S]);let{initial:d,animate:p}=o;const h=Or(o),g=fy(o);s&&g&&!h&&o.inherit!==!1&&(d===void 0&&(d=s.initial),p===void 0&&(p=s.animate));let y=i?i.initial===!1:!1;y=y||d===!1;const b=y?p:d;if(b&&typeof b!="boolean"&&!Nr(b)){const S=Array.isArray(b)?b:[b];for(let z=0;z<S.length;z++){const O=md(o,S[z]);if(O){const{transitionEnd:B,transition:U,...H}=O;for(const J in H){let Q=H[J];if(Array.isArray(Q)){const Z=y?Q.length-1:0;Q=Q[Z]}Q!==null&&(c[J]=Q)}for(const J in B)c[J]=B[J]}}}return c}const Yy=o=>(s,i)=>{const r=G.useContext(jr),c=G.useContext(qr),f=()=>KE(o,s,r,c);return i?f():Kc(f)},WE=Yy({scrapeMotionValuesFromProps:Td,createRenderState:Ad}),$E=Yy({scrapeMotionValuesFromProps:My,createRenderState:ky}),IE=Symbol.for("motionComponentSymbol");function e2(o,s,i){const r=G.useRef(i);G.useInsertionEffect(()=>{r.current=i});const c=G.useRef(null);return G.useCallback(f=>{var p;f&&((p=o.onMount)==null||p.call(o,f)),s&&(f?s.mount(f):s.unmount());const d=r.current;if(typeof d=="function")if(f){const h=d(f);typeof h=="function"&&(c.current=h)}else c.current?(c.current(),c.current=null):d(f);else d&&(d.current=f)},[s])}const Jy=G.createContext({});function Sn(o){return o&&typeof o=="object"&&Object.prototype.hasOwnProperty.call(o,"current")}function t2(o,s,i,r,c,f){var Q,Z;const{visualElement:d}=G.useContext(jr),p=G.useContext(Hy),h=G.useContext(qr),g=G.useContext(xd),y=g.reducedMotion,b=g.skipAnimations,S=G.useRef(null),z=G.useRef(!1);r=r||p.renderer,!S.current&&r&&(S.current=r(o,{visualState:s,parent:d,props:i,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:y,skipAnimations:b,isSVG:f}),z.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const O=S.current,B=G.useContext(Jy);O&&!O.projection&&c&&(O.type==="html"||O.type==="svg")&&a2(S.current,i,c,B);const U=G.useRef(!1);G.useInsertionEffect(()=>{O&&U.current&&O.update(i,h)});const H=i[ey],J=G.useRef(!!H&&!((Q=window.MotionHandoffIsComplete)!=null&&Q.call(window,H))&&((Z=window.MotionHasOptimisedAnimation)==null?void 0:Z.call(window,H)));return fv(()=>{z.current=!0,O&&(U.current=!0,window.MotionIsMounted=!0,O.updateFeatures(),O.scheduleRenderMicrotask(),J.current&&O.animationState&&O.animationState.animateChanges())}),G.useEffect(()=>{O&&(!J.current&&O.animationState&&O.animationState.animateChanges(),J.current&&(queueMicrotask(()=>{var Y;(Y=window.MotionHandoffMarkAsComplete)==null||Y.call(window,H)}),J.current=!1),O.enteringChildren=void 0)}),O}function a2(o,s,i,r){const{layoutId:c,layout:f,drag:d,dragConstraints:p,layoutScroll:h,layoutRoot:g,layoutCrossfade:y}=s;o.projection=new i(o.latestValues,s["data-framer-portal-id"]?void 0:Xy(o.parent)),o.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!d||p&&Sn(p),visualElement:o,animationType:typeof f=="string"?f:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:h,layoutRoot:g})}function Xy(o){if(o)return o.options.allowProjection!==!1?o.projection:Xy(o.parent)}function fc(o,{forwardMotionProps:s=!1,type:i}={},r,c){r&&LE(r);const f=i?i==="svg":Dd(o),d=f?$E:WE;function p(g,y){let b;const S={...G.useContext(xd),...g,layoutId:o2(g)},{isStatic:z}=S,O=QE(g),B=d(g,z);if(!z&&mv){n2();const U=s2(S);b=U.MeasureLayout,O.visualElement=t2(o,B,S,c,U.ProjectionNode,f)}return T.jsxs(jr.Provider,{value:O,children:[b&&O.visualElement?T.jsx(b,{visualElement:O.visualElement,...S}):null,ZE(o,g,e2(B,O.visualElement,y),B,z,s,f)]})}p.displayName=`motion.${typeof o=="string"?o:`create(${o.displayName??o.name??""})`}`;const h=G.forwardRef(p);return h[IE]=o,h}function o2({layoutId:o}){const s=G.useContext(Zc).id;return s&&o!==void 0?s+"-"+o:o}function n2(o,s){G.useContext(Hy).strict}function s2(o){const s=Py(),{drag:i,layout:r}=s;if(!i&&!r)return{};const c={...i,...r};return{MeasureLayout:i!=null&&i.isEnabled(o)||r!=null&&r.isEnabled(o)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function i2(o,s){if(typeof Proxy>"u")return fc;const i=new Map,r=(f,d)=>fc(f,d,o,s),c=(f,d)=>r(f,d);return new Proxy(c,{get:(f,d)=>d==="create"?r:(i.has(d)||i.set(d,fc(d,void 0,o,s)),i.get(d))})}const r2=(o,s)=>s.isSVG??Dd(o)?new Ux(s):new Rx(s,{allowProjection:o!==G.Fragment});class l2 extends io{constructor(s){super(s),s.animationState||(s.animationState=kx(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();Nr(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:i}=this.node.prevProps||{};s!==i&&this.updateAnimationControlsSubscription()}unmount(){var s;this.node.animationState.reset(),(s=this.unmountControls)==null||s.call(this)}}let u2=0;class c2 extends io{constructor(){super(...arguments),this.id=u2++}update(){if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===r)return;const c=this.node.animationState.setActive("exit",!s);i&&!s&&c.then(()=>{i(this.id)})}mount(){const{register:s,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const d2={animation:{Feature:l2},exit:{Feature:c2}};function Qs(o){return{point:{x:o.pageX,y:o.pageY}}}const m2=o=>s=>gd(s)&&o(s,Qs(s));function Rs(o,s,i,r){return Bs(o,s,m2(i),r)}const Zy=({current:o})=>o?o.ownerDocument.defaultView:null,Jg=(o,s)=>Math.abs(o-s);function f2(o,s){const i=Jg(o.x,s.x),r=Jg(o.y,s.y);return Math.sqrt(i**2+r**2)}const Xg=new Set(["auto","scroll"]);class Ky{constructor(s,i,{transformPagePoint:r,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=z=>{this.handleScroll(z.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=pc(this.lastMoveEventInfo,this.history),O=this.startEvent!==null,B=f2(z.offset,{x:0,y:0})>=this.distanceThreshold;if(!O&&!B)return;const{point:U}=z,{timestamp:H}=lt;this.history.push({...U,timestamp:H});const{onStart:J,onMove:Q}=this.handlers;O||(J&&J(this.lastMoveEvent,z),this.startEvent=this.lastMoveEvent),Q&&Q(this.lastMoveEvent,z)},this.handlePointerMove=(z,O)=>{this.lastMoveEvent=z,this.lastMoveEventInfo=hc(O,this.transformPagePoint),je.update(this.updatePoint,!0)},this.handlePointerUp=(z,O)=>{this.end();const{onEnd:B,onSessionEnd:U,resumeAnimation:H}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&H&&H(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const J=pc(z.type==="pointercancel"?this.lastMoveEventInfo:hc(O,this.transformPagePoint),this.history);this.startEvent&&B&&B(z,J),U&&U(z,J)},!gd(s))return;this.dragSnapToOrigin=f,this.handlers=i,this.transformPagePoint=r,this.distanceThreshold=d,this.contextWindow=c||window;const h=Qs(s),g=hc(h,this.transformPagePoint),{point:y}=g,{timestamp:b}=lt;this.history=[{...y,timestamp:b}];const{onSessionStart:S}=i;S&&S(s,pc(g,this.history)),this.removeListeners=Us(Rs(this.contextWindow,"pointermove",this.handlePointerMove),Rs(this.contextWindow,"pointerup",this.handlePointerUp),Rs(this.contextWindow,"pointercancel",this.handlePointerUp)),p&&this.startScrollTracking(p)}startScrollTracking(s){let i=s.parentElement;for(;i;){const r=getComputedStyle(i);(Xg.has(r.overflowX)||Xg.has(r.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(s){const i=this.scrollPositions.get(s);if(!i)return;const r=s===window,c=r?{x:window.scrollX,y:window.scrollY}:{x:s.scrollLeft,y:s.scrollTop},f={x:c.x-i.x,y:c.y-i.y};f.x===0&&f.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(s,c),je.update(this.updatePoint,!0))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),so(this.updatePoint)}}function hc(o,s){return s?{point:s(o.point)}:o}function Zg(o,s){return{x:o.x-s.x,y:o.y-s.y}}function pc({point:o},s){return{point:o,delta:Zg(o,Fy(s)),offset:Zg(o,h2(s)),velocity:p2(s,.1)}}function h2(o){return o[0]}function Fy(o){return o[o.length-1]}function p2(o,s){if(o.length<2)return{x:0,y:0};let i=o.length-1,r=null;const c=Fy(o);for(;i>=0&&(r=o[i],!(c.timestamp-r.timestamp>Wt(s)));)i--;if(!r)return{x:0,y:0};r===o[0]&&o.length>2&&c.timestamp-r.timestamp>Wt(s)*2&&(r=o[1]);const f=kt(c.timestamp-r.timestamp);if(f===0)return{x:0,y:0};const d={x:(c.x-r.x)/f,y:(c.y-r.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function g2(o,{min:s,max:i},r){return s!==void 0&&o<s?o=r?Be(s,o,r.min):Math.max(o,s):i!==void 0&&o>i&&(o=r?Be(i,o,r.max):Math.min(o,i)),o}function Kg(o,s,i){return{min:s!==void 0?o.min+s:void 0,max:i!==void 0?o.max+i-(o.max-o.min):void 0}}function v2(o,{top:s,left:i,bottom:r,right:c}){return{x:Kg(o.x,i,c),y:Kg(o.y,s,r)}}function Fg(o,s){let i=s.min-o.min,r=s.max-o.max;return s.max-s.min<o.max-o.min&&([i,r]=[r,i]),{min:i,max:r}}function y2(o,s){return{x:Fg(o.x,s.x),y:Fg(o.y,s.y)}}function b2(o,s){let i=.5;const r=ht(o),c=ht(s);return c>r?i=ws(s.min,s.max-r,o.min):r>c&&(i=ws(o.min,o.max-c,s.min)),sa(0,1,i)}function S2(o,s){const i={};return s.min!==void 0&&(i.min=s.min-o.min),s.max!==void 0&&(i.max=s.max-o.min),i}const Gc=.35;function T2(o=Gc){return o===!1?o=0:o===!0&&(o=Gc),{x:Wg(o,"left","right"),y:Wg(o,"top","bottom")}}function Wg(o,s,i){return{min:$g(o,s),max:$g(o,i)}}function $g(o,s){return typeof o=="number"?o:o[s]||0}const x2=new WeakMap;class E2{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:i=!1,distanceThreshold:r}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=b=>{i&&this.snapToCursor(Qs(b).point),this.stopAnimation()},d=(b,S)=>{const{drag:z,dragPropagation:O,onDragStart:B}=this.getProps();if(z&&!O&&(this.openDragLock&&this.openDragLock(),this.openDragLock=$T(z),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),oa(H=>{let J=this.getAxisMotionValue(H).get()||0;if(na.test(J)){const{projection:Q}=this.visualElement;if(Q&&Q.layout){const Z=Q.layout.layoutBox[H];Z&&(J=ht(Z)*(parseFloat(J)/100))}}this.originPoint[H]=J}),B&&je.update(()=>B(b,S),!1,!0),wc(this.visualElement,"transform");const{animationState:U}=this.visualElement;U&&U.setActive("whileDrag",!0)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:z,dragDirectionLock:O,onDirectionLock:B,onDrag:U}=this.getProps();if(!z&&!this.openDragLock)return;const{offset:H}=S;if(O&&this.currentDirection===null){this.currentDirection=D2(H),this.currentDirection!==null&&B&&B(this.currentDirection);return}this.updateAxis("x",S.point,H),this.updateAxis("y",S.point,H),this.visualElement.render(),U&&je.update(()=>U(b,S),!1,!0)},h=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new Ky(s,{onSessionStart:f,onStart:d,onMove:p,onSessionEnd:h,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:Zy(this.visualElement),element:this.visualElement.current})}stop(s,i){const r=s||this.latestPointerEvent,c=i||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!r)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&je.postRender(()=>p(r,c))}cancel(){this.isDragging=!1;const{projection:s,animationState:i}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(s,i,r){const{drag:c}=this.getProps();if(!r||!cr(s,c,this.currentDirection))return;const f=this.getAxisMotionValue(s);let d=this.originPoint[s]+r[s];this.constraints&&this.constraints[s]&&(d=g2(d,this.constraints[s],this.elastic[s])),f.set(d)}resolveConstraints(){var f;const{dragConstraints:s,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(f=this.visualElement.projection)==null?void 0:f.layout,c=this.constraints;s&&Sn(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&r?this.constraints=v2(r.layoutBox,s):this.constraints=!1,this.elastic=T2(i),c!==this.constraints&&!Sn(s)&&r&&this.constraints&&!this.hasMutatedConstraints&&oa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=S2(r.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:i}=this.getProps();if(!s||!Sn(s))return!1;const r=s.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const f=Cx(r,c.root,this.visualElement.getTransformPagePoint());let d=y2(c.layout.layoutBox,f);if(i){const p=i(Ax(d));this.hasMutatedConstraints=!!p,p&&(d=vy(p))}return d}startAnimation(s){const{drag:i,dragMomentum:r,dragElastic:c,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},g=oa(y=>{if(!cr(y,i,this.currentDirection))return;let b=h&&h[y]||{};d&&(b={min:0,max:0});const S=c?200:1e6,z=c?40:1e7,O={type:"inertia",velocity:r?s[y]:0,bounceStiffness:S,bounceDamping:z,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(y,O)});return Promise.all(g).then(p)}startAxisValueAnimation(s,i){const r=this.getAxisMotionValue(s);return wc(this.visualElement,s),r.start(dd(s,r,0,i,this.visualElement,!1))}stopAnimation(){oa(s=>this.getAxisMotionValue(s).stop())}getAxisMotionValue(s){const i=`_drag${s.toUpperCase()}`,r=this.visualElement.getProps(),c=r[i];return c||this.visualElement.getValue(s,(r.initial?r.initial[s]:void 0)||0)}snapToCursor(s){oa(i=>{const{drag:r}=this.getProps();if(!cr(i,r,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:p}=c.layout.layoutBox[i],h=f.get()||0;f.set(s[i]-Be(d,p,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:i}=this.getProps(),{projection:r}=this.visualElement;if(!Sn(i)||!r||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};oa(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const h=p.get();c[d]=b2({min:h,max:h},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),oa(d=>{if(!cr(d,s,null))return;const p=this.getAxisMotionValue(d),{min:h,max:g}=this.constraints[d];p.set(Be(h,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;x2.set(this.visualElement,this);const s=this.visualElement.current,i=Rs(s,"pointerdown",g=>{const{drag:y,dragListener:b=!0}=this.getProps(),S=g.target,z=S!==s&&nx(S);y&&b&&!z&&this.start(g)});let r;const c=()=>{const{dragConstraints:g}=this.getProps();Sn(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),r||(r=A2(s,g.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,d=f.addEventListener("measure",c);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),je.read(c);const p=Bs(window,"resize",()=>this.scalePositionWithinConstraints()),h=f.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(oa(b=>{const S=this.getAxisMotionValue(b);S&&(this.originPoint[b]+=g[b].translate,S.set(S.get()+g[b].translate))}),this.visualElement.render())}));return()=>{p(),i(),d(),h&&h(),r&&r()}}getProps(){const s=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:r=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:d=Gc,dragMomentum:p=!0}=s;return{...s,drag:i,dragDirectionLock:r,dragPropagation:c,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function Ig(o){let s=!0;return()=>{if(s){s=!1;return}o()}}function A2(o,s,i){const r=ig(o,Ig(i)),c=ig(s,Ig(i));return()=>{r(),c()}}function cr(o,s,i){return(s===!0||s===o)&&(i===null||i===o)}function D2(o,s=10){let i=null;return Math.abs(o.y)>s?i="y":Math.abs(o.x)>s&&(i="x"),i}class M2 extends io{constructor(s){super(s),this.removeGroupControls=Yt,this.removeListeners=Yt,this.controls=new E2(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yt}update(){const{dragControls:s}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};s!==i&&(this.removeGroupControls(),s&&(this.removeGroupControls=s.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const gc=o=>(s,i)=>{o&&je.update(()=>o(s,i),!1,!0)};class C2 extends io{constructor(){super(...arguments),this.removePointerDownListener=Yt}onPointerDown(s){this.session=new Ky(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zy(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:i,onPan:r,onPanEnd:c}=this.node.getProps();return{onSessionStart:gc(s),onStart:gc(i),onMove:gc(r),onEnd:(f,d)=>{delete this.session,c&&je.postRender(()=>c(f,d))}}}mount(){this.removePointerDownListener=Rs(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vc=!1;class z2 extends G.Component{componentDidMount(){const{visualElement:s,layoutGroup:i,switchLayoutGroup:r,layoutId:c}=this.props,{projection:f}=s;f&&(i.group&&i.group.add(f),r&&r.register&&c&&r.register(f),vc&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),yr.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:i,visualElement:r,drag:c,isPresent:f}=this.props,{projection:d}=r;return d&&(d.isPresent=f,s.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),vc=!0,c||s.layoutDependency!==i||i===void 0||s.isPresent!==f?d.willUpdate():this.safeToRemove(),s.isPresent!==f&&(f?d.promote():d.relegate()||je.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:s}=this.props.visualElement;s&&(s.root.didUpdate(),pd.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:i,switchLayoutGroup:r}=this.props,{projection:c}=s;vc=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),r&&r.deregister&&r.deregister(c))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function Wy(o){const[s,i]=Uy(),r=G.useContext(Zc);return T.jsx(z2,{...o,layoutGroup:r,switchLayoutGroup:G.useContext(Jy),isPresent:s,safeToRemove:i})}const q2={pan:{Feature:C2},drag:{Feature:M2,ProjectionNode:By,MeasureLayout:Wy}};function ev(o,s,i){const{props:r}=o;o.animationState&&r.whileHover&&o.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,f=r[c];f&&je.postRender(()=>f(s,Qs(s)))}class N2 extends io{mount(){const{current:s}=this.node;s&&(this.unmount=ex(s,(i,r)=>(ev(this.node,r,"Start"),c=>ev(this.node,c,"End"))))}unmount(){}}class O2 extends io{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Us(Bs(this.node.current,"focus",()=>this.onFocus()),Bs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function tv(o,s,i){const{props:r}=o;if(o.current instanceof HTMLButtonElement&&o.current.disabled)return;o.animationState&&r.whileTap&&o.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),f=r[c];f&&je.postRender(()=>f(s,Qs(s)))}class j2 extends io{mount(){const{current:s}=this.node;if(!s)return;const{globalTapTarget:i,propagate:r}=this.node.props;this.unmount=ix(s,(c,f)=>(tv(this.node,f,"Start"),(d,{success:p})=>tv(this.node,d,p?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const kc=new WeakMap,yc=new WeakMap,R2=o=>{const s=kc.get(o.target);s&&s(o)},w2=o=>{o.forEach(R2)};function V2({root:o,...s}){const i=o||document;yc.has(i)||yc.set(i,{});const r=yc.get(i),c=JSON.stringify(s);return r[c]||(r[c]=new IntersectionObserver(w2,{root:o,...s})),r[c]}function _2(o,s,i){const r=V2(s);return kc.set(o,i),r.observe(o),()=>{kc.delete(o),r.unobserve(o)}}const L2={some:0,all:1};class B2 extends io{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:s={}}=this.node.getProps(),{root:i,margin:r,amount:c="some",once:f}=s,d={root:i?i.current:void 0,rootMargin:r,threshold:typeof c=="number"?c:L2[c]},p=h=>{const{isIntersecting:g}=h;if(this.isInView===g||(this.isInView=g,f&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=g?y:b;S&&S(h)};return _2(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:i}=this.node;["amount","margin","root"].some(U2(s,i))&&this.startObserver()}unmount(){}}function U2({viewport:o={}},{viewport:s={}}={}){return i=>o[i]!==s[i]}const H2={inView:{Feature:B2},tap:{Feature:j2},focus:{Feature:O2},hover:{Feature:N2}},P2={layout:{ProjectionNode:By,MeasureLayout:Wy}},Q2={...d2,...H2,...q2,...P2},Gs=i2(Q2,r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k2=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,i,r)=>r?r.toUpperCase():i.toLowerCase()),av=o=>{const s=k2(o);return s.charAt(0).toUpperCase()+s.slice(1)},$y=(...o)=>o.filter((s,i,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===i).join(" ").trim(),Y2=o=>{for(const s in o)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=G.forwardRef(({color:o="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:c="",children:f,iconNode:d,...p},h)=>G.createElement("svg",{ref:h,...J2,width:s,height:s,stroke:o,strokeWidth:r?Number(i)*24/Number(s):i,className:$y("lucide",c),...!f&&!Y2(p)&&{"aria-hidden":"true"},...p},[...d.map(([g,y])=>G.createElement(g,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(o,s)=>{const i=G.forwardRef(({className:r,...c},f)=>G.createElement(X2,{ref:f,iconNode:s,className:$y(`lucide-${G2(av(o))}`,`lucide-${o}`,r),...c}));return i.displayName=av(o),i};/**
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
 */const tA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ms=at("download",tA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],oA=at("heart",aA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],sA=at("instagram",nA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],e0=at("library",iA);/**
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
 */const xA=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],EA=at("youtube",xA);function a0(o){var s,i,r="";if(typeof o=="string"||typeof o=="number")r+=o;else if(typeof o=="object")if(Array.isArray(o)){var c=o.length;for(s=0;s<c;s++)o[s]&&(i=a0(o[s]))&&(r&&(r+=" "),r+=i)}else for(i in o)o[i]&&(r&&(r+=" "),r+=i);return r}function AA(){for(var o,s,i=0,r="",c=arguments.length;i<c;i++)(o=arguments[i])&&(s=a0(o))&&(r&&(r+=" "),r+=s);return r}const DA=(o,s)=>{const i=new Array(o.length+s.length);for(let r=0;r<o.length;r++)i[r]=o[r];for(let r=0;r<s.length;r++)i[o.length+r]=s[r];return i},MA=(o,s)=>({classGroupId:o,validator:s}),o0=(o=new Map,s=null,i)=>({nextPart:o,validators:s,classGroupId:i}),Cr="-",ov=[],CA="arbitrary..",zA=o=>{const s=NA(o),{conflictingClassGroups:i,conflictingClassGroupModifiers:r}=o;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return qA(d);const p=d.split(Cr),h=p[0]===""&&p.length>1?1:0;return n0(p,h,s)},getConflictingClassGroupIds:(d,p)=>{if(p){const h=r[d],g=i[d];return h?g?DA(g,h):h:g||ov}return i[d]||ov}}},n0=(o,s,i)=>{if(o.length-s===0)return i.classGroupId;const c=o[s],f=i.nextPart.get(c);if(f){const g=n0(o,s+1,f);if(g)return g}const d=i.validators;if(d===null)return;const p=s===0?o.join(Cr):o.slice(s).join(Cr),h=d.length;for(let g=0;g<h;g++){const y=d[g];if(y.validator(p))return y.classGroupId}},qA=o=>o.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const s=o.slice(1,-1),i=s.indexOf(":"),r=s.slice(0,i);return r?CA+r:void 0})(),NA=o=>{const{theme:s,classGroups:i}=o;return OA(i,s)},OA=(o,s)=>{const i=o0();for(const r in o){const c=o[r];Cd(c,i,r,s)}return i},Cd=(o,s,i,r)=>{const c=o.length;for(let f=0;f<c;f++){const d=o[f];jA(d,s,i,r)}},jA=(o,s,i,r)=>{if(typeof o=="string"){RA(o,s,i);return}if(typeof o=="function"){wA(o,s,i,r);return}VA(o,s,i,r)},RA=(o,s,i)=>{const r=o===""?s:s0(s,o);r.classGroupId=i},wA=(o,s,i,r)=>{if(_A(o)){Cd(o(r),s,i,r);return}s.validators===null&&(s.validators=[]),s.validators.push(MA(i,o))},VA=(o,s,i,r)=>{const c=Object.entries(o),f=c.length;for(let d=0;d<f;d++){const[p,h]=c[d];Cd(h,s0(s,p),i,r)}},s0=(o,s)=>{let i=o;const r=s.split(Cr),c=r.length;for(let f=0;f<c;f++){const d=r[f];let p=i.nextPart.get(d);p||(p=o0(),i.nextPart.set(d,p)),i=p}return i},_A=o=>"isThemeGetter"in o&&o.isThemeGetter===!0,LA=o=>{if(o<1)return{get:()=>{},set:()=>{}};let s=0,i=Object.create(null),r=Object.create(null);const c=(f,d)=>{i[f]=d,s++,s>o&&(s=0,r=i,i=Object.create(null))};return{get(f){let d=i[f];if(d!==void 0)return d;if((d=r[f])!==void 0)return c(f,d),d},set(f,d){f in i?i[f]=d:c(f,d)}}},Jc="!",nv=":",BA=[],sv=(o,s,i,r,c)=>({modifiers:o,hasImportantModifier:s,baseClassName:i,maybePostfixModifierPosition:r,isExternal:c}),UA=o=>{const{prefix:s,experimentalParseClassName:i}=o;let r=c=>{const f=[];let d=0,p=0,h=0,g;const y=c.length;for(let B=0;B<y;B++){const U=c[B];if(d===0&&p===0){if(U===nv){f.push(c.slice(h,B)),h=B+1;continue}if(U==="/"){g=B;continue}}U==="["?d++:U==="]"?d--:U==="("?p++:U===")"&&p--}const b=f.length===0?c:c.slice(h);let S=b,z=!1;b.endsWith(Jc)?(S=b.slice(0,-1),z=!0):b.startsWith(Jc)&&(S=b.slice(1),z=!0);const O=g&&g>h?g-h:void 0;return sv(f,z,S,O)};if(s){const c=s+nv,f=r;r=d=>d.startsWith(c)?f(d.slice(c.length)):sv(BA,!1,d,void 0,!0)}if(i){const c=r;r=f=>i({className:f,parseClassName:c})}return r},HA=o=>{const s=new Map;return o.orderSensitiveModifiers.forEach((i,r)=>{s.set(i,1e6+r)}),i=>{const r=[];let c=[];for(let f=0;f<i.length;f++){const d=i[f],p=d[0]==="[",h=s.has(d);p||h?(c.length>0&&(c.sort(),r.push(...c),c=[]),r.push(d)):c.push(d)}return c.length>0&&(c.sort(),r.push(...c)),r}},PA=o=>({cache:LA(o.cacheSize),parseClassName:UA(o),sortModifiers:HA(o),...zA(o)}),QA=/\s+/,GA=(o,s)=>{const{parseClassName:i,getClassGroupId:r,getConflictingClassGroupIds:c,sortModifiers:f}=s,d=[],p=o.trim().split(QA);let h="";for(let g=p.length-1;g>=0;g-=1){const y=p[g],{isExternal:b,modifiers:S,hasImportantModifier:z,baseClassName:O,maybePostfixModifierPosition:B}=i(y);if(b){h=y+(h.length>0?" "+h:h);continue}let U=!!B,H=r(U?O.substring(0,B):O);if(!H){if(!U){h=y+(h.length>0?" "+h:h);continue}if(H=r(O),!H){h=y+(h.length>0?" "+h:h);continue}U=!1}const J=S.length===0?"":S.length===1?S[0]:f(S).join(":"),Q=z?J+Jc:J,Z=Q+H;if(d.indexOf(Z)>-1)continue;d.push(Z);const Y=c(H,U);for(let se=0;se<Y.length;++se){const W=Y[se];d.push(Q+W)}h=y+(h.length>0?" "+h:h)}return h},kA=(...o)=>{let s=0,i,r,c="";for(;s<o.length;)(i=o[s++])&&(r=i0(i))&&(c&&(c+=" "),c+=r);return c},i0=o=>{if(typeof o=="string")return o;let s,i="";for(let r=0;r<o.length;r++)o[r]&&(s=i0(o[r]))&&(i&&(i+=" "),i+=s);return i},YA=(o,...s)=>{let i,r,c,f;const d=h=>{const g=s.reduce((y,b)=>b(y),o());return i=PA(g),r=i.cache.get,c=i.cache.set,f=p,p(h)},p=h=>{const g=r(h);if(g)return g;const y=GA(h,i);return c(h,y),y};return f=d,(...h)=>f(kA(...h))},JA=[],We=o=>{const s=i=>i[o]||JA;return s.isThemeGetter=!0,s},r0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,l0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,XA=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,ZA=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,KA=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,FA=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,WA=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$A=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,eo=o=>XA.test(o),pe=o=>!!o&&!Number.isNaN(Number(o)),to=o=>!!o&&Number.isInteger(Number(o)),bc=o=>o.endsWith("%")&&pe(o.slice(0,-1)),Da=o=>ZA.test(o),u0=()=>!0,IA=o=>KA.test(o)&&!FA.test(o),zd=()=>!1,eD=o=>WA.test(o),tD=o=>$A.test(o),aD=o=>!ee(o)&&!ae(o),oD=o=>ro(o,m0,zd),ee=o=>r0.test(o),zo=o=>ro(o,f0,IA),iv=o=>ro(o,dD,pe),nD=o=>ro(o,p0,u0),sD=o=>ro(o,h0,zd),rv=o=>ro(o,c0,zd),iD=o=>ro(o,d0,tD),dr=o=>ro(o,g0,eD),ae=o=>l0.test(o),Cs=o=>Ro(o,f0),rD=o=>Ro(o,h0),lv=o=>Ro(o,c0),lD=o=>Ro(o,m0),uD=o=>Ro(o,d0),mr=o=>Ro(o,g0,!0),cD=o=>Ro(o,p0,!0),ro=(o,s,i)=>{const r=r0.exec(o);return r?r[1]?s(r[1]):i(r[2]):!1},Ro=(o,s,i=!1)=>{const r=l0.exec(o);return r?r[1]?s(r[1]):i:!1},c0=o=>o==="position"||o==="percentage",d0=o=>o==="image"||o==="url",m0=o=>o==="length"||o==="size"||o==="bg-size",f0=o=>o==="length",dD=o=>o==="number",h0=o=>o==="family-name",p0=o=>o==="number"||o==="weight",g0=o=>o==="shadow",mD=()=>{const o=We("color"),s=We("font"),i=We("text"),r=We("font-weight"),c=We("tracking"),f=We("leading"),d=We("breakpoint"),p=We("container"),h=We("spacing"),g=We("radius"),y=We("shadow"),b=We("inset-shadow"),S=We("text-shadow"),z=We("drop-shadow"),O=We("blur"),B=We("perspective"),U=We("aspect"),H=We("ease"),J=We("animate"),Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Y=()=>[...Z(),ae,ee],se=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto","contain","none"],L=()=>[ae,ee,h],ie=()=>[eo,"full","auto",...L()],De=()=>[to,"none","subgrid",ae,ee],_e=()=>["auto",{span:["full",to,ae,ee]},to,ae,ee],Re=()=>[to,"auto",ae,ee],pt=()=>["auto","min","max","fr",ae,ee],ut=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Qe=()=>["start","end","center","stretch","center-safe","end-safe"],j=()=>["auto",...L()],P=()=>[eo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...L()],$=()=>[eo,"screen","full","dvw","lvw","svw","min","max","fit",...L()],fe=()=>[eo,"screen","full","lh","dvh","lvh","svh","min","max","fit",...L()],k=()=>[o,ae,ee],A=()=>[...Z(),lv,rv,{position:[ae,ee]}],_=()=>["no-repeat",{repeat:["","x","y","space","round"]}],X=()=>["auto","cover","contain",lD,oD,{size:[ae,ee]}],F=()=>[bc,Cs,zo],ne=()=>["","none","full",g,ae,ee],le=()=>["",pe,Cs,zo],Se=()=>["solid","dashed","dotted","double"],Ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],he=()=>[pe,bc,lv,rv],Ca=()=>["","none",O,ae,ee],ia=()=>["none",pe,ae,ee],za=()=>["none",pe,ae,ee],wo=()=>[pe,ae,ee],Rt=()=>[eo,"full",...L()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Da],breakpoint:[Da],color:[u0],container:[Da],"drop-shadow":[Da],ease:["in","out","in-out"],font:[aD],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Da],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Da],shadow:[Da],spacing:["px",pe],text:[Da],"text-shadow":[Da],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",eo,ee,ae,U]}],container:["container"],columns:[{columns:[pe,ee,ae,p]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Y()}],overflow:[{overflow:se()}],"overflow-x":[{"overflow-x":se()}],"overflow-y":[{"overflow-y":se()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ie()}],"inset-x":[{"inset-x":ie()}],"inset-y":[{"inset-y":ie()}],start:[{"inset-s":ie(),start:ie()}],end:[{"inset-e":ie(),end:ie()}],"inset-bs":[{"inset-bs":ie()}],"inset-be":[{"inset-be":ie()}],top:[{top:ie()}],right:[{right:ie()}],bottom:[{bottom:ie()}],left:[{left:ie()}],visibility:["visible","invisible","collapse"],z:[{z:[to,"auto",ae,ee]}],basis:[{basis:[eo,"full","auto",p,...L()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[pe,eo,"auto","initial","none",ee]}],grow:[{grow:["",pe,ae,ee]}],shrink:[{shrink:["",pe,ae,ee]}],order:[{order:[to,"first","last","none",ae,ee]}],"grid-cols":[{"grid-cols":De()}],"col-start-end":[{col:_e()}],"col-start":[{"col-start":Re()}],"col-end":[{"col-end":Re()}],"grid-rows":[{"grid-rows":De()}],"row-start-end":[{row:_e()}],"row-start":[{"row-start":Re()}],"row-end":[{"row-end":Re()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":pt()}],"auto-rows":[{"auto-rows":pt()}],gap:[{gap:L()}],"gap-x":[{"gap-x":L()}],"gap-y":[{"gap-y":L()}],"justify-content":[{justify:[...ut(),"normal"]}],"justify-items":[{"justify-items":[...Qe(),"normal"]}],"justify-self":[{"justify-self":["auto",...Qe()]}],"align-content":[{content:["normal",...ut()]}],"align-items":[{items:[...Qe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Qe(),{baseline:["","last"]}]}],"place-content":[{"place-content":ut()}],"place-items":[{"place-items":[...Qe(),"baseline"]}],"place-self":[{"place-self":["auto",...Qe()]}],p:[{p:L()}],px:[{px:L()}],py:[{py:L()}],ps:[{ps:L()}],pe:[{pe:L()}],pbs:[{pbs:L()}],pbe:[{pbe:L()}],pt:[{pt:L()}],pr:[{pr:L()}],pb:[{pb:L()}],pl:[{pl:L()}],m:[{m:j()}],mx:[{mx:j()}],my:[{my:j()}],ms:[{ms:j()}],me:[{me:j()}],mbs:[{mbs:j()}],mbe:[{mbe:j()}],mt:[{mt:j()}],mr:[{mr:j()}],mb:[{mb:j()}],ml:[{ml:j()}],"space-x":[{"space-x":L()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":L()}],"space-y-reverse":["space-y-reverse"],size:[{size:P()}],"inline-size":[{inline:["auto",...$()]}],"min-inline-size":[{"min-inline":["auto",...$()]}],"max-inline-size":[{"max-inline":["none",...$()]}],"block-size":[{block:["auto",...fe()]}],"min-block-size":[{"min-block":["auto",...fe()]}],"max-block-size":[{"max-block":["none",...fe()]}],w:[{w:[p,"screen",...P()]}],"min-w":[{"min-w":[p,"screen","none",...P()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[d]},...P()]}],h:[{h:["screen","lh",...P()]}],"min-h":[{"min-h":["screen","lh","none",...P()]}],"max-h":[{"max-h":["screen","lh",...P()]}],"font-size":[{text:["base",i,Cs,zo]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,cD,nD]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",bc,ee]}],"font-family":[{font:[rD,sD,s]}],"font-features":[{"font-features":[ee]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,ae,ee]}],"line-clamp":[{"line-clamp":[pe,"none",ae,iv]}],leading:[{leading:[f,...L()]}],"list-image":[{"list-image":["none",ae,ee]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ae,ee]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Se(),"wavy"]}],"text-decoration-thickness":[{decoration:[pe,"from-font","auto",ae,zo]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[pe,"auto",ae,ee]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ae,ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ae,ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:A()}],"bg-repeat":[{bg:_()}],"bg-size":[{bg:X()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},to,ae,ee],radial:["",ae,ee],conic:[to,ae,ee]},uD,iD]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:F()}],"gradient-via-pos":[{via:F()}],"gradient-to-pos":[{to:F()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:ne()}],"rounded-s":[{"rounded-s":ne()}],"rounded-e":[{"rounded-e":ne()}],"rounded-t":[{"rounded-t":ne()}],"rounded-r":[{"rounded-r":ne()}],"rounded-b":[{"rounded-b":ne()}],"rounded-l":[{"rounded-l":ne()}],"rounded-ss":[{"rounded-ss":ne()}],"rounded-se":[{"rounded-se":ne()}],"rounded-ee":[{"rounded-ee":ne()}],"rounded-es":[{"rounded-es":ne()}],"rounded-tl":[{"rounded-tl":ne()}],"rounded-tr":[{"rounded-tr":ne()}],"rounded-br":[{"rounded-br":ne()}],"rounded-bl":[{"rounded-bl":ne()}],"border-w":[{border:le()}],"border-w-x":[{"border-x":le()}],"border-w-y":[{"border-y":le()}],"border-w-s":[{"border-s":le()}],"border-w-e":[{"border-e":le()}],"border-w-bs":[{"border-bs":le()}],"border-w-be":[{"border-be":le()}],"border-w-t":[{"border-t":le()}],"border-w-r":[{"border-r":le()}],"border-w-b":[{"border-b":le()}],"border-w-l":[{"border-l":le()}],"divide-x":[{"divide-x":le()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":le()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Se(),"hidden","none"]}],"divide-style":[{divide:[...Se(),"hidden","none"]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-bs":[{"border-bs":k()}],"border-color-be":[{"border-be":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...Se(),"none","hidden"]}],"outline-offset":[{"outline-offset":[pe,ae,ee]}],"outline-w":[{outline:["",pe,Cs,zo]}],"outline-color":[{outline:k()}],shadow:[{shadow:["","none",y,mr,dr]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":["none",b,mr,dr]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:le()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[pe,zo]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":le()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":["none",S,mr,dr]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[pe,ae,ee]}],"mix-blend":[{"mix-blend":[...Ie(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ie()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[pe]}],"mask-image-linear-from-pos":[{"mask-linear-from":he()}],"mask-image-linear-to-pos":[{"mask-linear-to":he()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":he()}],"mask-image-t-to-pos":[{"mask-t-to":he()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":he()}],"mask-image-r-to-pos":[{"mask-r-to":he()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":he()}],"mask-image-b-to-pos":[{"mask-b-to":he()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":he()}],"mask-image-l-to-pos":[{"mask-l-to":he()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":he()}],"mask-image-x-to-pos":[{"mask-x-to":he()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":he()}],"mask-image-y-to-pos":[{"mask-y-to":he()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[ae,ee]}],"mask-image-radial-from-pos":[{"mask-radial-from":he()}],"mask-image-radial-to-pos":[{"mask-radial-to":he()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Z()}],"mask-image-conic-pos":[{"mask-conic":[pe]}],"mask-image-conic-from-pos":[{"mask-conic-from":he()}],"mask-image-conic-to-pos":[{"mask-conic-to":he()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:A()}],"mask-repeat":[{mask:_()}],"mask-size":[{mask:X()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ae,ee]}],filter:[{filter:["","none",ae,ee]}],blur:[{blur:Ca()}],brightness:[{brightness:[pe,ae,ee]}],contrast:[{contrast:[pe,ae,ee]}],"drop-shadow":[{"drop-shadow":["","none",z,mr,dr]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:["",pe,ae,ee]}],"hue-rotate":[{"hue-rotate":[pe,ae,ee]}],invert:[{invert:["",pe,ae,ee]}],saturate:[{saturate:[pe,ae,ee]}],sepia:[{sepia:["",pe,ae,ee]}],"backdrop-filter":[{"backdrop-filter":["","none",ae,ee]}],"backdrop-blur":[{"backdrop-blur":Ca()}],"backdrop-brightness":[{"backdrop-brightness":[pe,ae,ee]}],"backdrop-contrast":[{"backdrop-contrast":[pe,ae,ee]}],"backdrop-grayscale":[{"backdrop-grayscale":["",pe,ae,ee]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[pe,ae,ee]}],"backdrop-invert":[{"backdrop-invert":["",pe,ae,ee]}],"backdrop-opacity":[{"backdrop-opacity":[pe,ae,ee]}],"backdrop-saturate":[{"backdrop-saturate":[pe,ae,ee]}],"backdrop-sepia":[{"backdrop-sepia":["",pe,ae,ee]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":L()}],"border-spacing-x":[{"border-spacing-x":L()}],"border-spacing-y":[{"border-spacing-y":L()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ae,ee]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[pe,"initial",ae,ee]}],ease:[{ease:["linear","initial",H,ae,ee]}],delay:[{delay:[pe,ae,ee]}],animate:[{animate:["none",J,ae,ee]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[B,ae,ee]}],"perspective-origin":[{"perspective-origin":Y()}],rotate:[{rotate:ia()}],"rotate-x":[{"rotate-x":ia()}],"rotate-y":[{"rotate-y":ia()}],"rotate-z":[{"rotate-z":ia()}],scale:[{scale:za()}],"scale-x":[{"scale-x":za()}],"scale-y":[{"scale-y":za()}],"scale-z":[{"scale-z":za()}],"scale-3d":["scale-3d"],skew:[{skew:wo()}],"skew-x":[{"skew-x":wo()}],"skew-y":[{"skew-y":wo()}],transform:[{transform:[ae,ee,"","none","gpu","cpu"]}],"transform-origin":[{origin:Y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Rt()}],"translate-x":[{"translate-x":Rt()}],"translate-y":[{"translate-y":Rt()}],"translate-z":[{"translate-z":Rt()}],"translate-none":["translate-none"],accent:[{accent:k()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ae,ee]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mbs":[{"scroll-mbs":L()}],"scroll-mbe":[{"scroll-mbe":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pbs":[{"scroll-pbs":L()}],"scroll-pbe":[{"scroll-pbe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ae,ee]}],fill:[{fill:["none",...k()]}],"stroke-w":[{stroke:[pe,Cs,zo,iv]}],stroke:[{stroke:["none",...k()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},fD=YA(mD);function zr(...o){return fD(AA(o))}const zs={pastor:{name:"Pastor Fredson Fagundes",phone:"74999829797"},elders:[{name:"Pb. Adevaldo Marques",phone:"7499795490",image:null},{name:"Pb. Elique Rios Filho",phone:"7499910068",image:null}],deacons:[{name:"Diácono Adonel Oliveira",phone:"7499076770",image:null},{name:"Diácono Antonio Rios",phone:"7499946901",image:null},{name:"Diácono Antonio Jacinto Filho",phone:"7499867018",image:null}],societies:[{name:"UPH - Pb. José dos Santos",phone:"7498119515",image:null},{name:"SAF - Osmária",phone:"7498132159",image:null}]},uv=[{month:0,day:1,name:"Suelivânia Santos da Silva Sena"},{month:0,day:7,name:"Ozileia da Silva Cunha Ferreira"},{month:0,day:12,name:"Euflorsina da Cunha Oliveira"},{month:0,day:20,name:"Bernadet"},{month:0,day:25,name:"Sidelcina da Cunha Oliveira"},{month:0,day:27,name:"Thayz Mota Cunha Franco"},{month:1,day:2,name:"Evanuzia"},{month:1,day:7,name:"Maria Betina Cunha Franco"},{month:1,day:10,name:"Arthur Oliveira Silva"},{month:1,day:10,name:"Pr. Fredson Fagundes Cerqueira"},{month:1,day:22,name:"Ir. Dete Rios"},{month:1,day:27,name:"Marilene Gonçalves da Silva"},{month:2,day:3,name:"Nalva de Antoniel"},{month:2,day:8,name:"Levi Rios Alves Fagundes"},{month:2,day:16,name:"Lucineide Oliveira Nascimento"},{month:2,day:18,name:"Jucielle"},{month:2,day:21,name:"Antônio Ferreira da Silva"},{month:2,day:21,name:"Vitor Manoel da Cunha Ferreira"},{month:2,day:23,name:"Patrícia Lopes rios cunha"},{month:2,day:26,name:"Imarcélia"},{month:2,day:26,name:"Osmária Sousa Rios"},{month:2,day:28,name:"Leonildio Ferreira dos Santos"},{month:2,day:31,name:"Élida Suzart"},{month:2,day:31,name:"Irandir da Silva Rios"},{month:3,day:7,name:"Pedro Leonel da Cunha Ferreira"},{month:3,day:13,name:"Berenice Maria da Silva Lopes"},{month:3,day:24,name:"Saullo Jacó Santos Cunha"},{month:3,day:25,name:"Elique Rios Filho"},{month:3,day:27,name:"Elinalda"},{month:4,day:10,name:"Elisa Silva Sena"},{month:4,day:25,name:"Meire da Silva Almeida Evangelista"},{month:4,day:28,name:"Edelice"},{month:5,day:5,name:"Milton Pereira Rios"},{month:5,day:6,name:"Adevaldo Marques Rios"},{month:5,day:13,name:"Joelma Cristina Rios Lima Pinho"},{month:5,day:14,name:"Alzerita Santos de Souza"},{month:5,day:17,name:"Anderson Hangel Souza Franco"},{month:5,day:21,name:"Débora Rios Ribeiro"},{month:5,day:23,name:"Juniclesio Paixao da Silva Santos"},{month:6,day:1,name:"Maria Cecília Cunha Franco"},{month:6,day:2,name:"Daniel Oliveira Santos"},{month:6,day:4,name:"Diana Rios Alves Fagundes"},{month:6,day:8,name:"Zack Samuel Barbosa Silva"},{month:6,day:19,name:"Ridair Cunha"},{month:6,day:20,name:"Welida Ticiana"},{month:6,day:27,name:"Elizânia Gonçalves da Silva Rios"},{month:7,day:4,name:"Uriel da Silva Cunha"},{month:7,day:20,name:"Izabel Rios Oliveira"},{month:8,day:1,name:"Jucirene Lopes da Silva Cunha"},{month:8,day:2,name:"Luana Lima Mendes Oliveira"},{month:8,day:12,name:"Jucineide Rios Oliveira"},{month:8,day:12,name:"Otoniel da Silva Cunha"},{month:8,day:13,name:"Antonio Rios"},{month:8,day:17,name:"Carlito Oliveira Cunha"},{month:8,day:24,name:"Fabiana de Carvalho Barbosa"},{month:8,day:25,name:"Adonel Oliveira"},{month:8,day:25,name:"Roberio Araújo Evangelista"},{month:8,day:30,name:"Jonatas Rios Guilherme"},{month:9,day:7,name:"Evangelina de Oliveira Santos"},{month:9,day:18,name:"Yasmim Barbosa Silva"},{month:9,day:25,name:"Zailde Rios Santos"},{month:9,day:26,name:"João Rodrigues de Souza (Nequinha)"},{month:9,day:29,name:"Maria Luzinete Barbosa Cerqueira"},{month:10,day:3,name:"Josiane Oliveira Santos Silva"},{month:10,day:5,name:"Izabela Mota de Souza Cunha"},{month:10,day:9,name:"Joseane da Silva Souza"},{month:10,day:9,name:"Paulo Sérgio Vieira dos Santos"},{month:10,day:12,name:"José dos Santos Oliveira"},{month:10,day:12,name:"Liz Rios Alves Fagundes"},{month:10,day:24,name:"Oseas da Silva Cunha"},{month:11,day:2,name:"Arnóbio Lopes da Silva"},{month:11,day:8,name:"Adeílda Gomes de Oliveira"},{month:11,day:8,name:"Heloísa Barbosa Silva"},{month:11,day:13,name:"Antônio Jacinto Filho"},{month:11,day:14,name:"Ozuel da Silva Cunha"},{month:11,day:17,name:"Zenilda Maria da Silva Cunha"},{month:11,day:24,name:"Edivaldo Emídio Santos"},{month:11,day:31,name:"Matheus Almeida Evangelista"}],cv=[{month:1,name:"Fevereiro",theme:"CHAMADOS AO ARREPENDIMENTO E COMUNHÃO",verse:"(Is 55:6) Buscai o SENHOR enquanto se pode achar, invocai-o enquanto está perto.",events:["01/02 (domingo): Reunião do Conselho com SAF e UPH","07/02 (sábado): Pregação no ponto – Nova Esperança","13–17/02: Retiro espiritual (Carnaval)","17/02 (terça): Reunião do Conselho","22/02 (domingo): Santa Ceia","25/02 (quarta): Santa Ceia no lar"]},{month:2,name:"Março",theme:"BUSCANDO A SANTIDADE",verse:"(1Pe 1.16) Porque escrito está: Sede santos, porque eu sou santo.",events:["Terças: Curso de formação após a Reunião de Oração","Quintas: Reunião de Doutrina: Pilares da Fé Reformada","Domingos: EBD, 10h - Carta aos Coríntios; Culto, 19h30 - Buscando a Santidade","07/03 (Sábado): Caminhada da Mulher (saída às 17h da porta da igreja, parada na casa de Meire para lanche e palestra)","14/03 (Sábado): Projeto Mão na Massa – Ourolândia","21/03 (Sábado): Nova Esperança","15/03 (Domingo): Culto e Santa Ceia - 19h30","23/03 (Segunda-feira): Reunião do Conselho e Reunião de Liderança - Casa do Pb. Elique Filho","25/03 (Quarta): Santa Ceia no Lar - Casa da Irmã Dalva","30/03 (Segunda-feira): 18h–20h Churrasco, Proza e Viola"]},{month:3,name:"Abril",theme:"A cruz e a redenção em Cristo",verse:"(Is 53:5) Mas ele foi traspassado pelas nossas transgressões e moído pelas nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",events:["11/04 (sábado): Pregação no ponto – Nova Esperança","Curso de Formação - Terças, após reunião de oração","05/04 (domingo): Café da ressureição e Culto da Páscoa com Santa Ceia","15/04 (quarta): Santa Ceia no lar","21/04 (terça): Reunião do Conselho","25/04 (sábado): Aniversário da UPH – Pregador: Pr. Nivaldo Cortes"]},{month:4,name:"Maio",theme:"Edificando a família sobre a Rocha",verse:"(Mt 7.24) Quem ouve minhas palavras e as pratica é tão sábio como a pessoa que constrói sua casa sobre uma rocha firme.",events:["03/05 (Dom): Uma família firmada na Rocha - Miss. Franco (IPB Piritiba)","05/05 (Ter): Oração nos lares (Família de Arnóbio e Lene) - Resp: UPH","10/05 (Dom): Uma família ajustada pelos princípios de Deus - Pb. Robério Evangelista","12/05 (Ter): Oração nos lares (Família de Geanhy e Irandir) - Resp: SAF","16/05 (Sáb): Culto Evangelístico (Nova Esperança) - Liturgia: SAF | Palavra: UPH","17/05 (Dom): Uma família que vence as tempestades - Miss. Abérico Macêdo (IPB Serrolândia)","19/05 (Ter): Oração nos lares (Família de Débora) - Resp: SAF","24/05 (Dom): Uma família que vence as tempestades - Pb. Gilson Rios (IPB Mairi)","26/05 (Ter): Oração nos lares (Fam. Ozuel, Juce, Uriel, Ciele, Luciano e Saulo)","31/05 (Dom): DIA DA FAMÍLIA IPVP - 10h EBD Especial | 19h Culto - Pr. Pedro (IPB Pintadas)"]},{month:5,name:"Junho",theme:"A família no centro do propósito de Deus",verse:"(Js 24:15) Eu e a minha casa serviremos ao SENHOR.",events:["06/06 (sábado): Reunião na casa do Pb. Adevaldo","12/07 (sexta): Culto evangelístico - Casas Populares","13/06 (sábado): Pregação no ponto – Nova Esperança","14/06 (domingo): Santa Ceia","16/06 (terça): Reunião do Conselho - após reunião de oração","17/06 (quarta): Santa Ceia no lar","20/06 (sábado): Jantar de Casais"]},{month:6,name:"Julho",theme:"Confiança no Senhor",verse:"(Sl 27:1) O SENHOR é a minha luz e a minha salvação; de quem terei medo?",events:["04/07 (sábado): Pregação no ponto – Nova Esperança","07/09 (Terça a Quinta): Reuniões de Consagração","12/07 (domingo - 08h): Entrega do Jejum da Consagração","12/07 (domingo - 19h30): Santa Ceia","15/07 (quarta): Santa Ceia no lar","17/07 (sexta): Culto evangelístico","18/07 (sábado): Churrasco, Proza e Viola - UPH de Serrolândia","21/07 (terça): Reunião do Conselho","30/07 (Sexta): Viagem do Retiro IPVP-2026"]},{month:7,name:"Agosto",theme:"Obedecendo ao Senhor na missão",verse:"(Jn 3:1) E veio a palavra do Senhor segunda vez a Jonas, dizendo: Levanta-te, e vai à grande cidade de Nínive.",events:["01 e 02/08 (domingo): Viagem - IPVP","08/08 (sábado): Pregação no ponto – Nova Esperança","09/08 (domingo): Santa Ceia","12/08 (quarta): Santa Ceia no lar","18/08 (terça): Reunião do Conselho","30/08 (domingo): Dia Missionário","28/08 (sexta): Culto evangelístico – Praça do cemitério"]},{month:8,name:"Setembro",theme:"Ele vem",verse:"(Ap 22:12) E eis que venho sem demora, e comigo está o galardão.",events:["05/09 (sábado): Pregação no ponto – Nova Esperança","13/09 (domingo): Santa Ceia","14/09 (segunda): Reunião de Liderança (Casa de Antonio Rios)","16/09 (quarta): Santa Ceia no lar","25/09 (sexta): Culto evangelístico – Alto da Nação","15/09 (terça): Reunião do Conselho","Dia da Bíblia (domingo)"]},{month:9,name:"Outubro",theme:"Reformando sempre",verse:"(Ef 2:8) Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus;",events:["03/10 (sábado): Pregação no ponto – Nova Esperança","04/10 (domingo): Reunião do Conselho com SAF e UPH","11/10 (domingo): Santa Ceia","Aniversário da SAF – Pastor convidado","14/10 (quarta): Santa Ceia no lar","31/10 (sexta): DIA DO EVANGÉLICO – PRAÇA PRINCIPAL"]},{month:10,name:"Novembro",theme:"Gratidão e fidelidade ao Senhor",verse:"(1Sm 7:12) Até aqui nos ajudou o SENHOR.",events:["02/11: Café teológico com o tema: 'E depois da morte...?'","07/11 (sábado): Pregação no ponto – Nova Esperança","12 e 13/11: Cultos evangelísticos na Praça da Nação e na Praça da Preguiça","14–15/11: 31 anos da IPVP – Pastor convidado e Santa Ceia","17/11 (terça): Reunião do Conselho","18/11 (quarta): Santa Ceia no lar","21–30/11: Ausência pastoral (curso em São Paulo)"]},{month:11,name:"Dezembro",theme:"O Cristo encarnado e a esperança eterna",verse:"(Jo 1:14) E o Verbo se fez carne e habitou entre nós.",events:["06/12 (domingo): Santa Ceia","07/12 (segunda): Reunião de Liderança (Casa pastoral)","09/12 (quarta): Santa Ceia no lar","11/12 (sexta): Culto evangelístico","15/12 (terça): Reunião do Conselho","20/12 (domingo) Manhã - Assembleia Geral Ordinária","Cultos de Natal e Encerramento do Ano"]}],hD=[{month:3,announcements:[{text:"Do Perdão ao Triunfo: As sete declarações de Cristo na Cruz.",image:"/aspalavrasdejesus_abril.jpg",isWeekly:!1},{text:"Celebração: UPH 27 Anos",image:"/uph27anos_abril.jpg",isWeekly:!1}]},{month:4,announcements:[{text:"Mês da Família: Edificando a família sobre a Rocha.",image:"/maio_mesdafamilia_2026.jpg",isWeekly:!1}]}],dv=[{title:"A Bênção (Gabriel Guedes)",lyrics:`Que o Senhor te abençoe
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
Escudo para os que n'Ele creem`}],K={primary:"#163328",gold:"#D4B36D",bgLight:"#F0F5F3"},pD=["Gênesis","Êxodo","Levítico","Números","Deuteronômio","Josué","Juízes","Rute","1Samuel","2Samuel","1Reis","2Reis","1Crônicas","2Crônicas","Esdras","Neemias","Ester","Jó","Salmos","Provérbios","Eclesiastes","Cânticos","Isaías","Jeremias","Lamentações","Ezequiel","Daniel","Oseias","Joel","Amós","Obadias","Jonas","Miqueias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias","Mateus","Marcos","Lucas","João","Atos","Romanos","1Coríntios","2Coríntios","Gálatas","Efésios","Filipenses","Colossenses","1Tessalonicenses","2Tessalonicenses","1Timóteo","2Timóteo","Tito","Filemom","Hebreus","Tiago","1Pedro","2Pedro","1João","2João","3João","Judas","Apocalipse"],Sc=o=>["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][o],gD=({size:o=24,className:s=""})=>T.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:s,children:T.jsx("path",{d:"M12 2v20M8 8h8"})}),vD=()=>{const[o,s]=G.useState(!1),[i,r]=G.useState(!1);G.useEffect(()=>{const f=()=>s(window.scrollY>50);return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const c=[{name:"Agenda",href:"#agenda"},{name:"Músicas",href:"#lyrics-search"},{name:"Liderança",href:"#leadership"},{name:"Bíblia",href:"#bible-quick"},{name:"Dízimos",href:"#giving"}];return T.jsxs("nav",{className:zr("fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",o?"bg-white shadow-lg py-3":"bg-white/90 backdrop-blur-sm border-b border-slate-100"),children:[T.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[T.jsxs("div",{className:"flex flex-col",children:[T.jsx("span",{className:"font-serif text-3xl font-bold leading-none",style:{color:K.primary},children:"IPVP"}),T.jsx("span",{className:"text-[9px] uppercase font-bold text-slate-500",children:"Várzea do Poço-BA"})]}),T.jsx("div",{className:"hidden xl:flex gap-6 text-xs font-bold uppercase tracking-widest",children:c.map((f,d)=>T.jsx("a",{href:f.href,className:"hover:text-amber-600 transition-colors",style:{color:K.primary},children:f.name},d))}),T.jsx("a",{href:"#contact",className:"hidden md:block px-5 py-2.5 text-white rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform",style:{backgroundColor:K.gold},children:"CONTATO"}),T.jsx("button",{className:"xl:hidden p-2",style:{color:K.primary},onClick:()=>r(!i),children:i?T.jsx(t0,{size:24}):T.jsx(cA,{size:24})})]}),T.jsx(Ed,{children:i&&T.jsx(Gs.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 xl:hidden",children:c.map(f=>T.jsx("a",{href:f.href,onClick:()=>r(!1),className:"text-lg font-serif border-b pb-2 font-bold",style:{color:K.primary},children:f.name},f.name))})})]})},yD=()=>T.jsxs("section",{id:"home",className:"relative min-h-[60vh] flex items-center justify-center pt-20",children:[T.jsxs("div",{className:"absolute inset-0 z-0",children:[T.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:"url('/fundo-igreja.jpg')"}}),T.jsx("div",{className:"absolute inset-0 bg-white/40"}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"})]}),T.jsxs("div",{className:"relative z-10 text-center px-6",children:[T.jsx(Gs.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-[100px] md:text-[140px] font-serif font-bold mb-0 leading-none",style:{color:K.primary},children:"IPVP"}),T.jsx("p",{className:"text-lg md:text-2xl font-bold uppercase tracking-[0.3em]",style:{color:K.primary},children:"Várzea do Poço-BA"})]})]}),bD=()=>{const[o,s]=G.useState(""),[i,r]=G.useState(null),c=Array.isArray(dv)?dv:[],f=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),d=o.length>2?c.filter(p=>`${p.title} ${p.lyrics}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(f)):[];return T.jsx("section",{id:"lyrics-search",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:T.jsxs("div",{className:"max-w-4xl mx-auto",children:[T.jsxs("div",{className:"text-center mb-10",children:[T.jsx(mA,{size:48,style:{color:K.gold},className:"mx-auto mb-4"}),T.jsx("h2",{className:"text-4xl font-serif font-bold",style:{color:K.primary},children:"Louvores IPVP"}),T.jsx("p",{className:"text-slate-600 text-lg mt-2 font-medium",children:"Busque por título ou trecho da música."})]}),i?T.jsxs(Gs.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white rounded-[2rem] p-6 md:p-12 shadow-2xl border-t-8",style:{borderColor:K.gold},children:[T.jsxs("div",{className:"flex justify-between items-start mb-10 border-b-2 border-slate-100 pb-6",children:[T.jsx("h3",{className:"text-3xl md:text-5xl font-serif font-bold leading-tight",style:{color:K.primary},children:i.title}),T.jsx("button",{onClick:()=>{r(null),s("")},className:"p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 transition-colors ml-4 shrink-0",children:T.jsx(t0,{size:28})})]}),T.jsx("pre",{className:"whitespace-pre-wrap font-sans text-2xl md:text-4xl leading-[1.8] text-slate-900 font-semibold tracking-wide",children:i.lyrics}),T.jsx("div",{className:"mt-12 text-center",children:T.jsx("button",{onClick:()=>{r(null),s("")},className:"px-8 py-4 rounded-full bg-slate-100 text-slate-600 font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all shadow-sm",children:"Voltar para busca"})})]}):T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"relative mb-8",children:[T.jsx(Md,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-400",size:24}),T.jsx("input",{type:"text",placeholder:"Ex: 'Que o Senhor te abençoe'...",value:o,onChange:p=>s(p.target.value),className:"w-full pl-14 pr-6 py-5 rounded-2xl border-2 outline-none font-bold text-xl text-slate-800 shadow-sm",style:{borderColor:o?K.gold:"#e2e8f0"}})]}),d.length>0&&T.jsx("div",{className:"bg-white rounded-3xl shadow-xl border-2 border-slate-100 overflow-hidden mb-8",children:d.map((p,h)=>T.jsxs("button",{onClick:()=>r(p),className:"w-full text-left px-8 py-5 hover:bg-slate-50 border-b-2 border-slate-50 last:border-0 font-extrabold text-xl text-slate-800 transition-colors flex items-center justify-between",children:[p.title,T.jsx(eA,{size:20,className:"text-slate-400"})]},h))}),o.length>2&&d.length===0&&T.jsx("p",{className:"text-center text-slate-400 italic",children:"Nenhum louvor encontrado com esse trecho."})]})]})})},SD=()=>{const[o,s]=G.useState({book:"João",cap:"3",ver:"16"}),i=r=>{r.preventDefault();const c=`https://www.bibliaonline.com.br/nvi/${o.book.toLowerCase()}/${o.cap}/${o.ver}`;window.open(c,"_blank")};return T.jsx("section",{id:"bible-quick",className:"py-12 px-6 bg-white",children:T.jsxs("div",{className:"max-w-4xl mx-auto bg-slate-50 rounded-[2rem] p-8 shadow-xl border-t-4",style:{borderColor:K.gold},children:[T.jsxs("div",{className:"flex items-center gap-3 mb-6 justify-center md:justify-start",children:[T.jsx(K2,{className:"text-amber-600",size:32}),T.jsx("h2",{className:"text-2xl font-serif font-bold",style:{color:K.primary},children:"Acesso Rápido às Escrituras"})]}),T.jsxs("form",{onSubmit:i,className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[T.jsxs("div",{className:"md:col-span-2",children:[T.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Livro"}),T.jsx("select",{value:o.book,onChange:r=>s({...o,book:r.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none",children:pD.map(r=>T.jsx("option",{value:r,children:r},r))})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Capítulo"}),T.jsx("input",{type:"number",value:o.cap,onChange:r=>s({...o,cap:r.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none"})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-[11px] font-bold uppercase text-slate-500 mb-1 ml-2",children:"Versículo"}),T.jsx("input",{type:"number",value:o.ver,onChange:r=>s({...o,ver:r.target.value}),className:"w-full p-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-slate-800 outline-none"})]}),T.jsxs("button",{type:"submit",className:"md:col-span-4 py-4 rounded-xl text-white font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform",style:{backgroundColor:K.primary},children:[T.jsx(Md,{size:20})," LER NA BÍBLIA ONLINE"]})]})]})})},TD=()=>{const[o,s]=G.useState(new Date().getMonth()),i=G.useMemo(()=>cv.find(r=>r.month===o),[o]);return T.jsx("section",{id:"agenda",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:T.jsxs("div",{className:"max-w-5xl mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-slate-200",children:[T.jsx("h2",{className:"text-3xl font-serif text-center mb-8 font-bold",style:{color:K.primary},children:"Calendário Oficial 2026"}),T.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-10",children:cv.map(r=>T.jsx("button",{onClick:()=>s(r.month),className:zr("px-5 py-2.5 rounded-full text-xs font-bold border-2 transition-all",o===r.month?"text-white shadow-md":"bg-white text-slate-800 border-slate-200"),style:o===r.month?{backgroundColor:K.primary,borderColor:K.primary}:{},children:r.name},r.month))}),T.jsx(Ed,{mode:"wait",children:i&&T.jsxs(Gs.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center",children:[T.jsxs("div",{className:"mb-8 border-b-2 border-slate-200 pb-6",children:[T.jsx("p",{className:"font-extrabold text-base uppercase mb-2",style:{color:K.gold},children:i.theme}),T.jsxs("p",{className:"italic text-slate-800 font-serif font-bold text-lg max-w-2xl mx-auto",children:['"',i.verse,'"']})]}),T.jsx("div",{className:"grid md:grid-cols-2 gap-4 text-left",children:i.events.map((r,c)=>T.jsxs("div",{className:"flex items-start gap-3 p-5 bg-slate-50 rounded-xl border-l-4 shadow-sm",style:{borderColor:K.gold},children:[T.jsx(Iy,{size:20,style:{color:K.primary},className:"shrink-0 mt-0.5"}),T.jsx("p",{className:"text-slate-900 font-bold",children:r})]},c))})]},o)})]})})},xD=()=>{const o=hD.flatMap(s=>s.announcements);return T.jsx("section",{id:"avisos",className:"py-16 px-6 bg-white",children:T.jsxs("div",{className:"max-w-6xl mx-auto",children:[T.jsx("div",{className:"text-center mb-12",children:T.jsx("h2",{className:"text-4xl font-serif font-bold",style:{color:K.primary},children:"Avisos da Igreja"})}),T.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:o.map((s,i)=>T.jsxs("div",{className:"bg-slate-50 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-100 flex flex-col",children:[s.image&&T.jsx("div",{className:"w-full bg-white flex justify-center items-center",children:T.jsx("img",{src:s.image,alt:"Aviso",className:"w-full h-auto object-contain max-h-[500px]"})}),T.jsxs("div",{className:"p-8 flex items-start gap-4",children:[T.jsx(SA,{size:28,style:{color:K.gold},className:"shrink-0 mt-1"}),T.jsx("p",{className:"text-xl font-serif italic font-extrabold text-slate-900",children:s.text})]})]},i))})]})})},ED=()=>T.jsx("section",{id:"leadership",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:T.jsxs("div",{className:"max-w-7xl mx-auto",children:[T.jsx("h2",{className:"text-4xl font-serif text-center mb-12 font-bold",style:{color:K.primary},children:"Nossa Liderança"}),T.jsxs("div",{className:"mb-16",children:[T.jsx("h3",{className:"text-2xl font-bold uppercase tracking-widest text-center mb-8",style:{color:K.gold},children:"Conselho"}),T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[T.jsxs("div",{className:"bg-white rounded-3xl p-8 text-center border-2 border-slate-100 shadow-xl",children:[T.jsx("div",{className:"aspect-square w-48 mx-auto rounded-full overflow-hidden mb-6 border-4",style:{borderColor:K.gold},children:T.jsx("img",{src:"/foto-pastor.jpg",className:"w-full h-full object-cover",onError:o=>o.currentTarget.src="https://via.placeholder.com/200?text=Pastor"})}),T.jsx("h4",{className:"text-2xl font-bold font-serif mb-1",style:{color:K.primary},children:zs.pastor.name}),T.jsx("p",{className:"text-sm uppercase text-slate-500 mb-6 font-extrabold tracking-widest",children:"Pastor Titular"}),T.jsxs("a",{href:`https://wa.me/55${zs.pastor.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm font-bold py-3 px-8 rounded-full text-white shadow-md hover:scale-105 transition-transform",style:{backgroundColor:K.gold},children:[T.jsx(Yc,{size:16})," WhatsApp"]})]}),zs.elders.map((o,s)=>T.jsxs("div",{className:"bg-white rounded-3xl p-8 text-center border-2 border-slate-100 shadow-xl",children:[T.jsx("div",{className:"aspect-square w-48 mx-auto rounded-full overflow-hidden mb-6 border-4",style:{borderColor:K.primary},children:T.jsx("img",{src:o.name.includes("Adevaldo")?"/foto-adevaldo.jpg":"/foto-elique.jpg",className:"w-full h-full object-cover",onError:i=>i.currentTarget.src="https://via.placeholder.com/200?text=Presbítero"})}),T.jsx("h4",{className:"text-2xl font-bold font-serif mb-1",style:{color:K.primary},children:o.name}),T.jsx("p",{className:"text-sm uppercase text-slate-500 mb-6 font-extrabold tracking-widest",children:"Presbítero"}),T.jsxs("a",{href:`https://wa.me/55${o.phone}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm font-bold py-3 px-8 rounded-full text-white shadow-md hover:scale-105 transition-transform",style:{backgroundColor:K.primary},children:[T.jsx(Yc,{size:16})," WhatsApp"]})]},s))]})]}),T.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-serif mb-6 border-b-2 pb-2 font-bold",style:{color:K.primary,borderColor:K.gold},children:"Junta Diaconal"}),T.jsx("div",{className:"space-y-3",children:zs.deacons.map((o,s)=>T.jsx("div",{className:"p-4 bg-white rounded-xl font-bold text-lg border-l-8 shadow-sm text-slate-900",style:{borderColor:K.gold},children:o.name},s))})]}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-serif mb-6 border-b-2 pb-2 font-bold",style:{color:K.primary,borderColor:K.gold},children:"Sociedades Internas"}),T.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:zs.societies.map((o,s)=>T.jsx("div",{className:"p-4 rounded-xl text-white text-sm font-bold text-center shadow-md",style:{backgroundColor:K.primary},children:o.name},s))})]})]})]})}),AD=()=>T.jsx("section",{id:"resources",className:"py-16 px-6 bg-white",children:T.jsxs("div",{className:"max-w-7xl mx-auto",children:[T.jsxs("div",{className:"text-center mb-10",children:[T.jsx("h2",{className:"text-4xl font-serif mb-4 font-bold",style:{color:K.primary},children:"Crescimento Espiritual e Documentos"}),T.jsxs("div",{className:"flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-12 mt-8",children:[T.jsxs("a",{href:"/estatuto_ipvp_2026.pdf",download:"estatuto_ipvp_2026.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#334155"},children:[T.jsx(Ms,{size:16})," Estatuto IPVP 2026"]}),T.jsxs("a",{href:"/guia_trabalho_saf.pdf",download:!0,className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#be123c"},children:[T.jsx(Ms,{size:16})," Guia de Trabalho SAF"]}),T.jsxs("a",{href:"/guia_trabalho_uph.pdf",download:!0,className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:"#1d4ed8"},children:[T.jsx(Ms,{size:16})," Guia de Trabalho UPH"]}),T.jsxs("a",{href:"/manual_unificado.pdf",download:"manual_unificado.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:K.gold},children:[T.jsx(Ms,{size:16})," Manual Unificado"]}),T.jsxs("a",{href:"/manual_presbiteriano_2025.pdf",download:"manual_presbiteriano_2025.pdf",className:"flex items-center gap-2 px-6 py-4 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-xs",style:{backgroundColor:K.primary},children:[T.jsx(Ms,{size:16})," Manual da IPB"]})]})]}),T.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[T.jsxs("a",{href:"https://www.bible.com/pt/reading-plans",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[T.jsx(Iy,{size:40,style:{color:K.gold},className:"mb-4"}),T.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Planos de Leitura"}),T.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Leitura bíblica diária organizada."})]}),T.jsxs("a",{href:"https://ipcuiaba.com.br/noticias/118538/hinario-novo-cantico",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[T.jsx(hA,{size:40,style:{color:K.gold},className:"mb-4"}),T.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Novo Cântico"}),T.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Letras e partituras do hinário oficial."})]}),T.jsxs("a",{href:"https://drive.google.com/drive/folders/1NlippJmh36vxHQRFnPI8ivxSUfCHPP5D",target:"_blank",className:"bg-slate-50 p-8 rounded-[2rem] shadow-lg border-2 border-slate-100 hover:shadow-2xl flex flex-col",children:[T.jsx(e0,{size:40,style:{color:K.gold},className:"mb-4"}),T.jsx("h5",{className:"font-serif text-2xl mb-2 font-bold text-slate-900",children:"Estudos Bíblicos"}),T.jsx("p",{className:"text-slate-600 text-base font-medium flex-1",children:"Material ministrado em nossa igreja."})]})]})]})}),DD=()=>{const[o,s]=G.useState(""),[i,r]=G.useState(""),c=new Date().getMonth(),f=G.useMemo(()=>uv.filter(h=>h.name.toLowerCase().includes(o.toLowerCase())&&(i===""||h.month===Number(i))).sort((h,g)=>h.month-g.month||h.day-g.day),[o,i]),d=G.useMemo(()=>uv.filter(h=>h.month===c).sort((h,g)=>h.day-g.day),[c]);let p="";return c===3?p="/niverabril2026.jpg":c===4?p="/nivermaio2026.jpg":c===5&&(p="/niverjunho2026.jpg"),T.jsx("section",{id:"birthdays",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:T.jsxs("div",{className:"max-w-5xl mx-auto",children:[T.jsxs("h2",{className:"text-4xl font-serif text-center mb-10 font-bold",style:{color:K.primary},children:["Aniversariantes de ",Sc(c)]}),T.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:d.map((h,g)=>T.jsxs("div",{className:"px-6 py-3 bg-white rounded-xl border-2 shadow-md flex items-center gap-3",style:{borderColor:K.gold},children:[T.jsx("span",{className:"font-black text-2xl",style:{color:K.primary},children:h.day}),T.jsx("span",{className:"font-extrabold text-slate-900 text-lg",children:h.name})]},g))}),T.jsxs("div",{className:"bg-white p-6 rounded-3xl border-2 shadow-md flex flex-col md:flex-row gap-4 mb-10",style:{borderColor:K.primary+"30"},children:[T.jsxs("div",{className:"flex-1 relative",children:[T.jsx(Md,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-500",size:24}),T.jsx("input",{type:"text",placeholder:"Buscar irmão pelo nome...",value:o,onChange:h=>s(h.target.value),className:"w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-slate-200 outline-none text-slate-900 font-bold text-lg focus:border-amber-500"})]}),T.jsxs("select",{value:i,onChange:h=>r(h.target.value),className:"px-6 py-4 rounded-2xl border-2 border-slate-200 outline-none bg-white text-slate-900 font-bold text-lg",children:[T.jsx("option",{value:"",children:"Todos os Meses"}),Array.from({length:12}).map((h,g)=>T.jsx("option",{value:g,children:Sc(g)},g))]})]}),T.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",children:f.slice(0,9).map((h,g)=>T.jsxs("div",{className:"bg-white p-5 rounded-2xl border-l-8 shadow-md flex items-center justify-between",style:{borderColor:K.primary},children:[T.jsxs("div",{children:[T.jsx("h4",{className:"font-extrabold text-lg text-slate-900",children:h.name}),T.jsxs("p",{className:"text-xs font-black uppercase mt-1 tracking-widest",style:{color:K.gold},children:[h.day," de ",Sc(h.month)]})]}),T.jsx(W2,{size:24,style:{color:K.primary},className:"opacity-80"})]},g))}),p&&T.jsx("div",{className:"bg-white p-4 rounded-[2rem] shadow-2xl border-4",style:{borderColor:K.gold},children:T.jsx("img",{src:p,className:"w-full h-auto rounded-2xl",onError:h=>h.currentTarget.style.display="none"})})]})})},MD=()=>T.jsx("section",{className:"py-16 px-6 bg-white",children:T.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[T.jsx("h2",{className:"text-4xl font-serif mb-8 font-bold",style:{color:K.primary},children:"Curso: Preparando-se para servir"}),T.jsx("div",{className:"relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 mb-8",children:T.jsx("iframe",{className:"w-full h-full",src:"https://www.youtube.com/embed/yAu3BtPWi4s",title:"Curso",frameBorder:"0",allowFullScreen:!0})})]})}),CD=()=>T.jsx("section",{id:"giving",className:"py-16 px-6",style:{backgroundColor:K.bgLight},children:T.jsxs("div",{className:"max-w-4xl mx-auto text-center rounded-[3rem] p-12 text-white shadow-2xl border-4 border-white",style:{backgroundColor:K.primary},children:[T.jsx(oA,{size:48,className:"mx-auto mb-6",style:{color:K.gold}}),T.jsx("h2",{className:"text-4xl font-serif mb-6 font-bold",children:"Dízimos e Ofertas"}),T.jsx("div",{className:"bg-white/10 p-6 rounded-2xl border border-white/20 inline-block font-mono text-2xl font-bold tracking-widest mb-6",children:"PIX: 03.507.028/0001-08"}),T.jsx("p",{className:"text-base font-extrabold uppercase tracking-widest",style:{color:K.gold},children:"Banco SICOOB | Ag: 3289 | CC: 118524"})]})}),zD=()=>{const[o,s]=G.useState({name:"",contact:"",message:""}),i=r=>{r.preventDefault();const c=`*Site*%0ANome: ${o.name}%0AContato: ${o.contact}%0A*Msg:* ${o.message}`;window.open(`https://wa.me/5574999829797?text=${c}`,"_blank")};return T.jsx("section",{id:"contact",className:"py-16 px-6 bg-white",children:T.jsxs("div",{className:"max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center",children:[T.jsxs("div",{children:[T.jsx("h2",{className:"text-4xl font-serif mb-8 font-bold",style:{color:K.primary},children:"Fale Conosco"}),T.jsxs("form",{onSubmit:i,className:"space-y-5 bg-slate-50 p-10 rounded-[2rem] shadow-xl border border-slate-200",children:[T.jsx("input",{type:"text",required:!0,placeholder:"Seu Nome",className:"w-full p-5 rounded-xl border-2 outline-none font-bold text-slate-800 focus:border-amber-500",value:o.name,onChange:r=>s({...o,name:r.target.value})}),T.jsx("input",{type:"text",required:!0,placeholder:"Seu Telefone",className:"w-full p-5 rounded-xl border-2 outline-none font-bold text-slate-800 focus:border-amber-500",value:o.contact,onChange:r=>s({...o,contact:r.target.value})}),T.jsx("textarea",{required:!0,rows:4,placeholder:"Sua Mensagem...",className:"w-full p-5 rounded-xl border-2 resize-none outline-none font-bold text-slate-800 focus:border-amber-500",value:o.message,onChange:r=>s({...o,message:r.target.value})}),T.jsx("button",{type:"submit",className:"w-full py-5 text-white rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-transform",style:{backgroundColor:K.primary},children:"Enviar via WhatsApp"})]})]}),T.jsxs("div",{className:"rounded-[2rem] h-[500px] text-white p-10 flex flex-col items-center justify-center shadow-2xl border-4 border-slate-100",style:{backgroundColor:K.primary},children:[T.jsx(lA,{size:56,className:"mb-6",style:{color:K.gold}}),T.jsx("h3",{className:"text-4xl font-serif mb-4 font-bold",children:"Localização"}),T.jsx("p",{className:"text-white/80 mb-10 max-w-xs text-center text-lg font-medium",children:"R. Durval Gama, 17, Várzea do Poço - BA."}),T.jsx("a",{href:"https://www.google.com/maps/search/?api=1&query=R.+Durval+Gama,+17,+Várzea+do+Poço+-+BA,+44715-000",target:"_blank",rel:"noreferrer",className:"px-10 py-4 bg-white rounded-full font-bold shadow-xl text-lg hover:scale-105 transition-transform",style:{color:K.primary},children:"Ver no Mapa"})]})]})})},qD=()=>{const[o,s]=G.useState(!1),i=[{icon:T.jsx(EA,{size:24}),href:"https://www.youtube.com/@IPBVARZEADOPOCO",color:"bg-red-600"},{icon:T.jsx(sA,{size:24}),href:"https://www.instagram.com/ipvarzeapoco",color:"bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"},{icon:T.jsx(Yc,{size:24}),href:"https://wa.me/5574999829797",color:"bg-green-500"},{icon:T.jsx(e0,{size:24}),href:"https://script.google.com/macros/s/AKfycbxltiBSW-TkOr3pmPwANW_g4Futtu_MqIX2nwk3lYr6-Ak2Ic5QmGnPTR5AV3F74aR7/exec",color:"bg-slate-700"}];return T.jsxs("div",{className:"fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4",children:[T.jsx(Ed,{children:o&&i.map((r,c)=>T.jsx(Gs.a,{href:r.href,target:"_blank",rel:"noreferrer",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:zr("w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform",r.color),children:r.icon},c))}),T.jsx("button",{onClick:()=>s(!o),className:"w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:scale-105",style:{backgroundColor:o?"#333":K.gold},children:T.jsx(vA,{size:36,className:zr(o&&"rotate-45")})})]})};function ND(){return T.jsxs("div",{className:"min-h-screen bg-white font-sans text-slate-800",children:[T.jsx(vD,{}),T.jsx(yD,{}),T.jsx(SD,{}),T.jsx(bD,{}),T.jsx(TD,{}),T.jsx(xD,{}),T.jsx(ED,{}),T.jsx(AD,{}),T.jsx(DD,{}),T.jsx(MD,{}),T.jsx(CD,{}),T.jsx(zD,{}),T.jsxs("footer",{className:"py-12 text-center bg-slate-50 border-t-2 border-slate-200",children:[T.jsx(gD,{size:40,className:"mx-auto mb-4",style:{color:K.gold}}),T.jsx("p",{className:"font-serif font-bold text-2xl mb-1",style:{color:K.primary},children:"IP Várzea do Poço"}),T.jsx("p",{className:"text-sm font-medium text-slate-500",children:"© 2026 - Fidelidade à Palavra de Deus."})]}),T.jsx(qD,{})]})}KS.createRoot(document.getElementById("root")).render(T.jsx(G.StrictMode,{children:T.jsx(ND,{})}));
