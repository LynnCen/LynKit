import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * relation
 * @source figma
 */
const Iconrelation = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.5644 5.5061L13.4356 6.49386L15.8472 9.24998H5V10.75H19.1528L14.5644 5.5061Z"
        fill={color}
      />
      <path
        d="M4.84717 13.25L9.43557 18.4939L10.5644 17.5061L8.15282 14.75H19V13.25H4.84717Z"
        fill={color}
      />
    </svg>
  );
});

Iconrelation.displayName = 'Iconrelation';

export default Iconrelation;
