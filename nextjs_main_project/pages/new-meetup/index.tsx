import { IMeetupItemProps } from '../../components/meetups/MeetupItem';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

interface INewMeetupPageProps {}

const NewMeetupPage: React.FC<INewMeetupPageProps> = (
  props: INewMeetupPageProps,
) => {
  const addMeetupHandler = (enteredMeetupData: IMeetupItemProps) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
