import { RenderIcon } from '@/components'
import { Button } from '@heroui/button'
import { signIn } from '@/auth'
import Link from 'next/link'
import { ROUTES } from '@/utils'

const Login = () => {
  return (
    <div className='flex flex-col items-center sm:justify-center min-h-screen p-5 sm:p-0'>
      <div className='w-full max-w-[320px] sm:mt-0 mt-20'>
        <h1 className='text-2xl text-center font-bold mb-6'>
          Iniciar sesión en Radar de Salarios
        </h1>
        <p className='text-lg mb-6'>
          Quiero{' '}
          <Link href={ROUTES.HOME} className='text-fuchsia-600 hover:underline'>
            volver al inicio
          </Link>
          .
        </p>
        <form
          action={async () => {
            'use server'
            await signIn('github')
          }}
        >
          <Button
            className='w-full max-w-[320px] h-12 mb-4 text-base font-semibold'
            color='default'
            variant='solid'
            startContent={<RenderIcon dataIcon='logos:github-icon' apply />}
            type='submit'
          >
            Continuar con GitHub
          </Button>
        </form>
        <form
          action={async () => {
            'use server'
            await signIn('linkedin')
          }}
        >
          <Button
            className='w-full max-w-[320px] h-12 text-base font-semibold'
            color='secondary'
            variant='solid'
            startContent={<RenderIcon dataIcon='logos:linkedin-icon' apply />}
            type='submit'
          >
            Continuar con LinkedIn
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
