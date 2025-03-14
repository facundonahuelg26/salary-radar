// app/components/ThemeSwitcher.tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@heroui/button'
import RenderIcon from './render-icon'
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='flex flex-col'>
      The current theme is: {theme}
      <div className='flex gap-2'>
        <Button
          isIconOnly
          aria-label='Light mode'
          color='danger'
          variant='ghost'
          onPress={() => setTheme('light')}
        >
          <RenderIcon dataIcon='bi:moon-stars-fill' />
        </Button>
        <Button
          isIconOnly
          aria-label='Dark mode'
          color='warning'
          variant='ghost'
          onPress={() => setTheme('dark')}
        >
          <RenderIcon dataIcon='bi:sun-fill' />
        </Button>
      </div>
    </div>
  )
}
