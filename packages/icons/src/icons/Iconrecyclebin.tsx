import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * recycle_bin
 * @source figma
 */
const Iconrecyclebin = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M21 6.25V7.75H19.2414L17.2862 19.0898C17.1208 20.0491 16.2888 20.75 15.3153 20.75H8.68468C7.71123 20.75 6.87916 20.0491 6.71376 19.0898L4.75862 7.75H3V6.25H21ZM6.28075 7.75H17.7192L15.808 18.835C15.7667 19.0748 15.5587 19.25 15.3153 19.25H8.68468C8.44132 19.25 8.2333 19.0748 8.19195 18.835L6.28075 7.75Z"
        fill={color}
      />
      <path d="M15 4.75H9V3.25H15V4.75Z" fill={color} />
    </svg>
  );
});

Iconrecyclebin.displayName = 'Iconrecyclebin';

export default Iconrecyclebin;
