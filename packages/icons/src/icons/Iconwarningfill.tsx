import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * warning_fill
 * @source figma
 */
const Iconwarningfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 13V7H13V13H11ZM11 17V15H13V17H11Z"
        fill={color}
      />
    </svg>
  );
});

Iconwarningfill.displayName = 'Iconwarningfill';

export default Iconwarningfill;
