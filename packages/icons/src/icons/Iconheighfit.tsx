import React from 'react'

export interface IconheighfitProps extends React.SVGProps<SVGSVGElement> {}

/**
 * heigh_fit
 * @source figma
 */
export const Iconheighfit = React.memo((props: IconheighfitProps) => {
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
        d="M8.53127 3.81626L12 1.03925L15.4687 3.81627L14.5313 4.98723L12.75 3.56117V7.99999H11.25V3.56117L9.46873 4.98723L8.53127 3.81626Z"
        fill="#222529"
      />
      <path
        d="M7 3.99999H5C3.89543 3.99999 3 4.89542 3 5.99999V18C3 19.1046 3.89543 20 5 20H7V18.5H5C4.72386 18.5 4.5 18.2761 4.5 18L4.5 5.99999C4.5 5.72385 4.72386 5.49999 5 5.49999H7V3.99999Z"
        fill="#222529"
      />
      <path
        d="M17 18.5H19C19.2761 18.5 19.5 18.2761 19.5 18V5.99999C19.5 5.72385 19.2761 5.49999 19 5.49999H17V3.99999H19C20.1046 3.99999 21 4.89542 21 5.99999V18C21 19.1046 20.1046 20 19 20H17V18.5Z"
        fill="#222529"
      />
      <path
        d="M8.53127 20.1837L9.46873 19.0127L11.25 20.4388V16H12.75V20.4388L14.5313 19.0127L15.4687 20.1837L12 22.9607L8.53127 20.1837Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconheighfit.displayName = 'Iconheighfit'

export default Iconheighfit
