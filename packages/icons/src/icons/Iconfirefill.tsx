import React from 'react'

export interface IconfirefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * fire_fill
 * @source figma
 */
export const Iconfirefill = React.memo((props: IconfirefillProps) => {
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
        d="M6.76848 11.5C4.7151 14.3659 2.37911 20.4343 10.8225 21.7178C6.76848 16.9563 9.39707 12.9952 12.2445 11.5C11.8794 12.4137 11.0526 14.5509 11.9287 15.2487C13.0239 16.1209 15.6841 17.3612 14.0241 21.7178C20.8635 19.1173 20.0197 11.0261 15.6669 7.13868C15.6669 7.91045 15.8859 9.35669 14.0241 10.7523C14.7086 7.63711 11.8338 3.40045 8.68521 2.5282C10.6019 5.64338 8.82186 8.63402 6.76848 11.5Z"
        fill="black"
      />
    </svg>
  )
})

Iconfirefill.displayName = 'Iconfirefill'

export default Iconfirefill
