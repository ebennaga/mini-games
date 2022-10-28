import { Grid, Typography, Box } from '@mui/material';
import RankCard from 'components/RankCard';
import React from 'react';

interface TableRankProps {
    dataLeaderboard: any;
}

const TableRank: React.FC<TableRankProps> = ({ dataLeaderboard }) => {
    const sorting = dataLeaderboard && dataLeaderboard.filter((item: any) => item.position > 3);

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
                    <Box key={index}>
                        <RankCard
                            rank={rank}
                            image={item.image}
                            username={item.user.username}
                            point={item.user.point_prize}
                            score={item.user.total_score}
                        />
                    </Box>
                );
            })}
        </>
    );
};

export default TableRank;
