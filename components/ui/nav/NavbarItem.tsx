type navbarItemProps = {
    value: string;
    url: string;
};

export default function NavbarItem({ value, url }: navbarItemProps) {
    return (
        <li className='text-white font-medium border-b-2 border-b-transparent hover:text-[#1dbfe9] hover:border-b-2 hover:border-b-[#1dbfe9] cursor-pointer transition-all mx-6 '>
            {value}
        </li>
    );
}
