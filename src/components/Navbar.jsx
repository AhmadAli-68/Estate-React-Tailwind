import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt='logo' />

        <ul className='hidden md:flex gap-7 text-white'>
          {navLinks.map(({ id, title, link }) => (
            <a
              key={id}
              href={link}
              className='cursor-pointer hover:text-gray-400'
            >
              {title}
            </a>
          ))}
        </ul>

        <button className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>Sign up</button>

        <img
          src={assets.menu_icon}
          alt='menu icon'
          className='md:hidden w-11 p-2 rounded-lg cursor-pointer hover:bg-gray-500/20 backdrop-blur-md border border-white/20 transition-colors'
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* ---- Mobile Menu ---- */}
      <div className={`fixed w-full md:hidden ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} right-0 top-0 bottom-0 overflow-hidden bg-black text-white transition-all duration-300 ease-in-out`}>

        <div className='flex justify-end p-6'>
          <img
            src={assets.cross_icon}
            className='w-8 cursor-pointer bg-white rounded-lg p-2 hover:backdrop-blur-md hover:bg-white/60 transition-colors duration-300'
            alt='cross-icon'
            onClick={() => setShowMobileMenu(false)}
          />
        </div>

        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          {navLinks.map(({ id, link, title }) => (
            <a
              key={id}
              href={link}
              className='px-4 py-2 rounded-lg inline-block hover:bg-gray-500/20 w-full transition-all ease-in-out duration-300'
              onClick={() => setShowMobileMenu(false)}
            >
              {title}
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar