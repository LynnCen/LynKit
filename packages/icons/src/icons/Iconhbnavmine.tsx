import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_nav_mine
 * @source figma
 */
const Iconhbnavmine = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M12.2031 12.5088H10.2031V8.70898H12.2031V12.5088Z" fill="black" />
      <path d="M7.96094 12.21H5.96094V9.00977H7.96094V12.21Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbnavmine.displayName = 'Iconhbnavmine';

export default Iconhbnavmine;
