import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * color_fill
 * @source figma
 */
const Iconcolorfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M22 12C22 15.3975 20.3333 17.5556 17.5556 17.5556C16.1258 17.5556 16.0932 18.4386 16.058 19.3939C16.0247 20.2947 15.9891 21.2596 14.7778 21.6091C13.8959 21.8636 12.9639 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 7.25C15 7.94036 14.4404 8.5 13.75 8.5C13.0596 8.5 12.5 7.94036 12.5 7.25C12.5 6.55964 13.0596 6 13.75 6C14.4404 6 15 6.55964 15 7.25ZM9.5 8.75C10.1904 8.75 10.75 8.19036 10.75 7.5C10.75 6.80964 10.1904 6.25 9.5 6.25C8.80964 6.25 8.25 6.80964 8.25 7.5C8.25 8.19036 8.80964 8.75 9.5 8.75ZM7.25 12.25C7.94036 12.25 8.5 11.6904 8.5 11C8.5 10.3096 7.94036 9.75 7.25 9.75C6.55964 9.75 6 10.3096 6 11C6 11.6904 6.55964 12.25 7.25 12.25ZM16.75 11.25C17.4404 11.25 18 10.6904 18 10C18 9.30964 17.4404 8.75 16.75 8.75C16.0596 8.75 15.5 9.30964 15.5 10C15.5 10.6904 16.0596 11.25 16.75 11.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconcolorfill.displayName = 'Iconcolorfill';

export default Iconcolorfill;
