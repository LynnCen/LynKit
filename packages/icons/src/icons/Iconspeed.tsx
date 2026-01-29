import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * speed
 * @source figma
 */
const Iconspeed = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 3.125C7.09847 3.125 3.125 7.09847 3.125 12C3.125 15.2841 4.90834 18.1525 7.56304 19.6881C7.92159 19.8955 8.04411 20.3543 7.8367 20.7129C7.6293 21.0714 7.1705 21.194 6.81196 20.9865C3.71282 19.1938 1.625 15.8412 1.625 12C1.625 6.27005 6.27005 1.625 12 1.625C13.537 1.625 14.9979 1.95972 16.312 2.56095C16.6887 2.73328 16.8543 3.17833 16.682 3.55499C16.5097 3.93166 16.0646 4.0973 15.688 3.92497C14.5658 3.41154 13.3174 3.125 12 3.125ZM18.7269 4.06573L19.2625 4.5908C21.1824 6.47291 22.375 9.09786 22.375 12C22.375 15.8412 20.2872 19.1938 17.188 20.9865C16.8295 21.194 16.3707 21.0714 16.1633 20.7129C15.9559 20.3543 16.0784 19.8955 16.437 19.6881C19.0917 18.1525 20.875 15.2841 20.875 12C20.875 9.7871 20.0659 7.76426 18.726 6.20952L12.5356 12.525C12.2457 12.8208 11.7708 12.8256 11.475 12.5356C11.1792 12.2457 11.1744 11.7708 11.4644 11.475L18.7269 4.06573Z"
        fill={color}
      />
    </svg>
  );
});

Iconspeed.displayName = 'Iconspeed';

export default Iconspeed;
