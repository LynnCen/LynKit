import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_download
 * @source figma
 */
const Iconhbdownload = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21.0004 14.5195C21.5969 14.5195 22.0809 15.0035 22.0809 15.6V16.2C22.0809 19.1161 19.7165 21.4805 16.8004 21.4805H7.20039C4.28433 21.4805 1.91992 19.1161 1.91992 16.2V15.6C1.91992 15.0035 2.40392 14.5195 3.00039 14.5195C3.59686 14.5195 4.08086 15.0035 4.08086 15.6V16.2C4.08086 17.9231 5.47726 19.3195 7.20039 19.3195H16.8004C18.5235 19.3195 19.9199 17.9231 19.9199 16.2V15.6C19.9199 15.0035 20.4039 14.5195 21.0004 14.5195Z"
        fill="black"
      />
      <path
        d="M12.0004 2.51953C12.5969 2.51953 13.0809 3.00353 13.0809 3.6V12.9914L17.2363 8.83594C17.6581 8.41417 18.3427 8.41417 18.7645 8.83594C19.1862 9.2577 19.1862 9.9423 18.7645 10.3641L13.6129 15.5156C12.7781 16.3503 11.4568 16.4019 10.5613 15.6715L10.3879 15.5156L5.23633 10.3641L5.1625 10.282C4.81636 9.85783 4.84086 9.2314 5.23633 8.83594C5.63179 8.44047 6.25822 8.41597 6.68242 8.76211L6.76445 8.83594L10.9199 12.9914V3.6C10.9199 3.00353 11.4039 2.51953 12.0004 2.51953Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbdownload.displayName = 'Iconhbdownload';

export default Iconhbdownload;
