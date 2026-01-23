import React from 'react'

export interface IconshadowfillProps extends React.SVGProps<SVGSVGElement> {}

/**
 * shadow_fill
 * @source figma
 */
export const Iconshadowfill = React.memo((props: IconshadowfillProps) => {
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C11.8622 20 11.7252 19.9965 11.5891 19.9896L15.3667 17.8087L14.3674 16.0778L8.75853 19.3161C8.4486 19.1786 8.14904 19.0219 7.86134 18.8477L12.7031 16.0523L11.6995 14.3139L6.18717 17.4965C5.98861 17.2866 5.8013 17.0659 5.62621 16.8355L10.036 14.2895L9.03541 12.5565L4.62418 15.1033C4.51231 14.8377 4.41436 14.5649 4.33125 14.2856L9.84482 11.1023L8.84264 9.3665L4.0016 12.1615C4.00053 12.1078 4 12.054 4 12C4 11.7125 4.01517 11.4285 4.04475 11.1488L9.65224 7.91134L8.65278 6.18021L4.87286 8.36255C6.19721 5.77283 8.89157 4 12 4C16.4183 4 20 7.58172 20 12Z"
        fill="black"
      />
    </svg>
  )
})

Iconshadowfill.displayName = 'Iconshadowfill'

export default Iconshadowfill
