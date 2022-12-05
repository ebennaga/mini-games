import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper';
import React from 'react';

interface GameSwiperProps {
    children: any;
}

const GameSwiper: React.FC<GameSwiperProps> = ({ children }) => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={0}
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

export default GameSwiper;
