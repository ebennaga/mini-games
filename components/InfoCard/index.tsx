import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';

interface InfoCardProps {
    onClick: any;
    title: string;
    subTitle: string;
    background: string;
    image: string;
    linearBackground?: string;
    bgButton: string;
    buttonText: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ onClick, title, subTitle, background, image, linearBackground, buttonText, bgButton }) => {
    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                background: `url(${background})`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
                height: 'fit-content',
                width: '100%',
                borderRadius: '6px',
                marginTop: '26px'
            }}
        >
            <Box
                sx={{
                    background: linearBackground || 'linear-gradient(216deg, rgb(255 255 255 / 0%) 14%, rgb(247 236 156) 87%)',
                    height: '100%',
                    width: '100%',
                    borderRadius: '6px'
                }}
            >
                <Box
                    sx={{
                        color: '#373737',
                        padding: '17px 20px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            textAlign: 'start',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography component='h4' fontSize='16px' fontWeight={700} lineHeight='16px'>
                            {title}
                        </Typography>
                        <Typography component='h4' fontSize='16px' fontWeight={700} lineHeight='16px'>
                            {subTitle}
                        </Typography>
                        <Box sx={{ padding: '6.6px 28px', bgcolor: bgButton, borderRadius: '19.6px', width: 'fit-content' }}>
                            <Typography component='h4' fontSize='12.0781px' fontWeight={700}>
                                {buttonText}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <img src={image} width='77px' height='auto' alt='prize play' />
                        <img src='/icons/logo-white.svg' width='38.8px' height='20px' alt='prize play' />
                    </Box>
                </Box>
            </Box>
        </ButtonBase>
    );
};

export default InfoCard;
