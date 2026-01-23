import React from 'react'

export interface IcontemplatedemandProps extends React.SVGProps<SVGSVGElement> {}

/**
 * template_demand
 * @source figma
 */
export const Icontemplatedemand = React.memo((props: IcontemplatedemandProps) => {
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
        d="M6 2.5H13V4H6C5.72386 4 5.5 4.22386 5.5 4.5V19.5C5.5 19.7761 5.72386 20 6 20H18C18.2761 20 18.5 19.7761 18.5 19.5V11H20V19.5C20 20.6046 19.1046 21.5 18 21.5H6C4.89543 21.5 4 20.6046 4 19.5V4.5C4 3.39543 4.89543 2.5 6 2.5ZM19.4238 2.51986L14.4238 8.51986L15.5762 9.48014L20.5762 3.48014L19.4238 2.51986ZM8 10V8.5H12V10H8ZM17 15.5H8V14H17V15.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontemplatedemand.displayName = 'Icontemplatedemand'

export default Icontemplatedemand
