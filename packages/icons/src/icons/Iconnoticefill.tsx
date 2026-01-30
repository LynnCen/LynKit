import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * notice_fill
 * @source figma
 */
const Iconnoticefill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.0003 2.05273C7.79914 2.05273 4.39341 5.45846 4.39341 9.65964V14.7286C4.39341 14.7483 4.38765 14.7676 4.37685 14.784L2.95455 16.9513C2.51815 17.6164 2.99519 18.5 3.7906 18.5H20.1737C20.9638 18.5 21.4418 17.6268 21.016 16.9611L19.6231 14.7837C19.6128 14.7674 19.6072 14.7485 19.6072 14.7292V9.65964C19.6072 5.45846 16.2015 2.05273 12.0003 2.05273ZM12.0001 22C10.5136 22 9.27966 20.9189 9.04162 19.5H14.9587C14.7206 20.9189 13.4866 22 12.0001 22Z"
        fill={color}
      />
    </svg>
  );
});

Iconnoticefill.displayName = 'Iconnoticefill';

export default Iconnoticefill;
