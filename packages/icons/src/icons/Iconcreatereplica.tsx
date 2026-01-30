import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * .create_replica
 * @source figma
 */
const Iconcreatereplica = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4 5.5H16.5C16.7761 5.5 17 5.72386 17 6V9H18.5V6C18.5 4.89543 17.6046 4 16.5 4H4C2.89543 4 2 4.89543 2 6V18.5C2 19.6046 2.89543 20.5 4 20.5H12V19H4C3.72386 19 3.5 18.7761 3.5 18.5V6C3.5 5.72386 3.72386 5.5 4 5.5Z"
        fill={color}
      />
      <path d="M17.0003 11.5H18.5003V20.5H17.0003V11.5Z" fill={color} />
      <path d="M13.2148 15.2587H22.2148V16.7587H13.2148V15.2587Z" fill={color} />
    </svg>
  );
});

Iconcreatereplica.displayName = 'Iconcreatereplica';

export default Iconcreatereplica;
