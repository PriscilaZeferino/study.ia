import { useEffect } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { NavBar } from '../components/navbar'
import { useLocation } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface Topicos {
  id: string
  topico: string
  descricao: string
  palavrasChave: string
}

function Detalhes () {
  const location = useLocation()
  const { id, topico, descricao, palavrasChave }: Topicos = location.state || {}

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <NavBar />
        <main className='flex-grow py-10 '>
          <Header title='Detalhes' />
          <div className='px-10'>
            <Card>
              <CardHeader>
                <CardTitle>{topico}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{descricao}</p>
              </CardContent>
              <CardFooter>
                <p>palavras-chave: {palavrasChave}</p>
              </CardFooter>
            </Card>
          </div>
          <div>
            
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Detalhes
