import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * commodity_fill
 * @source figma
 */
const Iconcommodityfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M8.25119 5C8.25119 2.92893 9.93012 1.25 12.0012 1.25C14.0723 1.25 15.7512 2.92893 15.7512 5V7H17.2501C18.2525 7 19.1001 7.74206 19.2325 8.73567L20.6992 19.7357C20.8591 20.9346 19.9263 22 18.7168 22H5.28549C4.07591 22 3.14317 20.9346 3.30303 19.7357L4.7697 8.73567C4.90218 7.74206 5.74975 7 6.75215 7H8.25119V5ZM14.2512 5V7H9.75119V5C9.75119 3.75736 10.7585 2.75 12.0012 2.75C13.2438 2.75 14.2512 3.75736 14.2512 5ZM9.75098 11V7.07874H8.25098V11H9.75098ZM14.251 7.07874V11H15.751V7.07874H14.251Z"
        fill={color}
      />
    </svg>
  );
});

Iconcommodityfill.displayName = 'Iconcommodityfill';

export default Iconcommodityfill;
