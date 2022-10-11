import { Grid, Box, Typography } from '@mui/material';
import Button from 'components/Button/Index';
import React from 'react';

interface HistoryCardProps {
    isOngoing?: any;
    isDone?: any;
    isHighScores?: any;
    isJoined?: any;
    isPlace?: any;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ isOngoing, isDone, isHighScores, isJoined, isPlace }) => {
    return (
        <Grid
            container
            alignItems='center'
            borderBottom='1px solid rgba(40, 38, 38, 0.1)'
            padding='20px 0px'
            justifyContent='space-between'
        >
            <Grid item xs={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <Box
                        sx={{ width: '10px', height: '10px', backgroundColor: isOngoing ? '#A54CE5' : 'transparent', borderRadius: '100%' }}
                    />
                    <img src='/images/hopup.png' alt='game-img' width='45px' />
                </Box>
            </Grid>
            <Grid item xs={5}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>Your Place 1700th</Typography>
                    <Typography sx={{ fontSize: '13px' }}>Tournament</Typography>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box>
                    {isOngoing && (
                        <Box>
                            <Button title='Go' backgoundColor='#A54CE5' color='white' height='40px' />
                        </Box>
                    )}
                    {isDone && (
                        <Box sx={{ display: 'flex', flexDirection: 'column-reverse', textAlign: 'center', gap: '10px' }}>
                            {isHighScores && (
                                <>
                                    <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color: '#A54CE5' }}>High Scores</Typography>
                                    <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>217 Scores</Typography>
                                </>
                            )}
                            {isPlace && (
                                <>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'center' }}>
                                        <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color: '#56CF54' }}>+ 100</Typography>
                                        <Box>
                                            <img src='/images/point-shops.png' alt='coin' />
                                        </Box>
                                    </Box>
                                    <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>Place 100th</Typography>
                                </>
                            )}
                            {isJoined && (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'center' }}>
                                    <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color: 'red' }}>- 5000</Typography>
                                    <Box>
                                        <img src='/images/xs-coin.png' alt='coin' />
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    )}
                </Box>
            </Grid>
        </Grid>
    );
};

export default HistoryCard;
