import React from 'react';
import { Box } from '@mui/material';

interface LayoutProps {
    children: any;
    backgoundColor?: any;
    border?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, backgoundColor = '#FFF', border = '1px solid #D9D9D9' }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                fontFamily: 'Montserrat'
            }}
        >
            <Box
                sx={{
                    backgroundColor: backgoundColor,
                    maxWidth: '600px',
                    width: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border,
                    minHeight: '100vh',
                    position: 'relative'
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
