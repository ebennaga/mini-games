/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import numberFormat from 'helper/numberFormat';
import { useRouter } from 'next/router';
import useStyles from './useStyle';

interface HeaderProps {
    logo?: string;
    point: number;
    profilePicture: string;
    widthLogo?: any;
    heightLogo?: any;
    isBack?: boolean;
    hrefBack?: any;
    paddingX?: string;
    isShops?: boolean;
}

const Header: React.FC<HeaderProps> = ({
    logo,
    point,
    profilePicture,
    isBack,
    hrefBack,
    paddingX,
    widthLogo = '75px',
    heightLogo = '39px',
    isShops = false
}) => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: paddingX ? '-webkit-fill-available' : '100%',
                position: 'sticky',
                top: paddingX ? 0 : 10,
                zIndex: 999,
                paddingY: paddingX ? '20px' : 0,
                paddingX: paddingX || 0
            }}
        >
            {isBack ? (
                <ButtonBase
                    onClick={() => router.back()}
                    sx={{ width: '24px', height: '24px', borderRadius: '50px', background: '#A54CE5' }}
                >
                    <ArrowBackIcon sx={{ color: '#fff', width: '20px', height: '20px', fontWeight: 'bold' }} />
                </ButtonBase>
            ) : (
                <ButtonBase onClick={() => router.push('/home')}>
                    <img src={logo} width={widthLogo} height={heightLogo} alt='prize play' />
                </ButtonBase>
            )}
            <Box className={classes.headerRight} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                    className={classes.pointContainer}
                    sx={{
                        background: isShops ? '#DDFFDC' : '#FFF5CD',
                        borderRadius: '27px',
                        // width: '100%',
                        height: '30px',
                        position: 'relative',
                        marginRight: '11px'
                    }}
                >
                    {!isShops && (
                        <Box sx={{ position: 'absolute', top: '-7px' }}>
                            <img src='/icons/plus-point.png' width='16px' height='16px' alt='plus point' />
                        </Box>
                    )}
                    <Box
                        className={classes.pointSection}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0 9px',
                            paddingTop: '2px',
                            gap: '5px'
                        }}
                    >
                        {isShops ? (
                            <img src='/images/point-shops.png' width='21px' height='20.02px' alt='point icon' />
                        ) : (
                            <img src='/icons/point.png' width='21px' height='20.02px' alt='point icon' />
                        )}
                        <Typography
                            variant='subtitle1'
                            component='span'
                            className={classes.pointText}
                            sx={{ fontWeight: 'bold', fontSize: '14px', color: '#373737' }}
                        >
                            {numberFormat(point)}
                        </Typography>
                    </Box>
                </Box>
                <ButtonBase onClick={() => router.push('/profile')}>
                    <img src={profilePicture} width='46px' height='46px' alt='profile' />
                </ButtonBase>
            </Box>
        </Box>
    );
};

export default Header;
