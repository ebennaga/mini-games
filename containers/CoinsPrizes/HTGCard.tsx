import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, ButtonBase } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface HTGCardProps {
    title: string;
    paragraph?: string;
    customParagraph?: any;
    image: string;
    href: string;
}

const HTGCard: React.FC<HTGCardProps> = ({ href, image, title, paragraph, customParagraph }) => {
    return (
        <Box sx={{ mt: '30px' }}>
            <ButtonBase href={href} sx={{ width: '100%' }}>
                <img src={image} alt='coin-banner' style={{ width: '100%' }} loading='lazy' />
            </ButtonBase>
            <Box sx={{ borderBottom: '2px solid #F4F1FF' }}>
                <Accordion
                    sx={{
                        boxShadow: 'none',
                        ':before': { bgcolor: '#F4F1FF', height: '2px ' }
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#A54CE5' }} />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                        sx={{ minHeight: '62px' }}
                    >
                        <Typography component='h3' fontSize='14px' fontWeight={600}>
                            {title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {customParagraph || (
                            <Typography component='p' fontWeight={400} lineHeight='12px' fontSize='12px' sx={{ color: '#949494' }}>
                                {paragraph}
                            </Typography>
                        )}
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
};

export default HTGCard;
