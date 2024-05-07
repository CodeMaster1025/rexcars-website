import { iconProps } from '@/types/iconProps';
import Link from 'next/link';

export default function InstagramIcon({ width, height }: iconProps) {
    return (
        <figure>
            <Link
                href='https://www.instagram.com/rex_cars_wypozyczalnia'
                rel='noopener norefferer'
                target='_blank'
            >
                <svg
                    viewBox='0 0 128 128'
                    xmlns='http://www.w3.org/2000/svg'
                    width={width}
                    height={height}
                    className='fill-neutral-200 ease-in-out duration-200 hover:cursor-pointer hover:fill-[#F56040]'
                >
                    <title />
                    <path d='M83,23a22,22,0,0,1,22,22V83a22,22,0,0,1-22,22H45A22,22,0,0,1,23,83V45A22,22,0,0,1,45,23H83m0-8H45A30.09,30.09,0,0,0,15,45V83a30.09,30.09,0,0,0,30,30H83a30.09,30.09,0,0,0,30-30V45A30.09,30.09,0,0,0,83,15Z' />
                    <path d='M90.14,32a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,90.14,32Z' />
                    <path d='M64.27,46.47A17.68,17.68,0,1,1,46.6,64.14,17.7,17.7,0,0,1,64.27,46.47m0-8A25.68,25.68,0,1,0,90,64.14,25.68,25.68,0,0,0,64.27,38.47Z' />
                </svg>
            </Link>
        </figure>
    );
}
