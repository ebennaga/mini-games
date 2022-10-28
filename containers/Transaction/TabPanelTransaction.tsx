import React from 'react';
import { Box } from '@mui/material';

interface TabPanelTransactionProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanelTransaction: React.FC<TabPanelTransactionProps> = ({ children, value, index, ...other }) => {
    return (
        <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
};

export default TabPanelTransaction;
