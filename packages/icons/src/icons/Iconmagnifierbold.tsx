import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * magnifier_bold
 * @source figma
 */
const Iconmagnifierbold = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.4998 11.4C19.4998 7.58919 16.4106 4.49995 12.5998 4.49995C8.78904 4.49995 5.6998 7.58919 5.6998 11.4C5.6998 15.2107 8.78904 18.3 12.5998 18.3C16.4106 18.3 19.4998 15.2107 19.4998 11.4ZM12.5998 2.69995C17.4047 2.69995 21.2998 6.59507 21.2998 11.4C21.2998 16.2048 17.4047 20.1 12.5998 20.1C10.5216 20.1 8.61355 19.3713 7.11728 18.1555L4.2364 21.0363C3.88492 21.3878 3.31507 21.3878 2.9636 21.0363C2.61213 20.6849 2.61213 20.115 2.9636 19.7635L5.84447 16.8827C4.62856 15.3864 3.89981 13.4783 3.89981 11.4C3.89981 6.59507 7.79493 2.69995 12.5998 2.69995Z"
        fill={color}
      />
    </svg>
  );
});

Iconmagnifierbold.displayName = 'Iconmagnifierbold';

export default Iconmagnifierbold;
