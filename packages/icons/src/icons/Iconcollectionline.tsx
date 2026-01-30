import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * collection_line
 * @source figma
 */
const Iconcollectionline = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M16 3.75C16 4.16421 15.6642 4.5 15.25 4.5H8.75C8.33579 4.5 8 4.16421 8 3.75C8 3.33579 8.33579 3 8.75 3H15.25C15.6642 3 16 3.33579 16 3.75Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 8.25C3.89543 8.25 3 9.14543 3 10.25V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10.25C21 9.14543 20.1046 8.25 19 8.25H5ZM19 9.75H5C4.72386 9.75 4.5 9.97386 4.5 10.25V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V10.25C19.5 9.97386 19.2761 9.75 19 9.75Z"
        fill={color}
      />
      <path
        d="M5.5 6.25C5.5 6.66421 5.83579 7 6.25 7H17.75C18.1642 7 18.5 6.66421 18.5 6.25C18.5 5.83579 18.1642 5.5 17.75 5.5H6.25C5.83579 5.5 5.5 5.83579 5.5 6.25Z"
        fill={color}
      />
    </svg>
  );
});

Iconcollectionline.displayName = 'Iconcollectionline';

export default Iconcollectionline;
