import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from 'components/Header';
import Button from 'components/Button/Index';
import { useRouter } from 'next/router';

const SuccessPaymentContainer = () => {
    const [borderValue, setBorderValue] = React.useState<string>('none');
    const router = useRouter();

    const handleScroll = () => {
        if (window.scrollY === 0) {
            return setBorderValue('none');
        }
        return setBorderValue('0.5px solid rgba(148, 148, 148, 0.35)');
    };

    React.useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', handleScroll);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    width: '-webkit-fill-available',
                    position: 'sticky',
                    backgroundColor: 'white',
                    top: 0,
                    padding: '25px',
                    borderBottom: borderValue
                }}
            >
                <Header logo='/icons/logo.svg' profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    // mt: '150px',
                    height: '90vh',
                    paddingY: '20px'
                }}
            >
                <Box />
                <Box sx={{ paddingX: '20px', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '35px', fontWeight: 'bold', lineHeight: 0, mb: 5 }}>Success!</Typography>
                    <img src='/images/dialog-image.png' alt='failed.png' />
                    <Typography sx={{ fontSize: '14px', color: '#373737', fontWeight: '700', mt: 2 }}>
                        YEAYY CONGRATULATIONS, your coins have been added successfully. Let`s join tournament and won the prizes!!
                    </Typography>
                </Box>
                <Box sx={{ paddingX: '20px' }}>
                    <Button
                        onClick={() => {
                            router.push('/');
                        }}
                        title='Back to Home'
                        backgoundColor='#A54CE5'
                        color='white'
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default SuccessPaymentContainer;
