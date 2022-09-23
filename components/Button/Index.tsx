import React from 'react';
import { Button } from '@mui/material';

interface ButtonProps {
    title: string;
    icon?: any;
    backgoundColor: string;
    color: string;
    border?: string;
    onClick?: any;
    height?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const ButtonLanding: React.FC<ButtonProps> = ({
    disabled,
    height = '60px',
    title,
    icon,
    backgoundColor,
    color,
    border = 'none',
    onClick,
    type = 'submit'
}) => {
    return (
        <Button
            type={type}
            disabled={disabled}
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
                height,
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
