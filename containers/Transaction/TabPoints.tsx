import React from 'react';
import { Typography } from '@mui/material';
import TabPanelTransaction from './TabPanelTransaction';
import TransactionCard from './TransactionCard';

interface TabPanelPointsProps {
    value: any;
    index: any;
    isAnyTransaction?: any;
}

const TabPanelPoints: React.FC<TabPanelPointsProps> = ({ value, index, isAnyTransaction = true }) => {
    return (
        <TabPanelTransaction value={value} index={index}>
            {isAnyTransaction && (
                <Typography sx={{ fontSize: '12px' }}>
                    You have <span style={{ color: '#A54CE5', fontWeight: 'bold' }}>2 Transaction</span> today
                </Typography>
            )}
            <Typography sx={{ fontWeight: 'bold', mt: '15px' }}>Today</Typography>
            {[...Array(2)].map((i: any, idx: number) => (
                <TransactionCard key={idx} title='Cashback' amount={20} isCoin={false} subtitle='Expired 31 Oct 2022 ' isDot />
            ))}
        </TabPanelTransaction>
    );
};

export default TabPanelPoints;
