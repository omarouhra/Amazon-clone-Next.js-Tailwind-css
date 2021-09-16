import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon clone - @omar.code</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <Header />

      {/* Main  */}
      <main className='max-w-screen-2xl mx-auto'>
        {/* banner */}
        <Banner />
      </main>
    </div>
  );
}
