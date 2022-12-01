/* eslint-disable no-nested-ternary */
import React from 'react';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import { Box, Skeleton, Grid, Typography, ButtonBase } from '@mui/material';
import Link from 'next/link';

import HeaderBack from 'components/HeaderBack';
import { useRouter } from 'next/router';
import BalanceCard from './BalanceCard';
import StatsCard from './StatsCard';
import NavigationCard from 'components/NavigationCard';
import SocialMediaList from 'components/SocialMediaList';

interface ProfileSkeletonProps {
    isLoading: boolean;
}

const ProfileSkeletonDetail: React.FC<ProfileSkeletonProps> = ({ isLoading }) => {
    const router = useRouter();
    const listNavigation = [
        { title: 'Input Promo Code', icon: '/icons/promo-code.png' }
        // { title: 'Give us Ratings', icon: '/icons/rating.png', onclick: () => router.push('/ratingas') }
    ];
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px'>
                <HeaderBack title='Profile' isSetting handleBack={() => router.push('/')} />
            </Box>
            <Box padding='10px 20px'>
                <Box>
                    <Skeleton variant='circular' width={100} height={100} sx={{ mx: 'auto' }} />
                    <Skeleton variant='rounded' width={100} height={25} sx={{ mx: 'auto', mt: '10px' }} />
                    <Skeleton variant='rounded' width={190} height={15} sx={{ mx: 'auto', mt: '10px' }} />
                    <Skeleton variant='rounded' width={90} height={10} sx={{ mx: 'auto', mt: '10px' }} />
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Box
                        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '24px' }}
                    >
                        <Typography component='h3' fontWeight='bold' fontSize='18px'>
                            Balance
                        </Typography>
                        <Link href='/transaction'>
                            <a style={{ textDecoration: 'unset', fontSize: '14px', fontWeight: 600, color: '#A54CE5' }}>View Transaction</a>
                        </Link>
                    </Box>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <BalanceCard
                            title='Coins'
                            // value={userState?.coin}
                            isLoading={isLoading}
                            onClick={() => router.push('/topup')}
                            buttonText='Top up Coins'
                            icon='/icons/coins.png'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <BalanceCard
                            title='Points'
                            isLoading={isLoading}
                            // value={userState?.point}
                            onClick={() => router.push('/shops')}
                            buttonText='Redeem Points'
                            icon='/images/point-shops.png'
                        />
                    </Grid>
                </Grid>
                <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
                <Box
                    component='section'
                    sx={{
                        width: '100%'
                    }}
                >
                    <Box
                        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '24px' }}
                    >
                        <Typography component='h3' fontWeight='bold' fontSize='18px'>
                            Game Stats
                        </Typography>
                        <Link href='/history'>
                            <a style={{ textDecoration: 'unset', fontSize: '14px', fontWeight: 600, color: '#A54CE5' }}>View History</a>
                        </Link>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <StatsCard title='Total Earns' isLoading={isLoading} icon='/images/point-shops.png' />
                        </Grid>
                        <Grid item xs={6}>
                            <StatsCard title='Total Plays' isLoading={isLoading} icon='/icons/plays.png' />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
                <Box sx={{ width: '100%', mt: '20px' }}>
                    <Typography component='h3' fontWeight='bold' fontSize='18px'>
                        Redeemed Stats
                    </Typography>
                    <Box
                        sx={{
                            border: '0.5px solid #E6E6E6',
                            padding: '30px 20px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderRadius: '15px',
                            mt: '20px',
                            gap: '8px'
                        }}
                    >
                        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Total Prize</Typography>
                            <Box>
                                <img src='/icons/redeem-active.svg' alt='redeem' width={20} />
                            </Box>
                            <Skeleton variant='rounded' width='20px' height='20px' />
                        </Box>
                        <ButtonBase href='/shops/redeem-history'>
                            <Typography sx={{ color: '#A54CE5', fontSize: '11px', fontWeight: 'bolder' }}>View Exchanged Prize</Typography>
                        </ButtonBase>
                    </Box>
                </Box>
                <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
                {/* <Grid container justifyContent='space-between' alignItems='center' mt={4}>
                    <Grid item xs={10}>
                        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', width: '100%' }}>
                            <Skeleton variant='rounded' width={130} height={30} />
                            <Skeleton variant='rounded' width={40} height={30} />
                        </Box>
                    </Grid>
                </Grid> */}
                {[...Array(1)].map((i: any, idx: any) => (
                    <Box key={idx} sx={{ width: '100%', mt: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <Typography component='h3' fontWeight='bold' fontSize='18px' alignItems='start' marginBottom='24px'>
                            High Scores
                        </Typography>
                        {[...Array(3)].map((item: any, idx: any) => {
                            return <Skeleton variant='rounded' width='100%' height={82} key={idx} />;
                        })}
                    </Box>
                ))}
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Skeleton variant='rounded' width='20%' height={12} />
            </Box>
            <Box sx={{ display: 'flex', mt: '-20px', flexDirection: 'column' }}>
                <Box onClick={() => router.push('/referral')} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <img src='/images/dummy/banner-invite.png' alt='yy' style={{ width: '90%' }} />
                </Box>
                <Box component='section' sx={{ width: '90%', marginTop: '7px', mx: 'auto' }}>
                    {listNavigation.map((item: any) => {
                        return (
                            <Box key={item.title} sx={{ width: '100%', paddingBottom: '20px', borderBottom: '2px solid #F4F1FF' }}>
                                <NavigationCard icon={item.icon} title={item.title} onClick={() => router.push('/promo-code')} />
                            </Box>
                        );
                    })}
                </Box>
                <SocialMediaList skeleton />
            </Box>
        </Box>
    );
};

export default ProfileSkeletonDetail;
