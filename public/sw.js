if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/HwEssUtvVaT_QFORNdv4W/_buildManifest.js",revision:"ae1f7a0955017899c518cffb42c31b58"},{url:"/_next/static/HwEssUtvVaT_QFORNdv4W/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/HwEssUtvVaT_QFORNdv4W/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/16-77a70713850f4283.js",revision:"77a70713850f4283"},{url:"/_next/static/chunks/441-a995c4ea79d557a7.js",revision:"a995c4ea79d557a7"},{url:"/_next/static/chunks/705-f67cd1096db0681d.js",revision:"f67cd1096db0681d"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"fc97f3f1282ce3ed"},{url:"/_next/static/chunks/main-1c75b2a932ea3332.js",revision:"1c75b2a932ea3332"},{url:"/_next/static/chunks/pages/404-4848e89e40fa36b5.js",revision:"4848e89e40fa36b5"},{url:"/_next/static/chunks/pages/_app-d40754cbdb263a4e.js",revision:"d40754cbdb263a4e"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/account-ac29a6a47831c85f.js",revision:"ac29a6a47831c85f"},{url:"/_next/static/chunks/pages/apiary-e20e9e8f5ba20496.js",revision:"e20e9e8f5ba20496"},{url:"/_next/static/chunks/pages/apiary/add-d0d5c354bed98906.js",revision:"d0d5c354bed98906"},{url:"/_next/static/chunks/pages/apiary/edit/%5Bid%5D-c41d191c36c3a2f7.js",revision:"c41d191c36c3a2f7"},{url:"/_next/static/chunks/pages/auth/login-883afb13bf1f3980.js",revision:"883afb13bf1f3980"},{url:"/_next/static/chunks/pages/auth/password/reset-b8901e3e7623c36c.js",revision:"b8901e3e7623c36c"},{url:"/_next/static/chunks/pages/employee-b0fbc81e52f65a72.js",revision:"b0fbc81e52f65a72"},{url:"/_next/static/chunks/pages/employee/add-0e4a994f2219379e.js",revision:"0e4a994f2219379e"},{url:"/_next/static/chunks/pages/employee/edit/%5Bid%5D-ef33e0685c4df472.js",revision:"ef33e0685c4df472"},{url:"/_next/static/chunks/pages/home-176e96df0252437a.js",revision:"176e96df0252437a"},{url:"/_next/static/chunks/pages/index-e271aaf54837b333.js",revision:"e271aaf54837b333"},{url:"/_next/static/chunks/pages/packing-370873e32843b175.js",revision:"370873e32843b175"},{url:"/_next/static/chunks/pages/product-1249f5c40e670928.js",revision:"1249f5c40e670928"},{url:"/_next/static/chunks/pages/product/add-17953d3f22bc7ce3.js",revision:"17953d3f22bc7ce3"},{url:"/_next/static/chunks/pages/product/edit/%5Bid%5D-3b3fe31555255eee.js",revision:"3b3fe31555255eee"},{url:"/_next/static/chunks/pages/raw-material-95c799dca9a9e82f.js",revision:"95c799dca9a9e82f"},{url:"/_next/static/chunks/pages/raw-material-batch-a18e3d66d9c4777b.js",revision:"a18e3d66d9c4777b"},{url:"/_next/static/chunks/pages/raw-material-batch/add-b88cd9148d85c6e3.js",revision:"b88cd9148d85c6e3"},{url:"/_next/static/chunks/pages/raw-material/add-a53575b4496f5984.js",revision:"a53575b4496f5984"},{url:"/_next/static/chunks/pages/raw-material/edit/%5Bid%5D-d2eba88cae7be349.js",revision:"d2eba88cae7be349"},{url:"/_next/static/chunks/pages/warehouse-0789cf3c523445e5.js",revision:"0789cf3c523445e5"},{url:"/_next/static/chunks/pages/warehouse/add-2634bfe6bc54bae8.js",revision:"2634bfe6bc54bae8"},{url:"/_next/static/chunks/pages/warehouse/edit/%5Bid%5D-9f64f721fd47d5ac.js",revision:"9f64f721fd47d5ac"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-2e51481b1d484a05.js",revision:"2e51481b1d484a05"},{url:"/_next/static/css/a0ad3e4b9aaf9c22.css",revision:"a0ad3e4b9aaf9c22"},{url:"/favicon.ico",revision:"b1d0cb7dc69947ccaade6a6889efbe97"},{url:"/icon-192x192.png",revision:"e2190c816b8e5b7b596f0873a642b142"},{url:"/icon-256x256.png",revision:"2bd04fbaff2be5a1fe53b5e9e1d59d20"},{url:"/icon-384x384.png",revision:"6e843e244d73fad2a868838f2884fc1b"},{url:"/icon-512x512.png",revision:"ffe855bbf6b4868b7ce6888b3def69b6"},{url:"/logo.png",revision:"7767a77f64717167322a2770eedb7832"},{url:"/manifest.json",revision:"e08844309dfc67e6e0bb5b4bb875736a"},{url:"/not-fount.png",revision:"bf1bae338f7fde86d26a73a6c6f86ccf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
