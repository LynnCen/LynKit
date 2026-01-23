import React from 'react'

export interface IconnomarkProps extends React.SVGProps<SVGSVGElement> {}

/**
 * no_mark
 * @source figma
 */
export const Iconnomark = React.memo((props: IconnomarkProps) => {
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
        d="M12 18L19.3244 20.7467C19.6513 20.8692 20 20.6276 20 20.2785V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V20.2785C4 20.6276 4.34869 20.8692 4.67556 20.7467L12 18ZM12 16.398L5.5 18.8355V5C5.5 4.72386 5.72386 4.5 6 4.5H18C18.2761 4.5 18.5 4.72386 18.5 5V18.8355L12 16.398ZM13.0606 10.5641L15.7121 13.2156L14.6514 14.2763L11.9999 11.6248L9.34844 14.2763L8.28778 13.2157L10.9393 10.5641L8.28748 7.91234L9.34814 6.85168L11.9999 9.50349L14.6517 6.85169L15.7124 7.91235L13.0606 10.5641Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconnomark.displayName = 'Iconnomark'

export default Iconnomark
