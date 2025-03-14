import ButtonTest from '@/components/button'
import { ThemeSwitcher } from '@/components/theme-switcher'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex flex-col justify-center items-center text-blue-500 text-2xl'>
      Dashboard
      <ButtonTest />
      <ThemeSwitcher />
    </div>
  )
}

export default Dashboard
