import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Container, Button, Toolbar } from '@mui/material';



export default function NavBar() {

    const listItems = [
        {
            title: "AYAKO WOOLLAN",
            link: "/",
        },
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Projects",
            link: "/projects",
        },
        {
            title: "Contact",
            link: "/contact",
        },
        {
            title: "Resume",
            href: `https://drive.google.com/file/d/1LuqlAfQ7WVJrnhbRjGEO84fQdFdKrDgl/view?usp=sharing`,
            target: "_blank"
        },

    ];

    const fontFamily = [
        'Nunito',
        'Comforter',
        'Roboto'
    ].join(',');

    const styles = {
        navBar: {
            textAlign: "center",
            fontFamily: fontFamily,
            backgroundColor: "inherit",
        },
        button: {
            fontSize: "2rem",
            fontWeight: "Bold",
            fontFamily: fontFamily,

        }
    }


    return (

        <AppBar position="static" style={styles.navBar} sx={{ position: "sticky", top: "0", zIndex: "100" }} elevation='0'>
            <Container>
                <Toolbar disableGutters>
                    {listItems.map((listItem, i) => (
                        <Button key={i} style={styles.button} spacing={1}>
                            {listItem.href && (
                                <Link href={listItem.href} target={listItem.target} style={{ textDecoration: 'none' }} variant="button">{listItem.title}</Link>
                            )} {!listItem.href && (
                                <Link to={listItem.link} style={{ textDecoration: 'none' }} variant="button">{listItem.title}</Link>
                            )}
                        </Button>
                    ))}


                </Toolbar>

            </Container>

        </AppBar>
    )
}