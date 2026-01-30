import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * download_record
 * @source figma
 */
const Icondownloadrecord = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M2.25 17C2.25 18.5188 3.48122 19.75 5 19.75H19C20.5188 19.75 21.75 18.5188 21.75 17V12H20.25V17C20.25 17.6904 19.6904 18.25 19 18.25H5C4.30964 18.25 3.75 17.6904 3.75 17L3.75 12H2.25L2.25 17Z"
        fill={color}
      />
      <path
        d="M7.12711 10.273L11.9003 15.0457L16.673 10.273L15.6124 9.21234L12.65 12.1747V3L11.15 3V12.1743L8.18771 9.21231L7.12711 10.273Z"
        fill={color}
      />
    </svg>
  );
});

Icondownloadrecord.displayName = 'Icondownloadrecord';

export default Icondownloadrecord;
