import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import {
    Stack,
    ListItemButton,
    ListItemText,
    IconButton,
    Typography
} from '@mui/material';

import MenuDrawer from '../components/MenuDrawer';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, NavLink } from 'react-router-dom';

function AppAppBar() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const triggerDrawer = () => {
        setIsDrawerOpen(state => !state)
    }

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <Toolbar
                    sx={{
                        justifyContent: {
                            xs: 'space-between',
                            sm: 'space-around'
                        }
                    }}
                >

                    <Box
                        sx={{
                            fontSize: 24,
                            cursor: 'pointer'
                        }}
                        onClick={goToHome}
                    >
                        <Box component='h1' sx={{ color: 'secondary.main' }}>AT</Box>
                    </Box>
                    <Stack
                        direction={'row'}
                        spacing={2}
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'flex'
                            },
                            height: '100%'
                        }}
                    >
                        <ListItemButton component={NavLink} to={'/'} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'Home'} />
                        </ListItemButton>
                        <ListItemButton component={NavLink} to={'/about'} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'About'} />
                        </ListItemButton>
                        <ListItemButton component={NavLink} to={'/projects'} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'Projects'} />
                        </ListItemButton>
                        <ListItemButton component={NavLink} to={'/contact'} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'Contact'} />
                        </ListItemButton>
                    </Stack>
                    <IconButton
                        sx={{
                            display: {
                                sm: 'none'
                            }
                        }}
                        onClick={triggerDrawer}
                    >
                        {isDrawerOpen ? <CloseIcon fontSize='large' sx={{ color: 'white' }} /> : <MenuIcon fontSize='large' sx={{ color: 'white' }} />}
                    </IconButton>
                    <MenuDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppAppBar;
