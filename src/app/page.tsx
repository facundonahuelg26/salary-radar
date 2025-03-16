import ButtonTest from '@/components/button'
import { ThemeSwitcher } from '@/components/theme-switcher'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center text-blue-500 text-2xl'>
      Home page Salary Radar
      <ButtonTest />
      <ThemeSwitcher />
    </div>
  )
}

export default HomePage
