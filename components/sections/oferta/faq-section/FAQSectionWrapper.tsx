export default function FAQSectionWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <ul className='flex flex-col'>{children}</ul>;
}
