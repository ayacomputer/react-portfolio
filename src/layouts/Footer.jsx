import React from 'react'
import { IconButton, Container } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';




export default function Footer() {
  const styles = {
    container: {
      textAlign: "center",
    },
    footer: {
      fontSize: "0.75rem",
    }
  }
  const links = [
    {
      href: 'mailto:ayako.woollan@gmail.com',
      icon: () => <MailOutlineIcon />
    },
    {
      href: 'https://github.com/ayacomputer',
      icon: () => <GitHubIcon />
    },
    {
      href: 'https://www.linkedin.com/in/ayako-w-65454071',
      icon: () => <LinkedInIcon />
    },
    {
      href: 'https://www.facebook.com/ayako.woollan',
      icon: () => <FacebookIcon />
    }
  ]

  return (
    <Container style={styles.container}>
      {links.map((link, i) => (
        <IconButton key={i} color="secondary" href={link.href} size="medium" target="_blank">
          {link.icon()}
        </IconButton>
      ))}
      <div style={styles.footer}>
        <p>Updated April 2022</p>
        2022 © <br />
        Powered by <a href="https://github.com/ayacomputer" style={{ textDecoration: "none" }} target="_blank">Ayako Woollan</a>
      </div>
    </Container>
  )
}
