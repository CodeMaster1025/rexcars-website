import EngineIcon from '@/components/icons/EngineIcon';
import TransmissionIcon from '@/components/icons/TransmissionIcon';
import WheelIcon from '@/components/icons/WheelIcon';
import { UsersIcon } from '@heroicons/react/24/outline';

export enum carSpecyficationIcon {
    ENGINE,
    TRANSMISSION,
    DRIVETRAIN,
    SEATS,
    TBI,
}

export type renderIconArgs = {
    iconType: carSpecyficationIcon;
    width?: number;
    height?: number;
    size?: number;
    color?: string;
};

export const renderIcon = ({
    iconType,
    width,
    height,
    size,
    color,
}: renderIconArgs) => {
    // Conditionally render icon with specified iconType, dimensions or size, and/or color
    let iconToRender;
    switch (iconType) {
        case carSpecyficationIcon.ENGINE:
            if (width !== undefined && height !== undefined) {
                iconToRender = (
                    <EngineIcon
                        width={width}
                        height={height}
                    />
                );
            } else {
                iconToRender = null;
                console.error('Wrong arguments for this icon type.');
            }
            break;

        case carSpecyficationIcon.TRANSMISSION:
            if (width !== undefined && height !== undefined) {
                iconToRender = (
                    <TransmissionIcon
                        width={width}
                        height={height}
                    />
                );
            } else {
                iconToRender = null;
                console.error('Wrong arguments for this icon type.');
            }
            break;

        case carSpecyficationIcon.DRIVETRAIN:
            if (width !== undefined && height !== undefined) {
                iconToRender = (
                    <WheelIcon
                        width={width}
                        height={height}
                    />
                );
            } else {
                iconToRender = null;
                console.error('Wrong arguments for this icon type.');
            }
            break;

        case carSpecyficationIcon.SEATS:
            if (size !== undefined && color !== undefined) {
                iconToRender = (
                    <UsersIcon className={`size-${size} text-${color}`} />
                );
            } else {
                iconToRender = null;
                console.error('Wrong arguments for this icon type.');
            }
            break;

        default:
            iconToRender = null;
            break;
    }

    // return the result
    return iconToRender;
};
