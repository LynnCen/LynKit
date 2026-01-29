import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * volume
 * @source figma
 */
const Iconvolume = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M13.5 21.2525L6.475 16.999L3 17C2.44772 17 2 16.5523 2 16V7.99998C2 7.44769 2.44772 6.99998 3 6.99998L6.667 6.999L14.2428 2.45432C14.4795 2.31225 14.7867 2.38903 14.9287 2.62582C14.9754 2.70353 15 2.79245 15 2.88307V21.2734C15 21.5496 14.7761 21.7734 14.5 21.7734C14.4087 21.7734 14.3191 21.7484 14.2411 21.7011L13.5 21.2525ZM6.89353 15.4989L3.5 15.4998V8.49984L7.0826 8.49888L13.5 4.64911V19.4989L6.89353 15.4989ZM22 12.5C22 15.369 19.8032 17.7249 17 17.9776V16.4802C19.0213 16.2795 20.6 14.5741 20.6 12.5C20.6 10.4258 19.0213 8.72042 17 8.51973V7.0224C19.8032 7.27501 22 9.63096 22 12.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconvolume.displayName = 'Iconvolume';

export default Iconvolume;
