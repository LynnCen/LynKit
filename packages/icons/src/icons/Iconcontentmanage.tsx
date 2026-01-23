import React from 'react'

export interface IconcontentmanageProps extends React.SVGProps<SVGSVGElement> {}

/**
 * content_manage
 * @source figma
 */
export const Iconcontentmanage = React.memo((props: IconcontentmanageProps) => {
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
        d="M11.0952 7L10.6472 6.49074L9.04529 4.66975C8.95036 4.56184 8.81359 4.5 8.66987 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V18C3.5 18.2761 3.72386 18.5 4 18.5H13V20H4C2.89543 20 2 19.1046 2 18V5C2 3.89543 2.89543 3 4 3H8.66987C9.24475 3 9.79183 3.24737 10.1715 3.67901L11.7734 5.5H20C21.1046 5.5 22 6.39543 22 7.5V11H20.5V7.5C20.5 7.22386 20.2761 7 20 7H11.7734H11.0952ZM18.1639 14.5886L17.0299 16.5527L18.1639 18.5168H20.4318L21.5658 16.5527L20.4318 14.5886H18.1639ZM21.2978 13.0886L23.2978 16.5527L21.2978 20.0168H17.2978L15.2978 16.5527L17.2978 13.0886H21.2978Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcontentmanage.displayName = 'Iconcontentmanage'

export default Iconcontentmanage
