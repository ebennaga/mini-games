import { Box, ButtonBase } from '@mui/material';
// import { useRouter } from 'next/router';
import React from 'react';
import Slider from 'react-slick';

interface EventCarouselProps {
    customMaxWidth?: string;
}

const EventCarousel: React.FC<EventCarouselProps> = ({ customMaxWidth }) => {
    const settings = {
        className: 'center',
        // centerMode: true,
        infinite: false,
        centerPadding: '60px',
        slidesToShow: 1.2,
        speed: 500,
        dots: true,
        swipeToSlide: true
    };

    // const router = useRouter();

    return (
        <Box
            sx={{
                margin: 'auto',
                height: '200px',
                '@media (max-width:430px)': {
                    height: '150px'
                },
                '@media (max-width:399px)': {
                    height: '140px'
                },
                '@media (max-width:375px)': {
                    height: '130px'
                }
            }}
        >
            <Box
                sx={{
                    '& .slick-slider': { maxWidth: customMaxWidth || '110vw', width: '100%' },
                    '& .slick-arrow': { display: 'none' },
                    '& .slick-list': {
                        height: '200px',
                        '@media (max-width:599px)': {
                            height: '190px',
                            '@media (max-width:430px)': {
                                height: '150px'
                            },
                            '@media (max-width:399px)': {
                                height: '140px'
                            },
                            '@media (max-width:375px)': {
                                height: '130px'
                            }
                        }
                    },
                    '& .slick-dots li': { width: '5px' },
                    '& .slick-track': { height: '180px' },
                    '& .slick-cloned': { marginLeft: '10px' },
                    '& .slick-dots': {
                        '& .slick-active button:before': {
                            color: '#A54CE5'
                        },
                        '& button:before': {
                            fontSize: '10px'
                        }
                    }
                }}
            >
                {/* <Slider {...settings}>
                    {data.map((item: any) => {
                        return (
                            <Box key={item.id}>
                                <ButtonBase
                                    onClick={() => router.push(item.link)}
                                    sx={{
                                        background: `url(${item.image_url}), url(${'/images/img_error_bg.png'})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        // width: '282px',
                                        width: '90%',
                                        // height: '154px',
                                        height: { xs: '154px', sm: '200px' },
                                        borderRadius: '22px',
                                        '@media (max-width:430px)': {
                                            height: '140px'
                                        },
                                        '@media (max-width:399px)': {
                                            height: '130px'
                                        },
                                        '@media (max-width:375px)': {
                                            height: '120px'
                                        }
                                    }}
                                />
                            </Box>
                        );
                    })}
                </Slider> */}
                <Slider {...settings}>
                    <Box>
                        <ButtonBase
                            sx={{
                                background: `url(${'/images/home_banner1.png'}), url(${'/images/img_error_bg.png'})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                // width: '282px',
                                width: '90%',
                                // height: '154px',
                                height: { xs: '154px', sm: '200px' },
                                borderRadius: '22px',
                                '@media (max-width:430px)': {
                                    height: '140px'
                                },
                                '@media (max-width:399px)': {
                                    height: '130px'
                                },
                                '@media (max-width:375px)': {
                                    height: '120px'
                                }
                            }}
                        />
                    </Box>
                    <Box>
                        <ButtonBase
                            sx={{
                                background: `url(${'/images/home_banner2.png'}), url(${'/images/img_error_bg.png'})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                // width: '282px',
                                width: '90%',
                                // height: '154px',
                                height: { xs: '154px', sm: '200px' },
                                borderRadius: '22px',
                                '@media (max-width:430px)': {
                                    height: '140px'
                                },
                                '@media (max-width:399px)': {
                                    height: '130px'
                                },
                                '@media (max-width:375px)': {
                                    height: '120px'
                                }
                            }}
                        />
                    </Box>
                    <Box>
                        <ButtonBase
                            sx={{
                                background: `url(${'/images/home_banner3.png'}), url(${'/images/img_error_bg.png'})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                // width: '282px',
                                width: '90%',
                                // height: '154px',
                                height: { xs: '154px', sm: '200px' },
                                borderRadius: '22px',
                                '@media (max-width:430px)': {
                                    height: '140px'
                                },
                                '@media (max-width:399px)': {
                                    height: '130px'
                                },
                                '@media (max-width:375px)': {
                                    height: '120px'
                                }
                            }}
                        />
                    </Box>
                </Slider>
            </Box>
        </Box>
    );
};

export default EventCarousel;
