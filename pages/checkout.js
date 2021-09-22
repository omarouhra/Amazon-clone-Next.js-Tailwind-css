import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

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
        {/* Right Container */}{" "}
        {items.length > 0 && (
          <div className='flex flex-col bg-white p-10 shadow-md'>
            <h2 className='whitespace-nowrap'>
              Subtotal {items.length} items :
              <span className='font-bold'>
                <Currency quantity={total} currency='MAD' />
              </span>
            </h2>
            <button
              disabled={!session}
              className={`button mt-2 ${
                !session &&
                "from-gray-300 to-gray-500 border-gray-200 text-white cursor-not-allowed text-xs"
              }`}>
              {!session ? "Sign in to checkout" : "proceed to checkout"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
export default Checkout;
