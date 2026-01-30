import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * layerup_top
 * @source figma
 */
const Iconlayeruptop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.8677 16.4971L12.7188 20.3989C12.2709 20.6434 11.7294 20.6434 11.2815 20.3989L4.13265 16.4971L4.14279 16.4916L2.9311 15.8303C2.83108 15.7757 2.74307 15.7104 2.66707 15.637C2.10984 16.1752 2.19781 17.15 2.93125 17.5503L10.5629 21.7156C11.4587 22.2045 12.5416 22.2045 13.4374 21.7156L21.0691 17.5503C21.8026 17.1499 21.8905 16.175 21.3331 15.6369C21.257 15.7103 21.169 15.7756 21.0689 15.8303L19.8574 16.4915L19.8677 16.4971ZM12.7188 16.9027L19.8677 13.0009L15.0003 10.3475V8.63915L21.0686 11.9471C21.9025 12.4017 21.9028 13.599 21.0691 14.054L13.4375 18.2193C12.5417 18.7083 11.4588 18.7083 10.563 18.2193L2.93131 14.054C2.0976 13.599 2.09791 12.4017 2.93187 11.9471L9.00028 8.63909V10.3475L4.13271 13.0009L11.2816 16.9027C11.7295 17.1471 12.2709 17.1471 12.7188 16.9027ZM12.5149 2.45451L16.5149 6.2287L15.4855 7.31971L12.7502 4.73883V13H11.2502V4.73883L8.51493 7.31971L7.48551 6.2287L11.4855 2.45451L12.0002 1.96885L12.5149 2.45451Z"
        fill={color}
      />
    </svg>
  );
});

Iconlayeruptop.displayName = 'Iconlayeruptop';

export default Iconlayeruptop;
