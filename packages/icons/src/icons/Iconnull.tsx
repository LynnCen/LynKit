import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * null
 * @source figma
 */
const Iconnull = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18.3234 18.3232C18.6163 18.0303 18.6163 17.5555 18.3234 17.2626L6.73761 5.67679C6.44471 5.3839 5.96984 5.3839 5.67695 5.67679C5.38405 5.96968 5.38405 6.44456 5.67695 6.73745L17.2627 18.3232C17.5556 18.6161 18.0305 18.6161 18.3234 18.3232Z"
        fill={color}
      />
    </svg>
  );
});

Iconnull.displayName = 'Iconnull';

export default Iconnull;
