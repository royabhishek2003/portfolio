export const METADATA = {
  author: "Abhishek Kumar",
  title: "Portfolio | Abhishek Kumar",
  description:
    "Abhishek Kumar is a passionate Full-Stack Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@RoyAbhi78245890",
  keywords: [
    "Abhishek Kumar",
    "Full-Stack Engineer",
    "React Native Engineer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Certificates",
    ref: "certificates",
  },
  {
    name: "Achievements",
    ref: "achievements",
  },
  {
    name: "Training",
    ref: "training",
  },
  {
    name: "Education",
    ref: "education",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full-Stack Engineer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: royabhishek8483@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/abhishek26045/",
  },
  {
    name: "github",
    url: "https://github.com/royabhishek2003",
  },
  {
    name: "twitter",
    url: "https://x.com/RoyAbhi78245890",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "c",
    "cpp",
    "javascript",
    "java",
    "python",
  ],
  librariesAndFrameworks: [
    "html",
    "css",
    "nodejs",
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
  ],
  databases: ["mysql", "postgresql", "mongodb"],
  devops: ["docker", "kubernetes", "github-actions"],
  other: ["git", "github", "aws"],
};

export const PROJECTS = [
  {
    name: "CourseHub",
    imageKey: "coursehub",
    description: "Get hired through DMs not resumes 🤝",
    gradient: ["#FF69B4", "#FFB6C1"], // hot pink to light pink (cherry blossom inspired)
    url: "https://course-hub-frontend-six.vercel.app/",
    tech: ["javascript", "react", "nodejs", "redux"],
  },
  {
    name: "Expense Merge",
    imageKey: "expensemerge",
    description: "Manage your expenses easily 💸",
    gradient: ["#F4D03F", "#58D68D"], // warm gold to fresh green
    url: "https://github.com/royabhishek2003/expense-react-client",
    tech: ["typescript", "react"],
  },
  {
    name: "Grapevine Round1 AI",
    imageKey: "round1",
    description: "Ace your round one in 9 minutes  💼",
    gradient: ["#5D4037", "#8D6E63"], // dark brown to medium brown
    url: "https://play.google.com/store/apps/details?id=com.app.gvine",
    tech: ["typescript", "react", "react-query"],
  },
  {
    name: "React Native Directory",
    imageKey: "react-native-directory",
    description: "Search & filter React Native libraries via Raycast ⌨️",
    gradient: ["#000000", "#1A1A1A"], // pure black to dark gray
    url: "https://www.raycast.com/shubh_porwal/react-native-directory",
    tech: ["typescript", "react", "expo", "raycast"],
  },
];

export const CERTIFICATES = [
  {
    name: "Cloud Computing | NPTEL",
    url: "https://drive.google.com/file/d/1qb2uLMDNpZQj-OSkelxLlF8HpA587Zy7/view"
  },
  {
    name: "Object Oriented Programming | NeoColab",
    url: "https://drive.google.com/file/d/1PH7LKEHUCtRE5vO3pBbjoahgOuAoDvOa/view"
  },
  {
    name: "Operating System and Hardware | Coursera",
    url: "https://drive.google.com/file/d/1BF6LMmX3ZwlHRna5djZyz2FYVMEqvHjA/view"
  },
  {
    name: "Completed “C++ Data Structures & Algorithms” | PW- Skills",
    url: "https://drive.google.com/file/d/1Lh4Nu6wAPfHvq-5EIRAIphZeCC7SZQn8/view"
  }
];

export const EDUCATION_METADATA = [
  {
    institution: "Lovely Professional University, Phagwara",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 8.5",
    period: "August 2023 - July 2027",
  },
  {
    institution: "R.B.S College, Teyai Begusarai",
    degree: "Intermediate",
    score: "Percentage: 68%",
    period: "April 2019 - March 2021",
  },
  {
    institution: "Delhi Public School, Begusarai",
    degree: "Matriculation",
    score: "Percentage: 71%",
    period: "April 2018 - March 2019",
  }
];

export const ACHIEVEMENTS = [
  {
    title: "National Hackathon Winner",
    description: "Winner of national level hackathon 'HACKADHYAAY' as part of a 3 member team."
  },
  {
    title: "Competitive Programming",
    description: "Solved 600+ problems on LeetCode and 700+ DSA problems overall, with a 1600+ contest rating on LeetCode through consistent participation.",
    url: "https://leetcode.com/u/roy_abhishek__/"
  }
];

export const TRAINING_CONTENTS = {
  CSE_PATHSHALA: [
    {
      title: "Full-Stack Development",
      description: "Developed a full-stack interactive web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) as a capstone project. Focused on creating an intuitive, high-performance user interface and robust backend services to deliver a complete product experience from end to end.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-center">
          Building end-to-end scalable web applications
        </div>
      ),
    },
    {
      title: "Architecture & APIs",
      description: "Built and consumed RESTful APIs with strong frontend state management (using Redux) and seamless MongoDB integration for persistent data storage. Strengthened understanding of modern web architecture, Git-based version control for collaborative development, and deployment workflows.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-center">
          Modern Web Architecture & Seamless API Integration
        </div>
      ),
    },
    {
      title: "Capstone Completion",
      description: "Successfully defended and deployed the capstone application, demonstrating proficiency in modern web development practices, database schemas, and stateful UIs.",
      content: (
        <a
          href="https://drive.google.com/file/d/1fIjzzxvRcMswFYECuYjDc9kWmMxdfN1c/view"
          target="_blank"
          rel="noreferrer"
          className="h-full w-full flex flex-col items-center justify-center text-white px-4 hover:scale-105 transition-transform duration-300"
        >
          <span className="text-xl mb-4 font-semibold text-center text-indigo-400">View Certificate</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      ),
    }
  ],
};



export const GTAG = "G-5HCTL2TJ5W";
