import Navbar from './Navbar'

const Header = () => {
  return (
    <div
      id='home'
      className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <Navbar />

      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl font-semibold sm:text-6xl md:text-[82px] inline-block max-w-3xl pt-20'>Explore homes that fit your dreams</h2>

        <div className='space-x-6 mt-16'>
          <a
            href='#projects'
            className='border border-white rounded-lg px-8 py-3 hover:bg-white hover:text-black transition-all'
          >
            Projects
          </a>
          <a
            href='#contact'
            className='bg-blue-600 rounded-lg px-8 py-3 hover:bg-blue-700 transition-all'
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header