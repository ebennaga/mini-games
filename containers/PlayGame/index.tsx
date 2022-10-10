import React from 'react';

const PlayGameContainer = () => {
    return (
        <iframe
            src='https://verdantegames.com/Hopup/'
            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%', border: 'none' }}
            title='Prize Play'
            allowFullScreen
        />
    );
};

export default PlayGameContainer;
