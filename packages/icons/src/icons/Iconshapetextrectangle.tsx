import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * shape_text_rectangle
 * @source figma
 */
const Iconshapetextrectangle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19L4.5 5C4.5 4.72386 4.72386 4.5 5 4.5L19 4.5C19.2761 4.5 19.5 4.72386 19.5 5Z"
        fill={color}
      />
    </svg>
  );
});

Iconshapetextrectangle.displayName = 'Iconshapetextrectangle';

export default Iconshapetextrectangle;
