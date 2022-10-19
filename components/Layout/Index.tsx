import React from 'react';
import { Box, ButtonBase, Grid } from '@mui/material';
import { useRouter } from 'next/router';

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
    const router = useRouter();
    console.log('router', router.pathname);
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
                    padding: isCarousel ? '25px' : '0px',
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
                        height: '70px',
                        textAlign: 'center',
                        p: '10px',
                        borderRadius: '15px 15px 0px 0px',
                        maxWidth: '600px'
                    }}
                >
                    <Grid item xs={3}>
                        <ButtonBase
                            onClick={() => {
                                router.push('/');
                            }}
                        >
                            <img src={`/icons/${router.pathname === '/' ? 'home-active' : 'home-not-active'}.svg`} alt='home-icon' />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={3}>
                        <ButtonBase
                            onClick={() => {
                                router.push('/games');
                            }}
                        >
                            <img
                                src={`/icons/${router.pathname === '/games' ? 'console-active' : 'console-not-active'}.svg`}
                                alt='home-icon'
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={3}>
                        <ButtonBase
                            onClick={() => {
                                router.push('/shops');
                            }}
                        >
                            <img
                                src={`/icons/${
                                    router.pathname === '/shops' || router.pathname === '/shops/prize'
                                        ? 'redeem-active'
                                        : 'redeem-not-active'
                                }.svg`}
                                alt='home-icon'
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={3}>
                        <ButtonBase
                            onClick={() => {
                                router.push('/topup');
                            }}
                        >
                            <img src={`/icons/${router.pathname === '/topup' ? 'coin-active' : 'coin-not-active'}.svg`} alt='home-icon' />
                        </ButtonBase>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default Layout;
