import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * switch
 * @source figma
 */
const Iconswitch = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.0303 4L12.5607 4.53033L17.0607 9.03033L16 10.091L12.0303 6.12132L8.06066 10.091L7 9.03033L11.5 4.53033L12.0303 4ZM12.0303 19.1516L11.5 18.6213L7.00001 14.1213L8.06067 13.0606L12.0303 17.0303L16 13.0606L17.0607 14.1213L12.5607 18.6213L12.0303 19.1516Z"
        fill={color}
      />
    </svg>
  );
});

Iconswitch.displayName = 'Iconswitch';

export default Iconswitch;
