import React from 'react'
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Hero() {

    const fontFamily = [
        'Nunito',
        'Comforter',
        'Roboto'
    ].join(',');

    const styles = {
        header: {
            textAlign: "center",
            fontFamily: fontFamily

        }
    }



    return (
        <header style={styles.header}>
            <h1 style={{ fontFamily: "Nunito" }}>Ayako Woollan</h1>
            <h2 style={{ fontFamily: "Comforter" }}>Full Stack Developer</h2>


            <hr></hr>
            <p>Welcome to my portfolio!</p>
            <Link to="/about"><IconButton>Explore More</IconButton></Link>
        </header >
    );
}
