import React from 'react'

export interface IconfoldercloseProps extends React.SVGProps<SVGSVGElement> {}

/**
 * folder_close
 * @source figma
 */
export const Iconfolderclose = React.memo((props: IconfoldercloseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.8802 4.99967C9.3737 4.51374 8.70025 4.2434 7.9991 4.25012L4.96087 4.27927C3.99704 4.28852 3.25 5.08592 3.25 6.02972V17.9995C3.25 18.9495 4.00673 19.75 4.97722 19.75H19.0228C19.9933 19.75 20.75 18.9495 20.75 17.9995V8.15427C20.75 7.20425 19.9933 6.40374 19.0228 6.40374H11.8147C11.5143 6.40374 11.2219 6.28686 10.9976 6.07166L9.8802 4.99967ZM4.75 7.9V17.9995C4.75 18.1546 4.8683 18.25 4.97722 18.25H19.0228C19.1317 18.25 19.25 18.1546 19.25 17.9995V8.15427C19.25 7.99914 19.1317 7.90374 19.0228 7.90374H11.8147C11.7675 7.90374 11.7205 7.90249 11.6737 7.9H4.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconfolderclose.displayName = 'Iconfolderclose'

export default Iconfolderclose
