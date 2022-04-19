import React from 'react'
import projects from '../components/projects';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import ComputerIcon from '@mui/icons-material/Computer';





const styles = {
    mainContainer: {
        background: "rgb(32, 33, 36)",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
    },
};



export default function Projects() {
    return (
        <Box component="div" style={styles.mainContainer}>
            <Grid container justify="center">
                {projects.map((project, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Card style={styles.cardContainer}>
                            <CardActionArea href={project.gitHub}>
                                <CardMedia
                                    component="img"
                                    alt="project"
                                    height="500"
                                    image={project.image}
                                    objectFit="contain"

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

                                <Button variant="outlined" color="primary" startIcon={<GitHubIcon />} href={project.gitHub}>Github</Button>
                                {project.deployed && <Button variant="outlined" color="primary" startIcon={<ComputerIcon />} href={project.deployed}>Deployed App</Button>}


                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box >
    )
}
