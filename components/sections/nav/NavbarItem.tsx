import Link from 'next/link';

type navbarItemProps = {
    value: string;
    url: string;
    active: boolean;
    styles?: string;
};

export default function NavbarItem({
    value,
    url,
    styles,
    active,
}: navbarItemProps) {
    return (
        <li
            className={
                `${
                    active ? 'text-blue-primary' : 'text-neutral-200'
                } font-medium border-b-2 border-b-transparent hover:text-blue-primary hover:border-b-2 hover:border-b-blue-primary cursor-pointer transition-all ` +
                (styles ? styles : '')
            }
        >
            <Link href={url}>{value}</Link>
        </li>
    );
}
