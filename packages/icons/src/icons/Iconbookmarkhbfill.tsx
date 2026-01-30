import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * bookmark_hb_fill
 * @source figma
 */
const Iconbookmarkhbfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18 3H6C4.89543 3 4 3.89543 4 5V21.1615C4 21.5402 4.40455 21.7814 4.73769 21.6014L12 17.6773L19.2623 21.6014C19.5954 21.7814 20 21.5402 20 21.1615V5C20 3.89543 19.1046 3 18 3Z"
        fill={color}
      />
    </svg>
  );
});

Iconbookmarkhbfill.displayName = 'Iconbookmarkhbfill';

export default Iconbookmarkhbfill;
