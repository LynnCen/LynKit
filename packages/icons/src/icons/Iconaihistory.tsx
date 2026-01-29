import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ai_history
 * @source figma
 */
const Iconaihistory = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C7.80195 21.5 4.24252 18.7761 2.98633 15H4.58398C5.77097 17.9314 8.64295 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.14365 4 6.63853 5.49763 5.22363 7.75H9V9.25H2.75V3H4.25V6.51074C5.97046 4.08448 8.799 2.5 12 2.5Z"
        fill="black"
      />
      <path
        d="M12.6875 12.4717L16.4395 15.4736L15.5811 16.5469L11.3125 13.1328V7.1875H12.6875V12.4717Z"
        fill="black"
      />
    </svg>
  );
});

Iconaihistory.displayName = 'Iconaihistory';

export default Iconaihistory;
