import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * suggestion
 * @source figma
 */
const Iconsuggestion = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.4393 5.5L12 12.9393L4.56066 5.5H19.4393ZM3.5 6.56066L11.4697 14.5303L12 15.0607L12.5303 14.5303L20.5 6.56066V18C20.5 18.2761 20.2761 18.5 20 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V6.56066ZM20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
        fill={color}
      />
    </svg>
  );
});

Iconsuggestion.displayName = 'Iconsuggestion';

export default Iconsuggestion;
