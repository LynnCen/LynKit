import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * downward_left
 * @source figma
 */
const Icondownwardleft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M15.4103 19.6811L18.1692 16.9648L9.49962 16.9648C6.04806 16.9648 3.25002 14.1668 3.25 10.7152C3.24999 7.26363 6.04804 4.46556 9.49962 4.46556H15V5.96556H9.49962C6.87647 5.96556 4.74999 8.09205 4.75 10.7152C4.75001 13.3383 6.87649 15.4648 9.49962 15.4648L18.1692 15.4648L15.4103 12.7485L16.4627 11.6796L21.069 16.2148L16.4627 20.75L15.4103 19.6811Z"
        fill={color}
      />
    </svg>
  );
});

Icondownwardleft.displayName = 'Icondownwardleft';

export default Icondownwardleft;
