import { assets } from '../assets/assets'
import { navLinks } from '../constants'

const Navbar = () => {
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

        <button className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar