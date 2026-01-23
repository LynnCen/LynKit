import React from 'react'

export interface IconloadingsmallProps extends React.SVGProps<SVGSVGElement> {}

/**
 * loading_small
 * @source figma
 */
export const Iconloadingsmall = React.memo((props: IconloadingsmallProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#paint0_angular_20031_308_clip_path)">
        <g transform="matrix(0.00174476 0.00863781 -0.00863781 0.00174476 12 12)">
          <foreignObject x="-1804.94" y="-1804.94" width="3609.89" height="3609.89">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                background:
                  'conic-gradient(from 90deg,rgba(240, 246, 255, 1) 0deg,rgba(34, 84, 244, 1) 360deg)',
                height: '100%',
                width: '100%',
                opacity: '1',
              }}
            ></div>
          </foreignObject>
        </g>
      </g>
      <path d="M19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C12.8284 19.5 13.5 20.1716 13.5 21C13.5 21.8284 12.8284 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 14.7295 21.4561 17.2186 19.749 19.085C18.7759 20.1488 17.5859 21.0127 16.2471 21.6055C15.4895 21.9408 14.6029 21.5983 14.2676 20.8408C13.9324 20.0834 14.2749 19.1977 15.0322 18.8623C15.987 18.4396 16.839 17.8227 17.5361 17.0605C18.7573 15.7255 19.5 13.9511 19.5 12Z" />
      <defs>
        <clipPath id="paint0_angular_20031_308_clip_path">
          <path d="M19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C12.8284 19.5 13.5 20.1716 13.5 21C13.5 21.8284 12.8284 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 14.7295 21.4561 17.2186 19.749 19.085C18.7759 20.1488 17.5859 21.0127 16.2471 21.6055C15.4895 21.9408 14.6029 21.5983 14.2676 20.8408C13.9324 20.0834 14.2749 19.1977 15.0322 18.8623C15.987 18.4396 16.839 17.8227 17.5361 17.0605C18.7573 15.7255 19.5 13.9511 19.5 12Z" />
        </clipPath>
      </defs>
    </svg>
  )
})

Iconloadingsmall.displayName = 'Iconloadingsmall'

export default Iconloadingsmall
