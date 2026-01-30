import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * download
 * @source figma
 */
const Icondownload = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.75 2V15.1893L17.4697 10.4697L18.5303 11.5303L12 18.0607L5.46967 11.5303L6.53033 10.4697L11.25 15.1893V2H12.75ZM19 20.5V22H5V20.5H19Z"
        fill={color}
      />
    </svg>
  );
});

Icondownload.displayName = 'Icondownload';

export default Icondownload;
