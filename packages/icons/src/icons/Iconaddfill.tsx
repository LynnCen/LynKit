import React from 'react'

export interface IconaddfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * add_fill
 * @source figma
 */
export const Iconaddfill = React.memo((props: IconaddfillProps) => {
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
        d="M4.92893 19.0711C8.83418 22.9763 15.1658 22.9763 19.0711 19.0711C22.9763 15.1658 22.9763 8.83418 19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711ZM10.921 16.5778V13.079H7.42215V10.921H10.921V7.42215H13.079V10.921H16.5778V13.079H13.079V16.5778H10.921Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconaddfill.displayName = 'Iconaddfill'

export default Iconaddfill
