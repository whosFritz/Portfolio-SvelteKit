import type { Project } from "../lib/types";

export const projects: Project[] = [
  {
    heading: "Rail Insights",
    descriptions: [
      "Rail Insights is a web application that focuses on the evaluation and statistical representation of Deutsche Bahn trains. The application allows users to gain insight into statistics on trains, stations, and global delays. In addition, the application offers a forecast function for future journeys.",
      "The project uses SpringBoot, MariaDB and Vaadin for the frontend. 🚆",
    ],
    projectLink: "https://www.railinsights.de",
    imageURL: "images/rli-favicon.png",
    displayColor: "#F50909",
  },
  {
    heading: "CampusDual iCal Clone",
    descriptions: [
      "Campus Dual, the student platform for BA-Sachsen, has there own schedule ical feed. But it stopped working and beeing supported years ago. So I decided to build my own ical feed for the students.",
      "The project uses NodeJS, Express and the ical-service library to create a new ical feed for the students.  📅", " The Students are able to login using there username and hash.",
      "Getting the hash is quite complicated, so I plan to develop an API to imitate the login process and get the hash for the students.🔐"
    ],
    projectLink: "https://cdclonefeed.whosfritz.de",
    imageURL: "images/calendar-1763587_1920.png",
    displayColor: "#18b76c",
  },
  {
    heading: "Mensa FoodFeed iCal",
    descriptions: [
      "Clicking through the online mensa plan is annoying. So I decided to build a new ical feed for the students of the BA-Sachsen and other universities, using the API from mensaHub from my mate Ole Einar Christoph. 👨🏻‍💻",
      "Students of the BA-Sachsen and other universities are able to get there mensa food plan as an ical feed. This project uses NodeJS, Express MongoDB, the mensaHub Gateway and the ical-service library to create a new ical feed for the students.🍽️"
    ],
    projectLink: "https://mensafoodfeed.whosfritz.de",
    imageURL: "images/menu-827750_1920.jpg",
    displayColor: "#ff7f50",
  },
  {
    heading: "whosFritz.de",
    descriptions: [
      "This website is my personal portfolio. It is built with SvelteKit, TailwindCSS and the component library daisyui. 👨🏻‍💻",
      "My favorite songs that are displayed on the website are fetched from the Spotify API through a dockerized python script with internal scheduling. 🎵",
      "The former version of this website was built using HTML, JavaScript and Bootstrap5."
    ],
    projectLink: "https://github.com/whosFritz/Portfolio-SvelteKit",
    imageURL: "favicon-fritz.png",
    displayColor: "#f1d766",
  },
  {
    heading: "Vaadin Share Button",
    descriptions: [
      "The Vaadin Share Button is a handy add-on that seamlessly integrates a native Web Share API button into your Vaadin application.",
      "It lets users quickly share your app's content on social media, messaging apps, and more, with just a tap or click. 🔗"
    ],
    projectLink: "https://vaadin.com/directory/component/share-button-for-vaadin",
    imageURL: "images/shareButtonImplementation.png",
    displayColor: "#3dd5f0"
  },
  {
    heading: "3D BA-Leipzig",
    descriptions: [
      "This website is gonna be a web hub for the BA-Leipzig facility.",
      "If scrolling through the site, the user will be able to visit, see and explore specific parts of the Studienakadamie by hovering over it.",
      "Currently working on the Blender 3D Model of the Studienakademie.",
    ],
    projectLink: "https://github.com/whosFritz/3D-BA-Leipzig",
    imageURL: "images/3D-BA-Leipzig.png",
    displayColor: "#e879f9",
  },
  // Fügen Sie hier weitere Projekte hinzu
];
