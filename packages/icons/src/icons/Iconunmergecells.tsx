import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * unmerge_cells
 * @source figma
 */
const Iconunmergecells = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M8.86914 4H4.86914C4.593 4 4.36914 4.22386 4.36914 4.5V6.5H2.86914V4.5C2.86914 3.39543 3.76457 2.5 4.86914 2.5H8.86914C9.97371 2.5 10.8691 3.39543 10.8691 4.5V19.5C10.8691 20.6046 9.97371 21.5 8.86914 21.5H4.86914C3.76457 21.5 2.86914 20.6046 2.86914 19.5V17.5H4.36914V19.5C4.36914 19.7761 4.593 20 4.86914 20H8.86914C9.14528 20 9.36914 19.7761 9.36914 19.5V4.5C9.36914 4.22386 9.14528 4 8.86914 4ZM18.8691 4H14.8691C14.593 4 14.3691 4.22386 14.3691 4.5V19.5C14.3691 19.7761 14.593 20 14.8691 20H18.8691C19.1453 20 19.3691 19.7761 19.3691 19.5V17.5H20.8691V19.5C20.8691 20.6046 19.9737 21.5 18.8691 21.5H14.8691C13.7646 21.5 12.8691 20.6046 12.8691 19.5V4.5C12.8691 3.39543 13.7646 2.5 14.8691 2.5H18.8691C19.9737 2.5 20.8691 3.39543 20.8691 4.5V6.5H19.3691V4.5C19.3691 4.22386 19.1453 4 18.8691 4ZM18.3258 9.92426L19.8016 11.4H15.55V12.6H19.8016L18.3258 14.0757L19.1744 14.9243L22.0986 12L19.1744 9.07573L18.3258 9.92426ZM3.94842 11.4L5.42416 9.92426L4.57563 9.07573L1.65137 12L4.57563 14.9243L5.42416 14.0757L3.94842 12.6H8.2V11.4H3.94842Z"
        fill={color}
      />
    </svg>
  );
});

Iconunmergecells.displayName = 'Iconunmergecells';

export default Iconunmergecells;
