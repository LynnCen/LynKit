import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ai_fill
 * @source figma
 */
const Iconaifill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18.653 19H15V21H18.653C19.9492 21 21 19.9492 21 18.653V15H19V18.653C19 18.8446 18.8446 19 18.653 19Z"
        fill={color}
      />
      <path
        d="M5 18.653V15H3V18.653C3 19.9492 4.05079 21 5.34699 21H9V19H5.34699C5.15535 19 5 18.8446 5 18.653Z"
        fill={color}
      />
      <path
        d="M5.34699 5H9V3H5.34699C4.05078 3 3 4.05079 3 5.34699V9H5V5.34699C5 5.15535 5.15535 5 5.34699 5Z"
        fill={color}
      />
      <path
        d="M18.653 5H15V3H18.653C19.9492 3 21 4.05078 21 5.34699V9H19V5.34699C19 5.15535 18.8446 5 18.653 5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.60524 7.755H11.2679L14.2687 15.6031H12.534L11.8559 13.7359H9.01722L8.33917 15.6031H6.60449L9.60524 7.755ZM9.52701 12.3344H11.347L10.4411 9.80263L9.52701 12.3344Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5053 7.755H16.1258V15.6031H14.5053V7.755Z"
        fill={color}
      />
    </svg>
  );
});

Iconaifill.displayName = 'Iconaifill';

export default Iconaifill;
