import React, { useContext } from 'react';
import {
    AppBar,
    ButtonBase,
    Dialog,
    Box,
    Divider,
    FormControlLabel,
    IconButton,
    Radio,
    RadioGroup,
    Toolbar,
    Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import OpenContext from 'hooks/useContext';

interface BottomSheetProps {
    items: any;
    onConfirm: () => void;
}
const useStyles = makeStyles({
    newPosOfDialog: {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        display: 'flex',
        height: 'fit-content'
    }
});
const BottomSheetCustom: React.FC<BottomSheetProps> = ({ items, onConfirm }) => {
    const classes = useStyles();

    const open = useContext(OpenContext);

    return (
        <Dialog
            classes={{
                scrollPaper: classes.newPosOfDialog
            }}
            PaperProps={{ sx: { width: '100%', maxWidth: '600px', borderRadius: '15px', margin: 0 } }}
            open={open}
            // onClose={}
        >
            <AppBar sx={{ position: 'relative', background: 'white', color: 'black', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        fontSize='14px'
                        lineHeight='14px'
                        textAlign='center'
                        fontWeight={700}
                        component='span'
                    >
                        Choose Language
                    </Typography>
                    <IconButton edge='start' color='inherit' aria-label='close' onClick={onConfirm}>
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <RadioGroup defaultValue='English' name='radio-button-group'>
                {items.map((list: any, idx: number) => {
                    return (
                        <Box key={idx} sx={{ padding: '14px' }}>
                            <FormControlLabel
                                sx={{ fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}
                                labelPlacement='start'
                                value={list}
                                control={
                                    <Radio
                                        sx={{
                                            marginRight: '20px',
                                            color: 'grey',
                                            '&.Mui-checked': {
                                                color: '#A54CE5'
                                            }
                                        }}
                                    />
                                }
                                label={list}
                            />
                            <Divider />
                        </Box>
                    );
                })}
            </RadioGroup>
            <Box sx={{ marginLeft: '14px', marginRight: '14px' }}>
                <ButtonBase
                    onClick={onConfirm}
                    sx={{ background: '#A54CE5', borderRadius: '15px', width: '100%', marginTop: '27px', marginBottom: '27px' }}
                >
                    <Typography
                        component='span'
                        fontSize='14px'
                        paddingTop='14px'
                        paddingBottom='14px'
                        fontWeight={700}
                        sx={{ color: '#ffff' }}
                    >
                        Confirm
                    </Typography>
                </ButtonBase>
            </Box>
        </Dialog>
    );
};

export default BottomSheetCustom;
