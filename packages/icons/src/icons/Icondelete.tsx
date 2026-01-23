import React from 'react'

export interface IcondeleteProps extends React.SVGProps<SVGSVGElement> {}

/**
 * delete
 * @source figma
 */
export const Icondelete = React.memo((props: IcondeleteProps) => {
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
        d="M10.0253 3C9.68865 3 9.37458 3.1694 9.18967 3.45074L8.5 4.5H15.5L14.8103 3.45074C14.6254 3.1694 14.3113 3 13.9747 3H10.0253ZM3 4.50001H4.5H6.00583H17.9942H19.5H21V6.00001H19.3676L18.161 19.6758C18.0699 20.7082 17.2051 21.5 16.1687 21.5H7.8313C6.79486 21.5 5.93014 20.7082 5.83904 19.6758L4.63235 6.00001H3V4.50001ZM6.13818 6.00001H17.8618L16.6668 19.544C16.644 19.8021 16.4278 20 16.1687 20H7.8313C7.57219 20 7.35601 19.8021 7.33323 19.544L6.13818 6.00001Z"
        fill="#222529"
      />
    </svg>
  )
})

Icondelete.displayName = 'Icondelete'

export default Icondelete
