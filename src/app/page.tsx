import { ROUTES } from '@/utils'
import { Button } from '@heroui/button'
import Link from 'next/link'

const WelcomePage = () => {
  return (
    <div className='flex flex-col items-center sm:justify-center min-h-screen p-5 sm:p-0'>
      <div className='w-full max-w-[320px] sm:max-w-lg text-center sm:mt-0 mt-20'>
        {/* Contenido centrado en mobile arriba, en desktop más equilibrado */}
        <div className='w-full max-w-md text-center sm:mt-0 mt-20'>
          <h1 className='text-2xl font-bold mb-4'>
            Bienvenido a Radar de Salarios
          </h1>
          <p className='text-lg mb-6'>
            Para comenzar, debes{' '}
            <Link
              href={ROUTES.LOGIN}
              className='text-fuchsia-500 hover:underline'
            >
              iniciar sesión
            </Link>
            .
          </p>
          <p className='text-base leading-relaxed'>
            En Radar de Salarios, te brindamos datos actualizados y confiables
            sobre sueldos en la industria para que puedas tomar mejores
            decisiones laborales.
          </p>
          <p className='text-base leading-relaxed mt-4'>
            La transparencia salarial es clave para una mejor planificación
            laboral. Únete y descubre cómo se mueve el mercado en tu industria.
          </p>
          <Button
            as={Link}
            href={ROUTES.LOGIN}
            className='w-full max-w-[320px] h-12 mt-6 text-base font-semibold'
            color='primary'
            variant='solid'
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
