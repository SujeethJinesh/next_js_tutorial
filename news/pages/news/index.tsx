import Link from 'next/link'; // use it to build links with next, much more efficient than fetching a new html

// our-domain.com/news

export const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          {/* Link prevents anchor tag default and renders the next component like a SPA and updates the deep link. Best for internal site links */}
          <Link href='/news/nextjs-is-a-great-framework'>
            NextJS is a great framework
          </Link>
        </li>
        <li>Something else</li>
      </ul>
    </>
  );
};

export default NewsPage;
