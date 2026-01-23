import React from 'react'

export interface IconaismartstaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * ai_smart_static
 * @source figma
 */
export const Iconaismartstatic = React.memo((props: IconaismartstaticProps) => {
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
        d="M10.0041 8.58997C7.85217 6.43807 4.26952 6.79282 2.58143 9.32495C1.5015 10.9448 1.5015 13.0552 2.58143 14.6751C4.26144 17.1951 7.8179 17.5585 9.97311 15.4408L15.4099 10.0042C16.6694 8.74472 18.7662 8.95235 19.7542 10.4344C20.3863 11.3824 20.3863 12.6176 19.7542 13.5657C18.7662 15.0477 16.6694 15.2553 15.4099 13.9958L14.1211 12.707L12.7069 14.1212L13.9957 15.4101C16.1476 17.562 19.7302 17.2072 21.4183 14.6751C22.4983 13.0552 22.4983 10.9448 21.4183 9.32495C19.8019 6.90025 16.4486 6.4722 14.2772 8.3295L14.2698 8.33583L8.88354 13.7221L8.87358 13.7121L8.58986 13.9958C7.33039 15.2553 5.23353 15.0477 4.24553 13.5657C3.61347 12.6176 3.61347 11.3824 4.24553 10.4344C5.23353 8.95235 7.33039 8.74472 8.58986 10.0042L9.88854 11.3029L11.3028 9.88865L10.0041 8.58997Z"
        fill="url(#paint0_linear_5344_2936)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5344_2936"
          x1="1.77148"
          y1="13.5674"
          x2="22.2283"
          y2="13.5674"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43BBFF" />
          <stop offset="1" stopColor="#30E2B0" />
        </linearGradient>
      </defs>
    </svg>
  )
})

Iconaismartstatic.displayName = 'Iconaismartstatic'

export default Iconaismartstatic
