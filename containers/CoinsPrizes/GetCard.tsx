import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';

interface GetCardProps {
    icon: string;
    title: string;
    paragraph: string;
    secondParagraph?: string;
    onClick: any;
    buttonText: string;
    buttonColor: string;
}

const GetCard: React.FC<GetCardProps> = ({ icon, title, paragraph, secondParagraph, onClick, buttonText, buttonColor }) => {
    return (
        <Box sx={{ paddingBottom: '45px', borderBottom: '1px solid #E6E6E6' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '42px' }}>
                <img src={icon} width='53.95px' height='auto' alt={title} loading='lazy' />
                <Typography component='h2' fontWeight={700} paddingLeft='20px' fontSize='24px' sx={{ color: '#373737' }}>
                    {title}
                </Typography>
            </Box>
            <Typography
                component='p'
                fontWeight={400}
                lineHeight='12px'
                fontSize='12px'
                textAlign='justify'
                paddingTop='28px'
                sx={{ color: '#949494' }}
            >
                {paragraph}
            </Typography>
            {secondParagraph && (
                <Typography
                    component='p'
                    fontWeight={400}
                    lineHeight='12px'
                    fontSize='12px'
                    textAlign='justify'
                    paddingTop='8px'
                    sx={{ color: '#949494' }}
                >
                    {secondParagraph}
                </Typography>
            )}
            <ButtonBase
                onClick={onClick}
                sx={{ background: buttonColor, color: '#fff', padding: '23px 0', marginTop: '24px', width: '100%', borderRadius: '15px' }}
            >
                <Typography component='span' fontSize='14px' fontWeight={700}>
                    {buttonText}
                </Typography>
            </ButtonBase>
        </Box>
    );
};

export default GetCard;
