if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>c(e,t),u={module:{uri:t},exports:i,require:r};s[t]=Promise.all(a.map((e=>u[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts("/worker-3dc4bc4b2ee8ab46.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/58uJ32Dc8gzSUZUwI1c4j/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/58uJ32Dc8gzSUZUwI1c4j/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/190-616339bb8d5fc2e1.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/231-07f0cb7ffeb289d1.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/268-17b375ae3c15ad33.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/276-e689388d2375e421.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/370b0802-3f05ccf50b9798b3.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/401-eab0126eb894c17e.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/429-a5586cdba55a9490.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/450-db684db8fb8175c6.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/8e1d74a4-7de07bbcf4dd0890.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/935-800a093b49880f29.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/982-f3ee3925f6ad5776.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/(protected)/layout-dd8b6b5060e14619.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/(protected)/portfolio/page-717e457bb2be709b.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/(protected)/settings/page-d47806d855a94b07.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/(protected)/trade/page-a5887cc8c2134776.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/_not-found/page-9886251f5e464b4a.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/auth/error/page-3f1ad8cfabf8abef.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/auth/layout-9275d53322ff8446.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/auth/login/page-2365c4eb6b13b5cc.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/auth/new-password/page-125aafc4d12533e4.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/auth/new-verification/page-5b72b7e0bd87f78e.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/auth/register/page-b5abd169b726da47.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/auth/reset/page-3315929ab0af9bd1.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/layout-67a2caddbda9b55a.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/app/page-c20cb4691df8136f.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/fc2f6fa8-37dd54aa83623506.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/fd9d1056-309b34563ea42208.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/main-70b8eba4a475c274.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/main-app-24703364f7dc27d5.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-5c2301f52c39854e.js",revision:"58uJ32Dc8gzSUZUwI1c4j"},{url:"/_next/static/css/c4c111866a1aeca7.css",revision:"c4c111866a1aeca7"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/favicon.ico",revision:"466b98774738aa2dce8a7ebd0d47cce2"},{url:"/icon512_maskable.png",revision:"008e4d30abe04a85f5c2527f018fd98a"},{url:"/icon512_rounded.png",revision:"d6af0856fbf88fdabf0878404c98356b"},{url:"/manifest.json",revision:"7024ead6914a2767545ff20bb82ba8c0"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/worker-3dc4bc4b2ee8ab46.js",revision:"b90f376ed5e40a7f0a804a9c19e415ee"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
