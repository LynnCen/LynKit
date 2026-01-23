import React from 'react'

export interface IconhbarrowrightsmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * hb_arrow_right_small
 * @source figma
 */
export const Iconhbarrowrightsmall = React.memo((props: IconhbarrowrightsmallProps) => {
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
        d="M8.79289 5.79311C9.18342 5.40264 9.81645 5.40261 10.207 5.79311L15.707 11.2931C16.0974 11.6836 16.0974 12.3167 15.707 12.7072L10.207 18.2072C9.81647 18.5977 9.18343 18.5976 8.79289 18.2072C8.40237 17.8167 8.40237 17.1836 8.79289 16.7931L13.5859 12.0001L8.79289 7.20718C8.40237 6.81665 8.40237 6.18364 8.79289 5.79311Z"
        fill="black"
      />
    </svg>
  )
})

Iconhbarrowrightsmall.displayName = 'Iconhbarrowrightsmall'

export default Iconhbarrowrightsmall
