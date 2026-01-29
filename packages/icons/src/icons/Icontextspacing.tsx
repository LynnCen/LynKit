import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_spacing
 * @source figma
 */
const Icontextspacing = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.39999 3.51996L4.99988 3.18652L4.59976 3.51994L1.59961 6.01994L2.39982 6.98024L4.37486 5.33445V18.6657L2.39982 17.0199L1.59961 17.9802L4.59976 20.4802L4.99988 20.8137L5.39999 20.4802L8.39984 17.9802L7.59959 17.02L5.62486 18.6656V5.33453L7.59959 6.98022L8.39984 6.01996L5.39999 3.51996ZM10.0002 6.49998H21.0002V4.99998H10.0002V6.49998ZM10.0002 12.75H21.0002V11.25H10.0002V12.75ZM21.0002 19H10.0002V17.5H21.0002V19Z"
        fill={color}
      />
    </svg>
  );
});

Icontextspacing.displayName = 'Icontextspacing';

export default Icontextspacing;
