import React from 'react'

export interface IconflowchartProps extends React.SVGProps<SVGSVGElement> {}

/**
 * flow_chart
 * @source figma
 */
export const Iconflowchart = React.memo((props: IconflowchartProps) => {
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
        d="M15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15V9H15Z"
        fill="#45D582"
      />
      <rect x="10" y="10" width="11" height="11" fill="#7146E8" />
    </svg>
  )
})

Iconflowchart.displayName = 'Iconflowchart'

export default Iconflowchart
