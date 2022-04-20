import React from 'react'

export default function Header() {

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
        </header >
    );
}
