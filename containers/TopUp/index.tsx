/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import { ChevronRight, East } from '@mui/icons-material';
import { Typography, Stack, ButtonBase, Skeleton, Grid, Box } from '@mui/material';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import Link from 'next/link';
import useReducer from 'hooks/useAuthReducer';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import numberFormat from 'helper/numberFormat';
import TransactionCard from 'containers/Transaction/TransactionCard';
import SignupLoginDialog from 'components/Dialog/SignupLoginDialog';
import { useSelector } from 'react-redux';
import useNotify from 'hooks/useNotify';
import TopupSkeleton from './TopupSkeleton';

const TopUp = () => {
    const router = useRouter();
    const { setUser } = useReducer();
    const notify = useNotify();
    // const [loading, setLoading] = useState(true);
    const [borderValue, setBorderValue] = useState<string>('none');
    const { fetchAPI } = useAPICaller();
    const [coins, setCoins] = useState<any>(null);
    const [histories, setHistories] = useState<any>(null);
    const [dialogSignup, setDialogSignup] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const imgDummy = [
        { id: 1, image: '/images/payment/bni.png' },
        { id: 2, image: '/images/payment/bri.png' },
        { id: 3, image: '/images/payment/mandiri.png' },
        { id: 4, image: '/images/payment/permata.png' },
        { id: 5, image: '/images/payment/gopay.png' },
        { id: 6, image: '/images/payment/qris.png' }
    ];
    const userState = useSelector((state: any) => state.webpage?.user?.user);

    const getTopupData = async () => {
        setIsLoading(true);
        try {
            const response = await fetchAPI({
                endpoint: 'transactions/home'
            });
            console.log(response.data.data);
            if (!response) {
                throw new Error('Data is Empty');
            }
            if (response.status === 200) {
                setCoins(response.data.data.coins);
                setHistories(response.data.history);
            } else {
                throw new Error(response.data.message);
            }
            setIsLoading(false);
        } catch (error) {
            notify('failed data', 'error');
            setIsLoading(false);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getTopupData();
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

    const handleTopup = (id: any, coin: any, price: any) => {
        if (userState) {
            setUser({ ...userState, topupData: { coin, price } });
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
                padding='25px 25px 0px 25px'
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    zIndex: 9999,
                    backgroundColor: 'white',
                    width: '-webkit-fill-available',
                    top: '-1px',
                    borderBottom: borderValue,
                    paddingBottom: '20px'
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
                                handleTopup(item.id, item.coin, item.price);
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
                        .slice(0, 3)
                        .map((i: any) => (
                            <TransactionCard
                                isToday
                                key={i.id}
                                title={i.description}
                                isCoin
                                amount={i.coin}
                                subtitle={`Transaction - ${new Date(i?.created_at).toLocaleTimeString()}`}
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
            <Box sx={{ mt: '50px', mx: '20px' }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '33px', mt: '30px' }}>Payment Methods</Typography>
                <Box
                    sx={{
                        mt: '30px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        columnGap: '25px',
                        rowGap: '20px'
                    }}
                >
                    {imgDummy.map((item: any, idx: number) => (
                        <Box key={item.id} sx={{ width: '28%', textAlign: 'center', cursor: 'pointer' }}>
                            <img src={item.image} alt='bank-payment' style={{ width: '70%', height: '100%' }} />
                        </Box>
                    ))}
                </Box>
            </Box>
            <SignupLoginDialog open={dialogSignup} setOpen={setDialogSignup} />
        </Box>
    );
};

export default TopUp;
