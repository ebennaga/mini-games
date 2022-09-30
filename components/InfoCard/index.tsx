/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import TodayIcon from '@mui/icons-material/Today';

interface InfoCardProps {
    onClick: any;
    title: string;
    subTitle: string;
    infoText: string;
    isGame?: boolean;
    background: string;
    image: string;
    linearBackground?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ onClick, title, subTitle, infoText, isGame, background, image, linearBackground }) => {
    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                background: `url(${background})`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
                // height: '163px',
                height: 'fit-content',
                width: '100%',
                borderRadius: '6px',
                marginTop: '26px'
            }}
        >
            <Box
                sx={{
                    background: linearBackground || 'linear-gradient(216deg, rgb(0 0 0 / 59%) 14%, rgb(19 25 46) 87%)',
                    height: '100%',
                    width: '100%',
                    borderRadius: '6px'
                }}
            >
                <Box sx={{ color: '#fff', padding: '17px 20px', display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>
                    <Box sx={{ textAlign: 'start' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                                sx={{
                                    background: `url(${image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    width: isGame ? '61px' : '52.89px',
                                    height: isGame ? '61px' : '50px',
                                    borderRadius: '7px',
                                    marginRight: '17px'
                                }}
                            />
                            <Typography component='h3' fontSize='24px' fontWeight={600}>
                                {title}
                            </Typography>
                        </Box>
                        <Typography component='h4' fontSize='24px' fontWeight={700} marginTop='18px'>
                            {subTitle}
                        </Typography>
                        {isGame ? (
                            <Typography component='span' fontSize='11.5px' fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                                <TodayIcon sx={{ fontSize: '17px', marginBottom: '3px', marginRight: '3px' }} />
                                {infoText}
                            </Typography>
                        ) : (
                            <Typography component='span' fontSize='12px' fontWeight={400} sx={{ color: '#D9D9D9' }}>
                                {infoText}
                            </Typography>
                        )}
                    </Box>
                    <img src='/icons/logo-white.svg' width='38.8px' height='20px' alt='prize play' />
                </Box>
            </Box>
        </ButtonBase>
    );
};

export default InfoCard;
