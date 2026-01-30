import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_warning
 * @source figma
 */
const Iconhbwarning = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM13 16.1841C13 16.7291 12.5582 17.1709 12.0132 17.1709H11.9868C11.4418 17.1709 11 16.7291 11 16.1841C11 15.6391 11.4418 15.1973 11.9868 15.1973H12.0132C12.5582 15.1973 13 15.6391 13 16.1841ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V13Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbwarning.displayName = 'Iconhbwarning';

export default Iconhbwarning;
