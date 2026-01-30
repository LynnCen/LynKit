import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shape_text_diamond
 * @source figma
 */
const Iconshapetextdiamond = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.5108 15.177H13.4831V14.8197C13.2254 14.8197 13.0322 14.8009 12.9034 14.7633C12.7807 14.7195 12.6978 14.6286 12.6549 14.4907C12.612 14.3528 12.5905 14.1428 12.5905 13.8608V9.4889H13.0598C13.4034 9.4889 13.658 9.5265 13.8236 9.60172C13.9892 9.67693 14.1089 9.81169 14.1825 10.006C14.2622 10.194 14.3359 10.4573 14.4034 10.7958H14.7991L14.7162 9H9.30524L9.20402 10.7958H9.59972C9.6672 10.4573 9.73775 10.194 9.81137 10.006C9.88499 9.81169 10.0046 9.67693 10.1703 9.60172C10.342 9.5265 10.5966 9.4889 10.9341 9.4889H11.4126V13.8608C11.4126 14.1428 11.3911 14.3528 11.3482 14.4907C11.3114 14.6286 11.2285 14.7195 11.0997 14.7633C10.9709 14.8009 10.7746 14.8197 10.5108 14.8197V15.177Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3884 3.23936L1.94586 11.226C1.45685 11.6262 1.45685 12.3739 1.94586 12.774L11.3884 20.7542C11.7568 21.0556 12.2865 21.0556 12.6549 20.7542L22.054 12.774C22.543 12.3739 22.543 11.6262 22.054 11.226L12.6549 3.23936C12.2865 2.93797 11.7568 2.93797 11.3884 3.23936ZM12.0217 19.3342L3.3687 12L12.0217 4.65935L20.6311 12L12.0217 19.3342Z"
        fill={color}
      />
    </svg>
  );
});

Iconshapetextdiamond.displayName = 'Iconshapetextdiamond';

export default Iconshapetextdiamond;
