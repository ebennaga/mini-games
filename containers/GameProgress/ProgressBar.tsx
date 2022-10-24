import React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
// import CircularProgress, { circularProgressClasses, CircularProgressProps } from '@mui/material/CircularProgress';

const BorderLineProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    marginLeft: '20px',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#949494'
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        background: 'linear-gradient(91.06deg, #A54CE5 3.54%, #8571FF 95.37%)'
    }
}));

interface ProgressBarProps {
    value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
    const dataLevel = [
        { id: 1, reward: 40, level: 'Beginner', xp: 250 },
        { id: 2, reward: 80, level: 'Advance', xp: 500 },
        { id: 3, reward: 100, level: 'Master', xp: 1000 }
    ];

    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <BorderLineProgress variant='determinate' value={value} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '75%', alignSelf: 'center' }}>
                    {dataLevel.map((item: any) => {
                        let isShowReward = false;
                        if (value >= 15 && value < 46 && item.level === 'Beginner') {
                            isShowReward = true;
                        } else if (value >= 46 && value < 78 && item.level === 'Advance') {
                            isShowReward = true;
                        } else if (value >= 78 && item.level === 'Master') {
                            isShowReward = true;
                        }

                        return (
                            <Box sx={{ marginTop: '-18px' }} key={item.id}>
                                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img
                                        src={`/icons/progress-dot-${item.level.toLowerCase()}.png`}
                                        width='25.7px'
                                        height='auto'
                                        alt='beginner'
                                    />
                                    <Box sx={{ position: 'absolute', top: -60, display: isShowReward ? 'block' : 'none' }}>
                                        <Box
                                            sx={{
                                                background: '#A54CE5',
                                                width: 'fit-content',
                                                padding: '7px 12px',
                                                borderRadius: '5px',
                                                position: 'relative',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: '20px',
                                                    height: '20px',
                                                    background: '#A54CE5',
                                                    borderRadius: '2px',
                                                    position: 'absolute',
                                                    bottom: -5,
                                                    zIndex: 0,
                                                    transform: 'rotate(45deg)'
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    zIndex: 1,
                                                    color: '#fff'
                                                }}
                                            >
                                                <Typography component='h4' fontSize='10px' fontWeight={600}>
                                                    Reward
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <img src='/icons/coins.svg' width='10.5px' height='auto' alt='coins' />
                                                    <Typography component='h4' fontSize='10px' fontWeight={700} ml={0.5}>
                                                        {item.reward}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '14.5px' }}>
                                        <Typography component='h5' fontSize='14px' fontWeight={700}>
                                            {item.level}
                                        </Typography>
                                        <Typography component='span' fontSize='14px' fontWeight={600}>
                                            {item.xp} xp
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default ProgressBar;
