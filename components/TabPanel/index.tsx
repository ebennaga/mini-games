import React from 'react';
import { Box } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    sx?: any;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, sx, ...other }) => {
    return (
        <Box
            sx={sx}
            role='tabpanel'
            hidden={value !== index}
            id={`mission-tabpanel-${index}`}
            aria-labelledby={`mission-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </Box>
    );
};

export default TabPanel;
