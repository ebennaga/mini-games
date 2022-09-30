import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import RankRaffle from 'components/RankRaffle';

interface RaffleWinnersProps {
    dataList: any;
}

const RaffleWinners: React.FC<RaffleWinnersProps> = ({ dataList }) => {
    return (
        <Box sx={{ width: '100vw', mt: '65px' }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, color: '#373737' }}>Previous Raffle Winners</Typography>
                </Grid>
            </Grid>
            <Grid container mt='25px' sx={{ borderBottom: '1px solid rgba(40, 38, 38, 0.2)', padding: '13px 0' }}>
                <Grid item xs={2}>
                    <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={600} sx={{ color: 'rgba(40, 38, 38, 0.5)' }}>
                        Round
                    </Typography>
                </Grid>
                <Grid item container xs={10} sx={{ color: 'rgba(40, 38, 38, 0.5)' }}>
                    <Grid item xs={5}>
                        <Typography textAlign='center' paddingLeft='25px' component='h3' fontSize='12px' fontWeight={600}>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography paddingLeft='15px' component='h3' fontSize='12px' fontWeight={600}>
                            Prize
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography textAlign='center' paddingLeft='15px' component='h3' fontSize='12px' fontWeight={600}>
                            User Ticket
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {dataList.length > 0 &&
                dataList.map((item: any, idx: number) => (
                    <RankRaffle image={item.image} round={284 - idx} username={item.username} tickets={item.tickets} prize={item.prize} />
                ))}
        </Box>
    );
};

export default RaffleWinners;
