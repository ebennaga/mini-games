import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

const SocialMediaList = () => {
    const router = useRouter();
    const socialMediaData = [
        {
            icon: '/instagram.svg',
            idAccount: '@prizeplay',
            platform: 'instagram',
            href: 'https://www.instagram.com/prizeplay.io/'
        },
        { icon: '/facebook.svg', idAccount: '@Prizeplay.id', platform: 'facebook' },
        { icon: '/twitter.svg', idAccount: '@prizeplayio', platform: 'twitter', href: 'https://twitter.com/prizeplayio' },
        {
            icon: '/tiktok.svg',
            idAccount: '@Prizeplay.io',
            platform: 'tiktok',
            href: 'https://www.tiktok.com/@prizeplay.io?_t=8X1BW2F4ubR&_r=1'
        }
    ];

    return (
        <Box component='section' sx={{ width: '100%', marginTop: '32px', marginBottom: '50px' }}>
            <Typography component='h3' fontWeight='bold' fontSize='18px' alignItems='start' marginBottom='24px'>
                Follow Social Media
            </Typography>
            <Grid container spacing={2}>
                {socialMediaData.map((item: any) => {
                    return (
                        <Grid item xs={6} key={item.icon} sx={{ height: '60px' }}>
                            <ButtonBase
                                onClick={() => router.push(item.href)}
                                sx={{ background: '#F4F1FF', borderRadius: '8px', height: '100%', width: '100%' }}
                            >
                                <img src={`/icons${item.icon}`} width='24px' height='24px' alt={item.platform} />
                                <Typography component='span' fontSize='12px' fontWeight={700} marginLeft='25px' sx={{ color: '#A54CE5' }}>
                                    {item.idAccount}
                                </Typography>
                            </ButtonBase>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default SocialMediaList;
