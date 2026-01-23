import React from 'react'

export interface IconchartProps extends React.SVGProps<SVGSVGElement> {}

/**
 * chart
 * @source figma
 */
export const Iconchart = React.memo((props: IconchartProps) => {
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
        d="M16.7684 17.7893C17.6732 17.0431 18.4001 16.089 18.8759 15H20.4879C19.8645 16.7636 18.7071 18.2749 17.21 19.3395L16.7684 17.7893ZM14.0552 19.2149C13.4021 19.4006 12.7126 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12H21C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C12.8552 21 13.6825 20.8807 14.4662 20.6579L14.0552 19.2149Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconchart.displayName = 'Iconchart'

export default Iconchart
