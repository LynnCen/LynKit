import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * loading
 * @source figma
 */
const Iconloading = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.0711 19.0711C22.9763 15.1659 22.9763 8.83422 19.0711 4.92898C15.1658 1.02373 8.83418 1.02373 4.92893 4.92898C4.34315 5.51476 4.34315 6.46451 4.92893 7.0503C5.51472 7.63608 6.46447 7.63608 7.05025 7.0503C9.78392 4.31663 14.2161 4.31663 16.9497 7.0503C19.6834 9.78397 19.6834 14.2161 16.9497 16.9498C16.364 17.5356 16.364 18.4853 16.9497 19.0711C17.5355 19.6569 18.4853 19.6569 19.0711 19.0711Z"
        fill={color}
      />
    </svg>
  );
});

Iconloading.displayName = 'Iconloading';

export default Iconloading;
