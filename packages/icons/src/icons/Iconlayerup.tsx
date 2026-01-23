import React from 'react'

export interface IconlayerupProps extends React.SVGProps<SVGSVGElement> {}

/**
 * layerup
 * @source figma
 */
export const Iconlayerup = React.memo((props: IconlayerupProps) => {
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
        d="M11.4849 3.45465L7.4849 7.22884L8.51432 8.31985L11.2496 5.73897V15.5002H12.7496V5.73897L15.4849 8.31985L16.5143 7.22884L12.5143 3.45465L11.9996 2.96899L11.4849 3.45465ZM2.93095 14.4464L9.00004 11.1352V12.844L4.13216 15.4997L11.2815 19.3986C11.7292 19.6427 12.2702 19.6427 12.7178 19.3986L19.8676 15.4997L15 12.8442V11.1356L21.0688 14.4463C21.9026 14.9012 21.9025 16.0985 21.0686 16.5533L13.436 20.7155C12.5407 21.2037 11.4587 21.2037 10.5634 20.7155L2.93114 16.5533C2.09726 16.0986 2.09715 14.9013 2.93095 14.4464Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlayerup.displayName = 'Iconlayerup'

export default Iconlayerup
