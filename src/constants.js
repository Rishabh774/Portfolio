// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo's
import bbdlogo from './assets/education_logo/bbdlogo.png';
import schoollogo from './assets/education_logo/schoollogo.png'

// Project Section Logo's
import portfolio from './assets/work_logo/portfolio.png'
import roomadda from'./assets/work_logo/roomadda.png'
import empowerher from'./assets/work_logo/empowerher.png'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     
      { name: 'Redux', logo: reduxLogo },
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
     
      { name: 'Java', logo: javaLogo },
   
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
     
      { name: 'Vercel', logo: vercelLogo },
    
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 
  
  export const education = [
    {
      id: 0,
      img: bbdlogo,
      school: "BBD UNIVERSITY, Lucknow",
      date: "August 2023 - June 2027",
      grade: "8.72 CGPA",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science from Babu Banarasi Das University (BBD University) and am presently in my third year. During my academic journey, I have built a strong foundation in programming, software development, and core computer science principles. I have studied subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participate in technical workshops, coding activities, and academic events, which have helped me enhance my practical skills and technical knowledge. My ongoing experience at BBD University is continuously shaping my problem-solving abilities, technical expertise, and professional growth.",
      degree: "Pursuing B.Tech. CSE",
    },
    
    {
      id: 2,
      img:schoollogo,
      
      school: "Shri Shiv Kumar Trivedi Career Plus Inter College Shivgarh , Raibareli",
      date: "Apr 2022 - March 2023",
      grade: "86%",
      desc: "I have completed my Intermediate (Class XII) education with 86% marks from Shri Shiv Kumar Trivedi Career Plus Inter College, with Physics, Chemistry, and Mathematics (PCM) as my core subjects. During my schooling, I developed a strong conceptual understanding of scientific principles, logical reasoning, and analytical thinking. My academic studies helped strengthen my problem-solving abilities and numerical aptitude. I actively participated in academic and school-level activities, which contributed to my overall academic discipline and personal development. This phase of my education laid a strong foundation for pursuing higher studies in engineering and technology.",
       degree: "Intermediate",
    },
    {
      id: 3,
      img: schoollogo,
      school: "Shri Shiv Kumar Trivedi Career Plus Inter College Shivgarh, Raibareli",
      date: "Apr 2020 - March 2021",
      grade: "91.33%",
      desc: "I have completed my High School (Class X) education with 91.33% marks from Shri Shiv Kumar Trivedi Career Plus Inter College. During my high school studies, I built a strong academic foundation across core subjects, which helped develop my logical thinking, discipline, and problem-solving abilities. I actively participated in academic and co-curricular activities, contributing to my overall personal and academic growth. This stage of my education played an important role in shaping my learning habits and preparing me for higher secondary and technical education.",
      degree: "Highschool",
    },
  ];
  
  export const projects = [
    {
      id: 3,
      title: "Generative AI Content for Women-Focused Skill Development",
      description:
        "A full-stack web application developed using Spring Boot that leverages Generative AI to provide personalized, skill-oriented learning content for women. The platform is designed to support women-focused skill development by generating relevant educational material, guidance, and resources based on user needs. ",
      image:  empowerher,
      tags: ["HTML","CSS", "Javascript", "Springboot", "Mysql"],
      github: "https://github.com/Rishabh774/empower-her",
      
    },
    {
      id: 0,
      title: "Personal Portfolio",
      description:
        "A modern, responsive personal portfolio website built with React.js and Tailwind CSS to showcase my skills, projects, education, and achievements. The application features a clean UI, smooth user experience, reusable components, and a fully responsive design across all devices. It reflects my journey as a developer and serves as a professional platform for recruiters and collaborators to explore my work",
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Rishabh774/Personal-Portfolio-Rishabh-Sahu-",
      webapp: "https://rishabhportfolio-dusky.vercel.app/",
    },
   
    {
      id: 2,
      title: "Roomadda",
      description:
        "RoomAdda is a modern accommodation discovery platform built using HTML, CSS, and JavaScript that enables users to search for rooms, hostels, PGs, and mess facilities in nearby locations. The website features a clean layout, intuitive navigation, and detailed property listings, ensuring a seamless user experience. Its responsive and interactive design makes RoomAdda accessible across all devices, helping students and working professionals find suitable accommodation quickly and effortlessly.",
      image: roomadda ,
      tags: [ "HTML", "CSS","Bootstrap", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://roomadda.vercel.app/",
    },
    
   
  ];  