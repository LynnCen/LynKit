import React from 'react'

export interface IcontextdeformationProps extends React.SVGProps<SVGSVGElement> {}

/**
 * text_deformation
 * @source figma
 */
export const Icontextdeformation = React.memo((props: IcontextdeformationProps) => {
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
        d="M21 18.5C21 18.5 20.4329 18.1219 19.5 17.6342C17.805 16.7481 14.9025 15.5 12 15.5C9.09749 15.5 6.19499 16.7481 4.5 17.6342C3.56711 18.1219 3 18.5 3 18.5V8.5C3 8.5 6 5.5 12 5.5C18 5.5 21 8.5 21 8.5V18.5ZM19.5 15.9555V9.20331C19.1877 8.97217 18.714 8.65903 18.0792 8.34164C16.7626 7.68336 14.7409 7 12 7C9.25915 7 7.23739 7.68336 5.92082 8.34164C5.28604 8.65903 4.81228 8.97217 4.5 9.20331V15.9555C4.72218 15.8481 4.9571 15.7387 5.20329 15.6293C6.97475 14.842 9.44766 14 12 14C14.5523 14 17.0252 14.842 18.7967 15.6293C19.0429 15.7387 19.2778 15.8481 19.5 15.9555Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontextdeformation.displayName = 'Icontextdeformation'

export default Icontextdeformation
