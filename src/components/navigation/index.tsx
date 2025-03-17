'use client'
import {
  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/navbar'
import { Link } from '@heroui/link'
import { ROUTES } from '@/utils'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import CustomDropdown from './custom-dropdown'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { title: 'Dashboard', link: ROUTES.DASHBOARD },
    { title: 'Proceso de registro', link: ROUTES.ONBOARDING },
  ]
  const pathname = usePathname()

  return (
    <Navbar
      maxWidth='full'
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-secondary',
        ],
      }}
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarBrand>
        <p className='font-bold text-inherit'>RADAR DE SALARIOS</p>
      </NavbarBrand>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive={pathname === ROUTES.DASHBOARD}>
          <Link color='foreground' href={ROUTES.DASHBOARD}>
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === ROUTES.ONBOARDING}>
          <Link aria-current='page' color='foreground' href={ROUTES.ONBOARDING}>
            Proceso de registro
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            isActive={pathname === item.link}
          >
            <Link
              className={`w-full ${pathname === item.link && 'text-secondary'}`}
              color='foreground'
              href={item.link}
              size='lg'
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent as='div' justify='end'>
        <CustomDropdown />
      </NavbarContent>
    </Navbar>
  )
}

export default Navigation
