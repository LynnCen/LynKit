import React from 'react'

export interface IconcloudsavedisabledstaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * cloud_save_disabled_static
 * @source figma
 */
export const Iconcloudsavedisabledstatic = React.memo((props: IconcloudsavedisabledstaticProps) => {
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
        d="M12 3.25C9.23322 3.25 6.85685 4.91427 5.81432 7.29442C3.23861 7.63053 1.25 9.83289 1.25 12.5C1.25 15.3995 3.60051 17.75 6.5 17.75H8V16.25H6.5C4.42893 16.25 2.75 14.5711 2.75 12.5C2.75 10.4736 4.35756 8.82234 6.36655 8.75232L6.87754 8.73451L7.04768 8.25236C7.76807 6.211 9.71438 4.75 12 4.75C14.2856 4.75 16.2319 6.211 16.9523 8.25236L17.1225 8.73451L17.6334 8.75232C19.6424 8.82234 21.25 10.4736 21.25 12.5C21.25 14.5711 19.5711 16.25 17.5 16.25H16V17.75H17.5C20.3995 17.75 22.75 15.3995 22.75 12.5C22.75 9.83289 20.7614 7.63052 18.1857 7.29442C17.1431 4.91427 14.7668 3.25 12 3.25Z"
        fill="#222529"
      />
      <path d="M11.25 13V18H12.75V13H11.25Z" fill="#DE9D3E" />
      <path d="M11.25 19V20.5H12.75V19H11.25Z" fill="#DE9D3E" />
    </svg>
  )
})

Iconcloudsavedisabledstatic.displayName = 'Iconcloudsavedisabledstatic'

export default Iconcloudsavedisabledstatic
