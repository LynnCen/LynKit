import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_right
 * @source figma
 */
const Iconarrowright = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.9396 11.9991L8.46997 5.52941L9.53063 4.46875L17.061 11.9991L9.53063 19.5294L8.46997 18.4688L14.9396 11.9991Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowright.displayName = 'Iconarrowright';

export default Iconarrowright;
