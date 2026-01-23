import React from 'react'

export interface IcontagmanageProps extends React.SVGProps<SVGSVGElement> {}

/**
 * tag_manage
 * @source figma
 */
export const Icontagmanage = React.memo((props: IcontagmanageProps) => {
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
        d="M6.5 11H3.5V5C3.5 3.89543 4.39543 3 5.5 3H18.5C19.6046 3 20.5 3.89543 20.5 5V20.3371C20.5 20.6693 20.182 20.9092 19.8626 20.8179L13.5 19L7.13736 20.8179C6.81795 20.9092 6.5 20.6693 6.5 20.3371V11ZM5.5 4.5H6.5V9.5H5V5C5 4.72386 5.22386 4.5 5.5 4.5ZM8 4.5V19.0114L13.5 17.44L19 19.0114V5C19 4.72386 18.7761 4.5 18.5 4.5H8Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontagmanage.displayName = 'Icontagmanage'

export default Icontagmanage
