import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * feedback_line
 * @source figma
 */
const Iconfeedbackline = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M18 4H6C5.72386 4 5.5 4.22386 5.5 4.5V19.5C5.5 19.7761 5.72386 20 6 20H18C18.2761 20 18.5 19.7761 18.5 19.5V17.0013L20 15.31V19.5C20 20.6046 19.1046 21.5 18 21.5H6C4.89543 21.5 4 20.6046 4 19.5V4.5C4 3.39543 4.89543 2.5 6 2.5H18C19.1046 2.5 20 3.39543 20 4.5V9.28165L18.5 10.9729V4.5C18.5 4.22386 18.2761 4 18 4Z"
        fill={color}
      />
      <path d="M7.99992 8.25L15.9999 8.25043L16 6.75043L8 6.75L7.99992 8.25Z" fill={color} />
      <path
        d="M15.5523 16.1441L20.7347 10.3009L21.8569 11.2962L16.6746 17.1394L15.5523 16.1441Z"
        fill={color}
      />
      <path d="M12 17.25H8V15.75H12V17.25Z" fill={color} />
      <path d="M15.9999 12.7504L7.99992 12.75L8 11.25L16 11.2504L15.9999 12.7504Z" fill={color} />
    </svg>
  );
});

Iconfeedbackline.displayName = 'Iconfeedbackline';

export default Iconfeedbackline;
