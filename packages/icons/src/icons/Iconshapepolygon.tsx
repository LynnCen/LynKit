import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shape_polygon
 * @source figma
 */
const Iconshapepolygon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M20.7949 19.1828L12.1881 3.46617C12.1068 3.31769 11.8936 3.31768 11.8122 3.46617L3.20553 19.1828C3.12732 19.3256 3.23066 19.5 3.39347 19.5H20.6069C20.7697 19.5 20.8731 19.3256 20.7949 19.1828ZM13.5038 2.74569C12.8533 1.55784 11.1471 1.55784 10.4966 2.74569L1.88988 18.4623C1.26427 19.6047 2.09097 21 3.39347 21H20.6069C21.9094 21 22.7361 19.6047 22.1105 18.4623L13.5038 2.74569Z"
        fill={color}
      />
    </svg>
  );
});

Iconshapepolygon.displayName = 'Iconshapepolygon';

export default Iconshapepolygon;
