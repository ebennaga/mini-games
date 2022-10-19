import { Typography, Box } from '@mui/material';
import CircularStatic from 'components/CircularProgress';
import React from 'react';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import { useRouter } from 'next/router';

const LoadingCasual = () => {
    const { fetchAPI } = useAPICaller();
    const notify = useNotify();
    const [detailGame, setDetailGame] = React.useState<any>(null);
    const router = useRouter();

    const fetchData = async (id: number) => {
        try {
            const res = await fetchAPI({
                endpoint: `/games/${id}`,
                method: 'GET'
            });
            if (res.data?.data) {
                setDetailGame(res.data.data);
            }
        } catch (e) {
            notify('failed data', 'e');
        }
    };

    React.useEffect(() => {
        fetchData(Number(router.query.id));
    }, []);
    return (
        <Box sx={{ textAlign: 'center', padding: '0px 30px 40px' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>{detailGame?.name}</Typography>
            <Box sx={{ textAlign: 'center', my: '32px' }}>
                <img src={detailGame?.banner_url} alt='loading-casual' style={{ width: '50%', borderRadius: '15px   ' }} />
            </Box>
            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#949494', mb: '100px' }}>{detailGame?.description}</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>
                The Game <br /> Starts in
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ mt: '10px' }}>
                    <CircularStatic />
                </Box>
            </Box>
            <Typography sx={{ fontSize: '10px', fontWeight: 500, color: '#949494', mt: '210px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
            </Typography>
        </Box>
    );
};

export default LoadingCasual;
