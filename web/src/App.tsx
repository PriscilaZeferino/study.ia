import { Footer } from './components/footer'
import { Form } from './components/formTopic'
import { Header } from './components/header'
import { NavBar } from './components/navbar'

function App () {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <NavBar />
        <main className='flex-grow py-10 '>
          <Header title='Sala de estudos'/>
          <Form/>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
