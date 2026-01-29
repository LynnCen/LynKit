import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * layerdown_bottom
 * @source figma
 */
const Iconlayerdownbottom = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M12.7185 3.60063L19.8677 7.50017L15.0002 10.1552V11.8638L21.0688 8.55364C21.9026 8.09882 21.9026 6.90151 21.0688 6.44669L13.4367 2.28379C12.5413 1.79538 11.4591 1.79538 10.5636 2.28379L2.93159 6.44675C2.09775 6.90157 2.09775 8.09887 2.93159 8.55369L9.0002 11.8639V10.1552L4.13271 7.50022L11.2819 3.60064C11.7296 3.35643 12.2708 3.35643 12.7185 3.60063ZM2.93153 12.0488C2.19667 11.648 2.10944 10.6705 2.66985 10.1327C2.74529 10.2051 2.83246 10.2695 2.93137 10.3234L4.14793 10.987L4.13264 10.9954L9.00014 13.6504V15.359L2.93153 12.0488ZM15.0001 15.359L21.0687 12.0488C21.8037 11.648 21.8908 10.6703 21.3302 10.1326C21.2548 10.205 21.1675 10.2695 21.0686 10.3234L19.8522 10.9869L19.8676 10.9954L15.0001 13.6504V15.359ZM12.5148 21.5455L16.5148 17.7713L15.4854 16.6803L12.7501 19.2612V7.50001H11.2501V19.2612L8.51485 16.6803L7.48544 17.7713L11.4854 21.5455L12.0001 22.0312L12.5148 21.5455Z"
        fill={color}
      />
    </svg>
  );
});

Iconlayerdownbottom.displayName = 'Iconlayerdownbottom';

export default Iconlayerdownbottom;
