import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * line_diamond_left
 * @source figma
 */
const Iconlinediamondleft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2.70696 11.2929L6.29274 7.70711C6.68327 7.31658 7.31643 7.31658 7.70696 7.70711L11.2498 11.25H21.2498C21.6641 11.25 21.9998 11.5858 21.9998 12C21.9998 12.4142 21.6641 12.75 21.2498 12.75H11.2498L7.70696 16.2929C7.31643 16.6834 6.68327 16.6834 6.29274 16.2929L2.70696 12.7071C2.31643 12.3166 2.31643 11.6834 2.70696 11.2929Z"
        fill={color}
      />
    </svg>
  );
});

Iconlinediamondleft.displayName = 'Iconlinediamondleft';

export default Iconlinediamondleft;
