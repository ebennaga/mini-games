import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface HelpSupportCardProps {
    title: string;
    paragraph?: string;
    customParagraph?: any;
}

const HelpSupportCard: React.FC<HelpSupportCardProps> = ({ title, paragraph, customParagraph }) => {
    return (
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
    );
};

export default HelpSupportCard;
