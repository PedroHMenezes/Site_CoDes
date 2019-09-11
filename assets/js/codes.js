!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).firebase=e()}(this,function(){"use strict";!function(t){if(!t.fetch){var e="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,s="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),n="FormData"in t,o="ArrayBuffer"in t;if(o)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=function(t){return t&&DataView.prototype.isPrototypeOf(t)},u=ArrayBuffer.isView||function(t){return t&&-1<i.indexOf(Object.prototype.toString.call(t))};d.prototype.append=function(t,e){t=l(t),e=p(e);var r=this.map[t];this.map[t]=r?r+","+e:e},d.prototype.delete=function(t){delete this.map[l(t)]},d.prototype.get=function(t){return t=l(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(l(t))},d.prototype.set=function(t,e){this.map[l(t)]=p(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),h(r)},d.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),h(e)},d.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),h(r)},r&&(d.prototype[Symbol.iterator]=d.prototype.entries);var c=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},g.call(w.prototype),g.call(O.prototype),O.prototype.clone=function(){return new O(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},O.error=function(){var t=new O(null,{status:0,statusText:""});return t.type="error",t};var f=[301,302,303,307,308];O.redirect=function(t,e){if(-1===f.indexOf(e))throw new RangeError("Invalid status code");return new O(null,{status:e,headers:{location:t}})},t.Headers=d,t.Request=w,t.Response=O,t.fetch=function(r,o){return new Promise(function(n,t){var e=new w(r,o),i=new XMLHttpRequest;i.onload=function(){var t,o,e={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",o=new d,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),r=e.shift().trim();if(r){var n=e.join(":").trim();o.append(r,n)}}),o)};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;n(new O(r,e))},i.onerror=function(){t(new TypeError("Network request failed"))},i.ontimeout=function(){t(new TypeError("Network request failed"))},i.open(e.method,e.url,!0),"include"===e.credentials?i.withCredentials=!0:"omit"===e.credentials&&(i.withCredentials=!1),"responseType"in i&&s&&(i.responseType="blob"),e.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===e._bodyInit?null:e._bodyInit)})},t.fetch.polyfill=!0}function l(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function p(t){return"string"!=typeof t&&(t=String(t)),t}function h(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function v(r){return new Promise(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function b(t){var e=new FileReader,r=v(e);return e.readAsArrayBuffer(t),r}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t)if("string"==typeof t)this._bodyText=t;else if(s&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(n&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(o&&s&&a(t))this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!o||!ArrayBuffer.prototype.isPrototypeOf(t)&&!u(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=m(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var t,e,r,n=y(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=v(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}function w(t,e){var r,n,o=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),-1<c.indexOf(n)?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function _(t){var o=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),r=e.shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," ");o.append(decodeURIComponent(r),decodeURIComponent(n))}}),o}function O(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:void 0);var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}function r(e){var r=this.constructor;return this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){return r.reject(t)})})}var n=setTimeout;function o(){}function i(t){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(t,this)}function s(r,n){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,i._immediateFn(function(){var t=1===r._state?n.onFulfilled:n.onRejected;if(null!==t){var e;try{e=t(r._value)}catch(t){return void u(n.promise,t)}a(n.promise,e)}else(1===r._state?a:u)(n.promise,r._value)})):r._deferreds.push(n)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var r=t.then;if(t instanceof i)return e._state=3,e._value=t,void c(e);if("function"==typeof r)return void l((n=r,o=t,function(){n.apply(o,arguments)}),e)}e._state=1,e._value=t,c(e)}catch(t){u(e,t)}var n,o}function u(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,r=t._deferreds.length;e<r;e++)s(t,t._deferreds[e]);t._deferreds=null}function f(t,e,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=r}function l(t,e){var r=!1;try{t(function(t){r||(r=!0,a(e,t))},function(t){r||(r=!0,u(e,t))})}catch(t){if(r)return;r=!0,u(e,t)}}i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var r=new this.constructor(o);return s(this,new f(t,e,r)),r},i.prototype.finally=r,i.all=function(e){return new i(function(n,o){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(e);if(0===i.length)return n([]);var s=i.length;function a(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var r=t.then;if("function"==typeof r)return void r.call(t,function(t){a(e,t)},o)}i[e]=t,0==--s&&n(i)}catch(t){o(t)}}for(var t=0;t<i.length;t++)a(t,i[t])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(r){return new i(function(t,e){e(r)})},i.race=function(o){return new i(function(t,e){for(var r=0,n=o.length;r<n;r++)o[r].then(t,e)})},i._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){n(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var p=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();"Promise"in p?p.Promise.prototype.finally||(p.Promise.prototype.finally=r):p.Promise=i;var h,d,y,g=function(n,o,t){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(n),void 0===o)return n;switch(t){case 0:return function(){return n.call(o)};case 1:return function(t){return n.call(o,t)};case 2:return function(t,e){return n.call(o,t,e)};case 3:return function(t,e,r){return n.call(o,t,e,r)}}return function(){return n.apply(o,arguments)}},v=function(t){try{return!!t()}catch(t){return!0}},b={}.toString,m=function(t){return b.call(t).slice(8,-1)},w="".split,_=v(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==m(t)?w.call(t,""):Object(t)}:Object,O=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},S=function(t){return Object(O(t))},A=Math.ceil,j=Math.floor,E=function(t){return isNaN(t=+t)?0:(0<t?j:A)(t)},T=Math.min,P=function(t){return 0<t?T(E(t),9007199254740991):0},x=function(t){return"object"==typeof t?null!==t:"function"==typeof t},I=Array.isArray||function(t){return"Array"==m(t)},k="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")(),L=!v(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),F=k.document,N=x(F)&&x(F.createElement),R=function(t){return N?F.createElement(t):{}},D=!L&&!v(function(){return 7!=Object.defineProperty(R("div"),"a",{get:function(){return 7}}).a}),B=function(t){if(!x(t))throw TypeError(String(t)+" is not an object");return t},C=function(t,e){if(!x(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!x(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!x(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!x(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},M=Object.defineProperty,U={f:L?M:function(t,e,r){if(B(t),e=C(e,!0),B(r),D)try{return M(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},G=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},z=L?function(t,e,r){return U.f(t,e,G(1,r))}:function(t,e,r){return t[e]=r,t},H=function(e,r){try{z(k,e,r)}catch(t){k[e]=r}return r},V=e(function(t){var e="__core-js_shared__",r=k[e]||H(e,{});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.0.1",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),q=0,W=Math.random(),$=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++q+W).toString(36))},J=!v(function(){return!String(Symbol())}),K=V("wks"),Y=k.Symbol,X=function(t){return K[t]||(K[t]=J&&Y[t]||(J?Y:$)("Symbol."+t))},Q=X("species"),Z=function(t,e){var r;return I(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!I(r.prototype)?x(r)&&null===(r=r[Q])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},tt=function(l,t){var p=1==l,h=2==l,d=3==l,y=4==l,v=6==l,b=5==l||v,m=t||Z;return function(t,e,r){for(var n,o,i=S(t),s=_(i),a=g(e,r,3),u=P(s.length),c=0,f=p?m(t,u):h?m(t,0):void 0;c<u;c++)if((b||c in s)&&(o=a(n=s[c],c,i),l))if(p)f[c]=o;else if(o)switch(l){case 3:return!0;case 5:return n;case 6:return c;case 2:f.push(n)}else if(y)return!1;return v?-1:d||y?y:f}},et={}.propertyIsEnumerable,rt=Object.getOwnPropertyDescriptor,nt={f:rt&&!et.call({1:2},1)?function(t){var e=rt(this,t);return!!e&&e.enumerable}:et},ot=function(t){return _(O(t))},it={}.hasOwnProperty,st=function(t,e){return it.call(t,e)},at=Object.getOwnPropertyDescriptor,ut={f:L?at:function(t,e){if(t=ot(t),e=C(e,!0),D)try{return at(t,e)}catch(t){}if(st(t,e))return G(!nt.f.call(t,e),t[e])}},ct=V("native-function-to-string",Function.toString),ft=k.WeakMap,lt="function"==typeof ft&&/native code/.test(ct.call(ft)),pt=V("keys"),ht=function(t){return pt[t]||(pt[t]=$(t))},dt={},yt=k.WeakMap;if(lt){var vt=new yt,bt=vt.get,mt=vt.has,gt=vt.set;h=function(t,e){return gt.call(vt,t,e),e},d=function(t){return bt.call(vt,t)||{}},y=function(t){return mt.call(vt,t)}}else{var wt=ht("state");dt[wt]=!0,h=function(t,e){return z(t,wt,e),e},d=function(t){return st(t,wt)?t[wt]:{}},y=function(t){return st(t,wt)}}var _t,Ot={set:h,get:d,has:y,enforce:function(t){return y(t)?d(t):h(t,{})},getterFor:function(r){return function(t){var e;if(!x(t)||(e=d(t)).type!==r)throw TypeError("Incompatible receiver, "+r+" required");return e}}},St=e(function(t){var e=Ot.get,a=Ot.enforce,u=String(ct).split("toString");V("inspectSource",function(t){return ct.call(t)}),(t.exports=function(t,e,r,n){var o=!!n&&!!n.unsafe,i=!!n&&!!n.enumerable,s=!!n&&!!n.noTargetGet;"function"==typeof r&&("string"!=typeof e||st(r,"name")||z(r,"name",e),a(r).source=u.join("string"==typeof e?e:"")),t!==k?(o?!s&&t[e]&&(i=!0):delete t[e],i?t[e]=r:z(t,e,r)):i?t[e]=r:H(e,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||ct.call(this)})}),At=Math.max,jt=Math.min,Et=(_t=!1,function(t,e,r){var n,o,i,s=ot(t),a=P(s.length),u=(n=a,(o=E(r))<0?At(o+n,0):jt(o,n));if(_t&&e!=e){for(;u<a;)if((i=s[u++])!=i)return!0}else for(;u<a;u++)if((_t||u in s)&&s[u]===e)return _t||u||0;return!_t&&-1}),Tt=function(t,e){var r,n=ot(t),o=0,i=[];for(r in n)!st(dt,r)&&st(n,r)&&i.push(r);for(;e.length>o;)st(n,r=e[o++])&&(~Et(i,r)||i.push(r));return i},Pt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],xt=Pt.concat("length","prototype"),It={f:Object.getOwnPropertyNames||function(t){return Tt(t,xt)}},kt={f:Object.getOwnPropertySymbols},Lt=k.Reflect,Ft=Lt&&Lt.ownKeys||function(t){var e=It.f(B(t)),r=kt.f;return r?e.concat(r(t)):e},Nt=function(t,e){for(var r=Ft(e),n=U.f,o=ut.f,i=0;i<r.length;i++){var s=r[i];st(t,s)||n(t,s,o(e,s))}},Rt=/#|\.prototype\./,Dt=function(t,e){var r=Ct[Bt(t)];return r==Ut||r!=Mt&&("function"==typeof e?v(e):!!e)},Bt=Dt.normalize=function(t){return String(t).replace(Rt,".").toLowerCase()},Ct=Dt.data={},Mt=Dt.NATIVE="N",Ut=Dt.POLYFILL="P",Gt=Dt,zt=ut.f,Ht=function(t,e){var r,n,o,i,s,a=t.target,u=t.global,c=t.stat;if(r=u?k:c?k[a]||H(a,{}):(k[a]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(s=zt(r,n))&&s.value:r[n],!Gt(u?n:a+(c?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Nt(i,o)}(t.sham||o&&o.sham)&&z(i,"sham",!0),St(r,n,i,t)}},Vt=Object.keys||function(t){return Tt(t,Pt)},qt=L?Object.defineProperties:function(t,e){B(t);for(var r,n=Vt(e),o=n.length,i=0;i<o;)U.f(t,r=n[i++],e[r]);return t},Wt=k.document,$t=Wt&&Wt.documentElement,Jt=ht("IE_PROTO"),Kt="prototype",Yt=function(){},Xt=function(){var t,e=R("iframe"),r=Pt.length,n="script";for(e.style.display="none",$t.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object</"+n+">"),t.close(),Xt=t.F;r--;)delete Xt[Kt][Pt[r]];return Xt()},Qt=Object.create||function(t,e){var r;return null!==t?(Yt[Kt]=B(t),r=new Yt,Yt[Kt]=null,r[Jt]=t):r=Xt(),void 0===e?r:qt(r,e)};dt[Jt]=!0;var Zt=X("unscopables"),te=Array.prototype;null==te[Zt]&&z(te,Zt,Qt(null));var ee=function(t){te[Zt][t]=!0},re=tt(5),ne="find",oe=!0;ne in[]&&Array(1)[ne](function(){oe=!1}),Ht({target:"Array",proto:!0,forced:oe},{find:function(t){return re(this,t,1<arguments.length?arguments[1]:void 0)}}),ee(ne);var ie=Function.call,se=function(t,e,r){return g(ie,k[t].prototype[e],r)},ae=(se("Array","find"),tt(6)),ue="findIndex",ce=!0;ue in[]&&Array(1)[ue](function(){ce=!1}),Ht({target:"Array",proto:!0,forced:ce},{findIndex:function(t){return ae(this,t,1<arguments.length?arguments[1]:void 0)}}),ee(ue);se("Array","findIndex");var fe=Object.assign,le=!fe||v(function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=fe({},t)[r]||Vt(fe({},e)).join("")!=n})?function(t,e){for(var r=S(t),n=arguments.length,o=1,i=kt.f,s=nt.f;o<n;)for(var a,u=_(arguments[o++]),c=i?Vt(u).concat(i(u)):Vt(u),f=c.length,l=0;l<f;)s.call(u,a=c[l++])&&(r[a]=u[a]);return r}:fe;Ht({target:"Object",stat:!0,forced:Object.assign!==le},{assign:le});var pe=k,he=(pe.Object.assign,X("match")),de=function(t,e,r){if(x(n=e)&&(void 0!==(o=n[he])?o:"RegExp"==m(n)))throw TypeError("String.prototype."+r+" doesn't accept regex");var n,o;return String(O(t))},ye=X("match"),ve="startsWith",be=function(e){var r=/./;try{"/./"[e](r)}catch(t){try{return r[ye]=!1,"/./"[e](r)}catch(t){}}return!1}(ve),me=""[ve];Ht({target:"String",proto:!0,forced:!be},{startsWith:function(t){var e=de(this,t,ve),r=P(Math.min(1<arguments.length?arguments[1]:void 0,e.length)),n=String(t);return me?me.call(e,n,r):e.slice(r,r+n.length)===n}});se("String","startsWith");Ht({target:"String",proto:!0},{repeat:"".repeat||function(t){var e=String(O(this)),r="",n=E(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;0<n;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r}});se("String","repeat");var ge,we=function(t,e,r){var n=C(e);n in t?U.f(t,n,G(0,r)):t[n]=r},_e=X("species"),Oe=X("isConcatSpreadable"),Se=9007199254740991,Ae="Maximum allowed index exceeded",je=!v(function(){var t=[];return t[Oe]=!1,t.concat()[0]!==t}),Ee=(ge="concat",!v(function(){var t=[];return(t.constructor={})[_e]=function(){return{foo:1}},1!==t[ge](Boolean).foo})),Te=function(t){if(!x(t))return!1;var e=t[Oe];return void 0!==e?!!e:I(t)};Ht({target:"Array",proto:!0,forced:!je||!Ee},{concat:function(t){var e,r,n,o,i,s=S(this),a=Z(s,0),u=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?s:arguments[e],Te(i)){if(o=P(i.length),Se<u+o)throw TypeError(Ae);for(r=0;r<o;r++,u++)r in i&&we(a,u,i[r])}else{if(Se<=u)throw TypeError(Ae);we(a,u++,i)}return a.length=u,a}});var Pe=X("toStringTag"),xe="Arguments"==m(function(){return arguments}()),Ie={};Ie[X("toStringTag")]="z";var ke="[object z]"!==String(Ie)?function(){return"[object "+(void 0===(t=this)?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Pe))?r:xe?m(e):"Object"==(n=m(e))&&"function"==typeof e.callee?"Arguments":n)+"]";var t,e,r,n}:Ie.toString,Le=Object.prototype;ke!==Le.toString&&St(Le,"toString",ke,{unsafe:!0});var Fe=U.f,Ne=X("toStringTag"),Re=function(t,e,r){t&&!st(t=r?t:t.prototype,Ne)&&Fe(t,Ne,{configurable:!0,value:e})},De={f:X},Be=U.f,Ce=function(t){var e=pe.Symbol||(pe.Symbol={});st(e,t)||Be(e,t,{value:De.f(t)})},Me=It.f,Ue={}.toString,Ge="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],ze={f:function(t){return Ge&&"[object Window]"==Ue.call(t)?function(t){try{return Me(t)}catch(t){return Ge.slice()}}(t):Me(ot(t))}},He=ht("hidden"),Ve="Symbol",qe=Ot.set,We=Ot.getterFor(Ve),$e=ut.f,Je=U.f,Ke=ze.f,Ye=k.Symbol,Xe=k.JSON,Qe=Xe&&Xe.stringify,Ze="prototype",tr=X("toPrimitive"),er=nt.f,rr=V("symbol-registry"),nr=V("symbols"),or=V("op-symbols"),ir=V("wks"),sr=Object[Ze],ar=k.QObject,ur=!ar||!ar[Ze]||!ar[Ze].findChild,cr=L&&v(function(){return 7!=Qt(Je({},"a",{get:function(){return Je(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=$e(sr,e);n&&delete sr[e],Je(t,e,r),n&&t!==sr&&Je(sr,e,n)}:Je,fr=function(t,e){var r=nr[t]=Qt(Ye[Ze]);return qe(r,{type:Ve,tag:t,description:e}),L||(r.description=e),r},lr=J&&"symbol"==typeof Ye.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Ye},pr=function(t,e,r){return t===sr&&pr(or,e,r),B(t),e=C(e,!0),B(r),st(nr,e)?(r.enumerable?(st(t,He)&&t[He][e]&&(t[He][e]=!1),r=Qt(r,{enumerable:G(0,!1)})):(st(t,He)||Je(t,He,G(1,{})),t[He][e]=!0),cr(t,e,r)):Je(t,e,r)},hr=function(t,e){B(t);for(var r,n=function(t){var e=Vt(t),r=kt.f;if(r)for(var n,o=r(t),i=nt.f,s=0;o.length>s;)i.call(t,n=o[s++])&&e.push(n);return e}(e=ot(e)),o=0,i=n.length;o<i;)pr(t,r=n[o++],e[r]);return t},dr=function(t){var e=er.call(this,t=C(t,!0));return!(this===sr&&st(nr,t)&&!st(or,t))&&(!(e||!st(this,t)||!st(nr,t)||st(this,He)&&this[He][t])||e)},yr=function(t,e){if(t=ot(t),e=C(e,!0),t!==sr||!st(nr,e)||st(or,e)){var r=$e(t,e);return!r||!st(nr,e)||st(t,He)&&t[He][e]||(r.enumerable=!0),r}},vr=function(t){for(var e,r=Ke(ot(t)),n=[],o=0;r.length>o;)st(nr,e=r[o++])||st(dt,e)||n.push(e);return n},br=function(t){for(var e,r=t===sr,n=Ke(r?or:ot(t)),o=[],i=0;n.length>i;)!st(nr,e=n[i++])||r&&!st(sr,e)||o.push(nr[e]);return o};J||(St((Ye=function(){if(this instanceof Ye)throw TypeError("Symbol is not a constructor");var t=void 0===arguments[0]?void 0:String(arguments[0]),e=$(t),r=function(t){this===sr&&r.call(or,t),st(this,He)&&st(this[He],e)&&(this[He][e]=!1),cr(this,e,G(1,t))};return L&&ur&&cr(sr,e,{configurable:!0,set:r}),fr(e,t)})[Ze],"toString",function(){return We(this).tag}),nt.f=dr,U.f=pr,ut.f=yr,It.f=ze.f=vr,kt.f=br,L&&(Je(Ye[Ze],"description",{configurable:!0,get:function(){return We(this).description}}),St(sr,"propertyIsEnumerable",dr,{unsafe:!0})),De.f=function(t){return fr(X(t),t)}),Ht({global:!0,wrap:!0,forced:!J,sham:!J},{Symbol:Ye});for(var mr=Vt(ir),gr=0;mr.length>gr;)Ce(mr[gr++]);Ht({target:Ve,stat:!0,forced:!J},{for:function(t){return st(rr,t+="")?rr[t]:rr[t]=Ye(t)},keyFor:function(t){if(!lr(t))throw TypeError(t+" is not a symbol");for(var e in rr)if(rr[e]===t)return e},useSetter:function(){ur=!0},useSimple:function(){ur=!1}}),Ht({target:"Object",stat:!0,forced:!J,sham:!L},{create:function(t,e){return void 0===e?Qt(t):hr(Qt(t),e)},defineProperty:pr,defineProperties:hr,getOwnPropertyDescriptor:yr}),Ht({target:"Object",stat:!0,forced:!J},{getOwnPropertyNames:vr,getOwnPropertySymbols:br}),Xe&&Ht({target:"JSON",stat:!0,forced:!J||v(function(){var t=Ye();return"[null]"!=Qe([t])||"{}"!=Qe({a:t})||"{}"!=Qe(Object(t))})},{stringify:function(t){for(var e,r,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=e=n[1],(x(e)||void 0!==t)&&!lr(t))return I(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!lr(e))return e}),n[1]=e,Qe.apply(Xe,n)}}),Ye[Ze][tr]||z(Ye[Ze],tr,Ye[Ze].valueOf),Re(Ye,Ve),dt[He]=!0,Ce("asyncIterator");var wr=U.f,_r=k.Symbol;if(L&&"function"==typeof _r&&(!("description"in _r.prototype)||void 0!==_r().description)){var Or={},Sr=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof Sr?new _r(t):void 0===t?_r():_r(t);return""===t&&(Or[e]=!0),e};Nt(Sr,_r);var Ar=Sr.prototype=_r.prototype;Ar.constructor=Sr;var jr=Ar.toString,Er="Symbol(test)"==String(_r("test")),Tr=/^Symbol\((.*)\)[^)]+$/;wr(Ar,"description",{configurable:!0,get:function(){var t=x(this)?this.valueOf():this,e=jr.call(t);if(st(Or,t))return"";var r=Er?e.slice(7,-1):e.replace(Tr,"$1");return""===r?void 0:r}}),Ht({global:!0,forced:!0},{Symbol:Sr})}Ce("hasInstance"),Ce("isConcatSpreadable"),Ce("iterator"),Ce("match"),Ce("replace"),Ce("search"),Ce("species"),Ce("split"),Ce("toPrimitive"),Ce("toStringTag"),Ce("unscopables"),Re(Math,"Math",!0),Re(k.JSON,"JSON",!0);pe.Symbol;Ce("dispose"),Ce("observable"),Ce("patternMatch");var Pr,xr,Ir,kr=!v(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),Lr=ht("IE_PROTO"),Fr=Object.prototype,Nr=kr?Object.getPrototypeOf:function(t){return t=S(t),st(t,Lr)?t[Lr]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Fr:null},Rr=X("iterator"),Dr=!1;[].keys&&("next"in(Ir=[].keys())?(xr=Nr(Nr(Ir)))!==Object.prototype&&(Pr=xr):Dr=!0),null==Pr&&(Pr={}),st(Pr,Rr)||z(Pr,Rr,function(){return this});var Br={IteratorPrototype:Pr,BUGGY_SAFARI_ITERATORS:Dr},Cr=Br.IteratorPrototype,Mr=Object.setPrototypeOf||("__proto__"in{}?function(){var r,n=!1,t={};try{(r=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),n=t instanceof Array}catch(t){}return function(t,e){return function(t,e){if(B(t),!x(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(t,e),n?r.call(t,e):t.__proto__=e,t}}():void 0),Ur=X("iterator"),Gr=Br.IteratorPrototype,zr=Br.BUGGY_SAFARI_ITERATORS,Hr="values",Vr="entries",qr=function(){return this},Wr=function(t,e,r,n,o,i,s){var a,u,c;u=n,c=e+" Iterator",(a=r).prototype=Qt(Cr,{next:G(1,u)}),Re(a,c,!1);var f,l,p,h=function(t){if(t===o&&m)return m;if(!zr&&t in v)return v[t];switch(t){case"keys":case Hr:case Vr:return function(){return new r(this,t)}}return function(){return new r(this)}},d=e+" Iterator",y=!1,v=t.prototype,b=v[Ur]||v["@@iterator"]||o&&v[o],m=!zr&&b||h(o),g="Array"==e&&v.entries||b;if(g&&(f=Nr(g.call(new t)),Gr!==Object.prototype&&f.next&&(Nr(f)!==Gr&&(Mr?Mr(f,Gr):"function"!=typeof f[Ur]&&z(f,Ur,qr)),Re(f,d,!0))),o==Hr&&b&&b.name!==Hr&&(y=!0,m=function(){return b.call(this)}),v[Ur]!==m&&z(v,Ur,m),o)if(l={values:h(Hr),keys:i?m:h("keys"),entries:h(Vr)},s)for(p in l)!zr&&!y&&p in v||St(v,p,l[p]);else Ht({target:e,proto:!0,forced:zr||y},l);return l},$r="String Iterator",Jr=Ot.set,Kr=Ot.getterFor($r);Wr(String,"String",function(t){Jr(this,{type:$r,string:String(t),index:0})},function(){var t,e,r,n,o,i,s,a,u=Kr(this),c=u.string,f=u.index;return f>=c.length?{value:void 0,done:!0}:(e=f,r=!0,i=String(O(c)),s=E(e),a=i.length,t=s<0||a<=s?r?"":void 0:(n=i.charCodeAt(s))<55296||56319<n||s+1===a||(o=i.charCodeAt(s+1))<56320||57343<o?r?i.charAt(s):n:r?i.slice(s,s+2):o-56320+(n-55296<<10)+65536,u.index+=t.length,{value:t,done:!1})});var Yr={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Xr="Array Iterator",Qr=Ot.set,Zr=Ot.getterFor(Xr),tn=Wr(Array,"Array",function(t,e){Qr(this,{type:Xr,target:ot(t),index:0,kind:e})},function(){var t=Zr(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?{value:t.target=void 0,done:!0}:"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}},"values");ee("keys"),ee("values"),ee("entries");var en=X("iterator"),rn=X("toStringTag"),nn=tn.values;for(var on in Yr){var sn=k[on],an=sn&&sn.prototype;if(an){if(an[en]!==nn)try{z(an,en,nn)}catch(_n){an[en]=nn}if(an[rn]||z(an,rn,on),Yr[on])for(var un in tn)if(an[un]!==tn[un])try{z(an,un,tn[un])}catch(_n){an[un]=tn[un]}}}De.f("iterator");function cn(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(var r in e)e.hasOwnProperty(r)&&(t[r]=cn(t[r],e[r]));return t}function fn(t,e,r){t[e]=r}var ln="FirebaseError",pn=Error.captureStackTrace,hn=function(t,e){if(this.code=t,this.message=e,pn)pn(this,dn.prototype.create);else try{throw Error.apply(this,arguments)}catch(t){this.name=ln,Object.defineProperty(this,"stack",{get:function(){return t.stack}})}};hn.prototype=Object.create(Error.prototype),(hn.prototype.constructor=hn).prototype.name=ln;var dn=function(){function t(t,e,r){this.service=t,this.serviceName=e,this.errors=r,this.pattern=/\{\$([^}]+)}/g}return t.prototype.create=function(t,n){void 0===n&&(n={});var e,r=this.errors[t],o=this.service+"/"+t;e=void 0===r?"Error":r.replace(this.pattern,function(t,e){var r=n[e];return void 0!==r?r.toString():"<"+e+"?>"}),e=this.serviceName+": "+e+" ("+o+").";var i=new hn(o,e);for(var s in n)n.hasOwnProperty(s)&&"_"!==s.slice(-1)&&(i[s]=n[s]);return i},t}();function yn(t,e){var r=new bn(t,e);return r.subscribe.bind(r)}var vn,bn=function(){function t(t,e){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(function(){t(r)}).catch(function(t){r.error(t)})}return t.prototype.next=function(e){this.forEachObserver(function(t){t.next(e)})},t.prototype.error=function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)},t.prototype.complete=function(){this.forEachObserver(function(t){t.complete()}),this.close()},t.prototype.subscribe=function(t,e,r){var n,o=this;if(void 0===t&&void 0===e&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(t,e){if("object"!=typeof t||null===t)return!1;for(var r=0,n=e;r<n.length;r++){var o=n[r];if(o in t&&"function"==typeof t[o])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:r}).next&&(n.next=mn),void 0===n.error&&(n.error=mn),void 0===n.complete&&(n.complete=mn);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(t){}}),this.observers.push(n),i},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var r=this;this.task.then(function(){if(void 0!==r.observers&&void 0!==r.observers[t])try{e(r.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(function(){e.observers=void 0,e.onNoObservers=void 0}))},t}();function mn(){}var gn=((vn={})["no-app"]="No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",vn["bad-app-name"]="Illegal App name: '{$name}",vn["duplicate-app"]="Firebase App named '{$name}' already exists",vn["app-deleted"]="Firebase App named '{$name}' already deleted",vn["duplicate-service"]="Firebase service named '{$name}' already registered",vn["invalid-app-argument"]="firebase.{$name}() takes either no argument or a Firebase App instance.",vn),wn=new dn("app","Firebase",gn);function _n(t,e){throw wn.create(t,e)}var On="[DEFAULT]",Sn=[],An=function(){function t(t,e,r){this.firebase_=r,this.isDeleted_=!1,this.services_={},this.name_=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled||!1,this.options_=cn(void 0,t),this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(t){Sn.push(t),setTimeout(function(){return t(null)},0)},removeAuthTokenListener:function(e){Sn=Sn.filter(function(t){return t!==e})}}}return Object.defineProperty(t.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this._automaticDataCollectionEnabled},set:function(t){this.checkDestroyed_(),this._automaticDataCollectionEnabled=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),t.prototype.delete=function(){var n=this;return new Promise(function(t){n.checkDestroyed_(),t()}).then(function(){n.firebase_.INTERNAL.removeApp(n.name_);var r=[];return Object.keys(n.services_).forEach(function(e){Object.keys(n.services_[e]).forEach(function(t){r.push(n.services_[e][t])})}),Promise.all(r.map(function(t){return t.INTERNAL.delete()}))}).then(function(){n.isDeleted_=!0,n.services_={}})},t.prototype._getService=function(t,e){if(void 0===e&&(e=On),this.checkDestroyed_(),this.services_[t]||(this.services_[t]={}),!this.services_[t][e]){var r=e!==On?e:void 0,n=this.firebase_.INTERNAL.factories[t](this,this.extendApp.bind(this),r);this.services_[t][e]=n}return this.services_[t][e]},t.prototype.extendApp=function(t){var e=this;cn(this,t),t.INTERNAL&&t.INTERNAL.addAuthTokenListener&&(Sn.forEach(function(t){e.INTERNAL.addAuthTokenListener(t)}),Sn=[])},t.prototype.checkDestroyed_=function(){this.isDeleted_&&_n("app-deleted",{name:this.name_})},t}();An.prototype.name&&An.prototype.options||An.prototype.delete||console.log("dc");var jn=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var En=!1;try{En="[object process]"===Object.prototype.toString.call(global.process)}catch(t){}return En&&console.warn('\nWarning: This is a browser-targeted Firebase bundle but it appears it is being\nrun in a Node environment.  If running in a Node environment, make sure you\nare using the bundle specified by the "main" field in package.json.\n\nIf you are using Webpack, you can specify "main" as the first item in\n"resolve.mainFields":\nhttps://webpack.js.org/configuration/resolve/#resolvemainfields\n\nIf using Rollup, use the rollup-plugin-node-resolve plugin and set "module"\nto false and "main" to true:\nhttps://github.com/rollup/rollup-plugin-node-resolve\n'),function t(){var s={},a={},u={},c={__esModule:!0,initializeApp:function(t,e){if(void 0===e&&(e={}),"object"!=typeof e||null===e){var r=e;e={name:r}}var n=e;void 0===n.name&&(n.name=On);var o=n.name;"string"==typeof o&&o||_n("bad-app-name",{name:o+""}),jn(s,o)&&_n("duplicate-app",{name:o});var i=new An(t,n,c);return p(s[o]=i,"create"),i},app:f,apps:null,Promise:Promise,SDK_VERSION:"5.10.1",INTERNAL:{registerService:function(r,t,e,n,o){a[r]&&_n("duplicate-service",{name:r}),a[r]=t,n&&(u[r]=n,l().forEach(function(t){n("create",t)}));var i=function(t){return void 0===t&&(t=f()),"function"!=typeof t[r]&&_n("invalid-app-argument",{name:r}),t[r]()};return void 0!==e&&cn(i,e),c[r]=i,An.prototype[r]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._getService.bind(this,r).apply(this,o?t:[])},i},createFirebaseNamespace:t,extendNamespace:function(t){cn(c,t)},createSubscribe:yn,ErrorFactory:dn,removeApp:function(t){p(s[t],"delete"),delete s[t]},factories:a,useAsService:o,Promise:Promise,deepExtend:cn}};function f(t){return jn(s,t=t||On)||_n("no-app",{name:t}),s[t]}function l(){return Object.keys(s).map(function(t){return s[t]})}function p(r,n){Object.keys(a).forEach(function(t){var e=o(r,t);null!==e&&u[e]&&u[e](n,r)})}function o(t,e){if("serverAuth"===e)return null;var r=e;return t.options,r}return fn(c,"default",c),Object.defineProperty(c,"apps",{get:l}),fn(f,"App",An),c}()});
//# sourceMappingURL=firebase-app.js.map

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],e):e((t=t||self).firebase)}(this,function(Jn){"use strict";try{(function(){Jn=Jn&&Jn.hasOwnProperty("default")?Jn.default:Jn;var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function s(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function e(n,r){var i,o,s,t,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&e[0]?o.return:e[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,e[1])).done)return s;switch(o=0,s&&(e=[2&e[0],s.value]),e[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=r.call(n,a)}catch(t){e=[6,t],o=0}finally{i=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}var t=!1,n="${JSCORE_VERSION}",C=function(t,e){if(!t)throw p(e)},p=function(t){return new Error("Firebase Database ("+n+") INTERNAL ASSERT FAILED: "+t)},a=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);e[n++]=i<128?i:(e[n++]=i<2048?i>>6|192:(55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128):e[n++]=i>>12|224,i>>6&63|128),63&i|128)}return e},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var o=t[i],s=i+1<t.length,a=s?t[i+1]:0,h=i+2<t.length,u=h?t[i+2]:0,l=o>>2,c=(3&o)<<4|a>>4,p=(15&a)<<2|u>>6,d=63&u;h||(d=64,s||(p=64)),r.push(n[l],n[c],n[p],n[d])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(191<i&&i<224){var o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(239<i&&i<365){var s=((7&i)<<18|(63&(o=t[n++]))<<12|(63&(a=t[n++]))<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{o=t[n++];var a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var o=n[t.charAt(i++)],s=i<t.length?n[t.charAt(i)]:0,a=++i<t.length?n[t.charAt(i)]:64,h=++i<t.length?n[t.charAt(i)]:64;if(++i,null==o||null==s||null==a||null==h)throw Error();var u=o<<2|s>>4;if(r.push(u),64!=a){var l=s<<4&240|a>>2;if(r.push(l),64!=h){var c=a<<6&192|h;r.push(c)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t)>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u=function(t){try{return h.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function i(t){return function t(e,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:var r=n;return new Date(r.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return n}for(var i in n)n.hasOwnProperty(i)&&(e[i]=t(e[i],n[i]));return e}(void 0,t)}var l=function(){function t(){var n=this;this.promise=new Promise(function(t,e){n.resolve=t,n.reject=e})}return t.prototype.wrapCallback=function(n){var r=this;return function(t,e){t?r.reject(t):r.resolve(e),"function"==typeof n&&(r.promise.catch(function(){}),1===n.length?n(t):n(t,e))}},t}(),o=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")},c=function(){return!0===t},d="FirebaseError",f=Error.captureStackTrace,_=function(t,e){if(this.code=t,this.message=e,f)f(this,y.prototype.create);else try{throw Error.apply(this,arguments)}catch(t){this.name=d,Object.defineProperty(this,"stack",{get:function(){return t.stack}})}};_.prototype=Object.create(Error.prototype),(_.prototype.constructor=_).prototype.name=d;var y=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n,this.pattern=/\{\$([^}]+)}/g}return t.prototype.create=function(t,r){void 0===r&&(r={});var e,n=this.errors[t],i=this.service+"/"+t;e=void 0===n?"Error":n.replace(this.pattern,function(t,e){var n=r[e];return void 0!==n?n.toString():"<"+e+"?>"}),e=this.serviceName+": "+e+" ("+i+").";var o=new _(i,e);for(var s in r)r.hasOwnProperty(s)&&"_"!==s.slice(-1)&&(o[s]=r[s]);return o},t}();function v(t){return JSON.parse(t)}function g(t){return JSON.stringify(t)}var m=function(t){var e={},n={},r={},i="";try{var o=t.split(".");e=v(u(o[0])||""),n=v(u(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(t){}return{header:e,claims:n,data:r,signature:i}},E=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},w=function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]},b=function(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])},S=function(t){return n={},b(t,function(t,e){n[t]=e}),n;var n},T=function(t){for(var e in t)return!1;return!0},I=function(t){var e=0;for(var n in t)e++;return e},N=function(t,e,n){var r={};for(var i in t)r[i]=e.call(n,t[i],i,t);return r},R=function(t,e,n){for(var r in t)if(e.call(n,t[r],r,t))return r},P=function(t){for(var e in t)return e},D=function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}return t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var n=this.W_;if("string"==typeof t)for(var r=0;r<16;r++)n[r]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(r=0;r<16;r++)n[r]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],h=this.chain_[1],u=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(r=0;r<80;r++){s=r<40?r<20?(o=l^h&(u^l),1518500249):(o=h^u^l,1859775393):r<60?(o=h&u|l&(h|u),2400959708):(o=h^u^l,3395469782);i=(a<<5|a>>>27)+o+c+s+n[r]&4294967295;c=l,l=u,u=4294967295&(h<<30|h>>>2),h=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+h&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<e;){if(0==o)for(;r<=n;)this.compress_(t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(i[o]=t.charCodeAt(r),++r,++o==this.blockSize){this.compress_(i),o=0;break}}else for(;r<e;)if(i[o]=t[r],++r,++o==this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;56<=n;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;0<=i;i-=8)t[r]=this.chain_[n]>>i&255,++r;return t},t}(),O=function(t,e,n,r){var i;if(r<e?i="at least "+e:n<r&&(i=0===n?"none":"no more than "+n),i)throw new Error(t+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")};function k(t,e,n){var r="";switch(e){case 1:r=n?"first":"First";break;case 2:r=n?"second":"Second";break;case 3:r=n?"third":"Third";break;case 4:r=n?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var i=t+" failed: ";return i+=r+" argument "}function x(t,e,n,r){if((!r||n)&&"function"!=typeof n)throw new Error(k(t,e,r)+"must be a valid function.")}function F(t,e,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw new Error(k(t,e,r)+"must be a valid context object.")}var A,L,M=function(t){for(var e=0,n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:55296<=r&&r<=56319?(e+=4,n++):e+=3}return e};(L=A||(A={}))[L.DEBUG=0]="DEBUG",L[L.VERBOSE=1]="VERBOSE",L[L.INFO=2]="INFO",L[L.WARN=3]="WARN",L[L.ERROR=4]="ERROR",L[L.SILENT=5]="SILENT";var W,q=A.INFO,Q=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString();switch(e){case A.DEBUG:case A.VERBOSE:console.log.apply(console,["["+i+"]  "+t.name+":"].concat(n));break;case A.INFO:console.info.apply(console,["["+i+"]  "+t.name+":"].concat(n));break;case A.WARN:console.warn.apply(console,["["+i+"]  "+t.name+":"].concat(n));break;case A.ERROR:console.error.apply(console,["["+i+"]  "+t.name+":"].concat(n));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}}},U=function(){function t(t){this.name=t,this._logLevel=q,this._logHandler=Q}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in A))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!0,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,[this,A.DEBUG].concat(t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,[this,A.VERBOSE].concat(t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,[this,A.INFO].concat(t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,[this,A.WARN].concat(t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,[this,A.ERROR].concat(t))},t}(),V=function(){function t(t){this.domStorage_=t,this.prefix_="firebase:"}return t.prototype.set=function(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),g(e))},t.prototype.get=function(t){var e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:v(e)},t.prototype.remove=function(t){this.domStorage_.removeItem(this.prefixedName_(t))},t.prototype.prefixedName_=function(t){return this.prefix_+t},t.prototype.toString=function(){return this.domStorage_.toString()},t}(),H=function(){function t(){this.cache_={},this.isInMemoryStorage=!0}return t.prototype.set=function(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e},t.prototype.get=function(t){return E(this.cache_,t)?this.cache_[t]:null},t.prototype.remove=function(t){delete this.cache_[t]},t}(),B=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){var e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new V(e)}}catch(t){}return new H},j=B("localStorage"),K=B("sessionStorage"),Y=new U("@firebase/database"),z=(W=1,function(){return W++}),G=function(t){var e=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);if(55296<=i&&i<=56319){var o=i-55296;C(++r<t.length,"Surrogate pair missing trail surrogate."),i=65536+(o<<10)+(t.charCodeAt(r)-56320)}e[n++]=i<128?i:(e[n++]=i<2048?i>>6|192:(e[n++]=i<65536?i>>12|224:(e[n++]=i>>18|240,i>>12&63|128),i>>6&63|128),63&i|128)}return e}(t),n=new D;n.update(e);var r=n.digest();return h.encodeByteArray(r)},X=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n="",r=0;r<t.length;r++)Array.isArray(t[r])||t[r]&&"object"==typeof t[r]&&"number"==typeof t[r].length?n+=X.apply(null,t[r]):"object"==typeof t[r]?n+=g(t[r]):n+=t[r],n+=" ";return n},$=null,J=!0,Z=function(t,e){C(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Y.logLevel=A.VERBOSE,$=Y.log.bind(Y),e&&K.set("logging_enabled",!0)):"function"==typeof t?$=t:($=null,K.remove("logging_enabled"))},tt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!0===J&&(J=!1,null===$&&!0===K.get("logging_enabled")&&Z(!0)),$){var n=X.apply(null,t);$(n)}},et=function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];tt.apply(void 0,[n].concat(t))}},nt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE INTERNAL ERROR: "+X.apply(void 0,t);Y.error(n)},rt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE FATAL ERROR: "+X.apply(void 0,t);throw Y.error(n),new Error(n)},it=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE WARNING: "+X.apply(void 0,t);Y.warn(n)},ot=function(t){return"number"==typeof t&&(t!=t||t==Number.POSITIVE_INFINITY||t==Number.NEGATIVE_INFINITY)},st="[MIN_NAME]",at="[MAX_NAME]",ht=function(t,e){if(t===e)return 0;if(t===st||e===at)return-1;if(e===st||t===at)return 1;var n=yt(t),r=yt(e);return null!==n?null!==r?n-r==0?t.length-e.length:n-r:-1:null!==r?1:t<e?-1:1},ut=function(t,e){return t===e?0:t<e?-1:1},lt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+g(e))},ct=function(t){if("object"!=typeof t||null===t)return g(t);var e=[];for(var n in t)e.push(n);e.sort();for(var r="{",i=0;i<e.length;i++)0!==i&&(r+=","),r+=g(e[i]),r+=":",r+=ct(t[e[i]]);return r+="}"},pt=function(t,e){var n=t.length;if(n<=e)return[t];for(var r=[],i=0;i<n;i+=e)n<i+e?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r},dt=function(t,n){if(Array.isArray(t))for(var e=0;e<t.length;++e)n(e,t[e]);else b(t,function(t,e){return n(e,t)})},ft=function(t){C(!ot(t),"Invalid JSON number");var e,n,r,i,o,s,a;for(0===t?e=1/t==-1/(r=n=0)?1:0:(e=t<0,r=(t=Math.abs(t))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(t)/Math.LN2),1023))+1023,Math.round(t*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,Math.round(t/Math.pow(2,-1074)))),s=[],o=52;o;o-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(e?1:0),s.reverse(),a=s.join("");var h="";for(o=0;o<64;o+=8){var u=parseInt(a.substr(o,8),2).toString(16);1===u.length&&(u="0"+u),h+=u}return h.toLowerCase()},_t=new RegExp("^-?\\d{1,10}$"),yt=function(t){if(_t.test(t)){var e=Number(t);if(-2147483648<=e&&e<=2147483647)return e}return null},vt=function(t){try{t()}catch(e){setTimeout(function(){var t=e.stack||"";throw it("Exception was thrown by user callback.",t),e},Math.floor(0))}},gt=function(t,e){var n=setTimeout(t,e);return"object"==typeof n&&n.unref&&n.unref(),n},mt=function(){function i(t,e){if(void 0===e){this.pieces_=t.split("/");for(var n=0,r=0;r<this.pieces_.length;r++)0<this.pieces_[r].length&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}return Object.defineProperty(i,"Empty",{get:function(){return new i("")},enumerable:!0,configurable:!0}),i.prototype.getFront=function(){return this.pieceNum_>=this.pieces_.length?null:this.pieces_[this.pieceNum_]},i.prototype.getLength=function(){return this.pieces_.length-this.pieceNum_},i.prototype.popFront=function(){var t=this.pieceNum_;return t<this.pieces_.length&&t++,new i(this.pieces_,t)},i.prototype.getBack=function(){return this.pieceNum_<this.pieces_.length?this.pieces_[this.pieces_.length-1]:null},i.prototype.toString=function(){for(var t="",e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"},i.prototype.toUrlEncodedString=function(){for(var t="",e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+encodeURIComponent(String(this.pieces_[e])));return t||"/"},i.prototype.slice=function(t){return void 0===t&&(t=0),this.pieces_.slice(this.pieceNum_+t)},i.prototype.parent=function(){if(this.pieceNum_>=this.pieces_.length)return null;for(var t=[],e=this.pieceNum_;e<this.pieces_.length-1;e++)t.push(this.pieces_[e]);return new i(t,0)},i.prototype.child=function(t){for(var e=[],n=this.pieceNum_;n<this.pieces_.length;n++)e.push(this.pieces_[n]);if(t instanceof i)for(n=t.pieceNum_;n<t.pieces_.length;n++)e.push(t.pieces_[n]);else{var r=t.split("/");for(n=0;n<r.length;n++)0<r[n].length&&e.push(r[n])}return new i(e,0)},i.prototype.isEmpty=function(){return this.pieceNum_>=this.pieces_.length},i.relativePath=function(t,e){var n=t.getFront(),r=e.getFront();if(null===n)return e;if(n===r)return i.relativePath(t.popFront(),e.popFront());throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")},i.comparePaths=function(t,e){for(var n=t.slice(),r=e.slice(),i=0;i<n.length&&i<r.length;i++){var o=ht(n[i],r[i]);if(0!==o)return o}return n.length===r.length?0:n.length<r.length?-1:1},i.prototype.equals=function(t){if(this.getLength()!==t.getLength())return!1;for(var e=this.pieceNum_,n=t.pieceNum_;e<=this.pieces_.length;e++,n++)if(this.pieces_[e]!==t.pieces_[n])return!1;return!0},i.prototype.contains=function(t){var e=this.pieceNum_,n=t.pieceNum_;if(this.getLength()>t.getLength())return!1;for(;e<this.pieces_.length;){if(this.pieces_[e]!==t.pieces_[n])return!1;++e,++n}return!0},i}(),Ct=function(){function t(t,e){this.errorPrefix_=e,this.parts_=t.slice(),this.byteLength_=Math.max(1,this.parts_.length);for(var n=0;n<this.parts_.length;n++)this.byteLength_+=M(this.parts_[n]);this.checkValid_()}return Object.defineProperty(t,"MAX_PATH_DEPTH",{get:function(){return 32},enumerable:!0,configurable:!0}),Object.defineProperty(t,"MAX_PATH_LENGTH_BYTES",{get:function(){return 768},enumerable:!0,configurable:!0}),t.prototype.push=function(t){0<this.parts_.length&&(this.byteLength_+=1),this.parts_.push(t),this.byteLength_+=M(t),this.checkValid_()},t.prototype.pop=function(){var t=this.parts_.pop();this.byteLength_-=M(t),0<this.parts_.length&&(this.byteLength_-=1)},t.prototype.checkValid_=function(){if(this.byteLength_>t.MAX_PATH_LENGTH_BYTES)throw new Error(this.errorPrefix_+"has a key path longer than "+t.MAX_PATH_LENGTH_BYTES+" bytes ("+this.byteLength_+").");if(this.parts_.length>t.MAX_PATH_DEPTH)throw new Error(this.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+t.MAX_PATH_DEPTH+") or object contains a cycle "+this.toErrorString())},t.prototype.toErrorString=function(){return 0==this.parts_.length?"":"in property '"+this.parts_.join(".")+"'"},t}(),Et="firebaseio.com",wt="websocket",bt="long_polling",St=function(){function t(t,e,n,r,i){void 0===i&&(i=""),this.secure=e,this.namespace=n,this.webSocketOnly=r,this.persistenceKey=i,this.host=t.toLowerCase(),this.domain=this.host.substr(this.host.indexOf(".")+1),this.internalHost=j.get("host:"+t)||this.host}return t.prototype.needsQueryParam=function(){return this.host!==this.internalHost||this.isCustomHost()},t.prototype.isCacheableHost=function(){return"s-"===this.internalHost.substr(0,2)},t.prototype.isDemoHost=function(){return"firebaseio-demo.com"===this.domain},t.prototype.isCustomHost=function(){return"firebaseio.com"!==this.domain&&"firebaseio-demo.com"!==this.domain},t.prototype.updateHost=function(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&j.set("host:"+this.host,this.internalHost))},t.prototype.connectionURL=function(t,e){var n;if(C("string"==typeof t,"typeof type must == string"),C("object"==typeof e,"typeof params must == object"),t===wt)n=(this.secure?"wss://":"ws://")+this.internalHost+"/.ws?";else{if(t!==bt)throw new Error("Unknown connection type: "+t);n=(this.secure?"https://":"http://")+this.internalHost+"/.lp?"}this.needsQueryParam()&&(e.ns=this.namespace);var r=[];return b(e,function(t,e){r.push(t+"="+e)}),n+r.join("&")},t.prototype.toString=function(){var t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t},t.prototype.toURLString=function(){return(this.secure?"https://":"http://")+this.host},t}();var Tt,It,Nt,Rt,Pt,Dt=function(t){var e=Ot(t),n=e.subdomain;"firebase"===e.domain&&rt(e.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!=n||"localhost"===e.domain||rt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),e.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&it("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var r="ws"===e.scheme||"wss"===e.scheme;return{repoInfo:new St(e.host,e.secure,n,r),path:new mt(e.pathString)}},Ot=function(t){var e="",n="",r="",i="",o=!0,s="https",a=443;if("string"==typeof t){var h=t.indexOf("//");0<=h&&(s=t.substring(0,h-1),t=t.substring(h+2));var u=t.indexOf("/");-1===u&&(u=t.length);var l=t.indexOf("?");-1===l&&(l=t.length),e=t.substring(0,Math.min(u,l)),u<l&&(i=function(t){for(var e="",n=t.split("/"),r=0;r<n.length;r++)if(0<n[r].length){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}e+="/"+i}return e}(t.substring(u,l)));var c=function(t){var e={};"?"===t.charAt(0)&&(t=t.substring(1));for(var n=0,r=t.split("&");n<r.length;n++){var i=r[n];if(0!==i.length){var o=i.split("=");2===o.length?e[decodeURIComponent(o[0])]=decodeURIComponent(o[1]):it("Invalid query segment '"+i+"' in query '"+t+"'")}}return e}(t.substring(Math.min(t.length,l)));0<=(h=e.indexOf(":"))?(o="https"===s||"wss"===s,a=parseInt(e.substring(h+1),10)):h=t.length;var p=e.split(".");3===p.length?(n=p[1],r=p[0].toLowerCase()):2===p.length?n=p[0]:"localhost"===p[0].slice(0,h).toLowerCase()&&(n="localhost"),""===r&&"ns"in c&&(r=c.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:s,pathString:i}},kt=/[\[\].#$\/\u0000-\u001F\u007F]/,xt=/[\[\].#$\u0000-\u001F\u007F]/,Ft=10485760,At=function(t){return"string"==typeof t&&0!==t.length&&!kt.test(t)},Lt=function(t){return"string"==typeof t&&0!==t.length&&!xt.test(t)},Mt=function(t){return null===t||"string"==typeof t||"number"==typeof t&&!ot(t)||t&&"object"==typeof t&&E(t,".sv")},Wt=function(t,e,n,r,i){i&&void 0===n||qt(k(t,e,i),n,r)},qt=function(n,t,e){var r=e instanceof mt?new Ct(e,n):e;if(void 0===t)throw new Error(n+"contains undefined "+r.toErrorString());if("function"==typeof t)throw new Error(n+"contains a function "+r.toErrorString()+" with contents = "+t.toString());if(ot(t))throw new Error(n+"contains "+t.toString()+" "+r.toErrorString());if("string"==typeof t&&t.length>Ft/3&&M(t)>Ft)throw new Error(n+"contains a string greater than "+Ft+" utf8 bytes "+r.toErrorString()+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,o=!1;if(b(t,function(t,e){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(o=!0,!At(t)))throw new Error(n+" contains an invalid key ("+t+") "+r.toErrorString()+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');r.push(t),qt(n,e,r),r.pop()}),i&&o)throw new Error(n+' contains ".value" child '+r.toErrorString()+" in addition to actual children.")}},Qt=function(t,e,n,r,i){if(!i||void 0!==n){var o=k(t,e,i);if(!n||"object"!=typeof n||Array.isArray(n))throw new Error(o+" must be an object containing the children to replace.");var s=[];b(n,function(t,e){var n=new mt(t);if(qt(o,e,r.child(n)),".priority"===n.getBack()&&!Mt(e))throw new Error(o+"contains an invalid value for '"+n.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(n)}),function(t,e){var n,r;for(n=0;n<e.length;n++)for(var i=(r=e[n]).slice(),o=0;o<i.length;o++)if(".priority"===i[o]&&o===i.length-1);else if(!At(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');e.sort(mt.comparePaths);var s=null;for(n=0;n<e.length;n++){if(r=e[n],null!==s&&s.contains(r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}}(o,s)}},Ut=function(t,e,n,r){if(!r||void 0!==n){if(ot(n))throw new Error(k(t,e,r)+"is "+n.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Mt(n))throw new Error(k(t,e,r)+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Vt=function(t,e,n,r){if(!r||void 0!==n)switch(n){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(k(t,e,r)+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},Ht=function(t,e,n,r){if(!(r&&void 0===n||At(n)))throw new Error(k(t,e,r)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},Bt=function(t,e,n,r){if(!(r&&void 0===n||Lt(n)))throw new Error(k(t,e,r)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},jt=function(t,e){if(".info"===e.getFront())throw new Error(t+" failed = Can't modify data under /.info/")},Kt=function(t,e,n){var r,i=n.path.toString();if("string"!=typeof n.repoInfo.host||0===n.repoInfo.host.length||!At(n.repoInfo.namespace)&&"localhost"!==n.repoInfo.host.split(":")[0]||0!==i.length&&((r=i)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),!Lt(r)))throw new Error(k(t,e,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},Yt=function(){function t(t,e){this.repo_=t,this.path_=e}return t.prototype.cancel=function(t){O("OnDisconnect.cancel",0,1,arguments.length),x("OnDisconnect.cancel",1,t,!0);var e=new l;return this.repo_.onDisconnectCancel(this.path_,e.wrapCallback(t)),e.promise},t.prototype.remove=function(t){O("OnDisconnect.remove",0,1,arguments.length),jt("OnDisconnect.remove",this.path_),x("OnDisconnect.remove",1,t,!0);var e=new l;return this.repo_.onDisconnectSet(this.path_,null,e.wrapCallback(t)),e.promise},t.prototype.set=function(t,e){O("OnDisconnect.set",1,2,arguments.length),jt("OnDisconnect.set",this.path_),Wt("OnDisconnect.set",1,t,this.path_,!1),x("OnDisconnect.set",2,e,!0);var n=new l;return this.repo_.onDisconnectSet(this.path_,t,n.wrapCallback(e)),n.promise},t.prototype.setWithPriority=function(t,e,n){O("OnDisconnect.setWithPriority",2,3,arguments.length),jt("OnDisconnect.setWithPriority",this.path_),Wt("OnDisconnect.setWithPriority",1,t,this.path_,!1),Ut("OnDisconnect.setWithPriority",2,e,!1),x("OnDisconnect.setWithPriority",3,n,!0);var r=new l;return this.repo_.onDisconnectSetWithPriority(this.path_,t,e,r.wrapCallback(n)),r.promise},t.prototype.update=function(t,e){if(O("OnDisconnect.update",1,2,arguments.length),jt("OnDisconnect.update",this.path_),Array.isArray(t)){for(var n={},r=0;r<t.length;++r)n[""+r]=t[r];t=n,it("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Qt("OnDisconnect.update",1,t,this.path_,!1),x("OnDisconnect.update",2,e,!0);var i=new l;return this.repo_.onDisconnectUpdate(this.path_,t,i.wrapCallback(e)),i.promise},t}(),zt=function(){function t(t,e){this.committed=t,this.snapshot=e}return t.prototype.toJSON=function(){return O("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},t}(),Gt=(Tt="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",It=0,Nt=[],function(t){var e,n=t===It;It=t;var r=new Array(8);for(e=7;0<=e;e--)r[e]=Tt.charAt(t%64),t=Math.floor(t/64);C(0===t,"Cannot push at time == 0");var i=r.join("");if(n){for(e=11;0<=e&&63===Nt[e];e--)Nt[e]=0;Nt[e]++}else for(e=0;e<12;e++)Nt[e]=Math.floor(64*Math.random());for(e=0;e<12;e++)i+=Tt.charAt(Nt[e]);return C(20===i.length,"nextPushId: Length should be 20."),i}),Xt=function(){function n(t,e){this.name=t,this.node=e}return n.Wrap=function(t,e){return new n(t,e)},n}(),$t=function(){function t(){}return t.prototype.getCompare=function(){return this.compare.bind(this)},t.prototype.indexedValueChanged=function(t,e){var n=new Xt(st,t),r=new Xt(st,e);return 0!==this.compare(n,r)},t.prototype.minPost=function(){return Xt.MIN},t}(),Jt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),Object.defineProperty(e,"__EMPTY_NODE",{get:function(){return Rt},set:function(t){Rt=t},enumerable:!0,configurable:!0}),e.prototype.compare=function(t,e){return ht(t.name,e.name)},e.prototype.isDefinedOn=function(t){throw p("KeyIndex.isDefinedOn not expected to be called.")},e.prototype.indexedValueChanged=function(t,e){return!1},e.prototype.minPost=function(){return Xt.MIN},e.prototype.maxPost=function(){return new Xt(at,Rt)},e.prototype.makePost=function(t,e){return C("string"==typeof t,"KeyIndex indexValue must always be a string."),new Xt(t,Rt)},e.prototype.toString=function(){return".key"},e}($t),Zt=new Jt;var te,ee,ne,re=function(t){return"number"==typeof t?"number:"+ft(t):"string:"+t},ie=function(t){if(t.isLeafNode()){var e=t.val();C("string"==typeof e||"number"==typeof e||"object"==typeof e&&E(e,".sv"),"Priority must be a string or number.")}else C(t===Pt||t.isEmpty(),"priority of unexpected type.");C(t===Pt||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},oe=function(){function o(t,e){void 0===e&&(e=o.__childrenNodeConstructor.EMPTY_NODE),this.value_=t,this.priorityNode_=e,this.lazyHash_=null,C(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ie(this.priorityNode_)}return Object.defineProperty(o,"__childrenNodeConstructor",{get:function(){return te},set:function(t){te=t},enumerable:!0,configurable:!0}),o.prototype.isLeafNode=function(){return!0},o.prototype.getPriority=function(){return this.priorityNode_},o.prototype.updatePriority=function(t){return new o(this.value_,t)},o.prototype.getImmediateChild=function(t){return".priority"===t?this.priorityNode_:o.__childrenNodeConstructor.EMPTY_NODE},o.prototype.getChild=function(t){return t.isEmpty()?this:".priority"===t.getFront()?this.priorityNode_:o.__childrenNodeConstructor.EMPTY_NODE},o.prototype.hasChild=function(){return!1},o.prototype.getPredecessorChildName=function(t,e){return null},o.prototype.updateImmediateChild=function(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:o.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)},o.prototype.updateChild=function(t,e){var n=t.getFront();return null===n?e:e.isEmpty()&&".priority"!==n?this:(C(".priority"!==n||1===t.getLength(),".priority must be the last token in a path"),this.updateImmediateChild(n,o.__childrenNodeConstructor.EMPTY_NODE.updateChild(t.popFront(),e)))},o.prototype.isEmpty=function(){return!1},o.prototype.numChildren=function(){return 0},o.prototype.forEachChild=function(t,e){return!1},o.prototype.val=function(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},o.prototype.hash=function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+re(this.priorityNode_.val())+":");var e=typeof this.value_;t+=e+":",t+="number"===e?ft(this.value_):this.value_,this.lazyHash_=G(t)}return this.lazyHash_},o.prototype.getValue=function(){return this.value_},o.prototype.compareTo=function(t){return t===o.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof o.__childrenNodeConstructor?-1:(C(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))},o.prototype.compareToLeafNode_=function(t){var e=typeof t.value_,n=typeof this.value_,r=o.VALUE_TYPE_ORDER.indexOf(e),i=o.VALUE_TYPE_ORDER.indexOf(n);return C(0<=r,"Unknown leaf type: "+e),C(0<=i,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:i-r},o.prototype.withIndex=function(){return this},o.prototype.isIndexed=function(){return!0},o.prototype.equals=function(t){if(t===this)return!0;if(t.isLeafNode()){var e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1},o.VALUE_TYPE_ORDER=["object","boolean","number","string"],o}();var se,ae,he=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.compare=function(t,e){var n=t.node.getPriority(),r=e.node.getPriority(),i=n.compareTo(r);return 0===i?ht(t.name,e.name):i},e.prototype.isDefinedOn=function(t){return!t.getPriority().isEmpty()},e.prototype.indexedValueChanged=function(t,e){return!t.getPriority().equals(e.getPriority())},e.prototype.minPost=function(){return Xt.MIN},e.prototype.maxPost=function(){return new Xt(at,new oe("[PRIORITY-POST]",ne))},e.prototype.makePost=function(t,e){var n=ee(t);return new Xt(e,new oe("[PRIORITY-POST]",n))},e.prototype.toString=function(){return".priority"},e}($t)),ue=function(){function t(t,e,n,r,i){void 0===i&&(i=null),this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];for(var o=1;!t.isEmpty();)if(t=t,o=e?n(t.key,e):1,r&&(o*=-1),o<0)t=this.isReverse_?t.left:t.right;else{if(0===o){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}return t.prototype.getNext=function(){if(0===this.nodeStack_.length)return null;var t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t},t.prototype.hasNext=function(){return 0<this.nodeStack_.length},t.prototype.peek=function(){if(0===this.nodeStack_.length)return null;var t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}},t}(),le=function(){function o(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:o.RED,this.left=null!=r?r:pe.EMPTY_NODE,this.right=null!=i?i:pe.EMPTY_NODE}return o.prototype.copy=function(t,e,n,r,i){return new o(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)},o.prototype.count=function(){return this.left.count()+1+this.right.count()},o.prototype.isEmpty=function(){return!1},o.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)},o.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},o.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},o.prototype.minKey=function(){return this.min_().key},o.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},o.prototype.insert=function(t,e,n){var r,i;return(i=(r=n(t,(i=this).key))<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n))).fixUp_()},o.prototype.removeMin_=function(){if(this.left.isEmpty())return pe.EMPTY_NODE;var t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),(t=t.copy(null,null,null,t.left.removeMin_(),null)).fixUp_()},o.prototype.remove=function(t,e){var n,r;if(e(t,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return pe.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()},o.prototype.isRed_=function(){return this.color},o.prototype.fixUp_=function(){var t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t},o.prototype.moveRedLeft_=function(){var t=this.colorFlip_();return t.right.left.isRed_()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight_())).rotateLeft_()).colorFlip_()),t},o.prototype.moveRedRight_=function(){var t=this.colorFlip_();return t.left.left.isRed_()&&(t=(t=t.rotateRight_()).colorFlip_()),t},o.prototype.rotateLeft_=function(){var t=this.copy(null,null,o.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)},o.prototype.rotateRight_=function(){var t=this.copy(null,null,o.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)},o.prototype.colorFlip_=function(){var t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)},o.prototype.checkMaxDepth_=function(){var t=this.check_();return Math.pow(2,t)<=this.count()+1},o.prototype.check_=function(){var t;if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");if((t=this.left.check_())!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)},o.RED=!0,o.BLACK=!1,o}(),ce=function(){function t(){}return t.prototype.copy=function(t,e,n,r,i){return this},t.prototype.insert=function(t,e,n){return new le(t,e,null)},t.prototype.remove=function(t,e){return this},t.prototype.count=function(){return 0},t.prototype.isEmpty=function(){return!0},t.prototype.inorderTraversal=function(t){return!1},t.prototype.reverseTraversal=function(t){return!1},t.prototype.minKey=function(){return null},t.prototype.maxKey=function(){return null},t.prototype.check_=function(){return 0},t.prototype.isRed_=function(){return!1},t}(),pe=function(){function n(t,e){void 0===e&&(e=n.EMPTY_NODE),this.comparator_=t,this.root_=e}return n.prototype.insert=function(t,e){return new n(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,le.BLACK,null,null))},n.prototype.remove=function(t){return new n(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,le.BLACK,null,null))},n.prototype.get=function(t){for(var e,n=this.root_;!n.isEmpty();){if(0===(e=this.comparator_(t,n.key)))return n.value;e<0?n=n.left:0<e&&(n=n.right)}return null},n.prototype.getPredecessorKey=function(t){for(var e,n=this.root_,r=null;!n.isEmpty();){if(0===(e=this.comparator_(t,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}e<0?n=n.left:0<e&&(n=(r=n).right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},n.prototype.isEmpty=function(){return this.root_.isEmpty()},n.prototype.count=function(){return this.root_.count()},n.prototype.minKey=function(){return this.root_.minKey()},n.prototype.maxKey=function(){return this.root_.maxKey()},n.prototype.inorderTraversal=function(t){return this.root_.inorderTraversal(t)},n.prototype.reverseTraversal=function(t){return this.root_.reverseTraversal(t)},n.prototype.getIterator=function(t){return new ue(this.root_,null,this.comparator_,!1,t)},n.prototype.getIteratorFrom=function(t,e){return new ue(this.root_,t,this.comparator_,!1,e)},n.prototype.getReverseIteratorFrom=function(t,e){return new ue(this.root_,t,this.comparator_,!0,e)},n.prototype.getReverseIterator=function(t){return new ue(this.root_,null,this.comparator_,!0,t)},n.EMPTY_NODE=new ce,n}(),de=Math.log(2),fe=function(){function t(t){var e;this.count=(e=t+1,parseInt(Math.log(e)/de,10)),this.current_=this.count-1;var n,r=(n=this.count,parseInt(Array(n+1).join("1"),2));this.bits_=t+1&r}return t.prototype.nextBitIsOne=function(){var t=!(this.bits_&1<<this.current_);return this.current_--,t},t}(),_e=function(u,t,l,e){u.sort(t);var c=function(t,e){var n,r,i=e-t;if(0==i)return null;if(1==i)return n=u[t],r=l?l(n):n,new le(r,n.node,le.BLACK,null,null);var o=parseInt(i/2,10)+t,s=c(t,o),a=c(o+1,e);return n=u[o],r=l?l(n):n,new le(r,n.node,le.BLACK,s,a)},n=function(t){for(var e=null,n=null,a=u.length,r=function(t,e){var n=a-t,r=a;a-=t;var i=c(n+1,r),o=u[n],s=l?l(o):o;h(new le(s,o.node,e,null,i))},h=function(t){e=e?e.left=t:n=t},i=0;i<t.count;++i){var o=t.nextBitIsOne(),s=Math.pow(2,t.count-(i+1));o?r(s,le.BLACK):(r(s,le.BLACK),r(s,le.RED))}return n}(new fe(u.length));return new pe(e||t,n)},ye={},ve=function(){function c(t,e){this.indexes_=t,this.indexSet_=e}return Object.defineProperty(c,"Default",{get:function(){return C(he,"ChildrenNode.ts has not been loaded"),se=se||new c({".priority":ye},{".priority":he})},enumerable:!0,configurable:!0}),c.prototype.get=function(t){var e=w(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e===ye?null:e},c.prototype.hasIndex=function(t){return E(this.indexSet_,t.toString())},c.prototype.addIndex=function(t,e){C(t!==Zt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var n,r=[],i=!1,o=e.getIterator(Xt.Wrap),s=o.getNext();s;)i=i||t.isDefinedOn(s.node),r.push(s),s=o.getNext();n=i?_e(r,t.getCompare()):ye;var a=t.toString(),h=S(this.indexSet_);h[a]=t;var u=S(this.indexes_);return u[a]=n,new c(u,h)},c.prototype.addToIndexes=function(h,u){var l=this;return new c(N(this.indexes_,function(t,e){var n=w(l.indexSet_,e);if(C(n,"Missing index implementation for "+e),t===ye){if(n.isDefinedOn(h.node)){for(var r=[],i=u.getIterator(Xt.Wrap),o=i.getNext();o;)o.name!=h.name&&r.push(o),o=i.getNext();return r.push(h),_e(r,n.getCompare())}return ye}var s=u.get(h.name),a=t;return s&&(a=a.remove(new Xt(h.name,s))),a.insert(h,h.node)}),this.indexSet_)},c.prototype.removeFromIndexes=function(n,r){return new c(N(this.indexes_,function(t){if(t===ye)return t;var e=r.get(n.name);return e?t.remove(new Xt(n.name,e)):t}),this.indexSet_)},c}();function ge(t,e){return ht(t.name,e.name)}function me(t,e){return ht(t,e)}var Ce=function(){function a(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ie(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(a,"EMPTY_NODE",{get:function(){return ae||(ae=new a(new pe(me),null,ve.Default))},enumerable:!0,configurable:!0}),a.prototype.isLeafNode=function(){return!1},a.prototype.getPriority=function(){return this.priorityNode_||ae},a.prototype.updatePriority=function(t){return this.children_.isEmpty()?this:new a(this.children_,t,this.indexMap_)},a.prototype.getImmediateChild=function(t){if(".priority"===t)return this.getPriority();var e=this.children_.get(t);return null===e?ae:e},a.prototype.getChild=function(t){var e=t.getFront();return null===e?this:this.getImmediateChild(e).getChild(t.popFront())},a.prototype.hasChild=function(t){return null!==this.children_.get(t)},a.prototype.updateImmediateChild=function(t,e){if(C(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);var n=new Xt(t,e),r=void 0,i=void 0;return i=e.isEmpty()?(r=this.children_.remove(t),this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(t,e),this.indexMap_.addToIndexes(n,this.children_)),new a(r,r.isEmpty()?ae:this.priorityNode_,i)},a.prototype.updateChild=function(t,e){var n=t.getFront();if(null===n)return e;C(".priority"!==t.getFront()||1===t.getLength(),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(t.popFront(),e);return this.updateImmediateChild(n,r)},a.prototype.isEmpty=function(){return this.children_.isEmpty()},a.prototype.numChildren=function(){return this.children_.count()},a.prototype.val=function(n){if(this.isEmpty())return null;var r={},i=0,o=0,s=!0;if(this.forEachChild(he,function(t,e){r[t]=e.val(n),i++,s&&a.INTEGER_REGEXP_.test(t)?o=Math.max(o,Number(t)):s=!1}),!n&&s&&o<2*i){var t=[];for(var e in r)t[e]=r[e];return t}return n&&!this.getPriority().isEmpty()&&(r[".priority"]=this.getPriority().val()),r},a.prototype.hash=function(){if(null===this.lazyHash_){var r="";this.getPriority().isEmpty()||(r+="priority:"+re(this.getPriority().val())+":"),this.forEachChild(he,function(t,e){var n=e.hash();""!==n&&(r+=":"+t+":"+n)}),this.lazyHash_=""===r?"":G(r)}return this.lazyHash_},a.prototype.getPredecessorChildName=function(t,e,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Xt(t,e));return i?i.name:null}return this.children_.getPredecessorKey(t)},a.prototype.getFirstChildName=function(t){var e=this.resolveIndex_(t);if(e){var n=e.minKey();return n&&n.name}return this.children_.minKey()},a.prototype.getFirstChild=function(t){var e=this.getFirstChildName(t);return e?new Xt(e,this.children_.get(e)):null},a.prototype.getLastChildName=function(t){var e=this.resolveIndex_(t);if(e){var n=e.maxKey();return n&&n.name}return this.children_.maxKey()},a.prototype.getLastChild=function(t){var e=this.getLastChildName(t);return e?new Xt(e,this.children_.get(e)):null},a.prototype.forEachChild=function(t,e){var n=this.resolveIndex_(t);return n?n.inorderTraversal(function(t){return e(t.name,t.node)}):this.children_.inorderTraversal(e)},a.prototype.getIterator=function(t){return this.getIteratorFrom(t.minPost(),t)},a.prototype.getIteratorFrom=function(t,e){var n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,function(t){return t});for(var r=this.children_.getIteratorFrom(t.name,Xt.Wrap),i=r.peek();null!=i&&e.compare(i,t)<0;)r.getNext(),i=r.peek();return r},a.prototype.getReverseIterator=function(t){return this.getReverseIteratorFrom(t.maxPost(),t)},a.prototype.getReverseIteratorFrom=function(t,e){var n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,function(t){return t});for(var r=this.children_.getReverseIteratorFrom(t.name,Xt.Wrap),i=r.peek();null!=i&&0<e.compare(i,t);)r.getNext(),i=r.peek();return r},a.prototype.compareTo=function(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Ee?-1:0},a.prototype.withIndex=function(t){if(t===Zt||this.indexMap_.hasIndex(t))return this;var e=this.indexMap_.addIndex(t,this.children_);return new a(this.children_,this.priorityNode_,e)},a.prototype.isIndexed=function(t){return t===Zt||this.indexMap_.hasIndex(t)},a.prototype.equals=function(t){if(t===this)return!0;if(t.isLeafNode())return!1;var e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()!==e.children_.count())return!1;for(var n=this.getIterator(he),r=e.getIterator(he),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1},a.prototype.resolveIndex_=function(t){return t===Zt?null:this.indexMap_.get(t.toString())},a.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,a}(),Ee=new(function(t){function e(){return t.call(this,new pe(me),Ce.EMPTY_NODE,ve.Default)||this}return s(e,t),e.prototype.compareTo=function(t){return t===this?0:1},e.prototype.equals=function(t){return t===this},e.prototype.getPriority=function(){return this},e.prototype.getImmediateChild=function(t){return Ce.EMPTY_NODE},e.prototype.isEmpty=function(){return!1},e}(Ce));Object.defineProperties(Xt,{MIN:{value:new Xt(st,Ce.EMPTY_NODE)},MAX:{value:new Xt(at,Ee)}}),Jt.__EMPTY_NODE=Ce.EMPTY_NODE,oe.__childrenNodeConstructor=Ce,Pt=Ee,ne=Ee;var we=!0;function be(t,e){if(void 0===e&&(e=null),null===t)return Ce.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(e=t[".priority"]),C(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t)return new oe(t,be(e));if(t instanceof Array||!we){var r=Ce.EMPTY_NODE,i=t;return b(i,function(t,e){if(E(i,t)&&"."!==t.substring(0,1)){var n=be(e);!n.isLeafNode()&&n.isEmpty()||(r=r.updateImmediateChild(t,n))}}),r.updatePriority(be(e))}var o=[],s=!1,a=t;if(b(a,function(t,e){if("string"!=typeof t||"."!==t.substring(0,1)){var n=be(a[t]);n.isEmpty()||(s=s||!n.getPriority().isEmpty(),o.push(new Xt(t,n)))}}),0==o.length)return Ce.EMPTY_NODE;var n=_e(o,ge,function(t){return t.name},me);if(s){var h=_e(o,he.getCompare());return new Ce(n,be(e),new ve({".priority":h},{".priority":he}))}return new Ce(n,be(e),ve.Default)}ee=be;var Se,Te,Ie,Ne=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.compare=function(t,e){var n=t.node.compareTo(e.node);return 0===n?ht(t.name,e.name):n},e.prototype.isDefinedOn=function(t){return!0},e.prototype.indexedValueChanged=function(t,e){return!t.equals(e)},e.prototype.minPost=function(){return Xt.MIN},e.prototype.maxPost=function(){return Xt.MAX},e.prototype.makePost=function(t,e){var n=be(t);return new Xt(e,n)},e.prototype.toString=function(){return".value"},e}($t)),Re=function(n){function t(t){var e=n.call(this)||this;return e.indexPath_=t,C(!t.isEmpty()&&".priority"!==t.getFront(),"Can't create PathIndex with empty path or .priority key"),e}return s(t,n),t.prototype.extractChild=function(t){return t.getChild(this.indexPath_)},t.prototype.isDefinedOn=function(t){return!t.getChild(this.indexPath_).isEmpty()},t.prototype.compare=function(t,e){var n=this.extractChild(t.node),r=this.extractChild(e.node),i=n.compareTo(r);return 0===i?ht(t.name,e.name):i},t.prototype.makePost=function(t,e){var n=be(t),r=Ce.EMPTY_NODE.updateChild(this.indexPath_,n);return new Xt(e,r)},t.prototype.maxPost=function(){var t=Ce.EMPTY_NODE.updateChild(this.indexPath_,Ee);return new Xt(at,t)},t.prototype.toString=function(){return this.indexPath_.slice().join("/")},t}($t),Pe=function(){function i(t,e,n){this.node_=t,this.ref_=e,this.index_=n}return i.prototype.val=function(){return O("DataSnapshot.val",0,0,arguments.length),this.node_.val()},i.prototype.exportVal=function(){return O("DataSnapshot.exportVal",0,0,arguments.length),this.node_.val(!0)},i.prototype.toJSON=function(){return O("DataSnapshot.toJSON",0,1,arguments.length),this.exportVal()},i.prototype.exists=function(){return O("DataSnapshot.exists",0,0,arguments.length),!this.node_.isEmpty()},i.prototype.child=function(t){O("DataSnapshot.child",0,1,arguments.length),t=String(t),Bt("DataSnapshot.child",1,t,!1);var e=new mt(t),n=this.ref_.child(e);return new i(this.node_.getChild(e),n,he)},i.prototype.hasChild=function(t){O("DataSnapshot.hasChild",1,1,arguments.length),Bt("DataSnapshot.hasChild",1,t,!1);var e=new mt(t);return!this.node_.getChild(e).isEmpty()},i.prototype.getPriority=function(){return O("DataSnapshot.getPriority",0,0,arguments.length),this.node_.getPriority().val()},i.prototype.forEach=function(n){var r=this;return O("DataSnapshot.forEach",1,1,arguments.length),x("DataSnapshot.forEach",1,n,!1),!this.node_.isLeafNode()&&!!this.node_.forEachChild(this.index_,function(t,e){return n(new i(e,r.ref_.child(t),he))})},i.prototype.hasChildren=function(){return O("DataSnapshot.hasChildren",0,0,arguments.length),!this.node_.isLeafNode()&&!this.node_.isEmpty()},Object.defineProperty(i.prototype,"key",{get:function(){return this.ref_.getKey()},enumerable:!0,configurable:!0}),i.prototype.numChildren=function(){return O("DataSnapshot.numChildren",0,0,arguments.length),this.node_.numChildren()},i.prototype.getRef=function(){return O("DataSnapshot.ref",0,0,arguments.length),this.ref_},Object.defineProperty(i.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),i}(),De=function(){function t(t,e,n,r){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=r}return t.prototype.getPath=function(){var t=this.snapshot.getRef();return"value"===this.eventType?t.path:t.getParent().path},t.prototype.getEventType=function(){return this.eventType},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+g(this.snapshot.exportVal())},t}(),Oe=function(){function t(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}return t.prototype.getPath=function(){return this.path},t.prototype.getEventType=function(){return"cancel"},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.path.toString()+":cancel"},t}(),ke=function(){function e(t,e,n){this.callback_=t,this.cancelCallback_=e,this.context_=n}return e.prototype.respondsTo=function(t){return"value"===t},e.prototype.createEvent=function(t,e){var n=e.getQueryParams().getIndex();return new De("value",this,new Pe(t.snapshotNode,e.getRef(),n))},e.prototype.getEventRunner=function(t){var e=this.context_;if("cancel"===t.getEventType()){C(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback");var n=this.cancelCallback_;return function(){n.call(e,t.error)}}var r=this.callback_;return function(){r.call(e,t.snapshot)}},e.prototype.createCancelEvent=function(t,e){return this.cancelCallback_?new Oe(this,t,e):null},e.prototype.matches=function(t){return t instanceof e&&(!t.callback_||!this.callback_||t.callback_===this.callback_&&t.context_===this.context_)},e.prototype.hasAnyCallback=function(){return null!==this.callback_},e}(),xe=function(){function i(t,e,n){this.callbacks_=t,this.cancelCallback_=e,this.context_=n}return i.prototype.respondsTo=function(t){var e="children_added"===t?"child_added":t;return e="children_removed"===e?"child_removed":e,E(this.callbacks_,e)},i.prototype.createCancelEvent=function(t,e){return this.cancelCallback_?new Oe(this,t,e):null},i.prototype.createEvent=function(t,e){C(null!=t.childName,"Child events should have a childName.");var n=e.getRef().child(t.childName),r=e.getQueryParams().getIndex();return new De(t.type,this,new Pe(t.snapshotNode,n,r),t.prevName)},i.prototype.getEventRunner=function(t){var e=this.context_;if("cancel"===t.getEventType()){C(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback");var n=this.cancelCallback_;return function(){n.call(e,t.error)}}var r=this.callbacks_[t.eventType];return function(){r.call(e,t.snapshot,t.prevName)}},i.prototype.matches=function(n){if(n instanceof i){if(!this.callbacks_||!n.callbacks_)return!0;if(this.context_===n.context_){var t=I(n.callbacks_);if(t===I(this.callbacks_)){if(1!==t)return function(t,e){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&!e(n,t[n]))return!1;return!0}(this.callbacks_,function(t,e){return n.callbacks_[t]===e});var e=P(n.callbacks_),r=P(this.callbacks_);return!(r!==e||n.callbacks_[e]&&this.callbacks_[r]&&n.callbacks_[e]!==this.callbacks_[r])}}}return!1},i.prototype.hasAnyCallback=function(){return null!==this.callbacks_},i}(),Fe=function(){function u(t,e,n,r){this.repo=t,this.path=e,this.queryParams_=n,this.orderByCalled_=r}return Object.defineProperty(u,"__referenceConstructor",{get:function(){return C(Se,"Reference.ts has not been loaded"),Se},set:function(t){Se=t},enumerable:!0,configurable:!0}),u.validateQueryEndpoints_=function(t){var e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Zt){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!=st)throw new Error(r);if("string"!=typeof e)throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!=at)throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(t.getIndex()===he){if(null!=e&&!Mt(e)||null!=n&&!Mt(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(C(t.getIndex()instanceof Re||t.getIndex()===Ne,"unknown index type."),null!=e&&"object"==typeof e||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")},u.validateLimit_=function(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")},u.prototype.validateNoPreviousOrderByCall_=function(t){if(!0===this.orderByCalled_)throw new Error(t+": You can't combine multiple orderBy calls.")},u.prototype.getQueryParams=function(){return this.queryParams_},u.prototype.getRef=function(){return O("Query.ref",0,0,arguments.length),new u.__referenceConstructor(this.repo,this.path)},u.prototype.on=function(t,e,n,r){O("Query.on",2,4,arguments.length),Vt("Query.on",1,t,!1),x("Query.on",2,e,!1);var i=u.getCancelAndContextArgs_("Query.on",n,r);if("value"===t)this.onValueEvent(e,i.cancel,i.context);else{var o={};o[t]=e,this.onChildEvent(o,i.cancel,i.context)}return e},u.prototype.onValueEvent=function(t,e,n){var r=new ke(t,e||null,n||null);this.repo.addEventCallbackForQuery(this,r)},u.prototype.onChildEvent=function(t,e,n){var r=new xe(t,e,n);this.repo.addEventCallbackForQuery(this,r)},u.prototype.off=function(t,e,n){O("Query.off",0,3,arguments.length),Vt("Query.off",1,t,!0),x("Query.off",2,e,!0),F("Query.off",3,n,!0);var r=null,i=null;"value"===t?r=new ke(e||null,null,n||null):t&&(e&&((i={})[t]=e),r=new xe(i,null,n||null));this.repo.removeEventCallbackForQuery(this,r)},u.prototype.once=function(e,n,t,r){var i=this;O("Query.once",1,4,arguments.length),Vt("Query.once",1,e,!1),x("Query.once",2,n,!0);var o=u.getCancelAndContextArgs_("Query.once",t,r),s=!0,a=new l;a.promise.catch(function(){});var h=function(t){s&&(s=!1,i.off(e,h),n&&n.bind(o.context)(t),a.resolve(t))};return this.on(e,h,function(t){i.off(e,h),o.cancel&&o.cancel.bind(o.context)(t),a.reject(t)}),a.promise},u.prototype.limitToFirst=function(t){if(O("Query.limitToFirst",1,1,arguments.length),"number"!=typeof t||Math.floor(t)!==t||t<=0)throw new Error("Query.limitToFirst: First argument must be a positive integer.");if(this.queryParams_.hasLimit())throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new u(this.repo,this.path,this.queryParams_.limitToFirst(t),this.orderByCalled_)},u.prototype.limitToLast=function(t){if(O("Query.limitToLast",1,1,arguments.length),"number"!=typeof t||Math.floor(t)!==t||t<=0)throw new Error("Query.limitToLast: First argument must be a positive integer.");if(this.queryParams_.hasLimit())throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new u(this.repo,this.path,this.queryParams_.limitToLast(t),this.orderByCalled_)},u.prototype.orderByChild=function(t){if(O("Query.orderByChild",1,1,arguments.length),"$key"===t)throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===t)throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===t)throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Bt("Query.orderByChild",1,t,!1),this.validateNoPreviousOrderByCall_("Query.orderByChild");var e=new mt(t);if(e.isEmpty())throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");var n=new Re(e),r=this.queryParams_.orderBy(n);return u.validateQueryEndpoints_(r),new u(this.repo,this.path,r,!0)},u.prototype.orderByKey=function(){O("Query.orderByKey",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByKey");var t=this.queryParams_.orderBy(Zt);return u.validateQueryEndpoints_(t),new u(this.repo,this.path,t,!0)},u.prototype.orderByPriority=function(){O("Query.orderByPriority",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByPriority");var t=this.queryParams_.orderBy(he);return u.validateQueryEndpoints_(t),new u(this.repo,this.path,t,!0)},u.prototype.orderByValue=function(){O("Query.orderByValue",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByValue");var t=this.queryParams_.orderBy(Ne);return u.validateQueryEndpoints_(t),new u(this.repo,this.path,t,!0)},u.prototype.startAt=function(t,e){void 0===t&&(t=null),O("Query.startAt",0,2,arguments.length),Wt("Query.startAt",1,t,this.path,!0),Ht("Query.startAt",2,e,!0);var n=this.queryParams_.startAt(t,e);if(u.validateLimit_(n),u.validateQueryEndpoints_(n),this.queryParams_.hasStart())throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");return void 0===t&&(e=t=null),new u(this.repo,this.path,n,this.orderByCalled_)},u.prototype.endAt=function(t,e){void 0===t&&(t=null),O("Query.endAt",0,2,arguments.length),Wt("Query.endAt",1,t,this.path,!0),Ht("Query.endAt",2,e,!0);var n=this.queryParams_.endAt(t,e);if(u.validateLimit_(n),u.validateQueryEndpoints_(n),this.queryParams_.hasEnd())throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new u(this.repo,this.path,n,this.orderByCalled_)},u.prototype.equalTo=function(t,e){if(O("Query.equalTo",1,2,arguments.length),Wt("Query.equalTo",1,t,this.path,!1),Ht("Query.equalTo",2,e,!0),this.queryParams_.hasStart())throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");if(this.queryParams_.hasEnd())throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.startAt(t,e).endAt(t,e)},u.prototype.toString=function(){return O("Query.toString",0,0,arguments.length),this.repo.toString()+this.path.toUrlEncodedString()},u.prototype.toJSON=function(){return O("Query.toJSON",0,1,arguments.length),this.toString()},u.prototype.queryObject=function(){return this.queryParams_.getQueryObject()},u.prototype.queryIdentifier=function(){var t=this.queryObject(),e=ct(t);return"{}"===e?"default":e},u.prototype.isEqual=function(t){if(O("Query.isEqual",1,1,arguments.length),!(t instanceof u)){throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")}var e=this.repo===t.repo,n=this.path.equals(t.path),r=this.queryIdentifier()===t.queryIdentifier();return e&&n&&r},u.getCancelAndContextArgs_=function(t,e,n){var r={cancel:null,context:null};if(e&&n)r.cancel=e,x(t,3,r.cancel,!0),r.context=n,F(t,4,r.context,!0);else if(e)if("object"==typeof e&&null!==e)r.context=e;else{if("function"!=typeof e)throw new Error(k(t,3,!0)+" must either be a cancel callback or a context object.");r.cancel=e}return r},Object.defineProperty(u.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),u}(),Ae=function(){function t(){this.set={}}return t.prototype.add=function(t,e){this.set[t]=null===e||e},t.prototype.contains=function(t){return E(this.set,t)},t.prototype.get=function(t){return this.contains(t)?this.set[t]:void 0},t.prototype.remove=function(t){delete this.set[t]},t.prototype.clear=function(){this.set={}},t.prototype.isEmpty=function(){return T(this.set)},t.prototype.count=function(){return I(this.set)},t.prototype.each=function(n){b(this.set,function(t,e){return n(t,e)})},t.prototype.keys=function(){var e=[];return b(this.set,function(t){e.push(t)}),e},t}(),Le=function(){function i(){this.value_=null,this.children_=null}return i.prototype.find=function(t){if(null!=this.value_)return this.value_.getChild(t);if(t.isEmpty()||null==this.children_)return null;var e=t.getFront();return t=t.popFront(),this.children_.contains(e)?this.children_.get(e).find(t):null},i.prototype.remember=function(t,e){if(t.isEmpty())this.value_=e,this.children_=null;else if(null!==this.value_)this.value_=this.value_.updateChild(t,e);else{null==this.children_&&(this.children_=new Ae);var n=t.getFront();this.children_.contains(n)||this.children_.add(n,new i);var r=this.children_.get(n);t=t.popFront(),r.remember(t,e)}},i.prototype.forget=function(t){if(t.isEmpty())return this.value_=null,!(this.children_=null);if(null!==this.value_){if(this.value_.isLeafNode())return!1;var e=this.value_;this.value_=null;var n=this;return e.forEachChild(he,function(t,e){n.remember(new mt(t),e)}),this.forget(t)}if(null===this.children_)return!0;var r=t.getFront();return t=t.popFront(),this.children_.contains(r)&&this.children_.get(r).forget(t)&&this.children_.remove(r),!!this.children_.isEmpty()&&!(this.children_=null)},i.prototype.forEachTree=function(r,i){null!==this.value_?i(r,this.value_):this.forEachChild(function(t,e){var n=new mt(r.toString()+"/"+t);e.forEachTree(n,i)})},i.prototype.forEachChild=function(n){null!==this.children_&&this.children_.each(function(t,e){n(t,e)})},i}(),Me=function(t,e){return t&&"object"==typeof t?(C(".sv"in t,"Unexpected leaf node or priority contents"),e[t[".sv"]]):t},We=function(t,r){var i,e=t.getPriority().val(),n=Me(e,r);if(t.isLeafNode()){var o=t,s=Me(o.getValue(),r);return s!==o.getValue()||n!==o.getPriority().val()?new oe(s,be(n)):t}var a=t;return n!==(i=a).getPriority().val()&&(i=i.updatePriority(new oe(n))),a.forEachChild(he,function(t,e){var n=We(e,r);n!==e&&(i=i.updateImmediateChild(t,n))}),i};(Ie=Te||(Te={}))[Ie.OVERWRITE=0]="OVERWRITE",Ie[Ie.MERGE=1]="MERGE",Ie[Ie.ACK_USER_WRITE=2]="ACK_USER_WRITE",Ie[Ie.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var qe,Qe,Ue=function(){function e(t,e,n,r){this.fromUser=t,this.fromServer=e,this.queryId=n,this.tagged=r,C(!r||e,"Tagged queries must be from server.")}return e.User=new e(!0,!1,null,!1),e.Server=new e(!1,!0,null,!1),e.forServerTaggedQuery=function(t){return new e(!1,!0,t,!0)},e}(),Ve=function(){function n(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Te.ACK_USER_WRITE,this.source=Ue.User}return n.prototype.operationForChild=function(t){if(this.path.isEmpty()){if(null!=this.affectedTree.value)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var e=this.affectedTree.subtree(new mt(t));return new n(mt.Empty,e,this.revert)}return C(this.path.getFront()===t,"operationForChild called for unrelated child."),new n(this.path.popFront(),this.affectedTree,this.revert)},n}(),He=function(){function o(t,e){void 0===e&&(qe||(qe=new pe(ut)),e=qe),this.value=t,this.children=e}return o.fromObject=function(t){var n=o.Empty;return b(t,function(t,e){n=n.set(new mt(t),e)}),n},o.prototype.isEmpty=function(){return null===this.value&&this.children.isEmpty()},o.prototype.findRootMostMatchingPathAndValue=function(t,e){if(null!=this.value&&e(this.value))return{path:mt.Empty,value:this.value};if(t.isEmpty())return null;var n=t.getFront(),r=this.children.get(n);if(null===r)return null;var i=r.findRootMostMatchingPathAndValue(t.popFront(),e);return null==i?null:{path:new mt(n).child(i.path),value:i.value}},o.prototype.findRootMostValueAndPath=function(t){return this.findRootMostMatchingPathAndValue(t,function(){return!0})},o.prototype.subtree=function(t){if(t.isEmpty())return this;var e=t.getFront(),n=this.children.get(e);return null!==n?n.subtree(t.popFront()):o.Empty},o.prototype.set=function(t,e){if(t.isEmpty())return new o(e,this.children);var n=t.getFront(),r=(this.children.get(n)||o.Empty).set(t.popFront(),e),i=this.children.insert(n,r);return new o(this.value,i)},o.prototype.remove=function(t){if(t.isEmpty())return this.children.isEmpty()?o.Empty:new o(null,this.children);var e=t.getFront(),n=this.children.get(e);if(n){var r=n.remove(t.popFront()),i=void 0;return i=r.isEmpty()?this.children.remove(e):this.children.insert(e,r),null===this.value&&i.isEmpty()?o.Empty:new o(this.value,i)}return this},o.prototype.get=function(t){if(t.isEmpty())return this.value;var e=t.getFront(),n=this.children.get(e);return n?n.get(t.popFront()):null},o.prototype.setTree=function(t,e){if(t.isEmpty())return e;var n=t.getFront(),r=(this.children.get(n)||o.Empty).setTree(t.popFront(),e),i=void 0;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new o(this.value,i)},o.prototype.fold=function(t){return this.fold_(mt.Empty,t)},o.prototype.fold_=function(n,r){var i={};return this.children.inorderTraversal(function(t,e){i[t]=e.fold_(n.child(t),r)}),r(n,this.value,i)},o.prototype.findOnPath=function(t,e){return this.findOnPath_(t,mt.Empty,e)},o.prototype.findOnPath_=function(t,e,n){var r=!!this.value&&n(e,this.value);if(r)return r;if(t.isEmpty())return null;var i=t.getFront(),o=this.children.get(i);return o?o.findOnPath_(t.popFront(),e.child(i),n):null},o.prototype.foreachOnPath=function(t,e){return this.foreachOnPath_(t,mt.Empty,e)},o.prototype.foreachOnPath_=function(t,e,n){if(t.isEmpty())return this;this.value&&n(e,this.value);var r=t.getFront(),i=this.children.get(r);return i?i.foreachOnPath_(t.popFront(),e.child(r),n):o.Empty},o.prototype.foreach=function(t){this.foreach_(mt.Empty,t)},o.prototype.foreach_=function(n,r){this.children.inorderTraversal(function(t,e){e.foreach_(n.child(t),r)}),this.value&&r(n,this.value)},o.prototype.foreachChild=function(n){this.children.inorderTraversal(function(t,e){e.value&&n(t,e.value)})},o.Empty=new o(null),o}(),Be=function(){function e(t,e){this.source=t,this.path=e,this.type=Te.LISTEN_COMPLETE}return e.prototype.operationForChild=function(t){return this.path.isEmpty()?new e(this.source,mt.Empty):new e(this.source,this.path.popFront())},e}(),je=function(){function e(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Te.OVERWRITE}return e.prototype.operationForChild=function(t){return this.path.isEmpty()?new e(this.source,mt.Empty,this.snap.getImmediateChild(t)):new e(this.source,this.path.popFront(),this.snap)},e}(),Ke=function(){function n(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Te.MERGE}return n.prototype.operationForChild=function(t){if(this.path.isEmpty()){var e=this.children.subtree(new mt(t));return e.isEmpty()?null:e.value?new je(this.source,mt.Empty,e.value):new n(this.source,mt.Empty,e)}return C(this.path.getFront()===t,"Can't get a merge for a child not on the path of the operation"),new n(this.source,this.path.popFront(),this.children)},n.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},n}(),Ye=function(){function t(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}return t.prototype.isFullyInitialized=function(){return this.fullyInitialized_},t.prototype.isFiltered=function(){return this.filtered_},t.prototype.isCompleteForPath=function(t){if(t.isEmpty())return this.isFullyInitialized()&&!this.filtered_;var e=t.getFront();return this.isCompleteForChild(e)},t.prototype.isCompleteForChild=function(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)},t.prototype.getNode=function(){return this.node_},t}(),ze=function(){function r(t,e){this.eventCache_=t,this.serverCache_=e}return r.prototype.updateEventSnap=function(t,e,n){return new r(new Ye(t,e,n),this.serverCache_)},r.prototype.updateServerSnap=function(t,e,n){return new r(this.eventCache_,new Ye(t,e,n))},r.prototype.getEventCache=function(){return this.eventCache_},r.prototype.getCompleteEventSnap=function(){return this.eventCache_.isFullyInitialized()?this.eventCache_.getNode():null},r.prototype.getServerCache=function(){return this.serverCache_},r.prototype.getCompleteServerSnap=function(){return this.serverCache_.isFullyInitialized()?this.serverCache_.getNode():null},r.Empty=new r(new Ye(Ce.EMPTY_NODE,!1,!1),new Ye(Ce.EMPTY_NODE,!1,!1)),r}(),Ge=function(){function r(t,e,n,r,i){this.type=t,this.snapshotNode=e,this.childName=n,this.oldSnap=r,this.prevName=i}return r.valueChange=function(t){return new r(r.VALUE,t)},r.childAddedChange=function(t,e){return new r(r.CHILD_ADDED,e,t)},r.childRemovedChange=function(t,e){return new r(r.CHILD_REMOVED,e,t)},r.childChangedChange=function(t,e,n){return new r(r.CHILD_CHANGED,e,t,n)},r.childMovedChange=function(t,e){return new r(r.CHILD_MOVED,e,t)},r.CHILD_ADDED="child_added",r.CHILD_REMOVED="child_removed",r.CHILD_CHANGED="child_changed",r.CHILD_MOVED="child_moved",r.VALUE="value",r}(),Xe=function(){function t(t){this.index_=t}return t.prototype.updateChild=function(t,e,n,r,i,o){C(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");var s=t.getImmediateChild(e);return s.getChild(r).equals(n.getChild(r))&&s.isEmpty()==n.isEmpty()?t:(null!=o&&(n.isEmpty()?t.hasChild(e)?o.trackChildChange(Ge.childRemovedChange(e,s)):C(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?o.trackChildChange(Ge.childAddedChange(e,n)):o.trackChildChange(Ge.childChangedChange(e,n,s))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))},t.prototype.updateFullNode=function(r,n,i){return null!=i&&(r.isLeafNode()||r.forEachChild(he,function(t,e){n.hasChild(t)||i.trackChildChange(Ge.childRemovedChange(t,e))}),n.isLeafNode()||n.forEachChild(he,function(t,e){if(r.hasChild(t)){var n=r.getImmediateChild(t);n.equals(e)||i.trackChildChange(Ge.childChangedChange(t,e,n))}else i.trackChildChange(Ge.childAddedChange(t,e))})),n.withIndex(this.index_)},t.prototype.updatePriority=function(t,e){return t.isEmpty()?Ce.EMPTY_NODE:t.updatePriority(e)},t.prototype.filtersNodes=function(){return!1},t.prototype.getIndexedFilter=function(){return this},t.prototype.getIndex=function(){return this.index_},t}(),$e=function(){function t(){this.changeMap_={}}return t.prototype.trackChildChange=function(t){var e=t.type,n=t.childName;C(e==Ge.CHILD_ADDED||e==Ge.CHILD_CHANGED||e==Ge.CHILD_REMOVED,"Only child changes supported for tracking"),C(".priority"!==n,"Only non-priority child changes can be tracked.");var r=w(this.changeMap_,n);if(r){var i=r.type;if(e==Ge.CHILD_ADDED&&i==Ge.CHILD_REMOVED)this.changeMap_[n]=Ge.childChangedChange(n,t.snapshotNode,r.snapshotNode);else if(e==Ge.CHILD_REMOVED&&i==Ge.CHILD_ADDED)delete this.changeMap_[n];else if(e==Ge.CHILD_REMOVED&&i==Ge.CHILD_CHANGED)this.changeMap_[n]=Ge.childRemovedChange(n,r.oldSnap);else if(e==Ge.CHILD_CHANGED&&i==Ge.CHILD_ADDED)this.changeMap_[n]=Ge.childAddedChange(n,t.snapshotNode);else{if(e!=Ge.CHILD_CHANGED||i!=Ge.CHILD_CHANGED)throw p("Illegal combination of changes: "+t+" occurred after "+r);this.changeMap_[n]=Ge.childChangedChange(n,t.snapshotNode,r.oldSnap)}}else this.changeMap_[n]=t},t.prototype.getChanges=function(){return function(t){var e=[],n=0;for(var r in t)e[n++]=t[r];return e}(this.changeMap_)},t}(),Je=new(function(){function t(){}return t.prototype.getCompleteChild=function(t){return null},t.prototype.getChildAfterChild=function(t,e,n){return null},t}()),Ze=function(){function t(t,e,n){void 0===n&&(n=null),this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}return t.prototype.getCompleteChild=function(t){var e=this.viewCache_.getEventCache();if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);var n=null!=this.optCompleteServerCache_?new Ye(this.optCompleteServerCache_,!0,!1):this.viewCache_.getServerCache();return this.writes_.calcCompleteChild(t,n)},t.prototype.getChildAfterChild=function(t,e,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:this.viewCache_.getCompleteServerSnap(),i=this.writes_.calcIndexedSlice(r,e,1,n,t);return 0===i.length?null:i[0]},t}(),tn=function(t,e){this.viewCache=t,this.changes=e},en=function(){function c(t){this.filter_=t}return c.prototype.assertIndexed=function(t){C(t.getEventCache().getNode().isIndexed(this.filter_.getIndex()),"Event snap not indexed"),C(t.getServerCache().getNode().isIndexed(this.filter_.getIndex()),"Server snap not indexed")},c.prototype.applyOperation=function(t,e,n,r){var i,o,s=new $e;if(e.type===Te.OVERWRITE){var a=e;i=a.source.fromUser?this.applyUserOverwrite_(t,a.path,a.snap,n,r,s):(C(a.source.fromServer,"Unknown source."),o=a.source.tagged||t.getServerCache().isFiltered()&&!a.path.isEmpty(),this.applyServerOverwrite_(t,a.path,a.snap,n,r,o,s))}else if(e.type===Te.MERGE){var h=e;i=h.source.fromUser?this.applyUserMerge_(t,h.path,h.children,n,r,s):(C(h.source.fromServer,"Unknown source."),o=h.source.tagged||t.getServerCache().isFiltered(),this.applyServerMerge_(t,h.path,h.children,n,r,o,s))}else if(e.type===Te.ACK_USER_WRITE){var u=e;i=u.revert?this.revertUserWrite_(t,u.path,n,r,s):this.ackUserWrite_(t,u.path,u.affectedTree,n,r,s)}else{if(e.type!==Te.LISTEN_COMPLETE)throw p("Unknown operation type: "+e.type);i=this.listenComplete_(t,e.path,n,s)}var l=s.getChanges();return c.maybeAddValueEvent_(t,i,l),new tn(i,l)},c.maybeAddValueEvent_=function(t,e,n){var r=e.getEventCache();if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=t.getCompleteEventSnap();(0<n.length||!t.getEventCache().isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Ge.valueChange(e.getCompleteEventSnap()))}},c.prototype.generateEventCacheAfterServerEvent_=function(t,e,n,r,i){var o=t.getEventCache();if(null!=n.shadowingWrite(e))return t;var s=void 0,a=void 0;if(e.isEmpty())if(C(t.getServerCache().isFullyInitialized(),"If change path is empty, we must have complete server data"),t.getServerCache().isFiltered()){var h=t.getCompleteServerSnap(),u=h instanceof Ce?h:Ce.EMPTY_NODE,l=n.calcCompleteEventChildren(u);s=this.filter_.updateFullNode(t.getEventCache().getNode(),l,i)}else{var c=n.calcCompleteEventCache(t.getCompleteServerSnap());s=this.filter_.updateFullNode(t.getEventCache().getNode(),c,i)}else{var p=e.getFront();if(".priority"==p){C(1==e.getLength(),"Can't have a priority with additional path components");var d=o.getNode();a=t.getServerCache().getNode();var f=n.calcEventCacheAfterServerOverwrite(e,d,a);s=null!=f?this.filter_.updatePriority(d,f):o.getNode()}else{var _=e.popFront(),y=void 0;if(o.isCompleteForChild(p)){a=t.getServerCache().getNode();var v=n.calcEventCacheAfterServerOverwrite(e,o.getNode(),a);y=null!=v?o.getNode().getImmediateChild(p).updateChild(_,v):o.getNode().getImmediateChild(p)}else y=n.calcCompleteChild(p,t.getServerCache());s=null!=y?this.filter_.updateChild(o.getNode(),p,y,_,r,i):o.getNode()}}return t.updateEventSnap(s,o.isFullyInitialized()||e.isEmpty(),this.filter_.filtersNodes())},c.prototype.applyServerOverwrite_=function(t,e,n,r,i,o,s){var a,h=t.getServerCache(),u=o?this.filter_:this.filter_.getIndexedFilter();if(e.isEmpty())a=u.updateFullNode(h.getNode(),n,null);else if(u.filtersNodes()&&!h.isFiltered()){var l=h.getNode().updateChild(e,n);a=u.updateFullNode(h.getNode(),l,null)}else{var c=e.getFront();if(!h.isCompleteForPath(e)&&1<e.getLength())return t;var p=e.popFront(),d=h.getNode().getImmediateChild(c).updateChild(p,n);a=".priority"==c?u.updatePriority(h.getNode(),d):u.updateChild(h.getNode(),c,d,p,Je,null)}var f=t.updateServerSnap(a,h.isFullyInitialized()||e.isEmpty(),u.filtersNodes()),_=new Ze(r,f,i);return this.generateEventCacheAfterServerEvent_(f,e,r,_,s)},c.prototype.applyUserOverwrite_=function(t,e,n,r,i,o){var s,a,h=t.getEventCache(),u=new Ze(r,t,i);if(e.isEmpty())a=this.filter_.updateFullNode(t.getEventCache().getNode(),n,o),s=t.updateEventSnap(a,!0,this.filter_.filtersNodes());else{var l=e.getFront();if(".priority"===l)a=this.filter_.updatePriority(t.getEventCache().getNode(),n),s=t.updateEventSnap(a,h.isFullyInitialized(),h.isFiltered());else{var c=e.popFront(),p=h.getNode().getImmediateChild(l),d=void 0;if(c.isEmpty())d=n;else{var f=u.getCompleteChild(l);d=null!=f?".priority"===c.getBack()&&f.getChild(c.parent()).isEmpty()?f:f.updateChild(c,n):Ce.EMPTY_NODE}if(p.equals(d))s=t;else{var _=this.filter_.updateChild(h.getNode(),l,d,c,u,o);s=t.updateEventSnap(_,h.isFullyInitialized(),this.filter_.filtersNodes())}}}return s},c.cacheHasChild_=function(t,e){return t.getEventCache().isCompleteForChild(e)},c.prototype.applyUserMerge_=function(r,i,t,o,s,a){var h=this,u=r;return t.foreach(function(t,e){var n=i.child(t);c.cacheHasChild_(r,n.getFront())&&(u=h.applyUserOverwrite_(u,n,e,o,s,a))}),t.foreach(function(t,e){var n=i.child(t);c.cacheHasChild_(r,n.getFront())||(u=h.applyUserOverwrite_(u,n,e,o,s,a))}),u},c.prototype.applyMerge_=function(n,t){return t.foreach(function(t,e){n=n.updateChild(t,e)}),n},c.prototype.applyServerMerge_=function(o,t,e,s,a,h,u){var l=this;if(o.getServerCache().getNode().isEmpty()&&!o.getServerCache().isFullyInitialized())return o;var n,c=o;n=t.isEmpty()?e:He.Empty.setTree(t,e);var p=o.getServerCache().getNode();return n.children.inorderTraversal(function(t,e){if(p.hasChild(t)){var n=o.getServerCache().getNode().getImmediateChild(t),r=l.applyMerge_(n,e);c=l.applyServerOverwrite_(c,new mt(t),r,s,a,h,u)}}),n.children.inorderTraversal(function(t,e){var n=!o.getServerCache().isCompleteForChild(t)&&null==e.value;if(!p.hasChild(t)&&!n){var r=o.getServerCache().getNode().getImmediateChild(t),i=l.applyMerge_(r,e);c=l.applyServerOverwrite_(c,new mt(t),i,s,a,h,u)}}),c},c.prototype.ackUserWrite_=function(t,r,e,n,i,o){if(null!=n.shadowingWrite(r))return t;var s=t.getServerCache().isFiltered(),a=t.getServerCache();if(null!=e.value){if(r.isEmpty()&&a.isFullyInitialized()||a.isCompleteForPath(r))return this.applyServerOverwrite_(t,r,a.getNode().getChild(r),n,i,s,o);if(r.isEmpty()){var h=He.Empty;return a.getNode().forEachChild(Zt,function(t,e){h=h.set(new mt(t),e)}),this.applyServerMerge_(t,r,h,n,i,s,o)}return t}var u=He.Empty;return e.foreach(function(t,e){var n=r.child(t);a.isCompleteForPath(n)&&(u=u.set(t,a.getNode().getChild(n)))}),this.applyServerMerge_(t,r,u,n,i,s,o)},c.prototype.listenComplete_=function(t,e,n,r){var i=t.getServerCache(),o=t.updateServerSnap(i.getNode(),i.isFullyInitialized()||e.isEmpty(),i.isFiltered());return this.generateEventCacheAfterServerEvent_(o,e,n,Je,r)},c.prototype.revertUserWrite_=function(t,e,n,r,i){var o;if(null!=n.shadowingWrite(e))return t;var s=new Ze(n,t,r),a=t.getEventCache().getNode(),h=void 0;if(e.isEmpty()||".priority"===e.getFront()){var u=void 0;if(t.getServerCache().isFullyInitialized())u=n.calcCompleteEventCache(t.getCompleteServerSnap());else{var l=t.getServerCache().getNode();C(l instanceof Ce,"serverChildren would be complete if leaf node"),u=n.calcCompleteEventChildren(l)}u=u,h=this.filter_.updateFullNode(a,u,i)}else{var c=e.getFront(),p=n.calcCompleteChild(c,t.getServerCache());null==p&&t.getServerCache().isCompleteForChild(c)&&(p=a.getImmediateChild(c)),(h=null!=p?this.filter_.updateChild(a,c,p,e.popFront(),s,i):t.getEventCache().getNode().hasChild(c)?this.filter_.updateChild(a,c,Ce.EMPTY_NODE,e.popFront(),s,i):a).isEmpty()&&t.getServerCache().isFullyInitialized()&&(o=n.calcCompleteEventCache(t.getCompleteServerSnap())).isLeafNode()&&(h=this.filter_.updateFullNode(h,o,i))}return o=t.getServerCache().isFullyInitialized()||null!=n.shadowingWrite(mt.Empty),t.updateEventSnap(h,o,this.filter_.filtersNodes())},c}(),nn=function(){function t(t){this.query_=t,this.index_=this.query_.getQueryParams().getIndex()}return t.prototype.generateEventsForChanges=function(t,e,n){var r=this,i=[],o=[];return t.forEach(function(t){t.type===Ge.CHILD_CHANGED&&r.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(Ge.childMovedChange(t.childName,t.snapshotNode))}),this.generateEventsForType_(i,Ge.CHILD_REMOVED,t,n,e),this.generateEventsForType_(i,Ge.CHILD_ADDED,t,n,e),this.generateEventsForType_(i,Ge.CHILD_MOVED,o,n,e),this.generateEventsForType_(i,Ge.CHILD_CHANGED,t,n,e),this.generateEventsForType_(i,Ge.VALUE,t,n,e),i},t.prototype.generateEventsForType_=function(r,e,t,i,o){var s=this,n=t.filter(function(t){return t.type===e});n.sort(this.compareChanges_.bind(this)),n.forEach(function(e){var n=s.materializeSingleChange_(e,o);i.forEach(function(t){t.respondsTo(e.type)&&r.push(t.createEvent(n,s.query_))})})},t.prototype.materializeSingleChange_=function(t,e){return"value"===t.type||"child_removed"===t.type||(t.prevName=e.getPredecessorChildName(t.childName,t.snapshotNode,this.index_)),t},t.prototype.compareChanges_=function(t,e){if(null==t.childName||null==e.childName)throw p("Should only compare child_ events.");var n=new Xt(t.childName,t.snapshotNode),r=new Xt(e.childName,e.snapshotNode);return this.index_.compare(n,r)},t}(),rn=function(){function t(t,e){this.query_=t,this.eventRegistrations_=[];var n=this.query_.getQueryParams(),r=new Xe(n.getIndex()),i=n.getNodeFilter();this.processor_=new en(i);var o=e.getServerCache(),s=e.getEventCache(),a=r.updateFullNode(Ce.EMPTY_NODE,o.getNode(),null),h=i.updateFullNode(Ce.EMPTY_NODE,s.getNode(),null),u=new Ye(a,o.isFullyInitialized(),r.filtersNodes()),l=new Ye(h,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=new ze(l,u),this.eventGenerator_=new nn(this.query_)}return t.prototype.getQuery=function(){return this.query_},t.prototype.getServerCache=function(){return this.viewCache_.getServerCache().getNode()},t.prototype.getCompleteServerCache=function(t){var e=this.viewCache_.getCompleteServerSnap();return e&&(this.query_.getQueryParams().loadsAllData()||!t.isEmpty()&&!e.getImmediateChild(t.getFront()).isEmpty())?e.getChild(t):null},t.prototype.isEmpty=function(){return 0===this.eventRegistrations_.length},t.prototype.addEventRegistration=function(t){this.eventRegistrations_.push(t)},t.prototype.removeEventRegistration=function(t,n){var r=[];if(n){C(null==t,"A cancel should cancel all event registrations.");var i=this.query_.path;this.eventRegistrations_.forEach(function(t){n=n;var e=t.createCancelEvent(n,i);e&&r.push(e)})}if(t){for(var e=[],o=0;o<this.eventRegistrations_.length;++o){var s=this.eventRegistrations_[o];if(s.matches(t)){if(t.hasAnyCallback()){e=e.concat(this.eventRegistrations_.slice(o+1));break}}else e.push(s)}this.eventRegistrations_=e}else this.eventRegistrations_=[];return r},t.prototype.applyOperation=function(t,e,n){t.type===Te.MERGE&&null!==t.source.queryId&&(C(this.viewCache_.getCompleteServerSnap(),"We should always have a full cache before handling merges"),C(this.viewCache_.getCompleteEventSnap(),"Missing event cache, even though we have a server cache"));var r=this.viewCache_,i=this.processor_.applyOperation(r,t,e,n);return this.processor_.assertIndexed(i.viewCache),C(i.viewCache.getServerCache().isFullyInitialized()||!r.getServerCache().isFullyInitialized(),"Once a server snap is complete, it should never go back"),this.viewCache_=i.viewCache,this.generateEventsForChanges_(i.changes,i.viewCache.getEventCache().getNode(),null)},t.prototype.getInitialEvents=function(t){var e=this.viewCache_.getEventCache(),n=[];e.getNode().isLeafNode()||e.getNode().forEachChild(he,function(t,e){n.push(Ge.childAddedChange(t,e))});return e.isFullyInitialized()&&n.push(Ge.valueChange(e.getNode())),this.generateEventsForChanges_(n,e.getNode(),t)},t.prototype.generateEventsForChanges_=function(t,e,n){var r=n?[n]:this.eventRegistrations_;return this.eventGenerator_.generateEventsForChanges(t,e,r)},t}(),on=function(){function u(){this.views_={}}return Object.defineProperty(u,"__referenceConstructor",{get:function(){return C(Qe,"Reference.ts has not been loaded"),Qe},set:function(t){C(!Qe,"__referenceConstructor has already been defined"),Qe=t},enumerable:!0,configurable:!0}),u.prototype.isEmpty=function(){return T(this.views_)},u.prototype.applyOperation=function(n,r,i){var t=n.source.queryId;if(null!==t){var e=w(this.views_,t);return C(null!=e,"SyncTree gave us an op for an invalid query."),e.applyOperation(n,r,i)}var o=[];return b(this.views_,function(t,e){o=o.concat(e.applyOperation(n,r,i))}),o},u.prototype.addEventRegistration=function(t,e,n,r,i){var o=t.queryIdentifier(),s=w(this.views_,o);if(!s){var a=n.calcCompleteEventCache(i?r:null),h=!1;h=!!a||(a=r instanceof Ce?n.calcCompleteEventChildren(r):Ce.EMPTY_NODE,!1);var u=new ze(new Ye(a,h,!1),new Ye(r,i,!1));s=new rn(t,u),this.views_[o]=s}return s.addEventRegistration(e),s.getInitialEvents(e)},u.prototype.removeEventRegistration=function(t,n,r){var e=t.queryIdentifier(),i=[],o=[],s=this.hasCompleteView();if("default"===e){var a=this;b(this.views_,function(t,e){o=o.concat(e.removeEventRegistration(n,r)),e.isEmpty()&&(delete a.views_[t],e.getQuery().getQueryParams().loadsAllData()||i.push(e.getQuery()))})}else{var h=w(this.views_,e);h&&(o=o.concat(h.removeEventRegistration(n,r)),h.isEmpty()&&(delete this.views_[e],h.getQuery().getQueryParams().loadsAllData()||i.push(h.getQuery())))}return s&&!this.hasCompleteView()&&i.push(new u.__referenceConstructor(t.repo,t.path)),{removed:i,events:o}},u.prototype.getQueryViews=function(){var e=this;return Object.keys(this.views_).map(function(t){return e.views_[t]}).filter(function(t){return!t.getQuery().getQueryParams().loadsAllData()})},u.prototype.getCompleteServerCache=function(n){var r=null;return b(this.views_,function(t,e){r=r||e.getCompleteServerCache(n)}),r},u.prototype.viewForQuery=function(t){if(t.getQueryParams().loadsAllData())return this.getCompleteView();var e=t.queryIdentifier();return w(this.views_,e)},u.prototype.viewExistsForQuery=function(t){return null!=this.viewForQuery(t)},u.prototype.hasCompleteView=function(){return null!=this.getCompleteView()},u.prototype.getCompleteView=function(){var t,e,n;return(t=this.views_,(n=R(t,function(t){return t.getQuery().getQueryParams().loadsAllData()},e))&&t[n])||null},u}(),sn=function(){function a(t){this.writeTree_=t}return a.prototype.addWrite=function(t,e){if(t.isEmpty())return new a(new He(e));var n=this.writeTree_.findRootMostValueAndPath(t);if(null!=n){var r=n.path,i=n.value,o=mt.relativePath(r,t);return i=i.updateChild(o,e),new a(this.writeTree_.set(r,i))}var s=new He(e);return new a(this.writeTree_.setTree(t,s))},a.prototype.addWrites=function(n,t){var r=this;return b(t,function(t,e){r=r.addWrite(n.child(t),e)}),r},a.prototype.removeWrite=function(t){return t.isEmpty()?a.Empty:new a(this.writeTree_.setTree(t,He.Empty))},a.prototype.hasCompleteWrite=function(t){return null!=this.getCompleteNode(t)},a.prototype.getCompleteNode=function(t){var e=this.writeTree_.findRootMostValueAndPath(t);return null!=e?this.writeTree_.get(e.path).getChild(mt.relativePath(e.path,t)):null},a.prototype.getCompleteChildren=function(){var n=[],t=this.writeTree_.value;return null!=t?t.isLeafNode()||t.forEachChild(he,function(t,e){n.push(new Xt(t,e))}):this.writeTree_.children.inorderTraversal(function(t,e){null!=e.value&&n.push(new Xt(t,e.value))}),n},a.prototype.childCompoundWrite=function(t){if(t.isEmpty())return this;var e=this.getCompleteNode(t);return new a(null!=e?new He(e):this.writeTree_.subtree(t))},a.prototype.isEmpty=function(){return this.writeTree_.isEmpty()},a.prototype.apply=function(t){return a.applySubtreeWrite_(mt.Empty,this.writeTree_,t)},a.Empty=new a(new He(null)),a.applySubtreeWrite_=function(n,t,r){if(null!=t.value)return r.updateChild(n,t.value);var i=null;return t.children.inorderTraversal(function(t,e){".priority"===t?(C(null!==e.value,"Priority writes must always be leaf nodes"),i=e.value):r=a.applySubtreeWrite_(n.child(t),e,r)}),r.getChild(n).isEmpty()||null===i||(r=r.updateChild(n.child(".priority"),i)),r},a}(),an=function(){function u(){this.visibleWrites_=sn.Empty,this.allWrites_=[],this.lastWriteId_=-1}return u.prototype.childWrites=function(t){return new hn(t,this)},u.prototype.addOverwrite=function(t,e,n,r){C(n>this.lastWriteId_,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),this.allWrites_.push({path:t,snap:e,writeId:n,visible:r}),r&&(this.visibleWrites_=this.visibleWrites_.addWrite(t,e)),this.lastWriteId_=n},u.prototype.addMerge=function(t,e,n){C(n>this.lastWriteId_,"Stacking an older merge on top of newer ones"),this.allWrites_.push({path:t,children:e,writeId:n,visible:!0}),this.visibleWrites_=this.visibleWrites_.addWrites(t,e),this.lastWriteId_=n},u.prototype.getWrite=function(t){for(var e=0;e<this.allWrites_.length;e++){var n=this.allWrites_[e];if(n.writeId===t)return n}return null},u.prototype.removeWrite=function(e){var n=this,t=this.allWrites_.findIndex(function(t){return t.writeId===e});C(0<=t,"removeWrite called with nonexistent writeId.");var r=this.allWrites_[t];this.allWrites_.splice(t,1);for(var i=r.visible,o=!1,s=this.allWrites_.length-1;i&&0<=s;){var a=this.allWrites_[s];a.visible&&(t<=s&&this.recordContainsPath_(a,r.path)?i=!1:r.path.contains(a.path)&&(o=!0)),s--}if(i){if(o)return this.resetTree_(),!0;if(r.snap)this.visibleWrites_=this.visibleWrites_.removeWrite(r.path);else{var h=r.children;b(h,function(t){n.visibleWrites_=n.visibleWrites_.removeWrite(r.path.child(t))})}return!0}return!1},u.prototype.getCompleteWriteData=function(t){return this.visibleWrites_.getCompleteNode(t)},u.prototype.calcCompleteEventCache=function(e,t,n,r){if(n||r){var i=this.visibleWrites_.childCompoundWrite(e);if(!r&&i.isEmpty())return t;if(r||null!=t||i.hasCompleteWrite(mt.Empty)){var o=u.layerTree_(this.allWrites_,function(t){return(t.visible||r)&&(!n||!~n.indexOf(t.writeId))&&(t.path.contains(e)||e.contains(t.path))},e);h=t||Ce.EMPTY_NODE;return o.apply(h)}return null}var s=this.visibleWrites_.getCompleteNode(e);if(null!=s)return s;var a=this.visibleWrites_.childCompoundWrite(e);if(a.isEmpty())return t;if(null!=t||a.hasCompleteWrite(mt.Empty)){var h=t||Ce.EMPTY_NODE;return a.apply(h)}return null},u.prototype.calcCompleteEventChildren=function(t,e){var r=Ce.EMPTY_NODE,n=this.visibleWrites_.getCompleteNode(t);if(n)return n.isLeafNode()||n.forEachChild(he,function(t,e){r=r.updateImmediateChild(t,e)}),r;if(e){var i=this.visibleWrites_.childCompoundWrite(t);return e.forEachChild(he,function(t,e){var n=i.childCompoundWrite(new mt(t)).apply(e);r=r.updateImmediateChild(t,n)}),i.getCompleteChildren().forEach(function(t){r=r.updateImmediateChild(t.name,t.node)}),r}return this.visibleWrites_.childCompoundWrite(t).getCompleteChildren().forEach(function(t){r=r.updateImmediateChild(t.name,t.node)}),r},u.prototype.calcEventCacheAfterServerOverwrite=function(t,e,n,r){C(n||r,"Either existingEventSnap or existingServerSnap must exist");var i=t.child(e);if(this.visibleWrites_.hasCompleteWrite(i))return null;var o=this.visibleWrites_.childCompoundWrite(i);return o.isEmpty()?r.getChild(e):o.apply(r.getChild(e))},u.prototype.calcCompleteChild=function(t,e,n){var r=t.child(e),i=this.visibleWrites_.getCompleteNode(r);return null!=i?i:n.isCompleteForChild(e)?this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(e)):null},u.prototype.shadowingWrite=function(t){return this.visibleWrites_.getCompleteNode(t)},u.prototype.calcIndexedSlice=function(t,e,n,r,i,o){var s,a=this.visibleWrites_.childCompoundWrite(t),h=a.getCompleteNode(mt.Empty);if(null!=h)s=h;else{if(null==e)return[];s=a.apply(e)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var u=[],l=o.getCompare(),c=i?s.getReverseIteratorFrom(n,o):s.getIteratorFrom(n,o),p=c.getNext();p&&u.length<r;)0!==l(p,n)&&u.push(p),p=c.getNext();return u},u.prototype.recordContainsPath_=function(n,r){return n.snap?n.path.contains(r):!!R(n.children,function(t,e){return n.path.child(e).contains(r)})},u.prototype.resetTree_=function(){this.visibleWrites_=u.layerTree_(this.allWrites_,u.DefaultFilter_,mt.Empty),0<this.allWrites_.length?this.lastWriteId_=this.allWrites_[this.allWrites_.length-1].writeId:this.lastWriteId_=-1},u.DefaultFilter_=function(t){return t.visible},u.layerTree_=function(t,e,n){for(var r=sn.Empty,i=0;i<t.length;++i){var o=t[i];if(e(o)){var s=o.path,a=void 0;if(o.snap)n.contains(s)?(a=mt.relativePath(n,s),r=r.addWrite(a,o.snap)):s.contains(n)&&(a=mt.relativePath(s,n),r=r.addWrite(mt.Empty,o.snap.getChild(a)));else{if(!o.children)throw p("WriteRecord should have .snap or .children");if(n.contains(s))a=mt.relativePath(n,s),r=r.addWrites(a,o.children);else if(s.contains(n))if((a=mt.relativePath(s,n)).isEmpty())r=r.addWrites(mt.Empty,o.children);else{var h=w(o.children,a.getFront());if(h){var u=h.getChild(a.popFront());r=r.addWrite(mt.Empty,u)}}}}}return r},u}(),hn=function(){function e(t,e){this.treePath_=t,this.writeTree_=e}return e.prototype.calcCompleteEventCache=function(t,e,n){return this.writeTree_.calcCompleteEventCache(this.treePath_,t,e,n)},e.prototype.calcCompleteEventChildren=function(t){return this.writeTree_.calcCompleteEventChildren(this.treePath_,t)},e.prototype.calcEventCacheAfterServerOverwrite=function(t,e,n){return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_,t,e,n)},e.prototype.shadowingWrite=function(t){return this.writeTree_.shadowingWrite(this.treePath_.child(t))},e.prototype.calcIndexedSlice=function(t,e,n,r,i){return this.writeTree_.calcIndexedSlice(this.treePath_,t,e,n,r,i)},e.prototype.calcCompleteChild=function(t,e){return this.writeTree_.calcCompleteChild(this.treePath_,t,e)},e.prototype.child=function(t){return new e(this.treePath_.child(t),this.writeTree_)},e}(),un=function(){function v(t){this.listenProvider_=t,this.syncPointTree_=He.Empty,this.pendingWriteTree_=new an,this.tagToQueryMap_={},this.queryToTagMap_={}}return v.prototype.applyUserOverwrite=function(t,e,n,r){return this.pendingWriteTree_.addOverwrite(t,e,n,r),r?this.applyOperationToSyncPoints_(new je(Ue.User,t,e)):[]},v.prototype.applyUserMerge=function(t,e,n){this.pendingWriteTree_.addMerge(t,e,n);var r=He.fromObject(e);return this.applyOperationToSyncPoints_(new Ke(Ue.User,t,r))},v.prototype.ackUserWrite=function(t,e){void 0===e&&(e=!1);var n=this.pendingWriteTree_.getWrite(t);if(this.pendingWriteTree_.removeWrite(t)){var r=He.Empty;return null!=n.snap?r=r.set(mt.Empty,!0):b(n.children,function(t,e){r=r.set(new mt(t),e)}),this.applyOperationToSyncPoints_(new Ve(n.path,r,e))}return[]},v.prototype.applyServerOverwrite=function(t,e){return this.applyOperationToSyncPoints_(new je(Ue.Server,t,e))},v.prototype.applyServerMerge=function(t,e){var n=He.fromObject(e);return this.applyOperationToSyncPoints_(new Ke(Ue.Server,t,n))},v.prototype.applyListenComplete=function(t){return this.applyOperationToSyncPoints_(new Be(Ue.Server,t))},v.prototype.applyTaggedQueryOverwrite=function(t,e,n){var r=this.queryKeyForTag_(n);if(null==r)return[];var i=v.parseQueryKey_(r),o=i.path,s=i.queryId,a=mt.relativePath(o,t),h=new je(Ue.forServerTaggedQuery(s),a,e);return this.applyTaggedOperation_(o,h)},v.prototype.applyTaggedQueryMerge=function(t,e,n){var r=this.queryKeyForTag_(n);if(r){var i=v.parseQueryKey_(r),o=i.path,s=i.queryId,a=mt.relativePath(o,t),h=He.fromObject(e),u=new Ke(Ue.forServerTaggedQuery(s),a,h);return this.applyTaggedOperation_(o,u)}return[]},v.prototype.applyTaggedListenComplete=function(t,e){var n=this.queryKeyForTag_(e);if(n){var r=v.parseQueryKey_(n),i=r.path,o=r.queryId,s=mt.relativePath(i,t),a=new Be(Ue.forServerTaggedQuery(o),s);return this.applyTaggedOperation_(i,a)}return[]},v.prototype.addEventRegistration=function(t,e){var r=t.path,i=null,o=!1;this.syncPointTree_.foreachOnPath(r,function(t,e){var n=mt.relativePath(t,r);i=i||e.getCompleteServerCache(n),o=o||e.hasCompleteView()});var n,s=this.syncPointTree_.get(r);(s?(o=o||s.hasCompleteView(),i=i||s.getCompleteServerCache(mt.Empty)):(s=new on,this.syncPointTree_=this.syncPointTree_.set(r,s)),null!=i)?n=!0:(n=!1,i=Ce.EMPTY_NODE,this.syncPointTree_.subtree(r).foreachChild(function(t,e){var n=e.getCompleteServerCache(mt.Empty);n&&(i=i.updateImmediateChild(t,n))}));var a=s.viewExistsForQuery(t);if(!a&&!t.getQueryParams().loadsAllData()){var h=v.makeQueryKey_(t);C(!(h in this.queryToTagMap_),"View does not exist, but we have a tag");var u=v.getNextQueryTag_();this.queryToTagMap_[h]=u,this.tagToQueryMap_["_"+u]=h}var l=this.pendingWriteTree_.childWrites(r),c=s.addEventRegistration(t,e,l,i,n);if(!a&&!o){var p=s.viewForQuery(t);c=c.concat(this.setupListener_(t,p))}return c},v.prototype.removeEventRegistration=function(t,e,n){var r=this,i=t.path,o=this.syncPointTree_.get(i),s=[];if(o&&("default"===t.queryIdentifier()||o.viewExistsForQuery(t))){var a=o.removeEventRegistration(t,e,n);o.isEmpty()&&(this.syncPointTree_=this.syncPointTree_.remove(i));var h=a.removed;s=a.events;var u=-1!==h.findIndex(function(t){return t.getQueryParams().loadsAllData()}),l=this.syncPointTree_.findOnPath(i,function(t,e){return e.hasCompleteView()});if(u&&!l){var c=this.syncPointTree_.subtree(i);if(!c.isEmpty())for(var p=this.collectDistinctViewsForSubTree_(c),d=0;d<p.length;++d){var f=p[d],_=f.getQuery(),y=this.createListenerForView_(f);this.listenProvider_.startListening(v.queryForListening_(_),this.tagForQuery_(_),y.hashFn,y.onComplete)}}if(!l&&0<h.length&&!n)if(u){this.listenProvider_.stopListening(v.queryForListening_(t),null)}else h.forEach(function(t){var e=r.queryToTagMap_[v.makeQueryKey_(t)];r.listenProvider_.stopListening(v.queryForListening_(t),e)});this.removeTags_(h)}return s},v.prototype.calcCompleteEventCache=function(i,t){var e=this.pendingWriteTree_,n=this.syncPointTree_.findOnPath(i,function(t,e){var n=mt.relativePath(t,i),r=e.getCompleteServerCache(n);if(r)return r});return e.calcCompleteEventCache(i,n,t,!0)},v.prototype.collectDistinctViewsForSubTree_=function(t){return t.fold(function(t,e,n){if(e&&e.hasCompleteView())return[e.getCompleteView()];var r=[];return e&&(r=e.getQueryViews()),b(n,function(t,e){r=r.concat(e)}),r})},v.prototype.removeTags_=function(t){for(var e=0;e<t.length;++e){var n=t[e];if(!n.getQueryParams().loadsAllData()){var r=v.makeQueryKey_(n),i=this.queryToTagMap_[r];delete this.queryToTagMap_[r],delete this.tagToQueryMap_["_"+i]}}},v.queryForListening_=function(t){return t.getQueryParams().loadsAllData()&&!t.getQueryParams().isDefault()?t.getRef():t},v.prototype.setupListener_=function(t,e){var n=t.path,r=this.tagForQuery_(t),i=this.createListenerForView_(e),o=this.listenProvider_.startListening(v.queryForListening_(t),r,i.hashFn,i.onComplete),s=this.syncPointTree_.subtree(n);if(r)C(!s.value.hasCompleteView(),"If we're adding a query, it shouldn't be shadowed");else for(var a=s.fold(function(t,e,n){if(!t.isEmpty()&&e&&e.hasCompleteView())return[e.getCompleteView().getQuery()];var r=[];return e&&(r=r.concat(e.getQueryViews().map(function(t){return t.getQuery()}))),b(n,function(t,e){r=r.concat(e)}),r}),h=0;h<a.length;++h){var u=a[h];this.listenProvider_.stopListening(v.queryForListening_(u),this.tagForQuery_(u))}return o},v.prototype.createListenerForView_=function(t){var n=this,r=t.getQuery(),i=this.tagForQuery_(r);return{hashFn:function(){return(t.getServerCache()||Ce.EMPTY_NODE).hash()},onComplete:function(t){if("ok"===t)return i?n.applyTaggedListenComplete(r.path,i):n.applyListenComplete(r.path);var e=function(t,e){var n="Unknown Error";"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==t?n="Client doesn't have permission to access the desired data.":"unavailable"==t&&(n="The service is unavailable");var r=new Error(t+" at "+e.path.toString()+": "+n);return r.code=t.toUpperCase(),r}(t,r);return n.removeEventRegistration(r,null,e)}}},v.makeQueryKey_=function(t){return t.path.toString()+"$"+t.queryIdentifier()},v.parseQueryKey_=function(t){var e=t.indexOf("$");return C(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new mt(t.substr(0,e))}},v.prototype.queryKeyForTag_=function(t){return this.tagToQueryMap_["_"+t]},v.prototype.tagForQuery_=function(t){var e=v.makeQueryKey_(t);return w(this.queryToTagMap_,e)},v.getNextQueryTag_=function(){return v.nextQueryTag_++},v.prototype.applyTaggedOperation_=function(t,e){var n=this.syncPointTree_.get(t);C(n,"Missing sync point for query tag that we're tracking");var r=this.pendingWriteTree_.childWrites(t);return n.applyOperation(e,r,null)},v.prototype.applyOperationToSyncPoints_=function(t){return this.applyOperationHelper_(t,this.syncPointTree_,null,this.pendingWriteTree_.childWrites(mt.Empty))},v.prototype.applyOperationHelper_=function(t,e,n,r){if(t.path.isEmpty())return this.applyOperationDescendantsHelper_(t,e,n,r);var i=e.get(mt.Empty);null==n&&null!=i&&(n=i.getCompleteServerCache(mt.Empty));var o=[],s=t.path.getFront(),a=t.operationForChild(s),h=e.children.get(s);if(h&&a){var u=n?n.getImmediateChild(s):null,l=r.child(s);o=o.concat(this.applyOperationHelper_(a,h,u,l))}return i&&(o=o.concat(i.applyOperation(t,r,n))),o},v.prototype.applyOperationDescendantsHelper_=function(o,t,s,a){var h=this,e=t.get(mt.Empty);null==s&&null!=e&&(s=e.getCompleteServerCache(mt.Empty));var u=[];return t.children.inorderTraversal(function(t,e){var n=s?s.getImmediateChild(t):null,r=a.child(t),i=o.operationForChild(t);i&&(u=u.concat(h.applyOperationDescendantsHelper_(i,e,n,r)))}),e&&(u=u.concat(e.applyOperation(o,a,s))),u},v.nextQueryTag_=1,v}(),ln=function(){function t(){this.rootNode_=Ce.EMPTY_NODE}return t.prototype.getNode=function(t){return this.rootNode_.getChild(t)},t.prototype.updateSnapshot=function(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)},t}(),cn=function(){function t(t){this.app_=t}return t.prototype.getToken=function(t){return this.app_.INTERNAL.getToken(t).then(null,function(t){return t&&"auth/token-not-initialized"===t.code?(tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)})},t.prototype.addTokenChangeListener=function(t){this.app_.INTERNAL.addAuthTokenListener(t)},t.prototype.removeTokenChangeListener=function(t){this.app_.INTERNAL.removeAuthTokenListener(t)},t.prototype.notifyForInvalidToken=function(){var t='Provided authentication credentials for the app named "'+this.app_.name+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.app_.options?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.app_.options?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',it(t)},t}(),pn=function(){function t(){this.counters_={}}return t.prototype.incrementCounter=function(t,e){void 0===e&&(e=1),E(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e},t.prototype.get=function(){return i(this.counters_)},t}(),dn=function(){function t(){}return t.getCollection=function(t){var e=t.toString();return this.collections_[e]||(this.collections_[e]=new pn),this.collections_[e]},t.getOrCreateReporter=function(t,e){var n=t.toString();return this.reporters_[n]||(this.reporters_[n]=e()),this.reporters_[n]},t.collections_={},t.reporters_={},t}(),fn=function(){function t(t){this.collection_=t,this.last_=null}return t.prototype.get=function(){var t=this.collection_.get(),n=S(t);return this.last_&&b(this.last_,function(t,e){n[t]=n[t]-e}),this.last_=t,n},t}(),_n=function(){function t(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new fn(t);var n=1e4+2e4*Math.random();gt(this.reportStats_.bind(this),Math.floor(n))}return t.prototype.includeStat=function(t){this.statsToReport_[t]=!0},t.prototype.reportStats_=function(){var n=this,t=this.statsListener_.get(),r={},i=!1;b(t,function(t,e){0<e&&E(n.statsToReport_,t)&&(r[t]=e,i=!0)}),i&&this.server_.reportStats(r),gt(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))},t}(),yn=function(){function t(){this.eventLists_=[],this.recursionDepth_=0}return t.prototype.queueEvents=function(t){for(var e=null,n=0;n<t.length;n++){var r=t[n],i=r.getPath();null===e||i.equals(e.getPath())||(this.eventLists_.push(e),e=null),null===e&&(e=new vn(i)),e.add(r)}e&&this.eventLists_.push(e)},t.prototype.raiseEventsAtPath=function(e,t){this.queueEvents(t),this.raiseQueuedEventsMatchingPredicate_(function(t){return t.equals(e)})},t.prototype.raiseEventsForChangedPath=function(e,t){this.queueEvents(t),this.raiseQueuedEventsMatchingPredicate_(function(t){return t.contains(e)||e.contains(t)})},t.prototype.raiseQueuedEventsMatchingPredicate_=function(t){this.recursionDepth_++;for(var e=!0,n=0;n<this.eventLists_.length;n++){var r=this.eventLists_[n];if(r)t(r.getPath())?(this.eventLists_[n].raise(),this.eventLists_[n]=null):e=!1}e&&(this.eventLists_=[]),this.recursionDepth_--},t}(),vn=function(){function t(t){this.path_=t,this.events_=[]}return t.prototype.add=function(t){this.events_.push(t)},t.prototype.raise=function(){for(var t=0;t<this.events_.length;t++){var e=this.events_[t];if(null!==e){this.events_[t]=null;var n=e.getEventRunner();$&&tt("event: "+e.toString()),vt(n)}}},t.prototype.getPath=function(){return this.path_},t}(),gn=function(){function t(t){this.allowedEvents_=t,this.listeners_={},C(Array.isArray(t)&&0<t.length,"Requires a non-empty array")}return t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Array.isArray(this.listeners_[t]))for(var r=this.listeners_[t].slice(),i=0;i<r.length;i++)r[i].callback.apply(r[i].context,e)},t.prototype.on=function(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});var r=this.getInitialEvent(t);r&&e.apply(n,r)},t.prototype.off=function(t,e,n){this.validateEventType_(t);for(var r=this.listeners_[t]||[],i=0;i<r.length;i++)if(r[i].callback===e&&(!n||n===r[i].context))return void r.splice(i,1)},t.prototype.validateEventType_=function(e){C(this.allowedEvents_.find(function(t){return t===e}),"Unknown event: "+e)},t}(),mn=function(r){function t(){var e,t,n=r.call(this,["visible"])||this;return"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),n.visible_=!0,t&&document.addEventListener(t,function(){var t=!document[e];t!==n.visible_&&(n.visible_=t,n.trigger("visible",t))},!1),n}return s(t,r),t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(t){return C("visible"===t,"Unknown event type: "+t),[this.visible_]},t}(gn),Cn=function(e){function t(){var t=e.call(this,["online"])||this;return t.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||o()||(window.addEventListener("online",function(){t.online_||(t.online_=!0,t.trigger("online",!0))},!1),window.addEventListener("offline",function(){t.online_&&(t.online_=!1,t.trigger("online",!1))},!1)),t}return s(t,e),t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(t){return C("online"===t,"Unknown event type: "+t),[this.online_]},t.prototype.currentlyOnline=function(){return this.online_},t}(gn),En=function(){function t(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return t.prototype.closeAfter=function(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},t.prototype.handleResponse=function(t,e){var r=this;this.pendingResponses[t]=e;for(var n=function(){var e=i.pendingResponses[i.currentResponseNum];delete i.pendingResponses[i.currentResponseNum];for(var t=function(t){e[t]&&vt(function(){r.onMessage_(e[t])})},n=0;n<e.length;++n)t(n);if(i.currentResponseNum===i.closeAfterResponse)return i.onClose&&(i.onClose(),i.onClose=null),"break";i.currentResponseNum++},i=this;this.pendingResponses[this.currentResponseNum];){if("break"===n())break}},t}(),wn=function(){function t(t,e,n,r){this.connId=t,this.repoInfo=e,this.transportSessionId=n,this.lastSessionId=r,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=et(t),this.stats_=dn.getCollection(e),this.urlFn=function(t){return e.connectionURL(bt,t)}}return t.prototype.open=function(t,e){var o=this;this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new En(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){o.log_("Timed out trying to connect."),o.onClosed_(),o.connectTimeoutTimer_=null},Math.floor(3e4)),function(t){if("complete"===document.readyState)t();else{var e=!1,n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}}(function(){if(!o.isClosed_){o.scriptTagHolder=new bn(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[0],r=t[1],i=t[2];if(o.incrementIncomingBytes_(t),o.scriptTagHolder)if(o.connectTimeoutTimer_&&(clearTimeout(o.connectTimeoutTimer_),o.connectTimeoutTimer_=null),o.everConnected_=!0,"start"==n)o.id=r,o.password=i;else{if("close"!==n)throw new Error("Unrecognized command received: "+n);r?(o.scriptTagHolder.sendNewPolls=!1,o.myPacketOrderer.closeAfter(r,function(){o.onClosed_()})):o.onClosed_()}},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[0],r=t[1];o.incrementIncomingBytes_(t),o.myPacketOrderer.handleResponse(n,r)},function(){o.onClosed_()},o.urlFn);var t={start:"t"};t.ser=Math.floor(1e8*Math.random()),o.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=o.scriptTagHolder.uniqueCallbackIdentifier),t.v="5",o.transportSessionId&&(t.s=o.transportSessionId),o.lastSessionId&&(t.ls=o.lastSessionId),"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf(Et)&&(t.r="f");var e=o.urlFn(t);o.log_("Connecting via long-poll to "+e),o.scriptTagHolder.addTag(e,function(){})}})},t.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},t.forceAllow=function(){t.forceAllow_=!0},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){return t.forceAllow_||!t.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI)&&!c()},t.prototype.markConnectionHealthy=function(){},t.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},t.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},t.prototype.send=function(t){var e=g(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);for(var n,r=(n=a(e),h.encodeByteArray(n,!0)),i=pt(r,1840),o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++},t.prototype.addDisconnectPingFrame=function(t,e){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=t,n.pw=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)},t.prototype.incrementIncomingBytes_=function(t){var e=g(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)},t}(),bn=function(){function s(t,e,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Ae,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,this.uniqueCallbackIdentifier=z(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=e,this.myIFrame=s.createIFrame_();var i="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)&&(i='<script>document.domain="'+document.domain+'";<\/script>');var o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(t){tt("frame writing exception"),t.stack&&tt(t.stack),tt(t)}}return s.createIFrame_=function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||tt("No IE domain setting required")}catch(t){var n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e},s.prototype.close=function(){var t=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){null!==t.myIFrame&&(document.body.removeChild(t.myIFrame),t.myIFrame=null)},Math.floor(0)));var e=this.onDisconnect;e&&(this.onDisconnect=null,e())},s.prototype.startLongPoll=function(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););},s.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.count()<(0<this.pendingSegs.length?2:1)){this.currentSerial++;var t={};t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial;for(var e=this.urlFn(t),n="",r=0;0<this.pendingSegs.length;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1},s.prototype.enqueueSegment=function(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()},s.prototype.addLongPollTag_=function(t,e){var n=this;this.outstandingRequests.add(e,1);var r=function(){n.outstandingRequests.remove(e),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(t,function(){clearTimeout(i),r()})},s.prototype.addTag=function(t,n){var r=this;setTimeout(function(){try{if(!r.sendNewPolls)return;var e=r.myIFrame.doc.createElement("script");e.type="text/javascript",e.async=!0,e.src=t,e.onload=e.onreadystatechange=function(){var t=e.readyState;t&&"loaded"!==t&&"complete"!==t||(e.onload=e.onreadystatechange=null,e.parentNode&&e.parentNode.removeChild(e),n())},e.onerror=function(){tt("Long-poll script failed to load: "+t),r.sendNewPolls=!1,r.close()},r.myIFrame.doc.body.appendChild(e)}catch(t){}},Math.floor(1))},s}(),Sn=null;"undefined"!=typeof MozWebSocket?Sn=MozWebSocket:"undefined"!=typeof WebSocket&&(Sn=WebSocket);var Tn=function(){function i(t,e,n,r){this.connId=t,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=et(this.connId),this.stats_=dn.getCollection(e),this.connURL=i.connectionURL_(e,n,r)}return i.connectionURL_=function(t,e,n){var r={v:"5"};return"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf(Et)&&(r.r="f"),e&&(r.s=e),n&&(r.ls=n),t.connectionURL(wt,r)},i.prototype.open=function(t,e){var n=this;this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,j.set("previous_websocket_failure",!0);try{this.mySock=new Sn(this.connURL)}catch(t){this.log_("Error instantiating WebSocket.");var r=t.message||t.data;return r&&this.log_(r),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(t){n.handleIncomingFrame(t)},this.mySock.onerror=function(t){n.log_("WebSocket error.  Closing connection.");var e=t.message||t.data;e&&n.log_(e),n.onClosed_()}},i.prototype.start=function(){},i.forceDisallow=function(){i.forceDisallow_=!0},i.isAvailable=function(){var t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var e=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);e&&1<e.length&&parseFloat(e[1])<4.4&&(t=!0)}return!t&&null!==Sn&&!i.forceDisallow_},i.previouslyFailed=function(){return j.isInMemoryStorage||!0===j.get("previous_websocket_failure")},i.prototype.markConnectionHealthy=function(){j.remove("previous_websocket_failure")},i.prototype.appendFrame_=function(t){if(this.frames.push(t),this.frames.length==this.totalFrames){var e=this.frames.join("");this.frames=null;var n=v(e);this.onMessage(n)}},i.prototype.handleNewFrameCount_=function(t){this.totalFrames=t,this.frames=[]},i.prototype.extractFrameCount_=function(t){if(C(null===this.frames,"We already have a frame buffer"),t.length<=6){var e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t},i.prototype.handleIncomingFrame=function(t){if(null!==this.mySock){var e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{var n=this.extractFrameCount_(e);null!==n&&this.appendFrame_(n)}}},i.prototype.send=function(t){this.resetKeepAlive();var e=g(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);var n=pt(e,16384);1<n.length&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])},i.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},i.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},i.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},i.prototype.resetKeepAlive=function(){var t=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){t.mySock&&t.sendString_("0"),t.resetKeepAlive()},Math.floor(45e3))},i.prototype.sendString_=function(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},i.responsesRequiredToBeHealthy=2,i.healthyTimeout=3e4,i}(),In=function(){function i(t){this.initTransports_(t)}return Object.defineProperty(i,"ALL_TRANSPORTS",{get:function(){return[wn,Tn]},enumerable:!0,configurable:!0}),i.prototype.initTransports_=function(t){var e=Tn&&Tn.isAvailable(),n=e&&!Tn.previouslyFailed();if(t.webSocketOnly&&(e||it("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Tn];else{var r=this.transports_=[];dt(i.ALL_TRANSPORTS,function(t,e){e&&e.isAvailable()&&r.push(e)})}},i.prototype.initialTransport=function(){if(0<this.transports_.length)return this.transports_[0];throw new Error("No transports available")},i.prototype.upgradeTransport=function(){return 1<this.transports_.length?this.transports_[1]:null},i}(),Nn=function(){function t(t,e,n,r,i,o,s){this.id=t,this.repoInfo_=e,this.onMessage_=n,this.onReady_=r,this.onDisconnect_=i,this.onKill_=o,this.lastSessionId=s,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=et("c:"+this.id+":"),this.transportManager_=new In(e),this.log_("Connection created"),this.start_()}return t.prototype.start_=function(){var t=this,e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,void 0,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){t.conn_&&t.conn_.open(n,r)},Math.floor(0));var i=e.healthyTimeout||0;0<i&&(this.healthyTimeout_=gt(function(){t.healthyTimeout_=null,t.isHealthy_||(t.conn_&&102400<t.conn_.bytesReceived?(t.log_("Connection exceeded healthy timeout but has received "+t.conn_.bytesReceived+" bytes.  Marking connection healthy."),t.isHealthy_=!0,t.conn_.markConnectionHealthy()):t.conn_&&10240<t.conn_.bytesSent?t.log_("Connection exceeded healthy timeout but has sent "+t.conn_.bytesSent+" bytes.  Leaving connection alive."):(t.log_("Closing unhealthy connection after timeout."),t.close()))},Math.floor(i)))},t.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},t.prototype.disconnReceiver_=function(e){var n=this;return function(t){e===n.conn_?n.onConnectionLost_(t):e===n.secondaryConn_?(n.log_("Secondary connection lost."),n.onSecondaryConnectionLost_()):n.log_("closing an old connection")}},t.prototype.connReceiver_=function(e){var n=this;return function(t){2!=n.state_&&(e===n.rx_?n.onPrimaryMessageReceived_(t):e===n.secondaryConn_?n.onSecondaryMessageReceived_(t):n.log_("message on old connection"))}},t.prototype.sendRequest=function(t){var e={t:"d",d:t};this.sendData_(e)},t.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},t.prototype.onSecondaryControl_=function(t){if("t"in t){var e=t.t;"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},t.prototype.onSecondaryMessageReceived_=function(t){var e=lt("t",t),n=lt("d",t);if("c"==e)this.onSecondaryControl_(n);else{if("d"!=e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}},t.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))},t.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},t.prototype.onPrimaryMessageReceived_=function(t){var e=lt("t",t),n=lt("d",t);"c"==e?this.onControl_(n):"d"==e&&this.onDataMessage_(n)},t.prototype.onDataMessage_=function(t){this.onPrimaryResponse_(),this.onMessage_(t)},t.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},t.prototype.onControl_=function(t){var e=lt("t",t);if("d"in t){var n=t.d;if("h"===e)this.onHandshake_(n);else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(n):"r"===e?this.onReset_(n):"e"===e?nt("Server Error: "+n):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nt("Unknown control packet command: "+e)}},t.prototype.onHandshake_=function(t){var e=t.ts,n=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.updateHost(r),0==this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),"5"!==n&&it("Protocol version mismatch detected"),this.tryStartUpgrade_())},t.prototype.tryStartUpgrade_=function(){var t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)},t.prototype.startUpgrade_=function(t){var e=this;this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),gt(function(){e.secondaryConn_&&(e.log_("Timed out trying to upgrade."),e.secondaryConn_.close())},Math.floor(6e4))},t.prototype.onReset_=function(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.updateHost(t),1===this.state_?this.close():(this.closeConnections_(),this.start_())},t.prototype.onConnectionEstablished_=function(t,e){var n=this;this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gt(function(){n.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))},t.prototype.sendPingOnPrimaryIfNecessary_=function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))},t.prototype.onSecondaryConnectionLost_=function(){var t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()},t.prototype.onConnectionLost_=function(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(j.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()},t.prototype.onConnectionShutdown_=function(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()},t.prototype.sendData_=function(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)},t.prototype.close=function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},t.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},t}(),Rn=function(){function t(){}return t.prototype.put=function(t,e,n,r){},t.prototype.merge=function(t,e,n,r){},t.prototype.refreshAuthToken=function(t){},t.prototype.onDisconnectPut=function(t,e,n){},t.prototype.onDisconnectMerge=function(t,e,n){},t.prototype.onDisconnectCancel=function(t,e){},t.prototype.reportStats=function(t){},t}(),Pn=function(a){function l(t,e,n,r,i,o){var s=a.call(this)||this;if(s.repoInfo_=t,s.onDataUpdate_=e,s.onConnectStatus_=n,s.onServerInfoUpdate_=r,s.authTokenProvider_=i,s.authOverride_=o,s.id=l.nextPersistentConnectionId_++,s.log_=et("p:"+s.id+":"),s.interruptReasons_={},s.listens_={},s.outstandingPuts_=[],s.outstandingPutCount_=0,s.onDisconnectRequestQueue_=[],s.connected_=!1,s.reconnectDelay_=1e3,s.maxReconnectDelay_=3e5,s.securityDebugCallback_=null,s.lastSessionId=null,s.establishConnectionTimer_=null,s.visible_=!1,s.requestCBHash_={},s.requestNumber_=0,s.realtime_=null,s.authToken_=null,s.forceTokenRefresh_=!1,s.invalidAuthTokenCount_=0,s.firstConnection_=!0,s.lastConnectionAttemptTime_=null,s.lastConnectionEstablishedTime_=null,o&&!c())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return s.scheduleConnect_(0),mn.getInstance().on("visible",s.onVisible_,s),-1===t.host.indexOf("fblocal")&&Cn.getInstance().on("online",s.onOnline_,s),s}return s(l,a),l.prototype.sendRequest=function(t,e,n){var r=++this.requestNumber_,i={r:r,a:t,b:e};this.log_(g(i)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)},l.prototype.listen=function(t,e,n,r){var i=t.queryIdentifier(),o=t.path.toString();this.log_("Listen called for "+o+" "+i),this.listens_[o]=this.listens_[o]||{},C(t.getQueryParams().isDefault()||!t.getQueryParams().loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens_[o][i],"listen() called twice for same path/queryId.");var s={onComplete:r,hashFn:e,query:t,tag:n};this.listens_[o][i]=s,this.connected_&&this.sendListen_(s)},l.prototype.sendListen_=function(r){var i=this,o=r.query,s=o.path.toString(),a=o.queryIdentifier();this.log_("Listen on "+s+" for "+a);var t={p:s};r.tag&&(t.q=o.queryObject(),t.t=r.tag),t.h=r.hashFn(),this.sendRequest("q",t,function(t){var e=t.d,n=t.s;l.warnOnListenWarnings_(e,o),(i.listens_[s]&&i.listens_[s][a])===r&&(i.log_("listen response",t),"ok"!==n&&i.removeListen_(s,a),r.onComplete&&r.onComplete(n,e))})},l.warnOnListenWarnings_=function(t,e){if(t&&"object"==typeof t&&E(t,"w")){var n=w(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+e.getQueryParams().getIndex().toString()+'"',i=e.path.toString();it("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding "+r+" at "+i+" to your security rules for better performance.")}}},l.prototype.refreshAuthToken=function(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(t)},l.prototype.reduceReconnectDelayIfAdminCredential_=function(t){var e;(t&&40===t.length||"object"==typeof(e=m(t).claims)&&!0===e.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)},l.prototype.tryAuth=function(){var t,r=this;if(this.connected_&&this.authToken_){var i=this.authToken_,e=(t=m(i).claims)&&"object"==typeof t&&t.hasOwnProperty("iat")?"auth":"gauth",n={cred:i};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(e,n,function(t){var e=t.s,n=t.d||"error";r.authToken_===i&&("ok"===e?r.invalidAuthTokenCount_=0:r.onAuthRevoked_(e,n))})}},l.prototype.unlisten=function(t,e){var n=t.path.toString(),r=t.queryIdentifier();this.log_("Unlisten called for "+n+" "+r),C(t.getQueryParams().isDefault()||!t.getQueryParams().loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,t.queryObject(),e)},l.prototype.sendUnlisten_=function(t,e,n,r){this.log_("Unlisten on "+t+" for "+e);var i={p:t};r&&(i.q=n,i.t=r),this.sendRequest("n",i)},l.prototype.onDisconnectPut=function(t,e,n){this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})},l.prototype.onDisconnectMerge=function(t,e,n){this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})},l.prototype.onDisconnectCancel=function(t,e){this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})},l.prototype.sendOnDisconnect_=function(t,e,n,r){var i={p:e,d:n};this.log_("onDisconnect "+t,i),this.sendRequest(t,i,function(t){r&&setTimeout(function(){r(t.s,t.d)},Math.floor(0))})},l.prototype.put=function(t,e,n,r){this.putInternal("p",t,e,n,r)},l.prototype.merge=function(t,e,n,r){this.putInternal("m",t,e,n,r)},l.prototype.putInternal=function(t,e,n,r,i){var o={p:e,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++;var s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+e)},l.prototype.sendPut_=function(e){var n=this,r=this.outstandingPuts_[e].action,t=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(r,t,function(t){n.log_(r+" response",t),delete n.outstandingPuts_[e],n.outstandingPutCount_--,0===n.outstandingPutCount_&&(n.outstandingPuts_=[]),i&&i(t.s,t.d)})},l.prototype.reportStats=function(t){var n=this;if(this.connected_){var e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,function(t){if("ok"!==t.s){var e=t.d;n.log_("reportStats","Error sending stats: "+e)}})}},l.prototype.onDataMessage_=function(t){if("r"in t){this.log_("from server: "+g(t));var e=t.r,n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}},l.prototype.onDataPush_=function(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):nt("Unrecognized action received from server: "+g(t)+"\nAre you using the latest client?")},l.prototype.onReady_=function(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},l.prototype.scheduleConnect_=function(t){var e=this;C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){e.establishConnectionTimer_=null,e.establishConnection_()},Math.floor(t))},l.prototype.onVisible_=function(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=t},l.prototype.onOnline_=function(t){t?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},l.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){3e4<(new Date).getTime()-this.lastConnectionEstablishedTime_&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var t=(new Date).getTime()-this.lastConnectionAttemptTime_,e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)},l.prototype.establishConnection_=function(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;var e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+l.nextConnectionId_++,o=this,s=this.lastSessionId,a=!1,h=null,u=function(){h?h.close():(a=!0,r())};this.realtime_={close:u,sendRequest:function(t){C(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(t)}};var t=this.forceTokenRefresh_;this.forceTokenRefresh_=!1,this.authTokenProvider_.getToken(t).then(function(t){a?tt("getToken() completed but was canceled"):(tt("getToken() completed. Creating connection."),o.authToken_=t&&t.accessToken,h=new Nn(i,o.repoInfo_,e,n,r,function(t){it(t+" ("+o.repoInfo_.toString()+")"),o.interrupt("server_kill")},s))}).then(null,function(t){o.log_("Failed to get token: "+t),a||u()})}},l.prototype.interrupt=function(t){tt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},l.prototype.resume=function(t){tt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],T(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))},l.prototype.handleTimestamp_=function(t){var e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})},l.prototype.cancelSentTransactions_=function(){for(var t=0;t<this.outstandingPuts_.length;t++){var e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])},l.prototype.onListenRevoked_=function(t,e){var n;n=e?e.map(function(t){return ct(t)}).join("$"):"default";var r=this.removeListen_(t,n);r&&r.onComplete&&r.onComplete("permission_denied")},l.prototype.removeListen_=function(t,e){var n,r=new mt(t).toString();return void 0!==this.listens_[r]?(n=this.listens_[r][e],delete this.listens_[r][e],0===I(this.listens_[r])&&delete this.listens_[r]):n=void 0,n},l.prototype.onAuthRevoked_=function(t,e){tt("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,3<=this.invalidAuthTokenCount_&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))},l.prototype.onSecurityDebugPacket_=function(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))},l.prototype.restoreState_=function(){var n=this;this.tryAuth(),b(this.listens_,function(t,e){b(e,function(t,e){n.sendListen_(e)})});for(var t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){var e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}},l.prototype.sendConnectStats_=function(){var t={};t["sdk.js."+Jn.SDK_VERSION.replace(/\./g,"-")]=1,o()?t["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(t["framework.reactnative"]=1),this.reportStats(t)},l.prototype.shouldReconnect_=function(){var t=Cn.getInstance().currentlyOnline();return T(this.interruptReasons_)&&t},l.nextPersistentConnectionId_=0,l.nextConnectionId_=0,l}(Rn),Dn=function(i){function u(t,e,n){var r=i.call(this)||this;return r.repoInfo_=t,r.onDataUpdate_=e,r.authTokenProvider_=n,r.log_=et("p:rest:"),r.listens_={},r}return s(u,i),u.prototype.reportStats=function(t){throw new Error("Method not implemented.")},u.getListenId_=function(t,e){return void 0!==e?"tag$"+e:(C(t.getQueryParams().isDefault(),"should have a tag if it's not a default query."),t.path.toString())},u.prototype.listen=function(t,e,r,i){var o=this,s=t.path.toString();this.log_("Listen called for "+s+" "+t.queryIdentifier());var a=u.getListenId_(t,r),h={};this.listens_[a]=h;var n=t.getQueryParams().toRestQueryStringParameters();this.restRequest_(s+".json",n,function(t,e){var n=e;(404===t&&(t=n=null),null===t&&o.onDataUpdate_(s,n,!1,r),w(o.listens_,a)===h)&&i(t?401==t?"permission_denied":"rest_error:"+t:"ok",null)})},u.prototype.unlisten=function(t,e){var n=u.getListenId_(t,e);delete this.listens_[n]},u.prototype.refreshAuthToken=function(t){},u.prototype.restRequest_=function(o,s,a){var h=this;void 0===s&&(s={}),s.format="export",this.authTokenProvider_.getToken(!1).then(function(t){var e=t&&t.accessToken;e&&(s.auth=e);var n,r=(h.repoInfo_.secure?"https://":"http://")+h.repoInfo_.host+o+"?ns="+h.repoInfo_.namespace+(n=[],b(s,function(e,t){Array.isArray(t)?t.forEach(function(t){n.push(encodeURIComponent(e)+"="+encodeURIComponent(t))}):n.push(encodeURIComponent(e)+"="+encodeURIComponent(t))}),n.length?"&"+n.join("&"):"");h.log_("Sending REST request for "+r);var i=new XMLHttpRequest;i.onreadystatechange=function(){if(a&&4===i.readyState){h.log_("REST Response for "+r+" received. status:",i.status,"response:",i.responseText);var t=null;if(200<=i.status&&i.status<300){try{t=v(i.responseText)}catch(t){it("Failed to parse JSON response for "+r+": "+i.responseText)}a(null,t)}else 401!==i.status&&404!==i.status&&it("Got unsuccessful REST response for "+r+" Status: "+i.status),a(i.status);a=null}},i.open("GET",r,!0),i.send()})},u}(Rn),On="repo_interrupt",kn=function(){function t(t,e,n){var s=this;this.repoInfo_=t,this.app=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yn,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=new Le,this.persistentConnection_=null;var r=new cn(n);if(this.stats_=dn.getCollection(t),e||0<=("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.server_=new Dn(this.repoInfo_,this.onDataUpdate_.bind(this),r),setTimeout(this.onConnectStatus_.bind(this,!0),0);else{var i=n.options.databaseAuthVariableOverride;if(null!=i){if("object"!=typeof i)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{g(i)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}this.persistentConnection_=new Pn(this.repoInfo_,this.onDataUpdate_.bind(this),this.onConnectStatus_.bind(this),this.onServerInfoUpdate_.bind(this),r,i),this.server_=this.persistentConnection_}r.addTokenChangeListener(function(t){s.server_.refreshAuthToken(t)}),this.statsReporter_=dn.getOrCreateReporter(t,function(){return new _n(s.stats_,s.server_)}),this.transactions_init_(),this.infoData_=new ln,this.infoSyncTree_=new un({startListening:function(t,e,n,r){var i=[],o=s.infoData_.getNode(t.path);return o.isEmpty()||(i=s.infoSyncTree_.applyServerOverwrite(t.path,o),setTimeout(function(){r("ok")},0)),i},stopListening:function(){}}),this.updateInfo_("connected",!1),this.serverSyncTree_=new un({startListening:function(r,t,e,i){return s.server_.listen(r,e,t,function(t,e){var n=i(t,e);s.eventQueue_.raiseEventsForChangedPath(r.path,n)}),[]},stopListening:function(t,e){s.server_.unlisten(t,e)}})}return t.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},t.prototype.name=function(){return this.repoInfo_.namespace},t.prototype.serverTime=function(){var t=this.infoData_.getNode(new mt(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t},t.prototype.generateServerValues=function(){return(t=(t={timestamp:this.serverTime()})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t},t.prototype.onDataUpdate_=function(t,e,n,r){this.dataUpdateCount++;var i=new mt(t);e=this.interceptServerDataCallback_?this.interceptServerDataCallback_(t,e):e;var o=[];if(r)if(n){var s=N(e,function(t){return be(t)});o=this.serverSyncTree_.applyTaggedQueryMerge(i,s,r)}else{var a=be(e);o=this.serverSyncTree_.applyTaggedQueryOverwrite(i,a,r)}else if(n){var h=N(e,function(t){return be(t)});o=this.serverSyncTree_.applyServerMerge(i,h)}else{var u=be(e);o=this.serverSyncTree_.applyServerOverwrite(i,u)}var l=i;0<o.length&&(l=this.rerunTransactions_(i)),this.eventQueue_.raiseEventsForChangedPath(l,o)},t.prototype.interceptServerData_=function(t){this.interceptServerDataCallback_=t},t.prototype.onConnectStatus_=function(t){this.updateInfo_("connected",t),!1===t&&this.runOnDisconnectEvents_()},t.prototype.onServerInfoUpdate_=function(t){var n=this;dt(t,function(t,e){n.updateInfo_(e,t)})},t.prototype.updateInfo_=function(t,e){var n=new mt("/.info/"+t),r=be(e);this.infoData_.updateSnapshot(n,r);var i=this.infoSyncTree_.applyServerOverwrite(n,r);this.eventQueue_.raiseEventsForChangedPath(n,i)},t.prototype.getNextWriteId_=function(){return this.nextWriteId_++},t.prototype.setWithPriority=function(i,t,e,o){var s=this;this.log_("set",{path:i.toString(),value:t,priority:e});var n=this.generateServerValues(),r=be(t,e),a=We(r,n),h=this.getNextWriteId_(),u=this.serverSyncTree_.applyUserOverwrite(i,a,h,!0);this.eventQueue_.queueEvents(u),this.server_.put(i.toString(),r.val(!0),function(t,e){var n="ok"===t;n||it("set at "+i+" failed: "+t);var r=s.serverSyncTree_.ackUserWrite(h,!n);s.eventQueue_.raiseEventsForChangedPath(i,r),s.callOnCompleteCallback(o,t,e)});var l=this.abortTransactions_(i);this.rerunTransactions_(l),this.eventQueue_.raiseEventsForChangedPath(l,[])},t.prototype.update=function(o,t,s){var a=this;this.log_("update",{path:o.toString(),value:t});var r=!0,i=this.generateServerValues(),h={};if(b(t,function(t,e){r=!1;var n=be(e);h[t]=We(n,i)}),r)tt("update() called with empty data.  Don't do anything."),this.callOnCompleteCallback(s,"ok");else{var u=this.getNextWriteId_(),e=this.serverSyncTree_.applyUserMerge(o,h,u);this.eventQueue_.queueEvents(e),this.server_.merge(o.toString(),t,function(t,e){var n="ok"===t;n||it("update at "+o+" failed: "+t);var r=a.serverSyncTree_.ackUserWrite(u,!n),i=0<r.length?a.rerunTransactions_(o):o;a.eventQueue_.raiseEventsForChangedPath(i,r),a.callOnCompleteCallback(s,t,e)}),b(t,function(t){var e=a.abortTransactions_(o.child(t));a.rerunTransactions_(e)}),this.eventQueue_.raiseEventsForChangedPath(o,[])}},t.prototype.runOnDisconnectEvents_=function(){var r=this;this.log_("onDisconnectEvents");var t,n,i,e=this.generateServerValues(),o=(t=this.onDisconnect_,n=e,i=new Le,t.forEachTree(new mt(""),function(t,e){i.remember(t,We(e,n))}),i),s=[];o.forEachTree(mt.Empty,function(t,e){s=s.concat(r.serverSyncTree_.applyServerOverwrite(t,e));var n=r.abortTransactions_(t);r.rerunTransactions_(n)}),this.onDisconnect_=new Le,this.eventQueue_.raiseEventsForChangedPath(mt.Empty,s)},t.prototype.onDisconnectCancel=function(n,r){var i=this;this.server_.onDisconnectCancel(n.toString(),function(t,e){"ok"===t&&i.onDisconnect_.forget(n),i.callOnCompleteCallback(r,t,e)})},t.prototype.onDisconnectSet=function(n,t,r){var i=this,o=be(t);this.server_.onDisconnectPut(n.toString(),o.val(!0),function(t,e){"ok"===t&&i.onDisconnect_.remember(n,o),i.callOnCompleteCallback(r,t,e)})},t.prototype.onDisconnectSetWithPriority=function(n,t,e,r){var i=this,o=be(t,e);this.server_.onDisconnectPut(n.toString(),o.val(!0),function(t,e){"ok"===t&&i.onDisconnect_.remember(n,o),i.callOnCompleteCallback(r,t,e)})},t.prototype.onDisconnectUpdate=function(r,n,i){var o=this;if(T(n))return tt("onDisconnect().update() called with empty data.  Don't do anything."),void this.callOnCompleteCallback(i,"ok");this.server_.onDisconnectMerge(r.toString(),n,function(t,e){"ok"===t&&b(n,function(t,e){var n=be(e);o.onDisconnect_.remember(r.child(t),n)}),o.callOnCompleteCallback(i,t,e)})},t.prototype.addEventCallbackForQuery=function(t,e){var n;n=".info"===t.path.getFront()?this.infoSyncTree_.addEventRegistration(t,e):this.serverSyncTree_.addEventRegistration(t,e),this.eventQueue_.raiseEventsAtPath(t.path,n)},t.prototype.removeEventCallbackForQuery=function(t,e){var n;n=".info"===t.path.getFront()?this.infoSyncTree_.removeEventRegistration(t,e):this.serverSyncTree_.removeEventRegistration(t,e),this.eventQueue_.raiseEventsAtPath(t.path,n)},t.prototype.interrupt=function(){this.persistentConnection_&&this.persistentConnection_.interrupt(On)},t.prototype.resume=function(){this.persistentConnection_&&this.persistentConnection_.resume(On)},t.prototype.stats=function(t){if(void 0===t&&(t=!1),"undefined"!=typeof console){var e;e=t?(this.statsListener_||(this.statsListener_=new fn(this.stats_)),this.statsListener_.get()):this.stats_.get();var r=Object.keys(e).reduce(function(t,e){return Math.max(e.length,t)},0);b(e,function(t,e){for(var n=t.length;n<r+2;n++)t+=" ";console.log(t+e)})}},t.prototype.statsIncrementCounter=function(t){this.stats_.incrementCounter(t),this.statsReporter_.includeStat(t)},t.prototype.log_=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="";this.persistentConnection_&&(n=this.persistentConnection_.id+":"),tt.apply(void 0,[n].concat(t))},t.prototype.callOnCompleteCallback=function(r,i,o){r&&vt(function(){if("ok"==i)r(null);else{var t=(i||"error").toUpperCase(),e=t;o&&(e+=": "+o);var n=new Error(e);n.code=t,r(n)}})},Object.defineProperty(t.prototype,"database",{get:function(){return this.__database||(this.__database=new Bn(this))},enumerable:!0,configurable:!0}),t}(),xn=function(){function e(t){this.indexedFilter_=new Xe(t.getIndex()),this.index_=t.getIndex(),this.startPost_=e.getStartPost_(t),this.endPost_=e.getEndPost_(t)}return e.prototype.getStartPost=function(){return this.startPost_},e.prototype.getEndPost=function(){return this.endPost_},e.prototype.matches=function(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0},e.prototype.updateChild=function(t,e,n,r,i,o){return this.matches(new Xt(e,n))||(n=Ce.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,r,i,o)},e.prototype.updateFullNode=function(t,e,n){e.isLeafNode()&&(e=Ce.EMPTY_NODE);var r=e.withIndex(this.index_);r=r.updatePriority(Ce.EMPTY_NODE);var i=this;return e.forEachChild(he,function(t,e){i.matches(new Xt(t,e))||(r=r.updateImmediateChild(t,Ce.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,r,n)},e.prototype.updatePriority=function(t,e){return t},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.indexedFilter_},e.prototype.getIndex=function(){return this.index_},e.getStartPost_=function(t){if(t.hasStart()){var e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()},e.getEndPost_=function(t){if(t.hasEnd()){var e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()},e}(),Fn=function(){function t(t){this.rangedFilter_=new xn(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}return t.prototype.updateChild=function(t,e,n,r,i,o){return this.rangedFilter_.matches(new Xt(e,n))||(n=Ce.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,r,i,o):this.fullLimitUpdateChild_(t,e,n,i,o)},t.prototype.updateFullNode=function(t,e,n){var r;if(e.isLeafNode()||e.isEmpty())r=Ce.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){r=Ce.EMPTY_NODE.withIndex(this.index_);var i=void 0;i=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var o=0;i.hasNext()&&o<this.limit_;){var s=i.getNext();if(!(this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0:this.index_.compare(s,this.rangedFilter_.getEndPost())<=0))break;r=r.updateImmediateChild(s.name,s.node),o++}}else{r=(r=e.withIndex(this.index_)).updatePriority(Ce.EMPTY_NODE);var a=void 0,h=void 0,u=void 0;i=void 0;if(this.reverse_){i=r.getReverseIterator(this.index_),a=this.rangedFilter_.getEndPost(),h=this.rangedFilter_.getStartPost();var l=this.index_.getCompare();u=function(t,e){return l(e,t)}}else i=r.getIterator(this.index_),a=this.rangedFilter_.getStartPost(),h=this.rangedFilter_.getEndPost(),u=this.index_.getCompare();o=0;for(var c=!1;i.hasNext();){s=i.getNext();!c&&u(a,s)<=0&&(c=!0),c&&o<this.limit_&&u(s,h)<=0?o++:r=r.updateImmediateChild(s.name,Ce.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,n)},t.prototype.updatePriority=function(t,e){return t},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},t.prototype.getIndex=function(){return this.index_},t.prototype.fullLimitUpdateChild_=function(t,e,n,r,i){var o;if(this.reverse_){var s=this.index_.getCompare();o=function(t,e){return s(e,t)}}else o=this.index_.getCompare();var a=t;C(a.numChildren()==this.limit_,"");var h=new Xt(e,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(h);if(a.hasChild(e)){for(var c=a.getImmediateChild(e),p=r.getChildAfterChild(this.index_,u,this.reverse_);null!=p&&(p.name==e||a.hasChild(p.name));)p=r.getChildAfterChild(this.index_,p,this.reverse_);var d=null==p?1:o(p,h);if(l&&!n.isEmpty()&&0<=d)return null!=i&&i.trackChildChange(Ge.childChangedChange(e,n,c)),a.updateImmediateChild(e,n);null!=i&&i.trackChildChange(Ge.childRemovedChange(e,c));var f=a.updateImmediateChild(e,Ce.EMPTY_NODE);return null!=p&&this.rangedFilter_.matches(p)?(null!=i&&i.trackChildChange(Ge.childAddedChange(p.name,p.node)),f.updateImmediateChild(p.name,p.node)):f}return n.isEmpty()?t:l&&0<=o(u,h)?(null!=i&&(i.trackChildChange(Ge.childRemovedChange(u.name,u.node)),i.trackChildChange(Ge.childAddedChange(e,n))),a.updateImmediateChild(e,n).updateImmediateChild(u.name,Ce.EMPTY_NODE)):t},t}(),An=function(){function r(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}return r.prototype.hasStart=function(){return this.startSet_},r.prototype.isViewFromLeft=function(){return""===this.viewFrom_?this.startSet_:this.viewFrom_===r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT},r.prototype.getIndexStartValue=function(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},r.prototype.getIndexStartName=function(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:st},r.prototype.hasEnd=function(){return this.endSet_},r.prototype.getIndexEndValue=function(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},r.prototype.getIndexEndName=function(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:at},r.prototype.hasLimit=function(){return this.limitSet_},r.prototype.hasAnchoredLimit=function(){return this.limitSet_&&""!==this.viewFrom_},r.prototype.getLimit=function(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_},r.prototype.getIndex=function(){return this.index_},r.prototype.copy_=function(){var t=new r;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t},r.prototype.limit=function(t){var e=this.copy_();return e.limitSet_=!0,e.limit_=t,e.viewFrom_="",e},r.prototype.limitToFirst=function(t){var e=this.copy_();return e.limitSet_=!0,e.limit_=t,e.viewFrom_=r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT,e},r.prototype.limitToLast=function(t){var e=this.copy_();return e.limitSet_=!0,e.limit_=t,e.viewFrom_=r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT,e},r.prototype.startAt=function(t,e){var n=this.copy_();return n.startSet_=!0,void 0===t&&(t=null),n.indexStartValue_=t,n.indexStartName_=null!=e?(n.startNameSet_=!0,e):(n.startNameSet_=!1,""),n},r.prototype.endAt=function(t,e){var n=this.copy_();return n.endSet_=!0,void 0===t&&(t=null),n.indexEndValue_=t,n.indexEndName_=void 0!==e?(n.endNameSet_=!0,e):(n.endNameSet_=!1,""),n},r.prototype.orderBy=function(t){var e=this.copy_();return e.index_=t,e},r.prototype.getQueryObject=function(){var t=r.WIRE_PROTOCOL_CONSTANTS_,e={};if(this.startSet_&&(e[t.INDEX_START_VALUE]=this.indexStartValue_,this.startNameSet_&&(e[t.INDEX_START_NAME]=this.indexStartName_)),this.endSet_&&(e[t.INDEX_END_VALUE]=this.indexEndValue_,this.endNameSet_&&(e[t.INDEX_END_NAME]=this.indexEndName_)),this.limitSet_){e[t.LIMIT]=this.limit_;var n=this.viewFrom_;""===n&&(n=this.isViewFromLeft()?t.VIEW_FROM_LEFT:t.VIEW_FROM_RIGHT),e[t.VIEW_FROM]=n}return this.index_!==he&&(e[t.INDEX]=this.index_.toString()),e},r.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},r.prototype.isDefault=function(){return this.loadsAllData()&&this.index_==he},r.prototype.getNodeFilter=function(){return this.loadsAllData()?new Xe(this.getIndex()):this.hasLimit()?new Fn(this):new xn(this)},r.prototype.toRestQueryStringParameters=function(){var t,e=r.REST_QUERY_CONSTANTS_,n={};return this.isDefault()||(t=this.index_===he?e.PRIORITY_INDEX:this.index_===Ne?e.VALUE_INDEX:this.index_===Zt?e.KEY_INDEX:(C(this.index_ instanceof Re,"Unrecognized index type!"),this.index_.toString()),n[e.ORDER_BY]=g(t),this.startSet_&&(n[e.START_AT]=g(this.indexStartValue_),this.startNameSet_&&(n[e.START_AT]+=","+g(this.indexStartName_))),this.endSet_&&(n[e.END_AT]=g(this.indexEndValue_),this.endNameSet_&&(n[e.END_AT]+=","+g(this.indexEndName_))),this.limitSet_&&(this.isViewFromLeft()?n[e.LIMIT_TO_FIRST]=this.limit_:n[e.LIMIT_TO_LAST]=this.limit_)),n},r.WIRE_PROTOCOL_CONSTANTS_={INDEX_START_VALUE:"sp",INDEX_START_NAME:"sn",INDEX_END_VALUE:"ep",INDEX_END_NAME:"en",LIMIT:"l",VIEW_FROM:"vf",VIEW_FROM_LEFT:"l",VIEW_FROM_RIGHT:"r",INDEX:"i"},r.REST_QUERY_CONSTANTS_={ORDER_BY:"orderBy",PRIORITY_INDEX:"$priority",VALUE_INDEX:"$value",KEY_INDEX:"$key",START_AT:"startAt",END_AT:"endAt",LIMIT_TO_FIRST:"limitToFirst",LIMIT_TO_LAST:"limitToLast"},r.DEFAULT=new r,r}(),Ln=function(n){function o(t,e){if(!(t instanceof kn))throw new Error("new Reference() no longer supported - use app.database().");return n.call(this,t,e,An.DEFAULT,!1)||this}return s(o,n),o.prototype.getKey=function(){return O("Reference.key",0,0,arguments.length),this.path.isEmpty()?null:this.path.getBack()},o.prototype.child=function(t){var e,n,r,i;return O("Reference.child",1,1,arguments.length),"number"==typeof t?t=String(t):t instanceof mt||(null===this.path.getFront()?(e="Reference.child",i=!(n=1),(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Bt(e,n,r,i)):Bt("Reference.child",1,t,!1)),new o(this.repo,this.path.child(t))},o.prototype.getParent=function(){O("Reference.parent",0,0,arguments.length);var t=this.path.parent();return null===t?null:new o(this.repo,t)},o.prototype.getRoot=function(){O("Reference.root",0,0,arguments.length);for(var t=this;null!==t.getParent();)t=t.getParent();return t},o.prototype.databaseProp=function(){return this.repo.database},o.prototype.set=function(t,e){O("Reference.set",1,2,arguments.length),jt("Reference.set",this.path),Wt("Reference.set",1,t,this.path,!1),x("Reference.set",2,e,!0);var n=new l;return this.repo.setWithPriority(this.path,t,null,n.wrapCallback(e)),n.promise},o.prototype.update=function(t,e){if(O("Reference.update",1,2,arguments.length),jt("Reference.update",this.path),Array.isArray(t)){for(var n={},r=0;r<t.length;++r)n[""+r]=t[r];t=n,it("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Qt("Reference.update",1,t,this.path,!1),x("Reference.update",2,e,!0);var i=new l;return this.repo.update(this.path,t,i.wrapCallback(e)),i.promise},o.prototype.setWithPriority=function(t,e,n){if(O("Reference.setWithPriority",2,3,arguments.length),jt("Reference.setWithPriority",this.path),Wt("Reference.setWithPriority",1,t,this.path,!1),Ut("Reference.setWithPriority",2,e,!1),x("Reference.setWithPriority",3,n,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.setWithPriority failed: "+this.getKey()+" is a read-only object.";var r=new l;return this.repo.setWithPriority(this.path,t,e,r.wrapCallback(n)),r.promise},o.prototype.remove=function(t){return O("Reference.remove",0,1,arguments.length),jt("Reference.remove",this.path),x("Reference.remove",1,t,!0),this.set(null,t)},o.prototype.transaction=function(t,r,e){if(O("Reference.transaction",1,3,arguments.length),jt("Reference.transaction",this.path),x("Reference.transaction",1,t,!1),x("Reference.transaction",2,r,!0),function(t,e,n,r){if((!r||void 0!==n)&&"boolean"!=typeof n)throw new Error(k(t,e,r)+"must be a boolean.")}("Reference.transaction",3,e,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.transaction failed: "+this.getKey()+" is a read-only object.";void 0===e&&(e=!0);var i=new l;"function"==typeof r&&i.promise.catch(function(){});return this.repo.startTransaction(this.path,t,function(t,e,n){t?i.reject(t):i.resolve(new zt(e,n)),"function"==typeof r&&r(t,e,n)},e),i.promise},o.prototype.setPriority=function(t,e){O("Reference.setPriority",1,2,arguments.length),jt("Reference.setPriority",this.path),Ut("Reference.setPriority",1,t,!1),x("Reference.setPriority",2,e,!0);var n=new l;return this.repo.setWithPriority(this.path.child(".priority"),t,null,n.wrapCallback(e)),n.promise},o.prototype.push=function(t,e){O("Reference.push",0,2,arguments.length),jt("Reference.push",this.path),Wt("Reference.push",1,t,this.path,!0),x("Reference.push",2,e,!0);var n,r=this.repo.serverTime(),i=Gt(r),o=this.child(i),s=this.child(i);return n=null!=t?o.set(t,e).then(function(){return s}):Promise.resolve(s),o.then=n.then.bind(n),o.catch=n.then.bind(n,void 0),"function"==typeof e&&n.catch(function(){}),o},o.prototype.onDisconnect=function(){return jt("Reference.onDisconnect",this.path),new Yt(this.repo,this.path)},Object.defineProperty(o.prototype,"database",{get:function(){return this.databaseProp()},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"key",{get:function(){return this.getKey()},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"parent",{get:function(){return this.getParent()},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"root",{get:function(){return this.getRoot()},enumerable:!0,configurable:!0}),o}(Fe);Fe.__referenceConstructor=Ln,on.__referenceConstructor=Ln;var Mn,Wn,qn=function(){this.children={},this.childCount=0,this.value=null},Qn=function(){function i(t,e,n){void 0===t&&(t=""),void 0===e&&(e=null),void 0===n&&(n=new qn),this.name_=t,this.parent_=e,this.node_=n}return i.prototype.subTree=function(t){for(var e,n=t instanceof mt?t:new mt(t),r=this;null!==(e=n.getFront());){r=new i(e,r,w(r.node_.children,e)||new qn),n=n.popFront()}return r},i.prototype.getValue=function(){return this.node_.value},i.prototype.setValue=function(t){C(void 0!==t,"Cannot set value to undefined"),this.node_.value=t,this.updateParents_()},i.prototype.clear=function(){this.node_.value=null,this.node_.children={},this.node_.childCount=0,this.updateParents_()},i.prototype.hasChildren=function(){return 0<this.node_.childCount},i.prototype.isEmpty=function(){return null===this.getValue()&&!this.hasChildren()},i.prototype.forEachChild=function(n){var r=this;b(this.node_.children,function(t,e){n(new i(t,r,e))})},i.prototype.forEachDescendant=function(e,t,n){t&&!n&&e(this),this.forEachChild(function(t){t.forEachDescendant(e,!0,n)}),t&&n&&e(this)},i.prototype.forEachAncestor=function(t,e){for(var n=e?this:this.parent();null!==n;){if(t(n))return!0;n=n.parent()}return!1},i.prototype.forEachImmediateDescendantWithValue=function(e){this.forEachChild(function(t){null!==t.getValue()?e(t):t.forEachImmediateDescendantWithValue(e)})},i.prototype.path=function(){return new mt(null===this.parent_?this.name_:this.parent_.path()+"/"+this.name_)},i.prototype.name=function(){return this.name_},i.prototype.parent=function(){return this.parent_},i.prototype.updateParents_=function(){null!==this.parent_&&this.parent_.updateChild_(this.name_,this)},i.prototype.updateChild_=function(t,e){var n=e.isEmpty(),r=E(this.node_.children,t);n&&r?(delete this.node_.children[t],this.node_.childCount--,this.updateParents_()):n||r||(this.node_.children[t]=e.node_,this.node_.childCount++,this.updateParents_())},i}();(Wn=Mn||(Mn={}))[Wn.RUN=0]="RUN",Wn[Wn.SENT=1]="SENT",Wn[Wn.COMPLETED=2]="COMPLETED",Wn[Wn.SENT_NEEDS_ABORT=3]="SENT_NEEDS_ABORT",Wn[Wn.NEEDS_ABORT=4]="NEEDS_ABORT",kn.MAX_TRANSACTION_RETRIES_=25,kn.prototype.transactions_init_=function(){this.transactionQueueTree_=new Qn},kn.prototype.startTransaction=function(t,e,n,r){this.log_("transaction on "+t);var i=function(){},o=new Ln(this,t);o.on("value",i);var s={path:t,update:e,onComplete:n,status:null,order:z(),applyLocally:r,retryCount:0,unwatcher:function(){o.off("value",i)},abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=this.getLatestState_(t);s.currentInputSnapshot=a;var h=s.update(a.val());if(void 0===h){if(s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete){var u=new Pe(s.currentInputSnapshot,new Ln(this,s.path),he);s.onComplete(null,!1,u)}}else{qt("transaction failed: Data returned ",h,s.path),s.status=Mn.RUN;var l=this.transactionQueueTree_.subTree(t),c=l.getValue()||[];c.push(s),l.setValue(c);var p=void 0;if("object"==typeof h&&null!==h&&E(h,".priority"))p=w(h,".priority"),C(Mt(p),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else p=(this.serverSyncTree_.calcCompleteEventCache(t)||Ce.EMPTY_NODE).getPriority().val();p=p;var d=this.generateServerValues(),f=be(h,p),_=We(f,d);s.currentOutputSnapshotRaw=f,s.currentOutputSnapshotResolved=_,s.currentWriteId=this.getNextWriteId_();var y=this.serverSyncTree_.applyUserOverwrite(t,_,s.currentWriteId,s.applyLocally);this.eventQueue_.raiseEventsForChangedPath(t,y),this.sendReadyTransactions_()}},kn.prototype.getLatestState_=function(t,e){return this.serverSyncTree_.calcCompleteEventCache(t,e)||Ce.EMPTY_NODE},kn.prototype.sendReadyTransactions_=function(t){var e=this;if(void 0===t&&(t=this.transactionQueueTree_),t||this.pruneCompletedTransactionsBelowNode_(t),null!==t.getValue()){var n=this.buildTransactionQueue_(t);C(0<n.length,"Sending zero length transaction queue"),n.every(function(t){return t.status===Mn.RUN})&&this.sendTransactionQueue_(t.path(),n)}else t.hasChildren()&&t.forEachChild(function(t){e.sendReadyTransactions_(t)})},kn.prototype.sendTransactionQueue_=function(a,h){for(var u=this,t=h.map(function(t){return t.currentWriteId}),e=this.getLatestState_(a,t),n=e,r=e.hash(),i=0;i<h.length;i++){var o=h[i];C(o.status===Mn.RUN,"tryToSendTransactionQueue_: items in queue should all be run."),o.status=Mn.SENT,o.retryCount++;var s=mt.relativePath(a,o.path);n=n.updateChild(s,o.currentOutputSnapshotRaw)}var l=n.val(!0),c=a;this.server_.put(c.toString(),l,function(t){u.log_("transaction put response",{path:c.toString(),status:t});var e=[];if("ok"===t){for(var n=[],r=0;r<h.length;r++){if(h[r].status=Mn.COMPLETED,e=e.concat(u.serverSyncTree_.ackUserWrite(h[r].currentWriteId)),h[r].onComplete){var i=h[r].currentOutputSnapshotResolved,o=new Ln(u,h[r].path),s=new Pe(i,o,he);n.push(h[r].onComplete.bind(null,null,!0,s))}h[r].unwatcher()}u.pruneCompletedTransactionsBelowNode_(u.transactionQueueTree_.subTree(a)),u.sendReadyTransactions_(),u.eventQueue_.raiseEventsForChangedPath(a,e);for(r=0;r<n.length;r++)vt(n[r])}else{if("datastale"===t)for(r=0;r<h.length;r++)h[r].status===Mn.SENT_NEEDS_ABORT?h[r].status=Mn.NEEDS_ABORT:h[r].status=Mn.RUN;else{it("transaction at "+c.toString()+" failed: "+t);for(r=0;r<h.length;r++)h[r].status=Mn.NEEDS_ABORT,h[r].abortReason=t}u.rerunTransactions_(a)}},r)},kn.prototype.rerunTransactions_=function(t){var e=this.getAncestorTransactionNode_(t),n=e.path(),r=this.buildTransactionQueue_(e);return this.rerunTransactionQueue_(r,n),n},kn.prototype.rerunTransactionQueue_=function(t,e){if(0!==t.length){for(var n,r=[],i=[],o=t.filter(function(t){return t.status===Mn.RUN}).map(function(t){return t.currentWriteId}),s=0;s<t.length;s++){var a=t[s],h=mt.relativePath(e,a.path),u=!1,l=void 0;if(C(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===Mn.NEEDS_ABORT)u=!0,l=a.abortReason,i=i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId,!0));else if(a.status===Mn.RUN)if(a.retryCount>=kn.MAX_TRANSACTION_RETRIES_)u=!0,l="maxretry",i=i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId,!0));else{var c=this.getLatestState_(a.path,o);a.currentInputSnapshot=c;var p=t[s].update(c.val());if(void 0!==p){qt("transaction failed: Data returned ",p,a.path);var d=be(p);"object"==typeof p&&null!=p&&E(p,".priority")||(d=d.updatePriority(c.getPriority()));var f=a.currentWriteId,_=this.generateServerValues(),y=We(d,_);a.currentOutputSnapshotRaw=d,a.currentOutputSnapshotResolved=y,a.currentWriteId=this.getNextWriteId_(),o.splice(o.indexOf(f),1),i=(i=i.concat(this.serverSyncTree_.applyUserOverwrite(a.path,y,a.currentWriteId,a.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(f,!0))}else u=!0,l="nodata",i=i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId,!0))}if(this.eventQueue_.raiseEventsForChangedPath(e,i),i=[],u&&(t[s].status=Mn.COMPLETED,n=t[s].unwatcher,setTimeout(n,Math.floor(0)),t[s].onComplete))if("nodata"===l){var v=new Ln(this,t[s].path),g=t[s].currentInputSnapshot,m=new Pe(g,v,he);r.push(t[s].onComplete.bind(null,null,!1,m))}else r.push(t[s].onComplete.bind(null,new Error(l),!1,null))}this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);for(s=0;s<r.length;s++)vt(r[s]);this.sendReadyTransactions_()}},kn.prototype.getAncestorTransactionNode_=function(t){for(var e,n=this.transactionQueueTree_;null!==(e=t.getFront())&&null===n.getValue();)n=n.subTree(e),t=t.popFront();return n},kn.prototype.buildTransactionQueue_=function(t){var e=[];return this.aggregateTransactionQueuesForNode_(t,e),e.sort(function(t,e){return t.order-e.order}),e},kn.prototype.aggregateTransactionQueuesForNode_=function(t,e){var n=this,r=t.getValue();if(null!==r)for(var i=0;i<r.length;i++)e.push(r[i]);t.forEachChild(function(t){n.aggregateTransactionQueuesForNode_(t,e)})},kn.prototype.pruneCompletedTransactionsBelowNode_=function(t){var e=this,n=t.getValue();if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==Mn.COMPLETED&&(n[r]=n[i],r++);n.length=r,t.setValue(0<n.length?n:null)}t.forEachChild(function(t){e.pruneCompletedTransactionsBelowNode_(t)})},kn.prototype.abortTransactions_=function(t){var e=this,n=this.getAncestorTransactionNode_(t).path(),r=this.transactionQueueTree_.subTree(t);return r.forEachAncestor(function(t){e.abortTransactionsOnNode_(t)}),this.abortTransactionsOnNode_(r),r.forEachDescendant(function(t){e.abortTransactionsOnNode_(t)}),n},kn.prototype.abortTransactionsOnNode_=function(t){var e=t.getValue();if(null!==e){for(var n=[],r=[],i=-1,o=0;o<e.length;o++)if(e[o].status===Mn.SENT_NEEDS_ABORT);else if(e[o].status===Mn.SENT)C(i===o-1,"All SENT items should be at beginning of queue."),e[i=o].status=Mn.SENT_NEEDS_ABORT,e[o].abortReason="set";else if(C(e[o].status===Mn.RUN,"Unexpected transaction status in abort"),e[o].unwatcher(),r=r.concat(this.serverSyncTree_.ackUserWrite(e[o].currentWriteId,!0)),e[o].onComplete){n.push(e[o].onComplete.bind(null,new Error("set"),!1,null))}-1===i?t.setValue(null):e.length=i+1,this.eventQueue_.raiseEventsForChangedPath(t.path(),r);for(o=0;o<n.length;o++)vt(n[o])}};var Un,Vn="databaseURL",Hn=function(){function t(){this.repos_={},this.useRestClient_=!1}return t.getInstance=function(){return Un||(Un=new t),Un},t.prototype.interrupt=function(){for(var t in this.repos_)for(var e in this.repos_[t])this.repos_[t][e].interrupt()},t.prototype.resume=function(){for(var t in this.repos_)for(var e in this.repos_[t])this.repos_[t][e].resume()},t.prototype.databaseFromApp=function(t,e){var n=e||t.options[Vn];void 0===n&&rt("Can't determine Firebase Database URL.  Be sure to include "+Vn+" option when calling firebase.initializeApp().");var r=Dt(n),i=r.repoInfo;return Kt("Invalid Firebase Database URL",1,r),r.path.isEmpty()||rt("Database URL must point to the root of a Firebase Database (not including a child path)."),this.createRepo(i,t).database},t.prototype.deleteRepo=function(t){var e=w(this.repos_,t.app.name);e&&w(e,t.repoInfo_.toURLString())===t||rt("Database "+t.app.name+"("+t.repoInfo_+") has already been deleted."),t.interrupt(),delete e[t.repoInfo_.toURLString()]},t.prototype.createRepo=function(t,e){var n=w(this.repos_,e.name);n||(n={},this.repos_[e.name]=n);var r=w(n,t.toURLString());return r&&rt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new kn(t,this.useRestClient_,e),n[t.toURLString()]=r},t.prototype.forceRestClient=function(t){this.useRestClient_=t},t}(),Bn=function(){function t(t){(this.repo_=t)instanceof kn||rt("Don't call new Database() directly - please use firebase.database()."),this.root_=new Ln(t,mt.Empty),this.INTERNAL=new jn(this)}return Object.defineProperty(t.prototype,"app",{get:function(){return this.repo_.app},enumerable:!0,configurable:!0}),t.prototype.ref=function(t){return this.checkDeleted_("ref"),O("database.ref",0,1,arguments.length),t instanceof Ln?this.refFromURL(t.toString()):void 0!==t?this.root_.child(t):this.root_},t.prototype.refFromURL=function(t){var e="database.refFromURL";this.checkDeleted_(e),O(e,1,1,arguments.length);var n=Dt(t);Kt(e,1,n);var r=n.repoInfo;return r.host!==this.repo_.repoInfo_.host&&rt(e+": Host name does not match the current database: (found "+r.host+" but expected "+this.repo_.repoInfo_.host+")"),this.ref(n.path.toString())},t.prototype.checkDeleted_=function(t){null===this.repo_&&rt("Cannot call "+t+" on a deleted database.")},t.prototype.goOffline=function(){O("database.goOffline",0,0,arguments.length),this.checkDeleted_("goOffline"),this.repo_.interrupt()},t.prototype.goOnline=function(){O("database.goOnline",0,0,arguments.length),this.checkDeleted_("goOnline"),this.repo_.resume()},t.ServerValue={TIMESTAMP:{".sv":"timestamp"}},t}(),jn=function(){function t(t){this.database=t}return t.prototype.delete=function(){return o=this,h=function(){return e(this,function(t){return this.database.checkDeleted_("delete"),Hn.getInstance().deleteRepo(this.database.repo_),this.database.repo_=null,this.database.root_=null,this.database.INTERNAL=null,this.database=null,[2]})},new((a=s=void 0)||(a=Promise))(function(t,e){function n(t){try{i(h.next(t))}catch(t){e(t)}}function r(t){try{i(h.throw(t))}catch(t){e(t)}}function i(e){e.done?t(e.value):new a(function(t){t(e.value)}).then(n,r)}i((h=h.apply(o,s||[])).next())});var o,s,a,h},t}(),Kn=Object.freeze({forceLongPolling:function(){Tn.forceDisallow(),wn.forceAllow()},forceWebSockets:function(){wn.forceDisallow()},isWebSocketsAvailable:function(){return Tn.isAvailable()},setSecurityDebugCallback:function(t,e){t.repo.persistentConnection_.securityDebugCallback_=e},stats:function(t,e){t.repo.stats(e)},statsIncrementCounter:function(t,e){t.repo.statsIncrementCounter(e)},dataUpdateCount:function(t){return t.repo.dataUpdateCount},interceptServerData:function(t,e){return t.repo.interceptServerData_(e)}}),Yn=Pn;Pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};var zn=Nn,Gn=St,Xn=Object.freeze({DataConnection:Yn,RealTimeConnection:zn,hijackHash:function(i){var o=Pn.prototype.put;return Pn.prototype.put=function(t,e,n,r){void 0!==r&&(r=i()),o.call(this,t,e,n,r)},function(){Pn.prototype.put=o}},ConnectionTarget:Gn,queryIdentifier:function(t){return t.queryIdentifier()},listens:function(t){return t.repo.persistentConnection_.listens_},forceRestClient:function(t){Hn.getInstance().forceRestClient(t)}}),$n=Bn.ServerValue;Jn.INTERNAL.registerService("database",function(t,e,n){return Hn.getInstance().databaseFromApp(t,n)},{Reference:Ln,Query:Fe,Database:Bn,DataSnapshot:Pe,enableLogging:Z,INTERNAL:Kn,ServerValue:$n,TEST_ACCESS:Xn},null,!0)}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-database - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-database.js.map

/**!

 @license
 handlebars v4.2.0

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(35);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(36);

	var _handlebarsCompilerCompiler = __webpack_require__(41);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(42);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(39);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(21);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(22);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(10);

	var _decorators = __webpack_require__(18);

	var _logger = __webpack_require__(20);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.2.0';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(7)['default'];

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(11);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(12);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(13);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(14);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(15);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(16);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(17);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    if (!obj) {
	      return obj;
	    }
	    if (field === 'constructor' && !obj.propertyIsEnumerable(field)) {
	      return undefined;
	    }
	    return obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(19);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(23)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	/**
	 * This is currently part of the official API, therefore implementation details should not be changed.
	 */

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(30).Object.seal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(26);

	__webpack_require__(27)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(28)
	  , core    = __webpack_require__(30)
	  , fails   = __webpack_require__(33);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(30)
	  , ctx       = __webpack_require__(31)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(37);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(38);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(40);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// File ignored in coverage tests via setting in .istanbul.yml
	/* Jison generated parser */
	"use strict";

	exports.__esModule = true;
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        strip(5, 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(39);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substring(1, token.length - 1);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0;

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(35);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      // the next line should use "Object.keys", but the code has been like this a long time and changing it, might
	      // cause backwards-compatibility issues... It's an old library...
	      // eslint-disable-next-line guard-for-in
	      for (var _name in knownHelpers) {
	        this.options.knownHelpers[_name] = knownHelpers[_name];
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  options = _utils.extend({}, options);
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(43);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (name === 'constructor') {
	      return ['(', parent, '.propertyIsEnumerable(\'constructor\') ? ', parent, '.constructor : undefined', ')'];
	    }
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;

function coDesExtract() {
    let searchParams = new URLSearchParams(window.location.search);
    let params = {};
    for (let pair of searchParams) {
        params[pair[0]] = pair[1];
    }
    return params;
}

class CoDesDB {
    constructor(url) {
        firebase.initializeApp({databaseURL: url});
        this.database = firebase.database();
    }

    download(path, callback) {
        this.database.ref(path).once('value').then(function(snapshot) {
            callback(snapshot.val());
        });
    }
}

function coDesConnect(url) {
    return new CoDesDB(url);
}

function coDesReplace(selector, context) {
    let element = document.querySelector(selector);
    let template = Handlebars.compile(element.innerHTML);
    element.innerHTML = template(context);
}
