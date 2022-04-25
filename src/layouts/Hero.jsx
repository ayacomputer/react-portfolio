import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Typewriter } from 'react-simple-typewriter'


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
            borderRadius: "28px",
            fontFamily: fontFamily,
            fontWeight: "bold",
            fontSize: "2rem",
            textTransform: "none"
        }
    }



    return (
        <header style={styles.header}>
            <h1 style={{ fontFamily: "Nunito" }} xs={{ fontSize: "2rem" }}>Ayako Woollan</h1>

            <h2 style={{ fontFamily: "Comforter" }} xs={{ fontSize: "1.75rem" }}>Full Stack Developer</h2>


            <hr></hr>
            <p style={{ fontFamily: "Courier", fontWeight: "bold" }} xs={{ fontSize: "1.75rem" }}>
                <Typewriter
                    words={['Welcome to My Portfolio!', 'Check Out my Projects!', 'Feel Free to Contact Me!']}
                    loop={false}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={80}
                    delaySpeed={1000}
                />
            </p>


            <Link to="/about" style={{ textDecoration: "none" }}><Button variant="contained" endIcon={<ArrowCircleRightIcon />} style={styles.button}>Click Here</Button></Link>


        </header >
    );
}
