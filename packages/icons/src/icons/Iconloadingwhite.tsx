import React from 'react'

export interface IconloadingwhiteProps extends React.SVGProps<SVGSVGElement> {}

/**
 * loading_white
 * @source figma
 */
export const Iconloadingwhite = React.memo((props: IconloadingwhiteProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect width="24" height="24" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z"
        fill="white"
        fillOpacity={0.2}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0711 19.0711C22.9763 15.1659 22.9763 8.83422 19.0711 4.92898C15.1658 1.02373 8.83418 1.02373 4.92893 4.92898C4.34315 5.51476 4.34315 6.46451 4.92893 7.0503C5.51472 7.63608 6.46447 7.63608 7.05025 7.0503C9.78392 4.31663 14.2161 4.31663 16.9497 7.0503C19.6834 9.78397 19.6834 14.2161 16.9497 16.9498C16.364 17.5356 16.364 18.4853 16.9497 19.0711C17.5355 19.6569 18.4853 19.6569 19.0711 19.0711Z"
        fill="white"
      />
    </svg>
  )
})

Iconloadingwhite.displayName = 'Iconloadingwhite'

export default Iconloadingwhite
