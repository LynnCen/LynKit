import React from 'react'

export interface IcontagsettingProps extends React.SVGProps<SVGSVGElement> {}

/**
 * tag_setting
 * @source figma
 */
export const Icontagsetting = React.memo((props: IcontagsettingProps) => {
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
        d="M12 15.9723L12.7131 16.3576L18.5 19.4845V4C18.5 3.72386 18.2761 3.5 18 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V19.4845L11.2869 16.3576L12 15.9723ZM19.2623 21.6014C19.5954 21.7814 20 21.5402 20 21.1615V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V21.1615C4 21.5402 4.40455 21.7814 4.73769 21.6014L12 17.6773L19.2623 21.6014Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontagsetting.displayName = 'Icontagsetting'

export default Icontagsetting
