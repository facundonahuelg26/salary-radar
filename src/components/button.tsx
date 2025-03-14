'use client'
// app/page.tsx

import { Button } from '@heroui/button'

export default function ButtonTest() {
  const buttonClick = () => {
    console.log('button clicked')
  }
  return (
    <div className='flex flex-wrap gap-4 items-center'>
      <Button color='danger' onPress={buttonClick}>
        Default
      </Button>
      <Button color='primary'>Primary</Button>
      <Button color='secondary'>Secondary</Button>
      <Button color='success'>Success</Button>
      <Button color='warning'>Warning</Button>
      <Button color='danger'>Danger</Button>
    </div>
  )
}
