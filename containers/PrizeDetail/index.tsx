/* eslint-disable no-unused-vars */
import { Box, Typography, Divider, Grid } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Button from 'components/Button/Index';
import Paragraph from 'components/Paragraph';
import { useRouter } from 'next/router';

const PrizeDetailContainer = () => {
    const router = useRouter();
    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
    console.log(router);
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='0 20px'>
                <Header hrefBack='/shops' isBack point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box padding='10px 20px'>
                <Box sx={{ backgroundColor: '#F4F1FF', padding: '20px', borderRadius: '10px' }}>
                    <img src='/images/ps5-3.png' alt='ps5-icon' style={{ width: '100%' }} />
                </Box>
                <Box sx={{ mt: '15px' }}>
                    <Grid container justifyContent='space-between'>
                        <Grid item xs={4}>
                            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <Box>
                                    <img src='/images/point-shops.png' alt='pointshops' />
                                </Box>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>80.000</Typography>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={1}
                            onClick={() => {
                                setIsFavorite(!isFavorite);
                            }}
                        >
                            {isFavorite ? (
                                <Favorite sx={{ color: 'red', cursor: 'pointer' }} />
                            ) : (
                                <FavoriteBorder sx={{ color: '#949494', cursor: 'pointer' }} />
                            )}
                        </Grid>
                    </Grid>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>Playstation 5</Typography>
                    <Typography sx={{ fontWeight: '600', fontSize: '12px' }}>Lorem ipsum dolor sit consectetur adipiscing</Typography>
                </Box>
            </Box>
            <Divider sx={{ my: '25px' }} />
            <Box padding='10px 20px' position='relative'>
                <Paragraph
                    title='Highlight'
                    paragraph=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                />
                <Paragraph
                    title='Description'
                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                />
                <Paragraph
                    title='Terms and Conditions'
                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                />
                <Box sx={{ mt: '185px' }}>
                    <Button
                        onClick={() => {
                            router.push(`${router.asPath}/confirmation`);
                        }}
                        title='Reedem'
                        backgoundColor='#A54CE5'
                        color='white'
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default PrizeDetailContainer;
