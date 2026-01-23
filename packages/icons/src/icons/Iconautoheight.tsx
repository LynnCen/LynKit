import React from 'react'

export interface IconautoheightProps extends React.SVGProps<SVGSVGElement> {}

/**
 * auto_height
 * @source figma
 */
export const Iconautoheight = React.memo((props: IconautoheightProps) => {
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
        d="M16.5 18.1479L15.5221 17.0088L12.7568 19.379L12.7451 4.621L15.5104 6.99121L16.4883 5.85205L11.9942 2L7.5 5.85205L8.47787 6.99121L11.2432 4.621L11.2549 19.379L8.48957 17.0088L7.5117 18.1479L12.0059 22L16.5 18.1479Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconautoheight.displayName = 'Iconautoheight'

export default Iconautoheight
