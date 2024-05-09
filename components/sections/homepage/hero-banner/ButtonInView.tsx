'use client';

import { InView } from 'react-intersection-observer';
import { useIsElementOutOfView } from '@/context/IsElementOutOfViewContext';
import Button from '@/components/ui/Button';

export function ButtonInView() {
    const { setIsElementOutOfView } = useIsElementOutOfView();

    return (
        <InView
            as='div'
            onChange={(inView) => setIsElementOutOfView(!inView)}
            threshold={0.99}
        >
            <Button
                value='Zarezerwuj'
                href='/zarezerwuj'
                styles='md:py-2 md:px-14 md:text-2xl py-1 px-8 text-lg'
            />
        </InView>
    );
}
