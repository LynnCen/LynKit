import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * check_small
 * @source figma
 */
const Iconchecksmall = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.0303 8.03039L9.97133 17.0894L4.9425 11.5018L6.05745 10.4983L10.0286 14.9108L17.9696 6.96973L19.0303 8.03039Z"
        fill={color}
      />
    </svg>
  );
});

Iconchecksmall.displayName = 'Iconchecksmall';

export default Iconchecksmall;
