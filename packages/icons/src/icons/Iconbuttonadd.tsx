import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * button_add
 * @source figma
 */
const Iconbuttonadd = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = 24, color = 'currentColor', style, className, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={style}
      className={className}
      {...rest}
    >
      <rect width="16" height="16" rx="8" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 8.5V12H8.5V8.5H12V7.5H8.5V4H7.5V7.5H4V8.5H7.5Z"
        fill="white"
      />
    </svg>
  );
});

Iconbuttonadd.displayName = 'Iconbuttonadd';

export default Iconbuttonadd;
