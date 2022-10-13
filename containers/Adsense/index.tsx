/* eslint-disable no-use-before-define */
import React from 'react';

const Adsense = () => {
    return (
        // <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        //     <div>
        //         <div id='page-content'>
        //             <div id='video-container'>
        //                 <video id='video-element' playsInline muted>
        //                     <source src='https://storage.googleapis.com/gvabox/media/samples/stock.mp4' />
        //                 </video>
        //                 <div id='ad-container' />
        //             </div>

        //             {/* <div id='adContainer' /> */}
        //             <Button id='play-button'>Play</Button>
        //         </div>
        //     </div>
        // </Box>
        <div id='mainContainer'>
            <div id='content'>
                <video id='contentElement' playsInline muted>
                    <source src='https://storage.googleapis.com/gvabox/media/samples/stock.mp4' />
                </video>
            </div>
            <div id='adContainer' />
        </div>
    );
};

export default Adsense;
