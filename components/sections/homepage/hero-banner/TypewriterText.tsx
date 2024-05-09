'use client';

import Typewriter from 'typewriter-effect';

type typewriterTextProps = {
    strings: string[];
};

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
