import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * copyright_fill
 * @source figma
 */
const Iconcopyrightfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 14.5C13.0252 14.5 13.9062 13.883 14.292 13H15.874C15.4299 14.7252 13.8638 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C13.8638 8 15.4299 9.27477 15.874 11H14.292C13.9062 10.117 13.0252 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconcopyrightfill.displayName = 'Iconcopyrightfill';

export default Iconcopyrightfill;
