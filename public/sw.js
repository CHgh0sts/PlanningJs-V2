if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const r=e=>n(e,i),o={module:{uri:i},exports:a,require:r};s[i]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"faef3a157b6d4e7b39e9a167daadda1a"},{url:"/_next/static/Yvn82DvOckmsh-tzKxPWR/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/Yvn82DvOckmsh-tzKxPWR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-45f1a2f08b68f39b.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/117-2c0f2741b2f0d101.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/340-d639d59148c0fecf.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/37-85e657b20cee0362.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/479ba886-34444c36ab676e29.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/5e22fd23-a29f3ae38d6338a0.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/648-3c6ce54d333f078e.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/712-439ba308c84af746.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/764-1bd0c73a1b5d1df6.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/843-8c2bda85d1c243f8.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/app/_not-found/page-c8219ab21dbb5ed7.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/app/account/confirmEmail/page-26c97c04c09e0130.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/app/dashboard/page-352fdc091c7e1547.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/app/layout-10ed2628160ff7d9.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/app/login/page-885de919577a598f.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/app/page-7bf895f7efa0199a.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/app/profil/page-fd475a87e32c8c4a.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/app/register/page-38ce7686396ddda2.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/fd9d1056-b88f8a4cc02eef8b.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/main-adf74ea33d245707.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/main-app-36e21c29c94c1227.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-b6f809094bf152af.js",revision:"Yvn82DvOckmsh-tzKxPWR"},{url:"/_next/static/css/0e03df15b5d4f47a.css",revision:"0e03df15b5d4f47a"},{url:"/_next/static/css/65912e76cedcd6b8.css",revision:"65912e76cedcd6b8"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/css/nprogress.css",revision:"8897344972d504e5fedb19d89969997c"},{url:"/css/style.css",revision:"277abd10b54c1e67b1599a29709df976"},{url:"/images/favicon.ico",revision:"c2d457d64cb89a8847a17c5b88c437c2"},{url:"/images/icon-192x192.png",revision:"af0c0aea1f66c03267893629044b6e09"},{url:"/images/icon-512x512.png",revision:"21bfaad3b40437fc0950f1b3543d0da7"},{url:"/images/logo.png",revision:"91961388cc6788e3df817b76d5debb73"},{url:"/images/mstile-150x150.png",revision:"39c4d15a531dc6f8ee84163b95909a17"},{url:"/manifest.json",revision:"a3e0b0b260102b5781b50cdfe1195379"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
