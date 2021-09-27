import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function CheckoutProduct({
  index,
  title,
  price,
  description,
  image,
  category,
  hasPrime,
  rating,
}) {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const addItemToBasket = () => {
    const product = {
      index,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    dispatch(addToBasket(product));
  };

  const removeItemFromToBasket = () => {
    dispatch(removeFromBasket({ index }));
  };
  return (
    <div className='flex flex-col space-y-10 lg:grid lg:grid-cols-5'>
      <Image src={image} height={200} width={200} objectFit='contain' />
      {/* middle section */}

      <article className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} currency='MAD' />
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

        {/* Quantity */}
        {/* <p>{items.filter(item => item.index === index).length}</p> */}
      </article>

      {/* Buttons */}

      <section className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button' onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className='button' onClick={removeItemFromToBasket}>
          Remove from Basket
        </button>
      </section>
    </div>
  );
}

export default CheckoutProduct;
