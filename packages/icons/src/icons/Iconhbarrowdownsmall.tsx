import React from 'react'

export interface IconhbarrowdownsmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * hb_arrow_down_small
 * @source figma
 */
export const Iconhbarrowdownsmall = React.memo((props: IconhbarrowdownsmallProps) => {
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
        d="M16.7929 8.79302C17.1834 8.40249 17.8164 8.40249 18.207 8.79302C18.5974 9.18354 18.5975 9.81657 18.207 10.2071L12.707 15.7071C12.3164 16.0976 11.6834 16.0975 11.2929 15.7071L5.79289 10.2071C5.40237 9.81656 5.40237 9.18354 5.79289 8.79302C6.18341 8.40249 6.81643 8.40249 7.20695 8.79302L11.9999 13.586L16.7929 8.79302Z"
        fill="black"
      />
    </svg>
  )
})

Iconhbarrowdownsmall.displayName = 'Iconhbarrowdownsmall'

export default Iconhbarrowdownsmall
