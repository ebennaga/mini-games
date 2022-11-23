import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CloseIcon from '@mui/icons-material/Close';
// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

interface IAdvertiseDialog {
    open: boolean;
    setOpen: any;
}

const AdvertiseDialog: React.FC<IAdvertiseDialog> = ({ open, setOpen }) => {
    const handleClose = () => {
        const local: any = localStorage.getItem('popUpBanner');
        const resLocal: any = JSON.parse(local);

        console.log('reslocal', resLocal);
        resLocal.isShow = false;
        const date = new Date();
        resLocal.expires = date.getDate() + 1;
        localStorage.setItem('popUpBanner', JSON.stringify(resLocal));
        setOpen(false);
    };
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { background: 'none' } }}>
            <DialogTitle>
                <IconButton sx={{ float: 'right' }} edge='start' color='inherit' aria-label='close' onClick={handleClose}>
                    <CloseIcon sx={{ color: 'white' }} />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay
                    pagination={{ clickable: true }}
                    style={{ paddingBottom: '2rem' }}
                >
                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src='/images/banner_welcome_1.png' alt='banner 1' loading='lazy' />
                    </SwiperSlide>
                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src='/images/banner_welcome_2.png' alt='banner 2' loading='lazy' />
                    </SwiperSlide>
                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src='/images/banner_welcome_3.png' alt='banner 3' loading='lazy' />
                    </SwiperSlide>
                </Swiper>
            </DialogContent>
        </Dialog>
    );
};

export default AdvertiseDialog;
