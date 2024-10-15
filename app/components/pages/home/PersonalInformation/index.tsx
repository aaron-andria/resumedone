import DeleteAccount from './DeleteAccount';
import FeedBack from './FeedBack';
import PersonalInformationForm from './Form';

export default function PersonalInformation() {
    return (
        <div style={{ width: '100%', display: 'flex', gap: '32px', flexDirection: 'column' }}>
            <PersonalInformationForm />
            <DeleteAccount />
            <FeedBack />
        </div>
    );
}
