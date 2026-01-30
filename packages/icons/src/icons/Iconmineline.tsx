import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * mine_line
 * @source figma
 */
const Iconmineline = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M17.5 9C17.5 12.0376 15.0375 14.5 12 14.5C8.96239 14.5 6.49996 12.0376 6.49996 9C6.49996 5.96243 8.96239 3.5 12 3.5C15.0375 3.5 17.5 5.96243 17.5 9ZM19 9C19 12.866 15.8659 16 12 16C8.13396 16 4.99996 12.866 4.99996 9C4.99996 5.13401 8.13396 2 12 2C15.8659 2 19 5.13401 19 9ZM20.0098 16.7449C17.8336 18.6241 15.0425 19.75 12 19.75C8.95745 19.75 6.16635 18.6241 3.99015 16.7449L3.00977 17.8801C5.44342 19.9817 8.57815 21.25 12 21.25C15.4218 21.25 18.5565 19.9817 20.9901 17.8801L20.0098 16.7449Z"
        fill={color}
      />
    </svg>
  );
});

Iconmineline.displayName = 'Iconmineline';

export default Iconmineline;
