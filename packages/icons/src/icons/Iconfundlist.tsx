import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * fundlist
 * @source figma
 */
const Iconfundlist = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3.5459 4.5C3.5459 4.08579 3.88168 3.75 4.2959 3.75H14.1387C14.5529 3.75 14.8887 4.08579 14.8887 4.5V7.5C14.8887 7.91421 14.5529 8.25 14.1387 8.25H4.2959C3.88168 8.25 3.5459 7.91421 3.5459 7.5V4.5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.2959 9.75C3.88168 9.75 3.5459 10.0858 3.5459 10.5V13.5C3.5459 13.9142 3.88168 14.25 4.2959 14.25H11.8673C12.2815 14.25 12.6173 13.9142 12.6173 13.5V10.5C12.6173 10.0858 12.2815 9.75 11.8673 9.75H4.2959ZM5.0459 12.75V11.25H11.1173V12.75H5.0459Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5459 16.5C3.5459 16.0858 3.88168 15.75 4.2959 15.75H9.59585C10.0101 15.75 10.3459 16.0858 10.3459 16.5V19.5C10.3459 19.9142 10.0101 20.25 9.59585 20.25H4.2959C3.88168 20.25 3.5459 19.9142 3.5459 19.5V16.5ZM5.0459 17.25V18.75H8.84585V17.25H5.0459Z"
        fill="black"
      />
      <path
        d="M18.4196 17.6495L21.3048 4.48569L19.8396 4.16455L17.2672 15.9011L13.2672 15.134L10.9707 19.9186L12.323 20.5677L14.1195 16.8248L18.4196 17.6495Z"
        fill="black"
      />
    </svg>
  );
});

Iconfundlist.displayName = 'Iconfundlist';

export default Iconfundlist;
