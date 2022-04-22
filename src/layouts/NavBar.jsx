import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Container, Button, Toolbar } from '@mui/material';
import resume from '../resume/ayakowoollan.pdf'




export default function NavBar() {

    const listItems = [
        {
            title: "Home",
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
            link: resume,
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

        }
    }



    return (

        <AppBar position="static" style={styles.navBar} sx={{ position: "sticky", top: "0", zIndex: "100" }}>
            <Container>
                <Toolbar disableGutters>
                    {listItems.map((listItem, i) => (
                        <Button key={i}>
                            <Link to={listItem.link}>{listItem.title}</Link>
                        </Button>
                    ))}


                </Toolbar>

            </Container>

        </AppBar>
    )
}