import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * good_fill
 * @source figma
 */
const Icongoodfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.4375 1.66406C13.9665 1.6643 15.1342 3.00617 14.9502 4.50195L14.9277 4.64746L14.2754 8.25098H19.085C20.803 8.25122 22.0863 9.80322 21.7949 11.4697L21.7617 11.6309L20.3213 17.7451C19.9754 19.2126 18.665 20.251 17.1572 20.251H8.97266C7.4542 20.251 6.22318 19.0193 6.22266 17.501V10.2705C6.22266 9.29181 6.51985 8.33584 7.07422 7.5293L10.3516 2.7627L10.4434 2.63672C10.9212 2.02572 11.6561 1.66406 12.4375 1.66406Z"
        fill="black"
      />
      <path
        d="M4 9C4.38817 9 4.70747 9.29488 4.74609 9.67285L4.75 9.75V18.25C4.74999 18.6642 4.41421 19 4 19C3.58579 19 3.25001 18.6642 3.25 18.25V9.75C3.25 9.33579 3.58579 9 4 9Z"
        fill="black"
      />
    </svg>
  );
});

Icongoodfill.displayName = 'Icongoodfill';

export default Icongoodfill;
