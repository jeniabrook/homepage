import Head from 'next/head';
import AboutMe from '../components/Pages/Home/AboutMe';
import Footer from '../components/Pages/Home/Footer';
import Intro from '../components/Pages/Home/Intro';
import TechStack from '../components/Pages/Home/TechStack';

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
      <TechStack />
      <Footer />
    </>
  );
}

export default Index;
