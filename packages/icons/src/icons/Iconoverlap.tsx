import React from 'react'

export interface IconoverlapProps extends React.SVGProps<SVGSVGElement> {}

/**
 * overlap
 * @source figma
 */
export const Iconoverlap = React.memo((props: IconoverlapProps) => {
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
        d="M5 4.5H13C13.2761 4.5 13.5 4.72386 13.5 5V8.07645C10.7109 8.50712 8.50712 10.7109 8.07645 13.5H5C4.72386 13.5 4.5 13.2761 4.5 13V5C4.5 4.72386 4.72386 4.5 5 4.5ZM8.01894 15H5C3.89543 15 3 14.1046 3 13V5C3 3.89543 3.89543 3 5 3H13C14.1046 3 15 3.89543 15 5V8.01894C18.3562 8.27426 21 11.0784 21 14.5C21 18.0899 18.0899 21 14.5 21C11.0784 21 8.27426 18.3562 8.01894 15ZM15 9.52469C17.5267 9.77555 19.5 11.9073 19.5 14.5C19.5 17.2614 17.2614 19.5 14.5 19.5C11.9073 19.5 9.77555 17.5267 9.52469 15H13C14.1046 15 15 14.1046 15 13V9.52469ZM13.5 9.60002V13C13.5 13.2761 13.2761 13.5 13 13.5H9.60002C9.9977 11.5409 11.5409 9.9977 13.5 9.60002Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconoverlap.displayName = 'Iconoverlap'

export default Iconoverlap
