import React from 'react'
import projects from '../components/projects';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GitHub, Computer } from '@mui/icons-material';
import Header from '../layouts/Header';


const styles = {
    mainContainer: {
        background: "rgb(32, 33, 36)",
        height: "100%"
    },
    cardContainer: {
        maxWidth: "80%",
        margin: "3rem auto",
    },
    img: {
        background: "rgb(32, 33, 36)",
        maxWidth: "100%",
        objectFit: "cover top"
    }
};

export default function Projects() {
    return (
        <>
            <Box component="div" style={styles.mainContainer}>
                <Grid container justify="center">
                    {projects.map((project, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i} >
                            <Card style={styles.cardContainer}>
                                <CardActionArea href={project.gitHub}>
                                    <CardMedia
                                        component="img"
                                        alt="project"
                                        height="300vh"
                                        image={project.image}
                                        style={styles.img}

                                    />
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            {project.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>

                                    <Button variant="outlined" color="primary" startIcon={<GitHub />} href={project.gitHub}>Github</Button>
                                    {project.deployed && <Button variant="outlined" color="primary" startIcon={<Computer />} href={project.deployed}>Deployed App</Button>}


                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box >
        </>
    )
}
