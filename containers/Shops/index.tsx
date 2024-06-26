/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { Box, Typography, Grid, ButtonBase, ImageList, ImageListItem } from '@mui/material';
import { WatchLater } from '@mui/icons-material';
import Button from 'components/Button/Index';
import numberFormat from 'helper/numberFormat';
import NavigationCard from 'components/NavigationCard';
import Header from 'components/Header';
import React, { useEffect, useState } from 'react';
import ShopsSwiper from 'components/ShopsSlider/ShopsSwiper';
import { SwiperSlide } from 'swiper/react';
// import ShopsCard from 'components/ShopsCard';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import getRemainingTimes from 'helper/getRemainingTime';
import SignupLoginDialog from 'components/Dialog/SignupLoginDialog';
import NotifDialog from 'components/Dialog/notifDialog';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import ShopsSkeleton from './ShopsSkeleton';
import dataComingSoon from '../../utils/dataComingSoon';
import ImageListItemComingSoon from '../../components/ImageListComingSoon';
import SurveyDialog from './SurveyDialog';

const ShopsContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [borderValue, setBorderValue] = useState<string>('none');
    const [dataRedemptions, setDataRedemptions] = useState<any>(null);
    const [timeLuckyRaffle, setTimeLuckyRaffle] = useState<string>('');
    const [signupLoginDialog, setSignupLoginDialog] = React.useState<boolean>(false);
    const [openNotifDialog, setOpenNotifDialog] = React.useState<boolean>(false);
    const isComingSoon = process.env.NEXT_PUBLIC_PRIZES_COMING_SOON === 'true';

    const [surveyDialog, setSurveyDialog] = useState<boolean>(true);
    const router = useRouter();
    const notify = useNotify();
    const userState = useSelector((state: any) => state.webpage?.user?.user);

    const { fetchAPI } = useAPICaller();

    const getRedemptions = async () => {
        setIsLoading(true);
        if (!isComingSoon) {
            try {
                const response = await fetchAPI({
                    method: 'GET',
                    endpoint: 'home/redemptions'
                });

                if (!response) {
                    throw new Error('Data is Empty');
                }

                if (response.status === 200) {
                    setDataRedemptions(response.data.data);
                    if (response.data.data?.lucky_raffle?.start_date) {
                        if (timeLuckyRaffle) {
                            setInterval(() => setTimeLuckyRaffle(getRemainingTimes(response.data.data?.lucky_raffle?.start_date)), 6000);
                        } else {
                            setTimeLuckyRaffle(getRemainingTimes(response.data.data?.lucky_raffle?.start_date));
                        }
                    }
                } else {
                    throw new Error(response.data.message);
                }
                setIsLoading(false);
            } catch (err: any) {
                notify(err.message, 'error');
                setIsLoading(false);
            }
        }
        setIsLoading(false);
    };

    useEffect(() => {
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

    React.useEffect(() => {
        if (!isLoading) {
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

                gptAdSlots[0] = googletag
                    .defineSlot(
                        '/21622890900,22860604212/ID_prizeplay.io_res_cate_mid3_336x280//300x250//320x100//320x50',
                        [
                            [300, 250],
                            [320, 50],
                            [336, 280],
                            [320, 100]
                        ],
                        'div-gpt-ad-1673345406261-0'
                    )
                    .setCollapseEmptyDiv(true)
                    // .defineSizeMapping(mapping2)
                    .addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.pubads().refresh();
                googletag.enableServices();
                googletag.display('div-gpt-ad-1673345406261-0');
            });
        }
    }, [isLoading]);
    if (isLoading) {
        return <ShopsSkeleton />;
    }

    const handlePlay = async (id: any) => {
        if (userState) {
            return router.push(`/shops/prize/${id}`);
        }
        return setSignupLoginDialog(true);
    };
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
                {!isComingSoon && (
                    <Box sx={{ width: { xs: '100vw', sm: '100%', md: '100%', lg: '100%' } }}>
                        <ShopsSwiper>
                            {/* {dataRedemptions?.banners.map((item: any) => (
                            <ShopsCard
                                // productName={itemData[index].label}
                                // onClick={() => {
                                //     router.push(`/shops/prize/${item.id}`);
                                // }}
                                key={item.id}
                                point={numberFormat(item.points)}
                                image={item.image_url}
                                title={item.title}
                            />
                        ))} */}
                            <SwiperSlide>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${'/images/home_banner1.png'})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '200px',
                                        borderRadius: '15px',
                                        width: '95%',
                                        ml: '10px'
                                    }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${'/images/home_banner2.png'})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '200px',
                                        borderRadius: '15px',
                                        width: '95%',
                                        ml: '10px'
                                    }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${'/images/home_banner3.png'})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '200px',
                                        borderRadius: '15px',
                                        width: '95%',
                                        ml: '10px'
                                    }}
                                />
                            </SwiperSlide>
                        </ShopsSwiper>
                    </Box>
                )}

                <div id='div-gpt-ad-1673345406261-0' style={{ textAlign: 'center' }} />
                <Box width='100%' padding='0 20px' margin='20px 0px'>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item xs={7} sm={7}>
                            <Typography sx={{ fontSize: '18px', fontWeight: '700' }}>Prizes</Typography>
                        </Grid>
                        <Grid item xs={2} sm={2} sx={{ textAlign: 'end' }}>
                            <ButtonBase onClick={() => router.push('/shops/prize')}>
                                <Typography sx={{ color: '#A54CE5', fontSize: '12px', fontWeight: '600' }}>See All</Typography>
                            </ButtonBase>
                        </Grid>
                    </Grid>
                    <ImageList variant='masonry' cols={2} gap={10} sx={{ '& .MuiImageListItem-root': { overflow: 'auto' } }}>
                        {isComingSoon
                            ? dataComingSoon.map((item: any, index: number) => {
                                  return index < 4 && <ImageListItemComingSoon key={index} image={item.image_url} name={item.name} />;
                              })
                            : dataRedemptions?.catalogues.map((item: any, idx: number) => (
                                  <ImageListItem sx={{ cursor: 'pointer' }} key={idx}>
                                      <Box
                                          //   onClick={() => {
                                          //       router.push(`/shops/prize/${item.id}`);
                                          //   }}
                                          onClick={() => handlePlay(item.id)}
                                      >
                                          <Box sx={{ backgroundColor: '#F4F1FF', padding: '25px', borderRadius: '14px' }}>
                                              <img
                                                  src={item.image_url || '/images/img_error.svg'}
                                                  alt={item.name}
                                                  style={{ width: '100%' }}
                                                  onError={({ currentTarget }) => {
                                                      currentTarget.onerror = null;
                                                      currentTarget.src = '/images/img_error.svg';
                                                  }}
                                              />
                                          </Box>
                                          <Box>
                                              <Typography sx={{ fontSize: '16px', fontWeight: '700', mt: 1 }}>
                                                  {item.name || 'unknown'}
                                              </Typography>
                                              <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                  <img src='/images/point-shops.png' alt='point-shop' loading='lazy' />
                                                  <Typography sx={{ fontSize: '13px', fontWeight: '700' }}>
                                                      {numberFormat(item.price)}
                                                  </Typography>
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
                        // onClick={() => {
                        //     if (!isComingSoon) router.push('/shops/lucky-raffle');
                        // }}
                    >
                        <Grid
                            item
                            xs={6}
                            sx={{
                                padding: '10px 20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '90%'
                            }}
                        >
                            <Box>
                                <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: '700' }}>Lucky Raffle</Typography>
                                {/* <Typography sx={{ fontSize: '9px', color: 'white' }}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing.
                                </Typography> */}
                            </Box>
                            <Box>
                                {!isComingSoon && (
                                    <Box sx={{ display: 'flex', my: 2, color: 'white', gap: '5px', alignItems: 'center' }}>
                                        <WatchLater />
                                        <Typography sx={{ fontSize: '12px' }}>{timeLuckyRaffle}</Typography>
                                    </Box>
                                )}
                                {isComingSoon ? (
                                    <Box
                                        sx={{
                                            color: '#A54CE5',
                                            background: '#fff',
                                            borderRadius: '34px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '7px'
                                        }}
                                    >
                                        <Typography component='span' fontSize='14px' fontWeight={700}>
                                            Coming Soon
                                        </Typography>
                                    </Box>
                                ) : (
                                    <Button
                                        // onClick={() => {
                                        //     router.push('/shops/lucky-raffle');
                                        // }}
                                        title='Join Now'
                                        backgoundColor='white'
                                        color='#A54CE5'
                                        height='30px'
                                    />
                                )}
                            </Box>
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
                        position='relative'
                        sx={{ backgroundColor: '#56CF54', mt: 3, borderRadius: '15px', height: '100px' }}
                        alignItems='center'
                    >
                        <Grid item xs={5} height='100%' position='relative'>
                            <Box sx={{ position: 'absolute', zIndex: 2, bottom: '-33px' }}>
                                <img src='/images/maskot-shops-2.png' alt='maskot' style={{ width: '145px' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={7} sx={{ color: 'white' }}>
                            <Link href='/tournaments'>
                                <Typography sx={{ fontWeight: 'bold' }}>Play & Join the Tournament</Typography>
                            </Link>
                            <Typography sx={{ fontSize: '10px' }}>Get the Points and Redeem it with our special prize!</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <NotifDialog
                open={openNotifDialog}
                setOpenDialog={setOpenNotifDialog}
                body='You don’t have Coins in your balance. 
Top up Coins to continue'
            />
            <SignupLoginDialog open={signupLoginDialog} setOpen={setSignupLoginDialog} />
            <SurveyDialog open={surveyDialog} setOpenDialog={setSurveyDialog} />
        </Box>
    );
};

export default ShopsContainer;
