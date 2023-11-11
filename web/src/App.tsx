import { Footer } from './components/footer'
import { Header } from './components/header'
import { NavBar } from './components/navbar'
import { Button } from './components/ui/button'
import { useNavigate } from 'react-router-dom'

function App () {
  const navigate = useNavigate()

  function addNewTopic () {
    navigate('/add/topics')
  }

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <NavBar />
        <main className='flex-grow py-10 '>
          <div className='flex flew-row justify-around'>
            <Header title='Sala de estudos' />
            <div className='px-10 py-6 '>
              <Button onClick={addNewTopic}>Adicionar novo tópico</Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
