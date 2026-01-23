import React from 'react'

export interface IconretryProps extends React.SVGProps<SVGSVGElement> {}

/**
 * retry
 * @source figma
 */
export const Iconretry = React.memo((props: IconretryProps) => {
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
        d="M12 19.5C15.2409 19.5 18.0017 17.4444 19.0496 14.5658L20.4595 15.079C19.202 18.5333 15.8891 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604L20.5 3.5V9.5H14.5L17.3033 6.6967C15.9461 5.33947 14.0711 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconretry.displayName = 'Iconretry'

export default Iconretry
