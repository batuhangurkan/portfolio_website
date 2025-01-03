'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0a60aea92851b5d67bd841de5f996ec4",
".git/config": "8f9126661a46b79f5e0efb3038b4c7d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4613cf5634edc0f7552854f1444531a8",
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
".git/index": "5605e3b9827b61ef287fc777e6468e04",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "387a8e275b1839ec4e859c1e826df821",
".git/logs/refs/heads/master": "387a8e275b1839ec4e859c1e826df821",
".git/logs/refs/remotes/origin/imgbot": "9c8fb724d8d0764ce2538d6fdb8f1330",
".git/logs/refs/remotes/origin/master": "b5fe2a2598f470b494d4e40b7e59b16c",
".git/objects/01/a05bdba1ad2d1c1223793e0bc1339233dee50b": "406cf37082e519f3ee4b78e60bb835a5",
".git/objects/07/83ac842ca24f51093a3519151673ec07937e9a": "68428d8905ea568990308873310056fd",
".git/objects/08/62626067dc597f0888c28be0bbec6e4e12ba7d": "3527c466f2b54078439b360310e2edf3",
".git/objects/08/b4e553819b81607dfdc5d344f98975c7180911": "98afc9c1959ab6f9dbee07b4d0a413b0",
".git/objects/09/0744365d4c5c53bdfecb01f1c026bdc27a5c68": "7f0afe40dca57eb96181d4f7679e2b47",
".git/objects/0c/434ab15ea772fed9eb9bc24562c36439a8d930": "292d2e5fbd03b0f2624794b8a94fa528",
".git/objects/0f/32ee6cc9d17b0bfbdbe1c77cd66853b8f0416e": "95015c1d8d6f012482aeb279e6ddf679",
".git/objects/15/22a67ce27fe7c337b43b45b123bcb26995dba7": "f8d084796d31051c77df24240daa1122",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/c4fbfc1d2303852dedb12dd0138b955634edd6": "72568de32ee5cb28a7428be4dbf185f8",
".git/objects/22/a989f1a341039f03ba78b9076234fc669e4d8c": "8b4fc99312406ce263bc804e5c4d984b",
".git/objects/24/8633dda369c1bd3694ac0a6211ba9fa425b0b1": "f49d1b85553a6fa67fb8f2fcfc182f3f",
".git/objects/27/da557bf486801c1b48f0024609b18336e8c826": "c2e3cf13881dc88d126afc480da96df0",
".git/objects/2b/91fba4881616c62a57e5613186eae89c205fef": "fc7261ee1e3ae966da03d425df1dd717",
".git/objects/2b/c3a90565f85c3a2de9b654362d5ec3448e3435": "a9bc17b4f5402ec10d9bf3ee0013475c",
".git/objects/31/a0d88e580264f3e0f93c1fda04f8bcb3b02ddb": "f8993dde42dbbcd3864d88258c56f279",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/99c84db5a32522aefe420d0c4930ca4f7716eb": "aa8e54f12031454453df56e01c1ecdc1",
".git/objects/38/20c6b49cb8129bf868d0f2bafd596168321fea": "a77d909e47d004e2ac73beeb59e0b75a",
".git/objects/3a/4a3e476bce4ae923621624df2bdd404d825e26": "2f0f3c6a5a56245a1da666aa6fe14b29",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/a3e200ac51a03d537fe710fa3929bbaabf8934": "677cce7cdd1964bb45b5f69451ab1764",
".git/objects/3c/73b030d05105ca28742333f418bc023504a120": "aa415e4a2cf2272261125e396ce3cd93",
".git/objects/3c/7a97a7b2ace9e0e02d3364c4b3ba6ae9544efd": "1234e2587860ad457fef6e06ac9bf268",
".git/objects/3d/0d995d789e71054f7b850fc71cc33cfd7c6cf1": "671047311cec1d295cf565738f1f9b4f",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/41/3b4f2b31449e180d54bc4eb50a88e499cbab4d": "e223f872aa2014c745b8e97e374d8a94",
".git/objects/41/7ca32e2c15ea808c6567fc6b80dff95b41c19a": "f63bfac2bd38da4090c548217317a483",
".git/objects/42/747dcc5da19be93977fdeb2714ccbaeed0722c": "8f983f874a7b1d732594cc8157a5c6e7",
".git/objects/49/e2b55bc52e94f4c482168fa80203a38402cfcb": "4dc62d18a70d0933a5f0480fa444f34b",
".git/objects/4a/93b3cc59c0ab959ef622d1e6dc106bf9bdbce0": "008bacfb992090dc98085c8357da3d3a",
".git/objects/4d/c15039b971c15cf810b505d408f12b50ea46f1": "b7839b5277c2f517eaf8cea215989e4e",
".git/objects/4f/c7d3635295c2f0e70ffd9b91ac4f6202e84f46": "b4b082506fcda11216a76ff55d641d8c",
".git/objects/50/29d2d80626111e4767ac7092792051fa82236f": "c392d0276966d0e7283f99939c4ad4e9",
".git/objects/51/d903f0cd59f2ef100cec18ab5fb92675c6b7b6": "2d311fee837d1fd05ccc65cb65d263d2",
".git/objects/57/6334c8ccfca06b241b46118d99cca276ac5546": "8092d748ad3bf2de94c8c76241566c92",
".git/objects/5b/199701b33d265245b6a1d5ee34efe58465e6a8": "99c98027c233373abd6db27c5bdbff58",
".git/objects/5b/4052012ba947e57a5142d312bb1e040bc8b869": "b39693cdc7273c8499a4e96edc4cf221",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5e/0b932b30428bebf07b03d7d1baf18618276f12": "87d9c364c953cc45ae0e4b1473fead62",
".git/objects/5f/bca62213970d94963c1f3c8d01784f03e316fd": "cfe1b63402af999f3bc968e6dfc10c9f",
".git/objects/62/51f90fd0f9be5be33c80d146ab39a805e260cc": "aa695a6b1d579f3530a7baae47641559",
".git/objects/62/e1d74822276eb57e2ea6a064d406fd4868bd4b": "d0a598b1b58f4b5ade686fc13d3dc819",
".git/objects/63/57ceb7a43ceb8269c620450938bc7561ddf4be": "089da2f448bac52e9e3df680d11a681c",
".git/objects/63/96f8a45fb77dc3f1d3f99540d6dcbdec14541f": "8b24944fb4ee49e2ea635c3173668bbe",
".git/objects/65/8c12594e34e2f8cff54b1484bf0935b2bea829": "37a9f0f387e61a7f6be6385200f4f7fe",
".git/objects/66/9aacd84fc9afc819cadf7552b5875f59fcc578": "066a42caea7d8ad6a8d8e49ddd1f77d7",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/38917a20b61df2f0cbb90bf477610d234c21e7": "c9c9be4e5c3211c48d1801202ce53376",
".git/objects/6e/9368a597abf4eca3fb050d0b019692110e3c3a": "89a0e6462ce9ca04e5b26b09cee9af0b",
".git/objects/70/47d3d28129cff9129e8e7b93d62a8df676ff5c": "6116fe3798edcf6073ec2d15ce5a117f",
".git/objects/72/072742e8b7ae3e129a378fe9b8acf5180ac9b7": "dc0511c0971d6dc81a9ca6deb03d7af8",
".git/objects/76/8f0986d1b5074067c55bb935559d7f6784e877": "71719395c31b6aa38180be3fcad361d3",
".git/objects/78/1cbacab2915011570c7f31cc9fa533062d7c74": "a7b2f2bd175bb4856a2a57b29accea86",
".git/objects/7f/10d481ae731c867222b3b1e6db53e7216d7ec2": "2a94a14fc2e25d28b76e4f4c2a55d613",
".git/objects/81/9b15b9e8805b36210d77705b45b780c4d1de7c": "b18e3dc3eb1e057dfe7e0a7a7c259244",
".git/objects/82/b9a5100340cd4978f26d6ba50cc45b5c197356": "6380facc2147fc619088f940f51d8165",
".git/objects/83/96c8acadb8f92d233267ba58acba87bc00b88b": "cde2002331a4ddb3e94db07118b82744",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/bad0d09591d4e75c7eed847f9e03f7e522bbf4": "a8eda3187ca0491218fe8f8c49ab12c9",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/e313591d06b96a4e9e2c5cc11a1eb504db38c3": "081fff33647fcbedf9340bf9c3b7ff96",
".git/objects/91/5858aa97d44484806fc000f426d55737044fd9": "c02f086d5dc67537214637c486c00bed",
".git/objects/95/a0ba2a000d41600ded0e87174793886372842d": "83f3b1dc2e0be48e8df1b9b8432db00a",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/5840695a8dfde3475d64ac42fb203a4076f502": "2438e21ba575e20be20d165dd48ec859",
".git/objects/9b/930959b8d1272b2201c095aa3a187fa64d4e5b": "ff84e5cbe6a330babdc4c0a0b6196778",
".git/objects/9c/1649e06fb476a813329869749f2f66410bb732": "07b3000c6b0633a832573329671a6028",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a3/fd885252032e4d8eb93d1c2afd47e6c11fe7fa": "b3fba95283ea81f9623cadeb1d741fd4",
".git/objects/a4/562f42e46a63a64589bc0910765a904bf375d8": "e1decc9ca483f9afb39c65736ffb6b09",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a6/4ec89d5602f967c2d68e8afbd1b4847cbf0610": "4fe1da6f6716b6886a292f8e4856ff52",
".git/objects/a6/6a57a1f67a3dd1c27c13ae192b350e893c43dd": "09a3e245093753be17d010ddfcfa982c",
".git/objects/a7/2668c1a9fdbb3fd59c0596db097652c8478015": "3d34901d9f534f5e05666c542963494c",
".git/objects/a9/256a5c6e414385b0077ff155755bbdf610548d": "d81ffaa3bb522e765b8b320bafd74067",
".git/objects/aa/1cd5aa6b8c88a76bc748f6e3b4c95e3c3099f0": "ef59df582aee47f3981277da16c82bea",
".git/objects/ac/bf4688ad685c43b177ce927ed4089547fac903": "1863d40a8f293fd6be3356dfce495b08",
".git/objects/ae/6f99ad0b3f0a3614c6db1a14eb83370b7991af": "ae6db854511a4e6973eee45b201159f8",
".git/objects/af/e0405b5e3ad80b80ac61fc70c94f84f7928414": "0fe74ce398635f119a226ef93c154e37",
".git/objects/b1/0d277d0f18b0a77997dccac0963dc06a2b46af": "2ccf54fd5b294fbfe22c413dd3d5586d",
".git/objects/b2/02d633440349b3bfdb20162f02cd13d0ca0087": "509ec4387683aea1aec613c2fb0a1d8a",
".git/objects/b4/ca7a693216d8388c5076b585eea11132df0d16": "cb01e008753155342bd7d2c1bc819836",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/56bd1fc5151e66fac870148765e908f1b1933f": "b45afc6b5f76fb23b4956af14df4f839",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/2fb47b1991e31d29b6868982572d0d73cc85e5": "aabb73646c5ddaad3d5332d470e2a2c1",
".git/objects/be/80495aee9c0da0e7945d3b840c1c5146d407ec": "28c561e96449b83c03fecc868f3b9d20",
".git/objects/bf/f0caac355c59b617b2aa0dbb612a622e3b578d": "6a330c6106a4b38b62b178d12e06f7cb",
".git/objects/c4/571ec8d0ba526b88365f49ad392b31b2fc7edf": "5ca21ade8e9d5d70a422811d555a8e74",
".git/objects/c4/777765db93c8b3be089b01542c78c1ec3b1fd4": "e8d3fc3e6412bc6abd306ba53698fd47",
".git/objects/c7/719384b30fbe80d4fd20f1faccd534a6c0b6ed": "1b9c3e463d57cd5d5c6528ec64786f79",
".git/objects/ca/a6ed7c79770383a1dd13760684acf2906f9820": "cd501e5fa56af79b16b55eb12e36a70d",
".git/objects/d4/15326128835466c96c968f06d6f4491eee42a3": "2f6cb19ac36fe53e08f2cbb0abfbb1e1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/2d81ddfb7d351afd50da5e5bb2617b0e4a4f33": "96fcf106d7101d0a7bb34d45ac0319c0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/f0a4d5a6e56519638e8c593d0f4bb8aeffcbde": "fd169a163ad4f3d71aed695f9eaded46",
".git/objects/da/095c2cd7f3c4c68eaf6cb15c8036ce7c76e072": "aebf0c1cfdbd7c08a5a141d81643d0d2",
".git/objects/db/0aa5c0314f5ade09872a7005542925d4402fcc": "1ec483bdefb21678f663f8a8fa0cf8aa",
".git/objects/dc/9514369ef6f36c6afa66ccb9b2be082fefa761": "0b573e03bb1341ff7aea89d3696a1f75",
".git/objects/e3/398c7956f314c9e528240a102371ca7e3d9175": "fa242c79c36d2f6de75aaac32bf50e56",
".git/objects/e3/7ba2f3d03b52065111f4b90f58ad5a3568f3bf": "52f59c5e7f72ee55c338a87f54abd868",
".git/objects/e7/6a2923e876fdd9c63c7a140bd802b3c23307c0": "e242b9ef57d8185c8b8de4afc52f05ec",
".git/objects/e8/80c8a272f9da39e8d40377d85d99dc9f686a9c": "c3dbb943f00c92c4e76b40e765391b9c",
".git/objects/e9/362aa4acd91a91808e807285ccc65e7357bbaa": "e0ff69b042eb41d671c662859eab16a6",
".git/objects/e9/8b563ca81b748f61b17af9ae744a926ab42d4c": "24c7f5487e973a3c95471a8a3ce7c8c6",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/ea/d70dbba9bcf5598ea89750f0e20607aa5f627c": "119ccffcfc928f2d95556291921cb078",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/39bd8c257ea176f29bf1fb8b9b7cadb0eee2c5": "2f0629101733c8b0d3c279e5aa861e39",
".git/objects/ee/5c403a7c3b0f119e80548876415aa80ab5f7ff": "b81b2e6601cb4ea9a7fa30ec205dda60",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f7/8b2224a81069f7910991ee5eaffac9127f63a2": "b40128e7ce4cf6ddcbfc53608ae1ba12",
".git/objects/fb/a2d306b2940ec8b11aa120f43314de69c8074a": "690b513d83b03ea06bb42ae6e2194d8b",
".git/ORIG_HEAD": "061e04f3a56bd2496686160ff1b286da",
".git/refs/heads/master": "5610a9cd9fd9d7a2688f1a9ae0e3da6a",
".git/refs/remotes/origin/imgbot": "852c6658adae24c11601061ed35b2a5a",
".git/refs/remotes/origin/master": "5610a9cd9fd9d7a2688f1a9ae0e3da6a",
"assets/AssetManifest.bin": "7cad306015c9cfff2d760429c9fc385a",
"assets/AssetManifest.bin.json": "2afd850fc153da8558cf9d096b70faeb",
"assets/AssetManifest.json": "2495238203b906fd2b671ac3e10ef355",
"assets/FontManifest.json": "f338ce80b0ebafabf5911de6ffe088f7",
"assets/fonts/MaterialIcons-Regular.otf": "8c92472b32ff5d8c6b37242c8a84c98c",
"assets/fonts/Sora/Sora-Bold.ttf": "59f1a10513024e9d080536ea7a744293",
"assets/fonts/Sora/Sora-Medium.ttf": "e3bb21ba620d898557d6537bbe0e9f10",
"assets/fonts/Sora/Sora-Regular.ttf": "e771c55096d16865a23c2795806fb01b",
"assets/fonts/Sora/Sora-VariableFont_wght.ttf": "66b18d93676517197641202e352191eb",
"assets/NOTICES": "cd4e0046422a2f5e624e5bcf57b6e161",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "299de8d48df894f0c0689a0b3adcff29",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "8e0a398c71394f6d68066909fee08d08",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "54596f8aaf2f57319bb3f2cc8bce5a2d",
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
"flutter_bootstrap.js": "77bc5f92a72a032a0d1650b180d0e125",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/man.png": "2f71619dfea6bd1c5da62e6d1593e4b6",
"index.html": "f3a3172c295b62e098417d6708083352",
"/": "f3a3172c295b62e098417d6708083352",
"main.dart.js": "74a78c45854f8899a9b0ac84590a3c02",
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
