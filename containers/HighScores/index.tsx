import { Box, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import React from 'react';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import numberFormat from 'helper/numberFormat';

const HighScoresContainer = () => {
    const { fetchAPI } = useAPICaller();
    const notify = useNotify();
    const [borderValue, setBorderValue] = React.useState<string>('none');
    const [detailGame, setDetailGame] = React.useState<any>(null);

    const fetchData = async () => {
        try {
            const res = await fetchAPI({
                endpoint: `/auths/detail`,
                method: 'GET'
            });

            if (res.data?.data) {
                setDetailGame(res.data.data);
            }
        } catch (e: any) {
            notify(e.message, 'error');
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

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
                padding='10px 20px'
                sx={{ borderBottom: borderValue, position: 'sticky', top: -1, zIndex: 999, width: '-webkit-fill-available' }}
            >
                <HeaderBack title='High Scores' />
            </Box>
            <Box padding='20px'>
                {detailGame?.highscore.map((item: any, idx: any) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '30px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <img src={item.banner_url} alt='hopup' width='60px' />
                            <Box>
                                <Typography sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                                <Typography sx={{ fontColor: '#949494', fontWeight: 500 }}>High Scores:</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <img src='/images/ribbon.png' alt='ribbon' loading='lazy' />
                            <Typography sx={{ fontWeight: '600' }}>{numberFormat(item.highscore)}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default HighScoresContainer;
