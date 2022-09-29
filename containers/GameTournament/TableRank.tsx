import { Avatar, Grid, Typography } from '@mui/material';
import numberFormat from 'helper/numberFormat';
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
                    <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={600} sx={{ color: 'rgba(40, 38, 38, 0.5)' }}>
                        Rank
                    </Typography>
                </Grid>
                <Grid item container xs={10} sx={{ color: 'rgba(40, 38, 38, 0.5)' }}>
                    <Grid item xs={5}>
                        <Typography paddingLeft='25px' component='h3' fontSize='12px' fontWeight={600}>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography paddingLeft='15px' component='h3' fontSize='12px' fontWeight={600}>
                            Score
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography paddingLeft='15px' component='h3' fontSize='12px' fontWeight={600}>
                            Prize
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {sorting.map((item: any, index: number) => {
                const rank = index + 4;
                return (
                    <Grid
                        container
                        key={index}
                        sx={{ borderBottom: '1px solid rgba(40, 38, 38, 0.2)', padding: '13px 0', alignItems: 'center' }}
                    >
                        <Grid item xs={2}>
                            <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={700}>
                                {rank}#
                            </Typography>
                        </Grid>
                        <Grid item container xs={10} sx={{ color: '#282626', paddingLeft: '10px' }}>
                            <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar src={item.image} alt={item.username} sx={{ width: '27px', height: '27px' }} />
                                <Typography component='h3' fontSize='14px' fontWeight={700} marginLeft='11px'>
                                    {item.username}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography component='h3' fontSize='14px' fontWeight={600}>
                                    {numberFormat(item.point)}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src='/icons/point.svg' width='19.95px' height='19.95px' alt='prize' />
                                <Typography component='h3' fontSize='12px' fontWeight={600} paddingLeft='6px'>
                                    {item.prize}
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
