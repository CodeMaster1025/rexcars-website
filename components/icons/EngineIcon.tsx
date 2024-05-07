import { iconProps } from '@/types/iconProps';

export default function EngineIcon({ width, height }: iconProps) {
    return (
        <svg
            height={height}
            width={width}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 511.999 511.999'
            className='fill-blue-secondary stroke-1'
        >
            <path
                d='M494.32,196.801l-4.858-8.131h-85.516v39.564h-8.557v-57.371h-44.32l-28.138-24.95h-46.53v-22.695h14.966V89.827H172.742
			v33.391h14.966v22.695h-48.443l-28.138,24.95H55.791v16.696v66.236h-22.4v-42.616H0v118.625h33.391v-42.617h22.4v66.236v16.696
			h83.474l58.709,52.054h197.414v-58.444h8.557v39.565h85.516l4.858-8.132c1.81-3.027,17.68-31.537,17.68-99.181
			S496.13,199.829,494.32,196.801z M221.101,123.22h21.909v22.695h-21.909V123.22z M468.927,369.902h-31.59v-39.565h-75.34v58.444
			H210.646l-58.709-52.054H89.183V204.255h34.617l28.138-24.95h158.32l28.138,24.95h23.601v57.371h75.34v-39.564h31.59
			c3.873,11.386,9.681,34.956,9.681,73.921C478.609,334.947,472.801,358.516,468.927,369.902z'
            />
        </svg>
    );
}
