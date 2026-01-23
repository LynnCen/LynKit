import React from 'react'

export interface IconfonttemplateProps extends React.SVGProps<SVGSVGElement> {}

/**
 * font_template
 * @source figma
 */
export const Iconfonttemplate = React.memo((props: IconfonttemplateProps) => {
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
        d="M5 4.50024H19C19.2761 4.50024 19.5 4.7241 19.5 5.00024V13H21V5.00024C21 3.89567 20.1046 3.00024 19 3.00024H5C3.89543 3.00024 3 3.89567 3 5.00024V19.0002C3 20.1048 3.89543 21.0002 5 21.0002H14V19.5002H5C4.72386 19.5002 4.5 19.2764 4.5 19.0002V5.00024C4.5 4.7241 4.72386 4.50024 5 4.50024Z"
        fill="#222529"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 9.5H8V8H16V9.5Z" fill="#222529" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 16.75V9.5H12.75V16.75H11.25Z"
        fill="#222529"
      />
      <path
        d="M18.9799 14.9524C19.0588 14.6825 19.4412 14.6825 19.5201 14.9524L20.1619 17.147C20.1888 17.2391 20.2609 17.3112 20.353 17.3381L22.5476 17.9799C22.8175 18.0588 22.8175 18.4412 22.5476 18.5201L20.353 19.1619C20.2609 19.1888 20.1888 19.2609 20.1619 19.353L19.5201 21.5476C19.4412 21.8175 19.0588 21.8175 18.9799 21.5476L18.3381 19.353C18.3112 19.2609 18.2391 19.1888 18.147 19.1619L15.9524 18.5201C15.6825 18.4412 15.6825 18.0588 15.9524 17.9799L18.147 17.3381C18.2391 17.3112 18.3112 17.2391 18.3381 17.147L18.9799 14.9524Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconfonttemplate.displayName = 'Iconfonttemplate'

export default Iconfonttemplate
