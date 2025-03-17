import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
} from '@heroui/dropdown'
import RenderIcon from '../render-icon'
import { signOut } from 'next-auth/react'
import UserData from './user-data'
import AvatarData from './avatar-data'
const CustomDropdown = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [openDarkTheme, setOpenDarkTheme] = useState(false)

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDarkTheme(false)
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {openDarkTheme ? (
        <Dropdown placement='bottom-end'>
          <AvatarData />
          <DropdownMenu aria-label='Profile Actions' variant='flat'>
            <DropdownItem
              key='theme'
              className='cursor-default w-full !px-0'
              closeOnSelect={false}
              startContent={<RenderIcon dataIcon='formkit:arrowleft' />}
              onPress={() => setOpenDarkTheme(false)}
            >
              Aspecto
            </DropdownItem>
            <DropdownItem
              key='theme dark'
              className='cursor-default w-full !px-0'
              closeOnSelect={false}
              startContent={
                <RenderIcon
                  dataIcon='material-symbols:check'
                  className={`${theme === 'dark' ? '' : 'opacity-0'}`}
                />
              }
              onPress={() => {
                setTheme('dark')
                setOpenDarkTheme(false)
              }}
            >
              Tema oscuro
            </DropdownItem>
            <DropdownItem
              key='theme light'
              className='cursor-default w-full !px-0'
              closeOnSelect={false}
              startContent={
                <RenderIcon
                  dataIcon='material-symbols:check'
                  className={`${theme === 'light' ? '' : 'opacity-0'}`}
                />
              }
              onPress={() => {
                setTheme('light')
                setOpenDarkTheme(false)
              }}
            >
              Tema claro
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Dropdown placement='bottom-end'>
          <AvatarData />
          <DropdownMenu
            aria-label='Profile Actions'
            variant='flat'
            // disabledKeys={['email']}
            closeOnSelect={false}
          >
            <DropdownSection showDivider title='Usuario'>
              <DropdownItem key='profile'>
                <UserData />
              </DropdownItem>
            </DropdownSection>
            <DropdownSection showDivider title='Personalizar'>
              <DropdownItem
                key='theme'
                closeOnSelect={false}
                startContent={<RenderIcon dataIcon='heroicons-solid:moon' />}
                onPress={() => {
                  setOpenDarkTheme(true)
                }}
              >
                Aspecto:
              </DropdownItem>
              <DropdownItem
                key='language'
                startContent={
                  <RenderIcon dataIcon='material-symbols:translate' />
                }
              >
                Idioma:
              </DropdownItem>
            </DropdownSection>
            <DropdownItem
              key='logout'
              color='danger'
              startContent={
                <RenderIcon dataIcon='material-symbols:logout-rounded' />
              }
              onPress={() => signOut()}
            >
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </>
  )
}

export default CustomDropdown
