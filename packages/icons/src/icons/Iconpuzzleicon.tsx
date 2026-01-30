import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * puzzle_icon
 * @source figma
 */
const Iconpuzzleicon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 5C3 3.89543 3.89543 3 5 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H5C3.89543 21 3 20.1046 3 19V5ZM12.2646 4.5H18C18.2761 4.5 18.5 4.72386 18.5 5V12.435H12.2642L12.2646 4.5ZM10.7646 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H10.7646L10.7646 4.5ZM12.2646 19.5H18C18.2761 19.5 18.5 19.2761 18.5 19V13.935H12.2642L12.2646 19.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconpuzzleicon.displayName = 'Iconpuzzleicon';

export default Iconpuzzleicon;
