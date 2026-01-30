import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * esc_full_screen
 * @source figma
 */
const Iconescfullscreen = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16.5 7V3H15V7C15 8.10457 15.8954 9 17 9L21 9L21 7.5L17 7.5C16.7239 7.5 16.5 7.27614 16.5 7Z"
        fill="black"
      />
      <path
        d="M7.5 17V21H9V17C9 15.8954 8.10457 15 7 15H3V16.5H7C7.27614 16.5 7.5 16.7239 7.5 17Z"
        fill="black"
      />
      <path
        d="M21 16.5H17C16.7239 16.5 16.5 16.7239 16.5 17V21H15V17C15 15.8954 15.8954 15 17 15H21V16.5Z"
        fill="black"
      />
      <path
        d="M7 7.5L3 7.5V9L7 9C8.10457 9 9 8.10457 9 7L9 3H7.5L7.5 7C7.5 7.27614 7.27614 7.5 7 7.5Z"
        fill="black"
      />
    </svg>
  );
});

Iconescfullscreen.displayName = 'Iconescfullscreen';

export default Iconescfullscreen;
