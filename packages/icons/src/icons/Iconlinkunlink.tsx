import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * link_unlink
 * @source figma
 */
const Iconlinkunlink = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14 8.5H17C18.933 8.5 20.5 10.067 20.5 12C20.5 13.933 18.933 15.5 17 15.5H14V17L17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H14V8.5ZM10 8.5V7L7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H10V15.5H7C5.067 15.5 3.5 13.933 3.5 12C3.5 10.067 5.067 8.5 7 8.5L10 8.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconlinkunlink.displayName = 'Iconlinkunlink';

export default Iconlinkunlink;
