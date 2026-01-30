import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_folder
 * @source figma
 */
const Iconhbfolder = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = 24, color = 'currentColor', style, className, ...rest } = props;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      className={className}
      {...rest}
    >
      <path
        d="M3 17.8V6.80005C3 5.69548 3.89543 4.80005 5 4.80005H8.17157C8.70201 4.80005 9.21071 5.01076 9.58579 5.38584L10.8142 6.61426C11.1893 6.98934 11.698 7.20005 12.2284 7.20005H19C20.1046 7.20005 21 8.09548 21 9.20005V17.8C21 18.9046 20.1046 19.8 19 19.8H5C3.89543 19.8 3 18.9046 3 17.8Z"
        stroke="black"
        strokeWidth={1.8}
      />
      <path
        d="M1.91992 17.4V7.19995C1.91992 5.278 3.47844 3.71948 5.40039 3.71948H8.00664C8.92946 3.71958 9.81504 4.08647 10.4676 4.73901L11.4613 5.73276L11.5574 5.82065C11.7923 6.01329 12.0877 6.1194 12.3941 6.11948H18.6004C20.5223 6.11948 22.0809 7.678 22.0809 9.59995V17.4C22.0809 19.3219 20.5223 20.8804 18.6004 20.8804H5.40039C3.47844 20.8804 1.91992 19.3219 1.91992 17.4ZM4.08086 17.4C4.08086 18.129 4.67138 18.7195 5.40039 18.7195H18.6004C19.3294 18.7195 19.9199 18.129 19.9199 17.4V9.59995C19.9199 8.87094 19.3294 8.28042 18.6004 8.28042H12.3941C11.4713 8.28032 10.5857 7.91343 9.9332 7.26089L8.93945 6.26714C8.69199 6.01968 8.3566 5.88052 8.00664 5.88042H5.40039C4.67137 5.88042 4.08086 6.47094 4.08086 7.19995V17.4Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbfolder.displayName = 'Iconhbfolder';

export default Iconhbfolder;
