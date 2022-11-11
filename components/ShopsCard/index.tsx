/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import React from 'react';
import { Grid, Typography, Box, ButtonBase } from '@mui/material';

interface ShopsCardProps {
    title: string;
    image: any;
    point?: string;
    onClick?: any;
    productName?: string;
}

const ShopsCard: React.FC<ShopsCardProps> = ({ title, image, point, onClick, productName }) => {
    return (
        <Box sx={{ px: '15px !important' }}>
            <Box
                onClick={onClick}
                sx={{
                    backgroundImage: `url(${image}), url(/images/img_error_bg.png)`,

                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '200px',
                    borderRadius: '15px',
                    p: '19px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Box>
                    <img src='/icons/logo-white.svg' alt='prize play' width='51.5px' height='auto' loading='lazy' />
                </Box>
                <Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ fontWeight: '800', fontSize: '36px', color: 'white', lineHeight: '38px', mr: 0.5 }}>
                            {title.split(' ')[0]}
                        </Typography>
                        <img src='/icons/fire-icon-white.svg' alt='fire-icon' loading='lazy' />
                    </Box>
                    {title.split(' ').map((text: string, index: number) => {
                        return (
                            index !== 0 && (
                                <Typography sx={{ fontWeight: '800', fontSize: '36px', color: 'white', lineHeight: '38px' }}>
                                    {text}
                                </Typography>
                            )
                        );
                    })}
                </Box>
            </Box>
        </Box>

        // <Grid container sx={{ px: '15px', pt: '55px', cursor: 'pointer' }} onClick={onClick}>
        //     <Grid
        //         container
        //         alignItems='center'
        //         justifyContent='space-between'
        //         position='relative'
        //         zIndex={1}
        //         sx={{ backgroundColor: '#A54CE5', height: '200px', borderRadius: '15px', width: '100%', padding: '30px' }}
        //     >
        //         <Grid item xs={4}>
        //             <img src='/icons/fire-icon.png' alt='fire-icon' />
        //             <Typography sx={{ fontWeight: '800', fontSize: '36px', color: 'white', lineHeight: '38px', mt: 1 }}>{title}</Typography>
        //         </Grid>
        //         <Grid item xs={4}>
        //             <Box sx={{ position: 'absolute', bottom: '35px', right: '10px', zIndex: 9999 }}>
        //                 <img
        //                     src={image}
        //                     alt='ps5-icon'
        //                     style={{ width: '200px' }}
        //                     onError={({ currentTarget }) => {
        //                         currentTarget.onerror = null;
        //                         currentTarget.src = '/images/img_error.svg';
        //                         currentTarget.style.width = '125px';
        //                     }}
        //                 />
        //                 <Typography sx={{ fontWeight: 'bold', color: 'white' }}>{productName}</Typography>
        //                 {point && (
        //                     <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        //                         <img src='/images/point-shops.png' alt='point-shops' />
        //                         <Typography sx={{ fontWeight: 'bold', color: 'white', fontSize: '12px' }}>{point}</Typography>
        //                     </Box>
        //                 )}
        //             </Box>
        //         </Grid>
        //     </Grid>
        // </Grid>
    );
};

export default ShopsCard;
