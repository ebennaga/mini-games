import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router';

interface HeaderBackProps {
    title?: string;
    isSetting?: boolean;
    handleBack?: any;
}

const HeaderBack: React.FC<HeaderBackProps> = ({ title, isSetting, handleBack }) => {
    const router = useRouter();

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
            <ButtonBase onClick={(e: any) => back(e)} sx={{ width: '24px', height: '24px', borderRadius: '50px', background: '#A54CE5' }}>
                <ArrowBackIcon sx={{ color: '#fff', width: '40px', height: '20px', fontWeight: 'bold' }} />
            </ButtonBase>
            <Typography component='h2' sx={{ fontSize: '24px', fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
                {title}
            </Typography>
            {isSetting && (
                <ButtonBase onClick={() => router.push('/profile/settings')}>
                    <SettingsIcon />
                </ButtonBase>
            )}
        </Box>
    );
};

export default HeaderBack;
