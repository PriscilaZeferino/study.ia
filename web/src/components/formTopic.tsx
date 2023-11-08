import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

export function Form () {
  const [topico, setTopico] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')
  const [palavraschave, setPalavrasChave] = useState<string>('')

  useEffect(() => {
    console.log('Tópico', topico)
    console.log('Descricao', descricao)
    console.log('PalavrasChave', palavraschave)
  }, [topico, descricao, palavraschave])

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
          onChange={(event: ChangeEvent<HTMLInputElement>) => setTopico(event.target.value)}
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
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setDescricao(event.target.value)}

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
          onChange={(event: ChangeEvent<HTMLInputElement>) => setPalavrasChave(event.target.value)}
          required
        />
      </div>
      <div className='px-10 flex py-2'>
        <Button>Gerar questionário</Button>
      </div>
    </form>
  )
}
