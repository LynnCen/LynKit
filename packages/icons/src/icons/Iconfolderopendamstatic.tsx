import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * folder_open_dam_static
 * @source figma
 */
const Iconfolderopendamstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2.99988 4.5C2.99988 3.67157 3.67145 3 4.49988 3H10.8749C11.347 3 11.7916 3.22229 12.0749 3.6L12.7499 4.5H19.4999C20.3283 4.5 20.9999 5.17157 20.9999 6V12C20.9999 12.8284 20.3283 13.5 19.4999 13.5H4.49988C3.67145 13.5 2.99988 12.8284 2.99988 12V4.5ZM10.8749 4.5L4.49988 4.5V12H19.4999V6H12.7499C12.2777 6 11.8332 5.77771 11.5499 5.4L10.8749 4.5Z"
        fill="#7F8792"
      />
      <path
        d="M2.49448 11.4621C2.36539 10.5585 3.06658 9.75 3.97941 9.75H20.0204C20.9332 9.75 21.6344 10.5585 21.5053 11.4621L20.4339 18.9621C20.3283 19.7011 19.6954 20.25 18.9489 20.25H5.05084C4.30436 20.25 3.67148 19.7011 3.56591 18.9621L2.49448 11.4621Z"
        fill="#F6F7F9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75204 11.5682C1.5584 10.2127 2.61019 9 3.97943 9H20.0204C21.3896 9 22.4414 10.2127 22.2478 11.5682L21.1764 19.0682C21.018 20.1767 20.0687 21 18.949 21H5.05086C3.93114 21 2.98182 20.1767 2.82347 19.0682L1.75204 11.5682ZM3.97943 10.5C3.52301 10.5 3.17242 10.9042 3.23696 11.3561L4.30839 18.8561C4.36118 19.2256 4.67762 19.5 5.05086 19.5H18.949C19.3222 19.5 19.6386 19.2256 19.6914 18.8561L20.7629 11.3561C20.8274 10.9042 20.4768 10.5 20.0204 10.5H3.97943Z"
        fill="#7F8792"
      />
    </svg>
  );
});

Iconfolderopendamstatic.displayName = 'Iconfolderopendamstatic';

export default Iconfolderopendamstatic;
