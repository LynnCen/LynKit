import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * download_to_phone
 * @source figma
 */
const Icondownloadtophone = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2.5C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20V4C19.5 3.17157 18.8284 2.5 18 2.5H6ZM18 18.5V4L6 4V18.5H18ZM12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20C11.25 19.5858 11.5858 19.25 12 19.25C12.4142 19.25 12.75 19.5858 12.75 20ZM12.0001 16.0389L16.019 12.1866L14.9811 11.1037L12.7501 13.2422V7H11.2501L11.2501 13.2422L9.01904 11.1037L7.98108 12.1866L12.0001 16.0389Z"
        fill={color}
      />
    </svg>
  );
});

Icondownloadtophone.displayName = 'Icondownloadtophone';

export default Icondownloadtophone;
