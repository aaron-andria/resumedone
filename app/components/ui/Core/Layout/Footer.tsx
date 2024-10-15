import Link from 'next/link';

export type NavProps = {
    text: string;
    href: string;
};
const navs: NavProps[] = [
    {
        text: 'Terms & Conditions',
        href: '#',
    },
    {
        text: 'Privacy Policy',
        href: '#',
    },
    {
        text: 'FAQ',
        href: '#',
    },
    {
        text: 'Contact Us',
        href: '#',
    },
];

export default function Footer() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '20px',
                padding: '20px 0px',
                gap: '20px',
                borderTop: '1px solid var(--color-gray-light)',
            }}>
            {navs.map((element: NavProps, index: number) => {
                return (
                    <Link
                        href={element.href}
                        key={index}
                        className="text-gray"
                        style={{
                            fontFamily: 'var(--font-gilroy-medium)',
                            fontSize: '14px',
                            color: ' #595964',
                        }}>
                        {element.text}
                    </Link>
                );
            })}
        </div>
    );
}
