import CardCssModule from './Card.module.css';
export function Title({ children }: { children: string }) {
    return <h4 className={CardCssModule.title}>{children}</h4>;
}
export function SubTitle({ children }: { children: string }) {
    return (
        <h4
            style={{ fontSize: '17px', lineHeight: '24px', color: '#000', fontFamily: 'var(--font-gilroy-bold)' }}
            className={CardCssModule.title}>
            {children}
        </h4>
    );
}
