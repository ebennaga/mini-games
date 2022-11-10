/* eslint-disable no-unused-vars */
import Close from '@mui/icons-material/Close';
import { Typography, Dialog, Box } from '@mui/material';
import Button from 'components/Button/Index';
import Input from 'components/Input';
import React from 'react';

interface DialogPasswordProps {
    open: boolean;
    setOpen: any;
    form: any;
}

const DialogPassword: React.FC<DialogPasswordProps> = ({ form, open = true, setOpen }) => {
    return (
        <Dialog
            open={open}
            onClose={() => {
                setOpen(!open);
            }}
            fullWidth
        >
            <Box sx={{ padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', aligItems: 'center', width: '100%' }}>
                    <Box />
                    <Typography>Event Lorem Ipsum</Typography>
                    <Close
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                </Box>
                <Box sx={{ mt: '30px' }}>
                    <form
                        onSubmit={form.handleSubmit((data: any, e: any) => {
                            console.log(data);
                            form.setValue('password', '');
                        })}
                    >
                        <Input name='password' type='password' form={form} placeholder='Insert Password' />
                    </form>
                    <Box sx={{ mt: '30px' }}>
                        <Button type='submit' title='Confirm' backgoundColor='#A54CE5' color='white' />
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
};

export default DialogPassword;
