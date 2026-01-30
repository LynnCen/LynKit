import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * abbreviation_text
 * @source figma
 */
const Iconabbreviationtext = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19 3.00024C20.1046 3.00024 21 3.89568 21 5.00024L21 19.0002C21 20.1048 20.1046 21.0002 19 21.0002L5 21.0002C3.89543 21.0002 3 20.1048 3 19.0002L3 5.00024C3 3.89567 3.89543 3.00024 5 3.00024L19 3.00024ZM5 4.50024C4.72386 4.50024 4.5 4.7241 4.5 5.00024L4.5 19.0002C4.5 19.2764 4.72386 19.5002 5 19.5002L19 19.5002C19.2761 19.5002 19.5 19.2764 19.5 19.0002L19.5 5.00024C19.5 4.7241 19.2761 4.50024 19 4.50024L5 4.50024ZM10.25 15.0002C10.6642 15.0002 11 15.336 11 15.7502C10.9999 16.1643 10.6641 16.5002 10.25 16.5002H7.25C6.83587 16.5002 6.50013 16.1643 6.5 15.7502C6.5 15.336 6.83579 15.0002 7.25 15.0002L10.25 15.0002ZM12.25 12.0002C12.6642 12.0002 13 12.336 13 12.7502C12.9999 13.1643 12.6641 13.5002 12.25 13.5002L7.25 13.5002C6.83587 13.5002 6.50013 13.1643 6.5 12.7502C6.5 12.336 6.83579 12.0002 7.25 12.0002L12.25 12.0002Z"
        fill={color}
      />
    </svg>
  );
});

Iconabbreviationtext.displayName = 'Iconabbreviationtext';

export default Iconabbreviationtext;
