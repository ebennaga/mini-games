/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { Typography, Box } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import TabPanelTransaction from './TabPanelTransaction';
import TransactionCard from './TransactionCard';

interface TabPanelCoinsProps {
    value: any;
    index: any;
    isAnyTransaction?: any;
}

const TabPanelCoins: React.FC<TabPanelCoinsProps> = ({ value, index, isAnyTransaction = true }) => {
    const [cointTansaction, setCointTransaction] = React.useState<any>(null);
    const [todayTransaction, setTodayTransaction] = React.useState<any>(null);
    const [yesterdayTransaction, setYesterdayTransaction] = React.useState<any>(null);
    const { fetchAPI, isLoading } = useAPICaller();
    const notify = useNotify();
    const form = useForm({
        mode: 'all',
        defaultValues: {
            search: ''
        }
    });

    const getTransaction = async (search: any) => {
        try {
            const result = await fetchAPI({
                endpoint: `transactions/home?search=${search}`,
                method: 'GET'
            });
            // console.log(result.data.data.history);
            if (result.status === 200) {
                setCointTransaction(result.data.data.history);
            }
        } catch (e) {
            // notify('Internal server error', 'error');
        }
    };

    React.useEffect(() => {
        getTransaction(form.watch('search'));
    }, []);

    React.useEffect(() => {
        if (!isLoading) {
            cointTansaction?.map((item: any) => {
                console.log(new Date(item.created_at).getDate() === new Date().getDate());
                if (new Date(item.created_at).getDate() === new Date().getDate()) {
                    setTodayTransaction(item);
                    console.log(item);
                }
            });
        }
    }, [cointTansaction]);

    // React.useEffect(() => {
    //     const yesterday = new Date();
    //     yesterday.setDate(yesterday.getDate() - 1);
    //     cointTansaction?.forEach((item: any) => {
    //         console.log(item);
    //         // console.log('getDay', new Date(item.created_at).getDay());
    //         // if (String(new Date(item.created_at)).slice(8, 11) === String(new Date()).slice(8, 11)) {
    //         //     setTodayTransaction(item);
    //         // }
    //         // if (String(new Date(item.created_at)).slice(8, 11) === String(yesterday).slice(8, 11)) {
    //         //     setYesterdayTransaction(item);
    //         // }
    //     });
    // }, []);

    // console.log('yesterday', yesterdayTransaction);
    // console.log('today', todayTransaction);
    // console.log('coin', cointTansaction);
    // console.log('todays', new Date('2022-10-25T03:23:37.000Z').getDate());
    return (
        <TabPanelTransaction value={value} index={index}>
            {/* {isAnyTransaction && (
                <Typography sx={{ fontSize: '12px' }}>
                    You have{' '}
                    <span style={{ color: '#A54CE5', fontWeight: 'bold' }}>
                        {todayTransaction?.length ? todayTransaction?.length : 0} Transaction
                    </span>{' '}
                    today
                </Typography>
            )}
            <Box>
                <Typography sx={{ fontWeight: 'bold', mt: '15px' }}>Today</Typography>
                {todayTransaction !== null &&
                    todayTransaction?.map((i: any) => (
                        <TransactionCard
                            isToday
                            key={i.id}
                            title={i.description}
                            isCoin
                            amount={i.coin}
                            subtitle={`Transaction - ${i?.created_at?.slice(10, 16)}`}
                            created={i?.created_at}
                        />
                    ))}
            </Box>
            <Box>
                <Typography sx={{ fontWeight: 'bold', mt: '15px' }}>Yesterday</Typography>
                {yesterdayTransaction !== null &&
                    yesterdayTransaction?.map((i: any) => (
                        <TransactionCard
                            isYesterday
                            key={i.id}
                            title={i.description}
                            isCoin
                            amount={i.coin}
                            subtitle={`Transaction - ${i?.created_at?.slice(10, 16)}`}
                            created={i?.created_at}
                        />
                    ))}
            </Box>
            {!isLoading &&
                cointTansaction?.map((i: any) => (
                    <TransactionCard
                        isToday
                        isYesterday
                        key={i.id}
                        title={i.description}
                        isCoin
                        amount={i.coin}
                        subtitle={`Transaction - ${i?.created_at?.slice(10, 16)}`}
                        created={i?.created_at}
                    />
                ))} */}
        </TabPanelTransaction>
    );
};

export default TabPanelCoins;
