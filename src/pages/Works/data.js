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
            summary: "Short intro.",
            details: "Full explanation",
            challenges: "What i learned"
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
            summary: "Short intro.",
            details: "Full explanation",
            challenges: "What i learned"
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
        thumbnail: `${BASE_URL}thumbnail/galaxy.png`,
        description: {
            summary: "Short intro.友人とコラボして新し見方でMV作ってみました。",
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
        featuredWork: true
    },
    {
        id: "tenshi-ni-nante-naranaide-mv",
        slug: "tenshi-ni-nante-naranaide-mv", 
        title: "天使になんてならないで - MV Collab Project",
        categories: ["Movie"],
        thumbnail: `${BASE_URL}thumbnail/galaxy.png`,
        description: {
            summary: "Short intro.",
            details: "Full explanation1年生の時に参加した他学科とのコラボプロジェクトです。",
            challenges: "What i learned"
        },
        type: "video",
        youtubeId: "",
        images: [
        `${BASE_URL}images/`,
        `${BASE_URL}images/`,
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
        `${BASE_URL}images/gundam/gundam.JPG`
        ],
        duration: "Jan 2025 - Feb 2025",
        tech: ["2b", "paper b4"],
        featuredWork: true
    },

];