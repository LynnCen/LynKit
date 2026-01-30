import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * reset
 * @source figma
 */
const Iconreset = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.5 19.5C8.25911 19.5 5.49834 17.4444 4.45039 14.5658L3.04046 15.079C4.29801 18.5333 7.61093 21 11.5 21C16.4706 21 20.5 16.9706 20.5 12C20.5 7.02944 16.4706 3 11.5 3C9.01472 3 6.76472 4.00736 5.13604 5.63604L3 3.5V9.5H9L6.1967 6.6967C7.55393 5.33947 9.42893 4.5 11.5 4.5C15.6421 4.5 19 7.85786 19 12C19 16.1421 15.6421 19.5 11.5 19.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconreset.displayName = 'Iconreset';

export default Iconreset;
