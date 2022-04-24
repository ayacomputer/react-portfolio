import paws from "../images/paws.png";
import eventFinder from "../images/event-finder.png";
import mvcBlog from "../images/mvcBlog.png";
import noteTaker from "../images/noteTaker.png";
import readmeGenerator from "../images/readme.gif";
import employeeTracker from "../images/employeeTracker.png";
import weatherDashboard from "../images/weatherDashboard.png";
import codingQuiz from "../images/CodeQuiz.gif";
import dayPlanner from "../images/dayPlanner.gif";
import passwordGenerator from "../images/passwordGenerator.png";
import jate from "../images/jate.png";
import snAPI from "../images/socialNetworkAPI.png";

const projects = [
    {
        name: "Pet Advocate Welfare System",
        description: `Node.js, Express.js, MySQL, Sequelize, Handlebars, dotenv, body-parser, nodemailer, bcrypt, express-session, Bootstrap`,
        image: paws,
        gitHub: "https://github.com/Black-Mandarin/Pet-Advocate-Welfare-System-PAWS-",
        deployed: "https://pet-advocate-welfare-system.herokuapp.com/login"
    },
    {
        name: "Event Finder",
        description: `HTML, CSS, Javascript, Bulma (CSS framework), Google Map API, Ticketmaster API`,
        image: eventFinder,
        gitHub: "https://github.com/ayacomputer/event-finder-ver2",
        deployed: "https://ayacomputer.github.io/event-finder-ver2"
    },
    {
        name: "PWA: Text Editor",
        description: `Express, IndexedDb, Webpack, babel-loader, style-loader, css-loader, code-mirror-themes...`,
        image: jate,
        gitHub: "https://github.com/ayacomputer/10-PWA-Text-Editor",
        deployed: "https://ayacomputer-pwa-text-editor.herokuapp.com/"
    },
    {
        name: "MVC Blog",
        description: `Node.js, MySQL2, Sequelize, dotenv, bcrypt, handlebars, express-session`,
        image: mvcBlog,
        gitHub: "https://github.com/ayacomputer/14-MVC-Tech-Blog",
        deployed: "https://ayacomputer-mvc-tech-blog.herokuapp.com/"
    },
    {
        name: "Note Taker",
        description: `Node.js, Express.js, uuid, JSON to store notes`,
        image: noteTaker,
        gitHub: "https://github.com/ayacomputer/11-Note-Taker",
        deployed: "https://ayacomputer-note-taker.herokuapp.com/"
    },
    {
        name: "Readme Generator",
        description: `Node.js, npm Inquirer, Javascript`,
        image: readmeGenerator,
        gitHub: "https://github.com/ayacomputer/09-Readme-Generator",
    },
    {
        name: "Employee Tracker",
        description: `Node.js, mySQL2, Express.js, dotenv`,
        image: employeeTracker,
        gitHub: "https://github.com/ayacomputer/12-Employee-Tracker",
    },
    {
        name: "Weather Dashboard",
        description: `HTML, CSS, Javascript, moment.js, Open Weather API`,
        image: weatherDashboard,
        gitHub: "https://github.com/ayacomputer/06-Weather-Dashboard",
        deployed: "https://ayacomputer.github.io/06-Weather-Dashboard/"
    },
    {
        name: "Coding Quiz",
        description: `HTML, CSS, Javascript using local storage`,
        image: codingQuiz,
        gitHub: "https://github.com/ayacomputer/04-Code-Quiz",
        deployed: "https://ayacomputer.github.io/04-Code-Quiz"
    },
    {
        name: "Day Planner",
        description: `HTML, CSS(Bootstrap), jQuery, Moment.js, local storage`,
        image: dayPlanner,
        gitHub: "https://github.com/ayacomputer/05-Day-Planner",
        deployed: "https://ayacomputer.github.io/05-Day-Planner"
    },
    {
        name: "Password Generator",
        description: `HTML, CSS, Javascript`,
        image: passwordGenerator,
        gitHub: "https://github.com/ayacomputer/03-Password-Generator",
        deployed: "https://ayacomputer.github.io/03-Password-Generator/"
    },
    {
        name: "Social Network API",
        description: `Express, MongoDB, Mongoose, Moment.js`,
        image: snAPI,
        gitHub: "https://github.com/ayacomputer/18-Social-Network-API",
    },

];


export default projects;