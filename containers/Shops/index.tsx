import { Box, Typography, Grid, ButtonBase, ImageList, ImageListItem } from '@mui/material';
import { WatchLater } from '@mui/icons-material';
import Button from 'components/Button/Index';
import numberFormat from 'helper/numberFormat';
import NavigationCard from 'components/NavigationCard';
import Header from 'components/Header';
import React, { useEffect, useState } from 'react';
import ShopsSlider from 'components/ShopsSlider';
import ShopsCard from 'components/ShopsCard';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import ShopsSkeleton from './ShopsSkeleton';

const itemData = [
    { id: 1, image: '/images/keyboard.png', label: 'Rexus Daxa Mechanical', points: 5000 },
    { id: 2, image: '/images/tablet.png', label: 'Lorem Ipsum', points: 5000 },
    { id: 3, image: '/images/ps5.png', label: 'Playstation 5', points: 5000 },
    { id: 4, image: '/images/smartphone.png', label: 'Realme Narzo 20 Pro 4/64GB', points: 5000 },
    { id: 5, image: '/images/smartphone.png', label: 'Realme Narzo 20 Pro 4/64GB', points: 5000 },
    { id: 6, image: '/images/tablet.png', label: 'Lorem Ipsum', points: 5000 }
];

const ShopsContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [borderValue, setBorderValue] = useState<string>('none');
    const [dataRedemptions, setDataRedemptions] = useState<any>(null);

    const router = useRouter();
    const notify = useNotify();

    const { fetchAPI } = useAPICaller();

    const getRedemptions = async () => {
        setIsLoading(true);
        try {
            const response = await fetchAPI({
                method: 'GET',
                endpoint: 'home/redemptions'
            });
            console.log('response', response);
            if (response.status === 200) {
                setDataRedemptions(response.data.data);
            } else {
                notify(response.data.message, 'error');
            }
            setIsLoading(false);
        } catch (err: any) {
            notify(err.message, 'error');
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // setTimeout(() => setIsLoading(false), 2000);
        getRedemptions();
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

    if (isLoading) {
        return <ShopsSkeleton />;
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                padding='25px'
                sx={{
                    borderBottom: borderValue,
                    mb: 2,
                    position: 'sticky',
                    top: -1,
                    backgroundColor: 'white',
                    zIndex: 999,
                    width: '-webkit-fill-available'
                }}
            >
                <Header isShops logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Grid container justifyContent='center' alignItems='center'>
                <Grid container padding='0 20px' justifyContent='space-between' alignItems='center' mb='40px'>
                    <Grid item xs={7} sm={7}>
                        <Typography variant='h5' sx={{ fontWeight: '700' }}>
                            Redeem Prize
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} sx={{ textAlign: 'end' }}>
                        <ButtonBase
                            onClick={() => {
                                router.push('/shops/redeem-history');
                            }}
                        >
                            <img src='/images/redeem-icon.png' alt='redeem-icon' />
                        </ButtonBase>
                    </Grid>
                </Grid>
                <ShopsSlider>
                    {dataRedemptions?.banners.map((item: any) => (
                        <ShopsCard
                            // productName={itemData[index].label}
                            onClick={() => {
                                router.push(`/shops/prize/${item.id}`);
                            }}
                            key={item.id}
                            point={numberFormat(item.points)}
                            image={item.image_url}
                            title={item.title}
                        />
                    ))}
                </ShopsSlider>
                <Box width='100%' padding='0 20px' margin='20px 0px'>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item xs={7} sm={7}>
                            <Typography sx={{ fontSize: '18px', fontWeight: '700' }}>Prizes</Typography>
                        </Grid>
                        <Grid item xs={2} sm={2} sx={{ textAlign: 'end' }}>
                            <ButtonBase href='/shops/prize'>
                                <Typography sx={{ color: '#A54CE5', fontSize: '12px', fontWeight: '600' }}>See All</Typography>
                            </ButtonBase>
                        </Grid>
                    </Grid>
                    <ImageList variant='masonry' cols={2} gap={10}>
                        {itemData.map((item, idx: number) => (
                            <ImageListItem sx={{ cursor: 'pointer' }} key={idx}>
                                <Box
                                    onClick={() => {
                                        router.push(`/shops/prize/${item.id}`);
                                    }}
                                >
                                    <Box sx={{ backgroundColor: '#F4F1FF', padding: '25px', borderRadius: '14px' }}>
                                        <img src={item.image} alt={item.label} style={{ width: '100%' }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: '16px', fontWeight: '700', mt: 1 }}>{item.label}</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <img src='/images/point-shops.png' alt='point-shop' loading='lazy' />
                                            <Typography sx={{ fontSize: '13px', fontWeight: '700' }}>{item.points}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                <Grid container padding='0 20px' justifyContent='center' alignItems='center'>
                    <Grid
                        container
                        justifyContent='space-between'
                        alignItems='center'
                        sx={{ backgroundColor: '#A54CE5', borderRadius: '15px', height: '230px' }}
                        direction='row'
                        onClick={() => {
                            router.push('/shops/lucky-raffle');
                        }}
                    >
                        <Grid item xs={6} sx={{ padding: '10px 20px' }}>
                            <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: '700' }}>Lucky Raffle</Typography>
                            <Typography sx={{ fontSize: '9px', color: 'white' }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing.
                            </Typography>
                            <Box sx={{ display: 'flex', my: 2, color: 'white', gap: '5px' }}>
                                <WatchLater />
                                <Typography sx={{ fontSize: '12px' }}>6d 13h 23m</Typography>
                            </Box>
                            <Button
                                onClick={() => {
                                    router.push('/shops/lucky-raffle');
                                }}
                                title='Join Now'
                                backgoundColor='white'
                                color='#A54CE5'
                                height='30px'
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            <img src='/images/lucky-raffle.png' alt='luckyraffle' />
                        </Grid>
                    </Grid>
                </Grid>
                <Box sx={{ padding: '0 24px', width: '100%', my: 2 }}>
                    <NavigationCard
                        isBorder
                        icon='/icons/term.svg'
                        title='Terms & Condition'
                        onClick={() => {
                            router.push('/terms-conditions');
                        }}
                    />
                </Box>
                <Box padding='0 20px' width='100%'>
                    <Grid
                        container
                        gap='10px'
                        position='relative'
                        sx={{ backgroundColor: '#56CF54', mt: 3, borderRadius: '15px', height: '100px' }}
                        alignItems='center'
                        width='100%'
                    >
                        <Grid item xs={5} sx={{ position: 'relative', zIndex: 2, bottom: '10px', left: '10px' }}>
                            <img src='/images/maskot-shops.png' alt='maskot' style={{ width: '135px' }} />
                        </Grid>
                        <Grid item xs={6} sx={{ color: 'white' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Play & Join the Tournament</Typography>
                            <Typography sx={{ fontSize: '10px' }}>Get the Points and Redeem it with our special prize!</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Box>
    );
};

export default ShopsContainer;
