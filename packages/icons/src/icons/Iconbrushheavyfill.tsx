import React from 'react'

export interface IconbrushheavyfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * brush_heavy_fill
 * @source figma
 */
export const Iconbrushheavyfill = React.memo((props: IconbrushheavyfillProps) => {
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
        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconbrushheavyfill.displayName = 'Iconbrushheavyfill'

export default Iconbrushheavyfill
