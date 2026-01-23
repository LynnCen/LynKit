import React from 'react'

export interface IconarrowrightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_right
 * @source figma
 */
export const Iconarrowright = React.memo((props: IconarrowrightProps) => {
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
        d="M14.9396 11.9991L8.46997 5.52941L9.53063 4.46875L17.061 11.9991L9.53063 19.5294L8.46997 18.4688L14.9396 11.9991Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowright.displayName = 'Iconarrowright'

export default Iconarrowright
