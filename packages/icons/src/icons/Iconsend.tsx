import React from 'react'

export interface IconsendProps extends React.SVGProps<SVGSVGElement> {}

/**
 * send
 * @source figma
 */
export const Iconsend = React.memo((props: IconsendProps) => {
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
        d="M18.2297 5.106L4.11156 9.3033L7.46042 11.908C7.78738 12.1623 7.84628 12.6335 7.59198 12.9604C7.33768 13.2874 6.86647 13.3463 6.53951 13.092L2.80694 10.1889C2.00415 9.56449 2.2433 8.29384 3.21815 8.00402L19.9325 3.0349C20.8677 2.75685 21.7467 3.6097 21.4971 4.55293L17.4344 19.9007C17.1952 20.8044 16.0848 21.1353 15.3899 20.5099L10.9982 16.5574C10.6904 16.2804 10.6654 15.8061 10.9425 15.4983C11.2196 15.1904 11.6938 15.1654 12.0017 15.4425L16.0891 19.1212L19.584 5.91842L9.24996 14.8432V19.5C9.24996 19.9142 8.91418 20.25 8.49996 20.25C8.08575 20.25 7.74996 19.9142 7.74996 19.5V14.683C7.74996 14.3488 7.89536 14.0312 8.1483 13.8127L18.2297 5.106Z"
        fill="black"
      />
    </svg>
  )
})

Iconsend.displayName = 'Iconsend'

export default Iconsend
