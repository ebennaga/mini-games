import { Box, Switch, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

interface SwitchCardProps {
    icon: string;
    title: string;
    onChange: any;
    name: string;
    form: any;
    value: boolean;
}

const SwitchCard: React.FC<SwitchCardProps> = ({ icon, title, onChange, name, form, value }) => {
    const label = { inputProps: { 'aria-label': 'Switch-Button' } };
    const [switchValue, setSwitchValue] = React.useState(value);

    const handleChange = async () => {
        setSwitchValue(!switchValue);
        if (onChange) {
            await onChange();
        }
    };

    React.useEffect(() => {
        setSwitchValue(value);
    }, [value]);

    return (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={icon} alt={title} width='24px' height='24px' loading='lazy' />
                <Typography component='span' fontSize='14px' fontWeight={700} marginLeft={1.5}>
                    {title}
                </Typography>
            </Box>
            <Box>
                <Controller
                    name={name}
                    control={form.control}
                    defaultValue
                    render={() => {
                        return (
                            <Switch
                                checked={switchValue}
                                onChange={handleChange}
                                {...label}
                                sx={{
                                    '& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked': {
                                        color: '#fff'
                                    },
                                    '& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
                                        color: '#6200ff',
                                        backgroundColor: '#6200ff'
                                    }
                                }}
                            />
                        );
                    }}
                />
            </Box>
        </Box>
    );
};

export default SwitchCard;
