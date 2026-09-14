import { assets } from '../assets/assets'

const About = () => {
  return (
    <section
      id='about'
      className='container flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        About{' '}
        <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
      </h1>

      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About properties, Dedicated to Your Vision</p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img
          src={assets.brand_img}
          alt='brand-image'
          className='w-full sm:w-1/2 max-w-lg'
        />

        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p className=''>Years of Experience</p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p className=''>Projects Completed</p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p className=''>Mn. Sq. Ft. Delivered</p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p className=''>Ongoing Projects</p>
            </div>
          </div>

          <p className='my-10 max-w-lg'>With over a decade of experience in the real estate industry, we are dedicated to transforming visions into exceptional spaces. From successfully completed projects to ongoing developments, our commitment to quality, innovation, and customer satisfaction continues to shape the future of real estate. We strive to deliver outstanding properties that inspire confidence and create lasting value for our clients.</p>

          <button className='bg-blue-600 text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition-all'>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default About