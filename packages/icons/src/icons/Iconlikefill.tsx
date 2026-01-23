import React from 'react'

export interface IconlikefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * like_fill
 * @source figma
 */
export const Iconlikefill = React.memo((props: IconlikefillProps) => {
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
        d="M16.1066 4C19.1241 4 21.5833 6.5004 21.5833 9.48081C21.5833 12.5671 19.752 15.2858 16.6812 17.7604C15.9062 18.385 15.0912 18.9621 14.1954 19.5396C13.6183 19.9044 12.5826 20.644 12 21C12 21 10.3083 19.8033 9.80454 19.46C8.90913 18.85 8.09246 18.245 7.31663 17.5996C4.24579 15.0458 2.41663 12.3716 2.41663 9.48081C2.41663 6.50081 4.87621 4 7.89371 4C9.48121 4 10.96 5.03583 12 6.2C13.0404 5.03583 14.5187 4 16.1066 4Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlikefill.displayName = 'Iconlikefill'

export default Iconlikefill
