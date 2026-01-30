import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_bold
 * @source figma
 */
const Icontextbold = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M5.9001 7.1501H4.1001V6.0001C4.1001 4.39847 5.39847 3.1001 7.0001 3.1001H17.0001C18.6017 3.1001 19.9001 4.39847 19.9001 6.0001V7.1501H18.1001V6.0001C18.1001 5.39258 17.6076 4.9001 17.0001 4.9001H12.9001V19.1001H15.1501V20.9001H8.8501V19.1001H11.1001V4.9001H7.0001C6.39258 4.9001 5.9001 5.39258 5.9001 6.0001V7.1501Z"
        fill={color}
      />
    </svg>
  );
});

Icontextbold.displayName = 'Icontextbold';

export default Icontextbold;
