import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { addToBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";
function Product({ index, title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 2) + 3);
  const [hasPrime] = useState(Math.random() < 0.5);
  const dispatch = useDispatch();

  // fuctions
  const addItemToBasket = () => {
    const product = {
      index,
      title,
      price,
      description,
      category,
      image,
    };


    dispatch(addToBasket(product));
  };

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 cursor-pointer md:hover:shadow-2xl transition duration-500 group'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>

      <Image
        src={image}
        height={200}
        width={200}
        objectFit='contain'
        className='md:group-hover:scale-90 transition duration-500'
      />
      <h4 className='my-3 hover:text-yellow-600'>{title}</h4>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
      </div>

      <p className='text-xs my-2 line-clamp-2 '>{description}</p>
      <div className='mb-4'>
        <Currency quantity={price} currency='GBP' />
      </div>

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <Image
            src='https://links.papareact.com/fdw'
            height={100}
            width={60}
            objectFit='contain'
            alt='prime delively image'
          />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      <button className='button mt-auto' onClick={addItemToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
