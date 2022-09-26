import React from 'react';
import { Box } from '@mui/material';

interface LayoutProps {
    children: any;
    backgoundColor?: any;
    border?: any;
    isCarousel?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isCarousel, backgoundColor = '#FFF', border = '1px solid #D9D9D9' }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: { xs: isCarousel ? 'flex-start' : 'center', sm: 'center' },
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
                    padding: isCarousel ? '20px' : '0px',
                    py: 3
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
