import { Box, Typography } from '@mui/material';
import React from 'react';

interface TopGameProgressProps {
    image: string;
    title: string;
    level: string;
    exp: any;
}

const TopGameProgress: React.FC<TopGameProgressProps> = ({ image, title, level, exp }) => {
    return (
        <Box color='#353535' sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
                <Box
                    sx={{
                        background: `url(${image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '70px',
                        height: '70px'
                    }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', ml: '30px' }}>
                    <Typography component='h3' fontSize='24px' fontWeight={700}>
                        {title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/icons/progress-dot.png' width='18.5px' height='auto' alt={title} />
                        <Typography component='p' fontSize='14px' fontWeight={600} ml={1}>
                            {level}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Typography component='p' fontSize='14px' fontWeight={600} sx={{ '& span': { fontWeight: 700 } }}>
                Exp. <span>{exp.split('/')[0]}</span>/{exp.split('/')[1]}
            </Typography>
        </Box>
    );
};

export default TopGameProgress;
