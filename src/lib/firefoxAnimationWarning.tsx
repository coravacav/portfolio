'use client';

export default function FirefoxAnimationWarning() {
    const isFirefox = typeof window !== 'undefined' && window.navigator.userAgent.includes('Firefox');

    if (!isFirefox) return null;

    return (
        <div
            className="fixed bottom-0 right-0 p-2 rounded-t rounded-l text-xs bg-gray-900 text-gray-300"
            title="It's not the website having a problem."
        >
            If you notice stuttering, Firefox has trouble rendering animations
        </div>
    );
}
