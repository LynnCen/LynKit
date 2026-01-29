import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * book
 * @source figma
 */
const Iconbook = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2 6.31943C2 6.12366 2.11061 5.94469 2.28571 5.85713L3.78369 5.10814C6.36773 3.81613 9.45995 4.09495 11.7712 5.82837C11.9068 5.93007 12.0932 5.93007 12.2288 5.82837C14.54 4.09495 17.6323 3.81613 20.2163 5.10814L21.7143 5.85713C21.8894 5.94469 22 6.12366 22 6.31943V19.2235C22 19.5803 21.6246 19.8123 21.3055 19.6527L20.2163 19.1081C17.6323 17.8161 14.54 18.095 12.2288 19.8284C12.0932 19.9301 11.9068 19.9301 11.7712 19.8284C9.45995 18.095 6.36773 17.8161 3.78369 19.1081L2.6945 19.6527C2.37542 19.8123 2 19.5803 2 19.2235V6.31943ZM19.5455 6.44978L20.5 6.92704V17.5841C18.0022 16.4778 15.16 16.5574 12.75 17.7529V7.24885C12.8824 7.1913 13.0096 7.11781 13.1288 7.02837C14.9855 5.63585 17.4696 5.41186 19.5455 6.44978ZM11.25 7.24885C11.1176 7.1913 10.9904 7.11781 10.8712 7.02837C9.01448 5.63585 6.53037 5.41186 4.45452 6.44978L3.5 6.92704V17.5841C5.99779 16.4778 8.83999 16.5574 11.25 17.7529V7.24885Z"
        fill={color}
      />
    </svg>
  );
});

Iconbook.displayName = 'Iconbook';

export default Iconbook;
