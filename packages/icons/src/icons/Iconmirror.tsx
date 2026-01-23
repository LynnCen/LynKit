import React from 'react'

export interface IconmirrorProps extends React.SVGProps<SVGSVGElement> {}

/**
 * mirror
 * @source figma
 */
export const Iconmirror = React.memo((props: IconmirrorProps) => {
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
        d="M11 4V2H13V4H11ZM11 8.06696L11 6H13L13 8.06696H11ZM11 18V16H13V18H11ZM11 22L11 20H13L13 22L11 22ZM20.5 8.06696L15.4432 12L20.5 15.933V8.06696ZM20.3861 6.25529C21.0429 5.7444 22 6.21249 22 7.04464V16.9554C22 17.7875 21.0429 18.2556 20.3861 17.7447L14.0149 12.7894C13.5001 12.389 13.5001 11.611 14.0149 11.2106L20.3861 6.25529ZM8.55677 12L3.5 8.06696V15.933L8.55677 12ZM2 7.04464C2 6.21249 2.95708 5.7444 3.61394 6.25529L9.98512 11.2106C10.4999 11.611 10.4999 12.389 9.98512 12.7894L3.61394 17.7447C2.95708 18.2556 2 17.7875 2 16.9554V7.04464Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconmirror.displayName = 'Iconmirror'

export default Iconmirror
