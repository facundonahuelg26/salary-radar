'use client'
import { Icon } from '@iconify/react'

interface IconProps {
  dataIcon: string
  style?: React.CSSProperties
}

const RenderIcon = ({ dataIcon, style }: IconProps) => {
  return <Icon icon={dataIcon} style={style} />
}

export default RenderIcon
