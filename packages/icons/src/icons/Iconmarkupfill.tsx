import React from 'react'

export interface IconmarkupfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * markup_fill
 * @source figma
 */
export const Iconmarkupfill = React.memo((props: IconmarkupfillProps) => {
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
        d="M18.1313 8.71739L13.8887 4.47475C13.6934 4.27949 13.3769 4.27949 13.1816 4.47476L4.11261 13.5437L4.35654 18.2496L9.06236 18.4935L18.1313 9.4245C18.3266 9.22924 18.3266 8.91266 18.1313 8.71739ZM9.65115 20.026L19.192 10.4852C19.9731 9.70411 19.9731 8.43778 19.192 7.65673L14.9494 3.41409C14.1683 2.63305 12.902 2.63305 12.1209 3.4141L2.58008 12.955L2.92855 19.6775L9.65115 20.026Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1867 6.68705C12.4796 6.39416 12.9545 6.39416 13.2474 6.68705L15.9191 9.35877C16.212 9.65166 16.212 10.1265 15.9191 10.4194C15.6262 10.7123 15.1513 10.7123 14.8584 10.4194L12.1867 7.74771C11.8938 7.45482 11.8938 6.97995 12.1867 6.68705Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4995 20.8565H11.9995V19.3565H13.4995V20.8565Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.4995 20.8565H14.9995V19.3565H20.4995L20.4995 20.8565Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconmarkupfill.displayName = 'Iconmarkupfill'

export default Iconmarkupfill
