import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

// images
import bgImage from '../../../Assests/Images/subtle-prism.svg'

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
                Anil Tigga
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
                A software engineer who is skilled in React.js, Node.js, Laravel, SQL, and more. He transforms innovative ideas 
                into top-tier software solutions, specializing in front-end development with React.js and building robust back-end 
                systems using Node.js and Laravel. His expertise drives dynamic web application development.
            </Typography>
        </ProductHeroLayout>
    );
}
