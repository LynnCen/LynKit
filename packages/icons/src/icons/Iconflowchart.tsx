import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * flow_chart
 * @source figma
 */
const Iconflowchart = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15V9H15Z"
        fill={color}
      />
      <rect x="10" y="10" width="11" height="11" fill={color} />
    </svg>
  );
});

Iconflowchart.displayName = 'Iconflowchart';

export default Iconflowchart;
