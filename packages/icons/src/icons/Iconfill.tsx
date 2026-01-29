import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * fill
 * @source figma
 */
const Iconfill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.7022 4.79807H18.1416L14.0003 8.93934L15.061 10L19.2022 5.85878V9.29807H20.7022V5.29807C20.7022 4.1935 19.8067 3.29807 18.7022 3.29807H14.7022V4.79807Z"
        fill={color}
      />
      <path
        d="M4.7981 14.7018H3.2981V18.7018C3.2981 19.8064 4.19353 20.7018 5.2981 20.7018H9.2981V19.2018H5.85881L10 15.0606L8.93937 14L4.7981 18.1412V14.7018Z"
        fill={color}
      />
      <path
        d="M19.2022 14.7018V18.1412L15.0609 14L14.0002 15.0606L18.1415 19.2018H14.7022V20.7018H18.7022C19.8067 20.7018 20.7022 19.8064 20.7022 18.7018V14.7018H19.2022Z"
        fill={color}
      />
      <path
        d="M9.2981 4.79807V3.29807H5.2981C4.19353 3.29807 3.2981 4.1935 3.2981 5.29806V9.29807H4.7981L4.7981 5.85878L8.93931 10L9.99997 8.93934L5.8587 4.79807L9.2981 4.79807Z"
        fill={color}
      />
    </svg>
  );
});

Iconfill.displayName = 'Iconfill';

export default Iconfill;
