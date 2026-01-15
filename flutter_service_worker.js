'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "36a46701691fe9215b2631b1e8d7d56d",
"version.json": "522a14d063288b94027f1ca84b8207e5",
"index.html": "6c2f1418b855c3b442a7d889ea3a91c4",
"/": "6c2f1418b855c3b442a7d889ea3a91c4",
"main.dart.js": "0e4d91a517f6a6dbe745466455fa208d",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2827097557ad3fe4bfc36212c8dbd106",
"assets/AssetManifest.json": "ad02b05201b048f0e11445da2393335d",
"assets/NOTICES": "fb84168b150ec03e7a3f30c837b8636d",
"assets/FontManifest.json": "b73672bf30b13f8f5707848377e39269",
"assets/AssetManifest.bin.json": "b1da0e849bcd73824935fd594bcf6908",
"assets/packages/uicons_solid_straight/font/uicons_solid_straight.ttf": "61f1a517a0b28de93154f6f58fed8cfc",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/uicons_regular_rounded/font/uicons_regular_rounded.ttf": "fe1a0d4695cd3af92ccb8bebe07b37d0",
"assets/packages/uicons_bold_rounded/font/uicons_bold_rounded.ttf": "57b7148925788147563f064dfaedbf79",
"assets/packages/uicons_solid_rounded/font/uicons_solid_rounded.ttf": "10e61be76e22afc668c28a1ef16496e9",
"assets/packages/uicons_regular_straight/font/uicons_regular_straight.ttf": "02b228a3eb26b1cd618618098f93ee6a",
"assets/packages/uicons_bold_straight/font/uicons_bold_straight.ttf": "ec78a205ff3677b4db23873b9da6b6d1",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/uicons_brands/font/uicons_brands.ttf": "579a47c46f2f8dbd90ea1ac923785f3f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "02dc9aaccdad12e03ed02c2c279da3a5",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/suspend.png": "407763ab1a3da6861810699a36098a81",
"assets/assets/images/jeep.png": "512af6123c186d9a56d50677d3611d9c",
"assets/assets/images/passive_safety.png": "ce15e9658f12d05dd655e1a232d1ae1b",
"assets/assets/images/trainingIcon.png": "5f69bca600fc8105d7f4455245f3baee",
"assets/assets/images/hold.png": "8e31002e476b28363936e0707588e66b",
"assets/assets/images/healthcare.png": "cf14454f0228fd5110875e6cb4a4b015",
"assets/assets/images/downarrow.gif": "85e728fc207af6aae0dd91abcd952e4c",
"assets/assets/images/medicalHand.png": "ddfedbb70c9daabf6dc78938a192ff8f",
"assets/assets/images/driver.png": "920701176a04afe75c92cb40db429020",
"assets/assets/images/adcr_watermark.png": "f63f49e2f0da182de5bfde2493da7631",
"assets/assets/images/invalid.png": "358490acac40beda21aa433bfbcf3e11",
"assets/assets/images/adcrLogo.png": "039c61972dc7769e5ec31511f11412e1",
"assets/assets/images/motorcycle.png": "d0e3594846ec36030b56b6ca25f01f94",
"assets/assets/images/power-off.png": "3f10f5620a8d8020daa30d844a379e7a",
"assets/assets/images/ban-user.png": "1e44bf5b56f0f1e441ef3edd9b6fa082",
"assets/assets/images/car.png": "da7fdaddd8f8959019f3cb37c63527a3",
"assets/assets/images/eyeIcon.png": "98d4f73f18e7e886f6cd89c4774620cd",
"assets/assets/images/cognitive.png": "934462bde06c56ebee2bf232dbe038f0",
"assets/assets/images/validation.png": "46b2278bda3eace2b67e00ba4d78794a",
"assets/assets/images/tanker.png": "0e1f7ca19c3caaf0e62c7d9653b8cafe",
"assets/assets/images/bus.png": "df83db2a02f63f4884ee6a9b0a32c81a",
"assets/assets/images/examiner.png": "50c468d468ee38a3462b0441a656efec",
"assets/assets/images/bp.png": "57c965ad3284b00ddf47de0c599a4f1e",
"assets/assets/fonts/driverFont.ttf": "4ecf3ae96e77fa7e9c04163f76817d31",
"assets/assets/fonts/Roboto-Light.ttf": "d5c46b134c17b2138dcd1bb0efa67049",
"assets/assets/fonts/Bolde.ttf": "0b126f23fbd87eea683f53b749b11348",
"assets/assets/fonts/BebasNeue-Regular.ttf": "47f711bd1524b9283aa92d3d74db16a8",
"assets/assets/fonts/Montserrat-Bold.ttf": "88932dadc42e1bba93b21a76de60ef7a",
"assets/assets/fonts/examinerIcon.ttf": "554e9318465e51553c668c47c30c2609",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c88cecbffad6d8e731fd95de49561ebd",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "9bc77c3bca968c7490de95d1532d0e87",
"assets/assets/fonts/RedHatDisplay-Regular.otf": "ba7603510156fc5f15b269a79a927936",
"assets/assets/fonts/Montserrat.ttf": "be20f562bfe23aebd862fef39e26365a",
"assets/assets/fonts/dashboardIcon.ttf": "26c4c8dcecc26bc17c9efea11bd84be9",
"assets/assets/fonts/trainingIcon.ttf": "cb40c2a1946760f2adb20aaa8b065f5d",
"assets/assets/fonts/Proxima-Nova-Font.otf": "bf9f5d50c1b928ff21436517a1a95ad9",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
