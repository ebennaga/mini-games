import React from 'react';
import dynamic from 'next/dynamic';

const TestContiainer = dynamic(() => import('containers/TestContiainer'));

const Page = () => {
    return (
        <div>
            <TestContiainer />
        </div>
    );
};

export default Page;
