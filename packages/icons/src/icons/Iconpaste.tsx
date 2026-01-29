import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * paste
 * @source figma
 */
const Iconpaste = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M22 14C22 15.1046 21.1046 16 20 16H18.6477V14.5H20C20.2761 14.5 20.5 14.2761 20.5 14V12.4091H22V14Z"
        fill="black"
      />
      <path
        d="M20 2C21.1046 2 22 2.89543 22 4V5.59091H20.5V4C20.5 3.72386 20.2761 3.5 20 3.5H18.6477V2H20Z"
        fill="black"
      />
      <path
        d="M13 2H11.5C10.3954 2 9.5 2.89543 9.5 4V5.59091H11V4C11 3.72386 11.2239 3.5 11.5 3.5H13V2Z"
        fill="black"
      />
      <path d="M22 7.40909V10.5909H20.5V7.40909H22Z" fill="black" />
      <path d="M17.1023 16H16V14.5H17.1023V16Z" fill="black" />
      <path d="M14.3977 2H17.1023V3.5H14.3977V2Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 10C2 8.89543 2.89543 8 4 8H12.5C13.6046 8 14.5 8.89543 14.5 10V20C14.5 21.1046 13.6046 22 12.5 22H4C2.89543 22 2 21.1046 2 20V10ZM12.5 20.5H4C3.72386 20.5 3.5 20.2761 3.5 20V10C3.5 9.72386 3.72386 9.5 4 9.5H12.5C12.7761 9.5 13 9.72386 13 10V20C13 20.2761 12.7761 20.5 12.5 20.5Z"
        fill="black"
      />
    </svg>
  );
});

Iconpaste.displayName = 'Iconpaste';

export default Iconpaste;
