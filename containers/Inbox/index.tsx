import React from 'react';
import { Grid, Box, ButtonBase, Typography } from '@mui/material';
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
        <Grid container spacing={2} sx={{ marginLeft: '20px' }} direction='column' alignItems='space-between'>
            <Grid item xs={4}>
                <Box>
                    <ButtonBase sx={{ mt: 5 }}>
                        <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
                    </ButtonBase>
                </Box>
                <Box sx={{ mt: -10, ml: 20 }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '19.5px', mt: 6 }}>Inbox</Typography>
                </Box>
            </Grid>
            {cards.map((index: any) => {
                return (
                    <>
                        <Grid item xs={4} key={index.id}>
                            <Typography sx={{ color: 'rgba(55, 55, 55, 0.5)', fontSize: '14px', mt: 2, fontWeight: 400 }}>
                                {index.date}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <img
                                src={index.image}
                                width={375}
                                height={203}
                                alt='open-tourney'
                                style={{ borderRadius: '12px', marginLeft: '10px', marginRight: '22px' }}
                            />

                            <Typography
                                sx={{
                                    marginLeft: '17px',
                                    marginRight: '22px',
                                    color: '#373737',
                                    fontSize: '14px',
                                    mt: 2,
                                    fontWeight: 600,
                                    lineHeight: '16px'
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
                                odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </Typography>
                        </Grid>
                    </>
                );
            })}
        </Grid>
    );
};

export default Inbox;
