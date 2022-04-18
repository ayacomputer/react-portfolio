import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import ComputerIcon from '@mui/icons-material/Computer';

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


const styles = {
    mainContainer: {
        background: "rgb(32, 33, 36)",
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
    },
};

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
];



export default function Projects() {
    return (
        <Box component="div" className={styles.mainContainer}>
            <Grid container justify="center">
                {projects.map((project, i) => (
                    <Grid item xs={12} sm={8} md={6} key={i}>
                        <Card className={styles.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="project"
                                    height="500"
                                    image={project.image}
                                    objectPosition="center top"

                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button variant="outlined" color="primary" startIcon={<GitHubIcon />} href={project.gitHub}>Github</Button>
                                {project.deployed && <Button variant="outlined" color="primary" startIcon={<ComputerIcon />} href={project.deployed}>Deployed App</Button>}


                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box >
    )
}
