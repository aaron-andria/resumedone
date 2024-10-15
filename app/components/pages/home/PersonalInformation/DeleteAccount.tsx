'use client';
import Card from '@/app/components/ui/Core/Card/Card';
import CardContent from '@/app/components/ui/Core/Card/CardContent';
import { SubTitle } from '@/app/components/ui/Core/Card/Title';
import Link from 'next/link';
import FormCssModule from './form.module.css';
import { useState } from 'react';
export type formDataType = {
    agree: boolean;
};
export default function DeleteAccount() {
    const [formData, setFormData] = useState<formDataType>({
        agree: false,
    } as formDataType);
    const changeData = (e: any) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type == 'checkbox' ? checked : value,
        });
    };
    return (
        <div style={{ margin: '0px 0px' }}>
            <div
                className={FormCssModule.agree}
                style={{ margin: '0px 0px 32px 0px' }}>
                <input
                    onChange={changeData}
                    type={'checkbox'}
                    name={'agree'}
                    checked={formData.agree}
                />
                <p style={{ margin: '0px', color: 'var(--color-gray)', fontSize: '13px' }}>
                    Show my profile to serious employers on{' '}
                    <Link
                        href={'#'}
                        className="link">
                        hirethesbest.io
                    </Link>{' '}
                    for free
                </p>
            </div>
            <Card color="white">
                <CardContent>
                    <SubTitle>Delete account</SubTitle>
                    <p
                        className="text-medium"
                        style={{ lineHeight: '22px', fontSize: '15px' }}>
                        If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.
                    </p>
                    <Link
                        href={'#'}
                        className="text-gray text-bold"
                        style={{ lineHeight: '22px', color: 'var(--color-warning)', fontSize: '15px' }}>
                        Yes, Delete my account
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}
