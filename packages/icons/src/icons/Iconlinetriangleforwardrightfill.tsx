import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * line_triangle_forward_right_fill
 * @source figma
 */
const Iconlinetriangleforwardrightfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21.4304 11.5931L15.7906 7.56472C15.4597 7.32834 15 7.5649 15 7.97158V11.25H2.75C2.33579 11.25 2 11.5858 2 12C2 12.4142 2.33579 12.75 2.75 12.75H15V16.0284C15 16.4351 15.4597 16.6716 15.7906 16.4353L21.4304 12.4069C21.7096 12.2074 21.7096 11.7925 21.4304 11.5931Z"
        fill={color}
      />
    </svg>
  );
});

Iconlinetriangleforwardrightfill.displayName = 'Iconlinetriangleforwardrightfill';

export default Iconlinetriangleforwardrightfill;
