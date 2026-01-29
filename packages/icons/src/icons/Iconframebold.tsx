import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * frame_bold
 * @source figma
 */
const Iconframebold = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M4.99961 2.8501C3.8122 2.8501 2.84961 3.81269 2.84961 5.0001V19.0001C2.84961 20.1875 3.8122 21.1501 4.99961 21.1501H18.9996C20.187 21.1501 21.1496 20.1875 21.1496 19.0001V5.0001C21.1496 3.81269 20.187 2.8501 18.9996 2.8501H4.99961ZM4.64961 5.0001C4.64961 4.8068 4.80631 4.6501 4.99961 4.6501H18.9996C19.1929 4.6501 19.3496 4.8068 19.3496 5.0001V19.0001C19.3496 19.1934 19.1929 19.3501 18.9996 19.3501H4.99961C4.80631 19.3501 4.64961 19.1934 4.64961 19.0001V5.0001ZM7.99961 6.8501C7.36448 6.8501 6.84961 7.36497 6.84961 8.0001V16.0001C6.84961 16.6352 7.36448 17.1501 7.99961 17.1501H15.9996C16.6347 17.1501 17.1496 16.6352 17.1496 16.0001V8.0001C17.1496 7.36497 16.6347 6.8501 15.9996 6.8501H7.99961ZM8.64961 15.3501V8.6501H15.3496V15.3501H8.64961Z"
        fill={color}
      />
    </svg>
  );
});

Iconframebold.displayName = 'Iconframebold';

export default Iconframebold;
