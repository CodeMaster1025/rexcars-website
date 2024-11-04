"use client";

import { cn } from '@/lib/utils';
import './marqueeText.styles.css';
import { useNavbarHeight } from '@/hooks/useNavbarHeight';

export interface MarqueeTextProps {
    words: string[];
    className?: string;
    speed?: number;
    ariaLabel?: string;
}

export default function MarqueeText({ 
    words, 
    className,
    speed = 1,
    ariaLabel = "Announcement banner"
}: MarqueeTextProps) {

    useNavbarHeight();
    
    return (
        <div 
            role="banner"
            aria-label={ariaLabel}
            className={cn(
                "sticky safe-marquee-top z-40",
                "w-full bg-neutral-800/50 backdrop-blur-sm",
                "h-8 flex items-center overflow-clip",
                className
            )}
        >
            <div className="marquee-text">
                <div className="marquee-text-track">
                    {/* First set */}
                    {words.map((word, index) => {
                        return (
                            <p key={"1" + index}>{word}</p>
                        );
                    })}

                    {/* Second set */}
                    {words.map((word, index) => {
                        return (
                            <p key={"2" + index} aria-hidden>{word}</p>
                        );
                    })}

                    {words.map((word, index) => {
                        return (
                            <p key={"3" + index} aria-hidden>{word}</p>
                        );
                    })}

                    {words.map((word, index) => {
                        return (
                            <p key={"4" + index} aria-hidden>{word}</p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}