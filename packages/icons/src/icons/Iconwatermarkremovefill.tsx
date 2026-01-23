import React from 'react'

export interface IconwatermarkremovefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * watermark_remove_fill
 * @source figma
 */
export const Iconwatermarkremovefill = React.memo((props: IconwatermarkremovefillProps) => {
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
        d="M10.5 10C13.6667 10 16.8333 10 20 10C20.5523 10 21 9.55228 21 9V5.00024C21 3.89567 20.1046 3.00024 19 3.00024H5C3.89543 3.00024 3 3.89567 3 5.00024V19.0002C3 20.1048 3.89543 21.0002 5 21.0002H9C9.55228 21.0002 10 20.5525 10 20.0002C10 16.8335 10 13.6667 10 10.5C10 10.2239 10.2239 10 10.5 10Z"
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

Iconwatermarkremovefill.displayName = 'Iconwatermarkremovefill'

export default Iconwatermarkremovefill
