import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * drag_indicator
 * @source figma
 */
const Icondragindicator = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17 7.75H7V6.25H17V7.75ZM17 12.75H7V11.25H17V12.75ZM7 17.75H17V16.25H7V17.75Z"
        fill={color}
      />
    </svg>
  );
});

Icondragindicator.displayName = 'Icondragindicator';

export default Icondragindicator;
