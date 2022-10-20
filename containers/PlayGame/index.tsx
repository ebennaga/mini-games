/* eslint-disable no-unused-vars */
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

const PlayGameContainer = () => {
    const userState = useSelector((state: any) => state.webpage?.user?.user);

    if (!userState) {
        return <Box />;
    }
    return (
        <Box sx={{ width: '100%' }}>
            <iframe
                src={`${userState?.gameUrl}?sessionIDGame=${userState.sessionGame}&token=${userState?.api_token}`}
                // src={
                //     `${gameDetail?.game_url}?=${sessionGame}` ||
                //     `http://prizeplay-minigames.s3-website.ap-southeast-3.amazonaws.com/swords?=${sessionGame}`
                // }
                // src='https://minigames.prizeplay.io/swords/'
                style={{
                    // border: '1px solid red',
                    // backgroundColor: 'red',
                    // position: 'absolute',
                    // top: 0,
                    // left: 0,
                    // bottom: 0,
                    // right: 0,
                    width: '100%',
                    height: '100vh',
                    padding: '0px'
                }}
                title='Prize Play || HopUp'
            />
        </Box>
    );
};

export default PlayGameContainer;
