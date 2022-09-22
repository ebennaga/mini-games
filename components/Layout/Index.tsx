import React from 'react';
import { Box } from '@mui/material';

interface LayoutProps {
    children: any;
    backgoundColor: any;
    border?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, backgoundColor, border }) => {
    return (
        <Box sx={{ backgroundColor: '#FFF', display: 'flex', justifyContent: 'center', margin: 0, fontFamily: 'Montserrat' }}>
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
