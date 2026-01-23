import React from 'react'

export interface Iconshaperectanglew1h1filletProps extends React.SVGProps<SVGSVGElement> {}

/**
 * shape_rectangle_w1_h1_fillet
 * @source figma
 */
export const Iconshaperectanglew1h1fillet = React.memo(
  (props: Iconshaperectanglew1h1filletProps) => {
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
          d="M3 8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8ZM8 4.5H16C17.933 4.5 19.5 6.067 19.5 8V16C19.5 17.933 17.933 19.5 16 19.5H8C6.067 19.5 4.5 17.933 4.5 16V8C4.5 6.067 6.067 4.5 8 4.5Z"
          fill="#222529"
        />
      </svg>
    )
  }
)

Iconshaperectanglew1h1fillet.displayName = 'Iconshaperectanglew1h1fillet'

export default Iconshaperectanglew1h1fillet
