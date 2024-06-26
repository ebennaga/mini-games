import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import NavigationCard from 'components/NavigationCard';
import SocialMediaList from 'components/SocialMediaList';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import BalanceCard from './BalanceCard';
import BarExp from './BarExp';
import HighScoreCard from './HighScoreCard';
import ProfilePicture from './ProfilePicture';
import StatsCard from './StatsCard';
import ProfileSkeletonDetail from './ProfileSkeleton';

const Profile = () => {
    const router = useRouter();
    const { fetchAPI } = useAPICaller();
    const notify = useNotify();
    const userState = useSelector((state: any) => state?.webpage?.user?.user);
    const [detailGame, setDetailGame] = React.useState<any>(null);
    const [isLoading, setIsLoading] = React.useState<any>(false);

    // const listNavigation = [
    //     { title: 'Input Promo Code', icon: '/icons/promo-code.png' }
    //     // { title: 'Give us Ratings', icon: '/icons/rating.png', onclick: () => router.push('/ratingas') }
    // ];
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await fetchAPI({
                endpoint: `/auths/detail`,
                method: 'GET'
            });

            if (res.data?.data) {
                setDetailGame(res.data.data);
            }
            setIsLoading(false);
        } catch (e: any) {
            notify(e.message, 'error');
            setIsLoading(false);
        }
        setIsLoading(false);
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <ProfileSkeletonDetail isLoading={isLoading} />;
    }

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
            <HeaderBack title='Profile' isSetting handleBack={() => router.push('/')} />
            <ProfilePicture image={userState.avatar_url} />
            <Typography component='h3' fontWeight='bold' fontSize='18px' mt='26px'>
                {!userState?.username ? userState?.email : userState?.username.toLowerCase()}
            </Typography>
            <BarExp labelBar='10018/25000' value={70} />
            <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
            <Box component='section' sx={{ width: '100%' }}>
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
                        <BalanceCard
                            title='Coins'
                            value={userState?.coin}
                            onClick={() => router.push('/topup')}
                            buttonText='Top up Coins'
                            icon='/icons/coins.png'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <BalanceCard
                            title='Points'
                            value={userState?.point}
                            onClick={() => router.push('/shops')}
                            buttonText='Redeem Points'
                            icon='/images/point-shops.png'
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
            <Box
                component='section'
                sx={{
                    width: '100%'
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '24px' }}>
                    <Typography component='h3' fontWeight='bold' fontSize='18px'>
                        Game Stats
                    </Typography>
                    <Link href='/history'>
                        <a style={{ textDecoration: 'unset', fontSize: '14px', fontWeight: 600, color: '#A54CE5' }}>View History</a>
                    </Link>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <StatsCard title='Total Earns' icon='/images/point-shops.png' value={detailGame?.total_earnings.point} />
                    </Grid>
                    <Grid item xs={6}>
                        <StatsCard title='Total Plays' icon='/icons/plays.png' value={detailGame?.total_play} />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
            <Box sx={{ width: '100%' }}>
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
                        <Typography sx={{ fontWeight: 'bold' }}>{detailGame?.total_prize}</Typography>
                    </Box>
                    <ButtonBase href='/shops/redeem-history'>
                        <Typography sx={{ color: '#A54CE5', fontSize: '11px', fontWeight: 'bolder' }}>View Exchanged Prize</Typography>
                    </ButtonBase>
                </Box>
            </Box>
            <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
            <Box sx={{ width: '100%' }}>
                <Typography component='h3' fontWeight='bold' fontSize='18px' alignItems='start' marginBottom='24px'>
                    High Scores
                </Typography>
                {detailGame?.highscore.length > 0 &&
                    detailGame.highscore.map((item: any, idx: number) => {
                        return (
                            <Box key={idx} sx={{ my: '10px' }}>
                                <HighScoreCard image={item.banner_url} title={item.name} score={item.highscore} />
                                <Box sx={{ height: '1px', width: '100%', background: '#E6E6E6', my: '24px' }} />
                            </Box>
                        );
                    })}
            </Box>

            <ButtonBase href='/profile/high-scores'>
                <Typography
                    component='span'
                    fontSize='12px'
                    fontWeight={600}
                    sx={{ color: '#A54CE5', display: 'flex', alignItems: 'center' }}
                >
                    Show All <ArrowForwardIcon sx={{ fontSize: '16px', ml: 0.7 }} />
                </Typography>
            </ButtonBase>
            {/* <ButtonBase
                sx={{
                    background: 'url(/images/dummy/banner-invite.png)',
                    backgroundPosition: 'right',
                    backgroundSize: 'cover',
                    height: '200px',
                    width: '100%',
                    borderRadius: '6px',
                    marginTop: '0px'
                }}
                onClick={() => router.push('/referral')}
            /> */}
            {/* <Box component='section' sx={{ width: '100%', marginTop: '7px' }}>
                {listNavigation.map((item: any) => {
                    return (
                        <Box key={item.title} sx={{ width: '100%', padding: '25px 0', borderBottom: '2px solid #F4F1FF' }}>
                            <NavigationCard icon={item.icon} title={item.title} onClick={() => router.push('/promo-code')} />
                        </Box>
                    );
                })}
            </Box> */}
            <SocialMediaList />
        </Box>
    );
};

export default Profile;
