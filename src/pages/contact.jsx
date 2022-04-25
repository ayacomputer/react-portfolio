import React from 'react'
import NavBar from '../layouts/NavBar'
import { Grid, IconButton, Typography, Link } from '@mui/material'
import { Typewriter } from 'react-simple-typewriter'
import { Icon } from '@iconify/react';



export default function Contact() {

  const styles = {
    icon: {
      color: "wheat",
      fontSize: "10rem",
      backgroundColor: "rgb(24, 24, 24)",
      borderRadius: "10px",
      margin: "0.5rem"

    },
    container: {
      marginTop: "10vh",
      textAlign: "center",
    },
    link: {
      underline: "none",
      textDecoration: "none",
      color: "wheat",
    },
    footer: {
      fontSize: "0.75rem",
    }
  }
  const links = [
    {
      name: 'Email Me',
      href: `mailto:ayako.woollan@gmail.com`,
      icon: "ci:mail"
    },
    {
      name: 'Github',
      href: 'https://github.com/ayacomputer',
      icon: "ant-design:github-outlined"
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ayako-w-65454071',
      icon: "bi:linkedin"
    }
  ]


  return (
    <>
      <NavBar />
      <div>
        <h3>CONTACT</h3>
        <p style={{ fontFamily: "Courier", fontWeight: "bold" }} >
          <Typewriter
            words={["Feel free to contact me!", "Let's get in Touch!"]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <Grid container direction="row" justifyContent="center"
          alignItems="center" rowSpacing={2} style={{ marginTop: "1vh" }}>
          {links.map((link, i) => (
            <div item>
              <Link component="a" href={link.href} style={styles.link}><IconButton key={i} color="secondary" size="medium" style={styles.icon}>
                <Icon icon={link.icon} />
              </IconButton>
              </Link>
              <Typography>{link.name}</Typography>
            </div>

          ))}
        </Grid>

      </div>
    </>
  )
};
