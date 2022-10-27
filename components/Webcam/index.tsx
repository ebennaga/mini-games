import { Box, ButtonBase } from '@mui/material';
import React from 'react';
import Webcam from 'react-webcam';

interface WebcamScreenProps {
    setSelectedAvatar: any;
    openCamera: any;
    dialog: any;
}

const WebcamScreen: React.FC<WebcamScreenProps> = ({ setSelectedAvatar, openCamera, dialog }) => {
    const webcamRef: any = React.useRef(null);
    // const [imgSrc, setImgSrc] = React.useState(null);
    const [cameraPosition, setCameraPosition] = React.useState<any>('user');

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        // setImgSrc(imageSrc);
        setSelectedAvatar(imageSrc);
        openCamera(false);
        dialog(false);
    }, [webcamRef, setSelectedAvatar, openCamera]);

    const videoConstraints = {
        facingMode: cameraPosition
    };

    const handleChange = () => {
        if (cameraPosition === 'user') {
            setCameraPosition({ exact: 'environment' });
        } else {
            setCameraPosition('user');
        }
    };

    return (
        <>
            <Webcam audio={false} ref={webcamRef} screenshotFormat='image/jpeg' videoConstraints={videoConstraints} />
            <Box sx={{ margin: 'auto' }}>
                <ButtonBase sx={{ background: '#A54CE5', padding: '8px', color: '#fff', borderRadius: '8px', mr: 2 }} onClick={capture}>
                    Capture photo
                </ButtonBase>
                <ButtonBase sx={{ background: '#A54CE5', padding: '8px', color: '#fff', borderRadius: '8px' }} onClick={handleChange}>
                    Change camera
                </ButtonBase>
            </Box>
            {/* {imgSrc && <img src={imgSrc} alt='gambar' />} */}
        </>
    );
};

export default WebcamScreen;
