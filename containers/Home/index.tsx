/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box, ButtonBase, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
// import Link from 'next/link';
// import TournamentSlider from 'components/TournamentSlider';
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
import DialogBanner from 'components/DialogBanner';
import useAuthReducer from 'hooks/useAuthReducer';
import { SwiperSlide } from 'swiper/react';
import TournamentSwiper from 'components/TournamentSlider/TournamentSwiper';
import Search from './Search';
import GamesCard from './GamesCard';
// import GamesSlider from './GamesSlider';
import TournamentCard from './TournamentCard';
import HomeSkeleton from './HomeSkeleton';
import GameSwiper from './GameSwiper';
import EventTournamentSlider from './EventTournamentSlider';

const HomeContainer = () => {
    const router = useRouter();

    const [borderValue, setBorderValue] = useState<string>('none');
    const [datasHome, setDatasHome] = useState<any>(null);
    const [datasCasual, setDatasCasual] = useState<any>(null);
    const [datasGrands, setDatasGrands] = useState<any>(null);
    const [dataTutorial, setDataTutorial] = useState<any>(null);
    const [isWelcome, setIsWelcome] = useState<boolean>(false);
    const [openBanner, setOpenBanner] = useState(false);
    const [openBannerTournament, setOpenBannerTournament] = useState(false);
    const [prevTutorial, setPrevTutorial] = useState<string>('');
    const [dialogLogin, setDialogLogin] = useState<boolean>(false);
    const [readyDialog, setReadyDialog] = useState<boolean>(false);

    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const { setUser } = useAuthReducer();
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
            // const newDataCasual: any = [];
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
                // setDatasCasual(res.data.data.free_tournaments);
                const newDataCasual = res.data.data.free_tournaments.filter((item: any) => {
                    return item.status === 'OPEN';
                });
                const newDatafGrand = res.data.data.tournaments.filter((item: any) => {
                    return item.status === 'OPEN';
                });
                setDatasCasual(newDataCasual);
                setDatasGrands(newDatafGrand);
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
    React.useEffect(() => {
        if (!isLoading) {
            // slot top
            const gptAdSlots = [];
            window.googletag = window.googletag || { cmd: [] };
            googletag.cmd.push(function () {
                const mapping1 = googletag
                    .sizeMapping()
                    .addSize(
                        [780, 500],
                        [
                            [300, 250],
                            [336, 280]
                        ]
                    )
                    .addSize(
                        [0, 0],
                        [
                            [300, 250],
                            [336, 280],
                            [300, 600]
                        ]
                    )
                    .build();
                gptAdSlots[0] = googletag.defineSlot(
                    '/21622890900,22860604212/ID_prizeplay.io_res_home_top_320x100//320x50',
                    [
                        [320, 50],
                        [320, 100]
                    ],
                    'div-gpt-ad-1673344839334-0'
                );
                gptAdSlots[1] = googletag
                    .defineSlot(
                        '/21622890900,22860604212/ID_prizeplay.io_res_home_mid_300x600//300x250//336x280',
                        [
                            [300, 600],
                            [300, 250],
                            [336, 280]
                        ],
                        'div-gpt-ad-1673345189765-0'
                    )

                    // slot 2

                    // .setCollapseEmptyDiv(true)
                    // .defineSizeMapping(mapping1)
                    .addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
                googletag.display('div-gpt-ad-1673344839334-0');
                googletag.display('div-gpt-ad-1673345189765-0');
            });
        }
    }, [isLoading]);

    if (isLoading || !datasHome) {
        return <HomeSkeleton />;
    }
    // console.log(datasCasual);
    // console.log(datasGrands);
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
            <div id='div-gpt-ad-1673344839334-0' style={{ textAlign: 'center' }} />
            <EventTournamentSlider />
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
                            You can top up coins in the COINS menu. After that, the coins balance will be added immediately or you can
                            invite your friends as much as possible and also running daily missions.
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
                            Hi buddies, to get points you have to join the tournament and win the tournament. The higher your rank, the more
                            points you get!!
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* <Box>
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
            </Box> */}
            <Box sx={{ marginBottom: '26px' }}>
                <InfoCard
                    onClick={() => router.push('/topup')}
                    buttonText='Top Up'
                    title='Top up Coins Now &'
                    subTitle='Join Tournament'
                    background='/images/coins-bg.png'
                    image='/images/coin-big.png'
                    bgButton='#FFD833'
                />
            </Box>
            {datasGrands?.length > 0 && (
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
                        <ButtonBase
                            onClick={() => {
                                router.push('/tournaments');
                                setUser({ ...userState, page: 'grand' });
                            }}
                        >
                            <a style={{ textDecoration: 'none !important', fontWeight: 600, textDecorationLine: 'none', color: '#A54CE5' }}>
                                View All
                            </a>
                        </ButtonBase>
                    </Box>

                    {/* Tournament Card Start */}

                    <Box sx={{ width: { xs: '100vw', sm: '100%', md: '100%', lg: '100%' } }}>
                        <TournamentSwiper>
                            {datasGrands.map((item: any) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <TournamentCard
                                            image={item.banner_url}
                                            imageGame={item.game.banner_url}
                                            onClick={() => {
                                                router.push(`/games/${item.game.id}/tournament/${item.id}`);
                                            }}
                                            totalUser={item.total_users}
                                            prizePool={item.total_prize}
                                            point={item.entry_coin}
                                            // time='6d 13h 23m'
                                            time={item.end_time}
                                            // dataLength={datasHome?.tournaments.length}
                                            type={item.type}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </TournamentSwiper>
                    </Box>

                    {/* Tournament Card End */}
                </Box>
            )}
            {datasCasual?.length > 0 && (
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
                        <ButtonBase
                            onClick={() => {
                                router.push('/tournaments');
                                setUser({ ...userState, page: 'casual' });
                            }}
                        >
                            <a style={{ textDecoration: 'none !important', fontWeight: 600, textDecorationLine: 'none', color: '#A54CE5' }}>
                                View All
                            </a>
                        </ButtonBase>
                    </Box>
                    <Box id='tournaments' sx={{ width: { xs: '100vw', sm: '100%', md: '100%', lg: '100%' } }}>
                        <TournamentSwiper>
                            {datasCasual?.map((item: any) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <TournamentCard
                                            isCasual
                                            image={item.banner_url}
                                            imageGame={item.game.banner_url}
                                            onClick={() => {
                                                router.push(`/games/${item.game.id}/tournament/${item.id}`);
                                            }}
                                            totalUser={item.total_users}
                                            prizePool={item.total_prize}
                                            point={item.entry_coin}
                                            // time='6d 13h 23m'
                                            time={item.end_time}
                                            // dataLength={datasHome?.tournaments.length}
                                            type={item.type}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </TournamentSwiper>
                    </Box>
                    {/* <Box id='tournaments'>
                        <TournamentSlider customMaxWidth='91vw'>
                            {datasCasual?.map((item: any) => {
                                return (
                                    <TournamentCard
                                        isCasual
                                        key={item.id}
                                        image={item.banner_url}
                                        imageGame={item.game.banner_url}
                                        onClick={() => {
                                            router.push(`/games/${item.game.id}/tournament/${item.id}`);
                                        }}
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
                    </Box> */}
                </Box>
            )}
            <Box
                id='games'
                sx={{
                    marginTop: '32px',
                    position: prevTutorial === 'profile' ? 'relative' : 'unset',
                    px: prevTutorial === 'profile' ? 1 : 0,
                    zIndex: 1000,
                    background: '#fff',
                    borderRadius: '5px'
                    // border: '1px solid red'
                }}
            >
                <Typography variant='h6' fontWeight='bold' component='h2'>
                    Games
                </Typography>
                <GameSwiper>
                    {datasHome.games.map((item: any) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <GamesCard
                                    // href={item.game_url}
                                    href={`/games/${item.id}`}
                                    image={item.banner_url}
                                    title={item.name}
                                    totalUser={item.user_sessions}
                                />
                            </SwiperSlide>
                        );
                    })}
                </GameSwiper>
                {/* <GamesSlider customMaxWidth='91vw' data={datasHome.games}>
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
                </GamesSlider> */}
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
            {/* <InfoCard
                onClick={() => router.push('/topup')}
                buttonText='Top Up'
                title='Top up Coins Now &'
                subTitle='Join Tournament'
                background='/images/coins-bg.png'
                image='/images/coin-big.png'
                bgButton='#FFD833'
            /> */}
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
