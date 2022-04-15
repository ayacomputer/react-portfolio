import React, { useState } from 'react'
import { Link } from 'react-router-dom';




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
            title: "Project",
            link: "/project",
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
            <nav id="navBar">
                <ul
                    style={{
                    }}>
                    {listItems.map((listItem) => (
                        <li className="navButton">
                            <Link to={listItem.link}>{listItem.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <h1>Ayako Woollan</h1>
            <h2>Full Stack Developer</h2>


            <hr></hr>
            <p>Welcome to my portfolio!</p>
        </header>
    );
}
