type navbarItemProps = {
    value: string;
    url: string;
    styles?: string;
};

export default function NavbarItem({ value, url, styles }: navbarItemProps) {
    
    return (
        <li className={`text-white font-medium border-b-2 border-b-transparent hover:text-blue-primary hover:border-b-2 hover:border-b-blue-primary cursor-pointer transition-all ` + (styles ? styles : "")}>
            {value}
        </li>
    );
}
