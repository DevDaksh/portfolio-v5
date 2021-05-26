import Head from 'next/head'
import styles from "../styles/Home.module.css"
// import github from '/github.svg'
// import twitter from '/twitter.svg'
// import link from '/link.svg'

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
            Hi, I am <h2>Daksh Kulshrestha</h2> and I am a full stack developer.
            I love build & ship tools and products. I am currently a student prepping for JEE.
            <br />
            <br />
            I love to listen to music and my hobbies besides tech is Maths and Steller Physics.
          </span>
          <div className="links">
            <img src='./github.svg' alt="github" />
            <img src='./twitter.svg' alt="twitter" />
            <img src='./link.svg' alt="link" />
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
