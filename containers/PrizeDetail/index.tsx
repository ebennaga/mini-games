import { Box, Typography, Divider, Grid } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Button from 'components/Button/Index';
import Paragraph from 'components/Paragraph';
import NotifDialog from 'components/Dialog/notifDialog';
import AgeConfirmationDialog from 'components/Dialog/AgeConfirmationDialog';
import { useForm } from 'react-hook-form';

const PrizeDetailContainer = () => {
    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState<boolean>(false);
    const [dialogConfirm, setDialogConfirm] = React.useState<boolean>(false);

    const form = useForm({
        mode: 'all',
        defaultValues: {
            date: new Date().getDate() || '',
            month: new Date().getMonth()?.toLocaleString() || '',
            year: new Date().getFullYear() || ''
        }
    });

    const point = 90_000;
    const prize = 10_000;

    const handleReedem = () => {
        if (point < prize) {
            return setOpen(!open);
        }
        return setDialogConfirm(true);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                padding='25px'
                sx={{
                    borderBottom: '1px solid rgba(148, 148, 148, 0.35)',
                    mb: 2,
                    position: 'sticky',
                    top: -1,
                    backgroundColor: 'white',
                    zIndex: 999,
                    width: '-webkit-fill-available'
                }}
            >
                <Header isShops hrefBack='/shops' isBack point={point} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box padding='10px 20px'>
                <Box sx={{ backgroundColor: '#F4F1FF', padding: '20px', borderRadius: '10px' }}>
                    <img src='/images/ps5-3.png' alt='ps5-icon' style={{ width: '100%' }} />
                </Box>
                <Box sx={{ mt: '15px' }}>
                    <Grid container justifyContent='space-between'>
                        <Grid item xs={4}>
                            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <Box>
                                    <img src='/images/point-shops.png' alt='pointshops' />
                                </Box>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>{prize}</Typography>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={1}
                            onClick={() => {
                                setIsFavorite(!isFavorite);
                            }}
                        >
                            {isFavorite ? (
                                <Favorite sx={{ color: 'red', cursor: 'pointer' }} />
                            ) : (
                                <FavoriteBorder sx={{ color: '#949494', cursor: 'pointer' }} />
                            )}
                        </Grid>
                    </Grid>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>Playstation 5</Typography>
                    <Typography sx={{ fontWeight: '600', fontSize: '12px' }}>Lorem ipsum dolor sit consectetur adipiscing</Typography>
                </Box>
            </Box>
            <Divider sx={{ my: '25px' }} />
            <Box padding='20px 20px' position='relative'>
                <Paragraph
                    title='Highlight'
                    paragraph=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                />
                <Paragraph
                    title='Description'
                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                />
                <Box sx={{ mb: '180px' }}>
                    <Paragraph
                        title='Terms and Conditions'
                        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />
                </Box>
                <Box sx={{ position: 'sticky', bottom: '20px', zIndex: 0 }}>
                    <Button onClick={handleReedem} title='Reedem' backgoundColor='#A54CE5' color='white' />
                </Box>
            </Box>
            <NotifDialog
                setOpenDialog={setOpen}
                open={open}
                body='You don’t have Points in your balance. 
Play Tournament and get points to continue'
            />
            <AgeConfirmationDialog
                form={form}
                nameDate='date'
                nameMonth='month'
                nameYear='year'
                open={dialogConfirm}
                setOpen={setDialogConfirm}
            />
        </Box>
    );
};

export default PrizeDetailContainer;
