import React from 'react'

export interface IconfacebookfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * facebook_fill
 * @source figma
 */
export const Iconfacebookfill = React.memo((props: IconfacebookfillProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g opacity="0.9">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4244 12.7606H16.4286L16.8783 9.37575H13.4244V7.08902C13.4244 6.05205 13.7048 5.34541 15.153 5.34541L17 5.34452V2.14111C16.6805 2.09754 15.5841 2 14.3086 2C11.6457 2 9.82257 3.6691 9.82257 6.73441V9.37575H7V12.7606H9.82257L9.82308 22H13.4244V12.7606Z"
          fill="#222529"
        />
      </g>
    </svg>
  )
})

Iconfacebookfill.displayName = 'Iconfacebookfill'

export default Iconfacebookfill
