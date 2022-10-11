import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
// import { useRouter } from 'next/router';
import HeaderBack from 'components/HeaderBack';
import TabPanelCoins from './TabCoins';
import TabPanelPoints from './TabPoints';

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
};

const Transaction = () => {
    // const router = useRouter();
    const [value, setValue] = React.useState(0);

    // const cards = [
    //     {
    //         id: 1,
    //         title: 'Yesterday',
    //         image: '/images/poin.png',
    //         price: '+5000'
    //     },
    //     {
    //         id: 2,
    //         title: '22 september 2022',
    //         image: '/images/poin.png',
    //         price: '-5000'
    //     },

    //     {
    //         id: 3,
    //         title: '21 september 2022',
    //         image: '/images/poin.png',
    //         price: '+5000'
    //     },

    //     {
    //         id: 4,
    //         title: '20 september 2022',
    //         image: '/images/poin.png',
    //         price: '-5000'
    //     }
    // ];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='10px 20px 0px'>
                <HeaderBack title='Transaction' />
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: '20px' }}>
                <Tabs
                    variant='fullWidth'
                    value={value}
                    onChange={handleChange}
                    indicatorColor='secondary'
                    textColor='inherit'
                    aria-label='basic tabs example'
                    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
                    sx={{
                        '& .MuiTabs-indicator': {
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: 'transparent'
                        },
                        '& .MuiTabs-indicatorSpan': {
                            maxWidth: 150,
                            width: '100%',
                            backgroundColor: '#A54CE5'
                        },
                        '& .MuiButtonBase-root': {
                            minHeight: 0
                        }
                    }}
                >
                    <Tab
                        label='Coins'
                        icon={<img src='/images/coin-new.png' alt='coin' />}
                        iconPosition='start'
                        {...a11yProps(0)}
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                    />
                    <Tab
                        label='Points'
                        icon={<img src='/images/new-point.png' alt='point' />}
                        iconPosition='start'
                        {...a11yProps(1)}
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                    />
                </Tabs>
            </Box>
            <TabPanelCoins value={value} index={0} />
            <TabPanelPoints value={value} index={1} />
        </Box>
        // <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        //     <Grid container spacing={1} sx={{ width: '100%' }} direction='column'>
        //         {/* <Grid item xs={4}>
        //             <Box>
        //                 <ButtonBase
        //                     onClick={() => {
        //                         router.push('/topup');
        //                     }}
        //                     sx={{ mt: 5 }}
        //                 >
        //                     <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
        //                 </ButtonBase>
        //             </Box>
        //             <Box sx={{ display: 'flex', justifyContent: 'center', mt: -10 }}>
        //                 <Typography sx={{ fontWeight: 'bold', fontSize: '24px', mt: 5 }}>Transaction</Typography>
        //             </Box>
        //         </Grid> */}
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
        //         <Box sx={{ mt: 1 }}>
        //             <Typography
        //                 sx={{
        //                     fontWeight: 700,
        //                     fontSize: '18px',
        //                     mt: '10px',
        //                     color: '#373737',
        //                     fontStyle: 'normal',
        //                     lineHeight: '18px',
        //                     ml: '8px'
        //                 }}
        //             >
        //                 Today
        //             </Typography>
        //         </Box>
        //         <Box sx={{ display: 'flex', alignItems: 'center', direction: 'column' }}>
        //             <img src='/images/ellipse.png' width={12} height={16} alt='detail-item' style={{ marginLeft: 8, marginTop: 12 }} />

        //             <Box
        //                 sx={{
        //                     width: '48px',
        //                     height: '48px',
        //                     background: '#FFF5CD',
        //                     borderRadius: '8px',
        //                     display: 'flex',
        //                     justifyContent: 'space-between',
        //                     ml: 2,
        //                     mt: 2
        //                 }}
        //             >
        //                 <img
        //                     src='/images/poin.png'
        //                     width={30}
        //                     height={30}
        //                     alt='maskot-logo'
        //                     style={{ marginTop: '22%', marginLeft: '20%' }}
        //                 />
        //                 <Box sx={{ ml: 3, display: 'flex', justifyContent: 'space-between' }}>
        //                     <Box sx={{ width: '200px' }}>
        //                         <Typography variant='h6' fontWeight='bold' component='h2' sx={{ fontSize: '14px', fontWeight: 700 }}>
        //                             Menara Dingdong
        //                         </Typography>
        //                         <Box sx={{ mt: 2, width: '127px' }}>
        //                             <Typography
        //                                 variant='h6'
        //                                 fontWeight='bold'
        //                                 component='h2'
        //                                 sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '14px' }}
        //                             >
        //                                 Transaction 10.03
        //                             </Typography>
        //                         </Box>
        //                     </Box>

        //                     <Box sx={{ mt: 3, ml: -3 }}>
        //                         <Typography
        //                             variant='h6'
        //                             fontWeight='bold'
        //                             component='h2'
        //                             sx={{ fontSize: '14px', fontWeight: 700, color: '#1BA95D', mt: '25%' }}
        //                         >
        //                             +1000
        //                         </Typography>
        //                     </Box>
        //                     <Box sx={{ mt: '15%', ml: 1 }}>
        //                         <img src='/images/poin.png' width={13} height={13} alt='poin-icon' />
        //                     </Box>
        //                 </Box>
        //             </Box>
        //         </Box>
        //         <Box
        //             sx={{
        //                 border: '1px solid rgba(40, 38, 38, 0.1)',
        //                 mt: 2,
        //                 width: '330px',
        //                 ml: 1,
        //                 height: '0px',
        //                 display: 'flex',
        //                 justifyContent: 'space-around'
        //             }}
        //         />
        //         <Box sx={{ display: 'flex', alignItems: 'center', direction: 'column' }}>
        //             <img src='/images/ellipse.png' width={12} height={16} alt='detail-item' style={{ marginLeft: 8, marginTop: 12 }} />

        //             <Box
        //                 sx={{
        //                     width: '48px',
        //                     height: '48px',
        //                     background: '#FFF5CD',
        //                     borderRadius: '8px',
        //                     display: 'flex',
        //                     justifyContent: 'space-between',
        //                     ml: 2,
        //                     mt: 2
        //                 }}
        //             >
        //                 <img
        //                     src='/images/poin.png'
        //                     width={30}
        //                     height={30}
        //                     alt='maskot-logo'
        //                     style={{ marginTop: '22%', marginLeft: '20%' }}
        //                 />
        //                 <Box sx={{ ml: 3, display: 'flex', justifyContent: 'space-between' }}>
        //                     <Box sx={{ width: '200px' }}>
        //                         <Typography variant='h6' fontWeight='bold' component='h2' sx={{ fontSize: '14px', fontWeight: 700 }}>
        //                             Menara Dingdong
        //                         </Typography>
        //                         <Box sx={{ mt: 2, width: '127px' }}>
        //                             <Typography
        //                                 variant='h6'
        //                                 fontWeight='bold'
        //                                 component='h2'
        //                                 sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '14px' }}
        //                             >
        //                                 Transaction 10.03
        //                             </Typography>
        //                         </Box>
        //                     </Box>

        //                     <Box sx={{ mt: 3, ml: -3 }}>
        //                         <Typography
        //                             variant='h6'
        //                             fontWeight='bold'
        //                             component='h2'
        //                             sx={{ fontSize: '14px', fontWeight: 700, color: '#FF4566', mt: '25%' }}
        //                         >
        //                             -1000
        //                         </Typography>
        //                     </Box>
        //                     <Box sx={{ mt: '15%', ml: 1 }}>
        //                         <img src='/images/poin.png' width={13} height={13} alt='poin-icon' />
        //                     </Box>
        //                 </Box>
        //             </Box>
        //         </Box>
        //         <Box
        //             sx={{
        //                 border: '1px solid rgba(40, 38, 38, 0.1)',
        //                 mt: 2,
        //                 width: '330px',
        //                 ml: 1,
        //                 height: '0px',
        //                 display: 'flex',
        //                 justifyContent: 'space-around'
        //             }}
        //         />
        //         {cards.map((index: any) => {
        //             return (
        //                 <>
        //                     <Box sx={{ mt: 1 }} key={index.id}>
        //                         <Typography
        //                             sx={{
        //                                 fontWeight: 700,
        //                                 fontSize: '18px',
        //                                 mt: '10px',
        //                                 color: '#373737',
        //                                 fontStyle: 'normal',
        //                                 lineHeight: '18px',
        //                                 ml: '8px'
        //                             }}
        //                         >
        //                             {index.title}
        //                         </Typography>
        //                     </Box>
        //                     <Box sx={{ display: 'flex', alignItems: 'center', direction: 'column' }}>
        //                         <Box
        //                             sx={{
        //                                 width: '48px',
        //                                 height: '48px',
        //                                 background: '#FFF5CD',
        //                                 borderRadius: '8px',
        //                                 display: 'flex',
        //                                 justifyContent: 'space-between',
        //                                 ml: 4,
        //                                 mt: 2
        //                             }}
        //                         >
        //                             <img
        //                                 src='/images/poin.png'
        //                                 width={30}
        //                                 height={30}
        //                                 alt='maskot-logo'
        //                                 style={{ marginTop: '22%', marginLeft: '20%' }}
        //                             />
        //                             <Box sx={{ ml: 3, display: 'flex', justifyContent: 'space-between' }}>
        //                                 <Box sx={{ width: '200px' }}>
        //                                     <Typography
        //                                         variant='h6'
        //                                         fontWeight='bold'
        //                                         component='h2'
        //                                         sx={{ fontSize: '14px', fontWeight: 700 }}
        //                                     >
        //                                         Menara Dingdong
        //                                     </Typography>
        //                                     <Box sx={{ mt: 2, width: '127px' }}>
        //                                         <Typography
        //                                             variant='h6'
        //                                             fontWeight='bold'
        //                                             component='h2'
        //                                             sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '14px' }}
        //                                         >
        //                                             Transaction 10.03
        //                                         </Typography>
        //                                     </Box>
        //                                 </Box>

        //                                 <Box sx={{ mt: 3, ml: -3 }}>
        //                                     <Typography
        //                                         variant='h6'
        //                                         fontWeight='bold'
        //                                         component='h2'
        //                                         sx={{ fontSize: '14px', fontWeight: 700, color: '#1BA95D', mt: '25%' }}
        //                                     >
        //                                         {index.price}
        //                                     </Typography>
        //                                 </Box>
        //                                 <Box sx={{ mt: '15%', ml: 1 }}>
        //                                     <img src='/images/poin.png' width={13} height={13} alt='poin-icon' />
        //                                 </Box>
        //                             </Box>
        //                         </Box>
        //                     </Box>
        //                     <Box
        //                         sx={{
        //                             border: '1px solid rgba(40, 38, 38, 0.1)',
        //                             mt: 2,
        //                             width: '330px',
        //                             ml: 1,
        //                             height: '0px',
        //                             display: 'flex',
        //                             justifyContent: 'space-around'
        //                         }}
        //                     />
        //                     <Box sx={{ display: 'flex', alignItems: 'center', direction: 'column' }}>
        //                         <Box
        //                             sx={{
        //                                 width: '48px',
        //                                 height: '48px',
        //                                 background: '#FFF5CD',
        //                                 borderRadius: '8px',
        //                                 display: 'flex',
        //                                 justifyContent: 'space-between',
        //                                 ml: 4,
        //                                 mt: 2
        //                             }}
        //                         >
        //                             <img
        //                                 src='/images/poin.png'
        //                                 width={30}
        //                                 height={30}
        //                                 alt='maskot-logo'
        //                                 style={{ marginTop: '22%', marginLeft: '20%' }}
        //                             />
        //                             <Box sx={{ ml: 3, display: 'flex', justifyContent: 'space-between' }}>
        //                                 <Box sx={{ width: '200px' }}>
        //                                     <Typography
        //                                         variant='h6'
        //                                         fontWeight='bold'
        //                                         component='h2'
        //                                         sx={{ fontSize: '14px', fontWeight: 700 }}
        //                                     >
        //                                         Menara Dingdong
        //                                     </Typography>
        //                                     <Box sx={{ mt: 2, width: '127px' }}>
        //                                         <Typography
        //                                             variant='h6'
        //                                             fontWeight='bold'
        //                                             component='h2'
        //                                             sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '14px' }}
        //                                         >
        //                                             Transaction 10.03
        //                                         </Typography>
        //                                     </Box>
        //                                 </Box>

        //                                 <Box sx={{ mt: 3, ml: -3 }}>
        //                                     <Typography
        //                                         variant='h6'
        //                                         fontWeight='bold'
        //                                         component='h2'
        //                                         sx={{ fontSize: '14px', fontWeight: 700, color: '#FF4566', mt: '25%' }}
        //                                     >
        //                                         {index.price}
        //                                     </Typography>
        //                                 </Box>
        //                                 <Box sx={{ mt: '15%', ml: 1 }}>
        //                                     <img src='/images/poin.png' width={13} height={13} alt='poin-icon' />
        //                                 </Box>
        //                             </Box>
        //                         </Box>
        //                     </Box>
        //                 </>
        //             );
        //         })}
        //     </Grid>
        // </Box>
    );
};

export default Transaction;
