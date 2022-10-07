import { Grid, Typography, Avatar } from '@mui/material';
import numberFormat from 'helper/numberFormat';
import React from 'react';

interface IRankRaffle {
    key?: any;
    round: number;
    image: string;
    username: string;
    tickets: number;
    prize: number;
    disabledUnderline?: boolean;
    isYourRank?: boolean;
}

// eslint-disable-next-line no-unused-vars
const RankRaffle: React.FC<IRankRaffle> = ({ key, round, image, username, tickets, prize, disabledUnderline, isYourRank }) => {
    return (
        <Grid
            container
            key={key}
            sx={{
                borderBottom: disabledUnderline ? 'none' : '1px solid rgba(40, 38, 38, 0.2)',
                padding: '15px 0',
                alignItems: 'center',
                background: isYourRank ? '#F4F1FF' : '#fff',
                borderRadius: isYourRank ? '15px' : 'none'
            }}
        >
            <Grid item xs={2}>
                <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={700}>
                    {round}
                </Typography>
            </Grid>
            <Grid item alignItems='center' container xs={10} sx={{ color: '#282626', paddingLeft: '10px' }}>
                <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={image} alt={username} sx={{ width: '27px', height: '27px' }} />
                    <Typography component='h3' fontSize='14px' fontWeight={700} marginLeft='11px'>
                        {username}
                    </Typography>
                </Grid>
                <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src='/icons/point.svg' width='19.95px' height='19.95px' alt='prize' />
                    <Typography component='h3' fontSize='14px' fontWeight={700} paddingLeft='6px'>
                        {prize}
                    </Typography>
                </Grid>
                <Grid item xs={4} textAlign='center'>
                    <Typography component='h3' fontSize='14px' fontWeight={600}>
                        {numberFormat(tickets)}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RankRaffle;
