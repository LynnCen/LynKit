import React from 'react'

export interface IconuploadstaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * upload_static
 * @source figma
 */
export const Iconuploadstatic = React.memo((props: IconuploadstaticProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.5059 12.0644L12.7497 9.65283V17H11.2497V9.65283L8.49362 12.0644L7.50586 10.9356L11.9997 7.00342L16.4936 10.9356L15.5059 12.0644Z"
        fill="url(#paint0_linear_12174_3694)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_12174_3694"
          x1="2"
          y1="12"
          x2="22"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43BBFF" />
          <stop offset="1" stopColor="#30E2B0" />
        </linearGradient>
      </defs>
    </svg>
  )
})

Iconuploadstatic.displayName = 'Iconuploadstatic'

export default Iconuploadstatic
