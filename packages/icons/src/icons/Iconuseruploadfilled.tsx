import React from 'react'

export interface IconuseruploadfilledProps extends React.SVGProps<SVGSVGElement> {}

/**
 * user_upload_filled
 * @source figma
 */
export const Iconuseruploadfilled = React.memo((props: IconuseruploadfilledProps) => {
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
        d="M11.9995 20.5012C14.2223 20.5012 16.2457 19.648 17.7603 18.2513L17.76 18.251C18.0057 18.0245 18.2379 17.7837 18.4555 17.53C16.7609 15.9598 14.4927 15 12.0003 15C9.50783 15 7.23953 15.9599 5.54492 17.5302C5.76217 17.7835 5.99408 18.0239 6.23933 18.2501L6.23835 18.251C7.75298 19.6479 9.7766 20.5012 11.9995 20.5012ZM21.9995 12.0012C21.9995 14.3662 21.1785 16.5394 19.806 18.2514C17.9734 20.5378 15.1573 22.002 11.9992 22.002C8.841 22.002 6.02478 20.538 4.19214 18.2516C2.81985 16.5396 1.99951 14.366 1.99951 12.0012C1.99951 6.47837 6.47666 2.00122 11.9995 2.00122C17.5224 2.00122 21.9995 6.47837 21.9995 12.0012ZM12 12.5001C13.6569 12.5001 15 11.1569 15 9.50006C15 7.84321 13.6569 6.50006 12 6.50006C10.3431 6.50006 9 7.84321 9 9.50006C9 11.1569 10.3431 12.5001 12 12.5001Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconuseruploadfilled.displayName = 'Iconuseruploadfilled'

export default Iconuseruploadfilled
