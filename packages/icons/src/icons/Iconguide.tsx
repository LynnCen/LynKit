import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * guide
 * @source figma
 */
const Iconguide = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M9.75 4H18C18.2761 4 18.5 4.22386 18.5 4.5V19.5C18.5 19.7761 18.2761 20 18 20H6C5.72386 20 5.5 19.7761 5.5 19.5V4.5C5.5 4.22386 5.72386 4 6 4H8.25L8.25 12H9.75L9.75 4ZM18 2.5H6C4.89543 2.5 4 3.39543 4 4.5V19.5C4 20.6046 4.89543 21.5 6 21.5H18C19.1046 21.5 20 20.6046 20 19.5V4.5C20 3.39543 19.1046 2.5 18 2.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconguide.displayName = 'Iconguide';

export default Iconguide;
