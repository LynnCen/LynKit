import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * volume_on_static
 * @source figma
 */
const Iconvolumeonstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.2432 2.45435C14.4799 2.31255 14.7867 2.38956 14.9287 2.62622C14.9752 2.70384 15 2.79256 15 2.88306V12.7288H13.5V4.64868L7.08301 8.49927L3.5 8.50024V15.5002L6.70898 15.4993C6.45993 15.962 6.27916 16.4665 6.17773 16.9993L3 17.0002C2.44778 17.0002 2.00011 16.5524 2 16.0002V8.00024C2.00001 7.44797 2.44772 7.00024 3 7.00024L6.66699 6.99927L14.2432 2.45435ZM17 7.02271C19.8032 7.27533 22 9.63124 22 12.5002C22 12.8183 21.9708 13.1296 21.9189 13.4329C21.5049 13.1935 21.0555 13.0087 20.5801 12.8889C20.5924 12.761 20.5996 12.6314 20.5996 12.5002C20.5996 10.4263 19.0211 8.72064 17 8.51978V7.02271Z"
        fill="#222529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3545 13.9805C21.569 13.9805 23.3642 15.7757 23.3643 17.9902C23.3643 20.2048 21.569 21.9999 19.3545 22H11.334C9.11944 21.9999 7.32422 20.2048 7.32422 17.9902C7.32428 15.7757 9.11948 13.9805 11.334 13.9805H19.3545ZM19.3555 14.9824C17.6946 14.9824 16.3477 16.3293 16.3477 17.9902C16.3479 19.6509 17.6947 20.9971 19.3555 20.9971C21.016 20.9968 22.362 19.6507 22.3623 17.9902C22.3623 16.3295 21.0161 14.9827 19.3555 14.9824Z"
        fill="#1CCC66"
      />
    </svg>
  );
});

Iconvolumeonstatic.displayName = 'Iconvolumeonstatic';

export default Iconvolumeonstatic;
