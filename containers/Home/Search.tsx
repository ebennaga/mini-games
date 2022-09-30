import { Box, IconButton, InputBase } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Controller } from 'react-hook-form';

interface SearchProps {
    form: any;
    name: string;
    placeholder: string;
    onSubmit: any;
}

const Search: React.FC<SearchProps> = ({ form, name, placeholder, onSubmit }) => {
    return (
        <form onSubmit={form.handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Box
                sx={{
                    background: '#F9F0FF',
                    borderRadius: '33px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 24px',
                    marginTop: '46px',
                    marginBottom: '43px',
                    '& .MuiInputBase-input': {
                        fontWeight: 600
                    }
                }}
            >
                <IconButton type='submit'>
                    <SearchIcon sx={{ color: '#373737', mr: '19px' }} />
                </IconButton>
                <Controller
                    name={name}
                    control={form.control}
                    render={({ field }) => {
                        return <InputBase placeholder={placeholder} {...field} />;
                    }}
                />
            </Box>
        </form>
    );
};

export default Search;
