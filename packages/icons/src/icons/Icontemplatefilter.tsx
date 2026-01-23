import React from 'react'

export interface IcontemplatefilterProps extends React.SVGProps<SVGSVGElement> {}

/**
 * template_filter
 * @source figma
 */
export const Icontemplatefilter = React.memo((props: IcontemplatefilterProps) => {
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
        d="M4 6.75L20 6.75V5.25H4V6.75ZM18 12.75H6V11.25H18V12.75ZM16 18.75H8V17.25H16V18.75Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontemplatefilter.displayName = 'Icontemplatefilter'

export default Icontemplatefilter
