import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * downward_right
 * @source figma
 */
const Icondownwardright = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M8.90866 19.6811L6.14976 16.9648L14.8193 16.9648C18.2709 16.9648 21.069 14.1668 21.069 10.7152C21.069 7.26363 18.2709 4.46556 14.8194 4.46556H9.31899V5.96556H14.8194C17.4425 5.96556 19.569 8.09205 19.569 10.7152C19.569 13.3383 17.4425 15.4648 14.8193 15.4648L6.14976 15.4648L8.90866 12.7485L7.85628 11.6796L3.24999 16.2148L7.85628 20.75L8.90866 19.6811Z"
        fill={color}
      />
    </svg>
  );
});

Icondownwardright.displayName = 'Icondownwardright';

export default Icondownwardright;
