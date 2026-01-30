import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_add
 * @source figma
 */
const Iconhbadd = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.38616 5.38579C9.03905 1.73289 14.9614 1.73289 18.6143 5.38579C22.2671 9.03869 22.2672 14.961 18.6143 18.6139C14.9614 22.2668 9.03906 22.2667 5.38616 18.6139C1.73326 14.961 1.73326 9.03869 5.38616 5.38579ZM12.6846 7.45181C12.5372 6.68994 11.455 6.66851 11.2772 7.42368L10.6303 10.1811C10.5669 10.4515 10.3532 10.6612 10.0819 10.7202L7.36663 11.3073C6.61875 11.4695 6.60716 12.5325 7.35139 12.7112L10.0971 13.3709C10.3602 13.4342 10.5659 13.6399 10.6291 13.903L11.2772 16.6041C11.4576 17.3555 12.5349 17.333 12.6846 16.5749L13.2061 13.9311C13.2612 13.6529 13.4746 13.4322 13.751 13.3686L16.5998 12.7135C17.3519 12.5398 17.3405 11.4634 16.5846 11.3061L13.7662 10.7213C13.4818 10.6622 13.2611 10.4382 13.2061 10.153L12.6846 7.45181Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbadd.displayName = 'Iconhbadd';

export default Iconhbadd;
