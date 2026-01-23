import React from 'react'

export interface IcontextuppercaseProps extends React.SVGProps<SVGSVGElement> {}

/**
 * text_uppercase
 * @source figma
 */
export const Icontextuppercase = React.memo((props: IcontextuppercaseProps) => {
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
        d="M6.41451 3.5L1 18.5H2.59431L4.30891 13.75H9.83665L11.4193 18.5H13L8.00199 3.5H6.41451ZM9.33684 12.25L7.18333 5.78688L4.85036 12.25H9.33684ZM14.4444 16.8193C15.4222 18.1398 16.7852 18.8 18.5333 18.8C19.2148 18.8 19.8296 18.6887 20.3778 18.4662C20.7746 18.3051 21.1598 18.074 21.5333 17.7729V18.5329H23V10.6906H18.5778V12.2485H21.5333V15.9553C20.7481 16.6972 19.8296 17.2199 18.7778 17.2199C16.0519 17.2199 14.6889 15.2466 14.6889 11.3C14.6889 7.35341 16.0889 5.38012 18.8889 5.38012C19.4667 5.38012 19.9926 5.47656 20.4667 5.66944C20.9556 5.84748 21.437 6.15163 21.9111 6.5819L22.8765 5.38259C22.3827 4.88803 21.5926 4.35638 20.9556 4.13383C20.3333 3.91128 19.6444 3.8 18.8889 3.8C16.9778 3.8 15.5185 4.4454 14.5111 5.7362C13.5037 7.01217 13 8.86677 13 11.3C13 13.6591 13.4815 15.4988 14.4444 16.8193Z"
        fill="#222529"
      />
    </svg>
  )
})

Icontextuppercase.displayName = 'Icontextuppercase'

export default Icontextuppercase
