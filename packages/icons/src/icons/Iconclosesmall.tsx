import React from 'react'

export interface IconclosesmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * close_small
 * @source figma
 */
export const Iconclosesmall = React.memo((props: IconclosesmallProps) => {
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
        d="M12 13.0548L16.4452 17.5L17.5 16.4452L13.0548 12L17.5 7.55484L16.4452 6.5L12 10.9452L7.55484 6.5L6.5 7.55484L10.9452 12L6.5 16.4452L7.55484 17.5L12 13.0548Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconclosesmall.displayName = 'Iconclosesmall'

export default Iconclosesmall
