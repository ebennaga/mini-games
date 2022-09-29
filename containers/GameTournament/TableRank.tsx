/* eslint-disable no-unused-vars */
import { Grid, Typography } from '@mui/material';
import React from 'react';

interface TableRankProps {
    dataLeaderboard: any;
}

const TableRank: React.FC<TableRankProps> = ({ dataLeaderboard }) => {
    const sorting = dataLeaderboard && dataLeaderboard.sort((a: any, b: any) => b.point - a.point).slice(3, dataLeaderboard.length);

    return (
        <>
            <Grid container sx={{ borderBottom: '1px solid rgba(40, 38, 38, 0.2)', padding: '13px 0' }}>
                <Grid item xs={2}>
                    <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={500} sx={{ color: 'rgba(40, 38, 38, 0.5)' }}>
                        Rank
                    </Typography>
                </Grid>
                <Grid item container xs={10} sx={{ color: 'rgba(40, 38, 38, 0.5)' }}>
                    <Grid item xs={4}>
                        <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={500}>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={500}>
                            Score
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={500}>
                            Prize
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {sorting.map((item: any, index: number) => {
                const rank = index + 4;
                return (
                    <Grid container key={index} sx={{ borderBottom: '1px solid rgba(40, 38, 38, 0.2)', padding: '13px 0' }}>
                        <Grid item xs={2}>
                            <Typography
                                textAlign='center'
                                component='h3'
                                fontSize='12px'
                                fontWeight={500}
                                sx={{ color: 'rgba(40, 38, 38, 0.5)' }}
                            >
                                {rank}#
                            </Typography>
                        </Grid>
                        <Grid item container xs={10} sx={{ color: 'rgba(40, 38, 38, 0.5)' }}>
                            <Grid item xs={4}>
                                <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={500}>
                                    Name
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={500}>
                                    Score
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={500}>
                                    Prize
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                );
            })}
        </>
    );
};

export default TableRank;
