import { About, Header, Projects, Testimonials } from './components'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonials />
    </div>
  )
}

export default App