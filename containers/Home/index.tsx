import { Box, ButtonBase, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Link from 'next/link';
import TournamentSlider from 'components/TournamentSlider';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import InfoCard from 'components/InfoCard';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import getLocalData from 'helper/getLocalData';
import WelcomeDialog from 'components/DialogTutorial/WelcomeDialog';
import SignupLoginDialog from 'components/Dialog/SignupLoginDialog';
import { useSelector } from 'react-redux';
import AdvertiseDialog from 'components/DialogTutorial/AdvertiseDialog';
import Search from './Search';
import GamesCard from './GamesCard';
import GamesSlider from './GamesSlider';
import TournamentCard from './TournamentCard';
import HomeSkeleton from './HomeSkeleton';
import ButtonLanding from 'components/Button/Index';
import DialogBanner from 'components/DialogBanner';

const HomeContainer = () => {
    const router = useRouter();

    const [borderValue, setBorderValue] = useState<string>('none');
    const [datasHome, setDatasHome] = useState<any>(null);
    const [dataTutorial, setDataTutorial] = useState<any>(null);
    const [isWelcome, setIsWelcome] = useState<boolean>(false);
    const [openBanner, setOpenBanner] = useState(false);
    const [openBannerTournament, setOpenBannerTournament] = useState(false);
    const [prevTutorial, setPrevTutorial] = useState<string>('');
    const [dialogLogin, setDialogLogin] = useState<boolean>(false);
    const [readyDialog, setReadyDialog] = useState<boolean>(false);

    const userState = useSelector((state: any) => state.webpage?.user?.user);

    const notify = useNotify();
    const { fetchAPI, isLoading } = useAPICaller();

    const form = useForm({
        mode: 'all',
        defaultValues: {
            search: ''
        }
    });

    const isShowBanner = async (data: any) => {
        const today = new Date();
        const currentDate = today.getDate();
        const expiresDate = data?.expires;
        if (expiresDate.length > 5) {
            return true;
        }
        if (String(expiresDate).length === 2 && expiresDate === currentDate) {
            const local = { ...data };
            local.isShow = true;
            localStorage.setItem('popUpBanner', JSON.stringify(local));
            return true;
        }
        return false;
    };

    const fetchData = async () => {
        try {
            const res = await fetchAPI({
                endpoint: '/home/feeds',
                method: 'GET'
            });
            const data: any = await getLocalData();
            setDataTutorial(data.tutorial);
            window.scrollTo(0, 0);
            if (res.status === 200) {
                const isBanner = await isShowBanner(data.banner);
                setOpenBanner(isBanner);
                if (data.tutorial.isTutorial && !data.banner.isShow) {
                    setIsWelcome(true);
                }
                setDatasHome(res.data.data);
            }
        } catch (e: any) {
            notify('failed data', 'e');
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    React.useEffect(() => {
        const local: any = localStorage.getItem('tutorial');
        const resLocal: any = JSON.parse(local);
        // console.log(resLocal.isTutorial);
        if (!resLocal.isTutorial && !openBanner && userState && !readyDialog) {
            setOpenBannerTournament(true);
        }
    }, [isWelcome, openBanner, readyDialog]);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            return setBorderValue('none');
        }
        return setBorderValue('0.5px solid rgba(148, 148, 148, 0.35)');
    };

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', handleScroll);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearch = (data: any) => {
        router.push(`/games?search=${data.search}`);
    };

    const handleMessage = () => {
        if (userState) {
            router.push('inbox');
        } else {
            setDialogLogin(true);
        }
    };
    const handleDialog = () => {
        setOpenBanner(false);
        setIsWelcome(true);
    };
    const isNotif = false;

    if (isLoading || !datasHome) {
        return <HomeSkeleton />;
    }
    return (
        <Box sx={{ color: '#373737', width: '100%' }}>
            <DialogBanner open={openBannerTournament} setOpen={setOpenBannerTournament} />
            <AdvertiseDialog open={openBanner} setOpen={handleDialog} />
            <WelcomeDialog
                open={isWelcome && userState}
                setOpen={setIsWelcome}
                dataLocal={dataTutorial}
                setDataLocal={setDataTutorial}
                setPrevTutorial={setPrevTutorial}
                readyDialog={readyDialog}
                setReadyDialog={setReadyDialog}
            />
            <Box
                sx={{
                    width: '-webkit-fill-available',
                    position: 'sticky',
                    zIndex: dataTutorial?.isTutorial || dialogLogin ? 1 : 99,
                    // zIndex: 9999,
                    backgroundColor: dataTutorial?.isTutorial ? 'rgba(0, 0, 0, 0)' : 'white',
                    top: 0,
                    paddingY: '25px',
                    borderBottom: borderValue
                }}
            >
                <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' dataLocal={dataTutorial} />
            </Box>
            <Box component='section' sx={{ display: 'flex', alignItems: 'center' }}>
                <Search form={form} name='search' placeholder='Search Games' onSubmit={handleSearch} />
                <ButtonBase onClick={handleMessage} sx={{ marginLeft: '17px', position: 'relative' }}>
                    {isNotif && (
                        <Box
                            sx={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50px',
                                background: '#FF4242',
                                position: 'absolute',
                                top: 5,
                                left: -4.5
                            }}
                        />
                    )}
                    <img src='/icons/message.svg' width='36px' height='30px' alt='inbox' />
                </ButtonBase>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: '411px',
                    background: '#6FC0FB',
                    mb: '20px',
                    borderRadius: '10px',
                    backgroundImage: 'url(/images/dummy/bg-gradient-home.png)',
                    backgroundSize: 'cover',
                    textAlign: 'center',
                    position: 'relative'
                }}
            >
                <Box sx={{ top: '20px', position: 'absolute', left: '50%', translate: '-50%', width: '100%' }}>
                    <Typography sx={{ mb: '20px', color: 'white', fontSize: '26px', fontWeight: 700, lineHeight: '27px' }}>
                        Play free game, <br /> win attractive prize!
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '12px', fontWeight: 500 }}>
                        Play free tournament, collect coins to join grand <br /> tournaments and win the prizes.
                    </Typography>
                </Box>
                <Box sx={{ position: 'absolute', left: '50%', translate: '-50%', bottom: '25px', width: '165px' }}>
                    <ButtonLanding title='Play Game' backgoundColor='#A54CE5' color='white' height='40px' />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    // border: '1px solid red',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    columnGap: '5px',
                    mb: '15px',
                    width: '100%'
                }}
            >
                <Box
                    sx={{
                        width: '28%',
                        height: '182px',
                        background: '#F4F4F4',
                        borderRadius: '9px',
                        padding: '10px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}
                >
                    <Box>
                        <img src='/icons/prize-home.png' alt='coinhome' />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '10px' }}>How to win Prize</Typography>
                        <Typography sx={{ fontSize: '8px', color: '#949494', lineHeight: '8px' }}>
                            firstly you have to collect Points, after you have a huge points now it is time for you to redeem your points
                            into a prizes, so hurry up and join the tournament now!!
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '28%',
                        height: '182px',
                        background: '#F4F4F4',
                        borderRadius: '9px',
                        padding: '10px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}
                >
                    <Box sx={{ position: 'relative' }}>
                        <img src='/icons/coint-home.png' alt='coinhome' />
                        {/* <img src='/icons/coin-home-sm.png' alt='coinhome' style={{ position: 'absolute', bottom: 0, right: 0 }} /> */}
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '10px' }}>How to get Coins</Typography>
                        <Typography sx={{ fontSize: '8px', color: '#949494', lineHeight: '8px' }}>
                            firstly you have to collect Points, after you have a huge points now it is time for you to redeem your points
                            into a prizes, so hurry up and join the tournament now!!
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '28%',
                        height: '182px',
                        background: '#F4F4F4',
                        borderRadius: '9px',
                        padding: '10px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}
                >
                    <Box sx={{ position: 'relative' }}>
                        <img src='/icons/point-home.png' alt='pointhome' />
                        {/* <img src='/icons/point-home-sm.png' alt='coinhome' style={{ position: 'absolute', bottom: 0, right: 0 }} /> */}
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '10px' }}>How to win Points</Typography>
                        <Typography sx={{ fontSize: '8px', color: '#949494', lineHeight: '8px' }}>
                            firstly you have to collect Points, after you have a huge points now it is time for you to redeem your points
                            into a prizes, so hurry up and join the tournament now!!
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <ButtonBase
                    sx={{
                        background: 'url(/images/dummy/banner-invite.png)',
                        backgroundPosition: 'right',
                        backgroundSize: 'cover',
                        height: '140px',
                        width: '100%',
                        borderRadius: '6px',
                        marginBottom: '26px'
                    }}
                    onClick={() => router.push('/referral')}
                />
            </Box>
            <Box
                sx={{
                    position: prevTutorial === 'games' ? 'relative' : 'unset',
                    p: prevTutorial === 'games' ? 1 : 0,
                    background: '#fff',
                    zIndex: 1000,
                    borderRadius: '5px'
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '17px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '15px' }}>
                        <Box>
                            <img src='/icons/noto_money-bag.png' alt='money-bag' />
                        </Box>
                        <Typography variant='subtitle1' fontWeight='bold' component='h1'>
                            Grand Tournaments
                        </Typography>
                    </Box>
                    <Link href='/grand-tournaments'>
                        <a style={{ textDecoration: 'none !important', fontWeight: 600, textDecorationLine: 'none', color: '#A54CE5' }}>
                            View All
                        </a>
                    </Link>
                </Box>

                {/* Tournament Card Start */}

                <Box id='tournaments'>
                    <TournamentSlider customMaxWidth='91vw'>
                        {datasHome.tournaments.map((item: any) => {
                            return (
                                <TournamentCard
                                    key={item.id}
                                    image={item.banner_url}
                                    imageGame={item.game.banner_url}
                                    onClick={() => router.push(`/games/${item.game.id}/tournament/${item.id}`)}
                                    totalUser={item.total_users}
                                    prizePool={item.total_prize}
                                    point={item.entry_coin}
                                    // time='6d 13h 23m'
                                    time={item.end_time}
                                    dataLength={datasHome?.tournaments.length}
                                    type={item.type}
                                />
                            );
                        })}
                    </TournamentSlider>
                </Box>

                {/* Tournament Card End */}
            </Box>
            <Box
                sx={{
                    mt: '36px',
                    position: prevTutorial === 'games' ? 'relative' : 'unset',
                    p: prevTutorial === 'games' ? 1 : 0,
                    background: '#fff',
                    zIndex: 1000,
                    borderRadius: '5px'
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '17px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '15px' }}>
                        <Box>
                            <img src='/icons/free.png' alt='money-bag' />
                        </Box>
                        <Typography variant='subtitle1' fontWeight='bold' component='h1'>
                            Casual Tournaments
                        </Typography>
                    </Box>
                    <Link href='/tournaments'>
                        <a style={{ textDecoration: 'none !important', fontWeight: 600, textDecorationLine: 'none', color: '#A54CE5' }}>
                            View All
                        </a>
                    </Link>
                </Box>
                <Box id='tournaments'>
                    <TournamentSlider customMaxWidth='91vw'>
                        {datasHome.tournaments.map((item: any) => {
                            return (
                                <TournamentCard
                                    isCasual
                                    key={item.id}
                                    image={item.banner_url}
                                    imageGame={item.game.banner_url}
                                    onClick={() => router.push(`/games/${item.game.id}/tournament/${item.id}`)}
                                    totalUser={item.total_users}
                                    prizePool={item.total_prize}
                                    point={item.entry_coin}
                                    // time='6d 13h 23m'
                                    time={item.end_time}
                                    dataLength={datasHome?.tournaments.length}
                                    type={item.type}
                                />
                            );
                        })}
                    </TournamentSlider>
                </Box>
            </Box>
            <Box
                id='games'
                sx={{
                    marginTop: '32px',
                    position: prevTutorial === 'profile' ? 'relative' : 'unset',
                    px: prevTutorial === 'profile' ? 1 : 0,
                    zIndex: 1000,
                    background: '#fff',
                    borderRadius: '5px'
                }}
            >
                <Typography variant='h6' fontWeight='bold' component='h2'>
                    Games
                </Typography>

                <GamesSlider customMaxWidth='91vw' data={datasHome.games}>
                    {datasHome.games.map((item: any) => {
                        return (
                            <GamesCard
                                key={item.id}
                                // href={item.game_url}
                                href={`/games/${item.id}`}
                                image={item.banner_url}
                                title={item.name}
                                totalUser={item.user_sessions}
                            />
                        );
                    })}
                </GamesSlider>
            </Box>
            {/* <InfoCard
                onClick={undefined}
                title='Block Stack'
                subTitle='Game Launch'
                infoText='21 October 2022'
                isGame
                background='/images/dummy/block-stack-bg.png'
                image='/images/dingdong.png'
                linearBackground='linear-gradient(216deg, rgb(99 48 199 / 66%) 0%, rgba(28,37,69,1) 87%)'
            />
            <InfoCard
                onClick={undefined}
                title='Hop Up'
                subTitle='Game Launch'
                infoText='21 October 2022'
                isGame
                background='/images/dummy/hop-up-bg.png'
                image='/images/hopup.png'
                linearBackground='linear-gradient(216deg, rgb(25 84 159 / 72%) 14%, rgba(28,37,69,1) 87%)'
            /> */}
            <InfoCard
                onClick={() => router.push('/topup')}
                buttonText='Top Up'
                title='Top up Coins Now &'
                subTitle='Join Tournament'
                background='/images/coins-bg.png'
                image='/images/coin-big.png'
                bgButton='#FFD833'
            />
            {/* <InfoCard
                onClick={() => router.push('/shops')}
                buttonText='Top Up'
                title='Win Tournament &'
                subTitle='Get Points to reedem '
                background='/images/points-bg.png'
                image='/images/lg-points.png'
                bgButton='#6FC0FB'
                linearBackground='linear-gradient(216deg, rgb(255 255 255 / 0%) 14%, rgb(156 209 247) 87%)'
            /> */}
            <SignupLoginDialog open={dialogLogin} setOpen={setDialogLogin} />
        </Box>
    );
};

export default HomeContainer;
