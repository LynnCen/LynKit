import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * bulb
 * @source figma
 */
const Iconbulb = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M20 10C20 13.4039 17.8742 16.3112 14.8778 17.4668H12H9.12225C6.1258 16.3112 4 13.4039 4 10C4 5.5817 7.5817 2 12 2C16.4183 2 20 5.5817 20 10Z"
        fill={color}
      />
      <path
        d="M9 7.75C9.41421 7.75 9.75 8.08579 9.75 8.5V10.2865L11.6646 9.32918C11.8757 9.22361 12.1243 9.22361 12.3354 9.32918L14.25 10.2865V8.5C14.25 8.08579 14.5858 7.75 15 7.75C15.4142 7.75 15.75 8.08579 15.75 8.5V11.5C15.75 11.7599 15.6154 12.0013 15.3943 12.138C15.1732 12.2746 14.8971 12.2871 14.6646 12.1708L12 10.8385L9.33541 12.1708C9.10292 12.2871 8.82681 12.2746 8.6057 12.138C8.38459 12.0013 8.25 11.7599 8.25 11.5V8.5C8.25 8.08579 8.58579 7.75 9 7.75Z"
        fill={color}
      />
      <path
        d="M9.46191 21.5415C9.48346 21.8007 9.70011 22 9.96016 22H14.04C14.3001 22 14.5167 21.8007 14.5383 21.5415L14.8779 17.4668H13.3727L13.1199 20.5H10.8803L10.6275 17.4668H9.12231L9.46191 21.5415Z"
        fill={color}
      />
    </svg>
  );
});

Iconbulb.displayName = 'Iconbulb';

export default Iconbulb;
