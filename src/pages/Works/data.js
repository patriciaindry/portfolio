export const categories = ["All", "Anime", "Movie", "Web", "Photography", "Drawing", "Private Work"];
const BASE_URL = import.meta.env.BASE_URL;

//id, slug, title, categories, thumbnail, description, type, (youtubeId/images), featuredWork
//yg mau ditaroh di website: 
//Date, Category, Type?, Credits, DESCRIPTION, ref: kaitonote
export const projects = [
    {
        id: "",
        slug: "", 
        title: "",
        categories: [""],
        thumbnail: `${BASE_URL}thumbnail/galaxy.png`,
        description: {
            summary: "Short intro.",
            details: "Full explanation",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/`,
        `${BASE_URL}images/`,
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["React", "Tailwind"],
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
        featuredWork: true
    },
    {
        id: "kaisendon-app",
        slug: "kaisendon-app", 
        title: "Kaisendon creator",
        categories: ["Web","Private Work"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-sakanadon.png`,
        description: {
            summary: "このゲームは、自分だけの海鮮丼を作って楽しめるウェブアプリです。日本の食文化を知らない人でも、気軽に海鮮丼を体験できるように作りました。学びながら楽しめる要素もあり、世界中の人に「日本の美味しい体験」を届けたいと思っています。",
            details: "私自身の経験がきっかけです。日本に来たばかりの頃、生魚を食べるのがとても苦手で、初めの一年はほとんど食べませんでした。しかしある日、友人に背中を押されて挑戦してみた海鮮丼がとても美味しく、気づけばポイントカードを集めるほどお店に通うようになりました。その楽しい思い出を、このゲームに込めたいと思いました。",
            challenges: "プログラミング学習の一環として制作した作品ですが、まだ完成版ではありません。今後も学びを深め、機能を追加してアップデートしていく予定です。"
        },
        type: "video",
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
            summary: "Short intro.友人とコラボして新し見方でMV作ってみました。",
            details: "Full explanation",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "Q3DHeM-1SG0",
        images: [
        `${BASE_URL}images/`,
        `${BASE_URL}images/`,
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["React", "Tailwind"],
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
        tech: ["After Effects", "hmm"],
        featuredWork: false
    },
    {
        id: "portfolio-website",
        slug: "portfolio-web", 
        title: "My Portfolio Page",
        categories: ["Web"],
        thumbnail: "",
        description: "I made a website to store my portfolio", 
        featuredWork: false
    },
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
    //---------------------START OF DESSAN--------------------
    {
        id: "figurine-gundam",
        slug: "figurine-gundam", 
        title: "Gundam",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-gundam.png`,
        description: {
            summary: "Short intro.デッサンの授業で、フィギュアーを描くといった課題で、ガンダムをモチーフとして選び、１６時間ぐらいで描き上げました。",
            details: "Full explanation",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/gundam.JPG`
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["2b", "paper b4"],
        featuredWork: true
    },
    {
        id: "dessan-vespa",
        slug: "dessan-vespa", 
        title: "Cat on Motorcycle",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-vespa.png`,
        description: {
            summary: "Short intro.",
            details: "Full explanation",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/vespa.png`
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["2b", "paper b4"],
        featuredWork: true
    },
    {
        id: "dessan-landscape",
        slug: "dessan-landscape", 
        title: "Landscape, in front of school building",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-fuukei.png`,
        description: {
            summary: "Short intro.",
            details: "Full explanation",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/fuukei.JPG`
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["2b", "paper b4"],
        featuredWork: true
    },
    {
        id: "dessan-still01",
        slug: "dessan-still01", 
        title: "Still Life Drawing",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-seibutsu02.png`,
        description: {
            summary: "Short intro.",
            details: "Full explanation",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/seibutsu02.jpg`
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["2b", "paper b4"],
        featuredWork: true
    },
    {
        id: "dessan-still02",
        slug: "dessan-still02", 
        title: "Still Life Drawing",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-seibutsu03.png`,
        description: {
            summary: "Short intro.",
            details: "Full explanation",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/seibutsu03.png`
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["2b", "paper b4"],
        featuredWork: true
    },
    {
        id: "dessan-still04",
        slug: "dessan-still04", 
        title: "Still Life Drawing",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-seibutsu04.png`,
        description: {
            summary: "Short intro.",
            details: "Full explanation",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/seibutsu04`
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["2b", "paper b4"],
        featuredWork: true
    },
    {
        id: "dessan-plaster01",
        slug: "dessan-plaster01", 
        title: "Statue of XXX",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-sekkouzou01.png`,
        description: {
            summary: "Short intro.",
            details: "Full explanation",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/`
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["2b", "paper b4"],
        featuredWork: true
    },
    {
        id: "dessan-plaster02",
        slug: "dessan-plaster02", 
        title: "Statue of XXX",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-sekkouzou02.png`,
        description: {
            summary: "Short intro.",
            details: "Full explanation",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/`
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["2b", "paper b4"],
        featuredWork: true
    },
    {
        id: "dessan-plaster04",
        slug: "dessan-plaster04", 
        title: "Statue of XXX",
        categories: ["Drawing"],
        thumbnail: `${BASE_URL}thumbnail/thumbnail-sekkouzou04.png`,
        description: {
            summary: "Short intro.",
            details: "Full explanation",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/dessan/`
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["2b", "paper b4"],
        featuredWork: true
    },
];