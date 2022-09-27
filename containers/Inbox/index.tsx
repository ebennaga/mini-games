import React from 'react';
import { Box, ButtonBase, Typography, Grid } from '@mui/material';
import { ArrowCircleLeft } from '@mui/icons-material';

const Inbox = () => {
    const cards = [
        {
            id: 1,
            date: '30 Oktober 2022',
            image: '/images/open_tourney.png'
        },
        {
            id: 2,
            date: '21 Oktober 2022',
            image: '/images/open_tourney2.png'
        },
        {
            id: 3,
            date: '20 Oktober 2022',
            image: '/images/open_tourney3.png'
        }
    ];
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Grid container spacing={1} sx={{ mt: -4, ml: '60px', width: '100%' }} direction='column'>
                <Grid item xs={4}>
                    <Box>
                        <ButtonBase sx={{ mt: 5 }}>
                            <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
                        </ButtonBase>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: -10 }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '24px', mt: 5 }}>Inbox</Typography>
                    </Box>
                </Grid>
                {cards.map((index: any) => {
                    return (
                        <>
                            <Grid item xs={4} key={index.id}>
                                <Typography sx={{ color: 'rgba(55, 55, 55, 0.5)', fontSize: '14px', mt: 1, fontWeight: 400 }}>
                                    {index.date}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <img
                                    src={index.image}
                                    width={375}
                                    height={203}
                                    alt='open-tourney'
                                    style={{ borderRadius: '12px', marginLeft: -2, marginRight: '22px' }}
                                />

                                <Typography
                                    sx={{
                                        marginLeft: 1,
                                        marginRight: '22px',
                                        color: '#373737',
                                        fontSize: '14px',
                                        mt: 1,
                                        fontWeight: 600,
                                        lineHeight: '16px'
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                                    aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                    himenaeos.
                                </Typography>
                            </Grid>
                        </>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Inbox;
