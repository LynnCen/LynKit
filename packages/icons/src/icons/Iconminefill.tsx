import React from 'react'

export interface IconminefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * mine_fill
 * @source figma
 */
export const Iconminefill = React.memo((props: IconminefillProps) => {
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
        d="M18.999 9C18.999 12.866 15.865 16 11.999 16C8.13303 16 4.99902 12.866 4.99902 9C4.99902 5.13401 8.13303 2 11.999 2C15.865 2 18.999 5.13401 18.999 9ZM11.999 6.25C10.2041 6.25 8.74902 7.70507 8.74902 9.5H7.24902C7.24902 6.87665 9.37567 4.75 11.999 4.75V6.25ZM3.62225 19.0656C6.00454 20.7579 8.89035 21.75 11.9994 21.75C15.1085 21.75 17.9943 20.7579 20.3766 19.0656C20.8554 18.7255 20.9865 18.1593 20.8219 17.6905C20.6602 17.2302 20.22 16.875 19.6554 16.875H4.34345C3.77891 16.875 3.33865 17.2302 3.17702 17.6905C3.0124 18.1593 3.14352 18.7255 3.62225 19.0656Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconminefill.displayName = 'Iconminefill'

export default Iconminefill
