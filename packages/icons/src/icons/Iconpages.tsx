import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * pages
 * @source figma
 */
const Iconpages = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M20.75 5C21.7165 5 22.5 5.7835 22.5 6.75V20.25C22.5 21.2165 21.7165 22 20.75 22H3.25C2.2835 22 1.5 21.2165 1.5 20.25V6.75C1.5 5.7835 2.2835 5 3.25 5H20.75ZM3.25 6.5C3.11193 6.5 3 6.61193 3 6.75V20.25C3 20.3881 3.11193 20.5 3.25 20.5H20.75C20.8881 20.5 21 20.3881 21 20.25V6.75C21 6.61193 20.8881 6.5 20.75 6.5H3.25ZM17.5 2C18.3284 2 19 2.67157 19 3.5H5C5 2.67157 5.67157 2 6.5 2H17.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconpages.displayName = 'Iconpages';

export default Iconpages;
