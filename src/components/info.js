import authorImage from "../images/headshot.png";
import oClocktail from "../images/projectdemo.gif";
import weatherDashboard from "../images/weather_dashboard.PNG";
// import dayPlanner from "../images/Day_Planner.jpg";
import burger from "../images/Burger-Logger-Application.gif";
import roots from "../images/rootsdemo2.gif";
// import resume from "../images/FrontEndDevelopmentResume.pdf";
import google from "../images/googlebooksearch.gif"
import techtalk from "../images/signin.gif";

export default {

  name: "CHRISTY LEE",

  // Contact Email
  contactEmail: "christy.g.lee@gmail.com",

  // Landing page name
  landingPageName: "Christy Lee",

  // Landing page text
  landingPagePara: [
    'Aspiring Front-End Developer',
    'Making your vision come to life.',
  ],

  // Landing Page Image (replace - root/public/assets/photo.jpg)
  landingPageImage: authorImage,

  // Project information
  projects: [
    {
      id: 1, 
      title: "o'clocktail repository", 
      imageSrc: oClocktail,
      url: "https://christyglee.github.io/o-clocktail/",
      repoUrl: "https://github.com/christyglee/o-clocktail"
    },
    {
      id: 2, 
      title: "weather dashboard repository",
      imageSrc: weatherDashboard,
      url: "https://christyglee.github.io/weather-dashboard/",
      repoUrl: "https://github.com/christyglee/weather-dashboard"
    },
    // {
    //   id: 3, 
    //   title: "work day scheduler repository",
    //   imageSrc: dayPlanner,
    //   url: "https://christyglee.github.io/work-day-scheduler/",
    //   repoUrl: "https://github.com/christyglee/work-day-scheduler"
    // },
    {
      id: 4, 
      title: "burger repository",
      imageSrc: burger,
      url: "https://fathomless-everglades-84577.herokuapp.com/",
      repoUrl: "https://github.com/christyglee/burger"
    },
    {
      id: 5, 
      title: "rooTs repository",
      imageSrc: roots,
      url: "https://infinite-cove-31054.herokuapp.com/",
      repoUrl: "https://github.com/christyglee/roots-a-social-garden"
    },
    {
      id: 6,
      title: "google book search",
      imageSrc: google,
      url: "https://intense-castle-73728.herokuapp.com/",
      repoUrl: "https://github.com/christyglee/google-book-search-mern"
    },
    {
      id: 7, 
      title: "tech talk",
      imageSrc: techtalk,
      url: "https://app-tech-talk.herokuapp.com/",
      repoUrl: "https://github.com/christyglee/tech-talk"
    }

  ],

  // Contact information
  contactPara:
    "contact information",
  social: [

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/christy-g-lee"
    },
    {
      name: "Github",
      url: "https://github.com/christyglee"
    },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1SZwvnG1x1VenEpBJuL6VuRApjDEFu5FE/view?usp=sharing"
    }
  ],

  // About page
  aboutTitle: "about me.",
  aboutPara:[
    'Greetings and welcome to my portfolio! My name is Christy Lee, I was born and raised in sunny San Diego and currently residing in Orange County after living in San Francisco for a couple of years. Some of my hobbies include baking, hiking, traveling, eating, and snuggling with my cat, Louis Kitzstrong (Louis for short).',

    'I attended San Diego State University and obtained a Bachelor of Science degree in Hospitality & Tourism Management with emphasis in Hotel Management. Shortly after graduating, I started my career with Marriott International and enjoyed my time with the company for over 8 years.',
  
    'My interest in coding stems back from the Xanga and Myspace days (I may be dating myself here, haha), but I never thought about pursuing coding as a career nor had the time to learn post graduating. This pandemic has been a blessing in disguise as it has given me the time and opportunity to pursue coding as my new career path in the tech industry.',
  
    'I recently completed a coding boot camp and received a Full-Stack Web Development Certificate through UC Berkeley Extension and I am very eager and interested in becoming either a Full-Stack Web Developer or a Front-End Developer; however, the options are limitless!',
  
    'Thank you for taking the time to view my portfolio! Please feel free to reach out via email or connect with me via LinkedIn and GitHub!'
  ]

};