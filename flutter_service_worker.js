'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2aae713e7cc8554b1b5372534a21d738",
".git/config": "8f9126661a46b79f5e0efb3038b4c7d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "65da2017a88f72390023af98d3ec430e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5b060f8be76a41bfed1097810afe62ed",
".git/logs/refs/heads/master": "5b060f8be76a41bfed1097810afe62ed",
".git/logs/refs/remotes/origin/master": "50ca703757c64d4f2f08daed0fadd936",
".git/objects/08/b4e553819b81607dfdc5d344f98975c7180911": "98afc9c1959ab6f9dbee07b4d0a413b0",
".git/objects/09/0744365d4c5c53bdfecb01f1c026bdc27a5c68": "7f0afe40dca57eb96181d4f7679e2b47",
".git/objects/15/22a67ce27fe7c337b43b45b123bcb26995dba7": "f8d084796d31051c77df24240daa1122",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/c3a90565f85c3a2de9b654362d5ec3448e3435": "a9bc17b4f5402ec10d9bf3ee0013475c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/20c6b49cb8129bf868d0f2bafd596168321fea": "a77d909e47d004e2ac73beeb59e0b75a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/a3e200ac51a03d537fe710fa3929bbaabf8934": "677cce7cdd1964bb45b5f69451ab1764",
".git/objects/3c/7a97a7b2ace9e0e02d3364c4b3ba6ae9544efd": "1234e2587860ad457fef6e06ac9bf268",
".git/objects/3d/0d995d789e71054f7b850fc71cc33cfd7c6cf1": "671047311cec1d295cf565738f1f9b4f",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/41/7ca32e2c15ea808c6567fc6b80dff95b41c19a": "f63bfac2bd38da4090c548217317a483",
".git/objects/42/747dcc5da19be93977fdeb2714ccbaeed0722c": "8f983f874a7b1d732594cc8157a5c6e7",
".git/objects/4f/c7d3635295c2f0e70ffd9b91ac4f6202e84f46": "b4b082506fcda11216a76ff55d641d8c",
".git/objects/5b/199701b33d265245b6a1d5ee34efe58465e6a8": "99c98027c233373abd6db27c5bdbff58",
".git/objects/5b/4052012ba947e57a5142d312bb1e040bc8b869": "b39693cdc7273c8499a4e96edc4cf221",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/63/96f8a45fb77dc3f1d3f99540d6dcbdec14541f": "8b24944fb4ee49e2ea635c3173668bbe",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/70/47d3d28129cff9129e8e7b93d62a8df676ff5c": "6116fe3798edcf6073ec2d15ce5a117f",
".git/objects/76/8f0986d1b5074067c55bb935559d7f6784e877": "71719395c31b6aa38180be3fcad361d3",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/e313591d06b96a4e9e2c5cc11a1eb504db38c3": "081fff33647fcbedf9340bf9c3b7ff96",
".git/objects/95/a0ba2a000d41600ded0e87174793886372842d": "83f3b1dc2e0be48e8df1b9b8432db00a",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/5840695a8dfde3475d64ac42fb203a4076f502": "2438e21ba575e20be20d165dd48ec859",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a3/fd885252032e4d8eb93d1c2afd47e6c11fe7fa": "b3fba95283ea81f9623cadeb1d741fd4",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/b2/02d633440349b3bfdb20162f02cd13d0ca0087": "509ec4387683aea1aec613c2fb0a1d8a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c4/571ec8d0ba526b88365f49ad392b31b2fc7edf": "5ca21ade8e9d5d70a422811d555a8e74",
".git/objects/c4/777765db93c8b3be089b01542c78c1ec3b1fd4": "e8d3fc3e6412bc6abd306ba53698fd47",
".git/objects/d4/15326128835466c96c968f06d6f4491eee42a3": "2f6cb19ac36fe53e08f2cbb0abfbb1e1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/9514369ef6f36c6afa66ccb9b2be082fefa761": "0b573e03bb1341ff7aea89d3696a1f75",
".git/objects/e3/7ba2f3d03b52065111f4b90f58ad5a3568f3bf": "52f59c5e7f72ee55c338a87f54abd868",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/refs/heads/master": "ffaeb53f1ffe491bddd5734cfc546d8d",
".git/refs/remotes/origin/master": "ffaeb53f1ffe491bddd5734cfc546d8d",
"assets/AssetManifest.bin": "7cad306015c9cfff2d760429c9fc385a",
"assets/AssetManifest.bin.json": "2afd850fc153da8558cf9d096b70faeb",
"assets/AssetManifest.json": "2495238203b906fd2b671ac3e10ef355",
"assets/FontManifest.json": "f338ce80b0ebafabf5911de6ffe088f7",
"assets/fonts/MaterialIcons-Regular.otf": "8c92472b32ff5d8c6b37242c8a84c98c",
"assets/fonts/Sora/Sora-Bold.ttf": "59f1a10513024e9d080536ea7a744293",
"assets/fonts/Sora/Sora-Medium.ttf": "e3bb21ba620d898557d6537bbe0e9f10",
"assets/fonts/Sora/Sora-Regular.ttf": "e771c55096d16865a23c2795806fb01b",
"assets/fonts/Sora/Sora-VariableFont_wght.ttf": "66b18d93676517197641202e352191eb",
"assets/NOTICES": "36fe0f344f88d66a4e273c0e04a0f494",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "433aab1347513aa05d72d8396af12a30",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "9590b9dce59503e2f96eacff137d8b5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "6eedbc24dad4be24bb6193f7b13ad23c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "aac626f460654511b298e31a15e9d3d8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f3a3172c295b62e098417d6708083352",
"/": "f3a3172c295b62e098417d6708083352",
"main.dart.js": "e0adf19ff08e11329772137a87e3d9ac",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
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
