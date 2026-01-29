import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * close_multiple
 * @source figma
 */
const Iconclosemultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        opacity="0.6"
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7178 6.69659L17.6572 5.63593L12 11.2931L6.34283 5.63593L5.28217 6.69659L10.9393 12.3538L5.63635 17.6567L6.69701 18.7174L12 13.4144L17.303 18.7174L18.3636 17.6567L13.0607 12.3538L18.7178 6.69659Z"
        fill={color}
      />
    </svg>
  );
});

Iconclosemultiple.displayName = 'Iconclosemultiple';

export default Iconclosemultiple;
