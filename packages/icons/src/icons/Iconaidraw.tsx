import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * ai_draw
 * @source figma
 */
const Iconaidraw = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M19.0945 2.27738C19.0121 2.68973 18.6897 3.01206 18.2774 3.09453L16.8143 3.38714C16.1444 3.52112 16.1444 4.47888 16.8143 4.61287L18.2774 4.90548C18.6897 4.98795 19.0121 5.31027 19.0945 5.72263L19.3871 7.18569C19.5211 7.85559 20.4789 7.85559 20.6129 7.18569L20.9055 5.72263C20.9879 5.31027 21.3103 4.98795 21.7226 4.90548L23.1857 4.61287C23.8556 4.47889 23.8556 3.52112 23.1857 3.38714L21.7226 3.09453C21.3103 3.01206 20.9879 2.68973 20.9055 2.27738L20.6129 0.814318C20.4789 0.144415 19.5211 0.144413 19.3871 0.814316L19.0945 2.27738Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4.5H13V3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19L21 11H19.5V14.21L15.9793 10.9601L12.8993 14.0401L8.47932 9.96012L4.5 13.9394V5C4.5 4.72386 4.72386 4.5 5 4.5ZM19.5 16.2514L16.0209 13.0399L14.0024 15.0584L15.5088 16.4489L14.4914 17.5511L8.5209 12.0399L4.5 16.0608V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V16.2514Z"
        fill="black"
      />
    </svg>
  );
});

Iconaidraw.displayName = 'Iconaidraw';

export default Iconaidraw;
