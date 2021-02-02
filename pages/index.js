import Head from 'next/head';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';

const Home = () => (
  <div className="container">
    <Head>
      <title>Jenia Brook</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">Jenia Brook</h1>

      <p className="description">javascript dev</p>
      <div className="grid">
        <a href="https://github.com/JeniaBR" className="card">
          <AiOutlineGithub style={{ width: 70, height: 70 }} />
        </a>

        <a href="https://twitter.com/jeniabrook" className="card">
          <AiOutlineTwitter style={{ width: 70, height: 70 }} />
        </a>
      </div>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      .grid {
        display: flex;
        max-width: 800px;
        margin-top: 3rem;
        justify-content: center;
      }

      .card {
        margin: 1.5rem;
        padding: 1rem;
        text-align: center;
        text-decoration: none;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #81a1c1;
        border-color: #81a1c1;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default Home;
