import React from 'react';
import { Box } from '@mui/material';

interface LayoutProps {
    children: any;
    backgoundColor: any;
    border?: any;
    isCarousel?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, backgoundColor, border, isCarousel }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: { xs: isCarousel ? 'flex-start' : 'center', sm: 'center' },
                margin: 0,
                fontFamily: 'Montserrat'
            }}
        >
            <Box
                sx={{
                    backgroundColor: backgoundColor,
                    maxWidth: '600px',
                    width: '600px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border,
                    minHeight: '100vh',
                    padding: '20px'
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
