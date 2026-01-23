import React from 'react'

export interface IconsizeboldProps extends React.SVGProps<SVGSVGElement> {}

/**
 * size_bold
 * @source figma
 */
export const Iconsizebold = React.memo((props: IconsizeboldProps) => {
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
        d="M8.84961 4.0001C8.84961 3.36497 9.36448 2.8501 9.99961 2.8501H19.9996C20.6347 2.8501 21.1496 3.36497 21.1496 4.0001V19.0001C21.1496 19.6352 20.6347 20.1501 19.9996 20.1501H14.9995V18.3501H19.3496V4.6501H10.6496V8H8.84961V4.0001ZM3.99961 9.8501C3.36448 9.8501 2.84961 10.365 2.84961 11.0001V20.0001C2.84961 20.6352 3.36448 21.1501 3.99961 21.1501H11.9996C12.6347 21.1501 13.1496 20.6352 13.1496 20.0001V11.0001C13.1496 10.365 12.6347 9.8501 11.9996 9.8501H3.99961ZM4.64961 19.3501V11.6501H11.3496V19.3501H4.64961Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconsizebold.displayName = 'Iconsizebold'

export default Iconsizebold
