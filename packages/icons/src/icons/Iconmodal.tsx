import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * modal
 * @source figma
 */
const Iconmodal = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19 4.25C20.5188 4.25 21.75 5.48122 21.75 7V17C21.75 18.5188 20.5188 19.75 19 19.75H5C3.48122 19.75 2.25 18.5188 2.25 17V7C2.25 5.48122 3.48122 4.25 5 4.25H19ZM12.9473 18.25H19C19.6904 18.25 20.25 17.6904 20.25 17V15.5986H12.9473V18.25ZM3.75 17C3.75 17.6904 4.30964 18.25 5 18.25H11.4473V15.5986H3.75V17ZM5 5.75C4.30964 5.75 3.75 6.30964 3.75 7V14.0986H20.25V7C20.25 6.30964 19.6904 5.75 19 5.75H5Z"
        fill="black"
      />
    </svg>
  );
});

Iconmodal.displayName = 'Iconmodal';

export default Iconmodal;
