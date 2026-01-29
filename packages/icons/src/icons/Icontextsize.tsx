import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_size
 * @source figma
 */
const Icontextsize = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M13.5 4C14.1904 4 14.75 4.55964 14.75 5.25V8.11035H13.25V5.5H9.09961V18.3779H11.75V19.8779H4.75V18.3779H7.59961V5.5H3.25V8.11035H1.75V5.25C1.75 4.55964 2.30964 4 3 4H13.5ZM21 11C21.6904 11 22.25 11.5596 22.25 12.25V13.8779H20.75V12.5H18.3506V18.3779H19.5V19.8779H15.5V18.3779H16.8506V12.5H14.75V13.8779H13.25V12.25C13.25 11.5596 13.8096 11 14.5 11H21Z"
        fill={color}
      />
    </svg>
  );
});

Icontextsize.displayName = 'Icontextsize';

export default Icontextsize;
