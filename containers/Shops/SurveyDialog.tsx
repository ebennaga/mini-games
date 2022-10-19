/* eslint-disable no-nested-ternary */
import React from 'react';
import { Box, Typography, Dialog, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import Input from 'components/Input';
import Button from 'components/Button/Index';

interface SelectGameTypeProps {
    form: any;
    name: string;
}

const SelectGameType: React.FC<SelectGameTypeProps> = ({ form, name }) => {
    const [type, setType] = React.useState('');
    const menuItem = [
        { value: 1, title: 'Real Time Strategy(RTS)' },
        { value: 2, title: 'First Person Shooter(FPS)' },
        { value: 3, title: 'Role Playing Games RPG' },
        { value: 4, title: 'Simulation' },
        { value: 5, title: 'Arcade' }
    ];
    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };
    return (
        <Controller
            control={form.control}
            name={name}
            render={() => {
                return (
                    <FormControl fullWidth>
                        <Select
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                padding: '0px 5px',
                                backgroundColor: '#F4F1FF',
                                borderRadius: '15px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'
                                },
                                '& .MuiSvgIcon-root': {
                                    color: '#A54CE5',
                                    position: 'relative',
                                    zIndex: 9
                                }
                            }}
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={type}
                            onChange={handleChange}
                            displayEmpty
                        >
                            <MenuItem disabled value=''>
                                <Typography sx={{ color: '#9A9A9B', fontSize: '14px', fontWeight: 600 }}>Game Type</Typography>
                            </MenuItem>
                            {menuItem.map((item: any) => (
                                <MenuItem value={item.value}>
                                    <Typography sx={{ color: '#9A9A9B', fontSize: '14px', fontWeight: 600 }}>{item.title}</Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                );
            }}
        />
    );
};

interface SurveyDialogProps {
    open: any;
    setOpenDialog: any;
}

const SurveyDialog: React.FC<SurveyDialogProps> = ({ open, setOpenDialog }) => {
    const form = useForm({
        mode: 'all',
        defaultValues: {
            prize: ''
        }
    });
    const [isConfirmed, setIsConfirmed] = React.useState<boolean>(false);
    return (
        <Dialog
            open={open}
            sx={{
                '& .MuiPaper-root': {
                    borderRadius: '25px'
                }
            }}
            onClose={() => {
                setOpenDialog(!open);
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    p: '20px',
                    maxWidth: { sm: '500px', xs: '300px' },
                    width: { xs: '270px', sm: '500px' }
                }}
            >
                {!isConfirmed ? (
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box />
                            <Typography sx={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>Quick Survey</Typography>
                            <Close
                                onClick={() => {
                                    setOpenDialog(!open);
                                }}
                            />
                        </Box>
                        <Box sx={{ mt: '12px' }}>
                            <img src='/images/img-survey.png' alt='img-survey' />
                        </Box>
                        <Box sx={{ textAlign: 'start', mt: '15px' }}>
                            <Typography sx={{ fontSize: '14px', color: '#373737', fontWeight: 600 }}>
                                What prizes do you expect form us ?
                            </Typography>
                            <Box sx={{ my: '10px' }}>
                                <Input name='prize' form={form} placeholder='Prize Name' />
                            </Box>
                            <Typography sx={{ fontSize: '14px', color: '#373737', fontWeight: 600 }}>
                                What type of game you like to play ?
                            </Typography>
                            <Box sx={{ mt: '14px' }}>
                                <SelectGameType form={form} name='type' />
                            </Box>
                            <Box sx={{ mt: '20px' }}>
                                <Button
                                    onClick={() => {
                                        setIsConfirmed(!isConfirmed);
                                    }}
                                    title='Confirm'
                                    backgoundColor='#A54CE5'
                                    color='white'
                                />
                            </Box>
                        </Box>
                    </>
                ) : (
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box />
                            <Typography sx={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Thank You</Typography>
                            <Close
                                onClick={() => {
                                    setOpenDialog(!open);
                                }}
                            />
                        </Box>
                        <Box sx={{ padding: '40px' }}>
                            <img src='/images/img-confirmed.png' alt='img-confirmed' />
                        </Box>
                    </Box>
                )}
            </Box>
        </Dialog>
    );
};

export default SurveyDialog;
