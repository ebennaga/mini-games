/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import TournamentSlider from 'components/TournamentSlider';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import InfoCard from 'components/InfoCard';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import getRemainingTimes from 'helper/getRemainingTime';
import Search from './Search';
import Mission from './Mission';
import GamesCard from './GamesCard';
import EventCarousel from './EventCarousel';
import GamesSlider from './GamesSlider';
import TournamentCard from './TournamentCard';
import HomeSkeleton from './HomeSkeleton';

const HomeContainer = () => {
    const userData = useSelector((state: any) => state.webpage?.user?.user);
    const router = useRouter();
    const [borderValue, setBorderValue] = useState<string>('none');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const notify = useNotify();
    const [datasHome, setDatasHome] = React.useState<any>(null);
    const { fetchAPI } = useAPICaller();

    const form = useForm({
        mode: 'all',
        defaultValues: {
            search: ''
        }
    });
    const fetchData = async () => {
        try {
            const res = await fetchAPI({
                endpoint: '/home/feeds',
                method: 'GET'
            });
            if (res.status === 200) {
                setDatasHome(res.data.data);
            }
        } catch (e) {
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

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    const handleSearch = (data: any) => {
        console.log(data);
    };
    const isNotif = true;

    if (isLoading) {
        return <HomeSkeleton />;
    }
    return (
        <Box sx={{ color: '#373737', width: '100%' }}>
            <Box
                sx={{
                    width: '-webkit-fill-available',
                    position: 'sticky',
                    zIndex: 9999,
                    backgroundColor: 'white',
                    top: 0,
                    paddingY: '25px',
                    borderBottom: borderValue
                }}
            >
                <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box component='section' sx={{ display: 'flex', alignItems: 'center' }}>
                <Search form={form} name='search' placeholder='Search Games' onSubmit={handleSearch} />
                <ButtonBase onClick={() => router.push('inbox')} sx={{ marginLeft: '17px', position: 'relative' }}>
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
            <EventCarousel customMaxWidth='91vw' data={datasHome?.banners} />
            <Mission />
            <Box sx={{ marginTop: '32px' }}>
                <Typography variant='h6' fontWeight='bold' component='h2'>
                    Games
                </Typography>
                <GamesSlider customMaxWidth='91vw' data={datasHome?.games}>
                    {datasHome.games.map((item: any) => {
                        return (
                            <GamesCard
                                key={item.id}
                                href={item.game_url}
                                image={item.banner_url}
                                title={item.name}
                                totalUser={item.user_sessions}
                            />
                        );
                    })}
                </GamesSlider>
            </Box>
            <Box sx={{ mt: '36px' }}>
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

                <TournamentSlider customMaxWidth='91vw'>
                    {datasHome.tournaments.map((item: any, index: number) => {
                        return (
                            <TournamentCard
                                key={item.id}
                                image={item.banner_url}
                                imageGame={item.game.banner_url}
                                onClick={() => router.push(`/games/${item.game.id}/tournament`)}
                                totalUser={item.total_users}
                                prizePool={item.total_price}
                                point={item.entry_coin}
                                // time='6d 13h 23m'
                                time={item.start_time}
                                dataLength={datasHome?.tournaments.length}
                            />
                        );
                    })}
                </TournamentSlider>

                {/* Tournament Card End */}
            </Box>
            <InfoCard
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
            />
            <InfoCard
                onClick={() => router.push('/topup')}
                title='Coin'
                subTitle='Top up Coins Now'
                infoText='*Terms and Conditions'
                background='/images/coins-bg.png'
                image='/icons/coins.svg'
            />
            <InfoCard
                onClick={() => router.push('/shops')}
                title='Point'
                subTitle='Reedem your Points'
                infoText='*Terms and Conditions'
                background='/images/points-bg.png'
                image='/icons/point.svg'
            />
        </Box>
    );
};

export default HomeContainer;
