/* eslint-disable no-nested-ternary */
import React from 'react';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import { Box, Grid, InputAdornment, Skeleton, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Search } from '@mui/icons-material';

interface InputPrizesProps {
    placeholder: string;
    form?: any;
    name: string;
}
const InputPrizes: React.FC<InputPrizesProps> = ({ placeholder, form, name }) => {
    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field }) => {
                return (
                    <TextField
                        disabled
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Search sx={{ color: '#373737', width: '50px' }} />
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            '& .MuiInputBase-input': { outline: 'none', border: 'none !important', paddingY: '10px' },
                            '& .MuiOutlinedInput-notchedOutline': { border: 'none !important' },
                            backgroundColor: '#F4F1FF',
                            width: '100%',
                            borderRadius: '33px'
                        }}
                        placeholder={placeholder}
                        {...field}
                    />
                );
            }}
        />
    );
};

const PrizeSkeleton = () => {
    const form = useForm({
        mode: 'all'
    });
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px'>
                <HeaderSkeleton isPage />
            </Box>
            <Box padding='20px'>
                <Box sx={{ my: '20px' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: '700', mb: 2 }}>Prizes</Typography>
                    <InputPrizes form={form} placeholder='Search prize' name='search' />
                </Box>
                <Grid container spacing={2}>
                    {[...Array(8)].map((item: any, idx: number) => (
                        <Grid item xs={6} key={idx}>
                            <Skeleton variant='rounded' sx={{ height: '180px', padding: '0px' }} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default PrizeSkeleton;
