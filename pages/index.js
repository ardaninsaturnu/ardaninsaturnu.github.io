import Head from 'next/head'
import Header from "../components/Layout/Header";
import MainCard from "../components/MainCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mehmet Arda Çelik</title>
        <meta name="description" content="Mehmet Arda Çelik portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-full bg-gray-900 flex justify-center items-center">
        <MainCard/>
      </main>
    </>
  )
}
