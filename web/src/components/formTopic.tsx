import { ChangeEvent, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { api } from '@/lib/axios'
import { useNavigate } from 'react-router-dom'

export function Form () {
  const [topico, setTopico] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')
  const [palavraschave, setPalavrasChave] = useState<string>('')
    const navigate = useNavigate()

  async function saveNewTopic () {

    try {
      await api.post(
        `/salvar/topico`,
        {
          topico: topico,
          descricao: descricao,
          palavrasChave: palavraschave
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      alert("Dados salvos com sucesso");
      navigate('/')



    } catch (error) {
      console.error('Erro ao salvar tópico:', error)
    }
  }

  return (
    <form>
      <div className='px-10 text-bold flex flex-col'>
        <Label
          htmlFor='topico'
          className="font-bold text-md font-['Poppins', sans-serif]"
        >
          Tópico principal
        </Label>
        <Input
          type='text'
          name='topico'
          id='topico'
          placeholder='Qual o tema principal?'
          className='px-4 py-4 my-2 border-gray-300 border-2 rounded-md'
          required
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTopico(event.target.value)
          }
        />
      </div>

      <div className='px-10 text-bold flex flex-col'>
        <Label
          htmlFor='descricao'
          className="font-bold text-md font-['Poppins', sans-serif]"
        >
          Descrição
        </Label>
        <Textarea
          id='descricao'
          className='resize-y px-4 py-4 my-2 border-gray-300 border-2 rounded-md'
          placeholder='Delimite as ideias a serem trabalhadas com base no tópico principal'
          value={descricao}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setDescricao(event.target.value)
          }
        ></Textarea>
      </div>
      <div className='px-10 text-bold flex flex-col'>
        <Label
          htmlFor='palavras-chave'
          className="font-bold text-md font-['Poppins', sans-serif]"
        >
          Palavras-chave:
        </Label>
        <Input
          type='text'
          id='palavras-chave'
          name='palavras-chave'
          placeholder='Inclua palavras-chave separadas por  virgulas.'
          className='px-4 py-4 my-2 border-gray-300 border-2 rounded-md'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setPalavrasChave(event.target.value)
          }
          required
        />
      </div>
      <div className='px-10 flex py-2'>
        <Button type='button' onClick={saveNewTopic}>Gerar questionário</Button>
      </div>
    </form>
  )
}
