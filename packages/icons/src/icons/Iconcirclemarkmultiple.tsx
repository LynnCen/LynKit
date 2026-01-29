import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * circlemark_multiple
 * @source figma
 */
const Iconcirclemarkmultiple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.42857 0C1.53502 0 0 1.53502 0 3.42857V20.5714C0 22.465 1.53502 24 3.42857 24H20.5714C22.465 24 24 22.465 24 20.5714V3.42857C24 1.53502 22.465 0 20.5714 0H3.42857ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
        fill={color}
      />
    </svg>
  );
});

Iconcirclemarkmultiple.displayName = 'Iconcirclemarkmultiple';

export default Iconcirclemarkmultiple;
