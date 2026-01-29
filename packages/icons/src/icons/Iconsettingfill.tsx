import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * setting_fill
 * @source figma
 */
const Iconsettingfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21.4218 13C21.7791 12.3812 21.7791 11.6188 21.4218 11L17.5765 4.33972C17.2193 3.72092 16.559 3.33972 15.8445 3.33972H8.15389C7.43936 3.33972 6.77911 3.72092 6.42184 4.33972L2.57654 11C2.21928 11.6188 2.21928 12.3812 2.57654 13L6.42184 19.6602C6.77911 20.279 7.43936 20.6602 8.15389 20.6602H15.8445C16.559 20.6602 17.2193 20.279 17.5765 19.6602L21.4218 13ZM11.9992 15.5C13.9322 15.5 15.4992 13.933 15.4992 12C15.4992 10.067 13.9322 8.49998 11.9992 8.49998C10.0662 8.49998 8.49919 10.067 8.49919 12C8.49919 13.933 10.0662 15.5 11.9992 15.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconsettingfill.displayName = 'Iconsettingfill';

export default Iconsettingfill;
