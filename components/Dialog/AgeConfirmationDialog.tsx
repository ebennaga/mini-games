import { Box, ButtonBase, Dialog, Typography } from '@mui/material';
import React, { useState } from 'react';
import AgeConfirmation from 'components/AgeConfirmation';
import { useRouter } from 'next/router';

interface AgeConfirmationDialogProps {
    open: boolean;
    setOpen: any;
    form: any;
    nameDate: string;
    nameMonth: string;
    nameYear: string;
}

const AgeConfirmationDialog: React.FC<AgeConfirmationDialogProps> = ({ open, setOpen, form, nameDate, nameMonth, nameYear }) => {
    const dataDate = [
        { month: 'January', noMonth: 1, total: 31 },
        { month: 'February', noMonth: 2, total: form.watch(nameYear) % 4 === 0 ? 29 : 28 },
        { month: 'March', noMonth: 3, total: 31 },
        { month: 'April', noMonth: 4, total: 30 },
        { month: 'May', noMonth: 5, total: 31 },
        { month: 'June', noMonth: 6, total: 30 },
        { month: 'July', noMonth: 7, total: 31 },
        { month: 'August', noMonth: 8, total: 31 },
        { month: 'September', noMonth: 9, total: 30 },
        { month: 'October', noMonth: 10, total: 31 },
        { month: 'November', noMonth: 11, total: 30 },
        { month: 'December', noMonth: 12, total: 31 }
    ];

    const [errorDialog, setErrorDialog] = useState<boolean>(false);
    const router = useRouter();

    const handleClose = () => setOpen(false);

    const handleConfirmation = () => {
        const data = form.watch();
        const filterData = dataDate.filter((item: any) => item.month === data.month || item.noMonth === Number(data.month));
        const month = filterData[0]?.noMonth < 10 ? `0${filterData[0]?.noMonth}` : `${filterData[0]?.noMonth}`;
        const date = data.date < 10 ? `0${data.date}` : `${data.date}`;
        const birthday: any = `${data.year}-${month}-${date}`;
        const resBirthday = new Date(birthday);
        const ageDifMs = Date.now() - resBirthday.getTime();
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        if (age > 18) {
            setOpen(false);
            router.push(`${router.asPath}/confirmation`);
        } else {
            setOpen(false);
            setErrorDialog(true);
        }
    };

    return (
        <>
            <Dialog
                open={errorDialog}
                onClose={() => setErrorDialog(false)}
                sx={{
                    '& .MuiPaper-root': {
                        width: '100%',
                        padding: '36px 25px',
                        overflow: 'visible',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }}
            >
                <img src='/icons/error.svg' width='60px' height='60px' alt='failed' />
                <Typography component='h2' fontSize='24px' fontWeight={700} mt='21px'>
                    Error
                </Typography>
                <Typography component='p' fontSize='14px' fontWeight={600} sx={{ color: '#949494', textAlign: 'center' }}>
                    You’re not permitted to redeem the prize at this time.
                </Typography>
            </Dialog>
            <Dialog
                open={open}
                onClose={handleClose}
                sx={{ '& .MuiPaper-root': { width: '100%', padding: '36px 25px', overflow: 'visible' } }}
            >
                <Box textAlign='center'>
                    <Typography mb='18px' component='h2' fontSize='24px' fontWeight={700} sx={{ color: '#373737' }}>
                        Age Confirmation
                    </Typography>
                    <Typography mb='21px' component='p' fontSize='12px' fontWeight={500} sx={{ color: '#949494' }}>
                        Please enter your birth date to continue
                    </Typography>
                    <AgeConfirmation form={form} nameDate={nameDate} nameMonth={nameMonth} nameYear={nameYear} />
                    <ButtonBase
                        onClick={handleConfirmation}
                        sx={{
                            padding: '23px 0',
                            background: '#A54CE5',
                            borderRadius: '15px',
                            color: '#fff',
                            width: '100%',
                            marginTop: '50px'
                        }}
                    >
                        <Typography component='span' fontSize='14px' fontWeight={700}>
                            Confirm
                        </Typography>
                    </ButtonBase>
                </Box>
            </Dialog>
        </>
    );
};

export default AgeConfirmationDialog;
