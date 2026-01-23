import React from 'react'

export interface IconvipfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * vip_fill
 * @source figma
 */
export const Iconvipfill = React.memo((props: IconvipfillProps) => {
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
        d="M12 6.5C12.6904 6.5 13.25 5.94036 13.25 5.25C13.25 4.55964 12.6904 4 12 4C11.3096 4 10.75 4.55964 10.75 5.25C10.75 5.94036 11.3096 6.5 12 6.5Z"
        fill="#222529"
      />
      <path
        d="M3.76042 10.6038L5.81467 19.2316C5.92193 19.6821 6.32442 20 6.78748 20H17.2078C17.6708 20 18.0733 19.6821 18.1806 19.2316L20.2347 10.6044C20.3354 10.1813 19.8855 9.84027 19.5054 10.0515L15.9996 12L12.3952 7.26643C12.1951 7.00354 11.7995 7.00366 11.5995 7.26666L7.99957 12L4.48957 10.0509C4.10949 9.83981 3.65973 10.1809 3.76042 10.6038Z"
        fill="#222529"
      />
      <path
        d="M4.5 8.25C4.5 8.94036 3.94036 9.5 3.25 9.5C2.55964 9.5 2 8.94036 2 8.25C2 7.55964 2.55964 7 3.25 7C3.94036 7 4.5 7.55964 4.5 8.25Z"
        fill="#222529"
      />
      <path
        d="M20.75 9.5C21.4404 9.5 22 8.94036 22 8.25C22 7.55964 21.4404 7 20.75 7C20.0596 7 19.5 7.55964 19.5 8.25C19.5 8.94036 20.0596 9.5 20.75 9.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconvipfill.displayName = 'Iconvipfill'

export default Iconvipfill
