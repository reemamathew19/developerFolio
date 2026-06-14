/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Reema Mathew",
  title: "Hi, I'm Reema Mathew",
  subTitle:
    "B.Tech Artificial Intelligence and Data Science student passionate about Web Development, Data Analytics, and Software Development."
};



const socialMediaLinks = {
 github: "https://github.com/reemamathew19",
linkedin: "https://www.linkedin.com/in/reema-mathew-b64588305",}

const skillsSection = {
const skillsSection = {
  title: "Technical Skills",
  subTitle: "AI & Data Science Student",
  skills: [
    "⚡ Python, C, C++, SQL, JavaScript",
    "⚡ HTML, CSS, JavaScript",
    "⚡ IBM Cognos Analytics",
    "⚡ Data Visualization and Dashboard Development",
    "⚡ Artificial Intelligence and Machine Learning",
    "⚡ Software Development, Testing and Debugging"
  ]
};

// Education Section

const educationInfo = {
const educationInfo = [
  {
    schoolName: "Anna University",
    degree: "Bachelor of Technology (B.Tech) - Artificial Intelligence and Data Science",
    duration: "2024 - 2028"
  },
  {
    schoolName: "Sri Vijay Vidyalaya Matric Higher Secondary School",
    degree: "Higher Secondary Education"
  }
];
};

// Your top 3 proficient stacks/tech experience

const techStack = {
 };

// Work experience section
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Python",
      progressPercentage: "85%"
    },
    {
      Stack: "C & C++",
      progressPercentage: "80%"
    },
    {
      Stack: "SQL",
      progressPercentage: "75%"
    },
    {
      Stack: "HTML/CSS/JavaScript",
      progressPercentage: "80%"
    },
    {
      Stack: "IBM Cognos Analytics",
      progressPercentage: "75%"
    },
    {
      Stack: "Artificial Intelligence & Machine Learning",
      progressPercentage: "70%"
    }
  ]
};
const workExperiences = [
  {
    role: "IBM Cognos Analytics Intern",
    company: "Adroit Technologies Innovative Solutions Pvt. Ltd.",
    date: "March 2026 - April 2026",
    desc: "Worked on Business Intelligence, Dashboard Development, Reporting and Data Analytics."
  },
  {
    role: "Software Development Intern",
    company: "INSTA3D Technologies",
    date: "July 2025 - August 2025",
    desc: "Participated in software development, debugging, testing and application improvement."
  }
];

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects const projects = {
  data: [
    {
      name: "Personal Portfolio Website",
      description:
        "Developed a responsive portfolio website to showcase skills, internships, certifications, and projects.",
      githubLink: "https://github.com/reemamathew19"
    },
    {
      name: "IBM Cognos Analytics Dashboard",
      description:
        "Created dashboards and reports using IBM Cognos Analytics to visualize business data and generate insights.",
      githubLink: ""
    },
    {
      name: "Student Management System",
      description:
        "Developed a basic student management application using Python and SQL for managing student records.",
      githubLink: ""
    }
  ]
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  const achievementSection = {
  title: "Achievements & Certifications",
  achievementsCards: [
    {
      title: "Introduction to IBM Cognos Analytics Certification",
      subtitle: "IBM - March 2026"
    },
    {
      title: "Software Development Internship",
      subtitle: "INSTA3D Technologies"
    },
    {
      title: "Business Intelligence Internship",
      subtitle: "Adroit Technologies Innovative Solutions Pvt. Ltd."
    }
  ]const blogSection = {
  display: false
};
};
// Blogs Section


const talkSection = {
  display: false,
  title: "Talks & Events",
  talks: [
    "Served as MC for multiple college events",
    "Organized and conducted various academic and cultural programs"
  ]
};
// Podcast Section

const podcastSection = {
  display: false,
  title: "Podcasts",
  podcasts: []
};

// Resume Section
const resumeSection = {
  display: true,
  download: true,
  fileName:resume: "/assets/Reema_KM_ATS_Resume.pdf"

const contactInfo = {
  title: emoji("Contact Me ☎️ 9944286392"),
  
   
  email_address: "reemamathew19@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
