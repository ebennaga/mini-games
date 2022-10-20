/* eslint-disable no-nested-ternary */
import React from 'react';
import { Box, Typography } from '@mui/material';
import CircularProgress, { circularProgressClasses, CircularProgressProps } from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';

function LoadingProgress(props: CircularProgressProps & { value: number }) {
    const { value } = props;
    const label = value === 25 ? 0 : value === 50 ? 1 : value === 75 ? 2 : 3;
    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant='determinate'
                sx={{
                    color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                    '& .MuiCircularProgress-circle': {
                        strokeWidth: 1.5
                    }
                }}
                size={130}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant='indeterminate'
                disableShrink
                sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? '#A54CE5' : '#308fe8'),
                    animationDuration: '1000ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round'
                    },
                    '& .MuiCircularProgress-circle': {
                        strokeWidth: 1.5,
                        strokeLinecap: 'square'
                    }
                }}
                size={130}
                thickness={4}
                value={25}
                // {...props}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography variant='caption' component='div' sx={{ fontSize: value === 0 ? '20px' : '50px', fontWeight: 'bold' }}>
                    {value === 0 ? 'Start!' : `${Math.round(label)}`}
                </Typography>
            </Box>
        </Box>
    );
}

export default function CustomizedProgressBars() {
    const [progress, setProgress] = React.useState(100);
    const router = useRouter();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress === 0 ? 0 : prevProgress - 25));
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    React.useEffect(() => {
        if (progress === 0) {
            setTimeout(() => {
                if (router.asPath.includes('tournament')) {
                    router.push(`/games/${router.query.id}/tournament/game`);
                }
                if (router.asPath.includes('casual')) {
                    router.push(`/games/${router.query.id}/tournament/game`);
                }
                // router.push('/casual/game');
                // router.push(`/games/${router.query.id}/casual/game`);
            }, 500);
        }
    }, [progress]);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <LoadingProgress value={progress} />
        </Box>
    );
}
