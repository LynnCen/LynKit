import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * map_pin
 * @source figma
 */
const Iconmappin = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 13.0999C13.1046 13.0999 14 12.2044 14 11.0999C14 9.99528 13.1046 9.09985 12 9.09985C10.8954 9.09985 10 9.99528 10 11.0999C10 12.2044 10.8954 13.0999 12 13.0999Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.001 3.34973C7.75906 3.34973 4.32031 6.78848 4.32031 11.0304C4.32031 13.2887 5.29588 15.3201 6.84623 16.7244L12.0374 21.5194L17.3257 16.5656L17.3338 16.558C18.7804 15.162 19.6816 13.2008 19.6816 11.0304C19.6816 6.78848 16.2429 3.34973 12.001 3.34973ZM5.82031 11.0304C5.82031 7.61691 8.58749 4.84973 12.001 4.84973C15.4145 4.84973 18.1816 7.61691 18.1816 11.0304C18.1816 12.7752 17.4596 14.3501 16.296 15.4749L12.0302 19.4708L7.86128 15.62L7.8556 15.6148C6.60456 14.4828 5.82031 12.8487 5.82031 11.0304Z"
        fill="black"
      />
    </svg>
  );
});

Iconmappin.displayName = 'Iconmappin';

export default Iconmappin;
