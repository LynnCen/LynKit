import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * table_insert_below
 * @source figma
 */
const Icontableinsertbelow = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M20 8.5L20 4.5C20 4.22386 19.7761 4 19.5 4L4.5 4C4.22386 4 4 4.22386 4 4.5L4 8.5C4 8.77614 4.22386 9 4.5 9L19.5 9C19.7761 9 20 8.77614 20 8.5ZM19.5 10.5C20.6046 10.5 21.5 9.60457 21.5 8.5L21.5 4.5C21.5 3.39543 20.6046 2.5 19.5 2.5L4.5 2.5C3.39543 2.5 2.5 3.39543 2.5 4.5L2.5 8.5C2.5 9.60457 3.39543 10.5 4.5 10.5L19.5 10.5ZM16.25 16.5L12.75 16.5L12.75 13L11.25 13L11.25 16.5L7.75 16.5L7.75 18L11.25 18L11.25 21.5L12.75 21.5L12.75 18L16.25 18L16.25 16.5Z"
        fill={color}
      />
    </svg>
  );
});

Icontableinsertbelow.displayName = 'Icontableinsertbelow';

export default Icontableinsertbelow;
