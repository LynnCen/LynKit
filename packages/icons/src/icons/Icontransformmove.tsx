import React from 'react'

export interface IcontransformmoveProps extends React.SVGProps<SVGSVGElement> {}

/**
 * transform_move
 * @source figma
 */
export const Icontransformmove = React.memo((props: IcontransformmoveProps) => {
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
        d="M11.2501 20.5V3.49999H12.7501V20.5H11.2501Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.50011 11.25L20.5001 11.25V12.75L3.50011 12.75L3.50011 11.25Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 1.93933L15.9054 5.84466L14.8448 6.90532L12.0001 4.06065L9.15544 6.90532L8.09478 5.84466L12.0001 1.93933ZM6.90544 9.15532L4.06077 12L6.90544 14.8447L5.84478 15.9053L1.93945 12L5.84478 8.09466L6.90544 9.15532ZM17.0948 9.15532L18.1554 8.09466L22.0608 12L18.1554 15.9053L17.0948 14.8447L19.9395 12L17.0948 9.15532ZM9.15544 17.0947L12.0001 19.9393L14.8448 17.0947L15.9054 18.1553L12.0001 22.0606L8.09478 18.1553L9.15544 17.0947Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontransformmove.displayName = 'Icontransformmove'

export default Icontransformmove
