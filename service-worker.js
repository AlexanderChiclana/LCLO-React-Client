"use strict";var precacheConfig=[["/index.html","4e0956d51cbf8a3dee30d4ad041a1782"],["/static/css/main.38fb59b1.css","5e85b90b541b44a60cd0dc9a34788a36"],["/static/js/main.2036d014.js","be01ad7e17348d9a16cf1bb982280ac8"],["/static/media/Alexander_Chiclana.cbe7952d.jpg","cbe7952d5ba51d634e0928f80d98d6a0"],["/static/media/Don Operario.1bad44fb.jpg","1bad44fb260c30d06abd6a223911ae2b"],["/static/media/Jennifer-Nazareno.219a35e6.jpg","219a35e6446635e86b0f631e22b7a807"],["/static/media/Julie_Lee.a3f2ca48.jpg","a3f2ca482a5d5475d1fe34ddd00a8751"],["/static/media/Lynn_Hernandez.a6cff0a6.jpg","a6cff0a676e54f21582e02f527cb0c41"],["/static/media/Teresa.960b4763.jpg","960b476320607e1297f960c3dc7cca58"],["/static/media/Yen.62a1006e.jpg","62a1006ee95c0084b2b1c4692a58620f"],["/static/media/bridge.99a37701.JPG","99a37701f7f47254dd27a73cc97fee59"],["/static/media/cafe.2f86e234.jpg","2f86e234644bca12b73d2f22cbcd394e"],["/static/media/cityscape.9db29aca.JPG","9db29aca228997309ab86db6ddd56bcb"],["/static/media/coaching.6b670511.jpg","6b6705115538027bce985a9cbf313891"],["/static/media/farmer.b0132dad.jpg","b0132dad27629fd25df99b6d8c45a3e2"],["/static/media/foot-bg.a2d2c849.jpg","a2d2c849cf448dfe14e4f4f56fd9efeb"],["/static/media/gregory.bd33b267.jpg","bd33b26766212cf2978f6e1779baa3c7"],["/static/media/lunch.ff02e6c4.jpg","ff02e6c4353ed88e02f8d0d55a715ad6"],["/static/media/myra.d67623b5.jpg","d67623b589a4a7070772f10c730e4c34"],["/static/media/newspaper.6c2e5c68.jpg","6c2e5c684f1964852d8de6af7d7e3bd5"],["/static/media/skyscrapers.2764813c.JPG","2764813c7b255be7eacf68a7eb67829c"],["/static/media/stem.dc16ff2b.jpg","dc16ff2b614703fd6703be9d16a2bc59"],["/static/media/train.c4c1f3db.jpg","c4c1f3db5f1b8846eb86a24da4730bc6"],["/static/media/working.83a89791.jpg","83a897912bdd2714f09d2fa5f8657590"],["/static/media/yishiuan-chin.23cb9d3d.jpg","23cb9d3df5586597920c1c9d307ceaca"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});