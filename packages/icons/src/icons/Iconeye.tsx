import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * eye
 * @source figma
 */
const Iconeye = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.9999 15C13.6568 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6568 9 11.9999 9C10.3431 9 8.99994 10.3431 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9999 4C16.8378 4 20.8733 7.43552 21.7999 12C20.8733 16.5645 16.8378 20 11.9999 20C7.162 20 3.12649 16.5645 2.19995 12C3.12649 7.43552 7.162 4 11.9999 4ZM11.9999 18.5C7.99552 18.5 4.63501 15.7295 3.73619 12C4.63501 8.27048 7.99552 5.5 11.9999 5.5C16.0043 5.5 19.3648 8.27048 20.2636 12C19.3648 15.7295 16.0043 18.5 11.9999 18.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconeye.displayName = 'Iconeye';

export default Iconeye;
