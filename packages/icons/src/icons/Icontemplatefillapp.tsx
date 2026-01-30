import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * template_fill_app
 * @source figma
 */
const Icontemplatefillapp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M13.6963 2.85425C14.9075 2.66817 15.9997 3.6054 16 4.83081V19.1687C16 20.3944 14.9077 21.3314 13.6963 21.1453L4.69629 19.7605C3.72063 19.6104 3 18.7711 3 17.7839V6.21558C3.00014 5.22855 3.72072 4.3891 4.69629 4.23901L13.6963 2.85425ZM18.5 4.49976C19.6045 4.49976 20.4999 5.3953 20.5 6.49976V17.4998C20.5 18.6043 19.6046 19.4998 18.5 19.4998H17.5V4.49976H18.5Z"
        fill={color}
      />
    </svg>
  );
});

Icontemplatefillapp.displayName = 'Icontemplatefillapp';

export default Icontemplatefillapp;
