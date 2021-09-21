import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [session] = useSession();
  const router = useRouter();

  const items = useSelector(selectItems);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header id='navigation'>
      {/* Top nav*/}
      <section className='flex items-center bg-amazon_blue px-1 flex-grow py-2'>
        {/* logo */}
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            onClick={() => router.push("/")}
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        {/* Search Bar */}
        <div className='hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-10  rounded-md flex-grow cursor-pointer '>
          <input
            type='text'
            className='h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4'
          />
          <SearchIcon className='h-12 p-4' />
        </div>

        {/* right section */}
        <div className='text-white flex items-center space-x-6 text-xs mx-6 whitespace-nowrap '>
          {session ? (
            <img
              src={session.user.image}
              alt='user image'
              className='hidden md:inline w-10 h-10 rounded-full'
            />
          ) : null}
          <div className='link' onClick={!session ? signIn : signOut}>
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className='font-extrabold md:text-sm'>Accounts & Listst</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Others</p>
          </div>
          <div
            className='link flex items-end '
            onClick={() => router.push("/checkout")}>
            <div className='relative'>
              <span className='absolute -top-1 -right-3 h-4 w-4 text-center  text-black font-bold bg-yellow-500 rounded-full'>
                {items.length}
              </span>
              <ShoppingCartIcon className=' h-8 cursor-pointer' />
            </div>
            <p className='hidden md:inline font-extrabold md:text-sm'>Basket</p>
          </div>
        </div>
      </section>

      {/* Bottom nav */}
      <section className='relative '>
        <section className=' flex items-center space-x-3 py-2 pl-6 bg-amazon_blue-light text-white text-sm '>
          <p className='link flex items-center'>
            <MenuIcon className='h-6 mr-3' onClick={openMenu} />
            All
          </p>
          <p className='link text-xs md:text-sm'>Prime Video</p>
          <p className='link text-xs md:text-sm'>Amazon Business</p>
          <p className='link text-xs md:text-sm'>Todays's Deals</p>
          <p className='link hidden lg:inline-flex'>Electronics</p>
          <p className='link hidden lg:inline-flex'>Food & Grocery</p>
          <p className='link hidden lg:inline-flex'>Prime</p>
          <p className='link hidden lg:inline-flex'>Buy Again</p>
          <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
          <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </section>

        <div className={isOpen ? "menu " : "menu -translate-x-full"}>
          <p className='link'>Electronics</p>
          <p className='link'>Food & Grocery</p>
          <p className='link'>Prime</p>
          <p className='link'>Buy Again</p>
          <p className='link'>Shopper Toolkit</p>
          <p className='link'>Health & Personal Care</p>
        </div>
      </section>
    </header>
  );
}

export default Header;
