import React from 'react'

export interface IconbrushthinfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * brush_thin_fill
 * @source figma
 */
export const Iconbrushthinfill = React.memo((props: IconbrushthinfillProps) => {
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
        d="M12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconbrushthinfill.displayName = 'Iconbrushthinfill'

export default Iconbrushthinfill
