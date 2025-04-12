
import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "../contexts/ThemeContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <Head>
        <title>My Website</title>
        <meta name="description" content="A mobile-friendly website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        
        <h1 className={styles.title}>Welcome!</h1>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Feature One</h2>
            <p>Description of the first feature goes here.</p>
          </div>
          
          <div className={styles.card}>
            <h2>Feature Two</h2>
            <p>Description of the second feature goes here.</p>
          </div>
          
          <div className={styles.card}>
            <h2>Feature Three</h2>
            <p>Description of the third feature goes here.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
