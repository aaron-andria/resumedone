import Link from 'next/link';

export default function FeedBack() {
    return (
        <>
            <p style={{ color: 'var(--color-gray)' }}>
                <Link
                    href={'#'}
                    className={'link'}>
                    Get in touch with our support team
                </Link>{' '}
                if you have any question or want to leave some feedback. <br /> We’ll be happy to hear from you.
            </p>
        </>
    );
}
