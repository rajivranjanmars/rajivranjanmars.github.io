import {
  content,
  sme,
  creator,
  web,
  lovely,
  techno,
  publiccs,
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Content Writer",
    icon: content,
  },
  {
    title: "Subject Matter Expert",
    icon: sme,
  },
  {
    title: "Community Manager",
    icon: creator,
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
    name: "docker",
    icon: docker,
  },
];
const education = [
  {
    degree: "Bachelors of Technology",
    school_name: "Lovely Professional University",
    icon: lovely,
    iconBg: "#ffffff",
    date: "August 2020 - May 2024",
    points: [
      "Gained insigt of core subjects of DBMS, DSA ,OOPS and Computer Design and Networks",
      "Learnt and built projects based on MERN STACK, Artificial intelligence, Cloud Computing , Devops ,Computer automation",
      "Organised and participated in various events , Organised Mega Tech Fest  as Lead",
      "Won Several Competitions and  Hackathon including Microsoft the Great India Hakathon 2022 and MLH R.U.Hacking 2021",
    ],
  },
  {
    degree: "Senior Secondary Education",
    school_name: "Pubic Central School",
    icon: publiccs,
    iconBg: "#ffffff",
    date: "August 2016 - May 2018",
    points: [
      "Gained insigt of core subjects of Mechanics , Thermodynamics , Electromagnetism and Optics",
      "Accquired Rank Equivalent to 98.2 Percentile in JEE Mains 2018",
      "Learnt basics of web Design and built Wordpress based websites for my clients",
      "Started my carrer as content writer and wrote 500+ blogs for my clients",
    ],
  },

  {
    degree: "High School Education",
    school_name: "Techno Misiion School",
    icon: techno,
    iconBg: "#ffffff",
    date: "August 2006 - March 2016",
    points: [
      "Gained elementry education of Science , Social Studeies ,Mathematics ",
      "Learn and Gained fluency in Reading writing and Speaking English, Hindi, Sanskrit and Maithli",
      "Secure 2nd rank twice(2015 and 2016) in National Science Olympiad(Mathematics) in District Level",
      "Accquired All INDIA Rank 3 in  Competitve Exam for Sainik School Chittorgarh ",
    ],
  },
];

const experiences = [
  {
    title: "Sowtware Developer Engineer I -Intern",
    company_name: "SaintCoders",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - PRESNT",
    points: [
      "learned to work on complex computer science solutions, develop scalable, distributed software systems ",
      "Applied engineering principles to solve complex problems by applying internal or industry best practices to improve technical solutio",
      "Conducted regular testing and debugging to ensure seamless functionality across different browsers and devices.",
      "Integrated APIs and third-party libraries to add functionalities and improve website performance.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Tanza Talks",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Assisted in the deployment process and monitored website performance to identify and resolve issues proactively.",
      "Ensured website security and protection against potential threats by implementing security best practices.",
    ],
  },
  {
    title: "Technical Content Writer",
    company_name: "Coding Interview Pro ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Management Lead",
    company_name: "Google Developers Student Club - LPU",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "OCT 2020 - Present",
    points: [
      "We Become India Largest Intra College Developer Community ,starting from Scratch",
      "Led and coordinated activities of a university-based community group focused on Google Developer Technologies.",
      "Facilitated peer-to-peer learning environments and collaborated with students from diverse backgrounds to build solutions for local businesses and the community ",
      "Organised GDSC -WOW Punjab which is one of the biggest tech event of Punjab",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  education,
  experiences,
  testimonials,
  projects,
};
