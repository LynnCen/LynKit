import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_upgraded
 * @source figma
 */
const Icontextupgraded = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.0039 19.4997H12.4229L10.8398 14.7497H5.30957L3.59473 19.4997H2L7.41602 4.49969H9.00391L14.0039 19.4997ZM19.6504 19.4997H18.3506V17.9997H19.6504V19.4997ZM19.6504 15.4997V16.9997H18.3506V15.4997H19.6504ZM23.959 9.04071L23.04 9.95966L19.6494 6.56903V14.4997H18.3496V6.56903L14.959 9.95966L14.04 9.04071L19 4.08075L23.959 9.04071ZM5.85156 13.2497H10.3398L8.18555 6.7868L5.85156 13.2497Z"
        fill={color}
      />
    </svg>
  );
});

Icontextupgraded.displayName = 'Icontextupgraded';

export default Icontextupgraded;
