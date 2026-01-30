import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * recent_fill
 * @source figma
 */
const Iconrecentfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.6875 12.4717V7.1875H11.3125V13.1325L15.5809 16.5473L16.4399 15.4736L12.6875 12.4717Z"
        fill={color}
      />
    </svg>
  );
});

Iconrecentfill.displayName = 'Iconrecentfill';

export default Iconrecentfill;
