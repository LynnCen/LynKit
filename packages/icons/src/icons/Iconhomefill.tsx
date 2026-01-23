import React from 'react'

export interface IconhomefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * home_fill
 * @source figma
 */
export const Iconhomefill = React.memo((props: IconhomefillProps) => {
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
        d="M12 2L21 8V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V8L12 2Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconhomefill.displayName = 'Iconhomefill'

export default Iconhomefill
