import React from 'react'

export interface IconaitextProps extends React.SVGProps<SVGSVGElement> {}

/**
 * AI_text
 * @source figma
 */
export const Iconaitext = React.memo((props: IconaitextProps) => {
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
        d="M19.5 5C19.5 4.72386 19.2761 4.5 19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H11V21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V11.9998H19.5V5ZM17.2915 13.6006L21.6565 21.0518H20.15L19.2514 19.5127H16.2998L17.1311 18.0127H18.3757L17.2915 16.1557L14.5 21.0518H13L17.2915 13.6006ZM8 7.99975V9.49975H11.25V16.7498H12.75V9.49975H16V7.99975H8ZM23.5 14.5557H22V21.0525H23.5V14.5557Z"
        fill="black"
        fillOpacity={0.1}
      />
    </svg>
  )
})

Iconaitext.displayName = 'Iconaitext'

export default Iconaitext
