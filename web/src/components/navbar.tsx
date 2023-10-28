import { Button } from './ui/button'

export function NavBar () {
  return (
    <nav className='border-b flex items-center justify-between p-2 lg:px-8'>
      <div className='logo'>Study.ia</div>
      <div className='flex justify-around my-2'>
        <Button className='flex px-10 mx-2'>github</Button>
        <Button className='flex px-10 mx-2'>estudar</Button>
      </div>
    </nav>
  )
}
