import React from 'react'

export interface IconaddcirclestaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * add_circle_static
 * @source figma
 */
export const Iconaddcirclestatic = React.memo((props: IconaddcirclestaticProps) => {
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
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z"
        fill="#D9DCDF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4498 6.59998H11.5498V11.55H6.59961V12.45H11.5498V17.4H12.4498V12.45H17.3996V11.55H12.4498V6.59998Z"
        fill="#7F8792"
      />
    </svg>
  )
})

Iconaddcirclestatic.displayName = 'Iconaddcirclestatic'

export default Iconaddcirclestatic
