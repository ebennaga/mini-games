import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
// import { ArrowCircleLeft } from '@mui/icons-material';
// import { useRouter } from 'next/router';
import HeaderBack from 'components/HeaderBack';
import InboxSkeleton from './InboxSkeleton';

const Inbox = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    // const router = useRouter();
    const cards = [
        {
            id: 1,
            date: '30 Oktober 2022',
            image: '/images/dummy/banner-inbox-2.png'
        },
        {
            id: 2,
            date: '21 Oktober 2022',
            image: '/images/dummy/banner-inbox.png'
        },
        {
            id: 3,
            date: '20 Oktober 2022',
            image: '/images/dummy/banner-inbox-1.png'
        }
    ];

    if (isLoading) {
        return <InboxSkeleton />;
    }
    return (
        // <Box sx={{ width: '100%' }}>
        //     <Box padding='0px 20px'>
        //         <HeaderBack title='Inbox' />
        //     </Box>
        // </Box>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ padding: '20px' }}>
                <HeaderBack title='Inbox' />
            </Box>
            <Box padding='0px 20px'>
                {cards.map((item: any, idx: number) => (
                    <Box key={idx}>
                        <Typography sx={{ color: 'rgba(55, 55, 55, 0.5)', fontSize: '14px', my: 3, fontWeight: 400 }}>
                            {item.date}
                        </Typography>
                        <Box sx={{ width: '100%' }}>
                            <img src={item.image} alt='open-tourney' width='100%' />
                        </Box>
                        <Typography
                            sx={{
                                marginLeft: 1,
                                marginRight: '22px',
                                color: '#373737',
                                fontSize: '14px',
                                my: 3,
                                fontWeight: 600
                            }}
                        />
                        <Box sx={{ borderBottom: '1px dashed rgba(40, 38, 38, 0.1)', my: '20px' }} />
                    </Box>
                ))}
            </Box>
            {/* {cards.map((index: any) => {
                return (
                    <React.Fragment key={index.id}>
                        <Grid item xs={4}>
                            <Typography sx={{ color: 'rgba(55, 55, 55, 0.5)', fontSize: '14px', mt: 1, fontWeight: 400 }}>
                                {index.date}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <img
                                src={index.image}
                                width={375}
                                height={203}
                                alt='open-tourney'
                                style={{ borderRadius: '12px', marginLeft: -2, marginRight: '22px' }}
                            />

                            <Typography
                                sx={{
                                    marginLeft: 1,
                                    marginRight: '22px',
                                    color: '#373737',
                                    fontSize: '14px',
                                    mt: 1,
                                    fontWeight: 600,
                                    lineHeight: '16px'
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
                                odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </Typography>
                        </Grid>
                        <Box sx={{ borderBottom: '1px dotted black' }} />
                    </React.Fragment>
                );
            })} */}
        </Box>
    );
};

export default Inbox;
