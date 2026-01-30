import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * text_color_empty_static
 * @source figma
 */
const Icontextcoloremptystatic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M20.696 21H17.9699L16.1221 16.75H7.87859L6.03076 21H3.30469L11.1308 3H12.8699L20.696 21ZM8.96554 14.25L12.0003 7.26997L15.0351 14.25H8.96554Z"
        fill="white"
      />
      <path
        d="M9.39177 7L7.21786 12H9.94393L12.0001 7.27075V7H14.6092L12.87 3H12.0001V7H9.39177Z"
        fill="#F0F0F0"
      />
      <path
        d="M16.7831 12H14.057L15.0353 14.25H12.0001V16.75H16.1222L16.2309 17H17.0001V18.7692L17.97 21H20.6961L18.957 17H17.0001V12.4992L16.7831 12Z"
        fill="#F0F0F0"
      />
      <path d="M7.77002 17H7.00013V12.5008L5.04395 17H7.00013V18.7707L7.77002 17Z" fill="#F0F0F0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.20294 14.75H15.7977L12.0003 6.01597L8.20294 14.75ZM8.96554 14.25L12.0003 7.26997L15.0351 14.25H8.96554Z"
        fill="black"
        fillOpacity={0.24}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9699 21L16.1221 16.75H7.87859L6.03076 21H3.30469L11.1308 3H12.8699L20.696 21H17.9699ZM12.5421 3.5L19.9334 20.5H18.2977L16.4499 16.25H7.55076L5.70294 20.5H4.06729L11.4586 3.5H12.5421Z"
        fill="black"
        fillOpacity={0.24}
      />
    </svg>
  );
});

Icontextcoloremptystatic.displayName = 'Icontextcoloremptystatic';

export default Icontextcoloremptystatic;
