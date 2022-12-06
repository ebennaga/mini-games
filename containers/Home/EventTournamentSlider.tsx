import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Box, Typography } from '@mui/material';
import ButtonLanding from 'components/Button/Index';
import { useRouter } from 'next/router';
import useAuthReducer from 'hooks/useAuthReducer';
import { useSelector } from 'react-redux';

export default function EventTournamentSlider() {
    const router = useRouter();
    const { setUser } = useAuthReducer();
    const userState = useSelector((state: any) => state.webpage?.user?.user);

    const handlePlayGame = (page: 'casual' | 'grand') => {
        setUser({ ...userState, page });
        router.push('/tournaments');
    };

    return (
        <Box sx={{ width: '93.5vw', maxWidth: '600px' }}>
            <Swiper slidesPerView={1.1} spaceBetween={20} modules={[Pagination]} className='mySwiper'>
                <SwiperSlide>
                    <Box
                        sx={{
                            height: 'fit-content',
                            minHeight: '355px',
                            borderRadius: '15px',
                            mb: '20px',
                            backgroundImage: 'url(/images/event/bg-casual.png)',
                            backgroundSize: 'cover',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '20px '
                        }}
                    >
                        <Typography
                            sx={{
                                mb: '20px',
                                color: 'white',
                                fontSize: '26px',
                                fontWeight: 700,
                                lineHeight: '27px',
                                '@media (max-width: 363px)': { fontSize: '22px' }
                            }}
                        >
                            Play free games, win attractive prize!
                        </Typography>
                        <Typography
                            sx={{ color: 'white', fontSize: '12px', fontWeight: 500, '@media (max-width: 363px)': { fontSize: '8px' } }}
                        >
                            Play free tournament, collect coins to join grand tournaments and win the prizes.
                        </Typography>
                        <img
                            src='/images/event/casual-tournament.png'
                            alt='casual tournament'
                            width='276.22px'
                            height='auto'
                            style={{ marginTop: '-16px' }}
                        />
                        <ButtonLanding
                            title='Play Game'
                            backgoundColor='#A54CE5'
                            color='white'
                            height='40px'
                            onClick={() => handlePlayGame('casual')}
                        />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        sx={{
                            minHeight: '355px',
                            height: 'fit-content',
                            borderRadius: '15px',
                            mb: '20px',
                            backgroundImage: 'url(/images/event/bg-grand.png)',
                            backgroundSize: 'cover',
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '20px '
                        }}
                    >
                        <Typography
                            sx={{
                                mb: '20px',
                                color: 'white',
                                fontSize: '26px',
                                fontWeight: 700,
                                lineHeight: '27px',
                                '@media (max-width: 363px)': { fontSize: '22px' }
                            }}
                        >
                            Join the Grand Tournament
                        </Typography>
                        <Typography
                            sx={{ color: 'white', fontSize: '12px', fontWeight: 500, '@media (max-width: 363px)': { fontSize: '8px' } }}
                        >
                            collect as many points as possible, exclusive prizes are waiting for you
                        </Typography>
                        <img
                            src='/images/event/grand-tournament.png'
                            alt='grand tournament'
                            width='276.22px'
                            height='auto'
                            style={{ marginTop: '-18px' }}
                        />
                        <ButtonLanding
                            title='Play Game'
                            backgoundColor='#54B7FF'
                            color='white'
                            height='40px'
                            onClick={() => handlePlayGame('grand')}
                        />
                    </Box>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
}
