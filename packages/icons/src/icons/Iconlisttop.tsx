import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * list_top
 * @source figma
 */
const Iconlisttop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.75 18V11.8107L14.4697 13.5303L15.5303 12.4697L12 8.93934L8.46967 12.4697L9.53033 13.5303L11.25 11.8107V18H12.75Z"
        fill="black"
      />
      <path d="M8 6.75V8.25L16 8.25V6.75L8 6.75Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
        fill="black"
      />
    </svg>
  );
});

Iconlisttop.displayName = 'Iconlisttop';

export default Iconlisttop;
