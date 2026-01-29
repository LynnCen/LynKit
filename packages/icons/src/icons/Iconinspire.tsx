import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * inspire
 * @source figma
 */
const Iconinspire = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.75 5V13.201L16.8505 6.09878L18.1495 6.84878L14.049 13.9511L21.1514 9.85051L21.9014 11.1495L14.7992 15.25H23V16.75H14.7991L14.8027 16.7521H9.19754L9.20112 16.75H1V15.25H9.20102L2.09883 11.1495L2.84883 9.85051L9.95093 13.9509L5.85048 6.84872L7.14952 6.09872L11.25 13.201V5H12.75Z"
        fill="black"
      />
    </svg>
  );
});

Iconinspire.displayName = 'Iconinspire';

export default Iconinspire;
