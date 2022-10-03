import { Box, Typography, ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import { useRouter } from 'next/router';

const itemData = [
    { id: 1, image: '/images/keyboard.png', label: 'Rexus Daxa Mechanical Keyboard RGB', points: 5000 },
    { id: 2, image: '/images/tablet.png', label: 'Lorem Ipsum dolor Dolor sit amet', points: 5000 },
    { id: 3, image: '/images/ps5.png', label: 'Playstation 5', points: 5000 },
    { id: 4, image: '/images/smartphone.png', label: 'Realme Narzo 20 Pro 4/64GB', points: 5000 },
    { id: 5, image: '/images/smartphone.png', label: 'Realme Narzo 20 Pro 4/64GB', points: 5000 },
    { id: 6, image: '/images/tablet.png', label: 'Lorem Ipsum dolor Dolor sit amet', points: 5000 }
];

const PrizeContainer = () => {
    const router = useRouter();
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                padding='25px'
                sx={{
                    borderBottom: '1px solid rgba(148, 148, 148, 0.35)',
                    mb: 2,
                    position: 'sticky',
                    top: -1,
                    backgroundColor: 'white',
                    zIndex: 999,
                    width: '-webkit-fill-available'
                }}
            >
                <Header isShops hrefBack='/shops' isBack point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box padding='10px 20px'>
                <Typography sx={{ fontSize: '24px', fontWeight: '700' }}>Prizes</Typography>
                <ImageList variant='masonry' cols={2} gap={30}>
                    {itemData.map((item) => (
                        <ImageListItem sx={{ cursor: 'pointer' }} key={item.id}>
                            <Box
                                onClick={() => {
                                    router.push(`/shops/prize/${item.id}`);
                                }}
                            >
                                <Box sx={{ backgroundColor: '#F4F1FF', padding: { xs: '20px', sm: '45px' }, borderRadius: '14px' }}>
                                    <img src={item.image} alt={item.label} style={{ width: '100%' }} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '700', mt: 1 }}>{item.label}</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <img src='/images/point-shops.png' alt='point-shop' loading='lazy' />
                                        <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>{item.points}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
};

export default PrizeContainer;
