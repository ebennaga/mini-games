/* eslint-disable no-nested-ternary */
import { Grid, Typography, Avatar } from '@mui/material';
import numberFormat from 'helper/numberFormat';
import React from 'react';

interface IRankCard {
    key?: any;
    rank: number;
    image?: string;
    username: string;
    point: number;
    score: number;
    disabledUnderline?: boolean;
    isYourRank?: boolean;
    hash?: string;
    isLive?: boolean;
    type: 'casual' | 'grand';
}

// eslint-disable-next-line no-unused-vars
const RankCard: React.FC<IRankCard> = ({
    isLive = false,
    hash = '#',
    key,
    rank,
    image,
    username,
    point,
    score,
    disabledUnderline,
    isYourRank,
    type
}) => {
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
                <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={600}>
                    {rank}
                    {hash}
                </Typography>
            </Grid>
            <Grid item container alignItems='center' xs={10} sx={{ color: '#282626', paddingLeft: '10px' }}>
                <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={image} alt={username} sx={{ width: '27px', height: '27px', ml: -1 }} />
                    <Typography component='h3' fontSize='14px' fontWeight={600} marginLeft='9px'>
                        {username?.toLowerCase()}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography component='h3' fontSize='14px' fontWeight={600}>
                        {numberFormat(Number(score))}
                    </Typography>
                </Grid>
                <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={`${isLive ? '/images/e-voucher.png' : type === 'casual' ? '/images/coin.png' : '/images/point-shops.png'}`}
                        width='19.95px'
                        height='19.95px'
                        alt='score'
                        loading='lazy'
                    />
                    <Typography component='h3' fontSize='12px' fontWeight={800} paddingLeft='6px'>
                        {numberFormat(point)}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RankCard;
