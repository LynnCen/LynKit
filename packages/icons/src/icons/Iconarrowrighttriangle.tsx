import React from 'react'

export interface IconarrowrighttriangleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_right_triangle
 * @source figma
 */
export const Iconarrowrighttriangle = React.memo((props: IconarrowrighttriangleProps) => {
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
        d="M10.3254 17.2925C10.0011 17.5705 9.5 17.3401 9.5 16.9129L9.5 7.08711C9.5 6.65993 10.0011 6.42948 10.3254 6.70748L16.0571 11.6204C16.2899 11.8199 16.2899 12.1801 16.0571 12.3796L10.3254 17.2925Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowrighttriangle.displayName = 'Iconarrowrighttriangle'

export default Iconarrowrighttriangle
