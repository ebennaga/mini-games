import { Box, ButtonBase, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import numberFormat from 'helper/numberFormat';

const GameResultTournament = () => {
    const router = useRouter();
    return (
        <Box component='main' width='100%'>
            <Box padding='0 20px'>
                <ButtonBase
                    onClick={() => router.back()}
                    sx={{ background: '#A54CE5', width: '24px', height: '24px', borderRadius: '50px', marginBottom: '12px' }}
                >
                    <ArrowBackIcon sx={{ color: '#fff', fontSize: '19px' }} />
                </ButtonBase>
            </Box>
            <Box component='section' textAlign='center' color='#373737' borderBottom='1px solid rgba(40, 38, 38, 0.2)' paddingBottom='32px'>
                <img src='/images/dummy/game-hopup.svg' width='105px' height='105px' alt='game icon' style={{ borderRadius: '8px' }} />
                <Typography
                    component='h2'
                    fontSize='20px'
                    fontWeight={600}
                    paddingTop='32px'
                    paddingBottom='16px'
                    sx={{ color: '#A54CE5' }}
                >
                    New High Score
                </Typography>
                <Typography component='h3' fontSize='40px' fontWeight={700}>
                    {numberFormat(108324)}
                </Typography>
            </Box>
            <Box component='section' color='#373737'>
                <Typography component='h2' textAlign='center' fontSize='14px' fontWeight={600} marginTop='24px'>
                    Your Rank
                </Typography>
                <Typography component='h3' textAlign='center' fontSize='40px' fontWeight={700} marginTop='7px'>
                    34#
                </Typography>
            </Box>
        </Box>
    );
};

export default GameResultTournament;
