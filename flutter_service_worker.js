'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b468173da0441915333db75f429370bd",
".git/config": "6654c06605eef0c0707e2d6e13f6bf09",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "d78a61766e7b25d2995657b76193ae3b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91a2bb0851b7c1d38695ae945f3dde14",
".git/logs/refs/heads/master": "91a2bb0851b7c1d38695ae945f3dde14",
".git/logs/refs/remotes/origin/master": "bcd8f8ce9afe8935988fede81e1a1992",
".git/objects/06/530c75461d121347a9e227e374fa68854df9b7": "74598161c1692608d3ed8133c4650c9a",
".git/objects/06/848c6e31d3b108f0b995b6ab9c921e3ed95be2": "1375f3a735056389f92742cb04134edd",
".git/objects/0b/af1138cfeff3b6869160e85de0a6e1b0555cf0": "fd5cb829b2761d56df0e732f821c6306",
".git/objects/1c/7991af473f88eebff7c76920d687286ea400ac": "8189ab37bfc133121dd8ef970b1089a8",
".git/objects/1d/16b83d57fb78ffcdc0e8d2243fc3e68366b989": "d53ad1b8bbc61c9a980d3e3f6fddd456",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2f/346720e416c62c7202f810aca0440a7e58ac61": "6d65621a423b093b2c496946c4f028ba",
".git/objects/32/71abc4e95efb29c7dccbfea3a23455260d86d9": "5fc432513f18b81a7d33c8c582c4b59f",
".git/objects/46/bc23cb822d58516cb6139fa03ef6bba3a835d0": "eefc1ec54e9ff105fb1dd6bc3d634d88",
".git/objects/49/015af6dd9ee4c28234e157ddb8cf4cf9f604de": "7c0be451d1e69d539defbd39b77526a6",
".git/objects/4c/1fee0e3e1115fff520e46121e20699d805d5bf": "8f8e6f538595fc761f5ad05a313e5421",
".git/objects/52/4af2040ea01a1e542b4b0532c2d66c9d06a92b": "203c376581e413b767a859e9eed3b6da",
".git/objects/53/d2b4a4358f9e0f19dc7c27ece7e50e3874a14a": "5e8d19dc599b2c608d4de26c16fd5be9",
".git/objects/58/5bf0905a407f2a96822ca440aa54dfc93c8fd5": "7b8125013f8c54d47985724776e66070",
".git/objects/62/018f244ba4e07179385e3bc8ad5f181169fe73": "7970c4193613f1b6becc71c7f03f41d1",
".git/objects/6a/4c71c0366de9a0d0d1961d9127b8898b4033da": "43404e4e2e1599b50cd18d1d6ae81ccb",
".git/objects/71/38efa32dec9077f9bbcb0c1b38fab4c946119c": "69b511a3bd22b5ea1cc1f4c686fa1d79",
".git/objects/7f/9dc76f10b1425a8ab2fdad0389de48e8b08bcd": "f8fda8f2c06fac1f884a8c243539bcea",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9a/1418d62d2f6d82c6d906a84db514b7c7cd9bd4": "91ed6c563a35b38398742a26b027000b",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/af/344d721fc50308747e2e21a5b31db90ed2ea50": "44a0b1a70b646bf0ff8c545045367399",
".git/objects/af/a6050056a0ca245d1fa32b92c00f1e239e8e9a": "4cf40c0f235362477a677a77d2c4420d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/f51e15c308f20b3897de0d8799b0a9a7c97de6": "371d6a081bb5e40abd5a6743ca980540",
".git/objects/ca/1b6dc441dc1fa0356ef312b583dafb231fc150": "26b26888aa2faa97d1df39054b64f3ec",
".git/objects/cb/9e0e4b17a887b11d89ee8e771d09993c924d76": "504566668c96dbd51874bfb1b281c497",
".git/objects/cc/f06a192fa591966ecf1e7394f9cdb2188cb2cd": "97496b1649f3ae1c0f2a253bd851ae8f",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/a282c7c88796f8131125f4cac4a5849de752f7": "eaf14d5e9b0dbe2d8c76f313a0f56d5b",
".git/objects/e9/a4ae1541edfe60bbb2bdabf4afb4876af9aac5": "3dfe9e8a8d7e1dcb0e8c3e2b97c8e38c",
".git/objects/ec/9e8012e0b9172a4bfbabaaec806628cc5b7dc9": "19eb228c3286eea4f71983b611b2fc7e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/2fd2ccda37011c82e114789da78c69529aeacf": "9d3b6802c71afac91e8d071144a2cdf3",
".git/objects/f7/77322e3d934059b0617b896688c22d022a108e": "db52548215132c8615d6093f9bdffea0",
".git/refs/heads/master": "991364c4e9d682809328408421c165a1",
".git/refs/remotes/origin/master": "991364c4e9d682809328408421c165a1",
"assets/AssetManifest.json": "fdd22c0947ad80098d4ac4443c2e31d2",
"assets/assets/colors.json": "1fd91cde57c8e52aeeb38e1bda3dc683",
"assets/assets/elementsGrid.json": "242607751bed958a087b5fb5ccac3c13",
"assets/assets/fonts/RobotoCondensed-Light.ttf": "a60a2f5cb89d9def151ac47b377a1f09",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "9c6aac5ea7419fbe344b1e8f6cc10dac",
"assets/assets/fonts/ShareTechMono-Regular.ttf": "1959e889df1d88d3545cc28c0d58a0a7",
"assets/assets/properties.json": "d724fc5c22f20623b516b9a3eba04d1d",
"assets/FontManifest.json": "b30a8c789c58fc6bb89070e10807ab5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "aa9d62a17e4eb5873bead2a83d266085",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8c8ec32ae702d2227040bb9da63a69f6",
"/": "8c8ec32ae702d2227040bb9da63a69f6",
"main.dart.js": "4992678c1f5e97f91575c2738b39ebe4",
"manifest.json": "534c913a977f1f1803cc03d16e5d32b3",
"version.json": "486b9d34d14c3284fa67dbcaeda1bf52"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
