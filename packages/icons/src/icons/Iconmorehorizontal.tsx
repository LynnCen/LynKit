import React from 'react'

export interface IconmorehorizontalProps extends React.SVGProps<SVGSVGElement> {}

/**
 * more_horizontal
 * @source figma
 */
export const Iconmorehorizontal = React.memo((props: IconmorehorizontalProps) => {
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
        d="M18.5 14C17.6716 14 17 13.3284 17 12.5C17 11.6716 17.6716 11 18.5 11C19.3284 11 20 11.6716 20 12.5C20 13.3284 19.3284 14 18.5 14ZM12.2 14C11.3716 14 10.7 13.3284 10.7 12.5C10.7 11.6716 11.3716 11 12.2 11C13.0285 11 13.7 11.6716 13.7 12.5C13.7 13.3284 13.0285 14 12.2 14ZM4.40005 12.5C4.40005 13.3284 5.07162 14 5.90005 14C6.72847 14 7.40005 13.3284 7.40005 12.5C7.40005 11.6716 6.72847 11 5.90005 11C5.07162 11 4.40005 11.6716 4.40005 12.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconmorehorizontal.displayName = 'Iconmorehorizontal'

export default Iconmorehorizontal
