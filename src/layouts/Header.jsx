import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Container, Button, Toolbar } from '@mui/material';




export default function Header() {

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
            link: "/resume",
        },

    ];



    return (
        <header>
            <AppBar id="navBar" position="static">
                <Container>
                    <Toolbar disableGutters>
                        {listItems.map((listItem) => (
                            <Button >
                                <Link to={listItem.link}>{listItem.title}</Link>
                            </Button>
                        ))}


                    </Toolbar>

                </Container>

            </AppBar>
            <h1>Ayako Woollan</h1>
            <h2>Full Stack Developer</h2>


            <hr></hr>
            <p>Welcome to my portfolio!</p>
        </header>
    );
}
