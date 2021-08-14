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
    "revision": "c471a67af7fe99079f4a2986ad82bc55"
  },
  {
    "url": "assets/css/0.styles.bf8e2896.css",
    "revision": "ac45307eaa72a398226658ab76a4ece8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.589710f3.js",
    "revision": "a8f680adba1f29916139c2831fab402d"
  },
  {
    "url": "assets/js/11.acd6176b.js",
    "revision": "e866f9eafb49001e3b2ac133c3163551"
  },
  {
    "url": "assets/js/12.58395625.js",
    "revision": "afc4f63cc3a6d39b6275c50cf65eed9b"
  },
  {
    "url": "assets/js/13.f57be8d1.js",
    "revision": "73d500cc708b04331afff941abca3cb4"
  },
  {
    "url": "assets/js/14.f349eb3c.js",
    "revision": "6d6837bfd6fa256623dfb606531cefff"
  },
  {
    "url": "assets/js/15.9a1cc527.js",
    "revision": "91b8e9d4cd38de974ebeb491ce69ef53"
  },
  {
    "url": "assets/js/16.116d3113.js",
    "revision": "59019b2af3c80713bfd79965d0ceae9d"
  },
  {
    "url": "assets/js/17.40e36be9.js",
    "revision": "7da8d267af012f3bd34b1af3f9c06764"
  },
  {
    "url": "assets/js/18.73362055.js",
    "revision": "3922bd9c0b6e0b8a37e8246f157b09d4"
  },
  {
    "url": "assets/js/19.b8c2d8f6.js",
    "revision": "35046fcc4ff21163a906955fed44d86d"
  },
  {
    "url": "assets/js/2.60e7a085.js",
    "revision": "a06e8d4e83379d240e2b253d7a7c86fe"
  },
  {
    "url": "assets/js/20.7dca9810.js",
    "revision": "974826b1842c46a1e450cca46cd6562c"
  },
  {
    "url": "assets/js/21.27f10435.js",
    "revision": "b6c3a33e9e72c097d5ba928556b3f5ef"
  },
  {
    "url": "assets/js/22.2fe618ea.js",
    "revision": "f8fdbf32def73007561e33c7e6ea0e52"
  },
  {
    "url": "assets/js/23.3a9485e6.js",
    "revision": "e7be3cb1410806a4943f92520f5a4976"
  },
  {
    "url": "assets/js/24.594ca461.js",
    "revision": "6ead20184c4b8920ad03135163463a0f"
  },
  {
    "url": "assets/js/25.0341fdb4.js",
    "revision": "5a5b6396f3d9fdbaa5e4e591b5f69316"
  },
  {
    "url": "assets/js/26.2279e7bf.js",
    "revision": "08117c1e0c63c0c45dbd1e9286b7740f"
  },
  {
    "url": "assets/js/27.25c7bcb9.js",
    "revision": "964bc0409cec047991de9b9628557409"
  },
  {
    "url": "assets/js/3.751cc1ac.js",
    "revision": "2e8534a3bb80339adfdfe532da45013e"
  },
  {
    "url": "assets/js/4.64a35343.js",
    "revision": "e8744b8e50149fb3a775305f967e14c9"
  },
  {
    "url": "assets/js/5.742ee138.js",
    "revision": "f5c2a06b811e3cfcdb12c17df9cfa8d2"
  },
  {
    "url": "assets/js/6.eed144af.js",
    "revision": "cc9a00b453a00c840df10a48c498e3f5"
  },
  {
    "url": "assets/js/7.43d435f1.js",
    "revision": "fe53ee7f00177608495ad3391be30e46"
  },
  {
    "url": "assets/js/8.3c4e9a0b.js",
    "revision": "f11aa2166ec541f637596ba15a792860"
  },
  {
    "url": "assets/js/9.7787fb1c.js",
    "revision": "26d4d5028a422441d0ac8c627d5f106c"
  },
  {
    "url": "assets/js/app.9fd0fe68.js",
    "revision": "2e8f37669fb8d8c765b48a0599fa0db7"
  },
  {
    "url": "Birmingham.ttf",
    "revision": "102858939d4be0a35aed6cfdce0ab392"
  },
  {
    "url": "hero.jpeg",
    "revision": "afe11fd699b076812c3c49c240f674c1"
  },
  {
    "url": "index.html",
    "revision": "e3591078ffdc6a84e1553553bbbecc60"
  },
  {
    "url": "logo.png",
    "revision": "e577c0ca15175c020f4bdf6e19ab90cf"
  },
  {
    "url": "menu/alacarte.html",
    "revision": "d8faa82279fda9a43cd7fd142af98ddb"
  },
  {
    "url": "menu/appetizers.html",
    "revision": "e202b6d4c1dad40b1be62d29e1d97236"
  },
  {
    "url": "menu/bbq.html",
    "revision": "8ad54ff5dfe859537661c65cb7e025ee"
  },
  {
    "url": "menu/beverages.html",
    "revision": "608d28ee7e34cc3ae2f8299998d392a5"
  },
  {
    "url": "menu/catering.html",
    "revision": "cac0ecfec34ce153b445df50e8e62980"
  },
  {
    "url": "menu/desserts.html",
    "revision": "7ee567fb6024e8481bf93746f510e8e2"
  },
  {
    "url": "menu/events.html",
    "revision": "8c9d282c15f16ea33ab37b7caf679a2f"
  },
  {
    "url": "menu/fromfryer.html",
    "revision": "70dd9c123db15a4d94f6c82626d90934"
  },
  {
    "url": "menu/platters.html",
    "revision": "8d69e5f011a5d25c82f576cb3ca5a1b1"
  },
  {
    "url": "menu/salads.html",
    "revision": "e8ee38c3e39b668db4026cbaa15b3a7b"
  },
  {
    "url": "menu/sandwiches.html",
    "revision": "678f4683682c9bdfddc3b9f2c6df4af6"
  },
  {
    "url": "menu/seafood.html",
    "revision": "b4a316aaccec0f6ded2b9b28a5da5b9c"
  },
  {
    "url": "menu/sides.html",
    "revision": "265dc58e00f474c0f62c23acdc79bb98"
  },
  {
    "url": "menu/soulfood.html",
    "revision": "fd490d41aee5161ca6197150552e334f"
  },
  {
    "url": "pic1.jpg",
    "revision": "bd0dade105498203c6e300529d78e240"
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
