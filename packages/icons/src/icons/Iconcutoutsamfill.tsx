import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * cutout_sam_fill
 * @source figma
 */
const Iconcutoutsamfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7 3V4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V7H3V5C3 3.89543 3.89543 3 5 3H7Z"
        fill={color}
      />
      <path d="M14 4.5V3H10V4.5H14Z" fill={color} />
      <path
        d="M17 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V9H21V5C21 3.89543 20.1046 3 19 3H17V4.5Z"
        fill={color}
      />
      <path d="M4.5 10H3V14H4.5V10Z" fill={color} />
      <path
        d="M3 17H4.5V19C4.5 19.2761 4.72386 19.5 5 19.5H9V21H5C3.89543 21 3 20.1046 3 19V17Z"
        fill={color}
      />
      <path
        d="M9.65476 9.69673C10.0335 9.31803 10.5901 9.17888 11.1024 9.33481L20.9041 12.3179C21.5151 12.5039 21.9325 13.0676 21.932 13.7063C21.9315 14.345 21.5133 14.9081 20.9021 15.0932L16.411 16.453L15.0513 20.944C14.8662 21.5553 14.303 21.9735 13.6643 21.974C13.0257 21.9744 12.4619 21.557 12.276 20.946L9.29285 11.1444C9.13691 10.632 9.27606 10.0754 9.65476 9.69673Z"
        fill={color}
      />
    </svg>
  );
});

Iconcutoutsamfill.displayName = 'Iconcutoutsamfill';

export default Iconcutoutsamfill;
