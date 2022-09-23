/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Verified } from '@mui/icons-material';

interface MissionCardProps {
    isCompleted: boolean;
    isClaimed?: boolean;
}

const MissionCard: React.FC<MissionCardProps> = ({ isCompleted = true, isClaimed }) => {
    return (
        <Grid
            container
            alignItems='center'
            sx={{ opacity: isClaimed ? 0.5 : 'none', backgroundColor: '#F4F1FF', borderRadius: '10px', padding: '16px 18px', mt: 3 }}
        >
            <Grid item xs={6}>
                <Box sx={{ display: 'flex', gap: '10px', mb: 2, alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>5/5</Typography>
                    {isCompleted && (
                        <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Verified sx={{ color: '#00AE50' }} />
                            <Typography sx={{ fontSize: '20px' }}>Mission Complete</Typography>
                        </Box>
                    )}
                </Box>
                <Typography sx={{ fontWeight: 'bold' }}>Play 5 Games Banana jump</Typography>
            </Grid>
            <Grid
                item
                xs={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: isClaimed ? 'end' : 'space-around',
                    alignItems: 'center'
                }}
            >
                {isClaimed ? (
                    <Box
                        sx={{
                            display: 'flex',
                            width: '50%',
                            backgroundColor: '#FFF5CD',
                            padding: '8px',
                            justifyContent: 'space-around',
                            borderRadius: '10px'
                        }}
                    >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '19.5px' }}>Claimed</Typography>
                    </Box>
                ) : (
                    <>
                        {' '}
                        <Box
                            sx={{
                                display: 'flex',
                                width: '25%',
                                backgroundColor: '#E8DEFF',
                                padding: '8px',
                                justifyContent: 'space-around',
                                borderRadius: '10px'
                            }}
                        >
                            <Typography sx={{ fontWeight: 'bold', color: '#9163F6', fontSize: '19.5px' }}>XP</Typography>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '19.5px' }}>10</Typography>
                        </Box>
                        {isCompleted && <Typography> + </Typography>}
                        <Box
                            sx={{
                                display: 'flex',
                                width: '25%',
                                backgroundColor: '#FFF5CD',
                                padding: '8px',
                                justifyContent: 'space-between',
                                borderRadius: '10px',
                                fontWeight: 'bold',
                                alignItems: 'center'
                            }}
                        >
                            <img src='/images/coin.png' alt='coin-img' />
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>10</Typography>
                        </Box>
                    </>
                )}
            </Grid>
        </Grid>
    );
};

export default MissionCard;
