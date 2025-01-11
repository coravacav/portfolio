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
			className="fixed right-0 bottom-0 z-10 rounded-l rounded-t border-t-2 border-l-2 border-neutral-950 bg-neutral-900 p-2 text-xs text-neutral-300"
			title="It's not the website having a problem."
		>
			If you notice stuttering, Firefox has trouble rendering animations
		</div>
	);
}
