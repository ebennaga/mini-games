import { Box, ButtonBase, Typography } from '@mui/material';
import numberFormat from 'helper/numberFormat';
import { useRouter } from 'next/router';
import React from 'react';

interface GamesCardProps {
    image: string;
    title: string;
    totalUser: number;
    href: any;
}

const GamesCard: React.FC<GamesCardProps> = ({ image, title, totalUser, href }) => {
    const router = useRouter();

    return (
        <ButtonBase onClick={() => router.push(href)} sx={{ display: 'flex', flexDirection: 'column', marginTop: '27px' }}>
            <Box
                sx={{
                    background: `url(${image}), url(/images/img_error.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '120px',
                    height: '120px',
                    borderRadius: '22px',
                    '@media (max-width:475px)': {
                        height: '110px',
                        width: '110px'
                    },
                    '@media (max-width:450px)': {
                        height: '100px',
                        width: '100px'
                    }
                }}
            />
            <Typography variant='subtitle1' component='p' marginTop='14px' marginBottom='7px' sx={{ fontWeight: 'bold', fontSize: '12px' }}>
                {title}
            </Typography>
            <Box sx={{ display: 'flex' }}>
                <Box
                    sx={{
                        background: `url(${'/icons/dummy/main-ikan.png'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '16.71px',
                        height: '16.71px',
                        borderRadius: '22px',
                        border: '1.5px solid #fff'
                    }}
                />
                <Box
                    sx={{
                        background: `url(${'/icons/dummy/user-1.png'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '16.71px',
                        height: '16.71px',
                        borderRadius: '22px',
                        border: '1.5px solid #fff',
                        marginLeft: '-13px'
                    }}
                />
                <Box
                    sx={{
                        background: `url(${'/icons/dummy/user-2.png'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '16.71px',
                        height: '16.71px',
                        borderRadius: '22px',
                        border: '1.5px solid #fff',
                        marginLeft: '-13px'
                    }}
                />
                <Typography variant='subtitle2' fontWeight={600} component='span' paddingLeft='8px' fontSize='10px'>
                    {numberFormat(totalUser)}
                </Typography>
            </Box>
        </ButtonBase>
    );
};

export default GamesCard;
