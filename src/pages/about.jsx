import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Typography, Box, Grid } from '@mui/material'
import Ayako from '../../src/images/logo.png'

export default function About() {


  const skills = [
    {
      skill: 'github',
      icon: () => <FontAwesomeIcon icon='fa-brands fa-node' />,
      href: 'https://github.com/',
    },
    {
      skill: 'git',
      icon: () => <FontAwesomeIcon icon='fa-brands fa-node' />,
      href: 'https://git-scm.com/'
    },
    {
      skill: 'HTML5',
      icon: () => <FontAwesomeIcon icon='fa-brands fa-node' />,
      href: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
    },
    {
      skill: 'CSS3',
      icon: () => <FontAwesomeIcon icon="fa-brands fa-node" />,
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    }, {
      skill: 'CSS3',
      icon: () => <FontAwesomeIcon icon="fa-brands fa-node" />,
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      skill: 'CSS3',
      icon: () => <FontAwesomeIcon icon="fa-brands fa-node" />,
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      skill: 'CSS3',
      icon: () => <FontAwesomeIcon icon="fa-brands fa-node" />,
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      skill: 'CSS3',
      icon: () => <FontAwesomeIcon icon="fa-brands fa-node" />,
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      skill: 'CSS3',
      icon: () => <FontAwesomeIcon icon="fa-brands fa-node" />,
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },


  ]
  return (
    <>
      <Container className="aboutMeBox">
        <Typography h3 className="cardHeader">ABOUT</Typography>
        <Grid container spacing={1}>
          <Box item>
            <img src={Ayako} alt="A photo of me" />
          </Box>
          <Box item >
            <p>After spending over 6 years in the education industry in Australia and
              Japan, I
              discovered a passion for web development and decided to study through a bootcamp and
              self-study. I love working with other developers to find the
              best way to solve problems. I want to create user-friendly websites and applications that
              help
              people achieve their personal and business needs. My hobbies are cooking, fishing and
              coding.
            </p>
          </Box>
          <div className="profileCard-right-bottom">
            <h3 className="skillHeader">Skills</h3>
            <ul>
              <li>
                <a href="https://github.com/"><img className="mySkills" src="./assets/icons/gitHub.png" alt="icon link to the GitHub repository" /></a>
              </li>
              <li>
                <a href="https://git-scm.com/"><img className="mySkills" src="./assets/icons/git.png" alt="git icon" /></a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"> <img className="mySkills" src="./assets/icons/html5.png" alt="html5 icon" /></a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img className="mySkills" src="./assets/icons/css3.png" alt="css3 icon" /></a>
              </li>
              <li>
                <a href="https://nodejs.org/en/"><img className="mySkills" src="./assets/icons/nodeJs.png" alt="nodejs icon" /></a>
              </li>
              <li>
                <a href="https://www.mysql.com/"><img className="mySkills" src="./assets/icons/mysql.png" alt="mysql icon" /></a>
              </li>
              <li>
                <a href="https://expressjs.com/"><img className="mySkills" src="./assets/icons/express.png" alt="expressjs icon" /></a>
              </li>
              <li>
                <a href="https://www.npmjs.com/"><img className="mySkills" src="./assets/icons/npm.png" alt="npm icon" /></a>
              </li>
            </ul>
          </div>
        </Grid>
      </Container>
    </>

  )
}
