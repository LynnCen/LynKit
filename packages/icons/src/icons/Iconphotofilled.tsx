import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * photo_filled
 * @source figma
 */
const Iconphotofilled = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM19 12.7485V5.5C19 5.22386 18.7761 5 18.5 5H5.5C5.22386 5 5 5.22386 5 5.5V12.4394L8.47927 8.96013L12.8993 13.0401L15.9793 9.96013L19 12.7485Z"
        fill={color}
      />
    </svg>
  );
});

Iconphotofilled.displayName = 'Iconphotofilled';

export default Iconphotofilled;
