import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * eraser_brush_filled
 * @source figma
 */
const Iconeraserbrushfilled = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.398 18.0683L13.2535 19.2519H20.9869L21.0641 19.2558C21.442 19.2944 21.7368 19.6138 21.7369 20.0019C21.7366 20.3898 21.4418 20.7094 21.0641 20.748L20.9869 20.7519H8.90488C8.21907 20.7517 7.55698 20.4947 7.05039 20.0322L7.04257 20.0253L4.17539 17.3339C2.62975 15.8831 2.59301 13.4399 4.09433 11.9433L6.18711 9.85637L14.398 18.0683Z"
        fill={color}
      />
      <path
        d="M13.4352 2.63469C14.5091 1.56164 16.2501 1.56227 17.3238 2.63567L21.5172 6.82903L21.7047 7.03606C22.5186 8.03227 22.53 9.46837 21.732 10.4775L21.5484 10.6874L15.443 16.9911L7.24961 8.79778L13.4352 2.63469Z"
        fill={color}
      />
    </svg>
  );
});

Iconeraserbrushfilled.displayName = 'Iconeraserbrushfilled';

export default Iconeraserbrushfilled;
