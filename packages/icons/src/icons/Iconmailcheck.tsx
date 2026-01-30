import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * mail_check
 * @source figma
 */
const Iconmailcheck = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 5.75H21.5V4.25H3V5.75ZM3 12.75H21.5V11.25H3V12.75ZM11 19.75H3V18.25H11V19.75ZM23.5303 15.5303L22.4697 14.4697L17 19.9393L14.5303 17.4697L13.4697 18.5303L16.4697 21.5303L17 22.0607L17.5303 21.5303L23.5303 15.5303Z"
        fill={color}
      />
    </svg>
  );
});

Iconmailcheck.displayName = 'Iconmailcheck';

export default Iconmailcheck;
