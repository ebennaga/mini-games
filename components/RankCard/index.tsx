import { Grid, Typography, Avatar } from '@mui/material';
import numberFormat from 'helper/numberFormat';
import React from 'react';

interface IRankCard {
    key?: any;
    rank: number;
    image: string;
    username: string;
    point: number;
    prize: number;
    disabledUnderline?: boolean;
    isYourRank?: boolean;
}

// eslint-disable-next-line no-unused-vars
const RankCard: React.FC<IRankCard> = ({ key, rank, image, username, point, prize, disabledUnderline, isYourRank }) => {
    return (
        <Grid
            container
            key={key}
            sx={{
                borderBottom: disabledUnderline ? 'none' : '1px solid rgba(40, 38, 38, 0.2)',
                padding: '13px 0',
                margin: '10px 0',
                alignItems: 'center',
                background: isYourRank ? '#F4F1FF' : '#fff',
                borderRadius: isYourRank ? '15px' : 'none'
            }}
        >
            <Grid item xs={2}>
                <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={700}>
                    {rank}#
                </Typography>
            </Grid>
            <Grid item container xs={10} sx={{ color: '#282626', paddingLeft: '10px' }}>
                <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={image} alt={username} sx={{ width: '27px', height: '27px' }} />
                    <Typography component='h3' fontSize='14px' fontWeight={700} marginLeft='11px'>
                        {username}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography component='h3' fontSize='14px' fontWeight={600}>
                        {numberFormat(point)}
                    </Typography>
                </Grid>
                <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src='/icons/point.svg' width='19.95px' height='19.95px' alt='prize' />
                    <Typography component='h3' fontSize='12px' fontWeight={600} paddingLeft='6px'>
                        {prize}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RankCard;
