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
                styles='py-2 px-14 text-2xl'
            />
        </InView>
    );
}
