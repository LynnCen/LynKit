import React from 'react'

export interface IconcutoutsamProps extends React.SVGProps<SVGSVGElement> {}

/**
 * cutout_sam
 * @source figma
 */
export const Iconcutoutsam = React.memo((props: IconcutoutsamProps) => {
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
        d="M7 4.5V3H5C3.89543 3 3 3.89543 3 5V7H4.5V5C4.5 4.72386 4.72386 4.5 5 4.5H7Z"
        fill="#222529"
      />
      <path d="M14 3V4.5H10V3H14Z" fill="#222529" />
      <path
        d="M19 4.5H17V3H19C20.1046 3 21 3.89543 21 5V9H19.5V5C19.5 4.72386 19.2761 4.5 19 4.5Z"
        fill="#222529"
      />
      <path d="M3 10H4.5V14H3V10Z" fill="#222529" />
      <path
        d="M4.5 17H3V19C3 20.1046 3.89543 21 5 21H9V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V17Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1024 9.33481C10.5901 9.17888 10.0335 9.31803 9.65476 9.69673C9.27606 10.0754 9.13691 10.632 9.29285 11.1444L12.276 20.946C12.4619 21.557 13.0257 21.9744 13.6643 21.974C14.303 21.9735 14.8662 21.5553 15.0513 20.944L16.411 16.453L20.9021 15.0932C21.5133 14.9081 21.9315 14.345 21.932 13.7063C21.9325 13.0676 21.5151 12.5039 20.9041 12.3179L11.1024 9.33481ZM13.6632 20.3523L10.7551 10.797L20.3103 13.7051L15.5922 15.1337C15.3522 15.2063 15.1644 15.3941 15.0917 15.6341L13.6632 20.3523Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconcutoutsam.displayName = 'Iconcutoutsam'

export default Iconcutoutsam
