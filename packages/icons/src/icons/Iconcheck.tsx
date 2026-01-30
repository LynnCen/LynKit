import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * check
 * @source figma
 */
const Iconcheck = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21.5355 6.52517L9.20189 19.1006L2.43774 11.4375L3.56231 10.4449L9.25971 16.8994L20.4646 5.47485L21.5355 6.52517Z"
        fill={color}
      />
    </svg>
  );
});

Iconcheck.displayName = 'Iconcheck';

export default Iconcheck;
