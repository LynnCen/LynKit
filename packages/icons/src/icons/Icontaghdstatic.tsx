import React from 'react'

export interface IcontaghdstaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * tag_hd__static
 * @source figma
 */
export const Icontaghdstatic = React.memo((props: IcontaghdstaticProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="16"
      viewBox="0 0 26 16"
      fill="none"
      {...props}
    >
      <path
        d="M0 2C0 0.895431 0.895431 0 2 0H18C22.4183 0 26 3.58172 26 8V14C26 15.1046 25.1046 16 24 16H8C3.58172 16 0 12.4183 0 8V2Z"
        fill="black"
        fillOpacity={0.3}
      />
      <path
        d="M14.1874 4.57068H16.5475C18.5705 4.57068 19.8518 5.14388 19.615 7.99999C19.3954 10.6486 18.0018 11.4293 15.9788 11.4293H13.6187L14.1874 4.57068ZM15.2325 10.1446H16.006C17.2753 10.1446 17.9196 9.67018 18.0581 7.99999C18.2048 6.23098 17.6029 5.83567 16.3633 5.83567H15.5898L15.2325 10.1446Z"
        fill="white"
      />
      <path
        d="M11.1487 4.57068H12.6461L12.0774 11.4293H10.58L10.8315 8.3953H8.11438L7.8628 11.4293H6.35547L6.92417 4.57068H8.43151L8.21845 7.14019H10.9356L11.1487 4.57068Z"
        fill="white"
      />
    </svg>
  )
})

Icontaghdstatic.displayName = 'Icontaghdstatic'

export default Icontaghdstatic
