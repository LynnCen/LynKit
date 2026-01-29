import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * gap_horizontal
 * @source figma
 */
const Icongaphorizontal = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M3.24999 19.9999V3.99999H4.74999V19.9999H3.24999Z" fill="black" />
      <path d="M19.25 19.9999V3.99999H20.7499V19.9999H19.25Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99997 5.24999C8.4812 5.24999 7.24998 6.4812 7.24998 7.99998V16C7.24998 17.5187 8.4812 18.75 9.99997 18.75H14C15.5187 18.75 16.75 17.5187 16.75 16V7.99998C16.75 6.4812 15.5187 5.24999 14 5.24999H9.99997ZM8.74998 7.99998C8.74998 7.30963 9.30962 6.74998 9.99997 6.74998H14C14.6903 6.74998 15.25 7.30963 15.25 7.99998V16C15.25 16.6903 14.6903 17.25 14 17.25H9.99997C9.30962 17.25 8.74998 16.6903 8.74998 16V7.99998Z"
        fill="black"
      />
    </svg>
  );
});

Icongaphorizontal.displayName = 'Icongaphorizontal';

export default Icongaphorizontal;
