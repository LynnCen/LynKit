import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shape_text_rectangle_w1_h1_fillet
 * @source figma
 */
const Iconshapetextrectanglew1h1fillet = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M10.0039 16.25H13.9949V15.808C13.6222 15.808 13.3449 15.782 13.1629 15.73C12.9809 15.6693 12.8596 15.548 12.7989 15.366C12.7469 15.1753 12.7209 14.885 12.7209 14.495V8.333H13.4619C13.9472 8.333 14.3069 8.385 14.5409 8.489C14.7749 8.593 14.9439 8.775 15.0479 9.035C15.1519 9.28633 15.2516 9.65033 15.3469 10.127H15.8279L15.7239 7.709H8.30089L8.15789 10.127H8.63889C8.73422 9.65033 8.83389 9.28633 8.93789 9.035C9.04189 8.775 9.21089 8.593 9.44489 8.489C9.68756 8.385 10.0472 8.333 10.5239 8.333H11.2779V14.495C11.2779 14.885 11.2476 15.1753 11.1869 15.366C11.1262 15.548 11.0049 15.6693 10.8229 15.73C10.6496 15.782 10.3766 15.808 10.0039 15.808V16.25Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3H8ZM16 4.5H8C6.067 4.5 4.5 6.067 4.5 8V16C4.5 17.933 6.067 19.5 8 19.5H16C17.933 19.5 19.5 17.933 19.5 16V8C19.5 6.067 17.933 4.5 16 4.5Z"
        fill={color}
      />
    </svg>
  );
});

Iconshapetextrectanglew1h1fillet.displayName = 'Iconshapetextrectanglew1h1fillet';

export default Iconshapetextrectanglew1h1fillet;
