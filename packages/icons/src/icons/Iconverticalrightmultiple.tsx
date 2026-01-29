import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * vertical_right_multiple
 * @source figma
 */
const Iconverticalrightmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M13 19.5H11.5V18H13V19.5ZM20.0078 6.60938C20.8325 6.25609 21.7497 6.86073 21.75 7.75781V15.7422C21.7497 16.6393 20.8325 17.2439 20.0078 16.8906L15 14.7441V13.1123L20.25 15.3623V8.1377L15 10.3877V8.75586L20.0078 6.60938ZM13 16H11.5V14.5H13V16ZM13 12.5H11.5V11H13V12.5ZM13 9H11.5V7.5H13V9ZM13 5.5H11.5V4H13V5.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13.1126V14.7446L3.9924 16.8907C3.16756 17.2442 2.25 16.6392 2.25 15.7418V7.7583C2.25 6.86091 3.16756 6.25587 3.9924 6.60937L9 8.75549V10.3874L3.75 8.13744V15.3626L9 13.1126Z"
        fill={color}
      />
    </svg>
  );
});

Iconverticalrightmultiple.displayName = 'Iconverticalrightmultiple';

export default Iconverticalrightmultiple;
