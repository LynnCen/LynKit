import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * canvas
 * @source figma
 */
const Iconcanvas = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3.68652 4.5469C3.68652 3.45337 4.573 2.56689 5.66652 2.56689H18.3333C19.4268 2.56689 20.3133 3.45337 20.3133 4.54689V10.8H18.7533V4.54689C18.7533 4.31493 18.5653 4.12689 18.3333 4.12689H5.66652C5.43456 4.12689 5.24652 4.31493 5.24652 4.5469V19.4536C5.24652 19.6855 5.43456 19.8736 5.66652 19.8736H11.9999V21.4336H5.66652C4.573 21.4336 3.68652 20.5471 3.68652 19.4536V4.5469Z"
        fill={color}
      />
      <path
        d="M17.7493 22.0494V18.9298H14.6294V17.3698H17.7493L17.7493 14.2494H19.3093V17.3698H22.4294V18.9298H19.3093V22.0494H17.7493Z"
        fill={color}
      />
    </svg>
  );
});

Iconcanvas.displayName = 'Iconcanvas';

export default Iconcanvas;
