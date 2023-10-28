import { Button } from './ui/button'

export function NavBar () {
  return (
    <nav className='border-b flex flex-col lg:flex-row lg:items-center lg:justify-between p-2 lg:px-8'>
      <div className='logo text-center lg:text-left'>Study.ia</div>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-around lg:my-2'>
        <Button className='flex px-6 lg:px-10 my-2 lg:my-0 lg:mx-2'>github</Button>
        <Button className='flex px-6 lg:px-10 my-2 lg:my-0 lg:mx-2'>estudar</Button>
      </div>
    </nav>
  )
}
