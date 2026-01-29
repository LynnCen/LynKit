import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * component_icon_fill
 * @source figma
 */
const Iconcomponenticonfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.2135 2.91007C11.989 2.78979 11.7188 2.79166 11.496 2.91504L3.94496 7.09628L11.8637 10.871L20.0185 7.09168L12.2135 2.91007Z"
        fill={color}
      />
      <path
        d="M20.8564 8.35661L12.6093 12.1788V21.4659L20.4637 17.2105C20.7057 17.0794 20.8564 16.8263 20.8564 16.5511V8.35661Z"
        fill={color}
      />
      <path
        d="M11.1093 21.4588V12.1731L3.12988 8.36945V16.5511C3.12988 16.8226 3.27658 17.0728 3.51345 17.2055L11.1093 21.4588Z"
        fill={color}
      />
    </svg>
  );
});

Iconcomponenticonfill.displayName = 'Iconcomponenticonfill';

export default Iconcomponenticonfill;
