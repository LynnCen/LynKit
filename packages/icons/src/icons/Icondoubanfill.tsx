import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * douban_fill
 * @source figma
 */
const Icondoubanfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21 5H3V3H21V5ZM17.5 8.5H6.5V11.5H17.5V8.5ZM19.5 6.5V13.5H4.5V6.5H19.5ZM17.19 19L19.5 15H17.19L14.88 19H9.12L6.81 15H4.5L6.81 19H3V21H21V19H17.19Z"
        fill={color}
      />
    </svg>
  );
});

Icondoubanfill.displayName = 'Icondoubanfill';

export default Icondoubanfill;
