/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from 'components/Header';
import { ChevronRight, East } from '@mui/icons-material';
import { Typography, Stack, ButtonBase, Skeleton, Grid, Box } from '@mui/material';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import Link from 'next/link';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import numberFormat from 'helper/numberFormat';
import TransactionCard from 'containers/Transaction/TransactionCard';
import SignupLoginDialog from 'components/Dialog/SignupLoginDialog';
import { useSelector } from 'react-redux';
import TopupSkeleton from './TopupSkeleton';

const TopUp = () => {
    const router = useRouter();
    // const [loading, setLoading] = useState(true);
    const [borderValue, setBorderValue] = useState<string>('none');
    const { fetchAPI, isLoading } = useAPICaller();
    const [coins, setCoins] = React.useState<any>(null);
    const [histories, setHistories] = React.useState<any>(null);
    const [dialogSignup, setDialogSignup] = useState<boolean>(false);

    const userState = useSelector((state: any) => state.webpage?.user?.user);

    const getTopupData = async () => {
        const response = await fetchAPI({
            endpoint: 'transactions/home?search='
        });
        if (response.status === 200) {
            setCoins(response.data.data.coins);
            setHistories(response.data.data.history);
        }
    };
    React.useEffect(() => {
        getTopupData();
    }, []);

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

    const handleTopup = (id: any) => {
        if (userState) {
            router.push(`/topup/${id}/payment-confirmation`);
        } else {
            setDialogSignup(true);
        }
    };

    if (isLoading) {
        return <TopupSkeleton />;
    }

    return (
        <Box sx={{ color: '#373737', width: '100%' }}>
            <Box
                padding='25px'
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    zIndex: 9999,
                    backgroundColor: 'white',
                    width: '-webkit-fill-available',
                    top: '-1px',
                    borderBottom: borderValue
                }}
            >
                <Header logo='/icons/logo.svg' profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box sx={{ mt: '40px', ml: '20px', display: 'flex', justifyContent: 'space-between', mr: '18px', height: '33px' }}>
                <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '33px' }}>Top Up Coins</Typography>
            </Box>
            <Box sx={{ mt: '10px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>Exchange Rate</Typography>
                <Box
                    sx={{
                        padding: '10px',
                        background: 'linear-gradient(0.35turn, #FFEDA7 20% ,#FFEA98 12.5%, #FFEDA7 80%, #FFEA98 20%)',
                        display: 'flex',
                        borderRadius: '10px'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Box>
                            <img src='/images/poin.png' alt='point' />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold' }}>1 = Rp. 100</Typography>
                    </Box>
                </Box>
            </Box>
            <Grid container justifyContent='center' rowGap={2} columnGap={2} sx={{ flexWrap: 'wrap' }} marginBottom='20px'>
                {coins?.length > 0 &&
                    coins.map((item: any) => (
                        <Grid
                            sx={{ cursor: 'pointer' }}
                            item
                            xs={5}
                            key={item.id}
                            onClick={() => {
                                // router.push(`/topup/${item.id}/payment-confirmation`);
                                handleTopup(item.id);
                            }}
                        >
                            <Box
                                sx={{
                                    width: '90%',
                                    padding: '8px',
                                    background: 'linear-gradient(0.35turn, #FFEDA7 20% ,#FFEA98 12.5%, #FFEDA7 80%, #FFEA98 20%)',
                                    borderRadius: '10px'
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '20px' }}>
                                    <Box />
                                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>Rp. {numberFormat(item.price)}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Box>
                                        <img src='/images/poin.png' alt='point' />
                                    </Box>
                                    <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>{numberFormat(item.coin)}</Typography>
                                </Box>
                                {/* <Typography sx={{ fontSize: '15px' }}>{item.description}</Typography> */}
                            </Box>
                        </Grid>
                    ))}
            </Grid>
            <Box sx={{ paddingX: '20px' }}>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <img src='/images/subtract.png' width={22} height={22} alt='subtract' />
                    <Typography sx={{ fontSize: '12px' }}>
                        If you have problems, please <span style={{ color: '#FF4567' }}>Click here!</span>
                    </Typography>
                </Box>
                <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '33px', mt: '30px' }}>Transaction</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', paddingX: '20px' }}>
                {histories?.length > 0 &&
                    histories
                        .slice(2)
                        .map((i: any) => (
                            <TransactionCard
                                isToday
                                isYesterday
                                key={i.id}
                                title={i.description}
                                isCoin
                                amount={i.coin}
                                subtitle={`Transaction - ${i?.created_at?.slice(11, 16)}`}
                                created={i?.created_at}
                            />
                        ))}
                {histories?.length === 0 && <Typography sx={{ mt: '10px', color: 'red' }}>There is not any histories top up</Typography>}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <ButtonBase
                    onClick={() => {
                        router.push('/transaction');
                    }}
                    sx={{ color: '#A54CE5' }}
                >
                    Show All <East fontSize='inherit' sx={{ ml: '3px' }} />
                </ButtonBase>
            </Box>
            <Box
                onClick={() => {
                    router.push('/coins-prizes');
                }}
                sx={{
                    mt: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '33px',
                    padding: '0px 20px'
                }}
            >
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '30px' }}>
                    <Box>
                        <img
                            src='/images/ask.png'
                            width={30}
                            height={30}
                            alt='maskot-logo'
                            style={{ marginLeft: '20%', marginTop: '5%' }}
                        />
                    </Box>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, textAlign: 'start' }}>How to get coins & prizes</Typography>
                </Box>
                <Box sx={{ mt: 1, mr: 0 }}>
                    <ChevronRight sx={{ color: '#8634C1' }} />
                </Box>
            </Box>
            <Box
                onClick={() => {
                    router.push('/help-support');
                }}
                sx={{
                    mt: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '33px',
                    padding: '0px 20px'
                }}
            >
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '30px' }}>
                    <Box>
                        <img
                            src='/images/ask.png'
                            width={30}
                            height={30}
                            alt='maskot-logo'
                            style={{ marginLeft: '20%', marginTop: '5%' }}
                        />
                    </Box>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, textAlign: 'start' }}>Help & Support</Typography>
                </Box>
                <Box sx={{ mt: 1, mr: 0 }}>
                    <ChevronRight sx={{ color: '#8634C1' }} />
                </Box>
            </Box>
            {/* {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Skeleton sx={{ width: '75px', height: '38px', ml: '20px', mt: '20px' }} />
                    <Skeleton sx={{ width: '75px', height: '38px', mr: '5%', mt: '20px' }} />
                </Box>
            ) : (
                <Box
                    padding='25px'
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        position: 'sticky',
                        zIndex: 9999,
                        backgroundColor: 'white',
                        width: '-webkit-fill-available',
                        top: '-1px',
                        borderBottom: borderValue
                    }}
                >
                    <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
                </Box>
            )}
            {isLoading ? (
                <Skeleton sx={{ width: '125px', height: '38px', ml: '20px', mt: '40px' }} />
            ) : (
                <Box sx={{ mt: '40px', ml: '20px', display: 'flex', justifyContent: 'space-between', mr: '18px', height: '33px' }}>
                    <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '33px' }}>Top Up Coins</Typography>
                </Box>
            )}

            <Box sx={{ mt: '40px', ml: '20px', display: 'flex', justifyContent: 'space-between', mr: '18px', height: '33px' }}>
                {isLoading ? (
                    <Skeleton sx={{ width: '195px', height: '38px', mt: -2 }} />
                ) : (
                    <Box>
                        <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>Exchange Rate</Typography>
                    </Box>
                )}

                {isLoading ? (
                    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {[...Array(1)].map((_item: any, index: number) => {
                            return (
                                <Box key={index}>
                                    <Skeleton animation='wave' variant='rectangular' sx={{ width: '120px', height: '30px' }} />
                                </Box>
                            );
                        })}
                    </Grid>
                ) : (
                    <Box
                        sx={{
                            background: '#FFF5CD',
                            borderRadius: '10px',
                            width: '126px',
                            height: '35px',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box>
                            <img
                                src='/images/poin.png'
                                width={22}
                                height={22}
                                alt='maskot-logo'
                                style={{ marginLeft: '11px', marginTop: '6px' }}
                            />
                        </Box>
                        <Box sx={{ mt: '7px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>1 =</Typography>
                        </Box>
                        <Box sx={{ mt: '7px', mr: 2 }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>RP 100</Typography>
                        </Box>
                    </Box>
                )}
            </Box>
            <Box sx={{ mt: '40px', ml: '20px', display: 'flex', justifyContent: 'space-between', mr: '18px', height: '33px' }}>
                {isLoading ? (
                    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {[...Array(2)].map((_item: any, index: number) => {
                            return (
                                <Box key={index}>
                                    <Skeleton animation='wave' variant='rectangular' sx={{ width: '172px', height: '112px' }} />
                                </Box>
                            );
                        })}
                    </Grid>
                ) : (
                    <Box />
                    // <Grid container rowGap={3} columnGap={5} sx={{ flexWrap: 'wrap' }}>
                    //     {coins.length > 0 &&
                    //         coins.map((item: any) => (
                    //             <Grid item xs={5} key={item.id}>
                    //                 <Box
                    //                     sx={{
                    //                         width: '90%',
                    //                         padding: '20px',
                    //                         background: 'linear-gradient(0.35turn, #FFEDA7 20% ,#FFEA98 12.5%, #FFEDA7 80%, #FFEA98 20%)',
                    //                         borderRadius: '10px'
                    //                     }}
                    //                 >
                    //                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '20px' }}>
                    //                         <Box />
                    //                         <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>
                    //                             Rp. {numberFormat(item.price)}
                    //                         </Typography>
                    //                     </Box>
                    //                     <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    //                         <Box>
                    //                             <img src='/images/poin.png' alt='point' />
                    //                         </Box>
                    //                         <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>{numberFormat(item.coin)}</Typography>
                    //                     </Box>
                    //                     <Typography>{item.description}</Typography>
                    //                 </Box>
                    //             </Grid>
                    //         ))}
                    // </Grid>
                    // <Stack
                    //     direction='row'
                    //     justifyContent='space-between'
                    //     alignItems='center'
                    //     spacing={{ xs: 1.5, sm: 15 }}
                    //     sx={{ mt: '10%' }}
                    // >
                    //     {coins.map((item: any, index: number) => {
                    //         return (
                    //             <Box
                    //                 onClick={() => {
                    //                     router.push(`/topup/${item.id}/payment-confirmation`);
                    //                 }}
                    //                 key={index}
                    //                 sx={{
                    //                     width: '182px',
                    //                     height: '115px',
                    //                     borderRadius: '8px',
                    //                     opacity: 0.85,
                    //                     background:
                    //                         'linear-gradient(331deg, rgba(255,234,152,1) 0%, rgba(250,226,134,1) 50%, rgba(255,205,64,1) 100%)'
                    //                 }}
                    //             >
                    //                 <Box sx={{ mt: 2, ml: '65%' }}>
                    //                     <Typography sx={{ fontSize: '10px', fontWeight: 'bold', lineHeight: '10px', color: '#373737' }}>
                    //                         {item.price}
                    //                     </Typography>
                    //                 </Box>
                    //                 <Box sx={{ mt: 4 }}>
                    //                     <img
                    //                         src='/images/poin.png'
                    //                         width={22}
                    //                         height={22}
                    //                         alt='maskot-logo'
                    //                         style={{ marginLeft: '11px' }}
                    //                     />
                    //                 </Box>
                    //                 <Box sx={{ mt: -2, ml: 5 }}>
                    //                     <Typography sx={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '10px', color: '#373737' }}>
                    //                         {item.poin}
                    //                     </Typography>
                    //                 </Box>
                    //                 <Box sx={{ ml: 2, mt: 1.5, alignItems: 'center', display: 'none' }}>
                    //                     <Typography sx={{ fontSize: '10px', fontWeight: 'bold', lineHeight: '10px', color: '#949494' }}>
                    //                         {item.name}
                    //                     </Typography>
                    //                 </Box>
                    //             </Box>
                    //         );
                    //     })}
                    // </Stack>
                )}
            </Box>
            <Box sx={{ display: 'flex' }}>
                <img src='/images/subtract.png' width={22} height={22} alt='subtract' />
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sunt error ipsum temporibus consequatur nihil totam
                    consequuntur ea enim officia. <span style={{ color: '#FF4567' }}>Click here!</span>
                </Typography>
            </Box> */}
            {/* {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    {[...Array(2)].map((_item: any, index: number) => {
                        return (
                            <Box key={index}>
                                <Skeleton sx={{ mt: 11 }} animation='wave' variant='rectangular' width={80} height={80} />
                            </Box>
                        );
                    })}
                </Box>
            ) : (
                <Box
                    sx={{
                        mt: '60px',
                        ml: '20px',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        mr: '18px',
                        height: '33px',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ mt: 2 }}>
                        <img src='/images/subtract.png' width={22} height={22} alt='subtract' />
                    </Box>
                    <Box sx={{ mt: 2, ml: 1, width: '339px' }}>
                        <Typography sx={{ fontSize: '12px', fontWeight: 600, lineHeight: '33px', color: '#949494' }}>
                            Need help to top up .Click here
                        </Typography>
                        <Typography sx={{ mt: -4, ml: 28, fontSize: '12px', fontWeight: 600, lineHeight: '33px', color: '#FF4567' }}>
                            click here
                        </Typography>
                    </Box>
                </Box>
            )} */}
            {/* <Box sx={{ mt: '40px', ml: '20px', display: 'flex', justifyContent: 'space-between', mr: '18px', height: '33px' }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '33px' }}>Transaction</Typography>
            </Box>
            {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: '20px' }}>
                    {[...Array(2)].map((_item: any, index: number) => {
                        return <Skeleton key={index} variant='rectangular' width={160} height={30} />;
                    })}
                </Box>
            ) : (
                <Box
                    sx={{
                        mt: '20px',
                        ml: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        mr: '18px',
                        height: '33px',
                        direction: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ background: '#FFF5CD', borderRadius: '6px', width: '48px', height: '48px', ml: 2 }}>
                        <img
                            src='/images/poin.png'
                            width={30}
                            height={30}
                            alt='maskot-logo'
                            style={{ marginLeft: '20%', marginTop: '15%' }}
                        />
                    </Box>
                    <Box sx={{ ml: -8 }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 700, lineHeight: '33px' }}>Menara Dingdong</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '33px', mt: -1 }}>Transaction 10-04</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '33px', mt: 3, color: '#56CF54', mr: 0 }}>
                            +1000
                            <img src='/images/poin.png' width={16} height={16} alt='poin' style={{ marginLeft: 2 }} />
                        </Typography>
                    </Box>
                </Box>
            )} */}
            {/* <Box sx={{ ml: 3, border: '1px solid rgba(40, 38, 38, 0.1)', width: '373px', mt: 4 }} />
            {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: '20px', mt: 2 }}>
                    {[...Array(2)].map((_item: any, index: number) => {
                        return <Skeleton key={index} variant='rectangular' width={160} height={30} />;
                    })}
                </Box>
            ) : (
                <Box
                    sx={{
                        mt: '20px',
                        ml: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        mr: '18px',
                        height: '33px'
                    }}
                >
                    <Box sx={{ background: '#FFF5CD', borderRadius: '6px', width: '48px', height: '48px', ml: 2 }}>
                        <img
                            src='/images/poin.png'
                            width={30}
                            height={30}
                            alt='maskot-logo'
                            style={{ marginLeft: '20%', marginTop: '15%' }}
                        />
                    </Box>
                    <Box sx={{ ml: -8 }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 700, lineHeight: '33px' }}>Menara Dingdong</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '33px', mt: -1 }}>Transaction 10-04</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '33px', mt: 3, color: '#FF4566', mr: 0 }}>
                            -2000
                            <img src='/images/poin.png' width={16} height={16} alt='poin' style={{ marginLeft: 2 }} />
                        </Typography>
                    </Box>
                </Box>
            )} */}
            {/* <Box sx={{ ml: 3, border: '1px solid rgba(40, 38, 38, 0.1)', width: '373px', mt: 4 }} />
            {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', ml: '20px', mt: 2 }}>
                    {[...Array(1)].map((_item: any, index: number) => {
                        return <Skeleton key={index} variant='rectangular' width={100} height={30} />;
                    })}
                </Box>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <ButtonBase
                        onClick={() => {
                            router.push('/transaction');
                        }}
                        sx={{ color: '#A54CE5' }}
                    >
                        Show All <East fontSize='inherit' sx={{ ml: '3px' }} />
                    </ButtonBase>
                </Box>
            )} */}

            {/* {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: '20px', mt: 2 }}>
                    {[...Array(2)].map((_item: any, index: number) => {
                        return <Skeleton key={index} variant='rectangular' width={160} height={30} />;
                    })}
                </Box>
            ) : (
                <Box
                    onClick={() => {
                        router.push('/help-support');
                    }}
                    sx={{
                        mt: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: '33px',
                        padding: '0px 20px'
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '30px' }}>
                        <Box>
                            <img
                                src='/images/ask.png'
                                width={30}
                                height={30}
                                alt='maskot-logo'
                                style={{ marginLeft: '20%', marginTop: '5%' }}
                            />
                        </Box>
                        <Typography sx={{ fontSize: '14px', fontWeight: 700, textAlign: 'start' }}>Help & Support</Typography>
                    </Box>
                    <Box sx={{ mt: 1, mr: 0 }}>
                        <ChevronRight sx={{ color: '#8634C1' }} />
                    </Box>
                </Box>
            )} */}
            <SignupLoginDialog open={dialogSignup} setOpen={setDialogSignup} />
        </Box>
    );
};

export default TopUp;
