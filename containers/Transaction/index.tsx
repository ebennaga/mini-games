import React from 'react';

import { Grid, Box, ButtonBase, Typography } from '@mui/material';
import { ArrowCircleLeft } from '@mui/icons-material';

const Transaction = () => {
    return (
        // <Grid container spacing={1} sx={{ marginLeft: '20px' }} direction='column'>
        //     {/* <Grid item xs={4}>
        //         <Box>
        //             <ButtonBase sx={{ mt: 5 }}>
        //                 <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
        //             </ButtonBase>
        //         </Box>

        //         <Box sx={{ mt: -10, ml: 15 }}>
        //             <Typography sx={{ fontWeight: 'bold', fontSize: '24px', mt: 5 }}>Transaction</Typography>
        //         </Box>
        //     </Grid>
        //     <Grid item xs={4}>
        //         <Box sx={{ display: 'flex', direction: 'row', justifyContent: 'flex-start', ml: 1 }}>
        //             <Typography
        //                 sx={{
        //                     fontWeight: 510,
        //                     fontSize: '14px',
        //                     mt: 2,
        //                     color: 'rgba(55, 55, 55, 0.5)',
        //                     fontStyle: 'normal',
        //                     lineHeight: '14px'
        //                 }}
        //             >
        //                 You have
        //             </Typography>
        //             <Typography
        //                 sx={{
        //                     fontWeight: 600,
        //                     fontSize: '14px',
        //                     mt: 2,
        //                     color: '#A54CE5',
        //                     fontStyle: 'normal',
        //                     lineHeight: '14px',
        //                     ml: '4px'
        //                 }}
        //             >
        //                 2 Transaction
        //             </Typography>
        //             <Typography
        //                 sx={{
        //                     fontWeight: 510,
        //                     fontSize: '14px',
        //                     mt: 2,
        //                     color: 'rgba(55, 55, 55, 0.5)',
        //                     fontStyle: 'normal',
        //                     lineHeight: '14px',
        //                     ml: '4px'
        //                 }}
        //             >
        //                 today
        //             </Typography>
        //         </Box>
        //     </Grid>
        //     <Grid item xs={1}>
        //         <Typography
        //             sx={{
        //                 fontWeight: 700,
        //                 fontSize: '18px',
        //                 mt: '10px',
        //                 color: '#373737',
        //                 fontStyle: 'normal',
        //                 lineHeight: '18px',
        //                 ml: '8px'
        //             }}
        //         >
        //             Today
        //         </Typography>
        //         <Box>
        //             <img
        //                 src='/images/ellipse.png'
        //                 width={12}
        //                 height={16}
        //                 alt='detail-item'
        //                 style={{ marginTop: '9%', marginLeft: '6px' }}
        //             />
        //         </Box>
        //     </Grid>
        //     <Grid item xs={4}>
        //         <Box
        //             sx={{
        //                 mt: -3,
        //                 width: '48px',
        //                 height: '48px',
        //                 background: '#FFF5CD',
        //                 borderRadius: '8px',
        //                 display: 'flex',
        //                 justifyContent: 'space-between',
        //                 ml: 3
        //             }}
        //         >
        //             <img src='/images/poin.png' width={30} height={30} alt='maskot-logo' style={{ marginTop: '22%', marginLeft: '20%' }} />
        //             <Box sx={{ ml: 3 }}>
        //                 <Box sx={{ width: '200px' }}>
        //                     <Typography variant='h6' fontWeight='bold' component='h2' sx={{ fontSize: '14px', fontWeight: 700 }}>
        //                         Menara Dingdong
        //                     </Typography>
        //                 </Box>
        //                 <Box sx={{ mt: 2, width: '127px' }}>
        //                     <Typography
        //                         variant='h6'
        //                         fontWeight='bold'
        //                         component='h2'
        //                         sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '14px' }}
        //                     >
        //                         Transaction 10.03
        //                     </Typography>
        //                 </Box>
        //             </Box>
        //             <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', ml: -3 }}>
        //                 <Typography
        //                     variant='h6'
        //                     fontWeight='bold'
        //                     component='h2'
        //                     sx={{ fontSize: '14px', fontWeight: 700, color: '#1BA95D', mt: '25%' }}
        //                 >
        //                     +1000
        //                 </Typography>
        //                 <img src='/images/poin.png' width={13} height={13} alt='poin-icon' style={{ marginTop: '35%', marginLeft: 3 }} />
        //             </Box>
        //         </Box>
        //         <Grid item xs={1}>
        //             <Box sx={{ border: '1px solid rgba(40, 38, 38, 0.1)', mt: 2, width: '310px', ml: 1, height: '0px' }} />
        //         </Grid>
        //     </Grid> */}
        //     <Grid item xs={4}>
        //         <Box>
        //             <ButtonBase sx={{ mt: 5 }}>
        //                 <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
        //             </ButtonBase>
        //         </Box>

        //         {/* <Box sx={{ mt: -10, ml: 15 }}>
        //             <Typography sx={{ fontWeight: 'bold', fontSize: '24px', mt: 5 }}>Transaction</Typography>
        //         </Box> */}
        //     </Grid>
        // </Grid>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Grid container spacing={1} sx={{ mt: -4, ml: '20px', width: '100%' }} direction='column'>
                <Grid item xs={4}>
                    <Box>
                        <ButtonBase sx={{ mt: 5 }}>
                            <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
                        </ButtonBase>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: -10 }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '24px', mt: 5 }}>Transaction</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ display: 'flex', direction: 'row', justifyContent: 'flex-start', ml: 1 }}>
                        <Typography
                            sx={{
                                fontWeight: 510,
                                fontSize: '14px',
                                mt: 2,
                                color: 'rgba(55, 55, 55, 0.5)',
                                fontStyle: 'normal',
                                lineHeight: '14px'
                            }}
                        >
                            You have
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '14px',
                                mt: 2,
                                color: '#A54CE5',
                                fontStyle: 'normal',
                                lineHeight: '14px',
                                ml: '4px'
                            }}
                        >
                            2 Transaction
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 510,
                                fontSize: '14px',
                                mt: 2,
                                color: 'rgba(55, 55, 55, 0.5)',
                                fontStyle: 'normal',
                                lineHeight: '14px',
                                ml: '4px'
                            }}
                        >
                            today
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: '18px',
                            mt: '10px',
                            color: '#373737',
                            fontStyle: 'normal',
                            lineHeight: '18px',
                            ml: '8px'
                        }}
                    >
                        Today
                    </Typography>
                    <Box>
                        <img
                            src='/images/ellipse.png'
                            width={12}
                            height={16}
                            alt='detail-item'
                            style={{ marginTop: '9%', marginLeft: '6px' }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            mt: -2,
                            width: '48px',
                            height: '48px',
                            background: '#FFF5CD',
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            ml: 3
                        }}
                    >
                        <img
                            src='/images/poin.png'
                            width={30}
                            height={30}
                            alt='maskot-logo'
                            style={{ marginTop: '22%', marginLeft: '20%' }}
                        />
                        <Box sx={{ ml: 3 }}>
                            <Box sx={{ width: '200px' }}>
                                <Typography variant='h6' fontWeight='bold' component='h2' sx={{ fontSize: '14px', fontWeight: 700 }}>
                                    Menara Dingdong
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 2, width: '127px' }}>
                                <Typography
                                    variant='h6'
                                    fontWeight='bold'
                                    component='h2'
                                    sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '14px' }}
                                >
                                    Transaction 10.03
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', ml: -3 }}>
                            <Typography
                                variant='h6'
                                fontWeight='bold'
                                component='h2'
                                sx={{ fontSize: '14px', fontWeight: 700, color: '#1BA95D', mt: '25%' }}
                            >
                                +1000
                            </Typography>
                            <img
                                src='/images/poin.png'
                                width={13}
                                height={13}
                                alt='poin-icon'
                                style={{ marginTop: '35%', marginLeft: 3 }}
                            />
                        </Box>
                    </Box>
                    <Grid item xs={1}>
                        <Box
                            sx={{
                                border: '1px solid rgba(40, 38, 38, 0.1)',
                                mt: 2,
                                width: '310px',
                                ml: 1,
                                height: '0px',
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Transaction;
