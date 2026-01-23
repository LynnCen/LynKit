import React from 'react'

export interface IconshapetextcircleProps extends React.SVGProps<SVGSVGElement> {}

/**
 * shape_text_circle
 * @source figma
 */
export const Iconshapetextcircle = React.memo((props: IconshapetextcircleProps) => {
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
        d="M10.0039 16.25H13.9949V15.808C13.6222 15.808 13.3449 15.782 13.1629 15.73C12.9809 15.6693 12.8596 15.548 12.7989 15.366C12.7469 15.1753 12.7209 14.885 12.7209 14.495V8.333H13.4619C13.9472 8.333 14.3069 8.385 14.5409 8.489C14.7749 8.593 14.9439 8.775 15.0479 9.035C15.1519 9.28633 15.2516 9.65033 15.3469 10.127H15.8279L15.7239 7.709H8.30089L8.15789 10.127H8.63889C8.73422 9.65033 8.83389 9.28633 8.93789 9.035C9.04189 8.775 9.21089 8.593 9.44489 8.489C9.68756 8.385 10.0472 8.333 10.5239 8.333H11.2779V14.495C11.2779 14.885 11.2476 15.1753 11.1869 15.366C11.1262 15.548 11.0049 15.6693 10.8229 15.73C10.6496 15.782 10.3766 15.808 10.0039 15.808V16.25Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconshapetextcircle.displayName = 'Iconshapetextcircle'

export default Iconshapetextcircle
