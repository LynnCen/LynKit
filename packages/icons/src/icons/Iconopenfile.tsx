import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * open_file
 * @source figma
 */
const Iconopenfile = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.1472 6.49074L11.5952 7H12.2734H19.5C19.7761 7 20 7.22386 20 7.5V11H21.5V7.5C21.5 6.39543 20.6046 5.5 19.5 5.5H12.2734L10.6715 3.67901C10.2918 3.24737 9.74475 3 9.16987 3H4.5C3.39543 3 2.5 3.89543 2.5 5V18C2.5 19.1046 3.39543 20 4.5 20H13.5V18.5H4.5C4.22386 18.5 4 18.2761 4 18V5C4 4.72386 4.22386 4.5 4.5 4.5H9.16987C9.31359 4.5 9.45036 4.56184 9.54529 4.66975L11.1472 6.49074ZM15.5 17.75H18.75V21H20.25V17.75H23.5V16.25H20.25V13H18.75V16.25H15.5V17.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconopenfile.displayName = 'Iconopenfile';

export default Iconopenfile;
