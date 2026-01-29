import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * drafts
 * @source figma
 */
const Icondrafts = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z"
        fill={color}
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 9.75H9V8.25H15V9.75Z" fill={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 14.75H7V13.25H17V14.75Z" fill={color} />
    </svg>
  );
});

Icondrafts.displayName = 'Icondrafts';

export default Icondrafts;
