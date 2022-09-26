import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import Link from 'next/link';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BalanceCard from './BalanceCard';
import BarExp from './BarExp';
import HighScoreCard from './HighScoreCard';
import ProfilePicture from './ProfilePicture';
import StatsCard from './StatsCard';

const Profile = () => {
    return (
        <Box
            sx={{
                color: '#373737',
                padding: '0 20px',
                width: '-webkit-fill-available',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <HeaderBack title='Profile' isSetting />
            <ProfilePicture image='/icons/dummy/profile-2.png' />
            <Typography component='h3' fontWeight='bold' fontSize='18px' mt='26px'>
                Lord Rinto
            </Typography>
            <BarExp labelBar='10018/25000' value={70} />
            <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '24px' }}>
                    <Typography component='h3' fontWeight='bold' fontSize='18px'>
                        Balance
                    </Typography>
                    <Link href='/transaction'>
                        <a style={{ textDecoration: 'unset', fontSize: '14px', fontWeight: 600, color: '#A54CE5' }}>View Transaction</a>
                    </Link>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <BalanceCard title='Coins' value={102003} onClick={undefined} buttonText='Top up Coins' icon='/icons/coins.png' />
                    </Grid>
                    <Grid item xs={6}>
                        <BalanceCard title='Points' value={2340} onClick={undefined} buttonText='Redeem Points' icon='/icons/points.png' />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
            <Box
                sx={{
                    width: '100%',
                    marginTop: '24px',
                    padding: '24px'
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '24px' }}>
                    <Typography component='h3' fontWeight='bold' fontSize='18px'>
                        Your Stats
                    </Typography>
                    <Link href='/stats'>
                        <a style={{ textDecoration: 'unset', fontSize: '14px', fontWeight: 600, color: '#A54CE5' }}>View History</a>
                    </Link>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <StatsCard title='Total Earns' icon='/icons/points.png' value={1020} />
                    </Grid>
                    <Grid item xs={6}>
                        <StatsCard title='Total Plays' icon='/icons/plays.png' value={230} />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
            <Box sx={{ width: '100%', marginTop: '24px' }}>
                <Typography component='h3' fontWeight='bold' fontSize='18px' alignItems='start' marginBottom='24px'>
                    High Scores
                </Typography>
                <HighScoreCard image='/icons/dummy/menara.png' title='Menara Dingdong' score={1090} />
            </Box>

            <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
            <ButtonBase>
                <Typography
                    component='span'
                    fontSize='12px'
                    fontWeight={600}
                    sx={{ color: '#A54CE5', display: 'flex', alignItems: 'center' }}
                >
                    Show All <ArrowForwardIcon sx={{ fontSize: '16px', ml: 0.7 }} />
                </Typography>
            </ButtonBase>
        </Box>
    );
};

export default Profile;
