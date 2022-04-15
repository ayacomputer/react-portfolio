import React, { useState } from 'react'
import { Link } from 'react-router-dom';




export default function Navbar() {

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
        <nav>
            <ul
                style={{
                    paddingLeft: 0,
                    listStyle: "none",
                    display: "flex",
                }}
            >
                {listItems.map((listItem) => (
                    <li style={{ marginRight: "5px", marginLeft: "5px" }}>
                        <Link to={listItem.link}>{listItem.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
