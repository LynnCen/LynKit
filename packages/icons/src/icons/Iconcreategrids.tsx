import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * create_grids
 * @source figma
 */
const Iconcreategrids = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19 4.5H15.5498V8.5H19.5V5C19.5 4.72386 19.2761 4.5 19 4.5ZM19.5 10H15.5498V14H19.5V10ZM19.5 15.5H15.5498V19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V15.5ZM14.0498 14V10L10.0498 10V14L14.0498 14ZM10.0498 15.5L14.0498 15.5V19.5H10.0498V15.5ZM8.5498 14V10H4.5V14H8.5498ZM4.5 15.5H8.5498V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V15.5ZM4.5 8.5H8.5498V4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V8.5ZM10.0498 8.5L14.0498 8.5V4.5H10.0498V8.5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z"
        fill={color}
      />
    </svg>
  );
});

Iconcreategrids.displayName = 'Iconcreategrids';

export default Iconcreategrids;
