import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * hb_share
 * @source figma
 */
const Iconhbshare = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d="M11.3975 5.18646C11.3977 3.64553 13.153 2.79717 14.3545 3.69428L14.4688 3.78607L20.6543 9.15814C21.5054 9.89769 21.5059 11.2203 20.6543 11.9599L14.4688 17.332C13.3054 18.3417 11.513 17.5734 11.4023 16.0781L11.3975 15.9316V14.332C8.89632 14.7409 6.69374 16.5394 5.9541 18.7988C5.79818 19.2738 5.40622 19.6591 4.89258 19.7617C4.32296 19.8753 3.74128 19.6068 3.46094 19.0527C3.08996 18.3192 2.79067 17.3167 2.72168 16.3788L2.70703 15.9814C2.70713 11.2279 6.84302 7.36721 11.3975 6.8349V5.18646ZM4.71777 16.248C4.72706 16.3679 4.74353 16.4912 4.76367 16.6162C6.29728 14.0291 9.26894 12.274 12.3877 12.2451L13.3975 12.2353V15.6132L19.2158 10.5585L13.3975 5.50385V8.76264L12.4062 8.77143C8.40611 8.80525 4.70714 12.146 4.70703 15.9814L4.71777 16.248Z"
        fill="black"
      />
    </svg>
  );
});

Iconhbshare.displayName = 'Iconhbshare';

export default Iconhbshare;
