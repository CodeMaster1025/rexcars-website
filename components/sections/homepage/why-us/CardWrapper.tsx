import { Children } from "react";

export default function CardWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const cardsNumber = Children.toArray(children).length;
    return (
        <div className={"flex flex-row justify-between mx-auto "}>
            {children}
        </div>
    );
}
