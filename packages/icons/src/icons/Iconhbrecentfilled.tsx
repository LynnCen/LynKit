import React from 'react'

export interface IconhbrecentfilledProps extends React.SVGProps<SVGSVGElement> {}

/**
 * hb_ recent_filled
 * @source figma
 */
export const Iconhbrecentfilled = React.memo((props: IconhbrecentfilledProps) => {
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
        d="M11.9997 21.271C17.12 21.271 21.2709 17.1202 21.2709 11.9998C21.2709 6.87949 17.12 2.72864 11.9997 2.72864C6.87936 2.72864 2.72852 6.87949 2.72852 11.9998C2.72852 17.1202 6.87936 21.271 11.9997 21.271ZM12.9268 8.28093V11.8366L16.2168 13.9956C16.6449 14.2766 16.7642 14.8513 16.4833 15.2794C16.2024 15.7075 15.6276 15.8268 15.1995 15.5459L11.491 13.1122C11.2299 12.9408 11.0726 12.6494 11.0726 12.3371V8.28093C11.0726 7.7689 11.4877 7.35382 11.9997 7.35382C12.5117 7.35382 12.9268 7.7689 12.9268 8.28093Z"
        fill="black"
      />
    </svg>
  )
})

Iconhbrecentfilled.displayName = 'Iconhbrecentfilled'

export default Iconhbrecentfilled
