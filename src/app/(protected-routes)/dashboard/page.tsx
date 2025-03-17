import { ROUTES } from '@/utils'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
// import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center   p-5 sm:p-0 sm:pt-20'>
      <div className='w-full max-w-[320px] sm:max-w-lg text-center flex justify-center'>
        {/* Contenido centrado en mobile arriba, en desktop más equilibrado */}
        <div className='w-full max-w-md'>
          <h1 className='text-2xl font-bold mb-4'>
            Conoce tu valor en el mercado con Radar de Salarios
          </h1>
          <p className='text-base leading-relaxed'>
            Descubrí información clave sobre los salarios en tu industria para
            tomar decisiones con más certeza. Compará sueldos según tu puesto,
            experiencia y otros filtros personalizados para entender mejor tu
            posición en el mercado laboral.
          </p>
          <p className='text-base leading-relaxed mt-4'>
            Nuestro proceso de registro es rápido y sencillo. Solo necesitaremos
            algunos datos para brindarte la mejor experiencia.
          </p>
          <Button
            as={Link}
            href={ROUTES.ONBOARDING}
            className='w-full max-w-[320px] h-12 mt-6 text-base font-semibold'
            color='primary'
            variant='solid'
          >
            Completar proceso de registro
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
