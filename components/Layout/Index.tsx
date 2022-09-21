import React from 'react';
import { Box } from '@mui/material';

interface LayoutProps {
    children: any;
    backgoundColor: any;
}

const Layout: React.FC<LayoutProps> = ({ children, backgoundColor }) => {
    return (
        <Box sx={{ backgroundColor: '#FFF', display: 'flex', justifyContent: 'center' }}>
            <Box
                sx={{
                    backgroundColor: backgoundColor,
                    maxWidth: '600px',
                    width: '600px',
                    paddingTop: '80px',
                    paddingBottom: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
