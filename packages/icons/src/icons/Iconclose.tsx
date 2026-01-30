import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * close
 * @source figma
 */
const Iconclose = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.9394 12.0001L4.46973 5.53039L5.53039 4.46973L12.0001 10.9394L18.4697 4.46973L19.5304 5.53039L13.0607 12.0001L19.5304 18.4697L18.4697 19.5304L12.0001 13.0607L5.53039 19.5304L4.46973 18.4697L10.9394 12.0001Z"
        fill={color}
      />
    </svg>
  );
});

Iconclose.displayName = 'Iconclose';

export default Iconclose;
