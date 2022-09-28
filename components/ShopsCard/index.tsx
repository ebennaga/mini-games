import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

interface ShopsCardProps {
    title: string;
    image: any;
    point: number;
}

const ShopsCard: React.FC<ShopsCardProps> = ({ title, image, point }) => {
    return (
        <Grid container sx={{ px: '20px', pt: '55px' }}>
            <Grid
                container
                alignItems='center'
                justifyContent='space-between'
                position='relative'
                zIndex={1}
                sx={{ backgroundColor: '#A54CE5', height: '200px', borderRadius: '15px', width: '100%', padding: '30px' }}
            >
                <Grid item xs={4}>
                    <img src='/icons/fire-icon.png' alt='fire-icon' />
                    <Typography sx={{ fontWeight: '800', fontSize: '36px', color: 'white', lineHeight: '38px', mt: 1 }}>{title}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ position: 'absolute', bottom: '35px', right: '10px', zIndex: 9999 }}>
                        <img src={image} alt='ps5-icon' style={{ width: '200px' }} />
                        <Typography sx={{ fontWeight: 'bold', color: 'white' }}>Playstation 5</Typography>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <img src='/images/point-shops.png' alt='point-shops' />
                            <Typography sx={{ fontWeight: 'bold', color: 'white', fontSize: '12px' }}>{point}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ShopsCard;
