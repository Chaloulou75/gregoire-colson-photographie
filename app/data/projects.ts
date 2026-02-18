export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    category: string;
    date: string;
    coverImage: string;
    images: string[];
}

export const categories = [
    "Tout",
    "Reportage",
    "Street Photo",
    "Portrait",
] as const;

const LR = "https://lightroom.adobe.com/v2c/spaces";

export const projects: Project[] = [
    {
        id: 1,
        title: "Piano",
        slug: "piano",
        description: "Reportage autour du piano, entre gestes et mélodies.",
        category: "Reportage",
        date: "2025-01-15",
        coverImage: `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/4ba2ff81c76f41f78f7381ca3f5e6fa3/revisions/8fce39f4abd14c72b6a2d7f34aa62790/renditions/7ddc300be942b16b3abce3006c1c2e8e`,
        images: [
            `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/4ba2ff81c76f41f78f7381ca3f5e6fa3/revisions/8fce39f4abd14c72b6a2d7f34aa62790/renditions/7ddc300be942b16b3abce3006c1c2e8e`,
            `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/2eb41cab7ac149548c2ab1c8654eabdd/revisions/c9cd30899f2747b2b7e7e7c7abc551db/renditions/542bf4782ac2f4f8d72c5f64676e569d`,
            `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/1fb8843663334aa5887cca7996d79bf4/revisions/877393fb095340b8b0c745474e8e8c4e/renditions/bf1e3787701fbc7b4741cf043178c1ae`,
            `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/384809136618444e9ba8440b552503c9/revisions/9f196873fdea42c39da4766ac69e7141/renditions/1237d6db781d3e2664a2ecc3b5e5dcaf`,
            `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/622a569c15ed4609986fbf4d4d6d68b2/revisions/675860033e9642649d20ec29fe002fa7/renditions/e8a060f8bd3527acaa0dc2716a3c3a79`,
            `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/ca4d8c56dc4f449395cd8e1ec8a1f820/revisions/eef360856caf494d96b5ce38dd78d580/renditions/9b6ba0e5a3e93be3ce1283629aaf498e`,
            `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/8cedea5cc6d3426997f999ebe9ee75db/revisions/3600e73c8d544be8bf7c350b3dcb87f2/renditions/bfadf2a4782051d2c1fc50850d59cb76`,
            `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/9375bb958a7f459287656b4d0de4e47e/revisions/3669bf9fa78a48bfaa985473e3fcc148/renditions/df5c7b5fca028efb738da26c4db7f805`,
            `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/755f5e69f3c04a23901352e57b6e2047/revisions/565c705ec9ae4866804c8a5fc7d879cd/renditions/24e1e85552a5edbaa30903009182585f`,
        ],
    },
    {
        id: 2,
        title: "30&40",
        slug: "30-40",
        description:
            "Reportage photographique capturant l'énergie et l'émotion.",
        category: "Reportage",
        date: "2025-01-10",
        coverImage: `${LR}/077562f98b2e421dadb5f513289df753/assets/ed63ebfd637f444db2354d5377d01a27/revisions/30b097d77857445a8b1f2d470e49bdff/renditions/eab1df587d110c756586eb94f064e821`,
        images: [
            `${LR}/077562f98b2e421dadb5f513289df753/assets/ed63ebfd637f444db2354d5377d01a27/revisions/30b097d77857445a8b1f2d470e49bdff/renditions/eab1df587d110c756586eb94f064e821`,
            `${LR}/077562f98b2e421dadb5f513289df753/assets/72872514f6ea49439da89a4c0905474b/revisions/e343d8322067483ca2a044e9f3631956/renditions/b13d51e85c5103b33c7e04d29aad9394`,
            `${LR}/077562f98b2e421dadb5f513289df753/assets/b4d24dabae6a456d8e6e7b031620c37c/revisions/ff63bd4741164a67b03a414f665e9abb/renditions/b2ddcb1652caf18edd1cf26efd88bb16`,
            `${LR}/077562f98b2e421dadb5f513289df753/assets/88e1d93b60c04d9a810405c9037456de/revisions/128600751d644645955d29daefad8e0e/renditions/e534b464eb98d955e8e4231a70852403`,
            `${LR}/077562f98b2e421dadb5f513289df753/assets/b2e91bd2486048708fab7fcbfa13d676/revisions/6902a726d59946249e29010aa547ef6a/renditions/4b5f89c05db71ef3d437f84e9aed8e0f`,
            `${LR}/077562f98b2e421dadb5f513289df753/assets/9348af30baef47b2a98f3ff3da9a4dcf/revisions/e8f1ceedc1a4454d8d85bae37fc96214/renditions/f6c1d240c391cbd7cf707ff266b2c152`,
            `${LR}/077562f98b2e421dadb5f513289df753/assets/8710881fed31402fb2ca08b6e956ba6b/revisions/8f3470324c77473da5d93c274e6db3df/renditions/42d99cf222a9511968ebcfa026057110`,
            `${LR}/077562f98b2e421dadb5f513289df753/assets/abe8208fcf60462c8c207bfce98c0fd0/revisions/fa7d75461eda88660bd11b0b94f4782a/renditions/7731fea1a730dc977eb94972a2b22265`,
            `${LR}/077562f98b2e421dadb5f513289df753/assets/c238ce32bec043a7b76adcc2bf8daa51/revisions/611d69328c9f4720abae41848aa93545/renditions/e7bc5e0c9295fceb7cf0eaf708cfb50c`,
        ],
    },
    {
        id: 3,
        title: "2025 Street",
        slug: "2025-street",
        description: "Scènes de rue, instants volés au quotidien.",
        category: "Street Photo",
        date: "2025-01-05",
        coverImage: `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/c7d7deca0cdb45d7b95c00bf78821a9a/revisions/0158853d8e0547a4a0957e4323f30619/renditions/5b76648f0d2860b7ed61b373cef57f0c`,
        images: [
            `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/c7d7deca0cdb45d7b95c00bf78821a9a/revisions/0158853d8e0547a4a0957e4323f30619/renditions/5b76648f0d2860b7ed61b373cef57f0c`,
            `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/83cdc975dc234ed0adf02e1892aa25c9/revisions/85ff8dd72c964112a92dae7a39b333f9/renditions/a8f6e9aceec409e18a3f45c30f1b22f1`,
            `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/92ae9e571f284eb58e44d4491daa9a3f/revisions/c4eff5fa84c04806ab9f2da420f62e56/renditions/8be9a7daf5809ac5de7da2d898357183`,
            `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/fd82b02e95cf478da146419fe9eb4cfb/revisions/c38ade7f03664a74b0691d395bd40bc1/renditions/0e02bd20dea73673a8eeeafc67edb068`,
            `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/19fdb8019814477488fe670b9f4341dd/revisions/7dbd109ce1e046538cef47e27ac723f7/renditions/9bef3d2af1ba9b487964f5265e0dea4a`,
            `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/acc9de607fe148da903034ea13904bc2/revisions/094b146fc2cd46769c8f7ab929442229/renditions/1e4a966fe6372b05d505fb857d9799ba`,
            `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/9be403c3e95844ce9c9d4cc4c07a1579/revisions/ab1f332ce4154328851f82dead2f8436/renditions/e4add1b4b013174c24b44306fbaa01fa`,
            `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/20073fbc936b48a490e858883cf9f55e/revisions/e9dd9536f50341b9a588ddc3c26e2998/renditions/da229bde313e50b891188750957f4d6d`,
            `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/3e8bde95161645e5bb68431fedd1d9c6/revisions/e5c6c1f59b6d4fc1bd2a8ef72b7bcab2/renditions/c26667cdc7565627139d7618886415e1`,
        ],
    },
];
