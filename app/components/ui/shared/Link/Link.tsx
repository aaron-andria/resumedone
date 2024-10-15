import classNames from 'classnames';
import Link from 'next/link';

export default function IconLink({ href, icon, children, isTitle = false, size = 'lg' }: { href: string; icon?: React.ReactElement; children: JSX.Element | string; isTitle?: boolean; size: string }) {
    return (
        <Link
            href={href}
            passHref
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '5px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                minHeight: size == 'lg' ? '32px' : '28px',
            }}>
            {icon && icon}
            <div
                style={{ marginTop: 'auto', marginBottom: 'auto' }}
                className={isTitle == true ? 'list-item-title' : 'list-item-text'}>
                {children}
            </div>
        </Link>
    );
}
