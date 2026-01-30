import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * upload_fill
 * @source figma
 */
const Iconuploadfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM8.49388 12.0644L11.25 9.65283L11.25 17L12.75 17L12.75 9.65283L15.5061 12.0644L16.4939 10.9356L12 7.00342L7.50613 10.9356L8.49388 12.0644Z"
        fill={color}
      />
    </svg>
  );
});

Iconuploadfill.displayName = 'Iconuploadfill';

export default Iconuploadfill;
