import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_arrow_left
 * @source figma
 */
const Iconhbarrowleft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.879 5.0568C14.4885 4.66629 13.8554 4.66628 13.4649 5.0568L7.14071 11.381C6.75031 11.7715 6.7503 12.4046 7.14071 12.7951L13.2872 18.9435C13.6776 19.3339 14.3107 19.3337 14.7013 18.9435C15.0917 18.5532 15.0923 17.9201 14.7022 17.5295L9.2618 12.0881L14.879 6.47087C15.2695 6.08034 15.2695 5.44732 14.879 5.0568Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbarrowleft.displayName = 'Iconhbarrowleft';

export default Iconhbarrowleft;
