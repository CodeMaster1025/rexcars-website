"use client";

import { useEffect } from 'react';

export function useNavbarHeight() {
    useEffect(() => {
        
        const setOffset = () => {
            const navbar = document.querySelector('nav');
            const navbarHeight = navbar?.clientHeight;
            document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
        }

        setOffset();
        window.addEventListener('resize', setOffset);

        return () => {
            window.removeEventListener('resize', setOffset);
        }
    }, []);

} 