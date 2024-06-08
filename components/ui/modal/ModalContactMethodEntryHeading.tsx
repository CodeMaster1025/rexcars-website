type IModalContactMethodEntryHeading = {
    value: string;
}

export default function ModalContactMethodEntryHeading({ value }: IModalContactMethodEntryHeading) {
    return (
        <h2 className='text-xl text-neutral-200 text-right group-hover:text-blue-primary ease-in-out duration-300'>{value}</h2>
    )
}