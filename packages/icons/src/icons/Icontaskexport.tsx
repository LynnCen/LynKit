import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * task_export
 * @source figma
 */
const Icontaskexport = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.25 5.61847L8.9881 7.55725L8.01191 6.41837L12 3L15.9881 6.41837L15.0119 7.55725L12.75 5.61847V11.9878H11.25V5.61847Z"
        fill={color}
      />
      <path
        d="M4.5 10.2101L6.02784 4.86264C6.08917 4.64799 6.28536 4.5 6.5086 4.5H8V3H6.5086C5.61564 3 4.83087 3.59196 4.58555 4.45056L3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10L19.4144 4.45056C19.1691 3.59196 18.3844 3 17.4914 3H16V4.5H17.4914C17.7146 4.5 17.9108 4.64799 17.9722 4.86264L19.5 10.2101V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V10.2101Z"
        fill={color}
      />
      <path d="M8 16.75H16V15.25H8V16.75Z" fill={color} />
    </svg>
  );
});

Icontaskexport.displayName = 'Icontaskexport';

export default Icontaskexport;
