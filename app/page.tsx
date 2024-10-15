import PersonalInformation from './components/pages/home/PersonalInformation';
import Card from './components/ui/Core/Card/Card';
import CardContent from './components/ui/Core/Card/CardContent';
import CardImage from './components/ui/Core/Card/CardImage';
import { Title } from './components/ui/Core/Card/Title';
import { Button } from './components/ui/shared/Button/Button';
import RoundedImage from './components/ui/shared/Image/RoundedImage';
import Input from './components/ui/shared/form/input/Input';
import { FaCircleCheck } from 'react-icons/fa6';

export default function Home() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '36px',
            }}>
            {/* <Input
        label='First Name'
        type='text'
        value='Petter'
        placeholder=''
        name='first_name'
        size='md'
        icon={<FaCircleCheck color='bg-secondary' />}
      />

      <Button size='md'>{"Save"}</Button> */}
            <Card color="secondary">
                <CardImage>
                    <RoundedImage
                        src="/career.png"
                        alt={'Career'}
                        width={72}
                        height={72}
                        contain={true}
                    />
                </CardImage>
                <CardContent>
                    <Title>Premium Account</Title>
                    <p>
                        You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover
                        letters in both PDF and Word formats.
                    </p>
                </CardContent>
            </Card>
            <PersonalInformation />
        </div>
    );
}
