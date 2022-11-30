import { Box, Dialog } from '@mui/material';
import React from 'react';
import CardDialog from './CardDialog';

interface IGamesDialog {
    open: boolean;
    onClose: any;
}

const GamesDialog: React.FC<IGamesDialog> = ({ open, onClose }) => {
    return (
        <Dialog
            onClose={onClose}
            open={open}
            sx={{
                zIndex: 999,
                '& .MuiBackdrop-root': {
                    background: 'rgba(0, 0, 0, 0.75)'
                },
                '& .MuiPaper-root': {
                    width: '-webkit-fill-available',
                    padding: '50px 20px',
                    margin: 0,
                    top: '455px',
                    position: 'absolute',
                    background: 'rgba(0,0,0,0.0)',
                    boxShadow: 'none',
                    '@media (max-width:430px)': {
                        top: '685px'
                    }
                }
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                    sx={{
                        width: '50px',
                        height: '50px',
                        background: '#2D3037',
                        transform: 'rotate(45deg)',
                        borderRadius: '4px',
                        marginTop: '15px',
                        position: 'absolute',
                        top: 26,
                        right: '45%'
                    }}
                />
                <CardDialog title='Games' info='Here is list of availbale games' onClose={onClose} />
            </Box>
        </Dialog>
    );
};

export default GamesDialog;
