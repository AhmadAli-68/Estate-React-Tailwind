import { About, Contact, Header, Projects, Testimonials } from './components/index'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Toaster
        position='top-center'
        toastOptions={{
          duration: 3000,
          // removeDelay: 1000,
        }}
      />
    </div>
  )
}

export default App