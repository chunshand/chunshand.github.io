/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3b4b4e6e1ee4ca53b3bfeee31afc1796"
  },
  {
    "url": "about/index.html",
    "revision": "acb37c9a469ed8e1fd520449875f5cad"
  },
  {
    "url": "archives/index.html",
    "revision": "f87e20ded2690cb3c1983850bbc18f95"
  },
  {
    "url": "assets/css/0.styles.025affd4.css",
    "revision": "d5d75668b22a2bfabbd28388222682c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.893520e2.js",
    "revision": "712e3e2c059cb2410cee1b3b81c4e4bc"
  },
  {
    "url": "assets/js/11.6808f7ce.js",
    "revision": "11e820f1edd16cc7beddf4b9cd7b3f03"
  },
  {
    "url": "assets/js/12.50117ef1.js",
    "revision": "b2861dbf9989a4066e510803479b8d4c"
  },
  {
    "url": "assets/js/13.a1dbb5d7.js",
    "revision": "174e26dd175221b7cc379db2c9a1d25b"
  },
  {
    "url": "assets/js/14.69a8b329.js",
    "revision": "0a6ad8502322837c3b15a0459b725137"
  },
  {
    "url": "assets/js/15.1f2c4f05.js",
    "revision": "ea9b0c30b1b07d176d955bb4003444e1"
  },
  {
    "url": "assets/js/16.e9459c10.js",
    "revision": "1319ea05b81216ce8f86381dbb557cf9"
  },
  {
    "url": "assets/js/17.a9bf89f1.js",
    "revision": "f6e278c1634ce8e5f907c7218cf55703"
  },
  {
    "url": "assets/js/18.63907a31.js",
    "revision": "e564ac9debe4cc15409fad2df182913b"
  },
  {
    "url": "assets/js/19.05026bdc.js",
    "revision": "8c10aa80b9e3a7fac82b8955782d8ba0"
  },
  {
    "url": "assets/js/20.61e9e39f.js",
    "revision": "9d9e79cc4157c830f4a1bd67dcdc1482"
  },
  {
    "url": "assets/js/3.c5419226.js",
    "revision": "52fa3b93fd7e3a124532a4e5709b930d"
  },
  {
    "url": "assets/js/4.94462b41.js",
    "revision": "b6c7666260bf212d4938557518b20f60"
  },
  {
    "url": "assets/js/5.b5e03ebc.js",
    "revision": "fc86a81982ea84429c824d57edbbf371"
  },
  {
    "url": "assets/js/6.9c724ef1.js",
    "revision": "b55f5ef9184a67ccc8845b922a2400ca"
  },
  {
    "url": "assets/js/7.b2011e69.js",
    "revision": "5dfe51bd98dff128feef9a5402708d4d"
  },
  {
    "url": "assets/js/8.ae7ed5e9.js",
    "revision": "63826183027f217d3845e616c6f07276"
  },
  {
    "url": "assets/js/9.35ef1fc2.js",
    "revision": "d957b06f2dd8625ef60a8f862977f581"
  },
  {
    "url": "assets/js/app.d5819e53.js",
    "revision": "0e3581c420f1eb4446dec8433e2701f6"
  },
  {
    "url": "assets/js/vendors~flowchart.9dfe6b19.js",
    "revision": "5c5b813bb9d05118732e10ec8bade9f3"
  },
  {
    "url": "categories/index.html",
    "revision": "222963776620727948e5f72a522f5be8"
  },
  {
    "url": "img/100.jpg",
    "revision": "68fdcc8218d0e6b038626b2b8f3cc04f"
  },
  {
    "url": "img/logo.png",
    "revision": "dde0db6544ef503f9b5ac6a75fa8f532"
  },
  {
    "url": "img/webpack.plugin.png",
    "revision": "ae49c48d347742d0c0369062bba4b18b"
  },
  {
    "url": "index.html",
    "revision": "376216b571ac7711273a5419dee2b609"
  },
  {
    "url": "pages/3d509f/index.html",
    "revision": "bd2a44013865df1ea7f8fba63f97cb62"
  },
  {
    "url": "pages/4e8348/index.html",
    "revision": "64ac9fa57f02005da47d3c908c785dd0"
  },
  {
    "url": "pages/62594f/index.html",
    "revision": "cbd4701a1cfaf007881ef930b5019e4a"
  },
  {
    "url": "pages/758126/index.html",
    "revision": "ef722a534c9af2e1e8a7ab39b7a6b0ac"
  },
  {
    "url": "pages/c3642f/index.html",
    "revision": "24e02cc28c90d8cba34e4400593daa0e"
  },
  {
    "url": "pages/cc9978/index.html",
    "revision": "59c22a4ca9bedae8d217d23795aa25fd"
  },
  {
    "url": "pages/e9dcd5/index.html",
    "revision": "0f7f1973e6fbc69777ce488f61edfd24"
  },
  {
    "url": "tags/index.html",
    "revision": "e27a4d3f73c0df49eb05a3600f5d56fc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
