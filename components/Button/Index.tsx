import React from 'react';
import { Button } from '@mui/material';

interface ButtonProps {
    title: string;
    icon?: any;
    backgoundColor: string;
    color: string;
    border?: string;
    onClick?: any;
}

const ButtonLanding: React.FC<ButtonProps> = ({ title, icon, backgoundColor, color, border, onClick }) => {
    return (
        <Button
            startIcon={icon}
            onClick={onClick}
            sx={{
                textTransform: 'none',
                position: 'relative',
                border,
                borderRadius: '15px',
                fontWeight: 'bold',
                color,
                backgroundColor: backgoundColor,
                width: '100%',
                height: '60px',
                '&:hover': {
                    backgroundColor: backgoundColor,
                    border,
                    color,
                    fontWeight: 'bold'
                }
            }}
            variant='outlined'
        >
            {title}
        </Button>
    );
};

export default ButtonLanding;
