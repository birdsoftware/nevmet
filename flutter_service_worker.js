'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/Aliante/ET107.jpg": "ebb58df3410472d4fdd62b0a73a8c3c3",
"assets/Aliante/NewBatch1%20Air%20Temperature.htm": "547ad35082aa608ec5d3cb3cba707574",
"assets/Aliante/NewBatch1%20Air%20Temperature.jpg": "9ec798fb870b96e6e2061b7b1c9fad57",
"assets/Aliante/NewBatch1%20Air%20Temperature_graph.jpg": "39b07c9cb3995b8ba33892c3e3749113",
"assets/Aliante/NewBatch1%20Battery%20Voltage.htm": "920b78af7f8d42049b44754371377390",
"assets/Aliante/NewBatch1%20Battery%20Voltage.jpg": "5c72c55129c52b48179b0e3aa546008a",
"assets/Aliante/NewBatch1%20Battery%20Voltage_graph.jpg": "810d8fb1f41b11591f38d0565e008664",
"assets/Aliante/NewBatch1%20Chill%20Hours.htm": "280df718127f7bb5ad8b1798990e0c96",
"assets/Aliante/NewBatch1%20Chill%20Hours.jpg": "2ec5a1409cde4360956fa4378efde489",
"assets/Aliante/NewBatch1%20Crop%20Water%20Needs.htm": "c3c114d780ad812fbca91fd7861d22e1",
"assets/Aliante/NewBatch1%20Crop%20Water%20Needs.jpg": "384477410673fb7f65a9c63bd3c0c0ca",
"assets/Aliante/NewBatch1%20Crop%20Water%20Needs_graph.jpg": "ff0d6dba499bd3c7a45ff13444f779ba",
"assets/Aliante/NewBatch1%20Dew%20Point.htm": "0a3e647d60d27e18682e218b70078858",
"assets/Aliante/NewBatch1%20Dew%20Point.jpg": "f62dbde5c634318622c5a3d4f83ebda6",
"assets/Aliante/NewBatch1%20Dew%20Point_graph.jpg": "f4df1f5a0d3cb10200142919928ee43b",
"assets/Aliante/NewBatch1%20Enclosure%20RH.htm": "55741877444c6b4f394232f79e069904",
"assets/Aliante/NewBatch1%20Enclosure%20RH.jpg": "12f026d94d9fc8b0c2f2db217989e469",
"assets/Aliante/NewBatch1%20Enclosure%20RH_graph.jpg": "641865aac56d95cc708a27e40776e4db",
"assets/Aliante/NewBatch1%20Evapotranspiration.htm": "9953292f82519a7e697f0edd82f9b89d",
"assets/Aliante/NewBatch1%20Evapotranspiration.jpg": "9256c94e0444b1960a03755035584510",
"assets/Aliante/NewBatch1%20Evapotranspiration_graph.jpg": "deb3c2c9a7a88ffd13fa6320acd5918e",
"assets/Aliante/NewBatch1%20GDD.htm": "5cad49e77ecb3c49d3abb7a93e7dc901",
"assets/Aliante/NewBatch1%20GDD.jpg": "a2bc4950562068aedd58780a35811810",
"assets/Aliante/NewBatch1%20GDD2.htm": "3f5e4fe5ff59ea700e9a308cd41572e8",
"assets/Aliante/NewBatch1%20GDD2.jpg": "7e99a86152449fae72ada432761b25c6",
"assets/Aliante/NewBatch1%20Heat%20Index.htm": "91c2b4c17f4a42fdc5c7b0a27d7a0579",
"assets/Aliante/NewBatch1%20Heat%20Index.jpg": "fa228fbd0b5985282dac2de04341b717",
"assets/Aliante/NewBatch1%20Heat%20Index_graph.jpg": "2710611faa70320d78d3337aec446789",
"assets/Aliante/NewBatch1%20Rain%20Fall.htm": "68c6f69fe18645a0bbed2edba22cb9a6",
"assets/Aliante/NewBatch1%20Rain%20Fall.jpg": "36095ee89af04a5b021c441e2e209ef9",
"assets/Aliante/NewBatch1%20Rain%20Fall_graph.jpg": "1a6435834b488052536fe92549eeb1fa",
"assets/Aliante/NewBatch1%20Relative%20Humidity.htm": "dbcaae1cb993f10e75565dc1f29d8ac1",
"assets/Aliante/NewBatch1%20Relative%20Humidity.jpg": "8790bd1975d532a19c3d0ff8dbb9d48c",
"assets/Aliante/NewBatch1%20Relative%20Humidity_graph.jpg": "8c7f6c0d325b00d7435b978a8947095d",
"assets/Aliante/NewBatch1%20Solar%20Radiation.htm": "df86d490f3a14c3397d88527dcaef8ed",
"assets/Aliante/NewBatch1%20Solar%20Radiation.jpg": "82629058ba77ad4cfc3c833a3e8ecdad",
"assets/Aliante/NewBatch1%20Solar%20Radiation_graph.jpg": "047aefeec527ac306b8be3d9d71e3913",
"assets/Aliante/NewBatch1%20Wind%20Chill.htm": "681c692444509651b49093f1ec7c8fb0",
"assets/Aliante/NewBatch1%20Wind%20Chill.jpg": "03a30f7e5d6bc43cc0bc22a47bf4697e",
"assets/Aliante/NewBatch1%20Wind%20Chill_graph.jpg": "0b7405b42956f689816e174c1db0fcb5",
"assets/Aliante/NewBatch1%20Wind%20Rose.htm": "43a49f511276af26006abe31d9f2e1c8",
"assets/Aliante/NewBatch1%20Wind%20Rose.jpg": "9fdf439afedd01d6230877f5ebbfc798",
"assets/Aliante/NewBatch1%20Wind%20Rose_graph.jpg": "44563c4926f305d5ce5389c1c2a3fd8f",
"assets/Aliante/NewBatch1%20Wind%20Speed.htm": "964d51356965e6d05a7b59750593b056",
"assets/Aliante/NewBatch1%20Wind%20Speed.jpg": "fe6f14907fea98be58475a9bca0160f7",
"assets/Aliante/NewBatch1%20Wind%20Speed_graph.jpg": "6052be0391f69924d49f929d37e22893",
"assets/AssetManifest.bin": "3b954b8409f0030f1851f812109fd01a",
"assets/AssetManifest.bin.json": "9fe22a00b4d981785efa8e32a678544b",
"assets/AssetManifest.json": "1bf0b01f9c4c5b849162edaaaa6ddf06",
"assets/background.jpg": "7001adbf7f00a25eb6eebb80341867e5",
"assets/FontManifest.json": "6f5744f40eb3064f030b4e03a74f67a5",
"assets/fonts/MaterialIcons-Regular.otf": "39d0ade3852dd409419ac44d08dc494b",
"assets/nevm_logo.png": "be944d98ba66200c399603d6c3009fe9",
"assets/NOTICES": "5de64ab63a58b1385e87a75b22198f19",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/assets/background.jpg": "7001adbf7f00a25eb6eebb80341867e5",
"assets/web/assets/nevm_logo.png": "be944d98ba66200c399603d6c3009fe9",
"assets/web/assets/WebData.xml": "af3360951663c2f10812567a231b35db",
"assets/WebData.xml": "af3360951663c2f10812567a231b35db",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "c7c3d5c97140a98e5cacbe6ca00356df",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d7058f85ac0b33eac20d465cc4910fd7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c267768adeda01359c4de8b3e996eec5",
"/": "c267768adeda01359c4de8b3e996eec5",
"main-icon.png": "c1e436b1c29204d242c34a8417f01c11",
"main.dart.js": "e8a0b4d0602a4cdf712fcb8d14f2e700",
"manifest.json": "bd94090ace5ca74ef14427f7546fe9bb",
"version.json": "db4c178fd11523ba8c2fcbc92dc81c53"};
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
