import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * downward_left_fill
 * @source figma
 */
const Icondownwardleftfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.75 3.21582C15.0261 3.21582 15.25 3.43968 15.25 3.71582V4.71582C15.25 4.99196 15.0261 5.21582 14.75 5.21582H9.5C7.01504 5.21582 5.00018 7.22993 5 9.71484L5.00586 9.94629C5.12615 12.324 7.09244 14.2148 9.5 14.2148H17.5596L15.4131 12.1018C15.2162 11.9081 15.2138 11.5914 15.4076 11.3947L16.1092 10.6823C16.3029 10.4856 16.6194 10.4832 16.8162 10.6769L21.0638 14.8585C21.2628 15.0544 21.2628 15.3753 21.0638 15.5712L16.8162 19.7528C16.6194 19.9465 16.3029 19.9441 16.1092 19.7474L15.4076 19.035C15.2138 18.8383 15.2162 18.5216 15.4131 18.3279L17.5596 16.2148H9.5C5.91037 16.2148 3.00002 13.3045 3 9.71484L3.00879 9.38086C3.1828 5.9466 6.02249 3.21582 9.5 3.21582H14.75Z"
        fill="black"
      />
    </svg>
  );
});

Icondownwardleftfill.displayName = 'Icondownwardleftfill';

export default Icondownwardleftfill;
