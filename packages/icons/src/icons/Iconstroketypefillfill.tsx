import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * stroke_type_fill_fill
 * @source figma
 */
const Iconstroketypefillfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21 6.00001C21 6.55229 20.5523 7.00001 20 7.00001H19.9512C19.3989 7.00001 18.9512 6.55229 18.9512 6C18.9512 5.44772 19.3989 5.00001 19.9512 5.00001L20 5.00001C20.5523 5.00001 21 5.44772 21 6.00001ZM17.0488 6C17.0488 6.55229 16.6011 7 16.0488 7L15.9512 7C15.3989 7 14.9512 6.55229 14.9512 6C14.9512 5.44772 15.3989 5 15.9512 5L16.0488 5C16.6011 5 17.0488 5.44772 17.0488 6ZM13.0488 6C13.0488 6.55229 12.6011 7 12.0488 7H11.9512C11.3989 7 10.9512 6.55229 10.9512 6C10.9512 5.44772 11.3989 5 11.9512 5L12.0488 5C12.6011 5 13.0488 5.44772 13.0488 6ZM9.04878 6C9.04878 6.55229 8.60106 7 8.04878 7L7.95122 7C7.39893 7 6.95122 6.55229 6.95122 6C6.95122 5.44772 7.39893 5 7.95122 5H8.04878C8.60106 5 9.04878 5.44772 9.04878 6ZM5.04878 6C5.04878 6.55229 4.60106 7 4.04878 7H4C3.44771 7 3 6.55228 3 6C3 5.44771 3.44772 5 4 5H4.04878C4.60106 5 5.04878 5.44772 5.04878 6ZM3 17L21 17V19L3 19V17ZM3 11H7V13H3V11ZM10 11H14V13H10V11ZM17 11H21V13H17V11Z"
        fill={color}
      />
    </svg>
  );
});

Iconstroketypefillfill.displayName = 'Iconstroketypefillfill';

export default Iconstroketypefillfill;
