import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Klok from '@/components/Klok'
import { SiGooglemaps } from 'react-icons/si'


const inter = Inter({ subsets: ['latin'] })
const targetDate = new Date("2023-03-04").getTime();

export default function Home() {
  return (
    <>
      <Head>
        <title>SAMAWA FAMILY GATHERING 2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid2}>
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center">Samawa Family Gathering 2023</h1>
        </div>

        <div className={styles.center}>
          <Klok targetDate={targetDate} />
        </div>

        <div className="static">
          <a className="btn btn-lg mb-9 relative" 
          href="https://goo.gl/maps/MXebkeGw7X4iv7Dg8" 
          target="_blank" 
          rel="noopener noreferrer">
              <SiGooglemaps size={22} style={{ fill: 'gray' }} />
            <span className="text-white ml-2 text-sm" >
            Wisma Navina
            </span>
          </a>
        </div>

        {/* <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}

        <div className={styles.description}>
          {/* <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p> */}
          <div>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hosted By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
