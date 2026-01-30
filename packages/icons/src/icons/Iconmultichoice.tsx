import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * multi_choice
 * @source figma
 */
const Iconmultichoice = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.5 5.5H5C4.72386 5.5 4.5 5.72386 4.5 6V18.5C4.5 18.7761 4.72386 19 5 19H13V20.5H5C3.89543 20.5 3 19.6046 3 18.5V6C3 4.89543 3.89543 4 5 4H17.5C18.6046 4 19.5 4.89543 19.5 6V9H18V6C18 5.72386 17.7761 5.5 17.5 5.5Z"
        fill={color}
      />
      <path
        d="M20.4697 10.9697L15.5001 15.9394L12.5304 12.9697L11.4697 14.0304L14.6162 17.1768C15.1043 17.665 15.8958 17.665 16.3839 17.1768L21.5304 12.0304L20.4697 10.9697Z"
        fill={color}
      />
    </svg>
  );
});

Iconmultichoice.displayName = 'Iconmultichoice';

export default Iconmultichoice;
