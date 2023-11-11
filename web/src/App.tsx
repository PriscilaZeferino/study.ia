import { useEffect, useState } from 'react'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { NavBar } from './components/navbar'
import { Button } from './components/ui/button'
import { useNavigate } from 'react-router-dom'
import { api } from './lib/axios'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './components/ui/card'

interface Topicos {
  id: string
  topico: string
  descricao: string
  palavrasChave: string
}
function App () {
  const navigate = useNavigate()
  const [topicos, setTopicos] = useState<Topicos[] | null>(null)

  function addNewTopic () {
    navigate('/add/topics')
  }

  useEffect(() => {
    api.get('/listar/topicos').then(response => {
      setTopicos(response.data)
    })
  }, [])

  function toGoCardDetails (data: Topicos) {
    navigate(`detalhes/${data.id}`, { state: { ...data } })
  }

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <NavBar />
        <main className='flex-grow py-10 '>
          <div className='flex flew-row justify-between px-1'>
            <Header title='Sala de estudos' />
            <div className='px-10 py-6 '>
              <Button onClick={addNewTopic}>Adicionar novo tópico</Button>
            </div>
          </div>
          <div className='px-10'>
            {topicos?.map(topicos => {
              return (
                <Card
                  className='my-6'
                  key={topicos.id}
                  onClick={() => toGoCardDetails(topicos)}
                >
                  <CardHeader>
                    <CardTitle>{topicos.topico}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{topicos.descricao}</p>
                  </CardContent>
                  <CardFooter>
                    <p>palavras-chave: {topicos.palavrasChave}</p>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
