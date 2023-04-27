import { CSSProperties } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

type MenuItem = {
    text: string,
    href: string,
}

export const ActiveLink: React.FC<MenuItem> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={href} style={asPath === href ? style : undefined}>
            {text}
        </Link>
    );
};



