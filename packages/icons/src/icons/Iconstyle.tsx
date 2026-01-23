import React from 'react'

export interface IconstyleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * style
 * @source figma
 */
export const Iconstyle = React.memo((props: IconstyleProps) => {
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
        d="M14.2041 3.01074C15.2128 3.113 16 3.96435 16 5V7.29102C18.8913 8.15166 21 10.8291 21 14C21 17.866 17.866 21 14 21C10.8291 21 8.15166 18.8913 7.29102 16H5L4.7959 15.9893C3.85435 15.8938 3.1062 15.1457 3.01074 14.2041L3 14V5C3 3.96435 3.78722 3.113 4.7959 3.01074L5 3H14L14.2041 3.01074ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V14C4.5 14.2761 4.72386 14.5 5 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V5C14.5 4.72386 14.2761 4.5 14 4.5H5ZM8.87695 16C9.6772 18.0483 11.6683 19.5 14 19.5C17.0376 19.5 19.5 17.0376 19.5 14C19.5 11.6683 18.0483 9.6772 16 8.87695V14L15.9893 14.2041C15.8938 15.1457 15.1457 15.8938 14.2041 15.9893L14 16H8.87695Z"
        fill="black"
      />
    </svg>
  )
})

Iconstyle.displayName = 'Iconstyle'

export default Iconstyle
