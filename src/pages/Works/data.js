export const categories = ["All", "Anime", "Movie", "Web", "Photography", "Drawing", "Private Work"];
const BASE_URL = import.meta.env.BASE_URL;

//id, slug, title, categories, thumbnail, description, type, (youtubeId/images), featuredWork
//yg mau ditaroh di website: 
//Date, Category, Type?, Credits, DESCRIPTION, ref: kaitonote
    // {
    //     id: "",
    //     slug: "", 
    //     title: "",
    //     categories: [""],
    //     thumbnail: `${BASE_URL}thumbnail/galaxy.png`,
    //     description: {
    //         summary: "Short intro.",
    //         details: "Full explanation",
    //         challenges: "What i learned"
    //     },
    //     type: "video",
    //     youtubeId: "",
    //     images: [
    //     `${BASE_URL}images/`,
    //     `${BASE_URL}images/`,
    //     ],
    //     duration: "Jan 2025 - Feb 2025",
    //     tech: ["React", "Tailwind"],
    //     featuredWork: false
    // },
export const projects = [
    {
        id: "show-reel-2025",
        slug: "show-reel-2025", 
        title: "Show REEL 2025",
        categories: ["Movie", "Private Work"],
        type: "video",
        youtubeId: "23TEM7Ag0pY", //belum bisa masukin soalnya belum selesai diedit hehe
        thumbnail: `${BASE_URL}thumbnail/thumbnail-showreel.png`,
        description: {
            summary: "このショーリールは、今年制作したモーショングラフィックス、コンポジット、その他の作品をまとめたものです。学生としてまだ学んでいる途中ですが、制作を重ねる中で、自分らしい表現や好きなメディアが少しずつ見えてきました。", 
        },
            duration: "Nov 2025",
        tech: ["After Effects", "Adobe Premiere"],
        featuredWork: true
    },
    {
        id: "shrimp",
        slug: "shrimp", 
        title: "shrimp (motion graphics)",
        categories: ["video"],
        type: "video",
        youtubeId: "SpWEpPBRnJw", 
        thumbnail: `${BASE_URL}thumbnail/thumbnail-shrimp.png`,
        description: {
           summary: "加熱によって青みを帯びた殻が赤へと移り変わる、その繊細な色の変化に惹かれました。その印象を、形と色のバランスで視覚的に表現しています。", 
        },
        duration: "Nov 2025",
        tech: ["After Effects"],
        featuredWork: false
    },
    {
        id: "unoki-bon-odori",
        slug: "unoki-bon-odori", 
        title: "Bon Odori in Unoki",
        categories: ["Movie", "Private Work"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-bonodori.png`,
        description: {
            summary: "夜のあかりやお祭りの雰囲気、流れる日本の伝統音楽、浴衣姿の人々、そして笑顔に包まれたとき、日本で暮らしていることを改めて実感しました。",
            details: "その空気感を残したくて、思わず撮影しました。 編集では選んだ音楽に合わせながら、踊る人々の温かさや、屋台で交わされるやり取り、子どもたちの笑顔など、人と人との「つながり」を感じられる瞬間を丁寧に切り取りました。",
            challenges: "今回の作品では、映像のリズムや空気感を意識して編集しました。特に踊る人々の動きや音楽のテンポに合わせたカット割りにこだわり、自然な笑顔ややり取りを引き立てる工夫をしました。 また、映像を通して「つながり」を表現するため、どの瞬間を切り取るか、色味や光のバランスにも注意しました。制作を通して、光や構図、演出で空気感や情緒を伝える楽しさを改めて感じ、今後はさらに映画的な表現を探求していきたいと思っています。"
        },
        type: "video",
        youtubeId: "-_MT3VBpy_o",
        images: [
        `${BASE_URL}images/unoki/lampion.png`,
        `${BASE_URL}images/unoki/panggung.png`,
        ],
        duration: "24 Jul 2025",
        tech: ["After Effects", "Shoot in Iphone 12"],
        featuredWork: false
    },
    {
        id: "sakanadon-app",
        slug: "sakanadon-app", 
        title: "Sakana Don",
        categories: ["Web","Private Work"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-sakanadon.png`,
        description: {
            summary: "このゲームは、自分だけの海鮮丼を作って楽しめるウェブアプリです。日本の食文化を知らない人でも、気軽に海鮮丼を体験できるように作りました。学びながら楽しめる要素もあり、世界中の人に「日本の美味しい体験」を届けたいと思っています。",
            details: "私自身の経験がきっかけです。日本に来たばかりの頃、生魚を食べるのがとても苦手で、初めの一年はほとんど食べませんでした。しかしある日、友人に背中を押されて挑戦してみた海鮮丼がとても美味しく、気づけばポイントカードを集めるほどお店に通うようになりました。その楽しい思い出を、このゲームに込めたいと思いました。",
            challenges: "プログラミング学習の一環として制作した作品ですが、まだ完成版ではありません。今後も学びを深め、機能を追加してアップデートしていく予定です。"
        },
        type: "image",
        liveUrl: "https://patriciaindry.github.io/sakanadon/",
        youtubeId: "",
        images: [
        `${BASE_URL}images/sakanadon/1.png`,
        `${BASE_URL}images/sakanadon/2.png`,
        `${BASE_URL}images/sakanadon/3.png`,
        `${BASE_URL}images/sakanadon/4.png`,
        `${BASE_URL}images/sakanadon/5.png`,
        `${BASE_URL}images/sakanadon/6.png`,
        `${BASE_URL}images/sakanadon/7.png`
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["Photoshop", "IbisPaintX", "HTML", "CSS", "Figma", "React", "JavaScript"],
        featuredWork: true
    },
    {
        id: "cherish-my-love-illit",
        slug: "cherish-my-love-illit", 
        title: "Cherish (My Love) - ILLIT (Unofficial MV)",
        categories: ["Movie", "Private Work"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-cherish.png`,
        description: {
            summary: "この作品は友人が企画・監督した自主制作で、私はモデルとして参加しました。彼女が好きなK-POP楽曲を題材に、自身の解釈を込めて映像化するという挑戦的なプロジェクトで、私は衣装モデルに加えて振り付けも短期間で習得する必要がありました。",
            details: "2月の真冬に行った撮影は彼女の寮の部屋を中心に行い、メイクや小道具の準備から撮影まで全て二人だけで手掛けました。さらに一部は屋外でも撮影を行い、寒さに耐えながら大変でしたが、忘れられない経験となりました。モデルとして出演するだけでなく、演出やカメラワークの提案を行い、一部シーンではストップモーションを用いた編集にも携わりました。",
            challenges: "制作を通じて多くを学び、楽しくも挑戦的で充実した作品となりました。"
        },
        type: "video",
        // youtubeId: "Q3DHeM-1SG0",
        images: [
        `${BASE_URL}images/cherish/cherishtitle.png`,
        `${BASE_URL}images/cherish/cherish-step1.png`,
        `${BASE_URL}images/cherish/cherish-step2.png`,
        `${BASE_URL}images/cherish/cherish-step3.png`,
        `${BASE_URL}images/cherish/cherish-step4.png`,
        `${BASE_URL}images/cherish/cherish-step5.png`,
        `${BASE_URL}images/cherish/cherish-step5-3.png`,
        `${BASE_URL}images/cherish/cherish-image.png`,
        `${BASE_URL}images/cherish/cherish-stopmotion2.png`,
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects", "Capcut", "Shoot on Iphone"],
        featuredWork: true
    },
    {
        id: "tenshi-ni-nante-naranaide-mv",
        slug: "tenshi-ni-nante-naranaide-mv", 
        title: "天使になんてならないで - MV Collab Project",
        categories: ["Movie"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-mvtenshi.png`,
        description: {
            summary: "専門学校でのミュージックカレッジとの学科間コラボレーションとして、ミュージックビデオ(MV)を制作しました。制作進行として、スケジュール管理や撮影準備、チーム間の調整を行い、必要に応じて撮影や編集にも関わりました。チーム全体をリードし、円滑な制作進行と完成度の向上を図りました。",
            details: "本プロジェクトは放課後に行うものであったため、限られた時間の中で進行管理やメンバー間の調整が求められました。特に、忙しい先輩メンバーとのやり取りを円滑に進めることや、留学生として異なる文化や言語環境の中でのコミュニケーションにも配慮する必要があり、チームワークの重要性を改めて学びました。",
            challenges: "また、歌詞の作者の意図や背景が提示されていなかったため、自分たちで解釈を行い、キャラクターデザインチームと協力して登場人物や背景ストーリーを考案する必要がありました。この過程では、各工程の締め切り設定や調整も難しく、制作管理力と柔軟な対応力を養う経験となりました。"
        },
        type: "video",
        youtubeId: "_G5tK81MvuA",
        images: [

        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects", ""],
        featuredWork: false
    },
    // {
    //     id: "portfolio-website",
    //     slug: "portfolio-web", 
    //     title: "My Portfolio Page",
    //     categories: ["Web"],
    //     thumbnail: "",
    //     description: "I made a website to store my portfolio", 
    //     featuredWork: false
    // },
    {
        id: "anime-title-design",
        slug: "anime-title-design", 
        title: "PV Animation Title Design",
        categories: ["Anime"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-monokuro.png`,
        description: {
            summary: "一年生終了制作として取り組んだチームアニメーション作品のタイトルデザインです。 「彩」という言葉の持つ意味を視覚的に表現することを意識し、文字の分解と再構成をベースにした動きを制作しました。",
            details: "",
            challenges: "After Effectsでパスを調整しながら、一文字ごとに丁寧に演出しています。"
        },
        type: "video",
        youtubeId: "QTlTiIIPBR4",
        images: [
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects"],
        featuredWork: false
    },
    {
        id: "monokuro-hikaku",
        slug: "monokuro-hikaku", 
        title: "PV Animation Compositing",
        categories: ["Anime"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-monokuro-hikaku.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "cIBs3cgyv88",
        images: [
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects"],
        featuredWork: false
    },
    {
        id: "diamond-mograph",
        slug: "diamond-mograph", 
        title: "Diamond",
        categories: ["Anime"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-diamond.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "",
        images: [
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects"],
        featuredWork: false
    },
    {
        id: "beach",
        slug: "beach", 
        title: "Beach",
        categories: ["Anime"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-beach.png`,
        description: {
            summary: "Beach",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "HL8B7PxEdmA",
        images: [
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects"],
        featuredWork: false
    },
    {
        id: "hud-screen",
        slug: "hud-screen", 
        title: "HUD Screen Warning",
        categories: ["Anime"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-hud.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "6x-Cgsb0Q20",
        images: [
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects"],
        featuredWork: false
    },
    {
        id: "sakura",
        slug: "sakura", 
        title: "Sakura",
        categories: ["Anime"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-sakura.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "r7PyRrNh14Q",
        images: [
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects"],
        featuredWork: false
    },
    {
        id: "retro-brick",
        slug: "retro-brick", 
        title: "Retro Style Brick Game",
        categories: ["Anime"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-brick.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "KmsPol036F8",
        images: [
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects"],
        featuredWork: false
    },
    {
        id: "fireworks",
        slug: "fireworks", 
        title: "Fireworks",
        categories: ["Anime"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-fireworks.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "Qg2klwVF19E",
        images: [
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects"],
        featuredWork: false
    },
    {
        id: "space-music",
        slug: "space-music", 
        title: "Space Motion",
        categories: ["Anime"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-space.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "",
        images: [
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects"],
        featuredWork: false
    },
   {
        id: "flowers",
        slug: "flowers", 
        title: "Flowers in Tokyo",
        categories: ["Photography"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-flowers.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "",
        images: [
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["After Effects"],
        featuredWork: false
    },
    //---------------------START OF DESSAN--------------------
    {
        id: "figurine-gundam",
        slug: "figurine-gundam", 
        title: "ガンダム",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-gundam.png`,
        description: {
            summary: "デッサンの授業で、フィギュアーを描くといった課題で、ガンダムをモチーフとして選び、１６時間ぐらいで描き上げました。",
            details: "特に、面と面がつながるパーツが多く、とても勉強になったデッサンの一つです。"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/gundam.JPG`
        ],
        duration: "Feb 2025 | 16 hours",
        tech: ["2H - 4B", "Paper Size B4"],
        featuredWork: true
    },
    {
        id: "dessan-vespa",
        slug: "dessan-vespa", 
        title: "父のスクータと子猫",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-vespa.png`,
        description: {
            summary: "生き物である猫の柔らかさや動きのある形とは異なり、バイクは金属の質感や構造が明確で、描き分けがとても楽しいモチーフでした。",
            details: "異なる質感を観察し、表現する良い練習になりました。",
            challenges: ""
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/vespa.png`
        ],
        duration: "Feb 2025 | 12 hours",
        tech: ["2H - 4B", "Paper Size B4"],
        featuredWork: true
    },
    {
        id: "dessan-landscape",
        slug: "dessan-landscape", 
        title: "風景(校舎の前)",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-fuukei.png`,
        description: {
            summary: "初めて風景を題材に本格的に取り組んだ作品です。遠近感を意識しながら、実際の視点では小さく見える要素を大きく描いてしまう癖と向き合い、サイズのバランスを丁寧に調整しました。",
            details: "また、人物や通り過ぎる電車をあえて配置することで、静かな景観の中にわずかな動きと生活感を加えることを試みました。",
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/fuukei.JPG`
        ],
        duration: "May 2025 | 16 hours",
        tech: ["2H - 4B", "Paper Size B4"],
        featuredWork: true
    },
    {
        id: "dessan-still05",
        slug: "dessan-still05", 
        title: "静物デッサン",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-seibutsu05.png`,
        description: {
            summary: "",
            details: ""
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/seibutsu05.jpg`
        ],
        duration: "Oct 2025 | 14 hours",
        tech: ["2H - 4B", "Paper Size B4"],
        featuredWork: false
    },
        {
        id: "dessan-still04",
        slug: "dessan-still04", 
        title: "静物デッサン",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-seibutsu04.png`,
        description: {
            summary: "金属パイプ、プラスチック製ボール、ワインボトル、格子柄のテーブルクロスを配置した静物を描きました。素材ごとに光沢、透明感、硬さ、布の柔らかさなど質感が大きく異なるため、それぞれの特徴をどう描き分けるかを試しながら制作しました。",
            details: "また、光の当たり方が素材によって異なることを観察し、その変化を表現することが大きな学びとなりました。"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/seibutsu04.JPG`
        ],
        duration: "Jun 2025 | 14 hours",
        tech: ["2H - 4B", "Paper Size B4"],
        featuredWork: true
    },
    // {
    //     id: "dessan-still01",
    //     slug: "dessan-still01", 
    //     title: "Still Life Drawing",
    //     categories: ["Drawing"],
    //     thumbnail: `${BASE_URL}thumbnail/thumbnail-seibutsu02.png`,
    //     description: {
    //         summary: "Short intro.",
    //         details: "Full explanation",
    //         challenges: "What i learned"
    //     },
    //     type: "video",
    //     youtubeId: "",
    //     images: [
    //     `${BASE_URL}images/dessan/seibutsu02.jpg`
    //     ],
    //     duration: "Sep 2025 | 5 hours",
    //     tech: ["2H - 4B", "Paper Size B4"],
    //     featuredWork: false
    // },
           {
        id: "human-figure",
        slug: "human-figure", 
        title: "人物デッサン",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-jinbutsu.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/jinbutsu.jpg`
        ],
        duration: "Aug 2025 | 6 hours",
        tech: ["2H - 4B", "Paper Size B3"],
        featuredWork: false
    },
       {
        id: "dessan-plaster04",
        slug: "dessan-plaster04", 
        title: "ブルータス胸像",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-sekkouzou05.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/sekkouzou05.jpg`
        ],
        duration: "Aug 2025 | 6 hours",
        tech: ["2H - 4B", "木炭紙"],
        featuredWork: false
    },
        {
        id: "dessan-plaster02",
        slug: "dessan-plaster02", 
        title: "青年マルス首像",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-sekkouzou02.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/sekkouzou02.jpg`
        ],
        duration: "Oct 2024 | 8 hours",
        tech: ["2H - 4B", "Paper Size B4"],
        featuredWork: false
    },
    {
        id: "dessan-plaster01",
        slug: "dessan-plaster01", 
        title: "古代ヴィーナス首像",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-sekkouzou01.png`,
        description: {
            summary: "",
            details: "",
            challenges: ""
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/sekkouzou01_.png`
        ],
        duration: "Sep 2024 | 7 hours",
        tech: ["2H - 4B", "Paper Size B4"],
        featuredWork: false
    },

 
];