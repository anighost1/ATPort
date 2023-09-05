import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

function AppAppBar() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'center' }}>
                    {/* <Box sx={{ flex: 1 }} /> */}
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        href="/premium-themes/onepirate/"
                        sx={{
                            fontSize: 24
                        }}
                    >
                        <Box component='span' sx={{ color: 'secondary.main' }}>A</Box>nil <Box component='span' sx={{ color: 'secondary.main' }}>T</Box>gga
                    </Link>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default AppAppBar;
