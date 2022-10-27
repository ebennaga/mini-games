import React from 'react';
import { Button, CircularProgress } from '@mui/material';

interface ButtonProps {
    title: any;
    icon?: any;
    backgoundColor: string;
    color: string;
    border?: string;
    onClick?: any;
    height?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    isWhite?: boolean;
    id?: any;
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
    type = 'submit',
    loading = false,
    isWhite = false,
    id
}) => {
    return (
        <Button
            id={id}
            type={type}
            disabled={disabled}
            startIcon={icon}
            onClick={onClick}
            sx={{
                '&:disabled': {
                    backgroundColor: '#949494',
                    color: 'white',
                    border: 'none'
                },
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
            {loading ? <CircularProgress sx={{ color: isWhite ? '#A54CE5' : 'white' }} /> : title}
        </Button>
    );
};

export default ButtonLanding;
