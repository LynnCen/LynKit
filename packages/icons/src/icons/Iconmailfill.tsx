import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * mail_fill
 * @source figma
 */
const Iconmailfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4.5 4H19.5C20.6063 4 21.5133 4.88359 21.5273 5.96641L12.1391 11.5281L2.48203 5.97344C2.49141 4.88594 3.39141 4 4.5 4ZM2.48203 8.10156L2.47266 18C2.47266 19.0945 3.38438 19.9898 4.5 19.9898H19.5C20.6156 19.9898 21.5273 19.0945 21.5273 18V8.09688L12.3781 13.3984C12.2258 13.4805 12.043 13.4805 11.893 13.3984L2.48203 8.10156Z"
        fill={color}
      />
    </svg>
  );
});

Iconmailfill.displayName = 'Iconmailfill';

export default Iconmailfill;
