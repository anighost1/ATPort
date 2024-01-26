import React from 'react'
import AppAppBar from './modules/views/AppAppBar'
import AppFooter from './modules/views/AppFooter'
import withRoot from './modules/withRoot';
import { styled } from '@mui/material/styles';
import {
    Box,
    ButtonBase,
    Typography,
    Container,
} from '@mui/material';


const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '4px solid currentColor',
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const images = [
    {
        url: '/svg/hollowed-boxes.svg',
        title: 'Pin at Ranchi',
        width: '60%',
    },
    {
        url: '/svg/geometric-intersection.svg',
        title: 'Fotos Dot Get',
        width: '40%',
    },
    {
        url: '/svg/sun-tornado.svg',
        title: 'Responsive template',
        width: '50%',
    },
    {
        url: '/svg/repeating-chevrons.svg',
        title: 'Stack GUI',
        width: '50%',
    },
];


function Projects() {

    React.useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <React.Fragment>
            <AppAppBar />
            <Container component="section" sx={{ mt: 8, mb: 4 }}>
                <Box
                    sx={{
                        mt: '4rem',
                        padding: 2
                    }}
                >
                    <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap' }}>
                        {images.map((image) => (
                            <ImageIconButton
                                key={image.title}
                                style={{
                                    width: image.width,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 0,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center 40%',
                                        backgroundImage: `url(${image.url})`,
                                    }}
                                />
                                <ImageBackdrop className="imageBackdrop" />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'common.white',
                                    }}
                                >
                                    <Typography
                                        component="h3"
                                        variant="h6"
                                        color="inherit"
                                        className="imageTitle"
                                    >
                                        {image.title}
                                        <div className="imageMarked" />
                                    </Typography>
                                </Box>
                            </ImageIconButton>
                        ))}
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(Projects)