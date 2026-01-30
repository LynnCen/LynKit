import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * loading_static
 * @source figma
 */
const Iconloadingstatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#F0F6FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3C11 2.44772 11.4477 2 12 2C14.1118 2 16.1694 2.66855 17.8779 3.90983C19.5863 5.15111 20.858 6.9014 21.5106 8.90983C22.1631 10.9183 22.1631 13.0817 21.5106 15.0902C20.858 17.0986 19.5863 18.8489 17.8779 20.0902C17.431 20.4148 16.8057 20.3157 16.481 19.8689C16.1564 19.4221 16.2555 18.7968 16.7023 18.4721C18.0691 17.4791 19.0864 16.0789 19.6085 14.4721C20.1305 12.8654 20.1305 11.1346 19.6085 9.52786C19.0864 7.92112 18.0691 6.52089 16.7023 5.52786C15.3355 4.53484 13.6894 4 12 4C11.4477 4 11 3.55228 11 3Z"
        fill="#2254F4"
      />
    </svg>
  );
});

Iconloadingstatic.displayName = 'Iconloadingstatic';

export default Iconloadingstatic;
