/* eslint-disable no-undef */
import React, { useEffect } from 'react';

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        adsbygoogle: any;
    }
}

interface GoogleAdsProps {
    currentPath: any;
}

const GoogleAds: React.FC<GoogleAdsProps> = ({ currentPath }) => {
    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (err: any) {
            console.log('errorads', err.message);
        }
    }, [currentPath]);

    return (
        <div>
            <ins
                className='adsbygoogle'
                style={{ display: 'inline-block', border: '1px solid red', minHeight: '10vh', minWidth: '50vw' }}
                data-ad-client='ca-pub-6117296389444443'
                data-ad-slot='7847289836'
                data-ad-format='auto'
                data-full-width-responsive='true'
                data-adtest='on'
            />
            {/* <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
        </div>
    );
};

export default GoogleAds;
