import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Customers{' '}
        <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
      </h1>

      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those Who Found Home with Us.</p>

      <div className='flex justify-center gap-9 flex-wrap'>
        {testimonialsData.map(({ id, name, title, image, alt, rating, text }) => (
          <div
            key={id}
            className='border max-w-85 border-gray-300 shadow-lg rounded-lg px-8 py-12 text-center'
          >
            <img
              src={image}
              alt={alt}
              className='w-20 h-20 rounded-full mx-auto mb-4'
            />

            <h2 className='text-xl text-gray-700 font-medium'>{name}</h2>
            <p className='text-gray-500 text-sm mb-4'>{title}</p>

            <div className='flex gap-2 justify-center text-red-500 mb-4'>
              {Array.from({length: rating}, (item, index) => (
                <img key={index} src={assets.star_icon} alt={item} />
              ))}
            </div>

            <p className='text-gray-600'>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials