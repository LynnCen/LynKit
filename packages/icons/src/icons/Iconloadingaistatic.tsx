import React from 'react'

export interface IconloadingaistaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * loading_ai_static
 * @source figma
 */
export const Iconloadingaistatic = React.memo((props: IconloadingaistaticProps) => {
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
        d="M19.2029 19.2132C23.1081 15.308 23.1081 8.97631 19.2029 5.07107C15.2977 1.16582 8.96601 1.16582 5.06077 5.07107C4.47498 5.65685 4.47498 6.6066 5.06077 7.19239C5.64655 7.77817 6.5963 7.77817 7.18209 7.19239C9.91576 4.45872 14.3479 4.45872 17.0816 7.19239C19.8153 9.92606 19.8153 14.3582 17.0816 17.0919C16.4958 17.6777 16.4958 18.6274 17.0816 19.2132C17.6674 19.799 18.6171 19.799 19.2029 19.2132Z"
        fill="url(#paint0_linear_9994_3521)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9994_3521"
          x1="8.06597"
          y1="2.06586"
          x2="22.2081"
          y2="16.208"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43BBFF" />
          <stop offset="1" stopColor="#30E2B0" />
        </linearGradient>
      </defs>
    </svg>
  )
})

Iconloadingaistatic.displayName = 'Iconloadingaistatic'

export default Iconloadingaistatic
