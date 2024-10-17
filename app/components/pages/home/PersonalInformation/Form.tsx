'use client';
import Input from '@/app/components/ui/shared/form/input/Input';
import FormCssModule from './form.module.css';
import RoundedImage from '@/app/components/ui/shared/Image/RoundedImage';
import Link from 'next/link';
import { Button } from '@/app/components/ui/shared/Button/Button';
import { useState } from 'react';
export type formDataType = {
    first_name?: string;
    last_name?: string;
    city?: string;
    postal_code?: string;
    address?: string;
    email?: string;
    phone?: string;
    password?: string;
    agree: boolean;
};
export default function PersonalInformationForm() {
    const [formData, setFormData] = useState<formDataType>({
        first_name: 'Petter',
        last_name: 'Cetera',
        city: 'London',
        postal_code: 'E2 4XF',
        address: '123 Example',
        email: 'petter@gmail.com',
        phone: '+442223334444',
        password: 'password',
        agree: false,
    } as formDataType);
    
    const checkIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none">
            <g clip-path="url(#clip0_4916_510)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.93931 11.6569L6.93934 11.6568L6.93936 11.6569L11.8891 6.70711C12.2796 6.31658 12.2796 5.68342 11.8891 5.29289C11.4986 4.90237 10.8654 4.90237 10.4749 5.29289L6.93933 8.82846L5.5251 7.41423C5.13458 7.0237 4.50141 7.0237 4.11089 7.41422C3.72036 7.80475 3.72036 8.43791 4.11089 8.82844L6.93931 11.6569Z"
                    fill="#27CFB1"
                />
            </g>
            <defs>
                <clipPath id="clip0_4916_510">
                    <rect
                        width="16"
                        height="16"
                        fill="white"
                    />
                </clipPath>
            </defs>
        </svg>
    );
    
    const changeData = (e: any) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type == 'checkbox' ? checked : value,
        });
    };
    return (
        <div style={{ width: '100%' }}>
            <h4
                className="h4"
                style={{ margin: '0px 0px 16px 0px' }}>
                Personal Information
            </h4>
            <div className={FormCssModule['form-container']}>
                <div className={FormCssModule.form}>
                    <Input
                        label="First Name"
                        type="text"
                        onChange={changeData}
                        value={formData.first_name || ''}
                        placeholder=""
                        name="first_name"
                        size="md"
                    />
                    <Input
                        label="Last Name"
                        onChange={changeData}
                        type="text"
                        value={formData.last_name || ''}
                        placeholder=""
                        name="last_name"
                        size="md"
                    />
                    <Input
                        label="City"
                        onChange={changeData}
                        type="text"
                        value={formData.city || ''}
                        placeholder=""
                        name="city"
                        size="md"
                    />
                    <Input
                        label="Postal Code"
                        onChange={changeData}
                        type="text"
                        value={formData.postal_code || ''}
                        placeholder=""
                        name="postal_code"
                        size="md"
                    />
                    <Input
                        label="Address"
                        type="text"
                        onChange={changeData}
                        value={formData.address || ''}
                        placeholder=""
                        name="address"
                        size="md"
                        wide={true}
                    />

                    <Input
                        label="Email"
                        type="email"
                        onChange={changeData}
                        value={formData.email || ''}
                        placeholder=""
                        name="email"
                        size="md"
                        icon={checkIcon}
                    />
                    <Input
                        label="Phone"
                        type="text"
                        onChange={changeData}
                        value={formData.phone || ''}
                        placeholder=""
                        name="phone"
                        size="md"
                    />
                    <Input
                        label="Password"
                        type="password"
                        onChange={changeData}
                        value={formData.password || ''}
                        placeholder=""
                        name="password"
                        size="md"
                    />
                </div>
                <div className={FormCssModule.profile}>
                    <div style={{ width: 144, height: 144, marginBottom: '16px' }}>
                        <RoundedImage
                            src={'/profile-2.png'}
                            alt="profile-2"
                            width={144}
                            height={144}
                        />
                    </div>
                </div>
            </div>
            <p style={{ margin: '16px 0px', color: 'var(--color-gray)' }}>
                Use this email to log in to your{' '}
                <Link
                    href={'#'}
                    className="link">
                    resumedone.io
                </Link>{' '}
                account and receive notifications.
            </p>
            <Button size="md">{'Save'}</Button>
        </div>
    );
}
