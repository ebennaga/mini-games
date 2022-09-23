import React from 'react';
import { Typography, Box, ButtonBase } from '@mui/material';
import { ArrowCircleLeft } from '@mui/icons-material';

import useStyles from './useStyle';

const History = () => {
    const classes = useStyles();
    // eslint-disable-next-line no-unused-vars
    const cards = [
        {
            id: 1,
            image: '/images/dingdong.png'
        },
        {
            id: 2,
            image: '/images/dingdong.png'
        }
    ];
    return (
        <Box sx={{ color: '#373737', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <ButtonBase sx={{ ml: 5, mt: 5 }}>
                    <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
                </ButtonBase>
                <Typography className={classes.header} sx={{ fontWeight: 'bold', fontSize: '19.5px', mt: 6 }}>
                    History
                </Typography>
            </Box>

            <Box className={classes.pointOngoing} sx={{ marginTop: '30px' }}>
                <Typography variant='h6' fontWeight='bold' component='h2'>
                    On Going
                </Typography>
            </Box>

            <Box
                className={classes.pointOngoing}
                sx={{ position: 'absolute', width: '10px', height: '10px', background: '#A54CE5', mt: '13%' }}
            />
            <Box className={classes.pointNode} sx={{ mt: 3, width: '88px', height: '78px', background: '#D9D9D9', borderRadius: '8px' }}>
                <img className={classes.pointImage} src='/images/dingdong.png' width={88} height={78} alt='maskot-logo' />
            </Box>
            <Box className={classes.pointPlace}>
                <Typography variant='h6' fontWeight='bold' component='h2' sx={{ fontSize: '14px', fontWeight: 700 }}>
                    Your Place
                </Typography>
                <Typography variant='h6' fontWeight='bold' component='h2' sx={{ fontSize: '14px', fontWeight: 300 }}>
                    Tournament
                </Typography>
            </Box>
            <Box className={classes.pointOngoing} sx={{ marginTop: '38px' }}>
                <Typography variant='h6' fontWeight='bold' component='h2'>
                    Today
                </Typography>
            </Box>
            <Box className={classes.pointNode} sx={{ mt: 3, width: '88px', height: '78px', background: '#D9D9D9', borderRadius: '8px' }}>
                <img className={classes.pointImage} src='/images/dingdong.png' width={88} height={78} alt='maskot-logo' />
            </Box>
            <Box className={classes.pointPlace}>
                <Typography variant='h6' fontWeight='bold' component='h2' sx={{ fontSize: '14px', fontWeight: 700 }}>
                    Tournament End
                </Typography>
                <Typography variant='h6' fontWeight='bold' component='h2' sx={{ fontSize: '14px', fontWeight: 300 }}>
                    Games 10.03
                </Typography>
            </Box>
            <Box className={classes.pointOngoing} sx={{ marginTop: '38px' }}>
                <Typography variant='h6' fontWeight='bold' component='h2'>
                    23 Agustus 2022
                </Typography>
            </Box>
            <Box className={classes.pointNode} sx={{ mt: 3, width: '88px', height: '78px', background: '#D9D9D9', borderRadius: '8px' }}>
                <img className={classes.pointImage} src='/images/dingdong.png' width={88} height={78} alt='maskot-logo' />
            </Box>
            <Box className={classes.pointPlace}>
                <Typography variant='h6' fontWeight='bold' component='h2' sx={{ fontSize: '14px', fontWeight: 700 }}>
                    Participate Tournament
                </Typography>
                <Typography variant='h6' fontWeight='bold' component='h2' sx={{ fontSize: '14px', fontWeight: 300 }}>
                    Games 10.03
                </Typography>
            </Box>
        </Box>
    );
};

export default History;
