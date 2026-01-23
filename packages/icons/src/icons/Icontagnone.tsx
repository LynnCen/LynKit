import React from 'react'

export interface IcontagnoneProps extends React.SVGProps<SVGSVGElement> {}

/**
 * tag_none
 * @source figma
 */
export const Icontagnone = React.memo((props: IcontagnoneProps) => {
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
        d="M12.7131 16.3576L12 15.9723L11.2869 16.3576L5.5 19.4845V4C5.5 3.72386 5.72386 3.5 6 3.5H18C18.2761 3.5 18.5 3.72386 18.5 4V19.4845L12.7131 16.3576ZM20 21.1615C20 21.5402 19.5954 21.7814 19.2623 21.6014L12 17.6773L4.73769 21.6014C4.40455 21.7814 4 21.5402 4 21.1615V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V21.1615ZM14.4696 13.5303L11.9999 11.0607L9.53026 13.5303L8.4696 12.4697L10.9393 10L8.4696 7.53033L9.53026 6.46967L11.9999 8.93934L14.4696 6.46967L15.5303 7.53033L13.0606 10L15.5303 12.4697L14.4696 13.5303Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontagnone.displayName = 'Icontagnone'

export default Icontagnone
