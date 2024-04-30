type navbarDividerProps = {
    margin: string;
};

export default function NavbarDivider({ margin }: navbarDividerProps) {
    return <li className={'text-neutral-500 font-medium ' + margin}>|</li>;
}
