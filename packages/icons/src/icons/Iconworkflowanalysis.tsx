import React from 'react'

export interface IconworkflowanalysisProps extends React.SVGProps<SVGSVGElement> {}

/**
 * workflow_analysis
 * @source figma
 */
export const Iconworkflowanalysis = React.memo((props: IconworkflowanalysisProps) => {
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
        d="M7.60802 11.3294L5.4867 9.20812L6.54736 8.14746L7.60803 9.20813L9.72934 7.08682L10.79 8.14748L7.60802 11.3294Z"
        fill="black"
      />
      <path
        d="M7.60802 17.2621L10.79 14.0801L9.72934 13.0194L7.60803 15.1407L6.54736 14.0801L5.4867 15.1407L7.60802 17.2621Z"
        fill="black"
      />
      <path d="M17.9731 8.28125H12.9731V9.78125H17.9731V8.28125Z" fill="black" />
      <path d="M12.9731 14.3909H17.9731V15.8909H12.9731V14.3909Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 7C2.25 4.37665 4.37665 2.25 7 2.25H17C19.6234 2.25 21.75 4.37665 21.75 7V17C21.75 19.6234 19.6234 21.75 17 21.75H7C4.37665 21.75 2.25 19.6234 2.25 17V7ZM7 3.75C5.20507 3.75 3.75 5.20507 3.75 7V17C3.75 18.7949 5.20507 20.25 7 20.25H17C18.7949 20.25 20.25 18.7949 20.25 17V7C20.25 5.20507 18.7949 3.75 17 3.75H7Z"
        fill="black"
      />
    </svg>
  )
})

Iconworkflowanalysis.displayName = 'Iconworkflowanalysis'

export default Iconworkflowanalysis
