'use client';

type typewriterTextProps = {
    strings: string[];
};

import Typewriter from 'typewriter-effect';

export default function TypewriterText({ strings }: typewriterTextProps) {
    return (
        <Typewriter
            component={'h1'}
            options={{
                strings: strings,
                loop: true,
                autoStart: true,
                cursor: '',
            }}
        />
    );
}
