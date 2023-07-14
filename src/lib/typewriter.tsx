'use client';

import React, { useState, useEffect } from 'react';

const averageTimeout = 80;
const deviation = 10;

export default function Typewriter({
    disable,
    text,
    onFinished,
}: {
    disable?: boolean;
    text: string;
    onFinished?: () => void;
}) {
    const [typewriterTextIndex, setTypewriterTextIndex] = useState(disable ? text.length : 0);

    useEffect(() => {
        let timeoutId;

        const typeNextChar = () => {
            setTypewriterTextIndex((oldIndex) => {
                clearTimeout(timeoutId);
                const newIndex = oldIndex + 1;

                if (newIndex < text.length) {
                    let timeout = Math.random() * deviation + averageTimeout;
                    // Pause extra on a newline
                    if (text[newIndex - 1] === '\n') {
                        timeout += 2000;
                    }
                    timeoutId = setTimeout(typeNextChar, timeout);
                }

                return newIndex;
            });
        };

        timeoutId = setTimeout(typeNextChar, 200);

        return () => clearTimeout(timeoutId);
    }, [text]);

    useEffect(() => {
        if (typewriterTextIndex >= text.length) {
            onFinished?.();
        }
    }, [typewriterTextIndex]);

    return (
        <>
            <span className="whitespace-pre-line">{text.substring(0, typewriterTextIndex)}</span>
            <span className="whitespace-pre-line text-transparent">{text.substring(typewriterTextIndex)}</span>
        </>
    );
}
