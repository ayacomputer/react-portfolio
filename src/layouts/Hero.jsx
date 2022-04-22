import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export default function Hero() {

    const fontFamily = [
        'Nunito',
        'Comforter',
        'Roboto'
    ].join(',');

    const styles = {
        header: {
            marginTop: "20vh",
            textAlign: "center",
            fontFamily: fontFamily

        },
        button: {
            backgroundColor: "rgba(223, 100, 78, 0.911)",
            textColor: "rgb(32, 33, 36)",
            textDecoration: "none",
        }
    }



    return (
        <header style={styles.header}>
            <h1 style={{ fontFamily: "Nunito" }}>Ayako Woollan</h1>
            <h2 style={{ fontFamily: "Comforter" }}>Full Stack Developer</h2>


            <hr></hr>
            <p>Welcome to my portfolio!</p>
            <Link to="/about" underline="none"><Button variant="contained" size="large" endIcon={<ArrowCircleRightIcon />} style={styles.button}>Explore More</Button></Link>
        </header >
    );
}
