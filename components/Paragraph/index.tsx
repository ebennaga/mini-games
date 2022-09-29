import { Box, Typography } from '@mui/material';
import React from 'react';

interface ParagraphProps {
    title: string;
    paragraph: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ title, paragraph }) => {
    return (
        <Box sx={{ mb: '30px' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{title}</Typography>
            <Typography sx={{ fontWeight: '600', fontSize: '12px', color: '#949494', mt: '7px' }}>{paragraph}</Typography>
        </Box>
    );
};

export default Paragraph;
