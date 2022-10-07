import React from 'react';
import { Typography, Box } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import HistoryCard from './HistoryCard';

const History = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='0px 20px'>
                <HeaderBack title='History' />
            </Box>
            <Box marginTop='40px'>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', padding: '0px 20px' }}>On Going</Typography>
            </Box>
            <Box padding='0px 20px'>
                {[...Array(2)].map((i: any, idx: number) => (
                    <HistoryCard isOngoing key={idx} />
                ))}
            </Box>
            <Box marginTop='20px'>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', padding: '0px 20px' }}>Today</Typography>
                <Box padding='0px 20px'>
                    {[...Array(2)].map((i: any, idx: number) => (
                        <HistoryCard isDone isHighScores key={idx} />
                    ))}
                </Box>
            </Box>
            <Box marginTop='20px'>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', padding: '0px 20px' }}>23 Aug 22</Typography>
                <Box padding='0px 20px'>
                    {[...Array(2)].map((i: any, idx: number) => (
                        <HistoryCard isDone isJoined key={idx} />
                    ))}
                </Box>
            </Box>
            <Box marginTop='20px'>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', padding: '0px 20px' }}>13 Aug 22</Typography>
                <Box padding='0px 20px'>
                    {[...Array(2)].map((i: any, idx: number) => (
                        <HistoryCard isDone isPlace key={idx} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default History;
