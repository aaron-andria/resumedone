import RoundedImage from '../../../shared/Image/RoundedImage';
import SideBarCssMdoule from './sidebar.module.css';
import { FaGear } from 'react-icons/fa6';
export default function SideBarFooter() {
    return (
        <div className={SideBarCssMdoule.footer}>
            <div style={{ width: '32px', cursor: 'pointer' }}>
                <RoundedImage
                    src={'/profile.png'}
                    width={32}
                    height={32}
                    alt="profile"
                />
            </div>
            <span className={SideBarCssMdoule.userName}>Clara</span>
            <span style={{ cursor: 'pointer' }}>
                <FaGear
                    size={'1rem'}
                    color={'#4c4c55'}
                />
            </span>
        </div>
    );
}
