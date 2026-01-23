import React from 'react'

export interface IconhuabanstaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * huaban_static
 * @source figma
 */
export const Iconhuabanstatic = React.memo((props: IconhuabanstaticProps) => {
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
        d="M6 0C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0H6Z"
        fill="url(#paint0_linear_2774_1578)"
      />
      <path
        d="M4.5 8.40816C4.5 14.5338 9.46671 19.5 15.5913 19.5H19.5V15.5919C19.5 9.46626 14.5333 4.5 8.40867 4.5H4.5V8.40816Z"
        fill="white"
        fillOpacity={0.6}
      />
      <path
        d="M10.8852 16.2188C15.6374 16.2188 19.4914 12.2659 19.4914 7.52522V4.5H16.4584C11.7055 4.5 7.78125 8.34408 7.78125 13.0841V16.2188H10.8852Z"
        fill="white"
        fillOpacity={0.8}
      />
      <defs>
        <linearGradient
          id="paint0_linear_2774_1578"
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C02E42" />
          <stop offset="1" stopColor="#C02E42" />
        </linearGradient>
      </defs>
    </svg>
  )
})

Iconhuabanstatic.displayName = 'Iconhuabanstatic'

export default Iconhuabanstatic
