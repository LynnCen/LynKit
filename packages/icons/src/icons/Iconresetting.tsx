import React from 'react'

export interface IconresettingProps extends React.SVGProps<SVGSVGElement> {}

/**
 * resetting
 * @source figma
 */
export const Iconresetting = React.memo((props: IconresettingProps) => {
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
        d="M13 2C18.5228 2 23 6.47715 23 12C23 17.5228 18.5228 22 13 22C8.67798 22 4.99627 19.2582 3.59961 15.4189L5.06152 15.0273C6.28144 18.2244 9.37439 20.4961 13 20.4961C17.6923 20.4961 21.4961 16.6923 21.4961 12C21.4961 7.30766 17.6923 3.50391 13 3.50391C9.83726 3.50391 7.08079 5.23332 5.61816 7.79688H9.77734V9.29688H3.02734V2.54688H4.52734V6.68848C6.29633 3.87248 9.42899 2 13 2Z"
        fill="#222529"
      />
      <path
        d="M13.6875 12.4717L17.4395 15.4736L16.5811 16.5469L12.3125 13.1328V7.1875H13.6875V12.4717Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconresetting.displayName = 'Iconresetting'

export default Iconresetting
