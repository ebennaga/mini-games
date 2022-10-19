/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box } from '@mui/material';
import useAPICaller from 'hooks/useAPICaller';
import { useRouter } from 'next/router';
import useNotify from 'hooks/useNotify';

const PlayGameContainer = () => {
    const { fetchAPI } = useAPICaller();
    const notify = useNotify();
    const [sessionGame, setSessionGame] = useState();
    const router = useRouter();
    const webhookGames = async () => {
        const response = await fetchAPI({
            method: 'POST',
            endpoint: `webhook/game-sessions`,
            data: {
                game_id: router.query.id
            }
        });
        console.log('response', response);
        try {
            if (response.status === 200) {
                setSessionGame(response.data.data);
            } else {
                notify('failed error', 'error');
            }
        } catch (e) {
            console.log('failed', e);
        }
    };
    React.useEffect(() => {
        webhookGames();
    }, []);
    return (
        <Box sx={{ width: '100%' }}>
            <iframe
                // src='https://verdantegames.com/Hopup/'
                src='https://aesthetic-kleicha-2fce21.netlify.app/'
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
