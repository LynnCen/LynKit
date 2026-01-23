import React from 'react'

export interface IconcompassProps extends React.SVGProps<SVGSVGElement> {}

/**
 * compass
 * @source figma
 */
export const Iconcompass = React.memo((props: IconcompassProps) => {
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
        d="M20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.4189 7.52705L16.0513 7.31623C16.4422 7.18593 16.8141 7.5578 16.6838 7.94868L16.473 8.58114L16.4098 8.77073L16.4071 8.77878L14.5 14.5L8.77878 16.4071L8.77073 16.4098L8.58114 16.473L7.94868 16.6838C7.5578 16.8141 7.18593 16.4422 7.31623 16.0513L7.52705 15.4189L7.59024 15.2293L7.59293 15.2212L9.5 9.5L15.2212 7.59293L15.2293 7.59024L15.4189 7.52705ZM10.6859 10.6859L9.37171 14.6283L13.3141 13.3141L14.6283 9.37171L10.6859 10.6859Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcompass.displayName = 'Iconcompass'

export default Iconcompass
