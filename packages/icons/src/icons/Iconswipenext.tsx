import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * swipe_next
 * @source figma
 */
const Iconswipenext = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M9.41502 0.829094C9.76221 0.655746 10.1793 0.776806 10.3828 1.09765L10.4209 1.16503L15.1679 10.6582C15.5902 11.5028 15.5902 12.4972 15.1679 13.3418L10.4209 22.835C10.2357 23.2053 9.78543 23.3558 9.41502 23.1709C9.04466 22.9857 8.89414 22.5354 9.07908 22.165L13.8262 12.6709C14.0373 12.2486 14.0373 11.7514 13.8262 11.3291L9.07908 1.83495L9.04881 1.76464C8.91418 1.40925 9.06776 1.00272 9.41502 0.829094Z"
        fill={color}
      />
    </svg>
  );
});

Iconswipenext.displayName = 'Iconswipenext';

export default Iconswipenext;
