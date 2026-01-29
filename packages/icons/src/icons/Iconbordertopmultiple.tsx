import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * border_top_multiple
 * @source figma
 */
const Iconbordertopmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21 19C21 20.1046 20.1046 21 19 21L5 21C3.89543 21 3 20.1046 3 19L3 5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5L21 19ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5L4.5 11.25L11.25 11.25L11.25 4.5L5 4.5ZM4.5 12.75L4.5 19C4.5 19.2761 4.72386 19.5 5 19.5L11.25 19.5L11.25 12.75L4.5 12.75ZM19.5 5C19.5 4.72386 19.2761 4.5 19 4.5L12.75 4.5L12.75 11.25L19.5 11.25L19.5 5ZM12.75 12.75L12.75 19.5L19 19.5C19.2761 19.5 19.5 19.2761 19.5 19L19.5 12.75L12.75 12.75Z"
        fill={color}
      />
      <path
        d="M3.06396 4.5C3.28623 3.63774 4.06687 3 4.99854 3L18.9985 3C19.9301 3.00021 20.711 3.63777 20.9331 4.5L3.06396 4.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconbordertopmultiple.displayName = 'Iconbordertopmultiple';

export default Iconbordertopmultiple;
