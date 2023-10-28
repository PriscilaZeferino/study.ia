import { Footer } from './components/footer'
import { NavBar } from './components/navbar'

function App () {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <NavBar/>
        <main className='flex-grow'></main>
        <Footer/>
      </div>
    </>
  )
}

export default App
