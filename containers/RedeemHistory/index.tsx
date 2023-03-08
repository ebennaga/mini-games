/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
// import { ArrowCircleLeft } from '@mui/icons-material';
// import { useRouter } from 'next/router';
import HeaderBack from 'components/HeaderBack';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import dateFormat from 'helper/dateFormat';
import numberFormat from 'helper/numberFormat';
import RedeemHistoryLoading from './RedeemHistoryLoading';

const RedeemHistoryContainer = () => {
    const [value, setValue] = React.useState(0);
    const [histories, setHistories] = React.useState<any>(null);
    const [tabData, setTabData] = React.useState<any>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const { fetchAPI } = useAPICaller();
    const notify = useNotify();

    const getHistories = async () => {
        setIsLoading(true);
        try {
            const response = await fetchAPI({ method: 'GET', endpoint: 'redemptions/history' });

            if (!response) {
                throw new Error('Sorry, Data histories is not ready!');
            }
            if (response.status === 200) {
                setHistories(response.data.data);
                // console.log('responseredeem', response.data.data);
                setTabData(response.data.data);
            } else {
                throw new Error(response.data.message);
            }
        } catch (err: any) {
            notify(err.message, 'error');
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getHistories();
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log('histories', histories);
        // const filterData = (status: string) => histories?.filter((item: any) => item.status === status);
        const filterData = histories?.filter((item: any) => item.delivery.status);
        console.log('filterdata', filterData);
        setValue(newValue);
        if (newValue === 0) {
            console.log('newvalue', newValue);
            setTabData(histories);
        } else if (newValue === 1) {
            const filtData = histories?.filter((item: any) => item.delivery[0].status === 'pending');
            console.log('filtdata', filtData);
            setTabData(filtData);
        } else if (newValue === 2) {
            const filtData = histories?.filter((item: any) => item.delivery[0].status === 'processed');
            setTabData(filtData);
        } else if (newValue === 3) {
            const filtData = histories?.filter((item: any) => item.delivery[0].status === 'delivered');
            setTabData(filtData);
        } else if (newValue === 4) {
            const filtData = histories?.filter((item: any) => item.delivery[0].status === 'completed');
            setTabData(filtData);
        }
    };

    if (isLoading) {
        return <RedeemHistoryLoading />;
    }
    console.log('histories', histories);
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px 20px 0px'>
                <HeaderBack title='Redeem History' />
            </Box>
            <Box sx={{ mt: '20px', maxWidth: { xs: 370, sm: 480 }, bgcolor: 'background.paper' }}>
                <Tabs
                    indicatorColor='secondary'
                    textColor='inherit'
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons={false}
                    aria-label='scrollable prevent tabs example'
                >
                    <Tab
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                        label='Semua'
                    />
                    <Tab
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                        label='Diproses'
                    />
                    <Tab
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                        label='Dikemas'
                    />
                    <Tab
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                        label='Dikirim'
                    />
                    <Tab
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                        label='Selesai'
                    />
                </Tabs>
            </Box>
            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} />
            {tabData?.map((item: any) => {
                const courier = item.delivery?.courier?.name;
                const status = item.delivery[0]?.status;

                return item?.items.map((itm: any) => {
                    return (
                        <Box
                            key={itm.id}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                ml: '20px',
                                mr: '21px',
                                mt: '20px',
                                gap: '15px',
                                borderBottom: '1px solid rgba(40, 38, 38, 0.1)',
                                pb: '20px'
                            }}
                        >
                            <Box sx={{ width: '86px', height: '86px', background: '#F4F1FF', borderRadius: '4px' }}>
                                <img
                                    src={itm.image_url}
                                    height={60}
                                    width={60}
                                    style={{ marginTop: '12px', marginLeft: '13px', marginRight: '12px' }}
                                    alt='tablet-redeem'
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = '/images/img_error.svg';
                                    }}
                                />
                            </Box>
                            <Box sx={{ width: '100%' }}>
                                <Box>
                                    <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>{itm.name}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', mt: '3px' }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#949494' }}>Redeem Date</Typography>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#949494', ml: 1 }}>
                                        {dateFormat(item.created_at)}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', mt: '3px' }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#949494' }}>Courier:</Typography>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#949494', ml: 1 }}>
                                        {numberFormat(courier)}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                        mt: '3px',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <img src='/images/new-point.png' height={21} width={21} alt='tablet-redeem' />
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#373737', ml: 1 }}>
                                            {numberFormat(itm.price)}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ ml: 10 }}>
                                        <Typography sx={{ color: '#A54CE5', fontWeight: 600, fontSize: '12px' }}>{status}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    );
                });
            })}
        </Box>
    );
};

export default RedeemHistoryContainer;
