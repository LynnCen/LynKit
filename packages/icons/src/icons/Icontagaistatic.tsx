import React from 'react'

export interface IcontagaistaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * tag_ai_static
 * @source figma
 */
export const Icontagaistatic = React.memo((props: IcontagaistaticProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      {...props}
    >
      <path
        d="M0 3C0 1.34315 1.34315 0 3 0H15C16.6569 0 18 1.34315 18 3V11C18 12.6569 16.6569 14 15 14H3C1.34315 14 0 12.6569 0 11V3Z"
        fill="url(#paint0_linear_11441_3531)"
      />
      <path
        d="M8.71299 8.85163H5.61098L4.79464 10.7372H3.05664L6.53647 3.12927H8.78047L10.9766 10.7372H9.20564L8.71299 8.85163ZM8.34352 7.47037L7.59258 4.58727H7.46058L6.20952 7.47037H8.34352Z"
        fill="white"
      />
      <path d="M12.4722 3.12927H14.1442L13.5133 10.7372H11.8413L12.4722 3.12927Z" fill="white" />
      <defs>
        <linearGradient
          id="paint0_linear_11441_3531"
          x1="2.46007e-08"
          y1="9.275"
          x2="18"
          y2="9.275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43BBFF" />
          <stop offset="1" stopColor="#30E2B0" />
        </linearGradient>
      </defs>
    </svg>
  )
})

Icontagaistatic.displayName = 'Icontagaistatic'

export default Icontagaistatic
