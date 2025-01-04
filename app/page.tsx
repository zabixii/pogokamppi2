import Head from 'next/head';
import Image from 'next/image';
import styles from '../assets/css/style.module.css';

const Home = () => {
    return (
        <>
            <Head>
                <title>Pogokamppi</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                <link rel="shortcut icon" href="/assets/images/kamppilogo.png" type="image/webp" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/kamppilogo.png" />
            </Head>
            <main className={styles.main}> 
                <h1>Welcome to Pogokamppi</h1>
                <p>This is a Next.js project template.</p>
                <Image src="/assets/images/kamppilogo.png" alt="Kamppi Logo" width={100} height={100} />
            </main>
        </>
    );
}

export default Home;

