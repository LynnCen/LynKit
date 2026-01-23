import React from 'react'

export interface IconextracttextProps extends React.SVGProps<SVGSVGElement> {}

/**
 * extract_text
 * @source figma
 */
export const Iconextracttext = React.memo((props: IconextracttextProps) => {
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
        d="M4.5 9L4.5 5C4.5 4.72386 4.72386 4.5 5 4.5L9 4.5V3L5 3C3.89543 3 3 3.89543 3 5L3 9H4.5ZM4.5 15H3L3 19C3 20.1046 3.89543 21 5 21H9L9 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19L4.5 15ZM15 21L15 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V15L21 15V19C21 20.1046 20.1046 21 19 21H15ZM19.5 9H21V5C21 3.89543 20.1046 3 19 3L15 3V4.5L19 4.5C19.2761 4.5 19.5 4.72386 19.5 5V9ZM16 9.5H12.75V16.75H11.25V9.5H8V8L16 8V9.5Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconextracttext.displayName = 'Iconextracttext'

export default Iconextracttext
