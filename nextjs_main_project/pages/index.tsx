import MeetupList from '../components/meetups/MeetupList';

interface IHomePageProps {}

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://i.ytimg.com/vi/UWE_JZRqZic/maxresdefault.jpg',
    address: 'Gas Works Park',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://www.ussportscamps.com/media/images/soccer/nike/camps/UW-campus.jpg',
    address: 'UW',
    description: 'This is a second meetup!',
  },
];

const HomePage: React.FC<IHomePageProps> = (props: IHomePageProps) => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
