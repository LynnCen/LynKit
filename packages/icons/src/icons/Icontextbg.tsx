import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_bg
 * @source figma
 */
const Icontextbg = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5H5ZM17 17H15.4463L14.2236 14.084H9.92383L8.56641 17H7L11.4307 7H12.9912L17 17ZM10.6025 12.626H13.6133L12.1865 9.22266L10.6025 12.626Z"
        fill={color}
      />
    </svg>
  );
});

Icontextbg.displayName = 'Icontextbg';

export default Icontextbg;
