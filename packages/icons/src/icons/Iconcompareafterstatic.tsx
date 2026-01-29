import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * compare_after_static
 * @source figma
 */
const Iconcompareafterstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.75 12.4336H11.3438C11.3125 12.4336 11.2811 12.435 11.25 12.4355V5.75H4.75C4.61193 5.75 4.5 5.86193 4.5 6V18C4.5 18.1381 4.61193 18.25 4.75 18.25H6.11328C6.16874 18.7772 6.30245 19.2809 6.50195 19.75H4.75C3.7835 19.75 3 18.9665 3 18V6C3 5.0335 3.7835 4.25 4.75 4.25H11.25V2.25H12.75V12.4336ZM21 11.25H19.5V8.91699H21V11.25ZM19.25 4.25C20.2165 4.25 21 5.0335 21 6V7.41699H19.5V6C19.5 5.86193 19.3881 5.75 19.25 5.75H17.8174V4.25H19.25ZM16.3174 5.75H14.2461V4.25H16.3174V5.75Z"
        fill="#222529"
      />
      <path
        d="M19.3545 13.6854C21.5689 13.6857 23.3642 15.4808 23.3643 17.6952C23.3643 19.9096 21.5689 21.7047 19.3545 21.705H11.334C9.11938 21.705 7.32422 19.9098 7.32422 17.6952C7.32426 15.4806 9.11941 13.6854 11.334 13.6854H19.3545ZM19.3545 14.6874C17.6938 14.6875 16.3479 16.0336 16.3477 17.6942C16.3477 19.3551 17.6937 20.7019 19.3545 20.702C21.0154 20.702 22.3623 19.3551 22.3623 17.6942C22.3621 16.0335 21.0152 14.6874 19.3545 14.6874Z"
        fill="#1CCC66"
      />
    </svg>
  );
});

Iconcompareafterstatic.displayName = 'Iconcompareafterstatic';

export default Iconcompareafterstatic;
