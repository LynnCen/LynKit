import React from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      {children}
    </button>
  )
}

export default Button
