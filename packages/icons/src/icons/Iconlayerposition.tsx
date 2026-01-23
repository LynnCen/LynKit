import React from 'react'

export interface IconlayerpositionProps extends React.SVGProps<SVGSVGElement> {}

/**
 * layer_position
 * @source figma
 */
export const Iconlayerposition = React.memo((props: IconlayerpositionProps) => {
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
        d="M12.4124 4.68315L19.5616 8.5827L12.4124 12.4823C11.9647 12.7265 11.4235 12.7265 10.9758 12.4823L3.82659 8.5827L10.9758 4.68315C11.4235 4.43895 11.9647 4.43895 12.4124 4.68315ZM10.2576 3.36631C11.153 2.8779 12.2352 2.8779 13.1306 3.36631L20.7627 7.52922C21.5966 7.98403 21.5966 9.18134 20.7627 9.63617L13.1307 13.7992C12.2352 14.2876 11.153 14.2876 10.2575 13.7992L2.62547 9.63617C1.79163 9.18134 1.79164 7.98403 2.62548 7.52922L10.2576 3.36631ZM2.62538 14.5292L5.55274 12.9325L7.11898 13.7868L3.8265 15.5827L10.9757 19.4823C11.4234 19.7265 11.9646 19.7265 12.4123 19.4823L19.5615 15.5827L16.2694 13.787L17.8356 12.9327L20.7626 14.5292C21.5965 14.9841 21.5965 16.1814 20.7626 16.6362L13.1306 20.7992C12.2351 21.2876 11.1529 21.2876 10.2574 20.7992L2.62537 16.6362C1.79154 16.1814 1.79154 14.9841 2.62538 14.5292Z"
        fill="#222529"
      />
    </svg>
  )
})

Iconlayerposition.displayName = 'Iconlayerposition'

export default Iconlayerposition
