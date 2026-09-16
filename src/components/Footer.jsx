import { assets } from '../assets/assets'
import { FooterMenus } from '../constants'

const Footer = () => {
  return (
    <footer className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt='footer-logo' />
          <p className='text-gray-400 mt-4'>Your trusted partner in finding the perfect property. With years of local market expertise, we help buyers, sellers, and investors navigate real estate with confidence, transparency, and personalized service.</p>
        </div>

        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>

          <ul className='flex flex-col gap-2 text-gray-400'>
            {FooterMenus.map(({ id, link, title }) => (
              <a
                key={id}
                href={link}
                className='hover:text-white transition-all'
              >
                {title}
              </a>
            ))}
          </ul>
        </div>

        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>
            Subscribe to our Newsletter
          </h3>
          <p className='max-w-80 text-gray-400 mb-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>

          <div className='flex gap-2'>
            <input
              type='email'
              placeholder='Enter your Email'
              className='w-full md:w-auto text-gray-400 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none'
            />

            <button className='bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition-all'>Subscribe</button>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2026 &copy; Estate. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer