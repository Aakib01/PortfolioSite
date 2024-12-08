import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  CertificationType,
} from "./types/sections";
import Skills from "./containers/Skills";

export const greetings: GreetingsType = {
  name: "Mohamed Aakibali A M",
  title: "Hi all, I'm Aakib",
  description:
    `Driven by a desire to impact lives through technology, result-oriented Senior Software Engineer skilled in designing and
optimizing scalable applications. Excels in full-stack development, integration, and technical documentation. Passionate
about innovation and contributing to impactful solutions in dynamic environments.`,
  resumeLink: "/Mohamed_Aakibali_s_CV.pdf",
};

export const openSource = {
  githubUserName: "Aakib01",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:mohamedaakibali@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamed-aakibali/",
  github: "https://github.com/Aakib01",
  phone:"7871239245"
  //instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Software Engineer",
      lottieAnimationFile: "/lottie/coding-1.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          sectionName: "Programming Language",
          skills: [
            {
              skillName: "CSharp",
              iconifyTag: "devicon:csharp",
            },            
            {
              skillName: "React JS",
              iconifyTag: "logos:react",
            },         
            {
              skillName: "HTML",
              iconifyTag: "vscode-icons:file-type-html",
            },
            {
              skillName: "CSS",
              iconifyTag: "vscode-icons:file-type-css",
            },
            {
              skillName: "JavaScript",
              iconifyTag: "logos:javascript",
            },
            {
              skillName: "SQL",
              iconifyTag: "vscode-icons:file-type-sql",
            },
            
            {
              skillName: "Java",
              iconifyTag: "logos:java",
            },
            {
              skillName: "Python",
              iconifyTag: "logos:python",
            },
            {
              skillName: "CPP",
              iconifyTag: "vscode-icons:file-type-cpp3",
            },
            {
              skillName: "C",
              iconifyTag: "logos:c",
            }
            
            
            
          ]          
        },
        {
          sectionName : "Framework",
          skills : [
            {
              skillName: "Dot NET Core",
              iconifyTag: "devicon:dotnetcore",
            },
            {
              skillName: "ASP DOT NET",
              iconifyTag: "mdi:dot-net",
            },
            {
              skillName: "Jest",
              iconifyTag: "logos:jest",
            },
            {
              skillName: "MVC",
              iconifyTag: "mdi:layers-outline",
            },
          ]
        },
        {
          sectionName : "Database & API Technologies",
          skills : [
            {
              skillName: "Oracle DB",
              iconifyTag: "logos:oracle",
            },
            {
              skillName: "RESTful APIs",
              iconifyTag: "mdi:api",
            },
            {
              skillName: "Entity Framework",
              iconifyTag: "material-symbols:identity-aware-proxy",
            }           
          ]
        },
        {
          sectionName : "Tools & Platforms",
          skills : [
            {
              skillName: "AWS",
              iconifyTag: "logos:aws",
            },
            {
              skillName: "Jira",
              iconifyTag: "logos:jira",
            },
            {
              skillName: "Bitbucket",
              iconifyTag: "logos:bitbucket",
            },
            {
              skillName: "TeamCity",
              iconifyTag: "simple-icons:teamcity",
            },
            {
              skillName: "Linux",
              iconifyTag: "logos:linux-tux",
            }
            
          ]
        },
        {
          sectionName : "Development Tools & Practices",
          skills : [
            {
              skillName: "Agile Methodology",
              iconifyTag: "iconoir:agile",
            },
            {
              skillName: "OOPs",
              iconifyTag: "mdi:code-tags",
            },
            {
              skillName: "Data Structures",
              iconifyTag: "mdi:database-outline",
            },
            {
              skillName: "Algorithm",
              iconifyTag: "mdi:chart-timeline-variant",
            },
            {
              skillName: "Product Development",
              iconifyTag: "mdi:cube-outline",
            },
            {
              skillName: "SOLID Principles",
              iconifyTag: "mdi:format-list-checks",
            }
            
          ]
        },
        
        
        
      ],
    },
  ]
};
  


export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Bannari Amman Institute of Technology",
    subHeader: "Bachelor of Technology in Information Technology",
    duration: "August 2017 - May 2021",
    desc: "",
    CGPA: "Cgpa - 8.31",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "P A Vidhya Bhavan Hr Sec School",
    subHeader: "Class 12th",
    duration: "June 2017",
    desc: "",
    CGPA: "Grade - 86.6%",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Senior Software Engineer",
    company: "Gavs Technology",
    companyLogo: "/img/icons/common/gavs.jpeg",
    date: "April 2022 - Present  |  Chennai, India",
    desc: "",
    descBullets: [
       	"Developed new features and resolved bugs for a scalable EMS healthcare product, achieving a 600+ user base across the US using Fullstack development practices",
       	"Improved API performance by 40% through migrating WCF services to RESTful APIs,leveraging microservice architecture.",
        "Implemented OKTA for authentication, providing secure, centralized access management across various sites and applications.",
        "Conducted peer code reviews, providing constructive feedback to maintain high-quality code standards and improve team collaboration.",
        "Implemented TDD with unit and integration tests, enhancing code reliability, test coverage, and reducing bugs, while documenting 40+ bugs to improve product quality.",
        "Collaborated cross-functionally with QA and Product Owners, ensuring timely delivery and adhering to Agile methodologies."
       ],

  },
  {
    role: "Software Engineeer Intern",
    company: "HTIC IIT Madras",
    companyLogo: "/img/icons/common/IIT_Madras_Logo.png",
    date: "Jan 2022 - Sept 2023  |  Chennai, India",
    desc: "",
    descBullets: [
     	"Contributed to a spine surgery robot product in the medical domain.",
     	"Developed Java-based middleware to enhance surgical precision by seamlessly connecting the UR Robot and Surgical Planning Software.",
      "Achieved a 30% improvement in project efficiency through task prioritization, data handling, and watchdog monitoring.",
      "Enabled seamless data communication by implementing JSON format transmission through TCP/IP protocol with the software.",
      "Produced technical documentation to support ongoing project improvements and ensure continuity for future development."
     ],
  },
  {
    role: "Social Media Intern",
    company: "Edvizo Media Private Limited",
    companyLogo: "/img/icons/common/edvizo_logo.jpeg",
    date: "Feb 2020 - Apr 2020 | Remote",
    desc: "",
    descBullets :[
      "Created and shared educational content tailored to students, increasing engagement and promoting platform features.",
      "Analyzed user behavior on social media to refine strategies and attract more learners to the platform."
    ]
  },
  {
    role: "Internet of Things Intern",
    company: "Altsense",
    companyLogo: "/img/icons/common/altsense_logo.jpeg",
    date: "Sept 2021 - Oct 2021  |  Chennai, India",
    desc: "",
    descBullets : [
      "Developed and tested IoT prototypes to integrate sensors and devices for real-time data monitoring.",
      "Collaborated on building IoT-based solutions, improving connectivity and automation for smart systems."
    ]
  },
];

export const projects: ProjectType[] = [
  {
    name: "React Js - SIP Invesment Calculator",
    desc: "This site can be used to calculate the SIP to know about your money growth with expected return percentage and duration of the investment",
    github: "https://github.com/Aakib01/Investment-Calculator",
    link: "https://aakib01.github.io/Investment-Calculator/",
  },
  {
    name: "Computer Vision - Covid Restriction in Malls",
    desc: "The Automation System will count the number of people entering and exiting the mall using SSD Algorithm(Object Detection) and Centroid Tracking (Object Tracking) to help to maintain 50% occupancy all the time to ensure COVID-19 Restriction. This benefits management to reduce their expenses and consumers to save their time.",
    link: "",
  },
  {
    name: "IOT - Smart Farming",
    desc: "We programmed ATmega328P Microcontroller to acquire humidity and temperature level data and use dc motors that help to protect plants from exposing high sunlight and low humidity. So, we can save plants from dying and yield more quality crops.",
    link: "",
  }
  
];
export const certificationsInfo : CertificationType[] = [
  {
    certificationName: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    year: "2023 - 2026",
    
  },
  {
    certificationName: "ChatGPT Prompt Engineering for Developers",
    organization: "DeepLearning.AI",
    year: "2024",    
  },
  {
    certificationName: "Gen AI for Everyone",
    organization: "Coursera",
    year: "2023",    
  },
  {
    certificationName: "Python for Data Science",
    organization: "IBM",
    year: "2021",    
  },
  {
    certificationName: "BEC Preliminary",
    organization: "University of Cambridge",
    year: "2019",    
  },
  
  

];

export const feedbacks: FeedbackType[] = [
  {
    name: "Bala Rajesh",
    role: "Associate Director at Gavs Technology",
    feedback:
      "I’ve had the pleasure of working with Mohamad, and I can confidently say that he is a highly skilled and talented developer. He has an impressive ability to quickly learn and master new technologies, always staying on top of the latest trends. Mohamad is also a true team player—collaborative, dependable, and always willing to lend a hand when needed. His contributions make him an invaluable asset to any team. I have no doubt that he will continue to achieve great things, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Rucha Gholap",
    role: "Senior Software Engineer at Gavs Technology",
    feedback:
      "He is good team player, confident and a quick learner. He has strong and in depth knowledge on the technologies we worked upon.",
  },
  {
    name: "Atsuko T",
    role: "Software Engineer at at ZOLL Data",
    feedback:
      "Mohamed is driven and has the ability to learn quickly and produce the result. He is focused under any circumstances and always willing to contribute to the success of the team. It was great to work with him. ",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Mohamed Aakibali",
  description: greetings.description,
  author: "Mohamed Aakibali",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Mohamed",
    "Mohamed aakibali",
    "@Aakib01",
    "Aakib01",
    "Portfolio",
    "Mohamed Portfolio ",
    "Mohamed Aakibali Portfolio",
  ],
};
