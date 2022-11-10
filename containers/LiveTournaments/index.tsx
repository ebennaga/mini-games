import { Box, Typography } from '@mui/material';
import React from 'react';
import HeaderBack from 'components/HeaderBack';
import { useRouter } from 'next/router';
import TournamentCard from './TournamentCard';

const LiveTournamentContainer = () => {
    const router = useRouter();
    const [borderValue, setBorderValue] = React.useState<string>('none');
    const handleScroll = () => {
        if (window.scrollY === 0) {
            return setBorderValue('none');
        }
        return setBorderValue('0.5px solid rgba(148, 148, 148, 0.35)');
    };

    React.useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', handleScroll);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    padding: '20px',
                    borderBottom: borderValue,
                    position: 'sticky',
                    top: borderValue === 'none' ? '20px' : 0,
                    zIndex: 2,
                    backgroundColor: 'white',
                    width: '-webkit-fill-available'
                }}
            >
                <HeaderBack title='Live Tournaments' />
            </Box>

            <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                <img src='/images/dummy/banner-live.png' alt='livebanner' style={{ width: '90%' }} />
            </Box>
            <Box sx={{ mx: '20px' }}>
                <Typography sx={{ fontWeight: 600, mt: '10px', fontSize: '14px' }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis obcaecati eius odio rem, a amet vitae pariatur et.
                    Doloremque, quas animi enim, laudantium incidunt deleniti blanditiis perferendis laboriosam accusantium, a saepe optio
                    dicta rerum sed.
                </Typography>
            </Box>
            <Box sx={{ mx: '10px', mt: '20px', display: 'flex', justifyContent: 'center' }}>
                <TournamentCard
                    isLive
                    image='/images/blockstack-bg.png'
                    imageGame='/images/block-stack.png'
                    onClick={
                        // () => {}
                        () => router.push(`/live-tournament/1`)
                    }
                    totalUser={4000}
                    prizePool={30000}
                    point={20}
                    // time='6d 13h 23m'
                    time={String(new Date())}
                    // dataLength={datasHome?.tournaments.length}
                />
            </Box>
            <Box sx={{ mx: '10px', mt: '20px', display: 'flex', justifyContent: 'center' }}>
                <TournamentCard
                    isLive
                    image='/images/hopup-bg.png'
                    imageGame='/images/hopup.png'
                    onClick={
                        // () => {}
                        () => router.push(`/live-tournament/1`)
                    }
                    totalUser={4000}
                    prizePool={30000}
                    point={20}
                    // time='6d 13h 23m'
                    time={String(new Date())}
                    // dataLength={datasHome?.tournaments.length}
                />
            </Box>
            <Box sx={{ mx: '20px', mt: '30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>Our Partners</Typography>
                    <Typography sx={{ color: '#A54CE5', fontWeight: 600, fontSize: '12px' }}>View All Partners</Typography>
                </Box>
                <Typography sx={{ fontWeight: 600, fotnSize: '13px', mt: '10px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, eum!
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '15px', mt: '10px', justifyContent: 'center' }}>
                    {[...Array(12)].map((item: any, idx: number) => {
                        return (
                            <Box key={idx} sx={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center' }}>
                                <img
                                    src={idx % 2 === 0 ? '/images/sbuck-logo.png' : '/images/dcost-logo.png'}
                                    alt='sbuck'
                                    style={{ width: '100%' }}
                                />
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default LiveTournamentContainer;
