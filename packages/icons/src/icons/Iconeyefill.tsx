import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * eye_fill
 * @source figma
 */
const Iconeyefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21.7999 12C20.8733 7.43552 16.8378 4 11.9999 4C7.162 4 3.12649 7.43552 2.19995 12C3.12649 16.5645 7.162 20 11.9999 20C16.8378 20 20.8733 16.5645 21.7999 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        fill={color}
      />
    </svg>
  );
});

Iconeyefill.displayName = 'Iconeyefill';

export default Iconeyefill;
