import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * eraser_brush
 * @source figma
 */
const Iconeraserbrush = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M14.4419 19.999L22.0064 12.4346C22.7874 11.6536 22.7874 10.3872 22.0064 9.6062L15.6459 3.24576C14.8649 2.46471 13.5985 2.46471 12.8175 3.24576L4.33222 11.731C2.77012 13.2931 2.77012 15.8258 4.33222 17.3879L8.44337 21.499H12.8175L14.4419 19.999ZM7.19083 10.9937L5.39288 12.7917C4.41657 13.768 4.41657 15.3509 5.39288 16.3272L9.06468 19.999H12.3206L14.2584 18.0613L7.19083 10.9937ZM15.319 17.0006L8.25149 9.93309L13.8782 4.30642C14.0734 4.11116 14.39 4.11116 14.5853 4.30642L20.9457 10.6669C21.141 10.8621 21.141 11.1787 20.9457 11.374L15.319 17.0006Z"
        fill={color}
      />
    </svg>
  );
});

Iconeraserbrush.displayName = 'Iconeraserbrush';

export default Iconeraserbrush;
