import { Dialog, Box } from '@mui/material';
import React from 'react';
import CardDialog from './CardDialog';

interface TournamentDialogProps {
    open: boolean;
    onClose: any;
}
const TournamentDialog: React.FC<TournamentDialogProps> = ({ open, onClose }) => {
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
                    top: '580px',
                    position: 'absolute',
                    background: 'rgba(0,0,0,0.0)',
                    boxShadow: 'none',
                    '@media (max-width:500px)': {
                        top: '505px'
                    },
                    '@media (max-width:430px)': {
                        top: '455px'
                    }
                }
            }}
        >
            <Box>
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
                <CardDialog
                    title='Tournaments'
                    info='Here is list of ongoing and next Tournament, you can see number of participate player, your rank and total points pool'
                    onClose={onClose}
                />
            </Box>
        </Dialog>
    );
};

export default TournamentDialog;
