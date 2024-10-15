import Image from 'next/image';
import SideBarCssMdoule from './sidebar.module.css';
import IconLink from '../../../shared/Link/Link';
import { MdListAlt } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { TbClockHour3 } from 'react-icons/tb';
import Dropdown from '../../../shared/Dropdown/Dropdown';
import RoundedImage from '../../../shared/Image/RoundedImage';
import SideBarFooter from './SideBarFooter';
const StarsIcon = () => {
    return (
        <div>
            <Image
                src={'/stars.png'}
                alt={'stars'}
                width={14}
                height={14}
            />
        </div>
    );
};

const DirIcon = () => {
    return (
        <div>
            <Image
                src={'/dir.png'}
                alt={'Dir'}
                width={14}
                height={14}
            />
        </div>
    );
};

const LockIcon = () => {
    return (
        <div>
            <Image
                src={'/lock.jpg'}
                alt={'Lock'}
                width={14}
                height={14}
            />
        </div>
    );
};

export type sideBarListNavType = {
    text: string;
    href: string;
    icon: React.ReactElement;
    size: string;
};

const ListOne: sideBarListNavType[] = [
    {
        text: 'Software Engineer',
        href: '#',
        icon: <StarsIcon />,
        size: 'lg',
    },
    {
        text: 'Computer hardware engineer',
        href: '#',
        icon: <StarsIcon />,
        size: 'lg',
    },
    {
        text: 'Network Engineer',
        href: '#',
        icon: <StarsIcon />,
        size: 'lg',
    },
    {
        text: 'Technical Support',
        href: '#',
        icon: <StarsIcon />,
        size: 'lg',
    },
    {
        text: 'Network administrator',
        href: '#',
        icon: <StarsIcon />,
        size: 'lg',
    },
    {
        text: 'Management',
        href: '#',
        icon: <StarsIcon />,
        size: 'lg',
    },
    {
        text: 'Data analysis',
        href: '#',
        icon: <StarsIcon />,
        size: 'lg',
    },
    {
        text: 'Computer technician',
        href: '#',
        icon: <StarsIcon />,
        size: 'lg',
    },
];

const ListTwo: sideBarListNavType[] = [
    {
        text: 'Past search 1',
        href: '#',
        icon: (
            <TbClockHour3
                size={'1rem'}
                className={'text-gray'}
            />
        ),
        size: 'sm',
    },
    {
        text: 'Past search 2',
        href: '#',
        icon: (
            <TbClockHour3
                size={'1rem'}
                className={'text-gray'}
            />
        ),
        size: 'sm',
    },
    {
        text: 'Computers and information...',
        href: '#',
        icon: (
            <TbClockHour3
                size={'1rem'}
                className={'text-gray'}
            />
        ),
        size: 'sm',
    },
    {
        text: 'Database Administrator',
        href: '#',
        icon: (
            <TbClockHour3
                size={'1rem'}
                className={'text-gray'}
            />
        ),
        size: 'sm',
    },
    {
        text: 'Computer security',
        href: '#',
        icon: (
            <TbClockHour3
                size={'1rem'}
                className={'text-gray'}
            />
        ),
        size: 'sm',
    },
    {
        text: 'Computer Systems Analyst',
        href: '#',
        icon: (
            <TbClockHour3
                size={'1rem'}
                className={'text-gray'}
            />
        ),
        size: 'sm',
    },
];

const dropdownList: sideBarListNavType[] = [
    {
        text: 'Board 1',
        href: '#',
        icon: <DirIcon />,
        size: 'lg',
    },
    {
        text: 'Board 2',
        href: '#',
        icon: <DirIcon />,
        size: 'lg',
    },
    {
        text: 'Board 2',
        href: '#',
        icon: <DirIcon />,
        size: 'lg',
    },
    {
        text: 'Board agent 1',
        href: '#',
        icon: <LockIcon />,
        size: 'lg',
    },
    {
        text: 'Board agent 2',
        href: '#',
        icon: <LockIcon />,
        size: 'lg',
    },
    {
        text: 'Board agent 3',
        href: '#',
        icon: <LockIcon />,
        size: 'lg',
    },
];
export default function SideBar() {
    return (
        <div className={SideBarCssMdoule.wrapper}>
            <div className={SideBarCssMdoule.content}>
                <div className={SideBarCssMdoule.logo}>
                    <Image
                        src="/resumizeme-logo.png"
                        alt="Resumizemo Logo"
                        width={114}
                        height={24}
                    />
                </div>

                <IconLink
                    href={'#'}
                    icon={
                        <MdListAlt
                            size={'1rem'}
                            className={'text-gray'}
                        />
                    }
                    isTitle={true}
                    size={'lg'}>
                    My templates
                </IconLink>
                <IconLink
                    href={'#'}
                    icon={
                        <BsSearch
                            size={'1rem'}
                            className={'text-gray'}
                        />
                    }
                    isTitle={true}
                    size={'lg'}>
                    Search
                </IconLink>

                <div>
                    {ListOne.map((speciality: any, index: number) => {
                        return (
                            <IconLink
                                key={index}
                                href={speciality.href}
                                icon={speciality?.icon}
                                size={speciality?.size}>
                                {speciality?.text}
                            </IconLink>
                        );
                    })}
                </div>

                <div>
                    {ListTwo.map((speciality: any, index: number) => {
                        return (
                            <IconLink
                                key={index}
                                href={speciality.href}
                                icon={speciality?.icon}
                                size={speciality?.size}>
                                {speciality?.text}
                            </IconLink>
                        );
                    })}
                </div>

                <div>
                    <Dropdown
                        title={
                            <IconLink
                                href={'#'}
                                icon={
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M1.04063 1.59693C1.01399 1.72713 1 1.86193 1 2V14C1 15.1046 1.89543 16 3 16H13C14.1046 16 15 15.1046 15 14V2C15 0.895431 14.1046 0 13 0H3C2.0335 0 1.22713 0.685564 1.04063 1.59693ZM3 2H13V7H3V2ZM3 9V14H13V9H3ZM6 5H10V4H6V5ZM10 12H6V11H10V12Z"
                                            fill="#4C4C55"
                                        />
                                    </svg>
                                }
                                isTitle={true}
                                size={'lg'}>
                                My boards
                            </IconLink>
                        }>
                        {dropdownList.map((speciality: any, index: number) => {
                            return (
                                <IconLink
                                    key={index}
                                    href={speciality.href}
                                    icon={speciality?.icon}
                                    size={speciality?.size}>
                                    {speciality?.text}
                                </IconLink>
                            );
                        })}
                    </Dropdown>
                </div>
            </div>
            <SideBarFooter />
        </div>
    );
}
