'use client';
import React from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import DropdownCssModule from './dropdown.module.css';
export type DropDownType = {
    children: JSX.Element[] | JSX.Element;
    title: JSX.Element | string;
};
export default function Dropdown({ title, children }: DropDownType) {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div className="dropdown">
            <div
                onClick={handleOpen}
                className={DropdownCssModule.menu}>
                {title}
                {(open == true && (
                    <FiMinusCircle
                        size={'1rem'}
                        color={'#a1a1a5'}
                        className={DropdownCssModule.icon}
                    />
                )) || (
                    <FiPlusCircle
                        size={'1rem'}
                        color={'#a1a1a5'}
                        className={DropdownCssModule.icon}
                    />
                )}
            </div>
            <div className={`menu-dropdown ${open == true ? DropdownCssModule.open : DropdownCssModule.close}`}>{children}</div>
        </div>
    );
}
