import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * vertical_left_multiple
 * @source figma
 */
const Iconverticalleftmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.5 19.5H11V18H12.5V19.5ZM2.25 7.75781C2.25031 6.86073 3.16754 6.25609 3.99219 6.60938L9 8.75586V10.3877L3.75 8.1377V15.3623L9 13.1123V14.7441L3.99219 16.8906C3.16753 17.2439 2.25031 16.6393 2.25 15.7422V7.75781ZM12.5 16H11V14.5H12.5V16ZM12.5 12.5H11V11H12.5V12.5ZM12.5 9H11V7.5H12.5V9ZM12.5 5.5H11V4H12.5V5.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 13.1126V14.7446L20.0076 16.8907C20.8324 17.2442 21.75 16.6392 21.75 15.7418V7.7583C21.75 6.86091 20.8324 6.25587 20.0076 6.60937L15 8.75549V10.3874L20.25 8.13744V15.3626L15 13.1126Z"
        fill={color}
      />
    </svg>
  );
});

Iconverticalleftmultiple.displayName = 'Iconverticalleftmultiple';

export default Iconverticalleftmultiple;
