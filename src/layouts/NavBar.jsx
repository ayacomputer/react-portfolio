import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Container, Button, Toolbar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';




export default function NavBar() {

    const listItems = [
        {
            title: "Home",
            link: "#/",
        },
        {
            title: "About",
            link: "#/about",

        },
        {
            title: "Projects",
            link: "#/projects",

        },
        {
            title: "Contact",
            link: "#/contact",

        },
        {
            title: "Resume",
            link: 'https://drive.google.com/file/d/1LuqlAfQ7WVJrnhbRjGEO84fQdFdKrDgl/view?usp=sharing',
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
            fontSize: "2rem",
        },
        logo: {
            fontFamily: fontFamily,
            backgroundColor: "inherit",
            fontWeight: "bold",
            fontSize: "2rem",
            color: "wheat"
        },
        button: {
            fontSize: "1.50rem",
            fontWeight: "bold",
            fontFamily: fontFamily,
            color: "wheat",
            borderRadius: "28px"

        }
    }
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (

        <>
            <AppBar position="static" style={styles.navBar} elevation='0' maxWidth="xl">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            style={styles.logo}

                        >
                            AYAKO WOOLLAN
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {listItems.map((listItem, i) => (
                                    <MenuItem key={i} onClick={handleCloseNavMenu} style={styles.button}>
                                        <Typography textAlign="center" style={styles.button} href={listItem.link}>{listItem.title}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            style={styles.button}
                        >
                            AYAKO WOOLLAN
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={styles.button}>
                            {listItems.map((listItem, i) => (
                                <Button
                                    key={i}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    href={listItem.link}
                                    style={styles.button}
                                >
                                    {listItem.title}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>

    )
}