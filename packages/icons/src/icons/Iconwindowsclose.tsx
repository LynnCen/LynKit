import React from 'react'

export interface IconwindowscloseProps extends React.SVGProps<SVGSVGElement> {}

/**
 * windows_close
 * @source figma
 */
export const Iconwindowsclose = React.memo((props: IconwindowscloseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M8.00012 8.7071L12.5963 13.3033C12.7916 13.4986 13.1082 13.4986 13.3034 13.3033C13.4987 13.108 13.4987 12.7914 13.3034 12.5962L8.70722 7.99999L13.3034 3.4038C13.4987 3.20854 13.4987 2.89196 13.3034 2.69669C13.1082 2.50143 12.7916 2.50143 12.5963 2.69669L8.00012 7.29289L3.40392 2.69669C3.20866 2.50143 2.89208 2.50143 2.69682 2.69669C2.50155 2.89196 2.50155 3.20854 2.69682 3.4038L7.29301 7.99999L2.69682 12.5962C2.50155 12.7915 2.50155 13.108 2.69682 13.3033C2.89208 13.4986 3.20866 13.4986 3.40392 13.3033L8.00012 8.7071Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconwindowsclose.displayName = 'Iconwindowsclose'

export default Iconwindowsclose
