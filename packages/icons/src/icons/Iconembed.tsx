import React from 'react'

export interface IconembedProps extends React.SVGProps<SVGSVGElement> {}

/**
 * embed
 * @source figma
 */
export const Iconembed = React.memo((props: IconembedProps) => {
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
        d="M9.27881 18.7939L13.2788 4.79395L14.7211 5.20603L10.7211 19.206L9.27881 18.7939ZM3.12132 12L6.65685 15.5355L5.59619 16.5962L1 12L5.59619 7.40381L6.65685 8.46447L3.12132 12ZM17.3431 15.5355L20.8787 12L17.3431 8.46447L18.4038 7.40381L23 12L18.4038 16.5962L17.3431 15.5355Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconembed.displayName = 'Iconembed'

export default Iconembed
