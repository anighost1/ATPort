import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

// images
import bgImage from '../../../Assests/Images/subtle-prism.svg'
import { Box } from '@mui/material';

const backgroundImage = bgImage

export default function ProductHero() {
    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: 'none' }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                {/* <span>A</span><span className='after'>nil</span> <span className='initial'>T</span><span className='after'>igga</span> */}
                <Box id='at' sx={{fontSize:{xs:'2rem', sm:'3rem'}}}>
                    <Box component={'h1'} className='initial' sx={{ color: 'secondary.main' }}>A</Box>
                    <Box component={'h1'} className='after'>nil</Box>
                    <Box component={'h1'} id='t' className='initial' sx={{ color: 'secondary.main' }}>&nbsp; T</Box>
                    <Box component={'h1'} className='after'>igga</Box>
                </Box>
            </Typography>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                anil.anil300@gmail.com
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
            >
                A software engineer who is eager to learn more and build robust systems.
            </Typography>
        </ProductHeroLayout>
    );
}
