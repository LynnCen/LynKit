import React from 'react'

export interface IconsocialdoubanProps extends React.SVGProps<SVGSVGElement> {}

/**
 * social_douban
 * @source figma
 */
export const Iconsocialdouban = React.memo((props: IconsocialdoubanProps) => {
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
        d="M0.608964 4.93853C0 6.4087 0 8.27247 0 12C0 15.7275 0 17.5913 0.608964 19.0615C1.42092 21.0217 2.97831 22.5791 4.93853 23.391C6.4087 24 8.27247 24 12 24C15.7275 24 17.5913 24 19.0615 23.391C21.0217 22.5791 22.5791 21.0217 23.391 19.0615C24 17.5913 24 15.7275 24 12C24 8.27247 24 6.4087 23.391 4.93853C22.5791 2.97831 21.0217 1.42092 19.0615 0.608964C17.5913 0 15.7275 0 12 0C8.27247 0 6.4087 0 4.93853 0.608964C2.97831 1.42092 1.42092 2.97831 0.608964 4.93853Z"
        fill="#00BE82"
      />
      <path d="M7.26042 7H16.7321L16.7325 8.30273H7.26042V7Z" fill="white" />
      <path
        d="M15.911 9.16506L15.911 13.3471H8.09375V9.16506H15.911ZM14.5777 12.0444V10.4678H9.42708V12.0444H14.5777Z"
        fill="white"
      />
      <path
        d="M7 15.6973V17L17 17V15.6973H14.6597C14.8724 15.2493 15.0667 14.8431 15.4243 14.2983L14.0214 13.7357C13.6414 14.2948 13.3062 14.9433 13.0077 15.6973H10.9471C10.6193 15.0927 10.3315 14.4438 10.0692 13.7357L8.6528 14.2983C8.90425 14.8654 9.11143 15.2735 9.37416 15.6973H7Z"
        fill="white"
      />
    </svg>
  )
})

Iconsocialdouban.displayName = 'Iconsocialdouban'

export default Iconsocialdouban
