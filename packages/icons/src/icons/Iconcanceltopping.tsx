import React from 'react'

export interface IconcanceltoppingProps extends React.SVGProps<SVGSVGElement> {}

/**
 * Cancel_Topping
 * @source figma
 */
export const Iconcanceltopping = React.memo((props: IconcanceltoppingProps) => {
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
        d="M8.39994 5.93934L13.4303 10.9697L12.3696 12.0303L9.14994 8.81066V21H7.64994V8.81067L4.43032 12.0303L3.36966 10.9697L8.39994 5.93934ZM17.6 4.5H1.59998V3H17.6V4.5Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9574 16.0735C17.4031 15.7895 17.9323 15.625 18.5 15.625C20.0878 15.625 21.375 16.9122 21.375 18.5C21.375 19.0677 21.2105 19.5969 20.9265 20.0426L16.9574 16.0735ZM16.0735 16.9574C15.7895 17.4031 15.625 17.9323 15.625 18.5C15.625 20.0878 16.9122 21.375 18.5 21.375C19.0677 21.375 19.5969 21.2105 20.0426 20.9265L16.0735 16.9574ZM18.5 14.375C16.2218 14.375 14.375 16.2218 14.375 18.5C14.375 20.7782 16.2218 22.625 18.5 22.625C20.7782 22.625 22.625 20.7782 22.625 18.5C22.625 16.2218 20.7782 14.375 18.5 14.375Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcanceltopping.displayName = 'Iconcanceltopping'

export default Iconcanceltopping
