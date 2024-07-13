import React, { useEffect } from 'react';

const Adsense = () => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div style={{ display: 'block', textAlign: 'center', margin: '20px 0' }}>
            <ins
                className="adsbygoogle"
                style={{ display: 'inline-block', width: '728px', height: '90px' }}
                data-ad-client="ca-pub-xxxxxxxxxx"
                data-ad-slot="xxxxxxxxxx"
            ></ins>
        </div>
    );
};

export default Adsense;
