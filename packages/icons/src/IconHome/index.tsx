import React from 'react'

export interface IconProps {
  style?: React.CSSProperties
  className?: string
  color?: string
  size?: number | string
}

export const IconHome: React.FC<IconProps> = ({
  style,
  className,
  color = 'currentColor',
  size = '1em',
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      className={className}
      style={style}
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  )
}
