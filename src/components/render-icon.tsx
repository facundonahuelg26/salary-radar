'use client'
import { Icon } from '@iconify/react'

interface IconProps {
  dataIcon: string
  className?: string
}

const RenderIcon = ({ dataIcon, className }: IconProps) => {
  return (
    <Icon
      icon={dataIcon}
      className={`w-6 h-6 filter brightness-0 invert ${className}`}
    />
  )
}

export default RenderIcon
