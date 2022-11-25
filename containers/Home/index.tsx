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
// import { AutoAwesome } from '@mui/icons-material';
import AdvertiseDialog from 'components/DialogTutorial/AdvertiseDialog';
import Search from './Search';
import GamesCard from './GamesCard';
import EventCarousel from './EventCarousel';
import GamesSlider from './GamesSlider';
import TournamentCard from './TournamentCard';
import HomeSkeleton from './HomeSkeleton';

const HomeContainer = () => {
    const router = useRouter();

    const [borderValue, setBorderValue] = useState<string>('none');
    const [datasHome, setDatasHome] = React.useState<any>(null);
    const [dataTutorial, setDataTutorial] = useState<any>(null);
    const [isWelcome, setIsWelcome] = useState<boolean>(false);
    const [openBanner, setOpenBanner] = React.useState(false);
    const [prevTutorial, setPrevTutorial] = useState<string>('');
    const [dialogLogin, setDialogLogin] = useState<boolean>(false);

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
            <AdvertiseDialog open={openBanner} setOpen={handleDialog} />
            <WelcomeDialog
                open={isWelcome && userState}
                setOpen={setIsWelcome}
                dataLocal={dataTutorial}
                setDataLocal={setDataTutorial}
                setPrevTutorial={setPrevTutorial}
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
                <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' dataLocal={dataTutorial} isHide />
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
            {/* <EventCarousel customMaxWidth='91vw' data={datasHome?.banners} /> */}
            <EventCarousel customMaxWidth='91vw' />
            {/* <Mission /> */}
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
                {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '17px' }}>
                    <Box>
                        <Typography variant='h6' fontWeight='bold' component='h2'>
                            Tournaments
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', height: '50px' }}>
                        <AutoAwesome sx={{ color: '#A54CE5', width: '18px', alignSelf: 'flex-start' }} />
                        <ButtonBase
                            onClick={() => {
                                router.push('/live-tournament');
                            }}
                            sx={{
                                padding: '7px 15px',
                                backgroundColor: '#A54CE5',
                                borderRadius: '15px',
                                height: '30px',
                                alignSelf: 'center'
                            }}
                        >
                            <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '11px' }}>View Live Tournament</Typography>
                        </ButtonBase>
                        <AutoAwesome sx={{ color: '#A54CE5', width: '13px', alignSelf: 'flex-end', rotate: '180deg' }} />
                    </Box>
                </Box> */}

                {/* Tournament Card Start */}

                {/* <Box id='tournaments'>
                    <TournamentSlider customMaxWidth='91vw'>
                        {datasHome.tournaments.map((item: any) => {
                            return (
                                <TournamentCard
                                    isLive
                                    key={item.id}
                                    image={item.banner_url}
                                    imageGame={item.game.banner_url}
                                    onClick={
                                        // () => {}
                                        // () => router.push(`/games/${item.game.id}/tournament/${item.id}`)
                                        () => router.push(`/live-tournament/1`)
                                    }
                                    totalUser={item.total_users}
                                    prizePool={item.total_prize}
                                    point={item.entry_coin}
                                    // time='6d 13h 23m'
                                    time={item.end_time}
                                    dataLength={datasHome?.tournaments.length}
                                />
                            );
                        })}
                    </TournamentSlider>
                </Box> */}

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
                    <Typography variant='h6' fontWeight='bold' component='h2'>
                        Tournaments
                    </Typography>
                    <Link href='/tournaments'>
                        <a style={{ textDecoration: 'none !important', fontWeight: 600, textDecorationLine: 'none', color: '#A54CE5' }}>
                            View All Tournaments
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
            <InfoCard
                onClick={() => router.push('/shops')}
                buttonText='Top Up'
                title='Win Tournament &'
                subTitle='Get Points to reedem '
                background='/images/points-bg.png'
                image='/images/lg-points.png'
                bgButton='#6FC0FB'
                linearBackground='linear-gradient(216deg, rgb(255 255 255 / 0%) 14%, rgb(156 209 247) 87%)'
            />
            <SignupLoginDialog open={dialogLogin} setOpen={setDialogLogin} />
        </Box>
    );
};

export default HomeContainer;
