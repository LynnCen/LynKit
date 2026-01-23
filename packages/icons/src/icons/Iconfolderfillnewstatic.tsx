import React from 'react'

export interface IconfolderfillnewstaticProps extends React.SVGProps<SVGSVGElement> {}

/**
 * folder_fill_new_static
 * @source figma
 */
export const Iconfolderfillnewstatic = React.memo((props: IconfolderfillnewstaticProps) => {
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
        d="M2 5C2 3.89543 2.89543 3 4 3H8.67544C8.89041 3 9.10397 3.03466 9.3079 3.10263L11.6921 3.89737C11.896 3.96534 12.1096 4 12.3246 4H20C21.1046 4 22 4.89543 22 6V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5Z"
        fill="url(#paint0_linear_15109_4102)"
      />
      <path
        d="M3 6.5C3 5.94772 3.44772 5.5 4 5.5H20C20.5523 5.5 21 5.94772 21 6.5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19L3 6.5Z"
        fill="url(#paint1_linear_15109_4102)"
        fillOpacity={0.95}
      />
      <foreignObject x="1" y="4" width="22" height="18">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: 'blur(0.5px)',
            clipPath: 'url(#bgblur_0_15109_4102_clip_path)',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </foreignObject>
      <path
        d="M22 7C22 5.89543 21.1046 5 20 5H12.7016C12.2474 5 11.8068 5.15456 11.4522 5.43826L10.0478 6.56174C9.6932 6.84544 9.25258 7 8.79844 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V7Z"
        fill="url(#paint2_radial_15109_4102)"
        fillOpacity={0.9}
      />
      <defs>
        <clipPath id="bgblur_0_15109_4102_clip_path" transform="translate(-1 -4)">
          <path d="M22 7C22 5.89543 21.1046 5 20 5H12.7016C12.2474 5 11.8068 5.15456 11.4522 5.43826L10.0478 6.56174C9.6932 6.84544 9.25258 7 8.79844 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V7Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_15109_4102"
          x1="11.7008"
          y1="3"
          x2="11.7008"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2C99FE" />
          <stop offset="1" stopColor="#419BDA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_15109_4102"
          x1="12"
          y1="6"
          x2="12"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.499659" stopColor="#81CAFF" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <radialGradient
          id="paint2_radial_15109_4102"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 6.92753) rotate(90) scale(13.386 22.0302)"
        >
          <stop offset="1.19209e-07" stopColor="#94D2FF" />
          <stop offset="1" stopColor="#62BDFF" />
        </radialGradient>
      </defs>
    </svg>
  )
})

Iconfolderfillnewstatic.displayName = 'Iconfolderfillnewstatic'

export default Iconfolderfillnewstatic
