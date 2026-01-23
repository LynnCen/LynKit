import React from 'react'

export interface IconpositionverticalcenterProps extends React.SVGProps<SVGSVGElement> {}

/**
 * position_vertical_center
 * @source figma
 */
export const Iconpositionverticalcenter = React.memo((props: IconpositionverticalcenterProps) => {
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
        d="M12 8.96074L15.4687 6.18372L14.5312 5.01276L12.75 6.43882V2H11.25V6.43882L9.46871 5.01276L8.53125 6.18372L12 8.96074ZM9.46871 18.9872L8.53125 17.8163L12 15.0393L15.4687 17.8163L14.5312 18.9872L12.75 17.5612V22H11.25V17.5612L9.46871 18.9872ZM20 12.75H4V11.25H20V12.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconpositionverticalcenter.displayName = 'Iconpositionverticalcenter'

export default Iconpositionverticalcenter
