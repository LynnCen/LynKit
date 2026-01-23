import React from 'react'

export interface IconhbarrowleftsmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * hb_arrow_left_small
 * @source figma
 */
export const Iconhbarrowleftsmall = React.memo((props: IconhbarrowleftsmallProps) => {
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
        d="M13.7929 5.79302C14.1834 5.40249 14.8164 5.40249 15.207 5.79302C15.5974 6.18354 15.5975 6.81657 15.207 7.20708L10.414 12L15.207 16.793C15.5974 17.1835 15.5975 17.8166 15.207 18.2071C14.8164 18.5976 14.1834 18.5976 13.7929 18.2071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6835 8.29289 11.293L13.7929 5.79302Z"
        fill="black"
      />
    </svg>
  )
})

Iconhbarrowleftsmall.displayName = 'Iconhbarrowleftsmall'

export default Iconhbarrowleftsmall
