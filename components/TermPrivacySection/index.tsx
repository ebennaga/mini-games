import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

interface InfoTermPrivacyProps {
    arrayInfo: any;
}

const InfoTermPrivacy: React.FC<InfoTermPrivacyProps> = ({ arrayInfo }) => {
    return (
        <Box>
            <Box sx={{ marginTop: '28px' }}>
                {arrayInfo.map((_item: any, index: number) => {
                    return (
                        <Box key={index} sx={{ marginTop: index === 0 ? 0 : '28px', marginBottom: '21px' }}>
                            <Typography component='h3' fontWeight={600} fontSize='12px' sx={{ color: '#2E2E2E' }}>
                                {`${index + 1}. ${_item.title}`}
                            </Typography>
                            <Typography component='span' fontWeight={400} fontSize='12px' sx={{ color: '#949494', whiteSpace: 'pre-wrap' }}>
                                {`${_item.subtitle}`}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '28px' }}>
                <img src='/images/prizeplay_black.png' alt='prize_logo' />
                <Typography
                    component='span'
                    fontWeight={400}
                    fontSize='12px'
                    sx={{
                        color: '#949494',
                        whiteSpace: 'pre-wrap',
                        textAlign: 'center',
                        marginTop: '14px',
                        marginBottom: '14px',
                        paddingLeft: '28px',
                        paddingRight: '28px'
                    }}
                >
                    Ruko Crystal 1, Jalan Gading Golf Boulevard No. 19 Gading Serpong, Pakulonan Bar., Kec. Klp. Dua, Kabupaten Tangerang,
                    Banten 15810
                </Typography>

                <Box sx={{ marginTop: '28px' }}>
                    <Grid container spacing={2} gap={3}>
                        <img src='/icons/instagram_grey.png' alt='instagram' />
                        <img src='/icons/facebook_grey.png' alt='facebook' />
                        <img src='/icons/tiktok_grey.png' alt='tiktok' />
                        <img src='/icons/twitter_grey.png' alt='twitter' />
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default InfoTermPrivacy;
