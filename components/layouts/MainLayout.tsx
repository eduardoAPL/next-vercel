import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Home - Eduardo</title>
          <meta name="description" content="Home page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
  
        <main className={styles.main}>
          { children }
        </main>
      </div>
    );
}

export default MainLayout