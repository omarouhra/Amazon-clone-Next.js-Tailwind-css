import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";

function Checkout() {
  const items = useSelector(selectItems);

  console.log(items);

  return (
    <div div className='bg-gray-100'>
      <Header />
      <main className='lg:flex lg:max-w-screen-2xl mx-auto'>
        {/* Left Container */}
        <section className='flex-grow md:m-5 shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit='contain'
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-2xl border-b pb-4'>
              {items.length === 0
                ? " Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>
            {items.map(
              ({
                index,
                title,
                price,
                rating,
                description,
                category,
                image,
                i,
                hasPrime,
              }) => (
                <CheckoutProduct
                  key={i}
                  index={index}
                  title={title}
                  price={price}
                  rating={rating}
                  category={category}
                  description={description}
                  image={image}
                  hasPrime={hasPrime}
                />
              )
            )}
          </div>
        </section>

        {/* Right Container */}
      </main>
    </div>
  );
}
export default Checkout;
