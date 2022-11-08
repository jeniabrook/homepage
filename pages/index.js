import Head from 'next/head';
import AboutMe from '../components/Homepage/AbotMe';
import Intro from '../components/Homepage/Intro';

function Index() {
  return (
    <>
      <Head>
        <title>Jenia Brook | Frontend Engineer</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <Intro />
      <AboutMe />
    </>
  );
}

export default Index;
