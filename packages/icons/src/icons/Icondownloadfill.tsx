import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * download_fill
 * @source figma
 */
const Icondownloadfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM15.5061 11.9356L12.75 14.3472V7H11.25V14.3472L8.49388 11.9356L7.50612 13.0644L12 16.9966L16.4939 13.0644L15.5061 11.9356Z"
        fill={color}
      />
    </svg>
  );
});

Icondownloadfill.displayName = 'Icondownloadfill';

export default Icondownloadfill;
