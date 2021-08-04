import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Projects.module.css";

const projectsList = [
  {
    title: "Cryptseed",
    description:
      "Cryptseed is a browser based seed phrase vault which can help you save your seed phrases right within your browser.",
    link: "https://cryptseed.vercel.app",
  },
  {
    title: "Good Listens",
    description:
      "Good listens is a good reads alternatives for podcasts! Community shared recommendations for getting started with your first podcast!",
    link: "https://good-listens.vercel.app",
  },
  {
    title: "Dashnode",
    description:
      "Dashnode is a app to help you publish blog posts on the IPFS Network or the Distributed web!",
    link: "https://dashnode.vercel.app",
  },
  {
    title: "Go ETH me",
    description:
      "Go ETH Me is a go fund me alternative for web3 built to make fundraisers for Ethereum",
    link: "https://go-eth-me.vercel.app",
  },
];

function projects() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Projects // Daksh Kulshrestha </title>
      </Head>
      <h1 className={styles.head}>Here is a list of stuff I've built</h1>
      {projectsList.map((p) => (
        <>
          <div className={styles.container}>
            <h3 className={styles.title}>
              <Link href={p.link}>{p.title}</Link>
            </h3>
            <span>{p.description}</span>
          </div>
        </>
      ))}
      <br />
      <br />
      <span>More soon :)</span>
    </div>
  );
}

export default projects;
