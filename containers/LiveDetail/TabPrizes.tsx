import { LocationOn } from '@mui/icons-material';
import { Typography, Box, ImageList } from '@mui/material';
import ImageListItemComingSoon from 'components/ImageListComingSoon';
import TabPanel from 'components/TabPanel';
import React from 'react';
import dataComingSoon from 'utils/dataComingSoon';

interface TabPrizesProps {
    index: number;
    value: any;
}

const TabPrizes: React.FC<TabPrizesProps> = ({ index, value }) => {
    return (
        <TabPanel index={index} value={value}>
            <Box sx={{ display: 'flex', justifyContent: 'center', m: '20px', alignItems: 'center', flexDirection: 'column' }}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        backgroundColor: '#F9F0FF',
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderRadius: '15px'
                    }}
                >
                    <Box sx={{ width: '45%', p: '5px' }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '18px', lineHeight: '16px' }}>
                            Offline Tournament Lorem ipsum
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: '12px', mt: '10px' }}>
                            Lorem ipsum dolor sit, consectetur adipiscing.
                        </Typography>
                    </Box>
                    <Box sx={{ position: 'absolute', right: -5, width: '200px', top: -8 }}>
                        <img src='/images/banner-livedetail.png' alt='img-live' style={{ width: '100%' }} />
                    </Box>
                </Box>
                <Box sx={{ mt: '20px', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <img src='/images/sbuck-logo.png' alt='sbuck' />
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <LocationOn sx={{ color: 'red' }} />
                                <Typography sx={{ color: 'grey', fontSize: '10px', fontWeight: 500 }}>
                                    Lorem ipsum dolor sit amet.
                                </Typography>
                            </Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                                Live Tournament Starbucks Tournament Yeah Yeah Halo2 Bandung
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mt: '40px', width: '100%' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Prizes You Can Get</Typography>
                    <ImageList variant='masonry' cols={2} gap={30} sx={{ mt: 4, '& .MuiImageListItem-root': { overflow: 'auto' } }}>
                        {dataComingSoon.slice(3).map((item: any) => {
                            return <ImageListItemComingSoon isLive key={item.name} image={item.image_url} name={item.name} />;
                        })}
                    </ImageList>
                </Box>
            </Box>
        </TabPanel>
    );
};

export default TabPrizes;
