import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_auto_height
 * @source figma
 */
const Icontextautoheight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M19.9996 6.50287H3.99958V5.00287H19.9996V6.50287Z" fill={color} />
      <path d="M19.9996 12.7501H3.99964V11.2501H19.9996V12.7501Z" fill={color} />
      <path
        d="M4.00087 19.017L13.0009 19.0001L12.998 17.5001L3.99805 17.517L4.00087 19.017Z"
        fill={color}
      />
    </svg>
  );
});

Icontextautoheight.displayName = 'Icontextautoheight';

export default Icontextautoheight;
