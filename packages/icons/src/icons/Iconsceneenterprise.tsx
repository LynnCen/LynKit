import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * scene_enterprise
 * @source figma
 */
const Iconsceneenterprise = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.4915 2.64151C12.6972 2.78109 12.8203 3.01352 12.8203 3.26209V8.44165L19.375 11.2337C19.6516 11.3516 19.8311 11.6231 19.8311 11.9238V18.4417H21V19.9417H12.0727L12.0703 19.9417H5.07129L5.06887 19.9417H3V18.4417H4.32129V6.04367C4.32129 5.73638 4.50873 5.46019 4.79429 5.3467L11.7933 2.56511C12.0243 2.47331 12.2858 2.50192 12.4915 2.64151ZM11.3203 18.4417V4.36722L5.82129 6.55266V18.4417H11.3203ZM12.8203 18.4416H18.3311V12.4195L12.8203 10.0721V18.4416Z"
        fill="black"
      />
    </svg>
  );
});

Iconsceneenterprise.displayName = 'Iconsceneenterprise';

export default Iconsceneenterprise;
