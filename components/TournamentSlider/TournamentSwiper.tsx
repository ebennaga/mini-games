import { Swiper } from 'swiper/react';
// import { Pagination } from 'swiper';
import React from 'react';

interface TournamentSwiperProps {
    children: any;
}

const TournamentSwiper: React.FC<TournamentSwiperProps> = ({ children }) => {
    return (
        <Swiper
            slidesPerView={1.2}
            spaceBetween={10}
            pagination={{
                clickable: true
            }}
            // modules={[Pagination]}
            className='mySwiper'
        >
            {children}
        </Swiper>
    );
};

export default TournamentSwiper;
