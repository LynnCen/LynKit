import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * template_filled
 * @source figma
 */
const Icontemplatefilled = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.2C15.3046 21 16.2 20.1046 16.2 19V5C16.2 3.89543 15.3046 3 14.2 3H5Z"
        fill={color}
      />
      <path
        d="M18.3089 20.4813L17.4723 20.3338C17.4905 20.2252 17.5 20.1137 17.5 20V5.88672L20.7804 6.46513C21.8682 6.65694 22.5945 7.69425 22.4027 8.78204L20.6258 18.859C20.434 19.9468 19.3967 20.6731 18.3089 20.4813Z"
        fill={color}
      />
    </svg>
  );
});

Icontemplatefilled.displayName = 'Icontemplatefilled';

export default Icontemplatefilled;
