/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { Typography, Box, Divider } from '@mui/material';
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
    const [todayTransactions, setTodayTransactions] = React.useState<any>(null);
    const [yesterdayTransactions, setYesterdayTransactions] = React.useState<any>(null);
    const [daysAgoTransactions, setDaysAgoTransactions] = React.useState<any>(null);
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
                endpoint: `transactions/history`,
                method: 'GET'
            });

            if (result.status === 200) {
                setCointTransaction(result.data.data);
            }
        } catch (e) {
            // notify('Internal server error', 'error');
        }
    };

    React.useEffect(() => {
        getTransaction(form.watch('search'));
    }, []);

    React.useEffect(() => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const today = new Date();
        const todayTransaction: any = [];
        const yesterdayTransaction: any = [];
        const daysAgoTransaction: any = [];
        if (!isLoading) {
            cointTansaction?.map((item: any) => {
                const date = new Date(item.created_at);
                if (String(today).slice(4, 15) === String(date).slice(4, 15)) {
                    todayTransaction.push(item);
                    setTodayTransactions(todayTransaction);
                }
                if (String(yesterday).slice(4, 15) === String(date).slice(4, 15)) {
                    yesterdayTransaction.push(item);
                    setYesterdayTransactions(yesterdayTransaction);
                }
                if (date.getDate() < new Date(yesterday).getDate()) {
                    daysAgoTransaction.push(item);
                    setDaysAgoTransactions(daysAgoTransaction);
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

    // console.log('histories', cointTansaction);
    // console.log('coin', cointTansaction);
    // console.log('todays', new Date('2022-10-25T03:23:37.000Z').getDate());

    return (
        <TabPanelTransaction value={value} index={index}>
            {isAnyTransaction && (
                <Typography sx={{ fontSize: '12px' }}>
                    You have{' '}
                    <span style={{ color: '#A54CE5', fontWeight: 'bold' }}>
                        {todayTransactions?.length ? todayTransactions?.length : 0} Transaction
                    </span>{' '}
                    today
                </Typography>
            )}
            <Box>
                <Typography sx={{ fontWeight: 'bold', mt: '15px' }}>Today</Typography>
                {todayTransactions !== null &&
                    todayTransactions?.map(
                        (i: any, idx: number) =>
                            i.coin !== 0 && (
                                <TransactionCard
                                    status={i.status}
                                    type={i.type}
                                    isToday
                                    key={idx}
                                    title={i.description}
                                    isCoin
                                    amount={i.coin}
                                    subtitle={`Transaction - ${new Date(i?.created_at).toLocaleTimeString()}`}
                                    created={i?.created_at}
                                />
                            )
                    )}
            </Box>
            <Box>
                <Typography sx={{ fontWeight: 'bold', mt: '15px' }}>Yesterday</Typography>
                {yesterdayTransactions !== null &&
                    yesterdayTransactions?.map(
                        (i: any, idx: number) =>
                            i.coin !== 0 && (
                                <TransactionCard
                                    status={i.status}
                                    type={i.type}
                                    isYesterday
                                    key={idx}
                                    title={i.description}
                                    isCoin
                                    amount={i.coin}
                                    subtitle={`Transaction - ${new Date(i?.created_at).toLocaleTimeString()}`}
                                    created={i?.created_at}
                                />
                            )
                    )}
                {yesterdayTransactions === null && (
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ mt: '15px', color: '#A54CE5', fontSize: '12px', fontWeight: 'bold' }}>
                            There is not any histories transaction of yesterday
                        </Typography>
                        <Divider sx={{ mt: '20px' }} />
                    </Box>
                )}
            </Box>
            {!isLoading &&
                daysAgoTransactions?.map(
                    (i: any, idx: number) =>
                        i.coin !== 0 && (
                            <TransactionCard
                                status={i.status}
                                type={i.type}
                                key={idx}
                                title={i.description}
                                isCoin
                                amount={i.coin}
                                subtitle={`Transaction - ${new Date(i?.created_at).toLocaleTimeString()}`}
                                created={i?.created_at}
                                isToday={false}
                                isYesterday={false}
                            />
                        )
                )}
        </TabPanelTransaction>
    );
};

export default TabPanelCoins;
