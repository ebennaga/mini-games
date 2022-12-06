import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper';
import React from 'react';

interface ShopsSwiperProps {
    children: any;
}

const ShopsSwiper: React.FC<ShopsSwiperProps> = ({ children }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className='mySwiper'
        >
            {children}
        </Swiper>
    );
};

export default ShopsSwiper;
