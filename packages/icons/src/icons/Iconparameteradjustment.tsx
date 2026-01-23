import React from 'react'

export interface IconparameteradjustmentProps extends React.SVGProps<SVGSVGElement> {}

/**
 * parameter_adjustment
 * @source figma
 */
export const Iconparameteradjustment = React.memo((props: IconparameteradjustmentProps) => {
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
        d="M12.5 7C12.5 8.10457 13.3954 9 14.5 9C15.6046 9 16.5 8.10457 16.5 7C16.5 5.89543 15.6046 5 14.5 5C13.3954 5 12.5 5.89543 12.5 7ZM3 6.25H11.0805C11.4239 4.67741 12.8244 3.5 14.5 3.5C16.1756 3.5 17.5761 4.67741 17.9195 6.25H21V7.75H17.9195C17.5761 9.32259 16.1756 10.5 14.5 10.5C12.8244 10.5 11.4239 9.32259 11.0805 7.75H3V6.25ZM7.5 17C7.5 18.1046 8.39543 19 9.5 19C10.6046 19 11.5 18.1046 11.5 17C11.5 15.8954 10.6046 15 9.5 15C8.39543 15 7.5 15.8954 7.5 17ZM6.08054 17.75C6.42388 19.3226 7.82444 20.5 9.5 20.5C11.1756 20.5 12.5761 19.3226 12.9195 17.75H21V16.25H12.9195C12.5761 14.6774 11.1756 13.5 9.5 13.5C7.82444 13.5 6.42388 14.6774 6.08054 16.25H3V17.75H6.08054Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconparameteradjustment.displayName = 'Iconparameteradjustment'

export default Iconparameteradjustment
