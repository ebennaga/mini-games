import React from 'react';
import { Controller } from 'react-hook-form';
import { Box, Checkbox, Typography } from '@mui/material';

interface CheckboxControllerProps {
    name: string;
    form: any;
    onChange: any;
    checked: boolean;
    label: string;
}

const CheckboxController: React.FC<CheckboxControllerProps> = ({ name, form, onChange, checked = false, label }) => {
    return (
        <Controller
            name={name}
            control={form.control}
            render={() => {
                return (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox color='secondary' onChange={onChange} checked={checked} />
                        <Typography sx={{ color: '#A54CE5', fontSize: '12px', fontWeight: 'bold' }}>{label}</Typography>
                    </Box>
                );
            }}
        />
    );
};

export default CheckboxController;
