import {
    eslTeacher,
    arabicTeacher,
    frontEnd,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    esl,
    scrimba,
    dev,
    studioArabia,
    photoShop,
    gpt3,
    tenzies,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Front Web Developer",
        icon: frontEnd,
    },
    {
        title: "React Developer",
        icon: reactjs,
    },
    {
        title: "Arabic, Quran Tutor",
        icon: arabicTeacher,
    },
    {
        title: "ESL Teacher",
        icon: eslTeacher,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },

];

const experiences = [
    {
        title: "Arabic, Quran Tutor",
        company_name: "Studio Arabia",
        icon: studioArabia,
        iconBg: "#018BE4",
        date: "March 2020 - Jan 2022",
        points: [
            "I was teaching more than 50 students from around the world (remotely) how to read Quran properly and learn Arabic language in more productive way.",
            "I was able to lead many ages from 6 to 75 years old people, Each age with its own style.",
            "I was one of the most efficient tutors in that company.",
            "The company was rely on me when some tutors are not available, Cause they know that I can handle different minds.",
        ],
    },
    {
        title: "ESL Teacher",
        company_name: "Freelance",
        icon: esl,
        iconBg: "#E6DEDD",
        date: "Jan 2020 - March 2023",
        points: [
            "I was teaching 100+ students English as a second language in a more fun and productive way.",
            "I was challenging my self with students who have education difficults, untill they very higher levels.",
            "My teaching style was focusing on fun so I was able to make students love english.",
            "Increasing ESL students' reading levels by integrating online word games and altering lesson plans for students needing extra guidance.",
        ],
    },
    {
        title: "Front end Developer trainee",
        company_name: "Scrimba",
        icon: scrimba,
        iconBg: "#383E56",
        date: "August 2022 - March 2023",
        points: [
            "Built tens of web apps through challenges and solo projects.",
            "Learned code reviews and provided constructive feedback to other developers.",
            "learned all I need to become a junior front end developer and have the different hirable skills",
            "Solving 100+ of javascript chalenges. ",
        ],
    },
    {
        title: "React Developer",
        company_name: "Freelance",
        icon: dev,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "while building apps, I am learning about new technologies like TailwindCSS, Three.js and more",
            "I have a passion about learning something new everyday, so I can deal with the new technology very quickly",
            "I am a fluent in English so it makes me able to discover world researches and resources",
        ],
    },
];

const projects = [
    {
        name: "photos shop",
        description:
            `I applied a lot of React Concepts that I have learned through the React Course at Scrimba, using different kinds of hooks(useState,
                useEffect, useRef, useContext)` ,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "react hooks",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: photoShop,
        netlify_link: "https://resilient-paprenjak-a7d35c.netlify.app/",
        source_code_link: "https://github.com/AymanRabea96/photo-shop-react.git",
    },
    {
        name: "GPT 3 web app",
        description:
            `This is a GPT 3 app, It's built using React Functional components, CSS flex & grid and CSS gradients.
            And It's fully Responsive for all different devices, using high quality photos makes the app looks glorious.`,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "html",
                color: "pink-text-gradient",
            },
        ],
        image: gpt3,
        netlify_link: "https://gpt3-ayman.netlify.app/",
        source_code_link: "https://github.com/AymanRabea96/gpt-3-project-react.git",
    },
    {
        name: "Tenzies game",
        description:
            `This is a Tenzies game. It's built using React Functional components,React hooks, CSS grid.
            It's one of the Scrimba Front-End career path Chalenges, focusing on problem solving skill.`,
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "react hooks",
                color: "pink-text-gradient",
            },
        ],
        image: tenzies,
        netlify_link: "https://tenzies-game2.netlify.app/",
        source_code_link: "https://github.com/AymanRabea96/tenzies-game.git",
    },
];

export { services, technologies, experiences, projects };