import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router';

interface HeaderBackProps {
    title: string;
    isSetting?: boolean;
}

const HeaderBack: React.FC<HeaderBackProps> = ({ title, isSetting }) => {
    const router = useRouter();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '20px' }}>
            <ButtonBase onClick={() => router.back()} sx={{ width: '24px', height: '24px', borderRadius: '50px', background: '#A54CE5' }}>
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
