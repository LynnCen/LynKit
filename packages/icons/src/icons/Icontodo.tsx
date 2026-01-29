import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * todo
 * @source figma
 */
const Icontodo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <circle cx="12" cy="12" r="8" fill={color} />
      <path
        d="M12 8C11.5858 8 11.25 8.33579 11.25 8.75V13.75H15.25C15.6642 13.75 16 13.4142 16 13C16 12.5858 15.6642 12.25 15.25 12.25H12.75V8.75C12.75 8.33579 12.4142 8 12 8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill={color}
      />
    </svg>
  );
});

Icontodo.displayName = 'Icontodo';

export default Icontodo;
