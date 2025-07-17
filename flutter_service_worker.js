'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "58b343d1435397ba4478562668d8640e",
".git/config": "72010a3d66b6a343b476bb677bddd726",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4dda7aef5a44bdabe6a7103b5a7eaa56",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "439be195002dce7193b3ca7bf6469f36",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6068908c624127f8a4ad006cd90db41f",
".git/logs/refs/heads/main": "c44282533b598284922fc7ad0e7823e3",
".git/logs/refs/remotes/origin/HEAD": "e99699c3dedab1416447287a0c06aeeb",
".git/logs/refs/remotes/origin/main": "7e067573e530177188090af8d317ba03",
".git/logs/refs/remotes/origin/master": "91e1b4cd63edcbba0fa85a29de110c71",
".git/objects/01/d2ddfc267483299fafb2981cc0f0f09a16f075": "59271b249d7d66006671d7c71da78e4e",
".git/objects/02/66191689986f394ade7c4cf4a7675f8b4f10a4": "f8a18dcc17b2be87f2322212757a8cc2",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/07/c5691dbd91b2be5a9a1fef47014898c2fb28d0": "45b237f4f9d51c5a0dbce71e0d5f135e",
".git/objects/08/cc431374bb3b2fb9668a1fddd9c7fe05483f95": "74fa107656aea441ce1bf34e8bf7d1ea",
".git/objects/09/fb01bcd8c3151598556d5125bf33b2f0e6e6db": "4adbe7f755e470df1eb9ba35e6d51ce6",
".git/objects/0a/1046ff4bd122d10b46a182e427f632fb5c086d": "6257e9b47aab18bda01da159c9ef56db",
".git/objects/0c/a43a89089d1b54292d2cb409e1aeec9ce38db2": "08a31d9c936a47546d2cd670f093a31c",
".git/objects/0d/cc23521ba41c4c3d342a2a143659dc3784950a": "7f7e3ef52e3c3d8dcb46347a363820b8",
".git/objects/11/3bd2cd6868496bc8196a329dad8da76c55a8f3": "1b3350e33ba21a1cb4602c4880a346b9",
".git/objects/12/ce1b5e03a7893e8fa5652cd8410ca06947a3af": "d89f182c082253dc571b98b3bbb800e9",
".git/objects/14/de64313eb5b103cd98a8d57aef56d761517c6c": "169a8995b9b290d177c28479a3129c23",
".git/objects/23/1cf38756426a9d697d420c3b6ccb6b1fc317a7": "086df5e04d19ce48969f25a71211c1aa",
".git/objects/23/49f8f1c3773e962c6cbb19693aba7d482f04bf": "63db95f1dd63d6deb70d212820419b0b",
".git/objects/23/5c37330af0dd34a776094d6f4b55c269eb5835": "ac6bbd90c96e3b969100f528763e136e",
".git/objects/23/c9ec4bf361d5111545753641e4f22b7aa25500": "39053e22f308aeb0fb91b59e376f4b37",
".git/objects/26/98f03afedd3be2d2a80a1de66a4df879b3cafc": "306cc997686858a4bb8d4bec8dde71be",
".git/objects/27/ca94e71da5ca393c3a3c180bf124cfd3c7b220": "e62a802ae074493710fa2af1f5aa7974",
".git/objects/2c/5586893e1862c05ade893489177cb5aa09ab6a": "4dfb367d28f8219d7c4fa25aec9e811b",
".git/objects/2f/b244cdf267fcaf7f7d2f8670b3808ad00f2b87": "9630fd298d98a81dd10efe11edf32c0b",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/6a88d6da347fbda31a254c1ef643760ce281d4": "552f8cae6b7c81ac45ad2cd296a837a1",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/7493b4147213f06e03e1970605c8a062cf5e3f": "ce56b55845028226b8e335f46abe8341",
".git/objects/37/4e57cce3461331b34f2c62416bf3f6d5cb83cf": "047e56b5ffa905e0160d1f73ec7e1a7b",
".git/objects/38/8b33fab305f9d21242ec14a21becaa1c89fe7f": "05e3ed504bd784189584161c3a527369",
".git/objects/39/b96aa36a0c00ebdfb81ec53c243f08212daa0c": "9c55561cb664a9750ccf4ff001ee5c06",
".git/objects/3b/f424454a052398c70a4641f83ee44a55f86b1b": "b536fdf34e65d9a6409f88ffd9b311cf",
".git/objects/3e/9e5cb4615153401a66ce3612dddd0e5b68cf11": "493a385466b98099b4d866ebbfa21deb",
".git/objects/40/0f40ee6d7fb1d8a47db27fe12800fdf2b849c7": "492469b99108f07f69a5ad2ada712013",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/45/3541297d65def31ad4d3f1644aaf1d033ff1ed": "98f1f540aa2e1fa3d65bdfa3d023dc69",
".git/objects/49/3d08595ab38026485b984b6be302a18c7b3f03": "ef9bef2e5c3832cfeafd417dff174bc0",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/448f5b41a91c7e214991cfacc1f92a6df819af": "26ad9c8019586160f685181d8cc551ee",
".git/objects/53/57b8abe77095d1c4e85824f924bbe5160f1c1b": "40ea9b4dc97b1149239388bfbbe7987f",
".git/objects/57/14497c24524321722a37e0cf31cd227889dec0": "3917a518681ac016cbe8dfd1bfdd8d8c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/103297e3162780fb565d642904d623555fac99": "77bd27750ea59bebbccbc38de794e047",
".git/objects/59/d2275adcc84601888fe957150252b825a99487": "d0041a23003c8affbdea9aa584b3aabc",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5a/3e9b0bd62dc561976d3b8f0c55527a98d2e691": "dfa3189575d7765d96f2dbaa61bded76",
".git/objects/5f/ae40a2e76016cf270f42186860f66ea7ca63ad": "67771b59e83b1f0f14ac7f8dd2dcc6fe",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/3355b792dbe2edb18b66653e5a46f58638f91a": "aacd8a91d3bc19b810c39064ef990f8a",
".git/objects/63/a7be467ce6e4c0845f5552ffe55614b098558e": "29c6c40aaaf69de81a062be1117d5b81",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6f/6d5d39eab335ab8630690262d7c16385cf6c24": "4171465de86bbf6f7623f212058ac866",
".git/objects/7d/748fb6a29addf98dbf0c61aa68340636b3d4c5": "9bbc989672a591be353b02bf62a9c5a2",
".git/objects/7d/9bce003608388dafa8d5d2a40570602be3300a": "92a9f505d363e34cce1d3aa34541415a",
".git/objects/82/bc86afaa6a33c8b97c0263bc75e119390b3e11": "951b9bbd6eaa12f61a039da8cf00f642",
".git/objects/83/07306cdd74ca4cd042c783047d9b4da1bf94b4": "ba18c74c4662c0b9c4826a1b52e6dee4",
".git/objects/85/cf70009915b4f7e9692a341de6b586c4350f45": "05bcf2f60af54198a731139b590d6da1",
".git/objects/86/39ef309dc1b69fcf60895a880b0670890ce3c4": "2ae7a554342ff675031cfad19c439c3b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e40f55356030f66e52904ec50e9a3865593ab7": "24541ee62d20213644ee7f1645c103dd",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/082c8de090865264d37594e396c4d6c0099fe4": "5117224fcb2873172ee6cba59c00a7ee",
".git/objects/8c/a8e73004450ff9329bff45658d748b5a440d50": "7625cb6a249ed868322c6ec0ec84c5b2",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/95/cfb8fbcda8552f3ec3295b8ec394bf31a70661": "a445db053a955dfb3e3e28d797484c29",
".git/objects/9c/9b384cf11fa70f97577f120fc7c818ea66aebc": "fe38f97552e91468fb1821c4d8df50d3",
".git/objects/9d/02a84439e5de8e26280221f6bb71b10d43cbff": "70defca8ad55e2bbe9fb0e13eefdb4f5",
".git/objects/9e/4751457fbb95a5dd0be062926a2a6158f37ebe": "d760d308909ef7ebc173654b4677e52d",
".git/objects/9f/6f1bf8a5ba06e6ff1b859568fb5f6cd35eb5f4": "24aeb88f7c56d5a0f3806e94dd12c5a6",
".git/objects/a0/5d72d0ebf9c0436244927cdf2a43ac3560a700": "bfbb326617232fc315ebd73688b961bb",
".git/objects/a5/89c99dd7d30328d05715bbe6676b4a6671d507": "82918730243776d62662da88abdcae6c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/117c8dd595e90d70e8db54552f6fce468d904b": "20c9d1b31c2b319fa68895acc6d09779",
".git/objects/a7/d5cfb32a105cf2b8d503cc02ded3daf91863c8": "54d2b03b19bf4ef0799408309bfefba2",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/27225331029331d8adea7c7962ef95d4b68356": "fe9966db4eb06980dffe96bf020a48bf",
".git/objects/aa/36f6102424798136c2822e2b365469c05d08d1": "f4b998a7a1dc23eb20134b27efb4ac16",
".git/objects/af/0599eb48b29195f328dcde1a173e6150205d10": "1ca1158824ef428be566f820fcb23027",
".git/objects/af/707872e5d829fd36550c802e2fa94be3304e63": "72102fba93620f1a3e8f9fdc3ac4b61c",
".git/objects/af/dd858a40a0b9790578d0aaf73f15ac6d1ce0bc": "f3f5023ca360104787b0270f3e1d30f7",
".git/objects/b0/6aed37ba636aa1bd237bc456b6a0c1402296e1": "b46af478a532eaf79073af67eb127310",
".git/objects/b0/735880be6eff16f94f70768e25f2170f72da56": "50db0b72ea49ef03231e843774f6ca31",
".git/objects/b3/a723adff4862994a880fb1d506ff9127826e37": "01c945f5461c9eb926bc28a9d803b025",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ef5fe5f2105b4722e8aff65eeb0ede815c7bb7": "a181ccb4f5255fbd53ba703f434e50f3",
".git/objects/bb/96b1b866f17942632281ecea47dc811a9246d4": "c6c1c07545471e17b21960ef2c040127",
".git/objects/bb/96ca7564b17a9725c8bb692c1077387d1bc5c2": "3e9a989965221aee9d7cdb38e1344a53",
".git/objects/bc/7f79c01c3a0b87697a1cbe4b729d7e93056611": "210dd8aa08ace42c834fe31205f0a222",
".git/objects/bf/3ac664070979fdaff1613e02a10c42211082af": "7703e938fea1531b2ce9d9ce0ea4dfb0",
".git/objects/c1/7f422952d5ffb07dde99c28dfbee94603a0af6": "bc83b2ccc45cc571361c864d82e45fe1",
".git/objects/c7/cd677dedd79ec3b2c2dc3f94f6983a948aaa05": "46c06d5c50c0775cba5c0465bc517b49",
".git/objects/c8/2dca75d45063a31b5d621f4a948142bdf64970": "96f13101d44de1de3f2b0f84e5d9b590",
".git/objects/cd/b2d74880b66d2c7eb57540309899a34ac1f32a": "ac21bca0f038d65df5bdb0b5e9c386c2",
".git/objects/cf/b0983d2454748b100bff884459fdd6ae6cfc08": "9116716aad9ab903bd85506cfb2f9827",
".git/objects/d0/d328afa5869b3e87522c012577f82ee1e7f1b6": "58a82adfc94d6d0100d335ebb267427d",
".git/objects/d3/1937966d2a838042b67b2e25243eca6f3b9e16": "401686582c4c6fa3db5f6c7ec3bbecd3",
".git/objects/d3/f68671031cbd1f2f382ebf67973b42f35e1989": "cd4d1d3de2cdce9226f67c98a2aaee42",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/f1e8ce1ad4134bb1c0033d8867a97799588d17": "d610aa1f5d0437bddc3a8b64609239d3",
".git/objects/d6/0fa7749f8fc13639edcf34eea5b8c8250460e7": "af61f9949104cf74798beffca468e240",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a0f1e8775ccf73b554b540245f51803981ecd1": "9ad3eaf784e37402467a6021c0cd0204",
".git/objects/d8/cfdf59f5515779169aa1b7e022bcbfd8e2958f": "574c960773f49ae3194d4a01b76875d3",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e0/741656e3878ba989b6a7a72c80b2a7100ced72": "7b3f5d3719a745d7e3ac6bc37dde2ec8",
".git/objects/e0/e124a0550d26b3cab4d6a6cc99e010ed087057": "81f734d0469ddc87888db96cc4eefc12",
".git/objects/e1/cc5ae23fef7e5ecca94abce11b691cbc81883c": "126742c84b7cb41aea33534a9e30308e",
".git/objects/e5/ce197ec9bbf43cb607dd434494d47937945665": "eaf6c67a52e5971d0d70a6c13819b68b",
".git/objects/e6/8c71a9836660277cc284173fb086d8b540ce71": "741ccf4ecbecfb6ac36ae1864f39bc0e",
".git/objects/e7/aff4d021bcdb5ba4d3d2bb8b40d3791c303035": "e982b5692fa4cbdf622476eb0a0cb5cf",
".git/objects/ea/76e99cf3ee2e905f792de16e33e0dbfc02bcd4": "a9dc10e53fb3af756d2cf89603c7674f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/55bd894c295d718d113e754a1dd6366f328f04": "0feb622f6be93d4a364fbb5437556077",
".git/objects/ef/23f80a48f0aff4a72c5f4ea74f127e6d521d8e": "c9138e2eacaf589d4d8293707e59f8ad",
".git/objects/ef/2947d346b36c7d0414f0cdb6be410a5bfefddb": "3c1e1cfeba7d0cfe13ec85fdc5660df7",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d0c6309819b284ce60822517717d6c16d8b67c": "54a16869f4c5020858ad44be48e1c71e",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/ef942a0f431c2406d4fd63500304a6245ca419": "8d7f98ccdc6abcd22199c0a9cd848e34",
".git/objects/f7/7c6a3d7b4438ce1d1c67e7f5b250a6e4750b9b": "4d48ad5a09db6618461d06a8237f627c",
".git/objects/fe/4e60d998abe9134c2bfb503da6074f75ba0a56": "cc70e837dad4720dd109fb301cc23704",
".git/objects/ff/07c65ea99cd5fd0bdbd046c454a01c5d72b5da": "a99c59343a625835ccbafa587ef1b14f",
".git/objects/pack/pack-5ff505eabd71ae0a0d6fb09b9d946ebcc3d01e97.idx": "c52ef5fc8a203200cd3c1dae11252f75",
".git/objects/pack/pack-5ff505eabd71ae0a0d6fb09b9d946ebcc3d01e97.pack": "8e753bfabaf1572a763801e1f3b64d20",
".git/objects/pack/pack-5ff505eabd71ae0a0d6fb09b9d946ebcc3d01e97.rev": "0198a9e00c0a2fbda9334e1b65a46b3b",
".git/ORIG_HEAD": "742aa75f850c1392208789cfa18b244c",
".git/refs/heads/main": "27376f772c3dc757a52c57d3b69a9a98",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "27376f772c3dc757a52c57d3b69a9a98",
".git/refs/remotes/origin/master": "52973adc8d3e4351aafce1fdf845274a",
"assets/Aliante/ET107.jpg": "ebb58df3410472d4fdd62b0a73a8c3c3",
"assets/Aliante/NewBatch1%20Air%20Temperature.htm": "0d71c4efb9e74ca3dac4c7c800b95a8d",
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
"assets/Aliante/NewBatch1%20Evapotranspiration.htm": "ba24010b76508b18bed2ac98d7e6761b",
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
"assets/AssetManifest.bin": "dd7486e70a2aed85976b716733dbf06e",
"assets/AssetManifest.bin.json": "896cd4632132243475a234b4fa19605d",
"assets/AssetManifest.json": "2b68f4c76fb7a21ea23366f46cf88b3d",
"assets/background.jpg": "7001adbf7f00a25eb6eebb80341867e5",
"assets/FontManifest.json": "6f5744f40eb3064f030b4e03a74f67a5",
"assets/fonts/MaterialIcons-Regular.otf": "39d0ade3852dd409419ac44d08dc494b",
"assets/nevm_logo.png": "be944d98ba66200c399603d6c3009fe9",
"assets/NOTICES": "5de64ab63a58b1385e87a75b22198f19",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/red_rock.jpg": "07bd3afed2ac5a25f940180066c948dc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/assets/background.jpg": "7001adbf7f00a25eb6eebb80341867e5",
"assets/web/assets/nevm_logo.png": "be944d98ba66200c399603d6c3009fe9",
"assets/web/assets/red_rock.jpg": "07bd3afed2ac5a25f940180066c948dc",
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
"flutter_bootstrap.js": "426e4a5b3677d1800207cecac6e7b178",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dea81b0f10d8f657938328f6161b92dc",
"/": "dea81b0f10d8f657938328f6161b92dc",
"main-icon.png": "c1e436b1c29204d242c34a8417f01c11",
"main.dart.js": "b9b7ab2cd4a6f2ce865964aef9df2035",
"manifest.json": "bd94090ace5ca74ef14427f7546fe9bb",
"version.json": "db4c178fd11523ba8c2fcbc92dc81c53",
"_redirects": "6a02faf7ea2a9584134ffe15779a0e44"};
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
