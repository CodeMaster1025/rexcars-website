import { iconProps } from '@/types/iconProps';

export default function FacebookIcon({ width, height }: iconProps) {
    return (
        <figure>
            <svg
                viewBox='0 0 128 128'
                xmlns='http://www.w3.org/2000/svg'
                width={width}
                height={height}
                className='fill-neutral-200 ease-in-out duration-200 hover:fill-blue-500 hover:cursor-pointer'
            >
                <title />
                <path d='M53.68,38.26v15.1H37.11V72H53.68v42H73.29V72H90l2-18.63H73.29V38.26c0-2.67,2.11-4,3-4.82,1.57-1.34,9.15-1.55,9.15-1.55h7.43V15a93.26,93.26,0,0,0-11.68-1C53.11,14,53.68,38.26,53.68,38.26Z' />
            </svg>
        </figure>
    );
}
