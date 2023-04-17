(globalThis["webpackChunknew_project"]=globalThis["webpackChunknew_project"]||[]).push([[736],{5505:(e,t,n)=>{"use strict";n.d(t,{BH:()=>S,DV:()=>B,GJ:()=>V,L:()=>h,LL:()=>D,P0:()=>C,Sg:()=>T,UI:()=>H,US:()=>l,Wl:()=>q,Yr:()=>N,ZR:()=>P,aH:()=>E,b$:()=>I,cI:()=>M,dS:()=>J,eu:()=>R,g5:()=>s,gK:()=>Y,gQ:()=>Q,h$:()=>u,hl:()=>A,hu:()=>r,m9:()=>Z,p$:()=>f,r3:()=>U,uI:()=>x,ug:()=>X,vZ:()=>W,w9:()=>$,xO:()=>G,xb:()=>z});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,l=a?e[r+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,l=a?n[e.charAt(r)]:64;++r;const u=r<e.length,h=u?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==l||null==h)throw new c;const d=t<<2|o>>4;if(i.push(d),64!==l){const e=o<<4&240|l>>2;if(i.push(e),64!==h){const e=l<<6&192|h;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=o(e);return l.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&m(n)&&(e[n]=p(e[n],t[n]));return e}function m(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=()=>g().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process||"undefined"===typeof process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},_=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},b=()=>{try{return v()||y()||_()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},w=e=>{var t,n;return null===(n=null===(t=b())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},C=e=>{const t=w(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},E=()=>{var e;return null===(e=b())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function x(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function I(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function N(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function A(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class P extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?L(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new P(i,o,n);return a}}function L(e,t){return e.replace(F,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return JSON.parse(e)}function q(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=M(d(s[0])||""),n=M(d(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},$=function(e){const t=j(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},V=function(e){const t=j(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function H(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function W(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(K(n)&&K(s)){if(!W(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function K(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):u<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const e=(s<<5|s>>>27)+i+c+r+n[u]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function Y(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},X=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e){return e&&e._delegate?e._delegate:e}},9984:e=>{e.exports=function(e,t,n){const i=void 0!==e.__vccOpts?e.__vccOpts:e,r=i[t];if(void 0===r)i[t]=n;else for(const s in n)void 0===r[s]&&(r[s]=n[s])}},499:(e,t,n)=>{"use strict";n.d(t,{B:()=>o,Bj:()=>s,Fl:()=>Ke,IU:()=>Re,Jd:()=>T,PG:()=>xe,SU:()=>Ue,Um:()=>Se,WL:()=>ze,X$:()=>N,X3:()=>Ae,XI:()=>je,Xl:()=>Oe,dq:()=>Me,iH:()=>qe,j:()=>x,lk:()=>k,nZ:()=>l,qj:()=>Ee,qq:()=>w,yT:()=>Ne});var i=n(6970);let r;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=r,!e&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){r=this}off(){r=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e){return new s(e)}function a(e,t=r){t&&t.active&&t.effects.push(e)}function l(){return r}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&g)>0,h=e=>(e.n&g)>0,d=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];u(r)&&!h(r)?r.delete(e):t[n++]=r,r.w&=~g,r.n&=~g}t.length=n}},p=new WeakMap;let m=0,g=1;const v=30;let y;const _=Symbol(""),b=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=y,t=E;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,E=!0,g=1<<++m,m<=v?d(this):C(this),this.fn()}finally{m<=v&&f(this),g=1<<--m,y=this.parent,E=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(C(this),this.onStop&&this.onStop(),this.active=!1)}}function C(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const S=[];function T(){S.push(E),E=!1}function k(){const e=S.pop();E=void 0===e||e}function x(e,t,n){if(E&&y){let t=p.get(e);t||p.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=c());const r=void 0;I(i,r)}}function I(e,t){let n=!1;m<=v?h(e)||(e.n|=g,n=!u(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function N(e,t,n,r,s,o){const a=p.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,i.kJ)(e)){const e=Number(r);a.forEach(((t,n)=>{("length"===n||n>=e)&&l.push(t)}))}else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,i.kJ)(e)?(0,i.S0)(n)&&l.push(a.get("length")):(l.push(a.get(_)),(0,i._N)(e)&&l.push(a.get(b)));break;case"delete":(0,i.kJ)(e)||(l.push(a.get(_)),(0,i._N)(e)&&l.push(a.get(b)));break;case"set":(0,i._N)(e)&&l.push(a.get(_));break}if(1===l.length)l[0]&&A(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);A(c(e))}}function A(e,t){const n=(0,i.kJ)(e)?e:[...e];for(const i of n)i.computed&&R(i,t);for(const i of n)i.computed||R(i,t)}function R(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const O=(0,i.fY)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(i.yk)),D=$(),L=$(!1,!0),F=$(!0),M=q();function q(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Re(this);for(let t=0,r=this.length;t<r;t++)x(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(Re)):i}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){T();const n=Re(this)[t].apply(this,e);return k(),n}})),e}function j(e){const t=Re(this);return x(t,"has",e),t.hasOwnProperty(e)}function $(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&s===(e?t?be:_e:t?ye:ve).get(n))return n;const o=(0,i.kJ)(n);if(!e){if(o&&(0,i.RI)(M,r))return Reflect.get(M,r,s);if("hasOwnProperty"===r)return j}const a=Reflect.get(n,r,s);return((0,i.yk)(r)?P.has(r):O(r))?a:(e||x(n,"get",r),t?a:Me(a)?o&&(0,i.S0)(r)?a:a.value:(0,i.Kn)(a)?e?Te(a):Ee(a):a)}}const V=B(),U=B(!0);function B(e=!1){return function(t,n,r,s){let o=t[n];if(Ie(o)&&Me(o)&&!Me(r))return!1;if(!e&&(Ne(r)||Ie(r)||(o=Re(o),r=Re(r)),!(0,i.kJ)(t)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=(0,i.kJ)(t)&&(0,i.S0)(n)?Number(n)<t.length:(0,i.RI)(t,n),l=Reflect.set(t,n,r,s);return t===Re(s)&&(a?(0,i.aU)(r,o)&&N(t,"set",n,r,o):N(t,"add",n,r)),l}}function z(e,t){const n=(0,i.RI)(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&N(e,"delete",t,void 0,r),s}function H(e,t){const n=Reflect.has(e,t);return(0,i.yk)(t)&&P.has(t)||x(e,"has",t),n}function W(e){return x(e,"iterate",(0,i.kJ)(e)?"length":_),Reflect.ownKeys(e)}const K={get:D,set:V,deleteProperty:z,has:H,ownKeys:W},G={get:F,set(e,t){return!0},deleteProperty(e,t){return!0}},Q=(0,i.l7)({},K,{get:L,set:U}),Y=e=>e,J=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,i=!1){e=e["__v_raw"];const r=Re(e),s=Re(t);n||(t!==s&&x(r,"get",t),x(r,"get",s));const{has:o}=J(r),a=i?Y:n?De:Pe;return o.call(r,t)?a(e.get(t)):o.call(r,s)?a(e.get(s)):void(e!==r&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],i=Re(n),r=Re(e);return t||(e!==r&&x(i,"has",e),x(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function ee(e,t=!1){return e=e["__v_raw"],!t&&x(Re(e),"iterate",_),Reflect.get(e,"size",e)}function te(e){e=Re(e);const t=Re(this),n=J(t),i=n.has.call(t,e);return i||(t.add(e),N(t,"add",e,e)),this}function ne(e,t){t=Re(t);const n=Re(this),{has:r,get:s}=J(n);let o=r.call(n,e);o||(e=Re(e),o=r.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,i.aU)(t,a)&&N(n,"set",e,t,a):N(n,"add",e,t),this}function ie(e){const t=Re(this),{has:n,get:i}=J(t);let r=n.call(t,e);r||(e=Re(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,o=t.delete(e);return r&&N(t,"delete",e,void 0,s),o}function re(){const e=Re(this),t=0!==e.size,n=void 0,i=e.clear();return t&&N(e,"clear",void 0,void 0,n),i}function se(e,t){return function(n,i){const r=this,s=r["__v_raw"],o=Re(s),a=t?Y:e?De:Pe;return!e&&x(o,"iterate",_),s.forEach(((e,t)=>n.call(i,a(e),a(t),r)))}}function oe(e,t,n){return function(...r){const s=this["__v_raw"],o=Re(s),a=(0,i._N)(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=s[e](...r),h=n?Y:t?De:Pe;return!t&&x(o,"iterate",c?b:_),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function le(){const e={get(e){return X(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:ie,clear:re,forEach:se(!1,!1)},t={get(e){return X(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:ie,clear:re,forEach:se(!1,!0)},n={get(e){return X(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!1)},i={get(e){return X(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{e[r]=oe(r,!1,!1),n[r]=oe(r,!0,!1),t[r]=oe(r,!1,!0),i[r]=oe(r,!0,!0)})),[e,n,t,i]}const[ce,ue,he,de]=le();function fe(e,t){const n=t?e?de:he:e?ue:ce;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get((0,i.RI)(n,r)&&r in t?n:t,r,s)}const pe={get:fe(!1,!1)},me={get:fe(!1,!0)},ge={get:fe(!0,!1)};const ve=new WeakMap,ye=new WeakMap,_e=new WeakMap,be=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ce(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,i.W7)(e))}function Ee(e){return Ie(e)?e:ke(e,!1,K,pe,ve)}function Se(e){return ke(e,!1,Q,me,ye)}function Te(e){return ke(e,!0,G,ge,_e)}function ke(e,t,n,r,s){if(!(0,i.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Ce(e);if(0===a)return e;const l=new Proxy(e,2===a?r:n);return s.set(e,l),l}function xe(e){return Ie(e)?xe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ie(e){return!(!e||!e["__v_isReadonly"])}function Ne(e){return!(!e||!e["__v_isShallow"])}function Ae(e){return xe(e)||Ie(e)}function Re(e){const t=e&&e["__v_raw"];return t?Re(t):e}function Oe(e){return(0,i.Nj)(e,"__v_skip",!0),e}const Pe=e=>(0,i.Kn)(e)?Ee(e):e,De=e=>(0,i.Kn)(e)?Te(e):e;function Le(e){E&&y&&(e=Re(e),I(e.dep||(e.dep=c())))}function Fe(e,t){e=Re(e);const n=e.dep;n&&A(n)}function Me(e){return!(!e||!0!==e.__v_isRef)}function qe(e){return $e(e,!1)}function je(e){return $e(e,!0)}function $e(e,t){return Me(e)?e:new Ve(e,t)}class Ve{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Re(e),this._value=t?e:Pe(e)}get value(){return Le(this),this._value}set value(e){const t=this.__v_isShallow||Ne(e)||Ie(e);e=t?e:Re(e),(0,i.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Pe(e),Fe(this,e))}}function Ue(e){return Me(e)?e.value:e}const Be={get:(e,t,n)=>Ue(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function ze(e){return xe(e)?e:new Proxy(e,Be)}var He;class We{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[He]=!1,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Fe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const e=Re(this);return Le(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ke(e,t,n=!1){let r,s;const o=(0,i.mf)(e);o?(r=e,s=i.dG):(r=e.get,s=e.set);const a=new We(r,s,o||!s,n);return a}He="__v_isReadonly"},9835:(e,t,n)=>{"use strict";n.d(t,{$d:()=>o,Ah:()=>Ne,Cn:()=>F,FN:()=>kn,Fl:()=>Un,HY:()=>zt,JJ:()=>W,Jd:()=>Ie,Ko:()=>Be,Ob:()=>pe,P$:()=>ie,Q2:()=>$e,Q6:()=>ce,U2:()=>se,Uk:()=>pn,Us:()=>At,Wm:()=>un,Y3:()=>y,Y8:()=>ee,YP:()=>Q,_:()=>cn,aZ:()=>ue,bv:()=>Te,dD:()=>L,dl:()=>ge,f3:()=>K,h:()=>Bn,iD:()=>tn,ic:()=>xe,j4:()=>nn,kq:()=>gn,lR:()=>Ut,nK:()=>le,se:()=>ve,uE:()=>mn,up:()=>qe,w5:()=>M,wF:()=>Se,wg:()=>Yt,wy:()=>De});var i=n(499),r=n(6970);function s(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){a(s,t,n)}return r}function o(e,t,n,i){if((0,r.mf)(e)){const o=s(e,t,n,i);return o&&(0,r.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const l=[];for(let r=0;r<e.length;r++)l.push(o(e[r],t,n,i));return l}function a(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const r=t.proxy,o=n;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,o))return;i=i.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,r,o])}l(e,n,r,i)}function l(e,t,n,i=!0){console.error(e)}let c=!1,u=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(e){const t=v||g;return e?t.then(this?e.bind(this):e):t}function _(e){let t=d+1,n=h.length;while(t<n){const i=t+n>>>1,r=k(h[i]);r<e?t=i+1:n=i}return t}function b(e){h.length&&h.includes(e,c&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(_(e.id),0,e),w())}function w(){c||u||(u=!0,v=g.then(I))}function C(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,r.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),w()}function S(e,t=(c?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function T(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>k(e)-k(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const k=e=>null==e.id?1/0:e.id,x=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function I(e){u=!1,c=!0,h.sort(x);r.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,T(e),c=!1,v=null,(h.length||f.length)&&I(e)}}new Set;new Map;function N(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r.kT;let s=n;const a=t.startsWith("update:"),l=a&&t.slice(7);if(l&&l in i){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:o}=i[e]||r.kT;o&&(s=n.map((e=>(0,r.HD)(e)?e.trim():e))),t&&(s=n.map(r.h5))}let c;let u=i[c=(0,r.hR)(t)]||i[c=(0,r.hR)((0,r._A)(t))];!u&&a&&(u=i[c=(0,r.hR)((0,r.rs)(t))]),u&&o(u,e,6,s);const h=i[c+"Once"];if(h){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,o(h,e,6,s)}}function A(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},l=!1;if(!(0,r.mf)(e)){const i=e=>{const n=A(e,t,!0);n&&(l=!0,(0,r.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||l?((0,r.kJ)(o)?o.forEach((e=>a[e]=null)):(0,r.l7)(a,o),(0,r.Kn)(e)&&i.set(e,a),a):((0,r.Kn)(e)&&i.set(e,null),null)}function R(e,t){return!(!e||!(0,r.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,r.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,r.RI)(e,(0,r.rs)(t))||(0,r.RI)(e,t))}let O=null,P=null;function D(e){const t=O;return O=e,P=e&&e.type.__scopeId||null,t}function L(e){P=e}function F(){P=null}function M(e,t=O,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Zt(-1);const r=D(t);let s;try{s=e(...n)}finally{D(r),i._d&&Zt(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function q(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[l],slots:c,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,_;const b=D(e);try{if(4&n.shapeFlag){const e=s||i;y=vn(d.call(e,e,f,o,m,p,g)),_=u}else{const e=t;0,y=vn(e.length>1?e(o,{attrs:u,slots:c,emit:h}):e(o,null)),_=t.props?u:j(u)}}catch(C){Gt.length=0,a(C,e,1),y=un(Wt)}let w=y;if(_&&!1!==v){const e=Object.keys(_),{shapeFlag:t}=w;e.length&&7&t&&(l&&e.some(r.tR)&&(_=$(_,l)),w=fn(w,_))}return n.dirs&&(w=fn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,D(b),y}const j=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,r.F7)(n))&&((t||(t={}))[n]=e[n]);return t},$=(e,t)=>{const n={};for(const i in e)(0,r.tR)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function V(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||U(i,o,c):!!o);if(1024&l)return!0;if(16&l)return i?U(i,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!R(c,n))return!0}}return!1}function U(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!R(n,s))return!0}return!1}function B({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const z=e=>e.__isSuspense;function H(e,t){t&&t.pendingBranch?(0,r.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}function W(e,t){if(Tn){let n=Tn.provides;const i=Tn.parent&&Tn.parent.provides;i===n&&(n=Tn.provides=Object.create(i)),n[e]=t}else 0}function K(e,t,n=!1){const i=Tn||O;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,r.mf)(t)?t.call(i.proxy):t}else 0}const G={};function Q(e,t,n){return Y(e,t,n)}function Y(e,t,{immediate:n,deep:a,flush:l,onTrack:c,onTrigger:u}=r.kT){const h=(0,i.nZ)()===(null===Tn||void 0===Tn?void 0:Tn.scope)?Tn:null;let d,f,p=!1,m=!1;if((0,i.dq)(e)?(d=()=>e.value,p=(0,i.yT)(e)):(0,i.PG)(e)?(d=()=>e,a=!0):(0,r.kJ)(e)?(m=!0,p=e.some((e=>(0,i.PG)(e)||(0,i.yT)(e))),d=()=>e.map((e=>(0,i.dq)(e)?e.value:(0,i.PG)(e)?Z(e):(0,r.mf)(e)?s(e,h,2):void 0))):d=(0,r.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[v])}:r.dG,t&&a){const e=d;d=()=>Z(e())}let g,v=e=>{f=C.onStop=()=>{s(e,h,4)}};if(On){if(v=r.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,v]):d(),"sync"!==l)return r.dG;{const e=Hn();g=e.__watcherHandles||(e.__watcherHandles=[])}}let y=m?new Array(e.length).fill(G):G;const _=()=>{if(C.active)if(t){const e=C.run();(a||p||(m?e.some(((e,t)=>(0,r.aU)(e,y[t]))):(0,r.aU)(e,y)))&&(f&&f(),o(t,h,3,[e,y===G?void 0:m&&y[0]===G?[]:y,v]),y=e)}else C.run()};let w;_.allowRecurse=!!t,"sync"===l?w=_:"post"===l?w=()=>Nt(_,h&&h.suspense):(_.pre=!0,h&&(_.id=h.uid),w=()=>b(_));const C=new i.qq(d,w);t?n?_():y=C.run():"post"===l?Nt(C.run.bind(C),h&&h.suspense):C.run();const E=()=>{C.stop(),h&&h.scope&&(0,r.Od)(h.scope.effects,C)};return g&&g.push(E),E}function J(e,t,n){const i=this.proxy,s=(0,r.HD)(e)?e.includes(".")?X(i,e):()=>i[e]:e.bind(i,i);let o;(0,r.mf)(t)?o=t:(o=t.handler,n=t);const a=Tn;xn(this);const l=Y(s,o.bind(i),n);return a?xn(a):In(),l}function X(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Z(e,t){if(!(0,r.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,i.dq)(e))Z(e.value,t);else if((0,r.kJ)(e))for(let n=0;n<e.length;n++)Z(e[n],t);else if((0,r.DM)(e)||(0,r._N)(e))e.forEach((e=>{Z(e,t)}));else if((0,r.PO)(e))for(const n in e)Z(e[n],t);return e}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Te((()=>{e.isMounted=!0})),Ie((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},setup(e,{slots:t}){const n=kn(),r=ee();let s;return()=>{const o=t.default&&ce(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Wt){0,a=t,e=!0;break}}const l=(0,i.IU)(e),{mode:c}=l;if(r.isLeaving)return oe(a);const u=ae(a);if(!u)return oe(a);const h=se(u,l,r,n);le(u,h);const d=n.subTree,f=d&&ae(d);let p=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Wt&&(!sn(u,f)||p)){const e=se(f,l,r,n);if(le(f,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,!1!==n.update.active&&n.update()},oe(a);"in-out"===c&&u.type!==Wt&&(e.delayLeave=(e,t,n)=>{const i=re(r,f);i[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ie=ne;function re(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function se(e,t,n,i){const{appear:s,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:b}=t,w=String(e.key),C=re(n,e),E=(e,t)=>{e&&o(e,i,9,t)},S=(e,t)=>{const n=t[1];E(e,t),(0,r.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},T={mode:a,persisted:l,beforeEnter(t){let i=c;if(!n.isMounted){if(!s)return;i=v||c}t._leaveCb&&t._leaveCb(!0);const r=C[w];r&&sn(e,r)&&r.el._leaveCb&&r.el._leaveCb(),E(i,[t])},enter(e){let t=u,i=h,r=d;if(!n.isMounted){if(!s)return;t=y||u,i=_||h,r=b||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,E(t?r:i,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,a]):a()},leave(t,i){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();E(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,i(),E(n?g:m,[t]),t._leaveCb=void 0,C[r]===e&&delete C[r])};C[r]=e,p?S(p,[t,o]):o()},clone(e){return se(e,t,n,i)}};return T}function oe(e){if(de(e))return e=fn(e),e.children=null,e}function ae(e){return de(e)?e.children?e.children[0]:void 0:e}function le(e,t){6&e.shapeFlag&&e.component?le(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ce(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===zt?(128&o.patchFlag&&r++,i=i.concat(ce(o.children,t,a))):(t||o.type!==Wt)&&i.push(null!=a?fn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ue(e){return(0,r.mf)(e)?{setup:e,name:e.name}:e}const he=e=>!!e.type.__asyncLoader;const de=e=>e.type.__isKeepAlive,fe={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=kn(),i=n.ctx;if(!i.renderer)return()=>{const e=t.default&&t.default();return e&&1===e.length?e[0]:e};const s=new Map,o=new Set;let a=null;const l=n.suspense,{renderer:{p:c,m:u,um:h,o:{createElement:d}}}=i,f=d("div");function p(e){be(e),h(e,n,l,!0)}function m(e){s.forEach(((t,n)=>{const i=$n(t.type);!i||e&&e(i)||g(n)}))}function g(e){const t=s.get(e);a&&sn(t,a)?a&&be(a):p(t),s.delete(e),o.delete(e)}i.activate=(e,t,n,i,s)=>{const o=e.component;u(e,t,n,0,l),c(o.vnode,e,t,n,o,l,i,e.slotScopeIds,s),Nt((()=>{o.isDeactivated=!1,o.a&&(0,r.ir)(o.a);const t=e.props&&e.props.onVnodeMounted;t&&wn(t,o.parent,e)}),l)},i.deactivate=e=>{const t=e.component;u(e,f,null,1,l),Nt((()=>{t.da&&(0,r.ir)(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&wn(n,t.parent,e),t.isDeactivated=!0}),l)},Q((()=>[e.include,e.exclude]),(([e,t])=>{e&&m((t=>me(e,t))),t&&m((e=>!me(t,e)))}),{flush:"post",deep:!0});let v=null;const y=()=>{null!=v&&s.set(v,we(n.subTree))};return Te(y),xe(y),Ie((()=>{s.forEach((e=>{const{subTree:t,suspense:i}=n,r=we(t);if(e.type!==r.type||e.key!==r.key)p(e);else{be(r);const e=r.component.da;e&&Nt(e,i)}}))})),()=>{if(v=null,!t.default)return null;const n=t.default(),i=n[0];if(n.length>1)return a=null,n;if(!rn(i)||!(4&i.shapeFlag)&&!(128&i.shapeFlag))return a=null,i;let r=we(i);const l=r.type,c=$n(he(r)?r.type.__asyncResolved||{}:l),{include:u,exclude:h,max:d}=e;if(u&&(!c||!me(u,c))||h&&c&&me(h,c))return a=r,i;const f=null==r.key?l:r.key,p=s.get(f);return r.el&&(r=fn(r),128&i.shapeFlag&&(i.ssContent=r)),v=f,p?(r.el=p.el,r.component=p.component,r.transition&&le(r,r.transition),r.shapeFlag|=512,o.delete(f),o.add(f)):(o.add(f),d&&o.size>parseInt(d,10)&&g(o.values().next().value)),r.shapeFlag|=256,a=r,z(i.type)?i:r}}},pe=fe;function me(e,t){return(0,r.kJ)(e)?e.some((e=>me(e,t))):(0,r.HD)(e)?e.split(",").includes(t):!!(0,r.Kj)(e)&&e.test(t)}function ge(e,t){ye(e,"a",t)}function ve(e,t){ye(e,"da",t)}function ye(e,t,n=Tn){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ce(t,i,n),n){let e=n.parent;while(e&&e.parent)de(e.parent.vnode)&&_e(i,t,n,e),e=e.parent}}function _e(e,t,n,i){const s=Ce(t,e,i,!0);Ne((()=>{(0,r.Od)(i[t],s)}),n)}function be(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function we(e){return 128&e.shapeFlag?e.ssContent:e}function Ce(e,t,n=Tn,r=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;(0,i.Jd)(),xn(n);const s=o(t,n,e,r);return In(),(0,i.lk)(),s});return r?s.unshift(a):s.push(a),a}}const Ee=e=>(t,n=Tn)=>(!On||"sp"===e)&&Ce(e,((...e)=>t(...e)),n),Se=Ee("bm"),Te=Ee("m"),ke=Ee("bu"),xe=Ee("u"),Ie=Ee("bum"),Ne=Ee("um"),Ae=Ee("sp"),Re=Ee("rtg"),Oe=Ee("rtc");function Pe(e,t=Tn){Ce("ec",e,t)}function De(e,t){const n=O;if(null===n)return e;const i=jn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=r.kT]=t[o];e&&((0,r.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Z(n),s.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:l}))}return e}function Le(e,t,n,r){const s=e.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const c=s[l];a&&(c.oldValue=a[l].value);let u=c.dir[r];u&&((0,i.Jd)(),o(u,n,8,[e.el,c,e,t]),(0,i.lk)())}}const Fe="components",Me="directives";function qe(e,t){return Ve(Fe,e,!0,t)||e}const je=Symbol();function $e(e){return Ve(Me,e)}function Ve(e,t,n=!0,i=!1){const s=O||Tn;if(s){const n=s.type;if(e===Fe){const e=$n(n,!1);if(e&&(e===t||e===(0,r._A)(t)||e===(0,r.kC)((0,r._A)(t))))return n}const o=Ue(s[e]||n[e],t)||Ue(s.appContext[e],t);return!o&&i?n:o}}function Ue(e,t){return e&&(e[t]||e[(0,r._A)(t)]||e[(0,r.kC)((0,r._A)(t))])}function Be(e,t,n,i){let s;const o=n&&n[i];if((0,r.kJ)(e)||(0,r.HD)(e)){s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,r.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=t(e[r],r,i,o&&o[i])}}else s=[];return n&&(n[i]=s),s}const ze=e=>e?Nn(e)?jn(e)||e.proxy:ze(e.parent):null,He=(0,r.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ze(e.parent),$root:e=>ze(e.root),$emit:e=>e.emit,$options:e=>Ze(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>J.bind(e)}),We=(e,t)=>e!==r.kT&&!e.__isScriptSetup&&(0,r.RI)(e,t),Ke={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:c,appContext:u}=e;let h;if("$"!==t[0]){const i=l[t];if(void 0!==i)switch(i){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(We(s,t))return l[t]=1,s[t];if(o!==r.kT&&(0,r.RI)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,r.RI)(h,t))return l[t]=3,a[t];if(n!==r.kT&&(0,r.RI)(n,t))return l[t]=4,n[t];Ge&&(l[t]=0)}}const d=He[t];let f,p;return d?("$attrs"===t&&(0,i.j)(e,"get",t),d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==r.kT&&(0,r.RI)(n,t)?(l[t]=4,n[t]):(p=u.config.globalProperties,(0,r.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return We(s,t)?(s[t]=n,!0):i!==r.kT&&(0,r.RI)(i,t)?(i[t]=n,!0):!(0,r.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==r.kT&&(0,r.RI)(e,a)||We(t,a)||(l=o[0])&&(0,r.RI)(l,a)||(0,r.RI)(i,a)||(0,r.RI)(He,a)||(0,r.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,r.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ge=!0;function Qe(e){const t=Ze(e),n=e.proxy,s=e.ctx;Ge=!1,t.beforeCreate&&Je(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:C,render:E,renderTracked:S,renderTriggered:T,errorCaptured:k,serverPrefetch:x,expose:I,inheritAttrs:N,components:A,directives:R,filters:O}=t,P=null;if(h&&Ye(h,s,P,e.appContext.config.unwrapInjectedRef),l)for(const i in l){const e=l[i];(0,r.mf)(e)&&(s[i]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,r.Kn)(t)&&(e.data=(0,i.qj)(t))}if(Ge=!0,a)for(const i in a){const e=a[i],t=(0,r.mf)(e)?e.bind(n,n):(0,r.mf)(e.get)?e.get.bind(n,n):r.dG;0;const o=!(0,r.mf)(e)&&(0,r.mf)(e.set)?e.set.bind(n):r.dG,l=Un({get:t,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const i in c)Xe(c[i],s,n,i);if(u){const e=(0,r.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{W(t,e[t])}))}function D(e,t){(0,r.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Je(d,e,"c"),D(Se,f),D(Te,p),D(ke,m),D(xe,g),D(ge,v),D(ve,y),D(Pe,k),D(Oe,S),D(Re,T),D(Ie,b),D(Ne,C),D(Ae,x),(0,r.kJ)(I))if(I.length){const t=e.exposed||(e.exposed={});I.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===r.dG&&(e.render=E),null!=N&&(e.inheritAttrs=N),A&&(e.components=A),R&&(e.directives=R)}function Ye(e,t,n=r.dG,s=!1){(0,r.kJ)(e)&&(e=rt(e));for(const o in e){const n=e[o];let a;a=(0,r.Kn)(n)?"default"in n?K(n.from||o,n.default,!0):K(n.from||o):K(n),(0,i.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Je(e,t,n){o((0,r.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Xe(e,t,n,i){const s=i.includes(".")?X(n,i):()=>n[i];if((0,r.HD)(e)){const n=t[e];(0,r.mf)(n)&&Q(s,n)}else if((0,r.mf)(e))Q(s,e.bind(n));else if((0,r.Kn)(e))if((0,r.kJ)(e))e.forEach((e=>Xe(e,t,n,i)));else{const i=(0,r.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,r.mf)(i)&&Q(s,i,e)}else 0}function Ze(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,l=o.get(t);let c;return l?c=l:s.length||n||i?(c={},s.length&&s.forEach((e=>et(c,e,a,!0))),et(c,t,a)):c=t,(0,r.Kn)(t)&&o.set(t,c),c}function et(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&et(e,s,n,!0),r&&r.forEach((t=>et(e,t,n,!0)));for(const o in t)if(i&&"expose"===o);else{const i=tt[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const tt={data:nt,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:ot,directives:ot,watch:at,provide:nt,inject:it};function nt(e,t){return t?e?function(){return(0,r.l7)((0,r.mf)(e)?e.call(this,this):e,(0,r.mf)(t)?t.call(this,this):t)}:t:e}function it(e,t){return ot(rt(e),rt(t))}function rt(e){if((0,r.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function st(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?(0,r.l7)((0,r.l7)(Object.create(null),e),t):t}function at(e,t){if(!e)return t;if(!t)return e;const n=(0,r.l7)(Object.create(null),e);for(const i in t)n[i]=st(e[i],t[i]);return n}function lt(e,t,n,s=!1){const o={},a={};(0,r.Nj)(a,on,1),e.propsDefaults=Object.create(null),ut(e,t,o,a);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:(0,i.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function ct(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,c=(0,i.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||l>0)||16&l){let i;ut(e,t,o,a)&&(h=!0);for(const s in c)t&&((0,r.RI)(t,s)||(i=(0,r.rs)(s))!==s&&(0,r.RI)(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=ht(u,c,s,void 0,e,!0)):delete o[s]);if(a!==c)for(const e in a)t&&(0,r.RI)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(R(e.emitsOptions,s))continue;const l=t[s];if(u)if((0,r.RI)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const t=(0,r._A)(s);o[t]=ht(u,c,t,l,e,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,i.X$)(e,"set","$attrs")}function ut(e,t,n,s){const[o,a]=e.propsOptions;let l,c=!1;if(t)for(let i in t){if((0,r.Gg)(i))continue;const u=t[i];let h;o&&(0,r.RI)(o,h=(0,r._A)(i))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:R(e.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,c=!0)}if(a){const t=(0,i.IU)(n),s=l||r.kT;for(let i=0;i<a.length;i++){const l=a[i];n[l]=ht(o,t,l,s[l],e,!(0,r.RI)(s,l))}}return c}function ht(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=(0,r.RI)(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&(0,r.mf)(e)){const{propsDefaults:r}=s;n in r?i=r[n]:(xn(s),i=r[n]=e.call(null,t),In())}else i=e}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==(0,r.rs)(n)||(i=!0))}return i}function dt(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},l=[];let c=!1;if(!(0,r.mf)(e)){const i=e=>{c=!0;const[n,i]=dt(e,t,!0);(0,r.l7)(a,n),i&&l.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!c)return(0,r.Kn)(e)&&i.set(e,r.Z6),r.Z6;if((0,r.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,r._A)(o[h]);ft(e)&&(a[e]=r.kT)}else if(o){0;for(const e in o){const t=(0,r._A)(e);if(ft(t)){const n=o[e],i=a[t]=(0,r.kJ)(n)||(0,r.mf)(n)?{type:n}:Object.assign({},n);if(i){const e=gt(Boolean,i.type),n=gt(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||(0,r.RI)(i,"default"))&&l.push(t)}}}}const u=[a,l];return(0,r.Kn)(e)&&i.set(e,u),u}function ft(e){return"$"!==e[0]}function pt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function mt(e,t){return pt(e)===pt(t)}function gt(e,t){return(0,r.kJ)(t)?t.findIndex((t=>mt(t,e))):(0,r.mf)(t)&&mt(t,e)?0:-1}const vt=e=>"_"===e[0]||"$stable"===e,yt=e=>(0,r.kJ)(e)?e.map(vn):[vn(e)],_t=(e,t,n)=>{if(t._n)return t;const i=M(((...e)=>yt(t(...e))),n);return i._c=!1,i},bt=(e,t,n)=>{const i=e._ctx;for(const s in e){if(vt(s))continue;const n=e[s];if((0,r.mf)(n))t[s]=_t(s,n,i);else if(null!=n){0;const e=yt(n);t[s]=()=>e}}},wt=(e,t)=>{const n=yt(t);e.slots.default=()=>n},Ct=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,i.IU)(t),(0,r.Nj)(t,"_",n)):bt(t,e.slots={})}else e.slots={},t&&wt(e,t);(0,r.Nj)(e.slots,on,1)},Et=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r.kT;if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,r.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,bt(t,s)),a=t}else t&&(wt(e,t),a={default:1});if(o)for(const r in s)vt(r)||r in a||delete s[r]};function St(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tt=0;function kt(e,t){return function(n,i=null){(0,r.mf)(n)||(n=Object.assign({},n)),null==i||(0,r.Kn)(i)||(i=null);const s=St(),o=new Set;let a=!1;const l=s.app={_uid:Tt++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Wn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,r.mf)(e.install)?(o.add(e),e.install(l,...t)):(0,r.mf)(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(r,o,c){if(!a){0;const u=un(n,i);return u.appContext=s,o&&t?t(u,r):e(u,r,c),a=!0,l._container=r,r.__vue_app__=l,jn(u.component)||u.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l}};return l}}function xt(e,t,n,o,a=!1){if((0,r.kJ)(e))return void e.forEach(((e,i)=>xt(e,t&&((0,r.kJ)(t)?t[i]:t),n,o,a)));if(he(o)&&!a)return;const l=4&o.shapeFlag?jn(o.component)||o.component.proxy:o.el,c=a?null:l,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===r.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,r.HD)(d)?(f[d]=null,(0,r.RI)(p,d)&&(p[d]=null)):(0,i.dq)(d)&&(d.value=null)),(0,r.mf)(h))s(h,u,12,[c,f]);else{const t=(0,r.HD)(h),s=(0,i.dq)(h);if(t||s){const i=()=>{if(e.f){const n=t?(0,r.RI)(p,h)?p[h]:f[h]:h.value;a?(0,r.kJ)(n)&&(0,r.Od)(n,l):(0,r.kJ)(n)?n.includes(l)||n.push(l):t?(f[h]=[l],(0,r.RI)(p,h)&&(p[h]=f[h])):(h.value=[l],e.k&&(f[e.k]=h.value))}else t?(f[h]=c,(0,r.RI)(p,h)&&(p[h]=c)):s&&(h.value=c,e.k&&(f[e.k]=c))};c?(i.id=-1,Nt(i,n)):i()}else 0}}function It(){}const Nt=H;function At(e){return Rt(e)}function Rt(e,t){It();const n=(0,r.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=r.dG,insertStaticContent:g}=e,v=(e,t,n,i=null,r=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!sn(e,t)&&(i=X(e),K(e,r,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Ht:y(e,t,n,i);break;case Wt:_(e,t,n,i);break;case Kt:null==e&&w(t,n,i,o);break;case zt:D(e,t,n,i,r,s,o,a,l);break;default:1&h?x(e,t,n,i,r,s,o,a,l):6&h?L(e,t,n,i,r,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,i,r,s,o,a,l,ee)}null!=u&&r&&xt(u,e&&e.ref,s,t||e,!t)},y=(e,t,n,i)=>{if(null==e)s(t.el=c(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},_=(e,t,n,i)=>{null==e?s(t.el=u(t.children||""),n,i):t.el=e.el},w=(e,t,n,i)=>{[e.el,e.anchor]=g(e.children,t,n,i,e.el,e.anchor)},E=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=p(e),s(e,n,i),e=r;s(t,n,i)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},x=(e,t,n,i,r,s,o,a,l)=>{o=o||"svg"===t.type,null==e?I(t,n,i,r,s,o,a,l):R(e,t,r,s,o,a,l)},I=(e,t,n,i,o,c,u,h)=>{let f,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:_}=e;if(f=e.el=l(e.type,c,g&&g.is,g),8&v?d(f,e.children):16&v&&A(e.children,f,null,i,o,c&&"foreignObject"!==m,u,h),_&&Le(e,null,i,"created"),N(f,e,e.scopeId,u,i),g){for(const t in g)"value"===t||(0,r.Gg)(t)||a(f,t,null,g[t],c,e.children,i,o,J);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&wn(p,i,e)}_&&Le(e,null,i,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;b&&y.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||b||_)&&Nt((()=>{p&&wn(p,i,e),b&&y.enter(f),_&&Le(e,null,i,"mounted")}),o)},N=(e,t,n,i,r)=>{if(n&&m(e,n),i)for(let s=0;s<i.length;s++)m(e,i[s]);if(r){let n=r.subTree;if(t===n){const t=r.vnode;N(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},A=(e,t,n,i,r,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?yn(e[c]):vn(e[c]);v(null,l,t,n,i,r,s,o,a)}},R=(e,t,n,i,s,o,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||r.kT,m=t.props||r.kT;let g;n&&Ot(n,!1),(g=m.onVnodeBeforeUpdate)&&wn(g,n,t,e),f&&Le(t,e,n,"beforeUpdate"),n&&Ot(n,!0);const v=s&&"foreignObject"!==t.type;if(h?O(e.dynamicChildren,h,c,n,i,v,o):l||U(e,t,c,null,n,i,v,o,!1),u>0){if(16&u)P(c,t,p,m,n,i,s);else if(2&u&&p.class!==m.class&&a(c,"class",null,m.class,s),4&u&&a(c,"style",p.style,m.style,s),8&u){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const o=r[t],l=p[o],u=m[o];u===l&&"value"!==o||a(c,o,l,u,s,e.children,n,i,J)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=h||P(c,t,p,m,n,i,s);((g=m.onVnodeUpdated)||f)&&Nt((()=>{g&&wn(g,n,t,e),f&&Le(t,e,n,"updated")}),i)},O=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===zt||!sn(l,c)||70&l.shapeFlag)?f(l.el):n;v(l,c,u,null,i,r,s,o,!0)}},P=(e,t,n,i,s,o,l)=>{if(n!==i){if(n!==r.kT)for(const c in n)(0,r.Gg)(c)||c in i||a(e,c,n[c],null,l,t.children,s,o,J);for(const c in i){if((0,r.Gg)(c))continue;const u=i[c],h=n[c];u!==h&&"value"!==c&&a(e,c,h,u,l,t.children,s,o,J)}"value"in i&&a(e,"value",n.value,i.value)}},D=(e,t,n,i,r,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(s(h,n,i),s(d,n,i),A(t.children,n,d,r,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,n,r,o,a,l),(null!=t.key||r&&t===r.subTree)&&Pt(e,t,!0)):U(e,t,n,d,r,o,a,l,u)},L=(e,t,n,i,r,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,l):F(t,n,i,r,s,o,l):M(e,t,l)},F=(e,t,n,i,r,s,o)=>{const a=e.component=Sn(e,i,r);if(de(e)&&(a.ctx.renderer=ee),Pn(a),a.asyncDep){if(r&&r.registerDep(a,j),!e.el){const e=a.subTree=un(Wt);_(null,e,t,n)}}else j(a,e,t,n,r,s,o)},M=(e,t,n)=>{const i=t.component=e.component;if(V(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void $(i,t,n);i.next=t,C(i.update),i.update()}else t.el=e.el,i.vnode=t},j=(e,t,n,s,o,a,l)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:s,parent:c,vnode:u}=e,h=n;0,Ot(e,!1),n?(n.el=u.el,$(e,n,l)):n=u,i&&(0,r.ir)(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&wn(t,c,n,u),Ot(e,!0);const d=q(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),X(p),e,o,a),n.el=d.el,null===h&&B(e,d.el),s&&Nt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Nt((()=>wn(t,c,n,u)),o)}else{let i;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,f=he(t);if(Ot(e,!1),u&&(0,r.ir)(u),!f&&(i=c&&c.onVnodeBeforeMount)&&wn(i,d,t),Ot(e,!0),l&&ne){const n=()=>{e.subTree=q(e),ne(l,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const i=e.subTree=q(e);0,v(null,i,n,s,e,o,a),t.el=i.el}if(h&&Nt(h,o),!f&&(i=c&&c.onVnodeMounted)){const e=t;Nt((()=>wn(i,d,e)),o)}(256&t.shapeFlag||d&&he(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Nt(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new i.qq(c,(()=>b(h)),e.scope),h=e.update=()=>u.run();h.id=e.uid,Ot(e,!0),h()},$=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,ct(e,t.props,r,n),Et(e,t.children,n),(0,i.Jd)(),S(),(0,i.lk)()},U=(e,t,n,i,r,s,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(c,h,n,i,r,s,o,a,l);if(256&f)return void z(c,h,n,i,r,s,o,a,l)}8&p?(16&u&&J(c,r,s),h!==c&&d(n,h)):16&u?16&p?H(c,h,n,i,r,s,o,a,l):J(c,r,s,!0):(8&u&&d(n,""),16&p&&A(h,n,i,r,s,o,a,l))},z=(e,t,n,i,s,o,a,l,c)=>{e=e||r.Z6,t=t||r.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const i=t[f]=c?yn(t[f]):vn(t[f]);v(e[f],i,n,null,s,o,a,l,c)}u>h?J(e,s,o,!0,!1,d):A(t,n,i,s,o,a,l,c,d)},H=(e,t,n,i,s,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const i=e[u],r=t[u]=c?yn(t[u]):vn(t[u]);if(!sn(i,r))break;v(i,r,n,null,s,o,a,l,c),u++}while(u<=d&&u<=f){const i=e[d],r=t[f]=c?yn(t[f]):vn(t[f]);if(!sn(i,r))break;v(i,r,n,null,s,o,a,l,c),d--,f--}if(u>d){if(u<=f){const e=f+1,r=e<h?t[e].el:i;while(u<=f)v(null,t[u]=c?yn(t[u]):vn(t[u]),n,r,s,o,a,l,c),u++}}else if(u>f)while(u<=d)K(e[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=c?yn(t[u]):vn(t[u]);null!=e.key&&g.set(e.key,u)}let y,_=0;const b=f-m+1;let w=!1,C=0;const E=new Array(b);for(u=0;u<b;u++)E[u]=0;for(u=p;u<=d;u++){const i=e[u];if(_>=b){K(i,s,o,!0);continue}let r;if(null!=i.key)r=g.get(i.key);else for(y=m;y<=f;y++)if(0===E[y-m]&&sn(i,t[y])){r=y;break}void 0===r?K(i,s,o,!0):(E[r-m]=u+1,r>=C?C=r:w=!0,v(i,t[r],n,null,s,o,a,l,c),_++)}const S=w?Dt(E):r.Z6;for(y=S.length-1,u=b-1;u>=0;u--){const e=m+u,r=t[e],d=e+1<h?t[e+1].el:i;0===E[u]?v(null,r,n,d,s,o,a,l,c):w&&(y<0||u!==S[y]?W(r,n,d,2):y--)}}},W=(e,t,n,i,r=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void W(e.component.subTree,t,n,i);if(128&u)return void e.suspense.move(t,n,i);if(64&u)return void a.move(e,t,n,ee);if(a===zt){s(o,t,n);for(let e=0;e<c.length;e++)W(c[e],t,n,i);return void s(e.anchor,t,n)}if(a===Kt)return void E(e,t,n);const h=2!==i&&1&u&&l;if(h)if(0===i)l.beforeEnter(o),s(o,t,n),Nt((()=>l.enter(o)),r);else{const{leave:e,delayLeave:i,afterLeave:r}=l,a=()=>s(o,t,n),c=()=>{e(o,(()=>{a(),r&&r()}))};i?i(o,a,c):c()}else s(o,t,n)},K=(e,t,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&xt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!he(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&wn(m,t,e),6&u)Y(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);f&&Le(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,ee,i):c&&(s!==zt||h>0&&64&h)?J(c,t,n,!1,!0):(s===zt&&384&h||!r&&16&u)&&J(l,t,n),i&&G(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Nt((()=>{m&&wn(m,t,e),f&&Le(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===zt)return void Q(n,i);if(t===Kt)return void k(e);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,o=()=>t(n,s);i?i(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:l}=e;i&&(0,r.ir)(i),s.stop(),o&&(o.active=!1,K(a,e,t,n)),l&&Nt(l,t),Nt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,i,r)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),S(),T(),t._vnode=e},ee={p:v,um:K,m:W,r:G,mt:F,mc:A,pc:U,pbc:O,n:X,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:kt(Z,te)}}function Ot({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Pt(e,t,n=!1){const i=e.children,s=t.children;if((0,r.kJ)(i)&&(0,r.kJ)(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=yn(s[r]),t.el=e.el),n||Pt(e,t)),t.type===Ht&&(t.el=e.el)}}function Dt(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Lt=e=>e.__isTeleport,Ft=e=>e&&(e.disabled||""===e.disabled),Mt=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,qt=(e,t)=>{const n=e&&e.to;if((0,r.HD)(n)){if(t){const e=t(n);return e}return null}return n},jt={__isTeleport:!0,process(e,t,n,i,r,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=c,v=Ft(t.props);let{shapeFlag:y,children:_,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),c=t.anchor=m("");f(e,n,i),f(c,n,i);const h=t.target=qt(t.props,p),d=t.targetAnchor=m("");h&&(f(d,h),o=o||Mt(h));const g=(e,t)=>{16&y&&u(_,e,t,r,s,o,a,l)};v?g(n,c):h&&g(h,d)}else{t.el=e.el;const i=t.anchor=e.anchor,u=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=Ft(e.props),g=m?n:u,y=m?i:f;if(o=o||Mt(u),b?(d(e.dynamicChildren,b,g,r,s,o,a),Pt(e,t,!0)):l||h(e,t,g,y,r,s,o,a,!1),v)m||$t(t,n,i,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=qt(t.props,p);e&&$t(t,e,null,c,0)}else m&&$t(t,u,f,c,1)}Bt(t)},remove(e,t,n,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=e;if(h&&s(u),(o||!Ft(d))&&(s(c),16&a))for(let f=0;f<l.length;f++){const e=l[f];r(e,t,n,!0,!!e.dynamicChildren)}},move:$t,hydrate:Vt};function $t(e,t,n,{o:{insert:i},m:r},s=2){0===s&&i(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,h=2===s;if(h&&i(o,t,n),(!h||Ft(u))&&16&l)for(let d=0;d<c.length;d++)r(c[d],t,n,2);h&&i(a,t,n)}function Vt(e,t,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=t.target=qt(t.props,l);if(u){const l=u._lpa||u.firstChild;if(16&t.shapeFlag)if(Ft(t.props))t.anchor=c(o(e),t,a(e),n,i,r,s),t.targetAnchor=l;else{t.anchor=o(e);let a=l;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}c(l,t,u,n,i,r,s)}Bt(t)}return t.anchor&&o(t.anchor)}const Ut=jt;function Bt(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const zt=Symbol(void 0),Ht=Symbol(void 0),Wt=Symbol(void 0),Kt=Symbol(void 0),Gt=[];let Qt=null;function Yt(e=!1){Gt.push(Qt=e?null:[])}function Jt(){Gt.pop(),Qt=Gt[Gt.length-1]||null}let Xt=1;function Zt(e){Xt+=e}function en(e){return e.dynamicChildren=Xt>0?Qt||r.Z6:null,Jt(),Xt>0&&Qt&&Qt.push(e),e}function tn(e,t,n,i,r,s){return en(cn(e,t,n,i,r,s,!0))}function nn(e,t,n,i,r){return en(un(e,t,n,i,r,!0))}function rn(e){return!!e&&!0===e.__v_isVNode}function sn(e,t){return e.type===t.type&&e.key===t.key}const on="__vInternal",an=({key:e})=>null!=e?e:null,ln=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,r.HD)(e)||(0,i.dq)(e)||(0,r.mf)(e)?{i:O,r:e,k:t,f:!!n}:e:null;function cn(e,t=null,n=null,i=0,s=null,o=(e===zt?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&an(t),ref:t&&ln(t),scopeId:P,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:O};return l?(_n(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=(0,r.HD)(n)?8:16),Xt>0&&!a&&Qt&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Qt.push(c),c}const un=hn;function hn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==je||(e=Wt),rn(e)){const i=fn(e,t,!0);return n&&_n(i,n),Xt>0&&!a&&Qt&&(6&i.shapeFlag?Qt[Qt.indexOf(e)]=i:Qt.push(i)),i.patchFlag|=-2,i}if(Vn(e)&&(e=e.__vccOpts),t){t=dn(t);let{class:e,style:n}=t;e&&!(0,r.HD)(e)&&(t.class=(0,r.C_)(e)),(0,r.Kn)(n)&&((0,i.X3)(n)&&!(0,r.kJ)(n)&&(n=(0,r.l7)({},n)),t.style=(0,r.j5)(n))}const l=(0,r.HD)(e)?1:z(e)?128:Lt(e)?64:(0,r.Kn)(e)?4:(0,r.mf)(e)?2:0;return cn(e,t,n,s,o,l,a,!0)}function dn(e){return e?(0,i.X3)(e)||on in e?(0,r.l7)({},e):e:null}function fn(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=e,l=t?bn(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&an(l),ref:t&&t.ref?n&&s?(0,r.kJ)(s)?s.concat(ln(t)):[s,ln(t)]:ln(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==zt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fn(e.ssContent),ssFallback:e.ssFallback&&fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c}function pn(e=" ",t=0){return un(Ht,null,e,t)}function mn(e,t){const n=un(Kt,null,e);return n.staticCount=t,n}function gn(e="",t=!1){return t?(Yt(),nn(Wt,null,e)):un(Wt,null,e)}function vn(e){return null==e||"boolean"===typeof e?un(Wt):(0,r.kJ)(e)?un(zt,null,e.slice()):"object"===typeof e?yn(e):un(Ht,null,String(e))}function yn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:fn(e)}function _n(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,r.kJ)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),_n(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||on in t?3===i&&O&&(1===O.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=O}}else(0,r.mf)(t)?(t={default:t,_ctx:O},n=32):(t=String(t),64&i?(n=16,t=[pn(t)]):n=8);e.children=t,e.shapeFlag|=n}function bn(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,r.C_)([t.class,i.class]));else if("style"===e)t.style=(0,r.j5)([t.style,i.style]);else if((0,r.F7)(e)){const n=t[e],s=i[e];!s||n===s||(0,r.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function wn(e,t,n,i=null){o(e,t,7,[n,i])}const Cn=St();let En=0;function Sn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Cn,a={uid:En++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dt(s,o),emitsOptions:A(s,o),emit:null,emitted:null,propsDefaults:r.kT,inheritAttrs:s.inheritAttrs,ctx:r.kT,data:r.kT,props:r.kT,attrs:r.kT,slots:r.kT,refs:r.kT,setupState:r.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=N.bind(null,a),e.ce&&e.ce(a),a}let Tn=null;const kn=()=>Tn||O,xn=e=>{Tn=e,e.scope.on()},In=()=>{Tn&&Tn.scope.off(),Tn=null};function Nn(e){return 4&e.vnode.shapeFlag}let An,Rn,On=!1;function Pn(e,t=!1){On=t;const{props:n,children:i}=e.vnode,r=Nn(e);lt(e,n,r,t),Ct(e,i);const s=r?Dn(e,t):void 0;return On=!1,s}function Dn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,i.Xl)(new Proxy(e.ctx,Ke));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?qn(e):null;xn(e),(0,i.Jd)();const l=s(o,e,0,[e.props,n]);if((0,i.lk)(),In(),(0,r.tI)(l)){if(l.then(In,In),t)return l.then((n=>{Ln(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else Ln(e,l,t)}else Fn(e,t)}function Ln(e,t,n){(0,r.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,r.Kn)(t)&&(e.setupState=(0,i.WL)(t)),Fn(e,n)}function Fn(e,t,n){const s=e.type;if(!e.render){if(!t&&An&&!s.render){const t=s.template||Ze(e).template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,r.l7)((0,r.l7)({isCustomElement:n,delimiters:o},i),a);s.render=An(t,l)}}e.render=s.render||r.dG,Rn&&Rn(e)}xn(e),(0,i.Jd)(),Qe(e),(0,i.lk)(),In()}function Mn(e){return new Proxy(e.attrs,{get(t,n){return(0,i.j)(e,"get","$attrs"),t[n]}})}function qn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Mn(e))},slots:e.slots,emit:e.emit,expose:t}}function jn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,i.WL)((0,i.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in He?He[n](e):void 0},has(e,t){return t in e||t in He}}))}function $n(e,t=!0){return(0,r.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Vn(e){return(0,r.mf)(e)&&"__vccOpts"in e}const Un=(e,t)=>(0,i.Fl)(e,t,On);function Bn(e,t,n){const i=arguments.length;return 2===i?(0,r.Kn)(t)&&!(0,r.kJ)(t)?rn(t)?un(e,null,[t]):un(e,t):un(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&rn(n)&&(n=[n]),un(e,t,n))}const zn=Symbol(""),Hn=()=>{{const e=K(zn);return e}};const Wn="3.2.47"},1957:(e,t,n)=>{"use strict";n.d(t,{iM:()=>he,nr:()=>le,ri:()=>me,uT:()=>L});var i=n(6970),r=n(9835),s=n(499);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,l=a&&a.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{l.innerHTML=i?`<svg>${e}</svg>`:e;const r=l.content;if(i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const r=e.style,s=(0,i.HD)(n);if(n&&!s){if(t&&!(0,i.HD)(t))for(const e in t)null==n[e]&&f(r,e,"");for(const e in n)f(r,e,n[e])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const d=/\s*!important$/;function f(e,t,n){if((0,i.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=g(e,t);d.test(n)?e.setProperty((0,i.rs)(r),n.replace(d,""),"important"):e[r]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let r=(0,i._A)(t);if("filter"!==r&&r in e)return m[t]=r;r=(0,i.kC)(r);for(let i=0;i<p.length;i++){const n=p[i]+r;if(n in e)return m[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const r=(0,i.Pq)(t);null==n||r&&!(0,i.yA)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function _(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const i=null==n?"":n;return e.value===i&&"OPTION"!==e.tagName||(e.value=i),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(c){0}l&&e.removeAttribute(t)}function b(e,t,n,i){e.addEventListener(t,n,i)}function w(e,t,n,i){e.removeEventListener(t,n,i)}function C(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=S(t);if(i){const o=s[t]=I(i,r);b(e,n,o,a)}else o&&(w(e,n,o,a),s[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function S(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.rs)(e.slice(2));return[n,t]}let T=0;const k=Promise.resolve(),x=()=>T||(k.then((()=>T=0)),T=Date.now());function I(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.$d)(N(e,n.value),t,5,[e])};return n.value=e,n.attached=x(),n}function N(e,t){if((0,i.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const A=/^on[a-z]/,R=(e,t,n,r,s=!1,o,a,l,c)=>{"class"===t?u(e,r,s):"style"===t?h(e,n,r):(0,i.F7)(t)?(0,i.tR)(t)||C(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):O(e,t,r,s))?_(e,t,r,o,a,l,c):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),y(e,t,r,s))};function O(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&A.test(t)&&(0,i.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!A.test(t)||!(0,i.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const P="transition",D="animation",L=(e,{slots:t})=>(0,r.h)(r.P$,$(e),t);L.displayName="Transition";const F={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M=L.props=(0,i.l7)({},r.P$.props,F),q=(e,t=[])=>{(0,i.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},j=e=>!!e&&((0,i.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function $(e){const t={};for(const i in e)i in F||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=V(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:C,onBeforeAppear:E=y,onAppear:S=_,onAppearCancelled:T=b}=t,k=(e,t,n)=>{z(e,t?h:l),z(e,t?u:a),n&&n()},x=(e,t)=>{e._isLeaving=!1,z(e,d),z(e,p),z(e,f),t&&t()},I=e=>(t,n)=>{const i=e?S:_,s=()=>k(t,e,n);q(i,[t,s]),H((()=>{z(t,e?c:o),B(t,e?h:l),j(i)||K(t,r,g,s)}))};return(0,i.l7)(t,{onBeforeEnter(e){q(y,[e]),B(e,o),B(e,a)},onBeforeAppear(e){q(E,[e]),B(e,c),B(e,u)},onEnter:I(!1),onAppear:I(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>x(e,t);B(e,d),J(),B(e,f),H((()=>{e._isLeaving&&(z(e,d),B(e,p),j(w)||K(e,r,v,n))})),q(w,[e,n])},onEnterCancelled(e){k(e,!1),q(b,[e])},onAppearCancelled(e){k(e,!0),q(T,[e])},onLeaveCancelled(e){x(e),q(C,[e])}})}function V(e){if(null==e)return null;if((0,i.Kn)(e))return[U(e.enter),U(e.leave)];{const t=U(e);return[t,t]}}function U(e){const t=(0,i.He)(e);return t}function B(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function H(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let W=0;function K(e,t,n,i){const r=e._endId=++W,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=G(e,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,d),s()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function G(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),r=i(`${P}Delay`),s=i(`${P}Duration`),o=Q(r,s),a=i(`${D}Delay`),l=i(`${D}Duration`),c=Q(a,l);let u=null,h=0,d=0;t===P?o>0&&(u=P,h=o,d=s.length):t===D?c>0&&(u=D,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?P:D:null,d=u?u===P?s.length:l.length:0);const f=u===P&&/\b(transform|all)(,|$)/.test(i(`${P}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Q(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function J(){return document.body.offsetHeight}const X=new WeakMap,Z=new WeakMap,ee={name:"TransitionGroup",props:(0,i.l7)({},M,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.FN)(),i=(0,r.Y8)();let o,a;return(0,r.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!re(o[0].el,n.vnode.el,t))return;o.forEach(te),o.forEach(ne);const i=o.filter(ie);J(),i.forEach((e=>{const n=e.el,i=n.style;B(n,t),i.transform=i.webkitTransform=i.transitionDuration="";const r=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,z(n,t))};n.addEventListener("transitionend",r)}))})),()=>{const l=(0,s.IU)(e),c=$(l);let u=l.tag||r.HY;o=a,a=t.default?(0,r.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.nK)(t,(0,r.U2)(t,c,i,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,r.nK)(t,(0,r.U2)(t,c,i,n)),X.set(t,t.el.getBoundingClientRect())}return(0,r.Wm)(u,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){Z.set(e,e.el.getBoundingClientRect())}function ie(e){const t=X.get(e),n=Z.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${i}px,${r}px)`,t.transitionDuration="0s",e}}function re(e,t,n){const i=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&i.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&i.classList.add(e))),i.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(i);const{hasTransform:s}=G(i);return r.removeChild(i),s}const se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(t)?e=>(0,i.ir)(t,e):t};function oe(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const le={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=se(s);const o=r||s.props&&"number"===s.props.type;b(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.h5)(r)),e._assign(r)})),n&&b(e,"change",(()=>{e.value=e.value.trim()})),t||(b(e,"compositionstart",oe),b(e,"compositionend",ae),b(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e._assign=se(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,i.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ce=["ctrl","shift","alt","meta"],ue={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ce.some((n=>e[`${n}Key`]&&!t.includes(n)))},he=(e,t)=>(n,...i)=>{for(let e=0;e<t.length;e++){const i=ue[t[e]];if(i&&i(n,t))return}return e(n,...i)};const de=(0,i.l7)({patchProp:R},c);let fe;function pe(){return fe||(fe=(0,r.Us)(de))}const me=(...e)=>{const t=pe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=ge(e);if(!r)return;const s=t._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function ge(e){if((0,i.HD)(e)){const t=document.querySelector(e);return t}return e}},6970:(e,t,n)=>{"use strict";function i(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:()=>h,DM:()=>P,E9:()=>oe,F7:()=>T,Gg:()=>W,HD:()=>M,He:()=>re,Kj:()=>L,Kn:()=>j,NO:()=>E,Nj:()=>ne,Od:()=>I,PO:()=>z,Pq:()=>f,RI:()=>A,S0:()=>H,W7:()=>B,WV:()=>g,Z6:()=>w,_A:()=>Q,_N:()=>O,aU:()=>ee,dG:()=>C,e1:()=>s,fY:()=>i,h5:()=>ie,hR:()=>Z,hq:()=>v,ir:()=>te,j5:()=>o,kC:()=>X,kJ:()=>R,kT:()=>b,l7:()=>x,mf:()=>F,rs:()=>J,tI:()=>$,tR:()=>k,yA:()=>p,yk:()=>q,zw:()=>y});const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=i(r);function o(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=M(i)?u(i):o(i);if(r)for(const e in r)t[e]=r[e]}return t}return M(e)||j(e)?e:void 0}const a=/;(?![^(]*\))/g,l=/:([^]+)/,c=/\/\*.*?\*\//gs;function u(e){const t={};return e.replace(c,"").split(a).forEach((e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function h(e){let t="";if(M(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const i=h(e[n]);i&&(t+=i+" ")}else if(j(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=i(d);function p(e){return!!e||""===e}function m(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=g(e[i],t[i]);return n}function g(e,t){if(e===t)return!0;let n=D(e),i=D(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=q(e),i=q(t),n||i)return e===t;if(n=R(e),i=R(t),n||i)return!(!n||!i)&&m(e,t);if(n=j(e),i=j(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function v(e,t){return e.findIndex((e=>g(e,t)))}const y=e=>M(e)?e:null==e?"":R(e)||j(e)&&(e.toString===V||!F(e.toString))?JSON.stringify(e,_,2):String(e),_=(e,t)=>t&&t.__v_isRef?_(e,t.value):O(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:P(t)?{[`Set(${t.size})`]:[...t.values()]}:!j(t)||R(t)||z(t)?t:String(t),b={},w=[],C=()=>{},E=()=>!1,S=/^on[^a-z]/,T=e=>S.test(e),k=e=>e.startsWith("onUpdate:"),x=Object.assign,I=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},N=Object.prototype.hasOwnProperty,A=(e,t)=>N.call(e,t),R=Array.isArray,O=e=>"[object Map]"===U(e),P=e=>"[object Set]"===U(e),D=e=>"[object Date]"===U(e),L=e=>"[object RegExp]"===U(e),F=e=>"function"===typeof e,M=e=>"string"===typeof e,q=e=>"symbol"===typeof e,j=e=>null!==e&&"object"===typeof e,$=e=>j(e)&&F(e.then)&&F(e.catch),V=Object.prototype.toString,U=e=>V.call(e),B=e=>U(e).slice(8,-1),z=e=>"[object Object]"===U(e),H=e=>M(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,W=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},G=/-(\w)/g,Q=K((e=>e.replace(G,((e,t)=>t?t.toUpperCase():"")))),Y=/\B([A-Z])/g,J=K((e=>e.replace(Y,"-$1").toLowerCase())),X=K((e=>e.charAt(0).toUpperCase()+e.slice(1))),Z=K((e=>e?`on${X(e)}`:"")),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ie=e=>{const t=parseFloat(e);return isNaN(t)?e:t},re=e=>{const t=M(e)?Number(e):NaN;return isNaN(t)?e:t};let se;const oe=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},4526:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(9835),r=n(8234),s=n(5987),o=n(2026);const a=(0,s.L)({name:"QBar",props:{...r.S,dense:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,i.FN)(),s=(0,r.Z)(e,n),a=(0,i.Fl)((()=>`q-bar row no-wrap items-center q-bar--${!0===e.dense?"dense":"standard"}  q-bar--`+(!0===s.value?"dark":"light")));return()=>(0,i.h)("div",{class:a.value,role:"toolbar"},(0,o.KR)(t.default))}})},2093:(e,t,n)=>{"use strict";n.d(t,{Z:()=>re});n(9665);var i=n(9835),r=n(499),s=n(1957);const o={xs:18,sm:24,md:32,lg:38,xl:46},a={size:String};function l(e,t=o){return(0,i.Fl)((()=>void 0!==e.size?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null))}var c=n(5987),u=n(2026);const h="0 0 24 24",d=e=>e,f=e=>`ionicons ${e}`,p={"mdi-":e=>`mdi ${e}`,"icon-":d,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":f,"ion-ios":f,"ion-logo":f,"iconfont ":d,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},m={o_:"-outlined",r_:"-round",s_:"-sharp"},g={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},v=new RegExp("^("+Object.keys(p).join("|")+")"),y=new RegExp("^("+Object.keys(m).join("|")+")"),_=new RegExp("^("+Object.keys(g).join("|")+")"),b=/^[Mm]\s?[-+]?\.?\d/,w=/^img:/,C=/^svguse:/,E=/^ion-/,S=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,T=(0,c.L)({name:"QIcon",props:{...a,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,i.FN)(),r=l(e),s=(0,i.Fl)((()=>"q-icon"+(!0===e.left?" on-left":"")+(!0===e.right?" on-right":"")+(void 0!==e.color?` text-${e.color}`:""))),o=(0,i.Fl)((()=>{let t,r=e.name;if("none"===r||!r)return{none:!0};if(null!==n.iconMapFn){const e=n.iconMapFn(r);if(void 0!==e){if(void 0===e.icon)return{cls:e.cls,content:void 0!==e.content?e.content:" "};if(r=e.icon,"none"===r||!r)return{none:!0}}}if(!0===b.test(r)){const[e,t=h]=r.split("|");return{svg:!0,viewBox:t,nodes:e.split("&&").map((e=>{const[t,n,r]=e.split("@@");return(0,i.h)("path",{style:n,d:t,transform:r})}))}}if(!0===w.test(r))return{img:!0,src:r.substring(4)};if(!0===C.test(r)){const[e,t=h]=r.split("|");return{svguse:!0,src:e.substring(7),viewBox:t}}let s=" ";const o=r.match(v);if(null!==o)t=p[o[1]](r);else if(!0===S.test(r))t=r;else if(!0===E.test(r))t=`ionicons ion-${!0===n.platform.is.ios?"ios":"md"}${r.substring(3)}`;else if(!0===_.test(r)){t="notranslate material-symbols";const e=r.match(_);null!==e&&(r=r.substring(6),t+=g[e[1]]),s=r}else{t="notranslate material-icons";const e=r.match(y);null!==e&&(r=r.substring(2),t+=m[e[1]]),s=r}return{cls:t,content:s}}));return()=>{const n={class:s.value,style:r.value,"aria-hidden":"true",role:"presentation"};return!0===o.value.none?(0,i.h)(e.tag,n,(0,u.KR)(t.default)):!0===o.value.img?(0,i.h)("span",n,(0,u.vs)(t.default,[(0,i.h)("img",{src:o.value.src})])):!0===o.value.svg?(0,i.h)("span",n,(0,u.vs)(t.default,[(0,i.h)("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):!0===o.value.svguse?(0,i.h)("span",n,(0,u.vs)(t.default,[(0,i.h)("svg",{viewBox:o.value.viewBox},[(0,i.h)("use",{"xlink:href":o.value.src})])])):(void 0!==o.value.cls&&(n.class+=" "+o.value.cls),(0,i.h)(e.tag,n,(0,u.vs)(t.default,[o.value.content])))}}}),k={size:{type:[Number,String],default:"1em"},color:String};function x(e){return{cSize:(0,i.Fl)((()=>e.size in o?`${o[e.size]}px`:e.size)),classes:(0,i.Fl)((()=>"q-spinner"+(e.color?` text-${e.color}`:"")))}}const I=(0,c.L)({name:"QSpinner",props:{...k,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=x(e);return()=>(0,i.h)("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[(0,i.h)("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});var N=n(223),A=n(1384),R=n(1705);function O(e,t=250){let n,i=!1;return function(){return!1===i&&(i=!0,setTimeout((()=>{i=!1}),t),n=e.apply(this,arguments)),n}}function P(e,t,n,i){!0===n.modifiers.stop&&(0,A.sT)(e);const r=n.modifiers.color;let s=n.modifiers.center;s=!0===s||!0===i;const o=document.createElement("span"),a=document.createElement("span"),l=(0,A.FK)(e),{left:c,top:u,width:h,height:d}=t.getBoundingClientRect(),f=Math.sqrt(h*h+d*d),p=f/2,m=(h-f)/2+"px",g=s?m:l.left-c-p+"px",v=(d-f)/2+"px",y=s?v:l.top-u-p+"px";a.className="q-ripple__inner",(0,N.iv)(a,{height:`${f}px`,width:`${f}px`,transform:`translate3d(${g},${y},0) scale3d(.2,.2,1)`,opacity:0}),o.className="q-ripple"+(r?" text-"+r:""),o.setAttribute("dir","ltr"),o.appendChild(a),t.appendChild(o);const _=()=>{o.remove(),clearTimeout(b)};n.abort.push(_);let b=setTimeout((()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${m},${v},0) scale3d(1,1,1)`,a.style.opacity=.2,b=setTimeout((()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,b=setTimeout((()=>{o.remove(),n.abort.splice(n.abort.indexOf(_),1)}),275)}),250)}),50)}function D(e,{modifiers:t,value:n,arg:i}){const r=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:!0===r.early,stop:!0===r.stop,center:!0===r.center,color:r.color||i,keyCodes:[].concat(r.keyCodes||13)}}const L=(0,c.f)({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(!1===n.ripple)return;const i={cfg:n,enabled:!1!==t.value,modifiers:{},abort:[],start(t){!0===i.enabled&&!0!==t.qSkipRipple&&t.type===(!0===i.modifiers.early?"pointerdown":"click")&&P(t,e,i,!0===t.qKeyEvent)},keystart:O((t=>{!0===i.enabled&&!0!==t.qSkipRipple&&!0===(0,R.So)(t,i.modifiers.keyCodes)&&t.type==="key"+(!0===i.modifiers.early?"down":"up")&&P(t,e,i,!0)}),300)};D(i,t),e.__qripple=i,(0,A.M0)(i,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;void 0!==n&&(n.enabled=!1!==t.value,!0===n.enabled&&Object(t.value)===t.value&&D(n,t))}},beforeUnmount(e){const t=e.__qripple;void 0!==t&&(t.abort.forEach((e=>{e()})),(0,A.ul)(t,"main"),delete e._qripple)}});var F=n(5065),M=n(2046);function q(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function j(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!1===Array.isArray(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}function V(e,t){return!0===Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function U(e,t){return!0===Array.isArray(e)?V(e,t):!0===Array.isArray(t)?V(t,e):e===t}function B(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!1===U(e[n],t[n]))return!1;return!0}const z={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function H({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=(0,i.FN)(),{props:r,proxy:s,emit:o}=n,a=(0,M.Rb)(n),l=(0,i.Fl)((()=>!0!==r.disable&&void 0!==r.href)),c=!0===t?(0,i.Fl)((()=>!0===a&&!0!==r.disable&&!0!==l.value&&void 0!==r.to&&null!==r.to&&""!==r.to)):(0,i.Fl)((()=>!0===a&&!0!==l.value&&void 0!==r.to&&null!==r.to&&""!==r.to)),u=(0,i.Fl)((()=>!0===c.value?_(r.to):null)),h=(0,i.Fl)((()=>null!==u.value)),d=(0,i.Fl)((()=>!0===l.value||!0===h.value)),f=(0,i.Fl)((()=>"a"===r.type||!0===d.value?"a":r.tag||e||"div")),p=(0,i.Fl)((()=>!0===l.value?{href:r.href,target:r.target}:!0===h.value?{href:u.value.href,target:r.target}:{})),m=(0,i.Fl)((()=>{if(!1===h.value)return-1;const{matched:e}=u.value,{length:t}=e,n=e[t-1];if(void 0===n)return-1;const i=s.$route.matched;if(0===i.length)return-1;const r=i.findIndex(j.bind(null,n));if(r>-1)return r;const o=q(e[t-2]);return t>1&&q(n)===o&&i[i.length-1].path!==o?i.findIndex(j.bind(null,e[t-2])):r})),g=(0,i.Fl)((()=>!0===h.value&&-1!==m.value&&$(s.$route.params,u.value.params))),v=(0,i.Fl)((()=>!0===g.value&&m.value===s.$route.matched.length-1&&B(s.$route.params,u.value.params))),y=(0,i.Fl)((()=>!0===h.value?!0===v.value?` ${r.exactActiveClass} ${r.activeClass}`:!0===r.exact?"":!0===g.value?` ${r.activeClass}`:"":""));function _(e){try{return s.$router.resolve(e)}catch(t){}return null}function b(e,{returnRouterError:t,to:n=r.to,replace:i=r.replace}={}){if(!0===r.disable)return e.preventDefault(),Promise.resolve(!1);if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||void 0!==e.button&&0!==e.button||"_blank"===r.target)return Promise.resolve(!1);e.preventDefault();const o=s.$router[!0===i?"replace":"push"](n);return!0===t?o:o.then((()=>{})).catch((()=>{}))}function w(e){if(!0===h.value){const t=t=>b(e,t);o("click",e,t),!0!==e.defaultPrevented&&t()}else o("click",e)}return{hasRouterLink:h,hasHrefLink:l,hasLink:d,linkTag:f,resolvedLink:u,linkIsActive:g,linkIsExactActive:v,linkClass:y,linkAttrs:p,getLink:_,navigateToRouterLink:b,navigateOnClick:w}}const W={none:0,xs:4,sm:8,md:16,lg:24,xl:32},K={xs:8,sm:10,md:14,lg:20,xl:24},G=["button","submit","reset"],Q=/[^\s]\/[^\s]/,Y=["flat","outline","push","unelevated"],J=(e,t)=>!0===e.flat?"flat":!0===e.outline?"outline":!0===e.push?"push":!0===e.unelevated?"unelevated":t,X={...a,...z,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Y.reduce(((e,t)=>(e[t]=Boolean)&&e),{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...F.jO.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Z(e){const t=l(e,K),n=(0,F.ZP)(e),{hasRouterLink:r,hasLink:s,linkTag:o,linkAttrs:a,navigateOnClick:c}=H({fallbackTag:"button"}),u=(0,i.Fl)((()=>{const n=!1===e.fab&&!1===e.fabMini?t.value:{};return void 0!==e.padding?Object.assign({},n,{padding:e.padding.split(/\s+/).map((e=>e in W?W[e]+"px":e)).join(" "),minWidth:"0",minHeight:"0"}):n})),h=(0,i.Fl)((()=>!0===e.rounded||!0===e.fab||!0===e.fabMini)),d=(0,i.Fl)((()=>!0!==e.disable&&!0!==e.loading)),f=(0,i.Fl)((()=>!0===d.value?e.tabindex||0:-1)),p=(0,i.Fl)((()=>J(e,"standard"))),m=(0,i.Fl)((()=>{const t={tabindex:f.value};return!0===s.value?Object.assign(t,a.value):!0===G.includes(e.type)&&(t.type=e.type),"a"===o.value?(!0===e.disable?t["aria-disabled"]="true":void 0===t.href&&(t.role="button"),!0!==r.value&&!0===Q.test(e.type)&&(t.type=e.type)):!0===e.disable&&(t.disabled="",t["aria-disabled"]="true"),!0===e.loading&&void 0!==e.percentage&&Object.assign(t,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),t})),g=(0,i.Fl)((()=>{let t;void 0!==e.color?t=!0===e.flat||!0===e.outline?`text-${e.textColor||e.color}`:`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(t=`text-${e.textColor}`);const n=!0===e.round?"round":"rectangle"+(!0===h.value?" q-btn--rounded":!0===e.square?" q-btn--square":"");return`q-btn--${p.value} q-btn--${n}`+(void 0!==t?" "+t:"")+(!0===d.value?" q-btn--actionable q-focusable q-hoverable":!0===e.disable?" disabled":"")+(!0===e.fab?" q-btn--fab":!0===e.fabMini?" q-btn--fab-mini":"")+(!0===e.noCaps?" q-btn--no-uppercase":"")+(!0===e.dense?" q-btn--dense":"")+(!0===e.stretch?" no-border-radius self-stretch":"")+(!0===e.glossy?" glossy":"")+(e.square?" q-btn--square":"")})),v=(0,i.Fl)((()=>n.value+(!0===e.stack?" column":" row")+(!0===e.noWrap?" no-wrap text-no-wrap":"")+(!0===e.loading?" q-btn__content--hidden":"")));return{classes:g,style:u,innerClasses:v,attributes:m,hasLink:s,linkTag:o,navigateOnClick:c,isActionable:d}}const{passiveCapture:ee}=A.listenOpts;let te=null,ne=null,ie=null;const re=(0,c.L)({name:"QBtn",props:{...X,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:o}=(0,i.FN)(),{classes:a,style:l,innerClasses:c,attributes:h,hasLink:d,linkTag:f,navigateOnClick:p,isActionable:m}=Z(e),g=(0,r.iH)(null),v=(0,r.iH)(null);let y,_=null,b=null;const w=(0,i.Fl)((()=>void 0!==e.label&&null!==e.label&&""!==e.label)),C=(0,i.Fl)((()=>!0!==e.disable&&!1!==e.ripple&&{keyCodes:!0===d.value?[13,32]:[13],...!0===e.ripple?{}:e.ripple})),E=(0,i.Fl)((()=>({center:e.round}))),S=(0,i.Fl)((()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}})),k=(0,i.Fl)((()=>{if(!0===e.loading)return{onMousedown:q,onTouchstart:q,onClick:q,onKeydown:q,onKeyup:q};if(!0===m.value){const t={onClick:N,onKeydown:O,onMousedown:D};if(!0===o.$q.platform.has.touch){const n=void 0!==e.onTouchstart?"":"Passive";t[`onTouchstart${n}`]=P}return t}return{onClick:A.NS}})),x=(0,i.Fl)((()=>({ref:g,class:"q-btn q-btn-item non-selectable no-outline "+a.value,style:l.value,...h.value,...k.value})));function N(t){if(null!==g.value){if(void 0!==t){if(!0===t.defaultPrevented)return;const n=document.activeElement;if("submit"===e.type&&n!==document.body&&!1===g.value.contains(n)&&!1===n.contains(g.value)){g.value.focus();const e=()=>{document.removeEventListener("keydown",A.NS,!0),document.removeEventListener("keyup",e,ee),null!==g.value&&g.value.removeEventListener("blur",e,ee)};document.addEventListener("keydown",A.NS,!0),document.addEventListener("keyup",e,ee),g.value.addEventListener("blur",e,ee)}}p(t)}}function O(e){null!==g.value&&(n("keydown",e),!0===(0,R.So)(e,[13,32])&&ne!==g.value&&(null!==ne&&M(),!0!==e.defaultPrevented&&(g.value.focus(),ne=g.value,g.value.classList.add("q-btn--active"),document.addEventListener("keyup",F,!0),g.value.addEventListener("blur",F,ee)),(0,A.NS)(e)))}function P(e){null!==g.value&&(n("touchstart",e),!0!==e.defaultPrevented&&(te!==g.value&&(null!==te&&M(),te=g.value,_=e.target,_.addEventListener("touchcancel",F,ee),_.addEventListener("touchend",F,ee)),y=!0,null!==b&&clearTimeout(b),b=setTimeout((()=>{b=null,y=!1}),200)))}function D(e){null!==g.value&&(e.qSkipRipple=!0===y,n("mousedown",e),!0!==e.defaultPrevented&&ie!==g.value&&(null!==ie&&M(),ie=g.value,g.value.classList.add("q-btn--active"),document.addEventListener("mouseup",F,ee)))}function F(e){if(null!==g.value&&(void 0===e||"blur"!==e.type||document.activeElement!==g.value)){if(void 0!==e&&"keyup"===e.type){if(ne===g.value&&!0===(0,R.So)(e,[13,32])){const t=new MouseEvent("click",e);t.qKeyEvent=!0,!0===e.defaultPrevented&&(0,A.X$)(t),!0===e.cancelBubble&&(0,A.sT)(t),g.value.dispatchEvent(t),(0,A.NS)(e),e.qKeyEvent=!0}n("keyup",e)}M()}}function M(e){const t=v.value;!0===e||te!==g.value&&ie!==g.value||null===t||t===document.activeElement||(t.setAttribute("tabindex",-1),t.focus()),te===g.value&&(null!==_&&(_.removeEventListener("touchcancel",F,ee),_.removeEventListener("touchend",F,ee)),te=_=null),ie===g.value&&(document.removeEventListener("mouseup",F,ee),ie=null),ne===g.value&&(document.removeEventListener("keyup",F,!0),null!==g.value&&g.value.removeEventListener("blur",F,ee),ne=null),null!==g.value&&g.value.classList.remove("q-btn--active")}function q(e){(0,A.NS)(e),e.qSkipRipple=!0}return(0,i.Jd)((()=>{M(!0)})),Object.assign(o,{click:N}),()=>{let n=[];void 0!==e.icon&&n.push((0,i.h)(T,{name:e.icon,left:!1===e.stack&&!0===w.value,role:"img","aria-hidden":"true"})),!0===w.value&&n.push((0,i.h)("span",{class:"block"},[e.label])),n=(0,u.vs)(t.default,n),void 0!==e.iconRight&&!1===e.round&&n.push((0,i.h)(T,{name:e.iconRight,right:!1===e.stack&&!0===w.value,role:"img","aria-hidden":"true"}));const r=[(0,i.h)("span",{class:"q-focus-helper",ref:v})];return!0===e.loading&&void 0!==e.percentage&&r.push((0,i.h)("span",{class:"q-btn__progress absolute-full overflow-hidden"+(!0===e.darkPercentage?" q-btn__progress--dark":"")},[(0,i.h)("span",{class:"q-btn__progress-indicator fit block",style:S.value})])),r.push((0,i.h)("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},n)),null!==e.loading&&r.push((0,i.h)(s.uT,{name:"q-transition--fade"},(()=>!0===e.loading?[(0,i.h)("span",{key:"loading",class:"absolute-full flex flex-center"},void 0!==t.loading?t.loading():[(0,i.h)(I)])]:null))),(0,i.wy)((0,i.h)(f.value,x.value,r),[[L,C.value,void 0,E.value]])}}})},4458:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(9835),r=n(8234),s=n(5987),o=n(2026);const a=(0,s.L)({name:"QCard",props:{...r.S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,i.FN)(),s=(0,r.Z)(e,n),a=(0,i.Fl)((()=>"q-card"+(!0===s.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,i.h)(e.tag,{class:a.value},(0,o.KR)(t.default))}})},1821:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(9835),r=n(5065),s=n(5987),o=n(2026);const a=(0,s.L)({name:"QCardActions",props:{...r.jO,vertical:Boolean},setup(e,{slots:t}){const n=(0,r.ZP)(e),s=(0,i.Fl)((()=>`q-card__actions ${n.value} q-card__actions--`+(!0===e.vertical?"vert column":"horiz row")));return()=>(0,i.h)("div",{class:s.value},(0,o.KR)(t.default))}})},3190:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(9835),r=n(5987),s=n(2026);const o=(0,r.L)({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=(0,i.Fl)((()=>"q-card__section q-card__section--"+(!0===e.horizontal?"horiz row no-wrap":"vert")));return()=>(0,i.h)(e.tag,{class:n.value},(0,s.KR)(t.default))}})},960:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});n(9665);var i=n(9835),r=n(2093),s=n(8234),o=n(6120),a=n(499),l=n(5310),c=n(2046);let u=0;const h={fullscreen:Boolean,noRouteFullscreenExit:Boolean},d=["update:fullscreen","fullscreen"];function f(){const e=(0,i.FN)(),{props:t,emit:n,proxy:r}=e;let s,o,h;const d=(0,a.iH)(!1);function f(){!0===d.value?m():p()}function p(){!0!==d.value&&(d.value=!0,h=r.$el.parentNode,h.replaceChild(o,r.$el),document.body.appendChild(r.$el),u++,1===u&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:m},l.Z.add(s))}function m(){!0===d.value&&(void 0!==s&&(l.Z.remove(s),s=void 0),h.replaceChild(r.$el,o),d.value=!1,u=Math.max(0,u-1),0===u&&(document.body.classList.remove("q-body--fullscreen-mixin"),void 0!==r.$el.scrollIntoView&&setTimeout((()=>{r.$el.scrollIntoView()}))))}return!0===(0,c.Rb)(e)&&(0,i.YP)((()=>r.$route.fullPath),(()=>{!0!==t.noRouteFullscreenExit&&m()})),(0,i.YP)((()=>t.fullscreen),(e=>{d.value!==e&&f()})),(0,i.YP)(d,(e=>{n("update:fullscreen",e),n("fullscreen",e)})),(0,i.wF)((()=>{o=document.createElement("span")})),(0,i.bv)((()=>{!0===t.fullscreen&&p()})),(0,i.Jd)(m),Object.assign(r,{toggleFullscreen:f,setFullscreen:p,exitFullscreen:m}),{inFullscreen:d,toggleFullscreen:f}}var p=n(5987),m=n(4680),g=n(2026);const v=["top","right","bottom","left"],y=["regular","flat","outline","push","unelevated"],_=(0,p.L)({name:"QCarousel",props:{...s.S,...o.t6,...h,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>y.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>v.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...d,...o.K6],setup(e,{slots:t}){const{proxy:{$q:n}}=(0,i.FN)(),a=(0,s.Z)(e,n);let l,c=null;const{updatePanelsList:u,getPanelContent:h,panelDirectives:d,goToPanel:p,previousPanel:v,nextPanel:y,getEnabledPanels:_,panelIndex:b}=(0,o.ZP)(),{inFullscreen:w}=f(),C=(0,i.Fl)((()=>!0!==w.value&&void 0!==e.height?{height:e.height}:{})),E=(0,i.Fl)((()=>!0===e.vertical?"vertical":"horizontal")),S=(0,i.Fl)((()=>`q-carousel q-panel-parent q-carousel--with${!0===e.padding?"":"out"}-padding`+(!0===w.value?" fullscreen":"")+(!0===a.value?" q-carousel--dark q-dark":"")+(!0===e.arrows?` q-carousel--arrows-${E.value}`:"")+(!0===e.navigation?` q-carousel--navigation-${I.value}`:""))),T=(0,i.Fl)((()=>{const t=[e.prevIcon||n.iconSet.carousel[!0===e.vertical?"up":"left"],e.nextIcon||n.iconSet.carousel[!0===e.vertical?"down":"right"]];return!1===e.vertical&&!0===n.lang.rtl?t.reverse():t})),k=(0,i.Fl)((()=>e.navigationIcon||n.iconSet.carousel.navigationIcon)),x=(0,i.Fl)((()=>e.navigationActiveIcon||k.value)),I=(0,i.Fl)((()=>e.navigationPosition||(!0===e.vertical?"right":"bottom"))),N=(0,i.Fl)((()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0})));function A(){const t=!0===(0,m.hj)(e.autoplay)?Math.abs(e.autoplay):5e3;null!==c&&clearTimeout(c),c=setTimeout((()=>{c=null,t>=0?y():v()}),t)}function R(t,n){return(0,i.h)("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${t} q-carousel__navigation--${I.value}`+(void 0!==e.controlColor?` text-${e.controlColor}`:"")},[(0,i.h)("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},_().map(n))])}function O(){const n=[];if(!0===e.navigation){const e=void 0!==t["navigation-icon"]?t["navigation-icon"]:e=>(0,i.h)(r.Z,{key:"nav"+e.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${!0===e.active?"":"in"}active`,...e.btnProps,onClick:e.onClick}),s=l-1;n.push(R("buttons",((t,n)=>{const i=t.props.name,r=b.value===n;return e({index:n,maxIndex:s,name:i,active:r,btnProps:{icon:!0===r?x.value:k.value,size:"sm",...N.value},onClick:()=>{p(i)}})})))}else if(!0===e.thumbnails){const t=void 0!==e.controlColor?` text-${e.controlColor}`:"";n.push(R("thumbnails",(n=>{const r=n.props;return(0,i.h)("img",{key:"tmb#"+r.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${r.name===e.modelValue?"":"in"}active`+t,src:r.imgSrc||r["img-src"],onClick:()=>{p(r.name)}})})))}return!0===e.arrows&&b.value>=0&&((!0===e.infinite||b.value>0)&&n.push((0,i.h)("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${E.value} absolute flex flex-center`},[(0,i.h)(r.Z,{icon:T.value[0],...N.value,onClick:v})])),(!0===e.infinite||b.value<l-1)&&n.push((0,i.h)("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${E.value} absolute flex flex-center`},[(0,i.h)(r.Z,{icon:T.value[1],...N.value,onClick:y})]))),(0,g.vs)(t.control,n)}return(0,i.YP)((()=>e.modelValue),(()=>{e.autoplay&&A()})),(0,i.YP)((()=>e.autoplay),(e=>{e?A():null!==c&&(clearTimeout(c),c=null)})),(0,i.bv)((()=>{e.autoplay&&A()})),(0,i.Jd)((()=>{null!==c&&clearTimeout(c)})),()=>(l=u(t),(0,i.h)("div",{class:S.value,style:C.value},[(0,g.Jl)("div",{class:"q-carousel__slides-container"},h(),"sl-cont",e.swipeable,(()=>d.value))].concat(O())))}})},1694:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(9835),r=n(5987),s=n(6120),o=n(2026);const a=(0,r.L)({name:"QCarouselSlide",props:{...s.vZ,imgSrc:String},setup(e,{slots:t}){const n=(0,i.Fl)((()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{}));return()=>(0,i.h)("div",{class:"q-carousel__slide",style:n.value},(0,o.KR)(t.default))}})},396:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});n(9665);var i=n(9835),r=n(5987),s=n(2046);const o=(0,r.L)({name:"QChatMessage",props:{sent:Boolean,label:String,bgColor:String,textColor:String,name:String,avatar:String,text:Array,stamp:String,size:String,labelHtml:Boolean,nameHtml:Boolean,textHtml:Boolean,stampHtml:Boolean},setup(e,{slots:t}){const n=(0,i.Fl)((()=>!0===e.sent?"sent":"received")),r=(0,i.Fl)((()=>`q-message-text-content q-message-text-content--${n.value}`+(void 0!==e.textColor?` text-${e.textColor}`:""))),o=(0,i.Fl)((()=>`q-message-text q-message-text--${n.value}`+(void 0!==e.bgColor?` text-${e.bgColor}`:""))),a=(0,i.Fl)((()=>"q-message-container row items-end no-wrap"+(!0===e.sent?" reverse":""))),l=(0,i.Fl)((()=>void 0!==e.size?`col-${e.size}`:"")),c=(0,i.Fl)((()=>({msg:!0===e.textHtml?"innerHTML":"textContent",stamp:!0===e.stampHtml?"innerHTML":"textContent",name:!0===e.nameHtml?"innerHTML":"textContent",label:!0===e.labelHtml?"innerHTML":"textContent"})));function u(n){return void 0!==t.stamp?[n,(0,i.h)("div",{class:"q-message-stamp"},t.stamp())]:e.stamp?[n,(0,i.h)("div",{class:"q-message-stamp",[c.value.stamp]:e.stamp})]:[n]}function h(e,t){const n=!0===t?e.length>1?e=>e:e=>(0,i.h)("div",[e]):e=>(0,i.h)("div",{[c.value.msg]:e});return e.map(((e,t)=>(0,i.h)("div",{key:t,class:o.value},[(0,i.h)("div",{class:r.value},u(n(e)))])))}return()=>{const r=[];void 0!==t.avatar?r.push(t.avatar()):void 0!==e.avatar&&r.push((0,i.h)("img",{class:`q-message-avatar q-message-avatar--${n.value}`,src:e.avatar,"aria-hidden":"true"}));const o=[];void 0!==t.name?o.push((0,i.h)("div",{class:`q-message-name q-message-name--${n.value}`},t.name())):void 0!==e.name&&o.push((0,i.h)("div",{class:`q-message-name q-message-name--${n.value}`,[c.value.name]:e.name})),void 0!==t.default?o.push(h((0,s.Pf)(t.default()),!0)):void 0!==e.text&&o.push(h(e.text)),r.push((0,i.h)("div",{class:l.value},o));const u=[];return void 0!==t.label?u.push((0,i.h)("div",{class:"q-message-label"},t.label())):void 0!==e.label&&u.push((0,i.h)("div",{class:"q-message-label",[c.value.label]:e.label})),u.push((0,i.h)("div",{class:a.value},r)),(0,i.h)("div",{class:`q-message q-message-${n.value}`},u)}}})},3997:(e,t,n)=>{"use strict";n.d(t,{Z:()=>X});var i=n(9835),r=n(499),s=n(1957),o=n(5310);function a(e,t,n){let r;function s(){void 0!==r&&(o.Z.remove(r),r=void 0)}return(0,i.Jd)((()=>{!0===e.value&&s()})),{removeFromHistory:s,addToHistory(){r={condition:()=>!0===n.value,handler:t},o.Z.add(r)}}}var l=n(2695),c=n(6916),u=n(3842),h=n(431),d=n(2306),f=n(1384),p=n(3701),m=n(7506);let g,v,y,_,b,w,C=0,E=!1,S=null;function T(e){k(e)&&(0,f.NS)(e)}function k(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=(0,f.AZ)(e),n=e.shiftKey&&!e.deltaX,i=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=n||i?e.deltaY:e.deltaX;for(let s=0;s<t.length;s++){const e=t[s];if((0,p.QA)(e,i))return i?r<0&&0===e.scrollTop||r>0&&e.scrollTop+e.clientHeight===e.scrollHeight:r<0&&0===e.scrollLeft||r>0&&e.scrollLeft+e.clientWidth===e.scrollWidth}return!0}function x(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function I(e){!0!==E&&(E=!0,requestAnimationFrame((()=>{E=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:i}=document.scrollingElement;void 0!==y&&t===window.innerHeight||(y=n-t,document.scrollingElement.scrollTop=i),i>y&&(document.scrollingElement.scrollTop-=Math.ceil((i-y)/8))})))}function N(e){const t=document.body,n=void 0!==window.visualViewport;if("add"===e){const{overflowY:e,overflowX:i}=window.getComputedStyle(t);g=(0,p.OI)(window),v=(0,p.u3)(window),_=t.style.left,b=t.style.top,w=window.location.href,t.style.left=`-${g}px`,t.style.top=`-${v}px`,"hidden"!==i&&("scroll"===i||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),"hidden"!==e&&("scroll"===e||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,!0===m.client.is.ios&&(!0===n?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",I,f.listenOpts.passiveCapture),window.visualViewport.addEventListener("scroll",I,f.listenOpts.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",x,f.listenOpts.passiveCapture))}!0===m.client.is.desktop&&!0===m.client.is.mac&&window[`${e}EventListener`]("wheel",T,f.listenOpts.notPassive),"remove"===e&&(!0===m.client.is.ios&&(!0===n?(window.visualViewport.removeEventListener("resize",I,f.listenOpts.passiveCapture),window.visualViewport.removeEventListener("scroll",I,f.listenOpts.passiveCapture)):window.removeEventListener("scroll",x,f.listenOpts.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=_,t.style.top=b,window.location.href===w&&window.scrollTo(g,v),y=void 0)}function A(e){let t="add";if(!0===e){if(C++,null!==S)return clearTimeout(S),void(S=null);if(C>1)return}else{if(0===C)return;if(C--,C>0)return;if(t="remove",!0===m.client.is.ios&&!0===m.client.is.nativeMobile)return null!==S&&clearTimeout(S),void(S=setTimeout((()=>{N(t),S=null}),100))}N(t)}function R(){let e;return{preventBodyScroll(t){t===e||void 0===e&&!0!==t||(e=t,A(t))}}}var O=n(5987),P=n(223),D=n(2026),L=(n(9665),n(1705));const F=[];let M;function q(e){M=27===e.keyCode}function j(){!0===M&&(M=!1)}function $(e){!0===M&&(M=!1,!0===(0,L.So)(e,27)&&F[F.length-1](e))}function V(e){window[e]("keydown",q),window[e]("blur",j),window[e]("keyup",$),M=!1}function U(e){!0===m.client.is.desktop&&(F.push(e),1===F.length&&V("addEventListener"))}function B(e){const t=F.indexOf(e);t>-1&&(F.splice(t,1),0===F.length&&V("removeEventListener"))}const z=[];function H(e){z[z.length-1](e)}function W(e){!0===m.client.is.desktop&&(z.push(e),1===z.length&&document.body.addEventListener("focusin",H))}function K(e){const t=z.indexOf(e);t>-1&&(z.splice(t,1),0===z.length&&document.body.removeEventListener("focusin",H))}var G=n(7026);let Q=0;const Y={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},J={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},X=(0,O.L)({name:"QDialog",inheritAttrs:!1,props:{...u.vr,...h.D,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>"standard"===e||["top","bottom","left","right"].includes(e)}},emits:[...u.gH,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){const f=(0,i.FN)(),p=(0,r.iH)(null),m=(0,r.iH)(!1),g=(0,r.iH)(!1);let v,y,_=null,b=null;const w=(0,i.Fl)((()=>!0!==e.persistent&&!0!==e.noRouteDismiss&&!0!==e.seamless)),{preventBodyScroll:C}=R(),{registerTimeout:E}=(0,l.Z)(),{registerTick:S,removeTick:T}=(0,c.Z)(),{transitionProps:k,transitionStyle:x}=(0,h.Z)(e,(()=>J[e.position][0]),(()=>J[e.position][1])),{showPortal:I,hidePortal:N,portalIsAccessible:A,renderPortal:O}=(0,d.Z)(f,p,oe,"dialog"),{hide:L}=(0,u.ZP)({showing:m,hideOnRouteChange:w,handleShow:z,handleHide:H,processOnMount:!0}),{addToHistory:F,removeFromHistory:M}=a(m,L,w),q=(0,i.Fl)((()=>"q-dialog__inner flex no-pointer-events q-dialog__inner--"+(!0===e.maximized?"maximized":"minimized")+` q-dialog__inner--${e.position} ${Y[e.position]}`+(!0===g.value?" q-dialog__inner--animating":"")+(!0===e.fullWidth?" q-dialog__inner--fullwidth":"")+(!0===e.fullHeight?" q-dialog__inner--fullheight":"")+(!0===e.square?" q-dialog__inner--square":""))),j=(0,i.Fl)((()=>!0===m.value&&!0!==e.seamless)),$=(0,i.Fl)((()=>!0===e.autoClose?{onClick:ie}:{})),V=(0,i.Fl)((()=>["q-dialog fullscreen no-pointer-events q-dialog--"+(!0===j.value?"modal":"seamless"),o.class]));function z(t){F(),b=!1===e.noRefocus&&null!==document.activeElement?document.activeElement:null,ne(e.maximized),I(),g.value=!0,!0!==e.noFocus?(null!==document.activeElement&&document.activeElement.blur(),S(X)):T(),E((()=>{if(!0===f.proxy.$q.platform.is.ios){if(!0!==e.seamless&&document.activeElement){const{top:e,bottom:t}=document.activeElement.getBoundingClientRect(),{innerHeight:n}=window,i=void 0!==window.visualViewport?window.visualViewport.height:n;e>0&&t>i/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-i,t>=n?1/0:Math.ceil(document.scrollingElement.scrollTop+t-i/2))),document.activeElement.scrollIntoView()}y=!0,p.value.click(),y=!1}I(!0),g.value=!1,n("show",t)}),e.transitionDuration)}function H(t){T(),M(),te(!0),g.value=!0,N(),null!==b&&(((t&&0===t.type.indexOf("key")?b.closest('[tabindex]:not([tabindex^="-"])'):void 0)||b).focus(),b=null),E((()=>{N(!0),g.value=!1,n("hide",t)}),e.transitionDuration)}function X(e){(0,G.jd)((()=>{let t=p.value;null!==t&&!0!==t.contains(document.activeElement)&&(t=(""!==e?t.querySelector(e):null)||t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))}))}function Z(e){e&&"function"===typeof e.focus?e.focus({preventScroll:!0}):X(),n("shake");const t=p.value;null!==t&&(t.classList.remove("q-animate--scale"),t.classList.add("q-animate--scale"),null!==_&&clearTimeout(_),_=setTimeout((()=>{_=null,null!==p.value&&(t.classList.remove("q-animate--scale"),X())}),170))}function ee(){!0!==e.seamless&&(!0===e.persistent||!0===e.noEscDismiss?!0!==e.maximized&&!0!==e.noShake&&Z():(n("escapeKey"),L()))}function te(t){null!==_&&(clearTimeout(_),_=null),!0!==t&&!0!==m.value||(ne(!1),!0!==e.seamless&&(C(!1),K(se),B(ee))),!0!==t&&(b=null)}function ne(e){!0===e?!0!==v&&(Q<1&&document.body.classList.add("q-body--dialog"),Q++,v=!0):!0===v&&(Q<2&&document.body.classList.remove("q-body--dialog"),Q--,v=!1)}function ie(e){!0!==y&&(L(e),n("click",e))}function re(t){!0!==e.persistent&&!0!==e.noBackdropDismiss?L(t):!0!==e.noShake&&Z()}function se(t){!0!==e.allowFocusOutside&&!0===A.value&&!0!==(0,P.mY)(p.value,t.target)&&X('[tabindex]:not([tabindex="-1"])')}function oe(){return(0,i.h)("div",{role:"dialog","aria-modal":!0===j.value?"true":"false",...o,class:V.value},[(0,i.h)(s.uT,{name:"q-transition--fade",appear:!0},(()=>!0===j.value?(0,i.h)("div",{class:"q-dialog__backdrop fixed-full",style:x.value,"aria-hidden":"true",tabindex:-1,onClick:re}):null)),(0,i.h)(s.uT,k.value,(()=>!0===m.value?(0,i.h)("div",{ref:p,class:q.value,style:x.value,tabindex:-1,...$.value},(0,D.KR)(t.default)):null))])}return(0,i.YP)((()=>e.maximized),(e=>{!0===m.value&&ne(e)})),(0,i.YP)(j,(e=>{C(e),!0===e?(W(se),U(ee)):(K(se),B(ee))})),Object.assign(f.proxy,{focus:X,shake:Z,__updateRefocusTarget(e){b=e||null}}),(0,i.Jd)(te),O}})},249:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var i=n(9835),r=n(499),s=n(7506),o=n(1868),a=n(883),l=n(5987),c=n(3701),u=n(2026),h=n(5439);const d=(0,l.L)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=(0,i.FN)(),d=(0,r.iH)(null),f=(0,r.iH)(l.screen.height),p=(0,r.iH)(!0===e.container?0:l.screen.width),m=(0,r.iH)({position:0,direction:"down",inflectionPoint:0}),g=(0,r.iH)(0),v=(0,r.iH)(!0===s.uX.value?0:(0,c.np)()),y=(0,i.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),_=(0,i.Fl)((()=>!1===e.container?{minHeight:l.screen.height+"px"}:null)),b=(0,i.Fl)((()=>0!==v.value?{[!0===l.lang.rtl?"left":"right"]:`${v.value}px`}:null)),w=(0,i.Fl)((()=>0!==v.value?{[!0===l.lang.rtl?"right":"left"]:0,[!0===l.lang.rtl?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null));function C(t){if(!0===e.container||!0!==document.qScrollPrevented){const i={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};m.value=i,void 0!==e.onScroll&&n("scroll",i)}}function E(t){const{height:i,width:r}=t;let s=!1;f.value!==i&&(s=!0,f.value=i,void 0!==e.onScrollHeight&&n("scrollHeight",i),T()),p.value!==r&&(s=!0,p.value=r),!0===s&&void 0!==e.onResize&&n("resize",t)}function S({height:e}){g.value!==e&&(g.value=e,T())}function T(){if(!0===e.container){const e=f.value>g.value?(0,c.np)():0;v.value!==e&&(v.value=e)}}let k=null;const x={instances:{},view:(0,i.Fl)((()=>e.view)),isContainer:(0,i.Fl)((()=>e.container)),rootRef:d,height:f,containerHeight:g,scrollbarWidth:v,totalWidth:(0,i.Fl)((()=>p.value+v.value)),rows:(0,i.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,r.qj)({size:0,offset:0,space:!1}),right:(0,r.qj)({size:300,offset:0,space:!1}),footer:(0,r.qj)({size:0,offset:0,space:!1}),left:(0,r.qj)({size:300,offset:0,space:!1}),scroll:m,animate(){null!==k?clearTimeout(k):document.body.classList.add("q-body--layout-animate"),k=setTimeout((()=>{k=null,document.body.classList.remove("q-body--layout-animate")}),155)},update(e,t,n){x[e][t]=n}};if((0,i.JJ)(h.YE,x),(0,c.np)()>0){let I=null;const N=document.body;function A(){I=null,N.classList.remove("hide-scrollbar")}function R(){if(null===I){if(N.scrollHeight>l.screen.height)return;N.classList.add("hide-scrollbar")}else clearTimeout(I);I=setTimeout(A,300)}function O(e){null!==I&&"remove"===e&&(clearTimeout(I),A()),window[`${e}EventListener`]("resize",R)}(0,i.YP)((()=>!0!==e.container?"add":"remove"),O),!0!==e.container&&O("add"),(0,i.Ah)((()=>{O("remove")}))}return()=>{const n=(0,u.vs)(t.default,[(0,i.h)(o.Z,{onScroll:C}),(0,i.h)(a.Z,{onResize:E})]),r=(0,i.h)("div",{class:y.value,style:_.value,ref:!0===e.container?void 0:d,tabindex:-1},n);return!0===e.container?(0,i.h)("div",{class:"q-layout-container overflow-hidden",ref:d},[(0,i.h)(a.Z,{onResize:S}),(0,i.h)("div",{class:"absolute-full",style:b.value},[(0,i.h)("div",{class:"scroll",style:w.value},[r])])]):r}}})},627:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var i=n(5987),r=n(9835),s=n(2026),o=n(5439);const a={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>2===e.length},expand:Boolean};function l(){const{props:e,proxy:{$q:t}}=(0,r.FN)(),n=(0,r.f3)(o.YE,o.qO);if(n===o.qO)return console.error("QPageSticky needs to be child of QLayout"),o.qO;const i=(0,r.Fl)((()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:"top"===t||"bottom"===t,horizontal:"left"===t||"right"===t}})),a=(0,r.Fl)((()=>n.header.offset)),l=(0,r.Fl)((()=>n.right.offset)),c=(0,r.Fl)((()=>n.footer.offset)),u=(0,r.Fl)((()=>n.left.offset)),h=(0,r.Fl)((()=>{let n=0,r=0;const s=i.value,o=!0===t.lang.rtl?-1:1;!0===s.top&&0!==a.value?r=`${a.value}px`:!0===s.bottom&&0!==c.value&&(r=-c.value+"px"),!0===s.left&&0!==u.value?n=o*u.value+"px":!0===s.right&&0!==l.value&&(n=-o*l.value+"px");const h={transform:`translate(${n}, ${r})`};return e.offset&&(h.margin=`${e.offset[1]}px ${e.offset[0]}px`),!0===s.vertical?(0!==u.value&&(h[!0===t.lang.rtl?"right":"left"]=`${u.value}px`),0!==l.value&&(h[!0===t.lang.rtl?"left":"right"]=`${l.value}px`)):!0===s.horizontal&&(0!==a.value&&(h.top=`${a.value}px`),0!==c.value&&(h.bottom=`${c.value}px`)),h})),d=(0,r.Fl)((()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--`+(!0===e.expand?"expand":"shrink")));function f(t){const n=(0,s.KR)(t.default);return(0,r.h)("div",{class:d.value,style:h.value},!0===e.expand?n:[(0,r.h)("div",n)])}return{$layout:n,getStickyContent:f}}const c=(0,i.L)({name:"QPageSticky",props:a,setup(e,{slots:t}){const{getStickyContent:n}=l();return()=>n(t)}})},9885:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(9835),r=n(5987),s=n(2026),o=n(5439);const a=(0,r.L)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,i.FN)(),r=(0,i.f3)(o.YE,o.qO);if(r===o.qO)return console.error("QPage needs to be a deep child of QLayout"),o.qO;const a=(0,i.f3)(o.Mw,o.qO);if(a===o.qO)return console.error("QPage needs to be child of QPageContainer"),o.qO;const l=(0,i.Fl)((()=>{const t=(!0===r.header.space?r.header.size:0)+(!0===r.footer.space?r.footer.size:0);if("function"===typeof e.styleFn){const i=!0===r.isContainer.value?r.containerHeight.value:n.screen.height;return e.styleFn(t,i)}return{minHeight:!0===r.isContainer.value?r.containerHeight.value-t+"px":0===n.screen.height?0!==t?`calc(100vh - ${t}px)`:"100vh":n.screen.height-t+"px"}})),c=(0,i.Fl)((()=>"q-page"+(!0===e.padding?" q-layout-padding":"")));return()=>(0,i.h)("main",{class:c.value,style:l.value},(0,s.KR)(t.default))}})},2133:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(9835),r=n(5987),s=n(2026),o=n(5439);const a=(0,r.L)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=(0,i.FN)(),r=(0,i.f3)(o.YE,o.qO);if(r===o.qO)return console.error("QPageContainer needs to be child of QLayout"),o.qO;(0,i.JJ)(o.Mw,!0);const a=(0,i.Fl)((()=>{const e={};return!0===r.header.space&&(e.paddingTop=`${r.header.size}px`),!0===r.right.space&&(e["padding"+(!0===n.lang.rtl?"Left":"Right")]=`${r.right.size}px`),!0===r.footer.space&&(e.paddingBottom=`${r.footer.size}px`),!0===r.left.space&&(e["padding"+(!0===n.lang.rtl?"Right":"Left")]=`${r.left.size}px`),e}));return()=>(0,i.h)("div",{class:"q-page-container",style:a.value},(0,s.KR)(t.default))}})},883:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var i=n(9835),r=n(499),s=n(7506);function o(){const e=(0,r.iH)(!s.uX.value);return!1===e.value&&(0,i.bv)((()=>{e.value=!0})),e}var a=n(5987),l=n(1384);const c="undefined"!==typeof ResizeObserver,u=!0===c?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},h=(0,a.L)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n,r=null,s={width:-1,height:-1};function a(t){!0===t||0===e.debounce||"0"===e.debounce?h():null===r&&(r=setTimeout(h,e.debounce))}function h(){if(null!==r&&(clearTimeout(r),r=null),n){const{offsetWidth:e,offsetHeight:i}=n;e===s.width&&i===s.height||(s={width:e,height:i},t("resize",s))}}const{proxy:d}=(0,i.FN)();if(!0===c){let f;const p=e=>{n=d.$el.parentNode,n?(f=new ResizeObserver(a),f.observe(n),h()):!0!==e&&(0,i.Y3)((()=>{p(!0)}))};return(0,i.bv)((()=>{p()})),(0,i.Jd)((()=>{null!==r&&clearTimeout(r),void 0!==f&&(void 0!==f.disconnect?f.disconnect():n&&f.unobserve(n))})),l.ZT}{const m=o();let g;function v(){null!==r&&(clearTimeout(r),r=null),void 0!==g&&(void 0!==g.removeEventListener&&g.removeEventListener("resize",a,l.listenOpts.passive),g=void 0)}function y(){v(),n&&n.contentDocument&&(g=n.contentDocument.defaultView,g.addEventListener("resize",a,l.listenOpts.passive),h())}return(0,i.bv)((()=>{(0,i.Y3)((()=>{n=d.$el,n&&y()}))})),(0,i.Jd)(v),d.trigger=a,()=>{if(!0===m.value)return(0,i.h)("object",{style:u.style,tabindex:-1,type:"text/html",data:u.url,"aria-hidden":"true",onLoad:y})}}}})},1739:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var i=n(499),r=n(9835),s=n(8234),o=n(883),a=n(1868),l=n(7506),c=n(5987),u=n(9367),h=n(1384),d=n(2589);function f(e,t,n){const i=(0,h.FK)(e);let r,s=i.left-t.event.x,o=i.top-t.event.y,a=Math.abs(s),l=Math.abs(o);const c=t.direction;!0===c.horizontal&&!0!==c.vertical?r=s<0?"left":"right":!0!==c.horizontal&&!0===c.vertical?r=o<0?"up":"down":!0===c.up&&o<0?(r="up",a>l&&(!0===c.left&&s<0?r="left":!0===c.right&&s>0&&(r="right"))):!0===c.down&&o>0?(r="down",a>l&&(!0===c.left&&s<0?r="left":!0===c.right&&s>0&&(r="right"))):!0===c.left&&s<0?(r="left",a<l&&(!0===c.up&&o<0?r="up":!0===c.down&&o>0&&(r="down"))):!0===c.right&&s>0&&(r="right",a<l&&(!0===c.up&&o<0?r="up":!0===c.down&&o>0&&(r="down")));let u=!1;if(void 0===r&&!1===n){if(!0===t.event.isFirst||void 0===t.event.lastDir)return{};r=t.event.lastDir,u=!0,"left"===r||"right"===r?(i.left-=s,a=0,s=0):(i.top-=o,l=0,o=0)}return{synthetic:u,payload:{evt:e,touch:!0!==t.event.mouse,mouse:!0===t.event.mouse,position:i,direction:r,isFirst:t.event.isFirst,isFinal:!0===n,duration:Date.now()-t.event.time,distance:{x:a,y:l},offset:{x:s,y:o},delta:{x:i.left-t.event.lastX,y:i.top-t.event.lastY}}}}let p=0;const m=(0,c.f)({name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(!0!==n.mouse&&!0!==l.client.has.touch)return;function i(e,t){!0===n.mouse&&!0===t?(0,h.NS)(e):(!0===n.stop&&(0,h.sT)(e),!0===n.prevent&&(0,h.X$)(e))}const r={uid:"qvtp_"+p++,handler:t,modifiers:n,direction:(0,u.R)(n),noop:h.ZT,mouseStart(e){(0,u.n)(e,r)&&(0,h.du)(e)&&((0,h.M0)(r,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),r.start(e,!0))},touchStart(e){if((0,u.n)(e,r)){const t=e.target;(0,h.M0)(r,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","passiveCapture"],[t,"touchend","end","passiveCapture"]]),r.start(e)}},start(t,i){if(!0===l.client.is.firefox&&(0,h.Jf)(e,!0),r.lastEvt=t,!0===i||!0===n.stop){if(!0!==r.direction.all&&(!0!==i||!0!==r.modifiers.mouseAllDir&&!0!==r.modifiers.mousealldir)){const e=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);!0===t.defaultPrevented&&(0,h.X$)(e),!0===t.cancelBubble&&(0,h.sT)(e),Object.assign(e,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:void 0===t.qClonedBy?[r.uid]:t.qClonedBy.concat(r.uid)}),r.initialEvent={target:t.target,event:e}}(0,h.sT)(t)}const{left:s,top:o}=(0,h.FK)(t);r.event={x:s,y:o,time:Date.now(),mouse:!0===i,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:o}},move(e){if(void 0===r.event)return;const t=(0,h.FK)(e),s=t.left-r.event.x,o=t.top-r.event.y;if(0===s&&0===o)return;r.lastEvt=e;const a=!0===r.event.mouse,l=()=>{let t;i(e,a),!0!==n.preserveCursor&&!0!==n.preservecursor&&(t=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),!0===a&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),(0,d.M)(),r.styleCleanup=e=>{if(r.styleCleanup=void 0,void 0!==t&&(document.documentElement.style.cursor=t),document.body.classList.remove("non-selectable"),!0===a){const t=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==e?setTimeout((()=>{t(),e()}),50):t()}else void 0!==e&&e()}};if(!0===r.event.detected){!0!==r.event.isFirst&&i(e,r.event.mouse);const{payload:t,synthetic:n}=f(e,r,!1);return void(void 0!==t&&(!1===r.handler(t)?r.end(e):(void 0===r.styleCleanup&&!0===r.event.isFirst&&l(),r.event.lastX=t.position.left,r.event.lastY=t.position.top,r.event.lastDir=!0===n?void 0:t.direction,r.event.isFirst=!1)))}if(!0===r.direction.all||!0===a&&(!0===r.modifiers.mouseAllDir||!0===r.modifiers.mousealldir))return l(),r.event.detected=!0,void r.move(e);const c=Math.abs(s),u=Math.abs(o);c!==u&&(!0===r.direction.horizontal&&c>u||!0===r.direction.vertical&&c<u||!0===r.direction.up&&c<u&&o<0||!0===r.direction.down&&c<u&&o>0||!0===r.direction.left&&c>u&&s<0||!0===r.direction.right&&c>u&&s>0?(r.event.detected=!0,r.move(e)):r.end(e,!0))},end(t,n){if(void 0!==r.event){if((0,h.ul)(r,"temp"),!0===l.client.is.firefox&&(0,h.Jf)(e,!1),!0===n)void 0!==r.styleCleanup&&r.styleCleanup(),!0!==r.event.detected&&void 0!==r.initialEvent&&r.initialEvent.target.dispatchEvent(r.initialEvent.event);else if(!0===r.event.detected){!0===r.event.isFirst&&r.handler(f(void 0===t?r.lastEvt:t,r).payload);const{payload:e}=f(void 0===t?r.lastEvt:t,r,!0),n=()=>{r.handler(e)};void 0!==r.styleCleanup?r.styleCleanup(n):n()}r.event=void 0,r.initialEvent=void 0,r.lastEvt=void 0}}};if(e.__qtouchpan=r,!0===n.mouse){const t=!0===n.mouseCapture||!0===n.mousecapture?"Capture":"";(0,h.M0)(r,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}!0===l.client.has.touch&&(0,h.M0)(r,"main",[[e,"touchstart","touchStart","passive"+(!0===n.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;void 0!==n&&(t.oldValue!==t.value&&("function"!==typeof value&&n.end(),n.handler=t.value),n.direction=(0,u.R)(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;void 0!==t&&(void 0!==t.event&&t.end(),(0,h.ul)(t,"main"),(0,h.ul)(t,"temp"),!0===l.client.is.firefox&&(0,h.Jf)(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchpan)}});function g(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}var v=n(3701),y=n(2026),_=n(899);const b=["vertical","horizontal"],w={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},C={prevent:!0,mouse:!0,mouseAllDir:!0},E=e=>e>=250?50:Math.ceil(e/5),S=(0,c.L)({name:"QScrollArea",props:{...s.S,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:t,emit:n}){const l=(0,i.iH)(!1),c=(0,i.iH)(!1),u=(0,i.iH)(!1),h={vertical:(0,i.iH)(0),horizontal:(0,i.iH)(0)},d={vertical:{ref:(0,i.iH)(null),position:(0,i.iH)(0),size:(0,i.iH)(0)},horizontal:{ref:(0,i.iH)(null),position:(0,i.iH)(0),size:(0,i.iH)(0)}},{proxy:f}=(0,r.FN)(),p=(0,s.Z)(e,f.$q);let S,T=null;const k=(0,i.iH)(null),x=(0,r.Fl)((()=>"q-scrollarea"+(!0===p.value?" q-scrollarea--dark":"")));d.vertical.percentage=(0,r.Fl)((()=>{const e=d.vertical.size.value-h.vertical.value;if(e<=0)return 0;const t=g(d.vertical.position.value/e,0,1);return Math.round(1e4*t)/1e4})),d.vertical.thumbHidden=(0,r.Fl)((()=>!0!==(null===e.visible?u.value:e.visible)&&!1===l.value&&!1===c.value||d.vertical.size.value<=h.vertical.value+1)),d.vertical.thumbStart=(0,r.Fl)((()=>d.vertical.percentage.value*(h.vertical.value-d.vertical.thumbSize.value))),d.vertical.thumbSize=(0,r.Fl)((()=>Math.round(g(h.vertical.value*h.vertical.value/d.vertical.size.value,E(h.vertical.value),h.vertical.value)))),d.vertical.style=(0,r.Fl)((()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${d.vertical.thumbStart.value}px`,height:`${d.vertical.thumbSize.value}px`}))),d.vertical.thumbClass=(0,r.Fl)((()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(!0===d.vertical.thumbHidden.value?" q-scrollarea__thumb--invisible":""))),d.vertical.barClass=(0,r.Fl)((()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(!0===d.vertical.thumbHidden.value?" q-scrollarea__bar--invisible":""))),d.horizontal.percentage=(0,r.Fl)((()=>{const e=d.horizontal.size.value-h.horizontal.value;if(e<=0)return 0;const t=g(Math.abs(d.horizontal.position.value)/e,0,1);return Math.round(1e4*t)/1e4})),d.horizontal.thumbHidden=(0,r.Fl)((()=>!0!==(null===e.visible?u.value:e.visible)&&!1===l.value&&!1===c.value||d.horizontal.size.value<=h.horizontal.value+1)),d.horizontal.thumbStart=(0,r.Fl)((()=>d.horizontal.percentage.value*(h.horizontal.value-d.horizontal.thumbSize.value))),d.horizontal.thumbSize=(0,r.Fl)((()=>Math.round(g(h.horizontal.value*h.horizontal.value/d.horizontal.size.value,E(h.horizontal.value),h.horizontal.value)))),d.horizontal.style=(0,r.Fl)((()=>({...e.thumbStyle,...e.horizontalThumbStyle,[!0===f.$q.lang.rtl?"right":"left"]:`${d.horizontal.thumbStart.value}px`,width:`${d.horizontal.thumbSize.value}px`}))),d.horizontal.thumbClass=(0,r.Fl)((()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(!0===d.horizontal.thumbHidden.value?" q-scrollarea__thumb--invisible":""))),d.horizontal.barClass=(0,r.Fl)((()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(!0===d.horizontal.thumbHidden.value?" q-scrollarea__bar--invisible":"")));const I=(0,r.Fl)((()=>!0===d.vertical.thumbHidden.value&&!0===d.horizontal.thumbHidden.value?e.contentStyle:e.contentActiveStyle)),N=[[m,e=>{M(e,"vertical")},void 0,{vertical:!0,...C}]],A=[[m,e=>{M(e,"horizontal")},void 0,{horizontal:!0,...C}]];function R(){const e={};return b.forEach((t=>{const n=d[t];e[t+"Position"]=n.position.value,e[t+"Percentage"]=n.percentage.value,e[t+"Size"]=n.size.value,e[t+"ContainerSize"]=h[t].value})),e}const O=(0,_.Z)((()=>{const e=R();e.ref=f,n("scroll",e)}),0);function P(e,t,n){if(!1===b.includes(e))return void console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");const i="vertical"===e?v.f3:v.ik;i(k.value,t,n)}function D({height:e,width:t}){let n=!1;h.vertical.value!==e&&(h.vertical.value=e,n=!0),h.horizontal.value!==t&&(h.horizontal.value=t,n=!0),!0===n&&V()}function L({position:e}){let t=!1;d.vertical.position.value!==e.top&&(d.vertical.position.value=e.top,t=!0),d.horizontal.position.value!==e.left&&(d.horizontal.position.value=e.left,t=!0),!0===t&&V()}function F({height:e,width:t}){d.horizontal.size.value!==t&&(d.horizontal.size.value=t,V()),d.vertical.size.value!==e&&(d.vertical.size.value=e,V())}function M(e,t){const n=d[t];if(!0===e.isFirst){if(!0===n.thumbHidden.value)return;S=n.position.value,c.value=!0}else if(!0!==c.value)return;!0===e.isFinal&&(c.value=!1);const i=w[t],r=h[t].value,s=(n.size.value-r)/(r-n.thumbSize.value),o=e.distance[i.dist],a=S+(e.direction===i.dir?1:-1)*o*s;U(a,t)}function q(e,t){const n=d[t];if(!0!==n.thumbHidden.value){const i=e[w[t].offset];if(i<n.thumbStart.value||i>n.thumbStart.value+n.thumbSize.value){const e=i-n.thumbSize.value/2;U(e/h[t].value*n.size.value,t)}null!==n.ref.value&&n.ref.value.dispatchEvent(new MouseEvent(e.type,e))}}function j(e){q(e,"vertical")}function $(e){q(e,"horizontal")}function V(){l.value=!0,null!==T&&clearTimeout(T),T=setTimeout((()=>{T=null,l.value=!1}),e.delay),void 0!==e.onScroll&&O()}function U(e,t){k.value[w[t].scroll]=e}function B(){u.value=!0}function z(){u.value=!1}let H=null;return(0,r.YP)((()=>f.$q.lang.rtl),(e=>{null!==k.value&&(0,v.ik)(k.value,Math.abs(d.horizontal.position.value)*(!0===e?-1:1))})),(0,r.se)((()=>{H={top:d.vertical.position.value,left:d.horizontal.position.value}})),(0,r.dl)((()=>{if(null===H)return;const e=k.value;null!==e&&((0,v.ik)(e,H.left),(0,v.f3)(e,H.top))})),(0,r.Jd)(O.cancel),Object.assign(f,{getScrollTarget:()=>k.value,getScroll:R,getScrollPosition:()=>({top:d.vertical.position.value,left:d.horizontal.position.value}),getScrollPercentage:()=>({top:d.vertical.percentage.value,left:d.horizontal.percentage.value}),setScrollPosition:P,setScrollPercentage(e,t,n){P(e,t*(d[e].size.value-h[e].value)*("horizontal"===e&&!0===f.$q.lang.rtl?-1:1),n)}}),()=>(0,r.h)("div",{class:x.value,onMouseenter:B,onMouseleave:z},[(0,r.h)("div",{ref:k,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:void 0!==e.tabindex?e.tabindex:void 0},[(0,r.h)("div",{class:"q-scrollarea__content absolute",style:I.value},(0,y.vs)(t.default,[(0,r.h)(o.Z,{debounce:0,onResize:F})])),(0,r.h)(a.Z,{axis:"both",onScroll:L})]),(0,r.h)(o.Z,{debounce:0,onResize:D}),(0,r.h)("div",{class:d.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:j}),(0,r.h)("div",{class:d.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:$}),(0,r.wy)((0,r.h)("div",{ref:d.vertical.ref,class:d.vertical.thumbClass.value,style:d.vertical.style.value,"aria-hidden":"true"}),N),(0,r.wy)((0,r.h)("div",{ref:d.horizontal.ref,class:d.horizontal.thumbClass.value,style:d.horizontal.style.value,"aria-hidden":"true"}),A)])}})},1868:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var i=n(9835),r=n(5987),s=n(3701),o=n(1384);const{passive:a}=o.listenOpts,l=["both","horizontal","vertical"],c=(0,r.L)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>l.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r,l,c=null;function u(){null!==c&&c();const i=Math.max(0,(0,s.u3)(r)),o=(0,s.OI)(r),a={top:i-n.position.top,left:o-n.position.left};if("vertical"===e.axis&&0===a.top||"horizontal"===e.axis&&0===a.left)return;const l=Math.abs(a.top)>=Math.abs(a.left)?a.top<0?"up":"down":a.left<0?"left":"right";n.position={top:i,left:o},n.directionChanged=n.direction!==l,n.delta=a,!0===n.directionChanged&&(n.direction=l,n.inflectionPoint=n.position),t("scroll",{...n})}function h(){r=(0,s.b0)(l,e.scrollTarget),r.addEventListener("scroll",f,a),f(!0)}function d(){void 0!==r&&(r.removeEventListener("scroll",f,a),r=void 0)}function f(t){if(!0===t||0===e.debounce||"0"===e.debounce)u();else if(null===c){const[t,n]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];c=()=>{n(t),c=null}}}(0,i.YP)((()=>e.scrollTarget),(()=>{d(),h()}));const{proxy:p}=(0,i.FN)();return(0,i.YP)((()=>p.$q.lang.rtl),u),(0,i.bv)((()=>{l=p.$el.parentNode,h()})),(0,i.Jd)((()=>{null!==c&&c(),d()})),Object.assign(p,{trigger:f,getPosition:()=>n}),o.ZT}})},136:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(9835),r=n(5987);const s=(0,i.h)("div",{class:"q-space"}),o=(0,r.L)({name:"QSpace",setup(){return()=>s}})},7048:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$});var i=n(9835),r=n(499),s=n(1957),o=n(2589),a=n(1384),l=n(1705);const c={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function u({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:s,proxy:c,emit:u}=(0,i.FN)(),h=(0,r.iH)(null);let d=null;function f(e){return null!==h.value&&(void 0===e||void 0===e.touches||e.touches.length<=1)}const p={};function m(){(0,a.ul)(p,"anchor")}function g(e){h.value=e;while(h.value.classList.contains("q-anchor--skip"))h.value=h.value.parentNode;n()}function v(){if(!1===s.target||""===s.target||null===c.$el.parentNode)h.value=null;else if(!0===s.target)g(c.$el.parentNode);else{let t=s.target;if("string"===typeof s.target)try{t=document.querySelector(s.target)}catch(e){t=void 0}void 0!==t&&null!==t?(h.value=t.$el||t,n()):(h.value=null,console.error(`Anchor: target "${s.target}" not found`))}}return void 0===n&&(Object.assign(p,{hide(e){c.hide(e)},toggle(e){c.toggle(e),e.qAnchorHandled=!0},toggleKey(e){!0===(0,l.So)(e,13)&&p.toggle(e)},contextClick(e){c.hide(e),(0,a.X$)(e),(0,i.Y3)((()=>{c.show(e),e.qAnchorHandled=!0}))},prevent:a.X$,mobileTouch(e){if(p.mobileCleanup(e),!0!==f(e))return;c.hide(e),h.value.classList.add("non-selectable");const t=e.target;(0,a.M0)(p,"anchor",[[t,"touchmove","mobileCleanup","passive"],[t,"touchend","mobileCleanup","passive"],[t,"touchcancel","mobileCleanup","passive"],[h.value,"contextmenu","prevent","notPassive"]]),d=setTimeout((()=>{d=null,c.show(e),e.qAnchorHandled=!0}),300)},mobileCleanup(t){h.value.classList.remove("non-selectable"),null!==d&&(clearTimeout(d),d=null),!0===e.value&&void 0!==t&&(0,o.M)()}}),n=function(e=s.contextMenu){if(!0===s.noParentEvent||null===h.value)return;let t;t=!0===e?!0===c.$q.platform.is.mobile?[[h.value,"touchstart","mobileTouch","passive"]]:[[h.value,"mousedown","hide","passive"],[h.value,"contextmenu","contextClick","notPassive"]]:[[h.value,"click","toggle","passive"],[h.value,"keyup","toggleKey","passive"]],(0,a.M0)(p,"anchor",t)}),(0,i.YP)((()=>s.contextMenu),(e=>{null!==h.value&&(m(),n(e))})),(0,i.YP)((()=>s.target),(()=>{null!==h.value&&m(),v()})),(0,i.YP)((()=>s.noParentEvent),(e=>{null!==h.value&&(!0===e?m():n())})),(0,i.bv)((()=>{v(),!0!==t&&!0===s.modelValue&&null===h.value&&u("update:modelValue",!1)})),(0,i.Jd)((()=>{null!==d&&clearTimeout(d),m()})),{anchorEl:h,canShow:f,anchorEvents:p}}function h(e,t){const n=(0,r.iH)(null);let s;function o(e,t){const n=(void 0!==t?"add":"remove")+"EventListener",i=void 0!==t?t:s;e!==window&&e[n]("scroll",i,a.listenOpts.passive),window[n]("scroll",i,a.listenOpts.passive),s=t}function l(){null!==n.value&&(o(n.value),n.value=null)}const c=(0,i.YP)((()=>e.noParentEvent),(()=>{null!==n.value&&(l(),t())}));return(0,i.Jd)(c),{localScrollTarget:n,unconfigureScrollTarget:l,changeScrollEvent:o}}var d=n(3842),f=n(2306),p=n(431),m=n(6916),g=n(2695),v=n(5987),y=n(3701),_=n(2026),b=(n(9665),n(2909));let w=null;const{notPassiveCapture:C}=a.listenOpts,E=[];function S(e){null!==w&&(clearTimeout(w),w=null);const t=e.target;if(void 0===t||8===t.nodeType||!0===t.classList.contains("no-pointer-events"))return;let n=b.Q$.length-1;while(n>=0){const e=b.Q$[n].$;if("QDialog"!==e.type.name)break;if(!0!==e.props.seamless)return;n--}for(let i=E.length-1;i>=0;i--){const n=E[i];if(null!==n.anchorEl.value&&!1!==n.anchorEl.value.contains(t)||t!==document.body&&(null===n.innerRef.value||!1!==n.innerRef.value.contains(t)))return;e.qClickOutside=!0,n.onClickOutside(e)}}function T(e){E.push(e),1===E.length&&(document.addEventListener("mousedown",S,C),document.addEventListener("touchstart",S,C))}function k(e){const t=E.findIndex((t=>t===e));t>-1&&(E.splice(t,1),0===E.length&&(null!==w&&(clearTimeout(w),w=null),document.removeEventListener("mousedown",S,C),document.removeEventListener("touchstart",S,C)))}var x=n(7506);let I,N;function A(e){const t=e.split(" ");return 2===t.length&&(!0!==["top","center","bottom"].includes(t[0])?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):!0===["left","middle","right","start","end"].includes(t[1])||(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1))}function R(e){return!e||2===e.length&&("number"===typeof e[0]&&"number"===typeof e[1])}const O={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};function P(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:O[`${n[1]}#${!0===t?"rtl":"ltr"}`]}}function D(e,t){let{top:n,left:i,right:r,bottom:s,width:o,height:a}=e.getBoundingClientRect();return void 0!==t&&(n-=t[1],i-=t[0],s+=t[1],r+=t[0],o+=t[0],a+=t[1]),{top:n,bottom:s,height:a,left:i,right:r,width:o,middle:i+(r-i)/2,center:n+(s-n)/2}}function L(e,t,n){let{top:i,left:r}=e.getBoundingClientRect();return i+=t.top,r+=t.left,void 0!==n&&(i+=n[1],r+=n[0]),{top:i,bottom:i+1,height:1,left:r,right:r+1,width:1,middle:r,center:i}}function F(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function M(e,t,n){return{top:e[n.anchorOrigin.vertical]-t[n.selfOrigin.vertical],left:e[n.anchorOrigin.horizontal]-t[n.selfOrigin.horizontal]}}function q(e){if(!0===x.client.is.ios&&void 0!==window.visualViewport){const e=document.body.style,{offsetLeft:t,offsetTop:n}=window.visualViewport;t!==I&&(e.setProperty("--q-pe-left",t+"px"),I=t),n!==N&&(e.setProperty("--q-pe-top",n+"px"),N=n)}const{scrollLeft:t,scrollTop:n}=e.el,i=void 0===e.absoluteOffset?D(e.anchorEl,!0===e.cover?[0,0]:e.offset):L(e.anchorEl,e.absoluteOffset,e.offset);let r={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};!0!==e.fit&&!0!==e.cover||(r.minWidth=i.width+"px",!0===e.cover&&(r.minHeight=i.height+"px")),Object.assign(e.el.style,r);const s=F(e.el);let o=M(i,s,e);if(void 0===e.absoluteOffset||void 0===e.offset)j(o,i,s,e.anchorOrigin,e.selfOrigin);else{const{top:t,left:n}=o;j(o,i,s,e.anchorOrigin,e.selfOrigin);let r=!1;if(o.top!==t){r=!0;const t=2*e.offset[1];i.center=i.top-=t,i.bottom-=t+2}if(o.left!==n){r=!0;const t=2*e.offset[0];i.middle=i.left-=t,i.right-=t+2}!0===r&&(o=M(i,s,e),j(o,i,s,e.anchorOrigin,e.selfOrigin))}r={top:o.top+"px",left:o.left+"px"},void 0!==o.maxHeight&&(r.maxHeight=o.maxHeight+"px",i.height>o.maxHeight&&(r.minHeight=r.maxHeight)),void 0!==o.maxWidth&&(r.maxWidth=o.maxWidth+"px",i.width>o.maxWidth&&(r.minWidth=r.maxWidth)),Object.assign(e.el.style,r),e.el.scrollTop!==n&&(e.el.scrollTop=n),e.el.scrollLeft!==t&&(e.el.scrollLeft=t)}function j(e,t,n,i,r){const s=n.bottom,o=n.right,a=(0,y.np)(),l=window.innerHeight-a,c=document.body.clientWidth;if(e.top<0||e.top+s>l)if("center"===r.vertical)e.top=t[i.vertical]>l/2?Math.max(0,l-s):0,e.maxHeight=Math.min(s,l);else if(t[i.vertical]>l/2){const n=Math.min(l,"center"===i.vertical?t.center:i.vertical===r.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,n),e.top=Math.max(0,n-s)}else e.top=Math.max(0,"center"===i.vertical?t.center:i.vertical===r.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,l-e.top);if(e.left<0||e.left+o>c)if(e.maxWidth=Math.min(o,c),"middle"===r.horizontal)e.left=t[i.horizontal]>c/2?Math.max(0,c-o):0;else if(t[i.horizontal]>c/2){const n=Math.min(c,"middle"===i.horizontal?t.middle:i.horizontal===r.horizontal?t.right:t.left);e.maxWidth=Math.min(o,n),e.left=Math.max(0,n-e.maxWidth)}else e.left=Math.max(0,"middle"===i.horizontal?t.middle:i.horizontal===r.horizontal?t.left:t.right),e.maxWidth=Math.min(o,c-e.left)}["left","middle","right"].forEach((e=>{O[`${e}#ltr`]=e,O[`${e}#rtl`]=e}));const $=(0,v.L)({name:"QTooltip",inheritAttrs:!1,props:{...c,...d.vr,...p.D,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:R},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...d.gH],setup(e,{slots:t,emit:n,attrs:l}){let c,v;const b=(0,i.FN)(),{proxy:{$q:w}}=b,C=(0,r.iH)(null),E=(0,r.iH)(!1),S=(0,i.Fl)((()=>P(e.anchor,w.lang.rtl))),x=(0,i.Fl)((()=>P(e.self,w.lang.rtl))),I=(0,i.Fl)((()=>!0!==e.persistent)),{registerTick:N,removeTick:A}=(0,m.Z)(),{registerTimeout:R}=(0,g.Z)(),{transitionProps:O,transitionStyle:D}=(0,p.Z)(e),{localScrollTarget:L,changeScrollEvent:F,unconfigureScrollTarget:M}=h(e,ee),{anchorEl:j,canShow:$,anchorEvents:V}=u({showing:E,configureAnchorEl:Z}),{show:U,hide:B}=(0,d.ZP)({showing:E,canShow:$,handleShow:K,handleHide:G,hideOnRouteChange:I,processOnMount:!0});Object.assign(V,{delayShow:J,delayHide:X});const{showPortal:z,hidePortal:H,renderPortal:W}=(0,f.Z)(b,C,ne,"tooltip");if(!0===w.platform.is.mobile){const t={anchorEl:j,innerRef:C,onClickOutside(e){return B(e),e.target.classList.contains("q-dialog__backdrop")&&(0,a.NS)(e),!0}},n=(0,i.Fl)((()=>null===e.modelValue&&!0!==e.persistent&&!0===E.value));(0,i.YP)(n,(e=>{const n=!0===e?T:k;n(t)})),(0,i.Jd)((()=>{k(t)}))}function K(t){z(),N((()=>{v=new MutationObserver((()=>Y())),v.observe(C.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),Y(),ee()})),void 0===c&&(c=(0,i.YP)((()=>w.screen.width+"|"+w.screen.height+"|"+e.self+"|"+e.anchor+"|"+w.lang.rtl),Y)),R((()=>{z(!0),n("show",t)}),e.transitionDuration)}function G(t){A(),H(),Q(),R((()=>{H(!0),n("hide",t)}),e.transitionDuration)}function Q(){void 0!==v&&(v.disconnect(),v=void 0),void 0!==c&&(c(),c=void 0),M(),(0,a.ul)(V,"tooltipTemp")}function Y(){const t=C.value;null!==j.value&&t&&q({el:t,offset:e.offset,anchorEl:j.value,anchorOrigin:S.value,selfOrigin:x.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(!0===w.platform.is.mobile){(0,o.M)(),document.body.classList.add("non-selectable");const e=j.value,t=["touchmove","touchcancel","touchend","click"].map((t=>[e,t,"delayHide","passiveCapture"]));(0,a.M0)(V,"tooltipTemp",t)}R((()=>{U(t)}),e.delay)}function X(t){!0===w.platform.is.mobile&&((0,a.ul)(V,"tooltipTemp"),(0,o.M)(),setTimeout((()=>{document.body.classList.remove("non-selectable")}),10)),R((()=>{B(t)}),e.hideDelay)}function Z(){if(!0===e.noParentEvent||null===j.value)return;const t=!0===w.platform.is.mobile?[[j.value,"touchstart","delayShow","passive"]]:[[j.value,"mouseenter","delayShow","passive"],[j.value,"mouseleave","delayHide","passive"]];(0,a.M0)(V,"anchor",t)}function ee(){if(null!==j.value||void 0!==e.scrollTarget){L.value=(0,y.b0)(j.value,e.scrollTarget);const t=!0===e.noParentEvent?Y:B;F(L.value,t)}}function te(){return!0===E.value?(0,i.h)("div",{...l,ref:C,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",l.class],style:[l.style,D.value],role:"tooltip"},(0,_.KR)(t.default)):null}function ne(){return(0,i.h)(s.uT,O.value,te)}return(0,i.Jd)(Q),Object.assign(b.proxy,{updatePosition:Y}),W}})},5065:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a,jO:()=>o});var i=n(9835);const r={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},s=Object.keys(r),o={align:{type:String,validator:e=>s.includes(e)}};function a(e){return(0,i.Fl)((()=>{const t=void 0===e.align?!0===e.vertical?"stretch":"left":e.align;return`${!0===e.vertical?"items":"justify"}-${r[t]}`}))}},8234:(e,t,n)=>{"use strict";n.d(t,{S:()=>r,Z:()=>s});var i=n(9835);const r={dark:{type:Boolean,default:null}};function s(e,t){return(0,i.Fl)((()=>null===e.dark?t.dark.isActive:e.dark))}},3842:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a,gH:()=>o,vr:()=>s});var i=n(9835),r=n(2046);const s={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},o=["beforeShow","show","beforeHide","hide"];function a({showing:e,canShow:t,hideOnRouteChange:n,handleShow:s,handleHide:o,processOnMount:a}){const l=(0,i.FN)(),{props:c,emit:u,proxy:h}=l;let d;function f(t){!0===e.value?g(t):p(t)}function p(e){if(!0===c.disable||void 0!==e&&!0===e.qAnchorHandled||void 0!==t&&!0!==t(e))return;const n=void 0!==c["onUpdate:modelValue"];!0===n&&(u("update:modelValue",!0),d=e,(0,i.Y3)((()=>{d===e&&(d=void 0)}))),null!==c.modelValue&&!1!==n||m(e)}function m(t){!0!==e.value&&(e.value=!0,u("beforeShow",t),void 0!==s?s(t):u("show",t))}function g(e){if(!0===c.disable)return;const t=void 0!==c["onUpdate:modelValue"];!0===t&&(u("update:modelValue",!1),d=e,(0,i.Y3)((()=>{d===e&&(d=void 0)}))),null!==c.modelValue&&!1!==t||v(e)}function v(t){!1!==e.value&&(e.value=!1,u("beforeHide",t),void 0!==o?o(t):u("hide",t))}function y(t){if(!0===c.disable&&!0===t)void 0!==c["onUpdate:modelValue"]&&u("update:modelValue",!1);else if(!0===t!==e.value){const e=!0===t?m:v;e(d)}}(0,i.YP)((()=>c.modelValue),y),void 0!==n&&!0===(0,r.Rb)(l)&&(0,i.YP)((()=>h.$route.fullPath),(()=>{!0===n.value&&!0===e.value&&g()})),!0===a&&(0,i.bv)((()=>{y(c.modelValue)}));const _={show:p,hide:g,toggle:f};return Object.assign(h,_),_}},6120:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>b,vZ:()=>g,K6:()=>_,t6:()=>y});var i=n(9835),r=n(499),s=n(1957),o=n(7506),a=n(5987),l=n(9367),c=n(1384),u=n(2589);function h(e){const t=[.06,6,50];return"string"===typeof e&&e.length&&e.split(":").forEach(((e,n)=>{const i=parseFloat(e);i&&(t[n]=i)})),t}const d=(0,a.f)({name:"touch-swipe",beforeMount(e,{value:t,arg:n,modifiers:i}){if(!0!==i.mouse&&!0!==o.client.has.touch)return;const r=!0===i.mouseCapture?"Capture":"",s={handler:t,sensitivity:h(n),direction:(0,l.R)(i),noop:c.ZT,mouseStart(e){(0,l.n)(e,s)&&(0,c.du)(e)&&((0,c.M0)(s,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),s.start(e,!0))},touchStart(e){if((0,l.n)(e,s)){const t=e.target;(0,c.M0)(s,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","notPassiveCapture"],[t,"touchend","end","notPassiveCapture"]]),s.start(e)}},start(t,n){!0===o.client.is.firefox&&(0,c.Jf)(e,!0);const i=(0,c.FK)(t);s.event={x:i.left,y:i.top,time:Date.now(),mouse:!0===n,dir:!1}},move(e){if(void 0===s.event)return;if(!1!==s.event.dir)return void(0,c.NS)(e);const t=Date.now()-s.event.time;if(0===t)return;const n=(0,c.FK)(e),i=n.left-s.event.x,r=Math.abs(i),o=n.top-s.event.y,a=Math.abs(o);if(!0!==s.event.mouse){if(r<s.sensitivity[1]&&a<s.sensitivity[1])return void s.end(e)}else if(r<s.sensitivity[2]&&a<s.sensitivity[2])return;const l=r/t,h=a/t;!0===s.direction.vertical&&r<a&&r<100&&h>s.sensitivity[0]&&(s.event.dir=o<0?"up":"down"),!0===s.direction.horizontal&&r>a&&a<100&&l>s.sensitivity[0]&&(s.event.dir=i<0?"left":"right"),!0===s.direction.up&&r<a&&o<0&&r<100&&h>s.sensitivity[0]&&(s.event.dir="up"),!0===s.direction.down&&r<a&&o>0&&r<100&&h>s.sensitivity[0]&&(s.event.dir="down"),!0===s.direction.left&&r>a&&i<0&&a<100&&l>s.sensitivity[0]&&(s.event.dir="left"),!0===s.direction.right&&r>a&&i>0&&a<100&&l>s.sensitivity[0]&&(s.event.dir="right"),!1!==s.event.dir?((0,c.NS)(e),!0===s.event.mouse&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),(0,u.M)(),s.styleCleanup=e=>{s.styleCleanup=void 0,document.body.classList.remove("non-selectable");const t=()=>{document.body.classList.remove("no-pointer-events--children")};!0===e?setTimeout(t,50):t()}),s.handler({evt:e,touch:!0!==s.event.mouse,mouse:s.event.mouse,direction:s.event.dir,duration:t,distance:{x:r,y:a}})):s.end(e)},end(t){void 0!==s.event&&((0,c.ul)(s,"temp"),!0===o.client.is.firefox&&(0,c.Jf)(e,!1),void 0!==s.styleCleanup&&s.styleCleanup(!0),void 0!==t&&!1!==s.event.dir&&(0,c.NS)(t),s.event=void 0)}};if(e.__qtouchswipe=s,!0===i.mouse){const t=!0===i.mouseCapture||!0===i.mousecapture?"Capture":"";(0,c.M0)(s,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}!0===o.client.has.touch&&(0,c.M0)(s,"main",[[e,"touchstart","touchStart","passive"+(!0===i.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchswipe;void 0!==n&&(t.oldValue!==t.value&&("function"!==typeof t.value&&n.end(),n.handler=t.value),n.direction=(0,l.R)(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;void 0!==t&&((0,c.ul)(t,"main"),(0,c.ul)(t,"temp"),!0===o.client.is.firefox&&(0,c.Jf)(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchswipe)}});function f(){const e=new Map;return{getCache:function(t,n){return void 0===e[t]?e[t]=n:e[t]},getCacheWithFn:function(t,n){return void 0===e[t]?e[t]=n():e[t]}}}var p=n(2026),m=n(2046);const g={name:{required:!0},disable:Boolean},v={setup(e,{slots:t}){return()=>(0,i.h)("div",{class:"q-panel scroll",role:"tabpanel"},(0,p.KR)(t.default))}},y={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},_=["update:modelValue","beforeTransition","transition"];function b(){const{props:e,emit:t,proxy:n}=(0,i.FN)(),{getCacheWithFn:o}=f();let a,l;const c=(0,r.iH)(null),u=(0,r.iH)(null);function h(t){const i=!0===e.vertical?"up":"left";R((!0===n.$q.lang.rtl?-1:1)*(t.direction===i?1:-1))}const g=(0,i.Fl)((()=>[[d,h,void 0,{horizontal:!0!==e.vertical,vertical:e.vertical,mouse:!0}]])),y=(0,i.Fl)((()=>e.transitionPrev||"slide-"+(!0===e.vertical?"down":"right"))),_=(0,i.Fl)((()=>e.transitionNext||"slide-"+(!0===e.vertical?"up":"left"))),b=(0,i.Fl)((()=>`--q-transition-duration: ${e.transitionDuration}ms`)),w=(0,i.Fl)((()=>"string"===typeof e.modelValue||"number"===typeof e.modelValue?e.modelValue:String(e.modelValue))),C=(0,i.Fl)((()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax}))),E=(0,i.Fl)((()=>void 0!==e.keepAliveInclude||void 0!==e.keepAliveExclude));function S(){R(1)}function T(){R(-1)}function k(e){t("update:modelValue",e)}function x(e){return void 0!==e&&null!==e&&""!==e}function I(e){return a.findIndex((t=>t.props.name===e&&""!==t.props.disable&&!0!==t.props.disable))}function N(){return a.filter((e=>""!==e.props.disable&&!0!==e.props.disable))}function A(t){const n=0!==t&&!0===e.animated&&-1!==c.value?"q-transition--"+(-1===t?y.value:_.value):null;u.value!==n&&(u.value=n)}function R(n,i=c.value){let r=i+n;while(r>-1&&r<a.length){const e=a[r];if(void 0!==e&&""!==e.props.disable&&!0!==e.props.disable)return A(n),l=!0,t("update:modelValue",e.props.name),void setTimeout((()=>{l=!1}));r+=n}!0===e.infinite&&a.length>0&&-1!==i&&i!==a.length&&R(n,-1===n?a.length:-1)}function O(){const t=I(e.modelValue);return c.value!==t&&(c.value=t),!0}function P(){const t=!0===x(e.modelValue)&&O()&&a[c.value];return!0===e.keepAlive?[(0,i.h)(i.Ob,C.value,[(0,i.h)(!0===E.value?o(w.value,(()=>({...v,name:w.value}))):v,{key:w.value,style:b.value},(()=>t))])]:[(0,i.h)("div",{class:"q-panel scroll",style:b.value,key:w.value,role:"tabpanel"},[t])]}function D(){if(0!==a.length)return!0===e.animated?[(0,i.h)(s.uT,{name:u.value},P)]:P()}function L(e){return a=(0,m.Pf)((0,p.KR)(e.default,[])).filter((e=>null!==e.props&&void 0===e.props.slot&&!0===x(e.props.name))),a.length}function F(){return a}return(0,i.YP)((()=>e.modelValue),((e,n)=>{const r=!0===x(e)?I(e):-1;!0!==l&&A(-1===r?0:r<I(n)?-1:1),c.value!==r&&(c.value=r,t("beforeTransition",e,n),(0,i.Y3)((()=>{t("transition",e,n)})))})),Object.assign(n,{next:S,previous:T,goTo:k}),{panelIndex:c,panelDirectives:g,updatePanelsList:L,updatePanelIndex:O,getPanelContent:D,getEnabledPanels:N,getPanels:F,isValidPanelName:x,keepAliveProps:C,needsUniqueKeepAliveWrapper:E,goToPanelByOffset:R,goToPanel:k,nextPanel:S,previousPanel:T}}},2306:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});n(9665);var i=n(499),r=n(9835),s=(n(1384),n(7026)),o=n(7495);const a=[],l=[];let c=1,u=document.body;function h(e,t){const n=document.createElement("div");if(n.id=void 0!==t?`q-portal--${t}--${c++}`:e,void 0!==o.w6.globalNodes){const e=o.w6.globalNodes["class"];void 0!==e&&(n.className=e)}return u.appendChild(n),a.push(n),l.push(t),n}function d(e){const t=a.indexOf(e);a.splice(t,1),l.splice(t,1),e.remove()}var f=n(2909),p=n(3251);function m(e){e=e.parent;while(void 0!==e&&null!==e){if("QGlobalDialog"===e.type.name)return!0;if("QDialog"===e.type.name||"QMenu"===e.type.name)return!1;e=e.parent}return!1}function g(e,t,n,o){const a=(0,i.iH)(!1),l=(0,i.iH)(!1);let c=null;const u={},g="dialog"===o&&m(e);function v(t){if(!0===t)return(0,s.xF)(u),void(l.value=!0);l.value=!1,!1===a.value&&(!1===g&&null===c&&(c=h(!1,o)),a.value=!0,f.Q$.push(e.proxy),(0,s.YX)(u))}function y(t){if(l.value=!1,!0!==t)return;(0,s.xF)(u),a.value=!1;const n=f.Q$.indexOf(e.proxy);-1!==n&&f.Q$.splice(n,1),null!==c&&(d(c),c=null)}return(0,r.Ah)((()=>{y(!0)})),e.proxy.__qPortal=!0,(0,p.g)(e.proxy,"contentEl",(()=>t.value)),{showPortal:v,hidePortal:y,portalIsActive:a,portalIsAccessible:l,renderPortal:()=>!0===g?n():!0===a.value?[(0,r.h)(r.lR,{to:c},n())]:void 0}}},6916:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(9835),r=n(2046);function s(){let e;const t=(0,i.FN)();function n(){e=void 0}return(0,i.se)(n),(0,i.Jd)(n),{removeTick:n,registerTick(n){e=n,(0,i.Y3)((()=>{e===n&&(!1===(0,r.$D)(t)&&e(),e=void 0)}))}}}},2695:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(9835),r=n(2046);function s(){let e=null;const t=(0,i.FN)();function n(){null!==e&&(clearTimeout(e),e=null)}return(0,i.se)(n),(0,i.Jd)(n),{removeTimeout:n,registerTimeout(i,s){n(e),!1===(0,r.$D)(t)&&(e=setTimeout(i,s))}}}},431:(e,t,n)=>{"use strict";n.d(t,{D:()=>r,Z:()=>s});var i=n(9835);const r={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function s(e,t=(()=>{}),n=(()=>{})){return{transitionProps:(0,i.Fl)((()=>{const i=`q-transition--${e.transitionShow||t()}`,r=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${r}-leave-from`,leaveActiveClass:`${r}-leave-active`,leaveToClass:`${r}-leave-to`}})),transitionStyle:(0,i.Fl)((()=>`--q-transition-duration: ${e.transitionDuration}ms`))}}},2146:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(5987),r=n(2909),s=n(1705);function o(e){if(!1===e)return 0;if(!0===e||void 0===e)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const a=(0,i.f)({name:"close-popup",beforeMount(e,{value:t}){const n={depth:o(t),handler(t){0!==n.depth&&setTimeout((()=>{const i=(0,r.je)(e);void 0!==i&&(0,r.S7)(i,t,n.depth)}))},handlerKey(e){!0===(0,s.So)(e,13)&&n.handler(e)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=o(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}})},5310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(9665);var i=n(7506),r=n(1384);const s=()=>!0;function o(e){return"string"===typeof e&&""!==e&&"/"!==e&&"#/"!==e}function a(e){return!0===e.startsWith("#")&&(e=e.substring(1)),!1===e.startsWith("/")&&(e="/"+e),!0===e.endsWith("/")&&(e=e.substring(0,e.length-1)),"#"+e}function l(e){if(!1===e.backButtonExit)return()=>!1;if("*"===e.backButtonExit)return s;const t=["#/"];return!0===Array.isArray(e.backButtonExit)&&t.push(...e.backButtonExit.filter(o).map(a)),()=>t.includes(window.location.hash)}const c={__history:[],add:r.ZT,remove:r.ZT,install({$q:e}){if(!0===this.__installed)return;const{cordova:t,capacitor:n}=i.client.is;if(!0!==t&&!0!==n)return;const r=e.config[!0===t?"cordova":"capacitor"];if(void 0!==r&&!1===r.backButton)return;if(!0===n&&(void 0===window.Capacitor||void 0===window.Capacitor.Plugins.App))return;this.add=e=>{void 0===e.condition&&(e.condition=s),this.__history.push(e)},this.remove=e=>{const t=this.__history.indexOf(e);t>=0&&this.__history.splice(t,1)};const o=l(Object.assign({backButtonExit:!0},r)),a=()=>{if(this.__history.length){const e=this.__history[this.__history.length-1];!0===e.condition()&&(this.__history.pop(),e.handler())}else!0===o()?navigator.app.exitApp():window.history.back()};!0===t?document.addEventListener("deviceready",(()=>{document.addEventListener("backbutton",a,!1)})):window.Capacitor.Plugins.App.addListener("backButton",a)}}},7506:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>v,aG:()=>o,client:()=>m,uX:()=>s});n(9665);var i=n(499),r=n(3251);const s=(0,i.iH)(!1);let o,a=!1;function l(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:t[0]||""}}function c(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const u="ontouchstart"in window||window.navigator.maxTouchPoints>0;function h(e){o={is:{...e}},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function d(e){const t=e.toLowerCase(),n=c(t),i=l(t,n),r={};i.browser&&(r[i.browser]=!0,r.version=i.version,r.versionNumber=parseInt(i.versionNumber,10)),i.platform&&(r[i.platform]=!0);const s=r.android||r.ios||r.bb||r.blackberry||r.ipad||r.iphone||r.ipod||r.kindle||r.playbook||r.silk||r["windows phone"];return!0===s||t.indexOf("mobile")>-1?(r.mobile=!0,r.edga||r.edgios?(r.edge=!0,i.browser="edge"):r.crios?(r.chrome=!0,i.browser="chrome"):r.fxios&&(r.firefox=!0,i.browser="firefox")):r.desktop=!0,(r.ipod||r.ipad||r.iphone)&&(r.ios=!0),r["windows phone"]&&(r.winphone=!0,delete r["windows phone"]),(r.chrome||r.opr||r.safari||r.vivaldi||!0===r.mobile&&!0!==r.ios&&!0!==s)&&(r.webkit=!0),r.edg&&(i.browser="edgechromium",r.edgeChromium=!0),(r.safari&&r.blackberry||r.bb)&&(i.browser="blackberry",r.blackberry=!0),r.safari&&r.playbook&&(i.browser="playbook",r.playbook=!0),r.opr&&(i.browser="opera",r.opera=!0),r.safari&&r.android&&(i.browser="android",r.android=!0),r.safari&&r.kindle&&(i.browser="kindle",r.kindle=!0),r.safari&&r.silk&&(i.browser="silk",r.silk=!0),r.vivaldi&&(i.browser="vivaldi",r.vivaldi=!0),r.name=i.browser,r.platform=i.platform,t.indexOf("electron")>-1?r.electron=!0:document.location.href.indexOf("-extension://")>-1?r.bex=!0:(void 0!==window.Capacitor?(r.capacitor=!0,r.nativeMobile=!0,r.nativeMobileWrapper="capacitor"):void 0===window._cordovaNative&&void 0===window.cordova||(r.cordova=!0,r.nativeMobile=!0,r.nativeMobileWrapper="cordova"),!0===u&&!0===r.mac&&(!0===r.desktop&&!0===r.safari||!0===r.nativeMobile&&!0!==r.android&&!0!==r.ios&&!0!==r.ipad)&&h(r)),r}const f=navigator.userAgent||navigator.vendor||window.opera,p={has:{touch:!1,webStorage:!1},within:{iframe:!1}},m={userAgent:f,is:d(f),has:{touch:u},within:{iframe:window.self!==window.top}},g={install(e){const{$q:t}=e;!0===s.value?(e.onSSRHydrated.push((()=>{Object.assign(t.platform,m),s.value=!1,o=void 0})),t.platform=(0,i.qj)(this)):t.platform=this}};{let e;(0,r.g)(m.has,"webStorage",(()=>{if(void 0!==e)return e;try{if(window.localStorage)return e=!0,!0}catch(t){}return e=!1,!1})),a=!0===m.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple"),!0===s.value?Object.assign(g,m,o,p):Object.assign(g,m)}const v=g},899:(e,t,n)=>{"use strict";function i(e,t=250,n){let i=null;function r(){const r=arguments,s=()=>{i=null,!0!==n&&e.apply(this,r)};null!==i?clearTimeout(i):!0===n&&e.apply(this,r),i=setTimeout(s,t)}return r.cancel=()=>{null!==i&&clearTimeout(i)},r}n.d(t,{Z:()=>i})},223:(e,t,n)=>{"use strict";n.d(t,{iv:()=>r,mY:()=>o,sb:()=>s});var i=n(499);function r(e,t){const n=e.style;for(const i in t)n[i]=t[i]}function s(e){if(void 0===e||null===e)return;if("string"===typeof e)try{return document.querySelector(e)||void 0}catch(n){return}const t=(0,i.SU)(e);return t?t.$el||t:void 0}function o(e,t){if(void 0===e||null===e||!0===e.contains(t))return!0;for(let n=e.nextElementSibling;null!==n;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}},1384:(e,t,n)=>{"use strict";n.d(t,{AZ:()=>a,FK:()=>o,Jf:()=>h,M0:()=>d,NS:()=>u,X$:()=>c,ZT:()=>r,du:()=>s,listenOpts:()=>i,sT:()=>l,ul:()=>f});n(9665);const i={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(i,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(p){}function r(){}function s(e){return 0===e.button}function o(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function a(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}}function l(e){e.stopPropagation()}function c(e){!1!==e.cancelable&&e.preventDefault()}function u(e){!1!==e.cancelable&&e.preventDefault(),e.stopPropagation()}function h(e,t){if(void 0===e||!0===t&&!0===e.__dragPrevented)return;const n=!0===t?e=>{e.__dragPrevented=!0,e.addEventListener("dragstart",c,i.notPassiveCapture)}:e=>{delete e.__dragPrevented,e.removeEventListener("dragstart",c,i.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function d(e,t,n){const r=`__q_${t}_evt`;e[r]=void 0!==e[r]?e[r].concat(n):n,n.forEach((t=>{t[0].addEventListener(t[1],e[t[2]],i[t[3]])}))}function f(e,t){const n=`__q_${t}_evt`;void 0!==e[n]&&(e[n].forEach((t=>{t[0].removeEventListener(t[1],e[t[2]],i[t[3]])})),e[n]=void 0)}},4680:(e,t,n)=>{"use strict";n.d(t,{Kn:()=>i,hj:()=>r});n(3122);function i(e){return null!==e&&"object"===typeof e&&!0!==Array.isArray(e)}function r(e){return"number"===typeof e&&isFinite(e)}},5987:(e,t,n)=>{"use strict";n.d(t,{L:()=>s,f:()=>o});var i=n(499),r=n(9835);const s=e=>(0,i.Xl)((0,r.aZ)(e)),o=e=>(0,i.Xl)(e)},7026:(e,t,n)=>{"use strict";n.d(t,{YX:()=>o,jd:()=>l,xF:()=>a});n(9665);let i=[],r=[];function s(e){r=r.filter((t=>t!==e))}function o(e){s(e),r.push(e)}function a(e){s(e),0===r.length&&i.length>0&&(i[i.length-1](),i=[])}function l(e){0===r.length?e():i.push(e)}},7495:(e,t,n)=>{"use strict";n.d(t,{Uf:()=>r,tP:()=>s,w6:()=>i});const i={};let r=!1;function s(){r=!0}},3251:(e,t,n)=>{"use strict";function i(e,t,n,i){return Object.defineProperty(e,t,{get:n,set:i,enumerable:!0}),e}n.d(t,{g:()=>i})},1705:(e,t,n)=>{"use strict";n.d(t,{So:()=>o,ZK:()=>r});let i=!1;function r(e){i=!0===e.isComposing}function s(e){return!0===i||e!==Object(e)||!0===e.isComposing||!0===e.qKeyEvent}function o(e,t){return!0!==s(e)&&[].concat(t).includes(e.keyCode)}},2909:(e,t,n)=>{"use strict";n.d(t,{Q$:()=>r,S7:()=>a,je:()=>s});var i=n(2046);const r=[];function s(e){return r.find((t=>null!==t.contentEl&&t.contentEl.contains(e)))}function o(e,t){do{if("QMenu"===e.$options.name){if(e.hide(t),!0===e.$props.separateClosePopup)return(0,i.O2)(e)}else if(!0===e.__qPortal){const n=(0,i.O2)(e);return void 0!==n&&"QPopupProxy"===n.$options.name?(e.hide(t),n):e}e=(0,i.O2)(e)}while(void 0!==e&&null!==e)}function a(e,t,n){while(0!==n&&void 0!==e&&null!==e){if(!0===e.__qPortal){if(n--,"QMenu"===e.$options.name){e=o(e,t);continue}e.hide(t)}e=(0,i.O2)(e)}}},2026:(e,t,n)=>{"use strict";n.d(t,{Jl:()=>o,KR:()=>r,vs:()=>s});var i=n(9835);function r(e,t){return void 0!==e&&e()||t}function s(e,t){return void 0!==e?t.concat(e()):t}function o(e,t,n,r,s,o){t.key=r+s;const a=(0,i.h)(e,t,n);return!0===s?(0,i.wy)(a,o()):a}},2589:(e,t,n)=>{"use strict";n.d(t,{M:()=>r});var i=n(7506);function r(){if(void 0!==window.getSelection){const e=window.getSelection();void 0!==e.empty?e.empty():void 0!==e.removeAllRanges&&(e.removeAllRanges(),!0!==i.ZP.is.mobile&&e.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}},5439:(e,t,n)=>{"use strict";n.d(t,{Mw:()=>s,Ng:()=>i,YE:()=>r,qO:()=>o});const i="_q_",r="_q_l_",s="_q_pc_",o=()=>{}},9367:(e,t,n)=>{"use strict";n.d(t,{R:()=>s,n:()=>o});const i={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},r=Object.keys(i);function s(e){const t={};for(const n of r)!0===e[n]&&(t[n]=!0);return 0===Object.keys(t).length?i:(!0===t.horizontal?t.left=t.right=!0:!0===t.left&&!0===t.right&&(t.horizontal=!0),!0===t.vertical?t.up=t.down=!0:!0===t.up&&!0===t.down&&(t.vertical=!0),!0===t.horizontal&&!0===t.vertical&&(t.all=!0),t)}function o(e,t){return void 0===t.event&&void 0!==e.target&&!0!==e.target.draggable&&"function"===typeof t.handler&&"INPUT"!==e.target.nodeName.toUpperCase()&&(void 0===e.qClonedBy||-1===e.qClonedBy.indexOf(t.uid))}i.all=!0},2046:(e,t,n)=>{"use strict";function i(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;while(Object(t)===t){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function r(e,t){"symbol"===typeof t.type?!0===Array.isArray(t.children)&&t.children.forEach((t=>{r(e,t)})):e.add(t)}function s(e){const t=new Set;return e.forEach((e=>{r(t,e)})),Array.from(t)}function o(e){return void 0!==e.appContext.config.globalProperties.$router}function a(e){return!0===e.isUnmounted||!0===e.isDeactivated}n.d(t,{$D:()=>a,O2:()=>i,Pf:()=>s,Rb:()=>o})},3701:(e,t,n)=>{"use strict";n.d(t,{OI:()=>a,QA:()=>g,b0:()=>s,f3:()=>d,ik:()=>f,np:()=>m,u3:()=>o});var i=n(223);const r=[null,document,document.body,document.scrollingElement,document.documentElement];function s(e,t){let n=(0,i.sb)(t);if(void 0===n){if(void 0===e||null===e)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return r.includes(n)?window:n}function o(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function a(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function l(e,t,n=0){const i=void 0===arguments[3]?performance.now():arguments[3],r=o(e);n<=0?r!==t&&u(e,t):requestAnimationFrame((s=>{const o=s-i,a=r+(t-r)/Math.max(o,n)*o;u(e,a),a!==t&&l(e,t,n-o,s)}))}function c(e,t,n=0){const i=void 0===arguments[3]?performance.now():arguments[3],r=a(e);n<=0?r!==t&&h(e,t):requestAnimationFrame((s=>{const o=s-i,a=r+(t-r)/Math.max(o,n)*o;h(e,a),a!==t&&c(e,t,n-o,s)}))}function u(e,t){e!==window?e.scrollTop=t:window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t)}function h(e,t){e!==window?e.scrollLeft=t:window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0)}function d(e,t,n){n?l(e,t,n):u(e,t)}function f(e,t,n){n?c(e,t,n):h(e,t)}let p;function m(){if(void 0!==p)return p;const e=document.createElement("p"),t=document.createElement("div");(0,i.iv)(e,{width:"100%",height:"200px"}),(0,i.iv)(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let r=e.offsetWidth;return n===r&&(r=t.clientWidth),t.remove(),p=n-r,p}function g(e,t=!0){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"])))}},3890:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});var i=n(7506),r=(n(9665),n(499)),s=n(3251);const o=(e,t)=>{const n=(0,r.qj)(e);for(const i in e)(0,s.g)(t,i,(()=>n[i]),(e=>{n[i]=e}));return t};var a=n(1384),l=n(899);const c=["sm","md","lg","xl"],{passive:u}=a.listenOpts,h=o({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:a.ZT,setDebounce:a.ZT,install({$q:e,onSSRHydrated:t}){if(e.screen=this,!0===this.__installed)return void(void 0!==e.config.screen&&(!1===e.config.screen.bodyClasses?document.body.classList.remove(`screen--${this.name}`):this.__update(!0)));const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,o=void 0===n||!0===i.client.is.mobile?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],a=void 0!==e.config.screen&&!0===e.config.screen.bodyClasses;this.__update=e=>{const[t,n]=o();if(n!==this.height&&(this.height=n),t!==this.width)this.width=t;else if(!0!==e)return;let i=this.sizes;this.gt.xs=t>=i.sm,this.gt.sm=t>=i.md,this.gt.md=t>=i.lg,this.gt.lg=t>=i.xl,this.lt.sm=t<i.sm,this.lt.md=t<i.md,this.lt.lg=t<i.lg,this.lt.xl=t<i.xl,this.xs=this.lt.sm,this.sm=!0===this.gt.xs&&!0===this.lt.md,this.md=!0===this.gt.sm&&!0===this.lt.lg,this.lg=!0===this.gt.md&&!0===this.lt.xl,this.xl=this.gt.lg,i=(!0===this.xs?"xs":!0===this.sm&&"sm")||!0===this.md&&"md"||!0===this.lg&&"lg"||"xl",i!==this.name&&(!0===a&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${i}`)),this.name=i)};let h,d={},f=16;this.setSizes=e=>{c.forEach((t=>{void 0!==e[t]&&(d[t]=e[t])}))},this.setDebounce=e=>{f=e};const p=()=>{const e=getComputedStyle(document.body);e.getPropertyValue("--q-size-sm")&&c.forEach((t=>{this.sizes[t]=parseInt(e.getPropertyValue(`--q-size-${t}`),10)})),this.setSizes=e=>{c.forEach((t=>{e[t]&&(this.sizes[t]=e[t])})),this.__update(!0)},this.setDebounce=e=>{void 0!==h&&r.removeEventListener("resize",h,u),h=e>0?(0,l.Z)(this.__update,e):this.__update,r.addEventListener("resize",h,u)},this.setDebounce(f),Object.keys(d).length>0?(this.setSizes(d),d=void 0):this.__update(),!0===a&&"xs"===this.name&&document.body.classList.add("screen--xs")};!0===i.uX.value?t.push(p):p()}}),d=o({isActive:!1,mode:!1},{__media:void 0,set(e){d.mode=e,"auto"===e?(void 0===d.__media&&(d.__media=window.matchMedia("(prefers-color-scheme: dark)"),d.__updateMedia=()=>{d.set("auto")},d.__media.addListener(d.__updateMedia)),e=d.__media.matches):void 0!==d.__media&&(d.__media.removeListener(d.__updateMedia),d.__media=void 0),d.isActive=!0===e,document.body.classList.remove("body--"+(!0===e?"light":"dark")),document.body.classList.add("body--"+(!0===e?"dark":"light"))},toggle(){d.set(!1===d.isActive)},install({$q:e,onSSRHydrated:t,ssrContext:n}){const{dark:r}=e.config;if(e.dark=this,!0===this.__installed&&void 0===r)return;this.isActive=!0===r;const s=void 0!==r&&r;if(!0===i.uX.value){const e=e=>{this.__fromSSR=e},n=this.set;this.set=e,e(s),t.push((()=>{this.set=n,this.set(this.__fromSSR)}))}else this.set(s)}}),f=d;var p=n(5310);const m={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>1===e?"1 record selected.":(0===e?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function g(){const e=!0===Array.isArray(navigator.languages)&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if("string"===typeof e)return e.split(/[-_]/).map(((e,t)=>0===t?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase())).join("-")}const v=o({__langPack:{}},{getLocale:g,set(e=m,t){const n={...e,rtl:!0===e.rtl,getLocale:g};if(n.set=v.set,void 0===v.__langConfig||!0!==v.__langConfig.noHtmlAttrs){const e=document.documentElement;e.setAttribute("dir",!0===n.rtl?"rtl":"ltr"),e.setAttribute("lang",n.isoName)}Object.assign(v.__langPack,n),v.props=n,v.isoName=n.isoName,v.nativeName=n.nativeName},install({$q:e,lang:t,ssrContext:n}){e.lang=v.__langPack,v.__langConfig=e.config.lang,!0===this.__installed?void 0!==t&&this.set(t):this.set(t||m)}}),y=v;function _(e,t,n=document.body){if("string"!==typeof e)throw new TypeError("Expected a string as propName");if("string"!==typeof t)throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}var b=n(1705);function w(e){return!0===e.ios?"ios":!0===e.android?"android":void 0}function C({is:e,has:t,within:n},i){const r=[!0===e.desktop?"desktop":"mobile",(!1===t.touch?"no-":"")+"touch"];if(!0===e.mobile){const t=w(e);void 0!==t&&r.push("platform-"+t)}if(!0===e.nativeMobile){const t=e.nativeMobileWrapper;r.push(t),r.push("native-mobile"),!0!==e.ios||void 0!==i[t]&&!1===i[t].iosStatusBarPadding||r.push("q-ios-padding")}else!0===e.electron?r.push("electron"):!0===e.bex&&r.push("bex");return!0===n.iframe&&r.push("within-iframe"),r}function E(){const{is:e}=i.client,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(void 0!==i.aG)n.delete("desktop"),n.add("platform-ios"),n.add("mobile");else if(!0!==e.nativeMobile&&!0!==e.electron&&!0!==e.bex)if(!0===e.desktop)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(!0===e.mobile){n.delete("desktop"),n.add("mobile");const t=w(e);void 0!==t?(n.add(`platform-${t}`),n.delete("platform-"+("ios"===t?"android":"ios"))):(n.delete("platform-ios"),n.delete("platform-android"))}!0===i.client.has.touch&&(n.delete("no-touch"),n.add("touch")),!0===i.client.within.iframe&&n.add("within-iframe");const r=Array.from(n).join(" ");t!==r&&(document.body.className=r)}function S(e){for(const t in e)_(t,e[t])}const T={install(e){if(!0!==this.__installed){if(!0===i.uX.value)E();else{const{$q:t}=e;void 0!==t.config.brand&&S(t.config.brand);const n=C(i.client,t.config);document.body.classList.add.apply(document.body.classList,n)}!0===i.client.is.ios&&document.body.addEventListener("touchstart",a.ZT),window.addEventListener("keydown",b.ZK,!0)}}},k={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},x=o({iconMapFn:null,__icons:{}},{set(e,t){const n={...e,rtl:!0===e.rtl};n.set=x.set,Object.assign(x.__icons,n)},install({$q:e,iconSet:t,ssrContext:n}){void 0!==e.config.iconMapFn&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__icons,(0,s.g)(e,"iconMapFn",(()=>this.iconMapFn),(e=>{this.iconMapFn=e})),!0===this.__installed?void 0!==t&&this.set(t):this.set(t||k)}}),I=x;var N=n(5439),A=n(7495),R=n(4680);const O=[i.ZP,T,f,h,p.Z,y,I];function P(e,t){t.forEach((t=>{t.install(e),t.__installed=!0}))}function D(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(N.Ng,n.$q),P(n,O),void 0!==t.components&&Object.values(t.components).forEach((t=>{!0===(0,R.Kn)(t)&&void 0!==t.name&&e.component(t.name,t)})),void 0!==t.directives&&Object.values(t.directives).forEach((t=>{!0===(0,R.Kn)(t)&&void 0!==t.name&&e.directive(t.name,t)})),void 0!==t.plugins&&P(n,Object.values(t.plugins).filter((e=>"function"===typeof e.install&&!1===O.includes(e)))),!0===i.uX.value&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach((e=>{e()})),n.$q.onSSRHydrated=()=>{}})}const L=function(e,t={}){const n={version:"2.11.10"};!1===A.Uf?(void 0!==t.config&&Object.assign(A.w6,t.config),n.config={...A.w6},(0,A.tP)()):n.config=t.config||{},D(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},F={version:"2.11.10",install:L,lang:y,iconSet:I}},8762:(e,t,n)=>{var i=n(6107),r=n(7545),s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not a function")}},616:(e,t,n)=>{var i=n(1419),r=String,s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not an object")}},7714:(e,t,n)=>{var i=n(7447),r=n(2661),s=n(8600),o=function(e){return function(t,n,o){var a,l=i(t),c=s(l),u=r(o,c);if(e&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3614:(e,t,n)=>{"use strict";var i=n(4133),r=n(6555),s=TypeError,o=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(r(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},6749:(e,t,n)=>{var i=n(1636),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},7366:(e,t,n)=>{var i=n(2924),r=n(1240),s=n(863),o=n(1012);e.exports=function(e,t,n){for(var a=r(t),l=o.f,c=s.f,u=0;u<a.length;u++){var h=a[u];i(e,h)||n&&i(n,h)||l(e,h,c(t,h))}}},4722:(e,t,n)=>{var i=n(4133),r=n(1012),s=n(3386);e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},3386:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9570:(e,t,n)=>{var i=n(2358),r=n(1012);e.exports=function(e,t,n){return n.get&&i(n.get,t,{getter:!0}),n.set&&i(n.set,t,{setter:!0}),r.f(e,t,n)}},4076:(e,t,n)=>{var i=n(6107),r=n(1012),s=n(2358),o=n(5437);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(i(n)&&s(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(u){}l?e[t]=n:r.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},5437:(e,t,n)=>{var i=n(3834),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},4133:(e,t,n)=>{var i=n(8814);e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},948:e=>{var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},1657:(e,t,n)=>{var i=n(3834),r=n(1419),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},6689:e=>{var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},322:e=>{e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},1418:(e,t,n)=>{var i,r,s=n(3834),o=n(322),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},203:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6943:(e,t,n)=>{var i=n(3834),r=n(863).f,s=n(4722),o=n(4076),a=n(5437),l=n(7366),c=n(2764);e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(u=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=r(u,h),d=p&&p.value):d=u[h],n=c(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},8814:e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},9793:(e,t,n)=>{var i=n(8814);e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6654:(e,t,n)=>{var i=n(9793),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},9104:(e,t,n)=>{var i=n(4133),r=n(2924),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1636:(e,t,n)=>{var i=n(9793),r=Function.prototype,s=r.call,o=i&&r.bind.bind(s,s);e.exports=i?o:function(e){return function(){return s.apply(e,arguments)}}},7859:(e,t,n)=>{var i=n(3834),r=n(6107),s=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(i[e]):i[e]&&i[e][t]}},7689:(e,t,n)=>{var i=n(8762),r=n(3873);e.exports=function(e,t){var n=e[t];return r(n)?void 0:i(n)}},3834:(e,t,n)=>{var i=function(e){return e&&e.Math==Math&&e};e.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2924:(e,t,n)=>{var i=n(1636),r=n(8332),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(r(e),t)}},1999:e=>{e.exports={}},6335:(e,t,n)=>{var i=n(4133),r=n(8814),s=n(1657);e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},3972:(e,t,n)=>{var i=n(1636),r=n(8814),s=n(6749),o=Object,a=i("".split);e.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},6461:(e,t,n)=>{var i=n(1636),r=n(6107),s=n(6081),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},780:(e,t,n)=>{var i,r,s,o=n(5779),a=n(3834),l=n(1419),c=n(4722),u=n(2924),h=n(6081),d=n(5315),f=n(1999),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return s(e)?r(e):i(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=r(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var _=h.state||(h.state=new g);_.get=_.get,_.has=_.has,_.set=_.set,i=function(e,t){if(_.has(e))throw m(p);return t.facade=e,_.set(e,t),t},r=function(e){return _.get(e)||{}},s=function(e){return _.has(e)}}else{var b=d("state");f[b]=!0,i=function(e,t){if(u(e,b))throw m(p);return t.facade=e,c(e,b,t),t},r=function(e){return u(e,b)?e[b]:{}},s=function(e){return u(e,b)}}e.exports={set:i,get:r,has:s,enforce:v,getterFor:y}},6555:(e,t,n)=>{var i=n(6749);e.exports=Array.isArray||function(e){return"Array"==i(e)}},6107:(e,t,n)=>{var i=n(948),r=i.all;e.exports=i.IS_HTMLDDA?function(e){return"function"==typeof e||e===r}:function(e){return"function"==typeof e}},2764:(e,t,n)=>{var i=n(8814),r=n(6107),s=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==u||n!=c&&(r(t)?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},3873:e=>{e.exports=function(e){return null===e||void 0===e}},1419:(e,t,n)=>{var i=n(6107),r=n(948),s=r.all;e.exports=r.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:i(e)||e===s}:function(e){return"object"==typeof e?null!==e:i(e)}},200:e=>{e.exports=!1},1637:(e,t,n)=>{var i=n(7859),r=n(6107),s=n(6123),o=n(49),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&s(t.prototype,a(e))}},8600:(e,t,n)=>{var i=n(7302);e.exports=function(e){return i(e.length)}},2358:(e,t,n)=>{var i=n(1636),r=n(8814),s=n(6107),o=n(2924),a=n(4133),l=n(9104).CONFIGURABLE,c=n(6461),u=n(780),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,m=i("".slice),g=i("".replace),v=i([].join),y=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||l&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(r){}var i=h(e);return o(i,"source")||(i.source=v(_,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return s(this)&&d(this).source||c(this)}),"toString")},7233:e=>{var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var i=+e;return(i>0?n:t)(i)}},1012:(e,t,n)=>{var i=n(4133),r=n(6335),s=n(64),o=n(616),a=n(1017),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=i?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var i=u(e,t);i&&i[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:h in n?n[h]:i[h],writable:!1})}return c(e,t,n)}:c:function(e,t,n){if(o(e),t=a(t),o(n),r)try{return c(e,t,n)}catch(i){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},863:(e,t,n)=>{var i=n(4133),r=n(6654),s=n(8068),o=n(3386),a=n(7447),l=n(1017),c=n(2924),u=n(6335),h=Object.getOwnPropertyDescriptor;t.f=i?h:function(e,t){if(e=a(e),t=l(t),u)try{return h(e,t)}catch(n){}if(c(e,t))return o(!r(s.f,e,t),e[t])}},3450:(e,t,n)=>{var i=n(6682),r=n(203),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},1996:(e,t)=>{t.f=Object.getOwnPropertySymbols},6123:(e,t,n)=>{var i=n(1636);e.exports=i({}.isPrototypeOf)},6682:(e,t,n)=>{var i=n(1636),r=n(2924),s=n(7447),o=n(7714).indexOf,a=n(1999),l=i([].push);e.exports=function(e,t){var n,i=s(e),c=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&l(u,n);while(t.length>c)r(i,n=t[c++])&&(~o(u,n)||l(u,n));return u}},8068:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);t.f=r?function(e){var t=i(this,e);return!!t&&t.enumerable}:n},9370:(e,t,n)=>{var i=n(6654),r=n(6107),s=n(1419),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&r(n=e.toString)&&!s(a=i(n,e)))return a;if(r(n=e.valueOf)&&!s(a=i(n,e)))return a;if("string"!==t&&r(n=e.toString)&&!s(a=i(n,e)))return a;throw o("Can't convert object to primitive value")}},1240:(e,t,n)=>{var i=n(7859),r=n(1636),s=n(3450),o=n(1996),a=n(616),l=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},9592:(e,t,n)=>{"use strict";var i=n(616);e.exports=function(){var e=i(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},5177:(e,t,n)=>{var i=n(3873),r=TypeError;e.exports=function(e){if(i(e))throw r("Can't call method on "+e);return e}},5315:(e,t,n)=>{var i=n(8850),r=n(3965),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},6081:(e,t,n)=>{var i=n(3834),r=n(5437),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},8850:(e,t,n)=>{var i=n(200),r=n(6081);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.0",mode:i?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",source:"https://github.com/zloirock/core-js"})},4651:(e,t,n)=>{var i=n(1418),r=n(8814);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},2661:(e,t,n)=>{var i=n(6675),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},7447:(e,t,n)=>{var i=n(3972),r=n(5177);e.exports=function(e){return i(r(e))}},6675:(e,t,n)=>{var i=n(7233);e.exports=function(e){var t=+e;return t!==t||0===t?0:i(t)}},7302:(e,t,n)=>{var i=n(6675),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},8332:(e,t,n)=>{var i=n(5177),r=Object;e.exports=function(e){return r(i(e))}},4384:(e,t,n)=>{var i=n(6654),r=n(1419),s=n(1637),o=n(7689),a=n(9370),l=n(4103),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!r(e)||s(e))return e;var n,l=o(e,u);if(l){if(void 0===t&&(t="default"),n=i(l,e,t),!r(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},1017:(e,t,n)=>{var i=n(4384),r=n(1637);e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},7545:e=>{var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3965:(e,t,n)=>{var i=n(1636),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},49:(e,t,n)=>{var i=n(4651);e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},64:(e,t,n)=>{var i=n(4133),r=n(8814);e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5779:(e,t,n)=>{var i=n(3834),r=n(6107),s=i.WeakMap;e.exports=r(s)&&/native code/.test(String(s))},4103:(e,t,n)=>{var i=n(3834),r=n(8850),s=n(2924),o=n(3965),a=n(4651),l=n(49),c=i.Symbol,u=r("wks"),h=l?c["for"]||c:c&&c.withoutSetter||o;e.exports=function(e){return s(u,e)||(u[e]=a&&s(c,e)?c[e]:h("Symbol."+e)),u[e]}},9665:(e,t,n)=>{"use strict";var i=n(6943),r=n(8332),s=n(8600),o=n(3614),a=n(6689),l=n(8814),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=c||!u();i({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=r(this),n=s(t),i=arguments.length;a(n+i);for(var l=0;l<i;l++)t[n]=arguments[l],n++;return o(t,n),n}})},3122:(e,t,n)=>{var i=n(3834),r=n(4133),s=n(9570),o=n(9592),a=n(8814),l=i.RegExp,c=l.prototype,u=r&&a((function(){var e=!0;try{l(".","d")}catch(u){e=!1}var t={},n="",i=e?"dgimsy":"gimsy",r=function(e,i){Object.defineProperty(t,e,{get:function(){return n+=i,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in e&&(s.hasIndices="d"),s)r(o,s[o]);var a=Object.getOwnPropertyDescriptor(c,"flags").get.call(t);return a!==i||n!==i}));u&&s(c,"flags",{configurable:!0,get:o})},1639:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},3100:(e,t,n)=>{"use strict";n.d(t,{MT:()=>ee});var i=n(9835),r=n(499);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,l="devtools-plugin:setup",c="plugin:settings:set";let u,h;function d(){var e;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(u=!0,h=n.g.perf_hooks.performance):u=!1),u}function f(){return d()?h.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},n);try{const e=localStorage.getItem(i),t=JSON.parse(e);Object.assign(r,t)}catch(s){}this.fallbacks={getSettings(){return r},setSettings(e){try{localStorage.setItem(i,JSON.stringify(e))}catch(s){}r=e},now(){return f()}},t&&t.on(c,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function m(e,t){const n=e,i=o(),r=s(),c=a&&n.enableEarlyProxy;if(!r||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const e=c?new p(n,r):null,s=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else r.emit(l,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var g="store";function v(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function y(e){return null!==e&&"object"===typeof e}function _(e){return e&&"function"===typeof e.then}function b(e,t){return function(){return e(t)}}function w(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function C(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;S(e,n,[],e._modules.root,!0),E(e,n,t)}function E(e,t,n){var s=e._state,o=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var a=e._wrappedGetters,l={},c={},u=(0,r.B)(!0);u.run((function(){v(a,(function(t,n){l[n]=b(t,e),c[n]=(0,i.Fl)((function(){return l[n]()})),Object.defineProperty(e.getters,n,{get:function(){return c[n].value},enumerable:!0})}))})),e._state=(0,r.qj)({data:t}),e._scope=u,e.strict&&A(e),s&&n&&e._withCommit((function(){s.data=null})),o&&o.stop()}function S(e,t,n,i,r){var s=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=i),!s&&!r){var a=R(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=i.state}))}var c=i.context=T(e,o,n);i.forEachMutation((function(t,n){var i=o+n;x(e,i,t,c)})),i.forEachAction((function(t,n){var i=t.root?n:o+n,r=t.handler||t;I(e,i,r,c)})),i.forEachGetter((function(t,n){var i=o+n;N(e,i,t,c)})),i.forEachChild((function(i,s){S(e,t,n.concat(s),i,r)}))}function T(e,t,n){var i=""===t,r={dispatch:i?e.dispatch:function(n,i,r){var s=O(n,i,r),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:i?e.commit:function(n,i,r){var s=O(n,i,r),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return k(e,t)}},state:{get:function(){return R(e.state,n)}}}),r}function k(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,i)===t){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function x(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push((function(t){n.call(e,i.state,t)}))}function I(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push((function(t){var r=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},t);return _(r)||(r=Promise.resolve(r)),e._devtoolHook?r.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):r}))}function N(e,t,n,i){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(i.state,i.getters,e.state,e.getters)})}function A(e){(0,i.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function R(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return y(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var P="vuex bindings",D="vuex:mutations",L="vuex:actions",F="vuex",M=0;function q(e,t){m({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[P]},(function(n){n.addTimelineLayer({id:D,label:"Vuex Mutations",color:j}),n.addTimelineLayer({id:L,label:"Vuex Actions",color:j}),n.addInspector({id:F,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===F)if(n.filter){var i=[];H(i,t._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[z(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===F){var i=n.nodeId;k(t,i),n.state=W(G(t._modules,i),"root"===i?t.getters:t._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===F){var i=n.nodeId,r=n.path;"root"!==i&&(r=i.split("/").filter(Boolean).concat(r)),t._withCommit((function(){n.set(t._state.data,r,n.state.value)}))}})),t.subscribe((function(e,t){var i={};e.payload&&(i.payload=e.payload),i.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(F),n.sendInspectorState(F),n.addTimelineEvent({layerId:D,event:{time:Date.now(),title:e.type,data:i}})})),t.subscribeAction({before:function(e,t){var i={};e.payload&&(i.payload=e.payload),e._id=M++,e._time=Date.now(),i.state=t,n.addTimelineEvent({layerId:L,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:i}})},after:function(e,t){var i={},r=Date.now()-e._time;i.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},e.payload&&(i.payload=e.payload),i.state=t,n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:i}})}})}))}var j=8702998,$=6710886,V=16777215,U={label:"namespaced",textColor:V,backgroundColor:$};function B(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function z(e,t){return{id:t||"root",label:B(t),tags:e.namespaced?[U]:[],children:Object.keys(e._children).map((function(n){return z(e._children[n],t+n+"/")}))}}function H(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[U]:[]}),Object.keys(t._children).forEach((function(r){H(e,t._children[r],n,i+r+"/")}))}function W(e,t,n){t="root"===n?t:t[n];var i=Object.keys(t),r={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(i.length){var s=K(t);r.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?B(e):e,editable:!1,value:Q((function(){return s[e]}))}}))}return r}function K(e){var t={};return Object.keys(e).forEach((function(n){var i=n.split("/");if(i.length>1){var r=t,s=i.pop();i.forEach((function(e){r[e]||(r[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),r=r[e]._custom.value})),r[s]=Q((function(){return e[n]}))}else t[n]=Q((function(){return e[n]}))})),t}function G(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,i,r){var s=e[i];if(!s)throw new Error('Missing module "'+i+'" for path "'+t+'".');return r===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function Q(e){try{return e()}catch(t){return t}}var Y=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(e,t){this._children[e]=t},Y.prototype.removeChild=function(e){delete this._children[e]},Y.prototype.getChild=function(e){return this._children[e]},Y.prototype.hasChild=function(e){return e in this._children},Y.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Y.prototype.forEachChild=function(e){v(this._children,e)},Y.prototype.forEachGetter=function(e){this._rawModule.getters&&v(this._rawModule.getters,e)},Y.prototype.forEachAction=function(e){this._rawModule.actions&&v(this._rawModule.actions,e)},Y.prototype.forEachMutation=function(e){this._rawModule.mutations&&v(this._rawModule.mutations,e)},Object.defineProperties(Y.prototype,J);var X=function(e){this.register([],e,!1)};function Z(e,t,n){if(t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return void 0;Z(e.concat(i),t.getChild(i),n.modules[i])}}X.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},X.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},X.prototype.update=function(e){Z([],this.root,e)},X.prototype.register=function(e,t,n){var i=this;void 0===n&&(n=!0);var r=new Y(t,n);if(0===e.length)this.root=r;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],r)}t.modules&&v(t.modules,(function(t,r){i.register(e.concat(r),t,n)}))},X.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],i=t.getChild(n);i&&i.runtime&&t.removeChild(n)},X.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var i=e.strict;void 0===i&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var s=this,o=this,a=o.dispatch,l=o.commit;this.dispatch=function(e,t){return a.call(s,e,t)},this.commit=function(e,t,n){return l.call(s,e,t,n)},this.strict=i;var c=this._modules.root.state;S(this,c,[],this._modules.root),E(this,c),n.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||g,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&q(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},te.prototype.commit=function(e,t,n){var i=this,r=O(e,t,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,i.state)})))},te.prototype.dispatch=function(e,t){var n=this,i=O(e,t),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(c){0}var l=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(c){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(c){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return w(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return w(n,this._actionSubscribers,t)},te.prototype.watch=function(e,t,n){var r=this;return(0,i.YP)((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),S(this,this.state,e,this._modules.get(e),n.preserveState),E(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=R(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),C(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),C(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ne);se((function(e,t){var n={};return ie(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var i=oe(this.$store,"mapState",e);if(!i)return;t=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,t,n):t[r]},n[i].vuex=!0})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.commit;if(e){var s=oe(this.$store,"mapMutations",e);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var i=t.key,r=t.val;r=e+r,n[i]=function(){if(!e||oe(this.$store,"mapGetters",e))return this.$store.getters[r]},n[i].vuex=!0})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.dispatch;if(e){var s=oe(this.$store,"mapActions",e);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n}));function ie(e){return re(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function re(e){return Array.isArray(e)||y(e)}function se(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function oe(e,t,n){var i=e._modulesNamespaceMap[n];return i}},3340:(e,t,n)=>{"use strict";function i(e){return e}function r(e){return e}n.d(t,{BC:()=>i,h:()=>r})},8339:(e,t,n)=>{"use strict";n.d(t,{p7:()=>nt,r5:()=>$});var i=n(9835),r=n(499);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function l(e,t){const n={};for(const i in t){const r=t[i];n[i]=u(r)?r.map(e):e(r)}return n}const c=()=>{},u=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=w(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&v(t.matched[i],n.matched[r])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_(e[n],t[n]))return!1;return!0}function _(e,t){return u(e)?b(e,t):u(t)?b(t,e):e===t}function b(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r,s,o=n.length-1;for(r=0;r<i.length;r++)if(s=i[r],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var C,E;(function(e){e["pop"]="pop",e["push"]="push"})(C||(C={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function S(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const T=/^[^#]+#/;function k(e,t){return e.replace(T,"#")+t}function x(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const I=()=>({left:window.pageXOffset,top:window.pageYOffset});function N(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=x(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function A(e,t){const n=history.state?history.state.position-t:-1;return n+e}const R=new Map;function O(e,t){R.set(e,t)}function P(e){const t=R.get(e);return R.delete(e),t}let D=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+i+r}function F(e,t,n,i){let r=[],s=[],o=null;const l=({state:s})=>{const a=L(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else i(a);r.forEach((e=>{e(n.value,l,{delta:u,type:C.pop,direction:u?u>0?E.forward:E.back:E.unknown})}))};function c(){o=n.value}function u(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:I()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h),{pauseListeners:c,listen:u,destroy:d}}function M(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?I():null}}function q(e){const{history:t,location:n}=window,i={value:L(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:D()+e+i;try{t[o?"replaceState":"pushState"](s,"",l),r.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}function o(e,n){const o=a({},t.state,M(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});s(e,o,!0),i.value=e}function l(e,n){const o=a({},r.value,t.state,{forward:e,scroll:I()});s(o.current,o,!0);const l=a({},M(i.value,e,null),{position:o.position+1},n);s(e,l,!1),i.value=e}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:l,replace:o}}function j(e){e=S(e);const t=q(e),n=F(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=a({location:"",base:e,go:i,createHref:k.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function $(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),j(e)}function V(e){return"string"===typeof e||e&&"object"===typeof e}function U(e){return"string"===typeof e||"symbol"===typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var H;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(H||(H={}));function W(e,t){return a(new Error,{type:e,[z]:!0},t)}function K(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const G="[^/]+?",Q={sensitive:!1,strict:!1,start:!0,end:!0},Y=/[.+*?^${}()[\]/\\]/g;function J(e,t){const n=a({},Q,t),i=[];let r=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(r+="/");for(let t=0;t<a.length;t++){const i=a[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(Y,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:l,regexp:c}=i;s.push({name:e,repeatable:n,optional:l});const u=c||G;if(u!==G){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=l&&a.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),r+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function c(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(u(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=u(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=c}}return n||"/"}return{re:o,score:i,keys:s,parse:l,stringify:c}}function X(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=X(i[n],r[n]);if(e)return e;n++}if(1===Math.abs(r.length-i.length)){if(ee(i))return 1;if(ee(r))return-1}return r.length-i.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function ie(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function re(e,t,n){const i=J(ie(e.path),n);const r=a(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function se(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function s(e,n,i){const r=!i,l=ae(e);l.aliasOf=i&&i.record;const h=he(t,e),d=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},l,{components:i?i.record.components:l.components,path:e,aliasOf:i?i.record:l}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&i+a)}if(f=re(t,n,h),i?i.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),r&&e.name&&!ce(f)&&o(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)s(e[t],f,i&&i.children[t])}i=i||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{o(p)}:c}function o(e){if(U(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function l(){return n}function u(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&i.set(e.record.name,e)}function h(e,t){let r,s,o,l={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw W(1,{location:e});0,o=r.record.name,l=a(oe(t.params,r.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,r.keys.map((e=>e.name)))),s=r.stringify(l)}else if("path"in e)s=e.path,r=n.find((e=>e.re.test(s))),r&&(l=r.parse(s),o=r.record.name);else{if(r=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw W(1,{location:e,currentLocation:t});o=r.record.name,l=a({},t.params,e.params),s=r.stringify(l)}const c=[];let u=r;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:l,matched:c,meta:ue(c)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:l,getRecordMatcher:r}}function oe(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:le(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function le(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"===typeof n?n:n[i];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,me=/\//g,ge=/=/g,ve=/\?/g,ye=/\+/g,_e=/%5B/g,be=/%5D/g,we=/%5E/g,Ce=/%60/g,Ee=/%7B/g,Se=/%7C/g,Te=/%7D/g,ke=/%20/g;function xe(e){return encodeURI(""+e).replace(Se,"|").replace(_e,"[").replace(be,"]")}function Ie(e){return xe(e).replace(Ee,"{").replace(Te,"}").replace(we,"^")}function Ne(e){return xe(e).replace(ye,"%2B").replace(ke,"+").replace(fe,"%23").replace(pe,"%26").replace(Ce,"`").replace(Ee,"{").replace(Te,"}").replace(we,"^")}function Ae(e){return Ne(e).replace(ge,"%3D")}function Re(e){return xe(e).replace(fe,"%23").replace(ve,"%3F")}function Oe(e){return null==e?"":Re(e).replace(me,"%2F")}function Pe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(ye," "),n=e.indexOf("="),s=Pe(n<0?e:e.slice(0,n)),o=n<0?null:Pe(e.slice(n+1));if(s in t){let e=t[s];u(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Le(e){let t="";for(let n in e){const i=e[n];if(n=Ae(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=u(i)?i.map((e=>e&&Ne(e))):[i&&Ne(i)];r.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Fe(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=u(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}const Me=Symbol(""),qe=Symbol(""),je=Symbol(""),$e=Symbol(""),Ve=Symbol("");function Ue(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((o,a)=>{const l=e=>{!1===e?a(W(4,{from:n,to:t})):e instanceof Error?a(e):V(e)?a(W(2,{from:t,to:e})):(s&&i.enterCallbacks[r]===s&&"function"===typeof e&&s.push(e),o())},c=e.call(i&&i.instances[r],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function ze(e,t,n,i){const r=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(He(a)){const o=a.__vccOpts||a,l=o[t];l&&r.push(Be(l,n,i,s,e))}else{let l=a();0,r.push((()=>l.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(r)?r.default:r;s.components[e]=a;const l=a.__vccOpts||a,c=l[t];return c&&Be(c,n,i,s,e)()}))))}}}return r}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function We(e){const t=(0,i.f3)(je),n=(0,i.f3)($e),s=(0,i.Fl)((()=>t.resolve((0,r.SU)(e.to)))),o=(0,i.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,i=e[t-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(v.bind(null,i));if(o>-1)return o;const a=Je(e[t-2]);return t>1&&Je(i)===a&&r[r.length-1].path!==a?r.findIndex(v.bind(null,e[t-2])):o})),a=(0,i.Fl)((()=>o.value>-1&&Ye(n.params,s.value.params))),l=(0,i.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function u(n={}){return Qe(n)?t[(0,r.SU)(e.replace)?"replace":"push"]((0,r.SU)(e.to)).catch(c):Promise.resolve()}return{route:s,href:(0,i.Fl)((()=>s.value.href)),isActive:a,isExactActive:l,navigate:u}}const Ke=(0,i.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:We,setup(e,{slots:t}){const n=(0,r.qj)(We(e)),{options:s}=(0,i.f3)(je),o=(0,i.Fl)((()=>({[Xe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Ge=Ke;function Qe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!u(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,i.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,i.f3)(Ve),o=(0,i.Fl)((()=>e.route||s.value)),l=(0,i.f3)(qe,0),c=(0,i.Fl)((()=>{let e=(0,r.SU)(l);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,i.Fl)((()=>o.value.matched[c.value]));(0,i.JJ)(qe,(0,i.Fl)((()=>c.value+1))),(0,i.JJ)(Me,u),(0,i.JJ)(Ve,o);const h=(0,r.iH)();return(0,i.YP)((()=>[h.value,u.value,e.name]),(([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&v(t,r)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=o.value,s=e.name,l=u.value,c=l&&l.components[s];if(!c)return et(n.default,{Component:c,route:r});const d=l.props[s],f=d?!0===d?r.params:"function"===typeof d?d(r):d:null,p=e=>{e.component.isUnmounted&&(l.instances[s]=null)},m=(0,i.h)(c,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:m,route:r})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=se(e.routes,e),n=e.parseQuery||De,o=e.stringifyQuery||Le,h=e.history;const d=Ue(),m=Ue(),v=Ue(),y=(0,r.XI)(B);let _=B;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=l.bind(null,(e=>""+e)),w=l.bind(null,Oe),E=l.bind(null,Pe);function S(e,n){let i,r;return U(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function T(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function x(e){return!!t.getRecordMatcher(e)}function R(e,i){if(i=a({},i||y.value),"string"===typeof e){const r=f(n,e,i.path),s=t.resolve({path:r.path},i),o=h.createHref(r.fullPath);return a(r,s,{params:E(s.params),hash:Pe(r.hash),redirectedFrom:void 0,href:o})}let r;if("path"in e)r=a({},e,{path:f(n,e.path,i.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];r=a({},e,{params:w(e.params)}),i.params=w(i.params)}const s=t.resolve(r,i),l=e.hash||"";s.params=b(E(s.params));const c=p(o,a({},e,{hash:Ie(l),path:s.path})),u=h.createHref(c);return a({fullPath:c,hash:l,query:o===Le?Fe(e.query):e.query||{}},s,{redirectedFrom:void 0,href:u})}function D(e){return"string"===typeof e?f(n,e,y.value.path):a({},e)}function L(e,t){if(_!==e)return W(8,{from:t,to:e})}function F(e){return j(e)}function M(e){return F(a(D(e),{replace:!0}))}function q(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=D(i):{path:i},i.params={}),a({query:e.query,hash:e.hash,params:"path"in i?{}:e.params},i)}}function j(e,t){const n=_=R(e),i=y.value,r=e.state,s=e.force,l=!0===e.replace,c=q(n);if(c)return j(a(D(c),{state:"object"===typeof c?a({},r,c.state):r,force:s,replace:l}),t||n);const u=n;let h;return u.redirectedFrom=t,!s&&g(o,i,n)&&(h=W(16,{to:u,from:i}),ne(i,i,!0,!1)),(h?Promise.resolve(h):V(u,i)).catch((e=>K(e)?K(e,2)?e:te(e):Z(e,u,i))).then((e=>{if(e){if(K(e,2))return j(a({replace:l},D(e.to),{state:"object"===typeof e.to?a({},r,e.to.state):r,force:s}),t||u)}else e=H(u,i,!0,l,r);return z(u,i,e),e}))}function $(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e,t){let n;const[i,r,s]=rt(e,t);n=ze(i.reverse(),"beforeRouteLeave",e,t);for(const a of i)a.leaveGuards.forEach((i=>{n.push(Be(i,e,t))}));const o=$.bind(null,e,t);return n.push(o),it(n).then((()=>{n=[];for(const i of d.list())n.push(Be(i,e,t));return n.push(o),it(n)})).then((()=>{n=ze(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach((i=>{n.push(Be(i,e,t))}));return n.push(o),it(n)})).then((()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(u(i.beforeEnter))for(const r of i.beforeEnter)n.push(Be(r,e,t));else n.push(Be(i.beforeEnter,e,t));return n.push(o),it(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(s,"beforeRouteEnter",e,t),n.push(o),it(n)))).then((()=>{n=[];for(const i of m.list())n.push(Be(i,e,t));return n.push(o),it(n)})).catch((e=>K(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const i of v.list())i(e,t,n)}function H(e,t,n,i,r){const o=L(e,t);if(o)return o;const l=t===B,c=s?history.state:{};n&&(i||l?h.replace(e.fullPath,a({scroll:l&&c&&c.scroll},r)):h.push(e.fullPath,r)),y.value=e,ne(e,t,n,l),te()}let G;function Q(){G||(G=h.listen(((e,t,n)=>{if(!ae.listening)return;const i=R(e),r=q(i);if(r)return void j(a(r,{replace:!0}),i).catch(c);_=i;const o=y.value;s&&O(A(o.fullPath,n.delta),I()),V(i,o).catch((e=>K(e,12)?e:K(e,2)?(j(e.to,i).then((e=>{K(e,20)&&!n.delta&&n.type===C.pop&&h.go(-1,!1)})).catch(c),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,i,o)))).then((e=>{e=e||H(i,o,!1),e&&(n.delta&&!K(e,8)?h.go(-n.delta,!1):n.type===C.pop&&K(e,20)&&h.go(-1,!1)),z(i,o,e)})).catch(c)})))}let Y,J=Ue(),X=Ue();function Z(e,t,n){te(e);const i=X.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return Y&&y.value!==B?Promise.resolve():new Promise(((e,t)=>{J.add([e,t])}))}function te(e){return Y||(Y=!e,Q(),J.list().forEach((([t,n])=>e?n(e):t())),J.reset()),e}function ne(t,n,r,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const l=!r&&P(A(t.fullPath,0))||(o||!r)&&history.state&&history.state.scroll||null;return(0,i.Y3)().then((()=>a(t,n,l))).then((e=>e&&N(e))).catch((e=>Z(e,t,n)))}const ie=e=>h.go(e);let re;const oe=new Set,ae={currentRoute:y,listening:!0,addRoute:S,removeRoute:T,hasRoute:x,getRoutes:k,resolve:R,options:e,push:F,replace:M,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:d.add,beforeResolve:m.add,afterEach:v.add,onError:X.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.SU)(y)}),s&&!re&&y.value===B&&(re=!0,F(h.location).catch((e=>{0})));const n={};for(const r in B)n[r]=(0,i.Fl)((()=>y.value[r]));e.provide(je,t),e.provide($e,(0,r.qj)(n)),e.provide(Ve,y);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(_=B,G&&G(),G=null,y.value=B,re=!1,Y=!1),o()}}};return ae}function it(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>v(e,s)))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>v(e,a)))||r.push(a))}return[n,i,r]}},8897:(e,t,n)=>{"use strict";n.d(t,{Jn:()=>me,qX:()=>he,Xd:()=>ue,Mq:()=>ve,ZF:()=>ge,KN:()=>ye});var i=n(3513),r=n(9795),s=n(5505);const o=(e,t)=>t.some((t=>e instanceof t));let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(C(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(E(this),t),C(h.get(this))}:function(...t){return C(e.apply(E(this),t))}:function(t,...n){const i=e.call(E(this),t,...n);return f.set(i,t.sort?t.sort():[t]),C(i)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),o(e,c())?new Proxy(e,y):e)}function C(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function S(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=C(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(C(o.result),e.oldVersion,e.newVersion,C(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],x=new Map;function I(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(x.get(t))return x.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=k.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!T.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return x.set(t,s),s}_((e=>({...e,get:(t,n,i)=>I(t,n)||e.get(t,n,i),has:(t,n)=>!!I(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(A(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function A(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",O="0.9.7",P=new r.Yd("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",F="@firebase/analytics",M="@firebase/app-check-compat",q="@firebase/app-check",j="@firebase/auth",$="@firebase/auth-compat",V="@firebase/database",U="@firebase/database-compat",B="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",W="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",re="9.19.1",se="[DEFAULT]",oe={[R]:"fire-core",[D]:"fire-core-compat",[F]:"fire-analytics",[L]:"fire-analytics-compat",[q]:"fire-app-check",[M]:"fire-app-check-compat",[j]:"fire-auth",[$]:"fire-auth-compat",[V]:"fire-rtdb",[U]:"fire-rtdb-compat",[B]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[W]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ae=new Map,le=new Map;function ce(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(le.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ce(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=re;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(r,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const l=new i.H0(o);for(const i of le.values())l.addComponent(i);const c=new pe(n,r,l);return ae.set(o,c),c}function ve(e=se){const t=ae.get(e);if(!t&&e===se)return ge();if(!t)throw fe.create("no-app",{appName:e});return t}function ye(e,t,n){var r;let s=null!==(r=oe[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}ue(new i.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="firebase-heartbeat-database",be=1,we="firebase-heartbeat-store";let Ce=null;function Ee(){return Ce||(Ce=S(_e,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ce}async function Se(e){try{const t=await Ee();return t.transaction(we).objectStore(we).get(ke(e))}catch(t){if(t instanceof s.ZR)P.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});P.warn(e.message)}}}async function Te(e,t){try{const n=await Ee(),i=n.transaction(we,"readwrite"),r=i.objectStore(we);return await r.put(t,ke(e)),i.done}catch(n){if(n instanceof s.ZR)P.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});P.warn(e.message)}}}function ke(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=1024,Ie=2592e6;class Ne{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ie})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ae(),{heartbeatsToSend:t,unsentEntries:n}=Re(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ae(){const e=new Date;return e.toISOString().substring(0,10)}function Re(e,t=xe){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Pe(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Pe(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Oe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Pe(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){ue(new i.wA("platform-logger",(e=>new N(e)),"PRIVATE")),ue(new i.wA("heartbeat",(e=>new Ne(e)),"PRIVATE")),ye(R,O,e),ye(R,O,"esm2017"),ye("fire-js","")}De("")},3513:(e,t,n)=>{"use strict";n.d(t,{H0:()=>c,wA:()=>r});var i=n(5505);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},9795:(e,t,n)=>{"use strict";n.d(t,{Yd:()=>c,in:()=>r});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},7141:(e,t,n)=>{"use strict";n.d(t,{ZF:()=>i.ZF});var i=n(8897),r="firebase",s="9.19.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(r,s,"app")},2857:(e,t,n)=>{"use strict";n.d(t,{N8:()=>Ws});var i=n(8897),r=n(3513),s=n(5505),o=n(9795);const a="@firebase/database",l="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="";function u(e){c=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),g=new o.Yd("@firebase/database"),v=function(){let e=1;return function(){return e++}}(),y=function(e){const t=(0,s.dS)(e),n=new s.gQ;n.update(t);const i=n.digest();return s.US.encodeByteArray(i)},_=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=_.apply(null,i):t+="object"===typeof i?(0,s.Wl)(i):i,t+=" "}return t};let b=null,w=!0;const C=function(e,t){(0,s.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o["in"].VERBOSE,b=g.log.bind(g),t&&m.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,m.remove("logging_enabled"))},E=function(...e){if(!0===w&&(w=!1,null===b&&!0===m.get("logging_enabled")&&C(!0)),b){const t=_.apply(null,e);b(t)}},S=function(e){return function(...t){E(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+_(...e);g.error(t)},k=function(...e){const t=`FIREBASE FATAL ERROR: ${_(...e)}`;throw g.error(t),new Error(t)},x=function(...e){const t="FIREBASE WARNING: "+_(...e);g.warn(t)},I=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&x("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},N=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},A=function(e){if((0,s.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},R="[MIN_NAME]",O="[MAX_NAME]",P=function(e,t){if(e===t)return 0;if(e===R||t===O)return-1;if(t===R||e===O)return 1;{const n=H(e),i=H(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},D=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.Wl)(t))},F=function(e){if("object"!==typeof e||null===e)return(0,s.Wl)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,s.Wl)(t[i]),n+=":",n+=F(e[t[i]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function q(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const j=function(e){(0,s.hu)(!N(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,l,c;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=l+i,a=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(h.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},$=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},V=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const U=new RegExp("^-?(0*)\\d{1,10}$"),B=-2147483648,z=2147483647,H=function(e){if(U.test(e)){const t=Number(e);if(t>=B&&t<=z)return t}return null},W=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw x("Exception was thrown by user callback.",e),t}),Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},G=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){x(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',x(e)}}class J{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X="5",Z="v",ee="s",te="r",ne="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,re="ls",se="p",oe="ac",ae="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ue(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function he(e,t,n){let i;if((0,s.hu)("string"===typeof t,"typeof type must == string"),(0,s.hu)("object"===typeof n,"typeof params must == object"),t===ae)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}ue(e)&&(n["ns"]=e.namespace);const r=[];return q(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={},pe={};function me(e){const t=e.toString();return fe[t]||(fe[t]=new de),fe[t]}function ge(e,t){const n=e.toString();return pe[n]||(pe[n]=t()),pe[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&W((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",_e="close",be="pLPCommand",we="pRTLPCB",Ce="id",Ee="pw",Se="ser",Te="cb",ke="seg",xe="ts",Ie="d",Ne="dframe",Ae=1870,Re=30,Oe=Ae-Re,Pe=25e3,De=3e4;class Le{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=S(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[oe]=this.appCheckToken),he(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(De)),A((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fe(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=i;else{if(t!==_e)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ye]="t",e[Se]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[Z]=X,this.transportSessionId&&(e[ee]=this.transportSessionId),this.lastSessionId&&(e[re]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[oe]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[te]=ne);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Le.forceAllow_=!0}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){return!(0,s.Yr)()&&(!!Le.forceAllow_||!Le.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!$()&&!V())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.h$)(t),i=M(n,Oe);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ne]="t",n[Ce]=e,n[Ee]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fe{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=v(),window[be+this.uniqueCallbackIdentifier]=e,window[we+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){E("frame writing exception"),r.stack&&E(r.stack),E(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||E("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ce]=this.myID,e[Ee]=this.myPW,e[Se]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Re+n.length<=Ae))break;{const e=this.pendingSegs.shift();n=n+"&"+ke+i+"="+e.seg+"&"+xe+i+"="+e.ts+"&"+Ie+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Pe)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){(0,s.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=16384,qe=45e3;let je=null;"undefined"!==typeof MozWebSocket?je=MozWebSocket:"undefined"!==typeof WebSocket&&(je=WebSocket);class $e{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=S(this.connId),this.stats_=me(t),this.connURL=$e.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const o={};return o[Z]=X,!(0,s.Yr)()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(o[te]=ne),t&&(o[ee]=t),n&&(o[re]=n),i&&(o[oe]=i),r&&(o[se]=r),he(e,ae,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let e;if((0,s.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${X}/${c}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n=process["env"],i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new je(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==je&&!$e.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,Me);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(qe))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2,$e.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Le,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=$e&&$e["isAvailable"]();let n=t&&!$e.previouslyFailed();if(e.webSocketOnly&&(t||x("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[$e];else{const e=this.transports_=[];for(const t of Ve.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ve.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ve.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ue=6e4,Be=5e3,ze=10240,He=102400,We="t",Ke="d",Ge="s",Qe="r",Ye="e",Je="o",Xe="a",Ze="n",et="p",tt="h";class nt{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=S("c:"+this.id+":"),this.transportManager_=new Ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=G((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>He?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ze?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(We in e){const t=e[We];t===Xe?this.upgradeIfSecondaryHealthy_():t===Qe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Je&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ze,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L(We,e);if(Ke in e){const n=e[Ke];if(t===tt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===Ze){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ge?this.onConnectionShutdown_(n):t===Qe?this.onReset_(n):t===Ye?T("Server Error: "+n):t===Je?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),X!==n&&x("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),G((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Ue))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):G((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Be))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:et,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){(0,s.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends rt{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new st}getInitialEvent(e){return(0,s.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=32,at=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ct(){return new lt("")}function ut(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ht(e){return e.pieces_.length-e.pieceNum_}function dt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function pt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function vt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof lt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function _t(e,t){const n=ut(e),i=ut(t);if(null===n)return t;if(n===i)return _t(dt(e),dt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){if(ht(e)!==ht(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function wt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ht(e)>ht(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ct{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.ug)(this.parts_[n]);Tt(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,s.ug)(t),Tt(e)}function St(e){const t=e.parts_.pop();e.byteLength_-=(0,s.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Tt(e){if(e.byteLength_>at)throw new Error(e.errorPrefix_+"has a key path longer than "+at+" bytes ("+e.byteLength_+").");if(e.parts_.length>ot)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ot+") or object contains a cycle "+kt(e))}function kt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends rt{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new xt}getInitialEvent(e){return(0,s.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=1e3,Nt=3e5,At=3e4,Rt=1.3,Ot=3e4,Pt="server_kill",Dt=3;class Lt extends it{constructor(e,t,n,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Lt.nextPersistentConnectionId_++,this.log_=S("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=It,this.maxReconnectDelay_=Nt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,s.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,s.Wl)(r)),(0,s.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s.BH,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.hu)(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];Lt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,s.r3)(e,"w")){const n=(0,s.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();x(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,s.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=At)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.Wl)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+(0,s.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=It,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=It,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Ot&&(this.reconnectDelay_=It),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(e){(0,s.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=l&&l.token,a=new nt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{x(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Pt)}),r))}catch(T){this.log_("Failed to get token: "+T),o||(this.repoInfo_.nodeAdmin&&x(T),l())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.xb)(this.interruptReasons_)&&(this.reconnectDelay_=It,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>F(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dt&&(this.reconnectDelay_=At,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,(0,s.uI)()?e["framework.cordova"]=1:(0,s.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return(0,s.xb)(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0,Lt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ft(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ft(R,e),i=new Ft(R,t);return 0!==this.compare(n,i)}minPost(){return Ft.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;class jt extends Mt{static get __EMPTY_NODE(){return qt}static set __EMPTY_NODE(e){qt=e}compare(e,t){return P(e.name,t.name)}isDefinedOn(e){throw(0,s.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ft.MIN}maxPost(){return new Ft(O,qt)}makePost(e,t){return(0,s.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ft(e,qt)}toString(){return".key"}}const $t=new jt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ut{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Ut.RED,this.left=null!=i?i:zt.EMPTY_NODE,this.right=null!=r?r:zt.EMPTY_NODE}copy(e,t,n,i,r){return new Ut(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ut.RED=!0,Ut.BLACK=!1;class Bt{copy(e,t,n,i,r){return this}insert(e,t,n){return new Ut(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,t=zt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ut.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ut.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ht(e,t){return P(e.name,t.name)}function Wt(e,t){return P(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt;function Gt(e){Kt=e}zt.EMPTY_NODE=new Bt;const Qt=function(e){return"number"===typeof e?"number:"+j(e):"string:"+e},Yt=function(e){if(e.isLeafNode()){const t=e.val();(0,s.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,s.r3)(t,".sv"),"Priority must be a string or number.")}else(0,s.hu)(e===Kt||e.isEmpty(),"priority of unexpected type.");(0,s.hu)(e===Kt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Jt,Xt,Zt;class en{constructor(e,t=en.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Yt(this.priorityNode_)}static set __childrenNodeConstructor(e){Jt=e}static get __childrenNodeConstructor(){return Jt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new en(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ut(e)?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:en.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ut(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.hu)(".priority"!==n||1===ht(e),".priority must be the last token in a path"),this.updateImmediateChild(n,en.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?j(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===en.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof en.__childrenNodeConstructor?-1:((0,s.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=en.VALUE_TYPE_ORDER.indexOf(t),r=en.VALUE_TYPE_ORDER.indexOf(n);return(0,s.hu)(i>=0,"Unknown leaf type: "+t),(0,s.hu)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function tn(e){Xt=e}function nn(e){Zt=e}en.VALUE_TYPE_ORDER=["object","boolean","number","string"];class rn extends Mt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?P(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ft.MIN}maxPost(){return new Ft(O,new en("[PRIORITY-POST]",Zt))}makePost(e,t){const n=Xt(e);return new Ft(t,new en("[PRIORITY-POST]",n))}toString(){return".priority"}}const sn=new rn,on=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){const t=e=>parseInt(Math.log(e)/on,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ut(a,o.node,Ut.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),u=r(l+1,i);return o=e[l],a=n?n(o):o,new Ut(a,o.node,Ut.BLACK,c,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),u=e[s],h=n?n(u):u;l(new Ut(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Ut.BLACK):(a(i,Ut.BLACK),a(i,Ut.RED))}return s},o=new an(e.length),a=s(o);return new zt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn;const un={};class hn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.hu)(un&&sn,"ChildrenNode.ts has not been loaded"),cn=cn||new hn({".priority":un},{".priority":sn}),cn}get(e){const t=(0,s.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zt?t:null}hasIndex(e){return(0,s.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.hu)(e!==$t,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Ft.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?ln(n,e.getCompare()):un;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=o,new hn(u,c)}addToIndexes(e,t){const n=(0,s.UI)(this.indexes_,((n,i)=>{const r=(0,s.DV)(this.indexSet_,i);if((0,s.hu)(r,"Missing index implementation for "+i),n===un){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Ft.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),ln(n,r.getCompare())}return un}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Ft(e.name,i))),r.insert(e,e.node)}}));return new hn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.UI)(this.indexes_,(n=>{if(n===un)return n;{const i=t.get(e.name);return i?n.remove(new Ft(e.name,i)):n}}));return new hn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;class fn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Yt(this.priorityNode_),this.children_.isEmpty()&&(0,s.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return dn||(dn=new fn(new zt(Wt),null,hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dn}updatePriority(e){return this.children_.isEmpty()?this:new fn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?dn:t}}getChild(e){const t=ut(e);return null===t?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ft(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?dn:this.priorityNode_;return new fn(i,s,r)}}updateChild(e,t){const n=ut(e);if(null===n)return t;{(0,s.hu)(".priority"!==ut(e)||1===ht(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(dt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(sn,((s,o)=>{t[s]=o.val(e),n++,r&&fn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(sn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ft(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ft(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ft(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Ft.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Ft.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===$t||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new fn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===$t||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(sn),n=t.getIterator(sn);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===$t?null:this.indexMap_.get(e.toString())}}fn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pn extends fn{constructor(){super(new zt(Wt),fn.EMPTY_NODE,hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fn.EMPTY_NODE}isEmpty(){return!1}}const mn=new pn;Object.defineProperties(Ft,{MIN:{value:new Ft(R,fn.EMPTY_NODE)},MAX:{value:new Ft(O,mn)}}),jt.__EMPTY_NODE=fn.EMPTY_NODE,en.__childrenNodeConstructor=fn,Gt(mn),nn(mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=!0;function vn(e,t=null){if(null===e)return fn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new en(n,vn(t))}if(e instanceof Array||!gn){let n=fn.EMPTY_NODE;return q(e,((t,i)=>{if((0,s.r3)(e,t)&&"."!==t.substring(0,1)){const e=vn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(vn(t))}{const n=[];let i=!1;const r=e;if(q(r,((e,t)=>{if("."!==e.substring(0,1)){const r=vn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Ft(e,r)))}})),0===n.length)return fn.EMPTY_NODE;const s=ln(n,Ht,(e=>e.name),Wt);if(i){const e=ln(n,sn.getCompare());return new fn(s,vn(t),new hn({".priority":e},{".priority":sn}))}return new fn(s,vn(t),hn.Default)}}tn(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends Mt{constructor(e){super(),this.indexPath_=e,(0,s.hu)(!yt(e)&&".priority"!==ut(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?P(e.name,t.name):r}makePost(e,t){const n=vn(e),i=fn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ft(t,i)}maxPost(){const e=fn.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Ft(O,e)}toString(){return mt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Mt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?P(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ft.MIN}maxPost(){return Ft.MAX}makePost(e,t){const n=vn(e);return new Ft(t,n)}toString(){return".value"}}const bn=new _n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e){return{type:"value",snapshotNode:e}}function Cn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function En(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Sn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Tn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sn}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:R}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:O}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sn}copy(){const e=new kn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===sn?n="$priority":e.index_===bn?n="$value":e.index_===$t?n="$key":((0,s.hu)(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,s.Wl)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,s.Wl)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,s.Wl)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,s.Wl)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,s.Wl)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function In(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==sn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends it{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=S("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Nn.getListenId_(e,n),a={};this.listens_[o]=a;const l=xn(e._queryParams);this.restRequest_(r+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(r,l,!1,n),(0,s.DV)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Nn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=xn(e._queryParams),n=e._path.toString(),i=new s.BH;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.xO)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,s.cI)(a.responseText)}catch(e){x("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&x("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.rootNode_=fn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return{value:null,children:new Map}}function On(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ut(t);e.children.has(i)||e.children.set(i,Rn());const r=e.children.get(i);t=dt(t),On(r,t,n)}}function Pn(e,t,n){null!==e.value?n(t,e.value):Dn(e,((e,i)=>{const r=new lt(t.toString()+"/"+e);Pn(i,r,n)}))}function Dn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&q(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=1e4,Mn=3e4,qn=3e5;class jn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ln(e);const n=Fn+(Mn-Fn)*Math.random();G(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;q(e,((e,i)=>{i>0&&(0,s.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),G(this.reportStats_.bind(this),Math.floor(2*Math.random()*qn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n;function Vn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Un(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})($n||($n={}));class zn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=$n.ACK_USER_WRITE,this.source=Vn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,s.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new zn(ct(),t,this.revert)}}return(0,s.hu)(ut(this.path)===e,"operationForChild called for unrelated child."),new zn(dt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=$n.OVERWRITE}operationForChild(e){return yt(this.path)?new Hn(this.source,ct(),this.snap.getImmediateChild(e)):new Hn(this.source,dt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=$n.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new Hn(this.source,ct(),t.value):new Wn(this.source,ct(),t)}return(0,s.hu)(ut(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wn(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ut(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(e,t,n,i){const r=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Tn(t.childName,t.snapshotNode))})),Qn(e,r,"child_removed",t,i,n),Qn(e,r,"child_added",t,i,n),Qn(e,r,"child_moved",s,i,n),Qn(e,r,"child_changed",t,i,n),Qn(e,r,"value",t,i,n),r}function Qn(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>Jn(e,t,n))),o.forEach((n=>{const i=Yn(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Yn(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Jn(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.g5)("Should only compare child_ events.");const i=new Ft(t.childName,t.snapshotNode),r=new Ft(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(e,t){return{eventCache:e,serverCache:t}}function Zn(e,t,n,i){return Xn(new Kn(t,n,i),e.serverCache)}function ei(e,t,n,i){return Xn(e.eventCache,new Kn(t,n,i))}function ti(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ni(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii;const ri=()=>(ii||(ii=new zt(D)),ii);class si{constructor(e,t=ri()){this.value=e,this.children=t}static fromObject(e){let t=new si(null);return q(e,((e,n)=>{t=t.set(new lt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ct(),value:this.value};if(yt(e))return null;{const n=ut(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(dt(e),t);if(null!=r){const e=vt(new lt(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(yt(e))return this;{const t=ut(e),n=this.children.get(t);return null!==n?n.subtree(dt(e)):new si(null)}}set(e,t){if(yt(e))return new si(t,this.children);{const n=ut(e),i=this.children.get(n)||new si(null),r=i.set(dt(e),t),s=this.children.insert(n,r);return new si(this.value,s)}}remove(e){if(yt(e))return this.children.isEmpty()?new si(null):new si(null,this.children);{const t=ut(e),n=this.children.get(t);if(n){const i=n.remove(dt(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new si(null):new si(this.value,r)}return this}}get(e){if(yt(e))return this.value;{const t=ut(e),n=this.children.get(t);return n?n.get(dt(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ut(e),i=this.children.get(n)||new si(null),r=i.setTree(dt(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new si(this.value,s)}}fold(e){return this.fold_(ct(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(vt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ct(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(yt(e))return null;{const i=ut(e),r=this.children.get(i);return r?r.findOnPath_(dt(e),vt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ct(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const i=ut(e),r=this.children.get(i);return r?r.foreachOnPath_(dt(e),vt(t,i),n):new si(null)}}foreach(e){this.foreach_(ct(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(vt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.writeTree_=e}static empty(){return new oi(new si(null))}}function ai(e,t,n){if(yt(t))return new oi(new si(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=_t(r,t);return s=s.updateChild(o,n),new oi(e.writeTree_.set(r,s))}{const i=new si(n),r=e.writeTree_.setTree(t,i);return new oi(r)}}}function li(e,t,n){let i=e;return q(n,((e,n)=>{i=ai(i,vt(t,e),n)})),i}function ci(e,t){if(yt(t))return oi.empty();{const n=e.writeTree_.setTree(t,new si(null));return new oi(n)}}function ui(e,t){return null!=hi(e,t)}function hi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(_t(n.path,t)):null}function di(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(sn,((e,n)=>{t.push(new Ft(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Ft(e,n.value))})),t}function fi(e,t){if(yt(t))return e;{const n=hi(e,t);return new oi(null!=n?new si(n):e.writeTree_.subtree(t))}}function pi(e){return e.writeTree_.isEmpty()}function mi(e,t){return gi(ct(),e.writeTree_,t)}function gi(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,s.hu)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=gi(vt(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(vt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(e,t){return ji(t,e)}function yi(e,t,n,i,r){(0,s.hu)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=ai(e.visibleWrites,t,n)),e.lastWriteId=i}function _i(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function bi(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,s.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&wi(t,i.path)?r=!1:wt(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return Ci(e),!0;if(i.snap)e.visibleWrites=ci(e.visibleWrites,i.path);else{const t=i.children;q(t,(t=>{e.visibleWrites=ci(e.visibleWrites,vt(i.path,t))}))}return!0}return!1}function wi(e,t){if(e.snap)return wt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&wt(vt(e.path,n),t))return!0;return!1}function Ci(e){e.visibleWrites=Si(e.allWrites,Ei,ct()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ei(e){return e.visible}function Si(e,t,n){let i=oi.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)wt(n,e)?(t=_t(n,e),i=ai(i,t,o.snap)):wt(e,n)&&(t=_t(e,n),i=ai(i,ct(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.g5)("WriteRecord should have .snap or .children");if(wt(n,e))t=_t(n,e),i=li(i,t,o.children);else if(wt(e,n))if(t=_t(e,n),yt(t))i=li(i,ct(),o.children);else{const e=(0,s.DV)(o.children,ut(t));if(e){const n=e.getChild(dt(t));i=ai(i,ct(),n)}}}}}return i}function Ti(e,t,n,i,r){if(i||r){const s=fi(e.visibleWrites,t);if(!r&&pi(s))return n;if(r||null!=n||ui(s,ct())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(wt(e.path,t)||wt(t,e.path))},o=Si(e.allWrites,s,t),a=n||fn.EMPTY_NODE;return mi(o,a)}return null}{const i=hi(e.visibleWrites,t);if(null!=i)return i;{const i=fi(e.visibleWrites,t);if(pi(i))return n;if(null!=n||ui(i,ct())){const e=n||fn.EMPTY_NODE;return mi(i,e)}return null}}}function ki(e,t,n){let i=fn.EMPTY_NODE;const r=hi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(sn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=fi(e.visibleWrites,t);return n.forEachChild(sn,((e,t)=>{const n=mi(fi(r,new lt(e)),t);i=i.updateImmediateChild(e,n)})),di(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=fi(e.visibleWrites,t);return di(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function xi(e,t,n,i,r){(0,s.hu)(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=vt(t,n);if(ui(e.visibleWrites,o))return null;{const t=fi(e.visibleWrites,o);return pi(t)?r.getChild(n):mi(t,r.getChild(n))}}function Ii(e,t,n,i){const r=vt(t,n),s=hi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=fi(e.visibleWrites,r);return mi(t,i.getNode().getImmediateChild(n))}return null}function Ni(e,t){return hi(e.visibleWrites,t)}function Ai(e,t,n,i,r,s,o){let a;const l=fi(e.visibleWrites,t),c=hi(l,ct());if(null!=c)a=c;else{if(null==n)return[];a=mi(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();while(l&&e.length<r)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}function Ri(){return{visibleWrites:oi.empty(),allWrites:[],lastWriteId:-1}}function Oi(e,t,n,i){return Ti(e.writeTree,e.treePath,t,n,i)}function Pi(e,t){return ki(e.writeTree,e.treePath,t)}function Di(e,t,n,i){return xi(e.writeTree,e.treePath,t,n,i)}function Li(e,t){return Ni(e.writeTree,vt(e.treePath,t))}function Fi(e,t,n,i,r,s){return Ai(e.writeTree,e.treePath,t,n,i,r,s)}function Mi(e,t,n){return Ii(e.writeTree,e.treePath,t,n)}function qi(e,t){return ji(vt(e.treePath,t),e.writeTree)}function ji(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Sn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,En(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Cn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,s.g5)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Sn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Ui=new Vi;class Bi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Mi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ni(this.viewCache_),r=Fi(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e,t){(0,s.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,s.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Hi(e,t,n,i,r){const o=new $i;let a,l;if(n.type===$n.OVERWRITE){const c=n;c.source.fromUser?a=Qi(e,t,c.path,c.snap,i,r,o):((0,s.hu)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!yt(c.path),a=Gi(e,t,c.path,c.snap,i,r,l,o))}else if(n.type===$n.MERGE){const c=n;c.source.fromUser?a=Ji(e,t,c.path,c.children,i,r,o):((0,s.hu)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=Zi(e,t,c.path,c.children,i,r,l,o))}else if(n.type===$n.ACK_USER_WRITE){const s=n;a=s.revert?nr(e,t,s.path,i,r,o):er(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==$n.LISTEN_COMPLETE)throw(0,s.g5)("Unknown operation type: "+n.type);a=tr(e,t,n.path,i,o)}const c=o.getChanges();return Wi(t,a,c),{viewCache:a,changes:c}}function Wi(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ti(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(wn(ti(t)))}}function Ki(e,t,n,i,r,o){const a=t.eventCache;if(null!=Li(i,n))return t;{let l,c;if(yt(n))if((0,s.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ni(t),r=n instanceof fn?n:fn.EMPTY_NODE,s=Pi(i,r);l=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=Oi(i,ni(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ut(n);if(".priority"===u){(0,s.hu)(1===ht(n),"Can't have a priority with additional path components");const r=a.getNode();c=t.serverCache.getNode();const o=Di(i,n,r,c);l=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=dt(n);let h;if(a.isCompleteForChild(u)){c=t.serverCache.getNode();const e=Di(i,n,a.getNode(),c);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=Mi(i,u,t.serverCache);l=null!=h?e.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return Zn(t,l,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function Gi(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(yt(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=ut(n);if(!l.isCompleteForPath(n)&&ht(n)>1)return t;const r=dt(n),s=l.getNode().getImmediateChild(e),o=s.updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,r,Ui,null)}const h=ei(t,c,l.isFullyInitialized()||yt(n),u.filtersNodes()),d=new Bi(r,h,s);return Ki(e,h,n,r,d,a)}function Qi(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const u=new Bi(r,t,s);if(yt(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Zn(t,c,!0,e.filter.filtersNodes());else{const r=ut(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Zn(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=dt(n),c=a.getNode().getImmediateChild(r);let h;if(yt(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===ft(s)&&e.getChild(gt(s)).isEmpty()?e:e.updateChild(s,i):fn.EMPTY_NODE}if(c.equals(h))l=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);l=Zn(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Yi(e,t){return e.eventCache.isCompleteForChild(t)}function Ji(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=vt(n,i);Yi(t,ut(c))&&(a=Qi(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=vt(n,i);Yi(t,ut(c))||(a=Qi(e,a,c,l,r,s,o))})),a}function Xi(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Zi(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=yt(n)?i:new si(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),u=Xi(e,l,i);c=Gi(e,c,new lt(n),u,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),u=Xi(e,l,i);c=Gi(e,c,new lt(n),u,r,s,o,a)}})),c}function er(e,t,n,i,r,s,o){if(null!=Li(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(yt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Gi(e,t,n,l.getNode().getChild(n),r,s,a,o);if(yt(n)){let i=new si(null);return l.getNode().forEachChild($t,((e,t)=>{i=i.set(new lt(e),t)})),Zi(e,t,n,i,r,s,a,o)}return t}{let c=new si(null);return i.foreach(((e,t)=>{const i=vt(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Zi(e,t,n,c,r,s,a,o)}}function tr(e,t,n,i,r){const s=t.serverCache,o=ei(t,s.getNode(),s.isFullyInitialized()||yt(n),s.isFiltered());return Ki(e,o,n,i,Ui,r)}function nr(e,t,n,i,r,o){let a;if(null!=Li(i,n))return t;{const l=new Bi(i,t,r),c=t.eventCache.getNode();let u;if(yt(n)||".priority"===ut(n)){let n;if(t.serverCache.isFullyInitialized())n=Oi(i,ni(t));else{const e=t.serverCache.getNode();(0,s.hu)(e instanceof fn,"serverChildren would be complete if leaf node"),n=Pi(i,e)}u=e.filter.updateFullNode(c,n,o)}else{const r=ut(n);let s=Mi(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=c.getImmediateChild(r)),u=null!=s?e.filter.updateChild(c,r,s,dt(n),l,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,fn.EMPTY_NODE,dt(n),l,o):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Oi(i,ni(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Li(i,ct()),Zn(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e,t){const n=ni(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ut(t)).isEmpty())?n.getChild(t):null}function rr(e,t,n,i){t.type===$n.MERGE&&null!==t.source.queryId&&((0,s.hu)(ni(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.hu)(ti(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=Hi(e.processor_,r,t,n,i);return zi(e.processor_,o.viewCache),(0,s.hu)(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,sr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function sr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return Gn(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or,ar;function lr(e){(0,s.hu)(!or,"__referenceConstructor has already been defined"),or=e}function cr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return(0,s.hu)(null!=o,"SyncTree gave us an op for an invalid query."),rr(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(rr(s,t,n,i));return r}}function ur(e,t){let n=null;for(const i of e.views.values())n=n||ir(i,t);return n}function hr(e){(0,s.hu)(!ar,"__referenceConstructor has already been defined"),ar=e}class dr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new si(null),this.pendingWriteTree_=Ri(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fr(e,t,n,i,r){return yi(e.pendingWriteTree_,t,n,i,r),r?br(e,new Hn(Vn(),t,n)):[]}function pr(e,t,n=!1){const i=_i(e.pendingWriteTree_,t),r=bi(e.pendingWriteTree_,t);if(r){let t=new si(null);return null!=i.snap?t=t.set(ct(),!0):q(i.children,(e=>{t=t.set(new lt(e),!0)})),br(e,new zn(i.path,t,n))}return[]}function mr(e,t,n){return br(e,new Hn(Un(),t,n))}function gr(e,t,n){const i=si.fromObject(n);return br(e,new Wn(Un(),t,i))}function vr(e,t,n,i){const r=Er(e,i);if(null!=r){const i=Sr(r),s=i.path,o=i.queryId,a=_t(s,t),l=new Hn(Bn(o),a,n);return Tr(e,s,l)}return[]}function yr(e,t,n,i){const r=Er(e,i);if(r){const i=Sr(r),s=i.path,o=i.queryId,a=_t(s,t),l=si.fromObject(n),c=new Wn(Bn(o),a,l);return Tr(e,s,c)}return[]}function _r(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=_t(e,t),r=ur(n,i);if(r)return r}));return Ti(r,t,s,n,i)}function br(e,t){return wr(t,e.syncPointTree_,null,vi(e.pendingWriteTree_,ct()))}function wr(e,t,n,i){if(yt(e.path))return Cr(e,t,n,i);{const r=t.get(ct());null==n&&null!=r&&(n=ur(r,ct()));let s=[];const o=ut(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=qi(i,o);s=s.concat(wr(a,l,e,t))}return r&&(s=s.concat(cr(r,e,i,n))),s}}function Cr(e,t,n,i){const r=t.get(ct());null==n&&null!=r&&(n=ur(r,ct()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=qi(i,t),l=e.operationForChild(t);l&&(s=s.concat(Cr(l,r,o,a)))})),r&&(s=s.concat(cr(r,e,i,n))),s}function Er(e,t){return e.tagToQueryMap.get(t)}function Sr(e){const t=e.indexOf("$");return(0,s.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function Tr(e,t,n){const i=e.syncPointTree_.get(t);(0,s.hu)(i,"Missing sync point for query tag that we're tracking");const r=vi(e.pendingWriteTree_,t);return cr(i,n,r,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new kr(t)}node(){return this.node_}}class xr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new xr(this.syncTree_,t)}node(){return _r(this.syncTree_,this.path_)}}const Ir=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Nr=function(e,t,n){return e&&"object"===typeof e?((0,s.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Ar(e[".sv"],t,n):"object"===typeof e[".sv"]?Rr(e[".sv"],t):void(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ar=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,s.hu)(!1,"Unexpected server value: "+e)}},Rr=function(e,t,n){e.hasOwnProperty("increment")||(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,s.hu)(!1,"Unexpected increment value: "+i);const r=t.node();if((0,s.hu)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},Or=function(e,t,n,i){return Dr(t,new xr(n,e),i)},Pr=function(e,t,n){return Dr(e,new kr(t),n)};function Dr(e,t,n){const i=e.getPriority().val(),r=Nr(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Nr(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new en(s,vn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new en(r))),i.forEachChild(sn,((e,i)=>{const r=Dr(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Fr(e,t){let n=t instanceof lt?t:new lt(t),i=e,r=ut(n);while(null!==r){const e=(0,s.DV)(i.node.children,r)||{children:{},childCount:0};i=new Lr(r,i,e),n=dt(n),r=ut(n)}return i}function Mr(e){return e.node.value}function qr(e,t){e.node.value=t,Hr(e)}function jr(e){return e.node.childCount>0}function $r(e){return void 0===Mr(e)&&!jr(e)}function Vr(e,t){q(e.node.children,((n,i)=>{t(new Lr(n,e,i))}))}function Ur(e,t,n,i){n&&!i&&t(e),Vr(e,(e=>{Ur(e,t,!0,i)})),n&&i&&t(e)}function Br(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function zr(e){return new lt(null===e.parent?e.name:zr(e.parent)+"/"+e.name)}function Hr(e){null!==e.parent&&Wr(e.parent,e.name,e)}function Wr(e,t,n){const i=$r(n),r=(0,s.r3)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Hr(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Hr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=/[\[\].#$\/\u0000-\u001F\u007F]/,Gr=/[\[\].#$\u0000-\u001F\u007F]/,Qr=10485760,Yr=function(e){return"string"===typeof e&&0!==e.length&&!Kr.test(e)},Jr=function(e){return"string"===typeof e&&0!==e.length&&!Gr.test(e)},Xr=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Jr(e)},Zr=function(e,t,n){const i=n instanceof lt?new Ct(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+kt(i));if("function"===typeof t)throw new Error(e+"contains a function "+kt(i)+" with contents = "+t.toString());if(N(t))throw new Error(e+"contains "+t.toString()+" "+kt(i));if("string"===typeof t&&t.length>Qr/3&&(0,s.ug)(t)>Qr)throw new Error(e+"contains a string greater than "+Qr+" utf8 bytes "+kt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(q(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Yr(t)))throw new Error(e+" contains an invalid key ("+t+") "+kt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(i,t),Zr(e,s,i),St(i)})),n&&r)throw new Error(e+' contains ".value" child '+kt(i)+" in addition to actual children.")}},es=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Yr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Xr(n))throw new Error((0,s.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ns(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||bt(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function is(e,t,n){ns(e,n),rs(e,(e=>wt(e,t)||wt(t,e)))}function rs(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(ss(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ss(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();b&&E("event: "+n.toString()),W(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="repo_interrupt",as=25;class ls{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ts,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rn(),this.transactionQueueTree_=new Lr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cs(e,t,n){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||K())e.server_=new Nn(e.repoInfo_,((t,n,i,r)=>{ds(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>fs(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.Wl)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Lt(e.repoInfo_,t,((t,n,i,r)=>{ds(e,t,n,i,r)}),(t=>{fs(e,t)}),(t=>{ps(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ge(e.repoInfo_,(()=>new jn(e.stats_,e.server_))),e.infoData_=new An,e.infoSyncTree_=new dr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=mr(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),ms(e,"connected",!1),e.serverSyncTree_=new dr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);is(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function us(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function hs(e){return Ir({timestamp:us(e)})}function ds(e,t,n,i,r){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=(0,s.UI)(n,(e=>vn(e)));a=yr(e.serverSyncTree_,o,t,r)}else{const t=vn(n);a=vr(e.serverSyncTree_,o,t,r)}else if(i){const t=(0,s.UI)(n,(e=>vn(e)));a=gr(e.serverSyncTree_,o,t)}else{const t=vn(n);a=mr(e.serverSyncTree_,o,t)}let l=o;a.length>0&&(l=Es(e,o)),is(e.eventQueue_,l,a)}function fs(e,t){ms(e,"connected",t),!1===t&&vs(e)}function ps(e,t){q(t,((t,n)=>{ms(e,t,n)}))}function ms(e,t,n){const i=new lt("/.info/"+t),r=vn(n);e.infoData_.updateSnapshot(i,r);const s=mr(e.infoSyncTree_,i,r);is(e.eventQueue_,i,s)}function gs(e){return e.nextWriteId_++}function vs(e){_s(e,"onDisconnectEvents");const t=hs(e),n=Rn();Pn(e.onDisconnect_,ct(),((i,r)=>{const s=Or(i,r,e.serverSyncTree_,t);On(n,i,s)}));let i=[];Pn(n,ct(),((t,n)=>{i=i.concat(mr(e.serverSyncTree_,t,n));const r=Ns(e,t);Es(e,r)})),e.onDisconnect_=Rn(),is(e.eventQueue_,ct(),i)}function ys(e){e.persistentConnection_&&e.persistentConnection_.interrupt(os)}function _s(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function bs(e,t,n){return _r(e.serverSyncTree_,t,n)||fn.EMPTY_NODE}function ws(e,t=e.transactionQueueTree_){if(t||Is(e,t),Mr(t)){const n=ks(e,t);(0,s.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&Cs(e,zr(t),n)}else jr(t)&&Vr(t,(t=>{ws(e,t)}))}function Cs(e,t,n){const i=n.map((e=>e.currentWriteId)),r=bs(e,t,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,s.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=_t(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,(i=>{_s(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(pr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Is(e,Fr(e.transactionQueueTree_,t)),ws(e,e.transactionQueueTree_),is(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)W(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{x("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Es(e,t)}}),a)}function Es(e,t){const n=Ts(e,t),i=zr(n),r=ks(e,n);return Ss(e,r,i),i}function Ss(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const o=t[l],c=_t(n,o.path);let u,h=!1;if((0,s.hu)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(pr(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=as)h=!0,u="maxretry",r=r.concat(pr(e.serverSyncTree_,o.currentWriteId,!0));else{const n=bs(e,o.path,a);o.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){Zr("transaction failed: Data returned ",i,o.path);let t=vn(i);const l="object"===typeof i&&null!=i&&(0,s.r3)(i,".priority");l||(t=t.updatePriority(n.getPriority()));const c=o.currentWriteId,u=hs(e),h=Pr(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=gs(e),a.splice(a.indexOf(c),1),r=r.concat(fr(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(pr(e.serverSyncTree_,c,!0))}else h=!0,u="nodata",r=r.concat(pr(e.serverSyncTree_,o.currentWriteId,!0))}is(e.eventQueue_,n,r),r=[],h&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===u?i.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):i.push((()=>t[l].onComplete(new Error(u),!1,null)))))}Is(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)W(i[s]);ws(e,e.transactionQueueTree_)}function Ts(e,t){let n,i=e.transactionQueueTree_;n=ut(t);while(null!==n&&void 0===Mr(i))i=Fr(i,n),t=dt(t),n=ut(t);return i}function ks(e,t){const n=[];return xs(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function xs(e,t,n){const i=Mr(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Vr(t,(t=>{xs(e,t,n)}))}function Is(e,t){const n=Mr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,qr(t,n.length>0?n:void 0)}Vr(t,(t=>{Is(e,t)}))}function Ns(e,t){const n=zr(Ts(e,t)),i=Fr(e.transactionQueueTree_,t);return Br(i,(t=>{As(e,t)})),As(e,i),Ur(i,(t=>{As(e,t)})),n}function As(e,t){const n=Mr(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.hu)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(pr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?qr(t,void 0):n.length=o+1,is(e.eventQueue_,zr(t),r);for(let e=0;e<i.length;e++)W(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function Os(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):x(`Invalid query segment '${n}' in query '${e}'`)}return t}const Ps=function(e,t){const n=Ds(e),i=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||I();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ce(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new lt(n.pathString)}},Ds=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=Rs(e.substring(u,h)));const d=Os(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},Ls="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return yt(this._path)?null:ft(this._path)}get ref(){return new Ms(this._repo,this._path)}get _queryIdentifier(){const e=In(this._queryParams),t=F(e);return"{}"===t?"default":t}get _queryObject(){return In(this._queryParams)}isEqual(e){if(e=(0,s.m9)(e),!(e instanceof Fs))return!1;const t=this._repo===e._repo,n=bt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pt(this._path)}}class Ms extends Fs{constructor(e,t){super(e,t,new kn,!1)}get parent(){const e=gt(this._path);return null===e?null:new Ms(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}lr(Ms),hr(Ms);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qs="FIREBASE_DATABASE_EMULATOR_HOST",js={};let $s=!1;function Vs(e,t,n,i){e.repoInfo_=new ce(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}function Us(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Ps(s,r),c=l.repoInfo;"undefined"!==typeof process&&process.env&&(a=process.env[qs]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Ps(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const u=r&&o?new J(J.OWNER):new Y(e.name,e.options,t);es("Invalid Firebase Database URL",l),yt(l.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const h=zs(c,e,u,new Q(e.name,n));return new Hs(h,e)}function Bs(e,t){const n=js[t];n&&n[e.key]===e||k(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ys(e),delete n[e.key]}function zs(e,t,n,i){let r=js[t.name];r||(r={},js[t.name]=r);let s=r[e.toURLString()];return s&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ls(e,$s,n,i),r[e.toURLString()]=s,s}class Hs{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cs(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ms(this._repo,ct())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Bs(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&k("Cannot call "+e+" on a deleted database.")}}function Ws(e=(0,i.Mq)(),t){const n=(0,i.qX)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,s.P0)("database");e&&Ks(n,...e)}return n}function Ks(e,t,n,i={}){e=(0,s.m9)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&k("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&k('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new J(J.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:(0,s.Sg)(i.mockUserToken,e.app.options.projectId);o=new J(t)}Vs(r,t,n,o)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gs(e){u(i.Jn),(0,i.Xd)(new r.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Us(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(a,l,e),(0,i.KN)(a,l,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Lt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Gs()},8109:(e,t,n)=>{"use strict";n.d(t,{hJ:()=>Wc,PL:()=>mu,ad:()=>Qc});var i,r=n(8897),s=n(3513),o=n(9795),a=n(5505),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},c={},u=u||{},h=l||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:_,b.apply(null,arguments)}function w(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function C(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function E(){this.s=this.s,this.o=this.o}var S=0;E.prototype.s=!1,E.prototype.na=function(){this.s||(this.s=!0,this.M(),0==S)||m(this)},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function k(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function x(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,i=t.length||0;e.length=n+i;for(let r=0;r<i;r++)e[n+r]=t[r]}else e.push(t)}}function I(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function A(e){return/^[\s\xa0]*$/.test(e)}var R=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function O(e,t){return e<t?-1:e>t?1:0}function P(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return-1!=P().indexOf(e)}function L(e){return L[" "](e),e}function F(e){var t=Q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}L[" "]=d;var M,q=D("Opera"),j=D("Trident")||D("MSIE"),$=D("Edge"),V=$||j,U=D("Gecko")&&!(-1!=P().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),B=-1!=P().toLowerCase().indexOf("webkit")&&!D("Edge");function z(){var e=h.document;return e?e.documentMode:void 0}e:{var H="",W=function(){var e=P();return U?/rv:([^\);]+)(\)|;)/.exec(e):$?/Edge\/([\d\.]+)/.exec(e):j?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):B?/WebKit\/(\S+)/.exec(e):q?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(W&&(H=W?W[1]:""),j){var K=z();if(null!=K&&K>parseFloat(H)){M=String(K);break e}}M=H}var G,Q={};function Y(){return F((function(){let e=0;const t=R(String(M)).split("."),n=R("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=O(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||O(0==r[2].length,0==s[2].length)||O(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&j){var J=z();G=J||(parseInt(M,10)||void 0)}else G=void 0;var X=G;function Z(e,t){if(I.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(U){e:{try{L(t.nodeName);var r=!0;break e}catch(s){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}C(Z,I);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function ie(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++ne,this.ba=this.ea=!1}function re(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function se(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(e,t){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function ce(e){this.src=e,this.g={},this.h=0}function ue(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=T(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(re(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==i)return r}return-1}ce.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=he(e,t,i,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new ie(t,this.src,s,!!i,r),t.ea=n,e.push(t)),t};var de="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,i,r){if(i&&i.once)return ve(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,i,r);return null}return n=Se(n),e&&e[te]?e.N(t,n,p(i)?!!i.capture:!!i,r):me(e,t,n,!1,i,r)}function me(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=p(r)?!!r.capture:!!r,a=Ce(e);if(a||(e[de]=a=new ce(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=ge(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)N||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(be(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}const t=we;return e}function ve(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ve(e,t[s],n,i,r);return null}return n=Se(n),e&&e[te]?e.O(t,n,p(i)?!!i.capture:!!i,r):me(e,t,n,!0,i,r)}function ye(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)ye(e,t[s],n,i,r);else i=p(i)?!!i.capture:!!i,n=Se(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=he(s,n,i,r),-1<n&&(re(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,i,r)),(n=-1<e?t[e]:null)&&_e(n))}function _e(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])ue(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(be(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Ce(t))?(ue(n,e),0==n.h&&(n.src=null,t[de]=null)):re(e)}}}function be(e){return e in fe?fe[e]:fe[e]="on"+e}function we(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&_e(e),e=n.call(i,t)}return e}function Ce(e){return e=e[de],e instanceof ce?e:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Ee]||(e[Ee]=function(t){return e.handleEvent(t)}),e[Ee])}function Te(){E.call(this),this.i=new ce(this),this.P=this,this.I=null}function ke(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"===typeof t)t=new I(t,e);else if(t instanceof I)t.target=t.target||e;else{var r=t;t=new I(i,e),le(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=xe(o,i,!0,t)&&r}if(o=t.g=e,r=xe(o,i,!0,t)&&r,r=xe(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=xe(o,i,!1,t)&&r}function xe(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ue(e.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}C(Te,E),Te.prototype[te]=!0,Te.prototype.removeEventListener=function(e,t,n,i){ye(this,e,t,n,i)},Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)re(n[i]);delete t.g[e],t.h--}}this.I=null},Te.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Te.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Ie=h.JSON.stringify;function Ne(){var e=qe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ae{constructor(){this.h=this.g=null}add(e,t){const n=Oe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Re,Oe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Pe),(e=>e.reset()));class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function De(e){h.setTimeout((()=>{throw e}),0)}function Le(e,t){Re||Fe(),Me||(Re(),Me=!0),qe.add(e,t)}function Fe(){var e=h.Promise.resolve(void 0);Re=function(){e.then(je)}}var Me=!1,qe=new Ae;function je(){for(var e;e=Ne();){try{e.h.call(e.g)}catch(n){De(n)}var t=Oe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Me=!1}function $e(e,t){Te.call(this),this.h=e||1,this.g=t||h,this.j=b(this.lb,this),this.l=Date.now()}function Ve(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Ue(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function Be(e){e.g=Ue((()=>{e.g=null,e.i&&(e.i=!1,Be(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}C($e,Te),i=$e.prototype,i.ca=!1,i.R=null,i.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ke(this,"tick"),this.ca&&(Ve(this),this.start()))}},i.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){$e.X.M.call(this),Ve(this),delete this.g};class ze extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Be(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){E.call(this),this.h=e,this.g={}}C(He,E);var We=[];function Ke(e,t,n,i){Array.isArray(n)||(n&&(We[0]=n.toString()),n=We);for(var r=0;r<n.length;r++){var s=pe(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ge(e){se(e.g,(function(e,t){this.g.hasOwnProperty(t)&&_e(e)}),e),e.g={}}function Qe(){this.g=!0}function Ye(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}function Je(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Xe(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(i?" "+i:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ie(n)}catch(a){return t}}He.prototype.M=function(){He.X.M.call(this),Ge(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qe.prototype.Aa=function(){this.g=!1},Qe.prototype.info=function(){};var tt={},nt=null;function it(){return nt=nt||new Te}function rt(e){I.call(this,tt.Pa,e)}function st(e){const t=it();ke(t,new rt(t))}function ot(e,t){I.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=it();ke(t,new ot(t,e))}function lt(e,t){I.call(this,tt.Qa,e),this.size=t}function ct(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",C(rt,I),tt.STAT_EVENT="statevent",C(ot,I),tt.Qa="timingevent",C(lt,I);var ut={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dt(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}dt.prototype.h=null;var mt,gt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vt(){I.call(this,"d")}function yt(){I.call(this,"c")}function _t(){}function bt(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new He(this),this.O=Ct,e=V?125:void 0,this.T=new $e(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}C(vt,I),C(yt,I),C(_t,dt),_t.prototype.g=function(){return new XMLHttpRequest},_t.prototype.i=function(){return{}},mt=new _t;var Ct=45e3,Et={},St={};function Tt(e,t,n){e.K=1,e.v=Kt(Ut(t)),e.s=n,e.P=!0,kt(e,null)}function kt(e,t){e.F=Date.now(),At(e),e.A=Ut(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),an(n.i,"t",i),e.C=0,n=e.l.H,e.h=new wt,e.g=hi(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ze(b(e.La,e,e.g),e.N)),Ke(e.S,e.g,"readystatechange",e.ib),t=e.H?oe(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),st(),Ye(e.j,e.u,e.A,e.m,e.U,e.s)}function xt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function It(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=Nt(e,n),i==St){4==t&&(e.o=4,at(14),r=!1),Xe(e.j,e.m,null,"[Incomplete Response]");break}if(i==Et){e.o=4,at(15),Xe(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Xe(e.j,e.m,i,null),Lt(e,i)}xt(e)&&i!=St&&i!=Et&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ii(t),t.K=!0,at(11))):(Xe(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),Pt(e))}function Nt(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?St:(n=Number(t.substring(n,i)),isNaN(n)?Et:(i+=1,i+n>t.length?St:(t=t.substr(i,n),e.C=i+n,t)))}function At(e){e.V=Date.now()+e.O,Rt(e,e.O)}function Rt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ct(b(e.gb,e),t)}function Ot(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Pt(e){0==e.l.G||e.I||oi(e.l,e)}function Dt(e){Ot(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ve(e.T),Ge(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||mn(n.h,e)))if(!e.J&&mn(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(c){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;si(n),Gn(n)}ni(n),at(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=ct(b(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(c){}n.ja=void 0}}else li(n,11)}else if((e.J||n.g==e)&&si(n),!A(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const t=c[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(gn(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,Wt(i.F,i.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=e;if(i.sa=ui(i,i.H?i.ka:null,i.V),o.J){vn(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(Ot(a),At(a)),i.g=o}else ti(i);0<n.i.length&&Yn(n)}else"stop"!=c[0]&&"close"!=c[0]||li(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?li(n,7):Kn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}st(4)}catch(c){}}function Ft(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}function Mt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function qt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Mt(e),i=Ft(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}i=bt.prototype,i.setTimeout=function(e){this.O=e},i.ib=function(e){e=e.target;const t=this.L;t&&3==Vn(e)?t.l():this.La(e)},i.La=function(e){try{if(e==this.g)e:{const u=Vn(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(3!=u||V||this.g&&(this.h.h||this.g.fa()||Un(this.g)))){this.I||4!=u||7==t||st(8==t||0>=d?3:2),Ot(this);var n=this.g.aa();this.Y=n;t:if(xt(this)){var i=Un(this.g);e="";var r=i.length,s=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Dt(this),Pt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Je(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,at(12),Dt(this),Pt(this);break e}Xe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,n)}this.P?(It(this,u,o),V&&this.i&&3==u&&(Ke(this.S,this.T,"tick",this.hb),this.T.start())):(Xe(this.j,this.m,o,null),Lt(this,o)),4==u&&Dt(this),this.i&&!this.I&&(4==u?oi(this.l,this):(this.i=!1,At(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Dt(this),Pt(this)}}}catch(u){}},i.hb=function(){if(this.g){var e=Vn(this.g),t=this.g.fa();this.C<t.length&&(Ot(this),It(this,e,t),this.i&&4!=e&&At(this))}},i.cancel=function(){this.I=!0,Dt(this)},i.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(st(),at(17)),Dt(this),this.o=2,Pt(this)):Rt(this,this.V-e)};var jt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $t(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Vt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Vt){this.h=void 0!==t?t:e.h,Bt(this,e.j),this.s=e.s,this.g=e.g,zt(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ht(this,n),this.o=e.o}else e&&(n=String(e).match(jt))?(this.h=!!t,Bt(this,n[1]||"",!0),this.s=Gt(n[2]||""),this.g=Gt(n[3]||"",!0),zt(this,n[4]),this.l=Gt(n[5]||"",!0),Ht(this,n[6]||"",!0),this.o=Gt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function Ut(e){return new Vt(e)}function Bt(e,t,n){e.j=n?Gt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ht(e,t,n){t instanceof nn?(e.i=t,cn(e.i,e.h)):(n||(t=Qt(t,en)),e.i=new nn(t,e.h))}function Wt(e,t,n){e.i.set(t,n)}function Kt(e){return Wt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Yt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Vt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qt(t,Jt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Qt(t,Jt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Qt(n,"/"==n.charAt(0)?Zt:Xt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qt(n,tn)),e.join("")};var Jt=/[#\/\?@]/g,Xt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&$t(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=ln(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=ln(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(ln(e,t),k(n)),e.h+=n.length)}function ln(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function cn(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}i=nn.prototype,i.add=function(e,t){rn(this),this.i=null,e=ln(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},i.forEach=function(e,t){rn(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},i.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},i.W=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(ln(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},i.set=function(e,t){return rn(this),this.i=null,e=ln(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};var un=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||dn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function mn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function gn(e,t){e.g?e.g.add(t):e.h=t}function vn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function yn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return k(e.i)}function _n(){}function bn(){this.g=new _n}function wn(e,t,n){const i=n||"";try{qt(e,(function(e,n){let r=e;p(e)&&(r=Ie(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function Cn(e,t){const n=new Qe;if(h.Image){const i=new Image;i.onload=w(En,n,i,"TestLoadImage: loaded",!0,t),i.onerror=w(En,n,i,"TestLoadImage: error",!1,t),i.onabort=w(En,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=w(En,n,i,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}function En(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(s){}}function Sn(e){this.l=e.ac||null,this.j=e.jb||!1}function Tn(e,t){Te.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=kn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},_n.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},_n.prototype.parse=function(e){return h.JSON.parse(e,void 0)},C(Sn,dt),Sn.prototype.g=function(){return new Tn(this.l,this.j)},Sn.prototype.i=function(e){return function(){return e}}({}),C(Tn,Te);var kn=0;function xn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function In(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Nn(e)}function Nn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}i=Tn.prototype,i.open=function(e,t){if(this.readyState!=kn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Nn(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,In(this)),this.readyState=kn},i.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},i.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?In(this):Nn(this),3==this.readyState&&xn(this)}},i.Va=function(e){this.g&&(this.response=this.responseText=e,In(this))},i.Ua=function(e){this.g&&(this.response=e,In(this))},i.ga=function(){this.g&&In(this)},i.setRequestHeader=function(e,t){this.v.append(e,t)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var An=h.JSON.parse;function Rn(e){Te.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=On,this.K=this.L=!1}C(Rn,Te);var On="",Pn=/^https?$/i,Dn=["POST","PUT"];function Ln(e){return j&&Y()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Fn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Mn(e),jn(e)}function Mn(e){e.D||(e.D=!0,ke(e,"complete"),ke(e,"error"))}function qn(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=Vn(e)||2!=e.aa()))if(e.v&&4==Vn(e))Ue(e.Ha,0,e);else if(ke(e,"readystatechange"),4==Vn(e)){e.h=!1;try{const l=e.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===l){var r=String(e.H).match(jt)[1]||null;if(!r&&h.self&&h.self.location){var s=h.self.location.protocol;r=s.substr(0,s.length-1)}i=!Pn.test(r?r.toLowerCase():"")}n=i}if(n)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var o=2<Vn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Mn(e)}}finally{jn(e)}}}function jn(e,t){if(e.g){$n(e);const i=e.g,r=e.C[0]?d:null;e.g=null,e.C=null,t||ke(e,"ready");try{i.onreadystatechange=r}catch(n){}}}function $n(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Vn(e){return e.g?e.g.readyState:0}function Un(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case On:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Ii){return null}}function Bn(e){let t="";return se(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function zn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Bn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Wt(e,t,n))}function Hn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Wn(e){this.Ca=0,this.i=[],this.j=new Qe,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Hn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Hn("baseRetryDelayMs",5e3,e),this.bb=Hn("retryDelaySeedMs",1e4,e),this.$a=Hn("forwardChannelMaxRetries",2,e),this.ta=Hn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new bn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Kn(e){if(Qn(e),3==e.G){var t=e.U++,n=Ut(e.F);Wt(n,"SID",e.I),Wt(n,"RID",t),Wt(n,"TYPE","terminate"),Zn(e,n),t=new bt(e,e.j,t,void 0),t.K=2,t.v=Kt(Ut(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hi(t.l,null),t.g.da(t.v)),t.F=Date.now(),At(t)}ci(e)}function Gn(e){e.g&&(ii(e),e.g.cancel(),e.g=null)}function Qn(e){Gn(e),e.u&&(h.clearTimeout(e.u),e.u=null),si(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Yn(e){fn(e.h)||e.m||(e.m=!0,Le(e.Ja,e),e.C=0)}function Jn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ct(b(e.Ja,e,t),ai(e,e.C)),e.C++,!0))}function Xn(e,t){var n;n=t?t.m:e.U++;const i=Ut(e.F);Wt(i,"SID",e.I),Wt(i,"RID",n),Wt(i,"AID",e.T),Zn(e,i),e.o&&e.s&&zn(i,e.o,e.s),n=new bt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ei(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),gn(e.h,n),Tt(n,i,t)}function Zn(e,t){e.ia&&se(e.ia,(function(e,n){Wt(t,n,e)})),e.l&&qt({},(function(e,n){Wt(t,n,e)}))}function ei(e,t,n){n=Math.min(e.i.length,n);var i=e.l?b(e.l.Ra,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),s=!1;else try{wn(a,e,"req"+n+"_")}catch(qi){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function ti(e){e.g||e.u||(e.Z=1,Le(e.Ia,e),e.A=0)}function ni(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ct(b(e.Ia,e),ai(e,e.A)),e.A++,!0)}function ii(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ri(e){e.g=new bt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Ut(e.sa);Wt(t,"RID","rpc"),Wt(t,"SID",e.I),Wt(t,"CI",e.L?"0":"1"),Wt(t,"AID",e.T),Wt(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&zn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Kt(Ut(t)),n.s=null,n.P=!0,kt(n,e)}function si(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function oi(e,t){var n=null;if(e.g==t){si(e),ii(e),e.g=null;var i=2}else{if(!mn(e.h,t))return;n=t.D,vn(e.h,t),i=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;i=it(),ke(i,new lt(i,n)),Yn(e)}else ti(e);else if(r=t.o,3==r||0==r&&0<e.pa||!(1==i&&Jn(e,t)||2==i&&ni(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:li(e,5);break;case 4:li(e,10);break;case 3:li(e,6);break;default:li(e,2)}}function ai(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function li(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=b(e.kb,e);n||(n=new Vt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Bt(n,"https"),Kt(n)),Cn(n.toString(),i)}else at(2);e.G=0,e.l&&e.l.va(t),ci(e),Qn(e)}function ci(e){if(e.G=0,e.la=[],e.l){const t=yn(e.h);0==t.length&&0==e.i.length||(x(e.la,t),x(e.la,e.i),e.h.i.length=0,k(e.i),e.i.length=0),e.l.ua()}}function ui(e,t,n){var i=n instanceof Vt?Ut(n):new Vt(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),zt(i,i.m);else{var r=h.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new Vt(null,void 0);i&&Bt(s,i),t&&(s.g=t),r&&zt(s,r),n&&(s.l=n),i=s}return n=e.D,t=e.za,n&&t&&Wt(i,n,t),Wt(i,"VER",e.ma),Zn(e,i),i}function hi(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Rn(new Sn({jb:!0})):new Rn(e.ra),t.Ka(e.H),t}function di(){}function fi(){if(j&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function pi(e,t){Te.call(this),this.g=new Wn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!A(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!A(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vi(this)}function mi(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gi(){yt.call(this),this.status=1}function vi(e){this.g=e}i=Rn.prototype,i.Ka=function(e){this.L=e},i.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?ft(this.u):ft(mt),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Fn(this,s)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=h.FormData&&e instanceof h.FormData,!(0<=T(Dn,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$n(this),0<this.B&&((this.K=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=Ue(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Fn(this,s)}},i.qa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),jn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jn(this,!0)),Rn.X.M.call(this)},i.Ha=function(){this.s||(this.F||this.v||this.l?qn(this):this.fb())},i.fb=function(){qn(this)},i.aa=function(){try{return 2<Vn(this)?this.g.status:-1}catch(e){return-1}},i.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),An(t)}},i.Ea=function(){return this.m},i.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Wn.prototype,i.ma=8,i.G=1,i.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new bt(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=oe(s),le(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(t+=i,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ei(this,r,t),n=Ut(this.F),Wt(n,"RID",e),Wt(n,"CVER",22),this.D&&Wt(n,"X-HTTP-Session-Id",this.D),Zn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(Bn(s)))+"&"+t:this.o&&zn(n,this.o,s)),gn(this.h,r),this.Ya&&Wt(n,"TYPE","init"),this.O?(Wt(n,"$req",t),Wt(n,"SID","null"),r.Z=!0,Tt(r,n,null)):Tt(r,n,t),this.G=2}}else 3==this.G&&(e?Xn(this,e):0==this.i.length||fn(this.h)||Xn(this))},i.Ia=function(){if(this.u=null,ri(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ct(b(this.eb,this),e)}},i.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Gn(this),ri(this))},i.cb=function(){null!=this.v&&(this.v=null,Gn(this),ni(this),at(19))},i.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},i=di.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Ra=function(){},fi.prototype.g=function(e,t){return new pi(e,t)},C(pi,Te),pi.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ui(e,null,e.V),Yn(e)},pi.prototype.close=function(){Kn(this.g)},pi.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ie(e),e=n);t.i.push(new un(t.ab++,e)),3==t.G&&Yn(t)},pi.prototype.M=function(){this.g.l=null,delete this.j,Kn(this.g),delete this.g,pi.X.M.call(this)},C(mi,vt),C(gi,yt),C(vi,di),vi.prototype.xa=function(){ke(this.g,"a")},vi.prototype.wa=function(e){ke(this.g,new mi(e))},vi.prototype.va=function(e){ke(this.g,new gi)},vi.prototype.ua=function(){ke(this.g,"b")},fi.prototype.createWebChannel=fi.prototype.g,pi.prototype.send=pi.prototype.u,pi.prototype.open=pi.prototype.m,pi.prototype.close=pi.prototype.close,ut.NO_ERROR=0,ut.TIMEOUT=8,ut.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",Te.prototype.listen=Te.prototype.N,Rn.prototype.listenOnce=Rn.prototype.O,Rn.prototype.getLastError=Rn.prototype.Oa,Rn.prototype.getLastErrorCode=Rn.prototype.Ea,Rn.prototype.getStatus=Rn.prototype.aa,Rn.prototype.getResponseJson=Rn.prototype.Sa,Rn.prototype.getResponseText=Rn.prototype.fa,Rn.prototype.send=Rn.prototype.da,Rn.prototype.setWithCredentials=Rn.prototype.Ka;var yi=c.createWebChannelTransport=function(){return new fi},_i=c.getStatEventTarget=function(){return it()},bi=c.ErrorCode=ut,wi=c.EventType=ht,Ci=c.Event=tt,Ei=c.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Si=c.FetchXmlHttpFactory=Sn,Ti=c.WebChannel=pt,ki=c.XhrIo=Rn;const xi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ii.UNAUTHENTICATED=new Ii(null),Ii.GOOGLE_CREDENTIALS=new Ii("google-credentials-uid"),Ii.FIRST_PARTY=new Ii("first-party-uid"),Ii.MOCK_USER=new Ii("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ni="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new o.Yd("@firebase/firestore");function Ri(){return Ai.logLevel}function Oi(e,...t){if(Ai.logLevel<=o["in"].DEBUG){const n=t.map(Li);Ai.debug(`Firestore (${Ni}): ${e}`,...n)}}function Pi(e,...t){if(Ai.logLevel<=o["in"].ERROR){const n=t.map(Li);Ai.error(`Firestore (${Ni}): ${e}`,...n)}}function Di(e,...t){if(Ai.logLevel<=o["in"].WARN){const n=t.map(Li);Ai.warn(`Firestore (${Ni}): ${e}`,...n)}}function Li(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e="Unexpected state"){const t=`FIRESTORE (${Ni}) INTERNAL ASSERTION FAILED: `+e;throw Pi(t),new Error(t)}function Mi(e,t){e||Fi()}function qi(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $i extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ii.UNAUTHENTICATED)))}shutdown(){}}class zi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Hi{constructor(e){this.t=e,this.currentUser=Ii.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new Vi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Vi,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Oi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Oi("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Vi)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Oi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Mi("string"==typeof t.accessToken),new Ui(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Mi(null===e||"string"==typeof e),new Ii(e)}}class Wi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Ii.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ki{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Wi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Ii.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qi{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&Oi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Oi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{Oi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):Oi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Mi("string"==typeof e.token),this.T=e.token,new Gi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Yi(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function Xi(e,t){return e<t?-1:e>t?1:0}function Zi(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $i(ji.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $i(ji.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new $i(ji.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $i(ji.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return er.fromMillis(Date.now())}static fromDate(e){return er.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new er(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xi(this.nanoseconds,e.nanoseconds):Xi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.timestamp=e}static fromTimestamp(e){return new tr(e)}static min(){return new tr(new er(0,0))}static max(){return new tr(new er(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t,n){void 0===t?t=0:t>e.length&&Fi(),void 0===n?n=e.length-t:n>e.length-t&&Fi(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===nr.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ir extends nr{construct(e,t,n){return new ir(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new $i(ji.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ir(t)}static emptyPath(){return new ir([])}}const rr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sr extends nr{construct(e,t,n){return new sr(e,t,n)}static isValidIdentifier(e){return rr.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new sr(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new $i(ji.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new $i(ji.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new $i(ji.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new $i(ji.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new sr(t)}static emptyPath(){return new sr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.path=e}static fromPath(e){return new or(ir.fromString(e))}static fromName(e){return new or(ir.fromString(e).popFirst(5))}static empty(){return new or(ir.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ir.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ir.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new or(new ir(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}ar.UNKNOWN_ID=-1;function lr(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=tr.fromTimestamp(1e9===i?new er(n+1,0):new er(n,i));return new ur(r,or.empty(),t)}function cr(e){return new ur(e.readTime,e.key,-1)}class ur{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ur(tr.min(),or.empty(),-1)}static max(){return new ur(tr.max(),or.empty(),-1)}}function hr(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=or.comparator(e.documentKey,t.documentKey),0!==n?n:Xi(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(e){if(e.code!==ji.FAILED_PRECONDITION||e.message!==dr)throw e;Oi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Fi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new mr(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof mr?t:mr.resolve(t)}catch(e){return mr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):mr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):mr.reject(t)}static resolve(e){return new mr(((t,n)=>{t(e)}))}static reject(e){return new mr(((t,n)=>{n(e)}))}static waitFor(e){return new mr(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=mr.resolve(!1);for(const n of e)t=t.next((e=>e?mr.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new mr(((n,i)=>{const r=e.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===r&&n(s)}),(e=>i(e)))}}))}static doWhile(e,t){return new mr(((n,i)=>{const r=()=>{!0===e()?t().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function yr(e){return null==e}function _r(e){return 0===e&&1/e==-1/0}vr.ct=-1;const br=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],wr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Cr=wr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Er(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Sr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Tr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.comparator=e,this.root=t||Ir.EMPTY}insert(e,t){return new kr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ir.BLACK,null,null))}remove(e){return new kr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ir.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ir{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Ir.RED,this.left=null!=i?i:Ir.EMPTY,this.right=null!=r?r:Ir.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new Ir(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ir.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Ir.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ir.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ir.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Fi();if(this.right.isRed())throw Fi();const e=this.left.check();if(e!==this.right.check())throw Fi();return e+(this.isRed()?0:1)}}Ir.EMPTY=null,Ir.RED=!0,Ir.BLACK=!1,Ir.EMPTY=new class{constructor(){this.size=0}get key(){throw Fi()}get value(){throw Fi()}get color(){throw Fi()}get left(){throw Fi()}get right(){throw Fi()}copy(e,t,n,i,r){return this}insert(e,t,n){return new Ir(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{constructor(e){this.comparator=e,this.data=new kr(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ar(this.data.getIterator())}getIteratorFrom(e){return new Ar(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Nr))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Nr(this.comparator);return t.data=e,t}}class Ar{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{constructor(e){this.fields=e,e.sort(sr.comparator)}static empty(){return new Rr([])}unionWith(e){let t=new Nr(sr.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Rr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Or("Invalid base64 string: "+e):e}}(e);return new Pr(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Pr(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pr.EMPTY_BYTE_STRING=new Pr("");const Dr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(e){if(Mi(!!e),"string"==typeof e){let t=0;const n=Dr.exec(e);if(Mi(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Fr(e.seconds),nanos:Fr(e.nanos)}}function Fr(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Mr(e){return"string"==typeof e?Pr.fromBase64String(e):Pr.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function jr(e){const t=e.mapValue.fields.__previous_value__;return qr(t)?jr(t):t}function $r(e){const t=Lr(e.mapValue.fields.__local_write_time__.timestampValue);return new er(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ur{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ur("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ur&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?qr(e)?4:is(e)?9007199254740991:10:Fi()}function Hr(e,t){if(e===t)return!0;const n=zr(e);if(n!==zr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return $r(e).isEqual($r(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Lr(e.timestampValue),i=Lr(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Mr(e.bytesValue).isEqual(Mr(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Fr(e.geoPointValue.latitude)===Fr(t.geoPointValue.latitude)&&Fr(e.geoPointValue.longitude)===Fr(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Fr(e.integerValue)===Fr(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Fr(e.doubleValue),i=Fr(t.doubleValue);return n===i?_r(n)===_r(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Zi(e.arrayValue.values||[],t.arrayValue.values||[],Hr);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Er(n)!==Er(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Hr(n[r],i[r])))return!1;return!0}(e,t);default:return Fi()}}function Wr(e,t){return void 0!==(e.values||[]).find((e=>Hr(e,t)))}function Kr(e,t){if(e===t)return 0;const n=zr(e),i=zr(t);if(n!==i)return Xi(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Fr(e.integerValue||e.doubleValue),i=Fr(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Gr(e.timestampValue,t.timestampValue);case 4:return Gr($r(e),$r(t));case 5:return Xi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Mr(e),i=Mr(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=Xi(n[r],i[r]);if(0!==e)return e}return Xi(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Xi(Fr(e.latitude),Fr(t.latitude));return 0!==n?n:Xi(Fr(e.longitude),Fr(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=Kr(n[r],i[r]);if(e)return e}return Xi(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Br.mapValue&&t===Br.mapValue)return 0;if(e===Br.mapValue)return 1;if(t===Br.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const e=Xi(i[o],s[o]);if(0!==e)return e;const t=Kr(n[i[o]],r[s[o]]);if(0!==t)return t}return Xi(i.length,s.length)}(e.mapValue,t.mapValue);default:throw Fi()}}function Gr(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Xi(e,t);const n=Lr(e),i=Lr(t),r=Xi(n.seconds,i.seconds);return 0!==r?r:Xi(n.nanos,i.nanos)}function Qr(e){return Yr(e)}function Yr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Lr(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Mr(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,or.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Yr(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${Yr(e.fields[r])}`;return n+"}"}(e.mapValue):Fi();var t,n}function Jr(e){return!!e&&"integerValue"in e}function Xr(e){return!!e&&"arrayValue"in e}function Zr(e){return!!e&&"nullValue"in e}function es(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ts(e){return!!e&&"mapValue"in e}function ns(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Sr(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ns(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ns(e.arrayValue.values[n]);return t}return Object.assign({},e)}function is(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(e){this.value=e}static empty(){return new rs({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ts(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ns(t)}setAll(e){let t=sr.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=ns(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());ts(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ts(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Sr(t,((t,n)=>e[t]=n));for(const i of n)delete e[i]}clone(){return new rs(ns(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss{constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ss(e,0,tr.min(),tr.min(),tr.min(),rs.empty(),0)}static newFoundDocument(e,t,n,i){return new ss(e,1,t,tr.min(),n,i,0)}static newNoDocument(e,t){return new ss(e,2,t,tr.min(),tr.min(),rs.empty(),0)}static newUnknownDocument(e,t){return new ss(e,3,t,tr.min(),tr.min(),rs.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(tr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rs.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=tr.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ss&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ss(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.position=e,this.inclusive=t}}function as(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?or.comparator(or.fromName(o.referenceValue),n.key):Kr(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function ls(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Hr(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t="asc"){this.field=e,this.dir=t}}function us(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{}class ds extends hs{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new bs(e,t,n):"array-contains"===t?new Ss(e,n):"in"===t?new Ts(e,n):"not-in"===t?new ks(e,n):"array-contains-any"===t?new xs(e,n):new ds(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ws(e,n):new Cs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Kr(t,this.value)):null!==t&&zr(this.value)===zr(t)&&this.matchesComparison(Kr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Fi()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class fs extends hs{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new fs(e,t)}matches(e){return ps(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ps(e){return"and"===e.op}function ms(e){return gs(e)&&ps(e)}function gs(e){for(const t of e.filters)if(t instanceof fs)return!1;return!0}function vs(e){if(e instanceof ds)return e.field.canonicalString()+e.op.toString()+Qr(e.value);if(ms(e))return e.filters.map((e=>vs(e))).join(",");{const t=e.filters.map((e=>vs(e))).join(",");return`${e.op}(${t})`}}function ys(e,t){return e instanceof ds?function(e,t){return t instanceof ds&&e.op===t.op&&e.field.isEqual(t.field)&&Hr(e.value,t.value)}(e,t):e instanceof fs?function(e,t){return t instanceof fs&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&ys(n,t.filters[i])),!0)}(e,t):void Fi()}function _s(e){return e instanceof ds?function(e){return`${e.field.canonicalString()} ${e.op} ${Qr(e.value)}`}(e):e instanceof fs?function(e){return e.op.toString()+" {"+e.getFilters().map(_s).join(" ,")+"}"}(e):"Filter"}class bs extends ds{constructor(e,t,n){super(e,t,n),this.key=or.fromName(n.referenceValue)}matches(e){const t=or.comparator(e.key,this.key);return this.matchesComparison(t)}}class ws extends ds{constructor(e,t){super(e,"in",t),this.keys=Es("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Cs extends ds{constructor(e,t){super(e,"not-in",t),this.keys=Es("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Es(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>or.fromName(e.referenceValue)))}class Ss extends ds{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xr(t)&&Wr(t.arrayValue,this.value)}}class Ts extends ds{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Wr(this.value.arrayValue,t)}}class ks extends ds{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Wr(this.value.arrayValue,t)}}class xs extends ds{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xr(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Wr(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ft=null}}function Ns(e,t=null,n=[],i=[],r=null,s=null,o=null){return new Is(e,t,n,i,r,s,o)}function As(e){const t=qi(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>vs(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),yr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Qr(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Qr(e))).join(",")),t.ft=e}return t.ft}function Rs(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!us(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ys(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ls(e.startAt,t.startAt)&&ls(e.endAt,t.endAt)}function Os(e){return or.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Ds(e,t,n,i,r,s,o,a){return new Ps(e,t,n,i,r,s,o,a)}function Ls(e){return new Ps(e)}function Fs(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ms(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function qs(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function js(e){return null!==e.collectionGroup}function $s(e){const t=qi(e);if(null===t.dt){t.dt=[];const e=qs(t),n=Ms(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new cs(e)),t.dt.push(new cs(sr.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new cs(sr.keyField(),e))}}}return t.dt}function Vs(e){const t=qi(e);if(!t.wt)if("F"===t.limitType)t.wt=Ns(t.path,t.collectionGroup,$s(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const r of $s(t)){const t="desc"===r.dir?"asc":"desc";e.push(new cs(r.field,t))}const n=t.endAt?new os(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new os(t.startAt.position,t.startAt.inclusive):null;t.wt=Ns(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.wt}function Us(e,t,n){return new Ps(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Bs(e,t){return Rs(Vs(e),Vs(t))&&e.limitType===t.limitType}function zs(e){return`${As(Vs(e))}|lt:${e.limitType}`}function Hs(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>_s(e))).join(", ")}]`),yr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Qr(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Qr(e))).join(",")),`Target(${t})`}(Vs(e))}; limitType=${e.limitType})`}function Ws(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):or.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of $s(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=as(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,$s(e),t))&&!(e.endAt&&!function(e,t,n){const i=as(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,$s(e),t))}(e,t)}function Ks(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Gs(e){return(t,n)=>{let i=!1;for(const r of $s(e)){const e=Qs(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function Qs(e,t,n){const i=e.field.isKeyField()?or.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?Kr(i,r):Fi()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Fi()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,((t,n)=>{for(const[i,r]of n)e(i,r)}))}isEmpty(){return Tr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new kr(or.comparator);function Xs(){return Js}const Zs=new kr(or.comparator);function eo(...e){let t=Zs;for(const n of e)t=t.insert(n.key,n);return t}function to(e){let t=Zs;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function no(){return ro()}function io(){return ro()}function ro(){return new Ys((e=>e.toString()),((e,t)=>e.isEqual(t)))}new kr(or.comparator);const so=new Nr(or.comparator);function oo(...e){let t=so;for(const n of e)t=t.add(n);return t}const ao=new Nr(Xi);function lo(){return ao}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_r(t)?"-0":t}}function uo(e){return{integerValue:""+e}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this._=void 0}}function fo(e,t,n){return e instanceof go?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof vo?yo(e,t):e instanceof _o?bo(e,t):function(e,t){const n=mo(e,t),i=Co(n)+Co(e._t);return Jr(n)&&Jr(e._t)?uo(i):co(e.serializer,i)}(e,t)}function po(e,t,n){return e instanceof vo?yo(e,t):e instanceof _o?bo(e,t):n}function mo(e,t){return e instanceof wo?Jr(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class go extends ho{}class vo extends ho{constructor(e){super(),this.elements=e}}function yo(e,t){const n=Eo(t);for(const i of e.elements)n.some((e=>Hr(e,i)))||n.push(i);return{arrayValue:{values:n}}}class _o extends ho{constructor(e){super(),this.elements=e}}function bo(e,t){let n=Eo(t);for(const i of e.elements)n=n.filter((e=>!Hr(e,i)));return{arrayValue:{values:n}}}class wo extends ho{constructor(e,t){super(),this.serializer=e,this._t=t}}function Co(e){return Fr(e.integerValue||e.doubleValue)}function Eo(e){return Xr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof vo&&t instanceof vo||e instanceof _o&&t instanceof _o?Zi(e.elements,t.elements,Hr):e instanceof wo&&t instanceof wo?Hr(e._t,t._t):e instanceof go&&t instanceof go}(e.transform,t.transform)}class To{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new To}static exists(e){return new To(void 0,e)}static updateTime(e){return new To(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ko(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class xo{}function Io(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Mo(e.key,To.none()):new Oo(e.key,e.data,To.none());{const n=e.data,i=rs.empty();let r=new Nr(sr.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new Po(e.key,i,new Rr(r.toArray()),To.none())}}function No(e,t,n){e instanceof Oo?function(e,t,n){const i=e.value.clone(),r=Lo(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof Po?function(e,t,n){if(!ko(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Lo(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(Do(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ao(e,t,n,i){return e instanceof Oo?function(e,t,n,i){if(!ko(e.precondition,t))return n;const r=e.value.clone(),s=Fo(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof Po?function(e,t,n,i){if(!ko(e.precondition,t))return n;const r=Fo(e.fieldTransforms,i,t),s=t.data;return s.setAll(Do(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return ko(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Ro(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zi(e,t,((e,t)=>So(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Oo extends xo{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Po extends xo{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Do(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Lo(e,t,n){const i=new Map;Mi(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,po(o,a,n[r]))}return i}function Fo(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,fo(e,s,t))}return i}class Mo extends xo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&No(t,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ao(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ao(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=io();return this.mutations.forEach((i=>{const r=e.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;const a=Io(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(tr.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),oo())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,((e,t)=>Ro(e,t)))&&Zi(this.baseMutations,e.baseMutations,((e,t)=>Ro(e,t)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $o{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vo,Uo;function Bo(e){if(void 0===e)return Pi("GRPC error has no .code"),ji.UNKNOWN;switch(e){case Vo.OK:return ji.OK;case Vo.CANCELLED:return ji.CANCELLED;case Vo.UNKNOWN:return ji.UNKNOWN;case Vo.DEADLINE_EXCEEDED:return ji.DEADLINE_EXCEEDED;case Vo.RESOURCE_EXHAUSTED:return ji.RESOURCE_EXHAUSTED;case Vo.INTERNAL:return ji.INTERNAL;case Vo.UNAVAILABLE:return ji.UNAVAILABLE;case Vo.UNAUTHENTICATED:return ji.UNAUTHENTICATED;case Vo.INVALID_ARGUMENT:return ji.INVALID_ARGUMENT;case Vo.NOT_FOUND:return ji.NOT_FOUND;case Vo.ALREADY_EXISTS:return ji.ALREADY_EXISTS;case Vo.PERMISSION_DENIED:return ji.PERMISSION_DENIED;case Vo.FAILED_PRECONDITION:return ji.FAILED_PRECONDITION;case Vo.ABORTED:return ji.ABORTED;case Vo.OUT_OF_RANGE:return ji.OUT_OF_RANGE;case Vo.UNIMPLEMENTED:return ji.UNIMPLEMENTED;case Vo.DATA_LOSS:return ji.DATA_LOSS;default:return Fi()}}(Uo=Vo||(Vo={}))[Uo.OK=0]="OK",Uo[Uo.CANCELLED=1]="CANCELLED",Uo[Uo.UNKNOWN=2]="UNKNOWN",Uo[Uo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Uo[Uo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Uo[Uo.NOT_FOUND=5]="NOT_FOUND",Uo[Uo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Uo[Uo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Uo[Uo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Uo[Uo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Uo[Uo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Uo[Uo.ABORTED=10]="ABORTED",Uo[Uo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Uo[Uo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Uo[Uo.INTERNAL=13]="INTERNAL",Uo[Uo.UNAVAILABLE=14]="UNAVAILABLE",Uo[Uo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ho}static getOrCreateInstance(){return null===Ho&&(Ho=new zo),Ho}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Ho=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Ko.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Wo(tr.min(),i,lo(),Xs(),oo())}}class Ko{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ko(n,t,oo(),oo(),oo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,n,i){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=i}}class Qo{constructor(e,t){this.targetId=e,this.Et=t}}class Yo{constructor(e,t,n=Pr.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Jo{constructor(){this.At=0,this.Rt=ea(),this.vt=Pr.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=oo(),t=oo(),n=oo();return this.Rt.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Fi()}})),new Ko(this.vt,this.bt,e,t,n)}xt(){this.Pt=!1,this.Rt=ea()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Xo{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Xs(),this.qt=Zo(),this.Ut=new Nr(Xi)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,(t=>{const n=this.jt(t);switch(e.state){case 0:this.Wt(t)&&n.Dt(e.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(n.Mt(),n.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Fi()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.Wt(n)&&t(n)}))}Jt(e){var t;const n=e.targetId,i=e.Et.count,r=this.Yt(n);if(r){const s=r.target;if(Os(s))if(0===i){const e=new or(s.path);this.Qt(n,e,ss.newNoDocument(e,tr.min()))}else Mi(1===i);else{const r=this.Zt(n);r!==i&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=zo.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:r,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach(((n,i)=>{const r=this.Yt(i);if(r){if(n.current&&Os(r.target)){const t=new or(r.target.path);null!==this.Lt.get(t)||this.te(i,t)||this.Qt(i,t,ss.newNoDocument(t,e))}n.St&&(t.set(i,n.Ct()),n.xt())}}));let n=oo();this.qt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const i=new Wo(e,t,this.Ut,this.Lt,n);return this.Lt=Xs(),this.qt=Zo(),this.Ut=new Nr(Xi),i}Gt(e,t){if(!this.Wt(e))return;const n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Jo,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Nr(Xi),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=null!==this.Yt(e);return t||Oi("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Jo),this.Ft.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function Zo(){return new kr(or.comparator)}function ea(){return new kr(or.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),na=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),ia=(()=>{const e={and:"AND",or:"OR"};return e})();class ra{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sa(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function oa(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function aa(e){return Mi(!!e),tr.fromTimestamp(function(e){const t=Lr(e);return new er(t.seconds,t.nanos)}(e))}function la(e,t){return function(e){return new ir(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ca(e){const t=ir.fromString(e);return Mi(xa(t)),t}function ua(e,t){const n=ca(t);if(n.get(1)!==e.databaseId.projectId)throw new $i(ji.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new $i(ji.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new or(pa(n))}function ha(e,t){return la(e.databaseId,t)}function da(e){const t=ca(e);return 4===t.length?ir.emptyPath():pa(t)}function fa(e){return new ir(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pa(e){return Mi(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ma(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Fi()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(Mi(void 0===t||"string"==typeof t),Pr.fromBase64String(t||"")):(Mi(void 0===t||t instanceof Uint8Array),Pr.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ji.UNKNOWN:Bo(e.code);return new $i(t,e.message||"")}(o);n=new Yo(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=ua(e,i.document.name),s=aa(i.document.updateTime),o=i.document.createTime?aa(i.document.createTime):tr.min(),a=new rs({mapValue:{fields:i.document.fields}}),l=ss.newFoundDocument(r,s,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Go(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=ua(e,i.document),s=i.readTime?aa(i.readTime):tr.min(),o=ss.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Go([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=ua(e,i.document),s=i.removedTargetIds||[];n=new Go([],s,r,null)}else{if(!("filter"in t))return Fi();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,r=new $o(i),s=e.targetId;n=new Qo(s,r)}}return n}function ga(e,t){return{documents:[ha(e,t.path)]}}function va(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=ha(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ha(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0!==e.length)return ka(fs.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Sa(e.field),direction:wa(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.useProto3Json||yr(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ya(e){let t=da(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Mi(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=ba(e);return t instanceof fs&&ms(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new cs(Ta(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,yr(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new os(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new os(n,t)}(n.endAt)),Ds(t,r,o,s,a,"F",l,c)}function _a(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Fi()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function ba(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ta(e.unaryFilter.field);return ds.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ta(e.unaryFilter.field);return ds.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ta(e.unaryFilter.field);return ds.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ta(e.unaryFilter.field);return ds.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Fi()}}(e):void 0!==e.fieldFilter?function(e){return ds.create(Ta(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Fi()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return fs.create(e.compositeFilter.filters.map((e=>ba(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Fi()}}(e.compositeFilter.op))}(e):Fi()}function wa(e){return ta[e]}function Ca(e){return na[e]}function Ea(e){return ia[e]}function Sa(e){return{fieldPath:e.canonicalString()}}function Ta(e){return sr.fromServerFormat(e.fieldPath)}function ka(e){return e instanceof ds?function(e){if("=="===e.op){if(es(e.value))return{unaryFilter:{field:Sa(e.field),op:"IS_NAN"}};if(Zr(e.value))return{unaryFilter:{field:Sa(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(es(e.value))return{unaryFilter:{field:Sa(e.field),op:"IS_NOT_NAN"}};if(Zr(e.value))return{unaryFilter:{field:Sa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sa(e.field),op:Ca(e.op),value:e.value}}}(e):e instanceof fs?function(e){const t=e.getFilters().map((e=>ka(e)));return 1===t.length?t[0]:{compositeFilter:{op:Ea(e.op),filters:t}}}(e):Fi()}function xa(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,n,i,r=tr.min(),s=tr.min(),o=Pr.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Ia(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ia(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ia(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.se=e}}function Aa(e){const t=ya({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Us(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Fr(e.integerValue));else if("doubleValue"in e){const n=Fr(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),_r(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(Mr(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?is(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):Fi()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const i of Object.keys(n))this.fe(i,t),this.ue(n[i],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const i of n)this.ue(i,t)}_e(e,t){this.ae(t,37),or.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}}Ra.pe=new Ra;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oa{constructor(){this.He=new Pa}addToCollectionParentIndex(e,t){return this.He.add(t),mr.resolve()}getCollectionParents(e,t){return mr.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return mr.resolve()}deleteFieldIndex(e,t){return mr.resolve()}getDocumentsMatchingTarget(e,t){return mr.resolve(null)}getIndexType(e,t){return mr.resolve(0)}getFieldIndexes(e,t){return mr.resolve([])}getNextCollectionGroupToUpdate(e){return mr.resolve(null)}getMinOffset(e,t){return mr.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,t){return mr.resolve(ur.min())}updateCollectionGroup(e,t,n){return mr.resolve()}updateIndexEntries(e,t){return mr.resolve()}}class Pa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Nr(ir.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Nr(ir.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Da{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Da(e,Da.DEFAULT_COLLECTION_PERCENTILE,Da.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Da.DEFAULT_COLLECTION_PERCENTILE=10,Da.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Da.DEFAULT=new Da(41943040,Da.DEFAULT_COLLECTION_PERCENTILE,Da.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Da.DISABLED=new Da(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class La{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new La(0)}static bn(){return new La(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{constructor(){this.changes=new Ys((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ss.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?mr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ao(n.mutation,e,Rr.empty(),er.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,oo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=oo()){const i=no();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=eo();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=no();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,oo())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let r=Xs();const s=ro(),o=ro();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof Po)?r=r.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Ao(o.mutation,t,o.mutation.getFieldMask(),er.now())):s.set(t.key,Rr.empty())})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ma(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=ro();let i=new kr(((e,t)=>e-t)),r=oo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Rr.empty();o=r.applyToLocalView(s,o),n.set(e,o);const a=(i.get(r.batchId)||oo()).add(e);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=io();l.forEach((e=>{if(!r.has(e)){const i=Io(t.get(e),n.get(e));null!==i&&c.set(e,i),r=r.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return mr.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return or.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):js(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):mr.resolve(no());let o=-1,a=r;return s.next((t=>mr.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?mr.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,oo()))).next((e=>({batchId:o,changes:to(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new or(t)).next((e=>{let t=eo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let r=eo();return this.indexManager.getCollectionParents(e,i).next((s=>mr.forEach(s,(s=>{const o=function(e,t){return new Ps(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,ss.newInvalidDocument(i)))}));let n=eo();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Ao(s.mutation,r,Rr.empty(),er.now()),Ws(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return mr.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:aa(n.createTime)}),mr.resolve()}getNamedQuery(e,t){return mr.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:Aa(e.bundledQuery),readTime:aa(e.readTime)}}(t)),mr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.overlays=new kr(or.comparator),this.ts=new Map}getOverlay(e,t){return mr.resolve(this.overlays.get(t))}getOverlays(e,t){const n=no();return mr.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.re(e,t,i)})),mr.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.ts.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),mr.resolve()}getOverlaysForCollection(e,t,n){const i=no(),r=t.length+1,s=new or(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return mr.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new kr(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=no(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=no(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=i)break;return mr.resolve(o)}re(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.ts.get(i.largestBatchId).delete(n.key);this.ts.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new jo(t,n));let r=this.ts.get(t);void 0===r&&(r=oo(),this.ts.set(t,r)),this.ts.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.es=new Nr(Ua.ns),this.ss=new Nr(Ua.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const n=new Ua(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new Ua(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new or(new ir([])),n=new Ua(t,e),i=new Ua(t,e+1),r=[];return this.ss.forEachInRange([n,i],(e=>{this.us(e),r.push(e.key)})),r}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new or(new ir([])),n=new Ua(t,e),i=new Ua(t,e+1);let r=oo();return this.ss.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new Ua(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ua{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return or.comparator(e.key,t.key)||Xi(e.ds,t.ds)}static rs(e,t){return Xi(e.ds,t.ds)||or.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new Nr(Ua.ns)}checkEmpty(e){return mr.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new qo(r,t,n,i);this.mutationQueue.push(s);for(const o of i)this._s=this._s.add(new Ua(o.key,r)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return mr.resolve(s)}lookupMutationBatch(e,t){return mr.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ys(n),r=i<0?0:i;return mr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return mr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return mr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ua(t,0),i=new Ua(t,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([n,i],(e=>{const t=this.gs(e.ds);r.push(t)})),mr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Nr(Xi);return t.forEach((e=>{const t=new Ua(e,0),i=new Ua(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,i],(e=>{n=n.add(e.ds)}))})),mr.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;or.isDocumentKey(r)||(r=r.child(""));const s=new Ua(new or(r),0);let o=new Nr(Xi);return this._s.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.ds)),!0)}),s),mr.resolve(this.ps(o))}ps(e){const t=[];return e.forEach((e=>{const n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Mi(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return mr.forEach(t.mutations,(i=>{const r=new Ua(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){const n=new Ua(t,0),i=this._s.firstAfterOrEqual(n);return mr.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,mr.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.Ts=e,this.docs=new kr(or.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return mr.resolve(n?n.document.mutableCopy():ss.newInvalidDocument(t))}getEntries(e,t){let n=Xs();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ss.newInvalidDocument(e))})),mr.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=Xs();const s=t.path,o=new or(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||hr(cr(o),n)<=0||(i.has(o.key)||Ws(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return mr.resolve(r)}getAllFromCollectionGroup(e,t,n,i){Fi()}Es(e,t){return mr.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ha(this)}getSize(e){return mr.resolve(this.size)}}class Ha extends Fa{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(n)})),mr.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.persistence=e,this.As=new Ys((e=>As(e)),Rs),this.lastRemoteSnapshotVersion=tr.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Va,this.targetCount=0,this.bs=La.vn()}forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),mr.resolve()}getLastRemoteSnapshotVersion(e){return mr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return mr.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),mr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),mr.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new La(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,mr.resolve()}updateTargetData(e,t){return this.Sn(t),mr.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,mr.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.As.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),mr.waitFor(r).next((()=>i))}getTargetCount(e){return mr.resolve(this.targetCount)}getTargetData(e,t){const n=this.As.get(t)||null;return mr.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),mr.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),mr.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),mr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.vs.fs(t);return mr.resolve(n)}containsKey(e,t){return mr.resolve(this.vs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new vr(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Wa(this),this.indexManager=new Oa,this.remoteDocumentCache=function(e){return new za(e)}((e=>this.referenceDelegate.Cs(e))),this.serializer=new Na(t),this.xs=new ja(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $a,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new Ba(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){Oi("MemoryPersistence","Starting transaction:",e);const i=new Ga(this.Vs.next());return this.referenceDelegate.Ns(),n(i).next((e=>this.referenceDelegate.ks(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Os(e,t){return mr.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class Ga extends fr{constructor(e){super(),this.currentSequenceNumber=e}}class Qa{constructor(e){this.persistence=e,this.$s=new Va,this.Ms=null}static Fs(e){return new Qa(e)}get Bs(){if(this.Ms)return this.Ms;throw Fi()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),mr.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),mr.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),mr.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mr.forEach(this.Bs,(n=>{const i=or.fromPath(n);return this.Ls(e,i).next((e=>{e||t.removeEntry(i,tr.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return mr.or([()=>mr.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=i}static Di(e,t){let n=oo(),i=oo();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ya(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,i){return this.Ni(e,t).next((r=>r||this.ki(e,t,i,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if(Fs(t))return mr.resolve(null);let n=Vs(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Us(t,null,"F"),n=Vs(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const r=oo(...i);return this.xi.getDocuments(e,r).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.$i(t,i);return this.Mi(t,s,r,n.readTime)?this.Ni(e,Us(t,null,"F")):this.Fi(e,s,t,n)}))))})))))}ki(e,t,n,i){return Fs(t)||i.isEqual(tr.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((r=>{const s=this.$i(t,r);return this.Mi(t,s,n,i)?this.Oi(e,t):(Ri()<=o["in"].DEBUG&&Oi("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hs(t)),this.Fi(e,s,t,lr(i,-1)))}))}$i(e,t){let n=new Nr(Gs(e));return t.forEach(((t,i)=>{Ws(e,i)&&(n=n.add(i))})),n}Mi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,t){return Ri()<=o["in"].DEBUG&&Oi("QueryEngine","Using full collection scan to execute query:",Hs(t)),this.xi.getDocumentsMatchingQuery(e,t,ur.min())}Fi(e,t,n,i){return this.xi.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,n,i){this.persistence=e,this.Bi=t,this.serializer=i,this.Li=new kr(Xi),this.qi=new Ys((e=>As(e)),Rs),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qa(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}}function Za(e,t,n,i){return new Xa(e,t,n,i)}async function el(e,t){const n=qi(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((r=>(i=r,n.Gi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],s=[];let o=oo();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Qi:e,removedBatchIds:r,addedBatchIds:s})))}))}))}function tl(e){const t=qi(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function nl(e,t){const n=qi(e),i=t.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const o=[];t.targetChanges.forEach(((s,a)=>{const l=r.get(a);if(!l)return;o.push(n.Ds.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(e,s.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?c=c.withResumeToken(Pr.EMPTY_BYTE_STRING,tr.min()).withLastLimboFreeSnapshotVersion(tr.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,i)),r=r.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,s)&&o.push(n.Ds.updateTargetData(e,c))}));let a=Xs(),l=oo();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(il(e,s,t.documentUpdates).next((e=>{a=e.zi,l=e.ji}))),!i.isEqual(tr.min())){const t=n.Ds.getLastRemoteSnapshotVersion(e).next((t=>n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return mr.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Li=r,e)))}function il(e,t,n){let i=oo(),r=oo();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Xs();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(tr.min())?(t.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),i=i.insert(n,s)):Oi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{zi:i,ji:r}}))}function rl(e,t){const n=qi(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Ds.getTargetData(e,t).next((r=>r?(i=r,mr.resolve(i)):n.Ds.allocateTargetId(e).next((r=>(i=new Ia(t,r,0,e.currentSequenceNumber),n.Ds.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Li.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function sl(e,t,n){const i=qi(e),r=i.Li.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(e=>i.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!gr(e))throw e;Oi("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Li=i.Li.remove(t),i.qi.delete(r.target)}function ol(e,t,n){const i=qi(e);let r=tr.min(),s=oo();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=qi(e),r=i.qi.get(n);return void 0!==r?mr.resolve(i.Li.get(r)):i.Ds.getTargetData(t,n)}(i,e,Vs(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>i.Bi.getDocumentsMatchingQuery(e,t,n?r:tr.min(),n?s:oo()))).next((e=>(al(i,Ks(t),e),{documents:e,Wi:s})))))}function al(e,t,n){let i=e.Ui.get(t)||tr.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Ui.set(t,i)}class ll{constructor(){this.activeTargetIds=lo()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cl{constructor(){this.Br=new ll,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new ll,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Oi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){Oi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl=null;function fl(){return null===dl?dl=268435456+Math.round(2147483648*Math.random()):dl++,"0x"+dl.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const pl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="WebChannelConnection";class vl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,n,i,r){const s=fl(),o=this.ao(e,t);Oi("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.ho(a,i,r),this.lo(e,o,a,n).then((t=>(Oi("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Di("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}fo(e,t,n,i,r,s){return this.co(e,t,n,i,r)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ni,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=pl[e];return`${this.ro}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,i){const r=fl();return new Promise(((s,o)=>{const a=new ki;a.setWithCredentials(!0),a.listenOnce(wi.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case bi.NO_ERROR:const t=a.getResponseJson();Oi(gl,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case bi.TIMEOUT:Oi(gl,`RPC '${e}' ${r} timed out`),o(new $i(ji.DEADLINE_EXCEEDED,"Request time out"));break;case bi.HTTP_ERROR:const n=a.getStatus();if(Oi(gl,`RPC '${e}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ji).indexOf(t)>=0?t:ji.UNKNOWN}(t.status);o(new $i(e,t.message))}else o(new $i(ji.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $i(ji.UNAVAILABLE,"Connection failed."));break;default:Fi()}}finally{Oi(gl,`RPC '${e}' ${r} completed.`)}}));const l=JSON.stringify(i);Oi(gl,`RPC '${e}' ${r} sending request:`,i),a.send(t,"POST",l,n,15)}))}wo(e,t,n){const i=fl(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=yi(),o=_i(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Si({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=r.join("");Oi(gl,`Creating RPC '${e}' stream ${i}: ${l}`,a);const c=s.createWebChannel(l,a);let u=!1,h=!1;const d=new ml({Wr:t=>{h?Oi(gl,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(u||(Oi(gl,`Opening RPC '${e}' stream ${i} transport.`),c.open(),u=!0),Oi(gl,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},Hr:()=>c.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(c,Ti.EventType.OPEN,(()=>{h||Oi(gl,`RPC '${e}' stream ${i} transport opened.`)})),f(c,Ti.EventType.CLOSE,(()=>{h||(h=!0,Oi(gl,`RPC '${e}' stream ${i} transport closed`),d.so())})),f(c,Ti.EventType.ERROR,(t=>{h||(h=!0,Di(gl,`RPC '${e}' stream ${i} transport errored:`,t),d.so(new $i(ji.UNAVAILABLE,"The operation could not be completed")))})),f(c,Ti.EventType.MESSAGE,(t=>{var n;if(!h){const r=t.data[0];Mi(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Oi(gl,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=Vo[e];if(void 0!==t)return Bo(t)}(t),r=o.message;void 0===n&&(n=ji.INTERNAL,r="Unknown error status: "+t+" with message "+o.message),h=!0,d.so(new $i(n,r)),c.close()}else Oi(gl,`RPC '${e}' stream ${i} received:`,r),d.io(r)}})),f(o,Ci.STAT_EVENT,(t=>{t.stat===Ei.PROXY?Oi(gl,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===Ei.NOPROXY&&Oi(gl,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(e){return new ra(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,t-n);i>0&&Oi("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,n,i,r,s,o,a){this.Ws=e,this.bo=n,this.Po=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new bl(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===ji.RESOURCE_EXHAUSTED?(Pi(t.toString()),Pi("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===ji.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{const e=new $i(ji.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return Oi("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(Oi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cl extends wl{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=ma(this.serializer,e),n=function(e){if(!("targetChange"in e))return tr.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?tr.min():t.readTime?aa(t.readTime):tr.min()}(e);return this.listener.zo(t,n)}jo(e){const t={};t.database=fa(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;return n=Os(i)?{documents:ga(e,i)}:{query:va(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=oa(e,t.resumeToken):t.snapshotVersion.compareTo(tr.min())>0&&(n.readTime=sa(e,t.snapshotVersion.toTimestamp())),n}(this.serializer,e);const n=_a(this.serializer,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=fa(this.serializer),t.removeTarget=e,this.Fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class El extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new $i(ji.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.co(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ji.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new $i(ji.UNKNOWN,e.toString())}))}fo(e,t,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.fo(e,t,n,r,s,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ji.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new $i(ji.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}}class Sl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Pi(t),this.ru=!1):Oi("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr((e=>{n.enqueueAndForget((async()=>{Dl(this)&&(Oi("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=qi(e);t.du.add(4),await xl(t),t.mu.set("Unknown"),t.du.delete(4),await kl(t)}(this))}))})),this.mu=new Sl(n,i)}}async function kl(e){if(Dl(e))for(const t of e.wu)await t(!0)}async function xl(e){for(const t of e.wu)await t(!1)}function Il(e,t){const n=qi(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Pl(n)?Ol(n):Ul(n).No()&&Al(n,t))}function Nl(e,t){const n=qi(e),i=Ul(n);n.fu.delete(t),i.No()&&Rl(n,t),0===n.fu.size&&(i.No()?i.$o():Dl(n)&&n.mu.set("Unknown"))}function Al(e,t){e.gu.Ot(t.targetId),Ul(e).jo(t)}function Rl(e,t){e.gu.Ot(t),Ul(e).Wo(t)}function Ol(e){e.gu=new Xo({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),Ul(e).start(),e.mu.ou()}function Pl(e){return Dl(e)&&!Ul(e).xo()&&e.fu.size>0}function Dl(e){return 0===qi(e).du.size}function Ll(e){e.gu=void 0}async function Fl(e){e.fu.forEach(((t,n)=>{Al(e,t)}))}async function Ml(e,t){Ll(e),Pl(e)?(e.mu.au(t),Ol(e)):e.mu.set("Unknown")}async function ql(e,t,n){if(e.mu.set("Online"),t instanceof Yo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.fu.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.fu.delete(i),e.gu.removeTarget(i))}(e,t)}catch(n){Oi("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await jl(e,n)}else if(t instanceof Go?e.gu.Kt(t):t instanceof Qo?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(tr.min()))try{const t=await tl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.gu.Xt(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.fu.get(i);r&&e.fu.set(i,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.fu.get(t);if(!n)return;e.fu.set(t,n.withResumeToken(Pr.EMPTY_BYTE_STRING,n.snapshotVersion)),Rl(e,t);const i=new Ia(n.target,t,1,n.sequenceNumber);Al(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Oi("RemoteStore","Failed to raise snapshot:",t),await jl(e,t)}}async function jl(e,t,n){if(!gr(t))throw t;e.du.add(1),await xl(e),e.mu.set("Offline"),n||(n=()=>tl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Oi("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await kl(e)}))}async function $l(e,t){const n=qi(e);n.asyncQueue.verifyOperationInProgress(),Oi("RemoteStore","RemoteStore received new credentials");const i=Dl(n);n.du.add(3),await xl(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await kl(n)}async function Vl(e,t){const n=qi(e);t?(n.du.delete(2),await kl(n)):t||(n.du.add(2),await xl(n),n.mu.set("Unknown"))}function Ul(e){return e.yu||(e.yu=function(e,t,n){const i=qi(e);return i.nu(),new Cl(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Jr:Fl.bind(null,e),Zr:Ml.bind(null,e),zo:ql.bind(null,e)}),e.wu.push((async t=>{t?(e.yu.Oo(),Pl(e)?Ol(e):e.mu.set("Unknown")):(await e.yu.stop(),Ll(e))}))),e.yu}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bl{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new Bl(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new $i(ji.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zl(e,t){if(Pi("AsyncQueue",`${t}: ${e}`),gr(e))return new $i(ji.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this.comparator=e?(t,n)=>e(t,n)||or.comparator(t.key,n.key):(e,t)=>or.comparator(e.key,t.key),this.keyedMap=eo(),this.sortedSet=new kr(this.comparator)}static emptySet(e){return new Hl(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hl))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Hl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.Iu=new kr(or.comparator)}track(e){const t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):Fi():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Kl{constructor(e,t,n,i,r,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,i,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Kl(e,t,Hl.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.Eu=void 0,this.listeners=[]}}class Ql{constructor(){this.queries=new Ys((e=>zs(e)),Bs),this.onlineState="Unknown",this.Au=new Set}}async function Yl(e,t){const n=qi(e),i=t.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Gl),r)try{s.Eu=await n.onListen(i)}catch(e){const n=zl(e,`Initialization of query '${Hs(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.listeners.push(t),t.Ru(n.onlineState),s.Eu&&t.vu(s.Eu)&&ec(n)}async function Jl(e,t){const n=qi(e),i=t.query;let r=!1;const s=n.queries.get(i);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Xl(e,t){const n=qi(e);let i=!1;for(const r of t){const e=r.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.vu(r)&&(i=!0);t.Eu=r}}i&&ec(n)}function Zl(e,t,n){const i=qi(e),r=i.queries.get(t);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(t)}function ec(e){e.Au.forEach((e=>{e.next()}))}class tc{constructor(e,t,n){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Kl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.xu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=Kl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nc{constructor(e){this.key=e}}class ic{constructor(e){this.key=e}}class rc{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=oo(),this.mutatedKeys=oo(),this.Ku=Gs(e),this.Gu=new Hl(this.Ku)}get Qu(){return this.Lu}zu(e,t){const n=t?t.ju:new Wl,i=t?t.Gu:this.Gu;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const c=i.get(e),u=Ws(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Wu(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ku(u,a)>0||l&&this.Ku(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Gu:s,ju:n,Mi:o,mutatedKeys:r}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Fi()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const s=t?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==r.length||a?{snapshot:new Kl(this.query,e.Gu,i,r,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Wl,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=oo(),this.Gu.forEach((e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))}));const t=[];return e.forEach((e=>{this.Uu.has(e)||t.push(new ic(e))})),this.Uu.forEach((n=>{e.has(n)||t.push(new nc(n))})),t}Xu(e){this.Lu=e.Wi,this.Uu=oo();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return Kl.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class sc{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class oc{constructor(e){this.key=e,this.ec=!1}}class ac{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Ys((e=>zs(e)),Bs),this.ic=new Map,this.rc=new Set,this.oc=new kr(or.comparator),this.uc=new Map,this.cc=new Va,this.ac={},this.hc=new Map,this.lc=La.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function lc(e,t){const n=Cc(e);let i,r;const s=n.sc.get(t);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const e=await rl(n.localStore,Vs(t));n.isPrimaryClient&&Il(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,r=await cc(n,t,i,"current"===s,e.resumeToken)}return r}async function cc(e,t,n,i,r){e.dc=(t,n,i)=>async function(e,t,n,i){let r=t.view.zu(n);r.Mi&&(r=await ol(e.localStore,t.query,!1).then((({documents:e})=>t.view.zu(e,r))));const s=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s);return gc(e,t.targetId,o.Yu),o.snapshot}(e,t,n,i);const s=await ol(e.localStore,t,!0),o=new rc(t,s.Wi),a=o.zu(s.documents),l=Ko.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),c=o.applyChanges(a,e.isPrimaryClient,l);gc(e,n,c.Yu);const u=new sc(t,n,o);return e.sc.set(t,u),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),c.snapshot}async function uc(e,t){const n=qi(e),i=n.sc.get(t),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter((e=>!Bs(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await sl(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Nl(n.remoteStore,i.targetId),pc(n,i.targetId)})).catch(pr)):(pc(n,i.targetId),await sl(n.localStore,i.targetId,!0))}async function hc(e,t){const n=qi(e);try{const e=await nl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.uc.get(t);i&&(Mi(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.ec=!0:e.modifiedDocuments.size>0?Mi(i.ec):e.removedDocuments.size>0&&(Mi(i.ec),i.ec=!1))})),await _c(n,e,t)}catch(e){await pr(e)}}function dc(e,t,n){const i=qi(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.sc.forEach(((n,i)=>{const r=i.view.Ru(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=qi(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const r of n.listeners)r.Ru(t)&&(i=!0)})),i&&ec(n)}(i.eventManager,t),e.length&&i.nc.zo(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function fc(e,t,n){const i=qi(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.uc.get(t),s=r&&r.key;if(s){let e=new kr(or.comparator);e=e.insert(s,ss.newNoDocument(s,tr.min()));const n=oo().add(s),r=new Wo(tr.min(),new Map,new Nr(Xi),e,n);await hc(i,r),i.oc=i.oc.remove(s),i.uc.delete(t),yc(i)}else await sl(i.localStore,t,!1).then((()=>pc(i,t,n))).catch(pr)}function pc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.ic.get(t))e.sc.delete(i),n&&e.nc.wc(i,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((t=>{e.cc.containsKey(t)||mc(e,t)}))}function mc(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(Nl(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),yc(e))}function gc(e,t,n){for(const i of n)i instanceof nc?(e.cc.addReference(i.key,t),vc(e,i)):i instanceof ic?(Oi("SyncEngine","Document no longer in limbo: "+i.key),e.cc.removeReference(i.key,t),e.cc.containsKey(i.key)||mc(e,i.key)):Fi()}function vc(e,t){const n=t.key,i=n.path.canonicalString();e.oc.get(n)||e.rc.has(i)||(Oi("SyncEngine","New document in limbo: "+n),e.rc.add(i),yc(e))}function yc(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new or(ir.fromString(t)),i=e.lc.next();e.uc.set(i,new oc(n)),e.oc=e.oc.insert(n,i),Il(e.remoteStore,new Ia(Vs(Ls(n.path)),i,2,vr.ct))}}async function _c(e,t,n){const i=qi(e),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach(((e,a)=>{o.push(i.dc(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){r.push(e);const t=Ya.Di(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.nc.zo(r),await async function(e,t){const n=qi(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>mr.forEach(t,(t=>mr.forEach(t.Vi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>mr.forEach(t.Si,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!gr(e))throw e;Oi("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Li.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Li=n.Li.insert(e,r)}}}(i.localStore,s))}async function bc(e,t){const n=qi(e);if(!n.currentUser.isEqual(t)){Oi("SyncEngine","User change. New user:",t.toKey());const e=await el(n.localStore,t);n.currentUser=t,function(e,t){e.hc.forEach((e=>{e.forEach((e=>{e.reject(new $i(ji.CANCELLED,t))}))})),e.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await _c(n,e.Qi)}}function wc(e,t){const n=qi(e),i=n.uc.get(t);if(i&&i.ec)return oo().add(i.key);{let e=oo();const i=n.ic.get(t);if(!i)return e;for(const t of i){const i=n.sc.get(t);e=e.unionWith(i.view.Qu)}return e}}function Cc(e){const t=qi(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=hc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=wc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fc.bind(null,t),t.nc.zo=Xl.bind(null,t.eventManager),t.nc.wc=Zl.bind(null,t.eventManager),t}class Ec{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_l(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Za(this.persistence,new Ja,e.initialUser,this.serializer)}createPersistence(e){return new Ka(Qa.Fs,this.serializer)}createSharedClientState(e){return new cl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>dc(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=bc.bind(null,this.syncEngine),await Vl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ql}createDatastore(e){const t=_l(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new vl(i));var i;return function(e,t,n,i){return new El(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>dc(this.syncEngine,e,0),s=hl.D()?new hl:new ul,new Tl(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new ac(e,t,n,i,r,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=qi(e);Oi("RemoteStore","RemoteStore shutting down."),t.du.add(5),await xl(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Pi("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ii.UNAUTHENTICATED,this.clientId=Ji.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Oi("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Oi("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $i(ji.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=zl(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function xc(e,t){e.asyncQueue.verifyOperationInProgress(),Oi("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await el(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Ic(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ac(e);Oi("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>$l(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>$l(t.remoteStore,n))),e._onlineComponents=t}function Nc(e){return"FirebaseError"===e.name?e.code===ji.FAILED_PRECONDITION||e.code===ji.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Ac(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Oi("FirestoreClient","Using user provided OfflineComponentProvider");try{await xc(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Nc(n))throw n;Di("Error using user provided cache. Falling back to memory cache: "+n),await xc(e,new Ec)}}else Oi("FirestoreClient","Using default OfflineComponentProvider"),await xc(e,new Ec);return e._offlineComponents}async function Rc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Oi("FirestoreClient","Using user provided OnlineComponentProvider"),await Ic(e,e._uninitializedComponentsProvider._online)):(Oi("FirestoreClient","Using default OnlineComponentProvider"),await Ic(e,new Sc))),e._onlineComponents}async function Oc(e){const t=await Rc(e),n=t.eventManager;return n.onListen=lc.bind(null,t.syncEngine),n.onUnlisten=uc.bind(null,t.syncEngine),n}function Pc(e,t,n={}){const i=new Vi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new Tc({next:n=>{t.enqueueAndForget((()=>Jl(e,o))),n.fromCache&&"server"===i.source?r.reject(new $i(ji.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new tc(n,s,{includeMetadataChanges:!0,xu:!0});return Yl(e,o)}(await Oc(e),e.asyncQueue,t,n,i))),i.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(e,t,n){if(!n)throw new $i(ji.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Fc(e,t,n,i){if(!0===t&&!0===i)throw new $i(ji.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Mc(e){if(or.isDocumentKey(e))throw new $i(ji.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function qc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Fi()}function jc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new $i(ji.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qc(e);throw new $i(ji.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $c{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new $i(ji.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new $i(ji.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Fc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $c({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $i(ji.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new $i(ji.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $c(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Bi;switch(e.type){case"firstParty":return new Ki(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new $i(ji.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Dc.get(e);t&&(Oi("ComponentProvider","Removing Datastore"),Dc.delete(e),t.terminate())}(this),Promise.resolve()}}function Uc(e,t,n,i={}){var r;const s=(e=jc(e,Vc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Di("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=Ii.MOCK_USER;else{t=(0,a.Sg)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new $i(ji.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ii(s)}e._authCredentials=new zi(new Ui(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bc(this.firestore,e,this._key)}}class zc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new zc(this.firestore,e,this._query)}}class Hc extends zc{constructor(e,t,n){super(e,t,Ls(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bc(this.firestore,null,new or(e))}withConverter(e){return new Hc(this.firestore,e,this._path)}}function Wc(e,t,...n){if(e=(0,a.m9)(e),Lc("collection","path",t),e instanceof Vc){const i=ir.fromString(t,...n);return Mc(i),new Hc(e,null,i)}{if(!(e instanceof Bc||e instanceof Hc))throw new $i(ji.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(ir.fromString(t,...n));return Mc(i),new Hc(e.firestore,null,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kc{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new bl(this,"async_queue_retry"),this.qc=()=>{const e=yl();e&&Oi("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=yl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=yl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new Vi;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(C){if(!gr(C))throw C;Oi("AsyncQueue","Operation failed with retryable error: "+C)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Pi("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const i=Bl.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(i),i}Uc(){this.Mc&&Fi()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}class Gc extends Vc{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Kc,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jc(this),this._firestoreClient.terminate()}}function Qc(e,t){const n="object"==typeof e?e:(0,r.Mq)(),i="string"==typeof e?e:t||"(default)",s=(0,r.qX)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const e=(0,a.P0)("firestore");e&&Uc(s,...e)}return s}function Yc(e){return e._firestoreClient||Jc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Jc(e){var t,n,i;const r=e._freezeSettings(),s=function(e,t,n,i){return new Vr(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new kc(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xc(Pr.fromBase64String(e))}catch(e){throw new $i(ji.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Xc(Pr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new $i(ji.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $i(ji.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $i(ji.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xi(this._lat,e._lat)||Xi(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=new RegExp("[~\\*/\\[\\]]");function nu(e,t,n){if(t.search(tu)>=0)throw iu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Zc(...t.split("."))._internalPath}catch(i){throw iu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function iu(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new $i(ji.INVALID_ARGUMENT,a+e+l)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Bc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new su(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ou("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class su extends ru{data(){return super.data()}}function ou(e,t){return"string"==typeof t?nu(e,t):t instanceof Zc?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new $i(ji.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lu{convertValue(e,t="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fr(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Fi()}}convertObject(e,t){const n={};return Sr(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new eu(Fr(e.latitude),Fr(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=jr(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp($r(e));default:return null}}convertTimestamp(e){const t=Lr(e);return new er(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ir.fromString(e);Mi(xa(n));const i=new Ur(n.get(1),n.get(3)),r=new or(n.popFirst(5));return i.isEqual(t)||Pi(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uu extends ru{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ou("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class hu extends uu{data(e={}){return super.data(e)}}class du{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new cu(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new hu(this._firestore,this._userDataWriter,n.key,n,new cu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $i(ji.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new hu(e._firestore,e._userDataWriter,n.doc.key,n.doc,new cu(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new hu(e._firestore,e._userDataWriter,t.doc.key,t.doc,new cu(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:fu(t.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function fu(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Fi()}}class pu extends lu{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Bc(this.firestore,null,t)}}function mu(e){e=jc(e,zc);const t=jc(e.firestore,Gc),n=Yc(t),i=new pu(t);return au(e._query),Pc(n,e._query).then((n=>new du(t,i,e,n)))}!function(e,t=!0){!function(e){Ni=e}(r.Jn),(0,r.Xd)(new s.wA("firestore",((e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new Gc(new Hi(e.getProvider("auth-internal")),new Qi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new $i(ji.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(xi,"3.10.0",e),(0,r.KN)(xi,"3.10.0","esm2017")}()}}]);