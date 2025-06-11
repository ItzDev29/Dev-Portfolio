export const METADATA = {
  author: "Dev Mehta",
  title: "Portfolio | Dev Mehta",
  description:
    "Dev Mehta is a passionate Full Stack Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "",
  twitterHandle: "",
  keywords: [
    "Dev Mehta",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "/projects/Preview.png",
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
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full Stack Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: devmmehta2003@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/dev-mehta-3924bb203/",
  },
  {
    name: "github",
    url: "https://github.com/ItzDev29",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/dev_mehta_29?igsh=dmJuemp4cDB1cGtr",
  },
  {
    name: "twitter",
    url: "https://www.linkedin.com/in/dev-mehta-3924bb203/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "Audioglyph",
    image: "/projects/Audioglyph.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Audioglyph using NextJS + Tailwind CSS",
    gradient: ["#F14658", "#DC2537"],
    url: "https://podcastr-nine-zeta.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Appointment Management System",
    image: "/projects/HealthCare.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Appointment Management System using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://health-care-liart-two.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "AXIS'24 - Official Website",
    image: "/projects/Axis.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "AXIS'24 using React.Js + Tailwind CSS",
    gradient: ["#000066", "#6699FF"],
    url: "https://axis-3.vercel.app/",
    tech: ["react", "chakra-ui", "tailwindcss"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "",
    tech: ["react"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "AONNIS",
      description:
        "A SaaS platfrom which helps enterprises to manage there valky cluster using kubernates operators.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Developed a website for the startup AONNIS using React.js, Node.js and Tailwind CSS, enabling seamless management of Kubernetes operators with enterprise features.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
           Frontend Developer Intern
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Integrated REST APIs to fetch and display dynamic data, enhancing the functionality of user and admin dashboards for efficient cluster management.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
            Frontend Developer Intern
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Designed and implemented responsive dashboards, including a user dashboard and admin dashboard, to streamline the monitoring and management of valkey clusters.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
  ],
  AVIATE: [
    {
      title: "AXIS'24",
      description:
        "Official technical fest of VNIT - Nagpur.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Spearheaded the development of two high-traffic websites using a versatile MERN stack.
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "Built & led AXIS'24 Official website with user-friendly features (authentication, User profiles, User Registration), that resulted in a 14,000+ user influx, boosting engagement & showcasing tech leadership.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
           Lead a team of 8 people 
        </div>
      ),
    },
    {
      title: "Optimization",
       description:
         "Tech stack including Next.js and Tailwind CSS for the frontend, and MongoDB, Express.js, and Node.js for the backend, affirming expertise in comprehensive MERN stack development.",
       content: (
         <div className="h-full w-full flex items-center justify-center text-white px-4">
          Tech Lead
       </div>
       ),
     },
  ],
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Web Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
};

export const GTAG = "G-5HCTL2TJ5W";
