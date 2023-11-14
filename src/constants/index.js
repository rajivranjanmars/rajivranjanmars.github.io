import {
  content,
  sme,
  creator,
  web,
  lovely,
  techno,
  publiccs,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  docker,
  cip,
  gdsc,
  saintcoders,
  tanza,
  technocean,
  readme,
  animap,
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
    name: "React JS",
    icon: reactjs,
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
    title: "Software Developer Engineer I -Intern",
    company_name: "SaintCoders",
    icon: saintcoders,
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
    icon: tanza,
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
    icon: cip,
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
    icon: gdsc,
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
      "In my career, I've rarely come across a developer as dedicated to excellence as Rajiv. His problem-solving skills and attention to detail are unparalleled.",
    name: "Emily Carter",
    designation: "CEO",
    company: "TechVista",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Rajiv's ability to turn complex ideas into elegant web solutions is truly commendable. His work as a developer has been a game-changer for our projects.",
    name: "Michael Adams",
    designation: "VP of Engineering",
    company: "InnoTech",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "We owe a significant boost in user engagement to Rajiv's web optimization expertise. His work has transformed our platform and user experience.",
    name: "Sophia Ramirez",
    designation: "Director of Marketing",
    company: "GlobeConnect",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "TechNocean",
    description:
      "An innovative web-based platform for hosting events, hackathons, and fostering a community centered around learning, building, and presenting, in collaboration with prominent tech companies.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: technocean,
    source_code_link: "https://github.com/gdsclpu/technocean-frontend",
  },
  {
    name: "Readme",
    description:
      "Create a dynamic README.md with ease using this generator: Simply provide your social links, learning goals, collaboration interests, and more to generate a personalized markdown file for your GitHub profile.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Jquery",
        color: "pink-text-gradient",
      },
    ],
    image: readme,
    source_code_link: "https://github.com/rajivranjanmars/readme",
  },
  {
    name: "Anime-Map",
    description:
      "Experience more than just anime music with AniMap Radio - enjoy a polaroid gallery, iconic tracks, and anime evolution",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "golang",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: animap,
    source_code_link: "https://github.com/rajivranjanmars/Anime-Map/",
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
