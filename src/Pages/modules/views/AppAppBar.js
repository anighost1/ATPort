import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import {
    Stack,
    ListItemButton,
    ListItemText,
    IconButton
} from '@mui/material';

import MenuDrawer from '../components/MenuDrawer';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function AppAppBar() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        href="/"
                        sx={{
                            fontSize: 24
                        }}
                    >
                        <Box component='h1' sx={{ color: 'secondary.main' }}>AT</Box>
                    </Link>
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
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'Project'} />
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'About'} />
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
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
                        {isDrawerOpen?<CloseIcon fontSize='large' sx={{ color: 'white' }} />:<MenuIcon fontSize='large' sx={{ color: 'white' }} />}
                    </IconButton>
                    <MenuDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppAppBar;
