/* eslint-disable no-unused-vars */
import Header from 'components/Header';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Box, Typography, Stack, Skeleton, Grid, IconButton } from '@mui/material';
import BadgeImages from 'components/BadgeImages';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import { Mms } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GameSekeleton from './GameSkeleton';

interface GameProps {
    playerImg1: string;
    playerImg2: string;
    playerImg3: string;
    totalPlayer: number;
}

// eslint-disable-next-line no-unused-vars
const GameContainer: React.FC<GameProps> = ({ playerImg1, playerImg2, playerImg3, totalPlayer }) => {
    const [loading, setLoading] = useState(true);
    const [borderValue, setBorderValue] = useState<string>('none');
    const [listingGame, setListingGame] = React.useState<any>(null);
    const [searchData, setSearchData] = useState<any>(null);
    // const [isLoading] = React.useState(true);
    const router = useRouter();
    const notify = useNotify();
    const { fetchAPI, isLoading } = useAPICaller();

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            return setBorderValue('none');
        }
        return setBorderValue('0.5px solid rgba(148, 148, 148, 0.35)');
    };

    const handleSearch = (key: any, array: any) => {
        return new Promise((resolve, reject) => {
            const result = array.filter((item: any) => item.name.toLowerCase().includes(key.toLowerCase()));
            resolve(result);
        });
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetchAPI({
                endpoint: '/games/home',
                method: 'GET'
            });

            if (res.status === 200 && router.query.search) {
                const resSearch = await handleSearch(router.query.search, res.data.data);
                setSearchData(resSearch);
            }

            if (res.status === 200) {
                setListingGame(res.data.data);
            } else {
                notify(res.message, 'error');
            }
        } catch (e) {
            notify('failed data', 'e');
        }
        setLoading(false);
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    React.useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', handleScroll);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const cards = [
        {
            id: 1,
            title: 'Block Stack',
            person: 300
        },
        {
            id: 2,
            title: 'Hop Up',
            person: 400
        }
    ];

    if (isLoading) {
        return <GameSekeleton />;
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                padding='25px'
                sx={{
                    mb: 2,
                    position: 'sticky',
                    top: -1,
                    backgroundColor: 'white',
                    zIndex: 999,
                    width: '-webkit-fill-available',
                    borderBottom: borderValue
                }}
            >
                <Header
                    isBack={router.asPath?.includes('search')}
                    logo='/icons/logo.svg'
                    point={102_300}
                    profilePicture='/icons/dummy/profile.png'
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <Box sx={{ width: '90%', paddingX: '20px', mb: '20px' }}>
                    <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>Games</Typography>
                </Box>
                <Grid container justifyContent='start' rowGap='30px'>
                    {(searchData || listingGame)?.map((item: any, idx: number) => (
                        <Grid
                            item
                            xs={6}
                            key={item.id}
                            onClick={() => {
                                router.push(`/games/${item.id}`);
                            }}
                        >
                            <Box sx={{ width: '100%', textAlign: 'center' }}>
                                <img src={item.banner_url} alt='' style={{ width: '150px', borderRadius: '10px' }} />
                                <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>{item.name}</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <BadgeImages
                                        backgroundColor='white'
                                        size='large'
                                        images1={playerImg1 || '/images/dingdong.png'}
                                        images2={playerImg2 || '/images/wanita.png'}
                                        images3={playerImg3 || '/images/dingdong.png'}
                                        total={item.user_sessions}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                    {searchData?.length === 0 && (
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <img src='/images/failed.png' alt='' style={{ width: '150px', borderRadius: '10px' }} />
                            <Typography sx={{ fontWeight: 'bold', mt: '10px' }}>Sorry, Game not found . . . </Typography>
                        </Box>
                    )}
                </Grid>
            </Box>
        </Box>
        // <Box sx={{ color: '#373737', width: '100%' }}>
        //     {loading ? (
        //         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        //             <Skeleton sx={{ width: '75px', height: '38px', ml: '20px', mt: '20px' }} />
        //             <Skeleton sx={{ width: '75px', height: '38px', ml: '20px', mt: '20px', mr: '5%' }} />
        //         </Box>
        //     ) : (
        //         <Box
        //             padding='25px'
        //             sx={{
        //                 mb: 2,
        //                 position: 'sticky',
        //                 top: -1,
        //                 backgroundColor: 'white',
        //                 zIndex: 999,
        //                 width: '-webkit-fill-available',
        //                 borderBottom: borderValue
        //             }}
        //         >
        //             <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
        //         </Box>
        //     )}
        //     {!loading && searchData && (
        //         <IconButton
        //             onClick={() => router.back()}
        //             sx={{ width: '24px', height: '24px', ml: '20px', mb: '-15px', background: '#A54CE5' }}
        //         >
        //             <ArrowBackIcon sx={{ color: '#fff', fontSize: '20px' }} />
        //         </IconButton>
        //     )}
        //     {loading ? (
        //         <Skeleton sx={{ width: '75px', height: '38px', ml: '20px', mt: '20px' }} />
        //     ) : (
        //         <Box sx={{ mt: '42px', mx: '20px' }}>
        //             <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>Games</Typography>
        //         </Box>
        //     )}

        //     <Box
        //     // sx={{
        //     //     display: 'flex',
        //     //     justifyContent: 'space-between',
        //     //     height: '33px',
        //     //     direction: 'column'
        //     // }}
        //     >
        //         {loading ? (
        //             <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        //                 {[...Array(2)].map((_item: any, index: number) => {
        //                     return (
        //                         <Box key={index}>
        //                             <Skeleton animation='wave' variant='rectangular' sx={{ width: '162px', height: '172px' }} />
        //                             <Skeleton
        //                                 sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
        //                                 animation='wave'
        //                                 variant='rectangular'
        //                                 width={80}
        //                                 height={80}
        //                             />
        //                         </Box>
        //                     );
        //                 })}
        //             </Grid>
        //         ) : (
        //             <Grid container direction='row' spacing={10} justifyContent='start' border='1px solid red' flexWrap='wrap'>
        //                 <Grid item xs={5} sx={{ border: '1px solid red' }}>
        //                     <Box>
        //                         <img src='/images/hopup.png' alt='' />
        //                     </Box>
        //                 </Grid>
        //                 <Grid item xs={5}>
        //                     <Box>
        //                         <img src='/images/hopup.png' alt='' />
        //                     </Box>
        //                 </Grid>
        //                 <Grid item xs={5}>
        //                     <Box>
        //                         <img src='/images/hopup.png' alt='' />
        //                     </Box>
        //                 </Grid>
        //             </Grid>
        //             // <Stack direction='row' spacing={2} sx={{ display: 'flex', padding: '20px', flexWrap: 'wrap' }}>
        //             //     {(searchData || listingGame).map((item: any) => {
        //             //         return (
        //             //             <Box
        //             //                 onClick={() => {
        //             //                     router.push(`/games/${item.id}`);
        //             //                 }}
        //             //                 key={item.id}
        //             //                 sx={{
        //             //                     width: '150px',
        //             //                     height: '172px',
        //             //                     borderRadius: '11px',
        //             //                     backgroundImage: `url(${item.banner_url})`,
        //             //                     backgroundSize: 'cover',
        //             //                     backgroundPosition: 'center'
        //             //                 }}
        //             //             >
        //             //                 <Box sx={{ display: 'flex', justifyContent: 'center', mt: 23 }}>
        //             //                     <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>{item.name}</Typography>
        //             //                 </Box>
        //             //                 <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        //             //                     <BadgeImages
        //             //                         backgroundColor='white'
        //             //                         size='large'
        //             //                         images1={playerImg1 || '/images/dingdong.png'}
        //             //                         images2={playerImg2 || '/images/wanita.png'}
        //             //                         images3={playerImg3 || '/images/dingdong.png'}
        //             //                         total={item.user_sessions}
        //             //                     />
        //             //                 </Box>
        //             //             </Box>
        //             //         );
        //             //     })}
        //             //     {searchData && searchData.length === 0 && (
        //             //         <Typography component='h3' fontWeight={600} textAlign='center'>
        //             //             Search data not found
        //             //         </Typography>
        //             //     )}
        //             // </Stack>
        //         )}
        //     </Box>
        // </Box>
    );
};

export default GameContainer;
