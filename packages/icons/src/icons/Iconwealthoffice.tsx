import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * wealth_office
 * @source figma
 */
const Iconwealthoffice = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.8945 10.1599L14.0664 7.98804L15.1271 9.0487L13.1244 11.0514H14.876V12.5514H12.626V13.623H14.876V15.123H12.626V16.9171H11.126V15.123H8.87598V13.623H11.126V12.5514H8.87598V11.0514H10.6647L8.662 9.0487L9.72266 7.98804L11.8945 10.1599Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.37012 5.97803C3.37012 4.87346 4.26555 3.97803 5.37012 3.97803H18.873C19.9776 3.97803 20.873 4.87346 20.873 5.97803V17.8291C20.873 18.9337 19.9776 19.8291 18.873 19.8291H5.37012C4.26555 19.8291 3.37012 18.9337 3.37012 17.8291V5.97803ZM5.37012 5.47803H18.873C19.1492 5.47803 19.373 5.70188 19.373 5.97803V17.8291C19.373 18.1052 19.1492 18.3291 18.873 18.3291H5.37012C5.09398 18.3291 4.87012 18.1052 4.87012 17.8291V5.97803C4.87012 5.70189 5.09397 5.47803 5.37012 5.47803Z"
        fill="black"
      />
    </svg>
  );
});

Iconwealthoffice.displayName = 'Iconwealthoffice';

export default Iconwealthoffice;
