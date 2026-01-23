import React from 'react'

export interface IconlayerProps extends React.SVGProps<SVGSVGElement> {}

/**
 * layer
 * @source figma
 */
export const Iconlayer = React.memo((props: IconlayerProps) => {
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
        d="M12.0001 4.33097L4.61579 9.49999L12.0001 14.669L19.3844 9.49999L12.0001 4.33097ZM12.5736 2.90141C12.2292 2.66039 11.771 2.66039 11.4266 2.90141L3.17043 8.68075C2.60172 9.07886 2.60172 9.92112 3.17043 10.3192L11.4266 16.0986C11.771 16.3396 12.2292 16.3396 12.5736 16.0986L20.8298 10.3192C21.3985 9.92112 21.3985 9.07886 20.8298 8.68075L12.5736 2.90141Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.30591 13.8047L3.17043 13.8995C2.60172 14.2976 2.60172 15.1399 3.17043 15.538L11.4266 21.3173C11.771 21.5583 12.2292 21.5583 12.5736 21.3173L20.8298 15.538C21.3985 15.1399 21.3985 14.2976 20.8298 13.8995L20.6943 13.8047L12.5736 19.4892C12.5547 19.5024 12.5355 19.5149 12.516 19.5266L12.0001 19.8878L11.4842 19.5266C11.4647 19.5149 11.4455 19.5024 11.4266 19.4892L3.30591 13.8047Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlayer.displayName = 'Iconlayer'

export default Iconlayer
