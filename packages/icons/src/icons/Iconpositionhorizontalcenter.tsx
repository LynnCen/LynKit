import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * position_horizontal_center
 * @source figma
 */
const Iconpositionhorizontalcenter = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.25 20L11.25 4L12.75 4L12.75 20H11.25ZM5.01276 9.46871L6.18373 8.53125L8.96074 12L6.18372 15.4687L5.01276 14.5312L6.43882 12.75H2L2 11.25L6.43882 11.25L5.01276 9.46871ZM15.0393 12L17.8163 15.4687L18.9872 14.5312L17.5612 12.75H22V11.25H17.5612L18.9872 9.46871L17.8163 8.53125L15.0393 12Z"
        fill={color}
      />
    </svg>
  );
});

Iconpositionhorizontalcenter.displayName = 'Iconpositionhorizontalcenter';

export default Iconpositionhorizontalcenter;
