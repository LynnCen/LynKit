import React from 'react'

export interface IconwatermarkremoveProps extends React.SVGProps<SVGSVGElement> {}

/**
 * watermark_remove
 * @source figma
 */
export const Iconwatermarkremove = React.memo((props: IconwatermarkremoveProps) => {
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
        d="M5 4.50024H19C19.2761 4.50024 19.5 4.7241 19.5 5.00024V9H21V5.00024C21 3.89567 20.1046 3.00024 19 3.00024H5C3.89543 3.00024 3 3.89567 3 5.00024V19.0002C3 20.1048 3.89543 21.0002 5 21.0002H9V19.5002H5C4.72386 19.5002 4.5 19.2764 4.5 19.0002V5.00024C4.5 4.7241 4.72386 4.50024 5 4.50024Z"
        fill="#222529"
      />
      <path d="M12.1998 12.2H14.9998V15H12.1998V12.2Z" fill="#222529" />
      <path d="M12.1998 18.2002H14.9998V21.0002H12.1998V18.2002Z" fill="#222529" />
      <path d="M15.1998 15.1998H17.9998V17.9998H15.1998V15.1998Z" fill="#222529" />
      <path d="M18.1998 12.2H20.9998V15H18.1998V12.2Z" fill="#222529" />
      <path d="M18.1998 18.2002H20.9998V21.0002H18.1998V18.2002Z" fill="#222529" />
    </svg>
  )
})

Iconwatermarkremove.displayName = 'Iconwatermarkremove'

export default Iconwatermarkremove
