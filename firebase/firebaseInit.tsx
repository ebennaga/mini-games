/* eslint-disable no-unused-vars */
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';

const firebaseConfig = {
    apiKey: 'AIzaSyBJVmJNjAa9ZBITfhvhQMV-UfbuLRCBGAg',
    authDomain: 'prize-play-2eb34.firebaseapp.com',
    projectId: 'prize-play-2eb34',
    storageBucket: 'prize-play-2eb34.appspot.com',
    messagingSenderId: '148099237563',
    appId: '1:148099237563:web:d7bf1df373e897ea190b9e'
};

// eslint-disable-next-line no-unused-vars
const initMyFirebase = () => {
    if (!getApps().length) {
        const app = initializeApp(firebaseConfig);

        const auth = getAuth(app);

        if (typeof window !== 'undefined') {
            if ('measurementId' in firebaseConfig) {
                const analytics = getAnalytics(app);
                const preformance = getPerformance(app);
            }
        }

        // console.log('initialized firebase');
    } else {
        // console.log('arleady initialized firebase');
    }
};

export default initMyFirebase;
