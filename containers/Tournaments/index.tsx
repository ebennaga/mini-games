/* eslint-disable no-nested-ternary */
import { Box, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import TournamentCard from 'components/TournamentCard';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import numberFormat from 'helper/numberFormat';
import { SwiperSlide } from 'swiper/react';
import TournamentSwiper from 'components/TournamentSlider/TournamentSwiper';
import GameHeader from './GameHeader';
import TournamentsSkeleton from './TournamentsSkeleton';

const Tournaments = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [borderValue, setBorderValue] = useState<string>('none');
    const [dataFeeds, setDataFeeds] = useState<any>(null);
    const [dataGamesDetail, setDataGamesDetail] = useState<Array<any>>([]);

    const userState = useSelector((state: any) => state.webpage?.user?.user);

    const { fetchAPI } = useAPICaller();
    const notify = useNotify();
    const router = useRouter();

    const getDataFeeds = async () => {
        setIsLoading(true);
        try {
            const resFeeds = await fetchAPI({
                method: 'GET',
                endpoint: 'home/feeds'
            });
            if (resFeeds.status === 200) {
                setDataFeeds(resFeeds.data.data);
            } else {
                notify('Error fetch data tournaments', 'error');
            }
            setIsLoading(false);
        } catch (err: any) {
            notify(err.message, 'error');
            setIsLoading(false);
        }
    };

    const getGameDetailTournaments = async () => {
        if (dataFeeds) {
            await dataFeeds.games.forEach(async (item: any) => {
                const response = await fetchAPI({
                    method: 'GET',
                    endpoint: `games/${item.id}`
                });
                if (response.status === 200) {
                    setDataGamesDetail((currentValue: any) => [...currentValue, response.data.data]);
                }
            });
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getDataFeeds();
    }, []);

    useEffect(() => {
        getGameDetailTournaments();
    }, [dataFeeds]);

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

    if (isLoading) {
        return <TournamentsSkeleton />;
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    padding: '20px',
                    borderBottom: borderValue,
                    position: 'fixed',
                    // top: borderValue === 'none' ? '20px' : 0,
                    zIndex: 2,
                    backgroundColor: 'white',
                    width: '-webkit-fill-available',
                    maxWidth: '600px',
                    background: userState?.page === 'casual' ? '#E9E2FF' : '#D7EEFF',
                    top: 0,
                    margin: '0 auto',
                    right: 0,
                    left: 0
                }}
            >
                {/* <HeaderBack title='Tournaments' /> */}
                <HeaderBack title={`${userState?.page === 'casual' ? 'Casual Tournaments' : 'Grand Tournaments'}`} isTournament />
            </Box>
            <>
                <Box component='section' marginTop='70px' marginBottom='45px'>
                    {userState?.page === 'casual' && dataFeeds.free_tournaments.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <img src='/icons/wifi.svg' width='14px' height='18.5px' alt='attention' />
                            <Typography
                                component='h2'
                                fontSize='18px'
                                marginTop='3px'
                                marginLeft='5px'
                                fontWeight={700}
                                sx={{ color: '#A54CE5' }}
                            >
                                On Going Casual Tournaments
                            </Typography>
                        </Box>
                    )}
                    {userState?.page === 'grand' && dataFeeds.tournaments.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <img src='/icons/wifi.svg' width='14px' height='18.5px' alt='attention' />
                            <Typography
                                component='h2'
                                fontSize='18px'
                                marginTop='3px'
                                marginLeft='5px'
                                fontWeight={700}
                                sx={{ color: '#A54CE5' }}
                            >
                                On Going Grand Tournaments
                            </Typography>
                        </Box>
                    )}
                    {((userState?.page === 'casual' && dataFeeds?.free_tournaments.length <= 0) ||
                        (userState?.page === 'grand' && dataFeeds?.tournaments.length <= 0)) && (
                        <Box marginTop='170px' sx={{ textAlign: 'center' }}>
                            <img src='/images/leaderboard-img.png' alt='empty-tournament' />
                            <Typography sx={{ color: '#949494', fontWeight: 700, fontSize: '18px', mt: 3 }}>
                                Stay Tune for the Tournament
                            </Typography>
                        </Box>
                    )}
                    <Box sx={{ width: { xs: '100vw', sm: '100%', md: '100%', lg: '100%' } }}>
                        {userState.page === 'casual' ? (
                            <TournamentSwiper>
                                {dataFeeds.free_tournaments.map((item: any, index: number) => {
                                    // Filter to get data status tournament
                                    const filter = {
                                        ...dataGamesDetail
                                            .map((game: any) => game?.tournaments.filter((i: any) => i.id === item.id)[0])
                                            .filter((j: any) => j)[0]
                                    };

                                    if (filter.status === 'OPEN') {
                                        return (
                                            <SwiperSlide key={index}>
                                                <TournamentCard
                                                    customWidth='93%'
                                                    onClick={() => router.push(`/games/${item.game.id}/tournament/${item.id}`)}
                                                    time={item.end_time}
                                                    pool={item.total_prize.coin}
                                                    coin={item.entry_coin}
                                                    users={item.total_users}
                                                    imageGame={item.game.banner_url}
                                                    backgroundImage={item.banner_url}
                                                    type={item.type}
                                                    status={filter?.status || 'OPEN'}
                                                    typeTournament='casual'
                                                />
                                            </SwiperSlide>
                                        );
                                    }
                                    return null;
                                })}
                            </TournamentSwiper>
                        ) : (
                            <TournamentSwiper>
                                {dataFeeds.tournaments.map((item: any, index: number) => {
                                    // Filter to get data status tournament
                                    const filter = {
                                        ...dataGamesDetail
                                            .map((game: any) => game?.tournaments.filter((i: any) => i.id === item.id)[0])
                                            .filter((j: any) => j)[0]
                                    };

                                    if (filter.status === 'OPEN') {
                                        return (
                                            <SwiperSlide key={index}>
                                                <TournamentCard
                                                    customWidth='93%'
                                                    onClick={() => router.push(`/games/${item.game.id}/tournament/${item.id}`)}
                                                    time={item.end_time}
                                                    pool={item.total_prize.point}
                                                    coin={item.entry_coin}
                                                    users={item.total_users}
                                                    imageGame={item.game.banner_url}
                                                    backgroundImage={item.banner_url}
                                                    type={item.type}
                                                    status={filter?.status || 'OPEN'}
                                                    typeTournament='grand'
                                                />
                                            </SwiperSlide>
                                        );
                                    }
                                    return null;
                                })}
                            </TournamentSwiper>
                        )}
                    </Box>
                </Box>
                {userState?.page !== 'casual' &&
                    dataGamesDetail.map((item: any, idx: number) => {
                        const isShow = item.tournaments.filter((value: any) => value.entry_coin > 0);

                        return (
                            item.tournaments?.length > 0 &&
                            isShow.length > 0 && (
                                <Box component='section' marginBottom='46px' key={idx}>
                                    <GameHeader image={item.banner_url} title={item.name} />
                                    <Box marginTop='24px' sx={{ width: { xs: '100vw', sm: '100%', md: '100%', lg: '100%' } }}>
                                        <TournamentSwiper>
                                            {item.tournaments.map((itm: any, index: number) => {
                                                return (
                                                    itm.entry_coin > 0 && (
                                                        <SwiperSlide key={index}>
                                                            <TournamentCard
                                                                customWidth='93%'
                                                                onClick={() => router.push(`/games/${item.id}/tournament/${itm.id}`)}
                                                                time={itm.end_time}
                                                                pool={numberFormat(itm.total_prize.point)}
                                                                coin={itm.entry_coin}
                                                                users={itm.total_users}
                                                                imageGame={item.banner_url}
                                                                backgroundImage={itm.banner_url}
                                                                type={itm.type}
                                                                status={itm.status}
                                                                typeTournament={item.entry_coin === 0 ? 'casual' : 'grand'}
                                                            />
                                                        </SwiperSlide>
                                                    )
                                                );
                                            })}
                                        </TournamentSwiper>
                                    </Box>
                                </Box>
                            )
                        );
                    })}
                {userState?.page === 'casual' &&
                    dataGamesDetail.map((item: any, idx: number) => {
                        const isShow = item.tournaments.filter((value: any) => value.entry_coin === 0);

                        return (
                            item.tournaments?.length > 0 &&
                            isShow.length > 0 && (
                                <Box component='section' marginBottom='46px' key={idx}>
                                    <GameHeader image={item.banner_url} title={item.name} />
                                    <Box marginTop='24px' sx={{ width: { xs: '100vw', sm: '100%', md: '100%', lg: '100%' } }}>
                                        <TournamentSwiper>
                                            {item.tournaments.map((itm: any, index: number) => {
                                                return (
                                                    itm.entry_coin === 0 && (
                                                        <SwiperSlide key={index}>
                                                            <TournamentCard
                                                                customWidth='93%'
                                                                onClick={() => router.push(`/games/${item.id}/tournament/${itm.id}`)}
                                                                time={itm.end_time}
                                                                pool={itm.total_prize.coin}
                                                                coin={itm.entry_coin}
                                                                users={itm.total_users}
                                                                imageGame={item.banner_url}
                                                                backgroundImage={itm.banner_url}
                                                                type={itm.type}
                                                                status={itm.status}
                                                                typeTournament={item.entry_coin === 0 ? 'casual' : 'grand'}
                                                            />
                                                        </SwiperSlide>
                                                    )
                                                );
                                            })}
                                        </TournamentSwiper>
                                    </Box>
                                </Box>
                            )
                        );
                    })}
            </>
            {/* )} */}
        </Box>
    );
};

export default Tournaments;
