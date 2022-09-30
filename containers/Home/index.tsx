/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import Link from 'next/link';
// import TournamentCard from 'components/TournamentCard';
import TournamentSlider from 'components/TournamentSlider';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Search from './Search';
import useStyles from './useStyle';
import Mission from './Mission';
import GamesCard from './GamesCard';
import EventCarousel from './EventCarousel';
import GamesSlider from './GamesSlider';

const HomeContainer = () => {
    const classes = useStyles();
    const router = useRouter();

    const form = useForm({
        mode: 'all',
        defaultValues: {
            search: ''
        }
    });

    const handleSearch = (data: any) => {
        console.log(data);
    };

    return (
        <Box sx={{ color: '#373737', width: '100%' }}>
            <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
            <Box component='section' sx={{ display: 'flex', alignItems: 'center' }}>
                <Search form={form} name='search' placeholder='Search Games' onSubmit={handleSearch} />
                <ButtonBase onClick={() => router.push('inbox')} sx={{ marginLeft: '17px' }}>
                    <img src='/icons/message.svg' width='36px' height='30px' alt='inbox' />
                </ButtonBase>
            </Box>
            <EventCarousel />
            <Mission />
            <Box sx={{ marginTop: '32px' }}>
                <Typography variant='h6' fontWeight='bold' component='h2'>
                    Games
                </Typography>
                <GamesSlider>
                    <GamesCard href='/games/1' image='/icons/dummy/main-ikan.png' title='Main Ikan' totalUser={46_000} />
                    <GamesCard href='/games/2' image='/icons/dummy/piano.png' title='Piano Tiles' totalUser={46_000} />
                    <GamesCard href='/games/3' image='/icons/dummy/menara.png' title='Menara Dingdong' totalUser={46_000} />
                    <GamesCard href='/games/4' image='/icons/dummy/main-ikan.png' title='Main Ikan' totalUser={46_000} />
                    <GamesCard href='/games/5' image='/icons/dummy/menara.png' title='Menara Dingdong' totalUser={46_000} />
                </GamesSlider>
            </Box>
            <Box sx={{ mt: '36px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '17px' }}>
                    <Typography variant='h6' fontWeight='bold' component='h2'>
                        Tournaments
                    </Typography>
                    <Link href='/'>
                        <a style={{ textDecoration: 'none !important', fontWeight: 600, textDecorationLine: 'none', color: '#A54CE5' }}>
                            View All Tournaments
                        </a>
                    </Link>
                </Box>

                {/* Tournament Card Start */}

                <TournamentSlider>
                    {/* {[...Array(6)].map((item: any, index: number) => (
                        <TournamentCard
                            key={index}
                            time='6d 13h 23m'
                            pool='3500'
                            champion='250'
                            coin='100'
                            stars='5.25'
                            users='376'
                            position='35'
                        />
                    ))} */}
                    {[...Array(5)].map((_item: any, index: number) => {
                        return (
                            <Box key={index}>
                                <Box
                                    sx={{
                                        width: '98%',
                                        height: '372px',
                                        backgroundImage: `url('/icons/dummy/menara.png')`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        borderRadius: '24px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 65%)',
                                            borderRadius: '24px'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                padding: '25px 22px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                height: '86%'
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        background: '#FFDD50',
                                                        borderRadius: '19px',
                                                        padding: '4px 5px',
                                                        width: 'fit-content'
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            background: `url(${'/icons/dummy/main-ikan.png'})`,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'cover',
                                                            width: '16.71px',
                                                            height: '16.71px',
                                                            borderRadius: '22px'
                                                        }}
                                                    />
                                                    <Box
                                                        sx={{
                                                            background: `url(${'/icons/dummy/user-1.png'})`,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'cover',
                                                            width: '16.71px',
                                                            height: '16.71px',
                                                            borderRadius: '22px',
                                                            marginLeft: '-10px'
                                                        }}
                                                    />
                                                    <Box
                                                        sx={{
                                                            background: `url(${'/icons/dummy/user-2.png'})`,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'cover',
                                                            width: '16.71px',
                                                            height: '16.71px',
                                                            borderRadius: '22px',
                                                            marginLeft: '-10px'
                                                        }}
                                                    />
                                                    <Typography
                                                        component='span'
                                                        sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}
                                                    >
                                                        376
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex' }}>
                                                    <Box
                                                        sx={{
                                                            background: '#FFDD50',
                                                            borderRadius: '19px',
                                                            width: 'fit-content',
                                                            padding: '2px 5px'
                                                        }}
                                                    >
                                                        <Typography
                                                            component='span'
                                                            sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}
                                                        >
                                                            35 <sup>th</sup>
                                                        </Typography>
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            background: '#FFDD50',
                                                            borderRadius: '19px',
                                                            width: 'fit-content',
                                                            padding: '2px 5px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            marginLeft: 1
                                                        }}
                                                    >
                                                        <img src='/icons/star.png' width={17} height={17} alt='star' />
                                                        <Typography
                                                            component='span'
                                                            sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}
                                                        >
                                                            35
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>

                                            <Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src='/icons/star.png' width={31} height={31} alt='star' />
                                                        <Typography
                                                            component='span'
                                                            sx={{
                                                                fontSize: '24px',
                                                                fontWeight: 'bold',
                                                                color: '#fff',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                paddingLeft: 0.5
                                                            }}
                                                        >
                                                            35000
                                                            <Typography
                                                                component='span'
                                                                sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}
                                                            >
                                                                Pool
                                                            </Typography>
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
                                                        <Box>
                                                            <img src='/icons/trophy.png' width='14px' height='10px' alt='trophy' />
                                                            <Typography
                                                                component='span'
                                                                sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}
                                                            >
                                                                250
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 1.5 }}>
                                                            <img src='/images/coin.png' width='13.81px' height='13.17px' alt='trophy' />
                                                            <Typography
                                                                component='span'
                                                                sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}
                                                            >
                                                                50
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        color: '#fff',
                                                        background: '#A54CE5',
                                                        borderRadius: '12px',
                                                        padding: '11px 15px',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        marginTop: '9px'
                                                    }}
                                                >
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src='/icons/clock.png' alt='clock timer' width='14px' height='14px' />
                                                        <Typography component='span' sx={{ fontSize: '12px', paddingLeft: '4px' }}>
                                                            6d 13h 23m
                                                        </Typography>
                                                    </Box>
                                                    <Link href={`/games/${index + 1}/tournament`}>
                                                        <a
                                                            style={{
                                                                textDecoration: 'none !important',
                                                                fontWeight: 600,
                                                                color: '#fff',
                                                                fontSize: '11px',
                                                                textDecorationLine: 'none'
                                                            }}
                                                        >
                                                            View Tournaments
                                                        </a>
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </TournamentSlider>

                {/* Tournament Card End */}
            </Box>
            {[...Array(3)].map((_item: any, index: number) => {
                return (
                    <ButtonBase
                        key={index}
                        sx={{
                            background: `url(${`/images/dummy/banner-${index + 1}.png`})`,
                            backgroundPosition: 'right',
                            backgroundSize: 'cover',
                            height: '90px',
                            width: '100%',
                            borderRadius: '6px',
                            marginTop: '26px'
                        }}
                    />
                );
            })}
        </Box>
    );
};

export default HomeContainer;
