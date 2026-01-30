import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_style
 * @source figma
 */
const Icontextstyle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M7.25 4.25C9.59721 4.25 11.5 6.15279 11.5 8.5C11.5 9.71759 10.9865 10.814 10.166 11.5889C11.6852 12.2368 12.75 13.7441 12.75 15.5C12.75 17.8472 10.8472 19.75 8.5 19.75H2.5V4.25H7.25ZM19.25 18.75H14.25V17.25H19.25V18.75ZM4 18.25H8.5C10.0188 18.25 11.25 17.0188 11.25 15.5C11.25 13.9812 10.0188 12.75 8.5 12.75H4V18.25ZM21.25 14.75H14.25V13.25H21.25V14.75ZM4 11.25H7.25C8.76878 11.25 10 10.0188 10 8.5C10 6.98122 8.76878 5.75 7.25 5.75H4V11.25ZM19.25 10.75H14.25V9.25H19.25V10.75ZM21.25 6.75H14.25V5.25H21.25V6.75Z"
        fill={color}
      />
    </svg>
  );
});

Icontextstyle.displayName = 'Icontextstyle';

export default Icontextstyle;
