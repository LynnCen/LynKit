import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * brush_thin_fill
 * @source figma
 */
const Iconbrushthinfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconbrushthinfill.displayName = 'Iconbrushthinfill';

export default Iconbrushthinfill;
