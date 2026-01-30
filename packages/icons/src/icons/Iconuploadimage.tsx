import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * upload_image
 * @source figma
 */
const Iconuploadimage = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V11H19.5V5C19.5 4.72386 19.2761 4.5 19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V12.9394L8.47927 8.96013L12.8993 13.0401L15.9793 9.96013L18 11.8254V13.8668L16.0208 12.0399L14.0024 14.0584L15.5088 15.4489L14.4913 16.5511L8.52085 11.0399L4.5 15.0607V19C4.5 19.2761 4.72386 19.5 5 19.5H16V21H5C3.89543 21 3 20.1046 3 19V5Z"
        fill={color}
      />
      <path
        d="M18.5303 16.8713L16.8107 18.591L15.75 17.5303L19.2803 14L22.8107 17.5303L21.75 18.591L20.0303 16.8713L20.0303 21.0607H18.5303V16.8713Z"
        fill={color}
      />
    </svg>
  );
});

Iconuploadimage.displayName = 'Iconuploadimage';

export default Iconuploadimage;
