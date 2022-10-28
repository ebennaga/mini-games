import { Typography, Box } from '@mui/material';
import CircularStatic from 'components/CircularProgress';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

const TournamentLoading = () => {
    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const router = useRouter();

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            window.history.replaceState({}, '', `/games/${router.query.id}/tournament/${router.query['id-tournament']}`);
        }
    }, []);

    return (
        <Box sx={{ textAlign: 'center', padding: '0px 30px 40px' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>{userState?.titleGame}</Typography>
            <Box
                sx={{
                    textAlign: 'center',
                    mx: 'auto',
                    my: '32px',
                    background: `url(${userState?.imageGame})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '105px',
                    height: '105px',
                    borderRadius: '8px'
                }}
            />
            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#949494', mb: '100px' }}>{userState?.descriptionGame}</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>
                The Game <br /> Starts in
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ mt: '10px' }}>
                    <CircularStatic />
                </Box>
            </Box>
        </Box>
    );
};

export default TournamentLoading;
