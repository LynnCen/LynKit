import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * comment
 * @source figma
 */
const Iconcomment = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.57151 15.5722L3.77169 18.972L8.07646 18.1893L8.55028 18.4589C9.7142 19.1212 11.0606 19.5 12.5 19.5C16.9183 19.5 20.5 15.9183 20.5 11.5C20.5 7.08172 16.9183 3.5 12.5 3.5C8.08172 3.5 4.5 7.08172 4.5 11.5C4.5 12.7167 4.77058 13.866 5.25343 14.8946L5.57151 15.5722ZM3.89558 15.532L1.96421 19.1802C1.57363 19.918 2.20557 20.7813 3.02689 20.632L7.80843 19.7626C9.19247 20.5502 10.7937 21 12.5 21C17.7467 21 22 16.7467 22 11.5C22 6.25329 17.7467 2 12.5 2C7.25329 2 3 6.25329 3 11.5C3 12.9415 3.32106 14.308 3.89558 15.532Z"
        fill={color}
      />
    </svg>
  );
});

Iconcomment.displayName = 'Iconcomment';

export default Iconcomment;
