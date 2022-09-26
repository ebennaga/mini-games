import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useStyles from './useStyle';

interface HeaderProps {
    logo?: string;
    point: number;
    profilePicture: string;
    widthLogo?: any;
    heightLogo?: any;
    isBack?: boolean;
    hrefBack?: any;
}

const Header: React.FC<HeaderProps> = ({ logo, point, profilePicture, isBack, hrefBack, widthLogo = '75px', heightLogo = '39px' }) => {
    const classes = useStyles();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            {isBack ? (
                <ButtonBase href={hrefBack} sx={{ width: '24px', height: '24px', borderRadius: '50px', background: '#A54CE5' }}>
                    <ArrowBackIcon sx={{ color: '#fff', width: '20px', height: '20px', fontWeight: 'bold' }} />
                </ButtonBase>
            ) : (
                <img src={logo} width={widthLogo} height={heightLogo} alt='prize play' />
            )}
            <Box className={classes.headerRight} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                    className={classes.pointContainer}
                    sx={{
                        background: '#FFF5CD',
                        borderRadius: '27px',
                        width: '96px',
                        height: '30px',
                        position: 'relative',
                        marginRight: '11px'
                    }}
                >
                    <Box sx={{ position: 'absolute', top: '-7px' }}>
                        <img src='/icons/plus-point.png' width='16px' height='16px' alt='plus point' />
                    </Box>
                    <Box
                        className={classes.pointSection}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0 9px',
                            paddingTop: '2px'
                        }}
                    >
                        <img src='/icons/point.png' width='21px' height='20.02px' alt='point icon' />
                        <Typography
                            variant='subtitle1'
                            component='span'
                            className={classes.pointText}
                            sx={{ fontWeight: 'bold', fontSize: '14px', color: '#373737' }}
                        >
                            {point}
                        </Typography>
                    </Box>
                </Box>
                <img src={profilePicture} width='46px' height='46px' alt='profile' />
            </Box>
        </Box>
    );
};

export default Header;
