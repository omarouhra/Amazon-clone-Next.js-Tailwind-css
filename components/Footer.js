import Image from "next/image";

function Footer() {
  return (
    <footer className='text-white mt-12 '>
      {/* Footer Top */}
      <section className='bg-amazon_blue-light text-center py-4 text-sm  '>
        <a href='#navigation'>Back to top</a>
      </section>

      {/* Footer Bottom  */}
      <section className='bg-amazon_blue'>
        <section className='grid grid-cols-1  space-y-8 md:grid-cols-2 lg:grid-cols-4 md:space-y-0  py-10 lg:py-14  px-6 max-w-screen-2xl mx-auto min-h-[700px] lg:min-h-full'>
          <div>
            <h3 className='font-extrabold mb-2 text-sm'>Get to Know Us</h3>
            <div className='footerContainer'>
              <a href='#' className='link'>
                Careers
              </a>
              <a href='#' className='link'>
                Blog
              </a>
              <a href='#' className='link'>
                About Amazon
              </a>
              <a href='#' className='link'>
                Investor Relations
              </a>
              <a href='#' className='link'>
                Amazon Devices
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-extrabold mb-2 text-sm'>Make Money with Us</h3>
            <div className='footerContainer'>
              <a href='#' className='link'>
                Sell products on Amazon
              </a>
              <a href='#' className='link'>
                Sell on Amazon Business
              </a>
              <a href='#' className='link'>
                Sell apps on Amazon
              </a>
              <a href='#' className='link'>
                Become an Affiliate
              </a>
              <a href='#' className='link'>
                Advertise Your Products
              </a>
              <a href='#' className='link'>
                Self-Publish with Us
              </a>
              <a href='#' className='link'>
                Host an Amazon Hub
              </a>
              <a href='#' className='link'>
                ›See More Make Money with Us
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-extrabold mb-2 text-sm'>
              Amazon Payment Products
            </h3>
            <div className='footerContainer'>
              <a href='#' className='link'>
                Amazon Business Card
              </a>
              <a href='#' className='link'>
                Shop with Points
              </a>
              <a href='#' className='link'>
                Reload Your Balance
              </a>
              <a href='#' className='link'>
                Amazon Currency Converter
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-extrabold mb-2 text-sm'>Let Us Help You</h3>
            <div className='footerContainer'>
              <a href='#' className='link'>
                Amazon and COVID-19
              </a>
              <a href='#' className='link'>
                Your Account
              </a>
              <a href='#' className='link'>
                Your Orders
              </a>
              <a href='#' className='link'>
                Shipping Rates & Policies
              </a>
              <a href='#' className='link'>
                Manage Your Content and Devices
              </a>
              <a href='#' className='link'>
                Amazon Assistant
              </a>
              <a href='#' className='link'>
                Help
              </a>
            </div>
          </div>
        </section>
      </section>

      {/* Copyrights banner */}

      <section className='bg-amazon_blue flex flex-col space-y-6 py-8'>
        <Image
          src='https://links.papareact.com/f90'
          width={150}
          height={40}
          objectFit='contain'
          className='cursor-pointer'
        />
        <section className='text-center text-xs lg:text-sm flex flex-col space-y-2 md:flex-row items-center justify-center md:space-x-4 md:space-y-0'>
          <a href='#' className='link'>
            Conditions of Use
          </a>
          <a href='#' className='link'>
            Privacy Notice
          </a>
          <a href='#' className='link'>
            Interest-Based Ads
          </a>
          <p>
            © Created by{" "}
            <a className='link font-extrabold' href='https://www.instagram.com/omar.code/'>@Omar.Code</a>
          </p>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
