import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * node_square
 * @source figma
 */
const Iconnodesquare = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25H20.75V4.75H12.3107L4.75 12.3107V20.75H3.25V12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L11.4697 3.46967Z"
        fill={color}
      />
      <path d="M14 10V11.25H20.75V12.75H14V14H12.75V20.75H11.25V14H10V10H14Z" fill={color} />
    </svg>
  );
});

Iconnodesquare.displayName = 'Iconnodesquare';

export default Iconnodesquare;
