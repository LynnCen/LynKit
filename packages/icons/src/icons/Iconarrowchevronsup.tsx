import React from 'react'

export interface IconarrowchevronsupProps extends React.SVGProps<SVGSVGElement> {}

/**
 * arrow_chevrons_up
 * @source figma
 */
export const Iconarrowchevronsup = React.memo((props: IconarrowchevronsupProps) => {
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
        d="M13.0304 6.46966L12.5001 5.93933L11.9697 6.46966L7.46973 10.9697L8.53039 12.0303L12.5001 8.06065L16.4697 12.0303L17.5304 10.9697L13.0304 6.46966ZM13.0304 12.4697L12.5001 11.9393L11.9697 12.4697L7.46973 16.9697L8.53039 18.0303L12.5001 14.0607L16.4697 18.0303L17.5304 16.9697L13.0304 12.4697Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconarrowchevronsup.displayName = 'Iconarrowchevronsup'

export default Iconarrowchevronsup
