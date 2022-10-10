import { Typography } from '@mui/material';
import React from 'react';
import TabPanelTransaction from './TabPanelTransaction';
import TransactionCard from './TransactionCard';

interface TabPanelCoinsProps {
    value: any;
    index: any;
    isAnyTransaction?: any;
}

const TabPanelCoins: React.FC<TabPanelCoinsProps> = ({ value, index, isAnyTransaction = true }) => {
    return (
        <TabPanelTransaction value={value} index={index}>
            {isAnyTransaction && (
                <Typography sx={{ fontSize: '12px' }}>
                    You have <span style={{ color: '#A54CE5', fontWeight: 'bold' }}>2 Transaction</span> today
                </Typography>
            )}
            <Typography sx={{ fontWeight: 'bold', mt: '15px' }}>Today</Typography>
            {[...Array(2)].map((i: any, idx: number) => (
                <TransactionCard key={idx} title='Join Tourney Block Stack' isCoin amount={200} subtitle='Tournament' isDot />
            ))}
        </TabPanelTransaction>
    );
};

export default TabPanelCoins;
