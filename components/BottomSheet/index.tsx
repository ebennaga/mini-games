import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
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
import NavigationCard from 'components/NavigationCard';

interface BottomSheetProps {
    items: any;
    // eslint-disable-next-line no-unused-vars
    onConfirm: (value: string, type: string) => void;
    type: string;
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
const BottomSheetCustom: React.FC<BottomSheetProps> = ({ items, onConfirm, type }) => {
    const classes = useStyles();

    const [maxWidth, setMaxWidth] = useState('600px');
    const [value, setValue] = useState<string>('id');

    useEffect(() => {
        if (type === 'Contact Us') {
            setMaxWidth('500px');
        } else {
            setMaxWidth('600px');
        }
    });
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const getData: any = localStorage.getItem('prizePlay');
            if (getData) {
                const parseData = JSON.parse(getData);
                setValue(parseData.language);
            }
        }
    }, []);

    const open = useContext(OpenContext);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const handleClickContactUs = (isPhone: boolean, phone: string) => {
        onConfirm(value, type);
        if (isPhone) {
            window.open(`tel:${phone}`);
        }
    };

    return (
        <Dialog
            classes={{
                scrollPaper: classes.newPosOfDialog
            }}
            PaperProps={{ sx: { width: '100%', maxWidth: { maxWidth }, borderRadius: '15px', margin: 0 } }}
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
                        {type}
                    </Typography>
                    <IconButton edge='start' color='inherit' aria-label='close' onClick={() => onConfirm(value, type)}>
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {type === 'Contact Us' ? (
                <Box sx={{ padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {items.map((list: any, idx: number) => {
                        const isPhone = list.icon === '/icons/phone.svg';
                        return (
                            <Box key={idx} sx={{ borderBottom: '2px solid #F4F1FF', padding: '20px' }}>
                                {/* <NavigationCard icon={list.icon} title={list.title} onClick={() => onConfirm(value, type)} /> */}
                                <NavigationCard
                                    icon={list.icon}
                                    title={list.title}
                                    onClick={() => handleClickContactUs(isPhone, list.title)}
                                />
                            </Box>
                        );
                    })}
                    {/* <Typography
                        component='span'
                        sx={{
                            textAlign: 'center',
                            marginTop: '28px',
                            marginBottom: '14px',
                            lineHeight: '16px',
                            fontWeight: 400,
                            fontSize: '14px'
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography> */}
                </Box>
            ) : (
                <Box>
                    <RadioGroup value={value} name='radio-button-group' onChange={handleChange}>
                        {items.map((list: any, idx: number) => {
                            return (
                                <Box key={idx} sx={{ padding: '14px' }}>
                                    <FormControlLabel
                                        sx={{ fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}
                                        labelPlacement='start'
                                        value={list.value}
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
                                        label={list.title}
                                    />
                                    <Divider />
                                </Box>
                            );
                        })}
                    </RadioGroup>
                    <Box sx={{ marginLeft: '14px', marginRight: '14px' }}>
                        <ButtonBase
                            onClick={() => onConfirm(value, type)}
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
                </Box>
            )}
        </Dialog>
    );
};

export default BottomSheetCustom;
