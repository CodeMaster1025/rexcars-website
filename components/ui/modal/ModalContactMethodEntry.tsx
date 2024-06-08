type IModalContactMethodEntry = {
    children: React.ReactNode;
}

export default function ModalContactMethodEntry({ children }: IModalContactMethodEntry) {
    return (
        <li className='flex flex-row justify-between items-center w-full pb-4 group'>
            {children}
        </li>
    );
}