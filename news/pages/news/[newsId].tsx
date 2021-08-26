import { useRouter } from 'next/router';

// our-domain.com/news/details

export const DetailsPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  return <h1>The {newsId} Page</h1>;
};

export default DetailsPage;
