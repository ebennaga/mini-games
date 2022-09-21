import React from 'react';
import { Box } from '@mui/material';

interface LayoutProps {
    children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#A54CE5',
                maxWidth: '600px',
                width: '600px',
                paddingTop: '80px',
                paddingBottom: '80px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'Montserrat, sans-serif'
            }}
        >
            {children}
        </Box>
    );
};

export default Layout;
