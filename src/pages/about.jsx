import React from 'react'
import { Icon } from '@iconify/react';
import NavBar from '../layouts/NavBar';
import { Container, Typography, Grid, Link, Box } from '@mui/material'
import Ayako from '../../src/images/logo.png'

export default function About() {

  const skills = [
    { skill: "HTML", icon: "iconoir:html5", href: "https://html.spec.whatwg.org/multipage/" },
    { skill: "CSS", icon: "iconoir:css3", href: "https://www.w3.org/TR/CSS/#css" },
    { skill: "JavaScript", icon: "teenyicons:javascript-outline", href: "https://www.javascript.com/" },
    { skill: "Node.js", icon: "la:node", href: "https://nodejs.org/en/" },
    { skill: "npm", icon: "akar-icons:npm-fill", href: "https://www.npmjs.com/" },
    { skill: "Express", icon: "simple-icons:express", href: "https://expressjs.com/" },
    { skill: "React", icon: "akar-icons:react-fill", href: "https://reactjs.org/" },
    { skill: "Git", icon: "ion:git-branch-outline", href: "https://git-scm.com/" },
    { skill: "Github", icon: "akar-icons:github-outline-fill", href: "https://github.com/" },
    { skill: "RESTful API", icon: "eos-icons:api", href: "https://restfulapi.net/" },
    { skill: "Bootstrap", icon: "tabler:brand-bootstrap", href: "https://getbootstrap.com/" },
    { skill: "MUI", icon: "simple-icons:mui", href: "https://mui.com/" },
    { skill: "MySQL", icon: "cib:mysql", href: "https://www.mysql.com/" },
    { skill: "MongoDB", icon: "teenyicons:mongodb-outline", href: "https://www.mongodb.com/" },
    { skill: "GraphQL", icon: "akar-icons:graphql-fill", href: "https://graphql.org/" },
    { skill: "Handlebars", icon: "simple-icons:handlebarsdotjs", href: "https://handlebarsjs.com/" },
    { skill: "VS Code", icon: "tabler:brand-visual-studio", href: "https://code.visualstudio.com/" },
    { skill: "Insomnia", icon: "simple-icons:insomnia", href: "https://insomnia.rest/" },

  ];
  return (
    <>
      <NavBar />
      <h3>TEST</h3>
      <Container>
        <h3>ABOUT</h3>
        <Grid container direction="row" rowSpacing={1}>
          <Grid item xs={4}>
            <img src={Ayako} alt="me" style={{ height: "50vh" }} />
          </Grid>
          <Grid item container xs={8} style={{ padding: "5rem", placeItems: "center" }}>
            <Grid item style={{ fontSize: "1.75rem", textAlign: "left" }}>
              Hi! After spending over 6 years in the education industry in Australia and
              Japan, I
              discovered a passion for web development and decided to study through a bootcamp and
              self-study. I love working with other developers to find the
              best way to solve problems. I want to create user-friendly websites and applications that
              help
              people achieve their personal and business needs. My hobbies are cooking, fishing and
              coding.
            </Grid>

          </Grid>
        </Grid>
        <Container>
          <h3>Skills</h3>
          <Grid container rowSpacing={3} justifyContent="center">
            {skills.map((skill, i) => (
              <Link key={i} to={skill.href} underline="none" target="_blank">
                <Box item key={i} md={1} style={{ fontSize: "2rem", color: "wheat", backgroundColor: "inherit", padding: "0.5rem" }}>
                  <Icon icon={skill.icon} />
                  <Typography>{skill.skill}</Typography></Box>
              </Link>
            ))}
          </Grid>

        </Container>
      </Container>
    </>

  )
}
