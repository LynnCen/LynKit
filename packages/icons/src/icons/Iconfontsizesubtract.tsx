import React from 'react'

export interface IconfontsizesubtractProps extends React.SVGProps<SVGSVGElement> {}

/**
 * font_size_subtract
 * @source figma
 */
export const Iconfontsizesubtract = React.memo((props: IconfontsizesubtractProps) => {
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
        d="M7.41613 4.5L2 19.5H3.59479L5.30989 14.75H10.8393L12.4225 19.5H14.0036L9.00408 4.5H7.41613ZM10.3393 13.25L8.18517 6.78688L5.85151 13.25H10.3393ZM21.5 11.5H19H17.5H14V13H17.5H19H21.5V11.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconfontsizesubtract.displayName = 'Iconfontsizesubtract'

export default Iconfontsizesubtract
