import type { NextPage } from 'next';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <span style={{ color: '#0070f3' }}>portfolio.iamsirid.com</span>
        </h1>

        <p className={styles.description}>Site under construction</p>
      </main>
    </div>
  );
};

export default Home;
