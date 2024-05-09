import {
    BanknotesIcon,
    CheckBadgeIcon,
    FaceSmileIcon,
} from '@heroicons/react/24/outline';

export enum CardIcon {
    CHECK,
    MONEY,
    SMILE,
}

type cardProps = {
    icon: CardIcon;
    heading: string;
    description: string;
};

export default function Card({ icon, heading, description }: cardProps) {
    let iconToRender;

    switch (icon) {
        case CardIcon.CHECK:
            iconToRender = (
                <CheckBadgeIcon className='text-blue-primary md:size-16 size-14 ' />
            );
            break;

        case CardIcon.MONEY:
            iconToRender = (
                <BanknotesIcon className='text-blue-primary md:size-16 size-14' />
            );
            break;

        case CardIcon.SMILE:
            iconToRender = (
                <FaceSmileIcon className='text-blue-primary md:size-16 size-14' />
            );
            break;

        default:
            iconToRender = null;
            break;
    }

    return (
        <div className='flex flex-col justify-center items-center mx-6  rounded-lg shadow-md p-4 hover:bg-neutral-900 hover:translate-y-[-10%] hover:scale-110 hover:shadow-neutral-900/50 ease-in-out duration-300'>
            {iconToRender}
            <h3 className='md:text-3xl text-xl text-neutral-200 py-4'>{heading}</h3>
            <span className='md:text-xl text-lg text-neutral-300 text-center pt-2 pb-8'>
                {description}
            </span>
        </div>
    );
}
