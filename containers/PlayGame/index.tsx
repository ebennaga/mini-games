/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box } from '@mui/material';
import useAPICaller from 'hooks/useAPICaller';
import { useRouter } from 'next/router';
import useNotify from 'hooks/useNotify';
import { useSelector } from 'react-redux';

const PlayGameContainer = () => {
    const { fetchAPI } = useAPICaller();
    const notify = useNotify();

    const [sessionGame, setSessionGame] = useState();
    const [gameDetail, setGameDetail] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const userState = useSelector((state: any) => state.webpage?.user?.user);

    const router = useRouter();

    const getGameDetail = async () => {
        const response = await fetchAPI({
            method: 'GET',
            endpoint: `games/${router.query.id}`
        });
        if (response.status === 200) {
            setGameDetail(response.data.data);
        } else {
            notify('failed data', 'e');
        }
    };
    const webhookGames = async () => {
        const response = await fetchAPI({
            method: 'POST',
            endpoint: `webhook/game-sessions`,
            data: {
                game_id: router.query.id
            }
        });
        try {
            if (response.status === 200) {
                setSessionGame(response.data.data);
            } else {
                notify('failed error', 'error');
            }
        } catch (e: any) {
            notify(e.message, 'error');
        }
    };
    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await webhookGames();
            await getGameDetail();
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <iframe
                src={`${gameDetail?.game_url}?sessionIDGame=${sessionGame}&token=${userState?.api_token}&isSound=${false}`}
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
