import RenderIcon from '@/components/render-icon'
import { Button } from '@heroui/button'
import { signIn } from '@/auth'

const Login = () => {
  return (
    <div className='flex flex-col items-center sm:justify-center min-h-screen p-5 sm:p-0'>
      <div className='w-full max-w-[320px] text-center sm:mt-0 mt-20'>
        <h1 className='text-2xl font-bold mb-6'>
          Iniciar sesión en Radar de Salarios
        </h1>
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
            startContent={<RenderIcon dataIcon='logos:github-icon' />}
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
            startContent={<RenderIcon dataIcon='logos:linkedin-icon' />}
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
