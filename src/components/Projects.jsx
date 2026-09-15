import { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    }

    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);

    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    }
  }, [])

  const handleNextProject = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % projectsData.length)
  }

  const handlePreviousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
  }

  return (
    <section
      id='projects'
      className='bg-gray-900 mx-auto text-white py-4 pt-20 px-6 md:px-20 lg:px-32 w-full my-20 overflow-hidden'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects{' '}
        <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
      </h1>
      <p className='text-center text-gray-300 mb-8 max-w-80 mx-auto'>
        Crafting Spaces, Building Legacies – Explore Our Portfolio
      </p>

      {/* Slider Buttons */}

      <div className='flex justify-end items-center mb-8'>
        <button
          className='p-3 bg-gray-200 rounded-lg cursor-pointer mr-2 hover:bg-gray-400 transition-all'
          aria-label='Previous Project'
          onClick={handlePreviousProject}
        >
          <img src={assets.left_arrow} alt='previous-button' />
        </button>

        <button
          className='p-3 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-400 transition-all'
          aria-label='Next Project'
          onClick={handleNextProject}
        >
          <img src={assets.right_arrow} alt='next-button' />
        </button>
      </div>

      {/* Project Slider Container */}

      <div className='overflow-hidden'>
        <div
          className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map(({ id, title, price, location, image }) => (
            <div
              key={id}
              className='relative flex shrink-0 w-full sm:w-1/4'
            >
              <img
                src={image}
                alt={title}
                className='w-full h-auto mb-14'
              />

              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 rounded-lg shadow-md'>
                  <h2 className='text-gray-800'>
                    {title}
                  </h2>

                  <p className='text-sm text-gray-500'>
                    {price} <span className='px-1'>|</span> {location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects