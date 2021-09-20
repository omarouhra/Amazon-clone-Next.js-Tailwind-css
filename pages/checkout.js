import Header from "../components/Header";
import Image from "next/image";

function checkout() {
  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='lg:flex max-w-2xl mx-auto'>
        {/* Left Container */}
        <section className='flex-grow m-5 shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit='contain'
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>Your SHopping Basket</h1>
          </div>
        </section>

        {/* Right Container */}
      </main>
    </div>
  );
}

export default checkout;
