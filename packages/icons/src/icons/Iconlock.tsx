import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * lock
 * @source figma
 */
const Iconlock = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16 7.5V9H8V7.5C8 5.29086 9.79086 3.5 12 3.5C14.2091 3.5 16 5.29086 16 7.5ZM6.5 9V7.5C6.5 4.46243 8.96243 2 12 2C15.0376 2 17.5 4.46243 17.5 7.5V9H18C19.1046 9 20 9.89543 20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11C4 9.89543 4.89543 9 6 9H6.5ZM17.5 10.5H16H8H6.5H6C5.72386 10.5 5.5 10.7239 5.5 11V19C5.5 19.2761 5.72386 19.5 6 19.5H18C18.2761 19.5 18.5 19.2761 18.5 19V11C18.5 10.7239 18.2761 10.5 18 10.5H17.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconlock.displayName = 'Iconlock';

export default Iconlock;
