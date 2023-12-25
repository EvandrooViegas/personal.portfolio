import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCss3 } from "react-icons/si";
import { FaGitAlt, FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandNuxt } from "react-icons/tb";
import { SiSvelte } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSanity } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const TECNOLOGIES = {
    LANGUAGES: "Languages",
    FRAMEWORKS: "Frameworks",
    TOOLS: "Tools",
}

export type Tecnology = {
    id: number,
    name: string,
    icon: JSX.Element,
    color: string,
    level: number,
    category: string,
}
export type UsedTecnologies = {
    category: string,
    tecnologies: number[]
}

export type Project = {
    name: string,
    image?: string,
    description: string,
    website_url?: string
    github_url: string
    used_tecnologies: UsedTecnologies[]
}

export const data = {
    skills: [
        {
            category: TECNOLOGIES.LANGUAGES, tecnologies: [
                { id: 1, name: "Javascript", level: 3, icon: <IoLogoJavascript />, color: "#F0DB4F", category: TECNOLOGIES.LANGUAGES },
                { id: 2, name: "CSS", level: 3, icon: <SiCss3 />, color: "#2965F1", category: TECNOLOGIES.LANGUAGES },
                { id: 3, name: "HTML", level: 3, icon: <FaHtml5 />, color: "#E85728", category: TECNOLOGIES.LANGUAGES },
                { id: 4, name: "Go", level: 2, icon: <FaGolang />, color: "#74CDDC", category: TECNOLOGIES.LANGUAGES },
                { id: 7, name: "Typescript", level: 3, icon: <SiTypescript />, color: "#3178C6", category: TECNOLOGIES.LANGUAGES },
            ],
        },

        {
            category: TECNOLOGIES.FRAMEWORKS, tecnologies: [
                { id: 1, name: "React", level: 3, icon: <FaReact />, color: "#60D9FA", category: TECNOLOGIES.FRAMEWORKS },
                { id: 2, name: "Next.js", level: 3, icon: <TbBrandNextjs />, color: "#fff", category: TECNOLOGIES.FRAMEWORKS },
                { id: 3, name: "Vue", level: 3, icon: <FaVuejs />, color: "#41B883", category: TECNOLOGIES.FRAMEWORKS },
                { id: 4, name: "Nuxt.js", level: 2, icon: <TbBrandNuxt />, color: "#013C3C", category: TECNOLOGIES.FRAMEWORKS },
                { id: 5, name: "Svelte", level: 2, icon: <SiSvelte />, color: "#FF3D00", category: TECNOLOGIES.FRAMEWORKS },
                { id: 6, name: "SvelteKit", level: 2, icon: <SiSvelte />, color: "#FF3D00", category: TECNOLOGIES.FRAMEWORKS },
                { id: 7, name: "TailwindCSS", level: 2, icon: <SiTailwindcss />, color: "#37BDF8", category: TECNOLOGIES.FRAMEWORKS },
            ],
        },
        {
            category: TECNOLOGIES.TOOLS, tecnologies: [
                { id: 1, name: "Git", level: 3, icon: <FaGitAlt />, color: "#F05032", category: TECNOLOGIES.TOOLS },
                { id: 2, name: "MongoDB", level: 3, icon: <DiMongodb />, color: "#08934E", category: TECNOLOGIES.TOOLS },
                { id: 3, name: "Docker", level: 2, icon: <FaDocker />, color: "#0A9AE8", category: TECNOLOGIES.TOOLS },
                { id: 4, name: "PostgreSQL", level: 2, icon: <BiLogoPostgresql />, color: "#336791", category: TECNOLOGIES.TOOLS },
                { id: 5, name: "Sanity", level: 2, icon: <SiSanity />, color: "#F03E2F", category: TECNOLOGIES.TOOLS },
            ],
        },
    ],
    projects: [

        {
            name: "Product Reviwer",
            description: "This is a website made for influencers. When they review a product they can add into the website. The website show the product's name, description, video, and discount ammount. Each product can be grouped into a collection. The project comes with a CMS that allows changing the content of the website at anytime",
            image: "product_reviwer.jpg",
            github_url: "https://github.com/EvandrooViegas/product-reviwer",
            website_url: "https://product-reviwer-webx.vercel.app/",
            used_tecnologies: [
                { category: TECNOLOGIES.LANGUAGES, tecnologies: [1, 2, 3, 7] },
                { category: TECNOLOGIES.FRAMEWORKS, tecnologies: [1, 2, 7] },
                { category: TECNOLOGIES.TOOLS, tecnologies: [1, 4, 5] },
            ]
        },

        {
            name: "BrayPodcast",
            description: "This is a website made for a podcast. The website shows the latest youtube video on the channel, the best clips, guests, and more. The project comes with a CMS that allows changing the content of the website at any time",
            image: "bray_podcast.jpg",
            github_url: "https://github.com/EvandrooViegas/braypodcast",
            website_url: "https://braypodcast.vercel.app/",
            used_tecnologies: [
                { category: TECNOLOGIES.LANGUAGES, tecnologies: [1, 2, 3, 7] },
                { category: TECNOLOGIES.FRAMEWORKS, tecnologies: [1, 2, 7] },
                { category: TECNOLOGIES.TOOLS, tecnologies: [1, 4, 5] },
            ]

        },

        {
            name: "YouCanLearn",
            description: "This is a website made for a programming school. The website shows an about us section, another section describing what is the bootcamp about, a section containg common questions ant it's answers, and finnaly a section containg a form to send an email",
            image: "you_can_learn.jpg",
            github_url: "https://github.com/EvandrooViegas/YouCanLearn",
            website_url: "https://you-can-learn.vercel.app/",
            used_tecnologies: [
                { category: TECNOLOGIES.LANGUAGES, tecnologies: [1, 2, 3, 7] },
                { category: TECNOLOGIES.FRAMEWORKS, tecnologies: [1, 2, 7] },
                { category: TECNOLOGIES.TOOLS, tecnologies: [1, 4, 5] },
            ]
        },

        {
            name: "Imperial Store",
            description: "This is a complete modern, optimized, responsive, SEO, UX & UI friendly Ecommerce website. The owner of the website can add, remove, update clothes anywhere and anytime with a user friendly interface! You can add clothes to your cart, and when it's time to pay, the website handles it perfectly with all of the security and ease! Once the payment it's done a notification is going to show up on the website owner dashboard, saying that a new purchase was made.",
            image: "imperial.jpg",
            github_url: "https://github.com/EvandrooViegas/imperial.store",
            website_url: "https://imperial-store.vercel.app/",
            used_tecnologies: [
                { category: TECNOLOGIES.LANGUAGES, tecnologies: [1, 2, 3, 7] },
                { category: TECNOLOGIES.FRAMEWORKS, tecnologies: [3, 4, 7] },
                { category: TECNOLOGIES.TOOLS, tecnologies: [1, 4, 5] },
            ]
        },

        {
            name: "TikTik",
            description: "This is a tiktok clone, the website includes user authentication and video uploading!",
            image: "tiktik.jpg",
            github_url: "https://github.com/EvandrooViegas/tiktik",
            website_url: "https://tiktik-seven.vercel.app/",
            used_tecnologies: [
                { category: TECNOLOGIES.LANGUAGES, tecnologies: [1, 2, 3, 7] },
                { category: TECNOLOGIES.FRAMEWORKS, tecnologies: [1, 2, 7] },
                { category: TECNOLOGIES.TOOLS, tecnologies: [1, 4, 5] },
            ]
        },
        {
            name: "ApiPiece",
            description: "This is a One piece Rest API made with golang and Docker",
            github_url: "https://github.com/EvandrooViegas/api-piece",
            used_tecnologies: [
                { category: TECNOLOGIES.LANGUAGES, tecnologies: [4] },
                { category: TECNOLOGIES.TOOLS, tecnologies: [1, 3] },
            ]
        },
        {
            name: "ValorantAgents",
            description: "This is a Valorant Agents Rest API and website made with docker, golang and svelte.js",
            github_url: "https://github.com/EvandrooViegas/valorant-agents",
            used_tecnologies: [
                { category: TECNOLOGIES.LANGUAGES, tecnologies: [1, 2, 3, 4, 7] },
                { category: TECNOLOGIES.FRAMEWORKS, tecnologies: [5, 6, 7] },
                { category: TECNOLOGIES.TOOLS, tecnologies: [1, 2, 3] },
            ]
        },
    ]
}