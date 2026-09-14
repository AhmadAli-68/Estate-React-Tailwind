import { About, Header, Projects } from './components'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
    </div>
  )
}

export default App