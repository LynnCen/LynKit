import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * robot
 * @source figma
 */
const Iconrobot = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M13.4219 6.99997H10.5781L8.65118 3.62787L7.34882 4.37208L8.85047 6.99997H6C4.89543 6.99997 4 7.8954 4 8.99997V12C2.89543 12 2 12.8954 2 14C2 15.1045 2.89543 16 4 16V19C4 20.1045 4.89543 21 6 21H18C19.1046 21 20 20.1045 20 19V16C21.1046 16 22 15.1045 22 14C22 12.8954 21.1046 12 20 12V8.99997C20 7.8954 19.1046 6.99997 18 6.99997H15.1495L16.6512 4.37208L15.3488 3.62787L13.4219 6.99997ZM18 8.49997H6C5.72386 8.49997 5.5 8.72383 5.5 8.99997V19C5.5 19.2761 5.72386 19.5 6 19.5H18C18.2761 19.5 18.5 19.2761 18.5 19V8.99997C18.5 8.72383 18.2761 8.49997 18 8.49997ZM10 13.5C10 14.3284 9.55228 15 9 15C8.44772 15 8 14.3284 8 13.5C8 12.6715 8.44772 12 9 12C9.55228 12 10 12.6715 10 13.5ZM15 15C14.4477 15 14 14.3284 14 13.5C14 12.6715 14.4477 12 15 12C15.5523 12 16 12.6715 16 13.5C16 14.3284 15.5523 15 15 15Z"
        fill={color}
      />
    </svg>
  );
});

Iconrobot.displayName = 'Iconrobot';

export default Iconrobot;
