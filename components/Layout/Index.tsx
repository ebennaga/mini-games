import React from 'react';
import { Box, Grid } from '@mui/material';

interface LayoutProps {
    children: any;
    backgoundColor?: any;
    border?: any;
    isCarousel?: boolean;
    isTab?: boolean;
    isBackground?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
    isBackground = false,
    isTab = false,
    children,
    isCarousel,
    backgoundColor = '#FFF',
    border = '1px solid #D9D9D9'
}) => {
    return (
        <Box
            sx={{
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: { xs: isCarousel || isBackground ? 'flex-start' : 'center', sm: 'center' },
                fontFamily: 'Epilogue'
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
                    padding: isCarousel ? '20px' : '0px',
                    pt: isBackground ? 0 : 3,
                    pb: isTab ? '150px' : '0px',
                    minHeight: '100vh'
                }}
            >
                {children}
            </Box>
            {isTab && (
                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                    sx={{
                        bottom: '0px',
                        zIndex: 99,
                        position: 'fixed',
                        backgroundColor: '#373737',
                        color: 'white',
                        height: '90px',
                        textAlign: 'center',
                        pt: 3,
                        pb: '10px',
                        borderRadius: '15px 15px 0px 0px',
                        maxWidth: '700px'
                    }}
                >
                    <Grid sx={{ cursor: 'pointer' }} item xs={3}>
                        <img src={`/icons/${false ? 'home-active' : 'home-not-active'}.svg`} alt='home-icon' />
                    </Grid>
                    <Grid sx={{ cursor: 'pointer' }} item xs={3}>
                        <img src={`/icons/${false ? 'console-active' : 'console-not-active'}.svg`} alt='home-icon' />
                    </Grid>
                    <Grid sx={{ cursor: 'pointer' }} item xs={3}>
                        <img src={`/icons/${true ? 'redeem-active' : 'redeem-not-active'}.svg`} alt='home-icon' />
                    </Grid>
                    <Grid sx={{ cursor: 'pointer' }} item xs={3}>
                        <img src={`/icons/${false ? 'coin-active' : 'coin-not-active'}.svg`} alt='home-icon' />
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default Layout;
