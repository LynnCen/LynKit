import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * repeat
 * @source figma
 */
const Iconrepeat = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21 6L17 2.5V5.25H8C6.48122 5.25 5.25 6.48122 5.25 8V11H6.75V8C6.75 7.30964 7.30964 6.75 8 6.75H17V9.5L21 6Z"
        fill={color}
      />
      <path
        d="M3 18L7 21.5L7 18.75H16C17.5188 18.75 18.75 17.5188 18.75 16V13H17.25V16C17.25 16.6904 16.6904 17.25 16 17.25H7L7 14.5L3 18Z"
        fill={color}
      />
    </svg>
  );
});

Iconrepeat.displayName = 'Iconrepeat';

export default Iconrepeat;
