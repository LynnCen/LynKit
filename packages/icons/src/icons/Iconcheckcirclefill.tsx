import React from 'react'

export interface IconcheckcirclefillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * check_circle_fill
 * @source figma
 */
export const Iconcheckcirclefill = React.memo((props: IconcheckcirclefillProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.261 8.09753L10.5782 13.7801L7.73866 10.9377L6.32373 12.3512L10.5774 16.6092L17.6752 9.51178L16.261 8.09753Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcheckcirclefill.displayName = 'Iconcheckcirclefill'

export default Iconcheckcirclefill
