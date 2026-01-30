import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * coordinate_axis_multiple
 * @source figma
 */
const Iconcoordinateaxismultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H12.75V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H11.25V2C11.25 1.58579 11.5858 1.25 12 1.25Z"
        fill={color}
      />
      <path
        d="M12 4.375C16.2112 4.375 19.625 7.78883 19.625 12C19.625 16.2112 16.2112 19.625 12 19.625C7.78883 19.625 4.375 16.2112 4.375 12C4.375 7.78883 7.78883 4.375 12 4.375ZM12 5.625C8.47918 5.625 5.625 8.47918 5.625 12C5.625 15.5208 8.47918 18.375 12 18.375C15.5208 18.375 18.375 15.5208 18.375 12C18.375 8.47918 15.5208 5.625 12 5.625ZM12.75 12.75H11.25V11.25H12.75V12.75Z"
        fill={color}
      />
    </svg>
  );
});

Iconcoordinateaxismultiple.displayName = 'Iconcoordinateaxismultiple';

export default Iconcoordinateaxismultiple;
