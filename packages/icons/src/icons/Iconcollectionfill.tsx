import React from 'react'

export interface IconcollectionfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * collection_fill
 * @source figma
 */
export const Iconcollectionfill = React.memo((props: IconcollectionfillProps) => {
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
        d="M10.8864 3.76627C11.2893 2.76411 12.7081 2.76411 13.111 3.76627L15.0688 8.63501L20.2939 9.00424C21.3671 9.08008 21.8049 10.4219 20.9829 11.1161L16.9662 14.5082L18.2309 19.6172C18.4901 20.6641 17.3429 21.4942 16.4296 20.9206L11.9987 18.138L7.56784 20.9206C6.65447 21.4942 5.50731 20.6641 5.76648 19.6172L7.03123 14.5082L3.01453 11.1161C2.19249 10.4219 2.63027 9.08008 3.70355 9.00424L8.92863 8.63501L10.8864 3.76627Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcollectionfill.displayName = 'Iconcollectionfill'

export default Iconcollectionfill
