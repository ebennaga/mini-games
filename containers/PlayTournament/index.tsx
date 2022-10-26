import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const PlayTournamentContainer = () => {
    const [soundGame, setSoundGame] = React.useState<any>('');
    const [srcIframe, setSrcIframe] = React.useState<boolean>(true);

    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const router = useRouter();

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            window.history.replaceState({}, '', `/games/${router.query.id}/tournament/${router.query['id-tournament']}`);
            const soundData = localStorage.getItem('prizePlaySound');
            if (soundData) {
                setSoundGame(soundData);
            } else {
                setSoundGame('true');
            }
        }
    }, []);
    const data: any = typeof window !== 'undefined' && `${window.location.origin}/games/${router.query.id}`;

    const buff = typeof window !== 'undefined' && Buffer.from(data);
    const base64data = typeof window !== 'undefined' && encodeURIComponent(buff.toString('base64'));

    const handleLoad = () => {
        const aspath = router.asPath;
        const arr = aspath.split('/').slice(0, -1);
        if (srcIframe) {
            setSrcIframe(false);
        } else {
            router.push(`${arr.join('/')}`);
        }
    };

    if (!userState && !userState) {
        return <Box />;
    }
    return (
        <Box sx={{ width: '100%' }}>
            <iframe
                id='frameGame'
                onLoad={handleLoad}
                src={`${userState?.gameUrl}?sessionIDGame=${userState.sessionGame}&token=${userState?.api_token}&userID=${userState?.id}&isSound=${soundGame}&misc=${base64data}`}
                // src={`http://192.168.0.137/swords_web/?sessionIDGame=${userState.sessionGame}&token=${userState?.api_token}&userID=${userState?.id}&isSound=${soundGame}`}
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

export default PlayTournamentContainer;
