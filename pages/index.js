import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
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

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Server Side Rendering
export async function getServerSideProps(context) {
  // Get >>>  https://fakestoreapi.com/products/1
  const products = await fetch("https://fakestoreapi.com/products/").then(res =>
    res.json()
  );
  return {
    props: {
      products,
    },
  };
}
