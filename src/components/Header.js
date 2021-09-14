import Image from "next/image";
function Header() {
  return (
    <header>
      {/* Top nav*/}
      <section>
        <div className='flex items-center bg-amazon_blue'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
      </section>
    </header>
  );
}

export default Header;
