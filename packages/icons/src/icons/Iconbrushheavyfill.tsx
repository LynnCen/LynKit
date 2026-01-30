import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * brush_heavy_fill
 * @source figma
 */
const Iconbrushheavyfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z"
        fill={color}
      />
    </svg>
  );
});

Iconbrushheavyfill.displayName = 'Iconbrushheavyfill';

export default Iconbrushheavyfill;
