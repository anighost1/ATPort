import React from 'react'
import AppAppBar from './modules/views/AppAppBar'
import AppFooter from './modules/views/AppFooter'
import withRoot from './modules/withRoot'
import {
    Container,
    Stack, Typography
} from '@mui/material'

function PageNotFound() {
    return (
        <React.Fragment>
            <AppAppBar />
            <Container
                component="section"
                sx={{
                    mt: 8,
                    mb: 4,
                    minHeight: '70vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Typography variant='h1'> Page not found </Typography>
            </Container>
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(PageNotFound)