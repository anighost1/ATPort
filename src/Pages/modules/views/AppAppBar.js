import * as React from 'react';
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

import MenuIcon from '@mui/icons-material/Menu';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

function AppAppBar() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar
                    sx={{
                        justifyContent: {
                            xs: 'space-between',
                            sm: 'space-around'
                        }
                    }}
                >
                    {/* <Box sx={{ flex: 1 }} /> */}
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
                        }}>
                        <MenuIcon fontSize='large' sx={{ color: 'white' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppAppBar;
