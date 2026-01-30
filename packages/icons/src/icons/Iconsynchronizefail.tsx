import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * synchronize_fail
 * @source figma
 */
const Iconsynchronizefail = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12H16.75L19.25 8.5L21.75 12H20C20 16.4183 16.4183 20 12 20C9.79086 20 7.79086 19.1046 6.34315 17.6569L7.40381 16.5962C8.58007 17.7725 10.2051 18.5 12 18.5Z"
        fill={color}
      />
      <path
        d="M18.1348 6.86515C16.6673 5.11371 14.4637 4 12 4C7.58172 4 4 7.58172 4 12H2.25L4.75 15.5L7.25 12H5.5C5.5 8.41015 8.41015 5.5 12 5.5C14.0497 5.5 15.8777 6.44869 17.0691 7.93092L18.1348 6.86515Z"
        fill={color}
      />
      <path d="M11.25 8.25V13.25H12.75V8.25H11.25Z" fill={color} />
      <path d="M11.25 14.25V15.75H12.75V14.25H11.25Z" fill={color} />
    </svg>
  );
});

Iconsynchronizefail.displayName = 'Iconsynchronizefail';

export default Iconsynchronizefail;
