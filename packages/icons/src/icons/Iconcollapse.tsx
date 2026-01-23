import React from 'react'

export interface IconcollapseProps extends React.SVGProps<SVGSVGElement> {}

/**
 * collapse
 * @source figma
 */
export const Iconcollapse = React.memo((props: IconcollapseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M20.5607 20V4L19.0607 4V20H20.5607Z" fill="#222529" />
      <path
        d="M3.00003 11.9999L8.03036 17.0303L9.09102 15.9696L5.87135 12.7499L18.0607 12.7499V11.2499L5.87137 11.2499L9.09102 8.03032L8.03037 6.96966L3.00003 11.9999Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcollapse.displayName = 'Iconcollapse'

export default Iconcollapse
