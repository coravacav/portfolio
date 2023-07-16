'use client';

import { useEffect, useState } from 'react';

export default function FirefoxAnimationWarning() {
    const [isFirefox, setIsFirefox] = useState(false);

    useEffect(() => {
        setIsFirefox(window.navigator.userAgent.includes('Firefox'));
    }, []);

    if (!isFirefox) return null;

    return (
        <div
            className="fixed bottom-0 right-0 p-2 rounded-t rounded-l text-xs bg-neutral-900 text-neutral-300 z-10 border-t-2 border-l-2 border-neutral-950"
            title="It's not the website having a problem."
        >
            If you notice stuttering, Firefox has trouble rendering animations
        </div>
    );
}
