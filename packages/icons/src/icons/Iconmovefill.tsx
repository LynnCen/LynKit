import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * move_fill
 * @source figma
 */
const Iconmovefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3.68033 4.31266L9.31378 21.213C9.45897 21.6486 10.0653 21.6746 10.2472 21.253L13.4865 13.7473C13.537 13.6302 13.6304 13.5369 13.7474 13.4864L21.2531 10.2471C21.6747 10.0651 21.6487 9.45885 21.2131 9.31366L4.31279 3.68021C3.92191 3.54992 3.55004 3.92179 3.68033 4.31266Z"
        fill={color}
      />
    </svg>
  );
});

Iconmovefill.displayName = 'Iconmovefill';

export default Iconmovefill;
