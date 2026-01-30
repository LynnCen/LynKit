import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * arrow_down
 * @source figma
 */
const Iconarrowdown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.0001 14.9697L5.53039 8.5L4.46973 9.56066L12.0001 17.091L19.5304 9.56066L18.4697 8.5L12.0001 14.9697Z"
        fill={color}
      />
    </svg>
  );
});

Iconarrowdown.displayName = 'Iconarrowdown';

export default Iconarrowdown;
