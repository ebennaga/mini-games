import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

interface HeaderBackProps {
    title?: string;
    isSetting?: boolean;
    handleBack?: any;
    isTournament?: boolean;
}

const HeaderBack: React.FC<HeaderBackProps> = ({ title, isSetting, handleBack, isTournament = false }) => {
    const router = useRouter();
    const userState = useSelector((state: any) => state.webpage?.user?.user);

    const back = (e: any) => {
        e.preventDefault();
        if (handleBack) {
            handleBack();
        } else {
            router.back();
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <ButtonBase
                onClick={(e: any) => back(e)}
                sx={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50px',
                    background: title === 'Grand Tournaments' ? '#2474ED' : '#A54CE5'
                }}
            >
                <ArrowBackIcon sx={{ color: '#fff', width: '40px', height: '20px', fontWeight: 'bold' }} />
            </ButtonBase>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: isSetting ? 'space-between' : 'center' }}>
                <Box />
                <Box sx={{ width: 'fit-content', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Typography component='h2' sx={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
                        {title}
                    </Typography>
                    {isTournament && (
                        <img
                            src={`${userState.page === 'grand' ? '/icons/noto_money-bag.png' : '/icons/free.png'}`}
                            alt='free'
                            // style={{ position: 'absolute', top: 0, right: -25, rotate: '30deg' }}
                        />
                    )}
                </Box>
                {isSetting && (
                    <ButtonBase onClick={() => router.push('/profile/settings')}>
                        <SettingsIcon />
                    </ButtonBase>
                )}
            </Box>
        </Box>
    );
};

export default HeaderBack;
