import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const PlayGameContainer = () => {
    const [soundGame, setSoundGame] = React.useState<any>('');

    const route = useRouter();

    const userState = useSelector((state: any) => state.webpage?.user?.user);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const soundData = localStorage.getItem('prizePlaySound');
            if (soundData) {
                setSoundGame(soundData);
            } else {
                setSoundGame('true');
            }
            window.history.replaceState({}, '', `/games/${route.query.id}/casual`);
        }
    }, []);

    const data: any = typeof window !== 'undefined' && `${window.location.origin}/games/${route.query.id}`;

    const buff = typeof window !== 'undefined' && Buffer.from(data);
    const base64data = typeof window !== 'undefined' && encodeURIComponent(buff.toString('base64'));

    if (!userState && !userState) {
        return <Box />;
    }
    return (
        <Box sx={{ width: '100%' }}>
            <iframe
                src={`${userState?.gameUrl}?sessionIDGame=${userState.sessionGame}&token=${userState?.api_token}&userID=${userState?.id}&isSound=${soundGame}&misc=${base64data}`}
                // src={`http://192.168.0.137/swords_web/?sessionIDGame=${userState.sessionGame}&token=${userState?.api_token}&userID=${userState?.id}&isSound=${soundGame}&misc=${base64data}`}
                style={{
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
