import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * position_fast
 * @source figma
 */
const Iconpositionfast = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.25 2V4.03469C7.43032 4.38984 4.38984 7.43032 4.03469 11.25H2V12.75H4.03469C4.38984 16.5697 7.43032 19.6102 11.25 19.9653V22H12.75V19.9653C16.5697 19.6102 19.6102 16.5697 19.9653 12.75H22V11.25H19.9653C19.6102 7.43032 16.5697 4.38984 12.75 4.03469V2H11.25ZM18.4572 11.25C18.1136 8.2595 15.7405 5.88638 12.75 5.5428V9H11.25V5.5428C8.2595 5.88638 5.88638 8.2595 5.5428 11.25H9V12.75H5.5428C5.88638 15.7405 8.2595 18.1136 11.25 18.4572V15H12.75V18.4572C15.7405 18.1136 18.1136 15.7405 18.4572 12.75H15V11.25H18.4572Z"
        fill={color}
      />
    </svg>
  );
});

Iconpositionfast.displayName = 'Iconpositionfast';

export default Iconpositionfast;
