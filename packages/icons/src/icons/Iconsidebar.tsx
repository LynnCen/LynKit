import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * sidebar
 * @source figma
 */
const Iconsidebar = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M19 9H17V10.5H19V9Z" fill="black" />
      <path d="M17 12H19V13.5H17V12Z" fill="black" />
      <path d="M19 15H17V16.5H19V15Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 7.75C2.25 6.23122 3.48122 5 5 5H19C20.5188 5 21.75 6.23122 21.75 7.75V17.25C21.75 18.7688 20.5188 20 19 20H5C3.48122 20 2.25 18.7688 2.25 17.25V7.75ZM19 18.5H15.5V6.5H19C19.6904 6.5 20.25 7.05964 20.25 7.75V17.25C20.25 17.9404 19.6904 18.5 19 18.5ZM5 6.5H14V18.5H5C4.30964 18.5 3.75 17.9404 3.75 17.25V7.75C3.75 7.05964 4.30964 6.5 5 6.5Z"
        fill="black"
      />
    </svg>
  );
});

Iconsidebar.displayName = 'Iconsidebar';

export default Iconsidebar;
