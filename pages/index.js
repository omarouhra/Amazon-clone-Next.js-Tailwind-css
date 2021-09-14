import Head from "next/head";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon clone - @omar.code</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */ }
      
      <Header />
    </div>
  );
}
