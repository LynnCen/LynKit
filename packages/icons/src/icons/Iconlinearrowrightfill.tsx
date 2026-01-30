import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * line_arrow_right_fill
 * @source figma
 */
const Iconlinearrowrightfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21.3216 11.576L15.2975 7.81092C14.8875 7.55466 14.3887 7.97169 14.5682 8.42061L15.7 11.25H2.75C2.33579 11.25 2 11.5858 2 12C2 12.4142 2.33579 12.75 2.75 12.75H15.7L14.5682 15.5794C14.3887 16.0283 14.8875 16.4453 15.2975 16.1891L21.3216 12.424C21.6349 12.2282 21.6349 11.7718 21.3216 11.576Z"
        fill={color}
      />
    </svg>
  );
});

Iconlinearrowrightfill.displayName = 'Iconlinearrowrightfill';

export default Iconlinearrowrightfill;
