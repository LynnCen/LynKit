import React from 'react'

export interface IcontrayProps extends React.SVGProps<SVGSVGElement> {}

/**
 * tray
 * @source figma
 */
export const Icontray = React.memo((props: IcontrayProps) => {
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
        d="M10.747 0.5L11.2852 1.84708H16V3.29722H5.55738V2.31448L4.12785 2.54219V4.9535H5.55738V6.28859H4.12785V15.5H2.65692V9.68984L1.38082 13.6615H0L2.34277 6.28859H0.54551V4.9535H2.65692V2.77948L0.54551 3.11985V1.77037L5.55738 0.965005V1.84708H9.52207L8.98143 0.5H10.747Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4819 7.46069H16V15.5H14.5266V8.91083H13.4795V12.3792H13.4843V13.8293H8.07306V13.6759H8.06819V8.91083H7.02832V15.5H5.55495V7.46069H8.06819V4.46213H13.4819V7.46069ZM9.46607 12.3792H12.084V8.91083H9.46607V12.3792ZM12.084 7.46069H9.46607V5.91227H12.084V7.46069Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontray.displayName = 'Icontray'

export default Icontray
