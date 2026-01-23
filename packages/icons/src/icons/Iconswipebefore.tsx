import React from 'react'

export interface IconswipebeforeProps extends React.SVGProps<SVGSVGElement> {}

/**
 * swipe_before
 * @source figma
 */
export const Iconswipebefore = React.memo((props: IconswipebeforeProps) => {
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
        d="M15.335 0.829094C14.9878 0.655746 14.5707 0.776806 14.3672 1.09765L14.3291 1.16503L9.58205 10.6582C9.15976 11.5028 9.15976 12.4972 9.58205 13.3418L14.3291 22.835C14.5143 23.2053 14.9646 23.3558 15.335 23.1709C15.7053 22.9857 15.8559 22.5354 15.6709 22.165L10.9238 12.6709C10.7127 12.2486 10.7127 11.7514 10.9238 11.3291L15.6709 1.83495L15.7012 1.76464C15.8358 1.40925 15.6822 1.00272 15.335 0.829094Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconswipebefore.displayName = 'Iconswipebefore'

export default Iconswipebefore
