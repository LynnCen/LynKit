import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * image_broken
 * @source figma
 */
const Iconimagebroken = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17 10.5L19.7022 9.48666C20.4829 9.19393 21 8.44769 21 7.614V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H9.5L11.5 16L15.5 14L17 10.5ZM14.3377 12.9041L13.5708 13.2876L8.47612 9.21187L4.5 13.188V5C4.5 4.72386 4.72386 4.5 5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V7.614C19.5 7.82242 19.3707 8.00898 19.1756 8.08216L15.8736 9.3204L14.3377 12.9041ZM8.58745 11.2219L12.0931 14.0264L10.3191 14.9134L8.48445 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V15.3093L8.58745 11.2219Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.0057 18.2422L21.0057 10.2211L18.0014 11.2951L16.2496 15.0486L12.9057 16.6468L11.1995 20.9922L18.2557 20.9922C19.7745 20.9922 21.0057 19.761 21.0057 18.2422ZM17.3814 16.1701L19.0958 12.4968L19.5057 12.3503L19.5057 18.2422C19.5057 18.9326 18.9461 19.4922 18.2557 19.4922L13.3999 19.4922L14.0859 17.7452L17.3814 16.1701Z"
        fill={color}
      />
    </svg>
  );
});

Iconimagebroken.displayName = 'Iconimagebroken';

export default Iconimagebroken;
