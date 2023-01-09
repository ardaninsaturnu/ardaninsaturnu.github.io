import Head from 'next/head'
import Header from "../components/Layout/Header";
import MainCard from "../components/MainCard";
import FooterCard from "../components/FooterCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mehmet Arda Çelik</title>
        <meta name="description" content="Mehmet Arda Çelik portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
          <MainCard/>
          <FooterCard/>
      </div>
    </>
  )
}
