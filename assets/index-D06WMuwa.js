function uf(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();function df(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vd={exports:{}},yo={},bd={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),hf=Symbol.for("react.portal"),mf=Symbol.for("react.fragment"),pf=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),gf=Symbol.for("react.provider"),yf=Symbol.for("react.context"),vf=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),wf=Symbol.for("react.memo"),xf=Symbol.for("react.lazy"),cc=Symbol.iterator;function kf(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var wd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xd=Object.assign,kd={};function _n(e,t,r){this.props=e,this.context=t,this.refs=kd,this.updater=r||wd}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sd(){}Sd.prototype=_n.prototype;function _l(e,t,r){this.props=e,this.context=t,this.refs=kd,this.updater=r||wd}var Gl=_l.prototype=new Sd;Gl.constructor=_l;xd(Gl,_n.prototype);Gl.isPureReactComponent=!0;var uc=Array.isArray,Td=Object.prototype.hasOwnProperty,Ul={current:null},Ad={key:!0,ref:!0,__self:!0,__source:!0};function Md(e,t,r){var n,a={},i=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Td.call(t,n)&&!Ad.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(s===1)a.children=r;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)a[n]===void 0&&(a[n]=s[n]);return{$$typeof:Oa,type:e,key:i,ref:o,props:a,_owner:Ul.current}}function Sf(e,t){return{$$typeof:Oa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oa}function Tf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var dc=/\/+/g;function Wo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tf(""+e.key):t.toString(36)}function Ti(e,t,r,n,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Oa:case hf:o=!0}}if(o)return o=e,a=a(o),e=n===""?"."+Wo(o,0):n,uc(a)?(r="",e!=null&&(r=e.replace(dc,"$&/")+"/"),Ti(a,t,r,"",function(d){return d})):a!=null&&(Wl(a)&&(a=Sf(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(dc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,n=n===""?".":n+":",uc(e))for(var s=0;s<e.length;s++){i=e[s];var l=n+Wo(i,s);o+=Ti(i,t,r,l,a)}else if(l=kf(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=n+Wo(i,s++),o+=Ti(i,t,r,l,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(e,t,r){if(e==null)return e;var n=[],a=0;return Ti(e,n,"","",function(i){return t.call(r,i,a++)}),n}function Af(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Ai={transition:null},Mf={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Ul};function Cd(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Xa,forEach:function(e,t,r){Xa(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Xa(e,function(){t++}),t},toArray:function(e){return Xa(e,function(t){return t})||[]},only:function(e){if(!Wl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=_n;te.Fragment=mf;te.Profiler=ff;te.PureComponent=_l;te.StrictMode=pf;te.Suspense=bf;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mf;te.act=Cd;te.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=xd({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Ul.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Td.call(t,l)&&!Ad.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];n.children=s}return{$$typeof:Oa,type:e.type,key:a,ref:i,props:n,_owner:o}};te.createContext=function(e){return e={$$typeof:yf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gf,_context:e},e.Consumer=e};te.createElement=Md;te.createFactory=function(e){var t=Md.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:vf,render:e}};te.isValidElement=Wl;te.lazy=function(e){return{$$typeof:xf,_payload:{_status:-1,_result:e},_init:Af}};te.memo=function(e,t){return{$$typeof:wf,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};te.unstable_act=Cd;te.useCallback=function(e,t){return We.current.useCallback(e,t)};te.useContext=function(e){return We.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return We.current.useDeferredValue(e)};te.useEffect=function(e,t){return We.current.useEffect(e,t)};te.useId=function(){return We.current.useId()};te.useImperativeHandle=function(e,t,r){return We.current.useImperativeHandle(e,t,r)};te.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return We.current.useMemo(e,t)};te.useReducer=function(e,t,r){return We.current.useReducer(e,t,r)};te.useRef=function(e){return We.current.useRef(e)};te.useState=function(e){return We.current.useState(e)};te.useSyncExternalStore=function(e,t,r){return We.current.useSyncExternalStore(e,t,r)};te.useTransition=function(){return We.current.useTransition()};te.version="18.3.1";bd.exports=te;var I=bd.exports;const hn=df(I),Cf=uf({__proto__:null,default:hn},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf=I,Df=Symbol.for("react.element"),Bf=Symbol.for("react.fragment"),If=Object.prototype.hasOwnProperty,zf=Nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ef={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,t,r){var n,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)If.call(t,n)&&!Ef.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Df,type:e,key:i,ref:o,props:a,_owner:zf.current}}yo.Fragment=Bf;yo.jsx=Nd;yo.jsxs=Nd;vd.exports=yo;var h=vd.exports,Es={},Dd={exports:{}},ct={},Bd={exports:{}},Id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(H,K){var Y=H.length;H.push(K);e:for(;0<Y;){var oe=Y-1>>>1,ie=H[oe];if(0<a(ie,K))H[oe]=K,H[Y]=ie,Y=oe;else break e}}function r(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var K=H[0],Y=H.pop();if(Y!==K){H[0]=Y;e:for(var oe=0,ie=H.length,Et=ie>>>1;oe<Et;){var kt=2*(oe+1)-1,Pt=H[kt],Rt=kt+1,St=H[Rt];if(0>a(Pt,Y))Rt<ie&&0>a(St,Pt)?(H[oe]=St,H[Rt]=Y,oe=Rt):(H[oe]=Pt,H[kt]=Y,oe=kt);else if(Rt<ie&&0>a(St,Y))H[oe]=St,H[Rt]=Y,oe=Rt;else break e}}return K}function a(H,K){var Y=H.sortIndex-K.sortIndex;return Y!==0?Y:H.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],d=[],m=1,f=null,y=3,x=!1,A=!1,T=!1,N=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(H){for(var K=r(d);K!==null;){if(K.callback===null)n(d);else if(K.startTime<=H)n(d),K.sortIndex=K.expirationTime,t(l,K);else break;K=r(d)}}function C(H){if(T=!1,w(H),!A)if(r(l)!==null)A=!0,ht(B);else{var K=r(d);K!==null&&zt(C,K.startTime-H)}}function B(H,K){A=!1,T&&(T=!1,b(R),R=-1),x=!0;var Y=y;try{for(w(K),f=r(l);f!==null&&(!(f.expirationTime>K)||H&&!Q());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,y=f.priorityLevel;var ie=oe(f.expirationTime<=K);K=e.unstable_now(),typeof ie=="function"?f.callback=ie:f===r(l)&&n(l),w(K)}else n(l);f=r(l)}if(f!==null)var Et=!0;else{var kt=r(d);kt!==null&&zt(C,kt.startTime-K),Et=!1}return Et}finally{f=null,y=Y,x=!1}}var z=!1,E=null,R=-1,_=5,U=-1;function Q(){return!(e.unstable_now()-U<_)}function X(){if(E!==null){var H=e.unstable_now();U=H;var K=!0;try{K=E(!0,H)}finally{K?ce():(z=!1,E=null)}}else z=!1}var ce;if(typeof v=="function")ce=function(){v(X)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,rt=pe.port2;pe.port1.onmessage=X,ce=function(){rt.postMessage(null)}}else ce=function(){N(X,0)};function ht(H){E=H,z||(z=!0,ce())}function zt(H,K){R=N(function(){H(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_continueExecution=function(){A||x||(A=!0,ht(B))},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(H){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Y=y;y=K;try{return H()}finally{y=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(H,K){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Y=y;y=H;try{return K()}finally{y=Y}},e.unstable_scheduleCallback=function(H,K,Y){var oe=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?oe+Y:oe):Y=oe,H){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=Y+ie,H={id:m++,callback:K,priorityLevel:H,startTime:Y,expirationTime:ie,sortIndex:-1},Y>oe?(H.sortIndex=Y,t(d,H),r(l)===null&&H===r(d)&&(T?(b(R),R=-1):T=!0,zt(C,Y-oe))):(H.sortIndex=ie,t(l,H),A||x||(A=!0,ht(B))),H},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(H){var K=y;return function(){var Y=y;y=K;try{return H.apply(this,arguments)}finally{y=Y}}}})(Id);Bd.exports=Id;var Pf=Bd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf=I,lt=Pf;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zd=new Set,va={};function an(e,t){En(e,t),En(e+"Capture",t)}function En(e,t){for(va[e]=t,e=0;e<t.length;e++)zd.add(t[e])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ps=Object.prototype.hasOwnProperty,jf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hc={},mc={};function Lf(e){return Ps.call(mc,e)?!0:Ps.call(hc,e)?!1:jf.test(e)?mc[e]=!0:(hc[e]=!0,!1)}function qf(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Of(e,t,r,n){if(t===null||typeof t>"u"||qf(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,r,n,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vl=/[\-:]([a-z])/g;function $l(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vl,$l);je[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vl,$l);je[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vl,$l);je[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jl(e,t,r,n){var a=je.hasOwnProperty(t)?je[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Of(t,r,a,n)&&(r=null),n||a===null?Lf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var cr=Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),mn=Symbol.for("react.portal"),pn=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),Rs=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),Pd=Symbol.for("react.context"),Kl=Symbol.for("react.forward_ref"),js=Symbol.for("react.suspense"),Ls=Symbol.for("react.suspense_list"),Ql=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Rd=Symbol.for("react.offscreen"),pc=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=pc&&e[pc]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Vo;function ra(e){if(Vo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Vo=t&&t[1]||""}return`
`+Vo+e}var $o=!1;function Jo(e,t){if(!e||$o)return"";$o=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=n.stack.split(`
`),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==i[s]){var l=`
`+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{$o=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ra(e):""}function Ff(e){switch(e.tag){case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return e=Jo(e.type,!1),e;case 11:return e=Jo(e.type.render,!1),e;case 1:return e=Jo(e.type,!0),e;default:return""}}function qs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pn:return"Fragment";case mn:return"Portal";case Rs:return"Profiler";case Yl:return"StrictMode";case js:return"Suspense";case Ls:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pd:return(e.displayName||"Context")+".Consumer";case Ed:return(e._context.displayName||"Context")+".Provider";case Kl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ql:return t=e.displayName||null,t!==null?t:qs(e.type)||"Memo";case fr:t=e._payload,e=e._init;try{return qs(e(t))}catch{}}return null}function Hf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qs(t);case 8:return t===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _f(e){var t=jd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ei(e){e._valueTracker||(e._valueTracker=_f(e))}function Ld(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=jd(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Os(e,t){var r=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function fc(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=zr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qd(e,t){t=t.checked,t!=null&&Jl(e,"checked",t,!1)}function Fs(e,t){qd(e,t);var r=zr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hs(e,t.type,r):t.hasOwnProperty("defaultValue")&&Hs(e,t.type,zr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Hs(e,t,r){(t!=="number"||qi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var na=Array.isArray;function An(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+zr(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function _s(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(q(92));if(na(r)){if(1<r.length)throw Error(q(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:zr(r)}}function Od(e,t){var r=zr(t.value),n=zr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ti,Hd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ti=ti||document.createElement("div"),ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ba(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gf=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(e){Gf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),la[t]=la[e]})});function _d(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||la.hasOwnProperty(e)&&la[e]?(""+t).trim():t+"px"}function Gd(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=_d(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var Uf=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(Uf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function Ws(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vs=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,Mn=null,Cn=null;function bc(e){if(e=_a(e)){if(typeof $s!="function")throw Error(q(280));var t=e.stateNode;t&&(t=ko(t),$s(e.stateNode,e.type,t))}}function Ud(e){Mn?Cn?Cn.push(e):Cn=[e]:Mn=e}function Wd(){if(Mn){var e=Mn,t=Cn;if(Cn=Mn=null,bc(e),t)for(e=0;e<t.length;e++)bc(t[e])}}function Vd(e,t){return e(t)}function $d(){}var Yo=!1;function Jd(e,t,r){if(Yo)return e(t,r);Yo=!0;try{return Vd(e,t,r)}finally{Yo=!1,(Mn!==null||Cn!==null)&&($d(),Wd())}}function wa(e,t){var r=e.stateNode;if(r===null)return null;var n=ko(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(q(231,t,typeof r));return r}var Js=!1;if(rr)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){Js=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{Js=!1}function Wf(e,t,r,n,a,i,o,s,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(m){this.onError(m)}}var ca=!1,Oi=null,Fi=!1,Ys=null,Vf={onError:function(e){ca=!0,Oi=e}};function $f(e,t,r,n,a,i,o,s,l){ca=!1,Oi=null,Wf.apply(Vf,arguments)}function Jf(e,t,r,n,a,i,o,s,l){if($f.apply(this,arguments),ca){if(ca){var d=Oi;ca=!1,Oi=null}else throw Error(q(198));Fi||(Fi=!0,Ys=d)}}function on(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Yd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wc(e){if(on(e)!==e)throw Error(q(188))}function Yf(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(q(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return wc(a),e;if(i===n)return wc(a),t;i=i.sibling}throw Error(q(188))}if(r.return!==n.return)r=a,n=i;else{for(var o=!1,s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===n){o=!0,n=a,r=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o)throw Error(q(189))}}if(r.alternate!==n)throw Error(q(190))}if(r.tag!==3)throw Error(q(188));return r.stateNode.current===r?e:t}function Kd(e){return e=Yf(e),e!==null?Qd(e):null}function Qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qd(e);if(t!==null)return t;e=e.sibling}return null}var Xd=lt.unstable_scheduleCallback,xc=lt.unstable_cancelCallback,Kf=lt.unstable_shouldYield,Qf=lt.unstable_requestPaint,Ae=lt.unstable_now,Xf=lt.unstable_getCurrentPriorityLevel,Zl=lt.unstable_ImmediatePriority,Zd=lt.unstable_UserBlockingPriority,Hi=lt.unstable_NormalPriority,Zf=lt.unstable_LowPriority,eh=lt.unstable_IdlePriority,vo=null,_t=null;function e1(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(vo,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:n1,t1=Math.log,r1=Math.LN2;function n1(e){return e>>>=0,e===0?32:31-(t1(e)/r1|0)|0}var ri=64,ni=4194304;function aa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _i(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var s=o&~a;s!==0?n=aa(s):(i&=o,i!==0&&(n=aa(i)))}else o=r&~a,o!==0?n=aa(o):i!==0&&(n=aa(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Dt(t),a=1<<r,n|=e[r],t&=~a;return n}function a1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i1(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Dt(i),s=1<<o,l=a[o];l===-1?(!(s&r)||s&n)&&(a[o]=a1(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function th(){var e=ri;return ri<<=1,!(ri&4194240)&&(ri=64),e}function Ko(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Fa(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=r}function o1(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Dt(r),i=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~i}}function e0(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Dt(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var se=0;function rh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nh,t0,ah,ih,oh,Qs=!1,ai=[],Sr=null,Tr=null,Ar=null,xa=new Map,ka=new Map,yr=[],s1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kc(e,t){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":xa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(t.pointerId)}}function Kn(e,t,r,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=_a(t),t!==null&&t0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function l1(e,t,r,n,a){switch(t){case"focusin":return Sr=Kn(Sr,e,t,r,n,a),!0;case"dragenter":return Tr=Kn(Tr,e,t,r,n,a),!0;case"mouseover":return Ar=Kn(Ar,e,t,r,n,a),!0;case"pointerover":var i=a.pointerId;return xa.set(i,Kn(xa.get(i)||null,e,t,r,n,a)),!0;case"gotpointercapture":return i=a.pointerId,ka.set(i,Kn(ka.get(i)||null,e,t,r,n,a)),!0}return!1}function sh(e){var t=$r(e.target);if(t!==null){var r=on(t);if(r!==null){if(t=r.tag,t===13){if(t=Yd(r),t!==null){e.blockedOn=t,oh(e.priority,function(){ah(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Xs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Vs=n,r.target.dispatchEvent(n),Vs=null}else return t=_a(r),t!==null&&t0(t),e.blockedOn=r,!1;t.shift()}return!0}function Sc(e,t,r){Mi(e)&&r.delete(t)}function c1(){Qs=!1,Sr!==null&&Mi(Sr)&&(Sr=null),Tr!==null&&Mi(Tr)&&(Tr=null),Ar!==null&&Mi(Ar)&&(Ar=null),xa.forEach(Sc),ka.forEach(Sc)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Qs||(Qs=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,c1)))}function Sa(e){function t(a){return Qn(a,e)}if(0<ai.length){Qn(ai[0],e);for(var r=1;r<ai.length;r++){var n=ai[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Sr!==null&&Qn(Sr,e),Tr!==null&&Qn(Tr,e),Ar!==null&&Qn(Ar,e),xa.forEach(t),ka.forEach(t),r=0;r<yr.length;r++)n=yr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<yr.length&&(r=yr[0],r.blockedOn===null);)sh(r),r.blockedOn===null&&yr.shift()}var Nn=cr.ReactCurrentBatchConfig,Gi=!0;function u1(e,t,r,n){var a=se,i=Nn.transition;Nn.transition=null;try{se=1,r0(e,t,r,n)}finally{se=a,Nn.transition=i}}function d1(e,t,r,n){var a=se,i=Nn.transition;Nn.transition=null;try{se=4,r0(e,t,r,n)}finally{se=a,Nn.transition=i}}function r0(e,t,r,n){if(Gi){var a=Xs(e,t,r,n);if(a===null)os(e,t,n,Ui,r),kc(e,n);else if(l1(a,e,t,r,n))n.stopPropagation();else if(kc(e,n),t&4&&-1<s1.indexOf(e)){for(;a!==null;){var i=_a(a);if(i!==null&&nh(i),i=Xs(e,t,r,n),i===null&&os(e,t,n,Ui,r),i===a)break;a=i}a!==null&&n.stopPropagation()}else os(e,t,n,null,r)}}var Ui=null;function Xs(e,t,r,n){if(Ui=null,e=Xl(n),e=$r(e),e!==null)if(t=on(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Yd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ui=e,null}function lh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xf()){case Zl:return 1;case Zd:return 4;case Hi:case Zf:return 16;case eh:return 536870912;default:return 16}default:return 16}}var br=null,n0=null,Ci=null;function ch(){if(Ci)return Ci;var e,t=n0,r=t.length,n,a="value"in br?br.value:br.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===a[i-n];n++);return Ci=a.slice(e,1<n?1-n:void 0)}function Ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function Tc(){return!1}function ut(e){function t(r,n,a,i,o){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ii:Tc,this.isPropagationStopped=Tc,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},a0=ut(Gn),Ha=xe({},Gn,{view:0,detail:0}),h1=ut(Ha),Qo,Xo,Xn,bo=xe({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:i0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(Qo=e.screenX-Xn.screenX,Xo=e.screenY-Xn.screenY):Xo=Qo=0,Xn=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),Ac=ut(bo),m1=xe({},bo,{dataTransfer:0}),p1=ut(m1),f1=xe({},Ha,{relatedTarget:0}),Zo=ut(f1),g1=xe({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),y1=ut(g1),v1=xe({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b1=ut(v1),w1=xe({},Gn,{data:0}),Mc=ut(w1),x1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=S1[e])?!!t[e]:!1}function i0(){return T1}var A1=xe({},Ha,{key:function(e){if(e.key){var t=x1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:i0,charCode:function(e){return e.type==="keypress"?Ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M1=ut(A1),C1=xe({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=ut(C1),N1=xe({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:i0}),D1=ut(N1),B1=xe({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),I1=ut(B1),z1=xe({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E1=ut(z1),P1=[9,13,27,32],o0=rr&&"CompositionEvent"in window,ua=null;rr&&"documentMode"in document&&(ua=document.documentMode);var R1=rr&&"TextEvent"in window&&!ua,uh=rr&&(!o0||ua&&8<ua&&11>=ua),Nc=" ",Dc=!1;function dh(e,t){switch(e){case"keyup":return P1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function j1(e,t){switch(e){case"compositionend":return hh(t);case"keypress":return t.which!==32?null:(Dc=!0,Nc);case"textInput":return e=t.data,e===Nc&&Dc?null:e;default:return null}}function L1(e,t){if(fn)return e==="compositionend"||!o0&&dh(e,t)?(e=ch(),Ci=n0=br=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uh&&t.locale!=="ko"?null:t.data;default:return null}}var q1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!q1[e.type]:t==="textarea"}function mh(e,t,r,n){Ud(n),t=Wi(t,"onChange"),0<t.length&&(r=new a0("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var da=null,Ta=null;function O1(e){Th(e,0)}function wo(e){var t=vn(e);if(Ld(t))return e}function F1(e,t){if(e==="change")return t}var ph=!1;if(rr){var es;if(rr){var ts="oninput"in document;if(!ts){var Ic=document.createElement("div");Ic.setAttribute("oninput","return;"),ts=typeof Ic.oninput=="function"}es=ts}else es=!1;ph=es&&(!document.documentMode||9<document.documentMode)}function zc(){da&&(da.detachEvent("onpropertychange",fh),Ta=da=null)}function fh(e){if(e.propertyName==="value"&&wo(Ta)){var t=[];mh(t,Ta,e,Xl(e)),Jd(O1,t)}}function H1(e,t,r){e==="focusin"?(zc(),da=t,Ta=r,da.attachEvent("onpropertychange",fh)):e==="focusout"&&zc()}function _1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(Ta)}function G1(e,t){if(e==="click")return wo(t)}function U1(e,t){if(e==="input"||e==="change")return wo(t)}function W1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:W1;function Aa(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Ps.call(t,a)||!It(e[a],t[a]))return!1}return!0}function Ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,t){var r=Ec(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ec(r)}}function gh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yh(){for(var e=window,t=qi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=qi(e.document)}return t}function s0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function V1(e){var t=yh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&gh(r.ownerDocument.documentElement,r)){if(n!==null&&s0(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(n.start,a);n=n.end===void 0?i:Math.min(n.end,a),!e.extend&&i>n&&(a=n,n=i,i=a),a=Pc(r,i);var o=Pc(r,n);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $1=rr&&"documentMode"in document&&11>=document.documentMode,gn=null,Zs=null,ha=null,el=!1;function Rc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;el||gn==null||gn!==qi(n)||(n=gn,"selectionStart"in n&&s0(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ha&&Aa(ha,n)||(ha=n,n=Wi(Zs,"onSelect"),0<n.length&&(t=new a0("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function oi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var yn={animationend:oi("Animation","AnimationEnd"),animationiteration:oi("Animation","AnimationIteration"),animationstart:oi("Animation","AnimationStart"),transitionend:oi("Transition","TransitionEnd")},rs={},vh={};rr&&(vh=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function xo(e){if(rs[e])return rs[e];if(!yn[e])return e;var t=yn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in vh)return rs[e]=t[r];return e}var bh=xo("animationend"),wh=xo("animationiteration"),xh=xo("animationstart"),kh=xo("transitionend"),Sh=new Map,jc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,t){Sh.set(e,t),an(t,[e])}for(var ns=0;ns<jc.length;ns++){var as=jc[ns],J1=as.toLowerCase(),Y1=as[0].toUpperCase()+as.slice(1);Lr(J1,"on"+Y1)}Lr(bh,"onAnimationEnd");Lr(wh,"onAnimationIteration");Lr(xh,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(kh,"onTransitionEnd");En("onMouseEnter",["mouseout","mouseover"]);En("onMouseLeave",["mouseout","mouseover"]);En("onPointerEnter",["pointerout","pointerover"]);En("onPointerLeave",["pointerout","pointerover"]);an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));an("onBeforeInput",["compositionend","keypress","textInput","paste"]);an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Lc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Jf(n,t,void 0,e),e.currentTarget=null}function Th(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;Lc(a,s,d),i=l}else for(o=0;o<n.length;o++){if(s=n[o],l=s.instance,d=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;Lc(a,s,d),i=l}}}if(Fi)throw e=Ys,Fi=!1,Ys=null,e}function he(e,t){var r=t[il];r===void 0&&(r=t[il]=new Set);var n=e+"__bubble";r.has(n)||(Ah(t,e,2,!1),r.add(n))}function is(e,t,r){var n=0;t&&(n|=4),Ah(r,e,n,t)}var si="_reactListening"+Math.random().toString(36).slice(2);function Ma(e){if(!e[si]){e[si]=!0,zd.forEach(function(r){r!=="selectionchange"&&(K1.has(r)||is(r,!1,e),is(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[si]||(t[si]=!0,is("selectionchange",!1,t))}}function Ah(e,t,r,n){switch(lh(t)){case 1:var a=u1;break;case 4:a=d1;break;default:a=r0}r=a.bind(null,t,r,e),a=void 0,!Js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function os(e,t,r,n,a){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;o=o.return}for(;s!==null;){if(o=$r(s),o===null)return;if(l=o.tag,l===5||l===6){n=i=o;continue e}s=s.parentNode}}n=n.return}Jd(function(){var d=i,m=Xl(r),f=[];e:{var y=Sh.get(e);if(y!==void 0){var x=a0,A=e;switch(e){case"keypress":if(Ni(r)===0)break e;case"keydown":case"keyup":x=M1;break;case"focusin":A="focus",x=Zo;break;case"focusout":A="blur",x=Zo;break;case"beforeblur":case"afterblur":x=Zo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=p1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=D1;break;case bh:case wh:case xh:x=y1;break;case kh:x=I1;break;case"scroll":x=h1;break;case"wheel":x=E1;break;case"copy":case"cut":case"paste":x=b1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Cc}var T=(t&4)!==0,N=!T&&e==="scroll",b=T?y!==null?y+"Capture":null:y;T=[];for(var v=d,w;v!==null;){w=v;var C=w.stateNode;if(w.tag===5&&C!==null&&(w=C,b!==null&&(C=wa(v,b),C!=null&&T.push(Ca(v,C,w)))),N)break;v=v.return}0<T.length&&(y=new x(y,A,null,r,m),f.push({event:y,listeners:T}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",y&&r!==Vs&&(A=r.relatedTarget||r.fromElement)&&($r(A)||A[nr]))break e;if((x||y)&&(y=m.window===m?m:(y=m.ownerDocument)?y.defaultView||y.parentWindow:window,x?(A=r.relatedTarget||r.toElement,x=d,A=A?$r(A):null,A!==null&&(N=on(A),A!==N||A.tag!==5&&A.tag!==6)&&(A=null)):(x=null,A=d),x!==A)){if(T=Ac,C="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(T=Cc,C="onPointerLeave",b="onPointerEnter",v="pointer"),N=x==null?y:vn(x),w=A==null?y:vn(A),y=new T(C,v+"leave",x,r,m),y.target=N,y.relatedTarget=w,C=null,$r(m)===d&&(T=new T(b,v+"enter",A,r,m),T.target=w,T.relatedTarget=N,C=T),N=C,x&&A)t:{for(T=x,b=A,v=0,w=T;w;w=cn(w))v++;for(w=0,C=b;C;C=cn(C))w++;for(;0<v-w;)T=cn(T),v--;for(;0<w-v;)b=cn(b),w--;for(;v--;){if(T===b||b!==null&&T===b.alternate)break t;T=cn(T),b=cn(b)}T=null}else T=null;x!==null&&qc(f,y,x,T,!1),A!==null&&N!==null&&qc(f,N,A,T,!0)}}e:{if(y=d?vn(d):window,x=y.nodeName&&y.nodeName.toLowerCase(),x==="select"||x==="input"&&y.type==="file")var B=F1;else if(Bc(y))if(ph)B=U1;else{B=_1;var z=H1}else(x=y.nodeName)&&x.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(B=G1);if(B&&(B=B(e,d))){mh(f,B,r,m);break e}z&&z(e,y,d),e==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&Hs(y,"number",y.value)}switch(z=d?vn(d):window,e){case"focusin":(Bc(z)||z.contentEditable==="true")&&(gn=z,Zs=d,ha=null);break;case"focusout":ha=Zs=gn=null;break;case"mousedown":el=!0;break;case"contextmenu":case"mouseup":case"dragend":el=!1,Rc(f,r,m);break;case"selectionchange":if($1)break;case"keydown":case"keyup":Rc(f,r,m)}var E;if(o0)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else fn?dh(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(uh&&r.locale!=="ko"&&(fn||R!=="onCompositionStart"?R==="onCompositionEnd"&&fn&&(E=ch()):(br=m,n0="value"in br?br.value:br.textContent,fn=!0)),z=Wi(d,R),0<z.length&&(R=new Mc(R,e,null,r,m),f.push({event:R,listeners:z}),E?R.data=E:(E=hh(r),E!==null&&(R.data=E)))),(E=R1?j1(e,r):L1(e,r))&&(d=Wi(d,"onBeforeInput"),0<d.length&&(m=new Mc("onBeforeInput","beforeinput",null,r,m),f.push({event:m,listeners:d}),m.data=E))}Th(f,t)})}function Ca(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Wi(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=wa(e,r),i!=null&&n.unshift(Ca(e,i,a)),i=wa(e,t),i!=null&&n.push(Ca(e,i,a))),e=e.return}return n}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qc(e,t,r,n,a){for(var i=t._reactName,o=[];r!==null&&r!==n;){var s=r,l=s.alternate,d=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&d!==null&&(s=d,a?(l=wa(r,i),l!=null&&o.unshift(Ca(r,l,s))):a||(l=wa(r,i),l!=null&&o.push(Ca(r,l,s)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Q1=/\r\n?/g,X1=/\u0000|\uFFFD/g;function Oc(e){return(typeof e=="string"?e:""+e).replace(Q1,`
`).replace(X1,"")}function li(e,t,r){if(t=Oc(t),Oc(e)!==t&&r)throw Error(q(425))}function Vi(){}var tl=null,rl=null;function nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,Fc=typeof Promise=="function"?Promise:void 0,eg=typeof queueMicrotask=="function"?queueMicrotask:typeof Fc<"u"?function(e){return Fc.resolve(null).then(e).catch(tg)}:al;function tg(e){setTimeout(function(){throw e})}function ss(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),Sa(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Sa(t)}function Mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Un,Na="__reactProps$"+Un,nr="__reactContainer$"+Un,il="__reactEvents$"+Un,rg="__reactListeners$"+Un,ng="__reactHandles$"+Un;function $r(e){var t=e[Ot];if(t)return t;for(var r=e.parentNode;r;){if(t=r[nr]||r[Ot]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Hc(e);e!==null;){if(r=e[Ot])return r;e=Hc(e)}return t}e=r,r=e.parentNode}return null}function _a(e){return e=e[Ot]||e[nr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function ko(e){return e[Na]||null}var ol=[],bn=-1;function qr(e){return{current:e}}function me(e){0>bn||(e.current=ol[bn],ol[bn]=null,bn--)}function ue(e,t){bn++,ol[bn]=e.current,e.current=t}var Er={},Fe=qr(Er),Xe=qr(!1),Zr=Er;function Pn(e,t){var r=e.type.contextTypes;if(!r)return Er;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ze(e){return e=e.childContextTypes,e!=null}function $i(){me(Xe),me(Fe)}function _c(e,t,r){if(Fe.current!==Er)throw Error(q(168));ue(Fe,t),ue(Xe,r)}function Mh(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(q(108,Hf(e)||"Unknown",a));return xe({},r,n)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Er,Zr=Fe.current,ue(Fe,e),ue(Xe,Xe.current),!0}function Gc(e,t,r){var n=e.stateNode;if(!n)throw Error(q(169));r?(e=Mh(e,t,Zr),n.__reactInternalMemoizedMergedChildContext=e,me(Xe),me(Fe),ue(Fe,e)):me(Xe),ue(Xe,r)}var Yt=null,So=!1,ls=!1;function Ch(e){Yt===null?Yt=[e]:Yt.push(e)}function ag(e){So=!0,Ch(e)}function Or(){if(!ls&&Yt!==null){ls=!0;var e=0,t=se;try{var r=Yt;for(se=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Yt=null,So=!1}catch(a){throw Yt!==null&&(Yt=Yt.slice(e+1)),Xd(Zl,Or),a}finally{se=t,ls=!1}}return null}var wn=[],xn=0,Yi=null,Ki=0,mt=[],pt=0,en=null,Qt=1,Xt="";function Wr(e,t){wn[xn++]=Ki,wn[xn++]=Yi,Yi=e,Ki=t}function Nh(e,t,r){mt[pt++]=Qt,mt[pt++]=Xt,mt[pt++]=en,en=e;var n=Qt;e=Xt;var a=32-Dt(n)-1;n&=~(1<<a),r+=1;var i=32-Dt(t)+a;if(30<i){var o=a-a%5;i=(n&(1<<o)-1).toString(32),n>>=o,a-=o,Qt=1<<32-Dt(t)+a|r<<a|n,Xt=i+e}else Qt=1<<i|r<<a|n,Xt=e}function l0(e){e.return!==null&&(Wr(e,1),Nh(e,1,0))}function c0(e){for(;e===Yi;)Yi=wn[--xn],wn[xn]=null,Ki=wn[--xn],wn[xn]=null;for(;e===en;)en=mt[--pt],mt[pt]=null,Xt=mt[--pt],mt[pt]=null,Qt=mt[--pt],mt[pt]=null}var ot=null,it=null,fe=!1,Nt=null;function Dh(e,t){var r=ft(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Uc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,it=Mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=en!==null?{id:Qt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ft(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ot=e,it=null,!0):!1;default:return!1}}function sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(fe){var t=it;if(t){var r=t;if(!Uc(e,t)){if(sl(e))throw Error(q(418));t=Mr(r.nextSibling);var n=ot;t&&Uc(e,t)?Dh(n,r):(e.flags=e.flags&-4097|2,fe=!1,ot=e)}}else{if(sl(e))throw Error(q(418));e.flags=e.flags&-4097|2,fe=!1,ot=e}}}function Wc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function ci(e){if(e!==ot)return!1;if(!fe)return Wc(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!nl(e.type,e.memoizedProps)),t&&(t=it)){if(sl(e))throw Bh(),Error(q(418));for(;t;)Dh(e,t),t=Mr(t.nextSibling)}if(Wc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){it=Mr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}it=null}}else it=ot?Mr(e.stateNode.nextSibling):null;return!0}function Bh(){for(var e=it;e;)e=Mr(e.nextSibling)}function Rn(){it=ot=null,fe=!1}function u0(e){Nt===null?Nt=[e]:Nt.push(e)}var ig=cr.ReactCurrentBatchConfig;function Zn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(q(309));var n=r.stateNode}if(!n)throw Error(q(147,e));var a=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=a.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(q(284));if(!r._owner)throw Error(q(290,e))}return e}function ui(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vc(e){var t=e._init;return t(e._payload)}function Ih(e){function t(b,v){if(e){var w=b.deletions;w===null?(b.deletions=[v],b.flags|=16):w.push(v)}}function r(b,v){if(!e)return null;for(;v!==null;)t(b,v),v=v.sibling;return null}function n(b,v){for(b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function a(b,v){return b=Br(b,v),b.index=0,b.sibling=null,b}function i(b,v,w){return b.index=w,e?(w=b.alternate,w!==null?(w=w.index,w<v?(b.flags|=2,v):w):(b.flags|=2,v)):(b.flags|=1048576,v)}function o(b){return e&&b.alternate===null&&(b.flags|=2),b}function s(b,v,w,C){return v===null||v.tag!==6?(v=fs(w,b.mode,C),v.return=b,v):(v=a(v,w),v.return=b,v)}function l(b,v,w,C){var B=w.type;return B===pn?m(b,v,w.props.children,C,w.key):v!==null&&(v.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===fr&&Vc(B)===v.type)?(C=a(v,w.props),C.ref=Zn(b,v,w),C.return=b,C):(C=Ri(w.type,w.key,w.props,null,b.mode,C),C.ref=Zn(b,v,w),C.return=b,C)}function d(b,v,w,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=gs(w,b.mode,C),v.return=b,v):(v=a(v,w.children||[]),v.return=b,v)}function m(b,v,w,C,B){return v===null||v.tag!==7?(v=Qr(w,b.mode,C,B),v.return=b,v):(v=a(v,w),v.return=b,v)}function f(b,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fs(""+v,b.mode,w),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Za:return w=Ri(v.type,v.key,v.props,null,b.mode,w),w.ref=Zn(b,null,v),w.return=b,w;case mn:return v=gs(v,b.mode,w),v.return=b,v;case fr:var C=v._init;return f(b,C(v._payload),w)}if(na(v)||Jn(v))return v=Qr(v,b.mode,w,null),v.return=b,v;ui(b,v)}return null}function y(b,v,w,C){var B=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return B!==null?null:s(b,v,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Za:return w.key===B?l(b,v,w,C):null;case mn:return w.key===B?d(b,v,w,C):null;case fr:return B=w._init,y(b,v,B(w._payload),C)}if(na(w)||Jn(w))return B!==null?null:m(b,v,w,C,null);ui(b,w)}return null}function x(b,v,w,C,B){if(typeof C=="string"&&C!==""||typeof C=="number")return b=b.get(w)||null,s(v,b,""+C,B);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Za:return b=b.get(C.key===null?w:C.key)||null,l(v,b,C,B);case mn:return b=b.get(C.key===null?w:C.key)||null,d(v,b,C,B);case fr:var z=C._init;return x(b,v,w,z(C._payload),B)}if(na(C)||Jn(C))return b=b.get(w)||null,m(v,b,C,B,null);ui(v,C)}return null}function A(b,v,w,C){for(var B=null,z=null,E=v,R=v=0,_=null;E!==null&&R<w.length;R++){E.index>R?(_=E,E=null):_=E.sibling;var U=y(b,E,w[R],C);if(U===null){E===null&&(E=_);break}e&&E&&U.alternate===null&&t(b,E),v=i(U,v,R),z===null?B=U:z.sibling=U,z=U,E=_}if(R===w.length)return r(b,E),fe&&Wr(b,R),B;if(E===null){for(;R<w.length;R++)E=f(b,w[R],C),E!==null&&(v=i(E,v,R),z===null?B=E:z.sibling=E,z=E);return fe&&Wr(b,R),B}for(E=n(b,E);R<w.length;R++)_=x(E,b,R,w[R],C),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?R:_.key),v=i(_,v,R),z===null?B=_:z.sibling=_,z=_);return e&&E.forEach(function(Q){return t(b,Q)}),fe&&Wr(b,R),B}function T(b,v,w,C){var B=Jn(w);if(typeof B!="function")throw Error(q(150));if(w=B.call(w),w==null)throw Error(q(151));for(var z=B=null,E=v,R=v=0,_=null,U=w.next();E!==null&&!U.done;R++,U=w.next()){E.index>R?(_=E,E=null):_=E.sibling;var Q=y(b,E,U.value,C);if(Q===null){E===null&&(E=_);break}e&&E&&Q.alternate===null&&t(b,E),v=i(Q,v,R),z===null?B=Q:z.sibling=Q,z=Q,E=_}if(U.done)return r(b,E),fe&&Wr(b,R),B;if(E===null){for(;!U.done;R++,U=w.next())U=f(b,U.value,C),U!==null&&(v=i(U,v,R),z===null?B=U:z.sibling=U,z=U);return fe&&Wr(b,R),B}for(E=n(b,E);!U.done;R++,U=w.next())U=x(E,b,R,U.value,C),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?R:U.key),v=i(U,v,R),z===null?B=U:z.sibling=U,z=U);return e&&E.forEach(function(X){return t(b,X)}),fe&&Wr(b,R),B}function N(b,v,w,C){if(typeof w=="object"&&w!==null&&w.type===pn&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Za:e:{for(var B=w.key,z=v;z!==null;){if(z.key===B){if(B=w.type,B===pn){if(z.tag===7){r(b,z.sibling),v=a(z,w.props.children),v.return=b,b=v;break e}}else if(z.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===fr&&Vc(B)===z.type){r(b,z.sibling),v=a(z,w.props),v.ref=Zn(b,z,w),v.return=b,b=v;break e}r(b,z);break}else t(b,z);z=z.sibling}w.type===pn?(v=Qr(w.props.children,b.mode,C,w.key),v.return=b,b=v):(C=Ri(w.type,w.key,w.props,null,b.mode,C),C.ref=Zn(b,v,w),C.return=b,b=C)}return o(b);case mn:e:{for(z=w.key;v!==null;){if(v.key===z)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){r(b,v.sibling),v=a(v,w.children||[]),v.return=b,b=v;break e}else{r(b,v);break}else t(b,v);v=v.sibling}v=gs(w,b.mode,C),v.return=b,b=v}return o(b);case fr:return z=w._init,N(b,v,z(w._payload),C)}if(na(w))return A(b,v,w,C);if(Jn(w))return T(b,v,w,C);ui(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(r(b,v.sibling),v=a(v,w),v.return=b,b=v):(r(b,v),v=fs(w,b.mode,C),v.return=b,b=v),o(b)):r(b,v)}return N}var jn=Ih(!0),zh=Ih(!1),Qi=qr(null),Xi=null,kn=null,d0=null;function h0(){d0=kn=Xi=null}function m0(e){var t=Qi.current;me(Qi),e._currentValue=t}function cl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Dn(e,t){Xi=e,d0=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(d0!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(Xi===null)throw Error(q(308));kn=e,Xi.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var Jr=null;function p0(e){Jr===null?Jr=[e]:Jr.push(e)}function Eh(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,p0(t)):(r.next=a.next,a.next=r),t.interleaved=r,ar(e,n)}function ar(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var gr=!1;function f0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,re&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,ar(e,r)}return a=n.interleaved,a===null?(t.next=t,p0(n)):(t.next=a.next,a.next=t),n.interleaved=t,ar(e,r)}function Di(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,e0(e,r)}}function $c(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Zi(e,t,r,n){var a=e.updateQueue;gr=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,d=l.next;l.next=null,o===null?i=d:o.next=d,o=l;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=l))}if(i!==null){var f=a.baseState;o=0,m=d=l=null,s=i;do{var y=s.lane,x=s.eventTime;if((n&y)===y){m!==null&&(m=m.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var A=e,T=s;switch(y=t,x=r,T.tag){case 1:if(A=T.payload,typeof A=="function"){f=A.call(x,f,y);break e}f=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=T.payload,y=typeof A=="function"?A.call(x,f,y):A,y==null)break e;f=xe({},f,y);break e;case 2:gr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=a.effects,y===null?a.effects=[s]:y.push(s))}else x={eventTime:x,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=x,l=f):m=m.next=x,o|=y;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;y=s,s=y.next,y.next=null,a.lastBaseUpdate=y,a.shared.pending=null}}while(!0);if(m===null&&(l=f),a.baseState=l,a.firstBaseUpdate=d,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);rn|=o,e.lanes=o,e.memoizedState=f}}function Jc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(q(191,a));a.call(n)}}}var Ga={},Gt=qr(Ga),Da=qr(Ga),Ba=qr(Ga);function Yr(e){if(e===Ga)throw Error(q(174));return e}function g0(e,t){switch(ue(Ba,t),ue(Da,e),ue(Gt,Ga),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gs(t,e)}me(Gt),ue(Gt,t)}function Ln(){me(Gt),me(Da),me(Ba)}function Rh(e){Yr(Ba.current);var t=Yr(Gt.current),r=Gs(t,e.type);t!==r&&(ue(Da,e),ue(Gt,r))}function y0(e){Da.current===e&&(me(Gt),me(Da))}var ve=qr(0);function eo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function v0(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var Bi=cr.ReactCurrentDispatcher,us=cr.ReactCurrentBatchConfig,tn=0,we=null,De=null,ze=null,to=!1,ma=!1,Ia=0,og=0;function Le(){throw Error(q(321))}function b0(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!It(e[r],t[r]))return!1;return!0}function w0(e,t,r,n,a,i){if(tn=i,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bi.current=e===null||e.memoizedState===null?ug:dg,e=r(n,a),ma){i=0;do{if(ma=!1,Ia=0,25<=i)throw Error(q(301));i+=1,ze=De=null,t.updateQueue=null,Bi.current=hg,e=r(n,a)}while(ma)}if(Bi.current=ro,t=De!==null&&De.next!==null,tn=0,ze=De=we=null,to=!1,t)throw Error(q(300));return e}function x0(){var e=Ia!==0;return Ia=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?we.memoizedState=ze=e:ze=ze.next=e,ze}function bt(){if(De===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=ze===null?we.memoizedState:ze.next;if(t!==null)ze=t,De=e;else{if(e===null)throw Error(q(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},ze===null?we.memoizedState=ze=e:ze=ze.next=e}return ze}function za(e,t){return typeof t=="function"?t(e):t}function ds(e){var t=bt(),r=t.queue;if(r===null)throw Error(q(311));r.lastRenderedReducer=e;var n=De,a=n.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}n.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,n=n.baseState;var s=o=null,l=null,d=i;do{var m=d.lane;if((tn&m)===m)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(s=l=f,o=n):l=l.next=f,we.lanes|=m,rn|=m}d=d.next}while(d!==null&&d!==i);l===null?o=n:l.next=s,It(n,t.memoizedState)||(Qe=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do i=a.lane,we.lanes|=i,rn|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function hs(e){var t=bt(),r=t.queue;if(r===null)throw Error(q(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);It(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function jh(){}function Lh(e,t){var r=we,n=bt(),a=t(),i=!It(n.memoizedState,a);if(i&&(n.memoizedState=a,Qe=!0),n=n.queue,k0(Fh.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||ze!==null&&ze.memoizedState.tag&1){if(r.flags|=2048,Ea(9,Oh.bind(null,r,n,a,t),void 0,null),Ee===null)throw Error(q(349));tn&30||qh(r,t,a)}return a}function qh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Oh(e,t,r,n){t.value=r,t.getSnapshot=n,Hh(t)&&_h(e)}function Fh(e,t,r){return r(function(){Hh(t)&&_h(e)})}function Hh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!It(e,r)}catch{return!0}}function _h(e){var t=ar(e,1);t!==null&&Bt(t,e,1,-1)}function Yc(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},t.queue=e,e=e.dispatch=cg.bind(null,we,e),[t.memoizedState,e]}function Ea(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Gh(){return bt().memoizedState}function Ii(e,t,r,n){var a=Lt();we.flags|=e,a.memoizedState=Ea(1|t,r,void 0,n===void 0?null:n)}function To(e,t,r,n){var a=bt();n=n===void 0?null:n;var i=void 0;if(De!==null){var o=De.memoizedState;if(i=o.destroy,n!==null&&b0(n,o.deps)){a.memoizedState=Ea(t,r,i,n);return}}we.flags|=e,a.memoizedState=Ea(1|t,r,i,n)}function Kc(e,t){return Ii(8390656,8,e,t)}function k0(e,t){return To(2048,8,e,t)}function Uh(e,t){return To(4,2,e,t)}function Wh(e,t){return To(4,4,e,t)}function Vh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $h(e,t,r){return r=r!=null?r.concat([e]):null,To(4,4,Vh.bind(null,t,e),r)}function S0(){}function Jh(e,t){var r=bt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&b0(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Yh(e,t){var r=bt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&b0(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Kh(e,t,r){return tn&21?(It(r,t)||(r=th(),we.lanes|=r,rn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=r)}function sg(e,t){var r=se;se=r!==0&&4>r?r:4,e(!0);var n=us.transition;us.transition={};try{e(!1),t()}finally{se=r,us.transition=n}}function Qh(){return bt().memoizedState}function lg(e,t,r){var n=Dr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Xh(e))Zh(t,r);else if(r=Eh(e,t,r,n),r!==null){var a=Ue();Bt(r,e,n,a),em(r,t,n)}}function cg(e,t,r){var n=Dr(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xh(e))Zh(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,r);if(a.hasEagerState=!0,a.eagerState=s,It(s,o)){var l=t.interleaved;l===null?(a.next=a,p0(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}r=Eh(e,t,a,n),r!==null&&(a=Ue(),Bt(r,e,n,a),em(r,t,n))}}function Xh(e){var t=e.alternate;return e===we||t!==null&&t===we}function Zh(e,t){ma=to=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function em(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,e0(e,r)}}var ro={readContext:vt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},ug={readContext:vt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Kc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ii(4194308,4,Vh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ii(4,2,e,t)},useMemo:function(e,t){var r=Lt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Lt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=lg.bind(null,we,e),[n.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Yc,useDebugValue:S0,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Yc(!1),t=e[0];return e=sg.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=we,a=Lt();if(fe){if(r===void 0)throw Error(q(407));r=r()}else{if(r=t(),Ee===null)throw Error(q(349));tn&30||qh(n,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,Kc(Fh.bind(null,n,i,e),[e]),n.flags|=2048,Ea(9,Oh.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Lt(),t=Ee.identifierPrefix;if(fe){var r=Xt,n=Qt;r=(n&~(1<<32-Dt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ia++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=og++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dg={readContext:vt,useCallback:Jh,useContext:vt,useEffect:k0,useImperativeHandle:$h,useInsertionEffect:Uh,useLayoutEffect:Wh,useMemo:Yh,useReducer:ds,useRef:Gh,useState:function(){return ds(za)},useDebugValue:S0,useDeferredValue:function(e){var t=bt();return Kh(t,De.memoizedState,e)},useTransition:function(){var e=ds(za)[0],t=bt().memoizedState;return[e,t]},useMutableSource:jh,useSyncExternalStore:Lh,useId:Qh,unstable_isNewReconciler:!1},hg={readContext:vt,useCallback:Jh,useContext:vt,useEffect:k0,useImperativeHandle:$h,useInsertionEffect:Uh,useLayoutEffect:Wh,useMemo:Yh,useReducer:hs,useRef:Gh,useState:function(){return hs(za)},useDebugValue:S0,useDeferredValue:function(e){var t=bt();return De===null?t.memoizedState=e:Kh(t,De.memoizedState,e)},useTransition:function(){var e=hs(za)[0],t=bt().memoizedState;return[e,t]},useMutableSource:jh,useSyncExternalStore:Lh,useId:Qh,unstable_isNewReconciler:!1};function At(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ul(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:xe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ao={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ue(),a=Dr(e),i=Zt(n,a);i.payload=t,r!=null&&(i.callback=r),t=Cr(e,i,a),t!==null&&(Bt(t,e,a,n),Di(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ue(),a=Dr(e),i=Zt(n,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Cr(e,i,a),t!==null&&(Bt(t,e,a,n),Di(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ue(),n=Dr(e),a=Zt(r,n);a.tag=2,t!=null&&(a.callback=t),t=Cr(e,a,n),t!==null&&(Bt(t,e,n,r),Di(t,e,n))}};function Qc(e,t,r,n,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,o):t.prototype&&t.prototype.isPureReactComponent?!Aa(r,n)||!Aa(a,i):!0}function tm(e,t,r){var n=!1,a=Er,i=t.contextType;return typeof i=="object"&&i!==null?i=vt(i):(a=Ze(t)?Zr:Fe.current,n=t.contextTypes,i=(n=n!=null)?Pn(e,a):Er),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Xc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function dl(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},f0(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=vt(i):(i=Ze(t)?Zr:Fe.current,a.context=Pn(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ul(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ao.enqueueReplaceState(a,a.state,null),Zi(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t){try{var r="",n=t;do r+=Ff(n),n=n.return;while(n);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function ms(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function hl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var mg=typeof WeakMap=="function"?WeakMap:Map;function rm(e,t,r){r=Zt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ao||(ao=!0,kl=n),hl(e,t)},r}function nm(e,t,r){r=Zt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){hl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){hl(e,t),typeof n!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Zc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new mg;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Cg.bind(null,e,t,r),t.then(e,e))}function eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tu(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Zt(-1,1),t.tag=2,Cr(r,t,1))),r.lanes|=1),e)}var pg=cr.ReactCurrentOwner,Qe=!1;function _e(e,t,r,n){t.child=e===null?zh(t,null,r,n):jn(t,e.child,r,n)}function ru(e,t,r,n,a){r=r.render;var i=t.ref;return Dn(t,a),n=w0(e,t,r,n,i,a),r=x0(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ir(e,t,a)):(fe&&r&&l0(t),t.flags|=1,_e(e,t,n,a),t.child)}function nu(e,t,r,n,a){if(e===null){var i=r.type;return typeof i=="function"&&!I0(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,am(e,t,i,n,a)):(e=Ri(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:Aa,r(o,n)&&e.ref===t.ref)return ir(e,t,a)}return t.flags|=1,e=Br(i,n),e.ref=t.ref,e.return=t,t.child=e}function am(e,t,r,n,a){if(e!==null){var i=e.memoizedProps;if(Aa(i,n)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=n=i,(e.lanes&a)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,ir(e,t,a)}return ml(e,t,r,n,a)}function im(e,t,r){var n=t.pendingProps,a=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Tn,nt),nt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Tn,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,ue(Tn,nt),nt|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,ue(Tn,nt),nt|=n;return _e(e,t,a,r),t.child}function om(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ml(e,t,r,n,a){var i=Ze(r)?Zr:Fe.current;return i=Pn(t,i),Dn(t,a),r=w0(e,t,r,n,i,a),n=x0(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ir(e,t,a)):(fe&&n&&l0(t),t.flags|=1,_e(e,t,r,a),t.child)}function au(e,t,r,n,a){if(Ze(r)){var i=!0;Ji(t)}else i=!1;if(Dn(t,a),t.stateNode===null)zi(e,t),tm(t,r,n),dl(t,r,n,a),n=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=vt(d):(d=Ze(r)?Zr:Fe.current,d=Pn(t,d));var m=r.getDerivedStateFromProps,f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||l!==d)&&Xc(t,o,n,d),gr=!1;var y=t.memoizedState;o.state=y,Zi(t,n,o,a),l=t.memoizedState,s!==n||y!==l||Xe.current||gr?(typeof m=="function"&&(ul(t,r,m,n),l=t.memoizedState),(s=gr||Qc(t,r,s,n,y,l,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=d,n=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Ph(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:At(t.type,s),o.props=d,f=t.pendingProps,y=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=Ze(r)?Zr:Fe.current,l=Pn(t,l));var x=r.getDerivedStateFromProps;(m=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||y!==l)&&Xc(t,o,n,l),gr=!1,y=t.memoizedState,o.state=y,Zi(t,n,o,a);var A=t.memoizedState;s!==f||y!==A||Xe.current||gr?(typeof x=="function"&&(ul(t,r,x,n),A=t.memoizedState),(d=gr||Qc(t,r,d,n,y,A,l)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,A,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,A,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=A),o.props=n,o.state=A,o.context=l,n=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),n=!1)}return pl(e,t,r,n,i,a)}function pl(e,t,r,n,a,i){om(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return a&&Gc(t,r,!1),ir(e,t,i);n=t.stateNode,pg.current=t;var s=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=jn(t,e.child,null,i),t.child=jn(t,null,s,i)):_e(e,t,s,i),t.memoizedState=n.state,a&&Gc(t,r,!0),t.child}function sm(e){var t=e.stateNode;t.pendingContext?_c(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_c(e,t.context,!1),g0(e,t.containerInfo)}function iu(e,t,r,n,a){return Rn(),u0(a),t.flags|=256,_e(e,t,r,n),t.child}var fl={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function lm(e,t,r){var n=t.pendingProps,a=ve.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ue(ve,a&1),e===null)return ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,i?(n=t.mode,i=t.child,o={mode:"hidden",children:o},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=No(o,n,0,null),e=Qr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=gl(r),t.memoizedState=fl,e):T0(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return fg(e,t,o,n,s,a,r);if(i){i=n.fallback,o=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:n.children};return!(o&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Br(a,l),n.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=Br(s,i):(i=Qr(i,o,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,o=e.child.memoizedState,o=o===null?gl(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=fl,n}return i=e.child,e=i.sibling,n=Br(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function T0(e,t){return t=No({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function di(e,t,r,n){return n!==null&&u0(n),jn(t,e.child,null,r),e=T0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fg(e,t,r,n,a,i,o){if(r)return t.flags&256?(t.flags&=-257,n=ms(Error(q(422))),di(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,a=t.mode,n=No({mode:"visible",children:n.children},a,0,null),i=Qr(i,a,o,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&jn(t,e.child,null,o),t.child.memoizedState=gl(o),t.memoizedState=fl,i);if(!(t.mode&1))return di(e,t,o,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(q(419)),n=ms(i,n,void 0),di(e,t,o,n)}if(s=(o&e.childLanes)!==0,Qe||s){if(n=Ee,n!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,ar(e,a),Bt(n,e,a,-1))}return B0(),n=ms(Error(q(421))),di(e,t,o,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Ng.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,it=Mr(a.nextSibling),ot=t,fe=!0,Nt=null,e!==null&&(mt[pt++]=Qt,mt[pt++]=Xt,mt[pt++]=en,Qt=e.id,Xt=e.overflow,en=t),t=T0(t,n.children),t.flags|=4096,t)}function ou(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),cl(e.return,t,r)}function ps(e,t,r,n,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=a)}function cm(e,t,r){var n=t.pendingProps,a=n.revealOrder,i=n.tail;if(_e(e,t,n.children,r),n=ve.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ou(e,r,t);else if(e.tag===19)ou(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ue(ve,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&eo(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),ps(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&eo(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}ps(t,!0,r,null,i);break;case"together":ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ir(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,r=Br(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Br(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function gg(e,t,r){switch(t.tag){case 3:sm(t),Rn();break;case 5:Rh(t);break;case 1:Ze(t.type)&&Ji(t);break;case 4:g0(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;ue(Qi,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ue(ve,ve.current&1),t.flags|=128,null):r&t.child.childLanes?lm(e,t,r):(ue(ve,ve.current&1),e=ir(e,t,r),e!==null?e.sibling:null);ue(ve,ve.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return cm(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ue(ve,ve.current),n)break;return null;case 22:case 23:return t.lanes=0,im(e,t,r)}return ir(e,t,r)}var um,yl,dm,hm;um=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};yl=function(){};dm=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Yr(Gt.current);var i=null;switch(r){case"input":a=Os(e,a),n=Os(e,n),i=[];break;case"select":a=xe({},a,{value:void 0}),n=xe({},n,{value:void 0}),i=[];break;case"textarea":a=_s(e,a),n=_s(e,n),i=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Vi)}Us(r,n);var o;r=null;for(d in a)if(!n.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var s=a[d];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(va.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var l=n[d];if(s=a!=null?a[d]:void 0,n.hasOwnProperty(d)&&l!==s&&(l!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(i||(i=[]),i.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(va.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&he("scroll",e),i||s===l||(i=[])):(i=i||[]).push(d,l))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};hm=function(e,t,r,n){r!==n&&(t.flags|=4)};function ea(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function yg(e,t,r){var n=t.pendingProps;switch(c0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return Ze(t.type)&&$i(),qe(t),null;case 3:return n=t.stateNode,Ln(),me(Xe),me(Fe),v0(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(Al(Nt),Nt=null))),yl(e,t),qe(t),null;case 5:y0(t);var a=Yr(Ba.current);if(r=t.type,e!==null&&t.stateNode!=null)dm(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(q(166));return qe(t),null}if(e=Yr(Gt.current),ci(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Ot]=t,n[Na]=i,e=(t.mode&1)!==0,r){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<ia.length;a++)he(ia[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":fc(n,i),he("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},he("invalid",n);break;case"textarea":yc(n,i),he("invalid",n)}Us(r,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&li(n.textContent,s,e),a=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&li(n.textContent,s,e),a=["children",""+s]):va.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&he("scroll",n)}switch(r){case"input":ei(n),gc(n,i,!0);break;case"textarea":ei(n),vc(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Vi)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[Ot]=t,e[Na]=n,um(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ws(r,n),r){case"dialog":he("cancel",e),he("close",e),a=n;break;case"iframe":case"object":case"embed":he("load",e),a=n;break;case"video":case"audio":for(a=0;a<ia.length;a++)he(ia[a],e);a=n;break;case"source":he("error",e),a=n;break;case"img":case"image":case"link":he("error",e),he("load",e),a=n;break;case"details":he("toggle",e),a=n;break;case"input":fc(e,n),a=Os(e,n),he("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=xe({},n,{value:void 0}),he("invalid",e);break;case"textarea":yc(e,n),a=_s(e,n),he("invalid",e);break;default:a=n}Us(r,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Gd(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hd(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&ba(e,l):typeof l=="number"&&ba(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(va.hasOwnProperty(i)?l!=null&&i==="onScroll"&&he("scroll",e):l!=null&&Jl(e,i,l,o))}switch(r){case"input":ei(e),gc(e,n,!1);break;case"textarea":ei(e),vc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+zr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?An(e,!!n.multiple,i,!1):n.defaultValue!=null&&An(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Vi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)hm(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(q(166));if(r=Yr(Ba.current),Yr(Gt.current),ci(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ot]=t,(i=n.nodeValue!==r)&&(e=ot,e!==null))switch(e.tag){case 3:li(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&li(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ot]=t,t.stateNode=n}return qe(t),null;case 13:if(me(ve),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&it!==null&&t.mode&1&&!(t.flags&128))Bh(),Rn(),t.flags|=98560,i=!1;else if(i=ci(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(q(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(q(317));i[Ot]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;qe(t),i=!1}else Nt!==null&&(Al(Nt),Nt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Be===0&&(Be=3):B0())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return Ln(),yl(e,t),e===null&&Ma(t.stateNode.containerInfo),qe(t),null;case 10:return m0(t.type._context),qe(t),null;case 17:return Ze(t.type)&&$i(),qe(t),null;case 19:if(me(ve),i=t.memoizedState,i===null)return qe(t),null;if(n=(t.flags&128)!==0,o=i.rendering,o===null)if(n)ea(i,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=eo(e),o!==null){for(t.flags|=128,ea(i,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ue(ve,ve.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ae()>On&&(t.flags|=128,n=!0,ea(i,!1),t.lanes=4194304)}else{if(!n)if(e=eo(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ea(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!fe)return qe(t),null}else 2*Ae()-i.renderingStartTime>On&&r!==1073741824&&(t.flags|=128,n=!0,ea(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ae(),t.sibling=null,r=ve.current,ue(ve,n?r&1|2:r&1),t):(qe(t),null);case 22:case 23:return D0(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?nt&1073741824&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function vg(e,t){switch(c0(t),t.tag){case 1:return Ze(t.type)&&$i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),me(Xe),me(Fe),v0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return y0(t),null;case 13:if(me(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(ve),null;case 4:return Ln(),null;case 10:return m0(t.type._context),null;case 22:case 23:return D0(),null;case 24:return null;default:return null}}var hi=!1,Oe=!1,bg=typeof WeakSet=="function"?WeakSet:Set,W=null;function Sn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Se(e,t,n)}else r.current=null}function vl(e,t,r){try{r()}catch(n){Se(e,t,n)}}var su=!1;function wg(e,t){if(tl=Gi,e=yh(),s0(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,d=0,m=0,f=e,y=null;t:for(;;){for(var x;f!==r||a!==0&&f.nodeType!==3||(s=o+a),f!==i||n!==0&&f.nodeType!==3||(l=o+n),f.nodeType===3&&(o+=f.nodeValue.length),(x=f.firstChild)!==null;)y=f,f=x;for(;;){if(f===e)break t;if(y===r&&++d===a&&(s=o),y===i&&++m===n&&(l=o),(x=f.nextSibling)!==null)break;f=y,y=f.parentNode}f=x}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(rl={focusedElem:e,selectionRange:r},Gi=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var A=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var T=A.memoizedProps,N=A.memoizedState,b=t.stateNode,v=b.getSnapshotBeforeUpdate(t.elementType===t.type?T:At(t.type,T),N);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(C){Se(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return A=su,su=!1,A}function pa(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&vl(t,r,i)}a=a.next}while(a!==n)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function bl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function mm(e){var t=e.alternate;t!==null&&(e.alternate=null,mm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Na],delete t[il],delete t[rg],delete t[ng])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pm(e){return e.tag===5||e.tag===3||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Vi));else if(n!==4&&(e=e.child,e!==null))for(wl(e,t,r),e=e.sibling;e!==null;)wl(e,t,r),e=e.sibling}function xl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(xl(e,t,r),e=e.sibling;e!==null;)xl(e,t,r),e=e.sibling}var Pe=null,Mt=!1;function hr(e,t,r){for(r=r.child;r!==null;)fm(e,t,r),r=r.sibling}function fm(e,t,r){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(vo,r)}catch{}switch(r.tag){case 5:Oe||Sn(r,t);case 6:var n=Pe,a=Mt;Pe=null,hr(e,t,r),Pe=n,Mt=a,Pe!==null&&(Mt?(e=Pe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Pe.removeChild(r.stateNode));break;case 18:Pe!==null&&(Mt?(e=Pe,r=r.stateNode,e.nodeType===8?ss(e.parentNode,r):e.nodeType===1&&ss(e,r),Sa(e)):ss(Pe,r.stateNode));break;case 4:n=Pe,a=Mt,Pe=r.stateNode.containerInfo,Mt=!0,hr(e,t,r),Pe=n,Mt=a;break;case 0:case 11:case 14:case 15:if(!Oe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&vl(r,t,o),a=a.next}while(a!==n)}hr(e,t,r);break;case 1:if(!Oe&&(Sn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Se(r,t,s)}hr(e,t,r);break;case 21:hr(e,t,r);break;case 22:r.mode&1?(Oe=(n=Oe)||r.memoizedState!==null,hr(e,t,r),Oe=n):hr(e,t,r);break;default:hr(e,t,r)}}function cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new bg),t.forEach(function(n){var a=Dg.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Tt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Pe=s.stateNode,Mt=!1;break e;case 3:Pe=s.stateNode.containerInfo,Mt=!0;break e;case 4:Pe=s.stateNode.containerInfo,Mt=!0;break e}s=s.return}if(Pe===null)throw Error(q(160));fm(i,o,a),Pe=null,Mt=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(d){Se(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gm(t,e),t=t.sibling}function gm(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),jt(e),n&4){try{pa(3,e,e.return),Mo(3,e)}catch(T){Se(e,e.return,T)}try{pa(5,e,e.return)}catch(T){Se(e,e.return,T)}}break;case 1:Tt(t,e),jt(e),n&512&&r!==null&&Sn(r,r.return);break;case 5:if(Tt(t,e),jt(e),n&512&&r!==null&&Sn(r,r.return),e.flags&32){var a=e.stateNode;try{ba(a,"")}catch(T){Se(e,e.return,T)}}if(n&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&qd(a,i),Ws(s,o);var d=Ws(s,i);for(o=0;o<l.length;o+=2){var m=l[o],f=l[o+1];m==="style"?Gd(a,f):m==="dangerouslySetInnerHTML"?Hd(a,f):m==="children"?ba(a,f):Jl(a,m,f,d)}switch(s){case"input":Fs(a,i);break;case"textarea":Od(a,i);break;case"select":var y=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?An(a,!!i.multiple,x,!1):y!==!!i.multiple&&(i.defaultValue!=null?An(a,!!i.multiple,i.defaultValue,!0):An(a,!!i.multiple,i.multiple?[]:"",!1))}a[Na]=i}catch(T){Se(e,e.return,T)}}break;case 6:if(Tt(t,e),jt(e),n&4){if(e.stateNode===null)throw Error(q(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(T){Se(e,e.return,T)}}break;case 3:if(Tt(t,e),jt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Sa(t.containerInfo)}catch(T){Se(e,e.return,T)}break;case 4:Tt(t,e),jt(e);break;case 13:Tt(t,e),jt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(C0=Ae())),n&4&&cu(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(Oe=(d=Oe)||m,Tt(t,e),Oe=d):Tt(t,e),jt(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(W=e,m=e.child;m!==null;){for(f=W=m;W!==null;){switch(y=W,x=y.child,y.tag){case 0:case 11:case 14:case 15:pa(4,y,y.return);break;case 1:Sn(y,y.return);var A=y.stateNode;if(typeof A.componentWillUnmount=="function"){n=y,r=y.return;try{t=n,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(T){Se(n,r,T)}}break;case 5:Sn(y,y.return);break;case 22:if(y.memoizedState!==null){du(f);continue}}x!==null?(x.return=y,W=x):du(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{a=f.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=_d("display",o))}catch(T){Se(e,e.return,T)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(T){Se(e,e.return,T)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Tt(t,e),jt(e),n&4&&cu(e);break;case 21:break;default:Tt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(pm(r)){var n=r;break e}r=r.return}throw Error(q(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(ba(a,""),n.flags&=-33);var i=lu(e);xl(e,i,a);break;case 3:case 4:var o=n.stateNode.containerInfo,s=lu(e);wl(e,s,o);break;default:throw Error(q(161))}}catch(l){Se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xg(e,t,r){W=e,ym(e)}function ym(e,t,r){for(var n=(e.mode&1)!==0;W!==null;){var a=W,i=a.child;if(a.tag===22&&n){var o=a.memoizedState!==null||hi;if(!o){var s=a.alternate,l=s!==null&&s.memoizedState!==null||Oe;s=hi;var d=Oe;if(hi=o,(Oe=l)&&!d)for(W=a;W!==null;)o=W,l=o.child,o.tag===22&&o.memoizedState!==null?hu(a):l!==null?(l.return=o,W=l):hu(a);for(;i!==null;)W=i,ym(i),i=i.sibling;W=a,hi=s,Oe=d}uu(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,W=i):uu(e)}}function uu(e){for(;W!==null;){var t=W;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||Mo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Oe)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:At(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Jc(t,i,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Jc(t,o,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Oe||t.flags&512&&bl(t)}catch(y){Se(t,t.return,y)}}if(t===e){W=null;break}if(r=t.sibling,r!==null){r.return=t.return,W=r;break}W=t.return}}function du(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var r=t.sibling;if(r!==null){r.return=t.return,W=r;break}W=t.return}}function hu(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Mo(4,t)}catch(l){Se(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(l){Se(t,a,l)}}var i=t.return;try{bl(t)}catch(l){Se(t,i,l)}break;case 5:var o=t.return;try{bl(t)}catch(l){Se(t,o,l)}}}catch(l){Se(t,t.return,l)}if(t===e){W=null;break}var s=t.sibling;if(s!==null){s.return=t.return,W=s;break}W=t.return}}var kg=Math.ceil,no=cr.ReactCurrentDispatcher,A0=cr.ReactCurrentOwner,yt=cr.ReactCurrentBatchConfig,re=0,Ee=null,Ce=null,Re=0,nt=0,Tn=qr(0),Be=0,Pa=null,rn=0,Co=0,M0=0,fa=null,Ke=null,C0=0,On=1/0,Jt=null,ao=!1,kl=null,Nr=null,mi=!1,wr=null,io=0,ga=0,Sl=null,Ei=-1,Pi=0;function Ue(){return re&6?Ae():Ei!==-1?Ei:Ei=Ae()}function Dr(e){return e.mode&1?re&2&&Re!==0?Re&-Re:ig.transition!==null?(Pi===0&&(Pi=th()),Pi):(e=se,e!==0||(e=window.event,e=e===void 0?16:lh(e.type)),e):1}function Bt(e,t,r,n){if(50<ga)throw ga=0,Sl=null,Error(q(185));Fa(e,r,n),(!(re&2)||e!==Ee)&&(e===Ee&&(!(re&2)&&(Co|=r),Be===4&&vr(e,Re)),et(e,n),r===1&&re===0&&!(t.mode&1)&&(On=Ae()+500,So&&Or()))}function et(e,t){var r=e.callbackNode;i1(e,t);var n=_i(e,e===Ee?Re:0);if(n===0)r!==null&&xc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&xc(r),t===1)e.tag===0?ag(mu.bind(null,e)):Ch(mu.bind(null,e)),eg(function(){!(re&6)&&Or()}),r=null;else{switch(rh(n)){case 1:r=Zl;break;case 4:r=Zd;break;case 16:r=Hi;break;case 536870912:r=eh;break;default:r=Hi}r=Am(r,vm.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function vm(e,t){if(Ei=-1,Pi=0,re&6)throw Error(q(327));var r=e.callbackNode;if(Bn()&&e.callbackNode!==r)return null;var n=_i(e,e===Ee?Re:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=oo(e,n);else{t=n;var a=re;re|=2;var i=wm();(Ee!==e||Re!==t)&&(Jt=null,On=Ae()+500,Kr(e,t));do try{Ag();break}catch(s){bm(e,s)}while(!0);h0(),no.current=i,re=a,Ce!==null?t=0:(Ee=null,Re=0,t=Be)}if(t!==0){if(t===2&&(a=Ks(e),a!==0&&(n=a,t=Tl(e,a))),t===1)throw r=Pa,Kr(e,0),vr(e,n),et(e,Ae()),r;if(t===6)vr(e,n);else{if(a=e.current.alternate,!(n&30)&&!Sg(a)&&(t=oo(e,n),t===2&&(i=Ks(e),i!==0&&(n=i,t=Tl(e,i))),t===1))throw r=Pa,Kr(e,0),vr(e,n),et(e,Ae()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(q(345));case 2:Vr(e,Ke,Jt);break;case 3:if(vr(e,n),(n&130023424)===n&&(t=C0+500-Ae(),10<t)){if(_i(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Ue(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=al(Vr.bind(null,e,Ke,Jt),t);break}Vr(e,Ke,Jt);break;case 4:if(vr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var o=31-Dt(n);i=1<<o,o=t[o],o>a&&(a=o),n&=~i}if(n=a,n=Ae()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*kg(n/1960))-n,10<n){e.timeoutHandle=al(Vr.bind(null,e,Ke,Jt),n);break}Vr(e,Ke,Jt);break;case 5:Vr(e,Ke,Jt);break;default:throw Error(q(329))}}}return et(e,Ae()),e.callbackNode===r?vm.bind(null,e):null}function Tl(e,t){var r=fa;return e.current.memoizedState.isDehydrated&&(Kr(e,t).flags|=256),e=oo(e,t),e!==2&&(t=Ke,Ke=r,t!==null&&Al(t)),e}function Al(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Sg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],i=a.getSnapshot;a=a.value;try{if(!It(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vr(e,t){for(t&=~M0,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Dt(t),n=1<<r;e[r]=-1,t&=~n}}function mu(e){if(re&6)throw Error(q(327));Bn();var t=_i(e,0);if(!(t&1))return et(e,Ae()),null;var r=oo(e,t);if(e.tag!==0&&r===2){var n=Ks(e);n!==0&&(t=n,r=Tl(e,n))}if(r===1)throw r=Pa,Kr(e,0),vr(e,t),et(e,Ae()),r;if(r===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vr(e,Ke,Jt),et(e,Ae()),null}function N0(e,t){var r=re;re|=1;try{return e(t)}finally{re=r,re===0&&(On=Ae()+500,So&&Or())}}function nn(e){wr!==null&&wr.tag===0&&!(re&6)&&Bn();var t=re;re|=1;var r=yt.transition,n=se;try{if(yt.transition=null,se=1,e)return e()}finally{se=n,yt.transition=r,re=t,!(re&6)&&Or()}}function D0(){nt=Tn.current,me(Tn)}function Kr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Z1(r)),Ce!==null)for(r=Ce.return;r!==null;){var n=r;switch(c0(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&$i();break;case 3:Ln(),me(Xe),me(Fe),v0();break;case 5:y0(n);break;case 4:Ln();break;case 13:me(ve);break;case 19:me(ve);break;case 10:m0(n.type._context);break;case 22:case 23:D0()}r=r.return}if(Ee=e,Ce=e=Br(e.current,null),Re=nt=t,Be=0,Pa=null,M0=Co=rn=0,Ke=fa=null,Jr!==null){for(t=0;t<Jr.length;t++)if(r=Jr[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,i=r.pending;if(i!==null){var o=i.next;i.next=a,n.next=o}r.pending=n}Jr=null}return e}function bm(e,t){do{var r=Ce;try{if(h0(),Bi.current=ro,to){for(var n=we.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}to=!1}if(tn=0,ze=De=we=null,ma=!1,Ia=0,A0.current=null,r===null||r.return===null){Be=1,Pa=t,Ce=null;break}e:{var i=e,o=r.return,s=r,l=t;if(t=Re,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,m=s,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var y=m.alternate;y?(m.updateQueue=y.updateQueue,m.memoizedState=y.memoizedState,m.lanes=y.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=eu(o);if(x!==null){x.flags&=-257,tu(x,o,s,i,t),x.mode&1&&Zc(i,d,t),t=x,l=d;var A=t.updateQueue;if(A===null){var T=new Set;T.add(l),t.updateQueue=T}else A.add(l);break e}else{if(!(t&1)){Zc(i,d,t),B0();break e}l=Error(q(426))}}else if(fe&&s.mode&1){var N=eu(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),tu(N,o,s,i,t),u0(qn(l,s));break e}}i=l=qn(l,s),Be!==4&&(Be=2),fa===null?fa=[i]:fa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var b=rm(i,l,t);$c(i,b);break e;case 1:s=l;var v=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Nr===null||!Nr.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var C=nm(i,s,t);$c(i,C);break e}}i=i.return}while(i!==null)}km(r)}catch(B){t=B,Ce===r&&r!==null&&(Ce=r=r.return);continue}break}while(!0)}function wm(){var e=no.current;return no.current=ro,e===null?ro:e}function B0(){(Be===0||Be===3||Be===2)&&(Be=4),Ee===null||!(rn&268435455)&&!(Co&268435455)||vr(Ee,Re)}function oo(e,t){var r=re;re|=2;var n=wm();(Ee!==e||Re!==t)&&(Jt=null,Kr(e,t));do try{Tg();break}catch(a){bm(e,a)}while(!0);if(h0(),re=r,no.current=n,Ce!==null)throw Error(q(261));return Ee=null,Re=0,Be}function Tg(){for(;Ce!==null;)xm(Ce)}function Ag(){for(;Ce!==null&&!Kf();)xm(Ce)}function xm(e){var t=Tm(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?km(e):Ce=t,A0.current=null}function km(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=vg(r,t),r!==null){r.flags&=32767,Ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ce=null;return}}else if(r=yg(r,t,nt),r!==null){Ce=r;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Be===0&&(Be=5)}function Vr(e,t,r){var n=se,a=yt.transition;try{yt.transition=null,se=1,Mg(e,t,r,n)}finally{yt.transition=a,se=n}return null}function Mg(e,t,r,n){do Bn();while(wr!==null);if(re&6)throw Error(q(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(o1(e,i),e===Ee&&(Ce=Ee=null,Re=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||mi||(mi=!0,Am(Hi,function(){return Bn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=yt.transition,yt.transition=null;var o=se;se=1;var s=re;re|=4,A0.current=null,wg(e,r),gm(r,e),V1(rl),Gi=!!tl,rl=tl=null,e.current=r,xg(r),Qf(),re=s,se=o,yt.transition=i}else e.current=r;if(mi&&(mi=!1,wr=e,io=a),i=e.pendingLanes,i===0&&(Nr=null),e1(r.stateNode),et(e,Ae()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(ao)throw ao=!1,e=kl,kl=null,e;return io&1&&e.tag!==0&&Bn(),i=e.pendingLanes,i&1?e===Sl?ga++:(ga=0,Sl=e):ga=0,Or(),null}function Bn(){if(wr!==null){var e=rh(io),t=yt.transition,r=se;try{if(yt.transition=null,se=16>e?16:e,wr===null)var n=!1;else{if(e=wr,wr=null,io=0,re&6)throw Error(q(331));var a=re;for(re|=4,W=e.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var d=s[l];for(W=d;W!==null;){var m=W;switch(m.tag){case 0:case 11:case 15:pa(8,m,i)}var f=m.child;if(f!==null)f.return=m,W=f;else for(;W!==null;){m=W;var y=m.sibling,x=m.return;if(mm(m),m===d){W=null;break}if(y!==null){y.return=x,W=y;break}W=x}}}var A=i.alternate;if(A!==null){var T=A.child;if(T!==null){A.child=null;do{var N=T.sibling;T.sibling=null,T=N}while(T!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pa(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,W=b;break e}W=i.return}}var v=e.current;for(W=v;W!==null;){o=W;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,W=w;else e:for(o=v;W!==null;){if(s=W,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Mo(9,s)}}catch(B){Se(s,s.return,B)}if(s===o){W=null;break e}var C=s.sibling;if(C!==null){C.return=s.return,W=C;break e}W=s.return}}if(re=a,Or(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(vo,e)}catch{}n=!0}return n}finally{se=r,yt.transition=t}}return!1}function pu(e,t,r){t=qn(r,t),t=rm(e,t,1),e=Cr(e,t,1),t=Ue(),e!==null&&(Fa(e,1,t),et(e,t))}function Se(e,t,r){if(e.tag===3)pu(e,e,r);else for(;t!==null;){if(t.tag===3){pu(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Nr===null||!Nr.has(n))){e=qn(r,e),e=nm(t,e,1),t=Cr(t,e,1),e=Ue(),t!==null&&(Fa(t,1,e),et(t,e));break}}t=t.return}}function Cg(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&r,Ee===e&&(Re&r)===r&&(Be===4||Be===3&&(Re&130023424)===Re&&500>Ae()-C0?Kr(e,0):M0|=r),et(e,t)}function Sm(e,t){t===0&&(e.mode&1?(t=ni,ni<<=1,!(ni&130023424)&&(ni=4194304)):t=1);var r=Ue();e=ar(e,t),e!==null&&(Fa(e,t,r),et(e,r))}function Ng(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Sm(e,r)}function Dg(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(q(314))}n!==null&&n.delete(t),Sm(e,r)}var Tm;Tm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Qe=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Qe=!1,gg(e,t,r);Qe=!!(e.flags&131072)}else Qe=!1,fe&&t.flags&1048576&&Nh(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;zi(e,t),e=t.pendingProps;var a=Pn(t,Fe.current);Dn(t,r),a=w0(null,t,n,e,a,r);var i=x0();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(n)?(i=!0,Ji(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,f0(t),a.updater=Ao,t.stateNode=a,a._reactInternals=t,dl(t,n,e,r),t=pl(null,t,n,!0,i,r)):(t.tag=0,fe&&i&&l0(t),_e(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=Ig(n),e=At(n,e),a){case 0:t=ml(null,t,n,e,r);break e;case 1:t=au(null,t,n,e,r);break e;case 11:t=ru(null,t,n,e,r);break e;case 14:t=nu(null,t,n,At(n.type,e),r);break e}throw Error(q(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:At(n,a),ml(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:At(n,a),au(e,t,n,a,r);case 3:e:{if(sm(t),e===null)throw Error(q(387));n=t.pendingProps,i=t.memoizedState,a=i.element,Ph(e,t),Zi(t,n,null,r);var o=t.memoizedState;if(n=o.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=qn(Error(q(423)),t),t=iu(e,t,n,r,a);break e}else if(n!==a){a=qn(Error(q(424)),t),t=iu(e,t,n,r,a);break e}else for(it=Mr(t.stateNode.containerInfo.firstChild),ot=t,fe=!0,Nt=null,r=zh(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Rn(),n===a){t=ir(e,t,r);break e}_e(e,t,n,r)}t=t.child}return t;case 5:return Rh(t),e===null&&ll(t),n=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,nl(n,a)?o=null:i!==null&&nl(n,i)&&(t.flags|=32),om(e,t),_e(e,t,o,r),t.child;case 6:return e===null&&ll(t),null;case 13:return lm(e,t,r);case 4:return g0(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=jn(t,null,n,r):_e(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:At(n,a),ru(e,t,n,a,r);case 7:return _e(e,t,t.pendingProps,r),t.child;case 8:return _e(e,t,t.pendingProps.children,r),t.child;case 12:return _e(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,ue(Qi,n._currentValue),n._currentValue=o,i!==null)if(It(i.value,o)){if(i.children===a.children&&!Xe.current){t=ir(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=Zt(-1,r&-r),l.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?l.next=l:(l.next=m.next,m.next=l),d.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),cl(i.return,r,t),s.lanes|=r;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(q(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),cl(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}_e(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Dn(t,r),a=vt(a),n=n(a),t.flags|=1,_e(e,t,n,r),t.child;case 14:return n=t.type,a=At(n,t.pendingProps),a=At(n.type,a),nu(e,t,n,a,r);case 15:return am(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:At(n,a),zi(e,t),t.tag=1,Ze(n)?(e=!0,Ji(t)):e=!1,Dn(t,r),tm(t,n,a),dl(t,n,a,r),pl(null,t,n,!0,e,r);case 19:return cm(e,t,r);case 22:return im(e,t,r)}throw Error(q(156,t.tag))};function Am(e,t){return Xd(e,t)}function Bg(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,r,n){return new Bg(e,t,r,n)}function I0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ig(e){if(typeof e=="function")return I0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kl)return 11;if(e===Ql)return 14}return 2}function Br(e,t){var r=e.alternate;return r===null?(r=ft(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ri(e,t,r,n,a,i){var o=2;if(n=e,typeof e=="function")I0(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case pn:return Qr(r.children,a,i,t);case Yl:o=8,a|=8;break;case Rs:return e=ft(12,r,t,a|2),e.elementType=Rs,e.lanes=i,e;case js:return e=ft(13,r,t,a),e.elementType=js,e.lanes=i,e;case Ls:return e=ft(19,r,t,a),e.elementType=Ls,e.lanes=i,e;case Rd:return No(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ed:o=10;break e;case Pd:o=9;break e;case Kl:o=11;break e;case Ql:o=14;break e;case fr:o=16,n=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=ft(o,r,t,a),t.elementType=e,t.type=n,t.lanes=i,t}function Qr(e,t,r,n){return e=ft(7,e,n,t),e.lanes=r,e}function No(e,t,r,n){return e=ft(22,e,n,t),e.elementType=Rd,e.lanes=r,e.stateNode={isHidden:!1},e}function fs(e,t,r){return e=ft(6,e,null,t),e.lanes=r,e}function gs(e,t,r){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zg(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function z0(e,t,r,n,a,i,o,s,l){return e=new zg(e,t,r,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ft(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},f0(i),e}function Eg(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Mm(e){if(!e)return Er;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var r=e.type;if(Ze(r))return Mh(e,r,t)}return t}function Cm(e,t,r,n,a,i,o,s,l){return e=z0(r,n,!0,e,a,i,o,s,l),e.context=Mm(null),r=e.current,n=Ue(),a=Dr(r),i=Zt(n,a),i.callback=t??null,Cr(r,i,a),e.current.lanes=a,Fa(e,a,n),et(e,n),e}function Do(e,t,r,n){var a=t.current,i=Ue(),o=Dr(a);return r=Mm(r),t.context===null?t.context=r:t.pendingContext=r,t=Zt(i,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Cr(a,t,o),e!==null&&(Bt(e,a,o,i),Di(e,a,o)),o}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function E0(e,t){fu(e,t),(e=e.alternate)&&fu(e,t)}function Pg(){return null}var Nm=typeof reportError=="function"?reportError:function(e){console.error(e)};function P0(e){this._internalRoot=e}Bo.prototype.render=P0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));Do(e,t,null,null)};Bo.prototype.unmount=P0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){Do(null,e,null,null)}),t[nr]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ih();e={blockedOn:null,target:e,priority:t};for(var r=0;r<yr.length&&t!==0&&t<yr[r].priority;r++);yr.splice(r,0,e),r===0&&sh(e)}};function R0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gu(){}function Rg(e,t,r,n,a){if(a){if(typeof n=="function"){var i=n;n=function(){var d=so(o);i.call(d)}}var o=Cm(t,n,e,0,null,!1,!1,"",gu);return e._reactRootContainer=o,e[nr]=o.current,Ma(e.nodeType===8?e.parentNode:e),nn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var s=n;n=function(){var d=so(l);s.call(d)}}var l=z0(e,0,!1,null,null,!1,!1,"",gu);return e._reactRootContainer=l,e[nr]=l.current,Ma(e.nodeType===8?e.parentNode:e),nn(function(){Do(t,l,r,n)}),l}function zo(e,t,r,n,a){var i=r._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var s=a;a=function(){var l=so(o);s.call(l)}}Do(t,o,e,a)}else o=Rg(r,t,e,a,n);return so(o)}nh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=aa(t.pendingLanes);r!==0&&(e0(t,r|1),et(t,Ae()),!(re&6)&&(On=Ae()+500,Or()))}break;case 13:nn(function(){var n=ar(e,1);if(n!==null){var a=Ue();Bt(n,e,1,a)}}),E0(e,1)}};t0=function(e){if(e.tag===13){var t=ar(e,134217728);if(t!==null){var r=Ue();Bt(t,e,134217728,r)}E0(e,134217728)}};ah=function(e){if(e.tag===13){var t=Dr(e),r=ar(e,t);if(r!==null){var n=Ue();Bt(r,e,t,n)}E0(e,t)}};ih=function(){return se};oh=function(e,t){var r=se;try{return se=e,t()}finally{se=r}};$s=function(e,t,r){switch(t){case"input":if(Fs(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=ko(n);if(!a)throw Error(q(90));Ld(n),Fs(n,a)}}}break;case"textarea":Od(e,r);break;case"select":t=r.value,t!=null&&An(e,!!r.multiple,t,!1)}};Vd=N0;$d=nn;var jg={usingClientEntryPoint:!1,Events:[_a,vn,ko,Ud,Wd,N0]},ta={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lg={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kd(e),e===null?null:e.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||Pg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pi.isDisabled&&pi.supportsFiber)try{vo=pi.inject(Lg),_t=pi}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jg;ct.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!R0(t))throw Error(q(200));return Eg(e,t,null,r)};ct.createRoot=function(e,t){if(!R0(e))throw Error(q(299));var r=!1,n="",a=Nm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=z0(e,1,!1,null,null,r,!1,n,a),e[nr]=t.current,Ma(e.nodeType===8?e.parentNode:e),new P0(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=Kd(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return nn(e)};ct.hydrate=function(e,t,r){if(!Io(t))throw Error(q(200));return zo(null,e,t,!0,r)};ct.hydrateRoot=function(e,t,r){if(!R0(e))throw Error(q(405));var n=r!=null&&r.hydratedSources||null,a=!1,i="",o=Nm;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Cm(t,null,e,1,r??null,a,!1,i,o),e[nr]=t.current,Ma(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Bo(t)};ct.render=function(e,t,r){if(!Io(t))throw Error(q(200));return zo(null,e,t,!1,r)};ct.unmountComponentAtNode=function(e){if(!Io(e))throw Error(q(40));return e._reactRootContainer?(nn(function(){zo(null,null,e,!1,function(){e._reactRootContainer=null,e[nr]=null})}),!0):!1};ct.unstable_batchedUpdates=N0;ct.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Io(r))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return zo(e,t,r,!1,n)};ct.version="18.3.1-next-f1338f8080-20240426";function Dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dm)}catch(e){console.error(e)}}Dm(),Dd.exports=ct;var oa=Dd.exports,yu=oa;Es.createRoot=yu.createRoot,Es.hydrateRoot=yu.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ra.apply(this,arguments)}var xr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xr||(xr={}));const vu="popstate";function qg(e){e===void 0&&(e={});function t(n,a){let{pathname:i,search:o,hash:s}=n.location;return Ml("",{pathname:i,search:o,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:lo(a)}return Fg(t,r,null,e)}function Te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function j0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Og(){return Math.random().toString(36).substr(2,8)}function bu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ml(e,t,r,n){return r===void 0&&(r=null),Ra({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wn(t):t,{state:r,key:t&&t.key||n||Og()})}function lo(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Wn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Fg(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:i=!1}=n,o=a.history,s=xr.Pop,l=null,d=m();d==null&&(d=0,o.replaceState(Ra({},o.state,{idx:d}),""));function m(){return(o.state||{idx:null}).idx}function f(){s=xr.Pop;let N=m(),b=N==null?null:N-d;d=N,l&&l({action:s,location:T.location,delta:b})}function y(N,b){s=xr.Push;let v=Ml(T.location,N,b);d=m()+1;let w=bu(v,d),C=T.createHref(v);try{o.pushState(w,"",C)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;a.location.assign(C)}i&&l&&l({action:s,location:T.location,delta:1})}function x(N,b){s=xr.Replace;let v=Ml(T.location,N,b);d=m();let w=bu(v,d),C=T.createHref(v);o.replaceState(w,"",C),i&&l&&l({action:s,location:T.location,delta:0})}function A(N){let b=a.location.origin!=="null"?a.location.origin:a.location.href,v=typeof N=="string"?N:lo(N);return v=v.replace(/ $/,"%20"),Te(b,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,b)}let T={get action(){return s},get location(){return e(a,o)},listen(N){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(vu,f),l=N,()=>{a.removeEventListener(vu,f),l=null}},createHref(N){return t(a,N)},createURL:A,encodeLocation(N){let b=A(N);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:y,replace:x,go(N){return o.go(N)}};return T}var wu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wu||(wu={}));function Hg(e,t,r){return r===void 0&&(r="/"),_g(e,t,r)}function _g(e,t,r,n){let a=typeof t=="string"?Wn(t):t,i=Fn(a.pathname||"/",r);if(i==null)return null;let o=Bm(e);Gg(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let d=e2(i);s=Xg(o[l],d)}return s}function Bm(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(i,o,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(Te(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let d=Ir([n,l.relativePath]),m=r.concat(l);i.children&&i.children.length>0&&(Te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Bm(i.children,t,m,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:Kg(d,i.index),routesMeta:m})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,o);else for(let l of Im(i.path))a(i,o,l)}),t}function Im(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return a?[i,""]:[i];let o=Im(n.join("/")),s=[];return s.push(...o.map(l=>l===""?i:[i,l].join("/"))),a&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Gg(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Qg(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Ug=/^:[\w-]+$/,Wg=3,Vg=2,$g=1,Jg=10,Yg=-2,xu=e=>e==="*";function Kg(e,t){let r=e.split("/"),n=r.length;return r.some(xu)&&(n+=Yg),t&&(n+=Vg),r.filter(a=>!xu(a)).reduce((a,i)=>a+(Ug.test(i)?Wg:i===""?$g:Jg),n)}function Qg(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Xg(e,t,r){let{routesMeta:n}=e,a={},i="/",o=[];for(let s=0;s<n.length;++s){let l=n[s],d=s===n.length-1,m=i==="/"?t:t.slice(i.length)||"/",f=Cl({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},m),y=l.route;if(!f)return null;Object.assign(a,f.params),o.push({params:a,pathname:Ir([i,f.pathname]),pathnameBase:i2(Ir([i,f.pathnameBase])),route:y}),f.pathnameBase!=="/"&&(i=Ir([i,f.pathnameBase]))}return o}function Cl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Zg(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:n.reduce((d,m,f)=>{let{paramName:y,isOptional:x}=m;if(y==="*"){let T=s[f]||"";o=i.slice(0,i.length-T.length).replace(/(.)\/+$/,"$1")}const A=s[f];return x&&!A?d[y]=void 0:d[y]=(A||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:e}}function Zg(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),j0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(n.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function e2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return j0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const t2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,r2=e=>t2.test(e);function n2(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Wn(e):e,i;if(r)if(r2(r))i=r;else{if(r.includes("//")){let o=r;r=r.replace(/\/\/+/g,"/"),j0(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+r))}r.startsWith("/")?i=ku(r.substring(1),"/"):i=ku(r,t)}else i=t;return{pathname:i,search:o2(n),hash:s2(a)}}function ku(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function ys(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function a2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function zm(e,t){let r=a2(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Em(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=Wn(e):(a=Ra({},e),Te(!a.pathname||!a.pathname.includes("?"),ys("?","pathname","search",a)),Te(!a.pathname||!a.pathname.includes("#"),ys("#","pathname","hash",a)),Te(!a.search||!a.search.includes("#"),ys("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,s;if(o==null)s=r;else{let f=t.length-1;if(!n&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),f-=1;a.pathname=y.join("/")}s=f>=0?t[f]:"/"}let l=n2(a,s),d=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(d||m)&&(l.pathname+="/"),l}const Ir=e=>e.join("/").replace(/\/\/+/g,"/"),i2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),o2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,s2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function l2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Pm=["post","put","patch","delete"];new Set(Pm);const c2=["get",...Pm];new Set(c2);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ja.apply(this,arguments)}const Eo=I.createContext(null),Rm=I.createContext(null),Fr=I.createContext(null),Po=I.createContext(null),ur=I.createContext({outlet:null,matches:[],isDataRoute:!1}),jm=I.createContext(null);function u2(e,t){let{relative:r}=t===void 0?{}:t;Ua()||Te(!1);let{basename:n,navigator:a}=I.useContext(Fr),{hash:i,pathname:o,search:s}=Ro(e,{relative:r}),l=o;return n!=="/"&&(l=o==="/"?n:Ir([n,o])),a.createHref({pathname:l,search:s,hash:i})}function Ua(){return I.useContext(Po)!=null}function Hr(){return Ua()||Te(!1),I.useContext(Po).location}function Lm(e){I.useContext(Fr).static||I.useLayoutEffect(e)}function L0(){let{isDataRoute:e}=I.useContext(ur);return e?A2():d2()}function d2(){Ua()||Te(!1);let e=I.useContext(Eo),{basename:t,future:r,navigator:n}=I.useContext(Fr),{matches:a}=I.useContext(ur),{pathname:i}=Hr(),o=JSON.stringify(zm(a,r.v7_relativeSplatPath)),s=I.useRef(!1);return Lm(()=>{s.current=!0}),I.useCallback(function(d,m){if(m===void 0&&(m={}),!s.current)return;if(typeof d=="number"){n.go(d);return}let f=Em(d,JSON.parse(o),i,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ir([t,f.pathname])),(m.replace?n.replace:n.push)(f,m.state,m)},[t,n,o,i,e])}const qm=I.createContext(null);function Om(){return I.useContext(qm)}function h2(e){let t=I.useContext(ur).outlet;return t&&I.createElement(qm.Provider,{value:e},t)}function m2(){let{matches:e}=I.useContext(ur),t=e[e.length-1];return t?t.params:{}}function Ro(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=I.useContext(Fr),{matches:a}=I.useContext(ur),{pathname:i}=Hr(),o=JSON.stringify(zm(a,n.v7_relativeSplatPath));return I.useMemo(()=>Em(e,JSON.parse(o),i,r==="path"),[e,o,i,r])}function p2(e,t){return f2(e,t)}function f2(e,t,r,n){Ua()||Te(!1);let{navigator:a}=I.useContext(Fr),{matches:i}=I.useContext(ur),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let d=Hr(),m;if(t){var f;let N=typeof t=="string"?Wn(t):t;l==="/"||(f=N.pathname)!=null&&f.startsWith(l)||Te(!1),m=N}else m=d;let y=m.pathname||"/",x=y;if(l!=="/"){let N=l.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(N.length).join("/")}let A=Hg(e,{pathname:x}),T=w2(A&&A.map(N=>Object.assign({},N,{params:Object.assign({},s,N.params),pathname:Ir([l,a.encodeLocation?a.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?l:Ir([l,a.encodeLocation?a.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,r,n);return t&&T?I.createElement(Po.Provider,{value:{location:ja({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:xr.Pop}},T):T}function g2(){let e=T2(),t=l2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),r?I.createElement("pre",{style:a},r):null,null)}const y2=I.createElement(g2,null);class v2 extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?I.createElement(ur.Provider,{value:this.props.routeContext},I.createElement(jm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function b2(e){let{routeContext:t,match:r,children:n}=e,a=I.useContext(Eo);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),I.createElement(ur.Provider,{value:t},n)}function w2(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,s=(a=r)==null?void 0:a.errors;if(s!=null){let m=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);m>=0||Te(!1),o=o.slice(0,Math.min(o.length,m+1))}let l=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let m=0;m<o.length;m++){let f=o[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=m),f.route.id){let{loaderData:y,errors:x}=r,A=f.route.loader&&y[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||A){l=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((m,f,y)=>{let x,A=!1,T=null,N=null;r&&(x=s&&f.route.id?s[f.route.id]:void 0,T=f.route.errorElement||y2,l&&(d<0&&y===0?(M2("route-fallback"),A=!0,N=null):d===y&&(A=!0,N=f.route.hydrateFallbackElement||null)));let b=t.concat(o.slice(0,y+1)),v=()=>{let w;return x?w=T:A?w=N:f.route.Component?w=I.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=m,I.createElement(b2,{match:f,routeContext:{outlet:m,matches:b,isDataRoute:r!=null},children:w})};return r&&(f.route.ErrorBoundary||f.route.errorElement||y===0)?I.createElement(v2,{location:r.location,revalidation:r.revalidation,component:T,error:x,children:v(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):v()},null)}var Fm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Fm||{}),Hm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hm||{});function x2(e){let t=I.useContext(Eo);return t||Te(!1),t}function k2(e){let t=I.useContext(Rm);return t||Te(!1),t}function S2(e){let t=I.useContext(ur);return t||Te(!1),t}function _m(e){let t=S2(),r=t.matches[t.matches.length-1];return r.route.id||Te(!1),r.route.id}function T2(){var e;let t=I.useContext(jm),r=k2(),n=_m();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function A2(){let{router:e}=x2(Fm.UseNavigateStable),t=_m(Hm.UseNavigateStable),r=I.useRef(!1);return Lm(()=>{r.current=!0}),I.useCallback(function(a,i){i===void 0&&(i={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ja({fromRouteId:t},i)))},[e,t])}const Su={};function M2(e,t,r){Su[e]||(Su[e]=!0)}function C2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function N2(e){return h2(e.context)}function dn(e){Te(!1)}function D2(e){let{basename:t="/",children:r=null,location:n,navigationType:a=xr.Pop,navigator:i,static:o=!1,future:s}=e;Ua()&&Te(!1);let l=t.replace(/^\/*/,"/"),d=I.useMemo(()=>({basename:l,navigator:i,static:o,future:ja({v7_relativeSplatPath:!1},s)}),[l,s,i,o]);typeof n=="string"&&(n=Wn(n));let{pathname:m="/",search:f="",hash:y="",state:x=null,key:A="default"}=n,T=I.useMemo(()=>{let N=Fn(m,l);return N==null?null:{location:{pathname:N,search:f,hash:y,state:x,key:A},navigationType:a}},[l,m,f,y,x,A,a]);return T==null?null:I.createElement(Fr.Provider,{value:d},I.createElement(Po.Provider,{children:r,value:T}))}function B2(e){let{children:t,location:r}=e;return p2(Nl(t),r)}new Promise(()=>{});function Nl(e,t){t===void 0&&(t=[]);let r=[];return I.Children.forEach(e,(n,a)=>{if(!I.isValidElement(n))return;let i=[...t,a];if(n.type===I.Fragment){r.push.apply(r,Nl(n.props.children,i));return}n.type!==dn&&Te(!1),!n.props.index||!n.props.children||Te(!1);let o={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=Nl(n.props.children,i)),r.push(o)}),r}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},co.apply(this,arguments)}function Gm(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function I2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function z2(e,t){return e.button===0&&(!t||t==="_self")&&!I2(e)}function Dl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(a=>[r,a]):[[r,n]])},[]))}function E2(e,t){let r=Dl(e);return t&&t.forEach((n,a)=>{r.has(a)||t.getAll(a).forEach(i=>{r.append(a,i)})}),r}const P2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],R2=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],j2="6";try{window.__reactRouterVersion=j2}catch{}const L2=I.createContext({isTransitioning:!1}),q2="startTransition",Tu=Cf[q2];function O2(e){let{basename:t,children:r,future:n,window:a}=e,i=I.useRef();i.current==null&&(i.current=qg({window:a,v5Compat:!0}));let o=i.current,[s,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:d}=n||{},m=I.useCallback(f=>{d&&Tu?Tu(()=>l(f)):l(f)},[l,d]);return I.useLayoutEffect(()=>o.listen(m),[o,m]),I.useEffect(()=>C2(n),[n]),I.createElement(D2,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:o,future:n})}const F2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Um=I.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:i,replace:o,state:s,target:l,to:d,preventScrollReset:m,viewTransition:f}=t,y=Gm(t,P2),{basename:x}=I.useContext(Fr),A,T=!1;if(typeof d=="string"&&H2.test(d)&&(A=d,F2))try{let w=new URL(window.location.href),C=d.startsWith("//")?new URL(w.protocol+d):new URL(d),B=Fn(C.pathname,x);C.origin===w.origin&&B!=null?d=B+C.search+C.hash:T=!0}catch{}let N=u2(d,{relative:a}),b=G2(d,{replace:o,state:s,target:l,preventScrollReset:m,relative:a,viewTransition:f});function v(w){n&&n(w),w.defaultPrevented||b(w)}return I.createElement("a",co({},y,{href:A||N,onClick:T||i?n:v,ref:r,target:l}))}),In=I.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:a=!1,className:i="",end:o=!1,style:s,to:l,viewTransition:d,children:m}=t,f=Gm(t,R2),y=Ro(l,{relative:f.relative}),x=Hr(),A=I.useContext(Rm),{navigator:T,basename:N}=I.useContext(Fr),b=A!=null&&W2(y)&&d===!0,v=T.encodeLocation?T.encodeLocation(y).pathname:y.pathname,w=x.pathname,C=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;a||(w=w.toLowerCase(),C=C?C.toLowerCase():null,v=v.toLowerCase()),C&&N&&(C=Fn(C,N)||C);const B=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let z=w===v||!o&&w.startsWith(v)&&w.charAt(B)==="/",E=C!=null&&(C===v||!o&&C.startsWith(v)&&C.charAt(v.length)==="/"),R={isActive:z,isPending:E,isTransitioning:b},_=z?n:void 0,U;typeof i=="function"?U=i(R):U=[i,z?"active":null,E?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let Q=typeof s=="function"?s(R):s;return I.createElement(Um,co({},f,{"aria-current":_,className:U,ref:r,style:Q,to:l,viewTransition:d}),typeof m=="function"?m(R):m)});var Bl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bl||(Bl={}));var Au;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Au||(Au={}));function _2(e){let t=I.useContext(Eo);return t||Te(!1),t}function G2(e,t){let{target:r,replace:n,state:a,preventScrollReset:i,relative:o,viewTransition:s}=t===void 0?{}:t,l=L0(),d=Hr(),m=Ro(e,{relative:o});return I.useCallback(f=>{if(z2(f,r)){f.preventDefault();let y=n!==void 0?n:lo(d)===lo(m);l(e,{replace:y,state:a,preventScrollReset:i,relative:o,viewTransition:s})}},[d,l,m,n,a,r,e,i,o,s])}function U2(e){let t=I.useRef(Dl(e)),r=I.useRef(!1),n=Hr(),a=I.useMemo(()=>E2(n.search,r.current?null:t.current),[n.search]),i=L0(),o=I.useCallback((s,l)=>{const d=Dl(typeof s=="function"?s(a):s);r.current=!0,i("?"+d,l)},[i,a]);return[a,o]}function W2(e,t){t===void 0&&(t={});let r=I.useContext(L2);r==null&&Te(!1);let{basename:n}=_2(Bl.useViewTransitionState),a=Ro(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=Fn(r.currentLocation.pathname,n)||r.currentLocation.pathname,o=Fn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Cl(a.pathname,o)!=null||Cl(a.pathname,i)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var V2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Z=(e,t)=>{const r=I.forwardRef(({color:n="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:s="",children:l,...d},m)=>I.createElement("svg",{ref:m,...V2,width:a,height:a,stroke:n,strokeWidth:o?Number(i)*24/Number(a):i,className:["lucide",`lucide-${$2(e)}`,s].join(" "),...d},[...t.map(([f,y])=>I.createElement(f,y)),...Array.isArray(l)?l:[l]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=Z("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=Z("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=Z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=Z("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=Z("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=Z("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=Z("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=Z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=Z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=Z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=Z("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=Z("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=Z("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=Z("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=Z("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=Z("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=Z("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=Z("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=Z("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=Z("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=Z("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=Z("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=Z("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=Z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=Z("MessageSquareQuote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=Z("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=Z("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=Z("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=Z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=Z("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=Z("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=Z("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=Z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=Z("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=Z("SquareUser",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=Z("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=Z("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=Z("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=Z("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=Z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=Z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=Z("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Xr=["prose-sm","prose-base","prose-lg","prose-xl","prose-2xl"],np="/RKS-lab-notes/assets/rk_logo-CWNyNbai.svg",b4=({isDarkMode:e,toggleTheme:t,fontSizeIdx:r,setFontSizeIdx:n,isCollapsed:a,toggleCollapse:i,isArticlePage:o})=>{const s=({isActive:d})=>`flex items-center gap-4 px-3 py-3 mx-2 rounded border-2 transition-all overflow-hidden whitespace-nowrap
      ${d?"bg-ink text-paper border-ink dark:bg-crt-green dark:text-black dark:border-crt-green shadow-retro":"border-transparent hover:border-gray-400 dark:text-crt-green dark:hover:border-crt-green"}
      ${a?"justify-center":"justify-start"}`,l=(d=!1)=>`flex items-center gap-4 px-3 py-3 mx-2 rounded border-2 transition-all overflow-hidden whitespace-nowrap bg-white dark:bg-black/50
      ${d?"opacity-50 cursor-not-allowed border-transparent":"border-gray-200 dark:border-crt-dim hover:border-ink dark:hover:border-crt-green cursor-pointer"}
      ${a?"justify-center":"justify-start"}`;return h.jsxs("nav",{className:`hidden lg:flex border-r-2 border-ink dark:border-crt-green bg-gray-100 dark:bg-black flex-col justify-between transition-all duration-300 ease-in-out z-20 h-full relative
          ${a?"w-20":"w-64"}`,children:[h.jsx("button",{onClick:i,className:"absolute -right-3 top-20 w-6 h-6 bg-paper dark:bg-black border-2 border-ink dark:border-crt-green rounded-full flex items-center justify-center text-ink dark:text-crt-green hover:scale-110 transition-transform z-30",title:a?"Expand Sidebar":"Collapse Sidebar",children:a?h.jsx($m,{size:14}):h.jsx(e4,{size:14})}),h.jsx("div",{className:"p-4 border-b-2 border-ink dark:border-crt-green shrink-0",children:h.jsxs("div",{className:`border-4 border-ink dark:border-crt-green transition-all duration-300 bg-paper dark:bg-black flex items-center justify-center overflow-hidden
            ${a?"p-1 w-10 h-10 mx-auto rounded-full":"p-2 w-full h-auto rounded-none"}`,children:[h.jsx("img",{src:np,alt:"Lab Logo",className:"object-contain dark:invert transition-all duration-300 w-8 h-8"}),h.jsx("h1",{className:`font-serif font-bold text-lg uppercase tracking-wider dark:text-crt-green ml-2 transition-opacity duration-200
              ${a?"opacity-0 w-0 hidden":"opacity-100 block"}`,children:"Lab_Note"})]})}),h.jsxs("div",{className:"flex-1 py-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden",children:[o&&h.jsxs("div",{className:"mb-4 pb-4 border-b border-gray-300 dark:border-crt-dim mx-2 space-y-2",children:[h.jsx("div",{className:`font-mono text-[10px] uppercase text-pencil dark:text-crt-green/50 mb-2 transition-opacity ${a?"text-center":"px-3"}`,children:a?"Tool":"Reader Tools"}),h.jsxs("button",{onClick:()=>n(Math.min(Xr.length-1,r+1)),disabled:r===Xr.length-1,className:l(r===Xr.length-1),title:"Increase Font",children:[h.jsx(Zm,{size:20,className:"shrink-0 dark:text-crt-green"}),h.jsx("span",{className:`block font-mono text-xs font-bold dark:text-crt-green transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"ZOOM_IN"})]}),h.jsxs("button",{onClick:()=>n(Math.max(0,r-1)),disabled:r===0,className:l(r===0),title:"Decrease Font",children:[h.jsx(Qm,{size:20,className:"shrink-0 dark:text-crt-green"}),h.jsx("span",{className:`block font-mono text-xs font-bold dark:text-crt-green transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"ZOOM_OUT"})]}),h.jsxs("button",{className:l(),onClick:()=>window.print(),title:"Print",children:[h.jsx(ep,{size:20,className:"shrink-0 dark:text-crt-green"}),h.jsx("span",{className:`block font-mono text-xs font-bold dark:text-crt-green transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"PRINT_JOB"})]})]}),h.jsxs(In,{to:"/",className:s,title:"Library",children:[h.jsx(Km,{size:24,className:"shrink-0"}),h.jsx("span",{className:`block font-mono text-sm font-bold transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"LIBRARY"})]}),h.jsx("div",{className:"h-px bg-gray-300 dark:bg-crt-dim mx-4 my-2 shrink-0"}),h.jsxs(In,{to:"/media",className:s,title:"Media Logs",children:[h.jsx(Xm,{size:24,className:"shrink-0"}),h.jsx("span",{className:`block font-mono text-sm font-bold transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"MEDIA_LOGS"})]}),h.jsxs(In,{to:"/about",className:s,title:"Personnel File",children:[h.jsx(rp,{size:24,className:"shrink-0"}),h.jsx("span",{className:`block font-mono text-sm font-bold transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"PERSONNEL"})]})]}),h.jsxs("div",{className:"p-2 border-t-2 border-ink dark:border-crt-green bg-paper dark:bg-black shrink-0",children:[h.jsxs("button",{onClick:t,className:`w-full flex items-center p-2 font-mono text-xs border border-pencil dark:border-crt-green hover:bg-gray-200 dark:hover:bg-crt-dim dark:text-crt-green transition-colors
              ${a?"justify-center":"justify-start gap-4"}`,title:"Toggle Theme",children:[e?h.jsx(uo,{size:20,className:"shrink-0"}):h.jsx(F0,{size:20,className:"shrink-0"}),h.jsx("span",{className:`block whitespace-nowrap transition-opacity duration-200 ${a?"opacity-0 w-0 hidden":"opacity-100"}`,children:e?"DAY_SHIFT":"DARK_MODE"})]}),h.jsxs("div",{className:`mt-4 font-mono text-[10px] text-center text-pencil dark:text-crt-green/50 transition-opacity duration-200 ${a?"opacity-0 hidden":"opacity-100 block"}`,children:["v.3.1.0-dock",h.jsx("br",{}),"ReactOS_Shell"]})]})]})},w4=({isDarkMode:e,toggleTheme:t,fontSizeIdx:r,setFontSizeIdx:n,isOpen:a,toggleOpen:i,setIsOpen:o,isArticlePage:s})=>{const l=m=>`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ease-out backdrop-blur-md shadow-lg border-2
      ${m?"bg-ink text-white border-ink dark:bg-crt-green dark:text-black dark:border-crt-green scale-110 -translate-y-2":"bg-white/80 text-ink/80 border-transparent dark:bg-black/60 dark:text-crt-green dark:border-crt-green/30 hover:scale-105"}`,d="flex items-center justify-center w-10 h-10 rounded-lg bg-white/90 dark:bg-black/90 border border-gray-300 dark:border-crt-green/50 text-ink dark:text-crt-green shadow-sm active:scale-95 disabled:opacity-50";return h.jsxs("div",{className:"lg:hidden fixed bottom-6 left-0 w-full z-50 pointer-events-none flex flex-col items-center justify-end px-4",children:[h.jsxs("div",{className:`flex flex-col items-center p-3 mb-3 rounded-2xl bg-white/30 dark:bg-black/80 border border-white/40 dark:border-crt-green/40 backdrop-blur-xl shadow-2xl transition-all duration-300 origin-bottom
            ${a?"opacity-100 scale-100 translate-y-0 visible pointer-events-auto":"opacity-0 scale-90 translate-y-10 invisible pointer-events-none"}`,children:[s&&h.jsxs("div",{className:"flex items-center gap-3 mb-4 pb-4 border-b border-gray-400/30 dark:border-crt-green/30 w-full justify-center",children:[h.jsx("button",{onClick:()=>n(Math.max(0,r-1)),disabled:r===0,className:d,children:h.jsx(Qm,{size:16})}),h.jsxs("span",{className:"font-mono text-xs font-bold min-w-[30px] text-center dark:text-crt-green",children:["A",r+1]}),h.jsx("button",{onClick:()=>n(Math.min(Xr.length-1,r+1)),disabled:r===Xr.length-1,className:d,children:h.jsx(Zm,{size:16})}),h.jsx("div",{className:"w-px h-6 bg-gray-400/50 dark:bg-crt-green/50 mx-1"}),h.jsx("button",{className:d,onClick:()=>window.print(),children:h.jsx(ep,{size:16})}),h.jsx("button",{className:d,children:h.jsx(q0,{size:16})})]}),h.jsxs("div",{className:"flex items-end gap-3",children:[h.jsx(In,{to:"/",className:({isActive:m})=>l(m),onClick:()=>o(!1),children:h.jsx(Km,{size:20})}),h.jsx(In,{to:"/media",className:({isActive:m})=>l(m),onClick:()=>o(!1),children:h.jsx(Xm,{size:20})}),h.jsx(In,{to:"/about",className:({isActive:m})=>l(m),onClick:()=>o(!1),children:h.jsx(rp,{size:20})}),h.jsx("div",{className:"w-px h-8 bg-ink/20 dark:bg-crt-green/20 mx-1"}),h.jsx("button",{onClick:()=>{t(),o(!1)},className:"flex items-center justify-center w-12 h-12 rounded-xl bg-ink text-paper dark:bg-crt-dim dark:text-crt-green hover:scale-105 transition-transform",children:e?h.jsx(uo,{size:20}):h.jsx(F0,{size:20})})]})]}),h.jsx("button",{onClick:i,className:`pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md shadow-lg border-2 transition-all duration-300 active:scale-90
            ${a?"bg-red-500 text-white border-red-600 rotate-180":"bg-ink/90 text-white border-white/20 dark:bg-crt-green/90 dark:text-black dark:border-crt-green animate-bounce"}`,"aria-label":a?"Close Dock":"Open Dock",children:a?h.jsx(Vm,{size:24}):h.jsx(Jm,{size:24})})]})},x4=e=>{const t=Hr(),[r,n]=I.useState(!1),[a,i]=I.useState(!1),o=t.pathname.startsWith("/articles/");I.useEffect(()=>{n(!!o),i(!1)},[t.pathname,o]);const s=()=>n(d=>!d),l=()=>i(d=>!d);return h.jsxs(h.Fragment,{children:[h.jsx(b4,{...e,isCollapsed:r,toggleCollapse:s,isArticlePage:o}),h.jsx(w4,{...e,isOpen:a,toggleOpen:l,setIsOpen:i,isArticlePage:o})]})},k4=({isDarkMode:e,toggleTheme:t})=>{const r=I.useRef(null),n=Hr(),[a,i]=I.useState(2),o=n.pathname.startsWith("/articles/");return h.jsxs("div",{className:`h-screen w-screen flex flex-col lg:flex-row overflow-hidden transition-colors duration-300 ${e?"bg-crt-bg text-crt-green":"bg-paper text-ink"}`,children:[h.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-20 dark:opacity-10",style:{backgroundImage:e?"linear-gradient(0deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent)":"radial-gradient(#666 1px, transparent 1px)",backgroundSize:e?"4px 4px":"20px 20px"}}),e&&h.jsx("div",{className:"fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"}),h.jsx("header",{className:`lg:hidden flex items-center justify-between p-4 border-b-2 border-ink dark:border-crt-green bg-paper dark:bg-black z-30 relative shrink-0 ${o?"hidden":"flex"}`,children:h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("img",{src:np,alt:"Logo",className:"w-8 h-8 object-contain dark:invert"}),h.jsx("h1",{className:"font-serif font-bold text-lg uppercase tracking-wider dark:text-crt-green",children:"Lab_Note"})]})}),h.jsx(x4,{isDarkMode:e,toggleTheme:t,fontSizeIdx:a,setFontSizeIdx:i}),h.jsx("main",{className:"flex-1 relative overflow-hidden z-10 flex flex-col h-full",children:h.jsx("div",{ref:r,className:"flex-1 overflow-y-auto bg-transparent font-serif text-base touch-auto pb-24 lg:pb-0",children:h.jsx(N2,{context:{fontSizeIdx:a,setFontSizeIdx:i}})})})]})},S4={id:"RK-2025-003",title:"What is bioinformatics?",date:"2025-11-25",tags:["#introduction","#understandBioinformatics"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"Bioinformatics might seem foreign to someone who has spent most of their life in a lab working with test tubes, flasks, and shakers...",content:`
  <section id="introduction">
  <h2>Introduction</h2>
  <p>For decades, traditional biology was strictly defined by the study of tangible life. Whether in zoology, botany, or microbiology, the primary tools of the trade were the<b> field notebook, the scalpel,</b> and <b>the microscope</b>. A biologist’s expertise lay in the observation of morphology, the classification of species, and the careful culture of microorganisms in test tubes and flasks. This "wet lab" approach focused on the physical handling of samples, where data was often qualitative—sketches of leaves, descriptions of animal behavior, or the color changes in a bacterial culture. <strong>The concept of using advanced mathematics or algorithms to understand life was, for a long time, foreign to the discipline. </strong></p>
  <p> The landscape began to shift with the widespread acceptance of biotechnology in the late 20th century. As researchers moved from observing whole organisms to manipulating the molecular machinery of life—DNA, RNA, and proteins—the volume of data generated began to grow exponentially. The sequencing of the first genomes and the development of high-throughput technologies meant that a single experiment could no longer be recorded on a paper spreadsheet. This era marked the inevitable emergence of <b>bioinformatics</b>. What began as a niche necessity for organizing protein sequences has blossomed into a central pillar of modern science, driven by projects like the Human Genome Project which proved that <strong>biology was not just a physical science, but an information science</strong> @landerInitialSequencingAnalysis2001. </p>

  <p>To understand this field, one must deconstruct the term itself. <b>"Bio"</b> refers to the biological questions: the study of living systems, evolutionary relationships, and molecular pathways. <b>"Informatics"</b> refers to the science of information processing—the use of applied mathematics, computer science, and statistics to store, retrieve, and analyze massive datasets. Bioinformatics is just not simple merger of two fields but rather a systematic integration that has roots in fundamentals of both the merging subject @hogewegRootsBioinformaticsTheoretical2011. It is the discipline that allows us to translate the A, C, G, and T of genetic code into meaningful biological insights, turning raw digital data into medical cures and agricultural breakthroughs.</p>

  <p>Today, this integration is seamless and mandatory. Computers have evolved from simple record-keeping devices into the engines of biological discovery. Modern biology has a substantial portion that is "dry lab" where the terminal is as important as the pipette. This shift has profound implications for the new age biologist. To maintain knowledge and collaborate globally, researchers must now be fluent in tools that were once the domain of software engineers. Proficiency in Linux is required to navigate the powerful servers where genomic data resides, while languages like <b>Python</b> @cockBiopythonFreelyAvailable2009 and <b>R</b> @giorgiLanguageEngineBioinformatics2022 has become the <i>lingua franca</i> of the field, allowing biologists to write simple code to automate complex analyses.<strong> Familiarity with databases, web applications, and online services is no longer optional; it is a prerequisite for participating in the global scientific conversation</strong>. This text discusses these changes, exploring how the digitalization of biology is reshaping the skills, tools, and mindset required for the next generation of scientists.</p>
  </section>

  <section id="VisualizingChange">
    <h2>Visualizing The Shift</h2>
    <p>The transformation from traditional biology to a data-intensive science can be visualized through the changing landscape of data accumulation. The following figure illustrates the exponential growth of GenBank sequences over time.</p>
    
    <figure class="science-figure" data-id="FIG-1" data-clean-src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg" alt="Visualization of Data Growth" />
      <figcaption>Figure 1: Conceptual representation of the exponential expansion of biological data. The 'stars' represent data points in the genomic universe. (Source: NASA, Public Domain - Used for illustrative purposes).</figcaption>
    </figure>
  </section>

  <section id="DualNatureOfBioinformatics">
  <h2>The Dual Nature of Bioinformatics</h2>
  <p>
     Bioinformatics can be visualized as a bridge connecting biological questions to computational answers. However, standing on opposite ends of this bridge requires fundamentally different skill sets and mindsets.
  </p>

<h3>The Architects: The Development Side (The "Builders")</h3>
<p>This side is populated by "pure" bioinformaticians, computational biologists, and software engineers. Their primary product is infrastructure. They are not necessarily the ones discovering a new cancer pathway; rather, they build the tools that allows others to find it.</p>

 <p>
   <b>The Goal:</b> To create robust, scalable, and accurate software tools, databases, and algorithms that others can use.</p>
   <p><b>The Day-to-Day: </b>Their work involves writing complex code, optimizing algorithms for speed, managing server architecture, ensuring data security, and maintaining cloud infrastructure.</p>
   
   <table class="science-table" data-id="table-skills">
    <caption>Table 1: Comparative Analysis of Skill Sets Required for Different Roles in Bioinformatics</caption>
    <thead>
        <tr>
            <th>Skill Domain</th>
            <th>The Architect (Builder)</th>
            <th>The Explorer (Biologist)</th>
            <th>Usage Frequency (Avg)</th>
            <th>Complexity Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Algorithm Design</td>
            <td>Advanced (Create)</td>
            <td>Basic (Understand)</td>
            <td>85</td>
            <td>9.5</td>
        </tr>
        <tr>
            <td>Domain Knowledge</td>
            <td>Moderate (Context)</td>
            <td>Expert (Deep)</td>
            <td>90</td>
            <td>8.0</td>
        </tr>
        <tr>
            <td>Scripting (Python/R)</td>
            <td>Expert (Optimize)</td>
            <td>Intermediate (Apply)</td>
            <td>75</td>
            <td>6.5</td>
        </tr>
        <tr>
            <td>Server Management</td>
            <td>Expert (Deploy)</td>
            <td>Basic (Navigate)</td>
            <td>40</td>
            <td>7.0</td>
        </tr>
        <tr>
            <td>Statistical Analysis</td>
            <td>Advanced (Theory)</td>
            <td>Advanced (Application)</td>
            <td>95</td>
            <td>8.5</td>
        </tr>
    </tbody>
   </table>

   <h4>The Knowledge Base Required:</h4>
   <p>
       <i>Computer Science Fundamentals:</i> Deep understanding of data structures (graphs, trees, hash maps), algorithms (dynamic programming, machine learning), and software design patterns.</p>
       <p>
        <i>Software Engineering:</i> Version control (Git), continuous integration/deployment (CI/CD), containerization (Docker, Kubernetes), and database management (SQL, NoSQL).
       </p>
       <p><i>Mathematics & Statistics:</i> Probability theory, linear algebra, and statistical modeling are essential for creating the algorithms that power tools like BLAST or RNA-seq aligners.</p>
       <p><i>Biology (The Context):</i> They need enough biological knowledge to understand the problem they are solving, but they don't need to know how to pipette or design a wet-lab experiment.
 </p>

 <h3>The Explorers: The User Side (The "Biologists")</h3>
<p>This side is populated by wet-lab biologists, clinicians, and researchers. Their primary product is biological insight. They use the infrastructure built by the architects to answer specific scientific questions.</p>
<p>
  
   <b>The Goal:</b> To extract meaning from biological data. They care about what the data says about life, disease, or evolution.
  </p>
  <p> <b>The Day-to-Day: </b>Their work involves generating data (sequencing, mass spec), uploading it to servers, running analysis pipelines, visualizing results, and interpreting the biological significance.
</p>
 <h4>The Knowledge Base Required:</h4>
     
       <p><i>Biological Expertise:</i> Deep domain knowledge (e.g., microbiology, immunology) is their superpower. They know why the data matters.</p>
       <p><i>Data Literacy:</i> Understanding file formats (<a href="https://www.ncbi.nlm.nih.gov/genbank/fastaformat/">FASTA</a>, <a href="https://knowledge.illumina.com/software/general/software-general-reference_material-list/000002211">FASTQ</a>, <a href="https://support.illumina.com/help/BS_App_RNASeq_Alignment_OLH_1000000006112/Content/Source/Informatics/BAM-Format.htm">BAM</a>, <a href="https://support.illumina.com/help/BS_App_RNASeq_Alignment_OLH_1000000006112/Content/Source/Informatics/VCF-Format.htm">VCF</a>), experimental design, and statistical significance (<a href="https://en.wikipedia.org/wiki/P-value">p-values</a>, <a href="https://en.wikipedia.org/wiki/False_discovery_rate">FDR</a>).</p>
       <p><i>Practical Computing: </i>Basic command-line navigation (Linux), scripting for automation (Python/R), and familiarity with specific tools (<a href="https://galaxyproject.org">Galaxy</a> @thegalaxycommunityGalaxyPlatformAccessible2024, <a href="https://www.ncbi.nlm.nih.gov">NCBI</a>, <a href="https://genome.ucsc.edu/index.html">UCSC Genome Browser</a>).</p>
     

<h3>The Trap: Losing Yourself in the "Engineer's Domain"</h3>
<p>
One of the most common pitfalls for modern biologists is the feeling that they must become software engineers to be "good" at bioinformatics which is not quite right.<b> We all have been using technologies and tools that we do not fully understand yet we use them and achieve our goals effectively.</b> For instance whatsapp, Excel, Word and nearly everything related to technology. Most of us are just end users for many of the products and biologists are just that... the end user of technology and tools that are developed by software engineers. Our focus should be on how to utilize tools as they were intended to be used. The key is to recognize the distinction between being a user of tools and being a builder of tools.
</p>
<h4>How Biologists Get Lost:</h4>
<p>A microbiologist might spend six months trying to build a custom genome assembler from scratch in C++, or trying to configure a complex Kubernetes cluster to run a simple analysis. This is akin to a biologist trying to build their own microscope before looking at a slide. While educational, it is often an inefficient use of time that distracts from the actual scientific inquiry.</p>

<h4>The "Imposter Syndrome" Effect:</h4>
<p>Biologists often feel inadequate because they can't write complex object-oriented code or understand the mathematical proofs behind an algorithm. They forget that their <b>value lies in interpreting the output, not creating the tool</b>. If you are judging yourself by the standards of a Google software engineer, you will always feel behind.</p>


<h3>The Biologist’s Guide to Focus: "Driver, not Mechanic"</h3>
<p>
  A biologist should aim to be an expert user of software think about whatsapp or telegram or browser or any games you play "no idea how they were built! no idea how they execute their functions and yet we manage to achieve our goals effectively". You don't need to know how the app was built, but you must know how to use it effectively to achieve your goals. You should understand the tool's purpose, its strengths and weaknesses, and how to interpret its output correctly.
</p>
 <h4>1. Understand the "Black Box" (Input/Output Logic)</h4>
<ul>
  <p>You don't need to read the source code of a tool like SPAdes @bankevichSPAdesNewGenome2012 (a genome assembler), but you must understand its logic.</p>
  <li> What goes in? (Short reads? Long reads? Quality scores?)</li>
  <li>What happens inside? (Conceptually: It builds a de Bruijn graph to connect overlapping sequences).</li>
  <li>What comes out? (Contigs and scaffolds).</li>
  <li>Why is this important? If you feed it low-quality data (garbage in), you will get a fragmented assembly (garbage out).<b> Understanding the mechanism prevents you from trusting bad results.</b></li>
</ul>

<h4>2. Master the Parameters, Not the Code</h4>
<p>Every bioinformatics tool comes with a list of adjustable settings (parameters). An engineer sets the defaults; a smart biologist knows when to change them.
 Example: If you are searching for a gene in a closely related species, you might use strict parameters. If you are looking for distant evolutionary cousins, you must relax the stringency. <b>Knowing which parameters to change requires biological intuition, not coding skill</b>.</p>

<h4>3. Know the Limitations</h4>
<p>
  This is the most critical skill. Every tool has a blind spot.
   Example: 16S rRNA sequencing is great for identifying bacteria, but it may not always distinguish between very closely related species or strains in certain cases.
   A pure software engineer might miss this nuance. A biologist must be the one to say, "Maybe, the biochemical or other characters and properties are not of strain or specific species." @janda16SRRNAGene2007
</p>

<h4>4. Scripting vs. Software Engineering</h4>
<p>
  Biologists should learn scripting (writing short, disposable code to glue tasks together or make a chart) rather than software engineering (building permanent, robust applications).
   <ul>
     <li>Focus on: "How do I take the output of Tool A and format it for Tool B?" or "How do I make a heatmap of this gene expression table?"
     </li>
     <li>Ignore: "How do I optimize memory allocation?" or "How do I build a GUI?"</li>
   </ul>
  </p>

<h2>Conclusion</h2>
<p>
  
  The "New Age Biologist" is a hybrid, but a balanced one. You are a scientist first and a computer user second. Do not feel pressured to master the depths of computer science unless that is where your passion lies. Your role is to bridge the gap—to take the powerful tools built by engineers and apply them to the messy, complex, and beautiful reality of biology. By respecting the tool builders but mastering the tool's application, you remain the master of your scientific domain.
</p>

  </section>
  `},T4=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),Cu="/RKS-lab-notes/assets/ncbi_flat_file-pmwGZGTq.png",A4={id:"RK-2025-004",title:"Guide to Primary Biological Databases",date:"2025-12-04",tags:["#Database","#PrimaryDatabases","#bioinformatics"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:'Primary database are the archives—such as GenBank for DNA sequences, the Protein Data Bank (PDB) for 3D structures, and the Sequence Read Archive (SRA) for raw sequencing output—serve as the "source of truth." Unlike secondary databases that interpret findings, primary repositories store raw experimental data directly from researchers, ensuring reproducibility and global access. As technologies like cryo-EM and single-cell sequencing generate petabytes of data, these databases are evolving into cloud-based ecosystems, multi-omics discoveries that drive the future of life sciences.',content:`

<article>

<section>
<h2>1. Introduction: The Archives of Life</h2>
<p>Modern biology runs on data. We have moved from studying single genes in isolation to analyzing entire systems, a shift driven by machines that generate massive amounts of digital information. In this ecosystem, the <strong>Primary Database</strong> is the foundation. These are not just storage folders; they are the permanent, unchangeable records of scientific history, holding the raw output from sequencing machines and experiments @ddbjDDBJ2025; @bensonGenBank2005; @embl-ebiEMBLEBIHomepage.</p>

<p>A primary database is defined by how close it is to the source. Unlike secondary databases—which curate and interpret data to tell you what it means—primary databases store data directly from the researcher. They act as the "source of truth." When a scientist sequences a genome, they must deposit that raw data into a primary database to publish their findings. This ensures that others can check the work and build upon it.</p>

<p>These archives, such as <strong>GenBank</strong> and the <strong>Protein Data Bank (PDB)</strong>, are characterized by their "archival" nature. Once a record is submitted, it is assigned a permanent accession number that never changes, even if our understanding of that data evolves.</p>
</section>

<section>
<h2>2. The Nucleotide Foundation: INSDC</h2>
<p>The largest collection of raw genetic data is managed by the <strong>International Nucleotide Sequence Database Collaboration (<a href="https://www.insdc.org">INSDC</a>)</strong> @insdcInternationalNucleotideSequence. This is a partnership between three major organizations:</p>
<ul>
<li><strong><a href="https://www.ncbi.nlm.nih.gov">NCBI</a></strong> (USA)</li>
<li><strong><a href="https://www.ebi.ac.uk">EMBL-EBI</a></strong> (Europe)</li>
<li><strong><a href="https://www.ddbj.nig.ac.jp/index-e.html">DDBJ</a></strong> (Japan)</li>
</ul>

<p>The key to this system is <strong>synchronization</strong>. These three centers exchange new data daily. If a researcher in Tokyo submits a sequence to DDBJ, a scientist in the US can find it on GenBank within days. While they share the same data, they offer different tools and interfaces for their local communities.</p>

<h3>2.1 GenBank: The Global Standard</h3>
<p>Managed by the NCBI, GenBank is the most famous primary database. It houses everything from short gene fragments to complete genomes @bensonGenBank2005.</p>

<p><strong>Exponential Growth:</strong> The database doubles in size roughly every 18 months. As of August 2025, GenBank held over <strong>47 trillion bases</strong> of DNA @genbankGenBankWGSStatistics2025. Most of this comes from <a href="https://www.ncbi.nlm.nih.gov/genbank/wgs/">Whole Genome Shotgun</a> (WGS) projects [<a href="https://www.ncbi.nlm.nih.gov/genbank/genomesubmit/">submission guidelines</a>], but there is also a massive amount of plant, bacterial, and viral data.</p>

<p><strong>The Flat File:</strong> Data in GenBank is stored in a specific format known as a "Flat File." Key elements include:</p>
<ul>
<li><strong>ACCESSION:</strong> The unique ID (e.g., U12345) that serves as the permanent citation.</li>
<li><strong>VERSION:</strong> Tracks updates (e.g., U12345.1 becomes U12345.2).</li>
<li><strong>FEATURES:</strong> The scientific annotations, such as where genes start and stop.</li>
</ul>

<p>visit <a href="https://www.ncbi.nlm.nih.gov/nuccore/U12345">NCBI Flat File Format</a> for more details.</p>

<figure class="science-figure" data-id="FIG-1" data-clean-src="${Cu}">
      <img src="${Cu}" alt="NCBI-flat-file format" />
      <figcaption> NCBI flat file format for human readable data sharing (Source: NCBI, Used for illustrative purposes).</figcaption>
    </figure>

</p>

<h3>2.2 ENA and DDBJ</h3>
<p><strong><a href="https://www.ebi.ac.uk/ena/browser/home">European Nucleotide Archive</a> (ENA):</strong> Based in the UK, the ENA focuses on linking raw data to assembled sequences. Its "<a href="https://www.ebi.ac.uk/ena/browser/xref">Cross Reference</a>" search allows users to find connections between sequences and external datasets like protein structures.</p>

<p><strong>DNA Data Bank of Japan (DDBJ):</strong> Based in Mishima, DDBJ connects its database directly to a <a href="https://sc.ddbj.nig.ac.jp/en/">supercomputer system</a>, allowing researchers to analyze the massive data they download. They also recently launched cloud services to help researchers share data privately before publication.</p>

<h3>2.3 How Data Gets In</h3>
<p>Researchers use specific tools to submit their data, ensuring it meets global standards.</p>
<table class="science-table" data-id="table-skills"> 
<caption>Table 1: Various data submission tools supported by major primary databases.</caption> 
<thead>
<tr>
<th>Organization</th>
<th>Tool</th>
<th>Best Used For</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>NCBI</strong></td>
<td>BankIt</td>
<td>Simple submissions (single genes).</td>
</tr>
<tr>
<td><strong>NCBI</strong></td>
<td>Submission Portal</td>
<td>High-volume data (COVID-19, Flu).</td>
</tr>
<tr>
<td><strong>ENA</strong></td>
<td>Webin</td>
<td>The main interface for European submissions.</td>
</tr>
</tbody>
</table>
</section>

<section>
<h2>3. The Structural Dimension: Protein Data Bank (PDB)</h2>
<p>While GenBank stores the "code" of life, the <strong>Protein Data Bank (<a href="https://www.rcsb.org">PDB</a>)</strong> stores the "shape." It is the single global archive for the 3D structures of proteins and biological molecules.</p>

<h3>3.1 The Resolution Revolution</h3>
<p>As of 2025, the PDB holds over <strong>245,000 entries</strong>[Most likely number will be bigger when you visit!]. The way scientists determine these structures is changing:</p>
<ul>
<li><strong>X-ray Crystallography:</strong> The traditional method, still producing about 9,000 structures a year [<a href="https://www.rcsb.org/stats/growth/growth-xray">data</a>].</li>
<li><strong>Cryo-Electron Microscopy (EM):</strong> The fastest-growing method. It allows scientists to see large, complex molecules that were previously impossible to map. EM submissions jumped from roughly 400 in 2016 to over 6,400 in 2025.</li>
</ul>

<h3>3.2 AI Integration</h3>
<p>A major shift is the inclusion of <strong>Computed Structure Models (CSM)</strong>. PDB portals now index over 1 million structures predicted by AI tools like <a href="https://alphafold.ebi.ac.uk">AlphaFold</a>. These are clearly marked so researchers know the difference between an experimental result (Gold standard) and an AI prediction (Silver/Bronze standard).</p>
</section>

<section>
<h2>4. The High-Throughput Tsunami: Sequence Read Archive (SRA)</h2>
<p>Modern sequencing machines produce too much data for traditional databases like GenBank. The <strong>Sequence Read Archive (SRA) (<a href="https://www.ncbi.nlm.nih.gov/sra">visit</a>)</strong> was built to hold this raw "high-throughput" data.</p>

<p><strong>The Challenge:</strong> The SRA is massive, holding nearly <strong><a href="https://datascience.nih.gov/data-ecosystem/sra">12 petabytes</a></strong> of data. It is often called an "information lake"—a vast ocean of data that can be hard to navigate without good maps (metadata).</p>

<p><strong>The Solution:</strong> Because the data is too big to download, the NIH moved the SRA to the cloud (AWS and Google Cloud). This allows biologists to bring their code to the data rather than trying to bring the data to their computers.</p>
</section>

<section>
<h2>5. Functional Genomics: Gene Expression Omnibus (GEO)</h2>
<p>If GenBank tells us what a cell <em>can</em> do, the <strong><a href="https://www.ncbi.nlm.nih.gov/geo/">Gene Expression Omnibus</a> (GEO)</strong> tells us what it <em>is doing</em>. It stores gene expression profiles—snapshots of which genes are turned on or off under specific conditions.</p>

<p><strong>Democratizing Analysis:</strong> GEO is famous for its tool <strong>GEO2R</strong>. This web-based program allows biologists who don't know how to code to compare samples (e.g., "Tumor" vs. "Normal") and find which genes are driving a disease (<a href="https://www.ncbi.nlm.nih.gov/geo/geo2r/?acc=GSE33482">example</a>).</p>
</section>


<section>
<h2>6. Beyond DNA: Proteomics, Metabolomics, and Clinical Data</h2>
<p><strong>Proteomics:</strong> The <strong><a href="https://www.ebi.ac.uk/pride/">PRIDE</a></strong> database is the central hub for mass spectrometry data, allowing researchers to verify the presence of specific proteins.</p>

<p><strong>Metabolomics:</strong> Databases like <strong><a href="https://www.ebi.ac.uk/metabolights/">MetaboLights</a></strong> and <strong>MetaboBank</strong> store data on small molecules (metabolites). This data is complex and heavy, often requiring special transfer protocols.</p>

<p><strong>Clinical Variation:</strong> <strong><a href="https://www.ncbi.nlm.nih.gov/clinvar/">ClinVar</a></strong> links genetic mutations to human health. It uses a "star rating" system to show how reliable the data is. A variant reviewed by an expert panel (3 or 4 stars) is considered a gold standard, helping doctors make better diagnoses.</p>
</section>

<section>
<h2>7. Applications: Using the Archives</h2>
<p>These databases are the active workspaces of modern science.</p>

<table class="science-table" data-id="table-applications"> 
<caption>Table 2: Various applications of major primary databases.</caption>
<thead>
<tr>
<th>Application</th>
<th>Database</th>
<th>How it Works</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Identify a Gene</strong></td>
<td>GenBank</td>
<td>Use <strong>BLAST</strong> to match an unknown sequence against the database to predict its function.</td>
</tr>
<tr>
<td><strong>Drug Design</strong></td>
<td>PDB</td>
<td>Download 3D structures of viruses to simulate how new drugs might attach to them.</td>
</tr>
<tr>
<td><strong>Find Biomarkers</strong></td>
<td>GEO</td>
<td>Re-analyze public cancer data to find genes that are always "on" in tumors.</td>
</tr>
<tr>
<td><strong>Diagnose Patients</strong></td>
<td>ClinVar</td>
<td>Check if a patient's mutation has been seen before and if it is harmful.</td>
</tr>
</tbody>
</table>
</section>

<section>
<h2>8. Conclusion</h2>
<p>Primary databases are the global memory of biological discovery. As data moves to the cloud and AI tools like AlphaFold become standard, these archives are evolving from simple storage units into hybrid engines of discovery. By keeping this raw data open and accessible, we ensure that a discovery made today can fuel the medical breakthroughs of tomorrow.</p>
</section>

</article>



  `},M4=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),C4={id:"RK-2025-005",title:"Guide to Secondary Biological Databases",date:"2025-12-04",tags:["#Database","#SecondaryDatabases","#bioinformatics"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`The shift from data scarcity to abundance in microbiology has made interpretation the primary research bottleneck. While primary databases (GenBank, ENA) serve as archival repositories for raw sequences, secondary databases (Pfam, CARD, VFDB) function as the essential "engine of insight." By leveraging computational algorithms like Hidden Markov Models (HMMs) and AI-driven structure prediction, these tools transform cryptic nucleotide strings into functional hypotheses regarding virulence, antimicrobial resistance, and metabolism. For the modern microbiologist, mastering these interpretative layers—distinguishing between "strict" and "loose" hits, understanding domain architecture, and utilizing pathway reconstruction—is critical for converting the pan-genome's complexity into actionable biological discovery`,content:`
<article>
  <section>
    <h2>1. Introduction: From Data Accumulation to Interpretation</h2>
    <p>The democratization of Next-Generation Sequencing (NGS) has shifted the bottleneck of biological research from data acquisition to interpretation. For the microbiologist, the pan-genome presents a unique challenge: we possess the genetic blueprints of myriad organisms [<a href="https://datascience.nih.gov/data-ecosystem/sra">12 petabytes of data from SRA</a>], yet the functional realization of these blueprints often remains obscured by the volume of raw information.</p>
    <p>The distinction between primary and secondary databases is the central architectural divide governing modern discovery. Primary databases (GenBank, ENA, DDBJ) serve as the archival "Source of Truth," preserving the raw experimental record. However, they are agnostic to meaning. Secondary databases act as the "Engine of Insight," applying algorithms and curation to extract biological knowledge.</p>
    
    

    <h3>1.1 Primary vs. Secondary Databases</h3>
    <p>To navigate the bioinformatics landscape, one must distinguish between the repository of record and the tools of analysis.</p>

    <table class="science-table" data-id="difference-table">
      <caption>Table 1: Primary vs. Secondary Databases</caption>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Primary Database (Archival)</th>
          <th>Secondary Database (Derived)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Definition</strong></td>
          <td>Repositories of original, experimentally derived data submitted by authors.</td>
          <td>Curated resources that analyze and annotate primary data using algorithms and manual review.</td>
        </tr>
        <tr>
          <td><strong>Data Source</strong></td>
          <td>Direct submission from researchers (Sequencing centers, individual labs).</td>
          <td>Derived from primary data via computational pipelines (HMMs, PSSMs) and expert curation.</td>
        </tr>
        <tr>
          <td><strong>Mutability</strong></td>
          <td>Static. Data is rarely changed to preserve the historical record.</td>
          <td>Dynamic. Entries are updated or re-annotated as models and knowledge improve.</td>
        </tr>
        <tr>
          <td><strong>Query Result</strong></td>
          <td>Raw sequences (nucleotides/proteins), accession numbers.</td>
          <td>Functional annotations, motifs, conserved domains, pathways, families.</td>
        </tr>
        <tr>
          <td><strong>Role in Research</strong></td>
          <td>Retrieving specific sequences; submission of new data.</td>
          <td>Functional prediction, evolutionary analysis, identifying "hypothetical proteins."</td>
        </tr>
        <tr>
          <td><strong>Examples</strong></td>
          <td>GenBank, ENA, DDBJ, SRA.</td>
          <td>Pfam, VFDB, CARD, InterPro, Swiss-Prot.</td>
        </tr>
      </tbody>
    </table>

    <h3>1.2 The Microbiological Imperative</h3>
    <p>Microbial genomics is defined by the pan-genome concept. A bacterial species consists of a conserved "core" genome and a highly plastic "accessory" genome (plasmids, genomic islands). Primary databases, with their high noise-to-signal ratio, are ill-suited for analyzing this plasticity. Secondary databases, which classify proteins based on conserved domains rather than whole-sequence identity, allow the microbiologist to identify the function of horizontally acquired genes even if they share only distant sequence homology with known proteins.</p> 
  </section>

  

  <section>
    <h2>2. General Secondary Databases: The Foundation</h2>
    <p>Before asking specific questions about virulence or resistance, a microbiologist must establish the general functional landscape of an organism. These databases categorize the "parts list" of a microbe.</p>

    <h3>2.1 Pfam: The Protein Families Database</h3>
    <p>Pfam is the backbone of prokaryotic annotation pipelines like Prokka. It operates on a two-tiered system:</p>

    <strong>pfam is now itegrated with <a href="https://www.ebi.ac.uk/interpro/">interpro</a></strong>
    <ul>
      <li><strong>Pfam-A:</strong> High-quality, manually curated families.</li>
      <li><strong>Pfam-B:</strong> Automated clusters (using MMseqs2) covering sequences that do not match Pfam-A.</li>
    </ul>
    <p><strong>Key Feature: Clans.</strong> Pfam groups related families into Clans (e.g., Beta-lactamase clan). If a protein doesn't match a specific family but falls into a Clan, it warrants investigation as a putative functional variant.</p>

    <h3>2.2 InterPro: The Integrator</h3>
    <p><a href="https://www.ebi.ac.uk/interpro/">InterPro</a> solves the "Tower of Babel" [too many databases, too many way of predicting and analyzing the sequences] problem by integrating signatures from 13 distinct databases (Pfam, PROSITE, TIGRFAMs, CATH, etc.) into a single entry.</p>

    <p><strong>The "Russian Doll" Hierarchy:</strong> A single protein entry displays the broad Pfam domain, the specific PROSITE active site, and the TIGRFAM "equivalog" (specific biological role) simultaneously. This layering allows for cross-validation of function.</p>
  </section>

  

  <section>
    <h2>3. Specialized Databases: The Microbiologist’s Toolkit</h2>
    <p>Once the general landscape is mapped, specialized databases define the organism's lifestyle—how it infects, how it resists drugs, and what it eats.</p>

    <h3>3.1 Virulence: VFDB</h3>
    <p>The <a href="https://www.mgc.ac.cn/VFs/main.htm">Virulence Factor Database</a> (VFDB) catalogs mechanisms of pathogenicity (toxins, adhesion, secretion). It categorizes data into <strong>Core</strong> (experimentally verified) and <strong>Predicted</strong> (mining of genomes).</p>
    <p><strong>Critical Tool: VFanalyzer.</strong> Virulence factors often function in clusters (e.g., T3SS requires 20+ genes). VFanalyzer uses "synteny-aware" analysis. It identifies gene clusters rather than isolated hits, distinguishing true Pathogenicity Islands (PAIs) from decayed pseudogenes. [just because gene is present does not mean the function is also present. Some genes may require presence of other genes to function and tool helps identify such functional clusters]</p>

    <h3>3.2 Resistance: CARD</h3>
    <p>The <a href="https://card.mcmaster.ca">Comprehensive Antibiotic Resistance Database</a> (CARD) uses a rigorous Antibiotic Resistance Ontology (ARO) to standardize terminology.</p>

    

    <p><strong>Critical Tool: RGI (Resistance Gene Identifier).</strong> RGI uses curated cut-offs to categorize hits:
    <ul>
      <li><strong>Perfect:</strong> 100% identity to a reference.</li>
      <li><strong>Strict:</strong> Falls within the curated bit-score cutoff. Safe for reporting.</li>
      <li><strong>Loose:</strong> Valid homology but outside cutoffs. <em>Warning:</em> High false-positive rate; treat as hypothetical.</li>
    </ul>
    </p>

    <h3>3.3 Metabolism: MetaCyc</h3>
    <p><a href="https://metacyc.org">MetaCyc</a> facilitates metabolic reconstruction. The <strong>PathoLogic</strong> algorithm maps enzymes to pathways and calculates the probability of a pathway being functional.</p>

    

    <p><strong>Key Feature: Pathway Hole Filling.</strong> If a genome contains 4 out of 5 enzymes for a pathway, the software scans for "hypothetical proteins" with genomic context suggesting they fulfill the missing function.</p>
  </section>

  

  <section>
    <h2>4. Under the Hood: The Algorithms</h2>
    <p>To use these databases effectively, it helps to understand the logic they use to define "similarity." We can view this evolution as moving from strict "recipes" to flexible probability models.</p>

    <h3>4.1 The Strict Recipe: Regular Expressions (PROSITE)</h3>
    
    <h4>The Problem with Primary Data</h4>
    <p>A primary database gives you a linear sequence of thousands of amino acids (e.g., <code>MKAILVV...</code>). To the human eye, this is just noise. It tells us nothing about what the protein <em>does</em>.</p>

    <h4>The Secondary Database Solution: "Protein Fingerprints"</h4>
    <p>Biologists realized that while the overall sequence of a protein can change over millions of years, the specific part that does the work—the <strong>active site</strong>—cannot. It must remain conserved. <a href="https://prosite.expasy.org">PROSITE</a> was created to hunt for these conserved "fingerprints" (motifs).</p>

    <h4>The Mechanism: The "Recipe"</h4>
    <p>PROSITE defines these fingerprints using a computer code called a <strong>Regular Expression (Regex)</strong>. Think of a Regex not as math, but as a strict <strong>recipe</strong>. It tells the computer exactly which amino acids are allowed at the active site and the precise spacing required between them.</p>

    <h4>Example: The Zinc Finger Motif</h4>
    <p>To see how this works, look at the "Zinc Finger." This is a structural clamp that proteins use to grab DNA. To work, it needs 4 "anchor" residues (Cysteines and Histidines) to hold a zinc atom.</p>
    
    
    
    <p>A PROSITE recipe for this clamp looks like this: <code>C-x(2,4)-C-x(12)-H-x(3)-H</code></p>
    
    <p>Here is how the computer reads that recipe:</p>
    <ul>
        <li><strong><code>C</code></strong>: <strong>Start here.</strong> You must have a Cysteine (Anchor 1).</li>
        <li><strong><code>x(2,4)</code></strong>: <strong>The Loop.</strong> You can have 2 to 4 random amino acids here (the spacer).</li>
        <li><strong><code>C</code></strong>: <strong>Checkpoint.</strong> You must have another Cysteine (Anchor 2).</li>
        <li><strong><code>x(12)</code></strong>: <strong>The Bridge.</strong> You must have exactly 12 amino acids here.</li>
        <li><strong><code>H</code></strong>: <strong>Checkpoint.</strong> You must have a Histidine (Anchor 3).</li>
        <li><strong><code>x(3)</code></strong>: <strong>The End Loop.</strong> You must have exactly 3 amino acids here.</li>
        <li><strong><code>H</code></strong>: <strong>Finish.</strong> You must end with a Histidine (Anchor 4).</li>
    </ul>

    <p><strong>Utility vs Limitation:</strong> This method is highly specific (very few false alarms) but has low sensitivity. Because biology is messy, if a protein has a bridge of 13 amino acids instead of 12, PROSITE will reject it entirely.</p>

    <h3>4.2 The Flexible Model: Profile HMMs</h3>
    <p>To solve the strictness problem of Regex, modern databases (like Pfam) use <strong>Profile Hidden Markov Models (HMMs)</strong>. </p>
    
    

    <p>Unlike a strict recipe, an HMM is a probabilistic model. It understands that evolution happens. It assigns a "score" rather than a "yes/no." It specifically handles <strong>Insertions and Deletions</strong> (Indels), allowing it to recognize proteins that have the same core structure but have evolved longer or shorter loops. This allows homology detection even at 20-30% sequence identity.</p>

    <h3>4.3 The Future: AI and Structure</h3>
    <p>Newer tools (InterPro 2025) use AI (AlphaFold, ESMFold) to look at the 3D shape directly. This allows us to find the "dark matter" of the microbial world—proteins that look different in sequence but fold into the same functional shape.</p>
  </section>

  <section>
    <h2>5. Case Study: Outbreak Investigation</h2>
    <p><strong>Scenario:</strong> 5 cases of Imipenem-resistant <em>Klebsiella pneumoniae</em> in an ICU.</p>

    <div>
      <p><strong>Phase 1: Identification (<a href="https://pubmlst.org">PubMLST</a>).</strong> All isolates are ST258 (High-risk clone). Confirms outbreak.</p>
      <p><strong>Phase 2: Resistance (CARD).</strong> RGI identifies <em>bla</em>KPC-3 (Perfect hit). Mechanism: Carbapenemase. Explains phenotypic resistance.</p>
      <p><strong>Phase 3: Virulence (VFDB).</strong> Isolates carry <em>ybt</em> (yersiniabactin) but lack <em>iuc</em> (aerobactin). Diagnosis: Classic MDR <em>K. pneumoniae</em>, not Hypervirulent (hvKp).</p>
      <p><strong>Phase 4: Environment (<a href="http://bacmet.biomedicine.gu.se">BacMet</a>).</strong> Plasmid analysis reveals <em>qacEΔ1</em> (QAC resistance). Suggests hospital disinfectants are selecting for the resistance plasmid.</p>
    </div>

    <p><strong>Conclusion:</strong> No single database is sufficient. The integration of MLST, CARD, VFDB, and BacMet provides the full epidemiological picture.</p>
  </section>
</article>
  `},N4=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),D4={id:"RK-2025-006",title:"Understand the Functional Genomics",date:"2025-12-17",tags:["#FunctionalGenomics","#Transcription","#bioinformatics"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    Functional genomics acts as the vital bridge between the static genotype and the observable phenotype. Unlike traditional genetics, it operates on a genome-wide scale, integrating transcriptomics, proteomics, and metabolomics to understand dynamic biological processes. Techniques like RNA-Seq and ChIP-seq allow researchers to monitor gene expression and regulation in real-time, transforming raw sequence data into actionable insights. This discipline is essential for modern bioinformatics, driving discoveries in microbiology such as uncovering virulence factors in pathogens—and revolutionizing pharmaceutical research by validating drug targets and enabling precision medicine<.
`,content:`


<article>
<div style="text-align: center; margin: 30px 0;">
    <a href="https://rkpatel-1996.github.io/functional_genomics/" 
       target="_blank" 
       rel="noopener noreferrer" 
       style="
           display: inline-block;
           padding: 15px 30px;
           background: linear-gradient(135deg, #45f5f6 0%, #00a8cc 100%);
           color: #003d4d;
           font-family: system-ui, -apple-system, sans-serif;
           font-size: 16px;
           font-weight: 700;
           text-decoration: none;
           text-transform: uppercase;
           letter-spacing: 1px;
           border: none;
           border-radius: 50px;
           box-shadow: 0 4px 15px rgba(0, 168, 204, 0.4);
           transition: all 0.3s ease;
           cursor: pointer;
       "
       onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 25px rgba(0, 168, 204, 0.6)';"
       onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0, 168, 204, 0.4)';"
    >
        Interactive Functional Genomics Page
    </a>
</div>
    <section id="introduction">
        <h2>1. Introduction: The Dynamic Layer of the Genome</h2>
        <p>
            The completion of the <b>Human Genome Project</b> and the subsequent explosion in sequencing capabilities marked the beginning of a new era in biology. However, the static sequence of an organism's DNA—its <b>genome</b>—is merely a catalog of potential biological functions. It represents the "blueprint," but it does not describe the construction process, the maintenance schedules, or the response to external stressors. To bridge the vast chasm between the static code of the <b>genotype</b> and the observable reality of the <b>phenotype</b>, the field of functional genomics emerged.
        </p>

        <p>
            <b>Functional genomics</b> is defined as the comprehensive study of how genes and intergenic regions of the genome contribute to distinct biological processes.<sup><a href="#ref1">1</a></sup> Unlike classical genetics, which often focuses on single genes in isolation, functional genomics operates on a <b>genome-wide scale</b>. It interrogates the dynamic expression of gene products—<b>RNA</b>, <b>proteins</b>, and <b>metabolites</b>—within specific contexts, such as developmental stages, disease states, or environmental shifts.<sup><a href="#ref1">1</a></sup> The ultimate objective is to construct predictive models of biological systems, determining how individual components interact to produce complex phenotypes.
        </p>

        <p>
            This report provides an exhaustive examination of the field, detailing its core methodologies, the critical importance of experimental design, and its transformative applications in <b>bioinformatics</b> and <b>microbiology</b>. By integrating data from DNA, RNA, protein, and metabolite levels, functional genomics provides the necessary context to interpret the genome, transforming raw sequence data into actionable biological insight.
        </p>

        <h3>1.1 The Multi-Omics Hierarchy</h3>
        <p>
            Functional genomics is not a singular technique but a composite discipline that stratifies biological inquiry across multiple molecular layers. Each layer provides a different perspective on cellular function, and their integration is essential for a holistic understanding.
        </p>

        <h4>Genomics and Epigenomics (The DNA Level)</h4>
        <p>
            At the foundation lies the DNA sequence. While the sequence itself is relatively stable, it is subject to chemical modifications and physical arrangements that profoundly influence gene accessibility. <b>Epigenomics</b> studies these heritable changes in gene function that do not involve changes in the DNA sequence. This includes <b>DNA methylation</b>, often associated with gene silencing, and <b>histone modifications</b> that dictate chromatin structure.<sup><a href="#ref1">1</a></sup> Understanding the "open" or "closed" state of chromatin is essential for interpreting why certain genes are available for transcription in specific cell types while remaining silent in others.
        </p>
        

        <h4>Transcriptomics (The RNA Level)</h4>
        <p>
            <b>Transcriptomics</b> is perhaps the most active branch of functional genomics. It measures the abundance and sequence of RNA transcripts, providing a dynamic "snapshot" of gene expression at a specific moment in time.<sup><a href="#ref1">1</a></sup> Since RNA synthesis is the primary step in decoding the genome, transcriptomics serves as a proxy for cellular activity. It encompasses not only messenger RNA (mRNA) coding for proteins but also a vast array of <b>non-coding RNAs</b> that play regulatory roles.
        </p>

        <h4>Proteomics and Metabolomics (The Functional Endpoints)</h4>
        <p>
            While transcriptomics indicates the potential for protein production, it does not always correlate perfectly with protein abundance due to post-transcriptional regulation. <b>Proteomics</b> addresses this by studying the entire set of proteins produced by an organism.<sup><a href="#ref1">1</a></sup> Further downstream, <b>metabolomics</b> measures the small-molecule intermediates and products of metabolism. The metabolome represents the chemical reality of the cell—the ultimate readout of the interplay between the genome and the environment.<sup><a href="#ref1">1</a></sup>
        </p>

        <h3>1.2 Historical Evolution: From Sanger to Next-Generation Sequencing</h3>
        <p>
            The trajectory of functional genomics has been defined by technological innovation. The field's origins trace back to the 1970s and 1980s with the work of Fred Sanger, whose group established the fundamental techniques for DNA sequencing and genome mapping.<sup><a href="#ref1">1</a></sup> These early methods, while revolutionary, were labor-intensive and low-throughput, limiting researchers to the study of individual genes.
        </p>
        <p>
            The pivotal shift occurred with the advent of <b>Next-Generation Sequencing (NGS)</b> technologies. NGS replaced the serial processing of Sanger sequencing with massively parallel processing, enabling the sequencing of millions of DNA fragments simultaneously. This dramatically reduced the cost and time required for sequencing, effectively solving the data generation bottleneck.<sup><a href="#ref1">1</a></sup> Consequently, the challenge in functional genomics has shifted from acquiring data to analyzing it. Advances in <b>bioinformatics</b> have become inextricably linked with functional genomics, enabling the storage, search, and comparison of petabytes of biological data.<sup><a href="#ref1">1</a></sup>
        </p>
    </section>

    <hr>

    <section id="methodology">
        <h2>2. The Methodological Toolkit: Common Study Types</h2>
        <p>
            Functional genomics utilizes a diverse array of study types to interrogate the genome. These methodologies are designed to measure specific biological changes—whether in DNA sequence, RNA abundance, or protein interaction—that influence the phenotype.
        </p>

        <h3>2.1 Transcription Profiling</h3>
        <p>
            <b>Transcription profiling</b>, or expression profiling, is the cornerstone of functional genomics. It quantifies the gene expression of many or all genes in a sample, allowing researchers to compare biological states.<sup><a href="#ref1">1</a></sup> This comparison is fundamental to understanding causality in biology: by comparing a "treated" sample to a "control" sample, researchers can deduce which genes are responsible for the observed response.
        </p>

        <h4>Technological Approaches: Microarrays vs. RNA-Seq</h4>
        <p>Two primary technologies have dominated this space, each with distinct characteristics.</p>

<table class="science-table" data-id="difference-table">
      <caption>Table 1: Microarrays vs. RNA-Seq</caption>
    
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>Feature</th>
                    <th>Microarrays</th>
                    <th>RNA-Sequencing (RNA-Seq)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Principle</b></td>
                    <td>Hybridization of labeled cDNA to pre-designed probes.</td>
                    <td>Direct sequencing of cDNA libraries using NGS.</td>
                </tr>
                <tr>
                    <td><b>Scope</b></td>
                    <td>Limited to known genes with designed probes.</td>
                    <td>Unbiased; detects known and novel transcripts.</td>
                </tr>
                <tr>
                    <td><b>Dynamic Range</b></td>
                    <td>Limited by signal saturation and background noise.</td>
                    <td>High; limited only by sequencing depth.</td>
                </tr>
                <tr>
                    <td><b>Applications</b></td>
                    <td>Standardized diagnostics; low-cost screening.</td>
                    <td>Discovery of novel genes, splice variants, non-coding RNA.</td>
                </tr>
                <tr>
                    <td><b>Status</b></td>
                    <td>Historical standard; currently used in specific niches.</td>
                    <td>Current <b>gold standard</b> for functional genomics.<sup><a href="#ref1">1</a></sup></td>
                </tr>
            </tbody>
        </table>

        <p>
            <b>RNA-Sequencing (RNA-Seq)</b> has largely superseded microarrays because it does not require prior knowledge of the genome sequence. This "discovery-based" capability is critical. For instance, in a study of the fungal pathogen <i>Aspergillus fumigatus</i>, RNA-Seq revealed tens of unannotated genes and hundreds of novel genes—mostly encoding small proteins—that had been missed by prediction algorithms.<sup><a href="#ref2">2</a></sup> Furthermore, RNA-Seq allows for the precise mapping of transcription start sites and the quantification of <b>splice variants</b>, providing a level of resolution impossible with probe-based methods.<sup><a href="#ref1">1</a></sup>
        </p>
        

        <h3>2.2 Genotyping and Variation Analysis</h3>
        <p>
            While transcription profiling measures the output of the genome, <b>genotyping</b> measures the variation within the genome itself. Genotyping studies identify differences in the DNA sequence (the genotype) that may explain phenotypic variation, such as disease susceptibility or agricultural yield.<sup><a href="#ref1">1</a></sup>
        </p>

        <h4>Classes of Genetic Variation</h4>
        <p>Functional genomics analyzes variation at three distinct scales:</p>
        <ul>
            <li><b>Single Nucleotide Polymorphisms (SNPs):</b> These are single-base changes in the DNA sequence. They are the most common form of genetic variation and are widely used in <b>Genome-Wide Association Studies (GWAS)</b> to pinpoint loci associated with complex traits.<sup><a href="#ref1">1</a></sup></li>
            <li><b>Copy Number Variations (CNVs):</b> CNVs involve the duplication or deletion of DNA segments ranging from 50 bases to 100 kilobases. These variations can alter gene dosage, leading to significant phenotypic effects. For example, CNVs have been implicated in complex behavioral conditions such as suicidal behavior.<sup><a href="#ref1">1</a></sup></li>
            <li><b>Structural Variations:</b> These are large-scale chromosomal rearrangements covering megabases of DNA. In plant genomics, structural variations are profound; studies in maize have revealed "presence-absence variation," where entire gene clusters present in one cultivar are completely absent in another.<sup><a href="#ref1">1</a></sup></li>
        </ul>

        <h4>Genome-Wide Association Studies (GWAS)</h4>
        <p>
            GWAS represents a statistical approach to functional genomics. By genotyping thousands of "cases" (e.g., individuals with rheumatoid arthritis) and "controls" (healthy individuals), researchers can identify SNPs that are statistically overrepresented in the disease group. These markers serve as signposts, pointing to specific genomic regions that functionally contribute to the disease pathology.<sup><a href="#ref1">1</a></sup>
        </p>
        

[Image of GWAS Manhattan plot]


        <h3>2.3 Epigenetic Profiling</h3>
        <p>
            Epigenetic profiling investigates the regulatory layer that sits "on top" of the genome. It seeks to understand how the same genome can produce distinct cell types (e.g., a neuron and a liver cell) by selectively silencing or activating gene programs.
        </p>
        
        <h4>Methodologies for Epigenetic Analysis</h4>
        <ul>
            <li><b>Bisulfite Sequencing:</b> This technique is used to map <b>DNA methylation</b>. Treatment of DNA with bisulfite converts unmethylated cytosine residues to uracil, while methylated cytosines remain unchanged. Subsequent sequencing reveals the precise methylation status of every CpG dinucleotide, providing a high-resolution map of gene silencing.<sup><a href="#ref1">1</a></sup></li>
            <li><b>Chromatin Immunoprecipitation (ChIP):</b> ChIP is used to study protein-DNA interactions, such as histone modifications. In this workflow, chromatin is cross-linked to proteins, fragmented, and precipitated using antibodies specific to a histone mark (e.g., H3K4me3, associated with active promoters). The DNA is then released and sequenced (<b>ChIP-seq</b>). This method has been used to map the binding landscapes of transcription factors like Hap4 and Hap5 in pathogenic yeast, elucidating the regulatory networks governing virulence.<sup><a href="#ref1">1</a></sup></li>
        </ul>

        <h3>2.4 DNA/RNA-Protein Interactions</h3>
        <p>
            Gene expression is a tightly controlled process mediated by proteins that bind to nucleic acids. Functional genomics includes the study of these <b>interactomes</b> to determine how transcription factors, ribosomes, and RNA-binding proteins influence phenotypes.<sup><a href="#ref1">1</a></sup>
        </p>

        <h4>RIP-Seq and the RNA Interactome</h4>
        <p>
            While ChIP-seq analyzes DNA interactions, <b>RNA Immunoprecipitation Sequencing (RIP-seq)</b> targets RNA-protein interactions. This is crucial for understanding post-transcriptional regulation, including mRNA stability, localization, and translation efficiency. Studies in the model organism <i>Saccharomyces cerevisiae</i> using RIP-seq have helped map the complex networks of RNA-binding proteins that fine-tune gene expression in response to stress.<sup><a href="#ref1">1</a></sup>
        </p>

        <h3>2.5 Meta-Analysis</h3>
        <p>
            <b>Meta-analysis</b> is a purely computational branch of functional genomics that aggregates data from multiple independent experiments.<sup><a href="#ref1">1</a></sup> Its power lies in statistical aggregation: by combining smaller datasets, researchers can achieve the statistical power necessary to detect subtle biological effects.
        </p>
        <p>
            For example, a meta-analysis involving over 106,000 individuals was required to identify nine specific genetic loci associated with neuroticism.<sup><a href="#ref1">1</a></sup> Such findings would be statistically invisible in any single study. Meta-analysis relies heavily on standardized, well-annotated public repositories like <b>ArrayExpress</b> and <b>Expression Atlas</b>, which allow researchers to access and re-analyze diverse datasets.<sup><a href="#ref1">1</a></sup>
        </p>
    </section>

    <hr>

    <section id="experimental-design">
        <h2>3. Designing Functional Genomics Experiments: Principles and Best Practices</h2>
        <p>
            The generation of functional genomics data is resource-intensive. Therefore, rigorous <b>experimental design</b> is paramount to ensure that the resulting data is interpretable, robust, and reproducible. Design considerations must address the scale of the experiment, the intended analysis, and the preservation of data integrity.
        </p>

        <h3>3.1 Defining Scale and Intent</h3>
        <p>
            Every functional genomics experiment begins with a biological question. These questions generally fall into two categories: <b>hypothesis-driven</b>, which tests a specific premise (e.g., "Does Drug X inhibit Gene Y?"), and <b>discovery-driven</b>, which explores a system without prior assumptions (e.g., "What genes change when Plant Z is exposed to drought?").<sup><a href="#ref1">1</a></sup>
        </p>
        <p>The intent dictates the scale and technology:</p>
        <ul>
            <li><b>Targeted Scale:</b> For confirming specific hypotheses involving a small number of genes (e.g., <50) across a few conditions, Real-Time PCR is the most cost-effective and precise tool.<sup><a href="#ref1">1</a></sup></li>
            <li><b>Genomic Scale:</b> For discovery-driven projects aiming to identify novel transcripts or global shifts, RNA-Seq is required.</li>
        </ul>
        <p>
            <b>Sample Size and Replicates:</b> The number of biological replicates is the most critical design parameter. It represents a trade-off between budget and statistical power. Without sufficient replicates, it is impossible to distinguish biological variance (natural differences between individuals) from technical noise, rendering the data statistically useless.<sup><a href="#ref1">1</a></sup>
        </p>

        <h3>3.2 Data Analysis Strategy</h3>
        <p>
            A common pitfall in functional genomics is treating data analysis as an afterthought. The analysis strategy must be defined before any wet-lab work begins. This "dry-lab" planning involves several key components:
        </p>
        <ul>
            <li><b>Infrastructure:</b> RNA-seq experiments generate massive raw data files (gigabytes to terabytes). Researchers must ensure they have the necessary storage and computational processing power (e.g., High-Performance Computing clusters).<sup><a href="#ref1">1</a></sup></li>
            <li><b>Software and Licensing:</b> The choice of alignment algorithms, statistical packages (e.g., <b>R/Bioconductor</b>), and visualization tools must be made early. Researchers must verify if they require proprietary software licenses or if open-source tools suffice.<sup><a href="#ref1">1</a></sup></li>
            <li><b>Reference Data:</b> For transcriptomics, the availability of a high-quality reference genome is crucial for read alignment. For non-model organisms, the strategy may need to include <i>de novo</i> transcriptome assembly.<sup><a href="#ref1">1</a></sup></li>
        </ul>

        <h3>3.3 The Reproducibility Crisis and FAIR Principles</h3>
        <p>
            The early 2010s saw the recognition of a "reproducibility crisis" in biomedical research, where approximately 70% of experiments could not be successfully reproduced by other scientists.<sup><a href="#ref1">1</a></sup> Functional genomics has addressed this by establishing rigorous standards for transparency.
        </p>
        <p>Types of Reproducibility:</p>
        <ul>
            <li><b>Mechanical Reproducibility:</b> A third party must be able to take the original raw data files and, using the described code and parameters, generate the exact same processed data tables.<sup><a href="#ref1">1</a></sup></li>
            <li><b>Biological Reproducibility:</b> A researcher should be able to apply the same experimental protocols to new, comparable samples and reach the same biological conclusions.<sup><a href="#ref1">1</a></sup></li>
        </ul>
        <p>
            To enforce these standards, the community adopted the <b>FAIR principles</b> (Findable, Accessible, Interoperable, Reusable). Specific guidelines such as <b>MIAME</b> (Minimum Information About a Microarray Experiment) and <b>MINSEQE</b> (Minimum Information about a high-throughput nucleotide SEQuencing Experiment) mandate that researchers submit not just the data, but detailed metadata describing the experimental design, sample characteristics, and analysis protocols to public databases like GEO or ArrayExpress.<sup><a href="#ref1">1</a></sup>
        </p>
    </section>

    <hr>

    <section id="bioinformatics">
        <h2>4. Functional Genomics in Bioinformatics Discovery</h2>
        <p>
            Bioinformatics and functional genomics exist in a symbiotic relationship. Functional genomics generates the data, while bioinformatics provides the tools to store, analyze, and interpret it. More importantly, bioinformatics has evolved from a support service into a primary engine of discovery, using functional genomics data to generate novel hypotheses <i>in silico</i>.
        </p>

        <h3>4.1 Databases as Discovery Engines</h3>
        <p>
            The accumulation of functional genomics data in public repositories has created a resource where the database itself becomes the site of discovery.
        </p>
        <h4>Gramene: A Case Study in Plant Bioinformatics</h4>
        <p>
            <b>Gramene</b> is a specialized resource for comparative functional genomics in crops. It integrates genomes, pathways, and expression data to facilitate "translational" research—moving findings from model species to crops.<sup><a href="#ref1">1</a></sup>
        </p>
        <ul>
            <li><b>Comparative Genomics:</b> Gramene hosts 150 reference genomes, including major crops like rice, maize, wheat, and soybean. By aligning these genomes, bioinformaticians can identify <b>orthologs</b> (genes separated by speciation) and <b>paralogs</b> (genes separated by duplication). This allows a researcher studying a drought-resistance gene in a model plant like <i>Arabidopsis</i> to instantly identify the corresponding target gene in wheat or sorghum.<sup><a href="#ref1">1</a></sup></li>
            <li><b>The Plant Reactome:</b> This tool projects metabolic pathways from a well-studied reference species (<i>Oryza sativa</i>/rice) onto other species based on gene homology. If a pathway for secondary metabolite production is known in rice, the Plant Reactome can predict the existence of a similar pathway in maize, guiding metabolic engineering efforts.<sup><a href="#ref1">1</a></sup></li>
            <li><b>Visual Discovery:</b> The Gramene Genome Browser integrates visualization tracks. A user can view the gene structure of a rice prolamin gene and simultaneously overlay expression data from the <b>Expression Atlas</b>, visualizing how the gene is expressed across different tissues (e.g., endosperm vs. leaf) directly on the genomic map. This visual integration allows researchers to intuitively spot patterns that tabular data might obscure.<sup><a href="#ref1">1</a></sup></li>
        </ul>

        <h3>4.2 The Open Targets Platform: Bioinformatics for Drug Target Identification</h3>
        <p>
            The <b>Open Targets Platform</b> exemplifies how bioinformatics uses functional genomics to solve specific industrial problems—in this case, the high failure rate of drug discovery. The platform acts as a bioinformatics aggregator, pulling data from over 20 public sources to score the association between targets (genes/proteins) and diseases.<sup><a href="#ref4">4</a></sup>
        </p>
        <p>The Discovery Workflow:</p>
        <ul>
            <li><b>Data Integration:</b> The platform ingests data from genetics (GWAS), somatic mutations (cancer genomes), RNA expression (transcriptomics), animal models, and scientific literature.<sup><a href="#ref5">5</a></sup></li>
            <li><b>Association Scoring:</b> It applies an algorithm to these diverse data streams to generate an overall "association score." This score prioritizes targets. A target supported by both genetic evidence and expression data will score higher than one supported by literature alone.<sup><a href="#ref5">5</a></sup></li>
            <li><b>In Silico Validation:</b> A researcher investigating "Gonorrhea" can query the platform and retrieve a prioritized list of targets, such as matrix metallopeptidase 8 (MMP8), MMP7, and MMP13.<sup><a href="#ref6">6</a></sup> The platform also links these targets to existing drugs (e.g., Doxycycline), facilitating drug repurposing strategies.</li>
            <li><b>Evidence Sifting:</b> The interface allows users to filter evidence. For instance, finding "Green" or "Amber" rated genes from Genomics England panels provides a level of clinical confidence derived from bioinformatics curation.<sup><a href="#ref7">7</a></sup></li>
        </ul>
        <p>
            This system demonstrates how bioinformatics transforms functional genomics data into a decision-making tool, allowing researchers to "fail early" and focus resources on targets with the highest probability of success.
        </p>
        
    </section>

    <hr>

    <section id="microbiology">
        <h2>5. Applications in Microbiology</h2>
        <p>
            Microbiology has been a primary beneficiary of functional genomics. The relatively small genomes of microbes (compared to plants and mammals) allow for deep sequencing and comprehensive systems modeling. Functional genomics is used to study pathogenicity, environmental adaptation, and regulatory logic in both model and non-model microorganisms.
        </p>

        <h3>5.1 Fungal Pathogenomics: Uncovering the Hidden Genome</h3>
        <p>
            Fungal pathogens like <i>Aspergillus fumigatus</i> and <i>Candida glabrata</i> pose significant threats to human health. Functional genomics has proven essential in understanding their virulence mechanisms, often revealing biological complexity that static genome sequencing missed.
        </p>
        <p>
            <b>RNA-Seq and Genome Annotation in <i>Aspergillus fumigatus</i>:</b> A landmark study utilizing RNA-seq on <i>A. fumigatus</i> highlighted the limitations of computational gene prediction. The analysis of the transcriptome revealed tens of unannotated genes and hundreds of novel genes that were absent from the reference genome. Notably, many of these encoded small proteins, a class of molecules often overlooked by prediction algorithms but critical for signaling and virulence.<sup><a href="#ref2">2</a></sup>
        </p>
        <p>
            Furthermore, by performing differential expression analysis between two isolates of <i>A. fumigatus</i> under different growth conditions, researchers identified thousands of differentially expressed genes.<sup><a href="#ref2">2</a></sup> This transcriptomic profiling allows microbiologists to pinpoint the specific genes activated during infection or stress, effectively identifying the "virulence factors" that allow the fungus to survive in the human host.
        </p>
        <p>
            <b>Regulatory Networks in <i>Candida glabrata</i>:</b> In <i>C. glabrata</i>, functional genomics has moved beyond expression to interaction. Using ChIP-seq, researchers mapped the genome-wide binding patterns of the transcription factors Hap4 and Hap5.<sup><a href="#ref1">1</a></sup> By identifying exactly where these proteins bind to the DNA, researchers can reconstruct the regulatory network, understanding the hierarchy of control that governs the pathogen's respiration and stress response.
        </p>

        <h3>5.2 The Yeast Model: <i>Saccharomyces cerevisiae</i></h3>
        <p>
            As a model organism, <i>Saccharomyces cerevisiae</i> (baker's yeast) has been the subject of the most comprehensive functional genomics studies to date. These studies serve as a template for understanding eukaryotic biology.
        </p>
        <h4>The Environmental Stress Response (ESR)</h4>
        <p>
            Microarray studies exposed yeast cells to diverse environmental transitions, including heat shock, hydrogen peroxide, sulfhydryl-oxidizing agents (diamide), and osmotic shock.<sup><a href="#ref8">8</a></sup> The functional genomic analysis revealed a striking pattern: regardless of the specific type of stress, the yeast launched a stereotyped "Environmental Stress Response."
        </p>
        <ul>
            <li><b>The Core Response:</b> Approximately 900 genes showed a similar drastic response to almost all environmental changes.<sup><a href="#ref8">8</a></sup></li>
            <li><b>Transcriptional Logic:</b> Promoter analysis of these 900 genes identified specific DNA motifs bound by the transcription factors Yap1p, Msn2p, and Msn4p.<sup><a href="#ref8">8</a></sup> This connected the phenotypic response (stress survival) directly to the genotypic regulators, providing a complete system-level model of stress adaptation.</li>
        </ul>

        <h3>5.3 Environmental Microbiology: Soil Health and Metatranscriptomics</h3>
        <p>
            Functional genomics is also applied to complex microbial communities in the environment, a field known as environmental genomics or <b>metagenomics</b>. However, simply sequencing the DNA of a soil sample (metagenomics) only reveals which microbes are present, not which are active.
        </p>
        <p>
            To address this, researchers apply <b>metatranscriptomics</b> (total RNA sequencing of environmental samples). A study investigating the impact of wood ash amendment on soil utilized this technique to simultaneously assess the active microbial communities and the expression of functional genes.<sup><a href="#ref9">9</a></sup>
        </p>
        <ul>
            <li><b>Mechanism:</b> By sequencing the RNA directly from soil, researchers could quantitate the expression of enzymes involved in nutrient cycling (e.g., nitrogen fixation, carbon degradation).</li>
            <li><b>Insight:</b> This revealed how the soil community metabolically adapts to the pH and nutrient shift caused by wood ash, providing data critical for sustainable agriculture and forestry management.</li>
        </ul>

        <h3>5.4 Bacterial Pathogenesis and Antimicrobial Resistance</h3>
        <p>
            In bacteriology, functional genomics is a frontline tool in the battle against <b>antimicrobial resistance (AMR)</b>. By comparing the genomes and transcriptomes of resistant versus susceptible strains, researchers can identify the genetic basis of resistance.
        </p>
        <p>
            <b>Target Identification for Gonorrhea:</b> <i>Neisseria gonorrhoeae</i> is a pathogen of high concern due to increasing antibiotic resistance. Functional genomics data aggregated in platforms like Open Targets identifies specific enzymatic targets for therapeutic intervention.
        </p>
        <ul>
            <li><b>Targets:</b> The platform lists matrix metallopeptidase 8 (MMP8), MMP7, and MMP13 as targets associated with gonorrhea infection.<sup><a href="#ref6">6</a></sup></li>
            <li><b>Therapeutics:</b> These targets are linked to small molecule drugs like Doxycycline.<sup><a href="#ref6">6</a></sup> This linkage suggests that functional genomics can identify bacterial proteases that, if inhibited, could compromise the bacterial lifecycle or virulence, offering new avenues for drug development.</li>
        </ul>
    </section>

    <hr>

    <section id="pharma">
        <h2>6. Functional Genomics in Pharmaceutical Research</h2>
        <p>
            The pharmaceutical industry faces a significant efficiency challenge. The probability of success from an initial idea to a marketed drug is less than 10%, with the process typically spanning 10–17 years.<sup><a href="#ref1">1</a></sup> Furthermore, over 50% of drugs fail in Phase II clinical trials due to a lack of efficacy—meaning the drug does what it is chemically designed to do (binds the target), but engaging that target does not cure the disease.<sup><a href="#ref1">1</a></sup>
        </p>
        <p>
            Functional genomics addresses this "target validity" problem. The central premise is that if a drug target is selected based on robust functional genomic evidence (linking the target causally to the disease phenotype), the likelihood of clinical success increases significantly.
        </p>

        <h3>6.1 Target Identification and Validation</h3>
        <p>
            Functional genomics guides the initial characterization of disease to generate "therapeutic targets"—proteins or mRNAs that, when modified, favorably affect the disease outcome.
        </p>
        <ul>
            <li><b>Genetic Evidence:</b> Targets supported by GWAS data (human genetics) are twice as likely to succeed in clinical trials. If a natural genetic variation in a gene mimics the effect of a drug (e.g., a loss-of-function variant lowers cholesterol, validating a specific enzyme as a target), the risk of failure decreases.</li>
            <li><b>Expression Evidence:</b> Transcription profiling can identify genes that are consistently over-expressed in disease states. A classic example is the discovery of <b>HER2</b> gene over-expression in a subset of breast cancers.<sup><a href="#ref1">1</a></sup> This functional insight validated HER2 as a target, leading to the development of the monoclonal antibody Herceptin, which has saved thousands of lives.</li>
        </ul>

        <h3>6.2 Drug Repurposing and Patient Stratification</h3>
        <p>
            Functional genomics also accelerates drug discovery through repurposing—finding new uses for existing drugs.
        </p>
        <ul>
            <li><b>Repurposing:</b> High-throughput meta-analyses of cancer data have identified shared pathways between seemingly unrelated cancers. This evidence allows drugs approved for one cancer type to be tested for others, bypassing the initial years of safety testing.<sup><a href="#ref1">1</a></sup></li>
            <li><b>Stratification (Precision Medicine):</b> Not all drugs work for all patients. Functional genomics explains why. By investigating why cancer drugs only work on a subset of patients,<sup><a href="#ref1">1</a></sup> researchers can develop "companion diagnostics." These are functional genomic tests (e.g., checking for specific SNPs or expression levels) that determine if a patient is a responder before treatment begins. This increases clinical trial success rates and spares patients from ineffective treatments.</li>
        </ul>

        <h3>6.3 The Open Targets Platform: A Resource for Validation</h3>
        <p>
            The Open Targets Platform is an open-source tool specifically designed to operationalize functional genomics for drug discovery. It addresses the systematic prioritization of targets.
        </p>
        <ul>
            <li><b>Integration:</b> It aggregates genetic associations, somatic mutations, RNA expression, and animal models.<sup><a href="#ref5">5</a></sup></li>
            <li><b>Scoring:</b> It provides association scores to rank targets. Crucially, these scores are not just "confidence" metrics but prioritization tools. A target might have a low score simply because it is under-studied, not because it is invalid. The platform encourages users to investigate the original evidence sources.<sup><a href="#ref5">5</a></sup></li>
            <li><b>Accessibility:</b> By providing data via a web interface, GraphQL API, and bulk downloads, it allows pharmaceutical scientists to integrate this public functional genomics data directly into their private discovery pipelines.<sup><a href="#ref5">5</a></sup></li>
        </ul>
    </section>

    <hr>

    <section id="conclusion">
        <h2>7. Conclusion</h2>
        <p>
            Functional genomics has transformed biology from a science of observation to a science of systems. It has provided the tools to read not just the static letters of the genetic code, but the dynamic messages they produce.
        </p>
        <p>
            Through methodologies like <b>RNA-seq</b> and <b>ChIP-seq</b>, researchers can now monitor the pulse of the cell—detecting the activation of virulence factors in fungi, the stress responses in yeast, and the silencing of genes in cancer. Through experimental design principles centered on reproducibility and FAIR data, the field has matured into a rigorous quantitative discipline.
        </p>
        <p>
            In bioinformatics, functional genomics serves as the foundational data layer, powering databases like Gramene and Open Targets that allow for <i>in silico</i> discovery and hypothesis generation. In microbiology, it has unveiled the hidden complexity of pathogens like <i>Aspergillus fumigatus</i> and the metabolic versatility of soil communities. And in drug discovery, it offers the best hope for overcoming the high attrition rates of pharmaceutical development, guiding the creation of precision therapies.
        </p>
        <p>
            As technology continues to advance, moving toward single-cell resolution and spatial transcriptomics, the resolution of functional genomics will only sharpen. It remains the essential bridge between the genome and the phenotype, holding the key to understanding the complex machinery of life.
        </p>
    </section>

    <section id="references">
        <h2>Works Cited</h2>
        <ol>
            <li id="ref1">EMBL-EBI Training. <a href="https://www.ebi.ac.uk/training/online/courses/functional-genomics-i-introduction-and-design/">Functional Genomics I</a>. Accessed Dec 18, 2025.</li>
            <li id="ref2">NCBI PMC. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3531914/">The diverse applications of RNA-seq for functional genomic studies in Aspergillus fumigatus</a>. Accessed Dec 18, 2025.</li>
            <li id="ref3">PLOS Biology. <a href="https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003409">Expansion of the functional genomics GRACE library reveals genes relevant for temperature-dependent fitness in Candida albicans</a>. Accessed Dec 18, 2025.</li>
            <li id="ref4">Open Targets. <a href="https://www.opentargets.org/">Open Targets: Home</a>. Accessed Dec 18, 2025.</li>
            <li id="ref5">Open Targets Platform. <a href="https://platform.opentargets.org/">Platform Home</a>. Accessed Dec 18, 2025.</li>
            <li id="ref6">Open Targets Platform. <a href="https://platform.opentargets.org/disease/MONDO_0000314">Primary bacterial infectious disease profile page</a>. Accessed Dec 18, 2025.</li>
            <li id="ref7">Open Targets Documentation. <a href="https://platform-docs.opentargets.org/evidence">Target–disease evidence</a>. Accessed Dec 18, 2025.</li>
            <li id="ref8">Molecular Biology of the Cell. <a href="https://www.molbiolcell.org/doi/10.1091/mbc.11.12.4241">Genomic Expression Programs in the Response of Yeast Cells to Environmental Changes</a>. Accessed Dec 18, 2025.</li>
            <li id="ref9">NIH. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7028008/">Total RNA sequencing reveals multilevel microbial community changes and functional responses to wood ash application in agricultural and forest soil</a>. Accessed Dec 18, 2025.</li>
        </ol>
    </section>

</article>


  `},B4=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),I4={id:"RK-2026-007",title:"OMIM & HGMD: Secondary Mutation Databases",date:"2026-01-01",tags:["#HGMD","#OMIM","#SecondaryDatabase","#Genomics"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    This interactive page serves as a dynamic lecture aid for mastering OMIM and HGMD. The application utilizes a dashboard layout to break complex database structures into digestible modules. Students can explore OMIM’s entry types using an interactive prefix decoder and visualize the massive scale difference between gene discovery and mutation logging through dynamic growth charts. A direct comparison table clarifies distinct use cases—phenotypes versus variants—while the "Clinical Workflow" section maps out the real-world diagnostic logic used by geneticists. This tool effectively bridges the gap between theoretical database statistics and practical clinical application
`,content:`


<article>
<div style="text-align: center; margin: 30px 0;">
    <a href="https://rkpatel-1996.github.io/OMIM_and_HGMD/" 
       target="_blank" 
       rel="noopener noreferrer" 
       style="
           display: inline-block;
           padding: 15px 30px;
           background: linear-gradient(135deg, #45f5f6 0%, #00a8cc 100%);
           color: #003d4d;
           font-family: system-ui, -apple-system, sans-serif;
           font-size: 16px;
           font-weight: 700;
           text-decoration: none;
           text-transform: uppercase;
           letter-spacing: 1px;
           border: none;
           border-radius: 50px;
           box-shadow: 0 4px 15px rgba(0, 168, 204, 0.4);
           transition: all 0.3s ease;
           cursor: pointer;
       "
       onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 25px rgba(0, 168, 204, 0.6)';"
       onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0, 168, 204, 0.4)';"
    >
        Interactive OMIM & HGMD Page
    </a>
</div>

<h2>1 Introduction: The Epistemology of Genetic Databases</h2>

<p>Mapping the human genome transformed medicine, shifting our focus from simply observing symptoms to understanding their molecular causes. However, the raw DNA code—all 3 billion letters of it—is clinically useless on its own. To turn this data into medical treatments, we need a strong system to understand how genetic changes affect physiology. Biological databases provides the basic foundation to achieve this goal.</p>

<p>Among the many resources available to geneticists, Online Mendelian Inheritance in Man (OMIM) and the Human Gene Mutation Database (HGMD) are the most essential. While both are critical for clinical genetics and research, they serve different purposes. OMIM acts as an encyclopedia, connecting disease symptoms to their genetic causes through detailed summaries. In contrast, HGMD serves as a definitive catalog, listing specific disease-causing mutations collected from scientific literature.</p>

<p>This article is designed to serve as a reference for students and professionals, dissecting the databases’ histories, structural architectures, curation methodologies, and clinical applications. Discussion is designed to give quick notes on how to deal with these databases to get most out of them for beginners.</p>

<h3>1.1 The Necessity of Curation in the Big Data Era</h3>

<p>The advent of Next-Generation Sequencing (NGS) has resulted in an exponential accumulation of genetic data. However, data quantity does not equate to information quality. The scientific literature is fragmented, with findings scattered across thousands of journals and decades of research. "Curation"—the active management and appraisal of data—is the process that bridges this gap. Both OMIM and HGMD rely heavily on manual curation, a labor-intensive process where domain experts (typically PhD-level scientists) review, evaluate, and extract information from published papers. This "human-in-the-loop" approach ensures a high level of fidelity and context but introduces significant challenges regarding scalability and the management of historical data that may no longer meet modern standards of evidence</p>.

<h2>2. Theoretical Framework: Primary vs. Secondary Databases</h2>

<h3>2.1 Primary Databases: The Archival Layer</h3>
<p>
In bioinformatics, a primary database is defined as <b>an archival repository</b> that accepts experimental data directly from submitters. These databases serve as the permanent record of scientific output. The hallmark of a primary database is that the data is owned by the submitter, not the database maintainers. The database acts as a custodian, ensuring the data is accessible and formatted correctly, but <b>typically performs minimal curation regarding the scientific validity of the content</b>.
</p>

<p>Examples:</p>
  <ol>
    <li><b>GenBank (part of INSDC):</b> Stores <em>nucleotide sequences</em> submitted by researchers. If a researcher submits a sequence with an error, it remains in the database until the submitter corrects it.</li>
    <li><b>dbSNP:</b> Stores data on short genetic variations (<em>Single Nucleotide Polymorphisms</em>). It accepts submissions of observed variation from sequencing projects, regardless of whether the variation has a known function or clinical impact.</li>
    <li><b>ClinVar:</b> A primary archive for <em>interpretations</em>. Clinical laboratories submit their assertions about the pathogenicity of variants. The database records <em>who said what about a variant</em>, but does not independently verify the claim.</li>
  </ol>

<h3>2.2 Secondary Databases: The Curated Layer</h3>

<p>A secondary database (or derived database) <b>does not accept direct submissions</b> of raw experimental data. Instead, <b>it aggregates, filters, annotates, and organizes data derived from primary databases </b>and, crucially, from the scientific literature. The value proposition of a secondary database is curation. The content is generated by the database's own staff, who synthesize disparate pieces of information into a coherent whole.</p>

<p>OMIM and HGMD are classical Secondary Databases.</p>
  <ul>
<li>They do not generate their own sequencing data.</li>
     <li>They do not accept raw BAM/VCF files from sequencing machines.</li>
   <li>Their "raw material" is the published, peer-reviewed scientific paper.</li>
  </ul>
 
<h3>2.3 The Flow of Information</h3>

<p>Here, it needs to be clarify that the data is being generated in some lab. Generated data is then published as paper (Primary Literature). Along side this publication it it mandatory to submit sequences to GenBank (Primary Database). Curators at OMIM and HGMD read the literature, extract the relevant findings, and create structured entries (Secondary Database). Finally, clinicians and doctors consult these secondary databases to interpret new findings in patients, completing the cycle of translation.</p>

<table class="science-table" data-id="database-classification">
<caption>Table 1: Classification of Major Genetic Databases</caption>
    <thead>
      <tr>
          <th>Feature</th>
          <th>Primary Database (e.g., GenBank, ClinVar)</th>
          <th>Secondary Database (e.g., OMIM, HGMD)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>Data Source</td>
          <td>Direct submission from researchers/labs.</td>
          <td>Curated from literature and primary databases.</td>
      </tr>
      <tr>
          <td>Curation Level</td>
          <td>Low/Automated (Quality Control only).</td>
          <td>High/Manual (Expert synthesis and review).</td>
      </tr>
      <tr>
          <td>Redundancy</td>
          <td>High (Multiple entries for the same gene/variant).</td>
          <td>Low (Non-redundant, unified entries).</td>
      </tr>
      <tr>
          <td>Responsibility</td>
          <td>The Submitter is responsible for accuracy.</td>
          <td>The Curator/Database is responsible for accuracy.</td>
      </tr>
      <tr>
          <td>Role in Lecture</td>
          <td>"Raw Evidence"</td>
          <td>"Synthesized Knowledge"</td>
      </tr>
    </tbody>
    </table>

<h2>3 Online Mendelian Inheritance in Man (OMIM)</h2>

<p>OMIM is the authoritative, continuously updated compendium of human genes and genetic phenotypes. It is not merely a database of mutations; it is a knowledgebase that captures the evolving understanding of the human genetic map. It provides the "nosology"—the classification and naming—of genetic disease.</p>

<h3>3.1 Historical Evolution: From Print to Pixel</h3>

<p>The history of OMIM is synonymous with the history of medical genetics itself.</p>
<p>
  
  <b>The Print Era (1966–1998):</b> The project began in the early 1960s under the stewardship of Dr. Victor A. McKusick at Johns Hopkins University. The first edition of _Mendelian Inheritance in Man_ (MIM) was published in 1966, containing approximately 1,400 entries. It was designed as a catalog of autosomal dominant, autosomal recessive, and X-linked phenotypes.2
</p>
 <p><b>The Digital Transition (1985–1995):</b> Recognizing the limitations of a printed text in a rapidly expanding field, the database was computerized in 1964. It became accessible online (as OMIM) in 1985/1987 via the Welch Medical Library at Johns Hopkins. This makes OMIM one of the oldest continuously operating online resources in biology, predating the World Wide Web itself.12</p>
<p><b>The NCBI Era (1995–2010):</b> For fifteen years, OMIM was distributed through the National Center for Biotechnology Information (NCBI). This integration with Entrez allowed for seamless linking between phenotypic descriptions and sequence data (GenBank), laying the groundwork for modern bioinformatics.2</p>
<p><b>The Modern Era (2011–Present):</b> In January 2011, the official website <a href="omim.org">omim.org</a> was launched, maintained by the <a href="https://www.hopkinsmedicine.org/genetic-medicine">McKusick-Nathans Institute of Genetic Medicine</a>. This marked a shift toward a richer, more interactive interface, allowing for advanced searching, API access, and the visualization of phenotypic series.14</p>

<h3>3.2 Structure and Anatomy of an Entry</h3>

<p>An OMIM entry is a structured text document that serves as a review article for a specific gene or disease.</p>

<ul>
  <li><b>Textual Summary:</b> Each entry contains a narrative summary of the history, clinical features, biochemical features, and molecular genetics of the entity.</li>
  <li><b>References:</b> A curated list of key references that define the entity. Unlike PubMed, which lists everything, OMIM lists only the most significant papers.</li>
  <li><b>Clinical Synopsis:</b> A concise, tabular anatomical listing of the clinical features associated with a disorder. This allows clinicians to quickly scan for key symptoms (e.g., "Ears: Low-set ears").15</li>
  <li><b>Gene Map: </b>A critical feature that links the phenotype to its chromosomal location. The "Gene Map" is a tabular database within OMIM that brings together genes and phenotypes, facilitating the identification of positional candidates for disease.14</li>
</ul>

<h3>3.3 The OMIM Numbering System (MIM Numbers)</h3>

<p>The backbone of OMIM's organization is the <b>MIM number</b>—<em>a unique, stable, six-digit identifier assigned to every entry</em>. These numbers are strictly typed, meaning the first digit indicates the mode of inheritance or the era of creation. This system allows for immediate recognition of the nature of an entry.12</p>

<table class="science-table" data-id="MIM-numbering-system">
    <caption>
        Table 2: The Logic of MIM Numbers
    </caption>
    <thead>
      
      <tr>
          <th>First Digit</th>
          <th>Classification</th>
          <th>Historical Context</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>1 (100000-)</td>
        <td>Autosomal Dominant</td>
        <td>Entries created before May 15, 1994.</td>
    </tr>
    <tr>
        <td>2 (200000-)</td>
        <td>Autosomal Recessive</td>
        <td>Entries created before May 15, 1994.</td>
    </tr>
    <tr>
        <td>3 (300000-)</td>
        <td>X-Linked</td>
        <td>Loci or phenotypes on the X chromosome.</td>
    </tr>
    <tr>
        <td>4 (400000-)</td>
        <td>Y-Linked</td>
        <td>Loci or phenotypes on the Y chromosome.</td>
    </tr>
    <tr>
        <td>5 (500000-)</td>
        <td>Mitochondrial</td>
        <td>Loci or phenotypes on the mitochondrial genome.</td>
    </tr>
    <tr>
        <td>6 (600000-)</td>
        <td>Autosomal</td>
        <td>All autosomal entries created _after_ May 15, 1994.</td>
    </tr>
    </tbody>
</table>

<p><b>Note on Allelic Variants:</b> While the main entry has a 6-digit number (e.g., 141900 for the <i>HBB</i> gene), specific mutations are designated by a decimal extension (e.g., 141900.0001 for the Hemoglobin S mutation). OMIM does not catalog all variants, only those that are historically significant or unique.12</p>

<h3>3.4 The Prefix Classification System</h3>

<p>The symbol preceding the MIM number are critical for understanding the "status" of the entry—whether it represents a gene, a disease, or a mystery.</p>

<table class="science-table" data-id="OMIM-prefixes">
    <caption>
        Table 3: OMIM Entry Prefixes
    </caption>
    <thead>
    <tr>
        <th>Symbol</th>
        <th>Description</th>
        <th>Implication for Lecture</th>
    </tr>
    </thead>
<tbody>
    <tr>
        <td>Asterisk (*)</td>
        <td>Gene</td>
        <td>A gene of known sequence. The entry focuses on the gene itself (cloning, expression, function).</td>
    </tr>
    <tr>
        <td>Number Sign (#)</td>
        <td>Phenotype (Molecular Basis Known)</td>
        <td>A descriptive entry for a disorder where the causative gene is known. The entry focuses on the disease. (e.g., # 119600 Cystic Fibrosis).</td>
    </tr>
    <tr>
        <td>Plus Sign (+)</td>
        <td>Gene and Phenotype Combined</td>
        <td>The entry describes both the gene and the phenotype. Used when the distinction is not separated (often older entries).</td>
    </tr>
    <tr>
        <td>Percent Sign (%)</td>
        <td>Phenotype (Molecular Basis Unknown)</td>
        <td>A Mendelian phenotype is confirmed, and linkage to a chromosome may be known, but the specific gene has not been identified.</td>
    </tr>
    <tr>
        <td>Null (No Symbol)</td>
        <td>Suspected Phenotype</td>
        <td>A phenotype where the Mendelian basis is suspected but not proven.</td>
    </tr>
    <tr>
        <td>Caret (^)</td>
        <td>Moved/Removed</td>
        <td>An archival marker indicating the entry has been deleted or merged.</td>
    </tr>
    </tbody>
</table>

<h3>3.5 Statistics and Growth (2026)</h3>

OMIM is a living document. As of the most recent <a href="https://www.omim.org/statistics/entry">updates in 14th January 2026</a>, the database continues to expand daily.

<table class="science-table" data-id="OMIM-entry-statistics">
<caption>Table 4: Number of Entries in OMIM (Updated January 14th, 2026)</caption> 
<thead>
                        <tr>
                            <th >
                                MIM Number Prefix
                            </th>
                            <th >
                                Autosomal
                            </th>
                            <th >
                                X Linked
                            </th>
                            <th >
                                Y Linked
                            </th>
                            <th >
                                Mitochondrial
                            </th>
                            <th >
                                Totals
                            </th>
                        </tr>
                    </thead>                           
                                <tr>
                                    <td>
                                        Gene description &nbsp; <strong><span >*</span></strong>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%2A+AND+chromosome_group:A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 16,848 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%2A+AND+chromosome:X&amp;sort=number+asc&amp;start=1&amp;limit=10"> 801 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%2A+AND+chromosome:Y&amp;sort=number+asc&amp;start=1&amp;limit=10"> 53 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%2A+AND+chromosome:M&amp;sort=number+asc&amp;start=1&amp;limit=10"> 37 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%2A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 17,739 </a>
                                    </td>
                                </tr>                        
                                <tr>
                                    <td>
                                        Phenotype description, molecular basis known &nbsp; <strong><span >#</span></strong>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%23+AND+chromosome_group:A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 6,651 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%23+AND+chromosome:X&amp;sort=number+asc&amp;start=1&amp;limit=10"> 396 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%23+AND+chromosome:Y&amp;sort=number+asc&amp;start=1&amp;limit=10"> 5 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%23+AND+chromosome:M&amp;sort=number+asc&amp;start=1&amp;limit=10"> 35 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%23&amp;sort=number+asc&amp;start=1&amp;limit=10"> 7,087 </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Phenotype description or locus, molecular basis unknown &nbsp; <strong><span >%</span></strong>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%25+AND+chromosome_group:A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1,380 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%25+AND+chromosome:X&amp;sort=number+asc&amp;start=1&amp;limit=10"> 110 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%25+AND+chromosome:Y&amp;sort=number+asc&amp;start=1&amp;limit=10"> 4 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%25+AND+chromosome:M&amp;sort=number+asc&amp;start=1&amp;limit=10"> 0 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%25&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1,494 </a>
                                    </td>
                                </tr>                        
                                <tr>
                                    <td>
                                        Other, mainly phenotypes with suspected mendelian basis
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:none+AND+chromosome_group:A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1,632 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:none+AND+chromosome:X&amp;sort=number+asc&amp;start=1&amp;limit=10"> 99 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:none+AND+chromosome:Y&amp;sort=number+asc&amp;start=1&amp;limit=10"> 3 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:none+AND+chromosome:M&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:none&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1,735 </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Totals
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=chromosome_group:A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 26,511 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=chromosome:X&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1,406 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=chromosome:Y&amp;sort=number+asc&amp;start=1&amp;limit=10"> 65 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=chromosome:M&amp;sort=number+asc&amp;start=1&amp;limit=10"> 73 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=NOT+prefix:%5E&amp;sort=number+asc&amp;start=1&amp;limit=10"> 28,055 </a>
                                    </td>
                                </tr>
                    </tbody>
                </table>

<h3>3.6 Curation Philosophy: The "Intellectual" Approach</h3>
<p>
    OMIM's curation is "intellectual" and synthetic. A curator does not simply scrape data; they read the paper to understand the developments. If a paper claims a gene causes a disease, the OMIM curator evaluates the strength of the evidence. If the evidence is weak, they may note the association but label it "<em>Pending Confirmation.</em>" This editorial oversight makes OMIM a trusted source for established knowledge, protecting the user from the noise of unverified claims.
</p>

<h2>4. Human Gene Mutation Database (HGMD)</h2>

<p>If OMIM is the textbook, HGMD is the catalog. It is a dedicated effort to collate all known (published) gene lesions responsible for human inherited disease. HGMD aims to be exhaustive for mutations that result in disease.3</p>

<h3>4.1 History and Ownership</h3>

<p>HGMD was established in 1996 by the Institute of <a href="https://www.cardiff.ac.uk/about/honours-and-awards/queens-anniversary-prizes/institute-of-medical-genetics">Medical Genetics at Cardiff University, UK</a>. Its original purpose was to facilitate the scientific study of mutational mechanisms (e.g., why certain DNA sequences are prone to mutation).3 However, as clinical genetics expanded, HGMD became the <em>de facto</em> central repository for disease mutations.</p>

<p>Currently, HGMD operates under a hybrid model:</p>

<ul>
  <li>Academic Roots: The content is still curated by the team at Cardiff University.</li>   
  <li>Commercial Distribution: The "Professional" version is licensed exclusively by Qiagen.</li>
  <li>Public Access: A restricted "Public" version exists, but it serves primarily as a teaser for the full version (see Section 4.4).</li>
</ul>

<h3>4.2 Classification of Variants: The DM System</h3>

<p>HGMD uses a specific nomenclature to classify variants based on the <em>evidence</em> presented in the literature. This classification is vital for clinical interpretation, as it tells the user how confident the original authors were in their findings.</p>

<table class="science-table" data-id="HGMD-variant-classifications">
    <caption>
        Table 5: HGMD Variant Classifications
    </caption>
    <thead>
    <tr>
        <th>Class Code</th>
        <th>Full Name</th>
        <th>Definition</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>DM</td>
        <td>Disease-causing Mutation</td>
        <td>The core category. The literature reports a causal link between the variant and the disease. (Note: This reflects the <em>author&#39;s</em> claim, not necessarily absolute truth).</td>
    </tr>
    <tr>
        <td>DM?</td>
        <td>Likely Disease-causing</td>
        <td>A variant reported as pathogenic, but with some doubt. The doubt may come from the original author, the HGMD curator, or subsequent conflicting literature.</td>
    </tr>
    <tr>
        <td>DP</td>
        <td>Disease-associated Polymorphism</td>
        <td>A variant associated with disease (often via GWAS or case-control studies) but not a direct Mendelian cause. It implies a risk factor or susceptibility allele.</td>
    </tr>
    <tr>
        <td>DFP</td>
        <td>DP with Functional Evidence</td>
        <td>A disease-associated polymorphism (DP) that also has experimental evidence (e.g., a luciferase assay) showing it alters gene function.</td>
    </tr>
    <tr>
        <td>FP</td>
        <td>Functional Polymorphism</td>
        <td>A variant that has a functional effect (e.g., changes expression levels) but has <em>no reported disease association</em> yet.</td>
    </tr>
    <tr>
        <td>R</td>
        <td>Retired</td>
        <td>An entry that has been removed, usually because it was found to be erroneous (e.g., a sequencing error in the original paper).</td>
    </tr>
    </tbody>
</table>

<h3>4.3 Content and Statistics (2024.4)</h3>

<p>HGMD is the largest curated dataset of germline mutations in the world. Official statics for recent releases are available at <a href="https://www.hgmd.cf.ac.uk/ac/stats.php"> HGMD publics stats page</a>.</p>

<table class="science-table" data-id="HGMD-entry-statistics">
<caption>Table 6: Number of entries HGMD Professional release 2024.4 in public and private HGMD</caption>
<thead>
<tr>
<th>Data type</th>
<th>Entry Num. (public)</th>
<th>Entry Num. Professional 2024.4</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Mutation totals</b></td>
<td><b>291329</b></td>
<td><b>510804</b></td>
</tr>
<tr><td>Missense/nonsense</td>
<td>169205</td>
<td>319190</td>
</tr>
<tr>
<td>Splicing</td>
<td>25088</td>
<td>42559
</td>
</tr>
<tr><td>Regulatory</td><td>4749</td><td>6953</td></tr><tr><td>Small deletions</td><td>41994</td><td>67065</td></tr><tr><td>Small insertions</td><td>17867</td><td>29310</td></tr><tr><td>Small indels</td><td>3834</td><td>5416</td></tr><tr><td>Repeat variations      </td><td>573</td><td>702</td></tr><tr><td>Gross insertions/duplications      </td><td>5224</td><td>7580</td></tr><tr><td>Complex rearrangements      </td><td>2299</td><td>2950</td></tr><tr><td>Gross deletions      </td><td>20496</td><td>29079</td></tr><tr><td colspan="3"><b>Gene/sequence data</b></td></tr><tr><td>Genes</td><td>11772</td><td>18959</td></tr><tr><td>cDNA reference sequences</td><td>11603</td><td>18754</td></tr></tbody></table>

<h3>4.4 The Critical Distinction: HGMD Public vs. Professional</h3>

<p>A student using HGMD Public to analyze a patient's genome in 2026 will miss every mutation discovered between 2023 and 2026. This renders the Public version unsuitable for clinical diagnosis</p>

<table class="science-table" data-id="HGMD-public-vs-professional">
    <caption>
        Table 7: HGMD Public vs. HGMD Professional
    </caption>
    <thead>
    <tr>
        <th>Feature</th>
        <th>HGMD Public (Free)</th>
        <th>HGMD Professional (Paid)</th>
    </tr>
    </thead>
<tbody>   
   <tr>
        <td>Data Currency</td>
        <td>3-Year Embargo. Displays only mutations published more than 3 years ago.</td>
        <td>Up-to-Date. Updated quarterly with the latest literature.</td>
    </tr>
    <tr>
        <td>Mutation Count</td>
        <td>Significantly fewer (missing the last ~75,000 mutations).</td>
        <td>Full database (~528,000+ entries).</td>
    </tr>
    <tr>
        <td>Search Capabilities</td>
        <td>Basic (Gene symbol, phenotype).</td>
        <td>Advanced (Chromosomal coordinates, VCF batch search, Next-Gen Sequencing integration).</td>
    </tr>
    <tr>
        <td>Genomic Coordinates</td>
        <td>Not provided (or limited).</td>
        <td>Full hg19/hg38 coordinates provided.</td>
    </tr>
    <tr>
        <td>Access</td>
        <td>Registered academic/non-profit users only.</td>
        <td>Commercial license required.</td>
    </tr>
    </tbody>
</table>

<h2>5.  Comparative Analysis: OMIM vs. HGMD</h2>

<p>While both databases are "secondary" and literature-based, they serve different masters. Their comparison elucidates the different needs of the genetic community.</p>

<h3>5.1 The Primary/Secondary Reference Confusion</h3>

<p>HGMD introduces a unique twist on the "secondary" terminology. Within HGMD, a distinction is made between "Primary References" and "Secondary References" regarding the entries themselves:</p>

<p><b>Primary Reference:</b> The paper that first reported the mutation and linked it to the disease.</p>
<p><b>Secondary Reference:</b> Subsequent papers that provided additional evidence (e.g., functional studies, additional families).</p>
  <p>This internal classification allows users to trace the history of a specific variant's characterization.</p>

<h3>5.2 Scope and Granularity</h3>
<p><b>OMIM is Gene/Disease Centric:</b> It aggregates information <em>at the level of the gene</em>. It will mention that "multiple mutations in <em>CFTR</em> cause Cystic Fibrosis" and may describe the delta-F508 mutation in detail, but it will not list all 2,000+ known <em>CFTR</em> mutations.
</p>
<p><b>HGMD is Variant Centric:</b> It aggregates information <em>at the level of the nucleotide</em>. It will list every single one of the 2,000+ <em>CFTR</em> mutations, along with the specific paper that reported each one.</p>

<h3>5.3 Case Study: Resolving a "Mystery" Variant</h3>

<p>Imagine a clinician finds a variant, <b>c.123A>G</b>, in the <em>GBA</em> gene in a patient with Gaucher disease.</p>

<p><b>Search OMIM:</b> The clinician searches for "Gaucher disease." OMIM provides the clinical synopsis (hepatosplenomegaly, bone pain) and confirms that <em>GBA</em> is the causative gene (# 606463). It provides a narrative of the disease mechanism.</p>
<p><b>Search HGMD: </b>The clinician searches for c.123A>G in <em>GBA</em>. HGMD Pro returns a hit, identifying it as a "DM" (Disease Mutation) and providing a link to a 1998 paper by <em>Smith et al 1998</em>.</p>
<p><b>Synthesis:</b> The OMIM entry confirms the biological plausibility. The HGMD entry confirms the specific mutation has been seen before. The diagnosis is supported.</p>

<h2>Conclusion</h2>

<p>In the landscape of human genetics, OMIM and HGMD represent the bridge between raw data and medical understanding. They are "secondary" databases in architecture but "primary" resources in practice.</p>

<p>OMIM is the custodian of the clinical and molecular identity of genetic disease. Its rigorous numbering system and prefix codes provide the structured vocabulary necessary for clinicians to communicate about disorders.</p>
<p>HGMD is the custodian of the mutational spectrum. Its massive, manually curated catalogue allows laboratories to determine if a specific change in a patient's DNA has ever been seen before in the context of disease.</p>

<h2>Works cited</h2>
<ul style="list-style-type: none;">
<li>1. Automated validation of genetic variants from large databases: ensuring that variant references refer to the same genomic locations-NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC3051330/](https://pmc.ncbi.nlm.nih.gov/articles/PMC3051330/)</li>
<li>2. Online Mendelian Inheritance in Man (OMIM), a knowledgebase of human genes and genetic disorders - NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC539987/](https://pmc.ncbi.nlm.nih.gov/articles/PMC539987/)</li>
<li>3. The Human Gene Mutation Database: building a comprehensive mutation repository for clinical and molecular genetics, diagnostic testing and personalized genomic medicine - PMC - PubMed Central, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC3898141/](https://pmc.ncbi.nlm.nih.gov/articles/PMC3898141/)</li>
<li>4. Bioinformatic Challenges Detecting Genetic Variation in Precision Medicine Programs - PMC - PubMed Central, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC9024231/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9024231/)</li>
<li>5. The Curation of Genetic Variants: Difficulties and Possible Solutions - PubMed Central - NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC5054708/](https://pmc.ncbi.nlm.nih.gov/articles/PMC5054708/)</li>
<li>6. Manual Curation vs. Artificial Intelligence: Can Automated Variant Evidence Retrieval Replace Human Judgment? - QIAGEN Digital Insights, accessed on January 2, 2026, [https://digitalinsights.qiagen.com/wp-content/uploads/2024/02/HGMD_White-Paper_Manual-Curation-Vs-AI_1021_PROM_19471_001_1126335_WW.pdf](https://digitalinsights.qiagen.com/wp-content/uploads/2024/02/HGMD_White-Paper_Manual-Curation-Vs-AI_1021_PROM_19471_001_1126335_WW.pdf)</li>
<li>7. The Human Gene Mutation Database (HGMD®): optimizing its use in a clinical diagnostic or research setting - PubMed Central, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC7497289/](https://pmc.ncbi.nlm.nih.gov/articles/PMC7497289/)</li>
<li>8. ClinVar and HGMD genomic variant classification accuracy has improved over time, as measured by implied disease burden - NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10347827/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10347827/)</li>
<li>9. HGMD - QIAGEN Digital Insights, accessed on January 2, 2026, [https://digitalinsights.qiagen.com/wp-content/uploads/2020/06/HGMD_Pro_Global_Document_2020.2.pdf](https://digitalinsights.qiagen.com/wp-content/uploads/2020/06/HGMD_Pro_Global_Document_2020.2.pdf)</li>
<li>10. The Online Mendelian Inheritance in Man (OMIM) Database, accessed on January 2, 2026, [https://worldneurologyonline.com/article/the-online-mendelian-inheritance-in-man-omim-database/](https://worldneurologyonline.com/article/the-online-mendelian-inheritance-in-man-omim-database/)</li>
<li>11. OMIM - Database Commons, accessed on January 2, 2026, [https://ngdc.cncb.ac.cn/databasecommons/database/id/109](https://ngdc.cncb.ac.cn/databasecommons/database/id/109)</li>
<li>12. Online Mendelian Inheritance in Man - Wikipedia, accessed on January 2, 2026, [https://en.wikipedia.org/wiki/Online_Mendelian_Inheritance_in_Man](https://en.wikipedia.org/wiki/Online_Mendelian_Inheritance_in_Man)</li>
<li>13. How we're curating OMIM: It's not as easy as you think - Golden Helix, accessed on January 2, 2026, [https://www.goldenhelix.com/blog/curating-omim/](https://www.goldenhelix.com/blog/curating-omim/)</li>
<li>14. OMIM.org: Online Mendelian Inheritance in Man (OMIM®), an online catalog of human genes and genetic disorders | Nucleic Acids Research | Oxford Academic, accessed on January 2, 2026, [https://academic.oup.com/nar/article/43/D1/D789/2439148](https://academic.oup.com/nar/article/43/D1/D789/2439148)</li>
<li>15. OMIM.org: Online Mendelian Inheritance in Man (OMIM®), an online catalog of human genes and genetic disorders - PubMed Central, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC4383985/](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383985/)</li>
<li>16. The Online Mendelian Inheritance in Man (OMIM) Database [World Neurology 39:1 Editor's Choice], accessed on January 2, 2026, [https://wfneurology.org/activities/news-events/archived-news/2024-03-04-wn-editors-choice](https://wfneurology.org/activities/news-events/archived-news/2024-03-04-wn-editors-choice)</li>
<li>17. Online Mendelian Inheritance in Man (OMIM), a knowledgebase of human genes and genetic disorders - PMC - NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC99152/](https://pmc.ncbi.nlm.nih.gov/articles/PMC99152/)</li>
<li>18. Getting Started with OMIM: Exploring the Rare Disease Database - 3billion, accessed on January 2, 2026, [https://3billion.io/blog/getting-started-with-the-rare-disease-database-omim](https://3billion.io/blog/getting-started-with-the-rare-disease-database-omim)</li>
<li>19. Searching Online Mendelian Inheritance in Man (OMIM): A Knowledgebase of Human Genes and Genetic Phenotypes - PMC - NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC5662200/](https://pmc.ncbi.nlm.nih.gov/articles/PMC5662200/)</li>
<li>20. New release: HGMD Professional 2024.3 is here! - Bioinformatics Software, accessed on January 2, 2026, [https://digitalinsights.qiagen.com/news/blog/clinical/new-release-hgmd-professional-2024-3-is-here/](https://digitalinsights.qiagen.com/news/blog/clinical/new-release-hgmd-professional-2024-3-is-here/)</li>
<li>21. Human Gene Mutation Database (HGMD) Professional - QIAGEN Digital Insights, accessed on January 2, 2026, [https://digitalinsights.qiagen.com/products-overview/clinical-insights-portfolio/human-gene-mutation-database/](https://digitalinsights.qiagen.com/products-overview/clinical-insights-portfolio/human-gene-mutation-database/)</li>
<li>22. Using HGMD Public? Your Data Is 3 Years Behind - Bioinformatics Software, accessed on January 2, 2026, [https://digitalinsights.qiagen.com/news/blog/clinical/hgmd-free-vs-hgmd-pro/](https://digitalinsights.qiagen.com/news/blog/clinical/hgmd-free-vs-hgmd-pro/)</li>
<li>23. HGMD® home page, accessed on January 2, 2026, [https://www.hgmd.cf.ac.uk/](https://www.hgmd.cf.ac.uk/)</li>
<li>24. What's New at HGMD - Cardiff University, accessed on January 2, 2026, [https://www.hgmd.cf.ac.uk/docs/wots_new.html](https://www.hgmd.cf.ac.uk/docs/wots_new.html)</li>
<li>25. HGMD vs ClinVar vs OMIM comparison (as of March 2020) - ResearchGate, accessed on January 2, 2026, [https://www.researchgate.net/figure/HGMD-vs-ClinVar-vs-OMIM-comparison-as-of-March-2020_fig5_342514768](https://www.researchgate.net/figure/HGMD-vs-ClinVar-vs-OMIM-comparison-as-of-March-2020_fig5_342514768)</li>
<li>26. PhenoMiner: from text to a database of phenotypes associated with OMIM diseases - NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC4622021/](https://pmc.ncbi.nlm.nih.gov/articles/PMC4622021/)</li>
<li>27. General mutation databases: analysis and review | Journal of Medical Genetics, accessed on January 2, 2026, [https://jmg.bmj.com/content/45/2/65](https://jmg.bmj.com/content/45/2/65)</li>
<li>28. OMIM.org: leveraging knowledge across phenotype–gene relationships - Oxford Academic, accessed on January 2, 2026, [https://academic.oup.com/nar/article/47/D1/D1038/5184722](https://academic.oup.com/nar/article/47/D1/D1038/5184722)</li>
<li>29. OMIM.org: leveraging knowledge across phenotype–gene relationships - PMC - NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC6323937/](https://pmc.ncbi.nlm.nih.gov/articles/PMC6323937/)</li>
</ul>

</article>


  `},z4=Object.freeze(Object.defineProperty({__proto__:null,default:I4},Symbol.toStringTag,{value:"Module"})),Nu="/RKS-lab-notes/assets/2dn1_3hrw_alignement_008-Ve3mY_oq.png",Du="/RKS-lab-notes/assets/2DN1_alpha_beta_008_2-TZHwMwjX.png",E4={id:"RK-2026-008",title:"Biological Sequence Comparison: Matrices and Foundational Concepts",date:"2026-01-09",tags:["#sequenceSimilarity","#alignment","#Matrices"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    This interactive page serves as a dynamic lecture aid for understanding the various sequence alignment tools and databases. The application utilizes a dashboard layout to break complex bioinformatics concepts into digestible modules. Students can explore different alignment algorithms using interactive visualizations and compare their applications through dynamic charts. A direct comparison table clarifies distinct use cases—global versus local alignments—while the "Practical Applications" section maps out real-world scenarios where these tools are employed. This tool effectively bridges the gap between theoretical bioinformatics concepts and practical applications in genomics research.
`,content:`


<article>


<h2>1. Introduction: The Central Dogma of Computational Biology</h2>
<p>The precise ordering of nucleotides in DNA or amino acids in proteins—provides the raw code of life. However, a sequence in isolation is a string of characters without context. Meaning, function, and evolutionary history are only revealed through comparison. <b>Sequence similarity search</b>, the computational process of aligning and comparing biological sequences, stands as the foundational pillar of bioinformatics. It is the mechanism that can help infer homology, predict protein structure, annotate genomes, and reconstruct the phylogenetic tree of life.</p>

<p>The premise of sequence analysis relies on the evolutionary principle of "descent with modification." <b>If two sequences share a statistically significant degree of similarity, it is inferred that they share a common ancestor</b>; that is, they are homologous. This inference allows for the transitive application of knowledge: if the function of gene A is known, and gene B is found to be homologous to gene A, one can hypothesize with high confidence that gene B shares a similar structure and function. This basic inference method is the engine that drives high-throughput genomics, enabling the functional characterization of millions of newly sequenced genes based on the experimental characterization of a few.</p>

<p>However, the detection of similarity is an important computational problem. <b>Evolution introduces noise in the form of mutations—substitutions, insertions, and deletions (indels)—that obscure the ancestral relationship between sequences</b>. To recover the signal of homology from this noise, bioinformatics has developed a rigorous mathematical framework known as Sequence Alignment. </p>

<p>Reasons for comparing sequences:</p>
<ul>
<li>To compare a short sequence to a large one.</li>
<li>To compare a single sequence to an entire database</li>
<li>To compare a partial sequence to the whole.</li>
<li>Identify newly determined sequences </li>
<li>Compare new genes to known ones</li>
<li>Guess functions for entire genomes full of ORFs of unknown function</li>
</ul>


<h2>2. The Distinction Between Metric and Conclusion</h2>

  <p>
    In bioinformatics, it is imperative to distinguish between what we can 
    <strong>measure</strong> (math) and what we <strong>infer</strong> (biology). 
    A common error is treating these two concepts as interchangeable.
  </p>

  <h4>1.1.1 Similarity vs. Homology</h4>
  
  <p>
    <strong>Similarity is a Quantitative Measure (The Math)</strong><br>
    This is an observable metric calculated by an algorithm. It is expressed as a percentage 
    (e.g., "85% identity") or a score. It answers the question: <em>"How much do these sequences look alike?"</em>
  </p>

  <p>
    <strong>Homology is a Qualitative State (The Biology)</strong><br>
    This is a binary conclusion regarding ancestry. Two sequences are either homologous 
    (they share a common ancestor) or they are not. 
  </p>
  
  <blockquote>
    <strong>Important:</strong> There is no such thing as "50% homology." A sequence cannot be 
    "half-related" to another, just as a person cannot be "half-pregnant." There is only 
    50% <em>similarity</em>, from which we infer that homology is likely.
  </blockquote>

<h3>2.1. Subdivisions of Homology</h3>

  <p>
    If we conclude that two sequences are homologous, we must then determine <em>how</em> they 
    are related. This evolutionary history determines whether genes are likely to share the same function.
  </p>

  

  <h4>A. Orthology: "Same Job, Different Species"</h4>
  <p>
    Orthologs are genes in different species that diverged due to a <strong>speciation event</strong> 
    (when one species splits into two).
  </p>
  <ul>
    <li><strong>The Logic:</strong> As the species separated, they each kept a copy of the original gene.</li>
    <li><strong>The Function:</strong> Because they evolved simply to maintain the organism, orthologs typically retain the <strong>same function</strong>.</li>
    <li><strong>Example:</strong> <em>Human Hemoglobin α [<a href="https://www.rcsb.org/structure/2DN1" target="_blank">2DN1</a>]</em> vs. <em>Mouse Hemoglobin α [<a href="https://www.rcsb.org/structure/3HRW" target="_blank">3HRW</a>]</em>. Both transport oxygen, just in different animals.</li>
  </ul>

  
      <figure class="science-figure" data-id="Figure 8.1: " data-clean-src="${Nu}">
      <img src="${Nu}" alt="Orthologous Hemoglobin Alpha Chains" />
      <figcaption>Sequence alignment of mouse (3hrw) and human (2dn1) hemoglobin α chains using chimera tool with consensus and conserved positions highlighted.</figcaption>
    </figure>


  <h4>B. Paralogy: "Same Species, New Job"</h4>
  <p>
    Paralogs are genes within the same species that diverged due to a <strong>gene duplication event</strong>.
  </p>
  <ul>
    <li><strong>The Logic:</strong> A genetic mistake created a second copy of a gene within the same genome.</li>
    <li><strong>The Function:</strong> Since the organism has a "backup" copy, one of the copies is free to mutate and evolve a <strong>new or specialized function</strong>.</li>
    <li><strong>Example:</strong> <em>Human Hemoglobin α</em> vs. <em>Human Hemoglobin β</em>. They arose from a duplication of an ancestral globin gene but now work together to form a complex structure.</li>
  </ul>
        <figure class="science-figure" data-id="Figure 8.2: " data-clean-src="${Du}">
      <img src="${Du}" alt="Paralogous Hemoglobin Alpha and Beta Chains" />
      <figcaption>Sequence alignment of human (2dn1) hemoglobin α and β chains using chimera tool with consensus and conserved positions highlighted.</figcaption>
    </figure>

  <p>
    <em>The goal of sequence alignment is to use the measurable metric (Similarity) to accurately infer the biological relationship (Homology).</em>
  </p>


</section>

<section>
  <h2>3. Mathematical Foundations of Sequence Scoring</h2>

  <p>
    To align two sequences, computers need a way to keep score. We define a scoring system 
    that gives points for "good" matches (biological likelihood) and subtracts points for 
    "bad" mismatches or gaps (evolutionary unlikely events).
  </p>

  <h3>3.1 The Difference Between DNA and Protein Scoring</h3>

  <p>
    <strong>Nucleotides (DNA/RNA): The "Spelling" Approach</strong><br>
    Scoring DNA is usually simple because the four bases (A, C, G, T) are chemically similar. 
    We typically use a simple <strong>Identity Matrix</strong>:
  </p>
  <ul>
    <li><strong>Match (+5):</strong> A matches A.</li>
    <li><strong>Mismatch (-4):</strong> A matches C.</li>
  </ul>

  <p>
    <strong>Proteins (Amino Acids): The "Chemistry" Approach</strong><br>
    Proteins are much harder to score because the 20 amino acids have different chemical "personalities" 
    (size, electric charge, water-phobia). <b>Not all mismatches are equal</b>.
  </p>

  

  <p>
    To handle this, we use <strong>Substitution Matrices</strong>. These grid-like tables tell the 
    computer how much to penalize a specific change based on chemistry:
  </p>
  <ul>
    <li><strong>Conservative Mutation (High Score):</strong> Replacing Leucine with Isoleucine. 
    Both are hydrophobic. The protein likely still works.</li>
    <li><strong>Non-Conservative Mutation (Low Score):</strong> Replacing Leucine with Arginine. 
    One is hydrophobic, the other is positively charged. This breaks the protein's structure.</li>
  </ul>

  <h3>3.2 The PAM Model (The Extrapolation Method)</h3>
  
  <p>
    Developed by Margaret Dayhoff (1978), the <strong>PAM (Point Accepted Mutation)</strong> 
    matrices are built on a theoretical model of evolution. 
  </p>

  <h4>3.2.1 The Logic: What is an "Accepted" Mutation?</h4>
  <p>
    Dayhoff didn't just count any random mutation. She looked for "Accepted" mutations.
  </p>      
  <p>
    <strong>Natural Selection:</strong> An "accepted" mutation is one where the amino acid changed,
        but the protein still functioned, and the organism survived to reproduce. If the mutation breaks the protein it is not counted as "accepted."
  </p>  
  
  <h4> 3.2.2.Practical Application: When to Use vs. Avoid PAM</h4>
  <strong> When to USE PAM</strong>
  <ul>
    <li>
      <strong>Analyzing Closely Related Strains (PAM1 - PAM30):</strong> 
      If you are comparing <em>E. coli</em> K-12 to a clinical isolate, PAM is excellent. 
      For "short" distances, the math is based on real observation, not guessing.
    </li>
    <li>
      <strong>Phylogenetic Modeling:</strong> 
      Because PAM is based on a pure mathematical model (Markov chains), it is often preferred 
      for building evolutionary trees where mathematical consistency is required.
    </li>
  </ul>

  <strong> When to AVOID PAM (Use BLOSUM Instead)</strong>
  <ul>
    <li>
      <strong>"Needle in a Haystack" Searches (BLAST):</strong> 
      If you are blasting against a massive database to find a remote homolog, avoid PAM. 
      PAM250 "guesses" what a distant relative looks like. BLOSUM62 was built by <em>observing</em> 
      actual distant relatives. Observation beats prediction.
    </li>
    <li>
      <strong>Local Alignments (Domains & Motifs):</strong> 
      PAM was built using Global Alignments (entire protein length). It assumes the whole sequence 
      evolves together. It struggles with the "cut-and-paste" evolution often seen in bacteria 
      (e.g., domain shuffling).
    </li>
  </ul>

    <p>
      <strong>The "Weather Forecast" Analogy</strong><br>
      Think of PAM like a weather forecast.
      <br><br>
      <strong>PAM1 (Short Term):</strong> Predicting tomorrow's weather based on today is usually very accurate.
      <br>
      <strong>PAM250 (Long Term):</strong> Predicting the weather 250 days from now based <em>only</em> 
      on today's weather is mathematically possible, but likely wrong. 
      <br><br>
      <em>This is why BLAST uses BLOSUM by default—it relies on the historical record, not a long-range forecast.</em>
    </p>
  
  <p>
    <em><strong>Rule of Thumb:</strong> High PAM numbers = Long evolutionary distance (Distant relatives).</em>
  </p>

</section>

<h3>3.3 The BLOSUM Model (The Observation Method)</h3>

<p>
  Developed by the Henikoffs (1992), <strong>BLOSUM (BLOcks SUbstitution Matrix)</strong> 
  solved the biggest problem with PAM. Instead of using math to "guess" what distant proteins 
  look like (extrapolation), the Henikoffs simply went out and <strong>looked</strong> at the data.
</p>

<h4>3.3.1 The Logic</h4>
<ul>
  <li><strong>The Method:</strong> The Henikoffs didn't look at whole proteins. They looked specifically at 
  <strong>"Blocks"</strong>—highly conserved regions like active sites or binding pockets. 
  They knew these regions were critical for survival.</li>
  <li><strong>The Data:</strong> They found existing families of proteins that were <em>already</em> 
  known to be distantly related. They analyzed these conserved blocks to see which amino acid 
  swaps nature actually tolerates in functional regions.</li>
</ul>



<h4>3.3.2 The Numbering System: The "Clustering" Logic</h4>
<p>
  The numbering in BLOSUM is the <strong>opposite</strong> of PAM. It refers to the "Cluster Percentage."
</p>
<ul>
  <li><strong>BLOSUM 62 (The Gold Standard):</strong> Here, sequences that were 62% identical 
  and grouped them together. This removes the "noise" of very similar sequences and lets you 
  see the patterns of <em>moderate</em> evolution. It is the best balance of sensitivity and specificity.</li>
  <li><strong>BLOSUM 80 (High Number = Close Relative):</strong> Clustered at 80% identity. 
  It is very strict. Use this if you only want to find matches that are nearly identical 
  to your query.</li>
  <li><strong>BLOSUM 45 (Low Number = Distant Relative):</strong> Clustered at 45% identity. 
  It is very "forgiving." Use this to find ancient ancestors where only a faint 
  similarity remains.</li>
</ul>

<p>    
<strong>Microbiologist's Note: Why BLOSUM wins for Function</strong><br>
    In microbiology, function is king. A bacterium might acquire a resistance gene from a 
    totally different species. The gene might mutate heavily, but the <strong>active site</strong> 
    (the "Block") will stay the same so the enzyme still works.
    <br><br>
    Because BLOSUM is built specifically from these "Conserved Blocks" (domains), it is 
    <em>excellent</em> at detecting functional homology even when the rest of the sequence 
    is messy.
  </p>

<h4>Practical Application: When to Use vs. Avoid BLOSUM</h4>

<strong>When to USE BLOSUM</strong>
<ul>
  <li><strong>1. General "Fishing" Expeditions (BLOSUM62):</strong><br>
  This is the default for BLAST because it works for 90% of cases. If you don't know what you are 
  looking for, start here.</li>
  
  <li><strong>2. Finding Ancient Homologs (BLOSUM45):</strong><br>
  Example: You have a human protein and you want to see if yeast (a distant eukaryotic relative) 
  has something similar. BLOSUM45 is forgiving enough to find these weak links.</li>
  
  <li><strong>3. Finding "Conserved Domains":</strong><br>
  If you are looking for a specific motif (like a Zinc Finger or an ATP-binding site), BLOSUM is 
  superior to PAM because it was literally built from these motifs.</li>
</ul>

<strong> When to AVOID BLOSUM</strong>
<ul>
  <li><strong>1. Very Short Sequences:</strong><br>
  If you use a "forgiving" matrix (like BLOSUM45) on a short sequence (e.g., a primer or a short peptide), 
  you will get too many false positives. The math becomes too "loose."</li>
  
  <li><strong>2. Strict Evolutionary Modeling:</strong><br>
  If you need to calculate the exact time in millions of years since two species diverged, 
  PAM is sometimes preferred because it is based on a constant time-step model. BLOSUM is based on 
  clusters, not time.</li>
</ul>

<p>
  <em><strong>Rule of Thumb:</strong> Low BLOSUM numbers = Long evolutionary distance (Distant relatives).</em>
</p>

  <h3>3.3 Summary: The Numbering Trap (The Inverse Rule)</h3>

<p>
  The most confusing part of bioinformatics scoring is that PAM and BLOSUM numbers 
  work in <strong>opposite directions</strong>. If you blindly pick a "high number" thinking it 
  always means the same thing, you will ruin your alignment.
</p>

<p>
  To remember the difference, use this analogy:
</p>
<ul>
  <li>
    <strong>PAM:</strong> 
    It counts how far you have traveled away from the original sequence. 
    <br><em>High Number (PAM250) = Distant Relative.</em>
  </li>
  <li>
    <strong>BLOSUM:</strong> 
    It measures how much "identity" is left. 
    <br><em>Low Number (BLOSUM45) = Distant Relative.</em>
  </li>
</ul>

<h2>4. Decision Matrix: Which Matrix for Which Experiment?</h2>
<p>
  Choose your matrix based on the biological question you are asking.
</p>

<table class="science-table" data-id="table-goal-matrix-selection-008"> 
<caption>Table 1: Various matrices and their recommended use cases.</caption> 
  <thead>
    <tr ">
      <th>Your Goal (Biological Context)</th>
      <th>Evolutionary Distance</th>
      <th>Recommended Matrix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>Outbreak Tracking</strong><br>
        <em>Comparing E. coli K12 to E. coli O157:H7 (Strains).</em>
      </td>
      <td><strong>Very Short</strong><br>(Recent Divergence)</td>
      <td>
        <strong>PAM 30</strong><br>or<br><strong>BLOSUM 80</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>General Database Search</strong><br>
        <em>"Is this unknown gene related to anything in the database?"</em>
      </td>
      <td><strong>Moderate</strong><br>(Unknown)</td>
      <td>
        <strong>BLOSUM 62</strong><br><em>(The Safe Default)</em>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Mining Metagenomes</strong><br>
        <em>Finding a human gene homolog in a deep-sea vent Archaea.</em>
      </td>
      <td><strong>Very Long</strong><br>(Ancient Divergence)</td>
      <td>
        <strong>PAM 250</strong><br>or<br><strong>BLOSUM 45</strong>
      </td>
    </tr>
  </tbody>
</table>

    <strong>Why does this matter? (The Consequence)</strong><br>
    <strong>If you use BLOSUM80 to look for distant relatives:</strong> You will find nothing. The criteria are too strict, and you will get "No Significant Hits" even if homologs exist (False Negative).
    <br><br>
    <strong>If you use BLOSUM45 to compare close strains:</strong> You will get a messy alignment with too many gaps, making it look like the strains are more different than they actually are.
  </p>
        
</article>


  `},P4=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),R4={id:"RK-2026-009",title:"Sequence Alignment: Pairwise Local, and Global Alignment Methodologies",date:"2026-01-11",tags:["#sequenceSimilarity","#LocalAlignment","#GlobalAlignment"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    This interactive page serves as aid for understanding the various sequence alignment methodologies. The application utilizes a dashboard layout to break complex bioinformatics concepts into digestible modules. Students can explore different alignment algorithms using interactive visualizations and compare their applications through dynamic charts. A direct comparison table clarifies distinct use cases—global versus local alignments—while the "Practical Applications" section maps out real-world scenarios where these tools are employed. This tool effectively bridges the gap between theoretical bioinformatics concepts and practical applications in genomics research.
`,content:`


<article>
<div style="text-align: center; margin: 30px 0;">
    <a href="https://rkpatel-1996.github.io/pairwise-local-global-alignment/" 
       target="_blank" 
       rel="noopener noreferrer" 
       style="
           display: inline-block;
           padding: 15px 30px;
           background: linear-gradient(135deg, #45f5f6 0%, #00a8cc 100%);
           color: #003d4d;
           font-family: system-ui, -apple-system, sans-serif;
           font-size: 16px;
           font-weight: 700;
           text-decoration: none;
           text-transform: uppercase;
           letter-spacing: 1px;
           border: none;
           border-radius: 50px;
           box-shadow: 0 4px 15px rgba(0, 168, 204, 0.4);
           transition: all 0.3s ease;
           cursor: pointer;
       "
       onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 25px rgba(0, 168, 204, 0.6)';"
       onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0, 168, 204, 0.4)';"
    >
        Interactive Scoring Matrices and Alignment Tool
    </a>
</div>


<h2>1. Introduction: The Central Dogma of Computational Biology</h2>

<p>In bioinformatics, sequence alignment serves as the foundational mechanism upon which the vast majority of genomic analysis is built. It is the computational process of arranging biological sequences—DNA, RNA, or protein—to identify regions of similarity that may be a consequence of functional, structural, or evolutionary relationships. The theoretical underpinning of this process is <b>the biological concept of homology: <em>the assertion that two sequences share a common ancestry</em></b>. When a computational biologist aligns two sequences, they are essentially testing a hypothesis of evolutionary descent, the residues (nucleotides or amino acids) aligned in the same column have descended from a single ancestral residue, having been modified over eons by the fundamental evolutionary forces of mutation, insertion, and deletion.</p>

<p>The necessity for rigorous alignment algorithms arises from the stochastic [<em class="grey">having a random probability distribution or pattern that may be analysed statistically but may not be predicted precisely</em>] nature of biological evolution. Unlike precise digital data transmission where error correction ensures fidelity, <b>biological information transmission is inherently error-prone</b>. Genes duplicate, diverge, and recombine. Domains—the functional subunits of proteins—shuffle between different genomic contexts. Consequently, sequences that perform identical functions in different organisms may share only a fraction of their identity. The task of the bioinformatician is to distinguish this faint signal of ancestral homology from the noise of random mutation. This distinction is critical; an incorrect alignment can lead to the prediction of a flawed protein structure, the misidentification of a disease-causing mutation in a clinical setting, or the construction of an erroneous phylogenetic tree that misrepresents the history of life.</p>

<p>The methodology of alignment is not monolithic. It is bifurcated along <b>two primary </b>axes: <strong>the scope of the alignment (Global vs. Local)</strong> and <strong>the cardinality of the input (Pairwise vs. Multiple)</strong>. Global alignment assumes similarity spans the entire length of the sequences, a valid assumption for highly conserved genes but a catastrophic one for multi-domain proteins with shuffled architectures. Local alignment, conversely, seeks islands of high similarity within a sea of divergence, treating the sequences as repositories of functional motifs rather than monolithic entities. Simultaneously, the transition from Pairwise Sequence Alignment (PSA) to Multiple Sequence Alignment (MSA) introduces exponential increases in computational com.

<p> Here, these methodologies are explored to develop foundational understanding of how they work and what might the best way of employing them in biological context.</p>

<h2>2. Pairwise Sequence Alignment: The Mathematical Core</h2>

<p>Pairwise Sequence Alignment (PSA) involves the comparison<b> of two biological sequences</b> to determine their degree of similarity. While simple in concept, the computational <strong>challenge</strong> lies in the <em>handling of "indels" (insertions and deletions)</em>. To <em>align two sequences of unequal length or composition </em>, gaps must be introduced. The optimal placement of these gaps is <b>governed by scoring matrices and gap penalty functions</b>, processed through the rigors of dynamic programming.</p>

<h3>2.1 The Scoring Landscape: Matrices and Gap Penalties</h3>
<p>
   Before an algorithm can align sequences, it requires a metric to evaluate the quality of a match. For <b>nucleotide sequences</b>, this is often a simple <em>identity matrix (e.g., +5 for match, -4 for mismatch)</em>. However, <b>protein sequences</b> require <em>complex substitution matrices</em> that reflect the physicochemical properties of amino acids and their evolutionary substitution rates (PAM and BLOSUM matrices).
</p>

<h3>2.2 Global Alignment: The Needleman-Wunsch Algorithm</h3>
<p> The concept of "Global Alignment" is the attempt to <b>align two sequences A and B from beginning to end</b>, maximizing the similarity score across their entire lengths.1 This strategy implicitly <b>assumes </b>that the <em>sequences are homologous throughout</em> and that <em>their lengths are roughly comparable</em>.
</p>

<h4>2.2.1 Algorithmic Mechanism</h4>
  <p>
    Proposed by Saul Needleman and Christian Wunsch in 1970, this algorithm was the first application of dynamic programming to biological sequences. It guarantees the mathematically optimal alignment given a specific scoring scheme.
  </p>

  <p>
    The algorithm constructs a matrix <var>F</var> of size (<var>n</var>+1) &times; (<var>m</var>+1), where <var>n</var> and <var>m</var> are sequence lengths. The value in cell <var>F</var>(<var>i</var>, <var>j</var>) represents the optimal score for aligning the prefix <var>A</var>[1..<var>i</var>] with <var>B</var>[1..<var>j</var>].
  </p>

  <p>The recurrence relation is defined as:</p>

    
      $$
      F(i, j) = \\max \\begin{cases} 
        F(i-1, j-1) + s(A_i, B_j) & \\text{(Match/Mismatch)} \\\\ 
        F(i-1, j) - d & \\text{(Gap in sequence B)} \\\\ 
        F(i, j-1) - d & \\text{(Gap in sequence A)} 
      \\end{cases}
      $$
    
  <p>
    Here, <var>s</var>(<var>A</var><sub><var>i</var></sub>, <var>B</var><sub><var>j</var></sub>) is the substitution score from the matrix (e.g., BLOSUM62), and <var>d</var> is the gap penalty.
  </p>

  <p>
    Crucially, the initialization of the matrix sets the first row and column to increasingly negative gap penalties (<var>F</var>(<var>i</var>, 0) = -<var>i</var> &times; <var>d</var>), reflecting the cost of aligning a sequence prefix to nothing. The Traceback procedure—which reconstructs the alignment—begins strictly at the bottom-right cell <var>F</var>(<var>n</var>, <var>m</var>) and proceeds to the top-left <var>F</var>(0, 0). This forces the alignment to account for every residue in both sequences.
  </p>
</section>

<h4>2.2.2 Biological Utility and Limitations</h4>
<p>Global alignment is the tool of choice for comparing <b>homologous genes from closely related species</b>, such as the Hemoglobin beta gene in humans vs. gorillas. In such cases, the preservation of gene structure (exon/intron boundaries) and length is expected.
</p>

<p>However, its "end-to-end" constraint is a liability when sequences differ significantly in length. If a researcher aligns a short query sequence (e.g., a 100-amino acid domain) against a long subject (e.g., a 1000-amino acid receptor) using Needleman-Wunsch, the algorithm will introduce massive, biologically meaningless gaps to stretch the short sequence across the entire length of the long one. This creates artifacts that obscure the true relationship.</p>

<h3>2.3 Local Alignment: The Smith-Waterman Algorithm</h3>
<p>  Local alignment addresses the limitations of global alignment by searching for the highest scoring subsequence match, ignoring the regions that do not align well. This approach is vital for discovering conserved domains within diverse protein architectures or finding gene fragments in large genomic contigs.
</p>

<h4>2.3.1 The "Zero Floor" Innovation</h4>

  <p>
    Smith and Waterman formalized local alignment in 1981 by modifying the Needleman-Wunsch recurrence. The critical mathematical innovation is the introduction of a "zero floor" in the maximization function. If the calculated score for extending an alignment becomes negative (indicating the sequences have diverged), the algorithm resets the score to zero.
  </p>

  <p>The Smith-Waterman recurrence is:</p>

    $$
      F(i, j) = \\max \\begin{cases} 
        0 \\\\ 
        F(i-1, j-1) + s(A_i, B_j) \\\\ 
        F(i-1, j) - d \\\\ 
        F(i, j-1) - d 
      \\end{cases}
    $$

  <p>
    This modification has profound biological implications. A score of zero essentially means "start a new alignment here." It allows the algorithm to discard poorly matching upstream regions without penalty.
  </p>
  
  <p>
    Furthermore, the Traceback does not start at the bottom-right. Instead, it searches the entire matrix for the maximum value <var>F</var><sub>max</sub>(<var>i</var>, <var>j</var>) and traces back until it hits a cell with a value of zero. This produces an alignment of the most similar core region, clipping off dissimilar ends.
  </p>

<h4>2.3.2 Biological Dominance of Local Alignment</h4>

<p>Local alignment is more generally useful than global alignment in exploratory bioinformatics.</p>

<ul>
  <li><b>Domain Discovery:</b> It can identify a "Kinase domain" shared between two proteins that are otherwise unrelated in sequence and function. Global alignment would fail to see this relationship due to the noise of the unaligned regions.</li>
  <li><b>Database Searching:</b> When searching a query against the UniProt database, we rarely expect full-length matches. We expect partial matches to related domains. Thus, database search tools like BLAST are strictly local aligners.</li>
  <li><b>Divergent Homology:</b> In distantly related species (e.g., Human vs. Yeast), large loops and unstructured regions evolve rapidly and change length. Local alignment ignores these variable regions and locks onto the conserved catalytic sites.</li>
</ul>

<table class="science-table" data-id="global-vs-local-comparison">
<caption>Table 1:Quick Comparison of Global and Local Alignment Methods</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Global Alignment</th>
      <th>Local Alignment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Core Algorithm</strong></td>
      <td><strong>Needleman-Wunsch</strong> (1970)</td>
      <td><strong>Smith-Waterman</strong> (1981)</td>
    </tr>
    <tr>
      <td><strong>Primary Goal</strong></td>
      <td>Align sequence A and B from <strong>end-to-end</strong>.</td>
      <td>Find the <strong>best matching subsequence</strong> within A and B.</td>
    </tr>
    <tr>
      <td><strong>Scoring Logic</strong></td>
      <td>Score can be negative. The penalty accumulates ("debt").</td>
      <td><strong>Zero Floor:</strong> Score cannot be negative. If score &lt; 0, reset to 0.</td>
    </tr>
    <tr>
      <td><strong>Matrix Initialization</strong></td>
      <td>First row/column initialized with <strong>gap penalties</strong> (e.g., -1, -2...).</td>
      <td>First row/column initialized to <strong>0</strong>.</td>
    </tr>
    <tr>
      <td><strong>Traceback Start</strong></td>
      <td>Strictly from the <strong>bottom-right cell</strong> (n, m).</td>
      <td>From the <strong>highest score</strong> anywhere in the matrix (i<sub>max</sub>, j<sub>max</sub>).</td>
    </tr>
    <tr>
      <td><strong>Traceback End</strong></td>
      <td>Strictly at the <strong>top-left cell</strong> (0, 0).</td>
      <td>At the first cell with a <strong>score of 0</strong>.</td>
    </tr>
    <tr>
      <td><strong>Biological Assumption</strong></td>
      <td>Sequences are homologous throughout entire length (e.g., orthologs).</td>
      <td>Sequences share a conserved domain/motif; surrounding regions vary.</td>
    </tr>
    <tr>
      <td><strong>Ideal Use Case</strong></td>
      <td>Comparing the <em>same gene</em> in closely related species (e.g., Human vs. Chimp).</td>
      <td>Finding a gene in a genome, or a domain in unrelated proteins.</td>
    </tr>
    <tr>
      <td><strong>Gap Sensitivity</strong></td>
      <td><strong>High.</strong> Terminal gaps are penalized, heavily affecting score if lengths differ.</td>
      <td><strong>Low.</strong> Terminal gaps are ignored. Effectively "clips" unmatched ends.</td>
    </tr>
    
  </tbody>
</table>

<h3>2.4 The Computational Bottleneck</h3>

  <p> Both Needleman-Wunsch and Smith-Waterman are classified as <strong>exact algorithms</strong>. This means they are guaranteed to find the mathematically optimal alignment score. However, this perfection comes at a cost. Their time and space complexity is <var>O</var>(<var>M</var> &times; <var>N</var>), where <var>M</var> and <var>N</var> are the lengths of the two sequences being compared.
  </p>
  <p>For a single protein of length 1,000 aligned against a modern database of millions of sequences, calculating this full matrix (quadratic cost) is computationally prohibitive. It is simply too slow for big data.</p>

  <p> This bottleneck forced the development of <strong>Heuristic Methods</strong> (like FASTA and BLAST). These algorithms make a critical trade-off: they sacrifice the guarantee of finding the "perfect" answer in exchange for orders-of-magnitude increases in speed.</p>

 <h4> The Trade-off: Exact vs. Heuristic</h4>
    <p> Think of it like searching for a lost key in a field: </p>
    <ul>
      <li>
        <strong>Exact (Smith-Waterman):</strong> You walk every single inch of the field in a grid pattern. You are <em>guaranteed</em> to find the key, but it takes all day.
      </li>
      <li>
        <strong>Heuristic (BLAST):</strong> You quickly scan only the areas where the grass looks disturbed. You find the key 99% of the time, but you do it in 5 minutes.
      </li>
    </ul>

<h2>3. Heuristic Strategies: BLAST and FASTA</h2>

<p>As genomic databases grew exponentially in the late 1980s, the rigorous dynamic programming approach became computationally infeasible for database scanning. This led to the development of heuristic algorithms, primarily BLAST (Basic Local Alignment Search Tool) and FASTA, which rely on the statistical probability of short word matches to initiate alignments.</p>

</article>


  `},j4=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),L4={id:"RK-2026-011",title:"Tailwind CSS integration, Folder Structure, Path Aliases and GitHub Deployment workflows",date:"2025-01-11",tags:["#react","#typescript","#vite","#tailwindcss"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`


<article>

<article>
    <h2>0. Installing Tailwind CSS (v4 vs v3)</h2>
    <p><strong>Crucial Update:</strong> Tailwind CSS released <strong>Version 4</strong> in 2024/2025. It is a major rewrite that removes the need for configuration files (\`init\`) and PostCSS. 
    <br><em>Since you are starting fresh, we will use the modern <strong>v4</strong> approach.</em></p>

    <section>
        <h3>0.1 Install Dependencies (v4 Method)</h3>
        <p>In v4, we install the engine and a special Vite plugin. We do <strong>not</strong> need \`postcss\` or \`autoprefixer\` manually anymore.</p>
        <pre><code>npm install -D tailwindcss @tailwindcss/vite</code></pre>
    </section>

    <section>
        <h3>0.2 Configure Vite (The New "Init")</h3>
        <p>Instead of creating a <code>tailwind.config.js</code> file, we simply add Tailwind as a plugin inside Vite. 
        <br>Open <strong><code>vite.config.ts</code></strong> and modify it to match this:</p>
        
        <pre><code>import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // &lt;-- 1. Import the plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // &lt;-- 2. Add to plugins array
  ],
})</code></pre>
    </section>

    <section>
        <h3>0.3 Inject Styles</h3>
        <p>Open <strong><code>src/index.css</code></strong>. Delete <strong>everything</strong> in this file.
        <br>In v4, we replace the old <code>@tailwind</code> directives with a single standard CSS import:</p>
        <pre><code>@import "tailwindcss";</code></pre>
    </section>

    <hr />

    <section>
        <h3>0.4 Why did the old commands fail?</h3>
        <p>If you see older tutorials (or used the previous version of this guide), you will notice differences:</p>
        <dl>
            <dt><strong>The "init" Error:</strong></dt>
            <dd><code>npx tailwindcss init</code> failed because v4 removed the standalone CLI tool. It is now deeply integrated into the build tool (Vite).</dd>

            <dt><strong>Zero-Config:</strong></dt>
            <dd>v4 detects your files automatically. You no longer need to manually configure the <code>content</code> array in a separate config file unless you have a very complex setup.</dd>
        </dl>
    </section>
</article>

<hr />

<article>
    <h2>1. Establishing the "Scalable" Folder Structure</h2>
    <p>The default <code>src</code> folder is flat. Professional projects organize files by <strong>Responsibility</strong>. Run these commands to create the standard directory tree.</p>

    <section>
        <h3>1.1 Create the Folders</h3>
        <pre><code>cd src
mkdir components features layouts pages hooks utils types lib assets/icons</code></pre>
    </section>

    <section>
        <h3>1.2 Understanding the Structure (The Decision Logic)</h3>
        <p>Use these "Litmus Tests" to decide where a new file belongs.</p>
        
        <dl>
            <dt><strong>src/components/ (The Building Blocks)</strong></dt>
            <dd>
                UI elements that are "dumb" and generic. They don't know about your specific app logic.
                <br><strong>Test:</strong> <em>"Could I copy-paste this file into a completely different project (like a To-Do app) and would it still work without errors?"</em>
                <br><strong>✅ Yes:</strong> It goes here (e.g., <code>Button.tsx</code>, <code>Modal.tsx</code>, <code>Card.tsx</code>).
                <br><strong>❌ No:</strong> It probably belongs in <code>features</code>.
            </dd>

            <dt><strong>src/features/ (The Business Logic)</strong></dt>
            <dd>
                Components and logic that are specific to a domain of your application.
                <br><strong>Test:</strong> <em>"Does this component contain words specific to my app idea (like 'User', 'Cart', 'Calculator')?"</em>
                <br><strong>✅ Yes:</strong> It goes here. (e.g., <code>CalculatorDisplay.tsx</code>, <code>UserProfileCard.tsx</code>).
            </dd>

            <dt><strong>src/pages/ (The Routes)</strong></dt>
            <dd>
                The entry points that correspond to a URL. They should contain very little code, mostly just arranging components from other folders.
                <br><strong>Test:</strong> <em>"Is this screen accessible via a specific URL (like /about or /calculator)?"</em>
                <br><strong>Examples:</strong> <code>HomePage.tsx</code>, <code>SettingsPage.tsx</code>.
            </dd>

            <dt><strong>src/layouts/ (The Frames)</strong></dt>
            <dd>
                Wrappers that stick around while the page content changes.
                <br><strong>Test:</strong> <em>"Do multiple pages share this exact same surrounding structure (sidebar, header, footer)?"</em>
                <br><strong>Examples:</strong> <code>DashboardLayout.tsx</code>, <code>AuthLayout.tsx</code>.
            </dd>

            <dt><strong>src/hooks/ (The React Logic)</strong></dt>
            <dd>
                Reusable logic that relies on React features (useState, useEffect, useNavigate).
                <br><strong>Test:</strong> <em>"Does this file use React functions but render NO HTML/JSX?"</em>
                <br><strong>Examples:</strong> <code>useWindowSize.ts</code>, <code>useTheme.ts</code>.
            </dd>

            <dt><strong>src/utils/ (The Pure Logic)</strong></dt>
            <dd>
                Helper functions that are "Pure JavaScript." They don't know React exists.
                <br><strong>Test:</strong> <em>"Could I run this function in a plain Node.js terminal script without errors?"</em>
                <br><strong>Examples:</strong> <code>formatCurrency.ts</code>, <code>calculateAge.ts</code>.
            </dd>

            <dt><strong>src/types/ (The Dictionary)</strong></dt>
            <dd>
                Shared definitions that describe your data. These files contain <em>zero</em> executable code—only "shapes" of data (Interfaces and Types).
                <br><strong>Test:</strong> <em>"Do I need to use this specific data structure (like 'User' or 'Product') in multiple different files across my app?"</em>
                <br><strong>✅ Yes:</strong> Put it here (e.g., <code>index.ts</code>, <code>user.ts</code>).
                <br><strong>❌ No:</strong> If it's only used in <em>one</em> component, define it inside that component file instead.
            </dd>
            
            <dt><strong>src/lib/ (The Configuration)</strong></dt>
            <dd>
                Setup files for third-party tools. This keeps your main code clean from configuration clutter.
                <br><strong>Test:</strong> <em>"Is this file just setting up a tool I installed (like Firebase, Axios, or Supabase)?"</em>
                <br><strong>Examples:</strong> <code>firebase.ts</code>, <code>axios-client.ts</code>.
            </dd>
        </dl>
    </section>
</article>

<hr />

<article>
    <h2>2. The Missing Piece: Absolute Imports (Path Aliases)</h2>
    <p><strong>The Problem:</strong> As your folders get deeper, your imports become ugly: <br><code>import Button from "../../../components/Button"</code></p>
    <p><strong>The Solution:</strong> We configure the project to use <code>@</code> as a shortcut to <code>src</code>. <br><code>import Button from "@/components/Button"</code></p>

    <section>
        <h3>2.1 Install Helper</h3>
        <p>Node.js needs help understanding paths.</p>
        <pre><code>npm install -D @types/node</code></pre>
    </section>

    <section>
        <h3>2.2 Update <code>vite.config.ts</code></h3>
        <p>Add this configuration to tell Vite how to resolve the alias.</p>
        <pre><code>import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})</code></pre>
    </section>

    <section>
        <h3>2.3 Update <code>tsconfig.app.json</code></h3>
        <p>Add <code>baseUrl</code> and <code>paths</code> inside <code>compilerOptions</code> so TypeScript understands the alias too.</p>
        <pre><code>{
  "compilerOptions": {
    /* ... existing settings ... */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}</code></pre>
    </section>
</article>

<hr />

<article>
    <h2>3. Git & GitHub Setup (The Safety Net)</h2>
    <p>Before writing code, we secure the repository. Choose the scenario that matches your current state.</p>

    <section>
        <h3>3.1 Scenario A: Starting Fresh (No Repo)</h3>
        <p>If you haven't connected this to GitHub yet:</p>
        <pre><code>git init
git add .
git commit -m "Initial setup with React, Vite, TS, Tailwind"
git branch -M main
# Go to GitHub.com -> Create New Repo -> Copy the URL
git remote add origin https://github.com/YOUR_USERNAME/ts-calculator.git
git push -u origin main</code></pre>
    </section>

    <section>
        <h3>3.2 Scenario B: Updating Existing Repo</h3>
        <p>If you already have a repo connected:</p>
        <pre><code>git add .
git commit -m "feat: upgrade project structure and add tailwind"
git push</code></pre>
    </section>
</article>

<hr />

<article>
    <h2>4. Deployment Prep (GitHub Pages)</h2>
    <p>To make your calculator viewable by the world, we need to prepare it for <strong>gh-pages</strong>.</p>

    <section>
        <h3>4.1 Install Deploy Tool</h3>
        <pre><code>npm install -D gh-pages</code></pre>
    </section>

    <section>
        <h3>4.2 Configure Base Path</h3>
        <p>Open <code>vite.config.ts</code>. You must tell Vite that your app will not be at the root of a domain (like <code>google.com/</code>), but in a subfolder (like <code>github.io/ts-calculator/</code>).</p>
        <pre><code>export default defineConfig({
  base: "/ts-calculator/", // CHANGE THIS to your repo name
  plugins: [react()],
  // ... rest of config
})</code></pre>
    </section>

    <section>
        <h3>4.3 Add Deploy Scripts</h3>
        <p>Open <code>package.json</code> and add these two scripts to the <code>"scripts"</code> section:</p>
        <pre><code>"predeploy": "npm run build",
"deploy": "gh-pages -d dist"</code></pre>
    </section>

    <section>
        <h3>4.4 How to Deploy</h3>
        <p>Whenever you want to update your live website, simply run:</p>
        <pre><code>npm run deploy</code></pre>
        <p>This will build your app and push it to a special <code>gh-pages</code> branch on GitHub, which automatically serves the website.</p>
    </section>
</article>

</article>


  `},q4=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),O4={id:"RK-2026-010",title:'Understanding the Core Files generated by "npm create vite@latest" a Vite + React + TypeScript Project',date:"2025-01-11",tags:["#react","#typescript","#vite","#tailwindcss"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`


<article>

<h2>0. Project Setup</h2>

<pre><code> 

npm create vite@latest
  
  ◇  Project name:
  │  ts-calculator
  │
  ◇  Select a framework:
  │  React
  │
  ◇  Select a variant:
  │  TypeScript
  │
  ◇  Use rolldown-vite (Experimental)?:
  │  No
  │
  ◇  Install with npm and start now?
  │  No
  │
  ◇  Scaffolding project in D:websites	s-calculator...
  │
  └  Done. Now run:
  
    cd ts-calculator
    npm install
    npm run dev
  
  </code>
</pre>

<h2>1. The Root Level (Configuration)</h2>

<p>These files control <em>how</em> your project builds and behaves.</p>
            
  <dl>
      <dt><strong>package.json</strong></dt>
          <dd>
            The <em>ID Card</em> of your project. It lists your project's name, the <strong>scripts</strong> you can run (like <code>dev</code> and <code>build</code>), and all the <strong>dependencies</strong> (libraries) your project needs to work. [<a href="#deep-dive-package-json">See deep dive below</a>]
          </dd>

      <dt><strong>package-lock.json</strong></dt>
          <dd>
            A strictly managed record of exactly which versions of every dependency are installed. <em>Do not edit this manually</em>; it ensures the project works the same on every computer. [<a href="#deep-dive-package-lock-json">See deep dive below</a>]
          </dd>

      <dt><strong>vite.config.ts</strong></dt>
          <dd>
            The <strong>Control Panel</strong> for Vite. This is where you configure plugins (like React support) and server settings. [<a href="#deep-dive-vite-config-ts">See deep dive below</a>]
           </dd>

      <dt><strong>index.html</strong></dt>
          <dd>
             The <strong>Entry Point</strong>. Unlike older tools, Vite keeps this in the root. It contains the <code>&lt;div id="root"&gt;</code> where your React app attaches itself. [<a href="#deep-dive-index-html">See deep dive below</a>]
           </dd>

      <dt><strong>eslint.config.js</strong></dt>
          <dd>
             The <strong>Code Police</strong>. It contains rules to catch errors and enforce coding standards automatically. [<a href="#deep-dive-eslint-config-js">See deep dive below</a>]
          </dd>

      <dt><strong>tsconfig.json / tsconfig.app.json / tsconfig.node.json</strong></dt>
          <dd>
              The <strong>TypeScript Rulebooks</strong>. 
                <ul>
                     <li><code>tsconfig.json</code>: The main reference file.</li>
                     <li><code>tsconfig.app.json</code>: Rules for your <em>App</em> code (runs in the browser).</li>
                     <li><code>tsconfig.node.json</code>: Rules for your <em>Config</em> code (runs in Node.js). </li>
                     <li>[<a href="#deep-dive-tsconfig-json">See deep dive below</a>]</li>
                </ul>
           </dd>
      </dl>
        </section>

        <section>
            <h2>2. The "src" Folder (Your Code)</h2>
            <p>This is where 99% of your work will happen.</p>

            <dl>
                <dt><strong>src/main.tsx</strong></dt>
                <dd>
                    The <strong>Bridge</strong>. This file takes your root React component (App) and injects it into the <code>index.html</code> file. You rarely touch this. [<a href="#deep-dive-main-tsx">deep-dive-main-tsx</a>]
                </dd>

                <dt><strong>src/App.tsx</strong></dt>
                <dd>
                    The <strong>Main Component</strong>. This is the root of your UI tree. For now, this is where your Calculator code will live. [<a href="#deep-dive-app-tsx">See deep dive below</a>]
                </dd>

                <dt><strong>src/vite-env.d.ts</strong></dt>
                <dd>
                    A helper file that tells TypeScript how to handle non-code assets (like importing images or SVGs) in a Vite environment. [<a href="#deep-dive-vite-env-d-ts">See deep dive below</a>]
                </dd>

                <dt><strong>src/index.css & App.css</strong></dt>
                <dd>
                    <strong>Global Styles</strong>. <code>index.css</code> usually handles body/reset styles, while <code>App.css</code> handles specific component styles.
                </dd>
            </dl>
        </section>

        <hr>

        <section>
            <h2>3. The "public" Folder</h2>
            <dl>
                <dt><strong>public/</strong></dt>
                <dd>
                    The <strong>Static Assets</strong> folder. Files here (like <code>vite.svg</code>) are served exactly as-is to the browser. They are not bundled or processed by the code compiler.
                </dd>
            </dl>
        </section>

        <section id="deep-dive-package-json">

    <h2>4. Understanding <code>package.json</code></h2>
    <p>This file is the <strong>manifest</strong> of your project. It defines your project's identity, how it runs, and what external code it needs to function.</p>


    <h3>4.1. File Breakdown</h3>

              <pre>
                  <code>{
                          "name": "ts-calculator",
                          "private": true,
                          "version": "0.0.0",
                          "type": "module",
                          "scripts": {
                            "dev": "vite",
                            "build": "tsc -b && vite build",
                            "lint": "eslint .",
                            "preview": "vite preview"
                          },
                          "dependencies": {
                            "react": "^19.2.0",
                            "react-dom": "^19.2.0"
                          },
                          "devDependencies": {
                            "@eslint/js": "^9.39.1",
                            "@types/node": "^24.10.1",
                            "@types/react": "^19.2.5",
                            "@types/react-dom": "^19.2.3",
                            "@vitejs/plugin-react": "^5.1.1",
                            "eslint": "^9.39.1",
                            "eslint-plugin-react-hooks": "^7.0.1",
                            "eslint-plugin-react-refresh": "^0.4.24",
                            "globals": "^16.5.0",
                            "typescript": "~5.9.3",
                            "typescript-eslint": "^8.46.4",
                            "vite": "^7.2.4"
                          }
                        }
                            </code>
          </pre>



    <dl>
        <dt><strong>Metadata (Name, Version, Private)</strong></dt>
        <dd>
            <code>"name": "ts-calculator"</code> identifies the project. <br>
            <code>"private": true</code> is a safety feature. It prevents you from accidentally publishing this personal project to the public npm registry. <br>
            <code>"version": "0.0.0"</code> tracks your release history (Major.Minor.Patch).
        </dd>

        <dt><strong>"type": "module"</strong></dt>
        <dd>
            This tells Node.js to treat your <code>.js</code> and <code>.ts</code> files as <strong>ES Modules</strong>. This allows you to use modern syntax like <code>import React from 'react'</code> instead of the older <code>require('react')</code>.
        </dd>

        <dt><strong>Scripts</strong></dt>
        <dd>
            These are command-line shortcuts used via <code>npm run [script-name]</code>.
            <ul>
                <li><code>dev</code>: Starts the Vite local development server.</li>
                <li><code>build</code>: First runs the TypeScript compiler (<code>tsc -b</code>) to check for errors, then asks Vite to bundle your code for production.</li>
                <li><code>lint</code>: Scans your code for stylistic errors or bugs using ESLint.</li>
                <li><code>preview</code>: Simulates a real production server locally so you can test the <code>build</code> result.</li>
            </ul>
        </dd>

        <dt><strong>Dependencies</strong></dt>
        <dd>
            The libraries required for your application to run <strong>in the browser</strong>. 
            <br><em>In your file:</em> React and React DOM (Version 19) are the core engines of your UI.
        </dd>

        <dt><strong>DevDependencies</strong></dt>
        <dd>
            Tools required <strong>only during development</strong>. These are not included in the final production bundle sent to users.
            <br><em>In your file:</em> TypeScript (for checking types), Vite (for building), and ESLint (for code quality).
        </dd>
    </dl>

<hr />

    <h3>4.2. When should you modify this file manually?</h3>
    <p>Generally, you should let the npm CLI handle this file, but there are specific scenarios where manual edits are necessary:</p>
    <ul>
        <li>
            <strong>Adding Custom Scripts:</strong> If you want to add a shortcut (e.g., <code>"test": "vitest"</code> or <code>"format": "prettier --write ."</code>), you strictly write these in the <code>"scripts"</code> section.
        </li>
        <li>
            <strong>Changing Project Name/Version:</strong> If you decide to rename the app or bump the version number for a release, you edit the metadata fields at the top.
        </li>
        <li>
            <strong>Browser Support (Optional):</strong> Sometimes developers add a <code>"browserslist"</code> field here to tell tools which legacy browsers (like old Safari or Chrome) they need to support.
        </li>
    </ul>

    <h3>4.3. Best Practices for Maintenance</h3>
    <ul>
        <li>
            <strong>❌ Do not manually type versions:</strong> When installing libraries, use <code>npm install library-name</code>. Npm will automatically find the compatible version and update this file for you. Typing it manually often leads to typos or broken builds.
        </li>
        <li>
            <strong>✅ Keep dependencies separated:</strong> Be strict about what goes into <code>dependencies</code> vs <code>devDependencies</code>. If a user doesn't need it to <em>use</em> the calculator (like the testing tool or the linter), it belongs in <code>devDependencies</code>.
        </li>
        <li>
            <strong>✅ Respect the <code>package-lock.json</code>:</strong> This file (<code>package.json</code>) lists the <em>approximate</em> version you want (e.g., <code>^19.2.0</code> means "19.2.0 or newer"). The <code>package-lock.json</code> locks the <em>exact</em> version installed. Never delete the lock file unless absolutely necessary.
        </li>
    </ul>


    <h3>4.4 Optimized package.json (No New Installs)</h3>
    <p>We are adding two powerful scripts that leverage your existing <strong>TypeScript</strong> and <strong>ESLint</strong> installations to make development smoother.</p>

        <h3>The Code</h3>
            <pre><code>....,
                "scripts": {
                  "dev": "vite",
                  "build": "tsc -b && vite build",
                  "lint": "eslint .",
                  "lint:fix": "eslint . --fix",
                  "type-check": "tsc --noEmit",
                  "preview": "vite preview"
                }...
          </code></pre>
    

    <hr />

        <h3>4.5. Explanation of Changes</h3>
        <dl>
            <dt><strong>1. Added <code>"lint:fix": "eslint . --fix"</code></strong></dt>
            <dd>
                You already have ESLint installed. This script tells it to not just <em>find</em> problems, but to <strong>automatically repair</strong> simple ones (like formatting issues or missing semicolons) instantly.
            </dd>

            <dt><strong>2. Added <code>"type-check": "tsc --noEmit"</code></strong></dt>
            <dd>
                You already have TypeScript (tsc) installed. By default, Vite ignores type errors to stay fast. Running this script manually will act as a strict "spellchecker" for your code logic without trying to build the final files.
            </dd>
        </dl>
    

        
        </section>


        <section id="deep-dive-package-lock-json">
    <h2>5. Understanding <code>package-lock.json</code></h2>
    <p>While <code>package.json</code> is your request list ("I would like React"), <code>package-lock.json</code> is the receipt ("You received exactly React version 19.2.0"). It is automatically generated and ensures that every developer working on this project installs the exact same code.</p>

    <article>
        <h3>5.1 The "Source of Truth"</h3>
        <p>This file is massive because it contains the entire family tree of your project. It doesn't just list the tools you installed; it lists the tools <em>your tools</em> installed (dependencies of dependencies).</p>
        <p><strong>Golden Rule:</strong> Never edit this file manually. Let \`npm install\` manage it.</p>
    </article>

    <article>
        <h3>5.2 Deconstructing the Snippet</h3>
        <p>Let's look at the specific segments from your file to understand the structure:</p>
        
        <dl>
            <dt><strong>The Header (Metadata)</strong></dt>
            <dd>
                <pre><code>"lockfileVersion": 3,</code></pre>
                This tells npm how to read the file. Version 3 is the modern standard used by npm v9+.
            </dd>

            <dt><strong>The Root Project (<code>""</code>)</strong></dt>
            <dd>
                <pre><code>"packages": {
  "": { 
    "name": "ts-calculator", 
    ... 
  }
}</code></pre>
                The entry labeled with an empty string <code>""</code> represents your actual project folder. It mirrors the dependencies you listed in <code>package.json</code>.
            </dd>

            <dt><strong>The "Hidden" Dependencies</strong></dt>
            <dd>
                <pre><code>"node_modules/@babel/code-frame": { ... }</code></pre>
                You never asked for "babel code-frame," but you see it here. Why? 
                <br><em>The Chain:</em> You installed <strong>Vite</strong> &rarr; Vite needs <strong>Rolldown</strong> &rarr; Rolldown might need <strong>Babel</strong>. 
                <br>This file tracks all these hidden relationships so nothing breaks.
            </dd>
        </dl>
    </article>

    <article>
        <h3>5.3 Key Security Fields</h3>
        <p>Inside every dependency block (like the <code>@babel/code-frame</code> example), you will see three critical fields that ensure security and consistency:</p>
        <ul>
            <li>
                <strong><code>version</code>:</strong> The exact, immutable version number (e.g., <code>7.28.6</code>). Unlike <code>package.json</code>, there are no "approximate" symbols like <code>^</code> or <code>~</code> here.
            </li>
            <li>
                <strong><code>resolved</code>:</strong> The precise URL where this package was downloaded from (e.g., <code>registry.npmjs.org</code>). This proves the file came from the official source.
            </li>
            <li>
                <strong><code>integrity</code>:</strong> A cryptographic signature (SHA-512 hash).
                <br><em>Why it matters:</em> If a hacker tries to tamper with the package code on the server, this hash will mismatch, and npm will refuse to install it on your machine.
            </li>
        </ul>
    </article>
</section>

<section id="deep-dive-vite-config-ts">

    <h2>6. Understanding <code>vite.config.ts</code></h2>
    <p>This file is the <strong>Control Panel</strong> for your entire development environment. While standard Node scripts start the engine, this file tells the engine <em>how</em> to drive.</p>

    <article>
        <h3>6.1 What is "Configuration"?</h3>
        <p>Think of the Configuration (config) as the <strong>Settings Menu</strong> for your project, similar to a video game.</p>
        <ul>
            <li><strong>In a Game:</strong> You change settings to adjust volume or resolution so the game plays how you like.</li>
            <li><strong>In Vite:</strong> You change the config so the code builds how you need it (e.g., "Run on port 3000" or "Understand React code").</li>
        </ul>
        <p>In this file, the "configuration" is just a list of these settings, written as a JavaScript object (data inside curly braces <code>{}</code>).</p>
    </article>

    <hr />

    <article>
        <h3>6.2 Deconstructing the Code (The "Wrapper")</h3>
        <p>The code might look complex because of the specific way it is written. Let's break down the <code>defineConfig</code> wrapper.</p>
        
        <pre><code>export default defineConfig({
  plugins: [react()],
})</code></pre>

        <dl>
            <dt><strong>The Concept: "Wrapping"</strong></dt>
            <dd>
                In coding, "wrapping" just means putting one thing inside another.
                <br><em>The Analogy:</em> Imagine your settings (the object <code>{...}</code>) are a <strong>Letter</strong>.
                <ul>
                    <li><strong>Without Wrapping:</strong> You leave the letter on a table. It exists, but it’s unprotected and messy.</li>
                    <li><strong>With Wrapping:</strong> You put the letter inside an <strong>Envelope</strong>. The letter is the same, but now it is contained in something that handles it properly.</li>
                </ul>
                In your code, <code>defineConfig(...)</code> is the envelope.
            </dd>

            <dt><strong>The Purpose: "IntelliSense" (The Spell Checker)</strong></dt>
            <dd>
                Why bother with the envelope? You need it for <strong>IntelliSense</strong>. Think of <code>defineConfig</code> as a specialized <strong>Spell Checker</strong> for your settings.
                <ul>
                    <li><strong>Scenario A (No Wrapper):</strong> If you type <code>pot: 3000</code> instead of <code>port: 3000</code>, the computer won't warn you. You won't know until the app crashes.</li>
                    <li><strong>Scenario B (With Wrapper):</strong> When you wrap settings in <code>defineConfig</code>, VS Code knows these are Vite settings. If you type <code>pot</code>, it highlights it in <strong style="color:red;">RED</strong> immediately because it knows "pot" isn't a valid setting.</li>
                </ul>
            </dd>
        </dl>
    </article>

    <hr />

    <article>
        <h3>6.3 The Plugins</h3>
        <pre><code>plugins: [react()]</code></pre>
        <p>Vite is a generic tool—it doesn't know what "React" is out of the box. This plugin acts as a <strong>Translator</strong>. It teaches Vite how to understand your <code>.jsx</code> and <code>.tsx</code> files and how to update them instantly without reloading the whole page.</p>
    </article>

    <hr />

    <article>
        <h3>6.4 Future Customizations</h3>
        <p>As your project grows, you will return to this "Settings Menu" to add more preferences:</p>
        <dl>
            <dt><strong>Server Settings</strong></dt>
            <dd>E.g., "Please open the browser automatically when I start."</dd>
            <dt><strong>Path Aliases</strong></dt>
            <dd>E.g., "Let me type <code>@/button</code> instead of <code>../../components/button</code>."</dd>
        </dl>
    </article>

</section>


<section id="deep-dive-index-html">
    <h2>7. Understanding <code>index.html</code></h2>
    <p>This is the <strong>Physical Entry Point</strong> of your application. When a user visits your website, this is the <em>only</em> file the server actually sends them initially. It acts as the container for your entire React application.</p>

    <article>
        <h3>7.1 The "Single Page" Concept</h3>
        <p>You might notice the <code>&lt;body&gt;</code> is almost empty. This is because modern React apps are <strong>Single Page Applications (SPAs)</strong>.</p>
        <ul>
            <li><strong>Old School:</strong> Every time you clicked a link, the server sent a whole new HTML file.</li>
            <li><strong>Modern (SPA):</strong> The server sends this one blank HTML frame. Then, JavaScript (React) takes over and "draws" the rest of the website inside it dynamically.</li>
        </ul>
    </article>

    <hr />

    <article>
        <h3>7.2 Line-by-Line Breakdown</h3>
        <dl>
            <dt><strong>The Meta Tags</strong></dt>
            <dd>
                <code>&lt;meta name="viewport" ... /&gt;</code>
                <br>This is critical for mobile devices. It tells the browser: "Do not shrink my website to fit the screen. Let the content be 100% width." Without this, your calculator would look tiny and unreadable on a phone.
            </dd>

            <dt><strong>The Favicon</strong></dt>
            <dd>
                <code>&lt;link rel="icon" ... href="/vite.svg" /&gt;</code>
                <br>This points to the browser tab icon. Note the path starts with <code>/</code>. In Vite, files in the <code>public</code> folder are served at the root URL.
            </dd>

            <dt><strong>The Mount Point (The Canvas)</strong></dt>
            <dd>
                <pre><code>&lt;div id="root"&gt;&lt;/div&gt;</code></pre>
                This empty <code>div</code> is the target. Your React code is constantly looking for an element with the ID of <code>root</code>. Once it finds it, React takes full control of everything inside this box.
            </dd>

            <dt><strong>The "Magic" Script</strong></dt>
            <dd>
                <pre><code>&lt;script type="module" src="/src/main.tsx"&gt;&lt;/script&gt;</code></pre>
                This line is special for two reasons:
                <ol>
                    <li><strong><code>src="/src/main.tsx"</code>:</strong> It points directly to your TypeScript file. Vite intercepts this request and compiles the TypeScript into JavaScript on the fly before the browser sees it.</li>
                    <li><strong><code>type="module"</code>:</strong> This enables modern JavaScript features (ES Modules), allowing you to use <code>import</code> and <code>export</code> statements directly in the browser.</li>
                </ol>
            </dd>
        </dl>
    </article>
</section>

<section id="deep-dive-eslint-config-js">
    
    <h2>8. Understanding <code>eslint.config.js</code></h2>
    <p>This file defines the laws for the <strong>Code Police</strong> (ESLint). It runs automatically to catch errors and enforce rules. Let's decode the strange symbols and settings used here.</p>

    <pre><code>
    import js from '@eslint/js'
    import globals from 'globals'
    import reactHooks from 'eslint-plugin-react-hooks'
    import reactRefresh from 'eslint-plugin-react-refresh'
    import tseslint from 'typescript-eslint'
    import { defineConfig, globalIgnores } from 'eslint/config'

    export default defineConfig([
      globalIgnores(['dist']),
      {
        files: ['**/*.{ts,tsx}'],
        extends: [
          js.configs.recommended,
          tseslint.configs.recommended,
          reactHooks.configs.flat.recommended,
          reactRefresh.configs.vite,
        ],
        languageOptions: {
          ecmaVersion: 2020,
          globals: globals.browser,
        },
      },
    ])

    </code></pre>

    <article>
        <h3>8.1 The "Glob" Pattern: <code>**/*.{ts,tsx}</code></h3>
        <p>This looks like nonsense, but it is a powerful search command known as a <strong>Glob Pattern</strong>. It tells the computer exactly where to look.</p>
        <dl>
            <dt><strong><code>**</code> (The "Deep" Search)</strong></dt>
            <dd>
                Means: "Look in every folder, and every folder inside <em>those</em> folders, forever."
                <br><em>Without this:</em> It would only check the top layer and ignore your neatly organized subfolders.
            </dd>
            <dt><strong><code>*</code> (The Wildcard)</strong></dt>
            <dd>
                Means: "Any filename." (e.g., <code>Header.tsx</code>, <code>Footer.tsx</code>, <code>calculator.ts</code>).
            </dd>
            <dt><strong><code>.{ts,tsx}</code> (The Filter)</strong></dt>
            <dd>
                Means: "Only file names ending in these extensions."
            </dd>
        </dl>
        <p><strong>Translation:</strong> "Search every single folder (<code>**</code>) for any file (<code>*</code>) that is a TypeScript file (<code>.ts</code>) or a React TypeScript file (<code>.tsx</code>)."</p>
    </article>

    <hr />

    <article>
        <h3>8.2 Common File Extensions in Web Dev</h3>
        <p>You can add more extensions to this list if you want the Code Police to patrol them too. Common ones include:</p>
        <ul>
            <li><strong><code>.js</code> / <code>.jsx</code>:</strong> Standard JavaScript files (no TypeScript).</li>
            <li><strong><code>.css</code>:</strong> Styling sheets. (Usually handled by a different tool like Stylelint, not ESLint).</li>
            <li><strong><code>.json</code>:</strong> Data files.</li>
            <li><strong><code>.spec.ts</code> / <code>.test.ts</code>:</strong> Testing files (code that tests your code).</li>
        </ul>
        <p><strong>Rule of Thumb:</strong> Only add extensions here if the tool (ESLint) knows how to read them. ESLint is primarily for <em>logic</em> (JS/TS), not styles.</p>
    </article>

    <hr />

    <article>
        <h3>8.3 Language Options</h3>
        <dl>
            <dt><strong><code>ecmaVersion: 2020</code> (The Dictionary)</strong></dt>
            <dd>
                JavaScript, like English, evolves. New words (syntax) are added every year.
                <br>This setting tells the Code Police: "Please understand slang and grammar from the year 2020."
                <br><em>If you set this to 2015:</em> The linter might yell at you for using modern features, thinking they are typos.
            </dd>

            <dt><strong><code>globals</code> (The "Known" List)</strong></dt>
            <dd>
                In programming, you usually have to define things before you use them. But some things just "exist" depending on where the code runs.
                <ul>
                    <li><strong><code>globals.browser</code>:</strong> Tells ESLint: "We are in a web browser. It is okay if the user types <code>window</code> or <code>document</code>. Don't mark those as errors."</li>
                    <li><strong><code>globals.node</code>:</strong> (Not used here) Would tell ESLint: "We are on a server. It is okay to use <code>process</code> or <code>require</code>."</li>
                </ul>
            </dd>
        </dl>
    </article>

    <hr />

    <article>
        <h3>8.4 What is "Extends"?</h3>
        <p>Imagine you are starting a new country. You need laws.</p>
        <ul>
            <li><strong>Without Extends:</strong> You have to write every law from scratch ("Do not steal," "Do not speed," etc.). This takes forever.</li>
            <li><strong>With Extends:</strong> You say, "I adopt the <em>Standard International Laws</em>." You instantly get a working legal system.</li>
        </ul>
        <p>In this file, you are "extending" (borrowing) rulebooks from:</p>
        <ul>
            <li><strong><code>js.configs.recommended</code>:</strong> The basic laws of JavaScript.</li>
            <li><strong><code>reactHooks...</code>:</strong> Special laws for React components.</li>
        </ul>
        
        <h4>How do I know if I need to add something?</h4>
        <p>You usually add to this list when you install a <strong>new tool</strong> that has its own rules.</p>
        <p><em>Example:</em> If you install a testing tool called "Jest," you would install its plugin and add <code>plugin:jest/recommended</code> here so ESLint stops underlining your test code as "errors."</p>
    </article>

    <hr />

    <article>
        <h3>8.5 How it Works (The Workflow)</h3>
        <p>Think of this file as the instructions for a <strong>Quality Control Scanner</strong> on a factory belt.</p>
        <ol>
            <li><strong>You type code</strong> in VS Code.</li>
            <li><strong>The Scanner (ESLint) wakes up.</strong> It reads this config file to know what to look for.</li>
            <li>It sees <code>files: ['**/*.tsx']</code>, so it scans your current file.</li>
            <li>It checks your code against the "Rulebooks" you extended.</li>
            <li><strong>Result:</strong>
                <ul>
                    <li>If you broke a rule (e.g., used a variable you didn't define), it highlights the line in <span style="color:red">Red</span>.</li>
                    <li>If you broke a style preference (e.g., missed a semicolon), it might highlight it in <span style="color:orange">Yellow</span>.</li>
                </ul>
            </li>
        </ol>
    </article>
</section>


<section id="deep-dive-tsconfig-json">
    <h2>9. Understanding <code>tsconfig.json</code> (The TypeScript Rulebooks)</h2>
    <p>If <code>package.json</code> is the project manifest, the <strong>TSConfig</strong> files are the <strong>Grammar Rules</strong>. They tell TypeScript how strict to be and, most importantly, <em>where</em> the code will run.</p>

    <article>
        <h3>9.1 Why are there THREE files?</h3>
        <p>In older projects, you only had one <code>tsconfig.json</code>. But modern web development has a unique problem: <strong>Two different worlds exist in one folder.</strong></p>
        <ul>
            <li><strong>World A (The Browser):</strong> Your App code (<code>src/App.tsx</code>). It knows about the "Window" and "HTML elements" but knows nothing about your computer's file system.</li>
            <li><strong>World B (The Computer):</strong> Your Config code (<code>vite.config.ts</code>). It runs on your physical machine (Node.js). It knows about files and folders but knows nothing about HTML or clicking buttons.</li>
        </ul>
        <p>If you mixed these rules, TypeScript would get confused. It might let you try to "click" a file on your hard drive (impossible) or try to read a file system from a web page (security risk). <strong>Solution:</strong> We create separate rulebooks for each world.</p>
    </article>

    <hr />

    <article>
        <h3>9.2 File 1: <code>tsconfig.json</code> (The Director)</h3>
        <pre><code>"references": [
  { "path": "./tsconfig.app.json" },
  { "path": "./tsconfig.node.json" }
]</code></pre>
        <p><strong>What it is:</strong> This is the entry point. It contains almost no rules itself.</p>
        <p><strong>The Job:</strong> It acts as a <strong>Traffic Director</strong>. It tells your editor: "I don't enforce rules directly. If you are looking at App code, go to the <em>App Rulebook</em>. If you are looking at Config code, go to the <em>Node Rulebook</em>."</p>
    </article>

    <hr />

    <article>
        <h3>9.3 Files 2 & 3: The Options Explained</h3>
        <p>Both the <strong>App</strong> and <strong>Node</strong> configs use similar settings, but with different values. Here is what the cryptic keywords actually mean:</p>

        <dl>
            <dt><strong>1. The "Vocabulary" Settings</strong></dt>
            <dd>
                <ul>
                    <li><strong><code>"target": "ES2022"</code></strong> (The Language Level):
                        <br>JavaScript evolves. This tells TypeScript: "You can assume modern browsers support features from the year 2022. You don't need to rewrite modern code into ancient code."
                    </li>
                    <li><strong><code>"lib": [...]</code></strong> (The Dictionary):
                        <br>This defines which global variables exist.
                        <br><em>In App Config:</em> Includes <code>"DOM"</code> (Document Object Model). This lets you type <code>document.getElementById</code> without an error.
                        <br><em>In Node Config:</em> <strong>Does not</strong> include DOM. If you try to access the HTML document in your config file, TypeScript stops you because that concept doesn't exist on the server.
                    </li>
                    <li><strong><code>"types": ["vite/client"]</code></strong>:
                        <br>This adds special Vite vocabulary, allowing TypeScript to understand things like importing <code>.svg</code> images or checking environment variables.
                    </li>
                </ul>
            </dd>

            <dt><strong>2. The "Strictness" Settings</strong></dt>
            <dd>
                <ul>
                    <li><strong><code>"strict": true</code></strong> (The Strict Teacher):
                        <br>This turns on the maximum safety checks.
                        <br><em>Example:</em> Without this, you could create a variable without a value. With this, TypeScript forces you to handle the "empty" (null) case immediately.
                    </li>
                    <li><strong><code>"noUnusedLocals": true</code></strong>:
                        <br>If you create a variable named <code>x</code> but never use it, TypeScript yells at you. It keeps your code clean.
                    </li>
                    <li><strong><code>"noFallthroughCasesInSwitch": true</code></strong>:
                        <br>Prevents a common logical bug where code accidentally runs into the wrong section (case) of a switch statement.
                    </li>
                </ul>
            </dd>

            <dt><strong>3. The "Builder" Settings</strong></dt>
            <dd>
                <ul>
                    <li><strong><code>"noEmit": true</code></strong>:
                        <br><strong>Crucial Concept:</strong> Traditionally, TypeScript <em>compiles</em> code (creates .js files). But in Vite, we only use TypeScript for <em>checking</em>. Vite (using a tool called esbuild) handles the actual building because it's faster.
                        <br>This flag tells TypeScript: "Don't create any files. Just check for errors."
                    </li>
                    <li><strong><code>"moduleResolution": "bundler"</code></strong>:
                        <br>This is a modern setting. It tells TypeScript: "Don't worry about how to find files on the hard drive. We are using a sophisticated bundler (Vite) that will handle the complex logic of finding imported files."
                    </li>
                    <li><strong><code>"jsx": "react-jsx"</code></strong>:
                        <br>This tells TypeScript how to handle the HTML-like tags (<code>&lt;div&gt;</code>) inside your JavaScript. It converts them into the specific format React 19 expects.
                    </li>
                </ul>
            </dd>
            
             <dt><strong>4. The Scope</strong></dt>
            <dd>
                 <ul>
                    <li><strong><code>"include": ["src"]</code></strong>:
                        <br>This defines the border. The App Rulebook says: "I only apply to files inside the <code>src</code> folder."
                    </li>
                </ul>
            </dd>
        </dl>
    </article>

    <hr />

    <article>
        <h3>9.4 How do I know if I need to change this?</h3>
        <p>For a beginner, <strong>you almost never touch these files.</strong></p>
        <p>However, you might edit them if:</p>
        <ul>
            <li><strong>You add a new type of file:</strong> If you start using something weird (like 3D model files <code>.gltf</code>), you might need to register them here.</li>
            <li><strong>You use a library with old code:</strong> Sometimes older libraries crash with <code>strict: true</code>. You might (temporarily) set it to <code>false</code> to get things working (though it's better to fix the code!).</li>
        </ul>
    </article>
</section>

<section id="deep-dive-main-tsx">
    <h2>10. Understanding <code>src/main.tsx</code> (The Bridge)</h2>
    <p>If <code>index.html</code> is the empty house, and <code>App.tsx</code> is the furniture, then <code>main.tsx</code> is the <strong>Movers</strong>. It is the script that physically places your App inside the House.</p>

    <article>
        <h3>10.1 The Code Logic</h3>
        <pre><code>import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  &lt;StrictMode&gt;
    &lt;App /&gt;
  &lt;/StrictMode&gt;,
)</code></pre>
    </article>

    <hr />

    <article>
        <h3>10.2 Deconstructing the "Magic" Line</h3>
        <p>The entire application launches in this single statement:</p>
        <pre><code>createRoot(document.getElementById('root')!).render(...)</code></pre>
        
        <dl>
            <dt><strong>1. Finding the Anchor (<code>document.getElementById</code>)</strong></dt>
            <dd>
                This is standard JavaScript. It looks at your <code>index.html</code> file and finds the empty <code>&lt;div id="root"&gt;</code>. This is the target destination.
            </dd>

            <dt><strong>2. The TypeScript "Trust Me" (<code>!</code>)</strong></dt>
            <dd>
                Notice the exclamation mark at the end: <code>getElementById('root')!</code>.
                <br><em>The Problem:</em> TypeScript is paranoid. It thinks: "What if the HTML file is missing? What if 'root' doesn't exist? Then this variable will be <code>null</code> and the app will crash!"
                <br><em>The Solution:</em> The <code>!</code> is a <strong>Non-Null Assertion</strong>. It is you telling TypeScript: "I promise you, the element exists. Don't worry about it."
            </dd>

            <dt><strong>3. Creating the Root (<code>createRoot</code>)</strong></dt>
            <dd>
                React needs to take control of that HTML element to manage updates efficiently. This function turns the plain HTML <code>div</code> into a <strong>React Root</strong>—a managed container where React can add, remove, or update UI elements instantly.
            </dd>

            <dt><strong>4. The Action (<code>.render</code>)</strong></dt>
            <dd>
                This command tells React: "Take the <code>&lt;App /&gt;</code> component and draw it inside that Root we just created."
            </dd>
        </dl>
    </article>

    <hr />

    <article>
        <h3>10.3 What is <code>&lt;StrictMode&gt;</code>?</h3>
        <p>You see your App is wrapped inside this tag. It is a <strong>Development-Only Safety Tool</strong>.</p>
        <ul>
            <li><strong>The Double Render:</strong> In development, StrictMode intentionally runs your components <strong>twice</strong>.</li>
            <li><strong>Why?</strong> To stress-test your code. If your code is "pure" (good quality), running it twice produces the same result. If your code has side effects (bugs), running it twice often makes the bug obvious so you can fix it.</li>
            <li><strong>Note:</strong> This wrapper is automatically removed when you build for production, so it doesn't slow down the real app.</li>
        </ul>
    </article>
</section>



<section id="deep-dive-app-tsx">
    <h2>11. Understanding <code>src/App.tsx</code> (The Main Component)</h2>
    <p>This is the heart of your application. While <code>main.tsx</code> sets up the stage, <code>App.tsx</code> is the main play. It is a <strong>React Component</strong>—a reusable piece of UI that manages its own data and display.</p>

    <article>
        <h3>11.1 The Anatomy of a Component</h3>
        <p>A React component is simply a JavaScript function that returns HTML (specifically, JSX). Let's dissect the default template code:</p>

        <dl>
            <dt><strong>1. Imports (The Ingredients)</strong></dt>
            <dd>
                <pre><code>import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'</code></pre>
                <ul>
                    <li><strong><code>useState</code>:</strong> A special tool (Hook) that lets your component "remember" things (like the calculator score or count).</li>
                    <li><strong>Assets:</strong> Note how we import images (<code>.svg</code>) and styles (<code>.css</code>) just like they were code files. Vite handles bundling these for you.</li>
                </ul>
            </dd>

            <dt><strong>2. The State (The Memory)</strong></dt>
            <dd>
                <pre><code>const [count, setCount] = useState(0)</code></pre>
                This is the most critical concept in React.
                <ul>
                    <li><strong><code>count</code>:</strong> The current value (starts at 0).</li>
                    <li><strong><code>setCount</code>:</strong> The <em>only</em> allowed way to change that value.</li>
                    <li><strong>The Rule:</strong> You never do <code>count = 5</code>. You must do <code>setCount(5)</code>. When you call this "setter," React automatically updates the screen to show the new number.</li>
                </ul>
            </dd>

            <dt><strong>3. The Return (The Layout)</strong></dt>
            <dd>
                The function returns something that looks like HTML, but it's actually <strong>JSX</strong> (JavaScript XML).
                <pre><code>&lt;button onClick={() => setCount((count) => count + 1)}&gt;
  count is {count}
&lt;/button&gt;</code></pre>
                <ul>
                    <li><strong><code>{count}</code>:</strong> The curly braces are portals. They let you insert JavaScript variables directly into the HTML.</li>
                    <li><strong><code>onClick</code>:</strong> This is an event listener. When clicked, it runs the arrow function to update the state, which triggers a re-render.</li>
                </ul>
            </dd>

            <dt><strong>4. The Fragment (<code>&lt;&gt;...&lt;/&gt;</code>)</strong></dt>
            <dd>
                React components must return <strong>one single parent element</strong>. If you want to return multiple siblings (like the logos <em>and</em> the title <em>and</em> the card) without wrapping them in an extra <code>&lt;div&gt;</code>, you use these empty tags called a <strong>Fragment</strong>.
            </dd>
        </dl>
    </article>
</section>


<section id="deep-dive-vite-env-d-ts">
    <h2>12. The "Missing" File: <code>vite-env.d.ts</code>[deprecated]</h2>
    <p>You correctly noticed this file is not in your <code>src</code> folder. This is because your project uses the modern <strong>"Types Field" method</strong> instead of a physical file.</p>

    <article>
        <h3>12.1 The Old Way (The Physical File)</h3>
        <p>Previously, you needed a file called <code>vite-env.d.ts</code> containing this line:</p>
        <pre><code>/// &lt;reference types="vite/client" /&gt;</code></pre>
        <p>This was a manual "sticky note" telling TypeScript: "Hey, please load the special definitions for Vite (like how to import <code>.svg</code> files)."</p>
    </article>

    <hr />

    <article>
        <h3>12.2 The New Way (Your Setup)</h3>
        <p>Instead of a physical file, look at your <strong><code>tsconfig.app.json</code></strong> file again. You will see this line:</p>
        <pre><code>"types": ["vite/client"]</code></pre>
        <p><strong>This line replaces the file entirely.</strong></p>
        <dl>
            <dt><strong>How it works:</strong></dt>
            <dd>
                Instead of looking for a "sticky note" file in your folder, TypeScript now loads these rules directly from the <code>node_modules</code> library. It is cleaner and one less file for you to manage.
            </dd>
        </dl>
    </article>
</section>


</article>


  `},F4=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),Bu="/RKS-lab-notes/assets/012_001-Cck3Ef7L.png",Iu="/RKS-lab-notes/assets/012_002-lLue8aVD.png",zu="/RKS-lab-notes/assets/012_003-CJbqdFRS.png",Eu="/RKS-lab-notes/assets/012_004-Ok2Zs75T.png",Pu="/RKS-lab-notes/assets/012_005-D3tQRP9d.png",Ru="/RKS-lab-notes/assets/012_006-CNORRH3R.png",ju="/RKS-lab-notes/assets/012_007-LGuLcO-f.png",H4={id:"RK-2026-012",title:"NCBI Basic Local Alignment Search Tool (BLAST): Methodologies, Interface Dynamics, and Result Interpretation",date:"2026-01-14",tags:["#BLASTTool #bioinformatics"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`


<article>
<div class="retro-container"
  style="text-align: center; margin-bottom: 20px;"
>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSejX5k3bS8bHnqdqcAT9LuYep4UPJsSvptY3q87S9YG8NBvtA/viewform?usp=publish-editor" class="retro-button">
    Check your understanding
  </a>
</div>


<article>
<h2>1. Introduction: Why Sequence Alignment Matters to Biologists</h2>
<p>
In modern biology, discovering a new DNA or protein sequence is just the beginning. On its own, a sequence is just a string of letters; its true <strong>biological meaning</strong> comes from comparing it to what we already know. The <strong>Basic Local Alignment Search Tool (BLAST)</strong> is the essential bridge that connects your unknown sequence to the vast library of global biological knowledge.
</p>
<p>
Think of BLAST as a specialized search engine. It allows you to trace evolutionary history, identify the function of an unknown gene, and find similar structures in different species. By understanding the logic behind the tool, you can move beyond "pushing buttons" and start making precise biological discoveries.
</p>


<h3>1.1 How BLAST Thinks: Local vs. Global Alignment</h3>
<p>
To get the best results, it is important to understand how BLAST looks at your sequences. In bioinformatics, there are two main ways to compare sequences:
</p>

<table class="science-table" data-id="alignment-comparison">
<caption>Table 1: Comparing Alignment Strategies</caption>
<thead>
<tr>
<th>Alignment Type</th>
<th>How it Works</th>
<th>Biological Use Case</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Global</strong></td>
<td>Tries to match the sequences from the very first letter to the very last.</td>
<td>Comparing two very similar proteins or genes of the same length.</td>
</tr>
<tr>
<td><strong>Local (BLAST)</strong></td>
<td>Looks for "islands" of high similarity, even if the rest of the sequence is totally different.</td>
<td>Finding a conserved functional part (like a binding site) inside a large, complex protein.</td>
</tr>
</tbody>
</table>

<p>
Because BLAST uses <strong>local alignment</strong>, it is incredibly powerful for biologists for three reasons:
</p>
<ul>
<li>
<strong>Finding Specific Domains:</strong> You might find a match for a small "active site" (e.g., a kinase domain) even if the rest of the protein has evolved into something entirely different.
</li>
<li>
<strong>Handling Fragmented Data:</strong> If your sequence has gaps or regions that don't match, BLAST can still show you the pieces that <em>do</em> match as separate blocks.
</li>
<li>
<strong>Speed:</strong> By focusing on these "seeds" of similarity rather than the whole sequence at once, BLAST can scan billions of sequences in seconds.
</li>
</ul>


<h3>1.2 The Growing NCBI Ecosystem</h3>
<p>
BLAST isn't just a single tool; it is part of a massive network at the <strong>National Center for Biotechnology Information (NCBI)</strong>. When you run a search, you aren't just getting a list of names; you are connecting to a web of data including:
</p>
<ul>
<li><strong>Taxonomy:</strong> What species does this sequence belong to?</li>
<li><strong>Gene:</strong> What is the known function of this gene in other organisms?</li>
<li><strong>SRA:</strong> Are there raw sequencing runs where this gene appears?</li>
</ul>
<blockquote>
<strong>Note for Researchers:</strong> As of 2024, NCBI has updated its default databases (like <em>core_nt</em>) to handle the massive influx of new genomic data. Staying aware of these changes ensures your research remains accurate and reproducible.
</blockquote>
</article>

<article>
<h2>2. The BLAST Program Suite: Choosing Your Search Engine</h2>
<p>
The most critical decision you will make is choosing the right version of BLAST for your data. Think of this like choosing the right lens for a microscope: one lens might be perfect for looking at a whole tissue sample, while another is needed to see individual cells. Using the wrong program can result in a "no hits found" message, even if a related sequence exists in the database.
</p>

      <figure class="science-figure" data-id="Figure 12.1: " data-clean-src="${Bu}">
      <img src="${Bu}" alt="Blast Home page" />
      <figcaption>Major <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi">NCBI BLAST variants</a> available for different search purposes.</figcaption>
    </figure>



<article>
<h2>The BLAST Strategy: From "Seeds" to Alignments</h2>
<p>
BLAST doesn't attempt to align your entire sequence at once. Because databases are massive, doing a letter-by-letter comparison would take hours. Instead, BLAST uses a "Heuristic" approach—a shortcut that finds small, perfect matches first and then builds the full alignment from there.
</p>

<div class="algorithm-breakdown">
<h3>Step 1: Breaking the Query into "Words"</h3>
<p>
The algorithm first chops your query sequence into small, overlapping fragments called <strong>Words</strong> (the length is determined by your <em>Word Size</em> setting).
</p>
<div class="code-visual">
<strong>Query:</strong> <code style="color: blue;">ATGCATGC</code>




<strong>Words (W=3):</strong> <code>ATG</code>, <code>TGC</code>, <code>GCA</code>, <code>CAT</code>...
</div>

<h3>Step 2: Finding a Perfect "Seed" Match</h3>
<p>
  BLAST scans the database for an exact match to any of these words. This is called the <strong>Seeding phase</strong>. An alignment is only initiated if a perfect match (a "hit") is found.
</p>
<div class="code-visual">
  <strong>Word:</strong> <code style="color: green;">GCA</code><br>
  <strong>Database Subject:</strong> <code>...TTAG<span style="background-color: #d4edda; color: green; font-weight: bold;">GCA</span>TTAC...</code><br>
  <small><em>*Match Identified! This becomes the anchor for the next step.*</em></small>
</div>

<h3>Step 3: Extension (Building the HSP)</h3>
<p>
  Once a seed is planted, BLAST tries to extend the match in both directions. It continues as long as the score increases. If the similarity drops off too much, the extension stops. The resulting segment is called a <strong>High-Scoring Segment Pair (HSP)</strong>.
</p>



<div class="code-visual" style="font-family: monospace;">
  <div style="margin-left: 20px;">
    &nbsp;&nbsp;&nbsp;&nbsp;&leftarrow; <strong>Extension</strong> &rightarrow;<br>
    Query: <span style="color: gray;">AT</span><span style="color: green; border-bottom: 2px solid green;">GCATG</span><span style="color: gray;">C</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|||||<br>
    Subj: <span style="color: gray;">TT</span><span style="color: green; border-bottom: 2px solid green;">GCATG</span><span style="color: gray;">A</span>
  </div>
</div>


</div>

<table class="science-table" data-id="word-size-impact">
<caption>Table 11: Biological Impact of Word Size Configuration</caption>
<thead>
<tr>
<th>Action</th>
<th>Biological Result</th>
<th>Trade-off</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Decrease W</strong></td>
<td>Higher sensitivity; catches tiny, distant evolutionary "fingerprints".</td>
<td>Slower; more random "noise" hits.</td>
</tr>
<tr>
<td><strong>Increase W</strong></td>
<td>Higher speed; identifies nearly identical genes quickly.</td>
<td>Less sensitive; may miss relatives in different species.</td>
</tr>
</tbody>
</table>
</article>


<h3>2.1 Nucleotide BLAST (blastn): DNA-to-DNA Comparison</h3>
<p>
The <strong>blastn</strong> suite is used when you have a DNA or RNA sequence and want to find similar genetic material in the database. Depending on how closely related you expect the sequences to be, you must choose between three specific "flavors" of the tool.
</p>
    <figure class="science-figure" data-id="Figure 12.2: " data-clean-src="${Iu}"> 
    <img src="${Iu}" alt="NCBI Standard Nucleotide BLAST Search Interface" /> 
    <figcaption>The <strong>Standard Nucleotide BLAST (blastn)</strong> input interface highlighting three primary configuration zones: <strong>(A) Enter Query Sequence</strong> for inputting FASTA data or accession numbers, <strong>(B) Choose Search Set</strong> for selecting target databases like <em>core_nt</em>, and <strong>(C) Program Selection</strong> to optimize the algorithm for highly similar (megablast) or more dissimilar sequences.</figcaption> 
    </figure>

<h4>2.1.1 Megablast: For "Near-Perfect" Matches</h4>
<p>
This is the default setting on the NCBI website. It is incredibly fast and designed to find sequences that are nearly identical.
</p>
<ul>
<li><strong>The "Word Size" Concept:</strong> Megablast looks for a "seed" of 28 perfectly matching DNA letters before it even considers a sequence a potential match.</li>
<li><strong>When to Use It:</strong>
<ul>
<li><strong>Species ID:</strong> You have a sequence and want to confirm it belongs to a specific bacterium or virus.</li>
<li><strong>Mapping:</strong> You want to find exactly where a specific piece of mRNA sits on a genome.</li>
<li><strong>Cleaning Data:</strong> Checking if your sample is contaminated with common lab DNA (like cloning vectors).</li>
</ul>
</li>
<li><strong>The Limitation:</strong> Because it requires such a long, perfect match, it will often fail to find matches in different species (e.g., comparing a human gene to a mouse gene).</li>
</ul>

<h4>2.1.2 Discontiguous Megablast: For Cross-Species Searches</h4>
<p>
If you are looking for a gene in a different species, standard Megablast is too "picky." This version is smarter about how evolution works in <strong>coding regions</strong>.
</p>
<ul>
<li><strong>Biological Strategy:</strong> In the genetic code, the third letter of a codon (the "wobble" position) can often change without changing the resulting amino acid. Discontiguous Megablast ignores these "wobble" positions during its initial search.</li>
<li><strong>When to Use It:</strong> Use this when searching for the same gene across different species (e.g., looking for a zebrafish version of a human protein-coding gene). It is the best balance between speed and sensitivity for evolutionary biology.</li>
</ul>

<h4>2.1.3 Standard blastn: For Short or Distant Sequences</h4>
<p>
This is the most sensitive—but slowest—nucleotide tool.
</p>
<ul>
<li><strong>The Strategy:</strong> It uses a very small "word size" (usually 11 letters, but can be as low as 7). This means it can pick up much shorter or more scrambled matches.</li>
<li><strong>When to Use It:</strong>
<ul>
<li><strong>Short Queries:</strong> Essential if you are checking PCR primers or small DNA probes (which are often only 20 letters long).</li>
<li><strong>Non-coding DNA:</strong> Finding regulatory elements or "junk" DNA that doesn't follow the codon rules used by Discontiguous Megablast.</li>
</ul>
</li>
</ul>

<table class="science-table" data-id="nucleotide-blast-guide">
<caption>Table 2: Selecting the Right Nucleotide BLAST Tool</caption>
<thead>
<tr>
<th>Program</th>
<th>Best for...</th>
<th>Required "Seed" Match</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Megablast</strong></td>
<td>Identifying the same species / high similarity.</td>
<td>28 matching bases (Contiguous)</td>
</tr>
<tr>
<td><strong>Discontiguous Megablast</strong></td>
<td>Finding the same gene in different species.</td>
<td>Template of matches (Ignores "wobble")</td>
</tr>
<tr>
<td><strong>Standard blastn</strong></td>
<td>Short primers or very distantly related DNA.</td>
<td>11 or 7 matching bases</td>
</tr>
</tbody>
</table>
</article>

<article>
<h2>2.2 The Protein BLAST Suite (blastp): Analyzing Function and Form</h2>
  <figure class="science-figure" data-id="Figure 12.3: " data-clean-src="${zu}"> <img src=${zu} alt="NCBI Standard Protein BLAST Search Interface" /> 
  <figcaption> The <strong>Standard Protein BLAST (blastp)</strong> interface. Note the <strong>Program Selection</strong> section allows you to choose between standard <em>blastp</em> or the iterative <em>PSI-BLAST</em> for finding more distant evolutionary relatives.</figcaption> </figure>

<p>
Proteins are the "workhorses" of the cell. While DNA is the blueprint, proteins perform the actual biological functions. Because proteins are so vital, their sequences tend to stay more similar over millions of years of evolution than the DNA that encodes them.
</p>
<p>
If you want to find out what an unknown gene does, searching its <strong>protein sequence</strong> is often much more successful than searching its DNA sequence.
</p>

<table class="science-table" data-id="protein-blast-suite">
<caption>Table 3: Protein BLAST (blastp) Algorithms</caption>
<thead>
<tr>
<th>Algorithm</th>
<th>Best Use Case</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Standard blastp</strong></td>
<td><strong>General Purpose:</strong> Finding known relatives of your protein to infer its function or name.</td>
</tr>
<tr>
<td><strong>PSI-BLAST</strong></td>
<td><strong>Distant Relatives:</strong> An "iterative" search. It learns from its first results to find very distant evolutionary cousins that a normal search would miss.</td>
</tr>
</tbody>
</table>

<hr>

<h2>2.3 The Translated BLAST Suite: Bridging DNA and Protein</h2>
<p>
Sometimes you have a DNA sequence, but you want to search it as if it were a protein. Or, you have a protein and want to find the DNA sequence that encodes it. This requires <strong>translation</strong>. Since we don't always know where a gene starts or which strand it is on, BLAST automatically checks all <strong>six possible reading frames</strong>.
</p>

<h3>2.3.1 blastx: From DNA Query to Protein Database</h3>
<p>
You have <strong>DNA</strong>, but you search against a <strong>Protein</strong> database.
</p>
<ul>
<li><strong>The Biological Goal:</strong> Identifying what protein a piece of raw genomic DNA or an uncharacterized transcript might produce.</li>
<li><strong>Why it's useful:</strong> It automatically handles "reading frames," so even if you don't know where the gene starts, blastx will find it.</li>
</ul>

<h3>2.3.2 tblastn: From Protein Query to DNA Database</h3>
<p>
You have a <strong>Protein</strong>, but you search against a <strong>DNA</strong> database.
</p>
<ul>
<li><strong>The Biological Goal:</strong> Finding a gene in a genome that hasn't been fully mapped or "annotated" yet.</li>
<li><strong>Example:</strong> You know a human protein and want to find the equivalent gene in a newly sequenced species, like a rare desert plant or a deep-sea microbe.</li>
</ul>

<h3>2.3.3 tblastx: Comparing DNA at the Protein Level</h3>
<p>
Both your <strong>Query</strong> and the <strong>Database</strong> are translated into proteins during the search.
</p>
<ul>
<li><strong>The Biological Goal:</strong> Deep evolutionary "detective work." This is used when two DNA sequences are so different that they don't look alike anymore, but they still encode for similar proteins.</li>
<li><strong>Note:</strong> This is very "heavy" on computer power and is much slower than other methods.</li>
</ul>
</article>


<article>
<h2>3. Configuring the Search: Inputs and Database Selection</h2>
<p>
The success of a BLAST search is decided before you ever click the "BLAST" button. How you format your input and which "library" (database) you choose to search through will determine if you get a precise answer or a mountain of irrelevant data.
</p>


<h3>3.1 Structuring Your Input: FASTA and Identifiers</h3>
<p>
BLAST is flexible with how it accepts data, but using the correct format prevents errors and makes your research more organized.
</p>

<ul>
<li>
<strong>The FASTA Format:</strong> This is the gold standard for sharing biological sequences. It always starts with a <code>&gt;</code> symbol followed by a description line, then the sequence on the lines below.
</li>
<li>
<strong>Accession Numbers:</strong> Instead of pasting a long string of letters, you can use a unique ID (like <em>NM_000518</em>). This is often safer because it ensures you are using the most current, officially recognized version of that sequence.
</li>
<li>
<strong>Query Subrange:</strong> If you have a massive protein but only care about one specific part (like a binding site from amino acid 10 to 50), you can tell BLAST to ignore the rest. This prevents your results from being "cluttered" by matches to common parts of the protein you already know about.
</li>
</ul>


<h3>3.2 The Art of Database Selection</h3>
<p>
NCBI stores billions of sequences. Searching "everything" is often a waste of time and can lead to confusing results. You should pick a database that matches your specific biological question.
</p>

<h4>3.2.1 Nucleotide (DNA/RNA) Databases</h4>
<table class="science-table" data-id="nucleotide-databases">
<caption>Table 4: Key DNA Databases for Biologists</caption>
<thead>
<tr>
<th>Database</th>
<th>When to Use It</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>core_nt</strong></td>
<td><strong>The New Standard:</strong> Faster and cleaner. It removes "clutter" and redundant sequences while keeping the important diversity you need.</td>
</tr>
<tr>
<td><strong>nt (Nucleotide Collection)</strong></td>
<td><strong>The Archive:</strong> Use this when you can't find your sequence in <em>core_nt</em>. It is the most comprehensive but contains a lot of repetitive data.</td>
</tr>
<tr>
<td><strong>RefSeq Representative Genomes</strong></td>
<td><strong>Quality Control:</strong> Use this for <strong>primer design</strong>. It only includes high-quality, "official" versions of genomes.</td>
</tr>
<tr>
<td><strong>refseq_rna</strong></td>
<td><strong>Gene Expression:</strong> Best for looking at mRNA or transcripts without the "noise" of non-coding genomic DNA.</td>
</tr>
</tbody>
</table>

<h4>3.2.2 Protein Databases</h4>
<table class="science-table" data-id="protein-databases">
<caption>Table 5: Key Protein Databases for Biologists</caption>
<thead>
<tr>
<th>Database</th>
<th>When to Use It</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>nr (Non-redundant)</strong></td>
<td><strong>Discovery:</strong> The largest collection. Use this if you want to find every possible relative of your protein.</td>
</tr>
<tr>
<td><strong>Swiss-Prot</strong></td>
<td><strong>Functional Certainty:</strong> These entries are <strong>manually reviewed by humans</strong>. A hit here gives you the most reliable information about what a protein actually does.</td>
</tr>
<tr>
<td><strong>pdb (Protein Data Bank)</strong></td>
<td><strong>Structural Biology:</strong> Only contains sequences from proteins where the 3D shape has been solved (e.g., via X-ray crystallography). Essential if you want to build a 3D model.</td>
</tr>
</tbody>
</table>
</article>


<article>
<h2>4. Deep Dive: Tuning the BLAST Engine</h2>
<p>
While the default settings work for most searches, an expert biologist knows how to "tune" the algorithm to find hidden details. By clicking the <strong>"Algorithm parameters"</strong> link at the bottom of the NCBI page, you gain control over how BLAST actually looks for similarities.
</p>



<h3>4.1 Word Size: The Sensitivity Knob</h3>
<p>
BLAST doesn't start by looking at your entire sequence. Instead, it looks for a short, perfect match called a <strong>"Word."</strong> Once it finds this "seed," it tries to extend the match in both directions.
</p>

<ul>
<li><strong>Small Word Size:</strong> Like a high-power microscope. It picks up tiny, subtle matches but takes longer and can be "noisy." (Example: Use  for finding short DNA primers).</li>
<li><strong>Large Word Size:</strong> Like a telescope. It is very fast and only finds strong, obvious matches. (Example:  for finding the exact same gene in the same species).</li>
</ul>



<h3>4.2 Scoring Matrices: The Rules of Evolution</h3>
<p>
In protein searches, not all mismatches are equal. Replacing a <strong>Leucine</strong> with an <strong>Isoleucine</strong> is "cheaper" biologically than replacing it with a <strong>Tryptophan</strong>, because Leucine and Isoleucine have similar chemical properties.
</p>
<p>
BLAST uses a <strong>Substitution Matrix</strong> to give you a score based on how likely a change was to happen in nature.
</p>

<table class="science-table" data-id="scoring-matrices">
<caption>Table 6: Choosing the Right Protein Matrix</caption>
<thead>
<tr>
<th>Matrix</th>
<th>Biological Context</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>BLOSUM62 (Default)</strong></td>
<td>The "Goldilocks" matrix. Good for most searches, from medium to distant relatives.</td>
</tr>
<tr>
<td><strong>BLOSUM45</strong></td>
<td><strong>Deep Evolution:</strong> Use this for very distant relatives (e.g., Human vs. Yeast). It is more "forgiving" of mutations.</td>
</tr>
<tr>
<td><strong>BLOSUM80 / PAM30</strong></td>
<td><strong>Close Relatives:</strong> Best for comparing very similar sequences or very short peptides.</td>
</tr>
</tbody>
</table>


<article>
<h2>5. Interpreting BLAST Results: Metrics and Visualization</h2>

<figure class="science-figure" data-id="Figure 12.4" data-clean-src="${Eu}">
<img src="${Eu}" alt="BLAST Results Overview" />
<figcaption> An example BLAST results page highlighting key sections: <strong>(1) Graphic Summary</strong> for a visual overview of matches, <strong>(2) Descriptions Table</strong> listing key statistics for each hit, and <strong>(3) Alignments Section</strong> showing detailed residue-by-residue comparisons.</figcaption>
</figure>
<p>
The BLAST results page can feel overwhelming at first glance. However, once you know what to look for, it provides a clear, visual story of how your sequence relates to the rest of the biological world.
</p>


<h3>5.1 The Graphic Summary: A Bird's-Eye View</h3>
<p>
At the top of your results, you will see a series of colored bars. This is a visual map showing where—and how well—different sequences from the database align with your query.
</p>

<figure class="science-figure" data-id="Figure 12.5" data-clean-src="${Pu}">
<img src="${Pu}" alt="BLAST Graphic Summary" />
<figcaption> An example of a BLAST <strong>Graphic Summary</strong>, illustrating multiple sequence alignments with varying degrees of similarity to the query sequence. The color coding indicates the strength of each match based on Bit Score.</figcaption>
</figure>


<ul>
<li>
<strong>The Horizontal Bars:</strong> Each bar represents a different sequence found in the database. The length of the bar shows how much of your query was covered by that match.
</li>
<li>
<strong>The Color Code:</strong> The color tells you the <strong>Bit Score</strong>, which is a measure of the strength of the match.
</li>
</ul>

<table class="science-table" data-id="blast-color-codes">
<caption>Table 7: Understanding BLAST Result Colors</caption>
<thead>
<tr>
<th>Color</th>
<th>Bit Score</th>
<th>Biological Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td style="color: red; font-weight: bold;">Red</td>
<td>&gt; 200</td>
<td><strong>Excellent match:</strong> Very likely a true relative or the exact same gene.</td>
</tr>
<tr>
<td style="color: #ff69b4; font-weight: bold;">Pink / Green</td>
<td>50 - 200</td>
<td><strong>Moderate match:</strong> Could be a distant relative or a conserved functional domain.</td>
</tr>
<tr>
<td style="color: blue; font-weight: bold;">Blue / Black</td>
<td>&lt; 50</td>
<td><strong>Weak match:</strong> Often "background noise" or random similarity. Proceed with caution.</td>
</tr>
</tbody>
</table>

</article>


<article>

<article>
<h2>5.2 The Descriptions Table: Making Sense of the Numbers</h2>

<figure class="science-figure" data-id="Figure 12.6" data-clean-src="${Ru}">
<img src="${Ru}" alt="BLAST Descriptions Table for Komagataeibacter rhaeticus" />
<figcaption> Real-world BLAST results for a 16S ribosomal RNA gene search. The table ranks hits based on statistical significance, starting with the most certain matches at the top.</figcaption>
</figure>

<p>
Below the visual summary, BLAST provides a detailed table full of statistics. To a biologist, these numbers are the "evidence" for any claim of homology (shared ancestry). You must look at these metrics together—never rely on just one number to draw a conclusion.
</p>

<h3>Max Score: The Quality of the Best Match</h3> <p> The <strong>Max Score</strong> (or Bit Score) is a measurement of the quality of the single best matching segment between your query and the database sequence. Unlike "raw scores," the Bit Score is normalized, meaning you can compare it across different searches and even different databases. </p> <ul> <li><strong>Biological Insight:</strong> Higher scores indicate better alignments. In <strong>Figure 12.6</strong>, the top hit shows a <strong>Max Score of 1565</strong>. For biologists, a score this high is a definitive indicator of high-quality sequence similarity.</li> </ul>

<h3>Total Score: Identifying Fragmented Hits</h3> <p> The <strong>Total Score</strong> is the sum of the scores of every separate matching segment (HSPs) found in a single database entry. </p> <ul> <li><strong>The Gap Clue:</strong> If the Total Score is significantly higher than the Max Score, it tells you the match is split into multiple pieces. </li> <li><strong>Biological Context:</strong> In <strong>Figure 12.6</strong>, the 6th hit (<em>SLAM-JS1B chromosome</em>) has a <strong>Total Score (4557)</strong> that is nearly triple its <strong>Max Score (1519)</strong>. This confirms that the query appears in the genome in multiple locations—perhaps as multiple copies of the 16S rRNA gene or split across different exons.</li> </ul>

<h3>Query Cover: Avoiding the "Domain Trap"</h3> <p> <strong>Query Cover</strong> tells you what percentage of your input sequence actually matched the database hit. </p> <ul> <li><strong>The Warning:</strong> Do not be fooled by a "100% Identity" score if the Query Cover is only 2%. This usually means you’ve found a tiny conserved motif or a repeat sequence, not a homologous gene.</li> <li><strong>Biological Context:</strong> In our example, most hits show <strong>99% to 100% coverage</strong>. This gives us high confidence that we have found the complete gene in these organisms, not just a small fragment.</li> </ul>

<h3>E-value: The Gold Standard of Significance</h3> <p> The <strong>Expect Value (E-value)</strong> describes the number of hits one can "expect" to see by pure chance when searching a database of a particular size. It is the most critical number for determining if a hit is biologically real or just a random coincidence. </p> <ul> <li><strong>E = 0.0:</strong> This is the "Gold Standard" seen in <strong>Figure 12.6</strong>. It means the match is so strong that the probability of it occurring by chance is effectively zero.</li> <li><strong>E &lt; 1e-5:</strong> Standard cut-off for scientific significance. These are considered reliable matches for inferring function.</li> <li><strong>E between 0.01 and 1:</strong> "The Gray Zone." These hits require manual inspection. They could be very distant relatives or just random "noise."</li> <li><strong>E &gt; 1:</strong> Generally considered a random fluke. If your E-value is 10, it means you could expect to find 10 matches this good just by searching a database of random letters.</li> </ul>

<h3>Percent Identity: Similarity vs. Homology</h3> <p> <strong>Percent Identity</strong> measures the exact letter-for-letter matches in the aligned region. </p> <ul> <li><strong>Biological Caution:</strong> Identity is not the same as Homology (shared ancestry). In proteins, two sequences can be only 25% identical but still have the exact same structure and function.</li> <li><strong>Figure 12.6 Insight:</strong> While the top hit is <strong>100.00% identical</strong>, the 11th hit is <strong>99.28% identical</strong>. Both are biologically identical for most research purposes. Always prioritize a low E-value over a high identity percentage when hunting for distant relatives.</li> </ul>

<h3>Accession and Length: Connecting to the Source</h3> <p> The final columns provide the <strong>Accession Number</strong> (a permanent ID for the sequence) and the <strong>Subject Length</strong> (the total size of the sequence in the database). </p> <ul> <li><strong>Insight:</strong> If your query is 1,500 bp long but the subject length is 3,000,000 bp (like the <em>Komagataeibacter</em> chromosome in the example), it clearly shows your gene is just a tiny part of a much larger genome.</li> </ul> </article>

<h3>A Special Note on E-values for Short Sequences</h3>
<p>
If you are BLASTing a very short sequence, like a <strong>PCR primer</strong> (20 bases long), your E-value will often look "bad" or high. This is normal! Because the sequence is so short, the math says it's statistically possible to find that same 20-base string by accident in a massive genome. In this specific case, look at <strong>Percent Identity</strong> and <strong>Query Cover</strong> instead of obsessing over a low E-value.
</p>
</article>

</article>

<article>
<h3>5.3 The Alignments Section: Reading the Residues</h3>
<p>
This is where you see the "molecular handshake"—the letter-by-letter comparison between your query and the database subject. For a biologist, this section reveals the specific mutations that might change a protein's function.
</p>

<figure class="science-figure" data-id="Figure 12.7" data-clean-src="${ju}">
<img src="${ju}" alt="BLAST Alignment Section" />
<figcaption> Example BLAST alignment showing the detailed comparison between the query sequence and a database subject. Key features include matches, mismatches, gaps, and the translated protein sequence.</figcaption>
</figure>

<ul>
<li>
<strong>Strand Orientation (Plus/Plus vs. Plus/Minus):</strong>
In DNA searches, your sequence might match the database in the forward direction (Plus/Plus) or as a reverse complement (Plus/Minus).
<blockquote>
<strong>Biological Context:</strong> If you see "Plus/Minus," it simply means the gene you found is located on the opposite strand of the chromosome. You don't need to manually flip your sequence; BLAST does the math for you.
</blockquote>
</li>
<li>
<strong>The CDS Feature (Coding Sequence):</strong>
You can turn this on in the "Formatting Options." It shows the protein translation directly underneath the DNA letters.
<ul>
<li><strong>Silent Mutations:</strong> You see a DNA letter change, but the amino acid remains the same. The protein's function is likely unchanged.</li>
<li><strong>Missense Mutations:</strong> The DNA change results in a different amino acid (e.g., a Leucine changing to a Proline). This is a red flag for a potential change in protein folding or activity.</li>
</ul>
</li>
</ul>



<h3>5.4 The Taxonomy Tab: Your Contamination Detective</h3>
<p>
Before you celebrate a new discovery, check the <strong>Taxonomy tab</strong>. It organizes your results by the tree of life, which is a powerful way to verify your data's "purity."
</p>

<table class="science-table" data-id="taxonomy-use-cases">
<caption>Table 9: Using Taxonomy for Quality Control</caption>
<thead>
<tr>
<th>Observation</th>
<th>Biological Conclusion</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Expected species matches.</strong></td>
<td><strong>Success:</strong> Your sample is what you thought it was.</td>
</tr>
<tr>
<td><strong>Top hits are all Bacteria/Fungi.</strong></td>
<td><strong>Contamination:</strong> If you were studying a human sample, your DNA is likely contaminated with microbes.</td>
</tr>
<tr>
<td><strong>Hits in distant, unrelated groups.</strong></td>
<td><strong>Evolutionary Insight:</strong> This could suggest a "Horizontal Gene Transfer" (where a gene jumps from one species to another).</td>
</tr>
</tbody>
</table>

</article>

<hr>
<article>
<h2>6. Specialized BLAST Applications</h2>
<p>
While the standard BLAST interface is the most common, NCBI has built specialized tools that combine the BLAST algorithm with extra logic for specific biological tasks. These tools save you time by performing "sanity checks" that a general search would miss.
</p>


<h3>6.1 Primer-BLAST: Designing "Fail-Proof" PCR Assays</h3>
<p>
If you are doing RT-qPCR or cloning, <strong>Primer-BLAST</strong> is your best friend. It doesn't just design primers; it checks them against the entire genome to make sure they won't bind to the wrong place.
</p>

<ul>
<li>
<strong>Exon Junction Spanning:</strong> This is the most powerful setting for biologists. It ensures your primers only work on <strong>cDNA (mRNA)</strong> and not on contaminating <strong>Genomic DNA</strong>. By placing one primer across the boundary where two exons join, the primer cannot bind to genomic DNA because the large intron is in the way.
</li>
<li>
<strong>Specificity Check:</strong> The tool automatically runs a BLAST search against <strong>RefSeq Representative Genomes</strong> to ensure your primers aren't accidentally matching a different gene in the same organism.
</li>
</ul>



<h3>6.2 IgBLAST: Decoding the Immune System</h3>
<p>
Antibodies (Immunoglobulins) are formed through a complex "mix-and-match" process called <strong>V(D)J recombination</strong>. Standard BLAST cannot easily tell where one segment ends and another begins, but <strong>IgBLAST</strong> is built specifically for this.
</p>

<ul>
<li><strong>Gene Identification:</strong> It tells you exactly which V, D, and J germline genes were used to build your antibody.</li>
<li><strong>CDR Mapping:</strong> It automatically identifies the <strong>Complementarity Determining Regions (CDRs)</strong>—the specific loops of the protein that actually grab onto the virus or bacteria.</li>
<li><strong>Specialized Libraries:</strong> Instead of searching everything, it searches curated germline databases like <strong>IMGT</strong>.</li>
</ul>


<h3>6.3 VecScreen: Cleaning Your Sequences</h3>
<p>
Before you publish a sequence or submit it to GenBank, you must make sure it doesn't contain "leftovers" from the lab, like pieces of the <strong>plasmid</strong> or <strong>adapters</strong> used during sequencing.
</p>
<p>
<strong>VecScreen</strong> searches your sequence against <strong>UniVec</strong>, a database of all known cloning vectors.
</p>
<blockquote>
<strong>Biologist's Checklist:</strong> If VecScreen shows a "Strong Match," you must <strong>trim</strong> that part of the sequence. If you don't, your analysis will be based on man-made DNA rather than the organism's actual biology.
</blockquote>



<h3>6.4 Magic-BLAST: BLAST for Big Data</h3>
<p>
Standard BLAST is meant for one or two sequences at a time. <strong>Magic-BLAST</strong> is designed for <strong>Next-Generation Sequencing (NGS)</strong>, where you might have 50 million short reads from an Illumina run.
</p>
<ul>
<li><strong>RNA-Seq Friendly:</strong> It is optimized to recognize when a short sequence read spans across two different exons (spliced reads).</li>
<li><strong>SRA Integration:</strong> You can use it to search the <strong>Sequence Read Archive (SRA)</strong> directly, allowing you to "mine" raw data from other researchers' experiments to see if your gene of interest is present in their samples.</li>
</ul>

<table class="science-table" data-id="specialized-blast-summary">
<caption>Table 10: Which Specialized BLAST Should You Use?</caption>
<thead>
<tr>
<th>Tool</th>
<th>Biological Problem</th>
<th>Key Advantage</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Primer-BLAST</strong></td>
<td>Designing PCR primers.</td>
<td>Prevents off-target binding and genomic DNA noise.</td>
</tr>
<tr>
<td><strong>IgBLAST</strong></td>
<td>Analyzing antibodies or T-cell receptors.</td>
<td>Identifies V(D)J segments and CDR loops.</td>
</tr>
<tr>
<td><strong>VecScreen</strong></td>
<td>Preparing a sequence for submission.</td>
<td>Finds and helps remove lab-created contamination.</td>
</tr>
<tr>
<td><strong>Magic-BLAST</strong></td>
<td>Mapping millions of short NGS reads.</td>
<td>Handles large datasets and spliced mRNA reads.</td>
</tr>
</tbody>
</table>
</article>


<h2>Works cited</h2>
<ul style="list-style-type:none">

<li></li>1. BLAST QuickStart - Comparative Genomics - NCBI Bookshelf - NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/books/NBK1734/">https://www.ncbi.nlm.nih.gov/books/NBK1734/</a></li>
<li>2. BLAST: at the core of a powerful and diverse set of sequence analysis tools - NIH, accessed on January 20, 2026, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC441573/">https://pmc.ncbi.nlm.nih.gov/articles/PMC441573/</a></li>
<li>3. BLAST Glossary - BLAST® Help - NCBI Bookshelf - NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/books/NBK62051/">https://www.ncbi.nlm.nih.gov/books/NBK62051/</a></li>
<li>4. A Guide to BLAST - CZ ID Help Center, accessed on January 20, 2026, <a href="https://chanzuckerberg.zendesk.com/hc/en-us/articles/360050963352-A-Guide-to-BLAST">https://chanzuckerberg.zendesk.com/hc/en-us/articles/360050963352-A-Guide-to-BLAST</a></li>
<li>5. How do we interpret the max and total score of two sequences in BLASTN? - Reddit, accessed on January 20, 2026, <a href="https://www.reddit.com/r/bioinformatics/comments/194zghy/how_do_we_interpret_the_max_and_total_score_of/">https://www.reddit.com/r/bioinformatics/comments/194zghy/how_do_we_interpret_the_max_and_total_score_of/</a></li>
<li>6. BLAST: Basic Local Alignment Search Tool, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi">https://blast.ncbi.nlm.nih.gov/Blast.cgi</a></li>
<li>7. Home - SRA - NCBI - NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/sra">https://www.ncbi.nlm.nih.gov/sra</a></li>
<li>8. 2024 BLAST NEWS — BlastNews 0.1.1 documentation - NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-news/2024-BLAST-News.html">https://blast.ncbi.nlm.nih.gov/doc/blast-news/2024-BLAST-News.html</a></li>
<li>9. Nucleotide BLAST (blastn) Archives - NCBI Insights - NIH, accessed on January 20, 2026, <a href="https://ncbiinsights.ncbi.nlm.nih.gov/tag/blastn/">https://ncbiinsights.ncbi.nlm.nih.gov/tag/blastn/</a></li>
<li>10. What is the difference between blastn and tblastx? - Quora, accessed on January 20, 2026, <a href="https://www.quora.com/What-is-the-difference-between-blastn-and-tblastx">https://www.quora.com/What-is-the-difference-between-blastn-and-tblastx</a></li>
<li>11. BLASTN, TBLASTX, BLASTP, TBLASTN, BLASTX - which should I choose? - SequenceServer, accessed on January 20, 2026, <a href="https://sequenceserver.com/blog/choosing-blast-algorithms/">https://sequenceserver.com/blog/choosing-blast-algorithms/</a></li>
<li>12. Nucleotide BLAST: Search nucleotide databases using a nucleotide query - NCBI, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/geo/query/blast.html">https://www.ncbi.nlm.nih.gov/geo/query/blast.html</a></li>
<li>13. BLAST Program Selection Guide - NCBI, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/blast/BLAST_guide.pdf">https://www.ncbi.nlm.nih.gov/blast/BLAST_guide.pdf</a></li>
<li>14. Frequently Asked Questions — BLASTHelp documentation - NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-help/FAQ.html">https://blast.ncbi.nlm.nih.gov/doc/blast-help/FAQ.html</a></li>
<li>15. search protein databases using - BLAST - NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Proteins">https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Proteins</a></li>
<li>16. BLAST Search Parameters — BlastTopics 0.1.1 documentation - NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-topics/blastsearchparams.html">https://blast.ncbi.nlm.nih.gov/doc/blast-topics/blastsearchparams.html</a></li>
<li>17. Different types of BLAST : r/bioinformatics - Reddit, accessed on January 20, 2026, <a href="https://www.reddit.com/r/bioinformatics/comments/dof20s/different_types_of_blast/">https://www.reddit.com/r/bioinformatics/comments/dof20s/different_types_of_blast/</a></li>
<li>18. Which BLAST program should I use?, accessed on January 20, 2026, <a href="https://resources.qiagenbioinformatics.com/manuals/clcgenomicsworkbench/650/Which_BLAST_program_should_I_use.html">https://resources.qiagenbioinformatics.com/manuals/clcgenomicsworkbench/650/Which_BLAST_program_should_I_use.html</a></li>
<li>19. BLAST Reference Manual Pages, accessed on January 20, 2026, <a href="http://www.genebee.msu.su/blast/blast_help.html">http://www.genebee.msu.su/blast/blast_help.html</a></li>
<li>20. IgBlast tool - NCBI - NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/igblast/">https://www.ncbi.nlm.nih.gov/igblast/</a></li>
<li>21. Query Input and database selection — BlastTopics 0.1.1 documentation - NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-topics/">https://blast.ncbi.nlm.nih.gov/doc/blast-topics/</a></li>
<li>22. NCBI BLAST: a better web interface | Nucleic Acids Research - Oxford Academic, accessed on January 20, 2026, <a href="https://academic.oup.com/nar/article/36/suppl_2/W5/2505810">https://academic.oup.com/nar/article/36/suppl_2/W5/2505810</a></li>
<li>23. BLAST Databases - National Library of Medicine, accessed on January 20, 2026, <a href="https://www.nlm.nih.gov/ncbi/workshops/2023-08_BLAST_evol/databases.html">https://www.nlm.nih.gov/ncbi/workshops/2023-08_BLAST_evol/databases.html</a></li>
<li>24. Get Faster, More Focused Search Results with NCBI's New BLAST Core Nucleotide Database (core_nt), accessed on January 20, 2026, <a href="https://ncbiinsights.ncbi.nlm.nih.gov/2024/07/18/new-blast-core-nucleotide-database/">https://ncbiinsights.ncbi.nlm.nih.gov/2024/07/18/new-blast-core-nucleotide-database/</a></li>
<li>25. BLAST FTP Site - BLAST® Help - NCBI Bookshelf - NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/books/NBK62345/">https://www.ncbi.nlm.nih.gov/books/NBK62345/</a></li>
<li>26. NCBI Replacing Obsolete NCBI Genomes (chromosome) and Removing Human ALU repeat elements (alu_repeats) BLAST databases - NCBI Insights, accessed on January 20, 2026, <a href="https://ncbiinsights.ncbi.nlm.nih.gov/2017/08/09/ncbi-replacing-obsolete-ncbi-genomes-chromosome-and-removing-human-alu-repeat-elements-alu_repeats-blast-databases/">https://ncbiinsights.ncbi.nlm.nih.gov/2017/08/09/ncbi-replacing-obsolete-ncbi-genomes-chromosome-and-removing-human-alu-repeat-elements-alu_repeats-blast-databases/</a></li>
<li>27. Fine-tune your web-based search results with SRA Run Selector - NCBI Insights, accessed on January 20, 2026, <a href="https://ncbiinsights.ncbi.nlm.nih.gov/2015/12/11/fine-tune-your-web-based-search-results-with-sra-run-selector/">https://ncbiinsights.ncbi.nlm.nih.gov/2015/12/11/fine-tune-your-web-based-search-results-with-sra-run-selector/</a></li>
<li>28. What do I do if my blast searches seem to have all the top hits from the same genus or species?, accessed on January 20, 2026, <a href="http://ubwp.buffalo.edu/wnygirp/wp-content/uploads/sites/5/2017/02/Exclude_blast_hits.pdf">http://ubwp.buffalo.edu/wnygirp/wp-content/uploads/sites/5/2017/02/Exclude_blast_hits.pdf</a></li>
<li>29. Which BLAST options should I change? - QIAGEN Bioinformatics Manuals, accessed on January 20, 2026, <a href="https://resources.qiagenbioinformatics.com/manuals/clcgenomicsworkbench/2201/index.php?manual=Which_BLAST_options_should_I_change.html">https://resources.qiagenbioinformatics.com/manuals/clcgenomicsworkbench/2201/index.php?manual=Which_BLAST_options_should_I_change.html</a></li>
<li>30. accessed on January 20, 2026, <a href="https://www.nlm.nih.gov/oet/ed/navigator/blast-ident/index.html#:~:text=Reading%20your%20BLAST%20Results,-2%20of%202&text=Each%20bar%20in%20this%20graph,score%2C%20the%20closer%20the%20alignment.">https://www.nlm.nih.gov/oet/ed/navigator/blast-ident/index.html#:~:text=Reading%20your%20BLAST%20Results,-2%20of%202&text=Each%20bar%20in%20this%20graph,score%2C%20the%20closer%20the%20alignment.</a></li>
<li>31. Result Format Options — BlastTopics 0.1.1 documentation - NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-topics/resultformatoptions.html">https://blast.ncbi.nlm.nih.gov/doc/blast-topics/resultformatoptions.html</a></li>
<li>32. Interpreting BLAST output, accessed on January 20, 2026, <a href="https://bigcat-um.github.io/BLAST-OER/ncbi.html">https://bigcat-um.github.io/BLAST-OER/ncbi.html</a></li>
<li>33. A Small-Group Activity Introducing the Use and Interpretation of BLAST - PMC - NIH, accessed on January 20, 2026, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3867762/">https://pmc.ncbi.nlm.nih.gov/articles/PMC3867762/</a></li>
<li>34. Can someone briefly explain to me what the difference between percentage identity vs query coverage is in BLAST? : r/bioinformatics - Reddit, accessed on January 20, 2026, <a href="https://www.reddit.com/r/bioinformatics/comments/p2vs6i/can_someone_briefly_explain_to_me_what_the/">https://www.reddit.com/r/bioinformatics/comments/p2vs6i/can_someone_briefly_explain_to_me_what_the/</a></li>
<li>35. E-value & Bit-score - Metagenomics wiki, accessed on January 20, 2026, <a href="https://www.metagenomics.wiki/tools/blast/evalue">https://www.metagenomics.wiki/tools/blast/evalue</a></li>
<li>36. How BLAST E-values are calculated and what they mean - SequenceServer, accessed on January 20, 2026, <a href="https://sequenceserver.com/blog/blast-e-value-meaning/">https://sequenceserver.com/blog/blast-e-value-meaning/</a></li>
<li>37. BLAST Statistics: The Expect Value - National Library of Medicine - NIH, accessed on January 20, 2026, <a href="https://www.nlm.nih.gov/ncbi/workshops/2023-08_BLAST_evol/e_value.html">https://www.nlm.nih.gov/ncbi/workshops/2023-08_BLAST_evol/e_value.html</a></li>
<li>38. Which value (Query coverage or % identity) should we consider in BLASTn analysis?, accessed on January 20, 2026, <a href="https://www.researchgate.net/post/Which_value_Query_coverage_or_identity_should_we_consider_in_BLASTn_analysis">https://www.researchgate.net/post/Which_value_Query_coverage_or_identity_should_we_consider_in_BLASTn_analysis</a></li>
<li>39. accessed on January 20, 2026, <a href="https://sequenceserver.com/blog/interpretation-of-blastn-results/#:~:text=BLAST%20uses%20%E2%80%9C%20%2B%20%E2%80%9D%20(%E2%80%9C,information%20about%20the%20BLAST%20strand.">https://sequenceserver.com/blog/interpretation-of-blastn-results/#:~:text=BLAST%20uses%20%E2%80%9C%20%2B%20%E2%80%9D%20(%E2%80%9C,information%20about%20the%20BLAST%20strand.</a></li>
<li>40. Plus/Minus strand in BLASTN : r/bioinformatics - Reddit, accessed on January 20, 2026, <a href="https://www.reddit.com/r/bioinformatics/comments/18vib8l/plusminus_strand_in_blastn/">https://www.reddit.com/r/bioinformatics/comments/18vib8l/plusminus_strand_in_blastn/</a></li>
<li>41. Interpreting BLASTN nucleotide BLAST results - SequenceServer, accessed on January 20, 2026, <a href="https://sequenceserver.com/blog/interpretation-of-blastn-results/">https://sequenceserver.com/blog/interpretation-of-blastn-results/</a></li>
<li>42. How do I interpret Nucleotide BLAST (blastn) pairwise alignments with the CDS feature display? - NLM Support Center, accessed on January 20, 2026, <a href="https://support.nlm.nih.gov/kbArticle/?pn=KA-05225">https://support.nlm.nih.gov/kbArticle/?pn=KA-05225</a></li>
<li>43. Troubleshooting GenBank Submissions: Annotating the Coding Region (CDS), accessed on January 20, 2026, <a href="https://ncbiinsights.ncbi.nlm.nih.gov/2015/10/02/troubleshooting-genbank-submissions-annotating-the-coding-region-cds/">https://ncbiinsights.ncbi.nlm.nih.gov/2015/10/02/troubleshooting-genbank-submissions-annotating-the-coding-region-cds/</a></li>
<li>44. Running NCBI BLAST to Compare Taxonomic IDs, accessed on January 20, 2026, <a href="https://sibarcodenetwork.readthedocs.io/en/latest/BLAST.html">https://sibarcodenetwork.readthedocs.io/en/latest/BLAST.html</a></li>
<li>45. 10. Taxonomy Tab — BlastQuickStartGuide 0.1.1 documentation - NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-quick-start-guide/results_taxonomy.html">https://blast.ncbi.nlm.nih.gov/doc/blast-quick-start-guide/results_taxonomy.html</a></li>
<li>46. Primer designing tool - NCBI - NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/tools/primer-blast/">https://www.ncbi.nlm.nih.gov/tools/primer-blast/</a></li>
<li>47. The Primer-BLAST interface - National Library of Medicine - NIH, accessed on January 20, 2026, <a href="https://www.nlm.nih.gov/ncbi/workshops/2023-09_Primer-BLAST/interface.html">https://www.nlm.nih.gov/ncbi/workshops/2023-09_Primer-BLAST/interface.html</a></li>
<li>48. RIOT—Rapid Immunoglobulin Overview Tool—annotation of nucleotide and amino acid immunoglobulin sequences using an open germline database | Briefings in Bioinformatics | Oxford Academic, accessed on January 20, 2026, <a href="https://academic.oup.com/bib/article/26/1/bbae632/7914577">https://academic.oup.com/bib/article/26/1/bbae632/7914577</a></li>
<li>49. NCBI IgBLAST : How to set up, accessed on January 20, 2026, <a href="https://ncbi.github.io/igblast/cook/How-to-set-up.html">https://ncbi.github.io/igblast/cook/How-to-set-up.html</a></li>
<li>50. About VecScreen - NCBI - NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/tools/vecscreen/about/">https://www.ncbi.nlm.nih.gov/tools/vecscreen/about/</a></li>
<li>51. NCBI News | VecScreen - NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/Web/Newsltr/Fall99/vecscreen.html">https://www.ncbi.nlm.nih.gov/Web/Newsltr/Fall99/vecscreen.html</a></li>
<li>52. Interpretation of VecScreen Results - NCBI - NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/tools/vecscreen/interpretation">https://www.ncbi.nlm.nih.gov/tools/vecscreen/interpretation</a></li>
<li>53. NCBI Magic-BLAST RNA-seq mapping tool, accessed on January 20, 2026, <a href="https://ncbi.github.io/magicblast/">https://ncbi.github.io/magicblast/</a></li>
<li>54. Tutorial on NCBI BLAST, accessed on January 20, 2026, <a href="https://biochem.slu.edu/bchm628/handouts/2013/4_BlastTutorial_2013.pdf">https://biochem.slu.edu/bchm628/handouts/2013/4_BlastTutorial_2013.pdf</a></li>
<li>55. Exercise 3: Why do I get no hits? - National Library of Medicine, accessed on January 20, 2026, <a href="https://www.nlm.nih.gov/ncbi/workshops/2022-10_Basic-Web-BLAST/exercise-3.html">https://www.nlm.nih.gov/ncbi/workshops/2022-10_Basic-Web-BLAST/exercise-3.html</a></li>
<li>56. How do I download sequence records from the web in the NCBI Nucleotide and Protein databases? - NLM Support Center - NIH, accessed on January 20, 2026, <a href="https://support.nlm.nih.gov/kbArticle/?pn=KA-03461">https://support.nlm.nih.gov/kbArticle/?pn=KA-03461</a></li>

</ul>

</article>


  `},_4=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),G4={id:"RK-2026-013",title:"React Dev -> Data-First Architecture: Defining Types for a Calculator App",date:"2025-01-12",tags:["#multipleSequenceAlignment"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`


<article>
    <h2>Phase 2: The Blueprint (Data-First Architecture)</h2>
    <p>We are adopting a <strong>Data-First</strong> approach. Before we draw a single button, we must define exactly what a "Calculator" is. This prevents logic errors later (like trying to divide by a letter).</p>

    <section>
        <h3>Step 1: Create the Definition File</h3>
        <p><strong>File:</strong> <code>src/types/index.ts</code></p>
        <p>Create this file and paste the following code. This acts as the "Constitution" for your application.</p>

        <pre><code>// src/types/index.ts

/* 1. The Valid Operators */
export type Operator = '+' | '-' | '*' | '/' | null;

/* 2. The Calculator's Memory (State) */
export interface CalculatorState {
  currentValue: string;       
  previousValue: string | null; 
  operator: Operator;
}

/* 3. Button Styles (For UI later) */
export type ButtonVariant = 'default' | 'action' | 'featured' | 'danger';

/* 4. The Actions (What can the user DO?) */
export type CalculatorAction = 
  | { type: 'ADD_DIGIT'; payload: string }
  | { type: 'CHOOSE_OPERATION'; payload: Operator }
  | { type: 'CLEAR' }
  | { type: 'DELETE' }
  | { type: 'EQUALS' };</code></pre>
    </section>

    <hr />

    <section>
        <h3>Step 2: Learning the Concepts</h3>
        <p>Here is the breakdown of the TypeScript "Superpowers" we just used.</p>
        
        <dl>
            <dt><strong>1. Union Types (The Club Bouncer)</strong></dt>
            <dd>
                <p>Look at the <code>Operator</code> type: <code>'+' | '-' | '*' | ...</code></p>
                <p><strong>The Concept:</strong> Instead of allowing <em>any</em> text (string), we list the specific allowed values separated by a pipe <code>|</code>.</p>
                <p><strong>Why use it?</strong> It acts like a Bouncer. If you accidentally type <code>operator = 'x'</code> (instead of <code>*</code>) in your code later, TypeScript will stop you immediately because 'x' is not on the list.</p>
            </dd>

            <dt><strong>2. Why String for Numbers?</strong></dt>
            <dd>
                <p><code>currentValue: string;</code></p>
                <p><strong>The Question:</strong> "It's a calculator. Why aren't we using <code>number</code>?"</p>
                <p><strong>The Answer:</strong> Precision and UX.
                    <ul>
                        <li>If a user types <code>0.</code>, a number variable converts it to <code>0</code> immediately. The decimal disappears!</li>
                        <li>If a user types <code>1.00</code>, a number variable makes it <code>1</code>.</li>
                    </ul>
                By using a <strong>String</strong>, we preserve exactly what the user typed. We only convert it to a number when we do the actual math.</p>
            </dd>

            <dt><strong>3. Discriminated Unions (The "Action Menu")</strong></dt>
            <dd>
                <p>Look at <code>CalculatorAction</code>. It is a list of objects.</p>
                <p><strong>The Concept:</strong> This is a pro-level pattern. We connect the <code>type</code> of action to the <code>payload</code> (data) it needs.</p>
                <ul>
                    <li><strong>Smart Context:</strong> If the action is <code>CLEAR</code>, TypeScript knows we <strong>don't</strong> need a number.</li>
                    <li><strong>Strict Rules:</strong> If the action is <code>ADD_DIGIT</code>, TypeScript ensures we <strong>must</strong> provide the digit.</li>
                </ul>
            </dd>
        </dl>
    </section>
</article>

<article>
    <h2>Phase 3: The Bricks (Building UI Components)</h2>
    <p>Now that we have our "Constitution" (Types), we can build the visual blocks. We start with the <strong>CalculatorButton</strong>. This is a "Dumb Component"—it doesn't calculate anything; it just looks good and reports when it is clicked.</p>

    <section>
        <h3>The Component Interview</h3>
        <p>Before coding, we ask the component three questions to determine its structure:</p>
        <ul>
            <li><strong>The Data Question:</strong> "What do you need to know?" -> <em>A label and a style.</em></li>
            <li><strong>The Action Question:</strong> "What happens when touched?" -> <em>I tell the parent I was clicked.</em></li>
            <li><strong>The Safety Question:</strong> "How do I prevent ugly buttons?" -> <em>I restrict styles to my 'ButtonVariant' type.</em></li>
        </ul>
    </section>

    <hr />

    <section>
        <h3>Step 1: The Contract (Props)</h3>
        <p><strong>File:</strong> <code>src/components/CalculatorButton.tsx</code></p>
        <p>First, we import our specific types and define the "Rules of Engagement" (Interface). This tells other developers exactly what data they must provide to use this button.</p>

        <pre><code>import type { ButtonVariant } from "@/types";

interface CalculatorButtonProps {
  label: string;           // The text to show (e.g., "7" or "+")
  onClick: () => void;     // A function that returns nothing (void)
  variant?: ButtonVariant; // Optional (?): Defaults to 'default' if missing
  className?: string;      // Optional: For extra layout tweaks (like width)
}</code></pre>
    </section>

    <section>
        <h3>Step 2: The Styling Logic (The Variant Map)</h3>
        <p>Instead of writing messy <code>if/else</code> statements inside the HTML, we create a clear <strong>Lookup Table</strong> (Dictionary). This maps our "Human Names" (like 'danger') to "Computer CSS" (like 'bg-red-500').</p>

        <pre><code>// Record&lt;Key, Value&gt; ensures we cover EVERY variant defined in our types.
const VARIANT_STYLES: Record&lt;ButtonVariant, string&gt; = {
  default: "bg-gray-200 hover:bg-gray-300 text-gray-800 active:bg-gray-900",
  action: "bg-orange-500 text-gray-100 hover:bg-orange-600 active:bg-orange-700",
  featured: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
  danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
};</code></pre>

        <dl>
            <dt><strong>Why use <code>Record</code>?</strong></dt>
            <dd>It is a safety feature. If you added a new button type (e.g., 'primary') to your <code>types/index.ts</code> file but forgot to give it colors here, TypeScript would show an error immediately.</dd>
        </dl>
    </section>

    <section>
        <h3>Step 3: The Assembly (The HTML)</h3>
        <p>Finally, we export the React Component. It combines the data (props) with the styles (variant map) to render the final button.</p>

        <pre><code>export const CalculatorButton = ({
  label,
  onClick,
  variant = "default", // Default value if none is provided
  className = "",
}: CalculatorButtonProps) => {
  return (
    &lt;button
      onClick={onClick}
      // We combine 3 layers of CSS here:
      // 1. Base styles (shape, font size, animation)
      // 2. Variant styles (colors from our map)
      // 3. Custom classNames (layout overrides)
      className={\`h-16 rounded-xl text-2xl transition-all shadow-sm active:scale-95 
                  \${VARIANT_STYLES[variant]} 
                  \${className}\`}
    &gt;
      {label}
    &lt;/button&gt;
  );
};</code></pre>

        <dl>
            <dt><strong>The "active:scale-95" Trick</strong></dt>
            <dd>This is a Tailwind utility that shrinks the button slightly when pressed. It gives the user a tactile "click" feeling, making the app feel responsive like a native mobile app.</dd>
        </dl>
    </section>
</article>

<article>
    <h2>Phase 4: The Brain (State Management)</h2>

    <section>
        <h3>1. What is <code>useState</code>? (The "Memory" Hook)</h3>
        <p>To understand <code>useState</code>, you have to understand how React components work.</p>
        
        <dl>
            <dt><strong>The Problem: React Components have "Amnesia"</strong></dt>
            <dd>
                A React component is just a function. Every time something changes on the screen, the function runs again from top to bottom.
                <br><em>Scenario:</em> You have a variable <code>let score = 0</code>.
                <ul>
                    <li>You click "Add Point". The code does <code>score = 1</code>.</li>
                    <li>React sees a change and re-runs the function to update the screen.</li>
                    <li>The function runs: <code>let score = 0</code>. <strong>It resets!</strong></li>
                </ul>
                Your normal variables die every time the screen updates.
            </dd>

            <dt><strong>The Solution: <code>useState</code></strong></dt>
            <dd>
                
                <code>useState</code> is a way to ask React: "Hey, can you hold onto this value for me somewhere safe? Don't let it be deleted when the function re-runs."
            </dd>

            <dt><strong>How to Read It:</strong></dt>
            <dd>
                <pre><code>const [value, setValue] = useState(0);</code></pre>
                It returns an array with exactly two things:
                <ol>
                    <li><strong>The Variable (<code>value</code>):</strong> The current data right now (e.g., 0).</li>
                    <li><strong>The Setter (<code>setValue</code>):</strong> A special function (trigger). You <em>cannot</em> do <code>value = 5</code>. You must call <code>setValue(5)</code>. This tells React: "Update the data AND refresh the screen."</li>
                </ol>
            </dd>
        </dl>
    </section>

    <hr />

    <section>
        <h3>2. Why the <code>hooks</code> folder?</h3>
        <p>We are putting our logic in <code>src/hooks/useCalculator.ts</code> instead of <code>App.tsx</code> or <code>components/</code>. Why?</p>
        
        <dl>
            <dt><strong>The "Head vs. Face" Analogy</strong></dt>
            <dd>
                <ul>
                    <li><strong>Components (The Face):</strong> They handle the visuals. They smile, they blink, they show numbers. They don't do math.</li>
                    <li><strong>Hooks (The Head):</strong> They handle the thinking. They calculate <code>5 + 5</code>. They don't have a face (they render no HTML).</li>
                </ul>
            </dd>

            <dt><strong>The Litmus Test (Revisited)</strong></dt>
            <dd>
                Does this file use React features (like <code>useState</code>) but return <strong>Data</strong> instead of <strong>HTML</strong>?
                <br><strong>✅ Yes:</strong> It belongs in <code>hooks</code>.
            </dd>
        </dl>
    </section>

    <hr />

    <section>
        <h3>3. Step 1: Setting up the Brain</h3>
        <p><strong>File:</strong> <code>src/hooks/useCalculator.ts</code></p>
        <p><strong>Developer Thought:</strong> "I need to initialize the memory. When the user first opens the app, the screen should say '0', there is no previous number, and no operator is selected."</p>

        <pre><code>import { useState } from 'react';
import type { CalculatorState, CalculatorAction, Operator } from '../types';

export const useCalculator = () => {
  // 1. Initialize the Memory (State)
  // We use the shape we defined in our 'types' folder
  const [state, setState] = useState&lt;CalculatorState&gt;({
    currentValue: "0",        // Screen starts at 0
    previousValue: null,      // No previous number yet
    operator: null            // No math symbol chosen yet
  });

  // Test function to see if it works (we will expand this later)
  const dispatch = (action: CalculatorAction) => {
    console.log("User performed action:", action);
  };

  // We return the state so the UI can read it
  // We return the dispatch function so the UI can click buttons
  return {
    state,
    dispatch
  };
};</code></pre>
    </section>
</article>

  `},U4=Object.freeze(Object.defineProperty({__proto__:null,default:G4},Symbol.toStringTag,{value:"Module"})),W4=`@article{afganGalaxyPlatformAccessible2018,
  title = {The {{Galaxy}} Platform for Accessible, Reproducible and Collaborative Biomedical Analyses: 2018 Update},
  shorttitle = {The {{Galaxy}} Platform for Accessible, Reproducible and Collaborative Biomedical Analyses},
  author = {Afgan, Enis and Baker, Dannon and Batut, B{\\'e}r{\\'e}nice and {van den Beek}, Marius and Bouvier, Dave and Cech, Martin and Chilton, John and Clements, Dave and Coraor, Nate and Gr{\\"u}ning, Bj{\\"o}rn A. and Guerler, Aysam and {Hillman-Jackson}, Jennifer and Hiltemann, Saskia and Jalili, Vahid and Rasche, Helena and Soranzo, Nicola and Goecks, Jeremy and Taylor, James and Nekrutenko, Anton and Blankenberg, Daniel},
  year = 2018,
  month = jul,
  journal = {Nucleic Acids Research},
  volume = {46},
  number = {W1},
  pages = {W537-W544},
  issn = {1362-4962},
  doi = {10.1093/nar/gky379},
  abstract = {Galaxy (homepage: https://galaxyproject.org, main public server: https://usegalaxy.org) is a web-based scientific analysis platform used by tens of thousands of scientists across the world to analyze large biomedical datasets such as those found in genomics, proteomics, metabolomics and imaging. Started in 2005, Galaxy continues to focus on three key challenges of data-driven biomedical science: making analyses accessible to all researchers, ensuring analyses are completely reproducible, and making it simple to communicate analyses so that they can be reused and extended. During the last two years, the Galaxy team and the open-source community around Galaxy have made substantial improvements to Galaxy's core framework, user interface, tools, and training materials. Framework and user interface improvements now enable Galaxy to be used for analyzing tens of thousands of datasets, and {$>$}5500 tools are now available from the Galaxy ToolShed. The Galaxy community has led an effort to create numerous high-quality tutorials focused on common types of genomic analyses. The Galaxy developer and user communities continue to grow and be integral to Galaxy's development. The number of Galaxy public servers, developers contributing to the Galaxy framework and its tools, and users of the main Galaxy server have all increased substantially.},
  langid = {english},
  pmcid = {PMC6030816},
  pmid = {29790989},
  keywords = {Datasets as Topic,Genomics,Humans,Information Dissemination,International Cooperation,Internet,Metabolomics,Molecular Imaging,Proteomics,Reproducibility of Results,User-Computer Interface},
  file = {C:\\Users\\rohit\\Zotero\\storage\\8ELGRXC2\\Afgan et al. - 2018 - The Galaxy platform for accessible, reproducible and collaborative biomedical analyses 2018 update.pdf}
}

@article{bankevichSPAdesNewGenome2012,
  title = {{{SPAdes}}: A New Genome Assembly Algorithm and Its Applications to Single-Cell Sequencing},
  shorttitle = {{{SPAdes}}},
  author = {Bankevich, Anton and Nurk, Sergey and Antipov, Dmitry and Gurevich, Alexey A. and Dvorkin, Mikhail and Kulikov, Alexander S. and Lesin, Valery M. and Nikolenko, Sergey I. and Pham, Son and Prjibelski, Andrey D. and Pyshkin, Alexey V. and Sirotkin, Alexander V. and Vyahhi, Nikolay and Tesler, Glenn and Alekseyev, Max A. and Pevzner, Pavel A.},
  year = 2012,
  month = may,
  journal = {Journal of Computational Biology: A Journal of Computational Molecular Cell Biology},
  volume = {19},
  number = {5},
  pages = {455--477},
  issn = {1557-8666},
  doi = {10.1089/cmb.2012.0021},
  abstract = {The lion's share of bacteria in various environments cannot be cloned in the laboratory and thus cannot be sequenced using existing technologies. A major goal of single-cell genomics is to complement gene-centric metagenomic data with whole-genome assemblies of uncultivated organisms. Assembly of single-cell data is challenging because of highly non-uniform read coverage as well as elevated levels of sequencing errors and chimeric reads. We describe SPAdes, a new assembler for both single-cell and standard (multicell) assembly, and demonstrate that it improves on the recently released E+V-SC assembler (specialized for single-cell data) and on popular assemblers Velvet and SoapDeNovo (for multicell data). SPAdes generates single-cell assemblies, providing information about genomes of uncultivatable bacteria that vastly exceeds what may be obtained via traditional metagenomics studies. SPAdes is available online ( http://bioinf.spbau.ru/spades ). It is distributed as open source software.},
  langid = {english},
  pmcid = {PMC3342519},
  pmid = {22506599},
  keywords = {Algorithms,Bacteria,Genome Bacterial,Metagenomics,Sequence Analysis DNA,Single-Cell Analysis},
  file = {C:\\Users\\rohit\\Zotero\\storage\\UPVNSGFS\\Bankevich et al. - 2012 - SPAdes a new genome assembly algorithm and its applications to single-cell sequencing.pdf}
}

@misc{CitingGalaxy,
  title = {Citing {{Galaxy}}},
  urldate = {2025-11-28},
  abstract = {All about Galaxy and its community.},
  howpublished = {https://galaxyproject.org/citing-galaxy/},
  langid = {english},
  file = {C:\\Users\\rohit\\Zotero\\storage\\JN4GPCH3\\citing-galaxy.html}
}

@article{cockBiopythonFreelyAvailable2009,
  title = {Biopython: Freely Available {{Python}} Tools for Computational Molecular Biology and Bioinformatics},
  shorttitle = {Biopython},
  author = {Cock, Peter J. A. and Antao, Tiago and Chang, Jeffrey T. and Chapman, Brad A. and Cox, Cymon J. and Dalke, Andrew and Friedberg, Iddo and Hamelryck, Thomas and Kauff, Frank and Wilczynski, Bartek and {de Hoon}, Michiel J. L.},
  year = 2009,
  month = jun,
  journal = {Bioinformatics},
  volume = {25},
  number = {11},
  pages = {1422--1423},
  issn = {1367-4803},
  doi = {10.1093/bioinformatics/btp163},
  urldate = {2025-11-28},
  abstract = {Summary: The Biopython project is a mature open source international collaboration of volunteer developers, providing Python libraries for a wide range of bioinformatics problems. Biopython includes modules for reading and writing different sequence file formats and multiple sequence alignments, dealing with 3D macro molecular structures, interacting with common tools such as BLAST, ClustalW and EMBOSS, accessing key online databases, as well as providing numerical methods for statistical learning., Availability: Biopython is freely available, with documentation and source code at www.biopython.org under the Biopython license., Contact: All queries should be directed to the Biopython mailing lists, see www.biopython.org/wiki/\\_Mailing\\_listspeter.cock@scri.ac.uk.},
  pmcid = {PMC2682512},
  pmid = {19304878}
}

@article{giorgiLanguageEngineBioinformatics2022,
  title = {The {{R Language}}: {{An Engine}} for {{Bioinformatics}} and {{Data Science}}},
  shorttitle = {The {{R Language}}},
  author = {Giorgi, Federico M. and Ceraolo, Carmine and Mercatelli, Daniele},
  year = 2022,
  month = apr,
  journal = {Life},
  volume = {12},
  number = {5},
  pages = {648},
  issn = {2075-1729},
  doi = {10.3390/life12050648},
  urldate = {2025-11-28},
  abstract = {The R programming language is approaching its 30th birthday, and in the last three decades it has achieved a prominent role in statistics, bioinformatics, and data science in general. It currently ranks among the top 10 most popular languages worldwide, and its community has produced tens of thousands of extensions and packages, with scopes ranging from machine learning to transcriptome data analysis. In this review, we provide an historical chronicle of how R became what it is today, describing all its current features and capabilities. We also illustrate the major tools of R, such as the current R editors and integrated development environments (IDEs), the R Shiny web server, the R methods for machine learning, and its relationship with other programming languages. We also discuss the role of R in science in general as a driver for reproducibility. Overall, we hope to provide both a complete snapshot of R today and a practical compendium of the major features and applications of this programming language.},
  pmcid = {PMC9148156},
  pmid = {35629316},
  file = {C:\\Users\\rohit\\Zotero\\storage\\MT5LEPVN\\Giorgi et al. - 2022 - The R Language An Engine for Bioinformatics and Data Science.pdf}
}

@article{hogewegRootsBioinformaticsTheoretical2011,
  title = {The {{Roots}} of {{Bioinformatics}} in {{Theoretical Biology}}},
  author = {Hogeweg, Paulien},
  year = 2011,
  month = mar,
  journal = {PLOS Computational Biology},
  volume = {7},
  number = {3},
  pages = {e1002021},
  publisher = {Public Library of Science},
  issn = {1553-7358},
  doi = {10.1371/journal.pcbi.1002021},
  urldate = {2025-11-28},
  abstract = {From the late 1980s onward, the term \`\`bioinformatics'' mostly has been used to refer to computational methods for comparative analysis of genome data. However, the term was originally more widely defined as the study of informatic processes in biotic systems. In this essay, I will trace this early history (from a personal point of view) and I will argue that the original meaning of the term is re-emerging.},
  langid = {english},
  keywords = {Bioinformatics,Dynamical systems,Evolutionary biology,Evolutionary developmental biology,Information processing,Molecular biology,Organismal evolution,Theoretical biology},
  file = {C:\\Users\\rohit\\Zotero\\storage\\LD2AEBTS\\Hogeweg - 2011 - The Roots of Bioinformatics in Theoretical Biology.pdf}
}

@article{janda16SRRNAGene2007,
  title = {{{16S rRNA}} Gene Sequencing for Bacterial Identification in the Diagnostic Laboratory: Pluses, Perils, and Pitfalls},
  shorttitle = {{{16S rRNA}} Gene Sequencing for Bacterial Identification in the Diagnostic Laboratory},
  author = {Janda, J. Michael and Abbott, Sharon L.},
  year = 2007,
  month = sep,
  journal = {Journal of Clinical Microbiology},
  volume = {45},
  number = {9},
  pages = {2761--2764},
  issn = {0095-1137},
  doi = {10.1128/JCM.01228-07},
  langid = {english},
  pmcid = {PMC2045242},
  pmid = {17626177},
  keywords = {Bacteria,Bacterial Infections,DNA Bacterial,DNA Ribosomal,Humans,Molecular Diagnostic Techniques,RNA Ribosomal 16S,Sequence Analysis DNA},
  file = {C:\\Users\\rohit\\Zotero\\storage\\MWMDZUJC\\Janda and Abbott - 2007 - 16S rRNA gene sequencing for bacterial identification in the diagnostic laboratory pluses, perils,.pdf}
}

@article{landerInitialSequencingAnalysis2001,
  title = {Initial Sequencing and Analysis of the Human Genome},
  author = {Lander, E. S. and Linton, L. M. and Birren, B. and Nusbaum, C. and Zody, M. C. and Baldwin, J. and Devon, K. and Dewar, K. and Doyle, M. and FitzHugh, W. and Funke, R. and Gage, D. and Harris, K. and Heaford, A. and Howland, J. and Kann, L. and Lehoczky, J. and LeVine, R. and McEwan, P. and McKernan, K. and Meldrim, J. and Mesirov, J. P. and Miranda, C. and Morris, W. and Naylor, J. and Raymond, C. and Rosetti, M. and Santos, R. and Sheridan, A. and Sougnez, C. and {Stange-Thomann}, Y. and Stojanovic, N. and Subramanian, A. and Wyman, D. and Rogers, J. and Sulston, J. and Ainscough, R. and Beck, S. and Bentley, D. and Burton, J. and Clee, C. and Carter, N. and Coulson, A. and Deadman, R. and Deloukas, P. and Dunham, A. and Dunham, I. and Durbin, R. and French, L. and Grafham, D. and Gregory, S. and Hubbard, T. and Humphray, S. and Hunt, A. and Jones, M. and Lloyd, C. and McMurray, A. and Matthews, L. and Mercer, S. and Milne, S. and Mullikin, J. C. and Mungall, A. and Plumb, R. and Ross, M. and Shownkeen, R. and Sims, S. and Waterston, R. H. and Wilson, R. K. and Hillier, L. W. and McPherson, J. D. and Marra, M. A. and Mardis, E. R. and Fulton, L. A. and Chinwalla, A. T. and Pepin, K. H. and Gish, W. R. and Chissoe, S. L. and Wendl, M. C. and Delehaunty, K. D. and Miner, T. L. and Delehaunty, A. and Kramer, J. B. and Cook, L. L. and Fulton, R. S. and Johnson, D. L. and Minx, P. J. and Clifton, S. W. and Hawkins, T. and Branscomb, E. and Predki, P. and Richardson, P. and Wenning, S. and Slezak, T. and Doggett, N. and Cheng, J. F. and Olsen, A. and Lucas, S. and Elkin, C. and Uberbacher, E. and Frazier, M. and Gibbs, R. A. and Muzny, D. M. and Scherer, S. E. and Bouck, J. B. and Sodergren, E. J. and Worley, K. C. and Rives, C. M. and Gorrell, J. H. and Metzker, M. L. and Naylor, S. L. and Kucherlapati, R. S. and Nelson, D. L. and Weinstock, G. M. and Sakaki, Y. and Fujiyama, A. and Hattori, M. and Yada, T. and Toyoda, A. and Itoh, T. and Kawagoe, C. and Watanabe, H. and Totoki, Y. and Taylor, T. and Weissenbach, J. and Heilig, R. and Saurin, W. and Artiguenave, F. and Brottier, P. and Bruls, T. and Pelletier, E. and Robert, C. and Wincker, P. and Smith, D. R. and {Doucette-Stamm}, L. and Rubenfield, M. and Weinstock, K. and Lee, H. M. and Dubois, J. and Rosenthal, A. and Platzer, M. and Nyakatura, G. and Taudien, S. and Rump, A. and Yang, H. and Yu, J. and Wang, J. and Huang, G. and Gu, J. and Hood, L. and Rowen, L. and Madan, A. and Qin, S. and Davis, R. W. and Federspiel, N. A. and Abola, A. P. and Proctor, M. J. and Myers, R. M. and Schmutz, J. and Dickson, M. and Grimwood, J. and Cox, D. R. and Olson, M. V. and Kaul, R. and Raymond, C. and Shimizu, N. and Kawasaki, K. and Minoshima, S. and Evans, G. A. and Athanasiou, M. and Schultz, R. and Roe, B. A. and Chen, F. and Pan, H. and Ramser, J. and Lehrach, H. and Reinhardt, R. and McCombie, W. R. and {de la Bastide}, M. and Dedhia, N. and Bl{\\"o}cker, H. and Hornischer, K. and Nordsiek, G. and Agarwala, R. and Aravind, L. and Bailey, J. A. and Bateman, A. and Batzoglou, S. and Birney, E. and Bork, P. and Brown, D. G. and Burge, C. B. and Cerutti, L. and Chen, H. C. and Church, D. and Clamp, M. and Copley, R. R. and Doerks, T. and Eddy, S. R. and Eichler, E. E. and Furey, T. S. and Galagan, J. and Gilbert, J. G. and Harmon, C. and Hayashizaki, Y. and Haussler, D. and Hermjakob, H. and Hokamp, K. and Jang, W. and Johnson, L. S. and Jones, T. A. and Kasif, S. and Kaspryzk, A. and Kennedy, S. and Kent, W. J. and Kitts, P. and Koonin, E. V. and Korf, I. and Kulp, D. and Lancet, D. and Lowe, T. M. and McLysaght, A. and Mikkelsen, T. and Moran, J. V. and Mulder, N. and Pollara, V. J. and Ponting, C. P. and Schuler, G. and Schultz, J. and Slater, G. and Smit, A. F. and Stupka, E. and Szustakowki, J. and {Thierry-Mieg}, D. and {Thierry-Mieg}, J. and Wagner, L. and Wallis, J. and Wheeler, R. and Williams, A. and Wolf, Y. I. and Wolfe, K. H. and Yang, S. P. and Yeh, R. F. and Collins, F. and Guyer, M. S. and Peterson, J. and Felsenfeld, A. and Wetterstrand, K. A. and Patrinos, A. and Morgan, M. J. and {de Jong}, P. and Catanese, J. J. and Osoegawa, K. and Shizuya, H. and Choi, S. and Chen, Y. J. and Szustakowki, J. and {International Human Genome Sequencing Consortium}},
  year = 2001,
  month = feb,
  journal = {Nature},
  volume = {409},
  number = {6822},
  pages = {860--921},
  issn = {0028-0836},
  doi = {10.1038/35057062},
  abstract = {The human genome holds an extraordinary trove of information about human development, physiology, medicine and evolution. Here we report the results of an international collaboration to produce and make freely available a draft sequence of the human genome. We also present an initial analysis of the data, describing some of the insights that can be gleaned from the sequence.},
  langid = {english},
  pmid = {11237011},
  keywords = {Animals,Chromosome Mapping,Conserved Sequence,CpG Islands,Databases Factual,DNA Transposable Elements,Drug Industry,Evolution Molecular,Forecasting,GC Rich Sequence,Gene Duplication,Genes,Genetic Diseases Inborn,Genetics Medical,Genome Human,Human Genome Project,Humans,Mutation,Private Sector,Proteins,Proteome,Public Sector,Repetitive Sequences Nucleic Acid,RNA,Sequence Analysis DNA,Species Specificity},
  file = {C:\\Users\\rohit\\Zotero\\storage\\UIHSKZMS\\Lander et al. - 2001 - Initial sequencing and analysis of the human genome.pdf}
}

@article{sandveTenSimpleRules2013,
  title = {Ten {{Simple Rules}} for {{Reproducible Computational Research}}},
  author = {Sandve, Geir Kjetil and Nekrutenko, Anton and Taylor, James and Hovig, Eivind},
  year = 2013,
  month = oct,
  journal = {PLOS Computational Biology},
  volume = {9},
  number = {10},
  pages = {e1003285},
  publisher = {Public Library of Science},
  issn = {1553-7358},
  doi = {10.1371/journal.pcbi.1003285},
  urldate = {2025-11-28},
  langid = {english},
  keywords = {Archives,Computer and information sciences,Computer applications,Genome analysis,Habits,Replication studies,Reproducibility,Source code},
  file = {C:\\Users\\rohit\\Zotero\\storage\\ED2HUWPY\\Sandve et al. - 2013 - Ten Simple Rules for Reproducible Computational Research.pdf}
}

@article{stephensBigDataAstronomical2015,
  title = {Big {{Data}}: {{Astronomical}} or {{Genomical}}?},
  shorttitle = {Big {{Data}}},
  author = {Stephens, Zachary D. and Lee, Skylar Y. and Faghri, Faraz and Campbell, Roy H. and Zhai, Chengxiang and Efron, Miles J. and Iyer, Ravishankar and Schatz, Michael C. and Sinha, Saurabh and Robinson, Gene E.},
  year = 2015,
  month = jul,
  journal = {PLOS Biology},
  volume = {13},
  number = {7},
  pages = {e1002195},
  publisher = {Public Library of Science},
  issn = {1545-7885},
  doi = {10.1371/journal.pbio.1002195},
  urldate = {2025-11-28},
  abstract = {Genomics is a Big Data science and is going to get much bigger, very soon, but it is not known whether the needs of genomics will exceed other Big Data domains. Projecting to the year 2025, we compared genomics with three other major generators of Big Data: astronomy, YouTube, and Twitter. Our estimates show that genomics is a \`\`four-headed beast''---it is either on par with or the most demanding of the domains analyzed here in terms of data acquisition, storage, distribution, and analysis. We discuss aspects of new technologies that will need to be developed to rise up and meet the computational challenges that genomics poses for the near future. Now is the time for concerted, community-wide planning for the \`\`genomical'' challenges of the next decade.},
  langid = {english},
  keywords = {Animal genomics,Cancer genomics,Genome analysis,Genome sequencing,Genomics,Human genomics,Mammalian genomics,Twitter},
  file = {C:\\Users\\rohit\\Zotero\\storage\\99V38HBN\\Stephens et al. - 2015 - Big Data Astronomical or Genomical.pdf}
}

@article{thegalaxycommunityGalaxyPlatformAccessible2024,
  title = {The {{Galaxy}} Platform for Accessible, Reproducible, and Collaborative Data Analyses: 2024 Update},
  shorttitle = {The {{Galaxy}} Platform for Accessible, Reproducible, and Collaborative Data Analyses},
  author = {{The Galaxy Community}},
  year = 2024,
  month = jul,
  journal = {Nucleic Acids Research},
  volume = {52},
  number = {W1},
  pages = {W83-W94},
  issn = {0305-1048},
  doi = {10.1093/nar/gkae410},
  urldate = {2025-11-28},
  abstract = {Galaxy (https://galaxyproject.org) is deployed globally, predominantly through free-to-use services, supporting user-driven research that broadens in scope each year. Users are attracted to public Galaxy services by platform stability, tool and reference dataset diversity, training, support~and integration, which enables complex, reproducible, shareable data analysis. Applying the principles of user experience design (UXD), has driven improvements in accessibility, tool discoverability through Galaxy Labs/subdomains, and a redesigned Galaxy ToolShed. Galaxy tool capabilities are progressing in two strategic directions: integrating general purpose graphical processing units (GPGPU) access for cutting-edge methods, and licensed tool support. Engagement with global research consortia is being increased by developing more workflows in Galaxy and by resourcing the public Galaxy services to run them. The Galaxy Training Network (GTN) portfolio has grown in both size, and accessibility, through learning paths and direct integration with Galaxy tools that feature in training courses. Code development continues in line with the Galaxy Project roadmap, with improvements to job scheduling and the user interface. Environmental impact assessment is also helping engage users and developers, reminding them of their role in sustainability, by displaying estimated CO2 emissions generated by each Galaxy job.},
  file = {C\\:\\\\Users\\\\rohit\\\\Zotero\\\\storage\\\\TK5XX7DF\\\\The Galaxy Community - 2024 - The Galaxy platform for accessible, reproducible, and collaborative data analyses 2024 update.pdf;C\\:\\\\Users\\\\rohit\\\\Zotero\\\\storage\\\\8AKP3X68\\\\gkae410.html}
}

@article{wilsonBestPracticesScientific2014,
  title = {Best {{Practices}} for {{Scientific Computing}}},
  author = {Wilson, Greg and Aruliah, D. A. and Brown, C. Titus and Hong, Neil P. Chue and Davis, Matt and Guy, Richard T. and Haddock, Steven H. D. and Huff, Kathryn D. and Mitchell, Ian M. and Plumbley, Mark D. and Waugh, Ben and White, Ethan P. and Wilson, Paul},
  year = 2014,
  month = jan,
  journal = {PLOS Biology},
  volume = {12},
  number = {1},
  pages = {e1001745},
  publisher = {Public Library of Science},
  issn = {1545-7885},
  doi = {10.1371/journal.pbio.1001745},
  urldate = {2025-11-28},
  abstract = {We describe a set of best practices for scientific software development, based on research and experience, that will improve scientists' productivity and the reliability of their software.},
  langid = {english},
  keywords = {Computer software,Computers,Control systems,Open source software,Programming languages,Reproducibility,Scientists,Software development},
  file = {C:\\Users\\rohit\\Zotero\\storage\\BXS6267J\\Wilson et al. - 2014 - Best Practices for Scientific Computing.pdf}
}
`,V4=`@article{bensonGenBank2005,
  title = {{{GenBank}}},
  author = {Benson, Dennis A. and {Karsch-Mizrachi}, Ilene and Lipman, David J. and Ostell, James and Wheeler, David L.},
  year = 2005,
  month = jan,
  journal = {Nucleic Acids Research},
  volume = {33},
  number = {suppl\\_1},
  pages = {D34-D38},
  issn = {0305-1048},
  doi = {10.1093/nar/gki063},
  urldate = {2025-12-04},
  abstract = {GenBank \\textregistered{} is a comprehensive database that contains publicly available DNA sequences for more than 165\\,000 named organisms, obtained primarily through submissions from individual laboratories and batch submissions from large-scale sequencing projects. Most submissions are made using the web-based BankIt or standalone Sequin programs and accession numbers are assigned by GenBank staff upon receipt. Daily data exchange with the EMBL Data Library in the UK and the DNA Data Bank of Japan helps to ensure worldwide coverage. GenBank is accessible through NCBI's retrieval system, Entrez, which integrates data from the major DNA and protein sequence databases along with taxonomy, genome, mapping, protein structure and domain information, and the biomedical journal literature via PubMed. BLAST provides sequence similarity searches of GenBank and other sequence databases. Complete bimonthly releases and daily updates of the GenBank database are available by FTP. To access GenBank and its related retrieval and analysis services, go to the NCBI Homepage at http://www.ncbi.nlm.nih.gov .},
  file = {C\\:\\\\Users\\\\rohit\\\\Zotero\\\\storage\\\\9DNVRU2E\\\\Benson et al. - 2005 - GenBank.pdf;C\\:\\\\Users\\\\rohit\\\\Zotero\\\\storage\\\\G2A4SB2Q\\\\gki063.html}
}

@misc{ddbjDDBJ2025,
  title = {{{DDBJ}}},
  author = {DDBJ},
  year = 2025,
  month = dec,
  urldate = {2025-12-04},
  howpublished = {https://www.ddbj.nig.ac.jp/index-e.html},
  langid = {english},
  file = {C:\\Users\\rohit\\Zotero\\storage\\MPNIH5HH\\index-e.html}
}

@misc{embl-ebiEMBLEBIHomepage,
  title = {{{EMBL-EBI}} Homepage},
  author = {{EMBL-EBI}, European Bioinformatics},
  urldate = {2025-12-04},
  abstract = {EMBL's European Bioinformatics Institute: Big data for the life sciences},
  howpublished = {https://www.ebi.ac.uk/},
  langid = {english},
  file = {C:\\Users\\rohit\\Zotero\\storage\\UTTPTV5T\\www.ebi.ac.uk.html}
}

@misc{genbankGenBankWGSStatistics2025,
  type = {Primary Database},
  title = {{{GenBank}} and {{WGS Statistics}}},
  author = {GenBank},
  year = 2025,
  journal = {GenBank and WGS Statistics},
  urldate = {2025-12-04},
  abstract = {The following table lists the number of bases and the number of sequence records in each release of GenBank, beginning with Release 3 in 1982. CON-division records are not represented in these statistics: because they are constructed from the non-CON records in the database, their inclusion here would be a form of double-counting. Also note that this table is limited to 'traditional', non-set-based (WGS/TSA/TLS) GenBank records. From 1982 to the present, the number of bases in GenBank has doubled approximately every 18 months.},
  howpublished = {https://www.ncbi.nlm.nih.gov/genbank/statistics/},
  langid = {american},
  file = {C:\\Users\\rohit\\Zotero\\storage\\R9ARALAD\\statistics.html}
}

@misc{insdcInternationalNucleotideSequence,
  title = {International {{Nucleotide Sequence Database Collaboration}}},
  author = {INSDC},
  urldate = {2025-12-04},
  abstract = {The International Nucleotide Sequence Database Collaboration (INSDC) archives nucleotide sequence data, from raw to assembled and annotated sequences, from around the world.},
  langid = {american},
  file = {C:\\Users\\rohit\\Zotero\\storage\\V93WHVPV\\www.insdc.org.html}
}

@misc{SubmissionReleaseData,
  title = {Submission and Release Data Volumes},
  urldate = {2025-12-04},
  abstract = {DDBJ data submission  Web Submission: Submission to Nucleotide Sequence Submissi...},
  howpublished = {https://www.ddbj.nig.ac.jp/statistics/index-e.html},
  langid = {english},
  file = {C:\\Users\\rohit\\Zotero\\storage\\8Q7F6LWR\\index-e.html}
}
`,$4=`@article{bensonGenBank2005,
  title = {{{GenBank}}},
  author = {Benson, Dennis A. and {Karsch-Mizrachi}, Ilene and Lipman, David J. and Ostell, James and Wheeler, David L.},
  year = 2005,
  month = jan,
  journal = {Nucleic Acids Research},
  volume = {33},
  number = {suppl\\_1},
  pages = {D34-D38},
  issn = {0305-1048},
  doi = {10.1093/nar/gki063},
  urldate = {2025-12-04},
  abstract = {GenBank \\textregistered{} is a comprehensive database that contains publicly available DNA sequences for more than 165\\,000 named organisms, obtained primarily through submissions from individual laboratories and batch submissions from large-scale sequencing projects. Most submissions are made using the web-based BankIt or standalone Sequin programs and accession numbers are assigned by GenBank staff upon receipt. Daily data exchange with the EMBL Data Library in the UK and the DNA Data Bank of Japan helps to ensure worldwide coverage. GenBank is accessible through NCBI's retrieval system, Entrez, which integrates data from the major DNA and protein sequence databases along with taxonomy, genome, mapping, protein structure and domain information, and the biomedical journal literature via PubMed. BLAST provides sequence similarity searches of GenBank and other sequence databases. Complete bimonthly releases and daily updates of the GenBank database are available by FTP. To access GenBank and its related retrieval and analysis services, go to the NCBI Homepage at http://www.ncbi.nlm.nih.gov .},
  file = {C\\:\\\\Users\\\\rohit\\\\Zotero\\\\storage\\\\9DNVRU2E\\\\Benson et al. - 2005 - GenBank.pdf;C\\:\\\\Users\\\\rohit\\\\Zotero\\\\storage\\\\G2A4SB2Q\\\\gki063.html}
}

@misc{ddbjDDBJ2025,
  title = {{{DDBJ}}},
  author = {DDBJ},
  year = 2025,
  month = dec,
  urldate = {2025-12-04},
  howpublished = {https://www.ddbj.nig.ac.jp/index-e.html},
  langid = {english},
  file = {C:\\Users\\rohit\\Zotero\\storage\\MPNIH5HH\\index-e.html}
}

@misc{embl-ebiEMBLEBIHomepage,
  title = {{{EMBL-EBI}} Homepage},
  author = {{EMBL-EBI}, European Bioinformatics},
  urldate = {2025-12-04},
  abstract = {EMBL's European Bioinformatics Institute: Big data for the life sciences},
  howpublished = {https://www.ebi.ac.uk/},
  langid = {english},
  file = {C:\\Users\\rohit\\Zotero\\storage\\UTTPTV5T\\www.ebi.ac.uk.html}
}

@misc{genbankGenBankWGSStatistics2025,
  type = {Primary Database},
  title = {{{GenBank}} and {{WGS Statistics}}},
  author = {GenBank},
  year = 2025,
  journal = {GenBank and WGS Statistics},
  urldate = {2025-12-04},
  abstract = {The following table lists the number of bases and the number of sequence records in each release of GenBank, beginning with Release 3 in 1982. CON-division records are not represented in these statistics: because they are constructed from the non-CON records in the database, their inclusion here would be a form of double-counting. Also note that this table is limited to 'traditional', non-set-based (WGS/TSA/TLS) GenBank records. From 1982 to the present, the number of bases in GenBank has doubled approximately every 18 months.},
  howpublished = {https://www.ncbi.nlm.nih.gov/genbank/statistics/},
  langid = {american},
  file = {C:\\Users\\rohit\\Zotero\\storage\\R9ARALAD\\statistics.html}
}

@misc{insdcInternationalNucleotideSequence,
  title = {International {{Nucleotide Sequence Database Collaboration}}},
  author = {INSDC},
  urldate = {2025-12-04},
  abstract = {The International Nucleotide Sequence Database Collaboration (INSDC) archives nucleotide sequence data, from raw to assembled and annotated sequences, from around the world.},
  langid = {american},
  file = {C:\\Users\\rohit\\Zotero\\storage\\V93WHVPV\\www.insdc.org.html}
}

@misc{SubmissionReleaseData,
  title = {Submission and Release Data Volumes},
  urldate = {2025-12-04},
  abstract = {DDBJ data submission  Web Submission: Submission to Nucleotide Sequence Submissi...},
  howpublished = {https://www.ddbj.nig.ac.jp/statistics/index-e.html},
  langid = {english},
  file = {C:\\Users\\rohit\\Zotero\\storage\\8Q7F6LWR\\index-e.html}
}
`,J4=Object.assign({"./articles/rk-2025-003.ts":T4,"./articles/rk-2025-004.ts":M4,"./articles/rk-2025-005.ts":N4,"./articles/rk-2025-006.ts":B4,"./articles/rk-2026-007.ts":z4,"./articles/rk-2026-008.ts":P4,"./articles/rk-2026-009.ts":j4,"./articles/rk-2026-010.ts":q4,"./articles/rk-2026-011.ts":F4,"./articles/rk-2026-012.ts":_4,"./articles/rk-2026-013.ts":U4}),Y4=Object.assign({"./articles/rk-2025-003.bib":W4,"./articles/rk-2025-004.bib":V4,"./articles/rk-2026-008.bib":$4}),Il=Object.entries(J4).map(([e,t])=>{const r=t.default,n=e.replace(/\.ts$/,".bib"),a=Y4[n];return r?(a&&(r.bibTexContent=a),r):null}).filter(e=>!!e&&!!e.id).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()),K4=({article:e})=>h.jsxs("div",{className:`group flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border-b-2 border-ink dark:border-crt-green 
      text-ink dark:text-crt-green
      md:hover:bg-ink md:hover:text-paper active:bg-ink active:text-paper
      dark:md:hover:bg-crt-green dark:md:hover:text-black dark:active:bg-crt-green dark:active:text-black
      transition-all cursor-pointer`,children:[h.jsx("div",{className:"font-mono text-sm w-32 shrink-0 opacity-70 group-hover:opacity-100 group-hover:font-bold",children:e.date}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h3",{className:"font-serif font-bold text-lg leading-tight md:group-hover:translate-x-2 transition-transform duration-300",children:e.title}),h.jsx("div",{className:"md:hidden mt-2 flex flex-wrap gap-2",children:e.tags.map(t=>h.jsx("span",{className:"text-[10px] font-mono border border-current px-2 rounded-full opacity-60",children:t},t))})]}),h.jsxs("div",{className:"hidden md:flex items-center gap-4 shrink-0",children:[h.jsx("div",{className:"flex gap-2",children:e.tags.map(t=>h.jsx("span",{className:"text-xs font-mono border border-pencil dark:border-crt-green/50 group-hover:border-paper dark:group-hover:border-black px-2 py-1 rounded-full transition-colors",children:t},t))}),h.jsx($m,{className:"opacity-0 group-hover:opacity-100 transition-opacity",size:16})]})]}),Q4=()=>{const[e,t]=I.useState(""),r=Il.filter(n=>n.title.toLowerCase().includes(e.toLowerCase())||n.tags.some(a=>a.toLowerCase().includes(e.toLowerCase())));return h.jsxs("div",{className:"min-h-full p-4 md:p-12 max-w-6xl mx-auto",children:[h.jsxs("header",{className:"mb-12 border-b-4 border-ink dark:border-crt-green pb-4",children:[h.jsx("h1",{className:"font-mono text-xl md:text-3xl font-bold tracking-tighter uppercase text-ink dark:text-crt-green",children:"INDEX_REGISTRY // ARCHIVES"}),h.jsx("p",{className:"font-mono text-xs text-pencil dark:text-crt-green/60 mt-2",children:"Select a record to view details."})]}),h.jsx("div",{className:"mb-12 relative max-w-2xl",children:h.jsxs("div",{className:"flex items-center gap-4 text-ink dark:text-crt-green font-mono text-lg border-b-2 border-transparent focus-within:border-ink dark:focus-within:border-crt-green transition-colors pb-2",children:[h.jsx("span",{className:"animate-pulse",children:h.jsx(tp,{size:20})}),h.jsx("span",{className:"text-pencil dark:text-crt-green/50 select-none",children:">"}),h.jsx("input",{type:"text",value:e,onChange:n=>t(n.target.value),placeholder:"Search logs...",className:"bg-transparent border-none outline-none w-full placeholder-gray-400 dark:placeholder-crt-dim/50",autoFocus:!0})]})}),h.jsx("div",{className:"space-y-0",children:r.length>0?r.map(n=>h.jsx(Um,{to:`/articles/${n.id}`,className:"block",children:h.jsx(K4,{article:n})},n.id)):h.jsx("div",{className:"py-12 text-center font-mono text-pencil dark:text-crt-dim border-2 border-dashed border-gray-300 dark:border-crt-dim",children:h.jsxs("p",{children:['Error: No records found matching query "',e,'"']})})}),h.jsxs("div",{className:"mt-8 font-mono text-xs text-right text-pencil dark:text-crt-green/50",children:["Total_Records: ",Il.length," // Visible: ",r.length]})]})},X4=e=>{const[t,r]=I.useState([]),[n,a]=I.useState(!0),[i,o]=I.useState(null);return I.useEffect(()=>{let s=!0;const l=new AbortController;return(async()=>{try{const m=await fetch(`https://pub.orcid.org/v3.0/${e}/works`,{headers:{Accept:"application/json"},signal:l.signal});if(!m.ok)throw new Error(`Failed to connect to ORCID (Status: ${m.status})`);const f=await m.json();if(s){const y=f.group.map(x=>{var C,B,z,E,R,_,U,Q,X,ce,pe;const A=x["work-summary"][0],T=((B=(C=A.title)==null?void 0:C.title)==null?void 0:B.value)||"Untitled Work",N=((z=A["journal-title"])==null?void 0:z.value)||"Unknown Journal",b=((R=(E=A["publication-date"])==null?void 0:E.year)==null?void 0:R.value)||"N/A",v=((_=A.url)==null?void 0:_.value)||((ce=(X=(Q=(U=A["external-ids"])==null?void 0:U["external-id"])==null?void 0:Q[0])==null?void 0:X["external-id-url"])==null?void 0:ce.value)||"#",w=((pe=A.type)==null?void 0:pe.replace(/_/g," "))||"publication";return{title:T,journal:N,year:b,url:v,type:w}});r(y),a(!1)}}catch(m){s&&m.name!=="AbortError"&&(console.error("ORCID Fetch Error:",m),o("Error synchronizing with ORCID registry."),a(!1))}})(),()=>{s=!1,l.abort()}},[e]),{publications:t,loading:n,error:i}},Z4="/RKS-lab-notes/assets/RK-BtUTJjuG.jpg",ey=()=>{const{publications:e,loading:t,error:r}=X4("0000-0002-7077-4218");return h.jsx("div",{className:"min-h-full p-6 md:p-12 relative",children:h.jsxs("div",{className:"max-w-4xl mx-auto bg-white dark:bg-black border border-ink dark:border-crt-green shadow-paper dark:shadow-crt p-8 md:p-12 relative",children:[h.jsx("div",{className:"absolute top-4 right-4 border-2 border-red-700 dark:border-crt-amber text-red-700 dark:text-crt-amber px-2 py-1 font-mono text-xs font-bold -rotate-12 opacity-80 uppercase tracking-widest",children:"Personnel_File"}),h.jsxs("header",{className:"flex flex-col md:flex-row gap-8 mb-12 border-b-2 border-ink dark:border-crt-green pb-8",children:[h.jsxs("div",{className:"shrink-0 relative group",children:[h.jsxs("div",{className:"w-48 h-48 bg-gray-200 dark:bg-crt-dim border-4 border-ink dark:border-crt-green overflow-hidden relative",children:[h.jsx("img",{src:Z4,alt:"Profile",className:"w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500",onError:n=>{n.target.src="https://ui-avatars.com/api/?name=Rohit+Patel&background=random&size=200"}}),h.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_50%,rgba(0,0,0,0)_50%)] bg-[length:100%_4px] pointer-events-none"})]}),h.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/80 dark:bg-crt-dim/80 rotate-3 shadow-sm z-10"})]}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold text-ink dark:text-crt-green mb-2",children:"Patel Rohit K."}),h.jsx("div",{className:"font-mono text-sm md:text-base bg-ink text-paper dark:bg-crt-green dark:text-black inline-block px-2 py-1 mb-6 uppercase tracking-wider",children:"Microbiologist & Bioinformatician"}),h.jsx("p",{className:"font-serif text-lg leading-relaxed text-ink dark:text-crt-green/90 mb-6 border-l-4 border-gray-300 dark:border-crt-dim pl-4 italic",children:'"A dedicated microbiology and bioinformatics researcher passionate about bridging the gap between computational technology and life sciences. My mission is to translate complex computational methods and tools into accessible, actionable knowledge for biologists."'}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs",children:[h.jsxs("a",{href:"mailto:rohitmicrobiologist@gmail.com",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx(l4,{size:14})," rohitmicrobiologist@gmail.com"]}),h.jsxs("a",{href:"https://github.com/RKPatel-1996",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx(i4,{size:14})," github.com/RKPatel-1996"]}),h.jsxs("a",{href:"https://scholar.google.co.in/citations?user=kvgCFB4AAAAJ",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx(Mu,{size:14})," Google Scholar"]}),h.jsxs("a",{href:"https://www.researchgate.net/profile/Rohit-Patel-7",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx(X2,{size:14})," ResearchGate"]}),h.jsxs("a",{href:"https://orcid.org/0000-0002-7077-4218",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors col-span-full",children:[h.jsx("div",{className:"w-3 h-3 rounded-full border border-current flex items-center justify-center text-[8px] font-bold",children:"iD"})," ","ORCID: 0000-0002-7077-4218"]})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[h.jsxs("div",{className:"lg:col-span-1 space-y-12",children:[h.jsxs("section",{children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-4 pb-1 flex items-center gap-2",children:[h.jsx(Mu,{size:16})," Education_History"]}),h.jsxs("div",{className:"space-y-6 font-serif text-sm relative border-l border-dashed border-gray-400 dark:border-crt-dim ml-2 pl-6",children:[h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -left-[31px] top-1 w-2 h-2 bg-ink dark:bg-crt-green rounded-full"}),h.jsx("div",{className:"font-bold text-ink dark:text-crt-green",children:"Ph.D. in Microbiology"}),h.jsx("div",{className:"text-pencil dark:text-crt-green/70 text-xs mb-1",children:"Gujarat University (Pursuing)"}),h.jsx("p",{className:"text-xs italic leading-tight",children:"Exploring bacterial secondary metabolites as phytohormone analogues."})]}),h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -left-[31px] top-1 w-2 h-2 bg-gray-400 dark:bg-crt-dim rounded-full"}),h.jsx("div",{className:"font-bold text-ink dark:text-crt-green",children:"M.Sc. in Microbiology"}),h.jsx("div",{className:"text-pencil dark:text-crt-green/70 text-xs mb-1",children:"Gujarat University (2020)"})]}),h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -left-[31px] top-1 w-2 h-2 bg-gray-400 dark:bg-crt-dim rounded-full"}),h.jsx("div",{className:"font-bold text-ink dark:text-crt-green",children:"B.Sc. in Microbiology"}),h.jsx("div",{className:"text-pencil dark:text-crt-green/70 text-xs mb-1",children:"Gujarat Arts & Science College (2018)"})]})]})]}),h.jsxs("section",{children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-4 pb-1 flex items-center gap-2",children:[h.jsx(Z2,{size:16})," Research_Exp"]}),h.jsxs("div",{className:"font-serif text-sm",children:[h.jsx("div",{className:"mb-2 font-bold text-ink dark:text-crt-green",children:"Senior Research Fellow (SRF)"}),h.jsx("div",{className:"text-xs text-pencil dark:text-crt-green/70 mb-2",children:"Gujarat University"}),h.jsx("p",{className:"text-xs leading-relaxed border-l-2 border-gray-200 dark:border-crt-dim pl-2",children:"Project: Network program on Antimicrobial Resistance, Superbugs and One Health (Human health care node)."})]})]}),h.jsxs("section",{children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-4 pb-1 flex items-center gap-2",children:[h.jsx(p4,{size:16})," Skill_Matrix"]}),h.jsx("div",{className:"flex flex-wrap gap-2",children:["Molecular Docking","MD Simulation","WGS","Metagenomics","AMR Workflows","Web-App Dev","Plant-Microbe Interaction"].map(n=>h.jsx("span",{className:"font-mono text-[10px] bg-gray-100 dark:bg-crt-dim border border-gray-300 dark:border-crt-green px-2 py-1 text-ink dark:text-crt-green hover:bg-ink hover:text-white dark:hover:bg-crt-green dark:hover:text-black transition-colors cursor-default",children:n},n))})]})]}),h.jsxs("div",{className:"lg:col-span-2",children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-6 pb-1 flex items-center gap-2",children:[h.jsx(Q2,{size:16})," Publications_DB (Live Sync)"]}),t&&h.jsxs("div",{className:"flex flex-col items-center justify-center h-48 font-mono text-xs text-pencil dark:text-crt-green animate-pulse",children:[h.jsx(s4,{className:"animate-spin mb-4"}),h.jsx("span",{children:"ESTABLISHING_CONNECTION_TO_ORCID..."})]}),r&&h.jsxs("div",{className:"p-4 border border-red-500 bg-red-50 text-red-700 font-mono text-xs text-center",children:["ERROR: ",r]}),!t&&!r&&h.jsx("div",{className:"space-y-4",children:e.length===0?h.jsx("div",{className:"text-center font-mono text-xs text-pencil py-8",children:"No public records found."}):e.map((n,a)=>h.jsxs("div",{className:"group relative border border-gray-200 dark:border-crt-dim p-4 hover:border-ink dark:hover:border-crt-green transition-colors bg-gray-50 dark:bg-transparent",children:[h.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-gray-300 dark:bg-crt-dim group-hover:bg-accent dark:group-hover:bg-crt-amber transition-colors"}),h.jsxs("div",{className:"pl-3",children:[h.jsxs("div",{className:"flex justify-between items-start mb-1",children:[h.jsx("span",{className:"font-mono text-[10px] uppercase text-pencil dark:text-crt-green/60 border border-gray-300 dark:border-crt-dim px-1 rounded",children:n.year}),h.jsx("a",{href:n.url,target:"_blank",rel:"noreferrer",className:"text-pencil hover:text-accent dark:text-crt-green/70 dark:hover:text-crt-amber",children:h.jsx(O0,{size:14})})]}),h.jsx("h4",{className:"font-serif font-bold text-ink dark:text-crt-green text-lg leading-tight mb-2 group-hover:text-accent dark:group-hover:text-crt-amber transition-colors",children:n.title}),h.jsx("div",{className:"font-serif italic text-sm text-pencil dark:text-crt-green/80",children:n.journal})]})]},a))}),h.jsx("div",{className:"mt-8 pt-4 border-t border-dashed border-gray-300 dark:border-crt-dim text-center",children:h.jsx("a",{href:"https://orcid.org/0000-0002-7077-4218",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-accent dark:text-crt-green hover:underline",children:"VIEW_FULL_RECORD_ON_ORCID [external_link]"})})]})]})]})})},ty=({heroVideo:e})=>h.jsxs("div",{className:"mb-12",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-4 opacity-80",children:[h.jsx(u4,{size:16,className:"text-red-600 dark:text-crt-amber animate-pulse"}),h.jsx("h2",{className:"font-mono text-xs font-bold uppercase tracking-widest text-ink dark:text-crt-green",children:"Zone_A: Transmission_Source"}),h.jsx("div",{className:"h-px bg-ink/20 dark:bg-crt-green/20 flex-1 ml-2"})]}),h.jsxs("div",{className:"border-2 border-ink dark:border-crt-green shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-crt bg-gray-100 dark:bg-black max-w-4xl mx-auto",children:[h.jsxs("div",{className:"bg-ink dark:bg-crt-green text-paper dark:text-black px-2 py-1 flex justify-between items-center font-mono text-xs select-none",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),h.jsx("span",{children:"broadcast_deck.exe - [MAIN_FEED]"})]}),h.jsxs("div",{className:"flex gap-1",children:[h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"}),h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"})]})]}),h.jsx("div",{className:"relative aspect-video w-full bg-black border-b-2 border-ink dark:border-crt-green",children:h.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full",src:`https://www.youtube.com/embed/${e.id}`,title:e.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),h.jsx("div",{className:"p-4 bg-gray-200 dark:bg-crt-dim/10",children:h.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-start justify-between",children:[h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"font-mono text-[10px] text-accent dark:text-crt-amber mb-1 uppercase font-bold flex items-center gap-2",children:[h.jsx("span",{children:"Latest_Upload"}),h.jsx("span",{className:"opacity-50",children:"//"}),h.jsx("span",{children:e.dateAdded})]}),h.jsx("h1",{className:"font-serif text-xl md:text-2xl font-bold leading-tight text-ink dark:text-crt-green mb-2",children:e.title}),h.jsx("div",{className:"font-serif italic text-sm text-pencil dark:text-crt-green/80 border-l-2 border-ink dark:border-crt-green pl-3 py-1",children:e.commentary})]}),h.jsx("div",{className:"shrink-0 pt-1",children:h.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-ink dark:bg-crt-green text-paper dark:text-black font-mono text-xs font-bold uppercase hover:translate-y-px hover:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all border border-transparent",children:[h.jsx("span",{children:"Visit_Channel"}),h.jsx(O0,{size:12})]})})]})})]})]}),ry=({video:e})=>{const[t,r]=I.useState(!1);return h.jsxs("div",{className:"flex flex-col border-2 border-ink dark:border-crt-green shadow-retro dark:shadow-crt bg-gray-100 dark:bg-black h-fit transition-all duration-300",children:[h.jsxs("div",{className:"bg-ink dark:bg-crt-green text-paper dark:text-black px-2 py-1 flex justify-between items-center font-mono text-xs select-none shrink-0",children:[h.jsx("span",{className:"truncate max-w-[200px]",children:"media_player.exe"}),h.jsxs("div",{className:"flex gap-1",children:[h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"}),h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"}),h.jsx("div",{className:"w-3 h-3 bg-accent dark:bg-black border border-gray-400"})]})]}),h.jsx("div",{className:"relative aspect-video w-full border-b-2 border-ink dark:border-crt-green bg-black group shrink-0",children:h.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full",src:`https://www.youtube.com/embed/${e.id}`,title:e.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),h.jsxs("div",{className:"p-3 bg-gray-200 dark:bg-crt-dim/10 flex flex-col gap-3",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"font-serif font-bold text-lg leading-tight text-ink dark:text-crt-green mb-1 line-clamp-2",children:e.title}),h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-pencil dark:text-crt-green/70",children:[h.jsx(v4,{size:12}),h.jsx("span",{className:"uppercase tracking-wide",children:e.channelName})]})]}),h.jsxs("div",{className:"flex justify-between items-center border-t border-gray-300 dark:border-crt-green/30 pt-2",children:[h.jsxs("span",{className:"font-mono text-[10px] text-pencil dark:text-crt-green/50",children:["ID: ",e.id]}),h.jsxs("button",{onClick:()=>r(!t),className:"flex items-center gap-1 px-3 py-1 bg-white dark:bg-black border border-ink dark:border-crt-green shadow-sm hover:translate-y-px active:shadow-none active:translate-y-1 transition-all font-mono text-xs font-bold uppercase text-ink dark:text-crt-green group",children:[t?"Close_Log":"Read_Notes",t?h.jsx(Jm,{size:12}):h.jsx(Vm,{size:12,className:"group-hover:translate-y-0.5 transition-transform"})]})]})]}),t&&h.jsxs("div",{className:"border-t-2 border-ink dark:border-crt-green bg-paper dark:bg-black p-4 animate-in slide-in-from-top-2 duration-200",children:[h.jsxs("div",{className:"flex gap-3 mb-4",children:[h.jsx("div",{className:"shrink-0 w-1 bg-accent dark:bg-crt-amber self-stretch"}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1 font-mono text-[10px] uppercase text-accent dark:text-crt-amber font-bold",children:[h.jsx(c4,{size:12})," Curator_Commentary"]}),h.jsxs("p",{className:"font-serif italic text-sm text-ink/90 dark:text-crt-green/90 leading-relaxed",children:['"',e.commentary,'"']})]})]}),h.jsx("div",{className:"flex flex-wrap gap-2 pt-2 border-t border-dashed border-gray-300 dark:border-crt-dim",children:e.tags.map(n=>h.jsxs("span",{className:"flex items-center gap-1 text-[10px] font-mono uppercase bg-gray-100 dark:bg-crt-dim/30 border border-gray-300 dark:border-crt-green/30 px-2 py-1 text-pencil dark:text-crt-green rounded-sm",children:[h.jsx(m4,{size:10}),n]},n))})]})]})},ny={id:"jfKfPfyJRdk",title:"Lab Ambience Audio Stream: 24/7 Focus",channelName:"RK Patel Lab",tags:["Ambience","Focus","MyWork"],commentary:"Decent background ambience for working in the lab",dateAdded:"2025-11-20"},Lu=[{id:"d95J8yzvjbQ",title:"The Thinking Game | Full documentary | Tribeca Film Festival official selection",channelName:"Google | Roco films",tags:["Science","Simulation","AI","Nobel prize","Alpha-fold"],commentary:"Landmark discovery of AlphaFold as a solution for protein strucutre prediction problem in biology and role of AI.",dateAdded:"2025-12-01"},{id:"HBluLfX2F_k",title:"You've (Likely) Been Playing The Game of Life Wrong",channelName:"Veritasium",tags:["Science","Simulation","Math","Must-Watch"],commentary:"A fascinating dive into cellular automata. Derek explains how simple rules create complex behaviors, which parallels how biological complexity arises from simple chemical rules. The visualization of the 'gliders' is particularly relevant to our recent study on emergent systems.",dateAdded:"2025-12-01"},{id:"aircAruvnKk",title:"But what is a neural network? | Deep learning chapter 1",channelName:"3Blue1Brown",tags:["AI","Math","Deep Learning","Tutorial"],commentary:"The definitive visual guide to neural networks. Grant's animations make the complex math intuitive. Essential viewing for any biologist trying to understand the 'black box' of modern bioinformatics tools.",dateAdded:"2025-12-02"}],ay=()=>{const[e,t]=I.useState(""),[r,n]=I.useState(null),a=Array.from(new Set(Lu.flatMap(o=>o.tags))),i=I.useMemo(()=>Lu.filter(o=>{const s=e.toLowerCase(),l=o.title.toLowerCase().includes(s)||o.channelName.toLowerCase().includes(s)||o.commentary.toLowerCase().includes(s)||o.tags.some(m=>m.toLowerCase().includes(s)),d=r?o.tags.includes(r):!0;return l&&d}),[e,r]);return h.jsxs("div",{className:"min-h-full p-4 md:p-12 max-w-7xl mx-auto",children:[h.jsx(ty,{heroVideo:ny}),h.jsxs("section",{children:[h.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[h.jsx("div",{className:"w-4 h-4 bg-accent dark:bg-crt-amber rotate-45"}),h.jsx("h2",{className:"font-mono text-xl font-bold uppercase tracking-widest text-ink dark:text-crt-green",children:"Zone_B: Curated_Vault"})]}),h.jsx("div",{className:"bg-gray-100 dark:bg-crt-dim/20 border-2 border-ink dark:border-crt-green p-4 mb-8 shadow-sm",children:h.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[h.jsxs("div",{className:"flex-1 relative",children:[h.jsx("div",{className:"absolute inset-y-0 left-3 flex items-center pointer-events-none text-pencil dark:text-crt-green/50",children:h.jsx(tp,{size:18})}),h.jsx("input",{type:"text",placeholder:"Search titles, channels, or my notes...",value:e,onChange:o=>t(o.target.value),className:"w-full pl-10 pr-4 py-2 bg-white dark:bg-black border border-gray-300 dark:border-crt-green/30 text-ink dark:text-crt-green font-mono text-sm focus:outline-none focus:border-accent dark:focus:border-crt-amber transition-colors"})]}),h.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide",children:[h.jsx(a4,{size:18,className:"text-pencil dark:text-crt-green/50 shrink-0"}),h.jsxs("div",{className:"flex gap-2",children:[r&&h.jsxs("button",{onClick:()=>n(null),className:"flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-800 text-xs font-mono uppercase font-bold rounded-sm whitespace-nowrap hover:bg-red-200 transition-colors",children:[h.jsx(y4,{size:12})," Clear"]}),a.map(o=>h.jsxs("button",{onClick:()=>n(r===o?null:o),className:`px-3 py-1 border text-xs font-mono uppercase rounded-sm whitespace-nowrap transition-colors
                                    ${r===o?"bg-ink text-white border-ink dark:bg-crt-green dark:text-black dark:border-crt-green":"bg-white dark:bg-black text-pencil dark:text-crt-green/70 border-gray-300 dark:border-crt-green/30 hover:border-ink dark:hover:border-crt-green"}`,children:["#",o]},o))]})]})]})}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:i.length>0?i.map(o=>h.jsx(ry,{video:o},o.id)):h.jsxs("div",{className:"col-span-full py-12 text-center border-2 border-dashed border-gray-300 dark:border-crt-dim",children:[h.jsxs("p",{className:"font-mono text-pencil dark:text-crt-green/50",children:['No records match query "',e,'" with filter [',r||"ALL","]."]}),h.jsx("button",{onClick:()=>{t(""),n(null)},className:"mt-4 text-accent dark:text-crt-amber font-mono text-sm hover:underline",children:"RESET_SEARCH_PARAMETERS"})]})})]})]})},iy=e=>{const t={};if(!e)return t;const r=e.replace(/\r\n/g,`
`);let n=0;for(;n<r.length;){const a=r.indexOf("@",n);if(a===-1)break;const i=r.indexOf("{",a);if(i===-1)break;const o=r.substring(a+1,i).trim().toLowerCase(),s=r.indexOf(",",i);if(s===-1){n=i+1;continue}const l=r.substring(i+1,s).trim();let d=s+1,m=!1;const f={};for(;!m&&d<r.length;){for(;d<r.length&&/\s/.test(r[d]);)d++;if(r[d]==="}"){m=!0,n=d+1;break}const y=r.indexOf("=",d);if(y===-1){m=!0;break}const x=r.indexOf("}",d);if(x!==-1&&x<y){m=!0,n=x+1;break}const A=r.substring(d,y).trim().toLowerCase();for(d=y+1;d<r.length&&/\s/.test(r[d]);)d++;let T="";const N=r[d];if(N==="{"){let b=0,v=d+1,w=!1;for(let C=d;C<r.length;C++)if(r[C]==="{"&&b++,r[C]==="}"&&b--,b===0){T=r.substring(v,C),d=C+1,w=!0;break}if(!w){m=!0;break}}else if(N==='"'){const b=r.indexOf('"',d+1);if(b!==-1)T=r.substring(d+1,b),d=b+1;else{m=!0;break}}else{let b=d;for(;b<r.length&&r[b]!==","&&r[b]!=="}";)b++;T=r.substring(d,b).trim(),d=b}for(T=T.replace(/[\r\n\t]+/g," ").replace(/\s+/g," ").trim(),f[A]=T;d<r.length&&/\s/.test(r[d]);)d++;r[d]===","&&d++}t[l]={citationKey:l,entryType:o,...f},n<=a&&(n=a+1)}return t},ap=e=>e?e.split(" and ").map(r=>{let n=r.trim();if(n.startsWith("{")&&n.endsWith("}")&&(n=n.substring(1,n.length-1)),n.includes(","))return n.split(",")[0].trim();{const a=n.split(" ");return a[a.length-1]}}):["Unknown"],oy=e=>{if(!e)return"Unknown Author";const r=e.split(" and ").map(i=>{let o=i.trim();return o.startsWith("{")&&o.endsWith("}")&&(o=o.substring(1,o.length-1)),o});if(r.length<=5)return r.join(", ");const n=r.slice(0,3).join(", "),a=r[r.length-1];return`${n}, ... ${a}`},sy=e=>{const t=ap(e.author),r=e.year||"n.d.";let n="";return t.length===1?n=t[0]:t.length===2?n=`${t[0]} & ${t[1]}`:n=`${t[0]} et al.`,`${n}, ${r}`},ly=e=>{const t=ap(e.author),r=e.year||"0000";return`${t[0].toLowerCase()}_${r}`},ip=(e,t)=>I.useMemo(()=>{let r=e.replace(/\$\$([\s\S]*?)\$\$/g,(d,m)=>`<span class="science-math-marker" data-tex="${m.trim().replace(/"/g,"&quot;")}" data-display="true"></span>`);if(r=r.replace(/\\\(([\s\S]*?)\\\)/g,(d,m)=>`<span class="science-math-marker" data-tex="${m.trim().replace(/"/g,"&quot;")}" data-display="false"></span>`),!t)return{processedHTML:r,references:[],citationMap:new Map};const n=iy(t),a=/@([a-zA-Z0-9_-]+)/g,i=Array.from(r.matchAll(a)),o=new Set;i.forEach(d=>{const m=d[1];n[m]&&o.add(m)});const s=Array.from(o).map(d=>{const m=n[d];return{entry:m,sortKey:ly(m),label:sy(m)}}).sort((d,m)=>d.sortKey.localeCompare(m.sortKey)).map(({entry:d,label:m})=>({entry:d,label:m})),l=new Map;return s.forEach(d=>l.set(d.entry.citationKey,d)),r=r.replace(a,(d,m)=>n[m]?`<span class="citation-mount-point" data-key="${m}"></span>`:d),{processedHTML:r,references:s,citationMap:l}},[e,t]),op=(e,t)=>{const[r,n]=I.useState([]),[a,i]=I.useState(!1);return I.useLayoutEffect(()=>{if(!e.current)return;const o=e.current;Array.from(o.querySelectorAll("figure.science-figure")).forEach(T=>{const N=T.querySelector("img"),b=T.querySelector("figcaption");if(N){const v=document.createElement("div");v.className="science-figure-marker",v.setAttribute("data-src",N.getAttribute("src")||""),v.setAttribute("data-alt",N.getAttribute("alt")||""),v.setAttribute("data-id",T.getAttribute("data-id")||""),v.setAttribute("data-clean-src",T.getAttribute("data-clean-src")||""),b&&v.setAttribute("data-caption",b.innerHTML),T.replaceWith(v)}}),Array.from(o.querySelectorAll("table.science-table")).forEach(T=>{var B;const N=[],b=[];T.querySelectorAll("thead th").forEach(z=>N.push(z.textContent||"")),T.querySelectorAll("tbody tr").forEach(z=>{const E=[];z.querySelectorAll("td").forEach(R=>E.push(R.textContent||"")),b.push(E)});const v=(B=T.querySelector("caption"))==null?void 0:B.textContent,w=T.getAttribute("data-id")||`tbl-${Math.random().toString(36).substr(2,5)}`,C=document.createElement("div");C.className="science-table-marker",C.setAttribute("data-id",w),C.setAttribute("data-headers",JSON.stringify(N)),C.setAttribute("data-rows",JSON.stringify(b)),v&&C.setAttribute("data-caption",v),T.replaceWith(C)});const d=Array.from(o.querySelectorAll("h1, h2, h3")),m=[];d.forEach((T,N)=>{const b=T.textContent||`Section ${N+1}`,v=b.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),w=`sec-${N}-${v}`;T.id=w,T.classList.add("scroll-mt-24"),T.classList.add("cursor-pointer","hover:text-accent","dark:hover:text-crt-amber","transition-colors"),T.title="Click text to return to Table of Contents",T.addEventListener("click",C=>{C.preventDefault(),C.stopPropagation();const B=document.getElementById("table-of-contents");B&&B.scrollIntoView({behavior:"smooth"})}),m.push({id:w,text:b,level:parseInt(T.tagName[1])})}),n(m);const f=Array.from(o.childNodes),y=document.createDocumentFragment();let x=null,A=null;f.forEach(T=>{if(T.nodeName.match(/^H[1-3]$/)){x&&y.appendChild(x),x=document.createElement("details"),x.open=!0,x.className="group/details mb-4";const b=document.createElement("summary");b.className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center";const v=T,w=document.createElement("span");w.className="mr-2 text-pencil dark:text-crt-green transition-transform duration-200 group-open/details:rotate-90 inline-flex items-center justify-center shrink-0",w.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',b.appendChild(w),b.appendChild(v),x.appendChild(b),A=document.createElement("div"),A.className="mt-2 pl-4 border-l-2 border-gray-200 dark:border-crt-dim/30 ml-2",x.appendChild(A)}else A?A.appendChild(T):y.appendChild(T)}),x&&y.appendChild(x),f.length>0&&(o.innerHTML="",o.appendChild(y)),i(!0)},[t]),{toc:r,isDomReady:a}},cy=({label:e,entry:t,citationKey:r})=>{const n=a=>{a.preventDefault();const i=document.getElementById(`ref-${r}`);i&&(i.scrollIntoView({behavior:"smooth",block:"center"}),i.classList.add("bg-yellow-100","dark:bg-crt-dim"),setTimeout(()=>i.classList.remove("bg-yellow-100","dark:bg-crt-dim"),2e3))};return t?h.jsxs("span",{className:"group relative inline-block align-baseline ml-1",children:[h.jsxs("button",{onClick:n,className:"text-base text-accent dark:text-crt-amber hover:underline select-none","aria-label":`Cite: ${e}`,children:["(",e,")"]}),h.jsxs("div",{className:"invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 z-50 pointer-events-none group-hover:pointer-events-auto",children:[h.jsxs("div",{className:"bg-white dark:bg-black border-2 border-ink dark:border-crt-green shadow-retro dark:shadow-crt p-3 text-left font-serif text-ink dark:text-crt-green",children:[h.jsxs("div",{className:"border-b border-gray-200 dark:border-crt-dim pb-2 mb-2",children:[h.jsx("p",{className:"font-bold text-sm leading-tight mb-1",children:t.title}),h.jsx("p",{className:"font-mono text-[10px] text-pencil dark:text-crt-green/70 line-clamp-2",children:t.author})]}),h.jsxs("div",{className:"flex justify-between items-end",children:[h.jsxs("div",{className:"font-mono text-[10px] text-pencil dark:text-crt-green/70",children:[t.journal," ",t.year]}),(t.doi||t.url)&&h.jsxs("a",{href:t.doi?`https://doi.org/${t.doi}`:t.url,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 font-mono text-[10px] bg-ink text-paper dark:bg-crt-green dark:text-black px-2 py-1 hover:bg-accent transition-colors",onClick:a=>a.stopPropagation(),children:["SOURCE ",h.jsx(O0,{size:8})]})]})]}),h.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-ink dark:border-t-crt-green"})]})]}):h.jsxs("span",{className:"text-red-500 font-bold select-none cursor-not-allowed",children:["[",r,"?]"]})},uy=({src:e,alt:t,caption:r,id:n,cleanSrc:a})=>{const[i,o]=I.useState(!1),[s,l]=I.useState(100),[d,m]=I.useState(100),[f,y]=I.useState(!0),x=!f&&a?a:e,A=()=>{o(!1),l(100),m(100),y(!0)},T=()=>{if(n){const N=`Figure ${n}`;navigator.clipboard.writeText(N),alert(`Copied to clipboard: ${N}`)}};return h.jsxs("div",{className:"print-scientific-figure my-8 border-2 border-ink dark:border-crt-green bg-white dark:bg-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_5px_rgba(0,255,0,0.5)]",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2 p-2 bg-gray-100 dark:bg-crt-dim/20 border-b border-gray-200 dark:border-crt-dim",children:[h.jsxs("div",{className:"flex items-center gap-1 border-r border-gray-300 dark:border-crt-dim pr-2 mr-2",children:[h.jsx("button",{onClick:()=>o(!i),className:`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 ${i?"bg-ink text-white dark:bg-crt-green dark:text-black":"text-pencil dark:text-crt-green"}`,title:"Invert Colors",children:i?h.jsx(uo,{size:14}):h.jsx(F0,{size:14})}),h.jsxs("div",{className:"flex items-center gap-1 mx-1",children:[h.jsx(uo,{size:12,className:"text-pencil dark:text-crt-green/50"}),h.jsx("input",{type:"range",min:"50",max:"150",value:s,onChange:N=>l(Number(N.target.value)),className:"w-16 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-crt-dim",title:"Brightness"})]}),h.jsxs("div",{className:"flex items-center gap-1 mx-1",children:[h.jsx(t4,{size:12,className:"text-pencil dark:text-crt-green/50"}),h.jsx("input",{type:"range",min:"50",max:"150",value:d,onChange:N=>m(Number(N.target.value)),className:"w-16 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-crt-dim",title:"Contrast"})]}),h.jsx("button",{onClick:A,title:"Reset View",className:"p-1.5 text-pencil hover:text-ink dark:text-crt-green/50 dark:hover:text-crt-green",children:h.jsx(d4,{size:12})})]}),h.jsxs("div",{className:"flex items-center gap-2 flex-1 justify-end",children:[a&&h.jsxs("button",{onClick:()=>y(!f),className:"flex items-center gap-1 px-2 py-1 text-xs font-mono border border-gray-300 dark:border-crt-dim rounded hover:bg-white dark:hover:bg-crt-dim text-ink dark:text-crt-green",title:"Toggle Annotations",children:[f?h.jsx(Ym,{size:12}):h.jsx(n4,{size:12}),h.jsx("span",{className:"hidden sm:inline",children:"Layers"})]}),h.jsxs("a",{href:e,download:!0,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 px-2 py-1 text-xs font-mono border border-gray-300 dark:border-crt-dim rounded hover:bg-white dark:hover:bg-crt-dim text-ink dark:text-crt-green",title:"Download Original",children:[h.jsx(q0,{size:12}),h.jsx("span",{className:"hidden sm:inline",children:"RAW"})]}),n&&h.jsxs("button",{onClick:T,className:"flex items-center gap-1 px-2 py-1 text-xs font-mono border border-gray-300 dark:border-crt-dim rounded hover:bg-white dark:hover:bg-crt-dim text-ink dark:text-crt-green",title:"Copy Citation",children:[h.jsx(r4,{size:12}),h.jsx("span",{className:"hidden sm:inline",children:"Ref"})]})]})]}),h.jsx("div",{className:"relative overflow-hidden bg-gray-100 dark:bg-black/50 flex justify-center items-center min-h-[200px]",children:h.jsx("img",{src:x,alt:t||"Scientific Figure",className:"max-w-full h-auto object-contain transition-all duration-200",style:{filter:`invert(${i?1:0}) brightness(${s}%) contrast(${d}%)`}})}),r&&h.jsx("div",{className:"mt-0 p-3 bg-paper dark:bg-black border-t border-gray-200 dark:border-crt-dim",children:h.jsxs("figcaption",{className:"font-mono text-xs text-gray-700 dark:text-crt-green flex gap-2",children:[n&&h.jsxs("strong",{className:"uppercase shrink-0",children:[n,":"]}),h.jsx("span",{dangerouslySetInnerHTML:{__html:r}})]})})]})},dy=({id:e,initialData:t,initialHeaders:r})=>{const[n,a]=U2(),i=n.get(`${e}_sort`),o=n.get(`${e}_order`),s=n.get(`${e}_filter`)||"",[l,d]=I.useState(i?parseInt(i):null),[m,f]=I.useState(o!=="desc"),[y,x]=I.useState(s),[A,T]=I.useState(new Set),[N,b]=I.useState(!1);I.useEffect(()=>{const z=new URLSearchParams(n);l!==null?(z.set(`${e}_sort`,l.toString()),z.set(`${e}_order`,m?"asc":"desc")):(z.delete(`${e}_sort`),z.delete(`${e}_order`)),y?z.set(`${e}_filter`,y):z.delete(`${e}_filter`),a(z,{replace:!0})},[l,m,y,e,a,n]);const v=z=>{const E=t.map(ce=>parseFloat(ce[z])).filter(ce=>!isNaN(ce));if(E.length===0)return null;E.sort((ce,pe)=>ce-pe);const _=E.reduce((ce,pe)=>ce+pe,0)/E.length,U=E[0],Q=E[E.length-1],X=E[Math.floor(E.length/2)];return{mean:_,min:U,max:Q,median:X}},w=I.useMemo(()=>{let z=[...t];if(y){const E=y.toLowerCase();z=z.filter(R=>R.some(_=>_.toLowerCase().includes(E)))}return l!==null&&z.sort((E,R)=>{const _=E[l],U=R[l],Q=parseFloat(_),X=parseFloat(U);return!isNaN(Q)&&!isNaN(X)?m?Q-X:X-Q:m?_.localeCompare(U):U.localeCompare(_)}),z},[t,l,m,y]);return{sortCol:l,setSortCol:d,sortAsc:m,setSortAsc:f,filterText:y,setFilterText:x,hiddenCols:A,setHiddenCols:T,heatmapMode:N,setHeatmapMode:b,processedData:w,getStats:v,getCellColor:(z,E)=>{if(!N)return;const R=parseFloat(z);if(isNaN(R))return;const _=v(E);if(!_)return;const U=_.max-_.min;if(U===0)return;const Q=(R-_.min)/U,X=Math.floor(255*(1-Q));return`rgba(255, ${X}, ${X}, 0.5)`},downloadCSV:()=>{const E=[r.filter((Q,X)=>!A.has(X)).join(","),...w.map(Q=>Q.filter((X,ce)=>!A.has(ce)).map(X=>`"${X.replace(/"/g,'""')}"`).join(","))].join(`
`),R=new Blob([E],{type:"text/csv;charset=utf-8;"}),_=URL.createObjectURL(R),U=document.createElement("a");U.href=_,U.setAttribute("download",`${e}_data.csv`),document.body.appendChild(U),U.click(),document.body.removeChild(U)}}},hy=({id:e,initialHeaders:t,initialData:r,caption:n})=>{const{sortCol:a,setSortCol:i,sortAsc:o,setSortAsc:s,filterText:l,setFilterText:d,hiddenCols:m,setHiddenCols:f,heatmapMode:y,setHeatmapMode:x,processedData:A,getStats:T,getCellColor:N,downloadCSV:b}=dy({id:e,initialData:r,initialHeaders:t});return h.jsxs("div",{className:"print-scientific-table my-8 border-2 border-ink dark:border-crt-green shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_5px_rgba(0,255,0,0.5)] bg-white dark:bg-black overflow-hidden flex flex-col",children:[h.jsxs("div",{className:"p-2 border-b-2 border-ink dark:border-crt-green bg-paper dark:bg-crt-dim/20 flex flex-wrap items-center justify-between gap-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("h4",{className:"font-mono text-xs font-bold uppercase px-2",children:e}),h.jsx("div",{className:"h-4 w-px bg-gray-400 dark:bg-crt-green/50 mx-1"}),h.jsx("input",{type:"text",placeholder:"Filter data...",value:l,onChange:v=>d(v.target.value),className:"text-xs font-mono p-1 border border-gray-300 dark:border-crt-green/30 bg-white dark:bg-black text-ink dark:text-crt-green rounded focus:outline-none focus:border-accent dark:focus:border-crt-green"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:()=>x(!y),className:`p-1 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 ${y?"text-red-600 dark:text-red-400 font-bold":"text-pencil dark:text-crt-green"}`,title:"Toggle Heatmap",children:h.jsx(f4,{size:16})}),h.jsxs("div",{className:"relative group",children:[h.jsx("button",{className:"p-1 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 text-pencil dark:text-crt-green",title:"Columns",children:h.jsx(Ym,{size:16})}),h.jsxs("div",{className:"absolute right-0 top-full mt-1 w-40 bg-white dark:bg-black border border-ink dark:border-crt-green shadow-lg z-50 hidden group-hover:block p-2",children:[h.jsx("div",{className:"font-mono text-[10px] uppercase border-b mb-1 pb-1 dark:text-crt-green",children:"Visible Cols"}),t.map((v,w)=>h.jsxs("label",{className:"flex items-center gap-2 text-xs p-1 hover:bg-gray-100 dark:hover:bg-crt-dim cursor-pointer dark:text-crt-green",children:[h.jsx("input",{type:"checkbox",checked:!m.has(w),onChange:()=>{const C=new Set(m);C.has(w)?C.delete(w):C.add(w),f(C)}}),v]},w))]})]}),h.jsx("button",{onClick:b,className:"p-1 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 text-pencil dark:text-crt-green",title:"Export CSV",children:h.jsx(q0,{size:16})})]})]}),h.jsx("div",{className:"overflow-auto max-h-[500px]",children:h.jsxs("table",{className:"w-full text-left border-collapse text-sm font-mono text-ink dark:text-crt-green",children:[h.jsx("thead",{className:"bg-gray-100 dark:bg-crt-dim/50 sticky top-0 z-10 shadow-sm",children:h.jsx("tr",{children:t.map((v,w)=>{if(m.has(w))return null;const C=T(w);return h.jsxs("th",{className:`
                                    p-2 border-b-2 border-gray-300 dark:border-crt-green/50 whitespace-nowrap cursor-pointer hover:bg-gray-200 dark:hover:bg-crt-dim/80 select-none relative group
                                    ${w===0?"sticky left-0 bg-gray-100 dark:bg-crt-dim/90 z-20 border-r-2 border-gray-300 dark:border-r-crt-green/50":""}
                                `,onClick:()=>{a===w?s(!o):(i(w),s(!0))},children:[h.jsxs("div",{className:"flex items-center gap-1 justify-between",children:[h.jsx("span",{children:v}),a===w&&(o?h.jsx(K2,{size:12}):h.jsx(Y2,{size:12}))]}),C&&h.jsxs("div",{className:"absolute left-0 top-full mt-1 w-48 bg-black text-white p-2 text-[10px] rounded shadow-xl hidden group-hover:block z-50 pointer-events-none",children:[h.jsxs("div",{className:"font-bold border-b border-gray-700 pb-1 mb-1 flex items-center gap-1",children:[h.jsx(J2,{size:10})," Column Stats"]}),h.jsxs("div",{className:"grid grid-cols-2 gap-x-2",children:[h.jsx("span",{children:"Mean:"})," ",h.jsx("span",{className:"text-right",children:C.mean.toFixed(2)}),h.jsx("span",{children:"Median:"})," ",h.jsx("span",{className:"text-right",children:C.median.toFixed(2)}),h.jsx("span",{children:"Min:"})," ",h.jsx("span",{className:"text-right",children:C.min}),h.jsx("span",{children:"Max:"})," ",h.jsx("span",{className:"text-right",children:C.max})]})]})]},w)})})}),h.jsx("tbody",{children:A.map((v,w)=>h.jsx("tr",{className:"border-b border-gray-200 dark:border-crt-dim/30 hover:bg-yellow-50 dark:hover:bg-crt-dim/20 transition-colors",children:v.map((C,B)=>m.has(B)?null:h.jsx("td",{className:`
                                        p-2 border-r border-gray-100 dark:border-crt-dim/20 
                                        ${B===0?"sticky left-0 bg-white dark:bg-black font-bold z-10 border-r-2 border-gray-300 dark:border-r-crt-green/50":""}
                                    `,style:{backgroundColor:B!==0?N(C,B):void 0},children:C},B))},w))})]})}),n&&h.jsx("div",{className:"p-2 text-[10px] font-mono border-t border-gray-200 dark:border-crt-dim bg-gray-50 dark:bg-black text-center text-gray-500 dark:text-crt-green/60",children:n})]})};class Ye{constructor(t,r,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=n}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new Ye(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class st{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new st(r,Ye.range(this,t))}}class L{constructor(t,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var n="KaTeX parse error: "+t,a,i,o=r&&r.loc;if(o&&o.start<=o.end){var s=o.lexer.input;a=o.start,i=o.end,a===s.length?n+=" at end of input: ":n+=" at position "+(a+1)+": ";var l=s.slice(a,i).replace(/[^]/g,"$&̲"),d;a>15?d="…"+s.slice(a-15,a):d=s.slice(0,a);var m;i+15<s.length?m=s.slice(i,i+15)+"…":m=s.slice(i),n+=d+l+m}var f=new Error(n);return f.name="ParseError",f.__proto__=L.prototype,f.position=a,a!=null&&i!=null&&(f.length=i-a),f.rawMessage=t,f}}L.prototype.__proto__=Error.prototype;var my=function(t,r){return t===void 0?r:t},py=/([A-Z])/g,fy=function(t){return t.replace(py,"-$1").toLowerCase()},gy={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},yy=/[&><"']/g;function vy(e){return String(e).replace(yy,t=>gy[t])}var sp=function e(t){return t.type==="ordgroup"||t.type==="color"?t.body.length===1?e(t.body[0]):t:t.type==="font"?e(t.body):t},by=function(t){var r=sp(t);return r.type==="mathord"||r.type==="textord"||r.type==="atom"},wy=function(t){if(!t)throw new Error("Expected non-null, but got "+String(t));return t},xy=function(t){var r=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);return r?r[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(r[1])?null:r[1].toLowerCase():"_relative"},ae={deflt:my,escape:vy,hyphenate:fy,getBaseElem:sp,isCharacterBox:by,protocolFromUrl:xy},ji={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function ky(e){if(e.default)return e.default;var t=e.type,r=Array.isArray(t)?t[0]:t;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class H0{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r in ji)if(ji.hasOwnProperty(r)){var n=ji[r];this[r]=t[r]!==void 0?n.processor?n.processor(t[r]):t[r]:ky(n)}}reportNonstrict(t,r,n){var a=this.strict;if(typeof a=="function"&&(a=a(t,r,n)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new L("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),n);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,n){var a=this.strict;if(typeof a=="function")try{a=a(t,r,n)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var r=ae.protocolFromUrl(t.url);if(r==null)return!1;t.protocol=r}var n=typeof this.trust=="function"?this.trust(t):this.trust;return!!n}}class mr{constructor(t,r,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=n}sup(){return qt[Sy[this.id]]}sub(){return qt[Ty[this.id]]}fracNum(){return qt[Ay[this.id]]}fracDen(){return qt[My[this.id]]}cramp(){return qt[Cy[this.id]]}text(){return qt[Ny[this.id]]}isTight(){return this.size>=2}}var _0=0,ho=1,zn=2,er=3,La=4,gt=5,Hn=6,Ge=7,qt=[new mr(_0,0,!1),new mr(ho,0,!0),new mr(zn,1,!1),new mr(er,1,!0),new mr(La,2,!1),new mr(gt,2,!0),new mr(Hn,3,!1),new mr(Ge,3,!0)],Sy=[La,gt,La,gt,Hn,Ge,Hn,Ge],Ty=[gt,gt,gt,gt,Ge,Ge,Ge,Ge],Ay=[zn,er,La,gt,Hn,Ge,Hn,Ge],My=[er,er,gt,gt,Ge,Ge,Ge,Ge],Cy=[ho,ho,er,er,gt,gt,Ge,Ge],Ny=[_0,ho,zn,er,zn,er,zn,er],$={DISPLAY:qt[_0],TEXT:qt[zn],SCRIPT:qt[La],SCRIPTSCRIPT:qt[Hn]},zl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function Dy(e){for(var t=0;t<zl.length;t++)for(var r=zl[t],n=0;n<r.blocks.length;n++){var a=r.blocks[n];if(e>=a[0]&&e<=a[1])return r.name}return null}var Li=[];zl.forEach(e=>e.blocks.forEach(t=>Li.push(...t)));function lp(e){for(var t=0;t<Li.length;t+=2)if(e>=Li[t]&&e<=Li[t+1])return!0;return!1}var un=80,By=function(t,r){return"M95,"+(622+t+r)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+t/2.075+" -"+t+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+t)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Iy=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},zy=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Ey=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},Py=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},Ry=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},jy=function(t,r,n){var a=n-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},Ly=function(t,r,n){r=1e3*r;var a="";switch(t){case"sqrtMain":a=By(r,un);break;case"sqrtSize1":a=Iy(r,un);break;case"sqrtSize2":a=zy(r,un);break;case"sqrtSize3":a=Ey(r,un);break;case"sqrtSize4":a=Py(r,un);break;case"sqrtTall":a=jy(r,un,n)}return a},qy=function(t,r){switch(t){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},qu={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:`M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,leftmapsto:`M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:`M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},Oy=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+r+" v1759 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+r+" v1759 h84z";case"vert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+" v585 h43z";case"doublevert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+` v585 h43z
M367 15 v585 v`+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+r+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+r+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+r+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v602 h84z
M403 1759 V0 H319 V1759 v`+r+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v602 h84z
M347 1759 V0 h-84 V1759 v`+r+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(r+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(r+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(r+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(r+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Wa{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){var t=r=>r.toText();return this.children.map(t).join("")}}var Ft={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},fi={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Ou={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function Fy(e,t){Ft[e]=t}function G0(e,t,r){if(!Ft[t])throw new Error("Font metrics not found for font: "+t+".");var n=e.charCodeAt(0),a=Ft[t][n];if(!a&&e[0]in Ou&&(n=Ou[e[0]].charCodeAt(0),a=Ft[t][n]),!a&&r==="text"&&lp(n)&&(a=Ft[t][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var vs={};function Hy(e){var t;if(e>=5?t=0:e>=3?t=1:t=2,!vs[t]){var r=vs[t]={cssEmPerMu:fi.quad[t]/18};for(var n in fi)fi.hasOwnProperty(n)&&(r[n]=fi[n][t])}return vs[t]}var _y=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Fu=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Hu=function(t,r){return r.size<2?t:_y[t-1][r.size-1]};class Kt{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||Kt.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=Fu[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return new Kt(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:Hu(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:Fu[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=Hu(Kt.BASESIZE,t);return this.size===r&&this.textSize===Kt.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Kt.BASESIZE?["sizing","reset-size"+this.size,"size"+Kt.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=Hy(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Kt.BASESIZE=6;var El={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Gy={ex:!0,em:!0,mu:!0},cp=function(t){return typeof t!="string"&&(t=t.unit),t in El||t in Gy||t==="ex"},be=function(t,r){var n;if(t.unit in El)n=El[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")n=r.fontMetrics().cssEmPerMu;else{var a;if(r.style.isTight()?a=r.havingStyle(r.style.text()):a=r,t.unit==="ex")n=a.fontMetrics().xHeight;else if(t.unit==="em")n=a.fontMetrics().quad;else throw new L("Invalid unit: '"+t.unit+"'");a!==r&&(n*=a.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*n,r.maxSize)},O=function(t){return+t.toFixed(4)+"em"},Pr=function(t){return t.filter(r=>r).join(" ")},up=function(t,r,n){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},r){r.style.isTight()&&this.classes.push("mtight");var a=r.getColor();a&&(this.style.color=a)}},dp=function(t){var r=document.createElement(t);r.className=Pr(this.classes);for(var n in this.style)this.style.hasOwnProperty(n)&&(r.style[n]=this.style[n]);for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&r.setAttribute(a,this.attributes[a]);for(var i=0;i<this.children.length;i++)r.appendChild(this.children[i].toNode());return r},Uy=/[\s"'>/=\x00-\x1f]/,hp=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+ae.escape(Pr(this.classes))+'"');var n="";for(var a in this.style)this.style.hasOwnProperty(a)&&(n+=ae.hyphenate(a)+":"+this.style[a]+";");n&&(r+=' style="'+ae.escape(n)+'"');for(var i in this.attributes)if(this.attributes.hasOwnProperty(i)){if(Uy.test(i))throw new L("Invalid attribute name '"+i+"'");r+=" "+i+'="'+ae.escape(this.attributes[i])+'"'}r+=">";for(var o=0;o<this.children.length;o++)r+=this.children[o].toMarkup();return r+="</"+t+">",r};class Va{constructor(t,r,n,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,up.call(this,t,n,a),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return dp.call(this,"span")}toMarkup(){return hp.call(this,"span")}}class U0{constructor(t,r,n,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,up.call(this,r,a),this.children=n||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return dp.call(this,"a")}toMarkup(){return hp.call(this,"a")}}class Wy{constructor(t,r,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.style=n}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);return t}toMarkup(){var t='<img src="'+ae.escape(this.src)+'"'+(' alt="'+ae.escape(this.alt)+'"'),r="";for(var n in this.style)this.style.hasOwnProperty(n)&&(r+=ae.hyphenate(n)+":"+this.style[n]+";");return r&&(t+=' style="'+ae.escape(r)+'"'),t+="'/>",t}}var Vy={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class wt{constructor(t,r,n,a,i,o,s,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=n||0,this.italic=a||0,this.skew=i||0,this.width=o||0,this.classes=s||[],this.style=l||{},this.maxFontSize=0;var d=Dy(this.text.charCodeAt(0));d&&this.classes.push(d+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=Vy[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=O(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Pr(this.classes));for(var n in this.style)this.style.hasOwnProperty(n)&&(r=r||document.createElement("span"),r.style[n]=this.style[n]);return r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=ae.escape(Pr(this.classes)),r+='"');var n="";this.italic>0&&(n+="margin-right:"+this.italic+"em;");for(var a in this.style)this.style.hasOwnProperty(a)&&(n+=ae.hyphenate(a)+":"+this.style[a]+";");n&&(t=!0,r+=' style="'+ae.escape(n)+'"');var i=ae.escape(this.text);return t?(r+=">",r+=i,r+="</span>",r):i}}class or{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&r.setAttribute(n,this.attributes[n]);for(var a=0;a<this.children.length;a++)r.appendChild(this.children[a].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+ae.escape(this.attributes[r])+'"');t+=">";for(var n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t+="</svg>",t}}class Rr{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",qu[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+ae.escape(this.alternate)+'"/>':'<path d="'+ae.escape(qu[this.pathName])+'"/>'}}class Pl{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&r.setAttribute(n,this.attributes[n]);return r}toMarkup(){var t="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+ae.escape(this.attributes[r])+'"');return t+="/>",t}}function _u(e){if(e instanceof wt)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function $y(e){if(e instanceof Va)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var Jy={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Yy={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},de={math:{},text:{}};function c(e,t,r,n,a,i){de[e][a]={font:t,group:r,replace:n},i&&n&&(de[e][n]=de[e][a])}var u="math",P="text",p="main",k="ams",ge="accent-token",G="bin",$e="close",Vn="inner",V="mathord",Ne="op-token",dt="open",jo="punct",S="rel",dr="spacing",M="textord";c(u,p,S,"≡","\\equiv",!0);c(u,p,S,"≺","\\prec",!0);c(u,p,S,"≻","\\succ",!0);c(u,p,S,"∼","\\sim",!0);c(u,p,S,"⊥","\\perp");c(u,p,S,"⪯","\\preceq",!0);c(u,p,S,"⪰","\\succeq",!0);c(u,p,S,"≃","\\simeq",!0);c(u,p,S,"∣","\\mid",!0);c(u,p,S,"≪","\\ll",!0);c(u,p,S,"≫","\\gg",!0);c(u,p,S,"≍","\\asymp",!0);c(u,p,S,"∥","\\parallel");c(u,p,S,"⋈","\\bowtie",!0);c(u,p,S,"⌣","\\smile",!0);c(u,p,S,"⊑","\\sqsubseteq",!0);c(u,p,S,"⊒","\\sqsupseteq",!0);c(u,p,S,"≐","\\doteq",!0);c(u,p,S,"⌢","\\frown",!0);c(u,p,S,"∋","\\ni",!0);c(u,p,S,"∝","\\propto",!0);c(u,p,S,"⊢","\\vdash",!0);c(u,p,S,"⊣","\\dashv",!0);c(u,p,S,"∋","\\owns");c(u,p,jo,".","\\ldotp");c(u,p,jo,"⋅","\\cdotp");c(u,p,M,"#","\\#");c(P,p,M,"#","\\#");c(u,p,M,"&","\\&");c(P,p,M,"&","\\&");c(u,p,M,"ℵ","\\aleph",!0);c(u,p,M,"∀","\\forall",!0);c(u,p,M,"ℏ","\\hbar",!0);c(u,p,M,"∃","\\exists",!0);c(u,p,M,"∇","\\nabla",!0);c(u,p,M,"♭","\\flat",!0);c(u,p,M,"ℓ","\\ell",!0);c(u,p,M,"♮","\\natural",!0);c(u,p,M,"♣","\\clubsuit",!0);c(u,p,M,"℘","\\wp",!0);c(u,p,M,"♯","\\sharp",!0);c(u,p,M,"♢","\\diamondsuit",!0);c(u,p,M,"ℜ","\\Re",!0);c(u,p,M,"♡","\\heartsuit",!0);c(u,p,M,"ℑ","\\Im",!0);c(u,p,M,"♠","\\spadesuit",!0);c(u,p,M,"§","\\S",!0);c(P,p,M,"§","\\S");c(u,p,M,"¶","\\P",!0);c(P,p,M,"¶","\\P");c(u,p,M,"†","\\dag");c(P,p,M,"†","\\dag");c(P,p,M,"†","\\textdagger");c(u,p,M,"‡","\\ddag");c(P,p,M,"‡","\\ddag");c(P,p,M,"‡","\\textdaggerdbl");c(u,p,$e,"⎱","\\rmoustache",!0);c(u,p,dt,"⎰","\\lmoustache",!0);c(u,p,$e,"⟯","\\rgroup",!0);c(u,p,dt,"⟮","\\lgroup",!0);c(u,p,G,"∓","\\mp",!0);c(u,p,G,"⊖","\\ominus",!0);c(u,p,G,"⊎","\\uplus",!0);c(u,p,G,"⊓","\\sqcap",!0);c(u,p,G,"∗","\\ast");c(u,p,G,"⊔","\\sqcup",!0);c(u,p,G,"◯","\\bigcirc",!0);c(u,p,G,"∙","\\bullet",!0);c(u,p,G,"‡","\\ddagger");c(u,p,G,"≀","\\wr",!0);c(u,p,G,"⨿","\\amalg");c(u,p,G,"&","\\And");c(u,p,S,"⟵","\\longleftarrow",!0);c(u,p,S,"⇐","\\Leftarrow",!0);c(u,p,S,"⟸","\\Longleftarrow",!0);c(u,p,S,"⟶","\\longrightarrow",!0);c(u,p,S,"⇒","\\Rightarrow",!0);c(u,p,S,"⟹","\\Longrightarrow",!0);c(u,p,S,"↔","\\leftrightarrow",!0);c(u,p,S,"⟷","\\longleftrightarrow",!0);c(u,p,S,"⇔","\\Leftrightarrow",!0);c(u,p,S,"⟺","\\Longleftrightarrow",!0);c(u,p,S,"↦","\\mapsto",!0);c(u,p,S,"⟼","\\longmapsto",!0);c(u,p,S,"↗","\\nearrow",!0);c(u,p,S,"↩","\\hookleftarrow",!0);c(u,p,S,"↪","\\hookrightarrow",!0);c(u,p,S,"↘","\\searrow",!0);c(u,p,S,"↼","\\leftharpoonup",!0);c(u,p,S,"⇀","\\rightharpoonup",!0);c(u,p,S,"↙","\\swarrow",!0);c(u,p,S,"↽","\\leftharpoondown",!0);c(u,p,S,"⇁","\\rightharpoondown",!0);c(u,p,S,"↖","\\nwarrow",!0);c(u,p,S,"⇌","\\rightleftharpoons",!0);c(u,k,S,"≮","\\nless",!0);c(u,k,S,"","\\@nleqslant");c(u,k,S,"","\\@nleqq");c(u,k,S,"⪇","\\lneq",!0);c(u,k,S,"≨","\\lneqq",!0);c(u,k,S,"","\\@lvertneqq");c(u,k,S,"⋦","\\lnsim",!0);c(u,k,S,"⪉","\\lnapprox",!0);c(u,k,S,"⊀","\\nprec",!0);c(u,k,S,"⋠","\\npreceq",!0);c(u,k,S,"⋨","\\precnsim",!0);c(u,k,S,"⪹","\\precnapprox",!0);c(u,k,S,"≁","\\nsim",!0);c(u,k,S,"","\\@nshortmid");c(u,k,S,"∤","\\nmid",!0);c(u,k,S,"⊬","\\nvdash",!0);c(u,k,S,"⊭","\\nvDash",!0);c(u,k,S,"⋪","\\ntriangleleft");c(u,k,S,"⋬","\\ntrianglelefteq",!0);c(u,k,S,"⊊","\\subsetneq",!0);c(u,k,S,"","\\@varsubsetneq");c(u,k,S,"⫋","\\subsetneqq",!0);c(u,k,S,"","\\@varsubsetneqq");c(u,k,S,"≯","\\ngtr",!0);c(u,k,S,"","\\@ngeqslant");c(u,k,S,"","\\@ngeqq");c(u,k,S,"⪈","\\gneq",!0);c(u,k,S,"≩","\\gneqq",!0);c(u,k,S,"","\\@gvertneqq");c(u,k,S,"⋧","\\gnsim",!0);c(u,k,S,"⪊","\\gnapprox",!0);c(u,k,S,"⊁","\\nsucc",!0);c(u,k,S,"⋡","\\nsucceq",!0);c(u,k,S,"⋩","\\succnsim",!0);c(u,k,S,"⪺","\\succnapprox",!0);c(u,k,S,"≆","\\ncong",!0);c(u,k,S,"","\\@nshortparallel");c(u,k,S,"∦","\\nparallel",!0);c(u,k,S,"⊯","\\nVDash",!0);c(u,k,S,"⋫","\\ntriangleright");c(u,k,S,"⋭","\\ntrianglerighteq",!0);c(u,k,S,"","\\@nsupseteqq");c(u,k,S,"⊋","\\supsetneq",!0);c(u,k,S,"","\\@varsupsetneq");c(u,k,S,"⫌","\\supsetneqq",!0);c(u,k,S,"","\\@varsupsetneqq");c(u,k,S,"⊮","\\nVdash",!0);c(u,k,S,"⪵","\\precneqq",!0);c(u,k,S,"⪶","\\succneqq",!0);c(u,k,S,"","\\@nsubseteqq");c(u,k,G,"⊴","\\unlhd");c(u,k,G,"⊵","\\unrhd");c(u,k,S,"↚","\\nleftarrow",!0);c(u,k,S,"↛","\\nrightarrow",!0);c(u,k,S,"⇍","\\nLeftarrow",!0);c(u,k,S,"⇏","\\nRightarrow",!0);c(u,k,S,"↮","\\nleftrightarrow",!0);c(u,k,S,"⇎","\\nLeftrightarrow",!0);c(u,k,S,"△","\\vartriangle");c(u,k,M,"ℏ","\\hslash");c(u,k,M,"▽","\\triangledown");c(u,k,M,"◊","\\lozenge");c(u,k,M,"Ⓢ","\\circledS");c(u,k,M,"®","\\circledR");c(P,k,M,"®","\\circledR");c(u,k,M,"∡","\\measuredangle",!0);c(u,k,M,"∄","\\nexists");c(u,k,M,"℧","\\mho");c(u,k,M,"Ⅎ","\\Finv",!0);c(u,k,M,"⅁","\\Game",!0);c(u,k,M,"‵","\\backprime");c(u,k,M,"▲","\\blacktriangle");c(u,k,M,"▼","\\blacktriangledown");c(u,k,M,"■","\\blacksquare");c(u,k,M,"⧫","\\blacklozenge");c(u,k,M,"★","\\bigstar");c(u,k,M,"∢","\\sphericalangle",!0);c(u,k,M,"∁","\\complement",!0);c(u,k,M,"ð","\\eth",!0);c(P,p,M,"ð","ð");c(u,k,M,"╱","\\diagup");c(u,k,M,"╲","\\diagdown");c(u,k,M,"□","\\square");c(u,k,M,"□","\\Box");c(u,k,M,"◊","\\Diamond");c(u,k,M,"¥","\\yen",!0);c(P,k,M,"¥","\\yen",!0);c(u,k,M,"✓","\\checkmark",!0);c(P,k,M,"✓","\\checkmark");c(u,k,M,"ℶ","\\beth",!0);c(u,k,M,"ℸ","\\daleth",!0);c(u,k,M,"ℷ","\\gimel",!0);c(u,k,M,"ϝ","\\digamma",!0);c(u,k,M,"ϰ","\\varkappa");c(u,k,dt,"┌","\\@ulcorner",!0);c(u,k,$e,"┐","\\@urcorner",!0);c(u,k,dt,"└","\\@llcorner",!0);c(u,k,$e,"┘","\\@lrcorner",!0);c(u,k,S,"≦","\\leqq",!0);c(u,k,S,"⩽","\\leqslant",!0);c(u,k,S,"⪕","\\eqslantless",!0);c(u,k,S,"≲","\\lesssim",!0);c(u,k,S,"⪅","\\lessapprox",!0);c(u,k,S,"≊","\\approxeq",!0);c(u,k,G,"⋖","\\lessdot");c(u,k,S,"⋘","\\lll",!0);c(u,k,S,"≶","\\lessgtr",!0);c(u,k,S,"⋚","\\lesseqgtr",!0);c(u,k,S,"⪋","\\lesseqqgtr",!0);c(u,k,S,"≑","\\doteqdot");c(u,k,S,"≓","\\risingdotseq",!0);c(u,k,S,"≒","\\fallingdotseq",!0);c(u,k,S,"∽","\\backsim",!0);c(u,k,S,"⋍","\\backsimeq",!0);c(u,k,S,"⫅","\\subseteqq",!0);c(u,k,S,"⋐","\\Subset",!0);c(u,k,S,"⊏","\\sqsubset",!0);c(u,k,S,"≼","\\preccurlyeq",!0);c(u,k,S,"⋞","\\curlyeqprec",!0);c(u,k,S,"≾","\\precsim",!0);c(u,k,S,"⪷","\\precapprox",!0);c(u,k,S,"⊲","\\vartriangleleft");c(u,k,S,"⊴","\\trianglelefteq");c(u,k,S,"⊨","\\vDash",!0);c(u,k,S,"⊪","\\Vvdash",!0);c(u,k,S,"⌣","\\smallsmile");c(u,k,S,"⌢","\\smallfrown");c(u,k,S,"≏","\\bumpeq",!0);c(u,k,S,"≎","\\Bumpeq",!0);c(u,k,S,"≧","\\geqq",!0);c(u,k,S,"⩾","\\geqslant",!0);c(u,k,S,"⪖","\\eqslantgtr",!0);c(u,k,S,"≳","\\gtrsim",!0);c(u,k,S,"⪆","\\gtrapprox",!0);c(u,k,G,"⋗","\\gtrdot");c(u,k,S,"⋙","\\ggg",!0);c(u,k,S,"≷","\\gtrless",!0);c(u,k,S,"⋛","\\gtreqless",!0);c(u,k,S,"⪌","\\gtreqqless",!0);c(u,k,S,"≖","\\eqcirc",!0);c(u,k,S,"≗","\\circeq",!0);c(u,k,S,"≜","\\triangleq",!0);c(u,k,S,"∼","\\thicksim");c(u,k,S,"≈","\\thickapprox");c(u,k,S,"⫆","\\supseteqq",!0);c(u,k,S,"⋑","\\Supset",!0);c(u,k,S,"⊐","\\sqsupset",!0);c(u,k,S,"≽","\\succcurlyeq",!0);c(u,k,S,"⋟","\\curlyeqsucc",!0);c(u,k,S,"≿","\\succsim",!0);c(u,k,S,"⪸","\\succapprox",!0);c(u,k,S,"⊳","\\vartriangleright");c(u,k,S,"⊵","\\trianglerighteq");c(u,k,S,"⊩","\\Vdash",!0);c(u,k,S,"∣","\\shortmid");c(u,k,S,"∥","\\shortparallel");c(u,k,S,"≬","\\between",!0);c(u,k,S,"⋔","\\pitchfork",!0);c(u,k,S,"∝","\\varpropto");c(u,k,S,"◀","\\blacktriangleleft");c(u,k,S,"∴","\\therefore",!0);c(u,k,S,"∍","\\backepsilon");c(u,k,S,"▶","\\blacktriangleright");c(u,k,S,"∵","\\because",!0);c(u,k,S,"⋘","\\llless");c(u,k,S,"⋙","\\gggtr");c(u,k,G,"⊲","\\lhd");c(u,k,G,"⊳","\\rhd");c(u,k,S,"≂","\\eqsim",!0);c(u,p,S,"⋈","\\Join");c(u,k,S,"≑","\\Doteq",!0);c(u,k,G,"∔","\\dotplus",!0);c(u,k,G,"∖","\\smallsetminus");c(u,k,G,"⋒","\\Cap",!0);c(u,k,G,"⋓","\\Cup",!0);c(u,k,G,"⩞","\\doublebarwedge",!0);c(u,k,G,"⊟","\\boxminus",!0);c(u,k,G,"⊞","\\boxplus",!0);c(u,k,G,"⋇","\\divideontimes",!0);c(u,k,G,"⋉","\\ltimes",!0);c(u,k,G,"⋊","\\rtimes",!0);c(u,k,G,"⋋","\\leftthreetimes",!0);c(u,k,G,"⋌","\\rightthreetimes",!0);c(u,k,G,"⋏","\\curlywedge",!0);c(u,k,G,"⋎","\\curlyvee",!0);c(u,k,G,"⊝","\\circleddash",!0);c(u,k,G,"⊛","\\circledast",!0);c(u,k,G,"⋅","\\centerdot");c(u,k,G,"⊺","\\intercal",!0);c(u,k,G,"⋒","\\doublecap");c(u,k,G,"⋓","\\doublecup");c(u,k,G,"⊠","\\boxtimes",!0);c(u,k,S,"⇢","\\dashrightarrow",!0);c(u,k,S,"⇠","\\dashleftarrow",!0);c(u,k,S,"⇇","\\leftleftarrows",!0);c(u,k,S,"⇆","\\leftrightarrows",!0);c(u,k,S,"⇚","\\Lleftarrow",!0);c(u,k,S,"↞","\\twoheadleftarrow",!0);c(u,k,S,"↢","\\leftarrowtail",!0);c(u,k,S,"↫","\\looparrowleft",!0);c(u,k,S,"⇋","\\leftrightharpoons",!0);c(u,k,S,"↶","\\curvearrowleft",!0);c(u,k,S,"↺","\\circlearrowleft",!0);c(u,k,S,"↰","\\Lsh",!0);c(u,k,S,"⇈","\\upuparrows",!0);c(u,k,S,"↿","\\upharpoonleft",!0);c(u,k,S,"⇃","\\downharpoonleft",!0);c(u,p,S,"⊶","\\origof",!0);c(u,p,S,"⊷","\\imageof",!0);c(u,k,S,"⊸","\\multimap",!0);c(u,k,S,"↭","\\leftrightsquigarrow",!0);c(u,k,S,"⇉","\\rightrightarrows",!0);c(u,k,S,"⇄","\\rightleftarrows",!0);c(u,k,S,"↠","\\twoheadrightarrow",!0);c(u,k,S,"↣","\\rightarrowtail",!0);c(u,k,S,"↬","\\looparrowright",!0);c(u,k,S,"↷","\\curvearrowright",!0);c(u,k,S,"↻","\\circlearrowright",!0);c(u,k,S,"↱","\\Rsh",!0);c(u,k,S,"⇊","\\downdownarrows",!0);c(u,k,S,"↾","\\upharpoonright",!0);c(u,k,S,"⇂","\\downharpoonright",!0);c(u,k,S,"⇝","\\rightsquigarrow",!0);c(u,k,S,"⇝","\\leadsto");c(u,k,S,"⇛","\\Rrightarrow",!0);c(u,k,S,"↾","\\restriction");c(u,p,M,"‘","`");c(u,p,M,"$","\\$");c(P,p,M,"$","\\$");c(P,p,M,"$","\\textdollar");c(u,p,M,"%","\\%");c(P,p,M,"%","\\%");c(u,p,M,"_","\\_");c(P,p,M,"_","\\_");c(P,p,M,"_","\\textunderscore");c(u,p,M,"∠","\\angle",!0);c(u,p,M,"∞","\\infty",!0);c(u,p,M,"′","\\prime");c(u,p,M,"△","\\triangle");c(u,p,M,"Γ","\\Gamma",!0);c(u,p,M,"Δ","\\Delta",!0);c(u,p,M,"Θ","\\Theta",!0);c(u,p,M,"Λ","\\Lambda",!0);c(u,p,M,"Ξ","\\Xi",!0);c(u,p,M,"Π","\\Pi",!0);c(u,p,M,"Σ","\\Sigma",!0);c(u,p,M,"Υ","\\Upsilon",!0);c(u,p,M,"Φ","\\Phi",!0);c(u,p,M,"Ψ","\\Psi",!0);c(u,p,M,"Ω","\\Omega",!0);c(u,p,M,"A","Α");c(u,p,M,"B","Β");c(u,p,M,"E","Ε");c(u,p,M,"Z","Ζ");c(u,p,M,"H","Η");c(u,p,M,"I","Ι");c(u,p,M,"K","Κ");c(u,p,M,"M","Μ");c(u,p,M,"N","Ν");c(u,p,M,"O","Ο");c(u,p,M,"P","Ρ");c(u,p,M,"T","Τ");c(u,p,M,"X","Χ");c(u,p,M,"¬","\\neg",!0);c(u,p,M,"¬","\\lnot");c(u,p,M,"⊤","\\top");c(u,p,M,"⊥","\\bot");c(u,p,M,"∅","\\emptyset");c(u,k,M,"∅","\\varnothing");c(u,p,V,"α","\\alpha",!0);c(u,p,V,"β","\\beta",!0);c(u,p,V,"γ","\\gamma",!0);c(u,p,V,"δ","\\delta",!0);c(u,p,V,"ϵ","\\epsilon",!0);c(u,p,V,"ζ","\\zeta",!0);c(u,p,V,"η","\\eta",!0);c(u,p,V,"θ","\\theta",!0);c(u,p,V,"ι","\\iota",!0);c(u,p,V,"κ","\\kappa",!0);c(u,p,V,"λ","\\lambda",!0);c(u,p,V,"μ","\\mu",!0);c(u,p,V,"ν","\\nu",!0);c(u,p,V,"ξ","\\xi",!0);c(u,p,V,"ο","\\omicron",!0);c(u,p,V,"π","\\pi",!0);c(u,p,V,"ρ","\\rho",!0);c(u,p,V,"σ","\\sigma",!0);c(u,p,V,"τ","\\tau",!0);c(u,p,V,"υ","\\upsilon",!0);c(u,p,V,"ϕ","\\phi",!0);c(u,p,V,"χ","\\chi",!0);c(u,p,V,"ψ","\\psi",!0);c(u,p,V,"ω","\\omega",!0);c(u,p,V,"ε","\\varepsilon",!0);c(u,p,V,"ϑ","\\vartheta",!0);c(u,p,V,"ϖ","\\varpi",!0);c(u,p,V,"ϱ","\\varrho",!0);c(u,p,V,"ς","\\varsigma",!0);c(u,p,V,"φ","\\varphi",!0);c(u,p,G,"∗","*",!0);c(u,p,G,"+","+");c(u,p,G,"−","-",!0);c(u,p,G,"⋅","\\cdot",!0);c(u,p,G,"∘","\\circ",!0);c(u,p,G,"÷","\\div",!0);c(u,p,G,"±","\\pm",!0);c(u,p,G,"×","\\times",!0);c(u,p,G,"∩","\\cap",!0);c(u,p,G,"∪","\\cup",!0);c(u,p,G,"∖","\\setminus",!0);c(u,p,G,"∧","\\land");c(u,p,G,"∨","\\lor");c(u,p,G,"∧","\\wedge",!0);c(u,p,G,"∨","\\vee",!0);c(u,p,M,"√","\\surd");c(u,p,dt,"⟨","\\langle",!0);c(u,p,dt,"∣","\\lvert");c(u,p,dt,"∥","\\lVert");c(u,p,$e,"?","?");c(u,p,$e,"!","!");c(u,p,$e,"⟩","\\rangle",!0);c(u,p,$e,"∣","\\rvert");c(u,p,$e,"∥","\\rVert");c(u,p,S,"=","=");c(u,p,S,":",":");c(u,p,S,"≈","\\approx",!0);c(u,p,S,"≅","\\cong",!0);c(u,p,S,"≥","\\ge");c(u,p,S,"≥","\\geq",!0);c(u,p,S,"←","\\gets");c(u,p,S,">","\\gt",!0);c(u,p,S,"∈","\\in",!0);c(u,p,S,"","\\@not");c(u,p,S,"⊂","\\subset",!0);c(u,p,S,"⊃","\\supset",!0);c(u,p,S,"⊆","\\subseteq",!0);c(u,p,S,"⊇","\\supseteq",!0);c(u,k,S,"⊈","\\nsubseteq",!0);c(u,k,S,"⊉","\\nsupseteq",!0);c(u,p,S,"⊨","\\models");c(u,p,S,"←","\\leftarrow",!0);c(u,p,S,"≤","\\le");c(u,p,S,"≤","\\leq",!0);c(u,p,S,"<","\\lt",!0);c(u,p,S,"→","\\rightarrow",!0);c(u,p,S,"→","\\to");c(u,k,S,"≱","\\ngeq",!0);c(u,k,S,"≰","\\nleq",!0);c(u,p,dr," ","\\ ");c(u,p,dr," ","\\space");c(u,p,dr," ","\\nobreakspace");c(P,p,dr," ","\\ ");c(P,p,dr," "," ");c(P,p,dr," ","\\space");c(P,p,dr," ","\\nobreakspace");c(u,p,dr,null,"\\nobreak");c(u,p,dr,null,"\\allowbreak");c(u,p,jo,",",",");c(u,p,jo,";",";");c(u,k,G,"⊼","\\barwedge",!0);c(u,k,G,"⊻","\\veebar",!0);c(u,p,G,"⊙","\\odot",!0);c(u,p,G,"⊕","\\oplus",!0);c(u,p,G,"⊗","\\otimes",!0);c(u,p,M,"∂","\\partial",!0);c(u,p,G,"⊘","\\oslash",!0);c(u,k,G,"⊚","\\circledcirc",!0);c(u,k,G,"⊡","\\boxdot",!0);c(u,p,G,"△","\\bigtriangleup");c(u,p,G,"▽","\\bigtriangledown");c(u,p,G,"†","\\dagger");c(u,p,G,"⋄","\\diamond");c(u,p,G,"⋆","\\star");c(u,p,G,"◃","\\triangleleft");c(u,p,G,"▹","\\triangleright");c(u,p,dt,"{","\\{");c(P,p,M,"{","\\{");c(P,p,M,"{","\\textbraceleft");c(u,p,$e,"}","\\}");c(P,p,M,"}","\\}");c(P,p,M,"}","\\textbraceright");c(u,p,dt,"{","\\lbrace");c(u,p,$e,"}","\\rbrace");c(u,p,dt,"[","\\lbrack",!0);c(P,p,M,"[","\\lbrack",!0);c(u,p,$e,"]","\\rbrack",!0);c(P,p,M,"]","\\rbrack",!0);c(u,p,dt,"(","\\lparen",!0);c(u,p,$e,")","\\rparen",!0);c(P,p,M,"<","\\textless",!0);c(P,p,M,">","\\textgreater",!0);c(u,p,dt,"⌊","\\lfloor",!0);c(u,p,$e,"⌋","\\rfloor",!0);c(u,p,dt,"⌈","\\lceil",!0);c(u,p,$e,"⌉","\\rceil",!0);c(u,p,M,"\\","\\backslash");c(u,p,M,"∣","|");c(u,p,M,"∣","\\vert");c(P,p,M,"|","\\textbar",!0);c(u,p,M,"∥","\\|");c(u,p,M,"∥","\\Vert");c(P,p,M,"∥","\\textbardbl");c(P,p,M,"~","\\textasciitilde");c(P,p,M,"\\","\\textbackslash");c(P,p,M,"^","\\textasciicircum");c(u,p,S,"↑","\\uparrow",!0);c(u,p,S,"⇑","\\Uparrow",!0);c(u,p,S,"↓","\\downarrow",!0);c(u,p,S,"⇓","\\Downarrow",!0);c(u,p,S,"↕","\\updownarrow",!0);c(u,p,S,"⇕","\\Updownarrow",!0);c(u,p,Ne,"∐","\\coprod");c(u,p,Ne,"⋁","\\bigvee");c(u,p,Ne,"⋀","\\bigwedge");c(u,p,Ne,"⨄","\\biguplus");c(u,p,Ne,"⋂","\\bigcap");c(u,p,Ne,"⋃","\\bigcup");c(u,p,Ne,"∫","\\int");c(u,p,Ne,"∫","\\intop");c(u,p,Ne,"∬","\\iint");c(u,p,Ne,"∭","\\iiint");c(u,p,Ne,"∏","\\prod");c(u,p,Ne,"∑","\\sum");c(u,p,Ne,"⨂","\\bigotimes");c(u,p,Ne,"⨁","\\bigoplus");c(u,p,Ne,"⨀","\\bigodot");c(u,p,Ne,"∮","\\oint");c(u,p,Ne,"∯","\\oiint");c(u,p,Ne,"∰","\\oiiint");c(u,p,Ne,"⨆","\\bigsqcup");c(u,p,Ne,"∫","\\smallint");c(P,p,Vn,"…","\\textellipsis");c(u,p,Vn,"…","\\mathellipsis");c(P,p,Vn,"…","\\ldots",!0);c(u,p,Vn,"…","\\ldots",!0);c(u,p,Vn,"⋯","\\@cdots",!0);c(u,p,Vn,"⋱","\\ddots",!0);c(u,p,M,"⋮","\\varvdots");c(P,p,M,"⋮","\\varvdots");c(u,p,ge,"ˊ","\\acute");c(u,p,ge,"ˋ","\\grave");c(u,p,ge,"¨","\\ddot");c(u,p,ge,"~","\\tilde");c(u,p,ge,"ˉ","\\bar");c(u,p,ge,"˘","\\breve");c(u,p,ge,"ˇ","\\check");c(u,p,ge,"^","\\hat");c(u,p,ge,"⃗","\\vec");c(u,p,ge,"˙","\\dot");c(u,p,ge,"˚","\\mathring");c(u,p,V,"","\\@imath");c(u,p,V,"","\\@jmath");c(u,p,M,"ı","ı");c(u,p,M,"ȷ","ȷ");c(P,p,M,"ı","\\i",!0);c(P,p,M,"ȷ","\\j",!0);c(P,p,M,"ß","\\ss",!0);c(P,p,M,"æ","\\ae",!0);c(P,p,M,"œ","\\oe",!0);c(P,p,M,"ø","\\o",!0);c(P,p,M,"Æ","\\AE",!0);c(P,p,M,"Œ","\\OE",!0);c(P,p,M,"Ø","\\O",!0);c(P,p,ge,"ˊ","\\'");c(P,p,ge,"ˋ","\\`");c(P,p,ge,"ˆ","\\^");c(P,p,ge,"˜","\\~");c(P,p,ge,"ˉ","\\=");c(P,p,ge,"˘","\\u");c(P,p,ge,"˙","\\.");c(P,p,ge,"¸","\\c");c(P,p,ge,"˚","\\r");c(P,p,ge,"ˇ","\\v");c(P,p,ge,"¨",'\\"');c(P,p,ge,"˝","\\H");c(P,p,ge,"◯","\\textcircled");var mp={"--":!0,"---":!0,"``":!0,"''":!0};c(P,p,M,"–","--",!0);c(P,p,M,"–","\\textendash");c(P,p,M,"—","---",!0);c(P,p,M,"—","\\textemdash");c(P,p,M,"‘","`",!0);c(P,p,M,"‘","\\textquoteleft");c(P,p,M,"’","'",!0);c(P,p,M,"’","\\textquoteright");c(P,p,M,"“","``",!0);c(P,p,M,"“","\\textquotedblleft");c(P,p,M,"”","''",!0);c(P,p,M,"”","\\textquotedblright");c(u,p,M,"°","\\degree",!0);c(P,p,M,"°","\\degree");c(P,p,M,"°","\\textdegree",!0);c(u,p,M,"£","\\pounds");c(u,p,M,"£","\\mathsterling",!0);c(P,p,M,"£","\\pounds");c(P,p,M,"£","\\textsterling",!0);c(u,k,M,"✠","\\maltese");c(P,k,M,"✠","\\maltese");var Gu='0123456789/@."';for(var bs=0;bs<Gu.length;bs++){var Uu=Gu.charAt(bs);c(u,p,M,Uu,Uu)}var Wu='0123456789!@*()-=+";:?/.,';for(var ws=0;ws<Wu.length;ws++){var Vu=Wu.charAt(ws);c(P,p,M,Vu,Vu)}var mo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var xs=0;xs<mo.length;xs++){var gi=mo.charAt(xs);c(u,p,V,gi,gi),c(P,p,M,gi,gi)}c(u,k,M,"C","ℂ");c(P,k,M,"C","ℂ");c(u,k,M,"H","ℍ");c(P,k,M,"H","ℍ");c(u,k,M,"N","ℕ");c(P,k,M,"N","ℕ");c(u,k,M,"P","ℙ");c(P,k,M,"P","ℙ");c(u,k,M,"Q","ℚ");c(P,k,M,"Q","ℚ");c(u,k,M,"R","ℝ");c(P,k,M,"R","ℝ");c(u,k,M,"Z","ℤ");c(P,k,M,"Z","ℤ");c(u,p,V,"h","ℎ");c(P,p,V,"h","ℎ");var J="";for(var He=0;He<mo.length;He++){var ke=mo.charAt(He);J=String.fromCharCode(55349,56320+He),c(u,p,V,ke,J),c(P,p,M,ke,J),J=String.fromCharCode(55349,56372+He),c(u,p,V,ke,J),c(P,p,M,ke,J),J=String.fromCharCode(55349,56424+He),c(u,p,V,ke,J),c(P,p,M,ke,J),J=String.fromCharCode(55349,56580+He),c(u,p,V,ke,J),c(P,p,M,ke,J),J=String.fromCharCode(55349,56684+He),c(u,p,V,ke,J),c(P,p,M,ke,J),J=String.fromCharCode(55349,56736+He),c(u,p,V,ke,J),c(P,p,M,ke,J),J=String.fromCharCode(55349,56788+He),c(u,p,V,ke,J),c(P,p,M,ke,J),J=String.fromCharCode(55349,56840+He),c(u,p,V,ke,J),c(P,p,M,ke,J),J=String.fromCharCode(55349,56944+He),c(u,p,V,ke,J),c(P,p,M,ke,J),He<26&&(J=String.fromCharCode(55349,56632+He),c(u,p,V,ke,J),c(P,p,M,ke,J),J=String.fromCharCode(55349,56476+He),c(u,p,V,ke,J),c(P,p,M,ke,J))}J="𝕜";c(u,p,V,"k",J);c(P,p,M,"k",J);for(var Gr=0;Gr<10;Gr++){var pr=Gr.toString();J=String.fromCharCode(55349,57294+Gr),c(u,p,V,pr,J),c(P,p,M,pr,J),J=String.fromCharCode(55349,57314+Gr),c(u,p,V,pr,J),c(P,p,M,pr,J),J=String.fromCharCode(55349,57324+Gr),c(u,p,V,pr,J),c(P,p,M,pr,J),J=String.fromCharCode(55349,57334+Gr),c(u,p,V,pr,J),c(P,p,M,pr,J)}var Rl="ÐÞþ";for(var ks=0;ks<Rl.length;ks++){var yi=Rl.charAt(ks);c(u,p,V,yi,yi),c(P,p,M,yi,yi)}var vi=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],$u=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],Ky=function(t,r){var n=t.charCodeAt(0),a=t.charCodeAt(1),i=(n-55296)*1024+(a-56320)+65536,o=r==="math"?0:1;if(119808<=i&&i<120484){var s=Math.floor((i-119808)/26);return[vi[s][2],vi[s][o]]}else if(120782<=i&&i<=120831){var l=Math.floor((i-120782)/10);return[$u[l][2],$u[l][o]]}else{if(i===120485||i===120486)return[vi[0][2],vi[0][o]];if(120486<i&&i<120782)return["",""];throw new L("Unsupported character: "+t)}},Lo=function(t,r,n){return de[n][t]&&de[n][t].replace&&(t=de[n][t].replace),{value:t,metrics:G0(t,r,n)}},Ct=function(t,r,n,a,i){var o=Lo(t,r,n),s=o.metrics;t=o.value;var l;if(s){var d=s.italic;(n==="text"||a&&a.font==="mathit")&&(d=0),l=new wt(t,s.height,s.depth,d,s.skew,s.width,i)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+n+"'")),l=new wt(t,0,0,0,0,0,i);if(a){l.maxFontSize=a.sizeMultiplier,a.style.isTight()&&l.classes.push("mtight");var m=a.getColor();m&&(l.style.color=m)}return l},Qy=function(t,r,n,a){return a===void 0&&(a=[]),n.font==="boldsymbol"&&Lo(t,"Main-Bold",r).metrics?Ct(t,"Main-Bold",r,n,a.concat(["mathbf"])):t==="\\"||de[r][t].font==="main"?Ct(t,"Main-Regular",r,n,a):Ct(t,"AMS-Regular",r,n,a.concat(["amsrm"]))},Xy=function(t,r,n,a,i){return i!=="textord"&&Lo(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Zy=function(t,r,n){var a=t.mode,i=t.text,o=["mord"],s=a==="math"||a==="text"&&r.font,l=s?r.font:r.fontFamily,d="",m="";if(i.charCodeAt(0)===55349&&([d,m]=Ky(i,a)),d.length>0)return Ct(i,d,a,r,o.concat(m));if(l){var f,y;if(l==="boldsymbol"){var x=Xy(i,a,r,o,n);f=x.fontName,y=[x.fontClass]}else s?(f=gp[l].fontName,y=[l]):(f=bi(l,r.fontWeight,r.fontShape),y=[l,r.fontWeight,r.fontShape]);if(Lo(i,f,a).metrics)return Ct(i,f,a,r,o.concat(y));if(mp.hasOwnProperty(i)&&f.slice(0,10)==="Typewriter"){for(var A=[],T=0;T<i.length;T++)A.push(Ct(i[T],f,a,r,o.concat(y)));return fp(A)}}if(n==="mathord")return Ct(i,"Math-Italic",a,r,o.concat(["mathnormal"]));if(n==="textord"){var N=de[a][i]&&de[a][i].font;if(N==="ams"){var b=bi("amsrm",r.fontWeight,r.fontShape);return Ct(i,b,a,r,o.concat("amsrm",r.fontWeight,r.fontShape))}else if(N==="main"||!N){var v=bi("textrm",r.fontWeight,r.fontShape);return Ct(i,v,a,r,o.concat(r.fontWeight,r.fontShape))}else{var w=bi(N,r.fontWeight,r.fontShape);return Ct(i,w,a,r,o.concat(w,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+n+" in makeOrd")},e3=(e,t)=>{if(Pr(e.classes)!==Pr(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize)return!1;if(e.classes.length===1){var r=e.classes[0];if(r==="mbin"||r==="mord")return!1}for(var n in e.style)if(e.style.hasOwnProperty(n)&&e.style[n]!==t.style[n])return!1;for(var a in t.style)if(t.style.hasOwnProperty(a)&&e.style[a]!==t.style[a])return!1;return!0},t3=e=>{for(var t=0;t<e.length-1;t++){var r=e[t],n=e[t+1];r instanceof wt&&n instanceof wt&&e3(r,n)&&(r.text+=n.text,r.height=Math.max(r.height,n.height),r.depth=Math.max(r.depth,n.depth),r.italic=n.italic,e.splice(t+1,1),t--)}return e},W0=function(t){for(var r=0,n=0,a=0,i=0;i<t.children.length;i++){var o=t.children[i];o.height>r&&(r=o.height),o.depth>n&&(n=o.depth),o.maxFontSize>a&&(a=o.maxFontSize)}t.height=r,t.depth=n,t.maxFontSize=a},Je=function(t,r,n,a){var i=new Va(t,r,n,a);return W0(i),i},pp=(e,t,r,n)=>new Va(e,t,r,n),r3=function(t,r,n){var a=Je([t],[],r);return a.height=Math.max(n||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),a.style.borderBottomWidth=O(a.height),a.maxFontSize=1,a},n3=function(t,r,n,a){var i=new U0(t,r,n,a);return W0(i),i},fp=function(t){var r=new Wa(t);return W0(r),r},a3=function(t,r){return t instanceof Wa?Je([],[t],r):t},i3=function(t){if(t.positionType==="individualShift"){for(var r=t.children,n=[r[0]],a=-r[0].shift-r[0].elem.depth,i=a,o=1;o<r.length;o++){var s=-r[o].shift-i-r[o].elem.depth,l=s-(r[o-1].elem.height+r[o-1].elem.depth);i=i+s,n.push({type:"kern",size:l}),n.push(r[o])}return{children:n,depth:a}}var d;if(t.positionType==="top"){for(var m=t.positionData,f=0;f<t.children.length;f++){var y=t.children[f];m-=y.type==="kern"?y.size:y.elem.height+y.elem.depth}d=m}else if(t.positionType==="bottom")d=-t.positionData;else{var x=t.children[0];if(x.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")d=-x.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")d=-x.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:d}},o3=function(t,r){for(var{children:n,depth:a}=i3(t),i=0,o=0;o<n.length;o++){var s=n[o];if(s.type==="elem"){var l=s.elem;i=Math.max(i,l.maxFontSize,l.height)}}i+=2;var d=Je(["pstrut"],[]);d.style.height=O(i);for(var m=[],f=a,y=a,x=a,A=0;A<n.length;A++){var T=n[A];if(T.type==="kern")x+=T.size;else{var N=T.elem,b=T.wrapperClasses||[],v=T.wrapperStyle||{},w=Je(b,[d,N],void 0,v);w.style.top=O(-i-x-N.depth),T.marginLeft&&(w.style.marginLeft=T.marginLeft),T.marginRight&&(w.style.marginRight=T.marginRight),m.push(w),x+=N.height+N.depth}f=Math.min(f,x),y=Math.max(y,x)}var C=Je(["vlist"],m);C.style.height=O(y);var B;if(f<0){var z=Je([],[]),E=Je(["vlist"],[z]);E.style.height=O(-f);var R=Je(["vlist-s"],[new wt("​")]);B=[Je(["vlist-r"],[C,R]),Je(["vlist-r"],[E])]}else B=[Je(["vlist-r"],[C])];var _=Je(["vlist-t"],B);return B.length===2&&_.classes.push("vlist-t2"),_.height=y,_.depth=-f,_},s3=(e,t)=>{var r=Je(["mspace"],[],t),n=be(e,t);return r.style.marginRight=O(n),r},bi=function(t,r,n){var a="";switch(t){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=t}var i;return r==="textbf"&&n==="textit"?i="BoldItalic":r==="textbf"?i="Bold":r==="textit"?i="Italic":i="Regular",a+"-"+i},gp={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},yp={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},l3=function(t,r){var[n,a,i]=yp[t],o=new Rr(n),s=new or([o],{width:O(a),height:O(i),style:"width:"+O(a),viewBox:"0 0 "+1e3*a+" "+1e3*i,preserveAspectRatio:"xMinYMin"}),l=pp(["overlay"],[s],r);return l.height=i,l.style.height=O(i),l.style.width=O(a),l},D={fontMap:gp,makeSymbol:Ct,mathsym:Qy,makeSpan:Je,makeSvgSpan:pp,makeLineSpan:r3,makeAnchor:n3,makeFragment:fp,wrapFragment:a3,makeVList:o3,makeOrd:Zy,makeGlue:s3,staticSvg:l3,svgData:yp,tryCombineChars:t3},ye={number:3,unit:"mu"},Ur={number:4,unit:"mu"},$t={number:5,unit:"mu"},c3={mord:{mop:ye,mbin:Ur,mrel:$t,minner:ye},mop:{mord:ye,mop:ye,mrel:$t,minner:ye},mbin:{mord:Ur,mop:Ur,mopen:Ur,minner:Ur},mrel:{mord:$t,mop:$t,mopen:$t,minner:$t},mopen:{},mclose:{mop:ye,mbin:Ur,mrel:$t,minner:ye},mpunct:{mord:ye,mop:ye,mrel:$t,mopen:ye,mclose:ye,mpunct:ye,minner:ye},minner:{mord:ye,mop:ye,mbin:Ur,mrel:$t,mopen:ye,mpunct:ye,minner:ye}},u3={mord:{mop:ye},mop:{mord:ye,mop:ye},mbin:{},mrel:{},mopen:{},mclose:{mop:ye},mpunct:{},minner:{mop:ye}},vp={},po={},fo={};function F(e){for(var{type:t,names:r,props:n,handler:a,htmlBuilder:i,mathmlBuilder:o}=e,s={type:t,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:a},l=0;l<r.length;++l)vp[r[l]]=s;t&&(i&&(po[t]=i),o&&(fo[t]=o))}function sn(e){var{type:t,htmlBuilder:r,mathmlBuilder:n}=e;F({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:n})}var go=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},Me=function(t){return t.type==="ordgroup"?t.body:[t]},sr=D.makeSpan,d3=["leftmost","mbin","mopen","mrel","mop","mpunct"],h3=["rightmost","mrel","mclose","mpunct"],m3={display:$.DISPLAY,text:$.TEXT,script:$.SCRIPT,scriptscript:$.SCRIPTSCRIPT},p3={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Ie=function(t,r,n,a){a===void 0&&(a=[null,null]);for(var i=[],o=0;o<t.length;o++){var s=ne(t[o],r);if(s instanceof Wa){var l=s.children;i.push(...l)}else i.push(s)}if(D.tryCombineChars(i),!n)return i;var d=r;if(t.length===1){var m=t[0];m.type==="sizing"?d=r.havingSize(m.size):m.type==="styling"&&(d=r.havingStyle(m3[m.style]))}var f=sr([a[0]||"leftmost"],[],r),y=sr([a[1]||"rightmost"],[],r),x=n==="root";return Ju(i,(A,T)=>{var N=T.classes[0],b=A.classes[0];N==="mbin"&&h3.includes(b)?T.classes[0]="mord":b==="mbin"&&d3.includes(N)&&(A.classes[0]="mord")},{node:f},y,x),Ju(i,(A,T)=>{var N=jl(T),b=jl(A),v=N&&b?A.hasClass("mtight")?u3[N][b]:c3[N][b]:null;if(v)return D.makeGlue(v,d)},{node:f},y,x),i},Ju=function e(t,r,n,a,i){a&&t.push(a);for(var o=0;o<t.length;o++){var s=t[o],l=bp(s);if(l){e(l.children,r,n,null,i);continue}var d=!s.hasClass("mspace");if(d){var m=r(s,n.node);m&&(n.insertAfter?n.insertAfter(m):(t.unshift(m),o++))}d?n.node=s:i&&s.hasClass("newline")&&(n.node=sr(["leftmost"])),n.insertAfter=(f=>y=>{t.splice(f+1,0,y),o++})(o)}a&&t.pop()},bp=function(t){return t instanceof Wa||t instanceof U0||t instanceof Va&&t.hasClass("enclosing")?t:null},f3=function e(t,r){var n=bp(t);if(n){var a=n.children;if(a.length){if(r==="right")return e(a[a.length-1],"right");if(r==="left")return e(a[0],"left")}}return t},jl=function(t,r){return t?(r&&(t=f3(t,r)),p3[t.classes[0]]||null):null},qa=function(t,r){var n=["nulldelimiter"].concat(t.baseSizingClasses());return sr(r.concat(n))},ne=function(t,r,n){if(!t)return sr();if(po[t.type]){var a=po[t.type](t,r);if(n&&r.size!==n.size){a=sr(r.sizingClasses(n),[a],r);var i=r.sizeMultiplier/n.sizeMultiplier;a.height*=i,a.depth*=i}return a}else throw new L("Got group of unknown type: '"+t.type+"'")};function wi(e,t){var r=sr(["base"],e,t),n=sr(["strut"]);return n.style.height=O(r.height+r.depth),r.depth&&(n.style.verticalAlign=O(-r.depth)),r.children.unshift(n),r}function Ll(e,t){var r=null;e.length===1&&e[0].type==="tag"&&(r=e[0].tag,e=e[0].body);var n=Ie(e,t,"root"),a;n.length===2&&n[1].hasClass("tag")&&(a=n.pop());for(var i=[],o=[],s=0;s<n.length;s++)if(o.push(n[s]),n[s].hasClass("mbin")||n[s].hasClass("mrel")||n[s].hasClass("allowbreak")){for(var l=!1;s<n.length-1&&n[s+1].hasClass("mspace")&&!n[s+1].hasClass("newline");)s++,o.push(n[s]),n[s].hasClass("nobreak")&&(l=!0);l||(i.push(wi(o,t)),o=[])}else n[s].hasClass("newline")&&(o.pop(),o.length>0&&(i.push(wi(o,t)),o=[]),i.push(n[s]));o.length>0&&i.push(wi(o,t));var d;r?(d=wi(Ie(r,t,!0)),d.classes=["tag"],i.push(d)):a&&i.push(a);var m=sr(["katex-html"],i);if(m.setAttribute("aria-hidden","true"),d){var f=d.children[0];f.style.height=O(m.height+m.depth),m.depth&&(f.style.verticalAlign=O(-m.depth))}return m}function wp(e){return new Wa(e)}class at{constructor(t,r,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=n||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=Pr(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof Ht&&this.children[n+1]instanceof Ht){for(var a=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof Ht;)a+=this.children[++n].toText();t.appendChild(new Ht(a).toNode())}else t.appendChild(this.children[n].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=ae.escape(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+ae.escape(Pr(this.classes))+'"'),t+=">";for(var n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class Ht{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return ae.escape(this.toText())}toText(){return this.text}}class g3{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",O(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+O(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var j={MathNode:at,TextNode:Ht,SpaceNode:g3,newDocumentFragment:wp},xt=function(t,r,n){return de[r][t]&&de[r][t].replace&&t.charCodeAt(0)!==55349&&!(mp.hasOwnProperty(t)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(t=de[r][t].replace),new j.TextNode(t)},V0=function(t){return t.length===1?t[0]:new j.MathNode("mrow",t)},$0=function(t,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var n=r.font;if(!n||n==="mathnormal")return null;var a=t.mode;if(n==="mathit")return"italic";if(n==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(n==="mathbf")return"bold";if(n==="mathbb")return"double-struck";if(n==="mathsfit")return"sans-serif-italic";if(n==="mathfrak")return"fraktur";if(n==="mathscr"||n==="mathcal")return"script";if(n==="mathsf")return"sans-serif";if(n==="mathtt")return"monospace";var i=t.text;if(["\\imath","\\jmath"].includes(i))return null;de[a][i]&&de[a][i].replace&&(i=de[a][i].replace);var o=D.fontMap[n].fontName;return G0(i,o,a)?D.fontMap[n].variant:null};function Ss(e){if(!e)return!1;if(e.type==="mi"&&e.children.length===1){var t=e.children[0];return t instanceof Ht&&t.text==="."}else if(e.type==="mo"&&e.children.length===1&&e.getAttribute("separator")==="true"&&e.getAttribute("lspace")==="0em"&&e.getAttribute("rspace")==="0em"){var r=e.children[0];return r instanceof Ht&&r.text===","}else return!1}var tt=function(t,r,n){if(t.length===1){var a=le(t[0],r);return n&&a instanceof at&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var i=[],o,s=0;s<t.length;s++){var l=le(t[s],r);if(l instanceof at&&o instanceof at){if(l.type==="mtext"&&o.type==="mtext"&&l.getAttribute("mathvariant")===o.getAttribute("mathvariant")){o.children.push(...l.children);continue}else if(l.type==="mn"&&o.type==="mn"){o.children.push(...l.children);continue}else if(Ss(l)&&o.type==="mn"){o.children.push(...l.children);continue}else if(l.type==="mn"&&Ss(o))l.children=[...o.children,...l.children],i.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(o.type==="mn"||Ss(o))){var d=l.children[0];d instanceof at&&d.type==="mn"&&(d.children=[...o.children,...d.children],i.pop())}else if(o.type==="mi"&&o.children.length===1){var m=o.children[0];if(m instanceof Ht&&m.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var f=l.children[0];f instanceof Ht&&f.text.length>0&&(f.text=f.text.slice(0,1)+"̸"+f.text.slice(1),i.pop())}}}i.push(l),o=l}return i},jr=function(t,r,n){return V0(tt(t,r,n))},le=function(t,r){if(!t)return new j.MathNode("mrow");if(fo[t.type]){var n=fo[t.type](t,r);return n}else throw new L("Got group of unknown type: '"+t.type+"'")};function Yu(e,t,r,n,a){var i=tt(e,r),o;i.length===1&&i[0]instanceof at&&["mrow","mtable"].includes(i[0].type)?o=i[0]:o=new j.MathNode("mrow",i);var s=new j.MathNode("annotation",[new j.TextNode(t)]);s.setAttribute("encoding","application/x-tex");var l=new j.MathNode("semantics",[o,s]),d=new j.MathNode("math",[l]);d.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&d.setAttribute("display","block");var m=a?"katex":"katex-mathml";return D.makeSpan([m],[d])}var xp=function(t){return new Kt({style:t.displayMode?$.DISPLAY:$.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},kp=function(t,r){if(r.displayMode){var n=["katex-display"];r.leqno&&n.push("leqno"),r.fleqn&&n.push("fleqn"),t=D.makeSpan(n,[t])}return t},y3=function(t,r,n){var a=xp(n),i;if(n.output==="mathml")return Yu(t,r,a,n.displayMode,!0);if(n.output==="html"){var o=Ll(t,a);i=D.makeSpan(["katex"],[o])}else{var s=Yu(t,r,a,n.displayMode,!1),l=Ll(t,a);i=D.makeSpan(["katex"],[s,l])}return kp(i,n)},v3=function(t,r,n){var a=xp(n),i=Ll(t,a),o=D.makeSpan(["katex"],[i]);return kp(o,n)},b3={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},w3=function(t){var r=new j.MathNode("mo",[new j.TextNode(b3[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},x3={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},k3=function(t){return t.type==="ordgroup"?t.body.length:1},S3=function(t,r){function n(){var s=4e5,l=t.label.slice(1);if(["widehat","widecheck","widetilde","utilde"].includes(l)){var d=t,m=k3(d.base),f,y,x;if(m>5)l==="widehat"||l==="widecheck"?(f=420,s=2364,x=.42,y=l+"4"):(f=312,s=2340,x=.34,y="tilde4");else{var A=[1,1,2,2,3,3][m];l==="widehat"||l==="widecheck"?(s=[0,1062,2364,2364,2364][A],f=[0,239,300,360,420][A],x=[0,.24,.3,.3,.36,.42][A],y=l+A):(s=[0,600,1033,2339,2340][A],f=[0,260,286,306,312][A],x=[0,.26,.286,.3,.306,.34][A],y="tilde"+A)}var T=new Rr(y),N=new or([T],{width:"100%",height:O(x),viewBox:"0 0 "+s+" "+f,preserveAspectRatio:"none"});return{span:D.makeSvgSpan([],[N],r),minWidth:0,height:x}}else{var b=[],v=x3[l],[w,C,B]=v,z=B/1e3,E=w.length,R,_;if(E===1){var U=v[3];R=["hide-tail"],_=[U]}else if(E===2)R=["halfarrow-left","halfarrow-right"],_=["xMinYMin","xMaxYMin"];else if(E===3)R=["brace-left","brace-center","brace-right"],_=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+E+" children.");for(var Q=0;Q<E;Q++){var X=new Rr(w[Q]),ce=new or([X],{width:"400em",height:O(z),viewBox:"0 0 "+s+" "+B,preserveAspectRatio:_[Q]+" slice"}),pe=D.makeSvgSpan([R[Q]],[ce],r);if(E===1)return{span:pe,minWidth:C,height:z};pe.style.height=O(z),b.push(pe)}return{span:D.makeSpan(["stretchy"],b,r),minWidth:C,height:z}}}var{span:a,minWidth:i,height:o}=n();return a.height=o,a.style.height=O(o),i>0&&(a.style.minWidth=O(i)),a},T3=function(t,r,n,a,i){var o,s=t.height+t.depth+n+a;if(/fbox|color|angl/.test(r)){if(o=D.makeSpan(["stretchy",r],[],i),r==="fbox"){var l=i.color&&i.getColor();l&&(o.style.borderColor=l)}}else{var d=[];/^[bx]cancel$/.test(r)&&d.push(new Pl({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&d.push(new Pl({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var m=new or(d,{width:"100%",height:O(s)});o=D.makeSvgSpan([],[m],i)}return o.height=s,o.style.height=O(s),o},lr={encloseSpan:T3,mathMLnode:w3,svgSpan:S3};function ee(e,t){if(!e||e.type!==t)throw new Error("Expected node of type "+t+", but got "+(e?"node of type "+e.type:String(e)));return e}function J0(e){var t=qo(e);if(!t)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return t}function qo(e){return e&&(e.type==="atom"||Yy.hasOwnProperty(e.type))?e:null}var Y0=(e,t)=>{var r,n,a;e&&e.type==="supsub"?(n=ee(e.base,"accent"),r=n.base,e.base=r,a=$y(ne(e,t)),e.base=n):(n=ee(e,"accent"),r=n.base);var i=ne(r,t.havingCrampedStyle()),o=n.isShifty&&ae.isCharacterBox(r),s=0;if(o){var l=ae.getBaseElem(r),d=ne(l,t.havingCrampedStyle());s=_u(d).skew}var m=n.label==="\\c",f=m?i.height+i.depth:Math.min(i.height,t.fontMetrics().xHeight),y;if(n.isStretchy)y=lr.svgSpan(n,t),y=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"elem",elem:y,wrapperClasses:["svg-align"],wrapperStyle:s>0?{width:"calc(100% - "+O(2*s)+")",marginLeft:O(2*s)}:void 0}]},t);else{var x,A;n.label==="\\vec"?(x=D.staticSvg("vec",t),A=D.svgData.vec[1]):(x=D.makeOrd({mode:n.mode,text:n.label},t,"textord"),x=_u(x),x.italic=0,A=x.width,m&&(f+=x.depth)),y=D.makeSpan(["accent-body"],[x]);var T=n.label==="\\textcircled";T&&(y.classes.push("accent-full"),f=i.height);var N=s;T||(N-=A/2),y.style.left=O(N),n.label==="\\textcircled"&&(y.style.top=".2em"),y=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:-f},{type:"elem",elem:y}]},t)}var b=D.makeSpan(["mord","accent"],[y],t);return a?(a.children[0]=b,a.height=Math.max(b.height,a.height),a.classes[0]="mord",a):b},Sp=(e,t)=>{var r=e.isStretchy?lr.mathMLnode(e.label):new j.MathNode("mo",[xt(e.label,e.mode)]),n=new j.MathNode("mover",[le(e.base,t),r]);return n.setAttribute("accent","true"),n},A3=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));F({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(e,t)=>{var r=go(t[0]),n=!A3.test(e.funcName),a=!n||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:n,isShifty:a,base:r}},htmlBuilder:Y0,mathmlBuilder:Sp});F({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(e,t)=>{var r=t[0],n=e.parser.mode;return n==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:e.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Y0,mathmlBuilder:Sp});F({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"accentUnder",mode:r.mode,label:n,base:a}},htmlBuilder:(e,t)=>{var r=ne(e.base,t),n=lr.svgSpan(e,t),a=e.label==="\\utilde"?.12:0,i=D.makeVList({positionType:"top",positionData:r.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:r}]},t);return D.makeSpan(["mord","accentunder"],[i],t)},mathmlBuilder:(e,t)=>{var r=lr.mathMLnode(e.label),n=new j.MathNode("munder",[le(e.base,t),r]);return n.setAttribute("accentunder","true"),n}});var xi=e=>{var t=new j.MathNode("mpadded",e?[e]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};F({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:n,funcName:a}=e;return{type:"xArrow",mode:n.mode,label:a,body:t[0],below:r[0]}},htmlBuilder(e,t){var r=t.style,n=t.havingStyle(r.sup()),a=D.wrapFragment(ne(e.body,n,t),t),i=e.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(i+"-arrow-pad");var o;e.below&&(n=t.havingStyle(r.sub()),o=D.wrapFragment(ne(e.below,n,t),t),o.classes.push(i+"-arrow-pad"));var s=lr.svgSpan(e,t),l=-t.fontMetrics().axisHeight+.5*s.height,d=-t.fontMetrics().axisHeight-.5*s.height-.111;(a.depth>.25||e.label==="\\xleftequilibrium")&&(d-=a.depth);var m;if(o){var f=-t.fontMetrics().axisHeight+o.height+.5*s.height+.111;m=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:d},{type:"elem",elem:s,shift:l},{type:"elem",elem:o,shift:f}]},t)}else m=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:d},{type:"elem",elem:s,shift:l}]},t);return m.children[0].children[0].children[1].classes.push("svg-align"),D.makeSpan(["mrel","x-arrow"],[m],t)},mathmlBuilder(e,t){var r=lr.mathMLnode(e.label);r.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(e.body){var a=xi(le(e.body,t));if(e.below){var i=xi(le(e.below,t));n=new j.MathNode("munderover",[r,i,a])}else n=new j.MathNode("mover",[r,a])}else if(e.below){var o=xi(le(e.below,t));n=new j.MathNode("munder",[r,o])}else n=xi(),n=new j.MathNode("mover",[r,n]);return n}});var M3=D.makeSpan;function Tp(e,t){var r=Ie(e.body,t,!0);return M3([e.mclass],r,t)}function Ap(e,t){var r,n=tt(e.body,t);return e.mclass==="minner"?r=new j.MathNode("mpadded",n):e.mclass==="mord"?e.isCharacterBox?(r=n[0],r.type="mi"):r=new j.MathNode("mi",n):(e.isCharacterBox?(r=n[0],r.type="mo"):r=new j.MathNode("mo",n),e.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):e.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):e.mclass==="mopen"||e.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):e.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}F({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+n.slice(5),body:Me(a),isCharacterBox:ae.isCharacterBox(a)}},htmlBuilder:Tp,mathmlBuilder:Ap});var Oo=e=>{var t=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};F({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(e,t){var{parser:r}=e;return{type:"mclass",mode:r.mode,mclass:Oo(t[0]),body:Me(t[1]),isCharacterBox:ae.isCharacterBox(t[1])}}});F({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(e,t){var{parser:r,funcName:n}=e,a=t[1],i=t[0],o;n!=="\\stackrel"?o=Oo(a):o="mrel";var s={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Me(a)},l={type:"supsub",mode:i.mode,base:s,sup:n==="\\underset"?null:i,sub:n==="\\underset"?i:null};return{type:"mclass",mode:r.mode,mclass:o,body:[l],isCharacterBox:ae.isCharacterBox(l)}},htmlBuilder:Tp,mathmlBuilder:Ap});F({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"pmb",mode:r.mode,mclass:Oo(t[0]),body:Me(t[0])}},htmlBuilder(e,t){var r=Ie(e.body,t,!0),n=D.makeSpan([e.mclass],r,t);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(e,t){var r=tt(e.body,t),n=new j.MathNode("mstyle",r);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var C3={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Ku=()=>({type:"styling",body:[],mode:"math",style:"display"}),Qu=e=>e.type==="textord"&&e.text==="@",N3=(e,t)=>(e.type==="mathord"||e.type==="atom")&&e.text===t;function D3(e,t,r){var n=C3[e];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(n,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var a=r.callFunction("\\\\cdleft",[t[0]],[]),i={type:"atom",text:n,mode:"math",family:"rel"},o=r.callFunction("\\Big",[i],[]),s=r.callFunction("\\\\cdright",[t[1]],[]),l={type:"ordgroup",mode:"math",body:[a,o,s]};return r.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var d={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[d],[])}default:return{type:"textord",text:" ",mode:"math"}}}function B3(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var r=e.fetch().text;if(r==="&"||r==="\\\\")e.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new L("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var n=[],a=[n],i=0;i<t.length;i++){for(var o=t[i],s=Ku(),l=0;l<o.length;l++)if(!Qu(o[l]))s.body.push(o[l]);else{n.push(s),l+=1;var d=J0(o[l]).text,m=new Array(2);if(m[0]={type:"ordgroup",mode:"math",body:[]},m[1]={type:"ordgroup",mode:"math",body:[]},!("=|.".indexOf(d)>-1))if("<>AV".indexOf(d)>-1)for(var f=0;f<2;f++){for(var y=!0,x=l+1;x<o.length;x++){if(N3(o[x],d)){y=!1,l=x;break}if(Qu(o[x]))throw new L("Missing a "+d+" character to complete a CD arrow.",o[x]);m[f].body.push(o[x])}if(y)throw new L("Missing a "+d+" character to complete a CD arrow.",o[l])}else throw new L('Expected one of "<>AV=|." after @',o[l]);var A=D3(d,m,e),T={type:"styling",body:[A],mode:"math",style:"display"};n.push(T),s=Ku()}i%2===0?n.push(s):n.shift(),n=[],a.push(n)}e.gullet.endGroup(),e.gullet.endGroup();var N=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:N,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}F({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e;return{type:"cdlabel",mode:r.mode,side:n.slice(4),label:t[0]}},htmlBuilder(e,t){var r=t.havingStyle(t.style.sup()),n=D.wrapFragment(ne(e.label,r,t),t);return n.classes.push("cd-label-"+e.side),n.style.bottom=O(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(e,t){var r=new j.MathNode("mrow",[le(e.label,t)]);return r=new j.MathNode("mpadded",[r]),r.setAttribute("width","0"),e.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new j.MathNode("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});F({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(e,t){var{parser:r}=e;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(e,t){var r=D.wrapFragment(ne(e.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(e,t){return new j.MathNode("mrow",[le(e.fragment,t)])}});F({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:r}=e,n=ee(t[0],"ordgroup"),a=n.body,i="",o=0;o<a.length;o++){var s=ee(a[o],"textord");i+=s.text}var l=parseInt(i),d;if(isNaN(l))throw new L("\\@char has non-numeric argument "+i);if(l<0||l>=1114111)throw new L("\\@char with invalid code point "+i);return l<=65535?d=String.fromCharCode(l):(l-=65536,d=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:r.mode,text:d}}});var Mp=(e,t)=>{var r=Ie(e.body,t.withColor(e.color),!1);return D.makeFragment(r)},Cp=(e,t)=>{var r=tt(e.body,t.withColor(e.color)),n=new j.MathNode("mstyle",r);return n.setAttribute("mathcolor",e.color),n};F({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(e,t){var{parser:r}=e,n=ee(t[0],"color-token").color,a=t[1];return{type:"color",mode:r.mode,color:n,body:Me(a)}},htmlBuilder:Mp,mathmlBuilder:Cp});F({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(e,t){var{parser:r,breakOnTokenText:n}=e,a=ee(t[0],"color-token").color;r.gullet.macros.set("\\current@color",a);var i=r.parseExpression(!0,n);return{type:"color",mode:r.mode,color:a,body:i}},htmlBuilder:Mp,mathmlBuilder:Cp});F({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,r){var{parser:n}=e,a=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,i=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:i,size:a&&ee(a,"size").value}},htmlBuilder(e,t){var r=D.makeSpan(["mspace"],[],t);return e.newLine&&(r.classes.push("newline"),e.size&&(r.style.marginTop=O(be(e.size,t)))),r},mathmlBuilder(e,t){var r=new j.MathNode("mspace");return e.newLine&&(r.setAttribute("linebreak","newline"),e.size&&r.setAttribute("height",O(be(e.size,t)))),r}});var ql={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Np=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new L("Expected a control sequence",e);return t},I3=e=>{var t=e.gullet.popToken();return t.text==="="&&(t=e.gullet.popToken(),t.text===" "&&(t=e.gullet.popToken())),t},Dp=(e,t,r,n)=>{var a=e.gullet.macros.get(r.text);a==null&&(r.noexpand=!0,a={tokens:[r],numArgs:0,unexpandable:!e.gullet.isExpandable(r.text)}),e.gullet.macros.set(t,a,n)};F({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:r}=e;t.consumeSpaces();var n=t.fetch();if(ql[n.text])return(r==="\\global"||r==="\\\\globallong")&&(n.text=ql[n.text]),ee(t.parseFunction(),"internal");throw new L("Invalid token after macro prefix",n)}});F({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=t.gullet.popToken(),a=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new L("Expected a control sequence",n);for(var i=0,o,s=[[]];t.gullet.future().text!=="{";)if(n=t.gullet.popToken(),n.text==="#"){if(t.gullet.future().text==="{"){o=t.gullet.future(),s[i].push("{");break}if(n=t.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new L('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==i+1)throw new L('Argument number "'+n.text+'" out of order');i++,s.push([])}else{if(n.text==="EOF")throw new L("Expected a macro definition");s[i].push(n.text)}var{tokens:l}=t.gullet.consumeArg();return o&&l.unshift(o),(r==="\\edef"||r==="\\xdef")&&(l=t.gullet.expandTokens(l),l.reverse()),t.gullet.macros.set(a,{tokens:l,numArgs:i,delimiters:s},r===ql[r]),{type:"internal",mode:t.mode}}});F({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=Np(t.gullet.popToken());t.gullet.consumeSpaces();var a=I3(t);return Dp(t,n,a,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});F({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=Np(t.gullet.popToken()),a=t.gullet.popToken(),i=t.gullet.popToken();return Dp(t,n,i,r==="\\\\globalfuture"),t.gullet.pushToken(i),t.gullet.pushToken(a),{type:"internal",mode:t.mode}}});var sa=function(t,r,n){var a=de.math[t]&&de.math[t].replace,i=G0(a||t,r,n);if(!i)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return i},K0=function(t,r,n,a){var i=n.havingBaseStyle(r),o=D.makeSpan(a.concat(i.sizingClasses(n)),[t],n),s=i.sizeMultiplier/n.sizeMultiplier;return o.height*=s,o.depth*=s,o.maxFontSize=i.sizeMultiplier,o},Bp=function(t,r,n){var a=r.havingBaseStyle(n),i=(1-r.sizeMultiplier/a.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=O(i),t.height-=i,t.depth+=i},z3=function(t,r,n,a,i,o){var s=D.makeSymbol(t,"Main-Regular",i,a),l=K0(s,r,a,o);return n&&Bp(l,a,r),l},E3=function(t,r,n,a){return D.makeSymbol(t,"Size"+r+"-Regular",n,a)},Ip=function(t,r,n,a,i,o){var s=E3(t,r,i,a),l=K0(D.makeSpan(["delimsizing","size"+r],[s],a),$.TEXT,a,o);return n&&Bp(l,a,$.TEXT),l},Ts=function(t,r,n){var a;r==="Size1-Regular"?a="delim-size1":a="delim-size4";var i=D.makeSpan(["delimsizinginner",a],[D.makeSpan([],[D.makeSymbol(t,r,n)])]);return{type:"elem",elem:i}},As=function(t,r,n){var a=Ft["Size4-Regular"][t.charCodeAt(0)]?Ft["Size4-Regular"][t.charCodeAt(0)][4]:Ft["Size1-Regular"][t.charCodeAt(0)][4],i=new Rr("inner",qy(t,Math.round(1e3*r))),o=new or([i],{width:O(a),height:O(r),style:"width:"+O(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),s=D.makeSvgSpan([],[o],n);return s.height=r,s.style.height=O(r),s.style.width=O(a),{type:"elem",elem:s}},Ol=.008,ki={type:"kern",size:-1*Ol},P3=["|","\\lvert","\\rvert","\\vert"],R3=["\\|","\\lVert","\\rVert","\\Vert"],zp=function(t,r,n,a,i,o){var s,l,d,m,f="",y=0;s=d=m=t,l=null;var x="Size1-Regular";t==="\\uparrow"?d=m="⏐":t==="\\Uparrow"?d=m="‖":t==="\\downarrow"?s=d="⏐":t==="\\Downarrow"?s=d="‖":t==="\\updownarrow"?(s="\\uparrow",d="⏐",m="\\downarrow"):t==="\\Updownarrow"?(s="\\Uparrow",d="‖",m="\\Downarrow"):P3.includes(t)?(d="∣",f="vert",y=333):R3.includes(t)?(d="∥",f="doublevert",y=556):t==="["||t==="\\lbrack"?(s="⎡",d="⎢",m="⎣",x="Size4-Regular",f="lbrack",y=667):t==="]"||t==="\\rbrack"?(s="⎤",d="⎥",m="⎦",x="Size4-Regular",f="rbrack",y=667):t==="\\lfloor"||t==="⌊"?(d=s="⎢",m="⎣",x="Size4-Regular",f="lfloor",y=667):t==="\\lceil"||t==="⌈"?(s="⎡",d=m="⎢",x="Size4-Regular",f="lceil",y=667):t==="\\rfloor"||t==="⌋"?(d=s="⎥",m="⎦",x="Size4-Regular",f="rfloor",y=667):t==="\\rceil"||t==="⌉"?(s="⎤",d=m="⎥",x="Size4-Regular",f="rceil",y=667):t==="("||t==="\\lparen"?(s="⎛",d="⎜",m="⎝",x="Size4-Regular",f="lparen",y=875):t===")"||t==="\\rparen"?(s="⎞",d="⎟",m="⎠",x="Size4-Regular",f="rparen",y=875):t==="\\{"||t==="\\lbrace"?(s="⎧",l="⎨",m="⎩",d="⎪",x="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(s="⎫",l="⎬",m="⎭",d="⎪",x="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(s="⎧",m="⎩",d="⎪",x="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(s="⎫",m="⎭",d="⎪",x="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(s="⎧",m="⎭",d="⎪",x="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(s="⎫",m="⎩",d="⎪",x="Size4-Regular");var A=sa(s,x,i),T=A.height+A.depth,N=sa(d,x,i),b=N.height+N.depth,v=sa(m,x,i),w=v.height+v.depth,C=0,B=1;if(l!==null){var z=sa(l,x,i);C=z.height+z.depth,B=2}var E=T+w+C,R=Math.max(0,Math.ceil((r-E)/(B*b))),_=E+R*B*b,U=a.fontMetrics().axisHeight;n&&(U*=a.sizeMultiplier);var Q=_/2-U,X=[];if(f.length>0){var ce=_-T-w,pe=Math.round(_*1e3),rt=Oy(f,Math.round(ce*1e3)),ht=new Rr(f,rt),zt=(y/1e3).toFixed(3)+"em",H=(pe/1e3).toFixed(3)+"em",K=new or([ht],{width:zt,height:H,viewBox:"0 0 "+y+" "+pe}),Y=D.makeSvgSpan([],[K],a);Y.height=pe/1e3,Y.style.width=zt,Y.style.height=H,X.push({type:"elem",elem:Y})}else{if(X.push(Ts(m,x,i)),X.push(ki),l===null){var oe=_-T-w+2*Ol;X.push(As(d,oe,a))}else{var ie=(_-T-w-C)/2+2*Ol;X.push(As(d,ie,a)),X.push(ki),X.push(Ts(l,x,i)),X.push(ki),X.push(As(d,ie,a))}X.push(ki),X.push(Ts(s,x,i))}var Et=a.havingBaseStyle($.TEXT),kt=D.makeVList({positionType:"bottom",positionData:Q,children:X},Et);return K0(D.makeSpan(["delimsizing","mult"],[kt],Et),$.TEXT,a,o)},Ms=80,Cs=.08,Ns=function(t,r,n,a,i){var o=Ly(t,a,n),s=new Rr(t,o),l=new or([s],{width:"400em",height:O(r),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return D.makeSvgSpan(["hide-tail"],[l],i)},j3=function(t,r){var n=r.havingBaseSizing(),a=jp("\\surd",t*n.sizeMultiplier,Rp,n),i=n.sizeMultiplier,o=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),s,l=0,d=0,m=0,f;return a.type==="small"?(m=1e3+1e3*o+Ms,t<1?i=1:t<1.4&&(i=.7),l=(1+o+Cs)/i,d=(1+o)/i,s=Ns("sqrtMain",l,m,o,r),s.style.minWidth="0.853em",f=.833/i):a.type==="large"?(m=(1e3+Ms)*ya[a.size],d=(ya[a.size]+o)/i,l=(ya[a.size]+o+Cs)/i,s=Ns("sqrtSize"+a.size,l,m,o,r),s.style.minWidth="1.02em",f=1/i):(l=t+o+Cs,d=t+o,m=Math.floor(1e3*t+o)+Ms,s=Ns("sqrtTall",l,m,o,r),s.style.minWidth="0.742em",f=1.056),s.height=d,s.style.height=O(l),{span:s,advanceWidth:f,ruleWidth:(r.fontMetrics().sqrtRuleThickness+o)*i}},Ep=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],L3=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],Pp=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],ya=[0,1.2,1.8,2.4,3],q3=function(t,r,n,a,i){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Ep.includes(t)||Pp.includes(t))return Ip(t,r,!1,n,a,i);if(L3.includes(t))return zp(t,ya[r],!1,n,a,i);throw new L("Illegal delimiter: '"+t+"'")},O3=[{type:"small",style:$.SCRIPTSCRIPT},{type:"small",style:$.SCRIPT},{type:"small",style:$.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],F3=[{type:"small",style:$.SCRIPTSCRIPT},{type:"small",style:$.SCRIPT},{type:"small",style:$.TEXT},{type:"stack"}],Rp=[{type:"small",style:$.SCRIPTSCRIPT},{type:"small",style:$.SCRIPT},{type:"small",style:$.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],H3=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},jp=function(t,r,n,a){for(var i=Math.min(2,3-a.style.size),o=i;o<n.length&&n[o].type!=="stack";o++){var s=sa(t,H3(n[o]),"math"),l=s.height+s.depth;if(n[o].type==="small"){var d=a.havingBaseStyle(n[o].style);l*=d.sizeMultiplier}if(l>r)return n[o]}return n[n.length-1]},Lp=function(t,r,n,a,i,o){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var s;Pp.includes(t)?s=O3:Ep.includes(t)?s=Rp:s=F3;var l=jp(t,r,s,a);return l.type==="small"?z3(t,l.style,n,a,i,o):l.type==="large"?Ip(t,l.size,n,a,i,o):zp(t,r,n,a,i,o)},_3=function(t,r,n,a,i,o){var s=a.fontMetrics().axisHeight*a.sizeMultiplier,l=901,d=5/a.fontMetrics().ptPerEm,m=Math.max(r-s,n+s),f=Math.max(m/500*l,2*m-d);return Lp(t,f,!0,a,i,o)},tr={sqrtImage:j3,sizedDelim:q3,sizeToMaxHeight:ya,customSizedDelim:Lp,leftRightDelim:_3},Xu={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},G3=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function Fo(e,t){var r=qo(e);if(r&&G3.includes(r.text))return r;throw r?new L("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",e):new L("Invalid delimiter type '"+e.type+"'",e)}F({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(e,t)=>{var r=Fo(t[0],e);return{type:"delimsizing",mode:e.parser.mode,size:Xu[e.funcName].size,mclass:Xu[e.funcName].mclass,delim:r.text}},htmlBuilder:(e,t)=>e.delim==="."?D.makeSpan([e.mclass]):tr.sizedDelim(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!=="."&&t.push(xt(e.delim,e.mode));var r=new j.MathNode("mo",t);e.mclass==="mopen"||e.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var n=O(tr.sizeToMaxHeight[e.size]);return r.setAttribute("minsize",n),r.setAttribute("maxsize",n),r}});function Zu(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}F({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=e.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new L("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:Fo(t[0],e).text,color:r}}});F({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=Fo(t[0],e),n=e.parser;++n.leftrightDepth;var a=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var i=ee(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:a,left:r.text,right:i.delim,rightColor:i.color}},htmlBuilder:(e,t)=>{Zu(e);for(var r=Ie(e.body,t,!0,["mopen","mclose"]),n=0,a=0,i=!1,o=0;o<r.length;o++)r[o].isMiddle?i=!0:(n=Math.max(r[o].height,n),a=Math.max(r[o].depth,a));n*=t.sizeMultiplier,a*=t.sizeMultiplier;var s;if(e.left==="."?s=qa(t,["mopen"]):s=tr.leftRightDelim(e.left,n,a,t,e.mode,["mopen"]),r.unshift(s),i)for(var l=1;l<r.length;l++){var d=r[l],m=d.isMiddle;m&&(r[l]=tr.leftRightDelim(m.delim,n,a,m.options,e.mode,[]))}var f;if(e.right===".")f=qa(t,["mclose"]);else{var y=e.rightColor?t.withColor(e.rightColor):t;f=tr.leftRightDelim(e.right,n,a,y,e.mode,["mclose"])}return r.push(f),D.makeSpan(["minner"],r,t)},mathmlBuilder:(e,t)=>{Zu(e);var r=tt(e.body,t);if(e.left!=="."){var n=new j.MathNode("mo",[xt(e.left,e.mode)]);n.setAttribute("fence","true"),r.unshift(n)}if(e.right!=="."){var a=new j.MathNode("mo",[xt(e.right,e.mode)]);a.setAttribute("fence","true"),e.rightColor&&a.setAttribute("mathcolor",e.rightColor),r.push(a)}return V0(r)}});F({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=Fo(t[0],e);if(!e.parser.leftrightDepth)throw new L("\\middle without preceding \\left",r);return{type:"middle",mode:e.parser.mode,delim:r.text}},htmlBuilder:(e,t)=>{var r;if(e.delim===".")r=qa(t,[]);else{r=tr.sizedDelim(e.delim,1,t,e.mode,[]);var n={delim:e.delim,options:t};r.isMiddle=n}return r},mathmlBuilder:(e,t)=>{var r=e.delim==="\\vert"||e.delim==="|"?xt("|","text"):xt(e.delim,e.mode),n=new j.MathNode("mo",[r]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var Q0=(e,t)=>{var r=D.wrapFragment(ne(e.body,t),t),n=e.label.slice(1),a=t.sizeMultiplier,i,o=0,s=ae.isCharacterBox(e.body);if(n==="sout")i=D.makeSpan(["stretchy","sout"]),i.height=t.fontMetrics().defaultRuleThickness/a,o=-.5*t.fontMetrics().xHeight;else if(n==="phase"){var l=be({number:.6,unit:"pt"},t),d=be({number:.35,unit:"ex"},t),m=t.havingBaseSizing();a=a/m.sizeMultiplier;var f=r.height+r.depth+l+d;r.style.paddingLeft=O(f/2+l);var y=Math.floor(1e3*f*a),x=Ry(y),A=new or([new Rr("phase",x)],{width:"400em",height:O(y/1e3),viewBox:"0 0 400000 "+y,preserveAspectRatio:"xMinYMin slice"});i=D.makeSvgSpan(["hide-tail"],[A],t),i.style.height=O(f),o=r.depth+l+d}else{/cancel/.test(n)?s||r.classes.push("cancel-pad"):n==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var T=0,N=0,b=0;/box/.test(n)?(b=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),T=t.fontMetrics().fboxsep+(n==="colorbox"?0:b),N=T):n==="angl"?(b=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),T=4*b,N=Math.max(0,.25-r.depth)):(T=s?.2:0,N=T),i=lr.encloseSpan(r,n,T,N,t),/fbox|boxed|fcolorbox/.test(n)?(i.style.borderStyle="solid",i.style.borderWidth=O(b)):n==="angl"&&b!==.049&&(i.style.borderTopWidth=O(b),i.style.borderRightWidth=O(b)),o=r.depth+N,e.backgroundColor&&(i.style.backgroundColor=e.backgroundColor,e.borderColor&&(i.style.borderColor=e.borderColor))}var v;if(e.backgroundColor)v=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:i,shift:o},{type:"elem",elem:r,shift:0}]},t);else{var w=/cancel|phase/.test(n)?["svg-align"]:[];v=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:i,shift:o,wrapperClasses:w}]},t)}return/cancel/.test(n)&&(v.height=r.height,v.depth=r.depth),/cancel/.test(n)&&!s?D.makeSpan(["mord","cancel-lap"],[v],t):D.makeSpan(["mord"],[v],t)},X0=(e,t)=>{var r=0,n=new j.MathNode(e.label.indexOf("colorbox")>-1?"mpadded":"menclose",[le(e.body,t)]);switch(e.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*r+"pt"),n.setAttribute("height","+"+2*r+"pt"),n.setAttribute("lspace",r+"pt"),n.setAttribute("voffset",r+"pt"),e.label==="\\fcolorbox"){var a=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);n.setAttribute("style","border: "+a+"em solid "+String(e.borderColor))}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&n.setAttribute("mathbackground",e.backgroundColor),n};F({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(e,t,r){var{parser:n,funcName:a}=e,i=ee(t[0],"color-token").color,o=t[1];return{type:"enclose",mode:n.mode,label:a,backgroundColor:i,body:o}},htmlBuilder:Q0,mathmlBuilder:X0});F({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(e,t,r){var{parser:n,funcName:a}=e,i=ee(t[0],"color-token").color,o=ee(t[1],"color-token").color,s=t[2];return{type:"enclose",mode:n.mode,label:a,backgroundColor:o,borderColor:i,body:s}},htmlBuilder:Q0,mathmlBuilder:X0});F({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});F({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"enclose",mode:r.mode,label:n,body:a}},htmlBuilder:Q0,mathmlBuilder:X0});F({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var qp={};function Ut(e){for(var{type:t,names:r,props:n,handler:a,htmlBuilder:i,mathmlBuilder:o}=e,s={type:t,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},l=0;l<r.length;++l)qp[r[l]]=s;i&&(po[t]=i),o&&(fo[t]=o)}var Op={};function g(e,t){Op[e]=t}function ed(e){var t=[];e.consumeSpaces();var r=e.fetch().text;for(r==="\\relax"&&(e.consume(),e.consumeSpaces(),r=e.fetch().text);r==="\\hline"||r==="\\hdashline";)e.consume(),t.push(r==="\\hdashline"),e.consumeSpaces(),r=e.fetch().text;return t}var Ho=e=>{var t=e.parser.settings;if(!t.displayMode)throw new L("{"+e.envName+"} can be used only in display mode.")};function Z0(e){if(e.indexOf("ed")===-1)return e.indexOf("*")===-1}function _r(e,t,r){var{hskipBeforeAndAfter:n,addJot:a,cols:i,arraystretch:o,colSeparationType:s,autoTag:l,singleRow:d,emptySingleRow:m,maxNumCols:f,leqno:y}=t;if(e.gullet.beginGroup(),d||e.gullet.macros.set("\\cr","\\\\\\relax"),!o){var x=e.gullet.expandMacroAsText("\\arraystretch");if(x==null)o=1;else if(o=parseFloat(x),!o||o<0)throw new L("Invalid \\arraystretch: "+x)}e.gullet.beginGroup();var A=[],T=[A],N=[],b=[],v=l!=null?[]:void 0;function w(){l&&e.gullet.macros.set("\\@eqnsw","1",!0)}function C(){v&&(e.gullet.macros.get("\\df@tag")?(v.push(e.subparse([new st("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):v.push(!!l&&e.gullet.macros.get("\\@eqnsw")==="1"))}for(w(),b.push(ed(e));;){var B=e.parseExpression(!1,d?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup(),B={type:"ordgroup",mode:e.mode,body:B},r&&(B={type:"styling",mode:e.mode,style:r,body:[B]}),A.push(B);var z=e.fetch().text;if(z==="&"){if(f&&A.length===f){if(d||s)throw new L("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(z==="\\end"){C(),A.length===1&&B.type==="styling"&&B.body[0].body.length===0&&(T.length>1||!m)&&T.pop(),b.length<T.length+1&&b.push([]);break}else if(z==="\\\\"){e.consume();var E=void 0;e.gullet.future().text!==" "&&(E=e.parseSizeGroup(!0)),N.push(E?E.value:null),C(),b.push(ed(e)),A=[],T.push(A),w()}else throw new L("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:a,arraystretch:o,body:T,cols:i,rowGaps:N,hskipBeforeAndAfter:n,hLinesBeforeRow:b,colSeparationType:s,tags:v,leqno:y}}function ec(e){return e.slice(0,1)==="d"?"display":"text"}var Wt=function(t,r){var n,a,i=t.body.length,o=t.hLinesBeforeRow,s=0,l=new Array(i),d=[],m=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),f=1/r.fontMetrics().ptPerEm,y=5*f;if(t.colSeparationType&&t.colSeparationType==="small"){var x=r.havingStyle($.SCRIPT).sizeMultiplier;y=.2778*(x/r.sizeMultiplier)}var A=t.colSeparationType==="CD"?be({number:3,unit:"ex"},r):12*f,T=3*f,N=t.arraystretch*A,b=.7*N,v=.3*N,w=0;function C(Ka){for(var Qa=0;Qa<Ka.length;++Qa)Qa>0&&(w+=.25),d.push({pos:w,isDashed:Ka[Qa]})}for(C(o[0]),n=0;n<t.body.length;++n){var B=t.body[n],z=b,E=v;s<B.length&&(s=B.length);var R=new Array(B.length);for(a=0;a<B.length;++a){var _=ne(B[a],r);E<_.depth&&(E=_.depth),z<_.height&&(z=_.height),R[a]=_}var U=t.rowGaps[n],Q=0;U&&(Q=be(U,r),Q>0&&(Q+=v,E<Q&&(E=Q),Q=0)),t.addJot&&(E+=T),R.height=z,R.depth=E,w+=z,R.pos=w,w+=E+Q,l[n]=R,C(o[n+1])}var X=w/2+r.fontMetrics().axisHeight,ce=t.cols||[],pe=[],rt,ht,zt=[];if(t.tags&&t.tags.some(Ka=>Ka))for(n=0;n<i;++n){var H=l[n],K=H.pos-X,Y=t.tags[n],oe=void 0;Y===!0?oe=D.makeSpan(["eqn-num"],[],r):Y===!1?oe=D.makeSpan([],[],r):oe=D.makeSpan([],Ie(Y,r,!0),r),oe.depth=H.depth,oe.height=H.height,zt.push({type:"elem",elem:oe,shift:K})}for(a=0,ht=0;a<s||ht<ce.length;++a,++ht){for(var ie=ce[ht]||{},Et=!0;ie.type==="separator";){if(Et||(rt=D.makeSpan(["arraycolsep"],[]),rt.style.width=O(r.fontMetrics().doubleRuleSep),pe.push(rt)),ie.separator==="|"||ie.separator===":"){var kt=ie.separator==="|"?"solid":"dashed",Pt=D.makeSpan(["vertical-separator"],[],r);Pt.style.height=O(w),Pt.style.borderRightWidth=O(m),Pt.style.borderRightStyle=kt,Pt.style.margin="0 "+O(-m/2);var Rt=w-X;Rt&&(Pt.style.verticalAlign=O(-Rt)),pe.push(Pt)}else throw new L("Invalid separator type: "+ie.separator);ht++,ie=ce[ht]||{},Et=!1}if(!(a>=s)){var St=void 0;(a>0||t.hskipBeforeAndAfter)&&(St=ae.deflt(ie.pregap,y),St!==0&&(rt=D.makeSpan(["arraycolsep"],[]),rt.style.width=O(St),pe.push(rt)));var ln=[];for(n=0;n<i;++n){var Ja=l[n],Ya=Ja[a];if(Ya){var sf=Ja.pos-X;Ya.depth=Ja.depth,Ya.height=Ja.height,ln.push({type:"elem",elem:Ya,shift:sf})}}ln=D.makeVList({positionType:"individualShift",children:ln},r),ln=D.makeSpan(["col-align-"+(ie.align||"c")],[ln]),pe.push(ln),(a<s-1||t.hskipBeforeAndAfter)&&(St=ae.deflt(ie.postgap,y),St!==0&&(rt=D.makeSpan(["arraycolsep"],[]),rt.style.width=O(St),pe.push(rt)))}}if(l=D.makeSpan(["mtable"],pe),d.length>0){for(var lf=D.makeLineSpan("hline",r,m),cf=D.makeLineSpan("hdashline",r,m),Go=[{type:"elem",elem:l,shift:0}];d.length>0;){var sc=d.pop(),lc=sc.pos-X;sc.isDashed?Go.push({type:"elem",elem:cf,shift:lc}):Go.push({type:"elem",elem:lf,shift:lc})}l=D.makeVList({positionType:"individualShift",children:Go},r)}if(zt.length===0)return D.makeSpan(["mord"],[l],r);var Uo=D.makeVList({positionType:"individualShift",children:zt},r);return Uo=D.makeSpan(["tag"],[Uo],r),D.makeFragment([l,Uo])},U3={c:"center ",l:"left ",r:"right "},Vt=function(t,r){for(var n=[],a=new j.MathNode("mtd",[],["mtr-glue"]),i=new j.MathNode("mtd",[],["mml-eqn-num"]),o=0;o<t.body.length;o++){for(var s=t.body[o],l=[],d=0;d<s.length;d++)l.push(new j.MathNode("mtd",[le(s[d],r)]));t.tags&&t.tags[o]&&(l.unshift(a),l.push(a),t.leqno?l.unshift(i):l.push(i)),n.push(new j.MathNode("mtr",l))}var m=new j.MathNode("mtable",n),f=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);m.setAttribute("rowspacing",O(f));var y="",x="";if(t.cols&&t.cols.length>0){var A=t.cols,T="",N=!1,b=0,v=A.length;A[0].type==="separator"&&(y+="top ",b=1),A[A.length-1].type==="separator"&&(y+="bottom ",v-=1);for(var w=b;w<v;w++)A[w].type==="align"?(x+=U3[A[w].align],N&&(T+="none "),N=!0):A[w].type==="separator"&&N&&(T+=A[w].separator==="|"?"solid ":"dashed ",N=!1);m.setAttribute("columnalign",x.trim()),/[sd]/.test(T)&&m.setAttribute("columnlines",T.trim())}if(t.colSeparationType==="align"){for(var C=t.cols||[],B="",z=1;z<C.length;z++)B+=z%2?"0em ":"1em ";m.setAttribute("columnspacing",B.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?m.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?m.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?m.setAttribute("columnspacing","0.5em"):m.setAttribute("columnspacing","1em");var E="",R=t.hLinesBeforeRow;y+=R[0].length>0?"left ":"",y+=R[R.length-1].length>0?"right ":"";for(var _=1;_<R.length-1;_++)E+=R[_].length===0?"none ":R[_][0]?"dashed ":"solid ";return/[sd]/.test(E)&&m.setAttribute("rowlines",E.trim()),y!==""&&(m=new j.MathNode("menclose",[m]),m.setAttribute("notation",y.trim())),t.arraystretch&&t.arraystretch<1&&(m=new j.MathNode("mstyle",[m]),m.setAttribute("scriptlevel","1")),m},Fp=function(t,r){t.envName.indexOf("ed")===-1&&Ho(t);var n=[],a=t.envName.indexOf("at")>-1?"alignat":"align",i=t.envName==="split",o=_r(t.parser,{cols:n,addJot:!0,autoTag:i?void 0:Z0(t.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:i?2:void 0,leqno:t.parser.settings.leqno},"display"),s,l=0,d={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var m="",f=0;f<r[0].body.length;f++){var y=ee(r[0].body[f],"textord");m+=y.text}s=Number(m),l=s*2}var x=!l;o.body.forEach(function(b){for(var v=1;v<b.length;v+=2){var w=ee(b[v],"styling"),C=ee(w.body[0],"ordgroup");C.body.unshift(d)}if(x)l<b.length&&(l=b.length);else{var B=b.length/2;if(s<B)throw new L("Too many math in a row: "+("expected "+s+", but got "+B),b[0])}});for(var A=0;A<l;++A){var T="r",N=0;A%2===1?T="l":A>0&&x&&(N=1),n[A]={type:"align",align:T,pregap:N,postgap:0}}return o.colSeparationType=x?"align":"alignat",o};Ut({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,t){var r=qo(t[0]),n=r?[t[0]]:ee(t[0],"ordgroup").body,a=n.map(function(o){var s=J0(o),l=s.text;if("lcr".indexOf(l)!==-1)return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new L("Unknown column alignment: "+l,o)}),i={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return _r(e.parser,i,ec(e.envName))},htmlBuilder:Wt,mathmlBuilder:Vt});Ut({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],r="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(e.envName.charAt(e.envName.length-1)==="*"){var a=e.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),r=a.fetch().text,"lcr".indexOf(r)===-1)throw new L("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),n.cols=[{type:"align",align:r}]}}var i=_r(e.parser,n,ec(e.envName)),o=Math.max(0,...i.body.map(s=>s.length));return i.cols=new Array(o).fill({type:"align",align:r}),t?{type:"leftright",mode:e.mode,body:[i],left:t[0],right:t[1],rightColor:void 0}:i},htmlBuilder:Wt,mathmlBuilder:Vt});Ut({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var t={arraystretch:.5},r=_r(e.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:Wt,mathmlBuilder:Vt});Ut({type:"array",names:["subarray"],props:{numArgs:1},handler(e,t){var r=qo(t[0]),n=r?[t[0]]:ee(t[0],"ordgroup").body,a=n.map(function(o){var s=J0(o),l=s.text;if("lc".indexOf(l)!==-1)return{type:"align",align:l};throw new L("Unknown column alignment: "+l,o)});if(a.length>1)throw new L("{subarray} can contain only one column");var i={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5};if(i=_r(e.parser,i,"script"),i.body.length>0&&i.body[0].length>1)throw new L("{subarray} can contain only one column");return i},htmlBuilder:Wt,mathmlBuilder:Vt});Ut({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=_r(e.parser,t,ec(e.envName));return{type:"leftright",mode:e.mode,body:[r],left:e.envName.indexOf("r")>-1?".":"\\{",right:e.envName.indexOf("r")>-1?"\\}":".",rightColor:void 0}},htmlBuilder:Wt,mathmlBuilder:Vt});Ut({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Fp,htmlBuilder:Wt,mathmlBuilder:Vt});Ut({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){["gather","gather*"].includes(e.envName)&&Ho(e);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Z0(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return _r(e.parser,t,"display")},htmlBuilder:Wt,mathmlBuilder:Vt});Ut({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Fp,htmlBuilder:Wt,mathmlBuilder:Vt});Ut({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){Ho(e);var t={autoTag:Z0(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return _r(e.parser,t,"display")},htmlBuilder:Wt,mathmlBuilder:Vt});Ut({type:"array",names:["CD"],props:{numArgs:0},handler(e){return Ho(e),B3(e.parser)},htmlBuilder:Wt,mathmlBuilder:Vt});g("\\nonumber","\\gdef\\@eqnsw{0}");g("\\notag","\\nonumber");F({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new L(e.funcName+" valid only within array environment")}});var td=qp;F({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];if(a.type!=="ordgroup")throw new L("Invalid environment name",a);for(var i="",o=0;o<a.body.length;++o)i+=ee(a.body[o],"textord").text;if(n==="\\begin"){if(!td.hasOwnProperty(i))throw new L("No such environment: "+i,a);var s=td[i],{args:l,optArgs:d}=r.parseArguments("\\begin{"+i+"}",s),m={mode:r.mode,envName:i,parser:r},f=s.handler(m,l,d);r.expect("\\end",!1);var y=r.nextToken,x=ee(r.parseFunction(),"environment");if(x.name!==i)throw new L("Mismatch: \\begin{"+i+"} matched by \\end{"+x.name+"}",y);return f}return{type:"environment",mode:r.mode,name:i,nameGroup:a}}});var Hp=(e,t)=>{var r=e.font,n=t.withFont(r);return ne(e.body,n)},_p=(e,t)=>{var r=e.font,n=t.withFont(r);return le(e.body,n)},rd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};F({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=go(t[0]),i=n;return i in rd&&(i=rd[i]),{type:"font",mode:r.mode,font:i.slice(1),body:a}},htmlBuilder:Hp,mathmlBuilder:_p});F({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(e,t)=>{var{parser:r}=e,n=t[0],a=ae.isCharacterBox(n);return{type:"mclass",mode:r.mode,mclass:Oo(n),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:n}],isCharacterBox:a}}});F({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n,breakOnTokenText:a}=e,{mode:i}=r,o=r.parseExpression(!0,a),s="math"+n.slice(1);return{type:"font",mode:i,font:s,body:{type:"ordgroup",mode:r.mode,body:o}}},htmlBuilder:Hp,mathmlBuilder:_p});var Gp=(e,t)=>{var r=t;return e==="display"?r=r.id>=$.SCRIPT.id?r.text():$.DISPLAY:e==="text"&&r.size===$.DISPLAY.size?r=$.TEXT:e==="script"?r=$.SCRIPT:e==="scriptscript"&&(r=$.SCRIPTSCRIPT),r},tc=(e,t)=>{var r=Gp(e.size,t.style),n=r.fracNum(),a=r.fracDen(),i;i=t.havingStyle(n);var o=ne(e.numer,i,t);if(e.continued){var s=8.5/t.fontMetrics().ptPerEm,l=3.5/t.fontMetrics().ptPerEm;o.height=o.height<s?s:o.height,o.depth=o.depth<l?l:o.depth}i=t.havingStyle(a);var d=ne(e.denom,i,t),m,f,y;e.hasBarLine?(e.barSize?(f=be(e.barSize,t),m=D.makeLineSpan("frac-line",t,f)):m=D.makeLineSpan("frac-line",t),f=m.height,y=m.height):(m=null,f=0,y=t.fontMetrics().defaultRuleThickness);var x,A,T;r.size===$.DISPLAY.size||e.size==="display"?(x=t.fontMetrics().num1,f>0?A=3*y:A=7*y,T=t.fontMetrics().denom1):(f>0?(x=t.fontMetrics().num2,A=y):(x=t.fontMetrics().num3,A=3*y),T=t.fontMetrics().denom2);var N;if(m){var v=t.fontMetrics().axisHeight;x-o.depth-(v+.5*f)<A&&(x+=A-(x-o.depth-(v+.5*f))),v-.5*f-(d.height-T)<A&&(T+=A-(v-.5*f-(d.height-T)));var w=-(v-.5*f);N=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:d,shift:T},{type:"elem",elem:m,shift:w},{type:"elem",elem:o,shift:-x}]},t)}else{var b=x-o.depth-(d.height-T);b<A&&(x+=.5*(A-b),T+=.5*(A-b)),N=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:d,shift:T},{type:"elem",elem:o,shift:-x}]},t)}i=t.havingStyle(r),N.height*=i.sizeMultiplier/t.sizeMultiplier,N.depth*=i.sizeMultiplier/t.sizeMultiplier;var C;r.size===$.DISPLAY.size?C=t.fontMetrics().delim1:r.size===$.SCRIPTSCRIPT.size?C=t.havingStyle($.SCRIPT).fontMetrics().delim2:C=t.fontMetrics().delim2;var B,z;return e.leftDelim==null?B=qa(t,["mopen"]):B=tr.customSizedDelim(e.leftDelim,C,!0,t.havingStyle(r),e.mode,["mopen"]),e.continued?z=D.makeSpan([]):e.rightDelim==null?z=qa(t,["mclose"]):z=tr.customSizedDelim(e.rightDelim,C,!0,t.havingStyle(r),e.mode,["mclose"]),D.makeSpan(["mord"].concat(i.sizingClasses(t)),[B,D.makeSpan(["mfrac"],[N]),z],t)},rc=(e,t)=>{var r=new j.MathNode("mfrac",[le(e.numer,t),le(e.denom,t)]);if(!e.hasBarLine)r.setAttribute("linethickness","0px");else if(e.barSize){var n=be(e.barSize,t);r.setAttribute("linethickness",O(n))}var a=Gp(e.size,t.style);if(a.size!==t.style.size){r=new j.MathNode("mstyle",[r]);var i=a.size===$.DISPLAY.size?"true":"false";r.setAttribute("displaystyle",i),r.setAttribute("scriptlevel","0")}if(e.leftDelim!=null||e.rightDelim!=null){var o=[];if(e.leftDelim!=null){var s=new j.MathNode("mo",[new j.TextNode(e.leftDelim.replace("\\",""))]);s.setAttribute("fence","true"),o.push(s)}if(o.push(r),e.rightDelim!=null){var l=new j.MathNode("mo",[new j.TextNode(e.rightDelim.replace("\\",""))]);l.setAttribute("fence","true"),o.push(l)}return V0(o)}return r};F({type:"genfrac",names:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0],i=t[1],o,s=null,l=null,d="auto";switch(n){case"\\dfrac":case"\\frac":case"\\tfrac":o=!0;break;case"\\\\atopfrac":o=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":o=!1,s="(",l=")";break;case"\\\\bracefrac":o=!1,s="\\{",l="\\}";break;case"\\\\brackfrac":o=!1,s="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}switch(n){case"\\dfrac":case"\\dbinom":d="display";break;case"\\tfrac":case"\\tbinom":d="text";break}return{type:"genfrac",mode:r.mode,continued:!1,numer:a,denom:i,hasBarLine:o,leftDelim:s,rightDelim:l,size:d,barSize:null}},htmlBuilder:tc,mathmlBuilder:rc});F({type:"genfrac",names:["\\cfrac"],props:{numArgs:2},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0],i=t[1];return{type:"genfrac",mode:r.mode,continued:!0,numer:a,denom:i,hasBarLine:!0,leftDelim:null,rightDelim:null,size:"display",barSize:null}}});F({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:r,token:n}=e,a;switch(r){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:a,token:n}}});var nd=["display","text","script","scriptscript"],ad=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};F({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(e,t){var{parser:r}=e,n=t[4],a=t[5],i=go(t[0]),o=i.type==="atom"&&i.family==="open"?ad(i.text):null,s=go(t[1]),l=s.type==="atom"&&s.family==="close"?ad(s.text):null,d=ee(t[2],"size"),m,f=null;d.isBlank?m=!0:(f=d.value,m=f.number>0);var y="auto",x=t[3];if(x.type==="ordgroup"){if(x.body.length>0){var A=ee(x.body[0],"textord");y=nd[Number(A.text)]}}else x=ee(x,"textord"),y=nd[Number(x.text)];return{type:"genfrac",mode:r.mode,numer:n,denom:a,continued:!1,hasBarLine:m,barSize:f,leftDelim:o,rightDelim:l,size:y}},htmlBuilder:tc,mathmlBuilder:rc});F({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(e,t){var{parser:r,funcName:n,token:a}=e;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:ee(t[0],"size").value,token:a}}});F({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0],i=wy(ee(t[1],"infix").size),o=t[2],s=i.number>0;return{type:"genfrac",mode:r.mode,numer:a,denom:o,continued:!1,hasBarLine:s,barSize:i,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:tc,mathmlBuilder:rc});var Up=(e,t)=>{var r=t.style,n,a;e.type==="supsub"?(n=e.sup?ne(e.sup,t.havingStyle(r.sup()),t):ne(e.sub,t.havingStyle(r.sub()),t),a=ee(e.base,"horizBrace")):a=ee(e,"horizBrace");var i=ne(a.base,t.havingBaseStyle($.DISPLAY)),o=lr.svgSpan(a,t),s;if(a.isOver?(s=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:.1},{type:"elem",elem:o}]},t),s.children[0].children[0].children[1].classes.push("svg-align")):(s=D.makeVList({positionType:"bottom",positionData:i.depth+.1+o.height,children:[{type:"elem",elem:o},{type:"kern",size:.1},{type:"elem",elem:i}]},t),s.children[0].children[0].children[0].classes.push("svg-align")),n){var l=D.makeSpan(["mord",a.isOver?"mover":"munder"],[s],t);a.isOver?s=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:n}]},t):s=D.makeVList({positionType:"bottom",positionData:l.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:l}]},t)}return D.makeSpan(["mord",a.isOver?"mover":"munder"],[s],t)},W3=(e,t)=>{var r=lr.mathMLnode(e.label);return new j.MathNode(e.isOver?"mover":"munder",[le(e.base,t),r])};F({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e;return{type:"horizBrace",mode:r.mode,label:n,isOver:/^\\over/.test(n),base:t[0]}},htmlBuilder:Up,mathmlBuilder:W3});F({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[1],a=ee(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:r.mode,href:a,body:Me(n)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(e,t)=>{var r=Ie(e.body,t,!1);return D.makeAnchor(e.href,[],r,t)},mathmlBuilder:(e,t)=>{var r=jr(e.body,t);return r instanceof at||(r=new at("mrow",[r])),r.setAttribute("href",e.href),r}});F({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=ee(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:n}))return r.formatUnsupportedCmd("\\url");for(var a=[],i=0;i<n.length;i++){var o=n[i];o==="~"&&(o="\\textasciitilde"),a.push({type:"textord",mode:"text",text:o})}var s={type:"text",mode:r.mode,font:"\\texttt",body:a};return{type:"href",mode:r.mode,href:n,body:Me(s)}}});F({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(e,t){var{parser:r}=e;return{type:"hbox",mode:r.mode,body:Me(t[0])}},htmlBuilder(e,t){var r=Ie(e.body,t,!1);return D.makeFragment(r)},mathmlBuilder(e,t){return new j.MathNode("mrow",tt(e.body,t))}});F({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n,token:a}=e,i=ee(t[0],"raw").string,o=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var s,l={};switch(n){case"\\htmlClass":l.class=i,s={command:"\\htmlClass",class:i};break;case"\\htmlId":l.id=i,s={command:"\\htmlId",id:i};break;case"\\htmlStyle":l.style=i,s={command:"\\htmlStyle",style:i};break;case"\\htmlData":{for(var d=i.split(","),m=0;m<d.length;m++){var f=d[m],y=f.indexOf("=");if(y<0)throw new L("\\htmlData key/value '"+f+"' missing equals sign");var x=f.slice(0,y),A=f.slice(y+1);l["data-"+x.trim()]=A}s={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(s)?{type:"html",mode:r.mode,attributes:l,body:Me(o)}:r.formatUnsupportedCmd(n)},htmlBuilder:(e,t)=>{var r=Ie(e.body,t,!1),n=["enclosing"];e.attributes.class&&n.push(...e.attributes.class.trim().split(/\s+/));var a=D.makeSpan(n,r,t);for(var i in e.attributes)i!=="class"&&e.attributes.hasOwnProperty(i)&&a.setAttribute(i,e.attributes[i]);return a},mathmlBuilder:(e,t)=>jr(e.body,t)});F({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"htmlmathml",mode:r.mode,html:Me(t[0]),mathml:Me(t[1])}},htmlBuilder:(e,t)=>{var r=Ie(e.html,t,!1);return D.makeFragment(r)},mathmlBuilder:(e,t)=>jr(e.mathml,t)});var Ds=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new L("Invalid size: '"+t+"' in \\includegraphics");var n={number:+(r[1]+r[2]),unit:r[3]};if(!cp(n))throw new L("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};F({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(e,t,r)=>{var{parser:n}=e,a={number:0,unit:"em"},i={number:.9,unit:"em"},o={number:0,unit:"em"},s="";if(r[0])for(var l=ee(r[0],"raw").string,d=l.split(","),m=0;m<d.length;m++){var f=d[m].split("=");if(f.length===2){var y=f[1].trim();switch(f[0].trim()){case"alt":s=y;break;case"width":a=Ds(y);break;case"height":i=Ds(y);break;case"totalheight":o=Ds(y);break;default:throw new L("Invalid key: '"+f[0]+"' in \\includegraphics.")}}}var x=ee(t[0],"url").url;return s===""&&(s=x,s=s.replace(/^.*[\\/]/,""),s=s.substring(0,s.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:x})?{type:"includegraphics",mode:n.mode,alt:s,width:a,height:i,totalheight:o,src:x}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,t)=>{var r=be(e.height,t),n=0;e.totalheight.number>0&&(n=be(e.totalheight,t)-r);var a=0;e.width.number>0&&(a=be(e.width,t));var i={height:O(r+n)};a>0&&(i.width=O(a)),n>0&&(i.verticalAlign=O(-n));var o=new Wy(e.src,e.alt,i);return o.height=r,o.depth=n,o},mathmlBuilder:(e,t)=>{var r=new j.MathNode("mglyph",[]);r.setAttribute("alt",e.alt);var n=be(e.height,t),a=0;if(e.totalheight.number>0&&(a=be(e.totalheight,t)-n,r.setAttribute("valign",O(-a))),r.setAttribute("height",O(n+a)),e.width.number>0){var i=be(e.width,t);r.setAttribute("width",O(i))}return r.setAttribute("src",e.src),r}});F({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e,a=ee(t[0],"size");if(r.settings.strict){var i=n[1]==="m",o=a.value.unit==="mu";i?(o||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+a.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):o&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:a.value}},htmlBuilder(e,t){return D.makeGlue(e.dimension,t)},mathmlBuilder(e,t){var r=be(e.dimension,t);return new j.SpaceNode(r)}});F({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"lap",mode:r.mode,alignment:n.slice(5),body:a}},htmlBuilder:(e,t)=>{var r;e.alignment==="clap"?(r=D.makeSpan([],[ne(e.body,t)]),r=D.makeSpan(["inner"],[r],t)):r=D.makeSpan(["inner"],[ne(e.body,t)]);var n=D.makeSpan(["fix"],[]),a=D.makeSpan([e.alignment],[r,n],t),i=D.makeSpan(["strut"]);return i.style.height=O(a.height+a.depth),a.depth&&(i.style.verticalAlign=O(-a.depth)),a.children.unshift(i),a=D.makeSpan(["thinbox"],[a],t),D.makeSpan(["mord","vbox"],[a],t)},mathmlBuilder:(e,t)=>{var r=new j.MathNode("mpadded",[le(e.body,t)]);if(e.alignment!=="rlap"){var n=e.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",n+"width")}return r.setAttribute("width","0px"),r}});F({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:r,parser:n}=e,a=n.mode;n.switchMode("math");var i=r==="\\("?"\\)":"$",o=n.parseExpression(!1,i);return n.expect(i),n.switchMode(a),{type:"styling",mode:n.mode,style:"text",body:o}}});F({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new L("Mismatched "+e.funcName)}});var id=(e,t)=>{switch(t.style.size){case $.DISPLAY.size:return e.display;case $.TEXT.size:return e.text;case $.SCRIPT.size:return e.script;case $.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};F({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"mathchoice",mode:r.mode,display:Me(t[0]),text:Me(t[1]),script:Me(t[2]),scriptscript:Me(t[3])}},htmlBuilder:(e,t)=>{var r=id(e,t),n=Ie(r,t,!1);return D.makeFragment(n)},mathmlBuilder:(e,t)=>{var r=id(e,t);return jr(r,t)}});var Wp=(e,t,r,n,a,i,o)=>{e=D.makeSpan([],[e]);var s=r&&ae.isCharacterBox(r),l,d;if(t){var m=ne(t,n.havingStyle(a.sup()),n);d={elem:m,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-m.depth)}}if(r){var f=ne(r,n.havingStyle(a.sub()),n);l={elem:f,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-f.height)}}var y;if(d&&l){var x=n.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+e.depth+o;y=D.makeVList({positionType:"bottom",positionData:x,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:O(-i)},{type:"kern",size:l.kern},{type:"elem",elem:e},{type:"kern",size:d.kern},{type:"elem",elem:d.elem,marginLeft:O(i)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]},n)}else if(l){var A=e.height-o;y=D.makeVList({positionType:"top",positionData:A,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:O(-i)},{type:"kern",size:l.kern},{type:"elem",elem:e}]},n)}else if(d){var T=e.depth+o;y=D.makeVList({positionType:"bottom",positionData:T,children:[{type:"elem",elem:e},{type:"kern",size:d.kern},{type:"elem",elem:d.elem,marginLeft:O(i)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]},n)}else return e;var N=[y];if(l&&i!==0&&!s){var b=D.makeSpan(["mspace"],[],n);b.style.marginRight=O(i),N.unshift(b)}return D.makeSpan(["mop","op-limits"],N,n)},Vp=["\\smallint"],$n=(e,t)=>{var r,n,a=!1,i;e.type==="supsub"?(r=e.sup,n=e.sub,i=ee(e.base,"op"),a=!0):i=ee(e,"op");var o=t.style,s=!1;o.size===$.DISPLAY.size&&i.symbol&&!Vp.includes(i.name)&&(s=!0);var l;if(i.symbol){var d=s?"Size2-Regular":"Size1-Regular",m="";if((i.name==="\\oiint"||i.name==="\\oiiint")&&(m=i.name.slice(1),i.name=m==="oiint"?"\\iint":"\\iiint"),l=D.makeSymbol(i.name,d,"math",t,["mop","op-symbol",s?"large-op":"small-op"]),m.length>0){var f=l.italic,y=D.staticSvg(m+"Size"+(s?"2":"1"),t);l=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:y,shift:s?.08:0}]},t),i.name="\\"+m,l.classes.unshift("mop"),l.italic=f}}else if(i.body){var x=Ie(i.body,t,!0);x.length===1&&x[0]instanceof wt?(l=x[0],l.classes[0]="mop"):l=D.makeSpan(["mop"],x,t)}else{for(var A=[],T=1;T<i.name.length;T++)A.push(D.mathsym(i.name[T],i.mode,t));l=D.makeSpan(["mop"],A,t)}var N=0,b=0;return(l instanceof wt||i.name==="\\oiint"||i.name==="\\oiiint")&&!i.suppressBaseShift&&(N=(l.height-l.depth)/2-t.fontMetrics().axisHeight,b=l.italic),a?Wp(l,r,n,t,o,b,N):(N&&(l.style.position="relative",l.style.top=O(N)),l)},$a=(e,t)=>{var r;if(e.symbol)r=new at("mo",[xt(e.name,e.mode)]),Vp.includes(e.name)&&r.setAttribute("largeop","false");else if(e.body)r=new at("mo",tt(e.body,t));else{r=new at("mi",[new Ht(e.name.slice(1))]);var n=new at("mo",[xt("⁡","text")]);e.parentIsSupSub?r=new at("mrow",[r,n]):r=wp([r,n])}return r},V3={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};F({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=n;return a.length===1&&(a=V3[a]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:$n,mathmlBuilder:$a});F({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Me(n)}},htmlBuilder:$n,mathmlBuilder:$a});var $3={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};F({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:$n,mathmlBuilder:$a});F({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:$n,mathmlBuilder:$a});F({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(e){var{parser:t,funcName:r}=e,n=r;return n.length===1&&(n=$3[n]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:$n,mathmlBuilder:$a});var $p=(e,t)=>{var r,n,a=!1,i;e.type==="supsub"?(r=e.sup,n=e.sub,i=ee(e.base,"operatorname"),a=!0):i=ee(e,"operatorname");var o;if(i.body.length>0){for(var s=i.body.map(f=>{var y=f.text;return typeof y=="string"?{type:"textord",mode:f.mode,text:y}:f}),l=Ie(s,t.withFont("mathrm"),!0),d=0;d<l.length;d++){var m=l[d];m instanceof wt&&(m.text=m.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}o=D.makeSpan(["mop"],l,t)}else o=D.makeSpan(["mop"],[],t);return a?Wp(o,r,n,t,t.style,0,0):o},J3=(e,t)=>{for(var r=tt(e.body,t.withFont("mathrm")),n=!0,a=0;a<r.length;a++){var i=r[a];if(!(i instanceof j.SpaceNode))if(i instanceof j.MathNode)switch(i.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var o=i.children[0];i.children.length===1&&o instanceof j.TextNode?o.text=o.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var s=r.map(m=>m.toText()).join("");r=[new j.TextNode(s)]}var l=new j.MathNode("mi",r);l.setAttribute("mathvariant","normal");var d=new j.MathNode("mo",[xt("⁡","text")]);return e.parentIsSupSub?new j.MathNode("mrow",[l,d]):j.newDocumentFragment([l,d])};F({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"operatorname",mode:r.mode,body:Me(a),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:$p,mathmlBuilder:J3});g("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");sn({type:"ordgroup",htmlBuilder(e,t){return e.semisimple?D.makeFragment(Ie(e.body,t,!1)):D.makeSpan(["mord"],Ie(e.body,t,!0),t)},mathmlBuilder(e,t){return jr(e.body,t,!0)}});F({type:"overline",names:["\\overline"],props:{numArgs:1},handler(e,t){var{parser:r}=e,n=t[0];return{type:"overline",mode:r.mode,body:n}},htmlBuilder(e,t){var r=ne(e.body,t.havingCrampedStyle()),n=D.makeLineSpan("overline-line",t),a=t.fontMetrics().defaultRuleThickness,i=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*a},{type:"elem",elem:n},{type:"kern",size:a}]},t);return D.makeSpan(["mord","overline"],[i],t)},mathmlBuilder(e,t){var r=new j.MathNode("mo",[new j.TextNode("‾")]);r.setAttribute("stretchy","true");var n=new j.MathNode("mover",[le(e.body,t),r]);return n.setAttribute("accent","true"),n}});F({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"phantom",mode:r.mode,body:Me(n)}},htmlBuilder:(e,t)=>{var r=Ie(e.body,t.withPhantom(),!1);return D.makeFragment(r)},mathmlBuilder:(e,t)=>{var r=tt(e.body,t);return new j.MathNode("mphantom",r)}});F({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"hphantom",mode:r.mode,body:n}},htmlBuilder:(e,t)=>{var r=D.makeSpan([],[ne(e.body,t.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var n=0;n<r.children.length;n++)r.children[n].height=0,r.children[n].depth=0;return r=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r}]},t),D.makeSpan(["mord"],[r],t)},mathmlBuilder:(e,t)=>{var r=tt(Me(e.body),t),n=new j.MathNode("mphantom",r),a=new j.MathNode("mpadded",[n]);return a.setAttribute("height","0px"),a.setAttribute("depth","0px"),a}});F({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"vphantom",mode:r.mode,body:n}},htmlBuilder:(e,t)=>{var r=D.makeSpan(["inner"],[ne(e.body,t.withPhantom())]),n=D.makeSpan(["fix"],[]);return D.makeSpan(["mord","rlap"],[r,n],t)},mathmlBuilder:(e,t)=>{var r=tt(Me(e.body),t),n=new j.MathNode("mphantom",r),a=new j.MathNode("mpadded",[n]);return a.setAttribute("width","0px"),a}});F({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e,n=ee(t[0],"size").value,a=t[1];return{type:"raisebox",mode:r.mode,dy:n,body:a}},htmlBuilder(e,t){var r=ne(e.body,t),n=be(e.dy,t);return D.makeVList({positionType:"shift",positionData:-n,children:[{type:"elem",elem:r}]},t)},mathmlBuilder(e,t){var r=new j.MathNode("mpadded",[le(e.body,t)]),n=e.dy.number+e.dy.unit;return r.setAttribute("voffset",n),r}});F({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:t}=e;return{type:"internal",mode:t.mode}}});F({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(e,t,r){var{parser:n}=e,a=r[0],i=ee(t[0],"size"),o=ee(t[1],"size");return{type:"rule",mode:n.mode,shift:a&&ee(a,"size").value,width:i.value,height:o.value}},htmlBuilder(e,t){var r=D.makeSpan(["mord","rule"],[],t),n=be(e.width,t),a=be(e.height,t),i=e.shift?be(e.shift,t):0;return r.style.borderRightWidth=O(n),r.style.borderTopWidth=O(a),r.style.bottom=O(i),r.width=n,r.height=a+i,r.depth=-i,r.maxFontSize=a*1.125*t.sizeMultiplier,r},mathmlBuilder(e,t){var r=be(e.width,t),n=be(e.height,t),a=e.shift?be(e.shift,t):0,i=t.color&&t.getColor()||"black",o=new j.MathNode("mspace");o.setAttribute("mathbackground",i),o.setAttribute("width",O(r)),o.setAttribute("height",O(n));var s=new j.MathNode("mpadded",[o]);return a>=0?s.setAttribute("height",O(a)):(s.setAttribute("height",O(a)),s.setAttribute("depth",O(-a))),s.setAttribute("voffset",O(a)),s}});function Jp(e,t,r){for(var n=Ie(e,t,!1),a=t.sizeMultiplier/r.sizeMultiplier,i=0;i<n.length;i++){var o=n[i].classes.indexOf("sizing");o<0?Array.prototype.push.apply(n[i].classes,t.sizingClasses(r)):n[i].classes[o+1]==="reset-size"+t.size&&(n[i].classes[o+1]="reset-size"+r.size),n[i].height*=a,n[i].depth*=a}return D.makeFragment(n)}var od=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],Y3=(e,t)=>{var r=t.havingSize(e.size);return Jp(e.body,r,t)};F({type:"sizing",names:od,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:r,funcName:n,parser:a}=e,i=a.parseExpression(!1,r);return{type:"sizing",mode:a.mode,size:od.indexOf(n)+1,body:i}},htmlBuilder:Y3,mathmlBuilder:(e,t)=>{var r=t.havingSize(e.size),n=tt(e.body,r),a=new j.MathNode("mstyle",n);return a.setAttribute("mathsize",O(r.sizeMultiplier)),a}});F({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,r)=>{var{parser:n}=e,a=!1,i=!1,o=r[0]&&ee(r[0],"ordgroup");if(o)for(var s="",l=0;l<o.body.length;++l){var d=o.body[l];if(s=d.text,s==="t")a=!0;else if(s==="b")i=!0;else{a=!1,i=!1;break}}else a=!0,i=!0;var m=t[0];return{type:"smash",mode:n.mode,body:m,smashHeight:a,smashDepth:i}},htmlBuilder:(e,t)=>{var r=D.makeSpan([],[ne(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return r;if(e.smashHeight&&(r.height=0,r.children))for(var n=0;n<r.children.length;n++)r.children[n].height=0;if(e.smashDepth&&(r.depth=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].depth=0;var i=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r}]},t);return D.makeSpan(["mord"],[i],t)},mathmlBuilder:(e,t)=>{var r=new j.MathNode("mpadded",[le(e.body,t)]);return e.smashHeight&&r.setAttribute("height","0px"),e.smashDepth&&r.setAttribute("depth","0px"),r}});F({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:n}=e,a=r[0],i=t[0];return{type:"sqrt",mode:n.mode,body:i,index:a}},htmlBuilder(e,t){var r=ne(e.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=D.wrapFragment(r,t);var n=t.fontMetrics(),a=n.defaultRuleThickness,i=a;t.style.id<$.TEXT.id&&(i=t.fontMetrics().xHeight);var o=a+i/4,s=r.height+r.depth+o+a,{span:l,ruleWidth:d,advanceWidth:m}=tr.sqrtImage(s,t),f=l.height-d;f>r.height+r.depth+o&&(o=(o+f-r.height-r.depth)/2);var y=l.height-r.height-o-d;r.style.paddingLeft=O(m);var x=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+y)},{type:"elem",elem:l},{type:"kern",size:d}]},t);if(e.index){var A=t.havingStyle($.SCRIPTSCRIPT),T=ne(e.index,A,t),N=.6*(x.height-x.depth),b=D.makeVList({positionType:"shift",positionData:-N,children:[{type:"elem",elem:T}]},t),v=D.makeSpan(["root"],[b]);return D.makeSpan(["mord","sqrt"],[v,x],t)}else return D.makeSpan(["mord","sqrt"],[x],t)},mathmlBuilder(e,t){var{body:r,index:n}=e;return n?new j.MathNode("mroot",[le(r,t),le(n,t)]):new j.MathNode("msqrt",[le(r,t)])}});var sd={display:$.DISPLAY,text:$.TEXT,script:$.SCRIPT,scriptscript:$.SCRIPTSCRIPT};F({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:r,funcName:n,parser:a}=e,i=a.parseExpression(!0,r),o=n.slice(1,n.length-5);return{type:"styling",mode:a.mode,style:o,body:i}},htmlBuilder(e,t){var r=sd[e.style],n=t.havingStyle(r).withFont("");return Jp(e.body,n,t)},mathmlBuilder(e,t){var r=sd[e.style],n=t.havingStyle(r),a=tt(e.body,n),i=new j.MathNode("mstyle",a),o={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},s=o[e.style];return i.setAttribute("scriptlevel",s[0]),i.setAttribute("displaystyle",s[1]),i}});var K3=function(t,r){var n=t.base;if(n)if(n.type==="op"){var a=n.limits&&(r.style.size===$.DISPLAY.size||n.alwaysHandleSupSub);return a?$n:null}else if(n.type==="operatorname"){var i=n.alwaysHandleSupSub&&(r.style.size===$.DISPLAY.size||n.limits);return i?$p:null}else{if(n.type==="accent")return ae.isCharacterBox(n.base)?Y0:null;if(n.type==="horizBrace"){var o=!t.sub;return o===n.isOver?Up:null}else return null}else return null};sn({type:"supsub",htmlBuilder(e,t){var r=K3(e,t);if(r)return r(e,t);var{base:n,sup:a,sub:i}=e,o=ne(n,t),s,l,d=t.fontMetrics(),m=0,f=0,y=n&&ae.isCharacterBox(n);if(a){var x=t.havingStyle(t.style.sup());s=ne(a,x,t),y||(m=o.height-x.fontMetrics().supDrop*x.sizeMultiplier/t.sizeMultiplier)}if(i){var A=t.havingStyle(t.style.sub());l=ne(i,A,t),y||(f=o.depth+A.fontMetrics().subDrop*A.sizeMultiplier/t.sizeMultiplier)}var T;t.style===$.DISPLAY?T=d.sup1:t.style.cramped?T=d.sup3:T=d.sup2;var N=t.sizeMultiplier,b=O(.5/d.ptPerEm/N),v=null;if(l){var w=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");(o instanceof wt||w)&&(v=O(-o.italic))}var C;if(s&&l){m=Math.max(m,T,s.depth+.25*d.xHeight),f=Math.max(f,d.sub2);var B=d.defaultRuleThickness,z=4*B;if(m-s.depth-(l.height-f)<z){f=z-(m-s.depth)+l.height;var E=.8*d.xHeight-(m-s.depth);E>0&&(m+=E,f-=E)}var R=[{type:"elem",elem:l,shift:f,marginRight:b,marginLeft:v},{type:"elem",elem:s,shift:-m,marginRight:b}];C=D.makeVList({positionType:"individualShift",children:R},t)}else if(l){f=Math.max(f,d.sub1,l.height-.8*d.xHeight);var _=[{type:"elem",elem:l,marginLeft:v,marginRight:b}];C=D.makeVList({positionType:"shift",positionData:f,children:_},t)}else if(s)m=Math.max(m,T,s.depth+.25*d.xHeight),C=D.makeVList({positionType:"shift",positionData:-m,children:[{type:"elem",elem:s,marginRight:b}]},t);else throw new Error("supsub must have either sup or sub.");var U=jl(o,"right")||"mord";return D.makeSpan([U],[o,D.makeSpan(["msupsub"],[C])],t)},mathmlBuilder(e,t){var r=!1,n,a;e.base&&e.base.type==="horizBrace"&&(a=!!e.sup,a===e.base.isOver&&(r=!0,n=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var i=[le(e.base,t)];e.sub&&i.push(le(e.sub,t)),e.sup&&i.push(le(e.sup,t));var o;if(r)o=n?"mover":"munder";else if(e.sub)if(e.sup){var d=e.base;d&&d.type==="op"&&d.limits&&t.style===$.DISPLAY||d&&d.type==="operatorname"&&d.alwaysHandleSupSub&&(t.style===$.DISPLAY||d.limits)?o="munderover":o="msubsup"}else{var l=e.base;l&&l.type==="op"&&l.limits&&(t.style===$.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||t.style===$.DISPLAY)?o="munder":o="msub"}else{var s=e.base;s&&s.type==="op"&&s.limits&&(t.style===$.DISPLAY||s.alwaysHandleSupSub)||s&&s.type==="operatorname"&&s.alwaysHandleSupSub&&(s.limits||t.style===$.DISPLAY)?o="mover":o="msup"}return new j.MathNode(o,i)}});sn({type:"atom",htmlBuilder(e,t){return D.mathsym(e.text,e.mode,t,["m"+e.family])},mathmlBuilder(e,t){var r=new j.MathNode("mo",[xt(e.text,e.mode)]);if(e.family==="bin"){var n=$0(e,t);n==="bold-italic"&&r.setAttribute("mathvariant",n)}else e.family==="punct"?r.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&r.setAttribute("stretchy","false");return r}});var Yp={mi:"italic",mn:"normal",mtext:"normal"};sn({type:"mathord",htmlBuilder(e,t){return D.makeOrd(e,t,"mathord")},mathmlBuilder(e,t){var r=new j.MathNode("mi",[xt(e.text,e.mode,t)]),n=$0(e,t)||"italic";return n!==Yp[r.type]&&r.setAttribute("mathvariant",n),r}});sn({type:"textord",htmlBuilder(e,t){return D.makeOrd(e,t,"textord")},mathmlBuilder(e,t){var r=xt(e.text,e.mode,t),n=$0(e,t)||"normal",a;return e.mode==="text"?a=new j.MathNode("mtext",[r]):/[0-9]/.test(e.text)?a=new j.MathNode("mn",[r]):e.text==="\\prime"?a=new j.MathNode("mo",[r]):a=new j.MathNode("mi",[r]),n!==Yp[a.type]&&a.setAttribute("mathvariant",n),a}});var Bs={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Is={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};sn({type:"spacing",htmlBuilder(e,t){if(Is.hasOwnProperty(e.text)){var r=Is[e.text].className||"";if(e.mode==="text"){var n=D.makeOrd(e,t,"textord");return n.classes.push(r),n}else return D.makeSpan(["mspace",r],[D.mathsym(e.text,e.mode,t)],t)}else{if(Bs.hasOwnProperty(e.text))return D.makeSpan(["mspace",Bs[e.text]],[],t);throw new L('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,t){var r;if(Is.hasOwnProperty(e.text))r=new j.MathNode("mtext",[new j.TextNode(" ")]);else{if(Bs.hasOwnProperty(e.text))return new j.MathNode("mspace");throw new L('Unknown type of space "'+e.text+'"')}return r}});var ld=()=>{var e=new j.MathNode("mtd",[]);return e.setAttribute("width","50%"),e};sn({type:"tag",mathmlBuilder(e,t){var r=new j.MathNode("mtable",[new j.MathNode("mtr",[ld(),new j.MathNode("mtd",[jr(e.body,t)]),ld(),new j.MathNode("mtd",[jr(e.tag,t)])])]);return r.setAttribute("width","100%"),r}});var cd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},ud={"\\textbf":"textbf","\\textmd":"textmd"},Q3={"\\textit":"textit","\\textup":"textup"},dd=(e,t)=>{var r=e.font;if(r){if(cd[r])return t.withTextFontFamily(cd[r]);if(ud[r])return t.withTextFontWeight(ud[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(Q3[r])};F({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"text",mode:r.mode,body:Me(a),font:n}},htmlBuilder(e,t){var r=dd(e,t),n=Ie(e.body,r,!0);return D.makeSpan(["mord","text"],n,r)},mathmlBuilder(e,t){var r=dd(e,t);return jr(e.body,r)}});F({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=ne(e.body,t),n=D.makeLineSpan("underline-line",t),a=t.fontMetrics().defaultRuleThickness,i=D.makeVList({positionType:"top",positionData:r.height,children:[{type:"kern",size:a},{type:"elem",elem:n},{type:"kern",size:3*a},{type:"elem",elem:r}]},t);return D.makeSpan(["mord","underline"],[i],t)},mathmlBuilder(e,t){var r=new j.MathNode("mo",[new j.TextNode("‾")]);r.setAttribute("stretchy","true");var n=new j.MathNode("munder",[le(e.body,t),r]);return n.setAttribute("accentunder","true"),n}});F({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=ne(e.body,t),n=t.fontMetrics().axisHeight,a=.5*(r.height-n-(r.depth+n));return D.makeVList({positionType:"shift",positionData:a,children:[{type:"elem",elem:r}]},t)},mathmlBuilder(e,t){return new j.MathNode("mpadded",[le(e.body,t)],["vcenter"])}});F({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(e,t,r){throw new L("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,t){for(var r=hd(e),n=[],a=t.havingStyle(t.style.text()),i=0;i<r.length;i++){var o=r[i];o==="~"&&(o="\\textasciitilde"),n.push(D.makeSymbol(o,"Typewriter-Regular",e.mode,a,["mord","texttt"]))}return D.makeSpan(["mord","text"].concat(a.sizingClasses(t)),D.tryCombineChars(n),a)},mathmlBuilder(e,t){var r=new j.TextNode(hd(e)),n=new j.MathNode("mtext",[r]);return n.setAttribute("mathvariant","monospace"),n}});var hd=e=>e.body.replace(/ /g,e.star?"␣":" "),kr=vp,Kp=`[ \r
	]`,X3="\\\\[a-zA-Z@]+",Z3="\\\\[^\uD800-\uDFFF]",ev="("+X3+")"+Kp+"*",tv=`\\\\(
|[ \r	]+
?)[ \r	]*`,Fl="[̀-ͯ]",rv=new RegExp(Fl+"+$"),nv="("+Kp+"+)|"+(tv+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Fl+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Fl+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+ev)+("|"+Z3+")");class md{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(nv,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new st("EOF",new Ye(this,r,r));var n=this.tokenRegex.exec(t);if(n===null||n.index!==r)throw new L("Unexpected character: '"+t[r]+"'",new st(t[r],new Ye(this,r,r+1)));var a=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[a]===14){var i=t.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=i+1,this.lex()}return new st(a,new Ye(this,r,this.tokenRegex.lastIndex))}}class av{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new L("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,n){if(n===void 0&&(n=!1),n){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(t)&&(i[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var iv=Op;g("\\noexpand",function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});g("\\expandafter",function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}});g("\\@firstoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[0],numArgs:0}});g("\\@secondoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[1],numArgs:0}});g("\\@ifnextchar",function(e){var t=e.consumeArgs(3);e.consumeSpaces();var r=e.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});g("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");g("\\TextOrMath",function(e){var t=e.consumeArgs(2);return e.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var pd={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};g("\\char",function(e){var t=e.popToken(),r,n="";if(t.text==="'")r=8,t=e.popToken();else if(t.text==='"')r=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]==="\\")n=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new L("\\char` missing argument");n=t.text.charCodeAt(0)}else r=10;if(r){if(n=pd[t.text],n==null||n>=r)throw new L("Invalid base-"+r+" digit "+t.text);for(var a;(a=pd[e.future().text])!=null&&a<r;)n*=r,n+=a,e.popToken()}return"\\@char{"+n+"}"});var nc=(e,t,r,n)=>{var a=e.consumeArg().tokens;if(a.length!==1)throw new L("\\newcommand's first argument must be a macro name");var i=a[0].text,o=e.isDefined(i);if(o&&!t)throw new L("\\newcommand{"+i+"} attempting to redefine "+(i+"; use \\renewcommand"));if(!o&&!r)throw new L("\\renewcommand{"+i+"} when command "+i+" does not yet exist; use \\newcommand");var s=0;if(a=e.consumeArg().tokens,a.length===1&&a[0].text==="["){for(var l="",d=e.expandNextToken();d.text!=="]"&&d.text!=="EOF";)l+=d.text,d=e.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new L("Invalid number of arguments: "+l);s=parseInt(l),a=e.consumeArg().tokens}return o&&n||e.macros.set(i,{tokens:a,numArgs:s}),""};g("\\newcommand",e=>nc(e,!1,!0,!1));g("\\renewcommand",e=>nc(e,!0,!1,!1));g("\\providecommand",e=>nc(e,!0,!0,!0));g("\\message",e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});g("\\errmessage",e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});g("\\show",e=>{var t=e.popToken(),r=t.text;return console.log(t,e.macros.get(r),kr[r],de.math[r],de.text[r]),""});g("\\bgroup","{");g("\\egroup","}");g("~","\\nobreakspace");g("\\lq","`");g("\\rq","'");g("\\aa","\\r a");g("\\AA","\\r A");g("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");g("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");g("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");g("ℬ","\\mathscr{B}");g("ℰ","\\mathscr{E}");g("ℱ","\\mathscr{F}");g("ℋ","\\mathscr{H}");g("ℐ","\\mathscr{I}");g("ℒ","\\mathscr{L}");g("ℳ","\\mathscr{M}");g("ℛ","\\mathscr{R}");g("ℭ","\\mathfrak{C}");g("ℌ","\\mathfrak{H}");g("ℨ","\\mathfrak{Z}");g("\\Bbbk","\\Bbb{k}");g("·","\\cdotp");g("\\llap","\\mathllap{\\textrm{#1}}");g("\\rlap","\\mathrlap{\\textrm{#1}}");g("\\clap","\\mathclap{\\textrm{#1}}");g("\\mathstrut","\\vphantom{(}");g("\\underbar","\\underline{\\text{#1}}");g("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');g("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");g("\\ne","\\neq");g("≠","\\neq");g("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");g("∉","\\notin");g("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");g("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");g("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");g("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");g("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");g("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");g("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");g("⟂","\\perp");g("‼","\\mathclose{!\\mkern-0.8mu!}");g("∌","\\notni");g("⌜","\\ulcorner");g("⌝","\\urcorner");g("⌞","\\llcorner");g("⌟","\\lrcorner");g("©","\\copyright");g("®","\\textregistered");g("️","\\textregistered");g("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');g("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');g("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');g("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');g("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");g("⋮","\\vdots");g("\\varGamma","\\mathit{\\Gamma}");g("\\varDelta","\\mathit{\\Delta}");g("\\varTheta","\\mathit{\\Theta}");g("\\varLambda","\\mathit{\\Lambda}");g("\\varXi","\\mathit{\\Xi}");g("\\varPi","\\mathit{\\Pi}");g("\\varSigma","\\mathit{\\Sigma}");g("\\varUpsilon","\\mathit{\\Upsilon}");g("\\varPhi","\\mathit{\\Phi}");g("\\varPsi","\\mathit{\\Psi}");g("\\varOmega","\\mathit{\\Omega}");g("\\substack","\\begin{subarray}{c}#1\\end{subarray}");g("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");g("\\boxed","\\fbox{$\\displaystyle{#1}$}");g("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");g("\\implies","\\DOTSB\\;\\Longrightarrow\\;");g("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");g("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");g("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var fd={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};g("\\dots",function(e){var t="\\dotso",r=e.expandAfterFuture().text;return r in fd?t=fd[r]:(r.slice(0,4)==="\\not"||r in de.math&&["bin","rel"].includes(de.math[r].group))&&(t="\\dotsb"),t});var ac={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};g("\\dotso",function(e){var t=e.future().text;return t in ac?"\\ldots\\,":"\\ldots"});g("\\dotsc",function(e){var t=e.future().text;return t in ac&&t!==","?"\\ldots\\,":"\\ldots"});g("\\cdots",function(e){var t=e.future().text;return t in ac?"\\@cdots\\,":"\\@cdots"});g("\\dotsb","\\cdots");g("\\dotsm","\\cdots");g("\\dotsi","\\!\\cdots");g("\\dotsx","\\ldots\\,");g("\\DOTSI","\\relax");g("\\DOTSB","\\relax");g("\\DOTSX","\\relax");g("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");g("\\,","\\tmspace+{3mu}{.1667em}");g("\\thinspace","\\,");g("\\>","\\mskip{4mu}");g("\\:","\\tmspace+{4mu}{.2222em}");g("\\medspace","\\:");g("\\;","\\tmspace+{5mu}{.2777em}");g("\\thickspace","\\;");g("\\!","\\tmspace-{3mu}{.1667em}");g("\\negthinspace","\\!");g("\\negmedspace","\\tmspace-{4mu}{.2222em}");g("\\negthickspace","\\tmspace-{5mu}{.277em}");g("\\enspace","\\kern.5em ");g("\\enskip","\\hskip.5em\\relax");g("\\quad","\\hskip1em\\relax");g("\\qquad","\\hskip2em\\relax");g("\\tag","\\@ifstar\\tag@literal\\tag@paren");g("\\tag@paren","\\tag@literal{({#1})}");g("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new L("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});g("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");g("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");g("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");g("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");g("\\newline","\\\\\\relax");g("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Qp=O(Ft["Main-Regular"][84][1]-.7*Ft["Main-Regular"][65][1]);g("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Qp+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");g("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Qp+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");g("\\hspace","\\@ifstar\\@hspacer\\@hspace");g("\\@hspace","\\hskip #1\\relax");g("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");g("\\ordinarycolon",":");g("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");g("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');g("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');g("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');g("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');g("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');g("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');g("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');g("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');g("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');g("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');g("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');g("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');g("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');g("∷","\\dblcolon");g("∹","\\eqcolon");g("≔","\\coloneqq");g("≕","\\eqqcolon");g("⩴","\\Coloneqq");g("\\ratio","\\vcentcolon");g("\\coloncolon","\\dblcolon");g("\\colonequals","\\coloneqq");g("\\coloncolonequals","\\Coloneqq");g("\\equalscolon","\\eqqcolon");g("\\equalscoloncolon","\\Eqqcolon");g("\\colonminus","\\coloneq");g("\\coloncolonminus","\\Coloneq");g("\\minuscolon","\\eqcolon");g("\\minuscoloncolon","\\Eqcolon");g("\\coloncolonapprox","\\Colonapprox");g("\\coloncolonsim","\\Colonsim");g("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");g("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");g("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");g("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");g("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");g("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");g("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");g("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");g("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");g("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");g("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");g("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");g("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");g("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");g("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");g("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");g("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");g("\\nleqq","\\html@mathml{\\@nleqq}{≰}");g("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");g("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");g("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");g("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");g("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");g("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");g("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");g("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");g("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");g("\\imath","\\html@mathml{\\@imath}{ı}");g("\\jmath","\\html@mathml{\\@jmath}{ȷ}");g("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");g("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");g("⟦","\\llbracket");g("⟧","\\rrbracket");g("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");g("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");g("⦃","\\lBrace");g("⦄","\\rBrace");g("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");g("⦵","\\minuso");g("\\darr","\\downarrow");g("\\dArr","\\Downarrow");g("\\Darr","\\Downarrow");g("\\lang","\\langle");g("\\rang","\\rangle");g("\\uarr","\\uparrow");g("\\uArr","\\Uparrow");g("\\Uarr","\\Uparrow");g("\\N","\\mathbb{N}");g("\\R","\\mathbb{R}");g("\\Z","\\mathbb{Z}");g("\\alef","\\aleph");g("\\alefsym","\\aleph");g("\\Alpha","\\mathrm{A}");g("\\Beta","\\mathrm{B}");g("\\bull","\\bullet");g("\\Chi","\\mathrm{X}");g("\\clubs","\\clubsuit");g("\\cnums","\\mathbb{C}");g("\\Complex","\\mathbb{C}");g("\\Dagger","\\ddagger");g("\\diamonds","\\diamondsuit");g("\\empty","\\emptyset");g("\\Epsilon","\\mathrm{E}");g("\\Eta","\\mathrm{H}");g("\\exist","\\exists");g("\\harr","\\leftrightarrow");g("\\hArr","\\Leftrightarrow");g("\\Harr","\\Leftrightarrow");g("\\hearts","\\heartsuit");g("\\image","\\Im");g("\\infin","\\infty");g("\\Iota","\\mathrm{I}");g("\\isin","\\in");g("\\Kappa","\\mathrm{K}");g("\\larr","\\leftarrow");g("\\lArr","\\Leftarrow");g("\\Larr","\\Leftarrow");g("\\lrarr","\\leftrightarrow");g("\\lrArr","\\Leftrightarrow");g("\\Lrarr","\\Leftrightarrow");g("\\Mu","\\mathrm{M}");g("\\natnums","\\mathbb{N}");g("\\Nu","\\mathrm{N}");g("\\Omicron","\\mathrm{O}");g("\\plusmn","\\pm");g("\\rarr","\\rightarrow");g("\\rArr","\\Rightarrow");g("\\Rarr","\\Rightarrow");g("\\real","\\Re");g("\\reals","\\mathbb{R}");g("\\Reals","\\mathbb{R}");g("\\Rho","\\mathrm{P}");g("\\sdot","\\cdot");g("\\sect","\\S");g("\\spades","\\spadesuit");g("\\sub","\\subset");g("\\sube","\\subseteq");g("\\supe","\\supseteq");g("\\Tau","\\mathrm{T}");g("\\thetasym","\\vartheta");g("\\weierp","\\wp");g("\\Zeta","\\mathrm{Z}");g("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");g("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");g("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");g("\\bra","\\mathinner{\\langle{#1}|}");g("\\ket","\\mathinner{|{#1}\\rangle}");g("\\braket","\\mathinner{\\langle{#1}\\rangle}");g("\\Bra","\\left\\langle#1\\right|");g("\\Ket","\\left|#1\\right\\rangle");var Xp=e=>t=>{var r=t.consumeArg().tokens,n=t.consumeArg().tokens,a=t.consumeArg().tokens,i=t.consumeArg().tokens,o=t.macros.get("|"),s=t.macros.get("\\|");t.macros.beginGroup();var l=f=>y=>{e&&(y.macros.set("|",o),a.length&&y.macros.set("\\|",s));var x=f;if(!f&&a.length){var A=y.future();A.text==="|"&&(y.popToken(),x=!0)}return{tokens:x?a:n,numArgs:0}};t.macros.set("|",l(!1)),a.length&&t.macros.set("\\|",l(!0));var d=t.consumeArg().tokens,m=t.expandTokens([...i,...d,...r]);return t.macros.endGroup(),{tokens:m.reverse(),numArgs:0}};g("\\bra@ket",Xp(!1));g("\\bra@set",Xp(!0));g("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");g("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");g("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");g("\\angln","{\\angl n}");g("\\blue","\\textcolor{##6495ed}{#1}");g("\\orange","\\textcolor{##ffa500}{#1}");g("\\pink","\\textcolor{##ff00af}{#1}");g("\\red","\\textcolor{##df0030}{#1}");g("\\green","\\textcolor{##28ae7b}{#1}");g("\\gray","\\textcolor{gray}{#1}");g("\\purple","\\textcolor{##9d38bd}{#1}");g("\\blueA","\\textcolor{##ccfaff}{#1}");g("\\blueB","\\textcolor{##80f6ff}{#1}");g("\\blueC","\\textcolor{##63d9ea}{#1}");g("\\blueD","\\textcolor{##11accd}{#1}");g("\\blueE","\\textcolor{##0c7f99}{#1}");g("\\tealA","\\textcolor{##94fff5}{#1}");g("\\tealB","\\textcolor{##26edd5}{#1}");g("\\tealC","\\textcolor{##01d1c1}{#1}");g("\\tealD","\\textcolor{##01a995}{#1}");g("\\tealE","\\textcolor{##208170}{#1}");g("\\greenA","\\textcolor{##b6ffb0}{#1}");g("\\greenB","\\textcolor{##8af281}{#1}");g("\\greenC","\\textcolor{##74cf70}{#1}");g("\\greenD","\\textcolor{##1fab54}{#1}");g("\\greenE","\\textcolor{##0d923f}{#1}");g("\\goldA","\\textcolor{##ffd0a9}{#1}");g("\\goldB","\\textcolor{##ffbb71}{#1}");g("\\goldC","\\textcolor{##ff9c39}{#1}");g("\\goldD","\\textcolor{##e07d10}{#1}");g("\\goldE","\\textcolor{##a75a05}{#1}");g("\\redA","\\textcolor{##fca9a9}{#1}");g("\\redB","\\textcolor{##ff8482}{#1}");g("\\redC","\\textcolor{##f9685d}{#1}");g("\\redD","\\textcolor{##e84d39}{#1}");g("\\redE","\\textcolor{##bc2612}{#1}");g("\\maroonA","\\textcolor{##ffbde0}{#1}");g("\\maroonB","\\textcolor{##ff92c6}{#1}");g("\\maroonC","\\textcolor{##ed5fa6}{#1}");g("\\maroonD","\\textcolor{##ca337c}{#1}");g("\\maroonE","\\textcolor{##9e034e}{#1}");g("\\purpleA","\\textcolor{##ddd7ff}{#1}");g("\\purpleB","\\textcolor{##c6b9fc}{#1}");g("\\purpleC","\\textcolor{##aa87ff}{#1}");g("\\purpleD","\\textcolor{##7854ab}{#1}");g("\\purpleE","\\textcolor{##543b78}{#1}");g("\\mintA","\\textcolor{##f5f9e8}{#1}");g("\\mintB","\\textcolor{##edf2df}{#1}");g("\\mintC","\\textcolor{##e0e5cc}{#1}");g("\\grayA","\\textcolor{##f6f7f7}{#1}");g("\\grayB","\\textcolor{##f0f1f2}{#1}");g("\\grayC","\\textcolor{##e3e5e6}{#1}");g("\\grayD","\\textcolor{##d6d8da}{#1}");g("\\grayE","\\textcolor{##babec2}{#1}");g("\\grayF","\\textcolor{##888d93}{#1}");g("\\grayG","\\textcolor{##626569}{#1}");g("\\grayH","\\textcolor{##3b3e40}{#1}");g("\\grayI","\\textcolor{##21242c}{#1}");g("\\kaBlue","\\textcolor{##314453}{#1}");g("\\kaGreen","\\textcolor{##71B307}{#1}");var Zp={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class ov{constructor(t,r,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new av(iv,r.macros),this.mode=n,this.stack=[]}feed(t){this.lexer=new md(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,n,a;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:a,end:n}=this.consumeArg(["]"])}else({tokens:a,start:r,end:n}=this.consumeArg());return this.pushToken(new st("EOF",n.loc)),this.pushTokens(a),new st("",Ye.range(r,n))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],n=t&&t.length>0;n||this.consumeSpaces();var a=this.future(),i,o=0,s=0;do{if(i=this.popToken(),r.push(i),i.text==="{")++o;else if(i.text==="}"){if(--o,o===-1)throw new L("Extra }",i)}else if(i.text==="EOF")throw new L("Unexpected end of input in a macro argument, expected '"+(t&&n?t[s]:"}")+"'",i);if(t&&n)if((o===0||o===1&&t[s]==="{")&&i.text===t[s]){if(++s,s===t.length){r.splice(-s,s);break}}else s=0}while(o!==0||n);return a.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:a,end:i}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new L("The length of delimiters doesn't match the number of args!");for(var n=r[0],a=0;a<n.length;a++){var i=this.popToken();if(n[a]!==i.text)throw new L("Use of the macro doesn't match its definition",i)}}for(var o=[],s=0;s<t;s++)o.push(this.consumeArg(r&&r[s+1]).tokens);return o}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new L("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),n=r.text,a=r.noexpand?null:this._getExpansion(n);if(a==null||t&&a.unexpandable){if(t&&a==null&&n[0]==="\\"&&!this.isDefined(n))throw new L("Undefined control sequence: "+n);return this.pushToken(r),!1}this.countExpansion(1);var i=a.tokens,o=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){i=i.slice();for(var s=i.length-1;s>=0;--s){var l=i[s];if(l.text==="#"){if(s===0)throw new L("Incomplete placeholder at end of macro body",l);if(l=i[--s],l.text==="#")i.splice(s+1,1);else if(/^[1-9]$/.test(l.text))i.splice(s,2,...o[+l.text-1]);else throw new L("Not a valid argument number",l)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new st(t)]):void 0}expandTokens(t){var r=[],n=this.stack.length;for(this.pushTokens(t);this.stack.length>n;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),r.push(a)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(n=>n.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var n=this.lexer.catcodes[t];if(n!=null&&n!==13)return}var a=typeof r=="function"?r(this):r;if(typeof a=="string"){var i=0;if(a.indexOf("#")!==-1)for(var o=a.replace(/##/g,"");o.indexOf("#"+(i+1))!==-1;)++i;for(var s=new md(a,this.settings),l=[],d=s.lex();d.text!=="EOF";)l.push(d),d=s.lex();l.reverse();var m={tokens:l,numArgs:i};return m}return a}isDefined(t){return this.macros.has(t)||kr.hasOwnProperty(t)||de.math.hasOwnProperty(t)||de.text.hasOwnProperty(t)||Zp.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:kr.hasOwnProperty(t)&&!kr[t].primitive}}var gd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Si=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),zs={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},yd={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class _o{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new ov(t,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new L("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new st("}")),this.gullet.pushTokens(t);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,n}parseExpression(t,r){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(_o.endOfExpression.indexOf(a.text)!==-1||r&&a.text===r||t&&kr[a.text]&&kr[a.text].infix)break;var i=this.parseAtom(r);if(i){if(i.type==="internal")continue}else break;n.push(i)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(t){for(var r=-1,n,a=0;a<t.length;a++)if(t[a].type==="infix"){if(r!==-1)throw new L("only one infix operator per group",t[a].token);r=a,n=t[a].replaceWith}if(r!==-1&&n){var i,o,s=t.slice(0,r),l=t.slice(r+1);s.length===1&&s[0].type==="ordgroup"?i=s[0]:i={type:"ordgroup",mode:this.mode,body:s},l.length===1&&l[0].type==="ordgroup"?o=l[0]:o={type:"ordgroup",mode:this.mode,body:l};var d;return n==="\\\\abovefrac"?d=this.callFunction(n,[i,t[r],o],[]):d=this.callFunction(n,[i,o],[]),[d]}else return t}handleSupSubscript(t){var r=this.fetch(),n=r.text;this.consume(),this.consumeSpaces();var a;do{var i;a=this.parseGroup(t)}while(((i=a)==null?void 0:i.type)==="internal");if(!a)throw new L("Expected group after '"+n+"'",r);return a}formatUnsupportedCmd(t){for(var r=[],n=0;n<t.length;n++)r.push({type:"textord",mode:"text",text:t[n]});var a={type:"text",mode:this.mode,body:r},i={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return i}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var n,a;;){this.consumeSpaces();var i=this.fetch();if(i.text==="\\limits"||i.text==="\\nolimits"){if(r&&r.type==="op"){var o=i.text==="\\limits";r.limits=o,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=i.text==="\\limits");else throw new L("Limit controls must follow a math operator",i);this.consume()}else if(i.text==="^"){if(n)throw new L("Double superscript",i);n=this.handleSupSubscript("superscript")}else if(i.text==="_"){if(a)throw new L("Double subscript",i);a=this.handleSupSubscript("subscript")}else if(i.text==="'"){if(n)throw new L("Double superscript",i);var s={type:"textord",mode:this.mode,text:"\\prime"},l=[s];for(this.consume();this.fetch().text==="'";)l.push(s),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:l}}else if(Si[i.text]){var d=gd.test(i.text),m=[];for(m.push(new st(Si[i.text])),this.consume();;){var f=this.fetch().text;if(!Si[f]||gd.test(f)!==d)break;m.unshift(new st(Si[f])),this.consume()}var y=this.subparse(m);d?a={type:"ordgroup",mode:"math",body:y}:n={type:"ordgroup",mode:"math",body:y}}else break}return n||a?{type:"supsub",mode:this.mode,base:r,sup:n,sub:a}:r}parseFunction(t,r){var n=this.fetch(),a=n.text,i=kr[a];if(!i)return null;if(this.consume(),r&&r!=="atom"&&!i.allowedInArgument)throw new L("Got function '"+a+"' with no arguments"+(r?" as "+r:""),n);if(this.mode==="text"&&!i.allowedInText)throw new L("Can't use function '"+a+"' in text mode",n);if(this.mode==="math"&&i.allowedInMath===!1)throw new L("Can't use function '"+a+"' in math mode",n);var{args:o,optArgs:s}=this.parseArguments(a,i);return this.callFunction(a,o,s,n,t)}callFunction(t,r,n,a,i){var o={funcName:t,parser:this,token:a,breakOnTokenText:i},s=kr[t];if(s&&s.handler)return s.handler(o,r,n);throw new L("No function handler for "+t)}parseArguments(t,r){var n=r.numArgs+r.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var a=[],i=[],o=0;o<n;o++){var s=r.argTypes&&r.argTypes[o],l=o<r.numOptionalArgs;(r.primitive&&s==null||r.type==="sqrt"&&o===1&&i[0]==null)&&(s="primitive");var d=this.parseGroupOfType("argument to '"+t+"'",s,l);if(l)i.push(d);else if(d!=null)a.push(d);else throw new L("Null argument, please report this as a bug")}return{args:a,optArgs:i}}parseGroupOfType(t,r,n){switch(r){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,r);case"hbox":{var a=this.parseArgumentGroup(n,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text"}:null}case"raw":{var i=this.parseStringGroup("raw",n);return i!=null?{type:"raw",mode:"text",string:i.text}:null}case"primitive":{if(n)throw new L("A primitive argument cannot be optional");var o=this.parseGroup(t);if(o==null)throw new L("Expected group as "+t,this.fetch());return o}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new L("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var n=this.gullet.scanArgument(r);if(n==null)return null;for(var a="",i;(i=this.fetch()).text!=="EOF";)a+=i.text,this.consume();return this.consume(),n.text=a,n}parseRegexGroup(t,r){for(var n=this.fetch(),a=n,i="",o;(o=this.fetch()).text!=="EOF"&&t.test(i+o.text);)a=o,i+=a.text,this.consume();if(i==="")throw new L("Invalid "+r+": '"+n.text+"'",n);return n.range(a,i)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!n)throw new L("Invalid color: '"+r.text+"'",r);var a=n[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(t){var r,n=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",n=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!a)throw new L("Invalid size: '"+r.text+"'",r);var i={number:+(a[1]+a[2]),unit:a[3]};if(!cp(i))throw new L("Invalid unit: '"+i.unit+"'",r);return{type:"size",mode:this.mode,value:i,isBlank:n}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var n=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(t,r){var n=this.gullet.scanArgument(t);if(n==null)return null;var a=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var i=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var o={type:"ordgroup",mode:this.mode,loc:n.loc,body:i};return r&&this.switchMode(a),o}parseGroup(t,r){var n=this.fetch(),a=n.text,i;if(a==="{"||a==="\\begingroup"){this.consume();var o=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var s=this.parseExpression(!1,o),l=this.fetch();this.expect(o),this.gullet.endGroup(),i={type:"ordgroup",mode:this.mode,loc:Ye.range(n,l),body:s,semisimple:a==="\\begingroup"||void 0}}else if(i=this.parseFunction(r,t)||this.parseSymbol(),i==null&&a[0]==="\\"&&!Zp.hasOwnProperty(a)){if(this.settings.throwOnError)throw new L("Undefined control sequence: "+a,n);i=this.formatUnsupportedCmd(a),this.consume()}return i}formLigatures(t){for(var r=t.length-1,n=0;n<r;++n){var a=t[n],i=a.text;i==="-"&&t[n+1].text==="-"&&(n+1<r&&t[n+2].text==="-"?(t.splice(n,3,{type:"textord",mode:"text",loc:Ye.range(a,t[n+2]),text:"---"}),r-=2):(t.splice(n,2,{type:"textord",mode:"text",loc:Ye.range(a,t[n+1]),text:"--"}),r-=1)),(i==="'"||i==="`")&&t[n+1].text===i&&(t.splice(n,2,{type:"textord",mode:"text",loc:Ye.range(a,t[n+1]),text:i+i}),r-=1)}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var n=r.slice(5),a=n.charAt(0)==="*";if(a&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new L(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:a}}yd.hasOwnProperty(r[0])&&!de[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=yd[r[0]]+r.slice(1));var i=rv.exec(r);i&&(r=r.substring(0,i.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var o;if(de[this.mode][r]){this.settings.strict&&this.mode==="math"&&Rl.indexOf(r)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var s=de[this.mode][r].group,l=Ye.range(t),d;if(Jy.hasOwnProperty(s)){var m=s;d={type:"atom",mode:this.mode,family:m,loc:l,text:r}}else d={type:s,mode:this.mode,loc:l,text:r};o=d}else if(r.charCodeAt(0)>=128)this.settings.strict&&(lp(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),o={type:"textord",mode:"text",loc:Ye.range(t),text:r};else return null;if(this.consume(),i)for(var f=0;f<i[0].length;f++){var y=i[0][f];if(!zs[y])throw new L("Unknown accent ' "+y+"'",t);var x=zs[y][this.mode]||zs[y].text;if(!x)throw new L("Accent "+y+" unsupported in "+this.mode+" mode",t);o={type:"accent",mode:this.mode,loc:Ye.range(t),label:x,isStretchy:!1,isShifty:!0,base:o}}return o}}_o.endOfExpression=["}","\\endgroup","\\end","\\right","&"];var ic=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new _o(t,r);delete n.gullet.macros.current["\\df@tag"];var a=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new L("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:n.subparse([new st("\\df@tag")])}]}return a},ef=function(t,r,n){r.textContent="";var a=oc(t,n).toNode();r.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),ef=function(){throw new L("KaTeX doesn't work in quirks mode.")});var sv=function(t,r){var n=oc(t,r).toMarkup();return n},lv=function(t,r){var n=new H0(r);return ic(t,n)},tf=function(t,r,n){if(n.throwOnError||!(t instanceof L))throw t;var a=D.makeSpan(["katex-error"],[new wt(r)]);return a.setAttribute("title",t.toString()),a.setAttribute("style","color:"+n.errorColor),a},oc=function(t,r){var n=new H0(r);try{var a=ic(t,n);return y3(a,t,n)}catch(i){return tf(i,t,n)}},cv=function(t,r){var n=new H0(r);try{var a=ic(t,n);return v3(a,t,n)}catch(i){return tf(i,t,n)}},uv="0.16.27",dv={Span:Va,Anchor:U0,SymbolNode:wt,SvgNode:or,PathNode:Rr,LineNode:Pl},hv={version:uv,render:ef,renderToString:sv,ParseError:L,SETTINGS_SCHEMA:ji,__parse:lv,__renderToDomTree:oc,__renderToHTMLTree:cv,__setFontMetrics:Fy,__defineSymbol:c,__defineFunction:F,__defineMacro:g,__domTree:dv};const mv=({tex:e,block:t=!1})=>{const r=I.useRef(null);return I.useEffect(()=>{if(r.current)try{hv.render(e,r.current,{displayMode:t,throwOnError:!1,output:"html"})}catch(n){console.error("KaTeX Render Error:",n),r.current.innerText=e}},[e,t]),t?h.jsx("div",{className:"my-6 w-full overflow-x-auto overflow-y-hidden text-center py-4 bg-gray-50 dark:bg-crt-dim/10 border-y border-dashed border-gray-300 dark:border-crt-dim/50",children:h.jsx("span",{ref:r,className:"text-ink dark:text-crt-green selection:bg-accent selection:text-white"})}):h.jsx("span",{ref:r,className:"mx-1 text-ink dark:text-crt-green font-medium"})},rf=({contentRef:e,isDomReady:t,citationMap:r})=>{const[n,a]=I.useState([]);return I.useLayoutEffect(()=>{if(!e.current||!t)return;const i=[];e.current.querySelectorAll(".citation-mount-point").forEach((m,f)=>{const y=m.getAttribute("data-key"),x=y?r.get(y):null;y&&x&&i.push(oa.createPortal(hn.createElement(cy,{label:x.label,entry:x.entry,citationKey:y}),m,`citation-${y}-${f}`))}),e.current.querySelectorAll(".science-figure-marker").forEach((m,f)=>{const y=m.getAttribute("data-src")||"",x=m.getAttribute("data-alt")||"",A=m.getAttribute("data-caption")||"",T=m.getAttribute("data-id")||void 0,N=m.getAttribute("data-clean-src")||void 0;y&&i.push(oa.createPortal(hn.createElement(uy,{src:y,alt:x,caption:A,id:T,cleanSrc:N}),m,`figure-${f}`))}),e.current.querySelectorAll(".science-table-marker").forEach((m,f)=>{try{const y=m.getAttribute("data-id")||"tbl",x=m.getAttribute("data-headers"),A=m.getAttribute("data-rows"),T=m.getAttribute("data-caption")||void 0;if(x&&A){const N=JSON.parse(x),b=JSON.parse(A);i.push(oa.createPortal(hn.createElement(hy,{id:y,initialHeaders:N,initialData:b,caption:T}),m,`table-${y}-${f}`))}}catch(y){console.error("Failed to hydrate table",y)}}),e.current.querySelectorAll(".science-math-marker").forEach((m,f)=>{const y=m.getAttribute("data-tex"),x=m.getAttribute("data-display")==="true";y&&i.push(oa.createPortal(hn.createElement(mv,{tex:y,block:x}),m,`math-${f}`))}),a(i)},[t,r]),n},nf=({references:e,manualCitations:t})=>e.length===0&&(!t||t.length===0)?null:h.jsxs("div",{className:"mt-16 pt-8 border-t-4 border-ink dark:border-crt-green",children:[h.jsxs("h3",{className:"font-mono text-lg font-bold uppercase mb-6 text-ink dark:text-crt-green flex items-center gap-2",children:["// REFERENCES ",e.length>0?"(APA 7)":"(LEGACY)"]}),h.jsxs("div",{className:"space-y-4",children:[e.map(({entry:r})=>h.jsxs("div",{id:`ref-${r.citationKey}`,className:"text-sm transition-colors duration-500 rounded p-2 pl-8 -indent-8 font-serif text-gray-800 dark:text-crt-green/90 break-words text-justify hyphens-auto",children:[h.jsx("span",{className:"font-bold",children:oy(r.author)}),".",r.year&&h.jsxs("span",{children:[" (",r.year,"). "]}),h.jsxs("span",{children:[r.title,". "]}),h.jsx("span",{className:"italic",children:r.journal||r.booktitle||r.publisher}),r.volume&&h.jsxs("span",{className:"italic",children:[", ",r.volume]}),r.issue&&h.jsxs("span",{children:["(",r.issue,")"]}),r.pages&&h.jsxs("span",{children:[", ",r.pages]}),".",h.jsxs("div",{className:"inline-block ml-2 indent-0",children:[r.doi&&h.jsxs("a",{href:`https://doi.org/${r.doi}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-mono text-[10px] text-pencil dark:text-crt-green/60 hover:text-accent dark:hover:text-crt-amber hover:underline",children:["https://doi.org/",r.doi]}),r.url&&!r.doi&&h.jsx("a",{href:r.url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-mono text-[10px] text-pencil dark:text-crt-green/60 hover:text-accent dark:hover:text-crt-amber hover:underline",children:r.url})]})]},r.citationKey)),e.length===0&&(t==null?void 0:t.map(r=>h.jsxs("div",{id:`ref-${r.id}`,className:"text-sm transition-colors duration-500 rounded p-2 pl-8 -indent-8 font-serif text-gray-800 dark:text-crt-green/90 break-words flex gap-2 text-justify hyphens-auto",children:[h.jsxs("span",{className:"font-mono font-bold text-xs select-none",children:["[",r.id,"]"]}),h.jsxs("div",{className:"text-justify hyphens-auto",children:[h.jsx("span",{children:r.text}),r.source&&h.jsxs("span",{className:"block italic text-xs opacity-70",children:["Source: ",r.source]})]})]},r.id)))]})]}),af=({author:e})=>{const t=e||{name:"RK Patel",role:"Lead Researcher",avatar:"https://github.com/RKPatel-1996.png"};return h.jsxs("div",{className:"flex items-center gap-4 py-4 mb-6 border-b border-dashed border-gray-300 dark:border-crt-dim",children:[h.jsxs("div",{className:"relative shrink-0",children:[h.jsxs("div",{className:"w-12 h-12 rounded-full overflow-hidden border-2 border-ink dark:border-crt-green bg-gray-200 dark:bg-crt-dim",children:[h.jsx("img",{src:t.avatar,alt:t.name,className:"w-full h-full object-cover grayscale contrast-125",onError:r=>{r.currentTarget.style.display="none";const n=r.currentTarget.nextElementSibling;n&&(n.classList.remove("hidden"),n.classList.add("flex"))}}),h.jsx("div",{className:"hidden w-full h-full items-center justify-center text-ink dark:text-crt-green",children:h.jsx(g4,{size:24})})]}),h.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-black rounded-full flex items-center justify-center",children:h.jsx(h4,{size:8,className:"text-white dark:text-black"})})]}),h.jsxs("div",{children:[h.jsx("div",{className:"font-serif font-bold text-ink dark:text-crt-green text-sm flex items-center gap-2",children:t.name}),h.jsx("div",{className:"font-mono text-[10px] uppercase tracking-wider text-pencil dark:text-crt-green/60 bg-gray-100 dark:bg-crt-dim/50 px-1 rounded inline-block",children:t.role||"Contributor"})]})]})},of=({items:e})=>!e||e.length===0?null:h.jsxs("nav",{id:"table-of-contents",className:"my-8 p-6 bg-paper dark:bg-crt-dim/10 border-2 border-ink dark:border-crt-green shadow-retro dark:shadow-none",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-4 border-b-2 border-ink dark:border-crt-green pb-2",children:[h.jsx(o4,{size:18,className:"text-ink dark:text-crt-green"}),h.jsx("h3",{className:"font-mono text-sm font-bold uppercase text-ink dark:text-crt-green",children:"Table_Of_Contents"})]}),h.jsx("ul",{className:"space-y-2 font-mono text-xs",children:e.map(t=>h.jsx("li",{style:{paddingLeft:`${(t.level-1)*12}px`},children:h.jsxs("a",{href:`#${t.id}`,onClick:r=>{var n;r.preventDefault(),(n=document.getElementById(t.id))==null||n.scrollIntoView({behavior:"smooth"})},className:"flex items-start gap-2 text-pencil dark:text-crt-green/80 hover:text-accent dark:hover:text-crt-amber hover:underline decoration-1 transition-colors",children:[h.jsx("span",{className:"opacity-50 select-none",children:">"}),t.text]})},t.id))}),h.jsx("div",{className:"mt-4 pt-2 border-t border-dashed border-gray-300 dark:border-crt-green/30 text-[10px] text-pencil dark:text-crt-green/50 italic",children:"* Click heading titles in the article to return here."})]}),pv=({article:e,onBack:t})=>{const{fontSizeIdx:r}=Om(),{processedHTML:n,references:a,citationMap:i}=ip(e.content,e.bibTexContent),o=I.useRef(null),{toc:s,isDomReady:l}=op(o,n),d=rf({contentRef:o,isDomReady:l,citationMap:i});return h.jsxs("div",{className:"relative flex flex-col min-h-full bg-transparent",children:[h.jsx("button",{onClick:t,className:"fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border-2 border-ink/20 dark:border-crt-green/20 shadow-lg hover:scale-110 active:scale-95 transition-all text-ink dark:text-crt-green","aria-label":"Return to Index",children:h.jsx(Wm,{size:24})}),h.jsx("div",{className:"flex-1 p-4 md:p-8 pt-20 md:pt-8 relative",children:h.jsx("div",{className:"max-w-3xl mx-auto",children:h.jsxs("article",{className:"bg-white dark:bg-black dark:border dark:border-crt-dim shadow-paper dark:shadow-crt p-6 md:p-12 min-h-[600px] md:min-h-[1000px] mb-12 relative",children:[h.jsxs("header",{className:"mb-4",children:[h.jsxs("div",{className:"flex flex-wrap justify-between font-mono text-xs mb-2 text-pencil dark:text-crt-green/60 uppercase",children:[h.jsx("span",{children:e.id}),h.jsx("span",{children:e.date})]}),h.jsx("h1",{className:"font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 text-ink dark:text-crt-green",children:e.title}),h.jsx("div",{className:"flex flex-wrap gap-2 font-mono text-xs mt-4",children:e.tags.map(m=>h.jsx("span",{className:"bg-gray-200 dark:bg-crt-dim dark:text-crt-green px-2 py-1 whitespace-nowrap",children:m},m))})]}),h.jsx(af,{author:e.author}),h.jsx(of,{items:s}),h.jsx("div",{ref:o,className:`prose ${Xr[r]} dark:prose-invert font-serif text-ink dark:text-crt-green max-w-none 
                    text-justify break-words hyphens-auto
                    
                    /* Prose Heading Styles Override for Collapsible Styling */
                    prose-headings:font-mono prose-headings:uppercase prose-headings:text-sm prose-headings:tracking-widest 
                    prose-headings:border-b prose-headings:border-gray-300 dark:prose-headings:border-crt-dim prose-headings:pb-2 prose-headings:mt-0 prose-headings:mb-4
                    
                    prose-code:font-code prose-code:text-sm prose-code:bg-gray-100 dark:prose-code:bg-crt-dim prose-code:p-1
                    prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:border-l-4 prose-blockquote:border-ink dark:prose-blockquote:border-crt-green
                    dark:prose-th:text-crt-green dark:prose-td:text-crt-green dark:prose-tr:border-crt-dim
                `,dangerouslySetInnerHTML:{__html:n}}),d,h.jsx(nf,{references:a,manualCitations:e.citations}),h.jsx("div",{className:"mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-crt-dim text-center font-mono text-xs text-pencil dark:text-crt-green/50",children:"*** END OF MANUSCRIPT ***"})]})})})]})},fv=({article:e,onBack:t})=>{const{fontSizeIdx:r}=Om(),{processedHTML:n,references:a,citationMap:i}=ip(e.content,e.bibTexContent),o=I.useRef(null),{toc:s,isDomReady:l}=op(o,n),d=rf({contentRef:o,isDomReady:l,citationMap:i});return h.jsxs("div",{className:"relative flex flex-col min-h-full bg-transparent",children:[h.jsx("button",{onClick:t,className:"fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border-2 border-ink/20 dark:border-crt-green/20 shadow-lg hover:scale-110 active:scale-95 transition-all text-ink dark:text-crt-green","aria-label":"Return to Index",children:h.jsx(Wm,{size:24})}),h.jsx("div",{className:"flex-1 p-2 md:p-12 pt-20 md:pt-12 overflow-y-auto",children:h.jsxs("article",{className:"max-w-3xl mx-auto bg-white dark:bg-black border-2 border-black dark:border-crt-green p-4 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-crt transition-colors duration-300",children:[h.jsxs("header",{className:"mb-4",children:[h.jsx("h1",{className:"font-mono font-bold text-2xl md:text-4xl text-black dark:text-crt-green mb-4 leading-tight",children:e.title}),h.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-gray-600 dark:text-crt-green/70",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[h.jsxs("span",{className:"uppercase tracking-wider",children:["Date: ",e.date]}),h.jsxs("span",{className:"uppercase tracking-wider",children:["ID: ",e.id]})]}),h.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags.map(m=>h.jsx("span",{className:"bg-gray-100 dark:bg-crt-dim border border-gray-200 dark:border-crt-green px-2 py-1 rounded-sm whitespace-nowrap",children:m},m))})]}),h.jsx("hr",{className:"border-black dark:border-crt-green border-2 my-8"})]}),h.jsx(af,{author:e.author}),h.jsx(of,{items:s}),h.jsx("div",{ref:o,className:`prose ${Xr[r]} max-w-none 
              text-justify break-words hyphens-auto
              
              /* Override prose styles for collapsible headers */
              prose-headings:font-mono prose-headings:mt-0 prose-headings:mb-4
              prose-p:font-serif
              
              dark:prose-invert 
              dark:prose-headings:text-crt-green dark:prose-p:text-crt-green dark:prose-strong:text-crt-green dark:prose-li:text-crt-green
              dark:prose-code:text-crt-green dark:prose-code:bg-crt-dim
              dark:prose-img:border-crt-green dark:prose-img:shadow-none
              dark:prose-th:text-crt-green dark:prose-td:text-crt-green dark:prose-tr:border-crt-dim`,dangerouslySetInnerHTML:{__html:n}}),d,h.jsx(nf,{references:a,manualCitations:e.citations}),h.jsx("div",{className:"mt-16 text-center font-mono text-[10px] text-gray-400 dark:text-crt-green/40 select-none",children:"*** END OF DOCUMENT ***"})]})})]})},gv=()=>{const{id:e}=m2(),t=L0(),r=Il.find(n=>n.id===e);return r?r.template==="standard"?h.jsx(fv,{article:r,onBack:()=>t("/")}):h.jsx(pv,{article:r,onBack:()=>t("/")}):h.jsxs("div",{className:"p-12 font-mono text-center dark:text-crt-green",children:[h.jsx("h2",{className:"text-xl font-bold text-red-600 dark:text-red-400",children:"404: RECORD_NOT_FOUND"}),h.jsxs("p",{className:"mt-2 text-sm text-pencil dark:text-crt-green/70",children:["The requested manuscript ID '",e,"' does not exist in the registry."]}),h.jsx("button",{onClick:()=>t("/"),className:"mt-8 underline hover:text-accent dark:hover:text-crt-amber",children:"< Return to Index"})]})};function yv(){const[e,t]=I.useState(!1);I.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const r=()=>t(!e);return h.jsx(O2,{basename:"/RKS-lab-notes",children:h.jsx(B2,{children:h.jsxs(dn,{element:h.jsx(k4,{isDarkMode:e,toggleTheme:r}),children:[h.jsx(dn,{path:"/",element:h.jsx(Q4,{})}),h.jsx(dn,{path:"/articles/:id",element:h.jsx(gv,{})}),h.jsx(dn,{path:"/media",element:h.jsx(ay,{})}),h.jsx(dn,{path:"/about",element:h.jsx(ey,{})})]})})})}const Hl=document.getElementById("root");if(!Hl)throw new Error("Could not find root element to mount to");Hl.innerHTML||Es.createRoot(Hl).render(h.jsx(hn.StrictMode,{children:h.jsx(yv,{})}));
