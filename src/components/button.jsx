import { Button } from '@headlessui/react'

export default function CustomBtn({text}) {
  return (
    <Button className='bg-black px-4 py-2 text-white rounded-md ml-6'>
     {text}
    </Button>
  )
}