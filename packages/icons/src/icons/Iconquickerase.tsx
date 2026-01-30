import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * quick_erase
 * @source figma
 */
const Iconquickerase = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.5 2.75C14.9142 2.75 15.25 3.08581 15.25 3.5V6.75H20.5C20.6992 6.75 20.8906 6.82971 21.0312 6.9707C21.1718 7.11167 21.2504 7.30289 21.25 7.50195L21.2422 11.502C21.2411 11.9153 20.9056 12.2499 20.4922 12.25H19.25V20C19.25 20.4142 18.9142 20.75 18.5 20.75H5.5C5.08579 20.75 4.75 20.4142 4.75 20V12.25H3.5C3.08582 12.25 2.75005 11.9142 2.75 11.5V7.5C2.75 7.3011 2.82911 7.11037 2.96973 6.96973C3.11059 6.82905 3.3019 6.74974 3.50098 6.75L8.75 6.75586V3.5C8.75 3.3011 8.82908 3.11038 8.96973 2.96973C9.11038 2.82907 9.30109 2.75 9.5 2.75H14.5ZM6.25 19.25H9.25V16.5C9.25 16.0858 9.58579 15.75 10 15.75C10.4142 15.75 10.75 16.0858 10.75 16.5V19.25H17.75V12.25H6.25V19.25ZM10.25 7.50781C10.25 7.70677 10.171 7.89746 10.0303 8.03809C9.88941 8.17878 9.69811 8.25807 9.49902 8.25781L4.25 8.25098V10.75H19.7432L19.748 8.25H14.5C14.086 8.24983 13.75 7.91408 13.75 7.5V4.25H10.25V7.50781Z"
        fill={color}
      />
    </svg>
  );
});

Iconquickerase.displayName = 'Iconquickerase';

export default Iconquickerase;
