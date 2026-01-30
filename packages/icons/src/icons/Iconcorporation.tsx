import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * corporation
 * @source figma
 */
const Iconcorporation = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M9.5 7.5V4.5H14.5V7.5H9.5ZM8 4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V8C16 8.55228 15.5523 9 15 9H12.75V10.75H16C16.9665 10.75 17.75 11.5335 17.75 12.5V14H20C20.5523 14 21 14.4477 21 15V19C21 19.5523 20.5523 20 20 20H14C13.4477 20 13 19.5523 13 19V15C13 14.4477 13.4477 14 14 14H16.25V12.5C16.25 12.3619 16.1381 12.25 16 12.25H12H8C7.86193 12.25 7.75 12.3619 7.75 12.5V14H10C10.5523 14 11 14.4477 11 15V19C11 19.5523 10.5523 20 10 20H4C3.44772 20 3 19.5523 3 19V15C3 14.4477 3.44772 14 4 14H6.25V12.5C6.25 11.5335 7.0335 10.75 8 10.75H11.25V9H9C8.44772 9 8 8.55228 8 8V4ZM4.5 15.5V18.5H9.5V15.5H4.5ZM14.5 18.5V15.5H19.5V18.5H14.5Z"
        fill="black"
      />
    </svg>
  );
});

Iconcorporation.displayName = 'Iconcorporation';

export default Iconcorporation;
