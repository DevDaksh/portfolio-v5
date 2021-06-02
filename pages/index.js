import Head from 'next/head';
import Link from 'next/link';
import styles from "../styles/Home.module.css";

import Github from './assets/Github';
import Twitter from './assets/Twitter';
import ProjLink from './assets/Link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Daksh Kulshrestha</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
      </Head>
      <div className={styles.main}>
        <div>
          <span>
            Hi, I am <h2 className={styles.name}>Daksh Kulshrestha</h2> and I am a full stack developer.
            I love build & ship tools and products and my passion for tech has lead me here. I am currently a student prepping for JEE.
            <br />
            <br />
            Besides tech, Maths and Physics make my world go round.
          </span>
          <div className={styles.links}>
            <Link href="https://github.com/devdaksh"><a target="__blank"><Github /></a></Link>
            <Link href="https://twitter.com/dawksh"><a target="__blank"><Twitter /></a></Link>
            <Link href="/projects"><a><ProjLink /></a></Link>
          </div>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted playsInline className={styles.bg_Vid} width="100%" height="100%">
          <source src="./bgVid.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  )
}
