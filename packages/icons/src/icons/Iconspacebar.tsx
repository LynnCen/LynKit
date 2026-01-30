import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * spacebar
 * @source figma
 */
const Iconspacebar = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 13.5C5.27614 13.5 5.5 13.7239 5.5 14V17.4091C5.5 17.7354 5.76456 18 6.09091 18H17.9091C18.2354 18 18.5 17.7354 18.5 17.4091V14C18.5 13.7239 18.7239 13.5 19 13.5C19.2761 13.5 19.5 13.7239 19.5 14V17.4091C19.5 18.2877 18.7877 19 17.9091 19H6.09091C5.21227 19 4.5 18.2877 4.5 17.4091V14C4.5 13.7239 4.72386 13.5 5 13.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconspacebar.displayName = 'Iconspacebar';

export default Iconspacebar;
