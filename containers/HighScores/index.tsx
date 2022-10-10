import { Box, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import React from 'react';

const HighScoresContainer = () => {
    const [borderValue, setBorderValue] = React.useState<string>('none');
    const highScoresData = [
        { scores: '80.000', name: 'Hopup', image: '/images/hopup.png' },
        { scores: '70.000', name: 'Block Stack', image: '/images/block-stack.png' },
        { scores: '90.000', name: 'Rose Dart', image: '/images/rose-dart.png' }
    ];

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
                {highScoresData.map((item: any, idx: any) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '30px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <img src={item.image} alt='hopup' width='60px' />
                            <Box>
                                <Typography sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                                <Typography sx={{ fontColor: '#949494', fontWeight: 500 }}>High Scores:</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <img src='/images/ribbon.png' alt='ribbon' />
                            <Typography sx={{ fontWeight: '600' }}>{item.scores}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default HighScoresContainer;
