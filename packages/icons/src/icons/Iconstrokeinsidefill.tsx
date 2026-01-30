import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * stroke_inside_fill
 * @source figma
 */
const Iconstrokeinsidefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 3L7 3V6H17V3L21 3V7H18V17H21V21H17V18H7V21H3V17H6V7H3V3ZM7 17H9H14.5H17V14.5V9.5V7H14.5H9H7V9.5V14.5V17Z"
        fill={color}
      />
    </svg>
  );
});

Iconstrokeinsidefill.displayName = 'Iconstrokeinsidefill';

export default Iconstrokeinsidefill;
