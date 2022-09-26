import { Box, IconButton, InputBase } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <form style={{ width: '100%' }}>
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
                <IconButton>
                    <SearchIcon sx={{ color: '#373737', mr: '19px' }} />
                </IconButton>
                <InputBase placeholder='Search Games' />
            </Box>
        </form>
    );
};

export default Search;
