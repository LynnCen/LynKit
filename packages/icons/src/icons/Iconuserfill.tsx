import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * user_fill
 * @source figma
 */
const Iconuserfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 21V18.6667C3 18.6667 3 14 12 14C21 14 21 18.6667 21 18.6667V21H3Z"
        fill={color}
      />
    </svg>
  );
});

Iconuserfill.displayName = 'Iconuserfill';

export default Iconuserfill;
