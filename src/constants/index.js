import {
    backend,
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    python,
    threejs,
    vue,
    php,
    mysql,
    csharp,
    mindden,
    afr,
    nrc,
    hablandodeojitos,
    starwarsblog,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: vue,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
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
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "C#",
      icon: csharp,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "MindDen",
      icon: mindden,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Developing and maintaining web applications using Vue.js, PHP and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products, using Figma, Jira and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "AFR",  
      icon: afr,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using Wordpress for some clients but also technologies like React.js and other related technologies for some others.",
        "Collaborating with other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Hablando de Ojitos",
      description:
        "Web application that enables users to search information about the services, to contact with the healthiness professional and to buy adquire products.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "design",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: hablandodeojitos,
      source_code_link: "https://www.hablandodeojitos.com/"
    },
    {
      name: "Star Wars Blog",
      description:
        "A blog that gives information about all the Star Wars Universe like characters, planets and vehicles.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "apirest",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: starwarsblog,
      source_code_link: "https://github.com/Avasidr/Star-Wars-Blog",
    },
    {
      name: "NRC",
      description:
        "Web application that enables the potential for the clients to make an account and access to a platform to get workout exercises and plans.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: nrc,
      source_code_link: "https://github.com/Avasidr/NRC-Final",
    },
  ];
  
  export { services, technologies, experiences, projects };